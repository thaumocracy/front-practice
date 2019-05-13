import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
import keys from '../../keys'

// keys should be your unique
const authLink = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${keys.firebase}`
const signUpLink = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${keys.firebase}`

export const authStart = () => {
  return {
    type:actionTypes.AUTH_START
  }
}
export const authSuccess = (token,userId) => {
  return {
    type:actionTypes.AUTH_SUCCESS,
    idToken:token,
    userId:userId
  }
}
export const authFailed = (error) => {
  return {
    type:actionTypes.AUTH_FAILED,
    error:error
  }
}
export const logOut = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expirationDate')
  localStorage.removeItem('userId')
  return {
    type:actionTypes.LOG_OUT
  }
}
export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout( ()=> {
      dispatch(logOut())
    },expirationTime * 1000)
  }
}
export const auth = (email,password,isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
        email: email, 
        password: password,
        returnSecureToken: true
    };
    let url = signUpLink
    if(isSignUp){url = authLink}
    axios.post(url, authData)
      .then(response => {
          const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
          localStorage.setItem('token',response.data.idToken)
          localStorage.setItem('expirationDate',expirationDate)
          localStorage.setItem('userId',response.data.localId)
          dispatch(authSuccess(response.data.idToken, response.data.localId));
          dispatch(checkAuthTimeout(response.data.expiresIn))
      })
      .catch(err => {dispatch(authFailed(err.response.data.error))});
  }
}

export const setAuthRedirectPath = (path) => {
  return {
      type: actionTypes.SET_AUTH_REDIRECT_PATH,
      path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token')
    if(!token){
      dispatch(logOut())
    } else {
        const expirationDate =  new Date(localStorage.getItem('expirationDate'))
        if(expirationDate <= new Date()){
          dispatch(logOut())
        } else {
          const userId = localStorage.getItem('userId')
          dispatch(authSuccess(token,userId))
          dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime() / 1000)))
        }
    }
  }
}
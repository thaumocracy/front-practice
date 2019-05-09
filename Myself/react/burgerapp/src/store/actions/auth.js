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
    if(isSignUp){
      url = authLink
    }
    axios.post(url, authData)
      .then(response => {
          console.log(response);
          dispatch(authSuccess(response.data.idToken, response.data.localId));
          dispatch(checkAuthTimeout(response.data.expiresIn))
      })
      .catch(err => {
          console.log(`[FROM AUTH ACTION]`, err);
          dispatch(authFailed(err.response.data.error));
      });
  }
}
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

export const authSuccess = (data) => {
  return {
    type:actionTypes.AUTH_SUCCESS,
    authData:data
  }
}

export const authFailed = (error) => {
  return {
    type:actionTypes.AUTH_FAILED,
    error:error
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
    })
    .catch(err => {
        console.log(err);
        dispatch(authFailed(err));
    });
  }
}
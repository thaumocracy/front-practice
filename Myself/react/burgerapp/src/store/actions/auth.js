import * as actionTypes from './actionTypes'


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

export const auth = (email,password) => {
  return dispatch => {
    dispatch(authStart())
  }
}
import * as constants from './constants'

export const saveResult = result => {
  return {
    type:constants.STORE_RESULT,
    result:result
  }
}

export const storeResult = (result) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(saveResult(result))
    },2000)
  }
}

export const deleteResult = (id) => {
  return {
    type:constants.DELETE_RESULT,
    id:id
  }
}
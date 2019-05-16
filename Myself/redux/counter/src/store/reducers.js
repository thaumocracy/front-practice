import * as constants from './constants'

const initialState = {
  data:null,
  base:'',
  exchange:'',
  amount:null,
  pending:false,
}


const reducer = (state = initialState,action) => {
  switch(action.type){
    case constants.SET_BASE:
    return {
      ...state,
      base:action.value
    }
    case constants.SET_EXCHANGE:
    return {
      ...state,
      exchange:action.value
    }
    case constants.FETCH_PENDING:
      return {
        ...state,
        pending:action.pending
      }
    case constants.FETCH_FAILED:
      return {
        ...state,
        error:action.error
      }
    case constants.FETCH_SUCCESS:
      return {
        ...state,
        data:action.data
      }
    default:
     return state
  }
}

export default reducer
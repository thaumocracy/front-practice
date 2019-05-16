import * as constants from './constants'

const initialState = {
  data:null,
  base:null,
  exchange:null,
  amount:null,
}


const reducer = (state = initialState,action) => {
  switch(action.type){
    case constants.SET_DATA: 
      return {
        ...state,
        data:action.data
      }
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
    default:
    return state
  }
}

export default reducer
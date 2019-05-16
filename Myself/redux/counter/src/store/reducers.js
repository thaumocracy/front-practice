import * as constants from './constants'

const initialState = {
  data:null,
  base:'',
  exchange:'',
  amount:null,
  etalon: 1 
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
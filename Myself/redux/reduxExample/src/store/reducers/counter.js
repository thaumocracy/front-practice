import * as actionTypes from '../actions'

const initialState = {
  counter:0,
}

const counter = (state=initialState,action) => {
  switch(action.type){
    case actionTypes.INCREMENT : 
      return {
        ...state,
        counter:state.counter + 1
      }
    case actionTypes.DECREMENT : 
      return {
        ...state,
        counter:state.counter - 1
      }
    case actionTypes.ADD_FIVE :  
      return {
        ...state,
        counter:state.counter + action.value
      }
    case actionTypes.REMOVE_FIVE: 
      return {
        ...state,
        counter:state.counter - action.value
      }
    default :
      return state
  }
}

export default counter
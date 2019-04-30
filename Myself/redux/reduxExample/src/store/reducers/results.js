import * as actionTypes from '../actions'

const initialState = {
  results : []
}

const results = (state=initialState,action) => {
  switch(action.type){
    case actionTypes.STORE_RESULT : 
      return { 
        ...state,
        results : state.results.concat({
          id: new Date(),
          value:action.payload
        })
      }
    case actionTypes.DELETE_RESULT:
      const updatedResults = state.results.filter( item => item.id !== action.payload.id)
      return {
        ...state,
        results:updatedResults
      }
    default :
      return state
  }
}

export default results
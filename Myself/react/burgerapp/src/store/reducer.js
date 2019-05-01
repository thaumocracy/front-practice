import * as constants from './actions'

const initialState = {
  ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0,
  },
  totalPrice:4
}

const reducer = (state=initialState,action) => {
  switch(action.type){
    case constants.ADD_INGREDIENT :
      return {
        ...state,
        ingredients : {
          ...state.ingredients,
          [action.payload.ingredientName]:state.ingredients[action.payload.ingredientName] + 1
        }
      }
    case constants.REMOVE_INGREDIENT :
    return {
      ...state,
      ingredients : {
        ...state.ingredients,
        [action.payload.ingredientName]:state.ingredients[action.payload.ingredientName] - 1
      }
    }
    default : 
      return state
  }
}

export default reducer
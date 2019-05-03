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


const INGREDIENT_PRICES = {
  salad:1,
  bacon:2,
  cheese:3,
  meat:4,
}

const reducer = (state=initialState,action) => {
  switch(action.type){
    case constants.ADD_INGREDIENT :
      return {
        ...state,
        ingredients : {
          ...state.ingredients,
          [action.payload.ingredientName]:state.ingredients[action.payload.ingredientName] + 1
        },
        totalPrice : state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName]
      }
    case constants.REMOVE_INGREDIENT :
      console.log(state)
    return {
      ...state,
      ingredients : {
        ...state.ingredients,
        [action.payload.ingredientName]:state.ingredients[action.payload.ingredientName] - 1
      },
      totalPrice : state.totalPrice - INGREDIENT_PRICES[action.payload.ingredientName]
    }
    default : 
      return state
  }
}

export default reducer
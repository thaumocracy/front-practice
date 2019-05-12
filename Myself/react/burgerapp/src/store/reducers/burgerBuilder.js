import * as actionTypes from '../actions/actionTypes'

const initialState = {
  ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0,
  },
  totalPrice:4,
  building:false,
}


const INGREDIENT_PRICES = {
  salad:1,
  bacon:2,
  cheese:3,
  meat:4,
}

const reducer = (state=initialState,action) => {
  switch(action.type){
    case actionTypes.ADD_INGREDIENT :
      return {
        ...state,
        ingredients : {
          ...state.ingredients,
          [action.ingredientName]:state.ingredients[action.ingredientName] + 1
        },
        totalPrice : state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building:true,
      }
    case actionTypes.REMOVE_INGREDIENT :
      console.log(state)
    return {
      ...state,
      ingredients : {
        ...state.ingredients,
        [action.ingredientName]:state.ingredients[action.ingredientName] - 1
      },
      totalPrice : state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      building:true,
    }
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients:action.ingredients,
        totalPrice:4,
        building:false,
      }
    default : 
      return state
  }
}

export default reducer
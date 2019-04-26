const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  bananas:1,
  oranges:2,
}

const rootReducer = (state = initialState,action) => {
  switch(action.type){
    case 'MORE' : 
      return {
        ...state, bananas: state.bananas + action.value
      }
    case 'LESS' : 
      return {
        ...state, oranges: state.oranges - action.value
      }
    default :
      return state
  }
}

const store = createStore(rootReducer)

console.log(store.getState())

store.dispatch({
  type:'MORE',
  value:2
})
console.log(store.getState())
store.dispatch({
  type:'LESS',
  value:1,
})
console.log(store.getState())
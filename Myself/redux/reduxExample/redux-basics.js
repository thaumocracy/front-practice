const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter:0
}
// Reducer

const rootReducer = (state = initialState,action) => {
  switch(action.type){
    case 'INC_COUNTER' : 
      return {
        ...state,
        counter:state.counter + 1
      }
    case 'ADD_COUNTER' : 
      return {
        ...state,
        counter:state.counter + action.value
      }
    default : 
      return state
  }
}

// Store

const store = createStore(rootReducer)

// Subscriptions
store.subscribe(() => {
  console.log('[sub]',store.getState())
})

console.log(store.getState() , ' 1 ')

// Dispatch

store.dispatch({
  type:'INC_COUNTER',
})
console.log(store.getState() , ' 2 ')
store.dispatch({
  type:'ADD_COUNTER',
  value: 10
})
console.log(store.getState() , ' 3 ')


import * as constants from './constants'

const initialState = {
  persons:[]
}


const reducer = (state = initialState , action) => {
  switch(action.type){
    case constants.ADD_PERSON :
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name,
        age: action.payload.age
      }
      const newArray = state.persons.concat(newPerson)
      console.log(state)
      console.log(newArray)
      return {
        ...state,
        persons:newArray
      }
    case constants.DELETE_PERSON :
      return {
        ...state,
        persons : state.persons.filter( item => item.id !== action.payload.id)
      }
    default :
      return state
  }
}

export default reducer
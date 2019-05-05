import * as constants from './constants'

export const increment = () => {
  return {
    type:constants.INCREMENT
  }
}
export const decrement = () => {
  return {
    type:constants.DECREMENT
  }
}
export const add = (value) => {
  return {
    type:constants.ADD,
    value:value
  }
}
export const subtract = (payload) => {
  return {
    type:constants.SUBTRACT,
    value:payload.value
  }
}


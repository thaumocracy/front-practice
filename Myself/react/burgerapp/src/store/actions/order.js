import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccers = (id,orderData) => {
  return {
    type:actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId:id,
    orderData:orderData
  }
}

export const purchaseBurgerFailed = (error) => {
  return {
    type:actionTypes.PURCHASE_BURGER_FAILED,
    error:error
  }
}

export const purchaseBurgerStart = () => {
  return {
    type:actionTypes.PURCHASE_BURGER_START
  }
}


export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart())
    axios.post('/orders.json',orderData)
    .then(response => {
      dispatch(purchaseBurgerSuccers(response.data.name,orderData))
    })
    .catch(error => dispatch(purchaseBurgerFailed(error)))
  }
}
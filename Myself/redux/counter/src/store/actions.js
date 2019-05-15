import keys from '../keys'
import * as constants from '../store/constants'

const link = `http://data.fixer.io/api/latest?access_key=${keys.fixer}&symbols=GBP,FIN,EUR,DEM,DKK,MXN,AUD,CAD,THB,RUB,PLN&format=1`

export const init = () => {
  return dispatch => {
    fetch(link).then(response => response.json())
    .then(data => dispatch(setData(data)))
    .catch(error => console.log(error) )
  }
}

export const setData = data => {
  return {
    type:constants.SET_DATA,
    data:data.rates
  }
}


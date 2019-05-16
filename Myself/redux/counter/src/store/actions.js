import * as constants from '../store/constants'

export const fetchData = (base,exchange) => {
  console.log('[EXCHANGE FROM FETCH_DATA]', exchange)
  let link = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=USD`
  console.log(exchange)
  return dispatch => {
    dispatch(fetchPending())
    fetch(link).then(response => response.json())
    .then(data => {
      console.log('[FROM FETCH_DATA',data)
      dispatch(fetchSuccess(data))
    })
    .catch(error => dispatch(fetchFailed(error)) )
  }
}

export const fetchPending = () => {
  return {
    type:constants.FETCH_PENDING,
    pending:true
  }
}

export const fetchSuccess = (data) => {
  return {
    type:constants.FETCH_SUCCESS,
    data:data,
    pending:false
  }
}

export const fetchFailed = (error) => {
  return {
    type:constants.FETCH_FAILED,
    error:error,
    pending:false,
  }
}




export const setBase = value => {
  console.log(value)
    return {
      type:constants.SET_BASE,
      value:value
    }
  }
  
export const setExchange = value => {
  console.log(value)
  return {
    type:constants.SET_EXCHANGE,
    value:value
  }
}


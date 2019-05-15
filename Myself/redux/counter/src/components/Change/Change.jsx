import React from 'react'
import './Change.css'

const Change = (props) => {
  return (
    <div className="exchange-wrapper">
        <select name="changeCurrency" id="" className="changeSelect">
          <option value="" disabled>Choose your currency</option>
          <option value="GBP">GBP</option> 
          <option value="FIN">FIN</option> 
          <option value="EUR">EUR</option>
          <option value="DEM">DEM</option> 
          <option value="DKK">DKK</option> 
          <option value="MXN">MXN</option> 
          <option value="AUD">AUD</option> 
          <option value="CAD">CAD</option> 
          <option value="THB">THB</option> 
          <option value="RUB">RUB</option> 
          <option value="PLN">PLN</option> 
        </select>
    </div>
  )
}

export default Change
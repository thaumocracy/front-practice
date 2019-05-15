import React from 'react'
import './Base.css'


const Base = (props) => {
  return (
    <div className="exchange-wrapper">
        <select name="baseCurrency" id="">
          <option value="" disabled>Choose your currency</option>
          <option value="ALL">ALL</option>
          <option value="BZD">BZD</option>
          <option value="EUR">EUR</option>
          <option value="GIP">GIP</option>
          <option value="JPY">JPY</option>
          <option value="SOS">SOS</option>
          <option value="MUR">MUR</option>
          <option value="SCR">SCR</option>
          <option value="RUB">RUB</option>
        </select>
    </div>
  )
}

export default Base
import React, { Component , Fragment} from 'react';
import {connect} from 'react-redux'
import './Converter.css'
import * as actions from '../store/actions'

class Converter extends Component {

checkInput = () => {
  console.log(this.props)
  if(this.props.base && this.props.exchange){
    this.props.fetchData(this.props.base,this.props.exchange)
  }
}

render(){  
 let baseClass = this.props.base || ''
 let exchangeClass = this.props.exchange || ''
  return (
    <Fragment>
      <div className="innerWrapper">
        <div className={`exchange-wrapper ${baseClass}`}>
          <select 
            name="baseCurrency" 
            className="baseSelect" 
            onChange={(event) => {
              this.props.onBaseChange(event.target.value)
              this.checkInput()
            }}
            value={this.props.base || ''}
          >
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
      </div>
      <p style={{width:'100%',textAlign:'center',fontSize:'3rem'}}>{( `${this.props.base} || ${this.props.exchange}` || 'NOPE')}</p>
      <div className="innerWrapper">
        <div className={`exchange-wrapper ${exchangeClass}`}>
          <select 
            name="changeCurrency" 
            className="changeSelect" 
            onChange={(event) => {
              this.props.onExchangeChange(event.target.value)
              this.checkInput()
            }} 
            value={this.props.exchange || ''}
          >
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
      </div>
    </Fragment>
  )
}
}

const mapStateToProps = state => {
  return {
    data:state.data,
    base:state.base,
    exchange:state.exchange,
    amount:state.amount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (link) => dispatch(actions.fetchData(link)),
    onBaseChange:(value) => dispatch(actions.setBase(value)),
    onExchangeChange:(value) => dispatch(actions.setExchange(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Converter);
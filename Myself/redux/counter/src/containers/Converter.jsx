import React, { Component , Fragment} from 'react';
import {connect} from 'react-redux'
import keys from '../keys'
import './Converter.css'
import * as actions from '../store/actions'

class Converter extends Component { 
 componentDidMount() {
   this.props.onAppStart()
 }
 
render(){
  return (
    <Fragment>
      <div className="innerWrapper">
        <div className="exchange-wrapper">
          <select 
            name="baseCurrency" 
            id="" 
            className="baseSelect" 
            onChange={(event) => this.props.onBaseChange(event.target.value)} 
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
      <div className="innerWrapper">
        <div className="exchange-wrapper">
          <select 
            name="changeCurrency" 
            id="" 
            className="changeSelect" 
            onChange={(event) => this.props.onExchangeChange(event.target.value)} 
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
    onAppStart: () => dispatch(actions.init()),
    onBaseChange:(value) => dispatch(actions.setBase(value)),
    onExchangeChange:(value) => dispatch(actions.setExchange(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Converter);
import React, { Component , Fragment} from 'react';
import {connect} from 'react-redux'
import Base from '../components/Base/Base';
import Change from '../components/Change/Change';
import keys from '../keys'

class Converter extends Component { 

  fetchDataHandler = () => {
    fetch(`http://data.fixer.io/api/latest?access_key=${keys.fixer}&symbols=ALL,BZD,EUR,GIP,JPY,SOS,MUR,SCR,RUB&format=1`)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render(){
    return (
      <Fragment>
        <Base />
        <Change />
        <button onClick={this.fetchDataHandler}>Fetch</button>
      </Fragment>
    )
  }
}
export default (Converter);
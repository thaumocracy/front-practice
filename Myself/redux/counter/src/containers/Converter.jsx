import React, { Component , Fragment} from 'react';
import {connect} from 'react-redux'
import Base from '../components/Base/Base';
import Change from '../components/Change/Change';
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
          <Base />
          <Change />
        </div>
        <div className="innerWrapper">
          <p>#DOLLA</p>
          <button onClick={this.fetchDataHandler}>Fetch</button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    data:state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAppStart: () => dispatch(actions.init())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Converter);
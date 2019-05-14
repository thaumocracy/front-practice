import React, { Component } from 'react';
import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.onAddOne}>ADD ONE</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter:state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddOne: () => dispatch({
      type:'ADD_ONE'
    })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
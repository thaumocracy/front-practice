import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={ this.props.onAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFive}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(item => {
                        return <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>
                    })}                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter : state.ctr.counter,
        storedResults : state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter : () => dispatch({type:actionTypes.DECREMENT}),
        onAddFive : () => dispatch({type:actionTypes.ADD_FIVE ,value:10}),
        onSubtractFive : () => dispatch({type:actionTypes.REMOVE_FIVE,value:15}),
        onStoreResult : (result) => dispatch({type:actionTypes.STORE_RESULT , payload:result}),
        onDeleteResult : (id) => dispatch({type:actionTypes.DELETE_RESULT,payload: {id:id}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(item => {
                        return <li key={item.id} onClick={this.props.onDeleteResult}>{item.value}</li>
                    })}                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter : state.counter,
        storedResults : state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type:'INCREMENT'}),
        onDecrementCounter : () => dispatch({type:'DECREMENT'}),
        onAddFive : () => dispatch({type:"ADD_FIVE" ,value:10}),
        onSubtractFive : () => dispatch({type:"REMOVE_FIVE",value:15}),
        onStoreResult : () => dispatch({type:"STORE_RESULT"}),
        onDeleteResult : () => dispatch({type:"DELETE_RESULT"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
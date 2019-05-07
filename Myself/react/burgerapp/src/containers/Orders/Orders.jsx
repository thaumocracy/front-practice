import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import {connect} from 'react-redux'
import axios from '../../axios-orders'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {
  componentDidMount(){
    this.props.onFetchOrders()
  }

  render() {
    let orders = <Spinner />
    console.log(this.props.orders)
    if(!this.props.loading){
      orders = (<div>
        {this.props.orders.map(order => {
          return (
          <Order 
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />)
        })}
      </div>
      )
    }
    return orders;
  }
}
const mapStateToProps = state => {
  return {
    orders:state.order.orders,
    loading:state.order.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);
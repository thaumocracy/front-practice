import React , { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {connect} from 'react-redux'

import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack()
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render(){
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}      
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route 
          path={this.props.match.path + '/contact-data'} 
          render={(props) => <ContactData ingredients={this.props.ings} price={this.props.price} {...props}/>} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings:state.ingredients,
    price:state.totalPrice
  }
}

export default connect(mapStateToProps)(Checkout)
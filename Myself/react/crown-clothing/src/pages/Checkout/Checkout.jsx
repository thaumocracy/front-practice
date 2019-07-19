import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems , selectCartTotal} from '../../redux/cart/selectors'
import './Checkout.scss'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const Checkout = ({cartItems,total}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (
          <CheckoutItem cartItem={cartItem}/>
        ))
      }
      <div className="total">
        <span>{total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems,
  total:selectCartTotal
})

export default connect(mapStateToProps)(Checkout);
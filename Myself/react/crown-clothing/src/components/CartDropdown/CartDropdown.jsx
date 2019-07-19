import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'

import './CartDropdown.scss'

import {selectCartItems} from '../../redux/cart/selectors'
import {toggleCartHidden} from '../../redux/cart/actions'

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

const CartDropdown = ({cartItems,history,dispatch}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? 
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) 
            : <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
        }}>CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
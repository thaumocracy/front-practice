import React, {Component , Fragment} from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux'
import * as constants from '../../store/actions'
class BurgerBuilder extends Component {

  state = {
    totalPrice : 4,
    purchasing:false,
    loading:false
  }
  
  componentDidMount(){
    // axios.get('/ingredients.json').then(response => this.setState({ingredients:response.data}) )
  }
  purchaseHandler  = () =>  this.setState({purchasing:true})

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
    .map(igKey => ingredients[igKey])
    .reduce((sum,current) => sum + current,0)
    return sum > 0
  }  
  purchaseCancelHandler = () => this.setState({purchasing:false})
  purchaseContinueHandler = () => {this.props.history.push('/checkout')}

  render(){
    const disabledInfo = {
      ...this.props.ings
    }

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null
    let burger = <Spinner />

    if(this.props.ings){
      burger = (
        <Fragment>
          <Burger 
            ingredients = {this.props.ings}
          />
          <BuildControls
            ingredientAdded = {this.props.onIngredientAdded}
            ingredientRemoved = {this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            price={this.props.price}
            ordered={this.purchaseHandler}
          />
       </Fragment>
      )

      orderSummary = <OrderSummary 
        ingredients={this.props.ings} 
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.props.price}
      />
    }
    
    if(this.state.loading){
      orderSummary = <Spinner/>
    }

    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings:state.ingredients,
    price:state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded : (ingName) => dispatch({ 
      type:constants.ADD_INGREDIENT,
      payload: {
        ingredientName:ingName
      }
    }),
    onIngredientRemoved : (ingName) => dispatch({
      type:constants.REMOVE_INGREDIENT,
      payload: {
        ingredientName:ingName
      }
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder)
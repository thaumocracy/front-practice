import React, {Component , Fragment} from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux'
import * as constants from '../../store/actions'

const INGREDIENT_PRICES = {
  salad:0.5,
  cheese: 0.4,
  meat:1.3,
  bacon:0.7
}

class BurgerBuilder extends Component {

  state = {
    totalPrice : 4,
    purchasable:false,
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
    this.setState({purchasable: sum > 0})
  }
  
  purchaseCancelHandler = () => this.setState({purchasing:false})

  purchaseContinueHandler = () => {
    const query = []

    for(let i in this.state.ingredients){
      query.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    query.push('price=' + this.state.totalPrice)
    let queryString = query.join('&')
    this.props.history.push({
      pathname:'/checkout',
      search:'?' + queryString
    })
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1 
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    
    this.setState({
      totalPrice:newPrice,
      ingredients:updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
      if(oldCount <= 0){
        return
      }
    const updatedCount = oldCount - 1 
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceAddition
    
    this.setState({
      totalPrice:newPrice,
      ingredients:updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients)
  }
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
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler}
          />
       </Fragment>
      )

      orderSummary = <OrderSummary 
        ingredients={this.props.ings} 
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice}
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
    ings:state.ingredients
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
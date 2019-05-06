import React, {Component , Fragment} from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux'
import * as builderActions from '../../store/actions/index'

// ------------ 

class BurgerBuilder extends Component {
  state = {
    totalPrice : 4,
    purchasing:false,
    loading:false
  }
  
  componentDidMount(){
    this.props.onInitIngredients()
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
    ings:state.burgerBuilder.ingredients,
    price:state.burgerBuilder.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded : (ingName) => dispatch(builderActions.addIngredient(ingName)),
    onIngredientRemoved : (ingName) => dispatch(builderActions.removeIngredient(ingName)),
    onInitIngredients : () => dispatch(builderActions.initIngredients())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder)
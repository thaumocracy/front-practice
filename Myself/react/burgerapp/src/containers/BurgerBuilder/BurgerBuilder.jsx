import React, {Component , Fragment} from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner';


const INGREDIENT_PRICES = {
  salad:0.5,
  cheese: 0.4,
  meat:1.3,
  bacon:0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients : null,
    totalPrice : 4,
    purchasable:false,
    purchasing:false,
    loading:false
  }
  
  componentDidMount(){
    axios.get('/ingredients.json').then(response => this.setState({ingredients:response.data}) )
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
    this.setState({loading:true})
    const order = {
      ingredients:this.state.ingredients,
      price:this.state.totalPrice,
      customer : {
        name:"Thaumo Cracy",
        address: {
          street:'Ne dom i ne ulitsa',
          zipCode:'fuckthat',
          country:'Russia'
        },
        email:'thaumocracy@gmail.com'
      },
      deliveryMethod:'fastest'
    }
    axios.post('/orders.json',order)
      .then(response => this.setState({loading:false,purchasing:false}))
      .catch(error => this.setState({loading:false,purchasing:false}))
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
      ...this.state.ingredients
    }

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null
    let burger = <Spinner />

    if(this.state.ingredients){
      burger = (
        <Fragment>
          <Burger 
            ingredients = {this.state.ingredients}
          />
          <BuildControls
            ingredientAdded = {this.addIngredientHandler}
            ingredientRemoved = {this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler}
          />
       </Fragment>
      )

      orderSummary = <OrderSummary 
        ingredients={this.state.ingredients} 
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

export default BurgerBuilder
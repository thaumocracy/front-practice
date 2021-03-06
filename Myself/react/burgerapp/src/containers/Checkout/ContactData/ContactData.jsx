import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import styles from './ContactData.module.css'
// import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux'
import  * as actions  from '../../../store/actions/index';

class ContactData extends Component {
  state = {
    orderForm: {
        name:{
          elementType: 'input',
          elementConfig: {
            type:'text',
            placeholder:'Your Name'
          },
          value:'',
          validation : {
            required:true,
          },
          valid:false,
          touched:false,
        },
        street:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Street'
          },
          value:'',
          validation : {
            required:true,
          },
          valid:false,
          touched:false,
        },
        zipCode:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'ZipCode'
          },
          value:'',
          validation : {
            required:true,
            minLength:5,
            maxLength:5,
          },
          valid:false,
          touched:false,
        },
        country:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Country'
          },
          value:'',
          validation : {
            required:true,
          },
          valid:false,
          touched:false,
        },
        email:{
          elementType:'input',
          elementConfig:{
            type:'email',
            placeholder:'Your e-mail'
          },
          value:'',
          validation : {
            required:true,
          },
          valid:false,
          touched:false,
        },
        deliveryMethod : {
          elementType:'select',
          elementConfig:{
            options : [
              {value:'fastest',displayValue:'Fastest'},
              {value:'cheapest',displayValue:'Cheapest'}
            ]
          },
          value:'fastest',
          validation : {},
          valid:true
        },
    },
    formIsValid:false
  }

  checkValidity(value,rules){
    let isValid = true;
    if(rules.required){isValid = value.trim() !== '' && isValid}
    if(rules.minLength){isValid = value.length >= rules.minLength && isValid}
    if(rules.maxLength){isValid = value.length <= rules.maxLength && isValid}
    return isValid
  }

  orderHandler = (event) => {
    event.preventDefault( )
    const formData = {}
    for(let formElementId in this.state.orderForm){
      formData[formElementId] = this.state.orderForm[formElementId].value
    }
    const order = {
      ingredients:this.props.ingredients,
      price:this.props.price,
      orderData:formData,
      userId:this.props.userId
    }
    this.props.onOrderBurger(order,this.props.token)
  }

  inputChangedHandler = (event,inputId) => {
    const updatedOrderForm = {...this.state.orderForm}
    const updatedFormElement = {
      ...updatedOrderForm[inputId]
    }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid  = this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
    updatedFormElement.touched = true
    updatedOrderForm[inputId] = updatedFormElement
    let formIsValid = true
    for(let inputId in updatedOrderForm){
      formIsValid = updatedOrderForm[inputId].valid && formIsValid
    }
    this.setState({orderForm:updatedOrderForm,formIsValid:formIsValid})
  }
  render() {
    const formElementsArray = []
    for(let key in this.state.orderForm){
      formElementsArray.push({
        id:key,
        config:this.state.orderForm[key]
      })
    }

    let form = (
      <form action="" onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event,formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
      </form>
    )
    if(this.props.loading){form = <Spinner />}

    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients:state.burgerBuilder.ingredients,
    price:state.burgerBuilder.totalPrice,
    loading:state.order.loading,
    token:state.auth.token,
    userId:state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger : (orderData,token) => dispatch(actions.purchaseBurger(orderData,token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactData);
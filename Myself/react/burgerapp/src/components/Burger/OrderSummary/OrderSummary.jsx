import React , { Fragment }from 'react'
import Button from '../../UI/Button/Button';

function orderSummary (props) {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{textTransform:'capitalize'}}>{key}</span>: {props.ingredients[key]}
      </li>
    ) 
  })

  return (
    <Fragment> 
      <h3>Your order</h3>
      <p>Burger with following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price : {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button
        btnType='Danger'
        clicked={props.purchaseCancelled}
      >Cancel</Button>
      <Button
        btnType="Success"
        clicked={props.purchaseContinued}
      >Continue</Button>
    </Fragment>
  )
}

export default orderSummary
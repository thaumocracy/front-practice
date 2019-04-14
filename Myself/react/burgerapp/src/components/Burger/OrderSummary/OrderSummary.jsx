import React , { Fragment }from 'react'

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
    </Fragment>
  )
}

export default orderSummary
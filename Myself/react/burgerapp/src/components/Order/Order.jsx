import React from 'react';
import styles from './Order.module.css'

const Order = (props) => {
  const ingredients = []
  for( let ingredientName in props.ingredients){
    ingredients.push({
      name:ingredientName,
      amount:props.ingredients[ingredientName]
    })
  }
  const ingredientsOutput = ingredients.map(ig => {
    return <span 
    style={{
      textTransform:'capitalize',
      display:'inline-block',
      margin:'0 8px',
      padding:'5px',
      border:'1px solid #ccc'
    }}
    key={ig.name}
    >{ig.name}({ig.amount})</span>
  })

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>Price : USD <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default Order;
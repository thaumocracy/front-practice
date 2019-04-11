import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

function burger(props){
  const tranformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((item,i) => {
         return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
        {tranformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger
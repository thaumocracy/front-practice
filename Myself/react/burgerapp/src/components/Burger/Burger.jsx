import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

function burger(props){
  let tranformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((item,i) => {
         return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    .reduce((array,element) => {
      return array.concat(element)
    },[])
  if(tranformedIngredients.length === 0){
    tranformedIngredients = <p>Let's build some carbs!</p>
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
        {tranformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger
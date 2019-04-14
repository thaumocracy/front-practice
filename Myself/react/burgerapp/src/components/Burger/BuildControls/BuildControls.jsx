import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.module.css'

const controls = [
  { label: 'Salad', type:'salad'},
  { label: 'Bacon', type:'bacon'},
  { label: 'Cheese', type:'cheese'},
  { label: 'Meat', type:'meat'},
]
function buildControls(props){
  return (
    <div className={styles.BuildControls}>
      <p>Current Price : {props.price.toFixed(2)}</p>
      {controls.map(item => {
        return <BuildControl 
          key={item.label} 
          label={item.label}
          added={() => props.ingredientAdded(item.type)}
          removed={() => props.ingredientRemoved(item.type)}
          disabled={props.disabled[item.type]}
        />
      })}
      <button 
      className={styles.OrderButton}
      disabled={!props.purchasable}
      >Order Now</button>
    </div>
  )
}

export default buildControls
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
      {controls.map(item => {
        return <BuildControl 
          key={item.label} 
          label={item.label}
          added={() => props.ingredientAdded(item.type)}
        />
      })}
    </div>
  )
}

export default buildControls
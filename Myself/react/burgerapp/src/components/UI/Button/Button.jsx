import React from 'react'
import styles from './Button.module.css'


function button (props) {
  return (
    <button 
      className={[styles.Button,styles[props.BtnType]].join(' ')}
      onClick={props.clicked}
    >{props.children}</button>
  )
}

export default button
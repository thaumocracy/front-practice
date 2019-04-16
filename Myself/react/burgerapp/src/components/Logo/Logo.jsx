import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import styles from './Logo.module.css'

function logo(props){
  return (
    <div className={styles.Logo}>
      <img src={burgerLogo} alt="Whatever burger brand name it is"/>
    </div>
  )
}

export default logo
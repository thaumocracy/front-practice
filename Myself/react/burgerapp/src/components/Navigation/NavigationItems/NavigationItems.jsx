import React from 'react'
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


function navigationItems (props){
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      {props.isAuthenticated ?  <NavigationItem link="/orders">Orders</NavigationItem> : null}
      {!props.isAuthenticated ? <NavigationItem link="/auth">Sign In</NavigationItem> : <NavigationItem link="/logout">Log Out</NavigationItem>}
    </ul>
  )
}

export default navigationItems
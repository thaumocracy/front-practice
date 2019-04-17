import React , { Fragment }from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';

function sideDrawer(props){
  let attachedStyles = [styles.SideDrawer,styles.Closed]
  if(props.open){
    attachedStyles = [styles.SideDrawer,styles.Open]
  } 
  return (
    <Fragment>
      <Backdrop 
        show={props.open}
        clicked={props.closed} 
      />
      <div className={attachedStyles.join(' ')}>
        <Logo height="11%"/>
        <nav>        
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  )
}

export default sideDrawer
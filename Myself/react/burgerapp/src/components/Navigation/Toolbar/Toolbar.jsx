import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

function toolbar(props){
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
      <Logo height="80%"/>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default toolbar
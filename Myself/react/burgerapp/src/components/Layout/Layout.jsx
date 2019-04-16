import React , { Fragment }from 'react'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';

function Layout(props){
  return (
    <Fragment>
      <Toolbar />
      <main className={styles.Content}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout
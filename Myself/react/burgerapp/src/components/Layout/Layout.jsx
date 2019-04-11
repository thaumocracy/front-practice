import React , { Fragment }from 'react'
import styles from './Layout.module.css'

function Layout(props){
  return (
    <Fragment>
      <div className={styles.Red}>Toolbar |  SideDrawer | Backdrop</div>
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout
import React , { Fragment , Component} from 'react'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer : !prevState.showSideDrawer}
    })
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer:false})
  }

  render(){
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} 
        />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default Layout
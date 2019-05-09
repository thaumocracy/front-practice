import React , { Fragment , Component} from 'react'
import styles from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux'
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
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}
         />
        <SideDrawer 
          isAuth={this.props.isAuthenticated}
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

const mapStateToProps = state => {
  return {
    isAuthenticated:state.auth.token !== null
  }
}
export default connect(mapStateToProps)(Layout)
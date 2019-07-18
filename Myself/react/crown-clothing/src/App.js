import React from 'react';
import './App.scss';
import { Route , Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import RegisterPage from './pages/Register/RegisterPage';
import { auth , createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from 'react-redux'
import {setCurrentUser} from './redux/user/actions'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {this.unsubscribeFromAuth()} 

  render(){
    return (
      <div>
        <Header/>
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);

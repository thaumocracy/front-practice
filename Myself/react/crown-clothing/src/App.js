import React from 'react';
import './App.scss';
import { Route , Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import RegisterPage from './pages/Register/RegisterPage';
import { auth , createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {

  state = {
    currentUser:null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
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

export default App;

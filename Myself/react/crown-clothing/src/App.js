import React from 'react';
import './App.scss';
import {Route , Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import RegisterPage from './pages/Register/RegisterPage';

function App() {
  return (
    <div>
      <Header />
      <Switch >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;

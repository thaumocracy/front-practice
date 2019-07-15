import React from 'react';
import './App.scss';
import {Route , Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/ShopPage';

function App() {
  return (
    <div>
      <Switch >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
      
      {/* <HomePage /> */}
    </div>
  );
}

export default App;

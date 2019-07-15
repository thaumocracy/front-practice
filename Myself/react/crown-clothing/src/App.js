import React from 'react';
import './App.scss';
import {Route , Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';


const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page!</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
      
      {/* <HomePage /> */}
    </div>
  );
}

export default App;

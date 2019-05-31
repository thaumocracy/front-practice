import React from 'react';
import logo from '../logo.svg';


const Page2 = ({onRouteChange}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        [Pace 2 Component]
        </p>
      </header>
      <button onClick={() => onRouteChange('page1')}>Page 1</button>
      <button onClick={() => onRouteChange('page3')}>Page 3</button>
    </div>
  );
};

export default Page2;
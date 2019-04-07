import React, { Component } from 'react';
import './App.css';
import First from './components/First';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <First />
        </header>
      </div>
    );
  }
}

export default App;

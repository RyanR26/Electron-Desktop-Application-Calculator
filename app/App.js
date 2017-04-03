import React, { Component } from 'react';
import CalculatorContainer from './containers/CalculatorContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalculatorContainer />
      </div>
    );
  }
}

export default App;

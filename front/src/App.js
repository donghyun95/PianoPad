import React, { Component } from 'react';
import PadContainer from './Container/PadContainer';
import ChordButtonContainer from './Container/ChordButtonContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PadContainer/>
          <ChordButtonContainer/>
      </div>
    );
  }
}

export default App;

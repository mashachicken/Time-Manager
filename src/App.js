import React from 'react';
import logo from './logo.svg';
import Tracker from './Tracker.jsx';
import './App.css';

function App() {
  const text = {
    fontFamily: 'Monospace'
  }
  return (
    <div style={text}>
      <header className="App-header">
        <Tracker/>


      </header>
    </div>
  );
}

export default App;

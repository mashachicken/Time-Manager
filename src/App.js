import React from 'react';
import logo from './logo.svg';
import Tracker from './Tracker.jsx';
import './App.css';

function App() {
  const font = {
    fontFamily: 'Monospace'
  }
  return (
    <div style={font}>
      <header className="App-header">
        <Tracker/>


      </header>
    </div>
  );
}

export default App;

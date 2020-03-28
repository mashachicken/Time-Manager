import React from 'react';
import logo from './logo.svg';
import Tracker from './Tracker.jsx';
import About from './About.jsx'
import './App.css';

function App() {
  const navStyle = {
    display: 'grid',
    gridTemplateColumns: '4fr 2fr 2fr',
    background: 'white',
    color: 'black',
    padding: '1.5em',
    margin: '0'
  }
  const curved = {
    color: 'black',
    display: 'block',
    textAlign: 'center'
    }
    const history = () => {
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    const float = {
      float: 'left'
    }
    const button = {
      outline: 'none',
      background: 'inherit!important',
      border: 'none',
      boxSizing: 'none',
      padding: '0',
      display: 'inline-block',
      cursor: 'pointer'
    }
  const text = {
    fontFamily: 'Monospace'
  }
  return (
    <div style={text}>
      <header className="App-header">
      <div style={navStyle} id="navStyle">
        <h3> Time's App! </h3 >

        <button onClick={history} style = {button}> History </button>

      </div>
      <div style={curved}  id="curved">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <div id="myDIV" style={float}>
        This is my DIV element.
        </div>
      </div>
        <Tracker/>
      </header>
    </div>
  );
}

export default App;

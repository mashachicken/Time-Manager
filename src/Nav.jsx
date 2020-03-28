import React from 'react';
import About from './About.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
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

  return (
    <div>
      <div style={navStyle} id="navStyle">
        <h3> Time's App! </h3 >
      
      </div>
      <div style={curved}  id="curved">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
    </div>
  )
}
export default Nav

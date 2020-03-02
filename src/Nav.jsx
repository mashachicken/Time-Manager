import React from 'react';
import Link1 from './Link1.jsx'
import Link2 from './Link1.jsx'
function Nav() {
  const font = {
    fontFamily: 'Monospace'
  }
  return (
    <div style={font}>
    <h1> Logo </h1>
    <Link1/>
    <Link2/>
      <p> Your task: </p>
    </div>
  )
}
export default Nav

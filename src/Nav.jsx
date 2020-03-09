import React from 'react';
import Link1 from './Link1.jsx'
import Link2 from './Link1.jsx'
function Nav() {
const navStyle = {
  display: 'grid',
  gridTemplateColumns: '4fr 2fr 2fr',

    padding: '2em',
    margin: '0'

}
  return (
    <div style={navStyle}>
    <h1> Logo </h1>
    <Link1/>
    <Link2/>
      <p> </p>
    </div>
  )
}
export default Nav

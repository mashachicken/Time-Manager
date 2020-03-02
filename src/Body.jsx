import React from 'react';
import  Nav from './Nav';
import  Task from './Task';
import Text from './Text.jsx'
import Timer from './Timer.jsx'
import CurrentTask from './CurrentTask.jsx'
function Body() {
  const font = {
    fontFamily: 'Monospace'
  }
  return (
    <div style={font}>
    <Text/>
    <CurrentTask/>
    <Timer/>
      <p> This is a body</p>
    </div>
  )
}
export default Body

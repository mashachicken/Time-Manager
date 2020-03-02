import React from 'react';
import  Nav from './Nav';
import  Task from './Task';
import Text from './Text.jsx'
import Timer from './Timer.jsx'
import CurrentTask from './CurrentTask.jsx'

function Body() {
  return (
    <div>
    <Text/>
    <CurrentTask/>
    <Timer/>
      <p> This is a body</p>
    </div>
  )
}
export default Body

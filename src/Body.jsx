import React from 'react';
import  Nav from './Nav';
import  Task from './Task';
import Text from './Text.jsx'
import Tracker from './Tracker.jsx'
import Timer from './Timer.jsx'
import CurrentTask from './CurrentTask.jsx'


function Body(props) {
console.log("task state props inside the body:" + props.myCurrentTask)
  return (
    <div>
    <Text/>
    <CurrentTask currentTask={props.myCurrentTask}/>
    <Timer/>
      <p> This is a body</p>
    </div>
  )
}
export default Body

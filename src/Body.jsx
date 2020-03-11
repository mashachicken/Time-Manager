import React from 'react';
import  Nav from './Nav';
import  Task from './Task';
import Text from './Text.jsx'
import Tracker from './Tracker.jsx'
import Timer from './Timer.jsx'
import CurrentTask from './CurrentTask.jsx'


function Body(props) {
  const main = {
      textAlign: 'center'
  }
  const taskTime ={
  display: 'inline'
  }
console.log("task state props inside the body:" + props.myCurrentTask)
  return (
    <div style={main}>
    <div style={taskTime}>
    <CurrentTask currentTask={props.myCurrentTask}/>
    <Timer/>
    </div>
    <Text/>

    </div>
  )
}
export default Body

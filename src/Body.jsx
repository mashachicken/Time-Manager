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
    margin: '0',
    paddingTop: '25%'
  }

  return (
    <div style={main}>
      <div style={taskTime} id="taskTime">
        <CurrentTask currentTask={props.myCurrentTask}/>
        <Timer setTime={props.myTimer}/>
      </div>
    </div>
  )
}
export default Body

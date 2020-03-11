import React from 'react';
import Tracker from './Tracker'
function Task(props) {
  let _task = null
  
    function handleFieldSubmit(event) {
      event.preventDefault()
      console.log(_task.value)
      props.onNewTaskCreation({task: _task.value})
      _task.value = '';
    }
    const taskStyle = {
      background: '#fff',
      padding: '1em 1.4em',
      color: 'black',
      margin: '2em',
      textAlign: 'center',
      text: 'centered',
      borderRadius: '25px'
    }
    return (
      <div style={taskStyle}>
      <form onSubmit={handleFieldSubmit}>
      <legend> Enter a task </legend>
      <input type="text" name="task" ref={(input) => {_task = input;}}/>
      </form>
      </div>
    )
  }


export default Task

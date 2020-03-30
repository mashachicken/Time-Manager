import React from 'react';
import Tracker from './Tracker'
function Task(props) {
  let _task = null
  const history = []
    function handleFieldSubmit(event) {
      event.preventDefault()
      props.onNewTaskCreation({task: _task.value})
      _task.value = '';
    }

    const taskStyle = {
      background: '#fff',
      position: 'flex',
      padding: '2em 1.4em',
      color: 'black',
      height: '30px',
      margin: '2em',
      textAlign: 'center',
      borderRadius: '25px'
    }

    return (
      <div style={taskStyle} id='taskStyle'>
        <form onSubmit={handleFieldSubmit}>
          <legend> Enter a task </legend>
          <input type="text" name="task" ref={(input) => {_task = input;}}/>
        </form>
      </div>
    )
  }


export default Task

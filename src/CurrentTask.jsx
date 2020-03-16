import React from 'react';

function CurrentTask(props) {
  const task = {
    fontFamily: 'Monospace',
    margin: '2em',
    padding: '1em',
    paddingTop: '2em',
    borderRadius: '25px',
    color: 'black',
      background: '#fff',
  }
  const taskStyle = {
    color: '#4568dc'
  }

  console.log(props.currentTask)
  return (
    <div style={task}>
      <p> Your task: <br/> <span style={taskStyle}> {props.currentTask}</span></p>
    </div>
  )
}
export default CurrentTask

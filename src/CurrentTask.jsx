import React from 'react';

function CurrentTask(props) {
  const task = {
    fontFamily: 'Monospace',
    margin: '2em',
    padding: '1em',
    borderRadius: '25px',
    color: 'black',
      background: '#fff',
  }

  console.log(props.currentTask)
  return (
    <div style={task}>
      <p> Your task: <br/> {props.currentTask}</p>
    </div>
  )
}
export default CurrentTask

import React from 'react';

function CurrentTask(props) {
  const task = {
    background: '#fff',
    padding: '1em 1.4em',
    color: 'black',
    margin: '2em',
    textAlign: 'center',
    text: 'centered',
    borderRadius: '25px'
  }

  console.log(props.currentTask)
  return (
    <div style={task}>
      <p> Your task: {props.currentTask}</p>
    </div>
  )
}
export default CurrentTask

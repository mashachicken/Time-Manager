import React from 'react';

function Task() {
  const font = {
    fontFamily: 'Monospace'
  }
  return (
    <div style={font}>
      <legend> Enter a task </legend>
      <input type="text" name="task" />

    </div>
  )
}
export default Task

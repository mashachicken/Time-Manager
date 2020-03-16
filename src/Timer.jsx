import React from 'react';

function Timer(props) {
  const font = {
    fontFamily: 'Monospace',
    margin: '2em',
    padding: '2em',
    borderRadius: '25px',
    color: 'black',
      background: '#fff',
  }
  const statusStyle = {
    color: '#4568dc'
  }
  let status = ''
if (props.setTime == true) {
  status = "on"
} else {
  status = 'off'
}
console.log(status)
  return (
    <div style={font}>
    <p> Timer: <br/> <span style={statusStyle}> {status}</span> </p>

    </div>
  )
}
export default Timer

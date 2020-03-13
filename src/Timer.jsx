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

  return (
    <div style={font}>
    <p> Time: {props.myTime} </p>

    </div>
  )
}
export default Timer

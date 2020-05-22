import React from 'react';
import Tracker from './Tracker.jsx'

function History(props) {

  const font = {
  fontFamily: 'Monospace',
  padding: '0px',
  margin: '0px',
  fontSize: '20px',
  poaition: 'fixed'
  }
  const taskStyle = {

  }
  console.log(props.history)


  return (
    <div style={font}>
    <h5>History </h5>
    {props.history.map((item, i) => (<li key={i}>
    <span style={taskStyle}> {item.task} </span> </li>
    ))}


    </div>
  )
}
export default History

import React from 'react';
import  Nav from './Nav';
import  Task from './Task';
import  Body from './Body';
import  TimeSet from './TimeSet';

class Tracker extends React.Component {

  render() {
    return(
      <Nav/>
      <Task/>
      <TimeSet/>
      <Body/>
      <div>
      <p> </p>
      </div>
    );
  }
}

export default Tracker

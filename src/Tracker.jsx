import React from 'react';
import  Nav from './Nav';
import  Task from './Task';
import  Body from './Body';
import  TimeSet from './TimeSet';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      task: ''
    }
    render() {
      return(
        <div>
        <Nav/>
        <Task/>
        <TimeSet/>
        <Body/>

        </div>
      );
    }
  }

  export default Tracker

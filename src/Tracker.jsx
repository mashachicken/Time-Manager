import React from 'react';
import Task from './Task'
import Body from './Body'
import Text from './Text.jsx'
class Tracker extends React.Component {
  constructor() {
    super();

    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
      task: ''
    };
    this.handleNewTask = this.handleNewTask.bind(this);
  }
  handleNewTask(task) {
    this.setState(task);
  }
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });

    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        clearInterval(this.timer);
        this.setState({ timerOn: false });

        audioEl.play()
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
        console.log(this.state)
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
        console.log(this.state)
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
        console.log(this.state)
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };
  render() {
    const trackerStyle = {
      background: '#fff',
      padding: '1em 1.4em',
      color: 'black',
      margin: '2em',
      textAlign: 'center',
      text: 'centered',
      borderRadius: '25px'
    }
    const timeSet = {

      background: '#dcb4de',

      borderRadius: '35px',
      borderStyle: 'solid',
      borderColor: '#4568dc',
      width: '6cm',

        selfAlign: 'center',
         display: 'inline-block'

    }
    const button = {
      background: 'white',
      borderRadius: '30px',
      borderColor: 'black'
    }

    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div>
        <aside>

        </aside>
        <Body myCurrentTask={this.state.task} myTimer={this.state.timerOn}  />
        <Task onNewTaskCreation={this.handleNewTask}/>
        <div style={trackerStyle}>
          <h1>  </h1>

          <div className="Countdown-display" style={timeSet} id="time">
            <button style={button} onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
            <button style={button} onClick={() => this.adjustTimer("incMinutes")}>&#8679;</button>
            <button style={button} onClick={() => this.adjustTimer("incSeconds")}>&#8679;</button>
            <div className="Countdown-time" id="time">
              {hours} : {minutes} : {seconds}
            </div>
            <button style={button} onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
            <button style={button} onClick={() => this.adjustTimer("decMinutes")}>&#8681;</button>
            <button style={button} onClick={() => this.adjustTimer("decSeconds")}>&#8681;</button>
        </div><br/>
        {timerOn === false &&
          (timerStart === 0 || timerTime === timerStart) && (
            <button onClick={this.startTimer}>Start</button>
          )}
        {timerOn === true && timerTime >= 1000 && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {timerOn === false &&
        (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
          <button onClick={this.startTimer}>Resume</button>
          )}
        {(timerOn === false || timerTime < 1000) &&
        (timerStart !== timerTime && timerStart > 0) && (
          <button onClick={this.resetTimer}>Reset</button>
          )}
        </div>
        <audio className="audio-element" id="xyz" src="alarm.mp3"> </audio>
        <Text/>
     </div>
          );
        }
      }


      export default Tracker

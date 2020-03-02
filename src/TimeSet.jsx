import React from 'react';

class TimeSet extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      time: 0,
      task: ''
    }
  }
    handleChange(e) {
      this.setState({time: e.target.value});
      console.log(this.state)
    }
  render() {
    const time = this.state.time;
    return (
      <div>
      <legend> Time i wish to spend on this task:</legend>
      <input value={time} onChange={this.handleChange} />



      </div>

  )
}
}
export default TimeSet

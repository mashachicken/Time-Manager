// import React from 'react';
//
// class ActualTimer extends React.Component {
//   handleChange(e) {
//     this.setState({time: e.target.value});
//     console.log(this.state)
//   }
//   render () {
//     const {time} = this.props.time
//     console.log(this.props.time)
//
//     return (
//       <div>
//       </div>
//     )
//   }
//     componentDidMount() {
//       if (this.props.time > 0) {
//         this.myInterval = setInterval(() => {
//           this.setState({
//             time: this.props.time - 1
//           })
//         }, 1000)
//       }
//     }
//     componentWillUnmount(){
//       clearInterval(this.myInterval)
//     }
// }
// export default ActualTimer

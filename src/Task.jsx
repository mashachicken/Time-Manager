import React from 'react';

class Task extends React.Component {

  onFieldChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }
  render(){
    return (
      <div>
      <form>
      <legend> Enter a tasfk </legend>
      <input type="text" name="task" onChange={this.onFieldChange.bind(this)}/>
      <button>
      Push me
      </button>
      </form>
      </div>
    )
  }
}

export default Task

import React from 'react';

function TimeSet() {
  const font = {
    fontFamily: 'Monospace'
  }
  function myFunction() {
    alert('Hello');
  }

  return (
    <div style={font}>
    <form>
    <input type="number">
    <button onSubmission="setTimeout(myFunction, 3000)">Try it</button>
    </form>

    </div>
  )
}
export default TimeSet

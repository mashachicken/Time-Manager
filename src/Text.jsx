import React from 'react';

function Text() {

  const curved2 = {
    color: 'black',
    display: 'block',
    textAlign: 'center',
    height: '1cm',

  }
  const text = {
      background: 'white'
  }
  return (

    <div style={curved2}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fff" fillOpacity="1" d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>

    </div>
  )
}
export default Text

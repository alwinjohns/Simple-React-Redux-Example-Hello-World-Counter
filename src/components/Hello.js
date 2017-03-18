import React from 'react'

const Hello = ( {onClick, message} ) => {
  return(
    <div>
      <h2>{message}</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}

export default Hello

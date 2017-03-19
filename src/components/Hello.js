import React from 'react'

const Hello = ( {onClickPlus, onClickMinus, onClickReset, message} ) => {
  return(
    <div>
      <h2>{message}</h2>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
        <br/>
        <button onClick={onClickReset}>Reset</button>
    </div>
  )
}

export default Hello

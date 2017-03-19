import { PLUS, MINUS, RESET } from './../constants/constants.js'

export const increment = () => {
  console.log('+ action created')
  return {
    type: PLUS,
  }
}
export const decrement = () => {
  console.log('- action created')
  return {
    type: MINUS,
  }
}
export const reset = () => {
  console.log('reset action created')
  return {
    type: RESET,
  }
}

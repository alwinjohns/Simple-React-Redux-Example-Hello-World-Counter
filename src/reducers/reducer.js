import { HELLO_WORLD } from './../actions/action.js'
import { combineReducers } from 'redux'

const helloWorldReducer = (state={message: 'init message'}, action) => {
  switch(action.type){
    case HELLO_WORLD:
      console.log('hello world reducer')
      return Object.assign({}, state, { message: 'Helooooooo' })
    default:
      console.log('default reducer')
      return state
  }
}
const combReducer = combineReducers({
  helloWorldReducer,
})

export default combReducer

import { HELLO_WORLD } from './../actions/action.js'
import { combineReducers } from 'redux'

const helloWorldReducer = (state={message: 0}, action) => {
  switch(action.type){
    case HELLO_WORLD:
      console.log('hello world reducer')
      let m=state.message + 1
      return Object.assign({}, state, { message: m })
    default:
      console.log('default reducer')
      return state
  }
}
const combReducer = combineReducers({
  helloWorldReducer,
})

export default combReducer

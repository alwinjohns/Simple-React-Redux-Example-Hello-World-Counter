import { connect } from 'react-redux'
import Hello from '../components/Hello.js'
import {increment, decrement, reset} from '../actions/action.js'

const mapStateToProps = (state,ownProps) => {
  return {
    message: state.helloWorldReducer.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickPlus : () => {
      dispatch(increment())
    },
    onClickMinus : () => {
      dispatch(decrement())
    },
    onClickReset : () => {
      dispatch(reset())
    }
  }
}

const HelloWorld = connect(mapStateToProps, mapDispatchToProps)(Hello)

export default HelloWorld

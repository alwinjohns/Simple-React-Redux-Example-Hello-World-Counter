import { connect } from 'react-redux'
import Hello from '../components/Hello.js'
import { HELLO_WORLD } from '../actions/action.js'
const mapStateToProps = (state,ownProps) => {
  return {
    message: state.helloWorldReducer.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick : () => {
      dispatch({type: HELLO_WORLD })
    }
  }
}

const HelloWorld = connect(mapStateToProps, mapDispatchToProps)(Hello)

export default HelloWorld

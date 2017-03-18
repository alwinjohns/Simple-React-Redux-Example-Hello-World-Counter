import React, { Component } from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux'
import './App.css';
import {createStore} from 'redux'
import HelloWorld from './containers/HelloWorld.js'
import combReducer from './reducers/reducer.js'

var store = createStore(combReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <HelloWorld />
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux'

// This is a reducer, a pure function with (state, action) => state signature.
function counter(state = { count: 0 }, action) {
  switch (action.type) {
  case 'INCREMENT':
    return {
      count: state.count + 1
    };
  case 'DECREMENT':
    return {
      count: state.count - 1
    };
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can subscribe to the updates manually, or use bindings to your view layer.
store.subscribe(() =>
  console.log(store.getState())
)

import RootComponent from './containers/Root';

ReactDOM.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
  document.getElementById('react-app')
);

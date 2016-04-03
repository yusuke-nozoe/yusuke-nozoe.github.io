import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux'

function counter(state = { isLoading: false, page: 1 }, action) {
  switch (action.type) {
  case 'LOAD_MORE':
    return {
      isLoading: true,
      page: state.page
    };
  case 'LOAD_FINISHED':
    return {
      isLoading: false,
      page: state.page + 1
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

import Timeline from './components/Timeline';

ReactDOM.render(
  <Provider store={store}>
    <Timeline />
  </Provider>,
  document.getElementById('react-app')
);

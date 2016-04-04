import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { slider } from './reducers';
import RootApp from './containers/RootApp';

let store = createStore(slider);

ReactDOM.render(
  <Provider store={store}>
    <RootApp />
  </Provider>, document.getElementById('react-app')
);

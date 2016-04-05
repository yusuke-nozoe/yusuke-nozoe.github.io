import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todos } from './reducers';

import Root from './containers/Root';

let store = createStore(todos);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('react-app')
);

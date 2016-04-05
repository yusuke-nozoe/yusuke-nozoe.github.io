import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { list } from './reducers';

import Root from './containers/Root';

let store = createStore(list);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('react-app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import Root from './containers/Root';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('react-app')
);

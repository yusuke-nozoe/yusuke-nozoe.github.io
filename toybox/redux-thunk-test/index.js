import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(rootReducer);

import App from './containers/App';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-app'));

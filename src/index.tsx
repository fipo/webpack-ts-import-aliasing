import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from './scenes/Home';

import './global.css';

// tslint:disable-next-line
const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

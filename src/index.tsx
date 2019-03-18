import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from './scenes/home';

const App = () => (
  <Provider store={store}>
    <div><Home /></div>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));

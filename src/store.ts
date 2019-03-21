import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

// tslint:disable-next-line
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );

  const setupStore = createStore(
    reducers,
    initialState,
    enhancer,
  );

  sagaMiddleware.run(sagas);

  return setupStore;
}

const store = configureStore();

export default store;

import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const sagaMiddleware = createSagaMiddleware();


function configureStore(initialState = {}) {
  const middlewares = [
    sagaMiddleware
  ];

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  sagaMiddleware.run(sagas);

  return store;
}

const store = configureStore();

export default store;

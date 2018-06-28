import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import createReducer from '../reducer';
import sagas from '../Sagas';

// This connects the reducer to the store
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createReducer(),
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, thunk),
    ),
  );

  // run rootSaga
  sagaMiddleware.run(sagas);

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
};

export default configureStore;

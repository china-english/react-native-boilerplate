import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer';
import sagas from '../Sagas';

// This connects the reducer to the store
const configureStore = () => {
  const sagaMIddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMIddleware, thunk),
    ),
  );

  // run saga
  sagaMIddleware.run(sagas);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;

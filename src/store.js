import rootReducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
// This connects the reducer to the store
const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore

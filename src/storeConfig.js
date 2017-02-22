import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import persistState from 'redux-localstorage';

export default function configureStore(initialState) {

  const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk
      ),
      persistState(),
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers/root', () => {
      const nextRootReducer = require('./reducers/root').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

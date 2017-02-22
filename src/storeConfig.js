import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

export default function configureStore(initialState) {

  const store = createStore(rootReducer, initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk
      ),
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

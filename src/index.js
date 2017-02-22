import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import PageHome from './components/PageHome';
import configureStore from './storeConfig';

import './assets/css/bulma.css';
import './assets/css/style.css';
import './assets/css/atom.css';

const store = configureStore();
document.store = store;

render(
  <Provider store={store}>
    <PageHome/>
  </Provider>,
  document.getElementById('root')
);

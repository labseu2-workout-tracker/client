import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import logger from "redux-logger";
import App from './App';

import './index.css';

function saveToLocalStorage(state) {
  try {
          const serializedState = JSON.stringify(state);
          localStorage.setItem('state', serializedState);
  } catch (e) {
          console.log(e)
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

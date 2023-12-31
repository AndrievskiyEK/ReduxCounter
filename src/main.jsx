import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk'; 

import {composeWithDevTools} from 'redux-devtools-extension';
import { counterReducer } from './pages/resucer.js';
import CounterPage from './pages/CounterPage.jsx';

import './api/mock-server.js';

const rootReducer = combineReducers({
  counter: counterReducer
})

//так разработчики описали работу с их архитектурой
const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(ThunkMiddleware)))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterPage />
    </Provider>    
  </React.StrictMode>,
)

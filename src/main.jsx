import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import { counterReducer } from './pages/resucer.js'
import CounterPage from './pages/CounterPage.jsx'

const rootReducer = combineReducers({
  counter: counterReducer
})


const store = createStore(rootReducer)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterPage />
    </Provider>    
  </React.StrictMode>,
)

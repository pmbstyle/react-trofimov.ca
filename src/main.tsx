import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './assets/main.scss'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)

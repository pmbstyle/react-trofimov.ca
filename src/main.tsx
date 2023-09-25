import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/main.scss'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)

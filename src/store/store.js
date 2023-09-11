import { configureStore } from '@reduxjs/toolkit'
import terminalReducer from './terminal'

export default configureStore({
    reducer: {
        terminal: terminalReducer
    }
})
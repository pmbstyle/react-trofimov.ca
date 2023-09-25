import { configureStore } from "@reduxjs/toolkit";
import terminalReducer from "./terminalSlice"

export const store = configureStore({
    reducer: terminalReducer
})
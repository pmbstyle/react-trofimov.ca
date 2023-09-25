import { createSlice } from '@reduxjs/toolkit';
import moment from "moment"

const initialState = {
    header: `<p>Welcome to AnotherLinuxDist 20.04 Web Edition (TS/Vue 3.2.33 Build 114514)</p>
    <ul>
        <li>GitHub: <a href="https://github.com/pmbstyle/react-trofimov.ca" target="_blank">https://github.com/pmbstyle/react-trofimov.ca</a></li>
    </ul>
    <p>Last login: ${moment().format('MMMM Do YYYY, h:mm:ss a') } from 127.0.0.1</p>
    <p>Type <code>help</code> to see all available commands.</p>`,
    currentCommand: "",
    history: [],
    pwd: "~",
    showHeader: true
}

export const terminalSlice = createSlice({
    name: 'terminal',
    initialState,
    reducers: {
        setCurrentCommand: (state, action) => {
            state.currentCommand = action.payload
        },
        setHeader: (state, action) => {
            state.header = action.payload
        },
        clearHistory: (state) => {
            state.history.map((history) => (history.show = false))
            state.history.push({
                command: state.currentCommand,
                output: "",
                pwd: state.pwd,
                show: false,
                isEmpty: false,
            })
            state.showHeader = false
        },
        addHistory: (state, action) => {
            state.history.push({
                command: state.currentCommand,
                output: action.payload,
                pwd: state.pwd,
                show: true,
                isEmpty: false,
            })
        },
        endCurrentCommand: (state, action) => {
            state.history.push({
                command: state.currentCommand,
                output: action.payload,
                pwd: state.pwd,
                show: true,
                isEmpty: false,
            })
            state.currentCommand = ""
        }
    }
})

export const { setCurrentCommand, setHeader, clearHistory, endCurrentCommand } = terminalSlice.actions

export default terminalSlice.reducer
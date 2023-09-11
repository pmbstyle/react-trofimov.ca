import { createSlice } from '@reduxjs/toolkit'
import moment from "moment"

export const terminalSlice = createSlice({
    name: 'terminal',
    initialState: {
        header: `<p>Welcome to AnotherLinuxDist 20.04 Web Edition (TS/Vue 3.2.33 Build 114514)</p>
        <ul>
            <li>GitHub: <a href="https://github.com/pmbstyle/trofimov.ca" target="_blank">https://github.com/pmbstyle/trofimov.ca</a></li>
        </ul>
        <p>Last login: ${moment().format('MMMM Do YYYY, h:mm:ss a') } from 127.0.0.1</p>
        <p>Type <code>help</code> to see all available commands.</p>`,
        currentCommand: "",
        history: [],
        pwd: "~",
        showHeader: true
    },
    reducers: {
        staticHeader: state => state.header,
        showHeader: state => state.showHeader,
        historyShown: (state) => {
            return state.history.filter((history) => history.show);
        },
        validHistory: (state) => {
            return state.history.filter((history) => !history.isEmpty);
        },
        endCurrentCommand: (state,output) => {
            if (output === undefined) {
                state.currentCommand = "";
                return;
            }
            let isEmpty = false;
            if (typeof output === "string" && output.trim() === "") isEmpty = true;
            state.history.push({
                command: state.currentCommand,
                output: output,
                pwd: state.pwd,
                show: true,
                isEmpty,
            });
            state.currentCommand = "";
        },
        clearHistory: (state) => {
            state.history.map((history) => (history.show = false));
            state.history.push({
                command: state.currentCommand,
                output: "",
                pwd: state.pwd,
                show: false,
                isEmpty: false,
            });
            state.showHeader = false;
        }
    }
})

export const { staticHeader, showHeader, historyShown, validHistory, endCurrentCommand, clearHistory } = terminalSlice.actions

export default terminalSlice.reducer
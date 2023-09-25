import { setCurrentCommand } from '../../store/terminalSlice'
import TerminalCommand from "./TerminalCommand"
import runCommand from "../../commands/execCommand"
import filesystem from "../../config/filesystem"
import { store } from '../../store/store'

export interface File {
    text: string;
    color: string;
    weight: string;
}
interface History {
    command: string;
    output: string | File[];
    pwd: string;
    show?: boolean;
    isEmpty?: boolean;
}

var currentCommandHistory = -1
var currentTypedCommand = ""

const TerminalInput = (props:{scrollBottom:Function}): JSX.Element => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const state = store.getState()
        let validHistory = state.history.filter((history: History) => !history.isEmpty)
        const input = document.getElementById("termInput") as HTMLInputElement
        const inputValue = input.value
        if (event.key === "Enter") {
            const input = document.getElementById("termInput") as HTMLInputElement
            const command = input.value
            if (command !== "") {
                store.dispatch(setCurrentCommand(command))
                runCommand()
                currentCommandHistory = -1
                currentTypedCommand = ""
            }
            input.value = store.getState().currentCommand
            props.scrollBottom()
        }
        else if (event.key === "ArrowUp") {
            event.preventDefault()
            if (currentCommandHistory === -1) {
                currentCommandHistory = validHistory.length - 1
                currentTypedCommand = store.getState().currentCommand
            } else if (currentCommandHistory > 0) {
                currentCommandHistory--
            }
            store.dispatch(setCurrentCommand(validHistory[currentCommandHistory].command))
            input.value = store.getState().currentCommand
        }
        else if (event.key === "ArrowDown") {
            event.preventDefault()
            if (currentCommandHistory === -1) {
                return
            }
            if (currentCommandHistory < validHistory.length - 1) {
                currentCommandHistory++
                store.dispatch(setCurrentCommand(validHistory[currentCommandHistory].command))
            } else {
                currentCommandHistory = -1
                store.dispatch(setCurrentCommand(currentTypedCommand))
            }
            input.value = store.getState().currentCommand
        }
        else if (event.key === "Tab") {
            event.preventDefault()
            let options = []
            filesystem.forEach((item) => {
                if (item.name.startsWith(inputValue.split(" ")[1])) {
                    options.push(item.name)
                }
            })
            if (options.length === 1) {
                store.dispatch(setCurrentCommand(inputValue.split(" ")[0] + " " + options[0]))
            } else if (options.length > 1) {
                store.dispatch(setCurrentCommand(inputValue.split(" ")[0] + " " + options[0]))
                store.dispatch(setCurrentCommand(inputValue + "\n" + options.join("\t")))
            }
            input.value = store.getState().currentCommand
        }
    }
    return (
        <TerminalCommand>
            <input
                className="input"
                id="termInput"
                onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => handleKeyPress(event)}
                autoFocus
                autoComplete="off"
            />
        </TerminalCommand>
    );
}

export default TerminalInput
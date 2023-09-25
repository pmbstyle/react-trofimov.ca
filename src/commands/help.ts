import commands from "../config/commands"
import { store } from "../store/store"
import { endCurrentCommand } from '../store/terminalSlice'

const help = () => {
	let helpString = "<ul>"
	commands.commands.forEach((command) => {
		helpString += `<li>${command.name}: ${command.description}</li>`
	});
	helpString += "</ul>"
	store.dispatch(endCurrentCommand(helpString))
}

export default help

import ls from "./ls"
import cd from "./cd"
import cat from "./cat"
import pwd from "./pwd"
import help from "./help"
import { checkFileStatus, FileStatus } from "./common"
import { store } from '../store/store'
import { endCurrentCommand } from '../store/terminalSlice'
import clear from "./clear"
import exec from "./exec"

export enum CommandMap {
	ls = "ls",
	l = "l",
	cd = "cd",
	clear = "clear",
	cat = "cat",
	help = "help",
	pwd = "pwd"
}

const runCommand = () => {
	const state = store.getState()
	if (state.currentCommand.trim() === "") {
		store.dispatch(endCurrentCommand(""))
		return
	}
	const commandCalled = /^(\w+)\s?(.*)$/.exec(state.currentCommand) || []
	commandCalled.map((value) => {
		return value.trim()
	})

	if (state.currentCommand.startsWith("#")) {
		store.dispatch(endCurrentCommand(""))
		return
	}

	if (checkFileStatus(state.currentCommand).status === FileStatus.EXIST) {
		exec(state.currentCommand)
		return
	}

	const command = commandCalled[1]
	const arg = commandCalled[2]

	const map: Record<CommandMap, (args: string) => void> = {
		l: ls,
		ls: ls,
		cd: cd,
		clear: clear,
		cat: cat,
		help: help,
		pwd: pwd
	}

	Reflect.has(map, command)
		? map[command as CommandMap](arg)
		: store.dispatch(endCurrentCommand(`bash: command not found: ${commandCalled[1]}`))
}

export default runCommand
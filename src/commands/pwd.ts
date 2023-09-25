import { endCurrentCommand } from '../store/terminalSlice'
import config from "../config"
import { store } from "../store/store"

const pwd = () => {
	const state = store.getState()
	store.dispatch(endCurrentCommand(
		`/home/${config.terminal.visitorUsername}${state.pwd.slice(1)}`
	))
}

export default pwd

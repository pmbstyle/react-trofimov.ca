import { store } from "../store/store"
import { clearHistory, setCurrentCommand } from '../store/terminalSlice'

const clear = () => {
	const state = store.getState()
	store.dispatch(clearHistory())
	store.dispatch(setCurrentCommand(""))
}

export default clear

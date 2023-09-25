import { store } from "../store/store"
import { endCurrentCommand } from '../store/terminalSlice'
import { checkFileStatus, FileStatus } from "../commands/common"

const cd = (path: string) => {
	const state = store.getState()
	const result = checkFileStatus(path);
	if (result.status === FileStatus.EXIST && result.type === "folder") {
		store.dispatch(endCurrentCommand(""))
		state.pwd = result.path;
	} else if (result.status === FileStatus.EXIST) {
		store.dispatch(endCurrentCommand(`cd: not a directory: ${path}`))
	} else if (result.status === FileStatus.NOT_EXIST) {
		store.dispatch(endCurrentCommand(`cd: no such file or directory: ${path}`))
	} else if (result.status === FileStatus.TOO_COMPLEX) {
		store.dispatch(endCurrentCommand(`cd: path too complicated: ${path}`))
	} else {
		store.dispatch(endCurrentCommand(`cd: unknown error`))
	}
}

export default cd

import { store } from "../store/store"
import { endCurrentCommand } from '../store/terminalSlice'
import { checkFileStatus, FileStatus } from "../commands/common"

const cat = (path: string) => {
	const result = checkFileStatus(path)

	if (path.trim() === "") {
		store.dispatch(endCurrentCommand("cat: missing operand"))
		return
	}

	if (result.status === FileStatus.EXIST && result.type === "file") {
		store.dispatch(endCurrentCommand(result.content))
	} else if (result.status === FileStatus.EXIST && result.type === "folder") {
		store.dispatch(endCurrentCommand(`cat: is a directory: ${path}`))
	} else if (result.status === FileStatus.NOT_EXIST) {
		store.dispatch(endCurrentCommand(`cat: no such file or directory: ${path}`))
	} else if (result.status === FileStatus.TOO_COMPLEX) {
		store.dispatch(endCurrentCommand(`cat: path too complicated: ${path}`))
	} else {
		store.dispatch(endCurrentCommand(`cat: unknown error`))
	}
}

export default cat

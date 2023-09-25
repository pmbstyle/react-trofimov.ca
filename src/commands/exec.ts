import { endCurrentCommand } from '../store/terminalSlice'
import { checkFileStatus, FileStatus } from "./common"
import { store } from '../store/store'

const exec = (path: string) => {
	const result = checkFileStatus(path);

	if (result.status !== FileStatus.EXIST) {
		store.dispatch(endCurrentCommand(`exec: no such file or directory: ${path}`))
		return
	}
	if (result.type !== "link") {
		store.dispatch(endCurrentCommand(`exec: not executable: ${path}`))
		return
	}

	endCurrentCommand("")
	window.open(result.content)
};

export default exec

import { store } from "../store/store"
import filesystem from "../config/filesystem"

export enum FileStatus {
	EXIST = "exist",
	NOT_EXIST = "not exist",
	TOO_COMPLEX = "path too complicated",
}

export interface FileStatusValue {
	type?: "folder" | "file" | "link";
	path: string;
	status: FileStatus;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content?: any;
}

const getAbsolutePath = (path: string): string | FileStatus => {
	const state = store.getState()
	if (path === "." || path === "./") {
		return state.pwd;
	}
	if (path === ".." || path === "../") {
		if (state.pwd === "~") return "~";
		return state.pwd.slice(0, state.pwd.lastIndexOf("/"));
	}
	if (path.startsWith("../")) {
		return FileStatus.TOO_COMPLEX;
	}
	if (path === "~" || path === "/" || path === "~/" || path.trim() === "") {
		return "~";
	}
	if (path.endsWith("/")) {
		path = path.slice(0, -1);
	}
	if (path.startsWith("/")) {
		return "~/" + path.slice(1);
	}
	if (path.startsWith("./")) {
		return `${state.pwd}/${path.slice(2)}`;
	}
	return `${state.pwd}/${path}`;
};

const checkFileStatus = (path: string): FileStatusValue => {
	const newPath = getAbsolutePath(path);
	if (
		(path.match(/\./g)?.length || 0) >= 4 ||
		newPath === FileStatus.TOO_COMPLEX
	) {
		return {
			status: FileStatus.TOO_COMPLEX,
			path: "",
		};
	}
	if (newPath === "~") {
		return {
			status: FileStatus.EXIST,
			type: "folder",
			path: "~",
		};
	}
	for (let i = 0; i < filesystem.length; i++) {
		const file = filesystem[i];
		const normalPath = file.path.slice(
			0,
			file.path[file.path.length - 1] === "/" ? -1 : undefined
		);
		if (normalPath === newPath && file.type === "folder") {
			return {
				status: FileStatus.EXIST,
				type: "folder",
				path: newPath,
			};
		} else if (
			file.type !== "folder" &&
			`${normalPath}/${file.name}` === newPath
		) {
			return {
				status: FileStatus.EXIST,
				type: file.type,
				path: `${normalPath}/${file.name}`,
				content: file.content,
			};
		}
	}
	return {
		status: FileStatus.NOT_EXIST,
		path: "",
	};
};

export { getAbsolutePath, checkFileStatus };
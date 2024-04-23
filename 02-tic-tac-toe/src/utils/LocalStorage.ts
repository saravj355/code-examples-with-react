export function saveData(key: string, value: string) {
	window.localStorage.setItem(key, value);
}

export function getData(key: string) {
	return window.localStorage.getItem(key);
}

export function removeData(key: string) {
	window.localStorage.removeItem(key);
}

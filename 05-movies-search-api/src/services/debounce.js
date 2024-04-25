export default function debounce(callback, timeout) {
	let time;
	return (...args) => {
		clearTimeout(time);
		time = setTimeout(() => {
			callback(...args);
		}, timeout);
	};
}

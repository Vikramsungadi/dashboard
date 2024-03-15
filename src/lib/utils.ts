export const capitalize = (word: string) => {
	if (!word) return null;
	return word.charAt(0).toUpperCase() + word.substring(1);
};

export const saveToLocalStorage = (key: string, value: any) => {
	localStorage.setItem(key, value);
};

export const getRandomValueFromArray = (arr: any[]) => {
	let randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};

export function isMobileDevice() {
	return /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}

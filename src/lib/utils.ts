export const capitalize = (word: string) => {
	if (!word) return null;
	return word.charAt(0).toUpperCase() + word.substring(1);
};

export const saveToLocalStorage = (key: string, value: any) => {
	localStorage.setItem(key, value);
};

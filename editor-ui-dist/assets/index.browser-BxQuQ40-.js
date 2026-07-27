//#region ../../../node_modules/.pnpm/nanoid@3.3.8/node_modules/nanoid/index.browser.js
var random = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
var customRandom = (alphabet, defaultSize, getRandom) => {
	let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
	let step = -~(1.6 * mask * defaultSize / alphabet.length);
	return (size = defaultSize) => {
		let id = "";
		while (true) {
			let bytes = getRandom(step);
			let j = step | 0;
			while (j--) {
				id += alphabet[bytes[j] & mask] || "";
				if (id.length === size) return id;
			}
		}
	};
};
var customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
	byte &= 63;
	if (byte < 36) id += byte.toString(36);
	else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
	else if (byte > 62) id += "-";
	else id += "_";
	return id;
}, "");
//#endregion
export { nanoid as n, customAlphabet as t };

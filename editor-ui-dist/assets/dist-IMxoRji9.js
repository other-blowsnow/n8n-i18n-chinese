import { g as NANOID_ALPHABET } from "./useRootStore-3wVnX35v.js";
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
//#endregion
//#region ../../@n8n/utils/dist/workflowId2.mjs
/**
* Generates a unique 16-character nanoid.
*
* This is the canonical ID generator used across the entire n8n codebase for:
* - Workflow IDs
* - Project IDs
* - Variable IDs
* - API Key IDs
* - And other entity IDs
*
* Both frontend and backend MUST use this function to ensure consistency.
*
* @returns A 16-character ID
*
* @example
* ```ts
* const id = generateNanoId();
* // => 'aBcDeFgHiJkLmNoP' (16 characters)
* ```
*/
var generateNanoId = customAlphabet(NANOID_ALPHABET, 16);
//#endregion
//#region ../../@n8n/utils/dist/truncate.mjs
/**
* Replace part of given text with ellipsis following the rules below:
*
* - Remove chars just before the last word, as long as the last word is between
*   minLastWordLength and 15 chars
* - Otherwise preserve the last `lastCharsLength` chars and remove chars before that
*/
function truncateBeforeLast(text, maxLength, lastCharsLength = 5, minLastWordLength = 1) {
	const chars = [];
	const segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
	for (const { segment } of segmenter.segment(text)) chars.push(segment);
	if (chars.length <= maxLength) return text;
	const lastWordIndex = chars.findLastIndex((ch) => ch.match(/^\s+$/)) + 1;
	const lastWord = chars.slice(lastWordIndex);
	const ellipsis = "…";
	const ellipsisLength = 1;
	if (lastWord.length >= minLastWordLength && lastWord.length < 15) {
		const charsToRemove = chars.length - maxLength + ellipsisLength;
		const indexBeforeLastWord = lastWordIndex;
		const keepLength = indexBeforeLastWord - charsToRemove;
		if (keepLength > 0) return chars.slice(0, keepLength).join("") + ellipsis + chars.slice(indexBeforeLastWord).join("");
	}
	if (lastCharsLength < 1) return chars.slice(0, maxLength).join("") + ellipsis;
	return chars.slice(0, maxLength - lastCharsLength - ellipsisLength).join("") + ellipsis + chars.slice(-lastCharsLength).join("");
}
//#endregion
//#region ../../@n8n/utils/dist/sanitize.mjs
var INVALID_CHARS_REGEX = /[<>:"/\\|?*\u0000-\u001F\u007F-\u009F]/g;
var ZERO_WIDTH_CHARS_REGEX = /[\u200B-\u200D\u2060\uFEFF]/g;
var UNICODE_SPACES_REGEX = /[\u00A0\u2000-\u200A]/g;
var LEADING_TRAILING_DOTS_SPACES_REGEX = /^[\s.]+|[\s.]+$/g;
var WINDOWS_RESERVED_NAMES = new Set([
	"CON",
	"PRN",
	"AUX",
	"NUL",
	"COM1",
	"COM2",
	"COM3",
	"COM4",
	"COM5",
	"COM6",
	"COM7",
	"COM8",
	"COM9",
	"LPT1",
	"LPT2",
	"LPT3",
	"LPT4",
	"LPT5",
	"LPT6",
	"LPT7",
	"LPT8",
	"LPT9"
]);
var DEFAULT_FALLBACK_NAME = "untitled";
var MAX_FILENAME_LENGTH = 200;
/**
* Sanitizes a filename to be compatible with Mac, Linux, and Windows file systems
*
* Main features:
* - Replace invalid characters (e.g. ":" in hello:world)
* - Handle Windows reserved names
* - Limit filename length
* - Normalize Unicode characters
*
* @param filename - The filename to sanitize (without extension)
* @param maxLength - Maximum filename length (default: 200)
* @returns A sanitized filename (without extension)
*
* @example
* sanitizeFilename('hello:world') // returns 'hello_world'
* sanitizeFilename('CON') // returns '_CON'
* sanitizeFilename('') // returns 'untitled'
*/
var sanitizeFilename = (filename, maxLength = MAX_FILENAME_LENGTH) => {
	if (!filename) return DEFAULT_FALLBACK_NAME;
	let baseName = filename.trim().replace(INVALID_CHARS_REGEX, "_").replace(ZERO_WIDTH_CHARS_REGEX, "").replace(UNICODE_SPACES_REGEX, " ").replace(LEADING_TRAILING_DOTS_SPACES_REGEX, "");
	if (!baseName) baseName = DEFAULT_FALLBACK_NAME;
	if (WINDOWS_RESERVED_NAMES.has(baseName.toUpperCase())) baseName = `_${baseName}`;
	if (baseName.length > maxLength) baseName = baseName.slice(0, maxLength);
	return baseName;
};
//#endregion
export { truncateBeforeLast as n, generateNanoId as r, sanitizeFilename as t };

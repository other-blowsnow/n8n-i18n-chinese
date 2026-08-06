import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { hi as jsonParse } from "./src-CY9eW8M_.js";
import { t as require_dateformat } from "./dateformat-BBH_bLAf.js";
//#region src/app/utils/objectUtils.ts
function isDateObject(maybeDate) {
	return maybeDate instanceof Date;
}
function isObjectOrArray(maybeObject) {
	return typeof maybeObject === "object" && maybeObject !== null && !isDateObject(maybeObject);
}
function isObject(maybeObject) {
	return isObjectOrArray(maybeObject) && !Array.isArray(maybeObject);
}
function isStringArray(maybeArray) {
	return Array.isArray(maybeArray) && maybeArray.every((item) => typeof item === "string");
}
function isStringArrayRecord(value) {
	return isObject(value) && Object.values(value).every(isStringArray);
}
var searchInObject = (obj, searchString) => (Array.isArray(obj) ? obj : Object.entries(obj)).some((entry) => isObjectOrArray(entry) ? searchInObject(entry, searchString) : entry?.toString().toLowerCase().includes(searchString.toLowerCase()));
/**
* Calculate the size of a stringified object in KB.
* @param {unknown} obj - The object to calculate the size of
* @returns {number} The size of the object in KB
* @throws {Error} If the object is not serializable
*/
var getObjectSizeInKB = (obj) => {
	if (obj === null || obj === void 0) return 0;
	if (typeof obj === "object" && Object.keys(obj).length === 0 || Array.isArray(obj) && obj.length === 0) return Number((2 / 1024).toFixed(2));
	try {
		const str = JSON.stringify(obj);
		const kb = new TextEncoder().encode(str).length / 1024;
		return Number(kb.toFixed(2));
	} catch (error) {
		throw new Error(`Failed to calculate object size: ${error instanceof Error ? error.message : "Unknown error"}`);
	}
};
function omitKey(obj, key) {
	return Object.fromEntries(Object.entries(obj).filter(([k]) => k !== key));
}
//#endregion
//#region src/app/utils/typesUtils.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var SI_SYMBOL = [
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E"
];
var omit = (keyToOmit, { [keyToOmit]: _, ...remainder }) => remainder;
function isJsonKeyObject(item) {
	if (!isObject(item)) return false;
	return Object.keys(item).includes("json");
}
var isEmpty = (value) => {
	if (!value && value !== 0) return true;
	if (Array.isArray(value)) return !value.length || value.every(isEmpty);
	if (typeof value === "object") return !Object.keys(value).length || Object.values(value).every(isEmpty);
	return false;
};
function abbreviateNumber(num) {
	if (!Number.isFinite(num)) return String(num);
	const abs = Math.abs(num);
	if (abs < 1e3) return String(num);
	let tier = Math.min(Math.floor(Math.log10(abs) / 3), SI_SYMBOL.length - 1);
	let scaled = Number((num / Math.pow(10, tier * 3)).toFixed(1));
	if (Math.abs(scaled) >= 1e3 && tier < SI_SYMBOL.length - 1) {
		tier += 1;
		scaled = Number((num / Math.pow(10, tier * 3)).toFixed(1));
	}
	return `${scaled}${SI_SYMBOL[tier]}`;
}
function convertToDisplayDate(epochTime) {
	return (0, import_dateformat.default)(epochTime, "yyyy-mm-dd HH:MM:ss");
}
function convertToHumanReadableDate(epochTime) {
	return (0, import_dateformat.default)(epochTime, "d mmmm, yyyy @ HH:MM Z");
}
function stringSizeInBytes(input) {
	if (input === void 0) return 0;
	return new Blob([typeof input === "string" ? input : JSON.stringify(input)]).size;
}
function toMegaBytes(bytes, decimalPlaces = 2) {
	const megabytes = bytes / 1024 / 1024;
	return parseFloat(megabytes.toFixed(decimalPlaces));
}
function formatBytes(sizeInBytes) {
	if (sizeInBytes < 1024) return `${sizeInBytes}B`;
	if (sizeInBytes < 1024 * 1024) return `${Math.round(sizeInBytes / 1024)}KB`;
	return `${Math.round(sizeInBytes / (1024 * 1024))}MB`;
}
function shorten(s, limit, keep) {
	if (s.length <= limit) return s;
	return `${s.slice(0, limit - keep)}...${s.slice(s.length - keep, s.length)}`;
}
var convertPath = (path) => {
	const placeholder = "*___~#^#~___*";
	let inBrackets = path.match(/\[(.*?)]/g) ?? [];
	inBrackets = inBrackets.map((item) => item.slice(1, -1)).map((item) => {
		if (item.startsWith("\"") && item.endsWith("\"")) return item.slice(1, -1);
		return item;
	});
	const pathParts = path.replace(/\[(.*?)]/g, placeholder).split(".");
	const allParts = [];
	pathParts.forEach((part) => {
		let index = part.indexOf(placeholder);
		while (index !== -1) {
			if (index === 0) {
				allParts.push(inBrackets.shift() ?? "");
				part = part.substr(13);
			} else {
				allParts.push(part.substr(0, index));
				part = part.substr(index);
			}
			index = part.indexOf(placeholder);
		}
		if (part !== "") allParts.push(part);
	});
	return "[\"" + allParts.join("\"][\"") + "\"]";
};
var clearJsonKey = (userInput) => {
	const parsedUserInput = typeof userInput === "string" ? jsonParse(userInput) : userInput;
	if (!Array.isArray(parsedUserInput)) return parsedUserInput;
	return parsedUserInput.map((item) => isJsonKeyObject(item) ? item.json : item);
};
/**
* Converts a string to a number if possible. If not it returns the original string.
* For a string to be converted to a number it has to contain only digits.
* @param value The value to convert to a number
*/
var tryToParseNumber = (value) => {
	return isNaN(+value) ? value : +value;
};
function isPresent(arg) {
	return arg !== null && arg !== void 0;
}
function isFocusableEl(el) {
	return typeof el === "object" && el !== null && "focus" in el && typeof el.focus === "function";
}
function isBlurrableEl(el) {
	return typeof el === "object" && el !== null && "blur" in el && typeof el.blur === "function";
}
function isSelectableEl(el) {
	return typeof el === "object" && el !== null && "select" in el && typeof el.select === "function";
}
function hasFocusOnInput(el) {
	return typeof el === "object" && el !== null && "focusOnInput" in el && typeof el.focusOnInput === "function";
}
//#endregion
export { searchInObject as C, omitKey as S, toMegaBytes as _, convertToHumanReadableDate as a, isObject as b, isBlurrableEl as c, isJsonKeyObject as d, isPresent as f, stringSizeInBytes as g, shorten as h, convertToDisplayDate as i, isEmpty as l, omit as m, clearJsonKey as n, formatBytes as o, isSelectableEl as p, convertPath as r, hasFocusOnInput as s, abbreviateNumber as t, isFocusableEl as u, tryToParseNumber as v, isStringArrayRecord as x, getObjectSizeInKB as y };

import { t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { C as computed, Dt as getCurrentScope, Et as effectScope, F as getCurrentInstance, Ft as readonly, G as nextTick, Gt as unref, Ht as toRefs$1, It as ref, L as h, M as createVNode, Nt as onScopeDispose, P as defineComponent, Pt as reactive, Q as onUnmounted, Tt as customRef, Vt as toRef$1, Z as onMounted, _ as Fragment, _t as watch, jt as isRef, nt as provide, vt as watchEffect, x as Text, z as inject, zt as shallowRef } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
function warn(msg, err) {
	if (typeof console !== "undefined") {
		console.warn(`[intlify] ` + msg);
		/* istanbul ignore if */
		if (err) console.warn(err.stack);
	}
}
var inBrowser = typeof window !== "undefined";
var makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
var generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({
	l: locale,
	k: key,
	s: source
});
var friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
var isNumber = (val) => typeof val === "number" && isFinite(val);
var isDate = (val) => toTypeString(val) === "[object Date]";
var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
var isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
var assign = Object.assign;
var _create = Object.create;
var create = (obj = null) => _create(obj);
var _globalThis;
var getGlobalThis = () => {
	return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : create());
};
function escapeHtml(rawText) {
	return rawText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function escapeAttributeValue(value) {
	return value.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sanitizeTranslatedHtml(html) {
	html = html.replace(/(\w+)\s*=\s*"([^"]*)"/g, (_, attrName, attrValue) => `${attrName}="${escapeAttributeValue(attrValue)}"`);
	html = html.replace(/(\w+)\s*=\s*'([^']*)'/g, (_, attrName, attrValue) => `${attrName}='${escapeAttributeValue(attrValue)}'`);
	if (/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(html)) html = html.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3");
	[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((pattern) => {
		html = html.replace(pattern, "$1javascript&#58;");
	});
	return html;
}
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function hasOwn$1(obj, key) {
	return hasOwnProperty$4.call(obj, key);
}
var isArray$1 = Array.isArray;
var isFunction$2 = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isBoolean = (val) => typeof val === "boolean";
var isObject$4 = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
	return isObject$4(val) && isFunction$2(val.then) && isFunction$2(val.catch);
};
var objectToString$2 = Object.prototype.toString;
var toTypeString = (value) => objectToString$2.call(value);
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var toDisplayString = (val) => {
	return val == null ? "" : isArray$1(val) || isPlainObject(val) && val.toString === objectToString$2 ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
	return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
var isNotObjectOrIsArray = (val) => !isObject$4(val) || isArray$1(val);
function deepCopy(src, des) {
	if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) throw new Error("Invalid value");
	const stack = [{
		src,
		des
	}];
	while (stack.length) {
		const { src: src$1, des: des$1 } = stack.pop();
		Object.keys(src$1).forEach((key) => {
			if (key === "__proto__") return;
			if (isObject$4(src$1[key]) && !isObject$4(des$1[key])) des$1[key] = Array.isArray(src$1[key]) ? [] : create();
			if (isNotObjectOrIsArray(des$1[key]) || isNotObjectOrIsArray(src$1[key])) des$1[key] = src$1[key];
			else stack.push({
				src: src$1[key],
				des: des$1[key]
			});
		});
	}
}
function createPosition(line, column, offset) {
	return {
		line,
		column,
		offset
	};
}
function createLocation(start, end, source) {
	const loc = {
		start,
		end
	};
	if (source != null) loc.source = source;
	return loc;
}
var CompileErrorCodes = {
	EXPECTED_TOKEN: 1,
	INVALID_TOKEN_IN_PLACEHOLDER: 2,
	UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
	UNKNOWN_ESCAPE_SEQUENCE: 4,
	INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
	UNBALANCED_CLOSING_BRACE: 6,
	UNTERMINATED_CLOSING_BRACE: 7,
	EMPTY_PLACEHOLDER: 8,
	NOT_ALLOW_NEST_PLACEHOLDER: 9,
	INVALID_LINKED_FORMAT: 10,
	MUST_HAVE_MESSAGES_IN_PLURAL: 11,
	UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
	UNEXPECTED_EMPTY_LINKED_KEY: 13,
	UNEXPECTED_LEXICAL_ANALYSIS: 14,
	UNHANDLED_CODEGEN_NODE_TYPE: 15,
	UNHANDLED_MINIFIER_NODE_TYPE: 16
};
CompileErrorCodes.EXPECTED_TOKEN, CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, CompileErrorCodes.UNBALANCED_CLOSING_BRACE, CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, CompileErrorCodes.EMPTY_PLACEHOLDER, CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, CompileErrorCodes.INVALID_LINKED_FORMAT, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE, CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE;
function createCompileError(code, loc, options = {}) {
	const { domain, messages, args } = options;
	const msg = code;
	const error$2 = new SyntaxError(String(msg));
	error$2.code = code;
	if (loc) error$2.location = loc;
	error$2.domain = domain;
	return error$2;
}
function defaultOnError(error$2) {
	throw error$2;
}
var CHAR_SP = " ";
var CHAR_CR = "\r";
var CHAR_LF = "\n";
var CHAR_LS = String.fromCharCode(8232);
var CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
	const _buf = str;
	let _index = 0;
	let _line = 1;
	let _column = 1;
	let _peekOffset = 0;
	const isCRLF = (index$1) => _buf[index$1] === CHAR_CR && _buf[index$1 + 1] === CHAR_LF;
	const isLF = (index$1) => _buf[index$1] === CHAR_LF;
	const isPS = (index$1) => _buf[index$1] === CHAR_PS;
	const isLS = (index$1) => _buf[index$1] === CHAR_LS;
	const isLineEnd = (index$1) => isCRLF(index$1) || isLF(index$1) || isPS(index$1) || isLS(index$1);
	const index = () => _index;
	const line = () => _line;
	const column = () => _column;
	const peekOffset = () => _peekOffset;
	const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
	const currentChar = () => charAt(_index);
	const currentPeek = () => charAt(_index + _peekOffset);
	function next() {
		_peekOffset = 0;
		if (isLineEnd(_index)) {
			_line++;
			_column = 0;
		}
		if (isCRLF(_index)) _index++;
		_index++;
		_column++;
		return _buf[_index];
	}
	function peek() {
		if (isCRLF(_index + _peekOffset)) _peekOffset++;
		_peekOffset++;
		return _buf[_index + _peekOffset];
	}
	function reset() {
		_index = 0;
		_line = 1;
		_column = 1;
		_peekOffset = 0;
	}
	function resetPeek(offset = 0) {
		_peekOffset = offset;
	}
	function skipToPeek() {
		const target = _index + _peekOffset;
		while (target !== _index) next();
		_peekOffset = 0;
	}
	return {
		index,
		line,
		column,
		peekOffset,
		charAt,
		currentChar,
		currentPeek,
		next,
		peek,
		reset,
		resetPeek,
		skipToPeek
	};
}
var EOF = void 0;
var DOT = ".";
var LITERAL_DELIMITER = "'";
var ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
	const location = options.location !== false;
	const _scnr = createScanner(source);
	const currentOffset = () => _scnr.index();
	const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
	const _initLoc = currentPosition();
	const _initOffset = currentOffset();
	const _context = {
		currentType: 13,
		offset: _initOffset,
		startLoc: _initLoc,
		endLoc: _initLoc,
		lastType: 13,
		lastOffset: _initOffset,
		lastStartLoc: _initLoc,
		lastEndLoc: _initLoc,
		braceNest: 0,
		inLinked: false,
		text: ""
	};
	const context = () => _context;
	const { onError } = options;
	function emitError(code, pos, offset, ...args) {
		const ctx = context();
		pos.column += offset;
		pos.offset += offset;
		if (onError) onError(createCompileError(code, location ? createLocation(ctx.startLoc, pos) : null, {
			domain: ERROR_DOMAIN$3,
			args
		}));
	}
	function getToken(context$1, type, value) {
		context$1.endLoc = currentPosition();
		context$1.currentType = type;
		const token = { type };
		if (location) token.loc = createLocation(context$1.startLoc, context$1.endLoc);
		if (value != null) token.value = value;
		return token;
	}
	const getEndToken = (context$1) => getToken(context$1, 13);
	function eat(scnr, ch) {
		if (scnr.currentChar() === ch) {
			scnr.next();
			return ch;
		} else {
			emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
			return "";
		}
	}
	function peekSpaces(scnr) {
		let buf = "";
		while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
			buf += scnr.currentPeek();
			scnr.peek();
		}
		return buf;
	}
	function skipSpaces(scnr) {
		const buf = peekSpaces(scnr);
		scnr.skipToPeek();
		return buf;
	}
	function isIdentifierStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc === 95;
	}
	function isNumberStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function isNamedIdentifierStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isListIdentifierStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isNumberStart(scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLiteralStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === LITERAL_DELIMITER;
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDotStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 7) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ".";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedModifierStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 8) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDelimiterStart(scnr, context$1) {
		const { currentType } = context$1;
		if (!(currentType === 7 || currentType === 11)) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ":";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedReferStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 9) return false;
		const fn = () => {
			const ch = scnr.currentPeek();
			if (ch === "{") return isIdentifierStart(scnr.peek());
			else if (ch === "@" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) return false;
			else if (ch === CHAR_LF) {
				scnr.peek();
				return fn();
			} else return isTextStart(scnr, false);
		};
		const ret = fn();
		scnr.resetPeek();
		return ret;
	}
	function isPluralStart(scnr) {
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === "|";
		scnr.resetPeek();
		return ret;
	}
	function isTextStart(scnr, reset = true) {
		const fn = (hasSpace = false, prev = "") => {
			const ch = scnr.currentPeek();
			if (ch === "{") return hasSpace;
			else if (ch === "@" || !ch) return hasSpace;
			else if (ch === "|") return !(prev === CHAR_SP || prev === CHAR_LF);
			else if (ch === CHAR_SP) {
				scnr.peek();
				return fn(true, CHAR_SP);
			} else if (ch === CHAR_LF) {
				scnr.peek();
				return fn(true, CHAR_LF);
			} else return true;
		};
		const ret = fn();
		reset && scnr.resetPeek();
		return ret;
	}
	function takeChar(scnr, fn) {
		const ch = scnr.currentChar();
		if (ch === EOF) return EOF;
		if (fn(ch)) {
			scnr.next();
			return ch;
		}
		return null;
	}
	function isIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36;
	}
	function takeIdentifierChar(scnr) {
		return takeChar(scnr, isIdentifier);
	}
	function isNamedIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36 || cc === 45;
	}
	function takeNamedIdentifierChar(scnr) {
		return takeChar(scnr, isNamedIdentifier);
	}
	function isDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function takeDigit(scnr) {
		return takeChar(scnr, isDigit);
	}
	function isHexDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57 || cc >= 65 && cc <= 70 || cc >= 97 && cc <= 102;
	}
	function takeHexDigit(scnr) {
		return takeChar(scnr, isHexDigit);
	}
	function getDigits(scnr) {
		let ch = "";
		let num = "";
		while (ch = takeDigit(scnr)) num += ch;
		return num;
	}
	function readText(scnr) {
		let buf = "";
		while (true) {
			const ch = scnr.currentChar();
			if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) break;
			else if (ch === CHAR_SP || ch === CHAR_LF) if (isTextStart(scnr)) {
				buf += ch;
				scnr.next();
			} else if (isPluralStart(scnr)) break;
			else {
				buf += ch;
				scnr.next();
			}
			else {
				buf += ch;
				scnr.next();
			}
		}
		return buf;
	}
	function readNamedIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let name = "";
		while (ch = takeNamedIdentifierChar(scnr)) name += ch;
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return name;
	}
	function readListIdentifier(scnr) {
		skipSpaces(scnr);
		let value = "";
		if (scnr.currentChar() === "-") {
			scnr.next();
			value += `-${getDigits(scnr)}`;
		} else value += getDigits(scnr);
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return value;
	}
	function isLiteral$1(ch) {
		return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
	}
	function readLiteral(scnr) {
		skipSpaces(scnr);
		eat(scnr, `\'`);
		let ch = "";
		let literal = "";
		while (ch = takeChar(scnr, isLiteral$1)) if (ch === "\\") literal += readEscapeSequence(scnr);
		else literal += ch;
		const current = scnr.currentChar();
		if (current === CHAR_LF || current === EOF) {
			emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
			if (current === CHAR_LF) {
				scnr.next();
				eat(scnr, `\'`);
			}
			return literal;
		}
		eat(scnr, `\'`);
		return literal;
	}
	function readEscapeSequence(scnr) {
		const ch = scnr.currentChar();
		switch (ch) {
			case "\\":
			case `\'`:
				scnr.next();
				return `\\${ch}`;
			case "u": return readUnicodeEscapeSequence(scnr, ch, 4);
			case "U": return readUnicodeEscapeSequence(scnr, ch, 6);
			default:
				emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
				return "";
		}
	}
	function readUnicodeEscapeSequence(scnr, unicode, digits) {
		eat(scnr, unicode);
		let sequence = "";
		for (let i = 0; i < digits; i++) {
			const ch = takeHexDigit(scnr);
			if (!ch) {
				emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
				break;
			}
			sequence += ch;
		}
		return `\\${unicode}${sequence}`;
	}
	function isInvalidIdentifier(ch) {
		return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
	}
	function readInvalidIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let identifiers = "";
		while (ch = takeChar(scnr, isInvalidIdentifier)) identifiers += ch;
		return identifiers;
	}
	function readLinkedModifier(scnr) {
		let ch = "";
		let name = "";
		while (ch = takeIdentifierChar(scnr)) name += ch;
		return name;
	}
	function readLinkedRefer(scnr) {
		const fn = (buf) => {
			const ch = scnr.currentChar();
			if (ch === "{" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) return buf;
			else if (ch === CHAR_SP) return buf;
			else if (ch === CHAR_LF || ch === DOT) {
				buf += ch;
				scnr.next();
				return fn(buf);
			} else {
				buf += ch;
				scnr.next();
				return fn(buf);
			}
		};
		return fn("");
	}
	function readPlural(scnr) {
		skipSpaces(scnr);
		const plural = eat(scnr, "|");
		skipSpaces(scnr);
		return plural;
	}
	function readTokenInPlaceholder(scnr, context$1) {
		let token = null;
		switch (scnr.currentChar()) {
			case "{":
				if (context$1.braceNest >= 1) emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context$1, 2, "{");
				skipSpaces(scnr);
				context$1.braceNest++;
				return token;
			case "}":
				if (context$1.braceNest > 0 && context$1.currentType === 2) emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context$1, 3, "}");
				context$1.braceNest--;
				context$1.braceNest > 0 && skipSpaces(scnr);
				if (context$1.inLinked && context$1.braceNest === 0) context$1.inLinked = false;
				return token;
			case "@":
				if (context$1.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
				token = readTokenInLinked(scnr, context$1) || getEndToken(context$1);
				context$1.braceNest = 0;
				return token;
			default: {
				let validNamedIdentifier = true;
				let validListIdentifier = true;
				let validLiteral = true;
				if (isPluralStart(scnr)) {
					if (context$1.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					token = getToken(context$1, 1, readPlural(scnr));
					context$1.braceNest = 0;
					context$1.inLinked = false;
					return token;
				}
				if (context$1.braceNest > 0 && (context$1.currentType === 4 || context$1.currentType === 5 || context$1.currentType === 6)) {
					emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					context$1.braceNest = 0;
					return readToken(scnr, context$1);
				}
				if (validNamedIdentifier = isNamedIdentifierStart(scnr, context$1)) {
					token = getToken(context$1, 4, readNamedIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validListIdentifier = isListIdentifierStart(scnr, context$1)) {
					token = getToken(context$1, 5, readListIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validLiteral = isLiteralStart(scnr, context$1)) {
					token = getToken(context$1, 6, readLiteral(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
					token = getToken(context$1, 12, readInvalidIdentifier(scnr));
					emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
					skipSpaces(scnr);
					return token;
				}
				break;
			}
		}
		return token;
	}
	function readTokenInLinked(scnr, context$1) {
		const { currentType } = context$1;
		let token = null;
		const ch = scnr.currentChar();
		if ((currentType === 7 || currentType === 8 || currentType === 11 || currentType === 9) && (ch === CHAR_LF || ch === CHAR_SP)) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
		switch (ch) {
			case "@":
				scnr.next();
				token = getToken(context$1, 7, "@");
				context$1.inLinked = true;
				return token;
			case ".":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context$1, 8, ".");
			case ":":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context$1, 9, ":");
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context$1, 1, readPlural(scnr));
					context$1.braceNest = 0;
					context$1.inLinked = false;
					return token;
				}
				if (isLinkedDotStart(scnr, context$1) || isLinkedDelimiterStart(scnr, context$1)) {
					skipSpaces(scnr);
					return readTokenInLinked(scnr, context$1);
				}
				if (isLinkedModifierStart(scnr, context$1)) {
					skipSpaces(scnr);
					return getToken(context$1, 11, readLinkedModifier(scnr));
				}
				if (isLinkedReferStart(scnr, context$1)) {
					skipSpaces(scnr);
					if (ch === "{") return readTokenInPlaceholder(scnr, context$1) || token;
					else return getToken(context$1, 10, readLinkedRefer(scnr));
				}
				if (currentType === 7) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
				context$1.braceNest = 0;
				context$1.inLinked = false;
				return readToken(scnr, context$1);
		}
	}
	function readToken(scnr, context$1) {
		let token = { type: 13 };
		if (context$1.braceNest > 0) return readTokenInPlaceholder(scnr, context$1) || getEndToken(context$1);
		if (context$1.inLinked) return readTokenInLinked(scnr, context$1) || getEndToken(context$1);
		switch (scnr.currentChar()) {
			case "{": return readTokenInPlaceholder(scnr, context$1) || getEndToken(context$1);
			case "}":
				emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
				scnr.next();
				return getToken(context$1, 3, "}");
			case "@": return readTokenInLinked(scnr, context$1) || getEndToken(context$1);
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context$1, 1, readPlural(scnr));
					context$1.braceNest = 0;
					context$1.inLinked = false;
					return token;
				}
				if (isTextStart(scnr)) return getToken(context$1, 0, readText(scnr));
				break;
		}
		return token;
	}
	function nextToken() {
		const { currentType, offset, startLoc, endLoc } = _context;
		_context.lastType = currentType;
		_context.lastOffset = offset;
		_context.lastStartLoc = startLoc;
		_context.lastEndLoc = endLoc;
		_context.offset = currentOffset();
		_context.startLoc = currentPosition();
		if (_scnr.currentChar() === EOF) return getToken(_context, 13);
		return readToken(_scnr, _context);
	}
	return {
		nextToken,
		currentOffset,
		currentPosition,
		context
	};
}
var ERROR_DOMAIN$2 = "parser";
var KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
	switch (match) {
		case `\\\\`: return `\\`;
		case `\\\'`: return `\'`;
		default: {
			const codePoint = parseInt(codePoint4 || codePoint6, 16);
			if (codePoint <= 55295 || codePoint >= 57344) return String.fromCodePoint(codePoint);
			return "�";
		}
	}
}
function createParser(options = {}) {
	const location = options.location !== false;
	const { onError } = options;
	function emitError(tokenzer, code, start, offset, ...args) {
		const end = tokenzer.currentPosition();
		end.offset += offset;
		end.column += offset;
		if (onError) onError(createCompileError(code, location ? createLocation(start, end) : null, {
			domain: ERROR_DOMAIN$2,
			args
		}));
	}
	function startNode(type, offset, loc) {
		const node = { type };
		if (location) {
			node.start = offset;
			node.end = offset;
			node.loc = {
				start: loc,
				end: loc
			};
		}
		return node;
	}
	function endNode(node, offset, pos, type) {
		if (location) {
			node.end = offset;
			if (node.loc) node.loc.end = pos;
		}
	}
	function parseText(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(3, context.offset, context.startLoc);
		node.value = value;
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseList(tokenizer, index) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(5, offset, loc);
		node.index = parseInt(index, 10);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseNamed(tokenizer, key) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(4, offset, loc);
		node.key = key;
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLiteral(tokenizer, value) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(9, offset, loc);
		node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinkedModifier(tokenizer) {
		const token = tokenizer.nextToken();
		const context = tokenizer.context();
		const { lastOffset: offset, lastStartLoc: loc } = context;
		const node = startNode(8, offset, loc);
		if (token.type !== 11) {
			emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
			node.value = "";
			endNode(node, offset, loc);
			return {
				nextConsumeToken: token,
				node
			};
		}
		if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		node.value = token.value || "";
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node };
	}
	function parseLinkedKey(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(7, context.offset, context.startLoc);
		node.value = value;
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinked(tokenizer) {
		const context = tokenizer.context();
		const linkedNode = startNode(6, context.offset, context.startLoc);
		let token = tokenizer.nextToken();
		if (token.type === 8) {
			const parsed = parseLinkedModifier(tokenizer);
			linkedNode.modifier = parsed.node;
			token = parsed.nextConsumeToken || tokenizer.nextToken();
		}
		if (token.type !== 9) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		token = tokenizer.nextToken();
		if (token.type === 2) token = tokenizer.nextToken();
		switch (token.type) {
			case 10:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
				break;
			case 4:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseNamed(tokenizer, token.value || "");
				break;
			case 5:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseList(tokenizer, token.value || "");
				break;
			case 6:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLiteral(tokenizer, token.value || "");
				break;
			default: {
				emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
				const nextContext = tokenizer.context();
				const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
				emptyLinkedKeyNode.value = "";
				endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
				linkedNode.key = emptyLinkedKeyNode;
				endNode(linkedNode, nextContext.offset, nextContext.startLoc);
				return {
					nextConsumeToken: token,
					node: linkedNode
				};
			}
		}
		endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node: linkedNode };
	}
	function parseMessage(tokenizer) {
		const context = tokenizer.context();
		const node = startNode(2, context.currentType === 1 ? tokenizer.currentOffset() : context.offset, context.currentType === 1 ? context.endLoc : context.startLoc);
		node.items = [];
		let nextToken = null;
		do {
			const token = nextToken || tokenizer.nextToken();
			nextToken = null;
			switch (token.type) {
				case 0:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseText(tokenizer, token.value || ""));
					break;
				case 5:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseList(tokenizer, token.value || ""));
					break;
				case 4:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseNamed(tokenizer, token.value || ""));
					break;
				case 6:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseLiteral(tokenizer, token.value || ""));
					break;
				case 7: {
					const parsed = parseLinked(tokenizer);
					node.items.push(parsed.node);
					nextToken = parsed.nextConsumeToken || null;
					break;
				}
			}
		} while (context.currentType !== 13 && context.currentType !== 1);
		endNode(node, context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset(), context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition());
		return node;
	}
	function parsePlural(tokenizer, offset, loc, msgNode) {
		const context = tokenizer.context();
		let hasEmptyMessage = msgNode.items.length === 0;
		const node = startNode(1, offset, loc);
		node.cases = [];
		node.cases.push(msgNode);
		do {
			const msg = parseMessage(tokenizer);
			if (!hasEmptyMessage) hasEmptyMessage = msg.items.length === 0;
			node.cases.push(msg);
		} while (context.currentType !== 13);
		if (hasEmptyMessage) emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseResource(tokenizer) {
		const context = tokenizer.context();
		const { offset, startLoc } = context;
		const msgNode = parseMessage(tokenizer);
		if (context.currentType === 13) return msgNode;
		else return parsePlural(tokenizer, offset, startLoc, msgNode);
	}
	function parse$1(source) {
		const tokenizer = createTokenizer(source, assign({}, options));
		const context = tokenizer.context();
		const node = startNode(0, context.offset, context.startLoc);
		if (location && node.loc) node.loc.source = source;
		node.body = parseResource(tokenizer);
		if (options.onCacheKey) node.cacheKey = options.onCacheKey(source);
		if (context.currentType !== 13) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	return { parse: parse$1 };
}
function getTokenCaption(token) {
	if (token.type === 13) return "EOF";
	const name = (token.value || "").replace(/\r?\n/gu, "\\n");
	return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
	const _context = {
		ast,
		helpers: /* @__PURE__ */ new Set()
	};
	const context = () => _context;
	const helper = (name) => {
		_context.helpers.add(name);
		return name;
	};
	return {
		context,
		helper
	};
}
function traverseNodes(nodes, transformer) {
	for (let i = 0; i < nodes.length; i++) traverseNode(nodes[i], transformer);
}
function traverseNode(node, transformer) {
	switch (node.type) {
		case 1:
			traverseNodes(node.cases, transformer);
			transformer.helper("plural");
			break;
		case 2:
			traverseNodes(node.items, transformer);
			break;
		case 6:
			traverseNode(node.key, transformer);
			transformer.helper("linked");
			transformer.helper("type");
			break;
		case 5:
			transformer.helper("interpolate");
			transformer.helper("list");
			break;
		case 4:
			transformer.helper("interpolate");
			transformer.helper("named");
			break;
	}
}
function transform(ast, options = {}) {
	const transformer = createTransformer(ast);
	transformer.helper("normalize");
	ast.body && traverseNode(ast.body, transformer);
	const context = transformer.context();
	ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
	const body = ast.body;
	if (body.type === 2) optimizeMessageNode(body);
	else body.cases.forEach((c) => optimizeMessageNode(c));
	return ast;
}
function optimizeMessageNode(message) {
	if (message.items.length === 1) {
		const item = message.items[0];
		if (item.type === 3 || item.type === 9) {
			message.static = item.value;
			delete item.value;
		}
	} else {
		const values = [];
		for (let i = 0; i < message.items.length; i++) {
			const item = message.items[i];
			if (!(item.type === 3 || item.type === 9)) break;
			if (item.value == null) break;
			values.push(item.value);
		}
		if (values.length === message.items.length) {
			message.static = join(values);
			for (let i = 0; i < message.items.length; i++) {
				const item = message.items[i];
				if (item.type === 3 || item.type === 9) delete item.value;
			}
		}
	}
}
function minify(node) {
	node.t = node.type;
	switch (node.type) {
		case 0: {
			const resource = node;
			minify(resource.body);
			resource.b = resource.body;
			delete resource.body;
			break;
		}
		case 1: {
			const plural = node;
			const cases = plural.cases;
			for (let i = 0; i < cases.length; i++) minify(cases[i]);
			plural.c = cases;
			delete plural.cases;
			break;
		}
		case 2: {
			const message = node;
			const items = message.items;
			for (let i = 0; i < items.length; i++) minify(items[i]);
			message.i = items;
			delete message.items;
			if (message.static) {
				message.s = message.static;
				delete message.static;
			}
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			const valueNode = node;
			if (valueNode.value) {
				valueNode.v = valueNode.value;
				delete valueNode.value;
			}
			break;
		}
		case 6: {
			const linked = node;
			minify(linked.key);
			linked.k = linked.key;
			delete linked.key;
			if (linked.modifier) {
				minify(linked.modifier);
				linked.m = linked.modifier;
				delete linked.modifier;
			}
			break;
		}
		case 5: {
			const list = node;
			list.i = list.index;
			delete list.index;
			break;
		}
		case 4: {
			const named = node;
			named.k = named.key;
			delete named.key;
			break;
		}
		default:
	}
	delete node.type;
}
function createCodeGenerator(ast, options) {
	const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
	const location = options.location !== false;
	const _context = {
		filename,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode,
		needIndent: _needIndent,
		indentLevel: 0
	};
	if (location && ast.loc) _context.source = ast.loc.source;
	const context = () => _context;
	function push(code, node) {
		_context.code += code;
	}
	function _newline(n, withBreakLine = true) {
		const _breakLineCode = withBreakLine ? breakLineCode : "";
		push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
	}
	function indent(withNewLine = true) {
		const level = ++_context.indentLevel;
		withNewLine && _newline(level);
	}
	function deindent(withNewLine = true) {
		const level = --_context.indentLevel;
		withNewLine && _newline(level);
	}
	function newline() {
		_newline(_context.indentLevel);
	}
	const helper = (key) => `_${key}`;
	const needIndent = () => _context.needIndent;
	return {
		context,
		push,
		indent,
		deindent,
		newline,
		helper,
		needIndent
	};
}
function generateLinkedNode(generator, node) {
	const { helper } = generator;
	generator.push(`${helper("linked")}(`);
	generateNode(generator, node.key);
	if (node.modifier) {
		generator.push(`, `);
		generateNode(generator, node.modifier);
		generator.push(`, _type`);
	} else generator.push(`, undefined, _type`);
	generator.push(`)`);
}
function generateMessageNode(generator, node) {
	const { helper, needIndent } = generator;
	generator.push(`${helper("normalize")}([`);
	generator.indent(needIndent());
	const length = node.items.length;
	for (let i = 0; i < length; i++) {
		generateNode(generator, node.items[i]);
		if (i === length - 1) break;
		generator.push(", ");
	}
	generator.deindent(needIndent());
	generator.push("])");
}
function generatePluralNode(generator, node) {
	const { helper, needIndent } = generator;
	if (node.cases.length > 1) {
		generator.push(`${helper("plural")}([`);
		generator.indent(needIndent());
		const length = node.cases.length;
		for (let i = 0; i < length; i++) {
			generateNode(generator, node.cases[i]);
			if (i === length - 1) break;
			generator.push(", ");
		}
		generator.deindent(needIndent());
		generator.push(`])`);
	}
}
function generateResource(generator, node) {
	if (node.body) generateNode(generator, node.body);
	else generator.push("null");
}
function generateNode(generator, node) {
	const { helper } = generator;
	switch (node.type) {
		case 0:
			generateResource(generator, node);
			break;
		case 1:
			generatePluralNode(generator, node);
			break;
		case 2:
			generateMessageNode(generator, node);
			break;
		case 6:
			generateLinkedNode(generator, node);
			break;
		case 8:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 7:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 5:
			generator.push(`${helper("interpolate")}(${helper("list")}(${node.index}))`, node);
			break;
		case 4:
			generator.push(`${helper("interpolate")}(${helper("named")}(${JSON.stringify(node.key)}))`, node);
			break;
		case 9:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 3:
			generator.push(JSON.stringify(node.value), node);
			break;
		default:
	}
}
var generate = (ast, options = {}) => {
	const mode = isString(options.mode) ? options.mode : "normal";
	const filename = isString(options.filename) ? options.filename : "message.intl";
	const sourceMap = !!options.sourceMap;
	const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
	const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
	const helpers = ast.helpers || [];
	const generator = createCodeGenerator(ast, {
		mode,
		filename,
		sourceMap,
		breakLineCode,
		needIndent
	});
	generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
	generator.indent(needIndent);
	if (helpers.length > 0) {
		generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
		generator.newline();
	}
	generator.push(`return `);
	generateNode(generator, ast);
	generator.deindent(needIndent);
	generator.push(`}`);
	delete ast.helpers;
	const { code, map } = generator.context();
	return {
		ast,
		code,
		map: map ? map.toJSON() : void 0
	};
};
function baseCompile(source, options = {}) {
	const assignedOptions = assign({}, options);
	const jit = !!assignedOptions.jit;
	const enalbeMinify = !!assignedOptions.minify;
	const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
	const ast = createParser(assignedOptions).parse(source);
	if (!jit) {
		transform(ast, assignedOptions);
		return generate(ast, assignedOptions);
	} else {
		enambeOptimize && optimize(ast);
		enalbeMinify && minify(ast);
		return {
			ast,
			code: ""
		};
	}
}
function initFeatureFlags$1() {
	if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
	if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
}
function isMessageAST(val) {
	return isObject$4(val) && resolveType(val) === 0 && (hasOwn$1(val, "b") || hasOwn$1(val, "body"));
}
var PROPS_BODY = ["b", "body"];
function resolveBody(node) {
	return resolveProps(node, PROPS_BODY);
}
var PROPS_CASES = ["c", "cases"];
function resolveCases(node) {
	return resolveProps(node, PROPS_CASES, []);
}
var PROPS_STATIC = ["s", "static"];
function resolveStatic(node) {
	return resolveProps(node, PROPS_STATIC);
}
var PROPS_ITEMS = ["i", "items"];
function resolveItems(node) {
	return resolveProps(node, PROPS_ITEMS, []);
}
var PROPS_TYPE = ["t", "type"];
function resolveType(node) {
	return resolveProps(node, PROPS_TYPE);
}
var PROPS_VALUE = ["v", "value"];
function resolveValue$1(node, type) {
	const resolved = resolveProps(node, PROPS_VALUE);
	if (resolved != null) return resolved;
	else throw createUnhandleNodeError(type);
}
var PROPS_MODIFIER = ["m", "modifier"];
function resolveLinkedModifier(node) {
	return resolveProps(node, PROPS_MODIFIER);
}
var PROPS_KEY = ["k", "key"];
function resolveLinkedKey(node) {
	const resolved = resolveProps(node, PROPS_KEY);
	if (resolved) return resolved;
	else throw createUnhandleNodeError(6);
}
function resolveProps(node, props, defaultValue) {
	for (let i = 0; i < props.length; i++) {
		const prop = props[i];
		if (hasOwn$1(node, prop) && node[prop] != null) return node[prop];
	}
	return defaultValue;
}
var AST_NODE_PROPS_KEYS = [
	...PROPS_BODY,
	...PROPS_CASES,
	...PROPS_STATIC,
	...PROPS_ITEMS,
	...PROPS_KEY,
	...PROPS_MODIFIER,
	...PROPS_VALUE,
	...PROPS_TYPE
];
function createUnhandleNodeError(type) {
	return /* @__PURE__ */ new Error(`unhandled node type: ${type}`);
}
function format$1(ast) {
	const msg = (ctx) => formatParts(ctx, ast);
	return msg;
}
function formatParts(ctx, ast) {
	const body = resolveBody(ast);
	if (body == null) throw createUnhandleNodeError(0);
	if (resolveType(body) === 1) {
		const cases = resolveCases(body);
		return ctx.plural(cases.reduce((messages, c) => [...messages, formatMessageParts(ctx, c)], []));
	} else return formatMessageParts(ctx, body);
}
function formatMessageParts(ctx, node) {
	const static_ = resolveStatic(node);
	if (static_ != null) return ctx.type === "text" ? static_ : ctx.normalize([static_]);
	else {
		const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
		return ctx.normalize(messages);
	}
}
function formatMessagePart(ctx, node) {
	const type = resolveType(node);
	switch (type) {
		case 3: return resolveValue$1(node, type);
		case 9: return resolveValue$1(node, type);
		case 4: {
			const named = node;
			if (hasOwn$1(named, "k") && named.k) return ctx.interpolate(ctx.named(named.k));
			if (hasOwn$1(named, "key") && named.key) return ctx.interpolate(ctx.named(named.key));
			throw createUnhandleNodeError(type);
		}
		case 5: {
			const list = node;
			if (hasOwn$1(list, "i") && isNumber(list.i)) return ctx.interpolate(ctx.list(list.i));
			if (hasOwn$1(list, "index") && isNumber(list.index)) return ctx.interpolate(ctx.list(list.index));
			throw createUnhandleNodeError(type);
		}
		case 6: {
			const linked = node;
			const modifier = resolveLinkedModifier(linked);
			const key = resolveLinkedKey(linked);
			return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
		}
		case 7: return resolveValue$1(node, type);
		case 8: return resolveValue$1(node, type);
		default: throw new Error(`unhandled node on format message part: ${type}`);
	}
}
var defaultOnCacheKey = (message) => message;
var compileCache = create();
function baseCompile$1(message, options = {}) {
	let detectError = false;
	const onError = options.onError || defaultOnError;
	options.onError = (err) => {
		detectError = true;
		onError(err);
	};
	return {
		...baseCompile(message, options),
		detectError
	};
}
/* @__NO_SIDE_EFFECTS__ */
function compile(message, context) {
	if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && isString(message)) {
		isBoolean(context.warnHtmlMessage) && context.warnHtmlMessage;
		const cacheKey = (context.onCacheKey || defaultOnCacheKey)(message);
		const cached = compileCache[cacheKey];
		if (cached) return cached;
		const { ast, detectError } = baseCompile$1(message, {
			...context,
			location: false,
			jit: true
		});
		const msg = format$1(ast);
		return !detectError ? compileCache[cacheKey] = msg : msg;
	} else {
		const cacheKey = message.cacheKey;
		if (cacheKey) {
			const cached = compileCache[cacheKey];
			if (cached) return cached;
			return compileCache[cacheKey] = format$1(message);
		} else return format$1(message);
	}
}
var devtools = null;
function setDevToolsHook(hook) {
	devtools = hook;
}
function initI18nDevTools(i18n$1, version$1, meta) {
	devtools && devtools.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: i18n$1,
		version: version$1,
		meta
	});
}
var translateDevTools = /* @__PURE__ */ createDevToolsHook("function:translate");
function createDevToolsHook(hook) {
	return (payloads) => devtools && devtools.emit(hook, payloads);
}
var CoreErrorCodes = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function createCoreError(code) {
	return createCompileError(code, null, void 0);
}
CoreErrorCodes.INVALID_ARGUMENT, CoreErrorCodes.INVALID_DATE_ARGUMENT, CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT, CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE, CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE, CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION, CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE;
function getLocale(context, options) {
	return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
var _resolveLocale;
function resolveLocale(locale) {
	if (isString(locale)) return locale;
	else if (isFunction$2(locale)) if (locale.resolvedOnce && _resolveLocale != null) return _resolveLocale;
	else if (locale.constructor.name === "Function") {
		const resolve = locale();
		if (isPromise(resolve)) throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
		return _resolveLocale = resolve;
	} else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
}
function fallbackWithSimple(ctx, fallback, start) {
	return [...new Set([start, ...isArray$1(fallback) ? fallback : isObject$4(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
	const startLocale = isString(start) ? start : DEFAULT_LOCALE;
	const context = ctx;
	if (!context.__localeChainCache) context.__localeChainCache = /* @__PURE__ */ new Map();
	let chain = context.__localeChainCache.get(startLocale);
	if (!chain) {
		chain = [];
		let block = [start];
		while (isArray$1(block)) block = appendBlockToChain(chain, block, fallback);
		const defaults = isArray$1(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
		block = isString(defaults) ? [defaults] : defaults;
		if (isArray$1(block)) appendBlockToChain(chain, block, false);
		context.__localeChainCache.set(startLocale, chain);
	}
	return chain;
}
function appendBlockToChain(chain, block, blocks) {
	let follow = true;
	for (let i = 0; i < block.length && isBoolean(follow); i++) {
		const locale = block[i];
		if (isString(locale)) follow = appendLocaleToChain(chain, block[i], blocks);
	}
	return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
	let follow;
	const tokens = locale.split("-");
	do {
		follow = appendItemToChain(chain, tokens.join("-"), blocks);
		tokens.splice(-1, 1);
	} while (tokens.length && follow === true);
	return follow;
}
function appendItemToChain(chain, target, blocks) {
	let follow = false;
	if (!chain.includes(target)) {
		follow = true;
		if (target) {
			follow = target[target.length - 1] !== "!";
			const locale = target.replace(/!/g, "");
			chain.push(locale);
			if ((isArray$1(blocks) || isPlainObject(blocks)) && blocks[locale]) follow = blocks[locale];
		}
	}
	return follow;
}
var pathStateMachine = [];
pathStateMachine[0] = {
	["w"]: [0],
	["i"]: [3, 0],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[1] = {
	["w"]: [1],
	["."]: [2],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[2] = {
	["w"]: [2],
	["i"]: [3, 0],
	["0"]: [3, 0]
};
pathStateMachine[3] = {
	["i"]: [3, 0],
	["0"]: [3, 0],
	["w"]: [1, 1],
	["."]: [2, 1],
	["["]: [4, 1],
	["o"]: [7, 1]
};
pathStateMachine[4] = {
	["'"]: [5, 0],
	["\""]: [6, 0],
	["["]: [4, 2],
	["]"]: [1, 3],
	["o"]: 8,
	["l"]: [4, 0]
};
pathStateMachine[5] = {
	["'"]: [4, 0],
	["o"]: 8,
	["l"]: [5, 0]
};
pathStateMachine[6] = {
	["\""]: [4, 0],
	["o"]: 8,
	["l"]: [6, 0]
};
var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
	return literalValueRE.test(exp);
}
function stripQuotes(str) {
	const a = str.charCodeAt(0);
	return a === str.charCodeAt(str.length - 1) && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
	if (ch === void 0 || ch === null) return "o";
	switch (ch.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return ch;
		case 95:
		case 36:
		case 45: return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233: return "w";
	}
	return "i";
}
function formatSubPath(path) {
	const trimmed = path.trim();
	if (path.charAt(0) === "0" && isNaN(parseInt(path))) return false;
	return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
	const keys = [];
	let index = -1;
	let mode = 0;
	let subPathDepth = 0;
	let c;
	let key;
	let newChar;
	let type;
	let transition;
	let action;
	let typeMap;
	const actions = [];
	actions[0] = () => {
		if (key === void 0) key = newChar;
		else key += newChar;
	};
	actions[1] = () => {
		if (key !== void 0) {
			keys.push(key);
			key = void 0;
		}
	};
	actions[2] = () => {
		actions[0]();
		subPathDepth++;
	};
	actions[3] = () => {
		if (subPathDepth > 0) {
			subPathDepth--;
			mode = 4;
			actions[0]();
		} else {
			subPathDepth = 0;
			if (key === void 0) return false;
			key = formatSubPath(key);
			if (key === false) return false;
			else actions[1]();
		}
	};
	function maybeUnescapeQuote() {
		const nextChar = path[index + 1];
		if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === "\"") {
			index++;
			newChar = "\\" + nextChar;
			actions[0]();
			return true;
		}
	}
	while (mode !== null) {
		index++;
		c = path[index];
		if (c === "\\" && maybeUnescapeQuote()) continue;
		type = getPathCharType(c);
		typeMap = pathStateMachine[mode];
		transition = typeMap[type] || typeMap["l"] || 8;
		if (transition === 8) return;
		mode = transition[0];
		if (transition[1] !== void 0) {
			action = actions[transition[1]];
			if (action) {
				newChar = c;
				if (action() === false) return;
			}
		}
		if (mode === 7) return keys;
	}
}
var cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
	return isObject$4(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
	if (!isObject$4(obj)) return null;
	let hit = cache.get(path);
	if (!hit) {
		hit = parse(path);
		if (hit) cache.set(path, hit);
	}
	if (!hit) return null;
	const len = hit.length;
	let last = obj;
	let i = 0;
	while (i < len) {
		const key = hit[i];
		if (AST_NODE_PROPS_KEYS.includes(key) && isMessageAST(last)) return null;
		const val = last[key];
		if (val === void 0) return null;
		if (isFunction$2(last)) return null;
		last = val;
		i++;
	}
	return last;
}
var CoreWarnCodes = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
};
CoreWarnCodes.NOT_FOUND_KEY, CoreWarnCodes.FALLBACK_TO_TRANSLATE, CoreWarnCodes.CANNOT_FORMAT_NUMBER, CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, CoreWarnCodes.CANNOT_FORMAT_DATE, CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER;
var VERSION$1 = "11.1.10";
var DEFAULT_LOCALE = "en-US";
var capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
	return {
		upper: (val, type) => {
			return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject$4(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
		},
		lower: (val, type) => {
			return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject$4(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
		},
		capitalize: (val, type) => {
			return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject$4(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
		}
	};
}
var _compiler;
function registerMessageCompiler(compiler) {
	_compiler = compiler;
}
var _resolver;
function registerMessageResolver(resolver) {
	_resolver = resolver;
}
var _fallbacker;
function registerLocaleFallbacker(fallbacker) {
	_fallbacker = fallbacker;
}
var _additionalMeta = null;
var getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
var _fallbackContext = null;
var setFallbackContext = (context) => {
	_fallbackContext = context;
};
var getFallbackContext = () => _fallbackContext;
var _cid = 0;
function createCoreContext(options = {}) {
	const onWarn = isFunction$2(options.onWarn) ? options.onWarn : warn;
	const version$1 = isString(options.version) ? options.version : VERSION$1;
	const locale = isString(options.locale) || isFunction$2(options.locale) ? options.locale : DEFAULT_LOCALE;
	const _locale = isFunction$2(locale) ? DEFAULT_LOCALE : locale;
	const fallbackLocale = isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
	const messages = isPlainObject(options.messages) ? options.messages : createResources(_locale);
	const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
	const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
	const modifiers = assign(create(), options.modifiers, getDefaultLinkedModifiers());
	const pluralRules = options.pluralRules || create();
	const missing = isFunction$2(options.missing) ? options.missing : null;
	const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	const fallbackFormat = !!options.fallbackFormat;
	const unresolving = !!options.unresolving;
	const postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : null;
	const processor = isPlainObject(options.processor) ? options.processor : null;
	const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	const escapeParameter = !!options.escapeParameter;
	const messageCompiler = isFunction$2(options.messageCompiler) ? options.messageCompiler : _compiler;
	const messageResolver = isFunction$2(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
	const localeFallbacker = isFunction$2(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
	const fallbackContext = isObject$4(options.fallbackContext) ? options.fallbackContext : void 0;
	const internalOptions = options;
	const __datetimeFormatters = isObject$4(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
	const __numberFormatters = isObject$4(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
	const __meta = isObject$4(internalOptions.__meta) ? internalOptions.__meta : {};
	_cid++;
	const context = {
		version: version$1,
		cid: _cid,
		locale,
		fallbackLocale,
		messages,
		modifiers,
		pluralRules,
		missing,
		missingWarn,
		fallbackWarn,
		fallbackFormat,
		unresolving,
		postTranslation,
		processor,
		warnHtmlMessage,
		escapeParameter,
		messageCompiler,
		messageResolver,
		localeFallbacker,
		fallbackContext,
		onWarn,
		__meta
	};
	context.datetimeFormats = datetimeFormats;
	context.numberFormats = numberFormats;
	context.__datetimeFormatters = __datetimeFormatters;
	context.__numberFormatters = __numberFormatters;
	if (__INTLIFY_PROD_DEVTOOLS__) initI18nDevTools(context, version$1, __meta);
	return context;
}
var createResources = (locale) => ({ [locale]: create() });
function handleMissing(context, key, locale, missingWarn, type) {
	const { missing, onWarn } = context;
	if (missing !== null) {
		const ret = missing(context, locale, key, type);
		return isString(ret) ? ret : key;
	} else return key;
}
function updateFallbackLocale(ctx, locale, fallback) {
	const context = ctx;
	context.__localeChainCache = /* @__PURE__ */ new Map();
	ctx.localeFallbacker(ctx, fallback, locale);
}
function isAlmostSameLocale(locale, compareLocale) {
	if (locale === compareLocale) return false;
	return locale.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales) {
	const index = locales.indexOf(targetLocale);
	if (index === -1) return false;
	for (let i = index + 1; i < locales.length; i++) if (isAlmostSameLocale(targetLocale, locales[i])) return true;
	return false;
}
var intlDefined = typeof Intl !== "undefined";
intlDefined && Intl.DateTimeFormat, intlDefined && Intl.NumberFormat;
function datetime(context, ...args) {
	const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __datetimeFormatters } = context;
	const [key, value, options, overrides] = parseDateTimeArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.DateTimeFormat(locale, overrides).format(value);
	let datetimeFormat = {};
	let targetLocale;
	let format$2 = null;
	const type = "datetime format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		datetimeFormat = datetimeFormats[targetLocale] || {};
		format$2 = datetimeFormat[key];
		if (isPlainObject(format$2)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
	}
	if (!isPlainObject(format$2) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __datetimeFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format$2, overrides));
		__datetimeFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
var DATETIME_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"formatMatcher",
	"hour12",
	"timeZone",
	"dateStyle",
	"timeStyle",
	"calendar",
	"dayPeriod",
	"numberingSystem",
	"hourCycle",
	"fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	let value;
	if (isString(arg1)) {
		const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!matches) throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
		value = new Date(dateTime);
		try {
			value.toISOString();
		} catch {
			throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (isDate(arg1)) {
		if (isNaN(arg1.getTime())) throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
		value = arg1;
	} else if (isNumber(arg1)) value = arg1;
	else throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
function clearDateTimeFormat(ctx, locale, format$2) {
	const context = ctx;
	for (const key in format$2) {
		const id = `${locale}__${key}`;
		if (!context.__datetimeFormatters.has(id)) continue;
		context.__datetimeFormatters.delete(id);
	}
}
function number(context, ...args) {
	const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __numberFormatters } = context;
	const [key, value, options, overrides] = parseNumberArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.NumberFormat(locale, overrides).format(value);
	let numberFormat = {};
	let targetLocale;
	let format$2 = null;
	const type = "number format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		numberFormat = numberFormats[targetLocale] || {};
		format$2 = numberFormat[key];
		if (isPlainObject(format$2)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
	}
	if (!isPlainObject(format$2) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __numberFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.NumberFormat(targetLocale, assign({}, format$2, overrides));
		__numberFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
var NUMBER_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"style",
	"currency",
	"currencyDisplay",
	"currencySign",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"roundingMode",
	"roundingPriority",
	"roundingIncrement",
	"trailingZeroDisplay"
];
function parseNumberArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	if (!isNumber(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const value = arg1;
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
function clearNumberFormat(ctx, locale, format$2) {
	const context = ctx;
	for (const key in format$2) {
		const id = `${locale}__${key}`;
		if (!context.__numberFormatters.has(id)) continue;
		context.__numberFormatters.delete(id);
	}
}
var DEFAULT_MODIFIER = (str) => str;
var DEFAULT_MESSAGE = (ctx) => "";
var DEFAULT_MESSAGE_DATA_TYPE = "text";
var DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
var DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
	choice = Math.abs(choice);
	if (choicesLength === 2) return choice ? choice > 1 ? 1 : 0 : 1;
	return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
	const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
	return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
	if (!props.count) props.count = pluralIndex;
	if (!props.n) props.n = pluralIndex;
}
function createMessageContext(options = {}) {
	const locale = options.locale;
	const pluralIndex = getPluralIndex(options);
	const pluralRule = isObject$4(options.pluralRules) && isString(locale) && isFunction$2(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
	const orgPluralRule = isObject$4(options.pluralRules) && isString(locale) && isFunction$2(options.pluralRules[locale]) ? pluralDefault : void 0;
	const plural = (messages) => {
		return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
	};
	const _list = options.list || [];
	const list = (index) => _list[index];
	const _named = options.named || create();
	isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
	const named = (key) => _named[key];
	function message(key, useLinked) {
		const msg = isFunction$2(options.messages) ? options.messages(key, !!useLinked) : isObject$4(options.messages) ? options.messages[key] : false;
		return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
	}
	const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
	const normalize$1 = isPlainObject(options.processor) && isFunction$2(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
	const interpolate = isPlainObject(options.processor) && isFunction$2(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
	const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
	const linked = (key, ...args) => {
		const [arg1, arg2] = args;
		let type$1 = "text";
		let modifier = "";
		if (args.length === 1) {
			if (isObject$4(arg1)) {
				modifier = arg1.modifier || modifier;
				type$1 = arg1.type || type$1;
			} else if (isString(arg1)) modifier = arg1 || modifier;
		} else if (args.length === 2) {
			if (isString(arg1)) modifier = arg1 || modifier;
			if (isString(arg2)) type$1 = arg2 || type$1;
		}
		const ret = message(key, true)(ctx);
		const msg = type$1 === "vnode" && isArray$1(ret) && modifier ? ret[0] : ret;
		return modifier ? _modifier(modifier)(msg, type$1) : msg;
	};
	const ctx = {
		["list"]: list,
		["named"]: named,
		["plural"]: plural,
		["linked"]: linked,
		["message"]: message,
		["type"]: type,
		["interpolate"]: interpolate,
		["normalize"]: normalize$1,
		["values"]: assign(create(), _list, _named)
	};
	return ctx;
}
var NOOP_MESSAGE_FUNCTION = () => "";
var isMessageFunction = (val) => isFunction$2(val);
function translate(context, ...args) {
	const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
	const [key, options] = parseTranslateArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
	const resolvedMessage = !!options.resolvedMessage;
	const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : null;
	const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (isString(defaultMsgOrKey) || isFunction$2(defaultMsgOrKey));
	const locale = getLocale(context, options);
	escapeParameter && escapeParams(options);
	let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
		key,
		locale,
		messages[locale] || create()
	];
	let format$2 = formatScope;
	let cacheBaseKey = key;
	if (!resolvedMessage && !(isString(format$2) || isMessageAST(format$2) || isMessageFunction(format$2))) {
		if (enableDefaultMsg) {
			format$2 = defaultMsgOrKey;
			cacheBaseKey = format$2;
		}
	}
	if (!resolvedMessage && (!(isString(format$2) || isMessageAST(format$2) || isMessageFunction(format$2)) || !isString(targetLocale))) return unresolving ? -1 : key;
	let occurred = false;
	const onError = () => {
		occurred = true;
	};
	const msg = !isMessageFunction(format$2) ? compileMessageFormat(context, key, targetLocale, format$2, cacheBaseKey, onError) : format$2;
	if (occurred) return format$2;
	const messaged = evaluateMessage(context, msg, createMessageContext(getMessageContextOptions(context, targetLocale, message, options)));
	let ret = postTranslation ? postTranslation(messaged, key) : messaged;
	if (escapeParameter && isString(ret)) ret = sanitizeTranslatedHtml(ret);
	if (__INTLIFY_PROD_DEVTOOLS__) {
		const payloads = {
			timestamp: Date.now(),
			key: isString(key) ? key : isMessageFunction(format$2) ? format$2.key : "",
			locale: targetLocale || (isMessageFunction(format$2) ? format$2.locale : ""),
			format: isString(format$2) ? format$2 : isMessageFunction(format$2) ? format$2.source : "",
			message: ret
		};
		payloads.meta = assign({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
		translateDevTools(payloads);
	}
	return ret;
}
function escapeParams(options) {
	if (isArray$1(options.list)) options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
	else if (isObject$4(options.named)) Object.keys(options.named).forEach((key) => {
		if (isString(options.named[key])) options.named[key] = escapeHtml(options.named[key]);
	});
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
	const { messages, onWarn, messageResolver: resolveValue$2, localeFallbacker } = context;
	const locales = localeFallbacker(context, fallbackLocale, locale);
	let message = create();
	let targetLocale;
	let format$2 = null;
	const type = "translate";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		message = messages[targetLocale] || create();
		if ((format$2 = resolveValue$2(message, key)) === null) format$2 = message[key];
		if (isString(format$2) || isMessageAST(format$2) || isMessageFunction(format$2)) break;
		if (!isImplicitFallback(targetLocale, locales)) {
			const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
			if (missingRet !== key) format$2 = missingRet;
		}
	}
	return [
		format$2,
		targetLocale,
		message
	];
}
function compileMessageFormat(context, key, targetLocale, format$2, cacheBaseKey, onError) {
	const { messageCompiler, warnHtmlMessage } = context;
	if (isMessageFunction(format$2)) {
		const msg$1 = format$2;
		msg$1.locale = msg$1.locale || targetLocale;
		msg$1.key = msg$1.key || key;
		return msg$1;
	}
	if (messageCompiler == null) {
		const msg$1 = (() => format$2);
		msg$1.locale = targetLocale;
		msg$1.key = key;
		return msg$1;
	}
	const msg = messageCompiler(format$2, getCompileContext(context, targetLocale, cacheBaseKey, format$2, warnHtmlMessage, onError));
	msg.locale = targetLocale;
	msg.key = key;
	msg.source = format$2;
	return msg;
}
function evaluateMessage(context, msg, msgCtx) {
	return msg(msgCtx);
}
function parseTranslateArgs(...args) {
	const [arg1, arg2, arg3] = args;
	const options = create();
	if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
	if (isNumber(arg2)) options.plural = arg2;
	else if (isString(arg2)) options.default = arg2;
	else if (isPlainObject(arg2) && !isEmptyObject(arg2)) options.named = arg2;
	else if (isArray$1(arg2)) options.list = arg2;
	if (isNumber(arg3)) options.plural = arg3;
	else if (isString(arg3)) options.default = arg3;
	else if (isPlainObject(arg3)) assign(options, arg3);
	return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
	return {
		locale,
		key,
		warnHtmlMessage,
		onError: (err) => {
			onError && onError(err);
			throw err;
		},
		onCacheKey: (source$1) => generateFormatCacheKey(locale, key, source$1)
	};
}
function getMessageContextOptions(context, locale, message, options) {
	const { modifiers, pluralRules, messageResolver: resolveValue$2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
	const resolveMessage = (key, useLinked) => {
		let val = resolveValue$2(message, key);
		if (val == null && (fallbackContext || useLinked)) {
			const [, , message$1] = resolveMessageFormat(fallbackContext || context, key, locale, fallbackLocale, fallbackWarn, missingWarn);
			val = resolveValue$2(message$1, key);
		}
		if (isString(val) || isMessageAST(val)) {
			let occurred = false;
			const onError = () => {
				occurred = true;
			};
			const msg = compileMessageFormat(context, key, locale, val, key, onError);
			return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
		} else if (isMessageFunction(val)) return val;
		else return NOOP_MESSAGE_FUNCTION;
	};
	const ctxOptions = {
		locale,
		modifiers,
		pluralRules,
		messages: resolveMessage
	};
	if (context.processor) ctxOptions.processor = context.processor;
	if (options.list) ctxOptions.list = options.list;
	if (options.named) ctxOptions.named = options.named;
	if (isNumber(options.plural)) ctxOptions.pluralIndex = options.plural;
	return ctxOptions;
}
initFeatureFlags$1();
var VERSION = "11.1.10";
function initFeatureFlags() {
	if (typeof __VUE_I18N_FULL_INSTALL__ !== "boolean") getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
	if (typeof __VUE_I18N_LEGACY_API__ !== "boolean") getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
	if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
	if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
}
var I18nErrorCodes = {
	UNEXPECTED_RETURN_TYPE: 24,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32,
	NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34,
	DUPLICATE_USE_I18N_CALLING: 35
};
function createI18nError(code, ...args) {
	return createCompileError(code, null, void 0);
}
I18nErrorCodes.UNEXPECTED_RETURN_TYPE, I18nErrorCodes.INVALID_ARGUMENT, I18nErrorCodes.MUST_BE_CALL_SETUP_TOP, I18nErrorCodes.NOT_INSTALLED, I18nErrorCodes.UNEXPECTED_ERROR, I18nErrorCodes.REQUIRED_VALUE, I18nErrorCodes.INVALID_VALUE, I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE, I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N, I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY, I18nErrorCodes.DUPLICATE_USE_I18N_CALLING;
var TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
var DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
var NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
var SetPluralRulesSymbol = makeSymbol("__setPluralRules");
makeSymbol("__intlifyMeta");
var InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
var DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
var I18nWarnCodes = {
	FALLBACK_TO_ROOT: 8,
	NOT_FOUND_PARENT_SCOPE: 9,
	IGNORE_OBJ_FLATTEN: 10,
	DEPRECATE_LEGACY_MODE: 11,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 12
};
I18nWarnCodes.FALLBACK_TO_ROOT, I18nWarnCodes.NOT_FOUND_PARENT_SCOPE, I18nWarnCodes.IGNORE_OBJ_FLATTEN, I18nWarnCodes.DEPRECATE_LEGACY_MODE, I18nWarnCodes.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE;
function handleFlatJson(obj) {
	if (!isObject$4(obj)) return obj;
	if (isMessageAST(obj)) return obj;
	for (const key in obj) {
		if (!hasOwn$1(obj, key)) continue;
		if (!key.includes(".")) {
			if (isObject$4(obj[key])) handleFlatJson(obj[key]);
		} else {
			const subKeys = key.split(".");
			const lastIndex = subKeys.length - 1;
			let currentObj = obj;
			let hasStringValue = false;
			for (let i = 0; i < lastIndex; i++) {
				if (subKeys[i] === "__proto__") throw new Error(`unsafe key: ${subKeys[i]}`);
				if (!(subKeys[i] in currentObj)) currentObj[subKeys[i]] = create();
				if (!isObject$4(currentObj[subKeys[i]])) {
					hasStringValue = true;
					break;
				}
				currentObj = currentObj[subKeys[i]];
			}
			if (!hasStringValue) {
				if (!isMessageAST(currentObj)) {
					currentObj[subKeys[lastIndex]] = obj[key];
					delete obj[key];
				} else if (!AST_NODE_PROPS_KEYS.includes(subKeys[lastIndex])) delete obj[key];
			}
			if (!isMessageAST(currentObj)) {
				const target = currentObj[subKeys[lastIndex]];
				if (isObject$4(target)) handleFlatJson(target);
			}
		}
	}
	return obj;
}
function getLocaleMessages(locale, options) {
	const { messages, __i18n, messageResolver, flatJson } = options;
	const ret = isPlainObject(messages) ? messages : isArray$1(__i18n) ? create() : { [locale]: create() };
	if (isArray$1(__i18n)) __i18n.forEach((custom) => {
		if ("locale" in custom && "resource" in custom) {
			const { locale: locale$1, resource } = custom;
			if (locale$1) {
				ret[locale$1] = ret[locale$1] || create();
				deepCopy(resource, ret[locale$1]);
			} else deepCopy(resource, ret);
		} else isString(custom) && deepCopy(JSON.parse(custom), ret);
	});
	if (messageResolver == null && flatJson) {
		for (const key in ret) if (hasOwn$1(ret, key)) handleFlatJson(ret[key]);
	}
	return ret;
}
function getComponentOptions(instance) {
	return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
	let messages = isObject$4(options.messages) ? options.messages : create();
	if ("__i18nGlobal" in componentOptions) messages = getLocaleMessages(gl.locale.value, {
		messages,
		__i18n: componentOptions.__i18nGlobal
	});
	const locales = Object.keys(messages);
	if (locales.length) locales.forEach((locale) => {
		gl.mergeLocaleMessage(locale, messages[locale]);
	});
	if (isObject$4(options.datetimeFormats)) {
		const locales$1 = Object.keys(options.datetimeFormats);
		if (locales$1.length) locales$1.forEach((locale) => {
			gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
		});
	}
	if (isObject$4(options.numberFormats)) {
		const locales$1 = Object.keys(options.numberFormats);
		if (locales$1.length) locales$1.forEach((locale) => {
			gl.mergeNumberFormat(locale, options.numberFormats[locale]);
		});
	}
}
function createTextNode(key) {
	return createVNode(Text, null, key, 0);
}
var NOOP_RETURN_ARRAY = () => [];
var NOOP_RETURN_FALSE = () => false;
var composerID = 0;
function defineCoreMissingHandler(missing) {
	return ((ctx, locale, key, type) => {
		return missing(locale, key, getCurrentInstance() || void 0, type);
	});
}
function createComposer(options = {}) {
	const { __root, __injectWithOption } = options;
	const _isGlobal = __root === void 0;
	const flatJson = options.flatJson;
	const _ref = inBrowser ? ref : shallowRef;
	let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
	const _locale = _ref(__root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE);
	const _fallbackLocale = _ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
	const _messages = _ref(getLocaleMessages(_locale.value, options));
	const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
	const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
	let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
	let _fallbackFormat = !!options.fallbackFormat;
	let _missing = isFunction$2(options.missing) ? options.missing : null;
	let _runtimeMissing = isFunction$2(options.missing) ? defineCoreMissingHandler(options.missing) : null;
	let _postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : null;
	let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	let _escapeParameter = !!options.escapeParameter;
	const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
	let _pluralRules = options.pluralRules || __root && __root.pluralRules;
	let _context;
	const getCoreContext = () => {
		_isGlobal && setFallbackContext(null);
		const ctxOptions = {
			version: VERSION,
			locale: _locale.value,
			fallbackLocale: _fallbackLocale.value,
			messages: _messages.value,
			modifiers: _modifiers,
			pluralRules: _pluralRules,
			missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
			missingWarn: _missingWarn,
			fallbackWarn: _fallbackWarn,
			fallbackFormat: _fallbackFormat,
			unresolving: true,
			postTranslation: _postTranslation === null ? void 0 : _postTranslation,
			warnHtmlMessage: _warnHtmlMessage,
			escapeParameter: _escapeParameter,
			messageResolver: options.messageResolver,
			messageCompiler: options.messageCompiler,
			__meta: { framework: "vue" }
		};
		ctxOptions.datetimeFormats = _datetimeFormats.value;
		ctxOptions.numberFormats = _numberFormats.value;
		ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
		ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
		const ctx = createCoreContext(ctxOptions);
		_isGlobal && setFallbackContext(ctx);
		return ctx;
	};
	_context = getCoreContext();
	updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
	function trackReactivityValues() {
		return [
			_locale.value,
			_fallbackLocale.value,
			_messages.value,
			_datetimeFormats.value,
			_numberFormats.value
		];
	}
	const locale = computed({
		get: () => _locale.value,
		set: (val) => {
			_context.locale = val;
			_locale.value = val;
		}
	});
	const fallbackLocale = computed({
		get: () => _fallbackLocale.value,
		set: (val) => {
			_context.fallbackLocale = val;
			_fallbackLocale.value = val;
			updateFallbackLocale(_context, _locale.value, val);
		}
	});
	const messages = computed(() => _messages.value);
	const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
	const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
	function getPostTranslationHandler() {
		return isFunction$2(_postTranslation) ? _postTranslation : null;
	}
	function setPostTranslationHandler(handler) {
		_postTranslation = handler;
		_context.postTranslation = handler;
	}
	function getMissingHandler() {
		return _missing;
	}
	function setMissingHandler(handler) {
		if (handler !== null) _runtimeMissing = defineCoreMissingHandler(handler);
		_missing = handler;
		_context.missing = _runtimeMissing;
	}
	const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
		trackReactivityValues();
		let ret;
		try {
			if (__INTLIFY_PROD_DEVTOOLS__);
			if (!_isGlobal) _context.fallbackContext = __root ? getFallbackContext() : void 0;
			ret = fn(_context);
		} finally {
			if (__INTLIFY_PROD_DEVTOOLS__);
			if (!_isGlobal) _context.fallbackContext = void 0;
		}
		if (warnType !== "translate exists" && isNumber(ret) && ret === -1 || warnType === "translate exists" && !ret) {
			const [key, arg2] = argumentParser();
			return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
		} else if (successCondition(ret)) return ret;
		else
 /* istanbul ignore next */
		throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
	};
	function t(...args) {
		return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root$1) => Reflect.apply(root$1.t, root$1, [...args]), (key) => key, (val) => isString(val));
	}
	function rt(...args) {
		const [arg1, arg2, arg3] = args;
		if (arg3 && !isObject$4(arg3)) throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
		return t(...[
			arg1,
			arg2,
			assign({ resolvedMessage: true }, arg3 || {})
		]);
	}
	function d(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root$1) => Reflect.apply(root$1.d, root$1, [...args]), () => "", (val) => isString(val) || isArray$1(val));
	}
	function n(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root$1) => Reflect.apply(root$1.n, root$1, [...args]), () => "", (val) => isString(val) || isArray$1(val));
	}
	function normalize$1(values) {
		return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
	}
	const interpolate = (val) => val;
	const processor = {
		normalize: normalize$1,
		interpolate,
		type: "vnode"
	};
	function translateVNode(...args) {
		return wrapWithDeps((context) => {
			let ret;
			const _context$1 = context;
			try {
				_context$1.processor = processor;
				ret = Reflect.apply(translate, null, [_context$1, ...args]);
			} finally {
				_context$1.processor = null;
			}
			return ret;
		}, () => parseTranslateArgs(...args), "translate", (root$1) => root$1[TranslateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray$1(val));
	}
	function numberParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root$1) => root$1[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray$1(val));
	}
	function datetimeParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root$1) => root$1[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray$1(val));
	}
	function setPluralRules(rules) {
		_pluralRules = rules;
		_context.pluralRules = _pluralRules;
	}
	function te(key, locale$1) {
		return wrapWithDeps(() => {
			if (!key) return false;
			const message = getLocaleMessage(isString(locale$1) ? locale$1 : _locale.value);
			const resolved = _context.messageResolver(message, key);
			return isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved);
		}, () => [key], "translate exists", (root$1) => {
			return Reflect.apply(root$1.te, root$1, [key, locale$1]);
		}, NOOP_RETURN_FALSE, (val) => isBoolean(val));
	}
	function resolveMessages(key) {
		let messages$1 = null;
		const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
		for (let i = 0; i < locales.length; i++) {
			const targetLocaleMessages = _messages.value[locales[i]] || {};
			const messageValue = _context.messageResolver(targetLocaleMessages, key);
			if (messageValue != null) {
				messages$1 = messageValue;
				break;
			}
		}
		return messages$1;
	}
	function tm(key) {
		const messages$1 = resolveMessages(key);
		return messages$1 != null ? messages$1 : __root ? __root.tm(key) || {} : {};
	}
	function getLocaleMessage(locale$1) {
		return _messages.value[locale$1] || {};
	}
	function setLocaleMessage(locale$1, message) {
		if (flatJson) {
			const _message = { [locale$1]: message };
			for (const key in _message) if (hasOwn$1(_message, key)) handleFlatJson(_message[key]);
			message = _message[locale$1];
		}
		_messages.value[locale$1] = message;
		_context.messages = _messages.value;
	}
	function mergeLocaleMessage(locale$1, message) {
		_messages.value[locale$1] = _messages.value[locale$1] || {};
		const _message = { [locale$1]: message };
		if (flatJson) {
			for (const key in _message) if (hasOwn$1(_message, key)) handleFlatJson(_message[key]);
		}
		message = _message[locale$1];
		deepCopy(message, _messages.value[locale$1]);
		_context.messages = _messages.value;
	}
	function getDateTimeFormat(locale$1) {
		return _datetimeFormats.value[locale$1] || {};
	}
	function setDateTimeFormat(locale$1, format$2) {
		_datetimeFormats.value[locale$1] = format$2;
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale$1, format$2);
	}
	function mergeDateTimeFormat(locale$1, format$2) {
		_datetimeFormats.value[locale$1] = assign(_datetimeFormats.value[locale$1] || {}, format$2);
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale$1, format$2);
	}
	function getNumberFormat(locale$1) {
		return _numberFormats.value[locale$1] || {};
	}
	function setNumberFormat(locale$1, format$2) {
		_numberFormats.value[locale$1] = format$2;
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale$1, format$2);
	}
	function mergeNumberFormat(locale$1, format$2) {
		_numberFormats.value[locale$1] = assign(_numberFormats.value[locale$1] || {}, format$2);
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale$1, format$2);
	}
	composerID++;
	if (__root && inBrowser) {
		watch(__root.locale, (val) => {
			if (_inheritLocale) {
				_locale.value = val;
				_context.locale = val;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		});
		watch(__root.fallbackLocale, (val) => {
			if (_inheritLocale) {
				_fallbackLocale.value = val;
				_context.fallbackLocale = val;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		});
	}
	const composer = {
		id: composerID,
		locale,
		fallbackLocale,
		get inheritLocale() {
			return _inheritLocale;
		},
		set inheritLocale(val) {
			_inheritLocale = val;
			if (val && __root) {
				_locale.value = __root.locale.value;
				_fallbackLocale.value = __root.fallbackLocale.value;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		},
		get availableLocales() {
			return Object.keys(_messages.value).sort();
		},
		messages,
		get modifiers() {
			return _modifiers;
		},
		get pluralRules() {
			return _pluralRules || {};
		},
		get isGlobal() {
			return _isGlobal;
		},
		get missingWarn() {
			return _missingWarn;
		},
		set missingWarn(val) {
			_missingWarn = val;
			_context.missingWarn = _missingWarn;
		},
		get fallbackWarn() {
			return _fallbackWarn;
		},
		set fallbackWarn(val) {
			_fallbackWarn = val;
			_context.fallbackWarn = _fallbackWarn;
		},
		get fallbackRoot() {
			return _fallbackRoot;
		},
		set fallbackRoot(val) {
			_fallbackRoot = val;
		},
		get fallbackFormat() {
			return _fallbackFormat;
		},
		set fallbackFormat(val) {
			_fallbackFormat = val;
			_context.fallbackFormat = _fallbackFormat;
		},
		get warnHtmlMessage() {
			return _warnHtmlMessage;
		},
		set warnHtmlMessage(val) {
			_warnHtmlMessage = val;
			_context.warnHtmlMessage = val;
		},
		get escapeParameter() {
			return _escapeParameter;
		},
		set escapeParameter(val) {
			_escapeParameter = val;
			_context.escapeParameter = val;
		},
		t,
		getLocaleMessage,
		setLocaleMessage,
		mergeLocaleMessage,
		getPostTranslationHandler,
		setPostTranslationHandler,
		getMissingHandler,
		setMissingHandler,
		[SetPluralRulesSymbol]: setPluralRules
	};
	composer.datetimeFormats = datetimeFormats;
	composer.numberFormats = numberFormats;
	composer.rt = rt;
	composer.te = te;
	composer.tm = tm;
	composer.d = d;
	composer.n = n;
	composer.getDateTimeFormat = getDateTimeFormat;
	composer.setDateTimeFormat = setDateTimeFormat;
	composer.mergeDateTimeFormat = mergeDateTimeFormat;
	composer.getNumberFormat = getNumberFormat;
	composer.setNumberFormat = setNumberFormat;
	composer.mergeNumberFormat = mergeNumberFormat;
	composer[InejctWithOptionSymbol] = __injectWithOption;
	composer[TranslateVNodeSymbol] = translateVNode;
	composer[DatetimePartsSymbol] = datetimeParts;
	composer[NumberPartsSymbol] = numberParts;
	return composer;
}
function convertComposerOptions(options) {
	const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
	const fallbackLocale = isString(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
	const missing = isFunction$2(options.missing) ? options.missing : void 0;
	const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
	const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
	const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
	const fallbackFormat = !!options.formatFallbackMessages;
	const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
	const pluralizationRules = options.pluralizationRules;
	const postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : void 0;
	const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
	const escapeParameter = !!options.escapeParameterHtml;
	const inheritLocale = isBoolean(options.sync) ? options.sync : true;
	let messages = options.messages;
	if (isPlainObject(options.sharedMessages)) {
		const sharedMessages = options.sharedMessages;
		messages = Object.keys(sharedMessages).reduce((messages$1, locale$1) => {
			assign(messages$1[locale$1] || (messages$1[locale$1] = {}), sharedMessages[locale$1]);
			return messages$1;
		}, messages || {});
	}
	const { __i18n, __root, __injectWithOption } = options;
	const datetimeFormats = options.datetimeFormats;
	const numberFormats = options.numberFormats;
	const flatJson = options.flatJson;
	return {
		locale,
		fallbackLocale,
		messages,
		flatJson,
		datetimeFormats,
		numberFormats,
		missing,
		missingWarn,
		fallbackWarn,
		fallbackRoot,
		fallbackFormat,
		modifiers,
		pluralRules: pluralizationRules,
		postTranslation,
		warnHtmlMessage,
		escapeParameter,
		messageResolver: options.messageResolver,
		inheritLocale,
		__i18n,
		__root,
		__injectWithOption
	};
}
function createVueI18n(options = {}) {
	const composer = createComposer(convertComposerOptions(options));
	const { __extender } = options;
	const vueI18n = {
		id: composer.id,
		get locale() {
			return composer.locale.value;
		},
		set locale(val) {
			composer.locale.value = val;
		},
		get fallbackLocale() {
			return composer.fallbackLocale.value;
		},
		set fallbackLocale(val) {
			composer.fallbackLocale.value = val;
		},
		get messages() {
			return composer.messages.value;
		},
		get datetimeFormats() {
			return composer.datetimeFormats.value;
		},
		get numberFormats() {
			return composer.numberFormats.value;
		},
		get availableLocales() {
			return composer.availableLocales;
		},
		get missing() {
			return composer.getMissingHandler();
		},
		set missing(handler) {
			composer.setMissingHandler(handler);
		},
		get silentTranslationWarn() {
			return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
		},
		set silentTranslationWarn(val) {
			composer.missingWarn = isBoolean(val) ? !val : val;
		},
		get silentFallbackWarn() {
			return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
		},
		set silentFallbackWarn(val) {
			composer.fallbackWarn = isBoolean(val) ? !val : val;
		},
		get modifiers() {
			return composer.modifiers;
		},
		get formatFallbackMessages() {
			return composer.fallbackFormat;
		},
		set formatFallbackMessages(val) {
			composer.fallbackFormat = val;
		},
		get postTranslation() {
			return composer.getPostTranslationHandler();
		},
		set postTranslation(handler) {
			composer.setPostTranslationHandler(handler);
		},
		get sync() {
			return composer.inheritLocale;
		},
		set sync(val) {
			composer.inheritLocale = val;
		},
		get warnHtmlInMessage() {
			return composer.warnHtmlMessage ? "warn" : "off";
		},
		set warnHtmlInMessage(val) {
			composer.warnHtmlMessage = val !== "off";
		},
		get escapeParameterHtml() {
			return composer.escapeParameter;
		},
		set escapeParameterHtml(val) {
			composer.escapeParameter = val;
		},
		get pluralizationRules() {
			return composer.pluralRules || {};
		},
		__composer: composer,
		t(...args) {
			return Reflect.apply(composer.t, composer, [...args]);
		},
		rt(...args) {
			return Reflect.apply(composer.rt, composer, [...args]);
		},
		te(key, locale) {
			return composer.te(key, locale);
		},
		tm(key) {
			return composer.tm(key);
		},
		getLocaleMessage(locale) {
			return composer.getLocaleMessage(locale);
		},
		setLocaleMessage(locale, message) {
			composer.setLocaleMessage(locale, message);
		},
		mergeLocaleMessage(locale, message) {
			composer.mergeLocaleMessage(locale, message);
		},
		d(...args) {
			return Reflect.apply(composer.d, composer, [...args]);
		},
		getDateTimeFormat(locale) {
			return composer.getDateTimeFormat(locale);
		},
		setDateTimeFormat(locale, format$2) {
			composer.setDateTimeFormat(locale, format$2);
		},
		mergeDateTimeFormat(locale, format$2) {
			composer.mergeDateTimeFormat(locale, format$2);
		},
		n(...args) {
			return Reflect.apply(composer.n, composer, [...args]);
		},
		getNumberFormat(locale) {
			return composer.getNumberFormat(locale);
		},
		setNumberFormat(locale, format$2) {
			composer.setNumberFormat(locale, format$2);
		},
		mergeNumberFormat(locale, format$2) {
			composer.mergeNumberFormat(locale, format$2);
		}
	};
	vueI18n.__extender = __extender;
	return vueI18n;
}
function defineMixin(vuei18n, composer, i18n$1) {
	return {
		beforeCreate() {
			const instance = getCurrentInstance();
			/* istanbul ignore if */
			if (!instance) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
			const options = this.$options;
			if (options.i18n) {
				const optionsI18n = options.i18n;
				if (options.__i18n) optionsI18n.__i18n = options.__i18n;
				optionsI18n.__root = composer;
				if (this === this.$root) this.$i18n = mergeToGlobal(vuei18n, optionsI18n);
				else {
					optionsI18n.__injectWithOption = true;
					optionsI18n.__extender = i18n$1.__vueI18nExtend;
					this.$i18n = createVueI18n(optionsI18n);
					const _vueI18n = this.$i18n;
					if (_vueI18n.__extender) _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
				}
			} else if (options.__i18n) if (this === this.$root) this.$i18n = mergeToGlobal(vuei18n, options);
			else {
				this.$i18n = createVueI18n({
					__i18n: options.__i18n,
					__injectWithOption: true,
					__extender: i18n$1.__vueI18nExtend,
					__root: composer
				});
				const _vueI18n = this.$i18n;
				if (_vueI18n.__extender) _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
			}
			else this.$i18n = vuei18n;
			if (options.__i18nGlobal) adjustI18nResources(composer, options, options);
			this.$t = (...args) => this.$i18n.t(...args);
			this.$rt = (...args) => this.$i18n.rt(...args);
			this.$te = (key, locale) => this.$i18n.te(key, locale);
			this.$d = (...args) => this.$i18n.d(...args);
			this.$n = (...args) => this.$i18n.n(...args);
			this.$tm = (key) => this.$i18n.tm(key);
			i18n$1.__setInstance(instance, this.$i18n);
		},
		mounted() {},
		unmounted() {
			const instance = getCurrentInstance();
			/* istanbul ignore if */
			if (!instance) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
			const _vueI18n = this.$i18n;
			delete this.$t;
			delete this.$rt;
			delete this.$te;
			delete this.$d;
			delete this.$n;
			delete this.$tm;
			if (_vueI18n.__disposer) {
				_vueI18n.__disposer();
				delete _vueI18n.__disposer;
				delete _vueI18n.__extender;
			}
			i18n$1.__deleteInstance(instance);
			delete this.$i18n;
		}
	};
}
function mergeToGlobal(g, options) {
	g.locale = options.locale || g.locale;
	g.fallbackLocale = options.fallbackLocale || g.fallbackLocale;
	g.missing = options.missing || g.missing;
	g.silentTranslationWarn = options.silentTranslationWarn || g.silentFallbackWarn;
	g.silentFallbackWarn = options.silentFallbackWarn || g.silentFallbackWarn;
	g.formatFallbackMessages = options.formatFallbackMessages || g.formatFallbackMessages;
	g.postTranslation = options.postTranslation || g.postTranslation;
	g.warnHtmlInMessage = options.warnHtmlInMessage || g.warnHtmlInMessage;
	g.escapeParameterHtml = options.escapeParameterHtml || g.escapeParameterHtml;
	g.sync = options.sync || g.sync;
	g.__composer[SetPluralRulesSymbol](options.pluralizationRules || g.pluralizationRules);
	const messages = getLocaleMessages(g.locale, {
		messages: options.messages,
		__i18n: options.__i18n
	});
	Object.keys(messages).forEach((locale) => g.mergeLocaleMessage(locale, messages[locale]));
	if (options.datetimeFormats) Object.keys(options.datetimeFormats).forEach((locale) => g.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
	if (options.numberFormats) Object.keys(options.numberFormats).forEach((locale) => g.mergeNumberFormat(locale, options.numberFormats[locale]));
	return g;
}
var baseFormatProps = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (val) => val === "parent" || val === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function getInterpolateArg({ slots }, keys) {
	if (keys.length === 1 && keys[0] === "default") return (slots.default ? slots.default() : []).reduce((slot, current) => {
		return [...slot, ...current.type === Fragment ? current.children : [current]];
	}, []);
	else return keys.reduce((arg, key) => {
		const slot = slots[key];
		if (slot) arg[key] = slot();
		return arg;
	}, create());
}
function getFragmentableTag() {
	return Fragment;
}
var Translation = /* @__PURE__ */ defineComponent({
	name: "i18n-t",
	props: assign({
		keypath: {
			type: String,
			required: true
		},
		plural: {
			type: [Number, String],
			validator: (val) => isNumber(val) || !isNaN(val)
		}
	}, baseFormatProps),
	setup(props, context) {
		const { slots, attrs } = context;
		const i18n$1 = props.i18n || useI18n$1({
			useScope: props.scope,
			__useComponent: true
		});
		return () => {
			const keys = Object.keys(slots).filter((key) => key[0] !== "_");
			const options = create();
			if (props.locale) options.locale = props.locale;
			if (props.plural !== void 0) options.plural = isString(props.plural) ? +props.plural : props.plural;
			const arg = getInterpolateArg(context, keys);
			const children = i18n$1[TranslateVNodeSymbol](props.keypath, arg, options);
			const assignedAttrs = assign(create(), attrs);
			return h(isString(props.tag) || isObject$4(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
		};
	}
});
var I18nT = Translation;
function isVNode(target) {
	return isArray$1(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
	const { slots, attrs } = context;
	return () => {
		const options = { part: true };
		let overrides = create();
		if (props.locale) options.locale = props.locale;
		if (isString(props.format)) options.key = props.format;
		else if (isObject$4(props.format)) {
			if (isString(props.format.key)) options.key = props.format.key;
			overrides = Object.keys(props.format).reduce((options$1, prop) => {
				return slotKeys.includes(prop) ? assign(create(), options$1, { [prop]: props.format[prop] }) : options$1;
			}, create());
		}
		const parts = partFormatter(...[
			props.value,
			options,
			overrides
		]);
		let children = [options.key];
		if (isArray$1(parts)) children = parts.map((part, index) => {
			const slot = slots[part.type];
			const node = slot ? slot({
				[part.type]: part.value,
				index,
				parts
			}) : [part.value];
			if (isVNode(node)) node[0].key = `${part.type}-${index}`;
			return node;
		});
		else if (isString(parts)) children = [parts];
		const assignedAttrs = assign(create(), attrs);
		return h(isString(props.tag) || isObject$4(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
	};
}
var NumberFormat = /* @__PURE__ */ defineComponent({
	name: "i18n-n",
	props: assign({
		value: {
			type: Number,
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n$1 = props.i18n || useI18n$1({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => i18n$1[NumberPartsSymbol](...args));
	}
});
function getComposer$1(i18n$1, instance) {
	const i18nInternal = i18n$1;
	if (i18n$1.mode === "composition") return i18nInternal.__getInstance(instance) || i18n$1.global;
	else {
		const vueI18n = i18nInternal.__getInstance(instance);
		return vueI18n != null ? vueI18n.__composer : i18n$1.global.__composer;
	}
}
function vTDirective(i18n$1) {
	const _process = (binding) => {
		const { instance, value } = binding;
		/* istanbul ignore if */
		if (!instance || !instance.$) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const composer = getComposer$1(i18n$1, instance.$);
		const parsedValue = parseValue(value);
		return [Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]), composer];
	};
	const register = (el, binding) => {
		const [textContent, composer] = _process(binding);
		if (inBrowser && i18n$1.global === composer) el.__i18nWatcher = watch(composer.locale, () => {
			binding.instance && binding.instance.$forceUpdate();
		});
		el.__composer = composer;
		el.textContent = textContent;
	};
	const unregister = (el) => {
		if (inBrowser && el.__i18nWatcher) {
			el.__i18nWatcher();
			el.__i18nWatcher = void 0;
			delete el.__i18nWatcher;
		}
		if (el.__composer) {
			el.__composer = void 0;
			delete el.__composer;
		}
	};
	const update = (el, { value }) => {
		if (el.__composer) {
			const composer = el.__composer;
			const parsedValue = parseValue(value);
			el.textContent = Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]);
		}
	};
	const getSSRProps = (binding) => {
		const [textContent] = _process(binding);
		return { textContent };
	};
	return {
		created: register,
		unmounted: unregister,
		beforeUpdate: update,
		getSSRProps
	};
}
function parseValue(value) {
	if (isString(value)) return { path: value };
	else if (isPlainObject(value)) {
		if (!("path" in value)) throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
		return value;
	} else throw createI18nError(I18nErrorCodes.INVALID_VALUE);
}
function makeParams(value) {
	const { path, locale, args, choice, plural } = value;
	const options = {};
	const named = args || {};
	if (isString(locale)) options.locale = locale;
	if (isNumber(choice)) options.plural = choice;
	if (isNumber(plural)) options.plural = plural;
	return [
		path,
		named,
		options
	];
}
function apply(app, i18n$1, ...options) {
	const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
	if (isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true) {
		[Translation.name, "I18nT"].forEach((name) => app.component(name, Translation));
		[NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
		[DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
	}
	app.directive("t", vTDirective(i18n$1));
}
var I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}) {
	const __legacyMode = __VUE_I18N_LEGACY_API__ && isBoolean(options.legacy) ? options.legacy : __VUE_I18N_LEGACY_API__;
	const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
	const __instances = /* @__PURE__ */ new Map();
	const [globalScope, __global] = createGlobal(options, __legacyMode);
	const symbol = /* @__PURE__ */ makeSymbol("");
	function __getInstance(component) {
		return __instances.get(component) || null;
	}
	function __setInstance(component, instance) {
		__instances.set(component, instance);
	}
	function __deleteInstance(component) {
		__instances.delete(component);
	}
	const i18n$1 = {
		get mode() {
			return __VUE_I18N_LEGACY_API__ && __legacyMode ? "legacy" : "composition";
		},
		async install(app, ...options$1) {
			app.__VUE_I18N_SYMBOL__ = symbol;
			app.provide(app.__VUE_I18N_SYMBOL__, i18n$1);
			if (isPlainObject(options$1[0])) {
				const opts = options$1[0];
				i18n$1.__composerExtend = opts.__composerExtend;
				i18n$1.__vueI18nExtend = opts.__vueI18nExtend;
			}
			let globalReleaseHandler = null;
			if (!__legacyMode && __globalInjection) globalReleaseHandler = injectGlobalFields(app, i18n$1.global);
			if (__VUE_I18N_FULL_INSTALL__) apply(app, i18n$1, ...options$1);
			if (__VUE_I18N_LEGACY_API__ && __legacyMode) app.mixin(defineMixin(__global, __global.__composer, i18n$1));
			const unmountApp = app.unmount;
			app.unmount = () => {
				globalReleaseHandler && globalReleaseHandler();
				i18n$1.dispose();
				unmountApp();
			};
		},
		get global() {
			return __global;
		},
		dispose() {
			globalScope.stop();
		},
		__instances,
		__getInstance,
		__setInstance,
		__deleteInstance
	};
	return i18n$1;
}
function useI18n$1(options = {}) {
	const instance = getCurrentInstance();
	if (instance == null) throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
	if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
	const i18n$1 = getI18nInstance(instance);
	const gl = getGlobalComposer(i18n$1);
	const componentOptions = getComponentOptions(instance);
	const scope = getScope(options, componentOptions);
	if (scope === "global") {
		adjustI18nResources(gl, options, componentOptions);
		return gl;
	}
	if (scope === "parent") {
		let composer$1 = getComposer(i18n$1, instance, options.__useComponent);
		if (composer$1 == null) composer$1 = gl;
		return composer$1;
	}
	const i18nInternal = i18n$1;
	let composer = i18nInternal.__getInstance(instance);
	if (composer == null) {
		const composerOptions = assign({}, options);
		if ("__i18n" in componentOptions) composerOptions.__i18n = componentOptions.__i18n;
		if (gl) composerOptions.__root = gl;
		composer = createComposer(composerOptions);
		if (i18nInternal.__composerExtend) composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
		setupLifeCycle(i18nInternal, instance, composer);
		i18nInternal.__setInstance(instance, composer);
	}
	return composer;
}
function createGlobal(options, legacyMode) {
	const scope = effectScope();
	const obj = __VUE_I18N_LEGACY_API__ && legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
	if (obj == null) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
	return [scope, obj];
}
function getI18nInstance(instance) {
	const i18n$1 = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
	/* istanbul ignore if */
	if (!i18n$1) throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
	return i18n$1;
}
function getScope(options, componentOptions) {
	return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n$1) {
	return i18n$1.mode === "composition" ? i18n$1.global : i18n$1.global.__composer;
}
function getComposer(i18n$1, target, useComponent = false) {
	let composer = null;
	const root$1 = target.root;
	let current = getParentComponentInstance(target, useComponent);
	while (current != null) {
		const i18nInternal = i18n$1;
		if (i18n$1.mode === "composition") composer = i18nInternal.__getInstance(current);
		else if (__VUE_I18N_LEGACY_API__) {
			const vueI18n = i18nInternal.__getInstance(current);
			if (vueI18n != null) {
				composer = vueI18n.__composer;
				if (useComponent && composer && !composer[InejctWithOptionSymbol]) composer = null;
			}
		}
		if (composer != null) break;
		if (root$1 === current) break;
		current = current.parent;
	}
	return composer;
}
function getParentComponentInstance(target, useComponent = false) {
	if (target == null) return null;
	return !useComponent ? target.parent : target.vnode.ctx || target.parent;
}
function setupLifeCycle(i18n$1, target, composer) {
	onMounted(() => {}, target);
	onUnmounted(() => {
		const _composer = composer;
		i18n$1.__deleteInstance(target);
		const dispose = _composer[DisposeSymbol];
		if (dispose) {
			dispose();
			delete _composer[DisposeSymbol];
		}
	}, target);
}
var globalExportProps = [
	"locale",
	"fallbackLocale",
	"availableLocales"
];
var globalExportMethods = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function injectGlobalFields(app, composer) {
	const i18n$1 = Object.create(null);
	globalExportProps.forEach((prop) => {
		const desc = Object.getOwnPropertyDescriptor(composer, prop);
		if (!desc) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const wrap = isRef(desc.value) ? {
			get() {
				return desc.value.value;
			},
			set(val) {
				desc.value.value = val;
			}
		} : { get() {
			return desc.get && desc.get();
		} };
		Object.defineProperty(i18n$1, prop, wrap);
	});
	app.config.globalProperties.$i18n = i18n$1;
	globalExportMethods.forEach((method) => {
		const desc = Object.getOwnPropertyDescriptor(composer, method);
		if (!desc || !desc.value) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
	});
	const dispose = () => {
		delete app.config.globalProperties.$i18n;
		globalExportMethods.forEach((method) => {
			delete app.config.globalProperties[`$${method}`];
		});
	};
	return dispose;
}
var DatetimeFormat = /* @__PURE__ */ defineComponent({
	name: "i18n-d",
	props: assign({
		value: {
			type: [Number, Date],
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n$1 = props.i18n || useI18n$1({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => i18n$1[DatetimePartsSymbol](...args));
	}
});
initFeatureFlags();
registerMessageCompiler(compile);
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
if (__INTLIFY_PROD_DEVTOOLS__) {
	const target = getGlobalThis();
	target.__INTLIFY__ = true;
	setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const _reusableBaseText$1 = {
	"cancel": "Cancel",
	"codeNodeEditor": {
		"linter": { "useJson": "Access the properties of an item under `.json`, e.g. `item.json`" },
		"completer": {
			"all": "Returns an array of the node's output items",
			"first": "Returns the first item output by the node",
			"last": "Returns the last item output by the node",
			"itemMatching": "Returns the matching item, i.e. the one used to produce the item in the current node at the specified index."
		}
	},
	"name": "Name",
	"save": "Save",
	"dismiss": "Dismiss",
	"unlimited": "Unlimited",
	"activate": "Activate",
	"user": "User",
	"enabled": "Enabled",
	"disabled": "Disabled",
	"type": "Type",
	"role": "Role",
	"roles": {
		"admin": "Admin",
		"editor": "Editor",
		"viewer": "Viewer"
	}
};
const _reusableDynamicText$1 = {
	"readMore": "Read more",
	"learnMore": "Learn more",
	"moreInfo": "More info",
	"oauth2": {
		"clientId": "Client ID",
		"clientSecret": "Client Secret"
	}
};
const error$1 = "Error";
const forgotPassword$1 = "Forgot my password";
const settings$1 = "Settings";
const startupError$1 = "Error connecting to n8n";
var en_default = {
	_reusableBaseText: _reusableBaseText$1,
	_reusableDynamicText: _reusableDynamicText$1,
	"generic.annotations": "Annotations",
	"generic.annotationData": "Highlighted data",
	"generic.any": "Any",
	"generic.allow": "Allow",
	"generic.deny": "Deny",
	"generic.docs": "Docs",
	"generic.documentation": "Documentation",
	"generic.back": "Back",
	"generic.cancel": "Cancel",
	"generic.connect": "Connect",
	"generic.open": "Open",
	"generic.openResource": "Open {resource}",
	"generic.add": "Add",
	"generic.close": "Close",
	"generic.clear": "Clear",
	"generic.confirm": "Confirm",
	"generic.create": "Create",
	"generic.start": "Start",
	"generic.create.workflow": "Create workflow",
	"generic.deleteWorkflowError": "Problem deleting workflow",
	"generic.archiveWorkflowError": "Problem archiving workflow",
	"generic.unarchiveWorkflowError": "Problem unarchiving workflow",
	"generic.filtersApplied": "Filters are currently applied.",
	"generic.field": "field",
	"generic.fields": "fields",
	"generic.folderCount": "Folder | {count} Folder | {count} Folders",
	"generic.folder": "Folder",
	"generic.keepBuilding": "Keep building",
	"generic.learnMore": "Learn more",
	"generic.recommended": "Recommended",
	"generic.reset": "Reset",
	"generic.resetAllFilters": "Reset all filters",
	"generic.communityNode": "Community Node",
	"generic.communityNode.tooltip": "This is a node from our community. It's part of the {packageName} package. <a href=\"{docURL}\" target=\"_blank\" title=\"Read the n8n docs\">Learn more</a>",
	"generic.officialNode.tooltip": "This is an official node maintained by {author}",
	"generic.copy": "Copy",
	"generic.copied": "Copied",
	"generic.delete": "Delete",
	"generic.dontShowAgain": "Don't show again",
	"generic.enterprise": "Enterprise",
	"generic.executions": "Executions",
	"generic.tag_plural": "Tags",
	"generic.tag": "Tag | {count} Tags",
	"generic.tests": "Evaluations",
	"generic.templates": "Templates",
	"generic.optional": "optional",
	"generic.or": "or",
	"generic.clickToCopy": "Click to copy",
	"generic.copiedToClipboard": "Copied to clipboard",
	"generic.beta": "beta",
	"generic.betaProper": "Beta",
	"generic.yes": "Yes",
	"generic.no": "No",
	"generic.rating": "Rating",
	"generic.refresh": "Refresh",
	"generic.retry": "Retry",
	"generic.error": "Something went wrong",
	"generic.error.subworkflowCreationFailed": "Error creating sub-workflow",
	"generic.settings": "Settings",
	"generic.service": "the service",
	"generic.star": "Star",
	"generic.tryNow": "Try now",
	"generic.startNow": "Start now",
	"generic.dismiss": "Dismiss",
	"generic.saving": "Saving",
	"generic.name": "Name",
	"generic.description": "Description",
	"generic.unsavedWork.confirmMessage.headline": "Save changes before leaving?",
	"generic.unsavedWork.confirmMessage.message": "If you don't save, you might lose your changes.",
	"generic.unsavedWork.confirmMessage.confirmButtonText": "Save",
	"generic.unsavedWork.confirmMessage.cancelButtonText": "Leave without saving",
	"generic.trial.message.days": "1 day left | {count} days left",
	"generic.trial.message.hours": "1 hour left | {count} hours left",
	"generic.trial.message.minutes": "1 minute left | {count} minutes left",
	"generic.trial.tooltip.days": "1 day left in your trial. Upgrade to keep using n8n. | {count} days left in your trial. Upgrade to keep using n8n.",
	"generic.trial.tooltip.hours": "1 hour left in your trial. Upgrade to keep using n8n. | {count} hours left in your trial. Upgrade to keep using n8n.",
	"generic.trial.tooltip.minutes": "1 minute left in your trial. Upgrade to keep using n8n. | {count} minutes left in your trial. Upgrade to keep using n8n.",
	"generic.upgrade": "Upgrade",
	"generic.upgradeNow": "Upgrade now",
	"generic.update": "Update",
	"generic.credential": "Credential | {count} Credential | {count} Credentials",
	"generic.credentials": "Credentials",
	"generic.workflow": "Workflow | {count} Workflow | {count} Workflows",
	"generic.workflowSaved": "Workflow changes saved",
	"generic.autosave.retrying": "Autosave failed: {error}\nRetrying in {retryIn}...",
	"generic.editor": "Editor",
	"generic.seePlans": "See plans",
	"generic.loading": "Loading",
	"generic.loadingEllipsis": "Loading...",
	"generic.and": "and",
	"generic.ownedByMe": "(You)",
	"generic.moreInfo": "More info",
	"generic.next": "Next",
	"generic.pro": "Pro",
	"generic.variable_plural": "Variables",
	"generic.folders_plural": "Folders",
	"generic.variable": "Variable | {count} Variables",
	"generic.viewDocs": "View docs",
	"generic.workflows": "Workflows",
	"generic.rename": "Rename",
	"generic.missing.permissions": "Missing permissions to perform this action",
	"generic.shortcutHint": "Or press",
	"generic.unknownError": "An unknown error occurred",
	"generic.upgradeToEnterprise": "Upgrade to Enterprise",
	"generic.never": "Never",
	"generic.list.clearSelection": "Clear selection",
	"generic.list.selected": "{count} row selected | {count} rows selected",
	"generic.project": "Project",
	"generic.projects": "Projects",
	"generic.your": "Your",
	"generic.apiKey": "API Key",
	"generic.search": "Search",
	"generic.showMore": "Show more",
	"generic.showLess": "Show less",
	"generic.stopAll": "Stop all",
	"generic.published": "Published",
	"generic.notPublished": "Not published",
	"generic.tip": "Tip",
	"about.aboutN8n": "About n8n",
	"about.close": "Close",
	"about.license": "License",
	"about.n8nLicense": "Sustainable Use License + n8n Enterprise License",
	"about.n8nVersion": "n8n Version",
	"about.sourceCode": "Source Code",
	"about.instanceID": "Instance ID",
	"about.debug.title": "Debug",
	"about.debug.message": "Copy debug information",
	"about.debug.toast.title": "Debug info",
	"about.debug.toast.message": "Copied debug info to clipboard",
	"about.thirdPartyLicenses": "Third-Party Licenses",
	"about.thirdPartyLicensesLink": "View all third-party licenses",
	"about.thirdPartyLicenses.downloadError": "Failed to download third-party licenses file",
	"askAi.dialog.title": "'Ask AI' is almost ready",
	"askAi.dialog.body": "We’re still applying the finishing touches. Soon, you will be able to <strong>automatically generate code from simple text prompts</strong>. Join the waitlist to get early access to this feature.",
	"askAi.dialog.signup": "Join Waitlist",
	"activationModal.butYouCanSeeThem": "but you can see them in the",
	"activationModal.executionList": "execution list",
	"activationModal.gotIt": "Got it",
	"activationModal.ifYouChooseTo": "if you choose to",
	"activationModal.saveExecutions": "save executions.",
	"activationModal.theseExecutionsWillNotShowUp": "These executions will not show up immediately in the editor,",
	"activationModal.workflowPublished": "Workflow published",
	"activationModal.yourTriggerWillNowFire": "Your trigger will now fire production executions automatically.",
	"activationModal.yourTriggersWillNowFire": "Your triggers will now fire production executions automatically.",
	"activationModal.yourWorkflowWillNowListenForEvents": "Your workflow will now listen for events from {serviceName} and trigger executions.",
	"activationModal.yourWorkflowWillNowRegularlyCheck": "Your workflow will now regularly check {serviceName} for events and trigger executions for them.",
	"annotationTagsManager.manageTags": "Manage execution tags",
	"annotationTagsView.usage": "Usage (all workflows)",
	"annotationTagsView.inUse": "{count} execution | {count} executions",
	"auth.changePassword": "Change password",
	"auth.changePassword.currentPassword": "Current password",
	"auth.changePassword.mfaCode": "Two-factor code",
	"auth.changePassword.error": "Problem changing the password",
	"auth.changePassword.missingTokenError": "Missing token",
	"auth.changePassword.missingUserIdError": "Missing user ID",
	"auth.changePassword.passwordUpdated": "Password updated",
	"auth.changePassword.passwordUpdatedMessage": "You can now sign in with your new password",
	"auth.changePassword.passwordsMustMatchError": "Passwords must match",
	"auth.changePassword.reenterNewPassword": "Re-enter new password",
	"auth.changePassword.tokenValidationError": "Invalid password-reset token",
	"auth.confirmPassword": "Confirm password",
	"auth.confirmPassword.currentPassword": "Current password",
	"auth.confirmPassword.confirmPasswordToChangeEmail": "Please confirm your password in order to change your email address.",
	"auth.defaultPasswordRequirements": "8+ characters, at least 1 number and 1 capital letter",
	"auth.validation.missingParameters": "Missing token or user id",
	"auth.email": "Email",
	"auth.firstName": "First Name",
	"auth.lastName": "Last Name",
	"auth.newPassword": "New password",
	"auth.password": "Password",
	"auth.role": "Role",
	"auth.roles.default": "Default",
	"auth.roles.member": "Member",
	"auth.roles.admin": "@:_reusableBaseText.roles.admin",
	"auth.roles.owner": "Owner",
	"auth.roles.chatUser": "Chat user",
	"auth.agreement.label": "I want to receive security and product updates",
	"auth.setup.next": "Next",
	"auth.setup.settingUpOwnerError": "Problem setting up owner",
	"auth.setup.setupOwner": "Set up owner account",
	"auth.signin": "Sign in",
	"auth.signin.error": "Problem logging in",
	"auth.signout": "Sign out",
	"auth.signout.error": "Could not sign out",
	"auth.signup.finishAccountSetup": "Finish account setup",
	"auth.signup.missingTokenError": "Missing token",
	"auth.signup.setupYourAccount": "Set up your account",
	"auth.signup.setupYourAccountError": "Problem setting up your account",
	"auth.signup.tokenValidationError": "Issue validating invite token",
	"aiAssistant.name": "n8n AI",
	"aiAssistant.assistant": "Assistant",
	"aiAssistant.tabs.ask": "Ask",
	"aiAssistant.tabs.build": "Build",
	"aiAssistant.builder.mode": "AI Builder",
	"aiAssistant.builder.placeholder": "Ask n8n to build...",
	"aiAssistant.builder.assistantPlaceholder": "What would you like to modify or add?",
	"aiAssistant.builder.characterLimit": "You've reached the { limit } character limit",
	"aiAssistant.builder.generateNew": "Generate new workflow",
	"aiAssistant.builder.newWorkflowNotice": "The created workflow will be added to the editor",
	"aiAssistant.builder.feedbackPrompt": "Is this workflow helpful?",
	"aiAssistant.builder.invalidPrompt": "Prompt validation failed. Please try again with a clearer description of your workflow requirements and supported integrations.",
	"aiAssistant.builder.workflowParsingError.title": "Unable to insert workflow",
	"aiAssistant.builder.workflowParsingError.content": "The workflow returned by AI could not be parsed. Please try again.",
	"aiAssistant.builder.error.title": "Workflow update failed",
	"aiAssistant.builder.canvasPrompt.title": "What would you like to automate?",
	"aiAssistant.builder.canvasPrompt.confirmTitle": "Replace current prompt?",
	"aiAssistant.builder.canvasPrompt.confirmMessage": "This will replace your current prompt. Are you sure?",
	"aiAssistant.builder.canvasPrompt.confirmButton": "Replace",
	"aiAssistant.builder.canvasPrompt.cancelButton": "Cancel",
	"aiAssistant.builder.canvasPrompt.startManually.title": "Start manually",
	"aiAssistant.builder.canvasPrompt.startManually.subTitle": "Add the first node",
	"aiAssistant.builder.canvasPrompt.buildWithAI": "Build with AI",
	"aiAssistant.builder.streamAbortedMessage": "Task aborted",
	"aiAssistant.builder.executeMessage.description": "Complete these steps before executing your workflow",
	"aiAssistant.builder.executeMessage.noIssues": "Your workflow is ready to be executed",
	"aiAssistant.builder.executeMessage.validationTooltip": "Complete the steps above before executing",
	"aiAssistant.builder.executeMessage.execute": "Execute and refine",
	"aiAssistant.builder.executeMessage.chooseModel": "Choose model",
	"aiAssistant.builder.executeMessage.chooseCredentials": "Choose credentials",
	"aiAssistant.builder.executeMessage.noExecutionData": "Workflow execution could not be started. Please try again.",
	"aiAssistant.builder.executeMessage.executionSuccess": "Workflow executed successfully.",
	"aiAssistant.builder.executeMessage.executionFailedOnNode": "Workflow execution failed on node \"{nodeName}\": {errorMessage}",
	"aiAssistant.builder.executeMessage.executionFailed": "Workflow execution failed: {errorMessage}",
	"aiAssistant.builder.executeMessage.fillParameter": "Update \"{label}\" parameter",
	"aiAssistant.builder.executeMessage.addMissingCredentials": "Add missing credentials",
	"aiAssistant.builder.toast.title": "Send chat message to start the execution",
	"aiAssistant.builder.toast.description": "Please send a message in the chat panel to start the execution of your workflow",
	"aiAssistant.builder.restoreError.title": "Failed to restore version",
	"aiAssistant.builder.disabledTooltip.autosaving": "Saving workflow...",
	"aiAssistant.builder.disabledTooltip.readOnly": "Another user is currently editing this workflow",
	"aiAssistant.builder.notification.title": "Workflow ready - n8n",
	"aiAssistant.builder.notification.body": "Done building {workflowName}",
	"aiAssistant.builder.notification.inputNeeded.title": "Input needed - n8n",
	"aiAssistant.builder.notification.inputNeeded.body": "Waiting for your response on {workflowName}",
	"aiAssistant.builder.notificationBanner.text": "Want to be notified when the agent finishes building?",
	"aiAssistant.builder.notificationBanner.notify": "Notify",
	"aiAssistant.newSessionModal.title.part1": "Start new",
	"aiAssistant.newSessionModal.title.part2": "session",
	"aiAssistant.newSessionModal.message": "You already have an active n8n AI session. Starting a new session will clear your current conversation history.",
	"aiAssistant.newSessionModal.question": "Are you sure you want to start a new session?",
	"aiAssistant.newSessionModal.confirm": "Start new session",
	"aiAssistant.serviceError.message": "Unable to connect to n8n's AI service ({message})",
	"aiAssistant.payloadTooBig.message": "Payload size is too large",
	"aiAssistant.codeUpdated.message.title": "n8n AI modified workflow",
	"aiAssistant.codeUpdated.message.body1": "Open the",
	"aiAssistant.codeUpdated.message.body2": "node to see the changes",
	"aiAssistant.thinkingSteps.analyzingError": "Analyzing the error...",
	"aiAssistant.thinkingSteps.thinking": "Thinking",
	"aiAssistant.prompts.currentView.workflowList": "The user is currently looking at the list of workflows.",
	"aiAssistant.prompts.currentView.credentialsList": "The user is currently looking at the list of credentials.",
	"aiAssistant.prompts.currentView.executionsView": "The user is currently looking at the list of executions for the currently open workflow.",
	"aiAssistant.prompts.currentView.workflowEditor": "The user is currently looking at the current workflow in n8n editor, without any specific node selected.",
	"aiAssistant.tooltip": "n8n AI",
	"aiAssistant.coachmark.title": "Ask mode enabled",
	"aiAssistant.coachmark.body": "Ask questions about n8n, get help with errors, or learn about automation. Switch to Build anytime to create workflows.",
	"aiAssistant.coachmark.gotIt": "Got it",
	"aiAssistant.askMode.emptyState.title": "Ask n8n AI",
	"aiAssistant.askMode.emptyState.body1": "Ask anything about n8n, your workflow, or how to accomplish a task. This won't use any of your AI credits.",
	"aiAssistant.askMode.emptyState.body2": "Look for the",
	"aiAssistant.askMode.emptyState.body3": "button throughout the UI to get contextual help.",
	"aiAssistant.askMode.inputPlaceholder": "What do you need help with?",
	"banners.confirmEmail.message.1": "To secure your account and prevent future access issues, please confirm your",
	"banners.confirmEmail.message.2": "email address.",
	"banners.confirmEmail.button": "Confirm email",
	"banners.confirmEmail.toast.success.heading": "Confirmation email sent",
	"banners.confirmEmail.toast.success.message": "Please check your inbox and click the confirmation link.",
	"banners.confirmEmail.toast.error.heading": "Problem sending confirmation email",
	"banners.confirmEmail.toast.error.message": "Please try again later.",
	"banners.nonProductionLicense.message": "This n8n instance is not licensed for production purposes.",
	"banners.trial.message.days": "1 day left in your n8n trial | {count} days left in your n8n trial",
	"banners.trial.message.hours": "1 hour left in your n8n trial | {count} hours left in your n8n trial",
	"banners.trial.message.minutes": "1 minute left in your n8n trial | {count} minutes left in your n8n trial",
	"banners.trialOver.message": "Your trial is over. Upgrade now to keep automating.",
	"banners.v1.message": "n8n has been updated to version 1, introducing some breaking changes. Please consult the <a target=\"_blank\" href=\"https://docs.n8n.io/1-0-migration-checklist\">migration guide</a> for more information.",
	"banners.workflowAutoDeactivated.message": "This workflow was automatically deactivated due to multiple crashed executions. Please review and reactivate it when ready.",
	"binaryDataDisplay.backToList": "Back to list",
	"binaryDataDisplay.backToOverviewPage": "Back to overview page",
	"binaryDataDisplay.noDataFoundToDisplay": "No data found to display",
	"binaryDataDisplay.yourBrowserDoesNotSupport": "Your browser does not support the video element. Kindly update it to latest version.",
	"chat.hide": "Hide chat",
	"chat.open": "Open chat",
	"chat.window.title": "Chat",
	"chat.window.logs": "Latest Logs",
	"chat.window.logsFromNode": "from {nodeName} node",
	"chat.window.noChatNode": "No Chat Node",
	"chat.window.noExecution": "Nothing got executed yet",
	"chat.window.chat.placeholder": "Type message, or press ‘up’ for prev one",
	"chat.window.chat.placeholderPristine": "Type a message",
	"chat.window.chat.sendButtonText": "Send",
	"chat.window.chat.provideMessage": "Please provide a message",
	"chat.window.chat.emptyChatMessage": "Empty chat message",
	"chat.window.chat.emptyChatMessage.v2": "Send a message below to trigger the chat workflow",
	"chat.window.chat.chatMessageOptions.reuseMessage": "Reuse Message",
	"chat.window.chat.chatMessageOptions.repostMessage": "Repost Message",
	"chat.window.chat.chatMessageOptions.executionId": "Execution ID",
	"chat.window.chat.unpinAndExecute.description": "Sending the message overwrites the pinned chat node data.",
	"chat.window.chat.unpinAndExecute.title": "Unpin chat output data?",
	"chat.window.chat.unpinAndExecute.confirm": "Unpin and send",
	"chat.window.chat.unpinAndExecute.cancel": "Cancel",
	"chat.window.chat.response.empty": "[No response. Make sure the last executed node outputs the content to display here]",
	"chat.window.session.title": "Session",
	"chat.window.session.id": "Session: {id}",
	"chat.window.session.id.copy": "(click to copy)",
	"chat.window.session.reset": "Reset",
	"chat.window.session.resetSession": "Reset chat session",
	"chatHub.agent.personalAgents": "Personal agents",
	"chatHub.agent.workflowAgents": "Workflow agents",
	"chatHub.agent.newAgent": "New Agent",
	"chatHub.agent.unavailableAgent": "Unavailable agent",
	"chatHub.agent.configureCredentials": "Configure credentials",
	"chatHub.agent.addModel": "Add model",
	"chatHub.agent.credentialsMissing": "Credentials missing",
	"chatHub.agent.card.menu.edit": "Edit",
	"chatHub.agent.card.menu.delete": "Delete",
	"chatHub.agent.card.noDescription": "No description",
	"chatHub.agent.card.button.edit": "Edit",
	"chatHub.agent.card.button.moreOptions": "More options",
	"chatHub.agent.editor.title.new": "New Agent",
	"chatHub.agent.editor.title.edit": "Edit Agent",
	"chatHub.agent.editor.name.label": "Icon and name",
	"chatHub.agent.editor.name.placeholder": "Enter agent name",
	"chatHub.agent.editor.iconPicker.button.tooltip": "Change icon",
	"chatHub.agent.editor.description.label": "Description",
	"chatHub.agent.editor.description.placeholder": "Enter agent description (optional)",
	"chatHub.agent.editor.systemPrompt.label": "System Prompt",
	"chatHub.agent.editor.systemPrompt.placeholder": "Enter system prompt",
	"chatHub.agent.editor.model.label": "Model",
	"chatHub.agent.editor.tools.label": "Tools",
	"chatHub.agent.editor.loading": "Loading agent...",
	"chatHub.agent.editor.saving": "Saving...",
	"chatHub.agent.editor.save": "Save",
	"chatHub.agent.editor.cancel": "Cancel",
	"chatHub.agent.editor.delete": "Delete",
	"chatHub.agent.editor.deleting": "Deleting...",
	"chatHub.agent.editor.delete.confirm.title": "Delete Agent",
	"chatHub.agent.editor.delete.confirm.message": "Are you sure you want to delete this agent? This action cannot be undone.",
	"chatHub.agent.editor.delete.confirm.button": "Delete",
	"chatHub.agent.editor.delete.cancel.button": "Cancel",
	"chatHub.agent.editor.error.load": "Failed to load agent",
	"chatHub.agent.editor.error.save": "Failed to save agent",
	"chatHub.agent.editor.error.delete": "Failed to delete agent",
	"chatHub.agent.editor.success.create": "Agent created successfully",
	"chatHub.agent.editor.success.update": "Agent updated successfully",
	"chatHub.agent.editor.success.delete": "Agent deleted successfully",
	"chatHub.agents.loadError": "Failed to load agent",
	"chatHub.agents.delete.confirm.message": "Are you sure you want to delete this agent?",
	"chatHub.agents.delete.confirm.title": "Delete agent",
	"chatHub.agents.delete.confirm.button": "Delete",
	"chatHub.agents.delete.cancel.button": "Cancel",
	"chatHub.agents.delete.success": "Agent deleted successfully",
	"chatHub.agents.delete.error": "Could not delete the agent",
	"chatHub.agents.button.newAgent": "New Agent",
	"chatHub.agents.search.placeholder": "Search",
	"chatHub.agents.sort.updatedAt": "Sort by last updated",
	"chatHub.agents.sort.createdAt": "Sort by created",
	"chatHub.agents.empty.noMatch": "No agents match your search criteria.",
	"chatHub.workflowAgents.title": "Workflow Agents",
	"chatHub.workflowAgents.description": "Browse and use AI agents built with n8n workflows",
	"chatHub.workflowAgents.empty.noAgents": "No workflow agents available.",
	"chatHub.workflowAgents.empty.noMatch": "No workflow agents match your search criteria.",
	"chatHub.personalAgents.title": "Personal Agents",
	"chatHub.personalAgents.description": "Create and manage custom AI agents with specific instructions and behaviors",
	"chatHub.personalAgents.empty.noAgents": "No personal agents available. Create your first custom agent to get started.",
	"chatHub.personalAgents.empty.noMatch": "No personal agents match your search criteria.",
	"chatHub.chat.greeting": "Start a chat with",
	"chatHub.chat.greeting.fallback": "Select a model to start chatting",
	"chatHub.welcome.header": "Your agents, any model",
	"chatHub.welcome.subtitle": "One place to talk to everything you've built or connected",
	"chatHub.welcome.card.workflowAgents.title": "Workflow agents",
	"chatHub.welcome.card.workflowAgents.description": "Agents built with n8n workflows, made available by builders in your instance.",
	"chatHub.welcome.card.personalAgents.title": "Personal agents",
	"chatHub.welcome.card.personalAgents.description": "Simple agents with custom instructions and tool sets you define.",
	"chatHub.welcome.card.baseModels.title": "Base models",
	"chatHub.welcome.card.baseModels.description": "Chat models from any provider you have access to a credential for.",
	"chatHub.welcome.button.startNewChat": "Start new chat",
	"chatHub.welcome.button.inviteChatUsers": "Invite chat users",
	"chatHub.welcome.inviteUpgrade.tooltip": "{link} to invite chat users. Read more {docsLink}",
	"chatHub.welcome.inviteUpgrade.here": "here.",
	"chatHub.chat.dropOverlay": "Drop files here to attach",
	"chatHub.chat.scrollToBottom": "Scroll to bottom",
	"chatHub.chat.header.button.editAgent": "Edit Agent",
	"chatHub.chat.header.button.newChat": "New Chat",
	"chatHub.chat.header.button.openWorkflow": "Open Workflow",
	"chatHub.chat.prompt.microphone.accessDenied": "Microphone access denied",
	"chatHub.chat.prompt.microphone.allowAccess": "Please allow microphone access to use voice input",
	"chatHub.chat.prompt.microphone.noSpeech": "No speech detected. Please try again",
	"chatHub.chat.prompt.callout.selectModel.new": "Please {link} to start a conversation",
	"chatHub.chat.prompt.callout.selectModel.new.link": "select a model",
	"chatHub.chat.prompt.callout.selectModel.existing": "Please {link} to continue the conversation",
	"chatHub.chat.prompt.callout.selectModel.existing.link": "reselect a model",
	"chatHub.chat.prompt.callout.setCredentials.new": "Please {link} for {provider} to start a conversation",
	"chatHub.chat.prompt.callout.setCredentials.new.link": "set credentials",
	"chatHub.chat.prompt.callout.setCredentials.existing": "Please {link} for {provider} to continue the conversation",
	"chatHub.chat.prompt.callout.setCredentials.existing.link": "set credentials",
	"chatHub.chat.prompt.button.attach": "Attach",
	"chatHub.chat.prompt.button.attach.disabled": "File attachments are not supported by the selected model",
	"chatHub.chat.prompt.button.stopRecording": "Stop recording",
	"chatHub.chat.prompt.button.voiceInput": "Voice input",
	"chatHub.chat.prompt.button.send": "Send",
	"chatHub.chat.prompt.button.stopGenerating": "Stop generating",
	"chatHub.chat.prompt.placeholder.withModel": "Message {model}...",
	"chatHub.chat.prompt.placeholder.selectModel": "Select a model",
	"chatHub.tools.editor.title": "Add Tools",
	"chatHub.tools.editor.credential": "Credential",
	"chatHub.tools.editor.credential.placeholder": "Select credential…",
	"chatHub.tools.editor.credential.createNew": "Create New",
	"chatHub.tools.editor.credential.createNew.permissionDenied": "Your current role does not allow you to create credentials",
	"chatHub.tools.editor.selectedCount": "{count} tool selected | {count} tools selected",
	"chatHub.tools.editor.confirm": "Confirm",
	"chatHub.tools.editor.cancel": "Cancel",
	"chatHub.tools.selector.label.count": "{count} Tool | {count} Tools",
	"chatHub.tools.selector.label.default": "Tools",
	"chatHub.tools.selector.disabled.tooltip": "Tools are not supported by the selected model",
	"chatHub.credentials.selector.title": "Select {provider} credential",
	"chatHub.credentials.selector.chooseOrCreate": "Choose or create a credential for {provider}",
	"chatHub.credentials.selector.createNew": "Create new",
	"chatHub.credentials.selector.createNew.permissionDenied": "Your current role does not allow you to create credentials",
	"chatHub.credentials.selector.confirm": "Select",
	"chatHub.credentials.selector.cancel": "Cancel",
	"chatHub.message.actions.readAloud": "Read aloud",
	"chatHub.message.actions.stopReading": "Stop reading",
	"chatHub.message.actions.edit": "Edit",
	"chatHub.message.actions.regenerate": "Regenerate",
	"chatHub.message.actions.executionId": "Execution ID",
	"chatHub.message.edit.cancel": "Cancel",
	"chatHub.message.edit.send": "Send",
	"chatHub.message.error.unknown": "Something went wrong. Please try again.",
	"chatHub.error.payloadTooLarge": "Message too large",
	"chatHub.error.badRequest": "Invalid request",
	"chatHub.error.forbidden": "Permission denied",
	"chatHub.error.serverError": "Server error",
	"chatHub.error.serverErrorWithReason": "Server error: {error}",
	"chatHub.error.unknown": "Unknown error",
	"chatHub.error.noConnection": "Connection failed",
	"chatHub.error.fetchConversationFailed": "Failed to load conversation",
	"chatHub.error.sendMessageFailed": "Failed to send message",
	"chatHub.error.updateModelFailed": "Failed to update model",
	"chatHub.error.updateToolsFailed": "Failed to update tools",
	"chatHub.models.selector.defaultLabel": "Select model",
	"chatHub.models.selector.personalProject": "Personal",
	"chatHub.models.selector.noMatch": "No agents match your search criteria.",
	"chatHub.models.selector.moreModels": "More {providerName} models...",
	"chatHub.models.byIdSelector.title": "Choose {provider} model by ID",
	"chatHub.models.byIdSelector.choose": "Enter model identifier (e.g. \"gpt-4\")",
	"chatHub.models.byIdSelector.confirm": "Select",
	"chatHub.models.byIdSelector.cancel": "Cancel",
	"chatHub.session.actions.rename": "Rename",
	"chatHub.session.actions.delete": "Delete",
	"chatHub.session.updateTitle.error": "Could not update the conversation title.",
	"chatHub.session.delete.confirm.message": "Are you sure you want to delete this conversation?",
	"chatHub.session.delete.confirm.title": "Delete conversation",
	"chatHub.session.delete.confirm.button": "Delete",
	"chatHub.session.delete.cancel.button": "Cancel",
	"chatHub.session.delete.success": "Conversation is deleted",
	"chatHub.session.delete.error": "Could not delete the conversation",
	"chatHub.sidebar.title": "Chat",
	"chatHub.sidebar.button.toggle": "Toggle sidebar",
	"chatHub.sidebar.link.newChat": "New chat",
	"chatHub.sidebar.link.workflowAgents": "Workflow agents",
	"chatHub.sidebar.link.personalAgents": "Personal agents",
	"chatHub.sidebar.loadMoreSessions": "Load more",
	"chatEmbed.infoTip.description": "Add chat to external applications using the n8n chat package.",
	"chatEmbed.infoTip.link": "More info",
	"chatEmbed.title": "Embed Chat in your website",
	"chatEmbed.close": "Close",
	"chatEmbed.install": "First, install the n8n chat package:",
	"chatEmbed.paste.cdn": "Paste the following code anywhere in the {code} tag of your HTML file.",
	"chatEmbed.paste.cdn.file": "<body>",
	"chatEmbed.paste.vue": "Next, paste the following code in your {code} file.",
	"chatEmbed.paste.vue.file": "App.vue",
	"chatEmbed.paste.react": "Next, paste the following code in your {code} file.",
	"chatEmbed.paste.react.file": "App.ts",
	"chatEmbed.paste.other": "Next, paste the following code in your {code} file.",
	"chatEmbed.paste.other.file": "main.ts",
	"chatEmbed.packageInfo.description": "The n8n Chat widget can be easily customized to fit your needs.",
	"chatEmbed.packageInfo.link": "Read the full documentation",
	"chatEmbed.chatTriggerNode": "You can use a Chat Trigger Node to embed the chat widget directly into n8n.",
	"chatEmbed.url": "https://www.npmjs.com/package/{'@'}n8n/chat",
	"codeEdit.edit": "Edit",
	"codeNodeEditor.askAi": "✨ Ask AI",
	"codeNodeEditor.completer.$()": "Output data of the {nodeName} node",
	"codeNodeEditor.completer.$execution": "Retrieve or set metadata for the current execution",
	"codeNodeEditor.completer.$execution.id": "The ID of the current workflow execution",
	"codeNodeEditor.completer.$execution.mode": "Returns either <code>test</code> (meaning the execution was triggered by clicking a button in n8n) or <code>production</code> (meaning the execution was triggered automatically)",
	"codeNodeEditor.completer.$execution.resumeUrl": "The webhook URL to call to resume a workflow waiting at a 'Wait' node.",
	"codeNodeEditor.completer.$execution.resumeFormUrl": "The URL to access a form generated by the 'Wait' node.",
	"codeNodeEditor.completer.$execution.customData": "Set and get custom execution data (e.g. to filter executions by). You can also do this with the 'Execution Data' node.",
	"codeNodeEditor.completer.$execution.customData.set": "Stores custom execution data under the key specified. Use this to easily filter executions by this data.",
	"codeNodeEditor.completer.$execution.customData.set.args.key": "The key (identifier) under which the data is stored",
	"codeNodeEditor.completer.$execution.customData.set.args.value": "The data to store",
	"codeNodeEditor.completer.$execution.customData.set.examples.1": "Store the user's email, to easily retrieve all execs related to that user later",
	"codeNodeEditor.completer.$execution.customData.get": "Returns the custom execution data stored under the given key.",
	"codeNodeEditor.completer.$execution.customData.get.args.key": "The key (identifier) under which the data is stored",
	"codeNodeEditor.completer.$execution.customData.get.examples.1": "Get the user's email (which was previously stored)",
	"codeNodeEditor.completer.$execution.customData.setAll": "Sets multiple key-value pairs of  custom data for the execution. Use this to easily filter executions by this data.",
	"codeNodeEditor.completer.$execution.customData.setAll.args.obj": "A JavaScript object containing key-value pairs of the data to set",
	"codeNodeEditor.completer.$execution.customData.getAll": "Returns all the key-value pairs of custom data that have been set in the current execution.",
	"codeNodeEditor.completer.$ifEmpty": "Returns the first parameter if it isn't empty, otherwise returns the second parameter. The following count as empty: <code>\"</code>, <code>[]</code>, <code>{'{}'}</code>, <code>null</code>, <code>undefined</code>",
	"codeNodeEditor.completer.$ifEmpty.args.value": "The value to return, provided it isn't empty",
	"codeNodeEditor.completer.$ifEmpty.args.valueIfEmpty": "What to return if <code>value</code> is empty",
	"codeNodeEditor.completer.$input": "The input data of the current node",
	"codeNodeEditor.completer.$input.all": "@:_reusableBaseText.codeNodeEditor.completer.all",
	"codeNodeEditor.completer.$input.first": "@:_reusableBaseText.codeNodeEditor.completer.first",
	"codeNodeEditor.completer.$input.item": "The item that generated the current one",
	"codeNodeEditor.completer.$input.itemMatching": "@:_reusableBaseText.codeNodeEditor.completer.itemMatching",
	"codeNodeEditor.completer.$input.last": "@:_reusableBaseText.codeNodeEditor.completer.last",
	"codeNodeEditor.completer.$itemIndex": "The position of the item currently being processed in the list of input items",
	"codeNodeEditor.completer.$jmespath": "Extracts data from an object (or array of objects) using a <a target=\"_blank\" href=\"https://docs.n8n.io/code/cookbook/jmespath/\">JMESPath</a> expression. Useful for querying complex, nested objects. Returns <code>undefined</code> if the expression is invalid.",
	"codeNodeEditor.completer.$jmespath.args.obj": "The Object or array of Objects to retrieve data from",
	"codeNodeEditor.completer.$jmespath.args.expression": "A <a target=\"_blank\" href=\"https://jmespath.org/examples.html\">JMESPath expression</a> defining the data to retrieve from the object",
	"codeNodeEditor.completer.$jmespath.examples.1": "Get all names, in an array",
	"codeNodeEditor.completer.$jmespath.examples.2": "Get the names and ages of everyone under 20",
	"codeNodeEditor.completer.$jmespath.examples.3": "Get the name of the first person under 20",
	"codeNodeEditor.completer.$jmespath.examples.4": "Get the names of all the guests in each reservation that require a double room",
	"codeNodeEditor.completer.$if": "Returns one of two values depending on the <code>condition</code>. Similar to the <code>?</code> operator in JavaScript.",
	"codeNodeEditor.completer.$if.args.condition": "The check to make. Should evaluate to either <code>true</code> or <code>false</code>",
	"codeNodeEditor.completer.$if.args.valueIfTrue": "The value to return if the condition is true",
	"codeNodeEditor.completer.$if.args.valueIfFalse": "The value to return if the condition is false",
	"codeNodeEditor.completer.$if.examples.1": "Return \"Good day\" if time is before 5pm, otherwise \"Good evening\"",
	"codeNodeEditor.completer.$if.examples.2": "$if() calls can be combined\nReturn \"Good morning\" if time is before 10am, \"Good day\" it's before 5pm, otherwise \"Good evening\"",
	"codeNodeEditor.completer.$max": "Returns the highest of the given numbers, or -Infinity if there are no parameters.",
	"codeNodeEditor.completer.$max.args.numbers": "The numbers to compare",
	"codeNodeEditor.completer.$min": "Returns the lowest of the given numbers, or Infinity if there are no parameters.",
	"codeNodeEditor.completer.$now": "A DateTime representing the current moment. \n\nUses the workflow's time zone (which can be changed in the workflow settings).",
	"codeNodeEditor.completer.$parameter": "The configuration settings of the current node. These are the parameters you fill out within the node's UI (e.g. its operation).",
	"codeNodeEditor.completer.$prevNode": "Information about the node that the current input came from. \n\nWhen in a 'Merge' node, always uses the first input connector.",
	"codeNodeEditor.completer.$prevNode.name": "The name of the node that the current input came from. \n\nAlways uses the current node's first input connector if there is more than one (e.g. in the 'Merge' node).",
	"codeNodeEditor.completer.$prevNode.outputIndex": "The index of the output connector that the current input came from. Use this when the previous node had multiple outputs (such as an 'If' or 'Switch' node). \n\nAlways uses the current node's first input connector if there is more than one (e.g. in the 'Merge' node).",
	"codeNodeEditor.completer.$prevNode.runIndex": "The run of the previous node that generated the current input. \n\nAlways uses the current node's first input connector if there is more than one (e.g. in the 'Merge' node). ",
	"codeNodeEditor.completer.$runIndex": "The index of the current run of the current node execution. Starts at 0.",
	"codeNodeEditor.completer.$nodeVersion": "The version of the current node (as displayed at the bottom of the nodes's settings pane)",
	"codeNodeEditor.completer.$tool": "The name and parameters of the tool that is currently being executed. Only available in HITL nodes",
	"codeNodeEditor.completer.$today": "A DateTime representing midnight at the start of the current day. \n\nUses the instance's time zone (unless overridden in the workflow's settings).",
	"codeNodeEditor.completer.$vars": "The <a target=\"_blank\"  href=\"https://docs.n8n.io/code/variables/\">variables</a> available to the workflow",
	"codeNodeEditor.completer.$vars.varName.global": "Global variable defined for this n8n instance. All variables evaluate to strings.",
	"codeNodeEditor.completer.$vars.varName.global.overridden": "Global variable overridden by project {projectName} variable. All variables evaluate to strings. ",
	"codeNodeEditor.completer.$vars.varName.project": "Project variable defined in the {projectName} project. All variables evaluate to strings.",
	"codeNodeEditor.completer.$secrets": "The secrets from an <a target=\"_blank\" href=\"https://docs.n8n.io/external-secrets/\">external secrets vault</a>, if configured. Secret values are never displayed to the user. Only available in credential fields.",
	"codeNodeEditor.completer.$secrets.provider": "External secrets providers connected to this n8n instance.",
	"codeNodeEditor.completer.$secrets.provider.varName": "External secrets connected to this n8n instance. All secrets evaluate to strings.",
	"codeNodeEditor.completer.$workflow": "Information about the current workflow",
	"codeNodeEditor.completer.$workflow.active": "Whether the workflow is active",
	"codeNodeEditor.completer.$workflow.id": "The workflow ID. Can also be found in the workflow's URL.",
	"codeNodeEditor.completer.$workflow.name": "The name of the workflow, as shown at the top of the editor",
	"codeNodeEditor.completer.$response": "The response returned by the last HTTP call. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$response.headers": "The headers returned by the last HTTP call. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$response.statusCode": "The HTTP status code returned by the last HTTP call. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$response.statusMessage": "An optional message regarding the request status. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$response.body": "The body of the response object from the last HTTP call. Only available in the 'HTTP Request' node",
	"codeNodeEditor.completer.$request": "The request object sent during the last run of the node. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$pageCount": "The number of results pages the node has fetched. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.dateTime": "Luxon DateTime. Use this object to parse, format and manipulate dates and times.",
	"codeNodeEditor.completer.binary": "Returns any binary input data to the current node, for the current item. Shorthand for <code>$input.item.binary</code>.",
	"codeNodeEditor.completer.binary.mimeType": "A string representing the format of the file's contents, e.g. <code>image/jpeg</code>",
	"codeNodeEditor.completer.binary.fileSize": "A string representing the size of the file (e.g. <code>1 kB</code>)",
	"codeNodeEditor.completer.binary.fileName": "The name of the file, including extension",
	"codeNodeEditor.completer.binary.fileExtension": "The suffix attached to the filename (e.g. <code>txt</code>)",
	"codeNodeEditor.completer.binary.fileType": "A string representing the type of the file, e.g. <code>image</code>. Corresponds to the first part of the MIME type.",
	"codeNodeEditor.completer.binary.id": "The unique ID of the file. Used to identify the file when it is stored on disk or in a storage service such as S3.",
	"codeNodeEditor.completer.binary.directory": "The path to the directory that the file is stored in. Useful for distinguishing between files with the same name in different directories. Not set if n8n is  configured to store files in its database.",
	"codeNodeEditor.completer.item.binary": "Returns any binary data the item contains.",
	"codeNodeEditor.completer.item.json": "Returns the JSON data the item contains.",
	"codeNodeEditor.completer.math": "Mathematical utility methods",
	"codeNodeEditor.completer.globalObject": "Methods to manipulate JavaScript Objects",
	"codeNodeEditor.completer.globalObject.assign": "Merge all enumerable object properties into a target object. Returns the modified target object.",
	"codeNodeEditor.completer.globalObject.entries": "The object's keys and values",
	"codeNodeEditor.completer.globalObject.keys": "The object's keys",
	"codeNodeEditor.completer.globalObject.values": "The object's values",
	"codeNodeEditor.completer.json": "Returns the JSON input data to the current node, for the current item. Shorthand for <code>$input.item.json</code>.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.expandFormat": "Produce the the fully expanded format token for the locale Does NOT quote characters, so quoted tokens will not round trip correctly.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromFormat": "Create a DateTime from an input string and format string.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromFormatExplain": "Explain how a string would be parsed by fromFormat().",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromHTTP": "Create a DateTime from an HTTP header date",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromISO": "Create a DateTime from an ISO 8601 string",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromISO.args.isoString": "ISO 8601 string to convert to a DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromISO.args.opts": "Configuration options. See  See <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimefromiso\">Luxon docs</a> for more info.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromJSDate": "Create a DateTime from a JavaScript Date object. Uses the default zone",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromMillis": "Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromMillis.args.milliseconds": "Number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC)",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromMillis.args.opts": "Configuration options. See  See <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimefrommillis\">Luxon docs</a> for more info.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromObject": "Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromRFC2822": "Create a DateTime from an RFC 2822 string",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromString": "Deprecated: use `fromFormat` instead.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromStringExplain": "Deprecated: use `fromFormatExplain` instead.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSQL": "Create a DateTime from a SQL date, time, or datetime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSeconds": "Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSeconds.args.seconds": "Number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC)",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSeconds.args.opts": "Configuration options. See <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimefromseconds\">Luxon docs</a> for more info.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.invalid": "Create an invalid DateTime.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.isDateTime": "Check if an object is a DateTime. Works across context boundaries",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.isDateTime.args.maybeDateTime": "Potential DateTime to check. Only instances of the Luxon DateTime class will return <code>true</code>.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.local": "Create a local DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.max": "Return the max of several date times.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.max.args.dateTimes": "DateTime objects to compare",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.min": "Return the min of several date times.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.min.args.dateTimes": "DateTime objects to compare",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.now": "Create a DateTime for the current instant, in the workflow's local time zone",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.parseFormatForOpts": "Produce the the fully expanded format token for the locale Does NOT quote characters, so quoted tokens will not round trip correctly.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.utc": "Create a DateTime in UTC",
	"codeNodeEditor.completer.luxon.instanceMethods.day": "The day of the month (1-31).",
	"codeNodeEditor.completer.luxon.instanceMethods.daysInMonth": "Returns the number of days in this DateTime's month.",
	"codeNodeEditor.completer.luxon.instanceMethods.daysInYear": "Returns the number of days in this DateTime's year.",
	"codeNodeEditor.completer.luxon.instanceMethods.diff": "Return the difference between two DateTimes as a Duration.",
	"codeNodeEditor.completer.luxon.instanceMethods.diffNow": "Return the difference between this DateTime and right now.",
	"codeNodeEditor.completer.luxon.instanceMethods.endOf": "Rounds the DateTime up to the end of one of its units, e.g. the end of the month",
	"codeNodeEditor.completer.luxon.instanceMethods.endOf.args.unit": "The unit to round to the end of. Can be <code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, or <code>millisecond</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.endOf.args.opts": "Object with options that affect the output. Possible properties:\n<code>useLocaleWeeks</code> (boolean): Whether to use the locale when calculating the start of the week. Defaults to false.",
	"codeNodeEditor.completer.luxon.instanceMethods.equals": "Returns <code>true</code> if the two DateTimes represent exactly the same moment and are in the same time zone. For a less strict comparison, use <code>hasSame()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.equals.args.other": "The other DateTime to compare",
	"codeNodeEditor.completer.luxon.instanceMethods.hasSame": "Returns <code>true</code> if the two DateTimes are the same, down to the unit specified. Time zones are ignored (only local times are compared), so use <code>toUTC()</code> first if needed.",
	"codeNodeEditor.completer.luxon.instanceMethods.hasSame.args.other": "The other DateTime to compare",
	"codeNodeEditor.completer.luxon.instanceMethods.hasSame.args.unit": "The unit of time to check sameness down to. One of <code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, or <code>millisecond</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.hour": "The hour of the day (0-23).",
	"codeNodeEditor.completer.luxon.instanceMethods.invalidExplanation": "Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid.",
	"codeNodeEditor.completer.luxon.instanceMethods.invalidReason": "Returns an error code if this DateTime is invalid, or null if the DateTime is valid.",
	"codeNodeEditor.completer.luxon.instanceMethods.isInDST": "Whether the DateTime is in daylight saving time.",
	"codeNodeEditor.completer.luxon.instanceMethods.isInLeapYear": "Whether the DateTime is in a leap year.",
	"codeNodeEditor.completer.luxon.instanceMethods.isOffsetFixed": "Get whether this zone's offset ever changes, as in a DST.",
	"codeNodeEditor.completer.luxon.instanceMethods.isValid": "Returns whether the DateTime is valid. Invalid DateTimes occur when The DateTime was created from invalid calendar information, such as the 13th month or February 30. The DateTime was created by an operation on another invalid date.",
	"codeNodeEditor.completer.luxon.instanceMethods.locale": "The locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.max": "Return the max of several date times.",
	"codeNodeEditor.completer.luxon.instanceMethods.millisecond": "The millisecond of the second (0-999).",
	"codeNodeEditor.completer.luxon.instanceMethods.min": "Return the min of several date times",
	"codeNodeEditor.completer.luxon.instanceMethods.minus": "Subtract hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds.",
	"codeNodeEditor.completer.luxon.instanceMethods.minute": "The minute of the hour (0-59).",
	"codeNodeEditor.completer.luxon.instanceMethods.month": "The month (1-12).",
	"codeNodeEditor.completer.luxon.instanceMethods.monthLong": "The textual long month name, e.g. 'October'. Defaults to the system's locale if unspecified.",
	"codeNodeEditor.completer.luxon.instanceMethods.monthShort": "The textual abbreviated month name, e.g. 'Oct'. Defaults to the system's locale if unspecified.",
	"codeNodeEditor.completer.luxon.instanceMethods.numberingSystem": "Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.offset": "Get the UTC offset of this DateTime in minutes",
	"codeNodeEditor.completer.luxon.instanceMethods.offsetNameLong": "Get the long human name for the zone's current offset, for example \"Eastern Standard Time\" or \"Eastern Daylight Time\".",
	"codeNodeEditor.completer.luxon.instanceMethods.offsetNameShort": "Get the short human name for the zone's current offset, for example \"EST\" or \"EDT\".'",
	"codeNodeEditor.completer.luxon.instanceMethods.offsetNumber": "Get the short human name for the zone's current offset, for example \"EST\" or \"EDT\".'",
	"codeNodeEditor.completer.luxon.instanceMethods.ordinal": "Get the ordinal (meaning the day of the year).",
	"codeNodeEditor.completer.luxon.instanceMethods.outputCalendar": "Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.plus": "Add hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds.",
	"codeNodeEditor.completer.luxon.instanceMethods.quarter": "The quarter of the year (1-4).",
	"codeNodeEditor.completer.luxon.instanceMethods.reconfigure": "'Set' the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.resolvedLocaleOptions": "Returns the resolved Intl options for this DateTime. This is useful in understanding the behavior of formatting methods.",
	"codeNodeEditor.completer.luxon.instanceMethods.second": "The second of the minute (0-59).",
	"codeNodeEditor.completer.luxon.instanceMethods.set": "Assigns new values to specified units of the DateTime. To round a DateTime, see also <code>startOf()</code> and <code>endOf()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.set.args.values": "An object containing the units to set and corresponding values to assign. Possible keys are <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code> and <code>millsecond</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.setLocale": "Sets the locale, which determines the language and formatting for the DateTime. Useful when generating a textual representation of the DateTime, e.g. with <code>format()</code> or <code>toLocaleString()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.setLocale.args.locale": "The locale to set, e.g. 'en-GB' for British English or 'pt-BR' for Brazilian Portuguese. <a target=\"blank\" href=”https://www.localeplanet.com/icu/”>List</a> (unofficial)",
	"codeNodeEditor.completer.luxon.instanceMethods.setZone": "Converts the DateTime to the given time zone. The DateTime still represents the same moment unless specified in the options. See also <code>toLocal()</code> and <code>toUTC()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.setZone.args.zone": "A zone identifier, either in the format <code>'America/New_York'</code>, <code>'UTC+3'</code>, or the strings <code>'local'</code> or <code>'utc'</code>. <code>'local'</code> is the workflow's local time zone, this can be changed in workflow settings.",
	"codeNodeEditor.completer.luxon.instanceMethods.setZone.args.opts": "Options that affect the output. Possible properties:\n<code>keepCalendarTime</code> (boolean): Whether to keep the time the same and only change the offset. Defaults to false.",
	"codeNodeEditor.completer.luxon.instanceMethods.startOf": "Rounds the DateTime down to the beginning of one of its units, e.g. the start of the month",
	"codeNodeEditor.completer.luxon.instanceMethods.startOf.args.unit": "The unit to round to the beginning of. One of <code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, or <code>millisecond</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.startOf.args.opts": "Object with options that affect the output. Possible properties:\n<code>useLocaleWeeks</code> (boolean): Whether to use the locale when calculating the start of the week. Defaults to false.",
	"codeNodeEditor.completer.luxon.instanceMethods.toBSON": "Returns a BSON serializable equivalent to this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.toFormat": "Returns a string representation of this DateTime formatted according to the specified format string.",
	"codeNodeEditor.completer.luxon.instanceMethods.toHTTP": "Returns a string representation of this DateTime appropriate for use in HTTP headers.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISO": "Returns an ISO 8601-compliant string representation of this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISO.args.opts": "Configuration options. See <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimetoiso\">Luxon docs</a> for more info.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISODate": "Returns an ISO 8601-compliant string representation of this DateTime's date component.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISOTime": "Returns an ISO 8601-compliant string representation of this DateTime's time component.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISOWeekDate": "Returns an ISO 8601-compliant string representation of this DateTime's week date.",
	"codeNodeEditor.completer.luxon.instanceMethods.toJSON": "Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.",
	"codeNodeEditor.completer.luxon.instanceMethods.toJsDate": "Returns a JavaScript Date equivalent to this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocal": "Converts a DateTime to the workflow's local time zone. The DateTime still represents the same moment unless specified in the parameters. The workflow's time zone can be set in the workflow settings.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocal.example": "if time zone is Europe/Berlin",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleParts": "Returns an array of format \"parts\", meaning individual tokens along with metadata.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleString": "Returns a localized string representing the DateTime, i.e. in the language and format corresponding to its locale. Defaults to the system's locale if none specified.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleString.args.opts": "Configuration options for the rendering. See <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters”>Intl.DateTimeFormat</a> for a full list. Defaults to rendering a short date.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleString.example": "Configuration options for the rendering. See <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters”>Intl.DateTimeFormat</a> for a full list. Defaults to rendering a short date.",
	"codeNodeEditor.completer.luxon.instanceMethods.toMillis": "Returns a Unix timestamp in milliseconds (the number elapsed since 1st Jan 1970)",
	"codeNodeEditor.completer.luxon.instanceMethods.toObject": "Returns a JavaScript object with this DateTime's year, month, day, and so on.",
	"codeNodeEditor.completer.luxon.instanceMethods.toRFC2822": "Returns an RFC 2822-compatible string representation of this DateTime, always in UTC.",
	"codeNodeEditor.completer.luxon.instanceMethods.toRelative": "Returns a textual representation of the time relative to now, e.g. 'in two days'. Rounds down by default.",
	"codeNodeEditor.completer.luxon.instanceMethods.toRelative.args.opts": "Options that affect the output. Possible properties:\n<code>unit</code> = the unit to default to (<code>years</code>, <code>months</code>, <code>days</code>, etc.).\n<code>locale</code> = the language and formatting to use (e.g. <code>de</code>, <code>fr</code>)",
	"codeNodeEditor.completer.luxon.instanceMethods.toRelativeCalendar": "Returns a string representation of this date relative to today, such as '\"'yesterday' or 'next month'.",
	"codeNodeEditor.completer.luxon.instanceMethods.toSQL": "Returns a string representation of this DateTime appropriate for use in SQL DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.toSQLDate": "Returns a string representation of this DateTime appropriate for use in SQL Date.",
	"codeNodeEditor.completer.luxon.instanceMethods.toSQLTime": "Returns a string representation of this DateTime appropriate for use in SQL Time.",
	"codeNodeEditor.completer.luxon.instanceMethods.toSeconds": "Returns a Unix timestamp in seconds (the number elapsed since 1st Jan 1970)",
	"codeNodeEditor.completer.luxon.instanceMethods.toString": "Returns a string representation of the DateTime. Similar to <code>toISO()</code>. For more formatting options, see <code>format()</code> or <code>toLocaleString()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.toUTC": "Converts a DateTime to the UTC time zone. The DateTime still represents the same moment unless specified in the parameters. Use <code>setZone()</code> to convert to other zones.",
	"codeNodeEditor.completer.luxon.instanceMethods.toUTC.args.offset": "An offset from UTC in minutes",
	"codeNodeEditor.completer.luxon.instanceMethods.toUTC.args.opts": "Options that affect the output. Possible properties:\n<code>keepCalendarTime</code> (boolean): Whether to keep the time the same and only change the offset. Defaults to false.",
	"codeNodeEditor.completer.luxon.instanceMethods.toUnixInteger": "Returns the epoch seconds (as a whole number) of this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.until": "Return an Interval spanning between this DateTime and another DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.valueOf": "Returns the epoch milliseconds of this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.weekNumber": "The week number of the year (1-52ish).",
	"codeNodeEditor.completer.luxon.instanceMethods.weekYear": "Get the week year.",
	"codeNodeEditor.completer.luxon.instanceMethods.weekday": "The day of the week. 1 is Monday and 7 is Sunday.",
	"codeNodeEditor.completer.luxon.instanceMethods.weekdayLong": "The textual long weekday name, e.g. 'Wednesday'. Defaults to the system's locale if unspecified.",
	"codeNodeEditor.completer.luxon.instanceMethods.weekdayShort": "The textual abbreviated weekday name, e.g. 'Wed'. Defaults to the system's locale if unspecified.",
	"codeNodeEditor.completer.luxon.instanceMethods.weeksInWeekYear": "Returns the number of weeks in this DateTime's year.",
	"codeNodeEditor.completer.luxon.instanceMethods.year": "The year.",
	"codeNodeEditor.completer.luxon.instanceMethods.zone": "The time zone associated with the DateTime",
	"codeNodeEditor.completer.luxon.instanceMethods.zoneName": "Get the name of the time zone.",
	"codeNodeEditor.completer.selector.all": "@:_reusableBaseText.codeNodeEditor.completer.all",
	"codeNodeEditor.completer.selector.context": "Extra data about the node",
	"codeNodeEditor.completer.selector.first": "@:_reusableBaseText.codeNodeEditor.completer.first",
	"codeNodeEditor.completer.selector.item": "Returns the matching item, i.e. the one used to produce the current item in the current node.",
	"codeNodeEditor.completer.selector.args.branchIndex": "The output branch of the node to use. Defaults to the first branch (index 0)",
	"codeNodeEditor.completer.selector.args.runIndex": "The run of the node to use. Defaults to the first run (index 0)",
	"codeNodeEditor.completer.selector.itemMatching": "@:_reusableBaseText.codeNodeEditor.completer.itemMatching",
	"codeNodeEditor.completer.selector.itemMatching.args.currentItemIndex": "The index of the item in the current node to be matched with.",
	"codeNodeEditor.completer.selector.last": "@:_reusableBaseText.codeNodeEditor.completer.last",
	"codeNodeEditor.completer.selector.params": "The configuration settings of the given node. These are the parameters you fill out within the node's UI (e.g. its operation).",
	"codeNodeEditor.completer.selector.isExecuted": "Is <code>true</code> if the node has executed, <code>false</code> otherwise",
	"codeNodeEditor.completer.section.input": "Input",
	"codeNodeEditor.completer.section.prevNodes": "Earlier nodes",
	"codeNodeEditor.completer.section.metadata": "Metadata",
	"codeNodeEditor.completer.section.fields": "Fields",
	"codeNodeEditor.completer.section.properties": "Properties",
	"codeNodeEditor.completer.section.methods": "Methods",
	"codeNodeEditor.completer.section.otherMethods": "Other methods",
	"codeNodeEditor.completer.section.recommended": "Suggested",
	"codeNodeEditor.completer.section.recommendedMethods": "Suggested methods",
	"codeNodeEditor.completer.section.other": "Other",
	"codeNodeEditor.completer.section.edit": "Edit",
	"codeNodeEditor.completer.section.query": "Query",
	"codeNodeEditor.completer.section.format": "Format",
	"codeNodeEditor.completer.section.component": "Component",
	"codeNodeEditor.completer.section.case": "Case",
	"codeNodeEditor.completer.section.cast": "Cast",
	"codeNodeEditor.completer.section.compare": "Compare",
	"codeNodeEditor.completer.section.validation": "Validate",
	"codeNodeEditor.completer.section.variable.project": "Project Variables",
	"codeNodeEditor.completer.section.variable.global": "Global Variables",
	"codeNodeEditor.linter.allItems.firstOrLastCalledWithArg": "expects no argument.",
	"codeNodeEditor.linter.allItems.emptyReturn": "Code doesn't return items properly. Please return an array of objects, one for each item you would like to output.",
	"codeNodeEditor.linter.allItems.itemCall": "`item` is a property to access, not a method to call. Did you mean `.item` without brackets?",
	"codeNodeEditor.linter.allItems.itemMatchingNoArg": "`.itemMatching()` expects an item index to be passed in as its argument.",
	"codeNodeEditor.linter.allItems.unavailableItem": "Legacy `item` is only available in the 'Run Once for Each Item' mode.",
	"codeNodeEditor.linter.allItems.unavailableProperty": "`.item` only works correctly in 'Run Once for Each Item' mode. It will always return the first item here. Use `.first()` instead.",
	"codeNodeEditor.linter.allItems.unavailableVar": "is only available in the 'Run Once for Each Item' mode.",
	"codeNodeEditor.linter.bothModes.directAccess.firstOrLastCall": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.bothModes.directAccess.itemProperty": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.bothModes.varDeclaration.itemProperty": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.bothModes.varDeclaration.itemSubproperty": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.eachItem.emptyReturn": "Code doesn't return an object. Please return an object representing the output item",
	"codeNodeEditor.linter.eachItem.legacyItemAccess": "`item` is a legacy var. Consider using `$input.item`",
	"codeNodeEditor.linter.eachItem.returnArray": "Code doesn't return an object. Array found instead. Please return an object representing the output item",
	"codeNodeEditor.linter.eachItem.unavailableItems": "Legacy `items` is only available in the 'Run Once for All Items' mode.",
	"codeNodeEditor.linter.eachItem.unavailableMethod": "Method `$input.{method}()` is only available in the 'Run Once for All Items' mode.",
	"codeNodeEditor.linter.eachItem.preferFirst": "Prefer `.first()` over `.item` so n8n can optimize execution",
	"codeNodeEditor.linter.bothModes.syntaxError": "Syntax error",
	"codeNodeEditor.linter.bothModes.dollarSignVariable": "Use a string literal instead of a variable so n8n can optimize execution.",
	"codeNodeEditor.askAi.placeholder": "Tell AI what you want the code to achieve. You can reference input data fields using dot notation (e.g. user.email)",
	"codeNodeEditor.askAi.intro": "Hey AI, generate JavaScript code that...",
	"codeNodeEditor.askAi.help": "Help",
	"codeNodeEditor.askAi.generateCode": "Generate Code",
	"codeNodeEditor.askAi.noInputData": "You can generate code once this node has incoming input data (from a node earlier in your workflow)",
	"codeNodeEditor.askAi.sureLeaveTab": "Are you sure you want to switch tab? The code generation will stop",
	"codeNodeEditor.askAi.areYouSure": "Are you sure?",
	"codeNodeEditor.askAi.switchTab": "Switch Tab",
	"codeNodeEditor.askAi.noPrompt": "First enter a prompt above before generating code",
	"codeNodeEditor.askAi.onlyAllItemsMode": "Ask AI generation works only in 'Run Once for All Items' mode",
	"codeNodeEditor.askAi.promptTooShort": "Enter a minimum of {minLength} characters before attempting to generate code",
	"codeNodeEditor.askAi.generateCodeAndReplace": "Generate and Replace Code",
	"codeNodeEditor.askAi.replaceCurrentCode": "Replace current code?",
	"codeNodeEditor.askAi.areYouSureToReplace": "Are you sure you want to generate new code? Your current code will be replaced.",
	"codeNodeEditor.askAi.loadingPhrase0": "AI cogs whirring, almost there…",
	"codeNodeEditor.askAi.loadingPhrase1": "up up down down left right b a start…",
	"codeNodeEditor.askAi.loadingPhrase2": "Consulting Jan Oberhauser…",
	"codeNodeEditor.askAi.loadingPhrase3": "Gathering bytes and pieces…",
	"codeNodeEditor.askAi.loadingPhrase4": "Checking if another AI knows the answer…",
	"codeNodeEditor.askAi.loadingPhrase5": "Checking on Stack Overflow…",
	"codeNodeEditor.askAi.loadingPhrase6": "Crunching data, AI-style…",
	"codeNodeEditor.askAi.loadingPhrase7": "Stand by, AI magic at work…",
	"codeNodeEditor.askAi.generationCompleted": "✨ Code generation completed",
	"codeNodeEditor.askAi.generationFailed": "Code generation failed",
	"codeNodeEditor.askAi.generationFailedUnknown": "Code generation failed due to an unknown reason. Try again in a few minutes",
	"codeNodeEditor.askAi.generationFailedWithReason": "Code generation failed with error: {error}. Try again in a few minutes",
	"codeNodeEditor.askAi.generationFailedDown": "We're sorry, our AI service is currently unavailable. Please try again later. If the problem persists, contact support.",
	"codeNodeEditor.askAi.generationFailedRate": "We've hit our rate limit with our AI partner (too many requests). Please wait a minute before trying again.",
	"codeNodeEditor.askAi.generationFailedTooLarge": "Your workflow data is too large for AI to process. Simplify the data being sent into the Code node and retry.",
	"codeNodeEditor.tabs.askAi": "✨ Ask AI",
	"codeNodeEditor.tabs.code": "Code",
	"codeNodeEditor.examples": "Examples",
	"codeNodeEditor.parameters": "Parameters",
	"codeNodeEditor.optional": "optional",
	"codeNodeEditor.defaultsTo": "Defaults to {default}.",
	"collectionParameter.choose": "Choose...",
	"collectionParameter.addItem": "Add item",
	"collectionParameter.deleteItem": "Delete",
	"collectionParameter.dragItem": "Drag to reorder",
	"collectionParameter.noProperties": "No properties",
	"collectionParameter.allOptionsAdded": "All options have been added",
	"communityNodeFooter.legacy": "Legacy",
	"communityNodeFooter.manage": "Manage",
	"communityNodeFooter.reportIssue": "Report issue",
	"credentialEdit.credentialConfig.accountConnected": "Account connected",
	"credentialEdit.credentialConfig.clickToCopy": "Click To Copy",
	"credentialEdit.credentialConfig.connectionTestedSuccessfully": "Connection tested successfully",
	"credentialEdit.credentialConfig.couldntConnectWithTheseSettings": "Couldn’t connect with these settings",
	"credentialEdit.credentialConfig.couldntConnectWithTheseSettings.sharee": "Problem with connection settings. {owner} may be able to fix this",
	"credentialEdit.credentialConfig.needHelpFillingOutTheseFields": "Need help filling out these fields?",
	"credentialEdit.credentialConfig.oAuthRedirectUrl": "OAuth Redirect URL",
	"credentialEdit.credentialConfig.openDocs": "Open docs",
	"credentialEdit.credentialConfig.pleaseCheckTheErrorsBelow": "Please check the errors below",
	"credentialEdit.credentialConfig.pleaseCheckTheErrorsBelow.sharee": "Problem with connection settings. {owner} may be able to fix this",
	"credentialEdit.credentialConfig.reconnect": "Reconnect",
	"credentialEdit.credentialConfig.reconnectOAuth2Credential": "Reconnect OAuth2 Credential",
	"credentialEdit.credentialConfig.redirectUrlCopiedToClipboard": "Redirect URL copied to clipboard",
	"credentialEdit.credentialConfig.retry": "Retry",
	"credentialEdit.credentialConfig.retryCredentialTest": "Retry credential test",
	"credentialEdit.credentialConfig.retrying": "Retrying",
	"credentialEdit.credentialConfig.subtitle": "In {appName}, use the URL above when prompted to enter an OAuth callback or redirect URL",
	"credentialEdit.credentialConfig.theServiceYouReConnectingTo": "the service you're connecting to",
	"credentialEdit.credentialConfig.missingCredentialType": "This credential's type isn't available. This usually happens when a previously installed community or custom node was uninstalled.",
	"credentialEdit.credentialConfig.authTypeSelectorLabel": "Connect using",
	"credentialEdit.credentialConfig.authTypeSelectorTooltip": "The authentication method to use for the connection",
	"credentialEdit.credentialConfig.recommendedAuthTypeSuffix": "(recommended)",
	"credentialEdit.credentialConfig.externalSecrets": "Enterprise plan users can pull in credentials from external vaults.",
	"credentialEdit.credentialConfig.externalSecrets.moreInfo": "More info",
	"credentialEdit.credentialConfig.dynamicCredentials.title": "Set up for dynamic credentials",
	"credentialEdit.credentialConfig.dynamicCredentials.infoTip": "When enabled, each execution uses the triggering user's credentials instead of a single fixed credential. Requires a webhook trigger with user identity extraction enabled. The credentials you connect are only used for manual testing or when the workflow uses a non-webhook trigger.",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.cancelButtonText": "Close",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.confirmButtonText": "Keep Editing",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.headline": "Close without saving?",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.message": "Are you sure you want to throw away the changes you made to the {credentialDisplayName} credential?",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.cancelButtonText": "Close",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.confirmButtonText": "Keep Editing",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.headline": "Close without connecting?",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.message": "You need to connect your credential for it to work",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.cancelButtonText": "",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText": "Yes, delete",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline": "Delete Credential?",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.message": "Are you sure you want to delete \"{savedCredentialName}\"? This may break any workflows that use it.",
	"credentialEdit.credentialEdit.connection": "Connection",
	"credentialEdit.credentialEdit.sharing": "Sharing",
	"credentialEdit.credentialEdit.couldNotFindCredentialOfType": "Could not find credential of type",
	"credentialEdit.credentialEdit.couldNotFindCredentialWithId": "Could not find credential with ID",
	"credentialEdit.credentialEdit.delete": "Delete",
	"credentialEdit.credentialEdit.details": "Details",
	"credentialEdit.credentialEdit.dynamic": "Dynamic",
	"credentialEdit.credentialEdit.saving": "Saving",
	"credentialEdit.credentialEdit.showError.createCredential.title": "Problem creating credential",
	"credentialEdit.credentialEdit.showError.deleteCredential.title": "Problem deleting credential",
	"credentialEdit.credentialEdit.showError.generateAuthorizationUrl.message": "There was a problem generating the authorization URL",
	"credentialEdit.credentialEdit.showError.generateAuthorizationUrl.title": "OAuth Authorization Error",
	"credentialEdit.credentialEdit.showError.loadCredential.title": "Problem loading credential",
	"credentialEdit.credentialEdit.showError.updateCredential.title": "Problem updating credential",
	"credentialEdit.credentialEdit.showMessage.title": "Credential deleted",
	"credentialEdit.credentialEdit.testing": "Testing",
	"credentialEdit.credentialEdit.info.sharee": "Only {credentialOwnerName} can edit this connection",
	"credentialEdit.credentialInfo.allowUseBy": "Allow use by",
	"credentialEdit.credentialInfo.created": "Created",
	"credentialEdit.credentialInfo.id": "ID",
	"credentialEdit.credentialInfo.lastModified": "Last modified",
	"credentialEdit.credentialEdit.setupGuide": "Setup guide",
	"credentialEdit.credentialEdit.docs": "Docs",
	"credentialEdit.oAuthButton.connectMyAccount": "Connect my account",
	"credentialEdit.oAuthButton.signInWithGoogle": "Sign in with Google",
	"credentialEdit.credentialSharing.info.owner": "Sharing a credential allows people to use it in their workflows. They cannot access credential details.",
	"credentialEdit.credentialSharing.info.sharee.team": "Only users with credential sharing permission can change who this credential is shared with",
	"credentialEdit.credentialSharing.info.sharee.personal": "Only {credentialOwnerName} or users with credential sharing permission can change who this credential is shared with",
	"credentialEdit.credentialSharing.info.sharee.fallback": "the owner",
	"credentialEdit.credentialSharing.list.delete": "Remove",
	"credentialEdit.credentialSharing.list.delete.confirm.title": "Remove access?",
	"credentialEdit.credentialSharing.list.delete.confirm.message": "This may break any workflows in which {name} has used this credential",
	"credentialEdit.credentialSharing.list.delete.confirm.confirmButtonText": "Remove",
	"credentialEdit.credentialSharing.list.delete.confirm.cancelButtonText": "Cancel",
	"credentialEdit.credentialSharing.role.user": "User",
	"credentialSelectModal.addNewCredential": "Add new credential",
	"credentialSelectModal.continue": "Continue",
	"credentialSelectModal.searchForApp": "Search for app...",
	"credentialSelectModal.selectAnAppOrServiceToConnectTo": "Select an app or service to connect to",
	"credentialsList.addNew": "Add New",
	"credentialsList.confirmMessage.cancelButtonText": "",
	"credentialsList.confirmMessage.confirmButtonText": "Yes, delete",
	"credentialsList.confirmMessage.headline": "Delete Credential?",
	"credentialsList.confirmMessage.message": "Are you sure you want to delete {credentialName}?",
	"credentialsList.created": "Created",
	"credentialsList.credentials": "Credentials",
	"credentialsList.deleteCredential": "Delete Credential",
	"credentialsList.editCredential": "Edit Credential",
	"credentialsList.errorLoadingCredentials": "Error loading credentials",
	"credentialsList.name": "@:_reusableBaseText.name",
	"credentialsList.operations": "Operations",
	"credentialsList.showError.deleteCredential.title": "Problem deleting credential",
	"credentialsList.showMessage.title": "Credential deleted",
	"credentialsList.type": "Type",
	"credentialsList.updated": "Updated",
	"credentialsList.yourSavedCredentials": "Your saved credentials",
	"credentials.heading": "Credentials",
	"credentials.add": "Add credential",
	"credentials.project.add": "Add credential to project",
	"credentials.empty.heading": "{name}, let's set up a credential",
	"credentials.empty.heading.userNotSetup": "Set up a credential",
	"credentials.empty.description": "Credentials let workflows interact with your apps and services",
	"credentials.empty.button": "Add first credential",
	"credentials.empty.button.disabled.tooltip": "Your current role in the project does not allow you to create credentials",
	"credentials.item.open": "Open",
	"credentials.item.delete": "Delete",
	"credentials.item.move": "Change owner",
	"credentials.item.updated": "Last updated",
	"credentials.item.created": "Created",
	"credentials.item.owner": "Owner",
	"credentials.item.readonly": "Read only",
	"credentials.item.needsSetup": "Needs first setup",
	"credentials.dynamic.tooltip": "This credential uses a resolver to pick the right account at runtime based on who runs the workflow.",
	"credentials.dynamic.tooltipTitle": "Dynamic credentials",
	"credentials.dynamic.badge": "Dynamic",
	"credentials.dynamic.warning.noResolver": "Dynamic credentials are enabled, but no resolver is selected. Select one in {workflowSettings} to resolve user accounts at run time.",
	"credentials.dynamic.warning.noResolver.workflowSettings": "Workflow settings",
	"credentials.dynamic.warning.noResolver.documentation": "documentation",
	"credentials.search.placeholder": "Search credentials...",
	"credentials.filters.type": "Type",
	"credentials.filters.setup": "Needs first setup",
	"credentials.filters.status": "Status",
	"credentials.filters.active": "Some credentials may be hidden since filters are applied.",
	"credentials.filters.active.reset": "Remove filters",
	"credentials.sort.lastUpdated": "Sort by last updated",
	"credentials.sort.lastCreated": "Sort by last created",
	"credentials.sort.nameAsc": "Sort by name (A-Z)",
	"credentials.sort.nameDesc": "Sort by name (Z-A)",
	"credentials.noResults": "No credentials found",
	"credentials.noResults.withSearch.switchToShared.preamble": "some credentials may be",
	"credentials.noResults.withSearch.switchToShared.link": "hidden",
	"credentials.create.personal.toast.title": "Credential successfully created inside your personal space",
	"credentials.create.project.toast.title": "Credential successfully created in {projectName}",
	"credentials.create.project.toast.text": "All members from {projectName} will have access to this credential.",
	"dataDisplay.needHelp": "Need help?",
	"dataDisplay.nodeDocumentation": "Node Documentation",
	"dataDisplay.openDocumentationFor": "Open {nodeTypeDisplayName} documentation",
	"dataMapping.dragColumnToFieldHint": "Drag onto a field to map column to that field",
	"dataMapping.dragFromPreviousHint": "Map data from previous nodes to <b>{name}</b> by first clicking this button",
	"dataMapping.success.title": "You just mapped some data!",
	"dataMapping.success.moreInfo": "Check out our <a href=\"https://docs.n8n.io/data/data-mapping\" target=\"_blank\">docs</a> for more details on mapping data in n8n",
	"dataMapping.tableView.tableColumnsExceeded": "Some columns are hidden",
	"dataMapping.tableView.tableColumnsExceeded.tooltip": "Your data has more than {columnLimit} columns so some are hidden. Switch to {link} to see all data.",
	"dataMapping.tableView.tableColumnsExceeded.tooltip.link": "JSON view",
	"dataMapping.tableView.columnCollapsing": "Collapse rows",
	"dataMapping.tableView.columnCollapsing.tooltip": "Collapse rows (to compare values in this column)",
	"dataMapping.schemaView.emptyData": "No fields - node executed, but no items were sent on this branch",
	"dataMapping.schemaView.emptySchema": "No fields - item(s) exist, but they're empty",
	"dataMapping.schemaView.emptySchemaWithBinary": "Only binary data exists. View it using the 'Binary' tab",
	"dataMapping.schemaView.executeSchema": "{link} to view input data",
	"dataMapping.schemaView.disabled": "This node is disabled and will just pass data through",
	"dataMapping.schemaView.noMatches": "No results for '{search}'",
	"dataMapping.schemaView.preview": "Usually outputs the following fields. {execute} to see the actual ones. {link}",
	"dataMapping.schemaView.previewLastExecution": "The fields below come from the last successful execution. {execute} to refresh them.",
	"dataMapping.schemaView.previewLastExecution.executePreviousNodes": "Execute node",
	"dataMapping.schemaView.preview.executeNode": "Execute the node",
	"dataMapping.schemaView.previewExtraFields": "There may be more fields. Execute the node to be sure.",
	"dataMapping.schemaView.previewNode": "Preview",
	"dataMapping.schemaView.variablesContextTitle": "Variables and context",
	"dataMapping.schemaView.execution.resumeUrl": "The URL for resuming a 'Wait' node",
	"dataMapping.schemaView.variablesUpgrade": "Set global variables and use them across workflows with the Pro or Enterprise plan. <a href=\"https://docs.n8n.io/code/variables/\" target=\"_blank\">Details</a>",
	"dataMapping.schemaView.variablesEmpty": "Create variables that can be used across workflows <a href=\"/variables\" target=\"_blank\">here</a>",
	"dataMapping.schemaView.mergeNotice": "This schema shows fields from multiple items. Some fields may be absent in individual items.",
	"displayWithChange.cancelEdit": "Cancel Edit",
	"displayWithChange.clickToChange": "Click to Change",
	"displayWithChange.setValue": "Set Value",
	"duplicateWorkflowDialog.cancel": "@:_reusableBaseText.cancel",
	"duplicateWorkflowDialog.chooseOrCreateATag": "Choose or create a tag",
	"duplicateWorkflowDialog.duplicateWorkflow": "Duplicate Workflow",
	"duplicateWorkflowDialog.enterWorkflowName": "Enter workflow name",
	"duplicateWorkflowDialog.save": "Duplicate",
	"duplicateWorkflowDialog.errors.missingName.title": "Name missing",
	"duplicateWorkflowDialog.errors.missingName.message": "Please enter a name.",
	"duplicateWorkflowDialog.errors.forbidden.title": "Duplicate workflow failed",
	"duplicateWorkflowDialog.errors.forbidden.message": "This action is forbidden. Do you have the correct permissions?",
	"duplicateWorkflowDialog.errors.generic.title": "Duplicate workflow failed",
	"editor.mainHeader.githubButton.label": "Star n8n-io/n8n on GitHub",
	"experiments.personalizedTemplatesV3.browseAllTemplates": "Browse our template library",
	"experiments.personalizedTemplatesV3.couldntFind": "Need something different?",
	"experiments.personalizedTemplatesV3.exploreTemplates": "Get started with HubSpot workflows:",
	"experiments.personalizedTemplatesV3.loadingTemplates": "Loading recommendations...",
	"experiments.personalizedTemplatesV3.recommendationTooltip": "Recommended workflows for you",
	"experiments.personalizedTemplatesV3.recommendedForYou": "Recommended for you",
	"experiments.resourceCenter.badge.noCredentials": "No Credentials Needed",
	"experiments.resourceCenter.badge.noSetup": "No Setup Needed",
	"experiments.resourceCenter.courses.title": "Official Courses",
	"experiments.resourceCenter.getInspired.title": "Get Inspired",
	"experiments.resourceCenter.gettingStarted.title": "Getting Started",
	"experiments.resourceCenter.learnAnything.title": "Learn Anything",
	"experiments.resourceCenter.quickStart.title": "Quick Start",
	"experiments.resourceCenter.seeMore": "See more",
	"experiments.resourceCenter.sidebar": "Resources",
	"experiments.resourceCenter.sidebar.inspiration": "Inspiration",
	"experiments.resourceCenter.templateCard.useNow": "▶︎ Run workflow",
	"experiments.resourceCenter.templatePreviews.title": "Popular Templates",
	"experiments.resourceCenter.title": "Resources",
	"experiments.resourceCenter.viewAllTemplates": "View all templates",
	"experiments.resourceCenter.youtubeInspiration.title": "Inspiration Videos",
	"experiments.resourceCenter.youtubeLearn.title": "Learning Videos",
	"experiments.resourceCenter.getStarted.title": "Get started",
	"experiments.resourceCenter.learnN8n.title": "Learn to use n8n",
	"experiments.resourceCenter.featuredVideos.title": "Featured video tutorials",
	"experiments.resourceCenter.quickTips.title": "Quick tips",
	"experiments.resourceCenter.masterclass.title": "Masterclasses",
	"experiments.resourceCenter.learnTemplates.title": "Starter templates",
	"experiments.resourceCenter.popularTemplates.title": "Popular templates",
	"experiments.resourceCenter.automationIdeas.title": "Automation ideas",
	"experiments.resourceCenter.sandbox.easySetup": "No setup needed",
	"experiments.resourceCenter.sandbox.easySetupWorkflow": "Easy set up workflow",
	"experiments.resourceCenter.sandbox.tryItNow": "Try it now",
	"experiments.resourceCenter.sandbox.nodes": "{count} nodes",
	"experiments.resourceCenter.course.hours": "{count} hours",
	"experiments.resourceCenter.course.lessons": "{count} lessons",
	"experiments.resourceCenter.video.level": "Level: {level}",
	"experiments.resourceCenter.template.setupTime": "{minutes} minute set up",
	"experiments.resourceCenter.tooltip.text": "Get inspired and learn with use cases",
	"experiments.templatesDataQuality.modalTitle": "Featured templates",
	error: error$1,
	"error.goBack": "Go back",
	"error.pageNotFound": "Oops, couldn’t find that",
	"error.entityNotFound.title": "{entity} not found",
	"error.entityNotFound.text": "We couldn’t find the {entity} you were looking for. Make sure you have the correct URL.",
	"error.entityNotFound.action": "Go to overview",
	"error.entityUnAuthorized.title": "You need access",
	"error.entityUnAuthorized.content": "You don't have permission to view this {entity}. Please contact the person who shared this link to request access.",
	"executions.ExecutionStatus": "Execution status",
	"executions.concurrency.docsLink": "https://docs.n8n.io/hosting/scaling/concurrency-control/",
	"executionDetails.additionalActions": "Additional Actions",
	"executionDetails.confirmMessage.confirmButtonText": "Yes, delete",
	"executionDetails.confirmMessage.headline": "Delete Execution?",
	"executionDetails.confirmMessage.message": "Are you sure that you want to delete the current execution?",
	"executionDetails.confirmMessage.annotationsNote": "By deleting this you will also remove the associated annotation data.",
	"executionDetails.deleteExecution": "Delete this execution",
	"executionDetails.executionFailed": "Execution failed",
	"executionDetails.executionFailed.recoveredNodeTitle": "Can’t show data",
	"executionDetails.executionFailed.recoveredNodeMessage": "The execution was interrupted, so the data was not saved. Try fixing the workflow and re-executing.",
	"executionDetails.executionId": "Execution ID",
	"executionDetails.executionWaiting": "Execution waiting",
	"executionDetails.executionWasSuccessful": "Execution was successful",
	"executionDetails.of": "of",
	"executionDetails.at": "at",
	"executionDetails.newMessage": "Execution waiting in the queue.",
	"executionDetails.openWorkflow": "Open Workflow",
	"executionDetails.readOnly.readOnly": "Read only",
	"executionDetails.readOnly.youreViewingTheLogOf": "You're viewing the log of a previous execution. You cannot<br />\n		make changes since this execution already occurred. Make changes<br />\n		to this workflow by clicking on its name on the left.",
	"executionDetails.retry": "Retry of execution",
	"executionDetails.runningTimeFinished": "in {time}",
	"executionDetails.runningTimeRunning": "for",
	"executionDetails.runningMessage": "Execution is running. It will show here once finished.",
	"executionDetails.startingSoon": "Starting soon",
	"executionDetails.workflow": "workflow",
	"executionsLandingPage.emptyState.noTrigger.heading": "Set up the first step. Then execute your workflow",
	"executionsLandingPage.emptyState.noTrigger.buttonText": "Add first step...",
	"executionsLandingPage.clickExecutionMessage": "Click on an execution from the list to view it",
	"executionsLandingPage.emptyState.heading": "Nothing here yet",
	"executionsLandingPage.emptyState.message": "New workflow executions will show here",
	"executionsLandingPage.emptyState.accordion.title": "Which executions is this workflow saving?",
	"executionsLandingPage.emptyState.accordion.titleWarning": "Some executions won’t be saved",
	"executionsLandingPage.emptyState.accordion.productionExecutions": "Production executions",
	"executionsLandingPage.emptyState.accordion.testExecutions": "Test executions",
	"executionsLandingPage.emptyState.accordion.productionExecutionsWarningTooltip": "Not all production executions are being saved. Change this in the workflow's <a href=\"#\">settings</a>",
	"executionsLandingPage.emptyState.accordion.footer": "You can change this in",
	"executionsLandingPage.emptyState.accordion.footer.settingsLink": "Workflow settings",
	"executionsLandingPage.emptyState.accordion.footer.tooltipLink": "Save your workflow",
	"executionsLandingPage.emptyState.accordion.footer.tooltipText": "in order to access workflow settings",
	"executionsLandingPage.noResults": "No executions found",
	"executionsList.activeExecutions.none": "No active executions",
	"executionsList.activeExecutions.header": "{running}/{cap} active",
	"executionsList.activeExecutions.tooltip": "Current active executions: {running} out of {cap}. This instance is limited to {cap} concurrent production executions.",
	"executionsList.activeExecutions.evaluationNote": "Evaluation runs appear in the list of executions but do not count towards your execution concurrency.",
	"executionsList.allWorkflows": "All Workflows",
	"executionsList.anyStatus": "Any Status",
	"executionsList.autoRefresh": "Auto refresh",
	"executionsList.canceled": "Canceled",
	"executionsList.confirmMessage.cancelButtonText": "",
	"executionsList.confirmMessage.confirmButtonText": "Yes, delete",
	"executionsList.confirmMessage.headline": "Delete Executions?",
	"executionsList.confirmMessage.message": "Are you sure that you want to delete the {count} selected execution(s)?",
	"executionsList.confirmMessage.annotationsNote": "By deleting these executions you will also remove the associated annotation data.",
	"executionsList.confirmMessage.annotatedExecutionMessage": "By deleting this you will also remove the associated annotation data. Are you sure that you want to delete the selected execution?",
	"executionsList.error": "Error",
	"executionsList.filters": "Filters",
	"executionsList.loadMore": "Load more",
	"executionsList.empty": "No executions",
	"executionsList.loadedAll": "No more executions to fetch",
	"executionsList.modes.error": "error",
	"executionsList.modes.integrated": "integrated",
	"executionsList.modes.manual": "manual",
	"executionsList.modes.retry": "retry",
	"executionsList.modes.trigger": "trigger",
	"executionsList.modes.webhook": "webhook",
	"executionsList.name": "@:_reusableBaseText.name",
	"executionsList.new": "Queued",
	"executionsList.openPastExecution": "Open Past Execution",
	"executionsList.retryExecution": "Retry execution",
	"executionsList.retryOf": "Retry of",
	"executionsList.retryWithCurrentlySavedWorkflow": "Retry with currently saved workflow (from node with error)",
	"executionsList.retryWithOriginalWorkflow": "Retry with original workflow (from node with error)",
	"executionsList.running": "Running",
	"executionsList.succeeded": "Succeeded",
	"executionsList.selectStatus": "Select Status",
	"executionsList.selectWorkflow": "Select Workflow",
	"executionsList.selectAll": "Select {count} finished execution | Select all {count} finished executions",
	"executionsList.test": "Test execution",
	"executionsList.evaluation": "Evaluation execution",
	"executionsList.showError.handleDeleteSelected.title": "Problem deleting executions",
	"executionsList.showError.loadMore.title": "Problem loading executions",
	"executionsList.showError.loadWorkflows.title": "Problem loading workflows",
	"executionsList.showError.refreshData.title": "Problem loading data",
	"executionsList.showError.retryExecution.title": "Problem with retry",
	"executionsList.showError.stopExecution.title": "Problem stopping execution",
	"executionsList.showMessage.handleDeleteSelected.title": "Execution deleted",
	"executionsList.showMessage.retryError.title": "Retry unsuccessful",
	"executionsList.showMessage.retrySuccess.title": "Retry successful",
	"executionsList.showMessage.retryWaiting.title": "Retry waiting",
	"executionsList.showMessage.retryCrashed.title": "Retry crashed",
	"executionsList.showMessage.retryCanceled.title": "Retry canceled",
	"executionsList.showMessage.retryRunning.title": "Retry running",
	"executionsList.showMessage.stopExecution.message": "Execution ID {activeExecutionId}",
	"executionsList.showMessage.stopExecution.title": "Execution stopped",
	"executionsList.startedAt": "Started",
	"executionsList.trigger": "Triggered by",
	"executionsList.runTime": "Run time",
	"executionsList.startingSoon": "Starting soon",
	"executionsList.started": "{date}, {time}",
	"executionsList.id": "Exec. ID",
	"executionsList.status": "Status",
	"executionsList.statusCanceled": "Canceled",
	"executionsList.statusText": "{status} in {time}",
	"executionsList.statusTextWithoutTime": "{status}",
	"executionsList.statusRunning": "{status} for {time}",
	"executionsList.statusWaiting": "{status} until {time}",
	"executionsList.statusUnknown": "Could not complete",
	"executionsList.stopExecution": "Stop Execution",
	"executionsList.success": "Success",
	"executionsList.successRetry": "Success retry",
	"executionsList.unknown": "Could not complete",
	"executionsList.unsavedWorkflow": "[UNSAVED WORKFLOW]",
	"executionsList.waiting": "Waiting",
	"executionsList.workflowExecutions": "Executions",
	"executionsList.view": "View",
	"executionsList.stop": "Stop",
	"executionsList.statusTooltipText.waitingForWebhook": "The workflow is waiting indefinitely for an incoming webhook call.",
	"executionsList.statusTooltipText.waitingForConcurrencyCapacity": "This execution will start once concurrency capacity is available. {instance}",
	"executionsList.statusTooltipText.waitingForConcurrencyCapacity.cloud": "Your plan is limited to {concurrencyCap} concurrent production executions. {link}",
	"executionsList.statusTooltipText.waitingForConcurrencyCapacity.self": "This instance is limited to {concurrencyCap} concurrent production executions. {link}",
	"executionsList.statusTooltipText.theWorkflowIsWaitingIndefinitely": "The workflow is waiting indefinitely for an incoming webhook call.",
	"executionsList.debug.button.copyToEditor": "Copy to editor",
	"executionsList.debug.button.debugInEditor": "Debug in editor",
	"executionsList.debug.paywall.title": "Upgrade to access Debug In Editor",
	"executionsList.debug.paywall.content": "Debug in Editor allows you to debug a previous execution with the actual data pinned, right in your editor.",
	"executionsList.debug.paywall.subContent": "It's available on our Cloud plans, Enterprise and the",
	"executionsList.debug.paywall.link.text": "Registered Community Edition.",
	"executionsList.debug.paywall.link.url": "https://docs.n8n.io/hosting/community-edition-features/#registered-community-edition",
	"executionStopManyModal.title": "Stop executions",
	"executionStopManyModal.description": "Select which type of executions you want to stop:",
	"executionStopManyModal.button.close": "Close",
	"executionStopManyModal.button.submit": "Stop Executions",
	"executionStopManyModal.queued": "Queued",
	"executionStopManyModal.running": "Running",
	"executionStopManyModal.waiting": "Waiting",
	"executionStopManyModal.success": "Stopped {count} executions.",
	"executionStopManyModal.error.failure": "Failed to stop executions.",
	"executionStopManyModal.dateHint.startEnd": "Will only affect executions between '{startedAfter}' and '{startedBefore}' based on your current filter.",
	"executionStopManyModal.dateHint.startOnly": "Will only affect executions from '{startedAfter}' based on your current filter.",
	"executionStopManyModal.dateHint.endOnly": "Will only affect executions to '{startedBefore}' based on your current filter.",
	"executionStopManyModal.allWorkflowsHint": "This will affect ALL workflows you have access to",
	"fromAiParametersModal.title": "Test {nodeName}",
	"fromAiParametersModal.execute": "Execute step",
	"fromAiParametersModal.description": "Provide the data that would normally come from the \"{parentNodeName}\" node",
	"fromAiParametersModal.cancel": "Cancel",
	"workerList.pageTitle": "Workers",
	"workerList.empty": "No workers are responding or available",
	"workerList.item.lastUpdated": "Last updated",
	"workerList.item.jobList.empty": "No current jobs",
	"workerList.item.jobListTitle": "Current Jobs",
	"workerList.item.netListTitle": "Network Interfaces",
	"workerList.item.memoryMonitorTitle": "Memory Monitoring",
	"workerList.item.chartsTitle": "Performance Monitoring",
	"workerList.item.copyAddressToClipboard": "Address copied to clipboard",
	"workerList.actionBox.title": "Available on the Enterprise plan",
	"workerList.actionBox.description": "View the current state of workers connected to your instance.",
	"workerList.actionBox.description.link": "More info",
	"workerList.actionBox.buttonText": "See plans",
	"workerList.docs.url": "https://docs.n8n.io/hosting/scaling/queue-mode/#view-running-workers",
	"executionSidebar.executionName": "Execution {id}",
	"executionSidebar.searchPlaceholder": "Search executions...",
	"executionView.onPaste.title": "Cannot paste here",
	"executionView.onPaste.message": "This view is read-only. Switch to <i>Workflow</i> tab to be able to edit the current workflow",
	"executionView.notFound.message": "Execution with id '{executionId}' could not be found!",
	"executionAnnotationView.data.notFound": "Show important data from executions here by adding an <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executiondata/\">execution data</a> node to your workflow",
	"executionAnnotationView.vote.error": "Unable to save annotation vote",
	"executionAnnotationView.vote.up": "Vote up",
	"executionAnnotationView.vote.down": "Vote down",
	"executionAnnotationView.vote.removeUp": "Remove up vote",
	"executionAnnotationView.vote.removeDown": "Remove down vote",
	"executionAnnotationView.tag.error": "Unable to save annotation tags",
	"executionAnnotationView.addTag": "Add tag",
	"executionAnnotationView.chooseOrCreateATag": "Choose or create a tag",
	"executionsFilter.annotation.tags": "Execution tags",
	"executionsFilter.annotation.rating": "Rating",
	"executionsFilter.annotation.rating.all": "Any rating",
	"executionsFilter.annotation.rating.good": "Good",
	"executionsFilter.annotation.rating.bad": "Bad",
	"executionsFilter.annotation.selectVoteFilter": "Select Rating",
	"executionsFilter.selectStatus": "Select Status",
	"executionsFilter.selectWorkflow": "Select Workflow",
	"executionsFilter.start": "Execution start",
	"executionsFilter.startDate": "Earliest",
	"executionsFilter.endDate": "Latest",
	"executionsFilter.savedData": "Highlighted data",
	"executionsFilter.savedDataExactMatch": "Exact match",
	"executionsFilter.savedDataKey": "Key",
	"executionsFilter.savedDataKeyPlaceholder": "ID",
	"executionsFilter.savedDataValue": "Value",
	"executionsFilter.savedDataValuePlaceholder": "123",
	"executionsFilter.reset": "Reset all",
	"executionsFilter.customData.inputTooltip": "Upgrade plan to filter executions by custom data set at runtime. {link}",
	"executionsFilter.customData.inputTooltip.link": "View plans",
	"executionsFilter.customData.docsTooltip": "Filter executions by data you have saved in them using an ‘Execution Data’ node. {link}",
	"executionsFilter.customData.docsTooltip.link": "More info",
	"expressionEdit.anythingInside": "Anything inside ",
	"expressionEdit.isJavaScript": " is JavaScript.",
	"expressionEdit.learnMore": "Learn more",
	"expressionEdit.editExpression": "Edit Expression",
	"expressionEdit.expression": "Expression",
	"expressionEdit.resultOfItem1": "Result of item 1",
	"expressionEditor.uncalledFunction": "[this is a function, please add ()]",
	"expressionModalInput.empty": "[empty]",
	"expressionModalInput.undefined": "[undefined]",
	"expressionModalInput.null": "null",
	"expressionTip.noExecutionData": "Execute previous nodes to use input data",
	"expressionTip.typeDotPrimitive": "Type <code>.</code> for data transformation options. <a target=\"_blank\" href=\"https://docs.n8n.io/code/builtin/data-transformation-functions/\">Learn more</a>",
	"expressionTip.typeDotObject": "Type <code>.</code> for data transformation options, or to access fields. <a target=\"_blank\" href=\"https://docs.n8n.io/code/builtin/data-transformation-functions/\">Learn more</a>",
	"expressionTip.javascript": "Anything inside <code>{'{{ }}'}</code> is JavaScript. <a target=\"_blank\" href=\"https://docs.n8n.io/code-examples/expressions/\">Learn more</a>",
	"expressionModalInput.noExecutionData": "Execute previous nodes for preview",
	"expressionModalInput.noNodeExecutionData": "Execute node ‘{node}’ for preview",
	"expressionModalInput.noInputConnection": "No input connected",
	"expressionModalInput.pairedItemConnectionError": "No path back to node",
	"expressionModalInput.pairedItemInvalidPinnedError": "Unpin node ‘{node}’ and execute",
	"expressionModalInput.pairedItemError": "Can’t determine which item to use",
	"expressionModalInput.pairedItemError.noRunData": "Can't determine which item to use - execute node for more info",
	"fixedCollectionParameter.addItem": "Add item",
	"fixedCollectionParameter.addParameter": "Add {parameter}",
	"fixedCollectionParameter.allOptionsAdded": "All options have been added",
	"fixedCollectionParameter.addField": "Add Field",
	"fixedCollectionParameter.choose": "Choose...",
	"fixedCollectionParameter.currentlyNoItemsExist": "Currently no items exist",
	"fixedCollectionParameter.deleteItem": "Delete item",
	"fixedCollectionParameter.deleteParameter": "Delete {parameter}",
	"fixedCollectionParameter.dragItem": "Drag item",
	"fixedCollectionParameter.moveDown": "Move down",
	"fixedCollectionParameter.moveUp": "Move up",
	forgotPassword: forgotPassword$1,
	"forgotPassword.emailSentIfExists": "We’ve emailed {email} (if there’s a matching account)",
	"forgotPassword.getRecoveryLink": "Email me a recovery link",
	"forgotPassword.noSMTPToSendEmailWarning": "Please contact your admin. n8n isn’t set up to send email right now.",
	"forgotPassword.recoverPassword": "Recover password",
	"forgotPassword.recoveryEmailSent": "Recovery email sent",
	"forgotPassword.returnToSignIn": "Back to sign in",
	"forgotPassword.sendingEmailError": "Problem sending email",
	"forgotPassword.ldapUserPasswordResetUnavailable": "Please contact your LDAP administrator to reset your password",
	"forgotPassword.oidcUserPasswordResetUnavailable": "Please contact your OIDC administrator to reset your password",
	"forgotPassword.smtpErrorContactAdministrator": "Please contact your administrator (problem with your SMTP setup)",
	"forgotPassword.tooManyRequests": "You’ve reached the password reset limit. Please try again in a few minutes.",
	"forms.resourceFiltersDropdown.filters": "Filters",
	"forms.resourceFiltersDropdown.owner": "Owner",
	"forms.resourceFiltersDropdown.owner.placeholder": "Filter by owner",
	"forms.resourceFiltersDropdown.reset": "Reset all",
	"folders.actions.create": "Create folder inside",
	"folders.actions.create.workflow": "Create workflow inside",
	"folders.actions.moveToFolder": "Move",
	"folders.add": "Add folder",
	"folders.add.here.message": "Create a new folder here",
	"folders.add.to.parent.message": "Create folder in '{parent}'",
	"folders.add.success.title": "Folder created",
	"folders.add.success.message": "Created new folder '{folderName}'<br><a href=\"{link}\">Open folder</a>",
	"folders.invalidName.empty.message": "Folder name cannot be empty",
	"folders.invalidName.tooLong.message": "Folder name cannot be longer than {maxLength} characters",
	"folders.invalidName.invalidCharacters.message": "Folder name cannot contain the following characters: {illegalChars}",
	"folders.invalidName.starts.with.dot..message": "Folder name cannot start with a dot",
	"folders.invalidName.only.dots.message": "Folder name cannot contain only dots",
	"folders.delete.confirm.title": "Delete '{folderName}'",
	"folders.delete.typeToConfirm": "delete {folderName}",
	"folders.delete.confirm.message": "Are to sure you want to delete this folder?",
	"folders.delete.success.message": "Folder deleted",
	"folder.delete.modal.confirmation": "What should we do with {folders} {workflows} in this folder?",
	"folder.count": "the {count} folder | the {count} folders",
	"workflow.count": "the {count} workflow | the {count} workflows",
	"workflow.description.mcp": "Clear descriptions help other users and MCP clients understand the purpose of your workflow",
	"workflow.description.nomcp": "Clear descriptions help other users understand the purpose of your workflow",
	"workflow.description.error.title": "Problem updating workflow description",
	"folder.and.workflow.separator": "and",
	"folders.delete.action": "Archive all workflows and delete subfolders",
	"folders.delete.error.message": "Problem while deleting folder",
	"folders.delete.confirmation.message": "Type 'delete {folderName}' to confirm",
	"folders.transfer.confirm.message": "Data transferred to '{folderName}'",
	"folders.transfer.action": "Transfer workflows and subfolders to another folder inside '{projectName}'",
	"folders.transfer.action.noProject": "Transfer workflows and subfolders to another folder",
	"folders.transfer.selectFolder": "Folder to transfer to",
	"folders.transfer.select.placeholder": "Select folder",
	"folders.rename.message": "Rename '{folderName}'",
	"folders.rename.error.title": "Problem renaming folder",
	"folders.rename.success.message": "Folder renamed",
	"folders.rename.placeholder": "Enter new folder name",
	"folders.not.found.message": "Folder not found",
	"folders.move.modal.folder.count": "{count} folder | {count} folders",
	"folders.move.modal.workflow.count": "{count} workflow | {count} workflows",
	"folders.move.modal.title": "Move {resourceTypeLabel} {folderName}",
	"folders.move.modal.description": "This will also move{folders}{workflows}.",
	"folders.move.modal.confirm": "Move {resourceTypeLabel}",
	"folders.move.modal.project.label": "Project or user",
	"folders.move.modal.project.placeholder": "Select a project or user",
	"folders.move.modal.folder.label": "Folder",
	"folders.move.modal.folder.placeholder": "Select a folder",
	"folders.move.modal.folder.noData.label": "No folders found",
	"folders.move.modal.message.usedCredentials.workflow": "Also share the {usedCredentials} used by this workflow to ensure it will continue to run correctly",
	"folders.move.modal.message.usedCredentials.folder": "Also share the {usedCredentials} used by these workflows to keep them running correctly",
	"folders.move.modal.message.usedCredentials.warning": "Workflow may not execute correctly if you choose not to share the credentials.",
	"folders.move.success.title": "Successfully moved folder",
	"folders.move.success.message": "<b>{folderName}</b> has been moved to <b>{newFolderName}</b>, along with all its workflows and subfolders.<br/><br/><a href=\"{link}\">View {newFolderName}</a>",
	"folders.move.success.messageNoAccess": "<b>{folderName}</b> has been moved to <b>{newFolderName}</b>, along with all its workflows and subfolders.",
	"folders.move.error.title": "Problem moving folder",
	"folders.move.workflow.error.title": "Problem moving workflow",
	"folders.move.workflow.success.title": "Successfully moved workflow",
	"folders.move.workflow.success.message": "<b>{workflowName}</b> has been moved to <b>{newFolderName}</b>.<br/><br/><a href=\"{link}\">View {newFolderName}</a>",
	"folders.move.workflow.success.messageNoAccess": "<b>{workflowName}</b> has been moved to <b>{newFolderName}</b>.",
	"folders.move.project.root.name": "No folder (project root)",
	"folders.open.error.title": "Problem opening folder",
	"folders.create.error.title": "Problem creating folder",
	"folders.empty.actionbox.title": "Nothing in folder \"{folderName}\" yet",
	"folders.registeredCommunity.cta.heading": "Get access to folders with registered community",
	"folders.breadcrumbs.noTruncated.message": "No hidden items in path",
	"generic.oauth1Api": "OAuth1 API",
	"generic.oauth2Api": "OAuth2 API",
	"genericHelpers.loading": "Loading",
	"genericHelpers.hrsShort": "h",
	"genericHelpers.min": "min",
	"genericHelpers.minShort": "m",
	"genericHelpers.sec": "sec",
	"genericHelpers.secShort": "s",
	"genericHelpers.millis": "ms",
	"readOnly.showMessage.executions.message": "Executions are read-only. Make changes from the <b>Workflow</b> tab.",
	"readOnly.showMessage.executions.title": "Cannot edit execution",
	"readOnlyEnv.showMessage.executions.message": "Executions are read-only.",
	"readOnlyEnv.showMessage.executions.title": "Cannot edit execution",
	"readOnlyEnv.showMessage.workflows.message": "Workflows are read-only in protected instances.",
	"readOnlyEnv.showMessage.workflows.title": "Cannot edit workflow",
	"readOnlyEnv.tooltip": "This is a protected instance where modifications are restricted. {link}",
	"readOnlyEnv.tooltip.link": "More info.",
	"readOnlyEnv.cantAdd.workflow": "You can't add new workflows to a protected n8n instance",
	"readOnlyEnv.cantAdd.credential": "You can't add new credentials to a protected n8n instance",
	"readOnlyEnv.cantAdd.project": "You can't add new projects to a protected n8n instance",
	"readOnlyEnv.cantAdd.any": "You can't create new workflows or credentials on a protected n8n instance",
	"readOnlyEnv.cantEditOrRun": "This workflow can't be edited or run manually because it's on a protected instance",
	"logs.overview.header.title": "Logs",
	"logs.overview.header.actions.clearExecution": "Clear execution",
	"logs.overview.header.actions.clearExecution.tooltip": "Clear execution data",
	"logs.overview.header.switch.details": "Details",
	"logs.overview.header.switch.overview": "Overview",
	"logs.overview.body.empty.message": "Nothing to display yet. Execute the workflow to see execution logs.",
	"logs.overview.body.empty.action": "Execute the workflow",
	"logs.overview.body.summaryText.for": "{status} for {time}",
	"logs.overview.body.summaryText.in": "{status} in {time}",
	"logs.overview.body.started": "Started {time}",
	"logs.overview.body.run": "Execute step",
	"logs.overview.body.open": "Open...",
	"logs.overview.body.toggleRow": "Toggle row",
	"logs.details.header.actions.input": "Input",
	"logs.details.header.actions.output": "Output",
	"logs.details.body.itemCount": "{count} item | {count} items",
	"logs.details.body.multipleInputs": "Multiple inputs. View them by {button}",
	"logs.details.body.multipleInputs.openingTheNode": "opening the node",
	"mainSidebar.aboutN8n": "About n8n",
	"mainSidebar.state.collapse": "Collapse sidebar",
	"mainSidebar.state.expand": "Expand sidebar",
	"mainSidebar.confirmMessage.workflowArchive.cancelButtonText": "",
	"mainSidebar.confirmMessage.workflowArchive.confirmButtonText": "Yes, archive",
	"mainSidebar.confirmMessage.workflowArchive.headline": "Archive Workflow?",
	"mainSidebar.confirmMessage.workflowArchive.message": "Are you sure that you want to archive '{workflowName}'?",
	"mainSidebar.confirmMessage.workflowDelete.cancelButtonText": "",
	"mainSidebar.confirmMessage.workflowDelete.confirmButtonText": "Yes, delete",
	"mainSidebar.confirmMessage.workflowDelete.headline": "Delete Workflow?",
	"mainSidebar.confirmMessage.workflowDelete.message": "Are you sure that you want to delete '{workflowName}' permanently?",
	"mainSidebar.credentials": "Credentials",
	"mainSidebar.variables": "Variables",
	"mainSidebar.help": "Help",
	"mainSidebar.helpMenuItems.course": "Course",
	"mainSidebar.helpMenuItems.documentation": "Documentation",
	"mainSidebar.helpMenuItems.forum": "Forum",
	"mainSidebar.helpMenuItems.quickstart": "Quickstart",
	"mainSidebar.helpMenuItems.reportBug": "Report a bug",
	"mainSidebar.new": "New",
	"mainSidebar.newTemplate": "New from template",
	"mainSidebar.open": "Open",
	"mainSidebar.prompt.cancel": "@:_reusableBaseText.cancel",
	"mainSidebar.prompt.import": "Import",
	"mainSidebar.prompt.importWorkflowFromUrl": "Import Workflow from URL",
	"mainSidebar.prompt.invalidUrl": "Invalid URL",
	"mainSidebar.prompt.workflowUrl": "Workflow URL",
	"mainSidebar.save": "@:_reusableBaseText.save",
	"mainSidebar.settings": "Settings",
	"mainSidebar.showError.stopExecution.title": "Problem stopping execution",
	"mainSidebar.showMessage.handleFileImport.message": "The file does not contain valid JSON data",
	"mainSidebar.showMessage.handleFileImport.title": "Could not import file",
	"mainSidebar.showMessage.handleSelect1.title": "Workflow '{workflowName}' deleted",
	"mainSidebar.showMessage.handleSelect2.title": "Workflow created",
	"mainSidebar.showMessage.handleSelect3.title": "Workflow created",
	"mainSidebar.showMessage.handleArchive.title": "Workflow '{workflowName}' archived",
	"mainSidebar.showMessage.handleUnarchive.title": "Workflow '{workflowName}' unarchived",
	"mainSidebar.showMessage.stopExecution.title": "Execution stopped",
	"mainSidebar.workflows": "Workflows",
	"mainSidebar.workflows.readOnlyEnv.tooltip": "Protected instances prevent editing workflows (recommended for production environments). {link}",
	"mainSidebar.workflows.readOnlyEnv.tooltip.link": "More info",
	"mainSidebar.executions": "Executions",
	"mainSidebar.workersView": "Workers",
	"mainSidebar.whatsNew": "What’s New",
	"mainSidebar.whatsNew.fullChangelog": "Full changelog",
	"mcp.workflowNotEligable.description": "Only published workflows with one of the following trigger nodes can be accessible via MCP: {triggers}",
	"mcp.instanceLevelAccessDisabled.description": "Instance-level MCP access is disabled. Enable it to allow workflow-level access.",
	"mcp.workflowDeactivated.title": "MCP Access Disabled",
	"mcp.productionChecklist.title": "Enable MCP access",
	"mcp.productionChecklist.workflow.description": "Allow MCP clients to access this workflow",
	"mcp.productionChecklist.instance.description": "Enable instance-level MCP access to allow MCP clients to access workflows.",
	"mcp.workflowDeactivated.message": "MCP Access has been disabled for this workflow because it is deactivated",
	"menuActions.duplicate": "Duplicate",
	"menuActions.download": "Download",
	"menuActions.push": "Push to git",
	"menuActions.editDescription": "Edit description",
	"menuActions.importFromUrl": "Import from URL...",
	"menuActions.importFromFile": "Import from file...",
	"menuActions.delete": "Delete",
	"menuActions.archive": "Archive",
	"menuActions.unarchive": "Unarchive",
	"menuActions.unpublish": "Unpublish",
	"multipleParameter.addItem": "Add item",
	"multipleParameter.currentlyNoItemsExist": "Currently no items exist",
	"multipleParameter.deleteItem": "Delete item",
	"multipleParameter.moveDown": "Move down",
	"multipleParameter.moveUp": "Move up",
	"ndv.backToCanvas": "Back to canvas",
	"ndv.backToCanvas.waitingForTriggerWarning": "Waiting for a Trigger node to execute. Close this view to see the Workflow Canvas.",
	"ndv.close.tooltip": "Data stored, safe to close",
	"ndv.execute.testNode": "Execute step",
	"ndv.execute.testNode.description": "Runs the current node. Will also run previous nodes if they have not been run yet",
	"ndv.execute.generateCodeAndTestNode.description": "Generates code and then runs the current node",
	"ndv.execute.generateCode.message": "The instructions in '{nodeName}' have changed",
	"ndv.execute.generateCode.title": "Generating transformation code",
	"ndv.execute.executing": "Executing",
	"ndv.execute.fetchEvent": "Fetch Test Event",
	"ndv.execute.fixPrevious": "Fix previous node first",
	"ndv.execute.generatingCode": "Generating code from instructions",
	"ndv.execute.listenForTestEvent": "Listen for test event",
	"ndv.execute.testChat": "Test chat",
	"ndv.execute.testStep": "Execute step",
	"ndv.execute.stopListening": "Stop Listening",
	"ndv.execute.nodeIsDisabled": "Enable node to execute",
	"ndv.execute.requiredFieldsMissing": "Complete required fields first",
	"ndv.execute.stopWaitingForWebhook.error": "Problem deleting test webhook",
	"ndv.execute.workflowAlreadyRunning": "Workflow is already running",
	"ndv.execute.deactivated": "This node is deactivated and can't be run",
	"ndv.featureRequest": "I wish this node would...",
	"ndv.input": "Input",
	"ndv.input.nodeDistance": "{count} node back | {count} nodes back",
	"ndv.input.noNodesFound": "No nodes found",
	"ndv.input.mapping": "Mapping",
	"ndv.input.fromAI": "From AI",
	"ndv.input.parentNodes": "Parent nodes",
	"ndv.input.noOutputDataInBranch": "No input data in this branch",
	"ndv.input.noOutputDataInNode": "Node did not output any data. n8n stops executing the workflow when a node has no output data.",
	"ndv.input.noOutputData": "No data",
	"ndv.input.noOutputData.executePrevious": "Execute previous nodes",
	"ndv.input.noOutputData.title": "No input data yet",
	"ndv.input.noOutputData.v2.title": "No input data",
	"ndv.input.noOutputData.v2.description": "{link} to view input data",
	"ndv.input.noOutputData.v2.action": "Execute previous nodes",
	"ndv.input.noOutputData.v2.tooltip": "From the earliest node which is unexecuted, or is executed but has since been changed",
	"ndv.input.noOutputData.hint": "(From the earliest node that needs it {info} )",
	"ndv.input.noOutputData.hint.tooltip": "From the earliest node which is unexecuted, or is executed but has since been changed",
	"ndv.input.noOutputData.schemaPreviewHint": "switch to {schema} to use the schema preview",
	"ndv.input.noOutputData.or": "or",
	"ndv.input.noOutputData.embeddedNdv.link": "Execute previous nodes",
	"ndv.input.noOutputData.embeddedNdv.description": "{link} to use their data here",
	"ndv.input.executingPrevious": "Executing previous nodes...",
	"ndv.input.notConnected.title": "Wire me up",
	"ndv.input.notConnected.v2.title": "No input connected",
	"ndv.input.notConnected.v2.description": "This node can only receive input data if you connect it to another node. {link}",
	"ndv.input.notConnected.message": "This node can only receive input data if you connect it to another node.",
	"ndv.input.notConnected.learnMore": "Learn more",
	"ndv.input.disabled": "The '{nodeName}' node is disabled and won’t execute.",
	"ndv.input.disabled.cta": "Enable it",
	"ndv.input.rootNodeHasNotRun.title": "Parent node hasn’t run yet",
	"ndv.input.rootNodeHasNotRun.description": "Inputs that the parent node sends to this one will appear here. To map data in from previous nodes, use the {link} view.",
	"ndv.input.rootNodeHasNotRun.description.link": "mapping",
	"ndv.output": "Output",
	"ndv.output.ai.empty": "👈 Use these logs to see information on how the {node} node completed processing. You can click on a node to see the input it received and data it output.",
	"ndv.output.ai.waiting": "Waiting for message",
	"ndv.output.outType.logs": "Logs",
	"ndv.output.outType.regular": "Output",
	"ndv.output.edit": "Edit Output",
	"ndv.output.all": "all",
	"ndv.output.branch": "Branch",
	"ndv.output.executing": "Executing node...",
	"ndv.output.items": "{count} item | {count} items",
	"ndv.output.itemsTotal": "{count} item total | {count} items total",
	"ndv.output.andSubExecutions": ", {count} sub-execution | , {count} sub-executions",
	"ndv.output.noOutputData.message": "n8n stops executing the workflow when a node has no output data. You can change this default behaviour via",
	"ndv.output.noOutputData.message.settings": "Settings",
	"ndv.output.noOutputData.message.settingsOption": "> \"Always Output Data\".",
	"ndv.output.noOutputData.title": "No output data returned",
	"ndv.output.noOutputData.v2.title": "No output data",
	"ndv.output.noOutputData.v2.description": "{link} to view output data",
	"ndv.output.noOutputData.v2.action": "Execute step",
	"ndv.output.noOutputData.trigger.title": "No trigger output",
	"ndv.output.noOutputData.trigger.action": "Test this trigger",
	"ndv.output.noOutputDataInBranch": "No output data in this branch",
	"ndv.output.of": "{current} of {total}",
	"ndv.output.pageSize": "Page Size",
	"ndv.output.run": "Run",
	"ndv.output.runNodeHint": "Execute this node to view data",
	"ndv.output.runNodeHintSubNode": "Output will appear here once the parent node is run",
	"ndv.output.githubNodeWaitingForWebhook": "Execution will continue when the following webhook URL is called: ",
	"ndv.output.sendAndWaitWaitingApproval": "Execution will continue after the user's response",
	"ndv.output.waitNodeWaiting.title": "Waiting for input",
	"ndv.output.waitNodeWaiting.description.webhook": "Execution will continue when webhook is received on ",
	"ndv.output.waitNodeWaiting.description.form": "Execution will continue when form is submitted on ",
	"ndv.output.waitNodeWaiting.description.timer": "Execution will continue when wait time is over",
	"ndv.output.insertTestData": "set mock data",
	"ndv.output.staleDataWarning.regular": "Node parameters have changed.<br>Test node again to refresh output.",
	"ndv.output.staleDataWarning.pinData": "Node parameter changes will not affect pinned output data.",
	"ndv.output.waitingToRun": "Waiting to execute...",
	"ndv.output.noToolUsedInfo": "None of your tools were used in this run. Try giving your tools clearer names and descriptions to help the AI",
	"ndv.title.cancel": "Cancel",
	"ndv.title.rename": "Rename",
	"ndv.title.rename.placeholder": "Enter new name...",
	"ndv.title.renameNode": "Rename node",
	"ndv.pinData.pin.title": "Pin data",
	"ndv.pinData.pin.description": "Node will always output current data instead of executing. Doesn't apply to production executions.",
	"ndv.pinData.pin.binary": "Pin Data is disabled as this node's output contains binary data.",
	"ndv.pinData.pin.link": "More info",
	"ndv.pinData.unpin.title": "Unpin data",
	"ndv.pinData.pin.multipleRuns.title": "Run #{index} was pinned",
	"ndv.pinData.pin.multipleRuns.description": "This run will be outputted each time the node is run.",
	"ndv.pinData.unpinAndExecute.title": "Unpin output data?",
	"ndv.pinData.unpinAndExecute.description": "Testing a node overwrites pinned data.",
	"ndv.pinData.unpinAndExecute.cancel": "Cancel",
	"ndv.pinData.unpinAndExecute.confirm": "Unpin and test",
	"ndv.pinData.beforeClosing.title": "Save output changes before closing?",
	"ndv.pinData.beforeClosing.cancel": "Discard",
	"ndv.pinData.beforeClosing.confirm": "Save",
	"ndv.pinData.error.syntaxError.title": "Unable to save due to invalid JSON",
	"ndv.pinData.error.tooLarge.title": "Unable to pin data due to size limit",
	"ndv.pinData.error.tooLarge.description": "Workflow has reached the maximum allowed pinned data size ({size} mb / {limit} mb)",
	"ndv.pinData.error.tooLargeWorkflow.title": "Unable to pin data due to size limit",
	"ndv.pinData.error.tooLargeWorkflow.description": "Workflow has reached the maximum allowed size ({size} mb / {limit} mb)",
	"ndv.tooMuchData.message": "This may temporarily slow down your browser.",
	"ndv.tooMuchData.showDataAnyway": "Show data",
	"ndv.tooMuchData.title": "Show {size} MB of data?",
	"ndv.httpRequest.credentialOnly.docsNotice": "Use the <a target=\"_blank\" href=\"{docsUrl}\">{nodeName} docs</a> to construct your request. We'll take care of the authentication part if you add a {nodeName} credential below.",
	"ndv.binaryData.combinedTooltip": "Specify the path to the binary data entry in the input item or use an expression to access the binary data in previous nodes, e.g. {example}",
	"ndv.binaryData.separateTooltip": "Specify the property name of the binary data in the input item or use an expression to access the binary data in previous nodes, e.g. {example}",
	"noTagsView.createTag": "Create a tag",
	"noTagsView.readyToOrganizeYourWorkflows": "Ready to organize your workflows?",
	"noTagsView.withWorkflowTagsYouReFree": "With workflow tags, you're free to create the perfect tagging system for your flows",
	"noAnnotationTagsView.title": "Organize your executions",
	"noAnnotationTagsView.description": "Execution tags help you label and identify different classes of execution. Plus once you tag an execution, it’s never deleted",
	"node.thisIsATriggerNode": "This is a Trigger node. <a target=\"_blank\" href=\"https://docs.n8n.io/workflows/components/nodes/\">Learn more</a>",
	"node.activateDeactivateNode": "Activate/Deactivate Node",
	"node.changeColor": "Change color",
	"node.disabled": "Deactivated",
	"node.testStep": "Execute step",
	"node.disable": "Deactivate",
	"node.enable": "Activate",
	"node.delete": "Delete",
	"node.add": "Add",
	"node.add-human-review-step": "Add human review step",
	"node.issues": "Issues",
	"node.install-to-use": "Install the package to use this node",
	"node.dirty": "Node configuration changed. Output data may change when this node is run again",
	"node.subjectToChange": "Because of changes in the workflow, output data may change when this node is run again",
	"node.nodeIsExecuting": "Node is executing",
	"node.nodeIsWaitingTill": "Node is waiting until {date} {time}",
	"node.theNodeIsWaitingIndefinitelyForAnIncomingWebhookCall": "The node is waiting for an incoming webhook call (indefinitely)",
	"node.theNodeIsWaitingWebhookCall": "The node is waiting for an incoming webhook call",
	"node.theNodeIsWaitingFormCall": "The node is waiting for a form submission",
	"node.theNodeIsWaitingUserInput": "The node is waiting for user input",
	"node.waitingForYouToCreateAnEventIn": "Waiting for you to create an event in {nodeType}",
	"node.discovery.pinData.canvas": "You can pin this output instead of waiting for a test event. Open node to do so.",
	"node.discovery.pinData.ndv": "You can pin this output instead of waiting for a test event.",
	"node.executionError.openNode": "Open node",
	"node.settings.continuesOnError": "Execution will continue even if the node fails",
	"node.settings.continuesOnError.title": "Continue On Fail",
	"node.settings.retriesOnFailure": "This node will automatically retry if it fails",
	"node.settings.executeOnce": "This node executes only once, no matter how many input items there are",
	"node.settings.alwaysOutputData": "This node will output an empty item if nothing would normally be returned",
	"node.settings.dynamicCredentials": "This node uses dynamic credentials that are resolved at runtime.",
	"node.settings.contextEstablishmentHooks": "This webhook extracts the triggering user's identity token to resolve credentials at runtime.",
	"nodeBase.clickToAddNodeOrDragToConnect": "Click to add node \n or drag to connect",
	"nodeCreator.actionsPlaceholderNode.scheduleTrigger": "On a Schedule",
	"nodeCreator.actionsPlaceholderNode.webhook": "On a Webhook call",
	"nodeCreator.actionsCategory.actions": "Actions",
	"nodeCreator.actionsCategory.onNewEvent": "On new {event} event",
	"nodeCreator.actionsCategory.onEvent": "On {event}",
	"nodeCreator.actionsCategory.triggers": "Triggers",
	"nodeCreator.actionsCategory.triggerNodes": "Trigger Nodes",
	"nodeCreator.actionsCategory.regularNodes": "Regular Nodes",
	"nodeCreator.actionsCategory.regularAndTriggers": "Regular & Trigger Nodes",
	"nodeCreator.actionsCategory.searchActions": "Search {node} Actions...",
	"nodeCreator.actionsCategory.noMatchingActions": "No matching Actions. <i>Reset search</i>",
	"nodeCreator.actionsCategory.noMatchingTriggers": "No matching Triggers. <i>Reset search</i>",
	"nodeCreator.actionsList.apiCall": "Didn't find the right event? Make a <a data-action='addHttpNode'>custom {node} API call</a>",
	"nodeCreator.actionsCallout.noActionItems": "We don't have <strong>{nodeName}</strong> actions yet. Have one in mind? Make a <a target=\"_blank\" href=\"https://community.n8n.io/c/feature-requests/5\"> request in our community</a>",
	"nodeCreator.actionsCallout.triggersStartWorkflow": "Actions need to be triggered by another node, e.g. at regular intervals with the <strong>Schedule</strong> node. <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/\"> Learn more</a>",
	"nodeCreator.actionsTooltip.triggersStartWorkflow": "A trigger is a step that starts your workflow. <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/\"> Learn more</a>",
	"nodeCreator.actionsTooltip.actionsPerformStep": "Actions perform a step once your workflow has already started. <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/\"> Learn more</a>",
	"nodeCreator.actionsCallout.noTriggerItems": "No <strong>{nodeName}</strong> Triggers available. Users often combine the following Triggers with <strong>{nodeName}</strong> Actions.",
	"nodeCreator.categoryNames.otherCategories": "Results in other categories",
	"nodeCreator.categoryNames.moreFromCommunity": "More from the community",
	"nodeCreator.subnodes": "sub-nodes",
	"nodeCreator.noResults.dontWorryYouCanProbablyDoItWithThe": "Don’t worry, you can probably do it with the",
	"nodeCreator.noResults.httpRequest": "HTTP Request",
	"nodeCreator.noResults.node": "node",
	"nodeCreator.noResults.or": "or",
	"nodeCreator.noResults.requestTheNode": "Request the node",
	"nodeCreator.noResults.wantUsToMakeItFaster": "Want us to make it faster?",
	"nodeCreator.noResults.weDidntMakeThatYet": "We didn't make that... yet",
	"nodeCreator.noResults.webhook": "Webhook",
	"nodeCreator.ragStarterTemplate.openTemplateItem.title": "RAG starter template",
	"nodeCreator.ragStarterTemplate.openTemplateItem.description": "Get a feel for vector stores in n8n",
	"nodeCreator.searchBar.searchNodes": "Search nodes...",
	"nodeCreator.subcategoryDescriptions.appTriggerNodes": "Runs the flow when something happens in an app like Telegram, Notion or Airtable",
	"nodeCreator.subcategoryDescriptions.appRegularNodes": "Do something in an app or service like Google Sheets, Telegram or Notion",
	"nodeCreator.subcategoryDescriptions.dataTransformation": "Manipulate, filter or convert data",
	"nodeCreator.subcategoryDescriptions.files": "CSV, XLS, XML, text, images, etc.",
	"nodeCreator.subcategoryDescriptions.flow": "Branch, merge or loop the flow, etc.",
	"nodeCreator.subcategoryDescriptions.helpers": "Run code, make HTTP requests, set webhooks, etc.",
	"nodeCreator.subcategoryDescriptions.otherTriggerNodes": "Runs the flow on workflow errors, file changes, etc.",
	"nodeCreator.subcategoryDescriptions.agents": "Autonomous entities that interact and make decisions.",
	"nodeCreator.subcategoryDescriptions.chains": "Structured assemblies for specific tasks.",
	"nodeCreator.subcategoryDescriptions.documentLoaders": "Handles loading of documents for processing.",
	"nodeCreator.subcategoryDescriptions.embeddings": "Transforms text into vector representations.",
	"nodeCreator.subcategoryDescriptions.languageModels": "AI models that understand and generate language.",
	"nodeCreator.subcategoryDescriptions.memory": "Manages storage and retrieval of information during execution.",
	"nodeCreator.subcategoryDescriptions.outputParsers": "Ensures the output adheres to a defined format.",
	"nodeCreator.subcategoryDescriptions.retrievers": "Fetches relevant information from a source.",
	"nodeCreator.subcategoryDescriptions.textSplitters": "Breaks down text into smaller parts.",
	"nodeCreator.subcategoryDescriptions.tools": "Utility components providing various functionalities.",
	"nodeCreator.subcategoryDescriptions.vectorStores": "Store and access vector data in services like Supabase, Pinecone and MongoDB",
	"nodeCreator.subcategoryDescriptions.miscellaneous": "Other AI related nodes.",
	"nodeCreator.subcategoryDescriptions.humanInTheLoop": "Request approval via services like Slack and Telegram before making tool calls",
	"nodeCreator.subcategoryDescriptions.otherTools": "Do something in an app or service like Google Sheets, Telegram or Notion",
	"nodeCreator.subcategoryInfos.languageModels": "Chat models are designed for interactive conversations and follow instructions well, while text completion models focus on generating continuations of a given text input",
	"nodeCreator.subcategoryInfos.memory": "Memory allows an AI model to remember and reference past interactions with it",
	"nodeCreator.subcategoryInfos.vectorStores": "Vector stores allow an AI model to reference relevant pieces of documents, useful for question answering and document search",
	"nodeCreator.subcategoryNames.appTriggerNodes": "On app event",
	"nodeCreator.subcategoryNames.otherTools": "Action in an app",
	"nodeCreator.subcategoryNames.appRegularNodes": "Action in an app",
	"nodeCreator.subcategoryNames.dataTransformation": "Data transformation",
	"nodeCreator.subcategoryNames.files": "Files",
	"nodeCreator.subcategoryNames.flow": "Flow",
	"nodeCreator.subcategoryNames.helpers": "Core",
	"nodeCreator.subcategoryNames.otherTriggerNodes": "Other ways...",
	"nodeCreator.subcategoryNames.agents": "Agents",
	"nodeCreator.subcategoryNames.chains": "Chains",
	"nodeCreator.subcategoryNames.documentLoaders": "Document Loaders",
	"nodeCreator.subcategoryNames.embeddings": "Embeddings",
	"nodeCreator.subcategoryNames.languageModels": "Language Models",
	"nodeCreator.subcategoryNames.memory": "Memory",
	"nodeCreator.subcategoryNames.outputParsers": "Output Parsers",
	"nodeCreator.subcategoryNames.retrievers": "Retrievers",
	"nodeCreator.subcategoryNames.textSplitters": "Text Splitters",
	"nodeCreator.subcategoryNames.tools": "Tools",
	"nodeCreator.subcategoryNames.vectorStores": "Vector Stores",
	"nodeCreator.subcategoryNames.miscellaneous": "Miscellaneous",
	"nodeCreator.subcategoryNames.humanInTheLoop": "Human review",
	"nodeCreator.sectionNames.popular": "Popular",
	"nodeCreator.sectionNames.other": "Other",
	"nodeCreator.sectionNames.sendAndWait": "Send and wait for response",
	"nodeCreator.sectionNames.transform.combine": "Combine items",
	"nodeCreator.sectionNames.transform.addOrRemove": "Add or remove items",
	"nodeCreator.sectionNames.transform.convert": "Convert data",
	"nodeCreator.triggerHelperPanel.addAnotherTrigger": "Add another trigger",
	"nodeCreator.triggerHelperPanel.addAnotherTriggerDescription": "Triggers start your workflow. Workflows can have multiple triggers.",
	"nodeCreator.triggerHelperPanel.title": "When should this workflow run?",
	"nodeCreator.triggerHelperPanel.scheduleTriggerDisplayName": "On a schedule",
	"nodeCreator.triggerHelperPanel.scheduleTriggerDescription": "Runs the flow every day, hour, or custom interval",
	"nodeCreator.triggerHelperPanel.webhookTriggerDisplayName": "On webhook call",
	"nodeCreator.triggerHelperPanel.webhookTriggerDescription": "Runs the flow on receiving an HTTP request",
	"nodeCreator.triggerHelperPanel.formTriggerDisplayName": "On form submission",
	"nodeCreator.triggerHelperPanel.formTriggerDescription": "Generate webforms in n8n and pass their responses to the workflow",
	"nodeCreator.triggerHelperPanel.formDisplayName": "Form",
	"nodeCreator.triggerHelperPanel.formDescription": "Add next form page",
	"nodeCreator.triggerHelperPanel.manualTriggerDisplayName": "Trigger manually",
	"nodeCreator.triggerHelperPanel.manualTriggerDescription": "Runs the flow on clicking a button in n8n. Good for getting started quickly",
	"nodeCreator.triggerHelperPanel.manualChatTriggerDisplayName": "On chat message",
	"nodeCreator.triggerHelperPanel.manualChatTriggerDescription": "Runs the flow when a user sends a chat message. For use with AI nodes",
	"nodeCreator.triggerHelperPanel.chatTriggerDisplayName": "On chat message",
	"nodeCreator.triggerHelperPanel.chatTriggerDescription": "Runs the flow when a user sends a chat message. For use with AI nodes",
	"nodeCreator.triggerHelperPanel.whatHappensNext": "What happens next?",
	"nodeCreator.triggerHelperPanel.selectATrigger": "What triggers this workflow?",
	"nodeCreator.triggerHelperPanel.selectATriggerDescription": "A trigger is a step that starts your workflow",
	"nodeCreator.triggerHelperPanel.workflowTriggerDisplayName": "When executed by another workflow",
	"nodeCreator.triggerHelperPanel.workflowTriggerDescription": "Runs the flow when called by the Execute Workflow node from a different workflow",
	"nodeCreator.aiPanel.aiNodes": "AI Nodes",
	"nodeCreator.aiPanel.aiOtherNodes": "Other AI Nodes",
	"nodeCreator.aiPanel.aiOtherNodesDescription": "Embeddings, Vector Stores, LLMs and other AI nodes",
	"nodeCreator.aiPanel.selectAiNode": "Select an AI Node to add to your workflow",
	"nodeCreator.aiPanel.nodesForAi": "Build autonomous agents, summarize or search documents, etc.",
	"nodeCreator.aiPanel.newTag": "New",
	"nodeCreator.aiPanel.langchainAiNodes": "AI",
	"nodeCreator.aiPanel.title": "When should this workflow run?",
	"nodeCreator.aiPanel.linkItem.description": "See what's possible and get started 5x faster",
	"nodeCreator.aiPanel.linkItem.title": "AI Templates",
	"nodeCreator.aiPanel.scheduleTriggerDisplayName": "On a schedule",
	"nodeCreator.aiPanel.scheduleTriggerDescription": "Runs the flow every day, hour, or custom interval",
	"nodeCreator.aiPanel.webhookTriggerDisplayName": "On webhook call",
	"nodeCreator.aiPanel.webhookTriggerDescription": "Runs the flow when another app sends a webhook",
	"nodeCreator.aiPanel.manualTriggerDisplayName": "Manually",
	"nodeCreator.aiPanel.manualTriggerDescription": "Runs the flow on clicking a button in n8n",
	"nodeCreator.aiPanel.whatHappensNext": "What happens next?",
	"nodeCreator.aiPanel.selectATrigger": "Select an AI Component",
	"nodeCreator.aiPanel.selectATriggerDescription": "A trigger is a step that starts your workflow",
	"nodeCreator.aiPanel.workflowTriggerDisplayName": "When Executed by Another Workflow",
	"nodeCreator.aiPanel.workflowTriggerDescription": "Runs the flow when called by the Execute Workflow node from a different workflow",
	"nodeCreator.nodeItem.triggerIconTitle": "Trigger Node",
	"nodeCreator.nodeItem.aiIconTitle": "LangChain AI Node",
	"nodeCreator.nodeItem.deprecated": "Deprecated",
	"nodeCreator.nodeItem.beta": "Beta",
	"nodeCredentials.createNew": "Create new credential",
	"nodeCredentials.createNew.permissionDenied": "Your current role does not allow you to create credentials",
	"nodeCredentials.credentialFor": "Credential for {credentialType}",
	"nodeCredentials.credentialsLabel": "Credential to connect with",
	"nodeCredentials.issues": "Issues",
	"nodeCredentials.selectCredential": "Select Credential",
	"nodeCredentials.selectedCredentialUnavailable": "{name} (unavailable)",
	"nodeCredentials.showMessage.message": "Nodes that used credential \"{oldCredentialName}\" have been updated to use \"{newCredentialName}\"",
	"nodeCredentials.showMessage.title": "Node credential updated",
	"nodeCredentials.autoAssigned.message": "Added this credential to {count} other node(s)",
	"nodeCredentials.updateCredential": "Update Credential",
	"nodeCredentials.updateCredential.permissionDenied": "Your current role does not allow you to update credentials",
	"nodeCredentials.deleteCredential": "Delete Credential",
	"nodeCredentials.deleteCredential.permissionDenied": "Your current role does not allow you to delete credentials",
	"nodeErrorView.cause": "Cause",
	"nodeErrorView.copyToClipboard": "Copy to Clipboard",
	"nodeErrorView.copyToClipboard.tooltip": "Copy error details for debugging. Copied data may contain sensitive information. Proceed with caution when sharing.",
	"nodeErrorView.dataBelowMayContain": "Data below may contain sensitive information. Proceed with caution when sharing.",
	"nodeErrorView.details": "Details",
	"nodeErrorView.details.from": "From {node}",
	"nodeErrorView.details.rawMessages": "Full message",
	"nodeErrorView.details.errorData": "Error data",
	"nodeErrorView.details.errorExtra": "Error extra",
	"nodeErrorView.details.request": "Request",
	"nodeErrorView.details.title": "Error details",
	"nodeErrorView.details.message": "Error message",
	"nodeErrorView.details.info": "Other info",
	"nodeErrorView.details.nodeVersion": "Node version",
	"nodeErrorView.details.nodeType": "Node type",
	"nodeErrorView.details.n8nVersion": "n8n version",
	"nodeErrorView.details.errorCause": "Error cause",
	"nodeErrorView.details.causeDetailed": "Cause detailed",
	"nodeErrorView.details.stackTrace": "Stack trace",
	"nodeErrorView.error": "ERROR",
	"nodeErrorView.errorSubNode": "Error in sub-node ‘{node}’",
	"nodeErrorView.httpCode": "HTTP Code",
	"nodeErrorView.errorCode": "Error code",
	"nodeErrorView.inParameter": "In or underneath Parameter",
	"nodeErrorView.itemIndex": "Item Index",
	"nodeErrorView.runIndex": "Run Index",
	"nodeErrorView.showMessage.title": "Copied to clipboard",
	"nodeErrorView.stack": "Stack",
	"nodeErrorView.theErrorCauseIsTooLargeToBeDisplayed": "The error cause is too large to be displayed",
	"nodeErrorView.time": "Time",
	"nodeErrorView.inputPanel.previousNodeError.title": "Error running node '{nodeName}'",
	"nodeErrorView.description.pairedItemInvalidInfo": "An expression here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. This is because the node <strong>'{nodeCause}'</strong> returned incorrect matching information (for item {itemIndex} of run {runIndex}).  <br/><br/>Try using <code>.first()</code>, <code>.last()</code> or <code>.all()[index]</code> instead of <code>.item</code>.",
	"nodeErrorView.description.pairedItemNoInfo": "An expression here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. The node <strong>'{nodeCause}'</strong> didn't return enough information.",
	"nodeErrorView.description.pairedItemNoInfoCodeNode": "An expression here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. You can either: <ul><li>Add the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node/\">missing information</a> to the node <strong>'{nodeCause}'</strong></li><li>Or use <code>.first()</code>, <code>.last()</code> or <code>.all()[index]</code> instead of <code>.item</code></li></ul>",
	"nodeErrorView.description.pairedItemNoConnection": "There is no connection back to the node <strong>'{nodeCause}'</strong>, but it's used in an expression here.<br/><br/>Please wire up the node (there can be other nodes in between).",
	"nodeErrorView.description.pairedItemNoConnectionCodeNode": "There is no connection back to the node <strong>'{nodeCause}'</strong>, but it's used in code here.<br/><br/>Please wire up the node (there can be other nodes in between).",
	"nodeErrorView.description.noNodeExecutionData": "An expression references the node <strong>'{nodeCause}'</strong>, but it hasn't been executed yet. Either change the expression, or re-wire your workflow to make sure that node executes first.",
	"nodeErrorView.description.nodeNotFound": "The node <strong>'{nodeCause}'</strong> doesn't exist, but it's used in an expression here.",
	"nodeErrorView.description.noInputConnection": "This node has no input data. Please make sure this node is connected to another node.",
	"nodeErrorView.description.pairedItemMultipleMatches": "An expression here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. (There are multiple possible matches) <br/><br/>Try using <code>.first()</code>, <code>.last()</code> or <code>.all()[index]</code> instead of <code>.item</code> or <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node/\">reference a different node</a>.",
	"nodeErrorView.description.pairedItemMultipleMatchesCodeNode": "The code here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. (There are multiple possible matches) <br/><br/>Try using <code>.first()</code>, <code>.last()</code> or <code>.all()[index]</code> instead of <code>.item</code> or <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node/\">reference a different node</a>.",
	"nodeErrorView.description.pairedItemPinned": "The <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">item-matching</a> data in that node may be stale. It is needed by an expression in this node that uses <code>.item</code>.",
	"nodeHelpers.credentialsUnset": "Credentials for '{credentialType}' are not set.",
	"nodeSettings.alwaysOutputData.description": "If active, will output a single, empty item when the output would have been empty. Use to prevent the workflow finishing on this node.",
	"nodeSettings.alwaysOutputData.displayName": "Always Output Data",
	"nodeSettings.clickOnTheQuestionMarkIcon": "Click the '?' icon to open this node on n8n.io",
	"nodeSettings.onError.description": "Action to take when the node execution fails",
	"nodeSettings.onError.displayName": "On Error",
	"nodeSettings.onError.options.continueRegularOutput.description": "Pass error message as item in regular output",
	"nodeSettings.onError.options.continueRegularOutput.displayName": "Continue",
	"nodeSettings.onError.options.continueErrorOutput.description": "Pass item to an extra `error` output",
	"nodeSettings.onError.options.continueErrorOutput.displayName": "Continue (using error output)",
	"nodeSettings.onError.options.stopWorkflow.description": "Halt execution and fail workflow",
	"nodeSettings.onError.options.stopWorkflow.displayName": "Stop Workflow",
	"nodeSettings.docs": "Docs",
	"nodeSettings.executeButtonTooltip.times": "Will execute {inputSize} times, once for each input item",
	"nodeSettings.executeOnce.description": "If active, the node executes only once, with data from the first item it receives",
	"nodeSettings.executeOnce.displayName": "Execute Once",
	"nodeSettings.dynamicCredentials.displayName": "Dynamic Credentials",
	"nodeSettings.maxTries.description": "Number of times to attempt to execute the node before failing the execution",
	"nodeSettings.maxTries.displayName": "Max. Tries",
	"nodeSettings.noDescriptionFound": "No description found",
	"nodeSettings.nodeDescription": "Node Description",
	"nodeSettings.notes.description": "Optional note to save with the node",
	"nodeSettings.notes.displayName": "Notes",
	"nodeSettings.notesInFlow.description": "If active, the note above will display in the flow as a subtitle",
	"nodeSettings.notesInFlow.displayName": "Display Note in Flow?",
	"nodeSettings.parameters": "Parameters",
	"nodeSettings.parametersShort": "Params",
	"nodeSettings.settings": "Settings",
	"nodeSettings.action": "Action",
	"nodeSettings.credential": "Auth",
	"nodeSettings.communityNodeTooltip": "This is a <a href=\"{docUrl}\" target=\"_blank\"/>community node</a>",
	"nodeSettings.retryOnFail.description": "If active, the node tries to execute again when it fails",
	"nodeSettings.retryOnFail.displayName": "Retry On Fail",
	"nodeSettings.scopes.expandedNoticeWithScopes": "<a data-key=\"toggle-expand\">{count} scope</a> available for {activeCredential} credentials<br>{scopes}<br><a data-key=\"show-less\">Show less</a> | <a data-key=\"toggle-expand\">{count} scopes</a> available for {activeCredential} credentials<br>{scopes}<br><a data-key=\"show-less\">Show less</a>",
	"nodeSettings.scopes.notice": "<a data-key=\"toggle-expand\">{count} scope</a> available for {activeCredential} credentials | <a data-key=\"toggle-expand\">{count} scopes</a> available for {activeCredential} credentials",
	"nodeSettings.theNodeIsNotValidAsItsTypeIsUnknown": "The node is not valid as its type ({nodeType}) is unknown",
	"nodeSettings.communityNodeDetails.title": "Node details",
	"nodeSettings.communityNodeUnknown.title": "Install this node to use it",
	"nodeSettings.communityNodeUnknown.title.preview": "Detailed node info is not available",
	"nodeSettings.communityNodeUnknown.description": "This node is not currently installed. It's part of the {action} community package.",
	"nodeSettings.communityNodeUnknown.installLink.text": "How to install community nodes",
	"nodeSettings.communityNodeUnknown.installButton.label": "Install",
	"nodeSettings.communityNodeUnknown.viewDetailsButton.label": "View details",
	"nodeSettings.nodeTypeUnknown.description": "This node is not currently installed. It is either from a newer version of n8n, a {action}, or has an invalid structure",
	"nodeSettings.nodeTypeUnknown.description.customNode": "custom node",
	"nodeSettings.thisNodeDoesNotHaveAnyParameters": "This node does not have any parameters",
	"nodeSettings.useTheHttpRequestNode": "Use the <b>HTTP Request</b> node to make a custom API call. We'll take care of the {nodeTypeDisplayName} auth for you. <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/custom-operations/\">Learn more</a>",
	"nodeSettings.waitBetweenTries.description": "How long to wait between each attempt (in milliseconds)",
	"nodeSettings.waitBetweenTries.displayName": "Wait Between Tries (ms)",
	"nodeSettings.hasForeignCredential": "To edit this node, either:<br/>a) Ask {owner} to share the credential with you, or<br/>b) Duplicate the node and add your own credential",
	"nodeSettings.latest": "Latest",
	"nodeSettings.deprecated": "Deprecated",
	"nodeSettings.latestVersion": "Latest version: {version}",
	"nodeSettings.outputCleared.title": "Parameters changed",
	"nodeSettings.outputCleared.message": "Order of parameters changed, outgoing connections were cleared",
	"nodeSettings.nodeVersion": "{node} node version {version}",
	"nodeView.addNode": "Add node",
	"nodeView.openFocusPanel": "Open focus panel",
	"nodeView.openNodesPanel": "Open nodes panel",
	"nodeView.openCommandBar": "Command bar",
	"nodeView.addATriggerNodeFirst": "Add a <a data-action='showNodeCreator'>Trigger Node</a> first",
	"nodeView.addOrEnableTriggerNode": "<a data-action='showNodeCreator'>Add</a> or enable a Trigger node to execute the workflow",
	"nodeView.addSticky": "Click to add sticky note",
	"nodeView.addStickyHint": "Add sticky note",
	"nodeView.cantExecuteNoTrigger": "Cannot execute workflow",
	"nodeView.canvasAddButton.addATriggerNodeBeforeExecuting": "Add a Trigger Node before executing the workflow",
	"nodeView.canvasAddButton.addFirstStep": "Add first step…",
	"nodeView.templateLink": "or start from a template",
	"nodeView.confirmMessage.onClipboardPasteEvent.cancelButtonText": "",
	"nodeView.confirmMessage.onClipboardPasteEvent.confirmButtonText": "Yes, import",
	"nodeView.confirmMessage.onClipboardPasteEvent.headline": "Import Workflow?",
	"nodeView.confirmMessage.onClipboardPasteEvent.message": "Workflow will be imported from<br /><i>{plainTextData}<i>",
	"nodeView.confirmMessage.debug.cancelButtonText": "Cancel",
	"nodeView.confirmMessage.debug.confirmButtonText": "Unpin",
	"nodeView.confirmMessage.debug.headline": "Unpin workflow data",
	"nodeView.confirmMessage.debug.message": "Loading this execution will unpin the data currently pinned in these nodes",
	"nodeView.couldntImportWorkflow": "Could not import workflow",
	"nodeView.couldntLoadWorkflow.invalidWorkflowObject": "Invalid workflow object",
	"nodeView.deletesTheCurrentExecutionData": "Deletes the current execution data",
	"nodeView.focusPanel.noExecutionData": "Execute previous node for autocomplete",
	"nodeView.focusPanel.noParameters.title": "Show a node parameter here, to iterate easily",
	"nodeView.focusPanel.noParameters.subtitle": "For example, keep your prompt always visible so you can run the workflow while tweaking it",
	"nodeView.focusPanel.v2.noParameters.title": "Select a node to edit it here",
	"nodeView.focusPanel.v2.noParameters.subtitle": "Or show single node parameter you’d like to iterate on by clicking this button next to it:",
	"nodeView.focusPanel.missingParameter": "This parameter is no longer visible on the node. A related parameter was likely changed, removing this one.",
	"nodeView.itLooksLikeYouHaveBeenEditingSomething": "It looks like you made some edits. If you leave before saving, your changes might be lost.",
	"nodeView.loadingTemplate": "Loading template",
	"nodeView.moreInfo": "More info",
	"nodeView.noNodesGivenToAdd": "No nodes to add specified",
	"nodeView.prompt.cancel": "@:_reusableBaseText.cancel",
	"nodeView.prompt.invalidName": "Invalid Name",
	"nodeView.prompt.newName": "New Name",
	"nodeView.prompt.rename": "Rename",
	"nodeView.prompt.renameNode": "Rename Node",
	"nodeView.redirecting": "Redirecting",
	"nodeView.refresh": "Refresh",
	"nodeView.resetZoom": "Reset Zoom",
	"nodeView.tidyUp": "Tidy Up",
	"nodeView.runButtonText.executeWorkflow": "Execute workflow",
	"nodeView.runButtonText.executingWorkflow": "Executing workflow",
	"nodeView.runButtonText.waitingForTriggerEvent": "Waiting for trigger event",
	"nodeView.runButtonText.from": "from {nodeName}",
	"nodeView.showError.workflowError": "Workflow execution had an error",
	"nodeView.showError.getWorkflowDataFromUrl.title": "Problem loading workflow",
	"nodeView.showError.importWorkflowData.title": "Problem importing workflow",
	"nodeView.showError.mounted1.message": "There was a problem loading init data",
	"nodeView.showError.mounted1.title": "Init Problem",
	"nodeView.showError.mounted2.message": "There was a problem initializing the workflow",
	"nodeView.showError.mounted2.title": "Init Problem",
	"nodeView.showError.openExecution.title": "Problem loading execution",
	"nodeView.showError.openExecution.node": "Problem opening node in execution",
	"nodeView.showError.openWorkflow.title": "Problem opening workflow",
	"nodeView.showError.stopExecution.title": "Problem stopping execution",
	"nodeView.showError.stopWaitingForWebhook.title": "Problem deleting test webhook",
	"nodeView.showError.nodeNodeCompatible.title": "Connection not possible",
	"nodeView.showError.nodeNodeCompatible.message": "The node \"{sourceNodeName}\" can't be connected to the node \"{targetNodeName}\" because they are not compatible.",
	"nodeView.showMessage.addNodeButton.message": "'{nodeTypeName}' is an unknown node type",
	"nodeView.showMessage.addNodeButton.title": "Could not insert node",
	"nodeView.showMessage.keyDown.title": "Workflow created",
	"nodeView.showMessage.showMaxNodeTypeError.message": "Only one '{nodeTypeDataDisplayName}' node is allowed in a workflow | Only {count} '{nodeTypeDataDisplayName}' nodes are allowed in a workflow",
	"nodeView.showMessage.showMaxNodeTypeError.title": "Could not insert node",
	"nodeView.showMessage.stopExecutionCatch.unsaved.message": "This execution was canceled",
	"nodeView.showMessage.stopExecutionCatch.unsaved.title": "Execution canceled",
	"nodeView.showMessage.stopExecutionCatch.message": "It completed before it could be stopped",
	"nodeView.showMessage.stopExecutionCatch.title": "Workflow finished executing",
	"nodeView.showMessage.stopExecutionTry.title": "Execution stopped",
	"nodeView.showMessage.debug.title": "Execution data imported",
	"nodeView.showMessage.debug.content": "You can make edits and re-execute. Once you're done, unpin the the first node.",
	"nodeView.showMessage.debug.missingNodes.title": "Some execution data wasn't imported",
	"nodeView.showMessage.debug.missingNodes.content": "Some nodes have been deleted or renamed or added to the workflow since the execution ran.",
	"nodeView.showMessage.ndvUrl.missingNodes.title": "Node not found",
	"nodeView.showMessage.ndvUrl.missingNodes.content": "URL contained a reference to an unknown node. Maybe the node was deleted?",
	"nodeView.stopCurrentExecution": "Stop current execution",
	"nodeView.stopWaitingForWebhookCall": "Stop waiting for webhook call",
	"nodeView.stoppingCurrentExecution": "Stopping current execution",
	"nodeView.thereWasAProblemLoadingTheNodeParametersOfNode": "There was a problem loading the parameters of the node",
	"nodeView.thisExecutionHasntFinishedYet": "This execution hasn't finished yet",
	"nodeView.toSeeTheLatestStatus": "to see the latest status",
	"nodeView.workflowTemplateWithIdCouldNotBeFound": "Workflow template with ID \"{templateId}\" could not be found",
	"nodeView.workflowWithIdCouldNotBeFound": "Workflow with ID \"{workflowId}\" could not be found",
	"nodeView.zoomIn": "Zoom In",
	"nodeView.zoomOut": "Zoom Out",
	"nodeView.zoomToFit": "Zoom to Fit",
	"nodeView.replaceMe": "Replace Me",
	"nodeView.setupTemplate": "Set up template",
	"nodeView.expandAllNodes": "Expand all nodes",
	"nodeView.collapseAllNodes": "Collapse all nodes",
	"nodeView.enterZoomMode": "Enter zoom mode",
	"nodeView.leaveZoomMode": "Leave zoom mode",
	"nodeViewV2.showError.editingNotAllowed": "Editing is not allowed",
	"nodeViewV2.showError.failedToCreateNode": "Failed to create node",
	"contextMenu.node": "node | nodes",
	"contextMenu.sticky": "sticky note | sticky notes",
	"contextMenu.selectAll": "Select all",
	"contextMenu.deselectAll": "Clear selection",
	"contextMenu.tidyUpWorkflow": "Tidy up workflow",
	"contextMenu.tidyUpSelection": "Tidy up selection",
	"contextMenu.extract": "Convert node to sub-workflow | Convert {count} nodes to sub-workflow",
	"contextMenu.replace": "Replace",
	"contextMenu.duplicate": "Duplicate | Duplicate {count} {subject}",
	"contextMenu.open": "Open...",
	"contextMenu.test": "Execute step",
	"contextMenu.rename": "Rename",
	"contextMenu.openSubworkflow": "Go to Sub-workflow",
	"contextMenu.copy": "Copy | Copy {count} {subject}",
	"contextMenu.deactivate": "Deactivate | Deactivate {count} {subject}",
	"contextMenu.activate": "Activate | Activate {count} nodes",
	"contextMenu.pin": "Pin | Pin {count} nodes",
	"contextMenu.unpin": "Unpin | Unpin {count} nodes",
	"contextMenu.delete": "Delete | Delete {count} {subject}",
	"contextMenu.addNode": "Add node",
	"contextMenu.addSticky": "Add sticky note",
	"contextMenu.editSticky": "Edit sticky note",
	"contextMenu.changeColor": "Change color",
	"contextMenu.copyTestUrl": "Copy test url",
	"contextMenu.copyProductionUrl": "Copy production url",
	"nodeWebhooks.clickToCopyWebhookUrls": "Click to copy webhook URLs",
	"nodeWebhooks.clickToCopyWebhookUrls.formTrigger": "Click to copy Form URL",
	"nodeWebhooks.clickToCopyWebhookUrls.chatTrigger": "Click to copy Chat URL",
	"nodeWebhooks.clickToCopyWebhookUrls.mcpTrigger": "Click to copy MCP URL",
	"nodeWebhooks.clickToDisplayWebhookUrls": "Click to display webhook URLs",
	"nodeWebhooks.clickToDisplayWebhookUrls.formTrigger": "Click to display Form URL",
	"nodeWebhooks.clickToDisplayWebhookUrls.chatTrigger": "Click to display Chat URL",
	"nodeWebhooks.clickToDisplayWebhookUrls.mcpTrigger": "Click to display MCP URL",
	"nodeWebhooks.clickToHideWebhookUrls": "Click to hide webhook URLs",
	"nodeWebhooks.clickToHideWebhookUrls.formTrigger": "Click to hide Form URL",
	"nodeWebhooks.clickToHideWebhookUrls.chatTrigger": "Click to hide Chat URL",
	"nodeWebhooks.clickToHideWebhookUrls.mcpTrigger": "Click to hide MCP URL",
	"nodeWebhooks.invalidExpression": "[INVALID EXPRESSION]",
	"nodeWebhooks.productionUrl": "Production URL",
	"nodeWebhooks.showMessage.title": "URL copied",
	"nodeWebhooks.showMessage.testWebhookUrl": "This node is only supports production webhooks",
	"nodeWebhooks.showMessage.not.active": "Workflow is not active",
	"nodeWebhooks.showMessage.title.formTrigger": "Form URL copied",
	"nodeWebhooks.showMessage.title.chatTrigger": "Chat URL copied",
	"nodeWebhooks.showMessage.title.mcpTrigger": "MCP URL copied",
	"nodeWebhooks.showMessage.message.formTrigger": "Form submissions made via this URL will trigger the workflow when it's activated",
	"nodeWebhooks.showMessage.message.chatTrigger": "Chat submissions made via this URL will trigger the workflow when it's activated",
	"nodeWebhooks.testUrl": "Test URL",
	"nodeWebhooks.webhookUrls": "Webhook URLs",
	"nodeWebhooks.webhookUrls.formTrigger": "Form URLs",
	"nodeWebhooks.webhookUrls.chatTrigger": "Chat URL",
	"nodeWebhooks.webhookUrls.mcpTrigger": "MCP URL",
	"openWorkflow.workflowImportError": "Could not import workflow",
	"openWorkflow.workflowNotFoundError": "Could not find workflow",
	"oauth.consentView.title": "OAuth access consent",
	"oauth.consentView.heading": "{clientName} wants access to your n8n instance",
	"oauth.consentView.description": "This will allow {clientName} to perform the following actions:",
	"oauth.consentView.action.listWorkflows": "Get a list of your workflows",
	"oauth.consentView.action.workflowDetails": "Get details for a specific workflow",
	"oauth.consentView.action.executeWorkflows": "Execute workflows on your behalf",
	"oauth.consentView.readMore": "Read more <a href='{docsUrl}' target='_blank'>here</a>",
	"oauth.consentView.error.deny": "Error denying access",
	"oauth.consentView.error.allow": "Error allowing access",
	"oauth.consentView.error.fetchDetails": "Error fetching client details",
	"oauth.consentView.success.title": "Success",
	"oauth.consentView.success.description": "You will soon be redirected back to the client.",
	"parameterInput.expressionResult": "e.g. {result}",
	"parameterInput.dragTipBeforePill": "Drag an",
	"parameterInput.inputField": "input field",
	"parameterInput.dragTipAfterPill": "from the left to use it here.",
	"parameterInput.learnMore": "Learn more",
	"parameterInput.result": "Result",
	"parameterInput.item": "Item",
	"parameterInput.hoverTableItemTip": "You can also do this by hovering over input/output items in the table view",
	"parameterInput.emptyString": "[empty]",
	"parameterInput.customApiCall": "Custom API Call",
	"parameterInput.iconPicker.tooltip": "Select icon or emoji",
	"parameterInput.selectIcon": "Select icon",
	"parameterInput.error": "ERROR",
	"parameterInput.expression": "Expression",
	"parameterInput.fixed": "Fixed",
	"parameterInput.formatHtml": "Format HTML",
	"parameterInput.issues": "Issues",
	"parameterInput.loadingOptions": "Loading options...",
	"parameterInput.loadOptionsErrorService": "Error fetching options from {service}",
	"parameterInput.loadOptionsError": "Error fetching options",
	"parameterInput.loadOptionsCredentialsRequired": "Set up credential to see options",
	"parameterInput.openEditWindow": "Open Edit Window",
	"parameterInput.parameter": "Parameter: \"{shortPath}\"",
	"parameterInput.parameterHasExpression": "Parameter: \"{shortPath}\" has an expression",
	"parameterInput.parameterHasIssues": "Parameter: \"{shortPath}\" has issues",
	"parameterInput.parameterHasIssuesAndExpression": "Parameter: \"{shortPath}\" has issues and an expression",
	"parameterInput.refreshList": "Refresh List",
	"parameterInput.clearContents": "Clear Contents",
	"parameterInput.focusParameter": "Focus parameter",
	"parameterInput.resetValue": "Reset Value",
	"parameterInput.select": "Select",
	"parameterInput.selectDate": "Select date",
	"parameterInput.selectDateAndTime": "Select date and time",
	"parameterInput.selectACredentialTypeFromTheDropdown": "Select a credential type from the dropdown",
	"parameterInput.theValueIsNotSupported": "The value \"{checkValue}\" is not supported!",
	"parameterInput.selectedWorkflowIsArchived": "The selected workflow is archived",
	"parameterInputExpanded.openDocs": "Open docs",
	"parameterInputExpanded.thisFieldIsRequired": "This field is required",
	"parameterInputList.delete": "Delete",
	"parameterInputList.deleteParameter": "Delete Parameter",
	"parameterInputList.parameterOptions": "Parameter Options",
	"parameterInputList.loadingFields": "Loading fields...",
	"parameterInputList.loadingError": "Error loading fields. Refresh you page and try again.",
	"parameterInputList.callout.dismiss.confirm.text": "Do you want to permanently hide this?",
	"parameterInputList.callout.dismiss.confirm.confirmButtonText": "Confirm",
	"parameterInputList.callout.dismiss.confirm.cancelButtonText": "Cancel",
	"parameterOverride.overridePanelText": "Defined automatically by the <b>model</b>",
	"parameterOverride.applyOverrideButtonTooltip": "Let the model define this parameter",
	"parameterOverride.descriptionTooltip": "Explain to the LLM how it should generate this value, a good, specific description would allow LLMs to produce expected results much more often",
	"personalizationModal.businessOwner": "Business Owner",
	"personalizationModal.continue": "Continue",
	"personalizationModal.cicd": "CI/CD",
	"personalizationModal.cloudInfrastructureOrchestration": "Cloud infrastructure orchestration",
	"personalizationModal.customerIntegrations": "Customer integrations",
	"personalizationModal.customerSupport": "Customer support",
	"personalizationModal.customizeN8n": "Customize n8n to you",
	"personalizationModal.dataScience": "Data Science",
	"personalizationModal.devops": "Devops",
	"personalizationModal.digitalAgencyOrConsultant": "Marketing agency / consultancy",
	"personalizationModal.eCommerce": "Ecommerce",
	"personalizationModal.education": "Education",
	"personalizationModal.engineering": "Engineering",
	"personalizationModal.engineeringOrDevops": "Engineering / Devops",
	"personalizationModal.errorWhileSubmittingResults": "Error while submitting results",
	"personalizationModal.financeOrAccounting": "Finance / Accounting",
	"personalizationModal.financeOrInsurance": "Finance / Insurance",
	"personalizationModal.getStarted": "Get started",
	"personalizationModal.government": "Government",
	"personalizationModal.healthcare": "Healthcare",
	"personalizationModal.howAreYourCodingSkills": "How are your coding skills?",
	"personalizationModal.howBigIsYourCompany": "How big is your company?",
	"personalizationModal.hr": "HR",
	"personalizationModal.imNotUsingN8nForWork": "I'm not using n8n for work",
	"personalizationModal.it": "IT",
	"personalizationModal.legal": "Legal",
	"personalizationModal.lessThan20People": "Less than 20 people",
	"personalizationModal.managedServiceProvider": "Managed service provider",
	"personalizationModal.manufacturing": "Manufacturing",
	"personalizationModal.marketing": "Marketing",
	"personalizationModal.media": "Media",
	"personalizationModal.notSureYet": "Not sure yet",
	"personalizationModal.operations": "Operations",
	"personalizationModal.other": "Other",
	"personalizationModal.otherPleaseSpecify": "Other (please specify)",
	"personalizationModal.specifyReportedSource": "Specify how you heard about n8n",
	"personalizationModal.people": "people",
	"personalizationModal.physicalRetailOrServices": "Physical retail or services",
	"personalizationModal.product": "Product (e.g. fast prototyping)",
	"personalizationModal.realEstateOrConstruction": "Real estate / Construction",
	"personalizationModal.saas": "Software as a service",
	"personalizationModal.salesAndMarketing": "Sales and Marketing",
	"personalizationModal.security": "Security",
	"personalizationModal.select": "Select...",
	"personalizationModal.howDidYouHearAboutN8n": "How did you hear about n8n?",
	"personalizationModal.friendWordOfMouth": "Friend / Word of mouth",
	"personalizationModal.podcast": "Podcast",
	"personalizationModal.event": "Event",
	"personalizationModal.myself": "Myself",
	"personalizationModal.myTeam": "My team",
	"personalizationModal.otherTeams": "Other teams",
	"personalizationModal.specifyAutomationBeneficiary": "Who will your automations mainly be for?",
	"personalizationModal.specifyYourRole": "Please specify your role",
	"personalizationModal.specifyYourAutomationGoal": "Please specify your automation goal",
	"personalizationModal.specifyYourCompanysIndustry": "Specify your company's industry",
	"personalizationModal.support": "Support",
	"personalizationModal.systemsIntegrator": "Systems integrator / Automation agency",
	"personalizationModal.telecoms": "Telecoms",
	"personalizationModal.thanks": "Thanks!",
	"personalizationModal.theseQuestionsHelpUs": "These questions help us tailor n8n to you",
	"personalizationModal.whichRoleBestDescribesYou": "Which role best describes you?",
	"personalizationModal.whatAreYouLookingToAutomate": "What are you looking to automate?",
	"personalizationModal.whatBestDescribesYourCompany": "What best describes your company?",
	"personalizationModal.whichIndustriesIsYourCompanyIn": "Which industries is your company in?",
	"personalizationModal.specifySalesMarketingGoal": "Which parts of Sales and Marketing?",
	"personalizationModal.leadGeneration": "Lead generation, enrichment, routing",
	"personalizationModal.customerCommunication": "Customer communication",
	"personalizationModal.customerActions": "Actions when lead changes status",
	"personalizationModal.yourEmailAddress": "Your email address",
	"personalizationModal.email": "Enter your email..",
	"personalizationModal.adCampaign": "Ad campaign management",
	"personalizationModal.reporting": "Reporting",
	"personalizationModal.ticketingSystemsIntegrations": "Ticketing systems integrations",
	"personalizationModal.dataSynching": "Data syncing",
	"personalizationModal.incidentResponse": "Incident response",
	"personalizationModal.monitoringAndAlerting": "Monitoring and alerting",
	"personalizationModal.specifyUsageMode": "Are you looking to do any of these?",
	"personalizationModal.connectToInternalDB": "Connect to my company’s internal databases",
	"personalizationModal.buildBackendServices": "Build backend services (endpoints)",
	"personalizationModal.manipulateFiles": "Manipulate/transfer files",
	"personalizationModal.specifyOtherSalesAndMarketingGoal": "Specify your other Sales and Marketing goals",
	"personalizationModal.registerEmailForTrial": "Register your email to activate a free 14 day trial of our {trial}",
	"personalizationModal.registerEmailForTrial.enterprise": "Enterprise features",
	"personalizationModal.registerEmailForTrial.notice": "By checking this box, you agree to let us store your name and email to activate your trial and send over your license key. We’ll check-in at the end of the trial to ensure you’re getting the most out of our Enterprise features.",
	"personalizationModal.registerEmailForTrial.success.title": "Your enterprise license is on its way",
	"personalizationModal.registerEmailForTrial.success.message": "You'll shortly receive an email to activate your enterprise license. If you don't see it, check your spam folder.",
	"personalizationModal.registerEmailForTrial.success.button": "Start using n8n",
	"personalizationModal.registerEmailForTrial.error": "Error while registering for enterprise trial",
	"pushConnection.nodeExecutedSuccessfully": "Node executed successfully",
	"pushConnection.workflowExecutedSuccessfully": "Workflow executed successfully",
	"pushConnectionTracker.cannotConnectToServer": "You have a connection issue or the server is down. <br />n8n should reconnect automatically once the issue is resolved.",
	"pushConnectionTracker.connectionLost": "Connection lost",
	"pushConnectionTracker.connectionLost.message": "Attempting to reconnect...",
	"pushConnection.pollingNode.dataNotFound": "No {service} data found",
	"pushConnection.pollingNode.dataNotFound.message": "We didn’t find any data in {service} to simulate an event. Please create one in {service} and try again.",
	"pushConnection.executionFailed": "Execution failed",
	"pushConnection.executionFailed.message": "There might not be enough memory to finish the execution. Tips for avoiding this <a target=\"_blank\" href=\"https://docs.n8n.io/flow-logic/error-handling/memory-errors/\">here</a>",
	"pushConnection.executionError": "There was a problem executing the workflow{error}",
	"pushConnection.executionError.openNode": "Open errored node",
	"pushConnection.executionError.details": "<br /><strong>{details}</strong>",
	"prompts.npsSurvey.recommendationQuestion": "How likely are you to recommend n8n to a friend or colleague?",
	"prompts.npsSurvey.greatFeedbackTitle": "Great to hear! Can we reach out to see how we can make n8n even better for you?",
	"prompts.npsSurvey.defaultFeedbackTitle": "Thanks for your feedback! We'd love to understand how we can improve. Can we reach out?",
	"prompts.npsSurvey.feedbackQuestionTitle": "Thank you! Why did you choose this score?",
	"prompts.npsSurvey.notLikely": "Not likely",
	"prompts.npsSurvey.veryLikely": "Very likely",
	"prompts.npsSurvey.send": "Send",
	"prompts.npsSurvey.reviewUs": "If you’d like to help even more, leave us a <a target=\"_blank\" href=\"https://www.g2.com/products/n8n/reviews/start\">review on G2</a>.",
	"prompts.npsSurvey.thanks": "Thanks for your feedback",
	"projectRoles.manageRoles.paywall.title": "Available on the Enterprise plan",
	"projectRoles.manageRoles.paywall.text": "Create custom roles with granular permissions to control exactly what team members can do inside projects.",
	"projectRoles.project:read": "View",
	"projectRoles.project:read.tooltip": "View project name, icon, description, and navigate within the project",
	"projectRoles.project:update": "Edit",
	"projectRoles.project:update.tooltip": "Edit project details and manage users",
	"projectRoles.project:delete": "Delete",
	"projectRoles.project:delete.tooltip": "Delete the entire project and all its contents",
	"projectRoles.folder:read": "View",
	"projectRoles.folder:read.tooltip": "View folders and subfolders within a project",
	"projectRoles.folder:update": "Edit",
	"projectRoles.folder:update.tooltip": "Rename folders, move workflows between folders, and change parent folder",
	"projectRoles.folder:create": "Create",
	"projectRoles.folder:create.tooltip": "Create new folders or subfolders",
	"projectRoles.folder:move": "Transfer",
	"projectRoles.folder:move.tooltip": "Move a folder and its workflows to another project.",
	"projectRoles.folder:delete": "Delete",
	"projectRoles.folder:delete.tooltip": "Delete an empty folder. If not empty, ask further action",
	"projectRoles.workflow:read": "View",
	"projectRoles.workflow:read.tooltip": "View workflows within the project",
	"projectRoles.workflow:execute": "Execute",
	"projectRoles.workflow:update": "Edit",
	"projectRoles.workflow:update.tooltip": "Edit workflow content and execute workflows",
	"projectRoles.workflow:create": "Create",
	"projectRoles.workflow:create.tooltip": "Create new workflows",
	"projectRoles.workflow:share": "Share",
	"projectRoles.workflow:move": "Transfer",
	"projectRoles.workflow:move.tooltip": "Transfer workflows to another project",
	"projectRoles.workflow:delete": "Delete",
	"projectRoles.workflow:delete.tooltip": "Delete workflows",
	"projectRoles.workflow:publish": "Publish",
	"projectRoles.workflow:publish.tooltip": "Publish and unpublish workflows",
	"projectRoles.credential:read": "View",
	"projectRoles.credential:read.tooltip": "View credentials details (secret masked) and use them in workflows",
	"projectRoles.credential:update": "Edit",
	"projectRoles.credential:update.tooltip": "Edit credential details including secret",
	"projectRoles.credential:create": "Create",
	"projectRoles.credential:create.tooltip": "Create new credentials",
	"projectRoles.credential:share": "Share",
	"projectRoles.credential:share.tooltip": "Share credentials with other projects or users",
	"projectRoles.credential:move": "Transfer",
	"projectRoles.credential:move.tooltip": "Move credentials to another project",
	"projectRoles.credential:delete": "Delete",
	"projectRoles.credential:delete.tooltip": "Delete credentials",
	"projectRoles.dataTable:read": "View",
	"projectRoles.dataTable:read.tooltip": "View the structure of data table (columns, name) and to view metadata",
	"projectRoles.dataTable:update": "Edit",
	"projectRoles.dataTable:update.tooltip": "Modify schema/columns",
	"projectRoles.dataTable:create": "Create",
	"projectRoles.dataTable:create.tooltip": "Create new data tables",
	"projectRoles.dataTable:delete": "Delete",
	"projectRoles.dataTable:delete.tooltip": "Delete data tables",
	"projectRoles.dataTable:readRow": "View Rows",
	"projectRoles.dataTable:readRow.tooltip": "View data table rows",
	"projectRoles.dataTable:writeRow": "Edit Rows",
	"projectRoles.dataTable:writeRow.tooltip": "Modify data table rows",
	"projectRoles.projectVariable:read": "View",
	"projectRoles.projectVariable:read.tooltip": "View project variable values and use them in workflows",
	"projectRoles.projectVariable:update": "Edit",
	"projectRoles.projectVariable:update.tooltip": "Modify existing project variables",
	"projectRoles.projectVariable:create": "Create",
	"projectRoles.projectVariable:create.tooltip": "Create new project variables",
	"projectRoles.projectVariable:delete": "Delete",
	"projectRoles.projectVariable:delete.tooltip": "Delete project variables",
	"projectRoles.sourceControl:pull": "Pull",
	"projectRoles.sourceControl:push": "Push",
	"projectRoles.sourceControl:push.tooltip": "Push changes (workflows, credentials, tags) to the remote repository",
	"projectRoles.sourceControl:manage": "Configure",
	"projectRoles.sourceControl.table.name": "Name",
	"projectRoles.sourceControl.table.type": "Type",
	"projectRoles.sourceControl.table.assignedTo": "Assigned to",
	"projectRoles.sourceControl.table.lastEdited": "Last edited",
	"projectRoles.backToRoleList": "Back to role list",
	"projectRoles.newRole": "New Role",
	"projectRoles.addRole": "Add role",
	"projectRoles.discardChanges": "Discard changes",
	"projectRoles.save": "Save",
	"projectRoles.create": "Create",
	"projectRoles.roleName": "Role name",
	"projectRoles.description": "Description",
	"projectRoles.optional": "Optional",
	"projectRoles.permissions": "Permissions",
	"projectRoles.preset": "Preset",
	"projectRoles.admin": "Admin",
	"projectRoles.editor": "Editor",
	"projectRoles.viewer": "Viewer",
	"projectRoles.type.project": "Project",
	"projectRoles.type.folder": "Folders",
	"projectRoles.type.workflow": "Workflows",
	"projectRoles.type.credential": "Credentials",
	"projectRoles.type.sourceControl": "Source control",
	"projectRoles.type.dataTable": "Data tables",
	"projectRoles.type.projectVariable": "Project variables",
	"projectRoles.literal.system": "System",
	"projectRoles.literal.custom": "Custom",
	"projectRoles.action.cancel": "Cancel",
	"projectRoles.action.delete": "Delete",
	"projectRoles.action.delete.button": "Delete role",
	"projectRoles.action.delete.success": "Role deleted",
	"projectRoles.action.delete.error": "Error deleting role",
	"projectRoles.action.delete.title": "Delete '{roleName}'?",
	"projectRoles.action.delete.text": "Are you sure that you want to delete '{roleName}' permanently? This action cannot be undone.",
	"projectRoles.action.delete.warning": "Deleting a role is permanent. This can’t be undone.",
	"projectRoles.action.delete.useWarning": "You can’t delete this role while it’s assigned to {count} users. Unassign it from all users first.",
	"projectRoles.dangerZone": "Danger zone",
	"projectRoles.action.duplicate": "Duplicate",
	"projectRoles.action.duplicate.name": "Copy of {roleName}",
	"projectRoles.action.duplicate.success": "Role '{roleName}' duplicated successfully as '{roleDuplicateName}'",
	"projectRoles.action.duplicate.error": "Error duplicating role",
	"projectRoles.action.create.success": "Role created successfully",
	"projectRoles.action.create.error": "Error creating role",
	"projectRoles.action.update": "Update role",
	"projectRoles.action.update.success": "Role updated successfully",
	"projectRoles.action.update.error": "Error updating role",
	"projectRoles.action.update.title": "Update role for '{count}' users?",
	"projectRoles.action.update.text": "These changes will instantly affect all {count} users with this role. Are you sure you want to continue?",
	"renameAction.emptyName.message": "Please enter a name, or press 'esc' to go back to the old one",
	"renameAction.emptyName.title": "Name missing",
	"renameAction.invalidName.title": "Invalid name",
	"resourceLocator.id.placeholder": "Enter ID...",
	"resourceLocator.mode.id": "By ID",
	"resourceLocator.mode.url": "By URL",
	"resourceLocator.mode.list": "From list",
	"resourceLocator.mode.list.disabled.title": "Change to Fixed mode to choose From List",
	"resourceLocator.mode.list.error.title": "Could not load list",
	"resourceLocator.mode.list.error.description.checkCredentials": "Check your credential",
	"resourceLocator.mode.list.error.description.noCredentials": "Add your credential",
	"resourceLocator.mode.list.noResults": "No results",
	"resourceLocator.mode.list.openUrl": "Open URL",
	"resourceLocator.mode.list.placeholder": "Choose...",
	"resourceLocator.mode.list.searchRequired": "Enter a search term to show results",
	"resourceLocator.mode.list.addNewResource.vectorStoreInMemory": "Create key '{resourceName}'",
	"resourceLocator.dataTable.createNew": "Create new data table",
	"resourceLocator.modeSelector.placeholder": "Mode...",
	"resourceLocator.openSpecificResource": "Open {entity} in {appName}",
	"resourceLocator.openResource": "Open in {appName}",
	"resourceLocator.placeholder.searchOrCreate": "Search or create...",
	"resourceLocator.placeholder.search": "Search...",
	"resourceLocator.url.placeholder": "Enter URL...",
	"resourceLocator.workflow.inactive.tooltip": "Not published. Can be used for manual testing, but must be published before running in production.",
	"resourceMapper.autoMappingNotice": "In this mode, make sure the incoming data fields are named the same as the {fieldWord} in {serviceName}. (Use an 'Edit Fields' node before this node to change them if required.)",
	"resourceMapper.mappingMode.label": "Mapping Column Mode",
	"resourceMapper.mappingMode.defineBelow.name": "Map Each Column Manually",
	"resourceMapper.mappingMode.defineBelow.description": "Set the value for each {fieldWord}",
	"resourceMapper.mappingMode.autoMapInputData.name": "Map Automatically",
	"resourceMapper.mappingMode.autoMapInputData.description": "Look for incoming data that matches the {fieldWord} in {serviceName}",
	"resourceMapper.fetchingFields.message": "Fetching {fieldWord}",
	"resourceMapper.fetchingFields.errorMessage": "Can't get {fieldWord}.",
	"resourceMapper.fetchingFields.noFieldsFound": "No {fieldWord} found in {serviceName}.",
	"resourceMapper.columnsToMatchOn.label": "{fieldWord} to match on",
	"resourceMapper.columnsToMatchOn.multi.description": "The {fieldWord} to use when matching rows in {nodeDisplayName} to the input items of this node. Usually an ID.",
	"resourceMapper.columnsToMatchOn.single.description": "The {fieldWord} to use when matching rows in {nodeDisplayName} to the input items of this node. Usually an ID.",
	"resourceMapper.columnsToMatchOn.tooltip": "The {fieldWord} to compare when finding the rows to update",
	"resourceMapper.columnsToMatchOn.noFieldsFound": "No {fieldWord} that can be used for matching found in {serviceName}.",
	"resourceMapper.valuesToSend.label": "Values to Send",
	"resourceMapper.valuesToUpdate.label": "Values to Update",
	"resourceMapper.usingToMatch": "(using to match)",
	"resourceMapper.usingToMatch.description": "This {fieldWord} won't be updated and can't be removed, as it's used for matching",
	"resourceMapper.removeField": "Remove {fieldWord}",
	"resourceMapper.mandatoryField.title": "This {fieldWord} is mandatory and can’t be removed",
	"resourceMapper.addFieldToSend": "Add {fieldWord} to send",
	"resourceMapper.matching.title": "This {fieldWord} is used for matching and can’t be removed",
	"resourceMapper.addAllFields": "Add All {fieldWord}",
	"resourceMapper.removeAllFields": "Remove All {fieldWord}",
	"resourceMapper.refreshFieldList": "Refresh {fieldWord} List",
	"resourceMapper.staleDataWarning.tooltip": "{fieldWord} are outdated. Refresh to see the changes.",
	"resourceMapper.staleDataWarning.notice": "Refresh to see the updated fields",
	"resourceMapper.attemptToConvertTypes.displayName": "Attempt To Convert Types",
	"resourceMapper.attemptToConvertTypes.description": "Attempt to convert types when mapping fields",
	"runData.pinData.insertedExecutionData": "💡 Inserted data from last successful execution. You can edit as needed.",
	"runData.openSubExecutionSingle": "View sub-execution",
	"runData.openSubExecutionWithId": "View sub-execution {id}",
	"runData.openParentExecution": "View parent execution {id}",
	"runData.emptyItemHint": "This is an item, but it's empty.",
	"runData.emptyArray": "[empty array]",
	"runData.emptyString": "empty",
	"runData.emptyObject": "{'{empty object}'}",
	"runData.unnamedField": "[Unnamed field]",
	"runData.switchToBinary.info": "This item only has",
	"runData.switchToBinary.binary": "binary data",
	"runData.linking.hint": "Link displayed input and output runs",
	"runData.unlinking.hint": "Unlink displayed input and output runs",
	"runData.binary": "Binary",
	"runData.copyItemPath": "Copy Item Path",
	"runData.copyItemPath.toast": "Item path copied",
	"runData.copyParameterPath": "Copy Parameter Path",
	"runData.copyParameterPath.toast": "Parameter path copied",
	"runData.copyValue": "Copy Selection",
	"runData.copyValue.toast": "Output data copied",
	"runData.copyToClipboard": "Copy to Clipboard",
	"runData.copyDisabled": "First click on the output data you want to copy, then click this button.",
	"runData.editOutput": "Edit Output",
	"runData.editOutputInvalid": "Problem with output data",
	"runData.editOutputInvalid.singleQuote": "Unexpected single quote. Please use double quotes (\") instead",
	"runData.editOutputInvalid.onLine": "On line {line}:",
	"runData.editOutputInvalid.atPosition": "(at position {position})",
	"runData.editValue": "Edit Value",
	"runData.executionStatus.success": "Executed successfully",
	"runData.executionStatus.failed": "Execution failed",
	"runData.executionStatus.canceled": "Execution canceled",
	"runData.downloadBinaryData": "Download",
	"runData.downloadBinaryData.error.title": "Error downloading file",
	"runData.downloadBinaryData.error.message": "File could not be downloaded",
	"runData.executeNode": "Test Node",
	"runData.executionTime": "Execution Time",
	"runData.fileExtension": "File Extension",
	"runData.directory": "Directory",
	"runData.url": "URL",
	"runData.fileName": "File Name",
	"runData.invalidPinnedData": "Invalid pinned data",
	"runData.items": "Items",
	"runData.json": "JSON",
	"runData.rendered": "Rendered",
	"runData.schema": "Schema",
	"runData.mimeType": "Mime Type",
	"runData.fileSize": "File Size",
	"runData.ms": "ms",
	"runData.noBinaryDataFound": "No binary data found",
	"runData.noData": "No data",
	"runData.noTextDataFound": "No text data found",
	"runData.nodeReturnedALargeAmountOfData": "Node returned a large amount of data",
	"runData.output": "Output",
	"runData.showBinaryData": "View",
	"runData.legacyBinaryMode": "Try the new \"v2\" Execution Logic mode by selecting the corresponding option in the workflow",
	"runData.startTime": "Start Time",
	"runData.table": "Table",
	"runData.table.viewSubExecution": "View sub-execution {id}",
	"runData.pindata.learnMore": "Learn more",
	"runData.pindata.thisDataIsPinned": "This data is pinned for test executions.",
	"runData.pindata.unpin": "Unpin",
	"runData.editor.save": "Save",
	"runData.editor.cancel": "Cancel",
	"runData.editor.copyDataInfo": "You can copy data from previous executions and paste it above.",
	"runData.aiContentBlock.startedAt": "Started at {startTime}",
	"runData.aiContentBlock.tokens": "{count} Tokens",
	"runData.aiContentBlock.tokens.prompt": "Prompt:",
	"runData.aiContentBlock.tokens.completion": "Completion:",
	"runData.trimmedData.loading": "Loading data",
	"runData.panel.actions.collapse": "Collapse panel",
	"runData.panel.actions.open": "Open panel",
	"runData.panel.actions.popOut": "Pop out panel",
	"runData.panel.actions.sync": "Sync selection with canvas",
	"saveButton.save": "@:_reusableBaseText.save",
	"saveButton.saved": "Saved",
	"saveButton.saving": "Saving",
	settings: settings$1,
	"settings.communityNodes": "Community nodes",
	"settings.communityNodes.empty.title": "Supercharge your workflows with community nodes",
	"settings.communityNodes.empty.verified.only.title": "Supercharge your workflows with verified community nodes",
	"settings.communityNodes.empty.description": "Install over {count} node packages contributed by our community.",
	"settings.communityNodes.empty.verified.only.description": "You can install community and partner built node packages that have been verified by n8n directly from the nodes panel. Installed packages will show up here.",
	"settings.communityNodes.empty.description.no-packages": "Install node packages contributed by our community.",
	"settings.communityNodes.empty.installPackageLabel": "Install a community node",
	"settings.communityNodes.npmUnavailable.warning": "To use this feature, please <a href=\"{npmUrl}\" target=\"_blank\" title=\"How to install npm\">install npm</a> and restart n8n.",
	"settings.communityNodes.packageNodes.label": "{count} node | {count} nodes",
	"settings.communityNodes.updateAvailable.tooltip": "A newer version is available",
	"settings.communityNodes.viewDocsAction.label": "Documentation",
	"settings.communityNodes.uninstallAction.label": "Uninstall package",
	"settings.communityNodes.upToDate.tooltip": "You are up to date",
	"settings.communityNodes.failedToLoad.tooltip": "There is a problem with this package, try uninstalling it then reinstalling to resolve this issue",
	"settings.communityNodes.fetchError.title": "Problem fetching installed packages",
	"settings.communityNodes.fetchError.message": "There may be a problem with your internet connection or your n8n instance",
	"settings.communityNodes.installModal.title": "Install community nodes",
	"settings.communityNodes.installModal.description": "Find community nodes to add on the npm public registry.",
	"settings.communityNodes.browseButton.label": "Browse",
	"settings.communityNodes.installModal.packageName.label": "npm Package Name",
	"settings.communityNodes.installModal.packageName.tooltip": "<img src='/static/community_package_tooltip_img.png'/><p>This is the title of the package on <a href='{npmURL}'>npmjs.com</a></p><p>Install a specific version by adding it after {'@'}, e.g. <code>package-name{'@'}0.15.0</code></p>",
	"settings.communityNodes.installModal.packageName.placeholder": "e.g. n8n-nodes-chatwork",
	"settings.communityNodes.installModal.checkbox.label": "I understand the risks of installing unverified code from a public source.",
	"settings.communityNodes.installModal.installButton.label": "Install",
	"settings.communityNodes.installModal.installButton.label.loading": "Installing",
	"settings.communityNodes.installModal.error.packageNameNotValid": "Package name must start with n8n-nodes-",
	"settings.communityNodes.messages.install.success": "Package installed",
	"settings.communityNodes.messages.install.error": "Error installing new package",
	"settings.communityNodes.messages.uninstall.error": "Problem uninstalling package",
	"settings.communityNodes.messages.uninstall.success.title": "Package uninstalled",
	"settings.communityNodes.messages.update.success.title": "Package updated",
	"settings.communityNodes.messages.update.success.message": "{packageName} updated to version {version}",
	"settings.communityNodes.messages.update.error.title": "Problem updating package",
	"settings.communityNodes.confirmModal.uninstall.title": "Uninstall node package",
	"settings.communityNodes.confirmModal.uninstall.message": "Any workflows that use nodes from the {packageName} package won't be able to run. Are you sure?",
	"settings.communityNodes.confirmModal.uninstall.description": "Uninstalling the package will remove every instance of nodes included in this package. The following workflows will be effected:",
	"settings.communityNodes.confirmModal.noWorkflowsUsingNodes": "Nodes from this package are not used in any workflows",
	"settings.communityNodes.confirmModal.uninstall.buttonLabel": "Confirm uninstall",
	"settings.communityNodes.confirmModal.uninstall.buttonLoadingLabel": "Uninstalling",
	"settings.communityNodes.confirmModal.update.title": "Update node package",
	"settings.communityNodes.confirmModal.update.message": "You are about to update {packageName} to version {version}",
	"settings.communityNodes.confirmModal.includedNodes": "Package includes: {nodes}",
	"settings.communityNodes.confirmModal.update.warning": "This version has not been verified by n8n and may contain breaking changes or bugs.",
	"settings.communityNodes.confirmModal.update.description": "Updating to the latest version will update every instance of these nodes. The following workflows will be effected:",
	"settings.communityNodes.confirmModal.update.buttonLabel": "Confirm update",
	"settings.communityNodes.confirmModal.update.buttonLoadingLabel": "Updating...",
	"settings.communityNodes.confirmModal.cancel": "Cancel",
	"settings.mcp": "Instance-level MCP",
	"settings.mcp.description": "Let MCP clients like Claude, Lovable, and other AI tools discover and execute your n8n workflows",
	"settings.mcp.header.toggle.enabled": "Enabled",
	"settings.mcp.header.toggle.disabled": "Disabled",
	"settings.mcp.actionBox.heading": "Connect AI assistants to your workflows",
	"settings.mcp.actionBox.button.label": "Enable MCP access",
	"settings.mcp.emptyState.docs.part1": "Read our docs to",
	"settings.mcp.tabs.workflows": "Workflows",
	"settings.mcp.tabs.oauth": "Connected clients",
	"settings.mcp.access.token.notice": "Make sure to copy your access token, you won't be able to see it again",
	"settings.mcp.workflows.table.action.removeMCPAccess": "Remove access",
	"settings.mcp.workflows.table.action.updateDescription": "Edit description",
	"settings.mcp.workflows.table.column.name": "Name",
	"settings.mcp.workflows.table.column.location": "Location",
	"settings.mcp.workflows.table.column.description.emptyContent": "No description",
	"settings.mcp.workflows.table.column.description.emptyTooltip": "Helps MCP clients understand when and how to use this workflow",
	"settings.mcp.workflows.table.empty.title": "No workflows enabled",
	"settings.mcp.workflows.table.empty.description": "Add compatible workflows so MCP clients can discover and execute them",
	"settings.mcp.oauth.table.empty.title": "No OAuth clients connected",
	"settings.mcp.oauth.table.empty.description": "Clients that connect via OAuth will show up here",
	"settings.mcp.oauth.table.empty.button": "See connection instructions",
	"settings.mcp.toggle.disabled.tooltip": "Only instance admins can change this",
	"settings.mcp.toggle.error": "Error updating MCP access",
	"settings.mcp.instructions.rotateKey.tooltip": "Generate new token.<br/>This one will be automatically revoked",
	"settings.mcp.instructions.apiKey.tip": "Use this as an authorization token. May be named differently in different clients",
	"settings.mcp.error.fetching.apiKey": "Error fetching access token",
	"settings.mcp.error.rotating.apiKey": "Error generating new access token",
	"settings.mcp.error.fetching.oAuthClients": "Error fetching list of OAuth clients",
	"settings.mcp.oAuthClients.table.clientName": "Client Name",
	"settings.mcp.oAuthClients.table.connectedAt": "Connected At",
	"settings.mcp.oAuthClients.table.action.revokeAccess": "Revoke Access",
	"settings.mcp.oAuthClients.revoke.success.title": "Access revoked",
	"settings.mcp.oAuthClients.revoke.success.message": "Client {name} access has been revoked",
	"settings.mcp.oAuthClients.revoke.error": "Error revoking client access",
	"settings.mcp.refresh.tooltip": "Refresh list",
	"settings.mcp.connectWorkflows": "Enable workflows",
	"settings.mcp.connectWorkflows.modalTitle": "Enable workflow MCP access",
	"settings.mcp.connectWorkflows.notice": "Workflows that are published and have one of webhook, form, schedule or chat trigger nodes can be enabled for MCP access. <a href='{docsLink}' target='_blank'>Read more</a>",
	"settings.mcp.connectWorkflows.input.placeholder": "Search workflows to connect",
	"settings.mcp.connectWorkflows.confirm.label": "Enable",
	"settings.mcp.connectWorkflows.error": "Error fetching available workflows",
	"settings.mcp.connectWorkflows.emptyState": "No available workflows",
	"settings.mcp.connectPopover.tab.oauth": "OAuth",
	"settings.mcp.connectPopover.tab.accessToken": "Access token",
	"settings.mcp.connectPopover.serverUrl": "Server URL",
	"settings.mcp.connectPopover.jsonConfig": "Configuration JSON",
	"settings.mcp.connectPopover.triggerLabel": "Connection details",
	"settings.chatHub": "Chat",
	"settings.chatHub.providers.fetching.error": "Error fetching chat provider settings",
	"settings.chatHub.providers.updated.success": "Chat provider settings updated",
	"settings.chatHub.providers.updated.error": "Error updating chat provider settings",
	"settings.chatHub.providers.table.provider": "Provider",
	"settings.chatHub.providers.table.models": "Models",
	"settings.chatHub.providers.table.createdAt": "Created",
	"settings.chatHub.providers.table.updatedAt": "Last edited",
	"settings.chatHub.providers.table.action.editProvider": "Edit provider",
	"settings.chatHub.providers.table.action.editProvider.disabled": "Only instance admins and owners can edit chat providers.",
	"settings.chatHub.providers.table.title": "Providers",
	"settings.chatHub.providers.table.refresh.tooltip": "Refresh list",
	"settings.chatHub.providers.table.addProvider.button": "Add provider",
	"settings.chatHub.providers.table.empty.title": "No chat providers configured",
	"settings.chatHub.providers.table.empty.description": "Configure chat providers to restrict available models and credentials.",
	"settings.chatHub.providers.modal.edit.title": "Configure {provider}",
	"settings.chatHub.providers.modal.edit.cancel": "Cancel",
	"settings.chatHub.providers.modal.edit.confirm": "Confirm",
	"settings.chatHub.providers.modal.edit.enabled.label": "Enable {provider}",
	"settings.chatHub.providers.modal.edit.enabled.tooltip": "When disabled, models from this provider won't be available for use in Chat.",
	"settings.chatHub.providers.modal.edit.credential.label": "Default credential",
	"settings.chatHub.providers.modal.edit.credential.clearButton": "Clear selection",
	"settings.chatHub.providers.modal.edit.limitModels.label": "Limit models",
	"settings.chatHub.providers.modal.edit.limitModels.tooltip": "When enabled only selected models will be available for use in Chat.",
	"settings.chatHub.providers.modal.edit.allowedModels.label": "Models",
	"settings.chatHub.providers.modal.edit.errorFetchingModels": "Error fetching chat models",
	"settings.chatHub.providers.modal.edit.models.placeholder": "Select a model",
	"settings.chatHub.providers.modal.edit.models.create": "Add model \"{filter}\"",
	"settings.chatHub.providers.table.models.disabled": "Disabled",
	"settings.chatHub.providers.table.models.allModels": "All models",
	"settings.chatHub.providers.table.models.noModels": "No models",
	"settings.chatHub.providers.table.models.more": " and {count} more",
	"settings.goBack": "Go back",
	"settings.personal": "Personal",
	"settings.personal.basicInformation": "Basic Information",
	"settings.personal.personalSettings": "Personal Settings",
	"settings.personal.personalSettingsUpdated": "Personal details updated",
	"settings.personal.personalSettingsUpdatedError": "Problem updating your details",
	"settings.personal.role.tooltip.default": "Default role for new users",
	"settings.personal.role.tooltip.member": "Create and manage own workflows and credentials",
	"settings.personal.role.tooltip.chatUser": "Access to Chat feature only",
	"settings.personal.role.tooltip.admin": "Full access to manage workflows,tags, credentials, projects, users and more",
	"settings.personal.role.tooltip.owner": "Manage everything{cloudAccess}",
	"settings.personal.role.tooltip.cloud": " and access Cloud dashboard",
	"settings.personal.save": "Save",
	"settings.personal.security": "Security",
	"settings.signup.signUpInviterInfo": "{firstName} {lastName} has invited you to n8n",
	"settings.users": "Users",
	"settings.users.count": "{count} user | {count} users",
	"settings.users.search.placeholder": "Search by name or email",
	"settings.users.confirmDataHandlingAfterDeletion": "What should we do with their data?",
	"settings.users.confirmUserDeletion": "Are you sure you want to delete this invited user?",
	"settings.users.delete": "Delete",
	"settings.users.deleteConfirmationMessage": "Type \"delete all data\" to confirm",
	"settings.users.deleteConfirmationText": "delete all data",
	"settings.users.deleteUser": "Delete {user}",
	"settings.users.actions.delete": "Delete User",
	"settings.users.actions.reinvite": "Resend Invite",
	"settings.users.actions.copyInviteLink": "Copy Invite Link",
	"settings.users.actions.generateInviteLink": "Generate Invite Link",
	"settings.users.actions.copyPasswordResetLink": "Copy Password Reset Link",
	"settings.users.actions.allowSSOManualLogin": "Allow Manual Login",
	"settings.users.actions.disallowSSOManualLogin": "Disallow Manual Login",
	"settings.users.deleteWorkflowsAndCredentials": "Delete their workflows and credentials",
	"settings.users.emailInvitesSent": "An invite email was sent to {emails}",
	"settings.users.emailInvitesSentError": "Could not invite {emails}",
	"settings.users.emailSentTo": "Email sent to {email}",
	"settings.users.invalidEmailError": "{email} is not a valid email",
	"settings.users.inviteLink.copy": "Copy Invite Link",
	"settings.users.inviteLink.error": "Could not retrieve invite link",
	"settings.users.invite": "Invite",
	"settings.users.invite.tooltip": "SAML login is activated. Users should be created in the IdP and will be provisioned in n8n on their first sign on.",
	"settings.users.inviteNewUsers": "Invite new users",
	"settings.users.copyInviteUrls": "You can now send the invitation links directly to your users",
	"settings.users.inviteResent": "Invite resent",
	"settings.users.inviteUser": "Invite user",
	"settings.users.inviteUser.inviteUrl": "Create invite link",
	"settings.users.inviteXUser": "Invite {count} users",
	"settings.users.inviteXUser.inviteUrl": "Create {count} invite links",
	"settings.users.inviteUrlCreated": "Invite link copied to clipboard",
	"settings.users.inviteUrlCreated.message": "Send the invite link to your invitee for activation",
	"settings.users.inviteLinkError": "Could not generate invite link",
	"settings.users.passwordResetUrlCreated": "Password reset link copied to clipboard",
	"settings.users.passwordResetUrlCreated.message": "Send the reset link to your user for them to reset their password",
	"settings.users.passwordResetLinkError": "Could not retrieve password reset link",
	"settings.users.allowSSOManualLogin": "Manual Login Allowed",
	"settings.users.allowSSOManualLogin.message": "User can now login manually and through SSO",
	"settings.users.disallowSSOManualLogin": "Manual Login Disallowed",
	"settings.users.disallowSSOManualLogin.message": "User must now login through SSO only",
	"settings.users.multipleInviteUrlsCreated": "Invite links created",
	"settings.users.multipleInviteUrlsCreated.message": "Send the invite links to your invitees for activation",
	"settings.users.newEmailsToInvite": "New User Email Addresses",
	"settings.users.noUsersToInvite": "No users to invite",
	"settings.users.setupMyAccount": "Set up my owner account",
	"settings.users.setupToInviteUsers": "To invite users, set up your own account",
	"settings.users.setupToInviteUsersInfo": "Invited users won’t be able to see workflows and credentials of other users unless you upgrade. <a href=\"https://docs.n8n.io/user-management/\" target=\"_blank\">More info</a> <br /> <br />",
	"settings.users.smtpToAddUsersWarning": "Set up SMTP before adding users (so that n8n can send them invitation emails). <a target=\"_blank\" href=\"https://docs.n8n.io/hosting/authentication/user-management-self-hosted/\">Instructions</a>",
	"settings.users.transferWorkflowsAndCredentials": "Transfer their workflows and credentials to another user or project",
	"settings.users.transferWorkflowsAndCredentials.user": "User or project to transfer to",
	"settings.users.transferWorkflowsAndCredentials.placeholder": "Select project or user",
	"settings.users.transferredToUser": "Data transferred to {projectName}",
	"settings.users.userNotFound": "User not found",
	"settings.users.userDeleted": "User deleted",
	"settings.users.userDeletedError": "Problem while deleting user",
	"settings.users.userInvited": "User invited",
	"settings.users.userInvitedError": "User could not be invited",
	"settings.users.userReinviteError": "Could not reinvite user",
	"settings.users.userToTransferTo": "User to transfer to",
	"settings.users.usersEmailedError": "Couldn't send invite email",
	"settings.users.usersInvited": "Users invited",
	"settings.users.usersInvitedError": "Could not invite users",
	"settings.users.advancedPermissions.warning": "{link} to unlock the ability to create additional admin users",
	"settings.users.userRoleUpdated": "Changes saved",
	"settings.users.userRoleUpdated.message": "{user} has been successfully updated to a {role}",
	"settings.users.userRoleUpdatedError": "Unable to update role",
	"settings.users.userRoleUpdated.confirm.message": "Are you sure you want to change user to a {role}? This will revoke their current project roles.",
	"settings.users.userRoleUpdated.confirm.title": "Update role for {user}?",
	"settings.users.userRoleUpdated.confirm.button": "Yes, update and revoke",
	"settings.users.userRoleUpdated.cancel.button": "Cancel",
	"settings.users.table.update.error": "Failed to update table",
	"settings.users.table.header.user": "@:_reusableBaseText.user",
	"settings.users.table.header.accountType": "Account Type",
	"settings.users.table.header.2fa": "2FA",
	"settings.users.table.header.lastActive": "Last Active",
	"settings.users.table.row.allProjects": "All projects",
	"settings.users.table.row.personalProject": "Personal project",
	"settings.users.table.row.deleteUser": "Remove user",
	"settings.users.table.row.role.description.admin": "Full access to all workflows, credentials, projects, users and more",
	"settings.users.table.row.role.description.member": "Manage and create own workflows and credentials",
	"settings.users.table.row.role.description.chatUser": "Can use Chat but cannot create or view workflows or access other features",
	"settings.users.table.row.2fa.enabled": "@:_reusableBaseText.enabled",
	"settings.users.table.row.2fa.disabled": "@:_reusableBaseText.disabled",
	"settings.projectRoles": "Project roles",
	"settings.api": "API",
	"settings.api.scopes.upgrade": "{link} to unlock the ability to modify API key scopes",
	"settings.n8napi": "n8n API",
	"settings.log-streaming": "Log Streaming",
	"settings.log-streaming.heading": "Log Streaming",
	"settings.log-streaming.add": "Add new destination",
	"settings.log-streaming.actionBox.title": "Available on the Enterprise plan",
	"settings.log-streaming.actionBox.description": "Log Streaming is available as a paid feature. Learn more about it.",
	"settings.log-streaming.actionBox.button": "See plans",
	"settings.log-streaming.infoText": "Send logs to external endpoints of your choice. You can also write logs to a file or the console using environment variables. <a href=\"https://docs.n8n.io/log-streaming/\" target=\"_blank\">More info</a>",
	"settings.log-streaming.addFirstTitle": "Set up a destination to get started",
	"settings.log-streaming.addFirst": "Add your first destination by clicking on the button and selecting a destination type.",
	"settings.log-streaming.saving": "Saving",
	"settings.log-streaming.delete": "Delete",
	"settings.log-streaming.continue": "Continue",
	"settings.log-streaming.selecttype": "Select type to create",
	"settings.log-streaming.selecttypehint": "Select the type for the new log stream destination",
	"settings.log-streaming.tab.settings": "Settings",
	"settings.log-streaming.tab.events": "Events",
	"settings.log-streaming.tab.events.title": "Select groups or single events to subscribe to:",
	"settings.log-streaming.tab.events.anonymize": "Anonymize sensitive data",
	"settings.log-streaming.tab.events.anonymize.info": "Fields containing personal information like name or email are anonymized",
	"settings.log-streaming.eventGroup.n8n.ai": "AI node logs",
	"settings.log-streaming.eventGroup.n8n.audit": "Audit Events",
	"settings.log-streaming.eventGroup.n8n.audit.info": "Will send events when user details or other audit data changes",
	"settings.log-streaming.eventGroup.n8n.workflow": "Workflow Events",
	"settings.log-streaming.eventGroup.n8n.workflow.info": "Will send workflow execution events",
	"settings.log-streaming.eventGroup.n8n.user": "User",
	"settings.log-streaming.eventGroup.n8n.node": "Node Executions",
	"settings.log-streaming.eventGroup.n8n.node.info": "Will send step-wise execution events every time a node executes. Please note that this can lead to a high frequency of logged events and is probably not suitable for general use.",
	"settings.log-streaming.eventGroup.n8n.runner": "Runner tasks",
	"settings.log-streaming.eventGroup.n8n.runner.info": "Will send an event when a Code node execution is requested from a task runner, and when a response is received from the runner with the result.",
	"settings.log-streaming.eventGroup.n8n.queue": "Queue events",
	"settings.log-streaming.eventGroup.n8n.queue.info": "Will send an event when a queue-related event occurs, e.g. enqueuing, dequeueing, completion, failure, or stalling.",
	"settings.log-streaming.eventGroup.n8n.worker": "Worker",
	"settings.log-streaming.$$AbstractMessageEventBusDestination": "Generic",
	"settings.log-streaming.$$MessageEventBusDestinationWebhook": "Webhook",
	"settings.log-streaming.$$MessageEventBusDestinationSentry": "Sentry",
	"settings.log-streaming.$$MessageEventBusDestinationRedis": "Redis",
	"settings.log-streaming.$$MessageEventBusDestinationSyslog": "Syslog",
	"settings.log-streaming.destinationDelete.cancelButtonText": "",
	"settings.log-streaming.destinationDelete.confirmButtonText": "Yes, delete",
	"settings.log-streaming.destinationDelete.headline": "Delete Destination?",
	"settings.log-streaming.destinationDelete.message": "Are you sure that you want to delete '{destinationName}'?",
	"settings.log-streaming.addDestination": "Add new destination",
	"settings.log-streaming.destinations": "Log destinations",
	"settings.api.trial.upgradePlan.title": "Upgrade to use API",
	"settings.api.trial.upgradePlan.description": "To prevent abuse, we limit API access to your workspace during your trial. If this is hindering your evaluation of n8n, please contact <a href=\"mailto:support{'@'}n8n.io\">support{'@'}n8n.io</a>",
	"settings.api.trial.upgradePlan.cta": "Upgrade plan",
	"settings.api.create.description": "Control n8n programmatically using the <a href=\"https://docs.n8n.io/api\" target=\"_blank\">n8n API</a>",
	"settings.api.create.button": "Create an API Key",
	"settings.api.create.button.loading": "Creating API Key...",
	"settings.api.create.error": "API Key creation failed.",
	"settings.api.edit.error": "API Key update failed.",
	"settings.api.delete.title": "Delete this API Key?",
	"settings.api.delete.description": "Any application using this API Key will no longer have access to n8n. This operation cannot be undone.",
	"settings.api.delete.button": "Delete Forever",
	"settings.api.delete.error": "Deleting the API Key failed.",
	"settings.api.delete.toast": "API Key deleted",
	"settings.api.create.toast": "API Key created",
	"settings.api.update.toast": "API Key updated",
	"settings.api.creationTime": "API key was created on {time}",
	"settings.api.expirationTime": "Expires on {time}",
	"settings.api.expired": "This API key has expired",
	"settings.api.neverExpires": "Never expires",
	"settings.api.view.copy.toast": "API Key copied to clipboard",
	"settings.api.view.apiPlayground": "API Playground",
	"settings.api.view.info": "Use your API Key to control n8n programmatically using the {apiAction}. But if you only want to trigger workflows, consider using the {webhookAction} instead.",
	"settings.api.view.copy": "Make sure to copy your API key now as you will not be able to see this again.",
	"settings.api.view.info.api": "n8n API",
	"settings.api.view.info.webhook": "webhook node",
	"settings.api.view.tryapi": "Try it out using the",
	"settings.api.view.more-details": "You can find more details in",
	"settings.api.view.external-docs": "the API documentation",
	"settings.api.view.error": "Could not check if an api key already exists.",
	"settings.api.view.modal.form.label": "Label",
	"settings.api.view.modal.form.expiration": "Expiration",
	"settings.api.view.modal.form.expirationText": "The API key will expire on {expirationDate}",
	"settings.api.view.modal.form.label.placeholder": "e.g Internal Project",
	"settings.api.view.modal.form.expiration.custom": "Custom",
	"settings.api.view.modal.form.expiration.days": "{numberOfDays} days",
	"settings.api.view.modal.form.expiration.none": "No Expiration",
	"settings.api.view.modal.title.created": "API Key Created",
	"settings.api.view.modal.title.create": "Create API Key",
	"settings.api.view.modal.title.edit": "Edit API Key",
	"settings.api.view.modal.done.button": "Done",
	"settings.api.view.modal.save.button": "Save",
	"settings.api.scopes.placeholder": "Select",
	"settings.api.scopes.selectAll": "Select All",
	"settings.api.scopes.label": "Scopes",
	"settings.version": "Version",
	"settings.usageAndPlan.title": "Usage and plan",
	"settings.usageAndPlan.description": "You’re on the {name} {type}",
	"settings.usageAndPlan.plan": "Plan",
	"settings.usageAndPlan.callOut": "{link} selected paid features for free (forever)",
	"settings.usageAndPlan.callOut.link": "Unlock",
	"settings.usageAndPlan.edition": "Edition",
	"settings.usageAndPlan.error": "@:_reusableBaseText.error",
	"settings.usageAndPlan.activeWorkflows": "Published workflows",
	"settings.usageAndPlan.activeWorkflows.unlimited": "@:_reusableBaseText.unlimited",
	"settings.usageAndPlan.activeWorkflows.count": "{count} of {limit}",
	"settings.usageAndPlan.activeWorkflows.hint": "Published workflows with multiple triggers count multiple times. Error and Sub-workflow triggers are excluded.",
	"settings.usageAndPlan.button.activation": "Enter activation key",
	"settings.usageAndPlan.button.plans": "View plans",
	"settings.usageAndPlan.button.manage": "Manage plan",
	"settings.usageAndPlan.dialog.activation.title": "Enter activation key",
	"settings.usageAndPlan.dialog.activation.label": "Activation key",
	"settings.usageAndPlan.dialog.activation.activate": "@:_reusableBaseText.activate",
	"settings.usageAndPlan.dialog.activation.cancel": "@:_reusableBaseText.cancel",
	"settings.usageAndPlan.license.activation.error.title": "Activation failed",
	"settings.usageAndPlan.license.activation.success.title": "License activated",
	"settings.usageAndPlan.license.activation.success.message": "Your {name} {type} has been successfully activated.",
	"settings.usageAndPlan.license.activation.success.message.eula": "You have accepted the EULA and successfully activated your {name} plan.",
	"settings.usageAndPlan.dialog.eula.title": "Confirmation needed",
	"settings.usageAndPlan.dialog.eula.description": "To activate your license, you must review and accept our End User License Agreement (EULA). Please confirm that you have read and agree to the terms in order to continue.",
	"settings.usageAndPlan.dialog.eula.audit.notice": "Your acceptance will be recorded for audit purposes.",
	"settings.usageAndPlan.dialog.eula.checkbox.label": "I have read and accept the",
	"settings.usageAndPlan.dialog.eula.link.text": "EULA",
	"settings.usageAndPlan.dialog.eula.button.accept": "Accept & activate",
	"settings.usageAndPlan.dialog.eula.button.cancel": "@:_reusableBaseText.cancel",
	"settings.usageAndPlan.license.communityRegistered.tooltip": "You have registered your email to unlock additional features on your community plan",
	"settings.provisioning.title": "Provisioning",
	"settings.provisioning.description": "Configure user provisioning settings and manage automated user lifecycle management.",
	"settings.provisioning.loadError": "Failed to load provisioning configuration",
	"settings.provisioning.saveError": "Failed to save provisioning configuration",
	"settings.provisioning.saveSuccess": "Configuration Saved",
	"settings.provisioning.saveSuccessMessage": "Provisioning configuration has been successfully updated.",
	"settings.provisioning.save": "Save Configuration",
	"settings.provisioning.scopesName": "Scopes Name",
	"settings.provisioning.scopesName.placeholder": "Enter scope name",
	"settings.provisioning.scopesName.help": "The name of the scope for provisioning, this is the scope that will be requested during Oauth flows",
	"settings.provisioning.scopesInstanceRoleClaimName": "Instance Role Claim Name",
	"settings.provisioning.scopesInstanceRoleClaimName.placeholder": "Enter instance role claim name",
	"settings.provisioning.scopesInstanceRoleClaimName.help": "The claim name used to provision instance roles from Oauth. For SAML / LDAP, this will be the attribute name checked.",
	"settings.provisioning.scopesProjectsRolesClaimName": "Projects Roles Claim Name",
	"settings.provisioning.scopesProjectsRolesClaimName.placeholder": "Enter projects roles claim name",
	"settings.provisioning.scopesProjectsRolesClaimName.help": "The claim name used to provision projects and their roles from Oauth. For SAML / LDAP, this will be the attribute name checked.",
	"settings.provisioning.toggle": "Provision instance and project roles",
	"settings.provisioning.toggle.help": "Project access can only be defined on external provider. Any existing project access configured in n8n, but not on the provider, will be removed once a user logs in.",
	"settings.provisioningConfirmDialog.enable.title": "Enable user role provisioning",
	"settings.provisioningConfirmDialog.disable.title": "Manage user role provisioning in n8n only",
	"settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partOne": "Your SSO provider will control all user roles in n8n.",
	"settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partOne.withProjectRoles": "Your SSO provider will control all user and project roles in n8n.",
	"settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partTwo": "Roles not assigned by your SSO provider will default to global:member.",
	"settings.provisioningConfirmDialog.breakingChangeDescription.secondLine": "<b>Before enabling:</b> Download and review your current access settings below to ensure your SSO provider is configured correctly.",
	"settings.provisioningConfirmDialog.disable.description": "You're switching instance role management from SSO back to n8n.",
	"settings.provisioningConfirmDialog.enable.checkbox": "I have downloaded and reviewed the CSV export. My SSO provider is correctly configured to control user roles on this n8n instance.",
	"settings.provisioningConfirmDialog.disable.checkbox": "I confirm that I want to no longer provision user roles from my SSO provider.",
	"settings.provisioningConfirmDialog.link.docs": "Link to docs",
	"settings.provisioningConfirmDialog.button.enable.confirm": "Save and enable",
	"settings.provisioningConfirmDialog.button.disable.confirm": "Save",
	"settings.provisioningConfirmDialog.button.cancel": "Cancel",
	"settings.provisioningConfirmDialog.button.generateCsvExport": "Generate access settings CSV export",
	"settings.provisioningConfirmDialog.button.downloadProjectRolesCsv": "Existing project access settings csv",
	"settings.provisioningConfirmDialog.button.downloadInstanceRolesCsv": "Existing instance role settings csv",
	"settings.provisioningInstanceRolesHandledBySsoProvider.description": "User management and instance roles are controlled by your SSO provider. Contact your n8n instance owner or admin to make changes.",
	"settings.provisioningProjectRolesHandledBySsoProvider.description": "User management and project roles are controlled by your SSO provider. Contact your n8n instance owner or admin to make changes.",
	"settings.externalSecrets.title": "External Secrets",
	"settings.externalSecrets.info": "Connect external secrets tools for centralized credentials management across environments, and to enhance system security.",
	"settings.externalSecrets.info.link": "More info",
	"settings.externalSecrets.actionBox.title": "Available on the Enterprise plan",
	"settings.externalSecrets.actionBox.description": "Connect external secrets tools for centralized credentials management across instances. {link}",
	"settings.externalSecrets.actionBox.description.link": "More info",
	"settings.externalSecrets.actionBox.buttonText": "See plans",
	"settings.externalSecrets.card.setUp": "Set Up",
	"settings.externalSecrets.card.deprecated": "deprecated",
	"settings.externalSecrets.card.secretsCount": "{count} secrets",
	"settings.externalSecrets.card.connectedAt": "Connected {date}",
	"settings.externalSecrets.card.connected": "Enabled",
	"settings.externalSecrets.card.disconnected": "Disabled",
	"settings.externalSecrets.card.actionDropdown.setup": "Edit connection",
	"settings.externalSecrets.card.actionDropdown.reload": "Reload secrets",
	"settings.externalSecrets.card.reload.success.title": "Reloaded successfully",
	"settings.externalSecrets.card.reload.success.description": "All secrets have been reloaded from {provider}.",
	"settings.externalSecrets.provider.title": "Commit and push changes",
	"settings.externalSecrets.provider.description": "Select the files you want to stage in your commit and add a commit message. ",
	"settings.externalSecrets.provider.buttons.cancel": "Cancel",
	"settings.externalSecrets.provider.buttons.save": "Save",
	"settings.externalSecrets.provider.buttons.saving": "Saving",
	"settings.externalSecrets.card.connectedSwitch.title": "Enable {provider}",
	"settings.externalSecrets.provider.save.success.title": "Provider settings saved successfully",
	"settings.externalSecrets.provider.connected.success.title": "Provider connected successfully",
	"settings.externalSecrets.provider.disconnected.success.title": "Provider disconnected successfully",
	"settings.externalSecrets.provider.testConnection.success.connected": "Service enabled, {count} secrets available on {provider}.",
	"settings.externalSecrets.provider.testConnection.success.connected.usage": "Use secrets in credentials by setting a parameter to an expression and typing: {code}. ",
	"settings.externalSecrets.provider.testConnection.success.connected.docs": "More info",
	"settings.externalSecrets.provider.testConnection.success": "Connection to {provider} executed successfully. Enable the service to use the secrets in credentials.",
	"settings.externalSecrets.provider.testConnection.error.connected": "Connection unsuccessful, please check your {provider} settings",
	"settings.externalSecrets.provider.testConnection.error": "Connection unsuccessful, please check your {provider} settings",
	"settings.externalSecrets.provider.closeWithoutSaving.title": "Close without saving?",
	"settings.externalSecrets.provider.closeWithoutSaving.description": "Are you sure you want to throw away the changes you made to the {provider} settings?",
	"settings.externalSecrets.provider.closeWithoutSaving.cancel": "Close",
	"settings.externalSecrets.provider.closeWithoutSaving.confirm": "Keep editing",
	"settings.externalSecrets.docs": "https://docs.n8n.io/external-secrets/",
	"settings.externalSecrets.docs.use": "https://docs.n8n.io/external-secrets/#use-secrets-in-n8n-credentials",
	"settings.sourceControl.title": "Environments",
	"settings.sourceControl.actionBox.title": "Available on the Enterprise plan",
	"settings.sourceControl.actionBox.description": "Use multiple instances for different environments (dev, prod, etc.), deploying between them via a Git repository.",
	"settings.sourceControl.actionBox.description.link": "More info",
	"settings.sourceControl.actionBox.buttonText": "See plans",
	"settings.sourceControl.connection.error": "Source control failed to connect",
	"settings.sourceControl.connection.error.message": "We couldn't find the repository connected to this instance. Please double-check your {link} on this instance.",
	"settings.sourceControl.connection.error.link": "Git configuration",
	"settings.sourceControl.description": "Use multiple instances for different environments (dev, prod, etc.), deploying between them via a Git repository. {link}",
	"settings.sourceControl.description.link": "More info",
	"settings.sourceControl.gitConfig": "Git configuration",
	"settings.sourceControl.connectionType": "Connection Type",
	"settings.sourceControl.enterValidHttpsUrl": "Please enter a valid HTTPS URL",
	"settings.sourceControl.repoUrl": "Git repository URL (SSH)",
	"settings.sourceControl.repoUrlPlaceholder": "e.g. git{'@'}github.com:my-team/my-repository",
	"settings.sourceControl.repoUrlInvalid": "The Git repository URL is not valid",
	"settings.sourceControl.authorName": "Commit author  name",
	"settings.sourceControl.authorEmail": "Commit author  email",
	"settings.sourceControl.authorEmailInvalid": "The provided email is not correct",
	"settings.sourceControl.sshKey": "SSH Key",
	"settings.sourceControl.sshKeyDescription": "Paste the SSH key in your git repository/account settings. {link}",
	"settings.sourceControl.sshKeyDescriptionLink": "More info",
	"settings.sourceControl.refreshSshKey": "Refresh Key",
	"settings.sourceControl.refreshSshKey.successful.title": "SSH Key refreshed successfully",
	"settings.sourceControl.refreshSshKey.error.title": "SSH Key refresh failed",
	"settings.sourceControl.button.continue": "Continue",
	"settings.sourceControl.button.connect": "Connect",
	"settings.sourceControl.button.disconnect": "Disconnect Git",
	"settings.sourceControl.button.save": "Save settings",
	"settings.sourceControl.instanceSettings": "Instance settings",
	"settings.sourceControl.branches": "Branch connected to this n8n instance",
	"settings.sourceControl.protected": "{bold}: prevent editing workflows (recommended for production environments).",
	"settings.sourceControl.protected.bold": "Protected instance",
	"settings.sourceControl.color": "Color",
	"settings.sourceControl.switchBranch.title": "Switch to {branch} branch",
	"settings.sourceControl.switchBranch.description": "Please confirm you want to switch the current n8n instance to the branch: {branch}",
	"settings.sourceControl.sync.prompt.title": "Sync changes in {branch} branch",
	"settings.sourceControl.sync.prompt.description": "All the changes on your n8n instances will be synced with branch {branch} on the remote git repository. The following git sequence will be executed: pull > commit > push.",
	"settings.sourceControl.sync.prompt.placeholder": "Commit message",
	"settings.sourceControl.sync.prompt.error": "Please enter a commit message",
	"settings.sourceControl.button.push": "Push",
	"settings.sourceControl.button.pull": "Pull",
	"settings.sourceControl.button.pull.forbidden": "Only the instance owner or instance admins can pull changes",
	"settings.sourceControl.button.push.forbidden": "You can't push changes from a protected instance",
	"settings.sourceControl.modals.push.title": "Commit and push changes",
	"settings.sourceControl.modals.push.description": "The following will be committed: ",
	"settings.sourceControl.modals.push.description.learnMore": "More info",
	"settings.sourceControl.modals.push.filesToCommit": "Files to commit",
	"settings.sourceControl.modals.push.filter": "Filters are applied. Showing {count} {entity}.",
	"settings.sourceControl.modals.push.workflowsToCommit": "Select workflows",
	"settings.sourceControl.modals.push.everythingIsUpToDate": "Everything is up to date",
	"settings.sourceControl.modals.push.noWorkflowChanges": "There are no workflow changes but the following will be committed: {link}",
	"settings.sourceControl.modals.push.noWorkflowChanges.moreInfo": "More info",
	"settings.sourceControl.modals.push.commitMessage": "Commit message",
	"settings.sourceControl.modals.push.commitMessage.placeholder": "e.g. My commit",
	"settings.sourceControl.modals.push.buttons.cancel": "Cancel",
	"settings.sourceControl.modals.push.buttons.save": "Commit and push",
	"settings.sourceControl.modals.push.success.title": "Pushed successfully",
	"settings.sourceControl.modals.push.success.description": "were committed and pushed to your remote repository",
	"settings.sourceControl.modals.push.projectAdmin.callout": "If you want to push workflows from your personal space, move them to a project first.",
	"settings.sourceControl.status.modified": "Modified",
	"settings.sourceControl.status.deleted": "Deleted",
	"settings.sourceControl.status.created": "New",
	"settings.sourceControl.status.renamed": "Renamed",
	"settings.sourceControl.pull.oneLastStep.title": "One last step",
	"settings.sourceControl.pull.oneLastStep.description": "You have new creds/vars. Fill them out to make sure your workflows function properly",
	"settings.sourceControl.pull.success.title": "Pulled successfully",
	"settings.sourceControl.pull.upToDate.title": "Up to date",
	"settings.sourceControl.pull.upToDate.description": "No workflow changes to pull from Git",
	"settings.sourceControl.pull.upToDate.variables.title": "Finish setting up your new variables to use in workflows",
	"settings.sourceControl.pull.upToDate.variables.description": "Review Variables",
	"settings.sourceControl.pull.upToDate.credentials.title": "Finish setting up your new credentials to use in workflows",
	"settings.sourceControl.pull.upToDate.credentials.description": "Review Credentials",
	"settings.sourceControl.modals.pull.title": "Pull changes",
	"settings.sourceControl.modals.pull.description": "These resources will be updated or deleted, and any local changes to them will be lost. To keep the local version, push it before pulling.",
	"settings.sourceControl.modals.pull.description.learnMore": "More info",
	"settings.sourceControl.modals.pull.buttons.cancel": "@:_reusableBaseText.cancel",
	"settings.sourceControl.modals.pull.buttons.save": "Pull and override",
	"settings.sourceControl.modals.disconnect.title": "Disconnect Git repository",
	"settings.sourceControl.modals.disconnect.message": "Please confirm you want to disconnect this n8n instance from the Git repository",
	"settings.sourceControl.modals.disconnect.confirm": "Disconnect Git",
	"settings.sourceControl.modals.disconnect.cancel": "@:_reusableBaseText.cancel",
	"settings.sourceControl.modals.refreshSshKey.title": "Refresh SSH Key",
	"settings.sourceControl.modals.refreshSshKey.message": "This will delete the current SSH key and create a new one. You will not be able to authenticate with the current key anymore.",
	"settings.sourceControl.modals.refreshSshKey.cancel": "Cancel",
	"settings.sourceControl.modals.refreshSshKey.confirm": "Refresh key",
	"settings.sourceControl.loading.connecting": "Connecting",
	"settings.sourceControl.toast.connected.title": "Git repository connected",
	"settings.sourceControl.toast.connected.message": "Select the branch to complete the configuration",
	"settings.sourceControl.toast.connected.error": "Error connecting to Git",
	"settings.sourceControl.toast.disconnected.title": "Git repository disconnected",
	"settings.sourceControl.toast.disconnected.message": "You can no longer sync your instance with the remote repository",
	"settings.sourceControl.toast.disconnected.error": "Error disconnecting from Git",
	"settings.sourceControl.loading.pull": "Pulling from remote",
	"settings.sourceControl.loading.checkingForChanges": "Checking for changes",
	"settings.sourceControl.loading.push": "Pushing to remote",
	"settings.sourceControl.lastUpdated": "Last updated {date} at {time}",
	"settings.sourceControl.saved.title": "Settings successfully saved",
	"settings.sourceControl.refreshBranches.tooltip": "Reload branches list",
	"settings.sourceControl.refreshBranches.success": "Branches successfully refreshed",
	"settings.sourceControl.refreshBranches.error": "Error refreshing branches",
	"settings.sourceControl.docs.url": "https://docs.n8n.io/source-control-environments/",
	"settings.sourceControl.docs.setup.url": "https://docs.n8n.io/source-control-environments/setup/",
	"settings.sourceControl.docs.setup.ssh.url": "https://docs.n8n.io/source-control-environments/setup/#step-3-set-up-a-deploy-key",
	"settings.sourceControl.docs.using.url": "https://docs.n8n.io/source-control-environments/using/",
	"settings.sourceControl.docs.using.pushPull.url": "https://docs.n8n.io/source-control-environments/using/push-pull",
	"settings.sourceControl.error.not.connected.title": "Environments have not been enabled",
	"settings.sourceControl.error.not.connected.message": "Please head over to <a href='/settings/environments'>environment settings</a> to connect a git repository first to activate this functionality.",
	"settings.sourceControl.saved.error": "Error setting branch",
	"settings.sourceControl.sshRepoUrl": "SSH Repository URL",
	"settings.sourceControl.httpsRepoUrl": "HTTPS Repository URL",
	"settings.sourceControl.sshRepoUrlPlaceholder": "git{'@'}github.com:user/repository.git",
	"settings.sourceControl.httpsRepoUrlPlaceholder": "https://github.com/user/repository.git",
	"settings.sourceControl.sshFormatNotice": "Use SSH format: git{'@'}github.com:user/repository.git",
	"settings.sourceControl.httpsFormatNotice": "Use HTTPS format: https://github.com/user/repository.git",
	"settings.sourceControl.httpsUsername": "Username",
	"settings.sourceControl.httpsUsernamePlaceholder": "Enter your GitHub username",
	"settings.sourceControl.httpsPersonalAccessToken": "Personal Access Token",
	"settings.sourceControl.httpsPersonalAccessTokenPlaceholder": "Enter your Personal Access Token (PAT)",
	"settings.sourceControl.httpsWarningNotice": "{strong} To create one for GitHub: Go to Settings → Developer settings → Personal access tokens → Tokens (classic). Required scopes: {repo} for private repositories or {publicRepo} for public ones. Other providers are also supported.",
	"settings.sourceControl.httpsWarningNotice.strong": "Personal Access Token required:",
	"settings.migrationReport": "Migration Report",
	"settings.migrationReport.title": "Compatibility report for version 2.0.0",
	"settings.migrationReport.description": "{compatibleCount} of your {totalCount} workflows are already compatible with version 2.0.0. Review the details below to understand and resolve any compatibility problems. Learn more about all breaking changes in our",
	"settings.migrationReport.documentationLink": "documentation",
	"settings.migrationReport.refreshButton": "Refresh",
	"settings.migrationReport.tabs.workflowIssues": "Workflow issues",
	"settings.migrationReport.tabs.instanceIssues": "Instance issues",
	"settings.migrationReport.workflowTooltip.critical": "Affected workflows will break after the update. You need to update or replace impacted nodes.",
	"settings.migrationReport.workflowTooltip.medium": "Workflows may still run but could produce incorrect results. Review and test before updating.",
	"settings.migrationReport.workflowTooltip.low": "Behavior might change slightly in specific cases. Most workflows will keep working as expected.",
	"settings.migrationReport.instanceTooltip.critical": "This issue will likely prevent the instance from starting or working correctly after the update. Must be fixed before proceeding.",
	"settings.migrationReport.instanceTooltip.medium": "This may affect performance, compatibility, or connected services. Review and fix if relevant to your setup.",
	"settings.migrationReport.instanceTooltip.low": "Minor configuration change. Doesn't block the update but may cause subtle changes in behavior.",
	"settings.migrationReport.emptyWorkflowIssues.title": "No workflow issues detected",
	"settings.migrationReport.emptyWorkflowIssues.description": "Your workflows are fully compatible with version 2.0.0. You're good to go!",
	"settings.migrationReport.emptyInstanceIssues.title": "No instance issues detected",
	"settings.migrationReport.emptyInstanceIssues.description": "Your instance is fully compatible with version 2.0.0. You're good to go!",
	"settings.migrationReport.documentation": "Documentation",
	"settings.migrationReport.workflowsCount": "{count} Workflow | {count} Workflows",
	"settings.migrationReport.detail.affectedTag": "{count} affected",
	"settings.migrationReport.detail.table.name": "Name",
	"settings.migrationReport.detail.table.status": "Status",
	"settings.migrationReport.detail.table.active": "Active",
	"settings.migrationReport.detail.table.deactivated": "Deactivated",
	"settings.migrationReport.detail.table.nodesAffected": "Nodes affected",
	"settings.migrationReport.detail.table.numberOfExecutions": "Number of executions",
	"settings.migrationReport.detail.table.lastExecuted": "Last executed",
	"settings.migrationReport.detail.table.lastUpdated": "Last updated",
	"settings.migrationReport.detail.table.never": "Never",
	"settings.migrationReport.detail.search.placeholder": "Search workflows...",
	"settings.migrationReport.detail.filter.status.label": "Status",
	"settings.migrationReport.detail.filter.status.all": "All",
	"settings.migrationReport.detail.filter.status.active": "Active",
	"settings.migrationReport.detail.filter.status.deactivated": "Deactivated",
	"showMessage.cancel": "@:_reusableBaseText.cancel",
	"showMessage.ok": "OK",
	"showMessage.showDetails": "Show Details",
	startupError: startupError$1,
	"startupError.message": "Could not connect to server. <a data-action='reload'>Refresh</a> to try again",
	"tagsDropdown.createTag": "Create tag \"{filter}\"",
	"tagsDropdown.manageTags": "Manage tags",
	"tagsDropdown.noMatchingTagsExist": "No matching tags exist",
	"tagsDropdown.noTagsExist": "No tags exist",
	"tagsDropdown.showError.message": "A problem occurred when trying to create the '{name}' tag",
	"tagsDropdown.showError.title": "Could not create tag",
	"tagsDropdown.typeToCreateATag": "Type to create a tag",
	"tagsManager.couldNotDeleteTag": "Could not delete tag",
	"tagsManager.done": "Done",
	"tagsManager.manageTags": "Manage tags",
	"tagsManager.showError.onFetch.title": "Could not fetch tags",
	"tagsManager.showError.onFetch.message": "A problem occurred when trying to fetch tags",
	"tagsManager.showError.onCreate.message": "A problem occurred when trying to create the tag '{escapedName}'",
	"tagsManager.showError.onCreate.title": "Could not create tag",
	"tagsManager.showError.onDelete.message": "A problem occurred when trying to delete the tag '{escapedName}'",
	"tagsManager.showError.onDelete.title": "Could not delete tag",
	"tagsManager.showError.onUpdate.message": "A problem occurred when trying to update the tag '{escapedName}'",
	"tagsManager.showError.onUpdate.title": "Could not update tag",
	"tagsManager.showMessage.onDelete.title": "Tag deleted",
	"tagsManager.showMessage.onUpdate.title": "Tag updated",
	"tagsManager.tagNameCannotBeEmpty": "Tag name cannot be empty",
	"tagsTable.areYouSureYouWantToDeleteThisTag": "Are you sure you want to delete this tag?",
	"tagsTable.cancel": "@:_reusableBaseText.cancel",
	"tagsTable.createTag": "Create tag",
	"tagsTable.deleteTag": "Delete tag",
	"tagsTable.editTag": "Edit Tag",
	"tagsTable.name": "@:_reusableBaseText.name",
	"tagsTable.noMatchingTagsExist": "No matching tags exist",
	"tagsTable.saveChanges": "Save changes?",
	"tagsTable.usage": "Usage",
	"tagsTableHeader.addNew": "Add new",
	"tagsTableHeader.searchTags": "Search Tags",
	"tagsView.inUse": "{count} workflow | {count} workflows",
	"tagsView.notBeingUsed": "Not being used",
	"onboarding.title": "Demo: {name}",
	"template.buttons.goBackButton": "Go back",
	"template.buttons.tryTemplate": "Try template",
	"template.buttons.useThisWorkflowButton": "Use this workflow",
	"template.details.appsInTheCollection": "This collection features",
	"template.details.appsInTheWorkflow": "Apps in this workflow",
	"template.details.by": "by",
	"template.details.categories": "Categories",
	"template.details.created": "Created",
	"template.details.details": "Details",
	"template.details.times": "times",
	"template.details.viewed": "Viewed",
	"template.byAuthor": "By {name}",
	"templates.allCategories": "All Categories",
	"templates.categoriesHeading": "Categories",
	"templates.collection": "Collection",
	"templates.collections": "Collections",
	"templates.collectionsNotFound": "Collection could not be found",
	"templates.connectionWarning": "⚠️ There was a problem fetching workflow templates. Check your internet connection.",
	"templates.heading": "Workflow templates",
	"templates.shareWorkflow": "Share template",
	"templates.noSearchResults": "Nothing found. Try adjusting your search to see more.",
	"templates.searchPlaceholder": "Search workflows",
	"templates.workflows": "Workflows",
	"templates.workflowsNotFound": "Workflow could not be found",
	"templates.card.setupTime": "{count} min setup",
	"templates.card.verified": "Verified",
	"textEdit.edit": "Edit",
	"userActivity.daysAgo": "{count} days ago",
	"userActivity.lastTime": "Last {time}",
	"userActivity.today": "Today",
	"userActivity.yesterday": "Yesterday",
	"timeAgo.daysAgo": "%s days ago",
	"timeAgo.hoursAgo": "%s hours ago",
	"timeAgo.inDays": "in %s days",
	"timeAgo.inHours": "in %s hours",
	"timeAgo.inMinutes": "in %s minutes",
	"timeAgo.inMonths": "in %s months",
	"timeAgo.inOneDay": "in 1 day",
	"timeAgo.inOneHour": "in 1 hour",
	"timeAgo.inOneMinute": "in 1 minute",
	"timeAgo.inOneMonth": "in 1 month",
	"timeAgo.inOneWeek": "in 1 week",
	"timeAgo.inOneYear": "in 1 year",
	"timeAgo.inWeeks": "in %s weeks",
	"timeAgo.inYears": "in %s years",
	"timeAgo.justNow": "Just now",
	"timeAgo.minutesAgo": "%s minutes ago",
	"timeAgo.monthsAgo": "%s months ago",
	"timeAgo.oneDayAgo": "1 day ago",
	"timeAgo.oneHourAgo": "1 hour ago",
	"timeAgo.oneMinuteAgo": "1 minute ago",
	"timeAgo.oneMonthAgo": "1 month ago",
	"timeAgo.oneWeekAgo": "1 week ago",
	"timeAgo.oneYearAgo": "1 year ago",
	"timeAgo.rightNow": "Right now",
	"timeAgo.weeksAgo": "%s weeks ago",
	"timeAgo.yearsAgo": "%s years ago",
	"nodeIssues.credentials.notSet": "Credentials for {type} are not set.",
	"nodeIssues.credentials.notAvailable": "Credential is not available",
	"nodeIssues.credentials.doNotExist": "Credentials with name {name} do not exist for {type}.",
	"nodeIssues.credentials.doNotExist.hint": "You can create credentials with the exact name and then they get auto-selected on refresh..",
	"nodeIssues.credentials.notIdentified": "Credentials with name {name} exist for {type}.",
	"nodeIssues.credentials.notIdentified.hint": "Credentials are not clearly identified. Please select the correct credentials.",
	"nodeIssues.input.missing": "No node connected to required input \"{inputName}\"",
	"ndv.trigger.moreInfo": "More info",
	"ndv.trigger.copiedTestUrl": "Test URL copied to clipboard",
	"ndv.trigger.webhookBasedNode.executionsHelp.inactive": "<b>While building your workflow</b>, click the 'execute step' button, then go to {service} and make an event happen. This will trigger an execution, which will show up in this editor.<br /> <br /> <b>Once you're happy with your workflow</b>, publish it. Then every time there's a matching event in {service}, the workflow will execute. These executions will show up in the <a data-key=\"executions\">executions list</a>, but not in the editor.",
	"ndv.trigger.webhookBasedNode.executionsHelp.active": "<b>While building your workflow</b>, click the 'execute step' button, then go to {service} and make an event happen. This will trigger an execution, which will show up in this editor.<br /> <br /> <b>Your workflow will also execute automatically</b>, since it's activated. Every time there’s a matching event in {service}, this node will trigger an execution. These executions will show up in the <a data-key=\"executions\">executions list</a>, but not in the editor. ",
	"ndv.trigger.webhookNode.listening": "Listening for test event",
	"ndv.trigger.chatTrigger.openChat": "Open Chat Window",
	"ndv.trigger.webhookNode.formTrigger.listening": "Listening for a test form submission",
	"ndv.trigger.webhookBasedNode.listening": "Listening for your trigger event",
	"ndv.trigger.webhookNode.requestHint": "Make a {type} request to:",
	"ndv.trigger.webhookBasedNode.serviceHint": "Go to {service} and create an event",
	"ndv.trigger.webhookBasedNode.chatTrigger.serviceHint": "Send a message in the chat",
	"ndv.trigger.webhookBasedNode.formTrigger.serviceHint": "Submit the test form that just opened in a new tab",
	"ndv.trigger.webhookBasedNode.activationHint.inactive": "Once you’ve finished building your workflow, publish it to have it also listen continuously (you just won’t see those executions here).",
	"ndv.trigger.webhookBasedNode.activationHint.active": "This node will also trigger automatically on new {service} events (but those executions won’t show up here).",
	"ndv.trigger.pollingNode.activationHint.inactive": "Once you’ve finished building your workflow, publish it to have it also check for events regularly (you just won’t see those executions here).",
	"ndv.trigger.pollingNode.activationHint.active": "This node will also trigger automatically on new {service} events (but those executions won’t show up here).",
	"ndv.trigger.executionsHint.question": "When will this node trigger my flow?",
	"ndv.trigger.pollingNode.fetchingEvent": "Fetching event",
	"ndv.trigger.pollingNode.fetchingHint": "This node is looking for an event in {name} that is similar to the one you defined",
	"ndv.trigger.pollingNode.executionsHelp.inactive": "<b>While building your workflow</b>, click the 'fetch' button to fetch a single mock event. It will show up in this editor.<br /><br /><b>Once you're happy with your workflow</b>, publish it. Then n8n will regularly check {service} for new events, and execute this workflow if it finds any. These executions will show up in the <a data-key=\"executions\">executions list</a>, but not in the editor.",
	"ndv.trigger.pollingNode.executionsHelp.active": "<b>While building your workflow</b>, click the 'fetch' button to fetch a single mock event. It will show up in this editor.<br /><br /><b>Your workflow will also execute automatically</b>, since it's activated. n8n will regularly check {app_name} for new events, and execute this workflow if it finds any. These executions will show up in the <a data-key=\"executions\">executions list</a>, but not in the editor.",
	"ndv.trigger.webhookBasedNode.action": "Pull in events from {name}",
	"ndv.search.placeholder.output": "Search output",
	"ndv.search.placeholder.input": "Search selected node",
	"ndv.search.placeholder.input.schema": "Search previous nodes' fields",
	"ndv.search.placeholder.shortcutHint": "Search ({shortcut})",
	"ndv.search.noMatch.title": "No matching items",
	"ndv.search.noNodeMatch.title": "No matching fields",
	"ndv.search.noMatch.description": "Try changing or {link} the filter to see more",
	"ndv.search.noMatch.description.link": "clearing",
	"ndv.search.noMatchSchema.description": "To search field values, switch to table or JSON view. {link}",
	"ndv.search.noMatchSchema.description.link": "Clear filter",
	"ndv.search.items": "{matched} of {count} item | {matched} of {count} items",
	"ndv.render.text": "Text",
	"ndv.render.html": "Html",
	"ndv.render.markdown": "Markdown",
	"ndv.nodeHints.disabled": "This node is disabled, and will simply pass the input through",
	"ndv.nodeHints.alwaysOutputData": "This node will output an empty item if nothing would normally be returned",
	"ndv.nodeHints.alwaysOutputData.short": "output an empty item if nothing would normally be returned",
	"ndv.nodeHints.executeOnce": "This node will execute only once, no matter how many input items there are",
	"ndv.nodeHints.executeOnce.short": "execute only once, no matter how many input items there are",
	"ndv.nodeHints.retryOnFail": "This node will automatically retry if it fails",
	"ndv.nodeHints.retryOnFail.short": "automatically retry if it fails",
	"ndv.nodeHints.continueOnError": "Execution will continue even if the node fails",
	"ndv.nodeHints.continueOnError.short": "continue executing even if the node fails",
	"updatesPanel.andIs": "and is",
	"updatesPanel.behindTheLatest": "behind the latest and greatest n8n",
	"updatesPanel.howToUpdateYourN8nVersion": "How to update your n8n version",
	"updatesPanel.version": "{numberOfVersions} version{howManySuffix}",
	"updatesPanel.weVeBeenBusy": "We’ve been busy ✨",
	"updatesPanel.youReOnVersion": "You’re on {currentVersionName}, which was released",
	"versionCard.breakingChanges": "Breaking changes",
	"versionCard.released": "Released",
	"versionCard.securityUpdate": "Security update",
	"versionCard.thisVersionHasASecurityIssue": "This version has a security issue.<br />It is listed here for completeness.",
	"versionCard.unknown": "unknown",
	"versionCard.version": "Version",
	"workflowActivator.workflowIsActive": "Workflow is already active",
	"workflowActivator.activateWorkflow": "Activate workflow",
	"workflowActivator.deactivateWorkflow": "Deactivate workflow",
	"workflowActivator.active": "Active",
	"workflowActivator.inactive": "Inactive",
	"workflowActivator.showError.title": "Workflow could not be {newStateName}",
	"workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.message": "Please resolve outstanding issues before publishing",
	"workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title": "{count} node has issues, fix them before publishing. | {count} nodes have issues, fix them before publishing.",
	"workflowActivator.showMessage.activeChangedWorkflowIdUndefined.message": "Please save it before activating",
	"workflowActivator.showMessage.activeChangedWorkflowIdUndefined.title": "Problem activating workflow",
	"workflowActivator.showMessage.displayActivationError.message.catchBlock": "Sorry there was a problem requesting the error",
	"workflowActivator.showMessage.displayActivationError.message.errorDataNotUndefined": "The following error occurred on workflow activation:",
	"workflowActivator.showMessage.displayActivationError.message.errorDataUndefined": "Unknown error",
	"workflowActivator.showMessage.displayActivationError.title": "Problem activating workflow",
	"workflowActivator.theWorkflowIsSetToBeActiveBut": "The workflow is activated but could not be started.<br />Click to display error message.",
	"workflowActivator.thisWorkflowHasNoTriggerNodes": "This workflow has no trigger nodes that require activation",
	"workflowActivator.thisWorkflowIsArchived": "This workflow is archived so it cannot be activated",
	"workflowActivator.thisWorkflowHasOnlyOneExecuteWorkflowTriggerNode": "'Execute Workflow Trigger' doesn't require activation as it is triggered by another workflow",
	"workflowActivator.conflictingWebhook.unknownWorkflow": "Unknown workflow (ID: {id})",
	"workflowDetails.share": "Share",
	"workflowDetails.addTag": "Add tag",
	"workflowDetails.chooseOrCreateATag": "Choose or create a tag",
	"workflowProductionChecklist.title": "Production Checklist",
	"workflowProductionChecklist.readOnlyNotice": "Read-only environment. Update these items in development and push changes.",
	"workflowProductionChecklist.ignoreAllConfirmation.title": "Ignore suggested actions globally",
	"workflowProductionChecklist.ignoreAllConfirmation.description": "Turning this off dismisses these suggestions from every workflow",
	"workflowProductionChecklist.ignoreAllConfirmation.confirm": "Ignore for all workflows",
	"workflowProductionChecklist.turnOffWorkflowSuggestions": "Ignore for all workflows",
	"workflowProductionChecklist.evaluations.title": "Test reliability of AI steps",
	"workflowProductionChecklist.evaluations.description": "Use evaluations to check performance on a range of inputs.",
	"workflowProductionChecklist.errorWorkflow.title": "Set up error notifications",
	"workflowProductionChecklist.errorWorkflow.description": "Customize exactly how you’re notified by setting up an error workflow",
	"workflowProductionChecklist.timeSaved.title": "Track time saved",
	"workflowProductionChecklist.timeSaved.description": "Configure the time saved on each run to track the manual work it saves.",
	"workflowExtraction.error.failure": "Sub-workflow conversion failed",
	"workflowExtraction.error.selectionGraph.inputEdgeToNonRoot": "Non-input node '{node}' has a connection from a node outside the current selection.",
	"workflowExtraction.error.selectionGraph.outputEdgeFromNonLeaf": "Non-output node '{node}' has a connection to a node outside the current selection.",
	"workflowExtraction.error.selectionGraph.multipleInputNodes": "Multiple nodes [{nodes}] have inputs from outside the selection.",
	"workflowExtraction.error.selectionGraph.multipleOutputNodes": "Multiple nodes [{nodes}] have outputs to outside the selection.",
	"workflowExtraction.error.selectionGraph.noContinuousPathFromRootToLeaf": "First node '{start}' has no selected path to last node '{end}'.",
	"workflowExtraction.error.selectionGraph.listHeader": "Selection is invalid because of these errors:<br><br>{body}<br><br><a href=\"https://docs.n8n.io/workflows/subworkflow-conversion/\" target=\"_blank\">See docs</a> for more info.",
	"workflowExtraction.error.inputNodeHasMultipleInputBranches": "First node '{node}' has multiple input branches, which sub-workflows do not support.",
	"workflowExtraction.error.outputNodeHasMultipleOutputBranches": "Last node '{node}' has multiple output branches, which sub-workflows do not support.",
	"workflowExtraction.error.triggerSelected": "Triggers cannot be converted to a sub-workflow. Please unselect {nodes}.",
	"workflowExtraction.error.subworkflowCreationFailed": "Sub-workflow creation failed, aborting conversion.",
	"workflowExtraction.success.title": "Created sub-workflow",
	"workflowExtraction.success.message": "<a href=\"{url}\" target=\"_blank\">Open in new Tab</a>",
	"workflowExtraction.modal.title": "Convert to sub-workflow",
	"workflowExtraction.modal.description": "Convert {nodeCount} node to a new sub-workflow | Convert {nodeCount} nodes to a new sub-workflow",
	"workflowHelpers.showMessage.title": "Problem saving workflow",
	"workflowOpen.created": "Created",
	"workflowOpen.filterWorkflows": "Filter by tags",
	"workflowOpen.name": "@:_reusableBaseText.name",
	"workflowOpen.openWorkflow": "Open Workflow",
	"workflowOpen.searchWorkflows": "Search workflows...",
	"workflowOpen.showError.title": "Problem loading workflows",
	"workflowOpen.showMessage.message": "This is the current workflow",
	"workflowOpen.showMessage.title": "Workflow already open",
	"workflowOpen.updated": "Updated",
	"workflowOpen.newWFButton.label": "Add workflow",
	"workflowOpen.newWFButton.title": "Create a new workflow",
	"workflowPreview.showError.arrayEmpty": "Must have an array of nodes",
	"workflowPreview.showError.missingWorkflow": "Missing workflow",
	"workflowPreview.showError.previewError.message": "Unable to preview workflow",
	"workflowPreview.showError.missingExecution": "Missing workflow execution",
	"workflowPreview.executionMode.showError.previewError.message": "Unable to preview workflow execution",
	"workflowPreview.showError.previewError.title": "Preview error",
	"workflowRun.noActiveConnectionToTheServer": "Lost connection to the server",
	"workflowRun.showError.deactivate": "Deactivate workflow to execute",
	"workflowRun.showError.title": "Problem running workflow",
	"workflowRun.showError.payloadTooLarge": "Please execute the whole workflow, rather than just the node. (Existing execution data is too large.)",
	"workflowRun.showError.resolveOutstandingIssues": "Please resolve outstanding issues before you activate it",
	"workflowRun.showError.unsupportedExecutionLogic.title": "Unsupported Execution Logic",
	"workflowRun.showError.unsupportedExecutionLogic.description": "Execution Logic \"v2\" is not supported when filesystem mode is \"default\". Please change the Execution Logic to \"v1\" in workflow settings and update expressions accordingly.",
	"workflowRun.showWarning.noChatResponseNodes.title": "No response node detected",
	"workflowRun.showWarning.noChatResponseNodes.description": "Add a Chat or Respond to Webhook node to send a reply, or change the response mode in the Chat Trigger.",
	"workflowRun.showMessage.message": "Please fix them before executing",
	"workflowRun.showMessage.title": "Workflow has issues",
	"workflowSettings.executionLogic.v0.title": "v0 (legacy)",
	"workflowSettings.executionLogic.v1.title": "v1 (recommended)",
	"workflowSettings.executionLogic.v2.title": "v2 (experimental)",
	"workflowSettings.executionLogic.v0.description": "Executes the first node of each branch, then the second node of each branch, and so on.",
	"workflowSettings.executionLogic.v1.description": "Executes each branch in turn, from topmost to bottommost, completing one branch before starting another.",
	"workflowSettings.executionLogic.v2.description": "Executes each branch in turn, with binaries included directly in the item structure to simplify expressions.",
	"workflowSettings.executionLogic.changed.title": "Execution Logic changed",
	"workflowSettings.executionLogic.changed.description": "Please update expressions that reference binary data to match the new execution logic mode. ",
	"workflowSettings.callerIds": "IDs of workflows that can call this one",
	"workflowSettings.callerIds.placeholder": "e.g. 14, 18",
	"workflowSettings.callerPolicy": "This workflow can be called by",
	"workflowSettings.callerPolicy.options.any": "Any workflow",
	"workflowSettings.callerPolicy.options.workflowsFromPersonalProject": "Workflows created by {projectName}",
	"workflowSettings.callerPolicy.options.workflowsFromTeamProject": "Only workflows in {projectName}",
	"workflowSettings.callerPolicy.options.workflowsFromSameProject": "Only workflows in the same project",
	"workflowSettings.callerPolicy.options.workflowsFromAList": "Selected workflows",
	"workflowSettings.callerPolicy.options.none": "No other workflows",
	"workflowSettings.defaultTimezone": "Default - {defaultTimezoneValue}",
	"workflowSettings.defaultTimezoneNotValid": "Default Timezone not valid",
	"workflowSettings.errorWorkflow": "Error Workflow (to notify when this one errors)",
	"workflowSettings.executionLogic": "Execution Logic",
	"workflowSettings.binaryMode": "Binary Mode",
	"workflowSettings.helpTexts.errorWorkflow": "A second workflow to run if the current one fails.<br />The second workflow should have an 'Error Trigger' node.",
	"workflowSettings.helpTexts.executionTimeout": "How long the workflow should wait before timing out",
	"workflowSettings.helpTexts.executionTimeoutToggle": "Whether to cancel workflow execution after a defined time",
	"workflowSettings.helpTexts.saveDataErrorExecution": "Whether to save data of executions that fail",
	"workflowSettings.helpTexts.saveDataSuccessExecution": "Whether to save data of executions that finish successfully",
	"workflowSettings.helpTexts.saveExecutionProgress": "Whether to save data after each node execution. This allows you to resume from where execution stopped if there is an error, but may increase latency.",
	"workflowSettings.helpTexts.saveManualExecutions": "Whether to save data of executions that are started manually from the editor",
	"workflowSettings.helpTexts.timezone": "The timezone in which the workflow should run. Used by 'cron' node, for example.",
	"workflowSettings.helpTexts.workflowCallerIds": "The IDs of the workflows that are allowed to execute this one (using an ‘execute workflow’ node). The ID can be found at the end of the workflow’s URL. Separate multiple IDs by commas.",
	"workflowSettings.helpTexts.workflowCallerPolicy": "Workflows that are allowed to call this workflow using the Execute Workflow node",
	"workflowSettings.hours": "hours",
	"workflowSettings.minutes": "minutes",
	"workflowSettings.name": "Workflow name",
	"workflowSettings.noWorkflow": "- No Workflow -",
	"workflowSettings.save": "@:_reusableBaseText.save",
	"workflowSettings.saveDataErrorExecution": "Save failed production executions",
	"workflowSettings.saveDataErrorExecutionOptions.defaultSave": "Default - {defaultValue}",
	"workflowSettings.saveDataErrorExecutionOptions.doNotSave": "Do not save",
	"workflowSettings.saveDataErrorExecutionOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.saveDataSuccessExecution": "Save successful production executions",
	"workflowSettings.saveDataSuccessExecutionOptions.defaultSave": "Default - {defaultValue}",
	"workflowSettings.saveDataSuccessExecutionOptions.doNotSave": "Do not save",
	"workflowSettings.saveDataSuccessExecutionOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.saveExecutionProgress": "Save execution progress",
	"workflowSettings.saveExecutionProgressOptions.defaultSave": "Default - {defaultValue}",
	"workflowSettings.saveExecutionProgressOptions.doNotSave": "Do not save",
	"workflowSettings.saveExecutionProgressOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.saveManualExecutions": "Save manual executions",
	"workflowSettings.saveManualOptions.defaultSave": "Default - {defaultValue}",
	"workflowSettings.saveManualOptions.doNotSave": "Do not save",
	"workflowSettings.saveManualOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.seconds": "seconds",
	"workflowSettings.selectOption": "Select Option",
	"workflowSettings.settingsFor": "Workflow settings for {workflowName} (#{workflowId})",
	"workflowSettings.showError.saveSettings1.errorMessage": "Timeout is activated but set to 0",
	"workflowSettings.showError.saveSettings1.message": "There was a problem saving the settings",
	"workflowSettings.showError.saveSettings1.title": "Problem saving settings",
	"workflowSettings.showError.saveSettings2.errorMessage": "Maximum Timeout is: {hours} hours, {minutes} minutes, {seconds} seconds",
	"workflowSettings.showError.saveSettings2.message": "The timeout is longer than allowed",
	"workflowSettings.showError.saveSettings2.title": "Problem saving settings",
	"workflowSettings.showError.saveSettings3.title": "Problem saving settings",
	"workflowSettings.showError.fetchSettings.title": "Problem fetching settings",
	"workflowSettings.showMessage.saveSettings.title": "Workflow settings saved",
	"workflowSettings.timeoutAfter": "Timeout After",
	"workflowSettings.timeoutWorkflow": "Timeout Workflow",
	"workflowSettings.executionTimeout": "Timeout Workflow",
	"workflowSettings.tags": "Tags",
	"workflowSettings.timezone": "Timezone",
	"workflowSettings.credentialResolver": "Dynamic credential resolver",
	"workflowSettings.credentialResolver.placeholder": "Select resolver",
	"workflowSettings.credentialResolver.createNew": "Create new resolver",
	"workflowSettings.credentialResolver.edit": "Edit resolver",
	"workflowSettings.credentialResolver.none": "Default - None",
	"workflowSettings.helpTexts.credentialResolver": "The resolver uses the identity of the user triggering the workflow to pick the right account for all dynamic credentials in this workflow.",
	"credentialResolver.addNew": "Add Resolver",
	"credentialResolver.view.title": "Credential resolvers",
	"credentialResolver.view.description": "Resolvers take an incoming user identity and pick the account used by dynamic credentials when the workflow runs. Select a resolver in Workflow settings.",
	"credentialResolver.view.learnMore": "You can learn more in the ",
	"credentialResolver.action.edit": "Edit",
	"credentialResolver.action.delete": "Delete",
	"credentialResolver.item.updated": "Last updated",
	"credentialResolver.item.created": "Created",
	"credentialResolverEdit.title.create": "Create Credential Resolver",
	"credentialResolverEdit.title.edit": "Edit Credential Resolver",
	"credentialResolverEdit.saveSuccess.title": "Credential Resolver was saved successfully",
	"credentialResolverEdit.deleteSuccess.title": "Credential Resolver was deleted successfully",
	"credentialResolverEdit.defaultName": "New resolver",
	"credentialResolverEdit.type.label": "Type",
	"credentialResolverEdit.type.placeholder": "Select resolver type",
	"credentialResolverEdit.config.label": "Configuration",
	"credentialResolverEdit.error.missingRequiredFields": "Please fill in all required fields",
	"credentialResolverEdit.error.save": "Failed to save credential resolver",
	"credentialResolverEdit.error.delete": "Failed to delete credential resolver",
	"credentialResolverEdit.error.loadTypes": "Failed to load resolver types",
	"credentialResolverEdit.delete": "Delete",
	"credentialResolverEdit.confirmMessage.deleteResolver.headline": "Delete Credential Resolver?",
	"credentialResolverEdit.confirmMessage.deleteResolver.message": "Are you sure you want to delete the credential resolver \"{savedResolverName}\"?",
	"credentialResolverEdit.confirmMessage.deleteResolver.confirmButtonText": "Yes, delete",
	"credentialResolverEdit.sidebar.configuration": "Configuration",
	"credentialResolverEdit.sidebar.details": "Details",
	"credentialResolverEdit.details.id": "ID",
	"credentialResolverEdit.details.notSaved": "Not saved yet",
	"credentialResolverEdit.clearCredentials.label": "Clear credentials",
	"credentialResolverEdit.clearCredentials.placeholder": "Select an option",
	"credentialResolverEdit.clearCredentials.yes": "Yes",
	"credentialResolverEdit.clearCredentials.no": "No",
	"credentialResolverEdit.clearCredentials.error.required": "Clear credentials selection is required",
	"credentialResolverEdit.clearCredentials.warning": "When making changes to a resolver, it is advised to clear the existing credentials for that resolver. Please choose whether to take that action.",
	"workflowSettings.timeSavedPerExecution": "Estimated time saved",
	"workflowSettings.timeSavedPerExecution.hint": "Minutes per production execution",
	"workflowSettings.timeSavedPerExecution.tooltip": "Total time savings are summarised in the Overview page.",
	"workflowSettings.timeSavedPerExecution.minutesSaved": "Minutes saved",
	"workflowSettings.timeSavedPerExecution.tab.fixed": "Fixed",
	"workflowSettings.timeSavedPerExecution.tab.conditional": "Conditional",
	"workflowSettings.timeSavedPerExecution.noNodesDetected": "No time saved nodes detected",
	"workflowSettings.timeSavedPerExecution.noNodesDetected.hint": "Add one or more time saved nodes to calculate time saved dynamically",
	"workflowSettings.timeSavedPerExecution.nodesDetected": "Active - {count} time saved nodes currently setup",
	"workflowSettings.timeSavedPerExecution.nodesDetected.hint": "Time saved is calculated dynamically based on each execution",
	"workflowSettings.timeSavedPerExecution.nodesDetected.addMore": "Add more time saved nodes",
	"workflowSettings.timeSavedPerExecution.fixedTabWarning": "Time saved for this workflow is tracked using a fixed value. Any Time Saved nodes in this workflow are ignored with this setting.",
	"workflowSettings.timeSavedPerExecution.fixedTabWarning.link": "time saved nodes",
	"workflowSettings.availableInMCP": "Available in MCP",
	"workflowSettings.availableInMCP.tooltip": "Make this workflow visible to AI Agents through n8n MCP",
	"workflowSettings.toggleMCP.error.title": "Error updating MCP settings",
	"workflowSettings.toggleMCP.notFoundError": "Workflow not found",
	"workflowHistory.title": "Version History",
	"workflowHistory.content.actions": "Actions",
	"workflowHistory.item.id": "ID: {id}",
	"workflowHistory.item.createdAt": "{date} at {time}",
	"workflowHistory.item.savedAtLabel": "Saved:",
	"workflowHistory.item.publishedAtLabel": "Last published by",
	"workflowHistory.item.actions.restore": "Restore this version",
	"workflowHistory.item.actions.publish": "Publish this version",
	"workflowHistory.item.actions.unpublish": "Unpublish workflow",
	"workflowHistory.item.actions.clone": "Clone to new workflow",
	"workflowHistory.item.actions.open": "Open version in new tab",
	"workflowHistory.item.actions.download": "Download",
	"workflowHistory.item.unsaved.title": "Unsaved version",
	"workflowHistory.item.latest": "Latest saved",
	"workflowHistory.item.active": "Published",
	"workflowHistory.item.publishedBy": "Published by",
	"workflowHistory.item.currentChanges": "Current changes",
	"workflowHistory.limitDay": "Version history is limited to 1 day",
	"workflowHistory.limitDays": "Version history is limited to {days} days",
	"workflowHistory.limitHour": "Version history is limited to 1 hour",
	"workflowHistory.limitHours": "Version history is limited to {hours} hours",
	"workflowHistory.upgrade": "{link} to activate full history",
	"workflowHistory.upgrade.link": "Upgrade plan",
	"workflowHistory.action.error.title": "Failed to {action}",
	"workflowHistory.action.restore.modal.title": "Restore previous workflow version?",
	"workflowHistory.action.restore.modal.subtitle": "Your workflow will revert to the version from {date}",
	"workflowHistory.action.restore.modal.publishedNote": "This will not affect the published version",
	"workflowHistory.action.restore.modal.button.restore": "Restore",
	"workflowHistory.action.restore.modal.button.cancel": "Cancel",
	"workflowHistory.action.restore.success.title": "Successfully restored workflow version",
	"workflowHistory.action.restore.alreadyRestored": "Workflow version is already restored",
	"workflowHistory.action.clone.success.title": "Successfully cloned workflow version",
	"workflowHistory.action.clone.success.message": "Open cloned workflow in a new tab",
	"workflowHistory.action.unpublish.success.title": "Workflow unpublished successfully",
	"workflowHistory.action.unpublish.notAvailable": "This workflow has no published version to unpublish",
	"workflowHistory.action.unpublish.modal.title": "Unpublish {versionName}",
	"workflowHistory.action.unpublish.modal.description": "This will prevent all production executions to this workflow until you publish again.",
	"workflowHistory.action.unpublish.modal.button.unpublish": "Unpublish",
	"workflowHistory.button.tooltip.empty": "This workflow currently has no history to view. Once you've made your first save, you'll be able to view previous versions",
	"workflowHistory.button.tooltip": "Workflow history to view and restore previous versions of your workflows",
	"workflowHistory.group.unnamedVersions": "1 version | {count} versions",
	"workflowHistory.publishModal.title": "Publish {versionName}",
	"workflows.heading": "Workflows",
	"workflows.add": "Add workflow",
	"workflows.publish": "Publish",
	"workflows.published": "Published",
	"workflows.publish.permissionDenied": "You don't have permission to publish this workflow",
	"workflows.project.add": "Add workflow to project",
	"workflows.item.open": "Open",
	"workflows.item.share": "Share...",
	"workflows.item.duplicate": "Duplicate",
	"workflows.item.delete": "Delete",
	"workflows.item.archive": "Archive",
	"workflows.item.unarchive": "Unarchive",
	"workflows.item.move": "Move",
	"workflows.item.changeOwner": "Change owner",
	"workflows.item.updated": "Last updated",
	"workflows.item.created": "Created",
	"workflows.item.readonly": "Read only",
	"workflows.item.archived": "Archived",
	"workflows.item.availableInMCP": "Available in MCP",
	"workflows.dynamic.tooltip": "This workflow resolves credentials at runtime based on who executes it.",
	"workflows.dynamic.tooltipTitle": "Dynamic credentials",
	"workflows.dynamic.resolverMissing": "Credential resolver missing",
	"workflows.item.enableMCPAccess": "Enable MCP access",
	"workflows.item.disableMCPAccess": "Remove MCP access",
	"workflows.itemSuggestion.try": "Try template",
	"workflows.templateRecoV2.starterTemplates": "Starter templates",
	"workflows.templateRecoV2.seeMoreStarterTemplates": "See more starter templates",
	"workflows.templateRecoV2.popularTemplates": "Popular templates",
	"workflows.templateRecoV2.seeMorePopularTemplates": "See more popular templates",
	"workflows.templateRecoV2.tutorials": "Tutorials",
	"workflows.templateRecoV2.loadingTemplates": "Loading templates...",
	"workflows.templateRecoV2.useTemplate": "Use template",
	"workflows.templateRecoV2.exploreTemplates": "Or explore templates to get inspired and learn fast:",
	"templates.featured.loading": "Loading templates...",
	"templates.featured.seeMore": "See more templates",
	"workflows.search.placeholder": "Search",
	"workflows.filters": "Filters",
	"workflows.filters.tags": "Tags",
	"workflows.filters.status": "Status",
	"workflows.filters.status.all": "All",
	"workflows.filters.status.active": "Published",
	"workflows.filters.status.deactivated": "Unpublished",
	"workflows.filters.showArchived": "Show archived workflows",
	"workflows.filters.ownedBy": "Owned by",
	"workflows.filters.sharedWith": "Shared with",
	"workflows.filters.apply": "Apply filters",
	"workflows.filters.reset": "Reset all",
	"workflows.filters.active": "Some workflows may be hidden since filters are applied.",
	"workflows.filters.active.shortText": "Filters are applied.",
	"workflows.filters.active.reset": "Remove filters",
	"workflows.sort.lastUpdated": "Sort by last updated",
	"workflows.sort.lastCreated": "Sort by last created",
	"workflows.sort.nameAsc": "Sort by name (A-Z)",
	"workflows.sort.nameDesc": "Sort by name (Z-A)",
	"workflows.noResults": "No workflows found",
	"workflows.noResults.withSearch.switchToShared.preamble": "some workflows may be",
	"workflows.noResults.withSearch.switchToShared.link": "hidden",
	"workflows.empty.heading": "Welcome, {name}!",
	"workflows.empty.heading.userNotSetup": "Welcome!",
	"workflows.empty.headingWithIcon": "👋 Welcome, {name}!",
	"workflows.empty.headingWithIcon.userNotSetup": "👋 Welcome!",
	"workflows.empty.description": "Create your first workflow",
	"workflows.empty.description.readOnlyEnv": "No workflows here yet",
	"workflows.empty.description.noPermission": "There are currently no workflows to view",
	"workflows.empty.startFromScratch": "Start from scratch",
	"workflows.empty.startWithTemplate": "Start with a template",
	"workflows.empty.browseTemplates": "Explore workflow templates",
	"workflows.empty.learnN8n": "Learn n8n",
	"workflows.empty.button.disabled.tooltip": "Your current role in the project does not allow you to create workflows",
	"workflows.empty.easyAI": "Test a simple AI Agent example",
	"workflows.empty.shared-with-me": "No {resource} has been shared with you",
	"workflows.empty.shared-with-me.link": "<a href=\"#\">Back to Personal</a>",
	"workflows.empty.readyToRun": "Run live demo",
	"workflows.list.easyAI": "Test the power of AI in n8n with this simple AI Agent Workflow",
	"workflows.list.error.fetching.one": "Error fetching workflow",
	"workflows.list.error.fetching": "Error fetching workflows",
	"workflows.shareModal.title": "Share '{name}'",
	"workflows.shareModal.title.static": "Shared with {projectName}",
	"workflows.shareModal.select.placeholder": "Add users...",
	"workflows.shareModel.select.notFound": "No matching users",
	"workflows.shareModal.list.delete": "Remove access",
	"workflows.shareModal.list.delete.confirm.title": "Remove {name}'s access?",
	"workflows.shareModal.list.delete.confirm.lastUserWithAccessToCredentials.message": "If you do this, the workflow will lose access to {name}’s credentials. <strong>Nodes that use those credentials will stop working</strong>.",
	"workflows.shareModal.list.delete.confirm.confirmButtonText": "Remove access",
	"workflows.shareModal.list.delete.confirm.cancelButtonText": "Cancel",
	"workflows.shareModal.onSave.success.title": "Sharing updated",
	"workflows.shareModal.onSave.error.title": "There was a problem saving sharing settings",
	"workflows.shareModal.saveBeforeClose.title": "Save sharing changes?",
	"workflows.shareModal.saveBeforeClose.message": "You have unsaved changes. Do you want to save them before closing?",
	"workflows.shareModal.saveBeforeClose.confirmButtonText": "Save",
	"workflows.shareModal.saveBeforeClose.cancelButtonText": "Close without saving",
	"workflows.shareModal.save": "Save",
	"workflows.shareModal.changesHint": "You made changes",
	"workflows.shareModal.info.sharee": "Only {workflowOwnerName} or users with workflow sharing permission can change who this workflow is shared with",
	"workflows.shareModal.info.sharee.fallback": "the owner",
	"workflows.shareModal.info.members": "This workflow is owned by the {projectName} project which currently has {members} with access to this workflow.",
	"workflows.shareModal.info.members.number": "{number} member | {number} members",
	"workflows.shareModal.role.editor": "@:_reusableBaseText.roles.editor",
	"workflows.roles.editor": "@:_reusableBaseText.roles.editor",
	"workflows.concurrentChanges.confirmMessage.title": "Workflow was changed by someone else",
	"workflows.concurrentChanges.confirmMessage.message": "Someone saved this workflow while you were editing it. You can <a href=\"{url}\" target=\"_blank\">view their version</a> (in new tab).<br/><br/>Overwrite their changes with yours?",
	"workflows.concurrentChanges.confirmMessage.cancelButtonText": "Cancel",
	"workflows.concurrentChanges.confirmMessage.confirmButtonText": "Overwrite and Save",
	"workflows.create.personal.toast.title": "Workflow successfully created inside your personal space",
	"workflows.create.project.toast.title": "Workflow successfully created in {projectName}",
	"workflows.create.folder.toast.title": "Workflow successfully created in \"{projectName}\", within \"{folderName}\"",
	"workflows.create.project.toast.text": "All members from {projectName} will have access to this workflow.",
	"workflows.autodeactivated": "Workflow auto-deactivated",
	"workflows.ai.starter.collection.callout": "Learn how to build AI Agents in n8n",
	"workflows.ai.starter.collection.card": "Learn how to build AI Agents",
	"workflows.ai.starter.collection.folder.name": "🎁 n8n basics: Learn how to build Agents in n8n",
	"workflows.ai.starter.collection.error": "Error loading AI Agent starter collection. Please try again later.",
	"workflows.readyToRunWorkflows.card": "Try a workflow - no setup neeeded",
	"workflows.readyToRunWorkflows.card2": "Run a workflow",
	"workflows.readyToRunWorkflows.card3": "See n8n in action",
	"workflows.readyToRunWorkflows.callout": "See n8n in action - no setup needed",
	"workflows.readyToRunWorkflows.callout2": "Run a workflow",
	"workflows.readyToRunWorkflows.callout3": "See n8n in action",
	"workflows.readyToRunWorkflows.cta": "Run a workflow",
	"workflows.readyToRunWorkflows.folder.name": "🚀 Ready-to-run workflows",
	"workflows.readyToRunWorkflows.error": "Error loading n8n collection. Please try again later.",
	"workflows.archivedOnly.hint": "Archived workflows are hidden in this view. {link}",
	"workflows.archivedOnly.hint.link": "Update filters",
	"workflowSelectorParameterInput.createNewSubworkflow.name": "My Sub-Workflow",
	"workflows.publishModal.title": "Publish workflow",
	"workflows.publishModal.noTriggerMessage": "This workflow has no trigger nodes that require publishing",
	"workflows.publishModal.versionNameLabel": "Version name",
	"workflows.publishModal.descriptionPlaceholder": "Describe changes (optional)",
	"workflows.publishModal.noChanges": "No changes to publish",
	"workflows.publishModal.changes": "New changes to publish",
	"workflows.publishModal.lastPublished": "Last published by {author}, {date} at {time}",
	"importCurlModal.title": "Import cURL command",
	"importCurlModal.input.label": "cURL Command",
	"importCurlModal.input.placeholder": "Paste the cURL command here",
	"ImportCurlModal.notice.content": "This will overwrite any changes you have already made to the current node",
	"importCurlModal.button.label": "Import",
	"importCurlParameter.label": "Import cURL",
	"importCurlParameter.showError.invalidCurlCommand.title": "Couldn’t import cURL command",
	"importCurlParameter.showError.invalidCurlCommand.message": "This command is in an unsupported format",
	"importCurlParameter.showError.invalidProtocol1.title": "Use the {node} node",
	"importCurlParameter.showError.invalidProtocol2.title": "Invalid Protocol",
	"importCurlParameter.showError.invalidProtocol.message": "The HTTP node doesn’t support {protocol} requests",
	"variables.heading": "Variables",
	"variables.add": "Add variable",
	"variables.add.unavailable": "Upgrade plan to keep using variables",
	"variables.add.unavailable.empty": "Upgrade plan to start using variables",
	"variables.add.onlyOwnerCanCreate": "Only owner can create variables",
	"variables.add.button.label": "Create variable",
	"variables.empty.heading": "{name}, let's set up a variable",
	"variables.empty.heading.userNotSetup": "Set up a variable",
	"variables.empty.description": "Variables can be used to store data that can be referenced easily across multiple workflows.",
	"variables.empty.button": "Add first variable",
	"variables.empty.button.disabled.tooltip": "Your current role in the project does not allow you to create variables",
	"variables.empty.notAllowedToCreate.heading": "{name}, start using variables",
	"variables.empty.notAllowedToCreate.description": "Ask project editors or instance admin to create the variables you need. Once configured, you can utilize them in your workflows using the syntax $vars.MY_VAR.",
	"variables.filters.active": "Some variables may be hidden since filters are applied.",
	"variables.filters.active.reset": "Remove filters",
	"variables.noResults": "No variables found",
	"variables.sort.nameAsc": "Sort by name (A-Z)",
	"variables.sort.nameDesc": "Sort by name (Z-A)",
	"variables.table.key": "Key",
	"variables.table.value": "Value",
	"variables.table.usage": "Usage Syntax",
	"variables.table.scope": "Scope",
	"variables.table.scope.global": "Global",
	"variables.editing.key.placeholder": "Enter a name",
	"variables.editing.value.placeholder": "Enter a value",
	"variables.editing.key.error.regex": "This field may contain only letters, numbers, and underscores",
	"variables.row.button.save": "Save",
	"variables.row.button.cancel": "Cancel",
	"variables.row.button.edit": "Edit",
	"variables.row.button.edit.onlyRoleCanEdit": "Only instance owner and admins can edit variables",
	"variables.row.button.delete": "Delete",
	"variables.row.button.delete.onlyRoleCanDelete": "Only instance owner and can delete variables",
	"variables.row.usage.copiedToClipboard": "Copied to clipboard",
	"variables.row.usage.copyToClipboard": "Copy to clipboard",
	"variables.search.placeholder": "Search variables...",
	"variables.delete.successful.message": "Variable {variableName} deleted",
	"variables.errors.save": "Error while saving variable",
	"variables.errors.delete": "Error while deleting variable",
	"variables.modals.deleteConfirm.title": "Delete variable",
	"variables.modals.deleteConfirm.message": "Are you sure you want to delete the variable \"{name}\"? This cannot be undone.",
	"variables.modals.deleteConfirm.confirmButton": "Delete",
	"variables.modals.deleteConfirm.cancelButton": "Cancel",
	"variables.modal.title.create": "New variable",
	"variables.modal.title.edit": "Edit variable",
	"variables.modal.key.label": "Key",
	"variables.modal.value.label": "Value",
	"variables.modal.scope.label": "Scope",
	"variables.modal.scope.global": "Global",
	"variables.modal.scope.all": "All",
	"variables.modal.button.cancel": "Cancel",
	"variables.modal.button.save": "Save",
	"variables.modal.error.keyExistsInProject": "The key already exists in this project",
	"variables.modal.warning.globalKeyExists": "The same key already exists in global scope. This variable will override the global variable inside the project",
	"contextual.credentials.sharing.unavailable.title": "Upgrade to collaborate",
	"contextual.credentials.sharing.unavailable.title.cloud": "Upgrade to collaborate",
	"contextual.credentials.sharing.unavailable.description": "You can share credentials with others when you upgrade your plan.",
	"contextual.credentials.sharing.unavailable.description.cloud": "You can share credentials with others when you upgrade your plan.",
	"contextual.credentials.sharing.unavailable.button": "View plans",
	"contextual.credentials.sharing.unavailable.button.cloud": "Upgrade now",
	"contextual.workflows.sharing.title": "Sharing",
	"contextual.workflows.sharing.unavailable.title": "Sharing",
	"contextual.workflows.sharing.unavailable.title.cloud": "Upgrade to collaborate",
	"contextual.workflows.sharing.unavailable.description.modal": "You can collaborate with others on workflows when you upgrade your plan.",
	"contextual.workflows.sharing.unavailable.description.modal.cloud": "You can collaborate with others on workflows when you upgrade your plan.",
	"contextual.workflows.sharing.unavailable.description.tooltip": "You can collaborate with others on workflows when you upgrade your plan. {action}",
	"contextual.workflows.sharing.unavailable.description.tooltip.cloud": "You can collaborate with others on workflows when you upgrade your plan. {action}",
	"contextual.workflows.sharing.unavailable.button": "View plans",
	"contextual.workflows.sharing.unavailable.button.cloud": "Upgrade now",
	"contextual.variables.unavailable.title": "Upgrade to unlock variables",
	"contextual.variables.unavailable.title.cloud": "Available on Pro plan",
	"contextual.variables.unavailable.description": "Variables can be used to store and access data across workflows. Reference them in n8n using the prefix <code>$vars</code> (e.g. <code>$vars.myVariable</code>). Variables are immutable and cannot be modified within your workflows.<br/><a href=\"https://docs.n8n.io/code/variables/\" target=\"_blank\">Learn more in the docs.</a>",
	"contextual.variables.unavailable.button": "View plans",
	"contextual.variables.unavailable.button.cloud": "Upgrade now",
	"contextual.users.settings.unavailable.title": "Upgrade to add users",
	"contextual.users.settings.unavailable.title.cloud": "Upgrade to add users",
	"contextual.users.settings.unavailable.description": "Create multiple users on our higher plans and share workflows and credentials to collaborate",
	"contextual.users.settings.unavailable.description.cloud": "Create multiple users on our higher plans and share workflows and credentials to collaborate",
	"contextual.users.settings.unavailable.button": "View plans",
	"contextual.users.settings.unavailable.button.cloud": "Upgrade now",
	"contextual.feature.unavailable.title": "Available on the Enterprise Plan",
	"contextual.feature.unavailable.title.cloud": "Available on the Pro Plan",
	"dataTable.dataTables": "Data tables",
	"dataTable.empty.label": "You don't have any data tables yet",
	"dataTable.empty.description": "Use data tables to persist execution results, share data between workflows, and track metrics for evaluation.",
	"dataTable.empty.button.disabled.tooltip": "Your current role in the project does not allow you to create data tables",
	"dataTable.card.size": "{size}MB",
	"dataTable.card.column.count": "{count} column | {count} columns",
	"dataTable.add.title": "Create new data table",
	"dataTable.add.button.label": "Create data table",
	"dataTable.add.fromScratch": "From scratch",
	"dataTable.add.importCsv": "Import CSV",
	"dataTable.add.input.name.label": "Data table name",
	"dataTable.add.input.name.placeholder": "Enter data table name",
	"dataTable.add.error": "Error creating data table",
	"dataTable.delete.confirm.title": "Delete data table",
	"dataTable.upload.uploading": "Uploading and processing CSV file...",
	"dataTable.upload.selectFile": "Waiting for file selection...",
	"dataTable.upload.dropOrClick": "Drop file here or click to upload",
	"dataTable.upload.csvOnly": "CSV files only",
	"dataTable.upload.hasHeaders": "My CSV file contains a header row",
	"dataTable.upload.uploadButton": "Upload CSV",
	"dataTable.upload.success": "'{fileName}' has been uploaded successfully. We found {columnCount} column and {rowCount} row | '{fileName}' has been uploaded successfully. We found {columnCount} columns and {rowCount} rows",
	"dataTable.upload.error": "Error uploading CSV file",
	"dataTable.import.columnsFound": "Columns found",
	"dataTable.import.columnName": "Column Name",
	"dataTable.import.columnsDescription": "Review and adjust the column names and types detected from your CSV file",
	"dataTable.import.columnType": "Data Type",
	"dataTable.import.columnNamePlaceholder": "Enter column name",
	"dataTable.import.duplicateColumnName": "Column name must be unique",
	"dataTable.import.systemColumnName": "{columnName} is a reserved column",
	"dataTable.import.invalidColumnName": "Only alphabetical and non-leading numbers and underscores allowed",
	"dataTable.delete.confirm.message": "Are you sure you want to delete the data table '{name}'? This action cannot be undone.",
	"dataTable.delete.error": "Error deleting data table",
	"dataTable.download.csv": "Download CSV",
	"dataTable.download.error": "Failed to download data table",
	"dataTable.rename.error": "Error renaming data table",
	"dataTable.getDetails.error": "Error fetching data table details",
	"dataTable.notFound": "Data table not found",
	"dataTable.noColumns.heading": "No columns yet",
	"dataTable.noColumns.description": "Add columns to start storing data in this data table.",
	"dataTable.noColumns.button.label": "Add first column",
	"dataTable.addColumn.label": "Add Column",
	"dataTable.addColumn.nameInput.label": "@:_reusableBaseText.name",
	"dataTable.addColumn.nameInput.placeholder": "Enter column name",
	"dataTable.addColumn.typeInput.label": "@:_reusableBaseText.type",
	"dataTable.addColumn.error": "Error adding column",
	"dataTable.column.alreadyExistsError": "This column already exists",
	"dataTable.moveColumn.error": "Error moving column",
	"dataTable.deleteColumn.error": "Error deleting column",
	"dataTable.deleteColumn.confirm.title": "Delete column",
	"dataTable.deleteColumn.confirm.message": "Are you sure you want to delete the column '{name}'? This action cannot be undone.",
	"dataTable.addColumn.invalidName.error": "Invalid column name",
	"dataTable.addColumn.invalidName.description": "Column names must begin with a letter and can only include letters, numbers, or underscores",
	"dataTable.renameColumn.label": "Rename column",
	"dataTable.renameColumn.error": "Error renaming column",
	"dataTable.fetchContent.error": "Error fetching data table content",
	"dataTable.addRow.label": "Add Row",
	"dataTable.addRow.error": "Error adding row",
	"dataTable.updateRow.error": "Error updating row",
	"dataTable.deleteRows.title": "Delete Rows",
	"dataTable.deleteRows.confirmation": "Are you sure you want to delete {count} row? | Are you sure you want to delete {count} rows?",
	"dataTable.deleteRows.error": "Error deleting rows",
	"dataTable.banner.storageLimitWarning.message": "{usage} of data tables storage used. Delete data to avoid errors",
	"dataTable.banner.storageLimitError.message": "{usage} of data tables storage used, operations may fail. Delete data to avoid errors",
	"dataTable.error.tableNotInitialized": "Table not initialized",
	"dataTable.noRows": "No rows",
	"dataTable.filters.isNull": "Is null",
	"dataTable.filters.isNotNull": "Is not null",
	"dataTable.filters.isEmpty": "Is empty",
	"dataTable.filters.isNotEmpty": "Is not empty",
	"dataTable.filters.between": "Between",
	"dataTable.filters.true": "True",
	"dataTable.filters.false": "False",
	"dataTable.filters.greaterThan": "Greater than",
	"dataTable.filters.greaterThanOrEqual": "Greater than or equal",
	"dataTable.filters.lessThan": "Less than",
	"dataTable.filters.lessThanOrEqual": "Less than or equal",
	"dataTable.addColumn.systemColumnDescription": "This is a system column, choose a different name",
	"dataTable.addColumn.alreadyExistsDescription": "Column name already exists, choose a different name",
	"dataTable.addColumn.testingColumnDescription": "This column is used for testing, choose a different name",
	"dataTable.search.dateSearchInfo": "Date searches use UTC format, while the table displays dates in your local timezone",
	"dataTable.cell.oversized": "Value too large to display",
	"dataTable.cell.oversized.tooltip": "The value can be modified using the data table node",
	"settings.ldap": "LDAP",
	"settings.ldap.note": "LDAP allows users to authenticate with their centralized account. It's compatible with services that provide an LDAP interface like Active Directory, Okta and Jumpcloud.",
	"settings.ldap.infoTip": "Learn more about <a href='https://docs.n8n.io/user-management/ldap/' target='_blank'>LDAP in the Docs</a>",
	"settings.ldap.save": "Save connection",
	"settings.ldap.connectionTestError": "Problem testing LDAP connection",
	"settings.ldap.connectionTest": "LDAP connection tested",
	"settings.ldap.runSync.title": "LDAP synchronization done",
	"settings.ldap.runSync.showError.message": "Problem during synchronization. Check the logs",
	"settings.ldap.updateConfiguration": "LDAP configuration updated",
	"settings.ldap.testingConnection": "Testing connection",
	"settings.ldap.testConnection": "Test connection",
	"settings.ldap.synchronizationTable.column.status": "Status",
	"settings.ldap.synchronizationTable.column.endedAt": "Ended At",
	"settings.ldap.synchronizationTable.column.runMode": "Run Mode",
	"settings.ldap.synchronizationTable.column.runTime": "Run Time",
	"settings.ldap.synchronizationTable.column.details": "Details",
	"settings.ldap.synchronizationTable.empty.message": "Test synchronization to preview updates",
	"settings.ldap.dryRun": "Test synchronization",
	"settings.ldap.synchronizeNow": "Run synchronization",
	"settings.ldap.synchronizationError": "LDAP Synchronization Error",
	"settings.ldap.configurationError": "LDAP Configuration Error",
	"settings.ldap.usersScanned": "Users scanned {scanned}",
	"settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText": "No",
	"settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText": "Yes, disable it",
	"settings.ldap.confirmMessage.beforeSaveForm.headline": "Are you sure you want to disable LDAP login?",
	"settings.ldap.confirmMessage.beforeSaveForm.message": "If you do so, all LDAP users will be converted to email users.",
	"settings.ldap.disabled.title": "Available on the Enterprise plan",
	"settings.ldap.disabled.description": "LDAP is available as a paid feature. Learn more about it.",
	"settings.ldap.disabled.buttonText": "See plans",
	"settings.ldap.toast.sync.success": "Synchronization succeeded",
	"settings.ldap.toast.connection.success": "Connection succeeded",
	"settings.ldap.form.loginEnabled.label": "Enable LDAP Login",
	"settings.ldap.form.loginEnabled.tooltip": "Connection settings and data will still be saved if you disable LDAP Login",
	"settings.ldap.form.loginLabel.label": "LDAP Login",
	"settings.ldap.form.loginLabel.placeholder": "e.g. LDAP Username or email address",
	"settings.ldap.form.loginLabel.infoText": "The placeholder text that appears in the login field on the login page",
	"settings.ldap.form.serverAddress.label": "LDAP Server Address",
	"settings.ldap.form.serverAddress.placeholder": "123.123.123.123",
	"settings.ldap.form.serverAddress.infoText": "IP or domain of the LDAP server",
	"settings.ldap.form.port.label": "LDAP Server Port",
	"settings.ldap.form.port.infoText": "Port used to connect to the LDAP server",
	"settings.ldap.form.connectionSecurity.label": "Connection Security",
	"settings.ldap.form.connectionSecurity.infoText": "Type of connection security",
	"settings.ldap.form.allowUnauthorizedCerts.label": "Ignore SSL/TLS Issues",
	"settings.ldap.form.baseDn.label": "Base DN",
	"settings.ldap.form.baseDn.placeholder": "o=acme,dc=example,dc=com",
	"settings.ldap.form.baseDn.infoText": "Distinguished Name of the location where n8n should start its search for user in the AD/LDAP tree",
	"settings.ldap.form.bindingType.label": "Binding as",
	"settings.ldap.form.bindingType.infoText": "Type of binding used to connection to the LDAP server",
	"settings.ldap.form.adminDn.label": "Binding DN",
	"settings.ldap.form.adminDn.placeholder": "uid=2da2de69435c,ou=Users,o=Acme,dc=com",
	"settings.ldap.form.adminDn.infoText": "Distinguished Name of the user to perform the search",
	"settings.ldap.form.adminPassword.label": "Binding Password",
	"settings.ldap.form.adminPassword.infoText": "Password of the user provided in the Binding DN field above",
	"settings.ldap.form.userFilter.label": "User Filter",
	"settings.ldap.form.userFilter.placeholder": "(ObjectClass=user)",
	"settings.ldap.form.userFilter.infoText": "LDAP query to use when searching for user. Only users returned by this filter will be allowed to sign-in in n8n",
	"settings.ldap.form.attributeMappingInfo.label": "Attribute mapping",
	"settings.ldap.form.ldapId.label": "ID",
	"settings.ldap.form.ldapId.placeholder": "uid",
	"settings.ldap.form.ldapId.infoText": "The attribute in the LDAP server used as a unique identifier in n8n. It should be an unique LDAP attribute like uid",
	"settings.ldap.form.loginId.label": "Login ID",
	"settings.ldap.form.loginId.placeholder": "mail",
	"settings.ldap.form.loginId.infoText": "The attribute in the LDAP server used to log-in in n8n",
	"settings.ldap.form.email.label": "Email",
	"settings.ldap.form.email.placeholder": "mail",
	"settings.ldap.form.email.infoText": "The attribute in the LDAP server used to populate the email in n8n",
	"settings.ldap.form.firstName.label": "First Name",
	"settings.ldap.form.firstName.placeholder": "givenName",
	"settings.ldap.form.firstName.infoText": "The attribute in the LDAP server used to populate the first name in n8n",
	"settings.ldap.form.lastName.label": "Last Name",
	"settings.ldap.form.lastName.placeholder": "sn",
	"settings.ldap.form.lastName.infoText": "The attribute in the LDAP server used to populate the last name in n8n",
	"settings.ldap.form.synchronizationEnabled.label": "Enable periodic LDAP synchronization",
	"settings.ldap.form.synchronizationEnabled.tooltip": "Enable users to be synchronized periodically",
	"settings.ldap.form.synchronizationInterval.label": "Synchronization Interval (Minutes)",
	"settings.ldap.form.synchronizationInterval.infoText": "How often the synchronization should run",
	"settings.ldap.form.pageSize.label": "Page Size",
	"settings.ldap.form.pageSize.infoText": "Max number of records to return per page during synchronization. 0 for unlimited",
	"settings.ldap.form.searchTimeout.label": "Search Timeout (Seconds)",
	"settings.ldap.form.searchTimeout.infoText": "The timeout value for queries to the AD/LDAP server. Increase if you are getting timeout errors caused by a slow AD/LDAP server",
	"settings.ldap.form.enforceEmailUniqueness.label": "Enforce Email Uniqueness",
	"settings.ldap.form.enforceEmailUniqueness.tooltip": "Prevents login if multiple LDAP accounts use the same email, blocking account linking attacks.",
	"settings.ldap.section.synchronization.title": "Synchronization",
	"settings.sso": "SSO",
	"settings.sso.title": "Single Sign On",
	"settings.sso.subtitle": "SAML 2.0 Configuration",
	"settings.sso.info": "Activate SAML or OIDC to enable passwordless login via your existing user management tool and enhance security through unified authentication.",
	"settings.sso.info.link": "Learn how to configure SAML or OIDC.",
	"settings.sso.activated": "Enable Single Sign On",
	"settings.sso.settings.redirectUrl.label": "Redirect URL",
	"settings.sso.settings.redirectUrl.copied": "Redirect URL copied to clipboard",
	"settings.sso.settings.redirectUrl.help": "Copy the Redirect URL to configure your SAML provider",
	"settings.sso.settings.entityId.label": "Entity ID",
	"settings.sso.settings.entityId.copied": "Entity ID copied to clipboard",
	"settings.sso.settings.entityId.help": "Copy the Entity ID URL to configure your SAML provider",
	"settings.sso.settings.ips.label": "Identity Provider Settings",
	"settings.sso.settings.ips.xml.help": "Paste here the raw Metadata XML provided by your Identity Provider",
	"settings.sso.settings.ips.url.help": "Paste here the Identity Provider Metadata URL",
	"settings.sso.settings.ips.url.placeholder": "e.g. https://samltest.id/saml/idp",
	"settings.sso.settings.ips.url.invalid": "The Identity Provider Metadata URL is not valid",
	"settings.sso.settings.ips.options.url": "Metadata URL",
	"settings.sso.settings.ips.options.xml": "XML",
	"settings.sso.settings.oidc.prompt.none": "None (Silent authentication)",
	"settings.sso.settings.oidc.prompt.login": "Login (Force the user to log in)",
	"settings.sso.settings.oidc.prompt.consent": "Consent (Ask the user to consent)",
	"settings.sso.settings.oidc.prompt.select_account": "Select Account (Allow the user to select an account)",
	"settings.sso.settings.oidc.prompt.create": "Create (Ask the OP to show the registration page first)",
	"settings.sso.settings.userRoleProvisioning.label": "User role provisioning",
	"settings.sso.settings.userRoleProvisioning.help": "Manage instance and project roles from your SSO provider.",
	"settings.sso.settings.userRoleProvisioning.help.linkText": "Link to docs",
	"settings.sso.settings.userRoleProvisioning.option.disabled.label": "Managed in n8n",
	"settings.sso.settings.userRoleProvisioning.option.instanceRole.label": "Instance role",
	"settings.sso.settings.userRoleProvisioning.option.instanceAndProjectRoles.label": "Instance and project roles",
	"settings.sso.settings.test": "Test settings",
	"settings.sso.settings.save": "Save settings",
	"settings.sso.settings.save.testConnection.title": "Test and activate SAML SSO",
	"settings.sso.settings.save.testConnection.message": "You are about to activate SSO via SAML. Test your SAML SSO settings first before proceeding.",
	"settings.sso.settings.save.testConnection.test": "Test settings",
	"settings.sso.settings.save.confirmTestConnection.title": "Confirm successful connection test",
	"settings.sso.settings.save.confirmTestConnection.message": "Was the connection test successful? Confirm to activate SSO via SAML.",
	"settings.sso.settings.save.confirmTestConnection.confirm": "Confirm",
	"settings.sso.settings.save.activate.cancel": "Cancel",
	"settings.sso.settings.save.error": "Error saving SAML SSO configuration",
	"settings.sso.settings.save.error_oidc": "Error saving OIDC SSO configuration",
	"settings.sso.actionBox.title": "Available on the Enterprise plan",
	"settings.sso.actionBox.description": "Use Single Sign On to consolidate authentication into a single platform to improve security and agility.",
	"settings.sso.actionBox.buttonText": "See plans",
	"settings.sso.confirmMessage.beforeSaveForm.headline": "Are you sure you want to disable {protocol} login?",
	"settings.sso.confirmMessage.beforeSaveForm.message": "If you do so, all {protocol} users will be converted to email users.",
	"settings.mfa.secret": "Secret {secret}",
	"settings.mfa": "MFA",
	"settings.mfa.title": "Multi-factor Authentication",
	"settings.mfa.updateConfiguration": "MFA configuration updated",
	"settings.mfa.invalidAuthenticatorCode": "Invalid authenticator code",
	"projects.header.overview.subtitle": "All the workflows, credentials and executions you have access to",
	"projects.header.overview.subtitleWithDataTables": "All the workflows, credentials and data tables you have access to",
	"projects.header.shared.title": "Shared with you",
	"projects.header.personal.subtitle": "Workflows and credentials owned by you",
	"projects.header.personal.subtitleWithDataTables": "Workflows, credentials and data tables owned by you",
	"projects.header.shared.subtitle": "Workflows and credentials other users have shared with you",
	"projects.header.create.workflow": "Create workflow",
	"projects.header.create.credential": "Create credential",
	"projects.header.create.folder": "Create folder",
	"projects.create": "Create",
	"projects.create.personal": "Create in personal",
	"projects.create.team": "Create in project",
	"projects.menu.overview": "Overview",
	"projects.menu.shared": "Shared with you",
	"projects.menu.title": "Projects",
	"projects.menu.personal": "Personal",
	"projects.menu.addFirstProject": "Add project",
	"projects.menu.chat": "Chat",
	"projects.settings": "Project settings",
	"projects.settings.info": "Project info",
	"projects.settings.newProjectName": "My project",
	"projects.settings.iconPicker.button.tooltip": "Choose project icon",
	"projects.settings.name": "Icon and name",
	"projects.settings.description": "Description",
	"projects.settings.projectMembers": "Project members",
	"projects.settings.danger.message": "When deleting a project, you can also choose to move all workflows and credentials to another project.",
	"projects.settings.danger.title": "Danger zone",
	"projects.settings.danger.deleteProject": "Delete this project",
	"projects.settings.button.save": "@:_reusableBaseText.save",
	"projects.settings.button.cancel": "@:_reusableBaseText.cancel",
	"projects.settings.button.deleteProject": "Delete project",
	"projects.settings.role.admin": "@:_reusableBaseText.roles.admin",
	"projects.settings.role.editor": "@:_reusableBaseText.roles.editor",
	"projects.settings.role.viewer": "@:_reusableBaseText.roles.viewer",
	"projects.settings.delete.title": "Delete \"{projectName}\" Project?",
	"projects.settings.delete.message": "What should we do with the project data?",
	"projects.settings.delete.message.empty": "There are no workflows, credentials or data tables in this project.",
	"projects.settings.delete.question.transfer.label": "Transfer its workflows, credentials and data tables to another project or user",
	"projects.settings.delete.question.transfer.title": "Project or user to transfer to",
	"projects.settings.delete.question.wipe.label": "Delete its workflows, credentials and data tables",
	"projects.settings.delete.question.wipe.title": "Type \"delete all data\" to confirm",
	"projects.settings.delete.question.wipe.placeholder": "delete all data",
	"projects.settings.delete.confirm": "Yes, I am sure",
	"projects.settings.delete.cancel": "No, cancel",
	"projects.settings.delete.successful.title": "Project {projectName} deleted",
	"projects.settings.delete.error.title": "An error occurred while deleting the project",
	"projects.settings.save.successful.title": "Project {projectName} saved successfully",
	"projects.settings.icon.update.successful.title": "Project icon updated successfully",
	"projects.settings.save.error.title": "An error occurred while saving the project",
	"projects.settings.role.upgrade.title": "Upgrade to unlock additional roles",
	"projects.settings.role.upgrade.message": "You're currently limited to {limit} on the {planName} plan and can only assign the admin role to users within this project. To create more projects and unlock additional roles, upgrade your plan.",
	"projects.settings.role.upgrade.tooltip": "Upgrade to Pro or Enterprise to assign Editor and Viewer roles",
	"projects.settings.table.header.user": "@:_reusableBaseText.user",
	"projects.settings.table.header.role": "@:_reusableBaseText.role",
	"projects.settings.table.row.removeUser": "Remove user",
	"projects.settings.role.admin.description": "Can edit workflows, credentials, and project settings",
	"projects.settings.role.editor.description": "Can edit workflows and credentials",
	"projects.settings.role.viewer.description": "Can view workflows and executions",
	"projects.settings.role.personalOwner": "Owner",
	"projects.settings.members.search.placeholder": "Search members...",
	"projects.settings.memberRole.updated.title": "Member role updated successfully",
	"projects.settings.memberRole.update.error.title": "An error occurred while updating member role",
	"projects.settings.member.removed.title": "Member removed successfully",
	"projects.settings.member.remove.error.title": "An error occurred while removing member",
	"projects.settings.member.added.title": "Member added successfully",
	"projects.sharing.allUsers": "All users and projects",
	"projects.sharing.noMatchingProjects": "There are no available projects",
	"projects.sharing.noMatchingUsers": "No matching users or projects",
	"projects.sharing.select.placeholder": "Select project or user",
	"projects.sharing.select.placeholder.user": "Share with user(s)",
	"projects.sharing.select.placeholder.project": "Share with projects or users",
	"projects.error.title": "Project error",
	"projects.create.limit": "{count} project | {count} projects",
	"projects.create.limitReached": "You have reached the {planName} plan limit of {limit}. Upgrade your plan to unlock more projects. {link}",
	"projects.create.limitReached.cloud": "You have reached the {planName} plan limit of {limit}. Upgrade your plan to unlock more projects.",
	"projects.create.limitReached.self": "Upgrade to unlock projects for more granular control over sharing, access and organisation of workflows",
	"projects.create.limitReached.link": "View plans",
	"projects.create.permissionDenied": "Your current role does not allow you to create projects",
	"projects.move.resource.modal.title": "Choose a project or user to move this {resourceTypeLabel} to",
	"projects.move.resource.modal.message": "\"{resourceName}\" is currently {inPersonalProject}{inTeamProject}",
	"projects.move.resource.modal.message.team": "in the \"{resourceHomeProjectName}\" project.",
	"projects.move.resource.modal.message.personal": "owned by \"{resourceHomeProjectName}\".",
	"projects.move.resource.modal.message.note": "Note",
	"projects.move.resource.modal.message.sharingNote": "{note}: Moving will remove any existing sharing for this {resourceTypeLabel}.",
	"projects.move.resource.modal.message.sharingInfo": "(Currently shared with {count} project) | (Currently shared with {count} projects)",
	"projects.move.resource.modal.message.usedCredentials": "Also share the {usedCredentials} used by this workflow to ensure it will continue to run correctly",
	"projects.move.resource.modal.message.usedCredentials.number": "{count} credential | {count} credentials",
	"projects.move.resource.modal.message.unAccessibleCredentials": "Some credentials",
	"projects.move.resource.modal.message.unAccessibleCredentials.note": "{credentials} used in this workflow will not be shared",
	"projects.move.resource.modal.message.noProjects": "Currently there are not any projects or users available for you to move this {resourceTypeLabel} to.",
	"projects.move.resource.modal.button": "Move {resourceTypeLabel}",
	"projects.move.resource.modal.selectPlaceholder": "Select project or user...",
	"projects.move.resource.error.title": "Error moving {resourceName} {resourceTypeLabel}",
	"projects.move.resource.success.title": "{resourceTypeLabel} '{resourceName}' is moved to '{targetProjectName}'",
	"projects.move.resource.success.message.workflow": "The workflow's credentials were not shared with the project.",
	"projects.move.resource.success.message.workflow.withAllCredentials": "The workflow's credentials were shared with the project.",
	"projects.move.resource.success.message.workflow.withSomeCredentials": "Due to missing permissions not all the workflow's credentials were shared with the project.",
	"projects.move.resource.success.link": "View {targetProjectName}",
	"projects.badge.global": "Global",
	"projects.badge.tooltip.global": "This {resourceTypeLabel} was shared globally with all users and projects",
	"projects.badge.tooltip.sharedOwned": "This {resourceTypeLabel} is owned by you and shared with {count} other projects or users",
	"projects.badge.tooltip.sharedPersonal": "This {resourceTypeLabel} is owned by {name} and shared with {count} other projects or users",
	"projects.badge.tooltip.personal": "This {resourceTypeLabel} is owned by {name}",
	"projects.badge.tooltip.team": "This {resourceTypeLabel} is owned and accessible by the {name} project.",
	"projects.badge.tooltip.sharedTeam": "This {resourceTypeLabel} is owned by the {name} project and shared with {count} other projects or users",
	"mfa.setup.invalidAuthenticatorCode": "{code} is not a valid number",
	"mfa.setup.invalidCode": "Two-factor code failed. Please try again.",
	"mfa.code.modal.title": "Two-factor authentication",
	"mfa.recovery.modal.title": "Two-factor recovery",
	"mfa.code.input.info": "Don't have your auth device?",
	"mfa.code.input.info.action": "Enter a recovery code",
	"mfa.recovery.input.info.action": "enter a recovery code",
	"mfa.code.button.continue": "Continue",
	"mfa.recovery.button.verify": "Verify",
	"mfa.button.back": "Back",
	"mfa.code.input.label": "Two-factor code",
	"mfa.code.input.placeholder": "e.g. 123456",
	"mfa.code.recovery.input.label": "Two-factor code or recovery code",
	"mfa.code.recovery.input.placeholder": "e.g. 123456 or c79f9c02-7b2e-44...",
	"mfa.recovery.input.label": "Recovery code",
	"mfa.recovery.input.placeholder": "e.g c79f9c02-7b2e-44...",
	"mfa.code.invalid": "This code is invalid, try again or",
	"mfa.recovery.invalid": "This code is invalid or was already used, try again",
	"mfa.setup.step1.title": "Setup Authenticator app [1/2]",
	"mfa.setup.step2.title": "Download your recovery codes [2/2]",
	"mfa.setup.step1.instruction1.title": "1. Scan the QR code",
	"mfa.setup.step1.instruction1.subtitle": "{part1} {part2}",
	"mfa.setup.step1.instruction1.subtitle.part1": "Use an authenticator app from your phone to scan. If you can't scan the QR code, enter",
	"mfa.setup.step1.instruction1.subtitle.part2": "this text code",
	"mfa.setup.step1.instruction2.title": "2. Enter the code from the app",
	"mfa.setup.step2.description": "You can use recovery codes as a second factor to authenticate in case you lose access to your device.",
	"mfa.setup.step2.infobox.description": "{part1} {part2}",
	"mfa.setup.step2.infobox.description.part1": "Keep your recovery codes somewhere safe. If you lose your device and your recovery codes, you will",
	"mfa.setup.step2.infobox.description.part2": "lose access to your account.",
	"mfa.setup.step2.button.download": "Download recovery codes",
	"mfa.setup.step2.button.save": "I have downloaded my recovery codes",
	"mfa.setup.step1.button.continue": "Continue",
	"mfa.setup.step1.input.label": "Code from your authenticator app",
	"mfa.setup.step1.toast.copyToClipboard.title": "Code copied to clipboard",
	"mfa.setup.step1.toast.copyToClipboard.message": "Enter the code in your authenticator app",
	"mfa.setup.step2.toast.setupFinished.message": "Two-factor authentication enabled",
	"mfa.setup.step2.toast.setupFinished.error.message": "Error enabling two-factor authentication",
	"mfa.setup.step2.toast.tokenExpired.error.message": "MFA token expired. Close the modal and enable MFA again",
	"mfa.prompt.code.modal.title": "Two-factor code or recovery code required",
	"settings.personal.mfa.section.title": "Two-factor authentication (2FA)",
	"settings.personal.personalisation": "Personalisation",
	"settings.personal.theme": "Theme",
	"settings.personal.theme.systemDefault": "System default",
	"settings.personal.theme.light": "Light theme",
	"settings.personal.theme.dark": "Dark theme",
	"settings.personal.mfa.button.disabled.infobox": "Two-factor authentication is currently disabled.",
	"settings.personal.mfa.button.enabled.infobox": "Two-factor authentication is currently enabled.",
	"settings.personal.mfa.button.enabled": "Enable 2FA",
	"settings.personal.mfa.button.disabled": "Disable two-factor authentication",
	"settings.personal.mfa.toast.disabledMfa.title": "Two-factor authentication disabled",
	"settings.personal.mfa.toast.disabledMfa.message": "You will no longer need your authenticator app when signing in",
	"settings.personal.mfa.toast.disabledMfa.error.message": "Error disabling two-factor authentication",
	"settings.personal.mfa.toast.canEnableMfa.title": "MFA pre-requisite failed",
	"settings.personal.mfa.enforced": "The settings on this instance <strong>require you to set up 2FA</strong>. Please enable it to continue working in this instance.",
	"settings.personal.mfa.enforce.message": "Enforces 2FA for all users on this instance authenticating with email and password logins.",
	"settings.personal.mfa.enforce.unlicensed_tooltip": "You can enforce 2FA for all users on this instance authenticating with email and password logins when you upgrade your plan. {action}",
	"settings.personal.mfa.enforce.unlicensed_tooltip.link": "View plans",
	"settings.personal.mfa.enforce.title": "Enforce two-factor authentication",
	"settings.personal.mfa.enforce.error": "Cannot enforce 2FA for all users",
	"settings.personal.mfa.enforce.enabled.title": "2FA Enforced",
	"settings.personal.mfa.enforce.enabled.message": "Two-factor authentication is now required for all users on this instance authenticating with email and password logins.",
	"settings.personal.mfa.enforce.disabled.title": "2FA No Longer Enforced",
	"settings.personal.mfa.enforce.disabled.message": "Two-factor authentication is no longer mandatory for users on this instance authenticating with email and password logins.",
	"settings.mfa.toast.noRecoveryCodeLeft.title": "No 2FA recovery codes remaining",
	"settings.mfa.toast.noRecoveryCodeLeft.message": "You have used all of your recovery codes. Disable then re-enable two-factor authentication to generate new codes. <a href='/settings/personal' target='_blank' >Open settings</a>",
	"sso.login.divider": "or",
	"sso.login.button": "Continue with SSO",
	"executionUsage.currentUsage": "{text} {count}",
	"executionUsage.currentUsage.text": "You are in a free trial with limited executions. You have",
	"executionUsage.currentUsage.count": "{n} day left. | {n} days left.",
	"executionUsage.label.executions": "Executions",
	"executionUsage.button.upgrade": "Upgrade plan",
	"executionUsage.expired.text": "Your trial is over. Upgrade now to keep your data.",
	"executionUsage.ranOutOfExecutions.text": "You’re out of executions. Upgrade your plan to keep automating.",
	"openExecution.missingExeuctionId.title": "Could not find execution",
	"openExecution.missingExeuctionId.message": "Make sure this workflow saves executions via the settings",
	"type.string": "String",
	"type.number": "Number",
	"type.dateTime": "Date & Time",
	"type.boolean": "Boolean",
	"type.array": "Array",
	"type.object": "Object",
	"type.binary": "Binary Data",
	"filter.operator.equals": "is equal to",
	"filter.operator.notEquals": "is not equal to",
	"filter.operator.contains": "contains",
	"filter.operator.notContains": "does not contain",
	"filter.operator.startsWith": "starts with",
	"filter.operator.notStartsWith": "does not start with",
	"filter.operator.endsWith": "ends with",
	"filter.operator.notEndsWith": "does not end with",
	"filter.operator.exists": "exists",
	"filter.operator.notExists": "does not exist",
	"filter.operator.regex": "matches regex",
	"filter.operator.notRegex": "does not match regex",
	"filter.operator.gt": "is greater than",
	"filter.operator.lt": "is less than",
	"filter.operator.gte": "is greater than or equal to",
	"filter.operator.lte": "is less than or equal to",
	"filter.operator.after": "is after",
	"filter.operator.before": "is before",
	"filter.operator.afterOrEquals": "is after or equal to",
	"filter.operator.beforeOrEquals": "is before or equal to",
	"filter.operator.true": "is true",
	"filter.operator.false": "is false",
	"filter.operator.lengthEquals": "length equal to",
	"filter.operator.lengthNotEquals": "length not equal to",
	"filter.operator.lengthGt": "length greater than",
	"filter.operator.lengthLt": "length less than",
	"filter.operator.lengthGte": "length greater than or equal to",
	"filter.operator.lengthLte": "length less than or equal to",
	"filter.operator.empty": "is empty",
	"filter.operator.notEmpty": "is not empty",
	"filter.combinator.or": "OR",
	"filter.combinator.and": "AND",
	"filter.addCondition": "Add condition",
	"filter.removeCondition": "Remove condition",
	"filter.dragCondition": "Drag condition",
	"filter.maxConditions": "Maximum conditions reached",
	"filter.condition.resolvedTrue": "This condition is true for the first input item",
	"filter.condition.resolvedFalse": "This condition is false for the first input item",
	"filter.condition.placeholderLeft": "value1",
	"filter.condition.placeholderRight": "value2",
	"assignment.dragFields": "Drag input fields here",
	"assignment.dropField": "Drop here to add the field",
	"assignment.or": "or",
	"assignment.add": "Add Field",
	"assignment.addAll": "Add All",
	"assignment.clearAll": "Clear All",
	"assignment.binaryData.placeholder": "Name of binary input (or expression referencing it)",
	"assignment.field": "Field {number}",
	"assignment.remove": "Remove field",
	"assignment.dragToReorder": "Drag to reorder",
	"templateSetup.title": "Set up '{name}' template",
	"templateSetup.instructions": "You need {0} account to setup this template",
	"templateSetup.instructions.builder": "You need {0} account to setup this workflow",
	"templateSetup.skip": "Skip",
	"templateSetup.continue.button": "Continue",
	"templateSetup.credential.description": "The credential you select will be used in the {0} node of the workflow template. | The credential you select will be used in the {0} nodes of the workflow template.",
	"templateSetup.credential.description.builder": "The credential you select will be used in the {0} node of this workflow. | The credential you select will be used in the {0} nodes of this workflow.",
	"templateSetup.continue.button.fillRemaining": "Fill remaining credentials to continue",
	"setupCredentialsModal.title": "Set up template",
	"setupCredentialsModal.title.builder": "Set up credentials",
	"becomeCreator.text": "Share your workflows with other users, unlock perks, and become a featured template creator!",
	"becomeCreator.buttonText": "Become a creator",
	"becomeCreator.closeButtonTitle": "Close",
	"feedback.title": "Was this helpful?",
	"feedback.positive": "I found this helpful",
	"feedback.negative": "I didn't find this helpful",
	"communityPlusModal.badge": "Time limited offer",
	"communityPlusModal.title": "Get paid features for free (forever)",
	"communityPlusModal.error.title": "License request failed",
	"communityPlusModal.success.title": "Request sent",
	"communityPlusModal.success.message": "License key will be sent to {email}",
	"communityPlusModal.description": "Receive a free activation key for the advanced features below - lifetime access.",
	"communityPlusModal.features.debugging.title": "Advanced debugging",
	"communityPlusModal.features.debugging.description": "Easily fix any workflow execution that’s errored, then re-run it",
	"communityPlusModal.features.execution.title": "Execution search and tagging",
	"communityPlusModal.features.execution.description": "Search and organize past workflow executions for easier review",
	"communityPlusModal.features.folders.title": "Folders",
	"communityPlusModal.features.folders.description": "Organize your workflows in a nested folder structure",
	"communityPlusModal.input.email.label": "Enter email to receive your license key",
	"communityPlusModal.button.skip": "Skip",
	"communityPlusModal.button.confirm": "Send me a free license key",
	"communityPlusModal.notice": "Included features may change, but once unlocked, you'll keep them forever.",
	"executeWorkflowTrigger.createNewSubworkflow": "Create a Sub-Workflow in {projectName}",
	"executeWorkflowTrigger.createNewSubworkflow.noProject": "Create a New Sub-Workflow",
	"evaluation.listRuns.status.new": "New",
	"evaluation.listRuns.status.running": "Running",
	"evaluation.listRuns.status.evaluating": "Evaluating",
	"evaluation.listRuns.status.completed": "Completed",
	"evaluation.listRuns.status.cancelled": "Cancelled",
	"evaluation.listRuns.status.error": "Error",
	"evaluation.listRuns.status.success": "Success",
	"evaluation.listRuns.status.warning": "Warning",
	"evaluation.listRuns.metricsOverTime": "Metrics over time",
	"evaluation.listRuns.status": "Status",
	"evaluation.listRuns.runListHeader": "All runs",
	"evaluation.listRuns.allTestCases": "All test cases | All test cases ({count})",
	"evaluation.listRuns.testCasesListHeader": "Run #{index}",
	"evaluation.listRuns.runNumber": "Run",
	"evaluation.listRuns.runDate": "Run date",
	"evaluation.listRuns.runStatus": "Run status",
	"evaluation.listRuns.noRuns": "No test runs",
	"evaluation.listRuns.pastRuns.total": "No runs | All runs | All runs",
	"evaluation.listRuns.noRuns.description": "Run a test to see the results here",
	"evaluation.listRuns.deleteRuns": "No runs to delete | Delete {count} run | Delete {count} runs",
	"evaluation.listRuns.noRuns.button": "Run Test",
	"evaluation.listRuns.toast.error.fetchTestCases": "Failed to load run details",
	"evaluation.listRuns.error.testCasesNotFound": "No matching rows in dataset{description}",
	"evaluation.listRuns.error.testCasesNotFound.description": "Check any filters or limits set in the evaluation trigger",
	"evaluation.listRuns.error.executionInterrupted": "Test run was interrupted",
	"evaluation.listRuns.error.unknownError": "Execution error{description}",
	"evaluation.listRuns.error.cantFetchTestRuns": "Couldn’t fetch test runs",
	"evaluation.listRuns.error.cantStartTestRun": "Couldn’t start test run",
	"evaluation.listRuns.error.cantStopTestRun": "Couldn’t stop test run",
	"evaluation.listRuns.error.unknownError.description": "Click for more details",
	"evaluation.listRuns.error.evaluationTriggerNotFound": "Evaluation trigger missing",
	"evaluation.listRuns.error.evaluationTriggerNotConfigured": "Evaluation trigger is not configured",
	"evaluation.listRuns.error.evaluationTriggerDisabled": "Evaluation trigger is disabled",
	"evaluation.listRuns.error.setOutputsNodeNotConfigured": "'Set outputs' node is not configured",
	"evaluation.listRuns.error.setMetricsNodeNotFound": "No 'Set metrics' node in workflow",
	"evaluation.listRuns.error.setMetricsNodeNotConfigured": "'Set metrics' node is not configured",
	"evaluation.listRuns.error.cantFetchTestCases": "Couldn’t fetch test cases{description}",
	"evaluation.listRuns.error.cantFetchTestCases.description": "Check the Google Sheet setup in the evaluation trigger",
	"evaluation.runDetail.ranAt": "Ran at",
	"evaluation.runDetail.testCase": "Test case",
	"evaluation.runDetail.testCase.id": "Test case ID",
	"evaluation.runDetail.testCase.status": "Test case status",
	"evaluation.runDetail.totalCases": "Total cases",
	"evaluation.runDetail.error.mockedNodeMissing": "Output for a mocked node does not exist in benchmark execution.{link}.",
	"evaluation.runDetail.error.mockedNodeMissing.solution": "Fix test configuration",
	"evaluation.runDetail.error.executionFailed": "Failed to execute workflow",
	"evaluation.runDetail.error.executionFailed.solution": "View execution",
	"evaluation.runDetail.error.datasetTriggerNotFound": "Dataset trigger does not exist in the workflow.{link}.",
	"evaluation.runDetail.error.datasetTriggerNotFound.solution": "View workflow",
	"evaluation.runDetail.error.invalidMetrics": "Evaluation metrics node returned invalid metrics. Only numeric values are expected. View workflow. {link}.",
	"evaluation.runDetail.error.invalidMetrics.solution": "View workflow",
	"evaluation.runDetail.error.unknownError": "An unknown error occurred",
	"evaluation.runDetail.error.unknownError.solution": "View execution",
	"evaluation.runDetail.error.noMetricsCollected": "No 'Set metrics' node executed",
	"evaluation.runDetail.error.partialCasesFailed": "Finished with errors",
	"evaluation.runDetail.notice.useSetInputs": "Tip: Show input columns from your dataset here by adding the evaluation node's 'set inputs' operation to your workflow",
	"evaluation.runTest": "Run Test",
	"evaluation.stopTest": "Stop Test",
	"evaluation.cancelTestRun": "Cancel Test Run",
	"evaluation.notImplemented": "This feature is not implemented yet!",
	"evaluation.viewDetails": "View Details",
	"evaluation.editTest": "Edit Test",
	"evaluation.deleteTest": "Delete Test",
	"evaluation.deleteTest.warning": "The test and all associated runs will be removed. This cannot be undone",
	"evaluation.testIsRunning": "Test is running. Please wait for it to finish.",
	"evaluation.completeConfig": "Complete the configuration below to run the test:",
	"evaluation.configError.noEvaluationTag": "No evaluation tag set",
	"evaluation.configError.noExecutionsAddedToTag": "No executions added to this tag",
	"evaluation.configError.noEvaluationWorkflow": "No evaluation workflow set",
	"evaluation.configError.noMetrics": "No metrics set",
	"evaluation.workflowInput.subworkflowName": "Evaluation workflow for {name}",
	"evaluation.workflowInput.subworkflowName.default": "My Evaluation Sub-Workflow",
	"evaluation.executions.addTo": "Add to Test",
	"evaluation.executions.addTo.new": "Add to Test",
	"evaluation.executions.addTo.existing": "Add to \"{name}\"",
	"evaluation.executions.addedTo": "Added to \"{name}\"",
	"evaluation.executions.removeFrom": "Remove from \"{name}\"",
	"evaluation.executions.removedFrom": "Execution removed from \"{name}\"",
	"evaluation.executions.toast.addedTo": "Go back to \"{name}\"",
	"evaluation.executions.tooltip.addTo": "Add to new test",
	"evaluation.executions.tooltip.noExecutions": "Evaluation executions can not be added to tests",
	"evaluation.executions.tooltip.onlySuccess": "Only successful executions can be added to tests",
	"evaluation.workflow.createNew": "Create new evaluation workflow",
	"evaluation.workflow.createNew.or": "or use existing evaluation sub-workflow",
	"evaluation.executions.toast.addedTo.title": "Execution added to test ",
	"evaluation.executions.toast.closeTab": "Close this tab",
	"evaluation.executions.toast.removedFrom.title": "Execution removed from test ",
	"evaluations.readOnlyNotice": "Evaluations can't be built in read-only mode. Build your evaluation on your development environment.",
	"evaluations.paywall.title": "Register to enable evaluation",
	"evaluations.paywall.description": "Register your Community instance to unlock the evaluation feature",
	"evaluations.paywall.cta": "Register instance",
	"evaluations.setupWizard.title": "Test your AI workflow over multiple inputs",
	"evaluations.setupWizard.description": "Evaluations measure performance against a test dataset.",
	"evaluations.setupWizard.moreInfo": "More info",
	"evaluations.setupWizard.stepHeader.optional": "Optional",
	"evaluations.setupWizard.step1.title": "Wire up a test dataset",
	"evaluations.setupWizard.step1.item1": "Create a Data table or Google Sheet with one input per row",
	"evaluations.setupWizard.step1.item2": "Add an evaluation trigger to your workflow and wire it up",
	"evaluations.setupWizard.step1.button": "Add evaluation trigger",
	"evaluations.setupWizard.step2.title": "Write workflow outputs back to dataset",
	"evaluations.setupWizard.step2.item1": "Add a 'Set Outputs' operation to log each output back to your table",
	"evaluations.setupWizard.step2.button": "Add 'set outputs' node",
	"evaluations.setupWizard.step3.title": "Set up a quality score",
	"evaluations.setupWizard.step3.item1": "Calculate a score, e.g. by comparing expected and actual outputs",
	"evaluations.setupWizard.step3.item2": "Add a 'set metrics' operation to log the score",
	"evaluations.setupWizard.step3.button": "Add 'Set metrics' node",
	"evaluations.setupWizard.step3.skip": "Skip",
	"evaluations.setupWizard.step3.notice": "Your plan supports custom metrics for one workflow only. {link}",
	"evaluations.setupWizard.step3.notice.link": "See plans",
	"evaluations.setupWizard.step4.title": "Run evaluation",
	"evaluations.setupWizard.step4.button": "Run evaluation",
	"evaluations.setupWizard.step4.altButton": "Run in editor",
	"evaluations.setupWizard.limitReached": "Limit reached. Your plan includes custom metrics for one workflow only. Upgrade for unlimited use or delete the workflow with existing evaluation runs.",
	"freeAi.credits.callout.claim.title": "Get {credits} free OpenAI API credits",
	"freeAi.credits.callout.claim.button.label": "Claim credits",
	"freeAi.credits.callout.success.title.part1": "Claimed {credits} free OpenAI API credits! Please note these free credits are only for the following models:",
	"freeAi.credits.callout.success.title.part2": "gpt-5-mini, gpt-4.1-mini, gpt-4.1-nano, gpt-4o-mini, text-embedding-3-small, dall-e-3, tts-1, whisper-1, and text-moderation-latest",
	"freeAi.credits.callout.success.chatHub.beginning": "We've given you ",
	"freeAi.credits.callout.success.chatHub.credits": "{amount} free OpenAI API credits",
	"freeAi.credits.callout.success.chatHub.end": " to get started",
	"freeAi.credits.credentials.edit": "This is a managed credential and cannot be edited.",
	"freeAi.credits.showError.claim.title": "Free AI credits",
	"freeAi.credits.showError.claim.message": "Enable to claim credits",
	"freeAi.credits.showWarning.workflow.activation.title": "You're using free OpenAI API credits",
	"freeAi.credits.showWarning.workflow.activation.description": "To make sure your workflow runs smoothly in the future, replace the free OpenAI API credits with your own API key.",
	"insights.heading": "Insights",
	"insights.lastNDays": "Last {count} days",
	"insights.lastNHours": "Last {count} hours",
	"insights.months": "{count} months",
	"insights.oneYear": "One year",
	"insights.banner.timeSaved.tooltip": "No estimate available yet. To see potential time savings, {link} to each workflow from workflow settings.",
	"insights.banner.timeSaved.tooltip.link.text": "add time estimates",
	"insights.banner.noData.tooltip": "Manual executions aren’t counted. Data may take up to 24 hours to update after upgrading. {link}",
	"insights.banner.noData.tooltip.link": "Learn more",
	"insights.banner.noData.tooltip.link.url": "https://docs.n8n.io/insights/",
	"insights.banner.title.total": "Prod. executions",
	"insights.banner.title.failed": "Failed prod. executions",
	"insights.banner.title.failureRate": "Failure rate",
	"insights.banner.title.timeSaved": "Time saved",
	"insights.banner.title.timeSavedDailyAverage": "Time saved daily avg.",
	"insights.banner.title.averageRunTime": "Run time (avg.)",
	"insights.dashboard.table.projectName": "Project name",
	"insights.dashboard.table.title": "Breakdown by workflow",
	"insights.dashboard.table.estimate": "Estimate",
	"insights.dashboard.title": "Insights",
	"insights.dashboard.search.placeholder": "All projects",
	"insights.dashboard.paywall.title": "Upgrade to access more detailed insights",
	"insights.dashboard.paywall.description": "Gain access to more granular, per-workflow insights and visual breakdown of production executions over different time periods.",
	"insights.banner.title.timeSaved.tooltip": "Total time saved calculated from your estimated time savings per execution across all workflows",
	"insights.banner.queueMode.warning": "We identified and fixed an issue where insights execution counts were duplicated for queue mode users.",
	"insights.banner.queueMode.warning.link.text": "Learn more",
	"insights.banner.queueMode.warning.link.url": "https://community.n8n.io/t/insights-reporting-bug-for-queue-mode-users-on-v1-100-0",
	"insights.banner.failureRate.deviation.tooltip": "Percentage point change from previous period",
	"insights.chart.failed": "Failed",
	"insights.chart.succeeded": "Successful",
	"insights.chart.loading": "Loading data",
	"communityNodesDocsLink.link.title": "Open community node docs",
	"communityNodesDocsLink.title": "Docs",
	"communityNodeItem.node.hint": "Install this node to start using it",
	"communityNodeItem.actions.hint": "Install this node to start using actions",
	"communityNodeItem.label": "Add to workflow",
	"communityNodeDetails.installed": "Installed",
	"communityNodeDetails.install": "Install node",
	"communityNodeInfo.approved": "This community node has been reviewed and approved by n8n",
	"communityNodeInfo.officialApproved": "This node has been reviewed and approved by n8n",
	"communityNodeInfo.approved.label": "Verified",
	"communityNodeInfo.unverified": "This community node was added via npm and has not been verified by n8n",
	"communityNodeInfo.unverified.label": "Via npm",
	"communityNodeInfo.downloads": "{downloads} Downloads",
	"communityNodeInfo.publishedBy": "Published by {publisherName}",
	"communityNodeInfo.contact.admin": "Please contact an administrator to install this community node:",
	"communityNodeUpdateInfo.available": "A new node package version is available",
	"insights.upgradeModal.button.dismiss": "Dismiss",
	"insights.upgradeModal.content": "Viewing this time period requires an enterprise plan. Upgrade to Enterprise to unlock advanced features.",
	"insights.upgradeModal.perks.0": "View up to one year of insights history",
	"insights.upgradeModal.perks.1": "Zoom into last 24 hours with hourly granularity",
	"insights.upgradeModal.perks.2": "Gain deeper visibility into workflow trends over time",
	"insights.upgradeModal.title": "Upgrade to Enterprise",
	"whatsNew.versionsBehind": "Update ({count} version behind) | Update ({count} versions behind)",
	"whatsNew.update": "Update",
	"whatsNew.updateNudgeTooltip": "Only owners can perform updates",
	"whatsNew.updateAvailable": "You're currently on version {currentVersion}. Update to {latestVersion} to get {count} versions worth of new features, improvements, and fixes. See what changed",
	"whatsNew.updateAvailable.changelogLink": "in the full changelog",
	"workflowDiff.changes": "Changes",
	"workflowDiff.nodes": "Nodes",
	"workflowDiff.connectors": "Connectors",
	"workflowDiff.compare": "Compare versions",
	"workflowDiff.settings": "Settings",
	"workflowDiff.local": "Local",
	"workflowDiff.remote": "Remote ({branchName})",
	"workflowDiff.noChanges": "No changes",
	"workflowDiff.deletedWorkflow": "Missing workflow",
	"workflowDiff.deletedWorkflow.database": "The workflow doesn't exist in the database",
	"workflowDiff.deletedWorkflow.remote": "The workflow doesn't exist on remote",
	"workflowDiff.newWorkflow": "New workflow",
	"workflowDiff.newWorkflow.database": "The workflow will be created in the database",
	"workflowDiff.newWorkflow.remote": "The workflow will be created on remote",
	"workflowDiff.label.before": "Before",
	"workflowDiff.label.after": "After",
	"workflowDiff.waitingForData": "Waiting for workflow data...",
	"workflowDiff.error.loadNodeTypes": "Could not load node types",
	"commandBar.placeholder": "Type a command or search...",
	"commandBar.noResults": "No results found",
	"commandBar.sections.recent": "Recent",
	"commandBar.sections.nodes": "Nodes",
	"commandBar.sections.workflow": "Workflow",
	"commandBar.sections.workflows": "Workflows",
	"commandBar.sections.credentials": "Credentials",
	"commandBar.sections.dataTables": "Data Tables",
	"commandBar.sections.execution": "Execution",
	"commandBar.sections.executions": "Executions",
	"commandBar.sections.evaluation": "Evaluation",
	"commandBar.sections.demo": "Demo",
	"commandBar.sections.chat": "Chat",
	"commandBar.sections.general": "Navigation",
	"commandBar.templates.import": "Import template",
	"commandBar.templates.importWithPrefix": "Import template {templateName}",
	"commandBar.nodes.addNode": "Add node",
	"commandBar.nodes.addStickyNote": "Add sticky note",
	"commandBar.nodes.openNode": "Open node",
	"commandBar.nodes.openNodeWithPrefix": "Open node > {nodeName}",
	"commandBar.nodes.addNodeWithPrefix": "Add node > {nodeName}",
	"commandBar.nodes.searchPlaceholder": "Search by node name, type, etc.",
	"commandBar.nodes.keywords.insert": "insert",
	"commandBar.nodes.keywords.add": "add",
	"commandBar.nodes.keywords.create": "create",
	"commandBar.nodes.keywords.node": "node",
	"commandBar.workflow.test": "Execute workflow",
	"commandBar.workflow.activate": "Activate workflow",
	"commandBar.workflow.deactivate": "Deactivate workflow",
	"commandBar.workflow.selectAll": "Select all",
	"commandBar.workflow.tidyUp": "Tidy up workflow",
	"commandBar.workflow.rename": "Rename workflow",
	"commandBar.workflow.duplicate": "Duplicate workflow",
	"commandBar.workflow.openSettings": "Open workflow settings",
	"commandBar.workflow.download": "Download workflow",
	"commandBar.workflow.importFromURL": "Import workflow from URL",
	"commandBar.workflow.importFromFile": "Import workflow from file",
	"commandBar.workflow.openCredential": "Open credential",
	"commandBar.workflow.openSubworkflow": "Open sub-workflow",
	"commandBar.workflow.archive": "Archive workflow",
	"commandBar.workflow.unarchive": "Unarchive workflow",
	"commandBar.workflow.delete": "Delete workflow",
	"commandBar.workflow.publish": "Publish workflow",
	"commandBar.workflow.unpublish": "Unpublish workflow",
	"commandBar.workflow.keywords.test": "test",
	"commandBar.workflow.keywords.execute": "execute",
	"commandBar.workflow.keywords.run": "run",
	"commandBar.workflow.keywords.workflow": "workflow",
	"commandBar.workflow.keywords.download": "download",
	"commandBar.workflow.keywords.export": "export",
	"commandBar.workflow.keywords.archive": "archive",
	"commandBar.workflow.keywords.delete": "delete",
	"commandBar.workflow.keywords.unarchive": "unarchive",
	"commandBar.workflow.keywords.restore": "restore",
	"commandBar.workflows.create": "Create workflow in {projectName}",
	"commandBar.workflows.open": "Open workflow",
	"commandBar.workflows.searchPlaceholder": "Search by workflow name or node type...",
	"commandBar.workflows.unnamed": "(unnamed workflow)",
	"commandBar.credentials.create": "Create credential in {projectName}",
	"commandBar.credentials.open": "Open credential",
	"commandBar.credentials.searchPlaceholder": "Search by credential name...",
	"commandBar.dataTables.create": "Create data table in {projectName}",
	"commandBar.dataTables.open": "Open data table",
	"commandBar.dataTables.searchPlaceholder": "Search by data table name...",
	"commandBar.executions.open": "Open executions",
	"commandBar.demo.availableEverywhere": "This is available everywhere",
	"commandBar.sections.projects": "Projects",
	"commandBar.projects.create": "Create project",
	"commandBar.projects.open": "Open project",
	"commandBar.projects.searchPlaceholder": "Search by project name...",
	"commandBar.projects.unnamed": "(unnamed project)",
	"commandBar.chat.new": "New chat",
	"commandBar.chat.newWithModel": "New chat with...",
	"commandBar.chat.open": "Open chat",
	"commandBar.chat.delete": "Delete chat",
	"commandBar.chat.deleteCurrent": "Delete current chat",
	"commandBar.chat.deleteSession": "Delete \"{title}\"",
	"commandBar.chat.open.searchPlaceholder": "Search by f title...",
	"commandBar.chat.stop": "Stop message generation",
	"browserNotifications.permission.request.title": "Enable desktop notifications",
	"browserNotifications.permission.request.message": "Get notified when your workflows complete or need attention.",
	"browserNotifications.permission.request.allow": "Allow notifications",
	"browserNotifications.permission.request.dismiss": "Not now",
	"browserNotifications.permission.denied.title": "Notifications blocked",
	"browserNotifications.permission.denied.message": "Desktop notifications are blocked. To enable them, click the lock icon in your browser's address bar and allow notifications.",
	"browserNotifications.permission.denied.checkAgain": "Check again",
	"browserNotifications.permission.granted.message": "Desktop notifications are enabled"
};
const _reusableBaseText = {
	"cancel": "取消",
	"codeNodeEditor": {
		"linter": { "useJson": "访问 `.json` 下的项目属性，例如 `item.json`" },
		"completer": {
			"all": "返回节点输出项的数组",
			"first": "返回节点输出的第一个项目",
			"last": "返回节点输出的最后一个项目",
			"itemMatching": "返回匹配的项目，即用于在指定索引处生成当前节点中项目的项目。"
		}
	},
	"name": "名称",
	"save": "保存",
	"dismiss": "忽略",
	"unlimited": "无限",
	"activate": "激活",
	"error": "错误",
	"user": "用户",
	"enabled": "已启用",
	"disabled": "已禁用",
	"type": "类型",
	"roles": {
		"editor": "编辑器",
		"admin": "管理员",
		"viewer": "观众"
	},
	"role": "角色"
};
const _reusableDynamicText = {
	"readMore": "阅读更多",
	"learnMore": "了解更多",
	"moreInfo": "更多信息",
	"oauth2": {
		"clientId": "客户端 ID",
		"clientSecret": "客户端密钥"
	}
};
const error = "错误";
const forgotPassword = "忘记密码";
const settings = "设置";
const startupError = "连接到 n8n 时出错";
var zh_CN_default = {
	_reusableBaseText,
	_reusableDynamicText,
	"generic.annotations": "注解",
	"generic.annotationData": "高亮显示的数据",
	"generic.any": "任何",
	"generic.allow": "允许",
	"generic.deny": "拒绝",
	"generic.docs": "文档",
	"generic.documentation": "文档",
	"generic.back": "返回",
	"generic.cancel": "取消",
	"generic.connect": "连接",
	"generic.open": "开放",
	"generic.openResource": "打开 {resource}",
	"generic.add": "添加",
	"generic.close": "关闭",
	"generic.clear": "清除",
	"generic.confirm": "确认",
	"generic.create": "创建",
	"generic.start": "开始",
	"generic.create.workflow": "创建工作流",
	"generic.deleteWorkflowError": "删除工作流时出现问题",
	"generic.archiveWorkflowError": "问题归档工作流程",
	"generic.unarchiveWorkflowError": "问题解压工作流程",
	"generic.filtersApplied": "当前已应用筛选器。",
	"generic.field": "字段",
	"generic.fields": "字段",
	"generic.folderCount": "文件夹 | {count} 个文件夹 | {count} 个文件夹",
	"generic.folder": "文件夹",
	"generic.keepBuilding": "继续构建",
	"generic.learnMore": "了解更多",
	"generic.recommended": "推荐",
	"generic.reset": "重置",
	"generic.resetAllFilters": "重置所有筛选器",
	"generic.communityNode": "社区节点",
	"generic.communityNode.tooltip": "这是一个来自我们社区的节点。它是 {packageName} 包的一部分。 <a href=\"{docURL}\" target=\"_blank\" title=\"阅读 n8n 文档\">了解更多</a>",
	"generic.officialNode.tooltip": "这是一个由{author}维护的官方节点",
	"generic.copy": "复制",
	"generic.copied": "已复制",
	"generic.delete": "删除",
	"generic.edit": "编辑",
	"generic.keepEditing": "继续编辑",
	"generic.dontShowAgain": "不再显示",
	"generic.enterprise": "企业版",
	"generic.executions": "执行",
	"generic.tag_plural": "标签",
	"generic.tag": "标签 | {count} 个标签",
	"generic.tests": "评估",
	"generic.templates": "模板",
	"generic.optional": "可选的",
	"generic.or": "或",
	"generic.clickToCopy": "点击复制",
	"generic.copiedToClipboard": "已复制到剪贴板",
	"generic.beta": "测试版",
	"generic.betaProper": "测试版",
	"generic.yes": "是",
	"generic.no": "否",
	"generic.rating": "评分",
	"generic.refresh": "刷新",
	"generic.retry": "重试",
	"generic.error": "发生了一些错误",
	"generic.error.subworkflowCreationFailed": "创建子工作流时出错",
	"generic.settings": "设置",
	"generic.service": "服务",
	"generic.star": "星星",
	"generic.tryNow": "立即尝试",
	"generic.startNow": "现在开始",
	"generic.dismiss": "忽略",
	"generic.saving": "保存中",
	"generic.name": "名字",
	"generic.description": "描述",
	"generic.unsavedWork.confirmMessage.headline": "离开前保存更改？",
	"generic.unsavedWork.confirmMessage.message": "如果你不保存，可能会丢失你的修改。",
	"generic.unsavedWork.confirmMessage.confirmButtonText": "保存",
	"generic.unsavedWork.confirmMessage.cancelButtonText": "不保存就离开",
	"generic.trial.message.days": "还剩 1 天 | 还剩 {count} 天",
	"generic.trial.message.hours": "剩余1小时 | {count}小时剩余",
	"generic.trial.message.minutes": "还剩1分钟 | 还剩 {count} 分钟",
	"generic.trial.tooltip.days": "您的试用期还剩 1 天。升级以继续使用 n8n。 | 在您的试用期中还剩 {count} 天。升级以继续使用 n8n。",
	"generic.trial.tooltip.hours": "你的试用期还剩1小时。升级以继续使用 n8n。 | 你的试用期还剩{count}小时。升级以继续使用 n8n。",
	"generic.trial.tooltip.minutes": "您的试用期还剩1分钟。升级以继续使用 n8n。 | 试用期还剩 {count} 分钟。升级以继续使用 n8n。",
	"generic.upgrade": "升级",
	"generic.upgradeNow": "立即升级",
	"generic.update": "更新",
	"generic.credential": "凭证 | {count} 个凭证 | {count} 个凭证",
	"generic.credentials": "凭据",
	"generic.workflow": "工作流 | {count} 个工作流 | {count} 个工作流",
	"generic.workflowSaved": "工作流更改已保存",
	"generic.autosave.retrying": "自动保存失败：{error}\n将在 {retryIn} 后重试...",
	"generic.editor": "编辑器",
	"generic.seePlans": "查看计划",
	"generic.loading": "正在加载",
	"generic.loadingEllipsis": "加载中...",
	"generic.and": "和",
	"generic.ownedByMe": "（您）",
	"generic.moreInfo": "更多信息",
	"generic.next": "下一步",
	"generic.pro": "专业版",
	"generic.variable_plural": "变量",
	"generic.folders_plural": "文件夹",
	"generic.variable": "变量 | {count} 个变量",
	"generic.viewDocs": "查看文档",
	"generic.workflows": "工作流程",
	"generic.rename": "重命名",
	"generic.missing.permissions": "执行此操作缺少权限",
	"generic.shortcutHint": "或按下",
	"generic.unknownError": "发生了一个未知错误",
	"generic.upgradeToEnterprise": "升级到企业版",
	"generic.never": "绝不",
	"generic.list.clearSelection": "清除选择",
	"generic.list.selected": "{count} 行已选择 | {count} 行已选择",
	"generic.project": "项目",
	"generic.projects": "项目",
	"generic.your": "你的",
	"generic.apiKey": "API 密钥",
	"generic.search": "搜索",
	"generic.showMore": "显示更多",
	"generic.showLess": "显示更少",
	"generic.stopAll": "全部停止",
	"generic.published": "已发布",
	"generic.notPublished": "未发布",
	"generic.tip": "提示",
	"about.aboutN8n": "关于 n8n",
	"about.close": "关闭",
	"about.license": "许可证",
	"about.n8nLicense": "可持续使用许可证 + n8n 企业许可证",
	"about.n8nVersion": "n8n 版本",
	"about.sourceCode": "源代码",
	"about.instanceID": "实例 ID",
	"about.debug.title": "调试",
	"about.debug.message": "复制调试信息",
	"about.debug.toast.title": "调试信息",
	"about.debug.toast.message": "已将调试信息复制到剪贴板",
	"about.thirdPartyLicenses": "第三方许可证",
	"about.thirdPartyLicensesLink": "查看所有第三方许可协议",
	"about.thirdPartyLicenses.downloadError": "下载第三方许可证文件失败。",
	"askAi.dialog.title": "“询问 AI”即将准备就绪",
	"askAi.dialog.body": "我们仍在进行最后的润色。很快，您将能够<strong>从简单的文本提示自动生成代码</strong>。加入候补名单，提前获取此功能。",
	"askAi.dialog.signup": "加入候补名单",
	"activationModal.butYouCanSeeThem": "但您可以在",
	"activationModal.executionList": "执行列表",
	"activationModal.gotIt": "知道了",
	"activationModal.ifYouChooseTo": "如果您选择",
	"activationModal.saveExecutions": "保存执行。",
	"activationModal.theseExecutionsWillNotShowUp": "这些执行不会立即显示在编辑器中，",
	"activationModal.workflowPublished": "工作流已发布",
	"activationModal.yourTriggerWillNowFire": "您的触发器现在将自动触发生产执行。",
	"activationModal.yourTriggersWillNowFire": "您的触发器现在将自动触发生产执行。",
	"activationModal.yourWorkflowWillNowListenForEvents": "您的工作流现在将监听来自 {serviceName} 的事件并触发执行。",
	"activationModal.yourWorkflowWillNowRegularlyCheck": "您的工作流现在将定期检查 {serviceName} 的事件并为其触发执行。",
	"annotationTagsManager.manageTags": "管理执行标签",
	"annotationTagsView.usage": "使用情况（所有工作流）",
	"annotationTagsView.inUse": "{count} 个执行 | {count} 个执行",
	"auth.changePassword": "更改密码",
	"auth.changePassword.currentPassword": "当前密码",
	"auth.changePassword.mfaCode": "双因素代码",
	"auth.changePassword.error": "更改密码时出现问题",
	"auth.changePassword.missingTokenError": "缺少令牌",
	"auth.changePassword.missingUserIdError": "缺少用户 ID",
	"auth.changePassword.passwordUpdated": "密码已更新",
	"auth.changePassword.passwordUpdatedMessage": "您现在可以使用新密码登录",
	"auth.changePassword.passwordsMustMatchError": "密码必须匹配",
	"auth.changePassword.reenterNewPassword": "重新输入新密码",
	"auth.changePassword.tokenValidationError": "无效的密码重置令牌",
	"auth.confirmPassword": "确认密码",
	"auth.confirmPassword.currentPassword": "当前密码",
	"auth.confirmPassword.confirmPasswordToChangeEmail": "请确认您的密码以更改您的电子邮件地址。",
	"auth.defaultPasswordRequirements": "8 个以上字符，至少 1 个数字和 1 个大写字母",
	"auth.validation.missingParameters": "缺少令牌或用户 ID",
	"auth.email": "电子邮件",
	"auth.firstName": "名字",
	"auth.lastName": "姓氏",
	"auth.newPassword": "新密码",
	"auth.password": "密码",
	"auth.role": "角色",
	"auth.roles.default": "默认",
	"auth.roles.member": "成员",
	"auth.roles.admin": "@:_reusableBaseText.roles.admin",
	"auth.roles.owner": "所有者",
	"auth.roles.chatUser": "聊天用户",
	"auth.agreement.label": "我希望接收安全和产品更新",
	"auth.setup.next": "下一步",
	"auth.setup.settingUpOwnerError": "设置所有者时出现问题",
	"auth.setup.setupOwner": "设置所有者帐户",
	"auth.signin": "登录",
	"auth.signin.error": "登录时出现问题",
	"auth.signout": "注销",
	"auth.signout.error": "无法注销",
	"auth.signup.finishAccountSetup": "完成帐户设置",
	"auth.signup.missingTokenError": "缺少令牌",
	"auth.signup.setupYourAccount": "设置您的帐户",
	"auth.signup.setupYourAccountError": "设置您的帐户时出现问题",
	"auth.signup.tokenValidationError": "验证邀请令牌时出现问题",
	"aiAssistant.name": "n8n 人工智能",
	"aiAssistant.assistant": "助手",
	"aiAssistant.tabs.ask": "询问",
	"aiAssistant.tabs.build": "构建",
	"aiAssistant.reducedHelp.chat.notice": "您已选择不分享实际数据值，因此 AI 的回答将不太准确，且缺乏上下文感知。",
	"aiAssistant.tabs.builder.disabled.tooltip": "AI Builder 已被禁用，因为已关闭将数据值发送给 AI 的功能。要使用 AI Builder，请在 AI 使用设置中启用它。",
	"aiAssistant.builder.mode": "AI构建器",
	"aiAssistant.builder.placeholder": "请请求 n8n 构建…",
	"aiAssistant.builder.assistantPlaceholder": "您想要修改或添加什么？",
	"aiAssistant.builder.characterLimit": "您已达到 { limit } 字符限制",
	"aiAssistant.builder.generateNew": "生成新工作流程",
	"aiAssistant.builder.newWorkflowNotice": "创建的工作流将被添加到编辑器中",
	"aiAssistant.builder.feedbackPrompt": "这个工作流程有帮助吗？",
	"aiAssistant.builder.invalidPrompt": "提示验证失败。请重新尝试，更清晰地描述您的工作流程需求及支持的集成功能。",
	"aiAssistant.builder.workflowParsingError.title": "无法插入工作流",
	"aiAssistant.builder.workflowParsingError.content": "AI 返回的工作流无法被解析。请再试一次。",
	"aiAssistant.builder.error.title": "工作流更新失败",
	"aiAssistant.builder.canvasPrompt.title": "你想自动化什么？",
	"aiAssistant.builder.canvasPrompt.confirmTitle": "替换当前提示？",
	"aiAssistant.builder.canvasPrompt.confirmMessage": "这将替换您当前的提示。您确定吗？",
	"aiAssistant.builder.canvasPrompt.confirmButton": "替换",
	"aiAssistant.builder.canvasPrompt.cancelButton": "取消",
	"aiAssistant.builder.canvasPrompt.startManually.title": "手动开始",
	"aiAssistant.builder.canvasPrompt.startManually.subTitle": "添加第一个节点",
	"aiAssistant.builder.canvasPrompt.buildWithAI": "与人工智能一起构建",
	"aiAssistant.builder.streamAbortedMessage": "任务被中止",
	"aiAssistant.builder.executeMessage.description": "在执行你的工作流之前，请完成以下步骤：",
	"aiAssistant.builder.executeMessage.noIssues": "您的工作流已准备好执行。",
	"aiAssistant.builder.executeMessage.validationTooltip": "在执行之前完成上述步骤",
	"aiAssistant.builder.executeMessage.execute": "执行和完善",
	"aiAssistant.builder.executeMessage.chooseModel": "选择模型",
	"aiAssistant.builder.executeMessage.chooseCredentials": "选择凭据",
	"aiAssistant.builder.executeMessage.noExecutionData": "工作流执行无法开始。请再试一次。",
	"aiAssistant.builder.executeMessage.executionSuccess": "工作流执行成功。",
	"aiAssistant.builder.executeMessage.executionFailedOnNode": "工作流在节点 \"{nodeName}\" 上执行失败：{errorMessage}",
	"aiAssistant.builder.executeMessage.executionFailed": "工作流执行失败：{errorMessage}",
	"aiAssistant.builder.executeMessage.fillParameter": "更新 \"{label}\" 参数",
	"aiAssistant.builder.executeMessage.addMissingCredentials": "添加缺失的凭据：",
	"aiAssistant.builder.executeMessage.nodeListTwo": "{first} 和 {second}",
	"aiAssistant.builder.executeMessage.nodeListLast": "{list}，和 {last}",
	"aiAssistant.builder.executeMessage.nodeListMore": "{list}，还有 {count} 个 | {list}，还有 {count} 个",
	"aiAssistant.builder.toast.title": "发送聊天消息以开始执行",
	"aiAssistant.builder.toast.description": "请在聊天面板中发送消息以开始执行您的工作流程。",
	"aiAssistant.builder.restoreError.title": "版本恢复失败",
	"aiAssistant.builder.disabledTooltip.autosaving": "正在保存工作流...",
	"aiAssistant.builder.disabledTooltip.readOnly": "当前有另一位用户正在编辑此工作流",
	"aiAssistant.builder.notification.title": "工作流就绪 - n8n",
	"aiAssistant.builder.notification.body": "已完成构建 {workflowName}",
	"aiAssistant.builder.notification.inputNeeded.title": "需要输入 - n8n",
	"aiAssistant.builder.notification.inputNeeded.body": "等待您对 {workflowName} 的回复",
	"aiAssistant.builder.notificationBanner.text": "想在代理完成构建时收到通知吗？",
	"aiAssistant.builder.notificationBanner.notify": "通知",
	"aiAssistant.newSessionModal.title.part1": "开始新的",
	"aiAssistant.newSessionModal.title.part2": "会话",
	"aiAssistant.newSessionModal.message": "您已经有一个活跃的 n8n AI 会话。开始新会话将清除您当前的对话记录。",
	"aiAssistant.newSessionModal.question": "您确定要开始新的会话吗？",
	"aiAssistant.newSessionModal.confirm": "开始新的会话",
	"aiAssistant.serviceError.message": "无法连接到 n8n 的 AI 服务",
	"aiAssistant.payloadTooBig.message": "负载数据大小超出限制",
	"aiAssistant.codeUpdated.message.title": "n8n AI 修改的工作流",
	"aiAssistant.codeUpdated.message.body1": "打开",
	"aiAssistant.codeUpdated.message.body2": "节点以查看更改",
	"aiAssistant.thinkingSteps.analyzingError": "正在分析错误...",
	"aiAssistant.thinkingSteps.thinking": "思考中",
	"aiAssistant.prompts.currentView.workflowList": "用户当前正在查看工作流列表。",
	"aiAssistant.prompts.currentView.credentialsList": "用户当前正在查看凭证列表。",
	"aiAssistant.prompts.currentView.executionsView": "用户当前正在查看当前打开的工作流的执行列表。",
	"aiAssistant.prompts.currentView.workflowEditor": "用户当前正在 n8n 编辑器中查看当前工作流，而未选择任何特定节点。",
	"aiAssistant.tooltip": "n8n AI",
	"aiAssistant.coachmark.title": "提问模式已启用",
	"aiAssistant.coachmark.body": "就 n8n 提出问题、获取关于错误的帮助，或了解自动化。随时切换到 Build 以创建工作流。",
	"aiAssistant.coachmark.gotIt": "明白了",
	"aiAssistant.askMode.emptyState.title": "向 n8n AI 提问",
	"aiAssistant.askMode.emptyState.body1": "就 n8n、你的工作流，或如何完成一个任务来提问。这不会消耗你任何 AI 积分。",
	"aiAssistant.askMode.emptyState.body2": "查找该",
	"aiAssistant.askMode.emptyState.body3": "在整个用户界面中，用于获取上下文帮助的按钮。",
	"aiAssistant.askMode.inputPlaceholder": "你需要什么帮助？",
	"banners.confirmEmail.message.1": "为了确保您的帐户安全并防止将来出现访问问题，请确认您的",
	"banners.confirmEmail.message.2": "电子邮件地址。",
	"banners.confirmEmail.button": "确认电子邮件",
	"banners.confirmEmail.toast.success.heading": "已发送确认电子邮件",
	"banners.confirmEmail.toast.success.message": "请检查您的收件箱并点击确认链接。",
	"banners.confirmEmail.toast.error.heading": "发送确认电子邮件时出现问题",
	"banners.confirmEmail.toast.error.message": "请稍后重试。",
	"banners.nonProductionLicense.message": "此 n8n 实例未获得生产用途许可。",
	"banners.trial.message.days": "您的 n8n 试用还剩 1 天 | 在您的 n8n 试用中还剩 {count} 天",
	"banners.trial.message.hours": "你的 n8n 试用期还剩 1 小时 | 你的 n8n 试用期还剩 {count} 小时",
	"banners.trial.message.minutes": "你的 n8n 试用期还剩 1 分钟 | 在你的 n8n 试用期还剩 {count} 分钟",
	"banners.trialOver.message": "您的试用期已结束。立即升级以继续自动化。",
	"banners.v1.message": "n8n 已更新至版本 1，引入了一些重大更改。有关更多信息，请参阅<a target=\"_blank\" href=\"https://docs.n8n.io/1-0-migration-checklist\">迁移指南</a>。",
	"banners.workflowAutoDeactivated.message": "由于多次执行崩溃，该工作流已被自动停用。请审查并在准备就绪时重新激活它。",
	"binaryDataDisplay.backToList": "返回列表",
	"binaryDataDisplay.backToOverviewPage": "返回概览页",
	"binaryDataDisplay.noDataFoundToDisplay": "未找到要显示的数据",
	"binaryDataDisplay.yourBrowserDoesNotSupport": "您的浏览器不支持 video 元素。请将其更新到最新版本。",
	"chat.hide": "隐藏聊天",
	"chat.open": "打开聊天",
	"chat.window.title": "聊天",
	"chat.window.logs": "最新日志",
	"chat.window.logsFromNode": "来自 {nodeName} 节点",
	"chat.window.noChatNode": "无聊天节点",
	"chat.window.noExecution": "尚未执行任何操作",
	"chat.window.chat.placeholder": "键入消息，或按“向上”箭头查看上一条消息",
	"chat.window.chat.placeholderPristine": "键入消息",
	"chat.window.chat.sendButtonText": "发送",
	"chat.window.chat.provideMessage": "请提供消息",
	"chat.window.chat.emptyChatMessage": "空聊天消息",
	"chat.window.chat.emptyChatMessage.v2": "发送下方消息以触发聊天流程",
	"chat.window.chat.chatMessageOptions.reuseMessage": "重用消息",
	"chat.window.chat.chatMessageOptions.repostMessage": "重新发布消息",
	"chat.window.chat.chatMessageOptions.executionId": "执行 ID",
	"chat.window.chat.unpinAndExecute.description": "发送消息将覆盖固定的聊天节点数据。",
	"chat.window.chat.unpinAndExecute.title": "取消固定聊天输出数据？",
	"chat.window.chat.unpinAndExecute.confirm": "取消固定并发送",
	"chat.window.chat.unpinAndExecute.cancel": "取消",
	"chat.window.chat.response.empty": "[无响应。请确保最后执行的节点输出要在此处显示的内容]",
	"chat.window.session.title": "会话",
	"chat.window.session.id": "会话：{id}",
	"chat.window.session.id.copy": "（点击复制）",
	"chat.window.session.reset": "重置",
	"chat.window.session.resetSession": "重置聊天会话",
	"chatHub.agent.personalAgents": "个人代理",
	"chatHub.agent.workflowAgents": "工作流代理",
	"chatHub.agent.newAgent": "新代理人",
	"chatHub.agent.unavailableAgent": "不可用的代理",
	"chatHub.agent.configureCredentials": "配置凭据",
	"chatHub.agent.addModel": "添加模型",
	"chatHub.agent.credentialsMissing": "缺少凭据",
	"chatHub.agent.card.menu.edit": "编辑",
	"chatHub.agent.card.menu.delete": "删除",
	"chatHub.agent.card.noDescription": "没有描述",
	"chatHub.agent.card.button.edit": "编辑",
	"chatHub.agent.card.button.moreOptions": "更多选项",
	"chatHub.agent.editor.title.new": "新代理",
	"chatHub.agent.editor.title.edit": "编辑代理",
	"chatHub.agent.editor.name.label": "名称",
	"chatHub.agent.editor.name.placeholder": "输入代理名称",
	"chatHub.agent.editor.iconPicker.button.tooltip": "更改图标",
	"chatHub.agent.editor.description.label": "描述",
	"chatHub.agent.editor.description.placeholder": "输入代理描述（可选）",
	"chatHub.agent.editor.systemPrompt.label": "系统提示",
	"chatHub.agent.editor.systemPrompt.placeholder": "输入系统提示",
	"chatHub.agent.editor.model.label": "模型",
	"chatHub.agent.editor.tools.label": "工具",
	"chatHub.agent.editor.loading": "加载代理...",
	"chatHub.agent.editor.saving": "正在保存...",
	"chatHub.agent.editor.save": "保存",
	"chatHub.agent.editor.cancel": "取消",
	"chatHub.agent.editor.delete": "删除",
	"chatHub.agent.editor.deleting": "正在删除...",
	"chatHub.agent.editor.delete.confirm.title": "删除代理",
	"chatHub.agent.editor.delete.confirm.message": "您确定要删除这个代理吗？此操作无法撤销。",
	"chatHub.agent.editor.delete.confirm.button": "删除",
	"chatHub.agent.editor.delete.cancel.button": "取消",
	"chatHub.agent.editor.error.load": "加载代理失败",
	"chatHub.agent.editor.error.save": "保存代理失败",
	"chatHub.agent.editor.error.delete": "删除代理失败",
	"chatHub.agent.editor.success.create": "代理创建成功",
	"chatHub.agent.editor.success.update": "代理更新成功",
	"chatHub.agent.editor.success.delete": "代理已成功删除",
	"chatHub.agents.loadError": "加载代理失败",
	"chatHub.agents.delete.confirm.message": "你确定要删除这个代理吗？",
	"chatHub.agents.delete.confirm.title": "删除代理",
	"chatHub.agents.delete.confirm.button": "删除",
	"chatHub.agents.delete.cancel.button": "取消",
	"chatHub.agents.delete.success": "代理已成功删除",
	"chatHub.agents.delete.error": "无法删除代理。",
	"chatHub.agents.button.newAgent": "新代理",
	"chatHub.agents.search.placeholder": "搜索",
	"chatHub.agents.sort.updatedAt": "按最近更新排序",
	"chatHub.agents.sort.createdAt": "按创建日期排序",
	"chatHub.agents.empty.noMatch": "没有与您搜索条件匹配的代理。",
	"chatHub.workflowAgents.title": "工作流代理",
	"chatHub.workflowAgents.description": "浏览并使用基于 n8n 工作流构建的 AI 代理。",
	"chatHub.workflowAgents.empty.noAgents": "没有可用的工作流代理。",
	"chatHub.workflowAgents.empty.noMatch": "没有符合您搜索条件的工作流代理。",
	"chatHub.personalAgents.title": "个人代理",
	"chatHub.personalAgents.description": "创建并管理具有特定指令和行为的自定义 AI 代理",
	"chatHub.personalAgents.empty.noAgents": "没有可用的个人代理。创建您的第一个自定义代理以开始。",
	"chatHub.personalAgents.empty.noMatch": "没有符合您搜索条件的个人代理。",
	"chatHub.chat.greeting": "开始与某人聊天",
	"chatHub.chat.greeting.fallback": "选择一个模型开始聊天",
	"chatHub.welcome.header": "你的代理人们，任何模型",
	"chatHub.welcome.subtitle": "一个地方，与你所构建或连接的一切进行沟通。",
	"chatHub.welcome.card.workflowAgents.title": "工作流代理",
	"chatHub.welcome.card.workflowAgents.description": "使用 n8n 工作流构建的代理，由你实例中的构建者提供。",
	"chatHub.welcome.card.personalAgents.title": "个人代理",
	"chatHub.welcome.card.personalAgents.description": "具有你自己定义的自定义指令和工具集的简单代理。",
	"chatHub.welcome.card.baseModels.title": "基础模型",
	"chatHub.welcome.card.baseModels.description": "你有凭据可以访问的任一提供商的聊天模型。",
	"chatHub.welcome.button.startNewChat": "开始新对话",
	"chatHub.welcome.button.inviteChatUsers": "邀请聊天用户",
	"chatHub.welcome.inviteUpgrade.tooltip": "{link} 用于邀请聊天用户。了解更多 {docsLink}",
	"chatHub.welcome.inviteUpgrade.here": "这里。",
	"chatHub.chat.dropOverlay": "将文件拖放到此处以附加",
	"chatHub.chat.scrollToBottom": "滚动到底部",
	"chatHub.chat.header.button.editAgent": "编辑代理",
	"chatHub.chat.header.button.newChat": "新对话",
	"chatHub.chat.header.button.openWorkflow": "打开工作流",
	"chatHub.chat.prompt.microphone.accessDenied": "麦克风访问被拒绝",
	"chatHub.chat.prompt.microphone.allowAccess": "请允许访问麦克风以使用语音输入",
	"chatHub.chat.prompt.microphone.noSpeech": "未检测到语音。请再试一次。",
	"chatHub.chat.prompt.callout.selectModel.new": "请点击 {link} 以开始对话。",
	"chatHub.chat.prompt.callout.selectModel.new.link": "选择一个模型",
	"chatHub.chat.prompt.callout.selectModel.existing": "请点击 {link} 以继续对话",
	"chatHub.chat.prompt.callout.selectModel.existing.link": "重新选择一个模型",
	"chatHub.chat.prompt.callout.setCredentials.new": "请通过 {link} 与 {provider} 开始对话",
	"chatHub.chat.prompt.callout.setCredentials.new.link": "设置凭据",
	"chatHub.chat.prompt.callout.setCredentials.existing": "请通过 {link} 与 {provider} 继续对话",
	"chatHub.chat.prompt.callout.setCredentials.existing.link": "设置凭据",
	"chatHub.chat.prompt.button.attach": "附加",
	"chatHub.chat.prompt.button.attach.disabled": "所选模型不支持文件附件。",
	"chatHub.chat.prompt.button.stopRecording": "停止录制",
	"chatHub.chat.prompt.button.voiceInput": "语音输入",
	"chatHub.chat.prompt.button.send": "发送",
	"chatHub.chat.prompt.button.stopGenerating": "停止生成",
	"chatHub.chat.prompt.placeholder.withModel": "消息 {model}...",
	"chatHub.chat.prompt.placeholder.selectModel": "选择一个模型",
	"chatHub.tools.editor.title": "添加工具",
	"chatHub.tools.editor.credential": "凭据",
	"chatHub.tools.editor.credential.placeholder": "选择凭据…",
	"chatHub.tools.editor.credential.createNew": "新建",
	"chatHub.tools.editor.credential.createNew.permissionDenied": "你当前的角色不允许你创建凭据",
	"chatHub.tools.editor.selectedCount": "{count} 个工具已选择 | {count} 个工具已选择",
	"chatHub.tools.editor.confirm": "确认",
	"chatHub.tools.editor.cancel": "取消",
	"chatHub.tools.selector.label.count": "{count} 个工具 | {count} 个工具",
	"chatHub.tools.selector.label.default": "工具",
	"chatHub.tools.selector.disabled.tooltip": "所选模型不支持工具。",
	"chatHub.credentials.selector.title": "选择 {provider} 的凭据",
	"chatHub.credentials.selector.chooseOrCreate": "为 {provider} 选择或创建凭据",
	"chatHub.credentials.selector.createNew": "新建",
	"chatHub.credentials.selector.createNew.permissionDenied": "您当前的角色不允许您创建凭据。",
	"chatHub.credentials.selector.confirm": "选择",
	"chatHub.credentials.selector.cancel": "取消",
	"chatHub.message.actions.readAloud": "朗读",
	"chatHub.message.actions.stopReading": "停止阅读",
	"chatHub.message.actions.edit": "编辑",
	"chatHub.message.actions.regenerate": "重新生成",
	"chatHub.message.actions.executionId": "执行 ID",
	"chatHub.message.edit.cancel": "取消",
	"chatHub.message.edit.send": "发送",
	"chatHub.message.error.unknown": "发生了错误。请再试一次。",
	"chatHub.error.payloadTooLarge": "消息太大",
	"chatHub.error.badRequest": "无效的请求",
	"chatHub.error.forbidden": "权限被拒绝",
	"chatHub.error.serverError": "服务器错误",
	"chatHub.error.serverErrorWithReason": "服务器错误：{error}",
	"chatHub.error.unknown": "未知错误",
	"chatHub.error.noConnection": "连接失败",
	"chatHub.error.fetchConversationFailed": "无法加载对话",
	"chatHub.error.sendMessageFailed": "发送消息失败",
	"chatHub.error.updateModelFailed": "更新模型失败",
	"chatHub.error.updateToolsFailed": "更新工具失败",
	"chatHub.models.selector.defaultLabel": "选择模型",
	"chatHub.models.selector.personalProject": "个人",
	"chatHub.models.selector.noMatch": "没有符合您搜索条件的代理。",
	"chatHub.models.selector.moreModels": "更多 {providerName} 模型...",
	"chatHub.models.byIdSelector.title": "按 ID 选择 {provider} 模型",
	"chatHub.models.byIdSelector.choose": "输入模型标识符（例如“gpt-4”）",
	"chatHub.models.byIdSelector.confirm": "选择",
	"chatHub.models.byIdSelector.cancel": "取消",
	"chatHub.session.actions.rename": "重命名",
	"chatHub.session.actions.delete": "删除",
	"chatHub.session.updateTitle.error": "无法更新对话标题。",
	"chatHub.session.delete.confirm.message": "您确定要删除此对话吗？",
	"chatHub.session.delete.confirm.title": "删除对话",
	"chatHub.session.delete.confirm.button": "删除",
	"chatHub.session.delete.cancel.button": "取消",
	"chatHub.session.delete.success": "会话已删除",
	"chatHub.session.delete.error": "无法删除对话",
	"chatHub.sidebar.title": "聊天",
	"chatHub.sidebar.button.toggle": "切换侧边栏",
	"chatHub.sidebar.link.newChat": "新聊天",
	"chatHub.sidebar.link.workflowAgents": "工作流代理",
	"chatHub.sidebar.link.personalAgents": "个人代理",
	"chatHub.sidebar.loadMoreSessions": "加载更多",
	"chatEmbed.infoTip.description": "使用 n8n 聊天包将聊天添加到外部应用程序。",
	"chatEmbed.infoTip.link": "更多信息",
	"chatEmbed.title": "将聊天嵌入到您的网站中",
	"chatEmbed.close": "关闭",
	"chatEmbed.install": "首先，安装 n8n 聊天包：",
	"chatEmbed.paste.cdn": "将以下代码粘贴到 HTML 文件的 {code} 标记中的任何位置。",
	"chatEmbed.paste.cdn.file": "<body>",
	"chatEmbed.paste.vue": "接下来，将以下代码粘贴到您的 {code} 文件中。",
	"chatEmbed.paste.vue.file": "App.vue",
	"chatEmbed.paste.react": "接下来，将以下代码粘贴到您的 {code} 文件中。",
	"chatEmbed.paste.react.file": "App.ts",
	"chatEmbed.paste.other": "接下来，将以下代码粘贴到您的 {code} 文件中。",
	"chatEmbed.paste.other.file": "main.ts",
	"chatEmbed.packageInfo.description": "n8n 聊天小部件可以轻松定制以满足您的需求。",
	"chatEmbed.packageInfo.link": "阅读完整文档",
	"chatEmbed.chatTriggerNode": "您可以使用聊天触发节点将聊天小部件直接嵌入到 n8n 中。",
	"chatEmbed.url": "https://www.npmjs.com/package/{'@'}n8n/chat",
	"codeEdit.edit": "编辑",
	"codeNodeEditor.askAi": "✨ 询问 AI",
	"codeNodeEditor.completer.$()": "{nodeName} 节点的输出数据",
	"codeNodeEditor.completer.$execution": "检索或设置当前执行的元数据",
	"codeNodeEditor.completer.$execution.id": "当前工作流执行的 ID",
	"codeNodeEditor.completer.$execution.mode": "返回 <code>test</code>（表示该执行是通过点击 n8n 中的按钮触发的）或 <code>production</code>（表示该执行是自动触发的）",
	"codeNodeEditor.completer.$execution.resumeUrl": "调用以恢复在“等待”节点处等待的工作流的 Webhook URL。",
	"codeNodeEditor.completer.$execution.resumeFormUrl": "用于访问“等待”节点生成的表单的 URL。",
	"codeNodeEditor.completer.$execution.customData": "设置和获取自定义执行数据（例如，用于按此筛选执行）。您还可以使用“执行数据”节点执行此操作。",
	"codeNodeEditor.completer.$execution.customData.set": "在指定的键下存储自定义执行数据。使用此选项可以轻松按此数据筛选执行。",
	"codeNodeEditor.completer.$execution.customData.set.args.key": "存储数据的键（标识符）",
	"codeNodeEditor.completer.$execution.customData.set.args.value": "要存储的数据",
	"codeNodeEditor.completer.$execution.customData.set.examples.1": "存储用户的电子邮件，以便稍后轻松检索与该用户相关的所有执行",
	"codeNodeEditor.completer.$execution.customData.get": "返回在给定键下存储的自定义执行数据。",
	"codeNodeEditor.completer.$execution.customData.get.args.key": "存储数据的键（标识符）",
	"codeNodeEditor.completer.$execution.customData.get.examples.1": "获取用户的电子邮件（先前已存储）",
	"codeNodeEditor.completer.$execution.customData.setAll": "为执行设置多个自定义数据的键值对。使用此选项可以轻松按此数据筛选执行。",
	"codeNodeEditor.completer.$execution.customData.setAll.args.obj": "包含要设置的数据的键值对的 JavaScript 对象",
	"codeNodeEditor.completer.$execution.customData.getAll": "返回当前执行中已设置的所有自定义数据的键值对。",
	"codeNodeEditor.completer.$ifEmpty": "如果第一个参数不为空，则返回第一个参数，否则返回第二个参数。以下内容视为空： <code>\"</code>、<code>[]</code>、<code>{'{}'}</code>、<code>null</code>、<code>undefined</code>",
	"codeNodeEditor.completer.$ifEmpty.args.value": "如果该值不为空，则返回该值",
	"codeNodeEditor.completer.$ifEmpty.args.valueIfEmpty": "如果 <code>value</code> 为空，则返回该值",
	"codeNodeEditor.completer.$input": "当前节点的输入数据",
	"codeNodeEditor.completer.$input.all": "@:_reusableBaseText.codeNodeEditor.completer.all",
	"codeNodeEditor.completer.$input.first": "@:_reusableBaseText.codeNodeEditor.completer.first",
	"codeNodeEditor.completer.$input.item": "生成当前项的项目",
	"codeNodeEditor.completer.$input.itemMatching": "@:_reusableBaseText.codeNodeEditor.completer.itemMatching",
	"codeNodeEditor.completer.$input.last": "@:_reusableBaseText.codeNodeEditor.completer.last",
	"codeNodeEditor.completer.$itemIndex": "当前正在处理的项在输入项列表中的位置",
	"codeNodeEditor.completer.$jmespath": "使用 <a target=\"_blank\" href=\"https://docs.n8n.io/code/cookbook/jmespath/\">JMESPath</a> 表达式从对象（或对象数组）中提取数据。对于查询复杂的嵌套对象非常有用。如果表达式无效，则返回 <code>undefined</code>。",
	"codeNodeEditor.completer.$jmespath.args.obj": "从中检索数据的对象或对象数组",
	"codeNodeEditor.completer.$jmespath.args.expression": "用于定义要从对象中检索的数据的 <a target=\"_blank\" href=\"https://jmespath.org/examples.html\">JMESPath 表达式</a>",
	"codeNodeEditor.completer.$jmespath.examples.1": "获取数组中的所有名称",
	"codeNodeEditor.completer.$jmespath.examples.2": "获取所有 20 岁以下的人的姓名和年龄",
	"codeNodeEditor.completer.$jmespath.examples.3": "获取 20 岁以下第一个人的姓名",
	"codeNodeEditor.completer.$jmespath.examples.4": "获取每个预订中需要双人间的客人的姓名",
	"codeNodeEditor.completer.$if": "根据 <code>condition</code> 返回两个值之一。类似于 JavaScript 中的 <code>?</code> 运算符。",
	"codeNodeEditor.completer.$if.args.condition": "要进行的检查。应计算为 <code>true</code> 或 <code>false</code>",
	"codeNodeEditor.completer.$if.args.valueIfTrue": "如果条件为 true，则返回该值",
	"codeNodeEditor.completer.$if.args.valueIfFalse": "如果条件为 false，则返回该值",
	"codeNodeEditor.completer.$if.examples.1": "如果时间在下午 5 点之前，则返回“早上好”，否则返回“晚上好”",
	"codeNodeEditor.completer.$if.examples.2": "可以组合 $if() 调用\n如果时间在上午 10 点之前，则返回“早上好”，如果时间在下午 5 点之前，则返回“早上好”，否则返回“晚上好”",
	"codeNodeEditor.completer.$max": "返回给定数字中的最大值，如果没有参数，则返回 -Infinity。",
	"codeNodeEditor.completer.$max.args.numbers": "要比较的数字",
	"codeNodeEditor.completer.$min": "返回给定数字中的最小值，如果没有参数，则返回 Infinity。",
	"codeNodeEditor.completer.$now": "表示当前时刻的 DateTime。\n\n使用工作流的时区（可以在工作流设置中更改）。",
	"codeNodeEditor.completer.$parameter": "当前节点的配置设置。这些是在节点的 UI 中填写的参数（例如，其操作）。",
	"codeNodeEditor.completer.$prevNode": "有关当前输入来源的节点的信息。\n\n在“合并”节点中，始终使用第一个输入连接器。",
	"codeNodeEditor.completer.$prevNode.name": "当前输入来源的节点的名称。\n\n如果存在多个（例如，在“合并”节点中），则始终使用当前节点的第一个输入连接器。",
	"codeNodeEditor.completer.$prevNode.outputIndex": "当前输入来源的输出连接器的索引。如果上一个节点有多个输出（例如，“If”或“Switch”节点），请使用此选项。\n\n如果存在多个（例如，在“合并”节点中），则始终使用当前节点的第一个输入连接器。",
	"codeNodeEditor.completer.$prevNode.runIndex": "生成当前输入的上一个节点的运行。\n\n如果存在多个（例如，在“合并”节点中），则始终使用当前节点的第一个输入连接器。",
	"codeNodeEditor.completer.$runIndex": "当前节点执行的当前运行的索引。从 0 开始。",
	"codeNodeEditor.completer.$nodeVersion": "当前节点的版本（显示在节点设置窗格的底部）",
	"codeNodeEditor.completer.$tool": "当前正在执行的工具的名称和参数。仅在 HITL 节点中可用。",
	"codeNodeEditor.completer.$today": "表示当前一天开始时的午夜的 DateTime。\n\n使用实例的时区（除非在工作流的设置中覆盖）。",
	"codeNodeEditor.completer.$vars": "工作流可用的<a target=\"_blank\" href=\"https://docs.n8n.io/code/variables/\">变量</a>",
	"codeNodeEditor.completer.$vars.varName.global": "为此 n8n 实例定义的全局变量。所有变量的值均为字符串。",
	"codeNodeEditor.completer.$vars.varName.global.overridden": "全局变量被项目 {projectName} 变量覆盖。所有变量都评估为字符串。",
	"codeNodeEditor.completer.$vars.varName.project": "在 {projectName} 项目中定义的项目变量。所有变量的值都为字符串。",
	"codeNodeEditor.completer.$secrets": "来自<a target=\"_blank\" href=\"https://docs.n8n.io/external-secrets/\">外部秘密保管库</a>的密钥（如果已配置）。密钥值永远不会显示给用户。仅在凭证字段中可用。",
	"codeNodeEditor.completer.$secrets.provider": "连接到此 n8n 实例的外部密钥提供商。",
	"codeNodeEditor.completer.$secrets.provider.varName": "连接到此 n8n 实例的外部密钥。所有密钥都计算为字符串。",
	"codeNodeEditor.completer.$secrets.group.project": "项目保管库",
	"codeNodeEditor.completer.$secrets.group.project.description": "外部密钥库已连接到此项目。",
	"codeNodeEditor.completer.$secrets.group.global": "全局保险库",
	"codeNodeEditor.completer.$secrets.group.global.description": "外部秘密库已连接到此 n8n 实例。",
	"codeNodeEditor.completer.$workflow": "有关当前工作流的信息",
	"codeNodeEditor.completer.$workflow.active": "工作流是否处于活动状态",
	"codeNodeEditor.completer.$workflow.id": "工作流 ID。也可以在工作流的 URL 中找到。",
	"codeNodeEditor.completer.$workflow.name": "工作流的名称，如编辑器顶部所示",
	"codeNodeEditor.completer.$response": "上次 HTTP 调用返回的响应。仅在“HTTP 请求”节点中可用。",
	"codeNodeEditor.completer.$response.headers": "上次 HTTP 调用返回的标头。仅在“HTTP 请求”节点中可用。",
	"codeNodeEditor.completer.$response.statusCode": "上次 HTTP 调用返回的 HTTP 状态代码。仅在“HTTP 请求”节点中可用。",
	"codeNodeEditor.completer.$response.statusMessage": "关于请求状态的可选消息。仅在“HTTP 请求”节点中可用。",
	"codeNodeEditor.completer.$response.body": "上次 HTTP 调用返回的响应对象的主体。仅在“HTTP 请求”节点中可用",
	"codeNodeEditor.completer.$request": "在上次节点运行时发送的请求对象。仅在“HTTP 请求”节点中可用。",
	"codeNodeEditor.completer.$pageCount": "节点已提取的结果页面数。仅在“HTTP 请求”节点中可用。",
	"codeNodeEditor.completer.dateTime": "Luxon DateTime。使用此对象解析、格式化和操作日期和时间。",
	"codeNodeEditor.completer.binary": "返回当前节点当前项的任何二进制输入数据。<code>$input.item.binary</code> 的简写。",
	"codeNodeEditor.completer.binary.mimeType": "表示文件内容格式的字符串，例如 <code>image/jpeg</code>",
	"codeNodeEditor.completer.binary.fileSize": "表示文件大小的字符串（例如 <code>1 kB</code>）",
	"codeNodeEditor.completer.binary.fileName": "文件的名称，包括扩展名",
	"codeNodeEditor.completer.binary.fileExtension": "附加到文件名的后缀（例如，<code>txt</code>）",
	"codeNodeEditor.completer.binary.fileType": "表示文件类型的字符串，例如 <code>image</code>。对应于 MIME 类型的第一部分。",
	"codeNodeEditor.completer.binary.id": "文件的唯一 ID。用于标识存储在磁盘上或 S3 等存储服务中的文件。",
	"codeNodeEditor.completer.binary.directory": "存储文件所在目录的路径。用于区分不同目录中同名的文件。如果 n8n 配置为将文件存储在其数据库中，则不会设置。",
	"codeNodeEditor.completer.item.binary": "返回该项包含的任何二进制数据。",
	"codeNodeEditor.completer.item.json": "返回该项包含的 JSON 数据。",
	"codeNodeEditor.completer.math": "数学实用方法",
	"codeNodeEditor.completer.globalObject": "操作 JavaScript 对象的方法",
	"codeNodeEditor.completer.globalObject.assign": "将所有可枚举的对象属性合并到目标对象中。返回修改后的目标对象。",
	"codeNodeEditor.completer.globalObject.entries": "对象的键和值",
	"codeNodeEditor.completer.globalObject.keys": "对象的键",
	"codeNodeEditor.completer.globalObject.values": "对象的值",
	"codeNodeEditor.completer.json": "返回当前节点的当前项的 JSON 输入数据。<code>$input.item.json</code> 的简写。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.expandFormat": "生成区域设置的完全展开的格式令牌，不会引用字符，因此引用的令牌不会正确往返。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromFormat": "从输入字符串和格式字符串创建 DateTime。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromFormatExplain": "说明如何通过 fromFormat() 解析字符串。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromHTTP": "从 HTTP 标头日期创建 DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromISO": "从 ISO 8601 字符串创建 DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromISO.args.isoString": "要转换为 DateTime 的 ISO 8601 字符串",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromISO.args.opts": "配置选项。有关更多信息，请参阅 <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimefromiso\">Luxon 文档</a>。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromJSDate": "从 JavaScript Date 对象创建 DateTime。使用默认时区",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromMillis": "从自 epoch 以来（即自 1970 年 1 月 1 日 00:00:00 UTC 以来）的毫秒数创建 DateTime。使用默认时区",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromMillis.args.milliseconds": "自 epoch 以来（即自 1970 年 1 月 1 日 00:00:00 UTC 以来）的毫秒数",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromMillis.args.opts": "配置选项。有关更多信息，请参阅 <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimefrommillis\">Luxon 文档</a>。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromObject": "从 JavaScript 对象创建 DateTime，该对象具有诸如“年”和“小时”之类的键，以及合理的默认值",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromRFC2822": "从 RFC 2822 字符串创建 DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromString": "已弃用：请改用 `fromFormat`。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromStringExplain": "已弃用：请改用 `fromFormatExplain`。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSQL": "从 SQL 日期、时间或日期时间创建 DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSeconds": "从自 epoch 以来（即自 1970 年 1 月 1 日 00:00:00 UTC 以来）的秒数创建 DateTime。使用默认时区",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSeconds.args.seconds": "自 epoch 以来（即自 1970 年 1 月 1 日 00:00:00 UTC 以来）的秒数",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSeconds.args.opts": "配置选项。有关更多信息，请参阅 <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimefromseconds\">Luxon 文档</a>。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.invalid": "创建无效的 DateTime。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.isDateTime": "检查对象是否为 DateTime。跨上下文边界工作",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.isDateTime.args.maybeDateTime": "要检查的潜在 DateTime。只有 Luxon DateTime 类的实例才会返回 <code>true</code>。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.local": "创建本地 DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.max": "返回多个日期时间的最大值。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.max.args.dateTimes": "要比较的 DateTime 对象",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.min": "返回多个日期时间的最小值。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.min.args.dateTimes": "要比较的 DateTime 对象",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.now": "在工作流的本地时区为当前时刻创建 DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.parseFormatForOpts": "生成区域设置的完全展开的格式令牌，不会引用字符，因此引用的令牌不会正确往返。",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.utc": "在 UTC 中创建 DateTime",
	"codeNodeEditor.completer.luxon.instanceMethods.day": "月份中的日期 (1-31)。",
	"codeNodeEditor.completer.luxon.instanceMethods.daysInMonth": "返回此 DateTime 所在月份的天数。",
	"codeNodeEditor.completer.luxon.instanceMethods.daysInYear": "返回此 DateTime 所在年份的天数。",
	"codeNodeEditor.completer.luxon.instanceMethods.diff": "将两个 DateTime 之间的差异作为 Duration 返回。",
	"codeNodeEditor.completer.luxon.instanceMethods.diffNow": "返回此 DateTime 与当前时间之间的差异。",
	"codeNodeEditor.completer.luxon.instanceMethods.endOf": "将 DateTime 四舍五入到其一个单位的末尾，例如月份的末尾",
	"codeNodeEditor.completer.luxon.instanceMethods.endOf.args.unit": "要四舍五入到的末尾的单位。可以是 <code>year</code>、<code>quarter</code>、<code>month</code>、<code>week</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code> 或 <code>millisecond</code>。",
	"codeNodeEditor.completer.luxon.instanceMethods.endOf.args.opts": "包含影响输出的选项的对象。可能的属性：\n<code>useLocaleWeeks</code> (boolean)：是否在计算周的开始时使用区域设置。默认为 false。",
	"codeNodeEditor.completer.luxon.instanceMethods.equals": "如果两个 DateTime 表示完全相同的时刻并且在同一时区，则返回 <code>true</code>。对于不太严格的比较，请使用 <code>hasSame()</code>。",
	"codeNodeEditor.completer.luxon.instanceMethods.equals.args.other": "要比较的另一个 DateTime",
	"codeNodeEditor.completer.luxon.instanceMethods.hasSame": "如果两个 DateTime 在指定的单位内相同，则返回 true。时区将被忽略（仅比较本地时间），因此如果需要，请先使用 toUTC()。",
	"codeNodeEditor.completer.luxon.instanceMethods.hasSame.args.other": "要比较的另一个 DateTime",
	"codeNodeEditor.completer.luxon.instanceMethods.hasSame.args.unit": "要检查相同性直至的时间单位。<code>year</code>、<code>quarter</code>、<code>month</code>、<code>week</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code> 或 <code>millisecond</code> 之一。",
	"codeNodeEditor.completer.luxon.instanceMethods.hour": "一天中的小时 (0-23)。",
	"codeNodeEditor.completer.luxon.instanceMethods.invalidExplanation": "返回此 DateTime 变为无效的原因的说明，如果 DateTime 有效，则返回 null。",
	"codeNodeEditor.completer.luxon.instanceMethods.invalidReason": "如果此 DateTime 无效，则返回错误代码，如果 DateTime 有效，则返回 null。",
	"codeNodeEditor.completer.luxon.instanceMethods.isInDST": "DateTime 是否处于夏令时。",
	"codeNodeEditor.completer.luxon.instanceMethods.isInLeapYear": "DateTime 是否处于闰年。",
	"codeNodeEditor.completer.luxon.instanceMethods.isOffsetFixed": "获取此时区的偏移量是否会发生变化，如在夏令时中。",
	"codeNodeEditor.completer.luxon.instanceMethods.isValid": "返回 DateTime 是否有效。当 DateTime 是从无效的日历信息创建时（例如，第 13 个月或 2 月 30 日）时，将发生无效的 DateTime。DateTime 是通过对另一个无效日期执行操作创建的。",
	"codeNodeEditor.completer.luxon.instanceMethods.locale": "DateTime 的区域设置，例如“en-GB”。格式化 DateTime 时使用该区域设置。",
	"codeNodeEditor.completer.luxon.instanceMethods.max": "返回多个日期时间的最大值。",
	"codeNodeEditor.completer.luxon.instanceMethods.millisecond": "秒的毫秒 (0-999)。",
	"codeNodeEditor.completer.luxon.instanceMethods.min": "返回多个日期时间的最小值",
	"codeNodeEditor.completer.luxon.instanceMethods.minus": "减去小时、分钟、秒或毫秒会使时间戳增加正确的毫秒数。",
	"codeNodeEditor.completer.luxon.instanceMethods.minute": "小时的分钟数 (0-59)。",
	"codeNodeEditor.completer.luxon.instanceMethods.month": "月份 (1-12)。",
	"codeNodeEditor.completer.luxon.instanceMethods.monthLong": "文本长月份名称，例如“October”。如果未指定，则默认为系统的区域设置。",
	"codeNodeEditor.completer.luxon.instanceMethods.monthShort": "文本缩写月份名称，例如“Oct”。如果未指定，则默认为系统的区域设置。",
	"codeNodeEditor.completer.luxon.instanceMethods.numberingSystem": "获取 DateTime 的编号系统，例如“beng”。格式化 DateTime 时使用该编号系统。",
	"codeNodeEditor.completer.luxon.instanceMethods.offset": "获取此 DateTime 的 UTC 偏移量（以分钟为单位）",
	"codeNodeEditor.completer.luxon.instanceMethods.offsetNameLong": "获取时区当前偏移量的长人名，例如“东部标准时间”或“东部夏令时”。",
	"codeNodeEditor.completer.luxon.instanceMethods.offsetNameShort": "获取时区当前偏移量的短人名，例如“EST”或“EDT”。'",
	"codeNodeEditor.completer.luxon.instanceMethods.offsetNumber": "获取时区当前偏移量的短人名，例如“EST”或“EDT”。'",
	"codeNodeEditor.completer.luxon.instanceMethods.ordinal": "获取序号（即一年中的日期）。",
	"codeNodeEditor.completer.luxon.instanceMethods.outputCalendar": "获取 DateTime 的输出日历，例如“伊斯兰”。格式化 DateTime 时使用输出日历。",
	"codeNodeEditor.completer.luxon.instanceMethods.plus": "增加小时、分钟、秒或毫秒会使时间戳增加正确的毫秒数。",
	"codeNodeEditor.completer.luxon.instanceMethods.quarter": "一年中的季度 (1-4)。",
	"codeNodeEditor.completer.luxon.instanceMethods.reconfigure": "“设置”区域设置、编号系统或输出日历。返回新构造的 DateTime。",
	"codeNodeEditor.completer.luxon.instanceMethods.resolvedLocaleOptions": "返回此 DateTime 的已解析 Intl 选项。这对于了解格式化方法的行为很有用。",
	"codeNodeEditor.completer.luxon.instanceMethods.second": "分钟的秒数 (0-59)。",
	"codeNodeEditor.completer.luxon.instanceMethods.set": "将新值分配给 DateTime 的指定单位。要对 DateTime 进行四舍五入，另请参阅 <code>startOf()</code> 和 <code>endOf()</code>。",
	"codeNodeEditor.completer.luxon.instanceMethods.set.args.values": "包含要设置的单位和要分配的相应值的对象。可能的键为 <code>year</code>、<code>month</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code> 和 <code>millsecond</code>。",
	"codeNodeEditor.completer.luxon.instanceMethods.setLocale": "设置区域设置，该区域设置确定 DateTime 的语言和格式。在生成 DateTime 的文本表示形式时非常有用，例如，使用 <code>format()</code> 或 <code>toLocaleString()</code>。",
	"codeNodeEditor.completer.luxon.instanceMethods.setLocale.args.locale": "要设置的区域设置，例如，英式英语的“en-GB”或巴西葡萄牙语的“pt-BR”。<a target=\"blank\" href=”https://www.localeplanet.com/icu/”>列表</a>（非官方）",
	"codeNodeEditor.completer.luxon.instanceMethods.setZone": "将 DateTime 转换为给定的时区。除非在选项中指定，否则 DateTime 仍表示相同的时刻。另请参阅 <code>toLocal()</code> 和 <code>toUTC()</code>。",
	"codeNodeEditor.completer.luxon.instanceMethods.setZone.args.zone": "区域标识符，格式为 <code>'America/New_York'</code>、<code>'UTC+3'</code> 或字符串 <code>'local'</code> 或 <code>'utc'</code>。<code>'local'</code> 是工作流的本地时区，这可以在工作流设置中更改。",
	"codeNodeEditor.completer.luxon.instanceMethods.setZone.args.opts": "影响输出的选项。可能的属性：\n<code>keepCalendarTime</code> (boolean)：是否保持时间相同，仅更改偏移量。默认为 false。",
	"codeNodeEditor.completer.luxon.instanceMethods.startOf": "将 DateTime 四舍五入到其一个单位的开头，例如月份的开头",
	"codeNodeEditor.completer.luxon.instanceMethods.startOf.args.unit": "要四舍五入到的开头的单位。<code>year</code>、<code>quarter</code>、<code>month</code>、<code>week</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code> 或 <code>millisecond</code> 之一。",
	"codeNodeEditor.completer.luxon.instanceMethods.startOf.args.opts": "包含影响输出的选项的对象。可能的属性：\n<code>useLocaleWeeks</code> (boolean)：是否在计算周的开始时使用区域设置。默认为 false。",
	"codeNodeEditor.completer.luxon.instanceMethods.toBSON": "返回此 DateTime 的 BSON 可序列化等效项。",
	"codeNodeEditor.completer.luxon.instanceMethods.toFormat": "返回根据指定的格式字符串格式化的此 DateTime 的字符串表示形式。",
	"codeNodeEditor.completer.luxon.instanceMethods.toHTTP": "返回此 DateTime 的字符串表示形式，适用于 HTTP 标头。",
	"codeNodeEditor.completer.luxon.instanceMethods.toISO": "返回此 DateTime 的符合 ISO 8601 的字符串表示形式。",
	"codeNodeEditor.completer.luxon.instanceMethods.toISO.args.opts": "配置选项。有关更多信息，请参阅 <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimetoiso\">Luxon 文档</a>。",
	"codeNodeEditor.completer.luxon.instanceMethods.toISODate": "返回此 DateTime 的日期组成部分的符合 ISO 8601 的字符串表示形式。",
	"codeNodeEditor.completer.luxon.instanceMethods.toISOTime": "返回此 DateTime 的时间组成部分的符合 ISO 8601 的字符串表示形式。",
	"codeNodeEditor.completer.luxon.instanceMethods.toISOWeekDate": "返回此 DateTime 的周日期的符合 ISO 8601 的字符串表示形式。",
	"codeNodeEditor.completer.luxon.instanceMethods.toJSON": "返回此 DateTime 的 ISO 8601 表示形式，适用于 JSON。",
	"codeNodeEditor.completer.luxon.instanceMethods.toJsDate": "返回与此 DateTime 等效的 JavaScript Date。",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocal": "将 DateTime 转换为工作流的本地时区。除非在参数中指定，否则 DateTime 仍表示相同的时刻。工作流的时区可以在工作流设置中设置。",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocal.example": "如果时区为 Europe/Berlin",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleParts": "返回格式“部分”的数组，表示单个令牌以及元数据。",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleString": "返回表示 DateTime 的本地化字符串，即以其区域设置对应的语言和格式。如果未指定，则默认为系统的区域设置。",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleString.args.opts": "渲染的配置选项。有关完整列表，请参阅 <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters”>Intl.DateTimeFormat</a>。默认为渲染短日期。",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleString.example": "渲染的配置选项。有关完整列表，请参阅 <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters”>Intl.DateTimeFormat</a>。默认为渲染短日期。",
	"codeNodeEditor.completer.luxon.instanceMethods.toMillis": "以毫秒为单位返回 Unix 时间戳（自 1970 年 1 月 1 日起经过的毫秒数）",
	"codeNodeEditor.completer.luxon.instanceMethods.toObject": "返回 JavaScript 对象，其中包含此 DateTime 的年、月、日等。",
	"codeNodeEditor.completer.luxon.instanceMethods.toRFC2822": "返回此 DateTime 的兼容 RFC 2822 的字符串表示形式，始终使用 UTC。",
	"codeNodeEditor.completer.luxon.instanceMethods.toRelative": "返回相对于当前时间的文本时间表示形式，例如“两天后”。默认情况下向下舍入。",
	"codeNodeEditor.completer.luxon.instanceMethods.toRelative.args.opts": "影响输出的选项。可能的属性：\n<code>unit</code> = 默认单位（<code>years</code>、<code>months</code>、<code>days</code> 等）。\n<code>locale</code> = 要使用的语言和格式（例如，<code>de</code>、<code>fr</code>）",
	"codeNodeEditor.completer.luxon.instanceMethods.toRelativeCalendar": "返回相对于今天的日期字符串表示形式，例如“昨天”或“下个月”。",
	"codeNodeEditor.completer.luxon.instanceMethods.toSQL": "返回此 DateTime 的字符串表示形式，适用于 SQL DateTime。",
	"codeNodeEditor.completer.luxon.instanceMethods.toSQLDate": "返回此 DateTime 的字符串表示形式，适用于 SQL Date。",
	"codeNodeEditor.completer.luxon.instanceMethods.toSQLTime": "返回此 DateTime 的字符串表示形式，适用于 SQL Time。",
	"codeNodeEditor.completer.luxon.instanceMethods.toSeconds": "以秒为单位返回 Unix 时间戳（自 1970 年 1 月 1 日起经过的秒数）",
	"codeNodeEditor.completer.luxon.instanceMethods.toString": "返回 DateTime 的字符串表示形式。类似于 <code>toISO()</code>。有关更多格式化选项，请参阅 <code>format()</code> 或 <code>toLocaleString()</code>。",
	"codeNodeEditor.completer.luxon.instanceMethods.toUTC": "将 DateTime 转换为 UTC 时区。除非在参数中指定，否则 DateTime 仍表示相同的时刻。使用 <code>setZone()</code> 转换为其他时区。",
	"codeNodeEditor.completer.luxon.instanceMethods.toUTC.args.offset": "UTC 的偏移量（以分钟为单位）",
	"codeNodeEditor.completer.luxon.instanceMethods.toUTC.args.opts": "影响输出的选项。可能的属性：\n<code>keepCalendarTime</code> (boolean)：是否保持时间相同，仅更改偏移量。默认为 false。",
	"codeNodeEditor.completer.luxon.instanceMethods.toUnixInteger": "返回此 DateTime 的 epoch 秒（作为整数）。",
	"codeNodeEditor.completer.luxon.instanceMethods.until": "返回此 DateTime 和另一个 DateTime 之间跨越的 Interval。",
	"codeNodeEditor.completer.luxon.instanceMethods.valueOf": "返回此 DateTime 的 epoch 毫秒。",
	"codeNodeEditor.completer.luxon.instanceMethods.weekNumber": "一年中的周数 (1-52 左右)。",
	"codeNodeEditor.completer.luxon.instanceMethods.weekYear": "获取周数年份。",
	"codeNodeEditor.completer.luxon.instanceMethods.weekday": "一周中的某一天。1 是星期一，7 是星期日。",
	"codeNodeEditor.completer.luxon.instanceMethods.weekdayLong": "文本长工作日名称，例如“星期三”。如果未指定，则默认为系统的区域设置。",
	"codeNodeEditor.completer.luxon.instanceMethods.weekdayShort": "文本缩写工作日名称，例如“星期三”。如果未指定，则默认为系统的区域设置。",
	"codeNodeEditor.completer.luxon.instanceMethods.weeksInWeekYear": "返回此 DateTime 所在年份的周数。",
	"codeNodeEditor.completer.luxon.instanceMethods.year": "年份。",
	"codeNodeEditor.completer.luxon.instanceMethods.zone": "与 DateTime 关联的时区",
	"codeNodeEditor.completer.luxon.instanceMethods.zoneName": "获取时区的名称。",
	"codeNodeEditor.completer.selector.all": "@:_reusableBaseText.codeNodeEditor.completer.all",
	"codeNodeEditor.completer.selector.context": "有关节点的额外数据",
	"codeNodeEditor.completer.selector.first": "@:_reusableBaseText.codeNodeEditor.completer.first",
	"codeNodeEditor.completer.selector.item": "返回匹配的项目，即用于生成当前节点中当前项目的项目。",
	"codeNodeEditor.completer.selector.args.branchIndex": "要使用的节点的输出分支。默认为第一个分支（索引 0）",
	"codeNodeEditor.completer.selector.args.runIndex": "要使用的节点的运行。默认为第一次运行（索引 0）",
	"codeNodeEditor.completer.selector.itemMatching": "@:_reusableBaseText.codeNodeEditor.completer.itemMatching",
	"codeNodeEditor.completer.selector.itemMatching.args.currentItemIndex": "要匹配的当前节点中项目的索引。",
	"codeNodeEditor.completer.selector.last": "@:_reusableBaseText.codeNodeEditor.completer.last",
	"codeNodeEditor.completer.selector.params": "给定节点的配置设置。这些是在节点的 UI 中填写的参数（例如，其操作）。",
	"codeNodeEditor.completer.selector.isExecuted": "如果节点已执行，则为 <code>true</code>，否则为 <code>false</code>",
	"codeNodeEditor.completer.section.input": "输入",
	"codeNodeEditor.completer.section.prevNodes": "较早的节点",
	"codeNodeEditor.completer.section.metadata": "元数据",
	"codeNodeEditor.completer.section.fields": "字段",
	"codeNodeEditor.completer.section.properties": "属性",
	"codeNodeEditor.completer.section.methods": "方法",
	"codeNodeEditor.completer.section.otherMethods": "其他方法",
	"codeNodeEditor.completer.section.recommended": "建议",
	"codeNodeEditor.completer.section.recommendedMethods": "建议方法",
	"codeNodeEditor.completer.section.other": "其他",
	"codeNodeEditor.completer.section.edit": "编辑",
	"codeNodeEditor.completer.section.query": "查询",
	"codeNodeEditor.completer.section.format": "格式",
	"codeNodeEditor.completer.section.component": "组件",
	"codeNodeEditor.completer.section.case": "大小写",
	"codeNodeEditor.completer.section.cast": "强制转换",
	"codeNodeEditor.completer.section.compare": "比较",
	"codeNodeEditor.completer.section.validation": "验证",
	"codeNodeEditor.completer.section.variable.project": "项目变量",
	"codeNodeEditor.completer.section.variable.global": "全局变量",
	"codeNodeEditor.linter.allItems.firstOrLastCalledWithArg": "不应使用参数调用。",
	"codeNodeEditor.linter.allItems.emptyReturn": "代码没有正确返回项目。请返回一个对象数组，每个对象对应您要输出的项目。",
	"codeNodeEditor.linter.allItems.itemCall": "`item` 是要访问的属性，而不是要调用的方法。您是否指的是不带括号的 `.item`？",
	"codeNodeEditor.linter.allItems.itemMatchingNoArg": "`.itemMatching()` 希望传入一个项索引作为其参数。",
	"codeNodeEditor.linter.allItems.unavailableItem": "旧版 `item` 仅在“对每个项目运行一次”模式下可用。",
	"codeNodeEditor.linter.allItems.unavailableProperty": "`.item` 仅在“对每个项目运行一次”模式下正常工作。在这里它将始终返回第一个项目。请改用 `.first()`。",
	"codeNodeEditor.linter.allItems.unavailableVar": "仅在“对每个项目运行一次”模式下可用。",
	"codeNodeEditor.linter.bothModes.directAccess.firstOrLastCall": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.bothModes.directAccess.itemProperty": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.bothModes.varDeclaration.itemProperty": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.bothModes.varDeclaration.itemSubproperty": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.eachItem.emptyReturn": "代码没有返回对象。请返回表示输出项的对象",
	"codeNodeEditor.linter.eachItem.legacyItemAccess": "`item` 是一个旧版变量。请考虑使用 `$input.item`",
	"codeNodeEditor.linter.eachItem.returnArray": "代码没有返回对象。找到了数组。请返回表示输出项的对象",
	"codeNodeEditor.linter.eachItem.unavailableItems": "旧版 `items` 仅在“对所有项目运行一次”模式下可用。",
	"codeNodeEditor.linter.eachItem.unavailableMethod": "方法 `$input.{method}()` 仅在“对所有项目运行一次”模式下可用。",
	"codeNodeEditor.linter.eachItem.preferFirst": "为了 n8n 可以优化执行，请优先使用 `.first()` 而不是 `.item`",
	"codeNodeEditor.linter.bothModes.syntaxError": "语法错误",
	"codeNodeEditor.linter.bothModes.dollarSignVariable": "请使用字符串字面值，而不是变量，以便 n8n 可以优化执行。",
	"codeNodeEditor.askAi.placeholder": "告诉 AI 您希望代码实现什么目标。您可以使用点表示法引用输入数据字段（例如 user.email）",
	"codeNodeEditor.askAi.intro": "你好 AI，生成可以实现以下目的的 JavaScript 代码...",
	"codeNodeEditor.askAi.help": "帮助",
	"codeNodeEditor.askAi.generateCode": "生成代码",
	"codeNodeEditor.askAi.noInputData": "当此节点有传入的输入数据（来自工作流中较早的节点）时，您可以生成代码",
	"codeNodeEditor.askAi.sureLeaveTab": "您确定要切换选项卡吗？代码生成将停止",
	"codeNodeEditor.askAi.areYouSure": "您确定吗？",
	"codeNodeEditor.askAi.switchTab": "切换选项卡",
	"codeNodeEditor.askAi.noPrompt": "首先在生成代码之前输入以上提示",
	"codeNodeEditor.askAi.onlyAllItemsMode": "“询问 AI”生成仅在“对所有项目运行一次”模式下起作用",
	"codeNodeEditor.askAi.promptTooShort": "在尝试生成代码之前，输入至少 {minLength} 个字符",
	"codeNodeEditor.askAi.generateCodeAndReplace": "生成并替换代码",
	"codeNodeEditor.askAi.replaceCurrentCode": "替换当前代码？",
	"codeNodeEditor.askAi.areYouSureToReplace": "您确定要生成新代码吗？当前代码将被替换。",
	"codeNodeEditor.askAi.loadingPhrase0": "AI 齿轮正在运转，即将完成...",
	"codeNodeEditor.askAi.loadingPhrase1": "上上下下左右左右 b a 开始...",
	"codeNodeEditor.askAi.loadingPhrase2": "正在咨询 Jan Oberhauser...",
	"codeNodeEditor.askAi.loadingPhrase3": "正在收集字节和片段...",
	"codeNodeEditor.askAi.loadingPhrase4": "正在检查是否有其他 AI 知道答案...",
	"codeNodeEditor.askAi.loadingPhrase5": "正在检查 Stack Overflow...",
	"codeNodeEditor.askAi.loadingPhrase6": "正在处理数据，AI 风格...",
	"codeNodeEditor.askAi.loadingPhrase7": "请稍候，AI 魔法正在进行...",
	"codeNodeEditor.askAi.generationCompleted": "✨ 代码生成已完成",
	"codeNodeEditor.askAi.generationFailed": "代码生成失败",
	"codeNodeEditor.askAi.generationFailedUnknown": "由于未知原因，代码生成失败。请在几分钟后重试。",
	"codeNodeEditor.askAi.generationFailedWithReason": "代码生成失败，错误信息：{error}。请稍后重试。",
	"codeNodeEditor.askAi.generationFailedDown": "很抱歉，我们的 AI 服务当前不可用。请稍后重试。如果问题仍然存在，请联系支持人员。",
	"codeNodeEditor.askAi.generationFailedRate": "我们已达到与我们的 AI 合作伙伴的速率限制（请求过多）。请等待一分钟再重试。",
	"codeNodeEditor.askAi.generationFailedTooLarge": "您的工作流数据太大，无法供 AI 处理。请简化发送到代码节点的数据，然后重试。",
	"codeNodeEditor.tabs.askAi": "✨ 询问 AI",
	"codeNodeEditor.tabs.code": "代码",
	"codeNodeEditor.examples": "示例",
	"codeNodeEditor.parameters": "参数",
	"codeNodeEditor.optional": "可选",
	"codeNodeEditor.defaultsTo": "默认为 {default}。",
	"collectionParameter.choose": "选择...",
	"collectionParameter.addItem": "添加项",
	"collectionParameter.deleteItem": "删除",
	"collectionParameter.dragItem": "拖动以重新排序",
	"collectionParameter.noProperties": "无属性",
	"collectionParameter.allOptionsAdded": "所有选项都已添加",
	"communityNodeFooter.legacy": "遗产",
	"communityNodeFooter.manage": "管理",
	"communityNodeFooter.reportIssue": "报告问题",
	"credentialEdit.credentialConfig.accountConnected": "帐户已连接",
	"credentialEdit.credentialConfig.clickToCopy": "点击复制",
	"credentialEdit.credentialConfig.connectionTestedSuccessfully": "连接测试成功",
	"credentialEdit.credentialConfig.couldntConnectWithTheseSettings": "无法使用这些设置进行连接",
	"credentialEdit.credentialConfig.couldntConnectWithTheseSettings.sharee": "连接设置有问题。{owner} 可能会修复此问题",
	"credentialEdit.credentialConfig.needHelpFillingOutTheseFields": "需要帮助填写这些字段？",
	"credentialEdit.credentialConfig.oAuthRedirectUrl": "OAuth 重定向 URL",
	"credentialEdit.credentialConfig.openDocs": "打开文档",
	"credentialEdit.credentialConfig.pleaseCheckTheErrorsBelow": "请检查下面的错误",
	"credentialEdit.credentialConfig.pleaseCheckTheErrorsBelow.sharee": "连接设置有问题。{owner} 可能会修复此问题",
	"credentialEdit.credentialConfig.reconnect": "重新连接",
	"credentialEdit.credentialConfig.reconnectOAuth2Credential": "重新连接 OAuth2 凭证",
	"credentialEdit.credentialConfig.redirectUrlCopiedToClipboard": "重定向 URL 已复制到剪贴板",
	"credentialEdit.credentialConfig.retry": "重试",
	"credentialEdit.credentialConfig.retryCredentialTest": "重试凭证测试",
	"credentialEdit.credentialConfig.retrying": "正在重试",
	"credentialEdit.credentialConfig.subtitle": "在 {appName} 中，当提示输入 OAuth 回调或重定向 URL 时，请使用上面的 URL",
	"credentialEdit.credentialConfig.theServiceYouReConnectingTo": "您要连接到的服务",
	"credentialEdit.credentialConfig.missingCredentialType": "此凭证的类型不可用。当卸载先前安装的社区或自定义节点时，通常会发生这种情况。",
	"credentialEdit.credentialConfig.authTypeSelectorLabel": "使用以下方式连接",
	"credentialEdit.credentialConfig.authTypeSelectorTooltip": "用于连接的身份验证方法",
	"credentialEdit.credentialConfig.recommendedAuthTypeSuffix": "（推荐）",
	"credentialEdit.credentialConfig.externalSecrets": "企业计划用户可以从外部保管库中提取凭证。",
	"credentialEdit.credentialConfig.externalSecrets.moreInfo": "更多信息",
	"credentialEdit.credentialConfig.dynamicCredentials.title": "动态凭据设置",
	"credentialEdit.credentialConfig.dynamicCredentials.infoTip": "启用时，每次执行将使用触发用户的凭据，而不是单一固定的凭据。需要一个启用用户身份提取的 webhook 触发。你所连接的凭据仅用于手动测试，或当工作流使用非 webhook 触发器时使用。",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.cancelButtonText": "关闭",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.confirmButtonText": "继续编辑",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.headline": "关闭而不保存？",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.message": "是否确定要丢弃对 {credentialDisplayName} 凭证所做的更改？",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.cancelButtonText": "关闭",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.confirmButtonText": "继续编辑",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.headline": "关闭而不连接？",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.message": "您需要连接凭证才能使其工作",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.cancelButtonText": "",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText": "是，删除",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline": "删除凭证？",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.message": "是否确定要删除“{savedCredentialName}”？这可能会中断任何使用它的工作流。",
	"credentialEdit.credentialEdit.connection": "连接",
	"credentialEdit.credentialEdit.sharing": "共享",
	"credentialEdit.credentialEdit.couldNotFindCredentialOfType": "找不到类型为的凭证",
	"credentialEdit.credentialEdit.couldNotFindCredentialWithId": "找不到 ID 为的凭证",
	"credentialEdit.credentialEdit.delete": "删除",
	"credentialEdit.credentialEdit.details": "详细信息",
	"credentialEdit.credentialEdit.dynamic": "动态",
	"credentialEdit.credentialEdit.saving": "正在保存",
	"credentialEdit.credentialEdit.showError.createCredential.title": "创建凭证时出现问题",
	"credentialEdit.credentialEdit.showError.deleteCredential.title": "删除凭证时出现问题",
	"credentialEdit.credentialEdit.showError.generateAuthorizationUrl.message": "生成授权 URL 时出现问题",
	"credentialEdit.credentialEdit.showError.generateAuthorizationUrl.title": "OAuth 授权错误",
	"credentialEdit.credentialEdit.showError.loadCredential.title": "加载凭证时出现问题",
	"credentialEdit.credentialEdit.showError.updateCredential.title": "更新凭证时出现问题",
	"credentialEdit.credentialEdit.showMessage.title": "凭证已删除",
	"credentialEdit.credentialEdit.testing": "正在测试",
	"credentialEdit.credentialEdit.info.sharee": "只有 {credentialOwnerName} 可以编辑此连接",
	"credentialEdit.credentialInfo.allowUseBy": "允许以下用户使用",
	"credentialEdit.credentialInfo.created": "创建时间",
	"credentialEdit.credentialInfo.id": "ID",
	"credentialEdit.credentialInfo.lastModified": "上次修改时间",
	"credentialEdit.credentialEdit.setupGuide": "设置指南",
	"credentialEdit.credentialEdit.docs": "文档",
	"credentialEdit.oAuthButton.connectMyAccount": "连接我的帐户",
	"credentialEdit.oAuthButton.signInWithGoogle": "使用 Google 登录",
	"credentialEdit.credentialSharing.info.owner": "共享凭证允许用户在其工作流中使用它。他们无法访问凭证详细信息。",
	"credentialEdit.credentialSharing.info.sharee.team": "只有具有凭证共享权限的用户才能更改此凭证的共享对象",
	"credentialEdit.credentialSharing.info.sharee.personal": "只有 {credentialOwnerName} 或具有凭证共享权限的用户才能更改此凭证的共享对象",
	"credentialEdit.credentialSharing.info.sharee.fallback": "所有者",
	"credentialEdit.credentialSharing.list.delete": "删除",
	"credentialEdit.credentialSharing.list.delete.confirm.title": "删除访问权限？",
	"credentialEdit.credentialSharing.list.delete.confirm.message": "这可能会中断 {name} 在其中使用此凭证的任何工作流",
	"credentialEdit.credentialSharing.list.delete.confirm.confirmButtonText": "删除",
	"credentialEdit.credentialSharing.list.delete.confirm.cancelButtonText": "取消",
	"credentialEdit.credentialSharing.role.user": "用户",
	"credentialSelectModal.addNewCredential": "添加新凭证",
	"credentialSelectModal.continue": "继续",
	"credentialSelectModal.searchForApp": "搜索应用...",
	"credentialSelectModal.selectAnAppOrServiceToConnectTo": "选择要连接的应用或服务",
	"credentialsList.addNew": "添加新凭证",
	"credentialsList.confirmMessage.cancelButtonText": "",
	"credentialsList.confirmMessage.confirmButtonText": "是，删除",
	"credentialsList.confirmMessage.headline": "删除凭证？",
	"credentialsList.confirmMessage.message": "是否确定要删除 {credentialName}？",
	"credentialsList.created": "已创建",
	"credentialsList.credentials": "凭证",
	"credentialsList.deleteCredential": "删除凭证",
	"credentialsList.editCredential": "编辑凭证",
	"credentialsList.errorLoadingCredentials": "加载凭证时出错",
	"credentialsList.name": "@:_reusableBaseText.name",
	"credentialsList.operations": "操作",
	"credentialsList.showError.deleteCredential.title": "删除凭证时出现问题",
	"credentialsList.showMessage.title": "凭证已删除",
	"credentialsList.type": "类型",
	"credentialsList.updated": "已修改",
	"credentialsList.yourSavedCredentials": "您已保存的凭证",
	"credentials.heading": "凭证",
	"credentials.add": "添加凭证",
	"credentials.project.add": "将凭证添加到项目",
	"credentials.empty.heading": "{name}，让我们设置一个凭证",
	"credentials.empty.heading.userNotSetup": "设置凭证",
	"credentials.empty.description": "凭证允许工作流与您的应用和服务进行交互",
	"credentials.empty.button": "添加第一个凭证",
	"credentials.empty.button.disabled.tooltip": "您在项目中的当前角色不允许您创建凭证",
	"credentials.item.open": "打开",
	"credentials.item.delete": "删除",
	"credentials.item.move": "移动",
	"credentials.item.updated": "修改于",
	"credentials.item.created": "创建于",
	"credentials.item.owner": "所有者",
	"credentials.item.readonly": "只读",
	"credentials.item.needsSetup": "需要首次设置",
	"credentials.dynamic.tooltip": "此凭据使用解析器在运行时根据执行工作流的用户来选择正确的账户。",
	"credentials.dynamic.tooltipTitle": "动态凭据",
	"credentials.dynamic.badge": "动态",
	"credentials.dynamic.warning.noResolver": "已启用动态凭据，但尚未选择解析器。请在 {workflowSettings} 中选择一个解析器，以在运行时解析用户账户。",
	"credentials.dynamic.warning.noResolver.workflowSettings": "工作流设置",
	"credentials.dynamic.warning.noResolver.documentation": "文档",
	"credentials.search.placeholder": "搜索凭证...",
	"credentials.filters.type": "类型",
	"credentials.filters.setup": "需要首次设置",
	"credentials.filters.status": "状态",
	"credentials.filters.active": "由于应用了筛选器，某些凭证可能处于隐藏状态。",
	"credentials.filters.active.reset": "删除筛选器",
	"credentials.sort.lastUpdated": "按上次更新时间排序",
	"credentials.sort.lastCreated": "按上次创建时间排序",
	"credentials.sort.nameAsc": "按名称排序 (A-Z)",
	"credentials.sort.nameDesc": "按名称排序 (Z-A)",
	"credentials.noResults": "未找到凭证",
	"credentials.noResults.withSearch.switchToShared.preamble": "某些凭证可能处于",
	"credentials.noResults.withSearch.switchToShared.link": "隐藏状态",
	"credentials.create.personal.toast.title": "凭证已成功在您的个人空间中创建。",
	"credentials.create.project.toast.title": "凭证已在 {projectName} 中成功创建",
	"credentials.create.project.toast.text": "来自 {projectName} 的所有成员都将有权访问此凭证。",
	"dataDisplay.needHelp": "需要帮助？",
	"dataDisplay.nodeDocumentation": "节点文档",
	"dataDisplay.openDocumentationFor": "打开 {nodeTypeDisplayName} 文档",
	"dataMapping.dragColumnToFieldHint": "拖动到字段以将列映射到该字段",
	"dataMapping.dragFromPreviousHint": "首先点击此按钮，将先前节点中的数据映射到 <b>{name}</b>",
	"dataMapping.success.title": "您刚刚映射了一些数据！",
	"dataMapping.success.moreInfo": "查看我们的 <a href=\"https://docs.n8n.io/data/data-mapping\" target=\"_blank\">文档</a>，了解有关在 n8n 中映射数据的更多详细信息",
	"dataMapping.tableView.tableColumnsExceeded": "某些列已隐藏",
	"dataMapping.tableView.tableColumnsExceeded.tooltip": "您的数据有超过 {columnLimit} 列，因此某些列已隐藏。切换到 {link} 以查看所有数据。",
	"dataMapping.tableView.tableColumnsExceeded.tooltip.link": "JSON 视图",
	"dataMapping.tableView.columnCollapsing": "折叠行",
	"dataMapping.tableView.columnCollapsing.tooltip": "折叠行（以比较此列中的值）",
	"dataMapping.schemaView.emptyData": "无字段 - 项存在，但它们为空",
	"dataMapping.schemaView.emptySchema": "无字段 - 项目存在，但为空",
	"dataMapping.schemaView.emptySchemaWithBinary": "仅存在二进制数据。请使用“二进制”标签页查看。",
	"dataMapping.schemaView.executeSchema": "{link} 以查看输入数据",
	"dataMapping.schemaView.disabled": "此节点已禁用，将仅传递数据",
	"dataMapping.schemaView.noMatches": "没有与“{search}”匹配的结果",
	"dataMapping.schemaView.preview": "通常输出以下字段。{execute} 以查看实际的字段。{link}",
	"dataMapping.schemaView.previewLastExecution": "以下字段来自上次成功的执行。{execute}以刷新它们。",
	"dataMapping.schemaView.previewLastExecution.executePreviousNodes": "执行节点",
	"dataMapping.schemaView.preview.executeNode": "执行节点",
	"dataMapping.schemaView.previewExtraFields": "可能存在更多字段。执行该节点以确认。",
	"dataMapping.schemaView.previewNode": "预览",
	"dataMapping.schemaView.variablesContextTitle": "变量与上下文",
	"dataMapping.schemaView.execution.resumeUrl": "\"Wait\"节点的恢复URL",
	"dataMapping.schemaView.variablesUpgrade": "设置全局变量并在 Pro 或企业计划的工作流中使用它们。<a href=\"https://docs.n8n.io/code/variables/\" target=\"_blank\">详细信息</a>",
	"dataMapping.schemaView.variablesEmpty": "在此处<a href=\"/variables\" target=\"_blank\">创建可跨工作流程使用的变量</a>",
	"dataMapping.schemaView.mergeNotice": "此模式显示来自多个项目的字段。某些字段在单个项目中可能不存在。",
	"displayWithChange.cancelEdit": "取消编辑",
	"displayWithChange.clickToChange": "点击更改",
	"displayWithChange.setValue": "设置值",
	"duplicateWorkflowDialog.cancel": "@:_reusableBaseText.cancel",
	"duplicateWorkflowDialog.chooseOrCreateATag": "选择或创建标签",
	"duplicateWorkflowDialog.duplicateWorkflow": "复制工作流",
	"duplicateWorkflowDialog.enterWorkflowName": "输入工作流名称",
	"duplicateWorkflowDialog.save": "复制",
	"duplicateWorkflowDialog.errors.missingName.title": "缺少名称",
	"duplicateWorkflowDialog.errors.missingName.message": "请输入名称。",
	"duplicateWorkflowDialog.errors.forbidden.title": "复制工作流失败",
	"duplicateWorkflowDialog.errors.forbidden.message": "此操作被禁止。您是否具有正确的权限？",
	"duplicateWorkflowDialog.errors.generic.title": "复制工作流失败",
	"editor.mainHeader.githubButton.label": "在GitHub上为n8n-io/n8n项目点赞",
	"experiments.personalizedTemplatesV3.browseAllTemplates": "浏览我们的模板库",
	"experiments.personalizedTemplatesV3.couldntFind": "需要一些不同的东西吗？",
	"experiments.personalizedTemplatesV3.exploreTemplates": "开始使用 HubSpot 工作流：",
	"experiments.personalizedTemplatesV3.loadingTemplates": "加载推荐内容...",
	"experiments.personalizedTemplatesV3.recommendationTooltip": "为您推荐的工作流程",
	"experiments.personalizedTemplatesV3.recommendedForYou": "为您推荐",
	"experiments.resourceCenter.badge.noCredentials": "无需凭据",
	"experiments.resourceCenter.badge.noSetup": "无需配置",
	"experiments.resourceCenter.courses.title": "官方课程",
	"experiments.resourceCenter.getInspired.title": "获取灵感",
	"experiments.resourceCenter.gettingStarted.title": "快速入门",
	"experiments.resourceCenter.learnAnything.title": "学习任何事物",
	"experiments.resourceCenter.quickStart.title": "快速入门",
	"experiments.resourceCenter.seeMore": "查看更多",
	"experiments.resourceCenter.sidebar": "资源",
	"experiments.resourceCenter.sidebar.inspiration": "灵感",
	"experiments.resourceCenter.templateCard.useNow": "▶︎ 运行工作流",
	"experiments.resourceCenter.templatePreviews.title": "热门模板",
	"experiments.resourceCenter.title": "资源",
	"experiments.resourceCenter.viewAllTemplates": "查看所有模板",
	"experiments.resourceCenter.youtubeInspiration.title": "灵感视频",
	"experiments.resourceCenter.youtubeLearn.title": "学习视频",
	"experiments.resourceCenter.getStarted.title": "开始使用",
	"experiments.resourceCenter.learnN8n.title": "学习如何使用 n8n",
	"experiments.resourceCenter.featuredVideos.title": "精选视频教程",
	"experiments.resourceCenter.quickTips.title": "快速提示",
	"experiments.resourceCenter.masterclass.title": "大师课",
	"experiments.resourceCenter.learnTemplates.title": "入门模板",
	"experiments.resourceCenter.popularTemplates.title": "热门模板",
	"experiments.resourceCenter.automationIdeas.title": "自动化想法",
	"experiments.resourceCenter.sandbox.easySetup": "无需配置",
	"experiments.resourceCenter.sandbox.easySetupWorkflow": "易于设置的工作流",
	"experiments.resourceCenter.sandbox.tryItNow": "现在试试",
	"experiments.resourceCenter.sandbox.nodes": "{count} 个节点",
	"experiments.resourceCenter.course.hours": "{count} 小时",
	"experiments.resourceCenter.course.lessons": "{count} 节课",
	"experiments.resourceCenter.video.level": "等级：{level}",
	"experiments.resourceCenter.template.setupTime": "{minutes} 分钟设置",
	"experiments.resourceCenter.tooltip.text": "从用例中获得灵感并学习",
	"experiments.templatesDataQuality.modalTitle": "精选模板",
	error,
	"error.goBack": "返回",
	"error.pageNotFound": "糟糕，找不到该页",
	"error.entityNotFound.title": "未找到 {entity}",
	"error.entityNotFound.text": "我们找不到您正在寻找的 {entity}。请确保您输入的网址正确。",
	"error.entityNotFound.action": "前往概览",
	"error.entityUnAuthorized.title": "你需要权限。",
	"error.entityUnAuthorized.content": "您没有权限查看此 {entity}。请联系分享此链接的人请求访问权限。",
	"executions.ExecutionStatus": "执行状态",
	"executions.concurrency.docsLink": "https://docs.n8n.io/hosting/scaling/concurrency-control/",
	"executionDetails.additionalActions": "附加操作",
	"executionDetails.confirmMessage.confirmButtonText": "是，删除",
	"executionDetails.confirmMessage.headline": "删除执行？",
	"executionDetails.confirmMessage.message": "是否确定要删除当前执行？",
	"executionDetails.confirmMessage.annotationsNote": "删除此项也会删除关联的注释数据。",
	"executionDetails.deleteExecution": "删除此执行",
	"executionDetails.executionFailed": "执行失败",
	"executionDetails.executionFailed.recoveredNodeTitle": "无法显示数据",
	"executionDetails.executionFailed.recoveredNodeMessage": "执行被中断，因此数据未保存。请尝试修复工作流并重新执行。",
	"executionDetails.executionId": "执行 ID",
	"executionDetails.executionWaiting": "执行等待",
	"executionDetails.executionWasSuccessful": "执行成功",
	"executionDetails.of": "的",
	"executionDetails.at": "于",
	"executionDetails.newMessage": "执行正在队列中等待。",
	"executionDetails.openWorkflow": "打开工作流",
	"executionDetails.readOnly.readOnly": "只读",
	"executionDetails.readOnly.youreViewingTheLogOf": "您正在查看先前执行的日志。您无法<br />\n		进行更改，因为此执行已发生。通过点击左侧的名称<br />\n		来更改此工作流。",
	"executionDetails.retry": "重试执行",
	"executionDetails.runningTimeFinished": "在 {time} 内",
	"executionDetails.runningTimeRunning": "持续",
	"executionDetails.runningMessage": "执行正在运行。完成后将在此处显示。",
	"executionDetails.startingSoon": "即将开始",
	"executionDetails.workflow": "工作流",
	"emptyStateBuilderPrompt.subtitle": "通过与 AI 聊天来构建工作流",
	"emptyStateBuilderPrompt.buildWorkflow": "构建工作流",
	"emptyStateBuilderPrompt.orStartWith": "或从头开始",
	"emptyStateBuilderPrompt.fromScratch": "新建工作流",
	"emptyStateBuilderPrompt.fromScratchTooltip": "从一个空白画布开始，手动添加节点。",
	"emptyStateBuilderPrompt.template": "模板",
	"emptyStateBuilderPrompt.templateTooltip": "浏览可自定义的预建工作流",
	"emptyStateBuilderPrompt.importFromFile": "导入文件",
	"emptyStateBuilderPrompt.importFromFileTooltip": "从你的计算机上传一个工作流 JSON 文件",
	"executionsLandingPage.emptyState.noTrigger.heading": "设置第一步。然后执行您的工作流",
	"executionsLandingPage.emptyState.noTrigger.buttonText": "添加第一步...",
	"executionsLandingPage.clickExecutionMessage": "点击列表中的执行以查看它",
	"executionsLandingPage.emptyState.heading": "此处还没有任何内容",
	"executionsLandingPage.emptyState.message": "新的工作流执行将在此处显示",
	"executionsLandingPage.emptyState.accordion.title": "此工作流正在保存哪些执行？",
	"executionsLandingPage.emptyState.accordion.titleWarning": "某些执行将不会被保存",
	"executionsLandingPage.emptyState.accordion.productionExecutions": "生产执行",
	"executionsLandingPage.emptyState.accordion.testExecutions": "测试执行",
	"executionsLandingPage.emptyState.accordion.productionExecutionsWarningTooltip": "并非所有生产执行都会被保存。在工作流的 <a href=\"#\">设置</a>中更改此项",
	"executionsLandingPage.emptyState.accordion.footer": "您可以在以下位置更改此项",
	"executionsLandingPage.emptyState.accordion.footer.settingsLink": "工作流设置",
	"executionsLandingPage.emptyState.accordion.footer.tooltipLink": "保存您的工作流",
	"executionsLandingPage.emptyState.accordion.footer.tooltipText": "以便访问工作流设置",
	"executionsLandingPage.noResults": "未找到执行",
	"executionsList.activeExecutions.none": "无活动执行",
	"executionsList.activeExecutions.header": "{running}/{cap} 活动中",
	"executionsList.activeExecutions.tooltip": "当前活动执行：{running} / {cap}。此实例最多只能同时进行 {cap} 次生产执行。",
	"executionsList.activeExecutions.evaluationNote": "评估运行会显示在执行列表中，但不会计入您的执行并发数。",
	"executionsList.allWorkflows": "所有工作流",
	"executionsList.anyStatus": "任何状态",
	"executionsList.autoRefresh": "自动刷新",
	"executionsList.canceled": "已取消",
	"executionsList.confirmMessage.cancelButtonText": "",
	"executionsList.confirmMessage.confirmButtonText": "是，删除",
	"executionsList.confirmMessage.headline": "删除执行？",
	"executionsList.confirmMessage.message": "是否确定要删除 {count} 个选定的执行？",
	"executionsList.confirmMessage.annotationsNote": "删除这些执行也会删除关联的注释数据。",
	"executionsList.confirmMessage.annotatedExecutionMessage": "删除此项也会删除关联的注释数据。是否确定要删除选定的执行？",
	"executionsList.error": "错误",
	"executionsList.filters": "筛选器",
	"executionsList.loadMore": "加载更多",
	"executionsList.empty": "无执行",
	"executionsList.loadedAll": "没有更多要提取的执行",
	"executionsList.modes.error": "错误",
	"executionsList.modes.integrated": "已集成",
	"executionsList.modes.manual": "手动",
	"executionsList.modes.retry": "重试",
	"executionsList.modes.trigger": "触发器",
	"executionsList.modes.webhook": "Webhook",
	"executionsList.name": "@:_reusableBaseText.name",
	"executionsList.new": "已排队",
	"executionsList.openPastExecution": "打开过去的执行",
	"executionsList.retryExecution": "重试执行",
	"executionsList.retryOf": "重试",
	"executionsList.retryWithCurrentlySavedWorkflow": "使用当前保存的工作流重试（来自出错的节点）",
	"executionsList.retryWithOriginalWorkflow": "使用原始工作流重试（来自出错的节点）",
	"executionsList.running": "正在运行",
	"executionsList.succeeded": "已成功",
	"executionsList.selectStatus": "选择状态",
	"executionsList.selectWorkflow": "选择工作流",
	"executionsList.selectAll": "选择 {executionNum} 个已完成的执行 | 选择所有 {executionNum} 个已完成的执行",
	"executionsList.test": "测试执行",
	"executionsList.evaluation": "评估执行",
	"executionsList.showError.handleDeleteSelected.title": "删除执行时出现问题",
	"executionsList.showError.loadMore.title": "加载执行时出现问题",
	"executionsList.showError.loadWorkflows.title": "加载工作流时出现问题",
	"executionsList.showError.refreshData.title": "加载数据时出现问题",
	"executionsList.showError.retryExecution.title": "重试时出现问题",
	"executionsList.showError.stopExecution.title": "停止执行时出现问题",
	"executionsList.showMessage.handleDeleteSelected.title": "执行已删除",
	"executionsList.showMessage.retryError.title": "重试失败",
	"executionsList.showMessage.retrySuccess.title": "重试成功",
	"executionsList.showMessage.retryWaiting.title": "重试等待",
	"executionsList.showMessage.retryCrashed.title": "重试失败的",
	"executionsList.showMessage.retryCanceled.title": "重试已取消",
	"executionsList.showMessage.retryRunning.title": "重新尝试运行",
	"executionsList.showMessage.stopExecution.message": "执行 ID {activeExecutionId}",
	"executionsList.showMessage.stopExecution.title": "执行已停止",
	"executionsList.startedAt": "开始时间",
	"executionsList.trigger": "触发于",
	"executionsList.runTime": "运行时间",
	"executionsList.startingSoon": "即将开始",
	"executionsList.started": "{date}，{time}",
	"executionsList.id": "执行 ID",
	"executionsList.status": "状态",
	"executionsList.statusCanceled": "已取消",
	"executionsList.statusText": "{status}，耗时 {time}",
	"executionsList.statusTextWithoutTime": "{status}",
	"executionsList.statusRunning": "{status}，持续 {time}",
	"executionsList.statusWaiting": "{status}，直至 {time}",
	"executionsList.statusUnknown": "无法完成",
	"executionsList.stopExecution": "停止执行",
	"executionsList.success": "成功",
	"executionsList.successRetry": "成功重试",
	"executionsList.unknown": "无法完成",
	"executionsList.unsavedWorkflow": "[未保存的工作流]",
	"executionsList.waiting": "正在等待",
	"executionsList.workflowExecutions": "执行",
	"executionsList.view": "查看",
	"executionsList.stop": "停止",
	"executionsList.statusTooltipText.waitingForWebhook": "工作流正在无限期地等待传入的 Webhook 调用。",
	"executionsList.statusTooltipText.waitingForConcurrencyCapacity": "此执行将在并发容量可用后开始。{instance}",
	"executionsList.statusTooltipText.waitingForConcurrencyCapacity.cloud": "您的计划限制最多 {concurrencyCap} 次并发生产执行。{link}",
	"executionsList.statusTooltipText.waitingForConcurrencyCapacity.self": "此实例最多只能同时进行 {concurrencyCap} 次生产执行。{link}",
	"executionsList.statusTooltipText.theWorkflowIsWaitingIndefinitely": "工作流正在无限期地等待传入的 Webhook 调用。",
	"executionsList.debug.button.copyToEditor": "复制到编辑器",
	"executionsList.debug.button.debugInEditor": "在编辑器中调试",
	"executionsList.debug.paywall.title": "升级以在编辑器中访问调试功能",
	"executionsList.debug.paywall.content": "使用编辑器中的实际固定数据，可以调试以前的执行。",
	"executionsList.debug.paywall.subContent": "它在我们的云计划、企业版以及以下版本中可用。",
	"executionsList.debug.paywall.link.text": "在文档中阅读更多内容",
	"executionsList.debug.paywall.link.url": "https://docs.n8n.io/workflows/executions/debug/",
	"executionStopManyModal.title": "停止执行",
	"executionStopManyModal.description": "请选择要停止的执行类型：",
	"executionStopManyModal.button.close": "关闭",
	"executionStopManyModal.button.submit": "停止执行",
	"executionStopManyModal.queued": "排队中",
	"executionStopManyModal.running": "正在运行",
	"executionStopManyModal.waiting": "等待",
	"executionStopManyModal.success": "已停止 {count} 次执行。",
	"executionStopManyModal.error.failure": "无法停止执行。",
	"executionStopManyModal.dateHint.startEnd": "将仅影响在 '{startedAfter}' 与 '{startedBefore}' 之间的执行，基于您当前的筛选条件。",
	"executionStopManyModal.dateHint.startOnly": "将仅影响基于您当前筛选条件，从 '{startedAfter}' 开始的执行。",
	"executionStopManyModal.dateHint.endOnly": "将仅根据您当前的筛选条件，影响截至 '{startedBefore}' 的执行。",
	"executionStopManyModal.allWorkflowsHint": "这将影响你有权限访问的所有工作流。",
	"fromAiParametersModal.title": "测试 {nodeName}",
	"fromAiParametersModal.execute": "执行步骤",
	"fromAiParametersModal.description": "提供通常来自“{parentNodeName}”节点的数据",
	"fromAiParametersModal.cancel": "取消",
	"workerList.pageTitle": "工作程序",
	"workerList.empty": "没有响应或可用的工作程序",
	"workerList.item.lastUpdated": "上次更新时间",
	"workerList.item.jobList.empty": "当前无作业",
	"workerList.item.jobListTitle": "当前作业",
	"workerList.item.netListTitle": "网络接口",
	"workerList.item.memoryMonitorTitle": "内存监控",
	"workerList.item.chartsTitle": "性能监控",
	"workerList.item.copyAddressToClipboard": "已将地址复制到剪贴板",
	"workerList.actionBox.title": "在企业版计划中可用",
	"workerList.actionBox.description": "查看连接到您实例的工作程序的当前状态。",
	"workerList.actionBox.description.link": "更多信息",
	"workerList.actionBox.buttonText": "查看计划",
	"workerList.docs.url": "https://docs.n8n.io/hosting/scaling/queue-mode/#view-running-workers",
	"executionSidebar.executionName": "执行 {id}",
	"executionSidebar.searchPlaceholder": "搜索执行...",
	"executionView.onPaste.title": "无法在此处粘贴",
	"executionView.onPaste.message": "此视图是只读的。切换到“工作流”选项卡以编辑当前工作流",
	"executionView.notFound.message": "找不到 ID 为“{executionId}”的执行！",
	"executionAnnotationView.data.notFound": "通过将 <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executiondata/\">执行数据</a>节点添加到您的工作流中，在此处显示执行中的重要数据",
	"executionAnnotationView.vote.error": "无法保存注释投票",
	"executionAnnotationView.vote.up": "投票支持",
	"executionAnnotationView.vote.down": "投票反对",
	"executionAnnotationView.vote.removeUp": "取消点赞",
	"executionAnnotationView.vote.removeDown": "取消反对票",
	"executionAnnotationView.tag.error": "无法保存注释标签",
	"executionAnnotationView.addTag": "添加标签",
	"executionAnnotationView.chooseOrCreateATag": "选择或创建标签",
	"executionsFilter.annotation.tags": "执行标签",
	"executionsFilter.annotation.rating": "评分",
	"executionsFilter.annotation.rating.all": "任何评分",
	"executionsFilter.annotation.rating.good": "好",
	"executionsFilter.annotation.rating.bad": "不好",
	"executionsFilter.annotation.selectVoteFilter": "选择评分",
	"executionsFilter.selectStatus": "选择状态",
	"executionsFilter.selectWorkflow": "选择工作流",
	"executionsFilter.start": "执行开始时间",
	"executionsFilter.startDate": "最早",
	"executionsFilter.endDate": "最新",
	"executionsFilter.savedData": "高亮显示的数据",
	"executionsFilter.savedDataExactMatch": "完全匹配",
	"executionsFilter.savedDataKey": "键",
	"executionsFilter.savedDataKeyPlaceholder": "ID",
	"executionsFilter.savedDataValue": "值（精确匹配）",
	"executionsFilter.savedDataValuePlaceholder": "123",
	"executionsFilter.reset": "重置所有",
	"executionsFilter.customData.inputTooltip": "升级计划以按运行时设置的自定义数据筛选执行。{link}",
	"executionsFilter.customData.inputTooltip.link": "查看计划",
	"executionsFilter.customData.docsTooltip": "使用“执行数据”节点按您已保存到其中的数据筛选执行。{link}",
	"executionsFilter.customData.docsTooltip.link": "更多信息",
	"expressionEdit.anythingInside": "内部的任何内容 ",
	"expressionEdit.isJavaScript": " 是 JavaScript。",
	"expressionEdit.learnMore": "了解更多",
	"expressionEdit.editExpression": "编辑表达式",
	"expressionEdit.expression": "表达式",
	"expressionEdit.resultOfItem1": "项目 1 的结果",
	"expressionEditor.uncalledFunction": "[这是一个函数，请添加 ()]",
	"expressionModalInput.empty": "[空]",
	"expressionModalInput.undefined": "[未定义]",
	"expressionModalInput.null": "null",
	"expressionTip.noExecutionData": "执行先前的节点以使用输入数据",
	"expressionTip.typeDotPrimitive": "键入 <code>.</code> 以获取数据转换选项。<a target=\"_blank\" href=\"https://docs.n8n.io/code/builtin/data-transformation-functions/\">了解更多</a>",
	"expressionTip.typeDotObject": "键入 <code>.</code> 以获取数据转换选项，或访问字段。<a target=\"_blank\" href=\"https://docs.n8n.io/code/builtin/data-transformation-functions/\">了解更多</a>",
	"expressionTip.javascript": "<code>{'{{ }}'}</code> 中的任何内容都是 JavaScript。<a target=\"_blank\" href=\"https://docs.n8n.io/code-examples/expressions/\">了解更多</a>",
	"expressionModalInput.noExecutionData": "执行先前的节点以进行预览",
	"expressionModalInput.noNodeExecutionData": "执行节点“{node}”以进行预览",
	"expressionModalInput.noInputConnection": "未连接输入",
	"expressionModalInput.pairedItemConnectionError": "没有回到节点的路径",
	"expressionModalInput.pairedItemInvalidPinnedError": "取消固定节点“{node}”并执行",
	"expressionModalInput.pairedItemError": "无法确定使用哪个项目",
	"expressionModalInput.pairedItemError.noRunData": "无法确定使用哪个项 - 执行节点以获取更多信息",
	"fixedCollectionParameter.addItem": "添加项",
	"fixedCollectionParameter.addParameter": "添加 {parameter}",
	"fixedCollectionParameter.allOptionsAdded": "所有选项都已添加",
	"fixedCollectionParameter.addField": "添加字段",
	"fixedCollectionParameter.choose": "选择...",
	"fixedCollectionParameter.currentlyNoItemsExist": "当前不存在任何项目",
	"fixedCollectionParameter.deleteItem": "删除项目",
	"fixedCollectionParameter.deleteParameter": "删除 {parameter}",
	"fixedCollectionParameter.dragItem": "拖动项目",
	"fixedCollectionParameter.moveDown": "向下移动",
	"fixedCollectionParameter.moveUp": "向上移动",
	forgotPassword,
	"forgotPassword.emailSentIfExists": "我们已向 {email} 发送了电子邮件（如果存在匹配的帐户）",
	"forgotPassword.getRecoveryLink": "给我发送一个恢复链接",
	"forgotPassword.noSMTPToSendEmailWarning": "请联系您的管理员。n8n 当前未设置为发送电子邮件。",
	"forgotPassword.recoverPassword": "恢复密码",
	"forgotPassword.recoveryEmailSent": "已发送恢复电子邮件",
	"forgotPassword.returnToSignIn": "返回登录",
	"forgotPassword.sendingEmailError": "发送电子邮件时出现问题",
	"forgotPassword.ldapUserPasswordResetUnavailable": "请联系您的 LDAP 管理员以重置您的密码",
	"forgotPassword.oidcUserPasswordResetUnavailable": "请联系您的 OIDC 管理员重置您的密码。",
	"forgotPassword.smtpErrorContactAdministrator": "请联系您的管理员（您的 SMTP 设置有问题）",
	"forgotPassword.tooManyRequests": "您已达到密码重置限制。请在几分钟后重试。",
	"forms.resourceFiltersDropdown.filters": "筛选器",
	"forms.resourceFiltersDropdown.owner": "所有者",
	"forms.resourceFiltersDropdown.owner.placeholder": "按所有者筛选",
	"forms.resourceFiltersDropdown.reset": "重置所有",
	"folders.actions.create": "在内部创建文件夹",
	"folders.actions.create.workflow": "内部创建流程",
	"folders.actions.moveToFolder": "移动到文件夹",
	"folders.add": "添加文件夹",
	"folders.add.here.message": "在此处新建文件夹",
	"folders.add.to.parent.message": "在 '{parent}' 中创建文件夹",
	"folders.add.success.title": "文件夹已创建",
	"folders.add.success.message": "创建了新文件夹 '{folderName}'<br><a href=\"{link}\">打开文件夹</a>",
	"folders.invalidName.empty.message": "文件夹名称不能为空",
	"folders.invalidName.tooLong.message": "文件夹名称不得超过 {maxLength} 个字符",
	"folders.invalidName.invalidCharacters.message": "文件夹名称不能包含以下字符：{illegalChars}",
	"folders.invalidName.starts.with.dot..message": "文件夹名称不能以点开头",
	"folders.invalidName.only.dots.message": "文件夹名称不能仅包含点号",
	"folders.delete.confirm.title": "删除 '{folderName}'",
	"folders.delete.typeToConfirm": "删除 {folderName}",
	"folders.delete.confirm.message": "您确定要删除此文件夹吗？",
	"folders.delete.success.message": "文件夹已删除",
	"folder.delete.modal.confirmation": "对于这个文件夹中的{folders} {workflows}，我们应该如何处理？",
	"folder.count": "{count}个文件夹",
	"workflow.count": "{count} 个工作流程",
	"workflow.description.mcp": "清晰的描述有助于其他用户和 MCP 客户端理解您的工作流的目的。",
	"workflow.description.nomcp": "清晰的描述可以帮助其他用户理解你的工作流的目的。",
	"workflow.description.error.title": "更新工作流描述时出错",
	"folder.and.workflow.separator": "和",
	"folders.delete.action": "归档所有工作流程并删除子文件夹",
	"folders.delete.error.message": "删除文件夹时出现问题",
	"folders.delete.confirmation.message": "输入 'delete {folderName}' 以确认",
	"folders.transfer.confirm.message": "数据已传输到 '{folderName}'",
	"folders.transfer.action": "将工作流和子文件夹转移到 '{projectName}' 内的另一个文件夹中",
	"folders.transfer.action.noProject": "将工作流程和子文件夹转移到另一个文件夹",
	"folders.transfer.selectFolder": "传输至文件夹",
	"folders.transfer.select.placeholder": "选择文件夹",
	"folders.rename.message": "重命名 '{folderName}'",
	"folders.rename.error.title": "重命名文件夹时出现问题",
	"folders.rename.success.message": "文件夹已重命名",
	"folders.rename.placeholder": "输入新文件夹名称",
	"folders.not.found.message": "找不到文件夹",
	"folders.move.modal.folder.count": "{count} 个文件夹",
	"folders.move.modal.workflow.count": "{count} 个工作流程",
	"folders.move.modal.title": "移动{resourceTypeLabel} {folderName}",
	"folders.move.modal.description": "这也将移动{folders}{workflows}。",
	"folders.move.modal.confirm": "移动{resourceTypeLabel}",
	"folders.move.modal.project.label": "项目或用户",
	"folders.move.modal.project.placeholder": "选择一个项目或用户",
	"folders.move.modal.folder.label": "文件夹",
	"folders.move.modal.folder.placeholder": "选择一个文件夹",
	"folders.move.modal.folder.noData.label": "未找到文件夹",
	"folders.move.modal.message.usedCredentials.workflow": "同时共享此工作流使用的{usedCredentials}，以确保其持续正常运行。",
	"folders.move.modal.message.usedCredentials.folder": "同时分享这些工作流所使用的{usedCredentials}，以确保它们能够持续正常运行。",
	"folders.move.modal.message.usedCredentials.warning": "如果您选择不共享凭据，工作流程可能无法正确执行。",
	"folders.move.success.title": "成功移动文件夹",
	"folders.move.success.message": "<b>{folderName}</b> 文件夹及其所有工作流和子文件夹已被移动至 <b>{newFolderName}</b>。<br/><br/><a href=\"{link}\">查看 {newFolderName}</a>",
	"folders.move.success.messageNoAccess": "<b>{folderName}</b> 已移动到 <b>{newFolderName}</b>，包括其所有工作流和子文件夹。",
	"folders.move.error.title": "移动文件夹时出现问题",
	"folders.move.workflow.error.title": "工作流移动问题",
	"folders.move.workflow.success.title": "工作流移动成功",
	"folders.move.workflow.success.message": "<b>{workflowName}</b> 已被移至 <b>{newFolderName}</b>。<br/><br/><a href=\"{link}\">查看 {newFolderName}</a>",
	"folders.move.workflow.success.messageNoAccess": "<b>{workflowName}</b> 已移动到 <b>{newFolderName}</b>。",
	"folders.move.project.root.name": "无文件夹（项目根目录）",
	"folders.open.error.title": "无法打开文件夹",
	"folders.create.error.title": "创建文件夹时出现问题",
	"folders.empty.actionbox.title": "文件夹“{folderName}”中尚无内容",
	"folders.registeredCommunity.cta.heading": "获取已注册社区的文件夹访问权限",
	"folders.breadcrumbs.noTruncated.message": "路径中无隐藏项",
	"generic.oauth1Api": "OAuth1 API",
	"generic.oauth2Api": "OAuth2 API",
	"genericHelpers.loading": "正在加载",
	"genericHelpers.hrsShort": "h",
	"genericHelpers.min": "分钟",
	"genericHelpers.minShort": "分",
	"genericHelpers.sec": "秒",
	"genericHelpers.secShort": "秒",
	"genericHelpers.millis": "毫秒",
	"readOnly.showMessage.executions.message": "执行是只读的。在“<b>工作流</b>”选项卡中进行更改。",
	"readOnly.showMessage.executions.title": "无法编辑执行",
	"readOnlyEnv.showMessage.executions.message": "执行是只读的。",
	"readOnlyEnv.showMessage.executions.title": "无法编辑执行",
	"readOnlyEnv.showMessage.workflows.message": "在受保护的实例中，工作流是只读的。",
	"readOnlyEnv.showMessage.workflows.title": "无法编辑工作流",
	"readOnlyEnv.tooltip": "这是一个受保护的实例，其中修改受到限制。{link}",
	"readOnlyEnv.tooltip.link": "更多信息。",
	"readOnlyEnv.cantAdd.workflow": "您无法在受保护的 n8n 实例上添加新的工作流",
	"readOnlyEnv.cantAdd.credential": "您无法在受保护的 n8n 实例上添加新的凭证",
	"readOnlyEnv.cantAdd.project": "在受保护的n8n实例中无法添加新项目",
	"readOnlyEnv.cantAdd.any": "您无法在受保护的 n8n 实例上创建新的工作流或凭证",
	"readOnlyEnv.cantEditOrRun": "此工作流无法编辑或手动运行，因为它位于受保护的实例上",
	"logs.overview.header.title": "日志",
	"logs.overview.header.actions.clearExecution": "清除执行",
	"logs.overview.header.actions.clearExecution.tooltip": "清除执行数据",
	"logs.overview.header.switch.details": "详情",
	"logs.overview.header.switch.overview": "概览",
	"logs.overview.body.empty.message": "暂无显示内容。请执行工作流以查看运行日志。",
	"logs.overview.body.empty.action": "执行工作流程",
	"logs.overview.body.summaryText.for": "{status} 持续 {time}",
	"logs.overview.body.summaryText.in": "{status}于{time}",
	"logs.overview.body.started": "开始于{time}",
	"logs.overview.body.run": "执行步骤",
	"logs.overview.body.open": "打开...",
	"logs.overview.body.toggleRow": "切换行",
	"logs.details.header.actions.input": "输入",
	"logs.details.header.actions.output": "输出",
	"logs.details.body.itemCount": "{count} 项 | {count} 项",
	"logs.details.body.multipleInputs": "多个输入。通过{button}查看它们",
	"logs.details.body.multipleInputs.openingTheNode": "打开节点",
	"mainSidebar.aboutN8n": "关于 n8n",
	"mainSidebar.state.collapse": "折叠侧边栏",
	"mainSidebar.state.expand": "展开侧边栏",
	"mainSidebar.confirmMessage.workflowArchive.cancelButtonText": "限制：仅输出翻译内容，不包含任何额外信息或解释。",
	"mainSidebar.confirmMessage.workflowArchive.confirmButtonText": "是的，存档",
	"mainSidebar.confirmMessage.workflowArchive.headline": "存档工作流程？",
	"mainSidebar.confirmMessage.workflowArchive.message": "您确定要归档“{workflowName}”吗？",
	"mainSidebar.confirmMessage.workflowDelete.cancelButtonText": "",
	"mainSidebar.confirmMessage.workflowDelete.confirmButtonText": "是，删除",
	"mainSidebar.confirmMessage.workflowDelete.headline": "删除工作流？",
	"mainSidebar.confirmMessage.workflowDelete.message": "您确定要永久删除“{workflowName}”吗？",
	"mainSidebar.credentials": "凭证",
	"mainSidebar.variables": "变量",
	"mainSidebar.help": "帮助",
	"mainSidebar.helpMenuItems.course": "课程",
	"mainSidebar.helpMenuItems.documentation": "文档",
	"mainSidebar.helpMenuItems.forum": "论坛",
	"mainSidebar.helpMenuItems.quickstart": "快速入门",
	"mainSidebar.helpMenuItems.reportBug": "报告错误",
	"mainSidebar.new": "新建",
	"mainSidebar.newTemplate": "从模板新建",
	"mainSidebar.open": "打开",
	"mainSidebar.prompt.cancel": "@:_reusableBaseText.cancel",
	"mainSidebar.prompt.import": "导入",
	"mainSidebar.prompt.importWorkflowFromUrl": "从 URL 导入工作流",
	"mainSidebar.prompt.invalidUrl": "无效的 URL",
	"mainSidebar.prompt.workflowUrl": "工作流 URL",
	"mainSidebar.save": "@:_reusableBaseText.save",
	"mainSidebar.settings": "设置",
	"mainSidebar.showError.stopExecution.title": "停止执行时出现问题",
	"mainSidebar.showMessage.handleFileImport.message": "该文件不包含有效的 JSON 数据",
	"mainSidebar.showMessage.handleFileImport.title": "无法导入文件",
	"mainSidebar.showMessage.handleSelect1.title": "工作流 '{workflowName}' 已删除",
	"mainSidebar.showMessage.handleSelect2.title": "工作流已创建",
	"mainSidebar.showMessage.handleSelect3.title": "工作流已创建",
	"mainSidebar.showMessage.handleArchive.title": "工作流“{workflowName}”已归档",
	"mainSidebar.showMessage.handleUnarchive.title": "工作流'{workflowName}'未归档",
	"mainSidebar.showMessage.stopExecution.title": "执行已停止",
	"mainSidebar.workflows": "工作流",
	"mainSidebar.workflows.readOnlyEnv.tooltip": "受保护的实例阻止编辑工作流（建议用于生产环境）。{link}",
	"mainSidebar.workflows.readOnlyEnv.tooltip.link": "更多信息",
	"mainSidebar.executions": "执行",
	"mainSidebar.workersView": "工作程序",
	"mainSidebar.whatsNew": "最新消息",
	"mainSidebar.whatsNew.fullChangelog": "完整变更日志",
	"mcp.workflowNotEligable.description": "只有活跃的、通过Webhook触发的工作流可以通过MCP访问。",
	"mcp.instanceLevelAccessDisabled.description": "实例级别的 MCP 访问已被禁用。启用它以允许工作流级别的访问。",
	"mcp.workflowDeactivated.title": "MCP访问已禁用",
	"mcp.productionChecklist.title": "启用 MCP 访问权限",
	"mcp.productionChecklist.workflow.description": "允许 MCP 客户端访问此工作流。",
	"mcp.productionChecklist.instance.description": "启用实例级 MCP 访问，以便 MCP 客户端能够访问工作流。",
	"mcp.workflowDeactivated.message": "由于该工作流程已被禁用，MCP 访问已被禁用。",
	"menuActions.duplicate": "复制",
	"menuActions.download": "下载",
	"menuActions.push": "推送到 Git",
	"menuActions.editDescription": "编辑描述",
	"menuActions.importFromUrl": "从 URL 导入...",
	"menuActions.importFromFile": "从文件导入...",
	"menuActions.delete": "删除",
	"menuActions.archive": "归档",
	"menuActions.unarchive": "解档",
	"menuActions.unpublish": "取消发布",
	"multipleParameter.addItem": "添加项目",
	"multipleParameter.currentlyNoItemsExist": "当前不存在任何项目",
	"multipleParameter.deleteItem": "删除项目",
	"multipleParameter.moveDown": "向下移动",
	"multipleParameter.moveUp": "向上移动",
	"ndv.backToCanvas": "返回画布",
	"ndv.backToCanvas.waitingForTriggerWarning": "正在等待触发节点执行。关闭此视图以查看工作流画布。",
	"ndv.close.tooltip": "数据已存储，可以安全关闭。",
	"ndv.execute.testNode": "执行步骤",
	"ndv.execute.testNode.description": "运行当前节点。如果先前的节点尚未运行，则也会运行它们",
	"ndv.execute.generateCodeAndTestNode.description": "生成代码，然后运行当前节点",
	"ndv.execute.generateCode.message": "“{nodeName}”中的说明已更改",
	"ndv.execute.generateCode.title": "正在生成转换代码",
	"ndv.execute.executing": "正在执行",
	"ndv.execute.fetchEvent": "提取测试事件",
	"ndv.execute.fixPrevious": "首先修复上一个节点",
	"ndv.execute.generatingCode": "根据指令生成代码",
	"ndv.execute.listenForTestEvent": "监听测试事件",
	"ndv.execute.testChat": "测试聊天",
	"ndv.execute.testStep": "执行步骤",
	"ndv.execute.stopListening": "停止监听",
	"ndv.execute.nodeIsDisabled": "启用节点以执行",
	"ndv.execute.requiredFieldsMissing": "首先完成必填字段",
	"ndv.execute.stopWaitingForWebhook.error": "删除测试 Webhook 时出现问题",
	"ndv.execute.workflowAlreadyRunning": "工作流已在运行",
	"ndv.execute.deactivated": "该节点已停用，无法运行",
	"ndv.featureRequest": "我希望此节点可以...",
	"ndv.input": "输入",
	"ndv.input.nodeDistance": "返回 {count} 个节点 | 返回 {count} 个节点",
	"ndv.input.noNodesFound": "未找到节点",
	"ndv.input.mapping": "映射",
	"ndv.input.fromAI": "来自 AI",
	"ndv.input.parentNodes": "父节点",
	"ndv.input.noOutputDataInBranch": "此分支中无输入数据",
	"ndv.input.noOutputDataInNode": "节点未输出任何数据。当节点没有输出数据时，n8n 会停止执行工作流。",
	"ndv.input.noOutputData": "无数据",
	"ndv.input.noOutputData.executePrevious": "执行先前的节点",
	"ndv.input.noOutputData.title": "尚未有输入数据",
	"ndv.input.noOutputData.v2.title": "无输入数据",
	"ndv.input.noOutputData.v2.description": "查看输入数据 {link}",
	"ndv.input.noOutputData.v2.action": "执行前置节点",
	"ndv.input.noOutputData.v2.tooltip": "从最早的未执行节点，或已执行但之后发生改变的节点开始",
	"ndv.input.noOutputData.hint": "（来自尚未输出数据的最早节点）",
	"ndv.input.noOutputData.hint.tooltip": "从最早尚未执行的节点开始，或者从虽已执行但之后发生了变更的节点开始",
	"ndv.input.noOutputData.schemaPreviewHint": "切换到 {schema} 以使用架构预览",
	"ndv.input.noOutputData.or": "或",
	"ndv.input.noOutputData.embeddedNdv.link": "执行上一个节点",
	"ndv.input.noOutputData.embeddedNdv.description": "在这里使用他们的数据 {link}",
	"ndv.input.executingPrevious": "正在执行先前的节点...",
	"ndv.input.notConnected.title": "连线我",
	"ndv.input.notConnected.v2.title": "未连接任何输入",
	"ndv.input.notConnected.v2.description": "此节点只有连接到其他节点时才能接收输入数据。{link}",
	"ndv.input.notConnected.message": "仅当您将此节点连接到另一个节点时，此节点才能接收输入数据。",
	"ndv.input.notConnected.learnMore": "了解更多",
	"ndv.input.disabled": "“{nodeName}”节点已禁用，不会执行。",
	"ndv.input.disabled.cta": "启用它",
	"ndv.input.rootNodeHasNotRun.title": "父节点尚未运行",
	"ndv.input.rootNodeHasNotRun.description": "父节点传递给此节点的输入将显示在此处。如需从先前节点映射数据，请使用{link}视图。",
	"ndv.input.rootNodeHasNotRun.description.link": "映射",
	"ndv.output": "输出",
	"ndv.output.ai.empty": "👈 使用这些日志查看有关 {node} 节点如何完成处理的信息。您可以点击节点以查看它接收的输入和输出数据。",
	"ndv.output.ai.waiting": "正在等待消息",
	"ndv.output.outType.logs": "日志",
	"ndv.output.outType.regular": "输出",
	"ndv.output.edit": "编辑输出",
	"ndv.output.all": "全部",
	"ndv.output.branch": "分支",
	"ndv.output.executing": "正在执行节点...",
	"ndv.output.items": "{count} 个项目 | {count} 个项目",
	"ndv.output.itemsTotal": "{count} 项总计 | {count} 项目总计",
	"ndv.output.andSubExecutions": "，{count} 个子执行 | ，{count} 个子执行",
	"ndv.output.noOutputData.message": "当节点没有输出数据时，n8n 会停止执行工作流。您可以通过以下方式更改此默认行为：",
	"ndv.output.noOutputData.message.settings": "设置",
	"ndv.output.noOutputData.message.settingsOption": "> “始终输出数据”。",
	"ndv.output.noOutputData.title": "未返回任何输出数据",
	"ndv.output.noOutputData.v2.title": "无输出数据",
	"ndv.output.noOutputData.v2.description": "查看输出数据 {link}",
	"ndv.output.noOutputData.v2.action": "执行步骤",
	"ndv.output.noOutputData.trigger.title": "无触发器输出",
	"ndv.output.noOutputData.trigger.action": "测试此触发器",
	"ndv.output.noOutputDataInBranch": "此分支中没有输出数据",
	"ndv.output.of": "{current}/{total}",
	"ndv.output.pageSize": "页面大小",
	"ndv.output.run": "运行",
	"ndv.output.runNodeHint": "执行此节点以查看数据",
	"ndv.output.runNodeHintSubNode": "运行父节点后，输出将显示在此处",
	"ndv.output.githubNodeWaitingForWebhook": "在调用以下Webhook URL时，执行将继续：",
	"ndv.output.sendAndWaitWaitingApproval": "执行将在用户响应后继续",
	"ndv.output.waitNodeWaiting.title": "等待输入",
	"ndv.output.waitNodeWaiting.description.webhook": "收到Webhook后继续执行",
	"ndv.output.waitNodeWaiting.description.form": "表单提交后将继续执行",
	"ndv.output.waitNodeWaiting.description.timer": "等待时间结束后将继续执行",
	"ndv.output.insertTestData": "设置模拟数据",
	"ndv.output.staleDataWarning.regular": "节点参数已更改。<br>再次测试节点以刷新输出。",
	"ndv.output.staleDataWarning.pinData": "节点参数更改不会影响固定的输出数据。",
	"ndv.output.waitingToRun": "正在等待执行...",
	"ndv.output.noToolUsedInfo": "在此运行中未使用任何工具。请尝试为您的工具提供更清晰的名称和描述，以帮助 AI",
	"ndv.title.cancel": "取消",
	"ndv.title.rename": "重命名",
	"ndv.title.rename.placeholder": "输入新名称...",
	"ndv.title.renameNode": "重命名节点",
	"ndv.pinData.pin.title": "固定数据",
	"ndv.pinData.pin.description": "节点将始终输出此数据，而不是执行。",
	"ndv.pinData.pin.binary": "由于此节点的输出包含二进制数据，因此“固定数据”已禁用。",
	"ndv.pinData.pin.link": "更多信息",
	"ndv.pinData.unpin.title": "取消固定数据",
	"ndv.pinData.pin.multipleRuns.title": "运行 #{index} 已固定",
	"ndv.pinData.pin.multipleRuns.description": "每次运行节点时，都会输出此运行。",
	"ndv.pinData.unpinAndExecute.title": "取消固定输出数据？",
	"ndv.pinData.unpinAndExecute.description": "测试节点将覆盖固定的数据。",
	"ndv.pinData.unpinAndExecute.cancel": "取消",
	"ndv.pinData.unpinAndExecute.confirm": "取消固定并测试",
	"ndv.pinData.beforeClosing.title": "在关闭之前保存输出更改？",
	"ndv.pinData.beforeClosing.cancel": "放弃",
	"ndv.pinData.beforeClosing.confirm": "保存",
	"ndv.pinData.error.syntaxError.title": "由于 JSON 无效，无法保存",
	"ndv.pinData.error.tooLarge.title": "由于大小限制，无法固定数据",
	"ndv.pinData.error.tooLarge.description": "工作流已达到允许的最大固定数据大小 ({size} mb / {limit} mb)",
	"ndv.pinData.error.tooLargeWorkflow.title": "由于大小限制，无法固定数据",
	"ndv.pinData.error.tooLargeWorkflow.description": "工作流已达到允许的最大大小 ({size} mb / {limit} mb)",
	"ndv.tooMuchData.message": "这可能会暂时让您的浏览器变慢。",
	"ndv.tooMuchData.showDataAnyway": "显示数据",
	"ndv.tooMuchData.title": "显示 {size} MB 的数据？",
	"ndv.httpRequest.credentialOnly.docsNotice": "使用<a target=\"_blank\" href=\"{docsUrl}\">{nodeName} 文档</a>来构建您的请求。如果您在下面添加 {nodeName} 凭证，我们将处理身份验证部分。",
	"ndv.binaryData.combinedTooltip": "指定输入项中二进制数据条目的路径，或使用表达式来访问前一个节点中的二进制数据，例如 {example}",
	"ndv.binaryData.separateTooltip": "指定输入项中二进制数据的属性名称，或使用表达式在前面的节点中访问二进制数据，例如 {example}",
	"network.error.message": "离线",
	"network.error.tooltip": "无网络连接。连接恢复后，工作流的更改将被保存。",
	"noTagsView.createTag": "创建标签",
	"noTagsView.readyToOrganizeYourWorkflows": "准备好组织您的工作流？",
	"noTagsView.withWorkflowTagsYouReFree": "使用工作流标签，您可以自由地为您的工作流创建完美的标签系统",
	"noAnnotationTagsView.title": "组织您的执行",
	"noAnnotationTagsView.description": "执行标签可帮助您标记和标识不同类别的执行。此外，标记执行后，它永远不会被删除",
	"node.thisIsATriggerNode": "这是一个触发节点。 <a target=\"_blank\" href=\"https://docs.n8n.io/workflows/components/nodes/\">了解更多</a>",
	"node.activateDeactivateNode": "激活/停用节点",
	"node.changeColor": "改变颜色",
	"node.disabled": "已停用",
	"node.testStep": "执行步骤",
	"node.disable": "停用",
	"node.enable": "激活",
	"node.delete": "删除",
	"node.add": "添加",
	"node.add-human-review-step": "添加人工审核步骤",
	"node.issues": "问题",
	"node.install-to-use": "安装该软件包以使用此节点",
	"node.dirty": "节点配置已更改。再次运行此节点时，输出数据可能会发生变化。",
	"node.subjectToChange": "由于工作流程的变更，重新运行此节点时输出数据可能会发生变化。",
	"node.nodeIsExecuting": "节点正在执行",
	"node.nodeIsWaitingTill": "节点正在等待，直至 {date} {time}",
	"node.theNodeIsWaitingIndefinitelyForAnIncomingWebhookCall": "节点正在等待传入的 Webhook 调用（无限期）",
	"node.theNodeIsWaitingWebhookCall": "节点正在等待传入的 Webhook 调用",
	"node.theNodeIsWaitingFormCall": "节点正在等待表单提交",
	"node.theNodeIsWaitingUserInput": "节点正在等待用户输入",
	"node.waitingForYouToCreateAnEventIn": "正在等待您在 {nodeType} 中创建事件",
	"node.discovery.pinData.canvas": "您可以固定此输出，而不是等待测试事件。打开节点以执行此操作。",
	"node.discovery.pinData.ndv": "您可以固定此输出，而不是等待测试事件。",
	"node.executionError.openNode": "打开节点",
	"node.settings.continuesOnError": "即使节点失败，执行仍会继续。",
	"node.settings.continuesOnError.title": "继续在失败时执行",
	"node.settings.retriesOnFailure": "如果该节点失败，它将自动重试。",
	"node.settings.executeOnce": "此节点仅执行一次，无论输入项有多少。",
	"node.settings.alwaysOutputData": "如果通常没有返回任何内容，此节点将输出一个空项。",
	"node.settings.dynamicCredentials": "该节点使用在运行时解析的动态凭据。",
	"node.settings.contextEstablishmentHooks": "此 webhook 将提取触发该 webhook 的用户的身份令牌，以在运行时解析凭据。",
	"nodeBase.clickToAddNodeOrDragToConnect": "点击以添加节点 \n 或拖动以连接",
	"nodeCreator.actionsPlaceholderNode.scheduleTrigger": "按计划",
	"nodeCreator.actionsPlaceholderNode.webhook": "按 Webhook 调用",
	"nodeCreator.actionsCategory.actions": "操作",
	"nodeCreator.actionsCategory.onNewEvent": "在新 {event} 事件时",
	"nodeCreator.actionsCategory.onEvent": "在 {event} 时",
	"nodeCreator.actionsCategory.triggers": "触发器",
	"nodeCreator.actionsCategory.triggerNodes": "触发节点",
	"nodeCreator.actionsCategory.regularNodes": "常规节点",
	"nodeCreator.actionsCategory.regularAndTriggers": "常规节点和触发节点",
	"nodeCreator.actionsCategory.searchActions": "搜索 {node} 操作...",
	"nodeCreator.actionsCategory.noMatchingActions": "没有匹配的操作。<i>重置搜索</i>",
	"nodeCreator.actionsCategory.noMatchingTriggers": "没有匹配的触发器。<i>重置搜索</i>",
	"nodeCreator.actionsList.apiCall": "没有找到合适的事件？进行<a data-action='addHttpNode'>自定义 {node} API 调用</a>",
	"nodeCreator.actionsCallout.noActionItems": "我们还没有 <strong>{nodeName}</strong> 操作。有想法吗？在我们的 <a target=\"_blank\" href=\"https://community.n8n.io/c/feature-requests/5\">社区中提出请求</a>",
	"nodeCreator.actionsCallout.triggersStartWorkflow": "需要由另一个节点触发操作，例如，使用“<strong>计划</strong>”节点定期触发。<a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/\">了解更多</a>",
	"nodeCreator.actionsTooltip.triggersStartWorkflow": "触发器是启动工作流的步骤。 <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/\">了解更多</a>",
	"nodeCreator.actionsTooltip.actionsPerformStep": "操作在工作流启动后执行步骤。<a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/\">了解更多</a>",
	"nodeCreator.actionsCallout.noTriggerItems": "没有可用的 <strong>{nodeName}</strong> 触发器。用户通常将以下触发器与 <strong>{nodeName}</strong> 操作组合在一起。",
	"nodeCreator.categoryNames.otherCategories": "其他类别中的结果",
	"nodeCreator.categoryNames.moreFromCommunity": "来自社区的更多内容",
	"nodeCreator.subnodes": "子节点",
	"nodeCreator.noResults.dontWorryYouCanProbablyDoItWithThe": "不用担心，您可能可以使用以下项执行此操作：",
	"nodeCreator.noResults.httpRequest": "HTTP 请求",
	"nodeCreator.noResults.node": "节点",
	"nodeCreator.noResults.or": "或",
	"nodeCreator.noResults.requestTheNode": "请求节点",
	"nodeCreator.noResults.wantUsToMakeItFaster": "希望我们加快速度？",
	"nodeCreator.noResults.weDidntMakeThatYet": "我们还没有制作...尚未制作",
	"nodeCreator.noResults.webhook": "Webhook",
	"nodeCreator.ragStarterTemplate.openTemplateItem.title": "RAG 入门模板",
	"nodeCreator.ragStarterTemplate.openTemplateItem.description": "在 n8n 中了解向量存储",
	"nodeCreator.searchBar.searchNodes": "搜索节点...",
	"nodeCreator.subcategoryDescriptions.appTriggerNodes": "当 Telegram、Notion 或 Airtable 等应用中发生某些事件时运行流",
	"nodeCreator.subcategoryDescriptions.appRegularNodes": "在 Google 表格、Telegram 或 Notion 等应用或服务中执行某些操作",
	"nodeCreator.subcategoryDescriptions.dataTransformation": "操作、筛选或转换数据",
	"nodeCreator.subcategoryDescriptions.files": "CSV、XLS、XML、文本、图像等。",
	"nodeCreator.subcategoryDescriptions.flow": "分支、合并或循环流等。",
	"nodeCreator.subcategoryDescriptions.helpers": "运行代码、进行 HTTP 请求、设置 Webhook 等。",
	"nodeCreator.subcategoryDescriptions.otherTriggerNodes": "在工作流错误、文件更改等情况下运行流。",
	"nodeCreator.subcategoryDescriptions.agents": "交互和做出决策的自主实体。",
	"nodeCreator.subcategoryDescriptions.chains": "用于特定任务的结构化组件。",
	"nodeCreator.subcategoryDescriptions.documentLoaders": "处理文档加载以进行处理。",
	"nodeCreator.subcategoryDescriptions.embeddings": "将文本转换为向量表示形式。",
	"nodeCreator.subcategoryDescriptions.languageModels": "理解和生成语言的 AI 模型。",
	"nodeCreator.subcategoryDescriptions.memory": "管理执行期间信息的存储和检索。",
	"nodeCreator.subcategoryDescriptions.outputParsers": "确保输出符合定义的格式。",
	"nodeCreator.subcategoryDescriptions.retrievers": "从源提取相关信息。",
	"nodeCreator.subcategoryDescriptions.textSplitters": "将文本分解为较小的部分。",
	"nodeCreator.subcategoryDescriptions.tools": "提供各种功能的实用程序组件。",
	"nodeCreator.subcategoryDescriptions.vectorStores": "在诸如 Supabase、Pinecone 和 MongoDB 的服务中存储和访问向量数据。",
	"nodeCreator.subcategoryDescriptions.miscellaneous": "其他与 AI 相关的节点。",
	"nodeCreator.subcategoryDescriptions.humanInTheLoop": "在进行工具调用之前，通过 Slack、Telegram 等服务请求批准。",
	"nodeCreator.subcategoryDescriptions.otherTools": "在像 Google Sheets、Telegram 或 Notion 这样的应用或服务中执行某些操作",
	"nodeCreator.subcategoryInfos.languageModels": "聊天模型旨在进行交互式对话并很好地遵循说明，而文本补全模型则专注于生成给定文本输入的延续部分",
	"nodeCreator.subcategoryInfos.memory": "内存允许 AI 模型记住并引用过去与它的交互",
	"nodeCreator.subcategoryInfos.vectorStores": "矢量存储允许 AI 模型引用文档的相关部分，这对于问题解答和文档搜索非常有用",
	"nodeCreator.subcategoryNames.appTriggerNodes": "在应用事件时",
	"nodeCreator.subcategoryNames.otherTools": "应用中的操作",
	"nodeCreator.subcategoryNames.appRegularNodes": "在应用中执行操作",
	"nodeCreator.subcategoryNames.dataTransformation": "数据转换",
	"nodeCreator.subcategoryNames.files": "文件",
	"nodeCreator.subcategoryNames.flow": "流",
	"nodeCreator.subcategoryNames.helpers": "核心",
	"nodeCreator.subcategoryNames.otherTriggerNodes": "其他方式...",
	"nodeCreator.subcategoryNames.agents": "代理",
	"nodeCreator.subcategoryNames.chains": "链",
	"nodeCreator.subcategoryNames.documentLoaders": "文档加载器",
	"nodeCreator.subcategoryNames.embeddings": "嵌入",
	"nodeCreator.subcategoryNames.languageModels": "语言模型",
	"nodeCreator.subcategoryNames.memory": "内存",
	"nodeCreator.subcategoryNames.outputParsers": "输出解析器",
	"nodeCreator.subcategoryNames.retrievers": "检索器",
	"nodeCreator.subcategoryNames.textSplitters": "文本拆分器",
	"nodeCreator.subcategoryNames.tools": "工具",
	"nodeCreator.subcategoryNames.vectorStores": "矢量存储",
	"nodeCreator.subcategoryNames.miscellaneous": "其他",
	"nodeCreator.subcategoryNames.humanInTheLoop": "人工审核",
	"nodeCreator.sectionNames.popular": "常用",
	"nodeCreator.sectionNames.other": "其他",
	"nodeCreator.sectionNames.sendAndWait": "发送并等待响应",
	"nodeCreator.sectionNames.transform.combine": "组合项目",
	"nodeCreator.sectionNames.transform.addOrRemove": "添加或删除项目",
	"nodeCreator.sectionNames.transform.convert": "转换数据",
	"nodeCreator.triggerHelperPanel.addAnotherTrigger": "添加另一个触发器",
	"nodeCreator.triggerHelperPanel.addAnotherTriggerDescription": "触发器启动您的工作流。工作流可以有多个触发器。",
	"nodeCreator.triggerHelperPanel.title": "此工作流应何时运行？",
	"nodeCreator.triggerHelperPanel.scheduleTriggerDisplayName": "按计划",
	"nodeCreator.triggerHelperPanel.scheduleTriggerDescription": "每天、每小时或自定义间隔运行流",
	"nodeCreator.triggerHelperPanel.webhookTriggerDisplayName": "在 Webhook 调用时",
	"nodeCreator.triggerHelperPanel.webhookTriggerDescription": "在收到 HTTP 请求时运行流",
	"nodeCreator.triggerHelperPanel.formTriggerDisplayName": "在表单提交时",
	"nodeCreator.triggerHelperPanel.formTriggerDescription": "在 n8n 中生成 Web 表单并将它们的响应传递到工作流",
	"nodeCreator.triggerHelperPanel.formDisplayName": "表单",
	"nodeCreator.triggerHelperPanel.formDescription": "添加下一张表单页",
	"nodeCreator.triggerHelperPanel.manualTriggerDisplayName": "手动触发",
	"nodeCreator.triggerHelperPanel.manualTriggerDescription": "在 n8n 中点击按钮时运行流。适合快速入门",
	"nodeCreator.triggerHelperPanel.manualChatTriggerDisplayName": "在聊天消息时",
	"nodeCreator.triggerHelperPanel.manualChatTriggerDescription": "当用户发送聊天消息时运行流。用于 AI 节点",
	"nodeCreator.triggerHelperPanel.chatTriggerDisplayName": "在聊天消息时",
	"nodeCreator.triggerHelperPanel.chatTriggerDescription": "当用户发送聊天消息时运行流。用于 AI 节点",
	"nodeCreator.triggerHelperPanel.whatHappensNext": "接下来会发生什么？",
	"nodeCreator.triggerHelperPanel.selectATrigger": "什么触发此工作流？",
	"nodeCreator.triggerHelperPanel.selectATriggerDescription": "触发器是启动工作流的步骤",
	"nodeCreator.triggerHelperPanel.workflowTriggerDisplayName": "由另一个工作流执行时",
	"nodeCreator.triggerHelperPanel.workflowTriggerDescription": "当由不同工作流的“执行工作流”节点调用时，运行流",
	"nodeCreator.aiPanel.aiNodes": "AI 节点",
	"nodeCreator.aiPanel.aiOtherNodes": "其他 AI 节点",
	"nodeCreator.aiPanel.aiOtherNodesDescription": "嵌入、矢量存储、LLM 和其他 AI 节点",
	"nodeCreator.aiPanel.selectAiNode": "选择一个人工智能节点添加到您的工作流程中",
	"nodeCreator.aiPanel.nodesForAi": "构建自主代理，总结或搜索文档等。",
	"nodeCreator.aiPanel.newTag": "新建",
	"nodeCreator.aiPanel.langchainAiNodes": "人工智能",
	"nodeCreator.aiPanel.title": "此工作流应何时运行？",
	"nodeCreator.aiPanel.linkItem.description": "了解可以实现的功能并以 5 倍的速度开始使用",
	"nodeCreator.aiPanel.linkItem.title": "AI 模板",
	"nodeCreator.aiPanel.scheduleTriggerDisplayName": "按计划",
	"nodeCreator.aiPanel.scheduleTriggerDescription": "每天、每小时或自定义间隔运行流",
	"nodeCreator.aiPanel.webhookTriggerDisplayName": "在 Webhook 调用时",
	"nodeCreator.aiPanel.webhookTriggerDescription": "当另一个应用发送 Webhook 时运行流",
	"nodeCreator.aiPanel.manualTriggerDisplayName": "手动",
	"nodeCreator.aiPanel.manualTriggerDescription": "在点击 n8n 中的按钮时运行流",
	"nodeCreator.aiPanel.whatHappensNext": "接下来会发生什么？",
	"nodeCreator.aiPanel.selectATrigger": "选择 AI 组件",
	"nodeCreator.aiPanel.selectATriggerDescription": "触发器是启动工作流的步骤",
	"nodeCreator.aiPanel.workflowTriggerDisplayName": "当被另一个工作流调用时",
	"nodeCreator.aiPanel.workflowTriggerDescription": "当由不同工作流的“执行工作流”节点调用时，运行流",
	"nodeCreator.nodeItem.triggerIconTitle": "触发节点",
	"nodeCreator.nodeItem.aiIconTitle": "LangChain AI 节点",
	"nodeCreator.nodeItem.deprecated": "已弃用",
	"nodeCreator.nodeItem.beta": "测试版",
	"nodeCredentials.createNew": "创建新凭证",
	"nodeCredentials.createNew.permissionDenied": "你当前的角色不允许你创建凭据。",
	"nodeCredentials.credentialFor": "{credentialType} 的凭证",
	"nodeCredentials.credentialsLabel": "要连接的凭证",
	"nodeCredentials.issues": "问题",
	"nodeCredentials.selectCredential": "选择凭证",
	"nodeCredentials.selectedCredentialUnavailable": "{name}（不可用）",
	"nodeCredentials.showMessage.message": "使用凭证“{oldCredentialName}”的节点已更新为使用“{newCredentialName}”",
	"nodeCredentials.showMessage.title": "节点凭证已更新",
	"nodeCredentials.autoAssigned.message": "将此凭证添加到 {count} 个其他节点",
	"nodeCredentials.updateCredential": "更新凭证",
	"nodeCredentials.updateCredential.permissionDenied": "您当前的角色不允许您更新凭据。",
	"nodeCredentials.deleteCredential": "删除凭据",
	"nodeCredentials.deleteCredential.permissionDenied": "您当前的角色不允许删除凭据。",
	"nodeErrorView.cause": "原因",
	"nodeErrorView.copyToClipboard": "复制到剪贴板",
	"nodeErrorView.copyToClipboard.tooltip": "复制错误详细信息以进行调试。复制的数据可能包含敏感信息。共享时请谨慎。",
	"nodeErrorView.dataBelowMayContain": "以下数据可能包含敏感信息。共享时请谨慎。",
	"nodeErrorView.details": "详细信息",
	"nodeErrorView.details.from": "来自 {node}",
	"nodeErrorView.details.rawMessages": "完整消息",
	"nodeErrorView.details.errorData": "错误数据",
	"nodeErrorView.details.errorExtra": "错误额外信息",
	"nodeErrorView.details.request": "请求",
	"nodeErrorView.details.title": "错误详细信息",
	"nodeErrorView.details.message": "错误消息",
	"nodeErrorView.details.info": "其他信息",
	"nodeErrorView.details.nodeVersion": "节点版本",
	"nodeErrorView.details.nodeType": "节点类型",
	"nodeErrorView.details.n8nVersion": "n8n 版本",
	"nodeErrorView.details.errorCause": "错误原因",
	"nodeErrorView.details.causeDetailed": "详细原因",
	"nodeErrorView.details.stackTrace": "堆栈跟踪",
	"nodeErrorView.error": "错误",
	"nodeErrorView.errorSubNode": "子节点“{node}”中出错",
	"nodeErrorView.httpCode": "HTTP 代码",
	"nodeErrorView.errorCode": "错误代码",
	"nodeErrorView.inParameter": "在或在参数下",
	"nodeErrorView.itemIndex": "项目索引",
	"nodeErrorView.runIndex": "运行索引",
	"nodeErrorView.showMessage.title": "已复制到剪贴板",
	"nodeErrorView.stack": "堆栈",
	"nodeErrorView.theErrorCauseIsTooLargeToBeDisplayed": "错误原因太大，无法显示",
	"nodeErrorView.time": "时间",
	"nodeErrorView.inputPanel.previousNodeError.title": "运行节点“{nodeName}”时出错",
	"nodeErrorView.description.pairedItemInvalidInfo": "此处的表达式将不起作用，因为它使用 <code>.item</code> 且 n8n 无法确定<a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">匹配项</a>。这是因为节点 <strong>“{nodeCause}”</strong> 返回了不正确的匹配信息（对于运行 {runIndex} 的项 {itemIndex}）。<br/><br/>请尝试使用 <code>.first()</code>、<code>.last()</code> 或 <code>.all()[index]</code>，而不是 <code>.item</code>。",
	"nodeErrorView.description.pairedItemNoInfo": "此处的表达式将不起作用，因为它使用 <code>.item</code> 且 n8n 无法确定<a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">匹配项</a>。节点 <strong>“{nodeCause}”</strong> 没有返回足够的信息。",
	"nodeErrorView.description.pairedItemNoInfoCodeNode": "此处的表达式将不起作用，因为它使用 <code>.item</code> 且 n8n 无法确定<a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">匹配项</a>。您可以：<ul><li>将<a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node/\">缺失信息</a>添加到节点 <strong>“{nodeCause}”</strong></li><li>或者使用 <code>.first()</code>、<code>.last()</code> 或 <code>.all()[index]</code>，而不是 <code>.item</code></li></ul>",
	"nodeErrorView.description.pairedItemNoConnection": "没有回到节点 <strong>“{nodeCause}”</strong> 的连接，但此处的一个表达式中使用了该节点。<br/><br/>请连接节点（中间可以有其他节点）。",
	"nodeErrorView.description.pairedItemNoConnectionCodeNode": "没有回到节点 <strong>“{nodeCause}”</strong> 的连接，但此处的一个代码中使用了该节点。<br/><br/>请连接节点（中间可以有其他节点）。",
	"nodeErrorView.description.noNodeExecutionData": "一个表达式引用了节点 <strong>“{nodeCause}”</strong>，但尚未执行。更改表达式，或重新连接您的工作流以确保先执行该节点。",
	"nodeErrorView.description.nodeNotFound": "节点 <strong>“{nodeCause}”</strong> 不存在，但此处的一个表达式中使用了该节点。",
	"nodeErrorView.description.noInputConnection": "此节点没有输入数据。请确保此节点已连接到另一个节点。",
	"nodeErrorView.description.pairedItemMultipleMatches": "此处的表达式将不起作用，因为它使用 <code>.item</code> 且 n8n 无法确定<a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">匹配项</a>。（有多个可能的匹配项）<br/><br/>请尝试使用 <code>.first()</code>、<code>.last()</code> 或 <code>.all()[index]</code>，而不是 <code>.item</code>，或<a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node/\">引用另一个节点</a>。",
	"nodeErrorView.description.pairedItemMultipleMatchesCodeNode": "这里的代码将不起作用，因为它使用 <code>.item</code> 且 n8n 无法确定<a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">匹配项</a>。（有多个可能的匹配项）<br/><br/>请尝试使用 <code>.first()</code>、<code>.last()</code> 或 <code>.all()[index]</code>，而不是 <code>.item</code>，或<a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node/\">引用另一个节点</a>。",
	"nodeErrorView.description.pairedItemPinned": "该节点中的<a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">项匹配</a>数据可能已过时。此节点中使用 <code>.item</code> 的表达式需要此信息。",
	"nodeHelpers.credentialsUnset": "未设置“{credentialType}”的凭证。",
	"nodeSettings.alwaysOutputData.description": "如果处于活动状态，则当输出为空时，将输出一个空的单个项。用于防止工作流在此节点上完成。",
	"nodeSettings.alwaysOutputData.displayName": "始终输出数据",
	"nodeSettings.clickOnTheQuestionMarkIcon": "点击“？”图标以在 n8n.io 上打开此节点",
	"nodeSettings.onError.description": "当节点执行失败时要采取的操作",
	"nodeSettings.onError.displayName": "出现错误时",
	"nodeSettings.onError.options.continueRegularOutput.description": "将错误消息作为常规输出中的项传递",
	"nodeSettings.onError.options.continueRegularOutput.displayName": "继续",
	"nodeSettings.onError.options.continueErrorOutput.description": "将项传递到额外的 error 输出",
	"nodeSettings.onError.options.continueErrorOutput.displayName": "继续（使用错误输出）",
	"nodeSettings.onError.options.stopWorkflow.description": "停止执行并使工作流失败",
	"nodeSettings.onError.options.stopWorkflow.displayName": "停止工作流",
	"nodeSettings.docs": "文档",
	"nodeSettings.executeButtonTooltip.times": "将执行 {inputSize} 次，每个输入项执行一次",
	"nodeSettings.executeOnce.description": "如果处于活动状态，则节点仅执行一次，使用接收到的第一个项的数据",
	"nodeSettings.executeOnce.displayName": "执行一次",
	"nodeSettings.dynamicCredentials.displayName": "动态凭据",
	"nodeSettings.maxTries.description": "在执行失败之前尝试执行节点的次数",
	"nodeSettings.maxTries.displayName": "最大尝试次数",
	"nodeSettings.noDescriptionFound": "未找到描述",
	"nodeSettings.nodeDescription": "节点描述",
	"nodeSettings.notes.description": "要与节点一起保存的可选注释",
	"nodeSettings.notes.displayName": "注释",
	"nodeSettings.notesInFlow.description": "如果处于活动状态，则上述注释将作为副标题显示在流中",
	"nodeSettings.notesInFlow.displayName": "在流中显示注释？",
	"nodeSettings.parameters": "参数",
	"nodeSettings.parametersShort": "参数",
	"nodeSettings.settings": "设置",
	"nodeSettings.action": "动作",
	"nodeSettings.credential": "认证",
	"nodeSettings.communityNodeTooltip": "这是一个 <a href=\"{docUrl}\" target=\"_blank\"/>社区节点</a>",
	"nodeSettings.retryOnFail.description": "如果处于活动状态，则节点在失败时尝试再次执行",
	"nodeSettings.retryOnFail.displayName": "失败时重试",
	"nodeSettings.scopes.expandedNoticeWithScopes": "<a data-key=\"toggle-expand\">{count} 个范围</a>可用于 {activeCredential} 凭证<br>{scopes}<br><a data-key=\"show-less\">显示较少</a> | <a data-key=\"toggle-expand\">{count} 个范围</a>可用于 {activeCredential} 凭证<br>{scopes}<br><a data-key=\"show-less\">显示较少</a>",
	"nodeSettings.scopes.notice": "<a data-key=\"toggle-expand\">{count} 个范围</a>可用于 {activeCredential} 凭证 | <a data-key=\"toggle-expand\">{count} 个范围</a>可用于 {activeCredential} 凭证",
	"nodeSettings.theNodeIsNotValidAsItsTypeIsUnknown": "节点无效，因为其类型 ({nodeType}) 未知",
	"nodeSettings.communityNodeDetails.title": "节点详情",
	"nodeSettings.communityNodeUnknown.title": "安装此节点以使用它",
	"nodeSettings.communityNodeUnknown.title.preview": "详细的节点信息不可用",
	"nodeSettings.communityNodeUnknown.description": "此节点当前未安装。它是 {action} 社区包的一部分。",
	"nodeSettings.communityNodeUnknown.installLink.text": "如何安装社区节点",
	"nodeSettings.communityNodeUnknown.installButton.label": "安装",
	"nodeSettings.communityNodeUnknown.viewDetailsButton.label": "查看详情",
	"nodeSettings.nodeTypeUnknown.description": "此节点当前未安装。它要么来自较新版本的 n8n、一个 {action}，要么具有无效的结构",
	"nodeSettings.nodeTypeUnknown.description.customNode": "自定义节点",
	"nodeSettings.thisNodeDoesNotHaveAnyParameters": "此节点没有任何参数",
	"nodeSettings.useTheHttpRequestNode": "使用 <b>HTTP 请求</b>节点进行自定义 API 调用。我们将为您处理 {nodeTypeDisplayName} 身份验证。<a target=\"_blank\" href=\"https://docs.n8n.io/integrations/custom-operations/\">了解更多</a>",
	"nodeSettings.waitBetweenTries.description": "每次尝试之间等待的时间（以毫秒为单位）",
	"nodeSettings.waitBetweenTries.displayName": "等待尝试之间的时间（毫秒）",
	"nodeSettings.hasForeignCredential": "要编辑此节点，请执行以下操作之一：<br/>a) 请 {owner} 与您共享凭证，或<br/>b) 复制节点并添加您自己的凭证",
	"nodeSettings.latest": "最新",
	"nodeSettings.deprecated": "已弃用",
	"nodeSettings.latestVersion": "最新版本：{version}",
	"nodeSettings.outputCleared.title": "参数已更改",
	"nodeSettings.outputCleared.message": "参数顺序已更改，传出连接已清除",
	"nodeSettings.nodeVersion": "{node} 节点版本 {version}",
	"nodeView.addNode": "添加节点",
	"nodeView.openFocusPanel": "打开焦点面板",
	"nodeView.openNodesPanel": "打开节点面板",
	"nodeView.openCommandBar": "命令栏",
	"nodeView.addATriggerNodeFirst": "首先添加<a data-action='showNodeCreator'>触发节点</a>",
	"nodeView.addOrEnableTriggerNode": "<a data-action='showNodeCreator'>添加</a>或启用触发节点以执行工作流",
	"nodeView.addSticky": "点击以添加便签",
	"nodeView.addStickyHint": "添加便签",
	"nodeView.cantExecuteNoTrigger": "无法执行工作流",
	"nodeView.canvasAddButton.addATriggerNodeBeforeExecuting": "在执行工作流之前添加触发节点",
	"nodeView.canvasAddButton.addFirstStep": "添加第一步...",
	"nodeView.templateLink": "或者从模板开始",
	"nodeView.confirmMessage.onClipboardPasteEvent.cancelButtonText": "",
	"nodeView.confirmMessage.onClipboardPasteEvent.confirmButtonText": "是，导入",
	"nodeView.confirmMessage.onClipboardPasteEvent.headline": "导入工作流？",
	"nodeView.confirmMessage.onClipboardPasteEvent.message": "将从<br /><i>{plainTextData}<i>导入工作流",
	"nodeView.confirmMessage.debug.cancelButtonText": "取消",
	"nodeView.confirmMessage.debug.confirmButtonText": "取消固定",
	"nodeView.confirmMessage.debug.headline": "取消固定工作流数据",
	"nodeView.confirmMessage.debug.message": "加载此执行将取消固定当前在这些节点中固定的数据",
	"nodeView.couldntImportWorkflow": "无法导入工作流",
	"nodeView.couldntLoadWorkflow.invalidWorkflowObject": "无效的工作流对象",
	"nodeView.deletesTheCurrentExecutionData": "删除当前执行数据",
	"nodeView.focusPanel.noExecutionData": "执行上一个节点以实现自动完成",
	"nodeView.focusPanel.noParameters.title": "在这里显示一个节点参数，以便于迭代。",
	"nodeView.focusPanel.noParameters.subtitle": "例如，始终保持提示可见，以便在调整工作流时可以运行它。",
	"nodeView.focusPanel.v2.noParameters.title": "选择一个节点在这里进行编辑",
	"nodeView.focusPanel.v2.noParameters.subtitle": "或者通过点击旁边的按钮显示您希望迭代的单个节点参数：",
	"nodeView.focusPanel.missingParameter": "该参数不再在节点上可见。可能修改了相关的参数，从而移除了这个参数。",
	"nodeView.itLooksLikeYouHaveBeenEditingSomething": "看起来你做了一些编辑。如果在保存之前离开，你的更改可能会丢失。",
	"nodeView.loadingTemplate": "正在加载模板",
	"nodeView.moreInfo": "更多信息",
	"nodeView.noNodesGivenToAdd": "未指定要添加的节点",
	"nodeView.prompt.cancel": "@:_reusableBaseText.cancel",
	"nodeView.prompt.invalidName": "无效的名称",
	"nodeView.prompt.newName": "新名称",
	"nodeView.prompt.rename": "重命名",
	"nodeView.prompt.renameNode": "重命名节点",
	"nodeView.redirecting": "正在重定向",
	"nodeView.refresh": "刷新",
	"nodeView.resetZoom": "重置缩放",
	"nodeView.tidyUp": "整理",
	"nodeView.runButtonText.executeWorkflow": "执行工作流程",
	"nodeView.runButtonText.executingWorkflow": "正在执行工作流",
	"nodeView.runButtonText.waitingForTriggerEvent": "正在等待触发事件",
	"nodeView.runButtonText.from": "来自 {nodeName}",
	"nodeView.showError.workflowError": "工作流执行时发生错误",
	"nodeView.showError.getWorkflowDataFromUrl.title": "加载工作流时出现问题",
	"nodeView.showError.importWorkflowData.title": "导入工作流时出现问题",
	"nodeView.showError.mounted1.message": "加载初始数据时出现问题",
	"nodeView.showError.mounted1.title": "初始化问题",
	"nodeView.showError.mounted2.message": "初始化工作流时出现问题",
	"nodeView.showError.mounted2.title": "初始化问题",
	"nodeView.showError.openExecution.title": "加载执行时出现问题",
	"nodeView.showError.openExecution.node": "执行过程中打开节点时出现问题",
	"nodeView.showError.openWorkflow.title": "打开工作流时出现问题",
	"nodeView.showError.stopExecution.title": "停止执行时出现问题",
	"nodeView.showError.stopWaitingForWebhook.title": "删除测试 Webhook 时出现问题",
	"nodeView.showError.nodeNodeCompatible.title": "无法连接",
	"nodeView.showError.nodeNodeCompatible.message": "节点“{sourceNodeName}”无法连接到节点“{targetNodeName}”，因为它们不兼容。",
	"nodeView.showMessage.addNodeButton.message": "“{nodeTypeName}”是未知的节点类型",
	"nodeView.showMessage.addNodeButton.title": "无法插入节点",
	"nodeView.showMessage.keyDown.title": "工作流已创建",
	"nodeView.showMessage.showMaxNodeTypeError.message": "一个工作流中只允许一个“{nodeTypeDataDisplayName}”节点 | 一个工作流中只允许 {count} 个“{nodeTypeDataDisplayName}”节点",
	"nodeView.showMessage.showMaxNodeTypeError.title": "无法插入节点",
	"nodeView.showMessage.stopExecutionCatch.unsaved.message": "此执行已取消",
	"nodeView.showMessage.stopExecutionCatch.unsaved.title": "执行已取消",
	"nodeView.showMessage.stopExecutionCatch.message": "它在可以停止之前就已完成",
	"nodeView.showMessage.stopExecutionCatch.title": "工作流已完成执行",
	"nodeView.showMessage.stopExecutionTry.title": "执行已停止",
	"nodeView.showMessage.debug.title": "已导入执行数据",
	"nodeView.showMessage.debug.content": "您可以进行编辑并重新执行。完成后，取消固定第一个节点。",
	"nodeView.showMessage.debug.missingNodes.title": "未导入某些执行数据",
	"nodeView.showMessage.debug.missingNodes.content": "自执行运行以来，某些节点已被删除或重命名或添加到工作流中。",
	"nodeView.showMessage.ndvUrl.missingNodes.title": "节点未找到",
	"nodeView.showMessage.ndvUrl.missingNodes.content": "URL 中包含了对未知节点的引用。可能是该节点已被删除？",
	"nodeView.stopCurrentExecution": "停止当前执行",
	"nodeView.stopWaitingForWebhookCall": "停止等待 Webhook 调用",
	"nodeView.stoppingCurrentExecution": "正在停止当前执行",
	"nodeView.thereWasAProblemLoadingTheNodeParametersOfNode": "加载节点参数时出现问题",
	"nodeView.thisExecutionHasntFinishedYet": "此执行尚未完成",
	"nodeView.toSeeTheLatestStatus": "查看最新状态",
	"nodeView.workflowTemplateWithIdCouldNotBeFound": "找不到 ID 为“{templateId}”的工作流模板",
	"nodeView.workflowWithIdCouldNotBeFound": "找不到 ID 为“{workflowId}”的工作流",
	"nodeView.zoomIn": "放大",
	"nodeView.zoomOut": "缩小",
	"nodeView.zoomToFit": "缩放到适合",
	"nodeView.replaceMe": "替换我",
	"nodeView.setupTemplate": "设置模板",
	"nodeView.expandAllNodes": "展开所有节点",
	"nodeView.collapseAllNodes": "折叠所有节点",
	"nodeView.enterZoomMode": "进入缩放模式",
	"nodeView.leaveZoomMode": "退出缩放模式",
	"nodeViewV2.showError.editingNotAllowed": "不允许编辑",
	"nodeViewV2.showError.failedToCreateNode": "创建节点失败",
	"contextMenu.node": "节点 | 节点",
	"contextMenu.sticky": "便签 | 便签",
	"contextMenu.selectAll": "全选",
	"contextMenu.deselectAll": "清除选择",
	"contextMenu.tidyUpWorkflow": "整理工作流程",
	"contextMenu.tidyUpSelection": "整理所选内容",
	"contextMenu.extract": "将节点转换为子工作流 | 将 {count} 个节点转换为子工作流",
	"contextMenu.replace": "替换",
	"contextMenu.duplicate": "复制 | 复制 {count} 个 {subject}",
	"contextMenu.open": "打开...",
	"contextMenu.test": "测试步骤",
	"contextMenu.rename": "重命名",
	"contextMenu.openSubworkflow": "转到子工作流程",
	"contextMenu.copy": "复制 | 复制 {count} 个 {subject}",
	"contextMenu.deactivate": "停用 | 停用 {count} 个 {subject}",
	"contextMenu.activate": "激活 | 激活 {count} 个节点",
	"contextMenu.pin": "固定 | 固定 {count} 个节点",
	"contextMenu.unpin": "取消固定 | 取消固定 {count} 个节点",
	"contextMenu.delete": "删除 | 删除 {count} 个 {subject}",
	"contextMenu.addNode": "添加节点",
	"contextMenu.addSticky": "添加便签",
	"contextMenu.editSticky": "编辑便签",
	"contextMenu.changeColor": "更改颜色",
	"contextMenu.copyTestUrl": "复制测试 URL",
	"contextMenu.copyProductionUrl": "复制生产环境 URL",
	"nodeWebhooks.clickToCopyWebhookUrls": "点击复制 Webhook URL",
	"nodeWebhooks.clickToCopyWebhookUrls.formTrigger": "点击复制表单 URL",
	"nodeWebhooks.clickToCopyWebhookUrls.chatTrigger": "点击复制聊天 URL",
	"nodeWebhooks.clickToCopyWebhookUrls.mcpTrigger": "点击复制MCP网址",
	"nodeWebhooks.clickToDisplayWebhookUrls": "点击显示 Webhook URL",
	"nodeWebhooks.clickToDisplayWebhookUrls.formTrigger": "点击显示表单 URL",
	"nodeWebhooks.clickToDisplayWebhookUrls.chatTrigger": "点击显示聊天 URL",
	"nodeWebhooks.clickToDisplayWebhookUrls.mcpTrigger": "点击显示MCP网址",
	"nodeWebhooks.clickToHideWebhookUrls": "点击隐藏 Webhook URL",
	"nodeWebhooks.clickToHideWebhookUrls.formTrigger": "点击隐藏表单 URL",
	"nodeWebhooks.clickToHideWebhookUrls.chatTrigger": "点击隐藏聊天 URL",
	"nodeWebhooks.clickToHideWebhookUrls.mcpTrigger": "点击隐藏MCP网址",
	"nodeWebhooks.invalidExpression": "[无效的表达式]",
	"nodeWebhooks.productionUrl": "生产 URL",
	"nodeWebhooks.showMessage.title": "URL 已复制",
	"nodeWebhooks.showMessage.testWebhookUrl": "该节点仅支持生产环境的 webhook。",
	"nodeWebhooks.showMessage.not.active": "工作流未激活",
	"nodeWebhooks.showMessage.title.formTrigger": "表单 URL 已复制",
	"nodeWebhooks.showMessage.title.chatTrigger": "聊天 URL 已复制",
	"nodeWebhooks.showMessage.title.mcpTrigger": "MCP URL已复制",
	"nodeWebhooks.showMessage.message.formTrigger": "通过此 URL 提交的表单将在激活时触发工作流",
	"nodeWebhooks.showMessage.message.chatTrigger": "通过此 URL 提交的聊天将在激活时触发工作流",
	"nodeWebhooks.testUrl": "测试 URL",
	"nodeWebhooks.webhookUrls": "Webhook URL",
	"nodeWebhooks.webhookUrls.formTrigger": "表单 URL",
	"nodeWebhooks.webhookUrls.chatTrigger": "聊天 URL",
	"nodeWebhooks.webhookUrls.mcpTrigger": "MCP 网址",
	"openWorkflow.workflowImportError": "无法导入工作流",
	"openWorkflow.workflowNotFoundError": "找不到工作流",
	"oauth.consentView.title": "OAuth 访问授权同意",
	"oauth.consentView.heading": "{clientName} 想要访问你的 n8n 实例",
	"oauth.consentView.description": "这将允许 {clientName} 执行以下操作：",
	"oauth.consentView.action.listWorkflows": "获取您的工作流列表",
	"oauth.consentView.action.workflowDetails": "获取特定工作流的详细信息",
	"oauth.consentView.action.executeWorkflows": "为您执行工作流",
	"oauth.consentView.readMore": "了解更多 <a href='{docsUrl}' target='_blank'>这里</a>",
	"oauth.consentView.error.deny": "拒绝访问错误",
	"oauth.consentView.error.allow": "允许访问时出错",
	"oauth.consentView.error.fetchDetails": "获取客户端详细信息时出错",
	"oauth.consentView.success.title": "成功",
	"oauth.consentView.success.description": "您很快就会被重定向回客户端。",
	"parameterInput.expressionResult": "例如 {result}",
	"parameterInput.dragTipBeforePill": "拖动",
	"parameterInput.inputField": "输入字段",
	"parameterInput.dragTipAfterPill": "从左侧拖动到此处使用。",
	"parameterInput.learnMore": "了解更多",
	"parameterInput.result": "结果",
	"parameterInput.item": "项目",
	"parameterInput.hoverTableItemTip": "您还可以通过将鼠标悬停在表视图中的输入/输出项上来执行此操作",
	"parameterInput.emptyString": "[空]",
	"parameterInput.customApiCall": "自定义 API 调用",
	"parameterInput.iconPicker.tooltip": "选择图标或表情符号",
	"parameterInput.selectIcon": "选择图标",
	"parameterInput.error": "错误",
	"parameterInput.expression": "表达式",
	"parameterInput.fixed": "固定值",
	"parameterInput.formatHtml": "格式化 HTML",
	"parameterInput.issues": "问题",
	"parameterInput.loadingOptions": "正在加载选项...",
	"parameterInput.loadOptionsErrorService": "从 {service} 获取选项时出错",
	"parameterInput.loadOptionsError": "获取选项时出错",
	"parameterInput.loadOptionsCredentialsRequired": "设置凭证以查看选项",
	"parameterInput.openEditWindow": "打开编辑窗口",
	"parameterInput.parameter": "参数：“{shortPath}”",
	"parameterInput.parameterHasExpression": "参数：“{shortPath}”有一个表达式",
	"parameterInput.parameterHasIssues": "参数：“{shortPath}”有问题",
	"parameterInput.parameterHasIssuesAndExpression": "参数：“{shortPath}”有问题并且有一个表达式",
	"parameterInput.refreshList": "刷新列表",
	"parameterInput.clearContents": "清除内容",
	"parameterInput.focusParameter": "焦点参数",
	"parameterInput.resetValue": "重置值",
	"parameterInput.select": "选择",
	"parameterInput.selectDate": "选择日期",
	"parameterInput.selectDateAndTime": "选择日期和时间",
	"parameterInput.selectACredentialTypeFromTheDropdown": "从下拉列表中选择凭证类型",
	"parameterInput.theValueIsNotSupported": "不支持值“{checkValue}”！",
	"parameterInput.selectedWorkflowIsArchived": "所选工作流程已存档",
	"parameterInputExpanded.openDocs": "打开文档",
	"parameterInputExpanded.thisFieldIsRequired": "此字段为必填字段",
	"parameterInputList.delete": "删除",
	"parameterInputList.deleteParameter": "删除参数",
	"parameterInputList.parameterOptions": "参数选项",
	"parameterInputList.loadingFields": "正在加载字段...",
	"parameterInputList.loadingError": "加载字段时出错。请刷新页面并重试。",
	"parameterInputList.callout.dismiss.confirm.text": "你想要永久隐藏此项吗？",
	"parameterInputList.callout.dismiss.confirm.confirmButtonText": "确认",
	"parameterInputList.callout.dismiss.confirm.cancelButtonText": "取消",
	"parameterOverride.overridePanelText": "由<b>模型</b>自动定义",
	"parameterOverride.applyOverrideButtonTooltip": "让模型来定义该参数",
	"parameterOverride.descriptionTooltip": "向大语言模型（LLM）说明应如何生成该数值。一个良好且具体的描述能使LLM更频繁地生成预期结果。",
	"personalizationModal.businessOwner": "企业主",
	"personalizationModal.continue": "继续",
	"personalizationModal.cicd": "CI/CD",
	"personalizationModal.cloudInfrastructureOrchestration": "云基础设施编排",
	"personalizationModal.customerIntegrations": "客户集成",
	"personalizationModal.customerSupport": "客户支持",
	"personalizationModal.customizeN8n": "为您定制 n8n",
	"personalizationModal.dataScience": "数据科学",
	"personalizationModal.devops": "Devops",
	"personalizationModal.digitalAgencyOrConsultant": "营销机构/咨询",
	"personalizationModal.eCommerce": "电子商务",
	"personalizationModal.education": "教育",
	"personalizationModal.engineering": "工程",
	"personalizationModal.engineeringOrDevops": "工程/Devops",
	"personalizationModal.errorWhileSubmittingResults": "提交结果时出错",
	"personalizationModal.financeOrAccounting": "财务/会计",
	"personalizationModal.financeOrInsurance": "财务/保险",
	"personalizationModal.getStarted": "开始",
	"personalizationModal.government": "政府",
	"personalizationModal.healthcare": "医疗保健",
	"personalizationModal.howAreYourCodingSkills": "您的编码技能如何？",
	"personalizationModal.howBigIsYourCompany": "您的公司规模有多大？",
	"personalizationModal.hr": "人力资源",
	"personalizationModal.imNotUsingN8nForWork": "我没有将 n8n 用于工作",
	"personalizationModal.it": "IT",
	"personalizationModal.legal": "法律",
	"personalizationModal.lessThan20People": "少于 20 人",
	"personalizationModal.managedServiceProvider": "托管服务提供商",
	"personalizationModal.manufacturing": "制造业",
	"personalizationModal.marketing": "市场营销",
	"personalizationModal.media": "媒体",
	"personalizationModal.notSureYet": "尚不确定",
	"personalizationModal.operations": "运营",
	"personalizationModal.other": "其他",
	"personalizationModal.otherPleaseSpecify": "其他（请指定）",
	"personalizationModal.specifyReportedSource": "指定您如何了解 n8n",
	"personalizationModal.people": "人",
	"personalizationModal.physicalRetailOrServices": "实体零售或服务",
	"personalizationModal.product": "产品（例如，快速原型设计）",
	"personalizationModal.realEstateOrConstruction": "房地产/建筑",
	"personalizationModal.saas": "软件即服务",
	"personalizationModal.salesAndMarketing": "销售和营销",
	"personalizationModal.security": "安全",
	"personalizationModal.select": "选择...",
	"personalizationModal.howDidYouHearAboutN8n": "您是如何知道 n8n 的？",
	"personalizationModal.friendWordOfMouth": "朋友/口头传播",
	"personalizationModal.podcast": "播客",
	"personalizationModal.event": "活动",
	"personalizationModal.myself": "我自己",
	"personalizationModal.myTeam": "我的团队",
	"personalizationModal.otherTeams": "其他团队",
	"personalizationModal.specifyAutomationBeneficiary": "您的自动化主要针对哪些人？",
	"personalizationModal.specifyYourRole": "请指定您的角色",
	"personalizationModal.specifyYourAutomationGoal": "请指定您的自动化目标",
	"personalizationModal.specifyYourCompanysIndustry": "指定您公司所在的行业",
	"personalizationModal.support": "支持",
	"personalizationModal.systemsIntegrator": "系统集成商/自动化机构",
	"personalizationModal.telecoms": "电信",
	"personalizationModal.thanks": "谢谢！",
	"personalizationModal.theseQuestionsHelpUs": "这些问题有助于我们为您量身定制 n8n",
	"personalizationModal.whichRoleBestDescribesYou": "哪个角色最能描述您？",
	"personalizationModal.whatAreYouLookingToAutomate": "您希望自动化什么？",
	"personalizationModal.whatBestDescribesYourCompany": "什么最能描述您的公司？",
	"personalizationModal.whichIndustriesIsYourCompanyIn": "您的公司在哪些行业？",
	"personalizationModal.specifySalesMarketingGoal": "销售和营销的哪些部分？",
	"personalizationModal.leadGeneration": "潜在客户开发、扩充、路由",
	"personalizationModal.customerCommunication": "客户沟通",
	"personalizationModal.customerActions": "潜在客户状态发生更改时采取的操作",
	"personalizationModal.yourEmailAddress": "您的电子邮件地址",
	"personalizationModal.email": "输入您的电子邮件..",
	"personalizationModal.adCampaign": "广告系列管理",
	"personalizationModal.reporting": "报告",
	"personalizationModal.ticketingSystemsIntegrations": "票务系统集成",
	"personalizationModal.dataSynching": "数据同步",
	"personalizationModal.incidentResponse": "事件响应",
	"personalizationModal.monitoringAndAlerting": "监控和警报",
	"personalizationModal.specifyUsageMode": "您是否正在考虑执行以下任何操作？",
	"personalizationModal.connectToInternalDB": "连接到我公司的内部数据库",
	"personalizationModal.buildBackendServices": "构建后端服务（端点）",
	"personalizationModal.manipulateFiles": "操作/传输文件",
	"personalizationModal.specifyOtherSalesAndMarketingGoal": "指定您其他的销售和营销目标",
	"personalizationModal.registerEmailForTrial": "注册您的电子邮件以激活我们 {trial} 的 14 天免费试用版",
	"personalizationModal.registerEmailForTrial.enterprise": "企业版功能",
	"personalizationModal.registerEmailForTrial.notice": "通过选中此框，您同意允许我们存储您的姓名和电子邮件以激活您的试用版并发送您的许可证密钥。我们将在试用结束时进行检查，以确保您充分利用我们的企业版功能。",
	"personalizationModal.registerEmailForTrial.success.title": "您的企业版许可证正在发送中",
	"personalizationModal.registerEmailForTrial.success.message": "您将很快收到一封电子邮件以激活您的企业版许可证。如果您没有看到它，请检查您的垃圾邮件文件夹。",
	"personalizationModal.registerEmailForTrial.success.button": "开始使用 n8n",
	"personalizationModal.registerEmailForTrial.error": "注册企业版试用时出错",
	"pushConnection.nodeExecutedSuccessfully": "节点已成功执行",
	"pushConnection.workflowExecutedSuccessfully": "工作流已成功执行",
	"pushConnection.error.message": "连接已丢失",
	"pushConnection.error.tooltip": "您遇到了连接问题或服务器宕机。<br />n8n 应该会在问题解决后自动重新连接。",
	"pushConnection.pollingNode.dataNotFound": "未找到 {service} 数据",
	"pushConnection.pollingNode.dataNotFound.message": "我们在 {service} 中没有找到任何数据来模拟事件。请在 {service} 中创建一个，然后重试。",
	"pushConnection.executionFailed": "执行失败",
	"pushConnection.executionFailed.message": "可能没有足够的内存来完成执行。此处提供了有关避免此问题的提示 <a target=\"_blank\" href=\"https://docs.n8n.io/flow-logic/error-handling/memory-errors/\">here</a>",
	"pushConnection.executionError": "执行工作流时出现问题{error}",
	"pushConnection.executionError.openNode": "打开出错的节点",
	"pushConnection.executionError.details": "<br /><strong>{details}</strong>",
	"prompts.npsSurvey.recommendationQuestion": "您向朋友或同事推荐 n8n 的可能性有多大？",
	"prompts.npsSurvey.greatFeedbackTitle": "很高兴听到！我们可以联系您，看看如何让 n8n 对您更好吗？",
	"prompts.npsSurvey.defaultFeedbackTitle": "感谢您的反馈！我们很乐意了解我们如何改进。我们可以联系您吗？",
	"prompts.npsSurvey.feedbackQuestionTitle": "谢谢你！你为什么选择这个分数？",
	"prompts.npsSurvey.notLikely": "不太可能",
	"prompts.npsSurvey.veryLikely": "很有可能",
	"prompts.npsSurvey.send": "发送",
	"prompts.npsSurvey.reviewUs": "如果您想提供更多帮助，请在 <a target=\"_blank\" href=\"https://www.g2.com/products/n8n/reviews/start\">G2</a> 上留下评论。",
	"prompts.npsSurvey.thanks": "感谢您的反馈",
	"projectRoles.manageRoles.paywall.title": "在企业计划中可用",
	"projectRoles.manageRoles.paywall.text": "创建自定义角色，并设置细致的权限，以精确控制团队成员在项目中可以执行的操作。",
	"projectRoles.project:read": "查看",
	"projectRoles.project:read.tooltip": "查看项目名称、图标、描述，并在项目内导航",
	"projectRoles.project:update": "编辑",
	"projectRoles.project:update.tooltip": "编辑项目详细信息和管理用户",
	"projectRoles.project:delete": "删除",
	"projectRoles.project:delete.tooltip": "删除整个项目及其所有内容",
	"projectRoles.folder:read": "查看",
	"projectRoles.folder:read.tooltip": "查看项目中的文件夹和子文件夹",
	"projectRoles.folder:update": "编辑",
	"projectRoles.folder:update.tooltip": "重命名文件夹，在文件夹之间移动工作流程，并更改父文件夹",
	"projectRoles.folder:create": "创建",
	"projectRoles.folder:create.tooltip": "创建新文件夹或子文件夹",
	"projectRoles.folder:move": "转移",
	"projectRoles.folder:move.tooltip": "将文件夹及其工作流移动到另一个项目。",
	"projectRoles.folder:delete": "删除",
	"projectRoles.folder:delete.tooltip": "删除一个空文件夹。如果不为空，请询问进一步的操作。",
	"projectRoles.workflow:read": "查看",
	"projectRoles.workflow:read.tooltip": "查看项目中的工作流",
	"projectRoles.workflow:execute": "执行",
	"projectRoles.workflow:update": "编辑",
	"projectRoles.workflow:update.tooltip": "编辑工作流内容并执行工作流",
	"projectRoles.workflow:create": "创建",
	"projectRoles.workflow:create.tooltip": "创建新的工作流",
	"projectRoles.workflow:share": "分享",
	"projectRoles.workflow:move": "转移",
	"projectRoles.workflow:move.tooltip": "将工作流程转移到另一个项目",
	"projectRoles.workflow:delete": "删除",
	"projectRoles.workflow:delete.tooltip": "删除工作流",
	"projectRoles.workflow:publish": "发布",
	"projectRoles.workflow:publish.tooltip": "发布和取消发布工作流",
	"projectRoles.credential:read": "视图",
	"projectRoles.credential:read.tooltip": "查看凭据详情（秘密已隐藏）并在工作流程中使用它们",
	"projectRoles.credential:update": "编辑",
	"projectRoles.credential:update.tooltip": "编辑凭据详情，包括密钥",
	"projectRoles.credential:create": "创建",
	"projectRoles.credential:create.tooltip": "创建新凭据",
	"projectRoles.credential:share": "分享",
	"projectRoles.credential:share.tooltip": "与其他用户共享凭据",
	"projectRoles.credential:move": "转移",
	"projectRoles.credential:move.tooltip": "将凭据移动到另一个项目",
	"projectRoles.credential:delete": "删除",
	"projectRoles.credential:delete.tooltip": "删除凭据",
	"projectRoles.dataTable:read": "查看",
	"projectRoles.dataTable:read.tooltip": "查看数据表的结构（列、名称）并查看元数据",
	"projectRoles.dataTable:update": "编辑",
	"projectRoles.dataTable:update.tooltip": "修改模式/列",
	"projectRoles.dataTable:create": "创建",
	"projectRoles.dataTable:create.tooltip": "创建新的数据表",
	"projectRoles.dataTable:delete": "删除",
	"projectRoles.dataTable:delete.tooltip": "删除数据表",
	"projectRoles.dataTable:readRow": "查看行",
	"projectRoles.dataTable:readRow.tooltip": "查看数据表中的行",
	"projectRoles.dataTable:writeRow": "编辑行",
	"projectRoles.dataTable:writeRow.tooltip": "修改数据表中的行",
	"projectRoles.projectVariable:read": "查看",
	"projectRoles.projectVariable:read.tooltip": "查看项目变量的值并在工作流中使用它们。",
	"projectRoles.projectVariable:update": "编辑",
	"projectRoles.projectVariable:update.tooltip": "修改现有的项目变量",
	"projectRoles.projectVariable:create": "创建",
	"projectRoles.projectVariable:create.tooltip": "创建新的项目变量",
	"projectRoles.projectVariable:delete": "删除",
	"projectRoles.projectVariable:delete.tooltip": "删除项目变量",
	"projectRoles.sourceControl:pull": "拉取",
	"projectRoles.sourceControl:push": "推送",
	"projectRoles.sourceControl:push.tooltip": "将更改（工作流、凭据、标签）推送到远程仓库",
	"projectRoles.sourceControl:manage": "配置",
	"projectRoles.sourceControl.table.name": "名称",
	"projectRoles.sourceControl.table.type": "类型",
	"projectRoles.sourceControl.table.assignedTo": "分配给",
	"projectRoles.sourceControl.table.lastEdited": "最后编辑于",
	"projectRoles.backToRoleList": "返回角色列表",
	"projectRoles.newRole": "新角色",
	"projectRoles.addRole": "添加角色",
	"projectRoles.discardChanges": "放弃更改",
	"projectRoles.save": "保存",
	"projectRoles.create": "创建",
	"projectRoles.roleName": "角色名称",
	"projectRoles.description": "描述",
	"projectRoles.optional": "可选",
	"projectRoles.permissions": "权限",
	"projectRoles.preset": "预设",
	"projectRoles.admin": "管理员",
	"projectRoles.editor": "编辑器",
	"projectRoles.viewer": "查看器",
	"projectRoles.type.project": "项目",
	"projectRoles.type.folder": "文件夹",
	"projectRoles.type.workflow": "工作流程",
	"projectRoles.type.credential": "凭据",
	"projectRoles.type.sourceControl": "源代码管理",
	"projectRoles.type.dataTable": "数据表格",
	"projectRoles.type.projectVariable": "项目变量",
	"projectRoles.literal.system": "系统",
	"projectRoles.literal.custom": "自定义",
	"projectRoles.action.cancel": "取消",
	"projectRoles.action.delete": "删除",
	"projectRoles.action.delete.button": "删除角色",
	"projectRoles.action.delete.success": "角色已删除",
	"projectRoles.action.delete.error": "删除角色时出错",
	"projectRoles.action.delete.title": "删除 '{roleName}'？",
	"projectRoles.action.delete.text": "您确定要永久删除 '{roleName}' 吗？此操作无法撤消。",
	"projectRoles.action.delete.warning": "删除角色是永久性的。这无法撤消。",
	"projectRoles.action.delete.useWarning": "您无法在该角色分配给 {count} 位用户时删除它。请先将其从所有用户卸载。",
	"projectRoles.dangerZone": "危险区域",
	"projectRoles.action.duplicate": "重复",
	"projectRoles.action.duplicate.name": "{roleName} 的副本",
	"projectRoles.action.duplicate.success": "角色 '{roleName}' 成功复制为 '{roleDuplicateName}'",
	"projectRoles.action.duplicate.error": "重复角色时出错",
	"projectRoles.action.create.success": "角色创建成功",
	"projectRoles.action.create.error": "创建角色时出错",
	"projectRoles.action.update": "更新角色",
	"projectRoles.action.update.success": "角色更新成功",
	"projectRoles.action.update.error": "更新角色时出错",
	"projectRoles.action.update.title": "为 '{count}' 个用户更新角色？",
	"projectRoles.action.update.text": "这些更改将立即影响所有 {count} 个具有此角色的用户。您确定要继续吗？",
	"renameAction.emptyName.message": "请输入名称，或按“esc”返回之前的名称",
	"renameAction.emptyName.title": "名称缺失",
	"renameAction.invalidName.title": "无效名称",
	"resourceLocator.id.placeholder": "输入 ID...",
	"resourceLocator.mode.id": "按 ID",
	"resourceLocator.mode.url": "按 URL",
	"resourceLocator.mode.list": "从列表中",
	"resourceLocator.mode.list.disabled.title": "更改为“已固定”模式以从列表中选择",
	"resourceLocator.mode.list.error.title": "无法加载列表",
	"resourceLocator.mode.list.error.description.checkCredentials": "请核对您的凭证",
	"resourceLocator.mode.list.error.description.noCredentials": "添加您的凭证",
	"resourceLocator.mode.list.noResults": "无结果",
	"resourceLocator.mode.list.openUrl": "打开 URL",
	"resourceLocator.mode.list.placeholder": "选择...",
	"resourceLocator.mode.list.searchRequired": "输入搜索词以显示结果",
	"resourceLocator.mode.list.addNewResource.vectorStoreInMemory": "创建密钥 \"{resourceName}\"",
	"resourceLocator.dataTable.createNew": "创建新数据表",
	"resourceLocator.modeSelector.placeholder": "模式...",
	"resourceLocator.openSpecificResource": "在 {appName} 中打开 {entity}",
	"resourceLocator.openResource": "在 {appName} 中打开",
	"resourceLocator.placeholder.searchOrCreate": "搜索或创建...",
	"resourceLocator.placeholder.search": "搜索...",
	"resourceLocator.url.placeholder": "输入 URL...",
	"resourceLocator.workflow.inactive.tooltip": "尚未发布。可用于手动测试，但在投入生产运行前必须发布。",
	"resourceMapper.autoMappingNotice": "在此模式下，确保传入的数据字段与 {serviceName} 中的 {fieldWord} 同名。（如果需要，请在此节点之前使用“编辑字段”节点来更改它们。）",
	"resourceMapper.mappingMode.label": "映射列模式",
	"resourceMapper.mappingMode.defineBelow.name": "手动映射每个列",
	"resourceMapper.mappingMode.defineBelow.description": "设置每个 {fieldWord} 的值",
	"resourceMapper.mappingMode.autoMapInputData.name": "自动映射",
	"resourceMapper.mappingMode.autoMapInputData.description": "查找与 {serviceName} 中的 {fieldWord} 匹配的传入数据",
	"resourceMapper.fetchingFields.message": "正在提取 {fieldWord}",
	"resourceMapper.fetchingFields.errorMessage": "无法获取 {fieldWord}。",
	"resourceMapper.fetchingFields.noFieldsFound": "在 {serviceName} 中未找到 {fieldWord}。",
	"resourceMapper.columnsToMatchOn.label": "要匹配的 {fieldWord}",
	"resourceMapper.columnsToMatchOn.multi.description": "在将 {nodeDisplayName} 中的行与此节点的输入项进行匹配时使用的 {fieldWord}。通常是一个 ID。",
	"resourceMapper.columnsToMatchOn.single.description": "在将 {nodeDisplayName} 中的行与此节点的输入项进行匹配时使用的 {fieldWord}。通常是一个 ID。",
	"resourceMapper.columnsToMatchOn.tooltip": "在查找要更新的行时要比较的 {fieldWord}",
	"resourceMapper.columnsToMatchOn.noFieldsFound": "在 {serviceName} 中未找到可用于匹配的 {fieldWord}。",
	"resourceMapper.valuesToSend.label": "要发送的值",
	"resourceMapper.valuesToUpdate.label": "要更新的值",
	"resourceMapper.usingToMatch": "（用于匹配）",
	"resourceMapper.usingToMatch.description": "此 {fieldWord} 不会被更新且无法删除，因为它用于匹配",
	"resourceMapper.removeField": "删除 {fieldWord}",
	"resourceMapper.mandatoryField.title": "此 {fieldWord} 是必填字段，无法删除",
	"resourceMapper.addFieldToSend": "添加要发送的 {fieldWord}",
	"resourceMapper.matching.title": "此 {fieldWord} 用于匹配，无法删除",
	"resourceMapper.addAllFields": "添加所有 {fieldWord}",
	"resourceMapper.removeAllFields": "删除所有 {fieldWord}",
	"resourceMapper.refreshFieldList": "刷新 {fieldWord} 列表",
	"resourceMapper.staleDataWarning.tooltip": "{fieldWord} 已过时。刷新以查看更改。",
	"resourceMapper.staleDataWarning.notice": "刷新以查看更新的字段",
	"resourceMapper.attemptToConvertTypes.displayName": "尝试转换类型",
	"resourceMapper.attemptToConvertTypes.description": "映射字段时尝试转换类型",
	"runData.pinData.insertedExecutionData": "💡 插入了上次成功执行的数据显示。您可以根据需要进行编辑。",
	"runData.openSubExecutionSingle": "查看子执行",
	"runData.openSubExecutionWithId": "查看子执行 {id}",
	"runData.openParentExecution": "检查父执行 {id}",
	"runData.emptyItemHint": "这是一个项目，但它为空。",
	"runData.emptyArray": "[空数组]",
	"runData.emptyString": "空的",
	"runData.emptyObject": "{'{empty object}'}",
	"runData.unnamedField": "[未命名字段]",
	"runData.switchToBinary.info": "此项仅具有",
	"runData.switchToBinary.binary": "二进制数据",
	"runData.linking.hint": "链接显示的输入和输出运行",
	"runData.unlinking.hint": "取消链接显示的输入和输出运行",
	"runData.binary": "二进制",
	"runData.copyItemPath": "复制项目路径",
	"runData.copyItemPath.toast": "已复制项目路径",
	"runData.copyParameterPath": "复制参数路径",
	"runData.copyParameterPath.toast": "已复制参数路径",
	"runData.copyValue": "复制选择",
	"runData.copyValue.toast": "已复制输出数据",
	"runData.copyToClipboard": "复制到剪贴板",
	"runData.copyDisabled": "首先点击您要复制的输出数据，然后点击此按钮。",
	"runData.editOutput": "编辑输出",
	"runData.editOutputInvalid": "输出数据有问题",
	"runData.editOutputInvalid.singleQuote": "意外的单引号。请改用双引号 (\")",
	"runData.editOutputInvalid.onLine": "在第 {line} 行：",
	"runData.editOutputInvalid.atPosition": "（在位置 {position}）",
	"runData.editValue": "编辑值",
	"runData.executionStatus.success": "执行成功",
	"runData.executionStatus.failed": "执行失败",
	"runData.executionStatus.canceled": "执行已取消",
	"runData.downloadBinaryData": "下载",
	"runData.downloadBinaryData.error.title": "下载文件时出错",
	"runData.downloadBinaryData.error.message": "无法下载文件",
	"runData.executeNode": "测试节点",
	"runData.executionTime": "执行时间",
	"runData.fileExtension": "文件扩展名",
	"runData.directory": "目录",
	"runData.url": "统一资源定位符（URL）",
	"runData.fileName": "文件名",
	"runData.invalidPinnedData": "无效的固定数据",
	"runData.items": "项目",
	"runData.json": "JSON",
	"runData.rendered": "渲染",
	"runData.schema": "架构",
	"runData.mimeType": "MIME 类型",
	"runData.fileSize": "文件大小",
	"runData.ms": "毫秒",
	"runData.noBinaryDataFound": "未找到二进制数据",
	"runData.noData": "无数据",
	"runData.noTextDataFound": "未找到文本数据",
	"runData.nodeReturnedALargeAmountOfData": "节点返回了大量数据",
	"runData.output": "输出",
	"runData.showBinaryData": "查看",
	"runData.legacyBinaryMode": "通过在工作流中选择相应的选项来试用新的“v2”执行逻辑模式。",
	"runData.startTime": "开始时间",
	"runData.table": "表格",
	"runData.table.viewSubExecution": "查看子执行 {id}",
	"runData.pindata.learnMore": "了解更多",
	"runData.pindata.thisDataIsPinned": "此数据已固定。",
	"runData.pindata.unpin": "取消固定",
	"runData.editor.save": "保存",
	"runData.editor.cancel": "取消",
	"runData.editor.copyDataInfo": "您可以复制以前执行的数据并将其粘贴到上面。",
	"runData.aiContentBlock.startedAt": "开始于 {startTime}",
	"runData.aiContentBlock.tokens": "{count} 个令牌",
	"runData.aiContentBlock.tokens.prompt": "提示：",
	"runData.aiContentBlock.tokens.completion": "补全：",
	"runData.trimmedData.loading": "加载数据",
	"runData.panel.actions.collapse": "折叠面板",
	"runData.panel.actions.open": "打开面板",
	"runData.panel.actions.popOut": "弹出式面板",
	"runData.panel.actions.sync": "与画布同步选择",
	"saveButton.save": "@:_reusableBaseText.save",
	"saveButton.saved": "已保存",
	"saveButton.saving": "正在保存",
	settings,
	"settings.communityNodes": "社区节点",
	"settings.communityNodes.empty.title": "使用社区节点增强您的工作流",
	"settings.communityNodes.empty.verified.only.title": "通过经过验证的社区节点，为你的工作流程注入强劲动力。",
	"settings.communityNodes.empty.description": "安装我们社区提供的 {count} 多个节点包。",
	"settings.communityNodes.empty.verified.only.description": "您可以直接从节点面板安装由n8n验证过的社区及合作伙伴构建的节点包。已安装的包将在此处显示。",
	"settings.communityNodes.empty.description.no-packages": "安装我们社区提供的节点包。",
	"settings.communityNodes.empty.installPackageLabel": "安装社区节点",
	"settings.communityNodes.npmUnavailable.warning": "要使用此功能，请<a href=\"{npmUrl}\" target=\"_blank\" title=\"如何安装 npm\">安装 npm</a> 并重新启动 n8n。",
	"settings.communityNodes.packageNodes.label": "{count} 个节点 | {count} 个节点",
	"settings.communityNodes.updateAvailable.tooltip": "有更新的版本可用",
	"settings.communityNodes.viewDocsAction.label": "文档",
	"settings.communityNodes.uninstallAction.label": "卸载包",
	"settings.communityNodes.upToDate.tooltip": "您是最新版本",
	"settings.communityNodes.failedToLoad.tooltip": "此包有问题，请尝试卸载它，然后重新安装以解决此问题",
	"settings.communityNodes.fetchError.title": "获取已安装的包时出现问题",
	"settings.communityNodes.fetchError.message": "您的互联网连接或 n8n 实例可能有问题",
	"settings.communityNodes.installModal.title": "安装社区节点",
	"settings.communityNodes.installModal.description": "在 npm 公共注册表中查找要添加的社区节点。",
	"settings.communityNodes.browseButton.label": "浏览",
	"settings.communityNodes.installModal.packageName.label": "npm 包名称",
	"settings.communityNodes.installModal.packageName.tooltip": "<img src='/static/community_package_tooltip_img.png'/><p>这是 <a href='{npmURL}'>npmjs.com</a> 上的包的标题</p><p>通过在 {'@'} 之后添加特定版本来安装特定版本，例如，<code>package-name{'@'}0.15.0</code></p>",
	"settings.communityNodes.installModal.packageName.placeholder": "例如，n8n-nodes-chatwork",
	"settings.communityNodes.installModal.checkbox.label": "我理解从公共来源安装未经认证的代码的风险。",
	"settings.communityNodes.installModal.installButton.label": "安装",
	"settings.communityNodes.installModal.installButton.label.loading": "正在安装",
	"settings.communityNodes.installModal.error.packageNameNotValid": "包名称必须以 n8n-nodes- 开头",
	"settings.communityNodes.messages.install.success": "已安装包",
	"settings.communityNodes.messages.install.error": "安装新包时出错",
	"settings.communityNodes.messages.uninstall.error": "卸载包时出现问题",
	"settings.communityNodes.messages.uninstall.success.title": "已卸载包",
	"settings.communityNodes.messages.update.success.title": "已更新包",
	"settings.communityNodes.messages.update.success.message": "{packageName} 已更新到版本 {version}",
	"settings.communityNodes.messages.update.error.title": "更新包时出现问题",
	"settings.communityNodes.confirmModal.uninstall.title": "卸载节点包",
	"settings.communityNodes.confirmModal.uninstall.message": "任何使用来自 {packageName} 包的节点的工作流都将无法运行。您确定吗？",
	"settings.communityNodes.confirmModal.uninstall.description": "卸载该包将删除该包中包含的所有节点的每个实例。以下工作流将受到影响：",
	"settings.communityNodes.confirmModal.noWorkflowsUsingNodes": "此包中的节点未在任何工作流中使用。",
	"settings.communityNodes.confirmModal.uninstall.buttonLabel": "确认卸载",
	"settings.communityNodes.confirmModal.uninstall.buttonLoadingLabel": "正在卸载",
	"settings.communityNodes.confirmModal.update.title": "更新节点包",
	"settings.communityNodes.confirmModal.update.message": "您即将将 {packageName} 更新到版本 {version}",
	"settings.communityNodes.confirmModal.includedNodes": "套餐包括：{nodes}",
	"settings.communityNodes.confirmModal.update.warning": "此版本尚未经过 n8n 验证，可能包含破坏性更改或错误。",
	"settings.communityNodes.confirmModal.update.description": "更新到最新版本将更新这些节点的所有实例。以下工作流将受到影响：",
	"settings.communityNodes.confirmModal.update.buttonLabel": "确认更新",
	"settings.communityNodes.confirmModal.update.buttonLoadingLabel": "正在更新...",
	"settings.communityNodes.confirmModal.cancel": "取消",
	"settings.mcp": "MCP 访问",
	"settings.mcp.description": "让 MCP 客户端（如 Claude、Lovable 等）发现并执行你的 n8n 工作流。",
	"settings.mcp.header.toggle.enabled": "已启用",
	"settings.mcp.header.toggle.disabled": "已禁用",
	"settings.mcp.actionBox.heading": "将 AI 助手连接到您的工作流",
	"settings.mcp.actionBox.button.label": "启用 MCP 访问",
	"settings.mcp.emptyState.docs.part1": "阅读我们的文档以",
	"settings.mcp.tabs.workflows": "工作流",
	"settings.mcp.tabs.oauth": "已连接的客户端",
	"settings.mcp.access.token.notice": "请务必复制你的访问令牌，否则你将再也看不到它。",
	"settings.mcp.workflows.table.action.removeMCPAccess": "移除 MCP 访问权限",
	"settings.mcp.workflows.table.action.updateDescription": "编辑描述",
	"settings.mcp.workflows.table.column.name": "名称",
	"settings.mcp.workflows.table.column.location": "位置",
	"settings.mcp.workflows.table.column.description.emptyContent": "无描述",
	"settings.mcp.workflows.table.column.description.emptyTooltip": "帮助 MCP 客户端了解何时以及如何使用此工作流。",
	"settings.mcp.workflows.table.empty.title": "没有启用的工作流",
	"settings.mcp.workflows.table.empty.description": "添加兼容的工作流，以便 MCP 客户端能够发现并执行它们。",
	"settings.mcp.oauth.table.empty.title": "没有已连接的 OAuth 客户端",
	"settings.mcp.oauth.table.empty.description": "通过 OAuth 连接的客户端将显示在此处。",
	"settings.mcp.oauth.table.empty.button": "请参阅连接说明",
	"settings.mcp.toggle.disabled.tooltip": "只有实例管理员可以更改此设置。",
	"settings.mcp.toggle.error": "更新MCP访问时出错",
	"settings.mcp.instructions.rotateKey.tooltip": "生成新令牌。<br/>这个将会被自动撤销。",
	"settings.mcp.instructions.apiKey.tip": "将其用作授权令牌。在不同的客户端中可能命名不同。",
	"settings.mcp.error.fetching.apiKey": "获取访问令牌时出错",
	"settings.mcp.error.rotating.apiKey": "生成新访问令牌时出错",
	"settings.mcp.error.fetching.oAuthClients": "获取 OAuth 客户端列表时出错",
	"settings.mcp.oAuthClients.table.clientName": "客户名称",
	"settings.mcp.oAuthClients.table.connectedAt": "连接时间",
	"settings.mcp.oAuthClients.table.action.revokeAccess": "撤销访问权限",
	"settings.mcp.oAuthClients.revoke.success.title": "访问权限已被撤销",
	"settings.mcp.oAuthClients.revoke.success.message": "客户端 {name} 的访问已被撤销",
	"settings.mcp.oAuthClients.revoke.error": "撤销客户端访问时出错",
	"settings.mcp.refresh.tooltip": "刷新列表",
	"settings.mcp.connectWorkflows": "启用工作流",
	"settings.mcp.connectWorkflows.modalTitle": "启用工作流 MCP 访问权限",
	"settings.mcp.connectWorkflows.notice": "已发布且包含 webhook、表单、定时或聊天触发节点之一的工作流可以开启 MCP 访问权限。<a href='{docsLink}' target='_blank'>了解更多</a>",
	"settings.mcp.connectWorkflows.input.placeholder": "搜索要连接的工作流",
	"settings.mcp.connectWorkflows.confirm.label": "启用",
	"settings.mcp.connectWorkflows.error": "获取可用工作流时出错",
	"settings.mcp.connectWorkflows.emptyState": "没有可用的工作流",
	"settings.mcp.connectPopover.tab.oauth": "OAuth（开放授权）",
	"settings.mcp.connectPopover.tab.accessToken": "访问令牌",
	"settings.mcp.connectPopover.serverUrl": "服务器 URL",
	"settings.mcp.connectPopover.jsonConfig": "JSON 配置",
	"settings.mcp.connectPopover.triggerLabel": "连接详情",
	"settings.chatHub": "聊天",
	"settings.chatHub.providers.fetching.error": "获取聊天提供程序设置时出错",
	"settings.chatHub.providers.updated.success": "聊天提供商设置已更新",
	"settings.chatHub.providers.updated.error": "更新聊天提供商设置时发生错误",
	"settings.chatHub.providers.table.provider": "提供者",
	"settings.chatHub.providers.table.models": "模型",
	"settings.chatHub.providers.table.createdAt": "已创建",
	"settings.chatHub.providers.table.updatedAt": "最近编辑",
	"settings.chatHub.providers.table.action.editProvider": "编辑提供者",
	"settings.chatHub.providers.table.action.editProvider.disabled": "只有实例管理员和所有者可以编辑聊天提供商。",
	"settings.chatHub.providers.table.title": "提供者",
	"settings.chatHub.providers.table.refresh.tooltip": "刷新列表",
	"settings.chatHub.providers.table.addProvider.button": "添加提供者",
	"settings.chatHub.providers.table.empty.title": "未配置聊天提供商",
	"settings.chatHub.providers.table.empty.description": "配置聊天提供商以限制可用的模型和凭据。",
	"settings.chatHub.providers.modal.edit.title": "配置 {provider}",
	"settings.chatHub.providers.modal.edit.cancel": "取消",
	"settings.chatHub.providers.modal.edit.confirm": "确认",
	"settings.chatHub.providers.modal.edit.enabled.label": "启用 {provider}",
	"settings.chatHub.providers.modal.edit.enabled.tooltip": "禁用时，该提供商的模型将无法在聊天中使用。",
	"settings.chatHub.providers.modal.edit.credential.label": "默认凭据",
	"settings.chatHub.providers.modal.edit.credential.clearButton": "清除选中项",
	"settings.chatHub.providers.modal.edit.limitModels.label": "限制模型",
	"settings.chatHub.providers.modal.edit.limitModels.tooltip": "启用时，只有选中的模型可用于聊天。",
	"settings.chatHub.providers.modal.edit.allowedModels.label": "模型",
	"settings.chatHub.providers.modal.edit.errorFetchingModels": "获取聊天模型时出错",
	"settings.chatHub.providers.modal.edit.models.placeholder": "选择一个模型",
	"settings.chatHub.providers.modal.edit.models.create": "添加模型 \"{filter}\"",
	"settings.chatHub.providers.table.models.disabled": "已禁用",
	"settings.chatHub.providers.table.models.allModels": "所有模型",
	"settings.chatHub.providers.table.models.noModels": "没有模型",
	"settings.chatHub.providers.table.models.more": "还有 {count} 个",
	"settings.goBack": "返回",
	"settings.personal": "个人",
	"settings.personal.basicInformation": "基本信息",
	"settings.personal.personalSettings": "个人设置",
	"settings.personal.personalSettingsUpdated": "个人详细信息已更新",
	"settings.personal.personalSettingsUpdatedError": "更新您的详细信息时出现问题",
	"settings.personal.role.tooltip.default": "新用户默认角色",
	"settings.personal.role.tooltip.member": "创建和管理您自己的工作流和凭证",
	"settings.personal.role.tooltip.chatUser": "仅可使用聊天功能",
	"settings.personal.role.tooltip.admin": "完全访问权限，可管理工作流、标签、凭证、项目、用户等。",
	"settings.personal.role.tooltip.owner": "管理一切{cloudAccess}",
	"settings.personal.role.tooltip.cloud": "并访问云端仪表盘",
	"settings.personal.save": "保存",
	"settings.personal.security": "安全",
	"settings.signup.signUpInviterInfo": "{firstName} {lastName} 邀请您使用 n8n",
	"settings.users": "用户",
	"settings.users.count": "{count} 位用户 | {count} 位用户",
	"settings.users.search.placeholder": "按姓名或邮箱搜索",
	"settings.users.confirmDataHandlingAfterDeletion": "我们应该如何处理他们的数据？",
	"settings.users.confirmUserDeletion": "是否确定要删除此受邀请用户？",
	"settings.users.delete": "删除",
	"settings.users.deleteConfirmationMessage": "键入“删除所有数据”进行确认",
	"settings.users.deleteConfirmationText": "删除所有数据",
	"settings.users.deleteUser": "删除 {user}",
	"settings.users.actions.delete": "删除用户",
	"settings.users.actions.reinvite": "重新发送邀请",
	"settings.users.actions.copyInviteLink": "复制邀请链接",
	"settings.users.actions.generateInviteLink": "生成邀请链接",
	"settings.users.actions.copyPasswordResetLink": "复制密码重置链接",
	"settings.users.actions.allowSSOManualLogin": "允许手动登录",
	"settings.users.actions.disallowSSOManualLogin": "禁止手动登录",
	"settings.users.deleteWorkflowsAndCredentials": "删除他们的工作流和凭证",
	"settings.users.emailInvitesSent": "已向 {emails} 发送邀请电子邮件",
	"settings.users.emailInvitesSentError": "无法邀请 {emails}",
	"settings.users.emailSentTo": "已向 {email} 发送电子邮件",
	"settings.users.invalidEmailError": "{email} 不是有效的电子邮件",
	"settings.users.inviteLink.copy": "复制邀请链接",
	"settings.users.inviteLink.error": "无法检索邀请链接",
	"settings.users.invite": "邀请",
	"settings.users.invite.tooltip": "已激活 SAML 登录。用户应在 IdP 中创建，并在首次登录时在 n8n 中配置。",
	"settings.users.inviteNewUsers": "邀请新用户",
	"settings.users.copyInviteUrls": "现在，您可以将邀请链接直接发送给您的用户",
	"settings.users.inviteResent": "已重新发送邀请",
	"settings.users.inviteUser": "邀请用户",
	"settings.users.inviteUser.inviteUrl": "创建邀请链接",
	"settings.users.inviteXUser": "邀请 {count} 位用户",
	"settings.users.inviteXUser.inviteUrl": "创建 {count} 个邀请链接",
	"settings.users.inviteUrlCreated": "邀请链接已复制到剪贴板",
	"settings.users.inviteUrlCreated.message": "将邀请链接发送给您的受邀者以进行激活",
	"settings.users.inviteLinkError": "无法生成邀请链接",
	"settings.users.passwordResetUrlCreated": "密码重置链接已复制到剪贴板",
	"settings.users.passwordResetUrlCreated.message": "将重置链接发送给您的用户以供他们重置密码",
	"settings.users.passwordResetLinkError": "无法获取密码重置链接",
	"settings.users.allowSSOManualLogin": "允许手动登录",
	"settings.users.allowSSOManualLogin.message": "用户现在可以手动登录和通过 SSO 登录",
	"settings.users.disallowSSOManualLogin": "禁止手动登录",
	"settings.users.disallowSSOManualLogin.message": "用户现在必须仅通过 SSO 登录",
	"settings.users.multipleInviteUrlsCreated": "已创建邀请链接",
	"settings.users.multipleInviteUrlsCreated.message": "将邀请链接发送给您的受邀者以进行激活",
	"settings.users.newEmailsToInvite": "要邀请的新用户电子邮件地址",
	"settings.users.noUsersToInvite": "没有要邀请的用户",
	"settings.users.setupMyAccount": "设置我的所有者帐户",
	"settings.users.setupToInviteUsers": "要邀请用户，请设置您自己的帐户",
	"settings.users.setupToInviteUsersInfo": "除非您升级，否则受邀用户将无法看到其他用户的工作流和凭证。<a href=\"https://docs.n8n.io/user-management/\" target=\"_blank\">更多信息</a><br /><br />",
	"settings.users.smtpToAddUsersWarning": "添加用户之前设置 SMTP（以便 n8n 可以向他们发送邀请电子邮件）。<a target=\"_blank\" href=\"https://docs.n8n.io/hosting/authentication/user-management-self-hosted/\">说明</a>",
	"settings.users.transferWorkflowsAndCredentials": "将他们的工作流和凭证转移给其他用户或项目",
	"settings.users.transferWorkflowsAndCredentials.user": "要转移到的用户或项目",
	"settings.users.transferWorkflowsAndCredentials.placeholder": "选择项目或用户",
	"settings.users.transferredToUser": "数据已转移到 {projectName}",
	"settings.users.userNotFound": "用户未找到",
	"settings.users.userDeleted": "已删除用户",
	"settings.users.userDeletedError": "删除用户时出现问题",
	"settings.users.userInvited": "已邀请用户",
	"settings.users.userInvitedError": "无法邀请用户",
	"settings.users.userReinviteError": "无法重新邀请用户",
	"settings.users.userToTransferTo": "要转移到的用户",
	"settings.users.usersEmailedError": "无法发送邀请电子邮件",
	"settings.users.usersInvited": "已邀请用户",
	"settings.users.usersInvitedError": "无法邀请用户",
	"settings.users.advancedPermissions.warning": "{link} 以解锁创建其他管理员用户的能力",
	"settings.users.userRoleUpdated": "已保存更改",
	"settings.users.userRoleUpdated.message": "{user} 已成功更新为 {role}",
	"settings.users.userRoleUpdatedError": "无法更新角色",
	"settings.users.userRoleUpdated.confirm.message": "您确定要将用户更改为 {role} 吗？这将撤销他们当前的项目角色。",
	"settings.users.userRoleUpdated.confirm.title": "更新 {user} 的角色？",
	"settings.users.userRoleUpdated.confirm.button": "是的，更新并撤销。",
	"settings.users.userRoleUpdated.cancel.button": "取消",
	"settings.users.table.update.error": "无法更新表格",
	"settings.users.table.header.user": "用户",
	"settings.users.table.header.accountType": "账户类型",
	"settings.users.table.header.2fa": "双因素身份验证",
	"settings.users.table.header.lastActive": "上次活动",
	"settings.users.table.row.allProjects": "所有项目",
	"settings.users.table.row.personalProject": "个人项目",
	"settings.users.table.row.deleteUser": "移除用户",
	"settings.users.table.row.role.description.admin": "完全访问所有工作流、凭证、项目、用户等",
	"settings.users.table.row.role.description.member": "管理和创建自己的工作流和凭据",
	"settings.users.table.row.role.description.chatUser": "可以使用聊天，但不能创建或查看工作流，也不能访问其他功能。",
	"settings.users.table.row.2fa.enabled": "已启用",
	"settings.users.table.row.2fa.disabled": "已禁用",
	"settings.projectRoles": "项目角色",
	"settings.api": "API",
	"settings.api.scopes.upgrade": "{link} 以解锁修改API密钥权限范围的功能",
	"settings.n8napi": "n8n API",
	"settings.log-streaming": "日志流",
	"settings.log-streaming.heading": "日志流",
	"settings.log-streaming.add": "添加新目标",
	"settings.log-streaming.actionBox.title": "在企业版计划中可用",
	"settings.log-streaming.actionBox.description": "日志流作为一项付费功能提供。了解有关它的更多信息。",
	"settings.log-streaming.actionBox.button": "查看计划",
	"settings.log-streaming.infoText": "将日志发送到您选择的外部端点。您还可以使用环境变量将日志写入文件或控制台。 <a href=\"https://docs.n8n.io/log-streaming/\" target=\"_blank\">更多信息</a>",
	"settings.log-streaming.addFirstTitle": "设置目标以开始使用",
	"settings.log-streaming.addFirst": "通过点击按钮并选择目标类型来添加您的第一个目标。",
	"settings.log-streaming.saving": "正在保存",
	"settings.log-streaming.delete": "删除",
	"settings.log-streaming.continue": "继续",
	"settings.log-streaming.selecttype": "选择要创建的类型",
	"settings.log-streaming.selecttypehint": "选择新日志流目标的类型",
	"settings.log-streaming.tab.settings": "设置",
	"settings.log-streaming.tab.events": "事件",
	"settings.log-streaming.tab.events.title": "选择要订阅的组或单个事件：",
	"settings.log-streaming.tab.events.anonymize": "匿名化敏感数据",
	"settings.log-streaming.tab.events.anonymize.info": "包含姓名或电子邮件等个人信息的字段将被匿名化",
	"settings.log-streaming.eventGroup.n8n.ai": "AI节点日志",
	"settings.log-streaming.eventGroup.n8n.audit": "审计事件",
	"settings.log-streaming.eventGroup.n8n.audit.info": "当用户详细信息或其他审计数据更改时，将发送事件",
	"settings.log-streaming.eventGroup.n8n.workflow": "工作流事件",
	"settings.log-streaming.eventGroup.n8n.workflow.info": "将发送工作流执行事件",
	"settings.log-streaming.eventGroup.n8n.user": "用户",
	"settings.log-streaming.eventGroup.n8n.node": "节点执行",
	"settings.log-streaming.eventGroup.n8n.node.info": "每次执行节点时都会发送逐步执行事件。请注意，这可能导致高频率的日志事件，可能不适合一般使用。",
	"settings.log-streaming.eventGroup.n8n.runner": "运行器任务",
	"settings.log-streaming.eventGroup.n8n.runner.info": "当从任务运行器请求执行代码节点时，以及从运行器收到带有结果的响应时，将发送一个事件。",
	"settings.log-streaming.eventGroup.n8n.queue": "队列事件",
	"settings.log-streaming.eventGroup.n8n.queue.info": "当队列相关事件发生时发送事件，例如入队、出队、完成、失败或停滞。",
	"settings.log-streaming.eventGroup.n8n.worker": "工作进程",
	"settings.log-streaming.$$AbstractMessageEventBusDestination": "通用",
	"settings.log-streaming.$$MessageEventBusDestinationWebhook": "Webhook",
	"settings.log-streaming.$$MessageEventBusDestinationSentry": "Sentry",
	"settings.log-streaming.$$MessageEventBusDestinationRedis": "Redis",
	"settings.log-streaming.$$MessageEventBusDestinationSyslog": "Syslog",
	"settings.log-streaming.destinationDelete.cancelButtonText": "",
	"settings.log-streaming.destinationDelete.confirmButtonText": "是，删除",
	"settings.log-streaming.destinationDelete.headline": "删除目标？",
	"settings.log-streaming.destinationDelete.message": "您确定要删除“{destinationName}”吗？",
	"settings.log-streaming.addDestination": "添加新目标",
	"settings.log-streaming.destinations": "日志目标",
	"settings.api.trial.upgradePlan.title": "升级以使用 API",
	"settings.api.trial.upgradePlan.description": "为了防止滥用，我们在您的试用期间限制对您工作区的 API 访问。如果这妨碍了您对 n8n 的评估，请联系 <a href=\"mailto:support{'@'}n8n.io\">support{'@'}n8n.io</a>",
	"settings.api.trial.upgradePlan.cta": "升级计划",
	"settings.api.create.description": "使用 <a href=\"https://docs.n8n.io/api\" target=\"_blank\">n8n API</a> 以编程方式控制 n8n",
	"settings.api.create.button": "创建 API 密钥",
	"settings.api.create.button.loading": "正在创建 API 密钥...",
	"settings.api.create.error": "创建 API 密钥失败。",
	"settings.api.edit.error": "API密钥更新失败。",
	"settings.api.delete.title": "删除此 API 密钥？",
	"settings.api.delete.description": "任何使用此 API 密钥的应用程序将不再有权访问 n8n。此操作无法撤消。",
	"settings.api.delete.button": "永久删除",
	"settings.api.delete.error": "删除 API 密钥失败。",
	"settings.api.delete.toast": "API 密钥已删除",
	"settings.api.create.toast": "API密钥已创建",
	"settings.api.update.toast": "API密钥已更新",
	"settings.api.creationTime": "API密钥创建于{time}",
	"settings.api.expirationTime": "于 {time} 过期",
	"settings.api.expired": "该API密钥已过期",
	"settings.api.neverExpires": "永不过期",
	"settings.api.view.copy.toast": "API 密钥已复制到剪贴板",
	"settings.api.view.apiPlayground": "API 游乐场",
	"settings.api.view.info": "使用您的 API 密钥以编程方式使用{apiAction}控制 n8n。但如果您只想触发工作流，请考虑改用{webhookAction}。",
	"settings.api.view.copy": "请务必立即复制您的 API 密钥，因为您将无法再次看到它。",
	"settings.api.view.info.api": "n8n API",
	"settings.api.view.info.webhook": "webhook 节点",
	"settings.api.view.tryapi": "使用以下方式试用它",
	"settings.api.view.more-details": "您可以在以下位置找到更多详细信息",
	"settings.api.view.external-docs": "API 文档",
	"settings.api.view.error": "无法检查是否已存在 API 密钥。",
	"settings.api.view.modal.form.label": "标签",
	"settings.api.view.modal.form.expiration": "到期",
	"settings.api.view.modal.form.expirationText": "API密钥将于{expirationDate}过期",
	"settings.api.view.modal.form.label.placeholder": "例如 内部项目",
	"settings.api.view.modal.form.expiration.custom": "自定义",
	"settings.api.view.modal.form.expiration.days": "{numberOfDays} 天",
	"settings.api.view.modal.form.expiration.none": "永久有效",
	"settings.api.view.modal.title.created": "API密钥已创建",
	"settings.api.view.modal.title.create": "创建API密钥",
	"settings.api.view.modal.title.edit": "编辑API密钥",
	"settings.api.view.modal.done.button": "完成",
	"settings.api.view.modal.save.button": "保存",
	"settings.api.scopes.placeholder": "选择",
	"settings.api.scopes.selectAll": "全选",
	"settings.api.scopes.label": "范围",
	"settings.version": "版本",
	"settings.usageAndPlan.title": "使用情况和计划",
	"settings.usageAndPlan.description": "您正在使用{name} {type}",
	"settings.usageAndPlan.plan": "计划",
	"settings.usageAndPlan.callOut": "{link}免费（永久）解锁选定的付费功能",
	"settings.usageAndPlan.callOut.link": "解锁",
	"settings.usageAndPlan.edition": "版本",
	"settings.usageAndPlan.error": "@:_reusableBaseText.error",
	"settings.usageAndPlan.activeWorkflows": "活动工作流",
	"settings.usageAndPlan.activeWorkflows.unlimited": "@:_reusableBaseText.unlimited",
	"settings.usageAndPlan.activeWorkflows.count": "{count} / {limit}",
	"settings.usageAndPlan.activeWorkflows.hint": "具有多个触发器的活动工作流会计数多次",
	"settings.usageAndPlan.button.activation": "输入激活密钥",
	"settings.usageAndPlan.button.plans": "查看计划",
	"settings.usageAndPlan.button.manage": "管理计划",
	"settings.usageAndPlan.dialog.activation.title": "输入激活密钥",
	"settings.usageAndPlan.dialog.activation.label": "激活密钥",
	"settings.usageAndPlan.dialog.activation.activate": "@:_reusableBaseText.activate",
	"settings.usageAndPlan.dialog.activation.cancel": "@:_reusableBaseText.cancel",
	"settings.usageAndPlan.license.activation.error.title": "激活失败",
	"settings.usageAndPlan.license.activation.success.title": "许可证已激活",
	"settings.usageAndPlan.license.activation.success.message": "您的 {name} {type} 已成功激活。",
	"settings.usageAndPlan.license.activation.success.message.eula": "您已接受最终用户许可协议并成功激活您的 {name} 套餐。",
	"settings.usageAndPlan.dialog.eula.title": "需要确认",
	"settings.usageAndPlan.dialog.eula.description": "要激活您的许可证，您必须查看并接受我们的最终用户许可协议（EULA）。请确认您已阅读并同意条款以继续。",
	"settings.usageAndPlan.dialog.eula.audit.notice": "您的同意将被记录以供审计。",
	"settings.usageAndPlan.dialog.eula.checkbox.label": "我已阅读并接受",
	"settings.usageAndPlan.dialog.eula.link.text": "最终用户许可协议",
	"settings.usageAndPlan.dialog.eula.button.accept": "接受并激活",
	"settings.usageAndPlan.dialog.eula.button.cancel": "取消",
	"settings.usageAndPlan.license.communityRegistered.tooltip": "您已注册您的电子邮件，以解锁您的社区计划中的其他功能",
	"settings.provisioning.title": "供应配置",
	"settings.provisioning.description": "配置用户供应设置并管理自动化用户生命周期管理。",
	"settings.provisioning.loadError": "加载配置文件失败",
	"settings.provisioning.saveError": "保存配置文件失败",
	"settings.provisioning.saveSuccess": "配置已保存",
	"settings.provisioning.saveSuccessMessage": "供应配置已成功更新。",
	"settings.provisioning.save": "保存配置",
	"settings.provisioning.scopesName": "范围名称",
	"settings.provisioning.scopesName.placeholder": "请输入作用域名称",
	"settings.provisioning.scopesName.help": "为配置提供的范围名称，这是在Oauth流程中将被请求的范围。",
	"settings.provisioning.scopesInstanceRoleClaimName": "实例角色声明名称",
	"settings.provisioning.scopesInstanceRoleClaimName.placeholder": "输入实例角色声明名称",
	"settings.provisioning.scopesInstanceRoleClaimName.help": "用于从Oauth提供实例角色的声明名称。对于SAML / LDAP，这将是检查的属性名称。",
	"settings.provisioning.scopesProjectsRolesClaimName": "项目角色声明名称",
	"settings.provisioning.scopesProjectsRolesClaimName.placeholder": "输入项目角色声明名称",
	"settings.provisioning.scopesProjectsRolesClaimName.help": "用于从OAuth提供项目及其角色的声明名称。对于SAML / LDAP，这将是检查的属性名称。",
	"settings.provisioning.toggle": "提供实例和项目角色",
	"settings.provisioning.toggle.help": "项目访问只能在外部提供者上定义。任何在 n8n 中配置但未在提供者上配置的现有项目访问将在用户登录后被移除。",
	"settings.provisioningConfirmDialog.enable.title": "启用用户角色配置",
	"settings.provisioningConfirmDialog.disable.title": "仅在 n8n 中管理用户角色配置",
	"settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partOne": "你的单点登录提供商将控制 n8n 中的所有用户角色。",
	"settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partOne.withProjectRoles": "您的 SSO 提供商将控制 n8n 中的所有用户和项目角色。",
	"settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partTwo": "未由您的 SSO 提供程序分配的角色将默认为 global:member。",
	"settings.provisioningConfirmDialog.breakingChangeDescription.secondLine": "<b>启用前：</b> 下载并查看下面的当前访问设置，以确保您的 SSO 提供商配置正确。",
	"settings.provisioningConfirmDialog.disable.description": "你正在把实例角色管理从 SSO 切换回 n8n。",
	"settings.provisioningConfirmDialog.enable.checkbox": "我已下载并审查了 CSV 导出。我的 SSO 提供程序已正确配置，可以在此 n8n 实例上控制用户角色。",
	"settings.provisioningConfirmDialog.disable.checkbox": "我确认我不再从我的 SSO 提供者为用户分配角色。",
	"settings.provisioningConfirmDialog.link.docs": "文档链接",
	"settings.provisioningConfirmDialog.button.enable.confirm": "保存并启用",
	"settings.provisioningConfirmDialog.button.disable.confirm": "保存",
	"settings.provisioningConfirmDialog.button.cancel": "取消",
	"settings.provisioningConfirmDialog.button.generateCsvExport": "生成访问设置的 CSV 导出",
	"settings.provisioningConfirmDialog.button.downloadProjectRolesCsv": "现有项目访问设置 CSV",
	"settings.provisioningConfirmDialog.button.downloadInstanceRolesCsv": "现有实例角色设置 CSV",
	"settings.provisioningInstanceRolesHandledBySsoProvider.description": "用户管理和实例角色由您的 SSO 提供商控制。请联系您的 n8n 实例所有者或管理员以进行更改。",
	"settings.provisioningProjectRolesHandledBySsoProvider.description": "用户管理和项目角色由您的 SSO 提供商控制。要进行更改，请联系您的 n8n 实例所有者或管理员。",
	"settings.externalSecrets.title": "外部密钥",
	"settings.externalSecrets.info": "连接外部密钥工具，用于跨环境集中凭据管理，并增强系统安全性。",
	"settings.externalSecrets.info.link": "更多信息",
	"settings.externalSecrets.actionBox.title": "在企业版计划中可用",
	"settings.externalSecrets.actionBox.description": "连接外部密钥工具，用于跨实例集中凭据管理。 {link}",
	"settings.externalSecrets.actionBox.description.link": "更多信息",
	"settings.externalSecrets.actionBox.buttonText": "查看计划",
	"settings.externalSecrets.card.setUp": "设置",
	"settings.externalSecrets.card.deprecated": "已弃用",
	"settings.externalSecrets.card.secretCount": "{count} 秘密",
	"settings.externalSecrets.card.secretsCount": "{count} 个密钥",
	"settings.externalSecrets.card.connectedAt": "已连接 {date}",
	"settings.externalSecrets.card.connected": "已启用",
	"settings.externalSecrets.card.disconnected": "已禁用",
	"settings.externalSecrets.card.actionDropdown.setup": "编辑连接",
	"settings.externalSecrets.card.actionDropdown.reload": "重新加载密钥",
	"settings.externalSecrets.card.reload.success.title": "重新加载成功",
	"settings.externalSecrets.card.reload.success.description": "所有密钥已从 {provider} 重新加载。",
	"settings.externalSecrets.provider.title": "提交并推送更改",
	"settings.externalSecrets.provider.description": "选择要在提交中暂存的文件并添加提交消息。",
	"settings.externalSecrets.provider.buttons.cancel": "取消",
	"settings.externalSecrets.provider.buttons.save": "保存",
	"settings.externalSecrets.provider.buttons.saving": "正在保存",
	"settings.externalSecrets.card.connectedSwitch.title": "启用 {provider}",
	"settings.externalSecrets.provider.save.success.title": "提供商设置已成功保存",
	"settings.externalSecrets.provider.connected.success.title": "提供商已成功连接",
	"settings.externalSecrets.provider.disconnected.success.title": "提供商已成功断开连接",
	"settings.externalSecrets.provider.testConnection.success.connected": "服务已启用，{count} 个密钥可在 {provider} 上使用。",
	"settings.externalSecrets.provider.testConnection.success.connected.usage": "通过将参数设置为表达式并输入以下内容，在凭据中使用密钥：{code}。",
	"settings.externalSecrets.provider.testConnection.success.connected.docs": "更多信息",
	"settings.externalSecrets.provider.testConnection.success": "与 {provider} 的连接已成功执行。启用服务以在凭据中使用密钥。",
	"settings.externalSecrets.provider.testConnection.error.connected": "连接不成功，请检查您的 {provider} 设置",
	"settings.externalSecrets.provider.testConnection.error": "连接不成功，请检查您的 {provider} 设置",
	"settings.externalSecrets.provider.closeWithoutSaving.title": "关闭而不保存？",
	"settings.externalSecrets.provider.closeWithoutSaving.description": "您确定要放弃对 {provider} 设置所做的更改吗？",
	"settings.externalSecrets.provider.closeWithoutSaving.cancel": "关闭",
	"settings.externalSecrets.provider.closeWithoutSaving.confirm": "继续编辑",
	"settings.externalSecrets.docs": "https://docs.n8n.io/external-secrets/",
	"settings.externalSecrets.docs.use": "https://docs.n8n.io/external-secrets/#use-secrets-in-n8n-credentials",
	"settings.secretsProviderConnections.title": "外部机密",
	"settings.secretsProviderConnections.emptyState.heading": "添加外部机密存储",
	"settings.secretsProviderConnections.emptyState.description": "通过添加外部机密存储，在多个环境中管理凭据。为提高安全性，将敏感凭据信息保存在你的密钥库中。",
	"settings.secretsProviderConnections.buttons.addSecretsStore": "添加秘密存储",
	"settings.secretsProviderConnections.description": "通过连接外部机密存储来跨多个环境管理凭据。为提高安全性，将敏感凭据信息保存在你的保管库中。您可以在以下内容中了解更多信息。",
	"settings.secretsProviderConnections.card.createdAt": "创建于 {date}",
	"settings.secretsProviderConnections.modal.items.connection": "连接",
	"settings.secretsProviderConnections.modal.connectionName": "密钥存储名称",
	"settings.secretsProviderConnections.modal.providerType": "外部密钥提供者",
	"settings.secretsProviderConnections.modal.providerType.placeholder": "外部秘密提供者",
	"settings.secretsProviderConnections.modal.saving": "正在保存...",
	"settings.secretsProviderConnections.modal.unsavedChanges.title": "不保存就关闭？",
	"settings.secretsProviderConnections.modal.unsavedChanges.text": "您有未保存的更改。您确定要关闭吗？",
	"settings.secretsProviderConnections.modal.testConnection.success.serviceEnabled": "服务已启用，{count} 个密钥在 {providerName} 上可用。",
	"settings.secretsProviderConnections.modal.testConnection.success.reference": "在凭据中通过表达式引用秘密：",
	"settings.secretsProviderConnections.modal.testConnection.error": "连接失败，请检查您的 {providerName} 设置",
	"settings.secretsProviderConnections.modal.validation.connectionName.required": "机密存储名称是必填项。请输入一个唯一的机密存储名称。",
	"settings.secretsProviderConnections.modal.validation.connectionName.format": "机密存储名称只能包含小写字母、数字和连字符（例如 \"aws-production\"）",
	"settings.secretsProviderConnections.modal.connectionName.hint": "请输入一个唯一的秘密存储名称。以后将无法更改。",
	"settings.secretsProviderConnections.modal.connectionName.unique": "具有此名称的机密存储已存在。请输入一个唯一的机密存储名称。",
	"settings.secretsProviderConnections.state.disconnected": "已断开连接",
	"settings.sourceControl.title": "环境",
	"settings.sourceControl.actionBox.title": "在企业版计划中可用",
	"settings.sourceControl.actionBox.description": "使用多个实例用于不同的环境（开发、生产等），通过 Git 存储库在它们之间进行部署。",
	"settings.sourceControl.actionBox.description.link": "更多信息",
	"settings.sourceControl.actionBox.buttonText": "查看计划",
	"settings.sourceControl.connection.error": "源代码控制连接失败",
	"settings.sourceControl.connection.error.message": "我们找不到连接到此实例的存储库。请仔细检查此实例上的{link}。",
	"settings.sourceControl.connection.error.link": "Git 配置",
	"settings.sourceControl.description": "使用多个实例用于不同的环境（开发、生产等），通过 Git 存储库在它们之间进行部署。{link}",
	"settings.sourceControl.description.link": "更多信息",
	"settings.sourceControl.gitConfig": "Git 配置",
	"settings.sourceControl.connectionType": "连接类型",
	"settings.sourceControl.enterValidHttpsUrl": "请输入有效的 HTTPS URL",
	"settings.sourceControl.repoUrl": "Git 存储库 URL (SSH)",
	"settings.sourceControl.repoUrlPlaceholder": "例如：git{'@'}github.com:my-team/my-repository",
	"settings.sourceControl.repoUrlInvalid": "Git 存储库 URL 无效",
	"settings.sourceControl.authorName": "提交作者姓名",
	"settings.sourceControl.authorEmail": "提交作者电子邮件",
	"settings.sourceControl.authorEmailInvalid": "提供的电子邮件不正确",
	"settings.sourceControl.sshKey": "SSH 密钥",
	"settings.sourceControl.sshKeyDescription": "将 SSH 密钥粘贴到您的 git 存储库/帐户设置中。{link}",
	"settings.sourceControl.sshKeyDescriptionLink": "更多信息",
	"settings.sourceControl.refreshSshKey": "刷新密钥",
	"settings.sourceControl.refreshSshKey.successful.title": "SSH 密钥已成功刷新",
	"settings.sourceControl.refreshSshKey.error.title": "SSH 密钥刷新失败",
	"settings.sourceControl.button.continue": "继续",
	"settings.sourceControl.button.connect": "连接",
	"settings.sourceControl.button.disconnect": "断开 Git 连接",
	"settings.sourceControl.button.save": "保存设置",
	"settings.sourceControl.instanceSettings": "实例设置",
	"settings.sourceControl.branches": "连接到此 n8n 实例的分支",
	"settings.sourceControl.protected": "{bold}：防止编辑工作流（建议用于生产环境）。",
	"settings.sourceControl.protected.bold": "受保护的实例",
	"settings.sourceControl.color": "颜色",
	"settings.sourceControl.switchBranch.title": "切换到 {branch} 分支",
	"settings.sourceControl.switchBranch.description": "请确认您要将当前 n8n 实例切换到分支：{branch}",
	"settings.sourceControl.sync.prompt.title": "同步 {branch} 分支中的更改",
	"settings.sourceControl.sync.prompt.description": "您 n8n 实例上的所有更改都将与远程 Git 存储库上的 {branch} 分支同步。将执行以下 Git 序列：pull > commit > push。",
	"settings.sourceControl.sync.prompt.placeholder": "提交消息",
	"settings.sourceControl.sync.prompt.error": "请输入提交消息",
	"settings.sourceControl.button.push": "推送",
	"settings.sourceControl.button.pull": "拉取",
	"settings.sourceControl.button.pull.forbidden": "只有实例所有者或实例管理员才能拉取更改。",
	"settings.sourceControl.button.push.forbidden": "你无法从受保护的实例推送更改。",
	"settings.sourceControl.modals.push.title": "提交并推送更改",
	"settings.sourceControl.modals.push.description": "将提交以下内容：",
	"settings.sourceControl.modals.push.description.learnMore": "更多信息",
	"settings.sourceControl.modals.push.filesToCommit": "要提交的文件",
	"settings.sourceControl.modals.push.filter": "已应用筛选器。显示 {count} 个 {entity}。",
	"settings.sourceControl.modals.push.workflowsToCommit": "选择工作流",
	"settings.sourceControl.modals.push.everythingIsUpToDate": "一切都是最新的",
	"settings.sourceControl.modals.push.noWorkflowChanges": "没有工作流更改，但将提交以下内容：{link}",
	"settings.sourceControl.modals.push.noWorkflowChanges.moreInfo": "更多信息",
	"settings.sourceControl.modals.push.commitMessage": "提交消息",
	"settings.sourceControl.modals.push.commitMessage.placeholder": "例如：我的提交",
	"settings.sourceControl.modals.push.buttons.cancel": "取消",
	"settings.sourceControl.modals.push.buttons.save": "提交并推送",
	"settings.sourceControl.modals.push.success.title": "推送成功",
	"settings.sourceControl.modals.push.success.description": "已提交并推送到您的远程存储库",
	"settings.sourceControl.modals.push.projectAdmin.callout": "如果你想把工作流从个人空间推送，请先把它们移动到一个项目中。",
	"settings.sourceControl.status.modified": "已修改",
	"settings.sourceControl.status.deleted": "已删除",
	"settings.sourceControl.status.created": "新建",
	"settings.sourceControl.status.renamed": "已重命名",
	"settings.sourceControl.pull.oneLastStep.title": "最后一步",
	"settings.sourceControl.pull.oneLastStep.description": "您有新的凭据/变量。填写它们以确保您的工作流正常运行",
	"settings.sourceControl.pull.success.title": "拉取成功",
	"settings.sourceControl.pull.upToDate.title": "最新",
	"settings.sourceControl.pull.upToDate.description": "没有要从 Git 拉取的工作流更改",
	"settings.sourceControl.pull.upToDate.variables.title": "完成新变量的设置，以便在工作流中使用",
	"settings.sourceControl.pull.upToDate.variables.description": "审查变量",
	"settings.sourceControl.pull.upToDate.credentials.title": "完成新凭证的设置，以便在流程中使用",
	"settings.sourceControl.pull.upToDate.credentials.description": "审核凭证",
	"settings.sourceControl.modals.pull.title": "拉取更改",
	"settings.sourceControl.modals.pull.description": "这些工作流将被更新，并且对它们的任何本地更改都将被覆盖。要保留本地版本，请在拉取之前推送它。",
	"settings.sourceControl.modals.pull.description.learnMore": "更多信息",
	"settings.sourceControl.modals.pull.autoPublish.title": "自动发布已拉取的版本",
	"settings.sourceControl.modals.pull.autoPublish.options.off": "关闭",
	"settings.sourceControl.modals.pull.autoPublish.options.off.description": "不要尝试发布任何工作流。",
	"settings.sourceControl.modals.pull.autoPublish.options.published": "如果工作流已经发布",
	"settings.sourceControl.modals.pull.autoPublish.options.published.description": "在此实例中已发布的工作流",
	"settings.sourceControl.modals.pull.autoPublish.options.on": "开启",
	"settings.sourceControl.modals.pull.autoPublish.options.on.description": "尝试发布所有工作流",
	"settings.sourceControl.modals.pull.autoPublishing": "自动发布",
	"settings.sourceControl.modals.pull.willBeArchived": "归档",
	"settings.sourceControl.modals.pull.buttons.cancel": "@:_reusableBaseText.cancel",
	"settings.sourceControl.modals.pull.buttons.save": "拉取并覆盖",
	"settings.sourceControl.modals.pull.buttons.pull": "拉取",
	"settings.sourceControl.modals.pullResult.title": "自动发布结果",
	"settings.sourceControl.modals.pullResult.tabs.failed": "发布失败",
	"settings.sourceControl.modals.pullResult.tabs.published": "已发布",
	"settings.sourceControl.modals.pullResult.noWorkflows": "没有工作流。",
	"settings.sourceControl.modals.pullResult.itemCount": "{count} 项 | {count} 项",
	"settings.sourceControl.modals.pullResult.tableHeader.title": "标题",
	"settings.sourceControl.modals.pullResult.buttons.close": "关闭",
	"settings.sourceControl.modals.disconnect.title": "断开 Git 存储库",
	"settings.sourceControl.modals.disconnect.message": "请确认您要断开此 n8n 实例与 Git 存储库的连接",
	"settings.sourceControl.modals.disconnect.confirm": "断开 Git 连接",
	"settings.sourceControl.modals.disconnect.cancel": "@:_reusableBaseText.cancel",
	"settings.sourceControl.modals.refreshSshKey.title": "刷新 SSH 密钥",
	"settings.sourceControl.modals.refreshSshKey.message": "这将删除当前的 SSH 密钥并创建一个新的密钥。您将无法再使用当前密钥进行身份验证。",
	"settings.sourceControl.modals.refreshSshKey.cancel": "取消",
	"settings.sourceControl.modals.refreshSshKey.confirm": "刷新密钥",
	"settings.sourceControl.loading.connecting": "正在连接",
	"settings.sourceControl.toast.connected.title": "Git 存储库已连接",
	"settings.sourceControl.toast.connected.message": "选择分支以完成配置",
	"settings.sourceControl.toast.connected.error": "连接到 Git 时出错",
	"settings.sourceControl.toast.disconnected.title": "Git 存储库已断开连接",
	"settings.sourceControl.toast.disconnected.message": "您无法再将您的实例与远程存储库同步",
	"settings.sourceControl.toast.disconnected.error": "断开与 Git 连接时出错",
	"settings.sourceControl.loading.pull": "正在从远程拉取",
	"settings.sourceControl.loading.checkingForChanges": "正在检查更改",
	"settings.sourceControl.loading.push": "正在推送到远程",
	"settings.sourceControl.lastUpdated": "上次更新时间：{date}，{time}",
	"settings.sourceControl.saved.title": "设置已成功保存",
	"settings.sourceControl.refreshBranches.tooltip": "重新加载分支列表",
	"settings.sourceControl.refreshBranches.success": "分支已成功刷新",
	"settings.sourceControl.refreshBranches.error": "刷新分支时出错",
	"settings.sourceControl.docs.url": "https://docs.n8n.io/source-control-environments/",
	"settings.sourceControl.docs.setup.url": "https://docs.n8n.io/source-control-environments/setup/",
	"settings.sourceControl.docs.setup.ssh.url": "https://docs.n8n.io/source-control-environments/setup/#step-3-set-up-a-deploy-key",
	"settings.sourceControl.docs.using.url": "https://docs.n8n.io/source-control-environments/using/",
	"settings.sourceControl.docs.using.pushPull.url": "https://docs.n8n.io/source-control-environments/using/push-pull",
	"settings.sourceControl.error.not.connected.title": "尚未启用环境",
	"settings.sourceControl.error.not.connected.message": "请转到 <a href='/settings/environments'>环境设置</a> 以首先连接 Git 存储库以激活此功能。",
	"settings.sourceControl.saved.error": "设置分支时出错",
	"settings.sourceControl.sshRepoUrl": "SSH 仓库 URL",
	"settings.sourceControl.httpsRepoUrl": "HTTPS 仓库 URL",
	"settings.sourceControl.sshRepoUrlPlaceholder": "git{'@'}github.com:user/repository.git",
	"settings.sourceControl.httpsRepoUrlPlaceholder": "https://github.com/user/repository.git",
	"settings.sourceControl.sshFormatNotice": "使用 SSH 格式：git{'@'}github.com:user/repository.git",
	"settings.sourceControl.httpsFormatNotice": "使用 HTTPS 格式： https://github.com/user/repository.git",
	"settings.sourceControl.httpsUsername": "用户名",
	"settings.sourceControl.httpsUsernamePlaceholder": "请输入您的 GitHub 用户名",
	"settings.sourceControl.httpsPersonalAccessToken": "个人访问令牌",
	"settings.sourceControl.httpsPersonalAccessTokenPlaceholder": "输入您的个人访问令牌 (PAT)",
	"settings.sourceControl.httpsWarningNotice": "{strong} 创建 GitHub 的访问令牌：前往 设置 → 开发者设置 → 个人访问令牌 → 令牌（经典）。所需范围：对于私人仓库使用 {repo} 或对于公共仓库使用 {publicRepo}。其他提供商也受支持。",
	"settings.sourceControl.httpsWarningNotice.strong": "需要个人访问令牌：",
	"settings.migrationReport": "迁移报告",
	"settings.migrationReport.title": "版本 2.0.0 的兼容性报告",
	"settings.migrationReport.description": "你共有 {totalCount} 个工作流，其中 {compatibleCount} 个已经与版本 2.0.0 兼容。请查看下面的详细信息，以了解并解决任何兼容性问题。在我们的发行说明中了解所有不兼容的变更。",
	"settings.migrationReport.documentationLink": "文档",
	"settings.migrationReport.refreshButton": "刷新",
	"settings.migrationReport.tabs.workflowIssues": "工作流问题",
	"settings.migrationReport.tabs.instanceIssues": "实例问题",
	"settings.migrationReport.workflowTooltip.critical": "受影响的工作流在更新后将会中断。你需要更新或替换受影响的节点。",
	"settings.migrationReport.workflowTooltip.medium": "工作流仍然可能运行，但可能产生不正确的结果。请在更新前进行审查和测试。",
	"settings.migrationReport.workflowTooltip.low": "在某些特定情况下，行为可能会略有变化。大多数工作流将按预期继续工作。",
	"settings.migrationReport.instanceTooltip.critical": "此问题很可能会在更新后导致实例无法启动或无法正常工作。必须在继续之前修复。",
	"settings.migrationReport.instanceTooltip.medium": "这可能会影响性能、兼容性或已连接的服务。请检查并在与你的设置相关时进行修复。",
	"settings.migrationReport.instanceTooltip.low": "小幅配置变更。不会阻止更新，但可能导致行为上出现细微变化。",
	"settings.migrationReport.emptyWorkflowIssues.title": "未检测到工作流问题",
	"settings.migrationReport.emptyWorkflowIssues.description": "你的工作流程与版本 2.0.0 完全兼容。你已经可以开始使用了！",
	"settings.migrationReport.emptyInstanceIssues.title": "未检测到实例问题",
	"settings.migrationReport.emptyInstanceIssues.description": "您的实例与版本 2.0.0 完全兼容。现在就可以开始使用了！",
	"settings.migrationReport.documentation": "文档",
	"settings.migrationReport.workflowsCount": "{count} 工作流 | {count} 工作流",
	"settings.migrationReport.detail.affectedTag": "{count} 个受影响",
	"settings.migrationReport.detail.table.name": "名称",
	"settings.migrationReport.detail.table.status": "状态",
	"settings.migrationReport.detail.table.active": "已启用",
	"settings.migrationReport.detail.table.deactivated": "已停用",
	"settings.migrationReport.detail.table.nodesAffected": "受影响的节点",
	"settings.migrationReport.detail.table.numberOfExecutions": "执行次数",
	"settings.migrationReport.detail.table.lastExecuted": "上次执行",
	"settings.migrationReport.detail.table.lastUpdated": "最近更新",
	"settings.migrationReport.detail.table.never": "从不",
	"settings.migrationReport.detail.search.placeholder": "搜索工作流…",
	"settings.migrationReport.detail.filter.status.label": "状态",
	"settings.migrationReport.detail.filter.status.all": "全部",
	"settings.migrationReport.detail.filter.status.active": "启用",
	"settings.migrationReport.detail.filter.status.deactivated": "已停用",
	"showMessage.cancel": "@:_reusableBaseText.cancel",
	"showMessage.ok": "确定",
	"showMessage.showDetails": "显示详细信息",
	startupError,
	"startupError.message": "无法连接到服务器。 <a data-action='reload'>刷新</a> 以重试",
	"tagsDropdown.createTag": "创建标签 \"{filter}\"",
	"tagsDropdown.manageTags": "管理标签",
	"tagsDropdown.noMatchingTagsExist": "不存在匹配的标签",
	"tagsDropdown.noTagsExist": "不存在标签",
	"tagsDropdown.showError.message": "尝试创建“{name}”标签时出现问题",
	"tagsDropdown.showError.title": "无法创建标签",
	"tagsDropdown.typeToCreateATag": "键入以创建标签",
	"tagsManager.couldNotDeleteTag": "无法删除标签",
	"tagsManager.done": "完成",
	"tagsManager.manageTags": "管理标签",
	"tagsManager.showError.onFetch.title": "无法获取标签",
	"tagsManager.showError.onFetch.message": "尝试获取标签时出现问题",
	"tagsManager.showError.onCreate.message": "尝试创建标签“{escapedName}”时出现问题",
	"tagsManager.showError.onCreate.title": "无法创建标签",
	"tagsManager.showError.onDelete.message": "尝试删除标签“{escapedName}”时出现问题",
	"tagsManager.showError.onDelete.title": "无法删除标签",
	"tagsManager.showError.onUpdate.message": "尝试更新标签“{escapedName}”时出现问题",
	"tagsManager.showError.onUpdate.title": "无法更新标签",
	"tagsManager.showMessage.onDelete.title": "标签已删除",
	"tagsManager.showMessage.onUpdate.title": "标签已更新",
	"tagsManager.tagNameCannotBeEmpty": "标签名称不能为空",
	"tagsTable.areYouSureYouWantToDeleteThisTag": "您确定要删除此标签吗？",
	"tagsTable.cancel": "@:_reusableBaseText.cancel",
	"tagsTable.createTag": "创建标签",
	"tagsTable.deleteTag": "删除标签",
	"tagsTable.editTag": "编辑标签",
	"tagsTable.name": "@:_reusableBaseText.name",
	"tagsTable.noMatchingTagsExist": "不存在匹配的标签",
	"tagsTable.saveChanges": "保存更改？",
	"tagsTable.usage": "使用情况",
	"tagsTableHeader.addNew": "添加新标签",
	"tagsTableHeader.searchTags": "搜索标签",
	"tagsView.inUse": "{count} 个工作流 | {count} 个工作流",
	"tagsView.notBeingUsed": "未使用",
	"onboarding.title": "演示：{name}",
	"template.buttons.goBackButton": "返回",
	"template.buttons.tryTemplate": "尝试模板",
	"template.buttons.useThisWorkflowButton": "使用此工作流",
	"template.details.appsInTheCollection": "此集合包含",
	"template.details.appsInTheWorkflow": "此工作流中的应用程序",
	"template.details.by": "作者：",
	"template.details.categories": "类别",
	"template.details.created": "创建于",
	"template.details.details": "详细信息",
	"template.details.times": "次",
	"template.details.viewed": "已查看",
	"template.byAuthor": "作者：{name}",
	"templates.allCategories": "所有类别",
	"templates.categoriesHeading": "类别",
	"templates.collection": "集合",
	"templates.collections": "集合",
	"templates.collectionsNotFound": "找不到集合",
	"templates.connectionWarning": "⚠️ 获取工作流模板时出现问题。请检查您的互联网连接。",
	"templates.heading": "工作流模板",
	"templates.shareWorkflow": "共享模板",
	"templates.noSearchResults": "未找到任何内容。请尝试调整搜索以查看更多内容。",
	"templates.searchPlaceholder": "搜索工作流",
	"templates.workflows": "工作流",
	"templates.workflowsNotFound": "找不到工作流",
	"templates.card.setupTime": "{count} 分钟设置",
	"templates.card.verified": "已验证",
	"textEdit.edit": "编辑",
	"userActivity.daysAgo": "{count} 天前",
	"userActivity.lastTime": "上次 {time}",
	"userActivity.today": "今天",
	"userActivity.yesterday": "昨天",
	"timeAgo.daysAgo": "%s 天前",
	"timeAgo.hoursAgo": "%s 小时前",
	"timeAgo.inDays": "%s 天后",
	"timeAgo.inHours": "%s 小时后",
	"timeAgo.inMinutes": "%s 分钟后",
	"timeAgo.inMonths": "%s 个月后",
	"timeAgo.inOneDay": "1 天后",
	"timeAgo.inOneHour": "1 小时后",
	"timeAgo.inOneMinute": "1 分钟后",
	"timeAgo.inOneMonth": "1 个月后",
	"timeAgo.inOneWeek": "1 周后",
	"timeAgo.inOneYear": "1 年后",
	"timeAgo.inWeeks": "%s 周后",
	"timeAgo.inYears": "%s 年后",
	"timeAgo.justNow": "刚刚",
	"timeAgo.minutesAgo": "%s 分钟前",
	"timeAgo.monthsAgo": "%s 个月前",
	"timeAgo.oneDayAgo": "1 天前",
	"timeAgo.oneHourAgo": "1 小时前",
	"timeAgo.oneMinuteAgo": "1 分钟前",
	"timeAgo.oneMonthAgo": "1 个月前",
	"timeAgo.oneWeekAgo": "1 周前",
	"timeAgo.oneYearAgo": "1 年前",
	"timeAgo.rightNow": "现在",
	"timeAgo.weeksAgo": "%s 周前",
	"timeAgo.yearsAgo": "%s 年前",
	"nodeIssues.credentials.notSet": "未设置 {type} 的凭据。",
	"nodeIssues.credentials.notAvailable": "凭据不可用",
	"nodeIssues.credentials.doNotExist": "名称为 {name} 的凭据不存在于 {type} 中。",
	"nodeIssues.credentials.doNotExist.hint": "您可以创建具有完全相同名称的凭据，然后在刷新时它们会被自动选中。",
	"nodeIssues.credentials.notIdentified": "名称为 {name} 的凭据存在于 {type} 中。",
	"nodeIssues.credentials.notIdentified.hint": "凭据未被明确标识。请选择正确的凭据。",
	"nodeIssues.input.missing": "没有节点连接到必需的输入 \"{inputName}\"",
	"ndv.trigger.moreInfo": "更多信息",
	"ndv.trigger.copiedTestUrl": "测试 URL 已复制到剪贴板",
	"ndv.trigger.webhookBasedNode.executionsHelp.inactive": "<b>创建工作流时</b>，点击\"执行步骤\"按钮，然后前往{service}并触发事件。这将启动一次执行记录，并显示在当前编辑器中。<br /><br /><b>完成工作流设计后</b>，请<a data-key=\"activate\">激活</a>该流程。此后每当{service}中发生匹配事件时，工作流将自动执行。这些执行记录会显示在<a data-key=\"executions\">执行列表</a>中，但不会出现在编辑器界面。",
	"ndv.trigger.webhookBasedNode.executionsHelp.active": "<b>构建工作流时</b>，点击\"执行步骤\"按钮，然后前往{service}触发一个事件。这将启动一次执行过程，执行结果会显示在当前编辑器中。<br /><br /><b>您的工作流也会自动执行</b>（因其已激活）。每当{service}中出现匹配事件时，该节点都会触发一次执行。这些执行会显示在<a data-key=\"executions\">执行列表</a>中，但不会出现在编辑器里。",
	"ndv.trigger.webhookNode.listening": "正在侦听测试事件",
	"ndv.trigger.chatTrigger.openChat": "打开聊天窗口",
	"ndv.trigger.webhookNode.formTrigger.listening": "正在侦听测试表单提交",
	"ndv.trigger.webhookBasedNode.listening": "正在侦听您的触发事件",
	"ndv.trigger.webhookNode.requestHint": "向以下地址发送 {type} 请求：",
	"ndv.trigger.webhookBasedNode.serviceHint": "转到 {service} 并创建事件",
	"ndv.trigger.webhookBasedNode.chatTrigger.serviceHint": "在聊天中发送消息",
	"ndv.trigger.webhookBasedNode.formTrigger.serviceHint": "提交刚刚在新标签页中打开的测试表单",
	"ndv.trigger.webhookBasedNode.activationHint.inactive": "构建完工作流后，<a data-key=\"activate\">激活它</a>以使其也持续侦听（您只是不会在这里看到那些执行）。",
	"ndv.trigger.webhookBasedNode.activationHint.active": "此节点也会在新的 {service} 事件发生时自动触发（但这些执行不会显示在这里）。",
	"ndv.trigger.pollingNode.activationHint.inactive": "构建完工作流后，<a data-key=\"activate\">激活它</a>以使其也定期检查事件（您只是不会在这里看到那些执行）。",
	"ndv.trigger.pollingNode.activationHint.active": "此节点也会在新的 {service} 事件发生时自动触发（但这些执行不会显示在这里）。",
	"ndv.trigger.executionsHint.question": "此节点何时会触发我的流程？",
	"ndv.trigger.pollingNode.fetchingEvent": "正在获取事件",
	"ndv.trigger.pollingNode.fetchingHint": "此节点正在 {name} 中查找与您定义的事件类似的事件",
	"ndv.trigger.pollingNode.executionsHelp.inactive": "<b>在构建您的工作流时</b>，单击“获取”按钮以获取单个模拟事件。它将显示在此编辑器中。<br /><br /><b>当您对您的工作流感到满意时</b>，<a data-key=\"activate\">激活</a> 它。然后，n8n 将定期检查 {service} 是否有新事件，如果找到任何事件，则执行此工作流。这些执行将显示在 <a data-key=\"executions\">执行列表</a>中，而不是编辑器中。",
	"ndv.trigger.pollingNode.executionsHelp.active": "<b>在构建您的工作流时</b>，单击“获取”按钮以获取单个模拟事件。它将显示在此编辑器中。<br /><br /><b>您的工作流也会自动执行</b>，因为它已激活。n8n 将定期检查 {app_name} 是否有新事件，如果找到任何事件，则执行此工作流。这些执行将显示在 <a data-key=\"executions\">执行列表</a>中，而不是编辑器中。",
	"ndv.trigger.webhookBasedNode.action": "从 {name} 中拉取事件",
	"ndv.search.placeholder.output": "搜索输出",
	"ndv.search.placeholder.input": "搜索所选节点",
	"ndv.search.placeholder.input.schema": "搜索先前节点的字段",
	"ndv.search.placeholder.shortcutHint": "搜索 （{shortcut}）",
	"ndv.search.noMatch.title": "没有匹配项",
	"ndv.search.noNodeMatch.title": "没有匹配的节点",
	"ndv.search.noMatch.description": "请尝试更改或{link}筛选器以查看更多内容",
	"ndv.search.noMatch.description.link": "清除",
	"ndv.search.noMatchSchema.description": "要搜索字段内容而不仅仅是名称，请使用表格或 JSON 视图",
	"ndv.search.noMatchSchema.description.link": "清除筛选器",
	"ndv.search.items": "{matched} / {total} 项 | {matched} / {total} 项",
	"ndv.render.text": "文本",
	"ndv.render.html": "HTML（超文本标记语言）",
	"ndv.render.markdown": "Markdown",
	"ndv.nodeHints.disabled": "该节点已禁用，将直接传递输入。",
	"ndv.nodeHints.alwaysOutputData": "如果没有正常返回任何内容，则此节点将输出一个空项。",
	"ndv.nodeHints.alwaysOutputData.short": "如果通常不会返回任何内容，则输出一个空项目。",
	"ndv.nodeHints.executeOnce": "此节点只会执行一次，无论输入项有多少个。",
	"ndv.nodeHints.executeOnce.short": "只执行一次，无论有多少输入项",
	"ndv.nodeHints.retryOnFail": "如果该节点失败，它会自动重试。",
	"ndv.nodeHints.retryOnFail.short": "如果失败则自动重试",
	"ndv.nodeHints.continueOnError": "即使节点失败，执行也会继续。",
	"ndv.nodeHints.continueOnError.short": "即使节点失败也继续执行",
	"updatesPanel.andIs": "并且是",
	"updatesPanel.behindTheLatest": "落后于最新最好的 n8n",
	"updatesPanel.howToUpdateYourN8nVersion": "如何更新您的 n8n 版本",
	"updatesPanel.version": "{numberOfVersions} 个版本{howManySuffix}",
	"updatesPanel.weVeBeenBusy": "我们一直在忙着 ✨",
	"updatesPanel.youReOnVersion": "您正在使用 {currentVersionName} 版本，该版本已发布",
	"versionCard.breakingChanges": "重大更改",
	"versionCard.released": "已发布",
	"versionCard.securityUpdate": "安全更新",
	"versionCard.thisVersionHasASecurityIssue": "此版本存在安全问题。<br />此处列出此版本是为了完整性。",
	"versionCard.unknown": "未知",
	"versionCard.version": "版本",
	"workflowActivator.workflowIsActive": "工作流已激活",
	"workflowActivator.activateWorkflow": "激活工作流",
	"workflowActivator.deactivateWorkflow": "停用工作流",
	"workflowActivator.active": "活动",
	"workflowActivator.inactive": "非活动",
	"workflowActivator.showError.title": "工作流无法 {newStateName}",
	"workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.message": "请在激活之前解决未决问题",
	"workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title": "激活工作流时出现问题",
	"workflowActivator.showMessage.activeChangedWorkflowIdUndefined.message": "请先保存，然后再激活",
	"workflowActivator.showMessage.activeChangedWorkflowIdUndefined.title": "激活工作流时出现问题",
	"workflowActivator.showMessage.displayActivationError.message.catchBlock": "抱歉，请求错误时出现问题",
	"workflowActivator.showMessage.displayActivationError.message.errorDataNotUndefined": "工作流激活时发生以下错误：",
	"workflowActivator.showMessage.displayActivationError.message.errorDataUndefined": "未知错误",
	"workflowActivator.showMessage.displayActivationError.title": "激活工作流时出现问题",
	"workflowActivator.theWorkflowIsSetToBeActiveBut": "工作流已激活，但无法启动。<br />单击以显示错误消息。",
	"workflowActivator.thisWorkflowHasNoTriggerNodes": "此工作流没有需要激活的触发节点",
	"workflowActivator.thisWorkflowIsArchived": "此工作流已存档，因此无法激活。",
	"workflowActivator.thisWorkflowHasOnlyOneExecuteWorkflowTriggerNode": "“执行工作流触发器”不需要激活，因为它由另一个工作流触发",
	"workflowActivator.conflictingWebhook.unknownWorkflow": "未知的工作流（ID: {id}）",
	"workflowDetails.share": "共享",
	"workflowDetails.addTag": "添加标签",
	"workflowDetails.chooseOrCreateATag": "选择或创建标签",
	"workflowProductionChecklist.title": "生产检查清单",
	"workflowProductionChecklist.readOnlyNotice": "只读环境。请在开发环境中更新这些项目并推送更改。",
	"workflowProductionChecklist.ignoreAllConfirmation.title": "全局忽略建议的操作",
	"workflowProductionChecklist.ignoreAllConfirmation.description": "关闭此选项将使这些建议在每个工作流中都被忽略。",
	"workflowProductionChecklist.ignoreAllConfirmation.confirm": "忽略所有工作流程",
	"workflowProductionChecklist.turnOffWorkflowSuggestions": "忽略所有工作流",
	"workflowProductionChecklist.evaluations.title": "测试人工智能步骤的可靠性",
	"workflowProductionChecklist.evaluations.description": "使用评估来检查在一系列输入上的表现。",
	"workflowProductionChecklist.errorWorkflow.title": "设置错误通知",
	"workflowProductionChecklist.errorWorkflow.description": "通过设置错误工作流，精确自定义您的通知方式。",
	"workflowProductionChecklist.timeSaved.title": "跟踪节省的时间",
	"workflowProductionChecklist.timeSaved.description": "配置每次运行节省的时间，以跟踪节省的手动工作。",
	"workflowExtraction.error.failure": "子工作流转换失败",
	"workflowExtraction.error.selectionGraph.inputEdgeToNonRoot": "非输入节点 '{node}' 接收来自当前选择之外节点的连接。",
	"workflowExtraction.error.selectionGraph.outputEdgeFromNonLeaf": "非输出节点 '{node}' 连接到当前选择范围之外的节点。",
	"workflowExtraction.error.selectionGraph.multipleInputNodes": "多个节点[{nodes}] 具有来自选择之外的输入。",
	"workflowExtraction.error.selectionGraph.multipleOutputNodes": "多个节点[{nodes}]的输出不在选择范围之内。",
	"workflowExtraction.error.selectionGraph.noContinuousPathFromRootToLeaf": "起始节点 '{start}' 没有选择到结束节点 '{end}' 的路径。",
	"workflowExtraction.error.selectionGraph.listHeader": "选择无效，因为存在以下错误：<br><br>{body}<br><br><a href=\"https://docs.n8n.io/workflows/subworkflow-conversion/\" target=\"_blank\">查看文档</a>了解更多信息。",
	"workflowExtraction.error.inputNodeHasMultipleInputBranches": "第一个节点 '{node}' 具有多个输入分支，而子工作流不支持这种情况。",
	"workflowExtraction.error.outputNodeHasMultipleOutputBranches": "最后一个节点 '{node}' 有多个输出分支，子工作流不支持。",
	"workflowExtraction.error.triggerSelected": "触发器无法转换为子工作流。请取消选择 {nodes}。",
	"workflowExtraction.error.subworkflowCreationFailed": "子工作流创建失败，已中止转换。",
	"workflowExtraction.success.title": "创建子工作流",
	"workflowExtraction.success.message": "在新的标签页中打开",
	"workflowExtraction.modal.title": "转换为子工作流",
	"workflowExtraction.modal.description": "将 {nodeCount} 个节点转换为新的子工作流 | 将 {nodeCount} 个节点转换为新的子工作流",
	"workflowHelpers.showMessage.title": "保存工作流时出现问题",
	"workflowOpen.created": "已创建",
	"workflowOpen.filterWorkflows": "按标签筛选",
	"workflowOpen.name": "@:_reusableBaseText.name",
	"workflowOpen.openWorkflow": "打开工作流",
	"workflowOpen.searchWorkflows": "搜索工作流...",
	"workflowOpen.showError.title": "加载工作流时出现问题",
	"workflowOpen.showMessage.message": "这是当前工作流",
	"workflowOpen.showMessage.title": "工作流已打开",
	"workflowOpen.updated": "已更新",
	"workflowOpen.newWFButton.label": "添加工作流",
	"workflowOpen.newWFButton.title": "创建新工作流",
	"workflowPreview.showError.arrayEmpty": "必须具有节点数组",
	"workflowPreview.showError.missingWorkflow": "缺少工作流",
	"workflowPreview.showError.previewError.message": "无法预览工作流",
	"workflowPreview.showError.missingExecution": "缺少工作流执行",
	"workflowPreview.executionMode.showError.previewError.message": "无法预览工作流执行",
	"workflowPreview.showError.previewError.title": "预览错误",
	"workflowRun.noActiveConnectionToTheServer": "与服务器的连接丢失",
	"workflowRun.showError.deactivate": "停用工作流以执行",
	"workflowRun.showError.title": "运行工作流时出现问题",
	"workflowRun.showError.payloadTooLarge": "请执行整个工作流，而不是仅执行节点。（现有执行数据太大。）",
	"workflowRun.showError.resolveOutstandingIssues": "请在激活之前解决未决问题",
	"workflowRun.showError.unsupportedExecutionLogic.title": "不支持的执行逻辑",
	"workflowRun.showError.unsupportedExecutionLogic.description": "执行逻辑 \"v2\" 在文件系统模式为 \"default\" 时不支持。请在工作流设置中将执行逻辑改为 \"v1\"，并相应地更新表达式。",
	"workflowRun.showWarning.noChatResponseNodes.title": "未检测到响应节点",
	"workflowRun.showWarning.noChatResponseNodes.description": "添加一个 Chat 节点或对 Webhook 做出响应的节点以发送回复，或在聊天触发器中更改响应模式。",
	"workflowRun.showMessage.message": "请在执行前修复它们",
	"workflowRun.showMessage.title": "工作流存在问题",
	"workflowSettings.executionLogic.v0.title": "v0（旧版）",
	"workflowSettings.executionLogic.v1.title": "v1（推荐）",
	"workflowSettings.executionLogic.v2.title": "v2（实验性）",
	"workflowSettings.executionLogic.v0.description": "依次执行每个分支的第一个节点，然后执行每个分支的第二个节点，依此类推。",
	"workflowSettings.executionLogic.v1.description": "从上到下依次执行每个分支，在开始下一个分支之前先完成当前分支。",
	"workflowSettings.executionLogic.v2.description": "依次执行每个分支，并将二进制直接包含在项结构中，以简化表达式。",
	"workflowSettings.executionLogic.changed.title": "执行逻辑已更改",
	"workflowSettings.executionLogic.changed.description": "请更新引用二进制数据的表达式，以匹配新的执行逻辑模式。",
	"workflowSettings.callerIds": "可以调用此工作流的工作流 ID",
	"workflowSettings.callerIds.placeholder": "例如：14、18",
	"workflowSettings.callerPolicy": "此工作流可以由以下工作流调用",
	"workflowSettings.callerPolicy.options.any": "任何工作流",
	"workflowSettings.callerPolicy.options.workflowsFromPersonalProject": "由 {projectName} 创建的工作流",
	"workflowSettings.callerPolicy.options.workflowsFromTeamProject": "仅 {projectName} 中的工作流",
	"workflowSettings.callerPolicy.options.workflowsFromSameProject": "仅同一项目中的工作流",
	"workflowSettings.callerPolicy.options.workflowsFromAList": "选定的工作流",
	"workflowSettings.callerPolicy.options.none": "无其他工作流",
	"workflowSettings.defaultTimezone": "默认 - {defaultTimezoneValue}",
	"workflowSettings.defaultTimezoneNotValid": "默认时区无效",
	"workflowSettings.errorWorkflow": "错误工作流（当此工作流出错时通知）",
	"workflowSettings.executionLogic": "执行逻辑",
	"workflowSettings.binaryMode": "二进制模式",
	"workflowSettings.helpTexts.errorWorkflow": "如果当前工作流失败，则运行的第二个工作流。<br />第二个工作流应是一个“错误触发器”节点。",
	"workflowSettings.helpTexts.executionTimeout": "工作流在超时之前应等待的时间",
	"workflowSettings.helpTexts.executionTimeoutToggle": "是否在定义的时间后取消工作流执行",
	"workflowSettings.helpTexts.saveDataErrorExecution": "是否保存失败执行的数据",
	"workflowSettings.helpTexts.saveDataSuccessExecution": "是否保存成功完成执行的数据",
	"workflowSettings.helpTexts.saveExecutionProgress": "是否在每次节点执行后保存数据。这允许您在发生错误时从停止执行的位置恢复，但可能会增加延迟。",
	"workflowSettings.helpTexts.saveManualExecutions": "是否保存从编辑器手动启动的执行数据",
	"workflowSettings.helpTexts.timezone": "工作流应运行的时区。例如，由“cron”节点使用。",
	"workflowSettings.helpTexts.workflowCallerIds": "允许执行此工作流的工作流 ID（使用“执行工作流”节点）。ID 可以在工作流 URL 的末尾找到。多个 ID 用逗号分隔。",
	"workflowSettings.helpTexts.workflowCallerPolicy": "允许使用“执行工作流”节点调用此工作流的工作流",
	"workflowSettings.hours": "小时",
	"workflowSettings.minutes": "分钟",
	"workflowSettings.name": "工作流名称",
	"workflowSettings.noWorkflow": "- 无工作流 -",
	"workflowSettings.save": "@:_reusableBaseText.save",
	"workflowSettings.saveDataErrorExecution": "保存失败的生产执行",
	"workflowSettings.saveDataErrorExecutionOptions.defaultSave": "默认 - {defaultValue}",
	"workflowSettings.saveDataErrorExecutionOptions.doNotSave": "不保存",
	"workflowSettings.saveDataErrorExecutionOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.saveDataSuccessExecution": "保存成功的生产执行",
	"workflowSettings.saveDataSuccessExecutionOptions.defaultSave": "默认 - {defaultValue}",
	"workflowSettings.saveDataSuccessExecutionOptions.doNotSave": "不保存",
	"workflowSettings.saveDataSuccessExecutionOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.saveExecutionProgress": "保存执行进度",
	"workflowSettings.saveExecutionProgressOptions.defaultSave": "默认 - {defaultValue}",
	"workflowSettings.saveExecutionProgressOptions.doNotSave": "不保存",
	"workflowSettings.saveExecutionProgressOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.saveManualExecutions": "保存手动执行",
	"workflowSettings.saveManualOptions.defaultSave": "默认 - {defaultValue}",
	"workflowSettings.saveManualOptions.doNotSave": "不保存",
	"workflowSettings.saveManualOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.seconds": "秒",
	"workflowSettings.selectOption": "选择选项",
	"workflowSettings.settingsFor": "{workflowName}（#{workflowId}）的工作流设置",
	"workflowSettings.showError.saveSettings1.errorMessage": "超时已激活，但设置为 0",
	"workflowSettings.showError.saveSettings1.message": "保存设置时出现问题",
	"workflowSettings.showError.saveSettings1.title": "保存设置时出现问题",
	"workflowSettings.showError.saveSettings2.errorMessage": "最大超时时间为：{hours} 小时、{minutes} 分钟、{seconds} 秒",
	"workflowSettings.showError.saveSettings2.message": "超时时间比允许的时间长",
	"workflowSettings.showError.saveSettings2.title": "保存设置时出现问题",
	"workflowSettings.showError.saveSettings3.title": "保存设置时出现问题",
	"workflowSettings.showError.fetchSettings.title": "获取设置时出现问题",
	"workflowSettings.showMessage.saveSettings.title": "工作流设置已保存",
	"workflowSettings.timeoutAfter": "超时时间",
	"workflowSettings.timeoutWorkflow": "超时工作流",
	"workflowSettings.executionTimeout": "超时工作流",
	"workflowSettings.tags": "标签",
	"workflowSettings.timezone": "时区",
	"workflowSettings.credentialResolver": "动态凭据解析器",
	"workflowSettings.credentialResolver.placeholder": "选择解析器",
	"workflowSettings.credentialResolver.createNew": "创建新的解析器",
	"workflowSettings.credentialResolver.edit": "编辑解析器",
	"workflowSettings.credentialResolver.none": "默认值 - 无",
	"workflowSettings.helpTexts.credentialResolver": "解析器使用触发工作流的用户身份来为本工作流中的所有动态凭据选择正确的账户。",
	"credentialResolver.addNew": "添加解析器",
	"credentialResolver.view.title": "凭据解析器",
	"credentialResolver.view.description": "解析器在工作流运行时获取传入的用户身份，并选择动态凭据所使用的账户。请在工作流设置中选择一个解析器。",
	"credentialResolver.view.learnMore": "你可以在其中了解更多。",
	"credentialResolver.action.edit": "编辑",
	"credentialResolver.action.delete": "删除",
	"credentialResolver.item.updated": "最近更新",
	"credentialResolver.item.created": "已创建",
	"credentialResolverEdit.title.create": "创建凭据解析器",
	"credentialResolverEdit.title.edit": "编辑凭据解析器",
	"credentialResolverEdit.saveSuccess.title": "凭据解析器已成功保存。",
	"credentialResolverEdit.deleteSuccess.title": "凭据解析器已成功删除",
	"credentialResolverEdit.defaultName": "新解析器",
	"credentialResolverEdit.type.label": "类型",
	"credentialResolverEdit.type.placeholder": "选择解析器类型",
	"credentialResolverEdit.config.label": "配置",
	"credentialResolverEdit.error.missingRequiredFields": "请填写所有必填字段",
	"credentialResolverEdit.error.save": "无法保存凭据解析器",
	"credentialResolverEdit.error.delete": "删除凭据解析器失败",
	"credentialResolverEdit.error.loadTypes": "无法加载解析器类型",
	"credentialResolverEdit.delete": "删除",
	"credentialResolverEdit.confirmMessage.deleteResolver.headline": "删除凭据解析器？",
	"credentialResolverEdit.confirmMessage.deleteResolver.message": "您确定要删除凭据解析器“{savedResolverName}”吗？",
	"credentialResolverEdit.confirmMessage.deleteResolver.confirmButtonText": "是的，删除",
	"credentialResolverEdit.sidebar.configuration": "配置",
	"credentialResolverEdit.sidebar.details": "详情",
	"credentialResolverEdit.details.id": "标识符",
	"credentialResolverEdit.details.notSaved": "尚未保存",
	"credentialResolverEdit.clearCredentials.label": "清除凭据",
	"credentialResolverEdit.clearCredentials.placeholder": "请选择一个选项",
	"credentialResolverEdit.clearCredentials.yes": "是的",
	"credentialResolverEdit.clearCredentials.no": "不",
	"credentialResolverEdit.clearCredentials.error.required": "必须清除所选凭据",
	"credentialResolverEdit.clearCredentials.warning": "对解析器进行修改时，建议清除该解析器的现有凭据。请选择是否执行该操作。",
	"workflowSettings.timeSavedPerExecution": "预计节省时间",
	"workflowSettings.timeSavedPerExecution.hint": "每次生产执行所需分钟数",
	"workflowSettings.timeSavedPerExecution.tooltip": "总节省时间已在概览页面中汇总。",
	"workflowSettings.timeSavedPerExecution.minutesSaved": "节省的分钟数",
	"workflowSettings.timeSavedPerExecution.tab.fixed": "已修复",
	"workflowSettings.timeSavedPerExecution.tab.conditional": "条件",
	"workflowSettings.timeSavedPerExecution.noNodesDetected": "未检测到节省时间的节点",
	"workflowSettings.timeSavedPerExecution.noNodesDetected.hint": "添加一个或多个节省时间的节点，以动态计算节省的时间。",
	"workflowSettings.timeSavedPerExecution.nodesDetected": "活动中 - {count} 个省时节点当前已设置",
	"workflowSettings.timeSavedPerExecution.nodesDetected.hint": "节省的时间是基于每次执行动态计算的。",
	"workflowSettings.timeSavedPerExecution.nodesDetected.addMore": "添加更多节省时间的节点",
	"workflowSettings.timeSavedPerExecution.fixedTabWarning": "此工作流的节省时间使用固定值进行跟踪。使用此设置将忽略此工作流中的所有 Time Saved 节点。",
	"workflowSettings.timeSavedPerExecution.fixedTabWarning.link": "节省时间的节点",
	"workflowSettings.availableInMCP": "在MCP中可用",
	"workflowSettings.availableInMCP.tooltip": "通过 n8n MCP 将此工作流程公开给 AI 代理。",
	"workflowSettings.toggleMCP.error.title": "更新MCP设置时出错",
	"workflowSettings.toggleMCP.notFoundError": "找不到工作流程",
	"workflowHistory.title": "版本历史记录",
	"workflowHistory.content.actions": "操作",
	"workflowHistory.item.id": "ID：{id}",
	"workflowHistory.item.createdAt": "{date}，{time}",
	"workflowHistory.item.savedAtLabel": "已保存：",
	"workflowHistory.item.publishedAtLabel": "最后发布者",
	"workflowHistory.item.actions.restore": "恢复此版本",
	"workflowHistory.item.actions.publish": "发布此版本",
	"workflowHistory.item.actions.unpublish": "取消发布工作流",
	"workflowHistory.item.actions.clone": "克隆到新工作流",
	"workflowHistory.item.actions.open": "在新标签页中打开版本",
	"workflowHistory.item.actions.download": "下载",
	"workflowHistory.item.unsaved.title": "未保存的版本",
	"workflowHistory.item.latest": "最新保存的版本",
	"workflowHistory.item.active": "已发布",
	"workflowHistory.item.publishedBy": "出版者",
	"workflowHistory.item.currentChanges": "当前变更",
	"workflowHistory.limitDay": "版本历史记录仅保留1天",
	"workflowHistory.limitDays": "版本历史记录仅限于 {days} 天",
	"workflowHistory.limitHour": "版本历史记录仅限1小时。",
	"workflowHistory.limitHours": "版本历史记录仅限于 {hours} 小时",
	"workflowHistory.upgrade": "{link} 以激活完整历史记录",
	"workflowHistory.upgrade.link": "升级计划",
	"workflowHistory.action.error.title": "未能{action}",
	"workflowHistory.action.restore.modal.title": "恢复以前的工作流版本？",
	"workflowHistory.action.restore.modal.subtitle": "您的工作流将恢复到 {date} 的版本",
	"workflowHistory.action.restore.modal.publishedNote": "这不会影响已发布的版本。",
	"workflowHistory.action.restore.modal.button.restore": "恢复",
	"workflowHistory.action.restore.modal.button.cancel": "取消",
	"workflowHistory.action.restore.success.title": "已成功恢复工作流版本",
	"workflowHistory.action.restore.alreadyRestored": "工作流版本已恢复",
	"workflowHistory.action.clone.success.title": "已成功克隆工作流版本",
	"workflowHistory.action.clone.success.message": "在新标签页中打开克隆的工作流",
	"workflowHistory.action.unpublish.success.title": "工作流已成功取消发布",
	"workflowHistory.action.unpublish.notAvailable": "此工作流没有可取消发布的已发布版本。",
	"workflowHistory.action.unpublish.modal.title": "取消发布 {versionName}",
	"workflowHistory.action.unpublish.modal.description": "这将阻止对该工作流的所有生产执行，直到你再次发布。",
	"workflowHistory.action.unpublish.modal.button.unpublish": "取消发布",
	"workflowHistory.button.tooltip.empty": "此工作流当前没有历史记录可供查看。完成第一次保存后，您将可以查看以前的版本",
	"workflowHistory.button.tooltip": "工作流历史记录，用于查看和还原您的工作流的先前版本",
	"workflowHistory.button.tooltip.scheduled": "工作流很快就会保存。",
	"workflowHistory.button.tooltip.saving": "工作流正在保存",
	"workflowHistory.group.unnamedVersions": "1 个版本 | {count} 个版本",
	"workflowHistory.publishModal.title": "发布 {versionName}",
	"workflows.heading": "工作流",
	"workflows.add": "添加工作流",
	"workflows.publish": "发布",
	"workflows.published": "已发布",
	"workflows.publish.permissionDenied": "你没有权限发布此工作流。",
	"workflows.project.add": "将工作流添加到项目",
	"workflows.item.open": "打开",
	"workflows.item.share": "共享...",
	"workflows.item.duplicate": "复制",
	"workflows.item.delete": "删除",
	"workflows.item.archive": "存档",
	"workflows.item.unarchive": "解档",
	"workflows.item.move": "移动",
	"workflows.item.changeOwner": "更改所有者",
	"workflows.item.updated": "修改于",
	"workflows.item.created": "创建于",
	"workflows.item.readonly": "只读",
	"workflows.item.archived": "已存档",
	"workflows.item.availableInMCP": "在 MCP 中可用",
	"workflows.dynamic.tooltip": "此工作流在运行时根据执行者来解析凭据。",
	"workflows.dynamic.tooltipTitle": "动态凭据",
	"workflows.dynamic.resolverMissing": "缺少凭据解析器",
	"workflows.item.enableMCPAccess": "启用MCP访问",
	"workflows.item.disableMCPAccess": "移除MCP访问权限",
	"workflows.itemSuggestion.try": "尝试模板",
	"workflows.templateRecoV2.starterTemplates": "入门模板",
	"workflows.templateRecoV2.seeMoreStarterTemplates": "查看更多入门模板",
	"workflows.templateRecoV2.popularTemplates": "热门模板",
	"workflows.templateRecoV2.seeMorePopularTemplates": "查看更多热门模板",
	"workflows.templateRecoV2.tutorials": "教程",
	"workflows.templateRecoV2.loadingTemplates": "加载模板...",
	"workflows.templateRecoV2.useTemplate": "使用模板",
	"workflows.templateRecoV2.exploreTemplates": "或者探索模板以获得灵感并快速学习：",
	"templates.featured.loading": "正在加载模板...",
	"templates.featured.seeMore": "查看更多模板",
	"workflows.search.placeholder": "搜索工作流...",
	"workflows.filters": "筛选器",
	"workflows.filters.tags": "标签",
	"workflows.filters.status": "状态",
	"workflows.filters.status.all": "全部",
	"workflows.filters.status.active": "活动",
	"workflows.filters.status.deactivated": "已停用",
	"workflows.filters.showArchived": "显示已归档的工作流程",
	"workflows.filters.ownedBy": "所有者",
	"workflows.filters.sharedWith": "共享对象",
	"workflows.filters.apply": "应用筛选器",
	"workflows.filters.reset": "重置全部",
	"workflows.filters.active": "应用筛选器后，某些工作流可能会被隐藏。",
	"workflows.filters.active.shortText": "已应用筛选条件。",
	"workflows.filters.active.reset": "移除筛选器",
	"workflows.sort.lastUpdated": "按上次更新时间排序",
	"workflows.sort.lastCreated": "按上次创建时间排序",
	"workflows.sort.nameAsc": "按名称排序 (A-Z)",
	"workflows.sort.nameDesc": "按名称排序 (Z-A)",
	"workflows.noResults": "未找到任何工作流",
	"workflows.noResults.withSearch.switchToShared.preamble": "某些工作流可能",
	"workflows.noResults.withSearch.switchToShared.link": "已隐藏",
	"workflows.empty.heading": "欢迎，{name}！",
	"workflows.empty.heading.userNotSetup": "欢迎！",
	"workflows.empty.headingWithIcon": "👋 欢迎，{name}！",
	"workflows.empty.headingWithIcon.userNotSetup": "👋 欢迎！",
	"workflows.empty.heading.builder": "嗨 {name}，你想自动化什么？",
	"workflows.empty.heading.builder.userNotSetup": "嗨，你想要自动化什么？",
	"workflows.empty.description": "创建您的第一个工作流",
	"workflows.empty.description.readOnlyEnv": "此处尚无任何工作流",
	"workflows.empty.description.noPermission": "当前没有要查看的工作流",
	"workflows.empty.startFromScratch": "从头开始",
	"workflows.empty.startWithTemplate": "从模板开始",
	"workflows.empty.browseTemplates": "浏览工作流模板",
	"workflows.empty.learnN8n": "了解 n8n",
	"workflows.empty.button.disabled.tooltip": "您在项目中的当前角色不允许您创建工作流",
	"workflows.empty.easyAI": "测试一个简单的AI代理示例",
	"workflows.empty.tryAiWorkflow": "运行实时演示",
	"workflows.empty.shared-with-me": "没有与您共享任何 {resource}",
	"workflows.empty.shared-with-me.link": "<a href=\"#\">返回个人主页</a>",
	"workflows.empty.readyToRun": "运行实时演示",
	"workflows.list.easyAI": "用这个简单的AI代理工作流，在n8n中测试人工智能的力量",
	"workflows.list.error.fetching.one": "获取工作流时出错",
	"workflows.list.error.fetching": "获取工作流时出错",
	"workflows.shareModal.title": "共享 '{name}'",
	"workflows.shareModal.title.static": "已与 {projectName} 共享",
	"workflows.shareModal.select.placeholder": "添加用户...",
	"workflows.shareModel.select.notFound": "没有匹配的用户",
	"workflows.shareModal.list.delete": "移除访问权限",
	"workflows.shareModal.list.delete.confirm.title": "移除 {name} 的访问权限？",
	"workflows.shareModal.list.delete.confirm.lastUserWithAccessToCredentials.message": "如果这样做，工作流将失去对 {name} 的凭据的访问权限。<strong>使用这些凭据的节点将停止工作</strong>。",
	"workflows.shareModal.list.delete.confirm.confirmButtonText": "移除访问权限",
	"workflows.shareModal.list.delete.confirm.cancelButtonText": "取消",
	"workflows.shareModal.onSave.success.title": "共享已更新",
	"workflows.shareModal.onSave.error.title": "保存共享设置时出现问题",
	"workflows.shareModal.saveBeforeClose.title": "保存共享更改？",
	"workflows.shareModal.saveBeforeClose.message": "您有未保存的更改。您要先保存它们再关闭吗？",
	"workflows.shareModal.saveBeforeClose.confirmButtonText": "保存",
	"workflows.shareModal.saveBeforeClose.cancelButtonText": "关闭而不保存",
	"workflows.shareModal.save": "保存",
	"workflows.shareModal.changesHint": "您进行了更改",
	"workflows.shareModal.info.sharee": "只有 {workflowOwnerName} 或具有工作流共享权限的用户才能更改此工作流的共享对象",
	"workflows.shareModal.info.sharee.fallback": "所有者",
	"workflows.shareModal.info.members": "此工作流由 {projectName} 项目拥有，该项目当前有 {members} 可以访问此工作流。",
	"workflows.shareModal.info.members.number": "{number} 个成员 | {number} 个成员",
	"workflows.shareModal.role.editor": "@:_reusableBaseText.roles.editor",
	"workflows.roles.editor": "@:_reusableBaseText.roles.editor",
	"workflows.concurrentChanges.confirmMessage.title": "工作流已被其他人更改",
	"workflows.concurrentChanges.confirmMessage.message": "在您编辑此工作流时，有人保存了它。您可以<a href=\"{url}\" target=\"_blank\">查看他们的版本</a>（在新标签页中）。<br/><br/>用您的更改覆盖他们的更改？",
	"workflows.concurrentChanges.confirmMessage.cancelButtonText": "取消",
	"workflows.concurrentChanges.confirmMessage.confirmButtonText": "覆盖并保存",
	"workflows.autodeactivated": "工作流已自动停用",
	"workflows.ai.starter.collection.callout": "了解如何在 n8n 中构建 AI 代理。",
	"workflows.ai.starter.collection.card": "学习如何构建AI代理",
	"workflows.ai.starter.collection.folder.name": "🎁 n8n基础知识：学习如何在n8n中构建代理",
	"workflows.ai.starter.collection.error": "加载AI代理启动集合时出错。请稍后再试。",
	"workflows.readyToRunWorkflows.card": "尝试一个工作流程 - 无需设置",
	"workflows.readyToRunWorkflows.card2": "运行工作流程",
	"workflows.readyToRunWorkflows.card3": "查看 n8n 的实际操作",
	"workflows.readyToRunWorkflows.callout": "查看 n8n 的实际操作 - 无需设置",
	"workflows.readyToRunWorkflows.callout2": "运行工作流",
	"workflows.readyToRunWorkflows.callout3": "查看 n8n 的实际运行情况",
	"workflows.readyToRunWorkflows.cta": "运行工作流",
	"workflows.readyToRunWorkflows.folder.name": "🚀 可直接运行的工作流",
	"workflows.readyToRunWorkflows.error": "加载 n8n 集合时出错。请稍后再试。",
	"workflows.archivedOnly.hint": "存档的工作流在此视图中是隐藏的。{link}",
	"workflows.archivedOnly.hint.link": "更新过滤器",
	"workflowSelectorParameterInput.createNewSubworkflow.name": "我的子工作流程",
	"workflows.publishModal.title": "发布工作流",
	"workflows.publishModal.noTriggerMessage": "此工作流没有需要发布的触发节点。",
	"workflows.publishModal.versionNameLabel": "版本名称",
	"workflows.publishModal.descriptionPlaceholder": "描述变更（可选）",
	"workflows.publishModal.noChanges": "没有需要发布的变更",
	"workflows.publishModal.changes": "要发布的新变更",
	"workflows.publishModal.lastPublished": "最后由 {author} 发布于 {date} {time}",
	"importCurlModal.title": "导入 cURL 命令",
	"importCurlModal.input.label": "cURL 命令",
	"importCurlModal.input.placeholder": "在此处粘贴 cURL 命令",
	"ImportCurlModal.notice.content": "这将覆盖您已对当前节点所做的任何更改",
	"importCurlModal.button.label": "导入",
	"importCurlParameter.label": "导入 cURL",
	"importCurlParameter.showError.invalidCurlCommand.title": "无法导入 cURL 命令",
	"importCurlParameter.showError.invalidCurlCommand.message": "此命令的格式不受支持",
	"importCurlParameter.showError.invalidProtocol1.title": "使用 {node} 节点",
	"importCurlParameter.showError.invalidProtocol2.title": "协议无效",
	"importCurlParameter.showError.invalidProtocol.message": "HTTP 节点不支持 {protocol} 请求",
	"variables.heading": "变量",
	"variables.add": "添加变量",
	"variables.add.unavailable": "升级计划以继续使用变量",
	"variables.add.unavailable.empty": "升级计划以开始使用变量",
	"variables.add.onlyOwnerCanCreate": "只有所有者才能创建变量",
	"variables.add.button.label": "创建变量",
	"variables.empty.heading": "{name}，让我们设置一个变量",
	"variables.empty.heading.userNotSetup": "设置变量",
	"variables.empty.description": "可以使用变量来存储可在多个工作流中轻松引用的数据。",
	"variables.empty.button": "添加第一个变量",
	"variables.empty.button.disabled.tooltip": "您在项目中的当前角色不允许您创建变量",
	"variables.empty.notAllowedToCreate.heading": "{name}，开始使用变量",
	"variables.empty.notAllowedToCreate.description": "请向项目编辑或实例管理员请求创建所需的变量。一旦配置完成，您可以使用语法 $vars.MY_VAR 在您的工作流中利用它们。",
	"variables.filters.active": "由于已应用筛选条件，部分变量可能被隐藏。",
	"variables.filters.active.reset": "清除筛选条件",
	"variables.noResults": "未找到任何变量",
	"variables.sort.nameAsc": "按名称排序 (A-Z)",
	"variables.sort.nameDesc": "按名称排序 (Z-A)",
	"variables.table.key": "键",
	"variables.table.value": "值",
	"variables.table.usage": "使用语法",
	"variables.table.scope": "范围",
	"variables.table.scope.global": "全球",
	"variables.editing.key.placeholder": "输入名称",
	"variables.editing.value.placeholder": "输入值",
	"variables.editing.key.error.regex": "该字段只能包含字母、数字和下划线。",
	"variables.row.button.save": "保存",
	"variables.row.button.cancel": "取消",
	"variables.row.button.edit": "编辑",
	"variables.row.button.edit.onlyRoleCanEdit": "只有实例所有者和管理员才能编辑变量",
	"variables.row.button.delete": "删除",
	"variables.row.button.delete.onlyRoleCanDelete": "只有实例所有者和才能删除变量",
	"variables.row.usage.copiedToClipboard": "已复制到剪贴板",
	"variables.row.usage.copyToClipboard": "复制到剪贴板",
	"variables.search.placeholder": "搜索变量...",
	"variables.delete.successful.message": "变量 {variableName} 已删除",
	"variables.errors.save": "保存变量时出错",
	"variables.errors.delete": "删除变量时出错",
	"variables.modals.deleteConfirm.title": "删除变量",
	"variables.modals.deleteConfirm.message": "您确定要删除变量“{name}”吗？此操作无法撤消。",
	"variables.modals.deleteConfirm.confirmButton": "删除",
	"variables.modals.deleteConfirm.cancelButton": "取消",
	"variables.modal.title.create": "新变量",
	"variables.modal.title.edit": "编辑变量",
	"variables.modal.key.label": "钥匙",
	"variables.modal.value.label": "值",
	"variables.modal.scope.label": "范围",
	"variables.modal.scope.global": "全球",
	"variables.modal.scope.all": "所有",
	"variables.modal.button.cancel": "取消",
	"variables.modal.button.save": "保存",
	"variables.modal.error.keyExistsInProject": "该密钥已在此项目中存在",
	"variables.modal.warning.globalKeyExists": "相同的键已经在全局范围内存在。这个变量将覆盖项目内的全局变量。",
	"contextual.credentials.sharing.unavailable.title": "升级以进行协作",
	"contextual.credentials.sharing.unavailable.title.cloud": "升级以进行协作",
	"contextual.credentials.sharing.unavailable.description": "升级您的计划后，您可以与他人共享凭据。",
	"contextual.credentials.sharing.unavailable.description.cloud": "升级您的计划后，您可以与他人共享凭据。",
	"contextual.credentials.sharing.unavailable.button": "查看计划",
	"contextual.credentials.sharing.unavailable.button.cloud": "立即升级",
	"contextual.workflows.sharing.title": "共享",
	"contextual.workflows.sharing.unavailable.title": "共享",
	"contextual.workflows.sharing.unavailable.title.cloud": "升级以进行协作",
	"contextual.workflows.sharing.unavailable.description.modal": "升级您的计划后，您可以与其他人协作处理工作流。",
	"contextual.workflows.sharing.unavailable.description.modal.cloud": "升级您的计划后，您可以与其他人协作处理工作流。",
	"contextual.workflows.sharing.unavailable.description.tooltip": "升级您的计划后，您可以与其他人协作处理工作流。{action}",
	"contextual.workflows.sharing.unavailable.description.tooltip.cloud": "升级您的计划后，您可以与其他人协作处理工作流。{action}",
	"contextual.workflows.sharing.unavailable.button": "查看计划",
	"contextual.workflows.sharing.unavailable.button.cloud": "立即升级",
	"contextual.variables.unavailable.title": "在企业版计划中可用",
	"contextual.variables.unavailable.title.cloud": "在 Pro 计划中可用",
	"contextual.variables.unavailable.description": "变量可以用于在工作流之间存储和访问数据。在 n8n 中可以使用前缀 <code>$vars</code> 引用它们（例如 <code>$vars.myVariable</code>）。变量是不可变的，无法在工作流中进行修改。<br/><a href=\"https://docs.n8n.io/code/variables/\" target=\"_blank\">了解更多信息。</a>",
	"contextual.variables.unavailable.button": "查看计划",
	"contextual.variables.unavailable.button.cloud": "立即升级",
	"contextual.users.settings.unavailable.title": "升级以添加用户",
	"contextual.users.settings.unavailable.title.cloud": "升级以添加用户",
	"contextual.users.settings.unavailable.description": "在更高版本的计划中创建多个用户，并共享工作流和凭据以进行协作",
	"contextual.users.settings.unavailable.description.cloud": "在更高版本的计划中创建多个用户，并共享工作流和凭据以进行协作",
	"contextual.users.settings.unavailable.button": "查看计划",
	"contextual.users.settings.unavailable.button.cloud": "立即升级",
	"contextual.feature.unavailable.title": "在企业版计划中可用",
	"contextual.feature.unavailable.title.cloud": "在 Pro 计划中可用",
	"dataTable.dataTables": "数据表格",
	"dataTable.empty.label": "您还没有任何数据表。",
	"dataTable.empty.description": "使用数据表来持久化执行结果、在工作流程之间共享数据以及跟踪评估指标。",
	"dataTable.empty.button.disabled.tooltip": "您在该项目中的当前角色不允许您创建数据表。",
	"dataTable.card.size": "{size}MB",
	"dataTable.card.column.count": "{count} 列 | {count} 列",
	"dataTable.add.title": "创建新数据表格",
	"dataTable.add.button.label": "创建数据表格",
	"dataTable.add.fromScratch": "从零开始",
	"dataTable.add.importCsv": "导入 CSV 文件",
	"dataTable.add.input.name.label": "数据表名称",
	"dataTable.add.input.name.placeholder": "输入数据表名称",
	"dataTable.add.error": "创建数据表时出错",
	"dataTable.delete.confirm.title": "删除数据表",
	"dataTable.upload.uploading": "正在上传并处理 CSV 文件…",
	"dataTable.upload.selectFile": "正在等待文件选择...",
	"dataTable.upload.dropOrClick": "将文件拖放到此处，或点击上传",
	"dataTable.upload.csvOnly": "仅限 CSV 文件",
	"dataTable.upload.hasHeaders": "我的 CSV 文件包含一个表头行",
	"dataTable.upload.uploadButton": "上传 CSV",
	"dataTable.upload.success": "'{fileName}' 已成功上传。我们发现 {columnCount} 列和 {rowCount} 行 | '{fileName}' 已成功上传。我们发现 {columnCount} 列和 {rowCount} 行",
	"dataTable.upload.error": "CSV 文件上传时出错",
	"dataTable.import.columnsFound": "已发现的列",
	"dataTable.import.columnName": "列名",
	"dataTable.import.columnsDescription": "请审查并调整从您的 CSV 文件中检测到的列名和数据类型。",
	"dataTable.import.columnType": "数据类型",
	"dataTable.import.columnNamePlaceholder": "输入列名",
	"dataTable.import.duplicateColumnName": "列名必须唯一",
	"dataTable.import.systemColumnName": "{columnName} 是一个保留列",
	"dataTable.import.invalidColumnName": "仅允许字母、非前导数字和下划线",
	"dataTable.delete.confirm.message": "您确定要删除数据表 '{name}' 吗？此操作无法撤销。",
	"dataTable.delete.error": "删除数据表时出错",
	"dataTable.download.csv": "下载 CSV 文件",
	"dataTable.download.error": "下载数据表失败",
	"dataTable.rename.error": "重命名数据表时出错",
	"dataTable.getDetails.error": "获取数据表详细信息时出错",
	"dataTable.notFound": "未找到数据表",
	"dataTable.noColumns.heading": "还没有列",
	"dataTable.noColumns.description": "添加列以开始在此数据表中存储数据。",
	"dataTable.noColumns.button.label": "添加第一列",
	"dataTable.addColumn.label": "添加列",
	"dataTable.addColumn.nameInput.label": "@:_reusableBaseText.name",
	"dataTable.addColumn.nameInput.placeholder": "输入列名",
	"dataTable.addColumn.typeInput.label": "@:_reusableBaseText.type",
	"dataTable.addColumn.error": "添加列时出错",
	"dataTable.column.alreadyExistsError": "该列已存在",
	"dataTable.moveColumn.error": "移动列时出错",
	"dataTable.deleteColumn.error": "删除列时出错",
	"dataTable.deleteColumn.confirm.title": "删除列",
	"dataTable.deleteColumn.confirm.message": "你确定要删除列 '{name}' 吗？此操作无法撤销。",
	"dataTable.addColumn.invalidName.error": "无效的列名",
	"dataTable.addColumn.invalidName.description": "列名称必须以字母开头，并且只能包含字母、数字或下划线。",
	"dataTable.renameColumn.label": "重命名列",
	"dataTable.renameColumn.error": "重命名列时出错",
	"dataTable.fetchContent.error": "获取数据表内容时出错",
	"dataTable.addRow.label": "添加行",
	"dataTable.addRow.error": "添加行时出错",
	"dataTable.updateRow.error": "更新行时出错",
	"dataTable.deleteRows.title": "删除行",
	"dataTable.deleteRows.confirmation": "您确定要删除 {count} 行吗？ | 您确定要删除 {count} 行吗？",
	"dataTable.deleteRows.error": "删除行时出错",
	"dataTable.banner.storageLimitWarning.message": "数据表存储使用的{usage}。删除数据以避免错误。",
	"dataTable.banner.storageLimitError.message": "数据表存储的 {usage} 已满，操作可能会失败。请删除数据以避免错误。",
	"dataTable.error.tableNotInitialized": "表未初始化",
	"dataTable.noRows": "没有行",
	"dataTable.filters.isNull": "是空的",
	"dataTable.filters.isNotNull": "非空",
	"dataTable.filters.isEmpty": "是空的",
	"dataTable.filters.isNotEmpty": "不为空",
	"dataTable.filters.between": "之间",
	"dataTable.filters.true": "真的",
	"dataTable.filters.false": "错误",
	"dataTable.filters.greaterThan": "大于",
	"dataTable.filters.greaterThanOrEqual": "大于或等于",
	"dataTable.filters.lessThan": "小于",
	"dataTable.filters.lessThanOrEqual": "小于或等于",
	"dataTable.addColumn.systemColumnDescription": "这是一个系统列，请选择其他名称。",
	"dataTable.addColumn.alreadyExistsDescription": "列名已存在，请选择不同的名称",
	"dataTable.addColumn.testingColumnDescription": "此列用于测试，请选择其他名称。",
	"settings.ai": "人工智能使用",
	"settings.ai.description.both": "控制在使用 AI 助手和 AI 构建器 时 n8n 发送的内容",
	"settings.ai.description.assistantOnly": "管理 n8n 如何使用您的数据来改进我们的 AI 功能。这些设置仅适用于 <b>AI Assistant Chat</b> 功能。",
	"settings.ai.description.askAiOnly": "管理 n8n 如何使用您的数据来改进我们的 AI 功能。这些设置仅适用于 <b>在 Code 节点中向 AI 提问</b> 功能。",
	"settings.ai.button.tooltip": "人工智能使用设置",
	"settings.ai.allowSendingSchema.label": "发送字段名和字段类型（模式）",
	"settings.ai.allowSendingSchema.description": "允许 n8n 发送你数据中的键名及其类型。这有助于 AI 在不发送实际值的情况下理解你的数据结构。",
	"settings.ai.allowSendingParameterValues.label": "发送实际数据值",
	"settings.ai.allowSendingParameterValues.description": "允许 n8n 从你的执行中发送真实数值，这些数值可能包含敏感数据。关闭此选项会降低 AI 助手的准确性，并禁用 AI 工作流构建器。",
	"settings.ai.privacyNote.heading": "隐私说明：",
	"settings.ai.privacyNote.content": "您的数据将被安全处理，且不会用于训练我们的模型。这些设置将有助于提高 AI 的准确性并提供上下文相关的响应。您可以在此了解更多信息 <a href=\"{docsLink}\" target=\"_blank\">这里</a>。",
	"settings.ai.updated.success": "AI 设置已更新",
	"settings.ai.updated.error": "在更新 AI 设置时出现问题。",
	"settings.ai.confirm.title": "停止将数据发送给人工智能？",
	"settings.ai.confirm.message.builderDisabled": "禁用数据发送将降低 AI 功能的效果。您确定要继续吗？",
	"settings.ai.confirm.message.builderEnabled": "禁用数据发送将关闭 AI 工作流构建器，并降低 AI 功能的有效性。您确定要继续吗？",
	"settings.ai.confirm.confirmButtonText": "是的，禁用。",
	"dataTable.search.dateSearchInfo": "日期搜索使用 UTC 格式，而表格显示的是您本地时区的日期。",
	"dataTable.cell.oversized": "值太大，无法显示",
	"dataTable.cell.oversized.tooltip": "可以使用数据表节点来修改该值。",
	"settings.ldap": "LDAP",
	"settings.ldap.note": "LDAP 允许用户使用其集中式帐户进行身份验证。它与提供 LDAP 接口的服务（如 Active Directory、Okta 和 Jumpcloud）兼容。",
	"settings.ldap.infoTip": "在文档中了解有关 <a href='https://docs.n8n.io/user-management/ldap/' target='_blank'>LDAP 的更多信息</a>",
	"settings.ldap.save": "保存连接",
	"settings.ldap.connectionTestError": "测试 LDAP 连接时出现问题",
	"settings.ldap.connectionTest": "LDAP 连接已测试",
	"settings.ldap.runSync.title": "LDAP 同步已完成",
	"settings.ldap.runSync.showError.message": "同步期间出现问题。请检查日志",
	"settings.ldap.updateConfiguration": "LDAP 配置已更新",
	"settings.ldap.testingConnection": "正在测试连接",
	"settings.ldap.testConnection": "测试连接",
	"settings.ldap.synchronizationTable.column.status": "状态",
	"settings.ldap.synchronizationTable.column.endedAt": "结束时间",
	"settings.ldap.synchronizationTable.column.runMode": "运行模式",
	"settings.ldap.synchronizationTable.column.runTime": "运行时间",
	"settings.ldap.synchronizationTable.column.details": "详细信息",
	"settings.ldap.synchronizationTable.empty.message": "测试同步以预览更新",
	"settings.ldap.dryRun": "测试同步",
	"settings.ldap.synchronizeNow": "立即运行同步",
	"settings.ldap.synchronizationError": "LDAP 同步错误",
	"settings.ldap.configurationError": "LDAP 配置错误",
	"settings.ldap.usersScanned": "扫描的用户 {scanned}",
	"settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText": "否",
	"settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText": "是，禁用它",
	"settings.ldap.confirmMessage.beforeSaveForm.headline": "您确定要禁用 LDAP 登录吗？",
	"settings.ldap.confirmMessage.beforeSaveForm.message": "如果这样做，所有 LDAP 用户都将转换为电子邮件用户。",
	"settings.ldap.disabled.title": "在企业版计划中可用",
	"settings.ldap.disabled.description": "LDAP 作为付费功能提供。了解有关它的更多信息。",
	"settings.ldap.disabled.buttonText": "查看计划",
	"settings.ldap.toast.sync.success": "同步成功",
	"settings.ldap.toast.connection.success": "连接成功",
	"settings.ldap.form.loginEnabled.label": "启用 LDAP 登录",
	"settings.ldap.form.loginEnabled.tooltip": "如果禁用 LDAP 登录，连接设置和数据仍将保存",
	"settings.ldap.form.loginLabel.label": "LDAP 登录",
	"settings.ldap.form.loginLabel.placeholder": "例如：LDAP 用户名或电子邮件地址",
	"settings.ldap.form.loginLabel.infoText": "登录页面的登录字段中显示的占位符文本",
	"settings.ldap.form.serverAddress.label": "LDAP 服务器地址",
	"settings.ldap.form.serverAddress.placeholder": "123.123.123.123",
	"settings.ldap.form.serverAddress.infoText": "LDAP 服务器的 IP 或域",
	"settings.ldap.form.port.label": "LDAP 服务器端口",
	"settings.ldap.form.port.infoText": "用于连接到 LDAP 服务器的端口",
	"settings.ldap.form.connectionSecurity.label": "连接安全性",
	"settings.ldap.form.connectionSecurity.infoText": "连接安全类型",
	"settings.ldap.form.allowUnauthorizedCerts.label": "忽略 SSL/TLS 问题",
	"settings.ldap.form.baseDn.label": "Base DN",
	"settings.ldap.form.baseDn.placeholder": "o=acme,dc=example,dc=com",
	"settings.ldap.form.baseDn.infoText": "n8n 应在 AD/LDAP 树中开始搜索用户的位置的专有名称",
	"settings.ldap.form.bindingType.label": "绑定为",
	"settings.ldap.form.bindingType.infoText": "用于连接到 LDAP 服务器的绑定类型",
	"settings.ldap.form.adminDn.label": "绑定 DN",
	"settings.ldap.form.adminDn.placeholder": "uid=2da2de69435c,ou=Users,o=Acme,dc=com",
	"settings.ldap.form.adminDn.infoText": "执行搜索的用户的专有名称",
	"settings.ldap.form.adminPassword.label": "绑定密码",
	"settings.ldap.form.adminPassword.infoText": "在上述绑定 DN 字段中提供的用户的密码",
	"settings.ldap.form.userFilter.label": "用户筛选器",
	"settings.ldap.form.userFilter.placeholder": "(ObjectClass=user)",
	"settings.ldap.form.userFilter.infoText": "搜索用户时要使用的 LDAP 查询。只有此筛选器返回的用户才被允许登录 n8n",
	"settings.ldap.form.attributeMappingInfo.label": "属性映射",
	"settings.ldap.form.ldapId.label": "ID",
	"settings.ldap.form.ldapId.placeholder": "uid",
	"settings.ldap.form.ldapId.infoText": "LDAP 服务器中用作 n8n 中唯一标识符的属性。它应该是一个唯一的 LDAP 属性，如 uid",
	"settings.ldap.form.loginId.label": "登录 ID",
	"settings.ldap.form.loginId.placeholder": "mail",
	"settings.ldap.form.loginId.infoText": "LDAP 服务器中用于在 n8n 中登录的属性",
	"settings.ldap.form.email.label": "电子邮件",
	"settings.ldap.form.email.placeholder": "mail",
	"settings.ldap.form.email.infoText": "LDAP 服务器中用于填充 n8n 中的电子邮件的属性",
	"settings.ldap.form.firstName.label": "名字",
	"settings.ldap.form.firstName.placeholder": "givenName",
	"settings.ldap.form.firstName.infoText": "LDAP 服务器中用于填充 n8n 中的名字的属性",
	"settings.ldap.form.lastName.label": "姓氏",
	"settings.ldap.form.lastName.placeholder": "sn",
	"settings.ldap.form.lastName.infoText": "LDAP 服务器中用于填充 n8n 中的姓氏的属性",
	"settings.ldap.form.synchronizationEnabled.label": "启用定期 LDAP 同步",
	"settings.ldap.form.synchronizationEnabled.tooltip": "允许定期同步用户",
	"settings.ldap.form.synchronizationInterval.label": "同步间隔（分钟）",
	"settings.ldap.form.synchronizationInterval.infoText": "同步应运行的频率",
	"settings.ldap.form.pageSize.label": "页面大小",
	"settings.ldap.form.pageSize.infoText": "同步期间每页返回的最大记录数。0 表示不限制",
	"settings.ldap.form.searchTimeout.label": "搜索超时（秒）",
	"settings.ldap.form.searchTimeout.infoText": "对 AD/LDAP 服务器的查询的超时值。如果您因 AD/LDAP 服务器速度慢而收到超时错误，请增加此值",
	"settings.ldap.form.enforceEmailUniqueness.label": "强制邮箱唯一性",
	"settings.ldap.form.enforceEmailUniqueness.tooltip": "如果有多个 LDAP 账户使用相同的电子邮件地址，将阻止登录，从而阻止账户关联攻击。",
	"settings.ldap.section.synchronization.title": "同步",
	"settings.security": "安全",
	"settings.security.personalSpace.title": "个人空间",
	"settings.security.personalSpace.publishing.title": "发布工作流",
	"settings.security.personalSpace.publishing.description": "允许用户从个人空间发布工作流。",
	"settings.security.personalSpace.publishing.success.enabled": "工作流发布已启用",
	"settings.security.personalSpace.publishing.success.disabled": "工作流发布已禁用",
	"settings.security.personalSpace.publishing.error": "更新发布设置失败",
	"settings.security.personalSpace.publishing.confirmMessage.disable.headline": "您确定要禁用发布个人工作流吗？",
	"settings.security.personalSpace.publishing.confirmMessage.disable.message": "这将阻止今后在个人空间中进行的所有发布操作。当前已发布的工作流将保持已发布状态。",
	"settings.sso": "SSO",
	"settings.sso.title": "单点登录",
	"settings.sso.subtitle": "SAML 2.0 配置",
	"settings.sso.info": "激活 SAML SSO 以通过您现有的用户管理工具启用无密码登录，并通过统一身份验证增强安全性。",
	"settings.sso.info.link": "了解如何配置 SAML 2.0。",
	"settings.sso.activated": "已激活",
	"settings.sso.settings.redirectUrl.label": "重定向 URL",
	"settings.sso.settings.redirectUrl.copied": "重定向 URL 已复制到剪贴板",
	"settings.sso.settings.redirectUrl.help": "复制重定向 URL 以配置您的 SAML 提供商",
	"settings.sso.settings.entityId.label": "实体 ID",
	"settings.sso.settings.entityId.copied": "实体 ID 已复制到剪贴板",
	"settings.sso.settings.entityId.help": "复制实体 ID URL 以配置您的 SAML 提供商",
	"settings.sso.settings.ips.label": "身份提供商设置",
	"settings.sso.settings.ips.xml.help": "在此处粘贴您的身份提供商提供的原始元数据 XML",
	"settings.sso.settings.ips.url.help": "在此处粘贴身份提供商元数据URL",
	"settings.sso.settings.ips.url.placeholder": "例如：https://samltest.id/saml/idp",
	"settings.sso.settings.ips.url.invalid": "身份提供者元数据URL无效",
	"settings.sso.settings.ips.options.url": "元数据 URL",
	"settings.sso.settings.ips.options.xml": "XML",
	"settings.sso.settings.oidc.prompt.none": "无（静默认证）",
	"settings.sso.settings.oidc.prompt.login": "登录（强制用户登录）",
	"settings.sso.settings.oidc.prompt.consent": "同意（请用户同意）",
	"settings.sso.settings.oidc.prompt.select_account": "选择账户 (允许用户选择一个账户)",
	"settings.sso.settings.oidc.prompt.create": "创建（请OP先展示注册页面）",
	"settings.sso.settings.userRoleProvisioning.label": "用户角色配置",
	"settings.sso.settings.userRoleProvisioning.help": "从您的单点登录提供商管理实例和项目角色。",
	"settings.sso.settings.userRoleProvisioning.help.linkText": "文档链接",
	"settings.sso.settings.userRoleProvisioning.option.disabled.label": "在 n8n 中托管",
	"settings.sso.settings.userRoleProvisioning.option.instanceRole.label": "实例角色",
	"settings.sso.settings.userRoleProvisioning.option.instanceAndProjectRoles.label": "实例和项目角色",
	"settings.sso.settings.test": "测试设置",
	"settings.sso.settings.save": "保存设置",
	"settings.sso.settings.save.testConnection.title": "测试并启用 SAML SSO",
	"settings.sso.settings.save.testConnection.message": "您即将通过 SAML 启用单点登录（SSO）。在继续之前，请先测试您的 SAML SSO 设置。",
	"settings.sso.settings.save.testConnection.test": "测试设置",
	"settings.sso.settings.save.confirmTestConnection.title": "确认连接测试成功",
	"settings.sso.settings.save.confirmTestConnection.message": "连接测试是否成功？请确认通过 SAML 启用单点登录（SSO）。",
	"settings.sso.settings.save.confirmTestConnection.confirm": "确认",
	"settings.sso.settings.save.activate.cancel": "取消",
	"settings.sso.settings.save.error": "保存 SAML SSO 配置时出错",
	"settings.sso.settings.save.error_oidc": "保存 OIDC SSO 配置时出错",
	"settings.sso.actionBox.title": "在企业版计划中可用",
	"settings.sso.actionBox.description": "使用单点登录将身份验证整合到单个平台中，以提高安全性和敏捷性。",
	"settings.sso.actionBox.buttonText": "查看计划",
	"settings.sso.confirmMessage.beforeSaveForm.headline": "您确定要禁用 {protocol} 登录吗？",
	"settings.sso.confirmMessage.beforeSaveForm.message": "如果你这样做，所有 {protocol} 用户将被转换为电子邮件用户。",
	"settings.mfa.secret": "密钥 {secret}",
	"settings.mfa": "MFA",
	"settings.mfa.title": "多因素身份验证",
	"settings.mfa.updateConfiguration": "MFA 配置已更新",
	"settings.mfa.invalidAuthenticatorCode": "验证器代码无效",
	"projects.header.overview.subtitle": "您有权访问的所有工作流程、凭证及执行记录",
	"projects.header.overview.subtitleWithDataTables": "您可以访问的所有工作流、凭据和数据表。",
	"projects.header.shared.title": "与你分享",
	"projects.header.personal.subtitle": "您拥有的工作流程和凭证",
	"projects.header.personal.subtitleWithDataTables": "由您拥有的工作流、凭证和数据表",
	"projects.header.shared.subtitle": "其他用户与你共享的工作流程和凭证",
	"projects.header.create.workflow": "创建工作流",
	"projects.header.create.credential": "创建凭据",
	"projects.header.create.folder": "创建文件夹",
	"projects.create": "创建",
	"projects.create.personal": "在个人中创建",
	"projects.create.team": "在项目中创建",
	"projects.menu.overview": "概述",
	"projects.menu.shared": "分享给你",
	"projects.menu.title": "项目",
	"projects.menu.personal": "个人",
	"projects.menu.addFirstProject": "添加第一个项目",
	"projects.menu.chat": "聊天",
	"projects.settings": "项目设置",
	"projects.settings.info": "项目信息",
	"projects.settings.newProjectName": "我的项目",
	"projects.settings.iconPicker.button.tooltip": "选择项目图标",
	"projects.settings.name": "图标和名称",
	"projects.settings.description": "描述",
	"projects.settings.projectMembers": "项目成员",
	"projects.settings.danger.message": "删除项目时，您还可以选择将所有工作流和凭据移动到另一个项目。",
	"projects.settings.danger.title": "危险区域",
	"projects.settings.danger.deleteProject": "删除此项目",
	"projects.settings.button.save": "@:_reusableBaseText.save",
	"projects.settings.button.cancel": "@:_reusableBaseText.cancel",
	"projects.settings.button.deleteProject": "删除项目",
	"projects.settings.role.admin": "@:_reusableBaseText.roles.admin",
	"projects.settings.role.editor": "@:_reusableBaseText.roles.editor",
	"projects.settings.role.viewer": "@:_reusableBaseText.roles.viewer",
	"projects.settings.delete.title": "删除 {projectName}",
	"projects.settings.delete.message": "我们应该如何处理项目数据？",
	"projects.settings.delete.message.empty": "该项目中没有工作流、凭据或数据表。",
	"projects.settings.delete.question.transfer.label": "将其工作流、凭据和数据表转移到另一个项目或用户。",
	"projects.settings.delete.question.transfer.title": "要转移到的项目或用户",
	"projects.settings.delete.question.wipe.label": "删除其工作流、凭据和数据表。",
	"projects.settings.delete.question.wipe.title": "键入“删除所有数据”以确认",
	"projects.settings.delete.question.wipe.placeholder": "删除所有数据",
	"projects.settings.delete.confirm": "是的，我确定",
	"projects.settings.delete.cancel": "否，取消",
	"projects.settings.delete.successful.title": "已删除项目 {projectName}",
	"projects.settings.delete.error.title": "删除项目时发生错误",
	"projects.settings.save.successful.title": "项目 {projectName} 已成功保存",
	"projects.settings.icon.update.successful.title": "项目图标已成功更新",
	"projects.settings.save.error.title": "保存项目时发生错误",
	"projects.settings.role.upgrade.title": "升级以解锁其他角色",
	"projects.settings.role.upgrade.message": "您目前在 {planName} 计划中仅限于 {limit} 个角色，并且只能在此项目中向用户分配管理员角色。要创建更多项目并解锁其他角色，请升级您的计划。",
	"projects.settings.role.upgrade.tooltip": "升级到专业版或企业版以分配编辑者和查看者角色",
	"projects.settings.table.header.user": "@:_reusableBaseText.user",
	"projects.settings.table.header.role": "@:_reusableBaseText.role",
	"projects.settings.table.row.removeUser": "删除用户",
	"projects.settings.role.admin.description": "可以编辑工作流程、凭证和项目设置。",
	"projects.settings.role.editor.description": "可以编辑工作流和凭据",
	"projects.settings.role.viewer.description": "可以查看工作流程和执行情况",
	"projects.settings.role.personalOwner": "所有者",
	"projects.settings.members.search.placeholder": "搜索成员...",
	"projects.settings.memberRole.updated.title": "成员角色更新成功",
	"projects.settings.memberRole.update.error.title": "更新会员角色时出现错误",
	"projects.settings.member.removed.title": "成员已成功移除",
	"projects.settings.member.remove.error.title": "移除成员时发生错误",
	"projects.settings.member.added.title": "成员添加成功",
	"projects.settings.users.search.error": "在搜索用户时发生了错误",
	"projects.sharing.allUsers": "所有用户和项目",
	"projects.sharing.noMatchingProjects": "没有可用的项目",
	"projects.sharing.noMatchingUsers": "没有匹配的用户或项目",
	"projects.sharing.select.placeholder": "选择项目或用户",
	"projects.sharing.select.placeholder.user": "与用户共享",
	"projects.sharing.select.placeholder.project": "与项目或用户共享",
	"projects.error.title": "项目错误",
	"projects.create.limit": "{num} 个项目 | {num} 个项目",
	"projects.create.limitReached": "您已达到 {planName} 计划的 {limit} 限制。升级您的计划以解锁更多项目。{link}",
	"projects.create.limitReached.cloud": "您已达到 {planName} 计划的 {limit} 限制。升级您的计划以解锁更多项目。",
	"projects.create.limitReached.self": "升级以解锁项目，从而更精细地控制工作流的共享、访问和组织",
	"projects.create.limitReached.link": "查看计划",
	"projects.create.permissionDenied": "您当前的权限不允许创建项目",
	"projects.move.resource.modal.title": "选择一个项目或用户以将此 {resourceTypeLabel} 移动到",
	"projects.move.resource.modal.message": "“{resourceName}”当前{inPersonalProject}{inTeamProject}",
	"projects.move.resource.modal.message.team": "位于“{resourceHomeProjectName}”项目中。",
	"projects.move.resource.modal.message.personal": "由“{resourceHomeProjectName}”拥有。",
	"projects.move.resource.modal.message.note": "备注",
	"projects.move.resource.modal.message.sharingNote": "{note}：移动将删除此 {resourceTypeLabel} 的任何现有共享。",
	"projects.move.resource.modal.message.sharingInfo": "（当前与 {numberOfProjects} 个项目共享）|（当前与 {numberOfProjects} 个项目共享）",
	"projects.move.resource.modal.message.usedCredentials": "同时请分享此工作流所使用的{usedCredentials}，以确保其能够持续正常运行。",
	"projects.move.resource.modal.message.usedCredentials.number": "{count} 个凭证 | {count} 个凭证",
	"projects.move.resource.modal.message.unAccessibleCredentials": "一些凭证",
	"projects.move.resource.modal.message.unAccessibleCredentials.note": "此工作流中使用的{credentials}将不会被共享",
	"projects.move.resource.modal.message.noProjects": "当前没有任何项目或用户可供您将此 {resourceTypeLabel} 移动到。",
	"projects.move.resource.modal.button": "移动 {resourceTypeLabel}",
	"projects.move.resource.modal.selectPlaceholder": "选择项目或用户...",
	"projects.move.resource.error.title": "移动 {resourceName} {resourceTypeLabel} 时出错",
	"projects.move.resource.success.title": "{resourceTypeLabel} 已成功移动",
	"projects.move.resource.success.message.workflow": "请仔细检查此工作流使用的任何凭据是否也与 {targetProjectName} 共享。",
	"projects.move.resource.success.message.workflow.withAllCredentials": "该工作流的凭证已与项目共享。",
	"projects.move.resource.success.message.workflow.withSomeCredentials": "由于权限不足，未能将该工作流程的所有凭证共享至项目。",
	"projects.move.resource.success.link": "查看 {targetProjectName}",
	"projects.badge.global": "全局",
	"projects.badge.tooltip.global": "此 {resourceTypeLabel} 已全局共享给所有用户和项目。",
	"projects.badge.tooltip.sharedOwned": "此 {resourceTypeLabel} 由您拥有并与 {count} 个用户共享",
	"projects.badge.tooltip.sharedPersonal": "此 {resourceTypeLabel} 由 {name} 拥有并与 {count} 个用户共享",
	"projects.badge.tooltip.personal": "此 {resourceTypeLabel} 由 {name} 拥有",
	"projects.badge.tooltip.team": "此 {resourceTypeLabel} 由 {name} 项目拥有并可访问。",
	"projects.badge.tooltip.sharedTeam": "此 {resourceTypeLabel} 由 {name} 项目拥有，并且可由 {count} 个用户访问",
	"mfa.setup.invalidAuthenticatorCode": "{code} 不是有效的数字",
	"mfa.setup.invalidCode": "双因素代码失败。请重试。",
	"mfa.code.modal.title": "双因素身份验证",
	"mfa.recovery.modal.title": "双因素恢复",
	"mfa.code.input.info": "没有您的身份验证设备？",
	"mfa.code.input.info.action": "输入恢复代码",
	"mfa.recovery.input.info.action": "输入恢复代码",
	"mfa.code.button.continue": "继续",
	"mfa.recovery.button.verify": "验证",
	"mfa.button.back": "返回",
	"mfa.code.input.label": "双因素代码",
	"mfa.code.input.placeholder": "例如：123456",
	"mfa.code.recovery.input.label": "双因素代码或恢复代码",
	"mfa.code.recovery.input.placeholder": "例如：123456 或 c79f9c02-7b2e-44...",
	"mfa.recovery.input.label": "恢复代码",
	"mfa.recovery.input.placeholder": "例如：c79f9c02-7b2e-44...",
	"mfa.code.invalid": "此代码无效，请重试或",
	"mfa.recovery.invalid": "此代码无效或已使用，请重试",
	"mfa.setup.step1.title": "设置验证器应用 [1/2]",
	"mfa.setup.step2.title": "下载您的恢复代码 [2/2]",
	"mfa.setup.step1.instruction1.title": "1. 扫描二维码",
	"mfa.setup.step1.instruction1.subtitle": "{part1} {part2}",
	"mfa.setup.step1.instruction1.subtitle.part1": "使用手机中的验证器应用进行扫描。如果您无法扫描二维码，请输入",
	"mfa.setup.step1.instruction1.subtitle.part2": "此文本代码",
	"mfa.setup.step1.instruction2.title": "2. 输入应用中的代码",
	"mfa.setup.step2.description": "如果无法访问您的设备，则可以使用恢复代码作为辅助身份验证因素。",
	"mfa.setup.step2.infobox.description": "{part1} {part2}",
	"mfa.setup.step2.infobox.description.part1": "请将恢复代码保存在安全的地方。如果您丢失了您的设备和恢复代码，您将",
	"mfa.setup.step2.infobox.description.part2": "无法访问您的帐户。",
	"mfa.setup.step2.button.download": "下载恢复代码",
	"mfa.setup.step2.button.save": "我已下载我的恢复代码",
	"mfa.setup.step1.button.continue": "继续",
	"mfa.setup.step1.input.label": "来自验证器应用的代码",
	"mfa.setup.step1.toast.copyToClipboard.title": "代码已复制到剪贴板",
	"mfa.setup.step1.toast.copyToClipboard.message": "在您的验证器应用中输入代码",
	"mfa.setup.step2.toast.setupFinished.message": "已启用双因素身份验证",
	"mfa.setup.step2.toast.setupFinished.error.message": "启用双因素身份验证时出错",
	"mfa.setup.step2.toast.tokenExpired.error.message": "MFA 令牌已过期。关闭模式，然后再次启用 MFA",
	"mfa.prompt.code.modal.title": "需要双因素代码或恢复代码",
	"settings.personal.mfa.section.title": "双因素身份验证 (2FA)",
	"settings.personal.personalisation": "个性化",
	"settings.personal.theme": "主题",
	"settings.personal.theme.systemDefault": "系统默认",
	"settings.personal.theme.light": "浅色主题",
	"settings.personal.theme.dark": "深色主题",
	"settings.personal.mfa.button.disabled.infobox": "双因素身份验证当前已禁用。",
	"settings.personal.mfa.button.enabled.infobox": "双因素身份验证当前已启用。",
	"settings.personal.mfa.button.enabled": "启用 2FA",
	"settings.personal.mfa.button.disabled": "禁用双因素身份验证",
	"settings.personal.mfa.toast.disabledMfa.title": "双因素身份验证已禁用",
	"settings.personal.mfa.toast.disabledMfa.message": "您将不再需要在登录时使用验证器应用",
	"settings.personal.mfa.toast.disabledMfa.error.message": "禁用双因素身份验证时出错",
	"settings.personal.mfa.toast.canEnableMfa.title": "MFA 先决条件失败",
	"settings.personal.mfa.enforced": "此实例的设置**要求您设置双重身份验证**。请启用它以继续在此实例中工作。",
	"settings.personal.mfa.enforce.message": "为该实例上的所有用户强制实施双因素身份验证（2FA），使用电子邮件和密码登录进行身份验证。",
	"settings.personal.mfa.enforce.unlicensed_tooltip": "当您升级您的计划时，您可以对在此实例上使用电子邮件和密码登录的所有用户强制实施双重认证（2FA）。{action}",
	"settings.personal.mfa.enforce.unlicensed_tooltip.link": "查看方案",
	"settings.personal.mfa.enforce.title": "强制双因素身份验证",
	"settings.personal.mfa.enforce.error": "无法强制所有用户启用双重认证。",
	"settings.personal.mfa.enforce.enabled.title": "双重认证已启用",
	"settings.personal.mfa.enforce.enabled.message": "现在所有使用电子邮件和密码登录的用户在此实例上都必须启用双重身份验证。",
	"settings.personal.mfa.enforce.disabled.title": "双因素身份验证不再强制启用",
	"settings.personal.mfa.enforce.disabled.message": "对于在此实例中使用电子邮件和密码登录的用户，双因素身份验证不再是强制性的。",
	"settings.mfa.toast.noRecoveryCodeLeft.title": "没有剩余的 2FA 恢复代码",
	"settings.mfa.toast.noRecoveryCodeLeft.message": "您已使用所有恢复代码。禁用然后重新启用双因素身份验证以生成新代码。<a href='/settings/personal' target='_blank' >打开设置</a>",
	"sso.login.divider": "或",
	"sso.login.button": "继续使用 SSO",
	"executionUsage.currentUsage": "{text} {count}",
	"executionUsage.currentUsage.text": "您正在免费试用，执行次数有限。您有",
	"executionUsage.currentUsage.count": "{n} 天剩余。| {n} 天剩余。",
	"executionUsage.label.executions": "执行",
	"executionUsage.button.upgrade": "升级计划",
	"executionUsage.expired.text": "您的试用已结束。立即升级以保留您的数据。",
	"executionUsage.ranOutOfExecutions.text": "您的执行次数已用完。升级您的计划以继续自动化。",
	"openExecution.missingExeuctionId.title": "找不到执行",
	"openExecution.missingExeuctionId.message": "请确保此工作流通过设置保存执行",
	"type.string": "字符串",
	"type.number": "数字",
	"type.dateTime": "日期和时间",
	"type.boolean": "布尔值",
	"type.array": "数组",
	"type.object": "对象",
	"type.binary": "二进制数据",
	"filter.operator.equals": "等于",
	"filter.operator.notEquals": "不等于",
	"filter.operator.contains": "包含",
	"filter.operator.notContains": "不包含",
	"filter.operator.startsWith": "以开头",
	"filter.operator.notStartsWith": "不以开头",
	"filter.operator.endsWith": "以结尾",
	"filter.operator.notEndsWith": "不以结尾",
	"filter.operator.exists": "存在",
	"filter.operator.notExists": "不存在",
	"filter.operator.regex": "匹配正则表达式",
	"filter.operator.notRegex": "不匹配正则表达式",
	"filter.operator.gt": "大于",
	"filter.operator.lt": "小于",
	"filter.operator.gte": "大于或等于",
	"filter.operator.lte": "小于或等于",
	"filter.operator.after": "在之后",
	"filter.operator.before": "在之前",
	"filter.operator.afterOrEquals": "在之后或等于",
	"filter.operator.beforeOrEquals": "在之前或等于",
	"filter.operator.true": "为真",
	"filter.operator.false": "为假",
	"filter.operator.lengthEquals": "长度等于",
	"filter.operator.lengthNotEquals": "长度不等于",
	"filter.operator.lengthGt": "长度大于",
	"filter.operator.lengthLt": "长度小于",
	"filter.operator.lengthGte": "长度大于或等于",
	"filter.operator.lengthLte": "长度小于或等于",
	"filter.operator.empty": "为空",
	"filter.operator.notEmpty": "不为空",
	"filter.combinator.or": "或",
	"filter.combinator.and": "与",
	"filter.addCondition": "添加条件",
	"filter.removeCondition": "删除条件",
	"filter.dragCondition": "拖动条件",
	"filter.maxConditions": "已达到最大条件数",
	"filter.condition.resolvedTrue": "此条件对于第一项输入项为真",
	"filter.condition.resolvedFalse": "此条件对于第一项输入项为假",
	"filter.condition.placeholderLeft": "值1",
	"filter.condition.placeholderRight": "值2",
	"assignment.dragFields": "在此处拖动输入字段",
	"assignment.dropField": "拖放到此处以添加字段",
	"assignment.or": "或",
	"assignment.add": "添加字段",
	"assignment.addAll": "添加全部",
	"assignment.clearAll": "清除全部",
	"assignment.binaryData.placeholder": "二进制输入的名称（或引用它的表达式）",
	"assignment.field": "字段 {number}",
	"assignment.remove": "删除字段",
	"assignment.dragToReorder": "拖动以重新排序",
	"templateSetup.title": "设置“{name}”模板",
	"templateSetup.instructions": "您需要 {0} 个帐户才能设置此模板",
	"templateSetup.instructions.builder": "您需要{0}个账户来设置此工作流。",
	"templateSetup.skip": "跳过",
	"templateSetup.continue.button": "继续",
	"templateSetup.credential.description": "您选择的凭据将用于工作流模板的 {0} 节点中。| 您选择的凭据将用于工作流模板的 {0} 个节点中。",
	"templateSetup.credential.description.builder": "您选择的凭据将用于此工作流中的 {0} 节点。 | 您选择的凭据将用于此工作流中的 {0} 个节点。",
	"templateSetup.continue.button.fillRemaining": "填写剩余凭据以继续",
	"setupCredentialsModal.title": "设置模板",
	"setupCredentialsModal.title.builder": "设置凭据",
	"becomeCreator.text": "与 40,000 多名用户共享您的工作流，解锁特权，并成为精选模板创建者！",
	"becomeCreator.buttonText": "成为创建者",
	"becomeCreator.closeButtonTitle": "关闭",
	"feedback.title": "这是否有帮助？",
	"feedback.positive": "我觉得这有帮助",
	"feedback.negative": "我觉得这没有帮助",
	"communityPlusModal.badge": "限时优惠",
	"communityPlusModal.title": "免费获得付费功能（永久）",
	"communityPlusModal.error.title": "许可证请求失败",
	"communityPlusModal.success.title": "请求已发送",
	"communityPlusModal.success.message": "许可证密钥将发送至 {email}",
	"communityPlusModal.description": "接收用于以下高级功能的免费激活密钥 - 终身访问权限。",
	"communityPlusModal.features.debugging.title": "高级调试",
	"communityPlusModal.features.debugging.description": "轻松修复任何出错的工作流执行，然后重新运行它。",
	"communityPlusModal.features.execution.title": "执行搜索与标记",
	"communityPlusModal.features.execution.description": "搜索并整理过去的工作流执行记录，便于审阅",
	"communityPlusModal.features.folders.title": "文件夹",
	"communityPlusModal.features.folders.description": "在嵌套的文件夹结构中组织你的工作流。",
	"communityPlusModal.input.email.label": "输入电子邮件以接收您的许可证密钥",
	"communityPlusModal.button.skip": "跳过",
	"communityPlusModal.button.confirm": "向我发送免费许可证密钥",
	"communityPlusModal.notice": "所含功能可能发生变化，但一经解锁，即可永久保留。",
	"executeWorkflowTrigger.createNewSubworkflow": "在 {projectName} 中创建子工作流",
	"executeWorkflowTrigger.createNewSubworkflow.noProject": "创建新的子工作流",
	"evaluation.listRuns.status.new": "新",
	"evaluation.listRuns.status.running": "跑步",
	"evaluation.listRuns.status.evaluating": "评估",
	"evaluation.listRuns.status.completed": "已完成",
	"evaluation.listRuns.status.cancelled": "已取消",
	"evaluation.listRuns.status.error": "错误",
	"evaluation.listRuns.status.success": "成功",
	"evaluation.listRuns.status.warning": "警告",
	"evaluation.listRuns.metricsOverTime": "随时间变化的指标",
	"evaluation.listRuns.status": "状态",
	"evaluation.listRuns.runListHeader": "所有运行",
	"evaluation.listRuns.allTestCases": "所有测试用例 | 所有测试用例 ({count})",
	"evaluation.listRuns.testCasesListHeader": "运行 #{index}",
	"evaluation.listRuns.runNumber": "跑",
	"evaluation.listRuns.runDate": "运行日期",
	"evaluation.listRuns.runStatus": "运行状态",
	"evaluation.listRuns.noRuns": "没有试运行",
	"evaluation.listRuns.pastRuns.total": "无得分 | 全部得分 | 所有得分",
	"evaluation.listRuns.noRuns.description": "在这里运行测试以查看结果",
	"evaluation.listRuns.deleteRuns": "没有可删除的运行记录 | 删除{count}条运行记录 | 删除{count}条运行记录",
	"evaluation.listRuns.noRuns.button": "运行测试",
	"evaluation.listRuns.toast.error.fetchTestCases": "未能载入运行详情",
	"evaluation.listRuns.error.testCasesNotFound": "数据集中无匹配行{description}",
	"evaluation.listRuns.error.testCasesNotFound.description": "检查评估触发器中设置的任何筛选器或限制",
	"evaluation.listRuns.error.executionInterrupted": "测试运行被中断",
	"evaluation.listRuns.error.unknownError": "执行错误{description}",
	"evaluation.listRuns.error.cantFetchTestRuns": "无法获取测试运行",
	"evaluation.listRuns.error.cantStartTestRun": "未能启动测试运行",
	"evaluation.listRuns.error.cantStopTestRun": "无法停止测试运行",
	"evaluation.listRuns.error.unknownError.description": "点击查看更多详情",
	"evaluation.listRuns.error.evaluationTriggerNotFound": "评估触发器缺失",
	"evaluation.listRuns.error.evaluationTriggerNotConfigured": "评估触发器未配置",
	"evaluation.listRuns.error.evaluationTriggerDisabled": "评估触发器已禁用",
	"evaluation.listRuns.error.setOutputsNodeNotConfigured": "“设置输出”节点未配置",
	"evaluation.listRuns.error.setMetricsNodeNotFound": "工作流中没有“设置指标”节点",
	"evaluation.listRuns.error.setMetricsNodeNotConfigured": "“设置指标”节点未配置",
	"evaluation.listRuns.error.cantFetchTestCases": "无法获取测试案例{description}",
	"evaluation.listRuns.error.cantFetchTestCases.description": "检查评估触发器中的Google表格设置",
	"evaluation.runDetail.ranAt": "跑了",
	"evaluation.runDetail.testCase": "测试用例",
	"evaluation.runDetail.testCase.id": "测试用例编号",
	"evaluation.runDetail.testCase.status": "测试用例状态",
	"evaluation.runDetail.totalCases": "总病例数",
	"evaluation.runDetail.error.mockedNodeMissing": "基准测试执行中未找到模拟节点的输出结果。{link}",
	"evaluation.runDetail.error.mockedNodeMissing.solution": "修复测试配置",
	"evaluation.runDetail.error.executionFailed": "工作流执行失败",
	"evaluation.runDetail.error.executionFailed.solution": "查看执行",
	"evaluation.runDetail.error.datasetTriggerNotFound": "工作流中不存在数据集触发器。{link}",
	"evaluation.runDetail.error.datasetTriggerNotFound.solution": "查看工作流程",
	"evaluation.runDetail.error.invalidMetrics": "评估指标节点返回了无效的指标值。仅允许数值类型数据。请查看工作流程。{link}。",
	"evaluation.runDetail.error.invalidMetrics.solution": "查看工作流程",
	"evaluation.runDetail.error.unknownError": "发生未知错误",
	"evaluation.runDetail.error.unknownError.solution": "查看执行",
	"evaluation.runDetail.error.noMetricsCollected": "未执行“设置指标”节点",
	"evaluation.runDetail.error.partialCasesFailed": "完成但有错误",
	"evaluation.runDetail.notice.useSetInputs": "提示：通过将评估节点的“设置输入”操作添加到您的工作流中，在这里显示您的数据集的输入列。",
	"evaluation.runTest": "运行测试",
	"evaluation.stopTest": "停止测试",
	"evaluation.cancelTestRun": "取消测试运行",
	"evaluation.notImplemented": "该功能尚未实现!",
	"evaluation.viewDetails": "查看详情",
	"evaluation.editTest": "编辑测试",
	"evaluation.deleteTest": "删除测试",
	"evaluation.deleteTest.warning": "测试及所有相关运行记录将被删除。此操作不可撤销。",
	"evaluation.testIsRunning": "测试正在运行。请等待其完成。",
	"evaluation.completeConfig": "请完成以下配置以运行测试：",
	"evaluation.configError.noEvaluationTag": "没有设定评估标签",
	"evaluation.configError.noExecutionsAddedToTag": "此标签下未添加任何执行",
	"evaluation.configError.noEvaluationWorkflow": "无评估流程设置",
	"evaluation.configError.noMetrics": "未设置指标",
	"evaluation.workflowInput.subworkflowName": "{name}的评估流程",
	"evaluation.workflowInput.subworkflowName.default": "我的评估子流程",
	"evaluation.executions.addTo": "添加到测试",
	"evaluation.executions.addTo.new": "添加到测试",
	"evaluation.executions.addTo.existing": "添加到“{name}”",
	"evaluation.executions.addedTo": "已添加到“{name}”",
	"evaluation.executions.removeFrom": "从\"{{name}}\"中移除",
	"evaluation.executions.removedFrom": "执行已从“{name}”中移除",
	"evaluation.executions.toast.addedTo": "返回至“{name}”",
	"evaluation.executions.tooltip.addTo": "添加到新测试",
	"evaluation.executions.tooltip.noExecutions": "评估执行无法添加到测试中",
	"evaluation.executions.tooltip.onlySuccess": "只有成功执行的（案例）才能被加入测试",
	"evaluation.workflow.createNew": "创建新的评估流程",
	"evaluation.workflow.createNew.or": "或使用现有的评估子工作流程",
	"evaluation.executions.toast.addedTo.title": "测试中添加了执行",
	"evaluation.executions.toast.closeTab": "关闭此标签页",
	"evaluation.executions.toast.removedFrom.title": "测试中移除了执行",
	"evaluations.readOnlyNotice": "评估无法在只读模式下构建。请在您的开发环境中构建评估。",
	"evaluations.paywall.title": "注册以启用评估",
	"evaluations.paywall.description": "注册您的社区实例以解锁评估功能",
	"evaluations.paywall.cta": "注册实例",
	"evaluations.setupWizard.title": "测试您的AI工作流程在多种输入下的表现",
	"evaluations.setupWizard.description": "评估通过测试数据集来衡量性能表现。",
	"evaluations.setupWizard.moreInfo": "更多信息",
	"evaluations.setupWizard.stepHeader.optional": "可选",
	"evaluations.setupWizard.step1.title": "连接一个测试数据集",
	"evaluations.setupWizard.step1.item1": "创建一个数据表或谷歌表格，每行一个输入",
	"evaluations.setupWizard.step1.item2": "为你的工作流程添加一个评估触发器并接入系统",
	"evaluations.setupWizard.step1.button": "添加评估触发器",
	"evaluations.setupWizard.step2.title": "将工作流输出写回数据集",
	"evaluations.setupWizard.step2.item1": "添加一个“设置输出”操作，将每个输出记录回您的表中。",
	"evaluations.setupWizard.step2.button": "添加“设置输出”节点",
	"evaluations.setupWizard.step3.title": "设置质量评分",
	"evaluations.setupWizard.step3.item1": "计算一个分数，例如通过比较预期输出与实际输出",
	"evaluations.setupWizard.step3.item2": "添加“设置指标”操作以记录分数",
	"evaluations.setupWizard.step3.button": "添加“设置指标”节点",
	"evaluations.setupWizard.step3.skip": "跳过",
	"evaluations.setupWizard.step3.notice": "您的计划仅支持单个工作流程的自定义指标。{link}",
	"evaluations.setupWizard.step3.notice.link": "查看计划",
	"evaluations.setupWizard.step4.title": "运行评估",
	"evaluations.setupWizard.step4.button": "运行评估",
	"evaluations.setupWizard.step4.altButton": "在编辑器中运行",
	"evaluations.setupWizard.limitReached": "已达到限制。您的计划仅支持为一个工作流程设置自定义指标。如需无限制使用，请升级计划，或删除已有评估运行的工作流程。",
	"freeAi.credits.callout.claim.title": "获取 {credits} 个免费 OpenAI API 积分",
	"freeAi.credits.callout.claim.button.label": "申领积分",
	"freeAi.credits.callout.success.title.part1": "已领取 {credits} 个免费OpenAI API额度！请注意这些免费额度仅适用于以下模型：",
	"freeAi.credits.callout.success.title.part2": "gpt-5-mini、gpt-4.1-mini、gpt-4.1-nano、gpt-4o-mini、text-embedding-3-small、dall-e-3、tts-1、whisper-1，以及text-moderation-latest",
	"freeAi.credits.callout.success.chatHub.beginning": "我们已经给了你",
	"freeAi.credits.callout.success.chatHub.credits": "{amount} 免费的 OpenAI API 积分",
	"freeAi.credits.callout.success.chatHub.end": "开始使用",
	"freeAi.credits.credentials.edit": "这是一个托管的凭据，无法编辑。",
	"freeAi.credits.showError.claim.title": "免费 AI 积分",
	"freeAi.credits.showError.claim.message": "启用以申领积分",
	"freeAi.credits.showWarning.workflow.activation.title": "你正在使用免费的OpenAI API积分",
	"freeAi.credits.showWarning.workflow.activation.description": "为确保您的工作流程今后顺畅运行，请将免费的OpenAI API额度替换为您个人的API密钥。",
	"insights.heading": "洞察",
	"insights.lastNDays": "过去 {count} 天",
	"insights.lastNHours": "最近 {count} 小时",
	"insights.months": "{count} 个月",
	"insights.oneYear": "一年",
	"insights.banner.timeSaved.tooltip": "尚无可用估算。要查看可能节省的时间，请从工作流设置中{link}每个工作流。",
	"insights.banner.timeSaved.tooltip.link.text": "添加时间估算",
	"insights.banner.noData.tooltip": "手动执行不计入统计。升级后数据最长可能需要24小时才能更新完成。{link}",
	"insights.banner.noData.tooltip.link": "了解更多",
	"insights.banner.noData.tooltip.link.url": "https://docs.n8n.io/insights/",
	"insights.banner.title.total": "产品执行",
	"insights.banner.title.failed": "生产执行失败",
	"insights.banner.title.failureRate": "故障率",
	"insights.banner.title.timeSaved": "节省的时间",
	"insights.banner.title.timeSavedDailyAverage": "日均节省时间",
	"insights.banner.title.averageRunTime": "平均运行时间",
	"insights.dashboard.table.projectName": "项目名称",
	"insights.dashboard.table.title": "按工作流细分",
	"insights.dashboard.table.estimate": "估计",
	"insights.dashboard.title": "洞察",
	"insights.dashboard.search.placeholder": "所有项目",
	"insights.dashboard.paywall.title": "升级以获取更详细的分析",
	"insights.dashboard.paywall.description": "获取更精细化的、按工作流程划分的洞察，以及不同时间段内生产执行情况的直观分解。",
	"insights.banner.title.timeSaved.tooltip": "根据所有工作流程中每次执行的预计节省时间计算出的总节省时间",
	"insights.banner.queueMode.warning": "我们已发现并修复一个问题：在队列模式下，洞察的执行计数被重复统计。",
	"insights.banner.queueMode.warning.link.text": "了解更多",
	"insights.banner.queueMode.warning.link.url": "https://community.n8n.io/t/insights-reporting-bug-for-queue-mode-users-on-v1-100-0",
	"insights.banner.failureRate.deviation.tooltip": "与上期相比的百分点变化",
	"insights.chart.failed": "失败",
	"insights.chart.succeeded": "成功",
	"insights.chart.loading": "正在加载数据",
	"communityNodesDocsLink.link.title": "开放社区节点文档",
	"communityNodesDocsLink.title": "文档",
	"communityNodeItem.node.hint": "安装此节点以开始使用",
	"communityNodeItem.actions.hint": "安装此节点以开始使用操作",
	"communityNodeItem.label": "添加到工作流程",
	"communityNodeDetails.installed": "已安装",
	"communityNodeDetails.install": "安装 Node",
	"communityNodeInfo.approved": "该社区节点已通过n8n审核并批准。",
	"communityNodeInfo.officialApproved": "该节点已通过n8n审核并批准。",
	"communityNodeInfo.approved.label": "已验证",
	"communityNodeInfo.unverified": "该社区节点是通过npm添加的，尚未经过n8n验证。",
	"communityNodeInfo.unverified.label": "通过npm",
	"communityNodeInfo.downloads": "{downloads} 次下载",
	"communityNodeInfo.publishedBy": "由{publisherName}出版",
	"communityNodeInfo.contact.admin": "请联系管理员安装此社区节点：",
	"communityNodeUpdateInfo.available": "一个新版本的节点包可用。",
	"insights.upgradeModal.button.dismiss": "解散",
	"insights.upgradeModal.content": "查看此时间段需要企业版计划。升级至企业版即可解锁高级功能。",
	"insights.upgradeModal.perks.0": "最多查看一年的洞察历史",
	"insights.upgradeModal.perks.1": "放大查看过去24小时，按小时粒度显示",
	"insights.upgradeModal.perks.2": "深入了解工作流程随时间变化的趋势",
	"insights.upgradeModal.title": "升级至企业版",
	"whatsNew.versionsBehind": "落后 {count} 个版本 | 落后 {count} 个版本",
	"whatsNew.update": "更新",
	"whatsNew.updateNudgeTooltip": "只有拥有者可以执行更新。",
	"whatsNew.updateAvailable": "您当前使用的版本是 {currentVersion}。更新到 {latestVersion} 以获取 {count} 个版本的新功能、改进和修复。查看更新内容。",
	"whatsNew.updateAvailable.changelogLink": "完整变更日志中",
	"workflowDiff.changes": "变化",
	"workflowDiff.nodes": "节点",
	"workflowDiff.connectors": "连接器",
	"workflowDiff.compare": "比较版本",
	"workflowDiff.settings": "设置",
	"workflowDiff.local": "本地",
	"workflowDiff.remote": "远程 ({branchName})",
	"workflowDiff.noChanges": "没有更改",
	"workflowDiff.deletedWorkflow": "缺少工作流",
	"workflowDiff.deletedWorkflow.database": "工作流在数据库中不存在",
	"workflowDiff.deletedWorkflow.remote": "工作流程在远程不存在",
	"workflowDiff.newWorkflow": "新工作流",
	"workflowDiff.newWorkflow.database": "工作流将会在数据库中创建。",
	"workflowDiff.newWorkflow.remote": "该工作流将在远程创建",
	"workflowDiff.label.before": "之前",
	"workflowDiff.label.after": "之后",
	"workflowDiff.waitingForData": "正在等待工作流数据...",
	"workflowDiff.error.loadNodeTypes": "无法加载节点类型",
	"commandBar.placeholder": "输入命令或搜索...",
	"commandBar.noResults": "没有找到结果",
	"commandBar.sections.recent": "最近",
	"commandBar.sections.nodes": "节点",
	"commandBar.sections.workflow": "工作流程",
	"commandBar.sections.workflows": "工作流程",
	"commandBar.sections.credentials": "凭证",
	"commandBar.sections.dataTables": "数据表",
	"commandBar.sections.execution": "执行",
	"commandBar.sections.executions": "执行",
	"commandBar.sections.evaluation": "评估",
	"commandBar.sections.demo": "演示",
	"commandBar.sections.chat": "聊天",
	"commandBar.sections.general": "导航",
	"commandBar.templates.import": "导入模板",
	"commandBar.templates.importWithPrefix": "导入模板 {templateName}",
	"commandBar.nodes.addNode": "添加节点",
	"commandBar.nodes.addStickyNote": "添加便签",
	"commandBar.nodes.openNode": "打开节点",
	"commandBar.nodes.openNodeWithPrefix": "打开节点 > {nodeName}",
	"commandBar.nodes.addNodeWithPrefix": "添加节点 > {nodeName}",
	"commandBar.nodes.searchPlaceholder": "按节点名称、类型等搜索。",
	"commandBar.nodes.keywords.insert": "插入",
	"commandBar.nodes.keywords.add": "添加",
	"commandBar.nodes.keywords.create": "创建",
	"commandBar.nodes.keywords.node": "节点",
	"commandBar.workflow.test": "执行工作流",
	"commandBar.workflow.activate": "激活工作流",
	"commandBar.workflow.deactivate": "停用工作流",
	"commandBar.workflow.selectAll": "全选",
	"commandBar.workflow.tidyUp": "整理工作流程",
	"commandBar.workflow.rename": "重命名工作流",
	"commandBar.workflow.duplicate": "复制工作流",
	"commandBar.workflow.openSettings": "打开工作流设置",
	"commandBar.workflow.download": "下载工作流",
	"commandBar.workflow.importFromURL": "从 URL 导入工作流",
	"commandBar.workflow.importFromFile": "从文件导入工作流",
	"commandBar.workflow.openCredential": "打开凭据",
	"commandBar.workflow.openSubworkflow": "打开子工作流",
	"commandBar.workflow.archive": "归档工作流",
	"commandBar.workflow.unarchive": "取消归档工作流",
	"commandBar.workflow.delete": "删除工作流",
	"commandBar.workflow.publish": "发布工作流",
	"commandBar.workflow.unpublish": "取消发布工作流",
	"commandBar.workflow.keywords.test": "测试",
	"commandBar.workflow.keywords.execute": "执行",
	"commandBar.workflow.keywords.run": "运行",
	"commandBar.workflow.keywords.workflow": "工作流",
	"commandBar.workflow.keywords.download": "下载",
	"commandBar.workflow.keywords.export": "导出",
	"commandBar.workflow.keywords.archive": "档案",
	"commandBar.workflow.keywords.delete": "删除",
	"commandBar.workflow.keywords.unarchive": "解压缩",
	"commandBar.workflow.keywords.restore": "恢复",
	"commandBar.workflows.create": "在 {projectName} 中创建工作流",
	"commandBar.workflows.open": "打开工作流",
	"commandBar.workflows.searchPlaceholder": "通过工作流名称或节点类型搜索...",
	"commandBar.workflows.unnamed": "(未命名工作流)",
	"commandBar.credentials.create": "在 {projectName} 中创建凭证",
	"commandBar.credentials.open": "打开凭证",
	"commandBar.credentials.searchPlaceholder": "按凭证名称搜索...",
	"commandBar.dataTables.create": "在 {projectName} 中创建数据表",
	"commandBar.dataTables.open": "打开数据表。",
	"commandBar.dataTables.searchPlaceholder": "按数据表名称搜索...",
	"commandBar.executions.open": "打开的执行",
	"commandBar.demo.availableEverywhere": "这在任何地方都可以获取。",
	"commandBar.sections.projects": "项目",
	"commandBar.projects.create": "创建项目",
	"commandBar.projects.open": "打开项目",
	"commandBar.projects.searchPlaceholder": "按项目名称搜索...",
	"commandBar.projects.unnamed": "（未命名项目）",
	"commandBar.chat.new": "新聊天",
	"commandBar.chat.newWithModel": "与…开始新的对话",
	"commandBar.chat.open": "打开聊天",
	"commandBar.chat.delete": "删除对话",
	"commandBar.chat.deleteCurrent": "删除当前对话",
	"commandBar.chat.deleteSession": "删除 \"{title}\"",
	"commandBar.chat.open.searchPlaceholder": "按标题搜索...",
	"commandBar.chat.stop": "停止生成消息",
	"browserNotifications.permission.request.title": "启用桌面通知",
	"browserNotifications.permission.request.message": "当您的工作流完成或需要关注时，您将收到通知。",
	"browserNotifications.permission.request.allow": "允许通知",
	"browserNotifications.permission.request.dismiss": "现在不行",
	"browserNotifications.permission.denied.title": "通知已被阻止",
	"browserNotifications.permission.denied.message": "桌面通知已被屏蔽。要启用它们，请点击浏览器地址栏中的锁形图标并允许通知。",
	"browserNotifications.permission.denied.checkAgain": "请再检查一次",
	"browserNotifications.permission.granted.message": "桌面通知已启用"
};
function deriveMiddleKey(path, parameter) {
	let middleKey = parameter.name;
	if (isTopLevelCollection(path, parameter) || isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
	if (isNestedCollection(path, parameter) || isFixedCollection(path, parameter)) middleKey = insertOptionsAndValues([...normalize(path).split("."), parameter.name]).join(".");
	return middleKey;
}
const isNestedInCollectionLike = (path) => path.split(".").length >= 3;
var isTopLevelCollection = (path, parameter) => path.split(".").length === 2 && parameter.type === "collection";
var isNestedCollection = (path, parameter) => path.split(".").length > 2 && parameter.type === "collection";
var isFixedCollection = (path, parameter) => parameter.type === "fixedCollection" && path !== "parameters";
const normalize = (path) => path.replace(/\[.*?\]/g, "").replace("parameters.", "");
const insertOptionsAndValues = (pathSegments) => {
	return pathSegments.reduce((acc, cur, i) => {
		acc.push(cur);
		if (i === pathSegments.length - 1) return acc;
		acc.push(i % 2 === 0 ? "options" : "values");
		return acc;
	}, []);
};
const i18nInstance = createI18n({
	legacy: false,
	locale: "zh-CN",
	fallbackLocale: "en",
	messages: {
		en: en_default,
		"zh-CN": zh_CN_default
	},
	warnHtmlMessage: false
});
const i18nVersion = ref(0);
var I18nClass = class {
	baseTextCache = /* @__PURE__ */ new Map();
	get i18n() {
		return i18nInstance.global;
	}
	exists(key) {
		return this.i18n.te(key);
	}
	shortNodeType(longNodeType) {
		return longNodeType.replace("n8n-nodes-base.", "");
	}
	get locale() {
		return i18nInstance.global.locale.value;
	}
	baseText(key, options) {
		i18nVersion.value;
		const cacheKey = `${i18nVersion.value}|${key}-${JSON.stringify(options)}`;
		if (this.baseTextCache.has(cacheKey)) return this.baseTextCache.get(cacheKey) ?? key;
		const interpolate = { ...options?.interpolate };
		let result;
		if (options?.adjustToNumber !== void 0) result = this.i18n.t(key, interpolate, options.adjustToNumber).toString();
		else result = this.i18n.t(key, interpolate).toString();
		this.baseTextCache.set(cacheKey, result);
		return result;
	}
	clearCache() {
		this.baseTextCache.clear();
		i18nVersion.value++;
	}
	dynamicRender({ key, fallback }) {
		return this.i18n.te(key) ? this.i18n.t(key).toString() : fallback ?? "";
	}
	displayTimer(msPassed, showMs = false) {
		if (msPassed > 0 && msPassed < 1e3 && showMs) return `${msPassed}${this.baseText("genericHelpers.millis")}`;
		const parts = [];
		const second = 1e3;
		const minute = 60 * second;
		const hour = 60 * minute;
		let remainingMs = msPassed;
		if (remainingMs >= hour) {
			parts.push(`${Math.floor(remainingMs / hour)}${this.baseText("genericHelpers.hrsShort")}`);
			remainingMs = remainingMs % hour;
		}
		if (parts.length > 0 || remainingMs >= minute) {
			parts.push(`${Math.floor(remainingMs / minute)}${this.baseText("genericHelpers.minShort")}`);
			remainingMs = remainingMs % minute;
		}
		const remainingSec = showMs ? remainingMs / second : Math.floor(remainingMs / second);
		parts.push(`${remainingSec}${this.baseText("genericHelpers.secShort")}`);
		return parts.join(" ");
	}
	headerText(arg) {
		return this.dynamicRender(arg);
	}
	credText(credentialType) {
		const credentialPrefix = `n8n-nodes-base.credentials.${credentialType}`;
		const context = this;
		return {
			inputLabelDisplayName({ name: parameterName, displayName }) {
				if (["clientId", "clientSecret"].includes(parameterName)) return context.dynamicRender({
					key: `_reusableDynamicText.oauth2.${parameterName}`,
					fallback: displayName
				});
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.displayName`,
					fallback: displayName
				});
			},
			hint({ name: parameterName, hint }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.hint`,
					fallback: hint
				});
			},
			inputLabelDescription({ name: parameterName, description }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.description`,
					fallback: description
				});
			},
			optionsOptionDisplayName({ name: parameterName }, { value: optionName, name: displayName }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.options.${optionName}.displayName`,
					fallback: displayName
				});
			},
			optionsOptionDescription({ name: parameterName }, { value: optionName, description }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.options.${optionName}.description`,
					fallback: description
				});
			},
			placeholder({ name: parameterName, placeholder }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.placeholder`,
					fallback: placeholder
				});
			}
		};
	}
	nodeText(activeNodeType) {
		const initialKey = `n8n-nodes-base.nodes.${activeNodeType ? this.shortNodeType(activeNodeType) : ""}.nodeView`;
		const context = this;
		return {
			inputLabelDisplayName(parameter, path) {
				const middleKey = deriveMiddleKey(path, parameter);
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.displayName`,
					fallback: parameter.displayName
				});
			},
			inputLabelDescription(parameter, path) {
				const middleKey = deriveMiddleKey(path, parameter);
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.description`,
					fallback: parameter.description
				});
			},
			hint(parameter, path) {
				const middleKey = deriveMiddleKey(path, parameter);
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.hint`,
					fallback: parameter.hint
				});
			},
			placeholder(parameter, path) {
				let middleKey = parameter.name;
				if (isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.placeholder`,
					fallback: parameter.placeholder
				});
			},
			optionsOptionDisplayName(parameter, { value: optionName, name: displayName }, path) {
				let middleKey = parameter.name;
				if (isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.options.${optionName}.displayName`,
					fallback: displayName
				});
			},
			optionsOptionDescription(parameter, { value: optionName, description }, path) {
				let middleKey = parameter.name;
				if (isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.options.${optionName}.description`,
					fallback: description
				});
			},
			collectionOptionDisplayName(parameter, { name: optionName, displayName }, path) {
				let middleKey = parameter.name;
				if (isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.options.${optionName}.displayName`,
					fallback: displayName
				});
			},
			multipleValueButtonText({ name: parameterName, typeOptions }) {
				return context.dynamicRender({
					key: `${initialKey}.${parameterName}.multipleValueButtonText`,
					fallback: typeOptions?.multipleValueButtonText
				});
			},
			addOptionalFieldButtonText({ name: parameterName, typeOptions }) {
				return context.dynamicRender({
					key: `${initialKey}.${parameterName}.addOptionalFieldButtonText`,
					fallback: typeOptions?.addOptionalFieldButtonText
				});
			},
			eventTriggerDescription(nodeType, eventTriggerDescription) {
				return context.dynamicRender({
					key: `n8n-nodes-base.nodes.${nodeType}.nodeView.eventTriggerDescription`,
					fallback: eventTriggerDescription
				});
			}
		};
	}
	localizeNodeName(language, nodeName, type) {
		if (language === "en") return nodeName;
		const nodeTypeName = this.shortNodeType(type);
		return this.headerText({
			key: `headers.${nodeTypeName}.displayName`,
			fallback: nodeName
		});
	}
	autocompleteUIValues = { docLinkLabel: this.baseText("expressionEdit.learnMore") };
};
function setLanguage(locale) {
	i18nInstance.global.locale.value = locale;
	document.querySelector("html").setAttribute("lang", locale);
	i18n.clearCache();
	return locale;
}
function addNodeTranslation(nodeTranslation, language) {
	const newMessages = { "n8n-nodes-base": { nodes: nodeTranslation } };
	i18nInstance.global.mergeLocaleMessage(language, newMessages);
}
function addCredentialTranslation(nodeCredentialTranslation, language) {
	const newMessages = { "n8n-nodes-base": { credentials: nodeCredentialTranslation } };
	i18nInstance.global.mergeLocaleMessage(language, newMessages);
}
function addHeaders(headers, language) {
	i18nInstance.global.mergeLocaleMessage(language, { headers });
}
const i18n = new I18nClass();
function useI18n() {
	return i18n;
}
var isVue2 = false;
function set(target, key, val) {
	if (Array.isArray(target)) {
		target.length = Math.max(target.length, key);
		target.splice(key, 1, val);
		return val;
	}
	target[key] = val;
	return val;
}
function tryOnScopeDispose(fn) {
	if (getCurrentScope()) {
		onScopeDispose(fn);
		return true;
	}
	return false;
}
function createEventHook() {
	const fns = /* @__PURE__ */ new Set();
	const off = (fn) => {
		fns.delete(fn);
	};
	const on = (fn) => {
		fns.add(fn);
		const offFn = () => off(fn);
		tryOnScopeDispose(offFn);
		return { off: offFn };
	};
	const trigger = (...args) => {
		return Promise.all(Array.from(fns).map((fn) => fn(...args)));
	};
	return {
		on,
		off,
		trigger
	};
}
var localProvidedStateMap = /* @__PURE__ */ new WeakMap();
var provideLocal = (key, value) => {
	var _a;
	const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
	if (instance == null) throw new Error("provideLocal must be called in setup");
	if (!localProvidedStateMap.has(instance)) localProvidedStateMap.set(instance, /* @__PURE__ */ Object.create(null));
	const localProvidedState = localProvidedStateMap.get(instance);
	localProvidedState[key] = value;
	provide(key, value);
};
var injectLocal = (...args) => {
	var _a;
	const key = args[0];
	const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
	if (instance == null) throw new Error("injectLocal must be called in setup");
	if (localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance)) return localProvidedStateMap.get(instance)[key];
	return inject(...args);
};
function createInjectionState(composable, options) {
	const key = (options == null ? void 0 : options.injectionKey) || Symbol(composable.name || "InjectionState");
	const defaultValue = options == null ? void 0 : options.defaultValue;
	const useProvidingState = (...args) => {
		const state = composable(...args);
		provideLocal(key, state);
		return state;
	};
	const useInjectedState = () => injectLocal(key, defaultValue);
	return [useProvidingState, useInjectedState];
}
function toValue(r) {
	return typeof r === "function" ? r() : unref(r);
}
function toReactive(objectRef) {
	if (!isRef(objectRef)) return reactive(objectRef);
	return reactive(new Proxy({}, {
		get(_, p, receiver) {
			return unref(Reflect.get(objectRef.value, p, receiver));
		},
		set(_, p, value) {
			if (isRef(objectRef.value[p]) && !isRef(value)) objectRef.value[p].value = value;
			else objectRef.value[p] = value;
			return true;
		},
		deleteProperty(_, p) {
			return Reflect.deleteProperty(objectRef.value, p);
		},
		has(_, p) {
			return Reflect.has(objectRef.value, p);
		},
		ownKeys() {
			return Object.keys(objectRef.value);
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: true,
				configurable: true
			};
		}
	}));
}
function reactiveComputed(fn) {
	return toReactive(computed(fn));
}
function reactiveOmit(obj, ...keys) {
	const flatKeys = keys.flat();
	const predicate = flatKeys[0];
	return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs$1(obj)).filter(([k, v]) => !predicate(toValue(v), k))) : Object.fromEntries(Object.entries(toRefs$1(obj)).filter((e) => !flatKeys.includes(e[0]))));
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var toString = Object.prototype.toString;
var isObject$3 = (val) => toString.call(val) === "[object Object]";
var timestamp = () => +Date.now();
var noop = () => {};
var hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key);
var isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
	var _a, _b;
	return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
	function wrapper(...args) {
		return new Promise((resolve, reject) => {
			Promise.resolve(filter(() => fn.apply(this, args), {
				fn,
				thisArg: this,
				args
			})).then(resolve).catch(reject);
		});
	}
	return wrapper;
}
var bypassFilter = (invoke) => {
	return invoke();
};
function debounceFilter(ms, options = {}) {
	let timer;
	let maxTimer;
	let lastRejector = noop;
	const _clearTimeout = (timer2) => {
		clearTimeout(timer2);
		lastRejector();
		lastRejector = noop;
	};
	const filter = (invoke) => {
		const duration = toValue(ms);
		const maxDuration = toValue(options.maxWait);
		if (timer) _clearTimeout(timer);
		if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
			if (maxTimer) {
				_clearTimeout(maxTimer);
				maxTimer = null;
			}
			return Promise.resolve(invoke());
		}
		return new Promise((resolve, reject) => {
			lastRejector = options.rejectOnCancel ? reject : resolve;
			if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
				if (timer) _clearTimeout(timer);
				maxTimer = null;
				resolve(invoke());
			}, maxDuration);
			timer = setTimeout(() => {
				if (maxTimer) _clearTimeout(maxTimer);
				maxTimer = null;
				resolve(invoke());
			}, duration);
		});
	};
	return filter;
}
function throttleFilter(...args) {
	let lastExec = 0;
	let timer;
	let isLeading = true;
	let lastRejector = noop;
	let lastValue;
	let ms;
	let trailing;
	let leading;
	let rejectOnCancel;
	if (!isRef(args[0]) && typeof args[0] === "object") ({delay: ms, trailing = true, leading = true, rejectOnCancel = false} = args[0]);
	else [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
	const clear = () => {
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
			lastRejector();
			lastRejector = noop;
		}
	};
	const filter = (_invoke) => {
		const duration = toValue(ms);
		const elapsed = Date.now() - lastExec;
		const invoke = () => {
			return lastValue = _invoke();
		};
		clear();
		if (duration <= 0) {
			lastExec = Date.now();
			return invoke();
		}
		if (elapsed > duration && (leading || !isLeading)) {
			lastExec = Date.now();
			invoke();
		} else if (trailing) lastValue = new Promise((resolve, reject) => {
			lastRejector = rejectOnCancel ? reject : resolve;
			timer = setTimeout(() => {
				lastExec = Date.now();
				isLeading = true;
				resolve(invoke());
				clear();
			}, Math.max(0, duration - elapsed));
		});
		if (!leading && !timer) timer = setTimeout(() => isLeading = true, duration);
		isLeading = false;
		return lastValue;
	};
	return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
	const isActive = ref(true);
	function pause() {
		isActive.value = false;
	}
	function resume() {
		isActive.value = true;
	}
	const eventFilter = (...args) => {
		if (isActive.value) extendFilter(...args);
	};
	return {
		isActive: readonly(isActive),
		pause,
		resume,
		eventFilter
	};
}
var directiveHooks = {
	mounted: "mounted",
	updated: "updated",
	unmounted: "unmounted"
};
function cacheStringFunction(fn) {
	const cache$1 = /* @__PURE__ */ Object.create(null);
	return (str) => {
		return cache$1[str] || (cache$1[str] = fn(str));
	};
}
var hyphenateRE = /\B([A-Z])/g;
cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
cacheStringFunction((str) => {
	return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
	return new Promise((resolve, reject) => {
		if (throwOnTimeout) setTimeout(() => reject(reason), ms);
		else setTimeout(resolve, ms);
	});
}
function createSingletonPromise(fn) {
	let _promise;
	function wrapper() {
		if (!_promise) _promise = fn();
		return _promise;
	}
	wrapper.reset = async () => {
		const _prev = _promise;
		_promise = void 0;
		if (_prev) await _prev;
	};
	return wrapper;
}
function getLifeCycleTarget(target) {
	return target || getCurrentInstance();
}
function toRef(...args) {
	if (args.length !== 1) return toRef$1(...args);
	const r = args[0];
	return typeof r === "function" ? readonly(customRef(() => ({
		get: r,
		set: noop
	}))) : ref(r);
}
function reactivePick(obj, ...keys) {
	const flatKeys = keys.flat();
	const predicate = flatKeys[0];
	return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs$1(obj)).filter(([k, v]) => predicate(toValue(v), k))) : Object.fromEntries(flatKeys.map((k) => [k, toRef(obj, k)])));
}
function useDebounceFn(fn, ms = 200, options = {}) {
	return createFilterWrapper(debounceFilter(ms, options), fn);
}
function refDebounced(value, ms = 200, options = {}) {
	const debounced = ref(value.value);
	const updater = useDebounceFn(() => {
		debounced.value = value.value;
	}, ms, options);
	watch(value, () => updater());
	return debounced;
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
	return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function refThrottled(value, delay = 200, trailing = true, leading = true) {
	if (delay <= 0) return value;
	const throttled = ref(value.value);
	const updater = useThrottleFn(() => {
		throttled.value = value.value;
	}, delay, trailing, leading);
	watch(value, () => updater());
	return throttled;
}
function watchWithFilter(source, cb, options = {}) {
	const { eventFilter = bypassFilter, ...watchOptions } = options;
	return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
function watchPausable(source, cb, options = {}) {
	const { eventFilter: filter, ...watchOptions } = options;
	const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
	return {
		stop: watchWithFilter(source, cb, {
			...watchOptions,
			eventFilter
		}),
		pause,
		resume,
		isActive
	};
}
function toRefs(objectRef, options = {}) {
	if (!isRef(objectRef)) return toRefs$1(objectRef);
	const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
	for (const key in objectRef.value) result[key] = customRef(() => ({
		get() {
			return objectRef.value[key];
		},
		set(v) {
			var _a;
			if ((_a = toValue(options.replaceRef)) != null ? _a : true) if (Array.isArray(objectRef.value)) {
				const copy = [...objectRef.value];
				copy[key] = v;
				objectRef.value = copy;
			} else {
				const newObject = {
					...objectRef.value,
					[key]: v
				};
				Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
				objectRef.value = newObject;
			}
			else objectRef.value[key] = v;
		}
	}));
	return result;
}
function tryOnMounted(fn, sync = true, target) {
	if (getLifeCycleTarget()) onMounted(fn, target);
	else if (sync) fn();
	else nextTick(fn);
}
function createUntil(r, isNot = false) {
	function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
		let stop = null;
		const promises = [new Promise((resolve) => {
			stop = watch(r, (v) => {
				if (condition(v) !== isNot) {
					stop?.();
					resolve(v);
				}
			}, {
				flush,
				deep,
				immediate: true
			});
		})];
		if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop()));
		return Promise.race(promises);
	}
	function toBe(value, options) {
		if (!isRef(value)) return toMatch((v) => v === value, options);
		const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
		let stop = null;
		const promises = [new Promise((resolve) => {
			stop = watch([r, value], ([v1, v2]) => {
				if (isNot !== (v1 === v2)) {
					stop?.();
					resolve(v1);
				}
			}, {
				flush,
				deep,
				immediate: true
			});
		})];
		if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
			stop?.();
			return toValue(r);
		}));
		return Promise.race(promises);
	}
	function toBeTruthy(options) {
		return toMatch((v) => Boolean(v), options);
	}
	function toBeNull(options) {
		return toBe(null, options);
	}
	function toBeUndefined(options) {
		return toBe(void 0, options);
	}
	function toBeNaN(options) {
		return toMatch(Number.isNaN, options);
	}
	function toContains(value, options) {
		return toMatch((v) => {
			const array = Array.from(v);
			return array.includes(value) || array.includes(toValue(value));
		}, options);
	}
	function changed(options) {
		return changedTimes(1, options);
	}
	function changedTimes(n = 1, options) {
		let count = -1;
		return toMatch(() => {
			count += 1;
			return count >= n;
		}, options);
	}
	if (Array.isArray(toValue(r))) return {
		toMatch,
		toContains,
		changed,
		changedTimes,
		get not() {
			return createUntil(r, !isNot);
		}
	};
	else return {
		toMatch,
		toBe,
		toBeTruthy,
		toBeNull,
		toBeNaN,
		toBeUndefined,
		changed,
		changedTimes,
		get not() {
			return createUntil(r, !isNot);
		}
	};
}
function until(r) {
	return createUntil(r);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	let timer = null;
	const isActive = ref(false);
	function clean() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}
	function pause() {
		isActive.value = false;
		clean();
	}
	function resume() {
		const intervalValue = toValue(interval);
		if (intervalValue <= 0) return;
		isActive.value = true;
		if (immediateCallback) cb();
		clean();
		timer = setInterval(cb, intervalValue);
	}
	if (immediate && isClient) resume();
	if (isRef(interval) || typeof interval === "function") tryOnScopeDispose(watch(interval, () => {
		if (isActive.value && isClient) resume();
	}));
	tryOnScopeDispose(pause);
	return {
		isActive,
		pause,
		resume
	};
}
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true } = options;
	const isPending = ref(false);
	let timer = null;
	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}
	function stop() {
		isPending.value = false;
		clear();
	}
	function start(...args) {
		clear();
		isPending.value = true;
		timer = setTimeout(() => {
			isPending.value = false;
			timer = null;
			cb(...args);
		}, toValue(interval));
	}
	if (immediate) {
		isPending.value = true;
		if (isClient) start();
	}
	tryOnScopeDispose(stop);
	return {
		isPending: readonly(isPending),
		start,
		stop
	};
}
function watchDebounced(source, cb, options = {}) {
	const { debounce = 0, maxWait = void 0, ...watchOptions } = options;
	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: debounceFilter(debounce, { maxWait })
	});
}
function watchOnce(source, cb, options) {
	const stop = watch(source, (...args) => {
		nextTick(() => stop());
		return cb(...args);
	}, options);
	return stop;
}
function watchThrottled(source, cb, options = {}) {
	const { throttle = 0, trailing = true, leading = true, ...watchOptions } = options;
	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: throttleFilter(throttle, trailing, leading)
	});
}
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
	let options;
	if (isRef(optionsOrRef)) options = { evaluating: optionsOrRef };
	else options = optionsOrRef || {};
	const { lazy = false, evaluating = void 0, shallow = true, onError = noop } = options;
	const started = ref(!lazy);
	const current = shallow ? shallowRef(initialState) : ref(initialState);
	let counter = 0;
	watchEffect(async (onInvalidate) => {
		if (!started.value) return;
		counter++;
		const counterAtBeginning = counter;
		let hasFinished = false;
		if (evaluating) Promise.resolve().then(() => {
			evaluating.value = true;
		});
		try {
			const result = await evaluationCallback((cancelCallback) => {
				onInvalidate(() => {
					if (evaluating) evaluating.value = false;
					if (!hasFinished) cancelCallback();
				});
			});
			if (counterAtBeginning === counter) current.value = result;
		} catch (e) {
			onError(e);
		} finally {
			if (evaluating && counterAtBeginning === counter) evaluating.value = false;
			hasFinished = true;
		}
	});
	if (lazy) return computed(() => {
		started.value = true;
		return current.value;
	});
	else return current;
}
function unrefElement(elRef) {
	var _a;
	const plain = toValue(elRef);
	return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
isClient && window.location;
function useEventListener(...args) {
	let target;
	let events;
	let listeners;
	let options;
	if (typeof args[0] === "string" || Array.isArray(args[0])) {
		[events, listeners, options] = args;
		target = defaultWindow;
	} else [target, events, listeners, options] = args;
	if (!target) return noop;
	if (!Array.isArray(events)) events = [events];
	if (!Array.isArray(listeners)) listeners = [listeners];
	const cleanups = [];
	const cleanup = () => {
		cleanups.forEach((fn) => fn());
		cleanups.length = 0;
	};
	const register = (el, event, listener, options2) => {
		el.addEventListener(event, listener, options2);
		return () => el.removeEventListener(event, listener, options2);
	};
	const stopWatch = watch(() => [unrefElement(target), toValue(options)], ([el, options2]) => {
		cleanup();
		if (!el) return;
		const optionsClone = isObject$3(options2) ? { ...options2 } : options2;
		cleanups.push(...events.flatMap((event) => {
			return listeners.map((listener) => register(el, event, listener, optionsClone));
		}));
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(stop);
	return stop;
}
var _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
	const { window: window$1 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
	if (!window$1) return noop;
	if (isIOS && !_iOSWorkaround) {
		_iOSWorkaround = true;
		Array.from(window$1.document.body.children).forEach((el) => el.addEventListener("click", noop));
		window$1.document.documentElement.addEventListener("click", noop);
	}
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return ignore.some((target2) => {
			if (typeof target2 === "string") return Array.from(window$1.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
			else {
				const el = unrefElement(target2);
				return el && (event.target === el || event.composedPath().includes(el));
			}
		});
	};
	const listener = (event) => {
		const el = unrefElement(target);
		if (!el || el === event.target || event.composedPath().includes(el)) return;
		if (event.detail === 0) shouldListen = !shouldIgnore(event);
		if (!shouldListen) {
			shouldListen = true;
			return;
		}
		handler(event);
	};
	const cleanup = [
		useEventListener(window$1, "click", listener, {
			passive: true,
			capture
		}),
		useEventListener(window$1, "pointerdown", (e) => {
			const el = unrefElement(target);
			shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
		}, { passive: true }),
		detectIframe && useEventListener(window$1, "blur", (event) => {
			setTimeout(() => {
				var _a;
				const el = unrefElement(target);
				if (((_a = window$1.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window$1.document.activeElement))) handler(event);
			}, 0);
		})
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	return stop;
}
function createKeyPredicate(keyFilter) {
	if (typeof keyFilter === "function") return keyFilter;
	else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
	else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
	return () => true;
}
function onKeyStroke(...args) {
	let key;
	let handler;
	let options = {};
	if (args.length === 3) {
		key = args[0];
		handler = args[1];
		options = args[2];
	} else if (args.length === 2) if (typeof args[1] === "object") {
		key = true;
		handler = args[0];
		options = args[1];
	} else {
		key = args[0];
		handler = args[1];
	}
	else {
		key = true;
		handler = args[0];
	}
	const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
	const predicate = createKeyPredicate(key);
	const listener = (e) => {
		if (e.repeat && toValue(dedupe)) return;
		if (predicate(e)) handler(e);
	};
	return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keydown"
	});
}
function onKeyUp(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keyup"
	});
}
function useMounted() {
	const isMounted = ref(false);
	const instance = getCurrentInstance();
	if (instance) onMounted(() => {
		isMounted.value = true;
	}, instance);
	return isMounted;
}
function useSupported(callback) {
	const isMounted = useMounted();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
function useMutationObserver(target, callback, options = {}) {
	const { window: window$1 = defaultWindow, ...mutationOptions } = options;
	let observer;
	const isSupported = useSupported(() => window$1 && "MutationObserver" in window$1);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const targets = computed(() => {
		const value = toValue(target);
		const items = (Array.isArray(value) ? value : [value]).map(unrefElement).filter(notNullish);
		return new Set(items);
	});
	const stopWatch = watch(() => targets.value, (targets2) => {
		cleanup();
		if (isSupported.value && targets2.size) {
			observer = new MutationObserver(callback);
			targets2.forEach((el) => observer.observe(el, mutationOptions));
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const takeRecords = () => {
		return observer == null ? void 0 : observer.takeRecords();
	};
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop,
		takeRecords
	};
}
function useActiveElement(options = {}) {
	var _a;
	const { window: window$1 = defaultWindow, deep = true, triggerOnRemoval = false } = options;
	const document$1 = (_a = options.document) != null ? _a : window$1 == null ? void 0 : window$1.document;
	const getDeepActiveElement = () => {
		var _a2;
		let element = document$1 == null ? void 0 : document$1.activeElement;
		if (deep) while (element == null ? void 0 : element.shadowRoot) element = (_a2 = element == null ? void 0 : element.shadowRoot) == null ? void 0 : _a2.activeElement;
		return element;
	};
	const activeElement = ref();
	const trigger = () => {
		activeElement.value = getDeepActiveElement();
	};
	if (window$1) {
		useEventListener(window$1, "blur", (event) => {
			if (event.relatedTarget !== null) return;
			trigger();
		}, true);
		useEventListener(window$1, "focus", trigger, true);
	}
	if (triggerOnRemoval) useMutationObserver(document$1, (mutations) => {
		mutations.filter((m) => m.removedNodes.length).map((n) => Array.from(n.removedNodes)).flat().forEach((node) => {
			if (node === activeElement.value) trigger();
		});
	}, {
		childList: true,
		subtree: true
	});
	trigger();
	return activeElement;
}
function useRafFn(fn, options = {}) {
	const { immediate = true, fpsLimit = void 0, window: window$1 = defaultWindow } = options;
	const isActive = ref(false);
	const intervalLimit = fpsLimit ? 1e3 / fpsLimit : null;
	let previousFrameTimestamp = 0;
	let rafId = null;
	function loop(timestamp$1) {
		if (!isActive.value || !window$1) return;
		if (!previousFrameTimestamp) previousFrameTimestamp = timestamp$1;
		const delta = timestamp$1 - previousFrameTimestamp;
		if (intervalLimit && delta < intervalLimit) {
			rafId = window$1.requestAnimationFrame(loop);
			return;
		}
		previousFrameTimestamp = timestamp$1;
		fn({
			delta,
			timestamp: timestamp$1
		});
		rafId = window$1.requestAnimationFrame(loop);
	}
	function resume() {
		if (!isActive.value && window$1) {
			isActive.value = true;
			previousFrameTimestamp = 0;
			rafId = window$1.requestAnimationFrame(loop);
		}
	}
	function pause() {
		isActive.value = false;
		if (rafId != null && window$1) {
			window$1.cancelAnimationFrame(rafId);
			rafId = null;
		}
	}
	if (immediate) resume();
	tryOnScopeDispose(pause);
	return {
		isActive: readonly(isActive),
		pause,
		resume
	};
}
function useAsyncState(promise, initialState, options) {
	const { immediate = true, delay = 0, onError = noop, onSuccess = noop, resetOnExecute = true, shallow = true, throwError } = options != null ? options : {};
	const state = shallow ? shallowRef(initialState) : ref(initialState);
	const isReady = ref(false);
	const isLoading = ref(false);
	const error$2 = shallowRef(void 0);
	async function execute(delay2 = 0, ...args) {
		if (resetOnExecute) state.value = initialState;
		error$2.value = void 0;
		isReady.value = false;
		isLoading.value = true;
		if (delay2 > 0) await promiseTimeout(delay2);
		const _promise = typeof promise === "function" ? promise(...args) : promise;
		try {
			const data = await _promise;
			state.value = data;
			isReady.value = true;
			onSuccess(data);
		} catch (e) {
			error$2.value = e;
			onError(e);
			if (throwError) throw e;
		} finally {
			isLoading.value = false;
		}
		return state.value;
	}
	if (immediate) execute(delay);
	const shell = {
		state,
		isReady,
		isLoading,
		error: error$2,
		execute
	};
	function waitUntilIsLoaded() {
		return new Promise((resolve, reject) => {
			until(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
		});
	}
	return {
		...shell,
		then(onFulfilled, onRejected) {
			return waitUntilIsLoaded().then(onFulfilled, onRejected);
		}
	};
}
function useMediaQuery(query, options = {}) {
	const { window: window$1 = defaultWindow } = options;
	const isSupported = useSupported(() => window$1 && "matchMedia" in window$1 && typeof window$1.matchMedia === "function");
	let mediaQuery;
	const matches = ref(false);
	const handler = (event) => {
		matches.value = event.matches;
	};
	const cleanup = () => {
		if (!mediaQuery) return;
		if ("removeEventListener" in mediaQuery) mediaQuery.removeEventListener("change", handler);
		else mediaQuery.removeListener(handler);
	};
	const stopWatch = watchEffect(() => {
		if (!isSupported.value) return;
		cleanup();
		mediaQuery = window$1.matchMedia(toValue(query));
		if ("addEventListener" in mediaQuery) mediaQuery.addEventListener("change", handler);
		else mediaQuery.addListener(handler);
		matches.value = mediaQuery.matches;
	});
	tryOnScopeDispose(() => {
		stopWatch();
		cleanup();
		mediaQuery = void 0;
	});
	return matches;
}
function usePermission(permissionDesc, options = {}) {
	const { controls = false, navigator = defaultNavigator } = options;
	const isSupported = useSupported(() => navigator && "permissions" in navigator);
	let permissionStatus;
	const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
	const state = ref();
	const onChange = () => {
		if (permissionStatus) state.value = permissionStatus.state;
	};
	const query = createSingletonPromise(async () => {
		if (!isSupported.value) return;
		if (!permissionStatus) try {
			permissionStatus = await navigator.permissions.query(desc);
			useEventListener(permissionStatus, "change", onChange);
			onChange();
		} catch (e) {
			state.value = "prompt";
		}
		return permissionStatus;
	});
	query();
	if (controls) return {
		state,
		isSupported,
		query
	};
	else return state;
}
function useClipboard(options = {}) {
	const { navigator = defaultNavigator, read = false, source, copiedDuring = 1500, legacy = false } = options;
	const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
	const permissionRead = usePermission("clipboard-read");
	const permissionWrite = usePermission("clipboard-write");
	const isSupported = computed(() => isClipboardApiSupported.value || legacy);
	const text = ref("");
	const copied = ref(false);
	const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
	function updateText() {
		if (isClipboardApiSupported.value && isAllowed(permissionRead.value)) navigator.clipboard.readText().then((value) => {
			text.value = value;
		});
		else text.value = legacyRead();
	}
	if (isSupported.value && read) useEventListener(["copy", "cut"], updateText);
	async function copy(value = toValue(source)) {
		if (isSupported.value && value != null) {
			if (isClipboardApiSupported.value && isAllowed(permissionWrite.value)) await navigator.clipboard.writeText(value);
			else legacyCopy(value);
			text.value = value;
			copied.value = true;
			timeout.start();
		}
	}
	function legacyCopy(value) {
		const ta = document.createElement("textarea");
		ta.value = value != null ? value : "";
		ta.style.position = "absolute";
		ta.style.opacity = "0";
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		ta.remove();
	}
	function legacyRead() {
		var _a, _b, _c;
		return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
	}
	function isAllowed(status) {
		return status === "granted" || status === "prompt";
	}
	return {
		isSupported,
		text,
		copied,
		copy
	};
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
	if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
	return _global[globalKey];
}
function getSSRHandler(key, fallback) {
	return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
	return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
	boolean: {
		read: (v) => v === "true",
		write: (v) => String(v)
	},
	object: {
		read: (v) => JSON.parse(v),
		write: (v) => JSON.stringify(v)
	},
	number: {
		read: (v) => Number.parseFloat(v),
		write: (v) => String(v)
	},
	any: {
		read: (v) => v,
		write: (v) => String(v)
	},
	string: {
		read: (v) => v,
		write: (v) => String(v)
	},
	map: {
		read: (v) => new Map(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v.entries()))
	},
	set: {
		read: (v) => new Set(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v))
	},
	date: {
		read: (v) => new Date(v),
		write: (v) => v.toISOString()
	}
};
var customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
	var _a;
	const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window$1 = defaultWindow, eventFilter, onError = (e) => {
		console.error(e);
	}, initOnMounted } = options;
	const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
	if (!storage) try {
		storage = getSSRHandler("getDefaultStorage", () => {
			var _a2;
			return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
		})();
	} catch (e) {
		onError(e);
	}
	if (!storage) return data;
	const rawInit = toValue(defaults);
	const type = guessSerializerType(rawInit);
	const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
	const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), {
		flush,
		deep,
		eventFilter
	});
	if (window$1 && listenToStorageChanges) tryOnMounted(() => {
		useEventListener(window$1, "storage", update);
		useEventListener(window$1, customStorageEventName, updateFromCustomEvent);
		if (initOnMounted) update();
	});
	if (!initOnMounted) update();
	function dispatchWriteEvent(oldValue, newValue) {
		if (window$1) window$1.dispatchEvent(new CustomEvent(customStorageEventName, { detail: {
			key,
			oldValue,
			newValue,
			storageArea: storage
		} }));
	}
	function write(v) {
		try {
			const oldValue = storage.getItem(key);
			if (v == null) {
				dispatchWriteEvent(oldValue, null);
				storage.removeItem(key);
			} else {
				const serialized = serializer.write(v);
				if (oldValue !== serialized) {
					storage.setItem(key, serialized);
					dispatchWriteEvent(oldValue, serialized);
				}
			}
		} catch (e) {
			onError(e);
		}
	}
	function read(event) {
		const rawValue = event ? event.newValue : storage.getItem(key);
		if (rawValue == null) {
			if (writeDefaults && rawInit != null) storage.setItem(key, serializer.write(rawInit));
			return rawInit;
		} else if (!event && mergeDefaults) {
			const value = serializer.read(rawValue);
			if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
			else if (type === "object" && !Array.isArray(value)) return {
				...rawInit,
				...value
			};
			return value;
		} else if (typeof rawValue !== "string") return rawValue;
		else return serializer.read(rawValue);
	}
	function update(event) {
		if (event && event.storageArea !== storage) return;
		if (event && event.key == null) {
			data.value = rawInit;
			return;
		}
		if (event && event.key !== key) return;
		pauseWatch();
		try {
			if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value)) data.value = read(event);
		} catch (e) {
			onError(e);
		} finally {
			if (event) nextTick(resumeWatch);
			else resumeWatch();
		}
	}
	function updateFromCustomEvent(event) {
		update(event.detail);
	}
	return data;
}
function useCssVar(prop, target, options = {}) {
	const { window: window$1 = defaultWindow, initialValue = "", observe = false } = options;
	const variable = ref(initialValue);
	const elRef = computed(() => {
		var _a;
		return unrefElement(target) || ((_a = window$1 == null ? void 0 : window$1.document) == null ? void 0 : _a.documentElement);
	});
	function updateCssVar() {
		var _a;
		const key = toValue(prop);
		const el = toValue(elRef);
		if (el && window$1) variable.value = ((_a = window$1.getComputedStyle(el).getPropertyValue(key)) == null ? void 0 : _a.trim()) || initialValue;
	}
	if (observe) useMutationObserver(elRef, updateCssVar, {
		attributeFilter: ["style", "class"],
		window: window$1
	});
	watch([elRef, () => toValue(prop)], updateCssVar, { immediate: true });
	watch(variable, (val) => {
		var _a;
		if ((_a = elRef.value) == null ? void 0 : _a.style) elRef.value.style.setProperty(toValue(prop), val);
	});
	return variable;
}
function useDocumentVisibility(options = {}) {
	const { document: document$1 = defaultDocument } = options;
	if (!document$1) return ref("visible");
	const visibility = ref(document$1.visibilityState);
	useEventListener(document$1, "visibilitychange", () => {
		visibility.value = document$1.visibilityState;
	});
	return visibility;
}
function useResizeObserver(target, callback, options = {}) {
	const { window: window$1 = defaultWindow, ...observerOptions } = options;
	let observer;
	const isSupported = useSupported(() => window$1 && "ResizeObserver" in window$1);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]), (els) => {
		cleanup();
		if (isSupported.value && window$1) {
			observer = new ResizeObserver(callback);
			for (const _el of els) _el && observer.observe(_el, observerOptions);
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop
	};
}
function useElementBounding(target, options = {}) {
	const { reset = true, windowResize = true, windowScroll = true, immediate = true } = options;
	const height = ref(0);
	const bottom = ref(0);
	const left = ref(0);
	const right = ref(0);
	const top = ref(0);
	const width = ref(0);
	const x = ref(0);
	const y = ref(0);
	function update() {
		const el = unrefElement(target);
		if (!el) {
			if (reset) {
				height.value = 0;
				bottom.value = 0;
				left.value = 0;
				right.value = 0;
				top.value = 0;
				width.value = 0;
				x.value = 0;
				y.value = 0;
			}
			return;
		}
		const rect = el.getBoundingClientRect();
		height.value = rect.height;
		bottom.value = rect.bottom;
		left.value = rect.left;
		right.value = rect.right;
		top.value = rect.top;
		width.value = rect.width;
		x.value = rect.x;
		y.value = rect.y;
	}
	useResizeObserver(target, update);
	watch(() => unrefElement(target), (ele) => !ele && update());
	useMutationObserver(target, update, { attributeFilter: ["style", "class"] });
	if (windowScroll) useEventListener("scroll", update, {
		capture: true,
		passive: true
	});
	if (windowResize) useEventListener("resize", update, { passive: true });
	tryOnMounted(() => {
		if (immediate) update();
	});
	return {
		height,
		bottom,
		left,
		right,
		top,
		width,
		x,
		y,
		update
	};
}
function useElementHover(el, options = {}) {
	const { delayEnter = 0, delayLeave = 0, window: window$1 = defaultWindow } = options;
	const isHovered = ref(false);
	let timer;
	const toggle = (entering) => {
		const delay = entering ? delayEnter : delayLeave;
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
		}
		if (delay) timer = setTimeout(() => isHovered.value = entering, delay);
		else isHovered.value = entering;
	};
	if (!window$1) return isHovered;
	useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
	useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
	return isHovered;
}
function useElementSize(target, initialSize = {
	width: 0,
	height: 0
}, options = {}) {
	const { window: window$1 = defaultWindow, box = "content-box" } = options;
	const isSVG = computed(() => {
		var _a, _b;
		return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
	});
	const width = ref(initialSize.width);
	const height = ref(initialSize.height);
	const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
		const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
		if (window$1 && isSVG.value) {
			const $elem = unrefElement(target);
			if ($elem) {
				const rect = $elem.getBoundingClientRect();
				width.value = rect.width;
				height.value = rect.height;
			}
		} else if (boxSize) {
			const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
			width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
			height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
		} else {
			width.value = entry.contentRect.width;
			height.value = entry.contentRect.height;
		}
	}, options);
	tryOnMounted(() => {
		const ele = unrefElement(target);
		if (ele) {
			width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
			height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
		}
	});
	const stop2 = watch(() => unrefElement(target), (ele) => {
		width.value = ele ? initialSize.width : 0;
		height.value = ele ? initialSize.height : 0;
	});
	function stop() {
		stop1();
		stop2();
	}
	return {
		width,
		height,
		stop
	};
}
function useIntersectionObserver(target, callback, options = {}) {
	const { root: root$1, rootMargin = "0px", threshold = .1, window: window$1 = defaultWindow, immediate = true } = options;
	const isSupported = useSupported(() => window$1 && "IntersectionObserver" in window$1);
	const targets = computed(() => {
		const _target = toValue(target);
		return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
	});
	let cleanup = noop;
	const isActive = ref(immediate);
	const stopWatch = isSupported.value ? watch(() => [
		targets.value,
		unrefElement(root$1),
		isActive.value
	], ([targets2, root2]) => {
		cleanup();
		if (!isActive.value) return;
		if (!targets2.length) return;
		const observer = new IntersectionObserver(callback, {
			root: unrefElement(root2),
			rootMargin,
			threshold
		});
		targets2.forEach((el) => el && observer.observe(el));
		cleanup = () => {
			observer.disconnect();
			cleanup = noop;
		};
	}, {
		immediate,
		flush: "post"
	}) : noop;
	const stop = () => {
		cleanup();
		stopWatch();
		isActive.value = false;
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		isActive,
		pause() {
			cleanup();
			isActive.value = false;
		},
		resume() {
			isActive.value = true;
		},
		stop
	};
}
function useFavicon(newIcon = null, options = {}) {
	const { baseUrl = "", rel = "icon", document: document$1 = defaultDocument } = options;
	const favicon = toRef(newIcon);
	const applyIcon = (icon) => {
		const elements = document$1 == null ? void 0 : document$1.head.querySelectorAll(`link[rel*="${rel}"]`);
		if (!elements || elements.length === 0) {
			const link = document$1 == null ? void 0 : document$1.createElement("link");
			if (link) {
				link.rel = rel;
				link.href = `${baseUrl}${icon}`;
				link.type = `image/${icon.split(".").pop()}`;
				document$1?.head.append(link);
			}
			return;
		}
		elements?.forEach((el) => el.href = `${baseUrl}${icon}`);
	};
	watch(favicon, (i, o) => {
		if (typeof i === "string" && i !== o) applyIcon(i);
	}, { immediate: true });
	return favicon;
}
var DEFAULT_OPTIONS = {
	multiple: true,
	accept: "*",
	reset: false,
	directory: false
};
function useFileDialog(options = {}) {
	const { document: document$1 = defaultDocument } = options;
	const files = ref(null);
	const { on: onChange, trigger } = createEventHook();
	let input;
	if (document$1) {
		input = document$1.createElement("input");
		input.type = "file";
		input.onchange = (event) => {
			files.value = event.target.files;
			trigger(files.value);
		};
	}
	const reset = () => {
		files.value = null;
		if (input && input.value) {
			input.value = "";
			trigger(null);
		}
	};
	const open = (localOptions) => {
		if (!input) return;
		const _options = {
			...DEFAULT_OPTIONS,
			...options,
			...localOptions
		};
		input.multiple = _options.multiple;
		input.accept = _options.accept;
		input.webkitdirectory = _options.directory;
		if (hasOwn(_options, "capture")) input.capture = _options.capture;
		if (_options.reset) reset();
		input.click();
	};
	return {
		files: readonly(files),
		open,
		reset,
		onChange
	};
}
var ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
	const { throttle = 0, idle = 200, onStop = noop, onScroll = noop, offset = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	}, eventListenerOptions = {
		capture: false,
		passive: true
	}, behavior = "auto", window: window$1 = defaultWindow, onError = (e) => {
		console.error(e);
	} } = options;
	const internalX = ref(0);
	const internalY = ref(0);
	const x = computed({
		get() {
			return internalX.value;
		},
		set(x2) {
			scrollTo$1(x2, void 0);
		}
	});
	const y = computed({
		get() {
			return internalY.value;
		},
		set(y2) {
			scrollTo$1(void 0, y2);
		}
	});
	function scrollTo$1(_x, _y) {
		var _a, _b, _c, _d;
		if (!window$1) return;
		const _element = toValue(element);
		if (!_element) return;
		(_c = _element instanceof Document ? window$1.document.body : _element) == null || _c.scrollTo({
			top: (_a = toValue(_y)) != null ? _a : y.value,
			left: (_b = toValue(_x)) != null ? _b : x.value,
			behavior: toValue(behavior)
		});
		const scrollContainer = ((_d = _element == null ? void 0 : _element.document) == null ? void 0 : _d.documentElement) || (_element == null ? void 0 : _element.documentElement) || _element;
		if (x != null) internalX.value = scrollContainer.scrollLeft;
		if (y != null) internalY.value = scrollContainer.scrollTop;
	}
	const isScrolling = ref(false);
	const arrivedState = reactive({
		left: true,
		right: false,
		top: true,
		bottom: false
	});
	const directions = reactive({
		left: false,
		right: false,
		top: false,
		bottom: false
	});
	const onScrollEnd = (e) => {
		if (!isScrolling.value) return;
		isScrolling.value = false;
		directions.left = false;
		directions.right = false;
		directions.top = false;
		directions.bottom = false;
		onStop(e);
	};
	const onScrollEndDebounced = useDebounceFn(onScrollEnd, throttle + idle);
	const setArrivedState = (target) => {
		var _a;
		if (!window$1) return;
		const el = ((_a = target == null ? void 0 : target.document) == null ? void 0 : _a.documentElement) || (target == null ? void 0 : target.documentElement) || unrefElement(target);
		const { display, flexDirection } = getComputedStyle(el);
		const scrollLeft = el.scrollLeft;
		directions.left = scrollLeft < internalX.value;
		directions.right = scrollLeft > internalX.value;
		const left = Math.abs(scrollLeft) <= (offset.left || 0);
		const right = Math.abs(scrollLeft) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
		if (display === "flex" && flexDirection === "row-reverse") {
			arrivedState.left = right;
			arrivedState.right = left;
		} else {
			arrivedState.left = left;
			arrivedState.right = right;
		}
		internalX.value = scrollLeft;
		let scrollTop = el.scrollTop;
		if (target === window$1.document && !scrollTop) scrollTop = window$1.document.body.scrollTop;
		directions.top = scrollTop < internalY.value;
		directions.bottom = scrollTop > internalY.value;
		const top = Math.abs(scrollTop) <= (offset.top || 0);
		const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
		if (display === "flex" && flexDirection === "column-reverse") {
			arrivedState.top = bottom;
			arrivedState.bottom = top;
		} else {
			arrivedState.top = top;
			arrivedState.bottom = bottom;
		}
		internalY.value = scrollTop;
	};
	const onScrollHandler = (e) => {
		var _a;
		if (!window$1) return;
		setArrivedState((_a = e.target.documentElement) != null ? _a : e.target);
		isScrolling.value = true;
		onScrollEndDebounced(e);
		onScroll(e);
	};
	useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler, eventListenerOptions);
	tryOnMounted(() => {
		try {
			const _element = toValue(element);
			if (!_element) return;
			setArrivedState(_element);
		} catch (e) {
			onError(e);
		}
	});
	useEventListener(element, "scrollend", onScrollEnd, eventListenerOptions);
	return {
		x,
		y,
		isScrolling,
		arrivedState,
		directions,
		measure() {
			const _element = toValue(element);
			if (window$1 && _element) setArrivedState(_element);
		}
	};
}
function useLocalStorage(key, initialValue, options = {}) {
	const { window: window$1 = defaultWindow } = options;
	return useStorage(key, initialValue, window$1 == null ? void 0 : window$1.localStorage, options);
}
function useSessionStorage(key, initialValue, options = {}) {
	const { window: window$1 = defaultWindow } = options;
	return useStorage(key, initialValue, window$1 == null ? void 0 : window$1.sessionStorage, options);
}
function useSpeechRecognition(options = {}) {
	const { interimResults = true, continuous = true, window: window$1 = defaultWindow } = options;
	const lang = toRef(options.lang || "en-US");
	const isListening = ref(false);
	const isFinal = ref(false);
	const result = ref("");
	const error$2 = shallowRef(void 0);
	const toggle = (value = !isListening.value) => {
		isListening.value = value;
	};
	const start = () => {
		isListening.value = true;
	};
	const stop = () => {
		isListening.value = false;
	};
	const SpeechRecognition = window$1 && (window$1.SpeechRecognition || window$1.webkitSpeechRecognition);
	const isSupported = useSupported(() => SpeechRecognition);
	let recognition;
	if (isSupported.value) {
		recognition = new SpeechRecognition();
		recognition.continuous = continuous;
		recognition.interimResults = interimResults;
		recognition.lang = toValue(lang);
		recognition.onstart = () => {
			isFinal.value = false;
		};
		watch(lang, (lang2) => {
			if (recognition && !isListening.value) recognition.lang = lang2;
		});
		recognition.onresult = (event) => {
			const currentResult = event.results[event.resultIndex];
			const { transcript } = currentResult[0];
			isFinal.value = currentResult.isFinal;
			result.value = transcript;
			error$2.value = void 0;
		};
		recognition.onerror = (event) => {
			error$2.value = event;
		};
		recognition.onend = () => {
			isListening.value = false;
			recognition.lang = toValue(lang);
		};
		watch(isListening, () => {
			if (isListening.value) recognition.start();
			else recognition.stop();
		});
	}
	tryOnScopeDispose(() => {
		isListening.value = false;
	});
	return {
		isSupported,
		isListening,
		isFinal,
		recognition,
		result,
		error: error$2,
		toggle,
		start,
		stop
	};
}
function useSpeechSynthesis(text, options = {}) {
	const { pitch = 1, rate = 1, volume = 1, window: window$1 = defaultWindow } = options;
	const synth = window$1 && window$1.speechSynthesis;
	const isSupported = useSupported(() => synth);
	const isPlaying = ref(false);
	const status = ref("init");
	const spokenText = toRef(text || "");
	const lang = toRef(options.lang || "en-US");
	const error$2 = shallowRef(void 0);
	const toggle = (value = !isPlaying.value) => {
		isPlaying.value = value;
	};
	const bindEventsForUtterance = (utterance2) => {
		utterance2.lang = toValue(lang);
		utterance2.voice = toValue(options.voice) || null;
		utterance2.pitch = toValue(pitch);
		utterance2.rate = toValue(rate);
		utterance2.volume = volume;
		utterance2.onstart = () => {
			isPlaying.value = true;
			status.value = "play";
		};
		utterance2.onpause = () => {
			isPlaying.value = false;
			status.value = "pause";
		};
		utterance2.onresume = () => {
			isPlaying.value = true;
			status.value = "play";
		};
		utterance2.onend = () => {
			isPlaying.value = false;
			status.value = "end";
		};
		utterance2.onerror = (event) => {
			error$2.value = event;
		};
	};
	const utterance = computed(() => {
		isPlaying.value = false;
		status.value = "init";
		const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
		bindEventsForUtterance(newUtterance);
		return newUtterance;
	});
	const speak = () => {
		synth.cancel();
		utterance && synth.speak(utterance.value);
	};
	const stop = () => {
		synth.cancel();
		isPlaying.value = false;
	};
	if (isSupported.value) {
		bindEventsForUtterance(utterance.value);
		watch(lang, (lang2) => {
			if (utterance.value && !isPlaying.value) utterance.value.lang = lang2;
		});
		if (options.voice) watch(options.voice, () => {
			synth.cancel();
		});
		watch(isPlaying, () => {
			if (isPlaying.value) synth.resume();
			else synth.pause();
		});
	}
	tryOnScopeDispose(() => {
		isPlaying.value = false;
	});
	return {
		isSupported,
		isPlaying,
		status,
		utterance,
		error: error$2,
		stop,
		toggle,
		speak
	};
}
Number.POSITIVE_INFINITY;
function useTimestamp(options = {}) {
	const { controls: exposeControls = false, offset = 0, immediate = true, interval = "requestAnimationFrame", callback } = options;
	const ts = ref(timestamp() + offset);
	const update = () => ts.value = timestamp() + offset;
	const cb = callback ? () => {
		update();
		callback(ts.value);
	} : update;
	const controls = interval === "requestAnimationFrame" ? useRafFn(cb, { immediate }) : useIntervalFn(cb, interval, { immediate });
	if (exposeControls) return {
		timestamp: ts,
		...controls
	};
	else return ts;
}
function useVirtualList(list, options) {
	const { containerStyle, wrapperProps, scrollTo: scrollTo$1, calculateRange, currentList, containerRef } = "itemHeight" in options ? useVerticalVirtualList(options, list) : useHorizontalVirtualList(options, list);
	return {
		list: currentList,
		scrollTo: scrollTo$1,
		containerProps: {
			ref: containerRef,
			onScroll: () => {
				calculateRange();
			},
			style: containerStyle
		},
		wrapperProps
	};
}
function useVirtualListResources(list) {
	const containerRef = ref(null);
	const size = useElementSize(containerRef);
	const currentList = ref([]);
	const source = shallowRef(list);
	return {
		state: ref({
			start: 0,
			end: 10
		}),
		source,
		currentList,
		size,
		containerRef
	};
}
function createGetViewCapacity(state, source, itemSize) {
	return (containerSize) => {
		if (typeof itemSize === "number") return Math.ceil(containerSize / itemSize);
		const { start = 0 } = state.value;
		let sum = 0;
		let capacity = 0;
		for (let i = start; i < source.value.length; i++) {
			const size = itemSize(i);
			sum += size;
			capacity = i;
			if (sum > containerSize) break;
		}
		return capacity - start;
	};
}
function createGetOffset(source, itemSize) {
	return (scrollDirection) => {
		if (typeof itemSize === "number") return Math.floor(scrollDirection / itemSize) + 1;
		let sum = 0;
		let offset = 0;
		for (let i = 0; i < source.value.length; i++) {
			const size = itemSize(i);
			sum += size;
			if (sum >= scrollDirection) {
				offset = i;
				break;
			}
		}
		return offset + 1;
	};
}
function createCalculateRange(type, overscan, getOffset, getViewCapacity, { containerRef, state, currentList, source }) {
	return () => {
		const element = containerRef.value;
		if (element) {
			const offset = getOffset(type === "vertical" ? element.scrollTop : element.scrollLeft);
			const viewCapacity = getViewCapacity(type === "vertical" ? element.clientHeight : element.clientWidth);
			const from = offset - overscan;
			const to = offset + viewCapacity + overscan;
			state.value = {
				start: from < 0 ? 0 : from,
				end: to > source.value.length ? source.value.length : to
			};
			currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
				data: ele,
				index: index + state.value.start
			}));
		}
	};
}
function createGetDistance(itemSize, source) {
	return (index) => {
		if (typeof itemSize === "number") return index * itemSize;
		return source.value.slice(0, index).reduce((sum, _, i) => sum + itemSize(i), 0);
	};
}
function useWatchForSizes(size, list, containerRef, calculateRange) {
	watch([
		size.width,
		size.height,
		list,
		containerRef
	], () => {
		calculateRange();
	});
}
function createComputedTotalSize(itemSize, source) {
	return computed(() => {
		if (typeof itemSize === "number") return source.value.length * itemSize;
		return source.value.reduce((sum, _, index) => sum + itemSize(index), 0);
	});
}
var scrollToDictionaryForElementScrollKey = {
	horizontal: "scrollLeft",
	vertical: "scrollTop"
};
function createScrollTo(type, calculateRange, getDistance, containerRef) {
	return (index) => {
		if (containerRef.value) {
			containerRef.value[scrollToDictionaryForElementScrollKey[type]] = getDistance(index);
			calculateRange();
		}
	};
}
function useHorizontalVirtualList(options, list) {
	const resources = useVirtualListResources(list);
	const { state, source, currentList, size, containerRef } = resources;
	const containerStyle = { overflowX: "auto" };
	const { itemWidth, overscan = 5 } = options;
	const getViewCapacity = createGetViewCapacity(state, source, itemWidth);
	const calculateRange = createCalculateRange("horizontal", overscan, createGetOffset(source, itemWidth), getViewCapacity, resources);
	const getDistanceLeft = createGetDistance(itemWidth, source);
	const offsetLeft = computed(() => getDistanceLeft(state.value.start));
	const totalWidth = createComputedTotalSize(itemWidth, source);
	useWatchForSizes(size, list, containerRef, calculateRange);
	return {
		scrollTo: createScrollTo("horizontal", calculateRange, getDistanceLeft, containerRef),
		calculateRange,
		wrapperProps: computed(() => {
			return { style: {
				height: "100%",
				width: `${totalWidth.value - offsetLeft.value}px`,
				marginLeft: `${offsetLeft.value}px`,
				display: "flex"
			} };
		}),
		containerStyle,
		currentList,
		containerRef
	};
}
function useVerticalVirtualList(options, list) {
	const resources = useVirtualListResources(list);
	const { state, source, currentList, size, containerRef } = resources;
	const containerStyle = { overflowY: "auto" };
	const { itemHeight, overscan = 5 } = options;
	const getViewCapacity = createGetViewCapacity(state, source, itemHeight);
	const calculateRange = createCalculateRange("vertical", overscan, createGetOffset(source, itemHeight), getViewCapacity, resources);
	const getDistanceTop = createGetDistance(itemHeight, source);
	const offsetTop = computed(() => getDistanceTop(state.value.start));
	const totalHeight = createComputedTotalSize(itemHeight, source);
	useWatchForSizes(size, list, containerRef, calculateRange);
	return {
		calculateRange,
		scrollTo: createScrollTo("vertical", calculateRange, getDistanceTop, containerRef),
		containerStyle,
		wrapperProps: computed(() => {
			return { style: {
				width: "100%",
				height: `${totalHeight.value - offsetTop.value}px`,
				marginTop: `${offsetTop.value}px`
			} };
		}),
		currentList,
		containerRef
	};
}
var require_isArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Array.isArray;
}));
var require__freeGlobal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typeof global == "object" && global && global.Object === Object && global;
}));
var require__root = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	module.exports = freeGlobal || freeSelf || Function("return this")();
}));
var require__Symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Symbol;
}));
var require__getRawTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol$2 = require__Symbol();
	var objectProto$1 = Object.prototype;
	var hasOwnProperty$3 = objectProto$1.hasOwnProperty;
	var nativeObjectToString$1 = objectProto$1.toString;
	var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
	function getRawTag$1(value) {
		var isOwn = hasOwnProperty$3.call(value, symToStringTag$1), tag = value[symToStringTag$1];
		try {
			value[symToStringTag$1] = void 0;
			var unmasked = true;
		} catch (e) {}
		var result = nativeObjectToString$1.call(value);
		if (unmasked) if (isOwn) value[symToStringTag$1] = tag;
		else delete value[symToStringTag$1];
		return result;
	}
	module.exports = getRawTag$1;
}));
var require__objectToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeObjectToString = Object.prototype.toString;
	function objectToString$1(value) {
		return nativeObjectToString.call(value);
	}
	module.exports = objectToString$1;
}));
var require__baseGetTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol$1 = require__Symbol(), getRawTag = require__getRawTag(), objectToString = require__objectToString();
	var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
	function baseGetTag$1(value) {
		if (value == null) return value === void 0 ? undefinedTag : nullTag;
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	module.exports = baseGetTag$1;
}));
var require_isObjectLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	module.exports = isObjectLike;
}));
var require_isObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function isObject$2(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	module.exports = isObject$2;
}));
var require_isFunction = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag(), isObject$1 = require_isObject();
	var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
	function isFunction$1(value) {
		if (!isObject$1(value)) return false;
		var tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	module.exports = isFunction$1;
}));
var require__coreJsData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root()["__core-js_shared__"];
}));
var require__isMasked = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var coreJsData = require__coreJsData();
	var maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	function isMasked$1(func) {
		return !!maskSrcKey && maskSrcKey in func;
	}
	module.exports = isMasked$1;
}));
var require__toSource = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var funcToString$1 = Function.prototype.toString;
	function toSource$1(func) {
		if (func != null) {
			try {
				return funcToString$1.call(func);
			} catch (e) {}
			try {
				return func + "";
			} catch (e) {}
		}
		return "";
	}
	module.exports = toSource$1;
}));
var require__baseIsNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction(), isMasked = require__isMasked(), isObject = require_isObject(), toSource = require__toSource();
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	var funcProto = Function.prototype, objectProto = Object.prototype;
	var funcToString = funcProto.toString;
	var hasOwnProperty$2 = objectProto.hasOwnProperty;
	var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function baseIsNative$1(value) {
		if (!isObject(value) || isMasked(value)) return false;
		return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
	}
	module.exports = baseIsNative$1;
}));
var require__getValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function getValue$1(object, key) {
		return object == null ? void 0 : object[key];
	}
	module.exports = getValue$1;
}));
var require__getNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsNative = require__baseIsNative(), getValue = require__getValue();
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	module.exports = getNative;
}));
var require__nativeCreate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(Object, "create");
}));
var require__hashClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate$3 = require__nativeCreate();
	function hashClear$1() {
		this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
		this.size = 0;
	}
	module.exports = hashClear$1;
}));
var require__hashDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function hashDelete$1(key) {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = hashDelete$1;
}));
var require__hashGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate$2 = require__nativeCreate();
	var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	function hashGet$1(key) {
		var data = this.__data__;
		if (nativeCreate$2) {
			var result = data[key];
			return result === HASH_UNDEFINED$1 ? void 0 : result;
		}
		return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
	}
	module.exports = hashGet$1;
}));
var require__hashHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate$1 = require__nativeCreate();
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hashHas$1(key) {
		var data = this.__data__;
		return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty.call(data, key);
	}
	module.exports = hashHas$1;
}));
var require__hashSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	function hashSet$1(key, value) {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
		return this;
	}
	module.exports = hashSet$1;
}));
var require__Hash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hashClear = require__hashClear(), hashDelete = require__hashDelete(), hashGet = require__hashGet(), hashHas = require__hashHas(), hashSet = require__hashSet();
	function Hash$1(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype["delete"] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;
	module.exports = Hash$1;
}));
var require__listCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function listCacheClear$1() {
		this.__data__ = [];
		this.size = 0;
	}
	module.exports = listCacheClear$1;
}));
var require_eq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function eq$1(value, other) {
		return value === other || value !== value && other !== other;
	}
	module.exports = eq$1;
}));
var require__assocIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var eq = require_eq();
	function assocIndexOf$4(array, key) {
		var length = array.length;
		while (length--) if (eq(array[length][0], key)) return length;
		return -1;
	}
	module.exports = assocIndexOf$4;
}));
var require__listCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf$3 = require__assocIndexOf();
	var splice = Array.prototype.splice;
	function listCacheDelete$1(key) {
		var data = this.__data__, index = assocIndexOf$3(data, key);
		if (index < 0) return false;
		if (index == data.length - 1) data.pop();
		else splice.call(data, index, 1);
		--this.size;
		return true;
	}
	module.exports = listCacheDelete$1;
}));
var require__listCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf$2 = require__assocIndexOf();
	function listCacheGet$1(key) {
		var data = this.__data__, index = assocIndexOf$2(data, key);
		return index < 0 ? void 0 : data[index][1];
	}
	module.exports = listCacheGet$1;
}));
var require__listCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf$1 = require__assocIndexOf();
	function listCacheHas$1(key) {
		return assocIndexOf$1(this.__data__, key) > -1;
	}
	module.exports = listCacheHas$1;
}));
var require__listCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	function listCacheSet$1(key, value) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) {
			++this.size;
			data.push([key, value]);
		} else data[index][1] = value;
		return this;
	}
	module.exports = listCacheSet$1;
}));
var require__ListCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var listCacheClear = require__listCacheClear(), listCacheDelete = require__listCacheDelete(), listCacheGet = require__listCacheGet(), listCacheHas = require__listCacheHas(), listCacheSet = require__listCacheSet();
	function ListCache$1(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	ListCache$1.prototype.clear = listCacheClear;
	ListCache$1.prototype["delete"] = listCacheDelete;
	ListCache$1.prototype.get = listCacheGet;
	ListCache$1.prototype.has = listCacheHas;
	ListCache$1.prototype.set = listCacheSet;
	module.exports = ListCache$1;
}));
var require__Map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Map");
}));
var require__mapCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Hash = require__Hash(), ListCache = require__ListCache(), Map$1 = require__Map();
	function mapCacheClear$1() {
		this.size = 0;
		this.__data__ = {
			"hash": new Hash(),
			"map": new (Map$1 || ListCache)(),
			"string": new Hash()
		};
	}
	module.exports = mapCacheClear$1;
}));
var require__isKeyable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function isKeyable$1(value) {
		var type = typeof value;
		return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
	}
	module.exports = isKeyable$1;
}));
var require__getMapData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isKeyable = require__isKeyable();
	function getMapData$4(map, key) {
		var data = map.__data__;
		return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
	}
	module.exports = getMapData$4;
}));
var require__mapCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData$3 = require__getMapData();
	function mapCacheDelete$1(key) {
		var result = getMapData$3(this, key)["delete"](key);
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = mapCacheDelete$1;
}));
var require__mapCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData$2 = require__getMapData();
	function mapCacheGet$1(key) {
		return getMapData$2(this, key).get(key);
	}
	module.exports = mapCacheGet$1;
}));
var require__mapCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData$1 = require__getMapData();
	function mapCacheHas$1(key) {
		return getMapData$1(this, key).has(key);
	}
	module.exports = mapCacheHas$1;
}));
var require__mapCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	function mapCacheSet$1(key, value) {
		var data = getMapData(this, key), size = data.size;
		data.set(key, value);
		this.size += data.size == size ? 0 : 1;
		return this;
	}
	module.exports = mapCacheSet$1;
}));
var require__MapCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var mapCacheClear = require__mapCacheClear(), mapCacheDelete = require__mapCacheDelete(), mapCacheGet = require__mapCacheGet(), mapCacheHas = require__mapCacheHas(), mapCacheSet = require__mapCacheSet();
	function MapCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	module.exports = MapCache;
}));
export { refThrottled as $, useFileDialog as A, useTimestamp as B, useCssVar as C, useElementSize as D, useElementHover as E, useScroll as F, isClient as G, createEventHook as H, useSessionStorage as I, noop as J, isIOS as K, useSpeechRecognition as L, useLocalStorage as M, useMediaQuery as N, useEventListener as O, useResizeObserver as P, refDebounced as Q, useSpeechSynthesis as R, useClipboard as S, useElementBounding as T, createInjectionState as U, useVirtualList as V, directiveHooks as W, reactiveOmit as X, notNullish as Y, reactivePick as Z, onKeyDown as _, i18nInstance as _t, require__getNative as a, until as at, useActiveElement as b, I18nT as bt, require_isObject as c, watchDebounced as ct, require__Symbol as d, isVue2 as dt, toRef as et, require__root as f, set as ft, onClickOutside as g, i18n as gt, computedAsync as h, addNodeTranslation as ht, require_eq as i, tryOnScopeDispose as it, useIntersectionObserver as j, useFavicon as k, require_isObjectLike as l, watchOnce as lt, require_isArray as m, addHeaders as mt, require__Map as n, toValue as nt, require__toSource as o, useDebounceFn as ot, require__freeGlobal as p, addCredentialTranslation as pt, isObject$3 as q, require__ListCache as r, tryOnMounted as rt, require_isFunction as s, useThrottleFn as st, require__MapCache as t, toRefs as tt, require__baseGetTag as u, watchThrottled as ut, onKeyStroke as v, setLanguage as vt, useDocumentVisibility as w, useAsyncState as x, onKeyUp as y, useI18n as yt, useStorage as z };

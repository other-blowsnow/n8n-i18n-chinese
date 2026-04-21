import { C as process$1, S as init_dist } from "./empty-CiiQN7-8.js";
//#region ../../../node_modules/.pnpm/@marijn+find-cluster-break@1.0.2/node_modules/@marijn/find-cluster-break/src/index.js
var rangeFrom = [], rangeTo = [];
(() => {
	let numbers = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((s) => s ? parseInt(s, 36) : 1);
	for (let i = 0, n = 0; i < numbers.length; i++) (i % 2 ? rangeTo : rangeFrom).push(n = n + numbers[i]);
})();
function isExtendingChar(code) {
	if (code < 768) return false;
	for (let from = 0, to = rangeFrom.length;;) {
		let mid = from + to >> 1;
		if (code < rangeFrom[mid]) to = mid;
		else if (code >= rangeTo[mid]) from = mid + 1;
		else return true;
		if (from == to) return false;
	}
}
function isRegionalIndicator(code) {
	return code >= 127462 && code <= 127487;
}
var ZWJ = 8205;
function findClusterBreak$1(str, pos, forward = true, includeExtending = true) {
	return (forward ? nextClusterBreak : prevClusterBreak)(str, pos, includeExtending);
}
function nextClusterBreak(str, pos, includeExtending) {
	if (pos == str.length) return pos;
	if (pos && surrogateLow$1(str.charCodeAt(pos)) && surrogateHigh$1(str.charCodeAt(pos - 1))) pos--;
	let prev = codePointAt$1(str, pos);
	pos += codePointSize$1(prev);
	while (pos < str.length) {
		let next = codePointAt$1(str, pos);
		if (prev == ZWJ || next == ZWJ || includeExtending && isExtendingChar(next)) {
			pos += codePointSize$1(next);
			prev = next;
		} else if (isRegionalIndicator(next)) {
			let countBefore = 0, i = pos - 2;
			while (i >= 0 && isRegionalIndicator(codePointAt$1(str, i))) {
				countBefore++;
				i -= 2;
			}
			if (countBefore % 2 == 0) break;
			else pos += 2;
		} else break;
	}
	return pos;
}
function prevClusterBreak(str, pos, includeExtending) {
	while (pos > 0) {
		let found = nextClusterBreak(str, pos - 2, includeExtending);
		if (found < pos) return found;
		pos--;
	}
	return 0;
}
function codePointAt$1(str, pos) {
	let code0 = str.charCodeAt(pos);
	if (!surrogateHigh$1(code0) || pos + 1 == str.length) return code0;
	let code1 = str.charCodeAt(pos + 1);
	if (!surrogateLow$1(code1)) return code0;
	return (code0 - 55296 << 10) + (code1 - 56320) + 65536;
}
function surrogateLow$1(ch) {
	return ch >= 56320 && ch < 57344;
}
function surrogateHigh$1(ch) {
	return ch >= 55296 && ch < 56320;
}
function codePointSize$1(code) {
	return code < 65536 ? 1 : 2;
}
//#endregion
//#region ../../../node_modules/.pnpm/@codemirror+state@6.5.3/node_modules/@codemirror/state/dist/index.js
/**
The data structure for documents. @nonabstract
*/
var Text = class Text {
	/**
	Get the line description around the given position.
	*/
	lineAt(pos) {
		if (pos < 0 || pos > this.length) throw new RangeError(`Invalid position ${pos} in document of length ${this.length}`);
		return this.lineInner(pos, false, 1, 0);
	}
	/**
	Get the description for the given (1-based) line number.
	*/
	line(n) {
		if (n < 1 || n > this.lines) throw new RangeError(`Invalid line number ${n} in ${this.lines}-line document`);
		return this.lineInner(n, true, 1, 0);
	}
	/**
	Replace a range of the text with the given content.
	*/
	replace(from, to, text) {
		[from, to] = clip(this, from, to);
		let parts = [];
		this.decompose(0, from, parts, 2);
		if (text.length) text.decompose(0, text.length, parts, 3);
		this.decompose(to, this.length, parts, 1);
		return TextNode.from(parts, this.length - (to - from) + text.length);
	}
	/**
	Append another document to this one.
	*/
	append(other) {
		return this.replace(this.length, this.length, other);
	}
	/**
	Retrieve the text between the given points.
	*/
	slice(from, to = this.length) {
		[from, to] = clip(this, from, to);
		let parts = [];
		this.decompose(from, to, parts, 0);
		return TextNode.from(parts, to - from);
	}
	/**
	Test whether this text is equal to another instance.
	*/
	eq(other) {
		if (other == this) return true;
		if (other.length != this.length || other.lines != this.lines) return false;
		let start = this.scanIdentical(other, 1), end = this.length - this.scanIdentical(other, -1);
		let a = new RawTextCursor(this), b = new RawTextCursor(other);
		for (let skip = start, pos = start;;) {
			a.next(skip);
			b.next(skip);
			skip = 0;
			if (a.lineBreak != b.lineBreak || a.done != b.done || a.value != b.value) return false;
			pos += a.value.length;
			if (a.done || pos >= end) return true;
		}
	}
	/**
	Iterate over the text. When `dir` is `-1`, iteration happens
	from end to start. This will return lines and the breaks between
	them as separate strings.
	*/
	iter(dir = 1) {
		return new RawTextCursor(this, dir);
	}
	/**
	Iterate over a range of the text. When `from` > `to`, the
	iterator will run in reverse.
	*/
	iterRange(from, to = this.length) {
		return new PartialTextCursor(this, from, to);
	}
	/**
	Return a cursor that iterates over the given range of lines,
	_without_ returning the line breaks between, and yielding empty
	strings for empty lines.
	
	When `from` and `to` are given, they should be 1-based line numbers.
	*/
	iterLines(from, to) {
		let inner;
		if (from == null) inner = this.iter();
		else {
			if (to == null) to = this.lines + 1;
			let start = this.line(from).from;
			inner = this.iterRange(start, Math.max(start, to == this.lines + 1 ? this.length : to <= 1 ? 0 : this.line(to - 1).to));
		}
		return new LineCursor(inner);
	}
	/**
	Return the document as a string, using newline characters to
	separate lines.
	*/
	toString() {
		return this.sliceString(0);
	}
	/**
	Convert the document to an array of lines (which can be
	deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
	*/
	toJSON() {
		let lines = [];
		this.flatten(lines);
		return lines;
	}
	/**
	@internal
	*/
	constructor() {}
	/**
	Create a `Text` instance for the given array of lines.
	*/
	static of(text) {
		if (text.length == 0) throw new RangeError("A document must have at least one line");
		if (text.length == 1 && !text[0]) return Text.empty;
		return text.length <= 32 ? new TextLeaf(text) : TextNode.from(TextLeaf.split(text, []));
	}
};
var TextLeaf = class TextLeaf extends Text {
	constructor(text, length = textLength(text)) {
		super();
		this.text = text;
		this.length = length;
	}
	get lines() {
		return this.text.length;
	}
	get children() {
		return null;
	}
	lineInner(target, isLine, line, offset) {
		for (let i = 0;; i++) {
			let string = this.text[i], end = offset + string.length;
			if ((isLine ? line : end) >= target) return new Line(offset, end, line, string);
			offset = end + 1;
			line++;
		}
	}
	decompose(from, to, target, open) {
		let text = from <= 0 && to >= this.length ? this : new TextLeaf(sliceText(this.text, from, to), Math.min(to, this.length) - Math.max(0, from));
		if (open & 1) {
			let prev = target.pop();
			let joined = appendText(text.text, prev.text.slice(), 0, text.length);
			if (joined.length <= 32) target.push(new TextLeaf(joined, prev.length + text.length));
			else {
				let mid = joined.length >> 1;
				target.push(new TextLeaf(joined.slice(0, mid)), new TextLeaf(joined.slice(mid)));
			}
		} else target.push(text);
	}
	replace(from, to, text) {
		if (!(text instanceof TextLeaf)) return super.replace(from, to, text);
		[from, to] = clip(this, from, to);
		let lines = appendText(this.text, appendText(text.text, sliceText(this.text, 0, from)), to);
		let newLen = this.length + text.length - (to - from);
		if (lines.length <= 32) return new TextLeaf(lines, newLen);
		return TextNode.from(TextLeaf.split(lines, []), newLen);
	}
	sliceString(from, to = this.length, lineSep = "\n") {
		[from, to] = clip(this, from, to);
		let result = "";
		for (let pos = 0, i = 0; pos <= to && i < this.text.length; i++) {
			let line = this.text[i], end = pos + line.length;
			if (pos > from && i) result += lineSep;
			if (from < end && to > pos) result += line.slice(Math.max(0, from - pos), to - pos);
			pos = end + 1;
		}
		return result;
	}
	flatten(target) {
		for (let line of this.text) target.push(line);
	}
	scanIdentical() {
		return 0;
	}
	static split(text, target) {
		let part = [], len = -1;
		for (let line of text) {
			part.push(line);
			len += line.length + 1;
			if (part.length == 32) {
				target.push(new TextLeaf(part, len));
				part = [];
				len = -1;
			}
		}
		if (len > -1) target.push(new TextLeaf(part, len));
		return target;
	}
};
var TextNode = class TextNode extends Text {
	constructor(children, length) {
		super();
		this.children = children;
		this.length = length;
		this.lines = 0;
		for (let child of children) this.lines += child.lines;
	}
	lineInner(target, isLine, line, offset) {
		for (let i = 0;; i++) {
			let child = this.children[i], end = offset + child.length, endLine = line + child.lines - 1;
			if ((isLine ? endLine : end) >= target) return child.lineInner(target, isLine, line, offset);
			offset = end + 1;
			line = endLine + 1;
		}
	}
	decompose(from, to, target, open) {
		for (let i = 0, pos = 0; pos <= to && i < this.children.length; i++) {
			let child = this.children[i], end = pos + child.length;
			if (from <= end && to >= pos) {
				let childOpen = open & ((pos <= from ? 1 : 0) | (end >= to ? 2 : 0));
				if (pos >= from && end <= to && !childOpen) target.push(child);
				else child.decompose(from - pos, to - pos, target, childOpen);
			}
			pos = end + 1;
		}
	}
	replace(from, to, text) {
		[from, to] = clip(this, from, to);
		if (text.lines < this.lines) for (let i = 0, pos = 0; i < this.children.length; i++) {
			let child = this.children[i], end = pos + child.length;
			if (from >= pos && to <= end) {
				let updated = child.replace(from - pos, to - pos, text);
				let totalLines = this.lines - child.lines + updated.lines;
				if (updated.lines < totalLines >> 4 && updated.lines > totalLines >> 6) {
					let copy = this.children.slice();
					copy[i] = updated;
					return new TextNode(copy, this.length - (to - from) + text.length);
				}
				return super.replace(pos, end, updated);
			}
			pos = end + 1;
		}
		return super.replace(from, to, text);
	}
	sliceString(from, to = this.length, lineSep = "\n") {
		[from, to] = clip(this, from, to);
		let result = "";
		for (let i = 0, pos = 0; i < this.children.length && pos <= to; i++) {
			let child = this.children[i], end = pos + child.length;
			if (pos > from && i) result += lineSep;
			if (from < end && to > pos) result += child.sliceString(from - pos, to - pos, lineSep);
			pos = end + 1;
		}
		return result;
	}
	flatten(target) {
		for (let child of this.children) child.flatten(target);
	}
	scanIdentical(other, dir) {
		if (!(other instanceof TextNode)) return 0;
		let length = 0;
		let [iA, iB, eA, eB] = dir > 0 ? [
			0,
			0,
			this.children.length,
			other.children.length
		] : [
			this.children.length - 1,
			other.children.length - 1,
			-1,
			-1
		];
		for (;; iA += dir, iB += dir) {
			if (iA == eA || iB == eB) return length;
			let chA = this.children[iA], chB = other.children[iB];
			if (chA != chB) return length + chA.scanIdentical(chB, dir);
			length += chA.length + 1;
		}
	}
	static from(children, length = children.reduce((l, ch) => l + ch.length + 1, -1)) {
		let lines = 0;
		for (let ch of children) lines += ch.lines;
		if (lines < 32) {
			let flat = [];
			for (let ch of children) ch.flatten(flat);
			return new TextLeaf(flat, length);
		}
		let chunk = Math.max(32, lines >> 5), maxChunk = chunk << 1, minChunk = chunk >> 1;
		let chunked = [], currentLines = 0, currentLen = -1, currentChunk = [];
		function add(child) {
			let last;
			if (child.lines > maxChunk && child instanceof TextNode) for (let node of child.children) add(node);
			else if (child.lines > minChunk && (currentLines > minChunk || !currentLines)) {
				flush();
				chunked.push(child);
			} else if (child instanceof TextLeaf && currentLines && (last = currentChunk[currentChunk.length - 1]) instanceof TextLeaf && child.lines + last.lines <= 32) {
				currentLines += child.lines;
				currentLen += child.length + 1;
				currentChunk[currentChunk.length - 1] = new TextLeaf(last.text.concat(child.text), last.length + 1 + child.length);
			} else {
				if (currentLines + child.lines > chunk) flush();
				currentLines += child.lines;
				currentLen += child.length + 1;
				currentChunk.push(child);
			}
		}
		function flush() {
			if (currentLines == 0) return;
			chunked.push(currentChunk.length == 1 ? currentChunk[0] : TextNode.from(currentChunk, currentLen));
			currentLen = -1;
			currentLines = currentChunk.length = 0;
		}
		for (let child of children) add(child);
		flush();
		return chunked.length == 1 ? chunked[0] : new TextNode(chunked, length);
	}
};
Text.empty = /* @__PURE__ */ new TextLeaf([""], 0);
function textLength(text) {
	let length = -1;
	for (let line of text) length += line.length + 1;
	return length;
}
function appendText(text, target, from = 0, to = 1e9) {
	for (let pos = 0, i = 0, first = true; i < text.length && pos <= to; i++) {
		let line = text[i], end = pos + line.length;
		if (end >= from) {
			if (end > to) line = line.slice(0, to - pos);
			if (pos < from) line = line.slice(from - pos);
			if (first) {
				target[target.length - 1] += line;
				first = false;
			} else target.push(line);
		}
		pos = end + 1;
	}
	return target;
}
function sliceText(text, from, to) {
	return appendText(text, [""], from, to);
}
var RawTextCursor = class {
	constructor(text, dir = 1) {
		this.dir = dir;
		this.done = false;
		this.lineBreak = false;
		this.value = "";
		this.nodes = [text];
		this.offsets = [dir > 0 ? 1 : (text instanceof TextLeaf ? text.text.length : text.children.length) << 1];
	}
	nextInner(skip, dir) {
		this.done = this.lineBreak = false;
		for (;;) {
			let last = this.nodes.length - 1;
			let top = this.nodes[last], offsetValue = this.offsets[last], offset = offsetValue >> 1;
			let size = top instanceof TextLeaf ? top.text.length : top.children.length;
			if (offset == (dir > 0 ? size : 0)) {
				if (last == 0) {
					this.done = true;
					this.value = "";
					return this;
				}
				if (dir > 0) this.offsets[last - 1]++;
				this.nodes.pop();
				this.offsets.pop();
			} else if ((offsetValue & 1) == (dir > 0 ? 0 : 1)) {
				this.offsets[last] += dir;
				if (skip == 0) {
					this.lineBreak = true;
					this.value = "\n";
					return this;
				}
				skip--;
			} else if (top instanceof TextLeaf) {
				let next = top.text[offset + (dir < 0 ? -1 : 0)];
				this.offsets[last] += dir;
				if (next.length > Math.max(0, skip)) {
					this.value = skip == 0 ? next : dir > 0 ? next.slice(skip) : next.slice(0, next.length - skip);
					return this;
				}
				skip -= next.length;
			} else {
				let next = top.children[offset + (dir < 0 ? -1 : 0)];
				if (skip > next.length) {
					skip -= next.length;
					this.offsets[last] += dir;
				} else {
					if (dir < 0) this.offsets[last]--;
					this.nodes.push(next);
					this.offsets.push(dir > 0 ? 1 : (next instanceof TextLeaf ? next.text.length : next.children.length) << 1);
				}
			}
		}
	}
	next(skip = 0) {
		if (skip < 0) {
			this.nextInner(-skip, -this.dir);
			skip = this.value.length;
		}
		return this.nextInner(skip, this.dir);
	}
};
var PartialTextCursor = class {
	constructor(text, start, end) {
		this.value = "";
		this.done = false;
		this.cursor = new RawTextCursor(text, start > end ? -1 : 1);
		this.pos = start > end ? text.length : 0;
		this.from = Math.min(start, end);
		this.to = Math.max(start, end);
	}
	nextInner(skip, dir) {
		if (dir < 0 ? this.pos <= this.from : this.pos >= this.to) {
			this.value = "";
			this.done = true;
			return this;
		}
		skip += Math.max(0, dir < 0 ? this.pos - this.to : this.from - this.pos);
		let limit = dir < 0 ? this.pos - this.from : this.to - this.pos;
		if (skip > limit) skip = limit;
		limit -= skip;
		let { value } = this.cursor.next(skip);
		this.pos += (value.length + skip) * dir;
		this.value = value.length <= limit ? value : dir < 0 ? value.slice(value.length - limit) : value.slice(0, limit);
		this.done = !this.value;
		return this;
	}
	next(skip = 0) {
		if (skip < 0) skip = Math.max(skip, this.from - this.pos);
		else if (skip > 0) skip = Math.min(skip, this.to - this.pos);
		return this.nextInner(skip, this.cursor.dir);
	}
	get lineBreak() {
		return this.cursor.lineBreak && this.value != "";
	}
};
var LineCursor = class {
	constructor(inner) {
		this.inner = inner;
		this.afterBreak = true;
		this.value = "";
		this.done = false;
	}
	next(skip = 0) {
		let { done, lineBreak, value } = this.inner.next(skip);
		if (done && this.afterBreak) {
			this.value = "";
			this.afterBreak = false;
		} else if (done) {
			this.done = true;
			this.value = "";
		} else if (lineBreak) if (this.afterBreak) this.value = "";
		else {
			this.afterBreak = true;
			this.next();
		}
		else {
			this.value = value;
			this.afterBreak = false;
		}
		return this;
	}
	get lineBreak() {
		return false;
	}
};
if (typeof Symbol != "undefined") {
	Text.prototype[Symbol.iterator] = function() {
		return this.iter();
	};
	RawTextCursor.prototype[Symbol.iterator] = PartialTextCursor.prototype[Symbol.iterator] = LineCursor.prototype[Symbol.iterator] = function() {
		return this;
	};
}
/**
This type describes a line in the document. It is created
on-demand when lines are [queried](https://codemirror.net/6/docs/ref/#state.Text.lineAt).
*/
var Line = class {
	/**
	@internal
	*/
	constructor(from, to, number, text) {
		this.from = from;
		this.to = to;
		this.number = number;
		this.text = text;
	}
	/**
	The length of the line (not including any line break after it).
	*/
	get length() {
		return this.to - this.from;
	}
};
function clip(text, from, to) {
	from = Math.max(0, Math.min(text.length, from));
	return [from, Math.max(from, Math.min(text.length, to))];
}
/**
Returns a next grapheme cluster break _after_ (not equal to)
`pos`, if `forward` is true, or before otherwise. Returns `pos`
itself if no further cluster break is available in the string.
Moves across surrogate pairs, extending characters (when
`includeExtending` is true), characters joined with zero-width
joiners, and flag emoji.
*/
function findClusterBreak(str, pos, forward = true, includeExtending = true) {
	return findClusterBreak$1(str, pos, forward, includeExtending);
}
function surrogateLow(ch) {
	return ch >= 56320 && ch < 57344;
}
function surrogateHigh(ch) {
	return ch >= 55296 && ch < 56320;
}
/**
Find the code point at the given position in a string (like the
[`codePointAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
string method).
*/
function codePointAt(str, pos) {
	let code0 = str.charCodeAt(pos);
	if (!surrogateHigh(code0) || pos + 1 == str.length) return code0;
	let code1 = str.charCodeAt(pos + 1);
	if (!surrogateLow(code1)) return code0;
	return (code0 - 55296 << 10) + (code1 - 56320) + 65536;
}
/**
Given a Unicode codepoint, return the JavaScript string that
respresents it (like
[`String.fromCodePoint`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)).
*/
function fromCodePoint(code) {
	if (code <= 65535) return String.fromCharCode(code);
	code -= 65536;
	return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
}
/**
The amount of positions a character takes up in a JavaScript string.
*/
function codePointSize(code) {
	return code < 65536 ? 1 : 2;
}
var DefaultSplit = /\r\n?|\n/;
/**
Distinguishes different ways in which positions can be mapped.
*/
var MapMode = /* @__PURE__ */ (function(MapMode) {
	/**
	Map a position to a valid new position, even when its context
	was deleted.
	*/
	MapMode[MapMode["Simple"] = 0] = "Simple";
	/**
	Return null if deletion happens across the position.
	*/
	MapMode[MapMode["TrackDel"] = 1] = "TrackDel";
	/**
	Return null if the character _before_ the position is deleted.
	*/
	MapMode[MapMode["TrackBefore"] = 2] = "TrackBefore";
	/**
	Return null if the character _after_ the position is deleted.
	*/
	MapMode[MapMode["TrackAfter"] = 3] = "TrackAfter";
	return MapMode;
})(MapMode || (MapMode = {}));
/**
A change description is a variant of [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet)
that doesn't store the inserted text. As such, it can't be
applied, but is cheaper to store and manipulate.
*/
var ChangeDesc = class ChangeDesc {
	/**
	@internal
	*/
	constructor(sections) {
		this.sections = sections;
	}
	/**
	The length of the document before the change.
	*/
	get length() {
		let result = 0;
		for (let i = 0; i < this.sections.length; i += 2) result += this.sections[i];
		return result;
	}
	/**
	The length of the document after the change.
	*/
	get newLength() {
		let result = 0;
		for (let i = 0; i < this.sections.length; i += 2) {
			let ins = this.sections[i + 1];
			result += ins < 0 ? this.sections[i] : ins;
		}
		return result;
	}
	/**
	False when there are actual changes in this set.
	*/
	get empty() {
		return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
	}
	/**
	Iterate over the unchanged parts left by these changes. `posA`
	provides the position of the range in the old document, `posB`
	the new position in the changed document.
	*/
	iterGaps(f) {
		for (let i = 0, posA = 0, posB = 0; i < this.sections.length;) {
			let len = this.sections[i++], ins = this.sections[i++];
			if (ins < 0) {
				f(posA, posB, len);
				posB += len;
			} else posB += ins;
			posA += len;
		}
	}
	/**
	Iterate over the ranges changed by these changes. (See
	[`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
	variant that also provides you with the inserted text.)
	`fromA`/`toA` provides the extent of the change in the starting
	document, `fromB`/`toB` the extent of the replacement in the
	changed document.
	
	When `individual` is true, adjacent changes (which are kept
	separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
	reported separately.
	*/
	iterChangedRanges(f, individual = false) {
		iterChanges(this, f, individual);
	}
	/**
	Get a description of the inverted form of these changes.
	*/
	get invertedDesc() {
		let sections = [];
		for (let i = 0; i < this.sections.length;) {
			let len = this.sections[i++], ins = this.sections[i++];
			if (ins < 0) sections.push(len, ins);
			else sections.push(ins, len);
		}
		return new ChangeDesc(sections);
	}
	/**
	Compute the combined effect of applying another set of changes
	after this one. The length of the document after this set should
	match the length before `other`.
	*/
	composeDesc(other) {
		return this.empty ? other : other.empty ? this : composeSets(this, other);
	}
	/**
	Map this description, which should start with the same document
	as `other`, over another set of changes, so that it can be
	applied after it. When `before` is true, map as if the changes
	in `this` happened before the ones in `other`.
	*/
	mapDesc(other, before = false) {
		return other.empty ? this : mapSet(this, other, before);
	}
	mapPos(pos, assoc = -1, mode = MapMode.Simple) {
		let posA = 0, posB = 0;
		for (let i = 0; i < this.sections.length;) {
			let len = this.sections[i++], ins = this.sections[i++], endA = posA + len;
			if (ins < 0) {
				if (endA > pos) return posB + (pos - posA);
				posB += len;
			} else {
				if (mode != MapMode.Simple && endA >= pos && (mode == MapMode.TrackDel && posA < pos && endA > pos || mode == MapMode.TrackBefore && posA < pos || mode == MapMode.TrackAfter && endA > pos)) return null;
				if (endA > pos || endA == pos && assoc < 0 && !len) return pos == posA || assoc < 0 ? posB : posB + ins;
				posB += ins;
			}
			posA = endA;
		}
		if (pos > posA) throw new RangeError(`Position ${pos} is out of range for changeset of length ${posA}`);
		return posB;
	}
	/**
	Check whether these changes touch a given range. When one of the
	changes entirely covers the range, the string `"cover"` is
	returned.
	*/
	touchesRange(from, to = from) {
		for (let i = 0, pos = 0; i < this.sections.length && pos <= to;) {
			let len = this.sections[i++], ins = this.sections[i++], end = pos + len;
			if (ins >= 0 && pos <= to && end >= from) return pos < from && end > to ? "cover" : true;
			pos = end;
		}
		return false;
	}
	/**
	@internal
	*/
	toString() {
		let result = "";
		for (let i = 0; i < this.sections.length;) {
			let len = this.sections[i++], ins = this.sections[i++];
			result += (result ? " " : "") + len + (ins >= 0 ? ":" + ins : "");
		}
		return result;
	}
	/**
	Serialize this change desc to a JSON-representable value.
	*/
	toJSON() {
		return this.sections;
	}
	/**
	Create a change desc from its JSON representation (as produced
	by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
	*/
	static fromJSON(json) {
		if (!Array.isArray(json) || json.length % 2 || json.some((a) => typeof a != "number")) throw new RangeError("Invalid JSON representation of ChangeDesc");
		return new ChangeDesc(json);
	}
	/**
	@internal
	*/
	static create(sections) {
		return new ChangeDesc(sections);
	}
};
/**
A change set represents a group of modifications to a document. It
stores the document length, and can only be applied to documents
with exactly that length.
*/
var ChangeSet = class ChangeSet extends ChangeDesc {
	constructor(sections, inserted) {
		super(sections);
		this.inserted = inserted;
	}
	/**
	Apply the changes to a document, returning the modified
	document.
	*/
	apply(doc) {
		if (this.length != doc.length) throw new RangeError("Applying change set to a document with the wrong length");
		iterChanges(this, (fromA, toA, fromB, _toB, text) => doc = doc.replace(fromB, fromB + (toA - fromA), text), false);
		return doc;
	}
	mapDesc(other, before = false) {
		return mapSet(this, other, before, true);
	}
	/**
	Given the document as it existed _before_ the changes, return a
	change set that represents the inverse of this set, which could
	be used to go from the document created by the changes back to
	the document as it existed before the changes.
	*/
	invert(doc) {
		let sections = this.sections.slice(), inserted = [];
		for (let i = 0, pos = 0; i < sections.length; i += 2) {
			let len = sections[i], ins = sections[i + 1];
			if (ins >= 0) {
				sections[i] = ins;
				sections[i + 1] = len;
				let index = i >> 1;
				while (inserted.length < index) inserted.push(Text.empty);
				inserted.push(len ? doc.slice(pos, pos + len) : Text.empty);
			}
			pos += len;
		}
		return new ChangeSet(sections, inserted);
	}
	/**
	Combine two subsequent change sets into a single set. `other`
	must start in the document produced by `this`. If `this` goes
	`docA` → `docB` and `other` represents `docB` → `docC`, the
	returned value will represent the change `docA` → `docC`.
	*/
	compose(other) {
		return this.empty ? other : other.empty ? this : composeSets(this, other, true);
	}
	/**
	Given another change set starting in the same document, maps this
	change set over the other, producing a new change set that can be
	applied to the document produced by applying `other`. When
	`before` is `true`, order changes as if `this` comes before
	`other`, otherwise (the default) treat `other` as coming first.
	
	Given two changes `A` and `B`, `A.compose(B.map(A))` and
	`B.compose(A.map(B, true))` will produce the same document. This
	provides a basic form of [operational
	transformation](https://en.wikipedia.org/wiki/Operational_transformation),
	and can be used for collaborative editing.
	*/
	map(other, before = false) {
		return other.empty ? this : mapSet(this, other, before, true);
	}
	/**
	Iterate over the changed ranges in the document, calling `f` for
	each, with the range in the original document (`fromA`-`toA`)
	and the range that replaces it in the new document
	(`fromB`-`toB`).
	
	When `individual` is true, adjacent changes are reported
	separately.
	*/
	iterChanges(f, individual = false) {
		iterChanges(this, f, individual);
	}
	/**
	Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
	set.
	*/
	get desc() {
		return ChangeDesc.create(this.sections);
	}
	/**
	@internal
	*/
	filter(ranges) {
		let resultSections = [], resultInserted = [], filteredSections = [];
		let iter = new SectionIter(this);
		done: for (let i = 0, pos = 0;;) {
			let next = i == ranges.length ? 1e9 : ranges[i++];
			while (pos < next || pos == next && iter.len == 0) {
				if (iter.done) break done;
				let len = Math.min(iter.len, next - pos);
				addSection(filteredSections, len, -1);
				let ins = iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0;
				addSection(resultSections, len, ins);
				if (ins > 0) addInsert(resultInserted, resultSections, iter.text);
				iter.forward(len);
				pos += len;
			}
			let end = ranges[i++];
			while (pos < end) {
				if (iter.done) break done;
				let len = Math.min(iter.len, end - pos);
				addSection(resultSections, len, -1);
				addSection(filteredSections, len, iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0);
				iter.forward(len);
				pos += len;
			}
		}
		return {
			changes: new ChangeSet(resultSections, resultInserted),
			filtered: ChangeDesc.create(filteredSections)
		};
	}
	/**
	Serialize this change set to a JSON-representable value.
	*/
	toJSON() {
		let parts = [];
		for (let i = 0; i < this.sections.length; i += 2) {
			let len = this.sections[i], ins = this.sections[i + 1];
			if (ins < 0) parts.push(len);
			else if (ins == 0) parts.push([len]);
			else parts.push([len].concat(this.inserted[i >> 1].toJSON()));
		}
		return parts;
	}
	/**
	Create a change set for the given changes, for a document of the
	given length, using `lineSep` as line separator.
	*/
	static of(changes, length, lineSep) {
		let sections = [], inserted = [], pos = 0;
		let total = null;
		function flush(force = false) {
			if (!force && !sections.length) return;
			if (pos < length) addSection(sections, length - pos, -1);
			let set = new ChangeSet(sections, inserted);
			total = total ? total.compose(set.map(total)) : set;
			sections = [];
			inserted = [];
			pos = 0;
		}
		function process(spec) {
			if (Array.isArray(spec)) for (let sub of spec) process(sub);
			else if (spec instanceof ChangeSet) {
				if (spec.length != length) throw new RangeError(`Mismatched change set length (got ${spec.length}, expected ${length})`);
				flush();
				total = total ? total.compose(spec.map(total)) : spec;
			} else {
				let { from, to = from, insert } = spec;
				if (from > to || from < 0 || to > length) throw new RangeError(`Invalid change range ${from} to ${to} (in doc of length ${length})`);
				let insText = !insert ? Text.empty : typeof insert == "string" ? Text.of(insert.split(lineSep || DefaultSplit)) : insert;
				let insLen = insText.length;
				if (from == to && insLen == 0) return;
				if (from < pos) flush();
				if (from > pos) addSection(sections, from - pos, -1);
				addSection(sections, to - from, insLen);
				addInsert(inserted, sections, insText);
				pos = to;
			}
		}
		process(changes);
		flush(!total);
		return total;
	}
	/**
	Create an empty changeset of the given length.
	*/
	static empty(length) {
		return new ChangeSet(length ? [length, -1] : [], []);
	}
	/**
	Create a changeset from its JSON representation (as produced by
	[`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
	*/
	static fromJSON(json) {
		if (!Array.isArray(json)) throw new RangeError("Invalid JSON representation of ChangeSet");
		let sections = [], inserted = [];
		for (let i = 0; i < json.length; i++) {
			let part = json[i];
			if (typeof part == "number") sections.push(part, -1);
			else if (!Array.isArray(part) || typeof part[0] != "number" || part.some((e, i) => i && typeof e != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");
			else if (part.length == 1) sections.push(part[0], 0);
			else {
				while (inserted.length < i) inserted.push(Text.empty);
				inserted[i] = Text.of(part.slice(1));
				sections.push(part[0], inserted[i].length);
			}
		}
		return new ChangeSet(sections, inserted);
	}
	/**
	@internal
	*/
	static createSet(sections, inserted) {
		return new ChangeSet(sections, inserted);
	}
};
function addSection(sections, len, ins, forceJoin = false) {
	if (len == 0 && ins <= 0) return;
	let last = sections.length - 2;
	if (last >= 0 && ins <= 0 && ins == sections[last + 1]) sections[last] += len;
	else if (last >= 0 && len == 0 && sections[last] == 0) sections[last + 1] += ins;
	else if (forceJoin) {
		sections[last] += len;
		sections[last + 1] += ins;
	} else sections.push(len, ins);
}
function addInsert(values, sections, value) {
	if (value.length == 0) return;
	let index = sections.length - 2 >> 1;
	if (index < values.length) values[values.length - 1] = values[values.length - 1].append(value);
	else {
		while (values.length < index) values.push(Text.empty);
		values.push(value);
	}
}
function iterChanges(desc, f, individual) {
	let inserted = desc.inserted;
	for (let posA = 0, posB = 0, i = 0; i < desc.sections.length;) {
		let len = desc.sections[i++], ins = desc.sections[i++];
		if (ins < 0) {
			posA += len;
			posB += len;
		} else {
			let endA = posA, endB = posB, text = Text.empty;
			for (;;) {
				endA += len;
				endB += ins;
				if (ins && inserted) text = text.append(inserted[i - 2 >> 1]);
				if (individual || i == desc.sections.length || desc.sections[i + 1] < 0) break;
				len = desc.sections[i++];
				ins = desc.sections[i++];
			}
			f(posA, endA, posB, endB, text);
			posA = endA;
			posB = endB;
		}
	}
}
function mapSet(setA, setB, before, mkSet = false) {
	let sections = [], insert = mkSet ? [] : null;
	let a = new SectionIter(setA), b = new SectionIter(setB);
	for (let inserted = -1;;) if (a.done && b.len || b.done && a.len) throw new Error("Mismatched change set lengths");
	else if (a.ins == -1 && b.ins == -1) {
		let len = Math.min(a.len, b.len);
		addSection(sections, len, -1);
		a.forward(len);
		b.forward(len);
	} else if (b.ins >= 0 && (a.ins < 0 || inserted == a.i || a.off == 0 && (b.len < a.len || b.len == a.len && !before))) {
		let len = b.len;
		addSection(sections, b.ins, -1);
		while (len) {
			let piece = Math.min(a.len, len);
			if (a.ins >= 0 && inserted < a.i && a.len <= piece) {
				addSection(sections, 0, a.ins);
				if (insert) addInsert(insert, sections, a.text);
				inserted = a.i;
			}
			a.forward(piece);
			len -= piece;
		}
		b.next();
	} else if (a.ins >= 0) {
		let len = 0, left = a.len;
		while (left) if (b.ins == -1) {
			let piece = Math.min(left, b.len);
			len += piece;
			left -= piece;
			b.forward(piece);
		} else if (b.ins == 0 && b.len < left) {
			left -= b.len;
			b.next();
		} else break;
		addSection(sections, len, inserted < a.i ? a.ins : 0);
		if (insert && inserted < a.i) addInsert(insert, sections, a.text);
		inserted = a.i;
		a.forward(a.len - left);
	} else if (a.done && b.done) return insert ? ChangeSet.createSet(sections, insert) : ChangeDesc.create(sections);
	else throw new Error("Mismatched change set lengths");
}
function composeSets(setA, setB, mkSet = false) {
	let sections = [];
	let insert = mkSet ? [] : null;
	let a = new SectionIter(setA), b = new SectionIter(setB);
	for (let open = false;;) if (a.done && b.done) return insert ? ChangeSet.createSet(sections, insert) : ChangeDesc.create(sections);
	else if (a.ins == 0) {
		addSection(sections, a.len, 0, open);
		a.next();
	} else if (b.len == 0 && !b.done) {
		addSection(sections, 0, b.ins, open);
		if (insert) addInsert(insert, sections, b.text);
		b.next();
	} else if (a.done || b.done) throw new Error("Mismatched change set lengths");
	else {
		let len = Math.min(a.len2, b.len), sectionLen = sections.length;
		if (a.ins == -1) {
			let insB = b.ins == -1 ? -1 : b.off ? 0 : b.ins;
			addSection(sections, len, insB, open);
			if (insert && insB) addInsert(insert, sections, b.text);
		} else if (b.ins == -1) {
			addSection(sections, a.off ? 0 : a.len, len, open);
			if (insert) addInsert(insert, sections, a.textBit(len));
		} else {
			addSection(sections, a.off ? 0 : a.len, b.off ? 0 : b.ins, open);
			if (insert && !b.off) addInsert(insert, sections, b.text);
		}
		open = (a.ins > len || b.ins >= 0 && b.len > len) && (open || sections.length > sectionLen);
		a.forward2(len);
		b.forward(len);
	}
}
var SectionIter = class {
	constructor(set) {
		this.set = set;
		this.i = 0;
		this.next();
	}
	next() {
		let { sections } = this.set;
		if (this.i < sections.length) {
			this.len = sections[this.i++];
			this.ins = sections[this.i++];
		} else {
			this.len = 0;
			this.ins = -2;
		}
		this.off = 0;
	}
	get done() {
		return this.ins == -2;
	}
	get len2() {
		return this.ins < 0 ? this.len : this.ins;
	}
	get text() {
		let { inserted } = this.set, index = this.i - 2 >> 1;
		return index >= inserted.length ? Text.empty : inserted[index];
	}
	textBit(len) {
		let { inserted } = this.set, index = this.i - 2 >> 1;
		return index >= inserted.length && !len ? Text.empty : inserted[index].slice(this.off, len == null ? void 0 : this.off + len);
	}
	forward(len) {
		if (len == this.len) this.next();
		else {
			this.len -= len;
			this.off += len;
		}
	}
	forward2(len) {
		if (this.ins == -1) this.forward(len);
		else if (len == this.ins) this.next();
		else {
			this.ins -= len;
			this.off += len;
		}
	}
};
/**
A single selection range. When
[`allowMultipleSelections`](https://codemirror.net/6/docs/ref/#state.EditorState^allowMultipleSelections)
is enabled, a [selection](https://codemirror.net/6/docs/ref/#state.EditorSelection) may hold
multiple ranges. By default, selections hold exactly one range.
*/
var SelectionRange = class SelectionRange {
	constructor(from, to, flags) {
		this.from = from;
		this.to = to;
		this.flags = flags;
	}
	/**
	The anchor of the range—the side that doesn't move when you
	extend it.
	*/
	get anchor() {
		return this.flags & 32 ? this.to : this.from;
	}
	/**
	The head of the range, which is moved when the range is
	[extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
	*/
	get head() {
		return this.flags & 32 ? this.from : this.to;
	}
	/**
	True when `anchor` and `head` are at the same position.
	*/
	get empty() {
		return this.from == this.to;
	}
	/**
	If this is a cursor that is explicitly associated with the
	character on one of its sides, this returns the side. -1 means
	the character before its position, 1 the character after, and 0
	means no association.
	*/
	get assoc() {
		return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
	}
	/**
	The bidirectional text level associated with this cursor, if
	any.
	*/
	get bidiLevel() {
		let level = this.flags & 7;
		return level == 7 ? null : level;
	}
	/**
	The goal column (stored vertical offset) associated with a
	cursor. This is used to preserve the vertical position when
	[moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
	lines of different length.
	*/
	get goalColumn() {
		let value = this.flags >> 6;
		return value == 16777215 ? void 0 : value;
	}
	/**
	Map this range through a change, producing a valid range in the
	updated document.
	*/
	map(change, assoc = -1) {
		let from, to;
		if (this.empty) from = to = change.mapPos(this.from, assoc);
		else {
			from = change.mapPos(this.from, 1);
			to = change.mapPos(this.to, -1);
		}
		return from == this.from && to == this.to ? this : new SelectionRange(from, to, this.flags);
	}
	/**
	Extend this range to cover at least `from` to `to`.
	*/
	extend(from, to = from) {
		if (from <= this.anchor && to >= this.anchor) return EditorSelection.range(from, to);
		let head = Math.abs(from - this.anchor) > Math.abs(to - this.anchor) ? from : to;
		return EditorSelection.range(this.anchor, head);
	}
	/**
	Compare this range to another range.
	*/
	eq(other, includeAssoc = false) {
		return this.anchor == other.anchor && this.head == other.head && (!includeAssoc || !this.empty || this.assoc == other.assoc);
	}
	/**
	Return a JSON-serializable object representing the range.
	*/
	toJSON() {
		return {
			anchor: this.anchor,
			head: this.head
		};
	}
	/**
	Convert a JSON representation of a range to a `SelectionRange`
	instance.
	*/
	static fromJSON(json) {
		if (!json || typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
		return EditorSelection.range(json.anchor, json.head);
	}
	/**
	@internal
	*/
	static create(from, to, flags) {
		return new SelectionRange(from, to, flags);
	}
};
/**
An editor selection holds one or more selection ranges.
*/
var EditorSelection = class EditorSelection {
	constructor(ranges, mainIndex) {
		this.ranges = ranges;
		this.mainIndex = mainIndex;
	}
	/**
	Map a selection through a change. Used to adjust the selection
	position for changes.
	*/
	map(change, assoc = -1) {
		if (change.empty) return this;
		return EditorSelection.create(this.ranges.map((r) => r.map(change, assoc)), this.mainIndex);
	}
	/**
	Compare this selection to another selection. By default, ranges
	are compared only by position. When `includeAssoc` is true,
	cursor ranges must also have the same
	[`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
	*/
	eq(other, includeAssoc = false) {
		if (this.ranges.length != other.ranges.length || this.mainIndex != other.mainIndex) return false;
		for (let i = 0; i < this.ranges.length; i++) if (!this.ranges[i].eq(other.ranges[i], includeAssoc)) return false;
		return true;
	}
	/**
	Get the primary selection range. Usually, you should make sure
	your code applies to _all_ ranges, by using methods like
	[`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
	*/
	get main() {
		return this.ranges[this.mainIndex];
	}
	/**
	Make sure the selection only has one range. Returns a selection
	holding only the main range from this selection.
	*/
	asSingle() {
		return this.ranges.length == 1 ? this : new EditorSelection([this.main], 0);
	}
	/**
	Extend this selection with an extra range.
	*/
	addRange(range, main = true) {
		return EditorSelection.create([range].concat(this.ranges), main ? 0 : this.mainIndex + 1);
	}
	/**
	Replace a given range with another range, and then normalize the
	selection to merge and sort ranges if necessary.
	*/
	replaceRange(range, which = this.mainIndex) {
		let ranges = this.ranges.slice();
		ranges[which] = range;
		return EditorSelection.create(ranges, this.mainIndex);
	}
	/**
	Convert this selection to an object that can be serialized to
	JSON.
	*/
	toJSON() {
		return {
			ranges: this.ranges.map((r) => r.toJSON()),
			main: this.mainIndex
		};
	}
	/**
	Create a selection from a JSON representation.
	*/
	static fromJSON(json) {
		if (!json || !Array.isArray(json.ranges) || typeof json.main != "number" || json.main >= json.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
		return new EditorSelection(json.ranges.map((r) => SelectionRange.fromJSON(r)), json.main);
	}
	/**
	Create a selection holding a single range.
	*/
	static single(anchor, head = anchor) {
		return new EditorSelection([EditorSelection.range(anchor, head)], 0);
	}
	/**
	Sort and merge the given set of ranges, creating a valid
	selection.
	*/
	static create(ranges, mainIndex = 0) {
		if (ranges.length == 0) throw new RangeError("A selection needs at least one range");
		for (let pos = 0, i = 0; i < ranges.length; i++) {
			let range = ranges[i];
			if (range.empty ? range.from <= pos : range.from < pos) return EditorSelection.normalized(ranges.slice(), mainIndex);
			pos = range.to;
		}
		return new EditorSelection(ranges, mainIndex);
	}
	/**
	Create a cursor selection range at the given position. You can
	safely ignore the optional arguments in most situations.
	*/
	static cursor(pos, assoc = 0, bidiLevel, goalColumn) {
		return SelectionRange.create(pos, pos, (assoc == 0 ? 0 : assoc < 0 ? 8 : 16) | (bidiLevel == null ? 7 : Math.min(6, bidiLevel)) | (goalColumn !== null && goalColumn !== void 0 ? goalColumn : 16777215) << 6);
	}
	/**
	Create a selection range.
	*/
	static range(anchor, head, goalColumn, bidiLevel) {
		let flags = (goalColumn !== null && goalColumn !== void 0 ? goalColumn : 16777215) << 6 | (bidiLevel == null ? 7 : Math.min(6, bidiLevel));
		return head < anchor ? SelectionRange.create(head, anchor, 48 | flags) : SelectionRange.create(anchor, head, (head > anchor ? 8 : 0) | flags);
	}
	/**
	@internal
	*/
	static normalized(ranges, mainIndex = 0) {
		let main = ranges[mainIndex];
		ranges.sort((a, b) => a.from - b.from);
		mainIndex = ranges.indexOf(main);
		for (let i = 1; i < ranges.length; i++) {
			let range = ranges[i], prev = ranges[i - 1];
			if (range.empty ? range.from <= prev.to : range.from < prev.to) {
				let from = prev.from, to = Math.max(range.to, prev.to);
				if (i <= mainIndex) mainIndex--;
				ranges.splice(--i, 2, range.anchor > range.head ? EditorSelection.range(to, from) : EditorSelection.range(from, to));
			}
		}
		return new EditorSelection(ranges, mainIndex);
	}
};
function checkSelection(selection, docLength) {
	for (let range of selection.ranges) if (range.to > docLength) throw new RangeError("Selection points outside of document");
}
var nextID = 0;
/**
A facet is a labeled value that is associated with an editor
state. It takes inputs from any number of extensions, and combines
those into a single output value.

Examples of uses of facets are the [tab
size](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize), [editor
attributes](https://codemirror.net/6/docs/ref/#view.EditorView^editorAttributes), and [update
listeners](https://codemirror.net/6/docs/ref/#view.EditorView^updateListener).

Note that `Facet` instances can be used anywhere where
[`FacetReader`](https://codemirror.net/6/docs/ref/#state.FacetReader) is expected.
*/
var Facet = class Facet {
	constructor(combine, compareInput, compare, isStatic, enables) {
		this.combine = combine;
		this.compareInput = compareInput;
		this.compare = compare;
		this.isStatic = isStatic;
		/**
		@internal
		*/
		this.id = nextID++;
		this.default = combine([]);
		this.extensions = typeof enables == "function" ? enables(this) : enables;
	}
	/**
	Returns a facet reader for this facet, which can be used to
	[read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
	*/
	get reader() {
		return this;
	}
	/**
	Define a new facet.
	*/
	static define(config = {}) {
		return new Facet(config.combine || ((a) => a), config.compareInput || ((a, b) => a === b), config.compare || (!config.combine ? sameArray$1 : (a, b) => a === b), !!config.static, config.enables);
	}
	/**
	Returns an extension that adds the given value to this facet.
	*/
	of(value) {
		return new FacetProvider([], this, 0, value);
	}
	/**
	Create an extension that computes a value for the facet from a
	state. You must take care to declare the parts of the state that
	this value depends on, since your function is only called again
	for a new state when one of those parts changed.
	
	In cases where your value depends only on a single field, you'll
	want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
	*/
	compute(deps, get) {
		if (this.isStatic) throw new Error("Can't compute a static facet");
		return new FacetProvider(deps, this, 1, get);
	}
	/**
	Create an extension that computes zero or more values for this
	facet from a state.
	*/
	computeN(deps, get) {
		if (this.isStatic) throw new Error("Can't compute a static facet");
		return new FacetProvider(deps, this, 2, get);
	}
	from(field, get) {
		if (!get) get = (x) => x;
		return this.compute([field], (state) => get(state.field(field)));
	}
};
function sameArray$1(a, b) {
	return a == b || a.length == b.length && a.every((e, i) => e === b[i]);
}
var FacetProvider = class {
	constructor(dependencies, facet, type, value) {
		this.dependencies = dependencies;
		this.facet = facet;
		this.type = type;
		this.value = value;
		this.id = nextID++;
	}
	dynamicSlot(addresses) {
		var _a;
		let getter = this.value;
		let compare = this.facet.compareInput;
		let id = this.id, idx = addresses[id] >> 1, multi = this.type == 2;
		let depDoc = false, depSel = false, depAddrs = [];
		for (let dep of this.dependencies) if (dep == "doc") depDoc = true;
		else if (dep == "selection") depSel = true;
		else if ((((_a = addresses[dep.id]) !== null && _a !== void 0 ? _a : 1) & 1) == 0) depAddrs.push(addresses[dep.id]);
		return {
			create(state) {
				state.values[idx] = getter(state);
				return 1;
			},
			update(state, tr) {
				if (depDoc && tr.docChanged || depSel && (tr.docChanged || tr.selection) || ensureAll(state, depAddrs)) {
					let newVal = getter(state);
					if (multi ? !compareArray(newVal, state.values[idx], compare) : !compare(newVal, state.values[idx])) {
						state.values[idx] = newVal;
						return 1;
					}
				}
				return 0;
			},
			reconfigure: (state, oldState) => {
				let newVal, oldAddr = oldState.config.address[id];
				if (oldAddr != null) {
					let oldVal = getAddr(oldState, oldAddr);
					if (this.dependencies.every((dep) => {
						return dep instanceof Facet ? oldState.facet(dep) === state.facet(dep) : dep instanceof StateField ? oldState.field(dep, false) == state.field(dep, false) : true;
					}) || (multi ? compareArray(newVal = getter(state), oldVal, compare) : compare(newVal = getter(state), oldVal))) {
						state.values[idx] = oldVal;
						return 0;
					}
				} else newVal = getter(state);
				state.values[idx] = newVal;
				return 1;
			}
		};
	}
};
function compareArray(a, b, compare) {
	if (a.length != b.length) return false;
	for (let i = 0; i < a.length; i++) if (!compare(a[i], b[i])) return false;
	return true;
}
function ensureAll(state, addrs) {
	let changed = false;
	for (let addr of addrs) if (ensureAddr(state, addr) & 1) changed = true;
	return changed;
}
function dynamicFacetSlot(addresses, facet, providers) {
	let providerAddrs = providers.map((p) => addresses[p.id]);
	let providerTypes = providers.map((p) => p.type);
	let dynamic = providerAddrs.filter((p) => !(p & 1));
	let idx = addresses[facet.id] >> 1;
	function get(state) {
		let values = [];
		for (let i = 0; i < providerAddrs.length; i++) {
			let value = getAddr(state, providerAddrs[i]);
			if (providerTypes[i] == 2) for (let val of value) values.push(val);
			else values.push(value);
		}
		return facet.combine(values);
	}
	return {
		create(state) {
			for (let addr of providerAddrs) ensureAddr(state, addr);
			state.values[idx] = get(state);
			return 1;
		},
		update(state, tr) {
			if (!ensureAll(state, dynamic)) return 0;
			let value = get(state);
			if (facet.compare(value, state.values[idx])) return 0;
			state.values[idx] = value;
			return 1;
		},
		reconfigure(state, oldState) {
			let depChanged = ensureAll(state, providerAddrs);
			let oldProviders = oldState.config.facets[facet.id], oldValue = oldState.facet(facet);
			if (oldProviders && !depChanged && sameArray$1(providers, oldProviders)) {
				state.values[idx] = oldValue;
				return 0;
			}
			let value = get(state);
			if (facet.compare(value, oldValue)) {
				state.values[idx] = oldValue;
				return 0;
			}
			state.values[idx] = value;
			return 1;
		}
	};
}
var initField = /* @__PURE__ */ Facet.define({ static: true });
/**
Fields can store additional information in an editor state, and
keep it in sync with the rest of the state.
*/
var StateField = class StateField {
	constructor(id, createF, updateF, compareF, spec) {
		this.id = id;
		this.createF = createF;
		this.updateF = updateF;
		this.compareF = compareF;
		this.spec = spec;
		/**
		@internal
		*/
		this.provides = void 0;
	}
	/**
	Define a state field.
	*/
	static define(config) {
		let field = new StateField(nextID++, config.create, config.update, config.compare || ((a, b) => a === b), config);
		if (config.provide) field.provides = config.provide(field);
		return field;
	}
	create(state) {
		let init = state.facet(initField).find((i) => i.field == this);
		return ((init === null || init === void 0 ? void 0 : init.create) || this.createF)(state);
	}
	/**
	@internal
	*/
	slot(addresses) {
		let idx = addresses[this.id] >> 1;
		return {
			create: (state) => {
				state.values[idx] = this.create(state);
				return 1;
			},
			update: (state, tr) => {
				let oldVal = state.values[idx];
				let value = this.updateF(oldVal, tr);
				if (this.compareF(oldVal, value)) return 0;
				state.values[idx] = value;
				return 1;
			},
			reconfigure: (state, oldState) => {
				let init = state.facet(initField), oldInit = oldState.facet(initField), reInit;
				if ((reInit = init.find((i) => i.field == this)) && reInit != oldInit.find((i) => i.field == this)) {
					state.values[idx] = reInit.create(state);
					return 1;
				}
				if (oldState.config.address[this.id] != null) {
					state.values[idx] = oldState.field(this);
					return 0;
				}
				state.values[idx] = this.create(state);
				return 1;
			}
		};
	}
	/**
	Returns an extension that enables this field and overrides the
	way it is initialized. Can be useful when you need to provide a
	non-default starting value for the field.
	*/
	init(create) {
		return [this, initField.of({
			field: this,
			create
		})];
	}
	/**
	State field instances can be used as
	[`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
	given state.
	*/
	get extension() {
		return this;
	}
};
var Prec_ = {
	lowest: 4,
	low: 3,
	default: 2,
	high: 1,
	highest: 0
};
function prec(value) {
	return (ext) => new PrecExtension(ext, value);
}
/**
By default extensions are registered in the order they are found
in the flattened form of nested array that was provided.
Individual extension values can be assigned a precedence to
override this. Extensions that do not have a precedence set get
the precedence of the nearest parent with a precedence, or
[`default`](https://codemirror.net/6/docs/ref/#state.Prec.default) if there is no such parent. The
final ordering of extensions is determined by first sorting by
precedence and then by order within each precedence.
*/
var Prec = {
	highest: /* @__PURE__ */ prec(Prec_.highest),
	high: /* @__PURE__ */ prec(Prec_.high),
	default: /* @__PURE__ */ prec(Prec_.default),
	low: /* @__PURE__ */ prec(Prec_.low),
	lowest: /* @__PURE__ */ prec(Prec_.lowest)
};
var PrecExtension = class {
	constructor(inner, prec) {
		this.inner = inner;
		this.prec = prec;
	}
};
/**
Extension compartments can be used to make a configuration
dynamic. By [wrapping](https://codemirror.net/6/docs/ref/#state.Compartment.of) part of your
configuration in a compartment, you can later
[replace](https://codemirror.net/6/docs/ref/#state.Compartment.reconfigure) that part through a
transaction.
*/
var Compartment = class Compartment {
	/**
	Create an instance of this compartment to add to your [state
	configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
	*/
	of(ext) {
		return new CompartmentInstance(this, ext);
	}
	/**
	Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
	reconfigures this compartment.
	*/
	reconfigure(content) {
		return Compartment.reconfigure.of({
			compartment: this,
			extension: content
		});
	}
	/**
	Get the current content of the compartment in the state, or
	`undefined` if it isn't present.
	*/
	get(state) {
		return state.config.compartments.get(this);
	}
};
var CompartmentInstance = class {
	constructor(compartment, inner) {
		this.compartment = compartment;
		this.inner = inner;
	}
};
var Configuration = class Configuration {
	constructor(base, compartments, dynamicSlots, address, staticValues, facets) {
		this.base = base;
		this.compartments = compartments;
		this.dynamicSlots = dynamicSlots;
		this.address = address;
		this.staticValues = staticValues;
		this.facets = facets;
		this.statusTemplate = [];
		while (this.statusTemplate.length < dynamicSlots.length) this.statusTemplate.push(0);
	}
	staticFacet(facet) {
		let addr = this.address[facet.id];
		return addr == null ? facet.default : this.staticValues[addr >> 1];
	}
	static resolve(base, compartments, oldState) {
		let fields = [];
		let facets = Object.create(null);
		let newCompartments = /* @__PURE__ */ new Map();
		for (let ext of flatten(base, compartments, newCompartments)) if (ext instanceof StateField) fields.push(ext);
		else (facets[ext.facet.id] || (facets[ext.facet.id] = [])).push(ext);
		let address = Object.create(null);
		let staticValues = [];
		let dynamicSlots = [];
		for (let field of fields) {
			address[field.id] = dynamicSlots.length << 1;
			dynamicSlots.push((a) => field.slot(a));
		}
		let oldFacets = oldState === null || oldState === void 0 ? void 0 : oldState.config.facets;
		for (let id in facets) {
			let providers = facets[id], facet = providers[0].facet;
			let oldProviders = oldFacets && oldFacets[id] || [];
			if (providers.every((p) => p.type == 0)) {
				address[facet.id] = staticValues.length << 1 | 1;
				if (sameArray$1(oldProviders, providers)) staticValues.push(oldState.facet(facet));
				else {
					let value = facet.combine(providers.map((p) => p.value));
					staticValues.push(oldState && facet.compare(value, oldState.facet(facet)) ? oldState.facet(facet) : value);
				}
			} else {
				for (let p of providers) if (p.type == 0) {
					address[p.id] = staticValues.length << 1 | 1;
					staticValues.push(p.value);
				} else {
					address[p.id] = dynamicSlots.length << 1;
					dynamicSlots.push((a) => p.dynamicSlot(a));
				}
				address[facet.id] = dynamicSlots.length << 1;
				dynamicSlots.push((a) => dynamicFacetSlot(a, facet, providers));
			}
		}
		return new Configuration(base, newCompartments, dynamicSlots.map((f) => f(address)), address, staticValues, facets);
	}
};
function flatten(extension, compartments, newCompartments) {
	let result = [
		[],
		[],
		[],
		[],
		[]
	];
	let seen = /* @__PURE__ */ new Map();
	function inner(ext, prec) {
		let known = seen.get(ext);
		if (known != null) {
			if (known <= prec) return;
			let found = result[known].indexOf(ext);
			if (found > -1) result[known].splice(found, 1);
			if (ext instanceof CompartmentInstance) newCompartments.delete(ext.compartment);
		}
		seen.set(ext, prec);
		if (Array.isArray(ext)) for (let e of ext) inner(e, prec);
		else if (ext instanceof CompartmentInstance) {
			if (newCompartments.has(ext.compartment)) throw new RangeError(`Duplicate use of compartment in extensions`);
			let content = compartments.get(ext.compartment) || ext.inner;
			newCompartments.set(ext.compartment, content);
			inner(content, prec);
		} else if (ext instanceof PrecExtension) inner(ext.inner, ext.prec);
		else if (ext instanceof StateField) {
			result[prec].push(ext);
			if (ext.provides) inner(ext.provides, prec);
		} else if (ext instanceof FacetProvider) {
			result[prec].push(ext);
			if (ext.facet.extensions) inner(ext.facet.extensions, Prec_.default);
		} else {
			let content = ext.extension;
			if (!content) throw new Error(`Unrecognized extension value in extension set (${ext}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
			inner(content, prec);
		}
	}
	inner(extension, Prec_.default);
	return result.reduce((a, b) => a.concat(b));
}
function ensureAddr(state, addr) {
	if (addr & 1) return 2;
	let idx = addr >> 1;
	let status = state.status[idx];
	if (status == 4) throw new Error("Cyclic dependency between fields and/or facets");
	if (status & 2) return status;
	state.status[idx] = 4;
	let changed = state.computeSlot(state, state.config.dynamicSlots[idx]);
	return state.status[idx] = 2 | changed;
}
function getAddr(state, addr) {
	return addr & 1 ? state.config.staticValues[addr >> 1] : state.values[addr >> 1];
}
var languageData = /* @__PURE__ */ Facet.define();
var allowMultipleSelections = /* @__PURE__ */ Facet.define({
	combine: (values) => values.some((v) => v),
	static: true
});
var lineSeparator = /* @__PURE__ */ Facet.define({
	combine: (values) => values.length ? values[0] : void 0,
	static: true
});
var changeFilter = /* @__PURE__ */ Facet.define();
var transactionFilter = /* @__PURE__ */ Facet.define();
var transactionExtender = /* @__PURE__ */ Facet.define();
var readOnly = /* @__PURE__ */ Facet.define({ combine: (values) => values.length ? values[0] : false });
/**
Annotations are tagged values that are used to add metadata to
transactions in an extensible way. They should be used to model
things that effect the entire transaction (such as its [time
stamp](https://codemirror.net/6/docs/ref/#state.Transaction^time) or information about its
[origin](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent)). For effects that happen
_alongside_ the other changes made by the transaction, [state
effects](https://codemirror.net/6/docs/ref/#state.StateEffect) are more appropriate.
*/
var Annotation = class {
	/**
	@internal
	*/
	constructor(type, value) {
		this.type = type;
		this.value = value;
	}
	/**
	Define a new type of annotation.
	*/
	static define() {
		return new AnnotationType();
	}
};
/**
Marker that identifies a type of [annotation](https://codemirror.net/6/docs/ref/#state.Annotation).
*/
var AnnotationType = class {
	/**
	Create an instance of this annotation.
	*/
	of(value) {
		return new Annotation(this, value);
	}
};
/**
Representation of a type of state effect. Defined with
[`StateEffect.define`](https://codemirror.net/6/docs/ref/#state.StateEffect^define).
*/
var StateEffectType = class {
	/**
	@internal
	*/
	constructor(map) {
		this.map = map;
	}
	/**
	Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
	type.
	*/
	of(value) {
		return new StateEffect(this, value);
	}
};
/**
State effects can be used to represent additional effects
associated with a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction.effects). They
are often useful to model changes to custom [state
fields](https://codemirror.net/6/docs/ref/#state.StateField), when those changes aren't implicit in
document or selection changes.
*/
var StateEffect = class StateEffect {
	/**
	@internal
	*/
	constructor(type, value) {
		this.type = type;
		this.value = value;
	}
	/**
	Map this effect through a position mapping. Will return
	`undefined` when that ends up deleting the effect.
	*/
	map(mapping) {
		let mapped = this.type.map(this.value, mapping);
		return mapped === void 0 ? void 0 : mapped == this.value ? this : new StateEffect(this.type, mapped);
	}
	/**
	Tells you whether this effect object is of a given
	[type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
	*/
	is(type) {
		return this.type == type;
	}
	/**
	Define a new effect type. The type parameter indicates the type
	of values that his effect holds. It should be a type that
	doesn't include `undefined`, since that is used in
	[mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
	removed.
	*/
	static define(spec = {}) {
		return new StateEffectType(spec.map || ((v) => v));
	}
	/**
	Map an array of effects through a change set.
	*/
	static mapEffects(effects, mapping) {
		if (!effects.length) return effects;
		let result = [];
		for (let effect of effects) {
			let mapped = effect.map(mapping);
			if (mapped) result.push(mapped);
		}
		return result;
	}
};
/**
This effect can be used to reconfigure the root extensions of
the editor. Doing this will discard any extensions
[appended](https://codemirror.net/6/docs/ref/#state.StateEffect^appendConfig), but does not reset
the content of [reconfigured](https://codemirror.net/6/docs/ref/#state.Compartment.reconfigure)
compartments.
*/
StateEffect.reconfigure = /* @__PURE__ */ StateEffect.define();
/**
Append extensions to the top-level configuration of the editor.
*/
StateEffect.appendConfig = /* @__PURE__ */ StateEffect.define();
/**
Changes to the editor state are grouped into transactions.
Typically, a user action creates a single transaction, which may
contain any number of document changes, may change the selection,
or have other effects. Create a transaction by calling
[`EditorState.update`](https://codemirror.net/6/docs/ref/#state.EditorState.update), or immediately
dispatch one by calling
[`EditorView.dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch).
*/
var Transaction = class Transaction {
	constructor(startState, changes, selection, effects, annotations, scrollIntoView) {
		this.startState = startState;
		this.changes = changes;
		this.selection = selection;
		this.effects = effects;
		this.annotations = annotations;
		this.scrollIntoView = scrollIntoView;
		/**
		@internal
		*/
		this._doc = null;
		/**
		@internal
		*/
		this._state = null;
		if (selection) checkSelection(selection, changes.newLength);
		if (!annotations.some((a) => a.type == Transaction.time)) this.annotations = annotations.concat(Transaction.time.of(Date.now()));
	}
	/**
	@internal
	*/
	static create(startState, changes, selection, effects, annotations, scrollIntoView) {
		return new Transaction(startState, changes, selection, effects, annotations, scrollIntoView);
	}
	/**
	The new document produced by the transaction. Contrary to
	[`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
	force the entire new state to be computed right away, so it is
	recommended that [transaction
	filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
	when they need to look at the new document.
	*/
	get newDoc() {
		return this._doc || (this._doc = this.changes.apply(this.startState.doc));
	}
	/**
	The new selection produced by the transaction. If
	[`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
	this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
	current selection through the changes made by the transaction.
	*/
	get newSelection() {
		return this.selection || this.startState.selection.map(this.changes);
	}
	/**
	The new state created by the transaction. Computed on demand
	(but retained for subsequent access), so it is recommended not to
	access it in [transaction
	filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
	*/
	get state() {
		if (!this._state) this.startState.applyTransaction(this);
		return this._state;
	}
	/**
	Get the value of the given annotation type, if any.
	*/
	annotation(type) {
		for (let ann of this.annotations) if (ann.type == type) return ann.value;
	}
	/**
	Indicates whether the transaction changed the document.
	*/
	get docChanged() {
		return !this.changes.empty;
	}
	/**
	Indicates whether this transaction reconfigures the state
	(through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
	with a top-level configuration
	[effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
	*/
	get reconfigured() {
		return this.startState.config != this.state.config;
	}
	/**
	Returns true if the transaction has a [user
	event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
	or more specific than `event`. For example, if the transaction
	has `"select.pointer"` as user event, `"select"` and
	`"select.pointer"` will match it.
	*/
	isUserEvent(event) {
		let e = this.annotation(Transaction.userEvent);
		return !!(e && (e == event || e.length > event.length && e.slice(0, event.length) == event && e[event.length] == "."));
	}
};
/**
Annotation used to store transaction timestamps. Automatically
added to every transaction, holding `Date.now()`.
*/
Transaction.time = /* @__PURE__ */ Annotation.define();
/**
Annotation used to associate a transaction with a user interface
event. Holds a string identifying the event, using a
dot-separated format to support attaching more specific
information. The events used by the core libraries are:

- `"input"` when content is entered
- `"input.type"` for typed input
- `"input.type.compose"` for composition
- `"input.paste"` for pasted input
- `"input.drop"` when adding content with drag-and-drop
- `"input.complete"` when autocompleting
- `"delete"` when the user deletes content
- `"delete.selection"` when deleting the selection
- `"delete.forward"` when deleting forward from the selection
- `"delete.backward"` when deleting backward from the selection
- `"delete.cut"` when cutting to the clipboard
- `"move"` when content is moved
- `"move.drop"` when content is moved within the editor through drag-and-drop
- `"select"` when explicitly changing the selection
- `"select.pointer"` when selecting with a mouse or other pointing device
- `"undo"` and `"redo"` for history actions

Use [`isUserEvent`](https://codemirror.net/6/docs/ref/#state.Transaction.isUserEvent) to check
whether the annotation matches a given event.
*/
Transaction.userEvent = /* @__PURE__ */ Annotation.define();
/**
Annotation indicating whether a transaction should be added to
the undo history or not.
*/
Transaction.addToHistory = /* @__PURE__ */ Annotation.define();
/**
Annotation indicating (when present and true) that a transaction
represents a change made by some other actor, not the user. This
is used, for example, to tag other people's changes in
collaborative editing.
*/
Transaction.remote = /* @__PURE__ */ Annotation.define();
function joinRanges(a, b) {
	let result = [];
	for (let iA = 0, iB = 0;;) {
		let from, to;
		if (iA < a.length && (iB == b.length || b[iB] >= a[iA])) {
			from = a[iA++];
			to = a[iA++];
		} else if (iB < b.length) {
			from = b[iB++];
			to = b[iB++];
		} else return result;
		if (!result.length || result[result.length - 1] < from) result.push(from, to);
		else if (result[result.length - 1] < to) result[result.length - 1] = to;
	}
}
function mergeTransaction(a, b, sequential) {
	var _a;
	let mapForA, mapForB, changes;
	if (sequential) {
		mapForA = b.changes;
		mapForB = ChangeSet.empty(b.changes.length);
		changes = a.changes.compose(b.changes);
	} else {
		mapForA = b.changes.map(a.changes);
		mapForB = a.changes.mapDesc(b.changes, true);
		changes = a.changes.compose(mapForA);
	}
	return {
		changes,
		selection: b.selection ? b.selection.map(mapForB) : (_a = a.selection) === null || _a === void 0 ? void 0 : _a.map(mapForA),
		effects: StateEffect.mapEffects(a.effects, mapForA).concat(StateEffect.mapEffects(b.effects, mapForB)),
		annotations: a.annotations.length ? a.annotations.concat(b.annotations) : b.annotations,
		scrollIntoView: a.scrollIntoView || b.scrollIntoView
	};
}
function resolveTransactionInner(state, spec, docSize) {
	let sel = spec.selection, annotations = asArray$1(spec.annotations);
	if (spec.userEvent) annotations = annotations.concat(Transaction.userEvent.of(spec.userEvent));
	return {
		changes: spec.changes instanceof ChangeSet ? spec.changes : ChangeSet.of(spec.changes || [], docSize, state.facet(lineSeparator)),
		selection: sel && (sel instanceof EditorSelection ? sel : EditorSelection.single(sel.anchor, sel.head)),
		effects: asArray$1(spec.effects),
		annotations,
		scrollIntoView: !!spec.scrollIntoView
	};
}
function resolveTransaction(state, specs, filter) {
	let s = resolveTransactionInner(state, specs.length ? specs[0] : {}, state.doc.length);
	if (specs.length && specs[0].filter === false) filter = false;
	for (let i = 1; i < specs.length; i++) {
		if (specs[i].filter === false) filter = false;
		let seq = !!specs[i].sequential;
		s = mergeTransaction(s, resolveTransactionInner(state, specs[i], seq ? s.changes.newLength : state.doc.length), seq);
	}
	let tr = Transaction.create(state, s.changes, s.selection, s.effects, s.annotations, s.scrollIntoView);
	return extendTransaction(filter ? filterTransaction(tr) : tr);
}
function filterTransaction(tr) {
	let state = tr.startState;
	let result = true;
	for (let filter of state.facet(changeFilter)) {
		let value = filter(tr);
		if (value === false) {
			result = false;
			break;
		}
		if (Array.isArray(value)) result = result === true ? value : joinRanges(result, value);
	}
	if (result !== true) {
		let changes, back;
		if (result === false) {
			back = tr.changes.invertedDesc;
			changes = ChangeSet.empty(state.doc.length);
		} else {
			let filtered = tr.changes.filter(result);
			changes = filtered.changes;
			back = filtered.filtered.mapDesc(filtered.changes).invertedDesc;
		}
		tr = Transaction.create(state, changes, tr.selection && tr.selection.map(back), StateEffect.mapEffects(tr.effects, back), tr.annotations, tr.scrollIntoView);
	}
	let filters = state.facet(transactionFilter);
	for (let i = filters.length - 1; i >= 0; i--) {
		let filtered = filters[i](tr);
		if (filtered instanceof Transaction) tr = filtered;
		else if (Array.isArray(filtered) && filtered.length == 1 && filtered[0] instanceof Transaction) tr = filtered[0];
		else tr = resolveTransaction(state, asArray$1(filtered), false);
	}
	return tr;
}
function extendTransaction(tr) {
	let state = tr.startState, extenders = state.facet(transactionExtender), spec = tr;
	for (let i = extenders.length - 1; i >= 0; i--) {
		let extension = extenders[i](tr);
		if (extension && Object.keys(extension).length) spec = mergeTransaction(spec, resolveTransactionInner(state, extension, tr.changes.newLength), true);
	}
	return spec == tr ? tr : Transaction.create(state, tr.changes, tr.selection, spec.effects, spec.annotations, spec.scrollIntoView);
}
var none$2 = [];
function asArray$1(value) {
	return value == null ? none$2 : Array.isArray(value) ? value : [value];
}
/**
The categories produced by a [character
categorizer](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer). These are used
do things like selecting by word.
*/
var CharCategory = /* @__PURE__ */ (function(CharCategory) {
	/**
	Word characters.
	*/
	CharCategory[CharCategory["Word"] = 0] = "Word";
	/**
	Whitespace.
	*/
	CharCategory[CharCategory["Space"] = 1] = "Space";
	/**
	Anything else.
	*/
	CharCategory[CharCategory["Other"] = 2] = "Other";
	return CharCategory;
})(CharCategory || (CharCategory = {}));
var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
var wordChar;
try {
	wordChar = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch (_) {}
function hasWordChar(str) {
	if (wordChar) return wordChar.test(str);
	for (let i = 0; i < str.length; i++) {
		let ch = str[i];
		if (/\w/.test(ch) || ch > "" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))) return true;
	}
	return false;
}
function makeCategorizer(wordChars) {
	return (char) => {
		if (!/\S/.test(char)) return CharCategory.Space;
		if (hasWordChar(char)) return CharCategory.Word;
		for (let i = 0; i < wordChars.length; i++) if (char.indexOf(wordChars[i]) > -1) return CharCategory.Word;
		return CharCategory.Other;
	};
}
/**
The editor state class is a persistent (immutable) data structure.
To update a state, you [create](https://codemirror.net/6/docs/ref/#state.EditorState.update) a
[transaction](https://codemirror.net/6/docs/ref/#state.Transaction), which produces a _new_ state
instance, without modifying the original object.

As such, _never_ mutate properties of a state directly. That'll
just break things.
*/
var EditorState = class EditorState {
	constructor(config, doc, selection, values, computeSlot, tr) {
		this.config = config;
		this.doc = doc;
		this.selection = selection;
		this.values = values;
		this.status = config.statusTemplate.slice();
		this.computeSlot = computeSlot;
		if (tr) tr._state = this;
		for (let i = 0; i < this.config.dynamicSlots.length; i++) ensureAddr(this, i << 1);
		this.computeSlot = null;
	}
	field(field, require = true) {
		let addr = this.config.address[field.id];
		if (addr == null) {
			if (require) throw new RangeError("Field is not present in this state");
			return;
		}
		ensureAddr(this, addr);
		return getAddr(this, addr);
	}
	/**
	Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
	state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
	can be passed. Unless
	[`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
	[changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
	are assumed to start in the _current_ document (not the document
	produced by previous specs), and its
	[selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
	[effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
	to the document created by its _own_ changes. The resulting
	transaction contains the combined effect of all the different
	specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
	specs take precedence over earlier ones.
	*/
	update(...specs) {
		return resolveTransaction(this, specs, true);
	}
	/**
	@internal
	*/
	applyTransaction(tr) {
		let conf = this.config, { base, compartments } = conf;
		for (let effect of tr.effects) if (effect.is(Compartment.reconfigure)) {
			if (conf) {
				compartments = /* @__PURE__ */ new Map();
				conf.compartments.forEach((val, key) => compartments.set(key, val));
				conf = null;
			}
			compartments.set(effect.value.compartment, effect.value.extension);
		} else if (effect.is(StateEffect.reconfigure)) {
			conf = null;
			base = effect.value;
		} else if (effect.is(StateEffect.appendConfig)) {
			conf = null;
			base = asArray$1(base).concat(effect.value);
		}
		let startValues;
		if (!conf) {
			conf = Configuration.resolve(base, compartments, this);
			startValues = new EditorState(conf, this.doc, this.selection, conf.dynamicSlots.map(() => null), (state, slot) => slot.reconfigure(state, this), null).values;
		} else startValues = tr.startState.values.slice();
		let selection = tr.startState.facet(allowMultipleSelections) ? tr.newSelection : tr.newSelection.asSingle();
		new EditorState(conf, tr.newDoc, selection, startValues, (state, slot) => slot.update(state, tr), tr);
	}
	/**
	Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
	replaces every selection range with the given content.
	*/
	replaceSelection(text) {
		if (typeof text == "string") text = this.toText(text);
		return this.changeByRange((range) => ({
			changes: {
				from: range.from,
				to: range.to,
				insert: text
			},
			range: EditorSelection.cursor(range.from + text.length)
		}));
	}
	/**
	Create a set of changes and a new selection by running the given
	function for each range in the active selection. The function
	can return an optional set of changes (in the coordinate space
	of the start document), plus an updated range (in the coordinate
	space of the document produced by the call's own changes). This
	method will merge all the changes and ranges into a single
	changeset and selection, and return it as a [transaction
	spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
	[`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
	*/
	changeByRange(f) {
		let sel = this.selection;
		let result1 = f(sel.ranges[0]);
		let changes = this.changes(result1.changes), ranges = [result1.range];
		let effects = asArray$1(result1.effects);
		for (let i = 1; i < sel.ranges.length; i++) {
			let result = f(sel.ranges[i]);
			let newChanges = this.changes(result.changes), newMapped = newChanges.map(changes);
			for (let j = 0; j < i; j++) ranges[j] = ranges[j].map(newMapped);
			let mapBy = changes.mapDesc(newChanges, true);
			ranges.push(result.range.map(mapBy));
			changes = changes.compose(newMapped);
			effects = StateEffect.mapEffects(effects, newMapped).concat(StateEffect.mapEffects(asArray$1(result.effects), mapBy));
		}
		return {
			changes,
			selection: EditorSelection.create(ranges, sel.mainIndex),
			effects
		};
	}
	/**
	Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
	description, taking the state's document length and line
	separator into account.
	*/
	changes(spec = []) {
		if (spec instanceof ChangeSet) return spec;
		return ChangeSet.of(spec, this.doc.length, this.facet(EditorState.lineSeparator));
	}
	/**
	Using the state's [line
	separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
	[`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
	*/
	toText(string) {
		return Text.of(string.split(this.facet(EditorState.lineSeparator) || DefaultSplit));
	}
	/**
	Return the given range of the document as a string.
	*/
	sliceDoc(from = 0, to = this.doc.length) {
		return this.doc.sliceString(from, to, this.lineBreak);
	}
	/**
	Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
	*/
	facet(facet) {
		let addr = this.config.address[facet.id];
		if (addr == null) return facet.default;
		ensureAddr(this, addr);
		return getAddr(this, addr);
	}
	/**
	Convert this state to a JSON-serializable object. When custom
	fields should be serialized, you can pass them in as an object
	mapping property names (in the resulting object, which should
	not use `doc` or `selection`) to fields.
	*/
	toJSON(fields) {
		let result = {
			doc: this.sliceDoc(),
			selection: this.selection.toJSON()
		};
		if (fields) for (let prop in fields) {
			let value = fields[prop];
			if (value instanceof StateField && this.config.address[value.id] != null) result[prop] = value.spec.toJSON(this.field(fields[prop]), this);
		}
		return result;
	}
	/**
	Deserialize a state from its JSON representation. When custom
	fields should be deserialized, pass the same object you passed
	to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
	third argument.
	*/
	static fromJSON(json, config = {}, fields) {
		if (!json || typeof json.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
		let fieldInit = [];
		if (fields) {
			for (let prop in fields) if (Object.prototype.hasOwnProperty.call(json, prop)) {
				let field = fields[prop], value = json[prop];
				fieldInit.push(field.init((state) => field.spec.fromJSON(value, state)));
			}
		}
		return EditorState.create({
			doc: json.doc,
			selection: EditorSelection.fromJSON(json.selection),
			extensions: config.extensions ? fieldInit.concat([config.extensions]) : fieldInit
		});
	}
	/**
	Create a new state. You'll usually only need this when
	initializing an editor—updated states are created by applying
	transactions.
	*/
	static create(config = {}) {
		let configuration = Configuration.resolve(config.extensions || [], /* @__PURE__ */ new Map());
		let doc = config.doc instanceof Text ? config.doc : Text.of((config.doc || "").split(configuration.staticFacet(EditorState.lineSeparator) || DefaultSplit));
		let selection = !config.selection ? EditorSelection.single(0) : config.selection instanceof EditorSelection ? config.selection : EditorSelection.single(config.selection.anchor, config.selection.head);
		checkSelection(selection, doc.length);
		if (!configuration.staticFacet(allowMultipleSelections)) selection = selection.asSingle();
		return new EditorState(configuration, doc, selection, configuration.dynamicSlots.map(() => null), (state, slot) => slot.create(state), null);
	}
	/**
	The size (in columns) of a tab in the document, determined by
	the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
	*/
	get tabSize() {
		return this.facet(EditorState.tabSize);
	}
	/**
	Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
	string for this state.
	*/
	get lineBreak() {
		return this.facet(EditorState.lineSeparator) || "\n";
	}
	/**
	Returns true when the editor is
	[configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
	*/
	get readOnly() {
		return this.facet(readOnly);
	}
	/**
	Look up a translation for the given phrase (via the
	[`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
	original string if no translation is found.
	
	If additional arguments are passed, they will be inserted in
	place of markers like `$1` (for the first value) and `$2`, etc.
	A single `$` is equivalent to `$1`, and `$$` will produce a
	literal dollar sign.
	*/
	phrase(phrase, ...insert) {
		for (let map of this.facet(EditorState.phrases)) if (Object.prototype.hasOwnProperty.call(map, phrase)) {
			phrase = map[phrase];
			break;
		}
		if (insert.length) phrase = phrase.replace(/\$(\$|\d*)/g, (m, i) => {
			if (i == "$") return "$";
			let n = +(i || 1);
			return !n || n > insert.length ? m : insert[n - 1];
		});
		return phrase;
	}
	/**
	Find the values for a given language data field, provided by the
	the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
	
	Examples of language data fields are...
	
	- [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
	comment syntax.
	- [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
	for providing language-specific completion sources.
	- [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
	characters that should be considered part of words in this
	language.
	- [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
	bracket closing behavior.
	*/
	languageDataAt(name, pos, side = -1) {
		let values = [];
		for (let provider of this.facet(languageData)) for (let result of provider(this, pos, side)) if (Object.prototype.hasOwnProperty.call(result, name)) values.push(result[name]);
		return values;
	}
	/**
	Return a function that can categorize strings (expected to
	represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
	into one of:
	
	- Word (contains an alphanumeric character or a character
	explicitly listed in the local language's `"wordChars"`
	language data, which should be a string)
	- Space (contains only whitespace)
	- Other (anything else)
	*/
	charCategorizer(at) {
		let chars = this.languageDataAt("wordChars", at);
		return makeCategorizer(chars.length ? chars[0] : "");
	}
	/**
	Find the word at the given position, meaning the range
	containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
	around it. If no word characters are adjacent to the position,
	this returns null.
	*/
	wordAt(pos) {
		let { text, from, length } = this.doc.lineAt(pos);
		let cat = this.charCategorizer(pos);
		let start = pos - from, end = pos - from;
		while (start > 0) {
			let prev = findClusterBreak(text, start, false);
			if (cat(text.slice(prev, start)) != CharCategory.Word) break;
			start = prev;
		}
		while (end < length) {
			let next = findClusterBreak(text, end);
			if (cat(text.slice(end, next)) != CharCategory.Word) break;
			end = next;
		}
		return start == end ? null : EditorSelection.range(start + from, end + from);
	}
};
/**
A facet that, when enabled, causes the editor to allow multiple
ranges to be selected. Be careful though, because by default the
editor relies on the native DOM selection, which cannot handle
multiple selections. An extension like
[`drawSelection`](https://codemirror.net/6/docs/ref/#view.drawSelection) can be used to make
secondary selections visible to the user.
*/
EditorState.allowMultipleSelections = allowMultipleSelections;
/**
Configures the tab size to use in this state. The first
(highest-precedence) value of the facet is used. If no value is
given, this defaults to 4.
*/
EditorState.tabSize = /* @__PURE__ */ Facet.define({ combine: (values) => values.length ? values[0] : 4 });
/**
The line separator to use. By default, any of `"\n"`, `"\r\n"`
and `"\r"` is treated as a separator when splitting lines, and
lines are joined with `"\n"`.

When you configure a value here, only that precise separator
will be used, allowing you to round-trip documents through the
editor without normalizing line separators.
*/
EditorState.lineSeparator = lineSeparator;
/**
This facet controls the value of the
[`readOnly`](https://codemirror.net/6/docs/ref/#state.EditorState.readOnly) getter, which is
consulted by commands and extensions that implement editing
functionality to determine whether they should apply. It
defaults to false, but when its highest-precedence value is
`true`, such functionality disables itself.

Not to be confused with
[`EditorView.editable`](https://codemirror.net/6/docs/ref/#view.EditorView^editable), which
controls whether the editor's DOM is set to be editable (and
thus focusable).
*/
EditorState.readOnly = readOnly;
/**
Registers translation phrases. The
[`phrase`](https://codemirror.net/6/docs/ref/#state.EditorState.phrase) method will look through
all objects registered with this facet to find translations for
its argument.
*/
EditorState.phrases = /* @__PURE__ */ Facet.define({ compare(a, b) {
	let kA = Object.keys(a), kB = Object.keys(b);
	return kA.length == kB.length && kA.every((k) => a[k] == b[k]);
} });
/**
A facet used to register [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) providers.
*/
EditorState.languageData = languageData;
/**
Facet used to register change filters, which are called for each
transaction (unless explicitly
[disabled](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter)), and can suppress
part of the transaction's changes.

Such a function can return `true` to indicate that it doesn't
want to do anything, `false` to completely stop the changes in
the transaction, or a set of ranges in which changes should be
suppressed. Such ranges are represented as an array of numbers,
with each pair of two numbers indicating the start and end of a
range. So for example `[10, 20, 100, 110]` suppresses changes
between 10 and 20, and between 100 and 110.
*/
EditorState.changeFilter = changeFilter;
/**
Facet used to register a hook that gets a chance to update or
replace transaction specs before they are applied. This will
only be applied for transactions that don't have
[`filter`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter) set to `false`. You
can either return a single transaction spec (possibly the input
transaction), or an array of specs (which will be combined in
the same way as the arguments to
[`EditorState.update`](https://codemirror.net/6/docs/ref/#state.EditorState.update)).

When possible, it is recommended to avoid accessing
[`Transaction.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state) in a filter,
since it will force creation of a state that will then be
discarded again, if the transaction is actually filtered.

(This functionality should be used with care. Indiscriminately
modifying transaction is likely to break something or degrade
the user experience.)
*/
EditorState.transactionFilter = transactionFilter;
/**
This is a more limited form of
[`transactionFilter`](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter),
which can only add
[annotations](https://codemirror.net/6/docs/ref/#state.TransactionSpec.annotations) and
[effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects). _But_, this type
of filter runs even if the transaction has disabled regular
[filtering](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter), making it suitable
for effects that don't need to touch the changes or selection,
but do want to process every transaction.

Extenders run _after_ filters, when both are present.
*/
EditorState.transactionExtender = transactionExtender;
Compartment.reconfigure = /* @__PURE__ */ StateEffect.define();
/**
Utility function for combining behaviors to fill in a config
object from an array of provided configs. `defaults` should hold
default values for all optional fields in `Config`.

The function will, by default, error
when a field gets two values that aren't `===`-equal, but you can
provide combine functions per field to do something else.
*/
function combineConfig(configs, defaults, combine = {}) {
	let result = {};
	for (let config of configs) for (let key of Object.keys(config)) {
		let value = config[key], current = result[key];
		if (current === void 0) result[key] = value;
		else if (current === value || value === void 0);
		else if (Object.hasOwnProperty.call(combine, key)) result[key] = combine[key](current, value);
		else throw new Error("Config merge conflict for field " + key);
	}
	for (let key in defaults) if (result[key] === void 0) result[key] = defaults[key];
	return result;
}
/**
Each range is associated with a value, which must inherit from
this class.
*/
var RangeValue = class {
	/**
	Compare this value with another value. Used when comparing
	rangesets. The default implementation compares by identity.
	Unless you are only creating a fixed number of unique instances
	of your value type, it is a good idea to implement this
	properly.
	*/
	eq(other) {
		return this == other;
	}
	/**
	Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
	*/
	range(from, to = from) {
		return Range$1.create(from, to, this);
	}
};
RangeValue.prototype.startSide = RangeValue.prototype.endSide = 0;
RangeValue.prototype.point = false;
RangeValue.prototype.mapMode = MapMode.TrackDel;
function cmpVal(a, b) {
	return a == b || a.constructor == b.constructor && a.eq(b);
}
/**
A range associates a value with a range of positions.
*/
var Range$1 = class Range$1 {
	constructor(from, to, value) {
		this.from = from;
		this.to = to;
		this.value = value;
	}
	/**
	@internal
	*/
	static create(from, to, value) {
		return new Range$1(from, to, value);
	}
};
function cmpRange(a, b) {
	return a.from - b.from || a.value.startSide - b.value.startSide;
}
var Chunk = class Chunk {
	constructor(from, to, value, maxPoint) {
		this.from = from;
		this.to = to;
		this.value = value;
		this.maxPoint = maxPoint;
	}
	get length() {
		return this.to[this.to.length - 1];
	}
	findIndex(pos, side, end, startAt = 0) {
		let arr = end ? this.to : this.from;
		for (let lo = startAt, hi = arr.length;;) {
			if (lo == hi) return lo;
			let mid = lo + hi >> 1;
			let diff = arr[mid] - pos || (end ? this.value[mid].endSide : this.value[mid].startSide) - side;
			if (mid == lo) return diff >= 0 ? lo : hi;
			if (diff >= 0) hi = mid;
			else lo = mid + 1;
		}
	}
	between(offset, from, to, f) {
		for (let i = this.findIndex(from, -1e9, true), e = this.findIndex(to, 1e9, false, i); i < e; i++) if (f(this.from[i] + offset, this.to[i] + offset, this.value[i]) === false) return false;
	}
	map(offset, changes) {
		let value = [], from = [], to = [], newPos = -1, maxPoint = -1;
		for (let i = 0; i < this.value.length; i++) {
			let val = this.value[i], curFrom = this.from[i] + offset, curTo = this.to[i] + offset, newFrom, newTo;
			if (curFrom == curTo) {
				let mapped = changes.mapPos(curFrom, val.startSide, val.mapMode);
				if (mapped == null) continue;
				newFrom = newTo = mapped;
				if (val.startSide != val.endSide) {
					newTo = changes.mapPos(curFrom, val.endSide);
					if (newTo < newFrom) continue;
				}
			} else {
				newFrom = changes.mapPos(curFrom, val.startSide);
				newTo = changes.mapPos(curTo, val.endSide);
				if (newFrom > newTo || newFrom == newTo && val.startSide > 0 && val.endSide <= 0) continue;
			}
			if ((newTo - newFrom || val.endSide - val.startSide) < 0) continue;
			if (newPos < 0) newPos = newFrom;
			if (val.point) maxPoint = Math.max(maxPoint, newTo - newFrom);
			value.push(val);
			from.push(newFrom - newPos);
			to.push(newTo - newPos);
		}
		return {
			mapped: value.length ? new Chunk(from, to, value, maxPoint) : null,
			pos: newPos
		};
	}
};
/**
A range set stores a collection of [ranges](https://codemirror.net/6/docs/ref/#state.Range) in a
way that makes them efficient to [map](https://codemirror.net/6/docs/ref/#state.RangeSet.map) and
[update](https://codemirror.net/6/docs/ref/#state.RangeSet.update). This is an immutable data
structure.
*/
var RangeSet = class RangeSet {
	constructor(chunkPos, chunk, nextLayer, maxPoint) {
		this.chunkPos = chunkPos;
		this.chunk = chunk;
		this.nextLayer = nextLayer;
		this.maxPoint = maxPoint;
	}
	/**
	@internal
	*/
	static create(chunkPos, chunk, nextLayer, maxPoint) {
		return new RangeSet(chunkPos, chunk, nextLayer, maxPoint);
	}
	/**
	@internal
	*/
	get length() {
		let last = this.chunk.length - 1;
		return last < 0 ? 0 : Math.max(this.chunkEnd(last), this.nextLayer.length);
	}
	/**
	The number of ranges in the set.
	*/
	get size() {
		if (this.isEmpty) return 0;
		let size = this.nextLayer.size;
		for (let chunk of this.chunk) size += chunk.value.length;
		return size;
	}
	/**
	@internal
	*/
	chunkEnd(index) {
		return this.chunkPos[index] + this.chunk[index].length;
	}
	/**
	Update the range set, optionally adding new ranges or filtering
	out existing ones.
	
	(Note: The type parameter is just there as a kludge to work
	around TypeScript variance issues that prevented `RangeSet<X>`
	from being a subtype of `RangeSet<Y>` when `X` is a subtype of
	`Y`.)
	*/
	update(updateSpec) {
		let { add = [], sort = false, filterFrom = 0, filterTo = this.length } = updateSpec;
		let filter = updateSpec.filter;
		if (add.length == 0 && !filter) return this;
		if (sort) add = add.slice().sort(cmpRange);
		if (this.isEmpty) return add.length ? RangeSet.of(add) : this;
		let cur = new LayerCursor(this, null, -1).goto(0), i = 0, spill = [];
		let builder = new RangeSetBuilder();
		while (cur.value || i < add.length) if (i < add.length && (cur.from - add[i].from || cur.startSide - add[i].value.startSide) >= 0) {
			let range = add[i++];
			if (!builder.addInner(range.from, range.to, range.value)) spill.push(range);
		} else if (cur.rangeIndex == 1 && cur.chunkIndex < this.chunk.length && (i == add.length || this.chunkEnd(cur.chunkIndex) < add[i].from) && (!filter || filterFrom > this.chunkEnd(cur.chunkIndex) || filterTo < this.chunkPos[cur.chunkIndex]) && builder.addChunk(this.chunkPos[cur.chunkIndex], this.chunk[cur.chunkIndex])) cur.nextChunk();
		else {
			if (!filter || filterFrom > cur.to || filterTo < cur.from || filter(cur.from, cur.to, cur.value)) {
				if (!builder.addInner(cur.from, cur.to, cur.value)) spill.push(Range$1.create(cur.from, cur.to, cur.value));
			}
			cur.next();
		}
		return builder.finishInner(this.nextLayer.isEmpty && !spill.length ? RangeSet.empty : this.nextLayer.update({
			add: spill,
			filter,
			filterFrom,
			filterTo
		}));
	}
	/**
	Map this range set through a set of changes, return the new set.
	*/
	map(changes) {
		if (changes.empty || this.isEmpty) return this;
		let chunks = [], chunkPos = [], maxPoint = -1;
		for (let i = 0; i < this.chunk.length; i++) {
			let start = this.chunkPos[i], chunk = this.chunk[i];
			let touch = changes.touchesRange(start, start + chunk.length);
			if (touch === false) {
				maxPoint = Math.max(maxPoint, chunk.maxPoint);
				chunks.push(chunk);
				chunkPos.push(changes.mapPos(start));
			} else if (touch === true) {
				let { mapped, pos } = chunk.map(start, changes);
				if (mapped) {
					maxPoint = Math.max(maxPoint, mapped.maxPoint);
					chunks.push(mapped);
					chunkPos.push(pos);
				}
			}
		}
		let next = this.nextLayer.map(changes);
		return chunks.length == 0 ? next : new RangeSet(chunkPos, chunks, next || RangeSet.empty, maxPoint);
	}
	/**
	Iterate over the ranges that touch the region `from` to `to`,
	calling `f` for each. There is no guarantee that the ranges will
	be reported in any specific order. When the callback returns
	`false`, iteration stops.
	*/
	between(from, to, f) {
		if (this.isEmpty) return;
		for (let i = 0; i < this.chunk.length; i++) {
			let start = this.chunkPos[i], chunk = this.chunk[i];
			if (to >= start && from <= start + chunk.length && chunk.between(start, from - start, to - start, f) === false) return;
		}
		this.nextLayer.between(from, to, f);
	}
	/**
	Iterate over the ranges in this set, in order, including all
	ranges that end at or after `from`.
	*/
	iter(from = 0) {
		return HeapCursor.from([this]).goto(from);
	}
	/**
	@internal
	*/
	get isEmpty() {
		return this.nextLayer == this;
	}
	/**
	Iterate over the ranges in a collection of sets, in order,
	starting from `from`.
	*/
	static iter(sets, from = 0) {
		return HeapCursor.from(sets).goto(from);
	}
	/**
	Iterate over two groups of sets, calling methods on `comparator`
	to notify it of possible differences.
	*/
	static compare(oldSets, newSets, textDiff, comparator, minPointSize = -1) {
		let a = oldSets.filter((set) => set.maxPoint > 0 || !set.isEmpty && set.maxPoint >= minPointSize);
		let b = newSets.filter((set) => set.maxPoint > 0 || !set.isEmpty && set.maxPoint >= minPointSize);
		let sharedChunks = findSharedChunks(a, b, textDiff);
		let sideA = new SpanCursor(a, sharedChunks, minPointSize);
		let sideB = new SpanCursor(b, sharedChunks, minPointSize);
		textDiff.iterGaps((fromA, fromB, length) => compare(sideA, fromA, sideB, fromB, length, comparator));
		if (textDiff.empty && textDiff.length == 0) compare(sideA, 0, sideB, 0, 0, comparator);
	}
	/**
	Compare the contents of two groups of range sets, returning true
	if they are equivalent in the given range.
	*/
	static eq(oldSets, newSets, from = 0, to) {
		if (to == null) to = 999999999;
		let a = oldSets.filter((set) => !set.isEmpty && newSets.indexOf(set) < 0);
		let b = newSets.filter((set) => !set.isEmpty && oldSets.indexOf(set) < 0);
		if (a.length != b.length) return false;
		if (!a.length) return true;
		let sharedChunks = findSharedChunks(a, b);
		let sideA = new SpanCursor(a, sharedChunks, 0).goto(from), sideB = new SpanCursor(b, sharedChunks, 0).goto(from);
		for (;;) {
			if (sideA.to != sideB.to || !sameValues(sideA.active, sideB.active) || sideA.point && (!sideB.point || !cmpVal(sideA.point, sideB.point))) return false;
			if (sideA.to > to) return true;
			sideA.next();
			sideB.next();
		}
	}
	/**
	Iterate over a group of range sets at the same time, notifying
	the iterator about the ranges covering every given piece of
	content. Returns the open count (see
	[`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
	of the iteration.
	*/
	static spans(sets, from, to, iterator, minPointSize = -1) {
		let cursor = new SpanCursor(sets, null, minPointSize).goto(from), pos = from;
		let openRanges = cursor.openStart;
		for (;;) {
			let curTo = Math.min(cursor.to, to);
			if (cursor.point) {
				let active = cursor.activeForPoint(cursor.to);
				let openCount = cursor.pointFrom < from ? active.length + 1 : cursor.point.startSide < 0 ? active.length : Math.min(active.length, openRanges);
				iterator.point(pos, curTo, cursor.point, active, openCount, cursor.pointRank);
				openRanges = Math.min(cursor.openEnd(curTo), active.length);
			} else if (curTo > pos) {
				iterator.span(pos, curTo, cursor.active, openRanges);
				openRanges = cursor.openEnd(curTo);
			}
			if (cursor.to > to) return openRanges + (cursor.point && cursor.to > to ? 1 : 0);
			pos = cursor.to;
			cursor.next();
		}
	}
	/**
	Create a range set for the given range or array of ranges. By
	default, this expects the ranges to be _sorted_ (by start
	position and, if two start at the same position,
	`value.startSide`). You can pass `true` as second argument to
	cause the method to sort them.
	*/
	static of(ranges, sort = false) {
		let build = new RangeSetBuilder();
		for (let range of ranges instanceof Range$1 ? [ranges] : sort ? lazySort(ranges) : ranges) build.add(range.from, range.to, range.value);
		return build.finish();
	}
	/**
	Join an array of range sets into a single set.
	*/
	static join(sets) {
		if (!sets.length) return RangeSet.empty;
		let result = sets[sets.length - 1];
		for (let i = sets.length - 2; i >= 0; i--) for (let layer = sets[i]; layer != RangeSet.empty; layer = layer.nextLayer) result = new RangeSet(layer.chunkPos, layer.chunk, result, Math.max(layer.maxPoint, result.maxPoint));
		return result;
	}
};
/**
The empty set of ranges.
*/
RangeSet.empty = /* @__PURE__ */ new RangeSet([], [], null, -1);
function lazySort(ranges) {
	if (ranges.length > 1) for (let prev = ranges[0], i = 1; i < ranges.length; i++) {
		let cur = ranges[i];
		if (cmpRange(prev, cur) > 0) return ranges.slice().sort(cmpRange);
		prev = cur;
	}
	return ranges;
}
RangeSet.empty.nextLayer = RangeSet.empty;
/**
A range set builder is a data structure that helps build up a
[range set](https://codemirror.net/6/docs/ref/#state.RangeSet) directly, without first allocating
an array of [`Range`](https://codemirror.net/6/docs/ref/#state.Range) objects.
*/
var RangeSetBuilder = class RangeSetBuilder {
	finishChunk(newArrays) {
		this.chunks.push(new Chunk(this.from, this.to, this.value, this.maxPoint));
		this.chunkPos.push(this.chunkStart);
		this.chunkStart = -1;
		this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
		this.maxPoint = -1;
		if (newArrays) {
			this.from = [];
			this.to = [];
			this.value = [];
		}
	}
	/**
	Create an empty builder.
	*/
	constructor() {
		this.chunks = [];
		this.chunkPos = [];
		this.chunkStart = -1;
		this.last = null;
		this.lastFrom = -1e9;
		this.lastTo = -1e9;
		this.from = [];
		this.to = [];
		this.value = [];
		this.maxPoint = -1;
		this.setMaxPoint = -1;
		this.nextLayer = null;
	}
	/**
	Add a range. Ranges should be added in sorted (by `from` and
	`value.startSide`) order.
	*/
	add(from, to, value) {
		if (!this.addInner(from, to, value)) (this.nextLayer || (this.nextLayer = new RangeSetBuilder())).add(from, to, value);
	}
	/**
	@internal
	*/
	addInner(from, to, value) {
		let diff = from - this.lastTo || value.startSide - this.last.endSide;
		if (diff <= 0 && (from - this.lastFrom || value.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
		if (diff < 0) return false;
		if (this.from.length == 250) this.finishChunk(true);
		if (this.chunkStart < 0) this.chunkStart = from;
		this.from.push(from - this.chunkStart);
		this.to.push(to - this.chunkStart);
		this.last = value;
		this.lastFrom = from;
		this.lastTo = to;
		this.value.push(value);
		if (value.point) this.maxPoint = Math.max(this.maxPoint, to - from);
		return true;
	}
	/**
	@internal
	*/
	addChunk(from, chunk) {
		if ((from - this.lastTo || chunk.value[0].startSide - this.last.endSide) < 0) return false;
		if (this.from.length) this.finishChunk(true);
		this.setMaxPoint = Math.max(this.setMaxPoint, chunk.maxPoint);
		this.chunks.push(chunk);
		this.chunkPos.push(from);
		let last = chunk.value.length - 1;
		this.last = chunk.value[last];
		this.lastFrom = chunk.from[last] + from;
		this.lastTo = chunk.to[last] + from;
		return true;
	}
	/**
	Finish the range set. Returns the new set. The builder can't be
	used anymore after this has been called.
	*/
	finish() {
		return this.finishInner(RangeSet.empty);
	}
	/**
	@internal
	*/
	finishInner(next) {
		if (this.from.length) this.finishChunk(false);
		if (this.chunks.length == 0) return next;
		let result = RangeSet.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(next) : next, this.setMaxPoint);
		this.from = null;
		return result;
	}
};
function findSharedChunks(a, b, textDiff) {
	let inA = /* @__PURE__ */ new Map();
	for (let set of a) for (let i = 0; i < set.chunk.length; i++) if (set.chunk[i].maxPoint <= 0) inA.set(set.chunk[i], set.chunkPos[i]);
	let shared = /* @__PURE__ */ new Set();
	for (let set of b) for (let i = 0; i < set.chunk.length; i++) {
		let known = inA.get(set.chunk[i]);
		if (known != null && (textDiff ? textDiff.mapPos(known) : known) == set.chunkPos[i] && !(textDiff === null || textDiff === void 0 ? void 0 : textDiff.touchesRange(known, known + set.chunk[i].length))) shared.add(set.chunk[i]);
	}
	return shared;
}
var LayerCursor = class {
	constructor(layer, skip, minPoint, rank = 0) {
		this.layer = layer;
		this.skip = skip;
		this.minPoint = minPoint;
		this.rank = rank;
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	get endSide() {
		return this.value ? this.value.endSide : 0;
	}
	goto(pos, side = -1e9) {
		this.chunkIndex = this.rangeIndex = 0;
		this.gotoInner(pos, side, false);
		return this;
	}
	gotoInner(pos, side, forward) {
		while (this.chunkIndex < this.layer.chunk.length) {
			let next = this.layer.chunk[this.chunkIndex];
			if (!(this.skip && this.skip.has(next) || this.layer.chunkEnd(this.chunkIndex) < pos || next.maxPoint < this.minPoint)) break;
			this.chunkIndex++;
			forward = false;
		}
		if (this.chunkIndex < this.layer.chunk.length) {
			let rangeIndex = this.layer.chunk[this.chunkIndex].findIndex(pos - this.layer.chunkPos[this.chunkIndex], side, true);
			if (!forward || this.rangeIndex < rangeIndex) this.setRangeIndex(rangeIndex);
		}
		this.next();
	}
	forward(pos, side) {
		if ((this.to - pos || this.endSide - side) < 0) this.gotoInner(pos, side, true);
	}
	next() {
		for (;;) if (this.chunkIndex == this.layer.chunk.length) {
			this.from = this.to = 1e9;
			this.value = null;
			break;
		} else {
			let chunkPos = this.layer.chunkPos[this.chunkIndex], chunk = this.layer.chunk[this.chunkIndex];
			this.from = chunkPos + chunk.from[this.rangeIndex];
			this.to = chunkPos + chunk.to[this.rangeIndex];
			this.value = chunk.value[this.rangeIndex];
			this.setRangeIndex(this.rangeIndex + 1);
			if (this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
		}
	}
	setRangeIndex(index) {
		if (index == this.layer.chunk[this.chunkIndex].value.length) {
			this.chunkIndex++;
			if (this.skip) while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex])) this.chunkIndex++;
			this.rangeIndex = 0;
		} else this.rangeIndex = index;
	}
	nextChunk() {
		this.chunkIndex++;
		this.rangeIndex = 0;
		this.next();
	}
	compare(other) {
		return this.from - other.from || this.startSide - other.startSide || this.rank - other.rank || this.to - other.to || this.endSide - other.endSide;
	}
};
var HeapCursor = class HeapCursor {
	constructor(heap) {
		this.heap = heap;
	}
	static from(sets, skip = null, minPoint = -1) {
		let heap = [];
		for (let i = 0; i < sets.length; i++) for (let cur = sets[i]; !cur.isEmpty; cur = cur.nextLayer) if (cur.maxPoint >= minPoint) heap.push(new LayerCursor(cur, skip, minPoint, i));
		return heap.length == 1 ? heap[0] : new HeapCursor(heap);
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	goto(pos, side = -1e9) {
		for (let cur of this.heap) cur.goto(pos, side);
		for (let i = this.heap.length >> 1; i >= 0; i--) heapBubble(this.heap, i);
		this.next();
		return this;
	}
	forward(pos, side) {
		for (let cur of this.heap) cur.forward(pos, side);
		for (let i = this.heap.length >> 1; i >= 0; i--) heapBubble(this.heap, i);
		if ((this.to - pos || this.value.endSide - side) < 0) this.next();
	}
	next() {
		if (this.heap.length == 0) {
			this.from = this.to = 1e9;
			this.value = null;
			this.rank = -1;
		} else {
			let top = this.heap[0];
			this.from = top.from;
			this.to = top.to;
			this.value = top.value;
			this.rank = top.rank;
			if (top.value) top.next();
			heapBubble(this.heap, 0);
		}
	}
};
function heapBubble(heap, index) {
	for (let cur = heap[index];;) {
		let childIndex = (index << 1) + 1;
		if (childIndex >= heap.length) break;
		let child = heap[childIndex];
		if (childIndex + 1 < heap.length && child.compare(heap[childIndex + 1]) >= 0) {
			child = heap[childIndex + 1];
			childIndex++;
		}
		if (cur.compare(child) < 0) break;
		heap[childIndex] = cur;
		heap[index] = child;
		index = childIndex;
	}
}
var SpanCursor = class {
	constructor(sets, skip, minPoint) {
		this.minPoint = minPoint;
		this.active = [];
		this.activeTo = [];
		this.activeRank = [];
		this.minActive = -1;
		this.point = null;
		this.pointFrom = 0;
		this.pointRank = 0;
		this.to = -1e9;
		this.endSide = 0;
		this.openStart = -1;
		this.cursor = HeapCursor.from(sets, skip, minPoint);
	}
	goto(pos, side = -1e9) {
		this.cursor.goto(pos, side);
		this.active.length = this.activeTo.length = this.activeRank.length = 0;
		this.minActive = -1;
		this.to = pos;
		this.endSide = side;
		this.openStart = -1;
		this.next();
		return this;
	}
	forward(pos, side) {
		while (this.minActive > -1 && (this.activeTo[this.minActive] - pos || this.active[this.minActive].endSide - side) < 0) this.removeActive(this.minActive);
		this.cursor.forward(pos, side);
	}
	removeActive(index) {
		remove(this.active, index);
		remove(this.activeTo, index);
		remove(this.activeRank, index);
		this.minActive = findMinIndex(this.active, this.activeTo);
	}
	addActive(trackOpen) {
		let i = 0, { value, to, rank } = this.cursor;
		while (i < this.activeRank.length && (rank - this.activeRank[i] || to - this.activeTo[i]) > 0) i++;
		insert(this.active, i, value);
		insert(this.activeTo, i, to);
		insert(this.activeRank, i, rank);
		if (trackOpen) insert(trackOpen, i, this.cursor.from);
		this.minActive = findMinIndex(this.active, this.activeTo);
	}
	next() {
		let from = this.to, wasPoint = this.point;
		this.point = null;
		let trackOpen = this.openStart < 0 ? [] : null;
		for (;;) {
			let a = this.minActive;
			if (a > -1 && (this.activeTo[a] - this.cursor.from || this.active[a].endSide - this.cursor.startSide) < 0) {
				if (this.activeTo[a] > from) {
					this.to = this.activeTo[a];
					this.endSide = this.active[a].endSide;
					break;
				}
				this.removeActive(a);
				if (trackOpen) remove(trackOpen, a);
			} else if (!this.cursor.value) {
				this.to = this.endSide = 1e9;
				break;
			} else if (this.cursor.from > from) {
				this.to = this.cursor.from;
				this.endSide = this.cursor.startSide;
				break;
			} else {
				let nextVal = this.cursor.value;
				if (!nextVal.point) {
					this.addActive(trackOpen);
					this.cursor.next();
				} else if (wasPoint && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
				else {
					this.point = nextVal;
					this.pointFrom = this.cursor.from;
					this.pointRank = this.cursor.rank;
					this.to = this.cursor.to;
					this.endSide = nextVal.endSide;
					this.cursor.next();
					this.forward(this.to, this.endSide);
					break;
				}
			}
		}
		if (trackOpen) {
			this.openStart = 0;
			for (let i = trackOpen.length - 1; i >= 0 && trackOpen[i] < from; i--) this.openStart++;
		}
	}
	activeForPoint(to) {
		if (!this.active.length) return this.active;
		let active = [];
		for (let i = this.active.length - 1; i >= 0; i--) {
			if (this.activeRank[i] < this.pointRank) break;
			if (this.activeTo[i] > to || this.activeTo[i] == to && this.active[i].endSide >= this.point.endSide) active.push(this.active[i]);
		}
		return active.reverse();
	}
	openEnd(to) {
		let open = 0;
		for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > to; i--) open++;
		return open;
	}
};
function compare(a, startA, b, startB, length, comparator) {
	a.goto(startA);
	b.goto(startB);
	let endB = startB + length;
	let pos = startB, dPos = startB - startA;
	let bounds = !!comparator.boundChange;
	for (let boundChange = false;;) {
		let dEnd = a.to + dPos - b.to, diff = dEnd || a.endSide - b.endSide;
		let end = diff < 0 ? a.to + dPos : b.to, clipEnd = Math.min(end, endB);
		if (a.point || b.point) {
			if (!(a.point && b.point && cmpVal(a.point, b.point) && sameValues(a.activeForPoint(a.to), b.activeForPoint(b.to)))) comparator.comparePoint(pos, clipEnd, a.point, b.point);
			boundChange = false;
		} else {
			if (boundChange) comparator.boundChange(pos);
			if (clipEnd > pos && !sameValues(a.active, b.active)) comparator.compareRange(pos, clipEnd, a.active, b.active);
			if (bounds && clipEnd < endB && (dEnd || a.openEnd(end) != b.openEnd(end))) boundChange = true;
		}
		if (end > endB) break;
		pos = end;
		if (diff <= 0) a.next();
		if (diff >= 0) b.next();
	}
}
function sameValues(a, b) {
	if (a.length != b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] != b[i] && !cmpVal(a[i], b[i])) return false;
	return true;
}
function remove(array, index) {
	for (let i = index, e = array.length - 1; i < e; i++) array[i] = array[i + 1];
	array.pop();
}
function insert(array, index, value) {
	for (let i = array.length - 1; i >= index; i--) array[i + 1] = array[i];
	array[index] = value;
}
function findMinIndex(value, array) {
	let found = -1, foundPos = 1e9;
	for (let i = 0; i < array.length; i++) if ((array[i] - foundPos || value[i].endSide - value[found].endSide) < 0) {
		found = i;
		foundPos = array[i];
	}
	return found;
}
/**
Count the column position at the given offset into the string,
taking extending characters and tab size into account.
*/
function countColumn(string, tabSize, to = string.length) {
	let n = 0;
	for (let i = 0; i < to && i < string.length;) if (string.charCodeAt(i) == 9) {
		n += tabSize - n % tabSize;
		i++;
	} else {
		n++;
		i = findClusterBreak(string, i);
	}
	return n;
}
/**
Find the offset that corresponds to the given column position in a
string, taking extending characters and tab size into account. By
default, the string length is returned when it is too short to
reach the column. Pass `strict` true to make it return -1 in that
situation.
*/
function findColumn(string, col, tabSize, strict) {
	for (let i = 0, n = 0;;) {
		if (n >= col) return i;
		if (i == string.length) break;
		n += string.charCodeAt(i) == 9 ? tabSize - n % tabSize : 1;
		i = findClusterBreak(string, i);
	}
	return strict === true ? -1 : string.length;
}
//#endregion
//#region ../../../node_modules/.pnpm/style-mod@4.1.0/node_modules/style-mod/src/style-mod.js
var C = "ͼ";
var COUNT = typeof Symbol == "undefined" ? "__" + C : Symbol.for(C);
var SET = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet");
var top = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {};
var StyleModule = class {
	constructor(spec, options) {
		this.rules = [];
		let { finish } = options || {};
		function splitSelector(selector) {
			return /^@/.test(selector) ? [selector] : selector.split(/,\s*/);
		}
		function render(selectors, spec, target, isKeyframes) {
			let local = [], isAt = /^@(\w+)\b/.exec(selectors[0]), keyframes = isAt && isAt[1] == "keyframes";
			if (isAt && spec == null) return target.push(selectors[0] + ";");
			for (let prop in spec) {
				let value = spec[prop];
				if (/&/.test(prop)) render(prop.split(/,\s*/).map((part) => selectors.map((sel) => part.replace(/&/, sel))).reduce((a, b) => a.concat(b)), value, target);
				else if (value && typeof value == "object") {
					if (!isAt) throw new RangeError("The value of a property (" + prop + ") should be a primitive value.");
					render(splitSelector(prop), value, local, keyframes);
				} else if (value != null) local.push(prop.replace(/_.*/, "").replace(/[A-Z]/g, (l) => "-" + l.toLowerCase()) + ": " + value + ";");
			}
			if (local.length || keyframes) target.push((finish && !isAt && !isKeyframes ? selectors.map(finish) : selectors).join(", ") + " {" + local.join(" ") + "}");
		}
		for (let prop in spec) render(splitSelector(prop), spec[prop], this.rules);
	}
	getRules() {
		return this.rules.join("\n");
	}
	static newName() {
		let id = top[COUNT] || 1;
		top[COUNT] = id + 1;
		return C + id.toString(36);
	}
	static mount(root, modules, options) {
		let set = root[SET], nonce = options && options.nonce;
		if (!set) set = new StyleSet(root, nonce);
		else if (nonce) set.setNonce(nonce);
		set.mount(Array.isArray(modules) ? modules : [modules]);
	}
};
var adoptedSet = /* @__PURE__ */ new Map();
var StyleSet = class {
	constructor(root, nonce) {
		let doc = root.ownerDocument || root, win = doc.defaultView;
		if (!root.head && root.adoptedStyleSheets && win.CSSStyleSheet) {
			let adopted = adoptedSet.get(doc);
			if (adopted) {
				root.adoptedStyleSheets = [adopted.sheet, ...root.adoptedStyleSheets];
				return root[SET] = adopted;
			}
			this.sheet = new win.CSSStyleSheet();
			root.adoptedStyleSheets = [this.sheet, ...root.adoptedStyleSheets];
			adoptedSet.set(doc, this);
		} else {
			this.styleTag = doc.createElement("style");
			if (nonce) this.styleTag.setAttribute("nonce", nonce);
			let target = root.head || root;
			target.insertBefore(this.styleTag, target.firstChild);
		}
		this.modules = [];
		root[SET] = this;
	}
	mount(modules) {
		let sheet = this.sheet;
		let pos = 0, j = 0;
		for (let i = 0; i < modules.length; i++) {
			let mod = modules[i], index = this.modules.indexOf(mod);
			if (index < j && index > -1) {
				this.modules.splice(index, 1);
				j--;
				index = -1;
			}
			if (index == -1) {
				this.modules.splice(j++, 0, mod);
				if (sheet) for (let k = 0; k < mod.rules.length; k++) sheet.insertRule(mod.rules[k], pos++);
			} else {
				while (j < index) pos += this.modules[j++].rules.length;
				pos += mod.rules.length;
				j++;
			}
		}
		if (!sheet) {
			let text = "";
			for (let i = 0; i < this.modules.length; i++) text += this.modules[i].getRules() + "\n";
			this.styleTag.textContent = text;
		}
	}
	setNonce(nonce) {
		if (this.styleTag && this.styleTag.getAttribute("nonce") != nonce) this.styleTag.setAttribute("nonce", nonce);
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/w3c-keyname@2.2.6/node_modules/w3c-keyname/index.es.js
var base = {
	8: "Backspace",
	9: "Tab",
	10: "Enter",
	12: "NumLock",
	13: "Enter",
	16: "Shift",
	17: "Control",
	18: "Alt",
	20: "CapsLock",
	27: "Escape",
	32: " ",
	33: "PageUp",
	34: "PageDown",
	35: "End",
	36: "Home",
	37: "ArrowLeft",
	38: "ArrowUp",
	39: "ArrowRight",
	40: "ArrowDown",
	44: "PrintScreen",
	45: "Insert",
	46: "Delete",
	59: ";",
	61: "=",
	91: "Meta",
	92: "Meta",
	106: "*",
	107: "+",
	108: ",",
	109: "-",
	110: ".",
	111: "/",
	144: "NumLock",
	145: "ScrollLock",
	160: "Shift",
	161: "Shift",
	162: "Control",
	163: "Control",
	164: "Alt",
	165: "Alt",
	173: "-",
	186: ";",
	187: "=",
	188: ",",
	189: "-",
	190: ".",
	191: "/",
	192: "`",
	219: "[",
	220: "\\",
	221: "]",
	222: "'"
};
var shift = {
	48: ")",
	49: "!",
	50: "@",
	51: "#",
	52: "$",
	53: "%",
	54: "^",
	55: "&",
	56: "*",
	57: "(",
	59: ":",
	61: "+",
	173: "_",
	186: ":",
	187: "+",
	188: "<",
	189: "_",
	190: ">",
	191: "?",
	192: "~",
	219: "{",
	220: "|",
	221: "}",
	222: "\""
};
var chrome$1 = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie$1 = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
var brokenModifierNames = mac || chrome$1 && +chrome$1[1] < 57;
for (var i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);
for (var i = 1; i <= 24; i++) base[i + 111] = "F" + i;
for (var i = 65; i <= 90; i++) {
	base[i] = String.fromCharCode(i + 32);
	shift[i] = String.fromCharCode(i);
}
for (var code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code];
function keyName(event) {
	var name = !(brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) || ie$1 && event.shiftKey && event.key && event.key.length == 1 || event.key == "Unidentified") && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || "Unidentified";
	if (name == "Esc") name = "Escape";
	if (name == "Del") name = "Delete";
	if (name == "Left") name = "ArrowLeft";
	if (name == "Up") name = "ArrowUp";
	if (name == "Right") name = "ArrowRight";
	if (name == "Down") name = "ArrowDown";
	return name;
}
//#endregion
//#region ../../../node_modules/.pnpm/crelt@1.0.6/node_modules/crelt/index.js
function crelt() {
	var elt = arguments[0];
	if (typeof elt == "string") elt = document.createElement(elt);
	var i = 1, next = arguments[1];
	if (next && typeof next == "object" && next.nodeType == null && !Array.isArray(next)) {
		for (var name in next) if (Object.prototype.hasOwnProperty.call(next, name)) {
			var value = next[name];
			if (typeof value == "string") elt.setAttribute(name, value);
			else if (value != null) elt[name] = value;
		}
		i++;
	}
	for (; i < arguments.length; i++) add(elt, arguments[i]);
	return elt;
}
function add(elt, child) {
	if (typeof child == "string") elt.appendChild(document.createTextNode(child));
	else if (child == null) {} else if (child.nodeType != null) elt.appendChild(child);
	else if (Array.isArray(child)) for (var i = 0; i < child.length; i++) add(elt, child[i]);
	else throw new RangeError("Unsupported child node: " + child);
}
//#endregion
//#region ../../../node_modules/.pnpm/@codemirror+view@6.39.8/node_modules/@codemirror/view/dist/index.js
var nav = typeof navigator != "undefined" ? navigator : {
	userAgent: "",
	vendor: "",
	platform: ""
};
var doc = typeof document != "undefined" ? document : { documentElement: { style: {} } };
var ie_edge = /* @__PURE__ */ /Edge\/(\d+)/.exec(nav.userAgent);
var ie_upto10 = /* @__PURE__ */ /MSIE \d/.test(nav.userAgent);
var ie_11up = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent);
var ie = !!(ie_upto10 || ie_11up || ie_edge);
var gecko = !ie && /* @__PURE__ */ /gecko\/(\d+)/i.test(nav.userAgent);
var chrome = !ie && /* @__PURE__ */ /Chrome\/(\d+)/.exec(nav.userAgent);
var webkit = "webkitFontSmoothing" in doc.documentElement.style;
var safari = !ie && /* @__PURE__ */ /Apple Computer/.test(nav.vendor);
var ios = safari && (/* @__PURE__ */ /Mobile\/\w+/.test(nav.userAgent) || nav.maxTouchPoints > 2);
var browser = {
	mac: ios || /* @__PURE__ */ /Mac/.test(nav.platform),
	windows: /* @__PURE__ */ /Win/.test(nav.platform),
	linux: /* @__PURE__ */ /Linux|X11/.test(nav.platform),
	ie,
	ie_version: ie_upto10 ? doc.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0,
	gecko,
	gecko_version: gecko ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
	chrome: !!chrome,
	chrome_version: chrome ? +chrome[1] : 0,
	ios,
	android: /* @__PURE__ */ /Android\b/.test(nav.userAgent),
	webkit,
	webkit_version: webkit ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
	safari,
	safari_version: safari ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(nav.userAgent) || [0, 0])[1] : 0,
	tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function combineAttrs(source, target) {
	for (let name in source) if (name == "class" && target.class) target.class += " " + source.class;
	else if (name == "style" && target.style) target.style += ";" + source.style;
	else target[name] = source[name];
	return target;
}
var noAttrs$1 = /* @__PURE__ */ Object.create(null);
function attrsEq(a, b, ignore) {
	if (a == b) return true;
	if (!a) a = noAttrs$1;
	if (!b) b = noAttrs$1;
	let keysA = Object.keys(a), keysB = Object.keys(b);
	if (keysA.length - (ignore && keysA.indexOf(ignore) > -1 ? 1 : 0) != keysB.length - (ignore && keysB.indexOf(ignore) > -1 ? 1 : 0)) return false;
	for (let key of keysA) if (key != ignore && (keysB.indexOf(key) == -1 || a[key] !== b[key])) return false;
	return true;
}
function setAttrs(dom, attrs) {
	for (let i = dom.attributes.length - 1; i >= 0; i--) {
		let name = dom.attributes[i].name;
		if (attrs[name] == null) dom.removeAttribute(name);
	}
	for (let name in attrs) {
		let value = attrs[name];
		if (name == "style") dom.style.cssText = value;
		else if (dom.getAttribute(name) != value) dom.setAttribute(name, value);
	}
}
function updateAttrs(dom, prev, attrs) {
	let changed = false;
	if (prev) {
		for (let name in prev) if (!(attrs && name in attrs)) {
			changed = true;
			if (name == "style") dom.style.cssText = "";
			else dom.removeAttribute(name);
		}
	}
	if (attrs) {
		for (let name in attrs) if (!(prev && prev[name] == attrs[name])) {
			changed = true;
			if (name == "style") dom.style.cssText = attrs[name];
			else dom.setAttribute(name, attrs[name]);
		}
	}
	return changed;
}
function getAttrs(dom) {
	let attrs = Object.create(null);
	for (let i = 0; i < dom.attributes.length; i++) {
		let attr = dom.attributes[i];
		attrs[attr.name] = attr.value;
	}
	return attrs;
}
/**
Widgets added to the content are described by subclasses of this
class. Using a description object like that makes it possible to
delay creating of the DOM structure for a widget until it is
needed, and to avoid redrawing widgets even if the decorations
that define them are recreated.
*/
var WidgetType = class {
	/**
	Compare this instance to another instance of the same type.
	(TypeScript can't express this, but only instances of the same
	specific class will be passed to this method.) This is used to
	avoid redrawing widgets when they are replaced by a new
	decoration of the same type. The default implementation just
	returns `false`, which will cause new instances of the widget to
	always be redrawn.
	*/
	eq(widget) {
		return false;
	}
	/**
	Update a DOM element created by a widget of the same type (but
	different, non-`eq` content) to reflect this widget. May return
	true to indicate that it could update, false to indicate it
	couldn't (in which case the widget will be redrawn). The default
	implementation just returns false.
	*/
	updateDOM(dom, view) {
		return false;
	}
	/**
	@internal
	*/
	compare(other) {
		return this == other || this.constructor == other.constructor && this.eq(other);
	}
	/**
	The estimated height this widget will have, to be used when
	estimating the height of content that hasn't been drawn. May
	return -1 to indicate you don't know. The default implementation
	returns -1.
	*/
	get estimatedHeight() {
		return -1;
	}
	/**
	For inline widgets that are displayed inline (as opposed to
	`inline-block`) and introduce line breaks (through `<br>` tags
	or textual newlines), this must indicate the amount of line
	breaks they introduce. Defaults to 0.
	*/
	get lineBreaks() {
		return 0;
	}
	/**
	Can be used to configure which kinds of events inside the widget
	should be ignored by the editor. The default is to ignore all
	events.
	*/
	ignoreEvent(event) {
		return true;
	}
	/**
	Override the way screen coordinates for positions at/in the
	widget are found. `pos` will be the offset into the widget, and
	`side` the side of the position that is being queried—less than
	zero for before, greater than zero for after, and zero for
	directly at that position.
	*/
	coordsAt(dom, pos, side) {
		return null;
	}
	/**
	@internal
	*/
	get isHidden() {
		return false;
	}
	/**
	@internal
	*/
	get editable() {
		return false;
	}
	/**
	This is called when the an instance of the widget is removed
	from the editor view.
	*/
	destroy(dom) {}
};
/**
The different types of blocks that can occur in an editor view.
*/
var BlockType = /* @__PURE__ */ (function(BlockType) {
	/**
	A line of text.
	*/
	BlockType[BlockType["Text"] = 0] = "Text";
	/**
	A block widget associated with the position after it.
	*/
	BlockType[BlockType["WidgetBefore"] = 1] = "WidgetBefore";
	/**
	A block widget associated with the position before it.
	*/
	BlockType[BlockType["WidgetAfter"] = 2] = "WidgetAfter";
	/**
	A block widget [replacing](https://codemirror.net/6/docs/ref/#view.Decoration^replace) a range of content.
	*/
	BlockType[BlockType["WidgetRange"] = 3] = "WidgetRange";
	return BlockType;
})(BlockType || (BlockType = {}));
/**
A decoration provides information on how to draw or style a piece
of content. You'll usually use it wrapped in a
[`Range`](https://codemirror.net/6/docs/ref/#state.Range), which adds a start and end position.
@nonabstract
*/
var Decoration = class extends RangeValue {
	constructor(startSide, endSide, widget, spec) {
		super();
		this.startSide = startSide;
		this.endSide = endSide;
		this.widget = widget;
		this.spec = spec;
	}
	/**
	@internal
	*/
	get heightRelevant() {
		return false;
	}
	/**
	Create a mark decoration, which influences the styling of the
	content in its range. Nested mark decorations will cause nested
	DOM elements to be created. Nesting order is determined by
	precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
	the higher-precedence decorations creating the inner DOM nodes.
	Such elements are split on line boundaries and on the boundaries
	of lower-precedence decorations.
	*/
	static mark(spec) {
		return new MarkDecoration(spec);
	}
	/**
	Create a widget decoration, which displays a DOM element at the
	given position.
	*/
	static widget(spec) {
		let side = Math.max(-1e4, Math.min(1e4, spec.side || 0)), block = !!spec.block;
		side += block && !spec.inlineOrder ? side > 0 ? 3e8 : -4e8 : side > 0 ? 1e8 : -1e8;
		return new PointDecoration(spec, side, side, block, spec.widget || null, false);
	}
	/**
	Create a replace decoration which replaces the given range with
	a widget, or simply hides it.
	*/
	static replace(spec) {
		let block = !!spec.block, startSide, endSide;
		if (spec.isBlockGap) {
			startSide = -5e8;
			endSide = 4e8;
		} else {
			let { start, end } = getInclusive(spec, block);
			startSide = (start ? block ? -3e8 : -1 : 5e8) - 1;
			endSide = (end ? block ? 2e8 : 1 : -6e8) + 1;
		}
		return new PointDecoration(spec, startSide, endSide, block, spec.widget || null, true);
	}
	/**
	Create a line decoration, which can add DOM attributes to the
	line starting at the given position.
	*/
	static line(spec) {
		return new LineDecoration(spec);
	}
	/**
	Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
	decorated range or ranges. If the ranges aren't already sorted,
	pass `true` for `sort` to make the library sort them for you.
	*/
	static set(of, sort = false) {
		return RangeSet.of(of, sort);
	}
	/**
	@internal
	*/
	hasHeight() {
		return this.widget ? this.widget.estimatedHeight > -1 : false;
	}
};
/**
The empty set of decorations.
*/
Decoration.none = RangeSet.empty;
var MarkDecoration = class MarkDecoration extends Decoration {
	constructor(spec) {
		let { start, end } = getInclusive(spec);
		super(start ? -1 : 5e8, end ? 1 : -6e8, null, spec);
		this.tagName = spec.tagName || "span";
		this.attrs = spec.class && spec.attributes ? combineAttrs(spec.attributes, { class: spec.class }) : spec.class ? { class: spec.class } : spec.attributes || noAttrs$1;
	}
	eq(other) {
		return this == other || other instanceof MarkDecoration && this.tagName == other.tagName && attrsEq(this.attrs, other.attrs);
	}
	range(from, to = from) {
		if (from >= to) throw new RangeError("Mark decorations may not be empty");
		return super.range(from, to);
	}
};
MarkDecoration.prototype.point = false;
var LineDecoration = class LineDecoration extends Decoration {
	constructor(spec) {
		super(-2e8, -2e8, null, spec);
	}
	eq(other) {
		return other instanceof LineDecoration && this.spec.class == other.spec.class && attrsEq(this.spec.attributes, other.spec.attributes);
	}
	range(from, to = from) {
		if (to != from) throw new RangeError("Line decoration ranges must be zero-length");
		return super.range(from, to);
	}
};
LineDecoration.prototype.mapMode = MapMode.TrackBefore;
LineDecoration.prototype.point = true;
var PointDecoration = class PointDecoration extends Decoration {
	constructor(spec, startSide, endSide, block, widget, isReplace) {
		super(startSide, endSide, widget, spec);
		this.block = block;
		this.isReplace = isReplace;
		this.mapMode = !block ? MapMode.TrackDel : startSide <= 0 ? MapMode.TrackBefore : MapMode.TrackAfter;
	}
	get type() {
		return this.startSide != this.endSide ? BlockType.WidgetRange : this.startSide <= 0 ? BlockType.WidgetBefore : BlockType.WidgetAfter;
	}
	get heightRelevant() {
		return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
	}
	eq(other) {
		return other instanceof PointDecoration && widgetsEq(this.widget, other.widget) && this.block == other.block && this.startSide == other.startSide && this.endSide == other.endSide;
	}
	range(from, to = from) {
		if (this.isReplace && (from > to || from == to && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
		if (!this.isReplace && to != from) throw new RangeError("Widget decorations can only have zero-length ranges");
		return super.range(from, to);
	}
};
PointDecoration.prototype.point = true;
function getInclusive(spec, block = false) {
	let { inclusiveStart: start, inclusiveEnd: end } = spec;
	if (start == null) start = spec.inclusive;
	if (end == null) end = spec.inclusive;
	return {
		start: start !== null && start !== void 0 ? start : block,
		end: end !== null && end !== void 0 ? end : block
	};
}
function widgetsEq(a, b) {
	return a == b || !!(a && b && a.compare(b));
}
function addRange(from, to, ranges, margin = 0) {
	let last = ranges.length - 1;
	if (last >= 0 && ranges[last] + margin >= from) ranges[last] = Math.max(ranges[last], to);
	else ranges.push(from, to);
}
/**
A block wrapper defines a DOM node that wraps lines or other block
wrappers at the top of the document. It affects any line or block
widget that starts inside its range, including blocks starting
directly at `from` but not including `to`.
*/
var BlockWrapper = class BlockWrapper extends RangeValue {
	constructor(tagName, attributes) {
		super();
		this.tagName = tagName;
		this.attributes = attributes;
	}
	eq(other) {
		return other == this || other instanceof BlockWrapper && this.tagName == other.tagName && attrsEq(this.attributes, other.attributes);
	}
	/**
	Create a block wrapper object with the given tag name and
	attributes.
	*/
	static create(spec) {
		return new BlockWrapper(spec.tagName, spec.attributes || noAttrs$1);
	}
	/**
	Create a range set from the given block wrapper ranges.
	*/
	static set(of, sort = false) {
		return RangeSet.of(of, sort);
	}
};
BlockWrapper.prototype.startSide = BlockWrapper.prototype.endSide = -1;
function getSelection(root) {
	let target;
	if (root.nodeType == 11) target = root.getSelection ? root : root.ownerDocument;
	else target = root;
	return target.getSelection();
}
function contains(dom, node) {
	return node ? dom == node || dom.contains(node.nodeType != 1 ? node.parentNode : node) : false;
}
function hasSelection(dom, selection) {
	if (!selection.anchorNode) return false;
	try {
		return contains(dom, selection.anchorNode);
	} catch (_) {
		return false;
	}
}
function clientRectsFor(dom) {
	if (dom.nodeType == 3) return textRange(dom, 0, dom.nodeValue.length).getClientRects();
	else if (dom.nodeType == 1) return dom.getClientRects();
	else return [];
}
function isEquivalentPosition(node, off, targetNode, targetOff) {
	return targetNode ? scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1) : false;
}
function domIndex(node) {
	for (var index = 0;; index++) {
		node = node.previousSibling;
		if (!node) return index;
	}
}
function isBlockElement(node) {
	return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);
}
function scanFor(node, off, targetNode, targetOff, dir) {
	for (;;) {
		if (node == targetNode && off == targetOff) return true;
		if (off == (dir < 0 ? 0 : maxOffset(node))) {
			if (node.nodeName == "DIV") return false;
			let parent = node.parentNode;
			if (!parent || parent.nodeType != 1) return false;
			off = domIndex(node) + (dir < 0 ? 0 : 1);
			node = parent;
		} else if (node.nodeType == 1) {
			node = node.childNodes[off + (dir < 0 ? -1 : 0)];
			if (node.nodeType == 1 && node.contentEditable == "false") return false;
			off = dir < 0 ? maxOffset(node) : 0;
		} else return false;
	}
}
function maxOffset(node) {
	return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function flattenRect(rect, left) {
	let x = left ? rect.left : rect.right;
	return {
		left: x,
		right: x,
		top: rect.top,
		bottom: rect.bottom
	};
}
function windowRect(win) {
	let vp = win.visualViewport;
	if (vp) return {
		left: 0,
		right: vp.width,
		top: 0,
		bottom: vp.height
	};
	return {
		left: 0,
		right: win.innerWidth,
		top: 0,
		bottom: win.innerHeight
	};
}
function getScale(elt, rect) {
	let scaleX = rect.width / elt.offsetWidth;
	let scaleY = rect.height / elt.offsetHeight;
	if (scaleX > .995 && scaleX < 1.005 || !isFinite(scaleX) || Math.abs(rect.width - elt.offsetWidth) < 1) scaleX = 1;
	if (scaleY > .995 && scaleY < 1.005 || !isFinite(scaleY) || Math.abs(rect.height - elt.offsetHeight) < 1) scaleY = 1;
	return {
		scaleX,
		scaleY
	};
}
function scrollRectIntoView(dom, rect, side, x, y, xMargin, yMargin, ltr) {
	let doc = dom.ownerDocument, win = doc.defaultView || window;
	for (let cur = dom, stop = false; cur && !stop;) if (cur.nodeType == 1) {
		let bounding, top = cur == doc.body;
		let scaleX = 1, scaleY = 1;
		if (top) bounding = windowRect(win);
		else {
			if (/^(fixed|sticky)$/.test(getComputedStyle(cur).position)) stop = true;
			if (cur.scrollHeight <= cur.clientHeight && cur.scrollWidth <= cur.clientWidth) {
				cur = cur.assignedSlot || cur.parentNode;
				continue;
			}
			let rect = cur.getBoundingClientRect();
			({scaleX, scaleY} = getScale(cur, rect));
			bounding = {
				left: rect.left,
				right: rect.left + cur.clientWidth * scaleX,
				top: rect.top,
				bottom: rect.top + cur.clientHeight * scaleY
			};
		}
		let moveX = 0, moveY = 0;
		if (y == "nearest") {
			if (rect.top < bounding.top) {
				moveY = rect.top - (bounding.top + yMargin);
				if (side > 0 && rect.bottom > bounding.bottom + moveY) moveY = rect.bottom - bounding.bottom + yMargin;
			} else if (rect.bottom > bounding.bottom) {
				moveY = rect.bottom - bounding.bottom + yMargin;
				if (side < 0 && rect.top - moveY < bounding.top) moveY = rect.top - (bounding.top + yMargin);
			}
		} else {
			let rectHeight = rect.bottom - rect.top, boundingHeight = bounding.bottom - bounding.top;
			moveY = (y == "center" && rectHeight <= boundingHeight ? rect.top + rectHeight / 2 - boundingHeight / 2 : y == "start" || y == "center" && side < 0 ? rect.top - yMargin : rect.bottom - boundingHeight + yMargin) - bounding.top;
		}
		if (x == "nearest") {
			if (rect.left < bounding.left) {
				moveX = rect.left - (bounding.left + xMargin);
				if (side > 0 && rect.right > bounding.right + moveX) moveX = rect.right - bounding.right + xMargin;
			} else if (rect.right > bounding.right) {
				moveX = rect.right - bounding.right + xMargin;
				if (side < 0 && rect.left < bounding.left + moveX) moveX = rect.left - (bounding.left + xMargin);
			}
		} else moveX = (x == "center" ? rect.left + (rect.right - rect.left) / 2 - (bounding.right - bounding.left) / 2 : x == "start" == ltr ? rect.left - xMargin : rect.right - (bounding.right - bounding.left) + xMargin) - bounding.left;
		if (moveX || moveY) if (top) win.scrollBy(moveX, moveY);
		else {
			let movedX = 0, movedY = 0;
			if (moveY) {
				let start = cur.scrollTop;
				cur.scrollTop += moveY / scaleY;
				movedY = (cur.scrollTop - start) * scaleY;
			}
			if (moveX) {
				let start = cur.scrollLeft;
				cur.scrollLeft += moveX / scaleX;
				movedX = (cur.scrollLeft - start) * scaleX;
			}
			rect = {
				left: rect.left - movedX,
				top: rect.top - movedY,
				right: rect.right - movedX,
				bottom: rect.bottom - movedY
			};
			if (movedX && Math.abs(movedX - moveX) < 1) x = "nearest";
			if (movedY && Math.abs(movedY - moveY) < 1) y = "nearest";
		}
		if (top) break;
		if (rect.top < bounding.top || rect.bottom > bounding.bottom || rect.left < bounding.left || rect.right > bounding.right) rect = {
			left: Math.max(rect.left, bounding.left),
			right: Math.min(rect.right, bounding.right),
			top: Math.max(rect.top, bounding.top),
			bottom: Math.min(rect.bottom, bounding.bottom)
		};
		cur = cur.assignedSlot || cur.parentNode;
	} else if (cur.nodeType == 11) cur = cur.host;
	else break;
}
function scrollableParents(dom) {
	let doc = dom.ownerDocument, x, y;
	for (let cur = dom.parentNode; cur;) if (cur == doc.body || x && y) break;
	else if (cur.nodeType == 1) {
		if (!y && cur.scrollHeight > cur.clientHeight) y = cur;
		if (!x && cur.scrollWidth > cur.clientWidth) x = cur;
		cur = cur.assignedSlot || cur.parentNode;
	} else if (cur.nodeType == 11) cur = cur.host;
	else break;
	return {
		x,
		y
	};
}
var DOMSelectionState = class {
	constructor() {
		this.anchorNode = null;
		this.anchorOffset = 0;
		this.focusNode = null;
		this.focusOffset = 0;
	}
	eq(domSel) {
		return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset && this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;
	}
	setRange(range) {
		let { anchorNode, focusNode } = range;
		this.set(anchorNode, Math.min(range.anchorOffset, anchorNode ? maxOffset(anchorNode) : 0), focusNode, Math.min(range.focusOffset, focusNode ? maxOffset(focusNode) : 0));
	}
	set(anchorNode, anchorOffset, focusNode, focusOffset) {
		this.anchorNode = anchorNode;
		this.anchorOffset = anchorOffset;
		this.focusNode = focusNode;
		this.focusOffset = focusOffset;
	}
};
var preventScrollSupported = null;
if (browser.safari && browser.safari_version >= 26) preventScrollSupported = false;
function focusPreventScroll(dom) {
	if (dom.setActive) return dom.setActive();
	if (preventScrollSupported) return dom.focus(preventScrollSupported);
	let stack = [];
	for (let cur = dom; cur; cur = cur.parentNode) {
		stack.push(cur, cur.scrollTop, cur.scrollLeft);
		if (cur == cur.ownerDocument) break;
	}
	dom.focus(preventScrollSupported == null ? { get preventScroll() {
		preventScrollSupported = { preventScroll: true };
		return true;
	} } : void 0);
	if (!preventScrollSupported) {
		preventScrollSupported = false;
		for (let i = 0; i < stack.length;) {
			let elt = stack[i++], top = stack[i++], left = stack[i++];
			if (elt.scrollTop != top) elt.scrollTop = top;
			if (elt.scrollLeft != left) elt.scrollLeft = left;
		}
	}
}
var scratchRange;
function textRange(node, from, to = from) {
	let range = scratchRange || (scratchRange = document.createRange());
	range.setEnd(node, to);
	range.setStart(node, from);
	return range;
}
function dispatchKey(elt, name, code, mods) {
	let options = {
		key: name,
		code: name,
		keyCode: code,
		which: code,
		cancelable: true
	};
	if (mods) ({altKey: options.altKey, ctrlKey: options.ctrlKey, shiftKey: options.shiftKey, metaKey: options.metaKey} = mods);
	let down = new KeyboardEvent("keydown", options);
	down.synthetic = true;
	elt.dispatchEvent(down);
	let up = new KeyboardEvent("keyup", options);
	up.synthetic = true;
	elt.dispatchEvent(up);
	return down.defaultPrevented || up.defaultPrevented;
}
function getRoot(node) {
	while (node) {
		if (node && (node.nodeType == 9 || node.nodeType == 11 && node.host)) return node;
		node = node.assignedSlot || node.parentNode;
	}
	return null;
}
function atElementStart(doc, selection) {
	let node = selection.focusNode, offset = selection.focusOffset;
	if (!node || selection.anchorNode != node || selection.anchorOffset != offset) return false;
	offset = Math.min(offset, maxOffset(node));
	for (;;) if (offset) {
		if (node.nodeType != 1) return false;
		let prev = node.childNodes[offset - 1];
		if (prev.contentEditable == "false") offset--;
		else {
			node = prev;
			offset = maxOffset(node);
		}
	} else if (node == doc) return true;
	else {
		offset = domIndex(node);
		node = node.parentNode;
	}
}
function isScrolledToBottom(elt) {
	return elt.scrollTop > Math.max(1, elt.scrollHeight - elt.clientHeight - 4);
}
function textNodeBefore(startNode, startOffset) {
	for (let node = startNode, offset = startOffset;;) if (node.nodeType == 3 && offset > 0) return {
		node,
		offset
	};
	else if (node.nodeType == 1 && offset > 0) {
		if (node.contentEditable == "false") return null;
		node = node.childNodes[offset - 1];
		offset = maxOffset(node);
	} else if (node.parentNode && !isBlockElement(node)) {
		offset = domIndex(node);
		node = node.parentNode;
	} else return null;
}
function textNodeAfter(startNode, startOffset) {
	for (let node = startNode, offset = startOffset;;) if (node.nodeType == 3 && offset < node.nodeValue.length) return {
		node,
		offset
	};
	else if (node.nodeType == 1 && offset < node.childNodes.length) {
		if (node.contentEditable == "false") return null;
		node = node.childNodes[offset];
		offset = 0;
	} else if (node.parentNode && !isBlockElement(node)) {
		offset = domIndex(node) + 1;
		node = node.parentNode;
	} else return null;
}
var DOMPos = class DOMPos {
	constructor(node, offset, precise = true) {
		this.node = node;
		this.offset = offset;
		this.precise = precise;
	}
	static before(dom, precise) {
		return new DOMPos(dom.parentNode, domIndex(dom), precise);
	}
	static after(dom, precise) {
		return new DOMPos(dom.parentNode, domIndex(dom) + 1, precise);
	}
};
/**
Used to indicate [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
*/
var Direction = /* @__PURE__ */ (function(Direction) {
	/**
	Left-to-right.
	*/
	Direction[Direction["LTR"] = 0] = "LTR";
	/**
	Right-to-left.
	*/
	Direction[Direction["RTL"] = 1] = "RTL";
	return Direction;
})(Direction || (Direction = {}));
var LTR = Direction.LTR, RTL = Direction.RTL;
function dec(str) {
	let result = [];
	for (let i = 0; i < str.length; i++) result.push(1 << +str[i]);
	return result;
}
var LowTypes = /* @__PURE__ */ dec("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
var ArabicTypes = /* @__PURE__ */ dec("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
var Brackets = /* @__PURE__ */ Object.create(null), BracketStack = [];
for (let p of [
	"()",
	"[]",
	"{}"
]) {
	let l = /* @__PURE__ */ p.charCodeAt(0), r = /* @__PURE__ */ p.charCodeAt(1);
	Brackets[l] = r;
	Brackets[r] = -l;
}
function charType(ch) {
	return ch <= 247 ? LowTypes[ch] : 1424 <= ch && ch <= 1524 ? 2 : 1536 <= ch && ch <= 1785 ? ArabicTypes[ch - 1536] : 1774 <= ch && ch <= 2220 ? 4 : 8192 <= ch && ch <= 8204 ? 256 : 64336 <= ch && ch <= 65023 ? 4 : 1;
}
var BidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
/**
Represents a contiguous range of text that has a single direction
(as in left-to-right or right-to-left).
*/
var BidiSpan = class {
	/**
	The direction of this span.
	*/
	get dir() {
		return this.level % 2 ? RTL : LTR;
	}
	/**
	@internal
	*/
	constructor(from, to, level) {
		this.from = from;
		this.to = to;
		this.level = level;
	}
	/**
	@internal
	*/
	side(end, dir) {
		return this.dir == dir == end ? this.to : this.from;
	}
	/**
	@internal
	*/
	forward(forward, dir) {
		return forward == (this.dir == dir);
	}
	/**
	@internal
	*/
	static find(order, index, level, assoc) {
		let maybe = -1;
		for (let i = 0; i < order.length; i++) {
			let span = order[i];
			if (span.from <= index && span.to >= index) {
				if (span.level == level) return i;
				if (maybe < 0 || (assoc != 0 ? assoc < 0 ? span.from < index : span.to > index : order[maybe].level > span.level)) maybe = i;
			}
		}
		if (maybe < 0) throw new RangeError("Index out of range");
		return maybe;
	}
};
function isolatesEq(a, b) {
	if (a.length != b.length) return false;
	for (let i = 0; i < a.length; i++) {
		let iA = a[i], iB = b[i];
		if (iA.from != iB.from || iA.to != iB.to || iA.direction != iB.direction || !isolatesEq(iA.inner, iB.inner)) return false;
	}
	return true;
}
var types = [];
function computeCharTypes(line, rFrom, rTo, isolates, outerType) {
	for (let iI = 0; iI <= isolates.length; iI++) {
		let from = iI ? isolates[iI - 1].to : rFrom, to = iI < isolates.length ? isolates[iI].from : rTo;
		let prevType = iI ? 256 : outerType;
		for (let i = from, prev = prevType, prevStrong = prevType; i < to; i++) {
			let type = charType(line.charCodeAt(i));
			if (type == 512) type = prev;
			else if (type == 8 && prevStrong == 4) type = 16;
			types[i] = type == 4 ? 2 : type;
			if (type & 7) prevStrong = type;
			prev = type;
		}
		for (let i = from, prev = prevType, prevStrong = prevType; i < to; i++) {
			let type = types[i];
			if (type == 128) if (i < to - 1 && prev == types[i + 1] && prev & 24) type = types[i] = prev;
			else types[i] = 256;
			else if (type == 64) {
				let end = i + 1;
				while (end < to && types[end] == 64) end++;
				let replace = i && prev == 8 || end < rTo && types[end] == 8 ? prevStrong == 1 ? 1 : 8 : 256;
				for (let j = i; j < end; j++) types[j] = replace;
				i = end - 1;
			} else if (type == 8 && prevStrong == 1) types[i] = 1;
			prev = type;
			if (type & 7) prevStrong = type;
		}
	}
}
function processBracketPairs(line, rFrom, rTo, isolates, outerType) {
	let oppositeType = outerType == 1 ? 2 : 1;
	for (let iI = 0, sI = 0, context = 0; iI <= isolates.length; iI++) {
		let from = iI ? isolates[iI - 1].to : rFrom, to = iI < isolates.length ? isolates[iI].from : rTo;
		for (let i = from, ch, br, type; i < to; i++) if (br = Brackets[ch = line.charCodeAt(i)]) if (br < 0) {
			for (let sJ = sI - 3; sJ >= 0; sJ -= 3) if (BracketStack[sJ + 1] == -br) {
				let flags = BracketStack[sJ + 2];
				let type = flags & 2 ? outerType : !(flags & 4) ? 0 : flags & 1 ? oppositeType : outerType;
				if (type) types[i] = types[BracketStack[sJ]] = type;
				sI = sJ;
				break;
			}
		} else if (BracketStack.length == 189) break;
		else {
			BracketStack[sI++] = i;
			BracketStack[sI++] = ch;
			BracketStack[sI++] = context;
		}
		else if ((type = types[i]) == 2 || type == 1) {
			let embed = type == outerType;
			context = embed ? 0 : 1;
			for (let sJ = sI - 3; sJ >= 0; sJ -= 3) {
				let cur = BracketStack[sJ + 2];
				if (cur & 2) break;
				if (embed) BracketStack[sJ + 2] |= 2;
				else {
					if (cur & 4) break;
					BracketStack[sJ + 2] |= 4;
				}
			}
		}
	}
}
function processNeutrals(rFrom, rTo, isolates, outerType) {
	for (let iI = 0, prev = outerType; iI <= isolates.length; iI++) {
		let from = iI ? isolates[iI - 1].to : rFrom, to = iI < isolates.length ? isolates[iI].from : rTo;
		for (let i = from; i < to;) {
			let type = types[i];
			if (type == 256) {
				let end = i + 1;
				for (;;) if (end == to) {
					if (iI == isolates.length) break;
					end = isolates[iI++].to;
					to = iI < isolates.length ? isolates[iI].from : rTo;
				} else if (types[end] == 256) end++;
				else break;
				let beforeL = prev == 1;
				let replace = beforeL == ((end < rTo ? types[end] : outerType) == 1) ? beforeL ? 1 : 2 : outerType;
				for (let j = end, jI = iI, fromJ = jI ? isolates[jI - 1].to : rFrom; j > i;) {
					if (j == fromJ) {
						j = isolates[--jI].from;
						fromJ = jI ? isolates[jI - 1].to : rFrom;
					}
					types[--j] = replace;
				}
				i = end;
			} else {
				prev = type;
				i++;
			}
		}
	}
}
function emitSpans(line, from, to, level, baseLevel, isolates, order) {
	let ourType = level % 2 ? 2 : 1;
	if (level % 2 == baseLevel % 2) for (let iCh = from, iI = 0; iCh < to;) {
		let sameDir = true, isNum = false;
		if (iI == isolates.length || iCh < isolates[iI].from) {
			let next = types[iCh];
			if (next != ourType) {
				sameDir = false;
				isNum = next == 16;
			}
		}
		let recurse = !sameDir && ourType == 1 ? [] : null;
		let localLevel = sameDir ? level : level + 1;
		let iScan = iCh;
		run: for (;;) if (iI < isolates.length && iScan == isolates[iI].from) {
			if (isNum) break run;
			let iso = isolates[iI];
			if (!sameDir) for (let upto = iso.to, jI = iI + 1;;) {
				if (upto == to) break run;
				if (jI < isolates.length && isolates[jI].from == upto) upto = isolates[jI++].to;
				else if (types[upto] == ourType) break run;
				else break;
			}
			iI++;
			if (recurse) recurse.push(iso);
			else {
				if (iso.from > iCh) order.push(new BidiSpan(iCh, iso.from, localLevel));
				computeSectionOrder(line, iso.direction == LTR != !(localLevel % 2) ? level + 1 : level, baseLevel, iso.inner, iso.from, iso.to, order);
				iCh = iso.to;
			}
			iScan = iso.to;
		} else if (iScan == to || (sameDir ? types[iScan] != ourType : types[iScan] == ourType)) break;
		else iScan++;
		if (recurse) emitSpans(line, iCh, iScan, level + 1, baseLevel, recurse, order);
		else if (iCh < iScan) order.push(new BidiSpan(iCh, iScan, localLevel));
		iCh = iScan;
	}
	else for (let iCh = to, iI = isolates.length; iCh > from;) {
		let sameDir = true, isNum = false;
		if (!iI || iCh > isolates[iI - 1].to) {
			let next = types[iCh - 1];
			if (next != ourType) {
				sameDir = false;
				isNum = next == 16;
			}
		}
		let recurse = !sameDir && ourType == 1 ? [] : null;
		let localLevel = sameDir ? level : level + 1;
		let iScan = iCh;
		run: for (;;) if (iI && iScan == isolates[iI - 1].to) {
			if (isNum) break run;
			let iso = isolates[--iI];
			if (!sameDir) for (let upto = iso.from, jI = iI;;) {
				if (upto == from) break run;
				if (jI && isolates[jI - 1].to == upto) upto = isolates[--jI].from;
				else if (types[upto - 1] == ourType) break run;
				else break;
			}
			if (recurse) recurse.push(iso);
			else {
				if (iso.to < iCh) order.push(new BidiSpan(iso.to, iCh, localLevel));
				computeSectionOrder(line, iso.direction == LTR != !(localLevel % 2) ? level + 1 : level, baseLevel, iso.inner, iso.from, iso.to, order);
				iCh = iso.from;
			}
			iScan = iso.from;
		} else if (iScan == from || (sameDir ? types[iScan - 1] != ourType : types[iScan - 1] == ourType)) break;
		else iScan--;
		if (recurse) emitSpans(line, iScan, iCh, level + 1, baseLevel, recurse, order);
		else if (iScan < iCh) order.push(new BidiSpan(iScan, iCh, localLevel));
		iCh = iScan;
	}
}
function computeSectionOrder(line, level, baseLevel, isolates, from, to, order) {
	let outerType = level % 2 ? 2 : 1;
	computeCharTypes(line, from, to, isolates, outerType);
	processBracketPairs(line, from, to, isolates, outerType);
	processNeutrals(from, to, isolates, outerType);
	emitSpans(line, from, to, level, baseLevel, isolates, order);
}
function computeOrder(line, direction, isolates) {
	if (!line) return [new BidiSpan(0, 0, direction == RTL ? 1 : 0)];
	if (direction == LTR && !isolates.length && !BidiRE.test(line)) return trivialOrder(line.length);
	if (isolates.length) while (line.length > types.length) types[types.length] = 256;
	let order = [], level = direction == LTR ? 0 : 1;
	computeSectionOrder(line, level, level, isolates, 0, line.length, order);
	return order;
}
function trivialOrder(length) {
	return [new BidiSpan(0, length, 0)];
}
var movedOver = "";
function moveVisually(line, order, dir, start, forward) {
	var _a;
	let startIndex = start.head - line.from;
	let spanI = BidiSpan.find(order, startIndex, (_a = start.bidiLevel) !== null && _a !== void 0 ? _a : -1, start.assoc);
	let span = order[spanI], spanEnd = span.side(forward, dir);
	if (startIndex == spanEnd) {
		let nextI = spanI += forward ? 1 : -1;
		if (nextI < 0 || nextI >= order.length) return null;
		span = order[spanI = nextI];
		startIndex = span.side(!forward, dir);
		spanEnd = span.side(forward, dir);
	}
	let nextIndex = findClusterBreak(line.text, startIndex, span.forward(forward, dir));
	if (nextIndex < span.from || nextIndex > span.to) nextIndex = spanEnd;
	movedOver = line.text.slice(Math.min(startIndex, nextIndex), Math.max(startIndex, nextIndex));
	let nextSpan = spanI == (forward ? order.length - 1 : 0) ? null : order[spanI + (forward ? 1 : -1)];
	if (nextSpan && nextIndex == spanEnd && nextSpan.level + (forward ? 0 : 1) < span.level) return EditorSelection.cursor(nextSpan.side(!forward, dir) + line.from, nextSpan.forward(forward, dir) ? 1 : -1, nextSpan.level);
	return EditorSelection.cursor(nextIndex + line.from, span.forward(forward, dir) ? -1 : 1, span.level);
}
function autoDirection(text, from, to) {
	for (let i = from; i < to; i++) {
		let type = charType(text.charCodeAt(i));
		if (type == 1) return LTR;
		if (type == 2 || type == 4) return RTL;
	}
	return LTR;
}
var clickAddsSelectionRange = /* @__PURE__ */ Facet.define();
var dragMovesSelection$1 = /* @__PURE__ */ Facet.define();
var mouseSelectionStyle = /* @__PURE__ */ Facet.define();
var exceptionSink = /* @__PURE__ */ Facet.define();
var updateListener = /* @__PURE__ */ Facet.define();
var inputHandler$1 = /* @__PURE__ */ Facet.define();
var focusChangeEffect = /* @__PURE__ */ Facet.define();
var clipboardInputFilter = /* @__PURE__ */ Facet.define();
var clipboardOutputFilter = /* @__PURE__ */ Facet.define();
var perLineTextDirection = /* @__PURE__ */ Facet.define({ combine: (values) => values.some((x) => x) });
var nativeSelectionHidden = /* @__PURE__ */ Facet.define({ combine: (values) => values.some((x) => x) });
var scrollHandler = /* @__PURE__ */ Facet.define();
var ScrollTarget = class ScrollTarget {
	constructor(range, y = "nearest", x = "nearest", yMargin = 5, xMargin = 5, isSnapshot = false) {
		this.range = range;
		this.y = y;
		this.x = x;
		this.yMargin = yMargin;
		this.xMargin = xMargin;
		this.isSnapshot = isSnapshot;
	}
	map(changes) {
		return changes.empty ? this : new ScrollTarget(this.range.map(changes), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
	clip(state) {
		return this.range.to <= state.doc.length ? this : new ScrollTarget(EditorSelection.cursor(state.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
};
var scrollIntoView$1 = /* @__PURE__ */ StateEffect.define({ map: (t, ch) => t.map(ch) });
var setEditContextFormatting = /* @__PURE__ */ StateEffect.define();
/**
Log or report an unhandled exception in client code. Should
probably only be used by extension code that allows client code to
provide functions, and calls those functions in a context where an
exception can't be propagated to calling code in a reasonable way
(for example when in an event handler).

Either calls a handler registered with
[`EditorView.exceptionSink`](https://codemirror.net/6/docs/ref/#view.EditorView^exceptionSink),
`window.onerror`, if defined, or `console.error` (in which case
it'll pass `context`, when given, as first argument).
*/
function logException(state, exception, context) {
	let handler = state.facet(exceptionSink);
	if (handler.length) handler[0](exception);
	else if (window.onerror && window.onerror(String(exception), context, void 0, void 0, exception));
	else if (context) console.error(context + ":", exception);
	else console.error(exception);
}
var editable = /* @__PURE__ */ Facet.define({ combine: (values) => values.length ? values[0] : true });
var nextPluginID = 0;
var viewPlugin = /* @__PURE__ */ Facet.define({ combine(plugins) {
	return plugins.filter((p, i) => {
		for (let j = 0; j < i; j++) if (plugins[j].plugin == p.plugin) return false;
		return true;
	});
} });
/**
View plugins associate stateful values with a view. They can
influence the way the content is drawn, and are notified of things
that happen in the view. They optionally take an argument, in
which case you need to call [`of`](https://codemirror.net/6/docs/ref/#view.ViewPlugin.of) to create
an extension for the plugin. When the argument type is undefined,
you can use the plugin instance as an extension directly.
*/
var ViewPlugin = class ViewPlugin {
	constructor(id, create, domEventHandlers, domEventObservers, buildExtensions) {
		this.id = id;
		this.create = create;
		this.domEventHandlers = domEventHandlers;
		this.domEventObservers = domEventObservers;
		this.baseExtensions = buildExtensions(this);
		this.extension = this.baseExtensions.concat(viewPlugin.of({
			plugin: this,
			arg: void 0
		}));
	}
	/**
	Create an extension for this plugin with the given argument.
	*/
	of(arg) {
		return this.baseExtensions.concat(viewPlugin.of({
			plugin: this,
			arg
		}));
	}
	/**
	Define a plugin from a constructor function that creates the
	plugin's value, given an editor view.
	*/
	static define(create, spec) {
		const { eventHandlers, eventObservers, provide, decorations: deco } = spec || {};
		return new ViewPlugin(nextPluginID++, create, eventHandlers, eventObservers, (plugin) => {
			let ext = [];
			if (deco) ext.push(decorations.of((view) => {
				let pluginInst = view.plugin(plugin);
				return pluginInst ? deco(pluginInst) : Decoration.none;
			}));
			if (provide) ext.push(provide(plugin));
			return ext;
		});
	}
	/**
	Create a plugin for a class whose constructor takes a single
	editor view as argument.
	*/
	static fromClass(cls, spec) {
		return ViewPlugin.define((view, arg) => new cls(view, arg), spec);
	}
};
var PluginInstance = class {
	constructor(spec) {
		this.spec = spec;
		this.mustUpdate = null;
		this.value = null;
	}
	get plugin() {
		return this.spec && this.spec.plugin;
	}
	update(view) {
		if (!this.value) {
			if (this.spec) try {
				this.value = this.spec.plugin.create(view, this.spec.arg);
			} catch (e) {
				logException(view.state, e, "CodeMirror plugin crashed");
				this.deactivate();
			}
		} else if (this.mustUpdate) {
			let update = this.mustUpdate;
			this.mustUpdate = null;
			if (this.value.update) try {
				this.value.update(update);
			} catch (e) {
				logException(update.state, e, "CodeMirror plugin crashed");
				if (this.value.destroy) try {
					this.value.destroy();
				} catch (_) {}
				this.deactivate();
			}
		}
		return this;
	}
	destroy(view) {
		var _a;
		if ((_a = this.value) === null || _a === void 0 ? void 0 : _a.destroy) try {
			this.value.destroy();
		} catch (e) {
			logException(view.state, e, "CodeMirror plugin crashed");
		}
	}
	deactivate() {
		this.spec = this.value = null;
	}
};
var editorAttributes = /* @__PURE__ */ Facet.define();
var contentAttributes = /* @__PURE__ */ Facet.define();
var decorations = /* @__PURE__ */ Facet.define();
var blockWrappers = /* @__PURE__ */ Facet.define();
var outerDecorations = /* @__PURE__ */ Facet.define();
var atomicRanges = /* @__PURE__ */ Facet.define();
var bidiIsolatedRanges = /* @__PURE__ */ Facet.define();
function getIsolatedRanges(view, line) {
	let isolates = view.state.facet(bidiIsolatedRanges);
	if (!isolates.length) return isolates;
	let sets = isolates.map((i) => i instanceof Function ? i(view) : i);
	let result = [];
	RangeSet.spans(sets, line.from, line.to, {
		point() {},
		span(fromDoc, toDoc, active, open) {
			let from = fromDoc - line.from, to = toDoc - line.from;
			let level = result;
			for (let i = active.length - 1; i >= 0; i--, open--) {
				let direction = active[i].spec.bidiIsolate, update;
				if (direction == null) direction = autoDirection(line.text, from, to);
				if (open > 0 && level.length && (update = level[level.length - 1]).to == from && update.direction == direction) {
					update.to = to;
					level = update.inner;
				} else {
					let add = {
						from,
						to,
						direction,
						inner: []
					};
					level.push(add);
					level = add.inner;
				}
			}
		}
	});
	return result;
}
var scrollMargins = /* @__PURE__ */ Facet.define();
function getScrollMargins(view) {
	let left = 0, right = 0, top = 0, bottom = 0;
	for (let source of view.state.facet(scrollMargins)) {
		let m = source(view);
		if (m) {
			if (m.left != null) left = Math.max(left, m.left);
			if (m.right != null) right = Math.max(right, m.right);
			if (m.top != null) top = Math.max(top, m.top);
			if (m.bottom != null) bottom = Math.max(bottom, m.bottom);
		}
	}
	return {
		left,
		right,
		top,
		bottom
	};
}
var styleModule = /* @__PURE__ */ Facet.define();
var ChangedRange = class ChangedRange {
	constructor(fromA, toA, fromB, toB) {
		this.fromA = fromA;
		this.toA = toA;
		this.fromB = fromB;
		this.toB = toB;
	}
	join(other) {
		return new ChangedRange(Math.min(this.fromA, other.fromA), Math.max(this.toA, other.toA), Math.min(this.fromB, other.fromB), Math.max(this.toB, other.toB));
	}
	addToSet(set) {
		let i = set.length, me = this;
		for (; i > 0; i--) {
			let range = set[i - 1];
			if (range.fromA > me.toA) continue;
			if (range.toA < me.fromA) break;
			me = me.join(range);
			set.splice(i - 1, 1);
		}
		set.splice(i, 0, me);
		return set;
	}
	static extendWithRanges(diff, ranges) {
		if (ranges.length == 0) return diff;
		let result = [];
		for (let dI = 0, rI = 0, off = 0;;) {
			let nextD = dI < diff.length ? diff[dI].fromB : 1e9;
			let nextR = rI < ranges.length ? ranges[rI] : 1e9;
			let fromB = Math.min(nextD, nextR);
			if (fromB == 1e9) break;
			let fromA = fromB + off, toB = fromB, toA = fromA;
			for (;;) if (rI < ranges.length && ranges[rI] <= toB) {
				let end = ranges[rI + 1];
				rI += 2;
				toB = Math.max(toB, end);
				for (let i = dI; i < diff.length && diff[i].fromB <= toB; i++) off = diff[i].toA - diff[i].toB;
				toA = Math.max(toA, end + off);
			} else if (dI < diff.length && diff[dI].fromB <= toB) {
				let next = diff[dI++];
				toB = Math.max(toB, next.toB);
				toA = Math.max(toA, next.toA);
				off = next.toA - next.toB;
			} else break;
			result.push(new ChangedRange(fromA, toA, fromB, toB));
		}
		return result;
	}
};
/**
View [plugins](https://codemirror.net/6/docs/ref/#view.ViewPlugin) are given instances of this
class, which describe what happened, whenever the view is updated.
*/
var ViewUpdate = class ViewUpdate {
	constructor(view, state, transactions) {
		this.view = view;
		this.state = state;
		this.transactions = transactions;
		/**
		@internal
		*/
		this.flags = 0;
		this.startState = view.state;
		this.changes = ChangeSet.empty(this.startState.doc.length);
		for (let tr of transactions) this.changes = this.changes.compose(tr.changes);
		let changedRanges = [];
		this.changes.iterChangedRanges((fromA, toA, fromB, toB) => changedRanges.push(new ChangedRange(fromA, toA, fromB, toB)));
		this.changedRanges = changedRanges;
	}
	/**
	@internal
	*/
	static create(view, state, transactions) {
		return new ViewUpdate(view, state, transactions);
	}
	/**
	Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
	[visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
	update.
	*/
	get viewportChanged() {
		return (this.flags & 4) > 0;
	}
	/**
	Returns true when
	[`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
	and the viewport change is not just the result of mapping it in
	response to document changes.
	*/
	get viewportMoved() {
		return (this.flags & 8) > 0;
	}
	/**
	Indicates whether the height of a block element in the editor
	changed in this update.
	*/
	get heightChanged() {
		return (this.flags & 2) > 0;
	}
	/**
	Returns true when the document was modified or the size of the
	editor, or elements within the editor, changed.
	*/
	get geometryChanged() {
		return this.docChanged || (this.flags & 18) > 0;
	}
	/**
	True when this update indicates a focus change.
	*/
	get focusChanged() {
		return (this.flags & 1) > 0;
	}
	/**
	Whether the document changed in this update.
	*/
	get docChanged() {
		return !this.changes.empty;
	}
	/**
	Whether the selection was explicitly set in this update.
	*/
	get selectionSet() {
		return this.transactions.some((tr) => tr.selection);
	}
	/**
	@internal
	*/
	get empty() {
		return this.flags == 0 && this.transactions.length == 0;
	}
};
var noChildren = [];
var Tile = class {
	constructor(dom, length, flags = 0) {
		this.dom = dom;
		this.length = length;
		this.flags = flags;
		this.parent = null;
		dom.cmTile = this;
	}
	get breakAfter() {
		return this.flags & 1;
	}
	get children() {
		return noChildren;
	}
	isWidget() {
		return false;
	}
	get isHidden() {
		return false;
	}
	isComposite() {
		return false;
	}
	isLine() {
		return false;
	}
	isText() {
		return false;
	}
	isBlock() {
		return false;
	}
	get domAttrs() {
		return null;
	}
	sync(track) {
		this.flags |= 2;
		if (this.flags & 4) {
			this.flags &= -5;
			let attrs = this.domAttrs;
			if (attrs) setAttrs(this.dom, attrs);
		}
	}
	toString() {
		return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
	}
	destroy() {
		this.parent = null;
	}
	setDOM(dom) {
		this.dom = dom;
		dom.cmTile = this;
	}
	get posAtStart() {
		return this.parent ? this.parent.posBefore(this) : 0;
	}
	get posAtEnd() {
		return this.posAtStart + this.length;
	}
	posBefore(tile, start = this.posAtStart) {
		let pos = start;
		for (let child of this.children) {
			if (child == tile) return pos;
			pos += child.length + child.breakAfter;
		}
		throw new RangeError("Invalid child in posBefore");
	}
	posAfter(tile) {
		return this.posBefore(tile) + tile.length;
	}
	covers(side) {
		return true;
	}
	coordsIn(pos, side) {
		return null;
	}
	domPosFor(off, side) {
		let index = domIndex(this.dom);
		let after = this.length ? off > 0 : side > 0;
		return new DOMPos(this.parent.dom, index + (after ? 1 : 0), off == 0 || off == this.length);
	}
	markDirty(attrs) {
		this.flags &= -3;
		if (attrs) this.flags |= 4;
		if (this.parent && this.parent.flags & 2) this.parent.markDirty(false);
	}
	get overrideDOMText() {
		return null;
	}
	get root() {
		for (let t = this; t; t = t.parent) if (t instanceof DocTile) return t;
		return null;
	}
	static get(dom) {
		return dom.cmTile;
	}
};
var CompositeTile = class extends Tile {
	constructor(dom) {
		super(dom, 0);
		this._children = [];
	}
	isComposite() {
		return true;
	}
	get children() {
		return this._children;
	}
	get lastChild() {
		return this.children.length ? this.children[this.children.length - 1] : null;
	}
	append(child) {
		this.children.push(child);
		child.parent = this;
	}
	sync(track) {
		if (this.flags & 2) return;
		super.sync(track);
		let parent = this.dom, prev = null, next;
		let tracking = (track === null || track === void 0 ? void 0 : track.node) == parent ? track : null;
		let length = 0;
		for (let child of this.children) {
			child.sync(track);
			length += child.length + child.breakAfter;
			next = prev ? prev.nextSibling : parent.firstChild;
			if (tracking && next != child.dom) tracking.written = true;
			if (child.dom.parentNode == parent) while (next && next != child.dom) next = rm$1(next);
			else parent.insertBefore(child.dom, next);
			prev = child.dom;
		}
		next = prev ? prev.nextSibling : parent.firstChild;
		if (tracking && next) tracking.written = true;
		while (next) next = rm$1(next);
		this.length = length;
	}
};
function rm$1(dom) {
	let next = dom.nextSibling;
	dom.parentNode.removeChild(dom);
	return next;
}
var DocTile = class extends CompositeTile {
	constructor(view, dom) {
		super(dom);
		this.view = view;
	}
	owns(tile) {
		for (; tile; tile = tile.parent) if (tile == this) return true;
		return false;
	}
	isBlock() {
		return true;
	}
	nearest(dom) {
		for (;;) {
			if (!dom) return null;
			let tile = Tile.get(dom);
			if (tile && this.owns(tile)) return tile;
			dom = dom.parentNode;
		}
	}
	blockTiles(f) {
		for (let stack = [], cur = this, i = 0, pos = 0;;) if (i == cur.children.length) {
			if (!stack.length) return;
			cur = cur.parent;
			if (cur.breakAfter) pos++;
			i = stack.pop();
		} else {
			let next = cur.children[i++];
			if (next instanceof BlockWrapperTile) {
				stack.push(i);
				cur = next;
				i = 0;
			} else {
				let end = pos + next.length;
				let result = f(next, pos);
				if (result !== void 0) return result;
				pos = end + next.breakAfter;
			}
		}
	}
	resolveBlock(pos, side) {
		let before, beforeOff = -1, after, afterOff = -1;
		this.blockTiles((tile, off) => {
			let end = off + tile.length;
			if (pos >= off && pos <= end) {
				if (tile.isWidget() && side >= -1 && side <= 1) {
					if (tile.flags & 32) return true;
					if (tile.flags & 16) before = void 0;
				}
				if ((off < pos || pos == end && (side < -1 ? tile.length : tile.covers(1))) && (!before || !tile.isWidget() && before.isWidget())) {
					before = tile;
					beforeOff = pos - off;
				}
				if ((end > pos || pos == off && (side > 1 ? tile.length : tile.covers(-1))) && (!after || !tile.isWidget() && after.isWidget())) {
					after = tile;
					afterOff = pos - off;
				}
			}
		});
		if (!before && !after) throw new Error("No tile at position " + pos);
		return before && side < 0 || !after ? {
			tile: before,
			offset: beforeOff
		} : {
			tile: after,
			offset: afterOff
		};
	}
};
var BlockWrapperTile = class BlockWrapperTile extends CompositeTile {
	constructor(dom, wrapper) {
		super(dom);
		this.wrapper = wrapper;
	}
	isBlock() {
		return true;
	}
	covers(side) {
		if (!this.children.length) return false;
		return side < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1);
	}
	get domAttrs() {
		return this.wrapper.attributes;
	}
	static of(wrapper, dom) {
		let tile = new BlockWrapperTile(dom || document.createElement(wrapper.tagName), wrapper);
		if (!dom) tile.flags |= 4;
		return tile;
	}
};
var LineTile = class LineTile extends CompositeTile {
	constructor(dom, attrs) {
		super(dom);
		this.attrs = attrs;
	}
	isLine() {
		return true;
	}
	static start(attrs, dom, keepAttrs) {
		let line = new LineTile(dom || document.createElement("div"), attrs);
		if (!dom || !keepAttrs) line.flags |= 4;
		return line;
	}
	get domAttrs() {
		return this.attrs;
	}
	resolveInline(pos, side, forCoords) {
		let before = null, beforeOff = -1, after = null, afterOff = -1;
		function scan(tile, pos) {
			for (let i = 0, off = 0; i < tile.children.length && off <= pos; i++) {
				let child = tile.children[i], end = off + child.length;
				if (end >= pos) {
					if (child.isComposite()) scan(child, pos - off);
					else if ((!after || after.isHidden && (side > 0 || forCoords && onSameLine(after, child))) && (end > pos || child.flags & 32)) {
						after = child;
						afterOff = pos - off;
					} else if (off < pos || child.flags & 16 && !child.isHidden) {
						before = child;
						beforeOff = pos - off;
					}
				}
				off = end;
			}
		}
		scan(this, pos);
		let target = (side < 0 ? before : after) || before || after;
		return target ? {
			tile: target,
			offset: target == before ? beforeOff : afterOff
		} : null;
	}
	coordsIn(pos, side) {
		let found = this.resolveInline(pos, side, true);
		if (!found) return fallbackRect(this);
		return found.tile.coordsIn(Math.max(0, found.offset), side);
	}
	domIn(pos, side) {
		let found = this.resolveInline(pos, side);
		if (found) {
			let { tile, offset } = found;
			if (this.dom.contains(tile.dom)) {
				if (tile.isText()) return new DOMPos(tile.dom, Math.min(tile.dom.nodeValue.length, offset));
				return tile.domPosFor(offset, tile.flags & 16 ? 1 : tile.flags & 32 ? -1 : side);
			}
			let parent = found.tile.parent, saw = false;
			for (let ch of parent.children) {
				if (saw) return new DOMPos(ch.dom, 0);
				if (ch == found.tile) saw = true;
			}
		}
		return new DOMPos(this.dom, 0);
	}
};
function fallbackRect(tile) {
	let last = tile.dom.lastChild;
	if (!last) return tile.dom.getBoundingClientRect();
	let rects = clientRectsFor(last);
	return rects[rects.length - 1] || null;
}
function onSameLine(a, b) {
	let posA = a.coordsIn(0, 1), posB = b.coordsIn(0, 1);
	return posA && posB && posB.top < posA.bottom;
}
var MarkTile = class MarkTile extends CompositeTile {
	constructor(dom, mark) {
		super(dom);
		this.mark = mark;
	}
	get domAttrs() {
		return this.mark.attrs;
	}
	static of(mark, dom) {
		let tile = new MarkTile(dom || document.createElement(mark.tagName), mark);
		if (!dom) tile.flags |= 4;
		return tile;
	}
};
var TextTile = class TextTile extends Tile {
	constructor(dom, text) {
		super(dom, text.length);
		this.text = text;
	}
	sync(track) {
		if (this.flags & 2) return;
		super.sync(track);
		if (this.dom.nodeValue != this.text) {
			if (track && track.node == this.dom) track.written = true;
			this.dom.nodeValue = this.text;
		}
	}
	isText() {
		return true;
	}
	toString() {
		return JSON.stringify(this.text);
	}
	coordsIn(pos, side) {
		let length = this.dom.nodeValue.length;
		if (pos > length) pos = length;
		let from = pos, to = pos, flatten = 0;
		if (pos == 0 && side < 0 || pos == length && side >= 0) {
			if (!(browser.chrome || browser.gecko)) {
				if (pos) {
					from--;
					flatten = 1;
				} else if (to < length) {
					to++;
					flatten = -1;
				}
			}
		} else if (side < 0) from--;
		else if (to < length) to++;
		let rects = textRange(this.dom, from, to).getClientRects();
		if (!rects.length) return null;
		let rect = rects[(flatten ? flatten < 0 : side >= 0) ? 0 : rects.length - 1];
		if (browser.safari && !flatten && rect.width == 0) rect = Array.prototype.find.call(rects, (r) => r.width) || rect;
		return flatten ? flattenRect(rect, flatten < 0) : rect || null;
	}
	static of(text, dom) {
		let tile = new TextTile(dom || document.createTextNode(text), text);
		if (!dom) tile.flags |= 2;
		return tile;
	}
};
var WidgetTile = class WidgetTile extends Tile {
	constructor(dom, length, widget, flags) {
		super(dom, length, flags);
		this.widget = widget;
	}
	isWidget() {
		return true;
	}
	get isHidden() {
		return this.widget.isHidden;
	}
	covers(side) {
		if (this.flags & 48) return false;
		return (this.flags & (side < 0 ? 64 : 128)) > 0;
	}
	coordsIn(pos, side) {
		return this.coordsInWidget(pos, side, false);
	}
	coordsInWidget(pos, side, block) {
		let custom = this.widget.coordsAt(this.dom, pos, side);
		if (custom) return custom;
		if (block) return flattenRect(this.dom.getBoundingClientRect(), this.length ? pos == 0 : side <= 0);
		else {
			let rects = this.dom.getClientRects(), rect = null;
			if (!rects.length) return null;
			let fromBack = this.flags & 16 ? true : this.flags & 32 ? false : pos > 0;
			for (let i = fromBack ? rects.length - 1 : 0;; i += fromBack ? -1 : 1) {
				rect = rects[i];
				if (pos > 0 ? i == 0 : i == rects.length - 1 || rect.top < rect.bottom) break;
			}
			return flattenRect(rect, !fromBack);
		}
	}
	get overrideDOMText() {
		if (!this.length) return Text.empty;
		let { root } = this;
		if (!root) return Text.empty;
		let start = this.posAtStart;
		return root.view.state.doc.slice(start, start + this.length);
	}
	destroy() {
		super.destroy();
		this.widget.destroy(this.dom);
	}
	static of(widget, view, length, flags, dom) {
		if (!dom) {
			dom = widget.toDOM(view);
			if (!widget.editable) dom.contentEditable = "false";
		}
		return new WidgetTile(dom, length, widget, flags);
	}
};
var WidgetBufferTile = class extends Tile {
	constructor(flags) {
		let img = document.createElement("img");
		img.className = "cm-widgetBuffer";
		img.setAttribute("aria-hidden", "true");
		super(img, 0, flags);
	}
	get isHidden() {
		return true;
	}
	get overrideDOMText() {
		return Text.empty;
	}
	coordsIn(pos) {
		return this.dom.getBoundingClientRect();
	}
};
var TilePointer = class {
	constructor(top) {
		this.index = 0;
		this.beforeBreak = false;
		this.parents = [];
		this.tile = top;
	}
	advance(dist, side, walker) {
		let { tile, index, beforeBreak, parents } = this;
		while (dist || side > 0) if (!tile.isComposite()) if (index == tile.length) {
			beforeBreak = !!tile.breakAfter;
			({tile, index} = parents.pop());
			index++;
		} else if (!dist) break;
		else {
			let take = Math.min(dist, tile.length - index);
			if (walker) walker.skip(tile, index, index + take);
			dist -= take;
			index += take;
		}
		else if (beforeBreak) {
			if (!dist) break;
			if (walker) walker.break();
			dist--;
			beforeBreak = false;
		} else if (index == tile.children.length) {
			if (!dist && !parents.length) break;
			if (walker) walker.leave(tile);
			beforeBreak = !!tile.breakAfter;
			({tile, index} = parents.pop());
			index++;
		} else {
			let next = tile.children[index], brk = next.breakAfter;
			if ((side > 0 ? next.length <= dist : next.length < dist) && (!walker || walker.skip(next, 0, next.length) !== false || !next.isComposite)) {
				beforeBreak = !!brk;
				index++;
				dist -= next.length;
			} else {
				parents.push({
					tile,
					index
				});
				tile = next;
				index = 0;
				if (walker && next.isComposite()) walker.enter(next);
			}
		}
		this.tile = tile;
		this.index = index;
		this.beforeBreak = beforeBreak;
		return this;
	}
	get root() {
		return this.parents.length ? this.parents[0].tile : this.tile;
	}
};
var OpenWrapper = class {
	constructor(from, to, wrapper, rank) {
		this.from = from;
		this.to = to;
		this.wrapper = wrapper;
		this.rank = rank;
	}
};
var TileBuilder = class {
	constructor(cache, root, blockWrappers) {
		this.cache = cache;
		this.root = root;
		this.blockWrappers = blockWrappers;
		this.curLine = null;
		this.lastBlock = null;
		this.afterWidget = null;
		this.pos = 0;
		this.wrappers = [];
		this.wrapperPos = 0;
	}
	addText(text, marks, openStart, tile) {
		var _a;
		this.flushBuffer();
		let parent = this.ensureMarks(marks, openStart);
		let prev = parent.lastChild;
		if (prev && prev.isText() && !(prev.flags & 8)) {
			this.cache.reused.set(prev, 2);
			let tile = parent.children[parent.children.length - 1] = new TextTile(prev.dom, prev.text + text);
			tile.parent = parent;
		} else parent.append(tile || TextTile.of(text, (_a = this.cache.find(TextTile)) === null || _a === void 0 ? void 0 : _a.dom));
		this.pos += text.length;
		this.afterWidget = null;
	}
	addComposition(composition, context) {
		let line = this.curLine;
		if (line.dom != context.line.dom) {
			line.setDOM(this.cache.reused.has(context.line) ? freeNode(context.line.dom) : context.line.dom);
			this.cache.reused.set(context.line, 2);
		}
		let head = line;
		for (let i = context.marks.length - 1; i >= 0; i--) {
			let mark = context.marks[i];
			let last = head.lastChild;
			if (last instanceof MarkTile && last.mark.eq(mark.mark)) {
				if (last.dom != mark.dom) last.setDOM(freeNode(mark.dom));
				head = last;
			} else {
				if (this.cache.reused.get(mark)) {
					let tile = Tile.get(mark.dom);
					if (tile) tile.setDOM(freeNode(mark.dom));
				}
				let nw = MarkTile.of(mark.mark, mark.dom);
				head.append(nw);
				head = nw;
			}
			this.cache.reused.set(mark, 2);
		}
		let oldTile = Tile.get(composition.text);
		if (oldTile) this.cache.reused.set(oldTile, 2);
		let text = new TextTile(composition.text, composition.text.nodeValue);
		text.flags |= 8;
		head.append(text);
	}
	addInlineWidget(widget, marks, openStart) {
		let noSpace = this.afterWidget && widget.flags & 48 && (this.afterWidget.flags & 48) == (widget.flags & 48);
		if (!noSpace) this.flushBuffer();
		let parent = this.ensureMarks(marks, openStart);
		if (!noSpace && !(widget.flags & 16)) parent.append(this.getBuffer(1));
		parent.append(widget);
		this.pos += widget.length;
		this.afterWidget = widget;
	}
	addMark(tile, marks, openStart) {
		this.flushBuffer();
		this.ensureMarks(marks, openStart).append(tile);
		this.pos += tile.length;
		this.afterWidget = null;
	}
	addBlockWidget(widget) {
		this.getBlockPos().append(widget);
		this.pos += widget.length;
		this.lastBlock = widget;
		this.endLine();
	}
	continueWidget(length) {
		let widget = this.afterWidget || this.lastBlock;
		widget.length += length;
		this.pos += length;
	}
	addLineStart(attrs, dom) {
		var _a;
		if (!attrs) attrs = lineBaseAttrs;
		let tile = LineTile.start(attrs, dom || ((_a = this.cache.find(LineTile)) === null || _a === void 0 ? void 0 : _a.dom), !!dom);
		this.getBlockPos().append(this.lastBlock = this.curLine = tile);
	}
	addLine(tile) {
		this.getBlockPos().append(tile);
		this.pos += tile.length;
		this.lastBlock = tile;
		this.endLine();
	}
	addBreak() {
		this.lastBlock.flags |= 1;
		this.endLine();
		this.pos++;
	}
	addLineStartIfNotCovered(attrs) {
		if (!this.blockPosCovered()) this.addLineStart(attrs);
	}
	ensureLine(attrs) {
		if (!this.curLine) this.addLineStart(attrs);
	}
	ensureMarks(marks, openStart) {
		var _a;
		let parent = this.curLine;
		for (let i = marks.length - 1; i >= 0; i--) {
			let mark = marks[i], last;
			if (openStart > 0 && (last = parent.lastChild) && last instanceof MarkTile && last.mark.eq(mark)) {
				parent = last;
				openStart--;
			} else {
				let tile = MarkTile.of(mark, (_a = this.cache.find(MarkTile, (m) => m.mark.eq(mark))) === null || _a === void 0 ? void 0 : _a.dom);
				parent.append(tile);
				parent = tile;
				openStart = 0;
			}
		}
		return parent;
	}
	endLine() {
		if (this.curLine) {
			this.flushBuffer();
			let last = this.curLine.lastChild;
			if (!last || !hasContent(this.curLine, false) || last.dom.nodeName != "BR" && last.isWidget() && !(browser.ios && hasContent(this.curLine, true))) this.curLine.append(this.cache.findWidget(BreakWidget, 0, 32) || new WidgetTile(BreakWidget.toDOM(), 0, BreakWidget, 32));
			this.curLine = this.afterWidget = null;
		}
	}
	updateBlockWrappers() {
		if (this.wrapperPos > this.pos + 1e4) {
			this.blockWrappers.goto(this.pos);
			this.wrappers.length = 0;
		}
		for (let i = this.wrappers.length - 1; i >= 0; i--) if (this.wrappers[i].to < this.pos) this.wrappers.splice(i, 1);
		for (let cur = this.blockWrappers; cur.value && cur.from <= this.pos; cur.next()) if (cur.to >= this.pos) {
			let wrap = new OpenWrapper(cur.from, cur.to, cur.value, cur.rank), i = this.wrappers.length;
			while (i > 0 && (this.wrappers[i - 1].rank - wrap.rank || this.wrappers[i - 1].to - wrap.to) < 0) i--;
			this.wrappers.splice(i, 0, wrap);
		}
		this.wrapperPos = this.pos;
	}
	getBlockPos() {
		var _a;
		this.updateBlockWrappers();
		let parent = this.root;
		for (let wrap of this.wrappers) {
			let last = parent.lastChild;
			if (wrap.from < this.pos && last instanceof BlockWrapperTile && last.wrapper.eq(wrap.wrapper)) parent = last;
			else {
				let tile = BlockWrapperTile.of(wrap.wrapper, (_a = this.cache.find(BlockWrapperTile, (t) => t.wrapper.eq(wrap.wrapper))) === null || _a === void 0 ? void 0 : _a.dom);
				parent.append(tile);
				parent = tile;
			}
		}
		return parent;
	}
	blockPosCovered() {
		let last = this.lastBlock;
		return last != null && !last.breakAfter && (!last.isWidget() || (last.flags & 160) > 0);
	}
	getBuffer(side) {
		let flags = 2 | (side < 0 ? 16 : 32);
		let found = this.cache.find(WidgetBufferTile, void 0, 1);
		if (found) found.flags = flags;
		return found || new WidgetBufferTile(flags);
	}
	flushBuffer() {
		if (this.afterWidget && !(this.afterWidget.flags & 32)) {
			this.afterWidget.parent.append(this.getBuffer(-1));
			this.afterWidget = null;
		}
	}
};
var TextStream = class {
	constructor(doc) {
		this.skipCount = 0;
		this.text = "";
		this.textOff = 0;
		this.cursor = doc.iter();
	}
	skip(len) {
		if (this.textOff + len <= this.text.length) this.textOff += len;
		else {
			this.skipCount += len - (this.text.length - this.textOff);
			this.text = "";
			this.textOff = 0;
		}
	}
	next(maxLen) {
		if (this.textOff == this.text.length) {
			let { value, lineBreak, done } = this.cursor.next(this.skipCount);
			this.skipCount = 0;
			if (done) throw new Error("Ran out of text content when drawing inline views");
			this.text = value;
			let len = this.textOff = Math.min(maxLen, value.length);
			return lineBreak ? null : value.slice(0, len);
		}
		let end = Math.min(this.text.length, this.textOff + maxLen);
		let chars = this.text.slice(this.textOff, end);
		this.textOff = end;
		return chars;
	}
};
var buckets = [
	WidgetTile,
	LineTile,
	TextTile,
	MarkTile,
	WidgetBufferTile,
	BlockWrapperTile,
	DocTile
];
for (let i = 0; i < buckets.length; i++) buckets[i].bucket = i;
var TileCache = class {
	constructor(view) {
		this.view = view;
		this.buckets = buckets.map(() => []);
		this.index = buckets.map(() => 0);
		this.reused = /* @__PURE__ */ new Map();
	}
	add(tile) {
		let i = tile.constructor.bucket, bucket = this.buckets[i];
		if (bucket.length < 6) bucket.push(tile);
		else bucket[this.index[i] = (this.index[i] + 1) % 6] = tile;
	}
	find(cls, test, type = 2) {
		let i = cls.bucket;
		let bucket = this.buckets[i], off = this.index[i];
		for (let j = bucket.length - 1; j >= 0; j--) {
			let index = (j + off) % bucket.length, tile = bucket[index];
			if ((!test || test(tile)) && !this.reused.has(tile)) {
				bucket.splice(index, 1);
				if (index < off) this.index[i]--;
				this.reused.set(tile, type);
				return tile;
			}
		}
		return null;
	}
	findWidget(widget, length, flags) {
		let widgets = this.buckets[0];
		if (widgets.length) for (let i = 0, pass = 0;; i++) {
			if (i == widgets.length) {
				if (pass) return null;
				pass = 1;
				i = 0;
			}
			let tile = widgets[i];
			if (!this.reused.has(tile) && (pass == 0 ? tile.widget.compare(widget) : tile.widget.constructor == widget.constructor && widget.updateDOM(tile.dom, this.view))) {
				widgets.splice(i, 1);
				if (i < this.index[0]) this.index[0]--;
				if (tile.length == length && (tile.flags & 497) == flags) {
					this.reused.set(tile, 1);
					return tile;
				} else {
					this.reused.set(tile, 2);
					return new WidgetTile(tile.dom, length, widget, tile.flags & -498 | flags);
				}
			}
		}
	}
	reuse(tile) {
		this.reused.set(tile, 1);
		return tile;
	}
	maybeReuse(tile, type = 2) {
		if (this.reused.has(tile)) return void 0;
		this.reused.set(tile, type);
		return tile.dom;
	}
};
var TileUpdate = class {
	constructor(view, old, blockWrappers, decorations, disallowBlockEffectsFor) {
		this.view = view;
		this.decorations = decorations;
		this.disallowBlockEffectsFor = disallowBlockEffectsFor;
		this.openWidget = false;
		this.openMarks = 0;
		this.cache = new TileCache(view);
		this.text = new TextStream(view.state.doc);
		this.builder = new TileBuilder(this.cache, new DocTile(view, view.contentDOM), RangeSet.iter(blockWrappers));
		this.cache.reused.set(old, 2);
		this.old = new TilePointer(old);
		this.reuseWalker = {
			skip: (tile, from, to) => {
				this.cache.add(tile);
				if (tile.isComposite()) return false;
			},
			enter: (tile) => this.cache.add(tile),
			leave: () => {},
			break: () => {}
		};
	}
	run(changes, composition) {
		let compositionContext = composition && this.getCompositionContext(composition.text);
		for (let posA = 0, posB = 0, i = 0;;) {
			let next = i < changes.length ? changes[i++] : null;
			let skipA = next ? next.fromA : this.old.root.length;
			if (skipA > posA) {
				let len = skipA - posA;
				this.preserve(len, !i, !next);
				posA = skipA;
				posB += len;
			}
			if (!next) break;
			this.forward(next.fromA, next.toA);
			if (composition && next.fromA <= composition.range.fromA && next.toA >= composition.range.toA) {
				this.emit(posB, composition.range.fromB);
				this.builder.addComposition(composition, compositionContext);
				this.text.skip(composition.range.toB - composition.range.fromB);
				this.emit(composition.range.toB, next.toB);
			} else this.emit(posB, next.toB);
			posB = next.toB;
			posA = next.toA;
		}
		if (this.builder.curLine) this.builder.endLine();
		return this.builder.root;
	}
	preserve(length, incStart, incEnd) {
		let activeMarks = getMarks(this.old), openMarks = this.openMarks;
		this.old.advance(length, incEnd ? 1 : -1, {
			skip: (tile, from, to) => {
				if (tile.isWidget()) if (this.openWidget) this.builder.continueWidget(to - from);
				else {
					let widget = to > 0 || from < tile.length ? WidgetTile.of(tile.widget, this.view, to - from, tile.flags & 496, this.cache.maybeReuse(tile)) : this.cache.reuse(tile);
					if (widget.flags & 256) {
						widget.flags &= -2;
						this.builder.addBlockWidget(widget);
					} else {
						this.builder.ensureLine(null);
						this.builder.addInlineWidget(widget, activeMarks, openMarks);
						openMarks = activeMarks.length;
					}
				}
				else if (tile.isText()) {
					this.builder.ensureLine(null);
					if (!from && to == tile.length) this.builder.addText(tile.text, activeMarks, openMarks, this.cache.reuse(tile));
					else {
						this.cache.add(tile);
						this.builder.addText(tile.text.slice(from, to), activeMarks, openMarks);
					}
					openMarks = activeMarks.length;
				} else if (tile.isLine()) {
					tile.flags &= -2;
					this.cache.reused.set(tile, 1);
					this.builder.addLine(tile);
				} else if (tile instanceof WidgetBufferTile) this.cache.add(tile);
				else if (tile instanceof MarkTile) {
					this.builder.ensureLine(null);
					this.builder.addMark(tile, activeMarks, openMarks);
					this.cache.reused.set(tile, 1);
					openMarks = activeMarks.length;
				} else return false;
				this.openWidget = false;
			},
			enter: (tile) => {
				if (tile.isLine()) this.builder.addLineStart(tile.attrs, this.cache.maybeReuse(tile));
				else {
					this.cache.add(tile);
					if (tile instanceof MarkTile) activeMarks.unshift(tile.mark);
				}
				this.openWidget = false;
			},
			leave: (tile) => {
				if (tile.isLine()) {
					if (activeMarks.length) activeMarks.length = openMarks = 0;
				} else if (tile instanceof MarkTile) {
					activeMarks.shift();
					openMarks = Math.min(openMarks, activeMarks.length);
				}
			},
			break: () => {
				this.builder.addBreak();
				this.openWidget = false;
			}
		});
		this.text.skip(length);
	}
	emit(from, to) {
		let pendingLineAttrs = null;
		let b = this.builder, markCount = 0;
		let openEnd = RangeSet.spans(this.decorations, from, to, {
			point: (from, to, deco, active, openStart, index) => {
				if (deco instanceof PointDecoration) {
					if (this.disallowBlockEffectsFor[index]) {
						if (deco.block) throw new RangeError("Block decorations may not be specified via plugins");
						if (to > this.view.state.doc.lineAt(from).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
					}
					markCount = active.length;
					if (openStart > active.length) b.continueWidget(to - from);
					else {
						let widget = deco.widget || (deco.block ? NullWidget.block : NullWidget.inline);
						let flags = widgetFlags(deco);
						let tile = this.cache.findWidget(widget, to - from, flags) || WidgetTile.of(widget, this.view, to - from, flags);
						if (deco.block) {
							if (deco.startSide > 0) b.addLineStartIfNotCovered(pendingLineAttrs);
							b.addBlockWidget(tile);
						} else {
							b.ensureLine(pendingLineAttrs);
							b.addInlineWidget(tile, active, openStart);
						}
					}
					pendingLineAttrs = null;
				} else pendingLineAttrs = addLineDeco(pendingLineAttrs, deco);
				if (to > from) this.text.skip(to - from);
			},
			span: (from, to, active, openStart) => {
				for (let pos = from; pos < to;) {
					let chars = this.text.next(Math.min(512, to - pos));
					if (chars == null) {
						b.addLineStartIfNotCovered(pendingLineAttrs);
						b.addBreak();
						pos++;
					} else {
						b.ensureLine(pendingLineAttrs);
						b.addText(chars, active, openStart);
						pos += chars.length;
					}
					pendingLineAttrs = null;
				}
			}
		});
		b.addLineStartIfNotCovered(pendingLineAttrs);
		this.openWidget = openEnd > markCount;
		this.openMarks = openEnd;
	}
	forward(from, to) {
		if (to - from <= 10) this.old.advance(to - from, 1, this.reuseWalker);
		else {
			this.old.advance(5, -1, this.reuseWalker);
			this.old.advance(to - from - 10, -1);
			this.old.advance(5, 1, this.reuseWalker);
		}
	}
	getCompositionContext(text) {
		let marks = [], line = null;
		for (let parent = text.parentNode;; parent = parent.parentNode) {
			let tile = Tile.get(parent);
			if (parent == this.view.contentDOM) break;
			if (tile instanceof MarkTile) marks.push(tile);
			else if (tile === null || tile === void 0 ? void 0 : tile.isLine()) line = tile;
			else if (parent.nodeName == "DIV" && !line && parent != this.view.contentDOM) line = new LineTile(parent, lineBaseAttrs);
			else marks.push(MarkTile.of(new MarkDecoration({
				tagName: parent.nodeName.toLowerCase(),
				attributes: getAttrs(parent)
			}), parent));
		}
		return {
			line,
			marks
		};
	}
};
function hasContent(tile, requireText) {
	let scan = (tile) => {
		for (let ch of tile.children) if ((requireText ? ch.isText() : ch.length) || scan(ch)) return true;
		return false;
	};
	return scan(tile);
}
function widgetFlags(deco) {
	let flags = deco.isReplace ? (deco.startSide < 0 ? 64 : 0) | (deco.endSide > 0 ? 128 : 0) : deco.startSide > 0 ? 32 : 16;
	if (deco.block) flags |= 256;
	return flags;
}
var lineBaseAttrs = { class: "cm-line" };
function addLineDeco(value, deco) {
	let attrs = deco.spec.attributes, cls = deco.spec.class;
	if (!attrs && !cls) return value;
	if (!value) value = { class: "cm-line" };
	if (attrs) combineAttrs(attrs, value);
	if (cls) value.class += " " + cls;
	return value;
}
function getMarks(ptr) {
	let found = [];
	for (let i = ptr.parents.length; i > 1; i--) {
		let tile = i == ptr.parents.length ? ptr.tile : ptr.parents[i].tile;
		if (tile instanceof MarkTile) found.push(tile.mark);
	}
	return found;
}
function freeNode(node) {
	let tile = Tile.get(node);
	if (tile) tile.setDOM(node.cloneNode());
	return node;
}
var NullWidget = class extends WidgetType {
	constructor(tag) {
		super();
		this.tag = tag;
	}
	eq(other) {
		return other.tag == this.tag;
	}
	toDOM() {
		return document.createElement(this.tag);
	}
	updateDOM(elt) {
		return elt.nodeName.toLowerCase() == this.tag;
	}
	get isHidden() {
		return true;
	}
};
NullWidget.inline = /* @__PURE__ */ new NullWidget("span");
NullWidget.block = /* @__PURE__ */ new NullWidget("div");
var BreakWidget = /* @__PURE__ */ new class extends WidgetType {
	toDOM() {
		return document.createElement("br");
	}
	get isHidden() {
		return true;
	}
	get editable() {
		return true;
	}
}();
var DocView = class {
	constructor(view) {
		this.view = view;
		this.decorations = [];
		this.blockWrappers = [];
		this.dynamicDecorationMap = [false];
		this.domChanged = null;
		this.hasComposition = null;
		this.editContextFormatting = Decoration.none;
		this.lastCompositionAfterCursor = false;
		this.minWidth = 0;
		this.minWidthFrom = 0;
		this.minWidthTo = 0;
		this.impreciseAnchor = null;
		this.impreciseHead = null;
		this.forceSelection = false;
		this.lastUpdate = Date.now();
		this.updateDeco();
		this.tile = new DocTile(view, view.contentDOM);
		this.updateInner([new ChangedRange(0, 0, 0, view.state.doc.length)], null);
	}
	update(update) {
		var _a;
		let changedRanges = update.changedRanges;
		if (this.minWidth > 0 && changedRanges.length) if (!changedRanges.every(({ fromA, toA }) => toA < this.minWidthFrom || fromA > this.minWidthTo)) this.minWidth = this.minWidthFrom = this.minWidthTo = 0;
		else {
			this.minWidthFrom = update.changes.mapPos(this.minWidthFrom, 1);
			this.minWidthTo = update.changes.mapPos(this.minWidthTo, 1);
		}
		this.updateEditContextFormatting(update);
		let readCompositionAt = -1;
		if (this.view.inputState.composing >= 0 && !this.view.observer.editContext) {
			if ((_a = this.domChanged) === null || _a === void 0 ? void 0 : _a.newSel) readCompositionAt = this.domChanged.newSel.head;
			else if (!touchesComposition(update.changes, this.hasComposition) && !update.selectionSet) readCompositionAt = update.state.selection.main.head;
		}
		let composition = readCompositionAt > -1 ? findCompositionRange(this.view, update.changes, readCompositionAt) : null;
		this.domChanged = null;
		if (this.hasComposition) {
			let { from, to } = this.hasComposition;
			changedRanges = new ChangedRange(from, to, update.changes.mapPos(from, -1), update.changes.mapPos(to, 1)).addToSet(changedRanges.slice());
		}
		this.hasComposition = composition ? {
			from: composition.range.fromB,
			to: composition.range.toB
		} : null;
		if ((browser.ie || browser.chrome) && !composition && update && update.state.doc.lines != update.startState.doc.lines) this.forceSelection = true;
		let prevDeco = this.decorations, prevWrappers = this.blockWrappers;
		this.updateDeco();
		let decoDiff = findChangedDeco(prevDeco, this.decorations, update.changes);
		if (decoDiff.length) changedRanges = ChangedRange.extendWithRanges(changedRanges, decoDiff);
		let blockDiff = findChangedWrappers(prevWrappers, this.blockWrappers, update.changes);
		if (blockDiff.length) changedRanges = ChangedRange.extendWithRanges(changedRanges, blockDiff);
		if (composition && !changedRanges.some((r) => r.fromA <= composition.range.fromA && r.toA >= composition.range.toA)) changedRanges = composition.range.addToSet(changedRanges.slice());
		if (this.tile.flags & 2 && changedRanges.length == 0) return false;
		else {
			this.updateInner(changedRanges, composition);
			if (update.transactions.length) this.lastUpdate = Date.now();
			return true;
		}
	}
	updateInner(changes, composition) {
		this.view.viewState.mustMeasureContent = true;
		let { observer } = this.view;
		observer.ignore(() => {
			if (composition || changes.length) {
				let oldTile = this.tile;
				let builder = new TileUpdate(this.view, oldTile, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
				this.tile = builder.run(changes, composition);
				destroyDropped(oldTile, builder.cache.reused);
			}
			this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px";
			this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
			let track = browser.chrome || browser.ios ? {
				node: observer.selectionRange.focusNode,
				written: false
			} : void 0;
			this.tile.sync(track);
			if (track && (track.written || observer.selectionRange.focusNode != track.node || !this.tile.dom.contains(track.node))) this.forceSelection = true;
			this.tile.dom.style.height = "";
		});
		let gaps = [];
		if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) {
			for (let child of this.tile.children) if (child.isWidget() && child.widget instanceof BlockGapWidget) gaps.push(child.dom);
		}
		observer.updateGaps(gaps);
	}
	updateEditContextFormatting(update) {
		this.editContextFormatting = this.editContextFormatting.map(update.changes);
		for (let tr of update.transactions) for (let effect of tr.effects) if (effect.is(setEditContextFormatting)) this.editContextFormatting = effect.value;
	}
	updateSelection(mustRead = false, fromPointer = false) {
		if (mustRead || !this.view.observer.selectionRange.focusNode) this.view.observer.readSelectionRange();
		let { dom } = this.tile;
		let activeElt = this.view.root.activeElement, focused = activeElt == dom;
		let selectionNotFocus = !focused && !(this.view.state.facet(editable) || dom.tabIndex > -1) && hasSelection(dom, this.view.observer.selectionRange) && !(activeElt && dom.contains(activeElt));
		if (!(focused || fromPointer || selectionNotFocus)) return;
		let force = this.forceSelection;
		this.forceSelection = false;
		let main = this.view.state.selection.main, anchor, head;
		if (main.empty) head = anchor = this.inlineDOMNearPos(main.anchor, main.assoc || 1);
		else {
			head = this.inlineDOMNearPos(main.head, main.head == main.from ? 1 : -1);
			anchor = this.inlineDOMNearPos(main.anchor, main.anchor == main.from ? 1 : -1);
		}
		if (browser.gecko && main.empty && !this.hasComposition && betweenUneditable(anchor)) {
			let dummy = document.createTextNode("");
			this.view.observer.ignore(() => anchor.node.insertBefore(dummy, anchor.node.childNodes[anchor.offset] || null));
			anchor = head = new DOMPos(dummy, 0);
			force = true;
		}
		let domSel = this.view.observer.selectionRange;
		if (force || !domSel.focusNode || (!isEquivalentPosition(anchor.node, anchor.offset, domSel.anchorNode, domSel.anchorOffset) || !isEquivalentPosition(head.node, head.offset, domSel.focusNode, domSel.focusOffset)) && !this.suppressWidgetCursorChange(domSel, main)) {
			this.view.observer.ignore(() => {
				if (browser.android && browser.chrome && dom.contains(domSel.focusNode) && inUneditable(domSel.focusNode, dom)) {
					dom.blur();
					dom.focus({ preventScroll: true });
				}
				let rawSel = getSelection(this.view.root);
				if (!rawSel);
				else if (main.empty) {
					if (browser.gecko) {
						let nextTo = nextToUneditable(anchor.node, anchor.offset);
						if (nextTo && nextTo != 3) {
							let text = (nextTo == 1 ? textNodeBefore : textNodeAfter)(anchor.node, anchor.offset);
							if (text) anchor = new DOMPos(text.node, text.offset);
						}
					}
					rawSel.collapse(anchor.node, anchor.offset);
					if (main.bidiLevel != null && rawSel.caretBidiLevel !== void 0) rawSel.caretBidiLevel = main.bidiLevel;
				} else if (rawSel.extend) {
					rawSel.collapse(anchor.node, anchor.offset);
					try {
						rawSel.extend(head.node, head.offset);
					} catch (_) {}
				} else {
					let range = document.createRange();
					if (main.anchor > main.head) [anchor, head] = [head, anchor];
					range.setEnd(head.node, head.offset);
					range.setStart(anchor.node, anchor.offset);
					rawSel.removeAllRanges();
					rawSel.addRange(range);
				}
				if (selectionNotFocus && this.view.root.activeElement == dom) {
					dom.blur();
					if (activeElt) activeElt.focus();
				}
			});
			this.view.observer.setSelectionRange(anchor, head);
		}
		this.impreciseAnchor = anchor.precise ? null : new DOMPos(domSel.anchorNode, domSel.anchorOffset);
		this.impreciseHead = head.precise ? null : new DOMPos(domSel.focusNode, domSel.focusOffset);
	}
	suppressWidgetCursorChange(sel, cursor) {
		return this.hasComposition && cursor.empty && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset) && this.posFromDOM(sel.focusNode, sel.focusOffset) == cursor.head;
	}
	enforceCursorAssoc() {
		if (this.hasComposition) return;
		let { view } = this, cursor = view.state.selection.main;
		let sel = getSelection(view.root);
		let { anchorNode, anchorOffset } = view.observer.selectionRange;
		if (!sel || !cursor.empty || !cursor.assoc || !sel.modify) return;
		let line = this.lineAt(cursor.head, cursor.assoc);
		if (!line) return;
		let lineStart = line.posAtStart;
		if (cursor.head == lineStart || cursor.head == lineStart + line.length) return;
		let before = this.coordsAt(cursor.head, -1), after = this.coordsAt(cursor.head, 1);
		if (!before || !after || before.bottom > after.top) return;
		let dom = this.domAtPos(cursor.head + cursor.assoc, cursor.assoc);
		sel.collapse(dom.node, dom.offset);
		sel.modify("move", cursor.assoc < 0 ? "forward" : "backward", "lineboundary");
		view.observer.readSelectionRange();
		let newRange = view.observer.selectionRange;
		if (view.docView.posFromDOM(newRange.anchorNode, newRange.anchorOffset) != cursor.from) sel.collapse(anchorNode, anchorOffset);
	}
	posFromDOM(node, offset) {
		let tile = this.tile.nearest(node);
		if (!tile) return this.tile.dom.compareDocumentPosition(node) & 2 ? 0 : this.view.state.doc.length;
		let start = tile.posAtStart;
		if (tile.isComposite()) {
			let after;
			if (node == tile.dom) after = tile.dom.childNodes[offset];
			else {
				let bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;
				for (;;) {
					let parent = node.parentNode;
					if (parent == tile.dom) break;
					if (bias == 0 && parent.firstChild != parent.lastChild) if (node == parent.firstChild) bias = -1;
					else bias = 1;
					node = parent;
				}
				if (bias < 0) after = node;
				else after = node.nextSibling;
			}
			if (after == tile.dom.firstChild) return start;
			while (after && !Tile.get(after)) after = after.nextSibling;
			if (!after) return start + tile.length;
			for (let i = 0, pos = start;; i++) {
				let child = tile.children[i];
				if (child.dom == after) return pos;
				pos += child.length + child.breakAfter;
			}
		} else if (tile.isText()) return node == tile.dom ? start + offset : start + (offset ? tile.length : 0);
		else return start;
	}
	domAtPos(pos, side) {
		let { tile, offset } = this.tile.resolveBlock(pos, side);
		if (tile.isWidget()) return tile.domPosFor(pos, side);
		return tile.domIn(offset, side);
	}
	inlineDOMNearPos(pos, side) {
		let before, beforeOff = -1, beforeBad = false;
		let after, afterOff = -1, afterBad = false;
		this.tile.blockTiles((tile, off) => {
			if (tile.isWidget()) {
				if (tile.flags & 32 && off >= pos) return true;
				if (tile.flags & 16) beforeBad = true;
			} else {
				let end = off + tile.length;
				if (off <= pos) {
					before = tile;
					beforeOff = pos - off;
					beforeBad = end < pos;
				}
				if (end >= pos && !after) {
					after = tile;
					afterOff = pos - off;
					afterBad = off > pos;
				}
				if (off > pos && after) return true;
			}
		});
		if (!before && !after) return this.domAtPos(pos, side);
		if (beforeBad && after) before = null;
		else if (afterBad && before) after = null;
		return before && side < 0 || !after ? before.domIn(beforeOff, side) : after.domIn(afterOff, side);
	}
	coordsAt(pos, side) {
		let { tile, offset } = this.tile.resolveBlock(pos, side);
		if (tile.isWidget()) {
			if (tile.widget instanceof BlockGapWidget) return null;
			return tile.coordsInWidget(offset, side, true);
		}
		return tile.coordsIn(offset, side);
	}
	lineAt(pos, side) {
		let { tile } = this.tile.resolveBlock(pos, side);
		return tile.isLine() ? tile : null;
	}
	coordsForChar(pos) {
		let { tile, offset } = this.tile.resolveBlock(pos, 1);
		if (!tile.isLine()) return null;
		function scan(tile, offset) {
			if (tile.isComposite()) for (let ch of tile.children) {
				if (ch.length >= offset) {
					let found = scan(ch, offset);
					if (found) return found;
				}
				offset -= ch.length;
				if (offset < 0) break;
			}
			else if (tile.isText() && offset < tile.length) {
				let end = findClusterBreak(tile.text, offset);
				if (end == offset) return null;
				let rects = textRange(tile.dom, offset, end).getClientRects();
				for (let i = 0; i < rects.length; i++) {
					let rect = rects[i];
					if (i == rects.length - 1 || rect.top < rect.bottom && rect.left < rect.right) return rect;
				}
			}
			return null;
		}
		return scan(tile, offset);
	}
	measureVisibleLineHeights(viewport) {
		let result = [], { from, to } = viewport;
		let contentWidth = this.view.contentDOM.clientWidth;
		let isWider = contentWidth > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
		let widest = -1, ltr = this.view.textDirection == Direction.LTR;
		let spaceAbove = 0;
		let scan = (tile, pos, measureBounds) => {
			for (let i = 0; i < tile.children.length; i++) {
				if (pos > to) break;
				let child = tile.children[i], end = pos + child.length;
				let childRect = child.dom.getBoundingClientRect(), { height } = childRect;
				if (measureBounds && !i) spaceAbove += childRect.top - measureBounds.top;
				if (child instanceof BlockWrapperTile) {
					if (end > from) scan(child, pos, childRect);
				} else if (pos >= from) {
					if (spaceAbove > 0) result.push(-spaceAbove);
					result.push(height + spaceAbove);
					spaceAbove = 0;
					if (isWider) {
						let last = child.dom.lastChild;
						let rects = last ? clientRectsFor(last) : [];
						if (rects.length) {
							let rect = rects[rects.length - 1];
							let width = ltr ? rect.right - childRect.left : childRect.right - rect.left;
							if (width > widest) {
								widest = width;
								this.minWidth = contentWidth;
								this.minWidthFrom = pos;
								this.minWidthTo = end;
							}
						}
					}
				}
				if (measureBounds && i == tile.children.length - 1) spaceAbove += measureBounds.bottom - childRect.bottom;
				pos = end + child.breakAfter;
			}
		};
		scan(this.tile, 0, null);
		return result;
	}
	textDirectionAt(pos) {
		let { tile } = this.tile.resolveBlock(pos, 1);
		return getComputedStyle(tile.dom).direction == "rtl" ? Direction.RTL : Direction.LTR;
	}
	measureTextSize() {
		let lineMeasure = this.tile.blockTiles((tile) => {
			if (tile.isLine() && tile.children.length && tile.length <= 20) {
				let totalWidth = 0, textHeight;
				for (let child of tile.children) {
					if (!child.isText() || /[^ -~]/.test(child.text)) return void 0;
					let rects = clientRectsFor(child.dom);
					if (rects.length != 1) return void 0;
					totalWidth += rects[0].width;
					textHeight = rects[0].height;
				}
				if (totalWidth) return {
					lineHeight: tile.dom.getBoundingClientRect().height,
					charWidth: totalWidth / tile.length,
					textHeight
				};
			}
		});
		if (lineMeasure) return lineMeasure;
		let dummy = document.createElement("div"), lineHeight, charWidth, textHeight;
		dummy.className = "cm-line";
		dummy.style.width = "99999px";
		dummy.style.position = "absolute";
		dummy.textContent = "abc def ghi jkl mno pqr stu";
		this.view.observer.ignore(() => {
			this.tile.dom.appendChild(dummy);
			let rect = clientRectsFor(dummy.firstChild)[0];
			lineHeight = dummy.getBoundingClientRect().height;
			charWidth = rect && rect.width ? rect.width / 27 : 7;
			textHeight = rect && rect.height ? rect.height : lineHeight;
			dummy.remove();
		});
		return {
			lineHeight,
			charWidth,
			textHeight
		};
	}
	computeBlockGapDeco() {
		let deco = [], vs = this.view.viewState;
		for (let pos = 0, i = 0;; i++) {
			let next = i == vs.viewports.length ? null : vs.viewports[i];
			let end = next ? next.from - 1 : this.view.state.doc.length;
			if (end > pos) {
				let height = (vs.lineBlockAt(end).bottom - vs.lineBlockAt(pos).top) / this.view.scaleY;
				deco.push(Decoration.replace({
					widget: new BlockGapWidget(height),
					block: true,
					inclusive: true,
					isBlockGap: true
				}).range(pos, end));
			}
			if (!next) break;
			pos = next.to + 1;
		}
		return Decoration.set(deco);
	}
	updateDeco() {
		let i = 1;
		let allDeco = this.view.state.facet(decorations).map((d) => {
			return (this.dynamicDecorationMap[i++] = typeof d == "function") ? d(this.view) : d;
		});
		let dynamicOuter = false, outerDeco = this.view.state.facet(outerDecorations).map((d, i) => {
			let dynamic = typeof d == "function";
			if (dynamic) dynamicOuter = true;
			return dynamic ? d(this.view) : d;
		});
		if (outerDeco.length) {
			this.dynamicDecorationMap[i++] = dynamicOuter;
			allDeco.push(RangeSet.join(outerDeco));
		}
		this.decorations = [
			this.editContextFormatting,
			...allDeco,
			this.computeBlockGapDeco(),
			this.view.viewState.lineGapDeco
		];
		while (i < this.decorations.length) this.dynamicDecorationMap[i++] = false;
		this.blockWrappers = this.view.state.facet(blockWrappers).map((v) => typeof v == "function" ? v(this.view) : v);
	}
	scrollIntoView(target) {
		if (target.isSnapshot) {
			let ref = this.view.viewState.lineBlockAt(target.range.head);
			this.view.scrollDOM.scrollTop = ref.top - target.yMargin;
			this.view.scrollDOM.scrollLeft = target.xMargin;
			return;
		}
		for (let handler of this.view.state.facet(scrollHandler)) try {
			if (handler(this.view, target.range, target)) return true;
		} catch (e) {
			logException(this.view.state, e, "scroll handler");
		}
		let { range } = target;
		let rect = this.coordsAt(range.head, range.empty ? range.assoc : range.head > range.anchor ? -1 : 1), other;
		if (!rect) return;
		if (!range.empty && (other = this.coordsAt(range.anchor, range.anchor > range.head ? -1 : 1))) rect = {
			left: Math.min(rect.left, other.left),
			top: Math.min(rect.top, other.top),
			right: Math.max(rect.right, other.right),
			bottom: Math.max(rect.bottom, other.bottom)
		};
		let margins = getScrollMargins(this.view);
		let targetRect = {
			left: rect.left - margins.left,
			top: rect.top - margins.top,
			right: rect.right + margins.right,
			bottom: rect.bottom + margins.bottom
		};
		let { offsetWidth, offsetHeight } = this.view.scrollDOM;
		scrollRectIntoView(this.view.scrollDOM, targetRect, range.head < range.anchor ? -1 : 1, target.x, target.y, Math.max(Math.min(target.xMargin, offsetWidth), -offsetWidth), Math.max(Math.min(target.yMargin, offsetHeight), -offsetHeight), this.view.textDirection == Direction.LTR);
	}
	lineHasWidget(pos) {
		let scan = (child) => child.isWidget() || child.children.some(scan);
		return scan(this.tile.resolveBlock(pos, 1).tile);
	}
	destroy() {
		destroyDropped(this.tile);
	}
};
function destroyDropped(tile, reused) {
	let r = reused === null || reused === void 0 ? void 0 : reused.get(tile);
	if (r != 1) {
		if (r == null) tile.destroy();
		for (let ch of tile.children) destroyDropped(ch, reused);
	}
}
function betweenUneditable(pos) {
	return pos.node.nodeType == 1 && pos.node.firstChild && (pos.offset == 0 || pos.node.childNodes[pos.offset - 1].contentEditable == "false") && (pos.offset == pos.node.childNodes.length || pos.node.childNodes[pos.offset].contentEditable == "false");
}
function findCompositionNode(view, headPos) {
	let sel = view.observer.selectionRange;
	if (!sel.focusNode) return null;
	let textBefore = textNodeBefore(sel.focusNode, sel.focusOffset);
	let textAfter = textNodeAfter(sel.focusNode, sel.focusOffset);
	let textNode = textBefore || textAfter;
	if (textAfter && textBefore && textAfter.node != textBefore.node) {
		let tileAfter = Tile.get(textAfter.node);
		if (!tileAfter || tileAfter.isText() && tileAfter.text != textAfter.node.nodeValue) textNode = textAfter;
		else if (view.docView.lastCompositionAfterCursor) {
			let tileBefore = Tile.get(textBefore.node);
			if (!(!tileBefore || tileBefore.isText() && tileBefore.text != textBefore.node.nodeValue)) textNode = textAfter;
		}
	}
	view.docView.lastCompositionAfterCursor = textNode != textBefore;
	if (!textNode) return null;
	let from = headPos - textNode.offset;
	return {
		from,
		to: from + textNode.node.nodeValue.length,
		node: textNode.node
	};
}
function findCompositionRange(view, changes, headPos) {
	let found = findCompositionNode(view, headPos);
	if (!found) return null;
	let { node: textNode, from, to } = found, text = textNode.nodeValue;
	if (/[\n\r]/.test(text)) return null;
	if (view.state.doc.sliceString(found.from, found.to) != text) return null;
	let inv = changes.invertedDesc;
	return {
		range: new ChangedRange(inv.mapPos(from), inv.mapPos(to), from, to),
		text: textNode
	};
}
function nextToUneditable(node, offset) {
	if (node.nodeType != 1) return 0;
	return (offset && node.childNodes[offset - 1].contentEditable == "false" ? 1 : 0) | (offset < node.childNodes.length && node.childNodes[offset].contentEditable == "false" ? 2 : 0);
}
var DecorationComparator$1 = class DecorationComparator {
	constructor() {
		this.changes = [];
	}
	compareRange(from, to) {
		addRange(from, to, this.changes);
	}
	comparePoint(from, to) {
		addRange(from, to, this.changes);
	}
	boundChange(pos) {
		addRange(pos, pos, this.changes);
	}
};
function findChangedDeco(a, b, diff) {
	let comp = new DecorationComparator$1();
	RangeSet.compare(a, b, diff, comp);
	return comp.changes;
}
var WrapperComparator = class {
	constructor() {
		this.changes = [];
	}
	compareRange(from, to) {
		addRange(from, to, this.changes);
	}
	comparePoint() {}
	boundChange(pos) {
		addRange(pos, pos, this.changes);
	}
};
function findChangedWrappers(a, b, diff) {
	let comp = new WrapperComparator();
	RangeSet.compare(a, b, diff, comp);
	return comp.changes;
}
function inUneditable(node, inside) {
	for (let cur = node; cur && cur != inside; cur = cur.assignedSlot || cur.parentNode) if (cur.nodeType == 1 && cur.contentEditable == "false") return true;
	return false;
}
function touchesComposition(changes, composition) {
	let touched = false;
	if (composition) changes.iterChangedRanges((from, to) => {
		if (from < composition.to && to > composition.from) touched = true;
	});
	return touched;
}
var BlockGapWidget = class extends WidgetType {
	constructor(height) {
		super();
		this.height = height;
	}
	toDOM() {
		let elt = document.createElement("div");
		elt.className = "cm-gap";
		this.updateDOM(elt);
		return elt;
	}
	eq(other) {
		return other.height == this.height;
	}
	updateDOM(elt) {
		elt.style.height = this.height + "px";
		return true;
	}
	get editable() {
		return true;
	}
	get estimatedHeight() {
		return this.height;
	}
	ignoreEvent() {
		return false;
	}
};
function groupAt(state, pos, bias = 1) {
	let categorize = state.charCategorizer(pos);
	let line = state.doc.lineAt(pos), linePos = pos - line.from;
	if (line.length == 0) return EditorSelection.cursor(pos);
	if (linePos == 0) bias = 1;
	else if (linePos == line.length) bias = -1;
	let from = linePos, to = linePos;
	if (bias < 0) from = findClusterBreak(line.text, linePos, false);
	else to = findClusterBreak(line.text, linePos);
	let cat = categorize(line.text.slice(from, to));
	while (from > 0) {
		let prev = findClusterBreak(line.text, from, false);
		if (categorize(line.text.slice(prev, from)) != cat) break;
		from = prev;
	}
	while (to < line.length) {
		let next = findClusterBreak(line.text, to);
		if (categorize(line.text.slice(to, next)) != cat) break;
		to = next;
	}
	return EditorSelection.range(from + line.from, to + line.from);
}
function posAtCoordsImprecise(view, contentRect, block, x, y) {
	let into = Math.round((x - contentRect.left) * view.defaultCharacterWidth);
	if (view.lineWrapping && block.height > view.defaultLineHeight * 1.5) {
		let textHeight = view.viewState.heightOracle.textHeight;
		let line = Math.floor((y - block.top - (view.defaultLineHeight - textHeight) * .5) / textHeight);
		into += line * view.viewState.heightOracle.lineLength;
	}
	let content = view.state.sliceDoc(block.from, block.to);
	return block.from + findColumn(content, into, view.state.tabSize);
}
function blockAt(view, pos, side) {
	let line = view.lineBlockAt(pos);
	if (Array.isArray(line.type)) {
		let best;
		for (let l of line.type) {
			if (l.from > pos) break;
			if (l.to < pos) continue;
			if (l.from < pos && l.to > pos) return l;
			if (!best || l.type == BlockType.Text && (best.type != l.type || (side < 0 ? l.from < pos : l.to > pos))) best = l;
		}
		return best || line;
	}
	return line;
}
function moveToLineBoundary(view, start, forward, includeWrap) {
	let line = blockAt(view, start.head, start.assoc || -1);
	let coords = !includeWrap || line.type != BlockType.Text || !(view.lineWrapping || line.widgetLineBreaks) ? null : view.coordsAtPos(start.assoc < 0 && start.head > line.from ? start.head - 1 : start.head);
	if (coords) {
		let editorRect = view.dom.getBoundingClientRect();
		let direction = view.textDirectionAt(line.from);
		let pos = view.posAtCoords({
			x: forward == (direction == Direction.LTR) ? editorRect.right - 1 : editorRect.left + 1,
			y: (coords.top + coords.bottom) / 2
		});
		if (pos != null) return EditorSelection.cursor(pos, forward ? -1 : 1);
	}
	return EditorSelection.cursor(forward ? line.to : line.from, forward ? -1 : 1);
}
function moveByChar(view, start, forward, by) {
	let line = view.state.doc.lineAt(start.head), spans = view.bidiSpans(line);
	let direction = view.textDirectionAt(line.from);
	for (let cur = start, check = null;;) {
		let next = moveVisually(line, spans, direction, cur, forward), char = movedOver;
		if (!next) {
			if (line.number == (forward ? view.state.doc.lines : 1)) return cur;
			char = "\n";
			line = view.state.doc.line(line.number + (forward ? 1 : -1));
			spans = view.bidiSpans(line);
			next = view.visualLineSide(line, !forward);
		}
		if (!check) {
			if (!by) return next;
			check = by(char);
		} else if (!check(char)) return cur;
		cur = next;
	}
}
function byGroup(view, pos, start) {
	let categorize = view.state.charCategorizer(pos);
	let cat = categorize(start);
	return (next) => {
		let nextCat = categorize(next);
		if (cat == CharCategory.Space) cat = nextCat;
		return cat == nextCat;
	};
}
function moveVertically(view, start, forward, distance) {
	let startPos = start.head, dir = forward ? 1 : -1;
	if (startPos == (forward ? view.state.doc.length : 0)) return EditorSelection.cursor(startPos, start.assoc);
	let goal = start.goalColumn, startY;
	let rect = view.contentDOM.getBoundingClientRect();
	let startCoords = view.coordsAtPos(startPos, start.assoc || -1), docTop = view.documentTop;
	if (startCoords) {
		if (goal == null) goal = startCoords.left - rect.left;
		startY = dir < 0 ? startCoords.top : startCoords.bottom;
	} else {
		let line = view.viewState.lineBlockAt(startPos);
		if (goal == null) goal = Math.min(rect.right - rect.left, view.defaultCharacterWidth * (startPos - line.from));
		startY = (dir < 0 ? line.top : line.bottom) + docTop;
	}
	let resolvedGoal = rect.left + goal;
	let dist = distance !== null && distance !== void 0 ? distance : view.viewState.heightOracle.textHeight >> 1;
	for (let extra = 0;; extra += 10) {
		let pos = posAtCoords(view, {
			x: resolvedGoal,
			y: startY + (dist + extra) * dir
		}, false, dir);
		return EditorSelection.cursor(pos.pos, pos.assoc, void 0, goal);
	}
}
function skipAtomicRanges(atoms, pos, bias) {
	for (;;) {
		let moved = 0;
		for (let set of atoms) set.between(pos - 1, pos + 1, (from, to, value) => {
			if (pos > from && pos < to) {
				let side = moved || bias || (pos - from < to - pos ? -1 : 1);
				pos = side < 0 ? from : to;
				moved = side;
			}
		});
		if (!moved) return pos;
	}
}
function skipAtomsForSelection(atoms, sel) {
	let ranges = null;
	for (let i = 0; i < sel.ranges.length; i++) {
		let range = sel.ranges[i], updated = null;
		if (range.empty) {
			let pos = skipAtomicRanges(atoms, range.from, 0);
			if (pos != range.from) updated = EditorSelection.cursor(pos, -1);
		} else {
			let from = skipAtomicRanges(atoms, range.from, -1);
			let to = skipAtomicRanges(atoms, range.to, 1);
			if (from != range.from || to != range.to) updated = EditorSelection.range(range.from == range.anchor ? from : to, range.from == range.head ? from : to);
		}
		if (updated) {
			if (!ranges) ranges = sel.ranges.slice();
			ranges[i] = updated;
		}
	}
	return ranges ? EditorSelection.create(ranges, sel.mainIndex) : sel;
}
function skipAtoms(view, oldPos, pos) {
	let newPos = skipAtomicRanges(view.state.facet(atomicRanges).map((f) => f(view)), pos.from, oldPos.head > pos.from ? -1 : 1);
	return newPos == pos.from ? pos : EditorSelection.cursor(newPos, newPos < pos.from ? 1 : -1);
}
var PosAssoc = class {
	constructor(pos, assoc) {
		this.pos = pos;
		this.assoc = assoc;
	}
};
function posAtCoords(view, coords, precise, scanY) {
	let content = view.contentDOM.getBoundingClientRect(), docTop = content.top + view.viewState.paddingTop;
	let { x, y } = coords, yOffset = y - docTop, block;
	for (;;) {
		if (yOffset < 0) return new PosAssoc(0, 1);
		if (yOffset > view.viewState.docHeight) return new PosAssoc(view.state.doc.length, -1);
		block = view.elementAtHeight(yOffset);
		if (scanY == null) break;
		if (block.type == BlockType.Text) {
			let rect = view.docView.coordsAt(scanY < 0 ? block.from : block.to, scanY);
			if (rect && (scanY < 0 ? rect.top <= yOffset + docTop : rect.bottom >= yOffset + docTop)) break;
		}
		let halfLine = view.viewState.heightOracle.textHeight / 2;
		yOffset = scanY > 0 ? block.bottom + halfLine : block.top - halfLine;
	}
	if (view.viewport.from >= block.to || view.viewport.to <= block.from) {
		if (precise) return null;
		if (block.type == BlockType.Text) {
			let pos = posAtCoordsImprecise(view, content, block, x, y);
			return new PosAssoc(pos, pos == block.from ? 1 : -1);
		}
	}
	if (block.type != BlockType.Text) return yOffset < (block.top + block.bottom) / 2 ? new PosAssoc(block.from, 1) : new PosAssoc(block.to, -1);
	let line = view.docView.lineAt(block.from, 2);
	if (!line || line.length != block.length) line = view.docView.lineAt(block.from, -2);
	return posAtCoordsInline(view, line, block.from, x, y);
}
function posAtCoordsInline(view, tile, offset, x, y) {
	let closest = -1, closestRect = null;
	let dxClosest = 1e9, dyClosest = 1e9;
	let rowTop = y, rowBot = y;
	let checkRects = (rects, index) => {
		for (let i = 0; i < rects.length; i++) {
			let rect = rects[i];
			if (rect.top == rect.bottom) continue;
			let dx = rect.left > x ? rect.left - x : rect.right < x ? x - rect.right : 0;
			let dy = rect.top > y ? rect.top - y : rect.bottom < y ? y - rect.bottom : 0;
			if (rect.top <= rowBot && rect.bottom >= rowTop) {
				rowTop = Math.min(rect.top, rowTop);
				rowBot = Math.max(rect.bottom, rowBot);
				dy = 0;
			}
			if (closest < 0 || (dy - dyClosest || dx - dxClosest) < 0) if (closest >= 0 && dyClosest && dxClosest < dx && closestRect.top <= rowBot - 2 && closestRect.bottom >= rowTop + 2) dyClosest = 0;
			else {
				closest = index;
				dxClosest = dx;
				dyClosest = dy;
				closestRect = rect;
			}
		}
	};
	if (tile.isText()) {
		for (let i = 0; i < tile.length;) {
			let next = findClusterBreak(tile.text, i);
			checkRects(textRange(tile.dom, i, next).getClientRects(), i);
			if (!dxClosest && !dyClosest) break;
			i = next;
		}
		return x > (closestRect.left + closestRect.right) / 2 == (dirAt(view, closest + offset) == Direction.LTR) ? new PosAssoc(offset + findClusterBreak(tile.text, closest), -1) : new PosAssoc(offset + closest, 1);
	} else {
		if (!tile.length) return new PosAssoc(offset, 1);
		for (let i = 0; i < tile.children.length; i++) {
			let child = tile.children[i];
			if (child.flags & 48) continue;
			checkRects((child.dom.nodeType == 1 ? child.dom : textRange(child.dom, 0, child.length)).getClientRects(), i);
			if (!dxClosest && !dyClosest) break;
		}
		let inner = tile.children[closest], innerOff = tile.posBefore(inner, offset);
		if (inner.isComposite() || inner.isText()) return posAtCoordsInline(view, inner, innerOff, Math.max(closestRect.left, Math.min(closestRect.right, x)), y);
		return x > (closestRect.left + closestRect.right) / 2 == (dirAt(view, closest + offset) == Direction.LTR) ? new PosAssoc(innerOff + inner.length, -1) : new PosAssoc(innerOff, 1);
	}
}
function dirAt(view, pos) {
	let line = view.state.doc.lineAt(pos);
	return view.bidiSpans(line)[BidiSpan.find(view.bidiSpans(line), pos - line.from, -1, 1)].dir;
}
var LineBreakPlaceholder = "￿";
var DOMReader = class {
	constructor(points, view) {
		this.points = points;
		this.view = view;
		this.text = "";
		this.lineSeparator = view.state.facet(EditorState.lineSeparator);
	}
	append(text) {
		this.text += text;
	}
	lineBreak() {
		this.text += LineBreakPlaceholder;
	}
	readRange(start, end) {
		if (!start) return this;
		let parent = start.parentNode;
		for (let cur = start;;) {
			this.findPointBefore(parent, cur);
			let oldLen = this.text.length;
			this.readNode(cur);
			let tile = Tile.get(cur), next = cur.nextSibling;
			if (next == end) {
				if ((tile === null || tile === void 0 ? void 0 : tile.breakAfter) && !next && parent != this.view.contentDOM) this.lineBreak();
				break;
			}
			let nextTile = Tile.get(next);
			if ((tile && nextTile ? tile.breakAfter : (tile ? tile.breakAfter : isBlockElement(cur)) || isBlockElement(next) && (cur.nodeName != "BR" || (tile === null || tile === void 0 ? void 0 : tile.isWidget())) && this.text.length > oldLen) && !isEmptyToEnd(next, end)) this.lineBreak();
			cur = next;
		}
		this.findPointBefore(parent, end);
		return this;
	}
	readTextNode(node) {
		let text = node.nodeValue;
		for (let point of this.points) if (point.node == node) point.pos = this.text.length + Math.min(point.offset, text.length);
		for (let off = 0, re = this.lineSeparator ? null : /\r\n?|\n/g;;) {
			let nextBreak = -1, breakSize = 1, m;
			if (this.lineSeparator) {
				nextBreak = text.indexOf(this.lineSeparator, off);
				breakSize = this.lineSeparator.length;
			} else if (m = re.exec(text)) {
				nextBreak = m.index;
				breakSize = m[0].length;
			}
			this.append(text.slice(off, nextBreak < 0 ? text.length : nextBreak));
			if (nextBreak < 0) break;
			this.lineBreak();
			if (breakSize > 1) {
				for (let point of this.points) if (point.node == node && point.pos > this.text.length) point.pos -= breakSize - 1;
			}
			off = nextBreak + breakSize;
		}
	}
	readNode(node) {
		let tile = Tile.get(node);
		let fromView = tile && tile.overrideDOMText;
		if (fromView != null) {
			this.findPointInside(node, fromView.length);
			for (let i = fromView.iter(); !i.next().done;) if (i.lineBreak) this.lineBreak();
			else this.append(i.value);
		} else if (node.nodeType == 3) this.readTextNode(node);
		else if (node.nodeName == "BR") {
			if (node.nextSibling) this.lineBreak();
		} else if (node.nodeType == 1) this.readRange(node.firstChild, null);
	}
	findPointBefore(node, next) {
		for (let point of this.points) if (point.node == node && node.childNodes[point.offset] == next) point.pos = this.text.length;
	}
	findPointInside(node, length) {
		for (let point of this.points) if (node.nodeType == 3 ? point.node == node : node.contains(point.node)) point.pos = this.text.length + (isAtEnd(node, point.node, point.offset) ? length : 0);
	}
};
function isAtEnd(parent, node, offset) {
	for (;;) {
		if (!node || offset < maxOffset(node)) return false;
		if (node == parent) return true;
		offset = domIndex(node) + 1;
		node = node.parentNode;
	}
}
function isEmptyToEnd(node, end) {
	let widgets;
	for (;; node = node.nextSibling) {
		if (node == end || !node) break;
		let view = Tile.get(node);
		if (!(view === null || view === void 0 ? void 0 : view.isWidget())) return false;
		if (view) (widgets || (widgets = [])).push(view);
	}
	if (widgets) for (let w of widgets) {
		let override = w.overrideDOMText;
		if (override === null || override === void 0 ? void 0 : override.length) return false;
	}
	return true;
}
var DOMPoint = class {
	constructor(node, offset) {
		this.node = node;
		this.offset = offset;
		this.pos = -1;
	}
};
var DOMChange = class {
	constructor(view, start, end, typeOver) {
		this.typeOver = typeOver;
		this.bounds = null;
		this.text = "";
		this.domChanged = start > -1;
		let { impreciseHead: iHead, impreciseAnchor: iAnchor } = view.docView;
		if (view.state.readOnly && start > -1) this.newSel = null;
		else if (start > -1 && (this.bounds = domBoundsAround(view.docView.tile, start, end, 0))) {
			let selPoints = iHead || iAnchor ? [] : selectionPoints(view);
			let reader = new DOMReader(selPoints, view);
			reader.readRange(this.bounds.startDOM, this.bounds.endDOM);
			this.text = reader.text;
			this.newSel = selectionFromPoints(selPoints, this.bounds.from);
		} else {
			let domSel = view.observer.selectionRange;
			let head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset || !contains(view.contentDOM, domSel.focusNode) ? view.state.selection.main.head : view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
			let anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset || !contains(view.contentDOM, domSel.anchorNode) ? view.state.selection.main.anchor : view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
			let vp = view.viewport;
			if ((browser.ios || browser.chrome) && view.state.selection.main.empty && head != anchor && (vp.from > 0 || vp.to < view.state.doc.length)) {
				let from = Math.min(head, anchor), to = Math.max(head, anchor);
				let offFrom = vp.from - from, offTo = vp.to - to;
				if ((offFrom == 0 || offFrom == 1 || from == 0) && (offTo == 0 || offTo == -1 || to == view.state.doc.length)) {
					head = 0;
					anchor = view.state.doc.length;
				}
			}
			if (view.inputState.composing > -1 && view.state.selection.ranges.length > 1) this.newSel = view.state.selection.replaceRange(EditorSelection.range(anchor, head));
			else this.newSel = EditorSelection.single(anchor, head);
		}
	}
};
function domBoundsAround(tile, from, to, offset) {
	if (tile.isComposite()) {
		let fromI = -1, fromStart = -1, toI = -1, toEnd = -1;
		for (let i = 0, pos = offset, prevEnd = offset; i < tile.children.length; i++) {
			let child = tile.children[i], end = pos + child.length;
			if (pos < from && end > to) return domBoundsAround(child, from, to, pos);
			if (end >= from && fromI == -1) {
				fromI = i;
				fromStart = pos;
			}
			if (pos > to && child.dom.parentNode == tile.dom) {
				toI = i;
				toEnd = prevEnd;
				break;
			}
			prevEnd = end;
			pos = end + child.breakAfter;
		}
		return {
			from: fromStart,
			to: toEnd < 0 ? offset + tile.length : toEnd,
			startDOM: (fromI ? tile.children[fromI - 1].dom.nextSibling : null) || tile.dom.firstChild,
			endDOM: toI < tile.children.length && toI >= 0 ? tile.children[toI].dom : null
		};
	} else if (tile.isText()) return {
		from: offset,
		to: offset + tile.length,
		startDOM: tile.dom,
		endDOM: tile.dom.nextSibling
	};
	else return null;
}
function applyDOMChange(view, domChange) {
	let change;
	let { newSel } = domChange, sel = view.state.selection.main;
	let lastKey = view.inputState.lastKeyTime > Date.now() - 100 ? view.inputState.lastKeyCode : -1;
	if (domChange.bounds) {
		let { from, to } = domChange.bounds;
		let preferredPos = sel.from, preferredSide = null;
		if (lastKey === 8 || browser.android && domChange.text.length < to - from) {
			preferredPos = sel.to;
			preferredSide = "end";
		}
		let diff = findDiff(view.state.doc.sliceString(from, to, LineBreakPlaceholder), domChange.text, preferredPos - from, preferredSide);
		if (diff) {
			if (browser.chrome && lastKey == 13 && diff.toB == diff.from + 2 && domChange.text.slice(diff.from, diff.toB) == LineBreakPlaceholder + LineBreakPlaceholder) diff.toB--;
			change = {
				from: from + diff.from,
				to: from + diff.toA,
				insert: Text.of(domChange.text.slice(diff.from, diff.toB).split(LineBreakPlaceholder))
			};
		}
	} else if (newSel && (!view.hasFocus && view.state.facet(editable) || newSel.main.eq(sel))) newSel = null;
	if (!change && !newSel) return false;
	if (!change && domChange.typeOver && !sel.empty && newSel && newSel.main.empty) change = {
		from: sel.from,
		to: sel.to,
		insert: view.state.doc.slice(sel.from, sel.to)
	};
	else if ((browser.mac || browser.android) && change && change.from == change.to && change.from == sel.head - 1 && /^\. ?$/.test(change.insert.toString()) && view.contentDOM.getAttribute("autocorrect") == "off") {
		if (newSel && change.insert.length == 2) newSel = EditorSelection.single(newSel.main.anchor - 1, newSel.main.head - 1);
		change = {
			from: change.from,
			to: change.to,
			insert: Text.of([change.insert.toString().replace(".", " ")])
		};
	} else if (change && change.from >= sel.from && change.to <= sel.to && (change.from != sel.from || change.to != sel.to) && sel.to - sel.from - (change.to - change.from) <= 4) change = {
		from: sel.from,
		to: sel.to,
		insert: view.state.doc.slice(sel.from, change.from).append(change.insert).append(view.state.doc.slice(change.to, sel.to))
	};
	else if (view.state.doc.lineAt(sel.from).to < sel.to && view.docView.lineHasWidget(sel.to) && view.inputState.insertingTextAt > Date.now() - 50) change = {
		from: sel.from,
		to: sel.to,
		insert: view.state.toText(view.inputState.insertingText)
	};
	else if (browser.chrome && change && change.from == change.to && change.from == sel.head && change.insert.toString() == "\n " && view.lineWrapping) {
		if (newSel) newSel = EditorSelection.single(newSel.main.anchor - 1, newSel.main.head - 1);
		change = {
			from: sel.from,
			to: sel.to,
			insert: Text.of([" "])
		};
	}
	if (change) return applyDOMChangeInner(view, change, newSel, lastKey);
	else if (newSel && !newSel.main.eq(sel)) {
		let scrollIntoView = false, userEvent = "select";
		if (view.inputState.lastSelectionTime > Date.now() - 50) {
			if (view.inputState.lastSelectionOrigin == "select") scrollIntoView = true;
			userEvent = view.inputState.lastSelectionOrigin;
			if (userEvent == "select.pointer") newSel = skipAtomsForSelection(view.state.facet(atomicRanges).map((f) => f(view)), newSel);
		}
		view.dispatch({
			selection: newSel,
			scrollIntoView,
			userEvent
		});
		return true;
	} else return false;
}
function applyDOMChangeInner(view, change, newSel, lastKey = -1) {
	if (browser.ios && view.inputState.flushIOSKey(change)) return true;
	let sel = view.state.selection.main;
	if (browser.android && (change.to == sel.to && (change.from == sel.from || change.from == sel.from - 1 && view.state.sliceDoc(change.from, sel.from) == " ") && change.insert.length == 1 && change.insert.lines == 2 && dispatchKey(view.contentDOM, "Enter", 13) || (change.from == sel.from - 1 && change.to == sel.to && change.insert.length == 0 || lastKey == 8 && change.insert.length < change.to - change.from && change.to > sel.head) && dispatchKey(view.contentDOM, "Backspace", 8) || change.from == sel.from && change.to == sel.to + 1 && change.insert.length == 0 && dispatchKey(view.contentDOM, "Delete", 46))) return true;
	let text = change.insert.toString();
	if (view.inputState.composing >= 0) view.inputState.composing++;
	let defaultTr;
	let defaultInsert = () => defaultTr || (defaultTr = applyDefaultInsert(view, change, newSel));
	if (!view.state.facet(inputHandler$1).some((h) => h(view, change.from, change.to, text, defaultInsert))) view.dispatch(defaultInsert());
	return true;
}
function applyDefaultInsert(view, change, newSel) {
	let tr, startState = view.state, sel = startState.selection.main, inAtomic = -1;
	if (change.from == change.to && change.from < sel.from || change.from > sel.to) {
		let side = change.from < sel.from ? -1 : 1, pos = side < 0 ? sel.from : sel.to;
		let moved = skipAtomicRanges(startState.facet(atomicRanges).map((f) => f(view)), pos, side);
		if (change.from == moved) inAtomic = moved;
	}
	if (inAtomic > -1) tr = {
		changes: change,
		selection: EditorSelection.cursor(change.from + change.insert.length, -1)
	};
	else if (change.from >= sel.from && change.to <= sel.to && change.to - change.from >= (sel.to - sel.from) / 3 && (!newSel || newSel.main.empty && newSel.main.from == change.from + change.insert.length) && view.inputState.composing < 0) {
		let before = sel.from < change.from ? startState.sliceDoc(sel.from, change.from) : "";
		let after = sel.to > change.to ? startState.sliceDoc(change.to, sel.to) : "";
		tr = startState.replaceSelection(view.state.toText(before + change.insert.sliceString(0, void 0, view.state.lineBreak) + after));
	} else {
		let changes = startState.changes(change);
		let mainSel = newSel && newSel.main.to <= changes.newLength ? newSel.main : void 0;
		if (startState.selection.ranges.length > 1 && (view.inputState.composing >= 0 || view.inputState.compositionPendingChange) && change.to <= sel.to + 10 && change.to >= sel.to - 10) {
			let replaced = view.state.sliceDoc(change.from, change.to);
			let compositionRange, composition = newSel && findCompositionNode(view, newSel.main.head);
			if (composition) {
				let dLen = change.insert.length - (change.to - change.from);
				compositionRange = {
					from: composition.from,
					to: composition.to - dLen
				};
			} else compositionRange = view.state.doc.lineAt(sel.head);
			let offset = sel.to - change.to;
			tr = startState.changeByRange((range) => {
				if (range.from == sel.from && range.to == sel.to) return {
					changes,
					range: mainSel || range.map(changes)
				};
				let to = range.to - offset, from = to - replaced.length;
				if (view.state.sliceDoc(from, to) != replaced || to >= compositionRange.from && from <= compositionRange.to) return { range };
				let rangeChanges = startState.changes({
					from,
					to,
					insert: change.insert
				}), selOff = range.to - sel.to;
				return {
					changes: rangeChanges,
					range: !mainSel ? range.map(rangeChanges) : EditorSelection.range(Math.max(0, mainSel.anchor + selOff), Math.max(0, mainSel.head + selOff))
				};
			});
		} else tr = {
			changes,
			selection: mainSel && startState.selection.replaceRange(mainSel)
		};
	}
	let userEvent = "input.type";
	if (view.composing || view.inputState.compositionPendingChange && view.inputState.compositionEndedAt > Date.now() - 50) {
		view.inputState.compositionPendingChange = false;
		userEvent += ".compose";
		if (view.inputState.compositionFirstChange) {
			userEvent += ".start";
			view.inputState.compositionFirstChange = false;
		}
	}
	return startState.update(tr, {
		userEvent,
		scrollIntoView: true
	});
}
function findDiff(a, b, preferredPos, preferredSide) {
	let minLen = Math.min(a.length, b.length);
	let from = 0;
	while (from < minLen && a.charCodeAt(from) == b.charCodeAt(from)) from++;
	if (from == minLen && a.length == b.length) return null;
	let toA = a.length, toB = b.length;
	while (toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)) {
		toA--;
		toB--;
	}
	if (preferredSide == "end") {
		let adjust = Math.max(0, from - Math.min(toA, toB));
		preferredPos -= toA + adjust - from;
	}
	if (toA < from && a.length < b.length) {
		let move = preferredPos <= from && preferredPos >= toA ? from - preferredPos : 0;
		from -= move;
		toB = from + (toB - toA);
		toA = from;
	} else if (toB < from) {
		let move = preferredPos <= from && preferredPos >= toB ? from - preferredPos : 0;
		from -= move;
		toA = from + (toA - toB);
		toB = from;
	}
	return {
		from,
		toA,
		toB
	};
}
function selectionPoints(view) {
	let result = [];
	if (view.root.activeElement != view.contentDOM) return result;
	let { anchorNode, anchorOffset, focusNode, focusOffset } = view.observer.selectionRange;
	if (anchorNode) {
		result.push(new DOMPoint(anchorNode, anchorOffset));
		if (focusNode != anchorNode || focusOffset != anchorOffset) result.push(new DOMPoint(focusNode, focusOffset));
	}
	return result;
}
function selectionFromPoints(points, base) {
	if (points.length == 0) return null;
	let anchor = points[0].pos, head = points.length == 2 ? points[1].pos : anchor;
	return anchor > -1 && head > -1 ? EditorSelection.single(anchor + base, head + base) : null;
}
var InputState = class {
	setSelectionOrigin(origin) {
		this.lastSelectionOrigin = origin;
		this.lastSelectionTime = Date.now();
	}
	constructor(view) {
		this.view = view;
		this.lastKeyCode = 0;
		this.lastKeyTime = 0;
		this.lastTouchTime = 0;
		this.lastFocusTime = 0;
		this.lastScrollTop = 0;
		this.lastScrollLeft = 0;
		this.pendingIOSKey = void 0;
		/**
		When enabled (>-1), tab presses are not given to key handlers,
		leaving the browser's default behavior. If >0, the mode expires
		at that timestamp, and any other keypress clears it.
		Esc enables temporary tab focus mode for two seconds when not
		otherwise handled.
		*/
		this.tabFocusMode = -1;
		this.lastSelectionOrigin = null;
		this.lastSelectionTime = 0;
		this.lastContextMenu = 0;
		this.scrollHandlers = [];
		this.handlers = Object.create(null);
		this.composing = -1;
		this.compositionFirstChange = null;
		this.compositionEndedAt = 0;
		this.compositionPendingKey = false;
		this.compositionPendingChange = false;
		this.insertingText = "";
		this.insertingTextAt = 0;
		this.mouseSelection = null;
		this.draggedContent = null;
		this.handleEvent = this.handleEvent.bind(this);
		this.notifiedFocused = view.hasFocus;
		if (browser.safari) view.contentDOM.addEventListener("input", () => null);
		if (browser.gecko) firefoxCopyCutHack(view.contentDOM.ownerDocument);
	}
	handleEvent(event) {
		if (!eventBelongsToEditor(this.view, event) || this.ignoreDuringComposition(event)) return;
		if (event.type == "keydown" && this.keydown(event)) return;
		if (this.view.updateState != 0) Promise.resolve().then(() => this.runHandlers(event.type, event));
		else this.runHandlers(event.type, event);
	}
	runHandlers(type, event) {
		let handlers = this.handlers[type];
		if (handlers) {
			for (let observer of handlers.observers) observer(this.view, event);
			for (let handler of handlers.handlers) {
				if (event.defaultPrevented) break;
				if (handler(this.view, event)) {
					event.preventDefault();
					break;
				}
			}
		}
	}
	ensureHandlers(plugins) {
		let handlers = computeHandlers(plugins), prev = this.handlers, dom = this.view.contentDOM;
		for (let type in handlers) if (type != "scroll") {
			let passive = !handlers[type].handlers.length;
			let exists = prev[type];
			if (exists && passive != !exists.handlers.length) {
				dom.removeEventListener(type, this.handleEvent);
				exists = null;
			}
			if (!exists) dom.addEventListener(type, this.handleEvent, { passive });
		}
		for (let type in prev) if (type != "scroll" && !handlers[type]) dom.removeEventListener(type, this.handleEvent);
		this.handlers = handlers;
	}
	keydown(event) {
		this.lastKeyCode = event.keyCode;
		this.lastKeyTime = Date.now();
		if (event.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return true;
		if (this.tabFocusMode > 0 && event.keyCode != 27 && modifierCodes.indexOf(event.keyCode) < 0) this.tabFocusMode = -1;
		if (browser.android && browser.chrome && !event.synthetic && (event.keyCode == 13 || event.keyCode == 8)) {
			this.view.observer.delayAndroidKey(event.key, event.keyCode);
			return true;
		}
		let pending;
		if (browser.ios && !event.synthetic && !event.altKey && !event.metaKey && ((pending = PendingKeys.find((key) => key.keyCode == event.keyCode)) && !event.ctrlKey || EmacsyPendingKeys.indexOf(event.key) > -1 && event.ctrlKey && !event.shiftKey)) {
			this.pendingIOSKey = pending || event;
			setTimeout(() => this.flushIOSKey(), 250);
			return true;
		}
		if (event.keyCode != 229) this.view.observer.forceFlush();
		return false;
	}
	flushIOSKey(change) {
		let key = this.pendingIOSKey;
		if (!key) return false;
		if (key.key == "Enter" && change && change.from < change.to && /^\S+$/.test(change.insert.toString())) return false;
		this.pendingIOSKey = void 0;
		return dispatchKey(this.view.contentDOM, key.key, key.keyCode, key instanceof KeyboardEvent ? key : void 0);
	}
	ignoreDuringComposition(event) {
		if (!/^key/.test(event.type) || event.synthetic) return false;
		if (this.composing > 0) return true;
		if (browser.safari && !browser.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) {
			this.compositionPendingKey = false;
			return true;
		}
		return false;
	}
	startMouseSelection(mouseSelection) {
		if (this.mouseSelection) this.mouseSelection.destroy();
		this.mouseSelection = mouseSelection;
	}
	update(update) {
		this.view.observer.update(update);
		if (this.mouseSelection) this.mouseSelection.update(update);
		if (this.draggedContent && update.docChanged) this.draggedContent = this.draggedContent.map(update.changes);
		if (update.transactions.length) this.lastKeyCode = this.lastSelectionTime = 0;
	}
	destroy() {
		if (this.mouseSelection) this.mouseSelection.destroy();
	}
};
function bindHandler(plugin, handler) {
	return (view, event) => {
		try {
			return handler.call(plugin, event, view);
		} catch (e) {
			logException(view.state, e);
		}
	};
}
function computeHandlers(plugins) {
	let result = Object.create(null);
	function record(type) {
		return result[type] || (result[type] = {
			observers: [],
			handlers: []
		});
	}
	for (let plugin of plugins) {
		let spec = plugin.spec, handlers = spec && spec.plugin.domEventHandlers, observers = spec && spec.plugin.domEventObservers;
		if (handlers) for (let type in handlers) {
			let f = handlers[type];
			if (f) record(type).handlers.push(bindHandler(plugin.value, f));
		}
		if (observers) for (let type in observers) {
			let f = observers[type];
			if (f) record(type).observers.push(bindHandler(plugin.value, f));
		}
	}
	for (let type in handlers) record(type).handlers.push(handlers[type]);
	for (let type in observers) record(type).observers.push(observers[type]);
	return result;
}
var PendingKeys = [
	{
		key: "Backspace",
		keyCode: 8,
		inputType: "deleteContentBackward"
	},
	{
		key: "Enter",
		keyCode: 13,
		inputType: "insertParagraph"
	},
	{
		key: "Enter",
		keyCode: 13,
		inputType: "insertLineBreak"
	},
	{
		key: "Delete",
		keyCode: 46,
		inputType: "deleteContentForward"
	}
];
var EmacsyPendingKeys = "dthko";
var modifierCodes = [
	16,
	17,
	18,
	20,
	91,
	92,
	224,
	225
];
var dragScrollMargin = 6;
function dragScrollSpeed(dist) {
	return Math.max(0, dist) * .7 + 8;
}
function dist(a, b) {
	return Math.max(Math.abs(a.clientX - b.clientX), Math.abs(a.clientY - b.clientY));
}
var MouseSelection = class {
	constructor(view, startEvent, style, mustSelect) {
		this.view = view;
		this.startEvent = startEvent;
		this.style = style;
		this.mustSelect = mustSelect;
		this.scrollSpeed = {
			x: 0,
			y: 0
		};
		this.scrolling = -1;
		this.lastEvent = startEvent;
		this.scrollParents = scrollableParents(view.contentDOM);
		this.atoms = view.state.facet(atomicRanges).map((f) => f(view));
		let doc = view.contentDOM.ownerDocument;
		doc.addEventListener("mousemove", this.move = this.move.bind(this));
		doc.addEventListener("mouseup", this.up = this.up.bind(this));
		this.extend = startEvent.shiftKey;
		this.multiple = view.state.facet(EditorState.allowMultipleSelections) && addsSelectionRange(view, startEvent);
		this.dragging = isInPrimarySelection(view, startEvent) && getClickType(startEvent) == 1 ? null : false;
	}
	start(event) {
		if (this.dragging === false) this.select(event);
	}
	move(event) {
		if (event.buttons == 0) return this.destroy();
		if (this.dragging || this.dragging == null && dist(this.startEvent, event) < 10) return;
		this.select(this.lastEvent = event);
		let sx = 0, sy = 0;
		let left = 0, top = 0, right = this.view.win.innerWidth, bottom = this.view.win.innerHeight;
		if (this.scrollParents.x) ({left, right} = this.scrollParents.x.getBoundingClientRect());
		if (this.scrollParents.y) ({top, bottom} = this.scrollParents.y.getBoundingClientRect());
		let margins = getScrollMargins(this.view);
		if (event.clientX - margins.left <= left + dragScrollMargin) sx = -dragScrollSpeed(left - event.clientX);
		else if (event.clientX + margins.right >= right - dragScrollMargin) sx = dragScrollSpeed(event.clientX - right);
		if (event.clientY - margins.top <= top + dragScrollMargin) sy = -dragScrollSpeed(top - event.clientY);
		else if (event.clientY + margins.bottom >= bottom - dragScrollMargin) sy = dragScrollSpeed(event.clientY - bottom);
		this.setScrollSpeed(sx, sy);
	}
	up(event) {
		if (this.dragging == null) this.select(this.lastEvent);
		if (!this.dragging) event.preventDefault();
		this.destroy();
	}
	destroy() {
		this.setScrollSpeed(0, 0);
		let doc = this.view.contentDOM.ownerDocument;
		doc.removeEventListener("mousemove", this.move);
		doc.removeEventListener("mouseup", this.up);
		this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
	}
	setScrollSpeed(sx, sy) {
		this.scrollSpeed = {
			x: sx,
			y: sy
		};
		if (sx || sy) {
			if (this.scrolling < 0) this.scrolling = setInterval(() => this.scroll(), 50);
		} else if (this.scrolling > -1) {
			clearInterval(this.scrolling);
			this.scrolling = -1;
		}
	}
	scroll() {
		let { x, y } = this.scrollSpeed;
		if (x && this.scrollParents.x) {
			this.scrollParents.x.scrollLeft += x;
			x = 0;
		}
		if (y && this.scrollParents.y) {
			this.scrollParents.y.scrollTop += y;
			y = 0;
		}
		if (x || y) this.view.win.scrollBy(x, y);
		if (this.dragging === false) this.select(this.lastEvent);
	}
	select(event) {
		let { view } = this, selection = skipAtomsForSelection(this.atoms, this.style.get(event, this.extend, this.multiple));
		if (this.mustSelect || !selection.eq(view.state.selection, this.dragging === false)) this.view.dispatch({
			selection,
			userEvent: "select.pointer"
		});
		this.mustSelect = false;
	}
	update(update) {
		if (update.transactions.some((tr) => tr.isUserEvent("input.type"))) this.destroy();
		else if (this.style.update(update)) setTimeout(() => this.select(this.lastEvent), 20);
	}
};
function addsSelectionRange(view, event) {
	let facet = view.state.facet(clickAddsSelectionRange);
	return facet.length ? facet[0](event) : browser.mac ? event.metaKey : event.ctrlKey;
}
function dragMovesSelection(view, event) {
	let facet = view.state.facet(dragMovesSelection$1);
	return facet.length ? facet[0](event) : browser.mac ? !event.altKey : !event.ctrlKey;
}
function isInPrimarySelection(view, event) {
	let { main } = view.state.selection;
	if (main.empty) return false;
	let sel = getSelection(view.root);
	if (!sel || sel.rangeCount == 0) return true;
	let rects = sel.getRangeAt(0).getClientRects();
	for (let i = 0; i < rects.length; i++) {
		let rect = rects[i];
		if (rect.left <= event.clientX && rect.right >= event.clientX && rect.top <= event.clientY && rect.bottom >= event.clientY) return true;
	}
	return false;
}
function eventBelongsToEditor(view, event) {
	if (!event.bubbles) return true;
	if (event.defaultPrevented) return false;
	for (let node = event.target, tile; node != view.contentDOM; node = node.parentNode) if (!node || node.nodeType == 11 || (tile = Tile.get(node)) && tile.isWidget() && !tile.isHidden && tile.widget.ignoreEvent(event)) return false;
	return true;
}
var handlers = /* @__PURE__ */ Object.create(null);
var observers = /* @__PURE__ */ Object.create(null);
var brokenClipboardAPI = browser.ie && browser.ie_version < 15 || browser.ios && browser.webkit_version < 604;
function capturePaste(view) {
	let parent = view.dom.parentNode;
	if (!parent) return;
	let target = parent.appendChild(document.createElement("textarea"));
	target.style.cssText = "position: fixed; left: -10000px; top: 10px";
	target.focus();
	setTimeout(() => {
		view.focus();
		target.remove();
		doPaste(view, target.value);
	}, 50);
}
function textFilter(state, facet, text) {
	for (let filter of state.facet(facet)) text = filter(text, state);
	return text;
}
function doPaste(view, input) {
	input = textFilter(view.state, clipboardInputFilter, input);
	let { state } = view, changes, i = 1, text = state.toText(input);
	let byLine = text.lines == state.selection.ranges.length;
	if (lastLinewiseCopy != null && state.selection.ranges.every((r) => r.empty) && lastLinewiseCopy == text.toString()) {
		let lastLine = -1;
		changes = state.changeByRange((range) => {
			let line = state.doc.lineAt(range.from);
			if (line.from == lastLine) return { range };
			lastLine = line.from;
			let insert = state.toText((byLine ? text.line(i++).text : input) + state.lineBreak);
			return {
				changes: {
					from: line.from,
					insert
				},
				range: EditorSelection.cursor(range.from + insert.length)
			};
		});
	} else if (byLine) changes = state.changeByRange((range) => {
		let line = text.line(i++);
		return {
			changes: {
				from: range.from,
				to: range.to,
				insert: line.text
			},
			range: EditorSelection.cursor(range.from + line.length)
		};
	});
	else changes = state.replaceSelection(text);
	view.dispatch(changes, {
		userEvent: "input.paste",
		scrollIntoView: true
	});
}
observers.scroll = (view) => {
	view.inputState.lastScrollTop = view.scrollDOM.scrollTop;
	view.inputState.lastScrollLeft = view.scrollDOM.scrollLeft;
};
handlers.keydown = (view, event) => {
	view.inputState.setSelectionOrigin("select");
	if (event.keyCode == 27 && view.inputState.tabFocusMode != 0) view.inputState.tabFocusMode = Date.now() + 2e3;
	return false;
};
observers.touchstart = (view, e) => {
	view.inputState.lastTouchTime = Date.now();
	view.inputState.setSelectionOrigin("select.pointer");
};
observers.touchmove = (view) => {
	view.inputState.setSelectionOrigin("select.pointer");
};
handlers.mousedown = (view, event) => {
	view.observer.flush();
	if (view.inputState.lastTouchTime > Date.now() - 2e3) return false;
	let style = null;
	for (let makeStyle of view.state.facet(mouseSelectionStyle)) {
		style = makeStyle(view, event);
		if (style) break;
	}
	if (!style && event.button == 0) style = basicMouseSelection(view, event);
	if (style) {
		let mustFocus = !view.hasFocus;
		view.inputState.startMouseSelection(new MouseSelection(view, event, style, mustFocus));
		if (mustFocus) view.observer.ignore(() => {
			focusPreventScroll(view.contentDOM);
			let active = view.root.activeElement;
			if (active && !active.contains(view.contentDOM)) active.blur();
		});
		let mouseSel = view.inputState.mouseSelection;
		if (mouseSel) {
			mouseSel.start(event);
			return mouseSel.dragging === false;
		}
	} else view.inputState.setSelectionOrigin("select.pointer");
	return false;
};
function rangeForClick(view, pos, bias, type) {
	if (type == 1) return EditorSelection.cursor(pos, bias);
	else if (type == 2) return groupAt(view.state, pos, bias);
	else {
		let visual = view.docView.lineAt(pos, bias), line = view.state.doc.lineAt(visual ? visual.posAtEnd : pos);
		let from = visual ? visual.posAtStart : line.from, to = visual ? visual.posAtEnd : line.to;
		if (to < view.state.doc.length && to == line.to) to++;
		return EditorSelection.range(from, to);
	}
}
var BadMouseDetail = browser.ie && browser.ie_version <= 11;
var lastMouseDown = null, lastMouseDownCount = 0, lastMouseDownTime = 0;
function getClickType(event) {
	if (!BadMouseDetail) return event.detail;
	let last = lastMouseDown, lastTime = lastMouseDownTime;
	lastMouseDown = event;
	lastMouseDownTime = Date.now();
	return lastMouseDownCount = !last || lastTime > Date.now() - 400 && Math.abs(last.clientX - event.clientX) < 2 && Math.abs(last.clientY - event.clientY) < 2 ? (lastMouseDownCount + 1) % 3 : 1;
}
function basicMouseSelection(view, event) {
	let start = view.posAndSideAtCoords({
		x: event.clientX,
		y: event.clientY
	}, false), type = getClickType(event);
	let startSel = view.state.selection;
	return {
		update(update) {
			if (update.docChanged) {
				start.pos = update.changes.mapPos(start.pos);
				startSel = startSel.map(update.changes);
			}
		},
		get(event, extend, multiple) {
			let cur = view.posAndSideAtCoords({
				x: event.clientX,
				y: event.clientY
			}, false), removed;
			let range = rangeForClick(view, cur.pos, cur.assoc, type);
			if (start.pos != cur.pos && !extend) {
				let startRange = rangeForClick(view, start.pos, start.assoc, type);
				let from = Math.min(startRange.from, range.from), to = Math.max(startRange.to, range.to);
				range = from < range.from ? EditorSelection.range(from, to) : EditorSelection.range(to, from);
			}
			if (extend) return startSel.replaceRange(startSel.main.extend(range.from, range.to));
			else if (multiple && type == 1 && startSel.ranges.length > 1 && (removed = removeRangeAround(startSel, cur.pos))) return removed;
			else if (multiple) return startSel.addRange(range);
			else return EditorSelection.create([range]);
		}
	};
}
function removeRangeAround(sel, pos) {
	for (let i = 0; i < sel.ranges.length; i++) {
		let { from, to } = sel.ranges[i];
		if (from <= pos && to >= pos) return EditorSelection.create(sel.ranges.slice(0, i).concat(sel.ranges.slice(i + 1)), sel.mainIndex == i ? 0 : sel.mainIndex - (sel.mainIndex > i ? 1 : 0));
	}
	return null;
}
handlers.dragstart = (view, event) => {
	let { selection: { main: range } } = view.state;
	if (event.target.draggable) {
		let tile = view.docView.tile.nearest(event.target);
		if (tile && tile.isWidget()) {
			let from = tile.posAtStart, to = from + tile.length;
			if (from >= range.to || to <= range.from) range = EditorSelection.range(from, to);
		}
	}
	let { inputState } = view;
	if (inputState.mouseSelection) inputState.mouseSelection.dragging = true;
	inputState.draggedContent = range;
	if (event.dataTransfer) {
		event.dataTransfer.setData("Text", textFilter(view.state, clipboardOutputFilter, view.state.sliceDoc(range.from, range.to)));
		event.dataTransfer.effectAllowed = "copyMove";
	}
	return false;
};
handlers.dragend = (view) => {
	view.inputState.draggedContent = null;
	return false;
};
function dropText(view, event, text, direct) {
	text = textFilter(view.state, clipboardInputFilter, text);
	if (!text) return;
	let dropPos = view.posAtCoords({
		x: event.clientX,
		y: event.clientY
	}, false);
	let { draggedContent } = view.inputState;
	let del = direct && draggedContent && dragMovesSelection(view, event) ? {
		from: draggedContent.from,
		to: draggedContent.to
	} : null;
	let ins = {
		from: dropPos,
		insert: text
	};
	let changes = view.state.changes(del ? [del, ins] : ins);
	view.focus();
	view.dispatch({
		changes,
		selection: {
			anchor: changes.mapPos(dropPos, -1),
			head: changes.mapPos(dropPos, 1)
		},
		userEvent: del ? "move.drop" : "input.drop"
	});
	view.inputState.draggedContent = null;
}
handlers.drop = (view, event) => {
	if (!event.dataTransfer) return false;
	if (view.state.readOnly) return true;
	let files = event.dataTransfer.files;
	if (files && files.length) {
		let text = Array(files.length), read = 0;
		let finishFile = () => {
			if (++read == files.length) dropText(view, event, text.filter((s) => s != null).join(view.state.lineBreak), false);
		};
		for (let i = 0; i < files.length; i++) {
			let reader = new FileReader();
			reader.onerror = finishFile;
			reader.onload = () => {
				if (!/[\x00-\x08\x0e-\x1f]{2}/.test(reader.result)) text[i] = reader.result;
				finishFile();
			};
			reader.readAsText(files[i]);
		}
		return true;
	} else {
		let text = event.dataTransfer.getData("Text");
		if (text) {
			dropText(view, event, text, true);
			return true;
		}
	}
	return false;
};
handlers.paste = (view, event) => {
	if (view.state.readOnly) return true;
	view.observer.flush();
	let data = brokenClipboardAPI ? null : event.clipboardData;
	if (data) {
		doPaste(view, data.getData("text/plain") || data.getData("text/uri-list"));
		return true;
	} else {
		capturePaste(view);
		return false;
	}
};
function captureCopy(view, text) {
	let parent = view.dom.parentNode;
	if (!parent) return;
	let target = parent.appendChild(document.createElement("textarea"));
	target.style.cssText = "position: fixed; left: -10000px; top: 10px";
	target.value = text;
	target.focus();
	target.selectionEnd = text.length;
	target.selectionStart = 0;
	setTimeout(() => {
		target.remove();
		view.focus();
	}, 50);
}
function copiedRange(state) {
	let content = [], ranges = [], linewise = false;
	for (let range of state.selection.ranges) if (!range.empty) {
		content.push(state.sliceDoc(range.from, range.to));
		ranges.push(range);
	}
	if (!content.length) {
		let upto = -1;
		for (let { from } of state.selection.ranges) {
			let line = state.doc.lineAt(from);
			if (line.number > upto) {
				content.push(line.text);
				ranges.push({
					from: line.from,
					to: Math.min(state.doc.length, line.to + 1)
				});
			}
			upto = line.number;
		}
		linewise = true;
	}
	return {
		text: textFilter(state, clipboardOutputFilter, content.join(state.lineBreak)),
		ranges,
		linewise
	};
}
var lastLinewiseCopy = null;
handlers.copy = handlers.cut = (view, event) => {
	let { text, ranges, linewise } = copiedRange(view.state);
	if (!text && !linewise) return false;
	lastLinewiseCopy = linewise ? text : null;
	if (event.type == "cut" && !view.state.readOnly) view.dispatch({
		changes: ranges,
		scrollIntoView: true,
		userEvent: "delete.cut"
	});
	let data = brokenClipboardAPI ? null : event.clipboardData;
	if (data) {
		data.clearData();
		data.setData("text/plain", text);
		return true;
	} else {
		captureCopy(view, text);
		return false;
	}
};
var isFocusChange = /* @__PURE__ */ Annotation.define();
function focusChangeTransaction(state, focus) {
	let effects = [];
	for (let getEffect of state.facet(focusChangeEffect)) {
		let effect = getEffect(state, focus);
		if (effect) effects.push(effect);
	}
	return effects.length ? state.update({
		effects,
		annotations: isFocusChange.of(true)
	}) : null;
}
function updateForFocusChange(view) {
	setTimeout(() => {
		let focus = view.hasFocus;
		if (focus != view.inputState.notifiedFocused) {
			let tr = focusChangeTransaction(view.state, focus);
			if (tr) view.dispatch(tr);
			else view.update([]);
		}
	}, 10);
}
observers.focus = (view) => {
	view.inputState.lastFocusTime = Date.now();
	if (!view.scrollDOM.scrollTop && (view.inputState.lastScrollTop || view.inputState.lastScrollLeft)) {
		view.scrollDOM.scrollTop = view.inputState.lastScrollTop;
		view.scrollDOM.scrollLeft = view.inputState.lastScrollLeft;
	}
	updateForFocusChange(view);
};
observers.blur = (view) => {
	view.observer.clearSelectionRange();
	updateForFocusChange(view);
};
observers.compositionstart = observers.compositionupdate = (view) => {
	if (view.observer.editContext) return;
	if (view.inputState.compositionFirstChange == null) view.inputState.compositionFirstChange = true;
	if (view.inputState.composing < 0) view.inputState.composing = 0;
};
observers.compositionend = (view) => {
	if (view.observer.editContext) return;
	view.inputState.composing = -1;
	view.inputState.compositionEndedAt = Date.now();
	view.inputState.compositionPendingKey = true;
	view.inputState.compositionPendingChange = view.observer.pendingRecords().length > 0;
	view.inputState.compositionFirstChange = null;
	if (browser.chrome && browser.android) view.observer.flushSoon();
	else if (view.inputState.compositionPendingChange) Promise.resolve().then(() => view.observer.flush());
	else setTimeout(() => {
		if (view.inputState.composing < 0 && view.docView.hasComposition) view.update([]);
	}, 50);
};
observers.contextmenu = (view) => {
	view.inputState.lastContextMenu = Date.now();
};
handlers.beforeinput = (view, event) => {
	var _a, _b;
	if (event.inputType == "insertText" || event.inputType == "insertCompositionText") {
		view.inputState.insertingText = event.data;
		view.inputState.insertingTextAt = Date.now();
	}
	if (event.inputType == "insertReplacementText" && view.observer.editContext) {
		let text = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text/plain"), ranges = event.getTargetRanges();
		if (text && ranges.length) {
			let r = ranges[0];
			applyDOMChangeInner(view, {
				from: view.posAtDOM(r.startContainer, r.startOffset),
				to: view.posAtDOM(r.endContainer, r.endOffset),
				insert: view.state.toText(text)
			}, null);
			return true;
		}
	}
	let pending;
	if (browser.chrome && browser.android && (pending = PendingKeys.find((key) => key.inputType == event.inputType))) {
		view.observer.delayAndroidKey(pending.key, pending.keyCode);
		if (pending.key == "Backspace" || pending.key == "Delete") {
			let startViewHeight = ((_b = window.visualViewport) === null || _b === void 0 ? void 0 : _b.height) || 0;
			setTimeout(() => {
				var _a;
				if ((((_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.height) || 0) > startViewHeight + 10 && view.hasFocus) {
					view.contentDOM.blur();
					view.focus();
				}
			}, 100);
		}
	}
	if (browser.ios && event.inputType == "deleteContentForward") view.observer.flushSoon();
	if (browser.safari && event.inputType == "insertText" && view.inputState.composing >= 0) setTimeout(() => observers.compositionend(view, event), 20);
	return false;
};
var appliedFirefoxHack = /* @__PURE__ */ new Set();
function firefoxCopyCutHack(doc) {
	if (!appliedFirefoxHack.has(doc)) {
		appliedFirefoxHack.add(doc);
		doc.addEventListener("copy", () => {});
		doc.addEventListener("cut", () => {});
	}
}
var wrappingWhiteSpace = [
	"pre-wrap",
	"normal",
	"pre-line",
	"break-spaces"
];
var heightChangeFlag = false;
function clearHeightChangeFlag() {
	heightChangeFlag = false;
}
var HeightOracle = class {
	constructor(lineWrapping) {
		this.lineWrapping = lineWrapping;
		this.doc = Text.empty;
		this.heightSamples = {};
		this.lineHeight = 14;
		this.charWidth = 7;
		this.textHeight = 14;
		this.lineLength = 30;
	}
	heightForGap(from, to) {
		let lines = this.doc.lineAt(to).number - this.doc.lineAt(from).number + 1;
		if (this.lineWrapping) lines += Math.max(0, Math.ceil((to - from - lines * this.lineLength * .5) / this.lineLength));
		return this.lineHeight * lines;
	}
	heightForLine(length) {
		if (!this.lineWrapping) return this.lineHeight;
		return (1 + Math.max(0, Math.ceil((length - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight;
	}
	setDoc(doc) {
		this.doc = doc;
		return this;
	}
	mustRefreshForWrapping(whiteSpace) {
		return wrappingWhiteSpace.indexOf(whiteSpace) > -1 != this.lineWrapping;
	}
	mustRefreshForHeights(lineHeights) {
		let newHeight = false;
		for (let i = 0; i < lineHeights.length; i++) {
			let h = lineHeights[i];
			if (h < 0) i++;
			else if (!this.heightSamples[Math.floor(h * 10)]) {
				newHeight = true;
				this.heightSamples[Math.floor(h * 10)] = true;
			}
		}
		return newHeight;
	}
	refresh(whiteSpace, lineHeight, charWidth, textHeight, lineLength, knownHeights) {
		let lineWrapping = wrappingWhiteSpace.indexOf(whiteSpace) > -1;
		let changed = Math.round(lineHeight) != Math.round(this.lineHeight) || this.lineWrapping != lineWrapping;
		this.lineWrapping = lineWrapping;
		this.lineHeight = lineHeight;
		this.charWidth = charWidth;
		this.textHeight = textHeight;
		this.lineLength = lineLength;
		if (changed) {
			this.heightSamples = {};
			for (let i = 0; i < knownHeights.length; i++) {
				let h = knownHeights[i];
				if (h < 0) i++;
				else this.heightSamples[Math.floor(h * 10)] = true;
			}
		}
		return changed;
	}
};
var MeasuredHeights = class {
	constructor(from, heights) {
		this.from = from;
		this.heights = heights;
		this.index = 0;
	}
	get more() {
		return this.index < this.heights.length;
	}
};
/**
Record used to represent information about a block-level element
in the editor view.
*/
var BlockInfo = class BlockInfo {
	/**
	@internal
	*/
	constructor(from, length, top, height, _content) {
		this.from = from;
		this.length = length;
		this.top = top;
		this.height = height;
		this._content = _content;
	}
	/**
	The type of element this is. When querying lines, this may be
	an array of all the blocks that make up the line.
	*/
	get type() {
		return typeof this._content == "number" ? BlockType.Text : Array.isArray(this._content) ? this._content : this._content.type;
	}
	/**
	The end of the element as a document position.
	*/
	get to() {
		return this.from + this.length;
	}
	/**
	The bottom position of the element.
	*/
	get bottom() {
		return this.top + this.height;
	}
	/**
	If this is a widget block, this will return the widget
	associated with it.
	*/
	get widget() {
		return this._content instanceof PointDecoration ? this._content.widget : null;
	}
	/**
	If this is a textblock, this holds the number of line breaks
	that appear in widgets inside the block.
	*/
	get widgetLineBreaks() {
		return typeof this._content == "number" ? this._content : 0;
	}
	/**
	@internal
	*/
	join(other) {
		let content = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(other._content) ? other._content : [other]);
		return new BlockInfo(this.from, this.length + other.length, this.top, this.height + other.height, content);
	}
};
var QueryType = /* @__PURE__ */ (function(QueryType) {
	QueryType[QueryType["ByPos"] = 0] = "ByPos";
	QueryType[QueryType["ByHeight"] = 1] = "ByHeight";
	QueryType[QueryType["ByPosNoHeight"] = 2] = "ByPosNoHeight";
	return QueryType;
})(QueryType || (QueryType = {}));
var Epsilon = .001;
var HeightMap = class HeightMap {
	constructor(length, height, flags = 2) {
		this.length = length;
		this.height = height;
		this.flags = flags;
	}
	get outdated() {
		return (this.flags & 2) > 0;
	}
	set outdated(value) {
		this.flags = (value ? 2 : 0) | this.flags & -3;
	}
	setHeight(height) {
		if (this.height != height) {
			if (Math.abs(this.height - height) > Epsilon) heightChangeFlag = true;
			this.height = height;
		}
	}
	replace(_from, _to, nodes) {
		return HeightMap.of(nodes);
	}
	decomposeLeft(_to, result) {
		result.push(this);
	}
	decomposeRight(_from, result) {
		result.push(this);
	}
	applyChanges(decorations, oldDoc, oracle, changes) {
		let me = this, doc = oracle.doc;
		for (let i = changes.length - 1; i >= 0; i--) {
			let { fromA, toA, fromB, toB } = changes[i];
			let start = me.lineAt(fromA, QueryType.ByPosNoHeight, oracle.setDoc(oldDoc), 0, 0);
			let end = start.to >= toA ? start : me.lineAt(toA, QueryType.ByPosNoHeight, oracle, 0, 0);
			toB += end.to - toA;
			toA = end.to;
			while (i > 0 && start.from <= changes[i - 1].toA) {
				fromA = changes[i - 1].fromA;
				fromB = changes[i - 1].fromB;
				i--;
				if (fromA < start.from) start = me.lineAt(fromA, QueryType.ByPosNoHeight, oracle, 0, 0);
			}
			fromB += start.from - fromA;
			fromA = start.from;
			let nodes = NodeBuilder.build(oracle.setDoc(doc), decorations, fromB, toB);
			me = replace(me, me.replace(fromA, toA, nodes));
		}
		return me.updateHeight(oracle, 0);
	}
	static empty() {
		return new HeightMapText(0, 0, 0);
	}
	static of(nodes) {
		if (nodes.length == 1) return nodes[0];
		let i = 0, j = nodes.length, before = 0, after = 0;
		for (;;) if (i == j) if (before > after * 2) {
			let split = nodes[i - 1];
			if (split.break) nodes.splice(--i, 1, split.left, null, split.right);
			else nodes.splice(--i, 1, split.left, split.right);
			j += 1 + split.break;
			before -= split.size;
		} else if (after > before * 2) {
			let split = nodes[j];
			if (split.break) nodes.splice(j, 1, split.left, null, split.right);
			else nodes.splice(j, 1, split.left, split.right);
			j += 2 + split.break;
			after -= split.size;
		} else break;
		else if (before < after) {
			let next = nodes[i++];
			if (next) before += next.size;
		} else {
			let next = nodes[--j];
			if (next) after += next.size;
		}
		let brk = 0;
		if (nodes[i - 1] == null) {
			brk = 1;
			i--;
		} else if (nodes[i] == null) {
			brk = 1;
			j++;
		}
		return new HeightMapBranch(HeightMap.of(nodes.slice(0, i)), brk, HeightMap.of(nodes.slice(j)));
	}
};
function replace(old, val) {
	if (old == val) return old;
	if (old.constructor != val.constructor) heightChangeFlag = true;
	return val;
}
HeightMap.prototype.size = 1;
var SpaceDeco = /* @__PURE__ */ Decoration.replace({});
var HeightMapBlock = class extends HeightMap {
	constructor(length, height, deco) {
		super(length, height);
		this.deco = deco;
		this.spaceAbove = 0;
	}
	mainBlock(top, offset) {
		return new BlockInfo(offset, this.length, top + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
	}
	blockAt(height, _oracle, top, offset) {
		return this.spaceAbove && height < top + this.spaceAbove ? new BlockInfo(offset, 0, top, this.spaceAbove, SpaceDeco) : this.mainBlock(top, offset);
	}
	lineAt(_value, _type, oracle, top, offset) {
		let main = this.mainBlock(top, offset);
		return this.spaceAbove ? this.blockAt(0, oracle, top, offset).join(main) : main;
	}
	forEachLine(from, to, oracle, top, offset, f) {
		if (from <= offset + this.length && to >= offset) f(this.lineAt(0, QueryType.ByPos, oracle, top, offset));
	}
	setMeasuredHeight(measured) {
		let next = measured.heights[measured.index++];
		if (next < 0) {
			this.spaceAbove = -next;
			next = measured.heights[measured.index++];
		} else this.spaceAbove = 0;
		this.setHeight(next);
	}
	updateHeight(oracle, offset = 0, _force = false, measured) {
		if (measured && measured.from <= offset && measured.more) this.setMeasuredHeight(measured);
		this.outdated = false;
		return this;
	}
	toString() {
		return `block(${this.length})`;
	}
};
var HeightMapText = class HeightMapText extends HeightMapBlock {
	constructor(length, height, above) {
		super(length, height, null);
		this.collapsed = 0;
		this.widgetHeight = 0;
		this.breaks = 0;
		this.spaceAbove = above;
	}
	mainBlock(top, offset) {
		return new BlockInfo(offset, this.length, top + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
	}
	replace(_from, _to, nodes) {
		let node = nodes[0];
		if (nodes.length == 1 && (node instanceof HeightMapText || node instanceof HeightMapGap && node.flags & 4) && Math.abs(this.length - node.length) < 10) {
			if (node instanceof HeightMapGap) node = new HeightMapText(node.length, this.height, this.spaceAbove);
			else node.height = this.height;
			if (!this.outdated) node.outdated = false;
			return node;
		} else return HeightMap.of(nodes);
	}
	updateHeight(oracle, offset = 0, force = false, measured) {
		if (measured && measured.from <= offset && measured.more) this.setMeasuredHeight(measured);
		else if (force || this.outdated) {
			this.spaceAbove = 0;
			this.setHeight(Math.max(this.widgetHeight, oracle.heightForLine(this.length - this.collapsed)) + this.breaks * oracle.lineHeight);
		}
		this.outdated = false;
		return this;
	}
	toString() {
		return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
	}
};
var HeightMapGap = class HeightMapGap extends HeightMap {
	constructor(length) {
		super(length, 0);
	}
	heightMetrics(oracle, offset) {
		let firstLine = oracle.doc.lineAt(offset).number, lastLine = oracle.doc.lineAt(offset + this.length).number;
		let lines = lastLine - firstLine + 1;
		let perLine, perChar = 0;
		if (oracle.lineWrapping) {
			let totalPerLine = Math.min(this.height, oracle.lineHeight * lines);
			perLine = totalPerLine / lines;
			if (this.length > lines + 1) perChar = (this.height - totalPerLine) / (this.length - lines - 1);
		} else perLine = this.height / lines;
		return {
			firstLine,
			lastLine,
			perLine,
			perChar
		};
	}
	blockAt(height, oracle, top, offset) {
		let { firstLine, lastLine, perLine, perChar } = this.heightMetrics(oracle, offset);
		if (oracle.lineWrapping) {
			let guess = offset + (height < oracle.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (height - top) / this.height)) * this.length));
			let line = oracle.doc.lineAt(guess), lineHeight = perLine + line.length * perChar;
			let lineTop = Math.max(top, height - lineHeight / 2);
			return new BlockInfo(line.from, line.length, lineTop, lineHeight, 0);
		} else {
			let line = Math.max(0, Math.min(lastLine - firstLine, Math.floor((height - top) / perLine)));
			let { from, length } = oracle.doc.line(firstLine + line);
			return new BlockInfo(from, length, top + perLine * line, perLine, 0);
		}
	}
	lineAt(value, type, oracle, top, offset) {
		if (type == QueryType.ByHeight) return this.blockAt(value, oracle, top, offset);
		if (type == QueryType.ByPosNoHeight) {
			let { from, to } = oracle.doc.lineAt(value);
			return new BlockInfo(from, to - from, 0, 0, 0);
		}
		let { firstLine, perLine, perChar } = this.heightMetrics(oracle, offset);
		let line = oracle.doc.lineAt(value), lineHeight = perLine + line.length * perChar;
		let linesAbove = line.number - firstLine;
		let lineTop = top + perLine * linesAbove + perChar * (line.from - offset - linesAbove);
		return new BlockInfo(line.from, line.length, Math.max(top, Math.min(lineTop, top + this.height - lineHeight)), lineHeight, 0);
	}
	forEachLine(from, to, oracle, top, offset, f) {
		from = Math.max(from, offset);
		to = Math.min(to, offset + this.length);
		let { firstLine, perLine, perChar } = this.heightMetrics(oracle, offset);
		for (let pos = from, lineTop = top; pos <= to;) {
			let line = oracle.doc.lineAt(pos);
			if (pos == from) {
				let linesAbove = line.number - firstLine;
				lineTop += perLine * linesAbove + perChar * (from - offset - linesAbove);
			}
			let lineHeight = perLine + perChar * line.length;
			f(new BlockInfo(line.from, line.length, lineTop, lineHeight, 0));
			lineTop += lineHeight;
			pos = line.to + 1;
		}
	}
	replace(from, to, nodes) {
		let after = this.length - to;
		if (after > 0) {
			let last = nodes[nodes.length - 1];
			if (last instanceof HeightMapGap) nodes[nodes.length - 1] = new HeightMapGap(last.length + after);
			else nodes.push(null, new HeightMapGap(after - 1));
		}
		if (from > 0) {
			let first = nodes[0];
			if (first instanceof HeightMapGap) nodes[0] = new HeightMapGap(from + first.length);
			else nodes.unshift(new HeightMapGap(from - 1), null);
		}
		return HeightMap.of(nodes);
	}
	decomposeLeft(to, result) {
		result.push(new HeightMapGap(to - 1), null);
	}
	decomposeRight(from, result) {
		result.push(null, new HeightMapGap(this.length - from - 1));
	}
	updateHeight(oracle, offset = 0, force = false, measured) {
		let end = offset + this.length;
		if (measured && measured.from <= offset + this.length && measured.more) {
			let nodes = [], pos = Math.max(offset, measured.from), singleHeight = -1;
			if (measured.from > offset) nodes.push(new HeightMapGap(measured.from - offset - 1).updateHeight(oracle, offset));
			while (pos <= end && measured.more) {
				let len = oracle.doc.lineAt(pos).length;
				if (nodes.length) nodes.push(null);
				let height = measured.heights[measured.index++], above = 0;
				if (height < 0) {
					above = -height;
					height = measured.heights[measured.index++];
				}
				if (singleHeight == -1) singleHeight = height;
				else if (Math.abs(height - singleHeight) >= Epsilon) singleHeight = -2;
				let line = new HeightMapText(len, height, above);
				line.outdated = false;
				nodes.push(line);
				pos += len + 1;
			}
			if (pos <= end) nodes.push(null, new HeightMapGap(end - pos).updateHeight(oracle, pos));
			let result = HeightMap.of(nodes);
			if (singleHeight < 0 || Math.abs(result.height - this.height) >= Epsilon || Math.abs(singleHeight - this.heightMetrics(oracle, offset).perLine) >= Epsilon) heightChangeFlag = true;
			return replace(this, result);
		} else if (force || this.outdated) {
			this.setHeight(oracle.heightForGap(offset, offset + this.length));
			this.outdated = false;
		}
		return this;
	}
	toString() {
		return `gap(${this.length})`;
	}
};
var HeightMapBranch = class extends HeightMap {
	constructor(left, brk, right) {
		super(left.length + brk + right.length, left.height + right.height, brk | (left.outdated || right.outdated ? 2 : 0));
		this.left = left;
		this.right = right;
		this.size = left.size + right.size;
	}
	get break() {
		return this.flags & 1;
	}
	blockAt(height, oracle, top, offset) {
		let mid = top + this.left.height;
		return height < mid ? this.left.blockAt(height, oracle, top, offset) : this.right.blockAt(height, oracle, mid, offset + this.left.length + this.break);
	}
	lineAt(value, type, oracle, top, offset) {
		let rightTop = top + this.left.height, rightOffset = offset + this.left.length + this.break;
		let left = type == QueryType.ByHeight ? value < rightTop : value < rightOffset;
		let base = left ? this.left.lineAt(value, type, oracle, top, offset) : this.right.lineAt(value, type, oracle, rightTop, rightOffset);
		if (this.break || (left ? base.to < rightOffset : base.from > rightOffset)) return base;
		let subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;
		if (left) return base.join(this.right.lineAt(rightOffset, subQuery, oracle, rightTop, rightOffset));
		else return this.left.lineAt(rightOffset, subQuery, oracle, top, offset).join(base);
	}
	forEachLine(from, to, oracle, top, offset, f) {
		let rightTop = top + this.left.height, rightOffset = offset + this.left.length + this.break;
		if (this.break) {
			if (from < rightOffset) this.left.forEachLine(from, to, oracle, top, offset, f);
			if (to >= rightOffset) this.right.forEachLine(from, to, oracle, rightTop, rightOffset, f);
		} else {
			let mid = this.lineAt(rightOffset, QueryType.ByPos, oracle, top, offset);
			if (from < mid.from) this.left.forEachLine(from, mid.from - 1, oracle, top, offset, f);
			if (mid.to >= from && mid.from <= to) f(mid);
			if (to > mid.to) this.right.forEachLine(mid.to + 1, to, oracle, rightTop, rightOffset, f);
		}
	}
	replace(from, to, nodes) {
		let rightStart = this.left.length + this.break;
		if (to < rightStart) return this.balanced(this.left.replace(from, to, nodes), this.right);
		if (from > this.left.length) return this.balanced(this.left, this.right.replace(from - rightStart, to - rightStart, nodes));
		let result = [];
		if (from > 0) this.decomposeLeft(from, result);
		let left = result.length;
		for (let node of nodes) result.push(node);
		if (from > 0) mergeGaps(result, left - 1);
		if (to < this.length) {
			let right = result.length;
			this.decomposeRight(to, result);
			mergeGaps(result, right);
		}
		return HeightMap.of(result);
	}
	decomposeLeft(to, result) {
		let left = this.left.length;
		if (to <= left) return this.left.decomposeLeft(to, result);
		result.push(this.left);
		if (this.break) {
			left++;
			if (to >= left) result.push(null);
		}
		if (to > left) this.right.decomposeLeft(to - left, result);
	}
	decomposeRight(from, result) {
		let left = this.left.length, right = left + this.break;
		if (from >= right) return this.right.decomposeRight(from - right, result);
		if (from < left) this.left.decomposeRight(from, result);
		if (this.break && from < right) result.push(null);
		result.push(this.right);
	}
	balanced(left, right) {
		if (left.size > 2 * right.size || right.size > 2 * left.size) return HeightMap.of(this.break ? [
			left,
			null,
			right
		] : [left, right]);
		this.left = replace(this.left, left);
		this.right = replace(this.right, right);
		this.setHeight(left.height + right.height);
		this.outdated = left.outdated || right.outdated;
		this.size = left.size + right.size;
		this.length = left.length + this.break + right.length;
		return this;
	}
	updateHeight(oracle, offset = 0, force = false, measured) {
		let { left, right } = this, rightStart = offset + left.length + this.break, rebalance = null;
		if (measured && measured.from <= offset + left.length && measured.more) rebalance = left = left.updateHeight(oracle, offset, force, measured);
		else left.updateHeight(oracle, offset, force);
		if (measured && measured.from <= rightStart + right.length && measured.more) rebalance = right = right.updateHeight(oracle, rightStart, force, measured);
		else right.updateHeight(oracle, rightStart, force);
		if (rebalance) return this.balanced(left, right);
		this.height = this.left.height + this.right.height;
		this.outdated = false;
		return this;
	}
	toString() {
		return this.left + (this.break ? " " : "-") + this.right;
	}
};
function mergeGaps(nodes, around) {
	let before, after;
	if (nodes[around] == null && (before = nodes[around - 1]) instanceof HeightMapGap && (after = nodes[around + 1]) instanceof HeightMapGap) nodes.splice(around - 1, 3, new HeightMapGap(before.length + 1 + after.length));
}
var relevantWidgetHeight = 5;
var NodeBuilder = class NodeBuilder {
	constructor(pos, oracle) {
		this.pos = pos;
		this.oracle = oracle;
		this.nodes = [];
		this.lineStart = -1;
		this.lineEnd = -1;
		this.covering = null;
		this.writtenTo = pos;
	}
	get isCovered() {
		return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
	}
	span(_from, to) {
		if (this.lineStart > -1) {
			let end = Math.min(to, this.lineEnd), last = this.nodes[this.nodes.length - 1];
			if (last instanceof HeightMapText) last.length += end - this.pos;
			else if (end > this.pos || !this.isCovered) this.nodes.push(new HeightMapText(end - this.pos, -1, 0));
			this.writtenTo = end;
			if (to > end) {
				this.nodes.push(null);
				this.writtenTo++;
				this.lineStart = -1;
			}
		}
		this.pos = to;
	}
	point(from, to, deco) {
		if (from < to || deco.heightRelevant) {
			let height = deco.widget ? deco.widget.estimatedHeight : 0;
			let breaks = deco.widget ? deco.widget.lineBreaks : 0;
			if (height < 0) height = this.oracle.lineHeight;
			let len = to - from;
			if (deco.block) this.addBlock(new HeightMapBlock(len, height, deco));
			else if (len || breaks || height >= relevantWidgetHeight) this.addLineDeco(height, breaks, len);
		} else if (to > from) this.span(from, to);
		if (this.lineEnd > -1 && this.lineEnd < this.pos) this.lineEnd = this.oracle.doc.lineAt(this.pos).to;
	}
	enterLine() {
		if (this.lineStart > -1) return;
		let { from, to } = this.oracle.doc.lineAt(this.pos);
		this.lineStart = from;
		this.lineEnd = to;
		if (this.writtenTo < from) {
			if (this.writtenTo < from - 1 || this.nodes[this.nodes.length - 1] == null) this.nodes.push(this.blankContent(this.writtenTo, from - 1));
			this.nodes.push(null);
		}
		if (this.pos > from) this.nodes.push(new HeightMapText(this.pos - from, -1, 0));
		this.writtenTo = this.pos;
	}
	blankContent(from, to) {
		let gap = new HeightMapGap(to - from);
		if (this.oracle.doc.lineAt(from).to == to) gap.flags |= 4;
		return gap;
	}
	ensureLine() {
		this.enterLine();
		let last = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
		if (last instanceof HeightMapText) return last;
		let line = new HeightMapText(0, -1, 0);
		this.nodes.push(line);
		return line;
	}
	addBlock(block) {
		this.enterLine();
		let deco = block.deco;
		if (deco && deco.startSide > 0 && !this.isCovered) this.ensureLine();
		this.nodes.push(block);
		this.writtenTo = this.pos = this.pos + block.length;
		if (deco && deco.endSide > 0) this.covering = block;
	}
	addLineDeco(height, breaks, length) {
		let line = this.ensureLine();
		line.length += length;
		line.collapsed += length;
		line.widgetHeight = Math.max(line.widgetHeight, height);
		line.breaks += breaks;
		this.writtenTo = this.pos = this.pos + length;
	}
	finish(from) {
		let last = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
		if (this.lineStart > -1 && !(last instanceof HeightMapText) && !this.isCovered) this.nodes.push(new HeightMapText(0, -1, 0));
		else if (this.writtenTo < this.pos || last == null) this.nodes.push(this.blankContent(this.writtenTo, this.pos));
		let pos = from;
		for (let node of this.nodes) {
			if (node instanceof HeightMapText) node.updateHeight(this.oracle, pos);
			pos += node ? node.length : 1;
		}
		return this.nodes;
	}
	static build(oracle, decorations, from, to) {
		let builder = new NodeBuilder(from, oracle);
		RangeSet.spans(decorations, from, to, builder, 0);
		return builder.finish(from);
	}
};
function heightRelevantDecoChanges(a, b, diff) {
	let comp = new DecorationComparator();
	RangeSet.compare(a, b, diff, comp, 0);
	return comp.changes;
}
var DecorationComparator = class {
	constructor() {
		this.changes = [];
	}
	compareRange() {}
	comparePoint(from, to, a, b) {
		if (from < to || a && a.heightRelevant || b && b.heightRelevant) addRange(from, to, this.changes, 5);
	}
};
function visiblePixelRange(dom, paddingTop) {
	let rect = dom.getBoundingClientRect();
	let doc = dom.ownerDocument, win = doc.defaultView || window;
	let left = Math.max(0, rect.left), right = Math.min(win.innerWidth, rect.right);
	let top = Math.max(0, rect.top), bottom = Math.min(win.innerHeight, rect.bottom);
	for (let parent = dom.parentNode; parent && parent != doc.body;) if (parent.nodeType == 1) {
		let elt = parent;
		let style = window.getComputedStyle(elt);
		if ((elt.scrollHeight > elt.clientHeight || elt.scrollWidth > elt.clientWidth) && style.overflow != "visible") {
			let parentRect = elt.getBoundingClientRect();
			left = Math.max(left, parentRect.left);
			right = Math.min(right, parentRect.right);
			top = Math.max(top, parentRect.top);
			bottom = Math.min(parent == dom.parentNode ? win.innerHeight : bottom, parentRect.bottom);
		}
		parent = style.position == "absolute" || style.position == "fixed" ? elt.offsetParent : elt.parentNode;
	} else if (parent.nodeType == 11) parent = parent.host;
	else break;
	return {
		left: left - rect.left,
		right: Math.max(left, right) - rect.left,
		top: top - (rect.top + paddingTop),
		bottom: Math.max(top, bottom) - (rect.top + paddingTop)
	};
}
function inWindow(elt) {
	let rect = elt.getBoundingClientRect(), win = elt.ownerDocument.defaultView || window;
	return rect.left < win.innerWidth && rect.right > 0 && rect.top < win.innerHeight && rect.bottom > 0;
}
function fullPixelRange(dom, paddingTop) {
	let rect = dom.getBoundingClientRect();
	return {
		left: 0,
		right: rect.right - rect.left,
		top: paddingTop,
		bottom: rect.bottom - (rect.top + paddingTop)
	};
}
var LineGap = class {
	constructor(from, to, size, displaySize) {
		this.from = from;
		this.to = to;
		this.size = size;
		this.displaySize = displaySize;
	}
	static same(a, b) {
		if (a.length != b.length) return false;
		for (let i = 0; i < a.length; i++) {
			let gA = a[i], gB = b[i];
			if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size) return false;
		}
		return true;
	}
	draw(viewState, wrapping) {
		return Decoration.replace({ widget: new LineGapWidget(this.displaySize * (wrapping ? viewState.scaleY : viewState.scaleX), wrapping) }).range(this.from, this.to);
	}
};
var LineGapWidget = class extends WidgetType {
	constructor(size, vertical) {
		super();
		this.size = size;
		this.vertical = vertical;
	}
	eq(other) {
		return other.size == this.size && other.vertical == this.vertical;
	}
	toDOM() {
		let elt = document.createElement("div");
		if (this.vertical) elt.style.height = this.size + "px";
		else {
			elt.style.width = this.size + "px";
			elt.style.height = "2px";
			elt.style.display = "inline-block";
		}
		return elt;
	}
	get estimatedHeight() {
		return this.vertical ? this.size : -1;
	}
};
var ViewState = class {
	constructor(state) {
		this.state = state;
		this.pixelViewport = {
			left: 0,
			right: window.innerWidth,
			top: 0,
			bottom: 0
		};
		this.inView = true;
		this.paddingTop = 0;
		this.paddingBottom = 0;
		this.contentDOMWidth = 0;
		this.contentDOMHeight = 0;
		this.editorHeight = 0;
		this.editorWidth = 0;
		this.scrollTop = 0;
		this.scrolledToBottom = false;
		this.scaleX = 1;
		this.scaleY = 1;
		this.scrollAnchorPos = 0;
		this.scrollAnchorHeight = -1;
		this.scaler = IdScaler;
		this.scrollTarget = null;
		this.printing = false;
		this.mustMeasureContent = true;
		this.defaultTextDirection = Direction.LTR;
		this.visibleRanges = [];
		this.mustEnforceCursorAssoc = false;
		this.heightOracle = new HeightOracle(state.facet(contentAttributes).some((v) => typeof v != "function" && v.class == "cm-lineWrapping"));
		this.stateDeco = state.facet(decorations).filter((d) => typeof d != "function");
		this.heightMap = HeightMap.empty().applyChanges(this.stateDeco, Text.empty, this.heightOracle.setDoc(state.doc), [new ChangedRange(0, 0, 0, state.doc.length)]);
		for (let i = 0; i < 2; i++) {
			this.viewport = this.getViewport(0, null);
			if (!this.updateForViewport()) break;
		}
		this.updateViewportLines();
		this.lineGaps = this.ensureLineGaps([]);
		this.lineGapDeco = Decoration.set(this.lineGaps.map((gap) => gap.draw(this, false)));
		this.computeVisibleRanges();
	}
	updateForViewport() {
		let viewports = [this.viewport], { main } = this.state.selection;
		for (let i = 0; i <= 1; i++) {
			let pos = i ? main.head : main.anchor;
			if (!viewports.some(({ from, to }) => pos >= from && pos <= to)) {
				let { from, to } = this.lineBlockAt(pos);
				viewports.push(new Viewport(from, to));
			}
		}
		this.viewports = viewports.sort((a, b) => a.from - b.from);
		return this.updateScaler();
	}
	updateScaler() {
		let scaler = this.scaler;
		this.scaler = this.heightMap.height <= 7e6 ? IdScaler : new BigScaler(this.heightOracle, this.heightMap, this.viewports);
		return scaler.eq(this.scaler) ? 0 : 2;
	}
	updateViewportLines() {
		this.viewportLines = [];
		this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (block) => {
			this.viewportLines.push(scaleBlock(block, this.scaler));
		});
	}
	update(update, scrollTarget = null) {
		this.state = update.state;
		let prevDeco = this.stateDeco;
		this.stateDeco = this.state.facet(decorations).filter((d) => typeof d != "function");
		let contentChanges = update.changedRanges;
		let heightChanges = ChangedRange.extendWithRanges(contentChanges, heightRelevantDecoChanges(prevDeco, this.stateDeco, update ? update.changes : ChangeSet.empty(this.state.doc.length)));
		let prevHeight = this.heightMap.height;
		let scrollAnchor = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
		clearHeightChangeFlag();
		this.heightMap = this.heightMap.applyChanges(this.stateDeco, update.startState.doc, this.heightOracle.setDoc(this.state.doc), heightChanges);
		if (this.heightMap.height != prevHeight || heightChangeFlag) update.flags |= 2;
		if (scrollAnchor) {
			this.scrollAnchorPos = update.changes.mapPos(scrollAnchor.from, -1);
			this.scrollAnchorHeight = scrollAnchor.top;
		} else {
			this.scrollAnchorPos = -1;
			this.scrollAnchorHeight = prevHeight;
		}
		let viewport = heightChanges.length ? this.mapViewport(this.viewport, update.changes) : this.viewport;
		if (scrollTarget && (scrollTarget.range.head < viewport.from || scrollTarget.range.head > viewport.to) || !this.viewportIsAppropriate(viewport)) viewport = this.getViewport(0, scrollTarget);
		let viewportChange = viewport.from != this.viewport.from || viewport.to != this.viewport.to;
		this.viewport = viewport;
		update.flags |= this.updateForViewport();
		if (viewportChange || !update.changes.empty || update.flags & 2) this.updateViewportLines();
		if (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, update.changes)));
		update.flags |= this.computeVisibleRanges(update.changes);
		if (scrollTarget) this.scrollTarget = scrollTarget;
		if (!this.mustEnforceCursorAssoc && update.selectionSet && update.view.lineWrapping && update.state.selection.main.empty && update.state.selection.main.assoc && !update.state.facet(nativeSelectionHidden)) this.mustEnforceCursorAssoc = true;
	}
	measure(view) {
		let dom = view.contentDOM, style = window.getComputedStyle(dom);
		let oracle = this.heightOracle;
		let whiteSpace = style.whiteSpace;
		this.defaultTextDirection = style.direction == "rtl" ? Direction.RTL : Direction.LTR;
		let refresh = this.heightOracle.mustRefreshForWrapping(whiteSpace);
		let domRect = dom.getBoundingClientRect();
		let measureContent = refresh || this.mustMeasureContent || this.contentDOMHeight != domRect.height;
		this.contentDOMHeight = domRect.height;
		this.mustMeasureContent = false;
		let result = 0, bias = 0;
		if (domRect.width && domRect.height) {
			let { scaleX, scaleY } = getScale(dom, domRect);
			if (scaleX > .005 && Math.abs(this.scaleX - scaleX) > .005 || scaleY > .005 && Math.abs(this.scaleY - scaleY) > .005) {
				this.scaleX = scaleX;
				this.scaleY = scaleY;
				result |= 16;
				refresh = measureContent = true;
			}
		}
		let paddingTop = (parseInt(style.paddingTop) || 0) * this.scaleY;
		let paddingBottom = (parseInt(style.paddingBottom) || 0) * this.scaleY;
		if (this.paddingTop != paddingTop || this.paddingBottom != paddingBottom) {
			this.paddingTop = paddingTop;
			this.paddingBottom = paddingBottom;
			result |= 18;
		}
		if (this.editorWidth != view.scrollDOM.clientWidth) {
			if (oracle.lineWrapping) measureContent = true;
			this.editorWidth = view.scrollDOM.clientWidth;
			result |= 16;
		}
		let scrollTop = view.scrollDOM.scrollTop * this.scaleY;
		if (this.scrollTop != scrollTop) {
			this.scrollAnchorHeight = -1;
			this.scrollTop = scrollTop;
		}
		this.scrolledToBottom = isScrolledToBottom(view.scrollDOM);
		let pixelViewport = (this.printing ? fullPixelRange : visiblePixelRange)(dom, this.paddingTop);
		let dTop = pixelViewport.top - this.pixelViewport.top, dBottom = pixelViewport.bottom - this.pixelViewport.bottom;
		this.pixelViewport = pixelViewport;
		let inView = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
		if (inView != this.inView) {
			this.inView = inView;
			if (inView) measureContent = true;
		}
		if (!this.inView && !this.scrollTarget && !inWindow(view.dom)) return 0;
		let contentWidth = domRect.width;
		if (this.contentDOMWidth != contentWidth || this.editorHeight != view.scrollDOM.clientHeight) {
			this.contentDOMWidth = domRect.width;
			this.editorHeight = view.scrollDOM.clientHeight;
			result |= 16;
		}
		if (measureContent) {
			let lineHeights = view.docView.measureVisibleLineHeights(this.viewport);
			if (oracle.mustRefreshForHeights(lineHeights)) refresh = true;
			if (refresh || oracle.lineWrapping && Math.abs(contentWidth - this.contentDOMWidth) > oracle.charWidth) {
				let { lineHeight, charWidth, textHeight } = view.docView.measureTextSize();
				refresh = lineHeight > 0 && oracle.refresh(whiteSpace, lineHeight, charWidth, textHeight, Math.max(5, contentWidth / charWidth), lineHeights);
				if (refresh) {
					view.docView.minWidth = 0;
					result |= 16;
				}
			}
			if (dTop > 0 && dBottom > 0) bias = Math.max(dTop, dBottom);
			else if (dTop < 0 && dBottom < 0) bias = Math.min(dTop, dBottom);
			clearHeightChangeFlag();
			for (let vp of this.viewports) {
				let heights = vp.from == this.viewport.from ? lineHeights : view.docView.measureVisibleLineHeights(vp);
				this.heightMap = (refresh ? HeightMap.empty().applyChanges(this.stateDeco, Text.empty, this.heightOracle, [new ChangedRange(0, 0, 0, view.state.doc.length)]) : this.heightMap).updateHeight(oracle, 0, refresh, new MeasuredHeights(vp.from, heights));
			}
			if (heightChangeFlag) result |= 2;
		}
		let viewportChange = !this.viewportIsAppropriate(this.viewport, bias) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
		if (viewportChange) {
			if (result & 2) result |= this.updateScaler();
			this.viewport = this.getViewport(bias, this.scrollTarget);
			result |= this.updateForViewport();
		}
		if (result & 2 || viewportChange) this.updateViewportLines();
		if (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) this.updateLineGaps(this.ensureLineGaps(refresh ? [] : this.lineGaps, view));
		result |= this.computeVisibleRanges();
		if (this.mustEnforceCursorAssoc) {
			this.mustEnforceCursorAssoc = false;
			view.docView.enforceCursorAssoc();
		}
		return result;
	}
	get visibleTop() {
		return this.scaler.fromDOM(this.pixelViewport.top);
	}
	get visibleBottom() {
		return this.scaler.fromDOM(this.pixelViewport.bottom);
	}
	getViewport(bias, scrollTarget) {
		let marginTop = .5 - Math.max(-.5, Math.min(.5, bias / 1e3 / 2));
		let map = this.heightMap, oracle = this.heightOracle;
		let { visibleTop, visibleBottom } = this;
		let viewport = new Viewport(map.lineAt(visibleTop - marginTop * 1e3, QueryType.ByHeight, oracle, 0, 0).from, map.lineAt(visibleBottom + (1 - marginTop) * 1e3, QueryType.ByHeight, oracle, 0, 0).to);
		if (scrollTarget) {
			let { head } = scrollTarget.range;
			if (head < viewport.from || head > viewport.to) {
				let viewHeight = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top);
				let block = map.lineAt(head, QueryType.ByPos, oracle, 0, 0), topPos;
				if (scrollTarget.y == "center") topPos = (block.top + block.bottom) / 2 - viewHeight / 2;
				else if (scrollTarget.y == "start" || scrollTarget.y == "nearest" && head < viewport.from) topPos = block.top;
				else topPos = block.bottom - viewHeight;
				viewport = new Viewport(map.lineAt(topPos - 1e3 / 2, QueryType.ByHeight, oracle, 0, 0).from, map.lineAt(topPos + viewHeight + 1e3 / 2, QueryType.ByHeight, oracle, 0, 0).to);
			}
		}
		return viewport;
	}
	mapViewport(viewport, changes) {
		let from = changes.mapPos(viewport.from, -1), to = changes.mapPos(viewport.to, 1);
		return new Viewport(this.heightMap.lineAt(from, QueryType.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(to, QueryType.ByPos, this.heightOracle, 0, 0).to);
	}
	viewportIsAppropriate({ from, to }, bias = 0) {
		if (!this.inView) return true;
		let { top } = this.heightMap.lineAt(from, QueryType.ByPos, this.heightOracle, 0, 0);
		let { bottom } = this.heightMap.lineAt(to, QueryType.ByPos, this.heightOracle, 0, 0);
		let { visibleTop, visibleBottom } = this;
		return (from == 0 || top <= visibleTop - Math.max(10, Math.min(-bias, 250))) && (to == this.state.doc.length || bottom >= visibleBottom + Math.max(10, Math.min(bias, 250))) && top > visibleTop - 2 * 1e3 && bottom < visibleBottom + 2 * 1e3;
	}
	mapLineGaps(gaps, changes) {
		if (!gaps.length || changes.empty) return gaps;
		let mapped = [];
		for (let gap of gaps) if (!changes.touchesRange(gap.from, gap.to)) mapped.push(new LineGap(changes.mapPos(gap.from), changes.mapPos(gap.to), gap.size, gap.displaySize));
		return mapped;
	}
	ensureLineGaps(current, mayMeasure) {
		let wrapping = this.heightOracle.lineWrapping;
		let margin = wrapping ? 1e4 : 2e3, halfMargin = margin >> 1, doubleMargin = margin << 1;
		if (this.defaultTextDirection != Direction.LTR && !wrapping) return [];
		let gaps = [];
		let addGap = (from, to, line, structure) => {
			if (to - from < halfMargin) return;
			let sel = this.state.selection.main, avoid = [sel.from];
			if (!sel.empty) avoid.push(sel.to);
			for (let pos of avoid) if (pos > from && pos < to) {
				addGap(from, pos - 10, line, structure);
				addGap(pos + 10, to, line, structure);
				return;
			}
			let gap = find(current, (gap) => gap.from >= line.from && gap.to <= line.to && Math.abs(gap.from - from) < halfMargin && Math.abs(gap.to - to) < halfMargin && !avoid.some((pos) => gap.from < pos && gap.to > pos));
			if (!gap) {
				if (to < line.to && mayMeasure && wrapping && mayMeasure.visibleRanges.some((r) => r.from <= to && r.to >= to)) {
					let lineStart = mayMeasure.moveToLineBoundary(EditorSelection.cursor(to), false, true).head;
					if (lineStart > from) to = lineStart;
				}
				let size = this.gapSize(line, from, to, structure);
				gap = new LineGap(from, to, size, wrapping || size < 2e6 ? size : 2e6);
			}
			gaps.push(gap);
		};
		let checkLine = (line) => {
			if (line.length < doubleMargin || line.type != BlockType.Text) return;
			let structure = lineStructure(line.from, line.to, this.stateDeco);
			if (structure.total < doubleMargin) return;
			let target = this.scrollTarget ? this.scrollTarget.range.head : null;
			let viewFrom, viewTo;
			if (wrapping) {
				let marginHeight = margin / this.heightOracle.lineLength * this.heightOracle.lineHeight;
				let top, bot;
				if (target != null) {
					let targetFrac = findFraction(structure, target);
					let spaceFrac = ((this.visibleBottom - this.visibleTop) / 2 + marginHeight) / line.height;
					top = targetFrac - spaceFrac;
					bot = targetFrac + spaceFrac;
				} else {
					top = (this.visibleTop - line.top - marginHeight) / line.height;
					bot = (this.visibleBottom - line.top + marginHeight) / line.height;
				}
				viewFrom = findPosition(structure, top);
				viewTo = findPosition(structure, bot);
			} else {
				let totalWidth = structure.total * this.heightOracle.charWidth;
				let marginWidth = margin * this.heightOracle.charWidth;
				let horizOffset = 0;
				if (totalWidth > 2e6) {
					for (let old of current) if (old.from >= line.from && old.from < line.to && old.size != old.displaySize && old.from * this.heightOracle.charWidth + horizOffset < this.pixelViewport.left) horizOffset = old.size - old.displaySize;
				}
				let pxLeft = this.pixelViewport.left + horizOffset, pxRight = this.pixelViewport.right + horizOffset;
				let left, right;
				if (target != null) {
					let targetFrac = findFraction(structure, target);
					let spaceFrac = ((pxRight - pxLeft) / 2 + marginWidth) / totalWidth;
					left = targetFrac - spaceFrac;
					right = targetFrac + spaceFrac;
				} else {
					left = (pxLeft - marginWidth) / totalWidth;
					right = (pxRight + marginWidth) / totalWidth;
				}
				viewFrom = findPosition(structure, left);
				viewTo = findPosition(structure, right);
			}
			if (viewFrom > line.from) addGap(line.from, viewFrom, line, structure);
			if (viewTo < line.to) addGap(viewTo, line.to, line, structure);
		};
		for (let line of this.viewportLines) if (Array.isArray(line.type)) line.type.forEach(checkLine);
		else checkLine(line);
		return gaps;
	}
	gapSize(line, from, to, structure) {
		let fraction = findFraction(structure, to) - findFraction(structure, from);
		if (this.heightOracle.lineWrapping) return line.height * fraction;
		else return structure.total * this.heightOracle.charWidth * fraction;
	}
	updateLineGaps(gaps) {
		if (!LineGap.same(gaps, this.lineGaps)) {
			this.lineGaps = gaps;
			this.lineGapDeco = Decoration.set(gaps.map((gap) => gap.draw(this, this.heightOracle.lineWrapping)));
		}
	}
	computeVisibleRanges(changes) {
		let deco = this.stateDeco;
		if (this.lineGaps.length) deco = deco.concat(this.lineGapDeco);
		let ranges = [];
		RangeSet.spans(deco, this.viewport.from, this.viewport.to, {
			span(from, to) {
				ranges.push({
					from,
					to
				});
			},
			point() {}
		}, 20);
		let changed = 0;
		if (ranges.length != this.visibleRanges.length) changed = 12;
		else for (let i = 0; i < ranges.length && !(changed & 8); i++) {
			let old = this.visibleRanges[i], nw = ranges[i];
			if (old.from != nw.from || old.to != nw.to) {
				changed |= 4;
				if (!(changes && changes.mapPos(old.from, -1) == nw.from && changes.mapPos(old.to, 1) == nw.to)) changed |= 8;
			}
		}
		this.visibleRanges = ranges;
		return changed;
	}
	lineBlockAt(pos) {
		return pos >= this.viewport.from && pos <= this.viewport.to && this.viewportLines.find((b) => b.from <= pos && b.to >= pos) || scaleBlock(this.heightMap.lineAt(pos, QueryType.ByPos, this.heightOracle, 0, 0), this.scaler);
	}
	lineBlockAtHeight(height) {
		return height >= this.viewportLines[0].top && height <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((l) => l.top <= height && l.bottom >= height) || scaleBlock(this.heightMap.lineAt(this.scaler.fromDOM(height), QueryType.ByHeight, this.heightOracle, 0, 0), this.scaler);
	}
	scrollAnchorAt(scrollTop) {
		let block = this.lineBlockAtHeight(scrollTop + 8);
		return block.from >= this.viewport.from || this.viewportLines[0].top - scrollTop > 200 ? block : this.viewportLines[0];
	}
	elementAtHeight(height) {
		return scaleBlock(this.heightMap.blockAt(this.scaler.fromDOM(height), this.heightOracle, 0, 0), this.scaler);
	}
	get docHeight() {
		return this.scaler.toDOM(this.heightMap.height);
	}
	get contentHeight() {
		return this.docHeight + this.paddingTop + this.paddingBottom;
	}
};
var Viewport = class {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}
};
function lineStructure(from, to, stateDeco) {
	let ranges = [], pos = from, total = 0;
	RangeSet.spans(stateDeco, from, to, {
		span() {},
		point(from, to) {
			if (from > pos) {
				ranges.push({
					from: pos,
					to: from
				});
				total += from - pos;
			}
			pos = to;
		}
	}, 20);
	if (pos < to) {
		ranges.push({
			from: pos,
			to
		});
		total += to - pos;
	}
	return {
		total,
		ranges
	};
}
function findPosition({ total, ranges }, ratio) {
	if (ratio <= 0) return ranges[0].from;
	if (ratio >= 1) return ranges[ranges.length - 1].to;
	let dist = Math.floor(total * ratio);
	for (let i = 0;; i++) {
		let { from, to } = ranges[i], size = to - from;
		if (dist <= size) return from + dist;
		dist -= size;
	}
}
function findFraction(structure, pos) {
	let counted = 0;
	for (let { from, to } of structure.ranges) {
		if (pos <= to) {
			counted += pos - from;
			break;
		}
		counted += to - from;
	}
	return counted / structure.total;
}
function find(array, f) {
	for (let val of array) if (f(val)) return val;
}
var IdScaler = {
	toDOM(n) {
		return n;
	},
	fromDOM(n) {
		return n;
	},
	scale: 1,
	eq(other) {
		return other == this;
	}
};
var BigScaler = class BigScaler {
	constructor(oracle, heightMap, viewports) {
		let vpHeight = 0, base = 0, domBase = 0;
		this.viewports = viewports.map(({ from, to }) => {
			let top = heightMap.lineAt(from, QueryType.ByPos, oracle, 0, 0).top;
			let bottom = heightMap.lineAt(to, QueryType.ByPos, oracle, 0, 0).bottom;
			vpHeight += bottom - top;
			return {
				from,
				to,
				top,
				bottom,
				domTop: 0,
				domBottom: 0
			};
		});
		this.scale = (7e6 - vpHeight) / (heightMap.height - vpHeight);
		for (let obj of this.viewports) {
			obj.domTop = domBase + (obj.top - base) * this.scale;
			domBase = obj.domBottom = obj.domTop + (obj.bottom - obj.top);
			base = obj.bottom;
		}
	}
	toDOM(n) {
		for (let i = 0, base = 0, domBase = 0;; i++) {
			let vp = i < this.viewports.length ? this.viewports[i] : null;
			if (!vp || n < vp.top) return domBase + (n - base) * this.scale;
			if (n <= vp.bottom) return vp.domTop + (n - vp.top);
			base = vp.bottom;
			domBase = vp.domBottom;
		}
	}
	fromDOM(n) {
		for (let i = 0, base = 0, domBase = 0;; i++) {
			let vp = i < this.viewports.length ? this.viewports[i] : null;
			if (!vp || n < vp.domTop) return base + (n - domBase) / this.scale;
			if (n <= vp.domBottom) return vp.top + (n - vp.domTop);
			base = vp.bottom;
			domBase = vp.domBottom;
		}
	}
	eq(other) {
		if (!(other instanceof BigScaler)) return false;
		return this.scale == other.scale && this.viewports.length == other.viewports.length && this.viewports.every((vp, i) => vp.from == other.viewports[i].from && vp.to == other.viewports[i].to);
	}
};
function scaleBlock(block, scaler) {
	if (scaler.scale == 1) return block;
	let bTop = scaler.toDOM(block.top), bBottom = scaler.toDOM(block.bottom);
	return new BlockInfo(block.from, block.length, bTop, bBottom - bTop, Array.isArray(block._content) ? block._content.map((b) => scaleBlock(b, scaler)) : block._content);
}
var theme = /* @__PURE__ */ Facet.define({ combine: (strs) => strs.join(" ") });
var darkTheme = /* @__PURE__ */ Facet.define({ combine: (values) => values.indexOf(true) > -1 });
var baseThemeID = /* @__PURE__ */ StyleModule.newName(), baseLightID = /* @__PURE__ */ StyleModule.newName(), baseDarkID = /* @__PURE__ */ StyleModule.newName();
var lightDarkIDs = {
	"&light": "." + baseLightID,
	"&dark": "." + baseDarkID
};
function buildTheme(main, spec, scopes) {
	return new StyleModule(spec, { finish(sel) {
		return /&/.test(sel) ? sel.replace(/&\w*/, (m) => {
			if (m == "&") return main;
			if (!scopes || !scopes[m]) throw new RangeError(`Unsupported selector: ${m}`);
			return scopes[m];
		}) : main + " " + sel;
	} });
}
var baseTheme$1$3 = /* @__PURE__ */ buildTheme("." + baseThemeID, {
	"&": {
		position: "relative !important",
		boxSizing: "border-box",
		"&.cm-focused": { outline: "1px dotted #212121" },
		display: "flex !important",
		flexDirection: "column"
	},
	".cm-scroller": {
		display: "flex !important",
		alignItems: "flex-start !important",
		fontFamily: "monospace",
		lineHeight: 1.4,
		height: "100%",
		overflowX: "auto",
		position: "relative",
		zIndex: 0,
		overflowAnchor: "none"
	},
	".cm-content": {
		margin: 0,
		flexGrow: 2,
		flexShrink: 0,
		display: "block",
		whiteSpace: "pre",
		wordWrap: "normal",
		boxSizing: "border-box",
		minHeight: "100%",
		padding: "4px 0",
		outline: "none",
		"&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" }
	},
	".cm-lineWrapping": {
		whiteSpace_fallback: "pre-wrap",
		whiteSpace: "break-spaces",
		wordBreak: "break-word",
		overflowWrap: "anywhere",
		flexShrink: 1
	},
	"&light .cm-content": { caretColor: "black" },
	"&dark .cm-content": { caretColor: "white" },
	".cm-line": {
		display: "block",
		padding: "0 2px 0 6px"
	},
	".cm-layer": {
		position: "absolute",
		left: 0,
		top: 0,
		contain: "size style",
		"& > *": { position: "absolute" }
	},
	"&light .cm-selectionBackground": { background: "#d9d9d9" },
	"&dark .cm-selectionBackground": { background: "#222" },
	"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" },
	"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" },
	".cm-cursorLayer": { pointerEvents: "none" },
	"&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" },
	"@keyframes cm-blink": {
		"0%": {},
		"50%": { opacity: 0 },
		"100%": {}
	},
	"@keyframes cm-blink2": {
		"0%": {},
		"50%": { opacity: 0 },
		"100%": {}
	},
	".cm-cursor, .cm-dropCursor": {
		borderLeft: "1.2px solid black",
		marginLeft: "-0.6px",
		pointerEvents: "none"
	},
	".cm-cursor": { display: "none" },
	"&dark .cm-cursor": { borderLeftColor: "#ddd" },
	".cm-dropCursor": { position: "absolute" },
	"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" },
	".cm-iso": { unicodeBidi: "isolate" },
	".cm-announced": {
		position: "fixed",
		top: "-10000px"
	},
	"@media print": { ".cm-announced": { display: "none" } },
	"&light .cm-activeLine": { backgroundColor: "#cceeff44" },
	"&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
	"&light .cm-specialChar": { color: "red" },
	"&dark .cm-specialChar": { color: "#f78" },
	".cm-gutters": {
		flexShrink: 0,
		display: "flex",
		height: "100%",
		boxSizing: "border-box",
		zIndex: 200
	},
	".cm-gutters-before": { insetInlineStart: 0 },
	".cm-gutters-after": { insetInlineEnd: 0 },
	"&light .cm-gutters": {
		backgroundColor: "#f5f5f5",
		color: "#6c6c6c",
		border: "0px solid #ddd",
		"&.cm-gutters-before": { borderRightWidth: "1px" },
		"&.cm-gutters-after": { borderLeftWidth: "1px" }
	},
	"&dark .cm-gutters": {
		backgroundColor: "#333338",
		color: "#ccc"
	},
	".cm-gutter": {
		display: "flex !important",
		flexDirection: "column",
		flexShrink: 0,
		boxSizing: "border-box",
		minHeight: "100%",
		overflow: "hidden"
	},
	".cm-gutterElement": { boxSizing: "border-box" },
	".cm-lineNumbers .cm-gutterElement": {
		padding: "0 3px 0 5px",
		minWidth: "20px",
		textAlign: "right",
		whiteSpace: "nowrap"
	},
	"&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" },
	"&dark .cm-activeLineGutter": { backgroundColor: "#222227" },
	".cm-panels": {
		boxSizing: "border-box",
		position: "sticky",
		left: 0,
		right: 0,
		zIndex: 300
	},
	"&light .cm-panels": {
		backgroundColor: "#f5f5f5",
		color: "black"
	},
	"&light .cm-panels-top": { borderBottom: "1px solid #ddd" },
	"&light .cm-panels-bottom": { borderTop: "1px solid #ddd" },
	"&dark .cm-panels": {
		backgroundColor: "#333338",
		color: "white"
	},
	".cm-dialog": {
		padding: "2px 19px 4px 6px",
		position: "relative",
		"& label": { fontSize: "80%" }
	},
	".cm-dialog-close": {
		position: "absolute",
		top: "3px",
		right: "4px",
		backgroundColor: "inherit",
		border: "none",
		font: "inherit",
		fontSize: "14px",
		padding: "0"
	},
	".cm-tab": {
		display: "inline-block",
		overflow: "hidden",
		verticalAlign: "bottom"
	},
	".cm-widgetBuffer": {
		verticalAlign: "text-top",
		height: "1em",
		width: 0,
		display: "inline"
	},
	".cm-placeholder": {
		color: "#888",
		display: "inline-block",
		verticalAlign: "top",
		userSelect: "none"
	},
	".cm-highlightSpace": {
		backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
		backgroundPosition: "center"
	},
	".cm-highlightTab": {
		backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
		backgroundSize: "auto 100%",
		backgroundPosition: "right 90%",
		backgroundRepeat: "no-repeat"
	},
	".cm-trailingSpace": { backgroundColor: "#ff332255" },
	".cm-button": {
		verticalAlign: "middle",
		color: "inherit",
		fontSize: "70%",
		padding: ".2em 1em",
		borderRadius: "1px"
	},
	"&light .cm-button": {
		backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
		border: "1px solid #888",
		"&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" }
	},
	"&dark .cm-button": {
		backgroundImage: "linear-gradient(#393939, #111)",
		border: "1px solid #888",
		"&:active": { backgroundImage: "linear-gradient(#111, #333)" }
	},
	".cm-textfield": {
		verticalAlign: "middle",
		color: "inherit",
		fontSize: "70%",
		border: "1px solid silver",
		padding: ".2em .5em"
	},
	"&light .cm-textfield": { backgroundColor: "white" },
	"&dark .cm-textfield": {
		border: "1px solid #555",
		backgroundColor: "inherit"
	}
}, lightDarkIDs);
var observeOptions = {
	childList: true,
	characterData: true,
	subtree: true,
	attributes: true,
	characterDataOldValue: true
};
var useCharData = browser.ie && browser.ie_version <= 11;
var DOMObserver = class {
	constructor(view) {
		this.view = view;
		this.active = false;
		this.editContext = null;
		this.selectionRange = new DOMSelectionState();
		this.selectionChanged = false;
		this.delayedFlush = -1;
		this.resizeTimeout = -1;
		this.queue = [];
		this.delayedAndroidKey = null;
		this.flushingAndroidKey = -1;
		this.lastChange = 0;
		this.scrollTargets = [];
		this.intersection = null;
		this.resizeScroll = null;
		this.intersecting = false;
		this.gapIntersection = null;
		this.gaps = [];
		this.printQuery = null;
		this.parentCheck = -1;
		this.dom = view.contentDOM;
		this.observer = new MutationObserver((mutations) => {
			for (let mut of mutations) this.queue.push(mut);
			if ((browser.ie && browser.ie_version <= 11 || browser.ios && view.composing) && mutations.some((m) => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length)) this.flushSoon();
			else this.flush();
		});
		if (window.EditContext && browser.android && view.constructor.EDIT_CONTEXT !== false && !(browser.chrome && browser.chrome_version < 126)) {
			this.editContext = new EditContextManager(view);
			if (view.state.facet(editable)) view.contentDOM.editContext = this.editContext.editContext;
		}
		if (useCharData) this.onCharData = (event) => {
			this.queue.push({
				target: event.target,
				type: "characterData",
				oldValue: event.prevValue
			});
			this.flushSoon();
		};
		this.onSelectionChange = this.onSelectionChange.bind(this);
		this.onResize = this.onResize.bind(this);
		this.onPrint = this.onPrint.bind(this);
		this.onScroll = this.onScroll.bind(this);
		if (window.matchMedia) this.printQuery = window.matchMedia("print");
		if (typeof ResizeObserver == "function") {
			this.resizeScroll = new ResizeObserver(() => {
				var _a;
				if (((_a = this.view.docView) === null || _a === void 0 ? void 0 : _a.lastUpdate) < Date.now() - 75) this.onResize();
			});
			this.resizeScroll.observe(view.scrollDOM);
		}
		this.addWindowListeners(this.win = view.win);
		this.start();
		if (typeof IntersectionObserver == "function") {
			this.intersection = new IntersectionObserver((entries) => {
				if (this.parentCheck < 0) this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3);
				if (entries.length > 0 && entries[entries.length - 1].intersectionRatio > 0 != this.intersecting) {
					this.intersecting = !this.intersecting;
					if (this.intersecting != this.view.inView) this.onScrollChanged(document.createEvent("Event"));
				}
			}, { threshold: [0, .001] });
			this.intersection.observe(this.dom);
			this.gapIntersection = new IntersectionObserver((entries) => {
				if (entries.length > 0 && entries[entries.length - 1].intersectionRatio > 0) this.onScrollChanged(document.createEvent("Event"));
			}, {});
		}
		this.listenForScroll();
		this.readSelectionRange();
	}
	onScrollChanged(e) {
		this.view.inputState.runHandlers("scroll", e);
		if (this.intersecting) this.view.measure();
	}
	onScroll(e) {
		if (this.intersecting) this.flush(false);
		if (this.editContext) this.view.requestMeasure(this.editContext.measureReq);
		this.onScrollChanged(e);
	}
	onResize() {
		if (this.resizeTimeout < 0) this.resizeTimeout = setTimeout(() => {
			this.resizeTimeout = -1;
			this.view.requestMeasure();
		}, 50);
	}
	onPrint(event) {
		if ((event.type == "change" || !event.type) && !event.matches) return;
		this.view.viewState.printing = true;
		this.view.measure();
		setTimeout(() => {
			this.view.viewState.printing = false;
			this.view.requestMeasure();
		}, 500);
	}
	updateGaps(gaps) {
		if (this.gapIntersection && (gaps.length != this.gaps.length || this.gaps.some((g, i) => g != gaps[i]))) {
			this.gapIntersection.disconnect();
			for (let gap of gaps) this.gapIntersection.observe(gap);
			this.gaps = gaps;
		}
	}
	onSelectionChange(event) {
		let wasChanged = this.selectionChanged;
		if (!this.readSelectionRange() || this.delayedAndroidKey) return;
		let { view } = this, sel = this.selectionRange;
		if (view.state.facet(editable) ? view.root.activeElement != this.dom : !hasSelection(this.dom, sel)) return;
		let context = sel.anchorNode && view.docView.tile.nearest(sel.anchorNode);
		if (context && context.isWidget() && context.widget.ignoreEvent(event)) {
			if (!wasChanged) this.selectionChanged = false;
			return;
		}
		if ((browser.ie && browser.ie_version <= 11 || browser.android && browser.chrome) && !view.state.selection.main.empty && sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) this.flushSoon();
		else this.flush(false);
	}
	readSelectionRange() {
		let { view } = this;
		let selection = getSelection(view.root);
		if (!selection) return false;
		let range = browser.safari && view.root.nodeType == 11 && view.root.activeElement == this.dom && safariSelectionRangeHack(this.view, selection) || selection;
		if (!range || this.selectionRange.eq(range)) return false;
		let local = hasSelection(this.dom, range);
		if (local && !this.selectionChanged && view.inputState.lastFocusTime > Date.now() - 200 && view.inputState.lastTouchTime < Date.now() - 300 && atElementStart(this.dom, range)) {
			this.view.inputState.lastFocusTime = 0;
			view.docView.updateSelection();
			return false;
		}
		this.selectionRange.setRange(range);
		if (local) this.selectionChanged = true;
		return true;
	}
	setSelectionRange(anchor, head) {
		this.selectionRange.set(anchor.node, anchor.offset, head.node, head.offset);
		this.selectionChanged = false;
	}
	clearSelectionRange() {
		this.selectionRange.set(null, 0, null, 0);
	}
	listenForScroll() {
		this.parentCheck = -1;
		let i = 0, changed = null;
		for (let dom = this.dom; dom;) if (dom.nodeType == 1) {
			if (!changed && i < this.scrollTargets.length && this.scrollTargets[i] == dom) i++;
			else if (!changed) changed = this.scrollTargets.slice(0, i);
			if (changed) changed.push(dom);
			dom = dom.assignedSlot || dom.parentNode;
		} else if (dom.nodeType == 11) dom = dom.host;
		else break;
		if (i < this.scrollTargets.length && !changed) changed = this.scrollTargets.slice(0, i);
		if (changed) {
			for (let dom of this.scrollTargets) dom.removeEventListener("scroll", this.onScroll);
			for (let dom of this.scrollTargets = changed) dom.addEventListener("scroll", this.onScroll);
		}
	}
	ignore(f) {
		if (!this.active) return f();
		try {
			this.stop();
			return f();
		} finally {
			this.start();
			this.clear();
		}
	}
	start() {
		if (this.active) return;
		this.observer.observe(this.dom, observeOptions);
		if (useCharData) this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
		this.active = true;
	}
	stop() {
		if (!this.active) return;
		this.active = false;
		this.observer.disconnect();
		if (useCharData) this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
	}
	clear() {
		this.processRecords();
		this.queue.length = 0;
		this.selectionChanged = false;
	}
	delayAndroidKey(key, keyCode) {
		var _a;
		if (!this.delayedAndroidKey) {
			let flush = () => {
				let key = this.delayedAndroidKey;
				if (key) {
					this.clearDelayedAndroidKey();
					this.view.inputState.lastKeyCode = key.keyCode;
					this.view.inputState.lastKeyTime = Date.now();
					if (!this.flush() && key.force) dispatchKey(this.dom, key.key, key.keyCode);
				}
			};
			this.flushingAndroidKey = this.view.win.requestAnimationFrame(flush);
		}
		if (!this.delayedAndroidKey || key == "Enter") this.delayedAndroidKey = {
			key,
			keyCode,
			force: this.lastChange < Date.now() - 50 || !!((_a = this.delayedAndroidKey) === null || _a === void 0 ? void 0 : _a.force)
		};
	}
	clearDelayedAndroidKey() {
		this.win.cancelAnimationFrame(this.flushingAndroidKey);
		this.delayedAndroidKey = null;
		this.flushingAndroidKey = -1;
	}
	flushSoon() {
		if (this.delayedFlush < 0) this.delayedFlush = this.view.win.requestAnimationFrame(() => {
			this.delayedFlush = -1;
			this.flush();
		});
	}
	forceFlush() {
		if (this.delayedFlush >= 0) {
			this.view.win.cancelAnimationFrame(this.delayedFlush);
			this.delayedFlush = -1;
		}
		this.flush();
	}
	pendingRecords() {
		for (let mut of this.observer.takeRecords()) this.queue.push(mut);
		return this.queue;
	}
	processRecords() {
		let records = this.pendingRecords();
		if (records.length) this.queue = [];
		let from = -1, to = -1, typeOver = false;
		for (let record of records) {
			let range = this.readMutation(record);
			if (!range) continue;
			if (range.typeOver) typeOver = true;
			if (from == -1) ({from, to} = range);
			else {
				from = Math.min(range.from, from);
				to = Math.max(range.to, to);
			}
		}
		return {
			from,
			to,
			typeOver
		};
	}
	readChange() {
		let { from, to, typeOver } = this.processRecords();
		let newSel = this.selectionChanged && hasSelection(this.dom, this.selectionRange);
		if (from < 0 && !newSel) return null;
		if (from > -1) this.lastChange = Date.now();
		this.view.inputState.lastFocusTime = 0;
		this.selectionChanged = false;
		let change = new DOMChange(this.view, from, to, typeOver);
		this.view.docView.domChanged = { newSel: change.newSel ? change.newSel.main : null };
		return change;
	}
	flush(readSelection = true) {
		if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
		if (readSelection) this.readSelectionRange();
		let domChange = this.readChange();
		if (!domChange) {
			this.view.requestMeasure();
			return false;
		}
		let startState = this.view.state;
		let handled = applyDOMChange(this.view, domChange);
		if (this.view.state == startState && (domChange.domChanged || domChange.newSel && !domChange.newSel.main.eq(this.view.state.selection.main))) this.view.update([]);
		return handled;
	}
	readMutation(rec) {
		let tile = this.view.docView.tile.nearest(rec.target);
		if (!tile || tile.isWidget()) return null;
		tile.markDirty(rec.type == "attributes");
		if (rec.type == "childList") {
			let childBefore = findChild(tile, rec.previousSibling || rec.target.previousSibling, -1);
			let childAfter = findChild(tile, rec.nextSibling || rec.target.nextSibling, 1);
			return {
				from: childBefore ? tile.posAfter(childBefore) : tile.posAtStart,
				to: childAfter ? tile.posBefore(childAfter) : tile.posAtEnd,
				typeOver: false
			};
		} else if (rec.type == "characterData") return {
			from: tile.posAtStart,
			to: tile.posAtEnd,
			typeOver: rec.target.nodeValue == rec.oldValue
		};
		else return null;
	}
	setWindow(win) {
		if (win != this.win) {
			this.removeWindowListeners(this.win);
			this.win = win;
			this.addWindowListeners(this.win);
		}
	}
	addWindowListeners(win) {
		win.addEventListener("resize", this.onResize);
		if (this.printQuery) if (this.printQuery.addEventListener) this.printQuery.addEventListener("change", this.onPrint);
		else this.printQuery.addListener(this.onPrint);
		else win.addEventListener("beforeprint", this.onPrint);
		win.addEventListener("scroll", this.onScroll);
		win.document.addEventListener("selectionchange", this.onSelectionChange);
	}
	removeWindowListeners(win) {
		win.removeEventListener("scroll", this.onScroll);
		win.removeEventListener("resize", this.onResize);
		if (this.printQuery) if (this.printQuery.removeEventListener) this.printQuery.removeEventListener("change", this.onPrint);
		else this.printQuery.removeListener(this.onPrint);
		else win.removeEventListener("beforeprint", this.onPrint);
		win.document.removeEventListener("selectionchange", this.onSelectionChange);
	}
	update(update) {
		if (this.editContext) {
			this.editContext.update(update);
			if (update.startState.facet(editable) != update.state.facet(editable)) update.view.contentDOM.editContext = update.state.facet(editable) ? this.editContext.editContext : null;
		}
	}
	destroy() {
		var _a, _b, _c;
		this.stop();
		(_a = this.intersection) === null || _a === void 0 || _a.disconnect();
		(_b = this.gapIntersection) === null || _b === void 0 || _b.disconnect();
		(_c = this.resizeScroll) === null || _c === void 0 || _c.disconnect();
		for (let dom of this.scrollTargets) dom.removeEventListener("scroll", this.onScroll);
		this.removeWindowListeners(this.win);
		clearTimeout(this.parentCheck);
		clearTimeout(this.resizeTimeout);
		this.win.cancelAnimationFrame(this.delayedFlush);
		this.win.cancelAnimationFrame(this.flushingAndroidKey);
		if (this.editContext) {
			this.view.contentDOM.editContext = null;
			this.editContext.destroy();
		}
	}
};
function findChild(tile, dom, dir) {
	while (dom) {
		let curTile = Tile.get(dom);
		if (curTile && curTile.parent == tile) return curTile;
		let parent = dom.parentNode;
		dom = parent != tile.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;
	}
	return null;
}
function buildSelectionRangeFromRange(view, range) {
	let anchorNode = range.startContainer, anchorOffset = range.startOffset;
	let focusNode = range.endContainer, focusOffset = range.endOffset;
	let curAnchor = view.docView.domAtPos(view.state.selection.main.anchor, 1);
	if (isEquivalentPosition(curAnchor.node, curAnchor.offset, focusNode, focusOffset)) [anchorNode, anchorOffset, focusNode, focusOffset] = [
		focusNode,
		focusOffset,
		anchorNode,
		anchorOffset
	];
	return {
		anchorNode,
		anchorOffset,
		focusNode,
		focusOffset
	};
}
function safariSelectionRangeHack(view, selection) {
	if (selection.getComposedRanges) {
		let range = selection.getComposedRanges(view.root)[0];
		if (range) return buildSelectionRangeFromRange(view, range);
	}
	let found = null;
	function read(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		found = event.getTargetRanges()[0];
	}
	view.contentDOM.addEventListener("beforeinput", read, true);
	view.dom.ownerDocument.execCommand("indent");
	view.contentDOM.removeEventListener("beforeinput", read, true);
	return found ? buildSelectionRangeFromRange(view, found) : null;
}
var EditContextManager = class {
	constructor(view) {
		this.from = 0;
		this.to = 0;
		this.pendingContextChange = null;
		this.handlers = Object.create(null);
		this.composing = null;
		this.resetRange(view.state);
		let context = this.editContext = new window.EditContext({
			text: view.state.doc.sliceString(this.from, this.to),
			selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, view.state.selection.main.anchor))),
			selectionEnd: this.toContextPos(view.state.selection.main.head)
		});
		this.handlers.textupdate = (e) => {
			let main = view.state.selection.main, { anchor, head } = main;
			let from = this.toEditorPos(e.updateRangeStart), to = this.toEditorPos(e.updateRangeEnd);
			if (view.inputState.composing >= 0 && !this.composing) this.composing = {
				contextBase: e.updateRangeStart,
				editorBase: from,
				drifted: false
			};
			let deletes = to - from > e.text.length;
			if (from == this.from && anchor < this.from) from = anchor;
			else if (to == this.to && anchor > this.to) to = anchor;
			let diff = findDiff(view.state.sliceDoc(from, to), e.text, (deletes ? main.from : main.to) - from, deletes ? "end" : null);
			if (!diff) {
				let newSel = EditorSelection.single(this.toEditorPos(e.selectionStart), this.toEditorPos(e.selectionEnd));
				if (!newSel.main.eq(main)) view.dispatch({
					selection: newSel,
					userEvent: "select"
				});
				return;
			}
			let change = {
				from: diff.from + from,
				to: diff.toA + from,
				insert: Text.of(e.text.slice(diff.from, diff.toB).split("\n"))
			};
			if ((browser.mac || browser.android) && change.from == head - 1 && /^\. ?$/.test(e.text) && view.contentDOM.getAttribute("autocorrect") == "off") change = {
				from,
				to,
				insert: Text.of([e.text.replace(".", " ")])
			};
			this.pendingContextChange = change;
			if (!view.state.readOnly) {
				let newLen = this.to - this.from + (change.to - change.from + change.insert.length);
				applyDOMChangeInner(view, change, EditorSelection.single(this.toEditorPos(e.selectionStart, newLen), this.toEditorPos(e.selectionEnd, newLen)));
			}
			if (this.pendingContextChange) {
				this.revertPending(view.state);
				this.setSelection(view.state);
			}
			if (change.from < change.to && !change.insert.length && view.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(context.text.slice(Math.max(0, e.updateRangeStart - 1), Math.min(context.text.length, e.updateRangeStart + 1)))) this.handlers.compositionend(e);
		};
		this.handlers.characterboundsupdate = (e) => {
			let rects = [], prev = null;
			for (let i = this.toEditorPos(e.rangeStart), end = this.toEditorPos(e.rangeEnd); i < end; i++) {
				let rect = view.coordsForChar(i);
				prev = rect && new DOMRect(rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top) || prev || new DOMRect();
				rects.push(prev);
			}
			context.updateCharacterBounds(e.rangeStart, rects);
		};
		this.handlers.textformatupdate = (e) => {
			let deco = [];
			for (let format of e.getTextFormats()) {
				let lineStyle = format.underlineStyle, thickness = format.underlineThickness;
				if (!/none/i.test(lineStyle) && !/none/i.test(thickness)) {
					let from = this.toEditorPos(format.rangeStart), to = this.toEditorPos(format.rangeEnd);
					if (from < to) {
						let style = `text-decoration: underline ${/^[a-z]/.test(lineStyle) ? lineStyle + " " : lineStyle == "Dashed" ? "dashed " : lineStyle == "Squiggle" ? "wavy " : ""}${/thin/i.test(thickness) ? 1 : 2}px`;
						deco.push(Decoration.mark({ attributes: { style } }).range(from, to));
					}
				}
			}
			view.dispatch({ effects: setEditContextFormatting.of(Decoration.set(deco)) });
		};
		this.handlers.compositionstart = () => {
			if (view.inputState.composing < 0) {
				view.inputState.composing = 0;
				view.inputState.compositionFirstChange = true;
			}
		};
		this.handlers.compositionend = () => {
			view.inputState.composing = -1;
			view.inputState.compositionFirstChange = null;
			if (this.composing) {
				let { drifted } = this.composing;
				this.composing = null;
				if (drifted) this.reset(view.state);
			}
		};
		for (let event in this.handlers) context.addEventListener(event, this.handlers[event]);
		this.measureReq = { read: (view) => {
			this.editContext.updateControlBounds(view.contentDOM.getBoundingClientRect());
			let sel = getSelection(view.root);
			if (sel && sel.rangeCount) this.editContext.updateSelectionBounds(sel.getRangeAt(0).getBoundingClientRect());
		} };
	}
	applyEdits(update) {
		let off = 0, abort = false, pending = this.pendingContextChange;
		update.changes.iterChanges((fromA, toA, _fromB, _toB, insert) => {
			if (abort) return;
			let dLen = insert.length - (toA - fromA);
			if (pending && toA >= pending.to) if (pending.from == fromA && pending.to == toA && pending.insert.eq(insert)) {
				pending = this.pendingContextChange = null;
				off += dLen;
				this.to += dLen;
				return;
			} else {
				pending = null;
				this.revertPending(update.state);
			}
			fromA += off;
			toA += off;
			if (toA <= this.from) {
				this.from += dLen;
				this.to += dLen;
			} else if (fromA < this.to) {
				if (fromA < this.from || toA > this.to || this.to - this.from + insert.length > 3e4) {
					abort = true;
					return;
				}
				this.editContext.updateText(this.toContextPos(fromA), this.toContextPos(toA), insert.toString());
				this.to += dLen;
			}
			off += dLen;
		});
		if (pending && !abort) this.revertPending(update.state);
		return !abort;
	}
	update(update) {
		let reverted = this.pendingContextChange, startSel = update.startState.selection.main;
		if (this.composing && (this.composing.drifted || !update.changes.touchesRange(startSel.from, startSel.to) && update.transactions.some((tr) => !tr.isUserEvent("input.type") && tr.changes.touchesRange(this.from, this.to)))) {
			this.composing.drifted = true;
			this.composing.editorBase = update.changes.mapPos(this.composing.editorBase);
		} else if (!this.applyEdits(update) || !this.rangeIsValid(update.state)) {
			this.pendingContextChange = null;
			this.reset(update.state);
		} else if (update.docChanged || update.selectionSet || reverted) this.setSelection(update.state);
		if (update.geometryChanged || update.docChanged || update.selectionSet) update.view.requestMeasure(this.measureReq);
	}
	resetRange(state) {
		let { head } = state.selection.main;
		this.from = Math.max(0, head - 1e4);
		this.to = Math.min(state.doc.length, head + 1e4);
	}
	reset(state) {
		this.resetRange(state);
		this.editContext.updateText(0, this.editContext.text.length, state.doc.sliceString(this.from, this.to));
		this.setSelection(state);
	}
	revertPending(state) {
		let pending = this.pendingContextChange;
		this.pendingContextChange = null;
		this.editContext.updateText(this.toContextPos(pending.from), this.toContextPos(pending.from + pending.insert.length), state.doc.sliceString(pending.from, pending.to));
	}
	setSelection(state) {
		let { main } = state.selection;
		let start = this.toContextPos(Math.max(this.from, Math.min(this.to, main.anchor)));
		let end = this.toContextPos(main.head);
		if (this.editContext.selectionStart != start || this.editContext.selectionEnd != end) this.editContext.updateSelection(start, end);
	}
	rangeIsValid(state) {
		let { head } = state.selection.main;
		return !(this.from > 0 && head - this.from < 500 || this.to < state.doc.length && this.to - head < 500 || this.to - this.from > 1e4 * 3);
	}
	toEditorPos(contextPos, clipLen = this.to - this.from) {
		contextPos = Math.min(contextPos, clipLen);
		let c = this.composing;
		return c && c.drifted ? c.editorBase + (contextPos - c.contextBase) : contextPos + this.from;
	}
	toContextPos(editorPos) {
		let c = this.composing;
		return c && c.drifted ? c.contextBase + (editorPos - c.editorBase) : editorPos - this.from;
	}
	destroy() {
		for (let event in this.handlers) this.editContext.removeEventListener(event, this.handlers[event]);
	}
};
/**
An editor view represents the editor's user interface. It holds
the editable DOM surface, and possibly other elements such as the
line number gutter. It handles events and dispatches state
transactions for editing actions.
*/
var EditorView = class EditorView {
	/**
	The current editor state.
	*/
	get state() {
		return this.viewState.state;
	}
	/**
	To be able to display large documents without consuming too much
	memory or overloading the browser, CodeMirror only draws the
	code that is visible (plus a margin around it) to the DOM. This
	property tells you the extent of the current drawn viewport, in
	document positions.
	*/
	get viewport() {
		return this.viewState.viewport;
	}
	/**
	When there are, for example, large collapsed ranges in the
	viewport, its size can be a lot bigger than the actual visible
	content. Thus, if you are doing something like styling the
	content in the viewport, it is preferable to only do so for
	these ranges, which are the subset of the viewport that is
	actually drawn.
	*/
	get visibleRanges() {
		return this.viewState.visibleRanges;
	}
	/**
	Returns false when the editor is entirely scrolled out of view
	or otherwise hidden.
	*/
	get inView() {
		return this.viewState.inView;
	}
	/**
	Indicates whether the user is currently composing text via
	[IME](https://en.wikipedia.org/wiki/Input_method), and at least
	one change has been made in the current composition.
	*/
	get composing() {
		return !!this.inputState && this.inputState.composing > 0;
	}
	/**
	Indicates whether the user is currently in composing state. Note
	that on some platforms, like Android, this will be the case a
	lot, since just putting the cursor on a word starts a
	composition there.
	*/
	get compositionStarted() {
		return !!this.inputState && this.inputState.composing >= 0;
	}
	/**
	The document or shadow root that the view lives in.
	*/
	get root() {
		return this._root;
	}
	/**
	@internal
	*/
	get win() {
		return this.dom.ownerDocument.defaultView || window;
	}
	/**
	Construct a new view. You'll want to either provide a `parent`
	option, or put `view.dom` into your document after creating a
	view, so that the user can see the editor.
	*/
	constructor(config = {}) {
		var _a;
		this.plugins = [];
		this.pluginMap = /* @__PURE__ */ new Map();
		this.editorAttrs = {};
		this.contentAttrs = {};
		this.bidiCache = [];
		this.destroyed = false;
		/**
		@internal
		*/
		this.updateState = 2;
		/**
		@internal
		*/
		this.measureScheduled = -1;
		/**
		@internal
		*/
		this.measureRequests = [];
		this.contentDOM = document.createElement("div");
		this.scrollDOM = document.createElement("div");
		this.scrollDOM.tabIndex = -1;
		this.scrollDOM.className = "cm-scroller";
		this.scrollDOM.appendChild(this.contentDOM);
		this.announceDOM = document.createElement("div");
		this.announceDOM.className = "cm-announced";
		this.announceDOM.setAttribute("aria-live", "polite");
		this.dom = document.createElement("div");
		this.dom.appendChild(this.announceDOM);
		this.dom.appendChild(this.scrollDOM);
		if (config.parent) config.parent.appendChild(this.dom);
		let { dispatch } = config;
		this.dispatchTransactions = config.dispatchTransactions || dispatch && ((trs) => trs.forEach((tr) => dispatch(tr, this))) || ((trs) => this.update(trs));
		this.dispatch = this.dispatch.bind(this);
		this._root = config.root || getRoot(config.parent) || document;
		this.viewState = new ViewState(config.state || EditorState.create(config));
		if (config.scrollTo && config.scrollTo.is(scrollIntoView$1)) this.viewState.scrollTarget = config.scrollTo.value.clip(this.viewState.state);
		this.plugins = this.state.facet(viewPlugin).map((spec) => new PluginInstance(spec));
		for (let plugin of this.plugins) plugin.update(this);
		this.observer = new DOMObserver(this);
		this.inputState = new InputState(this);
		this.inputState.ensureHandlers(this.plugins);
		this.docView = new DocView(this);
		this.mountStyles();
		this.updateAttrs();
		this.updateState = 0;
		this.requestMeasure();
		if ((_a = document.fonts) === null || _a === void 0 ? void 0 : _a.ready) document.fonts.ready.then(() => this.requestMeasure());
	}
	dispatch(...input) {
		let trs = input.length == 1 && input[0] instanceof Transaction ? input : input.length == 1 && Array.isArray(input[0]) ? input[0] : [this.state.update(...input)];
		this.dispatchTransactions(trs, this);
	}
	/**
	Update the view for the given array of transactions. This will
	update the visible document and selection to match the state
	produced by the transactions, and notify view plugins of the
	change. You should usually call
	[`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
	as a primitive.
	*/
	update(transactions) {
		if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
		let redrawn = false, attrsChanged = false, update;
		let state = this.state;
		for (let tr of transactions) {
			if (tr.startState != state) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
			state = tr.state;
		}
		if (this.destroyed) {
			this.viewState.state = state;
			return;
		}
		let focus = this.hasFocus, focusFlag = 0, dispatchFocus = null;
		if (transactions.some((tr) => tr.annotation(isFocusChange))) {
			this.inputState.notifiedFocused = focus;
			focusFlag = 1;
		} else if (focus != this.inputState.notifiedFocused) {
			this.inputState.notifiedFocused = focus;
			dispatchFocus = focusChangeTransaction(state, focus);
			if (!dispatchFocus) focusFlag = 1;
		}
		let pendingKey = this.observer.delayedAndroidKey, domChange = null;
		if (pendingKey) {
			this.observer.clearDelayedAndroidKey();
			domChange = this.observer.readChange();
			if (domChange && !this.state.doc.eq(state.doc) || !this.state.selection.eq(state.selection)) domChange = null;
		} else this.observer.clear();
		if (state.facet(EditorState.phrases) != this.state.facet(EditorState.phrases)) return this.setState(state);
		update = ViewUpdate.create(this, state, transactions);
		update.flags |= focusFlag;
		let scrollTarget = this.viewState.scrollTarget;
		try {
			this.updateState = 2;
			for (let tr of transactions) {
				if (scrollTarget) scrollTarget = scrollTarget.map(tr.changes);
				if (tr.scrollIntoView) {
					let { main } = tr.state.selection;
					scrollTarget = new ScrollTarget(main.empty ? main : EditorSelection.cursor(main.head, main.head > main.anchor ? -1 : 1));
				}
				for (let e of tr.effects) if (e.is(scrollIntoView$1)) scrollTarget = e.value.clip(this.state);
			}
			this.viewState.update(update, scrollTarget);
			this.bidiCache = CachedOrder.update(this.bidiCache, update.changes);
			if (!update.empty) {
				this.updatePlugins(update);
				this.inputState.update(update);
			}
			redrawn = this.docView.update(update);
			if (this.state.facet(styleModule) != this.styleModules) this.mountStyles();
			attrsChanged = this.updateAttrs();
			this.showAnnouncements(transactions);
			this.docView.updateSelection(redrawn, transactions.some((tr) => tr.isUserEvent("select.pointer")));
		} finally {
			this.updateState = 0;
		}
		if (update.startState.facet(theme) != update.state.facet(theme)) this.viewState.mustMeasureContent = true;
		if (redrawn || attrsChanged || scrollTarget || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) this.requestMeasure();
		if (redrawn) this.docViewUpdate();
		if (!update.empty) for (let listener of this.state.facet(updateListener)) try {
			listener(update);
		} catch (e) {
			logException(this.state, e, "update listener");
		}
		if (dispatchFocus || domChange) Promise.resolve().then(() => {
			if (dispatchFocus && this.state == dispatchFocus.startState) this.dispatch(dispatchFocus);
			if (domChange) {
				if (!applyDOMChange(this, domChange) && pendingKey.force) dispatchKey(this.contentDOM, pendingKey.key, pendingKey.keyCode);
			}
		});
	}
	/**
	Reset the view to the given state. (This will cause the entire
	document to be redrawn and all view plugins to be reinitialized,
	so you should probably only use it when the new state isn't
	derived from the old state. Otherwise, use
	[`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
	*/
	setState(newState) {
		if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
		if (this.destroyed) {
			this.viewState.state = newState;
			return;
		}
		this.updateState = 2;
		let hadFocus = this.hasFocus;
		try {
			for (let plugin of this.plugins) plugin.destroy(this);
			this.viewState = new ViewState(newState);
			this.plugins = newState.facet(viewPlugin).map((spec) => new PluginInstance(spec));
			this.pluginMap.clear();
			for (let plugin of this.plugins) plugin.update(this);
			this.docView.destroy();
			this.docView = new DocView(this);
			this.inputState.ensureHandlers(this.plugins);
			this.mountStyles();
			this.updateAttrs();
			this.bidiCache = [];
		} finally {
			this.updateState = 0;
		}
		if (hadFocus) this.focus();
		this.requestMeasure();
	}
	updatePlugins(update) {
		let prevSpecs = update.startState.facet(viewPlugin), specs = update.state.facet(viewPlugin);
		if (prevSpecs != specs) {
			let newPlugins = [];
			for (let spec of specs) {
				let found = prevSpecs.indexOf(spec);
				if (found < 0) newPlugins.push(new PluginInstance(spec));
				else {
					let plugin = this.plugins[found];
					plugin.mustUpdate = update;
					newPlugins.push(plugin);
				}
			}
			for (let plugin of this.plugins) if (plugin.mustUpdate != update) plugin.destroy(this);
			this.plugins = newPlugins;
			this.pluginMap.clear();
		} else for (let p of this.plugins) p.mustUpdate = update;
		for (let i = 0; i < this.plugins.length; i++) this.plugins[i].update(this);
		if (prevSpecs != specs) this.inputState.ensureHandlers(this.plugins);
	}
	docViewUpdate() {
		for (let plugin of this.plugins) {
			let val = plugin.value;
			if (val && val.docViewUpdate) try {
				val.docViewUpdate(this);
			} catch (e) {
				logException(this.state, e, "doc view update listener");
			}
		}
	}
	/**
	@internal
	*/
	measure(flush = true) {
		if (this.destroyed) return;
		if (this.measureScheduled > -1) this.win.cancelAnimationFrame(this.measureScheduled);
		if (this.observer.delayedAndroidKey) {
			this.measureScheduled = -1;
			this.requestMeasure();
			return;
		}
		this.measureScheduled = 0;
		if (flush) this.observer.forceFlush();
		let updated = null;
		let sDOM = this.scrollDOM, scrollTop = sDOM.scrollTop * this.scaleY;
		let { scrollAnchorPos, scrollAnchorHeight } = this.viewState;
		if (Math.abs(scrollTop - this.viewState.scrollTop) > 1) scrollAnchorHeight = -1;
		this.viewState.scrollAnchorHeight = -1;
		try {
			for (let i = 0;; i++) {
				if (scrollAnchorHeight < 0) if (isScrolledToBottom(sDOM)) {
					scrollAnchorPos = -1;
					scrollAnchorHeight = this.viewState.heightMap.height;
				} else {
					let block = this.viewState.scrollAnchorAt(scrollTop);
					scrollAnchorPos = block.from;
					scrollAnchorHeight = block.top;
				}
				this.updateState = 1;
				let changed = this.viewState.measure(this);
				if (!changed && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
				if (i > 5) {
					console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
					break;
				}
				let measuring = [];
				if (!(changed & 4)) [this.measureRequests, measuring] = [measuring, this.measureRequests];
				let measured = measuring.map((m) => {
					try {
						return m.read(this);
					} catch (e) {
						logException(this.state, e);
						return BadMeasure;
					}
				});
				let update = ViewUpdate.create(this, this.state, []), redrawn = false;
				update.flags |= changed;
				if (!updated) updated = update;
				else updated.flags |= changed;
				this.updateState = 2;
				if (!update.empty) {
					this.updatePlugins(update);
					this.inputState.update(update);
					this.updateAttrs();
					redrawn = this.docView.update(update);
					if (redrawn) this.docViewUpdate();
				}
				for (let i = 0; i < measuring.length; i++) if (measured[i] != BadMeasure) try {
					let m = measuring[i];
					if (m.write) m.write(measured[i], this);
				} catch (e) {
					logException(this.state, e);
				}
				if (redrawn) this.docView.updateSelection(true);
				if (!update.viewportChanged && this.measureRequests.length == 0) {
					if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
						this.docView.scrollIntoView(this.viewState.scrollTarget);
						this.viewState.scrollTarget = null;
						scrollAnchorHeight = -1;
						continue;
					} else {
						let diff = (scrollAnchorPos < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(scrollAnchorPos).top) - scrollAnchorHeight;
						if (diff > 1 || diff < -1) {
							scrollTop = scrollTop + diff;
							sDOM.scrollTop = scrollTop / this.scaleY;
							scrollAnchorHeight = -1;
							continue;
						}
					}
					break;
				}
			}
		} finally {
			this.updateState = 0;
			this.measureScheduled = -1;
		}
		if (updated && !updated.empty) for (let listener of this.state.facet(updateListener)) listener(updated);
	}
	/**
	Get the CSS classes for the currently active editor themes.
	*/
	get themeClasses() {
		return baseThemeID + " " + (this.state.facet(darkTheme) ? baseDarkID : baseLightID) + " " + this.state.facet(theme);
	}
	updateAttrs() {
		let editorAttrs = attrsFromFacet(this, editorAttributes, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses });
		let contentAttrs = {
			spellcheck: "false",
			autocorrect: "off",
			autocapitalize: "off",
			writingsuggestions: "false",
			translate: "no",
			contenteditable: !this.state.facet(editable) ? "false" : "true",
			class: "cm-content",
			style: `${browser.tabSize}: ${this.state.tabSize}`,
			role: "textbox",
			"aria-multiline": "true"
		};
		if (this.state.readOnly) contentAttrs["aria-readonly"] = "true";
		attrsFromFacet(this, contentAttributes, contentAttrs);
		let changed = this.observer.ignore(() => {
			let changedContent = updateAttrs(this.contentDOM, this.contentAttrs, contentAttrs);
			let changedEditor = updateAttrs(this.dom, this.editorAttrs, editorAttrs);
			return changedContent || changedEditor;
		});
		this.editorAttrs = editorAttrs;
		this.contentAttrs = contentAttrs;
		return changed;
	}
	showAnnouncements(trs) {
		let first = true;
		for (let tr of trs) for (let effect of tr.effects) if (effect.is(EditorView.announce)) {
			if (first) this.announceDOM.textContent = "";
			first = false;
			let div = this.announceDOM.appendChild(document.createElement("div"));
			div.textContent = effect.value;
		}
	}
	mountStyles() {
		this.styleModules = this.state.facet(styleModule);
		let nonce = this.state.facet(EditorView.cspNonce);
		StyleModule.mount(this.root, this.styleModules.concat(baseTheme$1$3).reverse(), nonce ? { nonce } : void 0);
	}
	readMeasured() {
		if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
		if (this.updateState == 0 && this.measureScheduled > -1) this.measure(false);
	}
	/**
	Schedule a layout measurement, optionally providing callbacks to
	do custom DOM measuring followed by a DOM write phase. Using
	this is preferable reading DOM layout directly from, for
	example, an event handler, because it'll make sure measuring and
	drawing done by other components is synchronized, avoiding
	unnecessary DOM layout computations.
	*/
	requestMeasure(request) {
		if (this.measureScheduled < 0) this.measureScheduled = this.win.requestAnimationFrame(() => this.measure());
		if (request) {
			if (this.measureRequests.indexOf(request) > -1) return;
			if (request.key != null) {
				for (let i = 0; i < this.measureRequests.length; i++) if (this.measureRequests[i].key === request.key) {
					this.measureRequests[i] = request;
					return;
				}
			}
			this.measureRequests.push(request);
		}
	}
	/**
	Get the value of a specific plugin, if present. Note that
	plugins that crash can be dropped from a view, so even when you
	know you registered a given plugin, it is recommended to check
	the return value of this method.
	*/
	plugin(plugin) {
		let known = this.pluginMap.get(plugin);
		if (known === void 0 || known && known.plugin != plugin) this.pluginMap.set(plugin, known = this.plugins.find((p) => p.plugin == plugin) || null);
		return known && known.update(this).value;
	}
	/**
	The top position of the document, in screen coordinates. This
	may be negative when the editor is scrolled down. Points
	directly to the top of the first line, not above the padding.
	*/
	get documentTop() {
		return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
	}
	/**
	Reports the padding above and below the document.
	*/
	get documentPadding() {
		return {
			top: this.viewState.paddingTop,
			bottom: this.viewState.paddingBottom
		};
	}
	/**
	If the editor is transformed with CSS, this provides the scale
	along the X axis. Otherwise, it will just be 1. Note that
	transforms other than translation and scaling are not supported.
	*/
	get scaleX() {
		return this.viewState.scaleX;
	}
	/**
	Provide the CSS transformed scale along the Y axis.
	*/
	get scaleY() {
		return this.viewState.scaleY;
	}
	/**
	Find the text line or block widget at the given vertical
	position (which is interpreted as relative to the [top of the
	document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
	*/
	elementAtHeight(height) {
		this.readMeasured();
		return this.viewState.elementAtHeight(height);
	}
	/**
	Find the line block (see
	[`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
	height, again interpreted relative to the [top of the
	document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
	*/
	lineBlockAtHeight(height) {
		this.readMeasured();
		return this.viewState.lineBlockAtHeight(height);
	}
	/**
	Get the extent and vertical position of all [line
	blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
	are relative to the [top of the
	document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
	*/
	get viewportLineBlocks() {
		return this.viewState.viewportLines;
	}
	/**
	Find the line block around the given document position. A line
	block is a range delimited on both sides by either a
	non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
	start/end of the document. It will usually just hold a line of
	text, but may be broken into multiple textblocks by block
	widgets.
	*/
	lineBlockAt(pos) {
		return this.viewState.lineBlockAt(pos);
	}
	/**
	The editor's total content height.
	*/
	get contentHeight() {
		return this.viewState.contentHeight;
	}
	/**
	Move a cursor position by [grapheme
	cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
	the motion is away from the line start, or towards it. In
	bidirectional text, the line is traversed in visual order, using
	the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
	When the start position was the last one on the line, the
	returned position will be across the line break. If there is no
	further line, the original position is returned.
	
	By default, this method moves over a single cluster. The
	optional `by` argument can be used to move across more. It will
	be called with the first cluster as argument, and should return
	a predicate that determines, for each subsequent cluster,
	whether it should also be moved over.
	*/
	moveByChar(start, forward, by) {
		return skipAtoms(this, start, moveByChar(this, start, forward, by));
	}
	/**
	Move a cursor position across the next group of either
	[letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
	non-whitespace characters.
	*/
	moveByGroup(start, forward) {
		return skipAtoms(this, start, moveByChar(this, start, forward, (initial) => byGroup(this, start.head, initial)));
	}
	/**
	Get the cursor position visually at the start or end of a line.
	Note that this may differ from the _logical_ position at its
	start or end (which is simply at `line.from`/`line.to`) if text
	at the start or end goes against the line's base text direction.
	*/
	visualLineSide(line, end) {
		let order = this.bidiSpans(line), dir = this.textDirectionAt(line.from);
		let span = order[end ? order.length - 1 : 0];
		return EditorSelection.cursor(span.side(end, dir) + line.from, span.forward(!end, dir) ? 1 : -1);
	}
	/**
	Move to the next line boundary in the given direction. If
	`includeWrap` is true, line wrapping is on, and there is a
	further wrap point on the current line, the wrap point will be
	returned. Otherwise this function will return the start or end
	of the line.
	*/
	moveToLineBoundary(start, forward, includeWrap = true) {
		return moveToLineBoundary(this, start, forward, includeWrap);
	}
	/**
	Move a cursor position vertically. When `distance` isn't given,
	it defaults to moving to the next line (including wrapped
	lines). Otherwise, `distance` should provide a positive distance
	in pixels.
	
	When `start` has a
	[`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
	motion will use that as a target horizontal position. Otherwise,
	the cursor's own horizontal position is used. The returned
	cursor will have its goal column set to whichever column was
	used.
	*/
	moveVertically(start, forward, distance) {
		return skipAtoms(this, start, moveVertically(this, start, forward, distance));
	}
	/**
	Find the DOM parent node and offset (child offset if `node` is
	an element, character offset when it is a text node) at the
	given document position.
	
	Note that for positions that aren't currently in
	`visibleRanges`, the resulting DOM position isn't necessarily
	meaningful (it may just point before or after a placeholder
	element).
	*/
	domAtPos(pos, side = 1) {
		return this.docView.domAtPos(pos, side);
	}
	/**
	Find the document position at the given DOM node. Can be useful
	for associating positions with DOM events. Will raise an error
	when `node` isn't part of the editor content.
	*/
	posAtDOM(node, offset = 0) {
		return this.docView.posFromDOM(node, offset);
	}
	posAtCoords(coords, precise = true) {
		this.readMeasured();
		let found = posAtCoords(this, coords, precise);
		return found && found.pos;
	}
	posAndSideAtCoords(coords, precise = true) {
		this.readMeasured();
		return posAtCoords(this, coords, precise);
	}
	/**
	Get the screen coordinates at the given document position.
	`side` determines whether the coordinates are based on the
	element before (-1) or after (1) the position (if no element is
	available on the given side, the method will transparently use
	another strategy to get reasonable coordinates).
	*/
	coordsAtPos(pos, side = 1) {
		this.readMeasured();
		let rect = this.docView.coordsAt(pos, side);
		if (!rect || rect.left == rect.right) return rect;
		let line = this.state.doc.lineAt(pos), order = this.bidiSpans(line);
		let span = order[BidiSpan.find(order, pos - line.from, -1, side)];
		return flattenRect(rect, span.dir == Direction.LTR == side > 0);
	}
	/**
	Return the rectangle around a given character. If `pos` does not
	point in front of a character that is in the viewport and
	rendered (i.e. not replaced, not a line break), this will return
	null. For space characters that are a line wrap point, this will
	return the position before the line break.
	*/
	coordsForChar(pos) {
		this.readMeasured();
		return this.docView.coordsForChar(pos);
	}
	/**
	The default width of a character in the editor. May not
	accurately reflect the width of all characters (given variable
	width fonts or styling of invididual ranges).
	*/
	get defaultCharacterWidth() {
		return this.viewState.heightOracle.charWidth;
	}
	/**
	The default height of a line in the editor. May not be accurate
	for all lines.
	*/
	get defaultLineHeight() {
		return this.viewState.heightOracle.lineHeight;
	}
	/**
	The text direction
	([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
	CSS property) of the editor's content element.
	*/
	get textDirection() {
		return this.viewState.defaultTextDirection;
	}
	/**
	Find the text direction of the block at the given position, as
	assigned by CSS. If
	[`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
	isn't enabled, or the given position is outside of the viewport,
	this will always return the same as
	[`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
	this may trigger a DOM layout.
	*/
	textDirectionAt(pos) {
		if (!this.state.facet(perLineTextDirection) || pos < this.viewport.from || pos > this.viewport.to) return this.textDirection;
		this.readMeasured();
		return this.docView.textDirectionAt(pos);
	}
	/**
	Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
	(as determined by the
	[`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
	CSS property of its content element).
	*/
	get lineWrapping() {
		return this.viewState.heightOracle.lineWrapping;
	}
	/**
	Returns the bidirectional text structure of the given line
	(which should be in the current document) as an array of span
	objects. The order of these spans matches the [text
	direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
	left-to-right, the leftmost spans come first, otherwise the
	rightmost spans come first.
	*/
	bidiSpans(line) {
		if (line.length > MaxBidiLine) return trivialOrder(line.length);
		let dir = this.textDirectionAt(line.from), isolates;
		for (let entry of this.bidiCache) if (entry.from == line.from && entry.dir == dir && (entry.fresh || isolatesEq(entry.isolates, isolates = getIsolatedRanges(this, line)))) return entry.order;
		if (!isolates) isolates = getIsolatedRanges(this, line);
		let order = computeOrder(line.text, dir, isolates);
		this.bidiCache.push(new CachedOrder(line.from, line.to, dir, isolates, true, order));
		return order;
	}
	/**
	Check whether the editor has focus.
	*/
	get hasFocus() {
		var _a;
		return (this.dom.ownerDocument.hasFocus() || browser.safari && ((_a = this.inputState) === null || _a === void 0 ? void 0 : _a.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
	}
	/**
	Put focus on the editor.
	*/
	focus() {
		this.observer.ignore(() => {
			focusPreventScroll(this.contentDOM);
			this.docView.updateSelection();
		});
	}
	/**
	Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
	necessary when moving the editor's existing DOM to a new window or shadow root.
	*/
	setRoot(root) {
		if (this._root != root) {
			this._root = root;
			this.observer.setWindow((root.nodeType == 9 ? root : root.ownerDocument).defaultView || window);
			this.mountStyles();
		}
	}
	/**
	Clean up this editor view, removing its element from the
	document, unregistering event handlers, and notifying
	plugins. The view instance can no longer be used after
	calling this.
	*/
	destroy() {
		if (this.root.activeElement == this.contentDOM) this.contentDOM.blur();
		for (let plugin of this.plugins) plugin.destroy(this);
		this.plugins = [];
		this.inputState.destroy();
		this.docView.destroy();
		this.dom.remove();
		this.observer.destroy();
		if (this.measureScheduled > -1) this.win.cancelAnimationFrame(this.measureScheduled);
		this.destroyed = true;
	}
	/**
	Returns an effect that can be
	[added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
	cause it to scroll the given position or range into view.
	*/
	static scrollIntoView(pos, options = {}) {
		return scrollIntoView$1.of(new ScrollTarget(typeof pos == "number" ? EditorSelection.cursor(pos) : pos, options.y, options.x, options.yMargin, options.xMargin));
	}
	/**
	Return an effect that resets the editor to its current (at the
	time this method was called) scroll position. Note that this
	only affects the editor's own scrollable element, not parents.
	See also
	[`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
	
	The effect should be used with a document identical to the one
	it was created for. Failing to do so is not an error, but may
	not scroll to the expected position. You can
	[map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
	*/
	scrollSnapshot() {
		let { scrollTop, scrollLeft } = this.scrollDOM;
		let ref = this.viewState.scrollAnchorAt(scrollTop);
		return scrollIntoView$1.of(new ScrollTarget(EditorSelection.cursor(ref.from), "start", "start", ref.top - scrollTop, scrollLeft, true));
	}
	/**
	Enable or disable tab-focus mode, which disables key bindings
	for Tab and Shift-Tab, letting the browser's default
	focus-changing behavior go through instead. This is useful to
	prevent trapping keyboard users in your editor.
	
	Without argument, this toggles the mode. With a boolean, it
	enables (true) or disables it (false). Given a number, it
	temporarily enables the mode until that number of milliseconds
	have passed or another non-Tab key is pressed.
	*/
	setTabFocusMode(to) {
		if (to == null) this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1;
		else if (typeof to == "boolean") this.inputState.tabFocusMode = to ? 0 : -1;
		else if (this.inputState.tabFocusMode != 0) this.inputState.tabFocusMode = Date.now() + to;
	}
	/**
	Returns an extension that can be used to add DOM event handlers.
	The value should be an object mapping event names to handler
	functions. For any given event, such functions are ordered by
	extension precedence, and the first handler to return true will
	be assumed to have handled that event, and no other handlers or
	built-in behavior will be activated for it. These are registered
	on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
	for `scroll` handlers, which will be called any time the
	editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
	its parent nodes is scrolled.
	*/
	static domEventHandlers(handlers) {
		return ViewPlugin.define(() => ({}), { eventHandlers: handlers });
	}
	/**
	Create an extension that registers DOM event observers. Contrary
	to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
	observers can't be prevented from running by a higher-precedence
	handler returning true. They also don't prevent other handlers
	and observers from running when they return true, and should not
	call `preventDefault`.
	*/
	static domEventObservers(observers) {
		return ViewPlugin.define(() => ({}), { eventObservers: observers });
	}
	/**
	Create a theme extension. The first argument can be a
	[`style-mod`](https://github.com/marijnh/style-mod#documentation)
	style spec providing the styles for the theme. These will be
	prefixed with a generated class for the style.
	
	Because the selectors will be prefixed with a scope class, rule
	that directly match the editor's [wrapper
	element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
	added—need to be explicitly differentiated by adding an `&` to
	the selector for that element—for example
	`&.cm-focused`.
	
	When `dark` is set to true, the theme will be marked as dark,
	which will cause the `&dark` rules from [base
	themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
	`&light` when a light theme is active).
	*/
	static theme(spec, options) {
		let prefix = StyleModule.newName();
		let result = [theme.of(prefix), styleModule.of(buildTheme(`.${prefix}`, spec))];
		if (options && options.dark) result.push(darkTheme.of(true));
		return result;
	}
	/**
	Create an extension that adds styles to the base theme. Like
	with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
	place of the editor wrapper element when directly targeting
	that. You can also use `&dark` or `&light` instead to only
	target editors with a dark or light theme.
	*/
	static baseTheme(spec) {
		return Prec.lowest(styleModule.of(buildTheme("." + baseThemeID, spec, lightDarkIDs)));
	}
	/**
	Retrieve an editor view instance from the view's DOM
	representation.
	*/
	static findFromDOM(dom) {
		var _a;
		let content = dom.querySelector(".cm-content");
		let tile = content && Tile.get(content) || Tile.get(dom);
		return ((_a = tile === null || tile === void 0 ? void 0 : tile.root) === null || _a === void 0 ? void 0 : _a.view) || null;
	}
};
/**
Facet to add a [style
module](https://github.com/marijnh/style-mod#documentation) to
an editor view. The view will ensure that the module is
mounted in its [document
root](https://codemirror.net/6/docs/ref/#view.EditorView.constructor^config.root).
*/
EditorView.styleModule = styleModule;
/**
An input handler can override the way changes to the editable
DOM content are handled. Handlers are passed the document
positions between which the change was found, and the new
content. When one returns true, no further input handlers are
called and the default behavior is prevented.

The `insert` argument can be used to get the default transaction
that would be applied for this input. This can be useful when
dispatching the custom behavior as a separate transaction.
*/
EditorView.inputHandler = inputHandler$1;
/**
Functions provided in this facet will be used to transform text
pasted or dropped into the editor.
*/
EditorView.clipboardInputFilter = clipboardInputFilter;
/**
Transform text copied or dragged from the editor.
*/
EditorView.clipboardOutputFilter = clipboardOutputFilter;
/**
Scroll handlers can override how things are scrolled into view.
If they return `true`, no further handling happens for the
scrolling. If they return false, the default scroll behavior is
applied. Scroll handlers should never initiate editor updates.
*/
EditorView.scrollHandler = scrollHandler;
/**
This facet can be used to provide functions that create effects
to be dispatched when the editor's focus state changes.
*/
EditorView.focusChangeEffect = focusChangeEffect;
/**
By default, the editor assumes all its content has the same
[text direction](https://codemirror.net/6/docs/ref/#view.Direction). Configure this with a `true`
value to make it read the text direction of every (rendered)
line separately.
*/
EditorView.perLineTextDirection = perLineTextDirection;
/**
Allows you to provide a function that should be called when the
library catches an exception from an extension (mostly from view
plugins, but may be used by other extensions to route exceptions
from user-code-provided callbacks). This is mostly useful for
debugging and logging. See [`logException`](https://codemirror.net/6/docs/ref/#view.logException).
*/
EditorView.exceptionSink = exceptionSink;
/**
A facet that can be used to register a function to be called
every time the view updates.
*/
EditorView.updateListener = updateListener;
/**
Facet that controls whether the editor content DOM is editable.
When its highest-precedence value is `false`, the element will
not have its `contenteditable` attribute set. (Note that this
doesn't affect API calls that change the editor content, even
when those are bound to keys or buttons. See the
[`readOnly`](https://codemirror.net/6/docs/ref/#state.EditorState.readOnly) facet for that.)
*/
EditorView.editable = editable;
/**
Allows you to influence the way mouse selection happens. The
functions in this facet will be called for a `mousedown` event
on the editor, and can return an object that overrides the way a
selection is computed from that mouse click or drag.
*/
EditorView.mouseSelectionStyle = mouseSelectionStyle;
/**
Facet used to configure whether a given selection drag event
should move or copy the selection. The given predicate will be
called with the `mousedown` event, and can return `true` when
the drag should move the content.
*/
EditorView.dragMovesSelection = dragMovesSelection$1;
/**
Facet used to configure whether a given selecting click adds a
new range to the existing selection or replaces it entirely. The
default behavior is to check `event.metaKey` on macOS, and
`event.ctrlKey` elsewhere.
*/
EditorView.clickAddsSelectionRange = clickAddsSelectionRange;
/**
A facet that determines which [decorations](https://codemirror.net/6/docs/ref/#view.Decoration)
are shown in the view. Decorations can be provided in two
ways—directly, or via a function that takes an editor view.

Only decoration sets provided directly are allowed to influence
the editor's vertical layout structure. The ones provided as
functions are called _after_ the new viewport has been computed,
and thus **must not** introduce block widgets or replacing
decorations that cover line breaks.

If you want decorated ranges to behave like atomic units for
cursor motion and deletion purposes, also provide the range set
containing the decorations to
[`EditorView.atomicRanges`](https://codemirror.net/6/docs/ref/#view.EditorView^atomicRanges).
*/
EditorView.decorations = decorations;
/**
[Block wrappers](https://codemirror.net/6/docs/ref/#view.BlockWrapper) provide a way to add DOM
structure around editor lines and block widgets. Sets of
wrappers are provided in a similar way to decorations, and are
nested in a similar way when they overlap. A wrapper affects all
lines and block widgets that start inside its range.
*/
EditorView.blockWrappers = blockWrappers;
/**
Facet that works much like
[`decorations`](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), but puts its
inputs at the very bottom of the precedence stack, meaning mark
decorations provided here will only be split by other, partially
overlapping `outerDecorations` ranges, and wrap around all
regular decorations. Use this for mark elements that should, as
much as possible, remain in one piece.
*/
EditorView.outerDecorations = outerDecorations;
/**
Used to provide ranges that should be treated as atoms as far as
cursor motion is concerned. This causes methods like
[`moveByChar`](https://codemirror.net/6/docs/ref/#view.EditorView.moveByChar) and
[`moveVertically`](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) (and the
commands built on top of them) to skip across such regions when
a selection endpoint would enter them. This does _not_ prevent
direct programmatic [selection
updates](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) from moving into such
regions.
*/
EditorView.atomicRanges = atomicRanges;
/**
When range decorations add a `unicode-bidi: isolate` style, they
should also include a
[`bidiIsolate`](https://codemirror.net/6/docs/ref/#view.MarkDecorationSpec.bidiIsolate) property
in their decoration spec, and be exposed through this facet, so
that the editor can compute the proper text order. (Other values
for `unicode-bidi`, except of course `normal`, are not
supported.)
*/
EditorView.bidiIsolatedRanges = bidiIsolatedRanges;
/**
Facet that allows extensions to provide additional scroll
margins (space around the sides of the scrolling element that
should be considered invisible). This can be useful when the
plugin introduces elements that cover part of that element (for
example a horizontally fixed gutter).
*/
EditorView.scrollMargins = scrollMargins;
/**
This facet records whether a dark theme is active. The extension
returned by [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme) automatically
includes an instance of this when the `dark` option is set to
true.
*/
EditorView.darkTheme = darkTheme;
/**
Provides a Content Security Policy nonce to use when creating
the style sheets for the editor. Holds the empty string when no
nonce has been provided.
*/
EditorView.cspNonce = /* @__PURE__ */ Facet.define({ combine: (values) => values.length ? values[0] : "" });
/**
Facet that provides additional DOM attributes for the editor's
editable DOM element.
*/
EditorView.contentAttributes = contentAttributes;
/**
Facet that provides DOM attributes for the editor's outer
element.
*/
EditorView.editorAttributes = editorAttributes;
/**
An extension that enables line wrapping in the editor (by
setting CSS `white-space` to `pre-wrap` in the content).
*/
EditorView.lineWrapping = /* @__PURE__ */ EditorView.contentAttributes.of({ "class": "cm-lineWrapping" });
/**
State effect used to include screen reader announcements in a
transaction. These will be added to the DOM in a visually hidden
element with `aria-live="polite"` set, and should be used to
describe effects that are visually obvious but may not be
noticed by screen reader users (such as moving to the next
search match).
*/
EditorView.announce = /* @__PURE__ */ StateEffect.define();
var MaxBidiLine = 4096;
var BadMeasure = {};
var CachedOrder = class CachedOrder {
	constructor(from, to, dir, isolates, fresh, order) {
		this.from = from;
		this.to = to;
		this.dir = dir;
		this.isolates = isolates;
		this.fresh = fresh;
		this.order = order;
	}
	static update(cache, changes) {
		if (changes.empty && !cache.some((c) => c.fresh)) return cache;
		let result = [], lastDir = cache.length ? cache[cache.length - 1].dir : Direction.LTR;
		for (let i = Math.max(0, cache.length - 10); i < cache.length; i++) {
			let entry = cache[i];
			if (entry.dir == lastDir && !changes.touchesRange(entry.from, entry.to)) result.push(new CachedOrder(changes.mapPos(entry.from, 1), changes.mapPos(entry.to, -1), entry.dir, entry.isolates, false, entry.order));
		}
		return result;
	}
};
function attrsFromFacet(view, facet, base) {
	for (let sources = view.state.facet(facet), i = sources.length - 1; i >= 0; i--) {
		let source = sources[i], value = typeof source == "function" ? source(view) : source;
		if (value) combineAttrs(value, base);
	}
	return base;
}
var currentPlatform = browser.mac ? "mac" : browser.windows ? "win" : browser.linux ? "linux" : "key";
function normalizeKeyName(name, platform) {
	const parts = name.split(/-(?!$)/);
	let result = parts[parts.length - 1];
	if (result == "Space") result = " ";
	let alt, ctrl, shift, meta;
	for (let i = 0; i < parts.length - 1; ++i) {
		const mod = parts[i];
		if (/^(cmd|meta|m)$/i.test(mod)) meta = true;
		else if (/^a(lt)?$/i.test(mod)) alt = true;
		else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
		else if (/^s(hift)?$/i.test(mod)) shift = true;
		else if (/^mod$/i.test(mod)) if (platform == "mac") meta = true;
		else ctrl = true;
		else throw new Error("Unrecognized modifier name: " + mod);
	}
	if (alt) result = "Alt-" + result;
	if (ctrl) result = "Ctrl-" + result;
	if (meta) result = "Meta-" + result;
	if (shift) result = "Shift-" + result;
	return result;
}
function modifiers(name, event, shift) {
	if (event.altKey) name = "Alt-" + name;
	if (event.ctrlKey) name = "Ctrl-" + name;
	if (event.metaKey) name = "Meta-" + name;
	if (shift !== false && event.shiftKey) name = "Shift-" + name;
	return name;
}
var handleKeyEvents = /* @__PURE__ */ Prec.default(/* @__PURE__ */ EditorView.domEventHandlers({ keydown(event, view) {
	return runHandlers(getKeymap(view.state), event, view, "editor");
} }));
/**
Facet used for registering keymaps.

You can add multiple keymaps to an editor. Their priorities
determine their precedence (the ones specified early or with high
priority get checked first). When a handler has returned `true`
for a given key, no further handlers are called.
*/
var keymap = /* @__PURE__ */ Facet.define({ enables: handleKeyEvents });
var Keymaps = /* @__PURE__ */ new WeakMap();
function getKeymap(state) {
	let bindings = state.facet(keymap);
	let map = Keymaps.get(bindings);
	if (!map) Keymaps.set(bindings, map = buildKeymap(bindings.reduce((a, b) => a.concat(b), [])));
	return map;
}
/**
Run the key handlers registered for a given scope. The event
object should be a `"keydown"` event. Returns true if any of the
handlers handled it.
*/
function runScopeHandlers(view, event, scope) {
	return runHandlers(getKeymap(view.state), event, view, scope);
}
var storedPrefix = null;
var PrefixTimeout = 4e3;
function buildKeymap(bindings, platform = currentPlatform) {
	let bound = Object.create(null);
	let isPrefix = Object.create(null);
	let checkPrefix = (name, is) => {
		let current = isPrefix[name];
		if (current == null) isPrefix[name] = is;
		else if (current != is) throw new Error("Key binding " + name + " is used both as a regular binding and as a multi-stroke prefix");
	};
	let add = (scope, key, command, preventDefault, stopPropagation) => {
		var _a, _b;
		let scopeObj = bound[scope] || (bound[scope] = Object.create(null));
		let parts = key.split(/ (?!$)/).map((k) => normalizeKeyName(k, platform));
		for (let i = 1; i < parts.length; i++) {
			let prefix = parts.slice(0, i).join(" ");
			checkPrefix(prefix, true);
			if (!scopeObj[prefix]) scopeObj[prefix] = {
				preventDefault: true,
				stopPropagation: false,
				run: [(view) => {
					let ourObj = storedPrefix = {
						view,
						prefix,
						scope
					};
					setTimeout(() => {
						if (storedPrefix == ourObj) storedPrefix = null;
					}, PrefixTimeout);
					return true;
				}]
			};
		}
		let full = parts.join(" ");
		checkPrefix(full, false);
		let binding = scopeObj[full] || (scopeObj[full] = {
			preventDefault: false,
			stopPropagation: false,
			run: ((_b = (_a = scopeObj._any) === null || _a === void 0 ? void 0 : _a.run) === null || _b === void 0 ? void 0 : _b.slice()) || []
		});
		if (command) binding.run.push(command);
		if (preventDefault) binding.preventDefault = true;
		if (stopPropagation) binding.stopPropagation = true;
	};
	for (let b of bindings) {
		let scopes = b.scope ? b.scope.split(" ") : ["editor"];
		if (b.any) for (let scope of scopes) {
			let scopeObj = bound[scope] || (bound[scope] = Object.create(null));
			if (!scopeObj._any) scopeObj._any = {
				preventDefault: false,
				stopPropagation: false,
				run: []
			};
			let { any } = b;
			for (let key in scopeObj) scopeObj[key].run.push((view) => any(view, currentKeyEvent));
		}
		let name = b[platform] || b.key;
		if (!name) continue;
		for (let scope of scopes) {
			add(scope, name, b.run, b.preventDefault, b.stopPropagation);
			if (b.shift) add(scope, "Shift-" + name, b.shift, b.preventDefault, b.stopPropagation);
		}
	}
	return bound;
}
var currentKeyEvent = null;
function runHandlers(map, event, view, scope) {
	currentKeyEvent = event;
	let name = keyName(event);
	let isChar = codePointSize(codePointAt(name, 0)) == name.length && name != " ";
	let prefix = "", handled = false, prevented = false, stopPropagation = false;
	if (storedPrefix && storedPrefix.view == view && storedPrefix.scope == scope) {
		prefix = storedPrefix.prefix + " ";
		if (modifierCodes.indexOf(event.keyCode) < 0) {
			prevented = true;
			storedPrefix = null;
		}
	}
	let ran = /* @__PURE__ */ new Set();
	let runFor = (binding) => {
		if (binding) {
			for (let cmd of binding.run) if (!ran.has(cmd)) {
				ran.add(cmd);
				if (cmd(view)) {
					if (binding.stopPropagation) stopPropagation = true;
					return true;
				}
			}
			if (binding.preventDefault) {
				if (binding.stopPropagation) stopPropagation = true;
				prevented = true;
			}
		}
		return false;
	};
	let scopeObj = map[scope], baseName, shiftName;
	if (scopeObj) {
		if (runFor(scopeObj[prefix + modifiers(name, event, !isChar)])) handled = true;
		else if (isChar && (event.altKey || event.metaKey || event.ctrlKey) && !(browser.windows && event.ctrlKey && event.altKey) && !(browser.mac && event.altKey && !(event.ctrlKey || event.metaKey)) && (baseName = base[event.keyCode]) && baseName != name) {
			if (runFor(scopeObj[prefix + modifiers(baseName, event, true)])) handled = true;
			else if (event.shiftKey && (shiftName = shift[event.keyCode]) != name && shiftName != baseName && runFor(scopeObj[prefix + modifiers(shiftName, event, false)])) handled = true;
		} else if (isChar && event.shiftKey && runFor(scopeObj[prefix + modifiers(name, event, true)])) handled = true;
		if (!handled && runFor(scopeObj._any)) handled = true;
	}
	if (prevented) handled = true;
	if (handled && stopPropagation) event.stopPropagation();
	currentKeyEvent = null;
	return handled;
}
/**
Implementation of [`LayerMarker`](https://codemirror.net/6/docs/ref/#view.LayerMarker) that creates
a rectangle at a given set of coordinates.
*/
var RectangleMarker = class RectangleMarker {
	/**
	Create a marker with the given class and dimensions. If `width`
	is null, the DOM element will get no width style.
	*/
	constructor(className, left, top, width, height) {
		this.className = className;
		this.left = left;
		this.top = top;
		this.width = width;
		this.height = height;
	}
	draw() {
		let elt = document.createElement("div");
		elt.className = this.className;
		this.adjust(elt);
		return elt;
	}
	update(elt, prev) {
		if (prev.className != this.className) return false;
		this.adjust(elt);
		return true;
	}
	adjust(elt) {
		elt.style.left = this.left + "px";
		elt.style.top = this.top + "px";
		if (this.width != null) elt.style.width = this.width + "px";
		elt.style.height = this.height + "px";
	}
	eq(p) {
		return this.left == p.left && this.top == p.top && this.width == p.width && this.height == p.height && this.className == p.className;
	}
	/**
	Create a set of rectangles for the given selection range,
	assigning them theclass`className`. Will create a single
	rectangle for empty ranges, and a set of selection-style
	rectangles covering the range's content (in a bidi-aware
	way) for non-empty ones.
	*/
	static forRange(view, className, range) {
		if (range.empty) {
			let pos = view.coordsAtPos(range.head, range.assoc || 1);
			if (!pos) return [];
			let base = getBase(view);
			return [new RectangleMarker(className, pos.left - base.left, pos.top - base.top, null, pos.bottom - pos.top)];
		} else return rectanglesForRange(view, className, range);
	}
};
function getBase(view) {
	let rect = view.scrollDOM.getBoundingClientRect();
	return {
		left: (view.textDirection == Direction.LTR ? rect.left : rect.right - view.scrollDOM.clientWidth * view.scaleX) - view.scrollDOM.scrollLeft * view.scaleX,
		top: rect.top - view.scrollDOM.scrollTop * view.scaleY
	};
}
function wrappedLine(view, pos, side, inside) {
	let coords = view.coordsAtPos(pos, side * 2);
	if (!coords) return inside;
	let editorRect = view.dom.getBoundingClientRect();
	let y = (coords.top + coords.bottom) / 2;
	let left = view.posAtCoords({
		x: editorRect.left + 1,
		y
	});
	let right = view.posAtCoords({
		x: editorRect.right - 1,
		y
	});
	if (left == null || right == null) return inside;
	return {
		from: Math.max(inside.from, Math.min(left, right)),
		to: Math.min(inside.to, Math.max(left, right))
	};
}
function rectanglesForRange(view, className, range) {
	if (range.to <= view.viewport.from || range.from >= view.viewport.to) return [];
	let from = Math.max(range.from, view.viewport.from), to = Math.min(range.to, view.viewport.to);
	let ltr = view.textDirection == Direction.LTR;
	let content = view.contentDOM, contentRect = content.getBoundingClientRect(), base = getBase(view);
	let lineElt = content.querySelector(".cm-line"), lineStyle = lineElt && window.getComputedStyle(lineElt);
	let leftSide = contentRect.left + (lineStyle ? parseInt(lineStyle.paddingLeft) + Math.min(0, parseInt(lineStyle.textIndent)) : 0);
	let rightSide = contentRect.right - (lineStyle ? parseInt(lineStyle.paddingRight) : 0);
	let startBlock = blockAt(view, from, 1), endBlock = blockAt(view, to, -1);
	let visualStart = startBlock.type == BlockType.Text ? startBlock : null;
	let visualEnd = endBlock.type == BlockType.Text ? endBlock : null;
	if (visualStart && (view.lineWrapping || startBlock.widgetLineBreaks)) visualStart = wrappedLine(view, from, 1, visualStart);
	if (visualEnd && (view.lineWrapping || endBlock.widgetLineBreaks)) visualEnd = wrappedLine(view, to, -1, visualEnd);
	if (visualStart && visualEnd && visualStart.from == visualEnd.from && visualStart.to == visualEnd.to) return pieces(drawForLine(range.from, range.to, visualStart));
	else {
		let top = visualStart ? drawForLine(range.from, null, visualStart) : drawForWidget(startBlock, false);
		let bottom = visualEnd ? drawForLine(null, range.to, visualEnd) : drawForWidget(endBlock, true);
		let between = [];
		if ((visualStart || startBlock).to < (visualEnd || endBlock).from - (visualStart && visualEnd ? 1 : 0) || startBlock.widgetLineBreaks > 1 && top.bottom + view.defaultLineHeight / 2 < bottom.top) between.push(piece(leftSide, top.bottom, rightSide, bottom.top));
		else if (top.bottom < bottom.top && view.elementAtHeight((top.bottom + bottom.top) / 2).type == BlockType.Text) top.bottom = bottom.top = (top.bottom + bottom.top) / 2;
		return pieces(top).concat(between).concat(pieces(bottom));
	}
	function piece(left, top, right, bottom) {
		return new RectangleMarker(className, left - base.left, top - base.top, right - left, bottom - top);
	}
	function pieces({ top, bottom, horizontal }) {
		let pieces = [];
		for (let i = 0; i < horizontal.length; i += 2) pieces.push(piece(horizontal[i], top, horizontal[i + 1], bottom));
		return pieces;
	}
	function drawForLine(from, to, line) {
		let top = 1e9, bottom = -1e9, horizontal = [];
		function addSpan(from, fromOpen, to, toOpen, dir) {
			let fromCoords = view.coordsAtPos(from, from == line.to ? -2 : 2);
			let toCoords = view.coordsAtPos(to, to == line.from ? 2 : -2);
			if (!fromCoords || !toCoords) return;
			top = Math.min(fromCoords.top, toCoords.top, top);
			bottom = Math.max(fromCoords.bottom, toCoords.bottom, bottom);
			if (dir == Direction.LTR) horizontal.push(ltr && fromOpen ? leftSide : fromCoords.left, ltr && toOpen ? rightSide : toCoords.right);
			else horizontal.push(!ltr && toOpen ? leftSide : toCoords.left, !ltr && fromOpen ? rightSide : fromCoords.right);
		}
		let start = from !== null && from !== void 0 ? from : line.from, end = to !== null && to !== void 0 ? to : line.to;
		for (let r of view.visibleRanges) if (r.to > start && r.from < end) for (let pos = Math.max(r.from, start), endPos = Math.min(r.to, end);;) {
			let docLine = view.state.doc.lineAt(pos);
			for (let span of view.bidiSpans(docLine)) {
				let spanFrom = span.from + docLine.from, spanTo = span.to + docLine.from;
				if (spanFrom >= endPos) break;
				if (spanTo > pos) addSpan(Math.max(spanFrom, pos), from == null && spanFrom <= start, Math.min(spanTo, endPos), to == null && spanTo >= end, span.dir);
			}
			pos = docLine.to + 1;
			if (pos >= endPos) break;
		}
		if (horizontal.length == 0) addSpan(start, from == null, end, to == null, view.textDirection);
		return {
			top,
			bottom,
			horizontal
		};
	}
	function drawForWidget(block, top) {
		let y = contentRect.top + (top ? block.top : block.bottom);
		return {
			top: y,
			bottom: y,
			horizontal: []
		};
	}
}
function sameMarker(a, b) {
	return a.constructor == b.constructor && a.eq(b);
}
var LayerView = class {
	constructor(view, layer) {
		this.view = view;
		this.layer = layer;
		this.drawn = [];
		this.scaleX = 1;
		this.scaleY = 1;
		this.measureReq = {
			read: this.measure.bind(this),
			write: this.draw.bind(this)
		};
		this.dom = view.scrollDOM.appendChild(document.createElement("div"));
		this.dom.classList.add("cm-layer");
		if (layer.above) this.dom.classList.add("cm-layer-above");
		if (layer.class) this.dom.classList.add(layer.class);
		this.scale();
		this.dom.setAttribute("aria-hidden", "true");
		this.setOrder(view.state);
		view.requestMeasure(this.measureReq);
		if (layer.mount) layer.mount(this.dom, view);
	}
	update(update) {
		if (update.startState.facet(layerOrder) != update.state.facet(layerOrder)) this.setOrder(update.state);
		if (this.layer.update(update, this.dom) || update.geometryChanged) {
			this.scale();
			update.view.requestMeasure(this.measureReq);
		}
	}
	docViewUpdate(view) {
		if (this.layer.updateOnDocViewUpdate !== false) view.requestMeasure(this.measureReq);
	}
	setOrder(state) {
		let pos = 0, order = state.facet(layerOrder);
		while (pos < order.length && order[pos] != this.layer) pos++;
		this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - pos);
	}
	measure() {
		return this.layer.markers(this.view);
	}
	scale() {
		let { scaleX, scaleY } = this.view;
		if (scaleX != this.scaleX || scaleY != this.scaleY) {
			this.scaleX = scaleX;
			this.scaleY = scaleY;
			this.dom.style.transform = `scale(${1 / scaleX}, ${1 / scaleY})`;
		}
	}
	draw(markers) {
		if (markers.length != this.drawn.length || markers.some((p, i) => !sameMarker(p, this.drawn[i]))) {
			let old = this.dom.firstChild, oldI = 0;
			for (let marker of markers) if (marker.update && old && marker.constructor && this.drawn[oldI].constructor && marker.update(old, this.drawn[oldI])) {
				old = old.nextSibling;
				oldI++;
			} else this.dom.insertBefore(marker.draw(), old);
			while (old) {
				let next = old.nextSibling;
				old.remove();
				old = next;
			}
			this.drawn = markers;
			if (browser.safari && browser.safari_version >= 26) this.dom.style.display = this.dom.firstChild ? "" : "none";
		}
	}
	destroy() {
		if (this.layer.destroy) this.layer.destroy(this.dom, this.view);
		this.dom.remove();
	}
};
var layerOrder = /* @__PURE__ */ Facet.define();
/**
Define a layer.
*/
function layer(config) {
	return [ViewPlugin.define((v) => new LayerView(v, config)), layerOrder.of(config)];
}
var selectionConfig = /* @__PURE__ */ Facet.define({ combine(configs) {
	return combineConfig(configs, {
		cursorBlinkRate: 1200,
		drawRangeCursor: true
	}, {
		cursorBlinkRate: (a, b) => Math.min(a, b),
		drawRangeCursor: (a, b) => a || b
	});
} });
/**
Returns an extension that hides the browser's native selection and
cursor, replacing the selection with a background behind the text
(with the `cm-selectionBackground` class), and the
cursors with elements overlaid over the code (using
`cm-cursor-primary` and `cm-cursor-secondary`).

This allows the editor to display secondary selection ranges, and
tends to produce a type of selection more in line with that users
expect in a text editor (the native selection styling will often
leave gaps between lines and won't fill the horizontal space after
a line when the selection continues past it).

It does have a performance cost, in that it requires an extra DOM
layout cycle for many updates (the selection is drawn based on DOM
layout information that's only available after laying out the
content).
*/
function drawSelection(config = {}) {
	return [
		selectionConfig.of(config),
		cursorLayer,
		selectionLayer,
		hideNativeSelection,
		nativeSelectionHidden.of(true)
	];
}
function configChanged(update) {
	return update.startState.facet(selectionConfig) != update.state.facet(selectionConfig);
}
var cursorLayer = /* @__PURE__ */ layer({
	above: true,
	markers(view) {
		let { state } = view, conf = state.facet(selectionConfig);
		let cursors = [];
		for (let r of state.selection.ranges) {
			let prim = r == state.selection.main;
			if (r.empty || conf.drawRangeCursor) {
				let className = prim ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary";
				let cursor = r.empty ? r : EditorSelection.cursor(r.head, r.head > r.anchor ? -1 : 1);
				for (let piece of RectangleMarker.forRange(view, className, cursor)) cursors.push(piece);
			}
		}
		return cursors;
	},
	update(update, dom) {
		if (update.transactions.some((tr) => tr.selection)) dom.style.animationName = dom.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";
		let confChange = configChanged(update);
		if (confChange) setBlinkRate(update.state, dom);
		return update.docChanged || update.selectionSet || confChange;
	},
	mount(dom, view) {
		setBlinkRate(view.state, dom);
	},
	class: "cm-cursorLayer"
});
function setBlinkRate(state, dom) {
	dom.style.animationDuration = state.facet(selectionConfig).cursorBlinkRate + "ms";
}
var selectionLayer = /* @__PURE__ */ layer({
	above: false,
	markers(view) {
		return view.state.selection.ranges.map((r) => r.empty ? [] : RectangleMarker.forRange(view, "cm-selectionBackground", r)).reduce((a, b) => a.concat(b));
	},
	update(update, dom) {
		return update.docChanged || update.selectionSet || update.viewportChanged || configChanged(update);
	},
	class: "cm-selectionLayer"
});
var hideNativeSelection = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ EditorView.theme({
	".cm-line": {
		"& ::selection, &::selection": { backgroundColor: "transparent !important" },
		caretColor: "transparent !important"
	},
	".cm-content": {
		caretColor: "transparent !important",
		"& :focus": {
			caretColor: "initial !important",
			"&::selection, & ::selection": { backgroundColor: "Highlight !important" }
		}
	}
}));
var setDropCursorPos = /* @__PURE__ */ StateEffect.define({ map(pos, mapping) {
	return pos == null ? null : mapping.mapPos(pos);
} });
var dropCursorPos = /* @__PURE__ */ StateField.define({
	create() {
		return null;
	},
	update(pos, tr) {
		if (pos != null) pos = tr.changes.mapPos(pos);
		return tr.effects.reduce((pos, e) => e.is(setDropCursorPos) ? e.value : pos, pos);
	}
});
var drawDropCursor = /* @__PURE__ */ ViewPlugin.fromClass(class {
	constructor(view) {
		this.view = view;
		this.cursor = null;
		this.measureReq = {
			read: this.readPos.bind(this),
			write: this.drawCursor.bind(this)
		};
	}
	update(update) {
		var _a;
		let cursorPos = update.state.field(dropCursorPos);
		if (cursorPos == null) {
			if (this.cursor != null) {
				(_a = this.cursor) === null || _a === void 0 || _a.remove();
				this.cursor = null;
			}
		} else {
			if (!this.cursor) {
				this.cursor = this.view.scrollDOM.appendChild(document.createElement("div"));
				this.cursor.className = "cm-dropCursor";
			}
			if (update.startState.field(dropCursorPos) != cursorPos || update.docChanged || update.geometryChanged) this.view.requestMeasure(this.measureReq);
		}
	}
	readPos() {
		let { view } = this;
		let pos = view.state.field(dropCursorPos);
		let rect = pos != null && view.coordsAtPos(pos);
		if (!rect) return null;
		let outer = view.scrollDOM.getBoundingClientRect();
		return {
			left: rect.left - outer.left + view.scrollDOM.scrollLeft * view.scaleX,
			top: rect.top - outer.top + view.scrollDOM.scrollTop * view.scaleY,
			height: rect.bottom - rect.top
		};
	}
	drawCursor(pos) {
		if (this.cursor) {
			let { scaleX, scaleY } = this.view;
			if (pos) {
				this.cursor.style.left = pos.left / scaleX + "px";
				this.cursor.style.top = pos.top / scaleY + "px";
				this.cursor.style.height = pos.height / scaleY + "px";
			} else this.cursor.style.left = "-100000px";
		}
	}
	destroy() {
		if (this.cursor) this.cursor.remove();
	}
	setDropPos(pos) {
		if (this.view.state.field(dropCursorPos) != pos) this.view.dispatch({ effects: setDropCursorPos.of(pos) });
	}
}, { eventObservers: {
	dragover(event) {
		this.setDropPos(this.view.posAtCoords({
			x: event.clientX,
			y: event.clientY
		}));
	},
	dragleave(event) {
		if (event.target == this.view.contentDOM || !this.view.contentDOM.contains(event.relatedTarget)) this.setDropPos(null);
	},
	dragend() {
		this.setDropPos(null);
	},
	drop() {
		this.setDropPos(null);
	}
} });
/**
Draws a cursor at the current drop position when something is
dragged over the editor.
*/
function dropCursor() {
	return [dropCursorPos, drawDropCursor];
}
function iterMatches(doc, re, from, to, f) {
	re.lastIndex = 0;
	for (let cursor = doc.iterRange(from, to), pos = from, m; !cursor.next().done; pos += cursor.value.length) if (!cursor.lineBreak) while (m = re.exec(cursor.value)) f(pos + m.index, m);
}
function matchRanges(view, maxLength) {
	let visible = view.visibleRanges;
	if (visible.length == 1 && visible[0].from == view.viewport.from && visible[0].to == view.viewport.to) return visible;
	let result = [];
	for (let { from, to } of visible) {
		from = Math.max(view.state.doc.lineAt(from).from, from - maxLength);
		to = Math.min(view.state.doc.lineAt(to).to, to + maxLength);
		if (result.length && result[result.length - 1].to >= from) result[result.length - 1].to = to;
		else result.push({
			from,
			to
		});
	}
	return result;
}
/**
Helper class used to make it easier to maintain decorations on
visible code that matches a given regular expression. To be used
in a [view plugin](https://codemirror.net/6/docs/ref/#view.ViewPlugin). Instances of this object
represent a matching configuration.
*/
var MatchDecorator = class {
	/**
	Create a decorator.
	*/
	constructor(config) {
		const { regexp, decoration, decorate, boundary, maxLength = 1e3 } = config;
		if (!regexp.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
		this.regexp = regexp;
		if (decorate) this.addMatch = (match, view, from, add) => decorate(add, from, from + match[0].length, match, view);
		else if (typeof decoration == "function") this.addMatch = (match, view, from, add) => {
			let deco = decoration(match, view, from);
			if (deco) add(from, from + match[0].length, deco);
		};
		else if (decoration) this.addMatch = (match, _view, from, add) => add(from, from + match[0].length, decoration);
		else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
		this.boundary = boundary;
		this.maxLength = maxLength;
	}
	/**
	Compute the full set of decorations for matches in the given
	view's viewport. You'll want to call this when initializing your
	plugin.
	*/
	createDeco(view) {
		let build = new RangeSetBuilder(), add = build.add.bind(build);
		for (let { from, to } of matchRanges(view, this.maxLength)) iterMatches(view.state.doc, this.regexp, from, to, (from, m) => this.addMatch(m, view, from, add));
		return build.finish();
	}
	/**
	Update a set of decorations for a view update. `deco` _must_ be
	the set of decorations produced by _this_ `MatchDecorator` for
	the view state before the update.
	*/
	updateDeco(update, deco) {
		let changeFrom = 1e9, changeTo = -1;
		if (update.docChanged) update.changes.iterChanges((_f, _t, from, to) => {
			if (to >= update.view.viewport.from && from <= update.view.viewport.to) {
				changeFrom = Math.min(from, changeFrom);
				changeTo = Math.max(to, changeTo);
			}
		});
		if (update.viewportMoved || changeTo - changeFrom > 1e3) return this.createDeco(update.view);
		if (changeTo > -1) return this.updateRange(update.view, deco.map(update.changes), changeFrom, changeTo);
		return deco;
	}
	updateRange(view, deco, updateFrom, updateTo) {
		for (let r of view.visibleRanges) {
			let from = Math.max(r.from, updateFrom), to = Math.min(r.to, updateTo);
			if (to >= from) {
				let fromLine = view.state.doc.lineAt(from), toLine = fromLine.to < to ? view.state.doc.lineAt(to) : fromLine;
				let start = Math.max(r.from, fromLine.from), end = Math.min(r.to, toLine.to);
				if (this.boundary) {
					for (; from > fromLine.from; from--) if (this.boundary.test(fromLine.text[from - 1 - fromLine.from])) {
						start = from;
						break;
					}
					for (; to < toLine.to; to++) if (this.boundary.test(toLine.text[to - toLine.from])) {
						end = to;
						break;
					}
				}
				let ranges = [], m;
				let add = (from, to, deco) => ranges.push(deco.range(from, to));
				if (fromLine == toLine) {
					this.regexp.lastIndex = start - fromLine.from;
					while ((m = this.regexp.exec(fromLine.text)) && m.index < end - fromLine.from) this.addMatch(m, view, m.index + fromLine.from, add);
				} else iterMatches(view.state.doc, this.regexp, start, end, (from, m) => this.addMatch(m, view, from, add));
				deco = deco.update({
					filterFrom: start,
					filterTo: end,
					filter: (from, to) => from < start || to > end,
					add: ranges
				});
			}
		}
		return deco;
	}
};
var UnicodeRegexpSupport = /x/.unicode != null ? "gu" : "g";
var Specials = /* @__PURE__ */ new RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]", UnicodeRegexpSupport);
var Names = {
	0: "null",
	7: "bell",
	8: "backspace",
	10: "newline",
	11: "vertical tab",
	13: "carriage return",
	27: "escape",
	8203: "zero width space",
	8204: "zero width non-joiner",
	8205: "zero width joiner",
	8206: "left-to-right mark",
	8207: "right-to-left mark",
	8232: "line separator",
	8237: "left-to-right override",
	8238: "right-to-left override",
	8294: "left-to-right isolate",
	8295: "right-to-left isolate",
	8297: "pop directional isolate",
	8233: "paragraph separator",
	65279: "zero width no-break space",
	65532: "object replacement"
};
var _supportsTabSize = null;
function supportsTabSize() {
	var _a;
	if (_supportsTabSize == null && typeof document != "undefined" && document.body) {
		let styles = document.body.style;
		_supportsTabSize = ((_a = styles.tabSize) !== null && _a !== void 0 ? _a : styles.MozTabSize) != null;
	}
	return _supportsTabSize || false;
}
var specialCharConfig = /* @__PURE__ */ Facet.define({ combine(configs) {
	let config = combineConfig(configs, {
		render: null,
		specialChars: Specials,
		addSpecialChars: null
	});
	if (config.replaceTabs = !supportsTabSize()) config.specialChars = new RegExp("	|" + config.specialChars.source, UnicodeRegexpSupport);
	if (config.addSpecialChars) config.specialChars = new RegExp(config.specialChars.source + "|" + config.addSpecialChars.source, UnicodeRegexpSupport);
	return config;
} });
/**
Returns an extension that installs highlighting of special
characters.
*/
function highlightSpecialChars(config = {}) {
	return [specialCharConfig.of(config), specialCharPlugin()];
}
var _plugin = null;
function specialCharPlugin() {
	return _plugin || (_plugin = ViewPlugin.fromClass(class {
		constructor(view) {
			this.view = view;
			this.decorations = Decoration.none;
			this.decorationCache = Object.create(null);
			this.decorator = this.makeDecorator(view.state.facet(specialCharConfig));
			this.decorations = this.decorator.createDeco(view);
		}
		makeDecorator(conf) {
			return new MatchDecorator({
				regexp: conf.specialChars,
				decoration: (m, view, pos) => {
					let { doc } = view.state;
					let code = codePointAt(m[0], 0);
					if (code == 9) {
						let line = doc.lineAt(pos);
						let size = view.state.tabSize, col = countColumn(line.text, size, pos - line.from);
						return Decoration.replace({ widget: new TabWidget((size - col % size) * this.view.defaultCharacterWidth / this.view.scaleX) });
					}
					return this.decorationCache[code] || (this.decorationCache[code] = Decoration.replace({ widget: new SpecialCharWidget(conf, code) }));
				},
				boundary: conf.replaceTabs ? void 0 : /[^]/
			});
		}
		update(update) {
			let conf = update.state.facet(specialCharConfig);
			if (update.startState.facet(specialCharConfig) != conf) {
				this.decorator = this.makeDecorator(conf);
				this.decorations = this.decorator.createDeco(update.view);
			} else this.decorations = this.decorator.updateDeco(update, this.decorations);
		}
	}, { decorations: (v) => v.decorations }));
}
var DefaultPlaceholder = "•";
function placeholder$1(code) {
	if (code >= 32) return DefaultPlaceholder;
	if (code == 10) return "␤";
	return String.fromCharCode(9216 + code);
}
var SpecialCharWidget = class extends WidgetType {
	constructor(options, code) {
		super();
		this.options = options;
		this.code = code;
	}
	eq(other) {
		return other.code == this.code;
	}
	toDOM(view) {
		let ph = placeholder$1(this.code);
		let desc = view.state.phrase("Control character") + " " + (Names[this.code] || "0x" + this.code.toString(16));
		let custom = this.options.render && this.options.render(this.code, desc, ph);
		if (custom) return custom;
		let span = document.createElement("span");
		span.textContent = ph;
		span.title = desc;
		span.setAttribute("aria-label", desc);
		span.className = "cm-specialChar";
		return span;
	}
	ignoreEvent() {
		return false;
	}
};
var TabWidget = class extends WidgetType {
	constructor(width) {
		super();
		this.width = width;
	}
	eq(other) {
		return other.width == this.width;
	}
	toDOM() {
		let span = document.createElement("span");
		span.textContent = "	";
		span.className = "cm-tab";
		span.style.width = this.width + "px";
		return span;
	}
	ignoreEvent() {
		return false;
	}
};
/**
Mark lines that have a cursor on them with the `"cm-activeLine"`
DOM class.
*/
function highlightActiveLine() {
	return activeLineHighlighter;
}
var lineDeco = /* @__PURE__ */ Decoration.line({ class: "cm-activeLine" });
var activeLineHighlighter = /* @__PURE__ */ ViewPlugin.fromClass(class {
	constructor(view) {
		this.decorations = this.getDeco(view);
	}
	update(update) {
		if (update.docChanged || update.selectionSet) this.decorations = this.getDeco(update.view);
	}
	getDeco(view) {
		let lastLineStart = -1, deco = [];
		for (let r of view.state.selection.ranges) {
			let line = view.lineBlockAt(r.head);
			if (line.from > lastLineStart) {
				deco.push(lineDeco.range(line.from));
				lastLineStart = line.from;
			}
		}
		return Decoration.set(deco);
	}
}, { decorations: (v) => v.decorations });
var Outside = "-10000px";
var TooltipViewManager = class {
	constructor(view, facet, createTooltipView, removeTooltipView) {
		this.facet = facet;
		this.createTooltipView = createTooltipView;
		this.removeTooltipView = removeTooltipView;
		this.input = view.state.facet(facet);
		this.tooltips = this.input.filter((t) => t);
		let prev = null;
		this.tooltipViews = this.tooltips.map((t) => prev = createTooltipView(t, prev));
	}
	update(update, above) {
		var _a;
		let input = update.state.facet(this.facet);
		let tooltips = input.filter((x) => x);
		if (input === this.input) {
			for (let t of this.tooltipViews) if (t.update) t.update(update);
			return false;
		}
		let tooltipViews = [], newAbove = above ? [] : null;
		for (let i = 0; i < tooltips.length; i++) {
			let tip = tooltips[i], known = -1;
			if (!tip) continue;
			for (let i = 0; i < this.tooltips.length; i++) {
				let other = this.tooltips[i];
				if (other && other.create == tip.create) known = i;
			}
			if (known < 0) {
				tooltipViews[i] = this.createTooltipView(tip, i ? tooltipViews[i - 1] : null);
				if (newAbove) newAbove[i] = !!tip.above;
			} else {
				let tooltipView = tooltipViews[i] = this.tooltipViews[known];
				if (newAbove) newAbove[i] = above[known];
				if (tooltipView.update) tooltipView.update(update);
			}
		}
		for (let t of this.tooltipViews) if (tooltipViews.indexOf(t) < 0) {
			this.removeTooltipView(t);
			(_a = t.destroy) === null || _a === void 0 || _a.call(t);
		}
		if (above) {
			newAbove.forEach((val, i) => above[i] = val);
			above.length = newAbove.length;
		}
		this.input = input;
		this.tooltips = tooltips;
		this.tooltipViews = tooltipViews;
		return true;
	}
};
/**
Creates an extension that configures tooltip behavior.
*/
function tooltips(config = {}) {
	return tooltipConfig.of(config);
}
function windowSpace(view) {
	let docElt = view.dom.ownerDocument.documentElement;
	return {
		top: 0,
		left: 0,
		bottom: docElt.clientHeight,
		right: docElt.clientWidth
	};
}
var tooltipConfig = /* @__PURE__ */ Facet.define({ combine: (values) => {
	var _a, _b, _c;
	return {
		position: browser.ios ? "absolute" : ((_a = values.find((conf) => conf.position)) === null || _a === void 0 ? void 0 : _a.position) || "fixed",
		parent: ((_b = values.find((conf) => conf.parent)) === null || _b === void 0 ? void 0 : _b.parent) || null,
		tooltipSpace: ((_c = values.find((conf) => conf.tooltipSpace)) === null || _c === void 0 ? void 0 : _c.tooltipSpace) || windowSpace
	};
} });
var knownHeight = /* @__PURE__ */ new WeakMap();
var tooltipPlugin = /* @__PURE__ */ ViewPlugin.fromClass(class {
	constructor(view) {
		this.view = view;
		this.above = [];
		this.inView = true;
		this.madeAbsolute = false;
		this.lastTransaction = 0;
		this.measureTimeout = -1;
		let config = view.state.facet(tooltipConfig);
		this.position = config.position;
		this.parent = config.parent;
		this.classes = view.themeClasses;
		this.createContainer();
		this.measureReq = {
			read: this.readMeasure.bind(this),
			write: this.writeMeasure.bind(this),
			key: this
		};
		this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null;
		this.manager = new TooltipViewManager(view, showTooltip, (t, p) => this.createTooltip(t, p), (t) => {
			if (this.resizeObserver) this.resizeObserver.unobserve(t.dom);
			t.dom.remove();
		});
		this.above = this.manager.tooltips.map((t) => !!t.above);
		this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((entries) => {
			if (Date.now() > this.lastTransaction - 50 && entries.length > 0 && entries[entries.length - 1].intersectionRatio < 1) this.measureSoon();
		}, { threshold: [1] }) : null;
		this.observeIntersection();
		view.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this));
		this.maybeMeasure();
	}
	createContainer() {
		if (this.parent) {
			this.container = document.createElement("div");
			this.container.style.position = "relative";
			this.container.className = this.view.themeClasses;
			this.parent.appendChild(this.container);
		} else this.container = this.view.dom;
	}
	observeIntersection() {
		if (this.intersectionObserver) {
			this.intersectionObserver.disconnect();
			for (let tooltip of this.manager.tooltipViews) this.intersectionObserver.observe(tooltip.dom);
		}
	}
	measureSoon() {
		if (this.measureTimeout < 0) this.measureTimeout = setTimeout(() => {
			this.measureTimeout = -1;
			this.maybeMeasure();
		}, 50);
	}
	update(update) {
		if (update.transactions.length) this.lastTransaction = Date.now();
		let updated = this.manager.update(update, this.above);
		if (updated) this.observeIntersection();
		let shouldMeasure = updated || update.geometryChanged;
		let newConfig = update.state.facet(tooltipConfig);
		if (newConfig.position != this.position && !this.madeAbsolute) {
			this.position = newConfig.position;
			for (let t of this.manager.tooltipViews) t.dom.style.position = this.position;
			shouldMeasure = true;
		}
		if (newConfig.parent != this.parent) {
			if (this.parent) this.container.remove();
			this.parent = newConfig.parent;
			this.createContainer();
			for (let t of this.manager.tooltipViews) this.container.appendChild(t.dom);
			shouldMeasure = true;
		} else if (this.parent && this.view.themeClasses != this.classes) this.classes = this.container.className = this.view.themeClasses;
		if (shouldMeasure) this.maybeMeasure();
	}
	createTooltip(tooltip, prev) {
		let tooltipView = tooltip.create(this.view);
		let before = prev ? prev.dom : null;
		tooltipView.dom.classList.add("cm-tooltip");
		if (tooltip.arrow && !tooltipView.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
			let arrow = document.createElement("div");
			arrow.className = "cm-tooltip-arrow";
			tooltipView.dom.appendChild(arrow);
		}
		tooltipView.dom.style.position = this.position;
		tooltipView.dom.style.top = Outside;
		tooltipView.dom.style.left = "0px";
		this.container.insertBefore(tooltipView.dom, before);
		if (tooltipView.mount) tooltipView.mount(this.view);
		if (this.resizeObserver) this.resizeObserver.observe(tooltipView.dom);
		return tooltipView;
	}
	destroy() {
		var _a, _b, _c;
		this.view.win.removeEventListener("resize", this.measureSoon);
		for (let tooltipView of this.manager.tooltipViews) {
			tooltipView.dom.remove();
			(_a = tooltipView.destroy) === null || _a === void 0 || _a.call(tooltipView);
		}
		if (this.parent) this.container.remove();
		(_b = this.resizeObserver) === null || _b === void 0 || _b.disconnect();
		(_c = this.intersectionObserver) === null || _c === void 0 || _c.disconnect();
		clearTimeout(this.measureTimeout);
	}
	readMeasure() {
		let scaleX = 1, scaleY = 1, makeAbsolute = false;
		if (this.position == "fixed" && this.manager.tooltipViews.length) {
			let { dom } = this.manager.tooltipViews[0];
			if (browser.safari) {
				let rect = dom.getBoundingClientRect();
				makeAbsolute = Math.abs(rect.top + 1e4) > 1 || Math.abs(rect.left) > 1;
			} else makeAbsolute = !!dom.offsetParent && dom.offsetParent != this.container.ownerDocument.body;
		}
		if (makeAbsolute || this.position == "absolute") if (this.parent) {
			let rect = this.parent.getBoundingClientRect();
			if (rect.width && rect.height) {
				scaleX = rect.width / this.parent.offsetWidth;
				scaleY = rect.height / this.parent.offsetHeight;
			}
		} else ({scaleX, scaleY} = this.view.viewState);
		let visible = this.view.scrollDOM.getBoundingClientRect(), margins = getScrollMargins(this.view);
		return {
			visible: {
				left: visible.left + margins.left,
				top: visible.top + margins.top,
				right: visible.right - margins.right,
				bottom: visible.bottom - margins.bottom
			},
			parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
			pos: this.manager.tooltips.map((t, i) => {
				let tv = this.manager.tooltipViews[i];
				return tv.getCoords ? tv.getCoords(t.pos) : this.view.coordsAtPos(t.pos);
			}),
			size: this.manager.tooltipViews.map(({ dom }) => dom.getBoundingClientRect()),
			space: this.view.state.facet(tooltipConfig).tooltipSpace(this.view),
			scaleX,
			scaleY,
			makeAbsolute
		};
	}
	writeMeasure(measured) {
		var _a;
		if (measured.makeAbsolute) {
			this.madeAbsolute = true;
			this.position = "absolute";
			for (let t of this.manager.tooltipViews) t.dom.style.position = "absolute";
		}
		let { visible, space, scaleX, scaleY } = measured;
		let others = [];
		for (let i = 0; i < this.manager.tooltips.length; i++) {
			let tooltip = this.manager.tooltips[i], tView = this.manager.tooltipViews[i], { dom } = tView;
			let pos = measured.pos[i], size = measured.size[i];
			if (!pos || tooltip.clip !== false && (pos.bottom <= Math.max(visible.top, space.top) || pos.top >= Math.min(visible.bottom, space.bottom) || pos.right < Math.max(visible.left, space.left) - .1 || pos.left > Math.min(visible.right, space.right) + .1)) {
				dom.style.top = Outside;
				continue;
			}
			let arrow = tooltip.arrow ? tView.dom.querySelector(".cm-tooltip-arrow") : null;
			let arrowHeight = arrow ? 7 : 0;
			let width = size.right - size.left, height = (_a = knownHeight.get(tView)) !== null && _a !== void 0 ? _a : size.bottom - size.top;
			let offset = tView.offset || noOffset, ltr = this.view.textDirection == Direction.LTR;
			let left = size.width > space.right - space.left ? ltr ? space.left : space.right - size.width : ltr ? Math.max(space.left, Math.min(pos.left - (arrow ? 14 : 0) + offset.x, space.right - width)) : Math.min(Math.max(space.left, pos.left - width + (arrow ? 14 : 0) - offset.x), space.right - width);
			let above = this.above[i];
			if (!tooltip.strictSide && (above ? pos.top - height - arrowHeight - offset.y < space.top : pos.bottom + height + arrowHeight + offset.y > space.bottom) && above == space.bottom - pos.bottom > pos.top - space.top) above = this.above[i] = !above;
			let spaceVert = (above ? pos.top - space.top : space.bottom - pos.bottom) - arrowHeight;
			if (spaceVert < height && tView.resize !== false) {
				if (spaceVert < this.view.defaultLineHeight) {
					dom.style.top = Outside;
					continue;
				}
				knownHeight.set(tView, height);
				dom.style.height = (height = spaceVert) / scaleY + "px";
			} else if (dom.style.height) dom.style.height = "";
			let top = above ? pos.top - height - arrowHeight - offset.y : pos.bottom + arrowHeight + offset.y;
			let right = left + width;
			if (tView.overlap !== true) {
				for (let r of others) if (r.left < right && r.right > left && r.top < top + height && r.bottom > top) top = above ? r.top - height - 2 - arrowHeight : r.bottom + arrowHeight + 2;
			}
			if (this.position == "absolute") {
				dom.style.top = (top - measured.parent.top) / scaleY + "px";
				setLeftStyle(dom, (left - measured.parent.left) / scaleX);
			} else {
				dom.style.top = top / scaleY + "px";
				setLeftStyle(dom, left / scaleX);
			}
			if (arrow) {
				let arrowLeft = pos.left + (ltr ? offset.x : -offset.x) - (left + 14 - 7);
				arrow.style.left = arrowLeft / scaleX + "px";
			}
			if (tView.overlap !== true) others.push({
				left,
				top,
				right,
				bottom: top + height
			});
			dom.classList.toggle("cm-tooltip-above", above);
			dom.classList.toggle("cm-tooltip-below", !above);
			if (tView.positioned) tView.positioned(measured.space);
		}
	}
	maybeMeasure() {
		if (this.manager.tooltips.length) {
			if (this.view.inView) this.view.requestMeasure(this.measureReq);
			if (this.inView != this.view.inView) {
				this.inView = this.view.inView;
				if (!this.inView) for (let tv of this.manager.tooltipViews) tv.dom.style.top = Outside;
			}
		}
	}
}, { eventObservers: { scroll() {
	this.maybeMeasure();
} } });
function setLeftStyle(elt, value) {
	let current = parseInt(elt.style.left, 10);
	if (isNaN(current) || Math.abs(value - current) > 1) elt.style.left = value + "px";
}
var baseTheme$4 = /* @__PURE__ */ EditorView.baseTheme({
	".cm-tooltip": {
		zIndex: 500,
		boxSizing: "border-box"
	},
	"&light .cm-tooltip": {
		border: "1px solid #bbb",
		backgroundColor: "#f5f5f5"
	},
	"&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" },
	"&dark .cm-tooltip": {
		backgroundColor: "#333338",
		color: "white"
	},
	".cm-tooltip-arrow": {
		height: `7px`,
		width: `14px`,
		position: "absolute",
		zIndex: -1,
		overflow: "hidden",
		"&:before, &:after": {
			content: "''",
			position: "absolute",
			width: 0,
			height: 0,
			borderLeft: `7px solid transparent`,
			borderRight: `7px solid transparent`
		},
		".cm-tooltip-above &": {
			bottom: `-7px`,
			"&:before": { borderTop: `7px solid #bbb` },
			"&:after": {
				borderTop: `7px solid #f5f5f5`,
				bottom: "1px"
			}
		},
		".cm-tooltip-below &": {
			top: `-7px`,
			"&:before": { borderBottom: `7px solid #bbb` },
			"&:after": {
				borderBottom: `7px solid #f5f5f5`,
				top: "1px"
			}
		}
	},
	"&dark .cm-tooltip .cm-tooltip-arrow": {
		"&:before": {
			borderTopColor: "#333338",
			borderBottomColor: "#333338"
		},
		"&:after": {
			borderTopColor: "transparent",
			borderBottomColor: "transparent"
		}
	}
});
var noOffset = {
	x: 0,
	y: 0
};
/**
Facet to which an extension can add a value to show a tooltip.
*/
var showTooltip = /* @__PURE__ */ Facet.define({ enables: [tooltipPlugin, baseTheme$4] });
var showHoverTooltip = /* @__PURE__ */ Facet.define({ combine: (inputs) => inputs.reduce((a, i) => a.concat(i), []) });
var HoverTooltipHost = class HoverTooltipHost {
	static create(view) {
		return new HoverTooltipHost(view);
	}
	constructor(view) {
		this.view = view;
		this.mounted = false;
		this.dom = document.createElement("div");
		this.dom.classList.add("cm-tooltip-hover");
		this.manager = new TooltipViewManager(view, showHoverTooltip, (t, p) => this.createHostedView(t, p), (t) => t.dom.remove());
	}
	createHostedView(tooltip, prev) {
		let hostedView = tooltip.create(this.view);
		hostedView.dom.classList.add("cm-tooltip-section");
		this.dom.insertBefore(hostedView.dom, prev ? prev.dom.nextSibling : this.dom.firstChild);
		if (this.mounted && hostedView.mount) hostedView.mount(this.view);
		return hostedView;
	}
	mount(view) {
		for (let hostedView of this.manager.tooltipViews) if (hostedView.mount) hostedView.mount(view);
		this.mounted = true;
	}
	positioned(space) {
		for (let hostedView of this.manager.tooltipViews) if (hostedView.positioned) hostedView.positioned(space);
	}
	update(update) {
		this.manager.update(update);
	}
	destroy() {
		var _a;
		for (let t of this.manager.tooltipViews) (_a = t.destroy) === null || _a === void 0 || _a.call(t);
	}
	passProp(name) {
		let value = void 0;
		for (let view of this.manager.tooltipViews) {
			let given = view[name];
			if (given !== void 0) {
				if (value === void 0) value = given;
				else if (value !== given) return void 0;
			}
		}
		return value;
	}
	get offset() {
		return this.passProp("offset");
	}
	get getCoords() {
		return this.passProp("getCoords");
	}
	get overlap() {
		return this.passProp("overlap");
	}
	get resize() {
		return this.passProp("resize");
	}
};
var showHoverTooltipHost = /* @__PURE__ */ showTooltip.compute([showHoverTooltip], (state) => {
	let tooltips = state.facet(showHoverTooltip);
	if (tooltips.length === 0) return null;
	return {
		pos: Math.min(...tooltips.map((t) => t.pos)),
		end: Math.max(...tooltips.map((t) => {
			var _a;
			return (_a = t.end) !== null && _a !== void 0 ? _a : t.pos;
		})),
		create: HoverTooltipHost.create,
		above: tooltips[0].above,
		arrow: tooltips.some((t) => t.arrow)
	};
});
var HoverPlugin = class {
	constructor(view, source, field, setHover, hoverTime) {
		this.view = view;
		this.source = source;
		this.field = field;
		this.setHover = setHover;
		this.hoverTime = hoverTime;
		this.hoverTimeout = -1;
		this.restartTimeout = -1;
		this.pending = null;
		this.lastMove = {
			x: 0,
			y: 0,
			target: view.dom,
			time: 0
		};
		this.checkHover = this.checkHover.bind(this);
		view.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this));
		view.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
	}
	update() {
		if (this.pending) {
			this.pending = null;
			clearTimeout(this.restartTimeout);
			this.restartTimeout = setTimeout(() => this.startHover(), 20);
		}
	}
	get active() {
		return this.view.state.field(this.field);
	}
	checkHover() {
		this.hoverTimeout = -1;
		if (this.active.length) return;
		let hovered = Date.now() - this.lastMove.time;
		if (hovered < this.hoverTime) this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - hovered);
		else this.startHover();
	}
	startHover() {
		clearTimeout(this.restartTimeout);
		let { view, lastMove } = this;
		let tile = view.docView.tile.nearest(lastMove.target);
		if (!tile) return;
		let pos, side = 1;
		if (tile.isWidget()) pos = tile.posAtStart;
		else {
			pos = view.posAtCoords(lastMove);
			if (pos == null) return;
			let posCoords = view.coordsAtPos(pos);
			if (!posCoords || lastMove.y < posCoords.top || lastMove.y > posCoords.bottom || lastMove.x < posCoords.left - view.defaultCharacterWidth || lastMove.x > posCoords.right + view.defaultCharacterWidth) return;
			let bidi = view.bidiSpans(view.state.doc.lineAt(pos)).find((s) => s.from <= pos && s.to >= pos);
			let rtl = bidi && bidi.dir == Direction.RTL ? -1 : 1;
			side = lastMove.x < posCoords.left ? -rtl : rtl;
		}
		let open = this.source(view, pos, side);
		if (open === null || open === void 0 ? void 0 : open.then) {
			let pending = this.pending = { pos };
			open.then((result) => {
				if (this.pending == pending) {
					this.pending = null;
					if (result && !(Array.isArray(result) && !result.length)) view.dispatch({ effects: this.setHover.of(Array.isArray(result) ? result : [result]) });
				}
			}, (e) => logException(view.state, e, "hover tooltip"));
		} else if (open && !(Array.isArray(open) && !open.length)) view.dispatch({ effects: this.setHover.of(Array.isArray(open) ? open : [open]) });
	}
	get tooltip() {
		let plugin = this.view.plugin(tooltipPlugin);
		let index = plugin ? plugin.manager.tooltips.findIndex((t) => t.create == HoverTooltipHost.create) : -1;
		return index > -1 ? plugin.manager.tooltipViews[index] : null;
	}
	mousemove(event) {
		var _a, _b;
		this.lastMove = {
			x: event.clientX,
			y: event.clientY,
			target: event.target,
			time: Date.now()
		};
		if (this.hoverTimeout < 0) this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime);
		let { active, tooltip } = this;
		if (active.length && tooltip && !isInTooltip(tooltip.dom, event) || this.pending) {
			let { pos } = active[0] || this.pending, end = (_b = (_a = active[0]) === null || _a === void 0 ? void 0 : _a.end) !== null && _b !== void 0 ? _b : pos;
			if (pos == end ? this.view.posAtCoords(this.lastMove) != pos : !isOverRange(this.view, pos, end, event.clientX, event.clientY)) {
				this.view.dispatch({ effects: this.setHover.of([]) });
				this.pending = null;
			}
		}
	}
	mouseleave(event) {
		clearTimeout(this.hoverTimeout);
		this.hoverTimeout = -1;
		let { active } = this;
		if (active.length) {
			let { tooltip } = this;
			if (!(tooltip && tooltip.dom.contains(event.relatedTarget))) this.view.dispatch({ effects: this.setHover.of([]) });
			else this.watchTooltipLeave(tooltip.dom);
		}
	}
	watchTooltipLeave(tooltip) {
		let watch = (event) => {
			tooltip.removeEventListener("mouseleave", watch);
			if (this.active.length && !this.view.dom.contains(event.relatedTarget)) this.view.dispatch({ effects: this.setHover.of([]) });
		};
		tooltip.addEventListener("mouseleave", watch);
	}
	destroy() {
		clearTimeout(this.hoverTimeout);
		this.view.dom.removeEventListener("mouseleave", this.mouseleave);
		this.view.dom.removeEventListener("mousemove", this.mousemove);
	}
};
var tooltipMargin = 4;
function isInTooltip(tooltip, event) {
	let { left, right, top, bottom } = tooltip.getBoundingClientRect(), arrow;
	if (arrow = tooltip.querySelector(".cm-tooltip-arrow")) {
		let arrowRect = arrow.getBoundingClientRect();
		top = Math.min(arrowRect.top, top);
		bottom = Math.max(arrowRect.bottom, bottom);
	}
	return event.clientX >= left - tooltipMargin && event.clientX <= right + tooltipMargin && event.clientY >= top - tooltipMargin && event.clientY <= bottom + tooltipMargin;
}
function isOverRange(view, from, to, x, y, margin) {
	let rect = view.scrollDOM.getBoundingClientRect();
	let docBottom = view.documentTop + view.documentPadding.top + view.contentHeight;
	if (rect.left > x || rect.right < x || rect.top > y || Math.min(rect.bottom, docBottom) < y) return false;
	let pos = view.posAtCoords({
		x,
		y
	}, false);
	return pos >= from && pos <= to;
}
/**
Set up a hover tooltip, which shows up when the pointer hovers
over ranges of text. The callback is called when the mouse hovers
over the document text. It should, if there is a tooltip
associated with position `pos`, return the tooltip description
(either directly or in a promise). The `side` argument indicates
on which side of the position the pointer is—it will be -1 if the
pointer is before the position, 1 if after the position.

Note that all hover tooltips are hosted within a single tooltip
container element. This allows multiple tooltips over the same
range to be "merged" together without overlapping.

The return value is a valid [editor extension](https://codemirror.net/6/docs/ref/#state.Extension)
but also provides an `active` property holding a state field that
can be used to read the currently active tooltips produced by this
extension.
*/
function hoverTooltip(source, options = {}) {
	let setHover = StateEffect.define();
	let hoverState = StateField.define({
		create() {
			return [];
		},
		update(value, tr) {
			if (value.length) {
				if (options.hideOnChange && (tr.docChanged || tr.selection)) value = [];
				else if (options.hideOn) value = value.filter((v) => !options.hideOn(tr, v));
				if (tr.docChanged) {
					let mapped = [];
					for (let tooltip of value) {
						let newPos = tr.changes.mapPos(tooltip.pos, -1, MapMode.TrackDel);
						if (newPos != null) {
							let copy = Object.assign(Object.create(null), tooltip);
							copy.pos = newPos;
							if (copy.end != null) copy.end = tr.changes.mapPos(copy.end);
							mapped.push(copy);
						}
					}
					value = mapped;
				}
			}
			for (let effect of tr.effects) {
				if (effect.is(setHover)) value = effect.value;
				if (effect.is(closeHoverTooltipEffect)) value = [];
			}
			return value;
		},
		provide: (f) => showHoverTooltip.from(f)
	});
	return {
		active: hoverState,
		extension: [
			hoverState,
			ViewPlugin.define((view) => new HoverPlugin(view, source, hoverState, setHover, options.hoverTime || 300)),
			showHoverTooltipHost
		]
	};
}
/**
Get the active tooltip view for a given tooltip, if available.
*/
function getTooltip(view, tooltip) {
	let plugin = view.plugin(tooltipPlugin);
	if (!plugin) return null;
	let found = plugin.manager.tooltips.indexOf(tooltip);
	return found < 0 ? null : plugin.manager.tooltipViews[found];
}
var closeHoverTooltipEffect = /* @__PURE__ */ StateEffect.define();
var panelConfig = /* @__PURE__ */ Facet.define({ combine(configs) {
	let topContainer, bottomContainer;
	for (let c of configs) {
		topContainer = topContainer || c.topContainer;
		bottomContainer = bottomContainer || c.bottomContainer;
	}
	return {
		topContainer,
		bottomContainer
	};
} });
/**
Get the active panel created by the given constructor, if any.
This can be useful when you need access to your panels' DOM
structure.
*/
function getPanel(view, panel) {
	let plugin = view.plugin(panelPlugin);
	let index = plugin ? plugin.specs.indexOf(panel) : -1;
	return index > -1 ? plugin.panels[index] : null;
}
var panelPlugin = /* @__PURE__ */ ViewPlugin.fromClass(class {
	constructor(view) {
		this.input = view.state.facet(showPanel);
		this.specs = this.input.filter((s) => s);
		this.panels = this.specs.map((spec) => spec(view));
		let conf = view.state.facet(panelConfig);
		this.top = new PanelGroup(view, true, conf.topContainer);
		this.bottom = new PanelGroup(view, false, conf.bottomContainer);
		this.top.sync(this.panels.filter((p) => p.top));
		this.bottom.sync(this.panels.filter((p) => !p.top));
		for (let p of this.panels) {
			p.dom.classList.add("cm-panel");
			if (p.mount) p.mount();
		}
	}
	update(update) {
		let conf = update.state.facet(panelConfig);
		if (this.top.container != conf.topContainer) {
			this.top.sync([]);
			this.top = new PanelGroup(update.view, true, conf.topContainer);
		}
		if (this.bottom.container != conf.bottomContainer) {
			this.bottom.sync([]);
			this.bottom = new PanelGroup(update.view, false, conf.bottomContainer);
		}
		this.top.syncClasses();
		this.bottom.syncClasses();
		let input = update.state.facet(showPanel);
		if (input != this.input) {
			let specs = input.filter((x) => x);
			let panels = [], top = [], bottom = [], mount = [];
			for (let spec of specs) {
				let known = this.specs.indexOf(spec), panel;
				if (known < 0) {
					panel = spec(update.view);
					mount.push(panel);
				} else {
					panel = this.panels[known];
					if (panel.update) panel.update(update);
				}
				panels.push(panel);
				(panel.top ? top : bottom).push(panel);
			}
			this.specs = specs;
			this.panels = panels;
			this.top.sync(top);
			this.bottom.sync(bottom);
			for (let p of mount) {
				p.dom.classList.add("cm-panel");
				if (p.mount) p.mount();
			}
		} else for (let p of this.panels) if (p.update) p.update(update);
	}
	destroy() {
		this.top.sync([]);
		this.bottom.sync([]);
	}
}, { provide: (plugin) => EditorView.scrollMargins.of((view) => {
	let value = view.plugin(plugin);
	return value && {
		top: value.top.scrollMargin(),
		bottom: value.bottom.scrollMargin()
	};
}) });
var PanelGroup = class {
	constructor(view, top, container) {
		this.view = view;
		this.top = top;
		this.container = container;
		this.dom = void 0;
		this.classes = "";
		this.panels = [];
		this.syncClasses();
	}
	sync(panels) {
		for (let p of this.panels) if (p.destroy && panels.indexOf(p) < 0) p.destroy();
		this.panels = panels;
		this.syncDOM();
	}
	syncDOM() {
		if (this.panels.length == 0) {
			if (this.dom) {
				this.dom.remove();
				this.dom = void 0;
			}
			return;
		}
		if (!this.dom) {
			this.dom = document.createElement("div");
			this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
			this.dom.style[this.top ? "top" : "bottom"] = "0";
			let parent = this.container || this.view.dom;
			parent.insertBefore(this.dom, this.top ? parent.firstChild : null);
		}
		let curDOM = this.dom.firstChild;
		for (let panel of this.panels) if (panel.dom.parentNode == this.dom) {
			while (curDOM != panel.dom) curDOM = rm(curDOM);
			curDOM = curDOM.nextSibling;
		} else this.dom.insertBefore(panel.dom, curDOM);
		while (curDOM) curDOM = rm(curDOM);
	}
	scrollMargin() {
		return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
	}
	syncClasses() {
		if (!this.container || this.classes == this.view.themeClasses) return;
		for (let cls of this.classes.split(" ")) if (cls) this.container.classList.remove(cls);
		for (let cls of (this.classes = this.view.themeClasses).split(" ")) if (cls) this.container.classList.add(cls);
	}
};
function rm(node) {
	let next = node.nextSibling;
	node.remove();
	return next;
}
/**
Opening a panel is done by providing a constructor function for
the panel through this facet. (The panel is closed again when its
constructor is no longer provided.) Values of `null` are ignored.
*/
var showPanel = /* @__PURE__ */ Facet.define({ enables: panelPlugin });
/**
A gutter marker represents a bit of information attached to a line
in a specific gutter. Your own custom markers have to extend this
class.
*/
var GutterMarker = class extends RangeValue {
	/**
	@internal
	*/
	compare(other) {
		return this == other || this.constructor == other.constructor && this.eq(other);
	}
	/**
	Compare this marker to another marker of the same type.
	*/
	eq(other) {
		return false;
	}
	/**
	Called if the marker has a `toDOM` method and its representation
	was removed from a gutter.
	*/
	destroy(dom) {}
};
GutterMarker.prototype.elementClass = "";
GutterMarker.prototype.toDOM = void 0;
GutterMarker.prototype.mapMode = MapMode.TrackBefore;
GutterMarker.prototype.startSide = GutterMarker.prototype.endSide = -1;
GutterMarker.prototype.point = true;
/**
Facet used to add a class to all gutter elements for a given line.
Markers given to this facet should _only_ define an
[`elementclass`](https://codemirror.net/6/docs/ref/#view.GutterMarker.elementClass), not a
[`toDOM`](https://codemirror.net/6/docs/ref/#view.GutterMarker.toDOM) (or the marker will appear
in all gutters for the line).
*/
var gutterLineClass = /* @__PURE__ */ Facet.define();
/**
Facet used to add a class to all gutter elements next to a widget.
Should not provide widgets with a `toDOM` method.
*/
var gutterWidgetClass = /* @__PURE__ */ Facet.define();
var defaults$1 = {
	class: "",
	renderEmptyElements: false,
	elementStyle: "",
	markers: () => RangeSet.empty,
	lineMarker: () => null,
	widgetMarker: () => null,
	lineMarkerChange: null,
	initialSpacer: null,
	updateSpacer: null,
	domEventHandlers: {},
	side: "before"
};
var activeGutters = /* @__PURE__ */ Facet.define();
/**
Define an editor gutter. The order in which the gutters appear is
determined by their extension priority.
*/
function gutter(config) {
	return [gutters(), activeGutters.of({
		...defaults$1,
		...config
	})];
}
var unfixGutters = /* @__PURE__ */ Facet.define({ combine: (values) => values.some((x) => x) });
/**
The gutter-drawing plugin is automatically enabled when you add a
gutter, but you can use this function to explicitly configure it.

Unless `fixed` is explicitly set to `false`, the gutters are
fixed, meaning they don't scroll along with the content
horizontally (except on Internet Explorer, which doesn't support
CSS [`position:
sticky`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky)).
*/
function gutters(config) {
	let result = [gutterView];
	if (config && config.fixed === false) result.push(unfixGutters.of(true));
	return result;
}
var gutterView = /* @__PURE__ */ ViewPlugin.fromClass(class {
	constructor(view) {
		this.view = view;
		this.domAfter = null;
		this.prevViewport = view.viewport;
		this.dom = document.createElement("div");
		this.dom.className = "cm-gutters cm-gutters-before";
		this.dom.setAttribute("aria-hidden", "true");
		this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px";
		this.gutters = view.state.facet(activeGutters).map((conf) => new SingleGutterView(view, conf));
		this.fixed = !view.state.facet(unfixGutters);
		for (let gutter of this.gutters) if (gutter.config.side == "after") this.getDOMAfter().appendChild(gutter.dom);
		else this.dom.appendChild(gutter.dom);
		if (this.fixed) this.dom.style.position = "sticky";
		this.syncGutters(false);
		view.scrollDOM.insertBefore(this.dom, view.contentDOM);
	}
	getDOMAfter() {
		if (!this.domAfter) {
			this.domAfter = document.createElement("div");
			this.domAfter.className = "cm-gutters cm-gutters-after";
			this.domAfter.setAttribute("aria-hidden", "true");
			this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px";
			this.domAfter.style.position = this.fixed ? "sticky" : "";
			this.view.scrollDOM.appendChild(this.domAfter);
		}
		return this.domAfter;
	}
	update(update) {
		if (this.updateGutters(update)) {
			let vpA = this.prevViewport, vpB = update.view.viewport;
			let vpOverlap = Math.min(vpA.to, vpB.to) - Math.max(vpA.from, vpB.from);
			this.syncGutters(vpOverlap < (vpB.to - vpB.from) * .8);
		}
		if (update.geometryChanged) {
			let min = this.view.contentHeight / this.view.scaleY + "px";
			this.dom.style.minHeight = min;
			if (this.domAfter) this.domAfter.style.minHeight = min;
		}
		if (this.view.state.facet(unfixGutters) != !this.fixed) {
			this.fixed = !this.fixed;
			this.dom.style.position = this.fixed ? "sticky" : "";
			if (this.domAfter) this.domAfter.style.position = this.fixed ? "sticky" : "";
		}
		this.prevViewport = update.view.viewport;
	}
	syncGutters(detach) {
		let after = this.dom.nextSibling;
		if (detach) {
			this.dom.remove();
			if (this.domAfter) this.domAfter.remove();
		}
		let lineClasses = RangeSet.iter(this.view.state.facet(gutterLineClass), this.view.viewport.from);
		let classSet = [];
		let contexts = this.gutters.map((gutter) => new UpdateContext(gutter, this.view.viewport, -this.view.documentPadding.top));
		for (let line of this.view.viewportLineBlocks) {
			if (classSet.length) classSet = [];
			if (Array.isArray(line.type)) {
				let first = true;
				for (let b of line.type) if (b.type == BlockType.Text && first) {
					advanceCursor(lineClasses, classSet, b.from);
					for (let cx of contexts) cx.line(this.view, b, classSet);
					first = false;
				} else if (b.widget) for (let cx of contexts) cx.widget(this.view, b);
			} else if (line.type == BlockType.Text) {
				advanceCursor(lineClasses, classSet, line.from);
				for (let cx of contexts) cx.line(this.view, line, classSet);
			} else if (line.widget) for (let cx of contexts) cx.widget(this.view, line);
		}
		for (let cx of contexts) cx.finish();
		if (detach) {
			this.view.scrollDOM.insertBefore(this.dom, after);
			if (this.domAfter) this.view.scrollDOM.appendChild(this.domAfter);
		}
	}
	updateGutters(update) {
		let prev = update.startState.facet(activeGutters), cur = update.state.facet(activeGutters);
		let change = update.docChanged || update.heightChanged || update.viewportChanged || !RangeSet.eq(update.startState.facet(gutterLineClass), update.state.facet(gutterLineClass), update.view.viewport.from, update.view.viewport.to);
		if (prev == cur) {
			for (let gutter of this.gutters) if (gutter.update(update)) change = true;
		} else {
			change = true;
			let gutters = [];
			for (let conf of cur) {
				let known = prev.indexOf(conf);
				if (known < 0) gutters.push(new SingleGutterView(this.view, conf));
				else {
					this.gutters[known].update(update);
					gutters.push(this.gutters[known]);
				}
			}
			for (let g of this.gutters) {
				g.dom.remove();
				if (gutters.indexOf(g) < 0) g.destroy();
			}
			for (let g of gutters) if (g.config.side == "after") this.getDOMAfter().appendChild(g.dom);
			else this.dom.appendChild(g.dom);
			this.gutters = gutters;
		}
		return change;
	}
	destroy() {
		for (let view of this.gutters) view.destroy();
		this.dom.remove();
		if (this.domAfter) this.domAfter.remove();
	}
}, { provide: (plugin) => EditorView.scrollMargins.of((view) => {
	let value = view.plugin(plugin);
	if (!value || value.gutters.length == 0 || !value.fixed) return null;
	let before = value.dom.offsetWidth * view.scaleX, after = value.domAfter ? value.domAfter.offsetWidth * view.scaleX : 0;
	return view.textDirection == Direction.LTR ? {
		left: before,
		right: after
	} : {
		right: before,
		left: after
	};
}) });
function asArray(val) {
	return Array.isArray(val) ? val : [val];
}
function advanceCursor(cursor, collect, pos) {
	while (cursor.value && cursor.from <= pos) {
		if (cursor.from == pos) collect.push(cursor.value);
		cursor.next();
	}
}
var UpdateContext = class {
	constructor(gutter, viewport, height) {
		this.gutter = gutter;
		this.height = height;
		this.i = 0;
		this.cursor = RangeSet.iter(gutter.markers, viewport.from);
	}
	addElement(view, block, markers) {
		let { gutter } = this, above = (block.top - this.height) / view.scaleY, height = block.height / view.scaleY;
		if (this.i == gutter.elements.length) {
			let newElt = new GutterElement(view, height, above, markers);
			gutter.elements.push(newElt);
			gutter.dom.appendChild(newElt.dom);
		} else gutter.elements[this.i].update(view, height, above, markers);
		this.height = block.bottom;
		this.i++;
	}
	line(view, line, extraMarkers) {
		let localMarkers = [];
		advanceCursor(this.cursor, localMarkers, line.from);
		if (extraMarkers.length) localMarkers = localMarkers.concat(extraMarkers);
		let forLine = this.gutter.config.lineMarker(view, line, localMarkers);
		if (forLine) localMarkers.unshift(forLine);
		let gutter = this.gutter;
		if (localMarkers.length == 0 && !gutter.config.renderEmptyElements) return;
		this.addElement(view, line, localMarkers);
	}
	widget(view, block) {
		let marker = this.gutter.config.widgetMarker(view, block.widget, block), markers = marker ? [marker] : null;
		for (let cls of view.state.facet(gutterWidgetClass)) {
			let marker = cls(view, block.widget, block);
			if (marker) (markers || (markers = [])).push(marker);
		}
		if (markers) this.addElement(view, block, markers);
	}
	finish() {
		let gutter = this.gutter;
		while (gutter.elements.length > this.i) {
			let last = gutter.elements.pop();
			gutter.dom.removeChild(last.dom);
			last.destroy();
		}
	}
};
var SingleGutterView = class {
	constructor(view, config) {
		this.view = view;
		this.config = config;
		this.elements = [];
		this.spacer = null;
		this.dom = document.createElement("div");
		this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
		for (let prop in config.domEventHandlers) this.dom.addEventListener(prop, (event) => {
			let target = event.target, y;
			if (target != this.dom && this.dom.contains(target)) {
				while (target.parentNode != this.dom) target = target.parentNode;
				let rect = target.getBoundingClientRect();
				y = (rect.top + rect.bottom) / 2;
			} else y = event.clientY;
			let line = view.lineBlockAtHeight(y - view.documentTop);
			if (config.domEventHandlers[prop](view, line, event)) event.preventDefault();
		});
		this.markers = asArray(config.markers(view));
		if (config.initialSpacer) {
			this.spacer = new GutterElement(view, 0, 0, [config.initialSpacer(view)]);
			this.dom.appendChild(this.spacer.dom);
			this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none";
		}
	}
	update(update) {
		let prevMarkers = this.markers;
		this.markers = asArray(this.config.markers(update.view));
		if (this.spacer && this.config.updateSpacer) {
			let updated = this.config.updateSpacer(this.spacer.markers[0], update);
			if (updated != this.spacer.markers[0]) this.spacer.update(update.view, 0, 0, [updated]);
		}
		let vp = update.view.viewport;
		return !RangeSet.eq(this.markers, prevMarkers, vp.from, vp.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(update) : false);
	}
	destroy() {
		for (let elt of this.elements) elt.destroy();
	}
};
var GutterElement = class {
	constructor(view, height, above, markers) {
		this.height = -1;
		this.above = 0;
		this.markers = [];
		this.dom = document.createElement("div");
		this.dom.className = "cm-gutterElement";
		this.update(view, height, above, markers);
	}
	update(view, height, above, markers) {
		if (this.height != height) {
			this.height = height;
			this.dom.style.height = height + "px";
		}
		if (this.above != above) this.dom.style.marginTop = (this.above = above) ? above + "px" : "";
		if (!sameMarkers(this.markers, markers)) this.setMarkers(view, markers);
	}
	setMarkers(view, markers) {
		let cls = "cm-gutterElement", domPos = this.dom.firstChild;
		for (let iNew = 0, iOld = 0;;) {
			let skipTo = iOld, marker = iNew < markers.length ? markers[iNew++] : null, matched = false;
			if (marker) {
				let c = marker.elementClass;
				if (c) cls += " " + c;
				for (let i = iOld; i < this.markers.length; i++) if (this.markers[i].compare(marker)) {
					skipTo = i;
					matched = true;
					break;
				}
			} else skipTo = this.markers.length;
			while (iOld < skipTo) {
				let next = this.markers[iOld++];
				if (next.toDOM) {
					next.destroy(domPos);
					let after = domPos.nextSibling;
					domPos.remove();
					domPos = after;
				}
			}
			if (!marker) break;
			if (marker.toDOM) if (matched) domPos = domPos.nextSibling;
			else this.dom.insertBefore(marker.toDOM(view), domPos);
			if (matched) iOld++;
		}
		this.dom.className = cls;
		this.markers = markers;
	}
	destroy() {
		this.setMarkers(null, []);
	}
};
function sameMarkers(a, b) {
	if (a.length != b.length) return false;
	for (let i = 0; i < a.length; i++) if (!a[i].compare(b[i])) return false;
	return true;
}
/**
Facet used to provide markers to the line number gutter.
*/
var lineNumberMarkers = /* @__PURE__ */ Facet.define();
/**
Facet used to create markers in the line number gutter next to widgets.
*/
var lineNumberWidgetMarker = /* @__PURE__ */ Facet.define();
var lineNumberConfig = /* @__PURE__ */ Facet.define({ combine(values) {
	return combineConfig(values, {
		formatNumber: String,
		domEventHandlers: {}
	}, { domEventHandlers(a, b) {
		let result = Object.assign({}, a);
		for (let event in b) {
			let exists = result[event], add = b[event];
			result[event] = exists ? (view, line, event) => exists(view, line, event) || add(view, line, event) : add;
		}
		return result;
	} });
} });
var NumberMarker = class extends GutterMarker {
	constructor(number) {
		super();
		this.number = number;
	}
	eq(other) {
		return this.number == other.number;
	}
	toDOM() {
		return document.createTextNode(this.number);
	}
};
function formatNumber(view, number) {
	return view.state.facet(lineNumberConfig).formatNumber(number, view.state);
}
var lineNumberGutter = /* @__PURE__ */ activeGutters.compute([lineNumberConfig], (state) => ({
	class: "cm-lineNumbers",
	renderEmptyElements: false,
	markers(view) {
		return view.state.facet(lineNumberMarkers);
	},
	lineMarker(view, line, others) {
		if (others.some((m) => m.toDOM)) return null;
		return new NumberMarker(formatNumber(view, view.state.doc.lineAt(line.from).number));
	},
	widgetMarker: (view, widget, block) => {
		for (let m of view.state.facet(lineNumberWidgetMarker)) {
			let result = m(view, widget, block);
			if (result) return result;
		}
		return null;
	},
	lineMarkerChange: (update) => update.startState.facet(lineNumberConfig) != update.state.facet(lineNumberConfig),
	initialSpacer(view) {
		return new NumberMarker(formatNumber(view, maxLineNumber(view.state.doc.lines)));
	},
	updateSpacer(spacer, update) {
		let max = formatNumber(update.view, maxLineNumber(update.view.state.doc.lines));
		return max == spacer.number ? spacer : new NumberMarker(max);
	},
	domEventHandlers: state.facet(lineNumberConfig).domEventHandlers,
	side: "before"
}));
/**
Create a line number gutter extension.
*/
function lineNumbers(config = {}) {
	return [
		lineNumberConfig.of(config),
		gutters(),
		lineNumberGutter
	];
}
function maxLineNumber(lines) {
	let last = 9;
	while (last < lines) last = last * 10 + 9;
	return last;
}
var activeLineGutterMarker = /* @__PURE__ */ new class extends GutterMarker {
	constructor() {
		super(...arguments);
		this.elementClass = "cm-activeLineGutter";
	}
}();
var activeLineGutterHighlighter = /* @__PURE__ */ gutterLineClass.compute(["selection"], (state) => {
	let marks = [], last = -1;
	for (let range of state.selection.ranges) {
		let linePos = state.doc.lineAt(range.head).from;
		if (linePos > last) {
			last = linePos;
			marks.push(activeLineGutterMarker.range(linePos));
		}
	}
	return RangeSet.of(marks);
});
/**
Returns an extension that adds a `cm-activeLineGutter` class to
all gutter elements on the [active
line](https://codemirror.net/6/docs/ref/#view.highlightActiveLine).
*/
function highlightActiveLineGutter() {
	return activeLineGutterHighlighter;
}
//#endregion
//#region ../../../node_modules/.pnpm/@lezer+common@1.2.1/node_modules/@lezer/common/dist/index.js
/**
The default maximum length of a `TreeBuffer` node.
*/
var DefaultBufferLength = 1024;
var nextPropID = 0;
var Range = class {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}
};
/**
Each [node type](#common.NodeType) or [individual tree](#common.Tree)
can have metadata associated with it in props. Instances of this
class represent prop names.
*/
var NodeProp = class {
	/**
	Create a new node prop type.
	*/
	constructor(config = {}) {
		this.id = nextPropID++;
		this.perNode = !!config.perNode;
		this.deserialize = config.deserialize || (() => {
			throw new Error("This node type doesn't define a deserialize function");
		});
	}
	/**
	This is meant to be used with
	[`NodeSet.extend`](#common.NodeSet.extend) or
	[`LRParser.configure`](#lr.ParserConfig.props) to compute
	prop values for each node type in the set. Takes a [match
	object](#common.NodeType^match) or function that returns undefined
	if the node type doesn't get this prop, and the prop's value if
	it does.
	*/
	add(match) {
		if (this.perNode) throw new RangeError("Can't add per-node props to node types");
		if (typeof match != "function") match = NodeType.match(match);
		return (type) => {
			let result = match(type);
			return result === void 0 ? null : [this, result];
		};
	}
};
/**
Prop that is used to describe matching delimiters. For opening
delimiters, this holds an array of node names (written as a
space-separated string when declaring this prop in a grammar)
for the node types of closing delimiters that match it.
*/
NodeProp.closedBy = new NodeProp({ deserialize: (str) => str.split(" ") });
/**
The inverse of [`closedBy`](#common.NodeProp^closedBy). This is
attached to closing delimiters, holding an array of node names
of types of matching opening delimiters.
*/
NodeProp.openedBy = new NodeProp({ deserialize: (str) => str.split(" ") });
/**
Used to assign node types to groups (for example, all node
types that represent an expression could be tagged with an
`"Expression"` group).
*/
NodeProp.group = new NodeProp({ deserialize: (str) => str.split(" ") });
/**
Attached to nodes to indicate these should be
[displayed](https://codemirror.net/docs/ref/#language.syntaxTree)
in a bidirectional text isolate, so that direction-neutral
characters on their sides don't incorrectly get associated with
surrounding text. You'll generally want to set this for nodes
that contain arbitrary text, like strings and comments, and for
nodes that appear _inside_ arbitrary text, like HTML tags. When
not given a value, in a grammar declaration, defaults to
`"auto"`.
*/
NodeProp.isolate = new NodeProp({ deserialize: (value) => {
	if (value && value != "rtl" && value != "ltr" && value != "auto") throw new RangeError("Invalid value for isolate: " + value);
	return value || "auto";
} });
/**
The hash of the [context](#lr.ContextTracker.constructor)
that the node was parsed in, if any. Used to limit reuse of
contextual nodes.
*/
NodeProp.contextHash = new NodeProp({ perNode: true });
/**
The distance beyond the end of the node that the tokenizer
looked ahead for any of the tokens inside the node. (The LR
parser only stores this when it is larger than 25, for
efficiency reasons.)
*/
NodeProp.lookAhead = new NodeProp({ perNode: true });
/**
This per-node prop is used to replace a given node, or part of a
node, with another tree. This is useful to include trees from
different languages in mixed-language parsers.
*/
NodeProp.mounted = new NodeProp({ perNode: true });
/**
A mounted tree, which can be [stored](#common.NodeProp^mounted) on
a tree node to indicate that parts of its content are
represented by another tree.
*/
var MountedTree = class {
	constructor(tree, overlay, parser) {
		this.tree = tree;
		this.overlay = overlay;
		this.parser = parser;
	}
	/**
	@internal
	*/
	static get(tree) {
		return tree && tree.props && tree.props[NodeProp.mounted.id];
	}
};
var noProps = Object.create(null);
/**
Each node in a syntax tree has a node type associated with it.
*/
var NodeType = class NodeType {
	/**
	@internal
	*/
	constructor(name, props, id, flags = 0) {
		this.name = name;
		this.props = props;
		this.id = id;
		this.flags = flags;
	}
	/**
	Define a node type.
	*/
	static define(spec) {
		let props = spec.props && spec.props.length ? Object.create(null) : noProps;
		let flags = (spec.top ? 1 : 0) | (spec.skipped ? 2 : 0) | (spec.error ? 4 : 0) | (spec.name == null ? 8 : 0);
		let type = new NodeType(spec.name || "", props, spec.id, flags);
		if (spec.props) for (let src of spec.props) {
			if (!Array.isArray(src)) src = src(type);
			if (src) {
				if (src[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
				props[src[0].id] = src[1];
			}
		}
		return type;
	}
	/**
	Retrieves a node prop for this type. Will return `undefined` if
	the prop isn't present on this node.
	*/
	prop(prop) {
		return this.props[prop.id];
	}
	/**
	True when this is the top node of a grammar.
	*/
	get isTop() {
		return (this.flags & 1) > 0;
	}
	/**
	True when this node is produced by a skip rule.
	*/
	get isSkipped() {
		return (this.flags & 2) > 0;
	}
	/**
	Indicates whether this is an error node.
	*/
	get isError() {
		return (this.flags & 4) > 0;
	}
	/**
	When true, this node type doesn't correspond to a user-declared
	named node, for example because it is used to cache repetition.
	*/
	get isAnonymous() {
		return (this.flags & 8) > 0;
	}
	/**
	Returns true when this node's name or one of its
	[groups](#common.NodeProp^group) matches the given string.
	*/
	is(name) {
		if (typeof name == "string") {
			if (this.name == name) return true;
			let group = this.prop(NodeProp.group);
			return group ? group.indexOf(name) > -1 : false;
		}
		return this.id == name;
	}
	/**
	Create a function from node types to arbitrary values by
	specifying an object whose property names are node or
	[group](#common.NodeProp^group) names. Often useful with
	[`NodeProp.add`](#common.NodeProp.add). You can put multiple
	names, separated by spaces, in a single property name to map
	multiple node names to a single value.
	*/
	static match(map) {
		let direct = Object.create(null);
		for (let prop in map) for (let name of prop.split(" ")) direct[name] = map[prop];
		return (node) => {
			for (let groups = node.prop(NodeProp.group), i = -1; i < (groups ? groups.length : 0); i++) {
				let found = direct[i < 0 ? node.name : groups[i]];
				if (found) return found;
			}
		};
	}
};
/**
An empty dummy node type to use when no actual type is available.
*/
NodeType.none = new NodeType("", Object.create(null), 0, 8);
/**
A node set holds a collection of node types. It is used to
compactly represent trees by storing their type ids, rather than a
full pointer to the type object, in a numeric array. Each parser
[has](#lr.LRParser.nodeSet) a node set, and [tree
buffers](#common.TreeBuffer) can only store collections of nodes
from the same set. A set can have a maximum of 2**16 (65536) node
types in it, so that the ids fit into 16-bit typed array slots.
*/
var NodeSet = class NodeSet {
	/**
	Create a set with the given types. The `id` property of each
	type should correspond to its position within the array.
	*/
	constructor(types) {
		this.types = types;
		for (let i = 0; i < types.length; i++) if (types[i].id != i) throw new RangeError("Node type ids should correspond to array positions when creating a node set");
	}
	/**
	Create a copy of this set with some node properties added. The
	arguments to this method can be created with
	[`NodeProp.add`](#common.NodeProp.add).
	*/
	extend(...props) {
		let newTypes = [];
		for (let type of this.types) {
			let newProps = null;
			for (let source of props) {
				let add = source(type);
				if (add) {
					if (!newProps) newProps = Object.assign({}, type.props);
					newProps[add[0].id] = add[1];
				}
			}
			newTypes.push(newProps ? new NodeType(type.name, newProps, type.id, type.flags) : type);
		}
		return new NodeSet(newTypes);
	}
};
var CachedNode = /* @__PURE__ */ new WeakMap(), CachedInnerNode = /* @__PURE__ */ new WeakMap();
/**
Options that control iteration. Can be combined with the `|`
operator to enable multiple ones.
*/
var IterMode;
(function(IterMode) {
	/**
	When enabled, iteration will only visit [`Tree`](#common.Tree)
	objects, not nodes packed into
	[`TreeBuffer`](#common.TreeBuffer)s.
	*/
	IterMode[IterMode["ExcludeBuffers"] = 1] = "ExcludeBuffers";
	/**
	Enable this to make iteration include anonymous nodes (such as
	the nodes that wrap repeated grammar constructs into a balanced
	tree).
	*/
	IterMode[IterMode["IncludeAnonymous"] = 2] = "IncludeAnonymous";
	/**
	By default, regular [mounted](#common.NodeProp^mounted) nodes
	replace their base node in iteration. Enable this to ignore them
	instead.
	*/
	IterMode[IterMode["IgnoreMounts"] = 4] = "IgnoreMounts";
	/**
	This option only applies in
	[`enter`](#common.SyntaxNode.enter)-style methods. It tells the
	library to not enter mounted overlays if one covers the given
	position.
	*/
	IterMode[IterMode["IgnoreOverlays"] = 8] = "IgnoreOverlays";
})(IterMode || (IterMode = {}));
/**
A piece of syntax tree. There are two ways to approach these
trees: the way they are actually stored in memory, and the
convenient way.

Syntax trees are stored as a tree of `Tree` and `TreeBuffer`
objects. By packing detail information into `TreeBuffer` leaf
nodes, the representation is made a lot more memory-efficient.

However, when you want to actually work with tree nodes, this
representation is very awkward, so most client code will want to
use the [`TreeCursor`](#common.TreeCursor) or
[`SyntaxNode`](#common.SyntaxNode) interface instead, which provides
a view on some part of this data structure, and can be used to
move around to adjacent nodes.
*/
var Tree = class Tree {
	/**
	Construct a new tree. See also [`Tree.build`](#common.Tree^build).
	*/
	constructor(type, children, positions, length, props) {
		this.type = type;
		this.children = children;
		this.positions = positions;
		this.length = length;
		/**
		@internal
		*/
		this.props = null;
		if (props && props.length) {
			this.props = Object.create(null);
			for (let [prop, value] of props) this.props[typeof prop == "number" ? prop : prop.id] = value;
		}
	}
	/**
	@internal
	*/
	toString() {
		let mounted = MountedTree.get(this);
		if (mounted && !mounted.overlay) return mounted.tree.toString();
		let children = "";
		for (let ch of this.children) {
			let str = ch.toString();
			if (str) {
				if (children) children += ",";
				children += str;
			}
		}
		return !this.type.name ? children : (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (children.length ? "(" + children + ")" : "");
	}
	/**
	Get a [tree cursor](#common.TreeCursor) positioned at the top of
	the tree. Mode can be used to [control](#common.IterMode) which
	nodes the cursor visits.
	*/
	cursor(mode = 0) {
		return new TreeCursor(this.topNode, mode);
	}
	/**
	Get a [tree cursor](#common.TreeCursor) pointing into this tree
	at the given position and side (see
	[`moveTo`](#common.TreeCursor.moveTo).
	*/
	cursorAt(pos, side = 0, mode = 0) {
		let cursor = new TreeCursor(CachedNode.get(this) || this.topNode);
		cursor.moveTo(pos, side);
		CachedNode.set(this, cursor._tree);
		return cursor;
	}
	/**
	Get a [syntax node](#common.SyntaxNode) object for the top of the
	tree.
	*/
	get topNode() {
		return new TreeNode(this, 0, 0, null);
	}
	/**
	Get the [syntax node](#common.SyntaxNode) at the given position.
	If `side` is -1, this will move into nodes that end at the
	position. If 1, it'll move into nodes that start at the
	position. With 0, it'll only enter nodes that cover the position
	from both sides.
	
	Note that this will not enter
	[overlays](#common.MountedTree.overlay), and you often want
	[`resolveInner`](#common.Tree.resolveInner) instead.
	*/
	resolve(pos, side = 0) {
		let node = resolveNode(CachedNode.get(this) || this.topNode, pos, side, false);
		CachedNode.set(this, node);
		return node;
	}
	/**
	Like [`resolve`](#common.Tree.resolve), but will enter
	[overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
	pointing into the innermost overlaid tree at the given position
	(with parent links going through all parent structure, including
	the host trees).
	*/
	resolveInner(pos, side = 0) {
		let node = resolveNode(CachedInnerNode.get(this) || this.topNode, pos, side, true);
		CachedInnerNode.set(this, node);
		return node;
	}
	/**
	In some situations, it can be useful to iterate through all
	nodes around a position, including those in overlays that don't
	directly cover the position. This method gives you an iterator
	that will produce all nodes, from small to big, around the given
	position.
	*/
	resolveStack(pos, side = 0) {
		return stackIterator(this, pos, side);
	}
	/**
	Iterate over the tree and its children, calling `enter` for any
	node that touches the `from`/`to` region (if given) before
	running over such a node's children, and `leave` (if given) when
	leaving the node. When `enter` returns `false`, that node will
	not have its children iterated over (or `leave` called).
	*/
	iterate(spec) {
		let { enter, leave, from = 0, to = this.length } = spec;
		let mode = spec.mode || 0, anon = (mode & IterMode.IncludeAnonymous) > 0;
		for (let c = this.cursor(mode | IterMode.IncludeAnonymous);;) {
			let entered = false;
			if (c.from <= to && c.to >= from && (!anon && c.type.isAnonymous || enter(c) !== false)) {
				if (c.firstChild()) continue;
				entered = true;
			}
			for (;;) {
				if (entered && leave && (anon || !c.type.isAnonymous)) leave(c);
				if (c.nextSibling()) break;
				if (!c.parent()) return;
				entered = true;
			}
		}
	}
	/**
	Get the value of the given [node prop](#common.NodeProp) for this
	node. Works with both per-node and per-type props.
	*/
	prop(prop) {
		return !prop.perNode ? this.type.prop(prop) : this.props ? this.props[prop.id] : void 0;
	}
	/**
	Returns the node's [per-node props](#common.NodeProp.perNode) in a
	format that can be passed to the [`Tree`](#common.Tree)
	constructor.
	*/
	get propValues() {
		let result = [];
		if (this.props) for (let id in this.props) result.push([+id, this.props[id]]);
		return result;
	}
	/**
	Balance the direct children of this tree, producing a copy of
	which may have children grouped into subtrees with type
	[`NodeType.none`](#common.NodeType^none).
	*/
	balance(config = {}) {
		return this.children.length <= 8 ? this : balanceRange(NodeType.none, this.children, this.positions, 0, this.children.length, 0, this.length, (children, positions, length) => new Tree(this.type, children, positions, length, this.propValues), config.makeTree || ((children, positions, length) => new Tree(NodeType.none, children, positions, length)));
	}
	/**
	Build a tree from a postfix-ordered buffer of node information,
	or a cursor over such a buffer.
	*/
	static build(data) {
		return buildTree(data);
	}
};
/**
The empty tree
*/
Tree.empty = new Tree(NodeType.none, [], [], 0);
var FlatBufferCursor = class FlatBufferCursor {
	constructor(buffer, index) {
		this.buffer = buffer;
		this.index = index;
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	get pos() {
		return this.index;
	}
	next() {
		this.index -= 4;
	}
	fork() {
		return new FlatBufferCursor(this.buffer, this.index);
	}
};
/**
Tree buffers contain (type, start, end, endIndex) quads for each
node. In such a buffer, nodes are stored in prefix order (parents
before children, with the endIndex of the parent indicating which
children belong to it).
*/
var TreeBuffer = class TreeBuffer {
	/**
	Create a tree buffer.
	*/
	constructor(buffer, length, set) {
		this.buffer = buffer;
		this.length = length;
		this.set = set;
	}
	/**
	@internal
	*/
	get type() {
		return NodeType.none;
	}
	/**
	@internal
	*/
	toString() {
		let result = [];
		for (let index = 0; index < this.buffer.length;) {
			result.push(this.childString(index));
			index = this.buffer[index + 3];
		}
		return result.join(",");
	}
	/**
	@internal
	*/
	childString(index) {
		let id = this.buffer[index], endIndex = this.buffer[index + 3];
		let type = this.set.types[id], result = type.name;
		if (/\W/.test(result) && !type.isError) result = JSON.stringify(result);
		index += 4;
		if (endIndex == index) return result;
		let children = [];
		while (index < endIndex) {
			children.push(this.childString(index));
			index = this.buffer[index + 3];
		}
		return result + "(" + children.join(",") + ")";
	}
	/**
	@internal
	*/
	findChild(startIndex, endIndex, dir, pos, side) {
		let { buffer } = this, pick = -1;
		for (let i = startIndex; i != endIndex; i = buffer[i + 3]) if (checkSide(side, pos, buffer[i + 1], buffer[i + 2])) {
			pick = i;
			if (dir > 0) break;
		}
		return pick;
	}
	/**
	@internal
	*/
	slice(startI, endI, from) {
		let b = this.buffer;
		let copy = new Uint16Array(endI - startI), len = 0;
		for (let i = startI, j = 0; i < endI;) {
			copy[j++] = b[i++];
			copy[j++] = b[i++] - from;
			let to = copy[j++] = b[i++] - from;
			copy[j++] = b[i++] - startI;
			len = Math.max(len, to);
		}
		return new TreeBuffer(copy, len, this.set);
	}
};
function checkSide(side, pos, from, to) {
	switch (side) {
		case -2: return from < pos;
		case -1: return to >= pos && from < pos;
		case 0: return from < pos && to > pos;
		case 1: return from <= pos && to > pos;
		case 2: return to > pos;
		case 4: return true;
	}
}
function resolveNode(node, pos, side, overlays) {
	var _a;
	while (node.from == node.to || (side < 1 ? node.from >= pos : node.from > pos) || (side > -1 ? node.to <= pos : node.to < pos)) {
		let parent = !overlays && node instanceof TreeNode && node.index < 0 ? null : node.parent;
		if (!parent) return node;
		node = parent;
	}
	let mode = overlays ? 0 : IterMode.IgnoreOverlays;
	if (overlays) {
		for (let scan = node, parent = scan.parent; parent; scan = parent, parent = scan.parent) if (scan instanceof TreeNode && scan.index < 0 && ((_a = parent.enter(pos, side, mode)) === null || _a === void 0 ? void 0 : _a.from) != scan.from) node = parent;
	}
	for (;;) {
		let inner = node.enter(pos, side, mode);
		if (!inner) return node;
		node = inner;
	}
}
var BaseNode = class {
	cursor(mode = 0) {
		return new TreeCursor(this, mode);
	}
	getChild(type, before = null, after = null) {
		let r = getChildren(this, type, before, after);
		return r.length ? r[0] : null;
	}
	getChildren(type, before = null, after = null) {
		return getChildren(this, type, before, after);
	}
	resolve(pos, side = 0) {
		return resolveNode(this, pos, side, false);
	}
	resolveInner(pos, side = 0) {
		return resolveNode(this, pos, side, true);
	}
	matchContext(context) {
		return matchNodeContext(this, context);
	}
	enterUnfinishedNodesBefore(pos) {
		let scan = this.childBefore(pos), node = this;
		while (scan) {
			let last = scan.lastChild;
			if (!last || last.to != scan.to) break;
			if (last.type.isError && last.from == last.to) {
				node = scan;
				scan = last.prevSibling;
			} else scan = last;
		}
		return node;
	}
	get node() {
		return this;
	}
	get next() {
		return this.parent;
	}
};
var TreeNode = class TreeNode extends BaseNode {
	constructor(_tree, from, index, _parent) {
		super();
		this._tree = _tree;
		this.from = from;
		this.index = index;
		this._parent = _parent;
	}
	get type() {
		return this._tree.type;
	}
	get name() {
		return this._tree.type.name;
	}
	get to() {
		return this.from + this._tree.length;
	}
	nextChild(i, dir, pos, side, mode = 0) {
		for (let parent = this;;) {
			for (let { children, positions } = parent._tree, e = dir > 0 ? children.length : -1; i != e; i += dir) {
				let next = children[i], start = positions[i] + parent.from;
				if (!checkSide(side, pos, start, start + next.length)) continue;
				if (next instanceof TreeBuffer) {
					if (mode & IterMode.ExcludeBuffers) continue;
					let index = next.findChild(0, next.buffer.length, dir, pos - start, side);
					if (index > -1) return new BufferNode(new BufferContext(parent, next, i, start), null, index);
				} else if (mode & IterMode.IncludeAnonymous || !next.type.isAnonymous || hasChild(next)) {
					let mounted;
					if (!(mode & IterMode.IgnoreMounts) && (mounted = MountedTree.get(next)) && !mounted.overlay) return new TreeNode(mounted.tree, start, i, parent);
					let inner = new TreeNode(next, start, i, parent);
					return mode & IterMode.IncludeAnonymous || !inner.type.isAnonymous ? inner : inner.nextChild(dir < 0 ? next.children.length - 1 : 0, dir, pos, side);
				}
			}
			if (mode & IterMode.IncludeAnonymous || !parent.type.isAnonymous) return null;
			if (parent.index >= 0) i = parent.index + dir;
			else i = dir < 0 ? -1 : parent._parent._tree.children.length;
			parent = parent._parent;
			if (!parent) return null;
		}
	}
	get firstChild() {
		return this.nextChild(0, 1, 0, 4);
	}
	get lastChild() {
		return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
	}
	childAfter(pos) {
		return this.nextChild(0, 1, pos, 2);
	}
	childBefore(pos) {
		return this.nextChild(this._tree.children.length - 1, -1, pos, -2);
	}
	enter(pos, side, mode = 0) {
		let mounted;
		if (!(mode & IterMode.IgnoreOverlays) && (mounted = MountedTree.get(this._tree)) && mounted.overlay) {
			let rPos = pos - this.from;
			for (let { from, to } of mounted.overlay) if ((side > 0 ? from <= rPos : from < rPos) && (side < 0 ? to >= rPos : to > rPos)) return new TreeNode(mounted.tree, mounted.overlay[0].from + this.from, -1, this);
		}
		return this.nextChild(0, 1, pos, side, mode);
	}
	nextSignificantParent() {
		let val = this;
		while (val.type.isAnonymous && val._parent) val = val._parent;
		return val;
	}
	get parent() {
		return this._parent ? this._parent.nextSignificantParent() : null;
	}
	get nextSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
	}
	get prevSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
	}
	get tree() {
		return this._tree;
	}
	toTree() {
		return this._tree;
	}
	/**
	@internal
	*/
	toString() {
		return this._tree.toString();
	}
};
function getChildren(node, type, before, after) {
	let cur = node.cursor(), result = [];
	if (!cur.firstChild()) return result;
	if (before != null) for (let found = false; !found;) {
		found = cur.type.is(before);
		if (!cur.nextSibling()) return result;
	}
	for (;;) {
		if (after != null && cur.type.is(after)) return result;
		if (cur.type.is(type)) result.push(cur.node);
		if (!cur.nextSibling()) return after == null ? result : [];
	}
}
function matchNodeContext(node, context, i = context.length - 1) {
	for (let p = node.parent; i >= 0; p = p.parent) {
		if (!p) return false;
		if (!p.type.isAnonymous) {
			if (context[i] && context[i] != p.name) return false;
			i--;
		}
	}
	return true;
}
var BufferContext = class {
	constructor(parent, buffer, index, start) {
		this.parent = parent;
		this.buffer = buffer;
		this.index = index;
		this.start = start;
	}
};
var BufferNode = class BufferNode extends BaseNode {
	get name() {
		return this.type.name;
	}
	get from() {
		return this.context.start + this.context.buffer.buffer[this.index + 1];
	}
	get to() {
		return this.context.start + this.context.buffer.buffer[this.index + 2];
	}
	constructor(context, _parent, index) {
		super();
		this.context = context;
		this._parent = _parent;
		this.index = index;
		this.type = context.buffer.set.types[context.buffer.buffer[index]];
	}
	child(dir, pos, side) {
		let { buffer } = this.context;
		let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.context.start, side);
		return index < 0 ? null : new BufferNode(this.context, this, index);
	}
	get firstChild() {
		return this.child(1, 0, 4);
	}
	get lastChild() {
		return this.child(-1, 0, 4);
	}
	childAfter(pos) {
		return this.child(1, pos, 2);
	}
	childBefore(pos) {
		return this.child(-1, pos, -2);
	}
	enter(pos, side, mode = 0) {
		if (mode & IterMode.ExcludeBuffers) return null;
		let { buffer } = this.context;
		let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], side > 0 ? 1 : -1, pos - this.context.start, side);
		return index < 0 ? null : new BufferNode(this.context, this, index);
	}
	get parent() {
		return this._parent || this.context.parent.nextSignificantParent();
	}
	externalSibling(dir) {
		return this._parent ? null : this.context.parent.nextChild(this.context.index + dir, dir, 0, 4);
	}
	get nextSibling() {
		let { buffer } = this.context;
		let after = buffer.buffer[this.index + 3];
		if (after < (this._parent ? buffer.buffer[this._parent.index + 3] : buffer.buffer.length)) return new BufferNode(this.context, this._parent, after);
		return this.externalSibling(1);
	}
	get prevSibling() {
		let { buffer } = this.context;
		let parentStart = this._parent ? this._parent.index + 4 : 0;
		if (this.index == parentStart) return this.externalSibling(-1);
		return new BufferNode(this.context, this._parent, buffer.findChild(parentStart, this.index, -1, 0, 4));
	}
	get tree() {
		return null;
	}
	toTree() {
		let children = [], positions = [];
		let { buffer } = this.context;
		let startI = this.index + 4, endI = buffer.buffer[this.index + 3];
		if (endI > startI) {
			let from = buffer.buffer[this.index + 1];
			children.push(buffer.slice(startI, endI, from));
			positions.push(0);
		}
		return new Tree(this.type, children, positions, this.to - this.from);
	}
	/**
	@internal
	*/
	toString() {
		return this.context.buffer.childString(this.index);
	}
};
function iterStack(heads) {
	if (!heads.length) return null;
	let pick = 0, picked = heads[0];
	for (let i = 1; i < heads.length; i++) {
		let node = heads[i];
		if (node.from > picked.from || node.to < picked.to) {
			picked = node;
			pick = i;
		}
	}
	let next = picked instanceof TreeNode && picked.index < 0 ? null : picked.parent;
	let newHeads = heads.slice();
	if (next) newHeads[pick] = next;
	else newHeads.splice(pick, 1);
	return new StackIterator(newHeads, picked);
}
var StackIterator = class {
	constructor(heads, node) {
		this.heads = heads;
		this.node = node;
	}
	get next() {
		return iterStack(this.heads);
	}
};
function stackIterator(tree, pos, side) {
	let inner = tree.resolveInner(pos, side), layers = null;
	for (let scan = inner instanceof TreeNode ? inner : inner.context.parent; scan; scan = scan.parent) if (scan.index < 0) {
		let parent = scan.parent;
		(layers || (layers = [inner])).push(parent.resolve(pos, side));
		scan = parent;
	} else {
		let mount = MountedTree.get(scan.tree);
		if (mount && mount.overlay && mount.overlay[0].from <= pos && mount.overlay[mount.overlay.length - 1].to >= pos) {
			let root = new TreeNode(mount.tree, mount.overlay[0].from + scan.from, -1, scan);
			(layers || (layers = [inner])).push(resolveNode(root, pos, side, false));
		}
	}
	return layers ? iterStack(layers) : inner;
}
/**
A tree cursor object focuses on a given node in a syntax tree, and
allows you to move to adjacent nodes.
*/
var TreeCursor = class {
	/**
	Shorthand for `.type.name`.
	*/
	get name() {
		return this.type.name;
	}
	/**
	@internal
	*/
	constructor(node, mode = 0) {
		this.mode = mode;
		/**
		@internal
		*/
		this.buffer = null;
		this.stack = [];
		/**
		@internal
		*/
		this.index = 0;
		this.bufferNode = null;
		if (node instanceof TreeNode) this.yieldNode(node);
		else {
			this._tree = node.context.parent;
			this.buffer = node.context;
			for (let n = node._parent; n; n = n._parent) this.stack.unshift(n.index);
			this.bufferNode = node;
			this.yieldBuf(node.index);
		}
	}
	yieldNode(node) {
		if (!node) return false;
		this._tree = node;
		this.type = node.type;
		this.from = node.from;
		this.to = node.to;
		return true;
	}
	yieldBuf(index, type) {
		this.index = index;
		let { start, buffer } = this.buffer;
		this.type = type || buffer.set.types[buffer.buffer[index]];
		this.from = start + buffer.buffer[index + 1];
		this.to = start + buffer.buffer[index + 2];
		return true;
	}
	/**
	@internal
	*/
	yield(node) {
		if (!node) return false;
		if (node instanceof TreeNode) {
			this.buffer = null;
			return this.yieldNode(node);
		}
		this.buffer = node.context;
		return this.yieldBuf(node.index, node.type);
	}
	/**
	@internal
	*/
	toString() {
		return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
	}
	/**
	@internal
	*/
	enterChild(dir, pos, side) {
		if (!this.buffer) return this.yield(this._tree.nextChild(dir < 0 ? this._tree._tree.children.length - 1 : 0, dir, pos, side, this.mode));
		let { buffer } = this.buffer;
		let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.buffer.start, side);
		if (index < 0) return false;
		this.stack.push(this.index);
		return this.yieldBuf(index);
	}
	/**
	Move the cursor to this node's first child. When this returns
	false, the node has no child, and the cursor has not been moved.
	*/
	firstChild() {
		return this.enterChild(1, 0, 4);
	}
	/**
	Move the cursor to this node's last child.
	*/
	lastChild() {
		return this.enterChild(-1, 0, 4);
	}
	/**
	Move the cursor to the first child that ends after `pos`.
	*/
	childAfter(pos) {
		return this.enterChild(1, pos, 2);
	}
	/**
	Move to the last child that starts before `pos`.
	*/
	childBefore(pos) {
		return this.enterChild(-1, pos, -2);
	}
	/**
	Move the cursor to the child around `pos`. If side is -1 the
	child may end at that position, when 1 it may start there. This
	will also enter [overlaid](#common.MountedTree.overlay)
	[mounted](#common.NodeProp^mounted) trees unless `overlays` is
	set to false.
	*/
	enter(pos, side, mode = this.mode) {
		if (!this.buffer) return this.yield(this._tree.enter(pos, side, mode));
		return mode & IterMode.ExcludeBuffers ? false : this.enterChild(1, pos, side);
	}
	/**
	Move to the node's parent node, if this isn't the top node.
	*/
	parent() {
		if (!this.buffer) return this.yieldNode(this.mode & IterMode.IncludeAnonymous ? this._tree._parent : this._tree.parent);
		if (this.stack.length) return this.yieldBuf(this.stack.pop());
		let parent = this.mode & IterMode.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
		this.buffer = null;
		return this.yieldNode(parent);
	}
	/**
	@internal
	*/
	sibling(dir) {
		if (!this.buffer) return !this._tree._parent ? false : this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + dir, dir, 0, 4, this.mode));
		let { buffer } = this.buffer, d = this.stack.length - 1;
		if (dir < 0) {
			let parentStart = d < 0 ? 0 : this.stack[d] + 4;
			if (this.index != parentStart) return this.yieldBuf(buffer.findChild(parentStart, this.index, -1, 0, 4));
		} else {
			let after = buffer.buffer[this.index + 3];
			if (after < (d < 0 ? buffer.buffer.length : buffer.buffer[this.stack[d] + 3])) return this.yieldBuf(after);
		}
		return d < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + dir, dir, 0, 4, this.mode)) : false;
	}
	/**
	Move to this node's next sibling, if any.
	*/
	nextSibling() {
		return this.sibling(1);
	}
	/**
	Move to this node's previous sibling, if any.
	*/
	prevSibling() {
		return this.sibling(-1);
	}
	atLastNode(dir) {
		let index, parent, { buffer } = this;
		if (buffer) {
			if (dir > 0) {
				if (this.index < buffer.buffer.buffer.length) return false;
			} else for (let i = 0; i < this.index; i++) if (buffer.buffer.buffer[i + 3] < this.index) return false;
			({index, parent} = buffer);
		} else ({index, _parent: parent} = this._tree);
		for (; parent; {index, _parent: parent} = parent) if (index > -1) for (let i = index + dir, e = dir < 0 ? -1 : parent._tree.children.length; i != e; i += dir) {
			let child = parent._tree.children[i];
			if (this.mode & IterMode.IncludeAnonymous || child instanceof TreeBuffer || !child.type.isAnonymous || hasChild(child)) return false;
		}
		return true;
	}
	move(dir, enter) {
		if (enter && this.enterChild(dir, 0, 4)) return true;
		for (;;) {
			if (this.sibling(dir)) return true;
			if (this.atLastNode(dir) || !this.parent()) return false;
		}
	}
	/**
	Move to the next node in a
	[pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
	traversal, going from a node to its first child or, if the
	current node is empty or `enter` is false, its next sibling or
	the next sibling of the first parent node that has one.
	*/
	next(enter = true) {
		return this.move(1, enter);
	}
	/**
	Move to the next node in a last-to-first pre-order traveral. A
	node is followed by its last child or, if it has none, its
	previous sibling or the previous sibling of the first parent
	node that has one.
	*/
	prev(enter = true) {
		return this.move(-1, enter);
	}
	/**
	Move the cursor to the innermost node that covers `pos`. If
	`side` is -1, it will enter nodes that end at `pos`. If it is 1,
	it will enter nodes that start at `pos`.
	*/
	moveTo(pos, side = 0) {
		while (this.from == this.to || (side < 1 ? this.from >= pos : this.from > pos) || (side > -1 ? this.to <= pos : this.to < pos)) if (!this.parent()) break;
		while (this.enterChild(1, pos, side));
		return this;
	}
	/**
	Get a [syntax node](#common.SyntaxNode) at the cursor's current
	position.
	*/
	get node() {
		if (!this.buffer) return this._tree;
		let cache = this.bufferNode, result = null, depth = 0;
		if (cache && cache.context == this.buffer) scan: for (let index = this.index, d = this.stack.length; d >= 0;) {
			for (let c = cache; c; c = c._parent) if (c.index == index) {
				if (index == this.index) return c;
				result = c;
				depth = d + 1;
				break scan;
			}
			index = this.stack[--d];
		}
		for (let i = depth; i < this.stack.length; i++) result = new BufferNode(this.buffer, result, this.stack[i]);
		return this.bufferNode = new BufferNode(this.buffer, result, this.index);
	}
	/**
	Get the [tree](#common.Tree) that represents the current node, if
	any. Will return null when the node is in a [tree
	buffer](#common.TreeBuffer).
	*/
	get tree() {
		return this.buffer ? null : this._tree._tree;
	}
	/**
	Iterate over the current node and all its descendants, calling
	`enter` when entering a node and `leave`, if given, when leaving
	one. When `enter` returns `false`, any children of that node are
	skipped, and `leave` isn't called for it.
	*/
	iterate(enter, leave) {
		for (let depth = 0;;) {
			let mustLeave = false;
			if (this.type.isAnonymous || enter(this) !== false) {
				if (this.firstChild()) {
					depth++;
					continue;
				}
				if (!this.type.isAnonymous) mustLeave = true;
			}
			for (;;) {
				if (mustLeave && leave) leave(this);
				mustLeave = this.type.isAnonymous;
				if (this.nextSibling()) break;
				if (!depth) return;
				this.parent();
				depth--;
				mustLeave = true;
			}
		}
	}
	/**
	Test whether the current node matches a given context—a sequence
	of direct parent node names. Empty strings in the context array
	are treated as wildcards.
	*/
	matchContext(context) {
		if (!this.buffer) return matchNodeContext(this.node, context);
		let { buffer } = this.buffer, { types } = buffer.set;
		for (let i = context.length - 1, d = this.stack.length - 1; i >= 0; d--) {
			if (d < 0) return matchNodeContext(this.node, context, i);
			let type = types[buffer.buffer[this.stack[d]]];
			if (!type.isAnonymous) {
				if (context[i] && context[i] != type.name) return false;
				i--;
			}
		}
		return true;
	}
};
function hasChild(tree) {
	return tree.children.some((ch) => ch instanceof TreeBuffer || !ch.type.isAnonymous || hasChild(ch));
}
function buildTree(data) {
	var _a;
	let { buffer, nodeSet, maxBufferLength = DefaultBufferLength, reused = [], minRepeatType = nodeSet.types.length } = data;
	let cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
	let types = nodeSet.types;
	let contextHash = 0, lookAhead = 0;
	function takeNode(parentStart, minPos, children, positions, inRepeat, depth) {
		let { id, start, end, size } = cursor;
		let lookAheadAtStart = lookAhead;
		while (size < 0) {
			cursor.next();
			if (size == -1) {
				let node = reused[id];
				children.push(node);
				positions.push(start - parentStart);
				return;
			} else if (size == -3) {
				contextHash = id;
				return;
			} else if (size == -4) {
				lookAhead = id;
				return;
			} else throw new RangeError(`Unrecognized record size: ${size}`);
		}
		let type = types[id], node, buffer;
		let startPos = start - parentStart;
		if (end - start <= maxBufferLength && (buffer = findBufferSize(cursor.pos - minPos, inRepeat))) {
			let data = new Uint16Array(buffer.size - buffer.skip);
			let endPos = cursor.pos - buffer.size, index = data.length;
			while (cursor.pos > endPos) index = copyToBuffer(buffer.start, data, index);
			node = new TreeBuffer(data, end - buffer.start, nodeSet);
			startPos = buffer.start - parentStart;
		} else {
			let endPos = cursor.pos - size;
			cursor.next();
			let localChildren = [], localPositions = [];
			let localInRepeat = id >= minRepeatType ? id : -1;
			let lastGroup = 0, lastEnd = end;
			while (cursor.pos > endPos) if (localInRepeat >= 0 && cursor.id == localInRepeat && cursor.size >= 0) {
				if (cursor.end <= lastEnd - maxBufferLength) {
					makeRepeatLeaf(localChildren, localPositions, start, lastGroup, cursor.end, lastEnd, localInRepeat, lookAheadAtStart);
					lastGroup = localChildren.length;
					lastEnd = cursor.end;
				}
				cursor.next();
			} else if (depth > 2500) takeFlatNode(start, endPos, localChildren, localPositions);
			else takeNode(start, endPos, localChildren, localPositions, localInRepeat, depth + 1);
			if (localInRepeat >= 0 && lastGroup > 0 && lastGroup < localChildren.length) makeRepeatLeaf(localChildren, localPositions, start, lastGroup, start, lastEnd, localInRepeat, lookAheadAtStart);
			localChildren.reverse();
			localPositions.reverse();
			if (localInRepeat > -1 && lastGroup > 0) {
				let make = makeBalanced(type);
				node = balanceRange(type, localChildren, localPositions, 0, localChildren.length, 0, end - start, make, make);
			} else node = makeTree(type, localChildren, localPositions, end - start, lookAheadAtStart - end);
		}
		children.push(node);
		positions.push(startPos);
	}
	function takeFlatNode(parentStart, minPos, children, positions) {
		let nodes = [];
		let nodeCount = 0, stopAt = -1;
		while (cursor.pos > minPos) {
			let { id, start, end, size } = cursor;
			if (size > 4) cursor.next();
			else if (stopAt > -1 && start < stopAt) break;
			else {
				if (stopAt < 0) stopAt = end - maxBufferLength;
				nodes.push(id, start, end);
				nodeCount++;
				cursor.next();
			}
		}
		if (nodeCount) {
			let buffer = new Uint16Array(nodeCount * 4);
			let start = nodes[nodes.length - 2];
			for (let i = nodes.length - 3, j = 0; i >= 0; i -= 3) {
				buffer[j++] = nodes[i];
				buffer[j++] = nodes[i + 1] - start;
				buffer[j++] = nodes[i + 2] - start;
				buffer[j++] = j;
			}
			children.push(new TreeBuffer(buffer, nodes[2] - start, nodeSet));
			positions.push(start - parentStart);
		}
	}
	function makeBalanced(type) {
		return (children, positions, length) => {
			let lookAhead = 0, lastI = children.length - 1, last, lookAheadProp;
			if (lastI >= 0 && (last = children[lastI]) instanceof Tree) {
				if (!lastI && last.type == type && last.length == length) return last;
				if (lookAheadProp = last.prop(NodeProp.lookAhead)) lookAhead = positions[lastI] + last.length + lookAheadProp;
			}
			return makeTree(type, children, positions, length, lookAhead);
		};
	}
	function makeRepeatLeaf(children, positions, base, i, from, to, type, lookAhead) {
		let localChildren = [], localPositions = [];
		while (children.length > i) {
			localChildren.push(children.pop());
			localPositions.push(positions.pop() + base - from);
		}
		children.push(makeTree(nodeSet.types[type], localChildren, localPositions, to - from, lookAhead - to));
		positions.push(from - base);
	}
	function makeTree(type, children, positions, length, lookAhead = 0, props) {
		if (contextHash) {
			let pair = [NodeProp.contextHash, contextHash];
			props = props ? [pair].concat(props) : [pair];
		}
		if (lookAhead > 25) {
			let pair = [NodeProp.lookAhead, lookAhead];
			props = props ? [pair].concat(props) : [pair];
		}
		return new Tree(type, children, positions, length, props);
	}
	function findBufferSize(maxSize, inRepeat) {
		let fork = cursor.fork();
		let size = 0, start = 0, skip = 0, minStart = fork.end - maxBufferLength;
		let result = {
			size: 0,
			start: 0,
			skip: 0
		};
		scan: for (let minPos = fork.pos - maxSize; fork.pos > minPos;) {
			let nodeSize = fork.size;
			if (fork.id == inRepeat && nodeSize >= 0) {
				result.size = size;
				result.start = start;
				result.skip = skip;
				skip += 4;
				size += 4;
				fork.next();
				continue;
			}
			let startPos = fork.pos - nodeSize;
			if (nodeSize < 0 || startPos < minPos || fork.start < minStart) break;
			let localSkipped = fork.id >= minRepeatType ? 4 : 0;
			let nodeStart = fork.start;
			fork.next();
			while (fork.pos > startPos) {
				if (fork.size < 0) if (fork.size == -3) localSkipped += 4;
				else break scan;
				else if (fork.id >= minRepeatType) localSkipped += 4;
				fork.next();
			}
			start = nodeStart;
			size += nodeSize;
			skip += localSkipped;
		}
		if (inRepeat < 0 || size == maxSize) {
			result.size = size;
			result.start = start;
			result.skip = skip;
		}
		return result.size > 4 ? result : void 0;
	}
	function copyToBuffer(bufferStart, buffer, index) {
		let { id, start, end, size } = cursor;
		cursor.next();
		if (size >= 0 && id < minRepeatType) {
			let startIndex = index;
			if (size > 4) {
				let endPos = cursor.pos - (size - 4);
				while (cursor.pos > endPos) index = copyToBuffer(bufferStart, buffer, index);
			}
			buffer[--index] = startIndex;
			buffer[--index] = end - bufferStart;
			buffer[--index] = start - bufferStart;
			buffer[--index] = id;
		} else if (size == -3) contextHash = id;
		else if (size == -4) lookAhead = id;
		return index;
	}
	let children = [], positions = [];
	while (cursor.pos > 0) takeNode(data.start || 0, data.bufferStart || 0, children, positions, -1, 0);
	let length = (_a = data.length) !== null && _a !== void 0 ? _a : children.length ? positions[0] + children[0].length : 0;
	return new Tree(types[data.topID], children.reverse(), positions.reverse(), length);
}
var nodeSizeCache = /* @__PURE__ */ new WeakMap();
function nodeSize(balanceType, node) {
	if (!balanceType.isAnonymous || node instanceof TreeBuffer || node.type != balanceType) return 1;
	let size = nodeSizeCache.get(node);
	if (size == null) {
		size = 1;
		for (let child of node.children) {
			if (child.type != balanceType || !(child instanceof Tree)) {
				size = 1;
				break;
			}
			size += nodeSize(balanceType, child);
		}
		nodeSizeCache.set(node, size);
	}
	return size;
}
function balanceRange(balanceType, children, positions, from, to, start, length, mkTop, mkTree) {
	let total = 0;
	for (let i = from; i < to; i++) total += nodeSize(balanceType, children[i]);
	let maxChild = Math.ceil(total * 1.5 / 8);
	let localChildren = [], localPositions = [];
	function divide(children, positions, from, to, offset) {
		for (let i = from; i < to;) {
			let groupFrom = i, groupStart = positions[i], groupSize = nodeSize(balanceType, children[i]);
			i++;
			for (; i < to; i++) {
				let nextSize = nodeSize(balanceType, children[i]);
				if (groupSize + nextSize >= maxChild) break;
				groupSize += nextSize;
			}
			if (i == groupFrom + 1) {
				if (groupSize > maxChild) {
					let only = children[groupFrom];
					divide(only.children, only.positions, 0, only.children.length, positions[groupFrom] + offset);
					continue;
				}
				localChildren.push(children[groupFrom]);
			} else {
				let length = positions[i - 1] + children[i - 1].length - groupStart;
				localChildren.push(balanceRange(balanceType, children, positions, groupFrom, i, groupStart, length, null, mkTree));
			}
			localPositions.push(groupStart + offset - start);
		}
	}
	divide(children, positions, from, to, 0);
	return (mkTop || mkTree)(localChildren, localPositions, length);
}
/**
Provides a way to associate values with pieces of trees. As long
as that part of the tree is reused, the associated values can be
retrieved from an updated tree.
*/
var NodeWeakMap = class {
	constructor() {
		this.map = /* @__PURE__ */ new WeakMap();
	}
	setBuffer(buffer, index, value) {
		let inner = this.map.get(buffer);
		if (!inner) this.map.set(buffer, inner = /* @__PURE__ */ new Map());
		inner.set(index, value);
	}
	getBuffer(buffer, index) {
		let inner = this.map.get(buffer);
		return inner && inner.get(index);
	}
	/**
	Set the value for this syntax node.
	*/
	set(node, value) {
		if (node instanceof BufferNode) this.setBuffer(node.context.buffer, node.index, value);
		else if (node instanceof TreeNode) this.map.set(node.tree, value);
	}
	/**
	Retrieve value for this syntax node, if it exists in the map.
	*/
	get(node) {
		return node instanceof BufferNode ? this.getBuffer(node.context.buffer, node.index) : node instanceof TreeNode ? this.map.get(node.tree) : void 0;
	}
	/**
	Set the value for the node that a cursor currently points to.
	*/
	cursorSet(cursor, value) {
		if (cursor.buffer) this.setBuffer(cursor.buffer.buffer, cursor.index, value);
		else this.map.set(cursor.tree, value);
	}
	/**
	Retrieve the value for the node that a cursor currently points
	to.
	*/
	cursorGet(cursor) {
		return cursor.buffer ? this.getBuffer(cursor.buffer.buffer, cursor.index) : this.map.get(cursor.tree);
	}
};
/**
Tree fragments are used during [incremental
parsing](#common.Parser.startParse) to track parts of old trees
that can be reused in a new parse. An array of fragments is used
to track regions of an old tree whose nodes might be reused in new
parses. Use the static
[`applyChanges`](#common.TreeFragment^applyChanges) method to
update fragments for document changes.
*/
var TreeFragment = class TreeFragment {
	/**
	Construct a tree fragment. You'll usually want to use
	[`addTree`](#common.TreeFragment^addTree) and
	[`applyChanges`](#common.TreeFragment^applyChanges) instead of
	calling this directly.
	*/
	constructor(from, to, tree, offset, openStart = false, openEnd = false) {
		this.from = from;
		this.to = to;
		this.tree = tree;
		this.offset = offset;
		this.open = (openStart ? 1 : 0) | (openEnd ? 2 : 0);
	}
	/**
	Whether the start of the fragment represents the start of a
	parse, or the end of a change. (In the second case, it may not
	be safe to reuse some nodes at the start, depending on the
	parsing algorithm.)
	*/
	get openStart() {
		return (this.open & 1) > 0;
	}
	/**
	Whether the end of the fragment represents the end of a
	full-document parse, or the start of a change.
	*/
	get openEnd() {
		return (this.open & 2) > 0;
	}
	/**
	Create a set of fragments from a freshly parsed tree, or update
	an existing set of fragments by replacing the ones that overlap
	with a tree with content from the new tree. When `partial` is
	true, the parse is treated as incomplete, and the resulting
	fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
	true.
	*/
	static addTree(tree, fragments = [], partial = false) {
		let result = [new TreeFragment(0, tree.length, tree, 0, false, partial)];
		for (let f of fragments) if (f.to > tree.length) result.push(f);
		return result;
	}
	/**
	Apply a set of edits to an array of fragments, removing or
	splitting fragments as necessary to remove edited ranges, and
	adjusting offsets for fragments that moved.
	*/
	static applyChanges(fragments, changes, minGap = 128) {
		if (!changes.length) return fragments;
		let result = [];
		let fI = 1, nextF = fragments.length ? fragments[0] : null;
		for (let cI = 0, pos = 0, off = 0;; cI++) {
			let nextC = cI < changes.length ? changes[cI] : null;
			let nextPos = nextC ? nextC.fromA : 1e9;
			if (nextPos - pos >= minGap) while (nextF && nextF.from < nextPos) {
				let cut = nextF;
				if (pos >= cut.from || nextPos <= cut.to || off) {
					let fFrom = Math.max(cut.from, pos) - off, fTo = Math.min(cut.to, nextPos) - off;
					cut = fFrom >= fTo ? null : new TreeFragment(fFrom, fTo, cut.tree, cut.offset + off, cI > 0, !!nextC);
				}
				if (cut) result.push(cut);
				if (nextF.to > nextPos) break;
				nextF = fI < fragments.length ? fragments[fI++] : null;
			}
			if (!nextC) break;
			pos = nextC.toA;
			off = nextC.toA - nextC.toB;
		}
		return result;
	}
};
/**
A superclass that parsers should extend.
*/
var Parser = class {
	/**
	Start a parse, returning a [partial parse](#common.PartialParse)
	object. [`fragments`](#common.TreeFragment) can be passed in to
	make the parse incremental.
	
	By default, the entire input is parsed. You can pass `ranges`,
	which should be a sorted array of non-empty, non-overlapping
	ranges, to parse only those ranges. The tree returned in that
	case will start at `ranges[0].from`.
	*/
	startParse(input, fragments, ranges) {
		if (typeof input == "string") input = new StringInput(input);
		ranges = !ranges ? [new Range(0, input.length)] : ranges.length ? ranges.map((r) => new Range(r.from, r.to)) : [new Range(0, 0)];
		return this.createParse(input, fragments || [], ranges);
	}
	/**
	Run a full parse, returning the resulting tree.
	*/
	parse(input, fragments, ranges) {
		let parse = this.startParse(input, fragments, ranges);
		for (;;) {
			let done = parse.advance();
			if (done) return done;
		}
	}
};
var StringInput = class {
	constructor(string) {
		this.string = string;
	}
	get length() {
		return this.string.length;
	}
	chunk(from) {
		return this.string.slice(from);
	}
	get lineChunks() {
		return false;
	}
	read(from, to) {
		return this.string.slice(from, to);
	}
};
/**
Create a parse wrapper that, after the inner parse completes,
scans its tree for mixed language regions with the `nest`
function, runs the resulting [inner parses](#common.NestedParse),
and then [mounts](#common.NodeProp^mounted) their results onto the
tree.
*/
function parseMixed(nest) {
	return (parse, input, fragments, ranges) => new MixedParse(parse, nest, input, fragments, ranges);
}
var InnerParse = class {
	constructor(parser, parse, overlay, target, from) {
		this.parser = parser;
		this.parse = parse;
		this.overlay = overlay;
		this.target = target;
		this.from = from;
	}
};
function checkRanges(ranges) {
	if (!ranges.length || ranges.some((r) => r.from >= r.to)) throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(ranges));
}
var ActiveOverlay = class {
	constructor(parser, predicate, mounts, index, start, target, prev) {
		this.parser = parser;
		this.predicate = predicate;
		this.mounts = mounts;
		this.index = index;
		this.start = start;
		this.target = target;
		this.prev = prev;
		this.depth = 0;
		this.ranges = [];
	}
};
var stoppedInner = new NodeProp({ perNode: true });
var MixedParse = class {
	constructor(base, nest, input, fragments, ranges) {
		this.nest = nest;
		this.input = input;
		this.fragments = fragments;
		this.ranges = ranges;
		this.inner = [];
		this.innerDone = 0;
		this.baseTree = null;
		this.stoppedAt = null;
		this.baseParse = base;
	}
	advance() {
		if (this.baseParse) {
			let done = this.baseParse.advance();
			if (!done) return null;
			this.baseParse = null;
			this.baseTree = done;
			this.startInner();
			if (this.stoppedAt != null) for (let inner of this.inner) inner.parse.stopAt(this.stoppedAt);
		}
		if (this.innerDone == this.inner.length) {
			let result = this.baseTree;
			if (this.stoppedAt != null) result = new Tree(result.type, result.children, result.positions, result.length, result.propValues.concat([[stoppedInner, this.stoppedAt]]));
			return result;
		}
		let inner = this.inner[this.innerDone], done = inner.parse.advance();
		if (done) {
			this.innerDone++;
			let props = Object.assign(Object.create(null), inner.target.props);
			props[NodeProp.mounted.id] = new MountedTree(done, inner.overlay, inner.parser);
			inner.target.props = props;
		}
		return null;
	}
	get parsedPos() {
		if (this.baseParse) return 0;
		let pos = this.input.length;
		for (let i = this.innerDone; i < this.inner.length; i++) if (this.inner[i].from < pos) pos = Math.min(pos, this.inner[i].parse.parsedPos);
		return pos;
	}
	stopAt(pos) {
		this.stoppedAt = pos;
		if (this.baseParse) this.baseParse.stopAt(pos);
		else for (let i = this.innerDone; i < this.inner.length; i++) this.inner[i].parse.stopAt(pos);
	}
	startInner() {
		let fragmentCursor = new FragmentCursor$1(this.fragments);
		let overlay = null;
		let covered = null;
		let cursor = new TreeCursor(new TreeNode(this.baseTree, this.ranges[0].from, 0, null), IterMode.IncludeAnonymous | IterMode.IgnoreMounts);
		scan: for (let nest, isCovered;;) {
			let enter = true, range;
			if (this.stoppedAt != null && cursor.from >= this.stoppedAt) enter = false;
			else if (fragmentCursor.hasNode(cursor)) {
				if (overlay) {
					let match = overlay.mounts.find((m) => m.frag.from <= cursor.from && m.frag.to >= cursor.to && m.mount.overlay);
					if (match) for (let r of match.mount.overlay) {
						let from = r.from + match.pos, to = r.to + match.pos;
						if (from >= cursor.from && to <= cursor.to && !overlay.ranges.some((r) => r.from < to && r.to > from)) overlay.ranges.push({
							from,
							to
						});
					}
				}
				enter = false;
			} else if (covered && (isCovered = checkCover(covered.ranges, cursor.from, cursor.to))) enter = isCovered != 2;
			else if (!cursor.type.isAnonymous && (nest = this.nest(cursor, this.input)) && (cursor.from < cursor.to || !nest.overlay)) {
				if (!cursor.tree) materialize(cursor);
				let oldMounts = fragmentCursor.findMounts(cursor.from, nest.parser);
				if (typeof nest.overlay == "function") overlay = new ActiveOverlay(nest.parser, nest.overlay, oldMounts, this.inner.length, cursor.from, cursor.tree, overlay);
				else {
					let ranges = punchRanges(this.ranges, nest.overlay || (cursor.from < cursor.to ? [new Range(cursor.from, cursor.to)] : []));
					if (ranges.length) checkRanges(ranges);
					if (ranges.length || !nest.overlay) this.inner.push(new InnerParse(nest.parser, ranges.length ? nest.parser.startParse(this.input, enterFragments(oldMounts, ranges), ranges) : nest.parser.startParse(""), nest.overlay ? nest.overlay.map((r) => new Range(r.from - cursor.from, r.to - cursor.from)) : null, cursor.tree, ranges.length ? ranges[0].from : cursor.from));
					if (!nest.overlay) enter = false;
					else if (ranges.length) covered = {
						ranges,
						depth: 0,
						prev: covered
					};
				}
			} else if (overlay && (range = overlay.predicate(cursor))) {
				if (range === true) range = new Range(cursor.from, cursor.to);
				if (range.from < range.to) overlay.ranges.push(range);
			}
			if (enter && cursor.firstChild()) {
				if (overlay) overlay.depth++;
				if (covered) covered.depth++;
			} else for (;;) {
				if (cursor.nextSibling()) break;
				if (!cursor.parent()) break scan;
				if (overlay && !--overlay.depth) {
					let ranges = punchRanges(this.ranges, overlay.ranges);
					if (ranges.length) {
						checkRanges(ranges);
						this.inner.splice(overlay.index, 0, new InnerParse(overlay.parser, overlay.parser.startParse(this.input, enterFragments(overlay.mounts, ranges), ranges), overlay.ranges.map((r) => new Range(r.from - overlay.start, r.to - overlay.start)), overlay.target, ranges[0].from));
					}
					overlay = overlay.prev;
				}
				if (covered && !--covered.depth) covered = covered.prev;
			}
		}
	}
};
function checkCover(covered, from, to) {
	for (let range of covered) {
		if (range.from >= to) break;
		if (range.to > from) return range.from <= from && range.to >= to ? 2 : 1;
	}
	return 0;
}
function sliceBuf(buf, startI, endI, nodes, positions, off) {
	if (startI < endI) {
		let from = buf.buffer[startI + 1];
		nodes.push(buf.slice(startI, endI, from));
		positions.push(from - off);
	}
}
function materialize(cursor) {
	let { node } = cursor, stack = [];
	let buffer = node.context.buffer;
	do {
		stack.push(cursor.index);
		cursor.parent();
	} while (!cursor.tree);
	let base = cursor.tree, i = base.children.indexOf(buffer);
	let buf = base.children[i], b = buf.buffer, newStack = [i];
	function split(startI, endI, type, innerOffset, length, stackPos) {
		let targetI = stack[stackPos];
		let children = [], positions = [];
		sliceBuf(buf, startI, targetI, children, positions, innerOffset);
		let from = b[targetI + 1], to = b[targetI + 2];
		newStack.push(children.length);
		let child = stackPos ? split(targetI + 4, b[targetI + 3], buf.set.types[b[targetI]], from, to - from, stackPos - 1) : node.toTree();
		children.push(child);
		positions.push(from - innerOffset);
		sliceBuf(buf, b[targetI + 3], endI, children, positions, innerOffset);
		return new Tree(type, children, positions, length);
	}
	base.children[i] = split(0, b.length, NodeType.none, 0, buf.length, stack.length - 1);
	for (let index of newStack) {
		let tree = cursor.tree.children[index], pos = cursor.tree.positions[index];
		cursor.yield(new TreeNode(tree, pos + cursor.from, index, cursor._tree));
	}
}
var StructureCursor = class {
	constructor(root, offset) {
		this.offset = offset;
		this.done = false;
		this.cursor = root.cursor(IterMode.IncludeAnonymous | IterMode.IgnoreMounts);
	}
	moveTo(pos) {
		let { cursor } = this, p = pos - this.offset;
		while (!this.done && cursor.from < p) if (cursor.to >= pos && cursor.enter(p, 1, IterMode.IgnoreOverlays | IterMode.ExcludeBuffers));
		else if (!cursor.next(false)) this.done = true;
	}
	hasNode(cursor) {
		this.moveTo(cursor.from);
		if (!this.done && this.cursor.from + this.offset == cursor.from && this.cursor.tree) for (let tree = this.cursor.tree;;) {
			if (tree == cursor.tree) return true;
			if (tree.children.length && tree.positions[0] == 0 && tree.children[0] instanceof Tree) tree = tree.children[0];
			else break;
		}
		return false;
	}
};
var FragmentCursor$1 = class {
	constructor(fragments) {
		var _a;
		this.fragments = fragments;
		this.curTo = 0;
		this.fragI = 0;
		if (fragments.length) {
			let first = this.curFrag = fragments[0];
			this.curTo = (_a = first.tree.prop(stoppedInner)) !== null && _a !== void 0 ? _a : first.to;
			this.inner = new StructureCursor(first.tree, -first.offset);
		} else this.curFrag = this.inner = null;
	}
	hasNode(node) {
		while (this.curFrag && node.from >= this.curTo) this.nextFrag();
		return this.curFrag && this.curFrag.from <= node.from && this.curTo >= node.to && this.inner.hasNode(node);
	}
	nextFrag() {
		var _a;
		this.fragI++;
		if (this.fragI == this.fragments.length) this.curFrag = this.inner = null;
		else {
			let frag = this.curFrag = this.fragments[this.fragI];
			this.curTo = (_a = frag.tree.prop(stoppedInner)) !== null && _a !== void 0 ? _a : frag.to;
			this.inner = new StructureCursor(frag.tree, -frag.offset);
		}
	}
	findMounts(pos, parser) {
		var _a;
		let result = [];
		if (this.inner) {
			this.inner.cursor.moveTo(pos, 1);
			for (let pos = this.inner.cursor.node; pos; pos = pos.parent) {
				let mount = (_a = pos.tree) === null || _a === void 0 ? void 0 : _a.prop(NodeProp.mounted);
				if (mount && mount.parser == parser) for (let i = this.fragI; i < this.fragments.length; i++) {
					let frag = this.fragments[i];
					if (frag.from >= pos.to) break;
					if (frag.tree == this.curFrag.tree) result.push({
						frag,
						pos: pos.from - frag.offset,
						mount
					});
				}
			}
		}
		return result;
	}
};
function punchRanges(outer, ranges) {
	let copy = null, current = ranges;
	for (let i = 1, j = 0; i < outer.length; i++) {
		let gapFrom = outer[i - 1].to, gapTo = outer[i].from;
		for (; j < current.length; j++) {
			let r = current[j];
			if (r.from >= gapTo) break;
			if (r.to <= gapFrom) continue;
			if (!copy) current = copy = ranges.slice();
			if (r.from < gapFrom) {
				copy[j] = new Range(r.from, gapFrom);
				if (r.to > gapTo) copy.splice(j + 1, 0, new Range(gapTo, r.to));
			} else if (r.to > gapTo) copy[j--] = new Range(gapTo, r.to);
			else copy.splice(j--, 1);
		}
	}
	return current;
}
function findCoverChanges(a, b, from, to) {
	let iA = 0, iB = 0, inA = false, inB = false, pos = -1e9;
	let result = [];
	for (;;) {
		let nextA = iA == a.length ? 1e9 : inA ? a[iA].to : a[iA].from;
		let nextB = iB == b.length ? 1e9 : inB ? b[iB].to : b[iB].from;
		if (inA != inB) {
			let start = Math.max(pos, from), end = Math.min(nextA, nextB, to);
			if (start < end) result.push(new Range(start, end));
		}
		pos = Math.min(nextA, nextB);
		if (pos == 1e9) break;
		if (nextA == pos) if (!inA) inA = true;
		else {
			inA = false;
			iA++;
		}
		if (nextB == pos) if (!inB) inB = true;
		else {
			inB = false;
			iB++;
		}
	}
	return result;
}
function enterFragments(mounts, ranges) {
	let result = [];
	for (let { pos, mount, frag } of mounts) {
		let startPos = pos + (mount.overlay ? mount.overlay[0].from : 0), endPos = startPos + mount.tree.length;
		let from = Math.max(frag.from, startPos), to = Math.min(frag.to, endPos);
		if (mount.overlay) {
			let changes = findCoverChanges(ranges, mount.overlay.map((r) => new Range(r.from + pos, r.to + pos)), from, to);
			for (let i = 0, pos = from;; i++) {
				let last = i == changes.length, end = last ? to : changes[i].from;
				if (end > pos) result.push(new TreeFragment(pos, end, mount.tree, -startPos, frag.from >= pos || frag.openStart, frag.to <= end || frag.openEnd));
				if (last) break;
				pos = changes[i].to;
			}
		} else result.push(new TreeFragment(from, to, mount.tree, -startPos, frag.from >= startPos || frag.openStart, frag.to <= endPos || frag.openEnd));
	}
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/@lezer+highlight@1.2.3_patch_hash=97f85e6fe46f23015ea0dd420e33d584bc2dc71633910cf131321da31b27ca8c/node_modules/@lezer/highlight/dist/index.js
var nextTagID = 0;
/**
Highlighting tags are markers that denote a highlighting category.
They are [associated](#highlight.styleTags) with parts of a syntax
tree by a language mode, and then mapped to an actual CSS style by
a [highlighter](#highlight.Highlighter).

Because syntax tree node types and highlight styles have to be
able to talk the same language, CodeMirror uses a mostly _closed_
[vocabulary](#highlight.tags) of syntax tags (as opposed to
traditional open string-based systems, which make it hard for
highlighting themes to cover all the tokens produced by the
various languages).

It _is_ possible to [define](#highlight.Tag^define) your own
highlighting tags for system-internal use (where you control both
the language package and the highlighter), but such tags will not
be picked up by regular highlighters (though you can derive them
from standard tags to allow highlighters to fall back to those).
*/
var Tag = class Tag {
	/**
	@internal
	*/
	constructor(name, set, base, modified) {
		this.name = name;
		this.set = set;
		this.base = base;
		this.modified = modified;
		/**
		@internal
		*/
		this.id = nextTagID++;
	}
	toString() {
		let { name } = this;
		for (let mod of this.modified) if (mod.name) name = `${mod.name}(${name})`;
		return name;
	}
	static define(nameOrParent, parent) {
		let name = typeof nameOrParent == "string" ? nameOrParent : "?";
		if (nameOrParent instanceof Tag) parent = nameOrParent;
		if (parent === null || parent === void 0 ? void 0 : parent.base) throw new Error("Can not derive from a modified tag");
		let tag = new Tag(name, [], null, []);
		tag.set.push(tag);
		if (parent) for (let t of parent.set) tag.set.push(t);
		return tag;
	}
	/**
	Define a tag _modifier_, which is a function that, given a tag,
	will return a tag that is a subtag of the original. Applying the
	same modifier to a twice tag will return the same value (`m1(t1)
	== m1(t1)`) and applying multiple modifiers will, regardless or
	order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
	
	When multiple modifiers are applied to a given base tag, each
	smaller set of modifiers is registered as a parent, so that for
	example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
	`m1(m3(t1)`, and so on.
	*/
	static defineModifier(name) {
		let mod = new Modifier(name);
		return (tag) => {
			if (tag.modified.indexOf(mod) > -1) return tag;
			return Modifier.get(tag.base || tag, tag.modified.concat(mod).sort((a, b) => a.id - b.id));
		};
	}
};
var nextModifierID = 0;
var Modifier = class Modifier {
	constructor(name) {
		this.name = name;
		this.instances = [];
		this.id = nextModifierID++;
	}
	static get(base, mods) {
		if (!mods.length) return base;
		let exists = mods[0].instances.find((t) => t.base == base && sameArray(mods, t.modified));
		if (exists) return exists;
		let set = [], tag = new Tag(base.name, set, base, mods);
		for (let m of mods) m.instances.push(tag);
		let configs = powerSet(mods);
		for (let parent of base.set) if (!parent.modified.length) for (let config of configs) set.push(Modifier.get(parent, config));
		return tag;
	}
};
function sameArray(a, b) {
	return a.length == b.length && a.every((x, i) => x == b[i]);
}
function powerSet(array) {
	let sets = [[]];
	for (let i = 0; i < array.length; i++) for (let j = 0, e = sets.length; j < e; j++) sets.push(sets[j].concat(array[i]));
	return sets.sort((a, b) => b.length - a.length);
}
/**
This function is used to add a set of tags to a language syntax
via [`NodeSet.extend`](#common.NodeSet.extend) or
[`LRParser.configure`](#lr.LRParser.configure).

The argument object maps node selectors to [highlighting
tags](#highlight.Tag) or arrays of tags.

Node selectors may hold one or more (space-separated) node paths.
Such a path can be a [node name](#common.NodeType.name), or
multiple node names (or `*` wildcards) separated by slash
characters, as in `"Block/Declaration/VariableName"`. Such a path
matches the final node but only if its direct parent nodes are the
other nodes mentioned. A `*` in such a path matches any parent,
but only a single level—wildcards that match multiple parents
aren't supported, both for efficiency reasons and because Lezer
trees make it rather hard to reason about what they would match.)

A path can be ended with `/...` to indicate that the tag assigned
to the node should also apply to all child nodes, even if they
match their own style (by default, only the innermost style is
used).

When a path ends in `!`, as in `Attribute!`, no further matching
happens for the node's child nodes, and the entire node gets the
given style.

In this notation, node names that contain `/`, `!`, `*`, or `...`
must be quoted as JSON strings.

For example:

```javascript
parser.configure({props: [
styleTags({
// Style Number and BigNumber nodes
"Number BigNumber": tags.number,
// Style Escape nodes whose parent is String
"String/Escape": tags.escape,
// Style anything inside Attributes nodes
"Attributes!": tags.meta,
// Add a style to all content inside Italic nodes
"Italic/...": tags.emphasis,
// Style InvalidString nodes as both `string` and `invalid`
"InvalidString": [tags.string, tags.invalid],
// Style the node named "/" as punctuation
'"/"': tags.punctuation
})
]})
```
*/
function styleTags(spec) {
	let byName = Object.create(null);
	for (let prop in spec) {
		let tags = spec[prop];
		if (!Array.isArray(tags)) tags = [tags];
		for (let part of prop.split(" ")) if (part) {
			let pieces = [], mode = 2, rest = part;
			for (let pos = 0;;) {
				if (rest == "..." && pos > 0 && pos + 3 == part.length) {
					mode = 1;
					break;
				}
				let m = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(rest);
				if (!m) throw new RangeError("Invalid path: " + part);
				pieces.push(m[0] == "*" ? "" : m[0][0] == "\"" ? JSON.parse(m[0]) : m[0]);
				pos += m[0].length;
				if (pos == part.length) break;
				let next = part[pos++];
				if (pos == part.length && next == "!") {
					mode = 0;
					break;
				}
				if (next != "/") throw new RangeError("Invalid path: " + part);
				rest = part.slice(pos);
			}
			let last = pieces.length - 1, inner = pieces[last];
			if (!inner) throw new RangeError("Invalid path: " + part);
			byName[inner] = new Rule(tags, mode, last > 0 ? pieces.slice(0, last) : null).sort(byName[inner]);
		}
	}
	return ruleNodeProp.add(byName);
}
var ruleNodeProp = new NodeProp({ combine(a, b) {
	let cur, root, take;
	while (a || b) {
		if (!a || b && a.depth >= b.depth) {
			take = b;
			b = b.next;
		} else {
			take = a;
			a = a.next;
		}
		if (cur && cur.mode == take.mode && !take.context && !cur.context) continue;
		let copy = new Rule(take.tags, take.mode, take.context);
		if (cur) cur.next = copy;
		else root = copy;
		cur = copy;
	}
	return root;
} });
var Rule = class {
	constructor(tags, mode, context, next) {
		this.tags = tags;
		this.mode = mode;
		this.context = context;
		this.next = next;
	}
	get opaque() {
		return this.mode == 0;
	}
	get inherit() {
		return this.mode == 1;
	}
	sort(other) {
		if (!other || other.depth < this.depth) {
			this.next = other;
			return this;
		}
		other.next = this.sort(other.next);
		return other;
	}
	get depth() {
		return this.context ? this.context.length : 0;
	}
};
Rule.empty = new Rule([], 2, null);
/**
Define a [highlighter](#highlight.Highlighter) from an array of
tag/class pairs. Classes associated with more specific tags will
take precedence.
*/
function tagHighlighter(tags, options) {
	let map = Object.create(null);
	for (let style of tags) if (!Array.isArray(style.tag)) map[style.tag.id] = style.class;
	else for (let tag of style.tag) map[tag.id] = style.class;
	let { scope, all = null } = options || {};
	return {
		style: (tags) => {
			let cls = all;
			for (let tag of tags) for (let sub of tag.set) {
				let tagClass = map[sub.id];
				if (tagClass) {
					cls = cls ? cls + " " + tagClass : tagClass;
					break;
				}
			}
			return cls;
		},
		scope
	};
}
function highlightTags(highlighters, tags) {
	let result = null;
	for (let highlighter of highlighters) {
		let value = highlighter.style(tags);
		if (value) result = result ? result + " " + value : value;
	}
	return result;
}
/**
Highlight the given [tree](#common.Tree) with the given
[highlighter](#highlight.Highlighter). Often, the higher-level
[`highlightCode`](#highlight.highlightCode) function is easier to
use.
*/
function highlightTree(tree, highlighter, putStyle, from = 0, to = tree.length) {
	let builder = new HighlightBuilder(from, Array.isArray(highlighter) ? highlighter : [highlighter], putStyle);
	builder.highlightRange(tree.cursor(), from, to, "", builder.highlighters);
	builder.flush(to);
}
var HighlightBuilder = class {
	constructor(at, highlighters, span) {
		this.at = at;
		this.highlighters = highlighters;
		this.span = span;
		this.class = "";
	}
	startSpan(at, cls) {
		if (cls != this.class) {
			this.flush(at);
			if (at > this.at) this.at = at;
			this.class = cls;
		}
	}
	flush(to) {
		if (to > this.at && this.class) this.span(this.at, to, this.class);
	}
	highlightRange(cursor, from, to, inheritedClass, highlighters) {
		let { type, from: start, to: end } = cursor;
		if (start >= to || end <= from) return;
		if (type.isTop) highlighters = this.highlighters.filter((h) => !h.scope || h.scope(type));
		let cls = inheritedClass;
		let rule = getStyleTags(cursor) || Rule.empty;
		let tagCls = highlightTags(highlighters, rule.tags);
		if (tagCls) {
			if (cls) cls += " ";
			cls += tagCls;
			if (rule.mode == 1) inheritedClass += (inheritedClass ? " " : "") + tagCls;
		}
		this.startSpan(Math.max(from, start), cls);
		if (rule.opaque) return;
		let mounted = cursor.tree && cursor.tree.prop(NodeProp.mounted);
		if (mounted && mounted.overlay) {
			let inner = cursor.node.enter(mounted.overlay[0].from + start, 1);
			let innerHighlighters = this.highlighters.filter((h) => !h.scope || h.scope(mounted.tree.type));
			let hasChild = cursor.firstChild();
			for (let i = 0, pos = start;; i++) {
				let next = i < mounted.overlay.length ? mounted.overlay[i] : null;
				let nextPos = next ? next.from + start : end;
				let rangeFrom = Math.max(from, pos), rangeTo = Math.min(to, nextPos);
				if (rangeFrom < rangeTo && hasChild) while (cursor.from < rangeTo) {
					this.highlightRange(cursor, rangeFrom, rangeTo, inheritedClass, highlighters);
					this.startSpan(Math.min(rangeTo, cursor.to), cls);
					if (cursor.to >= nextPos || !cursor.nextSibling()) break;
				}
				if (!next || nextPos > to) break;
				pos = next.to + start;
				if (pos > from) {
					this.highlightRange(inner.cursor(), Math.max(from, next.from + start), Math.min(to, pos), "", innerHighlighters);
					this.startSpan(Math.min(to, pos), cls);
				}
			}
			if (hasChild) cursor.parent();
		} else if (cursor.firstChild()) {
			if (mounted) inheritedClass = "";
			do {
				if (cursor.to <= from) continue;
				if (cursor.from >= to) break;
				this.highlightRange(cursor, from, to, inheritedClass, highlighters);
				this.startSpan(Math.min(to, cursor.to), cls);
			} while (cursor.nextSibling());
			cursor.parent();
		}
	}
};
/**
Match a syntax node's [highlight rules](#highlight.styleTags). If
there's a match, return its set of tags, and whether it is
opaque (uses a `!`) or applies to all child nodes (`/...`).
*/
function getStyleTags(node) {
	let rule = node.type.prop(ruleNodeProp);
	while (rule && rule.context && !node.matchContext(rule.context)) rule = rule.next;
	return rule || null;
}
var t = Tag.define;
var comment = t(), name = t(), typeName = t(name), propertyName = t(name), literal = t(), string = t(literal), number = t(literal), content = t(), heading = t(content), keyword = t(), operator = t(), punctuation = t(), bracket = t(punctuation), meta = t();
/**
The default set of highlighting [tags](#highlight.Tag).

This collection is heavily biased towards programming languages,
and necessarily incomplete. A full ontology of syntactic
constructs would fill a stack of books, and be impractical to
write themes for. So try to make do with this set. If all else
fails, [open an
issue](https://github.com/codemirror/codemirror.next) to propose a
new tag, or [define](#highlight.Tag^define) a local custom tag for
your use case.

Note that it is not obligatory to always attach the most specific
tag possible to an element—if your grammar can't easily
distinguish a certain type of element (such as a local variable),
it is okay to style it as its more general variant (a variable).

For tags that extend some parent tag, the documentation links to
the parent.
*/
var tags = {
	comment,
	lineComment: t(comment),
	blockComment: t(comment),
	docComment: t(comment),
	name,
	variableName: t(name),
	typeName,
	tagName: t(typeName),
	propertyName,
	attributeName: t(propertyName),
	className: t(name),
	labelName: t(name),
	namespace: t(name),
	macroName: t(name),
	literal,
	string,
	docString: t(string),
	character: t(string),
	attributeValue: t(string),
	number,
	integer: t(number),
	float: t(number),
	bool: t(literal),
	regexp: t(literal),
	escape: t(literal),
	color: t(literal),
	url: t(literal),
	keyword,
	self: t(keyword),
	null: t(keyword),
	atom: t(keyword),
	unit: t(keyword),
	modifier: t(keyword),
	operatorKeyword: t(keyword),
	controlKeyword: t(keyword),
	definitionKeyword: t(keyword),
	moduleKeyword: t(keyword),
	operator,
	derefOperator: t(operator),
	arithmeticOperator: t(operator),
	logicOperator: t(operator),
	bitwiseOperator: t(operator),
	compareOperator: t(operator),
	updateOperator: t(operator),
	definitionOperator: t(operator),
	typeOperator: t(operator),
	controlOperator: t(operator),
	punctuation,
	separator: t(punctuation),
	bracket,
	angleBracket: t(bracket),
	squareBracket: t(bracket),
	paren: t(bracket),
	brace: t(bracket),
	content,
	heading,
	heading1: t(heading),
	heading2: t(heading),
	heading3: t(heading),
	heading4: t(heading),
	heading5: t(heading),
	heading6: t(heading),
	contentSeparator: t(content),
	list: t(content),
	quote: t(content),
	emphasis: t(content),
	strong: t(content),
	link: t(content),
	monospace: t(content),
	strikethrough: t(content),
	inserted: t(),
	deleted: t(),
	changed: t(),
	invalid: t(),
	meta,
	documentMeta: t(meta),
	annotation: t(meta),
	processingInstruction: t(meta),
	definition: Tag.defineModifier("definition"),
	constant: Tag.defineModifier("constant"),
	function: Tag.defineModifier("function"),
	standard: Tag.defineModifier("standard"),
	local: Tag.defineModifier("local"),
	special: Tag.defineModifier("special")
};
for (let name in tags) {
	let val = tags[name];
	if (val instanceof Tag) val.name = name;
}
tagHighlighter([
	{
		tag: tags.link,
		class: "tok-link"
	},
	{
		tag: tags.heading,
		class: "tok-heading"
	},
	{
		tag: tags.emphasis,
		class: "tok-emphasis"
	},
	{
		tag: tags.strong,
		class: "tok-strong"
	},
	{
		tag: tags.keyword,
		class: "tok-keyword"
	},
	{
		tag: tags.atom,
		class: "tok-atom"
	},
	{
		tag: tags.bool,
		class: "tok-bool"
	},
	{
		tag: tags.url,
		class: "tok-url"
	},
	{
		tag: tags.labelName,
		class: "tok-labelName"
	},
	{
		tag: tags.inserted,
		class: "tok-inserted"
	},
	{
		tag: tags.deleted,
		class: "tok-deleted"
	},
	{
		tag: tags.literal,
		class: "tok-literal"
	},
	{
		tag: tags.string,
		class: "tok-string"
	},
	{
		tag: tags.number,
		class: "tok-number"
	},
	{
		tag: [
			tags.regexp,
			tags.escape,
			tags.special(tags.string)
		],
		class: "tok-string2"
	},
	{
		tag: tags.variableName,
		class: "tok-variableName"
	},
	{
		tag: tags.local(tags.variableName),
		class: "tok-variableName tok-local"
	},
	{
		tag: tags.definition(tags.variableName),
		class: "tok-variableName tok-definition"
	},
	{
		tag: tags.special(tags.variableName),
		class: "tok-variableName2"
	},
	{
		tag: tags.definition(tags.propertyName),
		class: "tok-propertyName tok-definition"
	},
	{
		tag: tags.typeName,
		class: "tok-typeName"
	},
	{
		tag: tags.namespace,
		class: "tok-namespace"
	},
	{
		tag: tags.className,
		class: "tok-className"
	},
	{
		tag: tags.macroName,
		class: "tok-macroName"
	},
	{
		tag: tags.propertyName,
		class: "tok-propertyName"
	},
	{
		tag: tags.operator,
		class: "tok-operator"
	},
	{
		tag: tags.comment,
		class: "tok-comment"
	},
	{
		tag: tags.meta,
		class: "tok-meta"
	},
	{
		tag: tags.invalid,
		class: "tok-invalid"
	},
	{
		tag: tags.punctuation,
		class: "tok-punctuation"
	}
]);
//#endregion
//#region ../../../node_modules/.pnpm/@codemirror+language@6.12.1/node_modules/@codemirror/language/dist/index.js
var _a;
/**
Node prop stored in a parser's top syntax node to provide the
facet that stores language-specific data for that language.
*/
var languageDataProp = /* @__PURE__ */ new NodeProp();
/**
Helper function to define a facet (to be added to the top syntax
node(s) for a language via
[`languageDataProp`](https://codemirror.net/6/docs/ref/#language.languageDataProp)), that will be
used to associate language data with the language. You
probably only need this when subclassing
[`Language`](https://codemirror.net/6/docs/ref/#language.Language).
*/
function defineLanguageFacet(baseData) {
	return Facet.define({ combine: baseData ? (values) => values.concat(baseData) : void 0 });
}
/**
Syntax node prop used to register sublanguages. Should be added to
the top level node type for the language.
*/
var sublanguageProp = /* @__PURE__ */ new NodeProp();
/**
A language object manages parsing and per-language
[metadata](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt). Parse data is
managed as a [Lezer](https://lezer.codemirror.net) tree. The class
can be used directly, via the [`LRLanguage`](https://codemirror.net/6/docs/ref/#language.LRLanguage)
subclass for [Lezer](https://lezer.codemirror.net/) LR parsers, or
via the [`StreamLanguage`](https://codemirror.net/6/docs/ref/#language.StreamLanguage) subclass
for stream parsers.
*/
var Language = class {
	/**
	Construct a language object. If you need to invoke this
	directly, first define a data facet with
	[`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
	configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
	to the language's outer syntax node.
	*/
	constructor(data, parser, extraExtensions = [], name = "") {
		this.data = data;
		this.name = name;
		if (!EditorState.prototype.hasOwnProperty("tree")) Object.defineProperty(EditorState.prototype, "tree", { get() {
			return syntaxTree(this);
		} });
		this.parser = parser;
		this.extension = [language.of(this), EditorState.languageData.of((state, pos, side) => {
			let top = topNodeAt(state, pos, side), data = top.type.prop(languageDataProp);
			if (!data) return [];
			let base = state.facet(data), sub = top.type.prop(sublanguageProp);
			if (sub) {
				let innerNode = top.resolve(pos - top.from, side);
				for (let sublang of sub) if (sublang.test(innerNode, state)) {
					let data = state.facet(sublang.facet);
					return sublang.type == "replace" ? data : data.concat(base);
				}
			}
			return base;
		})].concat(extraExtensions);
	}
	/**
	Query whether this language is active at the given position.
	*/
	isActiveAt(state, pos, side = -1) {
		return topNodeAt(state, pos, side).type.prop(languageDataProp) == this.data;
	}
	/**
	Find the document regions that were parsed using this language.
	The returned regions will _include_ any nested languages rooted
	in this language, when those exist.
	*/
	findRegions(state) {
		let lang = state.facet(language);
		if ((lang === null || lang === void 0 ? void 0 : lang.data) == this.data) return [{
			from: 0,
			to: state.doc.length
		}];
		if (!lang || !lang.allowsNesting) return [];
		let result = [];
		let explore = (tree, from) => {
			if (tree.prop(languageDataProp) == this.data) {
				result.push({
					from,
					to: from + tree.length
				});
				return;
			}
			let mount = tree.prop(NodeProp.mounted);
			if (mount) {
				if (mount.tree.prop(languageDataProp) == this.data) {
					if (mount.overlay) for (let r of mount.overlay) result.push({
						from: r.from + from,
						to: r.to + from
					});
					else result.push({
						from,
						to: from + tree.length
					});
					return;
				} else if (mount.overlay) {
					let size = result.length;
					explore(mount.tree, mount.overlay[0].from + from);
					if (result.length > size) return;
				}
			}
			for (let i = 0; i < tree.children.length; i++) {
				let ch = tree.children[i];
				if (ch instanceof Tree) explore(ch, tree.positions[i] + from);
			}
		};
		explore(syntaxTree(state), 0);
		return result;
	}
	/**
	Indicates whether this language allows nested languages. The
	default implementation returns true.
	*/
	get allowsNesting() {
		return true;
	}
};
/**
@internal
*/
Language.setState = /* @__PURE__ */ StateEffect.define();
function topNodeAt(state, pos, side) {
	let topLang = state.facet(language), tree = syntaxTree(state).topNode;
	if (!topLang || topLang.allowsNesting) {
		for (let node = tree; node; node = node.enter(pos, side, IterMode.ExcludeBuffers | IterMode.EnterBracketed)) if (node.type.isTop) tree = node;
	}
	return tree;
}
/**
A subclass of [`Language`](https://codemirror.net/6/docs/ref/#language.Language) for use with Lezer
[LR parsers](https://lezer.codemirror.net/docs/ref#lr.LRParser)
parsers.
*/
var LRLanguage = class LRLanguage extends Language {
	constructor(data, parser, name) {
		super(data, parser, [], name);
		this.parser = parser;
	}
	/**
	Define a language from a parser.
	*/
	static define(spec) {
		let data = defineLanguageFacet(spec.languageData);
		return new LRLanguage(data, spec.parser.configure({ props: [languageDataProp.add((type) => type.isTop ? data : void 0)] }), spec.name);
	}
	/**
	Create a new instance of this language with a reconfigured
	version of its parser and optionally a new name.
	*/
	configure(options, name) {
		return new LRLanguage(this.data, this.parser.configure(options), name || this.name);
	}
	get allowsNesting() {
		return this.parser.hasWrappers();
	}
};
/**
Get the syntax tree for a state, which is the current (possibly
incomplete) parse tree of the active
[language](https://codemirror.net/6/docs/ref/#language.Language), or the empty tree if there is no
language available.
*/
function syntaxTree(state) {
	let field = state.field(Language.state, false);
	return field ? field.tree : Tree.empty;
}
/**
Try to get a parse tree that spans at least up to `upto`. The
method will do at most `timeout` milliseconds of work to parse
up to that point if the tree isn't already available.
*/
function ensureSyntaxTree(state, upto, timeout = 50) {
	var _a;
	let parse = (_a = state.field(Language.state, false)) === null || _a === void 0 ? void 0 : _a.context;
	if (!parse) return null;
	let oldVieport = parse.viewport;
	parse.updateViewport({
		from: 0,
		to: upto
	});
	let result = parse.isDone(upto) || parse.work(timeout, upto) ? parse.tree : null;
	parse.updateViewport(oldVieport);
	return result;
}
/**
Lezer-style
[`Input`](https://lezer.codemirror.net/docs/ref#common.Input)
object for a [`Text`](https://codemirror.net/6/docs/ref/#state.Text) object.
*/
var DocInput = class {
	/**
	Create an input object for the given document.
	*/
	constructor(doc) {
		this.doc = doc;
		this.cursorPos = 0;
		this.string = "";
		this.cursor = doc.iter();
	}
	get length() {
		return this.doc.length;
	}
	syncTo(pos) {
		this.string = this.cursor.next(pos - this.cursorPos).value;
		this.cursorPos = pos + this.string.length;
		return this.cursorPos - this.string.length;
	}
	chunk(pos) {
		this.syncTo(pos);
		return this.string;
	}
	get lineChunks() {
		return true;
	}
	read(from, to) {
		let stringStart = this.cursorPos - this.string.length;
		if (from < stringStart || to >= this.cursorPos) return this.doc.sliceString(from, to);
		else return this.string.slice(from - stringStart, to - stringStart);
	}
};
var currentContext = null;
/**
A parse context provided to parsers working on the editor content.
*/
var ParseContext = class ParseContext {
	constructor(parser, state, fragments = [], tree, treeLen, viewport, skipped, scheduleOn) {
		this.parser = parser;
		this.state = state;
		this.fragments = fragments;
		this.tree = tree;
		this.treeLen = treeLen;
		this.viewport = viewport;
		this.skipped = skipped;
		this.scheduleOn = scheduleOn;
		this.parse = null;
		/**
		@internal
		*/
		this.tempSkipped = [];
	}
	/**
	@internal
	*/
	static create(parser, state, viewport) {
		return new ParseContext(parser, state, [], Tree.empty, 0, viewport, [], null);
	}
	startParse() {
		return this.parser.startParse(new DocInput(this.state.doc), this.fragments);
	}
	/**
	@internal
	*/
	work(until, upto) {
		if (upto != null && upto >= this.state.doc.length) upto = void 0;
		if (this.tree != Tree.empty && this.isDone(upto !== null && upto !== void 0 ? upto : this.state.doc.length)) {
			this.takeTree();
			return true;
		}
		return this.withContext(() => {
			var _a;
			if (typeof until == "number") {
				let endTime = Date.now() + until;
				until = () => Date.now() > endTime;
			}
			if (!this.parse) this.parse = this.startParse();
			if (upto != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > upto) && upto < this.state.doc.length) this.parse.stopAt(upto);
			for (;;) {
				let done = this.parse.advance();
				if (done) {
					this.fragments = this.withoutTempSkipped(TreeFragment.addTree(done, this.fragments, this.parse.stoppedAt != null));
					this.treeLen = (_a = this.parse.stoppedAt) !== null && _a !== void 0 ? _a : this.state.doc.length;
					this.tree = done;
					this.parse = null;
					if (this.treeLen < (upto !== null && upto !== void 0 ? upto : this.state.doc.length)) this.parse = this.startParse();
					else return true;
				}
				if (until()) return false;
			}
		});
	}
	/**
	@internal
	*/
	takeTree() {
		let pos, tree;
		if (this.parse && (pos = this.parse.parsedPos) >= this.treeLen) {
			if (this.parse.stoppedAt == null || this.parse.stoppedAt > pos) this.parse.stopAt(pos);
			this.withContext(() => {
				while (!(tree = this.parse.advance()));
			});
			this.treeLen = pos;
			this.tree = tree;
			this.fragments = this.withoutTempSkipped(TreeFragment.addTree(this.tree, this.fragments, true));
			this.parse = null;
		}
	}
	withContext(f) {
		let prev = currentContext;
		currentContext = this;
		try {
			return f();
		} finally {
			currentContext = prev;
		}
	}
	withoutTempSkipped(fragments) {
		for (let r; r = this.tempSkipped.pop();) fragments = cutFragments(fragments, r.from, r.to);
		return fragments;
	}
	/**
	@internal
	*/
	changes(changes, newState) {
		let { fragments, tree, treeLen, viewport, skipped } = this;
		this.takeTree();
		if (!changes.empty) {
			let ranges = [];
			changes.iterChangedRanges((fromA, toA, fromB, toB) => ranges.push({
				fromA,
				toA,
				fromB,
				toB
			}));
			fragments = TreeFragment.applyChanges(fragments, ranges);
			tree = Tree.empty;
			treeLen = 0;
			viewport = {
				from: changes.mapPos(viewport.from, -1),
				to: changes.mapPos(viewport.to, 1)
			};
			if (this.skipped.length) {
				skipped = [];
				for (let r of this.skipped) {
					let from = changes.mapPos(r.from, 1), to = changes.mapPos(r.to, -1);
					if (from < to) skipped.push({
						from,
						to
					});
				}
			}
		}
		return new ParseContext(this.parser, newState, fragments, tree, treeLen, viewport, skipped, this.scheduleOn);
	}
	/**
	@internal
	*/
	updateViewport(viewport) {
		if (this.viewport.from == viewport.from && this.viewport.to == viewport.to) return false;
		this.viewport = viewport;
		let startLen = this.skipped.length;
		for (let i = 0; i < this.skipped.length; i++) {
			let { from, to } = this.skipped[i];
			if (from < viewport.to && to > viewport.from) {
				this.fragments = cutFragments(this.fragments, from, to);
				this.skipped.splice(i--, 1);
			}
		}
		if (this.skipped.length >= startLen) return false;
		this.reset();
		return true;
	}
	/**
	@internal
	*/
	reset() {
		if (this.parse) {
			this.takeTree();
			this.parse = null;
		}
	}
	/**
	Notify the parse scheduler that the given region was skipped
	because it wasn't in view, and the parse should be restarted
	when it comes into view.
	*/
	skipUntilInView(from, to) {
		this.skipped.push({
			from,
			to
		});
	}
	/**
	Returns a parser intended to be used as placeholder when
	asynchronously loading a nested parser. It'll skip its input and
	mark it as not-really-parsed, so that the next update will parse
	it again.
	
	When `until` is given, a reparse will be scheduled when that
	promise resolves.
	*/
	static getSkippingParser(until) {
		return new class extends Parser {
			createParse(input, fragments, ranges) {
				let from = ranges[0].from, to = ranges[ranges.length - 1].to;
				return {
					parsedPos: from,
					advance() {
						let cx = currentContext;
						if (cx) {
							for (let r of ranges) cx.tempSkipped.push(r);
							if (until) cx.scheduleOn = cx.scheduleOn ? Promise.all([cx.scheduleOn, until]) : until;
						}
						this.parsedPos = to;
						return new Tree(NodeType.none, [], [], to - from);
					},
					stoppedAt: null,
					stopAt() {}
				};
			}
		}();
	}
	/**
	@internal
	*/
	isDone(upto) {
		upto = Math.min(upto, this.state.doc.length);
		let frags = this.fragments;
		return this.treeLen >= upto && frags.length && frags[0].from == 0 && frags[0].to >= upto;
	}
	/**
	Get the context for the current parse, or `null` if no editor
	parse is in progress.
	*/
	static get() {
		return currentContext;
	}
};
function cutFragments(fragments, from, to) {
	return TreeFragment.applyChanges(fragments, [{
		fromA: from,
		toA: to,
		fromB: from,
		toB: to
	}]);
}
var LanguageState = class LanguageState {
	constructor(context) {
		this.context = context;
		this.tree = context.tree;
	}
	apply(tr) {
		if (!tr.docChanged && this.tree == this.context.tree) return this;
		let newCx = this.context.changes(tr.changes, tr.state);
		let upto = this.context.treeLen == tr.startState.doc.length ? void 0 : Math.max(tr.changes.mapPos(this.context.treeLen), newCx.viewport.to);
		if (!newCx.work(20, upto)) newCx.takeTree();
		return new LanguageState(newCx);
	}
	static init(state) {
		let vpTo = Math.min(3e3, state.doc.length);
		let parseState = ParseContext.create(state.facet(language).parser, state, {
			from: 0,
			to: vpTo
		});
		if (!parseState.work(20, vpTo)) parseState.takeTree();
		return new LanguageState(parseState);
	}
};
Language.state = /* @__PURE__ */ StateField.define({
	create: LanguageState.init,
	update(value, tr) {
		for (let e of tr.effects) if (e.is(Language.setState)) return e.value;
		if (tr.startState.facet(language) != tr.state.facet(language)) return LanguageState.init(tr.state);
		return value.apply(tr);
	}
});
var requestIdle = (callback) => {
	let timeout = setTimeout(() => callback(), 500);
	return () => clearTimeout(timeout);
};
if (typeof requestIdleCallback != "undefined") requestIdle = (callback) => {
	let idle = -1, timeout = setTimeout(() => {
		idle = requestIdleCallback(callback, { timeout: 400 });
	}, 100);
	return () => idle < 0 ? clearTimeout(timeout) : cancelIdleCallback(idle);
};
var isInputPending = typeof navigator != "undefined" && ((_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending) ? () => navigator.scheduling.isInputPending() : null;
var parseWorker = /* @__PURE__ */ ViewPlugin.fromClass(class ParseWorker {
	constructor(view) {
		this.view = view;
		this.working = null;
		this.workScheduled = 0;
		this.chunkEnd = -1;
		this.chunkBudget = -1;
		this.work = this.work.bind(this);
		this.scheduleWork();
	}
	update(update) {
		let cx = this.view.state.field(Language.state).context;
		if (cx.updateViewport(update.view.viewport) || this.view.viewport.to > cx.treeLen) this.scheduleWork();
		if (update.docChanged || update.selectionSet) {
			if (this.view.hasFocus) this.chunkBudget += 50;
			this.scheduleWork();
		}
		this.checkAsyncSchedule(cx);
	}
	scheduleWork() {
		if (this.working) return;
		let { state } = this.view, field = state.field(Language.state);
		if (field.tree != field.context.tree || !field.context.isDone(state.doc.length)) this.working = requestIdle(this.work);
	}
	work(deadline) {
		this.working = null;
		let now = Date.now();
		if (this.chunkEnd < now && (this.chunkEnd < 0 || this.view.hasFocus)) {
			this.chunkEnd = now + 3e4;
			this.chunkBudget = 3e3;
		}
		if (this.chunkBudget <= 0) return;
		let { state, viewport: { to: vpTo } } = this.view, field = state.field(Language.state);
		if (field.tree == field.context.tree && field.context.isDone(vpTo + 1e5)) return;
		let endTime = Date.now() + Math.min(this.chunkBudget, 100, deadline && !isInputPending ? Math.max(25, deadline.timeRemaining() - 5) : 1e9);
		let viewportFirst = field.context.treeLen < vpTo && state.doc.length > vpTo + 1e3;
		let done = field.context.work(() => {
			return isInputPending && isInputPending() || Date.now() > endTime;
		}, vpTo + (viewportFirst ? 0 : 1e5));
		this.chunkBudget -= Date.now() - now;
		if (done || this.chunkBudget <= 0) {
			field.context.takeTree();
			this.view.dispatch({ effects: Language.setState.of(new LanguageState(field.context)) });
		}
		if (this.chunkBudget > 0 && !(done && !viewportFirst)) this.scheduleWork();
		this.checkAsyncSchedule(field.context);
	}
	checkAsyncSchedule(cx) {
		if (cx.scheduleOn) {
			this.workScheduled++;
			cx.scheduleOn.then(() => this.scheduleWork()).catch((err) => logException(this.view.state, err)).then(() => this.workScheduled--);
			cx.scheduleOn = null;
		}
	}
	destroy() {
		if (this.working) this.working();
	}
	isWorking() {
		return !!(this.working || this.workScheduled > 0);
	}
}, { eventHandlers: { focus() {
	this.scheduleWork();
} } });
/**
The facet used to associate a language with an editor state. Used
by `Language` object's `extension` property (so you don't need to
manually wrap your languages in this). Can be used to access the
current language on a state.
*/
var language = /* @__PURE__ */ Facet.define({
	combine(languages) {
		return languages.length ? languages[0] : null;
	},
	enables: (language) => [
		Language.state,
		parseWorker,
		EditorView.contentAttributes.compute([language], (state) => {
			let lang = state.facet(language);
			return lang && lang.name ? { "data-language": lang.name } : {};
		})
	]
});
/**
This class bundles a [language](https://codemirror.net/6/docs/ref/#language.Language) with an
optional set of supporting extensions. Language packages are
encouraged to export a function that optionally takes a
configuration object and returns a `LanguageSupport` instance, as
the main way for client code to use the package.
*/
var LanguageSupport = class {
	/**
	Create a language support object.
	*/
	constructor(language, support = []) {
		this.language = language;
		this.support = support;
		this.extension = [language, support];
	}
};
/**
Facet that defines a way to provide a function that computes the
appropriate indentation depth, as a column number (see
[`indentString`](https://codemirror.net/6/docs/ref/#language.indentString)), at the start of a given
line. A return value of `null` indicates no indentation can be
determined, and the line should inherit the indentation of the one
above it. A return value of `undefined` defers to the next indent
service.
*/
var indentService = /* @__PURE__ */ Facet.define();
/**
Facet for overriding the unit by which indentation happens. Should
be a string consisting entirely of the same whitespace character.
When not set, this defaults to 2 spaces.
*/
var indentUnit = /* @__PURE__ */ Facet.define({ combine: (values) => {
	if (!values.length) return "  ";
	let unit = values[0];
	if (!unit || /\S/.test(unit) || Array.from(unit).some((e) => e != unit[0])) throw new Error("Invalid indent unit: " + JSON.stringify(values[0]));
	return unit;
} });
/**
Return the _column width_ of an indent unit in the state.
Determined by the [`indentUnit`](https://codemirror.net/6/docs/ref/#language.indentUnit)
facet, and [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) when that
contains tabs.
*/
function getIndentUnit(state) {
	let unit = state.facet(indentUnit);
	return unit.charCodeAt(0) == 9 ? state.tabSize * unit.length : unit.length;
}
/**
Create an indentation string that covers columns 0 to `cols`.
Will use tabs for as much of the columns as possible when the
[`indentUnit`](https://codemirror.net/6/docs/ref/#language.indentUnit) facet contains
tabs.
*/
function indentString(state, cols) {
	let result = "", ts = state.tabSize, ch = state.facet(indentUnit)[0];
	if (ch == "	") {
		while (cols >= ts) {
			result += "	";
			cols -= ts;
		}
		ch = " ";
	}
	for (let i = 0; i < cols; i++) result += ch;
	return result;
}
/**
Get the indentation, as a column number, at the given position.
Will first consult any [indent services](https://codemirror.net/6/docs/ref/#language.indentService)
that are registered, and if none of those return an indentation,
this will check the syntax tree for the [indent node
prop](https://codemirror.net/6/docs/ref/#language.indentNodeProp) and use that if found. Returns a
number when an indentation could be determined, and null
otherwise.
*/
function getIndentation(context, pos) {
	if (context instanceof EditorState) context = new IndentContext(context);
	for (let service of context.state.facet(indentService)) {
		let result = service(context, pos);
		if (result !== void 0) return result;
	}
	let tree = syntaxTree(context.state);
	return tree.length >= pos ? syntaxIndentation(context, tree, pos) : null;
}
/**
Indentation contexts are used when calling [indentation
services](https://codemirror.net/6/docs/ref/#language.indentService). They provide helper utilities
useful in indentation logic, and can selectively override the
indentation reported for some lines.
*/
var IndentContext = class {
	/**
	Create an indent context.
	*/
	constructor(state, options = {}) {
		this.state = state;
		this.options = options;
		this.unit = getIndentUnit(state);
	}
	/**
	Get a description of the line at the given position, taking
	[simulated line
	breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
	into account. If there is such a break at `pos`, the `bias`
	argument determines whether the part of the line line before or
	after the break is used.
	*/
	lineAt(pos, bias = 1) {
		let line = this.state.doc.lineAt(pos);
		let { simulateBreak, simulateDoubleBreak } = this.options;
		if (simulateBreak != null && simulateBreak >= line.from && simulateBreak <= line.to) if (simulateDoubleBreak && simulateBreak == pos) return {
			text: "",
			from: pos
		};
		else if (bias < 0 ? simulateBreak < pos : simulateBreak <= pos) return {
			text: line.text.slice(simulateBreak - line.from),
			from: simulateBreak
		};
		else return {
			text: line.text.slice(0, simulateBreak - line.from),
			from: line.from
		};
		return line;
	}
	/**
	Get the text directly after `pos`, either the entire line
	or the next 100 characters, whichever is shorter.
	*/
	textAfterPos(pos, bias = 1) {
		if (this.options.simulateDoubleBreak && pos == this.options.simulateBreak) return "";
		let { text, from } = this.lineAt(pos, bias);
		return text.slice(pos - from, Math.min(text.length, pos + 100 - from));
	}
	/**
	Find the column for the given position.
	*/
	column(pos, bias = 1) {
		let { text, from } = this.lineAt(pos, bias);
		let result = this.countColumn(text, pos - from);
		let override = this.options.overrideIndentation ? this.options.overrideIndentation(from) : -1;
		if (override > -1) result += override - this.countColumn(text, text.search(/\S|$/));
		return result;
	}
	/**
	Find the column position (taking tabs into account) of the given
	position in the given string.
	*/
	countColumn(line, pos = line.length) {
		return countColumn(line, this.state.tabSize, pos);
	}
	/**
	Find the indentation column of the line at the given point.
	*/
	lineIndent(pos, bias = 1) {
		let { text, from } = this.lineAt(pos, bias);
		let override = this.options.overrideIndentation;
		if (override) {
			let overriden = override(from);
			if (overriden > -1) return overriden;
		}
		return this.countColumn(text, text.search(/\S|$/));
	}
	/**
	Returns the [simulated line
	break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
	for this context, if any.
	*/
	get simulatedBreak() {
		return this.options.simulateBreak || null;
	}
};
/**
A syntax tree node prop used to associate indentation strategies
with node types. Such a strategy is a function from an indentation
context to a column number (see also
[`indentString`](https://codemirror.net/6/docs/ref/#language.indentString)) or null, where null
indicates that no definitive indentation can be determined.
*/
var indentNodeProp = /* @__PURE__ */ new NodeProp();
function syntaxIndentation(cx, ast, pos) {
	let stack = ast.resolveStack(pos);
	let inner = ast.resolveInner(pos, -1).resolve(pos, 0).enterUnfinishedNodesBefore(pos);
	if (inner != stack.node) {
		let add = [];
		for (let cur = inner; cur && !(cur.from < stack.node.from || cur.to > stack.node.to || cur.from == stack.node.from && cur.type == stack.node.type); cur = cur.parent) add.push(cur);
		for (let i = add.length - 1; i >= 0; i--) stack = {
			node: add[i],
			next: stack
		};
	}
	return indentFor(stack, cx, pos);
}
function indentFor(stack, cx, pos) {
	for (let cur = stack; cur; cur = cur.next) {
		let strategy = indentStrategy(cur.node);
		if (strategy) return strategy(TreeIndentContext.create(cx, pos, cur));
	}
	return 0;
}
function ignoreClosed(cx) {
	return cx.pos == cx.options.simulateBreak && cx.options.simulateDoubleBreak;
}
function indentStrategy(tree) {
	let strategy = tree.type.prop(indentNodeProp);
	if (strategy) return strategy;
	let first = tree.firstChild, close;
	if (first && (close = first.type.prop(NodeProp.closedBy))) {
		let last = tree.lastChild, closed = last && close.indexOf(last.name) > -1;
		return (cx) => delimitedStrategy(cx, true, 1, void 0, closed && !ignoreClosed(cx) ? last.from : void 0);
	}
	return tree.parent == null ? topIndent : null;
}
function topIndent() {
	return 0;
}
/**
Objects of this type provide context information and helper
methods to indentation functions registered on syntax nodes.
*/
var TreeIndentContext = class TreeIndentContext extends IndentContext {
	constructor(base, pos, context) {
		super(base.state, base.options);
		this.base = base;
		this.pos = pos;
		this.context = context;
	}
	/**
	The syntax tree node to which the indentation strategy
	applies.
	*/
	get node() {
		return this.context.node;
	}
	/**
	@internal
	*/
	static create(base, pos, context) {
		return new TreeIndentContext(base, pos, context);
	}
	/**
	Get the text directly after `this.pos`, either the entire line
	or the next 100 characters, whichever is shorter.
	*/
	get textAfter() {
		return this.textAfterPos(this.pos);
	}
	/**
	Get the indentation at the reference line for `this.node`, which
	is the line on which it starts, unless there is a node that is
	_not_ a parent of this node covering the start of that line. If
	so, the line at the start of that node is tried, again skipping
	on if it is covered by another such node.
	*/
	get baseIndent() {
		return this.baseIndentFor(this.node);
	}
	/**
	Get the indentation for the reference line of the given node
	(see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
	*/
	baseIndentFor(node) {
		let line = this.state.doc.lineAt(node.from);
		for (;;) {
			let atBreak = node.resolve(line.from);
			while (atBreak.parent && atBreak.parent.from == atBreak.from) atBreak = atBreak.parent;
			if (isParent(atBreak, node)) break;
			line = this.state.doc.lineAt(atBreak.from);
		}
		return this.lineIndent(line.from);
	}
	/**
	Continue looking for indentations in the node's parent nodes,
	and return the result of that.
	*/
	continue() {
		return indentFor(this.context.next, this.base, this.pos);
	}
};
function isParent(parent, of) {
	for (let cur = of; cur; cur = cur.parent) if (parent == cur) return true;
	return false;
}
function bracketedAligned(context) {
	let tree = context.node;
	let openToken = tree.childAfter(tree.from), last = tree.lastChild;
	if (!openToken) return null;
	let sim = context.options.simulateBreak;
	let openLine = context.state.doc.lineAt(openToken.from);
	let lineEnd = sim == null || sim <= openLine.from ? openLine.to : Math.min(openLine.to, sim);
	for (let pos = openToken.to;;) {
		let next = tree.childAfter(pos);
		if (!next || next == last) return null;
		if (!next.type.isSkipped) {
			if (next.from >= lineEnd) return null;
			let space = /^ */.exec(openLine.text.slice(openToken.to - openLine.from))[0].length;
			return {
				from: openToken.from,
				to: openToken.to + space
			};
		}
		pos = next.to;
	}
}
/**
An indentation strategy for delimited (usually bracketed) nodes.
Will, by default, indent one unit more than the parent's base
indent unless the line starts with a closing token. When `align`
is true and there are non-skipped nodes on the node's opening
line, the content of the node will be aligned with the end of the
opening node, like this:

foo(bar,
baz)
*/
function delimitedIndent({ closing, align = true, units = 1 }) {
	return (context) => delimitedStrategy(context, align, units, closing);
}
function delimitedStrategy(context, align, units, closing, closedAt) {
	let after = context.textAfter, space = after.match(/^\s*/)[0].length;
	let closed = closing && after.slice(space, space + closing.length) == closing || closedAt == context.pos + space;
	let aligned = align ? bracketedAligned(context) : null;
	if (aligned) return closed ? context.column(aligned.from) : context.column(aligned.to);
	return context.baseIndent + (closed ? 0 : context.unit * units);
}
/**
An indentation strategy that aligns a node's content to its base
indentation.
*/
var flatIndent = (context) => context.baseIndent;
/**
Creates an indentation strategy that, by default, indents
continued lines one unit more than the node's base indentation.
You can provide `except` to prevent indentation of lines that
match a pattern (for example `/^else\b/` in `if`/`else`
constructs), and you can change the amount of units used with the
`units` option.
*/
function continuedIndent({ except, units = 1 } = {}) {
	return (context) => {
		let matchExcept = except && except.test(context.textAfter);
		return context.baseIndent + (matchExcept ? 0 : units * context.unit);
	};
}
var DontIndentBeyond = 200;
/**
Enables reindentation on input. When a language defines an
`indentOnInput` field in its [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt), which must hold a regular
expression, the line at the cursor will be reindented whenever new
text is typed and the input from the start of the line up to the
cursor matches that regexp.

To avoid unneccesary reindents, it is recommended to start the
regexp with `^` (usually followed by `\s*`), and end it with `$`.
For example, `/^\s*\}$/` will reindent when a closing brace is
added at the start of a line.
*/
function indentOnInput() {
	return EditorState.transactionFilter.of((tr) => {
		if (!tr.docChanged || !tr.isUserEvent("input.type") && !tr.isUserEvent("input.complete")) return tr;
		let rules = tr.startState.languageDataAt("indentOnInput", tr.startState.selection.main.head);
		if (!rules.length) return tr;
		let doc = tr.newDoc, { head } = tr.newSelection.main, line = doc.lineAt(head);
		if (head > line.from + DontIndentBeyond) return tr;
		let lineStart = doc.sliceString(line.from, head);
		if (!rules.some((r) => r.test(lineStart))) return tr;
		let { state } = tr, last = -1, changes = [];
		for (let { head } of state.selection.ranges) {
			let line = state.doc.lineAt(head);
			if (line.from == last) continue;
			last = line.from;
			let indent = getIndentation(state, line.from);
			if (indent == null) continue;
			let cur = /^\s*/.exec(line.text)[0];
			let norm = indentString(state, indent);
			if (cur != norm) changes.push({
				from: line.from,
				to: line.from + cur.length,
				insert: norm
			});
		}
		return changes.length ? [tr, {
			changes,
			sequential: true
		}] : tr;
	});
}
/**
A facet that registers a code folding service. When called with
the extent of a line, such a function should return a foldable
range that starts on that line (but continues beyond it), if one
can be found.
*/
var foldService = /* @__PURE__ */ Facet.define();
/**
This node prop is used to associate folding information with
syntax node types. Given a syntax node, it should check whether
that tree is foldable and return the range that can be collapsed
when it is.
*/
var foldNodeProp = /* @__PURE__ */ new NodeProp();
/**
[Fold](https://codemirror.net/6/docs/ref/#language.foldNodeProp) function that folds everything but
the first and the last child of a syntax node. Useful for nodes
that start and end with delimiters.
*/
function foldInside(node) {
	let first = node.firstChild, last = node.lastChild;
	return first && first.to < last.from ? {
		from: first.to,
		to: last.type.isError ? node.to : last.from
	} : null;
}
function syntaxFolding(state, start, end) {
	let tree = syntaxTree(state);
	if (tree.length < end) return null;
	let stack = tree.resolveStack(end, 1);
	let found = null;
	for (let iter = stack; iter; iter = iter.next) {
		let cur = iter.node;
		if (cur.to <= end || cur.from > end) continue;
		if (found && cur.from < start) break;
		let prop = cur.type.prop(foldNodeProp);
		if (prop && (cur.to < tree.length - 50 || tree.length == state.doc.length || !isUnfinished(cur))) {
			let value = prop(cur, state);
			if (value && value.from <= end && value.from >= start && value.to > end) found = value;
		}
	}
	return found;
}
function isUnfinished(node) {
	let ch = node.lastChild;
	return ch && ch.to == node.to && ch.type.isError;
}
/**
Check whether the given line is foldable. First asks any fold
services registered through
[`foldService`](https://codemirror.net/6/docs/ref/#language.foldService), and if none of them return
a result, tries to query the [fold node
prop](https://codemirror.net/6/docs/ref/#language.foldNodeProp) of syntax nodes that cover the end
of the line.
*/
function foldable(state, lineStart, lineEnd) {
	for (let service of state.facet(foldService)) {
		let result = service(state, lineStart, lineEnd);
		if (result) return result;
	}
	return syntaxFolding(state, lineStart, lineEnd);
}
function mapRange(range, mapping) {
	let from = mapping.mapPos(range.from, 1), to = mapping.mapPos(range.to, -1);
	return from >= to ? void 0 : {
		from,
		to
	};
}
/**
State effect that can be attached to a transaction to fold the
given range. (You probably only need this in exceptional
circumstances—usually you'll just want to let
[`foldCode`](https://codemirror.net/6/docs/ref/#language.foldCode) and the [fold
gutter](https://codemirror.net/6/docs/ref/#language.foldGutter) create the transactions.)
*/
var foldEffect = /* @__PURE__ */ StateEffect.define({ map: mapRange });
/**
State effect that unfolds the given range (if it was folded).
*/
var unfoldEffect = /* @__PURE__ */ StateEffect.define({ map: mapRange });
function selectedLines(view) {
	let lines = [];
	for (let { head } of view.state.selection.ranges) {
		if (lines.some((l) => l.from <= head && l.to >= head)) continue;
		lines.push(view.lineBlockAt(head));
	}
	return lines;
}
/**
The state field that stores the folded ranges (as a [decoration
set](https://codemirror.net/6/docs/ref/#view.DecorationSet)). Can be passed to
[`EditorState.toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) and
[`fromJSON`](https://codemirror.net/6/docs/ref/#state.EditorState^fromJSON) to serialize the fold
state.
*/
var foldState = /* @__PURE__ */ StateField.define({
	create() {
		return Decoration.none;
	},
	update(folded, tr) {
		if (tr.isUserEvent("delete")) tr.changes.iterChangedRanges((fromA, toA) => folded = clearTouchedFolds(folded, fromA, toA));
		folded = folded.map(tr.changes);
		for (let e of tr.effects) if (e.is(foldEffect) && !foldExists(folded, e.value.from, e.value.to)) {
			let { preparePlaceholder } = tr.state.facet(foldConfig);
			let widget = !preparePlaceholder ? foldWidget : Decoration.replace({ widget: new PreparedFoldWidget(preparePlaceholder(tr.state, e.value)) });
			folded = folded.update({ add: [widget.range(e.value.from, e.value.to)] });
		} else if (e.is(unfoldEffect)) folded = folded.update({
			filter: (from, to) => e.value.from != from || e.value.to != to,
			filterFrom: e.value.from,
			filterTo: e.value.to
		});
		if (tr.selection) folded = clearTouchedFolds(folded, tr.selection.main.head);
		return folded;
	},
	provide: (f) => EditorView.decorations.from(f),
	toJSON(folded, state) {
		let ranges = [];
		folded.between(0, state.doc.length, (from, to) => {
			ranges.push(from, to);
		});
		return ranges;
	},
	fromJSON(value) {
		if (!Array.isArray(value) || value.length % 2) throw new RangeError("Invalid JSON for fold state");
		let ranges = [];
		for (let i = 0; i < value.length;) {
			let from = value[i++], to = value[i++];
			if (typeof from != "number" || typeof to != "number") throw new RangeError("Invalid JSON for fold state");
			ranges.push(foldWidget.range(from, to));
		}
		return Decoration.set(ranges, true);
	}
});
function clearTouchedFolds(folded, from, to = from) {
	let touched = false;
	folded.between(from, to, (a, b) => {
		if (a < to && b > from) touched = true;
	});
	return !touched ? folded : folded.update({
		filterFrom: from,
		filterTo: to,
		filter: (a, b) => a >= to || b <= from
	});
}
function findFold(state, from, to) {
	var _a;
	let found = null;
	(_a = state.field(foldState, false)) === null || _a === void 0 || _a.between(from, to, (from, to) => {
		if (!found || found.from > from) found = {
			from,
			to
		};
	});
	return found;
}
function foldExists(folded, from, to) {
	let found = false;
	folded.between(from, from, (a, b) => {
		if (a == from && b == to) found = true;
	});
	return found;
}
function maybeEnable(state, other) {
	return state.field(foldState, false) ? other : other.concat(StateEffect.appendConfig.of(codeFolding()));
}
/**
Fold the lines that are selected, if possible.
*/
var foldCode = (view) => {
	for (let line of selectedLines(view)) {
		let range = foldable(view.state, line.from, line.to);
		if (range) {
			view.dispatch({ effects: maybeEnable(view.state, [foldEffect.of(range), announceFold(view, range)]) });
			return true;
		}
	}
	return false;
};
/**
Unfold folded ranges on selected lines.
*/
var unfoldCode = (view) => {
	if (!view.state.field(foldState, false)) return false;
	let effects = [];
	for (let line of selectedLines(view)) {
		let folded = findFold(view.state, line.from, line.to);
		if (folded) effects.push(unfoldEffect.of(folded), announceFold(view, folded, false));
	}
	if (effects.length) view.dispatch({ effects });
	return effects.length > 0;
};
function announceFold(view, range, fold = true) {
	let lineFrom = view.state.doc.lineAt(range.from).number, lineTo = view.state.doc.lineAt(range.to).number;
	return EditorView.announce.of(`${view.state.phrase(fold ? "Folded lines" : "Unfolded lines")} ${lineFrom} ${view.state.phrase("to")} ${lineTo}.`);
}
/**
Fold all top-level foldable ranges. Note that, in most cases,
folding information will depend on the [syntax
tree](https://codemirror.net/6/docs/ref/#language.syntaxTree), and folding everything may not work
reliably when the document hasn't been fully parsed (either
because the editor state was only just initialized, or because the
document is so big that the parser decided not to parse it
entirely).
*/
var foldAll = (view) => {
	let { state } = view, effects = [];
	for (let pos = 0; pos < state.doc.length;) {
		let line = view.lineBlockAt(pos), range = foldable(state, line.from, line.to);
		if (range) effects.push(foldEffect.of(range));
		pos = (range ? view.lineBlockAt(range.to) : line).to + 1;
	}
	if (effects.length) view.dispatch({ effects: maybeEnable(view.state, effects) });
	return !!effects.length;
};
/**
Unfold all folded code.
*/
var unfoldAll = (view) => {
	let field = view.state.field(foldState, false);
	if (!field || !field.size) return false;
	let effects = [];
	field.between(0, view.state.doc.length, (from, to) => {
		effects.push(unfoldEffect.of({
			from,
			to
		}));
	});
	view.dispatch({ effects });
	return true;
};
var defaultConfig = {
	placeholderDOM: null,
	preparePlaceholder: null,
	placeholderText: "…"
};
var foldConfig = /* @__PURE__ */ Facet.define({ combine(values) {
	return combineConfig(values, defaultConfig);
} });
/**
Create an extension that configures code folding.
*/
function codeFolding(config) {
	let result = [foldState, baseTheme$1];
	if (config) result.push(foldConfig.of(config));
	return result;
}
function widgetToDOM(view, prepared) {
	let { state } = view, conf = state.facet(foldConfig);
	let onclick = (event) => {
		let line = view.lineBlockAt(view.posAtDOM(event.target));
		let folded = findFold(view.state, line.from, line.to);
		if (folded) view.dispatch({ effects: unfoldEffect.of(folded) });
		event.preventDefault();
	};
	if (conf.placeholderDOM) return conf.placeholderDOM(view, onclick, prepared);
	let element = document.createElement("span");
	element.textContent = conf.placeholderText;
	element.setAttribute("aria-label", state.phrase("folded code"));
	element.title = state.phrase("unfold");
	element.className = "cm-foldPlaceholder";
	element.onclick = onclick;
	return element;
}
var foldWidget = /* @__PURE__ */ Decoration.replace({ widget: /* @__PURE__ */ new class extends WidgetType {
	toDOM(view) {
		return widgetToDOM(view, null);
	}
}() });
var PreparedFoldWidget = class extends WidgetType {
	constructor(value) {
		super();
		this.value = value;
	}
	eq(other) {
		return this.value == other.value;
	}
	toDOM(view) {
		return widgetToDOM(view, this.value);
	}
};
var foldGutterDefaults = {
	openText: "⌄",
	closedText: "›",
	markerDOM: null,
	domEventHandlers: {},
	foldingChanged: () => false
};
var FoldMarker = class extends GutterMarker {
	constructor(config, open) {
		super();
		this.config = config;
		this.open = open;
	}
	eq(other) {
		return this.config == other.config && this.open == other.open;
	}
	toDOM(view) {
		if (this.config.markerDOM) return this.config.markerDOM(this.open);
		let span = document.createElement("span");
		span.textContent = this.open ? this.config.openText : this.config.closedText;
		span.title = view.state.phrase(this.open ? "Fold line" : "Unfold line");
		return span;
	}
};
/**
Create an extension that registers a fold gutter, which shows a
fold status indicator before foldable lines (which can be clicked
to fold or unfold the line).
*/
function foldGutter(config = {}) {
	let fullConfig = {
		...foldGutterDefaults,
		...config
	};
	let canFold = new FoldMarker(fullConfig, true), canUnfold = new FoldMarker(fullConfig, false);
	let markers = ViewPlugin.fromClass(class {
		constructor(view) {
			this.from = view.viewport.from;
			this.markers = this.buildMarkers(view);
		}
		update(update) {
			if (update.docChanged || update.viewportChanged || update.startState.facet(language) != update.state.facet(language) || update.startState.field(foldState, false) != update.state.field(foldState, false) || syntaxTree(update.startState) != syntaxTree(update.state) || fullConfig.foldingChanged(update)) this.markers = this.buildMarkers(update.view);
		}
		buildMarkers(view) {
			let builder = new RangeSetBuilder();
			for (let line of view.viewportLineBlocks) {
				let mark = findFold(view.state, line.from, line.to) ? canUnfold : foldable(view.state, line.from, line.to) ? canFold : null;
				if (mark) builder.add(line.from, line.from, mark);
			}
			return builder.finish();
		}
	});
	let { domEventHandlers } = fullConfig;
	return [
		markers,
		gutter({
			class: "cm-foldGutter",
			markers(view) {
				var _a;
				return ((_a = view.plugin(markers)) === null || _a === void 0 ? void 0 : _a.markers) || RangeSet.empty;
			},
			initialSpacer() {
				return new FoldMarker(fullConfig, false);
			},
			domEventHandlers: {
				...domEventHandlers,
				click: (view, line, event) => {
					if (domEventHandlers.click && domEventHandlers.click(view, line, event)) return true;
					let folded = findFold(view.state, line.from, line.to);
					if (folded) {
						view.dispatch({ effects: unfoldEffect.of(folded) });
						return true;
					}
					let range = foldable(view.state, line.from, line.to);
					if (range) {
						view.dispatch({ effects: foldEffect.of(range) });
						return true;
					}
					return false;
				}
			}
		}),
		codeFolding()
	];
}
var baseTheme$1 = /* @__PURE__ */ EditorView.baseTheme({
	".cm-foldPlaceholder": {
		backgroundColor: "#eee",
		border: "1px solid #ddd",
		color: "#888",
		borderRadius: ".2em",
		margin: "0 1px",
		padding: "0 1px",
		cursor: "pointer"
	},
	".cm-foldGutter span": {
		padding: "0 1px",
		cursor: "pointer"
	}
});
/**
A highlight style associates CSS styles with highlighting
[tags](https://lezer.codemirror.net/docs/ref#highlight.Tag).
*/
var HighlightStyle = class HighlightStyle {
	constructor(specs, options) {
		this.specs = specs;
		let modSpec;
		function def(spec) {
			let cls = StyleModule.newName();
			(modSpec || (modSpec = Object.create(null)))["." + cls] = spec;
			return cls;
		}
		const all = typeof options.all == "string" ? options.all : options.all ? def(options.all) : void 0;
		const scopeOpt = options.scope;
		this.scope = scopeOpt instanceof Language ? (type) => type.prop(languageDataProp) == scopeOpt.data : scopeOpt ? (type) => type == scopeOpt : void 0;
		this.style = tagHighlighter(specs.map((style) => ({
			tag: style.tag,
			class: style.class || def(Object.assign({}, style, { tag: null }))
		})), { all }).style;
		this.module = modSpec ? new StyleModule(modSpec) : null;
		this.themeType = options.themeType;
	}
	/**
	Create a highlighter style that associates the given styles to
	the given tags. The specs must be objects that hold a style tag
	or array of tags in their `tag` property, and either a single
	`class` property providing a static CSS class (for highlighter
	that rely on external styling), or a
	[`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
	set of CSS properties (which define the styling for those tags).
	
	The CSS rules created for a highlighter will be emitted in the
	order of the spec's properties. That means that for elements that
	have multiple tags associated with them, styles defined further
	down in the list will have a higher CSS precedence than styles
	defined earlier.
	*/
	static define(specs, options) {
		return new HighlightStyle(specs, options || {});
	}
};
var highlighterFacet = /* @__PURE__ */ Facet.define();
var fallbackHighlighter = /* @__PURE__ */ Facet.define({ combine(values) {
	return values.length ? [values[0]] : null;
} });
function getHighlighters(state) {
	let main = state.facet(highlighterFacet);
	return main.length ? main : state.facet(fallbackHighlighter);
}
/**
Wrap a highlighter in an editor extension that uses it to apply
syntax highlighting to the editor content.

When multiple (non-fallback) styles are provided, the styling
applied is the union of the classes they emit.
*/
function syntaxHighlighting(highlighter, options) {
	let ext = [treeHighlighter], themeType;
	if (highlighter instanceof HighlightStyle) {
		if (highlighter.module) ext.push(EditorView.styleModule.of(highlighter.module));
		themeType = highlighter.themeType;
	}
	if (options === null || options === void 0 ? void 0 : options.fallback) ext.push(fallbackHighlighter.of(highlighter));
	else if (themeType) ext.push(highlighterFacet.computeN([EditorView.darkTheme], (state) => {
		return state.facet(EditorView.darkTheme) == (themeType == "dark") ? [highlighter] : [];
	}));
	else ext.push(highlighterFacet.of(highlighter));
	return ext;
}
var TreeHighlighter = class {
	constructor(view) {
		this.markCache = Object.create(null);
		this.tree = syntaxTree(view.state);
		this.decorations = this.buildDeco(view, getHighlighters(view.state));
		this.decoratedTo = view.viewport.to;
	}
	update(update) {
		let tree = syntaxTree(update.state), highlighters = getHighlighters(update.state);
		let styleChange = highlighters != getHighlighters(update.startState);
		let { viewport } = update.view, decoratedToMapped = update.changes.mapPos(this.decoratedTo, 1);
		if (tree.length < viewport.to && !styleChange && tree.type == this.tree.type && decoratedToMapped >= viewport.to) {
			this.decorations = this.decorations.map(update.changes);
			this.decoratedTo = decoratedToMapped;
		} else if (tree != this.tree || update.viewportChanged || styleChange) {
			this.tree = tree;
			this.decorations = this.buildDeco(update.view, highlighters);
			this.decoratedTo = viewport.to;
		}
	}
	buildDeco(view, highlighters) {
		if (!highlighters || !this.tree.length) return Decoration.none;
		let builder = new RangeSetBuilder();
		for (let { from, to } of view.visibleRanges) highlightTree(this.tree, highlighters, (from, to, style) => {
			builder.add(from, to, this.markCache[style] || (this.markCache[style] = Decoration.mark({ class: style })));
		}, from, to);
		return builder.finish();
	}
};
var treeHighlighter = /* @__PURE__ */ Prec.high(/* @__PURE__ */ ViewPlugin.fromClass(TreeHighlighter, { decorations: (v) => v.decorations }));
tags.meta, tags.link, tags.heading, tags.emphasis, tags.strong, tags.strikethrough, tags.keyword, tags.atom, tags.bool, tags.url, tags.contentSeparator, tags.labelName, tags.literal, tags.inserted, tags.string, tags.deleted, tags.regexp, tags.escape, tags.string, tags.variableName, tags.variableName, tags.typeName, tags.namespace, tags.className, tags.variableName, tags.macroName, tags.propertyName, tags.comment, tags.invalid;
var baseTheme$2 = /* @__PURE__ */ EditorView.baseTheme({
	"&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
	"&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
});
var DefaultScanDist = 1e4, DefaultBrackets = "()[]{}";
var bracketMatchingConfig = /* @__PURE__ */ Facet.define({ combine(configs) {
	return combineConfig(configs, {
		afterCursor: true,
		brackets: DefaultBrackets,
		maxScanDistance: DefaultScanDist,
		renderMatch: defaultRenderMatch
	});
} });
var matchingMark = /* @__PURE__ */ Decoration.mark({ class: "cm-matchingBracket" }), nonmatchingMark = /* @__PURE__ */ Decoration.mark({ class: "cm-nonmatchingBracket" });
function defaultRenderMatch(match) {
	let decorations = [];
	let mark = match.matched ? matchingMark : nonmatchingMark;
	decorations.push(mark.range(match.start.from, match.start.to));
	if (match.end) decorations.push(mark.range(match.end.from, match.end.to));
	return decorations;
}
var bracketMatchingUnique = [/* @__PURE__ */ StateField.define({
	create() {
		return Decoration.none;
	},
	update(deco, tr) {
		if (!tr.docChanged && !tr.selection) return deco;
		let decorations = [];
		let config = tr.state.facet(bracketMatchingConfig);
		for (let range of tr.state.selection.ranges) {
			if (!range.empty) continue;
			let match = matchBrackets(tr.state, range.head, -1, config) || range.head > 0 && matchBrackets(tr.state, range.head - 1, 1, config) || config.afterCursor && (matchBrackets(tr.state, range.head, 1, config) || range.head < tr.state.doc.length && matchBrackets(tr.state, range.head + 1, -1, config));
			if (match) decorations = decorations.concat(config.renderMatch(match, tr.state));
		}
		return Decoration.set(decorations, true);
	},
	provide: (f) => EditorView.decorations.from(f)
}), baseTheme$2];
/**
Create an extension that enables bracket matching. Whenever the
cursor is next to a bracket, that bracket and the one it matches
are highlighted. Or, when no matching bracket is found, another
highlighting style is used to indicate this.
*/
function bracketMatching(config = {}) {
	return [bracketMatchingConfig.of(config), bracketMatchingUnique];
}
/**
When larger syntax nodes, such as HTML tags, are marked as
opening/closing, it can be a bit messy to treat the whole node as
a matchable bracket. This node prop allows you to define, for such
a node, a ‘handle’—the part of the node that is highlighted, and
that the cursor must be on to activate highlighting in the first
place.
*/
var bracketMatchingHandle = /* @__PURE__ */ new NodeProp();
function matchingNodes(node, dir, brackets) {
	let byProp = node.prop(dir < 0 ? NodeProp.openedBy : NodeProp.closedBy);
	if (byProp) return byProp;
	if (node.name.length == 1) {
		let index = brackets.indexOf(node.name);
		if (index > -1 && index % 2 == (dir < 0 ? 1 : 0)) return [brackets[index + dir]];
	}
	return null;
}
function findHandle(node) {
	let hasHandle = node.type.prop(bracketMatchingHandle);
	return hasHandle ? hasHandle(node.node) : node;
}
/**
Find the matching bracket for the token at `pos`, scanning
direction `dir`. Only the `brackets` and `maxScanDistance`
properties are used from `config`, if given. Returns null if no
bracket was found at `pos`, or a match result otherwise.
*/
function matchBrackets(state, pos, dir, config = {}) {
	let maxScanDistance = config.maxScanDistance || DefaultScanDist, brackets = config.brackets || DefaultBrackets;
	let tree = syntaxTree(state), node = tree.resolveInner(pos, dir);
	for (let cur = node; cur; cur = cur.parent) {
		let matches = matchingNodes(cur.type, dir, brackets);
		if (matches && cur.from < cur.to) {
			let handle = findHandle(cur);
			if (handle && (dir > 0 ? pos >= handle.from && pos < handle.to : pos > handle.from && pos <= handle.to)) return matchMarkedBrackets(state, pos, dir, cur, handle, matches, brackets);
		}
	}
	return matchPlainBrackets(state, pos, dir, tree, node.type, maxScanDistance, brackets);
}
function matchMarkedBrackets(_state, _pos, dir, token, handle, matching, brackets) {
	let parent = token.parent, firstToken = {
		from: handle.from,
		to: handle.to
	};
	let depth = 0, cursor = parent === null || parent === void 0 ? void 0 : parent.cursor();
	if (cursor && (dir < 0 ? cursor.childBefore(token.from) : cursor.childAfter(token.to))) do
		if (dir < 0 ? cursor.to <= token.from : cursor.from >= token.to) {
			if (depth == 0 && matching.indexOf(cursor.type.name) > -1 && cursor.from < cursor.to) {
				let endHandle = findHandle(cursor);
				return {
					start: firstToken,
					end: endHandle ? {
						from: endHandle.from,
						to: endHandle.to
					} : void 0,
					matched: true
				};
			} else if (matchingNodes(cursor.type, dir, brackets)) depth++;
			else if (matchingNodes(cursor.type, -dir, brackets)) {
				if (depth == 0) {
					let endHandle = findHandle(cursor);
					return {
						start: firstToken,
						end: endHandle && endHandle.from < endHandle.to ? {
							from: endHandle.from,
							to: endHandle.to
						} : void 0,
						matched: false
					};
				}
				depth--;
			}
		}
	while (dir < 0 ? cursor.prevSibling() : cursor.nextSibling());
	return {
		start: firstToken,
		matched: false
	};
}
function matchPlainBrackets(state, pos, dir, tree, tokenType, maxScanDistance, brackets) {
	let startCh = dir < 0 ? state.sliceDoc(pos - 1, pos) : state.sliceDoc(pos, pos + 1);
	let bracket = brackets.indexOf(startCh);
	if (bracket < 0 || bracket % 2 == 0 != dir > 0) return null;
	let startToken = {
		from: dir < 0 ? pos - 1 : pos,
		to: dir > 0 ? pos + 1 : pos
	};
	let iter = state.doc.iterRange(pos, dir > 0 ? state.doc.length : 0), depth = 0;
	for (let distance = 0; !iter.next().done && distance <= maxScanDistance;) {
		let text = iter.value;
		if (dir < 0) distance += text.length;
		let basePos = pos + distance * dir;
		for (let pos = dir > 0 ? 0 : text.length - 1, end = dir > 0 ? text.length : -1; pos != end; pos += dir) {
			let found = brackets.indexOf(text[pos]);
			if (found < 0 || tree.resolveInner(basePos + pos, 1).type != tokenType) continue;
			if (found % 2 == 0 == dir > 0) depth++;
			else if (depth == 1) return {
				start: startToken,
				end: {
					from: basePos + pos,
					to: basePos + pos + 1
				},
				matched: found >> 1 == bracket >> 1
			};
			else depth--;
		}
		if (dir > 0) distance += text.length;
	}
	return iter.done ? {
		start: startToken,
		matched: false
	} : null;
}
var noTokens = /* @__PURE__ */ Object.create(null);
var typeArray = [NodeType.none];
var warned = [];
var byTag = /* @__PURE__ */ Object.create(null);
var defaultTable = /* @__PURE__ */ Object.create(null);
for (let [legacyName, name] of [
	["variable", "variableName"],
	["variable-2", "variableName.special"],
	["string-2", "string.special"],
	["def", "variableName.definition"],
	["tag", "tagName"],
	["attribute", "attributeName"],
	["type", "typeName"],
	["builtin", "variableName.standard"],
	["qualifier", "modifier"],
	["error", "invalid"],
	["header", "heading"],
	["property", "propertyName"]
]) defaultTable[legacyName] = /* @__PURE__ */ createTokenType(noTokens, name);
function warnForPart(part, msg) {
	if (warned.indexOf(part) > -1) return;
	warned.push(part);
	console.warn(msg);
}
function createTokenType(extra, tagStr) {
	let tags$1 = [];
	for (let name of tagStr.split(" ")) {
		let found = [];
		for (let part of name.split(".")) {
			let value = extra[part] || tags[part];
			if (!value) warnForPart(part, `Unknown highlighting tag ${part}`);
			else if (typeof value == "function") if (!found.length) warnForPart(part, `Modifier ${part} used at start of tag`);
			else found = found.map(value);
			else if (found.length) warnForPart(part, `Tag ${part} used as modifier`);
			else found = Array.isArray(value) ? value : [value];
		}
		for (let tag of found) tags$1.push(tag);
	}
	if (!tags$1.length) return 0;
	let name = tagStr.replace(/ /g, "_"), key = name + " " + tags$1.map((t) => t.id);
	let known = byTag[key];
	if (known) return known.id;
	let type = byTag[key] = NodeType.define({
		id: typeArray.length,
		name,
		props: [styleTags({ [name]: tags$1 })]
	});
	typeArray.push(type);
	return type.id;
}
Direction.RTL, Direction.LTR;
//#endregion
//#region ../../../node_modules/.pnpm/@codemirror+commands@6.10.1/node_modules/@codemirror/commands/dist/index.js
/**
Comment or uncomment the current selection. Will use line comments
if available, otherwise falling back to block comments.
*/
var toggleComment = (target) => {
	let { state } = target, line = state.doc.lineAt(state.selection.main.from), config = getConfig(target.state, line.from);
	return config.line ? toggleLineComment(target) : config.block ? toggleBlockCommentByLine(target) : false;
};
function command(f, option) {
	return ({ state, dispatch }) => {
		if (state.readOnly) return false;
		let tr = f(option, state);
		if (!tr) return false;
		dispatch(state.update(tr));
		return true;
	};
}
/**
Comment or uncomment the current selection using line comments.
The line comment syntax is taken from the
[`commentTokens`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt).
*/
var toggleLineComment = /* @__PURE__ */ command(changeLineComment, 0);
/**
Comment the current selection using line comments.
*/
var lineComment = /* @__PURE__ */ command(changeLineComment, 1);
/**
Uncomment the current selection using line comments.
*/
var lineUncomment = /* @__PURE__ */ command(changeLineComment, 2);
/**
Comment or uncomment the current selection using block comments.
The block comment syntax is taken from the
[`commentTokens`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt).
*/
var toggleBlockComment = /* @__PURE__ */ command(changeBlockComment, 0);
/**
Comment or uncomment the lines around the current selection using
block comments.
*/
var toggleBlockCommentByLine = /* @__PURE__ */ command((o, s) => changeBlockComment(o, s, selectedLineRanges(s)), 0);
function getConfig(state, pos) {
	let data = state.languageDataAt("commentTokens", pos, 1);
	return data.length ? data[0] : {};
}
var SearchMargin = 50;
/**
Determines if the given range is block-commented in the given
state.
*/
function findBlockComment(state, { open, close }, from, to) {
	let textBefore = state.sliceDoc(from - SearchMargin, from);
	let textAfter = state.sliceDoc(to, to + SearchMargin);
	let spaceBefore = /\s*$/.exec(textBefore)[0].length, spaceAfter = /^\s*/.exec(textAfter)[0].length;
	let beforeOff = textBefore.length - spaceBefore;
	if (textBefore.slice(beforeOff - open.length, beforeOff) == open && textAfter.slice(spaceAfter, spaceAfter + close.length) == close) return {
		open: {
			pos: from - spaceBefore,
			margin: spaceBefore && 1
		},
		close: {
			pos: to + spaceAfter,
			margin: spaceAfter && 1
		}
	};
	let startText, endText;
	if (to - from <= 2 * SearchMargin) startText = endText = state.sliceDoc(from, to);
	else {
		startText = state.sliceDoc(from, from + SearchMargin);
		endText = state.sliceDoc(to - SearchMargin, to);
	}
	let startSpace = /^\s*/.exec(startText)[0].length, endSpace = /\s*$/.exec(endText)[0].length;
	let endOff = endText.length - endSpace - close.length;
	if (startText.slice(startSpace, startSpace + open.length) == open && endText.slice(endOff, endOff + close.length) == close) return {
		open: {
			pos: from + startSpace + open.length,
			margin: /\s/.test(startText.charAt(startSpace + open.length)) ? 1 : 0
		},
		close: {
			pos: to - endSpace - close.length,
			margin: /\s/.test(endText.charAt(endOff - 1)) ? 1 : 0
		}
	};
	return null;
}
function selectedLineRanges(state) {
	let ranges = [];
	for (let r of state.selection.ranges) {
		let fromLine = state.doc.lineAt(r.from);
		let toLine = r.to <= fromLine.to ? fromLine : state.doc.lineAt(r.to);
		if (toLine.from > fromLine.from && toLine.from == r.to) toLine = r.to == fromLine.to + 1 ? fromLine : state.doc.lineAt(r.to - 1);
		let last = ranges.length - 1;
		if (last >= 0 && ranges[last].to > fromLine.from) ranges[last].to = toLine.to;
		else ranges.push({
			from: fromLine.from + /^\s*/.exec(fromLine.text)[0].length,
			to: toLine.to
		});
	}
	return ranges;
}
function changeBlockComment(option, state, ranges = state.selection.ranges) {
	let tokens = ranges.map((r) => getConfig(state, r.from).block);
	if (!tokens.every((c) => c)) return null;
	let comments = ranges.map((r, i) => findBlockComment(state, tokens[i], r.from, r.to));
	if (option != 2 && !comments.every((c) => c)) return { changes: state.changes(ranges.map((range, i) => {
		if (comments[i]) return [];
		return [{
			from: range.from,
			insert: tokens[i].open + " "
		}, {
			from: range.to,
			insert: " " + tokens[i].close
		}];
	})) };
	else if (option != 1 && comments.some((c) => c)) {
		let changes = [];
		for (let i = 0, comment; i < comments.length; i++) if (comment = comments[i]) {
			let token = tokens[i], { open, close } = comment;
			changes.push({
				from: open.pos - token.open.length,
				to: open.pos + open.margin
			}, {
				from: close.pos - close.margin,
				to: close.pos + token.close.length
			});
		}
		return { changes };
	}
	return null;
}
function changeLineComment(option, state, ranges = state.selection.ranges) {
	let lines = [];
	let prevLine = -1;
	for (let { from, to } of ranges) {
		let startI = lines.length, minIndent = 1e9;
		let token = getConfig(state, from).line;
		if (!token) continue;
		for (let pos = from; pos <= to;) {
			let line = state.doc.lineAt(pos);
			if (line.from > prevLine && (from == to || to > line.from)) {
				prevLine = line.from;
				let indent = /^\s*/.exec(line.text)[0].length;
				let empty = indent == line.length;
				let comment = line.text.slice(indent, indent + token.length) == token ? indent : -1;
				if (indent < line.text.length && indent < minIndent) minIndent = indent;
				lines.push({
					line,
					comment,
					token,
					indent,
					empty,
					single: false
				});
			}
			pos = line.to + 1;
		}
		if (minIndent < 1e9) {
			for (let i = startI; i < lines.length; i++) if (lines[i].indent < lines[i].line.text.length) lines[i].indent = minIndent;
		}
		if (lines.length == startI + 1) lines[startI].single = true;
	}
	if (option != 2 && lines.some((l) => l.comment < 0 && (!l.empty || l.single))) {
		let changes = [];
		for (let { line, token, indent, empty, single } of lines) if (single || !empty) changes.push({
			from: line.from + indent,
			insert: token + " "
		});
		let changeSet = state.changes(changes);
		return {
			changes: changeSet,
			selection: state.selection.map(changeSet, 1)
		};
	} else if (option != 1 && lines.some((l) => l.comment >= 0)) {
		let changes = [];
		for (let { line, comment, token } of lines) if (comment >= 0) {
			let from = line.from + comment, to = from + token.length;
			if (line.text[to - line.from] == " ") to++;
			changes.push({
				from,
				to
			});
		}
		return { changes };
	}
	return null;
}
var fromHistory = /* @__PURE__ */ Annotation.define();
/**
Transaction annotation that will prevent that transaction from
being combined with other transactions in the undo history. Given
`"before"`, it'll prevent merging with previous transactions. With
`"after"`, subsequent transactions won't be combined with this
one. With `"full"`, the transaction is isolated on both sides.
*/
var isolateHistory = /* @__PURE__ */ Annotation.define();
/**
This facet provides a way to register functions that, given a
transaction, provide a set of effects that the history should
store when inverting the transaction. This can be used to
integrate some kinds of effects in the history, so that they can
be undone (and redone again).
*/
var invertedEffects = /* @__PURE__ */ Facet.define();
var historyConfig = /* @__PURE__ */ Facet.define({ combine(configs) {
	return combineConfig(configs, {
		minDepth: 100,
		newGroupDelay: 500,
		joinToEvent: (_t, isAdjacent) => isAdjacent
	}, {
		minDepth: Math.max,
		newGroupDelay: Math.min,
		joinToEvent: (a, b) => (tr, adj) => a(tr, adj) || b(tr, adj)
	});
} });
var historyField_ = /* @__PURE__ */ StateField.define({
	create() {
		return HistoryState.empty;
	},
	update(state, tr) {
		let config = tr.state.facet(historyConfig);
		let fromHist = tr.annotation(fromHistory);
		if (fromHist) {
			let item = HistEvent.fromTransaction(tr, fromHist.selection), from = fromHist.side;
			let other = from == 0 ? state.undone : state.done;
			if (item) other = updateBranch(other, other.length, config.minDepth, item);
			else other = addSelection(other, tr.startState.selection);
			return new HistoryState(from == 0 ? fromHist.rest : other, from == 0 ? other : fromHist.rest);
		}
		let isolate = tr.annotation(isolateHistory);
		if (isolate == "full" || isolate == "before") state = state.isolate();
		if (tr.annotation(Transaction.addToHistory) === false) return !tr.changes.empty ? state.addMapping(tr.changes.desc) : state;
		let event = HistEvent.fromTransaction(tr);
		let time = tr.annotation(Transaction.time), userEvent = tr.annotation(Transaction.userEvent);
		if (event) state = state.addChanges(event, time, userEvent, config, tr);
		else if (tr.selection) state = state.addSelection(tr.startState.selection, time, userEvent, config.newGroupDelay);
		if (isolate == "full" || isolate == "after") state = state.isolate();
		return state;
	},
	toJSON(value) {
		return {
			done: value.done.map((e) => e.toJSON()),
			undone: value.undone.map((e) => e.toJSON())
		};
	},
	fromJSON(json) {
		return new HistoryState(json.done.map(HistEvent.fromJSON), json.undone.map(HistEvent.fromJSON));
	}
});
/**
Create a history extension with the given configuration.
*/
function history(config = {}) {
	return [
		historyField_,
		historyConfig.of(config),
		EditorView.domEventHandlers({ beforeinput(e, view) {
			let command = e.inputType == "historyUndo" ? undo : e.inputType == "historyRedo" ? redo : null;
			if (!command) return false;
			e.preventDefault();
			return command(view);
		} })
	];
}
/**
The state field used to store the history data. Should probably
only be used when you want to
[serialize](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) or
[deserialize](https://codemirror.net/6/docs/ref/#state.EditorState^fromJSON) state objects in a way
that preserves history.
*/
var historyField = historyField_;
function cmd(side, selection) {
	return function({ state, dispatch }) {
		if (!selection && state.readOnly) return false;
		let historyState = state.field(historyField_, false);
		if (!historyState) return false;
		let tr = historyState.pop(side, state, selection);
		if (!tr) return false;
		dispatch(tr);
		return true;
	};
}
/**
Undo a single group of history events. Returns false if no group
was available.
*/
var undo = /* @__PURE__ */ cmd(0, false);
/**
Redo a group of history events. Returns false if no group was
available.
*/
var redo = /* @__PURE__ */ cmd(1, false);
/**
Undo a change or selection change.
*/
var undoSelection = /* @__PURE__ */ cmd(0, true);
/**
Redo a change or selection change.
*/
var redoSelection = /* @__PURE__ */ cmd(1, true);
var HistEvent = class HistEvent {
	constructor(changes, effects, mapped, startSelection, selectionsAfter) {
		this.changes = changes;
		this.effects = effects;
		this.mapped = mapped;
		this.startSelection = startSelection;
		this.selectionsAfter = selectionsAfter;
	}
	setSelAfter(after) {
		return new HistEvent(this.changes, this.effects, this.mapped, this.startSelection, after);
	}
	toJSON() {
		var _a, _b, _c;
		return {
			changes: (_a = this.changes) === null || _a === void 0 ? void 0 : _a.toJSON(),
			mapped: (_b = this.mapped) === null || _b === void 0 ? void 0 : _b.toJSON(),
			startSelection: (_c = this.startSelection) === null || _c === void 0 ? void 0 : _c.toJSON(),
			selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
		};
	}
	static fromJSON(json) {
		return new HistEvent(json.changes && ChangeSet.fromJSON(json.changes), [], json.mapped && ChangeDesc.fromJSON(json.mapped), json.startSelection && EditorSelection.fromJSON(json.startSelection), json.selectionsAfter.map(EditorSelection.fromJSON));
	}
	static fromTransaction(tr, selection) {
		let effects = none$1;
		for (let invert of tr.startState.facet(invertedEffects)) {
			let result = invert(tr);
			if (result.length) effects = effects.concat(result);
		}
		if (!effects.length && tr.changes.empty) return null;
		return new HistEvent(tr.changes.invert(tr.startState.doc), effects, void 0, selection || tr.startState.selection, none$1);
	}
	static selection(selections) {
		return new HistEvent(void 0, none$1, void 0, void 0, selections);
	}
};
function updateBranch(branch, to, maxLen, newEvent) {
	let start = to + 1 > maxLen + 20 ? to - maxLen - 1 : 0;
	let newBranch = branch.slice(start, to);
	newBranch.push(newEvent);
	return newBranch;
}
function isAdjacent(a, b) {
	let ranges = [], isAdjacent = false;
	a.iterChangedRanges((f, t) => ranges.push(f, t));
	b.iterChangedRanges((_f, _t, f, t) => {
		for (let i = 0; i < ranges.length;) {
			let from = ranges[i++], to = ranges[i++];
			if (t >= from && f <= to) isAdjacent = true;
		}
	});
	return isAdjacent;
}
function eqSelectionShape(a, b) {
	return a.ranges.length == b.ranges.length && a.ranges.filter((r, i) => r.empty != b.ranges[i].empty).length === 0;
}
function conc(a, b) {
	return !a.length ? b : !b.length ? a : a.concat(b);
}
var none$1 = [];
var MaxSelectionsPerEvent = 200;
function addSelection(branch, selection) {
	if (!branch.length) return [HistEvent.selection([selection])];
	else {
		let lastEvent = branch[branch.length - 1];
		let sels = lastEvent.selectionsAfter.slice(Math.max(0, lastEvent.selectionsAfter.length - MaxSelectionsPerEvent));
		if (sels.length && sels[sels.length - 1].eq(selection)) return branch;
		sels.push(selection);
		return updateBranch(branch, branch.length - 1, 1e9, lastEvent.setSelAfter(sels));
	}
}
function popSelection(branch) {
	let last = branch[branch.length - 1];
	let newBranch = branch.slice();
	newBranch[branch.length - 1] = last.setSelAfter(last.selectionsAfter.slice(0, last.selectionsAfter.length - 1));
	return newBranch;
}
function addMappingToBranch(branch, mapping) {
	if (!branch.length) return branch;
	let length = branch.length, selections = none$1;
	while (length) {
		let event = mapEvent(branch[length - 1], mapping, selections);
		if (event.changes && !event.changes.empty || event.effects.length) {
			let result = branch.slice(0, length);
			result[length - 1] = event;
			return result;
		} else {
			mapping = event.mapped;
			length--;
			selections = event.selectionsAfter;
		}
	}
	return selections.length ? [HistEvent.selection(selections)] : none$1;
}
function mapEvent(event, mapping, extraSelections) {
	let selections = conc(event.selectionsAfter.length ? event.selectionsAfter.map((s) => s.map(mapping)) : none$1, extraSelections);
	if (!event.changes) return HistEvent.selection(selections);
	let mappedChanges = event.changes.map(mapping), before = mapping.mapDesc(event.changes, true);
	let fullMapping = event.mapped ? event.mapped.composeDesc(before) : before;
	return new HistEvent(mappedChanges, StateEffect.mapEffects(event.effects, mapping), fullMapping, event.startSelection.map(before), selections);
}
var joinableUserEvent = /^(input\.type|delete)($|\.)/;
var HistoryState = class HistoryState {
	constructor(done, undone, prevTime = 0, prevUserEvent = void 0) {
		this.done = done;
		this.undone = undone;
		this.prevTime = prevTime;
		this.prevUserEvent = prevUserEvent;
	}
	isolate() {
		return this.prevTime ? new HistoryState(this.done, this.undone) : this;
	}
	addChanges(event, time, userEvent, config, tr) {
		let done = this.done, lastEvent = done[done.length - 1];
		if (lastEvent && lastEvent.changes && !lastEvent.changes.empty && event.changes && (!userEvent || joinableUserEvent.test(userEvent)) && (!lastEvent.selectionsAfter.length && time - this.prevTime < config.newGroupDelay && config.joinToEvent(tr, isAdjacent(lastEvent.changes, event.changes)) || userEvent == "input.type.compose")) done = updateBranch(done, done.length - 1, config.minDepth, new HistEvent(event.changes.compose(lastEvent.changes), conc(StateEffect.mapEffects(event.effects, lastEvent.changes), lastEvent.effects), lastEvent.mapped, lastEvent.startSelection, none$1));
		else done = updateBranch(done, done.length, config.minDepth, event);
		return new HistoryState(done, none$1, time, userEvent);
	}
	addSelection(selection, time, userEvent, newGroupDelay) {
		let last = this.done.length ? this.done[this.done.length - 1].selectionsAfter : none$1;
		if (last.length > 0 && time - this.prevTime < newGroupDelay && userEvent == this.prevUserEvent && userEvent && /^select($|\.)/.test(userEvent) && eqSelectionShape(last[last.length - 1], selection)) return this;
		return new HistoryState(addSelection(this.done, selection), this.undone, time, userEvent);
	}
	addMapping(mapping) {
		return new HistoryState(addMappingToBranch(this.done, mapping), addMappingToBranch(this.undone, mapping), this.prevTime, this.prevUserEvent);
	}
	pop(side, state, onlySelection) {
		let branch = side == 0 ? this.done : this.undone;
		if (branch.length == 0) return null;
		let event = branch[branch.length - 1], selection = event.selectionsAfter[0] || state.selection;
		if (onlySelection && event.selectionsAfter.length) return state.update({
			selection: event.selectionsAfter[event.selectionsAfter.length - 1],
			annotations: fromHistory.of({
				side,
				rest: popSelection(branch),
				selection
			}),
			userEvent: side == 0 ? "select.undo" : "select.redo",
			scrollIntoView: true
		});
		else if (!event.changes) return null;
		else {
			let rest = branch.length == 1 ? none$1 : branch.slice(0, branch.length - 1);
			if (event.mapped) rest = addMappingToBranch(rest, event.mapped);
			return state.update({
				changes: event.changes,
				selection: event.startSelection,
				effects: event.effects,
				annotations: fromHistory.of({
					side,
					rest,
					selection
				}),
				filter: false,
				userEvent: side == 0 ? "undo" : "redo",
				scrollIntoView: true
			});
		}
	}
};
HistoryState.empty = /* @__PURE__ */ new HistoryState(none$1, none$1);
/**
Default key bindings for the undo history.

- Mod-z: [`undo`](https://codemirror.net/6/docs/ref/#commands.undo).
- Mod-y (Mod-Shift-z on macOS) + Ctrl-Shift-z on Linux: [`redo`](https://codemirror.net/6/docs/ref/#commands.redo).
- Mod-u: [`undoSelection`](https://codemirror.net/6/docs/ref/#commands.undoSelection).
- Alt-u (Mod-Shift-u on macOS): [`redoSelection`](https://codemirror.net/6/docs/ref/#commands.redoSelection).
*/
var historyKeymap = [
	{
		key: "Mod-z",
		run: undo,
		preventDefault: true
	},
	{
		key: "Mod-y",
		mac: "Mod-Shift-z",
		run: redo,
		preventDefault: true
	},
	{
		linux: "Ctrl-Shift-z",
		run: redo,
		preventDefault: true
	},
	{
		key: "Mod-u",
		run: undoSelection,
		preventDefault: true
	},
	{
		key: "Alt-u",
		mac: "Mod-Shift-u",
		run: redoSelection,
		preventDefault: true
	}
];
function updateSel(sel, by) {
	return EditorSelection.create(sel.ranges.map(by), sel.mainIndex);
}
function setSel(state, selection) {
	return state.update({
		selection,
		scrollIntoView: true,
		userEvent: "select"
	});
}
function moveSel({ state, dispatch }, how) {
	let selection = updateSel(state.selection, how);
	if (selection.eq(state.selection, true)) return false;
	dispatch(setSel(state, selection));
	return true;
}
function rangeEnd(range, forward) {
	return EditorSelection.cursor(forward ? range.to : range.from);
}
function cursorByChar(view, forward) {
	return moveSel(view, (range) => range.empty ? view.moveByChar(range, forward) : rangeEnd(range, forward));
}
function ltrAtCursor(view) {
	return view.textDirectionAt(view.state.selection.main.head) == Direction.LTR;
}
/**
Move the selection one character to the left (which is backward in
left-to-right text, forward in right-to-left text).
*/
var cursorCharLeft = (view) => cursorByChar(view, !ltrAtCursor(view));
/**
Move the selection one character to the right.
*/
var cursorCharRight = (view) => cursorByChar(view, ltrAtCursor(view));
function cursorByGroup(view, forward) {
	return moveSel(view, (range) => range.empty ? view.moveByGroup(range, forward) : rangeEnd(range, forward));
}
/**
Move the selection to the left across one group of word or
non-word (but also non-space) characters.
*/
var cursorGroupLeft = (view) => cursorByGroup(view, !ltrAtCursor(view));
/**
Move the selection one group to the right.
*/
var cursorGroupRight = (view) => cursorByGroup(view, ltrAtCursor(view));
typeof Intl != "undefined" && Intl.Segmenter;
function cursorByLine(view, forward) {
	return moveSel(view, (range) => {
		if (!range.empty) return rangeEnd(range, forward);
		let moved = view.moveVertically(range, forward);
		return moved.head != range.head ? moved : view.moveToLineBoundary(range, forward);
	});
}
/**
Move the selection one line up.
*/
var cursorLineUp = (view) => cursorByLine(view, false);
/**
Move the selection one line down.
*/
var cursorLineDown = (view) => cursorByLine(view, true);
function pageInfo(view) {
	let selfScroll = view.scrollDOM.clientHeight < view.scrollDOM.scrollHeight - 2;
	let marginTop = 0, marginBottom = 0, height;
	if (selfScroll) {
		for (let source of view.state.facet(EditorView.scrollMargins)) {
			let margins = source(view);
			if (margins === null || margins === void 0 ? void 0 : margins.top) marginTop = Math.max(margins === null || margins === void 0 ? void 0 : margins.top, marginTop);
			if (margins === null || margins === void 0 ? void 0 : margins.bottom) marginBottom = Math.max(margins === null || margins === void 0 ? void 0 : margins.bottom, marginBottom);
		}
		height = view.scrollDOM.clientHeight - marginTop - marginBottom;
	} else height = (view.dom.ownerDocument.defaultView || window).innerHeight;
	return {
		marginTop,
		marginBottom,
		selfScroll,
		height: Math.max(view.defaultLineHeight, height - 5)
	};
}
function cursorByPage(view, forward) {
	let page = pageInfo(view);
	let { state } = view, selection = updateSel(state.selection, (range) => {
		return range.empty ? view.moveVertically(range, forward, page.height) : rangeEnd(range, forward);
	});
	if (selection.eq(state.selection)) return false;
	let effect;
	if (page.selfScroll) {
		let startPos = view.coordsAtPos(state.selection.main.head);
		let scrollRect = view.scrollDOM.getBoundingClientRect();
		let scrollTop = scrollRect.top + page.marginTop, scrollBottom = scrollRect.bottom - page.marginBottom;
		if (startPos && startPos.top > scrollTop && startPos.bottom < scrollBottom) effect = EditorView.scrollIntoView(selection.main.head, {
			y: "start",
			yMargin: startPos.top - scrollTop
		});
	}
	view.dispatch(setSel(state, selection), { effects: effect });
	return true;
}
/**
Move the selection one page up.
*/
var cursorPageUp = (view) => cursorByPage(view, false);
/**
Move the selection one page down.
*/
var cursorPageDown = (view) => cursorByPage(view, true);
function moveByLineBoundary(view, start, forward) {
	let line = view.lineBlockAt(start.head), moved = view.moveToLineBoundary(start, forward);
	if (moved.head == start.head && moved.head != (forward ? line.to : line.from)) moved = view.moveToLineBoundary(start, forward, false);
	if (!forward && moved.head == line.from && line.length) {
		let space = /^\s*/.exec(view.state.sliceDoc(line.from, Math.min(line.from + 100, line.to)))[0].length;
		if (space && start.head != line.from + space) moved = EditorSelection.cursor(line.from + space);
	}
	return moved;
}
/**
Move the selection to the next line wrap point, or to the end of
the line if there isn't one left on this line.
*/
var cursorLineBoundaryForward = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, true));
/**
Move the selection to previous line wrap point, or failing that to
the start of the line. If the line is indented, and the cursor
isn't already at the end of the indentation, this will move to the
end of the indentation instead of the start of the line.
*/
var cursorLineBoundaryBackward = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, false));
/**
Move the selection to the start of the line.
*/
var cursorLineStart = (view) => moveSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).from, 1));
/**
Move the selection to the end of the line.
*/
var cursorLineEnd = (view) => moveSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).to, -1));
function toMatchingBracket(state, dispatch, extend) {
	let found = false, selection = updateSel(state.selection, (range) => {
		let matching = matchBrackets(state, range.head, -1) || matchBrackets(state, range.head, 1) || range.head > 0 && matchBrackets(state, range.head - 1, 1) || range.head < state.doc.length && matchBrackets(state, range.head + 1, -1);
		if (!matching || !matching.end) return range;
		found = true;
		let head = matching.start.from == range.head ? matching.end.to : matching.end.from;
		return extend ? EditorSelection.range(range.anchor, head) : EditorSelection.cursor(head);
	});
	if (!found) return false;
	dispatch(setSel(state, selection));
	return true;
}
/**
Move the selection to the bracket matching the one it is currently
on, if any.
*/
var cursorMatchingBracket = ({ state, dispatch }) => toMatchingBracket(state, dispatch, false);
function extendSel(target, how) {
	let selection = updateSel(target.state.selection, (range) => {
		let head = how(range);
		return EditorSelection.range(range.anchor, head.head, head.goalColumn, head.bidiLevel || void 0);
	});
	if (selection.eq(target.state.selection)) return false;
	target.dispatch(setSel(target.state, selection));
	return true;
}
function selectByChar(view, forward) {
	return extendSel(view, (range) => view.moveByChar(range, forward));
}
/**
Move the selection head one character to the left, while leaving
the anchor in place.
*/
var selectCharLeft = (view) => selectByChar(view, !ltrAtCursor(view));
/**
Move the selection head one character to the right.
*/
var selectCharRight = (view) => selectByChar(view, ltrAtCursor(view));
function selectByGroup(view, forward) {
	return extendSel(view, (range) => view.moveByGroup(range, forward));
}
/**
Move the selection head one [group](https://codemirror.net/6/docs/ref/#commands.cursorGroupLeft) to
the left.
*/
var selectGroupLeft = (view) => selectByGroup(view, !ltrAtCursor(view));
/**
Move the selection head one group to the right.
*/
var selectGroupRight = (view) => selectByGroup(view, ltrAtCursor(view));
function selectByLine(view, forward) {
	return extendSel(view, (range) => view.moveVertically(range, forward));
}
/**
Move the selection head one line up.
*/
var selectLineUp = (view) => selectByLine(view, false);
/**
Move the selection head one line down.
*/
var selectLineDown = (view) => selectByLine(view, true);
function selectByPage(view, forward) {
	return extendSel(view, (range) => view.moveVertically(range, forward, pageInfo(view).height));
}
/**
Move the selection head one page up.
*/
var selectPageUp = (view) => selectByPage(view, false);
/**
Move the selection head one page down.
*/
var selectPageDown = (view) => selectByPage(view, true);
/**
Move the selection head to the next line boundary.
*/
var selectLineBoundaryForward = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, true));
/**
Move the selection head to the previous line boundary.
*/
var selectLineBoundaryBackward = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, false));
/**
Move the selection head to the start of the line.
*/
var selectLineStart = (view) => extendSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).from));
/**
Move the selection head to the end of the line.
*/
var selectLineEnd = (view) => extendSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).to));
/**
Move the selection to the start of the document.
*/
var cursorDocStart = ({ state, dispatch }) => {
	dispatch(setSel(state, { anchor: 0 }));
	return true;
};
/**
Move the selection to the end of the document.
*/
var cursorDocEnd = ({ state, dispatch }) => {
	dispatch(setSel(state, { anchor: state.doc.length }));
	return true;
};
/**
Move the selection head to the start of the document.
*/
var selectDocStart = ({ state, dispatch }) => {
	dispatch(setSel(state, {
		anchor: state.selection.main.anchor,
		head: 0
	}));
	return true;
};
/**
Move the selection head to the end of the document.
*/
var selectDocEnd = ({ state, dispatch }) => {
	dispatch(setSel(state, {
		anchor: state.selection.main.anchor,
		head: state.doc.length
	}));
	return true;
};
/**
Select the entire document.
*/
var selectAll = ({ state, dispatch }) => {
	dispatch(state.update({
		selection: {
			anchor: 0,
			head: state.doc.length
		},
		userEvent: "select"
	}));
	return true;
};
/**
Expand the selection to cover entire lines.
*/
var selectLine = ({ state, dispatch }) => {
	let ranges = selectedLineBlocks(state).map(({ from, to }) => EditorSelection.range(from, Math.min(to + 1, state.doc.length)));
	dispatch(state.update({
		selection: EditorSelection.create(ranges),
		userEvent: "select"
	}));
	return true;
};
function deleteBy(target, by) {
	if (target.state.readOnly) return false;
	let event = "delete.selection", { state } = target;
	let changes = state.changeByRange((range) => {
		let { from, to } = range;
		if (from == to) {
			let towards = by(range);
			if (towards < from) {
				event = "delete.backward";
				towards = skipAtomic(target, towards, false);
			} else if (towards > from) {
				event = "delete.forward";
				towards = skipAtomic(target, towards, true);
			}
			from = Math.min(from, towards);
			to = Math.max(to, towards);
		} else {
			from = skipAtomic(target, from, false);
			to = skipAtomic(target, to, true);
		}
		return from == to ? { range } : {
			changes: {
				from,
				to
			},
			range: EditorSelection.cursor(from, from < range.head ? -1 : 1)
		};
	});
	if (changes.changes.empty) return false;
	target.dispatch(state.update(changes, {
		scrollIntoView: true,
		userEvent: event,
		effects: event == "delete.selection" ? EditorView.announce.of(state.phrase("Selection deleted")) : void 0
	}));
	return true;
}
function skipAtomic(target, pos, forward) {
	if (target instanceof EditorView) for (let ranges of target.state.facet(EditorView.atomicRanges).map((f) => f(target))) ranges.between(pos, pos, (from, to) => {
		if (from < pos && to > pos) pos = forward ? to : from;
	});
	return pos;
}
var deleteByChar = (target, forward, byIndentUnit) => deleteBy(target, (range) => {
	let pos = range.from, { state } = target, line = state.doc.lineAt(pos), before, targetPos;
	if (byIndentUnit && !forward && pos > line.from && pos < line.from + 200 && !/[^ \t]/.test(before = line.text.slice(0, pos - line.from))) {
		if (before[before.length - 1] == "	") return pos - 1;
		let drop = countColumn(before, state.tabSize) % getIndentUnit(state) || getIndentUnit(state);
		for (let i = 0; i < drop && before[before.length - 1 - i] == " "; i++) pos--;
		targetPos = pos;
	} else {
		targetPos = findClusterBreak(line.text, pos - line.from, forward, forward) + line.from;
		if (targetPos == pos && line.number != (forward ? state.doc.lines : 1)) targetPos += forward ? 1 : -1;
		else if (!forward && /[\ufe00-\ufe0f]/.test(line.text.slice(targetPos - line.from, pos - line.from))) targetPos = findClusterBreak(line.text, targetPos - line.from, false, false) + line.from;
	}
	return targetPos;
});
/**
Delete the selection, or, for cursor selections, the character or
indentation unit before the cursor.
*/
var deleteCharBackward = (view) => deleteByChar(view, false, true);
/**
Delete the selection or the character after the cursor.
*/
var deleteCharForward = (view) => deleteByChar(view, true, false);
var deleteByGroup = (target, forward) => deleteBy(target, (range) => {
	let pos = range.head, { state } = target, line = state.doc.lineAt(pos);
	let categorize = state.charCategorizer(pos);
	for (let cat = null;;) {
		if (pos == (forward ? line.to : line.from)) {
			if (pos == range.head && line.number != (forward ? state.doc.lines : 1)) pos += forward ? 1 : -1;
			break;
		}
		let next = findClusterBreak(line.text, pos - line.from, forward) + line.from;
		let nextChar = line.text.slice(Math.min(pos, next) - line.from, Math.max(pos, next) - line.from);
		let nextCat = categorize(nextChar);
		if (cat != null && nextCat != cat) break;
		if (nextChar != " " || pos != range.head) cat = nextCat;
		pos = next;
	}
	return pos;
});
/**
Delete the selection or backward until the end of the next
[group](https://codemirror.net/6/docs/ref/#view.EditorView.moveByGroup), only skipping groups of
whitespace when they consist of a single space.
*/
var deleteGroupBackward = (target) => deleteByGroup(target, false);
/**
Delete the selection or forward until the end of the next group.
*/
var deleteGroupForward = (target) => deleteByGroup(target, true);
/**
Delete the selection, or, if it is a cursor selection, delete to
the end of the line. If the cursor is directly at the end of the
line, delete the line break after it.
*/
var deleteToLineEnd = (view) => deleteBy(view, (range) => {
	let lineEnd = view.lineBlockAt(range.head).to;
	return range.head < lineEnd ? lineEnd : Math.min(view.state.doc.length, range.head + 1);
});
/**
Delete the selection, or, if it is a cursor selection, delete to
the start of the line. If the cursor is directly at the start of the
line, delete the line break before it.
*/
var deleteToLineStart = (view) => deleteBy(view, (range) => {
	let lineStart = view.lineBlockAt(range.head).from;
	return range.head > lineStart ? lineStart : Math.max(0, range.head - 1);
});
/**
Replace each selection range with a line break, leaving the cursor
on the line before the break.
*/
var splitLine = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	let changes = state.changeByRange((range) => {
		return {
			changes: {
				from: range.from,
				to: range.to,
				insert: Text.of(["", ""])
			},
			range: EditorSelection.cursor(range.from)
		};
	});
	dispatch(state.update(changes, {
		scrollIntoView: true,
		userEvent: "input"
	}));
	return true;
};
/**
Flip the characters before and after the cursor(s).
*/
var transposeChars = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	let changes = state.changeByRange((range) => {
		if (!range.empty || range.from == 0 || range.from == state.doc.length) return { range };
		let pos = range.from, line = state.doc.lineAt(pos);
		let from = pos == line.from ? pos - 1 : findClusterBreak(line.text, pos - line.from, false) + line.from;
		let to = pos == line.to ? pos + 1 : findClusterBreak(line.text, pos - line.from, true) + line.from;
		return {
			changes: {
				from,
				to,
				insert: state.doc.slice(pos, to).append(state.doc.slice(from, pos))
			},
			range: EditorSelection.cursor(to)
		};
	});
	if (changes.changes.empty) return false;
	dispatch(state.update(changes, {
		scrollIntoView: true,
		userEvent: "move.character"
	}));
	return true;
};
function selectedLineBlocks(state) {
	let blocks = [], upto = -1;
	for (let range of state.selection.ranges) {
		let startLine = state.doc.lineAt(range.from), endLine = state.doc.lineAt(range.to);
		if (!range.empty && range.to == endLine.from) endLine = state.doc.lineAt(range.to - 1);
		if (upto >= startLine.number) {
			let prev = blocks[blocks.length - 1];
			prev.to = endLine.to;
			prev.ranges.push(range);
		} else blocks.push({
			from: startLine.from,
			to: endLine.to,
			ranges: [range]
		});
		upto = endLine.number + 1;
	}
	return blocks;
}
function moveLine(state, dispatch, forward) {
	if (state.readOnly) return false;
	let changes = [], ranges = [];
	for (let block of selectedLineBlocks(state)) {
		if (forward ? block.to == state.doc.length : block.from == 0) continue;
		let nextLine = state.doc.lineAt(forward ? block.to + 1 : block.from - 1);
		let size = nextLine.length + 1;
		if (forward) {
			changes.push({
				from: block.to,
				to: nextLine.to
			}, {
				from: block.from,
				insert: nextLine.text + state.lineBreak
			});
			for (let r of block.ranges) ranges.push(EditorSelection.range(Math.min(state.doc.length, r.anchor + size), Math.min(state.doc.length, r.head + size)));
		} else {
			changes.push({
				from: nextLine.from,
				to: block.from
			}, {
				from: block.to,
				insert: state.lineBreak + nextLine.text
			});
			for (let r of block.ranges) ranges.push(EditorSelection.range(r.anchor - size, r.head - size));
		}
	}
	if (!changes.length) return false;
	dispatch(state.update({
		changes,
		scrollIntoView: true,
		selection: EditorSelection.create(ranges, state.selection.mainIndex),
		userEvent: "move.line"
	}));
	return true;
}
/**
Move the selected lines up one line.
*/
var moveLineUp = ({ state, dispatch }) => moveLine(state, dispatch, false);
/**
Move the selected lines down one line.
*/
var moveLineDown = ({ state, dispatch }) => moveLine(state, dispatch, true);
function copyLine(state, dispatch, forward) {
	if (state.readOnly) return false;
	let changes = [];
	for (let block of selectedLineBlocks(state)) if (forward) changes.push({
		from: block.from,
		insert: state.doc.slice(block.from, block.to) + state.lineBreak
	});
	else changes.push({
		from: block.to,
		insert: state.lineBreak + state.doc.slice(block.from, block.to)
	});
	let changeSet = state.changes(changes);
	dispatch(state.update({
		changes: changeSet,
		selection: state.selection.map(changeSet, forward ? 1 : -1),
		scrollIntoView: true,
		userEvent: "input.copyline"
	}));
	return true;
}
/**
Create a copy of the selected lines. Keep the selection in the top copy.
*/
var copyLineUp = ({ state, dispatch }) => copyLine(state, dispatch, false);
/**
Create a copy of the selected lines. Keep the selection in the bottom copy.
*/
var copyLineDown = ({ state, dispatch }) => copyLine(state, dispatch, true);
/**
Delete selected lines.
*/
var deleteLine = (view) => {
	if (view.state.readOnly) return false;
	let { state } = view, changes = state.changes(selectedLineBlocks(state).map(({ from, to }) => {
		if (from > 0) from--;
		else if (to < state.doc.length) to++;
		return {
			from,
			to
		};
	}));
	let selection = updateSel(state.selection, (range) => {
		let dist = void 0;
		if (view.lineWrapping) {
			let block = view.lineBlockAt(range.head), pos = view.coordsAtPos(range.head, range.assoc || 1);
			if (pos) dist = block.bottom + view.documentTop - pos.bottom + view.defaultLineHeight / 2;
		}
		return view.moveVertically(range, true, dist);
	}).map(changes);
	view.dispatch({
		changes,
		selection,
		scrollIntoView: true,
		userEvent: "delete.line"
	});
	return true;
};
function isBetweenBrackets(state, pos) {
	if (/\(\)|\[\]|\{\}/.test(state.sliceDoc(pos - 1, pos + 1))) return {
		from: pos,
		to: pos
	};
	let context = syntaxTree(state).resolveInner(pos);
	let before = context.childBefore(pos), after = context.childAfter(pos), closedBy;
	if (before && after && before.to <= pos && after.from >= pos && (closedBy = before.type.prop(NodeProp.closedBy)) && closedBy.indexOf(after.name) > -1 && state.doc.lineAt(before.to).from == state.doc.lineAt(after.from).from && !/\S/.test(state.sliceDoc(before.to, after.from))) return {
		from: before.to,
		to: after.from
	};
	return null;
}
/**
Replace the selection with a newline and indent the newly created
line(s). If the current line consists only of whitespace, this
will also delete that whitespace. When the cursor is between
matching brackets, an additional newline will be inserted after
the cursor.
*/
var insertNewlineAndIndent = /* @__PURE__ */ newlineAndIndent(false);
function newlineAndIndent(atEof) {
	return ({ state, dispatch }) => {
		if (state.readOnly) return false;
		let changes = state.changeByRange((range) => {
			let { from, to } = range, line = state.doc.lineAt(from);
			let explode = !atEof && from == to && isBetweenBrackets(state, from);
			if (atEof) from = to = (to <= line.to ? line : state.doc.lineAt(to)).to;
			let cx = new IndentContext(state, {
				simulateBreak: from,
				simulateDoubleBreak: !!explode
			});
			let indent = getIndentation(cx, from);
			if (indent == null) indent = countColumn(/^\s*/.exec(state.doc.lineAt(from).text)[0], state.tabSize);
			while (to < line.to && /\s/.test(line.text[to - line.from])) to++;
			if (explode) ({from, to} = explode);
			else if (from > line.from && from < line.from + 100 && !/\S/.test(line.text.slice(0, from))) from = line.from;
			let insert = ["", indentString(state, indent)];
			if (explode) insert.push(indentString(state, cx.lineIndent(line.from, -1)));
			return {
				changes: {
					from,
					to,
					insert: Text.of(insert)
				},
				range: EditorSelection.cursor(from + 1 + insert[1].length)
			};
		});
		dispatch(state.update(changes, {
			scrollIntoView: true,
			userEvent: "input"
		}));
		return true;
	};
}
function changeBySelectedLine(state, f) {
	let atLine = -1;
	return state.changeByRange((range) => {
		let changes = [];
		for (let pos = range.from; pos <= range.to;) {
			let line = state.doc.lineAt(pos);
			if (line.number > atLine && (range.empty || range.to > line.from)) {
				f(line, changes, range);
				atLine = line.number;
			}
			pos = line.to + 1;
		}
		let changeSet = state.changes(changes);
		return {
			changes,
			range: EditorSelection.range(changeSet.mapPos(range.anchor, 1), changeSet.mapPos(range.head, 1))
		};
	});
}
/**
Add a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation to all selected
lines.
*/
var indentMore = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	dispatch(state.update(changeBySelectedLine(state, (line, changes) => {
		changes.push({
			from: line.from,
			insert: state.facet(indentUnit)
		});
	}), { userEvent: "input.indent" }));
	return true;
};
/**
Remove a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation from all
selected lines.
*/
var indentLess = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	dispatch(state.update(changeBySelectedLine(state, (line, changes) => {
		let space = /^\s*/.exec(line.text)[0];
		if (!space) return;
		let col = countColumn(space, state.tabSize), keep = 0;
		let insert = indentString(state, Math.max(0, col - getIndentUnit(state)));
		while (keep < space.length && keep < insert.length && space.charCodeAt(keep) == insert.charCodeAt(keep)) keep++;
		changes.push({
			from: line.from + keep,
			to: line.from + space.length,
			insert: insert.slice(keep)
		});
	}), { userEvent: "delete.dedent" }));
	return true;
};
//#endregion
//#region ../../../node_modules/.pnpm/@codemirror+autocomplete@6.20.0/node_modules/@codemirror/autocomplete/dist/index.js
/**
An instance of this is passed to completion source functions.
*/
var CompletionContext = class {
	/**
	Create a new completion context. (Mostly useful for testing
	completion sources—in the editor, the extension will create
	these for you.)
	*/
	constructor(state, pos, explicit, view) {
		this.state = state;
		this.pos = pos;
		this.explicit = explicit;
		this.view = view;
		/**
		@internal
		*/
		this.abortListeners = [];
		/**
		@internal
		*/
		this.abortOnDocChange = false;
	}
	/**
	Get the extent, content, and (if there is a token) type of the
	token before `this.pos`.
	*/
	tokenBefore(types) {
		let token = syntaxTree(this.state).resolveInner(this.pos, -1);
		while (token && types.indexOf(token.name) < 0) token = token.parent;
		return token ? {
			from: token.from,
			to: this.pos,
			text: this.state.sliceDoc(token.from, this.pos),
			type: token.type
		} : null;
	}
	/**
	Get the match of the given expression directly before the
	cursor.
	*/
	matchBefore(expr) {
		let line = this.state.doc.lineAt(this.pos);
		let start = Math.max(line.from, this.pos - 250);
		let str = line.text.slice(start - line.from, this.pos - line.from);
		let found = str.search(ensureAnchor(expr, false));
		return found < 0 ? null : {
			from: start + found,
			to: this.pos,
			text: str.slice(found)
		};
	}
	/**
	Yields true when the query has been aborted. Can be useful in
	asynchronous queries to avoid doing work that will be ignored.
	*/
	get aborted() {
		return this.abortListeners == null;
	}
	/**
	Allows you to register abort handlers, which will be called when
	the query is
	[aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
	
	By default, running queries will not be aborted for regular
	typing or backspacing, on the assumption that they are likely to
	return a result with a
	[`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
	allows the result to be used after all. Passing `onDocChange:
	true` will cause this query to be aborted for any document
	change.
	*/
	addEventListener(type, listener, options) {
		if (type == "abort" && this.abortListeners) {
			this.abortListeners.push(listener);
			if (options && options.onDocChange) this.abortOnDocChange = true;
		}
	}
};
function toSet(chars) {
	let flat = Object.keys(chars).join("");
	let words = /\w/.test(flat);
	if (words) flat = flat.replace(/\w/g, "");
	return `[${words ? "\\w" : ""}${flat.replace(/[^\w\s]/g, "\\$&")}]`;
}
function prefixMatch(options) {
	let first = Object.create(null), rest = Object.create(null);
	for (let { label } of options) {
		first[label[0]] = true;
		for (let i = 1; i < label.length; i++) rest[label[i]] = true;
	}
	let source = toSet(first) + toSet(rest) + "*$";
	return [new RegExp("^" + source), new RegExp(source)];
}
/**
Given a a fixed array of options, return an autocompleter that
completes them.
*/
function completeFromList(list) {
	let options = list.map((o) => typeof o == "string" ? { label: o } : o);
	let [validFor, match] = options.every((o) => /^\w+$/.test(o.label)) ? [/\w*$/, /\w+$/] : prefixMatch(options);
	return (context) => {
		let token = context.matchBefore(match);
		return token || context.explicit ? {
			from: token ? token.from : context.pos,
			options,
			validFor
		} : null;
	};
}
/**
Wrap the given completion source so that it will only fire when the
cursor is in a syntax node with one of the given names.
*/
function ifIn(nodes, source) {
	return (context) => {
		for (let pos = syntaxTree(context.state).resolveInner(context.pos, -1); pos; pos = pos.parent) {
			if (nodes.indexOf(pos.name) > -1) return source(context);
			if (pos.type.isTop) break;
		}
		return null;
	};
}
/**
Wrap the given completion source so that it will not fire when the
cursor is in a syntax node with one of the given names.
*/
function ifNotIn(nodes, source) {
	return (context) => {
		for (let pos = syntaxTree(context.state).resolveInner(context.pos, -1); pos; pos = pos.parent) {
			if (nodes.indexOf(pos.name) > -1) return null;
			if (pos.type.isTop) break;
		}
		return source(context);
	};
}
var Option = class {
	constructor(completion, source, match, score) {
		this.completion = completion;
		this.source = source;
		this.match = match;
		this.score = score;
	}
};
function cur(state) {
	return state.selection.main.from;
}
function ensureAnchor(expr, start) {
	var _a;
	let { source } = expr;
	let addStart = start && source[0] != "^", addEnd = source[source.length - 1] != "$";
	if (!addStart && !addEnd) return expr;
	return new RegExp(`${addStart ? "^" : ""}(?:${source})${addEnd ? "$" : ""}`, (_a = expr.flags) !== null && _a !== void 0 ? _a : expr.ignoreCase ? "i" : "");
}
/**
This annotation is added to transactions that are produced by
picking a completion.
*/
var pickedCompletion = /* @__PURE__ */ Annotation.define();
/**
Helper function that returns a transaction spec which inserts a
completion's text in the main selection range, and any other
selection range that has the same text in front of it.
*/
function insertCompletionText(state, text, from, to) {
	let { main } = state.selection, fromOff = from - main.from, toOff = to - main.from;
	return {
		...state.changeByRange((range) => {
			if (range != main && from != to && state.sliceDoc(range.from + fromOff, range.from + toOff) != state.sliceDoc(from, to)) return { range };
			let lines = state.toText(text);
			return {
				changes: {
					from: range.from + fromOff,
					to: to == main.from ? range.to : range.from + toOff,
					insert: lines
				},
				range: EditorSelection.cursor(range.from + fromOff + lines.length)
			};
		}),
		scrollIntoView: true,
		userEvent: "input.complete"
	};
}
var SourceCache = /* @__PURE__ */ new WeakMap();
function asSource(source) {
	if (!Array.isArray(source)) return source;
	let known = SourceCache.get(source);
	if (!known) SourceCache.set(source, known = completeFromList(source));
	return known;
}
var startCompletionEffect = /* @__PURE__ */ StateEffect.define();
var closeCompletionEffect = /* @__PURE__ */ StateEffect.define();
var FuzzyMatcher = class {
	constructor(pattern) {
		this.pattern = pattern;
		this.chars = [];
		this.folded = [];
		this.any = [];
		this.precise = [];
		this.byWord = [];
		this.score = 0;
		this.matched = [];
		for (let p = 0; p < pattern.length;) {
			let char = codePointAt(pattern, p), size = codePointSize(char);
			this.chars.push(char);
			let part = pattern.slice(p, p + size), upper = part.toUpperCase();
			this.folded.push(codePointAt(upper == part ? part.toLowerCase() : upper, 0));
			p += size;
		}
		this.astral = pattern.length != this.chars.length;
	}
	ret(score, matched) {
		this.score = score;
		this.matched = matched;
		return this;
	}
	match(word) {
		if (this.pattern.length == 0) return this.ret(-100, []);
		if (word.length < this.pattern.length) return null;
		let { chars, folded, any, precise, byWord } = this;
		if (chars.length == 1) {
			let first = codePointAt(word, 0), firstSize = codePointSize(first);
			let score = firstSize == word.length ? 0 : -100;
			if (first == chars[0]);
			else if (first == folded[0]) score += -200;
			else return null;
			return this.ret(score, [0, firstSize]);
		}
		let direct = word.indexOf(this.pattern);
		if (direct == 0) return this.ret(word.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
		let len = chars.length, anyTo = 0;
		if (direct < 0) {
			for (let i = 0, e = Math.min(word.length, 200); i < e && anyTo < len;) {
				let next = codePointAt(word, i);
				if (next == chars[anyTo] || next == folded[anyTo]) any[anyTo++] = i;
				i += codePointSize(next);
			}
			if (anyTo < len) return null;
		}
		let preciseTo = 0;
		let byWordTo = 0, byWordFolded = false;
		let adjacentTo = 0, adjacentStart = -1, adjacentEnd = -1;
		let hasLower = /[a-z]/.test(word), wordAdjacent = true;
		for (let i = 0, e = Math.min(word.length, 200), prevType = 0; i < e && byWordTo < len;) {
			let next = codePointAt(word, i);
			if (direct < 0) {
				if (preciseTo < len && next == chars[preciseTo]) precise[preciseTo++] = i;
				if (adjacentTo < len) if (next == chars[adjacentTo] || next == folded[adjacentTo]) {
					if (adjacentTo == 0) adjacentStart = i;
					adjacentEnd = i + 1;
					adjacentTo++;
				} else adjacentTo = 0;
			}
			let ch, type = next < 255 ? next >= 48 && next <= 57 || next >= 97 && next <= 122 ? 2 : next >= 65 && next <= 90 ? 1 : 0 : (ch = fromCodePoint(next)) != ch.toLowerCase() ? 1 : ch != ch.toUpperCase() ? 2 : 0;
			if (!i || type == 1 && hasLower || prevType == 0 && type != 0) {
				if (chars[byWordTo] == next || folded[byWordTo] == next && (byWordFolded = true)) byWord[byWordTo++] = i;
				else if (byWord.length) wordAdjacent = false;
			}
			prevType = type;
			i += codePointSize(next);
		}
		if (byWordTo == len && byWord[0] == 0 && wordAdjacent) return this.result(-100 + (byWordFolded ? -200 : 0), byWord, word);
		if (adjacentTo == len && adjacentStart == 0) return this.ret(-200 - word.length + (adjacentEnd == word.length ? 0 : -100), [0, adjacentEnd]);
		if (direct > -1) return this.ret(-700 - word.length, [direct, direct + this.pattern.length]);
		if (adjacentTo == len) return this.ret(-900 - word.length, [adjacentStart, adjacentEnd]);
		if (byWordTo == len) return this.result(-100 + (byWordFolded ? -200 : 0) + -700 + (wordAdjacent ? 0 : -1100), byWord, word);
		return chars.length == 2 ? null : this.result((any[0] ? -700 : 0) + -200 + -1100, any, word);
	}
	result(score, positions, word) {
		let result = [], i = 0;
		for (let pos of positions) {
			let to = pos + (this.astral ? codePointSize(codePointAt(word, pos)) : 1);
			if (i && result[i - 1] == pos) result[i - 1] = to;
			else {
				result[i++] = pos;
				result[i++] = to;
			}
		}
		return this.ret(score - word.length, result);
	}
};
var StrictMatcher = class {
	constructor(pattern) {
		this.pattern = pattern;
		this.matched = [];
		this.score = 0;
		this.folded = pattern.toLowerCase();
	}
	match(word) {
		if (word.length < this.pattern.length) return null;
		let start = word.slice(0, this.pattern.length);
		let match = start == this.pattern ? 0 : start.toLowerCase() == this.folded ? -200 : null;
		if (match == null) return null;
		this.matched = [0, start.length];
		this.score = match + (word.length == this.pattern.length ? 0 : -100);
		return this;
	}
};
var completionConfig = /* @__PURE__ */ Facet.define({ combine(configs) {
	return combineConfig(configs, {
		activateOnTyping: true,
		activateOnCompletion: () => false,
		activateOnTypingDelay: 100,
		selectOnOpen: true,
		override: null,
		closeOnBlur: true,
		maxRenderedOptions: 100,
		defaultKeymap: true,
		tooltipClass: () => "",
		optionClass: () => "",
		aboveCursor: false,
		icons: true,
		addToOptions: [],
		positionInfo: defaultPositionInfo,
		filterStrict: false,
		compareCompletions: (a, b) => (a.sortText || a.label).localeCompare(b.sortText || b.label),
		interactionDelay: 75,
		updateSyncTime: 100
	}, {
		defaultKeymap: (a, b) => a && b,
		closeOnBlur: (a, b) => a && b,
		icons: (a, b) => a && b,
		tooltipClass: (a, b) => (c) => joinClass(a(c), b(c)),
		optionClass: (a, b) => (c) => joinClass(a(c), b(c)),
		addToOptions: (a, b) => a.concat(b),
		filterStrict: (a, b) => a || b
	});
} });
function joinClass(a, b) {
	return a ? b ? a + " " + b : a : b;
}
function defaultPositionInfo(view, list, option, info, space, tooltip) {
	let rtl = view.textDirection == Direction.RTL, left = rtl, narrow = false;
	let side = "top", offset, maxWidth;
	let spaceLeft = list.left - space.left, spaceRight = space.right - list.right;
	let infoWidth = info.right - info.left, infoHeight = info.bottom - info.top;
	if (left && spaceLeft < Math.min(infoWidth, spaceRight)) left = false;
	else if (!left && spaceRight < Math.min(infoWidth, spaceLeft)) left = true;
	if (infoWidth <= (left ? spaceLeft : spaceRight)) {
		offset = Math.max(space.top, Math.min(option.top, space.bottom - infoHeight)) - list.top;
		maxWidth = Math.min(400, left ? spaceLeft : spaceRight);
	} else {
		narrow = true;
		maxWidth = Math.min(400, (rtl ? list.right : space.right - list.left) - 30);
		let spaceBelow = space.bottom - list.bottom;
		if (spaceBelow >= infoHeight || spaceBelow > list.top) offset = option.bottom - list.top;
		else {
			side = "bottom";
			offset = list.bottom - option.top;
		}
	}
	let scaleY = (list.bottom - list.top) / tooltip.offsetHeight;
	let scaleX = (list.right - list.left) / tooltip.offsetWidth;
	return {
		style: `${side}: ${offset / scaleY}px; max-width: ${maxWidth / scaleX}px`,
		class: "cm-completionInfo-" + (narrow ? rtl ? "left-narrow" : "right-narrow" : left ? "left" : "right")
	};
}
function optionContent(config) {
	let content = config.addToOptions.slice();
	if (config.icons) content.push({
		render(completion) {
			let icon = document.createElement("div");
			icon.classList.add("cm-completionIcon");
			if (completion.type) icon.classList.add(...completion.type.split(/\s+/g).map((cls) => "cm-completionIcon-" + cls));
			icon.setAttribute("aria-hidden", "true");
			return icon;
		},
		position: 20
	});
	content.push({
		render(completion, _s, _v, match) {
			let labelElt = document.createElement("span");
			labelElt.className = "cm-completionLabel";
			let label = completion.displayLabel || completion.label, off = 0;
			for (let j = 0; j < match.length;) {
				let from = match[j++], to = match[j++];
				if (from > off) labelElt.appendChild(document.createTextNode(label.slice(off, from)));
				let span = labelElt.appendChild(document.createElement("span"));
				span.appendChild(document.createTextNode(label.slice(from, to)));
				span.className = "cm-completionMatchedText";
				off = to;
			}
			if (off < label.length) labelElt.appendChild(document.createTextNode(label.slice(off)));
			return labelElt;
		},
		position: 50
	}, {
		render(completion) {
			if (!completion.detail) return null;
			let detailElt = document.createElement("span");
			detailElt.className = "cm-completionDetail";
			detailElt.textContent = completion.detail;
			return detailElt;
		},
		position: 80
	});
	return content.sort((a, b) => a.position - b.position).map((a) => a.render);
}
function rangeAroundSelected(total, selected, max) {
	if (total <= max) return {
		from: 0,
		to: total
	};
	if (selected < 0) selected = 0;
	if (selected <= total >> 1) {
		let off = Math.floor(selected / max);
		return {
			from: off * max,
			to: (off + 1) * max
		};
	}
	let off = Math.floor((total - selected) / max);
	return {
		from: total - (off + 1) * max,
		to: total - off * max
	};
}
var CompletionTooltip = class {
	constructor(view, stateField, applyCompletion) {
		this.view = view;
		this.stateField = stateField;
		this.applyCompletion = applyCompletion;
		this.info = null;
		this.infoDestroy = null;
		this.placeInfoReq = {
			read: () => this.measureInfo(),
			write: (pos) => this.placeInfo(pos),
			key: this
		};
		this.space = null;
		this.currentClass = "";
		let cState = view.state.field(stateField);
		let { options, selected } = cState.open;
		let config = view.state.facet(completionConfig);
		this.optionContent = optionContent(config);
		this.optionClass = config.optionClass;
		this.tooltipClass = config.tooltipClass;
		this.range = rangeAroundSelected(options.length, selected, config.maxRenderedOptions);
		this.dom = document.createElement("div");
		this.dom.className = "cm-tooltip-autocomplete";
		this.updateTooltipClass(view.state);
		this.dom.addEventListener("mousedown", (e) => {
			let { options } = view.state.field(stateField).open;
			for (let dom = e.target, match; dom && dom != this.dom; dom = dom.parentNode) if (dom.nodeName == "LI" && (match = /-(\d+)$/.exec(dom.id)) && +match[1] < options.length) {
				this.applyCompletion(view, options[+match[1]]);
				e.preventDefault();
				return;
			}
		});
		this.dom.addEventListener("focusout", (e) => {
			let state = view.state.field(this.stateField, false);
			if (state && state.tooltip && view.state.facet(completionConfig).closeOnBlur && e.relatedTarget != view.contentDOM) view.dispatch({ effects: closeCompletionEffect.of(null) });
		});
		this.showOptions(options, cState.id);
	}
	mount() {
		this.updateSel();
	}
	showOptions(options, id) {
		if (this.list) this.list.remove();
		this.list = this.dom.appendChild(this.createListBox(options, id, this.range));
		this.list.addEventListener("scroll", () => {
			if (this.info) this.view.requestMeasure(this.placeInfoReq);
		});
	}
	update(update) {
		var _a;
		let cState = update.state.field(this.stateField);
		let prevState = update.startState.field(this.stateField);
		this.updateTooltipClass(update.state);
		if (cState != prevState) {
			let { options, selected, disabled } = cState.open;
			if (!prevState.open || prevState.open.options != options) {
				this.range = rangeAroundSelected(options.length, selected, update.state.facet(completionConfig).maxRenderedOptions);
				this.showOptions(options, cState.id);
			}
			this.updateSel();
			if (disabled != ((_a = prevState.open) === null || _a === void 0 ? void 0 : _a.disabled)) this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!disabled);
		}
	}
	updateTooltipClass(state) {
		let cls = this.tooltipClass(state);
		if (cls != this.currentClass) {
			for (let c of this.currentClass.split(" ")) if (c) this.dom.classList.remove(c);
			for (let c of cls.split(" ")) if (c) this.dom.classList.add(c);
			this.currentClass = cls;
		}
	}
	positioned(space) {
		this.space = space;
		if (this.info) this.view.requestMeasure(this.placeInfoReq);
	}
	updateSel() {
		let cState = this.view.state.field(this.stateField), open = cState.open;
		if (open.selected > -1 && open.selected < this.range.from || open.selected >= this.range.to) {
			this.range = rangeAroundSelected(open.options.length, open.selected, this.view.state.facet(completionConfig).maxRenderedOptions);
			this.showOptions(open.options, cState.id);
		}
		let newSel = this.updateSelectedOption(open.selected);
		if (newSel) {
			this.destroyInfo();
			let { completion } = open.options[open.selected];
			let { info } = completion;
			if (!info) return;
			let infoResult = typeof info === "string" ? document.createTextNode(info) : info(completion);
			if (!infoResult) return;
			if ("then" in infoResult) infoResult.then((obj) => {
				if (obj && this.view.state.field(this.stateField, false) == cState) this.addInfoPane(obj, completion);
			}).catch((e) => logException(this.view.state, e, "completion info"));
			else {
				this.addInfoPane(infoResult, completion);
				newSel.setAttribute("aria-describedby", this.info.id);
			}
		}
	}
	addInfoPane(content, completion) {
		this.destroyInfo();
		let wrap = this.info = document.createElement("div");
		wrap.className = "cm-tooltip cm-completionInfo";
		wrap.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16);
		if (content.nodeType != null) {
			wrap.appendChild(content);
			this.infoDestroy = null;
		} else {
			let { dom, destroy } = content;
			wrap.appendChild(dom);
			this.infoDestroy = destroy || null;
		}
		this.dom.appendChild(wrap);
		this.view.requestMeasure(this.placeInfoReq);
	}
	updateSelectedOption(selected) {
		let set = null;
		for (let opt = this.list.firstChild, i = this.range.from; opt; opt = opt.nextSibling, i++) if (opt.nodeName != "LI" || !opt.id) i--;
		else if (i == selected) {
			if (!opt.hasAttribute("aria-selected")) {
				opt.setAttribute("aria-selected", "true");
				set = opt;
			}
		} else if (opt.hasAttribute("aria-selected")) {
			opt.removeAttribute("aria-selected");
			opt.removeAttribute("aria-describedby");
		}
		if (set) scrollIntoView(this.list, set);
		return set;
	}
	measureInfo() {
		let sel = this.dom.querySelector("[aria-selected]");
		if (!sel || !this.info) return null;
		let listRect = this.dom.getBoundingClientRect();
		let infoRect = this.info.getBoundingClientRect();
		let selRect = sel.getBoundingClientRect();
		let space = this.space;
		if (!space) {
			let docElt = this.dom.ownerDocument.documentElement;
			space = {
				left: 0,
				top: 0,
				right: docElt.clientWidth,
				bottom: docElt.clientHeight
			};
		}
		if (selRect.top > Math.min(space.bottom, listRect.bottom) - 10 || selRect.bottom < Math.max(space.top, listRect.top) + 10) return null;
		return this.view.state.facet(completionConfig).positionInfo(this.view, listRect, selRect, infoRect, space, this.dom);
	}
	placeInfo(pos) {
		if (this.info) if (pos) {
			if (pos.style) this.info.style.cssText = pos.style;
			this.info.className = "cm-tooltip cm-completionInfo " + (pos.class || "");
		} else this.info.style.cssText = "top: -1e6px";
	}
	createListBox(options, id, range) {
		const ul = document.createElement("ul");
		ul.id = id;
		ul.setAttribute("role", "listbox");
		ul.setAttribute("aria-expanded", "true");
		ul.setAttribute("aria-label", this.view.state.phrase("Completions"));
		ul.addEventListener("mousedown", (e) => {
			if (e.target == ul) e.preventDefault();
		});
		let curSection = null;
		for (let i = range.from; i < range.to; i++) {
			let { completion, match } = options[i], { section } = completion;
			if (section) {
				let name = typeof section == "string" ? section : section.name;
				if (name != curSection && (i > range.from || range.from == 0)) {
					curSection = name;
					if (typeof section != "string" && section.header) ul.appendChild(section.header(section));
					else {
						let header = ul.appendChild(document.createElement("completion-section"));
						header.textContent = name;
					}
				}
			}
			const li = ul.appendChild(document.createElement("li"));
			li.id = id + "-" + i;
			li.setAttribute("role", "option");
			let cls = this.optionClass(completion);
			if (cls) li.className = cls;
			for (let source of this.optionContent) {
				let node = source(completion, this.view.state, this.view, match);
				if (node) li.appendChild(node);
			}
		}
		if (range.from) ul.classList.add("cm-completionListIncompleteTop");
		if (range.to < options.length) ul.classList.add("cm-completionListIncompleteBottom");
		return ul;
	}
	destroyInfo() {
		if (this.info) {
			if (this.infoDestroy) this.infoDestroy();
			this.info.remove();
			this.info = null;
		}
	}
	destroy() {
		this.destroyInfo();
	}
};
function completionTooltip(stateField, applyCompletion) {
	return (view) => new CompletionTooltip(view, stateField, applyCompletion);
}
function scrollIntoView(container, element) {
	let parent = container.getBoundingClientRect();
	let self = element.getBoundingClientRect();
	let scaleY = parent.height / container.offsetHeight;
	if (self.top < parent.top) container.scrollTop -= (parent.top - self.top) / scaleY;
	else if (self.bottom > parent.bottom) container.scrollTop += (self.bottom - parent.bottom) / scaleY;
}
function score(option) {
	return (option.boost || 0) * 100 + (option.apply ? 10 : 0) + (option.info ? 5 : 0) + (option.type ? 1 : 0);
}
function sortOptions(active, state) {
	let options = [];
	let sections = null, dynamicSectionScore = null;
	let addOption = (option) => {
		options.push(option);
		let { section } = option.completion;
		if (section) {
			if (!sections) sections = [];
			let name = typeof section == "string" ? section : section.name;
			if (!sections.some((s) => s.name == name)) sections.push(typeof section == "string" ? { name } : section);
		}
	};
	let conf = state.facet(completionConfig);
	for (let a of active) if (a.hasResult()) {
		let getMatch = a.result.getMatch;
		if (a.result.filter === false) for (let option of a.result.options) addOption(new Option(option, a.source, getMatch ? getMatch(option) : [], 1e9 - options.length));
		else {
			let pattern = state.sliceDoc(a.from, a.to), match;
			let matcher = conf.filterStrict ? new StrictMatcher(pattern) : new FuzzyMatcher(pattern);
			for (let option of a.result.options) if (match = matcher.match(option.label)) {
				let matched = !option.displayLabel ? match.matched : getMatch ? getMatch(option, match.matched) : [];
				let score = match.score + (option.boost || 0);
				addOption(new Option(option, a.source, matched, score));
				if (typeof option.section == "object" && option.section.rank === "dynamic") {
					let { name } = option.section;
					if (!dynamicSectionScore) dynamicSectionScore = Object.create(null);
					dynamicSectionScore[name] = Math.max(score, dynamicSectionScore[name] || -1e9);
				}
			}
		}
	}
	if (sections) {
		let sectionOrder = Object.create(null), pos = 0;
		let cmp = (a, b) => {
			return (a.rank === "dynamic" && b.rank === "dynamic" ? dynamicSectionScore[b.name] - dynamicSectionScore[a.name] : 0) || (typeof a.rank == "number" ? a.rank : 1e9) - (typeof b.rank == "number" ? b.rank : 1e9) || (a.name < b.name ? -1 : 1);
		};
		for (let s of sections.sort(cmp)) {
			pos -= 1e5;
			sectionOrder[s.name] = pos;
		}
		for (let option of options) {
			let { section } = option.completion;
			if (section) option.score += sectionOrder[typeof section == "string" ? section : section.name];
		}
	}
	let result = [], prev = null;
	let compare = conf.compareCompletions;
	for (let opt of options.sort((a, b) => b.score - a.score || compare(a.completion, b.completion))) {
		let cur = opt.completion;
		if (!prev || prev.label != cur.label || prev.detail != cur.detail || prev.type != null && cur.type != null && prev.type != cur.type || prev.apply != cur.apply || prev.boost != cur.boost) result.push(opt);
		else if (score(opt.completion) > score(prev)) result[result.length - 1] = opt;
		prev = opt.completion;
	}
	return result;
}
var CompletionDialog = class CompletionDialog {
	constructor(options, attrs, tooltip, timestamp, selected, disabled) {
		this.options = options;
		this.attrs = attrs;
		this.tooltip = tooltip;
		this.timestamp = timestamp;
		this.selected = selected;
		this.disabled = disabled;
	}
	setSelected(selected, id) {
		return selected == this.selected || selected >= this.options.length ? this : new CompletionDialog(this.options, makeAttrs(id, selected), this.tooltip, this.timestamp, selected, this.disabled);
	}
	static build(active, state, id, prev, conf, didSetActive) {
		if (prev && !didSetActive && active.some((s) => s.isPending)) return prev.setDisabled();
		let options = sortOptions(active, state);
		if (!options.length) return prev && active.some((a) => a.isPending) ? prev.setDisabled() : null;
		let selected = state.facet(completionConfig).selectOnOpen ? 0 : -1;
		if (prev && prev.selected != selected && prev.selected != -1) {
			let selectedValue = prev.options[prev.selected].completion;
			for (let i = 0; i < options.length; i++) if (options[i].completion == selectedValue) {
				selected = i;
				break;
			}
		}
		return new CompletionDialog(options, makeAttrs(id, selected), {
			pos: active.reduce((a, b) => b.hasResult() ? Math.min(a, b.from) : a, 1e8),
			create: createTooltip,
			above: conf.aboveCursor
		}, prev ? prev.timestamp : Date.now(), selected, false);
	}
	map(changes) {
		return new CompletionDialog(this.options, this.attrs, {
			...this.tooltip,
			pos: changes.mapPos(this.tooltip.pos)
		}, this.timestamp, this.selected, this.disabled);
	}
	setDisabled() {
		return new CompletionDialog(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
	}
};
var CompletionState = class CompletionState {
	constructor(active, id, open) {
		this.active = active;
		this.id = id;
		this.open = open;
	}
	static start() {
		return new CompletionState(none, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
	}
	update(tr) {
		let { state } = tr, conf = state.facet(completionConfig);
		let active = (conf.override || state.languageDataAt("autocomplete", cur(state)).map(asSource)).map((source) => {
			return (this.active.find((s) => s.source == source) || new ActiveSource(source, this.active.some((a) => a.state != 0) ? 1 : 0)).update(tr, conf);
		});
		if (active.length == this.active.length && active.every((a, i) => a == this.active[i])) active = this.active;
		let open = this.open, didSet = tr.effects.some((e) => e.is(setActiveEffect));
		if (open && tr.docChanged) open = open.map(tr.changes);
		if (tr.selection || active.some((a) => a.hasResult() && tr.changes.touchesRange(a.from, a.to)) || !sameResults(active, this.active) || didSet) open = CompletionDialog.build(active, state, this.id, open, conf, didSet);
		else if (open && open.disabled && !active.some((a) => a.isPending)) open = null;
		if (!open && active.every((a) => !a.isPending) && active.some((a) => a.hasResult())) active = active.map((a) => a.hasResult() ? new ActiveSource(a.source, 0) : a);
		for (let effect of tr.effects) if (effect.is(setSelectedEffect)) open = open && open.setSelected(effect.value, this.id);
		return active == this.active && open == this.open ? this : new CompletionState(active, this.id, open);
	}
	get tooltip() {
		return this.open ? this.open.tooltip : null;
	}
	get attrs() {
		return this.open ? this.open.attrs : this.active.length ? baseAttrs : noAttrs;
	}
};
function sameResults(a, b) {
	if (a == b) return true;
	for (let iA = 0, iB = 0;;) {
		while (iA < a.length && !a[iA].hasResult()) iA++;
		while (iB < b.length && !b[iB].hasResult()) iB++;
		let endA = iA == a.length, endB = iB == b.length;
		if (endA || endB) return endA == endB;
		if (a[iA++].result != b[iB++].result) return false;
	}
}
var baseAttrs = { "aria-autocomplete": "list" };
var noAttrs = {};
function makeAttrs(id, selected) {
	let result = {
		"aria-autocomplete": "list",
		"aria-haspopup": "listbox",
		"aria-controls": id
	};
	if (selected > -1) result["aria-activedescendant"] = id + "-" + selected;
	return result;
}
var none = [];
function getUpdateType(tr, conf) {
	if (tr.isUserEvent("input.complete")) {
		let completion = tr.annotation(pickedCompletion);
		if (completion && conf.activateOnCompletion(completion)) return 12;
	}
	let typing = tr.isUserEvent("input.type");
	return typing && conf.activateOnTyping ? 5 : typing ? 1 : tr.isUserEvent("delete.backward") ? 2 : tr.selection ? 8 : tr.docChanged ? 16 : 0;
}
var ActiveSource = class ActiveSource {
	constructor(source, state, explicit = false) {
		this.source = source;
		this.state = state;
		this.explicit = explicit;
	}
	hasResult() {
		return false;
	}
	get isPending() {
		return this.state == 1;
	}
	update(tr, conf) {
		let type = getUpdateType(tr, conf), value = this;
		if (type & 8 || type & 16 && this.touches(tr)) value = new ActiveSource(value.source, 0);
		if (type & 4 && value.state == 0) value = new ActiveSource(this.source, 1);
		value = value.updateFor(tr, type);
		for (let effect of tr.effects) if (effect.is(startCompletionEffect)) value = new ActiveSource(value.source, 1, effect.value);
		else if (effect.is(closeCompletionEffect)) value = new ActiveSource(value.source, 0);
		else if (effect.is(setActiveEffect)) {
			for (let active of effect.value) if (active.source == value.source) value = active;
		}
		return value;
	}
	updateFor(tr, type) {
		return this.map(tr.changes);
	}
	map(changes) {
		return this;
	}
	touches(tr) {
		return tr.changes.touchesRange(cur(tr.state));
	}
};
var ActiveResult = class ActiveResult extends ActiveSource {
	constructor(source, explicit, limit, result, from, to) {
		super(source, 3, explicit);
		this.limit = limit;
		this.result = result;
		this.from = from;
		this.to = to;
	}
	hasResult() {
		return true;
	}
	updateFor(tr, type) {
		var _a;
		if (!(type & 3)) return this.map(tr.changes);
		let result = this.result;
		if (result.map && !tr.changes.empty) result = result.map(result, tr.changes);
		let from = tr.changes.mapPos(this.from), to = tr.changes.mapPos(this.to, 1);
		let pos = cur(tr.state);
		if (pos > to || !result || type & 2 && (cur(tr.startState) == this.from || pos < this.limit)) return new ActiveSource(this.source, type & 4 ? 1 : 0);
		let limit = tr.changes.mapPos(this.limit);
		if (checkValid(result.validFor, tr.state, from, to)) return new ActiveResult(this.source, this.explicit, limit, result, from, to);
		if (result.update && (result = result.update(result, from, to, new CompletionContext(tr.state, pos, false)))) return new ActiveResult(this.source, this.explicit, limit, result, result.from, (_a = result.to) !== null && _a !== void 0 ? _a : cur(tr.state));
		return new ActiveSource(this.source, 1, this.explicit);
	}
	map(mapping) {
		if (mapping.empty) return this;
		if (!(this.result.map ? this.result.map(this.result, mapping) : this.result)) return new ActiveSource(this.source, 0);
		return new ActiveResult(this.source, this.explicit, mapping.mapPos(this.limit), this.result, mapping.mapPos(this.from), mapping.mapPos(this.to, 1));
	}
	touches(tr) {
		return tr.changes.touchesRange(this.from, this.to);
	}
};
function checkValid(validFor, state, from, to) {
	if (!validFor) return false;
	let text = state.sliceDoc(from, to);
	return typeof validFor == "function" ? validFor(text, from, to, state) : ensureAnchor(validFor, true).test(text);
}
var setActiveEffect = /* @__PURE__ */ StateEffect.define({ map(sources, mapping) {
	return sources.map((s) => s.map(mapping));
} });
var setSelectedEffect = /* @__PURE__ */ StateEffect.define();
var completionState = /* @__PURE__ */ StateField.define({
	create() {
		return CompletionState.start();
	},
	update(value, tr) {
		return value.update(tr);
	},
	provide: (f) => [showTooltip.from(f, (val) => val.tooltip), EditorView.contentAttributes.from(f, (state) => state.attrs)]
});
function applyCompletion(view, option) {
	const apply = option.completion.apply || option.completion.label;
	let result = view.state.field(completionState).active.find((a) => a.source == option.source);
	if (!(result instanceof ActiveResult)) return false;
	if (typeof apply == "string") view.dispatch({
		...insertCompletionText(view.state, apply, result.from, result.to),
		annotations: pickedCompletion.of(option.completion)
	});
	else apply(view, option.completion, result.from, result.to);
	return true;
}
var createTooltip = /* @__PURE__ */ completionTooltip(completionState, applyCompletion);
/**
Returns a command that moves the completion selection forward or
backward by the given amount.
*/
function moveCompletionSelection(forward, by = "option") {
	return (view) => {
		let cState = view.state.field(completionState, false);
		if (!cState || !cState.open || cState.open.disabled || Date.now() - cState.open.timestamp < view.state.facet(completionConfig).interactionDelay) return false;
		let step = 1, tooltip;
		if (by == "page" && (tooltip = getTooltip(view, cState.open.tooltip))) step = Math.max(2, Math.floor(tooltip.dom.offsetHeight / tooltip.dom.querySelector("li").offsetHeight) - 1);
		let { length } = cState.open.options;
		let selected = cState.open.selected > -1 ? cState.open.selected + step * (forward ? 1 : -1) : forward ? 0 : length - 1;
		if (selected < 0) selected = by == "page" ? 0 : length - 1;
		else if (selected >= length) selected = by == "page" ? length - 1 : 0;
		view.dispatch({ effects: setSelectedEffect.of(selected) });
		return true;
	};
}
/**
Accept the current completion.
*/
var acceptCompletion = (view) => {
	let cState = view.state.field(completionState, false);
	if (view.state.readOnly || !cState || !cState.open || cState.open.selected < 0 || cState.open.disabled || Date.now() - cState.open.timestamp < view.state.facet(completionConfig).interactionDelay) return false;
	return applyCompletion(view, cState.open.options[cState.open.selected]);
};
/**
Explicitly start autocompletion.
*/
var startCompletion = (view) => {
	if (!view.state.field(completionState, false)) return false;
	view.dispatch({ effects: startCompletionEffect.of(true) });
	return true;
};
/**
Close the currently active completion.
*/
var closeCompletion = (view) => {
	let cState = view.state.field(completionState, false);
	if (!cState || !cState.active.some((a) => a.state != 0)) return false;
	view.dispatch({ effects: closeCompletionEffect.of(null) });
	return true;
};
var RunningQuery = class {
	constructor(active, context) {
		this.active = active;
		this.context = context;
		this.time = Date.now();
		this.updates = [];
		this.done = void 0;
	}
};
var MaxUpdateCount = 50, MinAbortTime = 1e3;
var completionPlugin = /* @__PURE__ */ ViewPlugin.fromClass(class {
	constructor(view) {
		this.view = view;
		this.debounceUpdate = -1;
		this.running = [];
		this.debounceAccept = -1;
		this.pendingStart = false;
		this.composing = 0;
		for (let active of view.state.field(completionState).active) if (active.isPending) this.startQuery(active);
	}
	update(update) {
		let cState = update.state.field(completionState);
		let conf = update.state.facet(completionConfig);
		if (!update.selectionSet && !update.docChanged && update.startState.field(completionState) == cState) return;
		let doesReset = update.transactions.some((tr) => {
			let type = getUpdateType(tr, conf);
			return type & 8 || (tr.selection || tr.docChanged) && !(type & 3);
		});
		for (let i = 0; i < this.running.length; i++) {
			let query = this.running[i];
			if (doesReset || query.context.abortOnDocChange && update.docChanged || query.updates.length + update.transactions.length > MaxUpdateCount && Date.now() - query.time > MinAbortTime) {
				for (let handler of query.context.abortListeners) try {
					handler();
				} catch (e) {
					logException(this.view.state, e);
				}
				query.context.abortListeners = null;
				this.running.splice(i--, 1);
			} else query.updates.push(...update.transactions);
		}
		if (this.debounceUpdate > -1) clearTimeout(this.debounceUpdate);
		if (update.transactions.some((tr) => tr.effects.some((e) => e.is(startCompletionEffect)))) this.pendingStart = true;
		let delay = this.pendingStart ? 50 : conf.activateOnTypingDelay;
		this.debounceUpdate = cState.active.some((a) => a.isPending && !this.running.some((q) => q.active.source == a.source)) ? setTimeout(() => this.startUpdate(), delay) : -1;
		if (this.composing != 0) {
			for (let tr of update.transactions) if (tr.isUserEvent("input.type")) this.composing = 2;
			else if (this.composing == 2 && tr.selection) this.composing = 3;
		}
	}
	startUpdate() {
		this.debounceUpdate = -1;
		this.pendingStart = false;
		let { state } = this.view, cState = state.field(completionState);
		for (let active of cState.active) if (active.isPending && !this.running.some((r) => r.active.source == active.source)) this.startQuery(active);
		if (this.running.length && cState.open && cState.open.disabled) this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(completionConfig).updateSyncTime);
	}
	startQuery(active) {
		let { state } = this.view;
		let context = new CompletionContext(state, cur(state), active.explicit, this.view);
		let pending = new RunningQuery(active, context);
		this.running.push(pending);
		Promise.resolve(active.source(context)).then((result) => {
			if (!pending.context.aborted) {
				pending.done = result || null;
				this.scheduleAccept();
			}
		}, (err) => {
			this.view.dispatch({ effects: closeCompletionEffect.of(null) });
			logException(this.view.state, err);
		});
	}
	scheduleAccept() {
		if (this.running.every((q) => q.done !== void 0)) this.accept();
		else if (this.debounceAccept < 0) this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(completionConfig).updateSyncTime);
	}
	accept() {
		var _a;
		if (this.debounceAccept > -1) clearTimeout(this.debounceAccept);
		this.debounceAccept = -1;
		let updated = [];
		let conf = this.view.state.facet(completionConfig), cState = this.view.state.field(completionState);
		for (let i = 0; i < this.running.length; i++) {
			let query = this.running[i];
			if (query.done === void 0) continue;
			this.running.splice(i--, 1);
			if (query.done) {
				let pos = cur(query.updates.length ? query.updates[0].startState : this.view.state);
				let limit = Math.min(pos, query.done.from + (query.active.explicit ? 0 : 1));
				let active = new ActiveResult(query.active.source, query.active.explicit, limit, query.done, query.done.from, (_a = query.done.to) !== null && _a !== void 0 ? _a : pos);
				for (let tr of query.updates) active = active.update(tr, conf);
				if (active.hasResult()) {
					updated.push(active);
					continue;
				}
			}
			let current = cState.active.find((a) => a.source == query.active.source);
			if (current && current.isPending) if (query.done == null) {
				let active = new ActiveSource(query.active.source, 0);
				for (let tr of query.updates) active = active.update(tr, conf);
				if (!active.isPending) updated.push(active);
			} else this.startQuery(current);
		}
		if (updated.length || cState.open && cState.open.disabled) this.view.dispatch({ effects: setActiveEffect.of(updated) });
	}
}, { eventHandlers: {
	blur(event) {
		let state = this.view.state.field(completionState, false);
		if (state && state.tooltip && this.view.state.facet(completionConfig).closeOnBlur) {
			let dialog = state.open && getTooltip(this.view, state.open.tooltip);
			if (!dialog || !dialog.dom.contains(event.relatedTarget)) setTimeout(() => this.view.dispatch({ effects: closeCompletionEffect.of(null) }), 10);
		}
	},
	compositionstart() {
		this.composing = 1;
	},
	compositionend() {
		if (this.composing == 3) setTimeout(() => this.view.dispatch({ effects: startCompletionEffect.of(false) }), 20);
		this.composing = 0;
	}
} });
var windows = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform);
var commitCharacters = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ EditorView.domEventHandlers({ keydown(event, view) {
	let field = view.state.field(completionState, false);
	if (!field || !field.open || field.open.disabled || field.open.selected < 0 || event.key.length > 1 || event.ctrlKey && !(windows && event.altKey) || event.metaKey) return false;
	let option = field.open.options[field.open.selected];
	let result = field.active.find((a) => a.source == option.source);
	let commitChars = option.completion.commitCharacters || result.result.commitCharacters;
	if (commitChars && commitChars.indexOf(event.key) > -1) applyCompletion(view, option);
	return false;
} }));
var baseTheme = /* @__PURE__ */ EditorView.baseTheme({
	".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": {
		fontFamily: "monospace",
		whiteSpace: "nowrap",
		overflow: "hidden auto",
		maxWidth_fallback: "700px",
		maxWidth: "min(700px, 95vw)",
		minWidth: "250px",
		maxHeight: "10em",
		height: "100%",
		listStyle: "none",
		margin: 0,
		padding: 0,
		"& > li, & > completion-section": {
			padding: "1px 3px",
			lineHeight: 1.2
		},
		"& > li": {
			overflowX: "hidden",
			textOverflow: "ellipsis",
			cursor: "pointer"
		},
		"& > completion-section": {
			display: "list-item",
			borderBottom: "1px solid silver",
			paddingLeft: "0.5em",
			opacity: .7
		}
	} },
	"&light .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#17c",
		color: "white"
	},
	"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" },
	"&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#347",
		color: "white"
	},
	"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" },
	".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
		content: "\"···\"",
		opacity: .5,
		display: "block",
		textAlign: "center"
	},
	".cm-tooltip.cm-completionInfo": {
		position: "absolute",
		padding: "3px 9px",
		width: "max-content",
		maxWidth: `400px`,
		boxSizing: "border-box",
		whiteSpace: "pre-line"
	},
	".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
	".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
	".cm-completionInfo.cm-completionInfo-left-narrow": { right: `30px` },
	".cm-completionInfo.cm-completionInfo-right-narrow": { left: `30px` },
	"&light .cm-snippetField": { backgroundColor: "#00000022" },
	"&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
	".cm-snippetFieldPosition": {
		verticalAlign: "text-top",
		width: 0,
		height: "1.15em",
		display: "inline-block",
		margin: "0 -0.7px -.7em",
		borderLeft: "1.4px dotted #888"
	},
	".cm-completionMatchedText": { textDecoration: "underline" },
	".cm-completionDetail": {
		marginLeft: "0.5em",
		fontStyle: "italic"
	},
	".cm-completionIcon": {
		fontSize: "90%",
		width: ".8em",
		display: "inline-block",
		textAlign: "center",
		paddingRight: ".6em",
		opacity: "0.6",
		boxSizing: "content-box"
	},
	".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } },
	".cm-completionIcon-class": { "&:after": { content: "'○'" } },
	".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
	".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
	".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
	".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
	".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
	".cm-completionIcon-property": { "&:after": { content: "'□'" } },
	".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
	".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
	".cm-completionIcon-text": { "&:after": {
		content: "'abc'",
		fontSize: "50%",
		verticalAlign: "middle"
	} }
});
var FieldPos = class {
	constructor(field, line, from, to) {
		this.field = field;
		this.line = line;
		this.from = from;
		this.to = to;
	}
};
var FieldRange = class FieldRange {
	constructor(field, from, to) {
		this.field = field;
		this.from = from;
		this.to = to;
	}
	map(changes) {
		let from = changes.mapPos(this.from, -1, MapMode.TrackDel);
		let to = changes.mapPos(this.to, 1, MapMode.TrackDel);
		return from == null || to == null ? null : new FieldRange(this.field, from, to);
	}
};
var Snippet = class Snippet {
	constructor(lines, fieldPositions) {
		this.lines = lines;
		this.fieldPositions = fieldPositions;
	}
	instantiate(state, pos) {
		let text = [], lineStart = [pos];
		let lineObj = state.doc.lineAt(pos), baseIndent = /^\s*/.exec(lineObj.text)[0];
		for (let line of this.lines) {
			if (text.length) {
				let indent = baseIndent, tabs = /^\t*/.exec(line)[0].length;
				for (let i = 0; i < tabs; i++) indent += state.facet(indentUnit);
				lineStart.push(pos + indent.length - tabs);
				line = indent + line.slice(tabs);
			}
			text.push(line);
			pos += line.length + 1;
		}
		return {
			text,
			ranges: this.fieldPositions.map((pos) => new FieldRange(pos.field, lineStart[pos.line] + pos.from, lineStart[pos.line] + pos.to))
		};
	}
	static parse(template) {
		let fields = [];
		let lines = [], positions = [], m;
		for (let line of template.split(/\r\n?|\n/)) {
			while (m = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(line)) {
				let seq = m[1] ? +m[1] : null, rawName = m[2] || m[3] || "", found = -1;
				let name = rawName.replace(/\\[{}]/g, (m) => m[1]);
				for (let i = 0; i < fields.length; i++) if (seq != null ? fields[i].seq == seq : name ? fields[i].name == name : false) found = i;
				if (found < 0) {
					let i = 0;
					while (i < fields.length && (seq == null || fields[i].seq != null && fields[i].seq < seq)) i++;
					fields.splice(i, 0, {
						seq,
						name
					});
					found = i;
					for (let pos of positions) if (pos.field >= found) pos.field++;
				}
				for (let pos of positions) if (pos.line == lines.length && pos.from > m.index) {
					let snip = m[2] ? 3 + (m[1] || "").length : 2;
					pos.from -= snip;
					pos.to -= snip;
				}
				positions.push(new FieldPos(found, lines.length, m.index, m.index + name.length));
				line = line.slice(0, m.index) + rawName + line.slice(m.index + m[0].length);
			}
			line = line.replace(/\\([{}])/g, (_, brace, index) => {
				for (let pos of positions) if (pos.line == lines.length && pos.from > index) {
					pos.from--;
					pos.to--;
				}
				return brace;
			});
			lines.push(line);
		}
		return new Snippet(lines, positions);
	}
};
var fieldMarker = /* @__PURE__ */ Decoration.widget({ widget: /* @__PURE__ */ new class extends WidgetType {
	toDOM() {
		let span = document.createElement("span");
		span.className = "cm-snippetFieldPosition";
		return span;
	}
	ignoreEvent() {
		return false;
	}
}() });
var fieldRange = /* @__PURE__ */ Decoration.mark({ class: "cm-snippetField" });
var ActiveSnippet = class ActiveSnippet {
	constructor(ranges, active) {
		this.ranges = ranges;
		this.active = active;
		this.deco = Decoration.set(ranges.map((r) => (r.from == r.to ? fieldMarker : fieldRange).range(r.from, r.to)), true);
	}
	map(changes) {
		let ranges = [];
		for (let r of this.ranges) {
			let mapped = r.map(changes);
			if (!mapped) return null;
			ranges.push(mapped);
		}
		return new ActiveSnippet(ranges, this.active);
	}
	selectionInsideField(sel) {
		return sel.ranges.every((range) => this.ranges.some((r) => r.field == this.active && r.from <= range.from && r.to >= range.to));
	}
};
var setActive = /* @__PURE__ */ StateEffect.define({ map(value, changes) {
	return value && value.map(changes);
} });
var moveToField = /* @__PURE__ */ StateEffect.define();
var snippetState = /* @__PURE__ */ StateField.define({
	create() {
		return null;
	},
	update(value, tr) {
		for (let effect of tr.effects) {
			if (effect.is(setActive)) return effect.value;
			if (effect.is(moveToField) && value) return new ActiveSnippet(value.ranges, effect.value);
		}
		if (value && tr.docChanged) value = value.map(tr.changes);
		if (value && tr.selection && !value.selectionInsideField(tr.selection)) value = null;
		return value;
	},
	provide: (f) => EditorView.decorations.from(f, (val) => val ? val.deco : Decoration.none)
});
function fieldSelection(ranges, field) {
	return EditorSelection.create(ranges.filter((r) => r.field == field).map((r) => EditorSelection.range(r.from, r.to)));
}
/**
Convert a snippet template to a function that can
[apply](https://codemirror.net/6/docs/ref/#autocomplete.Completion.apply) it. Snippets are written
using syntax like this:

"for (let ${index} = 0; ${index} < ${end}; ${index}++) {\n\t${}\n}"

Each `${}` placeholder (you may also use `#{}`) indicates a field
that the user can fill in. Its name, if any, will be the default
content for the field.

When the snippet is activated by calling the returned function,
the code is inserted at the given position. Newlines in the
template are indented by the indentation of the start line, plus
one [indent unit](https://codemirror.net/6/docs/ref/#language.indentUnit) per tab character after
the newline.

On activation, (all instances of) the first field are selected.
The user can move between fields with Tab and Shift-Tab as long as
the fields are active. Moving to the last field or moving the
cursor out of the current field deactivates the fields.

The order of fields defaults to textual order, but you can add
numbers to placeholders (`${1}` or `${1:defaultText}`) to provide
a custom order.

To include a literal `{` or `}` in your template, put a backslash
in front of it. This will be removed and the brace will not be
interpreted as indicating a placeholder.
*/
function snippet(template) {
	let snippet = Snippet.parse(template);
	return (editor, completion, from, to) => {
		let { text, ranges } = snippet.instantiate(editor.state, from);
		let { main } = editor.state.selection;
		let spec = {
			changes: {
				from,
				to: to == main.from ? main.to : to,
				insert: Text.of(text)
			},
			scrollIntoView: true,
			annotations: completion ? [pickedCompletion.of(completion), Transaction.userEvent.of("input.complete")] : void 0
		};
		if (ranges.length) spec.selection = fieldSelection(ranges, 0);
		if (ranges.some((r) => r.field > 0)) {
			let active = new ActiveSnippet(ranges, 0);
			let effects = spec.effects = [setActive.of(active)];
			if (editor.state.field(snippetState, false) === void 0) effects.push(StateEffect.appendConfig.of([
				snippetState,
				addSnippetKeymap,
				snippetPointerHandler,
				baseTheme
			]));
		}
		editor.dispatch(editor.state.update(spec));
	};
}
function moveField(dir) {
	return ({ state, dispatch }) => {
		let active = state.field(snippetState, false);
		if (!active || dir < 0 && active.active == 0) return false;
		let next = active.active + dir, last = dir > 0 && !active.ranges.some((r) => r.field == next + dir);
		dispatch(state.update({
			selection: fieldSelection(active.ranges, next),
			effects: setActive.of(last ? null : new ActiveSnippet(active.ranges, next)),
			scrollIntoView: true
		}));
		return true;
	};
}
/**
A command that clears the active snippet, if any.
*/
var clearSnippet = ({ state, dispatch }) => {
	if (!state.field(snippetState, false)) return false;
	dispatch(state.update({ effects: setActive.of(null) }));
	return true;
};
var defaultSnippetKeymap = [{
	key: "Tab",
	run: /* @__PURE__ */ moveField(1),
	shift: /* @__PURE__ */ moveField(-1)
}, {
	key: "Escape",
	run: clearSnippet
}];
/**
A facet that can be used to configure the key bindings used by
snippets. The default binds Tab to
[`nextSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.nextSnippetField), Shift-Tab to
[`prevSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.prevSnippetField), and Escape
to [`clearSnippet`](https://codemirror.net/6/docs/ref/#autocomplete.clearSnippet).
*/
var snippetKeymap = /* @__PURE__ */ Facet.define({ combine(maps) {
	return maps.length ? maps[0] : defaultSnippetKeymap;
} });
var addSnippetKeymap = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ keymap.compute([snippetKeymap], (state) => state.facet(snippetKeymap)));
/**
Create a completion from a snippet. Returns an object with the
properties from `completion`, plus an `apply` function that
applies the snippet.
*/
function snippetCompletion(template, completion) {
	return {
		...completion,
		apply: snippet(template)
	};
}
var snippetPointerHandler = /* @__PURE__ */ EditorView.domEventHandlers({ mousedown(event, view) {
	let active = view.state.field(snippetState, false), pos;
	if (!active || (pos = view.posAtCoords({
		x: event.clientX,
		y: event.clientY
	})) == null) return false;
	let match = active.ranges.find((r) => r.from <= pos && r.to >= pos);
	if (!match || match.field == active.active) return false;
	view.dispatch({
		selection: fieldSelection(active.ranges, match.field),
		effects: setActive.of(active.ranges.some((r) => r.field > match.field) ? new ActiveSnippet(active.ranges, match.field) : null),
		scrollIntoView: true
	});
	return true;
} });
var defaults = {
	brackets: [
		"(",
		"[",
		"{",
		"'",
		"\""
	],
	before: ")]}:;>",
	stringPrefixes: []
};
var closeBracketEffect = /* @__PURE__ */ StateEffect.define({ map(value, mapping) {
	let mapped = mapping.mapPos(value, -1, MapMode.TrackAfter);
	return mapped == null ? void 0 : mapped;
} });
var closedBracket = /* @__PURE__ */ new class extends RangeValue {}();
closedBracket.startSide = 1;
closedBracket.endSide = -1;
var bracketState = /* @__PURE__ */ StateField.define({
	create() {
		return RangeSet.empty;
	},
	update(value, tr) {
		value = value.map(tr.changes);
		if (tr.selection) {
			let line = tr.state.doc.lineAt(tr.selection.main.head);
			value = value.update({ filter: (from) => from >= line.from && from <= line.to });
		}
		for (let effect of tr.effects) if (effect.is(closeBracketEffect)) value = value.update({ add: [closedBracket.range(effect.value, effect.value + 1)] });
		return value;
	}
});
/**
Extension to enable bracket-closing behavior. When a closeable
bracket is typed, its closing bracket is immediately inserted
after the cursor. When closing a bracket directly in front of a
closing bracket inserted by the extension, the cursor moves over
that bracket.
*/
function closeBrackets() {
	return [inputHandler, bracketState];
}
var definedClosing = "()[]{}<>«»»«［］｛｝";
function closing(ch) {
	for (let i = 0; i < 16; i += 2) if (definedClosing.charCodeAt(i) == ch) return definedClosing.charAt(i + 1);
	return fromCodePoint(ch < 128 ? ch : ch + 1);
}
function config(state, pos) {
	return state.languageDataAt("closeBrackets", pos)[0] || defaults;
}
var android$1 = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent);
var inputHandler = /* @__PURE__ */ EditorView.inputHandler.of((view, from, to, insert) => {
	if ((android$1 ? view.composing : view.compositionStarted) || view.state.readOnly) return false;
	let sel = view.state.selection.main;
	if (insert.length > 2 || insert.length == 2 && codePointSize(codePointAt(insert, 0)) == 1 || from != sel.from || to != sel.to) return false;
	let tr = insertBracket(view.state, insert);
	if (!tr) return false;
	view.dispatch(tr);
	return true;
});
/**
Command that implements deleting a pair of matching brackets when
the cursor is between them.
*/
var deleteBracketPair = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	let tokens = config(state, state.selection.main.head).brackets || defaults.brackets;
	let dont = null, changes = state.changeByRange((range) => {
		if (range.empty) {
			let before = prevChar(state.doc, range.head);
			for (let token of tokens) if (token == before && nextChar(state.doc, range.head) == closing(codePointAt(token, 0))) return {
				changes: {
					from: range.head - token.length,
					to: range.head + token.length
				},
				range: EditorSelection.cursor(range.head - token.length)
			};
		}
		return { range: dont = range };
	});
	if (!dont) dispatch(state.update(changes, {
		scrollIntoView: true,
		userEvent: "delete.backward"
	}));
	return !dont;
};
/**
Close-brackets related key bindings. Binds Backspace to
[`deleteBracketPair`](https://codemirror.net/6/docs/ref/#autocomplete.deleteBracketPair).
*/
var closeBracketsKeymap = [{
	key: "Backspace",
	run: deleteBracketPair
}];
/**
Implements the extension's behavior on text insertion. If the
given string counts as a bracket in the language around the
selection, and replacing the selection with it requires custom
behavior (inserting a closing version or skipping past a
previously-closed bracket), this function returns a transaction
representing that custom behavior. (You only need this if you want
to programmatically insert brackets—the
[`closeBrackets`](https://codemirror.net/6/docs/ref/#autocomplete.closeBrackets) extension will
take care of running this for user input.)
*/
function insertBracket(state, bracket) {
	let conf = config(state, state.selection.main.head);
	let tokens = conf.brackets || defaults.brackets;
	for (let tok of tokens) {
		let closed = closing(codePointAt(tok, 0));
		if (bracket == tok) return closed == tok ? handleSame(state, tok, tokens.indexOf(tok + tok + tok) > -1, conf) : handleOpen(state, tok, closed, conf.before || defaults.before);
		if (bracket == closed && closedBracketAt(state, state.selection.main.from)) return handleClose(state, tok, closed);
	}
	return null;
}
function closedBracketAt(state, pos) {
	let found = false;
	state.field(bracketState).between(0, state.doc.length, (from) => {
		if (from == pos) found = true;
	});
	return found;
}
function nextChar(doc, pos) {
	let next = doc.sliceString(pos, pos + 2);
	return next.slice(0, codePointSize(codePointAt(next, 0)));
}
function prevChar(doc, pos) {
	let prev = doc.sliceString(pos - 2, pos);
	return codePointSize(codePointAt(prev, 0)) == prev.length ? prev : prev.slice(1);
}
function handleOpen(state, open, close, closeBefore) {
	let dont = null, changes = state.changeByRange((range) => {
		if (!range.empty) return {
			changes: [{
				insert: open,
				from: range.from
			}, {
				insert: close,
				from: range.to
			}],
			effects: closeBracketEffect.of(range.to + open.length),
			range: EditorSelection.range(range.anchor + open.length, range.head + open.length)
		};
		let next = nextChar(state.doc, range.head);
		if (!next || /\s/.test(next) || closeBefore.indexOf(next) > -1) return {
			changes: {
				insert: open + close,
				from: range.head
			},
			effects: closeBracketEffect.of(range.head + open.length),
			range: EditorSelection.cursor(range.head + open.length)
		};
		return { range: dont = range };
	});
	return dont ? null : state.update(changes, {
		scrollIntoView: true,
		userEvent: "input.type"
	});
}
function handleClose(state, _open, close) {
	let dont = null, changes = state.changeByRange((range) => {
		if (range.empty && nextChar(state.doc, range.head) == close) return {
			changes: {
				from: range.head,
				to: range.head + close.length,
				insert: close
			},
			range: EditorSelection.cursor(range.head + close.length)
		};
		return dont = { range };
	});
	return dont ? null : state.update(changes, {
		scrollIntoView: true,
		userEvent: "input.type"
	});
}
function handleSame(state, token, allowTriple, config) {
	let stringPrefixes = config.stringPrefixes || defaults.stringPrefixes;
	let dont = null, changes = state.changeByRange((range) => {
		if (!range.empty) return {
			changes: [{
				insert: token,
				from: range.from
			}, {
				insert: token,
				from: range.to
			}],
			effects: closeBracketEffect.of(range.to + token.length),
			range: EditorSelection.range(range.anchor + token.length, range.head + token.length)
		};
		let pos = range.head, next = nextChar(state.doc, pos), start;
		if (next == token) {
			if (nodeStart(state, pos)) return {
				changes: {
					insert: token + token,
					from: pos
				},
				effects: closeBracketEffect.of(pos + token.length),
				range: EditorSelection.cursor(pos + token.length)
			};
			else if (closedBracketAt(state, pos)) {
				let content = allowTriple && state.sliceDoc(pos, pos + token.length * 3) == token + token + token ? token + token + token : token;
				return {
					changes: {
						from: pos,
						to: pos + content.length,
						insert: content
					},
					range: EditorSelection.cursor(pos + content.length)
				};
			}
		} else if (allowTriple && state.sliceDoc(pos - 2 * token.length, pos) == token + token && (start = canStartStringAt(state, pos - 2 * token.length, stringPrefixes)) > -1 && nodeStart(state, start)) return {
			changes: {
				insert: token + token + token + token,
				from: pos
			},
			effects: closeBracketEffect.of(pos + token.length),
			range: EditorSelection.cursor(pos + token.length)
		};
		else if (state.charCategorizer(pos)(next) != CharCategory.Word) {
			if (canStartStringAt(state, pos, stringPrefixes) > -1 && !probablyInString(state, pos, token, stringPrefixes)) return {
				changes: {
					insert: token + token,
					from: pos
				},
				effects: closeBracketEffect.of(pos + token.length),
				range: EditorSelection.cursor(pos + token.length)
			};
		}
		return { range: dont = range };
	});
	return dont ? null : state.update(changes, {
		scrollIntoView: true,
		userEvent: "input.type"
	});
}
function nodeStart(state, pos) {
	let tree = syntaxTree(state).resolveInner(pos + 1);
	return tree.parent && tree.from == pos;
}
function probablyInString(state, pos, quoteToken, prefixes) {
	let node = syntaxTree(state).resolveInner(pos, -1);
	let maxPrefix = prefixes.reduce((m, p) => Math.max(m, p.length), 0);
	for (let i = 0; i < 5; i++) {
		let start = state.sliceDoc(node.from, Math.min(node.to, node.from + quoteToken.length + maxPrefix));
		let quotePos = start.indexOf(quoteToken);
		if (!quotePos || quotePos > -1 && prefixes.indexOf(start.slice(0, quotePos)) > -1) {
			let first = node.firstChild;
			while (first && first.from == node.from && first.to - first.from > quoteToken.length + quotePos) {
				if (state.sliceDoc(first.to - quoteToken.length, first.to) == quoteToken) return false;
				first = first.firstChild;
			}
			return true;
		}
		let parent = node.to == pos && node.parent;
		if (!parent) break;
		node = parent;
	}
	return false;
}
function canStartStringAt(state, pos, prefixes) {
	let charCat = state.charCategorizer(pos);
	if (charCat(state.sliceDoc(pos - 1, pos)) != CharCategory.Word) return pos;
	for (let prefix of prefixes) {
		let start = pos - prefix.length;
		if (state.sliceDoc(start, pos) == prefix && charCat(state.sliceDoc(start - 1, start)) != CharCategory.Word) return start;
	}
	return -1;
}
/**
Returns an extension that enables autocompletion.
*/
function autocompletion(config = {}) {
	return [
		commitCharacters,
		completionState,
		completionConfig.of(config),
		completionPlugin,
		completionKeymapExt,
		baseTheme
	];
}
/**
Basic keybindings for autocompletion.

- Ctrl-Space (and Alt-\` or Alt-i on macOS): [`startCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.startCompletion)
- Escape: [`closeCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.closeCompletion)
- ArrowDown: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(true)`
- ArrowUp: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(false)`
- PageDown: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(true, "page")`
- PageUp: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(false, "page")`
- Enter: [`acceptCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.acceptCompletion)
*/
var completionKeymap = [
	{
		key: "Ctrl-Space",
		run: startCompletion
	},
	{
		mac: "Alt-`",
		run: startCompletion
	},
	{
		mac: "Alt-i",
		run: startCompletion
	},
	{
		key: "Escape",
		run: closeCompletion
	},
	{
		key: "ArrowDown",
		run: /* @__PURE__ */ moveCompletionSelection(true)
	},
	{
		key: "ArrowUp",
		run: /* @__PURE__ */ moveCompletionSelection(false)
	},
	{
		key: "PageDown",
		run: /* @__PURE__ */ moveCompletionSelection(true, "page")
	},
	{
		key: "PageUp",
		run: /* @__PURE__ */ moveCompletionSelection(false, "page")
	},
	{
		key: "Enter",
		run: acceptCompletion
	}
];
var completionKeymapExt = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ keymap.computeN([completionConfig], (state) => state.facet(completionConfig).defaultKeymap ? [completionKeymap] : []));
/**
Get the current completion status. When completions are available,
this will return `"active"`. When completions are pending (in the
process of being queried), this returns `"pending"`. Otherwise, it
returns `null`.
*/
function completionStatus(state) {
	let cState = state.field(completionState, false);
	return cState && cState.active.some((a) => a.isPending) ? "pending" : cState && cState.active.some((a) => a.state != 0) ? "active" : null;
}
//#endregion
//#region ../../../node_modules/.pnpm/@lezer+lr@1.4.5/node_modules/@lezer/lr/dist/index.js
init_dist();
/**
A parse stack. These are used internally by the parser to track
parsing progress. They also provide some properties and methods
that external code such as a tokenizer can use to get information
about the parse state.
*/
var Stack = class Stack {
	/**
	@internal
	*/
	constructor(p, stack, state, reducePos, pos, score, buffer, bufferBase, curContext, lookAhead = 0, parent) {
		this.p = p;
		this.stack = stack;
		this.state = state;
		this.reducePos = reducePos;
		this.pos = pos;
		this.score = score;
		this.buffer = buffer;
		this.bufferBase = bufferBase;
		this.curContext = curContext;
		this.lookAhead = lookAhead;
		this.parent = parent;
	}
	/**
	@internal
	*/
	toString() {
		return `[${this.stack.filter((_, i) => i % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
	}
	/**
	@internal
	*/
	static start(p, state, pos = 0) {
		let cx = p.parser.context;
		return new Stack(p, [], state, pos, pos, 0, [], 0, cx ? new StackContext(cx, cx.start) : null, 0, null);
	}
	/**
	The stack's current [context](#lr.ContextTracker) value, if
	any. Its type will depend on the context tracker's type
	parameter, or it will be `null` if there is no context
	tracker.
	*/
	get context() {
		return this.curContext ? this.curContext.context : null;
	}
	/**
	@internal
	*/
	pushState(state, start) {
		this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
		this.state = state;
	}
	/**
	@internal
	*/
	reduce(action) {
		var _a;
		let depth = action >> 19, type = action & 65535;
		let { parser } = this.p;
		let lookaheadRecord = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos);
		let dPrec = parser.dynamicPrecedence(type);
		if (dPrec) this.score += dPrec;
		if (depth == 0) {
			this.pushState(parser.getGoto(this.state, type, true), this.reducePos);
			if (type < parser.minRepeatTerm) this.storeNode(type, this.reducePos, this.reducePos, lookaheadRecord ? 8 : 4, true);
			this.reduceContext(type, this.reducePos);
			return;
		}
		let base = this.stack.length - (depth - 1) * 3 - (action & 262144 ? 6 : 0);
		let start = base ? this.stack[base - 2] : this.p.ranges[0].from, size = this.reducePos - start;
		if (size >= 2e3 && !((_a = this.p.parser.nodeSet.types[type]) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
			if (start == this.p.lastBigReductionStart) {
				this.p.bigReductionCount++;
				this.p.lastBigReductionSize = size;
			} else if (this.p.lastBigReductionSize < size) {
				this.p.bigReductionCount = 1;
				this.p.lastBigReductionStart = start;
				this.p.lastBigReductionSize = size;
			}
		}
		let bufferBase = base ? this.stack[base - 1] : 0, count = this.bufferBase + this.buffer.length - bufferBase;
		if (type < parser.minRepeatTerm || action & 131072) {
			let pos = parser.stateFlag(this.state, 1) ? this.pos : this.reducePos;
			this.storeNode(type, start, pos, count + 4, true);
		}
		if (action & 262144) this.state = this.stack[base];
		else {
			let baseStateID = this.stack[base - 3];
			this.state = parser.getGoto(baseStateID, type, true);
		}
		while (this.stack.length > base) this.stack.pop();
		this.reduceContext(type, start);
	}
	/**
	@internal
	*/
	storeNode(term, start, end, size = 4, mustSink = false) {
		if (term == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
			let cur = this, top = this.buffer.length;
			if (top == 0 && cur.parent) {
				top = cur.bufferBase - cur.parent.bufferBase;
				cur = cur.parent;
			}
			if (top > 0 && cur.buffer[top - 4] == 0 && cur.buffer[top - 1] > -1) {
				if (start == end) return;
				if (cur.buffer[top - 2] >= start) {
					cur.buffer[top - 2] = end;
					return;
				}
			}
		}
		if (!mustSink || this.pos == end) this.buffer.push(term, start, end, size);
		else {
			let index = this.buffer.length;
			if (index > 0 && (this.buffer[index - 4] != 0 || this.buffer[index - 1] < 0)) {
				let mustMove = false;
				for (let scan = index; scan > 0 && this.buffer[scan - 2] > end; scan -= 4) if (this.buffer[scan - 1] >= 0) {
					mustMove = true;
					break;
				}
				if (mustMove) while (index > 0 && this.buffer[index - 2] > end) {
					this.buffer[index] = this.buffer[index - 4];
					this.buffer[index + 1] = this.buffer[index - 3];
					this.buffer[index + 2] = this.buffer[index - 2];
					this.buffer[index + 3] = this.buffer[index - 1];
					index -= 4;
					if (size > 4) size -= 4;
				}
			}
			this.buffer[index] = term;
			this.buffer[index + 1] = start;
			this.buffer[index + 2] = end;
			this.buffer[index + 3] = size;
		}
	}
	/**
	@internal
	*/
	shift(action, type, start, end) {
		if (action & 131072) this.pushState(action & 65535, this.pos);
		else if ((action & 262144) == 0) {
			let nextState = action, { parser } = this.p;
			if (end > this.pos || type <= parser.maxNode) {
				this.pos = end;
				if (!parser.stateFlag(nextState, 1)) this.reducePos = end;
			}
			this.pushState(nextState, start);
			this.shiftContext(type, start);
			if (type <= parser.maxNode) this.buffer.push(type, start, end, 4);
		} else {
			this.pos = end;
			this.shiftContext(type, start);
			if (type <= this.p.parser.maxNode) this.buffer.push(type, start, end, 4);
		}
	}
	/**
	@internal
	*/
	apply(action, next, nextStart, nextEnd) {
		if (action & 65536) this.reduce(action);
		else this.shift(action, next, nextStart, nextEnd);
	}
	/**
	@internal
	*/
	useNode(value, next) {
		let index = this.p.reused.length - 1;
		if (index < 0 || this.p.reused[index] != value) {
			this.p.reused.push(value);
			index++;
		}
		let start = this.pos;
		this.reducePos = this.pos = start + value.length;
		this.pushState(next, start);
		this.buffer.push(index, start, this.reducePos, -1);
		if (this.curContext) this.updateContext(this.curContext.tracker.reuse(this.curContext.context, value, this, this.p.stream.reset(this.pos - value.length)));
	}
	/**
	@internal
	*/
	split() {
		let parent = this;
		let off = parent.buffer.length;
		while (off > 0 && parent.buffer[off - 2] > parent.reducePos) off -= 4;
		let buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
		while (parent && base == parent.bufferBase) parent = parent.parent;
		return new Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, buffer, base, this.curContext, this.lookAhead, parent);
	}
	/**
	@internal
	*/
	recoverByDelete(next, nextEnd) {
		let isNode = next <= this.p.parser.maxNode;
		if (isNode) this.storeNode(next, this.pos, nextEnd, 4);
		this.storeNode(0, this.pos, nextEnd, isNode ? 8 : 4);
		this.pos = this.reducePos = nextEnd;
		this.score -= 190;
	}
	/**
	Check if the given term would be able to be shifted (optionally
	after some reductions) on this stack. This can be useful for
	external tokenizers that want to make sure they only provide a
	given token when it applies.
	*/
	canShift(term) {
		for (let sim = new SimulatedStack(this);;) {
			let action = this.p.parser.stateSlot(sim.state, 4) || this.p.parser.hasAction(sim.state, term);
			if (action == 0) return false;
			if ((action & 65536) == 0) return true;
			sim.reduce(action);
		}
	}
	/**
	@internal
	*/
	recoverByInsert(next) {
		if (this.stack.length >= 300) return [];
		let nextStates = this.p.parser.nextStates(this.state);
		if (nextStates.length > 8 || this.stack.length >= 120) {
			let best = [];
			for (let i = 0, s; i < nextStates.length; i += 2) if ((s = nextStates[i + 1]) != this.state && this.p.parser.hasAction(s, next)) best.push(nextStates[i], s);
			if (this.stack.length < 120) for (let i = 0; best.length < 8 && i < nextStates.length; i += 2) {
				let s = nextStates[i + 1];
				if (!best.some((v, i) => i & 1 && v == s)) best.push(nextStates[i], s);
			}
			nextStates = best;
		}
		let result = [];
		for (let i = 0; i < nextStates.length && result.length < 4; i += 2) {
			let s = nextStates[i + 1];
			if (s == this.state) continue;
			let stack = this.split();
			stack.pushState(s, this.pos);
			stack.storeNode(0, stack.pos, stack.pos, 4, true);
			stack.shiftContext(nextStates[i], this.pos);
			stack.reducePos = this.pos;
			stack.score -= 200;
			result.push(stack);
		}
		return result;
	}
	/**
	@internal
	*/
	forceReduce() {
		let { parser } = this.p;
		let reduce = parser.stateSlot(this.state, 5);
		if ((reduce & 65536) == 0) return false;
		if (!parser.validAction(this.state, reduce)) {
			let depth = reduce >> 19, term = reduce & 65535;
			let target = this.stack.length - depth * 3;
			if (target < 0 || parser.getGoto(this.stack[target], term, false) < 0) {
				let backup = this.findForcedReduction();
				if (backup == null) return false;
				reduce = backup;
			}
			this.storeNode(0, this.pos, this.pos, 4, true);
			this.score -= 100;
		}
		this.reducePos = this.pos;
		this.reduce(reduce);
		return true;
	}
	/**
	Try to scan through the automaton to find some kind of reduction
	that can be applied. Used when the regular ForcedReduce field
	isn't a valid action. @internal
	*/
	findForcedReduction() {
		let { parser } = this.p, seen = [];
		let explore = (state, depth) => {
			if (seen.includes(state)) return;
			seen.push(state);
			return parser.allActions(state, (action) => {
				if (action & 393216);
				else if (action & 65536) {
					let rDepth = (action >> 19) - depth;
					if (rDepth > 1) {
						let term = action & 65535, target = this.stack.length - rDepth * 3;
						if (target >= 0 && parser.getGoto(this.stack[target], term, false) >= 0) return rDepth << 19 | 65536 | term;
					}
				} else {
					let found = explore(action, depth + 1);
					if (found != null) return found;
				}
			});
		};
		return explore(this.state, 0);
	}
	/**
	@internal
	*/
	forceAll() {
		while (!this.p.parser.stateFlag(this.state, 2)) if (!this.forceReduce()) {
			this.storeNode(0, this.pos, this.pos, 4, true);
			break;
		}
		return this;
	}
	/**
	Check whether this state has no further actions (assumed to be a direct descendant of the
	top state, since any other states must be able to continue
	somehow). @internal
	*/
	get deadEnd() {
		if (this.stack.length != 3) return false;
		let { parser } = this.p;
		return parser.data[parser.stateSlot(this.state, 1)] == 65535 && !parser.stateSlot(this.state, 4);
	}
	/**
	Restart the stack (put it back in its start state). Only safe
	when this.stack.length == 3 (state is directly below the top
	state). @internal
	*/
	restart() {
		this.storeNode(0, this.pos, this.pos, 4, true);
		this.state = this.stack[0];
		this.stack.length = 0;
	}
	/**
	@internal
	*/
	sameState(other) {
		if (this.state != other.state || this.stack.length != other.stack.length) return false;
		for (let i = 0; i < this.stack.length; i += 3) if (this.stack[i] != other.stack[i]) return false;
		return true;
	}
	/**
	Get the parser used by this stack.
	*/
	get parser() {
		return this.p.parser;
	}
	/**
	Test whether a given dialect (by numeric ID, as exported from
	the terms file) is enabled.
	*/
	dialectEnabled(dialectID) {
		return this.p.parser.dialect.flags[dialectID];
	}
	shiftContext(term, start) {
		if (this.curContext) this.updateContext(this.curContext.tracker.shift(this.curContext.context, term, this, this.p.stream.reset(start)));
	}
	reduceContext(term, start) {
		if (this.curContext) this.updateContext(this.curContext.tracker.reduce(this.curContext.context, term, this, this.p.stream.reset(start)));
	}
	/**
	@internal
	*/
	emitContext() {
		let last = this.buffer.length - 1;
		if (last < 0 || this.buffer[last] != -3) this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
	}
	/**
	@internal
	*/
	emitLookAhead() {
		let last = this.buffer.length - 1;
		if (last < 0 || this.buffer[last] != -4) this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
	}
	updateContext(context) {
		if (context != this.curContext.context) {
			let newCx = new StackContext(this.curContext.tracker, context);
			if (newCx.hash != this.curContext.hash) this.emitContext();
			this.curContext = newCx;
		}
	}
	/**
	@internal
	*/
	setLookAhead(lookAhead) {
		if (lookAhead <= this.lookAhead) return false;
		this.emitLookAhead();
		this.lookAhead = lookAhead;
		return true;
	}
	/**
	@internal
	*/
	close() {
		if (this.curContext && this.curContext.tracker.strict) this.emitContext();
		if (this.lookAhead > 0) this.emitLookAhead();
	}
};
var StackContext = class {
	constructor(tracker, context) {
		this.tracker = tracker;
		this.context = context;
		this.hash = tracker.strict ? tracker.hash(context) : 0;
	}
};
var SimulatedStack = class {
	constructor(start) {
		this.start = start;
		this.state = start.state;
		this.stack = start.stack;
		this.base = this.stack.length;
	}
	reduce(action) {
		let term = action & 65535, depth = action >> 19;
		if (depth == 0) {
			if (this.stack == this.start.stack) this.stack = this.stack.slice();
			this.stack.push(this.state, 0, 0);
			this.base += 3;
		} else this.base -= (depth - 1) * 3;
		this.state = this.start.p.parser.getGoto(this.stack[this.base - 3], term, true);
	}
};
var StackBufferCursor = class StackBufferCursor {
	constructor(stack, pos, index) {
		this.stack = stack;
		this.pos = pos;
		this.index = index;
		this.buffer = stack.buffer;
		if (this.index == 0) this.maybeNext();
	}
	static create(stack, pos = stack.bufferBase + stack.buffer.length) {
		return new StackBufferCursor(stack, pos, pos - stack.bufferBase);
	}
	maybeNext() {
		let next = this.stack.parent;
		if (next != null) {
			this.index = this.stack.bufferBase - next.bufferBase;
			this.stack = next;
			this.buffer = next.buffer;
		}
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	next() {
		this.index -= 4;
		this.pos -= 4;
		if (this.index == 0) this.maybeNext();
	}
	fork() {
		return new StackBufferCursor(this.stack, this.pos, this.index);
	}
};
function decodeArray(input, Type = Uint16Array) {
	if (typeof input != "string") return input;
	let array = null;
	for (let pos = 0, out = 0; pos < input.length;) {
		let value = 0;
		for (;;) {
			let next = input.charCodeAt(pos++), stop = false;
			if (next == 126) {
				value = 65535;
				break;
			}
			if (next >= 92) next--;
			if (next >= 34) next--;
			let digit = next - 32;
			if (digit >= 46) {
				digit -= 46;
				stop = true;
			}
			value += digit;
			if (stop) break;
			value *= 46;
		}
		if (array) array[out++] = value;
		else array = new Type(value);
	}
	return array;
}
var CachedToken = class {
	constructor() {
		this.start = -1;
		this.value = -1;
		this.end = -1;
		this.extended = -1;
		this.lookAhead = 0;
		this.mask = 0;
		this.context = 0;
	}
};
var nullToken = new CachedToken();
/**
[Tokenizers](#lr.ExternalTokenizer) interact with the input
through this interface. It presents the input as a stream of
characters, tracking lookahead and hiding the complexity of
[ranges](#common.Parser.parse^ranges) from tokenizer code.
*/
var InputStream = class {
	/**
	@internal
	*/
	constructor(input, ranges) {
		this.input = input;
		this.ranges = ranges;
		/**
		@internal
		*/
		this.chunk = "";
		/**
		@internal
		*/
		this.chunkOff = 0;
		/**
		Backup chunk
		*/
		this.chunk2 = "";
		this.chunk2Pos = 0;
		/**
		The character code of the next code unit in the input, or -1
		when the stream is at the end of the input.
		*/
		this.next = -1;
		/**
		@internal
		*/
		this.token = nullToken;
		this.rangeIndex = 0;
		this.pos = this.chunkPos = ranges[0].from;
		this.range = ranges[0];
		this.end = ranges[ranges.length - 1].to;
		this.readNext();
	}
	/**
	@internal
	*/
	resolveOffset(offset, assoc) {
		let range = this.range, index = this.rangeIndex;
		let pos = this.pos + offset;
		while (pos < range.from) {
			if (!index) return null;
			let next = this.ranges[--index];
			pos -= range.from - next.to;
			range = next;
		}
		while (assoc < 0 ? pos > range.to : pos >= range.to) {
			if (index == this.ranges.length - 1) return null;
			let next = this.ranges[++index];
			pos += next.from - range.to;
			range = next;
		}
		return pos;
	}
	/**
	@internal
	*/
	clipPos(pos) {
		if (pos >= this.range.from && pos < this.range.to) return pos;
		for (let range of this.ranges) if (range.to > pos) return Math.max(pos, range.from);
		return this.end;
	}
	/**
	Look at a code unit near the stream position. `.peek(0)` equals
	`.next`, `.peek(-1)` gives you the previous character, and so
	on.
	
	Note that looking around during tokenizing creates dependencies
	on potentially far-away content, which may reduce the
	effectiveness incremental parsing—when looking forward—or even
	cause invalid reparses when looking backward more than 25 code
	units, since the library does not track lookbehind.
	*/
	peek(offset) {
		let idx = this.chunkOff + offset, pos, result;
		if (idx >= 0 && idx < this.chunk.length) {
			pos = this.pos + offset;
			result = this.chunk.charCodeAt(idx);
		} else {
			let resolved = this.resolveOffset(offset, 1);
			if (resolved == null) return -1;
			pos = resolved;
			if (pos >= this.chunk2Pos && pos < this.chunk2Pos + this.chunk2.length) result = this.chunk2.charCodeAt(pos - this.chunk2Pos);
			else {
				let i = this.rangeIndex, range = this.range;
				while (range.to <= pos) range = this.ranges[++i];
				this.chunk2 = this.input.chunk(this.chunk2Pos = pos);
				if (pos + this.chunk2.length > range.to) this.chunk2 = this.chunk2.slice(0, range.to - pos);
				result = this.chunk2.charCodeAt(0);
			}
		}
		if (pos >= this.token.lookAhead) this.token.lookAhead = pos + 1;
		return result;
	}
	/**
	Accept a token. By default, the end of the token is set to the
	current stream position, but you can pass an offset (relative to
	the stream position) to change that.
	*/
	acceptToken(token, endOffset = 0) {
		let end = endOffset ? this.resolveOffset(endOffset, -1) : this.pos;
		if (end == null || end < this.token.start) throw new RangeError("Token end out of bounds");
		this.token.value = token;
		this.token.end = end;
	}
	/**
	Accept a token ending at a specific given position.
	*/
	acceptTokenTo(token, endPos) {
		this.token.value = token;
		this.token.end = endPos;
	}
	getChunk() {
		if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
			let { chunk, chunkPos } = this;
			this.chunk = this.chunk2;
			this.chunkPos = this.chunk2Pos;
			this.chunk2 = chunk;
			this.chunk2Pos = chunkPos;
			this.chunkOff = this.pos - this.chunkPos;
		} else {
			this.chunk2 = this.chunk;
			this.chunk2Pos = this.chunkPos;
			let nextChunk = this.input.chunk(this.pos);
			this.chunk = this.pos + nextChunk.length > this.range.to ? nextChunk.slice(0, this.range.to - this.pos) : nextChunk;
			this.chunkPos = this.pos;
			this.chunkOff = 0;
		}
	}
	readNext() {
		if (this.chunkOff >= this.chunk.length) {
			this.getChunk();
			if (this.chunkOff == this.chunk.length) return this.next = -1;
		}
		return this.next = this.chunk.charCodeAt(this.chunkOff);
	}
	/**
	Move the stream forward N (defaults to 1) code units. Returns
	the new value of [`next`](#lr.InputStream.next).
	*/
	advance(n = 1) {
		this.chunkOff += n;
		while (this.pos + n >= this.range.to) {
			if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
			n -= this.range.to - this.pos;
			this.range = this.ranges[++this.rangeIndex];
			this.pos = this.range.from;
		}
		this.pos += n;
		if (this.pos >= this.token.lookAhead) this.token.lookAhead = this.pos + 1;
		return this.readNext();
	}
	setDone() {
		this.pos = this.chunkPos = this.end;
		this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
		this.chunk = "";
		return this.next = -1;
	}
	/**
	@internal
	*/
	reset(pos, token) {
		if (token) {
			this.token = token;
			token.start = pos;
			token.lookAhead = pos + 1;
			token.value = token.extended = -1;
		} else this.token = nullToken;
		if (this.pos != pos) {
			this.pos = pos;
			if (pos == this.end) {
				this.setDone();
				return this;
			}
			while (pos < this.range.from) this.range = this.ranges[--this.rangeIndex];
			while (pos >= this.range.to) this.range = this.ranges[++this.rangeIndex];
			if (pos >= this.chunkPos && pos < this.chunkPos + this.chunk.length) this.chunkOff = pos - this.chunkPos;
			else {
				this.chunk = "";
				this.chunkOff = 0;
			}
			this.readNext();
		}
		return this;
	}
	/**
	@internal
	*/
	read(from, to) {
		if (from >= this.chunkPos && to <= this.chunkPos + this.chunk.length) return this.chunk.slice(from - this.chunkPos, to - this.chunkPos);
		if (from >= this.chunk2Pos && to <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(from - this.chunk2Pos, to - this.chunk2Pos);
		if (from >= this.range.from && to <= this.range.to) return this.input.read(from, to);
		let result = "";
		for (let r of this.ranges) {
			if (r.from >= to) break;
			if (r.to > from) result += this.input.read(Math.max(r.from, from), Math.min(r.to, to));
		}
		return result;
	}
};
/**
@internal
*/
var TokenGroup = class {
	constructor(data, id) {
		this.data = data;
		this.id = id;
	}
	token(input, stack) {
		let { parser } = stack.p;
		readToken(this.data, input, stack, this.id, parser.data, parser.tokenPrecTable);
	}
};
TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/**
@hide
*/
var LocalTokenGroup = class {
	constructor(data, precTable, elseToken) {
		this.precTable = precTable;
		this.elseToken = elseToken;
		this.data = typeof data == "string" ? decodeArray(data) : data;
	}
	token(input, stack) {
		let start = input.pos, skipped = 0;
		for (;;) {
			let atEof = input.next < 0, nextPos = input.resolveOffset(1, 1);
			readToken(this.data, input, stack, 0, this.data, this.precTable);
			if (input.token.value > -1) break;
			if (this.elseToken == null) return;
			if (!atEof) skipped++;
			if (nextPos == null) break;
			input.reset(nextPos, input.token);
		}
		if (skipped) {
			input.reset(start, input.token);
			input.acceptToken(this.elseToken, skipped);
		}
	}
};
LocalTokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/**
`@external tokens` declarations in the grammar should resolve to
an instance of this class.
*/
var ExternalTokenizer = class {
	/**
	Create a tokenizer. The first argument is the function that,
	given an input stream, scans for the types of tokens it
	recognizes at the stream's position, and calls
	[`acceptToken`](#lr.InputStream.acceptToken) when it finds
	one.
	*/
	constructor(token, options = {}) {
		this.token = token;
		this.contextual = !!options.contextual;
		this.fallback = !!options.fallback;
		this.extend = !!options.extend;
	}
};
function readToken(data, input, stack, group, precTable, precOffset) {
	let state = 0, groupMask = 1 << group, { dialect } = stack.p.parser;
	scan: for (;;) {
		if ((groupMask & data[state]) == 0) break;
		let accEnd = data[state + 1];
		for (let i = state + 3; i < accEnd; i += 2) if ((data[i + 1] & groupMask) > 0) {
			let term = data[i];
			if (dialect.allows(term) && (input.token.value == -1 || input.token.value == term || overrides(term, input.token.value, precTable, precOffset))) {
				input.acceptToken(term);
				break;
			}
		}
		let next = input.next, low = 0, high = data[state + 2];
		if (input.next < 0 && high > low && data[accEnd + high * 3 - 3] == 65535) {
			state = data[accEnd + high * 3 - 1];
			continue scan;
		}
		for (; low < high;) {
			let mid = low + high >> 1;
			let index = accEnd + mid + (mid << 1);
			let from = data[index], to = data[index + 1] || 65536;
			if (next < from) high = mid;
			else if (next >= to) low = mid + 1;
			else {
				state = data[index + 2];
				input.advance();
				continue scan;
			}
		}
		break;
	}
}
function findOffset(data, start, term) {
	for (let i = start, next; (next = data[i]) != 65535; i++) if (next == term) return i - start;
	return -1;
}
function overrides(token, prev, tableData, tableOffset) {
	let iPrev = findOffset(tableData, tableOffset, prev);
	return iPrev < 0 || findOffset(tableData, tableOffset, token) < iPrev;
}
var verbose = typeof process$1 != "undefined" && /\bparse\b/.test({}.LOG);
var stackIDs = null;
function cutAt(tree, pos, side) {
	let cursor = tree.cursor(IterMode.IncludeAnonymous);
	cursor.moveTo(pos);
	for (;;) if (!(side < 0 ? cursor.childBefore(pos) : cursor.childAfter(pos))) for (;;) {
		if ((side < 0 ? cursor.to < pos : cursor.from > pos) && !cursor.type.isError) return side < 0 ? Math.max(0, Math.min(cursor.to - 1, pos - 25)) : Math.min(tree.length, Math.max(cursor.from + 1, pos + 25));
		if (side < 0 ? cursor.prevSibling() : cursor.nextSibling()) break;
		if (!cursor.parent()) return side < 0 ? 0 : tree.length;
	}
}
var FragmentCursor = class {
	constructor(fragments, nodeSet) {
		this.fragments = fragments;
		this.nodeSet = nodeSet;
		this.i = 0;
		this.fragment = null;
		this.safeFrom = -1;
		this.safeTo = -1;
		this.trees = [];
		this.start = [];
		this.index = [];
		this.nextFragment();
	}
	nextFragment() {
		let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
		if (fr) {
			this.safeFrom = fr.openStart ? cutAt(fr.tree, fr.from + fr.offset, 1) - fr.offset : fr.from;
			this.safeTo = fr.openEnd ? cutAt(fr.tree, fr.to + fr.offset, -1) - fr.offset : fr.to;
			while (this.trees.length) {
				this.trees.pop();
				this.start.pop();
				this.index.pop();
			}
			this.trees.push(fr.tree);
			this.start.push(-fr.offset);
			this.index.push(0);
			this.nextStart = this.safeFrom;
		} else this.nextStart = 1e9;
	}
	nodeAt(pos) {
		if (pos < this.nextStart) return null;
		while (this.fragment && this.safeTo <= pos) this.nextFragment();
		if (!this.fragment) return null;
		for (;;) {
			let last = this.trees.length - 1;
			if (last < 0) {
				this.nextFragment();
				return null;
			}
			let top = this.trees[last], index = this.index[last];
			if (index == top.children.length) {
				this.trees.pop();
				this.start.pop();
				this.index.pop();
				continue;
			}
			let next = top.children[index];
			let start = this.start[last] + top.positions[index];
			if (start > pos) {
				this.nextStart = start;
				return null;
			}
			if (next instanceof Tree) {
				if (start == pos) {
					if (start < this.safeFrom) return null;
					let end = start + next.length;
					if (end <= this.safeTo) {
						let lookAhead = next.prop(NodeProp.lookAhead);
						if (!lookAhead || end + lookAhead < this.fragment.to) return next;
					}
				}
				this.index[last]++;
				if (start + next.length >= Math.max(this.safeFrom, pos)) {
					this.trees.push(next);
					this.start.push(start);
					this.index.push(0);
				}
			} else {
				this.index[last]++;
				this.nextStart = start + next.length;
			}
		}
	}
};
var TokenCache = class {
	constructor(parser, stream) {
		this.stream = stream;
		this.tokens = [];
		this.mainToken = null;
		this.actions = [];
		this.tokens = parser.tokenizers.map((_) => new CachedToken());
	}
	getActions(stack) {
		let actionIndex = 0;
		let main = null;
		let { parser } = stack.p, { tokenizers } = parser;
		let mask = parser.stateSlot(stack.state, 3);
		let context = stack.curContext ? stack.curContext.hash : 0;
		let lookAhead = 0;
		for (let i = 0; i < tokenizers.length; i++) {
			if ((1 << i & mask) == 0) continue;
			let tokenizer = tokenizers[i], token = this.tokens[i];
			if (main && !tokenizer.fallback) continue;
			if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {
				this.updateCachedToken(token, tokenizer, stack);
				token.mask = mask;
				token.context = context;
			}
			if (token.lookAhead > token.end + 25) lookAhead = Math.max(token.lookAhead, lookAhead);
			if (token.value != 0) {
				let startIndex = actionIndex;
				if (token.extended > -1) actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
				actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
				if (!tokenizer.extend) {
					main = token;
					if (actionIndex > startIndex) break;
				}
			}
		}
		while (this.actions.length > actionIndex) this.actions.pop();
		if (lookAhead) stack.setLookAhead(lookAhead);
		if (!main && stack.pos == this.stream.end) {
			main = new CachedToken();
			main.value = stack.p.parser.eofTerm;
			main.start = main.end = stack.pos;
			actionIndex = this.addActions(stack, main.value, main.end, actionIndex);
		}
		this.mainToken = main;
		return this.actions;
	}
	getMainToken(stack) {
		if (this.mainToken) return this.mainToken;
		let main = new CachedToken(), { pos, p } = stack;
		main.start = pos;
		main.end = Math.min(pos + 1, p.stream.end);
		main.value = pos == p.stream.end ? p.parser.eofTerm : 0;
		return main;
	}
	updateCachedToken(token, tokenizer, stack) {
		let start = this.stream.clipPos(stack.pos);
		tokenizer.token(this.stream.reset(start, token), stack);
		if (token.value > -1) {
			let { parser } = stack.p;
			for (let i = 0; i < parser.specialized.length; i++) if (parser.specialized[i] == token.value) {
				let result = parser.specializers[i](this.stream.read(token.start, token.end), stack);
				if (result >= 0 && stack.p.parser.dialect.allows(result >> 1)) {
					if ((result & 1) == 0) token.value = result >> 1;
					else token.extended = result >> 1;
					break;
				}
			}
		} else {
			token.value = 0;
			token.end = this.stream.clipPos(start + 1);
		}
	}
	putAction(action, token, end, index) {
		for (let i = 0; i < index; i += 3) if (this.actions[i] == action) return index;
		this.actions[index++] = action;
		this.actions[index++] = token;
		this.actions[index++] = end;
		return index;
	}
	addActions(stack, token, end, index) {
		let { state } = stack, { parser } = stack.p, { data } = parser;
		for (let set = 0; set < 2; set++) for (let i = parser.stateSlot(state, set ? 2 : 1);; i += 3) {
			if (data[i] == 65535) if (data[i + 1] == 1) i = pair(data, i + 2);
			else {
				if (index == 0 && data[i + 1] == 2) index = this.putAction(pair(data, i + 2), token, end, index);
				break;
			}
			if (data[i] == token) index = this.putAction(pair(data, i + 1), token, end, index);
		}
		return index;
	}
};
var Parse = class {
	constructor(parser, input, fragments, ranges) {
		this.parser = parser;
		this.input = input;
		this.ranges = ranges;
		this.recovering = 0;
		this.nextStackID = 9812;
		this.minStackPos = 0;
		this.reused = [];
		this.stoppedAt = null;
		this.lastBigReductionStart = -1;
		this.lastBigReductionSize = 0;
		this.bigReductionCount = 0;
		this.stream = new InputStream(input, ranges);
		this.tokens = new TokenCache(parser, this.stream);
		this.topTerm = parser.top[1];
		let { from } = ranges[0];
		this.stacks = [Stack.start(this, parser.top[0], from)];
		this.fragments = fragments.length && this.stream.end - from > parser.bufferLength * 4 ? new FragmentCursor(fragments, parser.nodeSet) : null;
	}
	get parsedPos() {
		return this.minStackPos;
	}
	advance() {
		let stacks = this.stacks, pos = this.minStackPos;
		let newStacks = this.stacks = [];
		let stopped, stoppedTokens;
		if (this.bigReductionCount > 300 && stacks.length == 1) {
			let [s] = stacks;
			while (s.forceReduce() && s.stack.length && s.stack[s.stack.length - 2] >= this.lastBigReductionStart);
			this.bigReductionCount = this.lastBigReductionSize = 0;
		}
		for (let i = 0; i < stacks.length; i++) {
			let stack = stacks[i];
			for (;;) {
				this.tokens.mainToken = null;
				if (stack.pos > pos) newStacks.push(stack);
				else if (this.advanceStack(stack, newStacks, stacks)) continue;
				else {
					if (!stopped) {
						stopped = [];
						stoppedTokens = [];
					}
					stopped.push(stack);
					let tok = this.tokens.getMainToken(stack);
					stoppedTokens.push(tok.value, tok.end);
				}
				break;
			}
		}
		if (!newStacks.length) {
			let finished = stopped && findFinished(stopped);
			if (finished) {
				if (verbose) console.log("Finish with " + this.stackID(finished));
				return this.stackToTree(finished);
			}
			if (this.parser.strict) {
				if (verbose && stopped) console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
				throw new SyntaxError("No parse at " + pos);
			}
			if (!this.recovering) this.recovering = 5;
		}
		if (this.recovering && stopped) {
			let finished = this.stoppedAt != null && stopped[0].pos > this.stoppedAt ? stopped[0] : this.runRecovery(stopped, stoppedTokens, newStacks);
			if (finished) {
				if (verbose) console.log("Force-finish " + this.stackID(finished));
				return this.stackToTree(finished.forceAll());
			}
		}
		if (this.recovering) {
			let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3;
			if (newStacks.length > maxRemaining) {
				newStacks.sort((a, b) => b.score - a.score);
				while (newStacks.length > maxRemaining) newStacks.pop();
			}
			if (newStacks.some((s) => s.reducePos > pos)) this.recovering--;
		} else if (newStacks.length > 1) {
			outer: for (let i = 0; i < newStacks.length - 1; i++) {
				let stack = newStacks[i];
				for (let j = i + 1; j < newStacks.length; j++) {
					let other = newStacks[j];
					if (stack.sameState(other) || stack.buffer.length > 500 && other.buffer.length > 500) if ((stack.score - other.score || stack.buffer.length - other.buffer.length) > 0) newStacks.splice(j--, 1);
					else {
						newStacks.splice(i--, 1);
						continue outer;
					}
				}
			}
			if (newStacks.length > 12) {
				newStacks.sort((a, b) => b.score - a.score);
				newStacks.splice(12, newStacks.length - 12);
			}
		}
		this.minStackPos = newStacks[0].pos;
		for (let i = 1; i < newStacks.length; i++) if (newStacks[i].pos < this.minStackPos) this.minStackPos = newStacks[i].pos;
		return null;
	}
	stopAt(pos) {
		if (this.stoppedAt != null && this.stoppedAt < pos) throw new RangeError("Can't move stoppedAt forward");
		this.stoppedAt = pos;
	}
	advanceStack(stack, stacks, split) {
		let start = stack.pos, { parser } = this;
		let base = verbose ? this.stackID(stack) + " -> " : "";
		if (this.stoppedAt != null && start > this.stoppedAt) return stack.forceReduce() ? stack : null;
		if (this.fragments) {
			let strictCx = stack.curContext && stack.curContext.tracker.strict, cxHash = strictCx ? stack.curContext.hash : 0;
			for (let cached = this.fragments.nodeAt(start); cached;) {
				let match = this.parser.nodeSet.types[cached.type.id] == cached.type ? parser.getGoto(stack.state, cached.type.id) : -1;
				if (match > -1 && cached.length && (!strictCx || (cached.prop(NodeProp.contextHash) || 0) == cxHash)) {
					stack.useNode(cached, match);
					if (verbose) console.log(base + this.stackID(stack) + ` (via reuse of ${parser.getName(cached.type.id)})`);
					return true;
				}
				if (!(cached instanceof Tree) || cached.children.length == 0 || cached.positions[0] > 0) break;
				let inner = cached.children[0];
				if (inner instanceof Tree && cached.positions[0] == 0) cached = inner;
				else break;
			}
		}
		let defaultReduce = parser.stateSlot(stack.state, 4);
		if (defaultReduce > 0) {
			stack.reduce(defaultReduce);
			if (verbose) console.log(base + this.stackID(stack) + ` (via always-reduce ${parser.getName(defaultReduce & 65535)})`);
			return true;
		}
		if (stack.stack.length >= 8400) while (stack.stack.length > 6e3 && stack.forceReduce());
		let actions = this.tokens.getActions(stack);
		for (let i = 0; i < actions.length;) {
			let action = actions[i++], term = actions[i++], end = actions[i++];
			let last = i == actions.length || !split;
			let localStack = last ? stack : stack.split();
			let main = this.tokens.mainToken;
			localStack.apply(action, term, main ? main.start : localStack.pos, end);
			if (verbose) console.log(base + this.stackID(localStack) + ` (via ${(action & 65536) == 0 ? "shift" : `reduce of ${parser.getName(action & 65535)}`} for ${parser.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})`);
			if (last) return true;
			else if (localStack.pos > start) stacks.push(localStack);
			else split.push(localStack);
		}
		return false;
	}
	advanceFully(stack, newStacks) {
		let pos = stack.pos;
		for (;;) {
			if (!this.advanceStack(stack, null, null)) return false;
			if (stack.pos > pos) {
				pushStackDedup(stack, newStacks);
				return true;
			}
		}
	}
	runRecovery(stacks, tokens, newStacks) {
		let finished = null, restarted = false;
		for (let i = 0; i < stacks.length; i++) {
			let stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
			let base = verbose ? this.stackID(stack) + " -> " : "";
			if (stack.deadEnd) {
				if (restarted) continue;
				restarted = true;
				stack.restart();
				if (verbose) console.log(base + this.stackID(stack) + " (restarted)");
				if (this.advanceFully(stack, newStacks)) continue;
			}
			let force = stack.split(), forceBase = base;
			for (let j = 0; j < 10 && force.forceReduce(); j++) {
				if (verbose) console.log(forceBase + this.stackID(force) + " (via force-reduce)");
				if (this.advanceFully(force, newStacks)) break;
				if (verbose) forceBase = this.stackID(force) + " -> ";
			}
			for (let insert of stack.recoverByInsert(token)) {
				if (verbose) console.log(base + this.stackID(insert) + " (via recover-insert)");
				this.advanceFully(insert, newStacks);
			}
			if (this.stream.end > stack.pos) {
				if (tokenEnd == stack.pos) {
					tokenEnd++;
					token = 0;
				}
				stack.recoverByDelete(token, tokenEnd);
				if (verbose) console.log(base + this.stackID(stack) + ` (via recover-delete ${this.parser.getName(token)})`);
				pushStackDedup(stack, newStacks);
			} else if (!finished || finished.score < stack.score) finished = stack;
		}
		return finished;
	}
	stackToTree(stack) {
		stack.close();
		return Tree.build({
			buffer: StackBufferCursor.create(stack),
			nodeSet: this.parser.nodeSet,
			topID: this.topTerm,
			maxBufferLength: this.parser.bufferLength,
			reused: this.reused,
			start: this.ranges[0].from,
			length: stack.pos - this.ranges[0].from,
			minRepeatType: this.parser.minRepeatTerm
		});
	}
	stackID(stack) {
		let id = (stackIDs || (stackIDs = /* @__PURE__ */ new WeakMap())).get(stack);
		if (!id) stackIDs.set(stack, id = String.fromCodePoint(this.nextStackID++));
		return id + stack;
	}
};
function pushStackDedup(stack, newStacks) {
	for (let i = 0; i < newStacks.length; i++) {
		let other = newStacks[i];
		if (other.pos == stack.pos && other.sameState(stack)) {
			if (newStacks[i].score < stack.score) newStacks[i] = stack;
			return;
		}
	}
	newStacks.push(stack);
}
var Dialect = class {
	constructor(source, flags, disabled) {
		this.source = source;
		this.flags = flags;
		this.disabled = disabled;
	}
	allows(term) {
		return !this.disabled || this.disabled[term] == 0;
	}
};
var id = (x) => x;
/**
Context trackers are used to track stateful context (such as
indentation in the Python grammar, or parent elements in the XML
grammar) needed by external tokenizers. You declare them in a
grammar file as `@context exportName from "module"`.

Context values should be immutable, and can be updated (replaced)
on shift or reduce actions.

The export used in a `@context` declaration should be of this
type.
*/
var ContextTracker = class {
	/**
	Define a context tracker.
	*/
	constructor(spec) {
		this.start = spec.start;
		this.shift = spec.shift || id;
		this.reduce = spec.reduce || id;
		this.reuse = spec.reuse || id;
		this.hash = spec.hash || (() => 0);
		this.strict = spec.strict !== false;
	}
};
/**
Holds the parse tables for a given grammar, as generated by
`lezer-generator`, and provides [methods](#common.Parser) to parse
content with.
*/
var LRParser = class LRParser extends Parser {
	/**
	@internal
	*/
	constructor(spec) {
		super();
		/**
		@internal
		*/
		this.wrappers = [];
		if (spec.version != 14) throw new RangeError(`Parser version (${spec.version}) doesn't match runtime version (14)`);
		let nodeNames = spec.nodeNames.split(" ");
		this.minRepeatTerm = nodeNames.length;
		for (let i = 0; i < spec.repeatNodeCount; i++) nodeNames.push("");
		let topTerms = Object.keys(spec.topRules).map((r) => spec.topRules[r][1]);
		let nodeProps = [];
		for (let i = 0; i < nodeNames.length; i++) nodeProps.push([]);
		function setProp(nodeID, prop, value) {
			nodeProps[nodeID].push([prop, prop.deserialize(String(value))]);
		}
		if (spec.nodeProps) for (let propSpec of spec.nodeProps) {
			let prop = propSpec[0];
			if (typeof prop == "string") prop = NodeProp[prop];
			for (let i = 1; i < propSpec.length;) {
				let next = propSpec[i++];
				if (next >= 0) setProp(next, prop, propSpec[i++]);
				else {
					let value = propSpec[i + -next];
					for (let j = -next; j > 0; j--) setProp(propSpec[i++], prop, value);
					i++;
				}
			}
		}
		this.nodeSet = new NodeSet(nodeNames.map((name, i) => NodeType.define({
			name: i >= this.minRepeatTerm ? void 0 : name,
			id: i,
			props: nodeProps[i],
			top: topTerms.indexOf(i) > -1,
			error: i == 0,
			skipped: spec.skippedNodes && spec.skippedNodes.indexOf(i) > -1
		})));
		if (spec.propSources) this.nodeSet = this.nodeSet.extend(...spec.propSources);
		this.strict = false;
		this.bufferLength = DefaultBufferLength;
		let tokenArray = decodeArray(spec.tokenData);
		this.context = spec.context;
		this.specializerSpecs = spec.specialized || [];
		this.specialized = new Uint16Array(this.specializerSpecs.length);
		for (let i = 0; i < this.specializerSpecs.length; i++) this.specialized[i] = this.specializerSpecs[i].term;
		this.specializers = this.specializerSpecs.map(getSpecializer);
		this.states = decodeArray(spec.states, Uint32Array);
		this.data = decodeArray(spec.stateData);
		this.goto = decodeArray(spec.goto);
		this.maxTerm = spec.maxTerm;
		this.tokenizers = spec.tokenizers.map((value) => typeof value == "number" ? new TokenGroup(tokenArray, value) : value);
		this.topRules = spec.topRules;
		this.dialects = spec.dialects || {};
		this.dynamicPrecedences = spec.dynamicPrecedences || null;
		this.tokenPrecTable = spec.tokenPrec;
		this.termNames = spec.termNames || null;
		this.maxNode = this.nodeSet.types.length - 1;
		this.dialect = this.parseDialect();
		this.top = this.topRules[Object.keys(this.topRules)[0]];
	}
	createParse(input, fragments, ranges) {
		let parse = new Parse(this, input, fragments, ranges);
		for (let w of this.wrappers) parse = w(parse, input, fragments, ranges);
		return parse;
	}
	/**
	Get a goto table entry @internal
	*/
	getGoto(state, term, loose = false) {
		let table = this.goto;
		if (term >= table[0]) return -1;
		for (let pos = table[term + 1];;) {
			let groupTag = table[pos++], last = groupTag & 1;
			let target = table[pos++];
			if (last && loose) return target;
			for (let end = pos + (groupTag >> 1); pos < end; pos++) if (table[pos] == state) return target;
			if (last) return -1;
		}
	}
	/**
	Check if this state has an action for a given terminal @internal
	*/
	hasAction(state, terminal) {
		let data = this.data;
		for (let set = 0; set < 2; set++) for (let i = this.stateSlot(state, set ? 2 : 1), next;; i += 3) {
			if ((next = data[i]) == 65535) if (data[i + 1] == 1) next = data[i = pair(data, i + 2)];
			else if (data[i + 1] == 2) return pair(data, i + 2);
			else break;
			if (next == terminal || next == 0) return pair(data, i + 1);
		}
		return 0;
	}
	/**
	@internal
	*/
	stateSlot(state, slot) {
		return this.states[state * 6 + slot];
	}
	/**
	@internal
	*/
	stateFlag(state, flag) {
		return (this.stateSlot(state, 0) & flag) > 0;
	}
	/**
	@internal
	*/
	validAction(state, action) {
		return !!this.allActions(state, (a) => a == action ? true : null);
	}
	/**
	@internal
	*/
	allActions(state, action) {
		let deflt = this.stateSlot(state, 4);
		let result = deflt ? action(deflt) : void 0;
		for (let i = this.stateSlot(state, 1); result == null; i += 3) {
			if (this.data[i] == 65535) if (this.data[i + 1] == 1) i = pair(this.data, i + 2);
			else break;
			result = action(pair(this.data, i + 1));
		}
		return result;
	}
	/**
	Get the states that can follow this one through shift actions or
	goto jumps. @internal
	*/
	nextStates(state) {
		let result = [];
		for (let i = this.stateSlot(state, 1);; i += 3) {
			if (this.data[i] == 65535) if (this.data[i + 1] == 1) i = pair(this.data, i + 2);
			else break;
			if ((this.data[i + 2] & 1) == 0) {
				let value = this.data[i + 1];
				if (!result.some((v, i) => i & 1 && v == value)) result.push(this.data[i], value);
			}
		}
		return result;
	}
	/**
	Configure the parser. Returns a new parser instance that has the
	given settings modified. Settings not provided in `config` are
	kept from the original parser.
	*/
	configure(config) {
		let copy = Object.assign(Object.create(LRParser.prototype), this);
		if (config.props) copy.nodeSet = this.nodeSet.extend(...config.props);
		if (config.top) {
			let info = this.topRules[config.top];
			if (!info) throw new RangeError(`Invalid top rule name ${config.top}`);
			copy.top = info;
		}
		if (config.tokenizers) copy.tokenizers = this.tokenizers.map((t) => {
			let found = config.tokenizers.find((r) => r.from == t);
			return found ? found.to : t;
		});
		if (config.specializers) {
			copy.specializers = this.specializers.slice();
			copy.specializerSpecs = this.specializerSpecs.map((s, i) => {
				let found = config.specializers.find((r) => r.from == s.external);
				if (!found) return s;
				let spec = Object.assign(Object.assign({}, s), { external: found.to });
				copy.specializers[i] = getSpecializer(spec);
				return spec;
			});
		}
		if (config.contextTracker) copy.context = config.contextTracker;
		if (config.dialect) copy.dialect = this.parseDialect(config.dialect);
		if (config.strict != null) copy.strict = config.strict;
		if (config.wrap) copy.wrappers = copy.wrappers.concat(config.wrap);
		if (config.bufferLength != null) copy.bufferLength = config.bufferLength;
		return copy;
	}
	/**
	Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
	are registered for this parser.
	*/
	hasWrappers() {
		return this.wrappers.length > 0;
	}
	/**
	Returns the name associated with a given term. This will only
	work for all terms when the parser was generated with the
	`--names` option. By default, only the names of tagged terms are
	stored.
	*/
	getName(term) {
		return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.nodeSet.types[term].name || term);
	}
	/**
	The eof term id is always allocated directly after the node
	types. @internal
	*/
	get eofTerm() {
		return this.maxNode + 1;
	}
	/**
	The type of top node produced by the parser.
	*/
	get topNode() {
		return this.nodeSet.types[this.top[1]];
	}
	/**
	@internal
	*/
	dynamicPrecedence(term) {
		let prec = this.dynamicPrecedences;
		return prec == null ? 0 : prec[term] || 0;
	}
	/**
	@internal
	*/
	parseDialect(dialect) {
		let values = Object.keys(this.dialects), flags = values.map(() => false);
		if (dialect) for (let part of dialect.split(" ")) {
			let id = values.indexOf(part);
			if (id >= 0) flags[id] = true;
		}
		let disabled = null;
		for (let i = 0; i < values.length; i++) if (!flags[i]) for (let j = this.dialects[values[i]], id; (id = this.data[j++]) != 65535;) (disabled || (disabled = new Uint8Array(this.maxTerm + 1)))[id] = 1;
		return new Dialect(dialect, flags, disabled);
	}
	/**
	Used by the output of the parser generator. Not available to
	user code. @hide
	*/
	static deserialize(spec) {
		return new LRParser(spec);
	}
};
function pair(data, off) {
	return data[off] | data[off + 1] << 16;
}
function findFinished(stacks) {
	let best = null;
	for (let stack of stacks) {
		let stopped = stack.p.stoppedAt;
		if ((stack.pos == stack.p.stream.end || stopped != null && stack.pos > stopped) && stack.p.parser.stateFlag(stack.state, 2) && (!best || best.score < stack.score)) best = stack;
	}
	return best;
}
function getSpecializer(spec) {
	if (spec.external) {
		let mask = spec.extend ? 1 : 0;
		return (value, stack) => spec.external(value, stack) << 1 | mask;
	}
	return spec.get;
}
//#endregion
//#region ../../../node_modules/.pnpm/@lezer+javascript@1.5.4/node_modules/@lezer/javascript/dist/index.js
var noSemi = 316, noSemiType = 317, incdec = 1, incdecPrefix = 2, questionDot = 3, JSXStartTag = 4, insertSemi = 318, spaces = 320, newline = 321, LineComment = 5, BlockComment = 6, Dialect_jsx = 0;
var space = [
	9,
	10,
	11,
	12,
	13,
	32,
	133,
	160,
	5760,
	8192,
	8193,
	8194,
	8195,
	8196,
	8197,
	8198,
	8199,
	8200,
	8201,
	8202,
	8232,
	8233,
	8239,
	8287,
	12288
];
var braceR = 125, semicolon = 59, slash = 47, star = 42, plus = 43, minus = 45, lt = 60, comma = 44, question = 63, dot = 46, bracketL = 91;
var trackNewline = new ContextTracker({
	start: false,
	shift(context, term) {
		return term == LineComment || term == BlockComment || term == spaces ? context : term == newline;
	},
	strict: false
});
var insertSemicolon = new ExternalTokenizer((input, stack) => {
	let { next } = input;
	if (next == braceR || next == -1 || stack.context) input.acceptToken(insertSemi);
}, {
	contextual: true,
	fallback: true
});
var noSemicolon = new ExternalTokenizer((input, stack) => {
	let { next } = input, after;
	if (space.indexOf(next) > -1) return;
	if (next == slash && ((after = input.peek(1)) == slash || after == star)) return;
	if (next != braceR && next != semicolon && next != -1 && !stack.context) input.acceptToken(noSemi);
}, { contextual: true });
var noSemicolonType = new ExternalTokenizer((input, stack) => {
	if (input.next == bracketL && !stack.context) input.acceptToken(noSemiType);
}, { contextual: true });
var operatorToken = new ExternalTokenizer((input, stack) => {
	let { next } = input;
	if (next == plus || next == minus) {
		input.advance();
		if (next == input.next) {
			input.advance();
			let mayPostfix = !stack.context && stack.canShift(incdec);
			input.acceptToken(mayPostfix ? incdec : incdecPrefix);
		}
	} else if (next == question && input.peek(1) == dot) {
		input.advance();
		input.advance();
		if (input.next < 48 || input.next > 57) input.acceptToken(questionDot);
	}
}, { contextual: true });
function identifierChar(ch, start) {
	return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch == 95 || ch >= 192 || !start && ch >= 48 && ch <= 57;
}
var jsx = new ExternalTokenizer((input, stack) => {
	if (input.next != lt || !stack.dialectEnabled(Dialect_jsx)) return;
	input.advance();
	if (input.next == slash) return;
	let back = 0;
	while (space.indexOf(input.next) > -1) {
		input.advance();
		back++;
	}
	if (identifierChar(input.next, true)) {
		input.advance();
		back++;
		while (identifierChar(input.next, false)) {
			input.advance();
			back++;
		}
		while (space.indexOf(input.next) > -1) {
			input.advance();
			back++;
		}
		if (input.next == comma) return;
		for (let i = 0;; i++) {
			if (i == 7) {
				if (!identifierChar(input.next, true)) return;
				break;
			}
			if (input.next != "extends".charCodeAt(i)) break;
			input.advance();
			back++;
		}
	}
	input.acceptToken(JSXStartTag, -back);
});
var jsHighlight = styleTags({
	"get set async static": tags.modifier,
	"for while do if else switch try catch finally return throw break continue default case defer": tags.controlKeyword,
	"in of await yield void typeof delete instanceof as satisfies": tags.operatorKeyword,
	"let var const using function class extends": tags.definitionKeyword,
	"import export from": tags.moduleKeyword,
	"with debugger new": tags.keyword,
	TemplateString: tags.special(tags.string),
	super: tags.atom,
	BooleanLiteral: tags.bool,
	this: tags.self,
	null: tags.null,
	Star: tags.modifier,
	VariableName: tags.variableName,
	"CallExpression/VariableName TaggedTemplateExpression/VariableName": tags.function(tags.variableName),
	VariableDefinition: tags.definition(tags.variableName),
	Label: tags.labelName,
	PropertyName: tags.propertyName,
	PrivatePropertyName: tags.special(tags.propertyName),
	"CallExpression/MemberExpression/PropertyName": tags.function(tags.propertyName),
	"FunctionDeclaration/VariableDefinition": tags.function(tags.definition(tags.variableName)),
	"ClassDeclaration/VariableDefinition": tags.definition(tags.className),
	"NewExpression/VariableName": tags.className,
	PropertyDefinition: tags.definition(tags.propertyName),
	PrivatePropertyDefinition: tags.definition(tags.special(tags.propertyName)),
	UpdateOp: tags.updateOperator,
	"LineComment Hashbang": tags.lineComment,
	BlockComment: tags.blockComment,
	Number: tags.number,
	String: tags.string,
	Escape: tags.escape,
	ArithOp: tags.arithmeticOperator,
	LogicOp: tags.logicOperator,
	BitOp: tags.bitwiseOperator,
	CompareOp: tags.compareOperator,
	RegExp: tags.regexp,
	Equals: tags.definitionOperator,
	Arrow: tags.function(tags.punctuation),
	": Spread": tags.punctuation,
	"( )": tags.paren,
	"[ ]": tags.squareBracket,
	"{ }": tags.brace,
	"InterpolationStart InterpolationEnd": tags.special(tags.brace),
	".": tags.derefOperator,
	", ;": tags.separator,
	"@": tags.meta,
	TypeName: tags.typeName,
	TypeDefinition: tags.definition(tags.typeName),
	"type enum interface implements namespace module declare": tags.definitionKeyword,
	"abstract global Privacy readonly override": tags.modifier,
	"is keyof unique infer asserts": tags.operatorKeyword,
	JSXAttributeValue: tags.attributeValue,
	JSXText: tags.content,
	"JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": tags.angleBracket,
	"JSXIdentifier JSXNameSpacedName": tags.tagName,
	"JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": tags.attributeName,
	"JSXBuiltin/JSXIdentifier": tags.standard(tags.tagName)
});
var spec_identifier = {
	__proto__: null,
	export: 20,
	as: 25,
	from: 33,
	default: 36,
	async: 41,
	function: 42,
	in: 52,
	out: 55,
	const: 56,
	extends: 60,
	this: 64,
	true: 72,
	false: 72,
	null: 84,
	void: 88,
	typeof: 92,
	super: 108,
	new: 142,
	delete: 154,
	yield: 163,
	await: 167,
	class: 172,
	public: 235,
	private: 235,
	protected: 235,
	readonly: 237,
	instanceof: 256,
	satisfies: 259,
	import: 292,
	keyof: 349,
	unique: 353,
	infer: 359,
	asserts: 395,
	is: 397,
	abstract: 417,
	implements: 419,
	type: 421,
	let: 424,
	var: 426,
	using: 429,
	interface: 435,
	enum: 439,
	namespace: 445,
	module: 447,
	declare: 451,
	global: 455,
	defer: 471,
	for: 476,
	of: 485,
	while: 488,
	with: 492,
	do: 496,
	if: 500,
	else: 502,
	switch: 506,
	case: 512,
	try: 518,
	catch: 522,
	finally: 526,
	return: 530,
	throw: 534,
	break: 538,
	continue: 542,
	debugger: 546
};
var spec_word = {
	__proto__: null,
	async: 129,
	get: 131,
	set: 133,
	declare: 195,
	public: 197,
	private: 197,
	protected: 197,
	static: 199,
	abstract: 201,
	override: 203,
	readonly: 209,
	accessor: 211,
	new: 401
};
var spec_LessThan = {
	__proto__: null,
	"<": 193
};
var parser$1 = LRParser.deserialize({
	version: 14,
	states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
	stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
	goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
	nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
	maxTerm: 380,
	context: trackNewline,
	nodeProps: [
		[
			"isolate",
			-8,
			5,
			6,
			14,
			37,
			39,
			51,
			53,
			55,
			""
		],
		[
			"group",
			-26,
			9,
			17,
			19,
			68,
			207,
			211,
			215,
			216,
			218,
			221,
			224,
			234,
			237,
			243,
			245,
			247,
			249,
			252,
			258,
			264,
			266,
			268,
			270,
			272,
			274,
			275,
			"Statement",
			-34,
			13,
			14,
			32,
			35,
			36,
			42,
			51,
			54,
			55,
			57,
			62,
			70,
			72,
			76,
			80,
			82,
			84,
			85,
			110,
			111,
			120,
			121,
			136,
			139,
			141,
			142,
			143,
			144,
			145,
			147,
			148,
			167,
			169,
			171,
			"Expression",
			-23,
			31,
			33,
			37,
			41,
			43,
			45,
			173,
			175,
			177,
			178,
			180,
			181,
			182,
			184,
			185,
			186,
			188,
			189,
			190,
			201,
			203,
			205,
			206,
			"Type",
			-3,
			88,
			103,
			109,
			"ClassItem"
		],
		[
			"openedBy",
			23,
			"<",
			38,
			"InterpolationStart",
			56,
			"[",
			60,
			"{",
			73,
			"(",
			160,
			"JSXStartCloseTag"
		],
		[
			"closedBy",
			-2,
			24,
			168,
			">",
			40,
			"InterpolationEnd",
			50,
			"]",
			61,
			"}",
			74,
			")",
			165,
			"JSXEndTag"
		]
	],
	propSources: [jsHighlight],
	skippedNodes: [
		0,
		5,
		6,
		278
	],
	repeatNodeCount: 37,
	tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
	tokenizers: [
		noSemicolon,
		noSemicolonType,
		operatorToken,
		jsx,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		insertSemicolon,
		new LocalTokenGroup("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340),
		new LocalTokenGroup("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)
	],
	topRules: {
		"Script": [0, 7],
		"SingleExpression": [1, 276],
		"SingleClassItem": [2, 277]
	},
	dialects: {
		jsx: 0,
		ts: 15175
	},
	dynamicPrecedences: {
		"80": 1,
		"82": 1,
		"94": 1,
		"169": 1,
		"199": 1
	},
	specialized: [
		{
			term: 327,
			get: (value) => spec_identifier[value] || -1
		},
		{
			term: 343,
			get: (value) => spec_word[value] || -1
		},
		{
			term: 95,
			get: (value) => spec_LessThan[value] || -1
		}
	],
	tokenPrec: 15201
});
//#endregion
//#region ../../../node_modules/.pnpm/@codemirror+lang-javascript@6.2.4/node_modules/@codemirror/lang-javascript/dist/index.js
/**
A collection of JavaScript-related
[snippets](https://codemirror.net/6/docs/ref/#autocomplete.snippet).
*/
var snippets = [
	/* @__PURE__ */ snippetCompletion("function ${name}(${params}) {\n	${}\n}", {
		label: "function",
		detail: "definition",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
		label: "for",
		detail: "loop",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("for (let ${name} of ${collection}) {\n	${}\n}", {
		label: "for",
		detail: "of loop",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("do {\n	${}\n} while (${})", {
		label: "do",
		detail: "loop",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("while (${}) {\n	${}\n}", {
		label: "while",
		detail: "loop",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("try {\n	${}\n} catch (${error}) {\n	${}\n}", {
		label: "try",
		detail: "/ catch block",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("if (${}) {\n	${}\n}", {
		label: "if",
		detail: "block",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("if (${}) {\n	${}\n} else {\n	${}\n}", {
		label: "if",
		detail: "/ else block",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("class ${name} {\n	constructor(${params}) {\n		${}\n	}\n}", {
		label: "class",
		detail: "definition",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("import {${names}} from \"${module}\"\n${}", {
		label: "import",
		detail: "named",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("import ${name} from \"${module}\"\n${}", {
		label: "import",
		detail: "default",
		type: "keyword"
	})
];
/**
A collection of snippet completions for TypeScript. Includes the
JavaScript [snippets](https://codemirror.net/6/docs/ref/#lang-javascript.snippets).
*/
var typescriptSnippets = /* @__PURE__ */ snippets.concat([
	/* @__PURE__ */ snippetCompletion("interface ${name} {\n	${}\n}", {
		label: "interface",
		detail: "definition",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("type ${name} = ${type}", {
		label: "type",
		detail: "definition",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("enum ${name} {\n	${}\n}", {
		label: "enum",
		detail: "definition",
		type: "keyword"
	})
]);
var cache = /* @__PURE__ */ new NodeWeakMap();
var ScopeNodes = /* @__PURE__ */ new Set([
	"Script",
	"Block",
	"FunctionExpression",
	"FunctionDeclaration",
	"ArrowFunction",
	"MethodDeclaration",
	"ForStatement"
]);
function defID(type) {
	return (node, def) => {
		let id = node.node.getChild("VariableDefinition");
		if (id) def(id, type);
		return true;
	};
}
var functionContext = ["FunctionDeclaration"];
var gatherCompletions = {
	FunctionDeclaration: /* @__PURE__ */ defID("function"),
	ClassDeclaration: /* @__PURE__ */ defID("class"),
	ClassExpression: () => true,
	EnumDeclaration: /* @__PURE__ */ defID("constant"),
	TypeAliasDeclaration: /* @__PURE__ */ defID("type"),
	NamespaceDeclaration: /* @__PURE__ */ defID("namespace"),
	VariableDefinition(node, def) {
		if (!node.matchContext(functionContext)) def(node, "variable");
	},
	TypeDefinition(node, def) {
		def(node, "type");
	},
	__proto__: null
};
function getScope(doc, node) {
	let cached = cache.get(node);
	if (cached) return cached;
	let completions = [], top = true;
	function def(node, type) {
		let name = doc.sliceString(node.from, node.to);
		completions.push({
			label: name,
			type
		});
	}
	node.cursor(IterMode.IncludeAnonymous).iterate((node) => {
		if (top) top = false;
		else if (node.name) {
			let gather = gatherCompletions[node.name];
			if (gather && gather(node, def) || ScopeNodes.has(node.name)) return false;
		} else if (node.to - node.from > 8192) {
			for (let c of getScope(doc, node.node)) completions.push(c);
			return false;
		}
	});
	cache.set(node, completions);
	return completions;
}
var Identifier = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/;
var dontComplete = [
	"TemplateString",
	"String",
	"RegExp",
	"LineComment",
	"BlockComment",
	"VariableDefinition",
	"TypeDefinition",
	"Label",
	"PropertyDefinition",
	"PropertyName",
	"PrivatePropertyDefinition",
	"PrivatePropertyName",
	"JSXText",
	"JSXAttributeValue",
	"JSXOpenTag",
	"JSXCloseTag",
	"JSXSelfClosingTag",
	".",
	"?."
];
/**
Completion source that looks up locally defined names in
JavaScript code.
*/
function localCompletionSource(context) {
	let inner = syntaxTree(context.state).resolveInner(context.pos, -1);
	if (dontComplete.indexOf(inner.name) > -1) return null;
	let isWord = inner.name == "VariableName" || inner.to - inner.from < 20 && Identifier.test(context.state.sliceDoc(inner.from, inner.to));
	if (!isWord && !context.explicit) return null;
	let options = [];
	for (let pos = inner; pos; pos = pos.parent) if (ScopeNodes.has(pos.name)) options = options.concat(getScope(context.state.doc, pos));
	return {
		options,
		from: isWord ? inner.from : context.pos,
		validFor: Identifier
	};
}
/**
A language provider based on the [Lezer JavaScript
parser](https://github.com/lezer-parser/javascript), extended with
highlighting and indentation information.
*/
var javascriptLanguage = /* @__PURE__ */ LRLanguage.define({
	name: "javascript",
	parser: /* @__PURE__ */ parser$1.configure({ props: [/* @__PURE__ */ indentNodeProp.add({
		IfStatement: /* @__PURE__ */ continuedIndent({ except: /^\s*({|else\b)/ }),
		TryStatement: /* @__PURE__ */ continuedIndent({ except: /^\s*({|catch\b|finally\b)/ }),
		LabeledStatement: flatIndent,
		SwitchBody: (context) => {
			let after = context.textAfter, closed = /^\s*\}/.test(after), isCase = /^\s*(case|default)\b/.test(after);
			return context.baseIndent + (closed ? 0 : isCase ? 1 : 2) * context.unit;
		},
		Block: /* @__PURE__ */ delimitedIndent({ closing: "}" }),
		ArrowFunction: (cx) => cx.baseIndent + cx.unit,
		"TemplateString BlockComment": () => null,
		"Statement Property": /* @__PURE__ */ continuedIndent({ except: /^\s*{/ }),
		JSXElement(context) {
			let closed = /^\s*<\//.test(context.textAfter);
			return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
		},
		JSXEscape(context) {
			let closed = /\s*\}/.test(context.textAfter);
			return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
		},
		"JSXOpenTag JSXSelfClosingTag"(context) {
			return context.column(context.node.from) + context.unit;
		}
	}), /* @__PURE__ */ foldNodeProp.add({
		"Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": foldInside,
		BlockComment(tree) {
			return {
				from: tree.from + 2,
				to: tree.to - 2
			};
		}
	})] }),
	languageData: {
		closeBrackets: { brackets: [
			"(",
			"[",
			"{",
			"'",
			"\"",
			"`"
		] },
		commentTokens: {
			line: "//",
			block: {
				open: "/*",
				close: "*/"
			}
		},
		indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
		wordChars: "$"
	}
});
var jsxSublanguage = {
	test: (node) => /^JSX/.test(node.name),
	facet: /* @__PURE__ */ defineLanguageFacet({ commentTokens: { block: {
		open: "{/*",
		close: "*/}"
	} } })
};
/**
A language provider for TypeScript.
*/
var typescriptLanguage = /* @__PURE__ */ javascriptLanguage.configure({ dialect: "ts" }, "typescript");
/**
Language provider for JSX.
*/
var jsxLanguage = /* @__PURE__ */ javascriptLanguage.configure({
	dialect: "jsx",
	props: [/* @__PURE__ */ sublanguageProp.add((n) => n.isTop ? [jsxSublanguage] : void 0)]
});
/**
Language provider for JSX + TypeScript.
*/
var tsxLanguage = /* @__PURE__ */ javascriptLanguage.configure({
	dialect: "jsx ts",
	props: [/* @__PURE__ */ sublanguageProp.add((n) => n.isTop ? [jsxSublanguage] : void 0)]
}, "typescript");
var kwCompletion = (name) => ({
	label: name,
	type: "keyword"
});
var keywords = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(kwCompletion);
var typescriptKeywords = /* @__PURE__ */ keywords.concat(/* @__PURE__ */ [
	"declare",
	"implements",
	"private",
	"protected",
	"public"
].map(kwCompletion));
/**
JavaScript support. Includes [snippet](https://codemirror.net/6/docs/ref/#lang-javascript.snippets)
and local variable completion.
*/
function javascript(config = {}) {
	let lang = config.jsx ? config.typescript ? tsxLanguage : jsxLanguage : config.typescript ? typescriptLanguage : javascriptLanguage;
	let completions = config.typescript ? typescriptSnippets.concat(typescriptKeywords) : snippets.concat(keywords);
	return new LanguageSupport(lang, [
		javascriptLanguage.data.of({ autocomplete: ifNotIn(dontComplete, completeFromList(completions)) }),
		javascriptLanguage.data.of({ autocomplete: localCompletionSource }),
		config.jsx ? autoCloseTags : []
	]);
}
function findOpenTag(node) {
	for (;;) {
		if (node.name == "JSXOpenTag" || node.name == "JSXSelfClosingTag" || node.name == "JSXFragmentTag") return node;
		if (node.name == "JSXEscape" || !node.parent) return null;
		node = node.parent;
	}
}
function elementName(doc, tree, max = doc.length) {
	for (let ch = tree === null || tree === void 0 ? void 0 : tree.firstChild; ch; ch = ch.nextSibling) if (ch.name == "JSXIdentifier" || ch.name == "JSXBuiltin" || ch.name == "JSXNamespacedName" || ch.name == "JSXMemberExpression") return doc.sliceString(ch.from, Math.min(ch.to, max));
	return "";
}
var android = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent);
/**
Extension that will automatically insert JSX close tags when a `>` or
`/` is typed.
*/
var autoCloseTags = /* @__PURE__ */ EditorView.inputHandler.of((view, from, to, text, defaultInsert) => {
	if ((android ? view.composing : view.compositionStarted) || view.state.readOnly || from != to || text != ">" && text != "/" || !javascriptLanguage.isActiveAt(view.state, from, -1)) return false;
	let base = defaultInsert(), { state } = base;
	let closeTags = state.changeByRange((range) => {
		var _a;
		let { head } = range, around = syntaxTree(state).resolveInner(head - 1, -1), name;
		if (around.name == "JSXStartTag") around = around.parent;
		if (state.doc.sliceString(head - 1, head) != text || around.name == "JSXAttributeValue" && around.to > head);
		else if (text == ">" && around.name == "JSXFragmentTag") return {
			range,
			changes: {
				from: head,
				insert: `</>`
			}
		};
		else if (text == "/" && around.name == "JSXStartCloseTag") {
			let empty = around.parent, base = empty.parent;
			if (base && empty.from == head - 2 && ((name = elementName(state.doc, base.firstChild, head)) || ((_a = base.firstChild) === null || _a === void 0 ? void 0 : _a.name) == "JSXFragmentTag")) {
				let insert = `${name}>`;
				return {
					range: EditorSelection.cursor(head + insert.length, -1),
					changes: {
						from: head,
						insert
					}
				};
			}
		} else if (text == ">") {
			let openTag = findOpenTag(around);
			if (openTag && openTag.name == "JSXOpenTag" && !/^\/?>|^<\//.test(state.doc.sliceString(head, head + 2)) && (name = elementName(state.doc, openTag, head))) return {
				range,
				changes: {
					from: head,
					insert: `</${name}>`
				}
			};
		}
		return { range };
	});
	if (closeTags.changes.empty) return false;
	view.dispatch([base, state.update(closeTags, {
		userEvent: "input.complete",
		scrollIntoView: true
	})]);
	return true;
});
//#endregion
//#region ../../@n8n/codemirror-lang/src/expressions/grammar.ts
var parser = LRParser.deserialize({
	version: 14,
	states: "nQQOPOOOOOO'#Cb'#CbOOOO'#C`'#C`QQOPOOOOOO-E6^-E6^",
	stateData: "Y~OQPORPO~O",
	goto: "bVPPPPWP^QRORSRTQOR",
	nodeNames: "⚠ Program Plaintext Resolvable",
	maxTerm: 6,
	skippedNodes: [0],
	repeatNodeCount: 1,
	tokenData: "%o~RTO#ob#o#p!h#p;'Sb;'S;=`!]<%lOb~gTQ~O#ob#o#pv#p;'Sb;'S;=`!]<%lOb~yUO#ob#p;'Sb;'S;=`!]<%l~b~Ob~~!c~!`P;=`<%lb~!hOQ~~!kVO#ob#o#p#Q#p;'Sb;'S;=`!]<%l~b~Ob~~!c~#TVO#O#Q#O#P#j#P#q#Q#q#r%Q#r;'S#Q;'S;=`%i<%lO#Q~#mVO#O#Q#O#P#j#P#q#Q#q#r$S#r;'S#Q;'S;=`%i<%lO#Q~$VTO#q#Q#q#r$f#r;'S#Q;'S;=`%i<%lO#Q~$kVR~O#O#Q#O#P#j#P#q#Q#q#r%Q#r;'S#Q;'S;=`%i<%lO#Q~%TTO#q#Q#q#r%d#r;'S#Q;'S;=`%i<%lO#Q~%iOR~~%lP;=`<%l#Q",
	tokenizers: [0],
	topRules: { Program: [0, 1] },
	tokenPrec: 0
});
//#endregion
//#region ../../@n8n/codemirror-lang/src/expressions/index.ts
var expressionParser = parser;
var parserWithMetaData = parser.configure({ props: [foldNodeProp.add({ Application: foldInside }), styleTags({
	OpenMarker: tags.brace,
	CloseMarker: tags.brace,
	Plaintext: tags.content,
	Resolvable: tags.string
})] });
LRLanguage.define({
	parser: parserWithMetaData,
	languageData: { commentTokens: { line: ";" } }
});
//#endregion
export { deleteToLineStart as $, styleTags as $t, copyLineDown as A, Facet as An, transposeChars as At, cursorLineDown as B, findClusterBreak as Bn, foldAll as Bt, ifIn as C, tooltips as Cn, selectLineStart as Ct, pickedCompletion as D, Compartment as Dn, splitLine as Dt, moveCompletionSelection as E, CharCategory as En, selectPageUp as Et, cursorDocStart as F, StateField as Fn, LanguageSupport as Ft, cursorPageDown as G, foldState as Gt, cursorLineStart as H, foldGutter as Ht, cursorGroupLeft as I, Text as In, bracketMatching as It, deleteCharForward as J, indentOnInput as Jt, cursorPageUp as K, getIndentUnit as Kt, cursorGroupRight as L, codePointAt as Ln, continuedIndent as Lt, cursorCharLeft as M, RangeSet as Mn, undoSelection as Mt, cursorCharRight as N, RangeSetBuilder as Nn, HighlightStyle as Nt, snippetCompletion as O, EditorSelection as On, toggleBlockComment as Ot, cursorDocEnd as P, StateEffect as Pn, LRLanguage as Pt, deleteToLineEnd as Q, unfoldCode as Qt, cursorLineBoundaryBackward as R, codePointSize as Rn, delimitedIndent as Rt, deleteBracketPair as S, showTooltip as Sn, selectLineEnd as St, insertCompletionText as T, Annotation as Tn, selectPageDown as Tt, cursorLineUp as U, foldInside as Ut, cursorLineEnd as V, fromCodePoint as Vn, foldCode as Vt, cursorMatchingBracket as W, foldNodeProp as Wt, deleteGroupForward as X, syntaxTree as Xt, deleteGroupBackward as Y, syntaxHighlighting as Yt, deleteLine as Z, unfoldAll as Zt, closeBrackets as _, keymap as _n, selectGroupRight as _t, jsxLanguage as a, EditorView as an, insertNewlineAndIndent as at, completeFromList as b, runScopeHandlers as bn, selectLineBoundaryForward as bt, tsxLanguage as c, WidgetType as cn, moveLineDown as ct, ExternalTokenizer as d, getPanel as dn, selectAll as dt, tags as en, history as et, LRParser as f, gutter as fn, selectCharLeft as ft, autocompletion as g, hoverTooltip as gn, selectGroupLeft as gt, acceptCompletion as h, highlightSpecialChars as hn, selectDocStart as ht, javascriptLanguage as i, Decoration as in, indentMore as it, copyLineUp as j, Prec as jn, undo as jt, startCompletion as k, EditorState as kn, toggleComment as kt, typescriptLanguage as l, drawSelection as ln, moveLineUp as lt, CompletionContext as m, highlightActiveLineGutter as mn, selectDocEnd as mt, parserWithMetaData as n, NodeWeakMap as nn, historyKeymap as nt, localCompletionSource as o, GutterMarker as on, lineComment as ot, LocalTokenGroup as p, highlightActiveLine as pn, selectCharRight as pt, deleteCharBackward as q, indentNodeProp as qt, javascript as r, parseMixed as rn, indentLess as rt, snippets as s, ViewPlugin as sn, lineUncomment as st, expressionParser as t, IterMode as tn, historyField as tt, ContextTracker as u, dropCursor as un, redo as ut, closeBracketsKeymap as v, lineNumbers as vn, selectLine as vt, ifNotIn as w, crelt as wn, selectLineUp as wt, completionStatus as x, showPanel as xn, selectLineDown as xt, closeCompletion as y, logException as yn, selectLineBoundaryBackward as yt, cursorLineBoundaryForward as z, combineConfig as zn, ensureSyntaxTree as zt };

import { r as __export } from "./chunk-r2Y0G7H8.js";
import { Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, P as defineComponent, T as createBlock, at as renderSlot, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Hi as N8nIcon_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
var yu$1 = Object.create;
var He$1 = Object.defineProperty;
var Au$1 = Object.getOwnPropertyDescriptor;
var Bu$1 = Object.getOwnPropertyNames;
var wu$1 = Object.getPrototypeOf, xu$1 = Object.prototype.hasOwnProperty;
var sr$1 = (e) => {
	throw TypeError(e);
};
var _u$1 = (e, t) => () => (e && (t = e(e = 0)), t);
var At$2 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), We = (e, t) => {
	for (var r in t) He$1(e, r, {
		get: t[r],
		enumerable: !0
	});
}, ar$1 = (e, t, r, n) => {
	if (t && typeof t == "object" || typeof t == "function") for (let o of Bu$1(t)) !xu$1.call(e, o) && o !== r && He$1(e, o, {
		get: () => t[o],
		enumerable: !(n = Au$1(t, o)) || n.enumerable
	});
	return e;
};
var Me$2 = (e, t, r) => (r = e != null ? yu$1(wu$1(e)) : {}, ar$1(t || !e || !e.__esModule ? He$1(r, "default", {
	value: e,
	enumerable: !0
}) : r, e)), vu$1 = (e) => ar$1(He$1({}, "__esModule", { value: !0 }), e);
var bu$1 = (e, t, r) => t.has(e) || sr$1("Cannot " + r);
var Dr$2 = (e, t, r) => t.has(e) ? sr$1("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r);
var pe$1 = (e, t, r) => (bu$1(e, t, "access private method"), r);
var it$1 = At$2((ia$1, sn$1) => {
	"use strict";
	var on$1 = new Proxy(String, { get: () => on$1 });
	sn$1.exports = on$1;
});
var Tn$1 = {};
We(Tn$1, {
	default: () => _o$1,
	shouldHighlight: () => xo$1
});
var xo$1, _o$1, kn = _u$1(() => {
	xo$1 = () => !1, _o$1 = String;
});
var Pn$1 = At$2((bD, Xt$1) => {
	var g$1 = String, Ln$2 = function() {
		return {
			isColorSupported: !1,
			reset: g$1,
			bold: g$1,
			dim: g$1,
			italic: g$1,
			underline: g$1,
			inverse: g$1,
			hidden: g$1,
			strikethrough: g$1,
			black: g$1,
			red: g$1,
			green: g$1,
			yellow: g$1,
			blue: g$1,
			magenta: g$1,
			cyan: g$1,
			white: g$1,
			gray: g$1,
			bgBlack: g$1,
			bgRed: g$1,
			bgGreen: g$1,
			bgYellow: g$1,
			bgBlue: g$1,
			bgMagenta: g$1,
			bgCyan: g$1,
			bgWhite: g$1
		};
	};
	Xt$1.exports = Ln$2();
	Xt$1.exports.createColors = Ln$2;
});
var $n$1 = At$2((Ct$2) => {
	"use strict";
	Object.defineProperty(Ct$2, "__esModule", { value: !0 });
	Ct$2.codeFrameColumns = Mn$1;
	Ct$2.default = To$1;
	var In$1 = (kn(), vu$1(Tn$1)), Hn$1 = vo$1(Pn$1(), !0);
	function Wn$1(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (Wn$1 = function(n) {
			return n ? r : t;
		})(e);
	}
	function vo$1(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var r = Wn$1(t);
		if (r && r.has(e)) return r.get(e);
		var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var u in e) if (u !== "default" && {}.hasOwnProperty.call(e, u)) {
			var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
			i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
		}
		return n.default = e, r && r.set(e, n), n;
	}
	var bo$1 = Hn$1.default, Rn$1 = (e, t) => (r) => e(t(r)), Zt$1;
	function Oo$1(e) {
		if (e) return Zt$1 ??= (0, Hn$1.createColors)(!0), Zt$1;
		return bo$1;
	}
	var Yn$1 = !1;
	function So$1(e) {
		return {
			gutter: e.gray,
			marker: Rn$1(e.red, e.bold),
			message: Rn$1(e.red, e.bold)
		};
	}
	var jn$1 = /\r\n|[\n\r\u2028\u2029]/;
	function No$1(e, t, r) {
		let n = Object.assign({
			column: 0,
			line: -1
		}, e.start), o = Object.assign({}, n, e.end), { linesAbove: u = 2, linesBelow: i = 3 } = r || {}, s = n.line, a = n.column, D$1 = o.line, l$1 = o.column, d$1 = Math.max(s - (u + 1), 0), f$1 = Math.min(t.length, D$1 + i);
		s === -1 && (d$1 = 0), D$1 === -1 && (f$1 = t.length);
		let p = D$1 - s, c = {};
		if (p) for (let F$1 = 0; F$1 <= p; F$1++) {
			let m = F$1 + s;
			if (!a) c[m] = !0;
			else if (F$1 === 0) c[m] = [a, t[m - 1].length - a + 1];
			else if (F$1 === p) c[m] = [0, l$1];
			else c[m] = [0, t[m - F$1].length];
		}
		else a === l$1 ? a ? c[s] = [a, 0] : c[s] = !0 : c[s] = [a, l$1 - a];
		return {
			start: d$1,
			end: f$1,
			markerLines: c
		};
	}
	function Mn$1(e, t, r = {}) {
		let n = (r.highlightCode || r.forceColor) && (0, In$1.shouldHighlight)(r), o = Oo$1(r.forceColor), u = So$1(o), i = (F$1, m) => n ? F$1(m) : m, { start: a, end: D$1, markerLines: l$1 } = No$1(t, e.split(jn$1), r), d$1 = t.start && typeof t.start.column == "number", f$1 = String(D$1).length, c = (n ? (0, In$1.default)(e, r) : e).split(jn$1, D$1).slice(a, D$1).map((F$1, m) => {
			let E$1 = a + 1 + m, w$1 = ` ${` ${E$1}`.slice(-f$1)} |`, h = l$1[E$1], C = !l$1[E$1 + 1];
			if (h) {
				let k$1 = "";
				if (Array.isArray(h)) {
					let v$1 = F$1.slice(0, Math.max(h[0] - 1, 0)).replace(/[^\t]/g, " "), $$1 = h[1] || 1;
					k$1 = [
						`
 `,
						i(u.gutter, w$1.replace(/\d/g, " ")),
						" ",
						v$1,
						i(u.marker, "^").repeat($$1)
					].join(""), C && r.message && (k$1 += " " + i(u.message, r.message));
				}
				return [
					i(u.marker, ">"),
					i(u.gutter, w$1),
					F$1.length > 0 ? ` ${F$1}` : "",
					k$1
				].join("");
			} else return ` ${i(u.gutter, w$1)}${F$1.length > 0 ? ` ${F$1}` : ""}`;
		}).join(`
`);
		return r.message && !d$1 && (c = `${" ".repeat(f$1 + 1)}${r.message}
${c}`), n ? o.reset(c) : c;
	}
	function To$1(e, t, r, n = {}) {
		if (!Yn$1) {
			Yn$1 = !0;
			let u = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
			{
				let i = new Error(u);
				i.name = "DeprecationWarning", console.warn(new Error(u));
			}
		}
		return r = Math.max(r, 0), Mn$1(e, { start: {
			column: r,
			line: t
		} }, n);
	}
});
We({}, {
	__debug: () => di$1,
	check: () => fi$1,
	doc: () => nr$1,
	format: () => gu$1,
	formatWithCursor: () => Cu$1,
	getSupportInfo: () => pi$1,
	util: () => or$1,
	version: () => fu$1
});
var Ou$1 = (e, t, r, n) => {
	if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
}, ne$1 = Ou$1;
function Z() {}
Z.prototype = {
	diff: function(t, r) {
		var n, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = o.callback;
		typeof o == "function" && (u = o, o = {}), this.options = o;
		var i = this;
		function s(h) {
			return u ? (setTimeout(function() {
				u(void 0, h);
			}, 0), !0) : h;
		}
		t = this.castInput(t), r = this.castInput(r), t = this.removeEmpty(this.tokenize(t)), r = this.removeEmpty(this.tokenize(r));
		var a = r.length, D$1 = t.length, l$1 = 1, d$1 = a + D$1;
		o.maxEditLength && (d$1 = Math.min(d$1, o.maxEditLength));
		var f$1 = (n = o.timeout) !== null && n !== void 0 ? n : Infinity, p = Date.now() + f$1, c = [{
			oldPos: -1,
			lastComponent: void 0
		}], F$1 = this.extractCommon(c[0], r, t, 0);
		if (c[0].oldPos + 1 >= D$1 && F$1 + 1 >= a) return s([{
			value: this.join(r),
			count: r.length
		}]);
		var m = -Infinity, E$1 = Infinity;
		function A() {
			for (var h = Math.max(m, -l$1); h <= Math.min(E$1, l$1); h += 2) {
				var C = void 0, k$1 = c[h - 1], v$1 = c[h + 1];
				k$1 && (c[h - 1] = void 0);
				var $$1 = !1;
				if (v$1) {
					var ye$1 = v$1.oldPos - h;
					$$1 = v$1 && 0 <= ye$1 && ye$1 < a;
				}
				var yt$1 = k$1 && k$1.oldPos + 1 < D$1;
				if (!$$1 && !yt$1) {
					c[h] = void 0;
					continue;
				}
				if (!yt$1 || $$1 && k$1.oldPos + 1 < v$1.oldPos ? C = i.addToPath(v$1, !0, void 0, 0) : C = i.addToPath(k$1, void 0, !0, 1), F$1 = i.extractCommon(C, r, t, h), C.oldPos + 1 >= D$1 && F$1 + 1 >= a) return s(Su$1(i, C.lastComponent, r, t, i.useLongestToken));
				c[h] = C, C.oldPos + 1 >= D$1 && (E$1 = Math.min(E$1, h - 1)), F$1 + 1 >= a && (m = Math.max(m, h + 1));
			}
			l$1++;
		}
		if (u) (function h() {
			setTimeout(function() {
				if (l$1 > d$1 || Date.now() > p) return u();
				A() || h();
			}, 0);
		})();
		else for (; l$1 <= d$1 && Date.now() <= p;) {
			var w$1 = A();
			if (w$1) return w$1;
		}
	},
	addToPath: function(t, r, n, o) {
		var u = t.lastComponent;
		return u && u.added === r && u.removed === n ? {
			oldPos: t.oldPos + o,
			lastComponent: {
				count: u.count + 1,
				added: r,
				removed: n,
				previousComponent: u.previousComponent
			}
		} : {
			oldPos: t.oldPos + o,
			lastComponent: {
				count: 1,
				added: r,
				removed: n,
				previousComponent: u
			}
		};
	},
	extractCommon: function(t, r, n, o) {
		for (var u = r.length, i = n.length, s = t.oldPos, a = s - o, D$1 = 0; a + 1 < u && s + 1 < i && this.equals(r[a + 1], n[s + 1]);) a++, s++, D$1++;
		return D$1 && (t.lastComponent = {
			count: D$1,
			previousComponent: t.lastComponent
		}), t.oldPos = s, a;
	},
	equals: function(t, r) {
		return this.options.comparator ? this.options.comparator(t, r) : t === r || this.options.ignoreCase && t.toLowerCase() === r.toLowerCase();
	},
	removeEmpty: function(t) {
		for (var r = [], n = 0; n < t.length; n++) t[n] && r.push(t[n]);
		return r;
	},
	castInput: function(t) {
		return t;
	},
	tokenize: function(t) {
		return t.split("");
	},
	join: function(t) {
		return t.join("");
	}
};
function Su$1(e, t, r, n, o) {
	for (var u = [], i; t;) u.push(t), i = t.previousComponent, delete t.previousComponent, t = i;
	u.reverse();
	for (var s = 0, a = u.length, D$1 = 0, l$1 = 0; s < a; s++) {
		var d$1 = u[s];
		if (d$1.removed) {
			if (d$1.value = e.join(n.slice(l$1, l$1 + d$1.count)), l$1 += d$1.count, s && u[s - 1].added) {
				var p = u[s - 1];
				u[s - 1] = u[s], u[s] = p;
			}
		} else {
			if (!d$1.added && o) {
				var f$1 = r.slice(D$1, D$1 + d$1.count);
				f$1 = f$1.map(function(F$1, m) {
					var E$1 = n[l$1 + m];
					return E$1.length > F$1.length ? E$1 : F$1;
				}), d$1.value = e.join(f$1);
			} else d$1.value = e.join(r.slice(D$1, D$1 + d$1.count));
			D$1 += d$1.count, d$1.added || (l$1 += d$1.count);
		}
	}
	var c = u[a - 1];
	return a > 1 && typeof c.value == "string" && (c.added || c.removed) && e.equals("", c.value) && (u[a - 2].value += c.value, u.pop()), u;
}
new Z();
var lr$1 = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, cr$1 = /\S/, fr$1 = new Z();
fr$1.equals = function(e, t) {
	return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !cr$1.test(e) && !cr$1.test(t);
};
fr$1.tokenize = function(e) {
	for (var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0; r < t.length - 1; r++) !t[r + 1] && t[r + 2] && lr$1.test(t[r]) && lr$1.test(t[r + 2]) && (t[r] += t[r + 2], t.splice(r + 1, 2), r--);
	return t;
};
var pr$1 = new Z();
pr$1.tokenize = function(e) {
	this.options.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
	var t = [], r = e.split(/(\n|\r\n)/);
	r[r.length - 1] || r.pop();
	for (var n = 0; n < r.length; n++) {
		var o = r[n];
		n % 2 && !this.options.newlineIsToken ? t[t.length - 1] += o : (this.options.ignoreWhitespace && (o = o.trim()), t.push(o));
	}
	return t;
};
var Nu$1 = new Z();
Nu$1.tokenize = function(e) {
	return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var Tu$1 = new Z();
Tu$1.tokenize = function(e) {
	return e.split(/([{}:;,]|\s+)/);
};
function $e$1(e) {
	"@babel/helpers - typeof";
	return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $e$1 = function(t) {
		return typeof t;
	} : $e$1 = function(t) {
		return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
	}, $e$1(e);
}
var ku$1 = Object.prototype.toString, Ae$1 = new Z();
Ae$1.useLongestToken = !0;
Ae$1.tokenize = pr$1.tokenize;
Ae$1.castInput = function(e) {
	var t = this.options, r = t.undefinedReplacement, n = t.stringifyReplacer, o = n === void 0 ? function(u, i) {
		return typeof i > "u" ? r : i;
	} : n;
	return typeof e == "string" ? e : JSON.stringify(Bt$1(e, null, null, o), o, "  ");
};
Ae$1.equals = function(e, t) {
	return Z.prototype.equals.call(Ae$1, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
};
function Bt$1(e, t, r, n, o) {
	t = t || [], r = r || [], n && (e = n(o, e));
	var u;
	for (u = 0; u < t.length; u += 1) if (t[u] === e) return r[u];
	var i;
	if (ku$1.call(e) === "[object Array]") {
		for (t.push(e), i = new Array(e.length), r.push(i), u = 0; u < e.length; u += 1) i[u] = Bt$1(e[u], t, r, n, o);
		return t.pop(), r.pop(), i;
	}
	if (e && e.toJSON && (e = e.toJSON()), $e$1(e) === "object" && e !== null) {
		t.push(e), i = {}, r.push(i);
		var s = [], a;
		for (a in e) e.hasOwnProperty(a) && s.push(a);
		for (s.sort(), u = 0; u < s.length; u += 1) a = s[u], i[a] = Bt$1(e[a], t, r, n, a);
		t.pop(), r.pop();
	} else i = e;
	return i;
}
var Ve$1 = new Z();
Ve$1.tokenize = function(e) {
	return e.slice();
};
Ve$1.join = Ve$1.removeEmpty = function(e) {
	return e;
};
function dr$2(e, t, r) {
	return Ve$1.diff(e, t, r);
}
function Fr$1(e) {
	let t = e.indexOf("\r");
	return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function Be$2(e) {
	switch (e) {
		case "cr": return "\r";
		case "crlf": return `\r
`;
		default: return `
`;
	}
}
function wt$2(e, t) {
	let r;
	switch (t) {
		case `
`:
			r = /\n/gu;
			break;
		case "\r":
			r = /\r/gu;
			break;
		case `\r
`:
			r = /\r\n/gu;
			break;
		default: throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
	}
	let n = e.match(r);
	return n ? n.length : 0;
}
function mr$2(e) {
	return ne$1(!1, e, /\r\n?/gu, `
`);
}
var U$1 = "string", W = "array", z$1 = "cursor", L$1 = "indent", P$1 = "align", I = "trim", x$1 = "group", S = "fill", _ = "if-break", R$1 = "indent-if-break", Y$1 = "line-suffix", j = "line-suffix-boundary", B$1 = "line", N$1 = "label", b$1 = "break-parent", Ue$2 = new Set([
	z$1,
	L$1,
	P$1,
	I,
	x$1,
	S,
	_,
	R$1,
	Y$1,
	j,
	B$1,
	N$1,
	b$1
]);
function Lu$1(e) {
	if (typeof e == "string") return U$1;
	if (Array.isArray(e)) return W;
	if (!e) return;
	let { type: t } = e;
	if (Ue$2.has(t)) return t;
}
var G$1 = Lu$1;
var Pu$1 = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Iu$1(e) {
	let t = e === null ? "null" : typeof e;
	if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
	if (G$1(e)) throw new Error("doc is valid.");
	let r = Object.prototype.toString.call(e);
	if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
	let n = Pu$1([...Ue$2].map((o) => `'${o}'`));
	return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var xt = class extends Error {
	name = "InvalidDocError";
	constructor(t) {
		super(Iu$1(t)), this.doc = t;
	}
}, Q$1 = xt;
var Er$2 = {};
function Ru$1(e, t, r, n) {
	let o = [e];
	for (; o.length > 0;) {
		let u = o.pop();
		if (u === Er$2) {
			r(o.pop());
			continue;
		}
		r && o.push(u, Er$2);
		let i = G$1(u);
		if (!i) throw new Q$1(u);
		if ((t == null ? void 0 : t(u)) !== !1) switch (i) {
			case W:
			case S: {
				let s = i === W ? u : u.parts;
				for (let D$1 = s.length - 1; D$1 >= 0; --D$1) o.push(s[D$1]);
				break;
			}
			case _:
				o.push(u.flatContents, u.breakContents);
				break;
			case x$1:
				if (n && u.expandedStates) for (let s = u.expandedStates.length, a = s - 1; a >= 0; --a) o.push(u.expandedStates[a]);
				else o.push(u.contents);
				break;
			case P$1:
			case L$1:
			case R$1:
			case N$1:
			case Y$1:
				o.push(u.contents);
				break;
			case U$1:
			case z$1:
			case I:
			case j:
			case B$1:
			case b$1: break;
			default: throw new Q$1(u);
		}
	}
}
var we$1 = Ru$1;
var hr$1 = () => {}, K$1 = hr$1, ze$1 = hr$1;
function De$1(e) {
	return K$1(e), {
		type: L$1,
		contents: e
	};
}
function ae$2(e, t) {
	return K$1(t), {
		type: P$1,
		contents: t,
		n: e
	};
}
function _t$1(e, t = {}) {
	return K$1(e), ze$1(t.expandedStates, !0), {
		type: x$1,
		id: t.id,
		contents: e,
		break: !!t.shouldBreak,
		expandedStates: t.expandedStates
	};
}
function Cr$1(e) {
	return ae$2(Number.NEGATIVE_INFINITY, e);
}
function gr$2(e) {
	return ae$2({ type: "root" }, e);
}
function yr$2(e) {
	return ae$2(-1, e);
}
function Ar$2(e, t) {
	return _t$1(e[0], {
		...t,
		expandedStates: e
	});
}
function Ge$1(e) {
	return ze$1(e), {
		type: S,
		parts: e
	};
}
function Br$2(e, t = "", r = {}) {
	return K$1(e), t !== "" && K$1(t), {
		type: _,
		breakContents: e,
		flatContents: t,
		groupId: r.groupId
	};
}
function wr$2(e, t) {
	return K$1(e), {
		type: R$1,
		contents: e,
		groupId: t.groupId,
		negate: t.negate
	};
}
function xe$1(e) {
	return K$1(e), {
		type: Y$1,
		contents: e
	};
}
var xr$2 = { type: j }, de$1 = { type: b$1 }, _r$2 = { type: I }, _e$2 = {
	type: B$1,
	hard: !0
}, vt$2 = {
	type: B$1,
	hard: !0,
	literal: !0
}, Ke$1 = { type: B$1 }, vr$2 = {
	type: B$1,
	soft: !0
}, q$1 = [_e$2, de$1], qe = [vt$2, de$1], ve$1 = { type: z$1 };
function be$2(e, t) {
	K$1(e), ze$1(t);
	let r = [];
	for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
	return r;
}
function Je$1(e, t, r) {
	K$1(e);
	let n = e;
	if (t > 0) {
		for (let o = 0; o < Math.floor(t / r); ++o) n = De$1(n);
		n = ae$2(t % r, n), n = ae$2(Number.NEGATIVE_INFINITY, n);
	}
	return n;
}
function br$2(e, t) {
	return K$1(t), e ? {
		type: N$1,
		label: e,
		contents: t
	} : t;
}
function ee(e) {
	var t;
	if (!e) return "";
	if (Array.isArray(e)) {
		let r = [];
		for (let n of e) if (Array.isArray(n)) r.push(...ee(n));
		else {
			let o = ee(n);
			o !== "" && r.push(o);
		}
		return r;
	}
	return e.type === _ ? {
		...e,
		breakContents: ee(e.breakContents),
		flatContents: ee(e.flatContents)
	} : e.type === x$1 ? {
		...e,
		contents: ee(e.contents),
		expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(ee)
	} : e.type === S ? {
		type: "fill",
		parts: e.parts.map(ee)
	} : e.contents ? {
		...e,
		contents: ee(e.contents)
	} : e;
}
function Or$2(e) {
	let t = Object.create(null), r = /* @__PURE__ */ new Set();
	return n(ee(e));
	function n(u, i, s) {
		var a, D$1;
		if (typeof u == "string") return JSON.stringify(u);
		if (Array.isArray(u)) {
			let l$1 = u.map(n).filter(Boolean);
			return l$1.length === 1 ? l$1[0] : `[${l$1.join(", ")}]`;
		}
		if (u.type === B$1) {
			let l$1 = ((a = s == null ? void 0 : s[i + 1]) == null ? void 0 : a.type) === b$1;
			return u.literal ? l$1 ? "literalline" : "literallineWithoutBreakParent" : u.hard ? l$1 ? "hardline" : "hardlineWithoutBreakParent" : u.soft ? "softline" : "line";
		}
		if (u.type === b$1) return ((D$1 = s == null ? void 0 : s[i - 1]) == null ? void 0 : D$1.type) === B$1 && s[i - 1].hard ? void 0 : "breakParent";
		if (u.type === I) return "trim";
		if (u.type === L$1) return "indent(" + n(u.contents) + ")";
		if (u.type === P$1) return u.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(u.contents) + ")" : u.n < 0 ? "dedent(" + n(u.contents) + ")" : u.n.type === "root" ? "markAsRoot(" + n(u.contents) + ")" : "align(" + JSON.stringify(u.n) + ", " + n(u.contents) + ")";
		if (u.type === _) return "ifBreak(" + n(u.breakContents) + (u.flatContents ? ", " + n(u.flatContents) : "") + (u.groupId ? (u.flatContents ? "" : ", \"\"") + `, { groupId: ${o(u.groupId)} }` : "") + ")";
		if (u.type === R$1) {
			let l$1 = [];
			u.negate && l$1.push("negate: true"), u.groupId && l$1.push(`groupId: ${o(u.groupId)}`);
			let d$1 = l$1.length > 0 ? `, { ${l$1.join(", ")} }` : "";
			return `indentIfBreak(${n(u.contents)}${d$1})`;
		}
		if (u.type === x$1) {
			let l$1 = [];
			u.break && u.break !== "propagated" && l$1.push("shouldBreak: true"), u.id && l$1.push(`id: ${o(u.id)}`);
			let d$1 = l$1.length > 0 ? `, { ${l$1.join(", ")} }` : "";
			return u.expandedStates ? `conditionalGroup([${u.expandedStates.map((f$1) => n(f$1)).join(",")}]${d$1})` : `group(${n(u.contents)}${d$1})`;
		}
		if (u.type === S) return `fill([${u.parts.map((l$1) => n(l$1)).join(", ")}])`;
		if (u.type === Y$1) return "lineSuffix(" + n(u.contents) + ")";
		if (u.type === j) return "lineSuffixBoundary";
		if (u.type === N$1) return `label(${JSON.stringify(u.label)}, ${n(u.contents)})`;
		throw new Error("Unknown doc type " + u.type);
	}
	function o(u) {
		if (typeof u != "symbol") return JSON.stringify(String(u));
		if (u in t) return t[u];
		let i = u.description || "symbol";
		for (let s = 0;; s++) {
			let a = i + (s > 0 ? ` #${s}` : "");
			if (!r.has(a)) return r.add(a), t[u] = `Symbol.for(${JSON.stringify(a)})`;
		}
	}
}
var Yu$1 = (e, t, r) => {
	if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
}, y = Yu$1;
var Sr$1 = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function Nr$1(e) {
	return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Tr$2(e) {
	return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var kr$2 = (e) => !(Nr$1(e) || Tr$2(e));
var ju$1 = /[^\x20-\x7F]/u;
function Hu$1(e) {
	if (!e) return 0;
	if (!ju$1.test(e)) return e.length;
	e = e.replace(Sr$1(), "  ");
	let t = 0;
	for (let r of e) {
		let n = r.codePointAt(0);
		n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += kr$2(n) ? 1 : 2);
	}
	return t;
}
var Oe$2 = Hu$1;
function Ne$1(e, t) {
	if (typeof e == "string") return t(e);
	let r = /* @__PURE__ */ new Map();
	return n(e);
	function n(u) {
		if (r.has(u)) return r.get(u);
		let i = o(u);
		return r.set(u, i), i;
	}
	function o(u) {
		switch (G$1(u)) {
			case W: return t(u.map(n));
			case S: return t({
				...u,
				parts: u.parts.map(n)
			});
			case _: return t({
				...u,
				breakContents: n(u.breakContents),
				flatContents: n(u.flatContents)
			});
			case x$1: {
				let { expandedStates: i, contents: s } = u;
				return i ? (i = i.map(n), s = i[0]) : s = n(s), t({
					...u,
					contents: s,
					expandedStates: i
				});
			}
			case P$1:
			case L$1:
			case R$1:
			case N$1:
			case Y$1: return t({
				...u,
				contents: n(u.contents)
			});
			case U$1:
			case z$1:
			case I:
			case j:
			case B$1:
			case b$1: return t(u);
			default: throw new Q$1(u);
		}
	}
}
function Xe$1(e, t, r) {
	let n = r, o = !1;
	function u(i) {
		if (o) return !1;
		let s = t(i);
		s !== void 0 && (o = !0, n = s);
	}
	return we$1(e, u), n;
}
function Wu$1(e) {
	if (e.type === x$1 && e.break || e.type === B$1 && e.hard || e.type === b$1) return !0;
}
function Ir$2(e) {
	return Xe$1(e, Wu$1, !1);
}
function Lr$2(e) {
	if (e.length > 0) {
		let t = y(!1, e, -1);
		!t.expandedStates && !t.break && (t.break = "propagated");
	}
	return null;
}
function Rr$2(e) {
	let t = /* @__PURE__ */ new Set(), r = [];
	function n(u) {
		if (u.type === b$1 && Lr$2(r), u.type === x$1) {
			if (r.push(u), t.has(u)) return !1;
			t.add(u);
		}
	}
	function o(u) {
		u.type === x$1 && r.pop().break && Lr$2(r);
	}
	we$1(e, n, o, !0);
}
function Mu$1(e) {
	return e.type === B$1 && !e.hard ? e.soft ? "" : " " : e.type === _ ? e.flatContents : e;
}
function Yr$1(e) {
	return Ne$1(e, Mu$1);
}
function Pr$2(e) {
	for (e = [...e]; e.length >= 2 && y(!1, e, -2).type === B$1 && y(!1, e, -1).type === b$1;) e.length -= 2;
	if (e.length > 0) {
		let t = Se$1(y(!1, e, -1));
		e[e.length - 1] = t;
	}
	return e;
}
function Se$1(e) {
	switch (G$1(e)) {
		case L$1:
		case R$1:
		case x$1:
		case Y$1:
		case N$1: {
			let t = Se$1(e.contents);
			return {
				...e,
				contents: t
			};
		}
		case _: return {
			...e,
			breakContents: Se$1(e.breakContents),
			flatContents: Se$1(e.flatContents)
		};
		case S: return {
			...e,
			parts: Pr$2(e.parts)
		};
		case W: return Pr$2(e);
		case U$1: return e.replace(/[\n\r]*$/u, "");
		case P$1:
		case z$1:
		case I:
		case j:
		case B$1:
		case b$1: break;
		default: throw new Q$1(e);
	}
	return e;
}
function Ze$1(e) {
	return Se$1(Vu$1(e));
}
function $u$1(e) {
	switch (G$1(e)) {
		case S:
			if (e.parts.every((t) => t === "")) return "";
			break;
		case x$1:
			if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
			if (e.contents.type === x$1 && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
			break;
		case P$1:
		case L$1:
		case R$1:
		case Y$1:
			if (!e.contents) return "";
			break;
		case _:
			if (!e.flatContents && !e.breakContents) return "";
			break;
		case W: {
			let t = [];
			for (let r of e) {
				if (!r) continue;
				let [n, ...o] = Array.isArray(r) ? r : [r];
				typeof n == "string" && typeof y(!1, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...o);
			}
			return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
		}
		case U$1:
		case z$1:
		case I:
		case j:
		case B$1:
		case N$1:
		case b$1: break;
		default: throw new Q$1(e);
	}
	return e;
}
function Vu$1(e) {
	return Ne$1(e, (t) => $u$1(t));
}
function jr$2(e, t = qe) {
	return Ne$1(e, (r) => typeof r == "string" ? be$2(t, r.split(`
`)) : r);
}
function Uu$1(e) {
	if (e.type === B$1) return !0;
}
function Hr$2(e) {
	return Xe$1(e, Uu$1, !1);
}
function Qe$1(e, t) {
	return e.type === N$1 ? {
		...e,
		contents: t(e.contents)
	} : t(e);
}
var H$1 = Symbol("MODE_BREAK"), J = Symbol("MODE_FLAT"), Te$2 = Symbol("cursor");
function Wr$2() {
	return {
		value: "",
		length: 0,
		queue: []
	};
}
function zu$1(e, t) {
	return bt$1(e, { type: "indent" }, t);
}
function Gu$1(e, t, r) {
	return t === Number.NEGATIVE_INFINITY ? e.root || Wr$2() : t < 0 ? bt$1(e, { type: "dedent" }, r) : t ? t.type === "root" ? {
		...e,
		root: e
	} : bt$1(e, {
		type: typeof t == "string" ? "stringAlign" : "numberAlign",
		n: t
	}, r) : e;
}
function bt$1(e, t, r) {
	let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], o = "", u = 0, i = 0, s = 0;
	for (let c of n) switch (c.type) {
		case "indent":
			l$1(), r.useTabs ? a(1) : D$1(r.tabWidth);
			break;
		case "stringAlign":
			l$1(), o += c.n, u += c.n.length;
			break;
		case "numberAlign":
			i += 1, s += c.n;
			break;
		default: throw new Error(`Unexpected type '${c.type}'`);
	}
	return f$1(), {
		...e,
		value: o,
		length: u,
		queue: n
	};
	function a(c) {
		o += "	".repeat(c), u += r.tabWidth * c;
	}
	function D$1(c) {
		o += " ".repeat(c), u += c;
	}
	function l$1() {
		r.useTabs ? d$1() : f$1();
	}
	function d$1() {
		i > 0 && a(i), p();
	}
	function f$1() {
		s > 0 && D$1(s), p();
	}
	function p() {
		i = 0, s = 0;
	}
}
function Ot$1(e) {
	let t = 0, r = 0, n = e.length;
	e: for (; n--;) {
		let o = e[n];
		if (o === Te$2) {
			r++;
			continue;
		}
		for (let u = o.length - 1; u >= 0; u--) {
			let i = o[u];
			if (i === " " || i === "	") t++;
			else {
				e[n] = o.slice(0, u + 1);
				break e;
			}
		}
	}
	if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0;) e.push(Te$2);
	return t;
}
function et$1(e, t, r, n, o, u) {
	if (r === Number.POSITIVE_INFINITY) return !0;
	let i = t.length, s = [e], a = [];
	for (; r >= 0;) {
		if (s.length === 0) {
			if (i === 0) return !0;
			s.push(t[--i]);
			continue;
		}
		let { mode: D$1, doc: l$1 } = s.pop(), d$1 = G$1(l$1);
		switch (d$1) {
			case U$1:
				a.push(l$1), r -= Oe$2(l$1);
				break;
			case W:
			case S: {
				let f$1 = d$1 === W ? l$1 : l$1.parts;
				for (let p = f$1.length - 1; p >= 0; p--) s.push({
					mode: D$1,
					doc: f$1[p]
				});
				break;
			}
			case L$1:
			case P$1:
			case R$1:
			case N$1:
				s.push({
					mode: D$1,
					doc: l$1.contents
				});
				break;
			case I:
				r += Ot$1(a);
				break;
			case x$1: {
				if (u && l$1.break) return !1;
				let f$1 = l$1.break ? H$1 : D$1, p = l$1.expandedStates && f$1 === H$1 ? y(!1, l$1.expandedStates, -1) : l$1.contents;
				s.push({
					mode: f$1,
					doc: p
				});
				break;
			}
			case _: {
				let p = (l$1.groupId ? o[l$1.groupId] || J : D$1) === H$1 ? l$1.breakContents : l$1.flatContents;
				p && s.push({
					mode: D$1,
					doc: p
				});
				break;
			}
			case B$1:
				if (D$1 === H$1 || l$1.hard) return !0;
				l$1.soft || (a.push(" "), r--);
				break;
			case Y$1:
				n = !0;
				break;
			case j:
				if (n) return !1;
				break;
		}
	}
	return !1;
}
function Fe$1(e, t) {
	let r = {}, n = t.printWidth, o = Be$2(t.endOfLine), u = 0, i = [{
		ind: Wr$2(),
		mode: H$1,
		doc: e
	}], s = [], a = !1, D$1 = [], l$1 = 0;
	for (Rr$2(e); i.length > 0;) {
		let { ind: f$1, mode: p, doc: c } = i.pop();
		switch (G$1(c)) {
			case U$1: {
				let F$1 = o !== `
` ? ne$1(!1, c, `
`, o) : c;
				s.push(F$1), i.length > 0 && (u += Oe$2(F$1));
				break;
			}
			case W:
				for (let F$1 = c.length - 1; F$1 >= 0; F$1--) i.push({
					ind: f$1,
					mode: p,
					doc: c[F$1]
				});
				break;
			case z$1:
				if (l$1 >= 2) throw new Error("There are too many 'cursor' in doc.");
				s.push(Te$2), l$1++;
				break;
			case L$1:
				i.push({
					ind: zu$1(f$1, t),
					mode: p,
					doc: c.contents
				});
				break;
			case P$1:
				i.push({
					ind: Gu$1(f$1, c.n, t),
					mode: p,
					doc: c.contents
				});
				break;
			case I:
				u -= Ot$1(s);
				break;
			case x$1:
				switch (p) {
					case J: if (!a) {
						i.push({
							ind: f$1,
							mode: c.break ? H$1 : J,
							doc: c.contents
						});
						break;
					}
					case H$1: {
						a = !1;
						let F$1 = {
							ind: f$1,
							mode: J,
							doc: c.contents
						}, m = n - u, E$1 = D$1.length > 0;
						if (!c.break && et$1(F$1, i, m, E$1, r)) i.push(F$1);
						else if (c.expandedStates) {
							let A = y(!1, c.expandedStates, -1);
							if (c.break) {
								i.push({
									ind: f$1,
									mode: H$1,
									doc: A
								});
								break;
							} else for (let w$1 = 1; w$1 < c.expandedStates.length + 1; w$1++) if (w$1 >= c.expandedStates.length) {
								i.push({
									ind: f$1,
									mode: H$1,
									doc: A
								});
								break;
							} else {
								let C = {
									ind: f$1,
									mode: J,
									doc: c.expandedStates[w$1]
								};
								if (et$1(C, i, m, E$1, r)) {
									i.push(C);
									break;
								}
							}
						} else i.push({
							ind: f$1,
							mode: H$1,
							doc: c.contents
						});
						break;
					}
				}
				c.id && (r[c.id] = y(!1, i, -1).mode);
				break;
			case S: {
				let F$1 = n - u, { parts: m } = c;
				if (m.length === 0) break;
				let [E$1, A] = m, w$1 = {
					ind: f$1,
					mode: J,
					doc: E$1
				}, h = {
					ind: f$1,
					mode: H$1,
					doc: E$1
				}, C = et$1(w$1, [], F$1, D$1.length > 0, r, !0);
				if (m.length === 1) {
					C ? i.push(w$1) : i.push(h);
					break;
				}
				let k$1 = {
					ind: f$1,
					mode: J,
					doc: A
				}, v$1 = {
					ind: f$1,
					mode: H$1,
					doc: A
				};
				if (m.length === 2) {
					C ? i.push(k$1, w$1) : i.push(v$1, h);
					break;
				}
				m.splice(0, 2);
				let $$1 = {
					ind: f$1,
					mode: p,
					doc: Ge$1(m)
				}, ye$1 = m[0];
				et$1({
					ind: f$1,
					mode: J,
					doc: [
						E$1,
						A,
						ye$1
					]
				}, [], F$1, D$1.length > 0, r, !0) ? i.push($$1, k$1, w$1) : C ? i.push($$1, v$1, w$1) : i.push($$1, v$1, h);
				break;
			}
			case _:
			case R$1: {
				let F$1 = c.groupId ? r[c.groupId] : p;
				if (F$1 === H$1) {
					let m = c.type === _ ? c.breakContents : c.negate ? c.contents : De$1(c.contents);
					m && i.push({
						ind: f$1,
						mode: p,
						doc: m
					});
				}
				if (F$1 === J) {
					let m = c.type === _ ? c.flatContents : c.negate ? De$1(c.contents) : c.contents;
					m && i.push({
						ind: f$1,
						mode: p,
						doc: m
					});
				}
				break;
			}
			case Y$1:
				D$1.push({
					ind: f$1,
					mode: p,
					doc: c.contents
				});
				break;
			case j:
				D$1.length > 0 && i.push({
					ind: f$1,
					mode: p,
					doc: _e$2
				});
				break;
			case B$1:
				switch (p) {
					case J: if (c.hard) a = !0;
					else {
						c.soft || (s.push(" "), u += 1);
						break;
					}
					case H$1:
						if (D$1.length > 0) {
							i.push({
								ind: f$1,
								mode: p,
								doc: c
							}, ...D$1.reverse()), D$1.length = 0;
							break;
						}
						c.literal ? f$1.root ? (s.push(o, f$1.root.value), u = f$1.root.length) : (s.push(o), u = 0) : (u -= Ot$1(s), s.push(o + f$1.value), u = f$1.length);
						break;
				}
				break;
			case N$1:
				i.push({
					ind: f$1,
					mode: p,
					doc: c.contents
				});
				break;
			case b$1: break;
			default: throw new Q$1(c);
		}
		i.length === 0 && D$1.length > 0 && (i.push(...D$1.reverse()), D$1.length = 0);
	}
	let d$1 = s.indexOf(Te$2);
	if (d$1 !== -1) {
		let f$1 = s.indexOf(Te$2, d$1 + 1), p = s.slice(0, d$1).join(""), c = s.slice(d$1 + 1, f$1).join(""), F$1 = s.slice(f$1 + 1).join("");
		return {
			formatted: p + c + F$1,
			cursorNodeStart: p.length,
			cursorNodeText: c
		};
	}
	return { formatted: s.join("") };
}
function Ku$1(e, t, r = 0) {
	let n = 0;
	for (let o = r; o < e.length; ++o) e[o] === "	" ? n = n + t - n % t : n++;
	return n;
}
var me$1 = Ku$1;
var te$1, Nt$2, tt$1, St$2 = class {
	constructor(t) {
		Dr$2(this, te$1);
		this.stack = [t];
	}
	get key() {
		let { stack: t, siblings: r } = this;
		return y(!1, t, r === null ? -2 : -4) ?? null;
	}
	get index() {
		return this.siblings === null ? null : y(!1, this.stack, -2);
	}
	get node() {
		return y(!1, this.stack, -1);
	}
	get parent() {
		return this.getNode(1);
	}
	get grandparent() {
		return this.getNode(2);
	}
	get isInArray() {
		return this.siblings !== null;
	}
	get siblings() {
		let { stack: t } = this, r = y(!1, t, -3);
		return Array.isArray(r) ? r : null;
	}
	get next() {
		let { siblings: t } = this;
		return t === null ? null : t[this.index + 1];
	}
	get previous() {
		let { siblings: t } = this;
		return t === null ? null : t[this.index - 1];
	}
	get isFirst() {
		return this.index === 0;
	}
	get isLast() {
		let { siblings: t, index: r } = this;
		return t !== null && r === t.length - 1;
	}
	get isRoot() {
		return this.stack.length === 1;
	}
	get root() {
		return this.stack[0];
	}
	get ancestors() {
		return [...pe$1(this, te$1, tt$1).call(this)];
	}
	getName() {
		let { stack: t } = this, { length: r } = t;
		return r > 1 ? y(!1, t, -2) : null;
	}
	getValue() {
		return y(!1, this.stack, -1);
	}
	getNode(t = 0) {
		let r = pe$1(this, te$1, Nt$2).call(this, t);
		return r === -1 ? null : this.stack[r];
	}
	getParentNode(t = 0) {
		return this.getNode(t + 1);
	}
	call(t, ...r) {
		let { stack: n } = this, { length: o } = n, u = y(!1, n, -1);
		for (let i of r) u = u[i], n.push(i, u);
		try {
			return t(this);
		} finally {
			n.length = o;
		}
	}
	callParent(t, r = 0) {
		let n = pe$1(this, te$1, Nt$2).call(this, r + 1), o = this.stack.splice(n + 1);
		try {
			return t(this);
		} finally {
			this.stack.push(...o);
		}
	}
	each(t, ...r) {
		let { stack: n } = this, { length: o } = n, u = y(!1, n, -1);
		for (let i of r) u = u[i], n.push(i, u);
		try {
			for (let i = 0; i < u.length; ++i) n.push(i, u[i]), t(this, i, u), n.length -= 2;
		} finally {
			n.length = o;
		}
	}
	map(t, ...r) {
		let n = [];
		return this.each((o, u, i) => {
			n[u] = t(o, u, i);
		}, ...r), n;
	}
	match(...t) {
		let r = this.stack.length - 1, n = null, o = this.stack[r--];
		for (let u of t) {
			if (o === void 0) return !1;
			let i = null;
			if (typeof n == "number" && (i = n, n = this.stack[r--], o = this.stack[r--]), u && !u(o, n, i)) return !1;
			n = this.stack[r--], o = this.stack[r--];
		}
		return !0;
	}
	findAncestor(t) {
		for (let r of pe$1(this, te$1, tt$1).call(this)) if (t(r)) return r;
	}
	hasAncestor(t) {
		for (let r of pe$1(this, te$1, tt$1).call(this)) if (t(r)) return !0;
		return !1;
	}
};
te$1 = /* @__PURE__ */ new WeakSet(), Nt$2 = function(t) {
	let { stack: r } = this;
	for (let n = r.length - 1; n >= 0; n -= 2) if (!Array.isArray(r[n]) && --t < 0) return n;
	return -1;
}, tt$1 = function* () {
	let { stack: t } = this;
	for (let r = t.length - 3; r >= 0; r -= 2) {
		let n = t[r];
		Array.isArray(n) || (yield n);
	}
};
var Mr$2 = St$2;
var $r$2 = new Proxy(() => {}, { get: () => $r$2 }), ke$1 = $r$2;
function qu$1(e) {
	return e !== null && typeof e == "object";
}
var Vr$2 = qu$1;
function* Tt$1(e, t) {
	let { getVisitorKeys: r, filter: n = () => !0 } = t, o = (u) => Vr$2(u) && n(u);
	for (let u of r(e)) {
		let i = e[u];
		if (Array.isArray(i)) for (let s of i) o(s) && (yield s);
		else o(i) && (yield i);
	}
}
function* Ur$2(e, t) {
	let r = [e];
	for (let n = 0; n < r.length; n++) {
		let o = r[n];
		for (let u of Tt$1(o, t)) yield u, r.push(u);
	}
}
function Ee$1(e) {
	return (t, r, n) => {
		let o = !!(n != null && n.backwards);
		if (r === !1) return !1;
		let { length: u } = t, i = r;
		for (; i >= 0 && i < u;) {
			let s = t.charAt(i);
			if (e instanceof RegExp) {
				if (!e.test(s)) return i;
			} else if (!e.includes(s)) return i;
			o ? i-- : i++;
		}
		return i === -1 || i === u ? i : !1;
	};
}
var zr$2 = Ee$1(/\s/u), T = Ee$1(" 	"), rt$1 = Ee$1(",; 	"), nt$1 = Ee$1(/[^\n\r]/u);
function Ju$1(e, t, r) {
	let n = !!(r != null && r.backwards);
	if (t === !1) return !1;
	let o = e.charAt(t);
	if (n) {
		if (e.charAt(t - 1) === "\r" && o === `
`) return t - 2;
		if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t - 1;
	} else {
		if (o === "\r" && e.charAt(t + 1) === `
`) return t + 2;
		if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t + 1;
	}
	return t;
}
var M$1 = Ju$1;
function Xu$1(e, t, r = {}) {
	let n = T(e, r.backwards ? t - 1 : t, r);
	return n !== M$1(e, n, r);
}
var V$2 = Xu$1;
function Zu$1(e) {
	return Array.isArray(e) && e.length > 0;
}
var kt$2 = Zu$1;
var Gr$2 = new Set([
	"tokens",
	"comments",
	"parent",
	"enclosingNode",
	"precedingNode",
	"followingNode"
]), Qu$1 = (e) => Object.keys(e).filter((t) => !Gr$2.has(t));
function eo$1(e) {
	return e ? (t) => e(t, Gr$2) : Qu$1;
}
var X$1 = eo$1;
function to$1(e) {
	let t = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
	return r.length > 20 && (r = r.slice(0, 19) + "…"), t + (r ? " " + r : "");
}
function Lt$1(e, t) {
	(e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = to$1(e);
}
function ue(e, t) {
	t.leading = !0, t.trailing = !1, Lt$1(e, t);
}
function re$2(e, t, r) {
	t.leading = !1, t.trailing = !1, r && (t.marker = r), Lt$1(e, t);
}
function oe$1(e, t) {
	t.leading = !1, t.trailing = !0, Lt$1(e, t);
}
var Pt$1 = /* @__PURE__ */ new WeakMap();
function ut$1(e, t) {
	if (Pt$1.has(e)) return Pt$1.get(e);
	let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: o }, locStart: u, locEnd: i } = t;
	if (!n) return [];
	let s = ((r == null ? void 0 : r(e, t)) ?? [...Tt$1(e, { getVisitorKeys: X$1(o) })]).flatMap((a) => n(a) ? [a] : ut$1(a, t));
	return s.sort((a, D$1) => u(a) - u(D$1) || i(a) - i(D$1)), Pt$1.set(e, s), s;
}
function qr$2(e, t, r, n) {
	let { locStart: o, locEnd: u } = r, i = o(t), s = u(t), a = ut$1(e, r), D$1, l$1, d$1 = 0, f$1 = a.length;
	for (; d$1 < f$1;) {
		let p = d$1 + f$1 >> 1, c = a[p], F$1 = o(c), m = u(c);
		if (F$1 <= i && s <= m) return qr$2(c, t, r, c);
		if (m <= i) {
			D$1 = c, d$1 = p + 1;
			continue;
		}
		if (s <= F$1) {
			l$1 = c, f$1 = p;
			continue;
		}
		throw new Error("Comment location overlaps with node location");
	}
	if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
		let { quasis: p } = n, c = Rt$1(p, t, r);
		D$1 && Rt$1(p, D$1, r) !== c && (D$1 = null), l$1 && Rt$1(p, l$1, r) !== c && (l$1 = null);
	}
	return {
		enclosingNode: n,
		precedingNode: D$1,
		followingNode: l$1
	};
}
var It$1 = () => !1;
function Jr$2(e, t) {
	let { comments: r } = e;
	if (delete e.comments, !kt$2(r) || !t.printer.canAttachComment) return;
	let n = [], { locStart: o, locEnd: u, printer: { experimentalFeatures: { avoidAstMutation: i = !1 } = {}, handleComments: s = {} }, originalText: a } = t, { ownLine: D$1 = It$1, endOfLine: l$1 = It$1, remaining: d$1 = It$1 } = s, f$1 = r.map((p, c) => ({
		...qr$2(e, p, t),
		comment: p,
		text: a,
		options: t,
		ast: e,
		isLastComment: r.length - 1 === c
	}));
	for (let [p, c] of f$1.entries()) {
		let { comment: F$1, precedingNode: m, enclosingNode: E$1, followingNode: A, text: w$1, options: h, ast: C, isLastComment: k$1 } = c;
		if (h.parser === "json" || h.parser === "json5" || h.parser === "jsonc" || h.parser === "__js_expression" || h.parser === "__ts_expression" || h.parser === "__vue_expression" || h.parser === "__vue_ts_expression") {
			if (o(F$1) - o(C) <= 0) {
				ue(C, F$1);
				continue;
			}
			if (u(F$1) - u(C) >= 0) {
				oe$1(C, F$1);
				continue;
			}
		}
		let v$1;
		if (i ? v$1 = [c] : (F$1.enclosingNode = E$1, F$1.precedingNode = m, F$1.followingNode = A, v$1 = [
			F$1,
			w$1,
			h,
			C,
			k$1
		]), ro$1(w$1, h, f$1, p)) F$1.placement = "ownLine", D$1(...v$1) || (A ? ue(A, F$1) : m ? oe$1(m, F$1) : E$1 ? re$2(E$1, F$1) : re$2(C, F$1));
		else if (no$1(w$1, h, f$1, p)) F$1.placement = "endOfLine", l$1(...v$1) || (m ? oe$1(m, F$1) : A ? ue(A, F$1) : E$1 ? re$2(E$1, F$1) : re$2(C, F$1));
		else if (F$1.placement = "remaining", !d$1(...v$1)) if (m && A) {
			let $$1 = n.length;
			$$1 > 0 && n[$$1 - 1].followingNode !== A && Kr$2(n, h), n.push(c);
		} else m ? oe$1(m, F$1) : A ? ue(A, F$1) : E$1 ? re$2(E$1, F$1) : re$2(C, F$1);
	}
	if (Kr$2(n, t), !i) for (let p of r) delete p.precedingNode, delete p.enclosingNode, delete p.followingNode;
}
var Xr$2 = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function ro$1(e, t, r, n) {
	let { comment: o, precedingNode: u } = r[n], { locStart: i, locEnd: s } = t, a = i(o);
	if (u) for (let D$1 = n - 1; D$1 >= 0; D$1--) {
		let { comment: l$1, precedingNode: d$1 } = r[D$1];
		if (d$1 !== u || !Xr$2(e.slice(s(l$1), a))) break;
		a = i(l$1);
	}
	return V$2(e, a, { backwards: !0 });
}
function no$1(e, t, r, n) {
	let { comment: o, followingNode: u } = r[n], { locStart: i, locEnd: s } = t, a = s(o);
	if (u) for (let D$1 = n + 1; D$1 < r.length; D$1++) {
		let { comment: l$1, followingNode: d$1 } = r[D$1];
		if (d$1 !== u || !Xr$2(e.slice(a, i(l$1)))) break;
		a = s(l$1);
	}
	return V$2(e, a);
}
function Kr$2(e, t) {
	var s, a;
	let r = e.length;
	if (r === 0) return;
	let { precedingNode: n, followingNode: o } = e[0], u = t.locStart(o), i;
	for (i = r; i > 0; --i) {
		let { comment: D$1, precedingNode: l$1, followingNode: d$1 } = e[i - 1];
		ke$1.strictEqual(l$1, n), ke$1.strictEqual(d$1, o);
		let f$1 = t.originalText.slice(t.locEnd(D$1), u);
		if (((a = (s = t.printer).isGap) == null ? void 0 : a.call(s, f$1, t)) ?? /^[\s(]*$/u.test(f$1)) u = t.locStart(D$1);
		else break;
	}
	for (let [D$1, { comment: l$1 }] of e.entries()) D$1 < i ? oe$1(n, l$1) : ue(o, l$1);
	for (let D$1 of [n, o]) D$1.comments && D$1.comments.length > 1 && D$1.comments.sort((l$1, d$1) => t.locStart(l$1) - t.locStart(d$1));
	e.length = 0;
}
function Rt$1(e, t, r) {
	let n = r.locStart(t) - 1;
	for (let o = 1; o < e.length; ++o) if (n < r.locStart(e[o])) return o - 1;
	return 0;
}
function uo$1(e, t) {
	let r = t - 1;
	r = T(e, r, { backwards: !0 }), r = M$1(e, r, { backwards: !0 }), r = T(e, r, { backwards: !0 });
	let n = M$1(e, r, { backwards: !0 });
	return r !== n;
}
var Le$1 = uo$1;
function Zr$1(e, t) {
	let r = e.node;
	return r.printed = !0, t.printer.printComment(e, t);
}
function oo$1(e, t) {
	var l$1;
	let r = e.node, n = [Zr$1(e, t)], { printer: o, originalText: u, locStart: i, locEnd: s } = t;
	if ((l$1 = o.isBlockComment) == null ? void 0 : l$1.call(o, r)) {
		let d$1 = V$2(u, s(r)) ? V$2(u, i(r), { backwards: !0 }) ? q$1 : Ke$1 : " ";
		n.push(d$1);
	} else n.push(q$1);
	let D$1 = M$1(u, T(u, s(r)));
	return D$1 !== !1 && V$2(u, D$1) && n.push(q$1), n;
}
function io$1(e, t, r) {
	var D$1;
	let n = e.node, o = Zr$1(e, t), { printer: u, originalText: i, locStart: s } = t, a = (D$1 = u.isBlockComment) == null ? void 0 : D$1.call(u, n);
	if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || V$2(i, s(n), { backwards: !0 })) return {
		doc: xe$1([
			q$1,
			Le$1(i, s(n)) ? q$1 : "",
			o
		]),
		isBlock: a,
		hasLineSuffix: !0
	};
	return !a || r != null && r.hasLineSuffix ? {
		doc: [xe$1([" ", o]), de$1],
		isBlock: a,
		hasLineSuffix: !0
	} : {
		doc: [" ", o],
		isBlock: a,
		hasLineSuffix: !1
	};
}
function so$1(e, t) {
	let r = e.node;
	if (!r) return {};
	let n = t[Symbol.for("printedComments")];
	if ((r.comments || []).filter((a) => !n.has(a)).length === 0) return {
		leading: "",
		trailing: ""
	};
	let u = [], i = [], s;
	return e.each(() => {
		let a = e.node;
		if (n != null && n.has(a)) return;
		let { leading: D$1, trailing: l$1 } = a;
		D$1 ? u.push(oo$1(e, t)) : l$1 && (s = io$1(e, t, s), i.push(s.doc));
	}, "comments"), {
		leading: u,
		trailing: i
	};
}
function Qr$2(e, t, r) {
	let { leading: n, trailing: o } = so$1(e, r);
	return !n && !o ? t : Qe$1(t, (u) => [
		n,
		u,
		o
	]);
}
function en$1(e) {
	let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: r } = e;
	for (let n of t) {
		if (!n.printed && !r.has(n)) throw new Error("Comment \"" + n.value.trim() + "\" was not printed. Please report this error!");
		delete n.printed;
	}
}
function ao(e) {
	return () => {};
}
var tn$1 = ao;
var Pe$2 = class extends Error {
	name = "ConfigError";
}, Ie$1 = class extends Error {
	name = "UndefinedParserError";
};
var rn$1 = {
	cursorOffset: {
		category: "Special",
		type: "int",
		default: -1,
		range: {
			start: -1,
			end: Infinity,
			step: 1
		},
		description: "Print (to stderr) where a cursor at the given position would move to after formatting.",
		cliCategory: "Editor"
	},
	endOfLine: {
		category: "Global",
		type: "choice",
		default: "lf",
		description: "Which end of line characters to apply.",
		choices: [
			{
				value: "lf",
				description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
			},
			{
				value: "crlf",
				description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
			},
			{
				value: "cr",
				description: "Carriage Return character only (\\r), used very rarely"
			},
			{
				value: "auto",
				description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`
			}
		]
	},
	filepath: {
		category: "Special",
		type: "path",
		description: "Specify the input filepath. This will be used to do parser inference.",
		cliName: "stdin-filepath",
		cliCategory: "Other",
		cliDescription: "Path to the file to pretend that stdin comes from."
	},
	insertPragma: {
		category: "Special",
		type: "boolean",
		default: !1,
		description: "Insert @format pragma into file's first docblock comment.",
		cliCategory: "Other"
	},
	parser: {
		category: "Global",
		type: "choice",
		default: void 0,
		description: "Which parser to use.",
		exception: (e) => typeof e == "string" || typeof e == "function",
		choices: [
			{
				value: "flow",
				description: "Flow"
			},
			{
				value: "babel",
				description: "JavaScript"
			},
			{
				value: "babel-flow",
				description: "Flow"
			},
			{
				value: "babel-ts",
				description: "TypeScript"
			},
			{
				value: "typescript",
				description: "TypeScript"
			},
			{
				value: "acorn",
				description: "JavaScript"
			},
			{
				value: "espree",
				description: "JavaScript"
			},
			{
				value: "meriyah",
				description: "JavaScript"
			},
			{
				value: "css",
				description: "CSS"
			},
			{
				value: "less",
				description: "Less"
			},
			{
				value: "scss",
				description: "SCSS"
			},
			{
				value: "json",
				description: "JSON"
			},
			{
				value: "json5",
				description: "JSON5"
			},
			{
				value: "jsonc",
				description: "JSON with Comments"
			},
			{
				value: "json-stringify",
				description: "JSON.stringify"
			},
			{
				value: "graphql",
				description: "GraphQL"
			},
			{
				value: "markdown",
				description: "Markdown"
			},
			{
				value: "mdx",
				description: "MDX"
			},
			{
				value: "vue",
				description: "Vue"
			},
			{
				value: "yaml",
				description: "YAML"
			},
			{
				value: "glimmer",
				description: "Ember / Handlebars"
			},
			{
				value: "html",
				description: "HTML"
			},
			{
				value: "angular",
				description: "Angular"
			},
			{
				value: "lwc",
				description: "Lightning Web Components"
			}
		]
	},
	plugins: {
		type: "path",
		array: !0,
		default: [{ value: [] }],
		category: "Global",
		description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
		exception: (e) => typeof e == "string" || typeof e == "object",
		cliName: "plugin",
		cliCategory: "Config"
	},
	printWidth: {
		category: "Global",
		type: "int",
		default: 80,
		description: "The line length where Prettier will try wrap.",
		range: {
			start: 0,
			end: Infinity,
			step: 1
		}
	},
	rangeEnd: {
		category: "Special",
		type: "int",
		default: Infinity,
		range: {
			start: 0,
			end: Infinity,
			step: 1
		},
		description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
		cliCategory: "Editor"
	},
	rangeStart: {
		category: "Special",
		type: "int",
		default: 0,
		range: {
			start: 0,
			end: Infinity,
			step: 1
		},
		description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,
		cliCategory: "Editor"
	},
	requirePragma: {
		category: "Special",
		type: "boolean",
		default: !1,
		description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
		cliCategory: "Other"
	},
	tabWidth: {
		type: "int",
		category: "Global",
		default: 2,
		description: "Number of spaces per indentation level.",
		range: {
			start: 0,
			end: Infinity,
			step: 1
		}
	},
	useTabs: {
		category: "Global",
		type: "boolean",
		default: !1,
		description: "Indent with tabs instead of spaces."
	},
	embeddedLanguageFormatting: {
		category: "Global",
		type: "choice",
		default: "auto",
		description: "Control how Prettier formats quoted code embedded in the file.",
		choices: [{
			value: "auto",
			description: "Format embedded code if Prettier can automatically identify it."
		}, {
			value: "off",
			description: "Never automatically format embedded code."
		}]
	}
};
function ot$1({ plugins: e = [], showDeprecated: t = !1 } = {}) {
	let r = e.flatMap((o) => o.languages ?? []), n = [];
	for (let o of lo$1(Object.assign({}, ...e.map(({ options: u }) => u), rn$1))) !t && o.deprecated || (Array.isArray(o.choices) && (t || (o.choices = o.choices.filter((u) => !u.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...Do$1(o.choices, r, e)])), o.pluginDefaults = Object.fromEntries(e.filter((u) => {
		var i;
		return ((i = u.defaultOptions) == null ? void 0 : i[o.name]) !== void 0;
	}).map((u) => [u.name, u.defaultOptions[o.name]])), n.push(o));
	return {
		languages: r,
		options: n
	};
}
function* Do$1(e, t, r) {
	let n = new Set(e.map((o) => o.value));
	for (let o of t) if (o.parsers) {
		for (let u of o.parsers) if (!n.has(u)) {
			n.add(u);
			let i = r.find((a) => a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, u)), s = o.name;
			i != null && i.name && (s += ` (plugin: ${i.name})`), yield {
				value: u,
				description: s
			};
		}
	}
}
function lo$1(e) {
	let t = [];
	for (let [r, n] of Object.entries(e)) {
		let o = {
			name: r,
			...n
		};
		Array.isArray(o.default) && (o.default = y(!1, o.default, -1).value), t.push(o);
	}
	return t;
}
var co = (e) => String(e).split(/[/\\]/u).pop();
function nn$1(e, t) {
	if (!t) return;
	let r = co(t).toLowerCase();
	return e.find(({ filenames: n }) => n == null ? void 0 : n.some((o) => o.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.some((o) => r.endsWith(o)));
}
function fo$1(e, t) {
	if (t) return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r == null ? void 0 : r.includes(t)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${t}`));
}
function po(e, t) {
	let r = e.plugins.flatMap((o) => o.languages ?? []), n = fo$1(r, t.language) ?? nn$1(r, t.physicalFile) ?? nn$1(r, t.file) ?? (t.physicalFile, void 0);
	return n == null ? void 0 : n.parsers[0];
}
var un$1 = po;
var ie$2 = {
	key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e),
	value(e) {
		if (e === null || typeof e != "object") return JSON.stringify(e);
		if (Array.isArray(e)) return `[${e.map((r) => ie$2.value(r)).join(", ")}]`;
		let t = Object.keys(e);
		return t.length === 0 ? "{}" : `{ ${t.map((r) => `${ie$2.key(r)}: ${ie$2.value(e[r])}`).join(", ")} }`;
	},
	pair: ({ key: e, value: t }) => ie$2.value({ [e]: t })
};
var Yt$1 = Me$2(it$1(), 1), an$1 = (e, t, { descriptor: r }) => {
	let n = [`${Yt$1.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`];
	return t && n.push(`we now treat it as ${Yt$1.default.blue(typeof t == "string" ? r.key(t) : r.pair(t))}`), n.join("; ") + ".";
};
var le$1 = Me$2(it$1(), 1);
var st$1 = Symbol.for("vnopts.VALUE_NOT_EXIST"), he$1 = Symbol.for("vnopts.VALUE_UNCHANGED");
var Dn$1 = " ".repeat(2), cn$1 = (e, t, r) => {
	let { text: n, list: o } = r.normalizeExpectedResult(r.schemas[e].expected(r)), u = [];
	return n && u.push(ln$1(e, t, n, r.descriptor)), o && u.push([ln$1(e, t, o.title, r.descriptor)].concat(o.values.map((i) => fn$1(i, r.loggerPrintWidth))).join(`
`)), pn$1(u, r.loggerPrintWidth);
};
function ln$1(e, t, r, n) {
	return [
		`Invalid ${le$1.default.red(n.key(e))} value.`,
		`Expected ${le$1.default.blue(r)},`,
		`but received ${t === st$1 ? le$1.default.gray("nothing") : le$1.default.red(n.value(t))}.`
	].join(" ");
}
function fn$1({ text: e, list: t }, r) {
	let n = [];
	return e && n.push(`- ${le$1.default.blue(e)}`), t && n.push([`- ${le$1.default.blue(t.title)}:`].concat(t.values.map((o) => fn$1(o, r - Dn$1.length).replace(/^|\n/g, `$&${Dn$1}`))).join(`
`)), pn$1(n, r);
}
function pn$1(e, t) {
	if (e.length === 1) return e[0];
	let [r, n] = e, [o, u] = e.map((i) => i.split(`
`, 1)[0].length);
	return o > t && o > u ? n : r;
}
var Wt$1 = Me$2(it$1(), 1);
var jt$1 = [], dn$1 = [];
function Ht$1(e, t) {
	if (e === t) return 0;
	let r = e;
	e.length > t.length && (e = t, t = r);
	let n = e.length, o = t.length;
	for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-o);) n--, o--;
	let u = 0;
	for (; u < n && e.charCodeAt(u) === t.charCodeAt(u);) u++;
	if (n -= u, o -= u, n === 0) return o;
	let i, s, a, D$1, l$1 = 0, d$1 = 0;
	for (; l$1 < n;) dn$1[l$1] = e.charCodeAt(u + l$1), jt$1[l$1] = ++l$1;
	for (; d$1 < o;) for (i = t.charCodeAt(u + d$1), a = d$1++, s = d$1, l$1 = 0; l$1 < n; l$1++) D$1 = i === dn$1[l$1] ? a : a + 1, a = jt$1[l$1], s = jt$1[l$1] = a > s ? D$1 > s ? s + 1 : D$1 : D$1 > a ? a + 1 : D$1;
	return s;
}
var at$1 = (e, t, { descriptor: r, logger: n, schemas: o }) => {
	let u = [`Ignored unknown option ${Wt$1.default.yellow(r.pair({
		key: e,
		value: t
	}))}.`], i = Object.keys(o).sort().find((s) => Ht$1(e, s) < 3);
	i && u.push(`Did you mean ${Wt$1.default.blue(r.key(i))}?`), n.warn(u.join(" "));
};
var Fo$1 = [
	"default",
	"expected",
	"validate",
	"deprecated",
	"forward",
	"redirect",
	"overlap",
	"preprocess",
	"postprocess"
];
function mo$1(e, t) {
	let r = new e(t), n = Object.create(r);
	for (let o of Fo$1) o in t && (n[o] = Eo$1(t[o], r, O$1.prototype[o].length));
	return n;
}
var O$1 = class {
	static create(t) {
		return mo$1(this, t);
	}
	constructor(t) {
		this.name = t.name;
	}
	default(t) {}
	expected(t) {
		return "nothing";
	}
	validate(t, r) {
		return !1;
	}
	deprecated(t, r) {
		return !1;
	}
	forward(t, r) {}
	redirect(t, r) {}
	overlap(t, r, n) {
		return t;
	}
	preprocess(t, r) {
		return t;
	}
	postprocess(t, r) {
		return he$1;
	}
};
function Eo$1(e, t, r) {
	return typeof e == "function" ? (...n) => e(...n.slice(0, r - 1), t, ...n.slice(r - 1)) : () => e;
}
var Dt$1 = class extends O$1 {
	constructor(t) {
		super(t), this._sourceName = t.sourceName;
	}
	expected(t) {
		return t.schemas[this._sourceName].expected(t);
	}
	validate(t, r) {
		return r.schemas[this._sourceName].validate(t, r);
	}
	redirect(t, r) {
		return this._sourceName;
	}
};
var lt$1 = class extends O$1 {
	expected() {
		return "anything";
	}
	validate() {
		return !0;
	}
};
var ct$1 = class extends O$1 {
	constructor({ valueSchema: t, name: r = t.name, ...n }) {
		super({
			...n,
			name: r
		}), this._valueSchema = t;
	}
	expected(t) {
		let { text: r, list: n } = t.normalizeExpectedResult(this._valueSchema.expected(t));
		return {
			text: r && `an array of ${r}`,
			list: n && {
				title: "an array of the following values",
				values: [{ list: n }]
			}
		};
	}
	validate(t, r) {
		if (!Array.isArray(t)) return !1;
		let n = [];
		for (let o of t) {
			let u = r.normalizeValidateResult(this._valueSchema.validate(o, r), o);
			u !== !0 && n.push(u.value);
		}
		return n.length === 0 ? !0 : { value: n };
	}
	deprecated(t, r) {
		let n = [];
		for (let o of t) {
			let u = r.normalizeDeprecatedResult(this._valueSchema.deprecated(o, r), o);
			u !== !1 && n.push(...u.map(({ value: i }) => ({ value: [i] })));
		}
		return n;
	}
	forward(t, r) {
		let n = [];
		for (let o of t) {
			let u = r.normalizeForwardResult(this._valueSchema.forward(o, r), o);
			n.push(...u.map(Fn$1));
		}
		return n;
	}
	redirect(t, r) {
		let n = [], o = [];
		for (let u of t) {
			let i = r.normalizeRedirectResult(this._valueSchema.redirect(u, r), u);
			"remain" in i && n.push(i.remain), o.push(...i.redirect.map(Fn$1));
		}
		return n.length === 0 ? { redirect: o } : {
			redirect: o,
			remain: n
		};
	}
	overlap(t, r) {
		return t.concat(r);
	}
};
function Fn$1({ from: e, to: t }) {
	return {
		from: [e],
		to: t
	};
}
var ft$1 = class extends O$1 {
	expected() {
		return "true or false";
	}
	validate(t) {
		return typeof t == "boolean";
	}
};
function En$1(e, t) {
	let r = Object.create(null);
	for (let n of e) {
		let o = n[t];
		if (r[o]) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
		r[o] = n;
	}
	return r;
}
function hn$1(e, t) {
	let r = /* @__PURE__ */ new Map();
	for (let n of e) {
		let o = n[t];
		if (r.has(o)) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
		r.set(o, n);
	}
	return r;
}
function Cn$1() {
	let e = Object.create(null);
	return (t) => {
		let r = JSON.stringify(t);
		return e[r] ? !0 : (e[r] = !0, !1);
	};
}
function gn$1(e, t) {
	let r = [], n = [];
	for (let o of e) t(o) ? r.push(o) : n.push(o);
	return [r, n];
}
function yn$1(e) {
	return e === Math.floor(e);
}
function An$1(e, t) {
	if (e === t) return 0;
	let r = typeof e, n = typeof t, o = [
		"undefined",
		"object",
		"boolean",
		"number",
		"string"
	];
	return r !== n ? o.indexOf(r) - o.indexOf(n) : r !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function Bn$1(e) {
	return (...t) => {
		let r = e(...t);
		return typeof r == "string" ? new Error(r) : r;
	};
}
function Mt$1(e) {
	return e === void 0 ? {} : e;
}
function $t(e) {
	if (typeof e == "string") return { text: e };
	let { text: t, list: r } = e;
	return ho$1((t || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? {
		text: t,
		list: {
			title: r.title,
			values: r.values.map($t)
		}
	} : { text: t };
}
function Vt$1(e, t) {
	return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function Ut$1(e, t, r = !1) {
	return e === !1 ? !1 : e === !0 ? r ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function mn$1(e, t) {
	return typeof e == "string" || "key" in e ? {
		from: t,
		to: e
	} : "from" in e ? {
		from: e.from,
		to: e.to
	} : {
		from: t,
		to: e.to
	};
}
function pt$1(e, t) {
	return e === void 0 ? [] : Array.isArray(e) ? e.map((r) => mn$1(r, t)) : [mn$1(e, t)];
}
function zt(e, t) {
	let r = pt$1(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
	return r.length === 0 ? {
		remain: t,
		redirect: r
	} : typeof e == "object" && "remain" in e ? {
		remain: e.remain,
		redirect: r
	} : { redirect: r };
}
function ho$1(e, t) {
	if (!e) throw new Error(t);
}
var dt$1 = class extends O$1 {
	constructor(t) {
		super(t), this._choices = hn$1(t.choices.map((r) => r && typeof r == "object" ? r : { value: r }), "value");
	}
	expected({ descriptor: t }) {
		let r = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(An$1).map(t.value), n = r.slice(0, -2), o = r.slice(-2);
		return {
			text: n.concat(o.join(" or ")).join(", "),
			list: {
				title: "one of the following values",
				values: r
			}
		};
	}
	validate(t) {
		return this._choices.has(t);
	}
	deprecated(t) {
		let r = this._choices.get(t);
		return r && r.deprecated ? { value: t } : !1;
	}
	forward(t) {
		let r = this._choices.get(t);
		return r ? r.forward : void 0;
	}
	redirect(t) {
		let r = this._choices.get(t);
		return r ? r.redirect : void 0;
	}
};
var Ft$1 = class extends O$1 {
	expected() {
		return "a number";
	}
	validate(t, r) {
		return typeof t == "number";
	}
};
var mt$1 = class extends Ft$1 {
	expected() {
		return "an integer";
	}
	validate(t, r) {
		return r.normalizeValidateResult(super.validate(t, r), t) === !0 && yn$1(t);
	}
};
var Re$2 = class extends O$1 {
	expected() {
		return "a string";
	}
	validate(t) {
		return typeof t == "string";
	}
};
var wn$1 = ie$2, xn$1 = at$1, _n$1 = cn$1, vn$1 = an$1;
var Et$2 = class {
	constructor(t, r) {
		let { logger: n = console, loggerPrintWidth: o = 80, descriptor: u = wn$1, unknown: i = xn$1, invalid: s = _n$1, deprecated: a = vn$1, missing: D$1 = () => !1, required: l$1 = () => !1, preprocess: d$1 = (p) => p, postprocess: f$1 = () => he$1 } = r || {};
		this._utils = {
			descriptor: u,
			logger: n || { warn: () => {} },
			loggerPrintWidth: o,
			schemas: En$1(t, "name"),
			normalizeDefaultResult: Mt$1,
			normalizeExpectedResult: $t,
			normalizeDeprecatedResult: Ut$1,
			normalizeForwardResult: pt$1,
			normalizeRedirectResult: zt,
			normalizeValidateResult: Vt$1
		}, this._unknownHandler = i, this._invalidHandler = Bn$1(s), this._deprecatedHandler = a, this._identifyMissing = (p, c) => !(p in c) || D$1(p, c), this._identifyRequired = l$1, this._preprocess = d$1, this._postprocess = f$1, this.cleanHistory();
	}
	cleanHistory() {
		this._hasDeprecationWarned = Cn$1();
	}
	normalize(t) {
		let r = {}, o = [this._preprocess(t, this._utils)], u = () => {
			for (; o.length !== 0;) {
				let i = o.shift(), s = this._applyNormalization(i, r);
				o.push(...s);
			}
		};
		u();
		for (let i of Object.keys(this._utils.schemas)) {
			let s = this._utils.schemas[i];
			if (!(i in r)) {
				let a = Mt$1(s.default(this._utils));
				"value" in a && o.push({ [i]: a.value });
			}
		}
		u();
		for (let i of Object.keys(this._utils.schemas)) {
			if (!(i in r)) continue;
			let s = this._utils.schemas[i], a = r[i], D$1 = s.postprocess(a, this._utils);
			D$1 !== he$1 && (this._applyValidation(D$1, i, s), r[i] = D$1);
		}
		return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
	}
	_applyNormalization(t, r) {
		let n = [], { knownKeys: o, unknownKeys: u } = this._partitionOptionKeys(t);
		for (let i of o) {
			let s = this._utils.schemas[i], a = s.preprocess(t[i], this._utils);
			this._applyValidation(a, i, s);
			let D$1 = ({ from: p, to: c }) => {
				n.push(typeof c == "string" ? { [c]: p } : { [c.key]: c.value });
			}, l$1 = ({ value: p, redirectTo: c }) => {
				let F$1 = Ut$1(s.deprecated(p, this._utils), a, !0);
				if (F$1 !== !1) if (F$1 === !0) this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, c, this._utils));
				else for (let { value: m } of F$1) {
					let E$1 = {
						key: i,
						value: m
					};
					if (!this._hasDeprecationWarned(E$1)) {
						let A = typeof c == "string" ? {
							key: c,
							value: m
						} : c;
						this._utils.logger.warn(this._deprecatedHandler(E$1, A, this._utils));
					}
				}
			};
			pt$1(s.forward(a, this._utils), a).forEach(D$1);
			let f$1 = zt(s.redirect(a, this._utils), a);
			if (f$1.redirect.forEach(D$1), "remain" in f$1) {
				let p = f$1.remain;
				r[i] = i in r ? s.overlap(r[i], p, this._utils) : p, l$1({ value: p });
			}
			for (let { from: p, to: c } of f$1.redirect) l$1({
				value: p,
				redirectTo: c
			});
		}
		for (let i of u) {
			let s = t[i];
			this._applyUnknownHandler(i, s, r, (a, D$1) => {
				n.push({ [a]: D$1 });
			});
		}
		return n;
	}
	_applyRequiredCheck(t) {
		for (let r of Object.keys(this._utils.schemas)) if (this._identifyMissing(r, t) && this._identifyRequired(r)) throw this._invalidHandler(r, st$1, this._utils);
	}
	_partitionOptionKeys(t) {
		let [r, n] = gn$1(Object.keys(t).filter((o) => !this._identifyMissing(o, t)), (o) => o in this._utils.schemas);
		return {
			knownKeys: r,
			unknownKeys: n
		};
	}
	_applyValidation(t, r, n) {
		let o = Vt$1(n.validate(t, this._utils), t);
		if (o !== !0) throw this._invalidHandler(r, o.value, this._utils);
	}
	_applyUnknownHandler(t, r, n, o) {
		let u = this._unknownHandler(t, r, this._utils);
		if (u) for (let i of Object.keys(u)) {
			if (this._identifyMissing(i, u)) continue;
			let s = u[i];
			i in this._utils.schemas ? o(i, s) : n[i] = s;
		}
	}
	_applyPostprocess(t) {
		let r = this._postprocess(t, this._utils);
		if (r !== he$1) {
			if (r.delete) for (let n of r.delete) delete t[n];
			if (r.override) {
				let { knownKeys: n, unknownKeys: o } = this._partitionOptionKeys(r.override);
				for (let u of n) {
					let i = r.override[u];
					this._applyValidation(i, u, this._utils.schemas[u]), t[u] = i;
				}
				for (let u of o) {
					let i = r.override[u];
					this._applyUnknownHandler(u, i, t, (s, a) => {
						let D$1 = this._utils.schemas[s];
						this._applyValidation(a, s, D$1), t[s] = a;
					});
				}
			}
		}
	}
};
var Gt$1;
function go$1(e, t, { logger: r = !1, isCLI: n = !1, passThrough: o = !1, FlagSchema: u, descriptor: i } = {}) {
	if (n) {
		if (!u) throw new Error("'FlagSchema' option is required.");
		if (!i) throw new Error("'descriptor' option is required.");
	} else i = ie$2;
	let s = o ? Array.isArray(o) ? (f$1, p) => o.includes(f$1) ? { [f$1]: p } : void 0 : (f$1, p) => ({ [f$1]: p }) : (f$1, p, c) => {
		let { _: F$1, ...m } = c.schemas;
		return at$1(f$1, p, {
			...c,
			schemas: m
		});
	}, D$1 = new Et$2(yo$1(t, {
		isCLI: n,
		FlagSchema: u
	}), {
		logger: r,
		unknown: s,
		descriptor: i
	}), l$1 = r !== !1;
	l$1 && Gt$1 && (D$1._hasDeprecationWarned = Gt$1);
	let d$1 = D$1.normalize(e);
	return l$1 && (Gt$1 = D$1._hasDeprecationWarned), d$1;
}
function yo$1(e, { isCLI: t, FlagSchema: r }) {
	let n = [];
	t && n.push(lt$1.create({ name: "_" }));
	for (let o of e) n.push(Ao$1(o, {
		isCLI: t,
		optionInfos: e,
		FlagSchema: r
	})), o.alias && t && n.push(Dt$1.create({
		name: o.alias,
		sourceName: o.name
	}));
	return n;
}
function Ao$1(e, { isCLI: t, optionInfos: r, FlagSchema: n }) {
	let { name: o } = e, u = { name: o }, i, s = {};
	switch (e.type) {
		case "int":
			i = mt$1, t && (u.preprocess = Number);
			break;
		case "string":
			i = Re$2;
			break;
		case "choice":
			i = dt$1, u.choices = e.choices.map((a) => a != null && a.redirect ? {
				...a,
				redirect: { to: {
					key: e.name,
					value: a.redirect
				} }
			} : a);
			break;
		case "boolean":
			i = ft$1;
			break;
		case "flag":
			i = n, u.flags = r.flatMap((a) => [
				a.alias,
				a.description && a.name,
				a.oppositeDescription && `no-${a.name}`
			].filter(Boolean));
			break;
		case "path":
			i = Re$2;
			break;
		default: throw new Error(`Unexpected type ${e.type}`);
	}
	if (e.exception ? u.validate = (a, D$1, l$1) => e.exception(a) || D$1.validate(a, l$1) : u.validate = (a, D$1, l$1) => a === void 0 || D$1.validate(a, l$1), e.redirect && (s.redirect = (a) => a ? { to: typeof e.redirect == "string" ? e.redirect : {
		key: e.redirect.option,
		value: e.redirect.value
	} } : void 0), e.deprecated && (s.deprecated = !0), t && !e.array) {
		let a = u.preprocess || ((D$1) => D$1);
		u.preprocess = (D$1, l$1, d$1) => l$1.preprocess(a(Array.isArray(D$1) ? y(!1, D$1, -1) : D$1), d$1);
	}
	return e.array ? ct$1.create({
		...t ? { preprocess: (a) => Array.isArray(a) ? a : [a] } : {},
		...s,
		valueSchema: i.create(u)
	}) : i.create({
		...u,
		...s
	});
}
var bn$1 = go$1;
var Bo$1 = (e, t, r) => {
	if (!(e && t == null)) {
		if (t.findLast) return t.findLast(r);
		for (let n = t.length - 1; n >= 0; n--) {
			let o = t[n];
			if (r(o, n, t)) return o;
		}
	}
}, Kt = Bo$1;
function qt$1(e, t) {
	if (!t) throw new Error("parserName is required.");
	let r = Kt(!1, e, (o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t));
	if (r) return r;
	let n = `Couldn't resolve parser "${t}".`;
	throw n += " Plugins must be explicitly added to the standalone bundle.", new Pe$2(n);
}
function On$1(e, t) {
	if (!t) throw new Error("astFormat is required.");
	let r = Kt(!1, e, (o) => o.printers && Object.prototype.hasOwnProperty.call(o.printers, t));
	if (r) return r;
	let n = `Couldn't find plugin for AST format "${t}".`;
	throw n += " Plugins must be explicitly added to the standalone bundle.", new Pe$2(n);
}
function ht$1({ plugins: e, parser: t }) {
	return Jt$1(qt$1(e, t), t);
}
function Jt$1(e, t) {
	let r = e.parsers[t];
	return typeof r == "function" ? r() : r;
}
function Sn$1(e, t) {
	let r = e.printers[t];
	return typeof r == "function" ? r() : r;
}
var Nn$1 = {
	astFormat: "estree",
	printer: {},
	originalText: void 0,
	locStart: null,
	locEnd: null
};
async function wo$1(e, t = {}) {
	var d$1;
	let r = { ...e };
	if (!r.parser) if (r.filepath) {
		if (r.parser = un$1(r, { physicalFile: r.filepath }), !r.parser) throw new Ie$1(`No parser could be inferred for file "${r.filepath}".`);
	} else throw new Ie$1("No parser and no file path given, couldn't infer a parser.");
	let n = ot$1({
		plugins: e.plugins,
		showDeprecated: !0
	}).options, o = {
		...Nn$1,
		...Object.fromEntries(n.filter((f$1) => f$1.default !== void 0).map((f$1) => [f$1.name, f$1.default]))
	}, u = qt$1(r.plugins, r.parser), i = await Jt$1(u, r.parser);
	r.astFormat = i.astFormat, r.locEnd = i.locEnd, r.locStart = i.locStart;
	let s = (d$1 = u.printers) != null && d$1[i.astFormat] ? u : On$1(r.plugins, i.astFormat);
	r.printer = await Sn$1(s, i.astFormat);
	let D$1 = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, f$1]) => f$1 !== void 0)) : {}, l$1 = {
		...o,
		...D$1
	};
	for (let [f$1, p] of Object.entries(l$1)) (r[f$1] === null || r[f$1] === void 0) && (r[f$1] = p);
	return r.parser === "json" && (r.trailingComma = "none"), bn$1(r, n, {
		passThrough: Object.keys(Nn$1),
		...t
	});
}
var se$1 = wo$1;
var Vn$1 = Me$2($n$1(), 1);
async function ko$1(e, t) {
	let r = await ht$1(t), n = r.preprocess ? r.preprocess(e, t) : e;
	t.originalText = n;
	let o;
	try {
		o = await r.parse(n, t, t);
	} catch (u) {
		Lo$1(u, e);
	}
	return {
		text: n,
		ast: o
	};
}
function Lo$1(e, t) {
	let { loc: r } = e;
	if (r) {
		let n = (0, Vn$1.codeFrameColumns)(t, r, { highlightCode: !0 });
		throw e.message += `
` + n, e.codeFrame = n, e;
	}
	throw e;
}
var ce$1 = ko$1;
async function Un$1(e, t, r, n, o) {
	let { embeddedLanguageFormatting: u, printer: { embed: i, hasPrettierIgnore: s = () => !1, getVisitorKeys: a } } = r;
	if (!i || u !== "auto") return;
	if (i.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
	let D$1 = X$1(i.getVisitorKeys ?? a), l$1 = [];
	p();
	let d$1 = e.stack;
	for (let { print: c, node: F$1, pathStack: m } of l$1) try {
		e.stack = m;
		let E$1 = await c(f$1, t, e, r);
		E$1 && o.set(F$1, E$1);
	} catch (E$1) {
		if (globalThis.PRETTIER_DEBUG) throw E$1;
	}
	e.stack = d$1;
	function f$1(c, F$1) {
		return Po$1(c, F$1, r, n);
	}
	function p() {
		let { node: c } = e;
		if (c === null || typeof c != "object" || s(e)) return;
		for (let m of D$1(c)) Array.isArray(c[m]) ? e.each(p, m) : e.call(p, m);
		let F$1 = i(e, r);
		if (F$1) {
			if (typeof F$1 == "function") {
				l$1.push({
					print: F$1,
					node: c,
					pathStack: [...e.stack]
				});
				return;
			}
			o.set(c, F$1);
		}
	}
}
async function Po$1(e, t, r, n) {
	let o = await se$1({
		...r,
		...t,
		parentParser: r.parser,
		originalText: e
	}, { passThrough: !0 }), { ast: u } = await ce$1(e, o);
	return Ze$1(await n(u, o));
}
function Io$1(e, t) {
	let { originalText: r, [Symbol.for("comments")]: n, locStart: o, locEnd: u, [Symbol.for("printedComments")]: i } = t, { node: s } = e, a = o(s), D$1 = u(s);
	for (let l$1 of n) o(l$1) >= a && u(l$1) <= D$1 && i.add(l$1);
	return r.slice(a, D$1);
}
var zn$1 = Io$1;
async function Ye$1(e, t) {
	({ast: e} = await Qt$1(e, t));
	let r = /* @__PURE__ */ new Map(), n = new Mr$2(e), o = tn$1(t), u = /* @__PURE__ */ new Map();
	await Un$1(n, s, t, Ye$1, u);
	let i = await Gn$1(n, t, s, void 0, u);
	return en$1(t), i;
	function s(D$1, l$1) {
		return D$1 === void 0 || D$1 === n ? a(l$1) : Array.isArray(D$1) ? n.call(() => a(l$1), ...D$1) : n.call(() => a(l$1), D$1);
	}
	function a(D$1) {
		o(n);
		let l$1 = n.node;
		if (l$1 == null) return "";
		let d$1 = l$1 && typeof l$1 == "object" && D$1 === void 0;
		if (d$1 && r.has(l$1)) return r.get(l$1);
		let f$1 = Gn$1(n, t, s, D$1, u);
		return d$1 && r.set(l$1, f$1), f$1;
	}
}
function Gn$1(e, t, r, n, o) {
	var a;
	let { node: u } = e, { printer: i } = t, s;
	return (a = i.hasPrettierIgnore) != null && a.call(i, e) ? s = zn$1(e, t) : o.has(u) ? s = o.get(u) : s = i.print(e, t, r, n), u === t.cursorNode && (s = Qe$1(s, (D$1) => [
		ve$1,
		D$1,
		ve$1
	])), i.printComment && (!i.willPrintOwnComments || !i.willPrintOwnComments(e, t)) && (s = Qr$2(e, s, t)), s;
}
async function Qt$1(e, t) {
	let r = e.comments ?? [];
	t[Symbol.for("comments")] = r, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Jr$2(e, t);
	let { printer: { preprocess: n } } = t;
	return e = n ? await n(e, t) : e, {
		ast: e,
		comments: r
	};
}
function Ro$1(e, t) {
	let { cursorOffset: r, locStart: n, locEnd: o } = t, u = X$1(t.printer.getVisitorKeys), i = (a) => n(a) <= r && o(a) >= r, s = e;
	for (let a of Ur$2(e, {
		getVisitorKeys: u,
		filter: i
	})) s = a;
	return s;
}
var Kn$1 = Ro$1;
function Yo$1(e, t) {
	let { printer: { massageAstNode: r, getVisitorKeys: n } } = t;
	if (!r) return e;
	let o = X$1(n), u = r.ignoredProperties ?? /* @__PURE__ */ new Set();
	return i(e);
	function i(s, a) {
		if (!(s !== null && typeof s == "object")) return s;
		if (Array.isArray(s)) return s.map((f$1) => i(f$1, a)).filter(Boolean);
		let D$1 = {}, l$1 = new Set(o(s));
		for (let f$1 in s) !Object.prototype.hasOwnProperty.call(s, f$1) || u.has(f$1) || (l$1.has(f$1) ? D$1[f$1] = i(s[f$1], s) : D$1[f$1] = s[f$1]);
		let d$1 = r(s, D$1, a);
		if (d$1 !== null) return d$1 ?? D$1;
	}
}
var qn$1 = Yo$1;
var jo$1 = (e, t, r) => {
	if (!(e && t == null)) {
		if (t.findLastIndex) return t.findLastIndex(r);
		for (let n = t.length - 1; n >= 0; n--) {
			let o = t[n];
			if (r(o, n, t)) return n;
		}
		return -1;
	}
}, Jn$1 = jo$1;
var Ho$1 = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function Wo$1(e, t) {
	let r = [e.node, ...e.parentNodes], n = new Set([t.node, ...t.parentNodes]);
	return r.find((o) => Qn$1.has(o.type) && n.has(o));
}
function Xn$1(e) {
	let t = Jn$1(!1, e, (r) => r.type !== "Program" && r.type !== "File");
	return t === -1 ? e : e.slice(0, t + 1);
}
function Mo$1(e, t, { locStart: r, locEnd: n }) {
	let o = e.node, u = t.node;
	if (o === u) return {
		startNode: o,
		endNode: u
	};
	let i = r(e.node);
	for (let a of Xn$1(t.parentNodes)) if (r(a) >= i) u = a;
	else break;
	let s = n(t.node);
	for (let a of Xn$1(e.parentNodes)) {
		if (n(a) <= s) o = a;
		else break;
		if (o === u) break;
	}
	return {
		startNode: o,
		endNode: u
	};
}
function er$1(e, t, r, n, o = [], u) {
	let { locStart: i, locEnd: s } = r, a = i(e), D$1 = s(e);
	if (!(t > D$1 || t < a || u === "rangeEnd" && t === a || u === "rangeStart" && t === D$1)) {
		for (let l$1 of ut$1(e, r)) {
			let d$1 = er$1(l$1, t, r, n, [e, ...o], u);
			if (d$1) return d$1;
		}
		if (!n || n(e, o[0])) return {
			node: e,
			parentNodes: o
		};
	}
}
function $o$1(e, t) {
	return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var Qn$1 = new Set([
	"JsonRoot",
	"ObjectExpression",
	"ArrayExpression",
	"StringLiteral",
	"NumericLiteral",
	"BooleanLiteral",
	"NullLiteral",
	"UnaryExpression",
	"TemplateLiteral"
]), Vo$1 = new Set([
	"OperationDefinition",
	"FragmentDefinition",
	"VariableDefinition",
	"TypeExtensionDefinition",
	"ObjectTypeDefinition",
	"FieldDefinition",
	"DirectiveDefinition",
	"EnumTypeDefinition",
	"EnumValueDefinition",
	"InputValueDefinition",
	"InputObjectTypeDefinition",
	"SchemaDefinition",
	"OperationTypeDefinition",
	"InterfaceTypeDefinition",
	"UnionTypeDefinition",
	"ScalarTypeDefinition"
]);
function Zn$1(e, t, r) {
	if (!t) return !1;
	switch (e.parser) {
		case "flow":
		case "babel":
		case "babel-flow":
		case "babel-ts":
		case "typescript":
		case "acorn":
		case "espree":
		case "meriyah":
		case "__babel_estree": return $o$1(t.type, r == null ? void 0 : r.type);
		case "json":
		case "json5":
		case "jsonc":
		case "json-stringify": return Qn$1.has(t.type);
		case "graphql": return Vo$1.has(t.kind);
		case "vue": return t.tag !== "root";
	}
	return !1;
}
function eu$1(e, t, r) {
	let { rangeStart: n, rangeEnd: o, locStart: u, locEnd: i } = t;
	ke$1.ok(o > n);
	let s = e.slice(n, o).search(/\S/u), a = s === -1;
	if (!a) for (n += s; o > n && !/\S/u.test(e[o - 1]); --o);
	let D$1 = er$1(r, n, t, (p, c) => Zn$1(t, p, c), [], "rangeStart"), l$1 = a ? D$1 : er$1(r, o, t, (p) => Zn$1(t, p), [], "rangeEnd");
	if (!D$1 || !l$1) return {
		rangeStart: 0,
		rangeEnd: 0
	};
	let d$1, f$1;
	if (Ho$1(t)) {
		let p = Wo$1(D$1, l$1);
		d$1 = p, f$1 = p;
	} else ({startNode: d$1, endNode: f$1} = Mo$1(D$1, l$1, t));
	return {
		rangeStart: Math.min(u(d$1), u(f$1)),
		rangeEnd: Math.max(i(d$1), i(f$1))
	};
}
var uu$1 = "﻿", tu = Symbol("cursor");
async function ou$1(e, t, r = 0) {
	if (!e || e.trim().length === 0) return {
		formatted: "",
		cursorOffset: -1,
		comments: []
	};
	let { ast: n, text: o } = await ce$1(e, t);
	t.cursorOffset >= 0 && (t.cursorNode = Kn$1(n, t));
	let u = await Ye$1(n, t, r);
	r > 0 && (u = Je$1([q$1, u], r, t.tabWidth));
	let i = Fe$1(u, t);
	if (r > 0) {
		let a = i.formatted.trim();
		i.cursorNodeStart !== void 0 && (i.cursorNodeStart -= i.formatted.indexOf(a)), i.formatted = a + Be$2(t.endOfLine);
	}
	let s = t[Symbol.for("comments")];
	if (t.cursorOffset >= 0) {
		let a, D$1, l$1, d$1, f$1;
		if (t.cursorNode && i.cursorNodeText ? (a = t.locStart(t.cursorNode), D$1 = o.slice(a, t.locEnd(t.cursorNode)), l$1 = t.cursorOffset - a, d$1 = i.cursorNodeStart, f$1 = i.cursorNodeText) : (a = 0, D$1 = o, l$1 = t.cursorOffset, d$1 = 0, f$1 = i.formatted), D$1 === f$1) return {
			formatted: i.formatted,
			cursorOffset: d$1 + l$1,
			comments: s
		};
		let p = D$1.split("");
		p.splice(l$1, 0, tu);
		let F$1 = dr$2(p, f$1.split("")), m = d$1;
		for (let E$1 of F$1) if (E$1.removed) {
			if (E$1.value.includes(tu)) break;
		} else m += E$1.count;
		return {
			formatted: i.formatted,
			cursorOffset: m,
			comments: s
		};
	}
	return {
		formatted: i.formatted,
		cursorOffset: -1,
		comments: s
	};
}
async function Uo$1(e, t) {
	let { ast: r, text: n } = await ce$1(e, t), { rangeStart: o, rangeEnd: u } = eu$1(n, t, r), i = n.slice(o, u), s = Math.min(o, n.lastIndexOf(`
`, o) + 1), a = n.slice(s, o).match(/^\s*/u)[0], D$1 = me$1(a, t.tabWidth), l$1 = await ou$1(i, {
		...t,
		rangeStart: 0,
		rangeEnd: Number.POSITIVE_INFINITY,
		cursorOffset: t.cursorOffset > o && t.cursorOffset <= u ? t.cursorOffset - o : -1,
		endOfLine: "lf"
	}, D$1), d$1 = l$1.formatted.trimEnd(), { cursorOffset: f$1 } = t;
	f$1 > u ? f$1 += d$1.length - i.length : l$1.cursorOffset >= 0 && (f$1 = l$1.cursorOffset + o);
	let p = n.slice(0, o) + d$1 + n.slice(u);
	if (t.endOfLine !== "lf") {
		let c = Be$2(t.endOfLine);
		f$1 >= 0 && c === `\r
` && (f$1 += wt$2(p.slice(0, f$1), `
`)), p = ne$1(!1, p, `
`, c);
	}
	return {
		formatted: p,
		cursorOffset: f$1,
		comments: l$1.comments
	};
}
function tr$1(e, t, r) {
	return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? r : t;
}
function ru$1(e, t) {
	let { cursorOffset: r, rangeStart: n, rangeEnd: o } = t;
	return r = tr$1(e, r, -1), n = tr$1(e, n, 0), o = tr$1(e, o, e.length), {
		...t,
		cursorOffset: r,
		rangeStart: n,
		rangeEnd: o
	};
}
function iu$1(e, t) {
	let { cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: u } = ru$1(e, t), i = e.charAt(0) === uu$1;
	if (i && (e = e.slice(1), r--, n--, o--), u === "auto" && (u = Fr$1(e)), e.includes("\r")) {
		let s = (a) => wt$2(e.slice(0, Math.max(a, 0)), `\r
`);
		r -= s(r), n -= s(n), o -= s(o), e = mr$2(e);
	}
	return {
		hasBOM: i,
		text: e,
		options: ru$1(e, {
			...t,
			cursorOffset: r,
			rangeStart: n,
			rangeEnd: o,
			endOfLine: u
		})
	};
}
async function nu$1(e, t) {
	let r = await ht$1(t);
	return !r.hasPragma || r.hasPragma(e);
}
async function rr$1(e, t) {
	let { hasBOM: r, text: n, options: o } = iu$1(e, await se$1(t));
	if (o.rangeStart >= o.rangeEnd && n !== "" || o.requirePragma && !await nu$1(n, o)) return {
		formatted: e,
		cursorOffset: t.cursorOffset,
		comments: []
	};
	let u;
	return o.rangeStart > 0 || o.rangeEnd < n.length ? u = await Uo$1(n, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await nu$1(n, o) && (n = o.printer.insertPragma(n)), u = await ou$1(n, o)), r && (u.formatted = uu$1 + u.formatted, u.cursorOffset >= 0 && u.cursorOffset++), u;
}
async function su$1(e, t, r) {
	let { text: n, options: o } = iu$1(e, await se$1(t)), u = await ce$1(n, o);
	return r && (r.preprocessForPrint && (u.ast = await Qt$1(u.ast, o)), r.massage && (u.ast = qn$1(u.ast, o))), u;
}
async function au$1(e, t) {
	t = await se$1(t);
	return Fe$1(await Ye$1(e, t), t);
}
async function Du$1(e, t) {
	let { formatted: n } = await rr$1(Or$2(e), {
		...t,
		parser: "__js_expression"
	});
	return n;
}
async function lu$1(e, t) {
	t = await se$1(t);
	let { ast: r } = await ce$1(e, t);
	return Ye$1(r, t);
}
async function cu$1(e, t) {
	return Fe$1(e, await se$1(t));
}
var nr$1 = {};
We(nr$1, {
	builders: () => Go$1,
	printer: () => Ko$1,
	utils: () => qo$1
});
var Go$1 = {
	join: be$2,
	line: Ke$1,
	softline: vr$2,
	hardline: q$1,
	literalline: qe,
	group: _t$1,
	conditionalGroup: Ar$2,
	fill: Ge$1,
	lineSuffix: xe$1,
	lineSuffixBoundary: xr$2,
	cursor: ve$1,
	breakParent: de$1,
	ifBreak: Br$2,
	trim: _r$2,
	indent: De$1,
	indentIfBreak: wr$2,
	align: ae$2,
	addAlignmentToDoc: Je$1,
	markAsRoot: gr$2,
	dedentToRoot: Cr$1,
	dedent: yr$2,
	hardlineWithoutBreakParent: _e$2,
	literallineWithoutBreakParent: vt$2,
	label: br$2,
	concat: (e) => e
}, Ko$1 = { printDocToString: Fe$1 }, qo$1 = {
	willBreak: Ir$2,
	traverseDoc: we$1,
	findInDoc: Xe$1,
	mapDoc: Ne$1,
	removeLines: Yr$1,
	stripTrailingHardline: Ze$1,
	replaceEndOfLine: jr$2,
	canBreak: Hr$2
};
var fu$1 = "3.3.3";
var or$1 = {};
We(or$1, {
	addDanglingComment: () => re$2,
	addLeadingComment: () => ue,
	addTrailingComment: () => oe$1,
	getAlignmentSize: () => me$1,
	getIndentSize: () => pu$1,
	getMaxContinuousCount: () => du$1,
	getNextNonSpaceNonCommentCharacter: () => Fu$1,
	getNextNonSpaceNonCommentCharacterIndex: () => si$1,
	getStringWidth: () => Oe$2,
	hasNewline: () => V$2,
	hasNewlineInRange: () => mu$1,
	hasSpaces: () => Eu$1,
	isNextLineEmpty: () => ci$1,
	isNextLineEmptyAfterIndex: () => gt$1,
	isPreviousLineEmpty: () => Di$1,
	makeString: () => hu$1,
	skip: () => Ee$1,
	skipEverythingButNewLine: () => nt$1,
	skipInlineComment: () => Ce$1,
	skipNewline: () => M$1,
	skipSpaces: () => T,
	skipToLineEnd: () => rt$1,
	skipTrailingComment: () => ge$2,
	skipWhitespace: () => zr$2
});
function Jo$1(e, t) {
	if (t === !1) return !1;
	if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
		for (let r = t + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
	}
	return t;
}
var Ce$1 = Jo$1;
function Xo$1(e, t) {
	return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? nt$1(e, t) : t;
}
var ge$2 = Xo$1;
function Zo$1(e, t) {
	let r = null, n = t;
	for (; n !== r;) r = n, n = T(e, n), n = Ce$1(e, n), n = ge$2(e, n), n = M$1(e, n);
	return n;
}
var je$2 = Zo$1;
function Qo$1(e, t) {
	let r = null, n = t;
	for (; n !== r;) r = n, n = rt$1(e, n), n = Ce$1(e, n), n = T(e, n);
	return n = ge$2(e, n), n = M$1(e, n), n !== !1 && V$2(e, n);
}
var gt$1 = Qo$1;
function ei$1(e, t) {
	let r = e.lastIndexOf(`
`);
	return r === -1 ? 0 : me$1(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
}
var pu$1 = ei$1;
function ur$1(e) {
	if (typeof e != "string") throw new TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function ti$1(e, t) {
	let r = e.match(new RegExp(`(${ur$1(t)})+`, "gu"));
	return r === null ? 0 : r.reduce((n, o) => Math.max(n, o.length / t.length), 0);
}
var du$1 = ti$1;
function ri$1(e, t) {
	let r = je$2(e, t);
	return r === !1 ? "" : e.charAt(r);
}
var Fu$1 = ri$1;
function ni$1(e, t, r) {
	for (let n = t; n < r; ++n) if (e.charAt(n) === `
`) return !0;
	return !1;
}
var mu$1 = ni$1;
function ui$1(e, t, r = {}) {
	return T(e, r.backwards ? t - 1 : t, r) !== t;
}
var Eu$1 = ui$1;
function oi$1(e, t, r) {
	let n = t === "\"" ? "'" : "\"";
	return t + ne$1(!1, e, /\\(.)|(["'])/gsu, (i, s, a) => s === n ? s : a === t ? "\\" + a : a || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s)) + t;
}
var hu$1 = oi$1;
function ii$1(e, t, r) {
	return je$2(e, r(t));
}
function si$1(e, t) {
	return arguments.length === 2 || typeof t == "number" ? je$2(e, t) : ii$1(...arguments);
}
function ai$1(e, t, r) {
	return Le$1(e, r(t));
}
function Di$1(e, t) {
	return arguments.length === 2 || typeof t == "number" ? Le$1(e, t) : ai$1(...arguments);
}
function li$1(e, t, r) {
	return gt$1(e, r(t));
}
function ci$1(e, t) {
	return arguments.length === 2 || typeof t == "number" ? gt$1(e, t) : li$1(...arguments);
}
function fe$1(e, t = 1) {
	return async (...r) => {
		let n = r[t] ?? {}, o = n.plugins ?? [];
		return r[t] = {
			...n,
			plugins: Array.isArray(o) ? o : Object.values(o)
		}, e(...r);
	};
}
var Cu$1 = fe$1(rr$1);
async function gu$1(e, t) {
	let { formatted: r } = await Cu$1(e, {
		...t,
		cursorOffset: -1
	});
	return r;
}
async function fi$1(e, t) {
	return await gu$1(e, t) === e;
}
var pi$1 = fe$1(ot$1, 0), di$1 = {
	parse: fe$1(su$1),
	formatAST: fe$1(au$1),
	formatDoc: fe$1(Du$1),
	printToDoc: fe$1(lu$1),
	printDocToString: fe$1(cu$1)
};
var $s$1 = Object.create;
var je$1 = Object.defineProperty;
var Vs$1 = Object.getOwnPropertyDescriptor;
var qs$1 = Object.getOwnPropertyNames;
var zs$1 = Object.getPrototypeOf, Ks$1 = Object.prototype.hasOwnProperty;
var Hs$1 = (a, t) => () => (t || a((t = { exports: {} }).exports, t), t.exports), Ws$1 = (a, t) => {
	for (var e in t) je$1(a, e, {
		get: t[e],
		enumerable: !0
	});
}, Js$1 = (a, t, e, s) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of qs$1(t)) !Ks$1.call(a, i) && i !== e && je$1(a, i, {
		get: () => t[i],
		enumerable: !(s = Vs$1(t, i)) || s.enumerable
	});
	return a;
};
var vt$1 = (a, t, e) => (e = a != null ? $s$1(zs$1(a)) : {}, Js$1(t || !a || !a.__esModule ? je$1(e, "default", {
	value: a,
	enumerable: !0
}) : e, a));
var At$1 = Hs$1((xe$2) => {
	"use strict";
	Object.defineProperty(xe$2, "__esModule", { value: !0 });
	function Ht$2(a, t) {
		if (a == null) return {};
		var e = {}, s = Object.keys(a), i, r;
		for (r = 0; r < s.length; r++) i = s[r], !(t.indexOf(i) >= 0) && (e[i] = a[i]);
		return e;
	}
	var F$1 = class {
		constructor(t, e, s) {
			this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = e, this.index = s;
		}
	}, ee$1 = class {
		constructor(t, e) {
			this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = e;
		}
	};
	function v$1(a, t) {
		let { line: e, column: s, index: i } = a;
		return new F$1(e, s + t, i + t);
	}
	var Lt$2 = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED", Xs$1 = {
		ImportMetaOutsideModule: {
			message: `import.meta may appear only with 'sourceType: "module"'`,
			code: Lt$2
		},
		ImportOutsideModule: {
			message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
			code: Lt$2
		}
	}, Dt$2 = {
		ArrayPattern: "array destructuring pattern",
		AssignmentExpression: "assignment expression",
		AssignmentPattern: "assignment expression",
		ArrowFunctionExpression: "arrow function expression",
		ConditionalExpression: "conditional expression",
		CatchClause: "catch clause",
		ForOfStatement: "for-of statement",
		ForInStatement: "for-in statement",
		ForStatement: "for-loop",
		FormalParameters: "function parameter list",
		Identifier: "identifier",
		ImportSpecifier: "import specifier",
		ImportDefaultSpecifier: "import default specifier",
		ImportNamespaceSpecifier: "import namespace specifier",
		ObjectPattern: "object destructuring pattern",
		ParenthesizedExpression: "parenthesized expression",
		RestElement: "rest element",
		UpdateExpression: {
			true: "prefix operation",
			false: "postfix operation"
		},
		VariableDeclarator: "variable declaration",
		YieldExpression: "yield expression"
	}, Ce$2 = (a) => a.type === "UpdateExpression" ? Dt$2.UpdateExpression[`${a.prefix}`] : Dt$2[a.type], Gs$1 = {
		AccessorIsGenerator: ({ kind: a }) => `A ${a}ter cannot be a generator.`,
		ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
		AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
		AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
		AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
		AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
		AwaitUsingNotInAsyncContext: "'await using' is only allowed within async functions and at the top levels of modules.",
		AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
		AwaitNotInAsyncFunction: "'await' is only allowed within async functions.",
		BadGetterArity: "A 'get' accessor must not have any formal parameters.",
		BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
		BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
		ConstructorClassField: "Classes may not have a field named 'constructor'.",
		ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
		ConstructorIsAccessor: "Class constructor may not be an accessor.",
		ConstructorIsAsync: "Constructor can't be an async function.",
		ConstructorIsGenerator: "Constructor can't be a generator.",
		DeclarationMissingInitializer: ({ kind: a }) => `Missing initializer in ${a} declaration.`,
		DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
		DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
		DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
		DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
		DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
		DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
		DecoratorStaticBlock: "Decorators can't be used with a static block.",
		DeferImportRequiresNamespace: "Only `import defer * as x from \"./module\"` is valid.",
		DeletePrivateField: "Deleting a private field is not allowed.",
		DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
		DuplicateConstructor: "Duplicate constructor in the same class.",
		DuplicateDefaultExport: "Only one default export allowed per module.",
		DuplicateExport: ({ exportName: a }) => `\`${a}\` has already been exported. Exported identifiers must be unique.`,
		DuplicateProto: "Redefinition of __proto__ property.",
		DuplicateRegExpFlags: "Duplicate regular expression flag.",
		DynamicImportPhaseRequiresImportExpressions: ({ phase: a }) => `'import.${a}(...)' can only be parsed when using the 'createImportExpressions' option.`,
		ElementAfterRest: "Rest element must be last element.",
		EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
		ExportBindingIsString: ({ localName: a, exportName: t }) => `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${a}' as '${t}' } from 'some-module'\`?`,
		ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
		ForInOfLoopInitializer: ({ type: a }) => `'${a === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`,
		ForInUsing: "For-in loop may not start with 'using' declaration.",
		ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
		ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
		GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
		IllegalBreakContinue: ({ type: a }) => `Unsyntactic ${a === "BreakStatement" ? "break" : "continue"}.`,
		IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
		IllegalReturn: "'return' outside of function.",
		ImportAttributesUseAssert: "The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedAssertSyntax: true` option in the import attributes plugin to suppress this error.",
		ImportBindingIsString: ({ importName: a }) => `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${a}" as foo }\`?`,
		ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.",
		ImportCallArity: ({ maxArgumentCount: a }) => `\`import()\` requires exactly ${a === 1 ? "one argument" : "one or two arguments"}.`,
		ImportCallNotNewExpression: "Cannot use new with import(...).",
		ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
		ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
		ImportReflectionHasAssertion: "`import module x` cannot have assertions.",
		ImportReflectionNotBinding: "Only `import module x from \"./module\"` is valid.",
		IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
		InvalidBigIntLiteral: "Invalid BigIntLiteral.",
		InvalidCodePoint: "Code point out of bounds.",
		InvalidCoverInitializedName: "Invalid shorthand property initializer.",
		InvalidDecimal: "Invalid decimal.",
		InvalidDigit: ({ radix: a }) => `Expected number in radix ${a}.`,
		InvalidEscapeSequence: "Bad character escape sequence.",
		InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
		InvalidEscapedReservedWord: ({ reservedWord: a }) => `Escape sequence in keyword ${a}.`,
		InvalidIdentifier: ({ identifierName: a }) => `Invalid identifier ${a}.`,
		InvalidLhs: ({ ancestor: a }) => `Invalid left-hand side in ${Ce$2(a)}.`,
		InvalidLhsBinding: ({ ancestor: a }) => `Binding invalid left-hand side in ${Ce$2(a)}.`,
		InvalidLhsOptionalChaining: ({ ancestor: a }) => `Invalid optional chaining in the left-hand side of ${Ce$2(a)}.`,
		InvalidNumber: "Invalid number.",
		InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
		InvalidOrUnexpectedToken: ({ unexpected: a }) => `Unexpected character '${a}'.`,
		InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
		InvalidPrivateFieldResolution: ({ identifierName: a }) => `Private name #${a} is not defined.`,
		InvalidPropertyBindingPattern: "Binding member expression.",
		InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
		InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
		LabelRedeclaration: ({ labelName: a }) => `Label '${a}' is already declared.`,
		LetInLexicalBinding: "'let' is disallowed as a lexically bound name.",
		LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
		MalformedRegExpFlags: "Invalid regular expression flag.",
		MissingClassName: "A class name is required.",
		MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
		MissingSemicolon: "Missing semicolon.",
		MissingPlugin: ({ missingPlugin: a }) => `This experimental syntax requires enabling the parser plugin: ${a.map((t) => JSON.stringify(t)).join(", ")}.`,
		MissingOneOfPlugins: ({ missingPlugin: a }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${a.map((t) => JSON.stringify(t)).join(", ")}.`,
		MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
		MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
		ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
		ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
		ModuleAttributesWithDuplicateKeys: ({ key: a }) => `Duplicate key "${a}" is not allowed in module attributes.`,
		ModuleExportNameHasLoneSurrogate: ({ surrogateCharCode: a }) => `An export name cannot include a lone surrogate, found '\\u${a.toString(16)}'.`,
		ModuleExportUndefined: ({ localName: a }) => `Export '${a}' is not defined.`,
		MultipleDefaultsInSwitch: "Multiple default clauses.",
		NewlineAfterThrow: "Illegal newline after throw.",
		NoCatchOrFinally: "Missing catch or finally clause.",
		NumberIdentifier: "Identifier directly after number.",
		NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
		ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
		OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
		OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
		OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
		ParamDupe: "Argument name clash.",
		PatternHasAccessor: "Object pattern can't contain getter or setter.",
		PatternHasMethod: "Object pattern can't contain methods.",
		PrivateInExpectedIn: ({ identifierName: a }) => `Private names are only allowed in property accesses (\`obj.#${a}\`) or in \`in\` expressions (\`#${a} in obj\`).`,
		PrivateNameRedeclaration: ({ identifierName: a }) => `Duplicate private name #${a}.`,
		RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
		RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
		RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
		RecordNoProto: "'__proto__' is not allowed in Record expressions.",
		RestTrailingComma: "Unexpected trailing comma after rest element.",
		SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
		SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
		SourcePhaseImportRequiresDefault: "Only `import source x from \"./module\"` is valid.",
		StaticPrototype: "Classes may not have static property named prototype.",
		SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
		SuperPrivateField: "Private fields can't be accessed on super.",
		TrailingDecorator: "Decorators must be attached to a class element.",
		TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
		TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
		TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
		UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
		UnexpectedAwaitAfterPipelineBody: "Unexpected \"await\" after pipeline body; await must have parentheses in minimal proposal.",
		UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
		UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
		UnexpectedKeyword: ({ keyword: a }) => `Unexpected keyword '${a}'.`,
		UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
		UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
		UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
		UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
		UnexpectedPrivateField: "Unexpected private name.",
		UnexpectedReservedWord: ({ reservedWord: a }) => `Unexpected reserved word '${a}'.`,
		UnexpectedSuper: "'super' is only allowed in object methods and classes.",
		UnexpectedToken: ({ expected: a, unexpected: t }) => `Unexpected token${t ? ` '${t}'.` : ""}${a ? `, expected "${a}"` : ""}`,
		UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
		UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script`.",
		UnsupportedBind: "Binding should be performed on object property.",
		UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
		UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
		UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
		UnsupportedMetaProperty: ({ target: a, onlyValidPropertyName: t }) => `The only valid meta property for ${a} is ${a}.${t}.`,
		UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
		UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
		UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
		UnterminatedComment: "Unterminated comment.",
		UnterminatedRegExp: "Unterminated regular expression.",
		UnterminatedString: "Unterminated string constant.",
		UnterminatedTemplate: "Unterminated template.",
		UsingDeclarationExport: "Using declaration cannot be exported.",
		UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
		VarRedeclaration: ({ identifierName: a }) => `Identifier '${a}' has already been declared.`,
		YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
		YieldInParameter: "Yield expression is not allowed in formal parameters.",
		ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
	}, Ys$1 = {
		StrictDelete: "Deleting local variable in strict mode.",
		StrictEvalArguments: ({ referenceName: a }) => `Assigning to '${a}' in strict mode.`,
		StrictEvalArgumentsBinding: ({ bindingName: a }) => `Binding '${a}' in strict mode.`,
		StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
		StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
		StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
		StrictWith: "'with' in strict mode."
	}, Qs$1 = new Set([
		"ArrowFunctionExpression",
		"AssignmentExpression",
		"ConditionalExpression",
		"YieldExpression"
	]), Zs$1 = {
		PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
		PipeTopicRequiresHackPipes: "Topic reference is used, but the pipelineOperator plugin was not passed a \"proposal\": \"hack\" or \"smart\" option.",
		PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
		PipeTopicUnconfiguredToken: ({ token: a }) => `Invalid topic token ${a}. In order to use ${a} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${a}" }.`,
		PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
		PipeUnparenthesizedBody: ({ type: a }) => `Hack-style pipe body cannot be an unparenthesized ${Ce$2({ type: a })}; please wrap it in parentheses.`,
		PipelineBodyNoArrow: "Unexpected arrow \"=>\" after pipeline body; arrow function in pipeline body must be parenthesized.",
		PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
		PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
		PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
		PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
		PrimaryTopicRequiresSmartPipeline: "Topic reference is used, but the pipelineOperator plugin was not passed a \"proposal\": \"hack\" or \"smart\" option."
	}, ei$2 = ["toMessage"], ti$2 = ["message"];
	function Mt$2(a, t, e) {
		Object.defineProperty(a, t, {
			enumerable: !1,
			configurable: !0,
			value: e
		});
	}
	function si$2(a) {
		let { toMessage: t } = a, e = Ht$2(a, ei$2);
		return function s(i, r) {
			let n = /* @__PURE__ */ new SyntaxError();
			return Object.assign(n, e, {
				loc: i,
				pos: i.index
			}), "missingPlugin" in r && Object.assign(n, { missingPlugin: r.missingPlugin }), Mt$2(n, "clone", function(h = {}) {
				var c;
				let { line: l$1, column: u, index: f$1 } = (c = h.loc) != null ? c : i;
				return s(new F$1(l$1, u, f$1), Object.assign({}, r, h.details));
			}), Mt$2(n, "details", r), Object.defineProperty(n, "message", {
				configurable: !0,
				get() {
					let o = `${t(r)} (${i.line}:${i.column})`;
					return this.message = o, o;
				},
				set(o) {
					Object.defineProperty(this, "message", {
						value: o,
						writable: !0
					});
				}
			}), n;
		};
	}
	function j$1(a, t) {
		if (Array.isArray(a)) return (s) => j$1(s, a[0]);
		let e = {};
		for (let s of Object.keys(a)) {
			let i = a[s], r = typeof i == "string" ? { message: () => i } : typeof i == "function" ? { message: i } : i, { message: n } = r, o = Ht$2(r, ti$2), h = typeof n == "string" ? () => n : n;
			e[s] = si$2(Object.assign({
				code: "BABEL_PARSER_SYNTAX_ERROR",
				reasonCode: s,
				toMessage: h
			}, t ? { syntaxPlugin: t } : {}, o));
		}
		return e;
	}
	var p = Object.assign({}, j$1(Xs$1), j$1(Gs$1), j$1(Ys$1), j$1`pipelineOperator`(Zs$1)), { defineProperty: ii$2 } = Object, Ot$2 = (a, t) => {
		a && ii$2(a, t, {
			enumerable: !1,
			value: a[t]
		});
	};
	function oe$2(a) {
		return Ot$2(a.loc.start, "index"), Ot$2(a.loc.end, "index"), a;
	}
	var ri$2 = (a) => class extends a {
		parse() {
			let e = oe$2(super.parse());
			return this.options.tokens && (e.tokens = e.tokens.map(oe$2)), e;
		}
		parseRegExpLiteral({ pattern: e, flags: s }) {
			let i = null;
			try {
				i = new RegExp(e, s);
			} catch {}
			let r = this.estreeParseLiteral(i);
			return r.regex = {
				pattern: e,
				flags: s
			}, r;
		}
		parseBigIntLiteral(e) {
			let s;
			try {
				s = BigInt(e);
			} catch {
				s = null;
			}
			let i = this.estreeParseLiteral(s);
			return i.bigint = String(i.value || e), i;
		}
		parseDecimalLiteral(e) {
			let i = this.estreeParseLiteral(null);
			return i.decimal = String(i.value || e), i;
		}
		estreeParseLiteral(e) {
			return this.parseLiteral(e, "Literal");
		}
		parseStringLiteral(e) {
			return this.estreeParseLiteral(e);
		}
		parseNumericLiteral(e) {
			return this.estreeParseLiteral(e);
		}
		parseNullLiteral() {
			return this.estreeParseLiteral(null);
		}
		parseBooleanLiteral(e) {
			return this.estreeParseLiteral(e);
		}
		directiveToStmt(e) {
			let s = e.value;
			delete e.value, s.type = "Literal", s.raw = s.extra.raw, s.value = s.extra.expressionValue;
			let i = e;
			return i.type = "ExpressionStatement", i.expression = s, i.directive = s.extra.rawValue, delete s.extra, i;
		}
		initFunction(e, s) {
			super.initFunction(e, s), e.expression = !1;
		}
		checkDeclaration(e) {
			e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e);
		}
		getObjectOrClassMethodParams(e) {
			return e.value.params;
		}
		isValidDirective(e) {
			var s;
			return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((s = e.expression.extra) != null && s.parenthesized);
		}
		parseBlockBody(e, s, i, r, n) {
			super.parseBlockBody(e, s, i, r, n);
			e.body = e.directives.map((h) => this.directiveToStmt(h)).concat(e.body), delete e.directives;
		}
		pushClassMethod(e, s, i, r, n, o) {
			this.parseMethod(s, i, r, n, o, "ClassMethod", !0), s.typeParameters && (s.value.typeParameters = s.typeParameters, delete s.typeParameters), e.body.push(s);
		}
		parsePrivateName() {
			let e = super.parsePrivateName();
			return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
		}
		convertPrivateNameToPrivateIdentifier(e) {
			let s = super.getPrivateNameSV(e);
			return e = e, delete e.id, e.name = s, e.type = "PrivateIdentifier", e;
		}
		isPrivateName(e) {
			return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : super.isPrivateName(e);
		}
		getPrivateNameSV(e) {
			return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e);
		}
		parseLiteral(e, s) {
			let i = super.parseLiteral(e, s);
			return i.raw = i.extra.raw, delete i.extra, i;
		}
		parseFunctionBody(e, s, i = !1) {
			super.parseFunctionBody(e, s, i), e.expression = e.body.type !== "BlockStatement";
		}
		parseMethod(e, s, i, r, n, o, h = !1) {
			let c = this.startNode();
			return c.kind = e.kind, c = super.parseMethod(c, s, i, r, n, o, h), c.type = "FunctionExpression", delete c.kind, e.value = c, o === "ClassPrivateMethod" && (e.computed = !1), this.finishNode(e, "MethodDefinition");
		}
		nameIsConstructor(e) {
			return e.type === "Literal" ? e.value === "constructor" : super.nameIsConstructor(e);
		}
		parseClassProperty(...e) {
			let s = super.parseClassProperty(...e);
			return this.getPluginOption("estree", "classFeatures") && (s.type = "PropertyDefinition"), s;
		}
		parseClassPrivateProperty(...e) {
			let s = super.parseClassPrivateProperty(...e);
			return this.getPluginOption("estree", "classFeatures") && (s.type = "PropertyDefinition", s.computed = !1), s;
		}
		parseObjectMethod(e, s, i, r, n) {
			let o = super.parseObjectMethod(e, s, i, r, n);
			return o && (o.type = "Property", o.kind === "method" && (o.kind = "init"), o.shorthand = !1), o;
		}
		parseObjectProperty(e, s, i, r) {
			let n = super.parseObjectProperty(e, s, i, r);
			return n && (n.kind = "init", n.type = "Property"), n;
		}
		isValidLVal(e, s, i) {
			return e === "Property" ? "value" : super.isValidLVal(e, s, i);
		}
		isAssignable(e, s) {
			return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, s) : super.isAssignable(e, s);
		}
		toAssignable(e, s = !1) {
			if (e != null && this.isObjectProperty(e)) {
				let { key: i, value: r } = e;
				this.isPrivateName(i) && this.classScope.usePrivateName(this.getPrivateNameSV(i), i.loc.start), this.toAssignable(r, s);
			} else super.toAssignable(e, s);
		}
		toAssignableObjectExpressionProp(e, s, i) {
			e.type === "Property" && (e.kind === "get" || e.kind === "set") ? this.raise(p.PatternHasAccessor, e.key) : e.type === "Property" && e.method ? this.raise(p.PatternHasMethod, e.key) : super.toAssignableObjectExpressionProp(e, s, i);
		}
		finishCallExpression(e, s) {
			let i = super.finishCallExpression(e, s);
			if (i.callee.type === "Import") {
				if (i.type = "ImportExpression", i.source = i.arguments[0], this.hasPlugin("importAttributes") || this.hasPlugin("importAssertions")) {
					var r, n;
					i.options = (r = i.arguments[1]) != null ? r : null, i.attributes = (n = i.arguments[1]) != null ? n : null;
				}
				delete i.arguments, delete i.callee;
			}
			return i;
		}
		toReferencedArguments(e) {
			e.type !== "ImportExpression" && super.toReferencedArguments(e);
		}
		parseExport(e, s) {
			let i = this.state.lastTokStartLoc, r = super.parseExport(e, s);
			switch (r.type) {
				case "ExportAllDeclaration":
					r.exported = null;
					break;
				case "ExportNamedDeclaration": r.specifiers.length === 1 && r.specifiers[0].type === "ExportNamespaceSpecifier" && (r.type = "ExportAllDeclaration", r.exported = r.specifiers[0].exported, delete r.specifiers);
				case "ExportDefaultDeclaration":
					{
						var n;
						let { declaration: o } = r;
						(o == null ? void 0 : o.type) === "ClassDeclaration" && ((n = o.decorators) == null ? void 0 : n.length) > 0 && o.start === r.start && this.resetStartLocation(r, i);
					}
					break;
			}
			return r;
		}
		parseSubscript(e, s, i, r) {
			let n = super.parseSubscript(e, s, i, r);
			if (r.optionalChainMember) {
				if ((n.type === "OptionalMemberExpression" || n.type === "OptionalCallExpression") && (n.type = n.type.substring(8)), r.stop) {
					let o = this.startNodeAtNode(n);
					return o.expression = n, this.finishNode(o, "ChainExpression");
				}
			} else (n.type === "MemberExpression" || n.type === "CallExpression") && (n.optional = !1);
			return n;
		}
		isOptionalMemberExpression(e) {
			return e.type === "ChainExpression" ? e.expression.type === "MemberExpression" : super.isOptionalMemberExpression(e);
		}
		hasPropertyAsPrivateName(e) {
			return e.type === "ChainExpression" && (e = e.expression), super.hasPropertyAsPrivateName(e);
		}
		isObjectProperty(e) {
			return e.type === "Property" && e.kind === "init" && !e.method;
		}
		isObjectMethod(e) {
			return e.type === "Property" && (e.method || e.kind === "get" || e.kind === "set");
		}
		finishNodeAt(e, s, i) {
			return oe$2(super.finishNodeAt(e, s, i));
		}
		resetStartLocation(e, s) {
			super.resetStartLocation(e, s), oe$2(e);
		}
		resetEndLocation(e, s = this.state.lastTokEndLoc) {
			super.resetEndLocation(e, s), oe$2(e);
		}
	}, X$2 = class {
		constructor(t, e) {
			this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!e;
		}
	}, C = {
		brace: new X$2("{"),
		j_oTag: new X$2("<tag"),
		j_cTag: new X$2("</tag"),
		j_expr: new X$2("<tag>...</tag>", !0)
	};
	C.template = new X$2("`", !0);
	var b$2 = !0, m = !0, $e$2 = !0, he$2 = !0, q$2 = !0, ai$2 = !0, ke$2 = class {
		constructor(t, e = {}) {
			this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop != null ? e.binop : null, this.updateContext = null;
		}
	}, ut$2 = /* @__PURE__ */ new Map();
	function A(a, t = {}) {
		t.keyword = a;
		let e = P$2(a, t);
		return ut$2.set(a, e), e;
	}
	function k$1(a, t) {
		return P$2(a, {
			beforeExpr: b$2,
			binop: t
		});
	}
	var ue$1 = -1, U$2 = [], ft$2 = [], dt$2 = [], mt$2 = [], yt$1 = [], xt$1 = [];
	function P$2(a, t = {}) {
		var e, s, i, r;
		return ++ue$1, ft$2.push(a), dt$2.push((e = t.binop) != null ? e : -1), mt$2.push((s = t.beforeExpr) != null ? s : !1), yt$1.push((i = t.startsExpr) != null ? i : !1), xt$1.push((r = t.prefix) != null ? r : !1), U$2.push(new ke$2(a, t)), ue$1;
	}
	function T$1(a, t = {}) {
		var e, s, i, r;
		return ++ue$1, ut$2.set(a, ue$1), ft$2.push(a), dt$2.push((e = t.binop) != null ? e : -1), mt$2.push((s = t.beforeExpr) != null ? s : !1), yt$1.push((i = t.startsExpr) != null ? i : !1), xt$1.push((r = t.prefix) != null ? r : !1), U$2.push(new ke$2("name", t)), ue$1;
	}
	var ni$2 = {
		bracketL: P$2("[", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		bracketHashL: P$2("#[", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		bracketBarL: P$2("[|", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		bracketR: P$2("]"),
		bracketBarR: P$2("|]"),
		braceL: P$2("{", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		braceBarL: P$2("{|", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		braceHashL: P$2("#{", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		braceR: P$2("}"),
		braceBarR: P$2("|}"),
		parenL: P$2("(", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		parenR: P$2(")"),
		comma: P$2(",", { beforeExpr: b$2 }),
		semi: P$2(";", { beforeExpr: b$2 }),
		colon: P$2(":", { beforeExpr: b$2 }),
		doubleColon: P$2("::", { beforeExpr: b$2 }),
		dot: P$2("."),
		question: P$2("?", { beforeExpr: b$2 }),
		questionDot: P$2("?."),
		arrow: P$2("=>", { beforeExpr: b$2 }),
		template: P$2("template"),
		ellipsis: P$2("...", { beforeExpr: b$2 }),
		backQuote: P$2("`", { startsExpr: m }),
		dollarBraceL: P$2("${", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		templateTail: P$2("...`", { startsExpr: m }),
		templateNonTail: P$2("...${", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		at: P$2("@"),
		hash: P$2("#", { startsExpr: m }),
		interpreterDirective: P$2("#!..."),
		eq: P$2("=", {
			beforeExpr: b$2,
			isAssign: he$2
		}),
		assign: P$2("_=", {
			beforeExpr: b$2,
			isAssign: he$2
		}),
		slashAssign: P$2("_=", {
			beforeExpr: b$2,
			isAssign: he$2
		}),
		xorAssign: P$2("_=", {
			beforeExpr: b$2,
			isAssign: he$2
		}),
		moduloAssign: P$2("_=", {
			beforeExpr: b$2,
			isAssign: he$2
		}),
		incDec: P$2("++/--", {
			prefix: q$2,
			postfix: ai$2,
			startsExpr: m
		}),
		bang: P$2("!", {
			beforeExpr: b$2,
			prefix: q$2,
			startsExpr: m
		}),
		tilde: P$2("~", {
			beforeExpr: b$2,
			prefix: q$2,
			startsExpr: m
		}),
		doubleCaret: P$2("^^", { startsExpr: m }),
		doubleAt: P$2("@@", { startsExpr: m }),
		pipeline: k$1("|>", 0),
		nullishCoalescing: k$1("??", 1),
		logicalOR: k$1("||", 1),
		logicalAND: k$1("&&", 2),
		bitwiseOR: k$1("|", 3),
		bitwiseXOR: k$1("^", 4),
		bitwiseAND: k$1("&", 5),
		equality: k$1("==/!=/===/!==", 6),
		lt: k$1("</>/<=/>=", 7),
		gt: k$1("</>/<=/>=", 7),
		relational: k$1("</>/<=/>=", 7),
		bitShift: k$1("<</>>/>>>", 8),
		bitShiftL: k$1("<</>>/>>>", 8),
		bitShiftR: k$1("<</>>/>>>", 8),
		plusMin: P$2("+/-", {
			beforeExpr: b$2,
			binop: 9,
			prefix: q$2,
			startsExpr: m
		}),
		modulo: P$2("%", {
			binop: 10,
			startsExpr: m
		}),
		star: P$2("*", { binop: 10 }),
		slash: k$1("/", 10),
		exponent: P$2("**", {
			beforeExpr: b$2,
			binop: 11,
			rightAssociative: !0
		}),
		_in: A("in", {
			beforeExpr: b$2,
			binop: 7
		}),
		_instanceof: A("instanceof", {
			beforeExpr: b$2,
			binop: 7
		}),
		_break: A("break"),
		_case: A("case", { beforeExpr: b$2 }),
		_catch: A("catch"),
		_continue: A("continue"),
		_debugger: A("debugger"),
		_default: A("default", { beforeExpr: b$2 }),
		_else: A("else", { beforeExpr: b$2 }),
		_finally: A("finally"),
		_function: A("function", { startsExpr: m }),
		_if: A("if"),
		_return: A("return", { beforeExpr: b$2 }),
		_switch: A("switch"),
		_throw: A("throw", {
			beforeExpr: b$2,
			prefix: q$2,
			startsExpr: m
		}),
		_try: A("try"),
		_var: A("var"),
		_const: A("const"),
		_with: A("with"),
		_new: A("new", {
			beforeExpr: b$2,
			startsExpr: m
		}),
		_this: A("this", { startsExpr: m }),
		_super: A("super", { startsExpr: m }),
		_class: A("class", { startsExpr: m }),
		_extends: A("extends", { beforeExpr: b$2 }),
		_export: A("export"),
		_import: A("import", { startsExpr: m }),
		_null: A("null", { startsExpr: m }),
		_true: A("true", { startsExpr: m }),
		_false: A("false", { startsExpr: m }),
		_typeof: A("typeof", {
			beforeExpr: b$2,
			prefix: q$2,
			startsExpr: m
		}),
		_void: A("void", {
			beforeExpr: b$2,
			prefix: q$2,
			startsExpr: m
		}),
		_delete: A("delete", {
			beforeExpr: b$2,
			prefix: q$2,
			startsExpr: m
		}),
		_do: A("do", {
			isLoop: $e$2,
			beforeExpr: b$2
		}),
		_for: A("for", { isLoop: $e$2 }),
		_while: A("while", { isLoop: $e$2 }),
		_as: T$1("as", { startsExpr: m }),
		_assert: T$1("assert", { startsExpr: m }),
		_async: T$1("async", { startsExpr: m }),
		_await: T$1("await", { startsExpr: m }),
		_defer: T$1("defer", { startsExpr: m }),
		_from: T$1("from", { startsExpr: m }),
		_get: T$1("get", { startsExpr: m }),
		_let: T$1("let", { startsExpr: m }),
		_meta: T$1("meta", { startsExpr: m }),
		_of: T$1("of", { startsExpr: m }),
		_sent: T$1("sent", { startsExpr: m }),
		_set: T$1("set", { startsExpr: m }),
		_source: T$1("source", { startsExpr: m }),
		_static: T$1("static", { startsExpr: m }),
		_using: T$1("using", { startsExpr: m }),
		_yield: T$1("yield", { startsExpr: m }),
		_asserts: T$1("asserts", { startsExpr: m }),
		_checks: T$1("checks", { startsExpr: m }),
		_exports: T$1("exports", { startsExpr: m }),
		_global: T$1("global", { startsExpr: m }),
		_implements: T$1("implements", { startsExpr: m }),
		_intrinsic: T$1("intrinsic", { startsExpr: m }),
		_infer: T$1("infer", { startsExpr: m }),
		_is: T$1("is", { startsExpr: m }),
		_mixins: T$1("mixins", { startsExpr: m }),
		_proto: T$1("proto", { startsExpr: m }),
		_require: T$1("require", { startsExpr: m }),
		_satisfies: T$1("satisfies", { startsExpr: m }),
		_keyof: T$1("keyof", { startsExpr: m }),
		_readonly: T$1("readonly", { startsExpr: m }),
		_unique: T$1("unique", { startsExpr: m }),
		_abstract: T$1("abstract", { startsExpr: m }),
		_declare: T$1("declare", { startsExpr: m }),
		_enum: T$1("enum", { startsExpr: m }),
		_module: T$1("module", { startsExpr: m }),
		_namespace: T$1("namespace", { startsExpr: m }),
		_interface: T$1("interface", { startsExpr: m }),
		_type: T$1("type", { startsExpr: m }),
		_opaque: T$1("opaque", { startsExpr: m }),
		name: P$2("name", { startsExpr: m }),
		string: P$2("string", { startsExpr: m }),
		num: P$2("num", { startsExpr: m }),
		bigint: P$2("bigint", { startsExpr: m }),
		decimal: P$2("decimal", { startsExpr: m }),
		regexp: P$2("regexp", { startsExpr: m }),
		privateName: P$2("#name", { startsExpr: m }),
		eof: P$2("eof"),
		jsxName: P$2("jsxName"),
		jsxText: P$2("jsxText", { beforeExpr: !0 }),
		jsxTagStart: P$2("jsxTagStart", { startsExpr: !0 }),
		jsxTagEnd: P$2("jsxTagEnd"),
		placeholder: P$2("%%", { startsExpr: !0 })
	};
	function w$1(a) {
		return a >= 93 && a <= 132;
	}
	function oi$2(a) {
		return a <= 92;
	}
	function M$2(a) {
		return a >= 58 && a <= 132;
	}
	function Wt$2(a) {
		return a >= 58 && a <= 136;
	}
	function hi$1(a) {
		return mt$2[a];
	}
	function He$2(a) {
		return yt$1[a];
	}
	function li$2(a) {
		return a >= 29 && a <= 33;
	}
	function Ft$2(a) {
		return a >= 129 && a <= 131;
	}
	function ci$2(a) {
		return a >= 90 && a <= 92;
	}
	function Pt$2(a) {
		return a >= 58 && a <= 92;
	}
	function pi$2(a) {
		return a >= 39 && a <= 59;
	}
	function ui$2(a) {
		return a === 34;
	}
	function fi$2(a) {
		return xt$1[a];
	}
	function di$2(a) {
		return a >= 121 && a <= 123;
	}
	function mi$1(a) {
		return a >= 124 && a <= 130;
	}
	function K$2(a) {
		return ft$2[a];
	}
	function Ee$2(a) {
		return dt$2[a];
	}
	function yi(a) {
		return a === 57;
	}
	function ve$2(a) {
		return a >= 24 && a <= 25;
	}
	function R$2(a) {
		return U$2[a];
	}
	U$2[8].updateContext = (a) => {
		a.pop();
	}, U$2[5].updateContext = U$2[7].updateContext = U$2[23].updateContext = (a) => {
		a.push(C.brace);
	}, U$2[22].updateContext = (a) => {
		a[a.length - 1] === C.template ? a.pop() : a.push(C.template);
	}, U$2[142].updateContext = (a) => {
		a.push(C.j_expr, C.j_oTag);
	};
	var gt$2 = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Jt$2 = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", xi$1 = /* @__PURE__ */ new RegExp("[" + gt$2 + "]"), Pi$1 = /* @__PURE__ */ new RegExp("[" + gt$2 + Jt$2 + "]");
	gt$2 = Jt$2 = null;
	var Xt$1 = [
		0,
		11,
		2,
		25,
		2,
		18,
		2,
		1,
		2,
		14,
		3,
		13,
		35,
		122,
		70,
		52,
		268,
		28,
		4,
		48,
		48,
		31,
		14,
		29,
		6,
		37,
		11,
		29,
		3,
		35,
		5,
		7,
		2,
		4,
		43,
		157,
		19,
		35,
		5,
		35,
		5,
		39,
		9,
		51,
		13,
		10,
		2,
		14,
		2,
		6,
		2,
		1,
		2,
		10,
		2,
		14,
		2,
		6,
		2,
		1,
		68,
		310,
		10,
		21,
		11,
		7,
		25,
		5,
		2,
		41,
		2,
		8,
		70,
		5,
		3,
		0,
		2,
		43,
		2,
		1,
		4,
		0,
		3,
		22,
		11,
		22,
		10,
		30,
		66,
		18,
		2,
		1,
		11,
		21,
		11,
		25,
		71,
		55,
		7,
		1,
		65,
		0,
		16,
		3,
		2,
		2,
		2,
		28,
		43,
		28,
		4,
		28,
		36,
		7,
		2,
		27,
		28,
		53,
		11,
		21,
		11,
		18,
		14,
		17,
		111,
		72,
		56,
		50,
		14,
		50,
		14,
		35,
		349,
		41,
		7,
		1,
		79,
		28,
		11,
		0,
		9,
		21,
		43,
		17,
		47,
		20,
		28,
		22,
		13,
		52,
		58,
		1,
		3,
		0,
		14,
		44,
		33,
		24,
		27,
		35,
		30,
		0,
		3,
		0,
		9,
		34,
		4,
		0,
		13,
		47,
		15,
		3,
		22,
		0,
		2,
		0,
		36,
		17,
		2,
		24,
		20,
		1,
		64,
		6,
		2,
		0,
		2,
		3,
		2,
		14,
		2,
		9,
		8,
		46,
		39,
		7,
		3,
		1,
		3,
		21,
		2,
		6,
		2,
		1,
		2,
		4,
		4,
		0,
		19,
		0,
		13,
		4,
		159,
		52,
		19,
		3,
		21,
		2,
		31,
		47,
		21,
		1,
		2,
		0,
		185,
		46,
		42,
		3,
		37,
		47,
		21,
		0,
		60,
		42,
		14,
		0,
		72,
		26,
		38,
		6,
		186,
		43,
		117,
		63,
		32,
		7,
		3,
		0,
		3,
		7,
		2,
		1,
		2,
		23,
		16,
		0,
		2,
		0,
		95,
		7,
		3,
		38,
		17,
		0,
		2,
		0,
		29,
		0,
		11,
		39,
		8,
		0,
		22,
		0,
		12,
		45,
		20,
		0,
		19,
		72,
		264,
		8,
		2,
		36,
		18,
		0,
		50,
		29,
		113,
		6,
		2,
		1,
		2,
		37,
		22,
		0,
		26,
		5,
		2,
		1,
		2,
		31,
		15,
		0,
		328,
		18,
		16,
		0,
		2,
		12,
		2,
		33,
		125,
		0,
		80,
		921,
		103,
		110,
		18,
		195,
		2637,
		96,
		16,
		1071,
		18,
		5,
		4026,
		582,
		8634,
		568,
		8,
		30,
		18,
		78,
		18,
		29,
		19,
		47,
		17,
		3,
		32,
		20,
		6,
		18,
		689,
		63,
		129,
		74,
		6,
		0,
		67,
		12,
		65,
		1,
		2,
		0,
		29,
		6135,
		9,
		1237,
		43,
		8,
		8936,
		3,
		2,
		6,
		2,
		1,
		2,
		290,
		16,
		0,
		30,
		2,
		3,
		0,
		15,
		3,
		9,
		395,
		2309,
		106,
		6,
		12,
		4,
		8,
		8,
		9,
		5991,
		84,
		2,
		70,
		2,
		1,
		3,
		0,
		3,
		1,
		3,
		3,
		2,
		11,
		2,
		0,
		2,
		6,
		2,
		64,
		2,
		3,
		3,
		7,
		2,
		6,
		2,
		27,
		2,
		3,
		2,
		4,
		2,
		0,
		4,
		6,
		2,
		339,
		3,
		24,
		2,
		24,
		2,
		30,
		2,
		24,
		2,
		30,
		2,
		24,
		2,
		30,
		2,
		24,
		2,
		30,
		2,
		24,
		2,
		7,
		1845,
		30,
		7,
		5,
		262,
		61,
		147,
		44,
		11,
		6,
		17,
		0,
		322,
		29,
		19,
		43,
		485,
		27,
		757,
		6,
		2,
		3,
		2,
		1,
		2,
		14,
		2,
		196,
		60,
		67,
		8,
		0,
		1205,
		3,
		2,
		26,
		2,
		1,
		2,
		0,
		3,
		0,
		2,
		9,
		2,
		3,
		2,
		0,
		2,
		0,
		7,
		0,
		5,
		0,
		2,
		0,
		2,
		0,
		2,
		2,
		2,
		1,
		2,
		0,
		3,
		0,
		2,
		0,
		2,
		0,
		2,
		0,
		2,
		0,
		2,
		1,
		2,
		0,
		3,
		3,
		2,
		6,
		2,
		3,
		2,
		3,
		2,
		0,
		2,
		9,
		2,
		16,
		6,
		2,
		2,
		4,
		2,
		16,
		4421,
		42719,
		33,
		4153,
		7,
		221,
		3,
		5761,
		15,
		7472,
		16,
		621,
		2467,
		541,
		1507,
		4938,
		6,
		4191
	], gi$1 = [
		509,
		0,
		227,
		0,
		150,
		4,
		294,
		9,
		1368,
		2,
		2,
		1,
		6,
		3,
		41,
		2,
		5,
		0,
		166,
		1,
		574,
		3,
		9,
		9,
		370,
		1,
		81,
		2,
		71,
		10,
		50,
		3,
		123,
		2,
		54,
		14,
		32,
		10,
		3,
		1,
		11,
		3,
		46,
		10,
		8,
		0,
		46,
		9,
		7,
		2,
		37,
		13,
		2,
		9,
		6,
		1,
		45,
		0,
		13,
		2,
		49,
		13,
		9,
		3,
		2,
		11,
		83,
		11,
		7,
		0,
		3,
		0,
		158,
		11,
		6,
		9,
		7,
		3,
		56,
		1,
		2,
		6,
		3,
		1,
		3,
		2,
		10,
		0,
		11,
		1,
		3,
		6,
		4,
		4,
		193,
		17,
		10,
		9,
		5,
		0,
		82,
		19,
		13,
		9,
		214,
		6,
		3,
		8,
		28,
		1,
		83,
		16,
		16,
		9,
		82,
		12,
		9,
		9,
		84,
		14,
		5,
		9,
		243,
		14,
		166,
		9,
		71,
		5,
		2,
		1,
		3,
		3,
		2,
		0,
		2,
		1,
		13,
		9,
		120,
		6,
		3,
		6,
		4,
		0,
		29,
		9,
		41,
		6,
		2,
		3,
		9,
		0,
		10,
		10,
		47,
		15,
		406,
		7,
		2,
		7,
		17,
		9,
		57,
		21,
		2,
		13,
		123,
		5,
		4,
		0,
		2,
		1,
		2,
		6,
		2,
		0,
		9,
		9,
		49,
		4,
		2,
		1,
		2,
		4,
		9,
		9,
		330,
		3,
		10,
		1,
		2,
		0,
		49,
		6,
		4,
		4,
		14,
		9,
		5351,
		0,
		7,
		14,
		13835,
		9,
		87,
		9,
		39,
		4,
		60,
		6,
		26,
		9,
		1014,
		0,
		2,
		54,
		8,
		3,
		82,
		0,
		12,
		1,
		19628,
		1,
		4706,
		45,
		3,
		22,
		543,
		4,
		4,
		5,
		9,
		7,
		3,
		6,
		31,
		3,
		149,
		2,
		1418,
		49,
		513,
		54,
		5,
		49,
		9,
		0,
		15,
		0,
		23,
		4,
		2,
		14,
		1361,
		6,
		2,
		16,
		3,
		6,
		2,
		1,
		2,
		4,
		101,
		0,
		161,
		6,
		10,
		9,
		357,
		0,
		62,
		13,
		499,
		13,
		983,
		6,
		110,
		6,
		6,
		9,
		4759,
		9,
		787719,
		239
	];
	function We$1(a, t) {
		let e = 65536;
		for (let s = 0, i = t.length; s < i; s += 2) {
			if (e += t[s], e > a) return !1;
			if (e += t[s + 1], e >= a) return !0;
		}
		return !1;
	}
	function _$1(a) {
		return a < 65 ? a === 36 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && xi$1.test(String.fromCharCode(a)) : We$1(a, Xt$1);
	}
	function Q$2(a) {
		return a < 48 ? a === 36 : a < 58 ? !0 : a < 65 ? !1 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && Pi$1.test(String.fromCharCode(a)) : We$1(a, Xt$1) || We$1(a, gi$1);
	}
	var Tt$2 = {
		keyword: [
			"break",
			"case",
			"catch",
			"continue",
			"debugger",
			"default",
			"do",
			"else",
			"finally",
			"for",
			"function",
			"if",
			"return",
			"switch",
			"throw",
			"try",
			"var",
			"const",
			"while",
			"with",
			"new",
			"this",
			"super",
			"class",
			"extends",
			"export",
			"import",
			"null",
			"true",
			"false",
			"in",
			"instanceof",
			"typeof",
			"void",
			"delete"
		],
		strict: [
			"implements",
			"interface",
			"let",
			"package",
			"private",
			"protected",
			"public",
			"static",
			"yield"
		],
		strictBind: ["eval", "arguments"]
	}, Ti$1 = new Set(Tt$2.keyword), bi$1 = new Set(Tt$2.strict), Ai$1 = new Set(Tt$2.strictBind);
	function Gt$2(a, t) {
		return t && a === "await" || a === "enum";
	}
	function Yt$2(a, t) {
		return Gt$2(a, t) || bi$1.has(a);
	}
	function Qt$2(a) {
		return Ai$1.has(a);
	}
	function Zt$1(a, t) {
		return Yt$2(a, t) || Qt$2(a);
	}
	function Si$1(a) {
		return Ti$1.has(a);
	}
	function wi$1(a, t, e) {
		return a === 64 && t === 64 && _$1(e);
	}
	var Ci$1 = new Set([
		"break",
		"case",
		"catch",
		"continue",
		"debugger",
		"default",
		"do",
		"else",
		"finally",
		"for",
		"function",
		"if",
		"return",
		"switch",
		"throw",
		"try",
		"var",
		"const",
		"while",
		"with",
		"new",
		"this",
		"super",
		"class",
		"extends",
		"export",
		"import",
		"null",
		"true",
		"false",
		"in",
		"instanceof",
		"typeof",
		"void",
		"delete",
		"implements",
		"interface",
		"let",
		"package",
		"private",
		"protected",
		"public",
		"static",
		"yield",
		"eval",
		"arguments",
		"enum",
		"await"
	]);
	function Ei$1(a) {
		return Ci$1.has(a);
	}
	var de$2 = class {
		constructor(t) {
			this.flags = 0, this.names = /* @__PURE__ */ new Map(), this.firstLexicalName = "", this.flags = t;
		}
	}, me$2 = class {
		constructor(t, e) {
			this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = /* @__PURE__ */ new Map(), this.parser = t, this.inModule = e;
		}
		get inTopLevel() {
			return (this.currentScope().flags & 1) > 0;
		}
		get inFunction() {
			return (this.currentVarScopeFlags() & 2) > 0;
		}
		get allowSuper() {
			return (this.currentThisScopeFlags() & 16) > 0;
		}
		get allowDirectSuper() {
			return (this.currentThisScopeFlags() & 32) > 0;
		}
		get inClass() {
			return (this.currentThisScopeFlags() & 64) > 0;
		}
		get inClassAndNotInNonArrowFunction() {
			let t = this.currentThisScopeFlags();
			return (t & 64) > 0 && (t & 2) === 0;
		}
		get inStaticBlock() {
			for (let t = this.scopeStack.length - 1;; t--) {
				let { flags: e } = this.scopeStack[t];
				if (e & 128) return !0;
				if (e & 451) return !1;
			}
		}
		get inNonArrowFunction() {
			return (this.currentThisScopeFlags() & 2) > 0;
		}
		get treatFunctionsAsVar() {
			return this.treatFunctionsAsVarInScope(this.currentScope());
		}
		createScope(t) {
			return new de$2(t);
		}
		enter(t) {
			this.scopeStack.push(this.createScope(t));
		}
		exit() {
			return this.scopeStack.pop().flags;
		}
		treatFunctionsAsVarInScope(t) {
			return !!(t.flags & 130 || !this.parser.inModule && t.flags & 1);
		}
		declareName(t, e, s) {
			let i = this.currentScope();
			if (e & 8 || e & 16) {
				this.checkRedeclarationInScope(i, t, e, s);
				let r = i.names.get(t) || 0;
				e & 16 ? r = r | 4 : (i.firstLexicalName || (i.firstLexicalName = t), r = r | 2), i.names.set(t, r), e & 8 && this.maybeExportDefined(i, t);
			} else if (e & 4) for (let r = this.scopeStack.length - 1; r >= 0 && (i = this.scopeStack[r], this.checkRedeclarationInScope(i, t, e, s), i.names.set(t, (i.names.get(t) || 0) | 1), this.maybeExportDefined(i, t), !(i.flags & 387)); --r);
			this.parser.inModule && i.flags & 1 && this.undefinedExports.delete(t);
		}
		maybeExportDefined(t, e) {
			this.parser.inModule && t.flags & 1 && this.undefinedExports.delete(e);
		}
		checkRedeclarationInScope(t, e, s, i) {
			this.isRedeclaredInScope(t, e, s) && this.parser.raise(p.VarRedeclaration, i, { identifierName: e });
		}
		isRedeclaredInScope(t, e, s) {
			if (!(s & 1)) return !1;
			if (s & 8) return t.names.has(e);
			let i = t.names.get(e);
			return s & 16 ? (i & 2) > 0 || !this.treatFunctionsAsVarInScope(t) && (i & 1) > 0 : (i & 2) > 0 && !(t.flags & 8 && t.firstLexicalName === e) || !this.treatFunctionsAsVarInScope(t) && (i & 4) > 0;
		}
		checkLocalExport(t) {
			let { name: e } = t;
			this.scopeStack[0].names.has(e) || this.undefinedExports.set(e, t.loc.start);
		}
		currentScope() {
			return this.scopeStack[this.scopeStack.length - 1];
		}
		currentVarScopeFlags() {
			for (let t = this.scopeStack.length - 1;; t--) {
				let { flags: e } = this.scopeStack[t];
				if (e & 387) return e;
			}
		}
		currentThisScopeFlags() {
			for (let t = this.scopeStack.length - 1;; t--) {
				let { flags: e } = this.scopeStack[t];
				if (e & 451 && !(e & 4)) return e;
			}
		}
	}, Je$2 = class extends de$2 {
		constructor(...t) {
			super(...t), this.declareFunctions = /* @__PURE__ */ new Set();
		}
	}, Xe$2 = class extends me$2 {
		createScope(t) {
			return new Je$2(t);
		}
		declareName(t, e, s) {
			let i = this.currentScope();
			if (e & 2048) {
				this.checkRedeclarationInScope(i, t, e, s), this.maybeExportDefined(i, t), i.declareFunctions.add(t);
				return;
			}
			super.declareName(t, e, s);
		}
		isRedeclaredInScope(t, e, s) {
			if (super.isRedeclaredInScope(t, e, s)) return !0;
			if (s & 2048 && !t.declareFunctions.has(e)) {
				let i = t.names.get(e);
				return (i & 4) > 0 || (i & 2) > 0;
			}
			return !1;
		}
		checkLocalExport(t) {
			this.scopeStack[0].declareFunctions.has(t.name) || super.checkLocalExport(t);
		}
	}, Ge$2 = class {
		constructor() {
			this.sawUnambiguousESM = !1, this.ambiguousScriptDifferentAst = !1;
		}
		hasPlugin(t) {
			if (typeof t == "string") return this.plugins.has(t);
			{
				let [e, s] = t;
				if (!this.hasPlugin(e)) return !1;
				let i = this.plugins.get(e);
				for (let r of Object.keys(s)) if ((i == null ? void 0 : i[r]) !== s[r]) return !1;
				return !0;
			}
		}
		getPluginOption(t, e) {
			var s;
			return (s = this.plugins.get(t)) == null ? void 0 : s[e];
		}
	};
	function es$1(a, t) {
		a.trailingComments === void 0 ? a.trailingComments = t : a.trailingComments.unshift(...t);
	}
	function Ii$1(a, t) {
		a.leadingComments === void 0 ? a.leadingComments = t : a.leadingComments.unshift(...t);
	}
	function ye$1(a, t) {
		a.innerComments === void 0 ? a.innerComments = t : a.innerComments.unshift(...t);
	}
	function le$2(a, t, e) {
		let s = null, i = t.length;
		for (; s === null && i > 0;) s = t[--i];
		s === null || s.start > e.start ? ye$1(a, e.comments) : es$1(s, e.comments);
	}
	var Ye$2 = class extends Ge$2 {
		addComment(t) {
			this.filename && (t.loc.filename = this.filename);
			let { commentsLen: e } = this.state;
			this.comments.length !== e && (this.comments.length = e), this.comments.push(t), this.state.commentsLen++;
		}
		processComment(t) {
			let { commentStack: e } = this.state, s = e.length;
			if (s === 0) return;
			let i = s - 1, r = e[i];
			r.start === t.end && (r.leadingNode = t, i--);
			let { start: n } = t;
			for (; i >= 0; i--) {
				let o = e[i], h = o.end;
				if (h > n) o.containingNode = t, this.finalizeComment(o), e.splice(i, 1);
				else {
					h === n && (o.trailingNode = t);
					break;
				}
			}
		}
		finalizeComment(t) {
			let { comments: e } = t;
			if (t.leadingNode !== null || t.trailingNode !== null) t.leadingNode !== null && es$1(t.leadingNode, e), t.trailingNode !== null && Ii$1(t.trailingNode, e);
			else {
				let { containingNode: s, start: i } = t;
				if (this.input.charCodeAt(i - 1) === 44) switch (s.type) {
					case "ObjectExpression":
					case "ObjectPattern":
					case "RecordExpression":
						le$2(s, s.properties, t);
						break;
					case "CallExpression":
					case "OptionalCallExpression":
						le$2(s, s.arguments, t);
						break;
					case "FunctionDeclaration":
					case "FunctionExpression":
					case "ArrowFunctionExpression":
					case "ObjectMethod":
					case "ClassMethod":
					case "ClassPrivateMethod":
						le$2(s, s.params, t);
						break;
					case "ArrayExpression":
					case "ArrayPattern":
					case "TupleExpression":
						le$2(s, s.elements, t);
						break;
					case "ExportNamedDeclaration":
					case "ImportDeclaration":
						le$2(s, s.specifiers, t);
						break;
					default: ye$1(s, e);
				}
				else ye$1(s, e);
			}
		}
		finalizeRemainingComments() {
			let { commentStack: t } = this.state;
			for (let e = t.length - 1; e >= 0; e--) this.finalizeComment(t[e]);
			this.state.commentStack = [];
		}
		resetPreviousNodeTrailingComments(t) {
			let { commentStack: e } = this.state, { length: s } = e;
			if (s === 0) return;
			let i = e[s - 1];
			i.leadingNode === t && (i.leadingNode = null);
		}
		resetPreviousIdentifierLeadingComments(t) {
			let { commentStack: e } = this.state, { length: s } = e;
			s !== 0 && (e[s - 1].trailingNode === t ? e[s - 1].trailingNode = null : s >= 2 && e[s - 2].trailingNode === t && (e[s - 2].trailingNode = null));
		}
		takeSurroundingComments(t, e, s) {
			let { commentStack: i } = this.state, r = i.length;
			if (r === 0) return;
			let n = r - 1;
			for (; n >= 0; n--) {
				let o = i[n], h = o.end;
				if (o.start === s) o.leadingNode = t;
				else if (h === e) o.trailingNode = t;
				else if (h < e) break;
			}
		}
	}, ts$1 = /\r\n?|[\n\u2028\u2029]/, Se$2 = new RegExp(ts$1.source, "g");
	function fe$2(a) {
		switch (a) {
			case 10:
			case 13:
			case 8232:
			case 8233: return !0;
			default: return !1;
		}
	}
	var Ve$2 = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Ie$2 = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g, Bt$2 = new RegExp("(?=(" + Ie$2.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
	function Ni$1(a) {
		switch (a) {
			case 9:
			case 11:
			case 12:
			case 32:
			case 160:
			case 5760:
			case 8192:
			case 8193:
			case 8194:
			case 8195:
			case 8196:
			case 8197:
			case 8198:
			case 8199:
			case 8200:
			case 8201:
			case 8202:
			case 8239:
			case 8287:
			case 12288:
			case 65279: return !0;
			default: return !1;
		}
	}
	var Qe$2 = class a {
		constructor() {
			this.flags = 1024, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.topicContext = {
				maxNumOfResolvableTopics: 0,
				maxTopicIndex: null
			}, this.labels = [], this.commentsLen = 0, this.commentStack = [], this.pos = 0, this.type = 139, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.context = [C.brace], this.firstInvalidTemplateEscapePos = null, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
		}
		get strict() {
			return (this.flags & 1) > 0;
		}
		set strict(t) {
			t ? this.flags |= 1 : this.flags &= -2;
		}
		init({ strictMode: t, sourceType: e, startLine: s, startColumn: i }) {
			this.strict = t === !1 ? !1 : t === !0 ? !0 : e === "module", this.curLine = s, this.lineStart = -i, this.startLoc = this.endLoc = new F$1(s, i, 0);
		}
		get maybeInArrowParameters() {
			return (this.flags & 2) > 0;
		}
		set maybeInArrowParameters(t) {
			t ? this.flags |= 2 : this.flags &= -3;
		}
		get inType() {
			return (this.flags & 4) > 0;
		}
		set inType(t) {
			t ? this.flags |= 4 : this.flags &= -5;
		}
		get noAnonFunctionType() {
			return (this.flags & 8) > 0;
		}
		set noAnonFunctionType(t) {
			t ? this.flags |= 8 : this.flags &= -9;
		}
		get hasFlowComment() {
			return (this.flags & 16) > 0;
		}
		set hasFlowComment(t) {
			t ? this.flags |= 16 : this.flags &= -17;
		}
		get isAmbientContext() {
			return (this.flags & 32) > 0;
		}
		set isAmbientContext(t) {
			t ? this.flags |= 32 : this.flags &= -33;
		}
		get inAbstractClass() {
			return (this.flags & 64) > 0;
		}
		set inAbstractClass(t) {
			t ? this.flags |= 64 : this.flags &= -65;
		}
		get inDisallowConditionalTypesContext() {
			return (this.flags & 128) > 0;
		}
		set inDisallowConditionalTypesContext(t) {
			t ? this.flags |= 128 : this.flags &= -129;
		}
		get soloAwait() {
			return (this.flags & 256) > 0;
		}
		set soloAwait(t) {
			t ? this.flags |= 256 : this.flags &= -257;
		}
		get inFSharpPipelineDirectBody() {
			return (this.flags & 512) > 0;
		}
		set inFSharpPipelineDirectBody(t) {
			t ? this.flags |= 512 : this.flags &= -513;
		}
		get canStartJSXElement() {
			return (this.flags & 1024) > 0;
		}
		set canStartJSXElement(t) {
			t ? this.flags |= 1024 : this.flags &= -1025;
		}
		get containsEsc() {
			return (this.flags & 2048) > 0;
		}
		set containsEsc(t) {
			t ? this.flags |= 2048 : this.flags &= -2049;
		}
		curPosition() {
			return new F$1(this.curLine, this.pos - this.lineStart, this.pos);
		}
		clone() {
			let t = new a();
			return t.flags = this.flags, t.curLine = this.curLine, t.lineStart = this.lineStart, t.startLoc = this.startLoc, t.endLoc = this.endLoc, t.errors = this.errors.slice(), t.potentialArrowAt = this.potentialArrowAt, t.noArrowAt = this.noArrowAt.slice(), t.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice(), t.topicContext = this.topicContext, t.labels = this.labels.slice(), t.commentsLen = this.commentsLen, t.commentStack = this.commentStack.slice(), t.pos = this.pos, t.type = this.type, t.value = this.value, t.start = this.start, t.end = this.end, t.lastTokEndLoc = this.lastTokEndLoc, t.lastTokStartLoc = this.lastTokStartLoc, t.context = this.context.slice(), t.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos, t.strictErrors = this.strictErrors, t.tokensLength = this.tokensLength, t;
		}
	}, ki$1 = function(t) {
		return t >= 48 && t <= 57;
	}, Rt$2 = {
		decBinOct: new Set([
			46,
			66,
			69,
			79,
			95,
			98,
			101,
			111
		]),
		hex: new Set([
			46,
			88,
			95,
			120
		])
	}, we$2 = {
		bin: (a) => a === 48 || a === 49,
		oct: (a) => a >= 48 && a <= 55,
		dec: (a) => a >= 48 && a <= 57,
		hex: (a) => a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102
	};
	function Ut$2(a, t, e, s, i, r) {
		let n = e, o = s, h = i, c = "", l$1 = null, u = e, { length: f$1 } = t;
		for (;;) {
			if (e >= f$1) {
				r.unterminated(n, o, h), c += t.slice(u, e);
				break;
			}
			let d$1 = t.charCodeAt(e);
			if (vi$1(a, d$1, t, e)) {
				c += t.slice(u, e);
				break;
			}
			if (d$1 === 92) {
				c += t.slice(u, e);
				let y$1 = Li$1(t, e, s, i, a === "template", r);
				y$1.ch === null && !l$1 ? l$1 = {
					pos: e,
					lineStart: s,
					curLine: i
				} : c += y$1.ch, {pos: e, lineStart: s, curLine: i} = y$1, u = e;
			} else d$1 === 8232 || d$1 === 8233 ? (++e, ++i, s = e) : d$1 === 10 || d$1 === 13 ? a === "template" ? (c += t.slice(u, e) + `
`, ++e, d$1 === 13 && t.charCodeAt(e) === 10 && ++e, ++i, u = s = e) : r.unterminated(n, o, h) : ++e;
		}
		return {
			pos: e,
			str: c,
			firstInvalidLoc: l$1,
			lineStart: s,
			curLine: i,
			containsInvalid: !!l$1
		};
	}
	function vi$1(a, t, e, s) {
		return a === "template" ? t === 96 || t === 36 && e.charCodeAt(s + 1) === 123 : t === (a === "double" ? 34 : 39);
	}
	function Li$1(a, t, e, s, i, r) {
		let n = !i;
		t++;
		let o = (c) => ({
			pos: t,
			ch: c,
			lineStart: e,
			curLine: s
		}), h = a.charCodeAt(t++);
		switch (h) {
			case 110: return o(`
`);
			case 114: return o("\r");
			case 120: {
				let c;
				return {code: c, pos: t} = Ze$2(a, t, e, s, 2, !1, n, r), o(c === null ? null : String.fromCharCode(c));
			}
			case 117: {
				let c;
				return {code: c, pos: t} = is$1(a, t, e, s, n, r), o(c === null ? null : String.fromCodePoint(c));
			}
			case 116: return o("	");
			case 98: return o("\b");
			case 118: return o("\v");
			case 102: return o("\f");
			case 13: a.charCodeAt(t) === 10 && ++t;
			case 10: e = t, ++s;
			case 8232:
			case 8233: return o("");
			case 56:
			case 57:
				if (i) return o(null);
				r.strictNumericEscape(t - 1, e, s);
			default:
				if (h >= 48 && h <= 55) {
					let c = t - 1, u = /^[0-7]+/.exec(a.slice(c, t + 2))[0], f$1 = parseInt(u, 8);
					f$1 > 255 && (u = u.slice(0, -1), f$1 = parseInt(u, 8)), t += u.length - 1;
					let d$1 = a.charCodeAt(t);
					if (u !== "0" || d$1 === 56 || d$1 === 57) {
						if (i) return o(null);
						r.strictNumericEscape(c, e, s);
					}
					return o(String.fromCharCode(f$1));
				}
				return o(String.fromCharCode(h));
		}
	}
	function Ze$2(a, t, e, s, i, r, n, o) {
		let h = t, c;
		return {n: c, pos: t} = ss$1(a, t, e, s, 16, i, r, !1, o, !n), c === null && (n ? o.invalidEscapeSequence(h, e, s) : t = h - 1), {
			code: c,
			pos: t
		};
	}
	function ss$1(a, t, e, s, i, r, n, o, h, c) {
		let l$1 = t, u = i === 16 ? Rt$2.hex : Rt$2.decBinOct, f$1 = i === 16 ? we$2.hex : i === 10 ? we$2.dec : i === 8 ? we$2.oct : we$2.bin, d$1 = !1, y$1 = 0;
		for (let E$1 = 0, L$2 = r ?? Infinity; E$1 < L$2; ++E$1) {
			let S$1 = a.charCodeAt(t), I$1;
			if (S$1 === 95 && o !== "bail") {
				let Ae$2 = a.charCodeAt(t - 1), ne$2 = a.charCodeAt(t + 1);
				if (o) {
					if (Number.isNaN(ne$2) || !f$1(ne$2) || u.has(Ae$2) || u.has(ne$2)) {
						if (c) return {
							n: null,
							pos: t
						};
						h.unexpectedNumericSeparator(t, e, s);
					}
				} else {
					if (c) return {
						n: null,
						pos: t
					};
					h.numericSeparatorInEscapeSequence(t, e, s);
				}
				++t;
				continue;
			}
			if (S$1 >= 97 ? I$1 = S$1 - 97 + 10 : S$1 >= 65 ? I$1 = S$1 - 65 + 10 : ki$1(S$1) ? I$1 = S$1 - 48 : I$1 = Infinity, I$1 >= i) {
				if (I$1 <= 9 && c) return {
					n: null,
					pos: t
				};
				if (I$1 <= 9 && h.invalidDigit(t, e, s, i)) I$1 = 0;
				else if (n) I$1 = 0, d$1 = !0;
				else break;
			}
			++t, y$1 = y$1 * i + I$1;
		}
		return t === l$1 || r != null && t - l$1 !== r || d$1 ? {
			n: null,
			pos: t
		} : {
			n: y$1,
			pos: t
		};
	}
	function is$1(a, t, e, s, i, r) {
		let n = a.charCodeAt(t), o;
		if (n === 123) {
			if (++t, {code: o, pos: t} = Ze$2(a, t, e, s, a.indexOf("}", t) - t, !0, i, r), ++t, o !== null && o > 1114111) if (i) r.invalidCodePoint(t, e, s);
			else return {
				code: null,
				pos: t
			};
		} else ({code: o, pos: t} = Ze$2(a, t, e, s, 4, !1, i, r));
		return {
			code: o,
			pos: t
		};
	}
	function ce$2(a, t, e) {
		return new F$1(e, a - t, a);
	}
	var Di$2 = new Set([
		103,
		109,
		115,
		105,
		121,
		117,
		100,
		118
	]), O$2 = class {
		constructor(t) {
			this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, this.loc = new ee$1(t.startLoc, t.endLoc);
		}
	}, et$2 = class extends Ye$2 {
		constructor(t, e) {
			super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = {
				invalidDigit: (s, i, r, n) => this.options.errorRecovery ? (this.raise(p.InvalidDigit, ce$2(s, i, r), { radix: n }), !0) : !1,
				numericSeparatorInEscapeSequence: this.errorBuilder(p.NumericSeparatorInEscapeSequence),
				unexpectedNumericSeparator: this.errorBuilder(p.UnexpectedNumericSeparator)
			}, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
				invalidEscapeSequence: this.errorBuilder(p.InvalidEscapeSequence),
				invalidCodePoint: this.errorBuilder(p.InvalidCodePoint)
			}), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
				strictNumericEscape: (s, i, r) => {
					this.recordStrictModeErrors(p.StrictNumericEscape, ce$2(s, i, r));
				},
				unterminated: (s, i, r) => {
					throw this.raise(p.UnterminatedString, ce$2(s - 1, i, r));
				}
			}), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
				strictNumericEscape: this.errorBuilder(p.StrictNumericEscape),
				unterminated: (s, i, r) => {
					throw this.raise(p.UnterminatedTemplate, ce$2(s, i, r));
				}
			}), this.state = new Qe$2(), this.state.init(t), this.input = e, this.length = e.length, this.comments = [], this.isLookahead = !1;
		}
		pushToken(t) {
			this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
		}
		next() {
			this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new O$2(this.state)), this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
		}
		eat(t) {
			return this.match(t) ? (this.next(), !0) : !1;
		}
		match(t) {
			return this.state.type === t;
		}
		createLookaheadState(t) {
			return {
				pos: t.pos,
				value: null,
				type: t.type,
				start: t.start,
				end: t.end,
				context: [this.curContext()],
				inType: t.inType,
				startLoc: t.startLoc,
				lastTokEndLoc: t.lastTokEndLoc,
				curLine: t.curLine,
				lineStart: t.lineStart,
				curPosition: t.curPosition
			};
		}
		lookahead() {
			let t = this.state;
			this.state = this.createLookaheadState(t), this.isLookahead = !0, this.nextToken(), this.isLookahead = !1;
			let e = this.state;
			return this.state = t, e;
		}
		nextTokenStart() {
			return this.nextTokenStartSince(this.state.pos);
		}
		nextTokenStartSince(t) {
			return Ve$2.lastIndex = t, Ve$2.test(this.input) ? Ve$2.lastIndex : t;
		}
		lookaheadCharCode() {
			return this.input.charCodeAt(this.nextTokenStart());
		}
		nextTokenInLineStart() {
			return this.nextTokenInLineStartSince(this.state.pos);
		}
		nextTokenInLineStartSince(t) {
			return Ie$2.lastIndex = t, Ie$2.test(this.input) ? Ie$2.lastIndex : t;
		}
		lookaheadInLineCharCode() {
			return this.input.charCodeAt(this.nextTokenInLineStart());
		}
		codePointAtPos(t) {
			let e = this.input.charCodeAt(t);
			if ((e & 64512) === 55296 && ++t < this.input.length) {
				let s = this.input.charCodeAt(t);
				(s & 64512) === 56320 && (e = 65536 + ((e & 1023) << 10) + (s & 1023));
			}
			return e;
		}
		setStrict(t) {
			this.state.strict = t, t && (this.state.strictErrors.forEach(([e, s]) => this.raise(e, s)), this.state.strictErrors.clear());
		}
		curContext() {
			return this.state.context[this.state.context.length - 1];
		}
		nextToken() {
			if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
				this.finishToken(139);
				return;
			}
			this.getTokenFromCode(this.codePointAtPos(this.state.pos));
		}
		skipBlockComment(t) {
			let e;
			this.isLookahead || (e = this.state.curPosition());
			let s = this.state.pos, i = this.input.indexOf(t, s + 2);
			if (i === -1) throw this.raise(p.UnterminatedComment, this.state.curPosition());
			for (this.state.pos = i + t.length, Se$2.lastIndex = s + 2; Se$2.test(this.input) && Se$2.lastIndex <= i;) ++this.state.curLine, this.state.lineStart = Se$2.lastIndex;
			if (this.isLookahead) return;
			let r = {
				type: "CommentBlock",
				value: this.input.slice(s + 2, i),
				start: s,
				end: i + t.length,
				loc: new ee$1(e, this.state.curPosition())
			};
			return this.options.tokens && this.pushToken(r), r;
		}
		skipLineComment(t) {
			let e = this.state.pos, s;
			this.isLookahead || (s = this.state.curPosition());
			let i = this.input.charCodeAt(this.state.pos += t);
			if (this.state.pos < this.length) for (; !fe$2(i) && ++this.state.pos < this.length;) i = this.input.charCodeAt(this.state.pos);
			if (this.isLookahead) return;
			let r = this.state.pos, o = {
				type: "CommentLine",
				value: this.input.slice(e + t, r),
				start: e,
				end: r,
				loc: new ee$1(s, this.state.curPosition())
			};
			return this.options.tokens && this.pushToken(o), o;
		}
		skipSpace() {
			let t = this.state.pos, e = [];
			e: for (; this.state.pos < this.length;) {
				let s = this.input.charCodeAt(this.state.pos);
				switch (s) {
					case 32:
					case 160:
					case 9:
						++this.state.pos;
						break;
					case 13: this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
					case 10:
					case 8232:
					case 8233:
						++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
						break;
					case 47:
						switch (this.input.charCodeAt(this.state.pos + 1)) {
							case 42: {
								let i = this.skipBlockComment("*/");
								i !== void 0 && (this.addComment(i), this.options.attachComment && e.push(i));
								break;
							}
							case 47: {
								let i = this.skipLineComment(2);
								i !== void 0 && (this.addComment(i), this.options.attachComment && e.push(i));
								break;
							}
							default: break e;
						}
						break;
					default: if (Ni$1(s)) ++this.state.pos;
					else if (s === 45 && !this.inModule && this.options.annexB) {
						let i = this.state.pos;
						if (this.input.charCodeAt(i + 1) === 45 && this.input.charCodeAt(i + 2) === 62 && (t === 0 || this.state.lineStart > t)) {
							let r = this.skipLineComment(3);
							r !== void 0 && (this.addComment(r), this.options.attachComment && e.push(r));
						} else break e;
					} else if (s === 60 && !this.inModule && this.options.annexB) {
						let i = this.state.pos;
						if (this.input.charCodeAt(i + 1) === 33 && this.input.charCodeAt(i + 2) === 45 && this.input.charCodeAt(i + 3) === 45) {
							let r = this.skipLineComment(4);
							r !== void 0 && (this.addComment(r), this.options.attachComment && e.push(r));
						} else break e;
					} else break e;
				}
			}
			if (e.length > 0) {
				let i = {
					start: t,
					end: this.state.pos,
					comments: e,
					leadingNode: null,
					trailingNode: null,
					containingNode: null
				};
				this.state.commentStack.push(i);
			}
		}
		finishToken(t, e) {
			this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
			let s = this.state.type;
			this.state.type = t, this.state.value = e, this.isLookahead || this.updateContext(s);
		}
		replaceToken(t) {
			this.state.type = t, this.updateContext();
		}
		readToken_numberSign() {
			if (this.state.pos === 0 && this.readToken_interpreter()) return;
			let t = this.state.pos + 1, e = this.codePointAtPos(t);
			if (e >= 48 && e <= 57) throw this.raise(p.UnexpectedDigitAfterHash, this.state.curPosition());
			if (e === 123 || e === 91 && this.hasPlugin("recordAndTuple")) {
				if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar") throw this.raise(e === 123 ? p.RecordExpressionHashIncorrectStartSyntaxType : p.TupleExpressionHashIncorrectStartSyntaxType, this.state.curPosition());
				this.state.pos += 2, e === 123 ? this.finishToken(7) : this.finishToken(1);
			} else _$1(e) ? (++this.state.pos, this.finishToken(138, this.readWord1(e))) : e === 92 ? (++this.state.pos, this.finishToken(138, this.readWord1())) : this.finishOp(27, 1);
		}
		readToken_dot() {
			let t = this.input.charCodeAt(this.state.pos + 1);
			if (t >= 48 && t <= 57) {
				this.readNumber(!0);
				return;
			}
			t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
		}
		readToken_slash() {
			this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
		}
		readToken_interpreter() {
			if (this.state.pos !== 0 || this.length < 2) return !1;
			let t = this.input.charCodeAt(this.state.pos + 1);
			if (t !== 33) return !1;
			let e = this.state.pos;
			for (this.state.pos += 1; !fe$2(t) && ++this.state.pos < this.length;) t = this.input.charCodeAt(this.state.pos);
			let s = this.input.slice(e + 2, this.state.pos);
			return this.finishToken(28, s), !0;
		}
		readToken_mult_modulo(t) {
			let e = t === 42 ? 55 : 54, s = 1, i = this.input.charCodeAt(this.state.pos + 1);
			t === 42 && i === 42 && (s++, i = this.input.charCodeAt(this.state.pos + 2), e = 57), i === 61 && !this.state.inType && (s++, e = t === 37 ? 33 : 30), this.finishOp(e, s);
		}
		readToken_pipe_amp(t) {
			let e = this.input.charCodeAt(this.state.pos + 1);
			if (e === t) {
				this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(t === 124 ? 41 : 42, 2);
				return;
			}
			if (t === 124) {
				if (e === 62) {
					this.finishOp(39, 2);
					return;
				}
				if (this.hasPlugin("recordAndTuple") && e === 125) {
					if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(p.RecordExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
					this.state.pos += 2, this.finishToken(9);
					return;
				}
				if (this.hasPlugin("recordAndTuple") && e === 93) {
					if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(p.TupleExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
					this.state.pos += 2, this.finishToken(4);
					return;
				}
			}
			if (e === 61) {
				this.finishOp(30, 2);
				return;
			}
			this.finishOp(t === 124 ? 43 : 45, 1);
		}
		readToken_caret() {
			let t = this.input.charCodeAt(this.state.pos + 1);
			t === 61 && !this.state.inType ? this.finishOp(32, 2) : t === 94 && this.hasPlugin(["pipelineOperator", {
				proposal: "hack",
				topicToken: "^^"
			}]) ? (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94 && this.unexpected()) : this.finishOp(44, 1);
		}
		readToken_atSign() {
			this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", {
				proposal: "hack",
				topicToken: "@@"
			}]) ? this.finishOp(38, 2) : this.finishOp(26, 1);
		}
		readToken_plus_min(t) {
			let e = this.input.charCodeAt(this.state.pos + 1);
			if (e === t) {
				this.finishOp(34, 2);
				return;
			}
			e === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
		}
		readToken_lt() {
			let { pos: t } = this.state, e = this.input.charCodeAt(t + 1);
			if (e === 60) {
				if (this.input.charCodeAt(t + 2) === 61) {
					this.finishOp(30, 3);
					return;
				}
				this.finishOp(51, 2);
				return;
			}
			if (e === 61) {
				this.finishOp(49, 2);
				return;
			}
			this.finishOp(47, 1);
		}
		readToken_gt() {
			let { pos: t } = this.state, e = this.input.charCodeAt(t + 1);
			if (e === 62) {
				let s = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
				if (this.input.charCodeAt(t + s) === 61) {
					this.finishOp(30, s + 1);
					return;
				}
				this.finishOp(52, s);
				return;
			}
			if (e === 61) {
				this.finishOp(49, 2);
				return;
			}
			this.finishOp(48, 1);
		}
		readToken_eq_excl(t) {
			let e = this.input.charCodeAt(this.state.pos + 1);
			if (e === 61) {
				this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
				return;
			}
			if (t === 61 && e === 62) {
				this.state.pos += 2, this.finishToken(19);
				return;
			}
			this.finishOp(t === 61 ? 29 : 35, 1);
		}
		readToken_question() {
			let t = this.input.charCodeAt(this.state.pos + 1), e = this.input.charCodeAt(this.state.pos + 2);
			t === 63 ? e === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : t === 46 && !(e >= 48 && e <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
		}
		getTokenFromCode(t) {
			switch (t) {
				case 46:
					this.readToken_dot();
					return;
				case 40:
					++this.state.pos, this.finishToken(10);
					return;
				case 41:
					++this.state.pos, this.finishToken(11);
					return;
				case 59:
					++this.state.pos, this.finishToken(13);
					return;
				case 44:
					++this.state.pos, this.finishToken(12);
					return;
				case 91:
					if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
						if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(p.TupleExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
						this.state.pos += 2, this.finishToken(2);
					} else ++this.state.pos, this.finishToken(0);
					return;
				case 93:
					++this.state.pos, this.finishToken(3);
					return;
				case 123:
					if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
						if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(p.RecordExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
						this.state.pos += 2, this.finishToken(6);
					} else ++this.state.pos, this.finishToken(5);
					return;
				case 125:
					++this.state.pos, this.finishToken(8);
					return;
				case 58:
					this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
					return;
				case 63:
					this.readToken_question();
					return;
				case 96:
					this.readTemplateToken();
					return;
				case 48: {
					let e = this.input.charCodeAt(this.state.pos + 1);
					if (e === 120 || e === 88) {
						this.readRadixNumber(16);
						return;
					}
					if (e === 111 || e === 79) {
						this.readRadixNumber(8);
						return;
					}
					if (e === 98 || e === 66) {
						this.readRadixNumber(2);
						return;
					}
				}
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
					this.readNumber(!1);
					return;
				case 34:
				case 39:
					this.readString(t);
					return;
				case 47:
					this.readToken_slash();
					return;
				case 37:
				case 42:
					this.readToken_mult_modulo(t);
					return;
				case 124:
				case 38:
					this.readToken_pipe_amp(t);
					return;
				case 94:
					this.readToken_caret();
					return;
				case 43:
				case 45:
					this.readToken_plus_min(t);
					return;
				case 60:
					this.readToken_lt();
					return;
				case 62:
					this.readToken_gt();
					return;
				case 61:
				case 33:
					this.readToken_eq_excl(t);
					return;
				case 126:
					this.finishOp(36, 1);
					return;
				case 64:
					this.readToken_atSign();
					return;
				case 35:
					this.readToken_numberSign();
					return;
				case 92:
					this.readWord();
					return;
				default: if (_$1(t)) {
					this.readWord(t);
					return;
				}
			}
			throw this.raise(p.InvalidOrUnexpectedToken, this.state.curPosition(), { unexpected: String.fromCodePoint(t) });
		}
		finishOp(t, e) {
			let s = this.input.slice(this.state.pos, this.state.pos + e);
			this.state.pos += e, this.finishToken(t, s);
		}
		readRegexp() {
			let t = this.state.startLoc, e = this.state.start + 1, s, i, { pos: r } = this.state;
			for (;; ++r) {
				if (r >= this.length) throw this.raise(p.UnterminatedRegExp, v$1(t, 1));
				let c = this.input.charCodeAt(r);
				if (fe$2(c)) throw this.raise(p.UnterminatedRegExp, v$1(t, 1));
				if (s) s = !1;
				else {
					if (c === 91) i = !0;
					else if (c === 93 && i) i = !1;
					else if (c === 47 && !i) break;
					s = c === 92;
				}
			}
			let n = this.input.slice(e, r);
			++r;
			let o = "", h = () => v$1(t, r + 2 - e);
			for (; r < this.length;) {
				let c = this.codePointAtPos(r), l$1 = String.fromCharCode(c);
				if (Di$2.has(c)) c === 118 ? o.includes("u") && this.raise(p.IncompatibleRegExpUVFlags, h()) : c === 117 && o.includes("v") && this.raise(p.IncompatibleRegExpUVFlags, h()), o.includes(l$1) && this.raise(p.DuplicateRegExpFlags, h());
				else if (Q$2(c) || c === 92) this.raise(p.MalformedRegExpFlags, h());
				else break;
				++r, o += l$1;
			}
			this.state.pos = r, this.finishToken(137, {
				pattern: n,
				flags: o
			});
		}
		readInt(t, e, s = !1, i = !0) {
			let { n: r, pos: n } = ss$1(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, e, s, i, this.errorHandlers_readInt, !1);
			return this.state.pos = n, r;
		}
		readRadixNumber(t) {
			let e = this.state.curPosition(), s = !1;
			this.state.pos += 2;
			let i = this.readInt(t);
			i ?? this.raise(p.InvalidDigit, v$1(e, 2), { radix: t });
			let r = this.input.charCodeAt(this.state.pos);
			if (r === 110) ++this.state.pos, s = !0;
			else if (r === 109) throw this.raise(p.InvalidDecimal, e);
			if (_$1(this.codePointAtPos(this.state.pos))) throw this.raise(p.NumberIdentifier, this.state.curPosition());
			if (s) {
				let n = this.input.slice(e.index, this.state.pos).replace(/[_n]/g, "");
				this.finishToken(135, n);
				return;
			}
			this.finishToken(134, i);
		}
		readNumber(t) {
			let e = this.state.pos, s = this.state.curPosition(), i = !1, r = !1, n = !1, o = !1, h = !1;
			!t && this.readInt(10) === null && this.raise(p.InvalidNumber, this.state.curPosition());
			let c = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
			if (c) {
				let d$1 = this.input.slice(e, this.state.pos);
				if (this.recordStrictModeErrors(p.StrictOctalLiteral, s), !this.state.strict) {
					let y$1 = d$1.indexOf("_");
					y$1 > 0 && this.raise(p.ZeroDigitNumericSeparator, v$1(s, y$1));
				}
				h = c && !/[89]/.test(d$1);
			}
			let l$1 = this.input.charCodeAt(this.state.pos);
			if (l$1 === 46 && !h && (++this.state.pos, this.readInt(10), i = !0, l$1 = this.input.charCodeAt(this.state.pos)), (l$1 === 69 || l$1 === 101) && !h && (l$1 = this.input.charCodeAt(++this.state.pos), (l$1 === 43 || l$1 === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(p.InvalidOrMissingExponent, s), i = !0, o = !0, l$1 = this.input.charCodeAt(this.state.pos)), l$1 === 110 && ((i || c) && this.raise(p.InvalidBigIntLiteral, s), ++this.state.pos, r = !0), l$1 === 109 && (this.expectPlugin("decimal", this.state.curPosition()), (o || c) && this.raise(p.InvalidDecimal, s), ++this.state.pos, n = !0), _$1(this.codePointAtPos(this.state.pos))) throw this.raise(p.NumberIdentifier, this.state.curPosition());
			let u = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
			if (r) {
				this.finishToken(135, u);
				return;
			}
			if (n) {
				this.finishToken(136, u);
				return;
			}
			let f$1 = h ? parseInt(u, 8) : parseFloat(u);
			this.finishToken(134, f$1);
		}
		readCodePoint(t) {
			let { code: e, pos: s } = is$1(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, this.errorHandlers_readCodePoint);
			return this.state.pos = s, e;
		}
		readString(t) {
			let { str: e, pos: s, curLine: i, lineStart: r } = Ut$2(t === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
			this.state.pos = s + 1, this.state.lineStart = r, this.state.curLine = i, this.finishToken(133, e);
		}
		readTemplateContinuation() {
			this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
		}
		readTemplateToken() {
			let t = this.input[this.state.pos], { str: e, firstInvalidLoc: s, pos: i, curLine: r, lineStart: n } = Ut$2("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
			this.state.pos = i + 1, this.state.lineStart = n, this.state.curLine = r, s && (this.state.firstInvalidTemplateEscapePos = new F$1(s.curLine, s.pos - s.lineStart, s.pos)), this.input.codePointAt(i) === 96 ? this.finishToken(24, s ? null : t + e + "`") : (this.state.pos++, this.finishToken(25, s ? null : t + e + "${"));
		}
		recordStrictModeErrors(t, e) {
			let s = e.index;
			this.state.strict && !this.state.strictErrors.has(s) ? this.raise(t, e) : this.state.strictErrors.set(s, [t, e]);
		}
		readWord1(t) {
			this.state.containsEsc = !1;
			let e = "", s = this.state.pos, i = this.state.pos;
			for (t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2); this.state.pos < this.length;) {
				let r = this.codePointAtPos(this.state.pos);
				if (Q$2(r)) this.state.pos += r <= 65535 ? 1 : 2;
				else if (r === 92) {
					this.state.containsEsc = !0, e += this.input.slice(i, this.state.pos);
					let n = this.state.curPosition(), o = this.state.pos === s ? _$1 : Q$2;
					if (this.input.charCodeAt(++this.state.pos) !== 117) {
						this.raise(p.MissingUnicodeEscape, this.state.curPosition()), i = this.state.pos - 1;
						continue;
					}
					++this.state.pos;
					let h = this.readCodePoint(!0);
					h !== null && (o(h) || this.raise(p.EscapedCharNotAnIdentifier, n), e += String.fromCodePoint(h)), i = this.state.pos;
				} else break;
			}
			return e + this.input.slice(i, this.state.pos);
		}
		readWord(t) {
			let e = this.readWord1(t), s = ut$2.get(e);
			s !== void 0 ? this.finishToken(s, K$2(s)) : this.finishToken(132, e);
		}
		checkKeywordEscapes() {
			let { type: t } = this.state;
			Pt$2(t) && this.state.containsEsc && this.raise(p.InvalidEscapedReservedWord, this.state.startLoc, { reservedWord: K$2(t) });
		}
		raise(t, e, s = {}) {
			let r = t(e instanceof F$1 ? e : e.loc.start, s);
			if (!this.options.errorRecovery) throw r;
			return this.isLookahead || this.state.errors.push(r), r;
		}
		raiseOverwrite(t, e, s = {}) {
			let i = e instanceof F$1 ? e : e.loc.start, r = i.index, n = this.state.errors;
			for (let o = n.length - 1; o >= 0; o--) {
				let h = n[o];
				if (h.loc.index === r) return n[o] = t(i, s);
				if (h.loc.index < r) break;
			}
			return this.raise(t, e, s);
		}
		updateContext(t) {}
		unexpected(t, e) {
			throw this.raise(p.UnexpectedToken, t ?? this.state.startLoc, { expected: e ? K$2(e) : null });
		}
		expectPlugin(t, e) {
			if (this.hasPlugin(t)) return !0;
			throw this.raise(p.MissingPlugin, e ?? this.state.startLoc, { missingPlugin: [t] });
		}
		expectOnePlugin(t) {
			if (!t.some((e) => this.hasPlugin(e))) throw this.raise(p.MissingOneOfPlugins, this.state.startLoc, { missingPlugin: t });
		}
		errorBuilder(t) {
			return (e, s, i) => {
				this.raise(t, ce$2(e, s, i));
			};
		}
	}, tt$2 = class {
		constructor() {
			this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
		}
	}, st$2 = class {
		constructor(t) {
			this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = t;
		}
		current() {
			return this.stack[this.stack.length - 1];
		}
		enter() {
			this.stack.push(new tt$2());
		}
		exit() {
			let t = this.stack.pop(), e = this.current();
			for (let [s, i] of Array.from(t.undefinedPrivateNames)) e ? e.undefinedPrivateNames.has(s) || e.undefinedPrivateNames.set(s, i) : this.parser.raise(p.InvalidPrivateFieldResolution, i, { identifierName: s });
		}
		declarePrivateName(t, e, s) {
			let { privateNames: i, loneAccessors: r, undefinedPrivateNames: n } = this.current(), o = i.has(t);
			if (e & 3) {
				let h = o && r.get(t);
				if (h) {
					let c = h & 4, l$1 = e & 4;
					o = (h & 3) === (e & 3) || c !== l$1, o || r.delete(t);
				} else o || r.set(t, e);
			}
			o && this.parser.raise(p.PrivateNameRedeclaration, s, { identifierName: t }), i.add(t), n.delete(t);
		}
		usePrivateName(t, e) {
			let s;
			for (s of this.stack) if (s.privateNames.has(t)) return;
			s ? s.undefinedPrivateNames.set(t, e) : this.parser.raise(p.InvalidPrivateFieldResolution, e, { identifierName: t });
		}
	}, te$2 = class {
		constructor(t = 0) {
			this.type = t;
		}
		canBeArrowParameterDeclaration() {
			return this.type === 2 || this.type === 1;
		}
		isCertainlyParameterDeclaration() {
			return this.type === 3;
		}
	}, Le$2 = class extends te$2 {
		constructor(t) {
			super(t), this.declarationErrors = /* @__PURE__ */ new Map();
		}
		recordDeclarationError(t, e) {
			let s = e.index;
			this.declarationErrors.set(s, [t, e]);
		}
		clearDeclarationError(t) {
			this.declarationErrors.delete(t);
		}
		iterateErrors(t) {
			this.declarationErrors.forEach(t);
		}
	}, it$2 = class {
		constructor(t) {
			this.parser = void 0, this.stack = [new te$2()], this.parser = t;
		}
		enter(t) {
			this.stack.push(t);
		}
		exit() {
			this.stack.pop();
		}
		recordParameterInitializerError(t, e) {
			let s = e.loc.start, { stack: i } = this, r = i.length - 1, n = i[r];
			for (; !n.isCertainlyParameterDeclaration();) {
				if (n.canBeArrowParameterDeclaration()) n.recordDeclarationError(t, s);
				else return;
				n = i[--r];
			}
			this.parser.raise(t, s);
		}
		recordArrowParameterBindingError(t, e) {
			let { stack: s } = this, i = s[s.length - 1], r = e.loc.start;
			if (i.isCertainlyParameterDeclaration()) this.parser.raise(t, r);
			else if (i.canBeArrowParameterDeclaration()) i.recordDeclarationError(t, r);
			else return;
		}
		recordAsyncArrowParametersError(t) {
			let { stack: e } = this, s = e.length - 1, i = e[s];
			for (; i.canBeArrowParameterDeclaration();) i.type === 2 && i.recordDeclarationError(p.AwaitBindingIdentifier, t), i = e[--s];
		}
		validateAsPattern() {
			let { stack: t } = this, e = t[t.length - 1];
			e.canBeArrowParameterDeclaration() && e.iterateErrors(([s, i]) => {
				this.parser.raise(s, i);
				let r = t.length - 2, n = t[r];
				for (; n.canBeArrowParameterDeclaration();) n.clearDeclarationError(i.index), n = t[--r];
			});
		}
	};
	function Mi$1() {
		return new te$2(3);
	}
	function Oi$1() {
		return new Le$2(1);
	}
	function Fi$1() {
		return new Le$2(2);
	}
	function rs$1() {
		return new te$2();
	}
	var rt$2 = class {
		constructor() {
			this.stacks = [];
		}
		enter(t) {
			this.stacks.push(t);
		}
		exit() {
			this.stacks.pop();
		}
		currentFlags() {
			return this.stacks[this.stacks.length - 1];
		}
		get hasAwait() {
			return (this.currentFlags() & 2) > 0;
		}
		get hasYield() {
			return (this.currentFlags() & 1) > 0;
		}
		get hasReturn() {
			return (this.currentFlags() & 4) > 0;
		}
		get hasIn() {
			return (this.currentFlags() & 8) > 0;
		}
	};
	function Ne$2(a, t) {
		return (a ? 2 : 0) | (t ? 1 : 0);
	}
	var at$2 = class extends et$2 {
		addExtra(t, e, s, i = !0) {
			if (!t) return;
			let r = t.extra = t.extra || {};
			i ? r[e] = s : Object.defineProperty(r, e, {
				enumerable: i,
				value: s
			});
		}
		isContextual(t) {
			return this.state.type === t && !this.state.containsEsc;
		}
		isUnparsedContextual(t, e) {
			let s = t + e.length;
			if (this.input.slice(t, s) === e) {
				let i = this.input.charCodeAt(s);
				return !(Q$2(i) || (i & 64512) === 55296);
			}
			return !1;
		}
		isLookaheadContextual(t) {
			let e = this.nextTokenStart();
			return this.isUnparsedContextual(e, t);
		}
		eatContextual(t) {
			return this.isContextual(t) ? (this.next(), !0) : !1;
		}
		expectContextual(t, e) {
			if (!this.eatContextual(t)) {
				if (e != null) throw this.raise(e, this.state.startLoc);
				this.unexpected(null, t);
			}
		}
		canInsertSemicolon() {
			return this.match(139) || this.match(8) || this.hasPrecedingLineBreak();
		}
		hasPrecedingLineBreak() {
			return ts$1.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start));
		}
		hasFollowingLineBreak() {
			return Bt$2.lastIndex = this.state.end, Bt$2.test(this.input);
		}
		isLineTerminator() {
			return this.eat(13) || this.canInsertSemicolon();
		}
		semicolon(t = !0) {
			(t ? this.isLineTerminator() : this.eat(13)) || this.raise(p.MissingSemicolon, this.state.lastTokEndLoc);
		}
		expect(t, e) {
			this.eat(t) || this.unexpected(e, t);
		}
		tryParse(t, e = this.state.clone()) {
			let s = { node: null };
			try {
				let i = t((r = null) => {
					throw s.node = r, s;
				});
				if (this.state.errors.length > e.errors.length) {
					let r = this.state;
					return this.state = e, this.state.tokensLength = r.tokensLength, {
						node: i,
						error: r.errors[e.errors.length],
						thrown: !1,
						aborted: !1,
						failState: r
					};
				}
				return {
					node: i,
					error: null,
					thrown: !1,
					aborted: !1,
					failState: null
				};
			} catch (i) {
				let r = this.state;
				if (this.state = e, i instanceof SyntaxError) return {
					node: null,
					error: i,
					thrown: !0,
					aborted: !1,
					failState: r
				};
				if (i === s) return {
					node: s.node,
					error: null,
					thrown: !1,
					aborted: !0,
					failState: r
				};
				throw i;
			}
		}
		checkExpressionErrors(t, e) {
			if (!t) return !1;
			let { shorthandAssignLoc: s, doubleProtoLoc: i, privateKeyLoc: r, optionalParametersLoc: n } = t, o = !!s || !!i || !!n || !!r;
			if (!e) return o;
			s != null && this.raise(p.InvalidCoverInitializedName, s), i != null && this.raise(p.DuplicateProto, i), r != null && this.raise(p.UnexpectedPrivateField, r), n != null && this.unexpected(n);
		}
		isLiteralPropertyName() {
			return Wt$2(this.state.type);
		}
		isPrivateName(t) {
			return t.type === "PrivateName";
		}
		getPrivateNameSV(t) {
			return t.id.name;
		}
		hasPropertyAsPrivateName(t) {
			return (t.type === "MemberExpression" || t.type === "OptionalMemberExpression") && this.isPrivateName(t.property);
		}
		isObjectProperty(t) {
			return t.type === "ObjectProperty";
		}
		isObjectMethod(t) {
			return t.type === "ObjectMethod";
		}
		initializeScopes(t = this.options.sourceType === "module") {
			let e = this.state.labels;
			this.state.labels = [];
			let s = this.exportedIdentifiers;
			this.exportedIdentifiers = /* @__PURE__ */ new Set();
			let i = this.inModule;
			this.inModule = t;
			let r = this.scope;
			this.scope = new (this.getScopeHandler())(this, t);
			let o = this.prodParam;
			this.prodParam = new rt$2();
			let h = this.classScope;
			this.classScope = new st$2(this);
			let c = this.expressionScope;
			return this.expressionScope = new it$2(this), () => {
				this.state.labels = e, this.exportedIdentifiers = s, this.inModule = i, this.scope = r, this.prodParam = o, this.classScope = h, this.expressionScope = c;
			};
		}
		enterInitialScopes() {
			let t = 0;
			this.inModule && (t |= 2), this.scope.enter(1), this.prodParam.enter(t);
		}
		checkDestructuringPrivate(t) {
			let { privateKeyLoc: e } = t;
			e !== null && this.expectPlugin("destructuringPrivate", e);
		}
	}, Z$1 = class {
		constructor() {
			this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null;
		}
	}, se$2 = class {
		constructor(t, e, s) {
			this.type = "", this.start = e, this.end = 0, this.loc = new ee$1(s), t != null && t.options.ranges && (this.range = [e, 0]), t != null && t.filename && (this.loc.filename = t.filename);
		}
	}, bt$2 = se$2.prototype;
	bt$2.__clone = function() {
		let a = new se$2(void 0, this.start, this.loc.start), t = Object.keys(this);
		for (let e = 0, s = t.length; e < s; e++) {
			let i = t[e];
			i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (a[i] = this[i]);
		}
		return a;
	};
	function Bi$1(a) {
		return $$1(a);
	}
	function $$1(a) {
		let { type: t, start: e, end: s, loc: i, range: r, extra: n, name: o } = a, h = Object.create(bt$2);
		return h.type = t, h.start = e, h.end = s, h.loc = i, h.range = r, h.extra = n, h.name = o, t === "Placeholder" && (h.expectedNode = a.expectedNode), h;
	}
	function Ri$1(a) {
		let { type: t, start: e, end: s, loc: i, range: r, extra: n } = a;
		if (t === "Placeholder") return Bi$1(a);
		let o = Object.create(bt$2);
		return o.type = t, o.start = e, o.end = s, o.loc = i, o.range = r, a.raw !== void 0 ? o.raw = a.raw : o.extra = n, o.value = a.value, o;
	}
	var nt$2 = class extends at$2 {
		startNode() {
			let t = this.state.startLoc;
			return new se$2(this, t.index, t);
		}
		startNodeAt(t) {
			return new se$2(this, t.index, t);
		}
		startNodeAtNode(t) {
			return this.startNodeAt(t.loc.start);
		}
		finishNode(t, e) {
			return this.finishNodeAt(t, e, this.state.lastTokEndLoc);
		}
		finishNodeAt(t, e, s) {
			return t.type = e, t.end = s.index, t.loc.end = s, this.options.ranges && (t.range[1] = s.index), this.options.attachComment && this.processComment(t), t;
		}
		resetStartLocation(t, e) {
			t.start = e.index, t.loc.start = e, this.options.ranges && (t.range[0] = e.index);
		}
		resetEndLocation(t, e = this.state.lastTokEndLoc) {
			t.end = e.index, t.loc.end = e, this.options.ranges && (t.range[1] = e.index);
		}
		resetStartLocationFromNode(t, e) {
			this.resetStartLocation(t, e.loc.start);
		}
	}, Ui$1 = new Set([
		"_",
		"any",
		"bool",
		"boolean",
		"empty",
		"extends",
		"false",
		"interface",
		"mixed",
		"null",
		"number",
		"static",
		"string",
		"true",
		"typeof",
		"void"
	]), g$1 = j$1`flow`({
		AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
		AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
		AssignReservedType: ({ reservedType: a }) => `Cannot overwrite reserved type ${a}.`,
		DeclareClassElement: "The `declare` modifier can only appear on class fields.",
		DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
		DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
		EnumBooleanMemberNotInitialized: ({ memberName: a, enumName: t }) => `Boolean enum members need to be initialized. Use either \`${a} = true,\` or \`${a} = false,\` in enum \`${t}\`.`,
		EnumDuplicateMemberName: ({ memberName: a, enumName: t }) => `Enum member names need to be unique, but the name \`${a}\` has already been used before in enum \`${t}\`.`,
		EnumInconsistentMemberValues: ({ enumName: a }) => `Enum \`${a}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,
		EnumInvalidExplicitType: ({ invalidEnumType: a, enumName: t }) => `Enum type \`${a}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`,
		EnumInvalidExplicitTypeUnknownSupplied: ({ enumName: a }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${a}\`.`,
		EnumInvalidMemberInitializerPrimaryType: ({ enumName: a, memberName: t, explicitType: e }) => `Enum \`${a}\` has type \`${e}\`, so the initializer of \`${t}\` needs to be a ${e} literal.`,
		EnumInvalidMemberInitializerSymbolType: ({ enumName: a, memberName: t }) => `Symbol enum members cannot be initialized. Use \`${t},\` in enum \`${a}\`.`,
		EnumInvalidMemberInitializerUnknownType: ({ enumName: a, memberName: t }) => `The enum member initializer for \`${t}\` needs to be a literal (either a boolean, number, or string) in enum \`${a}\`.`,
		EnumInvalidMemberName: ({ enumName: a, memberName: t, suggestion: e }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${t}\`, consider using \`${e}\`, in enum \`${a}\`.`,
		EnumNumberMemberNotInitialized: ({ enumName: a, memberName: t }) => `Number enum members need to be initialized, e.g. \`${t} = 1\` in enum \`${a}\`.`,
		EnumStringMemberInconsistentlyInitialized: ({ enumName: a }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${a}\`.`,
		GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
		ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.",
		ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
		InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
		InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
		InexactVariance: "Explicit inexact syntax cannot have variance.",
		InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
		MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
		NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
		NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
		PatternIsOptional: Object.assign({ message: "A binding pattern parameter cannot be optional in an implementation signature." }, { reasonCode: "OptionalBindingPattern" }),
		SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
		SpreadVariance: "Spread properties cannot have variance.",
		ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
		ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
		ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
		ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
		ThisParamNoDefault: "The `this` parameter may not have a default value.",
		TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
		TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
		UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
		UnexpectedReservedType: ({ reservedType: a }) => `Unexpected reserved type ${a}.`,
		UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
		UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
		UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
		UnexpectedSubtractionOperand: "Unexpected token, expected \"number\" or \"bigint\".",
		UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
		UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
		UnsupportedDeclareExportKind: ({ unsupportedExportKind: a, suggestion: t }) => `\`declare export ${a}\` is not supported. Use \`${t}\` instead.`,
		UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
		UnterminatedFlowComment: "Unterminated flow-comment."
	});
	function _i$1(a) {
		return a.type === "DeclareExportAllDeclaration" || a.type === "DeclareExportDeclaration" && (!a.declaration || a.declaration.type !== "TypeAlias" && a.declaration.type !== "InterfaceDeclaration");
	}
	function _t$2(a) {
		return a.importKind === "type" || a.importKind === "typeof";
	}
	var ji$1 = {
		const: "declare export var",
		let: "declare export var",
		type: "export type",
		interface: "export interface"
	};
	function $i$1(a, t) {
		let e = [], s = [];
		for (let i = 0; i < a.length; i++) (t(a[i], i, a) ? e : s).push(a[i]);
		return [e, s];
	}
	var Vi$1 = /\*?\s*@((?:no)?flow)\b/, qi$1 = (a) => class extends a {
		constructor(...e) {
			super(...e), this.flowPragma = void 0;
		}
		getScopeHandler() {
			return Xe$2;
		}
		shouldParseTypes() {
			return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
		}
		shouldParseEnums() {
			return !!this.getPluginOption("flow", "enums");
		}
		finishToken(e, s) {
			e !== 133 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, s);
		}
		addComment(e) {
			if (this.flowPragma === void 0) {
				let s = Vi$1.exec(e.value);
				if (s) if (s[1] === "flow") this.flowPragma = "flow";
				else if (s[1] === "noflow") this.flowPragma = "noflow";
				else throw new Error("Unexpected flow pragma");
			}
			super.addComment(e);
		}
		flowParseTypeInitialiser(e) {
			let s = this.state.inType;
			this.state.inType = !0, this.expect(e || 14);
			let i = this.flowParseType();
			return this.state.inType = s, i;
		}
		flowParsePredicate() {
			let e = this.startNode(), s = this.state.startLoc;
			return this.next(), this.expectContextual(110), this.state.lastTokStartLoc.index > s.index + 1 && this.raise(g$1.UnexpectedSpaceBetweenModuloChecks, s), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
		}
		flowParseTypeAndPredicateInitialiser() {
			let e = this.state.inType;
			this.state.inType = !0, this.expect(14);
			let s = null, i = null;
			return this.match(54) ? (this.state.inType = e, i = this.flowParsePredicate()) : (s = this.flowParseType(), this.state.inType = e, this.match(54) && (i = this.flowParsePredicate())), [s, i];
		}
		flowParseDeclareClass(e) {
			return this.next(), this.flowParseInterfaceish(e, !0), this.finishNode(e, "DeclareClass");
		}
		flowParseDeclareFunction(e) {
			this.next();
			let s = e.id = this.parseIdentifier(), i = this.startNode(), r = this.startNode();
			this.match(47) ? i.typeParameters = this.flowParseTypeParameterDeclaration() : i.typeParameters = null, this.expect(10);
			let n = this.flowParseFunctionTypeParams();
			return i.params = n.params, i.rest = n.rest, i.this = n._this, this.expect(11), [i.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), r.typeAnnotation = this.finishNode(i, "FunctionTypeAnnotation"), s.typeAnnotation = this.finishNode(r, "TypeAnnotation"), this.resetEndLocation(s), this.semicolon(), this.scope.declareName(e.id.name, 2048, e.id.loc.start), this.finishNode(e, "DeclareFunction");
		}
		flowParseDeclare(e, s) {
			if (this.match(80)) return this.flowParseDeclareClass(e);
			if (this.match(68)) return this.flowParseDeclareFunction(e);
			if (this.match(74)) return this.flowParseDeclareVariable(e);
			if (this.eatContextual(127)) return this.match(16) ? this.flowParseDeclareModuleExports(e) : (s && this.raise(g$1.NestedDeclareModule, this.state.lastTokStartLoc), this.flowParseDeclareModule(e));
			if (this.isContextual(130)) return this.flowParseDeclareTypeAlias(e);
			if (this.isContextual(131)) return this.flowParseDeclareOpaqueType(e);
			if (this.isContextual(129)) return this.flowParseDeclareInterface(e);
			if (this.match(82)) return this.flowParseDeclareExportDeclaration(e, s);
			this.unexpected();
		}
		flowParseDeclareVariable(e) {
			return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(!0), this.scope.declareName(e.id.name, 5, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable");
		}
		flowParseDeclareModule(e) {
			this.scope.enter(0), this.match(133) ? e.id = super.parseExprAtom() : e.id = this.parseIdentifier();
			let s = e.body = this.startNode(), i = s.body = [];
			for (this.expect(5); !this.match(8);) {
				let o = this.startNode();
				this.match(83) ? (this.next(), !this.isContextual(130) && !this.match(87) && this.raise(g$1.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc), super.parseImport(o)) : (this.expectContextual(125, g$1.UnsupportedStatementInDeclareModule), o = this.flowParseDeclare(o, !0)), i.push(o);
			}
			this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
			let r = null, n = !1;
			return i.forEach((o) => {
				_i$1(o) ? (r === "CommonJS" && this.raise(g$1.AmbiguousDeclareModuleKind, o), r = "ES") : o.type === "DeclareModuleExports" && (n && this.raise(g$1.DuplicateDeclareModuleExports, o), r === "ES" && this.raise(g$1.AmbiguousDeclareModuleKind, o), r = "CommonJS", n = !0);
			}), e.kind = r || "CommonJS", this.finishNode(e, "DeclareModule");
		}
		flowParseDeclareExportDeclaration(e, s) {
			if (this.expect(82), this.eat(65)) return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = !0, this.finishNode(e, "DeclareExportDeclaration");
			if (this.match(75) || this.isLet() || (this.isContextual(130) || this.isContextual(129)) && !s) {
				let i = this.state.value;
				throw this.raise(g$1.UnsupportedDeclareExportKind, this.state.startLoc, {
					unsupportedExportKind: i,
					suggestion: ji$1[i]
				});
			}
			if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(131)) return e.declaration = this.flowParseDeclare(this.startNode()), e.default = !1, this.finishNode(e, "DeclareExportDeclaration");
			if (this.match(55) || this.match(5) || this.isContextual(129) || this.isContextual(130) || this.isContextual(131)) return e = this.parseExport(e, null), e.type === "ExportNamedDeclaration" && (e.type = "ExportDeclaration", e.default = !1, delete e.exportKind), e.type = "Declare" + e.type, e;
			this.unexpected();
		}
		flowParseDeclareModuleExports(e) {
			return this.next(), this.expectContextual(111), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports");
		}
		flowParseDeclareTypeAlias(e) {
			this.next();
			let s = this.flowParseTypeAlias(e);
			return s.type = "DeclareTypeAlias", s;
		}
		flowParseDeclareOpaqueType(e) {
			this.next();
			let s = this.flowParseOpaqueType(e, !0);
			return s.type = "DeclareOpaqueType", s;
		}
		flowParseDeclareInterface(e) {
			return this.next(), this.flowParseInterfaceish(e, !1), this.finishNode(e, "DeclareInterface");
		}
		flowParseInterfaceish(e, s) {
			if (e.id = this.flowParseRestrictedIdentifier(!s, !0), this.scope.declareName(e.id.name, s ? 17 : 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], this.eat(81)) do
				e.extends.push(this.flowParseInterfaceExtends());
			while (!s && this.eat(12));
			if (s) {
				if (e.implements = [], e.mixins = [], this.eatContextual(117)) do
					e.mixins.push(this.flowParseInterfaceExtends());
				while (this.eat(12));
				if (this.eatContextual(113)) do
					e.implements.push(this.flowParseInterfaceExtends());
				while (this.eat(12));
			}
			e.body = this.flowParseObjectType({
				allowStatic: s,
				allowExact: !1,
				allowSpread: !1,
				allowProto: s,
				allowInexact: !1
			});
		}
		flowParseInterfaceExtends() {
			let e = this.startNode();
			return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends");
		}
		flowParseInterface(e) {
			return this.flowParseInterfaceish(e, !1), this.finishNode(e, "InterfaceDeclaration");
		}
		checkNotUnderscore(e) {
			e === "_" && this.raise(g$1.UnexpectedReservedUnderscore, this.state.startLoc);
		}
		checkReservedType(e, s, i) {
			Ui$1.has(e) && this.raise(i ? g$1.AssignReservedType : g$1.UnexpectedReservedType, s, { reservedType: e });
		}
		flowParseRestrictedIdentifier(e, s) {
			return this.checkReservedType(this.state.value, this.state.startLoc, s), this.parseIdentifier(e);
		}
		flowParseTypeAlias(e) {
			return e.id = this.flowParseRestrictedIdentifier(!1, !0), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias");
		}
		flowParseOpaqueType(e, s) {
			return this.expectContextual(130), e.id = this.flowParseRestrictedIdentifier(!0, !0), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, s || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType");
		}
		flowParseTypeParameter(e = !1) {
			let s = this.state.startLoc, i = this.startNode(), r = this.flowParseVariance(), n = this.flowParseTypeAnnotatableIdentifier();
			return i.name = n.name, i.variance = r, i.bound = n.typeAnnotation, this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : e && this.raise(g$1.MissingTypeParamDefault, s), this.finishNode(i, "TypeParameter");
		}
		flowParseTypeParameterDeclaration() {
			let e = this.state.inType, s = this.startNode();
			s.params = [], this.state.inType = !0, this.match(47) || this.match(142) ? this.next() : this.unexpected();
			let i = !1;
			do {
				let r = this.flowParseTypeParameter(i);
				s.params.push(r), r.default && (i = !0), this.match(48) || this.expect(12);
			} while (!this.match(48));
			return this.expect(48), this.state.inType = e, this.finishNode(s, "TypeParameterDeclaration");
		}
		flowParseTypeParameterInstantiation() {
			let e = this.startNode(), s = this.state.inType;
			e.params = [], this.state.inType = !0, this.expect(47);
			let i = this.state.noAnonFunctionType;
			for (this.state.noAnonFunctionType = !1; !this.match(48);) e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
			return this.state.noAnonFunctionType = i, this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
		}
		flowParseTypeParameterInstantiationCallOrNew() {
			let e = this.startNode(), s = this.state.inType;
			for (e.params = [], this.state.inType = !0, this.expect(47); !this.match(48);) e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);
			return this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
		}
		flowParseInterfaceType() {
			let e = this.startNode();
			if (this.expectContextual(129), e.extends = [], this.eat(81)) do
				e.extends.push(this.flowParseInterfaceExtends());
			while (this.eat(12));
			return e.body = this.flowParseObjectType({
				allowStatic: !1,
				allowExact: !1,
				allowSpread: !1,
				allowProto: !1,
				allowInexact: !1
			}), this.finishNode(e, "InterfaceTypeAnnotation");
		}
		flowParseObjectPropertyKey() {
			return this.match(134) || this.match(133) ? super.parseExprAtom() : this.parseIdentifier(!0);
		}
		flowParseObjectTypeIndexer(e, s, i) {
			return e.static = s, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = i, this.finishNode(e, "ObjectTypeIndexer");
		}
		flowParseObjectTypeInternalSlot(e, s) {
			return e.static = s, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = !0, e.optional = !1, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = !1, this.eat(17) && (e.optional = !0), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot");
		}
		flowParseObjectTypeMethodish(e) {
			for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(!0), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) e.params.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
			return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation");
		}
		flowParseObjectTypeCallProperty(e, s) {
			let i = this.startNode();
			return e.static = s, e.value = this.flowParseObjectTypeMethodish(i), this.finishNode(e, "ObjectTypeCallProperty");
		}
		flowParseObjectType({ allowStatic: e, allowExact: s, allowSpread: i, allowProto: r, allowInexact: n }) {
			let o = this.state.inType;
			this.state.inType = !0;
			let h = this.startNode();
			h.callProperties = [], h.properties = [], h.indexers = [], h.internalSlots = [];
			let c, l$1, u = !1;
			for (s && this.match(6) ? (this.expect(6), c = 9, l$1 = !0) : (this.expect(5), c = 8, l$1 = !1), h.exact = l$1; !this.match(c);) {
				let d$1 = !1, y$1 = null, E$1 = null, L$2 = this.startNode();
				if (r && this.isContextual(118)) {
					let I$1 = this.lookahead();
					I$1.type !== 14 && I$1.type !== 17 && (this.next(), y$1 = this.state.startLoc, e = !1);
				}
				if (e && this.isContextual(106)) {
					let I$1 = this.lookahead();
					I$1.type !== 14 && I$1.type !== 17 && (this.next(), d$1 = !0);
				}
				let S$1 = this.flowParseVariance();
				if (this.eat(0)) y$1 != null && this.unexpected(y$1), this.eat(0) ? (S$1 && this.unexpected(S$1.loc.start), h.internalSlots.push(this.flowParseObjectTypeInternalSlot(L$2, d$1))) : h.indexers.push(this.flowParseObjectTypeIndexer(L$2, d$1, S$1));
				else if (this.match(10) || this.match(47)) y$1 != null && this.unexpected(y$1), S$1 && this.unexpected(S$1.loc.start), h.callProperties.push(this.flowParseObjectTypeCallProperty(L$2, d$1));
				else {
					let I$1 = "init";
					if (this.isContextual(99) || this.isContextual(104)) Wt$2(this.lookahead().type) && (I$1 = this.state.value, this.next());
					let Ae$2 = this.flowParseObjectTypeProperty(L$2, d$1, y$1, S$1, I$1, i, n ?? !l$1);
					Ae$2 === null ? (u = !0, E$1 = this.state.lastTokStartLoc) : h.properties.push(Ae$2);
				}
				this.flowObjectTypeSemicolon(), E$1 && !this.match(8) && !this.match(9) && this.raise(g$1.UnexpectedExplicitInexactInObject, E$1);
			}
			this.expect(c), i && (h.inexact = u);
			let f$1 = this.finishNode(h, "ObjectTypeAnnotation");
			return this.state.inType = o, f$1;
		}
		flowParseObjectTypeProperty(e, s, i, r, n, o, h) {
			if (this.eat(21)) return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (o ? h || this.raise(g$1.InexactInsideExact, this.state.lastTokStartLoc) : this.raise(g$1.InexactInsideNonObject, this.state.lastTokStartLoc), r && this.raise(g$1.InexactVariance, r), null) : (o || this.raise(g$1.UnexpectedSpreadType, this.state.lastTokStartLoc), i != null && this.unexpected(i), r && this.raise(g$1.SpreadVariance, r), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
			{
				e.key = this.flowParseObjectPropertyKey(), e.static = s, e.proto = i != null, e.kind = n;
				let c = !1;
				return this.match(47) || this.match(10) ? (e.method = !0, i != null && this.unexpected(i), r && this.unexpected(r.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(e), !o && e.key.name === "constructor" && e.value.this && this.raise(g$1.ThisParamBannedInConstructor, e.value.this)) : (n !== "init" && this.unexpected(), e.method = !1, this.eat(17) && (c = !0), e.value = this.flowParseTypeInitialiser(), e.variance = r), e.optional = c, this.finishNode(e, "ObjectTypeProperty");
			}
		}
		flowCheckGetterSetterParams(e) {
			let s = e.kind === "get" ? 0 : 1, i = e.value.params.length + (e.value.rest ? 1 : 0);
			e.value.this && this.raise(e.kind === "get" ? g$1.GetterMayNotHaveThisParam : g$1.SetterMayNotHaveThisParam, e.value.this), i !== s && this.raise(e.kind === "get" ? p.BadGetterArity : p.BadSetterArity, e), e.kind === "set" && e.value.rest && this.raise(p.BadSetterRestParameter, e);
		}
		flowObjectTypeSemicolon() {
			!this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
		}
		flowParseQualifiedTypeIdentifier(e, s) {
			e ??= this.state.startLoc;
			let r = s || this.flowParseRestrictedIdentifier(!0);
			for (; this.eat(16);) {
				let n = this.startNodeAt(e);
				n.qualification = r, n.id = this.flowParseRestrictedIdentifier(!0), r = this.finishNode(n, "QualifiedTypeIdentifier");
			}
			return r;
		}
		flowParseGenericType(e, s) {
			let i = this.startNodeAt(e);
			return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(e, s), this.match(47) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
		}
		flowParseTypeofType() {
			let e = this.startNode();
			return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation");
		}
		flowParseTupleType() {
			let e = this.startNode();
			for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3));) this.expect(12);
			return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
		}
		flowParseFunctionTypeParam(e) {
			let s = null, i = !1, r = null, n = this.startNode(), o = this.lookahead(), h = this.state.type === 78;
			return o.type === 14 || o.type === 17 ? (h && !e && this.raise(g$1.ThisParamMustBeFirst, n), s = this.parseIdentifier(h), this.eat(17) && (i = !0, h && this.raise(g$1.ThisParamMayNotBeOptional, n)), r = this.flowParseTypeInitialiser()) : r = this.flowParseType(), n.name = s, n.optional = i, n.typeAnnotation = r, this.finishNode(n, "FunctionTypeParam");
		}
		reinterpretTypeAsFunctionTypeParam(e) {
			let s = this.startNodeAt(e.loc.start);
			return s.name = null, s.optional = !1, s.typeAnnotation = e, this.finishNode(s, "FunctionTypeParam");
		}
		flowParseFunctionTypeParams(e = []) {
			let s = null, i = null;
			for (this.match(78) && (i = this.flowParseFunctionTypeParam(!0), i.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) e.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
			return this.eat(21) && (s = this.flowParseFunctionTypeParam(!1)), {
				params: e,
				rest: s,
				_this: i
			};
		}
		flowIdentToTypeAnnotation(e, s, i) {
			switch (i.name) {
				case "any": return this.finishNode(s, "AnyTypeAnnotation");
				case "bool":
				case "boolean": return this.finishNode(s, "BooleanTypeAnnotation");
				case "mixed": return this.finishNode(s, "MixedTypeAnnotation");
				case "empty": return this.finishNode(s, "EmptyTypeAnnotation");
				case "number": return this.finishNode(s, "NumberTypeAnnotation");
				case "string": return this.finishNode(s, "StringTypeAnnotation");
				case "symbol": return this.finishNode(s, "SymbolTypeAnnotation");
				default: return this.checkNotUnderscore(i.name), this.flowParseGenericType(e, i);
			}
		}
		flowParsePrimaryType() {
			let e = this.state.startLoc, s = this.startNode(), i, r, n = !1, o = this.state.noAnonFunctionType;
			switch (this.state.type) {
				case 5: return this.flowParseObjectType({
					allowStatic: !1,
					allowExact: !1,
					allowSpread: !0,
					allowProto: !1,
					allowInexact: !0
				});
				case 6: return this.flowParseObjectType({
					allowStatic: !1,
					allowExact: !0,
					allowSpread: !0,
					allowProto: !1,
					allowInexact: !1
				});
				case 0: return this.state.noAnonFunctionType = !1, r = this.flowParseTupleType(), this.state.noAnonFunctionType = o, r;
				case 47: {
					let h = this.startNode();
					return h.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), h.params = i.params, h.rest = i.rest, h.this = i._this, this.expect(11), this.expect(19), h.returnType = this.flowParseType(), this.finishNode(h, "FunctionTypeAnnotation");
				}
				case 10: {
					let h = this.startNode();
					if (this.next(), !this.match(11) && !this.match(21)) if (w$1(this.state.type) || this.match(78)) {
						let c = this.lookahead().type;
						n = c !== 17 && c !== 14;
					} else n = !0;
					if (n) {
						if (this.state.noAnonFunctionType = !1, r = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19)) return this.expect(11), r;
						this.eat(12);
					}
					return r ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]) : i = this.flowParseFunctionTypeParams(), h.params = i.params, h.rest = i.rest, h.this = i._this, this.expect(11), this.expect(19), h.returnType = this.flowParseType(), h.typeParameters = null, this.finishNode(h, "FunctionTypeAnnotation");
				}
				case 133: return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
				case 85:
				case 86: return s.value = this.match(85), this.next(), this.finishNode(s, "BooleanLiteralTypeAnnotation");
				case 53:
					if (this.state.value === "-") {
						if (this.next(), this.match(134)) return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", s);
						if (this.match(135)) return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", s);
						throw this.raise(g$1.UnexpectedSubtractionOperand, this.state.startLoc);
					}
					this.unexpected();
					return;
				case 134: return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
				case 135: return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
				case 88: return this.next(), this.finishNode(s, "VoidTypeAnnotation");
				case 84: return this.next(), this.finishNode(s, "NullLiteralTypeAnnotation");
				case 78: return this.next(), this.finishNode(s, "ThisTypeAnnotation");
				case 55: return this.next(), this.finishNode(s, "ExistsTypeAnnotation");
				case 87: return this.flowParseTypeofType();
				default: if (Pt$2(this.state.type)) {
					let h = K$2(this.state.type);
					return this.next(), super.createIdentifier(s, h);
				} else if (w$1(this.state.type)) return this.isContextual(129) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, s, this.parseIdentifier());
			}
			this.unexpected();
		}
		flowParsePostfixType() {
			let e = this.state.startLoc, s = this.flowParsePrimaryType(), i = !1;
			for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon();) {
				let r = this.startNodeAt(e), n = this.eat(18);
				i = i || n, this.expect(0), !n && this.match(3) ? (r.elementType = s, this.next(), s = this.finishNode(r, "ArrayTypeAnnotation")) : (r.objectType = s, r.indexType = this.flowParseType(), this.expect(3), i ? (r.optional = n, s = this.finishNode(r, "OptionalIndexedAccessType")) : s = this.finishNode(r, "IndexedAccessType"));
			}
			return s;
		}
		flowParsePrefixType() {
			let e = this.startNode();
			return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
		}
		flowParseAnonFunctionWithoutParens() {
			let e = this.flowParsePrefixType();
			if (!this.state.noAnonFunctionType && this.eat(19)) {
				let s = this.startNodeAt(e.loc.start);
				return s.params = [this.reinterpretTypeAsFunctionTypeParam(e)], s.rest = null, s.this = null, s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
			}
			return e;
		}
		flowParseIntersectionType() {
			let e = this.startNode();
			this.eat(45);
			let s = this.flowParseAnonFunctionWithoutParens();
			for (e.types = [s]; this.eat(45);) e.types.push(this.flowParseAnonFunctionWithoutParens());
			return e.types.length === 1 ? s : this.finishNode(e, "IntersectionTypeAnnotation");
		}
		flowParseUnionType() {
			let e = this.startNode();
			this.eat(43);
			let s = this.flowParseIntersectionType();
			for (e.types = [s]; this.eat(43);) e.types.push(this.flowParseIntersectionType());
			return e.types.length === 1 ? s : this.finishNode(e, "UnionTypeAnnotation");
		}
		flowParseType() {
			let e = this.state.inType;
			this.state.inType = !0;
			let s = this.flowParseUnionType();
			return this.state.inType = e, s;
		}
		flowParseTypeOrImplicitInstantiation() {
			if (this.state.type === 132 && this.state.value === "_") {
				let e = this.state.startLoc, s = this.parseIdentifier();
				return this.flowParseGenericType(e, s);
			} else return this.flowParseType();
		}
		flowParseTypeAnnotation() {
			let e = this.startNode();
			return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation");
		}
		flowParseTypeAnnotatableIdentifier(e) {
			let s = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
			return this.match(14) && (s.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(s)), s;
		}
		typeCastToParameter(e) {
			return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
		}
		flowParseVariance() {
			let e = null;
			return this.match(53) ? (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")) : e;
		}
		parseFunctionBody(e, s, i = !1) {
			if (s) {
				this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, !0, i));
				return;
			}
			super.parseFunctionBody(e, !1, i);
		}
		parseFunctionBodyAndFinish(e, s, i = !1) {
			if (this.match(14)) {
				let r = this.startNode();
				[r.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = r.typeAnnotation ? this.finishNode(r, "TypeAnnotation") : null;
			}
			return super.parseFunctionBodyAndFinish(e, s, i);
		}
		parseStatementLike(e) {
			if (this.state.strict && this.isContextual(129)) {
				if (M$2(this.lookahead().type)) {
					let r = this.startNode();
					return this.next(), this.flowParseInterface(r);
				}
			} else if (this.shouldParseEnums() && this.isContextual(126)) {
				let i = this.startNode();
				return this.next(), this.flowParseEnumDeclaration(i);
			}
			let s = super.parseStatementLike(e);
			return this.flowPragma === void 0 && !this.isValidDirective(s) && (this.flowPragma = null), s;
		}
		parseExpressionStatement(e, s, i) {
			if (s.type === "Identifier") {
				if (s.name === "declare") {
					if (this.match(80) || w$1(this.state.type) || this.match(68) || this.match(74) || this.match(82)) return this.flowParseDeclare(e);
				} else if (w$1(this.state.type)) {
					if (s.name === "interface") return this.flowParseInterface(e);
					if (s.name === "type") return this.flowParseTypeAlias(e);
					if (s.name === "opaque") return this.flowParseOpaqueType(e, !1);
				}
			}
			return super.parseExpressionStatement(e, s, i);
		}
		shouldParseExportDeclaration() {
			let { type: e } = this.state;
			return Ft$2(e) || this.shouldParseEnums() && e === 126 ? !this.state.containsEsc : super.shouldParseExportDeclaration();
		}
		isExportDefaultSpecifier() {
			let { type: e } = this.state;
			return Ft$2(e) || this.shouldParseEnums() && e === 126 ? this.state.containsEsc : super.isExportDefaultSpecifier();
		}
		parseExportDefaultExpression() {
			if (this.shouldParseEnums() && this.isContextual(126)) {
				let e = this.startNode();
				return this.next(), this.flowParseEnumDeclaration(e);
			}
			return super.parseExportDefaultExpression();
		}
		parseConditional(e, s, i) {
			if (!this.match(17)) return e;
			if (this.state.maybeInArrowParameters) {
				let f$1 = this.lookaheadCharCode();
				if (f$1 === 44 || f$1 === 61 || f$1 === 58 || f$1 === 41) return this.setOptionalParametersError(i), e;
			}
			this.expect(17);
			let r = this.state.clone(), n = this.state.noArrowAt, o = this.startNodeAt(s), { consequent: h, failed: c } = this.tryParseConditionalConsequent(), [l$1, u] = this.getArrowLikeExpressions(h);
			if (c || u.length > 0) {
				let f$1 = [...n];
				if (u.length > 0) {
					this.state = r, this.state.noArrowAt = f$1;
					for (let d$1 = 0; d$1 < u.length; d$1++) f$1.push(u[d$1].start);
					({consequent: h, failed: c} = this.tryParseConditionalConsequent()), [l$1, u] = this.getArrowLikeExpressions(h);
				}
				c && l$1.length > 1 && this.raise(g$1.AmbiguousConditionalArrow, r.startLoc), c && l$1.length === 1 && (this.state = r, f$1.push(l$1[0].start), this.state.noArrowAt = f$1, {consequent: h, failed: c} = this.tryParseConditionalConsequent());
			}
			return this.getArrowLikeExpressions(h, !0), this.state.noArrowAt = n, this.expect(14), o.test = e, o.consequent = h, o.alternate = this.forwardNoArrowParamsConversionAt(o, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(o, "ConditionalExpression");
		}
		tryParseConditionalConsequent() {
			this.state.noArrowParamsConversionAt.push(this.state.start);
			let e = this.parseMaybeAssignAllowIn(), s = !this.match(14);
			return this.state.noArrowParamsConversionAt.pop(), {
				consequent: e,
				failed: s
			};
		}
		getArrowLikeExpressions(e, s) {
			let i = [e], r = [];
			for (; i.length !== 0;) {
				let n = i.pop();
				n.type === "ArrowFunctionExpression" && n.body.type !== "BlockStatement" ? (n.typeParameters || !n.returnType ? this.finishArrowValidation(n) : r.push(n), i.push(n.body)) : n.type === "ConditionalExpression" && (i.push(n.consequent), i.push(n.alternate));
			}
			return s ? (r.forEach((n) => this.finishArrowValidation(n)), [r, []]) : $i$1(r, (n) => n.params.every((o) => this.isAssignable(o, !0)));
		}
		finishArrowValidation(e) {
			var s;
			this.toAssignableList(e.params, (s = e.extra) == null ? void 0 : s.trailingCommaLoc, !1), this.scope.enter(6), super.checkParams(e, !1, !0), this.scope.exit();
		}
		forwardNoArrowParamsConversionAt(e, s) {
			let i;
			return this.state.noArrowParamsConversionAt.includes(e.start) ? (this.state.noArrowParamsConversionAt.push(this.state.start), i = s(), this.state.noArrowParamsConversionAt.pop()) : i = s(), i;
		}
		parseParenItem(e, s) {
			let i = super.parseParenItem(e, s);
			if (this.eat(17) && (i.optional = !0, this.resetEndLocation(e)), this.match(14)) {
				let r = this.startNodeAt(s);
				return r.expression = i, r.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(r, "TypeCastExpression");
			}
			return i;
		}
		assertModuleNodeAllowed(e) {
			e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || super.assertModuleNodeAllowed(e);
		}
		parseExportDeclaration(e) {
			if (this.isContextual(130)) {
				e.exportKind = "type";
				let s = this.startNode();
				return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(!0), super.parseExportFrom(e), null) : this.flowParseTypeAlias(s);
			} else if (this.isContextual(131)) {
				e.exportKind = "type";
				let s = this.startNode();
				return this.next(), this.flowParseOpaqueType(s, !1);
			} else if (this.isContextual(129)) {
				e.exportKind = "type";
				let s = this.startNode();
				return this.next(), this.flowParseInterface(s);
			} else if (this.shouldParseEnums() && this.isContextual(126)) {
				e.exportKind = "value";
				let s = this.startNode();
				return this.next(), this.flowParseEnumDeclaration(s);
			} else return super.parseExportDeclaration(e);
		}
		eatExportStar(e) {
			return super.eatExportStar(e) ? !0 : this.isContextual(130) && this.lookahead().type === 55 ? (e.exportKind = "type", this.next(), this.next(), !0) : !1;
		}
		maybeParseExportNamespaceSpecifier(e) {
			let { startLoc: s } = this.state, i = super.maybeParseExportNamespaceSpecifier(e);
			return i && e.exportKind === "type" && this.unexpected(s), i;
		}
		parseClassId(e, s, i) {
			super.parseClassId(e, s, i), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
		}
		parseClassMember(e, s, i) {
			let { startLoc: r } = this.state;
			if (this.isContextual(125)) {
				if (super.parseClassMemberFromModifier(e, s)) return;
				s.declare = !0;
			}
			super.parseClassMember(e, s, i), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(g$1.DeclareClassElement, r) : s.value && this.raise(g$1.DeclareClassFieldInitializer, s.value));
		}
		isIterator(e) {
			return e === "iterator" || e === "asyncIterator";
		}
		readIterator() {
			let e = super.readWord1(), s = "@@" + e;
			(!this.isIterator(e) || !this.state.inType) && this.raise(p.InvalidIdentifier, this.state.curPosition(), { identifierName: s }), this.finishToken(132, s);
		}
		getTokenFromCode(e) {
			let s = this.input.charCodeAt(this.state.pos + 1);
			e === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : wi$1(e, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
		}
		isAssignable(e, s) {
			return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, s) : super.isAssignable(e, s);
		}
		toAssignable(e, s = !1) {
			!s && e.type === "AssignmentExpression" && e.left.type === "TypeCastExpression" && (e.left = this.typeCastToParameter(e.left)), super.toAssignable(e, s);
		}
		toAssignableList(e, s, i) {
			for (let r = 0; r < e.length; r++) {
				let n = e[r];
				(n == null ? void 0 : n.type) === "TypeCastExpression" && (e[r] = this.typeCastToParameter(n));
			}
			super.toAssignableList(e, s, i);
		}
		toReferencedList(e, s) {
			for (let r = 0; r < e.length; r++) {
				var i;
				let n = e[r];
				n && n.type === "TypeCastExpression" && !((i = n.extra) != null && i.parenthesized) && (e.length > 1 || !s) && this.raise(g$1.TypeCastInPattern, n.typeAnnotation);
			}
			return e;
		}
		parseArrayLike(e, s, i, r) {
			let n = super.parseArrayLike(e, s, i, r);
			return s && !this.state.maybeInArrowParameters && this.toReferencedList(n.elements), n;
		}
		isValidLVal(e, s, i) {
			return e === "TypeCastExpression" || super.isValidLVal(e, s, i);
		}
		parseClassProperty(e) {
			return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e);
		}
		parseClassPrivateProperty(e) {
			return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e);
		}
		isClassMethod() {
			return this.match(47) || super.isClassMethod();
		}
		isClassProperty() {
			return this.match(14) || super.isClassProperty();
		}
		isNonstaticConstructor(e) {
			return !this.match(14) && super.isNonstaticConstructor(e);
		}
		pushClassMethod(e, s, i, r, n, o) {
			if (s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, s, i, r, n, o), s.params && n) {
				let h = s.params;
				h.length > 0 && this.isThisParam(h[0]) && this.raise(g$1.ThisParamBannedInConstructor, s);
			} else if (s.type === "MethodDefinition" && n && s.value.params) {
				let h = s.value.params;
				h.length > 0 && this.isThisParam(h[0]) && this.raise(g$1.ThisParamBannedInConstructor, s);
			}
		}
		pushClassPrivateMethod(e, s, i, r) {
			s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, s, i, r);
		}
		parseClassSuper(e) {
			if (super.parseClassSuper(e), e.superClass && this.match(47) && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(113)) {
				this.next();
				let s = e.implements = [];
				do {
					let i = this.startNode();
					i.id = this.flowParseRestrictedIdentifier(!0), this.match(47) ? i.typeParameters = this.flowParseTypeParameterInstantiation() : i.typeParameters = null, s.push(this.finishNode(i, "ClassImplements"));
				} while (this.eat(12));
			}
		}
		checkGetterSetterParams(e) {
			super.checkGetterSetterParams(e);
			let s = this.getObjectOrClassMethodParams(e);
			if (s.length > 0) {
				let i = s[0];
				this.isThisParam(i) && e.kind === "get" ? this.raise(g$1.GetterMayNotHaveThisParam, i) : this.isThisParam(i) && this.raise(g$1.SetterMayNotHaveThisParam, i);
			}
		}
		parsePropertyNamePrefixOperator(e) {
			e.variance = this.flowParseVariance();
		}
		parseObjPropValue(e, s, i, r, n, o, h) {
			e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
			let c;
			this.match(47) && !o && (c = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
			let l$1 = super.parseObjPropValue(e, s, i, r, n, o, h);
			return c && ((l$1.value || l$1).typeParameters = c), l$1;
		}
		parseAssignableListItemTypes(e) {
			return this.eat(17) && (e.type !== "Identifier" && this.raise(g$1.PatternIsOptional, e), this.isThisParam(e) && this.raise(g$1.ThisParamMayNotBeOptional, e), e.optional = !0), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(g$1.ThisParamAnnotationRequired, e), this.match(29) && this.isThisParam(e) && this.raise(g$1.ThisParamNoDefault, e), this.resetEndLocation(e), e;
		}
		parseMaybeDefault(e, s) {
			let i = super.parseMaybeDefault(e, s);
			return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(g$1.TypeBeforeInitializer, i.typeAnnotation), i;
		}
		checkImportReflection(e) {
			super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(g$1.ImportReflectionHasImportType, e.specifiers[0].loc.start);
		}
		parseImportSpecifierLocal(e, s, i) {
			s.local = _t$2(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(s, i));
		}
		isPotentialImportPhase(e) {
			if (super.isPotentialImportPhase(e)) return !0;
			if (this.isContextual(130)) {
				if (!e) return !0;
				let s = this.lookaheadCharCode();
				return s === 123 || s === 42;
			}
			return !e && this.isContextual(87);
		}
		applyImportPhase(e, s, i, r) {
			if (super.applyImportPhase(e, s, i, r), s) {
				if (!i && this.match(65)) return;
				e.exportKind = i === "type" ? i : "value";
			} else i === "type" && this.match(55) && this.unexpected(), e.importKind = i === "type" || i === "typeof" ? i : "value";
		}
		parseImportSpecifier(e, s, i, r, n) {
			let o = e.imported, h = null;
			o.type === "Identifier" && (o.name === "type" ? h = "type" : o.name === "typeof" && (h = "typeof"));
			let c = !1;
			if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
				let u = this.parseIdentifier(!0);
				h !== null && !M$2(this.state.type) ? (e.imported = u, e.importKind = h, e.local = $$1(u)) : (e.imported = o, e.importKind = null, e.local = this.parseIdentifier());
			} else {
				if (h !== null && M$2(this.state.type)) e.imported = this.parseIdentifier(!0), e.importKind = h;
				else {
					if (s) throw this.raise(p.ImportBindingIsString, e, { importName: o.value });
					e.imported = o, e.importKind = null;
				}
				this.eatContextual(93) ? e.local = this.parseIdentifier() : (c = !0, e.local = $$1(e.imported));
			}
			let l$1 = _t$2(e);
			return i && l$1 && this.raise(g$1.ImportTypeShorthandOnlyInPureImport, e), (i || l$1) && this.checkReservedType(e.local.name, e.local.loc.start, !0), c && !i && !l$1 && this.checkReservedWord(e.local.name, e.loc.start, !0, !0), this.finishImportSpecifier(e, "ImportSpecifier");
		}
		parseBindingAtom() {
			switch (this.state.type) {
				case 78: return this.parseIdentifier(!0);
				default: return super.parseBindingAtom();
			}
		}
		parseFunctionParams(e, s) {
			let i = e.kind;
			i !== "get" && i !== "set" && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, s);
		}
		parseVarId(e, s) {
			super.parseVarId(e, s), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id));
		}
		parseAsyncArrowFromCallExpression(e, s) {
			if (this.match(14)) {
				let i = this.state.noAnonFunctionType;
				this.state.noAnonFunctionType = !0, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = i;
			}
			return super.parseAsyncArrowFromCallExpression(e, s);
		}
		shouldParseAsyncArrow() {
			return this.match(14) || super.shouldParseAsyncArrow();
		}
		parseMaybeAssign(e, s) {
			var i;
			let r = null, n;
			if (this.hasPlugin("jsx") && (this.match(142) || this.match(47))) {
				if (r = this.state.clone(), n = this.tryParse(() => super.parseMaybeAssign(e, s), r), !n.error) return n.node;
				let { context: c } = this.state, l$1 = c[c.length - 1];
				(l$1 === C.j_oTag || l$1 === C.j_expr) && c.pop();
			}
			if ((i = n) != null && i.error || this.match(47)) {
				var o, h;
				r = r || this.state.clone();
				let c, l$1 = this.tryParse((f$1) => {
					var d$1;
					c = this.flowParseTypeParameterDeclaration();
					let y$1 = this.forwardNoArrowParamsConversionAt(c, () => {
						let L$2 = super.parseMaybeAssign(e, s);
						return this.resetStartLocationFromNode(L$2, c), L$2;
					});
					(d$1 = y$1.extra) != null && d$1.parenthesized && f$1();
					let E$1 = this.maybeUnwrapTypeCastExpression(y$1);
					return E$1.type !== "ArrowFunctionExpression" && f$1(), E$1.typeParameters = c, this.resetStartLocationFromNode(E$1, c), y$1;
				}, r), u = null;
				if (l$1.node && this.maybeUnwrapTypeCastExpression(l$1.node).type === "ArrowFunctionExpression") {
					if (!l$1.error && !l$1.aborted) return l$1.node.async && this.raise(g$1.UnexpectedTypeParameterBeforeAsyncArrowFunction, c), l$1.node;
					u = l$1.node;
				}
				if ((o = n) != null && o.node) return this.state = n.failState, n.node;
				if (u) return this.state = l$1.failState, u;
				throw (h = n) != null && h.thrown ? n.error : l$1.thrown ? l$1.error : this.raise(g$1.UnexpectedTokenAfterTypeParameter, c);
			}
			return super.parseMaybeAssign(e, s);
		}
		parseArrow(e) {
			if (this.match(14)) {
				let s = this.tryParse(() => {
					let i = this.state.noAnonFunctionType;
					this.state.noAnonFunctionType = !0;
					let r = this.startNode();
					return [r.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = i, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), r;
				});
				if (s.thrown) return null;
				s.error && (this.state = s.failState), e.returnType = s.node.typeAnnotation ? this.finishNode(s.node, "TypeAnnotation") : null;
			}
			return super.parseArrow(e);
		}
		shouldParseArrow(e) {
			return this.match(14) || super.shouldParseArrow(e);
		}
		setArrowFunctionParameters(e, s) {
			this.state.noArrowParamsConversionAt.includes(e.start) ? e.params = s : super.setArrowFunctionParameters(e, s);
		}
		checkParams(e, s, i, r = !0) {
			if (!(i && this.state.noArrowParamsConversionAt.includes(e.start))) {
				for (let n = 0; n < e.params.length; n++) this.isThisParam(e.params[n]) && n > 0 && this.raise(g$1.ThisParamMustBeFirst, e.params[n]);
				super.checkParams(e, s, i, r);
			}
		}
		parseParenAndDistinguishExpression(e) {
			return super.parseParenAndDistinguishExpression(e && !this.state.noArrowAt.includes(this.state.start));
		}
		parseSubscripts(e, s, i) {
			if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.includes(s.index)) {
				this.next();
				let r = this.startNodeAt(s);
				r.callee = e, r.arguments = super.parseCallExpressionArguments(11, !1), e = this.finishNode(r, "CallExpression");
			} else if (e.type === "Identifier" && e.name === "async" && this.match(47)) {
				let r = this.state.clone(), n = this.tryParse((h) => this.parseAsyncArrowWithTypeParameters(s) || h(), r);
				if (!n.error && !n.aborted) return n.node;
				let o = this.tryParse(() => super.parseSubscripts(e, s, i), r);
				if (o.node && !o.error) return o.node;
				if (n.node) return this.state = n.failState, n.node;
				if (o.node) return this.state = o.failState, o.node;
				throw n.error || o.error;
			}
			return super.parseSubscripts(e, s, i);
		}
		parseSubscript(e, s, i, r) {
			if (this.match(18) && this.isLookaheadToken_lt()) {
				if (r.optionalChainMember = !0, i) return r.stop = !0, e;
				this.next();
				let n = this.startNodeAt(s);
				return n.callee = e, n.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), n.arguments = this.parseCallExpressionArguments(11, !1), n.optional = !0, this.finishCallExpression(n, !0);
			} else if (!i && this.shouldParseTypes() && this.match(47)) {
				let n = this.startNodeAt(s);
				n.callee = e;
				let o = this.tryParse(() => (n.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), n.arguments = super.parseCallExpressionArguments(11, !1), r.optionalChainMember && (n.optional = !1), this.finishCallExpression(n, r.optionalChainMember)));
				if (o.node) return o.error && (this.state = o.failState), o.node;
			}
			return super.parseSubscript(e, s, i, r);
		}
		parseNewCallee(e) {
			super.parseNewCallee(e);
			let s = null;
			this.shouldParseTypes() && this.match(47) && (s = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), e.typeArguments = s;
		}
		parseAsyncArrowWithTypeParameters(e) {
			let s = this.startNodeAt(e);
			if (this.parseFunctionParams(s, !1), !!this.parseArrow(s)) return super.parseArrowExpression(s, void 0, !0);
		}
		readToken_mult_modulo(e) {
			let s = this.input.charCodeAt(this.state.pos + 1);
			if (e === 42 && s === 47 && this.state.hasFlowComment) {
				this.state.hasFlowComment = !1, this.state.pos += 2, this.nextToken();
				return;
			}
			super.readToken_mult_modulo(e);
		}
		readToken_pipe_amp(e) {
			let s = this.input.charCodeAt(this.state.pos + 1);
			if (e === 124 && s === 125) {
				this.finishOp(9, 2);
				return;
			}
			super.readToken_pipe_amp(e);
		}
		parseTopLevel(e, s) {
			let i = super.parseTopLevel(e, s);
			return this.state.hasFlowComment && this.raise(g$1.UnterminatedFlowComment, this.state.curPosition()), i;
		}
		skipBlockComment() {
			if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
				if (this.state.hasFlowComment) throw this.raise(g$1.NestedFlowComment, this.state.startLoc);
				this.hasFlowCommentCompletion();
				let e = this.skipFlowComment();
				e && (this.state.pos += e, this.state.hasFlowComment = !0);
				return;
			}
			return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
		}
		skipFlowComment() {
			let { pos: e } = this.state, s = 2;
			for (; [32, 9].includes(this.input.charCodeAt(e + s));) s++;
			let i = this.input.charCodeAt(s + e), r = this.input.charCodeAt(s + e + 1);
			return i === 58 && r === 58 ? s + 2 : this.input.slice(s + e, s + e + 12) === "flow-include" ? s + 12 : i === 58 && r !== 58 ? s : !1;
		}
		hasFlowCommentCompletion() {
			if (this.input.indexOf("*/", this.state.pos) === -1) throw this.raise(p.UnterminatedComment, this.state.curPosition());
		}
		flowEnumErrorBooleanMemberNotInitialized(e, { enumName: s, memberName: i }) {
			this.raise(g$1.EnumBooleanMemberNotInitialized, e, {
				memberName: i,
				enumName: s
			});
		}
		flowEnumErrorInvalidMemberInitializer(e, s) {
			return this.raise(s.explicitType ? s.explicitType === "symbol" ? g$1.EnumInvalidMemberInitializerSymbolType : g$1.EnumInvalidMemberInitializerPrimaryType : g$1.EnumInvalidMemberInitializerUnknownType, e, s);
		}
		flowEnumErrorNumberMemberNotInitialized(e, s) {
			this.raise(g$1.EnumNumberMemberNotInitialized, e, s);
		}
		flowEnumErrorStringMemberInconsistentlyInitialized(e, s) {
			this.raise(g$1.EnumStringMemberInconsistentlyInitialized, e, s);
		}
		flowEnumMemberInit() {
			let e = this.state.startLoc, s = () => this.match(12) || this.match(8);
			switch (this.state.type) {
				case 134: {
					let i = this.parseNumericLiteral(this.state.value);
					return s() ? {
						type: "number",
						loc: i.loc.start,
						value: i
					} : {
						type: "invalid",
						loc: e
					};
				}
				case 133: {
					let i = this.parseStringLiteral(this.state.value);
					return s() ? {
						type: "string",
						loc: i.loc.start,
						value: i
					} : {
						type: "invalid",
						loc: e
					};
				}
				case 85:
				case 86: {
					let i = this.parseBooleanLiteral(this.match(85));
					return s() ? {
						type: "boolean",
						loc: i.loc.start,
						value: i
					} : {
						type: "invalid",
						loc: e
					};
				}
				default: return {
					type: "invalid",
					loc: e
				};
			}
		}
		flowEnumMemberRaw() {
			let e = this.state.startLoc;
			return {
				id: this.parseIdentifier(!0),
				init: this.eat(29) ? this.flowEnumMemberInit() : {
					type: "none",
					loc: e
				}
			};
		}
		flowEnumCheckExplicitTypeMismatch(e, s, i) {
			let { explicitType: r } = s;
			r !== null && r !== i && this.flowEnumErrorInvalidMemberInitializer(e, s);
		}
		flowEnumMembers({ enumName: e, explicitType: s }) {
			let i = /* @__PURE__ */ new Set(), r = {
				booleanMembers: [],
				numberMembers: [],
				stringMembers: [],
				defaultedMembers: []
			}, n = !1;
			for (; !this.match(8);) {
				if (this.eat(21)) {
					n = !0;
					break;
				}
				let o = this.startNode(), { id: h, init: c } = this.flowEnumMemberRaw(), l$1 = h.name;
				if (l$1 === "") continue;
				/^[a-z]/.test(l$1) && this.raise(g$1.EnumInvalidMemberName, h, {
					memberName: l$1,
					suggestion: l$1[0].toUpperCase() + l$1.slice(1),
					enumName: e
				}), i.has(l$1) && this.raise(g$1.EnumDuplicateMemberName, h, {
					memberName: l$1,
					enumName: e
				}), i.add(l$1);
				let u = {
					enumName: e,
					explicitType: s,
					memberName: l$1
				};
				switch (o.id = h, c.type) {
					case "boolean":
						this.flowEnumCheckExplicitTypeMismatch(c.loc, u, "boolean"), o.init = c.value, r.booleanMembers.push(this.finishNode(o, "EnumBooleanMember"));
						break;
					case "number":
						this.flowEnumCheckExplicitTypeMismatch(c.loc, u, "number"), o.init = c.value, r.numberMembers.push(this.finishNode(o, "EnumNumberMember"));
						break;
					case "string":
						this.flowEnumCheckExplicitTypeMismatch(c.loc, u, "string"), o.init = c.value, r.stringMembers.push(this.finishNode(o, "EnumStringMember"));
						break;
					case "invalid": throw this.flowEnumErrorInvalidMemberInitializer(c.loc, u);
					case "none": switch (s) {
						case "boolean":
							this.flowEnumErrorBooleanMemberNotInitialized(c.loc, u);
							break;
						case "number":
							this.flowEnumErrorNumberMemberNotInitialized(c.loc, u);
							break;
						default: r.defaultedMembers.push(this.finishNode(o, "EnumDefaultedMember"));
					}
				}
				this.match(8) || this.expect(12);
			}
			return {
				members: r,
				hasUnknownMembers: n
			};
		}
		flowEnumStringMembers(e, s, { enumName: i }) {
			if (e.length === 0) return s;
			if (s.length === 0) return e;
			if (s.length > e.length) {
				for (let r of e) this.flowEnumErrorStringMemberInconsistentlyInitialized(r, { enumName: i });
				return s;
			} else {
				for (let r of s) this.flowEnumErrorStringMemberInconsistentlyInitialized(r, { enumName: i });
				return e;
			}
		}
		flowEnumParseExplicitType({ enumName: e }) {
			if (!this.eatContextual(102)) return null;
			if (!w$1(this.state.type)) throw this.raise(g$1.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, { enumName: e });
			let { value: s } = this.state;
			return this.next(), s !== "boolean" && s !== "number" && s !== "string" && s !== "symbol" && this.raise(g$1.EnumInvalidExplicitType, this.state.startLoc, {
				enumName: e,
				invalidEnumType: s
			}), s;
		}
		flowEnumBody(e, s) {
			let i = s.name, r = s.loc.start, n = this.flowEnumParseExplicitType({ enumName: i });
			this.expect(5);
			let { members: o, hasUnknownMembers: h } = this.flowEnumMembers({
				enumName: i,
				explicitType: n
			});
			switch (e.hasUnknownMembers = h, n) {
				case "boolean": return e.explicitType = !0, e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
				case "number": return e.explicitType = !0, e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
				case "string": return e.explicitType = !0, e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
				case "symbol": return e.members = o.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
				default: {
					let c = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
					e.explicitType = !1;
					let l$1 = o.booleanMembers.length, u = o.numberMembers.length, f$1 = o.stringMembers.length, d$1 = o.defaultedMembers.length;
					if (!l$1 && !u && !f$1 && !d$1) return c();
					if (!l$1 && !u) return e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
					if (!u && !f$1 && l$1 >= d$1) {
						for (let y$1 of o.defaultedMembers) this.flowEnumErrorBooleanMemberNotInitialized(y$1.loc.start, {
							enumName: i,
							memberName: y$1.id.name
						});
						return e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
					} else if (!l$1 && !f$1 && u >= d$1) {
						for (let y$1 of o.defaultedMembers) this.flowEnumErrorNumberMemberNotInitialized(y$1.loc.start, {
							enumName: i,
							memberName: y$1.id.name
						});
						return e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
					} else return this.raise(g$1.EnumInconsistentMemberValues, r, { enumName: i }), c();
				}
			}
		}
		flowParseEnumDeclaration(e) {
			let s = this.parseIdentifier();
			return e.id = s, e.body = this.flowEnumBody(this.startNode(), s), this.finishNode(e, "EnumDeclaration");
		}
		isLookaheadToken_lt() {
			let e = this.nextTokenStart();
			if (this.input.charCodeAt(e) === 60) {
				let s = this.input.charCodeAt(e + 1);
				return s !== 60 && s !== 61;
			}
			return !1;
		}
		maybeUnwrapTypeCastExpression(e) {
			return e.type === "TypeCastExpression" ? e.expression : e;
		}
	}, W$1 = j$1`jsx`({
		AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
		MissingClosingTagElement: ({ openingTagName: a }) => `Expected corresponding JSX closing tag for <${a}>.`,
		MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
		UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
		UnexpectedToken: ({ unexpected: a, HTMLEntity: t }) => `Unexpected token \`${a}\`. Did you mean \`${t}\` or \`{'${a}'}\`?`,
		UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
		UnterminatedJsxContent: "Unterminated JSX contents.",
		UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
	});
	function z$2(a) {
		return a ? a.type === "JSXOpeningFragment" || a.type === "JSXClosingFragment" : !1;
	}
	function Y$2(a) {
		if (a.type === "JSXIdentifier") return a.name;
		if (a.type === "JSXNamespacedName") return a.namespace.name + ":" + a.name.name;
		if (a.type === "JSXMemberExpression") return Y$2(a.object) + "." + Y$2(a.property);
		throw new Error("Node had unexpected type: " + a.type);
	}
	var zi$1 = (a) => class extends a {
		jsxReadToken() {
			let e = "", s = this.state.pos;
			for (;;) {
				if (this.state.pos >= this.length) throw this.raise(W$1.UnterminatedJsxContent, this.state.startLoc);
				let i = this.input.charCodeAt(this.state.pos);
				switch (i) {
					case 60:
					case 123:
						if (this.state.pos === this.state.start) {
							i === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(142)) : super.getTokenFromCode(i);
							return;
						}
						e += this.input.slice(s, this.state.pos), this.finishToken(141, e);
						return;
					case 38:
						e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos;
						break;
					case 62:
					case 125:
					default: fe$2(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(!0), s = this.state.pos) : ++this.state.pos;
				}
			}
		}
		jsxReadNewLine(e) {
			let s = this.input.charCodeAt(this.state.pos), i;
			return ++this.state.pos, s === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, i = e ? `
` : `\r
`) : i = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, i;
		}
		jsxReadString(e) {
			let s = "", i = ++this.state.pos;
			for (;;) {
				if (this.state.pos >= this.length) throw this.raise(p.UnterminatedString, this.state.startLoc);
				let r = this.input.charCodeAt(this.state.pos);
				if (r === e) break;
				r === 38 ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadEntity(), i = this.state.pos) : fe$2(r) ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadNewLine(!1), i = this.state.pos) : ++this.state.pos;
			}
			s += this.input.slice(i, this.state.pos++), this.finishToken(133, s);
		}
		jsxReadEntity() {
			let e = ++this.state.pos;
			if (this.codePointAtPos(this.state.pos) === 35) {
				++this.state.pos;
				let s = 10;
				this.codePointAtPos(this.state.pos) === 120 && (s = 16, ++this.state.pos);
				let i = this.readInt(s, void 0, !1, "bail");
				if (i !== null && this.codePointAtPos(this.state.pos) === 59) return ++this.state.pos, String.fromCodePoint(i);
			} else {
				let s = 0, i = !1;
				for (; s++ < 10 && this.state.pos < this.length && !(i = this.codePointAtPos(this.state.pos) === 59);) ++this.state.pos;
				if (i) {
					this.input.slice(e, this.state.pos);
					if (++this.state.pos, void 0);
				}
			}
			return this.state.pos = e, "&";
		}
		jsxReadWord() {
			let e, s = this.state.pos;
			do
				e = this.input.charCodeAt(++this.state.pos);
			while (Q$2(e) || e === 45);
			this.finishToken(140, this.input.slice(s, this.state.pos));
		}
		jsxParseIdentifier() {
			let e = this.startNode();
			return this.match(140) ? e.name = this.state.value : Pt$2(this.state.type) ? e.name = K$2(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
		}
		jsxParseNamespacedName() {
			let e = this.state.startLoc, s = this.jsxParseIdentifier();
			if (!this.eat(14)) return s;
			let i = this.startNodeAt(e);
			return i.namespace = s, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
		}
		jsxParseElementName() {
			let e = this.state.startLoc, s = this.jsxParseNamespacedName();
			if (s.type === "JSXNamespacedName") return s;
			for (; this.eat(16);) {
				let i = this.startNodeAt(e);
				i.object = s, i.property = this.jsxParseIdentifier(), s = this.finishNode(i, "JSXMemberExpression");
			}
			return s;
		}
		jsxParseAttributeValue() {
			let e;
			switch (this.state.type) {
				case 5: return e = this.startNode(), this.setContext(C.brace), this.next(), e = this.jsxParseExpressionContainer(e, C.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(W$1.AttributeIsEmpty, e), e;
				case 142:
				case 133: return this.parseExprAtom();
				default: throw this.raise(W$1.UnsupportedJsxValue, this.state.startLoc);
			}
		}
		jsxParseEmptyExpression() {
			let e = this.startNodeAt(this.state.lastTokEndLoc);
			return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
		}
		jsxParseSpreadChild(e) {
			return this.next(), e.expression = this.parseExpression(), this.setContext(C.j_expr), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadChild");
		}
		jsxParseExpressionContainer(e, s) {
			if (this.match(8)) e.expression = this.jsxParseEmptyExpression();
			else e.expression = this.parseExpression();
			return this.setContext(s), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXExpressionContainer");
		}
		jsxParseAttribute() {
			let e = this.startNode();
			return this.match(5) ? (this.setContext(C.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(C.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
		}
		jsxParseOpeningElementAt(e) {
			let s = this.startNodeAt(e);
			return this.eat(143) ? this.finishNode(s, "JSXOpeningFragment") : (s.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(s));
		}
		jsxParseOpeningElementAfterName(e) {
			let s = [];
			for (; !this.match(56) && !this.match(143);) s.push(this.jsxParseAttribute());
			return e.attributes = s, e.selfClosing = this.eat(56), this.expect(143), this.finishNode(e, "JSXOpeningElement");
		}
		jsxParseClosingElementAt(e) {
			let s = this.startNodeAt(e);
			return this.eat(143) ? this.finishNode(s, "JSXClosingFragment") : (s.name = this.jsxParseElementName(), this.expect(143), this.finishNode(s, "JSXClosingElement"));
		}
		jsxParseElementAt(e) {
			let s = this.startNodeAt(e), i = [], r = this.jsxParseOpeningElementAt(e), n = null;
			if (!r.selfClosing) {
				e: for (;;) switch (this.state.type) {
					case 142:
						if (e = this.state.startLoc, this.next(), this.eat(56)) {
							n = this.jsxParseClosingElementAt(e);
							break e;
						}
						i.push(this.jsxParseElementAt(e));
						break;
					case 141:
						i.push(this.parseLiteral(this.state.value, "JSXText"));
						break;
					case 5: {
						let o = this.startNode();
						this.setContext(C.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o, C.j_expr));
						break;
					}
					default: this.unexpected();
				}
				z$2(r) && !z$2(n) && n !== null ? this.raise(W$1.MissingClosingTagFragment, n) : !z$2(r) && z$2(n) ? this.raise(W$1.MissingClosingTagElement, n, { openingTagName: Y$2(r.name) }) : !z$2(r) && !z$2(n) && Y$2(n.name) !== Y$2(r.name) && this.raise(W$1.MissingClosingTagElement, n, { openingTagName: Y$2(r.name) });
			}
			if (z$2(r) ? (s.openingFragment = r, s.closingFragment = n) : (s.openingElement = r, s.closingElement = n), s.children = i, this.match(47)) throw this.raise(W$1.UnwrappedAdjacentJSXElements, this.state.startLoc);
			return z$2(r) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement");
		}
		jsxParseElement() {
			let e = this.state.startLoc;
			return this.next(), this.jsxParseElementAt(e);
		}
		setContext(e) {
			let { context: s } = this.state;
			s[s.length - 1] = e;
		}
		parseExprAtom(e) {
			return this.match(142) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(142), this.jsxParseElement()) : super.parseExprAtom(e);
		}
		skipSpace() {
			this.curContext().preserveSpace || super.skipSpace();
		}
		getTokenFromCode(e) {
			let s = this.curContext();
			if (s === C.j_expr) {
				this.jsxReadToken();
				return;
			}
			if (s === C.j_oTag || s === C.j_cTag) {
				if (_$1(e)) {
					this.jsxReadWord();
					return;
				}
				if (e === 62) {
					++this.state.pos, this.finishToken(143);
					return;
				}
				if ((e === 34 || e === 39) && s === C.j_oTag) {
					this.jsxReadString(e);
					return;
				}
			}
			if (e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
				++this.state.pos, this.finishToken(142);
				return;
			}
			super.getTokenFromCode(e);
		}
		updateContext(e) {
			let { context: s, type: i } = this.state;
			if (i === 56 && e === 142) s.splice(-2, 2, C.j_cTag), this.state.canStartJSXElement = !1;
			else if (i === 142) s.push(C.j_oTag);
			else if (i === 143) {
				let r = s[s.length - 1];
				r === C.j_oTag && e === 56 || r === C.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === C.j_expr) : (this.setContext(C.j_expr), this.state.canStartJSXElement = !0);
			} else this.state.canStartJSXElement = hi$1(i);
		}
	}, ot$2 = class extends de$2 {
		constructor(...t) {
			super(...t), this.tsNames = /* @__PURE__ */ new Map();
		}
	}, ht$2 = class extends me$2 {
		constructor(...t) {
			super(...t), this.importsStack = [];
		}
		createScope(t) {
			return this.importsStack.push(/* @__PURE__ */ new Set()), new ot$2(t);
		}
		enter(t) {
			t === 256 && this.importsStack.push(/* @__PURE__ */ new Set()), super.enter(t);
		}
		exit() {
			let t = super.exit();
			return t === 256 && this.importsStack.pop(), t;
		}
		hasImport(t, e) {
			let s = this.importsStack.length;
			if (this.importsStack[s - 1].has(t)) return !0;
			if (!e && s > 1) {
				for (let i = 0; i < s - 1; i++) if (this.importsStack[i].has(t)) return !0;
			}
			return !1;
		}
		declareName(t, e, s) {
			if (e & 4096) {
				this.hasImport(t, !0) && this.parser.raise(p.VarRedeclaration, s, { identifierName: t }), this.importsStack[this.importsStack.length - 1].add(t);
				return;
			}
			let i = this.currentScope(), r = i.tsNames.get(t) || 0;
			if (e & 1024) {
				this.maybeExportDefined(i, t), i.tsNames.set(t, r | 16);
				return;
			}
			super.declareName(t, e, s), e & 2 && (e & 1 || (this.checkRedeclarationInScope(i, t, e, s), this.maybeExportDefined(i, t)), r = r | 1), e & 256 && (r = r | 2), e & 512 && (r = r | 4), e & 128 && (r = r | 8), r && i.tsNames.set(t, r);
		}
		isRedeclaredInScope(t, e, s) {
			let i = t.tsNames.get(e);
			if ((i & 2) > 0) {
				if (s & 256) return !!(s & 512) !== (i & 4) > 0;
				return !0;
			}
			return s & 128 && (i & 8) > 0 ? t.names.get(e) & 2 ? !!(s & 1) : !1 : s & 2 && (i & 1) > 0 ? !0 : super.isRedeclaredInScope(t, e, s);
		}
		checkLocalExport(t) {
			let { name: e } = t;
			if (this.hasImport(e)) return;
			let s = this.scopeStack.length;
			for (let i = s - 1; i >= 0; i--) {
				let n = this.scopeStack[i].tsNames.get(e);
				if ((n & 1) > 0 || (n & 16) > 0) return;
			}
			super.checkLocalExport(t);
		}
	}, Ki$1 = (a, t) => hasOwnProperty.call(a, t) && a[t], as$1 = (a) => a.type === "ParenthesizedExpression" ? as$1(a.expression) : a, lt$2 = class extends nt$2 {
		toAssignable(t, e = !1) {
			var s, i;
			let r;
			switch ((t.type === "ParenthesizedExpression" || (s = t.extra) != null && s.parenthesized) && (r = as$1(t), e ? r.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(p.InvalidParenthesizedAssignment, t) : r.type !== "MemberExpression" && !this.isOptionalMemberExpression(r) && this.raise(p.InvalidParenthesizedAssignment, t) : this.raise(p.InvalidParenthesizedAssignment, t)), t.type) {
				case "Identifier":
				case "ObjectPattern":
				case "ArrayPattern":
				case "AssignmentPattern":
				case "RestElement": break;
				case "ObjectExpression":
					t.type = "ObjectPattern";
					for (let o = 0, h = t.properties.length, c = h - 1; o < h; o++) {
						var n;
						let l$1 = t.properties[o], u = o === c;
						this.toAssignableObjectExpressionProp(l$1, u, e), u && l$1.type === "RestElement" && (n = t.extra) != null && n.trailingCommaLoc && this.raise(p.RestTrailingComma, t.extra.trailingCommaLoc);
					}
					break;
				case "ObjectProperty": {
					let { key: o, value: h } = t;
					this.isPrivateName(o) && this.classScope.usePrivateName(this.getPrivateNameSV(o), o.loc.start), this.toAssignable(h, e);
					break;
				}
				case "SpreadElement": throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
				case "ArrayExpression":
					t.type = "ArrayPattern", this.toAssignableList(t.elements, (i = t.extra) == null ? void 0 : i.trailingCommaLoc, e);
					break;
				case "AssignmentExpression":
					t.operator !== "=" && this.raise(p.MissingEqInAssignment, t.left.loc.end), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
					break;
				case "ParenthesizedExpression":
					this.toAssignable(r, e);
					break;
			}
		}
		toAssignableObjectExpressionProp(t, e, s) {
			if (t.type === "ObjectMethod") this.raise(t.kind === "get" || t.kind === "set" ? p.PatternHasAccessor : p.PatternHasMethod, t.key);
			else if (t.type === "SpreadElement") {
				t.type = "RestElement";
				let i = t.argument;
				this.checkToRestConversion(i, !1), this.toAssignable(i, s), e || this.raise(p.RestTrailingComma, t);
			} else this.toAssignable(t, s);
		}
		toAssignableList(t, e, s) {
			let i = t.length - 1;
			for (let r = 0; r <= i; r++) {
				let n = t[r];
				if (n) {
					if (n.type === "SpreadElement") {
						n.type = "RestElement";
						let o = n.argument;
						this.checkToRestConversion(o, !0), this.toAssignable(o, s);
					} else this.toAssignable(n, s);
					n.type === "RestElement" && (r < i ? this.raise(p.RestTrailingComma, n) : e && this.raise(p.RestTrailingComma, e));
				}
			}
		}
		isAssignable(t, e) {
			switch (t.type) {
				case "Identifier":
				case "ObjectPattern":
				case "ArrayPattern":
				case "AssignmentPattern":
				case "RestElement": return !0;
				case "ObjectExpression": {
					let s = t.properties.length - 1;
					return t.properties.every((i, r) => i.type !== "ObjectMethod" && (r === s || i.type !== "SpreadElement") && this.isAssignable(i));
				}
				case "ObjectProperty": return this.isAssignable(t.value);
				case "SpreadElement": return this.isAssignable(t.argument);
				case "ArrayExpression": return t.elements.every((s) => s === null || this.isAssignable(s));
				case "AssignmentExpression": return t.operator === "=";
				case "ParenthesizedExpression": return this.isAssignable(t.expression);
				case "MemberExpression":
				case "OptionalMemberExpression": return !e;
				default: return !1;
			}
		}
		toReferencedList(t, e) {
			return t;
		}
		toReferencedListDeep(t, e) {
			this.toReferencedList(t, e);
			for (let s of t) (s == null ? void 0 : s.type) === "ArrayExpression" && this.toReferencedListDeep(s.elements);
		}
		parseSpread(t) {
			let e = this.startNode();
			return this.next(), e.argument = this.parseMaybeAssignAllowIn(t, void 0), this.finishNode(e, "SpreadElement");
		}
		parseRestBinding() {
			let t = this.startNode();
			return this.next(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
		}
		parseBindingAtom() {
			switch (this.state.type) {
				case 0: {
					let t = this.startNode();
					return this.next(), t.elements = this.parseBindingList(3, 93, 1), this.finishNode(t, "ArrayPattern");
				}
				case 5: return this.parseObjectLike(8, !0);
			}
			return this.parseIdentifier();
		}
		parseBindingList(t, e, s) {
			let i = s & 1, r = [], n = !0;
			for (; !this.eat(t);) if (n ? n = !1 : this.expect(12), i && this.match(12)) r.push(null);
			else {
				if (this.eat(t)) break;
				if (this.match(21)) {
					if (r.push(this.parseAssignableListItemTypes(this.parseRestBinding(), s)), !this.checkCommaAfterRest(e)) {
						this.expect(t);
						break;
					}
				} else {
					let o = [];
					for (this.match(26) && this.hasPlugin("decorators") && this.raise(p.UnsupportedParameterDecorator, this.state.startLoc); this.match(26);) o.push(this.parseDecorator());
					r.push(this.parseAssignableListItem(s, o));
				}
			}
			return r;
		}
		parseBindingRestProperty(t) {
			return this.next(), t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
		}
		parseBindingProperty() {
			let { type: t, startLoc: e } = this.state;
			if (t === 21) return this.parseBindingRestProperty(this.startNode());
			let s = this.startNode();
			return t === 138 ? (this.expectPlugin("destructuringPrivate", e), this.classScope.usePrivateName(this.state.value, e), s.key = this.parsePrivateName()) : this.parsePropertyName(s), s.method = !1, this.parseObjPropValue(s, e, !1, !1, !0, !1);
		}
		parseAssignableListItem(t, e) {
			let s = this.parseMaybeDefault();
			this.parseAssignableListItemTypes(s, t);
			let i = this.parseMaybeDefault(s.loc.start, s);
			return e.length && (s.decorators = e), i;
		}
		parseAssignableListItemTypes(t, e) {
			return t;
		}
		parseMaybeDefault(t, e) {
			var i;
			if (t ??= this.state.startLoc, e = (i = e) != null ? i : this.parseBindingAtom(), !this.eat(29)) return e;
			let r = this.startNodeAt(t);
			return r.left = e, r.right = this.parseMaybeAssignAllowIn(), this.finishNode(r, "AssignmentPattern");
		}
		isValidLVal(t, e, s) {
			return Ki$1({
				AssignmentPattern: "left",
				RestElement: "argument",
				ObjectProperty: "value",
				ParenthesizedExpression: "expression",
				ArrayPattern: "elements",
				ObjectPattern: "properties"
			}, t);
		}
		isOptionalMemberExpression(t) {
			return t.type === "OptionalMemberExpression";
		}
		checkLVal(t, { in: e, binding: s = 64, checkClashes: i = !1, strictModeChanged: r = !1, hasParenthesizedAncestor: n = !1 }) {
			var o;
			let h = t.type;
			if (this.isObjectMethod(t)) return;
			let c = this.isOptionalMemberExpression(t);
			if (c || h === "MemberExpression") {
				c && (this.expectPlugin("optionalChainingAssign", t.loc.start), e.type !== "AssignmentExpression" && this.raise(p.InvalidLhsOptionalChaining, t, { ancestor: e })), s !== 64 && this.raise(p.InvalidPropertyBindingPattern, t);
				return;
			}
			if (h === "Identifier") {
				this.checkIdentifier(t, s, r);
				let { name: y$1 } = t;
				i && (i.has(y$1) ? this.raise(p.ParamDupe, t) : i.add(y$1));
				return;
			}
			let l$1 = this.isValidLVal(h, !(n || (o = t.extra) != null && o.parenthesized) && e.type === "AssignmentExpression", s);
			if (l$1 === !0) return;
			if (l$1 === !1) {
				let y$1 = s === 64 ? p.InvalidLhs : p.InvalidLhsBinding;
				this.raise(y$1, t, { ancestor: e });
				return;
			}
			let [u, f$1] = Array.isArray(l$1) ? l$1 : [l$1, h === "ParenthesizedExpression"], d$1 = h === "ArrayPattern" || h === "ObjectPattern" ? { type: h } : e;
			for (let y$1 of [].concat(t[u])) y$1 && this.checkLVal(y$1, {
				in: d$1,
				binding: s,
				checkClashes: i,
				strictModeChanged: r,
				hasParenthesizedAncestor: f$1
			});
		}
		checkIdentifier(t, e, s = !1) {
			this.state.strict && (s ? Zt$1(t.name, this.inModule) : Qt$2(t.name)) && (e === 64 ? this.raise(p.StrictEvalArguments, t, { referenceName: t.name }) : this.raise(p.StrictEvalArgumentsBinding, t, { bindingName: t.name })), e & 8192 && t.name === "let" && this.raise(p.LetInLexicalBinding, t), e & 64 || this.declareNameFromIdentifier(t, e);
		}
		declareNameFromIdentifier(t, e) {
			this.scope.declareName(t.name, e, t.loc.start);
		}
		checkToRestConversion(t, e) {
			switch (t.type) {
				case "ParenthesizedExpression":
					this.checkToRestConversion(t.expression, e);
					break;
				case "Identifier":
				case "MemberExpression": break;
				case "ArrayExpression":
				case "ObjectExpression": if (e) break;
				default: this.raise(p.InvalidRestAssignmentPattern, t);
			}
		}
		checkCommaAfterRest(t) {
			return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? p.RestTrailingComma : p.ElementAfterRest, this.state.startLoc), !0) : !1;
		}
	}, Hi$1 = (a, t) => hasOwnProperty.call(a, t) && a[t];
	function Wi$1(a) {
		if (a == null) throw new Error(`Unexpected ${a} value.`);
		return a;
	}
	function jt$2(a) {
		if (!a) throw new Error("Assert fail");
	}
	var x$2 = j$1`typescript`({
		AbstractMethodHasImplementation: ({ methodName: a }) => `Method '${a}' cannot have an implementation because it is marked abstract.`,
		AbstractPropertyHasInitializer: ({ propertyName: a }) => `Property '${a}' cannot have an initializer because it is marked abstract.`,
		AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
		AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
		AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
		ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
		ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
		ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
		ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
		DeclareAccessor: ({ kind: a }) => `'declare' is not allowed in ${a}ters.`,
		DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
		DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
		DuplicateAccessibilityModifier: ({ modifier: a }) => "Accessibility modifier already seen.",
		DuplicateModifier: ({ modifier: a }) => `Duplicate modifier: '${a}'.`,
		EmptyHeritageClauseType: ({ token: a }) => `'${a}' list cannot be empty.`,
		EmptyTypeArguments: "Type argument list cannot be empty.",
		EmptyTypeParameters: "Type parameter list cannot be empty.",
		ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
		ImportAliasHasImportType: "An import alias can not use 'import type'.",
		ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier",
		IncompatibleModifiers: ({ modifiers: a }) => `'${a[0]}' modifier cannot be used with '${a[1]}' modifier.`,
		IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
		IndexSignatureHasAccessibility: ({ modifier: a }) => `Index signatures cannot have an accessibility modifier ('${a}').`,
		IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
		IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
		IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
		InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
		InvalidModifierOnTypeMember: ({ modifier: a }) => `'${a}' modifier cannot appear on a type member.`,
		InvalidModifierOnTypeParameter: ({ modifier: a }) => `'${a}' modifier cannot appear on a type parameter.`,
		InvalidModifierOnTypeParameterPositions: ({ modifier: a }) => `'${a}' modifier can only appear on a type parameter of a class, interface or type alias.`,
		InvalidModifiersOrder: ({ orderedModifiers: a }) => `'${a[0]}' modifier must precede '${a[1]}' modifier.`,
		InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
		InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
		MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
		NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
		NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
		OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
		OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
		PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
		PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
		PrivateElementHasAccessibility: ({ modifier: a }) => `Private elements cannot have an accessibility modifier ('${a}').`,
		ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
		ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
		ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
		SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
		SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
		SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
		SingleTypeParameterWithoutTrailingComma: ({ typeParameterName: a }) => `Single type parameter ${a} should have a trailing comma. Example usage: <${a},>.`,
		StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
		TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",
		TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
		TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
		TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
		TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
		UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
		UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
		UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
		UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
		UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
		UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
		UnsupportedSignatureParameterKind: ({ type: a }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${a}.`
	});
	function Ji$1(a) {
		switch (a) {
			case "any": return "TSAnyKeyword";
			case "boolean": return "TSBooleanKeyword";
			case "bigint": return "TSBigIntKeyword";
			case "never": return "TSNeverKeyword";
			case "number": return "TSNumberKeyword";
			case "object": return "TSObjectKeyword";
			case "string": return "TSStringKeyword";
			case "symbol": return "TSSymbolKeyword";
			case "undefined": return "TSUndefinedKeyword";
			case "unknown": return "TSUnknownKeyword";
			default: return;
		}
	}
	function $t$1(a) {
		return a === "private" || a === "public" || a === "protected";
	}
	function Xi$1(a) {
		return a === "in" || a === "out";
	}
	var Gi$1 = (a) => class extends a {
		constructor(...e) {
			super(...e), this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
				allowedModifiers: ["in", "out"],
				disallowedModifiers: [
					"const",
					"public",
					"private",
					"protected",
					"readonly",
					"declare",
					"abstract",
					"override"
				],
				errorTemplate: x$2.InvalidModifierOnTypeParameter
			}), this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
				allowedModifiers: ["const"],
				disallowedModifiers: ["in", "out"],
				errorTemplate: x$2.InvalidModifierOnTypeParameterPositions
			}), this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
				allowedModifiers: [
					"in",
					"out",
					"const"
				],
				disallowedModifiers: [
					"public",
					"private",
					"protected",
					"readonly",
					"declare",
					"abstract",
					"override"
				],
				errorTemplate: x$2.InvalidModifierOnTypeParameter
			});
		}
		getScopeHandler() {
			return ht$2;
		}
		tsIsIdentifier() {
			return w$1(this.state.type);
		}
		tsTokenCanFollowModifier() {
			return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(138) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
		}
		tsNextTokenCanFollowModifier() {
			return this.next(), this.tsTokenCanFollowModifier();
		}
		tsParseModifier(e, s) {
			if (!w$1(this.state.type) && this.state.type !== 58 && this.state.type !== 75) return;
			let i = this.state.value;
			if (e.includes(i)) {
				if (s && this.tsIsStartOfStaticBlocks()) return;
				if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return i;
			}
		}
		tsParseModifiers({ allowedModifiers: e, disallowedModifiers: s, stopOnStartOfClassStaticBlock: i, errorTemplate: r = x$2.InvalidModifierOnTypeMember }, n) {
			let o = (c, l$1, u, f$1) => {
				l$1 === u && n[f$1] && this.raise(x$2.InvalidModifiersOrder, c, { orderedModifiers: [u, f$1] });
			}, h = (c, l$1, u, f$1) => {
				(n[u] && l$1 === f$1 || n[f$1] && l$1 === u) && this.raise(x$2.IncompatibleModifiers, c, { modifiers: [u, f$1] });
			};
			for (;;) {
				let { startLoc: c } = this.state, l$1 = this.tsParseModifier(e.concat(s ?? []), i);
				if (!l$1) break;
				$t$1(l$1) ? n.accessibility ? this.raise(x$2.DuplicateAccessibilityModifier, c, { modifier: l$1 }) : (o(c, l$1, l$1, "override"), o(c, l$1, l$1, "static"), o(c, l$1, l$1, "readonly"), n.accessibility = l$1) : Xi$1(l$1) ? (n[l$1] && this.raise(x$2.DuplicateModifier, c, { modifier: l$1 }), n[l$1] = !0, o(c, l$1, "in", "out")) : (hasOwnProperty.call(n, l$1) ? this.raise(x$2.DuplicateModifier, c, { modifier: l$1 }) : (o(c, l$1, "static", "readonly"), o(c, l$1, "static", "override"), o(c, l$1, "override", "readonly"), o(c, l$1, "abstract", "override"), h(c, l$1, "declare", "override"), h(c, l$1, "static", "abstract")), n[l$1] = !0), s != null && s.includes(l$1) && this.raise(r, c, { modifier: l$1 });
			}
		}
		tsIsListTerminator(e) {
			switch (e) {
				case "EnumMembers":
				case "TypeMembers": return this.match(8);
				case "HeritageClauseElement": return this.match(5);
				case "TupleElementTypes": return this.match(3);
				case "TypeParametersOrArguments": return this.match(48);
			}
		}
		tsParseList(e, s) {
			let i = [];
			for (; !this.tsIsListTerminator(e);) i.push(s());
			return i;
		}
		tsParseDelimitedList(e, s, i) {
			return Wi$1(this.tsParseDelimitedListWorker(e, s, !0, i));
		}
		tsParseDelimitedListWorker(e, s, i, r) {
			let n = [], o = -1;
			for (; !this.tsIsListTerminator(e);) {
				o = -1;
				let h = s();
				if (h == null) return;
				if (n.push(h), this.eat(12)) {
					o = this.state.lastTokStartLoc.index;
					continue;
				}
				if (this.tsIsListTerminator(e)) break;
				i && this.expect(12);
				return;
			}
			return r && (r.value = o), n;
		}
		tsParseBracketedList(e, s, i, r, n) {
			r || (i ? this.expect(0) : this.expect(47));
			let o = this.tsParseDelimitedList(e, s, n);
			return i ? this.expect(3) : this.expect(48), o;
		}
		tsParseImportType() {
			let e = this.startNode();
			return this.expect(83), this.expect(10), this.match(133) || this.raise(x$2.UnsupportedImportTypeArgument, this.state.startLoc), e.argument = super.parseExprAtom(), (this.hasPlugin("importAttributes") || this.hasPlugin("importAssertions")) && (e.options = null), this.eat(12) && (this.expectImportAttributesPlugin(), this.match(11) || (e.options = super.parseMaybeAssignAllowIn(), this.eat(12))), this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName()), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
		}
		tsParseEntityName(e = !0) {
			let s = this.parseIdentifier(e);
			for (; this.eat(16);) {
				let i = this.startNodeAtNode(s);
				i.left = s, i.right = this.parseIdentifier(e), s = this.finishNode(i, "TSQualifiedName");
			}
			return s;
		}
		tsParseTypeReference() {
			let e = this.startNode();
			return e.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference");
		}
		tsParseThisTypePredicate(e) {
			this.next();
			let s = this.startNodeAtNode(e);
			return s.parameterName = e, s.typeAnnotation = this.tsParseTypeAnnotation(!1), s.asserts = !1, this.finishNode(s, "TSTypePredicate");
		}
		tsParseThisTypeNode() {
			let e = this.startNode();
			return this.next(), this.finishNode(e, "TSThisType");
		}
		tsParseTypeQuery() {
			let e = this.startNode();
			return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeQuery");
		}
		tsParseTypeParameter(e) {
			let s = this.startNode();
			return e(s), s.name = this.tsParseTypeParameterName(), s.constraint = this.tsEatThenParseType(81), s.default = this.tsEatThenParseType(29), this.finishNode(s, "TSTypeParameter");
		}
		tsTryParseTypeParameters(e) {
			if (this.match(47)) return this.tsParseTypeParameters(e);
		}
		tsParseTypeParameters(e) {
			let s = this.startNode();
			this.match(47) || this.match(142) ? this.next() : this.unexpected();
			let i = { value: -1 };
			return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), !1, !0, i), s.params.length === 0 && this.raise(x$2.EmptyTypeParameters, s), i.value !== -1 && this.addExtra(s, "trailingComma", i.value), this.finishNode(s, "TSTypeParameterDeclaration");
		}
		tsFillSignature(e, s) {
			let i = e === 19, r = "parameters", n = "typeAnnotation";
			s.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier), this.expect(10), s[r] = this.tsParseBindingListForSignature(), i ? s[n] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (s[n] = this.tsParseTypeOrTypePredicateAnnotation(e));
		}
		tsParseBindingListForSignature() {
			let e = super.parseBindingList(11, 41, 2);
			for (let s of e) {
				let { type: i } = s;
				(i === "AssignmentPattern" || i === "TSParameterProperty") && this.raise(x$2.UnsupportedSignatureParameterKind, s, { type: i });
			}
			return e;
		}
		tsParseTypeMemberSemicolon() {
			!this.eat(12) && !this.isLineTerminator() && this.expect(13);
		}
		tsParseSignatureMember(e, s) {
			return this.tsFillSignature(14, s), this.tsParseTypeMemberSemicolon(), this.finishNode(s, e);
		}
		tsIsUnambiguouslyIndexSignature() {
			return this.next(), w$1(this.state.type) ? (this.next(), this.match(14)) : !1;
		}
		tsTryParseIndexSignature(e) {
			if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) return;
			this.expect(0);
			let s = this.parseIdentifier();
			s.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(s), this.expect(3), e.parameters = [s];
			let i = this.tsTryParseTypeAnnotation();
			return i && (e.typeAnnotation = i), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature");
		}
		tsParsePropertyOrMethodSignature(e, s) {
			this.eat(17) && (e.optional = !0);
			let i = e;
			if (this.match(10) || this.match(47)) {
				s && this.raise(x$2.ReadonlyForMethodSignature, e);
				let r = i;
				r.kind && this.match(47) && this.raise(x$2.AccesorCannotHaveTypeParameters, this.state.curPosition()), this.tsFillSignature(14, r), this.tsParseTypeMemberSemicolon();
				let n = "parameters", o = "typeAnnotation";
				if (r.kind === "get") r[n].length > 0 && (this.raise(p.BadGetterArity, this.state.curPosition()), this.isThisParam(r[n][0]) && this.raise(x$2.AccesorCannotDeclareThisParameter, this.state.curPosition()));
				else if (r.kind === "set") {
					if (r[n].length !== 1) this.raise(p.BadSetterArity, this.state.curPosition());
					else {
						let h = r[n][0];
						this.isThisParam(h) && this.raise(x$2.AccesorCannotDeclareThisParameter, this.state.curPosition()), h.type === "Identifier" && h.optional && this.raise(x$2.SetAccesorCannotHaveOptionalParameter, this.state.curPosition()), h.type === "RestElement" && this.raise(x$2.SetAccesorCannotHaveRestParameter, this.state.curPosition());
					}
					r[o] && this.raise(x$2.SetAccesorCannotHaveReturnType, r[o]);
				} else r.kind = "method";
				return this.finishNode(r, "TSMethodSignature");
			} else {
				let r = i;
				s && (r.readonly = !0);
				let n = this.tsTryParseTypeAnnotation();
				return n && (r.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(r, "TSPropertySignature");
			}
		}
		tsParseTypeMember() {
			let e = this.startNode();
			if (this.match(10) || this.match(47)) return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
			if (this.match(77)) {
				let i = this.startNode();
				return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(i, "new"), this.tsParsePropertyOrMethodSignature(e, !1));
			}
			this.tsParseModifiers({
				allowedModifiers: ["readonly"],
				disallowedModifiers: [
					"declare",
					"abstract",
					"private",
					"protected",
					"public",
					"static",
					"override"
				]
			}, e);
			return this.tsTryParseIndexSignature(e) || (super.parsePropertyName(e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, super.parsePropertyName(e)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
		}
		tsParseTypeLiteral() {
			let e = this.startNode();
			return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral");
		}
		tsParseObjectTypeMembers() {
			this.expect(5);
			let e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
			return this.expect(8), e;
		}
		tsIsStartOfMappedType() {
			return this.next(), this.eat(53) ? this.isContextual(122) : (this.isContextual(122) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? !1 : (this.next(), this.match(58)));
		}
		tsParseMappedTypeParameter() {
			let e = this.startNode();
			return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsExpectThenParseType(58), this.finishNode(e, "TSTypeParameter");
		}
		tsParseMappedType() {
			let e = this.startNode();
			return this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(122)) : this.eatContextual(122) && (e.readonly = !0), this.expect(0), e.typeParameter = this.tsParseMappedTypeParameter(), e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = !0), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType");
		}
		tsParseTupleType() {
			let e = this.startNode();
			e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
			let s = !1;
			return e.elementTypes.forEach((i) => {
				let { type: r } = i;
				s && r !== "TSRestType" && r !== "TSOptionalType" && !(r === "TSNamedTupleMember" && i.optional) && this.raise(x$2.OptionalTypeBeforeRequired, i), s || (s = r === "TSNamedTupleMember" && i.optional || r === "TSOptionalType");
			}), this.finishNode(e, "TSTupleType");
		}
		tsParseTupleElementType() {
			let { startLoc: e } = this.state, s = this.eat(21), i, r, n, o, c = M$2(this.state.type) ? this.lookaheadCharCode() : null;
			if (c === 58) i = !0, n = !1, r = this.parseIdentifier(!0), this.expect(14), o = this.tsParseType();
			else if (c === 63) {
				n = !0;
				let l$1 = this.state.startLoc, u = this.state.value, f$1 = this.tsParseNonArrayType();
				this.lookaheadCharCode() === 58 ? (i = !0, r = this.createIdentifier(this.startNodeAt(l$1), u), this.expect(17), this.expect(14), o = this.tsParseType()) : (i = !1, o = f$1, this.expect(17));
			} else o = this.tsParseType(), n = this.eat(17), i = this.eat(14);
			if (i) {
				let l$1;
				r ? (l$1 = this.startNodeAtNode(r), l$1.optional = n, l$1.label = r, l$1.elementType = o, this.eat(17) && (l$1.optional = !0, this.raise(x$2.TupleOptionalAfterType, this.state.lastTokStartLoc))) : (l$1 = this.startNodeAtNode(o), l$1.optional = n, this.raise(x$2.InvalidTupleMemberLabel, o), l$1.label = o, l$1.elementType = this.tsParseType()), o = this.finishNode(l$1, "TSNamedTupleMember");
			} else if (n) {
				let l$1 = this.startNodeAtNode(o);
				l$1.typeAnnotation = o, o = this.finishNode(l$1, "TSOptionalType");
			}
			if (s) {
				let l$1 = this.startNodeAt(e);
				l$1.typeAnnotation = o, o = this.finishNode(l$1, "TSRestType");
			}
			return o;
		}
		tsParseParenthesizedType() {
			let e = this.startNode();
			return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType");
		}
		tsParseFunctionOrConstructorType(e, s) {
			let i = this.startNode();
			return e === "TSConstructorType" && (i.abstract = !!s, s && this.next(), this.next()), this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, i)), this.finishNode(i, e);
		}
		tsParseLiteralTypeNode() {
			let e = this.startNode();
			switch (this.state.type) {
				case 134:
				case 135:
				case 133:
				case 85:
				case 86:
					e.literal = super.parseExprAtom();
					break;
				default: this.unexpected();
			}
			return this.finishNode(e, "TSLiteralType");
		}
		tsParseTemplateLiteralType() {
			let e = this.startNode();
			return e.literal = super.parseTemplate(!1), this.finishNode(e, "TSLiteralType");
		}
		parseTemplateSubstitution() {
			return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
		}
		tsParseThisTypeOrThisTypePredicate() {
			let e = this.tsParseThisTypeNode();
			return this.isContextual(116) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
		}
		tsParseNonArrayType() {
			switch (this.state.type) {
				case 133:
				case 134:
				case 135:
				case 85:
				case 86: return this.tsParseLiteralTypeNode();
				case 53:
					if (this.state.value === "-") {
						let e = this.startNode(), s = this.lookahead();
						return s.type !== 134 && s.type !== 135 && this.unexpected(), e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
					}
					break;
				case 78: return this.tsParseThisTypeOrThisTypePredicate();
				case 87: return this.tsParseTypeQuery();
				case 83: return this.tsParseImportType();
				case 5: return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
				case 0: return this.tsParseTupleType();
				case 10: return this.tsParseParenthesizedType();
				case 25:
				case 24: return this.tsParseTemplateLiteralType();
				default: {
					let { type: e } = this.state;
					if (w$1(e) || e === 88 || e === 84) {
						let s = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : Ji$1(this.state.value);
						if (s !== void 0 && this.lookaheadCharCode() !== 46) {
							let i = this.startNode();
							return this.next(), this.finishNode(i, s);
						}
						return this.tsParseTypeReference();
					}
				}
			}
			this.unexpected();
		}
		tsParseArrayTypeOrHigher() {
			let e = this.tsParseNonArrayType();
			for (; !this.hasPrecedingLineBreak() && this.eat(0);) if (this.match(3)) {
				let s = this.startNodeAtNode(e);
				s.elementType = e, this.expect(3), e = this.finishNode(s, "TSArrayType");
			} else {
				let s = this.startNodeAtNode(e);
				s.objectType = e, s.indexType = this.tsParseType(), this.expect(3), e = this.finishNode(s, "TSIndexedAccessType");
			}
			return e;
		}
		tsParseTypeOperator() {
			let e = this.startNode(), s = this.state.value;
			return this.next(), e.operator = s, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator");
		}
		tsCheckTypeAnnotationForReadOnly(e) {
			switch (e.typeAnnotation.type) {
				case "TSTupleType":
				case "TSArrayType": return;
				default: this.raise(x$2.UnexpectedReadonly, e);
			}
		}
		tsParseInferType() {
			let e = this.startNode();
			this.expectContextual(115);
			let s = this.startNode();
			return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType()), e.typeParameter = this.finishNode(s, "TSTypeParameter"), this.finishNode(e, "TSInferType");
		}
		tsParseConstraintForInferType() {
			if (this.eat(81)) {
				let e = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
				if (this.state.inDisallowConditionalTypesContext || !this.match(17)) return e;
			}
		}
		tsParseTypeOperatorOrHigher() {
			return di$2(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(115) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
		}
		tsParseUnionOrIntersectionType(e, s, i) {
			let r = this.startNode(), n = this.eat(i), o = [];
			do
				o.push(s());
			while (this.eat(i));
			return o.length === 1 && !n ? o[0] : (r.types = o, this.finishNode(r, e));
		}
		tsParseIntersectionTypeOrHigher() {
			return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
		}
		tsParseUnionTypeOrHigher() {
			return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
		}
		tsIsStartOfFunctionType() {
			return this.match(47) ? !0 : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
		}
		tsSkipParameterStart() {
			if (w$1(this.state.type) || this.match(78)) return this.next(), !0;
			if (this.match(5)) {
				let { errors: e } = this.state, s = e.length;
				try {
					return this.parseObjectLike(8, !0), e.length === s;
				} catch {
					return !1;
				}
			}
			if (this.match(0)) {
				this.next();
				let { errors: e } = this.state, s = e.length;
				try {
					return super.parseBindingList(3, 93, 1), e.length === s;
				} catch {
					return !1;
				}
			}
			return !1;
		}
		tsIsUnambiguouslyStartOfFunctionType() {
			return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))));
		}
		tsParseTypeOrTypePredicateAnnotation(e) {
			return this.tsInType(() => {
				let s = this.startNode();
				this.expect(e);
				let i = this.startNode(), r = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
				if (r && this.match(78)) {
					let h = this.tsParseThisTypeOrThisTypePredicate();
					return h.type === "TSThisType" ? (i.parameterName = h, i.asserts = !0, i.typeAnnotation = null, h = this.finishNode(i, "TSTypePredicate")) : (this.resetStartLocationFromNode(h, i), h.asserts = !0), s.typeAnnotation = h, this.finishNode(s, "TSTypeAnnotation");
				}
				let n = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
				if (!n) return r ? (i.parameterName = this.parseIdentifier(), i.asserts = r, i.typeAnnotation = null, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(!1, s);
				let o = this.tsParseTypeAnnotation(!1);
				return i.parameterName = n, i.typeAnnotation = o, i.asserts = r, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation");
			});
		}
		tsTryParseTypeOrTypePredicateAnnotation() {
			if (this.match(14)) return this.tsParseTypeOrTypePredicateAnnotation(14);
		}
		tsTryParseTypeAnnotation() {
			if (this.match(14)) return this.tsParseTypeAnnotation();
		}
		tsTryParseType() {
			return this.tsEatThenParseType(14);
		}
		tsParseTypePredicatePrefix() {
			let e = this.parseIdentifier();
			if (this.isContextual(116) && !this.hasPrecedingLineBreak()) return this.next(), e;
		}
		tsParseTypePredicateAsserts() {
			if (this.state.type !== 109) return !1;
			let e = this.state.containsEsc;
			return this.next(), !w$1(this.state.type) && !this.match(78) ? !1 : (e && this.raise(p.InvalidEscapedReservedWord, this.state.lastTokStartLoc, { reservedWord: "asserts" }), !0);
		}
		tsParseTypeAnnotation(e = !0, s = this.startNode()) {
			return this.tsInType(() => {
				e && this.expect(14), s.typeAnnotation = this.tsParseType();
			}), this.finishNode(s, "TSTypeAnnotation");
		}
		tsParseType() {
			jt$2(this.state.inType);
			let e = this.tsParseNonConditionalType();
			if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81)) return e;
			let s = this.startNodeAtNode(e);
			return s.checkType = e, s.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType()), this.expect(17), s.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.expect(14), s.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.finishNode(s, "TSConditionalType");
		}
		isAbstractConstructorSignature() {
			return this.isContextual(124) && this.lookahead().type === 77;
		}
		tsParseNonConditionalType() {
			return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
		}
		tsParseTypeAssertion() {
			this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(x$2.ReservedTypeAssertion, this.state.startLoc);
			let e = this.startNode();
			return e.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
		}
		tsParseHeritageClause(e) {
			let s = this.state.startLoc, i = this.tsParseDelimitedList("HeritageClauseElement", () => {
				let r = this.startNode();
				return r.expression = this.tsParseEntityName(), this.match(47) && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSExpressionWithTypeArguments");
			});
			return i.length || this.raise(x$2.EmptyHeritageClauseType, s, { token: e }), i;
		}
		tsParseInterfaceDeclaration(e, s = {}) {
			if (this.hasFollowingLineBreak()) return null;
			this.expectContextual(129), s.declare && (e.declare = !0), w$1(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 130)) : (e.id = null, this.raise(x$2.MissingInterfaceName, this.state.startLoc)), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
			let i = this.startNode();
			return i.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(i, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration");
		}
		tsParseTypeAliasDeclaration(e) {
			return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 2), e.typeAnnotation = this.tsInType(() => {
				if (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers), this.expect(29), this.isContextual(114) && this.lookahead().type !== 16) {
					let s = this.startNode();
					return this.next(), this.finishNode(s, "TSIntrinsicKeyword");
				}
				return this.tsParseType();
			}), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
		}
		tsInNoContext(e) {
			let s = this.state.context;
			this.state.context = [s[0]];
			try {
				return e();
			} finally {
				this.state.context = s;
			}
		}
		tsInType(e) {
			let s = this.state.inType;
			this.state.inType = !0;
			try {
				return e();
			} finally {
				this.state.inType = s;
			}
		}
		tsInDisallowConditionalTypesContext(e) {
			let s = this.state.inDisallowConditionalTypesContext;
			this.state.inDisallowConditionalTypesContext = !0;
			try {
				return e();
			} finally {
				this.state.inDisallowConditionalTypesContext = s;
			}
		}
		tsInAllowConditionalTypesContext(e) {
			let s = this.state.inDisallowConditionalTypesContext;
			this.state.inDisallowConditionalTypesContext = !1;
			try {
				return e();
			} finally {
				this.state.inDisallowConditionalTypesContext = s;
			}
		}
		tsEatThenParseType(e) {
			if (this.match(e)) return this.tsNextThenParseType();
		}
		tsExpectThenParseType(e) {
			return this.tsInType(() => (this.expect(e), this.tsParseType()));
		}
		tsNextThenParseType() {
			return this.tsInType(() => (this.next(), this.tsParseType()));
		}
		tsParseEnumMember() {
			let e = this.startNode();
			return e.id = this.match(133) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(!0), this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember");
		}
		tsParseEnumDeclaration(e, s = {}) {
			return s.const && (e.const = !0), s.declare && (e.declare = !0), this.expectContextual(126), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? 8971 : 8459), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration");
		}
		tsParseModuleBlock() {
			let e = this.startNode();
			return this.scope.enter(0), this.expect(5), super.parseBlockOrModuleBlockBody(e.body = [], void 0, !0, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock");
		}
		tsParseModuleOrNamespaceDeclaration(e, s = !1) {
			if (e.id = this.parseIdentifier(), s || this.checkIdentifier(e.id, 1024), this.eat(16)) {
				let i = this.startNode();
				this.tsParseModuleOrNamespaceDeclaration(i, !0), e.body = i;
			} else this.scope.enter(256), this.prodParam.enter(0), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
			return this.finishNode(e, "TSModuleDeclaration");
		}
		tsParseAmbientExternalModuleDeclaration(e) {
			return this.isContextual(112) ? (e.global = !0, e.id = this.parseIdentifier()) : this.match(133) ? e.id = super.parseStringLiteral(this.state.value) : this.unexpected(), this.match(5) ? (this.scope.enter(256), this.prodParam.enter(0), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration");
		}
		tsParseImportEqualsDeclaration(e, s, i) {
			e.isExport = i || !1, e.id = s || this.parseIdentifier(), this.checkIdentifier(e.id, 4096), this.expect(29);
			let r = this.tsParseModuleReference();
			return e.importKind === "type" && r.type !== "TSExternalModuleReference" && this.raise(x$2.ImportAliasHasImportType, r), e.moduleReference = r, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
		}
		tsIsExternalModuleReference() {
			return this.isContextual(119) && this.lookaheadCharCode() === 40;
		}
		tsParseModuleReference() {
			return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
		}
		tsParseExternalModuleReference() {
			let e = this.startNode();
			return this.expectContextual(119), this.expect(10), this.match(133) || this.unexpected(), e.expression = super.parseExprAtom(), this.expect(11), this.sawUnambiguousESM = !0, this.finishNode(e, "TSExternalModuleReference");
		}
		tsLookAhead(e) {
			let s = this.state.clone(), i = e();
			return this.state = s, i;
		}
		tsTryParseAndCatch(e) {
			let s = this.tryParse((i) => e() || i());
			if (!(s.aborted || !s.node)) return s.error && (this.state = s.failState), s.node;
		}
		tsTryParse(e) {
			let s = this.state.clone(), i = e();
			if (i !== void 0 && i !== !1) return i;
			this.state = s;
		}
		tsTryParseDeclare(e) {
			if (this.isLineTerminator()) return;
			let s = this.state.type, i;
			return this.isContextual(100) && (s = 74, i = "let"), this.tsInAmbientContext(() => {
				switch (s) {
					case 68: return e.declare = !0, super.parseFunctionStatement(e, !1, !1);
					case 80: return e.declare = !0, this.parseClass(e, !0, !1);
					case 126: return this.tsParseEnumDeclaration(e, { declare: !0 });
					case 112: return this.tsParseAmbientExternalModuleDeclaration(e);
					case 75:
					case 74: return !this.match(75) || !this.isLookaheadContextual("enum") ? (e.declare = !0, this.parseVarStatement(e, i || this.state.value, !0)) : (this.expect(75), this.tsParseEnumDeclaration(e, {
						const: !0,
						declare: !0
					}));
					case 129: {
						let r = this.tsParseInterfaceDeclaration(e, { declare: !0 });
						if (r) return r;
					}
					default: if (w$1(s)) return this.tsParseDeclaration(e, this.state.value, !0, null);
				}
			});
		}
		tsTryParseExportDeclaration() {
			return this.tsParseDeclaration(this.startNode(), this.state.value, !0, null);
		}
		tsParseExpressionStatement(e, s, i) {
			switch (s.name) {
				case "declare": {
					let r = this.tsTryParseDeclare(e);
					return r && (r.declare = !0), r;
				}
				case "global":
					if (this.match(5)) {
						this.scope.enter(256), this.prodParam.enter(0);
						let r = e;
						return r.global = !0, r.id = s, r.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(r, "TSModuleDeclaration");
					}
					break;
				default: return this.tsParseDeclaration(e, s.name, !1, i);
			}
		}
		tsParseDeclaration(e, s, i, r) {
			switch (s) {
				case "abstract":
					if (this.tsCheckLineTerminator(i) && (this.match(80) || w$1(this.state.type))) return this.tsParseAbstractDeclaration(e, r);
					break;
				case "module":
					if (this.tsCheckLineTerminator(i)) {
						if (this.match(133)) return this.tsParseAmbientExternalModuleDeclaration(e);
						if (w$1(this.state.type)) return this.tsParseModuleOrNamespaceDeclaration(e);
					}
					break;
				case "namespace":
					if (this.tsCheckLineTerminator(i) && w$1(this.state.type)) return this.tsParseModuleOrNamespaceDeclaration(e);
					break;
				case "type":
					if (this.tsCheckLineTerminator(i) && w$1(this.state.type)) return this.tsParseTypeAliasDeclaration(e);
					break;
			}
		}
		tsCheckLineTerminator(e) {
			return e ? this.hasFollowingLineBreak() ? !1 : (this.next(), !0) : !this.isLineTerminator();
		}
		tsTryParseGenericAsyncArrowFunction(e) {
			if (!this.match(47)) return;
			let s = this.state.maybeInArrowParameters;
			this.state.maybeInArrowParameters = !0;
			let i = this.tsTryParseAndCatch(() => {
				let r = this.startNodeAt(e);
				return r.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier), super.parseFunctionParams(r), r.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), r;
			});
			if (this.state.maybeInArrowParameters = s, !!i) return super.parseArrowExpression(i, null, !0);
		}
		tsParseTypeArgumentsInExpression() {
			if (this.reScan_lt() === 47) return this.tsParseTypeArguments();
		}
		tsParseTypeArguments() {
			let e = this.startNode();
			return e.params = this.tsInType(() => this.tsInNoContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 ? this.raise(x$2.EmptyTypeArguments, e) : !this.state.inType && this.curContext() === C.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
		}
		tsIsDeclarationStart() {
			return mi$1(this.state.type);
		}
		isExportDefaultSpecifier() {
			return this.tsIsDeclarationStart() ? !1 : super.isExportDefaultSpecifier();
		}
		parseAssignableListItem(e, s) {
			let i = this.state.startLoc, r = {};
			this.tsParseModifiers({ allowedModifiers: [
				"public",
				"private",
				"protected",
				"override",
				"readonly"
			] }, r);
			let n = r.accessibility, o = r.override, h = r.readonly;
			!(e & 4) && (n || h || o) && this.raise(x$2.UnexpectedParameterModifier, i);
			let c = this.parseMaybeDefault();
			this.parseAssignableListItemTypes(c, e);
			let l$1 = this.parseMaybeDefault(c.loc.start, c);
			if (n || h || o) {
				let u = this.startNodeAt(i);
				return s.length && (u.decorators = s), n && (u.accessibility = n), h && (u.readonly = h), o && (u.override = o), l$1.type !== "Identifier" && l$1.type !== "AssignmentPattern" && this.raise(x$2.UnsupportedParameterPropertyKind, u), u.parameter = l$1, this.finishNode(u, "TSParameterProperty");
			}
			return s.length && (c.decorators = s), l$1;
		}
		isSimpleParameter(e) {
			return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
		}
		tsDisallowOptionalPattern(e) {
			for (let s of e.params) s.type !== "Identifier" && s.optional && !this.state.isAmbientContext && this.raise(x$2.PatternIsOptional, s);
		}
		setArrowFunctionParameters(e, s, i) {
			super.setArrowFunctionParameters(e, s, i), this.tsDisallowOptionalPattern(e);
		}
		parseFunctionBodyAndFinish(e, s, i = !1) {
			this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
			let r = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
			return r && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, r) : r === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(x$2.DeclareFunctionHasImplementation, e), e.declare) ? super.parseFunctionBodyAndFinish(e, r, i) : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, s, i));
		}
		registerFunctionStatementId(e) {
			!e.body && e.id ? this.checkIdentifier(e.id, 1024) : super.registerFunctionStatementId(e);
		}
		tsCheckForInvalidTypeCasts(e) {
			e.forEach((s) => {
				(s == null ? void 0 : s.type) === "TSTypeCastExpression" && this.raise(x$2.UnexpectedTypeAnnotation, s.typeAnnotation);
			});
		}
		toReferencedList(e, s) {
			return this.tsCheckForInvalidTypeCasts(e), e;
		}
		parseArrayLike(e, s, i, r) {
			let n = super.parseArrayLike(e, s, i, r);
			return n.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(n.elements), n;
		}
		parseSubscript(e, s, i, r) {
			if (!this.hasPrecedingLineBreak() && this.match(35)) {
				this.state.canStartJSXElement = !1, this.next();
				let o = this.startNodeAt(s);
				return o.expression = e, this.finishNode(o, "TSNonNullExpression");
			}
			let n = !1;
			if (this.match(18) && this.lookaheadCharCode() === 60) {
				if (i) return r.stop = !0, e;
				r.optionalChainMember = n = !0, this.next();
			}
			if (this.match(47) || this.match(51)) {
				let o, h = this.tsTryParseAndCatch(() => {
					if (!i && this.atPossibleAsyncArrow(e)) {
						let f$1 = this.tsTryParseGenericAsyncArrowFunction(s);
						if (f$1) return f$1;
					}
					let c = this.tsParseTypeArgumentsInExpression();
					if (!c) return;
					if (n && !this.match(10)) {
						o = this.state.curPosition();
						return;
					}
					if (ve$2(this.state.type)) {
						let f$1 = super.parseTaggedTemplateExpression(e, s, r);
						return f$1.typeParameters = c, f$1;
					}
					if (!i && this.eat(10)) {
						let f$1 = this.startNodeAt(s);
						return f$1.callee = e, f$1.arguments = this.parseCallExpressionArguments(11, !1), this.tsCheckForInvalidTypeCasts(f$1.arguments), f$1.typeParameters = c, r.optionalChainMember && (f$1.optional = n), this.finishCallExpression(f$1, r.optionalChainMember);
					}
					let l$1 = this.state.type;
					if (l$1 === 48 || l$1 === 52 || l$1 !== 10 && He$2(l$1) && !this.hasPrecedingLineBreak()) return;
					let u = this.startNodeAt(s);
					return u.expression = e, u.typeParameters = c, this.finishNode(u, "TSInstantiationExpression");
				});
				if (o && this.unexpected(o, 10), h) return h.type === "TSInstantiationExpression" && (this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(x$2.InvalidPropertyAccessAfterInstantiationExpression, this.state.startLoc), h;
			}
			return super.parseSubscript(e, s, i, r);
		}
		parseNewCallee(e) {
			var s;
			super.parseNewCallee(e);
			let { callee: i } = e;
			i.type === "TSInstantiationExpression" && !((s = i.extra) != null && s.parenthesized) && (e.typeParameters = i.typeParameters, e.callee = i.expression);
		}
		parseExprOp(e, s, i) {
			let r;
			if (Ee$2(58) > i && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (r = this.isContextual(120)))) {
				let n = this.startNodeAt(s);
				return n.expression = e, n.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? (r && this.raise(p.UnexpectedKeyword, this.state.startLoc, { keyword: "const" }), this.tsParseTypeReference()) : this.tsParseType())), this.finishNode(n, r ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, s, i);
			}
			return super.parseExprOp(e, s, i);
		}
		checkReservedWord(e, s, i, r) {
			this.state.isAmbientContext || super.checkReservedWord(e, s, i, r);
		}
		checkImportReflection(e) {
			super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(x$2.ImportReflectionHasImportType, e.specifiers[0].loc.start);
		}
		checkDuplicateExports() {}
		isPotentialImportPhase(e) {
			if (super.isPotentialImportPhase(e)) return !0;
			if (this.isContextual(130)) {
				let s = this.lookaheadCharCode();
				return e ? s === 123 || s === 42 : s !== 61;
			}
			return !e && this.isContextual(87);
		}
		applyImportPhase(e, s, i, r) {
			super.applyImportPhase(e, s, i, r), s ? e.exportKind = i === "type" ? "type" : "value" : e.importKind = i === "type" || i === "typeof" ? i : "value";
		}
		parseImport(e) {
			if (this.match(133)) return e.importKind = "value", super.parseImport(e);
			let s;
			if (w$1(this.state.type) && this.lookaheadCharCode() === 61) return e.importKind = "value", this.tsParseImportEqualsDeclaration(e);
			if (this.isContextual(130)) {
				let i = this.parseMaybeImportPhase(e, !1);
				if (this.lookaheadCharCode() === 61) return this.tsParseImportEqualsDeclaration(e, i);
				s = super.parseImportSpecifiersAndAfter(e, i);
			} else s = super.parseImport(e);
			return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(x$2.TypeImportCannotSpecifyDefaultAndNamed, s), s;
		}
		parseExport(e, s) {
			if (this.match(83)) {
				this.next();
				let i = e, r = null;
				return this.isContextual(130) && this.isPotentialImportPhase(!1) ? r = this.parseMaybeImportPhase(i, !1) : i.importKind = "value", this.tsParseImportEqualsDeclaration(i, r, !0);
			} else if (this.eat(29)) {
				let i = e;
				return i.expression = super.parseExpression(), this.semicolon(), this.sawUnambiguousESM = !0, this.finishNode(i, "TSExportAssignment");
			} else if (this.eatContextual(93)) {
				let i = e;
				return this.expectContextual(128), i.id = this.parseIdentifier(), this.semicolon(), this.finishNode(i, "TSNamespaceExportDeclaration");
			} else return super.parseExport(e, s);
		}
		isAbstractClass() {
			return this.isContextual(124) && this.lookahead().type === 80;
		}
		parseExportDefaultExpression() {
			if (this.isAbstractClass()) {
				let e = this.startNode();
				return this.next(), e.abstract = !0, this.parseClass(e, !0, !0);
			}
			if (this.match(129)) {
				let e = this.tsParseInterfaceDeclaration(this.startNode());
				if (e) return e;
			}
			return super.parseExportDefaultExpression();
		}
		parseVarStatement(e, s, i = !1) {
			let { isAmbientContext: r } = this.state, n = super.parseVarStatement(e, s, i || r);
			if (!r) return n;
			for (let { id: o, init: h } of n.declarations) h && (s !== "const" || o.typeAnnotation ? this.raise(x$2.InitializerNotAllowedInAmbientContext, h) : Qi$1(h, this.hasPlugin("estree")) || this.raise(x$2.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, h));
			return n;
		}
		parseStatementContent(e, s) {
			if (this.match(75) && this.isLookaheadContextual("enum")) {
				let i = this.startNode();
				return this.expect(75), this.tsParseEnumDeclaration(i, { const: !0 });
			}
			if (this.isContextual(126)) return this.tsParseEnumDeclaration(this.startNode());
			if (this.isContextual(129)) {
				let i = this.tsParseInterfaceDeclaration(this.startNode());
				if (i) return i;
			}
			return super.parseStatementContent(e, s);
		}
		parseAccessModifier() {
			return this.tsParseModifier([
				"public",
				"protected",
				"private"
			]);
		}
		tsHasSomeModifiers(e, s) {
			return s.some((i) => $t$1(i) ? e.accessibility === i : !!e[i]);
		}
		tsIsStartOfStaticBlocks() {
			return this.isContextual(106) && this.lookaheadCharCode() === 123;
		}
		parseClassMember(e, s, i) {
			let r = [
				"declare",
				"private",
				"public",
				"protected",
				"override",
				"abstract",
				"readonly",
				"static"
			];
			this.tsParseModifiers({
				allowedModifiers: r,
				disallowedModifiers: ["in", "out"],
				stopOnStartOfClassStaticBlock: !0,
				errorTemplate: x$2.InvalidModifierOnTypeParameterPositions
			}, s);
			let n = () => {
				this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(s, r) && this.raise(x$2.StaticBlockCannotHaveModifier, this.state.curPosition()), super.parseClassStaticBlock(e, s)) : this.parseClassMemberWithIsStatic(e, s, i, !!s.static);
			};
			s.declare ? this.tsInAmbientContext(n) : n();
		}
		parseClassMemberWithIsStatic(e, s, i, r) {
			let n = this.tsTryParseIndexSignature(s);
			if (n) {
				e.body.push(n), s.abstract && this.raise(x$2.IndexSignatureHasAbstract, s), s.accessibility && this.raise(x$2.IndexSignatureHasAccessibility, s, { modifier: s.accessibility }), s.declare && this.raise(x$2.IndexSignatureHasDeclare, s), s.override && this.raise(x$2.IndexSignatureHasOverride, s);
				return;
			}
			!this.state.inAbstractClass && s.abstract && this.raise(x$2.NonAbstractClassHasAbstractMethod, s), s.override && (i.hadSuperClass || this.raise(x$2.OverrideNotInSubClass, s)), super.parseClassMemberWithIsStatic(e, s, i, r);
		}
		parsePostMemberNameModifiers(e) {
			this.eat(17) && (e.optional = !0), e.readonly && this.match(10) && this.raise(x$2.ClassMethodHasReadonly, e), e.declare && this.match(10) && this.raise(x$2.ClassMethodHasDeclare, e);
		}
		parseExpressionStatement(e, s, i) {
			return (s.type === "Identifier" ? this.tsParseExpressionStatement(e, s, i) : void 0) || super.parseExpressionStatement(e, s, i);
		}
		shouldParseExportDeclaration() {
			return this.tsIsDeclarationStart() ? !0 : super.shouldParseExportDeclaration();
		}
		parseConditional(e, s, i) {
			if (!this.state.maybeInArrowParameters || !this.match(17)) return super.parseConditional(e, s, i);
			let r = this.tryParse(() => super.parseConditional(e, s));
			return r.node ? (r.error && (this.state = r.failState), r.node) : (r.error && super.setOptionalParametersError(i, r.error), e);
		}
		parseParenItem(e, s) {
			let i = super.parseParenItem(e, s);
			if (this.eat(17) && (i.optional = !0, this.resetEndLocation(e)), this.match(14)) {
				let r = this.startNodeAt(s);
				return r.expression = e, r.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(r, "TSTypeCastExpression");
			}
			return e;
		}
		parseExportDeclaration(e) {
			if (!this.state.isAmbientContext && this.isContextual(125)) return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
			let s = this.state.startLoc, i = this.eatContextual(125);
			if (i && (this.isContextual(125) || !this.shouldParseExportDeclaration())) throw this.raise(x$2.ExpectedAmbientAfterExportDeclare, this.state.startLoc);
			let n = w$1(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
			return n ? ((n.type === "TSInterfaceDeclaration" || n.type === "TSTypeAliasDeclaration" || i) && (e.exportKind = "type"), i && (this.resetStartLocation(n, s), n.declare = !0), n) : null;
		}
		parseClassId(e, s, i, r) {
			if ((!s || i) && this.isContextual(113)) return;
			super.parseClassId(e, s, i, e.declare ? 1024 : 8331);
			let n = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
			n && (e.typeParameters = n);
		}
		parseClassPropertyAnnotation(e) {
			e.optional || (this.eat(35) ? e.definite = !0 : this.eat(17) && (e.optional = !0));
			let s = this.tsTryParseTypeAnnotation();
			s && (e.typeAnnotation = s);
		}
		parseClassProperty(e) {
			if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(x$2.DeclareClassFieldHasInitializer, this.state.startLoc), e.abstract && this.match(29)) {
				let { key: s } = e;
				this.raise(x$2.AbstractPropertyHasInitializer, this.state.startLoc, { propertyName: s.type === "Identifier" && !e.computed ? s.name : `[${this.input.slice(s.start, s.end)}]` });
			}
			return super.parseClassProperty(e);
		}
		parseClassPrivateProperty(e) {
			return e.abstract && this.raise(x$2.PrivateElementHasAbstract, e), e.accessibility && this.raise(x$2.PrivateElementHasAccessibility, e, { modifier: e.accessibility }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
		}
		parseClassAccessorProperty(e) {
			return this.parseClassPropertyAnnotation(e), e.optional && this.raise(x$2.AccessorCannotBeOptional, e), super.parseClassAccessorProperty(e);
		}
		pushClassMethod(e, s, i, r, n, o) {
			let h = this.tsTryParseTypeParameters(this.tsParseConstModifier);
			h && n && this.raise(x$2.ConstructorHasTypeParameters, h);
			let { declare: c = !1, kind: l$1 } = s;
			c && (l$1 === "get" || l$1 === "set") && this.raise(x$2.DeclareAccessor, s, { kind: l$1 }), h && (s.typeParameters = h), super.pushClassMethod(e, s, i, r, n, o);
		}
		pushClassPrivateMethod(e, s, i, r) {
			let n = this.tsTryParseTypeParameters(this.tsParseConstModifier);
			n && (s.typeParameters = n), super.pushClassPrivateMethod(e, s, i, r);
		}
		declareClassPrivateMethodInScope(e, s) {
			e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && !hasOwnProperty.call(e.value, "body") || super.declareClassPrivateMethodInScope(e, s));
		}
		parseClassSuper(e) {
			super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(113) && (e.implements = this.tsParseHeritageClause("implements"));
		}
		parseObjPropValue(e, s, i, r, n, o, h) {
			let c = this.tsTryParseTypeParameters(this.tsParseConstModifier);
			return c && (e.typeParameters = c), super.parseObjPropValue(e, s, i, r, n, o, h);
		}
		parseFunctionParams(e, s) {
			let i = this.tsTryParseTypeParameters(this.tsParseConstModifier);
			i && (e.typeParameters = i), super.parseFunctionParams(e, s);
		}
		parseVarId(e, s) {
			super.parseVarId(e, s), e.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = !0);
			let i = this.tsTryParseTypeAnnotation();
			i && (e.id.typeAnnotation = i, this.resetEndLocation(e.id));
		}
		parseAsyncArrowFromCallExpression(e, s) {
			return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, s);
		}
		parseMaybeAssign(e, s) {
			var i, r, n, o, h;
			let c, l$1, u;
			if (this.hasPlugin("jsx") && (this.match(142) || this.match(47))) {
				if (c = this.state.clone(), l$1 = this.tryParse(() => super.parseMaybeAssign(e, s), c), !l$1.error) return l$1.node;
				let { context: y$1 } = this.state, E$1 = y$1[y$1.length - 1];
				(E$1 === C.j_oTag || E$1 === C.j_expr) && y$1.pop();
			}
			if (!((i = l$1) != null && i.error) && !this.match(47)) return super.parseMaybeAssign(e, s);
			(!c || c === this.state) && (c = this.state.clone());
			let f$1, d$1 = this.tryParse((y$1) => {
				var E$1, L$2;
				f$1 = this.tsParseTypeParameters(this.tsParseConstModifier);
				let S$1 = super.parseMaybeAssign(e, s);
				return (S$1.type !== "ArrowFunctionExpression" || (E$1 = S$1.extra) != null && E$1.parenthesized) && y$1(), ((L$2 = f$1) == null ? void 0 : L$2.params.length) !== 0 && this.resetStartLocationFromNode(S$1, f$1), S$1.typeParameters = f$1, S$1;
			}, c);
			if (!d$1.error && !d$1.aborted) return f$1 && this.reportReservedArrowTypeParam(f$1), d$1.node;
			if (!l$1 && (jt$2(!this.hasPlugin("jsx")), u = this.tryParse(() => super.parseMaybeAssign(e, s), c), !u.error)) return u.node;
			if ((r = l$1) != null && r.node) return this.state = l$1.failState, l$1.node;
			if (d$1.node) return this.state = d$1.failState, f$1 && this.reportReservedArrowTypeParam(f$1), d$1.node;
			if ((n = u) != null && n.node) return this.state = u.failState, u.node;
			throw ((o = l$1) == null ? void 0 : o.error) || d$1.error || ((h = u) == null ? void 0 : h.error);
		}
		reportReservedArrowTypeParam(e) {
			var s;
			e.params.length === 1 && !e.params[0].constraint && !((s = e.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(x$2.ReservedArrowTypeParam, e);
		}
		parseMaybeUnary(e, s) {
			return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e, s);
		}
		parseArrow(e) {
			if (this.match(14)) {
				let s = this.tryParse((i) => {
					let r = this.tsParseTypeOrTypePredicateAnnotation(14);
					return (this.canInsertSemicolon() || !this.match(19)) && i(), r;
				});
				if (s.aborted) return;
				s.thrown || (s.error && (this.state = s.failState), e.returnType = s.node);
			}
			return super.parseArrow(e);
		}
		parseAssignableListItemTypes(e, s) {
			if (!(s & 2)) return e;
			this.eat(17) && (e.optional = !0);
			let i = this.tsTryParseTypeAnnotation();
			return i && (e.typeAnnotation = i), this.resetEndLocation(e), e;
		}
		isAssignable(e, s) {
			switch (e.type) {
				case "TSTypeCastExpression": return this.isAssignable(e.expression, s);
				case "TSParameterProperty": return !0;
				default: return super.isAssignable(e, s);
			}
		}
		toAssignable(e, s = !1) {
			switch (e.type) {
				case "ParenthesizedExpression":
					this.toAssignableParenthesizedExpression(e, s);
					break;
				case "TSAsExpression":
				case "TSSatisfiesExpression":
				case "TSNonNullExpression":
				case "TSTypeAssertion":
					s ? this.expressionScope.recordArrowParameterBindingError(x$2.UnexpectedTypeCastInParameter, e) : this.raise(x$2.UnexpectedTypeCastInParameter, e), this.toAssignable(e.expression, s);
					break;
				case "AssignmentExpression": !s && e.left.type === "TSTypeCastExpression" && (e.left = this.typeCastToParameter(e.left));
				default: super.toAssignable(e, s);
			}
		}
		toAssignableParenthesizedExpression(e, s) {
			switch (e.expression.type) {
				case "TSAsExpression":
				case "TSSatisfiesExpression":
				case "TSNonNullExpression":
				case "TSTypeAssertion":
				case "ParenthesizedExpression":
					this.toAssignable(e.expression, s);
					break;
				default: super.toAssignable(e, s);
			}
		}
		checkToRestConversion(e, s) {
			switch (e.type) {
				case "TSAsExpression":
				case "TSSatisfiesExpression":
				case "TSTypeAssertion":
				case "TSNonNullExpression":
					this.checkToRestConversion(e.expression, !1);
					break;
				default: super.checkToRestConversion(e, s);
			}
		}
		isValidLVal(e, s, i) {
			return Hi$1({
				TSTypeCastExpression: !0,
				TSParameterProperty: "parameter",
				TSNonNullExpression: "expression",
				TSInstantiationExpression: "expression",
				TSAsExpression: (i !== 64 || !s) && ["expression", !0],
				TSSatisfiesExpression: (i !== 64 || !s) && ["expression", !0],
				TSTypeAssertion: (i !== 64 || !s) && ["expression", !0]
			}, e) || super.isValidLVal(e, s, i);
		}
		parseBindingAtom() {
			return this.state.type === 78 ? this.parseIdentifier(!0) : super.parseBindingAtom();
		}
		parseMaybeDecoratorArguments(e) {
			if (this.match(47) || this.match(51)) {
				let s = this.tsParseTypeArgumentsInExpression();
				if (this.match(10)) {
					let i = super.parseMaybeDecoratorArguments(e);
					return i.typeParameters = s, i;
				}
				this.unexpected(null, 10);
			}
			return super.parseMaybeDecoratorArguments(e);
		}
		checkCommaAfterRest(e) {
			return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), !1) : super.checkCommaAfterRest(e);
		}
		isClassMethod() {
			return this.match(47) || super.isClassMethod();
		}
		isClassProperty() {
			return this.match(35) || this.match(14) || super.isClassProperty();
		}
		parseMaybeDefault(e, s) {
			let i = super.parseMaybeDefault(e, s);
			return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(x$2.TypeAnnotationAfterAssign, i.typeAnnotation), i;
		}
		getTokenFromCode(e) {
			if (this.state.inType) {
				if (e === 62) {
					this.finishOp(48, 1);
					return;
				}
				if (e === 60) {
					this.finishOp(47, 1);
					return;
				}
			}
			super.getTokenFromCode(e);
		}
		reScan_lt_gt() {
			let { type: e } = this.state;
			e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
		}
		reScan_lt() {
			let { type: e } = this.state;
			return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
		}
		toAssignableList(e, s, i) {
			for (let r = 0; r < e.length; r++) {
				let n = e[r];
				(n == null ? void 0 : n.type) === "TSTypeCastExpression" && (e[r] = this.typeCastToParameter(n));
			}
			super.toAssignableList(e, s, i);
		}
		typeCastToParameter(e) {
			return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
		}
		shouldParseArrow(e) {
			return this.match(14) ? e.every((s) => this.isAssignable(s, !0)) : super.shouldParseArrow(e);
		}
		shouldParseAsyncArrow() {
			return this.match(14) || super.shouldParseAsyncArrow();
		}
		canHaveLeadingDecorator() {
			return super.canHaveLeadingDecorator() || this.isAbstractClass();
		}
		jsxParseOpeningElementAfterName(e) {
			if (this.match(47) || this.match(51)) {
				let s = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
				s && (e.typeParameters = s);
			}
			return super.jsxParseOpeningElementAfterName(e);
		}
		getGetterSetterExpectedParamCount(e) {
			let s = super.getGetterSetterExpectedParamCount(e), r = this.getObjectOrClassMethodParams(e)[0];
			return r && this.isThisParam(r) ? s + 1 : s;
		}
		parseCatchClauseParam() {
			let e = super.parseCatchClauseParam(), s = this.tsTryParseTypeAnnotation();
			return s && (e.typeAnnotation = s, this.resetEndLocation(e)), e;
		}
		tsInAmbientContext(e) {
			let { isAmbientContext: s, strict: i } = this.state;
			this.state.isAmbientContext = !0, this.state.strict = !1;
			try {
				return e();
			} finally {
				this.state.isAmbientContext = s, this.state.strict = i;
			}
		}
		parseClass(e, s, i) {
			let r = this.state.inAbstractClass;
			this.state.inAbstractClass = !!e.abstract;
			try {
				return super.parseClass(e, s, i);
			} finally {
				this.state.inAbstractClass = r;
			}
		}
		tsParseAbstractDeclaration(e, s) {
			if (this.match(80)) return e.abstract = !0, this.maybeTakeDecorators(s, this.parseClass(e, !0, !1));
			if (this.isContextual(129)) {
				if (!this.hasFollowingLineBreak()) return e.abstract = !0, this.raise(x$2.NonClassMethodPropertyHasAbstractModifer, e), this.tsParseInterfaceDeclaration(e);
			} else this.unexpected(null, 80);
		}
		parseMethod(e, s, i, r, n, o, h) {
			let c = super.parseMethod(e, s, i, r, n, o, h);
			if (c.abstract && (this.hasPlugin("estree") ? !!c.value.body : !!c.body)) {
				let { key: u } = c;
				this.raise(x$2.AbstractMethodHasImplementation, c, { methodName: u.type === "Identifier" && !c.computed ? u.name : `[${this.input.slice(u.start, u.end)}]` });
			}
			return c;
		}
		tsParseTypeParameterName() {
			return this.parseIdentifier().name;
		}
		shouldParseAsAmbientContext() {
			return !!this.getPluginOption("typescript", "dts");
		}
		parse() {
			return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.parse();
		}
		getExpression() {
			return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.getExpression();
		}
		parseExportSpecifier(e, s, i, r) {
			return !s && r ? (this.parseTypeOnlyImportExportSpecifier(e, !1, i), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, s, i, r));
		}
		parseImportSpecifier(e, s, i, r, n) {
			return !s && r ? (this.parseTypeOnlyImportExportSpecifier(e, !0, i), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, s, i, r, i ? 4098 : 4096));
		}
		parseTypeOnlyImportExportSpecifier(e, s, i) {
			let r = s ? "imported" : "local", n = s ? "local" : "exported", o = e[r], h, c = !1, l$1 = !0, u = o.loc.start;
			if (this.isContextual(93)) {
				let d$1 = this.parseIdentifier();
				if (this.isContextual(93)) {
					let y$1 = this.parseIdentifier();
					M$2(this.state.type) ? (c = !0, o = d$1, h = s ? this.parseIdentifier() : this.parseModuleExportName(), l$1 = !1) : (h = y$1, l$1 = !1);
				} else M$2(this.state.type) ? (l$1 = !1, h = s ? this.parseIdentifier() : this.parseModuleExportName()) : (c = !0, o = d$1);
			} else M$2(this.state.type) && (c = !0, s ? (o = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(o.name, o.loc.start, !0, !0)) : o = this.parseModuleExportName());
			c && i && this.raise(s ? x$2.TypeModifierIsUsedInTypeImports : x$2.TypeModifierIsUsedInTypeExports, u), e[r] = o, e[n] = h;
			let f$1 = s ? "importKind" : "exportKind";
			e[f$1] = c ? "type" : "value", l$1 && this.eatContextual(93) && (e[n] = s ? this.parseIdentifier() : this.parseModuleExportName()), e[n] || (e[n] = $$1(e[r])), s && this.checkIdentifier(e[n], c ? 4098 : 4096);
		}
	};
	function Yi$1(a) {
		if (a.type !== "MemberExpression") return !1;
		let { computed: t, property: e } = a;
		return t && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? !1 : os$1(a.object);
	}
	function Qi$1(a, t) {
		var e;
		let { type: s } = a;
		if ((e = a.extra) != null && e.parenthesized) return !1;
		if (t) {
			if (s === "Literal") {
				let { value: i } = a;
				if (typeof i == "string" || typeof i == "boolean") return !0;
			}
		} else if (s === "StringLiteral" || s === "BooleanLiteral") return !0;
		return !!(ns$1(a, t) || Zi$1(a, t) || s === "TemplateLiteral" && a.expressions.length === 0 || Yi$1(a));
	}
	function ns$1(a, t) {
		return t ? a.type === "Literal" && (typeof a.value == "number" || "bigint" in a) : a.type === "NumericLiteral" || a.type === "BigIntLiteral";
	}
	function Zi$1(a, t) {
		if (a.type === "UnaryExpression") {
			let { operator: e, argument: s } = a;
			if (e === "-" && ns$1(s, t)) return !0;
		}
		return !1;
	}
	function os$1(a) {
		return a.type === "Identifier" ? !0 : a.type !== "MemberExpression" || a.computed ? !1 : os$1(a.object);
	}
	var Vt$2 = j$1`placeholders`({
		ClassNameIsRequired: "A class name is required.",
		UnexpectedSpace: "Unexpected space in placeholder."
	}), er$2 = (a) => class extends a {
		parsePlaceholder(e) {
			if (this.match(144)) {
				let s = this.startNode();
				return this.next(), this.assertNoSpace(), s.name = super.parseIdentifier(!0), this.assertNoSpace(), this.expect(144), this.finishPlaceholder(s, e);
			}
		}
		finishPlaceholder(e, s) {
			let i = e;
			return (!i.expectedNode || !i.type) && (i = this.finishNode(i, "Placeholder")), i.expectedNode = s, i;
		}
		getTokenFromCode(e) {
			e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(144, 2) : super.getTokenFromCode(e);
		}
		parseExprAtom(e) {
			return this.parsePlaceholder("Expression") || super.parseExprAtom(e);
		}
		parseIdentifier(e) {
			return this.parsePlaceholder("Identifier") || super.parseIdentifier(e);
		}
		checkReservedWord(e, s, i, r) {
			e !== void 0 && super.checkReservedWord(e, s, i, r);
		}
		parseBindingAtom() {
			return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
		}
		isValidLVal(e, s, i) {
			return e === "Placeholder" || super.isValidLVal(e, s, i);
		}
		toAssignable(e, s) {
			e && e.type === "Placeholder" && e.expectedNode === "Expression" ? e.expectedNode = "Pattern" : super.toAssignable(e, s);
		}
		chStartsBindingIdentifier(e, s) {
			return !!(super.chStartsBindingIdentifier(e, s) || this.lookahead().type === 144);
		}
		verifyBreakContinue(e, s) {
			e.label && e.label.type === "Placeholder" || super.verifyBreakContinue(e, s);
		}
		parseExpressionStatement(e, s) {
			var i;
			if (s.type !== "Placeholder" || (i = s.extra) != null && i.parenthesized) return super.parseExpressionStatement(e, s);
			if (this.match(14)) {
				let n = e;
				return n.label = this.finishPlaceholder(s, "Identifier"), this.next(), n.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration(), this.finishNode(n, "LabeledStatement");
			}
			this.semicolon();
			let r = e;
			return r.name = s.name, this.finishPlaceholder(r, "Statement");
		}
		parseBlock(e, s, i) {
			return this.parsePlaceholder("BlockStatement") || super.parseBlock(e, s, i);
		}
		parseFunctionId(e) {
			return this.parsePlaceholder("Identifier") || super.parseFunctionId(e);
		}
		parseClass(e, s, i) {
			let r = s ? "ClassDeclaration" : "ClassExpression";
			this.next();
			let n = this.state.strict, o = this.parsePlaceholder("Identifier");
			if (o) if (this.match(81) || this.match(144) || this.match(5)) e.id = o;
			else {
				if (i || !s) return e.id = null, e.body = this.finishPlaceholder(o, "ClassBody"), this.finishNode(e, r);
				throw this.raise(Vt$2.ClassNameIsRequired, this.state.startLoc);
			}
			else this.parseClassId(e, s, i);
			return super.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!e.superClass, n), this.finishNode(e, r);
		}
		parseExport(e, s) {
			let i = this.parsePlaceholder("Identifier");
			if (!i) return super.parseExport(e, s);
			let r = e;
			if (!this.isContextual(98) && !this.match(12)) return r.specifiers = [], r.source = null, r.declaration = this.finishPlaceholder(i, "Declaration"), this.finishNode(r, "ExportNamedDeclaration");
			this.expectPlugin("exportDefaultFrom");
			let n = this.startNode();
			return n.exported = i, r.specifiers = [this.finishNode(n, "ExportDefaultSpecifier")], super.parseExport(r, s);
		}
		isExportDefaultSpecifier() {
			if (this.match(65)) {
				let e = this.nextTokenStart();
				if (this.isUnparsedContextual(e, "from") && this.input.startsWith(K$2(144), this.nextTokenStartSince(e + 4))) return !0;
			}
			return super.isExportDefaultSpecifier();
		}
		maybeParseExportDefaultSpecifier(e, s) {
			var i;
			return (i = e.specifiers) != null && i.length ? !0 : super.maybeParseExportDefaultSpecifier(e, s);
		}
		checkExport(e) {
			let { specifiers: s } = e;
			s != null && s.length && (e.specifiers = s.filter((i) => i.exported.type === "Placeholder")), super.checkExport(e), e.specifiers = s;
		}
		parseImport(e) {
			let s = this.parsePlaceholder("Identifier");
			if (!s) return super.parseImport(e);
			if (e.specifiers = [], !this.isContextual(98) && !this.match(12)) return e.source = this.finishPlaceholder(s, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
			let i = this.startNodeAtNode(s);
			return i.local = s, e.specifiers.push(this.finishNode(i, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(98), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration");
		}
		parseImportSource() {
			return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
		}
		assertNoSpace() {
			this.state.start > this.state.lastTokEndLoc.index && this.raise(Vt$2.UnexpectedSpace, this.state.lastTokEndLoc);
		}
	}, tr$2 = (a) => class extends a {
		parseV8Intrinsic() {
			if (this.match(54)) {
				let e = this.state.startLoc, s = this.startNode();
				if (this.next(), w$1(this.state.type)) {
					let i = this.parseIdentifierName(), r = this.createIdentifier(s, i);
					if (r.type = "V8IntrinsicIdentifier", this.match(10)) return r;
				}
				this.unexpected(e);
			}
		}
		parseExprAtom(e) {
			return this.parseV8Intrinsic() || super.parseExprAtom(e);
		}
	};
	function N$2(a, t) {
		let [e, s] = typeof t == "string" ? [t, {}] : t, i = Object.keys(s), r = i.length === 0;
		return a.some((n) => {
			if (typeof n == "string") return r && n === e;
			{
				let [o, h] = n;
				if (o !== e) return !1;
				for (let c of i) if (h[c] !== s[c]) return !1;
				return !0;
			}
		});
	}
	function J$1(a, t, e) {
		let s = a.find((i) => Array.isArray(i) ? i[0] === t : i === t);
		return s && Array.isArray(s) && s.length > 1 ? s[1][e] : null;
	}
	var qt$2 = [
		"minimal",
		"fsharp",
		"hack",
		"smart"
	], zt$1 = [
		"^^",
		"@@",
		"^",
		"%",
		"#"
	];
	function sr$2(a) {
		if (N$2(a, "decorators")) {
			if (N$2(a, "decorators-legacy")) throw new Error("Cannot use the decorators and decorators-legacy plugin together");
			let t = J$1(a, "decorators", "decoratorsBeforeExport");
			if (t != null && typeof t != "boolean") throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
			let e = J$1(a, "decorators", "allowCallParenthesized");
			if (e != null && typeof e != "boolean") throw new Error("'allowCallParenthesized' must be a boolean.");
		}
		if (N$2(a, "flow") && N$2(a, "typescript")) throw new Error("Cannot combine flow and typescript plugins.");
		if (N$2(a, "placeholders") && N$2(a, "v8intrinsic")) throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
		if (N$2(a, "pipelineOperator")) {
			let t = J$1(a, "pipelineOperator", "proposal");
			if (!qt$2.includes(t)) {
				let i = qt$2.map((r) => `"${r}"`).join(", ");
				throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${i}.`);
			}
			let e = ["recordAndTuple", { syntaxType: "hash" }], s = N$2(a, e);
			if (t === "hack") {
				if (N$2(a, "placeholders")) throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
				if (N$2(a, "v8intrinsic")) throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
				let i = J$1(a, "pipelineOperator", "topicToken");
				if (!zt$1.includes(i)) {
					let r = zt$1.map((n) => `"${n}"`).join(", ");
					throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${r}.`);
				}
				if (i === "#" && s) throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "hack", topicToken: "#" }]\` and \`${JSON.stringify(e)}\`.`);
			} else if (t === "smart" && s) throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "smart" }]\` and \`${JSON.stringify(e)}\`.`);
		}
		if (N$2(a, "moduleAttributes")) {
			if (N$2(a, "importAssertions") || N$2(a, "importAttributes")) throw new Error("Cannot combine importAssertions, importAttributes and moduleAttributes plugins.");
			if (J$1(a, "moduleAttributes", "version") !== "may-2020") throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
		}
		if (N$2(a, "importAssertions") && N$2(a, "importAttributes")) throw new Error("Cannot combine importAssertions and importAttributes plugins.");
		if (N$2(a, "recordAndTuple")) {
			let t = J$1(a, "recordAndTuple", "syntaxType");
			if (t != null) {
				let e = ["hash", "bar"];
				if (!e.includes(t)) throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + e.map((s) => `'${s}'`).join(", "));
			}
		}
		if (N$2(a, "asyncDoExpressions") && !N$2(a, "doExpressions")) {
			let t = /* @__PURE__ */ new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
			throw t.missingPlugins = "doExpressions", t;
		}
		if (N$2(a, "optionalChainingAssign") && J$1(a, "optionalChainingAssign", "version") !== "2023-07") throw new Error("The 'optionalChainingAssign' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is '2023-07'.");
	}
	var hs$1 = {
		estree: ri$2,
		jsx: zi$1,
		flow: qi$1,
		typescript: Gi$1,
		v8intrinsic: tr$2,
		placeholders: er$2
	}, ir$2 = Object.keys(hs$1), qe$1 = {
		sourceType: "script",
		sourceFilename: void 0,
		startColumn: 0,
		startLine: 1,
		allowAwaitOutsideFunction: !1,
		allowReturnOutsideFunction: !1,
		allowNewTargetOutsideFunction: !1,
		allowImportExportEverywhere: !1,
		allowSuperOutsideMethod: !1,
		allowUndeclaredExports: !1,
		plugins: [],
		strictMode: null,
		ranges: !1,
		tokens: !1,
		createImportExpressions: !1,
		createParenthesizedExpressions: !1,
		errorRecovery: !1,
		attachComment: !0,
		annexB: !0
	};
	function rr$2(a) {
		if (a == null) return Object.assign({}, qe$1);
		if (a.annexB != null && a.annexB !== !1) throw new Error("The `annexB` option can only be set to `false`.");
		let t = {};
		for (let s of Object.keys(qe$1)) {
			var e;
			t[s] = (e = a[s]) != null ? e : qe$1[s];
		}
		return t;
	}
	var ct$2 = class extends lt$2 {
		checkProto(t, e, s, i) {
			if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand) return;
			let r = t.key;
			if ((r.type === "Identifier" ? r.name : r.value) === "__proto__") {
				if (e) {
					this.raise(p.RecordNoProto, r);
					return;
				}
				s.used && (i ? i.doubleProtoLoc === null && (i.doubleProtoLoc = r.loc.start) : this.raise(p.DuplicateProto, r)), s.used = !0;
			}
		}
		shouldExitDescending(t, e) {
			return t.type === "ArrowFunctionExpression" && t.start === e;
		}
		getExpression() {
			this.enterInitialScopes(), this.nextToken();
			let t = this.parseExpression();
			return this.match(139) || this.unexpected(), this.finalizeRemainingComments(), t.comments = this.comments, t.errors = this.state.errors, this.options.tokens && (t.tokens = this.tokens), t;
		}
		parseExpression(t, e) {
			return t ? this.disallowInAnd(() => this.parseExpressionBase(e)) : this.allowInAnd(() => this.parseExpressionBase(e));
		}
		parseExpressionBase(t) {
			let e = this.state.startLoc, s = this.parseMaybeAssign(t);
			if (this.match(12)) {
				let i = this.startNodeAt(e);
				for (i.expressions = [s]; this.eat(12);) i.expressions.push(this.parseMaybeAssign(t));
				return this.toReferencedList(i.expressions), this.finishNode(i, "SequenceExpression");
			}
			return s;
		}
		parseMaybeAssignDisallowIn(t, e) {
			return this.disallowInAnd(() => this.parseMaybeAssign(t, e));
		}
		parseMaybeAssignAllowIn(t, e) {
			return this.allowInAnd(() => this.parseMaybeAssign(t, e));
		}
		setOptionalParametersError(t, e) {
			var s;
			t.optionalParametersLoc = (s = e == null ? void 0 : e.loc) != null ? s : this.state.startLoc;
		}
		parseMaybeAssign(t, e) {
			let s = this.state.startLoc;
			if (this.isContextual(108) && this.prodParam.hasYield) {
				let o = this.parseYield();
				return e && (o = e.call(this, o, s)), o;
			}
			let i;
			t ? i = !1 : (t = new Z$1(), i = !0);
			let { type: r } = this.state;
			(r === 10 || w$1(r)) && (this.state.potentialArrowAt = this.state.start);
			let n = this.parseMaybeConditional(t);
			if (e && (n = e.call(this, n, s)), li$2(this.state.type)) {
				let o = this.startNodeAt(s);
				if (o.operator = this.state.value, this.match(29)) {
					this.toAssignable(n, !0), o.left = n;
					let c = s.index;
					t.doubleProtoLoc != null && t.doubleProtoLoc.index >= c && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= c && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= c && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null);
				} else o.left = n;
				return this.next(), o.right = this.parseMaybeAssign(), this.checkLVal(n, { in: this.finishNode(o, "AssignmentExpression") }), o;
			} else i && this.checkExpressionErrors(t, !0);
			return n;
		}
		parseMaybeConditional(t) {
			let e = this.state.startLoc, s = this.state.potentialArrowAt, i = this.parseExprOps(t);
			return this.shouldExitDescending(i, s) ? i : this.parseConditional(i, e, t);
		}
		parseConditional(t, e, s) {
			if (this.eat(17)) {
				let i = this.startNodeAt(e);
				return i.test = t, i.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), i.alternate = this.parseMaybeAssign(), this.finishNode(i, "ConditionalExpression");
			}
			return t;
		}
		parseMaybeUnaryOrPrivate(t) {
			return this.match(138) ? this.parsePrivateName() : this.parseMaybeUnary(t);
		}
		parseExprOps(t) {
			let e = this.state.startLoc, s = this.state.potentialArrowAt, i = this.parseMaybeUnaryOrPrivate(t);
			return this.shouldExitDescending(i, s) ? i : this.parseExprOp(i, e, -1);
		}
		parseExprOp(t, e, s) {
			if (this.isPrivateName(t)) {
				let r = this.getPrivateNameSV(t);
				(s >= Ee$2(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(p.PrivateInExpectedIn, t, { identifierName: r }), this.classScope.usePrivateName(r, t.loc.start);
			}
			let i = this.state.type;
			if (pi$2(i) && (this.prodParam.hasIn || !this.match(58))) {
				let r = Ee$2(i);
				if (r > s) {
					if (i === 39) {
						if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody) return t;
						this.checkPipelineAtInfixOperator(t, e);
					}
					let n = this.startNodeAt(e);
					n.left = t, n.operator = this.state.value;
					let o = i === 41 || i === 42, h = i === 40;
					if (h && (r = Ee$2(42)), this.next(), i === 39 && this.hasPlugin(["pipelineOperator", { proposal: "minimal" }]) && this.state.type === 96 && this.prodParam.hasAwait) throw this.raise(p.UnexpectedAwaitAfterPipelineBody, this.state.startLoc);
					n.right = this.parseExprOpRightExpr(i, r);
					let c = this.finishNode(n, o || h ? "LogicalExpression" : "BinaryExpression"), l$1 = this.state.type;
					if (h && (l$1 === 41 || l$1 === 42) || o && l$1 === 40) throw this.raise(p.MixingCoalesceWithLogical, this.state.startLoc);
					return this.parseExprOp(c, e, s);
				}
			}
			return t;
		}
		parseExprOpRightExpr(t, e) {
			let s = this.state.startLoc;
			switch (t) {
				case 39: switch (this.getPluginOption("pipelineOperator", "proposal")) {
					case "hack": return this.withTopicBindingContext(() => this.parseHackPipeBody());
					case "smart": return this.withTopicBindingContext(() => {
						if (this.prodParam.hasYield && this.isContextual(108)) throw this.raise(p.PipeBodyIsTighter, this.state.startLoc);
						return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, e), s);
					});
					case "fsharp": return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(e));
				}
				default: return this.parseExprOpBaseRightExpr(t, e);
			}
		}
		parseExprOpBaseRightExpr(t, e) {
			let s = this.state.startLoc;
			return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, yi(t) ? e - 1 : e);
		}
		parseHackPipeBody() {
			var t;
			let { startLoc: e } = this.state, s = this.parseMaybeAssign();
			return Qs$1.has(s.type) && !((t = s.extra) != null && t.parenthesized) && this.raise(p.PipeUnparenthesizedBody, e, { type: s.type }), this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipeTopicUnused, e), s;
		}
		checkExponentialAfterUnary(t) {
			this.match(57) && this.raise(p.UnexpectedTokenUnaryExponentiation, t.argument);
		}
		parseMaybeUnary(t, e) {
			let s = this.state.startLoc, i = this.isContextual(96);
			if (i && this.isAwaitAllowed()) {
				this.next();
				let h = this.parseAwait(s);
				return e || this.checkExponentialAfterUnary(h), h;
			}
			let r = this.match(34), n = this.startNode();
			if (fi$2(this.state.type)) {
				n.operator = this.state.value, n.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
				let h = this.match(89);
				if (this.next(), n.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), this.state.strict && h) {
					let c = n.argument;
					c.type === "Identifier" ? this.raise(p.StrictDelete, n) : this.hasPropertyAsPrivateName(c) && this.raise(p.DeletePrivateField, n);
				}
				if (!r) return e || this.checkExponentialAfterUnary(n), this.finishNode(n, "UnaryExpression");
			}
			let o = this.parseUpdate(n, r, t);
			if (i) {
				let { type: h } = this.state;
				if ((this.hasPlugin("v8intrinsic") ? He$2(h) : He$2(h) && !this.match(54)) && !this.isAmbiguousAwait()) return this.raiseOverwrite(p.AwaitNotInAsyncContext, s), this.parseAwait(s);
			}
			return o;
		}
		parseUpdate(t, e, s) {
			if (e) {
				let n = t;
				return this.checkLVal(n.argument, { in: this.finishNode(n, "UpdateExpression") }), t;
			}
			let i = this.state.startLoc, r = this.parseExprSubscripts(s);
			if (this.checkExpressionErrors(s, !1)) return r;
			for (; ui$2(this.state.type) && !this.canInsertSemicolon();) {
				let n = this.startNodeAt(i);
				n.operator = this.state.value, n.prefix = !1, n.argument = r, this.next(), this.checkLVal(r, { in: r = this.finishNode(n, "UpdateExpression") });
			}
			return r;
		}
		parseExprSubscripts(t) {
			let e = this.state.startLoc, s = this.state.potentialArrowAt, i = this.parseExprAtom(t);
			return this.shouldExitDescending(i, s) ? i : this.parseSubscripts(i, e);
		}
		parseSubscripts(t, e, s) {
			let i = {
				optionalChainMember: !1,
				maybeAsyncArrow: this.atPossibleAsyncArrow(t),
				stop: !1
			};
			do
				t = this.parseSubscript(t, e, s, i), i.maybeAsyncArrow = !1;
			while (!i.stop);
			return t;
		}
		parseSubscript(t, e, s, i) {
			let { type: r } = this.state;
			if (!s && r === 15) return this.parseBind(t, e, s, i);
			if (ve$2(r)) return this.parseTaggedTemplateExpression(t, e, i);
			let n = !1;
			if (r === 18) {
				if (s && (this.raise(p.OptionalChainingNoNew, this.state.startLoc), this.lookaheadCharCode() === 40)) return i.stop = !0, t;
				i.optionalChainMember = n = !0, this.next();
			}
			if (!s && this.match(10)) return this.parseCoverCallAndAsyncArrowHead(t, e, i, n);
			{
				let o = this.eat(0);
				return o || n || this.eat(16) ? this.parseMember(t, e, i, o, n) : (i.stop = !0, t);
			}
		}
		parseMember(t, e, s, i, r) {
			let n = this.startNodeAt(e);
			return n.object = t, n.computed = i, i ? (n.property = this.parseExpression(), this.expect(3)) : this.match(138) ? (t.type === "Super" && this.raise(p.SuperPrivateField, e), this.classScope.usePrivateName(this.state.value, this.state.startLoc), n.property = this.parsePrivateName()) : n.property = this.parseIdentifier(!0), s.optionalChainMember ? (n.optional = r, this.finishNode(n, "OptionalMemberExpression")) : this.finishNode(n, "MemberExpression");
		}
		parseBind(t, e, s, i) {
			let r = this.startNodeAt(e);
			return r.object = t, this.next(), r.callee = this.parseNoCallExpr(), i.stop = !0, this.parseSubscripts(this.finishNode(r, "BindExpression"), e, s);
		}
		parseCoverCallAndAsyncArrowHead(t, e, s, i) {
			let r = this.state.maybeInArrowParameters, n = null;
			this.state.maybeInArrowParameters = !0, this.next();
			let o = this.startNodeAt(e);
			o.callee = t;
			let { maybeAsyncArrow: h, optionalChainMember: c } = s;
			h && (this.expressionScope.enter(Fi$1()), n = new Z$1()), c && (o.optional = i), i ? o.arguments = this.parseCallExpressionArguments(11) : o.arguments = this.parseCallExpressionArguments(11, t.type === "Import", t.type !== "Super", o, n);
			let l$1 = this.finishCallExpression(o, c);
			return h && this.shouldParseAsyncArrow() && !i ? (s.stop = !0, this.checkDestructuringPrivate(n), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), l$1 = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e), l$1)) : (h && (this.checkExpressionErrors(n, !0), this.expressionScope.exit()), this.toReferencedArguments(l$1)), this.state.maybeInArrowParameters = r, l$1;
		}
		toReferencedArguments(t, e) {
			this.toReferencedListDeep(t.arguments, e);
		}
		parseTaggedTemplateExpression(t, e, s) {
			let i = this.startNodeAt(e);
			return i.tag = t, i.quasi = this.parseTemplate(!0), s.optionalChainMember && this.raise(p.OptionalChainingNoTemplate, e), this.finishNode(i, "TaggedTemplateExpression");
		}
		atPossibleAsyncArrow(t) {
			return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && t.start === this.state.potentialArrowAt;
		}
		expectImportAttributesPlugin() {
			this.hasPlugin("importAssertions") || this.expectPlugin("importAttributes");
		}
		finishCallExpression(t, e) {
			if (t.callee.type === "Import") if (t.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectImportAttributesPlugin()), t.arguments.length === 0 || t.arguments.length > 2) this.raise(p.ImportCallArity, t, { maxArgumentCount: this.hasPlugin("importAttributes") || this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1 });
			else for (let s of t.arguments) s.type === "SpreadElement" && this.raise(p.ImportCallSpreadArgument, s);
			return this.finishNode(t, e ? "OptionalCallExpression" : "CallExpression");
		}
		parseCallExpressionArguments(t, e, s, i, r) {
			let n = [], o = !0, h = this.state.inFSharpPipelineDirectBody;
			for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(t);) {
				if (o) o = !1;
				else if (this.expect(12), this.match(t)) {
					e && !this.hasPlugin("importAttributes") && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(p.ImportCallArgumentTrailingComma, this.state.lastTokStartLoc), i && this.addTrailingCommaExtraToNode(i), this.next();
					break;
				}
				n.push(this.parseExprListItem(!1, r, s));
			}
			return this.state.inFSharpPipelineDirectBody = h, n;
		}
		shouldParseAsyncArrow() {
			return this.match(19) && !this.canInsertSemicolon();
		}
		parseAsyncArrowFromCallExpression(t, e) {
			var s;
			return this.resetPreviousNodeTrailingComments(e), this.expect(19), this.parseArrowExpression(t, e.arguments, !0, (s = e.extra) == null ? void 0 : s.trailingCommaLoc), e.innerComments && ye$1(t, e.innerComments), e.callee.trailingComments && ye$1(t, e.callee.trailingComments), t;
		}
		parseNoCallExpr() {
			let t = this.state.startLoc;
			return this.parseSubscripts(this.parseExprAtom(), t, !0);
		}
		parseExprAtom(t) {
			let e, s = null, { type: i } = this.state;
			switch (i) {
				case 79: return this.parseSuper();
				case 83: return e = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(e) : this.match(10) ? this.options.createImportExpressions ? this.parseImportCall(e) : this.finishNode(e, "Import") : (this.raise(p.UnsupportedImport, this.state.lastTokStartLoc), this.finishNode(e, "Import"));
				case 78: return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
				case 90: return this.parseDo(this.startNode(), !1);
				case 56:
				case 31: return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
				case 134: return this.parseNumericLiteral(this.state.value);
				case 135: return this.parseBigIntLiteral(this.state.value);
				case 136: return this.parseDecimalLiteral(this.state.value);
				case 133: return this.parseStringLiteral(this.state.value);
				case 84: return this.parseNullLiteral();
				case 85: return this.parseBooleanLiteral(!0);
				case 86: return this.parseBooleanLiteral(!1);
				case 10: {
					let r = this.state.potentialArrowAt === this.state.start;
					return this.parseParenAndDistinguishExpression(r);
				}
				case 2:
				case 1: return this.parseArrayLike(this.state.type === 2 ? 4 : 3, !1, !0);
				case 0: return this.parseArrayLike(3, !0, !1, t);
				case 6:
				case 7: return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);
				case 5: return this.parseObjectLike(8, !1, !1, t);
				case 68: return this.parseFunctionOrFunctionSent();
				case 26: s = this.parseDecorators();
				case 80: return this.parseClass(this.maybeTakeDecorators(s, this.startNode()), !1);
				case 77: return this.parseNewOrNewTarget();
				case 25:
				case 24: return this.parseTemplate(!1);
				case 15: {
					e = this.startNode(), this.next(), e.object = null;
					let r = e.callee = this.parseNoCallExpr();
					if (r.type === "MemberExpression") return this.finishNode(e, "BindExpression");
					throw this.raise(p.UnsupportedBind, r);
				}
				case 138: return this.raise(p.PrivateInExpectedIn, this.state.startLoc, { identifierName: this.state.value }), this.parsePrivateName();
				case 33: return this.parseTopicReferenceThenEqualsSign(54, "%");
				case 32: return this.parseTopicReferenceThenEqualsSign(44, "^");
				case 37:
				case 38: return this.parseTopicReference("hack");
				case 44:
				case 54:
				case 27: {
					let r = this.getPluginOption("pipelineOperator", "proposal");
					if (r) return this.parseTopicReference(r);
					this.unexpected();
					break;
				}
				case 47: {
					let r = this.input.codePointAt(this.nextTokenStart());
					_$1(r) || r === 62 ? this.expectOnePlugin([
						"jsx",
						"flow",
						"typescript"
					]) : this.unexpected();
					break;
				}
				default: if (w$1(i)) {
					if (this.isContextual(127) && this.lookaheadInLineCharCode() === 123) return this.parseModuleExpression();
					let r = this.state.potentialArrowAt === this.state.start, n = this.state.containsEsc, o = this.parseIdentifier();
					if (!n && o.name === "async" && !this.canInsertSemicolon()) {
						let { type: h } = this.state;
						if (h === 68) return this.resetPreviousNodeTrailingComments(o), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(o));
						if (w$1(h)) return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(o)) : o;
						if (h === 90) return this.resetPreviousNodeTrailingComments(o), this.parseDo(this.startNodeAtNode(o), !0);
					}
					return r && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(o), [o], !1)) : o;
				} else this.unexpected();
			}
		}
		parseTopicReferenceThenEqualsSign(t, e) {
			let s = this.getPluginOption("pipelineOperator", "proposal");
			if (s) return this.state.type = t, this.state.value = e, this.state.pos--, this.state.end--, this.state.endLoc = v$1(this.state.endLoc, -1), this.parseTopicReference(s);
			this.unexpected();
		}
		parseTopicReference(t) {
			let e = this.startNode(), s = this.state.startLoc, i = this.state.type;
			return this.next(), this.finishTopicReference(e, s, t, i);
		}
		finishTopicReference(t, e, s, i) {
			if (this.testTopicReferenceConfiguration(s, e, i)) {
				let r = s === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference";
				return this.topicReferenceIsAllowedInCurrentContext() || this.raise(s === "smart" ? p.PrimaryTopicNotAllowed : p.PipeTopicUnbound, e), this.registerTopicReference(), this.finishNode(t, r);
			} else throw this.raise(p.PipeTopicUnconfiguredToken, e, { token: K$2(i) });
		}
		testTopicReferenceConfiguration(t, e, s) {
			switch (t) {
				case "hack": return this.hasPlugin(["pipelineOperator", { topicToken: K$2(s) }]);
				case "smart": return s === 27;
				default: throw this.raise(p.PipeTopicRequiresHackPipes, e);
			}
		}
		parseAsyncArrowUnaryFunction(t) {
			this.prodParam.enter(Ne$2(!0, this.prodParam.hasYield));
			let e = [this.parseIdentifier()];
			return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(p.LineTerminatorBeforeArrow, this.state.curPosition()), this.expect(19), this.parseArrowExpression(t, e, !0);
		}
		parseDo(t, e) {
			this.expectPlugin("doExpressions"), e && this.expectPlugin("asyncDoExpressions"), t.async = e, this.next();
			let s = this.state.labels;
			return this.state.labels = [], e ? (this.prodParam.enter(2), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = s, this.finishNode(t, "DoExpression");
		}
		parseSuper() {
			let t = this.startNode();
			return this.next(), this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod ? this.raise(p.SuperNotAllowed, t) : !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(p.UnexpectedSuper, t), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(p.UnsupportedSuper, t), this.finishNode(t, "Super");
		}
		parsePrivateName() {
			let t = this.startNode(), e = this.startNodeAt(v$1(this.state.startLoc, 1)), s = this.state.value;
			return this.next(), t.id = this.createIdentifier(e, s), this.finishNode(t, "PrivateName");
		}
		parseFunctionOrFunctionSent() {
			let t = this.startNode();
			if (this.next(), this.prodParam.hasYield && this.match(16)) {
				let e = this.createIdentifier(this.startNodeAtNode(t), "function");
				return this.next(), this.match(103) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t, e, "sent");
			}
			return this.parseFunction(t);
		}
		parseMetaProperty(t, e, s) {
			t.meta = e;
			let i = this.state.containsEsc;
			return t.property = this.parseIdentifier(!0), (t.property.name !== s || i) && this.raise(p.UnsupportedMetaProperty, t.property, {
				target: e.name,
				onlyValidPropertyName: s
			}), this.finishNode(t, "MetaProperty");
		}
		parseImportMetaProperty(t) {
			let e = this.createIdentifier(this.startNodeAtNode(t), "import");
			if (this.next(), this.isContextual(101)) this.inModule || this.raise(p.ImportMetaOutsideModule, e), this.sawUnambiguousESM = !0;
			else if (this.isContextual(105) || this.isContextual(97)) {
				let s = this.isContextual(105);
				if (s || this.unexpected(), this.expectPlugin(s ? "sourcePhaseImports" : "deferredImportEvaluation"), !this.options.createImportExpressions) throw this.raise(p.DynamicImportPhaseRequiresImportExpressions, this.state.startLoc, { phase: this.state.value });
				return this.next(), t.phase = s ? "source" : "defer", this.parseImportCall(t);
			}
			return this.parseMetaProperty(t, e, "meta");
		}
		parseLiteralAtNode(t, e, s) {
			return this.addExtra(s, "rawValue", t), this.addExtra(s, "raw", this.input.slice(s.start, this.state.end)), s.value = t, this.next(), this.finishNode(s, e);
		}
		parseLiteral(t, e) {
			let s = this.startNode();
			return this.parseLiteralAtNode(t, e, s);
		}
		parseStringLiteral(t) {
			return this.parseLiteral(t, "StringLiteral");
		}
		parseNumericLiteral(t) {
			return this.parseLiteral(t, "NumericLiteral");
		}
		parseBigIntLiteral(t) {
			return this.parseLiteral(t, "BigIntLiteral");
		}
		parseDecimalLiteral(t) {
			return this.parseLiteral(t, "DecimalLiteral");
		}
		parseRegExpLiteral(t) {
			let e = this.startNode();
			return this.addExtra(e, "raw", this.input.slice(e.start, this.state.end)), e.pattern = t.pattern, e.flags = t.flags, this.next(), this.finishNode(e, "RegExpLiteral");
		}
		parseBooleanLiteral(t) {
			let e = this.startNode();
			return e.value = t, this.next(), this.finishNode(e, "BooleanLiteral");
		}
		parseNullLiteral() {
			let t = this.startNode();
			return this.next(), this.finishNode(t, "NullLiteral");
		}
		parseParenAndDistinguishExpression(t) {
			let e = this.state.startLoc, s;
			this.next(), this.expressionScope.enter(Oi$1());
			let i = this.state.maybeInArrowParameters, r = this.state.inFSharpPipelineDirectBody;
			this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
			let n = this.state.startLoc, o = [], h = new Z$1(), c = !0, l$1, u;
			for (; !this.match(11);) {
				if (c) c = !1;
				else if (this.expect(12, h.optionalParametersLoc === null ? null : h.optionalParametersLoc), this.match(11)) {
					u = this.state.startLoc;
					break;
				}
				if (this.match(21)) {
					let y$1 = this.state.startLoc;
					if (l$1 = this.state.startLoc, o.push(this.parseParenItem(this.parseRestBinding(), y$1)), !this.checkCommaAfterRest(41)) break;
				} else o.push(this.parseMaybeAssignAllowIn(h, this.parseParenItem));
			}
			let f$1 = this.state.lastTokEndLoc;
			this.expect(11), this.state.maybeInArrowParameters = i, this.state.inFSharpPipelineDirectBody = r;
			let d$1 = this.startNodeAt(e);
			return t && this.shouldParseArrow(o) && (d$1 = this.parseArrow(d$1)) ? (this.checkDestructuringPrivate(h), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(d$1, o, !1), d$1) : (this.expressionScope.exit(), o.length || this.unexpected(this.state.lastTokStartLoc), u && this.unexpected(u), l$1 && this.unexpected(l$1), this.checkExpressionErrors(h, !0), this.toReferencedListDeep(o, !0), o.length > 1 ? (s = this.startNodeAt(n), s.expressions = o, this.finishNode(s, "SequenceExpression"), this.resetEndLocation(s, f$1)) : s = o[0], this.wrapParenthesis(e, s));
		}
		wrapParenthesis(t, e) {
			if (!this.options.createParenthesizedExpressions) return this.addExtra(e, "parenthesized", !0), this.addExtra(e, "parenStart", t.index), this.takeSurroundingComments(e, t.index, this.state.lastTokEndLoc.index), e;
			let s = this.startNodeAt(t);
			return s.expression = e, this.finishNode(s, "ParenthesizedExpression");
		}
		shouldParseArrow(t) {
			return !this.canInsertSemicolon();
		}
		parseArrow(t) {
			if (this.eat(19)) return t;
		}
		parseParenItem(t, e) {
			return t;
		}
		parseNewOrNewTarget() {
			let t = this.startNode();
			if (this.next(), this.match(16)) {
				let e = this.createIdentifier(this.startNodeAtNode(t), "new");
				this.next();
				let s = this.parseMetaProperty(t, e, "target");
				return !this.scope.inNonArrowFunction && !this.scope.inClass && !this.options.allowNewTargetOutsideFunction && this.raise(p.UnexpectedNewTarget, s), s;
			}
			return this.parseNew(t);
		}
		parseNew(t) {
			if (this.parseNewCallee(t), this.eat(10)) {
				let e = this.parseExprList(11);
				this.toReferencedList(e), t.arguments = e;
			} else t.arguments = [];
			return this.finishNode(t, "NewExpression");
		}
		parseNewCallee(t) {
			let e = this.match(83), s = this.parseNoCallExpr();
			t.callee = s, e && (s.type === "Import" || s.type === "ImportExpression") && this.raise(p.ImportCallNotNewExpression, s);
		}
		parseTemplateElement(t) {
			let { start: e, startLoc: s, end: i, value: r } = this.state, n = e + 1, o = this.startNodeAt(v$1(s, 1));
			r === null && (t || this.raise(p.InvalidEscapeSequenceTemplate, v$1(this.state.firstInvalidTemplateEscapePos, 1)));
			let h = this.match(24), c = h ? -1 : -2, l$1 = i + c;
			o.value = {
				raw: this.input.slice(n, l$1).replace(/\r\n?/g, `
`),
				cooked: r === null ? null : r.slice(1, c)
			}, o.tail = h, this.next();
			let u = this.finishNode(o, "TemplateElement");
			return this.resetEndLocation(u, v$1(this.state.lastTokEndLoc, c)), u;
		}
		parseTemplate(t) {
			let e = this.startNode(), s = this.parseTemplateElement(t), i = [s], r = [];
			for (; !s.tail;) r.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), i.push(s = this.parseTemplateElement(t));
			return e.expressions = r, e.quasis = i, this.finishNode(e, "TemplateLiteral");
		}
		parseTemplateSubstitution() {
			return this.parseExpression();
		}
		parseObjectLike(t, e, s, i) {
			s && this.expectPlugin("recordAndTuple");
			let r = this.state.inFSharpPipelineDirectBody;
			this.state.inFSharpPipelineDirectBody = !1;
			let n = Object.create(null), o = !0, h = this.startNode();
			for (h.properties = [], this.next(); !this.match(t);) {
				if (o) o = !1;
				else if (this.expect(12), this.match(t)) {
					this.addTrailingCommaExtraToNode(h);
					break;
				}
				let l$1;
				e ? l$1 = this.parseBindingProperty() : (l$1 = this.parsePropertyDefinition(i), this.checkProto(l$1, s, n, i)), s && !this.isObjectProperty(l$1) && l$1.type !== "SpreadElement" && this.raise(p.InvalidRecordProperty, l$1), l$1.shorthand && this.addExtra(l$1, "shorthand", !0), h.properties.push(l$1);
			}
			this.next(), this.state.inFSharpPipelineDirectBody = r;
			let c = "ObjectExpression";
			return e ? c = "ObjectPattern" : s && (c = "RecordExpression"), this.finishNode(h, c);
		}
		addTrailingCommaExtraToNode(t) {
			this.addExtra(t, "trailingComma", this.state.lastTokStartLoc.index), this.addExtra(t, "trailingCommaLoc", this.state.lastTokStartLoc, !1);
		}
		maybeAsyncOrAccessorProp(t) {
			return !t.computed && t.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
		}
		parsePropertyDefinition(t) {
			let e = [];
			if (this.match(26)) for (this.hasPlugin("decorators") && this.raise(p.UnsupportedPropertyDecorator, this.state.startLoc); this.match(26);) e.push(this.parseDecorator());
			let s = this.startNode(), i = !1, r = !1, n;
			if (this.match(21)) return e.length && this.unexpected(), this.parseSpread();
			e.length && (s.decorators = e, e = []), s.method = !1, t && (n = this.state.startLoc);
			let o = this.eat(55);
			this.parsePropertyNamePrefixOperator(s);
			let h = this.state.containsEsc;
			if (this.parsePropertyName(s, t), !o && !h && this.maybeAsyncOrAccessorProp(s)) {
				let { key: c } = s, l$1 = c.name;
				l$1 === "async" && !this.hasPrecedingLineBreak() && (i = !0, this.resetPreviousNodeTrailingComments(c), o = this.eat(55), this.parsePropertyName(s)), (l$1 === "get" || l$1 === "set") && (r = !0, this.resetPreviousNodeTrailingComments(c), s.kind = l$1, this.match(55) && (o = !0, this.raise(p.AccessorIsGenerator, this.state.curPosition(), { kind: l$1 }), this.next()), this.parsePropertyName(s));
			}
			return this.parseObjPropValue(s, n, o, i, !1, r, t);
		}
		getGetterSetterExpectedParamCount(t) {
			return t.kind === "get" ? 0 : 1;
		}
		getObjectOrClassMethodParams(t) {
			return t.params;
		}
		checkGetterSetterParams(t) {
			var e;
			let s = this.getGetterSetterExpectedParamCount(t), i = this.getObjectOrClassMethodParams(t);
			i.length !== s && this.raise(t.kind === "get" ? p.BadGetterArity : p.BadSetterArity, t), t.kind === "set" && ((e = i[i.length - 1]) == null ? void 0 : e.type) === "RestElement" && this.raise(p.BadSetterRestParameter, t);
		}
		parseObjectMethod(t, e, s, i, r) {
			if (r) {
				let n = this.parseMethod(t, e, !1, !1, !1, "ObjectMethod");
				return this.checkGetterSetterParams(n), n;
			}
			if (s || e || this.match(10)) return i && this.unexpected(), t.kind = "method", t.method = !0, this.parseMethod(t, e, s, !1, !1, "ObjectMethod");
		}
		parseObjectProperty(t, e, s, i) {
			if (t.shorthand = !1, this.eat(14)) return t.value = s ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(i), this.finishNode(t, "ObjectProperty");
			if (!t.computed && t.key.type === "Identifier") {
				if (this.checkReservedWord(t.key.name, t.key.loc.start, !0, !1), s) t.value = this.parseMaybeDefault(e, $$1(t.key));
				else if (this.match(29)) {
					let r = this.state.startLoc;
					i != null ? i.shorthandAssignLoc === null && (i.shorthandAssignLoc = r) : this.raise(p.InvalidCoverInitializedName, r), t.value = this.parseMaybeDefault(e, $$1(t.key));
				} else t.value = $$1(t.key);
				return t.shorthand = !0, this.finishNode(t, "ObjectProperty");
			}
		}
		parseObjPropValue(t, e, s, i, r, n, o) {
			let h = this.parseObjectMethod(t, s, i, r, n) || this.parseObjectProperty(t, e, r, o);
			return h || this.unexpected(), h;
		}
		parsePropertyName(t, e) {
			if (this.eat(0)) t.computed = !0, t.key = this.parseMaybeAssignAllowIn(), this.expect(3);
			else {
				let { type: s, value: i } = this.state, r;
				if (M$2(s)) r = this.parseIdentifier(!0);
				else switch (s) {
					case 134:
						r = this.parseNumericLiteral(i);
						break;
					case 133:
						r = this.parseStringLiteral(i);
						break;
					case 135:
						r = this.parseBigIntLiteral(i);
						break;
					case 136:
						r = this.parseDecimalLiteral(i);
						break;
					case 138: {
						let n = this.state.startLoc;
						e != null ? e.privateKeyLoc === null && (e.privateKeyLoc = n) : this.raise(p.UnexpectedPrivateField, n), r = this.parsePrivateName();
						break;
					}
					default: this.unexpected();
				}
				t.key = r, s !== 138 && (t.computed = !1);
			}
		}
		initFunction(t, e) {
			t.id = null, t.generator = !1, t.async = e;
		}
		parseMethod(t, e, s, i, r, n, o = !1) {
			this.initFunction(t, s), t.generator = e, this.scope.enter(18 | (o ? 64 : 0) | (r ? 32 : 0)), this.prodParam.enter(Ne$2(s, t.generator)), this.parseFunctionParams(t, i);
			let h = this.parseFunctionBodyAndFinish(t, n, !0);
			return this.prodParam.exit(), this.scope.exit(), h;
		}
		parseArrayLike(t, e, s, i) {
			s && this.expectPlugin("recordAndTuple");
			let r = this.state.inFSharpPipelineDirectBody;
			this.state.inFSharpPipelineDirectBody = !1;
			let n = this.startNode();
			return this.next(), n.elements = this.parseExprList(t, !s, i, n), this.state.inFSharpPipelineDirectBody = r, this.finishNode(n, s ? "TupleExpression" : "ArrayExpression");
		}
		parseArrowExpression(t, e, s, i) {
			this.scope.enter(6);
			let r = Ne$2(s, !1);
			!this.match(5) && this.prodParam.hasIn && (r |= 8), this.prodParam.enter(r), this.initFunction(t, s);
			let n = this.state.maybeInArrowParameters;
			return e && (this.state.maybeInArrowParameters = !0, this.setArrowFunctionParameters(t, e, i)), this.state.maybeInArrowParameters = !1, this.parseFunctionBody(t, !0), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = n, this.finishNode(t, "ArrowFunctionExpression");
		}
		setArrowFunctionParameters(t, e, s) {
			this.toAssignableList(e, s, !1), t.params = e;
		}
		parseFunctionBodyAndFinish(t, e, s = !1) {
			return this.parseFunctionBody(t, !1, s), this.finishNode(t, e);
		}
		parseFunctionBody(t, e, s = !1) {
			let i = e && !this.match(5);
			if (this.expressionScope.enter(rs$1()), i) t.body = this.parseMaybeAssign(), this.checkParams(t, !1, e, !1);
			else {
				let r = this.state.strict, n = this.state.labels;
				this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | 4), t.body = this.parseBlock(!0, !1, (o) => {
					let h = !this.isSimpleParamList(t.params);
					o && h && this.raise(p.IllegalLanguageModeDirective, (t.kind === "method" || t.kind === "constructor") && t.key ? t.key.loc.end : t);
					let c = !r && this.state.strict;
					this.checkParams(t, !this.state.strict && !e && !s && !h, e, c), this.state.strict && t.id && this.checkIdentifier(t.id, 65, c);
				}), this.prodParam.exit(), this.state.labels = n;
			}
			this.expressionScope.exit();
		}
		isSimpleParameter(t) {
			return t.type === "Identifier";
		}
		isSimpleParamList(t) {
			for (let e = 0, s = t.length; e < s; e++) if (!this.isSimpleParameter(t[e])) return !1;
			return !0;
		}
		checkParams(t, e, s, i = !0) {
			let r = !e && /* @__PURE__ */ new Set(), n = { type: "FormalParameters" };
			for (let o of t.params) this.checkLVal(o, {
				in: n,
				binding: 5,
				checkClashes: r,
				strictModeChanged: i
			});
		}
		parseExprList(t, e, s, i) {
			let r = [], n = !0;
			for (; !this.eat(t);) {
				if (n) n = !1;
				else if (this.expect(12), this.match(t)) {
					i && this.addTrailingCommaExtraToNode(i), this.next();
					break;
				}
				r.push(this.parseExprListItem(e, s));
			}
			return r;
		}
		parseExprListItem(t, e, s) {
			let i;
			if (this.match(12)) t || this.raise(p.UnexpectedToken, this.state.curPosition(), { unexpected: "," }), i = null;
			else if (this.match(21)) {
				let r = this.state.startLoc;
				i = this.parseParenItem(this.parseSpread(e), r);
			} else if (this.match(17)) {
				this.expectPlugin("partialApplication"), s || this.raise(p.UnexpectedArgumentPlaceholder, this.state.startLoc);
				let r = this.startNode();
				this.next(), i = this.finishNode(r, "ArgumentPlaceholder");
			} else i = this.parseMaybeAssignAllowIn(e, this.parseParenItem);
			return i;
		}
		parseIdentifier(t) {
			let e = this.startNode(), s = this.parseIdentifierName(t);
			return this.createIdentifier(e, s);
		}
		createIdentifier(t, e) {
			return t.name = e, t.loc.identifierName = e, this.finishNode(t, "Identifier");
		}
		parseIdentifierName(t) {
			let e, { startLoc: s, type: i } = this.state;
			M$2(i) ? e = this.state.value : this.unexpected();
			let r = oi$2(i);
			return t ? r && this.replaceToken(132) : this.checkReservedWord(e, s, r, !1), this.next(), e;
		}
		checkReservedWord(t, e, s, i) {
			if (t.length > 10 || !Ei$1(t)) return;
			if (s && Si$1(t)) {
				this.raise(p.UnexpectedKeyword, e, { keyword: t });
				return;
			}
			if ((this.state.strict ? i ? Zt$1 : Yt$2 : Gt$2)(t, this.inModule)) {
				this.raise(p.UnexpectedReservedWord, e, { reservedWord: t });
				return;
			} else if (t === "yield") {
				if (this.prodParam.hasYield) {
					this.raise(p.YieldBindingIdentifier, e);
					return;
				}
			} else if (t === "await") {
				if (this.prodParam.hasAwait) {
					this.raise(p.AwaitBindingIdentifier, e);
					return;
				}
				if (this.scope.inStaticBlock) {
					this.raise(p.AwaitBindingIdentifierInStaticBlock, e);
					return;
				}
				this.expressionScope.recordAsyncArrowParametersError(e);
			} else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
				this.raise(p.ArgumentsInClass, e);
				return;
			}
		}
		isAwaitAllowed() {
			return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction);
		}
		parseAwait(t) {
			let e = this.startNodeAt(t);
			return this.expressionScope.recordParameterInitializerError(p.AwaitExpressionFormalParameter, e), this.eat(55) && this.raise(p.ObsoleteAwaitStar, e), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (e.argument = this.parseMaybeUnary(null, !0)), this.finishNode(e, "AwaitExpression");
		}
		isAmbiguousAwait() {
			if (this.hasPrecedingLineBreak()) return !0;
			let { type: t } = this.state;
			return t === 53 || t === 10 || t === 0 || ve$2(t) || t === 102 && !this.state.containsEsc || t === 137 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
		}
		parseYield() {
			let t = this.startNode();
			this.expressionScope.recordParameterInitializerError(p.YieldInParameter, t), this.next();
			let e = !1, s = null;
			if (!this.hasPrecedingLineBreak()) switch (e = this.eat(55), this.state.type) {
				case 13:
				case 139:
				case 8:
				case 11:
				case 3:
				case 9:
				case 14:
				case 12: if (!e) break;
				default: s = this.parseMaybeAssign();
			}
			return t.delegate = e, t.argument = s, this.finishNode(t, "YieldExpression");
		}
		parseImportCall(t) {
			return this.next(), t.source = this.parseMaybeAssignAllowIn(), (this.hasPlugin("importAttributes") || this.hasPlugin("importAssertions")) && (t.options = null), this.eat(12) && (this.expectImportAttributesPlugin(), this.match(11) || (t.options = this.parseMaybeAssignAllowIn(), this.eat(12))), this.expect(11), this.finishNode(t, "ImportExpression");
		}
		checkPipelineAtInfixOperator(t, e) {
			this.hasPlugin(["pipelineOperator", { proposal: "smart" }]) && t.type === "SequenceExpression" && this.raise(p.PipelineHeadSequenceExpression, e);
		}
		parseSmartPipelineBodyInStyle(t, e) {
			if (this.isSimpleReference(t)) {
				let s = this.startNodeAt(e);
				return s.callee = t, this.finishNode(s, "PipelineBareFunction");
			} else {
				let s = this.startNodeAt(e);
				return this.checkSmartPipeTopicBodyEarlyErrors(e), s.expression = t, this.finishNode(s, "PipelineTopicExpression");
			}
		}
		isSimpleReference(t) {
			switch (t.type) {
				case "MemberExpression": return !t.computed && this.isSimpleReference(t.object);
				case "Identifier": return !0;
				default: return !1;
			}
		}
		checkSmartPipeTopicBodyEarlyErrors(t) {
			if (this.match(19)) throw this.raise(p.PipelineBodyNoArrow, this.state.startLoc);
			this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipelineTopicUnused, t);
		}
		withTopicBindingContext(t) {
			let e = this.state.topicContext;
			this.state.topicContext = {
				maxNumOfResolvableTopics: 1,
				maxTopicIndex: null
			};
			try {
				return t();
			} finally {
				this.state.topicContext = e;
			}
		}
		withSmartMixTopicForbiddingContext(t) {
			if (this.hasPlugin(["pipelineOperator", { proposal: "smart" }])) {
				let e = this.state.topicContext;
				this.state.topicContext = {
					maxNumOfResolvableTopics: 0,
					maxTopicIndex: null
				};
				try {
					return t();
				} finally {
					this.state.topicContext = e;
				}
			} else return t();
		}
		withSoloAwaitPermittingContext(t) {
			let e = this.state.soloAwait;
			this.state.soloAwait = !0;
			try {
				return t();
			} finally {
				this.state.soloAwait = e;
			}
		}
		allowInAnd(t) {
			let e = this.prodParam.currentFlags();
			if (8 & ~e) {
				this.prodParam.enter(e | 8);
				try {
					return t();
				} finally {
					this.prodParam.exit();
				}
			}
			return t();
		}
		disallowInAnd(t) {
			let e = this.prodParam.currentFlags();
			if (8 & e) {
				this.prodParam.enter(e & -9);
				try {
					return t();
				} finally {
					this.prodParam.exit();
				}
			}
			return t();
		}
		registerTopicReference() {
			this.state.topicContext.maxTopicIndex = 0;
		}
		topicReferenceIsAllowedInCurrentContext() {
			return this.state.topicContext.maxNumOfResolvableTopics >= 1;
		}
		topicReferenceWasUsedInCurrentContext() {
			return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
		}
		parseFSharpPipelineBody(t) {
			let e = this.state.startLoc;
			this.state.potentialArrowAt = this.state.start;
			let s = this.state.inFSharpPipelineDirectBody;
			this.state.inFSharpPipelineDirectBody = !0;
			let i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, t);
			return this.state.inFSharpPipelineDirectBody = s, i;
		}
		parseModuleExpression() {
			this.expectPlugin("moduleBlocks");
			let t = this.startNode();
			this.next(), this.match(5) || this.unexpected(null, 5);
			let e = this.startNodeAt(this.state.endLoc);
			this.next();
			let s = this.initializeScopes(!0);
			this.enterInitialScopes();
			try {
				t.body = this.parseProgram(e, 8, "module");
			} finally {
				s();
			}
			return this.finishNode(t, "ModuleExpression");
		}
		parsePropertyNamePrefixOperator(t) {}
	}, ze$2 = { kind: 1 }, ar$2 = { kind: 2 }, nr$2 = /[\uD800-\uDFFF]/u, Ke$2 = /in(?:stanceof)?/y;
	function or$2(a, t) {
		for (let e = 0; e < a.length; e++) {
			let s = a[e], { type: i } = s;
			if (typeof i == "number") {
				if (i === 138) {
					let { loc: r, start: n, value: o, end: h } = s, c = n + 1, l$1 = v$1(r.start, 1);
					a.splice(e, 1, new O$2({
						type: R$2(27),
						value: "#",
						start: n,
						end: c,
						startLoc: r.start,
						endLoc: l$1
					}), new O$2({
						type: R$2(132),
						value: o,
						start: c,
						end: h,
						startLoc: l$1,
						endLoc: r.end
					})), e++;
					continue;
				}
				if (ve$2(i)) {
					let { loc: r, start: n, value: o, end: h } = s, c = n + 1, l$1 = v$1(r.start, 1), u;
					t.charCodeAt(n) === 96 ? u = new O$2({
						type: R$2(22),
						value: "`",
						start: n,
						end: c,
						startLoc: r.start,
						endLoc: l$1
					}) : u = new O$2({
						type: R$2(8),
						value: "}",
						start: n,
						end: c,
						startLoc: r.start,
						endLoc: l$1
					});
					let f$1, d$1, y$1, E$1;
					i === 24 ? (d$1 = h - 1, y$1 = v$1(r.end, -1), f$1 = o === null ? null : o.slice(1, -1), E$1 = new O$2({
						type: R$2(22),
						value: "`",
						start: d$1,
						end: h,
						startLoc: y$1,
						endLoc: r.end
					})) : (d$1 = h - 2, y$1 = v$1(r.end, -2), f$1 = o === null ? null : o.slice(1, -2), E$1 = new O$2({
						type: R$2(23),
						value: "${",
						start: d$1,
						end: h,
						startLoc: y$1,
						endLoc: r.end
					})), a.splice(e, 1, u, new O$2({
						type: R$2(20),
						value: f$1,
						start: c,
						end: d$1,
						startLoc: l$1,
						endLoc: y$1
					}), E$1), e += 2;
					continue;
				}
				s.type = R$2(i);
			}
		}
		return a;
	}
	var pt$2 = class extends ct$2 {
		parseTopLevel(t, e) {
			return t.program = this.parseProgram(e), t.comments = this.comments, this.options.tokens && (t.tokens = or$2(this.tokens, this.input)), this.finishNode(t, "File");
		}
		parseProgram(t, e = 139, s = this.options.sourceType) {
			if (t.sourceType = s, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, !0, !0, e), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0) for (let [r, n] of Array.from(this.scope.undefinedExports)) this.raise(p.ModuleExportUndefined, n, { localName: r });
			let i;
			return e === 139 ? i = this.finishNode(t, "Program") : i = this.finishNodeAt(t, "Program", v$1(this.state.startLoc, -1)), i;
		}
		stmtToDirective(t) {
			let e = t;
			e.type = "Directive", e.value = e.expression, delete e.expression;
			let s = e.value, i = s.value, r = this.input.slice(s.start, s.end), n = s.value = r.slice(1, -1);
			return this.addExtra(s, "raw", r), this.addExtra(s, "rawValue", n), this.addExtra(s, "expressionValue", i), s.type = "DirectiveLiteral", e;
		}
		parseInterpreterDirective() {
			if (!this.match(28)) return null;
			let t = this.startNode();
			return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective");
		}
		isLet() {
			return this.isContextual(100) ? this.hasFollowingBindingAtom() : !1;
		}
		chStartsBindingIdentifier(t, e) {
			if (_$1(t)) {
				if (Ke$2.lastIndex = e, Ke$2.test(this.input)) {
					let s = this.codePointAtPos(Ke$2.lastIndex);
					if (!Q$2(s) && s !== 92) return !1;
				}
				return !0;
			} else return t === 92;
		}
		chStartsBindingPattern(t) {
			return t === 91 || t === 123;
		}
		hasFollowingBindingAtom() {
			let t = this.nextTokenStart(), e = this.codePointAtPos(t);
			return this.chStartsBindingPattern(e) || this.chStartsBindingIdentifier(e, t);
		}
		hasInLineFollowingBindingIdentifierOrBrace() {
			let t = this.nextTokenInLineStart(), e = this.codePointAtPos(t);
			return e === 123 || this.chStartsBindingIdentifier(e, t);
		}
		startsUsingForOf() {
			let { type: t, containsEsc: e } = this.lookahead();
			if (t === 102 && !e) return !1;
			if (w$1(t) && !this.hasFollowingLineBreak()) return this.expectPlugin("explicitResourceManagement"), !0;
		}
		startsAwaitUsing() {
			let t = this.nextTokenInLineStart();
			if (this.isUnparsedContextual(t, "using")) {
				t = this.nextTokenInLineStartSince(t + 5);
				let e = this.codePointAtPos(t);
				if (this.chStartsBindingIdentifier(e, t)) return this.expectPlugin("explicitResourceManagement"), !0;
			}
			return !1;
		}
		parseModuleItem() {
			return this.parseStatementLike(15);
		}
		parseStatementListItem() {
			return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8));
		}
		parseStatementOrSloppyAnnexBFunctionDeclaration(t = !1) {
			let e = 0;
			return this.options.annexB && !this.state.strict && (e |= 4, t && (e |= 8)), this.parseStatementLike(e);
		}
		parseStatement() {
			return this.parseStatementLike(0);
		}
		parseStatementLike(t) {
			let e = null;
			return this.match(26) && (e = this.parseDecorators(!0)), this.parseStatementContent(t, e);
		}
		parseStatementContent(t, e) {
			let s = this.state.type, i = this.startNode(), r = !!(t & 2), n = !!(t & 4), o = t & 1;
			switch (s) {
				case 60: return this.parseBreakContinueStatement(i, !0);
				case 63: return this.parseBreakContinueStatement(i, !1);
				case 64: return this.parseDebuggerStatement(i);
				case 90: return this.parseDoWhileStatement(i);
				case 91: return this.parseForStatement(i);
				case 68:
					if (this.lookaheadCharCode() === 46) break;
					return n || this.raise(this.state.strict ? p.StrictFunction : this.options.annexB ? p.SloppyFunctionAnnexB : p.SloppyFunction, this.state.startLoc), this.parseFunctionStatement(i, !1, !r && n);
				case 80: return r || this.unexpected(), this.parseClass(this.maybeTakeDecorators(e, i), !0);
				case 69: return this.parseIfStatement(i);
				case 70: return this.parseReturnStatement(i);
				case 71: return this.parseSwitchStatement(i);
				case 72: return this.parseThrowStatement(i);
				case 73: return this.parseTryStatement(i);
				case 96:
					if (!this.state.containsEsc && this.startsAwaitUsing()) return this.isAwaitAllowed() ? r || this.raise(p.UnexpectedLexicalDeclaration, i) : this.raise(p.AwaitUsingNotInAsyncContext, i), this.next(), this.parseVarStatement(i, "await using");
					break;
				case 107:
					if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifierOrBrace()) break;
					return this.expectPlugin("explicitResourceManagement"), !this.scope.inModule && this.scope.inTopLevel ? this.raise(p.UnexpectedUsingDeclaration, this.state.startLoc) : r || this.raise(p.UnexpectedLexicalDeclaration, this.state.startLoc), this.parseVarStatement(i, "using");
				case 100: {
					if (this.state.containsEsc) break;
					let l$1 = this.nextTokenStart(), u = this.codePointAtPos(l$1);
					if (u !== 91 && (!r && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(u, l$1) && u !== 123)) break;
				}
				case 75: r || this.raise(p.UnexpectedLexicalDeclaration, this.state.startLoc);
				case 74: {
					let l$1 = this.state.value;
					return this.parseVarStatement(i, l$1);
				}
				case 92: return this.parseWhileStatement(i);
				case 76: return this.parseWithStatement(i);
				case 5: return this.parseBlock();
				case 13: return this.parseEmptyStatement(i);
				case 83: {
					let l$1 = this.lookaheadCharCode();
					if (l$1 === 40 || l$1 === 46) break;
				}
				case 82: {
					!this.options.allowImportExportEverywhere && !o && this.raise(p.UnexpectedImportExport, this.state.startLoc), this.next();
					let l$1;
					return s === 83 ? (l$1 = this.parseImport(i), l$1.type === "ImportDeclaration" && (!l$1.importKind || l$1.importKind === "value") && (this.sawUnambiguousESM = !0)) : (l$1 = this.parseExport(i, e), (l$1.type === "ExportNamedDeclaration" && (!l$1.exportKind || l$1.exportKind === "value") || l$1.type === "ExportAllDeclaration" && (!l$1.exportKind || l$1.exportKind === "value") || l$1.type === "ExportDefaultDeclaration") && (this.sawUnambiguousESM = !0)), this.assertModuleNodeAllowed(l$1), l$1;
				}
				default: if (this.isAsyncFunction()) return r || this.raise(p.AsyncFunctionInSingleStatementContext, this.state.startLoc), this.next(), this.parseFunctionStatement(i, !0, !r && n);
			}
			let h = this.state.value, c = this.parseExpression();
			return w$1(s) && c.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(i, h, c, t) : this.parseExpressionStatement(i, c, e);
		}
		assertModuleNodeAllowed(t) {
			!this.options.allowImportExportEverywhere && !this.inModule && this.raise(p.ImportOutsideModule, t);
		}
		decoratorsEnabledBeforeExport() {
			return this.hasPlugin("decorators-legacy") ? !0 : this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== !1;
		}
		maybeTakeDecorators(t, e, s) {
			return t && (e.decorators && e.decorators.length > 0 ? (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") != "boolean" && this.raise(p.DecoratorsBeforeAfterExport, e.decorators[0]), e.decorators.unshift(...t)) : e.decorators = t, this.resetStartLocationFromNode(e, t[0]), s && this.resetStartLocationFromNode(s, e)), e;
		}
		canHaveLeadingDecorator() {
			return this.match(80);
		}
		parseDecorators(t) {
			let e = [];
			do
				e.push(this.parseDecorator());
			while (this.match(26));
			if (this.match(82)) t || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(p.DecoratorExportClass, this.state.startLoc);
			else if (!this.canHaveLeadingDecorator()) throw this.raise(p.UnexpectedLeadingDecorator, this.state.startLoc);
			return e;
		}
		parseDecorator() {
			this.expectOnePlugin(["decorators", "decorators-legacy"]);
			let t = this.startNode();
			if (this.next(), this.hasPlugin("decorators")) {
				let e = this.state.startLoc, s;
				if (this.match(10)) {
					let i = this.state.startLoc;
					this.next(), s = this.parseExpression(), this.expect(11), s = this.wrapParenthesis(i, s);
					let r = this.state.startLoc;
					t.expression = this.parseMaybeDecoratorArguments(s), this.getPluginOption("decorators", "allowCallParenthesized") === !1 && t.expression !== s && this.raise(p.DecoratorArgumentsOutsideParentheses, r);
				} else {
					for (s = this.parseIdentifier(!1); this.eat(16);) {
						let i = this.startNodeAt(e);
						i.object = s, this.match(138) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), i.property = this.parsePrivateName()) : i.property = this.parseIdentifier(!0), i.computed = !1, s = this.finishNode(i, "MemberExpression");
					}
					t.expression = this.parseMaybeDecoratorArguments(s);
				}
			} else t.expression = this.parseExprSubscripts();
			return this.finishNode(t, "Decorator");
		}
		parseMaybeDecoratorArguments(t) {
			if (this.eat(10)) {
				let e = this.startNodeAtNode(t);
				return e.callee = t, e.arguments = this.parseCallExpressionArguments(11, !1), this.toReferencedList(e.arguments), this.finishNode(e, "CallExpression");
			}
			return t;
		}
		parseBreakContinueStatement(t, e) {
			return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, e), this.finishNode(t, e ? "BreakStatement" : "ContinueStatement");
		}
		verifyBreakContinue(t, e) {
			let s;
			for (s = 0; s < this.state.labels.length; ++s) {
				let i = this.state.labels[s];
				if ((t.label == null || i.name === t.label.name) && (i.kind != null && (e || i.kind === 1) || t.label && e)) break;
			}
			if (s === this.state.labels.length) {
				let i = e ? "BreakStatement" : "ContinueStatement";
				this.raise(p.IllegalBreakContinue, t, { type: i });
			}
		}
		parseDebuggerStatement(t) {
			return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
		}
		parseHeaderExpression() {
			this.expect(10);
			let t = this.parseExpression();
			return this.expect(11), t;
		}
		parseDoWhileStatement(t) {
			return this.next(), this.state.labels.push(ze$2), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
		}
		parseForStatement(t) {
			this.next(), this.state.labels.push(ze$2);
			let e = null;
			if (this.isAwaitAllowed() && this.eatContextual(96) && (e = this.state.lastTokStartLoc), this.scope.enter(0), this.expect(10), this.match(13)) return e !== null && this.unexpected(e), this.parseFor(t, null);
			let s = this.isContextual(100);
			{
				let h = this.isContextual(96) && this.startsAwaitUsing(), c = h || this.isContextual(107) && this.startsUsingForOf(), l$1 = s && this.hasFollowingBindingAtom() || c;
				if (this.match(74) || this.match(75) || l$1) {
					let u = this.startNode(), f$1;
					h ? (f$1 = "await using", this.isAwaitAllowed() || this.raise(p.AwaitUsingNotInAsyncContext, this.state.startLoc), this.next()) : f$1 = this.state.value, this.next(), this.parseVar(u, !0, f$1);
					let d$1 = this.finishNode(u, "VariableDeclaration"), y$1 = this.match(58);
					return y$1 && c && this.raise(p.ForInUsing, d$1), (y$1 || this.isContextual(102)) && d$1.declarations.length === 1 ? this.parseForIn(t, d$1, e) : (e !== null && this.unexpected(e), this.parseFor(t, d$1));
				}
			}
			let i = this.isContextual(95), r = new Z$1(), n = this.parseExpression(!0, r), o = this.isContextual(102);
			if (o && (s && this.raise(p.ForOfLet, n), e === null && i && n.type === "Identifier" && this.raise(p.ForOfAsync, n)), o || this.match(58)) {
				this.checkDestructuringPrivate(r), this.toAssignable(n, !0);
				let h = o ? "ForOfStatement" : "ForInStatement";
				return this.checkLVal(n, { in: { type: h } }), this.parseForIn(t, n, e);
			} else this.checkExpressionErrors(r, !0);
			return e !== null && this.unexpected(e), this.parseFor(t, n);
		}
		parseFunctionStatement(t, e, s) {
			return this.next(), this.parseFunction(t, 1 | (s ? 2 : 0) | (e ? 8 : 0));
		}
		parseIfStatement(t) {
			return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration(), t.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null, this.finishNode(t, "IfStatement");
		}
		parseReturnStatement(t) {
			return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(p.IllegalReturn, this.state.startLoc), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
		}
		parseSwitchStatement(t) {
			this.next(), t.discriminant = this.parseHeaderExpression();
			let e = t.cases = [];
			this.expect(5), this.state.labels.push(ar$2), this.scope.enter(0);
			let s;
			for (let i; !this.match(8);) if (this.match(61) || this.match(65)) {
				let r = this.match(61);
				s && this.finishNode(s, "SwitchCase"), e.push(s = this.startNode()), s.consequent = [], this.next(), r ? s.test = this.parseExpression() : (i && this.raise(p.MultipleDefaultsInSwitch, this.state.lastTokStartLoc), i = !0, s.test = null), this.expect(14);
			} else s ? s.consequent.push(this.parseStatementListItem()) : this.unexpected();
			return this.scope.exit(), s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
		}
		parseThrowStatement(t) {
			return this.next(), this.hasPrecedingLineBreak() && this.raise(p.NewlineAfterThrow, this.state.lastTokEndLoc), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
		}
		parseCatchClauseParam() {
			let t = this.parseBindingAtom();
			return this.scope.enter(this.options.annexB && t.type === "Identifier" ? 8 : 0), this.checkLVal(t, {
				in: { type: "CatchClause" },
				binding: 9
			}), t;
		}
		parseTryStatement(t) {
			if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(62)) {
				let e = this.startNode();
				this.next(), this.match(10) ? (this.expect(10), e.param = this.parseCatchClauseParam(), this.expect(11)) : (e.param = null, this.scope.enter(0)), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(!1, !1)), this.scope.exit(), t.handler = this.finishNode(e, "CatchClause");
			}
			return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(p.NoCatchOrFinally, t), this.finishNode(t, "TryStatement");
		}
		parseVarStatement(t, e, s = !1) {
			return this.next(), this.parseVar(t, !1, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration");
		}
		parseWhileStatement(t) {
			return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(ze$2), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
		}
		parseWithStatement(t) {
			return this.state.strict && this.raise(p.StrictWith, this.state.startLoc), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.finishNode(t, "WithStatement");
		}
		parseEmptyStatement(t) {
			return this.next(), this.finishNode(t, "EmptyStatement");
		}
		parseLabeledStatement(t, e, s, i) {
			for (let n of this.state.labels) n.name === e && this.raise(p.LabelRedeclaration, s, { labelName: e });
			let r = ci$2(this.state.type) ? 1 : this.match(71) ? 2 : null;
			for (let n = this.state.labels.length - 1; n >= 0; n--) {
				let o = this.state.labels[n];
				if (o.statementStart === t.start) o.statementStart = this.state.start, o.kind = r;
				else break;
			}
			return this.state.labels.push({
				name: e,
				kind: r,
				statementStart: this.state.start
			}), t.body = i & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0) : this.parseStatement(), this.state.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement");
		}
		parseExpressionStatement(t, e, s) {
			return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
		}
		parseBlock(t = !1, e = !0, s) {
			let i = this.startNode();
			return t && this.state.strictErrors.clear(), this.expect(5), e && this.scope.enter(0), this.parseBlockBody(i, t, !1, 8, s), e && this.scope.exit(), this.finishNode(i, "BlockStatement");
		}
		isValidDirective(t) {
			return t.type === "ExpressionStatement" && t.expression.type === "StringLiteral" && !t.expression.extra.parenthesized;
		}
		parseBlockBody(t, e, s, i, r) {
			let n = t.body = [], o = t.directives = [];
			this.parseBlockOrModuleBlockBody(n, e ? o : void 0, s, i, r);
		}
		parseBlockOrModuleBlockBody(t, e, s, i, r) {
			let n = this.state.strict, o = !1, h = !1;
			for (; !this.match(i);) {
				let c = s ? this.parseModuleItem() : this.parseStatementListItem();
				if (e && !h) {
					if (this.isValidDirective(c)) {
						let l$1 = this.stmtToDirective(c);
						e.push(l$1), !o && l$1.value.value === "use strict" && (o = !0, this.setStrict(!0));
						continue;
					}
					h = !0, this.state.strictErrors.clear();
				}
				t.push(c);
			}
			r?.call(this, o), n || this.setStrict(!1), this.next();
		}
		parseFor(t, e) {
			return t.init = e, this.semicolon(!1), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
		}
		parseForIn(t, e, s) {
			let i = this.match(58);
			return this.next(), i ? s !== null && this.unexpected(s) : t.await = s !== null, e.type === "VariableDeclaration" && e.declarations[0].init != null && (!i || !this.options.annexB || this.state.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(p.ForInOfLoopInitializer, e, { type: i ? "ForInStatement" : "ForOfStatement" }), e.type === "AssignmentPattern" && this.raise(p.InvalidLhs, e, { ancestor: { type: "ForStatement" } }), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement");
		}
		parseVar(t, e, s, i = !1) {
			let r = t.declarations = [];
			for (t.kind = s;;) {
				let n = this.startNode();
				if (this.parseVarId(n, s), n.init = this.eat(29) ? e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, n.init === null && !i && (n.id.type !== "Identifier" && !(e && (this.match(58) || this.isContextual(102))) ? this.raise(p.DeclarationMissingInitializer, this.state.lastTokEndLoc, { kind: "destructuring" }) : (s === "const" || s === "using" || s === "await using") && !(this.match(58) || this.isContextual(102)) && this.raise(p.DeclarationMissingInitializer, this.state.lastTokEndLoc, { kind: s })), r.push(this.finishNode(n, "VariableDeclarator")), !this.eat(12)) break;
			}
			return t;
		}
		parseVarId(t, e) {
			let s = this.parseBindingAtom();
			(e === "using" || e === "await using") && (s.type === "ArrayPattern" || s.type === "ObjectPattern") && this.raise(p.UsingDeclarationHasBindingPattern, s.loc.start), this.checkLVal(s, {
				in: { type: "VariableDeclarator" },
				binding: e === "var" ? 5 : 8201
			}), t.id = s;
		}
		parseAsyncFunctionExpression(t) {
			return this.parseFunction(t, 8);
		}
		parseFunction(t, e = 0) {
			let s = e & 2, i = !!(e & 1), r = i && !(e & 4), n = !!(e & 8);
			this.initFunction(t, n), this.match(55) && (s && this.raise(p.GeneratorInSingleStatementContext, this.state.startLoc), this.next(), t.generator = !0), i && (t.id = this.parseFunctionId(r));
			let o = this.state.maybeInArrowParameters;
			return this.state.maybeInArrowParameters = !1, this.scope.enter(2), this.prodParam.enter(Ne$2(n, t.generator)), i || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, !1), this.withSmartMixTopicForbiddingContext(() => {
				this.parseFunctionBodyAndFinish(t, i ? "FunctionDeclaration" : "FunctionExpression");
			}), this.prodParam.exit(), this.scope.exit(), i && !s && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = o, t;
		}
		parseFunctionId(t) {
			return t || w$1(this.state.type) ? this.parseIdentifier() : null;
		}
		parseFunctionParams(t, e) {
			this.expect(10), this.expressionScope.enter(Mi$1()), t.params = this.parseBindingList(11, 41, 2 | (e ? 4 : 0)), this.expressionScope.exit();
		}
		registerFunctionStatementId(t) {
			t.id && this.scope.declareName(t.id.name, !this.options.annexB || this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? 5 : 8201 : 17, t.id.loc.start);
		}
		parseClass(t, e, s) {
			this.next();
			let i = this.state.strict;
			return this.state.strict = !0, this.parseClassId(t, e, s), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, i), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
		}
		isClassProperty() {
			return this.match(29) || this.match(13) || this.match(8);
		}
		isClassMethod() {
			return this.match(10);
		}
		nameIsConstructor(t) {
			return t.type === "Identifier" && t.name === "constructor" || t.type === "StringLiteral" && t.value === "constructor";
		}
		isNonstaticConstructor(t) {
			return !t.computed && !t.static && this.nameIsConstructor(t.key);
		}
		parseClassBody(t, e) {
			this.classScope.enter();
			let s = {
				hadConstructor: !1,
				hadSuperClass: t
			}, i = [], r = this.startNode();
			if (r.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
				for (; !this.match(8);) {
					if (this.eat(13)) {
						if (i.length > 0) throw this.raise(p.DecoratorSemicolon, this.state.lastTokEndLoc);
						continue;
					}
					if (this.match(26)) {
						i.push(this.parseDecorator());
						continue;
					}
					let n = this.startNode();
					i.length && (n.decorators = i, this.resetStartLocationFromNode(n, i[0]), i = []), this.parseClassMember(r, n, s), n.kind === "constructor" && n.decorators && n.decorators.length > 0 && this.raise(p.DecoratorConstructor, n);
				}
			}), this.state.strict = e, this.next(), i.length) throw this.raise(p.TrailingDecorator, this.state.startLoc);
			return this.classScope.exit(), this.finishNode(r, "ClassBody");
		}
		parseClassMemberFromModifier(t, e) {
			let s = this.parseIdentifier(!0);
			if (this.isClassMethod()) {
				let i = e;
				return i.kind = "method", i.computed = !1, i.key = s, i.static = !1, this.pushClassMethod(t, i, !1, !1, !1, !1), !0;
			} else if (this.isClassProperty()) {
				let i = e;
				return i.computed = !1, i.key = s, i.static = !1, t.body.push(this.parseClassProperty(i)), !0;
			}
			return this.resetPreviousNodeTrailingComments(s), !1;
		}
		parseClassMember(t, e, s) {
			let i = this.isContextual(106);
			if (i) {
				if (this.parseClassMemberFromModifier(t, e)) return;
				if (this.eat(5)) {
					this.parseClassStaticBlock(t, e);
					return;
				}
			}
			this.parseClassMemberWithIsStatic(t, e, s, i);
		}
		parseClassMemberWithIsStatic(t, e, s, i) {
			let r = e, n = e, o = e, h = e, c = e, l$1 = r, u = r;
			if (e.static = i, this.parsePropertyNamePrefixOperator(e), this.eat(55)) {
				l$1.kind = "method";
				let S$1 = this.match(138);
				if (this.parseClassElementName(l$1), S$1) {
					this.pushClassPrivateMethod(t, n, !0, !1);
					return;
				}
				this.isNonstaticConstructor(r) && this.raise(p.ConstructorIsGenerator, r.key), this.pushClassMethod(t, r, !0, !1, !1, !1);
				return;
			}
			let f$1 = !this.state.containsEsc && w$1(this.state.type), d$1 = this.parseClassElementName(e), y$1 = f$1 ? d$1.name : null, E$1 = this.isPrivateName(d$1), L$2 = this.state.startLoc;
			if (this.parsePostMemberNameModifiers(u), this.isClassMethod()) {
				if (l$1.kind = "method", E$1) {
					this.pushClassPrivateMethod(t, n, !1, !1);
					return;
				}
				let S$1 = this.isNonstaticConstructor(r), I$1 = !1;
				S$1 && (r.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(p.DuplicateConstructor, d$1), S$1 && this.hasPlugin("typescript") && e.override && this.raise(p.OverrideOnConstructor, d$1), s.hadConstructor = !0, I$1 = s.hadSuperClass), this.pushClassMethod(t, r, !1, !1, S$1, I$1);
			} else if (this.isClassProperty()) E$1 ? this.pushClassPrivateProperty(t, h) : this.pushClassProperty(t, o);
			else if (y$1 === "async" && !this.isLineTerminator()) {
				this.resetPreviousNodeTrailingComments(d$1);
				let S$1 = this.eat(55);
				u.optional && this.unexpected(L$2), l$1.kind = "method";
				let I$1 = this.match(138);
				this.parseClassElementName(l$1), this.parsePostMemberNameModifiers(u), I$1 ? this.pushClassPrivateMethod(t, n, S$1, !0) : (this.isNonstaticConstructor(r) && this.raise(p.ConstructorIsAsync, r.key), this.pushClassMethod(t, r, S$1, !0, !1, !1));
			} else if ((y$1 === "get" || y$1 === "set") && !(this.match(55) && this.isLineTerminator())) {
				this.resetPreviousNodeTrailingComments(d$1), l$1.kind = y$1;
				let S$1 = this.match(138);
				this.parseClassElementName(r), S$1 ? this.pushClassPrivateMethod(t, n, !1, !1) : (this.isNonstaticConstructor(r) && this.raise(p.ConstructorIsAccessor, r.key), this.pushClassMethod(t, r, !1, !1, !1, !1)), this.checkGetterSetterParams(r);
			} else if (y$1 === "accessor" && !this.isLineTerminator()) {
				this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(d$1);
				let S$1 = this.match(138);
				this.parseClassElementName(o), this.pushClassAccessorProperty(t, c, S$1);
			} else this.isLineTerminator() ? E$1 ? this.pushClassPrivateProperty(t, h) : this.pushClassProperty(t, o) : this.unexpected();
		}
		parseClassElementName(t) {
			let { type: e, value: s } = this.state;
			if ((e === 132 || e === 133) && t.static && s === "prototype" && this.raise(p.StaticPrototype, this.state.startLoc), e === 138) {
				s === "constructor" && this.raise(p.ConstructorClassPrivateField, this.state.startLoc);
				let i = this.parsePrivateName();
				return t.key = i, i;
			}
			return this.parsePropertyName(t), t.key;
		}
		parseClassStaticBlock(t, e) {
			var s;
			this.scope.enter(208);
			let i = this.state.labels;
			this.state.labels = [], this.prodParam.enter(0);
			let r = e.body = [];
			this.parseBlockOrModuleBlockBody(r, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = i, t.body.push(this.finishNode(e, "StaticBlock")), (s = e.decorators) != null && s.length && this.raise(p.DecoratorStaticBlock, e);
		}
		pushClassProperty(t, e) {
			!e.computed && this.nameIsConstructor(e.key) && this.raise(p.ConstructorClassField, e.key), t.body.push(this.parseClassProperty(e));
		}
		pushClassPrivateProperty(t, e) {
			let s = this.parseClassPrivateProperty(e);
			t.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), 0, s.key.loc.start);
		}
		pushClassAccessorProperty(t, e, s) {
			!s && !e.computed && this.nameIsConstructor(e.key) && this.raise(p.ConstructorClassField, e.key);
			let i = this.parseClassAccessorProperty(e);
			t.body.push(i), s && this.classScope.declarePrivateName(this.getPrivateNameSV(i.key), 0, i.key.loc.start);
		}
		pushClassMethod(t, e, s, i, r, n) {
			t.body.push(this.parseMethod(e, s, i, r, n, "ClassMethod", !0));
		}
		pushClassPrivateMethod(t, e, s, i) {
			let r = this.parseMethod(e, s, i, !1, !1, "ClassPrivateMethod", !0);
			t.body.push(r);
			let n = r.kind === "get" ? r.static ? 6 : 2 : r.kind === "set" ? r.static ? 5 : 1 : 0;
			this.declareClassPrivateMethodInScope(r, n);
		}
		declareClassPrivateMethodInScope(t, e) {
			this.classScope.declarePrivateName(this.getPrivateNameSV(t.key), e, t.key.loc.start);
		}
		parsePostMemberNameModifiers(t) {}
		parseClassPrivateProperty(t) {
			return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty");
		}
		parseClassProperty(t) {
			return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty");
		}
		parseClassAccessorProperty(t) {
			return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassAccessorProperty");
		}
		parseInitializer(t) {
			this.scope.enter(80), this.expressionScope.enter(rs$1()), this.prodParam.enter(0), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
		}
		parseClassId(t, e, s, i = 8331) {
			if (w$1(this.state.type)) t.id = this.parseIdentifier(), e && this.declareNameFromIdentifier(t.id, i);
			else if (s || !e) t.id = null;
			else throw this.raise(p.MissingClassName, this.state.startLoc);
		}
		parseClassSuper(t) {
			t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
		}
		parseExport(t, e) {
			let s = this.parseMaybeImportPhase(t, !0), i = this.maybeParseExportDefaultSpecifier(t, s), r = !i || this.eat(12), n = r && this.eatExportStar(t), o = n && this.maybeParseExportNamespaceSpecifier(t), h = r && (!o || this.eat(12)), c = i || n;
			if (n && !o) {
				if (i && this.unexpected(), e) throw this.raise(p.UnsupportedDecoratorExport, t);
				return this.parseExportFrom(t, !0), this.finishNode(t, "ExportAllDeclaration");
			}
			let l$1 = this.maybeParseExportNamedSpecifiers(t);
			i && r && !n && !l$1 && this.unexpected(null, 5), o && h && this.unexpected(null, 98);
			let u;
			if (c || l$1) {
				if (u = !1, e) throw this.raise(p.UnsupportedDecoratorExport, t);
				this.parseExportFrom(t, c);
			} else u = this.maybeParseExportDeclaration(t);
			if (c || l$1 || u) {
				var f$1;
				let d$1 = t;
				if (this.checkExport(d$1, !0, !1, !!d$1.source), ((f$1 = d$1.declaration) == null ? void 0 : f$1.type) === "ClassDeclaration") this.maybeTakeDecorators(e, d$1.declaration, d$1);
				else if (e) throw this.raise(p.UnsupportedDecoratorExport, t);
				return this.finishNode(d$1, "ExportNamedDeclaration");
			}
			if (this.eat(65)) {
				let d$1 = t, y$1 = this.parseExportDefaultExpression();
				if (d$1.declaration = y$1, y$1.type === "ClassDeclaration") this.maybeTakeDecorators(e, y$1, d$1);
				else if (e) throw this.raise(p.UnsupportedDecoratorExport, t);
				return this.checkExport(d$1, !0, !0), this.finishNode(d$1, "ExportDefaultDeclaration");
			}
			this.unexpected(null, 5);
		}
		eatExportStar(t) {
			return this.eat(55);
		}
		maybeParseExportDefaultSpecifier(t, e) {
			if (e || this.isExportDefaultSpecifier()) {
				this.expectPlugin("exportDefaultFrom", e == null ? void 0 : e.loc.start);
				let s = e || this.parseIdentifier(!0), i = this.startNodeAtNode(s);
				return i.exported = s, t.specifiers = [this.finishNode(i, "ExportDefaultSpecifier")], !0;
			}
			return !1;
		}
		maybeParseExportNamespaceSpecifier(t) {
			if (this.isContextual(93)) {
				var e;
				(e = t).specifiers ?? (e.specifiers = []);
				let i = this.startNodeAt(this.state.lastTokStartLoc);
				return this.next(), i.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(i, "ExportNamespaceSpecifier")), !0;
			}
			return !1;
		}
		maybeParseExportNamedSpecifiers(t) {
			if (this.match(5)) {
				let e = t;
				e.specifiers || (e.specifiers = []);
				let s = e.exportKind === "type";
				return e.specifiers.push(...this.parseExportSpecifiers(s)), e.source = null, e.declaration = null, this.hasPlugin("importAssertions") && (e.assertions = []), !0;
			}
			return !1;
		}
		maybeParseExportDeclaration(t) {
			return this.shouldParseExportDeclaration() ? (t.specifiers = [], t.source = null, this.hasPlugin("importAssertions") && (t.assertions = []), t.declaration = this.parseExportDeclaration(t), !0) : !1;
		}
		isAsyncFunction() {
			if (!this.isContextual(95)) return !1;
			let t = this.nextTokenInLineStart();
			return this.isUnparsedContextual(t, "function");
		}
		parseExportDefaultExpression() {
			let t = this.startNode();
			if (this.match(68)) return this.next(), this.parseFunction(t, 5);
			if (this.isAsyncFunction()) return this.next(), this.next(), this.parseFunction(t, 13);
			if (this.match(80)) return this.parseClass(t, !0, !0);
			if (this.match(26)) return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(p.DecoratorBeforeExport, this.state.startLoc), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0);
			if (this.match(75) || this.match(74) || this.isLet()) throw this.raise(p.UnsupportedDefaultExport, this.state.startLoc);
			let e = this.parseMaybeAssignAllowIn();
			return this.semicolon(), e;
		}
		parseExportDeclaration(t) {
			return this.match(80) ? this.parseClass(this.startNode(), !0, !1) : this.parseStatementListItem();
		}
		isExportDefaultSpecifier() {
			let { type: t } = this.state;
			if (w$1(t)) {
				if (t === 95 && !this.state.containsEsc || t === 100) return !1;
				if ((t === 130 || t === 129) && !this.state.containsEsc) {
					let { type: i } = this.lookahead();
					if (w$1(i) && i !== 98 || i === 5) return this.expectOnePlugin(["flow", "typescript"]), !1;
				}
			} else if (!this.match(65)) return !1;
			let e = this.nextTokenStart(), s = this.isUnparsedContextual(e, "from");
			if (this.input.charCodeAt(e) === 44 || w$1(this.state.type) && s) return !0;
			if (this.match(65) && s) {
				let i = this.input.charCodeAt(this.nextTokenStartSince(e + 4));
				return i === 34 || i === 39;
			}
			return !1;
		}
		parseExportFrom(t, e) {
			this.eatContextual(98) ? (t.source = this.parseImportSource(), this.checkExport(t), this.maybeParseImportAttributes(t), this.checkJSONModuleImport(t)) : e && this.unexpected(), this.semicolon();
		}
		shouldParseExportDeclaration() {
			let { type: t } = this.state;
			return t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(p.DecoratorBeforeExport, this.state.startLoc), !0) : this.isContextual(107) ? (this.raise(p.UsingDeclarationExport, this.state.startLoc), !0) : this.isContextual(96) && this.startsAwaitUsing() ? (this.raise(p.UsingDeclarationExport, this.state.startLoc), !0) : t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
		}
		checkExport(t, e, s, i) {
			if (e) {
				var r;
				if (s) {
					if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
						var n;
						let o = t.declaration;
						o.type === "Identifier" && o.name === "from" && o.end - o.start === 4 && !((n = o.extra) != null && n.parenthesized) && this.raise(p.ExportDefaultFromAsIdentifier, o);
					}
				} else if ((r = t.specifiers) != null && r.length) for (let o of t.specifiers) {
					let { exported: h } = o, c = h.type === "Identifier" ? h.name : h.value;
					if (this.checkDuplicateExports(o, c), !i && o.local) {
						let { local: l$1 } = o;
						l$1.type !== "Identifier" ? this.raise(p.ExportBindingIsString, o, {
							localName: l$1.value,
							exportName: c
						}) : (this.checkReservedWord(l$1.name, l$1.loc.start, !0, !1), this.scope.checkLocalExport(l$1));
					}
				}
				else if (t.declaration) {
					let o = t.declaration;
					if (o.type === "FunctionDeclaration" || o.type === "ClassDeclaration") {
						let { id: h } = o;
						if (!h) throw new Error("Assertion failure");
						this.checkDuplicateExports(t, h.name);
					} else if (o.type === "VariableDeclaration") for (let h of o.declarations) this.checkDeclaration(h.id);
				}
			}
		}
		checkDeclaration(t) {
			if (t.type === "Identifier") this.checkDuplicateExports(t, t.name);
			else if (t.type === "ObjectPattern") for (let e of t.properties) this.checkDeclaration(e);
			else if (t.type === "ArrayPattern") for (let e of t.elements) e && this.checkDeclaration(e);
			else t.type === "ObjectProperty" ? this.checkDeclaration(t.value) : t.type === "RestElement" ? this.checkDeclaration(t.argument) : t.type === "AssignmentPattern" && this.checkDeclaration(t.left);
		}
		checkDuplicateExports(t, e) {
			this.exportedIdentifiers.has(e) && (e === "default" ? this.raise(p.DuplicateDefaultExport, t) : this.raise(p.DuplicateExport, t, { exportName: e })), this.exportedIdentifiers.add(e);
		}
		parseExportSpecifiers(t) {
			let e = [], s = !0;
			for (this.expect(5); !this.eat(8);) {
				if (s) s = !1;
				else if (this.expect(12), this.eat(8)) break;
				let i = this.isContextual(130), r = this.match(133), n = this.startNode();
				n.local = this.parseModuleExportName(), e.push(this.parseExportSpecifier(n, r, t, i));
			}
			return e;
		}
		parseExportSpecifier(t, e, s, i) {
			return this.eatContextual(93) ? t.exported = this.parseModuleExportName() : e ? t.exported = Ri$1(t.local) : t.exported || (t.exported = $$1(t.local)), this.finishNode(t, "ExportSpecifier");
		}
		parseModuleExportName() {
			if (this.match(133)) {
				let t = this.parseStringLiteral(this.state.value), e = nr$2.exec(t.value);
				return e && this.raise(p.ModuleExportNameHasLoneSurrogate, t, { surrogateCharCode: e[0].charCodeAt(0) }), t;
			}
			return this.parseIdentifier(!0);
		}
		isJSONModuleImport(t) {
			return t.assertions != null ? t.assertions.some(({ key: e, value: s }) => s.value === "json" && (e.type === "Identifier" ? e.name === "type" : e.value === "type")) : !1;
		}
		checkImportReflection(t) {
			let { specifiers: e } = t, s = e.length === 1 ? e[0].type : null;
			if (t.phase === "source") s !== "ImportDefaultSpecifier" && this.raise(p.SourcePhaseImportRequiresDefault, e[0].loc.start);
			else if (t.phase === "defer") s !== "ImportNamespaceSpecifier" && this.raise(p.DeferImportRequiresNamespace, e[0].loc.start);
			else if (t.module) {
				var i;
				s !== "ImportDefaultSpecifier" && this.raise(p.ImportReflectionNotBinding, e[0].loc.start), ((i = t.assertions) == null ? void 0 : i.length) > 0 && this.raise(p.ImportReflectionHasAssertion, e[0].loc.start);
			}
		}
		checkJSONModuleImport(t) {
			if (this.isJSONModuleImport(t) && t.type !== "ExportAllDeclaration") {
				let { specifiers: e } = t;
				if (e != null) {
					let s = e.find((i) => {
						let r;
						if (i.type === "ExportSpecifier" ? r = i.local : i.type === "ImportSpecifier" && (r = i.imported), r !== void 0) return r.type === "Identifier" ? r.name !== "default" : r.value !== "default";
					});
					s !== void 0 && this.raise(p.ImportJSONBindingNotDefault, s.loc.start);
				}
			}
		}
		isPotentialImportPhase(t) {
			return t ? !1 : this.isContextual(105) || this.isContextual(97) || this.isContextual(127);
		}
		applyImportPhase(t, e, s, i) {
			e || (s === "module" ? (this.expectPlugin("importReflection", i), t.module = !0) : this.hasPlugin("importReflection") && (t.module = !1), s === "source" ? (this.expectPlugin("sourcePhaseImports", i), t.phase = "source") : s === "defer" ? (this.expectPlugin("deferredImportEvaluation", i), t.phase = "defer") : this.hasPlugin("sourcePhaseImports") && (t.phase = null));
		}
		parseMaybeImportPhase(t, e) {
			if (!this.isPotentialImportPhase(e)) return this.applyImportPhase(t, e, null), null;
			let s = this.parseIdentifier(!0), { type: i } = this.state;
			return (M$2(i) ? i !== 98 || this.lookaheadCharCode() === 102 : i !== 12) ? (this.resetPreviousIdentifierLeadingComments(s), this.applyImportPhase(t, e, s.name, s.loc.start), null) : (this.applyImportPhase(t, e, null), s);
		}
		isPrecedingIdImportPhase(t) {
			let { type: e } = this.state;
			return w$1(e) ? e !== 98 || this.lookaheadCharCode() === 102 : e !== 12;
		}
		parseImport(t) {
			return this.match(133) ? this.parseImportSourceAndAttributes(t) : this.parseImportSpecifiersAndAfter(t, this.parseMaybeImportPhase(t, !1));
		}
		parseImportSpecifiersAndAfter(t, e) {
			t.specifiers = [];
			let i = !this.maybeParseDefaultImportSpecifier(t, e) || this.eat(12), r = i && this.maybeParseStarImportSpecifier(t);
			return i && !r && this.parseNamedImportSpecifiers(t), this.expectContextual(98), this.parseImportSourceAndAttributes(t);
		}
		parseImportSourceAndAttributes(t) {
			return t.specifiers ??= [], t.source = this.parseImportSource(), this.maybeParseImportAttributes(t), this.checkImportReflection(t), this.checkJSONModuleImport(t), this.semicolon(), this.finishNode(t, "ImportDeclaration");
		}
		parseImportSource() {
			return this.match(133) || this.unexpected(), this.parseExprAtom();
		}
		parseImportSpecifierLocal(t, e, s) {
			e.local = this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(e, s));
		}
		finishImportSpecifier(t, e, s = 8201) {
			return this.checkLVal(t.local, {
				in: { type: e },
				binding: s
			}), this.finishNode(t, e);
		}
		parseImportAttributes() {
			this.expect(5);
			let t = [], e = /* @__PURE__ */ new Set();
			do {
				if (this.match(8)) break;
				let s = this.startNode(), i = this.state.value;
				if (e.has(i) && this.raise(p.ModuleAttributesWithDuplicateKeys, this.state.startLoc, { key: i }), e.add(i), this.match(133) ? s.key = this.parseStringLiteral(i) : s.key = this.parseIdentifier(!0), this.expect(14), !this.match(133)) throw this.raise(p.ModuleAttributeInvalidValue, this.state.startLoc);
				s.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(s, "ImportAttribute"));
			} while (this.eat(12));
			return this.expect(8), t;
		}
		parseModuleAttributes() {
			let t = [], e = /* @__PURE__ */ new Set();
			do {
				let s = this.startNode();
				if (s.key = this.parseIdentifier(!0), s.key.name !== "type" && this.raise(p.ModuleAttributeDifferentFromType, s.key), e.has(s.key.name) && this.raise(p.ModuleAttributesWithDuplicateKeys, s.key, { key: s.key.name }), e.add(s.key.name), this.expect(14), !this.match(133)) throw this.raise(p.ModuleAttributeInvalidValue, this.state.startLoc);
				s.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(s, "ImportAttribute"));
			} while (this.eat(12));
			return t;
		}
		maybeParseImportAttributes(t) {
			let e, s = !1;
			if (this.match(76)) {
				if (this.hasPrecedingLineBreak() && this.lookaheadCharCode() === 40) return;
				this.next(), this.hasPlugin("moduleAttributes") ? e = this.parseModuleAttributes() : (this.expectImportAttributesPlugin(), e = this.parseImportAttributes()), s = !0;
			} else if (this.isContextual(94) && !this.hasPrecedingLineBreak()) this.hasPlugin("importAttributes") ? (this.getPluginOption("importAttributes", "deprecatedAssertSyntax") !== !0 && this.raise(p.ImportAttributesUseAssert, this.state.startLoc), this.addExtra(t, "deprecatedAssertSyntax", !0)) : this.expectOnePlugin(["importAttributes", "importAssertions"]), this.next(), e = this.parseImportAttributes();
			else if (this.hasPlugin("importAttributes") || this.hasPlugin("importAssertions")) e = [];
			else if (this.hasPlugin("moduleAttributes")) e = [];
			else return;
			!s && this.hasPlugin("importAssertions") ? t.assertions = e : t.attributes = e;
		}
		maybeParseDefaultImportSpecifier(t, e) {
			if (e) {
				let s = this.startNodeAtNode(e);
				return s.local = e, t.specifiers.push(this.finishImportSpecifier(s, "ImportDefaultSpecifier")), !0;
			} else if (M$2(this.state.type)) return this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier"), !0;
			return !1;
		}
		maybeParseStarImportSpecifier(t) {
			if (this.match(55)) {
				let e = this.startNode();
				return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(t, e, "ImportNamespaceSpecifier"), !0;
			}
			return !1;
		}
		parseNamedImportSpecifiers(t) {
			let e = !0;
			for (this.expect(5); !this.eat(8);) {
				if (e) e = !1;
				else {
					if (this.eat(14)) throw this.raise(p.DestructureNamedImport, this.state.startLoc);
					if (this.expect(12), this.eat(8)) break;
				}
				let s = this.startNode(), i = this.match(133), r = this.isContextual(130);
				s.imported = this.parseModuleExportName();
				let n = this.parseImportSpecifier(s, i, t.importKind === "type" || t.importKind === "typeof", r, void 0);
				t.specifiers.push(n);
			}
		}
		parseImportSpecifier(t, e, s, i, r) {
			if (this.eatContextual(93)) t.local = this.parseIdentifier();
			else {
				let { imported: n } = t;
				if (e) throw this.raise(p.ImportBindingIsString, t, { importName: n.value });
				this.checkReservedWord(n.name, t.loc.start, !0, !0), t.local || (t.local = $$1(n));
			}
			return this.finishImportSpecifier(t, "ImportSpecifier", r);
		}
		isThisParam(t) {
			return t.type === "Identifier" && t.name === "this";
		}
	}, De$2 = class extends pt$2 {
		constructor(t, e) {
			t = rr$2(t), super(t, e), this.options = t, this.initializeScopes(), this.plugins = hr$2(this.options.plugins), this.filename = t.sourceFilename;
		}
		getScopeHandler() {
			return me$2;
		}
		parse() {
			this.enterInitialScopes();
			let t = this.startNode(), e = this.startNode();
			return this.nextToken(), t.errors = null, this.parseTopLevel(t, e), t.errors = this.state.errors, t.comments.length = this.state.commentsLen, t;
		}
	};
	function hr$2(a) {
		let t = /* @__PURE__ */ new Map();
		for (let e of a) {
			let [s, i] = Array.isArray(e) ? e : [e, {}];
			t.has(s) || t.set(s, i || {});
		}
		return t;
	}
	function lr$2(a, t) {
		var e;
		if (((e = t) == null ? void 0 : e.sourceType) === "unambiguous") {
			t = Object.assign({}, t);
			try {
				t.sourceType = "module";
				let s = pe$2(t, a), i = s.parse();
				if (s.sawUnambiguousESM) return i;
				if (s.ambiguousScriptDifferentAst) try {
					return t.sourceType = "script", pe$2(t, a).parse();
				} catch {}
				else i.program.sourceType = "script";
				return i;
			} catch (s) {
				try {
					return t.sourceType = "script", pe$2(t, a).parse();
				} catch {}
				throw s;
			}
		} else return pe$2(t, a).parse();
	}
	function cr$2(a, t) {
		let e = pe$2(t, a);
		return e.options.strictMode && (e.state.strict = !0), e.getExpression();
	}
	function pr$2(a) {
		let t = {};
		for (let e of Object.keys(a)) t[e] = R$2(a[e]);
		return t;
	}
	var ur$2 = pr$2(ni$2);
	function pe$2(a, t) {
		let e = De$2;
		return a != null && a.plugins && (sr$2(a.plugins), e = fr$2(a.plugins)), new e(a, t);
	}
	var Kt$1 = {};
	function fr$2(a) {
		let t = ir$2.filter((i) => N$2(a, i)), e = t.join("/"), s = Kt$1[e];
		if (!s) {
			s = De$2;
			for (let i of t) s = hs$1[i](s);
			Kt$1[e] = s;
		}
		return s;
	}
	xe$2.parse = lr$2;
	xe$2.parseExpression = cr$2;
	xe$2.tokTypes = ur$2;
});
var kt$1 = {};
Ws$1(kt$1, { parsers: () => Qr$1 });
var _e$1 = vt$1(At$1(), 1);
function Me$1(a) {
	return (t, e, s) => {
		let i = !!(s != null && s.backwards);
		if (e === !1) return !1;
		let { length: r } = t, n = e;
		for (; n >= 0 && n < r;) {
			let o = t.charAt(n);
			if (a instanceof RegExp) {
				if (!a.test(o)) return n;
			} else if (!a.includes(o)) return n;
			i ? n-- : n++;
		}
		return n === -1 || n === r ? n : !1;
	};
}
Me$1(/\s/u);
var ls$1 = Me$1(" 	");
Me$1(",; 	");
var cs$1 = Me$1(/[^\n\r]/u);
function dr$1(a, t) {
	if (t === !1) return !1;
	if (a.charAt(t) === "/" && a.charAt(t + 1) === "*") {
		for (let e = t + 2; e < a.length; ++e) if (a.charAt(e) === "*" && a.charAt(e + 1) === "/") return e + 2;
	}
	return t;
}
var ps$1 = dr$1;
function mr$1(a, t, e) {
	let s = !!(e != null && e.backwards);
	if (t === !1) return !1;
	let i = a.charAt(t);
	if (s) {
		if (a.charAt(t - 1) === "\r" && i === `
`) return t - 2;
		if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029") return t - 1;
	} else {
		if (i === "\r" && a.charAt(t + 1) === `
`) return t + 2;
		if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029") return t + 1;
	}
	return t;
}
var us$1 = mr$1;
function yr$1(a, t) {
	return t === !1 ? !1 : a.charAt(t) === "/" && a.charAt(t + 1) === "/" ? cs$1(a, t) : t;
}
var fs$1 = yr$1;
function xr$1(a, t) {
	let e = null, s = t;
	for (; s !== e;) e = s, s = ls$1(a, s), s = ps$1(a, s), s = fs$1(a, s), s = us$1(a, s);
	return s;
}
var ds$1 = xr$1;
function Pr$1(a) {
	let t = [];
	for (let e of a) try {
		return e();
	} catch (s) {
		t.push(s);
	}
	throw Object.assign(/* @__PURE__ */ new Error("All combinations failed"), { errors: t });
}
var ms$1 = Pr$1;
function gr$1(a) {
	if (!a.startsWith("#!")) return "";
	let t = a.indexOf(`
`);
	return t === -1 ? a : a.slice(0, t);
}
var Oe$1 = gr$1;
var Tr$1 = (a, t, e) => {
	if (!(a && t == null)) return Array.isArray(t) || typeof t == "string" ? t[e < 0 ? t.length + e : e] : t.at(e);
}, St$1 = Tr$1;
function br$1(a) {
	return Array.isArray(a) && a.length > 0;
}
var Pe$1 = br$1;
function D(a) {
	var s, i, r;
	let t = ((s = a.range) == null ? void 0 : s[0]) ?? a.start, e = (r = ((i = a.declaration) == null ? void 0 : i.decorators) ?? a.decorators) == null ? void 0 : r[0];
	return e ? Math.min(D(e), t) : t;
}
function B(a) {
	var t;
	return ((t = a.range) == null ? void 0 : t[1]) ?? a.end;
}
function Ar$1(a) {
	let t = new Set(a);
	return (e) => t.has(e == null ? void 0 : e.type);
}
var ge$1 = Ar$1([
	"Block",
	"CommentBlock",
	"MultiLine"
]);
function wr$1(a) {
	let t = `*${a.value}*`.split(`
`);
	return t.length > 1 && t.every((e) => e.trimStart()[0] === "*");
}
var wt$1 = wr$1;
function Cr(a) {
	return ge$1(a) && a.value[0] === "*" && /@(?:type|satisfies)\b/u.test(a.value);
}
var xs$1 = Cr;
var Te$1 = null;
function be$1(a) {
	if (Te$1 !== null && typeof Te$1.property) {
		let t = Te$1;
		return Te$1 = be$1.prototype = null, t;
	}
	return Te$1 = be$1.prototype = a ?? Object.create(null), new be$1();
}
var Er$1 = 10;
for (let a = 0; a <= Er$1; a++) be$1();
function Ct$1(a) {
	return be$1(a);
}
function Ir$1(a, t = "type") {
	Ct$1(a);
	function e(s) {
		let i = s[t], r = a[i];
		if (!Array.isArray(r)) throw Object.assign(/* @__PURE__ */ new Error(`Missing visitor keys for '${i}'.`), { node: s });
		return r;
	}
	return e;
}
var Ts$1 = Ir$1({
	ArrayExpression: ["elements"],
	AssignmentExpression: ["left", "right"],
	BinaryExpression: ["left", "right"],
	InterpreterDirective: [],
	Directive: ["value"],
	DirectiveLiteral: [],
	BlockStatement: ["directives", "body"],
	BreakStatement: ["label"],
	CallExpression: [
		"callee",
		"arguments",
		"typeParameters",
		"typeArguments"
	],
	CatchClause: ["param", "body"],
	ConditionalExpression: [
		"test",
		"consequent",
		"alternate"
	],
	ContinueStatement: ["label"],
	DebuggerStatement: [],
	DoWhileStatement: ["test", "body"],
	EmptyStatement: [],
	ExpressionStatement: ["expression"],
	File: ["program"],
	ForInStatement: [
		"left",
		"right",
		"body"
	],
	ForStatement: [
		"init",
		"test",
		"update",
		"body"
	],
	FunctionDeclaration: [
		"id",
		"params",
		"body",
		"returnType",
		"typeParameters",
		"predicate"
	],
	FunctionExpression: [
		"id",
		"params",
		"body",
		"returnType",
		"typeParameters"
	],
	Identifier: ["typeAnnotation", "decorators"],
	IfStatement: [
		"test",
		"consequent",
		"alternate"
	],
	LabeledStatement: ["label", "body"],
	StringLiteral: [],
	NumericLiteral: [],
	NullLiteral: [],
	BooleanLiteral: [],
	RegExpLiteral: [],
	LogicalExpression: ["left", "right"],
	MemberExpression: ["object", "property"],
	NewExpression: [
		"callee",
		"arguments",
		"typeParameters",
		"typeArguments"
	],
	Program: ["directives", "body"],
	ObjectExpression: ["properties"],
	ObjectMethod: [
		"key",
		"params",
		"body",
		"decorators",
		"returnType",
		"typeParameters"
	],
	ObjectProperty: [
		"key",
		"value",
		"decorators"
	],
	RestElement: [
		"argument",
		"typeAnnotation",
		"decorators"
	],
	ReturnStatement: ["argument"],
	SequenceExpression: ["expressions"],
	ParenthesizedExpression: ["expression"],
	SwitchCase: ["test", "consequent"],
	SwitchStatement: ["discriminant", "cases"],
	ThisExpression: [],
	ThrowStatement: ["argument"],
	TryStatement: [
		"block",
		"handler",
		"finalizer"
	],
	UnaryExpression: ["argument"],
	UpdateExpression: ["argument"],
	VariableDeclaration: ["declarations"],
	VariableDeclarator: ["id", "init"],
	WhileStatement: ["test", "body"],
	WithStatement: ["object", "body"],
	AssignmentPattern: [
		"left",
		"right",
		"decorators",
		"typeAnnotation"
	],
	ArrayPattern: [
		"elements",
		"typeAnnotation",
		"decorators"
	],
	ArrowFunctionExpression: [
		"params",
		"body",
		"returnType",
		"typeParameters",
		"predicate"
	],
	ClassBody: ["body"],
	ClassExpression: [
		"id",
		"body",
		"superClass",
		"mixins",
		"typeParameters",
		"superTypeParameters",
		"implements",
		"decorators",
		"superTypeArguments"
	],
	ClassDeclaration: [
		"id",
		"body",
		"superClass",
		"mixins",
		"typeParameters",
		"superTypeParameters",
		"implements",
		"decorators",
		"superTypeArguments"
	],
	ExportAllDeclaration: [
		"source",
		"attributes",
		"exported"
	],
	ExportDefaultDeclaration: ["declaration"],
	ExportNamedDeclaration: [
		"declaration",
		"specifiers",
		"source",
		"attributes"
	],
	ExportSpecifier: ["local", "exported"],
	ForOfStatement: [
		"left",
		"right",
		"body"
	],
	ImportDeclaration: [
		"specifiers",
		"source",
		"attributes"
	],
	ImportDefaultSpecifier: ["local"],
	ImportNamespaceSpecifier: ["local"],
	ImportSpecifier: ["local", "imported"],
	ImportExpression: [
		"source",
		"options",
		"attributes"
	],
	MetaProperty: ["meta", "property"],
	ClassMethod: [
		"key",
		"params",
		"body",
		"decorators",
		"returnType",
		"typeParameters"
	],
	ObjectPattern: [
		"properties",
		"typeAnnotation",
		"decorators"
	],
	SpreadElement: ["argument"],
	Super: [],
	TaggedTemplateExpression: [
		"tag",
		"quasi",
		"typeParameters",
		"typeArguments"
	],
	TemplateElement: [],
	TemplateLiteral: ["quasis", "expressions"],
	YieldExpression: ["argument"],
	AwaitExpression: ["argument"],
	Import: [],
	BigIntLiteral: [],
	ExportNamespaceSpecifier: ["exported"],
	OptionalMemberExpression: ["object", "property"],
	OptionalCallExpression: [
		"callee",
		"arguments",
		"typeParameters",
		"typeArguments"
	],
	ClassProperty: [
		"key",
		"value",
		"typeAnnotation",
		"decorators",
		"variance"
	],
	ClassAccessorProperty: [
		"key",
		"value",
		"typeAnnotation",
		"decorators"
	],
	ClassPrivateProperty: [
		"key",
		"value",
		"decorators",
		"typeAnnotation",
		"variance"
	],
	ClassPrivateMethod: [
		"key",
		"params",
		"body",
		"decorators",
		"returnType",
		"typeParameters"
	],
	PrivateName: ["id"],
	StaticBlock: ["body"],
	AnyTypeAnnotation: [],
	ArrayTypeAnnotation: ["elementType"],
	BooleanTypeAnnotation: [],
	BooleanLiteralTypeAnnotation: [],
	NullLiteralTypeAnnotation: [],
	ClassImplements: ["id", "typeParameters"],
	DeclareClass: [
		"id",
		"typeParameters",
		"extends",
		"mixins",
		"implements",
		"body"
	],
	DeclareFunction: ["id", "predicate"],
	DeclareInterface: [
		"id",
		"typeParameters",
		"extends",
		"body"
	],
	DeclareModule: ["id", "body"],
	DeclareModuleExports: ["typeAnnotation"],
	DeclareTypeAlias: [
		"id",
		"typeParameters",
		"right"
	],
	DeclareOpaqueType: [
		"id",
		"typeParameters",
		"supertype"
	],
	DeclareVariable: ["id"],
	DeclareExportDeclaration: [
		"declaration",
		"specifiers",
		"source"
	],
	DeclareExportAllDeclaration: ["source"],
	DeclaredPredicate: ["value"],
	ExistsTypeAnnotation: [],
	FunctionTypeAnnotation: [
		"typeParameters",
		"params",
		"rest",
		"returnType",
		"this"
	],
	FunctionTypeParam: ["name", "typeAnnotation"],
	GenericTypeAnnotation: ["id", "typeParameters"],
	InferredPredicate: [],
	InterfaceExtends: ["id", "typeParameters"],
	InterfaceDeclaration: [
		"id",
		"typeParameters",
		"extends",
		"body"
	],
	InterfaceTypeAnnotation: ["extends", "body"],
	IntersectionTypeAnnotation: ["types"],
	MixedTypeAnnotation: [],
	EmptyTypeAnnotation: [],
	NullableTypeAnnotation: ["typeAnnotation"],
	NumberLiteralTypeAnnotation: [],
	NumberTypeAnnotation: [],
	ObjectTypeAnnotation: [
		"properties",
		"indexers",
		"callProperties",
		"internalSlots"
	],
	ObjectTypeInternalSlot: ["id", "value"],
	ObjectTypeCallProperty: ["value"],
	ObjectTypeIndexer: [
		"id",
		"key",
		"value",
		"variance"
	],
	ObjectTypeProperty: [
		"key",
		"value",
		"variance"
	],
	ObjectTypeSpreadProperty: ["argument"],
	OpaqueType: [
		"id",
		"typeParameters",
		"supertype",
		"impltype"
	],
	QualifiedTypeIdentifier: ["id", "qualification"],
	StringLiteralTypeAnnotation: [],
	StringTypeAnnotation: [],
	SymbolTypeAnnotation: [],
	ThisTypeAnnotation: [],
	TupleTypeAnnotation: ["types", "elementTypes"],
	TypeofTypeAnnotation: ["argument", "typeArguments"],
	TypeAlias: [
		"id",
		"typeParameters",
		"right"
	],
	TypeAnnotation: ["typeAnnotation"],
	TypeCastExpression: ["expression", "typeAnnotation"],
	TypeParameter: [
		"bound",
		"default",
		"variance"
	],
	TypeParameterDeclaration: ["params"],
	TypeParameterInstantiation: ["params"],
	UnionTypeAnnotation: ["types"],
	Variance: [],
	VoidTypeAnnotation: [],
	EnumDeclaration: ["id", "body"],
	EnumBooleanBody: ["members"],
	EnumNumberBody: ["members"],
	EnumStringBody: ["members"],
	EnumSymbolBody: ["members"],
	EnumBooleanMember: ["id", "init"],
	EnumNumberMember: ["id", "init"],
	EnumStringMember: ["id", "init"],
	EnumDefaultedMember: ["id"],
	IndexedAccessType: ["objectType", "indexType"],
	OptionalIndexedAccessType: ["objectType", "indexType"],
	JSXAttribute: ["name", "value"],
	JSXClosingElement: ["name"],
	JSXElement: [
		"openingElement",
		"children",
		"closingElement"
	],
	JSXEmptyExpression: [],
	JSXExpressionContainer: ["expression"],
	JSXSpreadChild: ["expression"],
	JSXIdentifier: [],
	JSXMemberExpression: ["object", "property"],
	JSXNamespacedName: ["namespace", "name"],
	JSXOpeningElement: [
		"name",
		"attributes",
		"typeArguments",
		"typeParameters"
	],
	JSXSpreadAttribute: ["argument"],
	JSXText: [],
	JSXFragment: [
		"openingFragment",
		"children",
		"closingFragment"
	],
	JSXOpeningFragment: [],
	JSXClosingFragment: [],
	Noop: [],
	Placeholder: [],
	V8IntrinsicIdentifier: [],
	ArgumentPlaceholder: [],
	BindExpression: ["object", "callee"],
	ImportAttribute: ["key", "value"],
	Decorator: ["expression"],
	DoExpression: ["body"],
	ExportDefaultSpecifier: ["exported"],
	RecordExpression: ["properties"],
	TupleExpression: ["elements"],
	DecimalLiteral: [],
	ModuleExpression: ["body"],
	TopicReference: [],
	PipelineTopicExpression: ["expression"],
	PipelineBareFunction: ["callee"],
	PipelinePrimaryTopicReference: [],
	TSParameterProperty: ["parameter", "decorators"],
	TSDeclareFunction: [
		"id",
		"typeParameters",
		"params",
		"returnType",
		"body"
	],
	TSDeclareMethod: [
		"decorators",
		"key",
		"typeParameters",
		"params",
		"returnType"
	],
	TSQualifiedName: ["left", "right"],
	TSCallSignatureDeclaration: [
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSConstructSignatureDeclaration: [
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSPropertySignature: ["key", "typeAnnotation"],
	TSMethodSignature: [
		"key",
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSIndexSignature: ["parameters", "typeAnnotation"],
	TSAnyKeyword: [],
	TSBooleanKeyword: [],
	TSBigIntKeyword: [],
	TSIntrinsicKeyword: [],
	TSNeverKeyword: [],
	TSNullKeyword: [],
	TSNumberKeyword: [],
	TSObjectKeyword: [],
	TSStringKeyword: [],
	TSSymbolKeyword: [],
	TSUndefinedKeyword: [],
	TSUnknownKeyword: [],
	TSVoidKeyword: [],
	TSThisType: [],
	TSFunctionType: [
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSConstructorType: [
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSTypeReference: [
		"typeName",
		"typeParameters",
		"typeArguments"
	],
	TSTypePredicate: ["parameterName", "typeAnnotation"],
	TSTypeQuery: [
		"exprName",
		"typeParameters",
		"typeArguments"
	],
	TSTypeLiteral: ["members"],
	TSArrayType: ["elementType"],
	TSTupleType: ["elementTypes"],
	TSOptionalType: ["typeAnnotation"],
	TSRestType: ["typeAnnotation"],
	TSNamedTupleMember: ["label", "elementType"],
	TSUnionType: ["types"],
	TSIntersectionType: ["types"],
	TSConditionalType: [
		"checkType",
		"extendsType",
		"trueType",
		"falseType"
	],
	TSInferType: ["typeParameter"],
	TSParenthesizedType: ["typeAnnotation"],
	TSTypeOperator: ["typeAnnotation"],
	TSIndexedAccessType: ["objectType", "indexType"],
	TSMappedType: [
		"typeParameter",
		"typeAnnotation",
		"nameType"
	],
	TSLiteralType: ["literal"],
	TSExpressionWithTypeArguments: ["expression", "typeParameters"],
	TSInterfaceDeclaration: [
		"id",
		"typeParameters",
		"extends",
		"body"
	],
	TSInterfaceBody: ["body"],
	TSTypeAliasDeclaration: [
		"id",
		"typeParameters",
		"typeAnnotation"
	],
	TSInstantiationExpression: [
		"expression",
		"typeParameters",
		"typeArguments"
	],
	TSAsExpression: ["expression", "typeAnnotation"],
	TSSatisfiesExpression: ["expression", "typeAnnotation"],
	TSTypeAssertion: ["typeAnnotation", "expression"],
	TSEnumDeclaration: ["id", "members"],
	TSEnumMember: ["id", "initializer"],
	TSModuleDeclaration: ["id", "body"],
	TSModuleBlock: ["body"],
	TSImportType: [
		"argument",
		"qualifier",
		"typeParameters",
		"typeArguments"
	],
	TSImportEqualsDeclaration: ["id", "moduleReference"],
	TSExternalModuleReference: ["expression"],
	TSNonNullExpression: ["expression"],
	TSExportAssignment: ["expression"],
	TSNamespaceExportDeclaration: ["id"],
	TSTypeAnnotation: ["typeAnnotation"],
	TSTypeParameterInstantiation: ["params"],
	TSTypeParameterDeclaration: ["params"],
	TSTypeParameter: [
		"constraint",
		"default",
		"name"
	],
	ChainExpression: ["expression"],
	ExperimentalRestProperty: ["argument"],
	ExperimentalSpreadProperty: ["argument"],
	Literal: [],
	MethodDefinition: [
		"decorators",
		"key",
		"value"
	],
	PrivateIdentifier: [],
	Property: ["key", "value"],
	PropertyDefinition: [
		"decorators",
		"key",
		"typeAnnotation",
		"value",
		"variance"
	],
	AccessorProperty: [
		"decorators",
		"key",
		"typeAnnotation",
		"value"
	],
	TSAbstractAccessorProperty: [
		"decorators",
		"key",
		"typeAnnotation"
	],
	TSAbstractKeyword: [],
	TSAbstractMethodDefinition: ["key", "value"],
	TSAbstractPropertyDefinition: [
		"decorators",
		"key",
		"typeAnnotation"
	],
	TSAsyncKeyword: [],
	TSClassImplements: [
		"expression",
		"typeArguments",
		"typeParameters"
	],
	TSDeclareKeyword: [],
	TSEmptyBodyFunctionExpression: [
		"id",
		"typeParameters",
		"params",
		"returnType"
	],
	TSEnumBody: ["members"],
	TSExportKeyword: [],
	TSInterfaceHeritage: [
		"expression",
		"typeArguments",
		"typeParameters"
	],
	TSPrivateKeyword: [],
	TSProtectedKeyword: [],
	TSPublicKeyword: [],
	TSReadonlyKeyword: [],
	TSStaticKeyword: [],
	TSTemplateLiteralType: ["quasis", "types"],
	AsConstExpression: ["expression"],
	AsExpression: ["expression", "typeAnnotation"],
	BigIntLiteralTypeAnnotation: [],
	BigIntTypeAnnotation: [],
	ComponentDeclaration: [
		"id",
		"params",
		"body",
		"typeParameters",
		"rendersType"
	],
	ComponentParameter: ["name", "local"],
	ComponentTypeAnnotation: [
		"params",
		"rest",
		"typeParameters",
		"rendersType"
	],
	ComponentTypeParameter: ["name", "typeAnnotation"],
	ConditionalTypeAnnotation: [
		"checkType",
		"extendsType",
		"trueType",
		"falseType"
	],
	DeclareComponent: [
		"id",
		"params",
		"rest",
		"typeParameters",
		"rendersType"
	],
	DeclareEnum: ["id", "body"],
	DeclareHook: ["id"],
	DeclareNamespace: ["id", "body"],
	EnumBigIntBody: ["members"],
	EnumBigIntMember: ["id", "init"],
	HookDeclaration: [
		"id",
		"params",
		"body",
		"typeParameters",
		"returnType"
	],
	HookTypeAnnotation: [
		"params",
		"returnType",
		"rest",
		"typeParameters"
	],
	InferTypeAnnotation: ["typeParameter"],
	KeyofTypeAnnotation: ["argument"],
	ObjectTypeMappedTypeProperty: [
		"keyTparam",
		"propType",
		"sourceType",
		"variance"
	],
	QualifiedTypeofIdentifier: ["qualification", "id"],
	TupleTypeLabeledElement: [
		"label",
		"elementType",
		"variance"
	],
	TupleTypeSpreadElement: ["label", "typeAnnotation"],
	TypeOperator: ["typeAnnotation"],
	TypePredicate: [
		"parameterName",
		"typeAnnotation",
		"asserts"
	],
	NGRoot: ["node"],
	NGPipeExpression: [
		"left",
		"right",
		"arguments"
	],
	NGChainedExpression: ["expressions"],
	NGEmptyExpression: [],
	NGMicrosyntax: ["body"],
	NGMicrosyntaxKey: [],
	NGMicrosyntaxExpression: ["expression", "alias"],
	NGMicrosyntaxKeyedExpression: ["key", "expression"],
	NGMicrosyntaxLet: ["key", "value"],
	NGMicrosyntaxAs: ["key", "alias"],
	JsExpressionRoot: ["node"],
	JsonRoot: ["node"],
	TSJSDocAllType: [],
	TSJSDocUnknownType: [],
	TSJSDocNullableType: ["typeAnnotation"],
	TSJSDocNonNullableType: ["typeAnnotation"],
	NeverTypeAnnotation: [],
	UndefinedTypeAnnotation: [],
	UnknownTypeAnnotation: [],
	SatisfiesExpression: ["expression", "typeAnnotation"]
});
function Et$1(a, t) {
	if (!(a !== null && typeof a == "object")) return a;
	if (Array.isArray(a)) {
		for (let s = 0; s < a.length; s++) a[s] = Et$1(a[s], t);
		return a;
	}
	let e = Ts$1(a);
	for (let s = 0; s < e.length; s++) a[e[s]] = Et$1(a[e[s]], t);
	return t(a) || a;
}
var Fe = Et$1;
function kr$1(a, t) {
	let { parser: e, text: s } = t;
	if (a.type === "File" && a.program.interpreter) {
		let { program: { interpreter: i }, comments: r } = a;
		delete a.program.interpreter, r.unshift(i);
	}
	if (e === "babel") {
		let i = /* @__PURE__ */ new Set();
		a = Fe(a, (r) => {
			var n;
			(n = r.leadingComments) != null && n.some(xs$1) && i.add(D(r));
		}), a = Fe(a, (r) => {
			if (r.type === "ParenthesizedExpression") {
				let { expression: n } = r;
				if (n.type === "TypeCastExpression") return n.range = [...r.range], n;
				let o = D(r);
				if (!i.has(o)) return n.extra = {
					...n.extra,
					parenthesized: !0
				}, n;
			}
		});
	}
	if (a = Fe(a, (i) => {
		var r;
		switch (i.type) {
			case "LogicalExpression":
				if (bs$1(i)) return It(i);
				break;
			case "VariableDeclaration": {
				let n = St$1(!1, i.declarations, -1);
				n != null && n.init && s[B(n)] !== ";" && (i.range = [D(i), B(n)]);
				break;
			}
			case "TSParenthesizedType": return i.typeAnnotation;
			case "TSTypeParameter":
				if (typeof i.name == "string") {
					let n = D(i);
					i.name = {
						type: "Identifier",
						name: i.name,
						range: [n, n + i.name.length]
					};
				}
				break;
			case "TopicReference":
				a.extra = {
					...a.extra,
					__isUsingHackPipeline: !0
				};
				break;
			case "ExportAllDeclaration":
				if (e === "meriyah" && ((r = i.exported) == null ? void 0 : r.type) === "Identifier") {
					let { exported: n } = i, o = s.slice(D(n), B(n));
					(o.startsWith("\"") || o.startsWith("'")) && (i.exported = {
						...i.exported,
						type: "Literal",
						value: i.exported.name,
						raw: o
					});
				}
				break;
			case "TSUnionType":
			case "TSIntersectionType":
				if (i.types.length === 1) return i.types[0];
				break;
		}
	}), Pe$1(a.comments)) {
		let i = St$1(!1, a.comments, -1);
		for (let r = a.comments.length - 2; r >= 0; r--) {
			let n = a.comments[r];
			B(n) === D(i) && ge$1(n) && ge$1(i) && wt$1(n) && wt$1(i) && (a.comments.splice(r + 1, 1), n.value += "*//*" + i.value, n.range = [D(n), B(i)]), i = n;
		}
	}
	return a.type === "Program" && (a.range = [0, s.length]), a;
}
function bs$1(a) {
	return a.type === "LogicalExpression" && a.right.type === "LogicalExpression" && a.operator === a.right.operator;
}
function It(a) {
	return bs$1(a) ? It({
		type: "LogicalExpression",
		operator: a.operator,
		left: It({
			type: "LogicalExpression",
			operator: a.operator,
			left: a.left,
			right: a.right.left,
			range: [D(a.left), B(a.right.left)]
		}),
		right: a.right.right,
		range: [D(a), B(a)]
	}) : a;
}
var As$1 = kr$1;
function vr$1(a, t) {
	let e = /* @__PURE__ */ new SyntaxError(a + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
	return Object.assign(e, t);
}
var Be$1 = vr$1;
function Lr$1(a) {
	let { message: t, loc: { line: e, column: s }, reasonCode: i } = a, r = a;
	(i === "MissingPlugin" || i === "MissingOneOfPlugins") && (t = "Unexpected token.", r = void 0);
	let n = ` (${e}:${s})`;
	return t.endsWith(n) && (t = t.slice(0, -n.length)), Be$1(t, {
		loc: { start: {
			line: e,
			column: s + 1
		} },
		cause: r
	});
}
var Re$1 = Lr$1;
var Dr$1 = (a, t, e, s) => {
	if (!(a && t == null)) return t.replaceAll ? t.replaceAll(e, s) : e.global ? t.replace(e, s) : t.split(e).join(s);
}, ie$1 = Dr$1;
var Mr$1 = /\*\/$/, Or$1 = /^\/\*\*?/, Fr = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, Br$1 = /(^|\s+)\/\/([^\n\r]*)/g, Ss$1 = /^(\r?\n)+/, Rr$1 = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g, ws$1 = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g, Ur$1 = /(\r?\n|^) *\* ?/g, _r$1 = [];
function Cs$1(a) {
	let t = a.match(Fr);
	return t ? t[0].trimStart() : "";
}
function Es$1(a) {
	let t = `
`;
	a = ie$1(!1, a.replace(Or$1, "").replace(Mr$1, ""), Ur$1, "$1");
	let e = "";
	for (; e !== a;) e = a, a = ie$1(!1, a, Rr$1, `${t}$1 $2${t}`);
	a = a.replace(Ss$1, "").trimEnd();
	let s = Object.create(null), i = ie$1(!1, a, ws$1, "").replace(Ss$1, "").trimEnd(), r;
	for (; r = ws$1.exec(a);) {
		let n = ie$1(!1, r[2], Br$1, "");
		if (typeof s[r[1]] == "string" || Array.isArray(s[r[1]])) {
			let o = s[r[1]];
			s[r[1]] = [
				..._r$1,
				...Array.isArray(o) ? o : [o],
				n
			];
		} else s[r[1]] = n;
	}
	return {
		comments: i,
		pragmas: s
	};
}
function jr$1(a) {
	let t = Oe$1(a);
	t && (a = a.slice(t.length + 1));
	let { pragmas: s, comments: i } = Es$1(Cs$1(a));
	return {
		shebang: t,
		text: a,
		pragmas: s,
		comments: i
	};
}
function Is$1(a) {
	let { pragmas: t } = jr$1(a);
	return Object.prototype.hasOwnProperty.call(t, "prettier") || Object.prototype.hasOwnProperty.call(t, "format");
}
function $r$1(a) {
	return a = typeof a == "function" ? { parse: a } : a, {
		astFormat: "estree",
		hasPragma: Is$1,
		locStart: D,
		locEnd: B,
		...a
	};
}
var G = $r$1;
function Vr$1(a) {
	let { filepath: t } = a;
	if (t) {
		if (t = t.toLowerCase(), t.endsWith(".cjs")) return "script";
		if (t.endsWith(".mjs")) return "module";
	}
}
var Ns$1 = Vr$1;
function qr$1(a, t) {
	let { type: e = "JsExpressionRoot", rootMarker: s, text: i } = t, { tokens: r, comments: n } = a;
	return delete a.tokens, delete a.comments, {
		tokens: r,
		comments: n,
		type: e,
		node: a,
		range: [0, i.length],
		rootMarker: s
	};
}
var Ue$1 = qr$1;
var re$1 = (a) => G(Jr$1(a)), zr$1 = {
	sourceType: "module",
	allowImportExportEverywhere: !0,
	allowReturnOutsideFunction: !0,
	allowNewTargetOutsideFunction: !0,
	allowSuperOutsideMethod: !0,
	allowUndeclaredExports: !0,
	errorRecovery: !0,
	createParenthesizedExpressions: !0,
	createImportExpressions: !0,
	plugins: [
		"doExpressions",
		"exportDefaultFrom",
		"functionBind",
		"functionSent",
		"throwExpressions",
		"partialApplication",
		"decorators",
		"decimal",
		"moduleBlocks",
		"asyncDoExpressions",
		"destructuringPrivate",
		"decoratorAutoAccessors",
		"importReflection",
		"explicitResourceManagement",
		["importAttributes", { deprecatedAssertSyntax: !0 }],
		"sourcePhaseImports",
		"deferredImportEvaluation",
		["optionalChainingAssign", { version: "2023-07" }],
		"recordAndTuple"
	],
	tokens: !0,
	ranges: !0
}, ks$1 = "v8intrinsic", vs = [
	["pipelineOperator", {
		proposal: "hack",
		topicToken: "%"
	}],
	["pipelineOperator", { proposal: "minimal" }],
	["pipelineOperator", { proposal: "fsharp" }]
], V$1 = (a, t = zr$1) => ({
	...t,
	plugins: [...t.plugins, ...a]
}), Kr$1 = /@(?:no)?flow\b/u;
function Hr$1(a, t) {
	var i;
	if ((i = t.filepath) != null && i.endsWith(".js.flow")) return !0;
	let e = Oe$1(a);
	e && (a = a.slice(e.length));
	let s = ds$1(a, 0);
	return s !== !1 && (a = a.slice(0, s)), Kr$1.test(a);
}
function Wr$1(a, t, e) {
	let s = a(t, e), i = s.errors.find((r) => !Xr$1.has(r.reasonCode));
	if (i) throw i;
	return s;
}
function Jr$1({ isExpression: a = !1, optionsCombinations: t }) {
	return (e, s = {}) => {
		if ((s.parser === "babel" || s.parser === "__babel_estree") && Hr$1(e, s)) return s.parser = "babel-flow", Bs$1.parse(e, s);
		let i = t;
		(s.__babelSourceType ?? Ns$1(s)) === "script" && (i = i.map((c) => ({
			...c,
			sourceType: "script"
		})));
		let n = /%[A-Z]/u.test(e);
		e.includes("|>") ? i = (n ? [...vs, ks$1] : vs).flatMap((l$1) => i.map((u) => V$1([l$1], u))) : n && (i = i.map((c) => V$1([ks$1], c)));
		let o = a ? _e$1.parseExpression : _e$1.parse, h;
		try {
			h = ms$1(i.map((c) => () => Wr$1(o, e, c)));
		} catch ({ errors: [c] }) {
			throw Re$1(c);
		}
		return a && (h = Ue$1(h, {
			text: e,
			rootMarker: s.rootMarker
		})), As$1(h, {
			parser: "babel",
			text: e
		});
	};
}
var Xr$1 = new Set([
	"StrictNumericEscape",
	"StrictWith",
	"StrictOctalLiteral",
	"StrictDelete",
	"StrictEvalArguments",
	"StrictEvalArgumentsBinding",
	"StrictFunction",
	"ForInOfLoopInitializer",
	"EmptyTypeArguments",
	"EmptyTypeParameters",
	"ConstructorHasTypeParameters",
	"UnsupportedParameterPropertyKind",
	"DecoratorExportClass",
	"ParamDupe",
	"InvalidDecimal",
	"RestTrailingComma",
	"UnsupportedParameterDecorator",
	"UnterminatedJsxContent",
	"UnexpectedReservedWord",
	"ModuleAttributesWithDuplicateKeys",
	"LineTerminatorBeforeArrow",
	"InvalidEscapeSequenceTemplate",
	"NonAbstractClassHasAbstractMethod",
	"OptionalTypeBeforeRequired",
	"PatternIsOptional",
	"OptionalBindingPattern",
	"DeclareClassFieldHasInitializer",
	"TypeImportCannotSpecifyDefaultAndNamed",
	"ConstructorClassField",
	"VarRedeclaration",
	"InvalidPrivateFieldResolution",
	"DuplicateExport"
]), Fs$1 = [V$1(["jsx"])], Ls$1 = re$1({ optionsCombinations: Fs$1 }), Ds$1 = re$1({ optionsCombinations: [V$1(["jsx", "typescript"]), V$1(["typescript"])] }), Ms = re$1({
	isExpression: !0,
	optionsCombinations: [V$1(["jsx"])]
}), Os$1 = re$1({
	isExpression: !0,
	optionsCombinations: [V$1(["typescript"])]
}), Bs$1 = re$1({ optionsCombinations: [V$1([
	"jsx",
	["flow", {
		all: !0,
		enums: !0
	}],
	"flowComments"
])] }), Gr$1 = re$1({ optionsCombinations: Fs$1.map((a) => V$1(["estree"], a)) }), Rs = {
	babel: Ls$1,
	"babel-flow": Bs$1,
	"babel-ts": Ds$1,
	__js_expression: Ms,
	__ts_expression: Os$1,
	__vue_expression: Ms,
	__vue_ts_expression: Os$1,
	__vue_event_binding: Ls$1,
	__vue_ts_event_binding: Ds$1,
	__babel_estree: Gr$1
};
var Us$1 = vt$1(At$1(), 1);
function _s$1(a = {}) {
	let { allowComments: t = !0 } = a;
	return function(s) {
		let i;
		try {
			i = (0, Us$1.parseExpression)(s, {
				tokens: !0,
				ranges: !0,
				attachComment: !1
			});
		} catch (r) {
			throw Re$1(r);
		}
		if (!t && Pe$1(i.comments)) throw H(i.comments[0], "Comment");
		return ae$1(i), Ue$1(i, {
			type: "JsonRoot",
			text: s
		});
	};
}
function H(a, t) {
	let [e, s] = [a.loc.start, a.loc.end].map(({ line: i, column: r }) => ({
		line: i,
		column: r + 1
	}));
	return Be$1(`${t} is not allowed in JSON.`, { loc: {
		start: e,
		end: s
	} });
}
function ae$1(a) {
	switch (a.type) {
		case "ArrayExpression":
			for (let t of a.elements) t !== null && ae$1(t);
			return;
		case "ObjectExpression":
			for (let t of a.properties) ae$1(t);
			return;
		case "ObjectProperty":
			if (a.computed) throw H(a.key, "Computed key");
			if (a.shorthand) throw H(a.key, "Shorthand property");
			a.key.type !== "Identifier" && ae$1(a.key), ae$1(a.value);
			return;
		case "UnaryExpression": {
			let { operator: t, argument: e } = a;
			if (t !== "+" && t !== "-") throw H(a, `Operator '${a.operator}'`);
			if (e.type === "NumericLiteral" || e.type === "Identifier" && (e.name === "Infinity" || e.name === "NaN")) return;
			throw H(e, `Operator '${t}' before '${e.type}'`);
		}
		case "Identifier":
			if (a.name !== "Infinity" && a.name !== "NaN" && a.name !== "undefined") throw H(a, `Identifier '${a.name}'`);
			return;
		case "TemplateLiteral":
			if (Pe$1(a.expressions)) throw H(a.expressions[0], "'TemplateLiteral' with expression");
			for (let t of a.quasis) ae$1(t);
			return;
		case "NullLiteral":
		case "BooleanLiteral":
		case "NumericLiteral":
		case "StringLiteral":
		case "TemplateElement": return;
		default: throw H(a, `'${a.type}'`);
	}
}
var Nt$1 = _s$1(), js = {
	json: G({
		parse: Nt$1,
		hasPragma() {
			return !0;
		}
	}),
	json5: G(Nt$1),
	jsonc: G(Nt$1),
	"json-stringify": G({
		parse: _s$1({ allowComments: !1 }),
		astFormat: "estree-json"
	})
};
var Qr$1 = {
	...Rs,
	...js
};
var Ln$1 = kt$1;
var estree_exports = /* @__PURE__ */ __export({
	default: () => $d,
	languages: () => nm,
	options: () => va,
	printers: () => rm
}, 1);
var Wa = Object.defineProperty;
var Js = (e) => {
	throw TypeError(e);
};
var Ar = (e, t) => {
	for (var r in t) Wa(e, r, {
		get: t[r],
		enumerable: !0
	});
};
var qs = (e, t, r) => t.has(e) || Js("Cannot " + r);
var pt = (e, t, r) => (qs(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ws = (e, t, r) => t.has(e) ? Js("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Gs = (e, t, r, n) => (qs(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var _s = {};
Ar(_s, {
	languages: () => nm,
	options: () => va,
	printers: () => rm
});
var Us = [
	{
		linguistLanguageId: 183,
		name: "JavaScript",
		type: "programming",
		tmScope: "source.js",
		aceMode: "javascript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "text/javascript",
		color: "#f1e05a",
		aliases: ["js", "node"],
		extensions: [
			".js",
			"._js",
			".bones",
			".cjs",
			".es",
			".es6",
			".frag",
			".gs",
			".jake",
			".javascript",
			".jsb",
			".jscad",
			".jsfl",
			".jslib",
			".jsm",
			".jspre",
			".jss",
			".mjs",
			".njs",
			".pac",
			".sjs",
			".ssjs",
			".xsjs",
			".xsjslib",
			".wxs"
		],
		filenames: ["Jakefile"],
		interpreters: [
			"chakra",
			"d8",
			"gjs",
			"js",
			"node",
			"nodejs",
			"qjs",
			"rhino",
			"v8",
			"v8-shell",
			"zx"
		],
		parsers: [
			"babel",
			"acorn",
			"espree",
			"meriyah",
			"babel-flow",
			"babel-ts",
			"flow",
			"typescript"
		],
		vscodeLanguageIds: ["javascript", "mongo"]
	},
	{
		linguistLanguageId: 183,
		name: "Flow",
		type: "programming",
		tmScope: "source.js",
		aceMode: "javascript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "text/javascript",
		color: "#f1e05a",
		aliases: [],
		extensions: [".js.flow"],
		filenames: [],
		interpreters: [
			"chakra",
			"d8",
			"gjs",
			"js",
			"node",
			"nodejs",
			"qjs",
			"rhino",
			"v8",
			"v8-shell"
		],
		parsers: ["flow", "babel-flow"],
		vscodeLanguageIds: ["javascript"]
	},
	{
		linguistLanguageId: 183,
		name: "JSX",
		type: "programming",
		tmScope: "source.js.jsx",
		aceMode: "javascript",
		codemirrorMode: "jsx",
		codemirrorMimeType: "text/jsx",
		color: void 0,
		aliases: void 0,
		extensions: [".jsx"],
		filenames: void 0,
		interpreters: void 0,
		parsers: [
			"babel",
			"babel-flow",
			"babel-ts",
			"flow",
			"typescript",
			"espree",
			"meriyah"
		],
		vscodeLanguageIds: ["javascriptreact"],
		group: "JavaScript"
	},
	{
		linguistLanguageId: 378,
		name: "TypeScript",
		type: "programming",
		color: "#3178c6",
		aliases: ["ts"],
		interpreters: ["deno", "ts-node"],
		extensions: [
			".ts",
			".cts",
			".mts"
		],
		tmScope: "source.ts",
		aceMode: "typescript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "application/typescript",
		parsers: ["typescript", "babel-ts"],
		vscodeLanguageIds: ["typescript"]
	},
	{
		linguistLanguageId: 94901924,
		name: "TSX",
		type: "programming",
		color: "#3178c6",
		group: "TypeScript",
		extensions: [".tsx"],
		tmScope: "source.tsx",
		aceMode: "javascript",
		codemirrorMode: "jsx",
		codemirrorMimeType: "text/jsx",
		parsers: ["typescript", "babel-ts"],
		vscodeLanguageIds: ["typescriptreact"]
	}
];
var ws = {};
Ar(ws, {
	canAttachComment: () => fp,
	embed: () => Qu,
	experimentalFeatures: () => Kl,
	getCommentChildNodes: () => Ep,
	getVisitorKeys: () => gr,
	handleComments: () => Kn,
	insertPragma: () => pi,
	isBlockComment: () => re,
	isGap: () => Fp,
	massageAstNode: () => Cu,
	print: () => Ia,
	printComment: () => Pu,
	willPrintOwnComments: () => zn
});
var Ga = (e, t, r, n) => {
	if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
}, N = Ga;
var Ua = (e, t, r) => {
	if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
}, O = Ua;
function Na(e) {
	return e !== null && typeof e == "object";
}
var Ns = Na;
function* Xa(e, t) {
	let { getVisitorKeys: r, filter: n = () => !0 } = t, s = (u) => Ns(u) && n(u);
	for (let u of r(e)) {
		let i = e[u];
		if (Array.isArray(i)) for (let a of i) s(a) && (yield a);
		else s(i) && (yield i);
	}
}
function* Ya(e, t) {
	let r = [e];
	for (let n = 0; n < r.length; n++) {
		let s = r[n];
		for (let u of Xa(s, t)) yield u, r.push(u);
	}
}
function Xs(e, { getVisitorKeys: t, predicate: r }) {
	for (let n of Ya(e, { getVisitorKeys: t })) if (r(n)) return !0;
	return !1;
}
var Ys = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function Hs(e) {
	return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Vs(e) {
	return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var $s = (e) => !(Hs(e) || Vs(e));
var Ha = /[^\x20-\x7F]/u;
function Va(e) {
	if (!e) return 0;
	if (!Ha.test(e)) return e.length;
	e = e.replace(Ys(), "  ");
	let t = 0;
	for (let r of e) {
		let n = r.codePointAt(0);
		n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += $s(n) ? 1 : 2);
	}
	return t;
}
var et = Va;
function Tr(e) {
	return (t, r, n) => {
		let s = !!(n != null && n.backwards);
		if (r === !1) return !1;
		let { length: u } = t, i = r;
		for (; i >= 0 && i < u;) {
			let a = t.charAt(i);
			if (e instanceof RegExp) {
				if (!e.test(a)) return i;
			} else if (!e.includes(a)) return i;
			s ? i-- : i++;
		}
		return i === -1 || i === u ? i : !1;
	};
}
Tr(/\s/u);
var Ge = Tr(" 	"), Ks = Tr(",; 	"), zs = Tr(/[^\n\r]/u);
function $a(e, t, r) {
	let n = !!(r != null && r.backwards);
	if (t === !1) return !1;
	let s = e.charAt(t);
	if (n) {
		if (e.charAt(t - 1) === "\r" && s === `
`) return t - 2;
		if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029") return t - 1;
	} else {
		if (s === "\r" && e.charAt(t + 1) === `
`) return t + 2;
		if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029") return t + 1;
	}
	return t;
}
var Ue = $a;
function Ka(e, t, r = {}) {
	let n = Ge(e, r.backwards ? t - 1 : t, r);
	return n !== Ue(e, n, r);
}
var te = Ka;
function za(e, t) {
	if (t === !1) return !1;
	if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
		for (let r = t + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
	}
	return t;
}
var Lt = za;
function Qa(e, t) {
	return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? zs(e, t) : t;
}
var wt = Qa;
function Za(e, t) {
	let r = null, n = t;
	for (; n !== r;) r = n, n = Ks(e, n), n = Lt(e, n), n = Ge(e, n);
	return n = wt(e, n), n = Ue(e, n), n !== !1 && te(e, n);
}
var Ot = Za;
function eo(e) {
	return Array.isArray(e) && e.length > 0;
}
var w = eo;
var dr = "'", Qs = "\"";
function to(e, t) {
	let r = t === !0 || t === dr ? dr : Qs, n = r === dr ? Qs : dr, s = 0, u = 0;
	for (let i of e) i === r ? s++ : i === n && u++;
	return s > u ? n : r;
}
var xr = to;
function ro(e, t, r) {
	let n = t === "\"" ? "'" : "\"";
	return t + N(!1, e, /\\(.)|(["'])/gsu, (i, a, o) => a === n ? a : o === t ? "\\" + o : o || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(a) ? a : "\\" + a)) + t;
}
var Zs = ro;
function no(e, t) {
	let r = e.slice(1, -1);
	return Zs(r, t.parser === "json" || t.parser === "jsonc" || t.parser === "json5" && t.quoteProps === "preserve" && !t.singleQuote ? "\"" : t.__isInHtmlAttribute ? "'" : xr(r, t.singleQuote), !(t.parser === "css" || t.parser === "less" || t.parser === "scss" || t.__embeddedInHtml));
}
var tt = no;
function R(e) {
	var n, s, u;
	let t = ((n = e.range) == null ? void 0 : n[0]) ?? e.start, r = (u = ((s = e.declaration) == null ? void 0 : s.decorators) ?? e.decorators) == null ? void 0 : u[0];
	return r ? Math.min(R(r), t) : t;
}
function k(e) {
	var t;
	return ((t = e.range) == null ? void 0 : t[1]) ?? e.end;
}
function ht(e, t) {
	let r = R(e);
	return Number.isInteger(r) && r === R(t);
}
function so(e, t) {
	let r = k(e);
	return Number.isInteger(r) && r === k(t);
}
function eu(e, t) {
	return ht(e, t) && so(e, t);
}
var Qt = null;
function Zt(e) {
	if (Qt !== null && typeof Qt.property) {
		let t = Qt;
		return Qt = Zt.prototype = null, t;
	}
	return Qt = Zt.prototype = e ?? Object.create(null), new Zt();
}
var uo = 10;
for (let e = 0; e <= uo; e++) Zt();
function In(e) {
	return Zt(e);
}
function io(e, t = "type") {
	In(e);
	function r(n) {
		let s = n[t], u = e[s];
		if (!Array.isArray(u)) throw Object.assign(/* @__PURE__ */ new Error(`Missing visitor keys for '${s}'.`), { node: n });
		return u;
	}
	return r;
}
var hr = io;
var gr = hr({
	ArrayExpression: ["elements"],
	AssignmentExpression: ["left", "right"],
	BinaryExpression: ["left", "right"],
	InterpreterDirective: [],
	Directive: ["value"],
	DirectiveLiteral: [],
	BlockStatement: ["directives", "body"],
	BreakStatement: ["label"],
	CallExpression: [
		"callee",
		"arguments",
		"typeParameters",
		"typeArguments"
	],
	CatchClause: ["param", "body"],
	ConditionalExpression: [
		"test",
		"consequent",
		"alternate"
	],
	ContinueStatement: ["label"],
	DebuggerStatement: [],
	DoWhileStatement: ["test", "body"],
	EmptyStatement: [],
	ExpressionStatement: ["expression"],
	File: ["program"],
	ForInStatement: [
		"left",
		"right",
		"body"
	],
	ForStatement: [
		"init",
		"test",
		"update",
		"body"
	],
	FunctionDeclaration: [
		"id",
		"params",
		"body",
		"returnType",
		"typeParameters",
		"predicate"
	],
	FunctionExpression: [
		"id",
		"params",
		"body",
		"returnType",
		"typeParameters"
	],
	Identifier: ["typeAnnotation", "decorators"],
	IfStatement: [
		"test",
		"consequent",
		"alternate"
	],
	LabeledStatement: ["label", "body"],
	StringLiteral: [],
	NumericLiteral: [],
	NullLiteral: [],
	BooleanLiteral: [],
	RegExpLiteral: [],
	LogicalExpression: ["left", "right"],
	MemberExpression: ["object", "property"],
	NewExpression: [
		"callee",
		"arguments",
		"typeParameters",
		"typeArguments"
	],
	Program: ["directives", "body"],
	ObjectExpression: ["properties"],
	ObjectMethod: [
		"key",
		"params",
		"body",
		"decorators",
		"returnType",
		"typeParameters"
	],
	ObjectProperty: [
		"key",
		"value",
		"decorators"
	],
	RestElement: [
		"argument",
		"typeAnnotation",
		"decorators"
	],
	ReturnStatement: ["argument"],
	SequenceExpression: ["expressions"],
	ParenthesizedExpression: ["expression"],
	SwitchCase: ["test", "consequent"],
	SwitchStatement: ["discriminant", "cases"],
	ThisExpression: [],
	ThrowStatement: ["argument"],
	TryStatement: [
		"block",
		"handler",
		"finalizer"
	],
	UnaryExpression: ["argument"],
	UpdateExpression: ["argument"],
	VariableDeclaration: ["declarations"],
	VariableDeclarator: ["id", "init"],
	WhileStatement: ["test", "body"],
	WithStatement: ["object", "body"],
	AssignmentPattern: [
		"left",
		"right",
		"decorators",
		"typeAnnotation"
	],
	ArrayPattern: [
		"elements",
		"typeAnnotation",
		"decorators"
	],
	ArrowFunctionExpression: [
		"params",
		"body",
		"returnType",
		"typeParameters",
		"predicate"
	],
	ClassBody: ["body"],
	ClassExpression: [
		"id",
		"body",
		"superClass",
		"mixins",
		"typeParameters",
		"superTypeParameters",
		"implements",
		"decorators",
		"superTypeArguments"
	],
	ClassDeclaration: [
		"id",
		"body",
		"superClass",
		"mixins",
		"typeParameters",
		"superTypeParameters",
		"implements",
		"decorators",
		"superTypeArguments"
	],
	ExportAllDeclaration: [
		"source",
		"attributes",
		"exported"
	],
	ExportDefaultDeclaration: ["declaration"],
	ExportNamedDeclaration: [
		"declaration",
		"specifiers",
		"source",
		"attributes"
	],
	ExportSpecifier: ["local", "exported"],
	ForOfStatement: [
		"left",
		"right",
		"body"
	],
	ImportDeclaration: [
		"specifiers",
		"source",
		"attributes"
	],
	ImportDefaultSpecifier: ["local"],
	ImportNamespaceSpecifier: ["local"],
	ImportSpecifier: ["local", "imported"],
	ImportExpression: [
		"source",
		"options",
		"attributes"
	],
	MetaProperty: ["meta", "property"],
	ClassMethod: [
		"key",
		"params",
		"body",
		"decorators",
		"returnType",
		"typeParameters"
	],
	ObjectPattern: [
		"properties",
		"typeAnnotation",
		"decorators"
	],
	SpreadElement: ["argument"],
	Super: [],
	TaggedTemplateExpression: [
		"tag",
		"quasi",
		"typeParameters",
		"typeArguments"
	],
	TemplateElement: [],
	TemplateLiteral: ["quasis", "expressions"],
	YieldExpression: ["argument"],
	AwaitExpression: ["argument"],
	Import: [],
	BigIntLiteral: [],
	ExportNamespaceSpecifier: ["exported"],
	OptionalMemberExpression: ["object", "property"],
	OptionalCallExpression: [
		"callee",
		"arguments",
		"typeParameters",
		"typeArguments"
	],
	ClassProperty: [
		"key",
		"value",
		"typeAnnotation",
		"decorators",
		"variance"
	],
	ClassAccessorProperty: [
		"key",
		"value",
		"typeAnnotation",
		"decorators"
	],
	ClassPrivateProperty: [
		"key",
		"value",
		"decorators",
		"typeAnnotation",
		"variance"
	],
	ClassPrivateMethod: [
		"key",
		"params",
		"body",
		"decorators",
		"returnType",
		"typeParameters"
	],
	PrivateName: ["id"],
	StaticBlock: ["body"],
	AnyTypeAnnotation: [],
	ArrayTypeAnnotation: ["elementType"],
	BooleanTypeAnnotation: [],
	BooleanLiteralTypeAnnotation: [],
	NullLiteralTypeAnnotation: [],
	ClassImplements: ["id", "typeParameters"],
	DeclareClass: [
		"id",
		"typeParameters",
		"extends",
		"mixins",
		"implements",
		"body"
	],
	DeclareFunction: ["id", "predicate"],
	DeclareInterface: [
		"id",
		"typeParameters",
		"extends",
		"body"
	],
	DeclareModule: ["id", "body"],
	DeclareModuleExports: ["typeAnnotation"],
	DeclareTypeAlias: [
		"id",
		"typeParameters",
		"right"
	],
	DeclareOpaqueType: [
		"id",
		"typeParameters",
		"supertype"
	],
	DeclareVariable: ["id"],
	DeclareExportDeclaration: [
		"declaration",
		"specifiers",
		"source"
	],
	DeclareExportAllDeclaration: ["source"],
	DeclaredPredicate: ["value"],
	ExistsTypeAnnotation: [],
	FunctionTypeAnnotation: [
		"typeParameters",
		"params",
		"rest",
		"returnType",
		"this"
	],
	FunctionTypeParam: ["name", "typeAnnotation"],
	GenericTypeAnnotation: ["id", "typeParameters"],
	InferredPredicate: [],
	InterfaceExtends: ["id", "typeParameters"],
	InterfaceDeclaration: [
		"id",
		"typeParameters",
		"extends",
		"body"
	],
	InterfaceTypeAnnotation: ["extends", "body"],
	IntersectionTypeAnnotation: ["types"],
	MixedTypeAnnotation: [],
	EmptyTypeAnnotation: [],
	NullableTypeAnnotation: ["typeAnnotation"],
	NumberLiteralTypeAnnotation: [],
	NumberTypeAnnotation: [],
	ObjectTypeAnnotation: [
		"properties",
		"indexers",
		"callProperties",
		"internalSlots"
	],
	ObjectTypeInternalSlot: ["id", "value"],
	ObjectTypeCallProperty: ["value"],
	ObjectTypeIndexer: [
		"id",
		"key",
		"value",
		"variance"
	],
	ObjectTypeProperty: [
		"key",
		"value",
		"variance"
	],
	ObjectTypeSpreadProperty: ["argument"],
	OpaqueType: [
		"id",
		"typeParameters",
		"supertype",
		"impltype"
	],
	QualifiedTypeIdentifier: ["id", "qualification"],
	StringLiteralTypeAnnotation: [],
	StringTypeAnnotation: [],
	SymbolTypeAnnotation: [],
	ThisTypeAnnotation: [],
	TupleTypeAnnotation: ["types", "elementTypes"],
	TypeofTypeAnnotation: ["argument", "typeArguments"],
	TypeAlias: [
		"id",
		"typeParameters",
		"right"
	],
	TypeAnnotation: ["typeAnnotation"],
	TypeCastExpression: ["expression", "typeAnnotation"],
	TypeParameter: [
		"bound",
		"default",
		"variance"
	],
	TypeParameterDeclaration: ["params"],
	TypeParameterInstantiation: ["params"],
	UnionTypeAnnotation: ["types"],
	Variance: [],
	VoidTypeAnnotation: [],
	EnumDeclaration: ["id", "body"],
	EnumBooleanBody: ["members"],
	EnumNumberBody: ["members"],
	EnumStringBody: ["members"],
	EnumSymbolBody: ["members"],
	EnumBooleanMember: ["id", "init"],
	EnumNumberMember: ["id", "init"],
	EnumStringMember: ["id", "init"],
	EnumDefaultedMember: ["id"],
	IndexedAccessType: ["objectType", "indexType"],
	OptionalIndexedAccessType: ["objectType", "indexType"],
	JSXAttribute: ["name", "value"],
	JSXClosingElement: ["name"],
	JSXElement: [
		"openingElement",
		"children",
		"closingElement"
	],
	JSXEmptyExpression: [],
	JSXExpressionContainer: ["expression"],
	JSXSpreadChild: ["expression"],
	JSXIdentifier: [],
	JSXMemberExpression: ["object", "property"],
	JSXNamespacedName: ["namespace", "name"],
	JSXOpeningElement: [
		"name",
		"attributes",
		"typeArguments",
		"typeParameters"
	],
	JSXSpreadAttribute: ["argument"],
	JSXText: [],
	JSXFragment: [
		"openingFragment",
		"children",
		"closingFragment"
	],
	JSXOpeningFragment: [],
	JSXClosingFragment: [],
	Noop: [],
	Placeholder: [],
	V8IntrinsicIdentifier: [],
	ArgumentPlaceholder: [],
	BindExpression: ["object", "callee"],
	ImportAttribute: ["key", "value"],
	Decorator: ["expression"],
	DoExpression: ["body"],
	ExportDefaultSpecifier: ["exported"],
	RecordExpression: ["properties"],
	TupleExpression: ["elements"],
	DecimalLiteral: [],
	ModuleExpression: ["body"],
	TopicReference: [],
	PipelineTopicExpression: ["expression"],
	PipelineBareFunction: ["callee"],
	PipelinePrimaryTopicReference: [],
	TSParameterProperty: ["parameter", "decorators"],
	TSDeclareFunction: [
		"id",
		"typeParameters",
		"params",
		"returnType",
		"body"
	],
	TSDeclareMethod: [
		"decorators",
		"key",
		"typeParameters",
		"params",
		"returnType"
	],
	TSQualifiedName: ["left", "right"],
	TSCallSignatureDeclaration: [
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSConstructSignatureDeclaration: [
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSPropertySignature: ["key", "typeAnnotation"],
	TSMethodSignature: [
		"key",
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSIndexSignature: ["parameters", "typeAnnotation"],
	TSAnyKeyword: [],
	TSBooleanKeyword: [],
	TSBigIntKeyword: [],
	TSIntrinsicKeyword: [],
	TSNeverKeyword: [],
	TSNullKeyword: [],
	TSNumberKeyword: [],
	TSObjectKeyword: [],
	TSStringKeyword: [],
	TSSymbolKeyword: [],
	TSUndefinedKeyword: [],
	TSUnknownKeyword: [],
	TSVoidKeyword: [],
	TSThisType: [],
	TSFunctionType: [
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSConstructorType: [
		"typeParameters",
		"parameters",
		"typeAnnotation",
		"params",
		"returnType"
	],
	TSTypeReference: [
		"typeName",
		"typeParameters",
		"typeArguments"
	],
	TSTypePredicate: ["parameterName", "typeAnnotation"],
	TSTypeQuery: [
		"exprName",
		"typeParameters",
		"typeArguments"
	],
	TSTypeLiteral: ["members"],
	TSArrayType: ["elementType"],
	TSTupleType: ["elementTypes"],
	TSOptionalType: ["typeAnnotation"],
	TSRestType: ["typeAnnotation"],
	TSNamedTupleMember: ["label", "elementType"],
	TSUnionType: ["types"],
	TSIntersectionType: ["types"],
	TSConditionalType: [
		"checkType",
		"extendsType",
		"trueType",
		"falseType"
	],
	TSInferType: ["typeParameter"],
	TSParenthesizedType: ["typeAnnotation"],
	TSTypeOperator: ["typeAnnotation"],
	TSIndexedAccessType: ["objectType", "indexType"],
	TSMappedType: [
		"typeParameter",
		"typeAnnotation",
		"nameType"
	],
	TSLiteralType: ["literal"],
	TSExpressionWithTypeArguments: ["expression", "typeParameters"],
	TSInterfaceDeclaration: [
		"id",
		"typeParameters",
		"extends",
		"body"
	],
	TSInterfaceBody: ["body"],
	TSTypeAliasDeclaration: [
		"id",
		"typeParameters",
		"typeAnnotation"
	],
	TSInstantiationExpression: [
		"expression",
		"typeParameters",
		"typeArguments"
	],
	TSAsExpression: ["expression", "typeAnnotation"],
	TSSatisfiesExpression: ["expression", "typeAnnotation"],
	TSTypeAssertion: ["typeAnnotation", "expression"],
	TSEnumDeclaration: ["id", "members"],
	TSEnumMember: ["id", "initializer"],
	TSModuleDeclaration: ["id", "body"],
	TSModuleBlock: ["body"],
	TSImportType: [
		"argument",
		"qualifier",
		"typeParameters",
		"typeArguments"
	],
	TSImportEqualsDeclaration: ["id", "moduleReference"],
	TSExternalModuleReference: ["expression"],
	TSNonNullExpression: ["expression"],
	TSExportAssignment: ["expression"],
	TSNamespaceExportDeclaration: ["id"],
	TSTypeAnnotation: ["typeAnnotation"],
	TSTypeParameterInstantiation: ["params"],
	TSTypeParameterDeclaration: ["params"],
	TSTypeParameter: [
		"constraint",
		"default",
		"name"
	],
	ChainExpression: ["expression"],
	ExperimentalRestProperty: ["argument"],
	ExperimentalSpreadProperty: ["argument"],
	Literal: [],
	MethodDefinition: [
		"decorators",
		"key",
		"value"
	],
	PrivateIdentifier: [],
	Property: ["key", "value"],
	PropertyDefinition: [
		"decorators",
		"key",
		"typeAnnotation",
		"value",
		"variance"
	],
	AccessorProperty: [
		"decorators",
		"key",
		"typeAnnotation",
		"value"
	],
	TSAbstractAccessorProperty: [
		"decorators",
		"key",
		"typeAnnotation"
	],
	TSAbstractKeyword: [],
	TSAbstractMethodDefinition: ["key", "value"],
	TSAbstractPropertyDefinition: [
		"decorators",
		"key",
		"typeAnnotation"
	],
	TSAsyncKeyword: [],
	TSClassImplements: [
		"expression",
		"typeArguments",
		"typeParameters"
	],
	TSDeclareKeyword: [],
	TSEmptyBodyFunctionExpression: [
		"id",
		"typeParameters",
		"params",
		"returnType"
	],
	TSEnumBody: ["members"],
	TSExportKeyword: [],
	TSInterfaceHeritage: [
		"expression",
		"typeArguments",
		"typeParameters"
	],
	TSPrivateKeyword: [],
	TSProtectedKeyword: [],
	TSPublicKeyword: [],
	TSReadonlyKeyword: [],
	TSStaticKeyword: [],
	TSTemplateLiteralType: ["quasis", "types"],
	AsConstExpression: ["expression"],
	AsExpression: ["expression", "typeAnnotation"],
	BigIntLiteralTypeAnnotation: [],
	BigIntTypeAnnotation: [],
	ComponentDeclaration: [
		"id",
		"params",
		"body",
		"typeParameters",
		"rendersType"
	],
	ComponentParameter: ["name", "local"],
	ComponentTypeAnnotation: [
		"params",
		"rest",
		"typeParameters",
		"rendersType"
	],
	ComponentTypeParameter: ["name", "typeAnnotation"],
	ConditionalTypeAnnotation: [
		"checkType",
		"extendsType",
		"trueType",
		"falseType"
	],
	DeclareComponent: [
		"id",
		"params",
		"rest",
		"typeParameters",
		"rendersType"
	],
	DeclareEnum: ["id", "body"],
	DeclareHook: ["id"],
	DeclareNamespace: ["id", "body"],
	EnumBigIntBody: ["members"],
	EnumBigIntMember: ["id", "init"],
	HookDeclaration: [
		"id",
		"params",
		"body",
		"typeParameters",
		"returnType"
	],
	HookTypeAnnotation: [
		"params",
		"returnType",
		"rest",
		"typeParameters"
	],
	InferTypeAnnotation: ["typeParameter"],
	KeyofTypeAnnotation: ["argument"],
	ObjectTypeMappedTypeProperty: [
		"keyTparam",
		"propType",
		"sourceType",
		"variance"
	],
	QualifiedTypeofIdentifier: ["qualification", "id"],
	TupleTypeLabeledElement: [
		"label",
		"elementType",
		"variance"
	],
	TupleTypeSpreadElement: ["label", "typeAnnotation"],
	TypeOperator: ["typeAnnotation"],
	TypePredicate: [
		"parameterName",
		"typeAnnotation",
		"asserts"
	],
	NGRoot: ["node"],
	NGPipeExpression: [
		"left",
		"right",
		"arguments"
	],
	NGChainedExpression: ["expressions"],
	NGEmptyExpression: [],
	NGMicrosyntax: ["body"],
	NGMicrosyntaxKey: [],
	NGMicrosyntaxExpression: ["expression", "alias"],
	NGMicrosyntaxKeyedExpression: ["key", "expression"],
	NGMicrosyntaxLet: ["key", "value"],
	NGMicrosyntaxAs: ["key", "alias"],
	JsExpressionRoot: ["node"],
	JsonRoot: ["node"],
	TSJSDocAllType: [],
	TSJSDocUnknownType: [],
	TSJSDocNullableType: ["typeAnnotation"],
	TSJSDocNonNullableType: ["typeAnnotation"],
	NeverTypeAnnotation: [],
	UndefinedTypeAnnotation: [],
	UnknownTypeAnnotation: [],
	SatisfiesExpression: ["expression", "typeAnnotation"]
});
function oo(e) {
	let t = new Set(e);
	return (r) => t.has(r == null ? void 0 : r.type);
}
var v = oo;
var re = v([
	"Block",
	"CommentBlock",
	"MultiLine"
]);
var Sr = v([
	"AnyTypeAnnotation",
	"ThisTypeAnnotation",
	"NumberTypeAnnotation",
	"VoidTypeAnnotation",
	"BooleanTypeAnnotation",
	"BigIntTypeAnnotation",
	"SymbolTypeAnnotation",
	"StringTypeAnnotation",
	"NeverTypeAnnotation",
	"UndefinedTypeAnnotation",
	"UnknownTypeAnnotation",
	"EmptyTypeAnnotation",
	"MixedTypeAnnotation"
]);
function lo(e, t) {
	let r = t.split(".");
	for (let n = r.length - 1; n >= 0; n--) {
		let s = r[n];
		if (n === 0) return e.type === "Identifier" && e.name === s;
		if (e.type !== "MemberExpression" || e.optional || e.computed || e.property.type !== "Identifier" || e.property.name !== s) return !1;
		e = e.object;
	}
}
function mo(e, t) {
	return t.some((r) => lo(e, r));
}
var ru = mo;
function yo({ type: e }) {
	return e.startsWith("TS") && e.endsWith("Keyword");
}
var Br = yo;
function tr(e, t) {
	return t(e) || Xs(e, {
		getVisitorKeys: gr,
		predicate: t
	});
}
function jt(e) {
	return e.type === "AssignmentExpression" || e.type === "BinaryExpression" || e.type === "LogicalExpression" || e.type === "NGPipeExpression" || e.type === "ConditionalExpression" || L(e) || q(e) || e.type === "SequenceExpression" || e.type === "TaggedTemplateExpression" || e.type === "BindExpression" || e.type === "UpdateExpression" && !e.prefix || Te(e) || e.type === "TSNonNullExpression" || e.type === "ChainExpression";
}
function uu(e) {
	return e.expressions ? e.expressions[0] : e.left ?? e.test ?? e.callee ?? e.object ?? e.tag ?? e.argument ?? e.expression;
}
function Pr(e) {
	if (e.expressions) return ["expressions", 0];
	if (e.left) return ["left"];
	if (e.test) return ["test"];
	if (e.object) return ["object"];
	if (e.callee) return ["callee"];
	if (e.tag) return ["tag"];
	if (e.argument) return ["argument"];
	if (e.expression) return ["expression"];
	throw new Error("Unexpected node has no left side.");
}
var vt = v([
	"Line",
	"CommentLine",
	"SingleLine",
	"HashbangComment",
	"HTMLOpen",
	"HTMLClose",
	"Hashbang",
	"InterpreterDirective"
]), iu = v([
	"ExportDefaultDeclaration",
	"DeclareExportDeclaration",
	"ExportNamedDeclaration",
	"ExportAllDeclaration",
	"DeclareExportAllDeclaration"
]), U = v(["ArrayExpression", "TupleExpression"]), se = v(["ObjectExpression", "RecordExpression"]);
function au(e) {
	return e.type === "LogicalExpression" && e.operator === "??";
}
function Ce(e) {
	return e.type === "NumericLiteral" || e.type === "Literal" && typeof e.value == "number";
}
function jn(e) {
	return e.type === "UnaryExpression" && (e.operator === "+" || e.operator === "-") && Ce(e.argument);
}
function Q(e) {
	return !!(e && (e.type === "StringLiteral" || e.type === "Literal" && typeof e.value == "string"));
}
function vn(e) {
	return e.type === "RegExpLiteral" || e.type === "Literal" && !!e.regex;
}
var kr = v([
	"Literal",
	"BooleanLiteral",
	"BigIntLiteral",
	"DecimalLiteral",
	"DirectiveLiteral",
	"NullLiteral",
	"NumericLiteral",
	"RegExpLiteral",
	"StringLiteral"
]), Do = v([
	"Identifier",
	"ThisExpression",
	"Super",
	"PrivateName",
	"PrivateIdentifier",
	"Import"
]), we = v([
	"ObjectTypeAnnotation",
	"TSTypeLiteral",
	"TSMappedType"
]), _t = v(["FunctionExpression", "ArrowFunctionExpression"]);
function fo(e) {
	return e.type === "FunctionExpression" || e.type === "ArrowFunctionExpression" && e.body.type === "BlockStatement";
}
function Ln(e) {
	return L(e) && e.callee.type === "Identifier" && [
		"async",
		"inject",
		"fakeAsync",
		"waitForAsync"
	].includes(e.callee.name);
}
var X = v(["JSXElement", "JSXFragment"]);
function gt(e) {
	return e.method && e.kind === "init" || e.kind === "get" || e.kind === "set";
}
function Ir(e) {
	return (e.type === "ObjectTypeProperty" || e.type === "ObjectTypeInternalSlot") && !e.static && !e.method && e.kind !== "get" && e.kind !== "set" && e.value.type === "FunctionTypeAnnotation";
}
function ou(e) {
	return (e.type === "TypeAnnotation" || e.type === "TSTypeAnnotation") && e.typeAnnotation.type === "FunctionTypeAnnotation" && !e.static && !ht(e, e.typeAnnotation);
}
var De = v([
	"BinaryExpression",
	"LogicalExpression",
	"NGPipeExpression"
]);
function Ft(e) {
	return q(e) || e.type === "BindExpression" && !!e.object;
}
var Eo = v([
	"TSThisType",
	"NullLiteralTypeAnnotation",
	"BooleanLiteralTypeAnnotation",
	"StringLiteralTypeAnnotation",
	"BigIntLiteralTypeAnnotation",
	"NumberLiteralTypeAnnotation",
	"TSLiteralType",
	"TSTemplateLiteralType"
]);
function Mt(e) {
	return Br(e) || Sr(e) || Eo(e) || (e.type === "GenericTypeAnnotation" || e.type === "TSTypeReference") && !e.typeParameters && !e.typeArguments;
}
function Fo(e) {
	return e.type === "Identifier" && (e.name === "beforeEach" || e.name === "beforeAll" || e.name === "afterEach" || e.name === "afterAll");
}
var Co = [
	"it",
	"it.only",
	"it.skip",
	"describe",
	"describe.only",
	"describe.skip",
	"test",
	"test.only",
	"test.skip",
	"test.step",
	"test.describe",
	"test.describe.only",
	"test.describe.parallel",
	"test.describe.parallel.only",
	"test.describe.serial",
	"test.describe.serial.only",
	"skip",
	"xit",
	"xdescribe",
	"xtest",
	"fit",
	"fdescribe",
	"ftest"
];
function Ao(e) {
	return ru(e, Co);
}
function St(e, t) {
	if ((e == null ? void 0 : e.type) !== "CallExpression" || e.optional) return !1;
	let r = oe(e);
	if (r.length === 1) {
		if (Ln(e) && St(t)) return _t(r[0]);
		if (Fo(e.callee)) return Ln(r[0]);
	} else if ((r.length === 2 || r.length === 3) && (r[0].type === "TemplateLiteral" || Q(r[0])) && Ao(e.callee)) return r[2] && !Ce(r[2]) ? !1 : (r.length === 2 ? _t(r[1]) : fo(r[1]) && K(r[1]).length <= 1) || Ln(r[1]);
	return !1;
}
var pu = (e) => (t) => ((t == null ? void 0 : t.type) === "ChainExpression" && (t = t.expression), e(t)), L = pu(v(["CallExpression", "OptionalCallExpression"])), q = pu(v(["MemberExpression", "OptionalMemberExpression"]));
function Mn(e, t = 5) {
	return cu(e, t) <= t;
}
function cu(e, t) {
	let r = 0;
	for (let n in e) {
		let s = e[n];
		if (s && typeof s == "object" && typeof s.type == "string" && (r++, r += cu(s, t - r)), r > t) return r;
	}
	return r;
}
var To = .25;
function rr(e, t) {
	let { printWidth: r } = t;
	if (d(e)) return !1;
	let n = r * To;
	if (e.type === "ThisExpression" || e.type === "Identifier" && e.name.length <= n || jn(e) && !d(e.argument)) return !0;
	let s = e.type === "Literal" && "regex" in e && e.regex.pattern || e.type === "RegExpLiteral" && e.pattern;
	return s ? s.length <= n : Q(e) ? tt(fe(e), t).length <= n : e.type === "TemplateLiteral" ? e.expressions.length === 0 && e.quasis[0].value.raw.length <= n && !e.quasis[0].value.raw.includes(`
`) : e.type === "UnaryExpression" ? rr(e.argument, { printWidth: r }) : e.type === "CallExpression" && e.arguments.length === 0 && e.callee.type === "Identifier" ? e.callee.name.length <= n - 2 : kr(e);
}
function Oe(e, t) {
	return X(t) ? Bt(t) : d(t, g.Leading, (r) => te(e, k(r)));
}
function nu(e) {
	return e.quasis.some((t) => t.value.raw.includes(`
`));
}
function Lr(e, t) {
	return (e.type === "TemplateLiteral" && nu(e) || e.type === "TaggedTemplateExpression" && nu(e.quasi)) && !te(t, R(e), { backwards: !0 });
}
function wr(e) {
	if (!d(e)) return !1;
	let t = O(!1, ct(e, g.Dangling), -1);
	return t && !re(t);
}
function lu(e) {
	if (e.length <= 1) return !1;
	let t = 0;
	for (let r of e) if (_t(r)) {
		if (t += 1, t > 1) return !0;
	} else if (L(r)) {
		for (let n of oe(r)) if (_t(n)) return !0;
	}
	return !1;
}
function Or(e) {
	let { node: t, parent: r, key: n } = e;
	return n === "callee" && L(t) && L(r) && r.arguments.length > 0 && t.arguments.length > r.arguments.length;
}
var xo = new Set([
	"!",
	"-",
	"+",
	"~"
]);
function be(e, t = 2) {
	if (t <= 0) return !1;
	if (e.type === "ChainExpression" || e.type === "TSNonNullExpression") return be(e.expression, t);
	let r = (n) => be(n, t - 1);
	if (vn(e)) return et(e.pattern ?? e.regex.pattern) <= 5;
	if (kr(e) || Do(e) || e.type === "ArgumentPlaceholder") return !0;
	if (e.type === "TemplateLiteral") return e.quasis.every((n) => !n.value.raw.includes(`
`)) && e.expressions.every(r);
	if (se(e)) return e.properties.every((n) => !n.computed && (n.shorthand || n.value && r(n.value)));
	if (U(e)) return e.elements.every((n) => n === null || r(n));
	if (lt(e)) {
		if (e.type === "ImportExpression" || be(e.callee, t)) {
			let n = oe(e);
			return n.length <= t && n.every(r);
		}
		return !1;
	}
	return q(e) ? be(e.object, t) && be(e.property, t) : e.type === "UnaryExpression" && xo.has(e.operator) || e.type === "UpdateExpression" ? be(e.argument, t) : !1;
}
function fe(e) {
	var t;
	return ((t = e.extra) == null ? void 0 : t.raw) ?? e.raw;
}
function mu(e) {
	return e;
}
function ae(e, t = "es5") {
	return e.trailingComma === "es5" && t === "es5" || e.trailingComma === "all" && (t === "all" || t === "es5");
}
function ie(e, t) {
	switch (e.type) {
		case "BinaryExpression":
		case "LogicalExpression":
		case "AssignmentExpression":
		case "NGPipeExpression": return ie(e.left, t);
		case "MemberExpression":
		case "OptionalMemberExpression": return ie(e.object, t);
		case "TaggedTemplateExpression": return e.tag.type === "FunctionExpression" ? !1 : ie(e.tag, t);
		case "CallExpression":
		case "OptionalCallExpression": return e.callee.type === "FunctionExpression" ? !1 : ie(e.callee, t);
		case "ConditionalExpression": return ie(e.test, t);
		case "UpdateExpression": return !e.prefix && ie(e.argument, t);
		case "BindExpression": return e.object && ie(e.object, t);
		case "SequenceExpression": return ie(e.expressions[0], t);
		case "ChainExpression":
		case "TSSatisfiesExpression":
		case "TSAsExpression":
		case "TSNonNullExpression":
		case "AsExpression":
		case "AsConstExpression":
		case "SatisfiesExpression": return ie(e.expression, t);
		default: return t(e);
	}
}
var su = {
	"==": !0,
	"!=": !0,
	"===": !0,
	"!==": !0
}, br = {
	"*": !0,
	"/": !0,
	"%": !0
}, _n = {
	">>": !0,
	">>>": !0,
	"<<": !0
};
function nr(e, t) {
	return !(er(t) !== er(e) || e === "**" || su[e] && su[t] || t === "%" && br[e] || e === "%" && br[t] || t !== e && br[t] && br[e] || _n[e] && _n[t]);
}
var ho = new Map([
	["|>"],
	["??"],
	["||"],
	["&&"],
	["|"],
	["^"],
	["&"],
	[
		"==",
		"===",
		"!=",
		"!=="
	],
	[
		"<",
		">",
		"<=",
		">=",
		"in",
		"instanceof"
	],
	[
		">>",
		"<<",
		">>>"
	],
	["+", "-"],
	[
		"*",
		"/",
		"%"
	],
	["**"]
].flatMap((e, t) => e.map((r) => [r, t])));
function er(e) {
	return ho.get(e);
}
function yu(e) {
	return !!_n[e] || e === "|" || e === "^" || e === "&";
}
function Du(e) {
	var r;
	if (e.rest) return !0;
	return ((r = O(!1, K(e), -1)) == null ? void 0 : r.type) === "RestElement";
}
var wn = /* @__PURE__ */ new WeakMap();
function K(e) {
	if (wn.has(e)) return wn.get(e);
	let t = [];
	return e.this && t.push(e.this), Array.isArray(e.parameters) ? t.push(...e.parameters) : Array.isArray(e.params) && t.push(...e.params), e.rest && t.push(e.rest), wn.set(e, t), t;
}
function fu(e, t) {
	let { node: r } = e, n = 0, s = (u) => t(u, n++);
	r.this && e.call(s, "this"), Array.isArray(r.parameters) ? e.each(s, "parameters") : Array.isArray(r.params) && e.each(s, "params"), r.rest && e.call(s, "rest");
}
var On = /* @__PURE__ */ new WeakMap();
function oe(e) {
	if (On.has(e)) return On.get(e);
	if (e.type === "ChainExpression") return oe(e.expression);
	let t = e.arguments;
	return e.type === "ImportExpression" && (t = [e.source], e.attributes && t.push(e.attributes), e.options && t.push(e.options)), On.set(e, t), t;
}
function Rt(e, t) {
	let { node: r } = e;
	if (r.type === "ChainExpression") return e.call(() => Rt(e, t), "expression");
	r.type === "ImportExpression" ? (e.call((n) => t(n, 0), "source"), r.attributes && e.call((n) => t(n, 1), "attributes"), r.options && e.call((n) => t(n, 1), "options")) : e.each(t, "arguments");
}
function Rn(e, t) {
	let r = [];
	if (e.type === "ChainExpression" && (e = e.expression, r.push("expression")), e.type === "ImportExpression") {
		if (t === 0 || t === (e.attributes || e.options ? -2 : -1)) return [...r, "source"];
		if (e.attributes && (t === 1 || t === -1)) return [...r, "attributes"];
		if (e.options && (t === 1 || t === -1)) return [...r, "options"];
		throw new RangeError("Invalid argument index");
	}
	if (t < 0 && (t = e.arguments.length + t), t < 0 || t >= e.arguments.length) throw new RangeError("Invalid argument index");
	return [
		...r,
		"arguments",
		t
	];
}
function sr(e) {
	return e.value.trim() === "prettier-ignore" && !e.unignore;
}
function Bt(e) {
	return (e == null ? void 0 : e.prettierIgnore) || d(e, g.PrettierIgnore);
}
var g = {
	Leading: 2,
	Trailing: 4,
	Dangling: 8,
	Block: 16,
	Line: 32,
	PrettierIgnore: 64,
	First: 128,
	Last: 256
}, Eu = (e, t) => {
	if (typeof e == "function" && (t = e, e = 0), e || t) return (r, n, s) => !(e & g.Leading && !r.leading || e & g.Trailing && !r.trailing || e & g.Dangling && (r.leading || r.trailing) || e & g.Block && !re(r) || e & g.Line && !vt(r) || e & g.First && n !== 0 || e & g.Last && n !== s.length - 1 || e & g.PrettierIgnore && !sr(r) || t && !t(r));
};
function d(e, t, r) {
	if (!w(e == null ? void 0 : e.comments)) return !1;
	let n = Eu(t, r);
	return n ? e.comments.some(n) : !0;
}
function ct(e, t, r) {
	if (!Array.isArray(e == null ? void 0 : e.comments)) return [];
	let n = Eu(t, r);
	return n ? e.comments.filter(n) : e.comments;
}
var pe = (e, { originalText: t }) => Ot(t, k(e));
function lt(e) {
	return L(e) || e.type === "NewExpression" || e.type === "ImportExpression";
}
function Ae(e) {
	return e && (e.type === "ObjectProperty" || e.type === "Property" && !gt(e));
}
var Te = v([
	"TSAsExpression",
	"TSSatisfiesExpression",
	"AsExpression",
	"AsConstExpression",
	"SatisfiesExpression"
]), Ne = v(["UnionTypeAnnotation", "TSUnionType"]), _r = v(["IntersectionTypeAnnotation", "TSIntersectionType"]);
var go = new Set([
	"range",
	"raw",
	"comments",
	"leadingComments",
	"trailingComments",
	"innerComments",
	"extra",
	"start",
	"end",
	"loc",
	"flags",
	"errors",
	"tokens"
]), Jt = (e) => {
	for (let t of e.quasis) delete t.value;
};
function Fu(e, t, r) {
	var s, u;
	if (e.type === "Program" && delete t.sourceType, (e.type === "BigIntLiteral" || e.type === "BigIntLiteralTypeAnnotation") && e.value && (t.value = e.value.toLowerCase()), (e.type === "BigIntLiteral" || e.type === "Literal") && e.bigint && (t.bigint = e.bigint.toLowerCase()), e.type === "DecimalLiteral" && (t.value = Number(e.value)), e.type === "Literal" && t.decimal && (t.decimal = Number(e.decimal)), e.type === "EmptyStatement" || e.type === "JSXText" || e.type === "JSXExpressionContainer" && (e.expression.type === "Literal" || e.expression.type === "StringLiteral") && e.expression.value === " ") return null;
	if ((e.type === "Property" || e.type === "ObjectProperty" || e.type === "MethodDefinition" || e.type === "ClassProperty" || e.type === "ClassMethod" || e.type === "PropertyDefinition" || e.type === "TSDeclareMethod" || e.type === "TSPropertySignature" || e.type === "ObjectTypeProperty" || e.type === "ImportAttribute") && e.key && !e.computed) {
		let { key: i } = e;
		Q(i) || Ce(i) ? t.key = String(i.value) : i.type === "Identifier" && (t.key = i.name);
	}
	if (e.type === "JSXElement" && e.openingElement.name.name === "style" && e.openingElement.attributes.some((i) => i.type === "JSXAttribute" && i.name.name === "jsx")) for (let { type: i, expression: a } of t.children) i === "JSXExpressionContainer" && a.type === "TemplateLiteral" && Jt(a);
	e.type === "JSXAttribute" && e.name.name === "css" && e.value.type === "JSXExpressionContainer" && e.value.expression.type === "TemplateLiteral" && Jt(t.value.expression), e.type === "JSXAttribute" && ((s = e.value) == null ? void 0 : s.type) === "Literal" && /["']|&quot;|&apos;/u.test(e.value.value) && (t.value.value = N(!1, e.value.value, /["']|&quot;|&apos;/gu, "\""));
	let n = e.expression || e.callee;
	if (e.type === "Decorator" && n.type === "CallExpression" && n.callee.name === "Component" && n.arguments.length === 1) {
		let i = e.expression.arguments[0].properties;
		for (let [a, o] of t.expression.arguments[0].properties.entries()) switch (i[a].key.name) {
			case "styles":
				U(o.value) && Jt(o.value.elements[0]);
				break;
			case "template":
				o.value.type === "TemplateLiteral" && Jt(o.value);
				break;
		}
	}
	e.type === "TaggedTemplateExpression" && (e.tag.type === "MemberExpression" || e.tag.type === "Identifier" && (e.tag.name === "gql" || e.tag.name === "graphql" || e.tag.name === "css" || e.tag.name === "md" || e.tag.name === "markdown" || e.tag.name === "html") || e.tag.type === "CallExpression") && Jt(t.quasi), e.type === "TemplateLiteral" && ((u = e.leadingComments) != null && u.some((a) => re(a) && ["GraphQL", "HTML"].some((o) => a.value === ` ${o} `)) || r.type === "CallExpression" && r.callee.name === "graphql" || !e.leadingComments) && Jt(t), e.type === "ChainExpression" && e.expression.type === "TSNonNullExpression" && (t.type = "TSNonNullExpression", t.expression.type = "ChainExpression"), e.type === "TSMappedType" && (delete t.key, delete t.constraint), e.type === "TSEnumDeclaration" && delete t.body;
}
Fu.ignoredProperties = go;
var Cu = Fu;
var rt = "string", _e = "array", nt = "cursor", Xe = "indent", Ye = "align", st = "trim", le = "group", Pe = "fill", xe = "if-break", He = "indent-if-break", Ve = "line-suffix", $e = "line-suffix-boundary", me = "line", je = "label", ve = "break-parent", jr = new Set([
	nt,
	Xe,
	Ye,
	st,
	le,
	Pe,
	xe,
	He,
	Ve,
	$e,
	me,
	je,
	ve
]);
function So(e) {
	if (typeof e == "string") return rt;
	if (Array.isArray(e)) return _e;
	if (!e) return;
	let { type: t } = e;
	if (jr.has(t)) return t;
}
var ut = So;
var Bo = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function bo(e) {
	let t = e === null ? "null" : typeof e;
	if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
	if (ut(e)) throw new Error("doc is valid.");
	let r = Object.prototype.toString.call(e);
	if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
	let n = Bo([...jr].map((s) => `'${s}'`));
	return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Jn = class extends Error {
	name = "InvalidDocError";
	constructor(t) {
		super(bo(t)), this.doc = t;
	}
}, Ct = Jn;
var Au = {};
function Po(e, t, r, n) {
	let s = [e];
	for (; s.length > 0;) {
		let u = s.pop();
		if (u === Au) {
			r(s.pop());
			continue;
		}
		r && s.push(u, Au);
		let i = ut(u);
		if (!i) throw new Ct(u);
		if ((t == null ? void 0 : t(u)) !== !1) switch (i) {
			case _e:
			case Pe: {
				let a = i === _e ? u : u.parts;
				for (let c = a.length - 1; c >= 0; --c) s.push(a[c]);
				break;
			}
			case xe:
				s.push(u.flatContents, u.breakContents);
				break;
			case le:
				if (n && u.expandedStates) for (let a = u.expandedStates.length, o = a - 1; o >= 0; --o) s.push(u.expandedStates[o]);
				else s.push(u.contents);
				break;
			case Ye:
			case Xe:
			case He:
			case je:
			case Ve:
				s.push(u.contents);
				break;
			case rt:
			case nt:
			case st:
			case $e:
			case me:
			case ve: break;
			default: throw new Ct(u);
		}
	}
}
var qn = Po;
var Tu = () => {}, Ke = Tu, vr = Tu;
function f(e) {
	return Ke(e), {
		type: Xe,
		contents: e
	};
}
function he(e, t) {
	return Ke(t), {
		type: Ye,
		contents: t,
		n: e
	};
}
function l(e, t = {}) {
	return Ke(e), vr(t.expandedStates, !0), {
		type: le,
		id: t.id,
		contents: e,
		break: !!t.shouldBreak,
		expandedStates: t.expandedStates
	};
}
function du(e) {
	return he(Number.NEGATIVE_INFINITY, e);
}
function Mr(e) {
	return he(-1, e);
}
function ze(e, t) {
	return l(e[0], {
		...t,
		expandedStates: e
	});
}
function qt(e) {
	return vr(e), {
		type: Pe,
		parts: e
	};
}
function b(e, t = "", r = {}) {
	return Ke(e), t !== "" && Ke(t), {
		type: xe,
		breakContents: e,
		flatContents: t,
		groupId: r.groupId
	};
}
function At(e, t) {
	return Ke(e), {
		type: He,
		contents: e,
		groupId: t.groupId,
		negate: t.negate
	};
}
function Wn(e) {
	return Ke(e), {
		type: Ve,
		contents: e
	};
}
var ke = { type: $e }, Ee = { type: ve };
var Gn = {
	type: me,
	hard: !0
}, ko = {
	type: me,
	hard: !0,
	literal: !0
}, x = { type: me }, E = {
	type: me,
	soft: !0
}, F = [Gn, Ee], Rr = [ko, Ee], Un = { type: nt };
function P(e, t) {
	Ke(e), vr(t);
	let r = [];
	for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
	return r;
}
function xu(e, t, r) {
	Ke(e);
	let n = e;
	if (t > 0) {
		for (let s = 0; s < Math.floor(t / r); ++s) n = f(n);
		n = he(t % r, n), n = he(Number.NEGATIVE_INFINITY, n);
	}
	return n;
}
function it(e, t) {
	return Ke(t), e ? {
		type: je,
		label: e,
		contents: t
	} : t;
}
function mt(e, t) {
	if (typeof e == "string") return t(e);
	let r = /* @__PURE__ */ new Map();
	return n(e);
	function n(u) {
		if (r.has(u)) return r.get(u);
		let i = s(u);
		return r.set(u, i), i;
	}
	function s(u) {
		switch (ut(u)) {
			case _e: return t(u.map(n));
			case Pe: return t({
				...u,
				parts: u.parts.map(n)
			});
			case xe: return t({
				...u,
				breakContents: n(u.breakContents),
				flatContents: n(u.flatContents)
			});
			case le: {
				let { expandedStates: i, contents: a } = u;
				return i ? (i = i.map(n), a = i[0]) : a = n(a), t({
					...u,
					contents: a,
					expandedStates: i
				});
			}
			case Ye:
			case Xe:
			case He:
			case je:
			case Ve: return t({
				...u,
				contents: n(u.contents)
			});
			case rt:
			case nt:
			case st:
			case $e:
			case me:
			case ve: return t(u);
			default: throw new Ct(u);
		}
	}
}
function gu(e, t, r) {
	let n = r, s = !1;
	function u(i) {
		if (s) return !1;
		let a = t(i);
		a !== void 0 && (s = !0, n = a);
	}
	return qn(e, u), n;
}
function Io(e) {
	if (e.type === le && e.break || e.type === me && e.hard || e.type === ve) return !0;
}
function ne(e) {
	return gu(e, Io, !1);
}
function hu(e) {
	if (e.length > 0) {
		let t = O(!1, e, -1);
		!t.expandedStates && !t.break && (t.break = "propagated");
	}
	return null;
}
function Su(e) {
	let t = /* @__PURE__ */ new Set(), r = [];
	function n(u) {
		if (u.type === ve && hu(r), u.type === le) {
			if (r.push(u), t.has(u)) return !1;
			t.add(u);
		}
	}
	function s(u) {
		u.type === le && r.pop().break && hu(r);
	}
	qn(e, n, s, !0);
}
function Lo(e) {
	return e.type === me && !e.hard ? e.soft ? "" : " " : e.type === xe ? e.flatContents : e;
}
function ur(e) {
	return mt(e, Lo);
}
function wo(e) {
	switch (ut(e)) {
		case Pe:
			if (e.parts.every((t) => t === "")) return "";
			break;
		case le:
			if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
			if (e.contents.type === le && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
			break;
		case Ye:
		case Xe:
		case He:
		case Ve:
			if (!e.contents) return "";
			break;
		case xe:
			if (!e.flatContents && !e.breakContents) return "";
			break;
		case _e: {
			let t = [];
			for (let r of e) {
				if (!r) continue;
				let [n, ...s] = Array.isArray(r) ? r : [r];
				typeof n == "string" && typeof O(!1, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...s);
			}
			return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
		}
		case rt:
		case nt:
		case st:
		case $e:
		case me:
		case je:
		case ve: break;
		default: throw new Ct(e);
	}
	return e;
}
function Wt(e) {
	return mt(e, (t) => wo(t));
}
function Ie(e, t = Rr) {
	return mt(e, (r) => typeof r == "string" ? P(t, r.split(`
`)) : r);
}
function Oo(e) {
	if (e.type === me) return !0;
}
function Bu(e) {
	return gu(e, Oo, !1);
}
function ir(e, t) {
	return e.type === je ? {
		...e,
		contents: t(e.contents)
	} : t(e);
}
function _o(e) {
	let t = `*${e.value}*`.split(`
`);
	return t.length > 1 && t.every((r) => r.trimStart()[0] === "*");
}
var bu = _o;
function Pu(e, t) {
	let r = e.node;
	if (vt(r)) return t.originalText.slice(R(r), k(r)).trimEnd();
	if (re(r)) return bu(r) ? jo(r) : [
		"/*",
		Ie(r.value),
		"*/"
	];
	throw new Error("Not a comment: " + JSON.stringify(r));
}
function jo(e) {
	let t = e.value.split(`
`);
	return [
		"/*",
		P(F, t.map((r, n) => n === 0 ? r.trimEnd() : " " + (n < t.length - 1 ? r.trim() : r.trimStart()))),
		"*/"
	];
}
var Kn = {};
Ar(Kn, {
	endOfLine: () => Go,
	ownLine: () => Wo,
	remaining: () => Uo
});
function vo(e) {
	let t = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
	return r.length > 20 && (r = r.slice(0, 19) + "…"), t + (r ? " " + r : "");
}
function Nn(e, t) {
	(e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = vo(e);
}
function ce(e, t) {
	t.leading = !0, t.trailing = !1, Nn(e, t);
}
function Le(e, t, r) {
	t.leading = !1, t.trailing = !1, r && (t.marker = r), Nn(e, t);
}
function z(e, t) {
	t.leading = !1, t.trailing = !0, Nn(e, t);
}
function Mo(e, t) {
	let r = null, n = t;
	for (; n !== r;) r = n, n = Ge(e, n), n = Lt(e, n), n = wt(e, n), n = Ue(e, n);
	return n;
}
var yt = Mo;
function Ro(e, t) {
	let r = yt(e, t);
	return r === !1 ? "" : e.charAt(r);
}
var ge = Ro;
function Jo(e, t, r) {
	for (let n = t; n < r; ++n) if (e.charAt(n) === `
`) return !0;
	return !1;
}
var de = Jo;
function qo(e) {
	return re(e) && e.value[0] === "*" && /@(?:type|satisfies)\b/u.test(e.value);
}
var ku = qo;
function Wo(e) {
	return [
		Mu,
		Lu,
		_u,
		ep,
		Xo,
		Yn,
		Hn,
		Iu,
		wu,
		sp,
		rp,
		$n,
		vu,
		up,
		Ou,
		ju,
		Vn,
		Yo,
		yp
	].some((t) => t(e));
}
function Go(e) {
	return [
		No,
		_u,
		Lu,
		vu,
		Yn,
		Hn,
		Iu,
		wu,
		ju,
		tp,
		np,
		$n,
		op,
		Vn,
		lp,
		mp
	].some((t) => t(e));
}
function Uo(e) {
	return [
		Mu,
		Yn,
		Hn,
		Ho,
		Zo,
		Ou,
		$n,
		Qo,
		zo,
		cp,
		Vn,
		pp
	].some((t) => t(e));
}
function bt(e, t) {
	let r = (e.body || e.properties).find(({ type: n }) => n !== "EmptyStatement");
	r ? ce(r, t) : Le(e, t);
}
function Xn(e, t) {
	e.type === "BlockStatement" ? bt(e, t) : ce(e, t);
}
function No({ comment: e, followingNode: t }) {
	return t && ku(e) ? (ce(t, e), !0) : !1;
}
function Yn({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
	if ((r == null ? void 0 : r.type) !== "IfStatement" || !n) return !1;
	if (ge(s, k(e)) === ")") return z(t, e), !0;
	if (t === r.consequent && n === r.alternate) {
		if (t.type === "BlockStatement") z(t, e);
		else {
			let i = vt(e) || e.loc.start.line === e.loc.end.line, a = e.loc.start.line === t.loc.start.line;
			i && a ? z(t, e) : Le(r, e);
		}
		return !0;
	}
	return n.type === "BlockStatement" ? (bt(n, e), !0) : n.type === "IfStatement" ? (Xn(n.consequent, e), !0) : r.consequent === n ? (ce(n, e), !0) : !1;
}
function Hn({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
	return (r == null ? void 0 : r.type) !== "WhileStatement" || !n ? !1 : ge(s, k(e)) === ")" ? (z(t, e), !0) : n.type === "BlockStatement" ? (bt(n, e), !0) : r.body === n ? (ce(n, e), !0) : !1;
}
function Iu({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	return (r == null ? void 0 : r.type) !== "TryStatement" && (r == null ? void 0 : r.type) !== "CatchClause" || !n ? !1 : r.type === "CatchClause" && t ? (z(t, e), !0) : n.type === "BlockStatement" ? (bt(n, e), !0) : n.type === "TryStatement" ? (Xn(n.finalizer, e), !0) : n.type === "CatchClause" ? (Xn(n.body, e), !0) : !1;
}
function Xo({ comment: e, enclosingNode: t, followingNode: r }) {
	return q(t) && (r == null ? void 0 : r.type) === "Identifier" ? (ce(t, e), !0) : !1;
}
function Yo({ comment: e, enclosingNode: t, followingNode: r, options: n }) {
	return !n.experimentalTernaries || !((t == null ? void 0 : t.type) === "ConditionalExpression" || (t == null ? void 0 : t.type) === "ConditionalTypeAnnotation" || (t == null ? void 0 : t.type) === "TSConditionalType") ? !1 : (r == null ? void 0 : r.type) === "ConditionalExpression" || (r == null ? void 0 : r.type) === "ConditionalTypeAnnotation" || (r == null ? void 0 : r.type) === "TSConditionalType" ? (Le(t, e), !0) : !1;
}
function Lu({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s, options: u }) {
	let i = t && !de(s, k(t), R(e));
	return (!t || !i) && ((r == null ? void 0 : r.type) === "ConditionalExpression" || (r == null ? void 0 : r.type) === "ConditionalTypeAnnotation" || (r == null ? void 0 : r.type) === "TSConditionalType") && n ? u.experimentalTernaries && r.alternate === n && !(re(e) && !de(u.originalText, R(e), k(e))) ? (Le(r, e), !0) : (ce(n, e), !0) : !1;
}
function Ho({ comment: e, precedingNode: t, enclosingNode: r }) {
	return Ae(r) && r.shorthand && r.key === t && r.value.type === "AssignmentPattern" ? (z(r.value.left, e), !0) : !1;
}
var Vo = new Set([
	"ClassDeclaration",
	"ClassExpression",
	"DeclareClass",
	"DeclareInterface",
	"InterfaceDeclaration",
	"TSInterfaceDeclaration"
]);
function wu({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	if (Vo.has(r == null ? void 0 : r.type)) {
		if (w(r.decorators) && (n == null ? void 0 : n.type) !== "Decorator") return z(O(!1, r.decorators, -1), e), !0;
		if (r.body && n === r.body) return bt(r.body, e), !0;
		if (n) {
			if (r.superClass && n === r.superClass && t && (t === r.id || t === r.typeParameters)) return z(t, e), !0;
			for (let s of [
				"implements",
				"extends",
				"mixins"
			]) if (r[s] && n === r[s][0]) return t && (t === r.id || t === r.typeParameters || t === r.superClass) ? z(t, e) : Le(r, e, s), !0;
		}
	}
	return !1;
}
var $o = new Set([
	"ClassMethod",
	"ClassProperty",
	"PropertyDefinition",
	"TSAbstractPropertyDefinition",
	"TSAbstractMethodDefinition",
	"TSDeclareMethod",
	"MethodDefinition",
	"ClassAccessorProperty",
	"AccessorProperty",
	"TSAbstractAccessorProperty"
]);
function Ou({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
	return r && t && ge(n, k(e)) === "(" && (r.type === "Property" || r.type === "TSDeclareMethod" || r.type === "TSAbstractMethodDefinition") && t.type === "Identifier" && r.key === t && ge(n, k(t)) !== ":" ? (z(t, e), !0) : (t == null ? void 0 : t.type) === "Decorator" && $o.has(r == null ? void 0 : r.type) ? (z(t, e), !0) : !1;
}
var Ko = new Set([
	"FunctionDeclaration",
	"FunctionExpression",
	"ClassMethod",
	"MethodDefinition",
	"ObjectMethod"
]);
function zo({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
	return ge(n, k(e)) !== "(" ? !1 : t && Ko.has(r == null ? void 0 : r.type) ? (z(t, e), !0) : !1;
}
function Qo({ comment: e, enclosingNode: t, text: r }) {
	if ((t == null ? void 0 : t.type) !== "ArrowFunctionExpression") return !1;
	let n = yt(r, k(e));
	return n !== !1 && r.slice(n, n + 2) === "=>" ? (Le(t, e), !0) : !1;
}
function Zo({ comment: e, enclosingNode: t, text: r }) {
	return ge(r, k(e)) !== ")" ? !1 : t && (Ru(t) && K(t).length === 0 || lt(t) && oe(t).length === 0) ? (Le(t, e), !0) : ((t == null ? void 0 : t.type) === "MethodDefinition" || (t == null ? void 0 : t.type) === "TSAbstractMethodDefinition") && K(t.value).length === 0 ? (Le(t.value, e), !0) : !1;
}
function ep({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
	return (t == null ? void 0 : t.type) === "ComponentTypeParameter" && ((r == null ? void 0 : r.type) === "DeclareComponent" || (r == null ? void 0 : r.type) === "ComponentTypeAnnotation") && (n == null ? void 0 : n.type) !== "ComponentTypeParameter" ? (z(t, e), !0) : ((t == null ? void 0 : t.type) === "ComponentParameter" || (t == null ? void 0 : t.type) === "RestElement") && (r == null ? void 0 : r.type) === "ComponentDeclaration" && ge(s, k(e)) === ")" ? (z(t, e), !0) : !1;
}
function _u({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
	return (t == null ? void 0 : t.type) === "FunctionTypeParam" && (r == null ? void 0 : r.type) === "FunctionTypeAnnotation" && (n == null ? void 0 : n.type) !== "FunctionTypeParam" ? (z(t, e), !0) : ((t == null ? void 0 : t.type) === "Identifier" || (t == null ? void 0 : t.type) === "AssignmentPattern" || (t == null ? void 0 : t.type) === "ObjectPattern" || (t == null ? void 0 : t.type) === "ArrayPattern" || (t == null ? void 0 : t.type) === "RestElement" || (t == null ? void 0 : t.type) === "TSParameterProperty") && Ru(r) && ge(s, k(e)) === ")" ? (z(t, e), !0) : !re(e) && ((r == null ? void 0 : r.type) === "FunctionDeclaration" || (r == null ? void 0 : r.type) === "FunctionExpression" || (r == null ? void 0 : r.type) === "ObjectMethod") && (n == null ? void 0 : n.type) === "BlockStatement" && r.body === n && yt(s, k(e)) === R(n) ? (bt(n, e), !0) : !1;
}
function ju({ comment: e, enclosingNode: t }) {
	return (t == null ? void 0 : t.type) === "LabeledStatement" ? (ce(t, e), !0) : !1;
}
function Vn({ comment: e, enclosingNode: t }) {
	return ((t == null ? void 0 : t.type) === "ContinueStatement" || (t == null ? void 0 : t.type) === "BreakStatement") && !t.label ? (z(t, e), !0) : !1;
}
function tp({ comment: e, precedingNode: t, enclosingNode: r }) {
	return L(r) && t && r.callee === t && r.arguments.length > 0 ? (ce(r.arguments[0], e), !0) : !1;
}
function rp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	return Ne(r) ? (sr(e) && (n.prettierIgnore = !0, e.unignore = !0), t ? (z(t, e), !0) : !1) : (Ne(n) && sr(e) && (n.types[0].prettierIgnore = !0, e.unignore = !0), !1);
}
function np({ comment: e, enclosingNode: t }) {
	return Ae(t) ? (ce(t, e), !0) : !1;
}
function $n({ comment: e, enclosingNode: t, ast: r, isLastComment: n }) {
	var s;
	return ((s = r == null ? void 0 : r.body) == null ? void 0 : s.length) === 0 ? (n ? Le(r, e) : ce(r, e), !0) : (t == null ? void 0 : t.type) === "Program" && t.body.length === 0 && !w(t.directives) ? (n ? Le(t, e) : ce(t, e), !0) : !1;
}
function sp({ comment: e, enclosingNode: t }) {
	return (t == null ? void 0 : t.type) === "ForInStatement" || (t == null ? void 0 : t.type) === "ForOfStatement" ? (ce(t, e), !0) : !1;
}
function vu({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
	if ((r == null ? void 0 : r.type) === "ImportSpecifier" || (r == null ? void 0 : r.type) === "ExportSpecifier") return ce(r, e), !0;
	let s = (t == null ? void 0 : t.type) === "ImportSpecifier" && (r == null ? void 0 : r.type) === "ImportDeclaration", u = (t == null ? void 0 : t.type) === "ExportSpecifier" && (r == null ? void 0 : r.type) === "ExportNamedDeclaration";
	return (s || u) && te(n, k(e)) ? (z(t, e), !0) : !1;
}
function up({ comment: e, enclosingNode: t }) {
	return (t == null ? void 0 : t.type) === "AssignmentPattern" ? (ce(t, e), !0) : !1;
}
var ip = new Set([
	"VariableDeclarator",
	"AssignmentExpression",
	"TypeAlias",
	"TSTypeAliasDeclaration"
]), ap = new Set([
	"ObjectExpression",
	"RecordExpression",
	"ArrayExpression",
	"TupleExpression",
	"TemplateLiteral",
	"TaggedTemplateExpression",
	"ObjectTypeAnnotation",
	"TSTypeLiteral"
]);
function op({ comment: e, enclosingNode: t, followingNode: r }) {
	return ip.has(t == null ? void 0 : t.type) && r && (ap.has(r.type) || re(e)) ? (ce(r, e), !0) : !1;
}
function pp({ comment: e, enclosingNode: t, followingNode: r, text: n }) {
	return !r && ((t == null ? void 0 : t.type) === "TSMethodSignature" || (t == null ? void 0 : t.type) === "TSDeclareFunction" || (t == null ? void 0 : t.type) === "TSAbstractMethodDefinition") && ge(n, k(e)) === ";" ? (z(t, e), !0) : !1;
}
function Mu({ comment: e, enclosingNode: t, followingNode: r }) {
	if (sr(e) && (t == null ? void 0 : t.type) === "TSMappedType" && (r == null ? void 0 : r.type) === "TSTypeParameter" && r.constraint) return t.prettierIgnore = !0, e.unignore = !0, !0;
}
function cp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	return (r == null ? void 0 : r.type) !== "TSMappedType" ? !1 : (n == null ? void 0 : n.type) === "TSTypeParameter" && n.name ? (ce(n.name, e), !0) : (t == null ? void 0 : t.type) === "TSTypeParameter" && t.constraint ? (z(t.constraint, e), !0) : !1;
}
function lp({ comment: e, enclosingNode: t, followingNode: r }) {
	return !t || t.type !== "SwitchCase" || t.test || !r || r !== t.consequent[0] ? !1 : (r.type === "BlockStatement" && vt(e) ? bt(r, e) : Le(t, e), !0);
}
function mp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	return Ne(t) && ((r.type === "TSArrayType" || r.type === "ArrayTypeAnnotation") && !n || _r(r)) ? (z(O(!1, t.types, -1), e), !0) : !1;
}
function yp({ comment: e, enclosingNode: t, precedingNode: r, followingNode: n }) {
	if (((t == null ? void 0 : t.type) === "ObjectPattern" || (t == null ? void 0 : t.type) === "ArrayPattern") && (n == null ? void 0 : n.type) === "TSTypeAnnotation") return r ? z(r, e) : Le(t, e), !0;
}
var Ru = v([
	"ArrowFunctionExpression",
	"FunctionExpression",
	"FunctionDeclaration",
	"ObjectMethod",
	"ClassMethod",
	"TSDeclareFunction",
	"TSCallSignatureDeclaration",
	"TSConstructSignatureDeclaration",
	"TSMethodSignature",
	"TSConstructorType",
	"TSFunctionType",
	"TSDeclareMethod"
]);
var Dp = new Set([
	"EmptyStatement",
	"TemplateElement",
	"Import",
	"TSEmptyBodyFunctionExpression",
	"ChainExpression"
]);
function fp(e) {
	return !Dp.has(e.type);
}
function Ep(e, t) {
	var r;
	if ((t.parser === "typescript" || t.parser === "flow" || t.parser === "acorn" || t.parser === "espree" || t.parser === "meriyah" || t.parser === "__babel_estree") && e.type === "MethodDefinition" && ((r = e.value) == null ? void 0 : r.type) === "FunctionExpression" && K(e.value).length === 0 && !e.value.returnType && !w(e.value.typeParameters) && e.value.body) return [
		...e.decorators || [],
		e.key,
		e.value.body
	];
}
function zn(e) {
	let { node: t, parent: r } = e;
	return (X(t) || r && (r.type === "JSXSpreadAttribute" || r.type === "JSXSpreadChild" || Ne(r) || (r.type === "ClassDeclaration" || r.type === "ClassExpression") && r.superClass === t)) && (!Bt(t) || Ne(r));
}
function Fp(e, { parser: t }) {
	if (t === "flow" || t === "babel-flow") return e = N(!1, e, /[\s(]/gu, ""), e === "" || e === "/*" || e === "/*::";
}
function Ju(e) {
	switch (e) {
		case "cr": return "\r";
		case "crlf": return `\r
`;
		default: return `
`;
	}
}
var Se = Symbol("MODE_BREAK"), at = Symbol("MODE_FLAT"), ar = Symbol("cursor");
function qu() {
	return {
		value: "",
		length: 0,
		queue: []
	};
}
function Cp(e, t) {
	return Qn(e, { type: "indent" }, t);
}
function Ap(e, t, r) {
	return t === Number.NEGATIVE_INFINITY ? e.root || qu() : t < 0 ? Qn(e, { type: "dedent" }, r) : t ? t.type === "root" ? {
		...e,
		root: e
	} : Qn(e, {
		type: typeof t == "string" ? "stringAlign" : "numberAlign",
		n: t
	}, r) : e;
}
function Qn(e, t, r) {
	let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], s = "", u = 0, i = 0, a = 0;
	for (let p of n) switch (p.type) {
		case "indent":
			m(), r.useTabs ? o(1) : c(r.tabWidth);
			break;
		case "stringAlign":
			m(), s += p.n, u += p.n.length;
			break;
		case "numberAlign":
			i += 1, a += p.n;
			break;
		default: throw new Error(`Unexpected type '${p.type}'`);
	}
	return y$1(), {
		...e,
		value: s,
		length: u,
		queue: n
	};
	function o(p) {
		s += "	".repeat(p), u += r.tabWidth * p;
	}
	function c(p) {
		s += " ".repeat(p), u += p;
	}
	function m() {
		r.useTabs ? D$1() : y$1();
	}
	function D$1() {
		i > 0 && o(i), C();
	}
	function y$1() {
		a > 0 && c(a), C();
	}
	function C() {
		i = 0, a = 0;
	}
}
function Zn(e) {
	let t = 0, r = 0, n = e.length;
	e: for (; n--;) {
		let s = e[n];
		if (s === ar) {
			r++;
			continue;
		}
		for (let u = s.length - 1; u >= 0; u--) {
			let i = s[u];
			if (i === " " || i === "	") t++;
			else {
				e[n] = s.slice(0, u + 1);
				break e;
			}
		}
	}
	if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0;) e.push(ar);
	return t;
}
function Jr(e, t, r, n, s, u) {
	if (r === Number.POSITIVE_INFINITY) return !0;
	let i = t.length, a = [e], o = [];
	for (; r >= 0;) {
		if (a.length === 0) {
			if (i === 0) return !0;
			a.push(t[--i]);
			continue;
		}
		let { mode: c, doc: m } = a.pop(), D$1 = ut(m);
		switch (D$1) {
			case rt:
				o.push(m), r -= et(m);
				break;
			case _e:
			case Pe: {
				let y$1 = D$1 === _e ? m : m.parts;
				for (let C = y$1.length - 1; C >= 0; C--) a.push({
					mode: c,
					doc: y$1[C]
				});
				break;
			}
			case Xe:
			case Ye:
			case He:
			case je:
				a.push({
					mode: c,
					doc: m.contents
				});
				break;
			case st:
				r += Zn(o);
				break;
			case le: {
				if (u && m.break) return !1;
				let y$1 = m.break ? Se : c, C = m.expandedStates && y$1 === Se ? O(!1, m.expandedStates, -1) : m.contents;
				a.push({
					mode: y$1,
					doc: C
				});
				break;
			}
			case xe: {
				let C = (m.groupId ? s[m.groupId] || at : c) === Se ? m.breakContents : m.flatContents;
				C && a.push({
					mode: c,
					doc: C
				});
				break;
			}
			case me:
				if (c === Se || m.hard) return !0;
				m.soft || (o.push(" "), r--);
				break;
			case Ve:
				n = !0;
				break;
			case $e:
				if (n) return !1;
				break;
		}
	}
	return !1;
}
function es(e, t) {
	let r = {}, n = t.printWidth, s = Ju(t.endOfLine), u = 0, i = [{
		ind: qu(),
		mode: Se,
		doc: e
	}], a = [], o = !1, c = [], m = 0;
	for (Su(e); i.length > 0;) {
		let { ind: y$1, mode: C, doc: p } = i.pop();
		switch (ut(p)) {
			case rt: {
				let A = s !== `
` ? N(!1, p, `
`, s) : p;
				a.push(A), i.length > 0 && (u += et(A));
				break;
			}
			case _e:
				for (let A = p.length - 1; A >= 0; A--) i.push({
					ind: y$1,
					mode: C,
					doc: p[A]
				});
				break;
			case nt:
				if (m >= 2) throw new Error("There are too many 'cursor' in doc.");
				a.push(ar), m++;
				break;
			case Xe:
				i.push({
					ind: Cp(y$1, t),
					mode: C,
					doc: p.contents
				});
				break;
			case Ye:
				i.push({
					ind: Ap(y$1, p.n, t),
					mode: C,
					doc: p.contents
				});
				break;
			case st:
				u -= Zn(a);
				break;
			case le:
				switch (C) {
					case at: if (!o) {
						i.push({
							ind: y$1,
							mode: p.break ? Se : at,
							doc: p.contents
						});
						break;
					}
					case Se: {
						o = !1;
						let A = {
							ind: y$1,
							mode: at,
							doc: p.contents
						}, T$1 = n - u, S$1 = c.length > 0;
						if (!p.break && Jr(A, i, T$1, S$1, r)) i.push(A);
						else if (p.expandedStates) {
							let B$2 = O(!1, p.expandedStates, -1);
							if (p.break) {
								i.push({
									ind: y$1,
									mode: Se,
									doc: B$2
								});
								break;
							} else for (let _$1 = 1; _$1 < p.expandedStates.length + 1; _$1++) if (_$1 >= p.expandedStates.length) {
								i.push({
									ind: y$1,
									mode: Se,
									doc: B$2
								});
								break;
							} else {
								let j$1 = {
									ind: y$1,
									mode: at,
									doc: p.expandedStates[_$1]
								};
								if (Jr(j$1, i, T$1, S$1, r)) {
									i.push(j$1);
									break;
								}
							}
						} else i.push({
							ind: y$1,
							mode: Se,
							doc: p.contents
						});
						break;
					}
				}
				p.id && (r[p.id] = O(!1, i, -1).mode);
				break;
			case Pe: {
				let A = n - u, { parts: T$1 } = p;
				if (T$1.length === 0) break;
				let [S$1, B$2] = T$1, _$1 = {
					ind: y$1,
					mode: at,
					doc: S$1
				}, J$1 = {
					ind: y$1,
					mode: Se,
					doc: S$1
				}, j$1 = Jr(_$1, [], A, c.length > 0, r, !0);
				if (T$1.length === 1) {
					j$1 ? i.push(_$1) : i.push(J$1);
					break;
				}
				let h = {
					ind: y$1,
					mode: at,
					doc: B$2
				}, W$1 = {
					ind: y$1,
					mode: Se,
					doc: B$2
				};
				if (T$1.length === 2) {
					j$1 ? i.push(h, _$1) : i.push(W$1, J$1);
					break;
				}
				T$1.splice(0, 2);
				let Fe$2 = {
					ind: y$1,
					mode: C,
					doc: qt(T$1)
				}, H$2 = T$1[0];
				Jr({
					ind: y$1,
					mode: at,
					doc: [
						S$1,
						B$2,
						H$2
					]
				}, [], A, c.length > 0, r, !0) ? i.push(Fe$2, h, _$1) : j$1 ? i.push(Fe$2, W$1, _$1) : i.push(Fe$2, W$1, J$1);
				break;
			}
			case xe:
			case He: {
				let A = p.groupId ? r[p.groupId] : C;
				if (A === Se) {
					let T$1 = p.type === xe ? p.breakContents : p.negate ? p.contents : f(p.contents);
					T$1 && i.push({
						ind: y$1,
						mode: C,
						doc: T$1
					});
				}
				if (A === at) {
					let T$1 = p.type === xe ? p.flatContents : p.negate ? f(p.contents) : p.contents;
					T$1 && i.push({
						ind: y$1,
						mode: C,
						doc: T$1
					});
				}
				break;
			}
			case Ve:
				c.push({
					ind: y$1,
					mode: C,
					doc: p.contents
				});
				break;
			case $e:
				c.length > 0 && i.push({
					ind: y$1,
					mode: C,
					doc: Gn
				});
				break;
			case me:
				switch (C) {
					case at: if (p.hard) o = !0;
					else {
						p.soft || (a.push(" "), u += 1);
						break;
					}
					case Se:
						if (c.length > 0) {
							i.push({
								ind: y$1,
								mode: C,
								doc: p
							}, ...c.reverse()), c.length = 0;
							break;
						}
						p.literal ? y$1.root ? (a.push(s, y$1.root.value), u = y$1.root.length) : (a.push(s), u = 0) : (u -= Zn(a), a.push(s + y$1.value), u = y$1.length);
						break;
				}
				break;
			case je:
				i.push({
					ind: y$1,
					mode: C,
					doc: p.contents
				});
				break;
			case ve: break;
			default: throw new Ct(p);
		}
		i.length === 0 && c.length > 0 && (i.push(...c.reverse()), c.length = 0);
	}
	let D$1 = a.indexOf(ar);
	if (D$1 !== -1) {
		let y$1 = a.indexOf(ar, D$1 + 1), C = a.slice(0, D$1).join(""), p = a.slice(D$1 + 1, y$1).join(""), A = a.slice(y$1 + 1).join("");
		return {
			formatted: C + p + A,
			cursorNodeStart: C.length,
			cursorNodeText: p
		};
	}
	return { formatted: a.join("") };
}
function Tp(e, t, r = 0) {
	let n = 0;
	for (let s = r; s < e.length; ++s) e[s] === "	" ? n = n + t - n % t : n++;
	return n;
}
var Wu = Tp;
function dp(e, t) {
	let r = e.lastIndexOf(`
`);
	return r === -1 ? 0 : Wu(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
}
var Gu = dp;
function qr(e, t, r) {
	let { node: n } = e;
	if (n.type === "TemplateLiteral" && gp(e)) {
		let c = xp(e, r, t);
		if (c) return c;
	}
	let u = "expressions";
	n.type === "TSTemplateLiteralType" && (u = "types");
	let i = [], a = e.map(t, u);
	i.push(ke, "`");
	let o = 0;
	return e.each(({ index: c, node: m }) => {
		if (i.push(t()), m.tail) return;
		let { tabWidth: D$1 } = r, y$1 = m.value.raw, C = y$1.includes(`
`) ? Gu(y$1, D$1) : o;
		o = C;
		let p = a[c], A = n[u][c], T$1 = de(r.originalText, k(m), R(n.quasis[c + 1]));
		if (!T$1) {
			let B$2 = es(p, {
				...r,
				printWidth: Number.POSITIVE_INFINITY
			}).formatted;
			B$2.includes(`
`) ? T$1 = !0 : p = B$2;
		}
		T$1 && (d(A) || A.type === "Identifier" || q(A) || A.type === "ConditionalExpression" || A.type === "SequenceExpression" || Te(A) || De(A)) && (p = [f([E, p]), E]);
		let S$1 = C === 0 && y$1.endsWith(`
`) ? he(Number.NEGATIVE_INFINITY, p) : xu(p, C, D$1);
		i.push(l([
			"${",
			S$1,
			ke,
			"}"
		]));
	}, "quasis"), i.push("`"), i;
}
function Uu(e, t) {
	let r = t("quasi");
	return it(r.label && {
		tagged: !0,
		...r.label
	}, [
		t("tag"),
		t(e.node.typeArguments ? "typeArguments" : "typeParameters"),
		ke,
		r
	]);
}
function xp(e, t, r) {
	let { node: n } = e, s = n.quasis[0].value.raw.trim().split(/\s*\|\s*/u);
	if (s.length > 1 || s.some((u) => u.length > 0)) {
		t.__inJestEach = !0;
		let u = e.map(r, "expressions");
		t.__inJestEach = !1;
		let i = [], a = u.map((y$1) => "${" + es(y$1, {
			...t,
			printWidth: Number.POSITIVE_INFINITY,
			endOfLine: "lf"
		}).formatted + "}"), o = [{
			hasLineBreak: !1,
			cells: []
		}];
		for (let y$1 = 1; y$1 < n.quasis.length; y$1++) {
			let C = O(!1, o, -1), p = a[y$1 - 1];
			C.cells.push(p), p.includes(`
`) && (C.hasLineBreak = !0), n.quasis[y$1].value.raw.includes(`
`) && o.push({
				hasLineBreak: !1,
				cells: []
			});
		}
		let c = Math.max(s.length, ...o.map((y$1) => y$1.cells.length)), m = Array.from({ length: c }).fill(0), D$1 = [{ cells: s }, ...o.filter((y$1) => y$1.cells.length > 0)];
		for (let { cells: y$1 } of D$1.filter((C) => !C.hasLineBreak)) for (let [C, p] of y$1.entries()) m[C] = Math.max(m[C], et(p));
		return i.push(ke, "`", f([F, P(F, D$1.map((y$1) => P(" | ", y$1.cells.map((C, p) => y$1.hasLineBreak ? C : C + " ".repeat(m[p] - et(C))))))]), F, "`"), i;
	}
}
function hp(e, t) {
	let { node: r } = e, n = t();
	return d(r) && (n = l([f([E, n]), E])), [
		"${",
		n,
		ke,
		"}"
	];
}
function Gt(e, t) {
	return e.map((r) => hp(r, t), "expressions");
}
function Wr(e, t) {
	return mt(e, (r) => typeof r == "string" ? t ? N(!1, r, /(\\*)`/gu, "$1$1\\`") : ts(r) : r);
}
function ts(e) {
	return N(!1, e, /([\\`]|\$\{)/gu, String.raw`\$1`);
}
function gp({ node: e, parent: t }) {
	let r = /^[fx]?(?:describe|it|test)$/u;
	return t.type === "TaggedTemplateExpression" && t.quasi === e && t.tag.type === "MemberExpression" && t.tag.property.type === "Identifier" && t.tag.property.name === "each" && (t.tag.object.type === "Identifier" && r.test(t.tag.object.name) || t.tag.object.type === "MemberExpression" && t.tag.object.property.type === "Identifier" && (t.tag.object.property.name === "only" || t.tag.object.property.name === "skip") && t.tag.object.object.type === "Identifier" && r.test(t.tag.object.object.name));
}
var ns = [
	(e, t) => e.type === "ObjectExpression" && t === "properties",
	(e, t) => e.type === "CallExpression" && e.callee.type === "Identifier" && e.callee.name === "Component" && t === "arguments",
	(e, t) => e.type === "Decorator" && t === "expression"
];
function Nu(e) {
	let t = (n) => n.type === "TemplateLiteral", r = (n, s) => Ae(n) && !n.computed && n.key.type === "Identifier" && n.key.name === "styles" && s === "value";
	return e.match(t, (n, s) => U(n) && s === "elements", r, ...ns) || e.match(t, r, ...ns);
}
function Xu(e) {
	return e.match((t) => t.type === "TemplateLiteral", (t, r) => Ae(t) && !t.computed && t.key.type === "Identifier" && t.key.name === "template" && r === "value", ...ns);
}
function rs(e, t) {
	return d(e, g.Block | g.Leading, ({ value: r }) => r === ` ${t} `);
}
function Gr({ node: e, parent: t }, r) {
	return rs(e, r) || Sp(t) && rs(t, r) || t.type === "ExpressionStatement" && rs(t, r);
}
function Sp(e) {
	return e.type === "AsConstExpression" || e.type === "TSAsExpression" && e.typeAnnotation.type === "TSTypeReference" && e.typeAnnotation.typeName.type === "Identifier" && e.typeAnnotation.typeName.name === "const";
}
async function Bp(e, t, r) {
	let { node: n } = r, s = n.quasis.map((m) => m.value.raw), u = 0, c = bp(await e(s.reduce((m, D$1, y$1) => y$1 === 0 ? D$1 : m + "@prettier-placeholder-" + u++ + "-id" + D$1, ""), { parser: "scss" }), Gt(r, t));
	if (!c) throw new Error("Couldn't insert all the expressions");
	return [
		"`",
		f([F, c]),
		E,
		"`"
	];
}
function bp(e, t) {
	if (!w(t)) return e;
	let r = 0, n = mt(Wt(e), (s) => typeof s != "string" || !s.includes("@prettier-placeholder") ? s : s.split(/@prettier-placeholder-(\d+)-id/u).map((u, i) => i % 2 === 0 ? Ie(u) : (r++, t[u])));
	return t.length === r ? n : null;
}
function Pp({ node: e, parent: t, grandparent: r }) {
	return r && e.quasis && t.type === "JSXExpressionContainer" && r.type === "JSXElement" && r.openingElement.name.name === "style" && r.openingElement.attributes.some((n) => n.type === "JSXAttribute" && n.name.name === "jsx") || (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && t.tag.type === "Identifier" && t.tag.name === "css" || (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && t.tag.type === "MemberExpression" && t.tag.object.name === "css" && (t.tag.property.name === "global" || t.tag.property.name === "resolve");
}
function Ur(e) {
	return e.type === "Identifier" && e.name === "styled";
}
function Yu(e) {
	return /^[A-Z]/u.test(e.object.name) && e.property.name === "extend";
}
function kp({ parent: e }) {
	if (!e || e.type !== "TaggedTemplateExpression") return !1;
	let t = e.tag.type === "ParenthesizedExpression" ? e.tag.expression : e.tag;
	switch (t.type) {
		case "MemberExpression": return Ur(t.object) || Yu(t);
		case "CallExpression": return Ur(t.callee) || t.callee.type === "MemberExpression" && (t.callee.object.type === "MemberExpression" && (Ur(t.callee.object.object) || Yu(t.callee.object)) || t.callee.object.type === "CallExpression" && Ur(t.callee.object.callee));
		case "Identifier": return t.name === "css";
		default: return !1;
	}
}
function Ip({ parent: e, grandparent: t }) {
	return (t == null ? void 0 : t.type) === "JSXAttribute" && e.type === "JSXExpressionContainer" && t.name.type === "JSXIdentifier" && t.name.name === "css";
}
function Lp(e) {
	if (Pp(e) || kp(e) || Ip(e) || Nu(e)) return Bp;
}
var Hu = Lp;
async function wp(e, t, r) {
	let { node: n } = r, s = n.quasis.length, u = Gt(r, t), i = [];
	for (let a = 0; a < s; a++) {
		let o = n.quasis[a], c = a === 0, m = a === s - 1, D$1 = o.value.cooked, y$1 = D$1.split(`
`), C = y$1.length, p = u[a], A = C > 2 && y$1[0].trim() === "" && y$1[1].trim() === "", T$1 = C > 2 && y$1[C - 1].trim() === "" && y$1[C - 2].trim() === "", S$1 = y$1.every((_$1) => /^\s*(?:#[^\n\r]*)?$/u.test(_$1));
		if (!m && /#[^\n\r]*$/u.test(y$1[C - 1])) return null;
		let B$2 = null;
		S$1 ? B$2 = Op(y$1) : B$2 = await e(D$1, { parser: "graphql" }), B$2 ? (B$2 = Wr(B$2, !1), !c && A && i.push(""), i.push(B$2), !m && T$1 && i.push("")) : !c && !m && A && i.push(""), p && i.push(p);
	}
	return [
		"`",
		f([F, P(F, i)]),
		F,
		"`"
	];
}
function Op(e) {
	let t = [], r = !1, n = e.map((s) => s.trim());
	for (let [s, u] of n.entries()) u !== "" && (n[s - 1] === "" && r ? t.push([F, u]) : t.push(u), r = !0);
	return t.length === 0 ? null : P(F, t);
}
function _p({ node: e, parent: t }) {
	return Gr({
		node: e,
		parent: t
	}, "GraphQL") || t && (t.type === "TaggedTemplateExpression" && (t.tag.type === "MemberExpression" && t.tag.object.name === "graphql" && t.tag.property.name === "experimental" || t.tag.type === "Identifier" && (t.tag.name === "gql" || t.tag.name === "graphql")) || t.type === "CallExpression" && t.callee.type === "Identifier" && t.callee.name === "graphql");
}
function jp(e) {
	if (_p(e)) return wp;
}
var Vu = jp;
var ss = 0;
async function $u(e, t, r, n, s) {
	let { node: u } = n, i = ss;
	ss = ss + 1 >>> 0;
	let a = (S$1) => `PRETTIER_HTML_PLACEHOLDER_${S$1}_${i}_IN_JS`, o = u.quasis.map((S$1, B$2, _$1) => B$2 === _$1.length - 1 ? S$1.value.cooked : S$1.value.cooked + a(B$2)).join(""), c = Gt(n, r), m = new RegExp(a(String.raw`(\d+)`), "gu"), D$1 = 0, C = mt(await t(o, {
		parser: e,
		__onHtmlRoot(S$1) {
			D$1 = S$1.children.length;
		}
	}), (S$1) => {
		if (typeof S$1 != "string") return S$1;
		let B$2 = [], _$1 = S$1.split(m);
		for (let J$1 = 0; J$1 < _$1.length; J$1++) {
			let j$1 = _$1[J$1];
			if (J$1 % 2 === 0) {
				j$1 && (j$1 = ts(j$1), s.__embeddedInHtml && (j$1 = N(!1, j$1, /<\/(?=script\b)/giu, String.raw`<\/`)), B$2.push(j$1));
				continue;
			}
			let h = Number(j$1);
			B$2.push(c[h]);
		}
		return B$2;
	}), p = /^\s/u.test(o) ? " " : "", A = /\s$/u.test(o) ? " " : "", T$1 = s.htmlWhitespaceSensitivity === "ignore" ? F : p && A ? x : null;
	return T$1 ? l([
		"`",
		f([T$1, l(C)]),
		T$1,
		"`"
	]) : it({ hug: !1 }, l([
		"`",
		p,
		D$1 > 1 ? f(l(C)) : l(C),
		A,
		"`"
	]));
}
function vp(e) {
	return Gr(e, "HTML") || e.match((t) => t.type === "TemplateLiteral", (t, r) => t.type === "TaggedTemplateExpression" && t.tag.type === "Identifier" && t.tag.name === "html" && r === "quasi");
}
var Mp = $u.bind(void 0, "html"), Rp = $u.bind(void 0, "angular");
function Jp(e) {
	if (vp(e)) return Mp;
	if (Xu(e)) return Rp;
}
var Ku = Jp;
async function qp(e, t, r) {
	let { node: n } = r, s = N(!1, n.quasis[0].value.raw, /((?:\\\\)*)\\`/gu, (o, c) => "\\".repeat(c.length / 2) + "`"), u = Wp(s), i = u !== "";
	i && (s = N(!1, s, new RegExp(`^${u}`, "gmu"), ""));
	let a = Wr(await e(s, {
		parser: "markdown",
		__inJsTemplate: !0
	}), !0);
	return [
		"`",
		i ? f([E, a]) : [Rr, du(a)],
		E,
		"`"
	];
}
function Wp(e) {
	let t = e.match(/^([^\S\n]*)\S/mu);
	return t === null ? "" : t[1];
}
function Gp(e) {
	if (Up(e)) return qp;
}
function Up({ node: e, parent: t }) {
	return (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && e.quasis.length === 1 && t.tag.type === "Identifier" && (t.tag.name === "md" || t.tag.name === "markdown");
}
var zu = Gp;
function Np(e) {
	let { node: t } = e;
	if (t.type !== "TemplateLiteral" || Xp(t)) return;
	let r;
	for (let n of [
		Hu,
		Vu,
		Ku,
		zu
	]) if (r = n(e), !!r) return t.quasis.length === 1 && t.quasis[0].value.raw.trim() === "" ? "``" : async (...s) => {
		let u = await r(...s);
		return u && it({
			embed: !0,
			...u.label
		}, u);
	};
}
function Xp({ quasis: e }) {
	return e.some(({ value: { cooked: t } }) => t === null);
}
var Qu = Np;
var Yp = /\*\/$/, Hp = /^\/\*\*?/, ri = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, Vp = /(^|\s+)\/\/([^\n\r]*)/g, Zu = /^(\r?\n)+/, $p = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g, ei = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g, Kp = /(\r?\n|^) *\* ?/g, ni = [];
function si(e) {
	let t = e.match(ri);
	return t ? t[0].trimStart() : "";
}
function ui(e) {
	let t = e.match(ri), r = t == null ? void 0 : t[0];
	return r == null ? e : e.slice(r.length);
}
function ii(e) {
	let t = `
`;
	e = N(!1, e.replace(Hp, "").replace(Yp, ""), Kp, "$1");
	let r = "";
	for (; r !== e;) r = e, e = N(!1, e, $p, `${t}$1 $2${t}`);
	e = e.replace(Zu, "").trimEnd();
	let n = Object.create(null), s = N(!1, e, ei, "").replace(Zu, "").trimEnd(), u;
	for (; u = ei.exec(e);) {
		let i = N(!1, u[2], Vp, "");
		if (typeof n[u[1]] == "string" || Array.isArray(n[u[1]])) {
			let a = n[u[1]];
			n[u[1]] = [
				...ni,
				...Array.isArray(a) ? a : [a],
				i
			];
		} else n[u[1]] = i;
	}
	return {
		comments: s,
		pragmas: n
	};
}
function ai({ comments: e = "", pragmas: t = {} }) {
	let r = `
`, n = "/**", s = " *", u = " */", i = Object.keys(t), a = i.flatMap((c) => ti(c, t[c])).map((c) => `${s} ${c}${r}`).join("");
	if (!e) {
		if (i.length === 0) return "";
		if (i.length === 1 && !Array.isArray(t[i[0]])) {
			let c = t[i[0]];
			return `${n} ${ti(i[0], c)[0]}${u}`;
		}
	}
	let o = e.split(r).map((c) => `${s} ${c}`).join(r) + r;
	return n + r + (e ? o : "") + (e && i.length > 0 ? s + r : "") + a + u;
}
function ti(e, t) {
	return [...ni, ...Array.isArray(t) ? t : [t]].map((r) => `@${e} ${r}`.trim());
}
function zp(e) {
	if (!e.startsWith("#!")) return "";
	let t = e.indexOf(`
`);
	return t === -1 ? e : e.slice(0, t);
}
var oi = zp;
function Qp(e) {
	let t = oi(e);
	t && (e = e.slice(t.length + 1));
	let { pragmas: n, comments: s } = ii(si(e));
	return {
		shebang: t,
		text: e,
		pragmas: n,
		comments: s
	};
}
function pi(e) {
	let { shebang: t, text: r, pragmas: n, comments: s } = Qp(e), u = ui(r), i = ai({
		pragmas: {
			format: "",
			...n
		},
		comments: s.trimStart()
	});
	return (t ? `${t}
` : "") + i + (u.startsWith(`
`) ? `
` : `

`) + u;
}
function Zp(e, t) {
	let { originalText: r, [Symbol.for("comments")]: n, locStart: s, locEnd: u, [Symbol.for("printedComments")]: i } = t, { node: a } = e, o = s(a), c = u(a);
	for (let m of n) s(m) >= o && u(m) <= c && i.add(m);
	return r.slice(o, c);
}
var ci = Zp;
function us(e, t) {
	var u, i, a, o, c, m, D$1, y$1, C;
	if (e.isRoot) return !1;
	let { node: r, key: n, parent: s } = e;
	if (t.__isInHtmlInterpolation && !t.bracketSpacing && nc(r) && or(e)) return !0;
	if (ec(r)) return !1;
	if (r.type === "Identifier") {
		if ((u = r.extra) != null && u.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(r.name) || n === "left" && (r.name === "async" && !s.await || r.name === "let") && s.type === "ForOfStatement") return !0;
		if (r.name === "let") {
			let p = (i = e.findAncestor((A) => A.type === "ForOfStatement")) == null ? void 0 : i.left;
			if (p && ie(p, (A) => A === r)) return !0;
		}
		if (n === "object" && r.name === "let" && s.type === "MemberExpression" && s.computed && !s.optional) {
			let p = e.findAncestor((T$1) => T$1.type === "ExpressionStatement" || T$1.type === "ForStatement" || T$1.type === "ForInStatement"), A = p ? p.type === "ExpressionStatement" ? p.expression : p.type === "ForStatement" ? p.init : p.left : void 0;
			if (A && ie(A, (T$1) => T$1 === r)) return !0;
		}
		if (n === "expression") switch (r.name) {
			case "await":
			case "interface":
			case "module":
			case "using":
			case "yield":
			case "let":
			case "component":
			case "hook":
			case "type": {
				let p = e.findAncestor((A) => !Te(A));
				if (p !== s && p.type === "ExpressionStatement") return !0;
			}
		}
		return !1;
	}
	if (r.type === "ObjectExpression" || r.type === "FunctionExpression" || r.type === "ClassExpression" || r.type === "DoExpression") {
		let p = (a = e.findAncestor((A) => A.type === "ExpressionStatement")) == null ? void 0 : a.expression;
		if (p && ie(p, (A) => A === r)) return !0;
	}
	if (r.type === "ObjectExpression") {
		let p = (o = e.findAncestor((A) => A.type === "ArrowFunctionExpression")) == null ? void 0 : o.body;
		if (p && p.type !== "SequenceExpression" && p.type !== "AssignmentExpression" && ie(p, (A) => A === r)) return !0;
	}
	switch (s.type) {
		case "ParenthesizedExpression": return !1;
		case "ClassDeclaration":
		case "ClassExpression":
			if (n === "superClass" && (r.type === "ArrowFunctionExpression" || r.type === "AssignmentExpression" || r.type === "AwaitExpression" || r.type === "BinaryExpression" || r.type === "ConditionalExpression" || r.type === "LogicalExpression" || r.type === "NewExpression" || r.type === "ObjectExpression" || r.type === "SequenceExpression" || r.type === "TaggedTemplateExpression" || r.type === "UnaryExpression" || r.type === "UpdateExpression" || r.type === "YieldExpression" || r.type === "TSNonNullExpression" || r.type === "ClassExpression" && w(r.decorators))) return !0;
			break;
		case "ExportDefaultDeclaration": return li(e, t) || r.type === "SequenceExpression";
		case "Decorator":
			if (n === "expression" && !uc(r)) return !0;
			break;
		case "TypeAnnotation":
			if (e.match(void 0, void 0, (p, A) => A === "returnType" && p.type === "ArrowFunctionExpression") && rc(r)) return !0;
			break;
		case "BinaryExpression":
			if (n === "left" && (s.operator === "in" || s.operator === "instanceof") && r.type === "UnaryExpression") return !0;
			break;
		case "VariableDeclarator":
			if (n === "init" && e.match(void 0, void 0, (p, A) => A === "declarations" && p.type === "VariableDeclaration", (p, A) => A === "left" && p.type === "ForInStatement")) return !0;
			break;
	}
	switch (r.type) {
		case "UpdateExpression": if (s.type === "UnaryExpression") return r.prefix && (r.operator === "++" && s.operator === "+" || r.operator === "--" && s.operator === "-");
		case "UnaryExpression": switch (s.type) {
			case "UnaryExpression": return r.operator === s.operator && (r.operator === "+" || r.operator === "-");
			case "BindExpression": return !0;
			case "MemberExpression":
			case "OptionalMemberExpression": return n === "object";
			case "TaggedTemplateExpression": return !0;
			case "NewExpression":
			case "CallExpression":
			case "OptionalCallExpression": return n === "callee";
			case "BinaryExpression": return n === "left" && s.operator === "**";
			case "TSNonNullExpression": return !0;
			default: return !1;
		}
		case "BinaryExpression":
			if (s.type === "UpdateExpression" || r.operator === "in" && tc(e)) return !0;
			if (r.operator === "|>" && (c = r.extra) != null && c.parenthesized) {
				let p = e.grandparent;
				if (p.type === "BinaryExpression" && p.operator === "|>") return !0;
			}
		case "TSTypeAssertion":
		case "TSAsExpression":
		case "TSSatisfiesExpression":
		case "AsExpression":
		case "AsConstExpression":
		case "SatisfiesExpression":
		case "LogicalExpression": switch (s.type) {
			case "TSAsExpression":
			case "TSSatisfiesExpression":
			case "AsExpression":
			case "AsConstExpression":
			case "SatisfiesExpression": return !Te(r);
			case "ConditionalExpression": return Te(r) || au(r);
			case "CallExpression":
			case "NewExpression":
			case "OptionalCallExpression": return n === "callee";
			case "ClassExpression":
			case "ClassDeclaration": return n === "superClass";
			case "TSTypeAssertion":
			case "TaggedTemplateExpression":
			case "UnaryExpression":
			case "JSXSpreadAttribute":
			case "SpreadElement":
			case "BindExpression":
			case "AwaitExpression":
			case "TSNonNullExpression":
			case "UpdateExpression": return !0;
			case "MemberExpression":
			case "OptionalMemberExpression": return n === "object";
			case "AssignmentExpression":
			case "AssignmentPattern": return n === "left" && (r.type === "TSTypeAssertion" || Te(r));
			case "LogicalExpression": if (r.type === "LogicalExpression") return s.operator !== r.operator;
			case "BinaryExpression": {
				let { operator: p, type: A } = r;
				if (!p && A !== "TSTypeAssertion") return !0;
				let T$1 = er(p), S$1 = s.operator, B$2 = er(S$1);
				return B$2 > T$1 || n === "right" && B$2 === T$1 || B$2 === T$1 && !nr(S$1, p) ? !0 : B$2 < T$1 && p === "%" ? S$1 === "+" || S$1 === "-" : !!yu(S$1);
			}
			default: return !1;
		}
		case "SequenceExpression": switch (s.type) {
			case "ReturnStatement": return !1;
			case "ForStatement": return !1;
			case "ExpressionStatement": return n !== "expression";
			case "ArrowFunctionExpression": return n !== "body";
			default: return !0;
		}
		case "YieldExpression": if (s.type === "AwaitExpression" || s.type === "TSTypeAssertion") return !0;
		case "AwaitExpression": switch (s.type) {
			case "TaggedTemplateExpression":
			case "UnaryExpression":
			case "LogicalExpression":
			case "SpreadElement":
			case "TSAsExpression":
			case "TSSatisfiesExpression":
			case "TSNonNullExpression":
			case "AsExpression":
			case "AsConstExpression":
			case "SatisfiesExpression":
			case "BindExpression": return !0;
			case "MemberExpression":
			case "OptionalMemberExpression": return n === "object";
			case "NewExpression":
			case "CallExpression":
			case "OptionalCallExpression": return n === "callee";
			case "ConditionalExpression": return n === "test";
			case "BinaryExpression": return !(!r.argument && s.operator === "|>");
			default: return !1;
		}
		case "TSFunctionType": if (e.match((p) => p.type === "TSFunctionType", (p, A) => A === "typeAnnotation" && p.type === "TSTypeAnnotation", (p, A) => A === "returnType" && p.type === "ArrowFunctionExpression")) return !0;
		case "TSConditionalType":
		case "TSConstructorType":
			if (n === "extendsType" && s.type === "TSConditionalType") {
				if (r.type === "TSConditionalType") return !0;
				let { typeAnnotation: p } = r.returnType || r.typeAnnotation;
				if (p.type === "TSTypePredicate" && p.typeAnnotation && (p = p.typeAnnotation.typeAnnotation), p.type === "TSInferType" && p.typeParameter.constraint) return !0;
			}
			if (n === "checkType" && s.type === "TSConditionalType") return !0;
		case "TSUnionType":
		case "TSIntersectionType": if ((s.type === "TSUnionType" || s.type === "TSIntersectionType") && s.types.length > 1 && (!r.types || r.types.length > 1)) return !0;
		case "TSInferType": if (r.type === "TSInferType") {
			if (s.type === "TSRestType") return !1;
			if (n === "types" && (s.type === "TSUnionType" || s.type === "TSIntersectionType") && r.typeParameter.type === "TSTypeParameter" && r.typeParameter.constraint) return !0;
		}
		case "TSTypeOperator": return s.type === "TSArrayType" || s.type === "TSOptionalType" || s.type === "TSRestType" || n === "objectType" && s.type === "TSIndexedAccessType" || s.type === "TSTypeOperator" || s.type === "TSTypeAnnotation" && e.grandparent.type.startsWith("TSJSDoc");
		case "TSTypeQuery": return n === "objectType" && s.type === "TSIndexedAccessType" || n === "elementType" && s.type === "TSArrayType";
		case "TypeOperator": return s.type === "ArrayTypeAnnotation" || s.type === "NullableTypeAnnotation" || n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType") || s.type === "TypeOperator";
		case "TypeofTypeAnnotation": return n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType") || n === "elementType" && s.type === "ArrayTypeAnnotation";
		case "ArrayTypeAnnotation": return s.type === "NullableTypeAnnotation";
		case "IntersectionTypeAnnotation":
		case "UnionTypeAnnotation": return s.type === "TypeOperator" || s.type === "ArrayTypeAnnotation" || s.type === "NullableTypeAnnotation" || s.type === "IntersectionTypeAnnotation" || s.type === "UnionTypeAnnotation" || n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType");
		case "InferTypeAnnotation":
		case "NullableTypeAnnotation": return s.type === "ArrayTypeAnnotation" || n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType");
		case "ComponentTypeAnnotation":
		case "FunctionTypeAnnotation": {
			if (r.type === "ComponentTypeAnnotation" && (r.rendersType === null || r.rendersType === void 0)) return !1;
			if (e.match(void 0, (A, T$1) => T$1 === "typeAnnotation" && A.type === "TypeAnnotation", (A, T$1) => T$1 === "returnType" && A.type === "ArrowFunctionExpression") || e.match(void 0, (A, T$1) => T$1 === "typeAnnotation" && A.type === "TypePredicate", (A, T$1) => T$1 === "typeAnnotation" && A.type === "TypeAnnotation", (A, T$1) => T$1 === "returnType" && A.type === "ArrowFunctionExpression")) return !0;
			let p = s.type === "NullableTypeAnnotation" ? e.grandparent : s;
			return p.type === "UnionTypeAnnotation" || p.type === "IntersectionTypeAnnotation" || p.type === "ArrayTypeAnnotation" || n === "objectType" && (p.type === "IndexedAccessType" || p.type === "OptionalIndexedAccessType") || n === "checkType" && s.type === "ConditionalTypeAnnotation" || n === "extendsType" && s.type === "ConditionalTypeAnnotation" && ((m = r.returnType) == null ? void 0 : m.type) === "InferTypeAnnotation" && ((D$1 = r.returnType) == null ? void 0 : D$1.typeParameter.bound) || p.type === "NullableTypeAnnotation" || s.type === "FunctionTypeParam" && s.name === null && K(r).some((A) => {
				var T$1;
				return ((T$1 = A.typeAnnotation) == null ? void 0 : T$1.type) === "NullableTypeAnnotation";
			});
		}
		case "ConditionalTypeAnnotation": if (n === "extendsType" && s.type === "ConditionalTypeAnnotation" && r.type === "ConditionalTypeAnnotation" || n === "checkType" && s.type === "ConditionalTypeAnnotation") return !0;
		case "OptionalIndexedAccessType": return n === "objectType" && s.type === "IndexedAccessType";
		case "StringLiteral":
		case "NumericLiteral":
		case "Literal":
			if (typeof r.value == "string" && s.type === "ExpressionStatement" && !s.directive) {
				let p = e.grandparent;
				return p.type === "Program" || p.type === "BlockStatement";
			}
			return n === "object" && s.type === "MemberExpression" && typeof r.value == "number";
		case "AssignmentExpression": {
			let p = e.grandparent;
			return n === "body" && s.type === "ArrowFunctionExpression" ? !0 : n === "key" && (s.type === "ClassProperty" || s.type === "PropertyDefinition") && s.computed || (n === "init" || n === "update") && s.type === "ForStatement" ? !1 : s.type === "ExpressionStatement" ? r.left.type === "ObjectPattern" : !(n === "key" && s.type === "TSPropertySignature" || s.type === "AssignmentExpression" || s.type === "SequenceExpression" && p.type === "ForStatement" && (p.init === s || p.update === s) || n === "value" && s.type === "Property" && p.type === "ObjectPattern" && p.properties.includes(s) || s.type === "NGChainedExpression");
		}
		case "ConditionalExpression": switch (s.type) {
			case "TaggedTemplateExpression":
			case "UnaryExpression":
			case "SpreadElement":
			case "BinaryExpression":
			case "LogicalExpression":
			case "NGPipeExpression":
			case "ExportDefaultDeclaration":
			case "AwaitExpression":
			case "JSXSpreadAttribute":
			case "TSTypeAssertion":
			case "TypeCastExpression":
			case "TSAsExpression":
			case "TSSatisfiesExpression":
			case "AsExpression":
			case "AsConstExpression":
			case "SatisfiesExpression":
			case "TSNonNullExpression": return !0;
			case "NewExpression":
			case "CallExpression":
			case "OptionalCallExpression": return n === "callee";
			case "ConditionalExpression": return t.experimentalTernaries ? !1 : n === "test";
			case "MemberExpression":
			case "OptionalMemberExpression": return n === "object";
			default: return !1;
		}
		case "FunctionExpression": switch (s.type) {
			case "NewExpression":
			case "CallExpression":
			case "OptionalCallExpression": return n === "callee";
			case "TaggedTemplateExpression": return !0;
			default: return !1;
		}
		case "ArrowFunctionExpression": switch (s.type) {
			case "BinaryExpression": return s.operator !== "|>" || ((y$1 = r.extra) == null ? void 0 : y$1.parenthesized);
			case "NewExpression":
			case "CallExpression":
			case "OptionalCallExpression": return n === "callee";
			case "MemberExpression":
			case "OptionalMemberExpression": return n === "object";
			case "TSAsExpression":
			case "TSSatisfiesExpression":
			case "AsExpression":
			case "AsConstExpression":
			case "SatisfiesExpression":
			case "TSNonNullExpression":
			case "BindExpression":
			case "TaggedTemplateExpression":
			case "UnaryExpression":
			case "LogicalExpression":
			case "AwaitExpression":
			case "TSTypeAssertion": return !0;
			case "ConditionalExpression": return n === "test";
			default: return !1;
		}
		case "ClassExpression": switch (s.type) {
			case "NewExpression": return n === "callee";
			default: return !1;
		}
		case "OptionalMemberExpression":
		case "OptionalCallExpression":
		case "CallExpression":
		case "MemberExpression": if (sc(e)) return !0;
		case "TaggedTemplateExpression":
		case "TSNonNullExpression":
			if (n === "callee" && (s.type === "BindExpression" || s.type === "NewExpression")) {
				let p = r;
				for (; p;) switch (p.type) {
					case "CallExpression":
					case "OptionalCallExpression": return !0;
					case "MemberExpression":
					case "OptionalMemberExpression":
					case "BindExpression":
						p = p.object;
						break;
					case "TaggedTemplateExpression":
						p = p.tag;
						break;
					case "TSNonNullExpression":
						p = p.expression;
						break;
					default: return !1;
				}
			}
			return !1;
		case "BindExpression": return n === "callee" && (s.type === "BindExpression" || s.type === "NewExpression") || n === "object" && q(s);
		case "NGPipeExpression": return !(s.type === "NGRoot" || s.type === "NGMicrosyntaxExpression" || s.type === "ObjectProperty" && !((C = r.extra) != null && C.parenthesized) || U(s) || n === "arguments" && L(s) || n === "right" && s.type === "NGPipeExpression" || n === "property" && s.type === "MemberExpression" || s.type === "AssignmentExpression");
		case "JSXFragment":
		case "JSXElement": return n === "callee" || n === "left" && s.type === "BinaryExpression" && s.operator === "<" || !U(s) && s.type !== "ArrowFunctionExpression" && s.type !== "AssignmentExpression" && s.type !== "AssignmentPattern" && s.type !== "BinaryExpression" && s.type !== "NewExpression" && s.type !== "ConditionalExpression" && s.type !== "ExpressionStatement" && s.type !== "JsExpressionRoot" && s.type !== "JSXAttribute" && s.type !== "JSXElement" && s.type !== "JSXExpressionContainer" && s.type !== "JSXFragment" && s.type !== "LogicalExpression" && !L(s) && !Ae(s) && s.type !== "ReturnStatement" && s.type !== "ThrowStatement" && s.type !== "TypeCastExpression" && s.type !== "VariableDeclarator" && s.type !== "YieldExpression";
		case "TSInstantiationExpression": return n === "object" && q(s);
	}
	return !1;
}
var ec = v([
	"BlockStatement",
	"BreakStatement",
	"ComponentDeclaration",
	"ClassBody",
	"ClassDeclaration",
	"ClassMethod",
	"ClassProperty",
	"PropertyDefinition",
	"ClassPrivateProperty",
	"ContinueStatement",
	"DebuggerStatement",
	"DeclareComponent",
	"DeclareClass",
	"DeclareExportAllDeclaration",
	"DeclareExportDeclaration",
	"DeclareFunction",
	"DeclareHook",
	"DeclareInterface",
	"DeclareModule",
	"DeclareModuleExports",
	"DeclareNamespace",
	"DeclareVariable",
	"DeclareEnum",
	"DoWhileStatement",
	"EnumDeclaration",
	"ExportAllDeclaration",
	"ExportDefaultDeclaration",
	"ExportNamedDeclaration",
	"ExpressionStatement",
	"ForInStatement",
	"ForOfStatement",
	"ForStatement",
	"FunctionDeclaration",
	"HookDeclaration",
	"IfStatement",
	"ImportDeclaration",
	"InterfaceDeclaration",
	"LabeledStatement",
	"MethodDefinition",
	"ReturnStatement",
	"SwitchStatement",
	"ThrowStatement",
	"TryStatement",
	"TSDeclareFunction",
	"TSEnumDeclaration",
	"TSImportEqualsDeclaration",
	"TSInterfaceDeclaration",
	"TSModuleDeclaration",
	"TSNamespaceExportDeclaration",
	"TypeAlias",
	"VariableDeclaration",
	"WhileStatement",
	"WithStatement"
]);
function tc(e) {
	let t = 0, { node: r } = e;
	for (; r;) {
		let n = e.getParentNode(t++);
		if ((n == null ? void 0 : n.type) === "ForStatement" && n.init === r) return !0;
		r = n;
	}
	return !1;
}
function rc(e) {
	return tr(e, (t) => t.type === "ObjectTypeAnnotation" && tr(t, (r) => r.type === "FunctionTypeAnnotation"));
}
function nc(e) {
	return se(e);
}
function or(e) {
	let { parent: t, key: r } = e;
	switch (t.type) {
		case "NGPipeExpression":
			if (r === "arguments" && e.isLast) return e.callParent(or);
			break;
		case "ObjectProperty":
			if (r === "value") return e.callParent(() => e.key === "properties" && e.isLast);
			break;
		case "BinaryExpression":
		case "LogicalExpression":
			if (r === "right") return e.callParent(or);
			break;
		case "ConditionalExpression":
			if (r === "alternate") return e.callParent(or);
			break;
		case "UnaryExpression":
			if (t.prefix) return e.callParent(or);
			break;
	}
	return !1;
}
function li(e, t) {
	let { node: r, parent: n } = e;
	return r.type === "FunctionExpression" || r.type === "ClassExpression" ? n.type === "ExportDefaultDeclaration" || !us(e, t) : !jt(r) || n.type !== "ExportDefaultDeclaration" && us(e, t) ? !1 : e.call(() => li(e, t), ...Pr(r));
}
function sc(e) {
	let { node: t, parent: r, grandparent: n, key: s } = e;
	return !!((t.type === "OptionalMemberExpression" || t.type === "OptionalCallExpression") && (s === "object" && r.type === "MemberExpression" || s === "callee" && (r.type === "CallExpression" || r.type === "NewExpression") || r.type === "TSNonNullExpression" && n.type === "MemberExpression" && n.object === r) || e.match(() => t.type === "CallExpression" || t.type === "MemberExpression", (u, i) => i === "expression" && u.type === "ChainExpression") && (e.match(void 0, void 0, (u, i) => i === "callee" && (u.type === "CallExpression" && !u.optional || u.type === "NewExpression") || i === "object" && u.type === "MemberExpression" && !u.optional) || e.match(void 0, void 0, (u, i) => i === "expression" && u.type === "TSNonNullExpression", (u, i) => i === "object" && u.type === "MemberExpression")) || e.match(() => t.type === "CallExpression" || t.type === "MemberExpression", (u, i) => i === "expression" && u.type === "TSNonNullExpression", (u, i) => i === "expression" && u.type === "ChainExpression", (u, i) => i === "object" && u.type === "MemberExpression"));
}
function is(e) {
	return e.type === "Identifier" ? !0 : q(e) ? !e.computed && !e.optional && e.property.type === "Identifier" && is(e.object) : !1;
}
function uc(e) {
	return e.type === "ChainExpression" && (e = e.expression), is(e) || L(e) && !e.optional && is(e.callee);
}
var Be = us;
function ic(e, t) {
	let r = t - 1;
	r = Ge(e, r, { backwards: !0 }), r = Ue(e, r, { backwards: !0 }), r = Ge(e, r, { backwards: !0 });
	let n = Ue(e, r, { backwards: !0 });
	return r !== n;
}
var mi = ic;
var ac = () => !0;
function as(e, t) {
	let r = e.node;
	return r.printed = !0, t.printer.printComment(e, t);
}
function oc(e, t) {
	var m;
	let r = e.node, n = [as(e, t)], { printer: s, originalText: u, locStart: i, locEnd: a } = t;
	if ((m = s.isBlockComment) == null ? void 0 : m.call(s, r)) {
		let D$1 = te(u, a(r)) ? te(u, i(r), { backwards: !0 }) ? F : x : " ";
		n.push(D$1);
	} else n.push(F);
	let c = Ue(u, Ge(u, a(r)));
	return c !== !1 && te(u, c) && n.push(F), n;
}
function pc(e, t, r) {
	var c;
	let n = e.node, s = as(e, t), { printer: u, originalText: i, locStart: a } = t, o = (c = u.isBlockComment) == null ? void 0 : c.call(u, n);
	if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || te(i, a(n), { backwards: !0 })) return {
		doc: Wn([
			F,
			mi(i, a(n)) ? F : "",
			s
		]),
		isBlock: o,
		hasLineSuffix: !0
	};
	return !o || r != null && r.hasLineSuffix ? {
		doc: [Wn([" ", s]), Ee],
		isBlock: o,
		hasLineSuffix: !0
	} : {
		doc: [" ", s],
		isBlock: o,
		hasLineSuffix: !1
	};
}
function M(e, t, r = {}) {
	let { node: n } = e;
	if (!w(n == null ? void 0 : n.comments)) return "";
	let { indent: s = !1, marker: u, filter: i = ac } = r, a = [];
	if (e.each(({ node: c }) => {
		c.leading || c.trailing || c.marker !== u || !i(c) || a.push(as(e, t));
	}, "comments"), a.length === 0) return "";
	let o = P(F, a);
	return s ? f([F, o]) : o;
}
function os(e, t) {
	let r = e.node;
	if (!r) return {};
	let n = t[Symbol.for("printedComments")];
	if ((r.comments || []).filter((o) => !n.has(o)).length === 0) return {
		leading: "",
		trailing: ""
	};
	let u = [], i = [], a;
	return e.each(() => {
		let o = e.node;
		if (n != null && n.has(o)) return;
		let { leading: c, trailing: m } = o;
		c ? u.push(oc(e, t)) : m && (a = pc(e, t, a), i.push(a.doc));
	}, "comments"), {
		leading: u,
		trailing: i
	};
}
function ye(e, t, r) {
	let { leading: n, trailing: s } = os(e, r);
	return !n && !s ? t : ir(t, (u) => [
		n,
		u,
		s
	]);
}
var ps = class extends Error {
	name = "UnexpectedNodeError";
	constructor(t, r, n = "type") {
		super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`), this.node = t;
	}
}, Me = ps;
function cs(e) {
	if (typeof e != "string") throw new TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var Re, ls = class {
	constructor(t) {
		Ws(this, Re);
		Gs(this, Re, new Set(t));
	}
	getLeadingWhitespaceCount(t) {
		let r = pt(this, Re), n = 0;
		for (let s = 0; s < t.length && r.has(t.charAt(s)); s++) n++;
		return n;
	}
	getTrailingWhitespaceCount(t) {
		let r = pt(this, Re), n = 0;
		for (let s = t.length - 1; s >= 0 && r.has(t.charAt(s)); s--) n++;
		return n;
	}
	getLeadingWhitespace(t) {
		let r = this.getLeadingWhitespaceCount(t);
		return t.slice(0, r);
	}
	getTrailingWhitespace(t) {
		let r = this.getTrailingWhitespaceCount(t);
		return t.slice(t.length - r);
	}
	hasLeadingWhitespace(t) {
		return pt(this, Re).has(t.charAt(0));
	}
	hasTrailingWhitespace(t) {
		return pt(this, Re).has(O(!1, t, -1));
	}
	trimStart(t) {
		let r = this.getLeadingWhitespaceCount(t);
		return t.slice(r);
	}
	trimEnd(t) {
		let r = this.getTrailingWhitespaceCount(t);
		return t.slice(0, t.length - r);
	}
	trim(t) {
		return this.trimEnd(this.trimStart(t));
	}
	split(t, r = !1) {
		let n = `[${cs([...pt(this, Re)].join(""))}]+`, s = new RegExp(r ? `(${n})` : n, "u");
		return t.split(s);
	}
	hasWhitespaceCharacter(t) {
		let r = pt(this, Re);
		return Array.prototype.some.call(t, (n) => r.has(n));
	}
	hasNonWhitespaceCharacter(t) {
		let r = pt(this, Re);
		return Array.prototype.some.call(t, (n) => !r.has(n));
	}
	isWhitespaceOnly(t) {
		let r = pt(this, Re);
		return Array.prototype.every.call(t, (n) => r.has(n));
	}
};
Re = /* @__PURE__ */ new WeakMap();
var Nr = new ls(` 
\r	`), ms = (e) => e === "" || e === x || e === F || e === E;
function cc(e, t, r) {
	var _$1, J$1, j$1;
	let { node: n } = e;
	if (n.type === "JSXElement" && gc(n)) return [r("openingElement"), r("closingElement")];
	let s = n.type === "JSXElement" ? r("openingElement") : r("openingFragment"), u = n.type === "JSXElement" ? r("closingElement") : r("closingFragment");
	if (n.children.length === 1 && n.children[0].type === "JSXExpressionContainer" && (n.children[0].expression.type === "TemplateLiteral" || n.children[0].expression.type === "TaggedTemplateExpression")) return [
		s,
		...e.map(r, "children"),
		u
	];
	n.children = n.children.map((h) => Sc(h) ? {
		type: "JSXText",
		value: " ",
		raw: " "
	} : h);
	let i = n.children.some(X), a = n.children.filter((h) => h.type === "JSXExpressionContainer").length > 1, o = n.type === "JSXElement" && n.openingElement.attributes.length > 1, c = ne(s) || i || o || a, m = e.parent.rootMarker === "mdx", D$1 = t.singleQuote ? "{' '}" : "{\" \"}", y$1 = m ? " " : b([D$1, E], " "), p = lc(e, t, r, y$1, ((J$1 = (_$1 = n.openingElement) == null ? void 0 : _$1.name) == null ? void 0 : J$1.name) === "fbt"), A = n.children.some((h) => pr(h));
	for (let h = p.length - 2; h >= 0; h--) {
		let W$1 = p[h] === "" && p[h + 1] === "", Fe$2 = p[h] === F && p[h + 1] === "" && p[h + 2] === F, H$2 = (p[h] === E || p[h] === F) && p[h + 1] === "" && p[h + 2] === y$1, ue$1 = p[h] === y$1 && p[h + 1] === "" && (p[h + 2] === E || p[h + 2] === F), Z$1 = p[h] === y$1 && p[h + 1] === "" && p[h + 2] === y$1, It$2 = p[h] === E && p[h + 1] === "" && p[h + 2] === F || p[h] === F && p[h + 1] === "" && p[h + 2] === E;
		Fe$2 && A || W$1 || H$2 || Z$1 || It$2 ? p.splice(h, 2) : ue$1 && p.splice(h + 1, 2);
	}
	for (; p.length > 0 && ms(O(!1, p, -1));) p.pop();
	for (; p.length > 1 && ms(p[0]) && ms(p[1]);) p.shift(), p.shift();
	let T$1 = [];
	for (let [h, W$1] of p.entries()) {
		if (W$1 === y$1) {
			if (h === 1 && p[h - 1] === "") {
				if (p.length === 2) {
					T$1.push(D$1);
					continue;
				}
				T$1.push([D$1, F]);
				continue;
			} else if (h === p.length - 1) {
				T$1.push(D$1);
				continue;
			} else if (p[h - 1] === "" && p[h - 2] === F) {
				T$1.push(D$1);
				continue;
			}
		}
		T$1.push(W$1), ne(W$1) && (c = !0);
	}
	let S$1 = A ? qt(T$1) : l(T$1, { shouldBreak: !0 });
	if (((j$1 = t.cursorNode) == null ? void 0 : j$1.type) === "JSXText" && n.children.includes(t.cursorNode) && (S$1 = [
		Un,
		S$1,
		Un
	]), m) return S$1;
	let B$2 = l([
		s,
		f([F, S$1]),
		F,
		u
	]);
	return c ? B$2 : ze([l([
		s,
		...p,
		u
	]), B$2]);
}
function lc(e, t, r, n, s) {
	let u = [];
	return e.each(({ node: i, next: a }) => {
		if (i.type === "JSXText") {
			let o = fe(i);
			if (pr(i)) {
				let c = Nr.split(o, !0);
				c[0] === "" && (u.push(""), c.shift(), /\n/u.test(c[0]) ? u.push(fi(s, c[1], i, a)) : u.push(n), c.shift());
				let m;
				if (O(!1, c, -1) === "" && (c.pop(), m = c.pop()), c.length === 0) return;
				for (let [D$1, y$1] of c.entries()) D$1 % 2 === 1 ? u.push(x) : u.push(y$1);
				m !== void 0 ? /\n/u.test(m) ? u.push(fi(s, O(!1, u, -1), i, a)) : u.push(n) : u.push(Di(s, O(!1, u, -1), i, a));
			} else /\n/u.test(o) ? o.match(/\n/gu).length > 1 && u.push("", F) : u.push("", n);
		} else {
			let o = r();
			if (u.push(o), a && pr(a)) {
				let m = Nr.trim(fe(a)), [D$1] = Nr.split(m);
				u.push(Di(s, D$1, i, a));
			} else u.push(F);
		}
	}, "children"), u;
}
function Di(e, t, r, n) {
	return e ? "" : r.type === "JSXElement" && !r.closingElement || (n == null ? void 0 : n.type) === "JSXElement" && !n.closingElement ? t.length === 1 ? E : F : E;
}
function fi(e, t, r, n) {
	return e ? F : t.length === 1 ? r.type === "JSXElement" && !r.closingElement || (n == null ? void 0 : n.type) === "JSXElement" && !n.closingElement ? F : E : F;
}
var mc = new Set([
	"ArrayExpression",
	"TupleExpression",
	"JSXAttribute",
	"JSXElement",
	"JSXExpressionContainer",
	"JSXFragment",
	"ExpressionStatement",
	"CallExpression",
	"OptionalCallExpression",
	"ConditionalExpression",
	"JsExpressionRoot"
]);
function yc(e, t, r) {
	let { parent: n } = e;
	if (mc.has(n.type)) return t;
	let s = e.match(void 0, (i) => i.type === "ArrowFunctionExpression", L, (i) => i.type === "JSXExpressionContainer"), u = Be(e, r);
	return l([
		u ? "" : b("("),
		f([E, t]),
		E,
		u ? "" : b(")")
	], { shouldBreak: s });
}
function Dc(e, t, r) {
	let { node: n } = e, s = [];
	if (s.push(r("name")), n.value) {
		let u;
		if (Q(n.value)) {
			let a = N(!1, N(!1, fe(n.value).slice(1, -1), "&apos;", "'"), "&quot;", "\""), o = xr(a, t.jsxSingleQuote);
			a = o === "\"" ? N(!1, a, "\"", "&quot;") : N(!1, a, "'", "&apos;"), u = e.call(() => ye(e, Ie(o + a + o), t), "value");
		} else u = r("value");
		s.push("=", u);
	}
	return s;
}
function fc(e, t, r) {
	let { node: n } = e, s = (u, i) => u.type === "JSXEmptyExpression" || !d(u) && (U(u) || se(u) || u.type === "ArrowFunctionExpression" || u.type === "AwaitExpression" && (s(u.argument, u) || u.argument.type === "JSXElement") || L(u) || u.type === "ChainExpression" && L(u.expression) || u.type === "FunctionExpression" || u.type === "TemplateLiteral" || u.type === "TaggedTemplateExpression" || u.type === "DoExpression" || X(i) && (u.type === "ConditionalExpression" || De(u)));
	return s(n.expression, e.parent) ? l([
		"{",
		r("expression"),
		ke,
		"}"
	]) : l([
		"{",
		f([E, r("expression")]),
		E,
		ke,
		"}"
	]);
}
function Ec(e, t, r) {
	var a, o;
	let { node: n } = e, s = d(n.name) || d(n.typeParameters) || d(n.typeArguments);
	if (n.selfClosing && n.attributes.length === 0 && !s) return [
		"<",
		r("name"),
		n.typeArguments ? r("typeArguments") : r("typeParameters"),
		" />"
	];
	if (((a = n.attributes) == null ? void 0 : a.length) === 1 && Q(n.attributes[0].value) && !n.attributes[0].value.value.includes(`
`) && !s && !d(n.attributes[0])) return l([
		"<",
		r("name"),
		n.typeArguments ? r("typeArguments") : r("typeParameters"),
		" ",
		...e.map(r, "attributes"),
		n.selfClosing ? " />" : ">"
	]);
	let u = (o = n.attributes) == null ? void 0 : o.some((c) => Q(c.value) && c.value.value.includes(`
`)), i = t.singleAttributePerLine && n.attributes.length > 1 ? F : x;
	return l([
		"<",
		r("name"),
		n.typeArguments ? r("typeArguments") : r("typeParameters"),
		f(e.map(() => [i, r()], "attributes")),
		...Fc(n, t, s)
	], { shouldBreak: u });
}
function Fc(e, t, r) {
	return e.selfClosing ? [x, "/>"] : Cc(e, t, r) ? [">"] : [E, ">"];
}
function Cc(e, t, r) {
	let n = e.attributes.length > 0 && d(O(!1, e.attributes, -1), g.Trailing);
	return e.attributes.length === 0 && !r || (t.bracketSameLine || t.jsxBracketSameLine) && (!r || e.attributes.length > 0) && !n;
}
function Ac(e, t, r) {
	let { node: n } = e, s = [];
	s.push("</");
	let u = r("name");
	return d(n.name, g.Leading | g.Line) ? s.push(f([F, u]), F) : d(n.name, g.Leading | g.Block) ? s.push(" ", u) : s.push(u), s.push(">"), s;
}
function Tc(e, t) {
	let { node: r } = e, n = d(r), s = d(r, g.Line), u = r.type === "JSXOpeningFragment";
	return [
		u ? "<" : "</",
		f([s ? F : n && !u ? " " : "", M(e, t)]),
		s ? F : "",
		">"
	];
}
function dc(e, t, r) {
	return yc(e, ye(e, cc(e, t, r), t), t);
}
function xc(e, t) {
	let { node: r } = e, n = d(r, g.Line);
	return [M(e, t, { indent: n }), n ? F : ""];
}
function hc(e, t, r) {
	let { node: n } = e;
	return [
		"{",
		e.call(({ node: s }) => {
			let u = ["...", r()];
			return !d(s) || !zn(e) ? u : [f([E, ye(e, u, t)]), E];
		}, n.type === "JSXSpreadAttribute" ? "argument" : "expression"),
		"}"
	];
}
function Ei(e, t, r) {
	let { node: n } = e;
	if (n.type.startsWith("JSX")) switch (n.type) {
		case "JSXAttribute": return Dc(e, t, r);
		case "JSXIdentifier": return n.name;
		case "JSXNamespacedName": return P(":", [r("namespace"), r("name")]);
		case "JSXMemberExpression": return P(".", [r("object"), r("property")]);
		case "JSXSpreadAttribute":
		case "JSXSpreadChild": return hc(e, t, r);
		case "JSXExpressionContainer": return fc(e, t, r);
		case "JSXFragment":
		case "JSXElement": return dc(e, t, r);
		case "JSXOpeningElement": return Ec(e, t, r);
		case "JSXClosingElement": return Ac(e, t, r);
		case "JSXOpeningFragment":
		case "JSXClosingFragment": return Tc(e, t);
		case "JSXEmptyExpression": return xc(e, t);
		case "JSXText": throw new Error("JSXText should be handled by JSXElement");
		default: throw new Me(n, "JSX");
	}
}
function gc(e) {
	if (e.children.length === 0) return !0;
	if (e.children.length > 1) return !1;
	let t = e.children[0];
	return t.type === "JSXText" && !pr(t);
}
function pr(e) {
	return e.type === "JSXText" && (Nr.hasNonWhitespaceCharacter(fe(e)) || !/\n/u.test(fe(e)));
}
function Sc(e) {
	return e.type === "JSXExpressionContainer" && Q(e.expression) && e.expression.value === " " && !d(e.expression);
}
function Fi(e) {
	let { node: t, parent: r } = e;
	if (!X(t) || !X(r)) return !1;
	let { index: n, siblings: s } = e, u;
	for (let i = n; i > 0; i--) {
		let a = s[i - 1];
		if (!(a.type === "JSXText" && !pr(a))) {
			u = a;
			break;
		}
	}
	return (u == null ? void 0 : u.type) === "JSXExpressionContainer" && u.expression.type === "JSXEmptyExpression" && Bt(u.expression);
}
function Bc(e) {
	return Bt(e.node) || Fi(e);
}
var Xr = Bc;
var bc = 0;
function Yr(e, t, r) {
	var J$1;
	let { node: n, parent: s, grandparent: u, key: i } = e, a = i !== "body" && (s.type === "IfStatement" || s.type === "WhileStatement" || s.type === "SwitchStatement" || s.type === "DoWhileStatement"), o = n.operator === "|>" && ((J$1 = e.root.extra) == null ? void 0 : J$1.__isUsingHackPipeline), c = ys(e, r, t, !1, a);
	if (a) return c;
	if (o) return l(c);
	if (L(s) && s.callee === n || s.type === "UnaryExpression" || q(s) && !s.computed) return l([f([E, ...c]), E]);
	let m = s.type === "ReturnStatement" || s.type === "ThrowStatement" || s.type === "JSXExpressionContainer" && u.type === "JSXAttribute" || n.operator !== "|" && s.type === "JsExpressionRoot" || n.type !== "NGPipeExpression" && (s.type === "NGRoot" && t.parser === "__ng_binding" || s.type === "NGMicrosyntaxExpression" && u.type === "NGMicrosyntax" && u.body.length === 1) || n === s.body && s.type === "ArrowFunctionExpression" || n !== s.body && s.type === "ForStatement" || s.type === "ConditionalExpression" && u.type !== "ReturnStatement" && u.type !== "ThrowStatement" && !L(u) || s.type === "TemplateLiteral", D$1 = s.type === "AssignmentExpression" || s.type === "VariableDeclarator" || s.type === "ClassProperty" || s.type === "PropertyDefinition" || s.type === "TSAbstractPropertyDefinition" || s.type === "ClassPrivateProperty" || Ae(s), y$1 = De(n.left) && nr(n.operator, n.left.operator);
	if (m || Ut(n) && !y$1 || !Ut(n) && D$1) return l(c);
	if (c.length === 0) return "";
	let C = X(n.right), p = c.findIndex((j$1) => typeof j$1 != "string" && !Array.isArray(j$1) && j$1.type === le), A = c.slice(0, p === -1 ? 1 : p + 1), T$1 = c.slice(A.length, C ? -1 : void 0), S$1 = Symbol("logicalChain-" + ++bc), B$2 = l([...A, f(T$1)], { id: S$1 });
	if (!C) return B$2;
	return l([B$2, At(O(!1, c, -1), { groupId: S$1 })]);
}
function ys(e, t, r, n, s) {
	var A;
	let { node: u } = e;
	if (!De(u)) return [l(t())];
	let i = [];
	nr(u.operator, u.left.operator) ? i = e.call((T$1) => ys(T$1, t, r, !0, s), "left") : i.push(l(t("left")));
	let a = Ut(u), o = (u.operator === "|>" || u.type === "NGPipeExpression" || Pc(e, r)) && !Oe(r.originalText, u.right), c = u.type === "NGPipeExpression" ? "|" : u.operator, m = u.type === "NGPipeExpression" && u.arguments.length > 0 ? l(f([
		E,
		": ",
		P([x, ": "], e.map(() => he(2, l(t())), "arguments"))
	])) : "", D$1;
	if (a) D$1 = [
		c,
		" ",
		t("right"),
		m
	];
	else {
		let S$1 = c === "|>" && ((A = e.root.extra) == null ? void 0 : A.__isUsingHackPipeline) ? e.call((B$2) => ys(B$2, t, r, !0, s), "right") : t("right");
		D$1 = [
			o ? x : "",
			c,
			o ? " " : x,
			S$1,
			m
		];
	}
	let { parent: y$1 } = e, C = d(u.left, g.Trailing | g.Line), p = C || !(s && u.type === "LogicalExpression") && y$1.type !== u.type && u.left.type !== u.type && u.right.type !== u.type;
	if (i.push(o ? "" : " ", p ? l(D$1, { shouldBreak: C }) : D$1), n && d(u)) {
		let T$1 = Wt(ye(e, i, r));
		return T$1.type === Pe ? T$1.parts : Array.isArray(T$1) ? T$1 : [T$1];
	}
	return i;
}
function Ut(e) {
	return e.type !== "LogicalExpression" ? !1 : !!(se(e.right) && e.right.properties.length > 0 || U(e.right) && e.right.elements.length > 0 || X(e.right));
}
var Ci = (e) => e.type === "BinaryExpression" && e.operator === "|";
function Pc(e, t) {
	return (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && Ci(e.node) && !e.hasAncestor((r) => !Ci(r) && r.type !== "JsExpressionRoot");
}
function Ti(e, t, r) {
	let { node: n } = e;
	if (n.type.startsWith("NG")) switch (n.type) {
		case "NGRoot": return [r("node"), d(n.node) ? " //" + ct(n.node)[0].value.trimEnd() : ""];
		case "NGPipeExpression": return Yr(e, t, r);
		case "NGChainedExpression": return l(P([";", x], e.map(() => Ic(e) ? r() : [
			"(",
			r(),
			")"
		], "expressions")));
		case "NGEmptyExpression": return "";
		case "NGMicrosyntax": return e.map(() => [e.isFirst ? "" : Ai(e) ? " " : [";", x], r()], "body");
		case "NGMicrosyntaxKey": return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/iu.test(n.name) ? n.name : JSON.stringify(n.name);
		case "NGMicrosyntaxExpression": return [r("expression"), n.alias === null ? "" : [" as ", r("alias")]];
		case "NGMicrosyntaxKeyedExpression": {
			let { index: s, parent: u } = e, i = Ai(e) || (s === 1 && (n.key.name === "then" || n.key.name === "else" || n.key.name === "as") || (s === 2 || s === 3) && (n.key.name === "else" && u.body[s - 1].type === "NGMicrosyntaxKeyedExpression" && u.body[s - 1].key.name === "then" || n.key.name === "track")) && u.body[0].type === "NGMicrosyntaxExpression";
			return [
				r("key"),
				i ? " " : ": ",
				r("expression")
			];
		}
		case "NGMicrosyntaxLet": return [
			"let ",
			r("key"),
			n.value === null ? "" : [" = ", r("value")]
		];
		case "NGMicrosyntaxAs": return [
			r("key"),
			" as ",
			r("alias")
		];
		default: throw new Me(n, "Angular");
	}
}
function Ai({ node: e, index: t }) {
	return e.type === "NGMicrosyntaxKeyedExpression" && e.key.name === "of" && t === 1;
}
var kc = v([
	"CallExpression",
	"OptionalCallExpression",
	"AssignmentExpression"
]);
function Ic({ node: e }) {
	return tr(e, kc);
}
function Ds(e, t, r) {
	let { node: n } = e;
	return l([P(x, e.map(r, "decorators")), hi(n, t) ? F : x]);
}
function di(e, t, r) {
	return gi(e.node) ? [P(F, e.map(r, "declaration", "decorators")), F] : "";
}
function xi(e, t, r) {
	let { node: n, parent: s } = e, { decorators: u } = n;
	if (!w(u) || gi(s) || Xr(e)) return "";
	let i = n.type === "ClassExpression" || n.type === "ClassDeclaration" || hi(n, t);
	return [
		e.key === "declaration" && iu(s) ? F : i ? Ee : "",
		P(x, e.map(r, "decorators")),
		x
	];
}
function hi(e, t) {
	return e.decorators.some((r) => te(t.originalText, k(r)));
}
function gi(e) {
	var r;
	if (e.type !== "ExportDefaultDeclaration" && e.type !== "ExportNamedDeclaration" && e.type !== "DeclareExportDeclaration") return !1;
	let t = (r = e.declaration) == null ? void 0 : r.decorators;
	return w(t) && ht(e, t[0]);
}
var Dt = class extends Error {
	name = "ArgExpansionBailout";
};
function Lc(e, t, r) {
	let { node: n } = e, s = oe(n);
	if (s.length === 0) return [
		"(",
		M(e, t),
		")"
	];
	let u = s.length - 1;
	if (_c(s)) {
		let y$1 = ["("];
		return Rt(e, (C, p) => {
			y$1.push(r()), p !== u && y$1.push(", ");
		}), y$1.push(")"), y$1;
	}
	let i = !1, a = [];
	Rt(e, ({ node: y$1 }, C) => {
		let p = r();
		C === u || (pe(y$1, t) ? (i = !0, p = [
			p,
			",",
			F,
			F
		]) : p = [
			p,
			",",
			x
		]), a.push(p);
	});
	let o = n.type === "ImportExpression" || n.callee.type === "Import", c = !t.parser.startsWith("__ng_") && !o && ae(t, "all") ? "," : "";
	function m() {
		return l([
			"(",
			f([x, ...a]),
			c,
			x,
			")"
		], { shouldBreak: !0 });
	}
	if (i || e.parent.type !== "Decorator" && lu(s)) return m();
	if (Oc(s)) {
		let y$1 = a.slice(1);
		if (y$1.some(ne)) return m();
		let C;
		try {
			C = r(Rn(n, 0), { expandFirstArg: !0 });
		} catch (p) {
			if (p instanceof Dt) return m();
			throw p;
		}
		return ne(C) ? [Ee, ze([[
			"(",
			l(C, { shouldBreak: !0 }),
			", ",
			...y$1,
			")"
		], m()])] : ze([
			[
				"(",
				C,
				", ",
				...y$1,
				")"
			],
			[
				"(",
				l(C, { shouldBreak: !0 }),
				", ",
				...y$1,
				")"
			],
			m()
		]);
	}
	if (wc(s, a, t)) {
		let y$1 = a.slice(0, -1);
		if (y$1.some(ne)) return m();
		let C;
		try {
			C = r(Rn(n, -1), { expandLastArg: !0 });
		} catch (p) {
			if (p instanceof Dt) return m();
			throw p;
		}
		return ne(C) ? [Ee, ze([[
			"(",
			...y$1,
			l(C, { shouldBreak: !0 }),
			")"
		], m()])] : ze([
			[
				"(",
				...y$1,
				C,
				")"
			],
			[
				"(",
				...y$1,
				l(C, { shouldBreak: !0 }),
				")"
			],
			m()
		]);
	}
	let D$1 = [
		"(",
		f([E, ...a]),
		b(c),
		E,
		")"
	];
	return Or(e) ? D$1 : l(D$1, { shouldBreak: a.some(ne) || i });
}
function cr(e, t = !1) {
	return se(e) && (e.properties.length > 0 || d(e)) || U(e) && (e.elements.length > 0 || d(e)) || e.type === "TSTypeAssertion" && cr(e.expression) || Te(e) && cr(e.expression) || e.type === "FunctionExpression" || e.type === "ArrowFunctionExpression" && (!e.returnType || !e.returnType.typeAnnotation || e.returnType.typeAnnotation.type !== "TSTypeReference" || jc(e.body)) && (e.body.type === "BlockStatement" || e.body.type === "ArrowFunctionExpression" && cr(e.body, !0) || se(e.body) || U(e.body) || !t && (L(e.body) || e.body.type === "ConditionalExpression") || X(e.body)) || e.type === "DoExpression" || e.type === "ModuleExpression";
}
function wc(e, t, r) {
	var u, i;
	let n = O(!1, e, -1);
	if (e.length === 1) {
		let a = O(!1, t, -1);
		if ((u = a.label) != null && u.embed && ((i = a.label) == null ? void 0 : i.hug) !== !1) return !0;
	}
	let s = O(!1, e, -2);
	return !d(n, g.Leading) && !d(n, g.Trailing) && cr(n) && (!s || s.type !== n.type) && (e.length !== 2 || s.type !== "ArrowFunctionExpression" || !U(n)) && !(e.length > 1 && fs(n, r));
}
function Oc(e) {
	if (e.length !== 2) return !1;
	let [t, r] = e;
	return t.type === "ModuleExpression" && vc(r) ? !0 : !d(t) && (t.type === "FunctionExpression" || t.type === "ArrowFunctionExpression" && t.body.type === "BlockStatement") && r.type !== "FunctionExpression" && r.type !== "ArrowFunctionExpression" && r.type !== "ConditionalExpression" && Bi(r) && !cr(r);
}
function Bi(e) {
	if (e.type === "ParenthesizedExpression") return Bi(e.expression);
	if (Te(e) || e.type === "TypeCastExpression") {
		let { typeAnnotation: t } = e;
		if (t.type === "TypeAnnotation" && (t = t.typeAnnotation), t.type === "TSArrayType" && (t = t.elementType, t.type === "TSArrayType" && (t = t.elementType)), t.type === "GenericTypeAnnotation" || t.type === "TSTypeReference") {
			let r = t.typeArguments ?? t.typeParameters;
			(r == null ? void 0 : r.params.length) === 1 && (t = r.params[0]);
		}
		return Mt(t) && be(e.expression, 1);
	}
	return lt(e) && oe(e).length > 1 ? !1 : De(e) ? be(e.left, 1) && be(e.right, 1) : vn(e) || be(e);
}
function _c(e) {
	return e.length === 2 ? Si(e, 0) : e.length === 3 ? e[0].type === "Identifier" && Si(e, 1) : !1;
}
function Si(e, t) {
	let r = e[t], n = e[t + 1];
	return r.type === "ArrowFunctionExpression" && K(r).length === 0 && r.body.type === "BlockStatement" && n.type === "ArrayExpression" && !e.some((s) => d(s));
}
function jc(e) {
	return e.type === "BlockStatement" && (e.body.some((t) => t.type !== "EmptyStatement") || d(e, g.Dangling));
}
function vc(e) {
	return e.type === "ObjectExpression" && e.properties.length === 1 && Ae(e.properties[0]) && e.properties[0].key.type === "Identifier" && e.properties[0].key.name === "type" && Q(e.properties[0].value) && e.properties[0].value.value === "module";
}
var lr = Lc;
var Mc = (e) => ((e.type === "ChainExpression" || e.type === "TSNonNullExpression") && (e = e.expression), L(e) && oe(e).length > 0);
function bi(e, t, r) {
	var c;
	let n = r("object"), s = Es(e, t, r), { node: u } = e, i = e.findAncestor((m) => !(q(m) || m.type === "TSNonNullExpression")), a = e.findAncestor((m) => !(m.type === "ChainExpression" || m.type === "TSNonNullExpression")), o = i && (i.type === "NewExpression" || i.type === "BindExpression" || i.type === "AssignmentExpression" && i.left.type !== "Identifier") || u.computed || u.object.type === "Identifier" && u.property.type === "Identifier" && !q(a) || (a.type === "AssignmentExpression" || a.type === "VariableDeclarator") && (Mc(u.object) || ((c = n.label) == null ? void 0 : c.memberChain));
	return it(n.label, [n, o ? s : l(f([E, s]))]);
}
function Es(e, t, r) {
	let n = r("property"), { node: s } = e, u = V(e);
	return s.computed ? !s.property || Ce(s.property) ? [
		u,
		"[",
		n,
		"]"
	] : l([
		u,
		"[",
		f([E, n]),
		E,
		"]"
	]) : [
		u,
		".",
		n
	];
}
function Pi(e, t, r) {
	if (e.node.type === "ChainExpression") return e.call(() => Pi(e, t, r), "expression");
	let { parent: n } = e, s = !n || n.type === "ExpressionStatement", u = [];
	function i(I$1) {
		let { originalText: G$2 } = t, ee$1 = yt(G$2, k(I$1));
		return G$2.charAt(ee$1) === ")" ? ee$1 !== !1 && Ot(G$2, ee$1 + 1) : pe(I$1, t);
	}
	function a(I$1) {
		let { node: G$2 } = I$1;
		if (G$2.type === "ChainExpression") return I$1.call(() => a(I$1), "expression");
		if (L(G$2) && (Ft(G$2.callee) || L(G$2.callee))) {
			let ee$1 = i(G$2);
			u.unshift({
				node: G$2,
				hasTrailingEmptyLine: ee$1,
				printed: [ye(I$1, [
					V(I$1),
					Qe(I$1, t, r),
					lr(I$1, t, r)
				], t), ee$1 ? F : ""]
			}), I$1.call((qe$1) => a(qe$1), "callee");
		} else Ft(G$2) ? (u.unshift({
			node: G$2,
			needsParens: Be(I$1, t),
			printed: ye(I$1, q(G$2) ? Es(I$1, t, r) : Hr(I$1, t, r), t)
		}), I$1.call((ee$1) => a(ee$1), "object")) : G$2.type === "TSNonNullExpression" ? (u.unshift({
			node: G$2,
			printed: ye(I$1, "!", t)
		}), I$1.call((ee$1) => a(ee$1), "expression")) : u.unshift({
			node: G$2,
			printed: r()
		});
	}
	let { node: o } = e;
	u.unshift({
		node: o,
		printed: [
			V(e),
			Qe(e, t, r),
			lr(e, t, r)
		]
	}), o.callee && e.call((I$1) => a(I$1), "callee");
	let c = [], m = [u[0]], D$1 = 1;
	for (; D$1 < u.length && (u[D$1].node.type === "TSNonNullExpression" || L(u[D$1].node) || q(u[D$1].node) && u[D$1].node.computed && Ce(u[D$1].node.property)); ++D$1) m.push(u[D$1]);
	if (!L(u[0].node)) for (; D$1 + 1 < u.length && Ft(u[D$1].node) && Ft(u[D$1 + 1].node); ++D$1) m.push(u[D$1]);
	c.push(m), m = [];
	let y$1 = !1;
	for (; D$1 < u.length; ++D$1) {
		if (y$1 && Ft(u[D$1].node)) {
			if (u[D$1].node.computed && Ce(u[D$1].node.property)) {
				m.push(u[D$1]);
				continue;
			}
			c.push(m), m = [], y$1 = !1;
		}
		(L(u[D$1].node) || u[D$1].node.type === "ImportExpression") && (y$1 = !0), m.push(u[D$1]), d(u[D$1].node, g.Trailing) && (c.push(m), m = [], y$1 = !1);
	}
	m.length > 0 && c.push(m);
	function C(I$1) {
		return /^[A-Z]|^[$_]+$/u.test(I$1);
	}
	function p(I$1) {
		return I$1.length <= t.tabWidth;
	}
	function A(I$1) {
		var qe$1;
		let G$2 = (qe$1 = I$1[1][0]) == null ? void 0 : qe$1.node.computed;
		if (I$1[0].length === 1) {
			let xt$1 = I$1[0][0].node;
			return xt$1.type === "ThisExpression" || xt$1.type === "Identifier" && (C(xt$1.name) || s && p(xt$1.name) || G$2);
		}
		let ee$1 = O(!1, I$1[0], -1).node;
		return q(ee$1) && ee$1.property.type === "Identifier" && (C(ee$1.property.name) || G$2);
	}
	let T$1 = c.length >= 2 && !d(c[1][0].node) && A(c);
	function S$1(I$1) {
		let G$2 = I$1.map((ee$1) => ee$1.printed);
		return I$1.length > 0 && O(!1, I$1, -1).needsParens ? [
			"(",
			...G$2,
			")"
		] : G$2;
	}
	function B$2(I$1) {
		return I$1.length === 0 ? "" : f([F, P(F, I$1.map(S$1))]);
	}
	let _$1 = c.map(S$1), J$1 = _$1, j$1 = T$1 ? 3 : 2, h = c.flat(), W$1 = h.slice(1, -1).some((I$1) => d(I$1.node, g.Leading)) || h.slice(0, -1).some((I$1) => d(I$1.node, g.Trailing)) || c[j$1] && d(c[j$1][0].node, g.Leading);
	if (c.length <= j$1 && !W$1 && !c.some((I$1) => O(!1, I$1, -1).hasTrailingEmptyLine)) return Or(e) ? J$1 : l(J$1);
	let Fe$2 = O(!1, c[T$1 ? 1 : 0], -1).node, H$2 = !L(Fe$2) && i(Fe$2), ue$1 = [
		S$1(c[0]),
		T$1 ? c.slice(1, 2).map(S$1) : "",
		H$2 ? F : "",
		B$2(c.slice(T$1 ? 2 : 1))
	], Z$1 = u.map(({ node: I$1 }) => I$1).filter(L);
	function It$2() {
		let I$1 = O(!1, O(!1, c, -1), -1).node, G$2 = O(!1, _$1, -1);
		return L(I$1) && ne(G$2) && Z$1.slice(0, -1).some((ee$1) => ee$1.arguments.some(_t));
	}
	let $t$1;
	return W$1 || Z$1.length > 2 && Z$1.some((I$1) => !I$1.arguments.every((G$2) => be(G$2))) || _$1.slice(0, -1).some(ne) || It$2() ? $t$1 = l(ue$1) : $t$1 = [ne(J$1) || H$2 ? Ee : "", ze([J$1, ue$1])], it({ memberChain: !0 }, $t$1);
}
var ki = Pi;
function Vr(e, t, r) {
	var m;
	let { node: n } = e, s = n.type === "NewExpression", u = n.type === "ImportExpression", i = V(e), a = oe(n), o = a.length === 1 && Lr(a[0], t.originalText);
	if (o || Rc(e) || St(n, e.parent)) {
		let D$1 = [];
		if (Rt(e, () => {
			D$1.push(r());
		}), !(o && (m = D$1[0].label) != null && m.embed)) return [
			s ? "new " : "",
			Ii(e, r),
			i,
			Qe(e, t, r),
			"(",
			P(", ", D$1),
			")"
		];
	}
	if (!u && !s && Ft(n.callee) && !e.call((D$1) => Be(D$1, t), "callee", ...n.callee.type === "ChainExpression" ? ["expression"] : [])) return ki(e, t, r);
	let c = [
		s ? "new " : "",
		Ii(e, r),
		i,
		Qe(e, t, r),
		lr(e, t, r)
	];
	return u || L(n.callee) ? l(c) : c;
}
function Ii(e, t) {
	let { node: r } = e;
	return r.type === "ImportExpression" ? `import${r.phase ? `.${r.phase}` : ""}` : t("callee");
}
function Rc(e) {
	let { node: t } = e;
	if (t.type !== "CallExpression" || t.optional || t.callee.type !== "Identifier") return !1;
	let r = oe(t);
	return t.callee.name === "require" ? r.length === 1 && Q(r[0]) || r.length > 1 : t.callee.name === "define" && e.parent.type === "ExpressionStatement" ? r.length === 1 || r.length === 2 && r[0].type === "ArrayExpression" || r.length === 3 && Q(r[0]) && r[1].type === "ArrayExpression" : !1;
}
function Tt(e, t, r, n, s, u) {
	let i = Jc(e, t, r, n, u), a = u ? r(u, { assignmentLayout: i }) : "";
	switch (i) {
		case "break-after-operator": return l([
			l(n),
			s,
			l(f([x, a]))
		]);
		case "never-break-after-operator": return l([
			l(n),
			s,
			" ",
			a
		]);
		case "fluid": {
			let o = Symbol("assignment");
			return l([
				l(n),
				s,
				l(f(x), { id: o }),
				ke,
				At(a, { groupId: o })
			]);
		}
		case "break-lhs": return l([
			n,
			s,
			" ",
			l(a)
		]);
		case "chain": return [
			l(n),
			s,
			x,
			a
		];
		case "chain-tail": return [
			l(n),
			s,
			f([x, a])
		];
		case "chain-tail-arrow-chain": return [
			l(n),
			s,
			a
		];
		case "only-left": return n;
	}
}
function wi(e, t, r) {
	let { node: n } = e;
	return Tt(e, t, r, r("left"), [" ", n.operator], "right");
}
function Oi(e, t, r) {
	return Tt(e, t, r, r("id"), " =", "init");
}
function Jc(e, t, r, n, s) {
	let { node: u } = e, i = u[s];
	if (!i) return "only-left";
	let a = !$r(i);
	if (e.match($r, _i, (y$1) => !a || y$1.type !== "ExpressionStatement" && y$1.type !== "VariableDeclaration")) return a ? i.type === "ArrowFunctionExpression" && i.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
	if (!a && $r(i.right) || Oe(t.originalText, i)) return "break-after-operator";
	if (u.type === "ImportAttribute" || i.type === "CallExpression" && i.callee.name === "require" || t.parser === "json5" || t.parser === "jsonc" || t.parser === "json") return "never-break-after-operator";
	let m = Bu(n);
	if (Wc(u) || Xc(u) || Fs(u) && m) return "break-lhs";
	let D$1 = Hc(u, n, t);
	return e.call(() => qc(e, t, r, D$1), s) ? "break-after-operator" : Gc(u) ? "break-lhs" : !m && (D$1 || i.type === "TemplateLiteral" || i.type === "TaggedTemplateExpression" || i.type === "BooleanLiteral" || Ce(i) || i.type === "ClassExpression") ? "never-break-after-operator" : "fluid";
}
function qc(e, t, r, n) {
	let s = e.node;
	if (De(s) && !Ut(s)) return !0;
	switch (s.type) {
		case "StringLiteralTypeAnnotation":
		case "SequenceExpression": return !0;
		case "TSConditionalType":
		case "ConditionalTypeAnnotation":
			if (!t.experimentalTernaries && !Kc(s)) break;
			return !0;
		case "ConditionalExpression": {
			if (!t.experimentalTernaries) {
				let { test: c } = s;
				return De(c) && !Ut(c);
			}
			let { consequent: a, alternate: o } = s;
			return a.type === "ConditionalExpression" || o.type === "ConditionalExpression";
		}
		case "ClassExpression": return w(s.decorators);
	}
	if (n) return !1;
	let u = s, i = [];
	for (;;) if (u.type === "UnaryExpression" || u.type === "AwaitExpression" || u.type === "YieldExpression" && u.argument !== null) u = u.argument, i.push("argument");
	else if (u.type === "TSNonNullExpression") u = u.expression, i.push("expression");
	else break;
	return !!(Q(u) || e.call(() => ji(e, t, r), ...i));
}
function Wc(e) {
	if (_i(e)) {
		let t = e.left || e.id;
		return t.type === "ObjectPattern" && t.properties.length > 2 && t.properties.some((r) => {
			var n;
			return Ae(r) && (!r.shorthand || ((n = r.value) == null ? void 0 : n.type) === "AssignmentPattern");
		});
	}
	return !1;
}
function $r(e) {
	return e.type === "AssignmentExpression";
}
function _i(e) {
	return $r(e) || e.type === "VariableDeclarator";
}
function Gc(e) {
	let t = Nc(e);
	if (w(t)) {
		let r = e.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
		if (t.length > 1 && t.some((n) => n[r] || n.default)) return !0;
	}
	return !1;
}
var Uc = v(["TSTypeAliasDeclaration", "TypeAlias"]);
function Nc(e) {
	var t;
	if (Uc(e)) return (t = e.typeParameters) == null ? void 0 : t.params;
}
function Xc(e) {
	if (e.type !== "VariableDeclarator") return !1;
	let { typeAnnotation: t } = e.id;
	if (!t || !t.typeAnnotation) return !1;
	let r = Li(t.typeAnnotation);
	return w(r) && r.length > 1 && r.some((n) => w(Li(n)) || n.type === "TSConditionalType");
}
function Fs(e) {
	var t;
	return e.type === "VariableDeclarator" && ((t = e.init) == null ? void 0 : t.type) === "ArrowFunctionExpression";
}
var Yc = v(["TSTypeReference", "GenericTypeAnnotation"]);
function Li(e) {
	var t;
	if (Yc(e)) return (t = e.typeArguments ?? e.typeParameters) == null ? void 0 : t.params;
}
function ji(e, t, r, n = !1) {
	var i;
	let { node: s } = e, u = () => ji(e, t, r, !0);
	if (s.type === "ChainExpression" || s.type === "TSNonNullExpression") return e.call(u, "expression");
	if (L(s)) {
		if ((i = Vr(e, t, r).label) != null && i.memberChain) return !1;
		let o = oe(s);
		return !(o.length === 0 || o.length === 1 && rr(o[0], t)) || Vc(s, r) ? !1 : e.call(u, "callee");
	}
	return q(s) ? e.call(u, "object") : n && (s.type === "Identifier" || s.type === "ThisExpression");
}
function Hc(e, t, r) {
	return Ae(e) ? (t = Wt(t), typeof t == "string" && et(t) < r.tabWidth + 3) : !1;
}
function Vc(e, t) {
	let r = $c(e);
	if (w(r)) {
		if (r.length > 1) return !0;
		if (r.length === 1) {
			let s = r[0];
			if (Ne(s) || _r(s) || s.type === "TSTypeLiteral" || s.type === "ObjectTypeAnnotation") return !0;
		}
		if (ne(t(e.typeParameters ? "typeParameters" : "typeArguments"))) return !0;
	}
	return !1;
}
function $c(e) {
	var t;
	return (t = e.typeParameters ?? e.typeArguments) == null ? void 0 : t.params;
}
function Kc(e) {
	function t(r) {
		switch (r.type) {
			case "FunctionTypeAnnotation":
			case "GenericTypeAnnotation":
			case "TSFunctionType": return !!r.typeParameters;
			case "TSTypeReference": return !!(r.typeArguments ?? r.typeParameters);
			default: return !1;
		}
	}
	return t(e.checkType) || t(e.extendsType);
}
function Je(e, t, r, n, s) {
	let u = e.node, i = K(u), a = s ? Qe(e, r, t) : "";
	if (i.length === 0) return [
		a,
		"(",
		M(e, r, { filter: (p) => ge(r.originalText, k(p)) === ")" }),
		")"
	];
	let { parent: o } = e, c = St(o), m = Cs(u), D$1 = [];
	if (fu(e, (p, A) => {
		let T$1 = A === i.length - 1;
		T$1 && u.rest && D$1.push("..."), D$1.push(t()), !T$1 && (D$1.push(","), c || m ? D$1.push(" ") : pe(i[A], r) ? D$1.push(F, F) : D$1.push(x));
	}), n && !Qc(e)) {
		if (ne(a) || ne(D$1)) throw new Dt();
		return l([
			ur(a),
			"(",
			ur(D$1),
			")"
		]);
	}
	let y$1 = i.every((p) => !w(p.decorators));
	return m && y$1 ? [
		a,
		"(",
		...D$1,
		")"
	] : c ? [
		a,
		"(",
		...D$1,
		")"
	] : (Ir(o) || ou(o) || o.type === "TypeAlias" || o.type === "UnionTypeAnnotation" || o.type === "IntersectionTypeAnnotation" || o.type === "FunctionTypeAnnotation" && o.returnType === u) && i.length === 1 && i[0].name === null && u.this !== i[0] && i[0].typeAnnotation && u.typeParameters === null && Mt(i[0].typeAnnotation) && !u.rest ? r.arrowParens === "always" || u.type === "HookTypeAnnotation" ? [
		"(",
		...D$1,
		")"
	] : D$1 : [
		a,
		"(",
		f([E, ...D$1]),
		b(!Du(u) && ae(r, "all") ? "," : ""),
		E,
		")"
	];
}
function Cs(e) {
	if (!e) return !1;
	let t = K(e);
	if (t.length !== 1) return !1;
	let [r] = t;
	return !d(r) && (r.type === "ObjectPattern" || r.type === "ArrayPattern" || r.type === "Identifier" && r.typeAnnotation && (r.typeAnnotation.type === "TypeAnnotation" || r.typeAnnotation.type === "TSTypeAnnotation") && we(r.typeAnnotation.typeAnnotation) || r.type === "FunctionTypeParam" && we(r.typeAnnotation) && r !== e.rest || r.type === "AssignmentPattern" && (r.left.type === "ObjectPattern" || r.left.type === "ArrayPattern") && (r.right.type === "Identifier" || se(r.right) && r.right.properties.length === 0 || U(r.right) && r.right.elements.length === 0));
}
function zc(e) {
	let t;
	return e.returnType ? (t = e.returnType, t.typeAnnotation && (t = t.typeAnnotation)) : e.typeAnnotation && (t = e.typeAnnotation), t;
}
function ot(e, t) {
	var s;
	let r = zc(e);
	if (!r) return !1;
	let n = (s = e.typeParameters) == null ? void 0 : s.params;
	if (n) {
		if (n.length > 1) return !1;
		if (n.length === 1) {
			let u = n[0];
			if (u.constraint || u.default) return !1;
		}
	}
	return K(e).length === 1 && (we(r) || ne(t));
}
function Qc(e) {
	return e.match((t) => t.type === "ArrowFunctionExpression" && t.body.type === "BlockStatement", (t, r) => {
		if (t.type === "CallExpression" && r === "arguments" && t.arguments.length === 1 && t.callee.type === "CallExpression") {
			let n = t.callee.callee;
			return n.type === "Identifier" || n.type === "MemberExpression" && !n.computed && n.object.type === "Identifier" && n.property.type === "Identifier";
		}
		return !1;
	}, (t, r) => t.type === "VariableDeclarator" && r === "init" || t.type === "ExportDefaultDeclaration" && r === "declaration" || t.type === "TSExportAssignment" && r === "expression" || t.type === "AssignmentExpression" && r === "right" && t.left.type === "MemberExpression" && t.left.object.type === "Identifier" && t.left.object.name === "module" && t.left.property.type === "Identifier" && t.left.property.name === "exports", (t) => t.type !== "VariableDeclaration" || t.kind === "const" && t.declarations.length === 1);
}
function vi(e) {
	let t = K(e);
	return t.length > 1 && t.some((r) => r.type === "TSParameterProperty");
}
var Zc = v([
	"VoidTypeAnnotation",
	"TSVoidKeyword",
	"NullLiteralTypeAnnotation",
	"TSNullKeyword"
]), el = v([
	"ObjectTypeAnnotation",
	"TSTypeLiteral",
	"GenericTypeAnnotation",
	"TSTypeReference"
]);
function tl(e) {
	let { types: t } = e;
	if (t.some((n) => d(n))) return !1;
	let r = t.find((n) => el(n));
	return r ? t.every((n) => n === r || Zc(n)) : !1;
}
function As(e) {
	return Mt(e) || we(e) ? !0 : Ne(e) ? tl(e) : !1;
}
function Mi(e, t, r) {
	let n = t.semi ? ";" : "", { node: s } = e, u = [
		$(e),
		"opaque type ",
		r("id"),
		r("typeParameters")
	];
	return s.supertype && u.push(": ", r("supertype")), s.impltype && u.push(" = ", r("impltype")), u.push(n), u;
}
function Kr(e, t, r) {
	let n = t.semi ? ";" : "", { node: s } = e, u = [$(e)];
	u.push("type ", r("id"), r("typeParameters"));
	return [Tt(e, t, r, u, " =", s.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right"), n];
}
function zr(e, t, r) {
	let n = !1;
	return l(e.map(({ isFirst: s, previous: u, node: i, index: a }) => {
		let o = r();
		if (s) return o;
		let c = we(i), m = we(u);
		return m && c ? [" & ", n ? f(o) : o] : !m && !c ? f([
			" &",
			x,
			o
		]) : (a > 1 && (n = !0), [" & ", a > 1 ? f(o) : o]);
	}, "types"));
}
function Qr(e, t, r) {
	let { node: n } = e, { parent: s } = e, u = s.type !== "TypeParameterInstantiation" && (s.type !== "TSConditionalType" || !t.experimentalTernaries) && (s.type !== "ConditionalTypeAnnotation" || !t.experimentalTernaries) && s.type !== "TSTypeParameterInstantiation" && s.type !== "GenericTypeAnnotation" && s.type !== "TSTypeReference" && s.type !== "TSTypeAssertion" && s.type !== "TupleTypeAnnotation" && s.type !== "TSTupleType" && !(s.type === "FunctionTypeParam" && !s.name && e.grandparent.this !== s) && !((s.type === "TypeAlias" || s.type === "VariableDeclarator" || s.type === "TSTypeAliasDeclaration") && Oe(t.originalText, n)), i = As(n), a = e.map((m) => {
		let D$1 = r();
		return i || (D$1 = he(2, D$1)), ye(m, D$1, t);
	}, "types");
	if (i) return P(" | ", a);
	let c = [b([u && !Oe(t.originalText, n) ? x : "", "| "]), P([x, "| "], a)];
	return Be(e, t) ? l([f(c), E]) : (s.type === "TupleTypeAnnotation" || s.type === "TSTupleType") && s[s.type === "TupleTypeAnnotation" && s.types ? "types" : "elementTypes"].length > 1 ? l([
		f([b(["(", E]), c]),
		E,
		b(")")
	]) : l(u ? f(c) : c);
}
function rl(e) {
	var n;
	let { node: t, parent: r } = e;
	return t.type === "FunctionTypeAnnotation" && (Ir(r) || !((r.type === "ObjectTypeProperty" || r.type === "ObjectTypeInternalSlot") && !r.variance && !r.optional && ht(r, t) || r.type === "ObjectTypeCallProperty" || ((n = e.getParentNode(2)) == null ? void 0 : n.type) === "DeclareFunction"));
}
function Zr(e, t, r) {
	let { node: n } = e, s = [Nt(e)];
	(n.type === "TSConstructorType" || n.type === "TSConstructSignatureDeclaration") && s.push("new ");
	let u = Je(e, r, t, !1, !0), i = [];
	return n.type === "FunctionTypeAnnotation" ? i.push(rl(e) ? " => " : ": ", r("returnType")) : i.push(Y(e, r, n.returnType ? "returnType" : "typeAnnotation")), ot(n, i) && (u = l(u)), s.push(u, i), l(s);
}
function en(e, t, r) {
	return [
		r("objectType"),
		V(e),
		"[",
		r("indexType"),
		"]"
	];
}
function tn(e, t, r) {
	return ["infer ", r("typeParameter")];
}
function Ts(e, t, r) {
	let { node: n } = e;
	return [
		n.postfix ? "" : r,
		Y(e, t),
		n.postfix ? r : ""
	];
}
function rn(e, t, r) {
	let { node: n } = e;
	return [
		"...",
		...n.type === "TupleTypeSpreadElement" && n.label ? [r("label"), ": "] : [],
		r("typeAnnotation")
	];
}
function nn(e, t, r) {
	let { node: n } = e;
	return [
		n.variance ? r("variance") : "",
		r("label"),
		n.optional ? "?" : "",
		": ",
		r("elementType")
	];
}
var nl = /* @__PURE__ */ new WeakSet();
function Y(e, t, r = "typeAnnotation") {
	let { node: { [r]: n } } = e;
	if (!n) return "";
	let s = !1;
	if (n.type === "TSTypeAnnotation" || n.type === "TypeAnnotation") {
		let u = e.call(Ri, r);
		(u === "=>" || u === ":" && d(n, g.Leading)) && (s = !0), nl.add(n);
	}
	return s ? [" ", t(r)] : t(r);
}
var Ri = (e) => e.match((t) => t.type === "TSTypeAnnotation", (t, r) => (r === "returnType" || r === "typeAnnotation") && (t.type === "TSFunctionType" || t.type === "TSConstructorType")) ? "=>" : e.match((t) => t.type === "TSTypeAnnotation", (t, r) => r === "typeAnnotation" && (t.type === "TSJSDocNullableType" || t.type === "TSJSDocNonNullableType" || t.type === "TSTypePredicate")) || e.match((t) => t.type === "TypeAnnotation", (t, r) => r === "typeAnnotation" && t.type === "Identifier", (t, r) => r === "id" && t.type === "DeclareFunction") || e.match((t) => t.type === "TypeAnnotation", (t, r) => r === "typeAnnotation" && t.type === "Identifier", (t, r) => r === "id" && t.type === "DeclareHook") || e.match((t) => t.type === "TypeAnnotation", (t, r) => r === "bound" && t.type === "TypeParameter" && t.usesExtendsBound) ? "" : ":";
function sn(e, t, r) {
	let n = Ri(e);
	return n ? [
		n,
		" ",
		r("typeAnnotation")
	] : r("typeAnnotation");
}
function un(e) {
	return [e("elementType"), "[]"];
}
function an({ node: e }, t) {
	let r = e.type === "TSTypeQuery" ? "exprName" : "argument", n = e.type === "TypeofTypeAnnotation" || e.typeArguments ? "typeArguments" : "typeParameters";
	return [
		"typeof ",
		t(r),
		t(n)
	];
}
function on(e, t) {
	let { node: r } = e;
	return [
		r.type === "TSTypePredicate" && r.asserts ? "asserts " : r.type === "TypePredicate" && r.kind ? `${r.kind} ` : "",
		t("parameterName"),
		r.typeAnnotation ? [" is ", Y(e, t)] : ""
	];
}
function V(e) {
	let { node: t } = e;
	return !t.optional || t.type === "Identifier" && t === e.parent.key ? "" : L(t) || q(t) && t.computed || t.type === "OptionalIndexedAccessType" ? "?." : "?";
}
function pn(e) {
	return e.node.definite || e.match(void 0, (t, r) => r === "id" && t.type === "VariableDeclarator" && t.definite) ? "!" : "";
}
var sl = new Set([
	"DeclareClass",
	"DeclareComponent",
	"DeclareFunction",
	"DeclareHook",
	"DeclareVariable",
	"DeclareExportDeclaration",
	"DeclareExportAllDeclaration",
	"DeclareOpaqueType",
	"DeclareTypeAlias",
	"DeclareEnum",
	"DeclareInterface"
]);
function $(e) {
	let { node: t } = e;
	return t.declare || sl.has(t.type) && e.parent.type !== "DeclareExportDeclaration" ? "declare " : "";
}
var ul = new Set([
	"TSAbstractMethodDefinition",
	"TSAbstractPropertyDefinition",
	"TSAbstractAccessorProperty"
]);
function Nt({ node: e }) {
	return e.abstract || ul.has(e.type) ? "abstract " : "";
}
function Qe(e, t, r) {
	let n = e.node;
	return n.typeArguments ? r("typeArguments") : n.typeParameters ? r("typeParameters") : "";
}
function Hr(e, t, r) {
	return ["::", r("callee")];
}
function ft(e, t, r) {
	return e.type === "EmptyStatement" ? ";" : e.type === "BlockStatement" || r ? [" ", t] : f([x, t]);
}
function cn(e, t) {
	return [
		"...",
		t("argument"),
		Y(e, t)
	];
}
function Xt(e) {
	return e.accessibility ? e.accessibility + " " : "";
}
function il(e, t, r, n) {
	let { node: s } = e, u = s.inexact ? "..." : "";
	return d(s, g.Dangling) ? l([
		r,
		u,
		M(e, t, { indent: !0 }),
		E,
		n
	]) : [
		r,
		u,
		n
	];
}
function Yt(e, t, r) {
	let { node: n } = e, s = [], u = n.type === "TupleExpression" ? "#[" : "[", i = "]", a = n.type === "TupleTypeAnnotation" && n.types ? "types" : n.type === "TSTupleType" || n.type === "TupleTypeAnnotation" ? "elementTypes" : "elements", o = n[a];
	if (o.length === 0) s.push(il(e, t, u, i));
	else {
		let c = O(!1, o, -1), m = (c == null ? void 0 : c.type) !== "RestElement" && !n.inexact, D$1 = c === null, y$1 = Symbol("array"), C = !t.__inJestEach && o.length > 1 && o.every((T$1, S$1, B$2) => {
			let _$1 = T$1 == null ? void 0 : T$1.type;
			if (!U(T$1) && !se(T$1)) return !1;
			let J$1 = B$2[S$1 + 1];
			if (J$1 && _$1 !== J$1.type) return !1;
			let j$1 = U(T$1) ? "elements" : "properties";
			return T$1[j$1] && T$1[j$1].length > 1;
		}), p = fs(n, t), A = m ? D$1 ? "," : ae(t) ? p ? b(",", "", { groupId: y$1 }) : b(",") : "" : "";
		s.push(l([
			u,
			f([
				E,
				p ? ol(e, t, r, A) : [al(e, t, a, n.inexact, r), A],
				M(e, t)
			]),
			E,
			i
		], {
			shouldBreak: C,
			id: y$1
		}));
	}
	return s.push(V(e), Y(e, r)), s;
}
function fs(e, t) {
	return U(e) && e.elements.length > 1 && e.elements.every((r) => r && (Ce(r) || jn(r) && !d(r.argument)) && !d(r, g.Trailing | g.Line, (n) => !te(t.originalText, R(n), { backwards: !0 })));
}
function Ji({ node: e }, { originalText: t }) {
	let r = (s) => Lt(t, wt(t, s)), n = (s) => t[s] === "," ? s : n(r(s + 1));
	return Ot(t, n(k(e)));
}
function al(e, t, r, n, s) {
	let u = [];
	return e.each(({ node: i, isLast: a }) => {
		u.push(i ? l(s()) : ""), (!a || n) && u.push([
			",",
			x,
			i && Ji(e, t) ? E : ""
		]);
	}, r), n && u.push("..."), u;
}
function ol(e, t, r, n) {
	let s = [];
	return e.each(({ isLast: u, next: i }) => {
		s.push([r(), u ? n : ","]), u || s.push(Ji(e, t) ? [F, F] : d(i, g.Leading | g.Line) ? F : x);
	}, "elements"), qt(s);
}
var qi = new Proxy(() => {}, { get: () => qi }), ln = qi;
var pl = /^[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC][\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/, cl = (e) => pl.test(e), Wi = cl;
function ll(e) {
	return e.length === 1 ? e : e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/u, "$1$2").replace(/^([+-]?[\d.]+)e[+-]?0+$/u, "$1").replace(/^([+-])?\./u, "$10.").replace(/(\.\d+?)0+(?=e|$)/u, "$1").replace(/\.(?=e|$)/u, "");
}
var Ze = ll;
var mn = /* @__PURE__ */ new WeakMap();
function Ui(e) {
	return /^(?:\d+|\d+\.\d+)$/u.test(e);
}
function Gi(e, t) {
	return t.parser === "json" || t.parser === "jsonc" || !Q(e.key) || tt(fe(e.key), t).slice(1, -1) !== e.key.value ? !1 : !!(Wi(e.key.value) && !(t.parser === "babel-ts" && e.type === "ClassProperty" || t.parser === "typescript" && e.type === "PropertyDefinition") || Ui(e.key.value) && String(Number(e.key.value)) === e.key.value && e.type !== "ImportAttribute" && (t.parser === "babel" || t.parser === "acorn" || t.parser === "espree" || t.parser === "meriyah" || t.parser === "__babel_estree"));
}
function ml(e, t) {
	let { key: r } = e.node;
	return (r.type === "Identifier" || Ce(r) && Ui(Ze(fe(r))) && String(r.value) === Ze(fe(r)) && !(t.parser === "typescript" || t.parser === "babel-ts")) && (t.parser === "json" || t.parser === "jsonc" || t.quoteProps === "consistent" && mn.get(e.parent));
}
function Et(e, t, r) {
	let { node: n } = e;
	if (n.computed) return [
		"[",
		r("key"),
		"]"
	];
	let { parent: s } = e, { key: u } = n;
	if (t.quoteProps === "consistent" && !mn.has(s)) {
		let i = e.siblings.some((a) => !a.computed && Q(a.key) && !Gi(a, t));
		mn.set(s, i);
	}
	if (ml(e, t)) {
		let i = tt(JSON.stringify(u.type === "Identifier" ? u.name : u.value.toString()), t);
		return e.call((a) => ye(a, i, t), "key");
	}
	return Gi(n, t) && (t.quoteProps === "as-needed" || t.quoteProps === "consistent" && !mn.get(s)) ? e.call((i) => ye(i, /^\d/u.test(u.value) ? Ze(u.value) : u.value, t), "key") : r("key");
}
function yn(e, t, r) {
	let { node: n } = e;
	return n.shorthand ? r("value") : Tt(e, t, r, Et(e, t, r), ":", "value");
}
var yl = ({ node: e, key: t, parent: r }) => t === "value" && e.type === "FunctionExpression" && (r.type === "ObjectMethod" || r.type === "ClassMethod" || r.type === "ClassPrivateMethod" || r.type === "MethodDefinition" || r.type === "TSAbstractMethodDefinition" || r.type === "TSDeclareMethod" || r.type === "Property" && gt(r));
function Dn(e, t, r, n) {
	if (yl(e)) return fn(e, r, t);
	let { node: s } = e, u = !1;
	if ((s.type === "FunctionDeclaration" || s.type === "FunctionExpression") && n != null && n.expandLastArg) {
		let { parent: m } = e;
		L(m) && (oe(m).length > 1 || K(s).every((D$1) => D$1.type === "Identifier" && !D$1.typeAnnotation)) && (u = !0);
	}
	let i = [
		$(e),
		s.async ? "async " : "",
		`function${s.generator ? "*" : ""} `,
		s.id ? t("id") : ""
	], a = Je(e, t, r, u), o = Ht(e, t), c = ot(s, o);
	return i.push(Qe(e, r, t), l([c ? l(a) : a, o]), s.body ? " " : "", t("body")), r.semi && (s.declare || !s.body) && i.push(";"), i;
}
function mr(e, t, r) {
	let { node: n } = e, { kind: s } = n, u = n.value || n, i = [];
	return !s || s === "init" || s === "method" || s === "constructor" ? u.async && i.push("async ") : (ln.ok(s === "get" || s === "set"), i.push(s, " ")), u.generator && i.push("*"), i.push(Et(e, t, r), n.optional || n.key.optional ? "?" : "", n === u ? fn(e, t, r) : r("value")), i;
}
function fn(e, t, r) {
	let { node: n } = e, s = Je(e, r, t), u = Ht(e, r), i = vi(n), a = ot(n, u), o = [Qe(e, t, r), l([i ? l(s, { shouldBreak: !0 }) : a ? l(s) : s, u])];
	return n.body ? o.push(" ", r("body")) : o.push(t.semi ? ";" : ""), o;
}
function Dl(e) {
	let t = K(e);
	return t.length === 1 && !e.typeParameters && !d(e, g.Dangling) && t[0].type === "Identifier" && !t[0].typeAnnotation && !d(t[0]) && !t[0].optional && !e.predicate && !e.returnType;
}
function En(e, t) {
	if (t.arrowParens === "always") return !1;
	if (t.arrowParens === "avoid") {
		let { node: r } = e;
		return Dl(r);
	}
	return !1;
}
function Ht(e, t) {
	let { node: r } = e, s = [Y(e, t, "returnType")];
	return r.predicate && s.push(t("predicate")), s;
}
function Ni(e, t, r) {
	let { node: n } = e, s = t.semi ? ";" : "", u = [];
	if (n.argument) {
		let o = r("argument");
		fl(t, n.argument) ? o = [
			"(",
			f([F, o]),
			F,
			")"
		] : (De(n.argument) || n.argument.type === "SequenceExpression" || t.experimentalTernaries && n.argument.type === "ConditionalExpression" && (n.argument.consequent.type === "ConditionalExpression" || n.argument.alternate.type === "ConditionalExpression")) && (o = l([
			b("("),
			f([E, o]),
			E,
			b(")")
		])), u.push(" ", o);
	}
	let i = d(n, g.Dangling), a = s && i && d(n, g.Last | g.Line);
	return a && u.push(s), i && u.push(" ", M(e, t)), a || u.push(s), u;
}
function Xi(e, t, r) {
	return ["return", Ni(e, t, r)];
}
function Yi(e, t, r) {
	return ["throw", Ni(e, t, r)];
}
function fl(e, t) {
	if (Oe(e.originalText, t) || d(t, g.Leading, (r) => de(e.originalText, R(r), k(r))) && !X(t)) return !0;
	if (jt(t)) {
		let r = t, n;
		for (; n = uu(r);) if (r = n, Oe(e.originalText, r)) return !0;
	}
	return !1;
}
var ds = /* @__PURE__ */ new WeakMap();
function Hi(e) {
	return ds.has(e) || ds.set(e, e.type === "ConditionalExpression" && !ie(e, (t) => t.type === "ObjectExpression")), ds.get(e);
}
var Vi = (e) => e.type === "SequenceExpression";
function $i(e, t, r, n = {}) {
	let s = [], u, i = [], a = !1, o = !n.expandLastArg && e.node.body.type === "ArrowFunctionExpression", c;
	(function T$1() {
		let { node: S$1 } = e, B$2 = El(e, t, r, n);
		if (s.length === 0) s.push(B$2);
		else {
			let { leading: _$1, trailing: J$1 } = os(e, t);
			s.push([_$1, B$2]), i.unshift(J$1);
		}
		o && (a || (a = S$1.returnType && K(S$1).length > 0 || S$1.typeParameters || K(S$1).some((_$1) => _$1.type !== "Identifier"))), !o || S$1.body.type !== "ArrowFunctionExpression" ? (u = r("body", n), c = S$1.body) : e.call(T$1, "body");
	})();
	let m = !Oe(t.originalText, c) && (Vi(c) || Fl(c, u, t) || !a && Hi(c)), D$1 = e.key === "callee" && lt(e.parent), y$1 = Symbol("arrow-chain"), C = Cl(e, n, {
		signatureDocs: s,
		shouldBreak: a
	}), p, A = !1;
	return o && (D$1 || n.assignmentLayout) && (A = !0, p = n.assignmentLayout === "chain-tail-arrow-chain" || D$1 && !m), u = Al(e, t, n, {
		bodyDoc: u,
		bodyComments: i,
		functionBody: c,
		shouldPutBodyOnSameLine: m
	}), l([
		l(A ? f([E, C]) : C, {
			shouldBreak: p,
			id: y$1
		}),
		" =>",
		o ? At(u, { groupId: y$1 }) : l(u),
		o && D$1 ? b(E, "", { groupId: y$1 }) : ""
	]);
}
function El(e, t, r, n) {
	let { node: s } = e, u = [];
	if (s.async && u.push("async "), En(e, t)) u.push(r(["params", 0]));
	else {
		let a = n.expandLastArg || n.expandFirstArg, o = Ht(e, r);
		if (a) {
			if (ne(o)) throw new Dt();
			o = l(ur(o));
		}
		u.push(l([Je(e, r, t, a, !0), o]));
	}
	let i = M(e, t, { filter(a) {
		let o = yt(t.originalText, k(a));
		return o !== !1 && t.originalText.slice(o, o + 2) === "=>";
	} });
	return i && u.push(" ", i), u;
}
function Fl(e, t, r) {
	var n, s;
	return U(e) || se(e) || e.type === "ArrowFunctionExpression" || e.type === "DoExpression" || e.type === "BlockStatement" || X(e) || ((n = t.label) == null ? void 0 : n.hug) !== !1 && (((s = t.label) == null ? void 0 : s.embed) || Lr(e, r.originalText));
}
function Cl(e, t, { signatureDocs: r, shouldBreak: n }) {
	if (r.length === 1) return r[0];
	let { parent: s, key: u } = e;
	return u !== "callee" && lt(s) || De(s) ? l([
		r[0],
		" =>",
		f([x, P([" =>", x], r.slice(1))])
	], { shouldBreak: n }) : u === "callee" && lt(s) || t.assignmentLayout ? l(P([" =>", x], r), { shouldBreak: n }) : l(f(P([" =>", x], r)), { shouldBreak: n });
}
function Al(e, t, r, { bodyDoc: n, bodyComments: s, functionBody: u, shouldPutBodyOnSameLine: i }) {
	let { node: a, parent: o } = e, c = r.expandLastArg && ae(t, "all") ? b(",") : "", m = (r.expandLastArg || o.type === "JSXExpressionContainer") && !d(a) ? E : "";
	return i && Hi(u) ? [
		" ",
		l([
			b("", "("),
			f([E, n]),
			b("", ")"),
			c,
			m
		]),
		s
	] : (Vi(u) && (n = l([
		"(",
		f([E, n]),
		E,
		")"
	])), i ? [
		" ",
		n,
		s
	] : [
		f([
			x,
			n,
			s
		]),
		c,
		m
	]);
}
var Tl = (e, t, r) => {
	if (!(e && t == null)) {
		if (t.findLast) return t.findLast(r);
		for (let n = t.length - 1; n >= 0; n--) {
			let s = t[n];
			if (r(s, n, t)) return s;
		}
	}
}, Ki = Tl;
function yr(e, t, r, n) {
	let { node: s } = e, u = [], i = Ki(!1, s[n], (a) => a.type !== "EmptyStatement");
	return e.each(({ node: a }) => {
		a.type !== "EmptyStatement" && (u.push(r()), a !== i && (u.push(F), pe(a, t) && u.push(F)));
	}, n), u;
}
function Fn(e, t, r) {
	let n = dl(e, t, r), { node: s, parent: u } = e;
	if (s.type === "Program" && (u == null ? void 0 : u.type) !== "ModuleExpression") return n ? [n, F] : "";
	let i = [];
	if (s.type === "StaticBlock" && i.push("static "), i.push("{"), n) i.push(f([F, n]), F);
	else {
		let a = e.grandparent;
		u.type === "ArrowFunctionExpression" || u.type === "FunctionExpression" || u.type === "FunctionDeclaration" || u.type === "ComponentDeclaration" || u.type === "HookDeclaration" || u.type === "ObjectMethod" || u.type === "ClassMethod" || u.type === "ClassPrivateMethod" || u.type === "ForStatement" || u.type === "WhileStatement" || u.type === "DoWhileStatement" || u.type === "DoExpression" || u.type === "ModuleExpression" || u.type === "CatchClause" && !a.finalizer || u.type === "TSModuleDeclaration" || s.type === "StaticBlock" || i.push(F);
	}
	return i.push("}"), i;
}
function dl(e, t, r) {
	let { node: n } = e, s = w(n.directives), u = n.body.some((o) => o.type !== "EmptyStatement"), i = d(n, g.Dangling);
	if (!s && !u && !i) return "";
	let a = [];
	return s && (a.push(yr(e, t, r, "directives")), (u || i) && (a.push(F), pe(O(!1, n.directives, -1), t) && a.push(F))), u && a.push(yr(e, t, r, "body")), i && a.push(M(e, t)), a;
}
function xl(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return function(r) {
		return t.has(r) || t.set(r, Symbol(e)), t.get(r);
	};
}
var Cn = xl;
function hl(e) {
	switch (e) {
		case null: return "";
		case "PlusOptional": return "+?";
		case "MinusOptional": return "-?";
		case "Optional": return "?";
	}
}
function zi(e, t, r) {
	let { node: n } = e;
	return l([
		n.variance ? r("variance") : "",
		"[",
		f([
			r("keyTparam"),
			" in ",
			r("sourceType")
		]),
		"]",
		hl(n.optional),
		": ",
		r("propType")
	]);
}
function xs(e, t) {
	return e === "+" || e === "-" ? e + t : t;
}
function Qi(e, t, r) {
	let { node: n } = e, s = de(t.originalText, R(n), R(n.typeParameter));
	return l([
		"{",
		f([
			t.bracketSpacing ? x : E,
			l([
				r("typeParameter"),
				n.optional ? xs(n.optional, "?") : "",
				n.typeAnnotation ? ": " : "",
				r("typeAnnotation")
			]),
			t.semi ? b(";") : ""
		]),
		M(e, t),
		t.bracketSpacing ? x : E,
		"}"
	], { shouldBreak: s });
}
var Dr = Cn("typeParameters");
function gl(e, t, r) {
	let { node: n } = e;
	return K(n).length === 1 && n.type.startsWith("TS") && !n[r][0].constraint && e.parent.type === "ArrowFunctionExpression" && !(t.filepath && /\.ts$/u.test(t.filepath));
}
function Pt(e, t, r, n) {
	let { node: s } = e;
	if (!s[n]) return "";
	if (!Array.isArray(s[n])) return r(n);
	let u = St(e.grandparent), i = e.match((c) => !(c[n].length === 1 && we(c[n][0])), void 0, (c, m) => m === "typeAnnotation", (c) => c.type === "Identifier", Fs);
	if (s[n].length === 0 || !i && (u || s[n].length === 1 && (s[n][0].type === "NullableTypeAnnotation" || As(s[n][0])))) return [
		"<",
		P(", ", e.map(r, n)),
		Sl(e, t),
		">"
	];
	let o = s.type === "TSTypeParameterInstantiation" ? "" : gl(e, t, n) ? "," : ae(t) ? b(",") : "";
	return l([
		"<",
		f([E, P([",", x], e.map(r, n))]),
		o,
		E,
		">"
	], { id: Dr(s) });
}
function Sl(e, t) {
	let { node: r } = e;
	if (!d(r, g.Dangling)) return "";
	let n = !d(r, g.Line), s = M(e, t, { indent: !n });
	return n ? s : [s, F];
}
function An(e, t, r) {
	let { node: n, parent: s } = e, u = [n.type === "TSTypeParameter" && n.const ? "const " : ""], i = n.type === "TSTypeParameter" ? r("name") : n.name;
	if (s.type === "TSMappedType") return s.readonly && u.push(xs(s.readonly, "readonly"), " "), u.push("[", i), n.constraint && u.push(" in ", r("constraint")), s.nameType && u.push(" as ", e.callParent(() => r("nameType"))), u.push("]"), u;
	if (n.variance && u.push(r("variance")), n.in && u.push("in "), n.out && u.push("out "), u.push(i), n.bound && (n.usesExtendsBound && u.push(" extends "), u.push(Y(e, r, "bound"))), n.constraint) {
		let a = Symbol("constraint");
		u.push(" extends", l(f(x), { id: a }), ke, At(r("constraint"), { groupId: a }));
	}
	return n.default && u.push(" = ", r("default")), l(u);
}
var Zi = v([
	"ClassProperty",
	"PropertyDefinition",
	"ClassPrivateProperty",
	"ClassAccessorProperty",
	"AccessorProperty",
	"TSAbstractPropertyDefinition",
	"TSAbstractAccessorProperty"
]);
function Tn(e, t, r) {
	let { node: n } = e, s = [
		$(e),
		Nt(e),
		"class"
	], u = d(n.id, g.Trailing) || d(n.typeParameters, g.Trailing) || d(n.superClass) || w(n.extends) || w(n.mixins) || w(n.implements), i = [], a = [];
	if (n.id && i.push(" ", r("id")), i.push(r("typeParameters")), n.superClass) {
		let o = [bl(e, t, r), r(n.superTypeArguments ? "superTypeArguments" : "superTypeParameters")], c = e.call((m) => ["extends ", ye(m, o, t)], "superClass");
		u ? a.push(x, l(c)) : a.push(" ", c);
	} else a.push(hs(e, t, r, "extends"));
	if (a.push(hs(e, t, r, "mixins"), hs(e, t, r, "implements")), u) {
		let o;
		ta(n) ? o = [...i, f(a)] : o = f([...i, a]), s.push(l(o, { id: ea(n) }));
	} else s.push(...i, ...a);
	return s.push(" ", r("body")), s;
}
var ea = Cn("heritageGroup");
function gs(e) {
	return b(F, "", { groupId: ea(e) });
}
function Bl(e) {
	return [
		"extends",
		"mixins",
		"implements"
	].reduce((t, r) => t + (Array.isArray(e[r]) ? e[r].length : 0), e.superClass ? 1 : 0) > 1;
}
function ta(e) {
	return e.typeParameters && !d(e.typeParameters, g.Trailing | g.Line) && !Bl(e);
}
function hs(e, t, r, n) {
	let { node: s } = e;
	if (!w(s[n])) return "";
	let u = M(e, t, { marker: n });
	return [
		ta(s) ? b(" ", x, { groupId: Dr(s.typeParameters) }) : x,
		u,
		u && F,
		n,
		l(f([x, P([",", x], e.map(r, n))]))
	];
}
function bl(e, t, r) {
	let n = r("superClass"), { parent: s } = e;
	return s.type === "AssignmentExpression" ? l(b([
		"(",
		f([E, n]),
		E,
		")"
	], n)) : n;
}
function dn(e, t, r) {
	let { node: n } = e, s = [];
	return w(n.decorators) && s.push(Ds(e, t, r)), s.push(Xt(n)), n.static && s.push("static "), s.push(Nt(e)), n.override && s.push("override "), s.push(mr(e, t, r)), s;
}
function xn(e, t, r) {
	let { node: n } = e, s = [], u = t.semi ? ";" : "";
	w(n.decorators) && s.push(Ds(e, t, r)), s.push(Xt(n), $(e)), n.static && s.push("static "), s.push(Nt(e)), n.override && s.push("override "), n.readonly && s.push("readonly "), n.variance && s.push(r("variance")), (n.type === "ClassAccessorProperty" || n.type === "AccessorProperty" || n.type === "TSAbstractAccessorProperty") && s.push("accessor "), s.push(Et(e, t, r), V(e), pn(e), Y(e, r));
	return [Tt(e, t, r, s, " =", n.type === "TSAbstractPropertyDefinition" || n.type === "TSAbstractAccessorProperty" ? void 0 : "value"), u];
}
function ra(e, t, r) {
	let { node: n } = e, s = [];
	return e.each(({ node: u, next: i, isLast: a }) => {
		s.push(r()), !t.semi && Zi(u) && Pl(u, i) && s.push(";"), a || (s.push(F), pe(u, t) && s.push(F));
	}, "body"), d(n, g.Dangling) && s.push(M(e, t)), [
		w(n.body) ? gs(e.parent) : "",
		"{",
		s.length > 0 ? [f([F, s]), F] : "",
		"}"
	];
}
function Pl(e, t) {
	var s;
	let { type: r, name: n } = e.key;
	if (!e.computed && r === "Identifier" && (n === "static" || n === "get" || n === "set") && !e.value && !e.typeAnnotation) return !0;
	if (!t || t.static || t.accessibility || t.readonly) return !1;
	if (!t.computed) {
		let u = (s = t.key) == null ? void 0 : s.name;
		if (u === "in" || u === "instanceof") return !0;
	}
	if (Zi(t) && t.variance && !t.static && !t.declare) return !0;
	switch (t.type) {
		case "ClassProperty":
		case "PropertyDefinition":
		case "TSAbstractPropertyDefinition": return t.computed;
		case "MethodDefinition":
		case "TSAbstractMethodDefinition":
		case "ClassMethod":
		case "ClassPrivateMethod": {
			if ((t.value ? t.value.async : t.async) || t.kind === "get" || t.kind === "set") return !1;
			let i = t.value ? t.value.generator : t.generator;
			return !!(t.computed || i);
		}
		case "TSIndexSignature": return !0;
	}
	return !1;
}
function na(e, t) {
	if (t.semi || Ss(e, t) || bs(e, t)) return !1;
	let { node: r, key: n, parent: s } = e;
	return !!(r.type === "ExpressionStatement" && (n === "body" && (s.type === "Program" || s.type === "BlockStatement" || s.type === "StaticBlock" || s.type === "TSModuleBlock") || n === "consequent" && s.type === "SwitchCase") && e.call(() => sa(e, t), "expression"));
}
function sa(e, t) {
	let { node: r } = e;
	switch (r.type) {
		case "ParenthesizedExpression":
		case "TypeCastExpression":
		case "ArrayExpression":
		case "ArrayPattern":
		case "TemplateLiteral":
		case "TemplateElement":
		case "RegExpLiteral": return !0;
		case "ArrowFunctionExpression":
			if (!En(e, t)) return !0;
			break;
		case "UnaryExpression": {
			let { prefix: n, operator: s } = r;
			if (n && (s === "+" || s === "-")) return !0;
			break;
		}
		case "BindExpression":
			if (!r.object) return !0;
			break;
		case "Literal":
			if (r.regex) return !0;
			break;
		default: if (X(r)) return !0;
	}
	return Be(e, t) ? !0 : jt(r) ? e.call(() => sa(e, t), ...Pr(r)) : !1;
}
function Ss({ node: e, parent: t }, r) {
	return (r.parentParser === "markdown" || r.parentParser === "mdx") && e.type === "ExpressionStatement" && X(e.expression) && t.type === "Program" && t.body.length === 1;
}
function Bs(e) {
	switch (e.type) {
		case "MemberExpression":
			switch (e.property.type) {
				case "Identifier":
				case "NumericLiteral":
				case "StringLiteral": return Bs(e.object);
			}
			return !1;
		case "Identifier": return !0;
		default: return !1;
	}
}
function bs({ node: e, parent: t }, r) {
	return (r.parser === "__vue_event_binding" || r.parser === "__vue_ts_event_binding") && e.type === "ExpressionStatement" && t.type === "Program" && t.body.length === 1;
}
function ua(e, t, r) {
	let n = [r("expression")];
	return bs(e, t) ? Bs(e.node.expression) && n.push(";") : Ss(e, t) || t.semi && n.push(";"), n;
}
function ia(e, t, r) {
	if (t.__isVueBindings || t.__isVueForBindingLeft) {
		let n = e.map(r, "program", "body", 0, "params");
		if (n.length === 1) return n[0];
		let s = P([",", x], n);
		return t.__isVueForBindingLeft ? [
			"(",
			f([E, l(s)]),
			E,
			")"
		] : s;
	}
	if (t.__isEmbeddedTypescriptGenericParameters) {
		let n = e.map(r, "program", "body", 0, "typeParameters", "params");
		return P([",", x], n);
	}
}
function pa(e, t) {
	let { node: r } = e;
	switch (r.type) {
		case "RegExpLiteral": return aa(r);
		case "BigIntLiteral": return hn(r.extra.raw);
		case "NumericLiteral": return Ze(r.extra.raw);
		case "StringLiteral": return Ie(tt(r.extra.raw, t));
		case "NullLiteral": return "null";
		case "BooleanLiteral": return String(r.value);
		case "DecimalLiteral": return Ze(r.value) + "m";
		case "DirectiveLiteral": return oa(r.extra.raw, t);
		case "Literal": {
			if (r.regex) return aa(r.regex);
			if (r.bigint) return hn(r.raw);
			if (r.decimal) return Ze(r.decimal) + "m";
			let { value: n } = r;
			return typeof n == "number" ? Ze(r.raw) : typeof n == "string" ? kl(e) ? oa(r.raw, t) : Ie(tt(r.raw, t)) : String(n);
		}
	}
}
function kl(e) {
	if (e.key !== "expression") return;
	let { parent: t } = e;
	return t.type === "ExpressionStatement" && t.directive;
}
function hn(e) {
	return e.toLowerCase();
}
function aa({ pattern: e, flags: t }) {
	return t = [...t].sort().join(""), `/${e}/${t}`;
}
function oa(e, t) {
	let r = e.slice(1, -1);
	if (r.includes("\"") || r.includes("'")) return e;
	let n = t.singleQuote ? "'" : "\"";
	return n + r + n;
}
function Il(e, t, r) {
	let n = e.originalText.slice(t, r);
	for (let s of e[Symbol.for("comments")]) {
		let u = R(s);
		if (u > r) break;
		let i = k(s);
		if (i < t) continue;
		let a = i - u;
		n = n.slice(0, u - t) + " ".repeat(a) + n.slice(i - t);
	}
	return n;
}
var fr = Il;
function ca(e, t, r) {
	let { node: n } = e;
	return [
		"import",
		n.module ? " module" : "",
		n.phase ? ` ${n.phase}` : "",
		ks(n),
		ya(e, t, r),
		ma(e, t, r),
		fa(e, t, r),
		t.semi ? ";" : ""
	];
}
var la = (e) => e.type === "ExportDefaultDeclaration" || e.type === "DeclareExportDeclaration" && e.default;
function gn(e, t, r) {
	let { node: n } = e, s = [
		di(e, t, r),
		$(e),
		"export",
		la(n) ? " default" : ""
	], { declaration: u, exported: i } = n;
	return d(n, g.Dangling) && (s.push(" ", M(e, t)), wr(n) && s.push(F)), u ? s.push(" ", r("declaration")) : (s.push(Ol(n)), n.type === "ExportAllDeclaration" || n.type === "DeclareExportAllDeclaration" ? (s.push(" *"), i && s.push(" as ", r("exported"))) : s.push(ya(e, t, r)), s.push(ma(e, t, r), fa(e, t, r))), s.push(wl(n, t)), s;
}
var Ll = v([
	"ClassDeclaration",
	"ComponentDeclaration",
	"FunctionDeclaration",
	"TSInterfaceDeclaration",
	"DeclareClass",
	"DeclareComponent",
	"DeclareFunction",
	"DeclareHook",
	"HookDeclaration",
	"TSDeclareFunction",
	"EnumDeclaration"
]);
function wl(e, t) {
	return t.semi && (!e.declaration || la(e) && !Ll(e.declaration)) ? ";" : "";
}
function Ps(e, t = !0) {
	return e && e !== "value" ? `${t ? " " : ""}${e}${t ? "" : " "}` : "";
}
function ks(e, t) {
	return Ps(e.importKind, t);
}
function Ol(e) {
	return Ps(e.exportKind);
}
function ma(e, t, r) {
	let { node: n } = e;
	if (!n.source) return "";
	let s = [];
	return Da(n, t) && s.push(" from"), s.push(" ", r("source")), s;
}
function ya(e, t, r) {
	let { node: n } = e;
	if (!Da(n, t)) return "";
	let s = [" "];
	if (w(n.specifiers)) {
		let u = [], i = [];
		e.each(() => {
			let a = e.node.type;
			if (a === "ExportNamespaceSpecifier" || a === "ExportDefaultSpecifier" || a === "ImportNamespaceSpecifier" || a === "ImportDefaultSpecifier") u.push(r());
			else if (a === "ExportSpecifier" || a === "ImportSpecifier") i.push(r());
			else throw new Me(n, "specifier");
		}, "specifiers"), s.push(P(", ", u)), i.length > 0 && (u.length > 0 && s.push(", "), i.length > 1 || u.length > 0 || n.specifiers.some((o) => d(o)) ? s.push(l([
			"{",
			f([t.bracketSpacing ? x : E, P([",", x], i)]),
			b(ae(t) ? "," : ""),
			t.bracketSpacing ? x : E,
			"}"
		])) : s.push([
			"{",
			t.bracketSpacing ? " " : "",
			...i,
			t.bracketSpacing ? " " : "",
			"}"
		]));
	} else s.push("{}");
	return s;
}
function Da(e, t) {
	return e.type !== "ImportDeclaration" || w(e.specifiers) || e.importKind === "type" ? !0 : fr(t, R(e), R(e.source)).trimEnd().endsWith("from");
}
function _l(e, t) {
	var n, s;
	if ((n = e.extra) != null && n.deprecatedAssertSyntax) return "assert";
	let r = fr(t, k(e.source), (s = e.attributes) != null && s[0] ? R(e.attributes[0]) : k(e)).trimStart();
	return r.startsWith("assert") ? "assert" : r.startsWith("with") || w(e.attributes) ? "with" : void 0;
}
function fa(e, t, r) {
	let { node: n } = e;
	if (!n.source) return "";
	let s = _l(n, t);
	if (!s) return "";
	let u = [` ${s} {`];
	return w(n.attributes) && (t.bracketSpacing && u.push(" "), u.push(P(", ", e.map(r, "attributes"))), t.bracketSpacing && u.push(" ")), u.push("}"), u;
}
function Ea(e, t, r) {
	let { node: n } = e, { type: s } = n, u = s.startsWith("Import"), i = u ? "imported" : "local", a = u ? "local" : "exported", o = n[i], c = n[a], m = "", D$1 = "";
	return s === "ExportNamespaceSpecifier" || s === "ImportNamespaceSpecifier" ? m = "*" : o && (m = r(i)), c && !jl(n) && (D$1 = r(a)), [
		Ps(s === "ImportSpecifier" ? n.importKind : n.exportKind, !1),
		m,
		m && D$1 ? " as " : "",
		D$1
	];
}
function jl(e) {
	if (e.type !== "ImportSpecifier" && e.type !== "ExportSpecifier") return !1;
	let { local: t, [e.type === "ImportSpecifier" ? "imported" : "exported"]: r } = e;
	if (t.type !== r.type || !eu(t, r)) return !1;
	if (Q(t)) return t.value === r.value && fe(t) === fe(r);
	switch (t.type) {
		case "Identifier": return t.name === r.name;
		default: return !1;
	}
}
function dt(e, t, r) {
	var j$1;
	let n = t.semi ? ";" : "", { node: s } = e, u = s.type === "ObjectTypeAnnotation", i = s.type === "TSEnumDeclaration" || s.type === "EnumBooleanBody" || s.type === "EnumNumberBody" || s.type === "EnumBigIntBody" || s.type === "EnumStringBody" || s.type === "EnumSymbolBody", a = [s.type === "TSTypeLiteral" || i ? "members" : s.type === "TSInterfaceBody" ? "body" : "properties"];
	u && a.push("indexers", "callProperties", "internalSlots");
	let o = a.flatMap((h) => e.map(({ node: W$1 }) => ({
		node: W$1,
		printed: r(),
		loc: R(W$1)
	}), h));
	a.length > 1 && o.sort((h, W$1) => h.loc - W$1.loc);
	let { parent: c, key: m } = e, D$1 = u && m === "body" && (c.type === "InterfaceDeclaration" || c.type === "DeclareInterface" || c.type === "DeclareClass"), y$1 = s.type === "TSInterfaceBody" || i || D$1 || s.type === "ObjectPattern" && c.type !== "FunctionDeclaration" && c.type !== "FunctionExpression" && c.type !== "ArrowFunctionExpression" && c.type !== "ObjectMethod" && c.type !== "ClassMethod" && c.type !== "ClassPrivateMethod" && c.type !== "AssignmentPattern" && c.type !== "CatchClause" && s.properties.some((h) => h.value && (h.value.type === "ObjectPattern" || h.value.type === "ArrayPattern")) || s.type !== "ObjectPattern" && o.length > 0 && de(t.originalText, R(s), o[0].loc), C = D$1 ? ";" : s.type === "TSInterfaceBody" || s.type === "TSTypeLiteral" ? b(n, ";") : ",", p = s.type === "RecordExpression" ? "#{" : s.exact ? "{|" : "{", A = s.exact ? "|}" : "}", T$1 = [], S$1 = o.map((h) => {
		let W$1 = [...T$1, l(h.printed)];
		return T$1 = [C, x], (h.node.type === "TSPropertySignature" || h.node.type === "TSMethodSignature" || h.node.type === "TSConstructSignatureDeclaration" || h.node.type === "TSCallSignatureDeclaration") && d(h.node, g.PrettierIgnore) && T$1.shift(), pe(h.node, t) && T$1.push(F), W$1;
	});
	if (s.inexact || s.hasUnknownMembers) {
		let h;
		if (d(s, g.Dangling)) {
			let W$1 = d(s, g.Line);
			h = [
				M(e, t),
				W$1 || te(t.originalText, k(O(!1, ct(s), -1))) ? F : x,
				"..."
			];
		} else h = ["..."];
		S$1.push([...T$1, ...h]);
	}
	let B$2 = (j$1 = O(!1, o, -1)) == null ? void 0 : j$1.node, _$1 = !(s.inexact || s.hasUnknownMembers || B$2 && (B$2.type === "RestElement" || (B$2.type === "TSPropertySignature" || B$2.type === "TSCallSignatureDeclaration" || B$2.type === "TSMethodSignature" || B$2.type === "TSConstructSignatureDeclaration") && d(B$2, g.PrettierIgnore))), J$1;
	if (S$1.length === 0) {
		if (!d(s, g.Dangling)) return [
			p,
			A,
			Y(e, r)
		];
		J$1 = l([
			p,
			M(e, t, { indent: !0 }),
			E,
			A,
			V(e),
			Y(e, r)
		]);
	} else J$1 = [
		D$1 && w(s.properties) ? gs(c) : "",
		p,
		f([t.bracketSpacing ? x : E, ...S$1]),
		b(_$1 && (C !== "," || ae(t)) ? C : ""),
		t.bracketSpacing ? x : E,
		A,
		V(e),
		Y(e, r)
	];
	return e.match((h) => h.type === "ObjectPattern" && !w(h.decorators), Is) || we(s) && (e.match(void 0, (h, W$1) => W$1 === "typeAnnotation", (h, W$1) => W$1 === "typeAnnotation", Is) || e.match(void 0, (h, W$1) => h.type === "FunctionTypeParam" && W$1 === "typeAnnotation", Is)) || !y$1 && e.match((h) => h.type === "ObjectPattern", (h) => h.type === "AssignmentExpression" || h.type === "VariableDeclarator") ? J$1 : l(J$1, { shouldBreak: y$1 });
}
function Is(e, t) {
	return (t === "params" || t === "parameters" || t === "this" || t === "rest") && Cs(e);
}
function vl(e) {
	let t = [e];
	for (let r = 0; r < t.length; r++) {
		let n = t[r];
		for (let s of [
			"test",
			"consequent",
			"alternate"
		]) {
			let u = n[s];
			if (X(u)) return !0;
			u.type === "ConditionalExpression" && t.push(u);
		}
	}
	return !1;
}
function Ml(e, t, r) {
	let { node: n } = e, s = n.type === "ConditionalExpression", u = s ? "alternate" : "falseType", { parent: i } = e, a = s ? r("test") : [
		r("checkType"),
		" ",
		"extends",
		" ",
		r("extendsType")
	];
	return i.type === n.type && i[u] === n ? he(2, a) : a;
}
var Rl = new Map([
	["AssignmentExpression", "right"],
	["VariableDeclarator", "init"],
	["ReturnStatement", "argument"],
	["ThrowStatement", "argument"],
	["UnaryExpression", "argument"],
	["YieldExpression", "argument"],
	["AwaitExpression", "argument"]
]);
function Jl(e) {
	let { node: t } = e;
	if (t.type !== "ConditionalExpression") return !1;
	let r, n = t;
	for (let s = 0; !r; s++) {
		let u = e.getParentNode(s);
		if (u.type === "ChainExpression" && u.expression === n || L(u) && u.callee === n || q(u) && u.object === n || u.type === "TSNonNullExpression" && u.expression === n) {
			n = u;
			continue;
		}
		u.type === "NewExpression" && u.callee === n || Te(u) && u.expression === n ? (r = e.getParentNode(s + 1), n = u) : r = u;
	}
	return n === t ? !1 : r[Rl.get(r.type)] === n;
}
function Fa(e, t, r) {
	let { node: n } = e, s = n.type === "ConditionalExpression", u = s ? "consequent" : "trueType", i = s ? "alternate" : "falseType", a = s ? ["test"] : ["checkType", "extendsType"], o = n[u], c = n[i], m = [], D$1 = !1, { parent: y$1 } = e, C = y$1.type === n.type && a.some((H$2) => y$1[H$2] === n), p = y$1.type === n.type && !C, A, T$1, S$1 = 0;
	do
		T$1 = A || n, A = e.getParentNode(S$1), S$1++;
	while (A && A.type === n.type && a.every((H$2) => A[H$2] !== T$1));
	let B$2 = A || y$1, _$1 = T$1;
	if (s && (X(n[a[0]]) || X(o) || X(c) || vl(_$1))) {
		D$1 = !0, p = !0;
		let H$2 = (Z$1) => [
			b("("),
			f([E, Z$1]),
			E,
			b(")")
		], ue$1 = (Z$1) => Z$1.type === "NullLiteral" || Z$1.type === "Literal" && Z$1.value === null || Z$1.type === "Identifier" && Z$1.name === "undefined";
		m.push(" ? ", ue$1(o) ? r(u) : H$2(r(u)), " : ", c.type === n.type || ue$1(c) ? r(i) : H$2(r(i)));
	} else {
		let H$2 = (Z$1) => t.useTabs ? f(r(Z$1)) : he(2, r(Z$1)), ue$1 = [
			x,
			"? ",
			o.type === n.type ? b("", "(") : "",
			H$2(u),
			o.type === n.type ? b("", ")") : "",
			x,
			": ",
			H$2(i)
		];
		m.push(y$1.type !== n.type || y$1[i] === n || C ? ue$1 : t.useTabs ? Mr(f(ue$1)) : he(Math.max(0, t.tabWidth - 2), ue$1));
	}
	let J$1 = [
		u,
		i,
		...a
	].some((H$2) => d(n[H$2], (ue$1) => re(ue$1) && de(t.originalText, R(ue$1), k(ue$1)))), j$1 = (H$2) => y$1 === B$2 ? l(H$2, { shouldBreak: J$1 }) : J$1 ? [H$2, Ee] : H$2, h = !D$1 && (q(y$1) || y$1.type === "NGPipeExpression" && y$1.left === n) && !y$1.computed, W$1 = Jl(e), Fe$2 = j$1([
		Ml(e, t, r),
		p ? m : f(m),
		s && h && !W$1 ? E : ""
	]);
	return C || W$1 ? l([f([E, Fe$2]), E]) : Fe$2;
}
function ql(e, t) {
	return (q(t) || t.type === "NGPipeExpression" && t.left === e) && !t.computed;
}
function Wl(e, t, r, n) {
	return [
		...e.map((u) => ct(u)),
		ct(t),
		ct(r)
	].flat().some((u) => re(u) && de(n.originalText, R(u), k(u)));
}
var Gl = new Map([
	["AssignmentExpression", "right"],
	["VariableDeclarator", "init"],
	["ReturnStatement", "argument"],
	["ThrowStatement", "argument"],
	["UnaryExpression", "argument"],
	["YieldExpression", "argument"],
	["AwaitExpression", "argument"]
]);
function Ul(e) {
	let { node: t } = e;
	if (t.type !== "ConditionalExpression") return !1;
	let r, n = t;
	for (let s = 0; !r; s++) {
		let u = e.getParentNode(s);
		if (u.type === "ChainExpression" && u.expression === n || L(u) && u.callee === n || q(u) && u.object === n || u.type === "TSNonNullExpression" && u.expression === n) {
			n = u;
			continue;
		}
		u.type === "NewExpression" && u.callee === n || Te(u) && u.expression === n ? (r = e.getParentNode(s + 1), n = u) : r = u;
	}
	return n === t ? !1 : r[Gl.get(r.type)] === n;
}
var Ls = (e) => [
	b("("),
	f([E, e]),
	E,
	b(")")
];
function Vt(e, t, r, n) {
	if (!t.experimentalTernaries) return Fa(e, t, r);
	let { node: s } = e, u = s.type === "ConditionalExpression", i = s.type === "TSConditionalType" || s.type === "ConditionalTypeAnnotation", a = u ? "consequent" : "trueType", o = u ? "alternate" : "falseType", c = u ? ["test"] : ["checkType", "extendsType"], m = s[a], D$1 = s[o], y$1 = c.map((We$1) => s[We$1]), { parent: C } = e, p = C.type === s.type, A = p && c.some((We$1) => C[We$1] === s), T$1 = p && C[o] === s, S$1 = m.type === s.type, B$2 = D$1.type === s.type, _$1 = B$2 || T$1, J$1 = t.tabWidth > 2 || t.useTabs, j$1, h, W$1 = 0;
	do
		h = j$1 || s, j$1 = e.getParentNode(W$1), W$1++;
	while (j$1 && j$1.type === s.type && c.every((We$1) => j$1[We$1] !== h));
	let Fe$2 = j$1 || C, H$2 = n && n.assignmentLayout && n.assignmentLayout !== "break-after-operator" && (C.type === "AssignmentExpression" || C.type === "VariableDeclarator" || C.type === "ClassProperty" || C.type === "PropertyDefinition" || C.type === "ClassPrivateProperty" || C.type === "ObjectProperty" || C.type === "Property"), ue$1 = (C.type === "ReturnStatement" || C.type === "ThrowStatement") && !(S$1 || B$2), Z$1 = u && Fe$2.type === "JSXExpressionContainer" && e.grandparent.type !== "JSXAttribute", It$2 = Ul(e), $t$1 = ql(s, C), I$1 = i && Be(e, t), G$2 = J$1 ? t.useTabs ? "	" : " ".repeat(t.tabWidth - 1) : "", ee$1 = Wl(y$1, m, D$1, t) || S$1 || B$2, qe$1 = !_$1 && !p && !i && (Z$1 ? m.type === "NullLiteral" || m.type === "Literal" && m.value === null : rr(m, t) && Mn(s.test, 3)), xt$1 = _$1 || T$1 || i && !p || p && u && Mn(s.test, 1) || qe$1, js$1 = [];
	!S$1 && d(m, g.Dangling) && e.call((We$1) => {
		js$1.push(M(We$1, t), F);
	}, "consequent");
	let Kt$1 = [];
	d(s.test, g.Dangling) && e.call((We$1) => {
		Kt$1.push(M(We$1, t));
	}, "test"), !B$2 && d(D$1, g.Dangling) && e.call((We$1) => {
		Kt$1.push(M(We$1, t));
	}, "alternate"), d(s, g.Dangling) && Kt$1.push(M(e, t));
	let vs$1 = Symbol("test"), Ma = Symbol("consequent"), Fr$2 = Symbol("test-and-consequent"), Ms$1 = l([u ? [Ls(r("test")), s.test.type === "ConditionalExpression" ? Ee : ""] : [
		r("checkType"),
		" ",
		"extends",
		" ",
		s.extendsType.type === "TSConditionalType" || s.extendsType.type === "ConditionalTypeAnnotation" || s.extendsType.type === "TSMappedType" ? r("extendsType") : l(Ls(r("extendsType")))
	], " ?"], { id: vs$1 }), Ja = r(a), Cr$2 = f([
		S$1 || Z$1 && (X(m) || p || _$1) ? F : x,
		js$1,
		Ja
	]), qa = xt$1 ? l([Ms$1, _$1 ? Cr$2 : b(Cr$2, l(Cr$2, { id: Ma }), { groupId: vs$1 })], { id: Fr$2 }) : [Ms$1, Cr$2], kn$1 = r(o), Rs$1 = qe$1 ? b(kn$1, Mr(Ls(kn$1)), { groupId: Fr$2 }) : kn$1, zt$1 = [
		qa,
		Kt$1.length > 0 ? [f([F, Kt$1]), F] : B$2 ? F : qe$1 ? b(x, " ", { groupId: Fr$2 }) : x,
		":",
		B$2 ? " " : J$1 ? xt$1 ? b(G$2, b(_$1 || qe$1 ? " " : G$2, " "), { groupId: Fr$2 }) : b(G$2, " ") : " ",
		B$2 ? Rs$1 : l([f(Rs$1), Z$1 && !qe$1 ? E : ""]),
		$t$1 && !It$2 ? E : "",
		ee$1 ? Ee : ""
	];
	return H$2 && !ee$1 ? l(f([E, l(zt$1)])) : H$2 || ue$1 ? l(f(zt$1)) : It$2 || i && A ? l([f([E, zt$1]), I$1 ? E : ""]) : C === Fe$2 ? l(zt$1) : zt$1;
}
function Ca(e, t, r, n) {
	let { node: s } = e;
	if (kr(s)) return pa(e, t);
	let u = t.semi ? ";" : "", i = [];
	switch (s.type) {
		case "JsExpressionRoot": return r("node");
		case "JsonRoot": return [r("node"), F];
		case "File": return ia(e, t, r) ?? r("program");
		case "EmptyStatement": return "";
		case "ExpressionStatement": return ua(e, t, r);
		case "ChainExpression": return r("expression");
		case "ParenthesizedExpression": return !d(s.expression) && (se(s.expression) || U(s.expression)) ? [
			"(",
			r("expression"),
			")"
		] : l([
			"(",
			f([E, r("expression")]),
			E,
			")"
		]);
		case "AssignmentExpression": return wi(e, t, r);
		case "VariableDeclarator": return Oi(e, t, r);
		case "BinaryExpression":
		case "LogicalExpression": return Yr(e, t, r);
		case "AssignmentPattern": return [
			r("left"),
			" = ",
			r("right")
		];
		case "OptionalMemberExpression":
		case "MemberExpression": return bi(e, t, r);
		case "MetaProperty": return [
			r("meta"),
			".",
			r("property")
		];
		case "BindExpression": return s.object && i.push(r("object")), i.push(l(f([E, Hr(e, t, r)]))), i;
		case "Identifier": return [
			s.name,
			V(e),
			pn(e),
			Y(e, r)
		];
		case "V8IntrinsicIdentifier": return ["%", s.name];
		case "SpreadElement":
		case "SpreadElementPattern":
		case "SpreadPropertyPattern":
		case "RestElement": return cn(e, r);
		case "FunctionDeclaration":
		case "FunctionExpression": return Dn(e, r, t, n);
		case "ArrowFunctionExpression": return $i(e, t, r, n);
		case "YieldExpression": return i.push("yield"), s.delegate && i.push("*"), s.argument && i.push(" ", r("argument")), i;
		case "AwaitExpression":
			if (i.push("await"), s.argument) {
				i.push(" ", r("argument"));
				let { parent: a } = e;
				if (L(a) && a.callee === s || q(a) && a.object === s) {
					i = [f([E, ...i]), E];
					let o = e.findAncestor((c) => c.type === "AwaitExpression" || c.type === "BlockStatement");
					if ((o == null ? void 0 : o.type) !== "AwaitExpression" || !ie(o.argument, (c) => c === s)) return l(i);
				}
			}
			return i;
		case "ExportDefaultDeclaration":
		case "ExportNamedDeclaration":
		case "ExportAllDeclaration": return gn(e, t, r);
		case "ImportDeclaration": return ca(e, t, r);
		case "ImportSpecifier":
		case "ExportSpecifier":
		case "ImportNamespaceSpecifier":
		case "ExportNamespaceSpecifier":
		case "ImportDefaultSpecifier":
		case "ExportDefaultSpecifier": return Ea(e, t, r);
		case "ImportAttribute": return yn(e, t, r);
		case "Import": return "import";
		case "Program":
		case "BlockStatement":
		case "StaticBlock": return Fn(e, t, r);
		case "ClassBody": return ra(e, t, r);
		case "ThrowStatement": return Yi(e, t, r);
		case "ReturnStatement": return Xi(e, t, r);
		case "NewExpression":
		case "ImportExpression":
		case "OptionalCallExpression":
		case "CallExpression": return Vr(e, t, r);
		case "ObjectExpression":
		case "ObjectPattern":
		case "RecordExpression": return dt(e, t, r);
		case "Property": return gt(s) ? mr(e, t, r) : yn(e, t, r);
		case "ObjectProperty": return yn(e, t, r);
		case "ObjectMethod": return mr(e, t, r);
		case "Decorator": return ["@", r("expression")];
		case "ArrayExpression":
		case "ArrayPattern":
		case "TupleExpression": return Yt(e, t, r);
		case "SequenceExpression": {
			let { parent: a } = e;
			if (a.type === "ExpressionStatement" || a.type === "ForStatement") {
				let o = [];
				return e.each(({ isFirst: c }) => {
					c ? o.push(r()) : o.push(",", f([x, r()]));
				}, "expressions"), l(o);
			}
			return l(P([",", x], e.map(r, "expressions")));
		}
		case "ThisExpression": return "this";
		case "Super": return "super";
		case "Directive": return [r("value"), u];
		case "UnaryExpression": return i.push(s.operator), /[a-z]$/u.test(s.operator) && i.push(" "), d(s.argument) ? i.push(l([
			"(",
			f([E, r("argument")]),
			E,
			")"
		])) : i.push(r("argument")), i;
		case "UpdateExpression": return [
			s.prefix ? s.operator : "",
			r("argument"),
			s.prefix ? "" : s.operator
		];
		case "ConditionalExpression": return Vt(e, t, r, n);
		case "VariableDeclaration": {
			let a = e.map(r, "declarations"), o = e.parent, c = o.type === "ForStatement" || o.type === "ForInStatement" || o.type === "ForOfStatement", m = s.declarations.some((y$1) => y$1.init), D$1;
			return a.length === 1 && !d(s.declarations[0]) ? D$1 = a[0] : a.length > 0 && (D$1 = f(a[0])), i = [
				$(e),
				s.kind,
				D$1 ? [" ", D$1] : "",
				f(a.slice(1).map((y$1) => [
					",",
					m && !c ? F : x,
					y$1
				]))
			], c && o.body !== s || i.push(u), l(i);
		}
		case "WithStatement": return l([
			"with (",
			r("object"),
			")",
			ft(s.body, r("body"))
		]);
		case "IfStatement": {
			let a = ft(s.consequent, r("consequent")), o = l([
				"if (",
				l([f([E, r("test")]), E]),
				")",
				a
			]);
			if (i.push(o), s.alternate) {
				let c = d(s.consequent, g.Trailing | g.Line) || wr(s), m = s.consequent.type === "BlockStatement" && !c;
				i.push(m ? " " : F), d(s, g.Dangling) && i.push(M(e, t), c ? F : " "), i.push("else", l(ft(s.alternate, r("alternate"), s.alternate.type === "IfStatement")));
			}
			return i;
		}
		case "ForStatement": {
			let a = ft(s.body, r("body")), o = M(e, t), c = o ? [o, E] : "";
			return !s.init && !s.test && !s.update ? [c, l(["for (;;)", a])] : [c, l([
				"for (",
				l([f([
					E,
					r("init"),
					";",
					x,
					r("test"),
					";",
					x,
					r("update")
				]), E]),
				")",
				a
			])];
		}
		case "WhileStatement": return l([
			"while (",
			l([f([E, r("test")]), E]),
			")",
			ft(s.body, r("body"))
		]);
		case "ForInStatement": return l([
			"for (",
			r("left"),
			" in ",
			r("right"),
			")",
			ft(s.body, r("body"))
		]);
		case "ForOfStatement": return l([
			"for",
			s.await ? " await" : "",
			" (",
			r("left"),
			" of ",
			r("right"),
			")",
			ft(s.body, r("body"))
		]);
		case "DoWhileStatement": return i = [l(["do", ft(s.body, r("body"))])], s.body.type === "BlockStatement" ? i.push(" ") : i.push(F), i.push("while (", l([f([E, r("test")]), E]), ")", u), i;
		case "DoExpression": return [
			s.async ? "async " : "",
			"do ",
			r("body")
		];
		case "BreakStatement":
		case "ContinueStatement": return i.push(s.type === "BreakStatement" ? "break" : "continue"), s.label && i.push(" ", r("label")), i.push(u), i;
		case "LabeledStatement": return s.body.type === "EmptyStatement" ? [r("label"), ":;"] : [
			r("label"),
			": ",
			r("body")
		];
		case "TryStatement": return [
			"try ",
			r("block"),
			s.handler ? [" ", r("handler")] : "",
			s.finalizer ? [" finally ", r("finalizer")] : ""
		];
		case "CatchClause":
			if (s.param) {
				let a = d(s.param, (c) => !re(c) || c.leading && te(t.originalText, k(c)) || c.trailing && te(t.originalText, R(c), { backwards: !0 })), o = r("param");
				return [
					"catch ",
					a ? [
						"(",
						f([E, o]),
						E,
						") "
					] : [
						"(",
						o,
						") "
					],
					r("body")
				];
			}
			return ["catch ", r("body")];
		case "SwitchStatement": return [
			l([
				"switch (",
				f([E, r("discriminant")]),
				E,
				")"
			]),
			" {",
			s.cases.length > 0 ? f([F, P(F, e.map(({ node: a, isLast: o }) => [r(), !o && pe(a, t) ? F : ""], "cases"))]) : "",
			F,
			"}"
		];
		case "SwitchCase": {
			s.test ? i.push("case ", r("test"), ":") : i.push("default:"), d(s, g.Dangling) && i.push(" ", M(e, t));
			let a = s.consequent.filter((o) => o.type !== "EmptyStatement");
			if (a.length > 0) {
				let o = yr(e, t, r, "consequent");
				i.push(a.length === 1 && a[0].type === "BlockStatement" ? [" ", o] : f([F, o]));
			}
			return i;
		}
		case "DebuggerStatement": return ["debugger", u];
		case "ClassDeclaration":
		case "ClassExpression": return Tn(e, t, r);
		case "ClassMethod":
		case "ClassPrivateMethod":
		case "MethodDefinition": return dn(e, t, r);
		case "ClassProperty":
		case "PropertyDefinition":
		case "ClassPrivateProperty":
		case "ClassAccessorProperty":
		case "AccessorProperty": return xn(e, t, r);
		case "TemplateElement": return Ie(s.value.raw);
		case "TemplateLiteral": return qr(e, r, t);
		case "TaggedTemplateExpression": return Uu(e, r);
		case "PrivateIdentifier": return ["#", s.name];
		case "PrivateName": return ["#", r("id")];
		case "TopicReference": return "%";
		case "ArgumentPlaceholder": return "?";
		case "ModuleExpression": return ["module ", r("body")];
		case "InterpreterDirective":
		default: throw new Me(s, "ESTree");
	}
}
function Sn(e, t, r) {
	let { parent: n, node: s, key: u } = e, i = [r("expression")];
	switch (s.type) {
		case "AsConstExpression":
			i.push(" as const");
			break;
		case "AsExpression":
		case "TSAsExpression":
			i.push(" as ", r("typeAnnotation"));
			break;
		case "SatisfiesExpression":
		case "TSSatisfiesExpression":
			i.push(" satisfies ", r("typeAnnotation"));
			break;
	}
	return u === "callee" && L(n) || u === "object" && q(n) ? l([f([E, ...i]), E]) : i;
}
function Aa(e, t, r) {
	let { node: n } = e, s = [$(e), "component"];
	n.id && s.push(" ", r("id")), s.push(r("typeParameters"));
	let u = Nl(e, r, t);
	return n.rendersType ? s.push(l([
		u,
		" ",
		r("rendersType")
	])) : s.push(l([u])), n.body && s.push(" ", r("body")), t.semi && n.type === "DeclareComponent" && s.push(";"), s;
}
function Nl(e, t, r) {
	let { node: n } = e, s = n.params;
	if (n.rest && (s = [...s, n.rest]), s.length === 0) return [
		"(",
		M(e, r, { filter: (i) => ge(r.originalText, k(i)) === ")" }),
		")"
	];
	let u = [];
	return Yl(e, (i, a) => {
		let o = a === s.length - 1;
		o && n.rest && u.push("..."), u.push(t()), !o && (u.push(","), pe(s[a], r) ? u.push(F, F) : u.push(x));
	}), [
		"(",
		f([E, ...u]),
		b(ae(r, "all") && !Xl(n, s) ? "," : ""),
		E,
		")"
	];
}
function Xl(e, t) {
	var r;
	return e.rest || ((r = O(!1, t, -1)) == null ? void 0 : r.type) === "RestElement";
}
function Yl(e, t) {
	let { node: r } = e, n = 0, s = (u) => t(u, n++);
	e.each(s, "params"), r.rest && e.call(s, "rest");
}
function Ta(e, t, r) {
	let { node: n } = e;
	return n.shorthand ? r("local") : [
		r("name"),
		" as ",
		r("local")
	];
}
function da(e, t, r) {
	let { node: n } = e, s = [];
	return n.name && s.push(r("name"), n.optional ? "?: " : ": "), s.push(r("typeAnnotation")), s;
}
function xa(e, t, r) {
	return dt(e, r, t);
}
function Bn(e, t) {
	let { node: r } = e, n = t("id");
	r.computed && (n = [
		"[",
		n,
		"]"
	]);
	let s = "";
	return r.initializer && (s = t("initializer")), r.init && (s = t("init")), s ? [
		n,
		" = ",
		s
	] : n;
}
function ha(e, t, r) {
	let { node: n } = e, s;
	if (n.type === "EnumSymbolBody" || n.explicitType) switch (n.type) {
		case "EnumBooleanBody":
			s = "boolean";
			break;
		case "EnumNumberBody":
			s = "number";
			break;
		case "EnumBigIntBody":
			s = "bigint";
			break;
		case "EnumStringBody":
			s = "string";
			break;
		case "EnumSymbolBody":
			s = "symbol";
			break;
	}
	return [s ? `of ${s} ` : "", xa(e, t, r)];
}
function bn(e, t, r) {
	let { node: n } = e;
	return [
		$(e),
		n.const ? "const " : "",
		"enum ",
		t("id"),
		" ",
		n.type === "TSEnumDeclaration" ? xa(e, t, r) : t("body")
	];
}
function Sa(e, t, r) {
	let { node: n } = e, s = ["hook"];
	n.id && s.push(" ", r("id"));
	let u = Je(e, r, t, !1, !0), i = Ht(e, r), a = ot(n, i);
	return s.push(l([a ? l(u) : u, i]), n.body ? " " : "", r("body")), s;
}
function Ba(e, t, r) {
	let { node: n } = e, s = [$(e), "hook"];
	return n.id && s.push(" ", r("id")), t.semi && s.push(";"), s;
}
function ga(e) {
	var r;
	let { node: t } = e;
	return t.type === "HookTypeAnnotation" && ((r = e.getParentNode(2)) == null ? void 0 : r.type) === "DeclareHook";
}
function ba(e, t, r) {
	let { node: n } = e, s = [];
	s.push(ga(e) ? "" : "hook ");
	let u = Je(e, r, t, !1, !0), i = [];
	return i.push(ga(e) ? ": " : " => ", r("returnType")), ot(n, i) && (u = l(u)), s.push(u, i), l(s);
}
function Pn(e, t, r) {
	let { node: n } = e, s = [$(e), "interface"], u = [], i = [];
	n.type !== "InterfaceTypeAnnotation" && u.push(" ", r("id"), r("typeParameters"));
	let a = n.typeParameters && !d(n.typeParameters, g.Trailing | g.Line);
	return w(n.extends) && i.push(a ? b(" ", x, { groupId: Dr(n.typeParameters) }) : x, "extends ", (n.extends.length === 1 ? mu : f)(P([",", x], e.map(r, "extends")))), d(n.id, g.Trailing) || w(n.extends) ? a ? s.push(l([...u, f(i)])) : s.push(l(f([...u, ...i]))) : s.push(...u, ...i), s.push(" ", r("body")), l(s);
}
function Pa(e, t, r) {
	let { node: n } = e;
	if (Sr(n)) return n.type.slice(0, -14).toLowerCase();
	let s = t.semi ? ";" : "";
	switch (n.type) {
		case "ComponentDeclaration":
		case "DeclareComponent":
		case "ComponentTypeAnnotation": return Aa(e, t, r);
		case "ComponentParameter": return Ta(e, t, r);
		case "ComponentTypeParameter": return da(e, t, r);
		case "HookDeclaration": return Sa(e, t, r);
		case "DeclareHook": return Ba(e, t, r);
		case "HookTypeAnnotation": return ba(e, t, r);
		case "DeclareClass": return Tn(e, t, r);
		case "DeclareFunction": return [
			$(e),
			"function ",
			r("id"),
			r("predicate"),
			s
		];
		case "DeclareModule": return [
			"declare module ",
			r("id"),
			" ",
			r("body")
		];
		case "DeclareModuleExports": return [
			"declare module.exports",
			Y(e, r),
			s
		];
		case "DeclareNamespace": return [
			"declare namespace ",
			r("id"),
			" ",
			r("body")
		];
		case "DeclareVariable": return [
			$(e),
			n.kind ?? "var",
			" ",
			r("id"),
			s
		];
		case "DeclareExportDeclaration":
		case "DeclareExportAllDeclaration": return gn(e, t, r);
		case "DeclareOpaqueType":
		case "OpaqueType": return Mi(e, t, r);
		case "DeclareTypeAlias":
		case "TypeAlias": return Kr(e, t, r);
		case "IntersectionTypeAnnotation": return zr(e, t, r);
		case "UnionTypeAnnotation": return Qr(e, t, r);
		case "ConditionalTypeAnnotation": return Vt(e, t, r);
		case "InferTypeAnnotation": return tn(e, t, r);
		case "FunctionTypeAnnotation": return Zr(e, t, r);
		case "TupleTypeAnnotation": return Yt(e, t, r);
		case "TupleTypeLabeledElement": return nn(e, t, r);
		case "TupleTypeSpreadElement": return rn(e, t, r);
		case "GenericTypeAnnotation": return [r("id"), Pt(e, t, r, "typeParameters")];
		case "IndexedAccessType":
		case "OptionalIndexedAccessType": return en(e, t, r);
		case "TypeAnnotation": return sn(e, t, r);
		case "TypeParameter": return An(e, t, r);
		case "TypeofTypeAnnotation": return an(e, r);
		case "ExistsTypeAnnotation": return "*";
		case "ArrayTypeAnnotation": return un(r);
		case "DeclareEnum":
		case "EnumDeclaration": return bn(e, r, t);
		case "EnumBooleanBody":
		case "EnumNumberBody":
		case "EnumBigIntBody":
		case "EnumStringBody":
		case "EnumSymbolBody": return ha(e, r, t);
		case "EnumBooleanMember":
		case "EnumNumberMember":
		case "EnumBigIntMember":
		case "EnumStringMember":
		case "EnumDefaultedMember": return Bn(e, r);
		case "FunctionTypeParam": {
			let u = n.name ? r("name") : e.parent.this === n ? "this" : "";
			return [
				u,
				V(e),
				u ? ": " : "",
				r("typeAnnotation")
			];
		}
		case "DeclareInterface":
		case "InterfaceDeclaration":
		case "InterfaceTypeAnnotation": return Pn(e, t, r);
		case "ClassImplements":
		case "InterfaceExtends": return [r("id"), r("typeParameters")];
		case "NullableTypeAnnotation": return ["?", r("typeAnnotation")];
		case "Variance": {
			let { kind: u } = n;
			return ln.ok(u === "plus" || u === "minus"), u === "plus" ? "+" : "-";
		}
		case "KeyofTypeAnnotation": return ["keyof ", r("argument")];
		case "ObjectTypeCallProperty": return [n.static ? "static " : "", r("value")];
		case "ObjectTypeMappedTypeProperty": return zi(e, t, r);
		case "ObjectTypeIndexer": return [
			n.static ? "static " : "",
			n.variance ? r("variance") : "",
			"[",
			r("id"),
			n.id ? ": " : "",
			r("key"),
			"]: ",
			r("value")
		];
		case "ObjectTypeProperty": {
			let u = "";
			return n.proto ? u = "proto " : n.static && (u = "static "), [
				u,
				n.kind !== "init" ? n.kind + " " : "",
				n.variance ? r("variance") : "",
				Et(e, t, r),
				V(e),
				gt(n) ? "" : ": ",
				r("value")
			];
		}
		case "ObjectTypeAnnotation": return dt(e, t, r);
		case "ObjectTypeInternalSlot": return [
			n.static ? "static " : "",
			"[[",
			r("id"),
			"]]",
			V(e),
			n.method ? "" : ": ",
			r("value")
		];
		case "ObjectTypeSpreadProperty": return cn(e, r);
		case "QualifiedTypeofIdentifier":
		case "QualifiedTypeIdentifier": return [
			r("qualification"),
			".",
			r("id")
		];
		case "NullLiteralTypeAnnotation": return "null";
		case "BooleanLiteralTypeAnnotation": return String(n.value);
		case "StringLiteralTypeAnnotation": return Ie(tt(fe(n), t));
		case "NumberLiteralTypeAnnotation": return Ze(n.raw ?? n.extra.raw);
		case "BigIntLiteralTypeAnnotation": return hn(n.raw ?? n.extra.raw);
		case "TypeCastExpression": return [
			"(",
			r("expression"),
			Y(e, r),
			")"
		];
		case "TypePredicate": return on(e, r);
		case "TypeOperator": return [
			n.operator,
			" ",
			r("typeAnnotation")
		];
		case "TypeParameterDeclaration":
		case "TypeParameterInstantiation": return Pt(e, t, r, "params");
		case "InferredPredicate":
		case "DeclaredPredicate": return [
			e.key === "predicate" && e.parent.type !== "DeclareFunction" && !e.parent.returnType ? ": " : " ",
			"%checks",
			...n.type === "DeclaredPredicate" ? [
				"(",
				r("value"),
				")"
			] : []
		];
		case "AsExpression":
		case "AsConstExpression":
		case "SatisfiesExpression": return Sn(e, t, r);
	}
}
function ka(e, t, r) {
	var i;
	let { node: n } = e;
	if (!n.type.startsWith("TS")) return;
	if (Br(n)) return n.type.slice(2, -7).toLowerCase();
	let s = t.semi ? ";" : "", u = [];
	switch (n.type) {
		case "TSThisType": return "this";
		case "TSTypeAssertion": {
			let a = !(U(n.expression) || se(n.expression)), o = l([
				"<",
				f([E, r("typeAnnotation")]),
				E,
				">"
			]), c = [
				b("("),
				f([E, r("expression")]),
				E,
				b(")")
			];
			return a ? ze([
				[o, r("expression")],
				[o, l(c, { shouldBreak: !0 })],
				[o, r("expression")]
			]) : l([o, r("expression")]);
		}
		case "TSDeclareFunction": return Dn(e, r, t);
		case "TSExportAssignment": return [
			"export = ",
			r("expression"),
			s
		];
		case "TSModuleBlock": return Fn(e, t, r);
		case "TSInterfaceBody":
		case "TSTypeLiteral": return dt(e, t, r);
		case "TSTypeAliasDeclaration": return Kr(e, t, r);
		case "TSQualifiedName": return [
			r("left"),
			".",
			r("right")
		];
		case "TSAbstractMethodDefinition":
		case "TSDeclareMethod": return dn(e, t, r);
		case "TSAbstractAccessorProperty":
		case "TSAbstractPropertyDefinition": return xn(e, t, r);
		case "TSInterfaceHeritage":
		case "TSClassImplements":
		case "TSExpressionWithTypeArguments":
		case "TSInstantiationExpression": return [r("expression"), r(n.typeArguments ? "typeArguments" : "typeParameters")];
		case "TSTemplateLiteralType": return qr(e, r, t);
		case "TSNamedTupleMember": return nn(e, t, r);
		case "TSRestType": return rn(e, t, r);
		case "TSOptionalType": return [r("typeAnnotation"), "?"];
		case "TSInterfaceDeclaration": return Pn(e, t, r);
		case "TSTypeParameterDeclaration":
		case "TSTypeParameterInstantiation": return Pt(e, t, r, "params");
		case "TSTypeParameter": return An(e, t, r);
		case "TSAsExpression":
		case "TSSatisfiesExpression": return Sn(e, t, r);
		case "TSArrayType": return un(r);
		case "TSPropertySignature": return [
			n.readonly ? "readonly " : "",
			Et(e, t, r),
			V(e),
			Y(e, r)
		];
		case "TSParameterProperty": return [
			Xt(n),
			n.static ? "static " : "",
			n.override ? "override " : "",
			n.readonly ? "readonly " : "",
			r("parameter")
		];
		case "TSTypeQuery": return an(e, r);
		case "TSIndexSignature": {
			let a = n.parameters.length > 1 ? b(ae(t) ? "," : "") : "", o = l([
				f([E, P([", ", E], e.map(r, "parameters"))]),
				a,
				E
			]), c = e.parent.type === "ClassBody" && e.key === "body";
			return [
				c && n.static ? "static " : "",
				n.readonly ? "readonly " : "",
				"[",
				n.parameters ? o : "",
				"]",
				Y(e, r),
				c ? s : ""
			];
		}
		case "TSTypePredicate": return on(e, r);
		case "TSNonNullExpression": return [r("expression"), "!"];
		case "TSImportType": return [
			n.isTypeOf ? "typeof " : "",
			"import(",
			r("argument"),
			")",
			n.qualifier ? [".", r("qualifier")] : "",
			Pt(e, t, r, n.typeArguments ? "typeArguments" : "typeParameters")
		];
		case "TSLiteralType": return r("literal");
		case "TSIndexedAccessType": return en(e, t, r);
		case "TSTypeOperator": return [
			n.operator,
			" ",
			r("typeAnnotation")
		];
		case "TSMappedType": return Qi(e, t, r);
		case "TSMethodSignature": {
			let a = n.kind && n.kind !== "method" ? `${n.kind} ` : "";
			u.push(Xt(n), a, n.computed ? "[" : "", r("key"), n.computed ? "]" : "", V(e));
			let o = Je(e, r, t, !1, !0), c = n.returnType ? "returnType" : "typeAnnotation", m = n[c], D$1 = m ? Y(e, r, c) : "", y$1 = ot(n, D$1);
			return u.push(y$1 ? l(o) : o), m && u.push(l(D$1)), l(u);
		}
		case "TSNamespaceExportDeclaration": return [
			"export as namespace ",
			r("id"),
			t.semi ? ";" : ""
		];
		case "TSEnumDeclaration": return bn(e, r, t);
		case "TSEnumMember": return Bn(e, r);
		case "TSImportEqualsDeclaration": return [
			n.isExport ? "export " : "",
			"import ",
			ks(n, !1),
			r("id"),
			" = ",
			r("moduleReference"),
			t.semi ? ";" : ""
		];
		case "TSExternalModuleReference": return [
			"require(",
			r("expression"),
			")"
		];
		case "TSModuleDeclaration": {
			let { parent: a } = e, o = a.type === "TSModuleDeclaration", c = ((i = n.body) == null ? void 0 : i.type) === "TSModuleDeclaration";
			if (o) u.push(".");
			else if (u.push($(e)), !(n.kind === "global" || n.global)) {
				let D$1 = n.kind ?? (Q(n.id) || fr(t, R(n), R(n.id)).trim().endsWith("module") ? "module" : "namespace");
				u.push(D$1, " ");
			}
			return u.push(r("id")), c ? u.push(r("body")) : n.body ? u.push(" ", l(r("body"))) : u.push(s), u;
		}
		case "TSConditionalType": return Vt(e, t, r);
		case "TSInferType": return tn(e, t, r);
		case "TSIntersectionType": return zr(e, t, r);
		case "TSUnionType": return Qr(e, t, r);
		case "TSFunctionType":
		case "TSCallSignatureDeclaration":
		case "TSConstructorType":
		case "TSConstructSignatureDeclaration": return Zr(e, t, r);
		case "TSTupleType": return Yt(e, t, r);
		case "TSTypeReference": return [r("typeName"), Pt(e, t, r, n.typeArguments ? "typeArguments" : "typeParameters")];
		case "TSTypeAnnotation": return sn(e, t, r);
		case "TSEmptyBodyFunctionExpression": return fn(e, t, r);
		case "TSJSDocAllType": return "*";
		case "TSJSDocUnknownType": return "?";
		case "TSJSDocNullableType": return Ts(e, r, "?");
		case "TSJSDocNonNullableType": return Ts(e, r, "!");
		case "TSParenthesizedType":
		default: throw new Me(n, "TypeScript");
	}
}
function Hl(e, t, r, n) {
	if (Xr(e)) return ci(e, t);
	for (let s of [
		Ti,
		Ei,
		Pa,
		ka,
		Ca
	]) {
		let u = s(e, t, r, n);
		if (u !== void 0) return u;
	}
}
var Vl = v([
	"ClassMethod",
	"ClassPrivateMethod",
	"ClassProperty",
	"ClassAccessorProperty",
	"AccessorProperty",
	"TSAbstractAccessorProperty",
	"PropertyDefinition",
	"TSAbstractPropertyDefinition",
	"ClassPrivateProperty",
	"MethodDefinition",
	"TSAbstractMethodDefinition",
	"TSDeclareMethod"
]);
function $l(e, t, r, n) {
	var D$1;
	e.isRoot && ((D$1 = t.__onHtmlBindingRoot) == null || D$1.call(t, e.node, t));
	let s = Hl(e, t, r, n);
	if (!s) return "";
	let { node: u } = e;
	if (Vl(u)) return s;
	let i = w(u.decorators), a = xi(e, t, r), o = u.type === "ClassExpression";
	if (i && !o) return ir(s, (y$1) => l([a, y$1]));
	let c = Be(e, t), m = na(e, t);
	return !a && !c && !m ? s : ir(s, (y$1) => [
		m ? ";" : "",
		c ? "(" : "",
		c && o && i ? [f([
			x,
			a,
			y$1
		]), x] : [a, y$1],
		c ? ")" : ""
	]);
}
var Ia = $l;
var Kl = { avoidAstMutation: !0 };
var La = [
	{
		linguistLanguageId: 174,
		name: "JSON.stringify",
		type: "data",
		color: "#292929",
		tmScope: "source.json",
		aceMode: "json",
		codemirrorMode: "javascript",
		codemirrorMimeType: "application/json",
		aliases: [
			"geojson",
			"jsonl",
			"topojson"
		],
		extensions: [".importmap"],
		filenames: [
			"package.json",
			"package-lock.json",
			"composer.json"
		],
		parsers: ["json-stringify"],
		vscodeLanguageIds: ["json"]
	},
	{
		linguistLanguageId: 174,
		name: "JSON",
		type: "data",
		color: "#292929",
		tmScope: "source.json",
		aceMode: "json",
		codemirrorMode: "javascript",
		codemirrorMimeType: "application/json",
		aliases: [
			"geojson",
			"jsonl",
			"topojson"
		],
		extensions: [
			".json",
			".4DForm",
			".4DProject",
			".avsc",
			".geojson",
			".gltf",
			".har",
			".ice",
			".JSON-tmLanguage",
			".mcmeta",
			".tfstate",
			".tfstate.backup",
			".topojson",
			".webapp",
			".webmanifest",
			".yy",
			".yyp"
		],
		filenames: [
			".all-contributorsrc",
			".arcconfig",
			".auto-changelog",
			".c8rc",
			".htmlhintrc",
			".imgbotconfig",
			".nycrc",
			".tern-config",
			".tern-project",
			".watchmanconfig",
			"Pipfile.lock",
			"composer.lock",
			"flake.lock",
			"mcmod.info",
			".babelrc",
			".jscsrc",
			".jshintrc",
			".jslintrc",
			".swcrc"
		],
		parsers: ["json"],
		vscodeLanguageIds: ["json"]
	},
	{
		linguistLanguageId: 423,
		name: "JSON with Comments",
		type: "data",
		color: "#292929",
		group: "JSON",
		tmScope: "source.js",
		aceMode: "javascript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "text/javascript",
		aliases: ["jsonc"],
		extensions: [
			".jsonc",
			".code-snippets",
			".code-workspace",
			".sublime-build",
			".sublime-commands",
			".sublime-completions",
			".sublime-keymap",
			".sublime-macro",
			".sublime-menu",
			".sublime-mousemap",
			".sublime-project",
			".sublime-settings",
			".sublime-theme",
			".sublime-workspace",
			".sublime_metrics",
			".sublime_session"
		],
		filenames: [],
		parsers: ["jsonc"],
		vscodeLanguageIds: ["jsonc"]
	},
	{
		linguistLanguageId: 175,
		name: "JSON5",
		type: "data",
		color: "#267CB9",
		extensions: [".json5"],
		tmScope: "source.js",
		aceMode: "javascript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "application/json",
		parsers: ["json5"],
		vscodeLanguageIds: ["json5"]
	}
];
var Os = {};
Ar(Os, {
	getVisitorKeys: () => Oa,
	massageAstNode: () => ja,
	print: () => Zl
});
var Oa = hr({
	JsonRoot: ["node"],
	ArrayExpression: ["elements"],
	ObjectExpression: ["properties"],
	ObjectProperty: ["key", "value"],
	UnaryExpression: ["argument"],
	NullLiteral: [],
	BooleanLiteral: [],
	StringLiteral: [],
	NumericLiteral: [],
	Identifier: [],
	TemplateLiteral: ["quasis"],
	TemplateElement: []
});
function Zl(e, t, r) {
	let { node: n } = e;
	switch (n.type) {
		case "JsonRoot": return [r("node"), F];
		case "ArrayExpression": {
			if (n.elements.length === 0) return "[]";
			let s = e.map(() => e.node === null ? "null" : r(), "elements");
			return [
				"[",
				f([F, P([",", F], s)]),
				F,
				"]"
			];
		}
		case "ObjectExpression": return n.properties.length === 0 ? "{}" : [
			"{",
			f([F, P([",", F], e.map(r, "properties"))]),
			F,
			"}"
		];
		case "ObjectProperty": return [
			r("key"),
			": ",
			r("value")
		];
		case "UnaryExpression": return [n.operator === "+" ? "" : n.operator, r("argument")];
		case "NullLiteral": return "null";
		case "BooleanLiteral": return n.value ? "true" : "false";
		case "StringLiteral": return JSON.stringify(n.value);
		case "NumericLiteral": return _a(e) ? JSON.stringify(String(n.value)) : JSON.stringify(n.value);
		case "Identifier": return _a(e) ? JSON.stringify(n.name) : n.name;
		case "TemplateLiteral": return r(["quasis", 0]);
		case "TemplateElement": return JSON.stringify(n.value.cooked);
		default: throw new Me(n, "JSON");
	}
}
function _a(e) {
	return e.key === "key" && e.parent.type === "ObjectProperty";
}
var em = new Set([
	"start",
	"end",
	"extra",
	"loc",
	"comments",
	"leadingComments",
	"trailingComments",
	"innerComments",
	"errors",
	"range",
	"tokens"
]);
function ja(e, t) {
	let { type: r } = e;
	if (r === "ObjectProperty") {
		let { key: n } = e;
		n.type === "Identifier" ? t.key = {
			type: "StringLiteral",
			value: n.name
		} : n.type === "NumericLiteral" && (t.key = {
			type: "StringLiteral",
			value: String(n.value)
		});
		return;
	}
	if (r === "UnaryExpression" && e.operator === "+") return t.argument;
	if (r === "ArrayExpression") {
		for (let [n, s] of e.elements.entries()) s === null && t.elements.splice(n, 0, { type: "NullLiteral" });
		return;
	}
	if (r === "TemplateLiteral") return {
		type: "StringLiteral",
		value: e.quasis[0].value.cooked
	};
}
ja.ignoredProperties = em;
var Er = {
	bracketSpacing: {
		category: "Common",
		type: "boolean",
		default: !0,
		description: "Print spaces between brackets.",
		oppositeDescription: "Do not print spaces between brackets."
	},
	singleQuote: {
		category: "Common",
		type: "boolean",
		default: !1,
		description: "Use single quotes instead of double quotes."
	},
	proseWrap: {
		category: "Common",
		type: "choice",
		default: "preserve",
		description: "How to wrap prose.",
		choices: [
			{
				value: "always",
				description: "Wrap prose if it exceeds the print width."
			},
			{
				value: "never",
				description: "Do not wrap prose."
			},
			{
				value: "preserve",
				description: "Wrap prose as-is."
			}
		]
	},
	bracketSameLine: {
		category: "Common",
		type: "boolean",
		default: !1,
		description: "Put > of opening tags on the last line instead of on a new line."
	},
	singleAttributePerLine: {
		category: "Common",
		type: "boolean",
		default: !1,
		description: "Enforce single attribute per line in HTML, Vue and JSX."
	}
};
var kt = "JavaScript", va = {
	arrowParens: {
		category: kt,
		type: "choice",
		default: "always",
		description: "Include parentheses around a sole arrow function parameter.",
		choices: [{
			value: "always",
			description: "Always include parens. Example: `(x) => x`"
		}, {
			value: "avoid",
			description: "Omit parens when possible. Example: `x => x`"
		}]
	},
	bracketSameLine: Er.bracketSameLine,
	bracketSpacing: Er.bracketSpacing,
	jsxBracketSameLine: {
		category: kt,
		type: "boolean",
		description: "Put > on the last line instead of at a new line.",
		deprecated: "2.4.0"
	},
	semi: {
		category: kt,
		type: "boolean",
		default: !0,
		description: "Print semicolons.",
		oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
	},
	experimentalTernaries: {
		category: kt,
		type: "boolean",
		default: !1,
		description: "Use curious ternaries, with the question mark after the condition.",
		oppositeDescription: "Default behavior of ternaries; keep question marks on the same line as the consequent."
	},
	singleQuote: Er.singleQuote,
	jsxSingleQuote: {
		category: kt,
		type: "boolean",
		default: !1,
		description: "Use single quotes in JSX."
	},
	quoteProps: {
		category: kt,
		type: "choice",
		default: "as-needed",
		description: "Change when properties in objects are quoted.",
		choices: [
			{
				value: "as-needed",
				description: "Only add quotes around object properties where required."
			},
			{
				value: "consistent",
				description: "If at least one property in an object requires quotes, quote all properties."
			},
			{
				value: "preserve",
				description: "Respect the input use of quotes in object properties."
			}
		]
	},
	trailingComma: {
		category: kt,
		type: "choice",
		default: "all",
		description: "Print trailing commas wherever possible when multi-line.",
		choices: [
			{
				value: "all",
				description: "Trailing commas wherever possible (including function arguments)."
			},
			{
				value: "es5",
				description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
			},
			{
				value: "none",
				description: "No trailing commas."
			}
		]
	},
	singleAttributePerLine: Er.singleAttributePerLine
};
var rm = {
	estree: ws,
	"estree-json": Os
}, nm = [...Us, ...La];
var $d = _s;
var NDVEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NDVEmptyState",
	props: {
		title: {},
		wide: { type: Boolean },
		icon: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("article", { class: normalizeClass([_ctx.$style.empty, { [_ctx.$style.wide]: __props.wide }]) }, [
				renderSlot(_ctx.$slots, "icon", {}, () => [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: __props.icon,
					size: "xlarge"
				}, null, 8, ["icon"])) : createCommentVNode("", true)]),
				__props.title ? (openBlock(), createElementBlock("h1", {
					key: 0,
					class: normalizeClass(_ctx.$style.title)
				}, toDisplayString(__props.title), 3)) : createCommentVNode("", true),
				createBaseVNode("p", { class: normalizeClass(_ctx.$style.description) }, [renderSlot(_ctx.$slots, "default")], 2)
			], 2);
		};
	}
});
var NDVEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	empty: "_empty_ylpfe_2",
	title: "_title_ylpfe_13",
	description: "_description_ylpfe_21",
	wide: "_wide_ylpfe_28"
};
var NDVEmptyState_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NDVEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NDVEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
export { Cu$1 as a, Ln$1 as i, $d as n, gu$1 as o, estree_exports as r, NDVEmptyState_default as t };

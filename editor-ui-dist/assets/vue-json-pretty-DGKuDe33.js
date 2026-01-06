import { C as computed, G as nextTick, It as ref, M as createVNode, P as defineComponent, Pt as reactive, _ as Fragment, _t as watch, j as createTextVNode, vt as watchEffect } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
var t = {
	207: (e, t$1, n$1) => {
		e.exports = n$1(452);
	},
	452: (e) => {
		var t$1 = function(e$1) {
			var t$2, n$1 = Object.prototype, r$1 = n$1.hasOwnProperty, o$1 = "function" == typeof Symbol ? Symbol : {}, a$1 = o$1.iterator || "@@iterator", i$1 = o$1.asyncIterator || "@@asyncIterator", c$1 = o$1.toStringTag || "@@toStringTag";
			function l$1(e$2, t$3, n$2) {
				return Object.defineProperty(e$2, t$3, {
					value: n$2,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), e$2[t$3];
			}
			try {
				l$1({}, "");
			} catch (e$2) {
				l$1 = function(e$3, t$3, n$2) {
					return e$3[t$3] = n$2;
				};
			}
			function u$1(e$2, t$3, n$2, r$2) {
				var o$2 = t$3 && t$3.prototype instanceof y$1 ? t$3 : y$1, a$2 = Object.create(o$2.prototype);
				return a$2._invoke = function(e$3, t$4, n$3) {
					var r$3 = s$1;
					return function(o$3, a$3) {
						if (r$3 === f$1) throw new Error("Generator is already running");
						if (r$3 === p$1) {
							if ("throw" === o$3) throw a$3;
							return P$1();
						}
						for (n$3.method = o$3, n$3.arg = a$3;;) {
							var i$2 = n$3.delegate;
							if (i$2) {
								var c$2 = j$1(i$2, n$3);
								if (c$2) {
									if (c$2 === v$1) continue;
									return c$2;
								}
							}
							if ("next" === n$3.method) n$3.sent = n$3._sent = n$3.arg;
							else if ("throw" === n$3.method) {
								if (r$3 === s$1) throw r$3 = p$1, n$3.arg;
								n$3.dispatchException(n$3.arg);
							} else "return" === n$3.method && n$3.abrupt("return", n$3.arg);
							r$3 = f$1;
							var l$2 = d$1(e$3, t$4, n$3);
							if ("normal" === l$2.type) {
								if (r$3 = n$3.done ? p$1 : h$1, l$2.arg === v$1) continue;
								return {
									value: l$2.arg,
									done: n$3.done
								};
							}
							"throw" === l$2.type && (r$3 = p$1, n$3.method = "throw", n$3.arg = l$2.arg);
						}
					};
				}(e$2, n$2, new V$1(r$2 || [])), a$2;
			}
			function d$1(e$2, t$3, n$2) {
				try {
					return {
						type: "normal",
						arg: e$2.call(t$3, n$2)
					};
				} catch (e$3) {
					return {
						type: "throw",
						arg: e$3
					};
				}
			}
			e$1.wrap = u$1;
			var s$1 = "suspendedStart", h$1 = "suspendedYield", f$1 = "executing", p$1 = "completed", v$1 = {};
			function y$1() {}
			function g$1() {}
			function m$1() {}
			var b$1 = {};
			l$1(b$1, a$1, (function() {
				return this;
			}));
			var w$1 = Object.getPrototypeOf, N$1 = w$1 && w$1(w$1(L$1([])));
			N$1 && N$1 !== n$1 && r$1.call(N$1, a$1) && (b$1 = N$1);
			var k$1 = m$1.prototype = y$1.prototype = Object.create(b$1);
			function C$1(e$2) {
				[
					"next",
					"throw",
					"return"
				].forEach((function(t$3) {
					l$1(e$2, t$3, (function(e$3) {
						return this._invoke(t$3, e$3);
					}));
				}));
			}
			function x$1(e$2, t$3) {
				function n$2(o$3, a$2, i$2, c$2) {
					var l$2 = d$1(e$2[o$3], e$2, a$2);
					if ("throw" !== l$2.type) {
						var u$2 = l$2.arg, s$2 = u$2.value;
						return s$2 && "object" == typeof s$2 && r$1.call(s$2, "__await") ? t$3.resolve(s$2.__await).then((function(e$3) {
							n$2("next", e$3, i$2, c$2);
						}), (function(e$3) {
							n$2("throw", e$3, i$2, c$2);
						})) : t$3.resolve(s$2).then((function(e$3) {
							u$2.value = e$3, i$2(u$2);
						}), (function(e$3) {
							return n$2("throw", e$3, i$2, c$2);
						}));
					}
					c$2(l$2.arg);
				}
				var o$2;
				this._invoke = function(e$3, r$2) {
					function a$2() {
						return new t$3((function(t$4, o$3) {
							n$2(e$3, r$2, t$4, o$3);
						}));
					}
					return o$2 = o$2 ? o$2.then(a$2, a$2) : a$2();
				};
			}
			function j$1(e$2, n$2) {
				var r$2 = e$2.iterator[n$2.method];
				if (r$2 === t$2) {
					if (n$2.delegate = null, "throw" === n$2.method) {
						if (e$2.iterator.return && (n$2.method = "return", n$2.arg = t$2, j$1(e$2, n$2), "throw" === n$2.method)) return v$1;
						n$2.method = "throw", n$2.arg = /* @__PURE__ */ new TypeError("The iterator does not provide a 'throw' method");
					}
					return v$1;
				}
				var o$2 = d$1(r$2, e$2.iterator, n$2.arg);
				if ("throw" === o$2.type) return n$2.method = "throw", n$2.arg = o$2.arg, n$2.delegate = null, v$1;
				var a$2 = o$2.arg;
				return a$2 ? a$2.done ? (n$2[e$2.resultName] = a$2.value, n$2.next = e$2.nextLoc, "return" !== n$2.method && (n$2.method = "next", n$2.arg = t$2), n$2.delegate = null, v$1) : a$2 : (n$2.method = "throw", n$2.arg = /* @__PURE__ */ new TypeError("iterator result is not an object"), n$2.delegate = null, v$1);
			}
			function S$1(e$2) {
				var t$3 = { tryLoc: e$2[0] };
				1 in e$2 && (t$3.catchLoc = e$2[1]), 2 in e$2 && (t$3.finallyLoc = e$2[2], t$3.afterLoc = e$2[3]), this.tryEntries.push(t$3);
			}
			function O$1(e$2) {
				var t$3 = e$2.completion || {};
				t$3.type = "normal", delete t$3.arg, e$2.completion = t$3;
			}
			function V$1(e$2) {
				this.tryEntries = [{ tryLoc: "root" }], e$2.forEach(S$1, this), this.reset(!0);
			}
			function L$1(e$2) {
				if (e$2) {
					var n$2 = e$2[a$1];
					if (n$2) return n$2.call(e$2);
					if ("function" == typeof e$2.next) return e$2;
					if (!isNaN(e$2.length)) {
						var o$2 = -1, i$2 = function n$3() {
							for (; ++o$2 < e$2.length;) if (r$1.call(e$2, o$2)) return n$3.value = e$2[o$2], n$3.done = !1, n$3;
							return n$3.value = t$2, n$3.done = !0, n$3;
						};
						return i$2.next = i$2;
					}
				}
				return { next: P$1 };
			}
			function P$1() {
				return {
					value: t$2,
					done: !0
				};
			}
			return g$1.prototype = m$1, l$1(k$1, "constructor", m$1), l$1(m$1, "constructor", g$1), g$1.displayName = l$1(m$1, c$1, "GeneratorFunction"), e$1.isGeneratorFunction = function(e$2) {
				var t$3 = "function" == typeof e$2 && e$2.constructor;
				return !!t$3 && (t$3 === g$1 || "GeneratorFunction" === (t$3.displayName || t$3.name));
			}, e$1.mark = function(e$2) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(e$2, m$1) : (e$2.__proto__ = m$1, l$1(e$2, c$1, "GeneratorFunction")), e$2.prototype = Object.create(k$1), e$2;
			}, e$1.awrap = function(e$2) {
				return { __await: e$2 };
			}, C$1(x$1.prototype), l$1(x$1.prototype, i$1, (function() {
				return this;
			})), e$1.AsyncIterator = x$1, e$1.async = function(t$3, n$2, r$2, o$2, a$2) {
				void 0 === a$2 && (a$2 = Promise);
				var i$2 = new x$1(u$1(t$3, n$2, r$2, o$2), a$2);
				return e$1.isGeneratorFunction(n$2) ? i$2 : i$2.next().then((function(e$2) {
					return e$2.done ? e$2.value : i$2.next();
				}));
			}, C$1(k$1), l$1(k$1, c$1, "Generator"), l$1(k$1, a$1, (function() {
				return this;
			})), l$1(k$1, "toString", (function() {
				return "[object Generator]";
			})), e$1.keys = function(e$2) {
				var t$3 = [];
				for (var n$2 in e$2) t$3.push(n$2);
				return t$3.reverse(), function n$3() {
					for (; t$3.length;) {
						var r$2 = t$3.pop();
						if (r$2 in e$2) return n$3.value = r$2, n$3.done = !1, n$3;
					}
					return n$3.done = !0, n$3;
				};
			}, e$1.values = L$1, V$1.prototype = {
				constructor: V$1,
				reset: function(e$2) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = t$2, this.done = !1, this.delegate = null, this.method = "next", this.arg = t$2, this.tryEntries.forEach(O$1), !e$2) for (var n$2 in this) "t" === n$2.charAt(0) && r$1.call(this, n$2) && !isNaN(+n$2.slice(1)) && (this[n$2] = t$2);
				},
				stop: function() {
					this.done = !0;
					var e$2 = this.tryEntries[0].completion;
					if ("throw" === e$2.type) throw e$2.arg;
					return this.rval;
				},
				dispatchException: function(e$2) {
					if (this.done) throw e$2;
					var n$2 = this;
					function o$2(r$2, o$3) {
						return c$2.type = "throw", c$2.arg = e$2, n$2.next = r$2, o$3 && (n$2.method = "next", n$2.arg = t$2), !!o$3;
					}
					for (var a$2 = this.tryEntries.length - 1; a$2 >= 0; --a$2) {
						var i$2 = this.tryEntries[a$2], c$2 = i$2.completion;
						if ("root" === i$2.tryLoc) return o$2("end");
						if (i$2.tryLoc <= this.prev) {
							var l$2 = r$1.call(i$2, "catchLoc"), u$2 = r$1.call(i$2, "finallyLoc");
							if (l$2 && u$2) {
								if (this.prev < i$2.catchLoc) return o$2(i$2.catchLoc, !0);
								if (this.prev < i$2.finallyLoc) return o$2(i$2.finallyLoc);
							} else if (l$2) {
								if (this.prev < i$2.catchLoc) return o$2(i$2.catchLoc, !0);
							} else {
								if (!u$2) throw new Error("try statement without catch or finally");
								if (this.prev < i$2.finallyLoc) return o$2(i$2.finallyLoc);
							}
						}
					}
				},
				abrupt: function(e$2, t$3) {
					for (var n$2 = this.tryEntries.length - 1; n$2 >= 0; --n$2) {
						var o$2 = this.tryEntries[n$2];
						if (o$2.tryLoc <= this.prev && r$1.call(o$2, "finallyLoc") && this.prev < o$2.finallyLoc) {
							var a$2 = o$2;
							break;
						}
					}
					a$2 && ("break" === e$2 || "continue" === e$2) && a$2.tryLoc <= t$3 && t$3 <= a$2.finallyLoc && (a$2 = null);
					var i$2 = a$2 ? a$2.completion : {};
					return i$2.type = e$2, i$2.arg = t$3, a$2 ? (this.method = "next", this.next = a$2.finallyLoc, v$1) : this.complete(i$2);
				},
				complete: function(e$2, t$3) {
					if ("throw" === e$2.type) throw e$2.arg;
					return "break" === e$2.type || "continue" === e$2.type ? this.next = e$2.arg : "return" === e$2.type ? (this.rval = this.arg = e$2.arg, this.method = "return", this.next = "end") : "normal" === e$2.type && t$3 && (this.next = t$3), v$1;
				},
				finish: function(e$2) {
					for (var t$3 = this.tryEntries.length - 1; t$3 >= 0; --t$3) {
						var n$2 = this.tryEntries[t$3];
						if (n$2.finallyLoc === e$2) return this.complete(n$2.completion, n$2.afterLoc), O$1(n$2), v$1;
					}
				},
				catch: function(e$2) {
					for (var t$3 = this.tryEntries.length - 1; t$3 >= 0; --t$3) {
						var n$2 = this.tryEntries[t$3];
						if (n$2.tryLoc === e$2) {
							var r$2 = n$2.completion;
							if ("throw" === r$2.type) {
								var o$2 = r$2.arg;
								O$1(n$2);
							}
							return o$2;
						}
					}
					throw new Error("illegal catch attempt");
				},
				delegateYield: function(e$2, n$2, r$2) {
					return this.delegate = {
						iterator: L$1(e$2),
						resultName: n$2,
						nextLoc: r$2
					}, "next" === this.method && (this.arg = t$2), v$1;
				}
			}, e$1;
		}(e.exports);
		try {
			regeneratorRuntime = t$1;
		} catch (e$1) {
			"object" == typeof globalThis ? globalThis.regeneratorRuntime = t$1 : Function("r", "regeneratorRuntime = r")(t$1);
		}
	}
}, n = {};
function r(e) {
	var o$1 = n[e];
	if (void 0 !== o$1) return o$1.exports;
	var a$1 = n[e] = { exports: {} };
	return t[e](a$1, a$1.exports, r), a$1.exports;
}
r.n = (e) => {
	var t$1 = e && e.__esModule ? () => e.default : () => e;
	return r.d(t$1, { a: t$1 }), t$1;
}, r.d = (e, t$1) => {
	for (var n$1 in t$1) r.o(t$1, n$1) && !r.o(e, n$1) && Object.defineProperty(e, n$1, {
		enumerable: !0,
		get: t$1[n$1]
	});
}, r.o = (e, t$1) => Object.prototype.hasOwnProperty.call(e, t$1);
var o = {};
function a(e, t$1) {
	(null == t$1 || t$1 > e.length) && (t$1 = e.length);
	for (var n$1 = 0, r$1 = new Array(t$1); n$1 < t$1; n$1++) r$1[n$1] = e[n$1];
	return r$1;
}
function i(e, t$1) {
	if (e) {
		if ("string" == typeof e) return a(e, t$1);
		var n$1 = Object.prototype.toString.call(e).slice(8, -1);
		return "Object" === n$1 && e.constructor && (n$1 = e.constructor.name), "Map" === n$1 || "Set" === n$1 ? Array.from(e) : "Arguments" === n$1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n$1) ? a(e, t$1) : void 0;
	}
}
function c(e) {
	return function(e$1) {
		if (Array.isArray(e$1)) return a(e$1);
	}(e) || function(e$1) {
		if ("undefined" != typeof Symbol && null != e$1[Symbol.iterator] || null != e$1["@@iterator"]) return Array.from(e$1);
	}(e) || i(e) || function() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}();
}
function l(e, t$1, n$1) {
	return t$1 in e ? Object.defineProperty(e, t$1, {
		value: n$1,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t$1] = n$1, e;
}
r.d(o, { A: () => L });
var u = (f = {
	Fragment: () => Fragment,
	computed: () => computed,
	createTextVNode: () => createTextVNode,
	createVNode: () => createVNode,
	defineComponent: () => defineComponent,
	nextTick: () => nextTick,
	reactive: () => reactive,
	ref: () => ref,
	watch: () => watch,
	watchEffect: () => watchEffect
}, p = {}, r.d(p, f), p), d = (0, u.defineComponent)({
	props: {
		data: {
			required: !0,
			type: String
		},
		onClick: Function
	},
	render: function() {
		var e = this.data, t$1 = this.onClick;
		return (0, u.createVNode)("span", {
			class: "vjs-tree-brackets",
			onClick: t$1
		}, [e]);
	}
}), s = (0, u.defineComponent)({
	emits: ["change", "update:modelValue"],
	props: {
		checked: {
			type: Boolean,
			default: !1
		},
		isMultiple: Boolean,
		onChange: Function
	},
	setup: function(e, t$1) {
		var n$1 = t$1.emit;
		return {
			uiType: (0, u.computed)((function() {
				return e.isMultiple ? "checkbox" : "radio";
			})),
			model: (0, u.computed)({
				get: function() {
					return e.checked;
				},
				set: function(e$1) {
					return n$1("update:modelValue", e$1);
				}
			})
		};
	},
	render: function() {
		var e = this.uiType, t$1 = this.model, n$1 = this.$emit;
		return (0, u.createVNode)("label", {
			class: ["vjs-check-controller", t$1 ? "is-checked" : ""],
			onClick: function(e$1) {
				return e$1.stopPropagation();
			}
		}, [(0, u.createVNode)("span", { class: "vjs-check-controller-inner is-".concat(e) }, null), (0, u.createVNode)("input", {
			checked: t$1,
			class: "vjs-check-controller-original is-".concat(e),
			type: e,
			onChange: function() {
				return n$1("change", t$1);
			}
		}, null)]);
	}
}), h = (0, u.defineComponent)({
	props: {
		nodeType: {
			required: !0,
			type: String
		},
		onClick: Function
	},
	render: function() {
		var e = this.nodeType, t$1 = this.onClick, n$1 = "objectStart" === e || "arrayStart" === e;
		return n$1 || "objectCollapsed" === e || "arrayCollapsed" === e ? (0, u.createVNode)("span", {
			class: "vjs-carets vjs-carets-".concat(n$1 ? "open" : "close"),
			onClick: t$1
		}, [(0, u.createVNode)("svg", {
			viewBox: "0 0 1024 1024",
			focusable: "false",
			"data-icon": "caret-down",
			width: "1em",
			height: "1em",
			fill: "currentColor",
			"aria-hidden": "true"
		}, [(0, u.createVNode)("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }, null)])]) : null;
	}
});
var f, p;
function v(e) {
	return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e$1) {
		return typeof e$1;
	} : function(e$1) {
		return e$1 && "function" == typeof Symbol && e$1.constructor === Symbol && e$1 !== Symbol.prototype ? "symbol" : typeof e$1;
	}, v(e);
}
function y(e) {
	return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function g(e) {
	var t$1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root", n$1 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r$1 = (arguments.length > 3 ? arguments[3] : void 0) || {}, o$1 = r$1.key, a$1 = r$1.index, i$1 = r$1.type, c$1 = void 0 === i$1 ? "content" : i$1, l$1 = r$1.showComma, u$1 = void 0 !== l$1 && l$1, d$1 = r$1.length, s$1 = void 0 === d$1 ? 1 : d$1, h$1 = y(e);
	if ("array" === h$1) {
		var f$1 = m(e.map((function(e$1, r$2, o$2) {
			return g(e$1, "".concat(t$1, "[").concat(r$2, "]"), n$1 + 1, {
				index: r$2,
				showComma: r$2 !== o$2.length - 1,
				length: s$1,
				type: c$1
			});
		})));
		return [g("[", t$1, n$1, {
			showComma: !1,
			key: o$1,
			length: e.length,
			type: "arrayStart"
		})[0]].concat(f$1, g("]", t$1, n$1, {
			showComma: u$1,
			length: e.length,
			type: "arrayEnd"
		})[0]);
	}
	if ("object" === h$1) {
		var p$1 = Object.keys(e), v$1 = m(p$1.map((function(r$2, o$2, a$2) {
			return g(e[r$2], /^[a-zA-Z_]\w*$/.test(r$2) ? "".concat(t$1, ".").concat(r$2) : "".concat(t$1, "[\"").concat(r$2, "\"]"), n$1 + 1, {
				key: r$2,
				showComma: o$2 !== a$2.length - 1,
				length: s$1,
				type: c$1
			});
		})));
		return [g("{", t$1, n$1, {
			showComma: !1,
			key: o$1,
			index: a$1,
			length: p$1.length,
			type: "objectStart"
		})[0]].concat(v$1, g("}", t$1, n$1, {
			showComma: u$1,
			length: p$1.length,
			type: "objectEnd"
		})[0]);
	}
	return [{
		content: e,
		level: n$1,
		key: o$1,
		index: a$1,
		path: t$1,
		showComma: u$1,
		length: s$1,
		type: c$1
	}];
}
function m(e) {
	if ("function" == typeof Array.prototype.flat) return e.flat();
	for (var t$1 = c(e), n$1 = []; t$1.length;) {
		var r$1 = t$1.shift();
		Array.isArray(r$1) ? t$1.unshift.apply(t$1, c(r$1)) : n$1.push(r$1);
	}
	return n$1;
}
function b(e) {
	var t$1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new WeakMap();
	if (null == e) return e;
	if (e instanceof Date) return new Date(e);
	if (e instanceof RegExp) return new RegExp(e);
	if ("object" !== v(e)) return e;
	if (t$1.get(e)) return t$1.get(e);
	if (Array.isArray(e)) {
		var n$1 = e.map((function(e$1) {
			return b(e$1, t$1);
		}));
		return t$1.set(e, n$1), n$1;
	}
	var r$1 = {};
	for (var o$1 in e) r$1[o$1] = b(e[o$1], t$1);
	return t$1.set(e, r$1), r$1;
}
function w(e, t$1, n$1, r$1, o$1, a$1, i$1) {
	try {
		var c$1 = e[a$1](i$1), l$1 = c$1.value;
	} catch (e$1) {
		n$1(e$1);
		return;
	}
	c$1.done ? t$1(l$1) : Promise.resolve(l$1).then(r$1, o$1);
}
var N = r(207), k = r.n(N);
function C(e, t$1) {
	var n$1 = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r$1 = Object.getOwnPropertySymbols(e);
		t$1 && (r$1 = r$1.filter((function(t$2) {
			return Object.getOwnPropertyDescriptor(e, t$2).enumerable;
		}))), n$1.push.apply(n$1, r$1);
	}
	return n$1;
}
function x(e) {
	for (var t$1 = 1; t$1 < arguments.length; t$1++) {
		var n$1 = null != arguments[t$1] ? arguments[t$1] : {};
		t$1 % 2 ? C(Object(n$1), !0).forEach((function(t$2) {
			l(e, t$2, n$1[t$2]);
		})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n$1)) : C(Object(n$1)).forEach((function(t$2) {
			Object.defineProperty(e, t$2, Object.getOwnPropertyDescriptor(n$1, t$2));
		}));
	}
	return e;
}
var j = {
	data: {
		type: [
			String,
			Number,
			Boolean,
			Array,
			Object
		],
		default: null
	},
	rootPath: {
		type: String,
		default: "root"
	},
	indent: {
		type: Number,
		default: 2
	},
	showLength: {
		type: Boolean,
		default: !1
	},
	showDoubleQuotes: {
		type: Boolean,
		default: !0
	},
	renderNodeKey: Function,
	renderNodeValue: Function,
	renderNodeActions: {
		type: [Boolean, Function],
		default: void 0
	},
	selectableType: String,
	showSelectController: {
		type: Boolean,
		default: !1
	},
	showLine: {
		type: Boolean,
		default: !0
	},
	showLineNumber: {
		type: Boolean,
		default: !1
	},
	selectOnClickNode: {
		type: Boolean,
		default: !0
	},
	nodeSelectable: {
		type: Function,
		default: function() {
			return !0;
		}
	},
	highlightSelectedNode: {
		type: Boolean,
		default: !0
	},
	showIcon: {
		type: Boolean,
		default: !1
	},
	theme: {
		type: String,
		default: "light"
	},
	showKeyValueSpace: {
		type: Boolean,
		default: !0
	},
	editable: {
		type: Boolean,
		default: !1
	},
	editableTrigger: {
		type: String,
		default: "click"
	},
	onNodeClick: { type: Function },
	onNodeMouseover: { type: Function },
	onBracketsClick: { type: Function },
	onIconClick: { type: Function },
	onValueChange: { type: Function }
};
var S = (0, u.defineComponent)({
	name: "TreeNode",
	props: x(x({}, j), {}, {
		node: {
			type: Object,
			required: !0
		},
		collapsed: Boolean,
		checked: Boolean,
		style: Object,
		onSelectedChange: { type: Function }
	}),
	emits: [
		"nodeClick",
		"nodeMouseover",
		"bracketsClick",
		"iconClick",
		"selectedChange",
		"valueChange"
	],
	setup: function(e, t$1) {
		var n$1 = t$1.emit, r$1 = (0, u.computed)((function() {
			return y(e.node.content);
		})), o$1 = (0, u.computed)((function() {
			return "vjs-value vjs-value-".concat(r$1.value);
		})), a$1 = (0, u.computed)((function() {
			return e.showDoubleQuotes ? "\"".concat(e.node.key, "\"") : e.node.key;
		})), i$1 = (0, u.computed)((function() {
			return "multiple" === e.selectableType;
		})), c$1 = (0, u.computed)((function() {
			return "single" === e.selectableType;
		})), f$1 = (0, u.computed)((function() {
			return e.nodeSelectable(e.node) && (i$1.value || c$1.value);
		})), p$1 = (0, u.reactive)({ editing: !1 }), v$1 = function(t$2) {
			var r$2, o$2;
			n$1("valueChange", "null" === (o$2 = null === (r$2 = t$2.target) || void 0 === r$2 ? void 0 : r$2.value) ? null : "undefined" === o$2 ? void 0 : "true" === o$2 || "false" !== o$2 && (o$2[0] + o$2[o$2.length - 1] === "\"\"" || o$2[0] + o$2[o$2.length - 1] === "''" ? o$2.slice(1, -1) : "number" == typeof Number(o$2) && !isNaN(Number(o$2)) || "NaN" === o$2 ? Number(o$2) : o$2), e.node.path);
		}, g$1 = (0, u.computed)((function() {
			var t$2, n$2 = null === (t$2 = e.node) || void 0 === t$2 ? void 0 : t$2.content;
			return null === n$2 ? n$2 = "null" : void 0 === n$2 && (n$2 = "undefined"), "string" === r$1.value ? "\"".concat(n$2, "\"") : n$2 + "";
		})), m$1 = function() {
			var t$2 = e.renderNodeValue;
			return t$2 ? t$2({
				node: e.node,
				defaultValue: g$1.value
			}) : g$1.value;
		}, b$1 = function() {
			n$1("bracketsClick", !e.collapsed, e.node);
		}, N$1 = function() {
			n$1("iconClick", !e.collapsed, e.node);
		}, C$1 = function() {
			n$1("selectedChange", e.node);
		}, x$1 = function() {
			n$1("nodeClick", e.node), f$1.value && e.selectOnClickNode && n$1("selectedChange", e.node);
		}, j$1 = function() {
			n$1("nodeMouseover", e.node);
		}, S$1 = function(t$2) {
			if (e.editable && !p$1.editing) {
				p$1.editing = !0;
				var n$2 = function e$1(n$3) {
					var r$2;
					n$3.target !== t$2.target && (null === (r$2 = n$3.target) || void 0 === r$2 ? void 0 : r$2.parentElement) !== t$2.target && (p$1.editing = !1, document.removeEventListener("click", e$1));
				};
				document.removeEventListener("click", n$2), document.addEventListener("click", n$2);
			}
		}, O$1 = function() {
			var e$1 = (0, u.ref)(!1);
			return { copy: function() {
				var t$2, n$2 = (t$2 = k().mark((function t$3(n$3) {
					return k().wrap((function(t$4) {
						for (;;) switch (t$4.prev = t$4.next) {
							case 0: return t$4.prev = 0, t$4.next = 3, navigator.clipboard.writeText(n$3);
							case 3:
								e$1.value = !0, setTimeout((function() {
									e$1.value = !1;
								}), 300), t$4.next = 10;
								break;
							case 7: t$4.prev = 7, t$4.t0 = t$4.catch(0), console.error("[vue-json-pretty] Copy failed: ", t$4.t0);
							case 10:
							case "end": return t$4.stop();
						}
					}), t$3, null, [[0, 7]]);
				})), function() {
					var e$2 = this, n$3 = arguments;
					return new Promise((function(r$2, o$2) {
						var a$2 = t$2.apply(e$2, n$3);
						function i$2(e$3) {
							w(a$2, r$2, o$2, i$2, c$2, "next", e$3);
						}
						function c$2(e$3) {
							w(a$2, r$2, o$2, i$2, c$2, "throw", e$3);
						}
						i$2(void 0);
					}));
				});
				return function(e$2) {
					return n$2.apply(this, arguments);
				};
			}() };
		}().copy, V$1 = function() {
			var t$2 = e.node, n$2 = t$2.key, r$2 = t$2.path, o$2 = e.rootPath, a$2 = new Function("data", "return data".concat(r$2.slice(o$2.length)))(e.data);
			O$1(JSON.stringify(n$2 ? l({}, n$2, a$2) : a$2, null, 2));
		}, L$1 = function() {
			var t$2 = e.renderNodeActions;
			if (!t$2) return null;
			var n$2 = { copy: V$1 };
			return "function" == typeof t$2 ? t$2({
				node: e.node,
				defaultActions: n$2
			}) : (0, u.createVNode)("span", {
				onClick: V$1,
				class: "vjs-tree-node-actions-item"
			}, [(0, u.createTextVNode)("copy")]);
		};
		return function() {
			var t$2, n$2 = e.node;
			return (0, u.createVNode)("div", {
				class: {
					"vjs-tree-node": !0,
					"has-selector": e.showSelectController,
					"has-carets": e.showIcon,
					"is-highlight": e.highlightSelectedNode && e.checked,
					dark: "dark" === e.theme
				},
				onClick: x$1,
				onMouseover: j$1,
				style: e.style
			}, [
				e.showLineNumber && (0, u.createVNode)("span", { class: "vjs-node-index" }, [n$2.id + 1]),
				e.showSelectController && f$1.value && "objectEnd" !== n$2.type && "arrayEnd" !== n$2.type && (0, u.createVNode)(s, {
					isMultiple: i$1.value,
					checked: e.checked,
					onChange: C$1
				}, null),
				(0, u.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(n$2.level)).map((function(t$3, n$3) {
					return (0, u.createVNode)("div", {
						key: n$3,
						class: {
							"vjs-indent-unit": !0,
							"has-line": e.showLine
						}
					}, [Array.from(Array(e.indent)).map((function() {
						return (0, u.createVNode)(u.Fragment, null, [(0, u.createTextVNode)("\xA0")]);
					}))]);
				})), e.showIcon && (0, u.createVNode)(h, {
					nodeType: n$2.type,
					onClick: N$1
				}, null)]),
				n$2.key && (0, u.createVNode)("span", { class: "vjs-key" }, [(t$2 = e.renderNodeKey, t$2 ? t$2({
					node: e.node,
					defaultKey: a$1.value || ""
				}) : a$1.value), (0, u.createVNode)("span", { class: "vjs-colon" }, [":".concat(e.showKeyValueSpace ? " " : "")])]),
				(0, u.createVNode)("span", null, [
					"content" !== n$2.type && n$2.content ? (0, u.createVNode)(d, {
						data: n$2.content.toString(),
						onClick: b$1
					}, null) : (0, u.createVNode)("span", {
						class: o$1.value,
						onClick: !e.editable || e.editableTrigger && "click" !== e.editableTrigger ? void 0 : S$1,
						onDblclick: e.editable && "dblclick" === e.editableTrigger ? S$1 : void 0
					}, [e.editable && p$1.editing ? (0, u.createVNode)("input", {
						value: g$1.value,
						onChange: v$1,
						style: {
							padding: "3px 8px",
							border: "1px solid #eee",
							boxShadow: "none",
							boxSizing: "border-box",
							borderRadius: 5,
							fontFamily: "inherit"
						}
					}, null) : m$1()]),
					n$2.showComma && (0, u.createVNode)("span", null, [","]),
					e.showLength && e.collapsed && (0, u.createVNode)("span", { class: "vjs-comment" }, [
						(0, u.createTextVNode)(" // "),
						n$2.length,
						(0, u.createTextVNode)(" items ")
					])
				]),
				e.renderNodeActions && (0, u.createVNode)("span", { class: "vjs-tree-node-actions" }, [L$1()])
			]);
		};
	}
});
function O(e, t$1) {
	var n$1 = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r$1 = Object.getOwnPropertySymbols(e);
		t$1 && (r$1 = r$1.filter((function(t$2) {
			return Object.getOwnPropertyDescriptor(e, t$2).enumerable;
		}))), n$1.push.apply(n$1, r$1);
	}
	return n$1;
}
function V(e) {
	for (var t$1 = 1; t$1 < arguments.length; t$1++) {
		var n$1 = null != arguments[t$1] ? arguments[t$1] : {};
		t$1 % 2 ? O(Object(n$1), !0).forEach((function(t$2) {
			l(e, t$2, n$1[t$2]);
		})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n$1)) : O(Object(n$1)).forEach((function(t$2) {
			Object.defineProperty(e, t$2, Object.getOwnPropertyDescriptor(n$1, t$2));
		}));
	}
	return e;
}
var L = (0, u.defineComponent)({
	name: "Tree",
	props: V(V({}, j), {}, {
		collapsedNodeLength: {
			type: Number,
			default: Infinity
		},
		deep: {
			type: Number,
			default: Infinity
		},
		pathCollapsible: {
			type: Function,
			default: function() {
				return !1;
			}
		},
		virtual: {
			type: Boolean,
			default: !1
		},
		height: {
			type: Number,
			default: 400
		},
		itemHeight: {
			type: Number,
			default: 20
		},
		dynamicHeight: {
			type: Boolean,
			default: !0
		},
		selectedValue: {
			type: [String, Array],
			default: function() {
				return "";
			}
		},
		collapsedOnClickBrackets: {
			type: Boolean,
			default: !0
		},
		style: Object,
		onSelectedChange: { type: Function },
		theme: {
			type: String,
			default: "light"
		}
	}),
	slots: [
		"renderNodeKey",
		"renderNodeValue",
		"renderNodeActions"
	],
	emits: [
		"nodeClick",
		"nodeMouseover",
		"bracketsClick",
		"iconClick",
		"selectedChange",
		"update:selectedValue",
		"update:data"
	],
	setup: function(e, t$1) {
		var n$1 = t$1.emit, r$1 = t$1.slots, o$1 = (0, u.ref)(), a$1 = (0, u.computed)((function() {
			return g(e.data, e.rootPath);
		})), d$1 = function(t$2, n$2) {
			return a$1.value.reduce((function(r$2, o$2) {
				var a$2, i$1 = o$2.level >= t$2 || o$2.length >= n$2, c$1 = null === (a$2 = e.pathCollapsible) || void 0 === a$2 ? void 0 : a$2.call(e, o$2);
				return "objectStart" !== o$2.type && "arrayStart" !== o$2.type || !i$1 && !c$1 ? r$2 : V(V({}, r$2), {}, l({}, o$2.path, 1));
			}), {});
		}, s$1 = (0, u.reactive)({
			translateY: 0,
			visibleData: null,
			hiddenPaths: d$1(e.deep, e.collapsedNodeLength),
			startIndex: 0,
			endIndex: 0
		}), h$1 = [], f$1 = [], p$1 = 0, v$1 = {}, y$1 = function(t$2) {
			h$1 = Array(t$2).fill(0).map((function() {
				return e.itemHeight || 20;
			})), (f$1 = new Array(t$2 + 1))[0] = 0;
			for (var n$2 = 0; n$2 < t$2; n$2++) f$1[n$2 + 1] = f$1[n$2] + h$1[n$2];
			p$1 = f$1[t$2] || 0;
		}, m$1 = function(e$1) {
			var t$2 = h$1.length;
			e$1 < 0 && (e$1 = 0), e$1 > t$2 && (e$1 = t$2);
			for (var n$2 = e$1; n$2 < t$2; n$2++) f$1[n$2 + 1] = f$1[n$2] + h$1[n$2];
			p$1 = f$1[t$2] || 0;
		}, w$1 = function(e$1, t$2) {
			for (var n$2 = 0, r$2 = e$1.length - 1; n$2 < r$2;) {
				var o$2 = n$2 + r$2 >>> 1;
				e$1[o$2] < t$2 ? n$2 = o$2 + 1 : r$2 = o$2;
			}
			return n$2;
		}, N$1 = (0, u.computed)((function() {
			for (var e$1 = null, t$2 = [], n$2 = a$1.value.length, r$2 = 0; r$2 < n$2; r$2++) {
				var o$2 = V(V({}, a$1.value[r$2]), {}, { id: r$2 }), i$1 = s$1.hiddenPaths[o$2.path];
				if (e$1 && e$1.path === o$2.path) {
					var c$1 = "objectStart" === e$1.type, l$1 = V(V(V({}, o$2), e$1), {}, {
						showComma: o$2.showComma,
						content: c$1 ? "{...}" : "[...]",
						type: c$1 ? "objectCollapsed" : "arrayCollapsed"
					});
					e$1 = null, t$2.push(l$1);
				} else {
					if (i$1 && !e$1) {
						e$1 = o$2;
						continue;
					}
					if (e$1) continue;
					t$2.push(o$2);
				}
			}
			return t$2;
		})), k$1 = (0, u.computed)((function() {
			var t$2 = e.selectedValue;
			return t$2 && "multiple" === e.selectableType && Array.isArray(t$2) ? t$2 : [t$2];
		})), C$1 = (0, u.computed)((function() {
			return !e.selectableType || e.selectOnClickNode || e.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
		})), x$1 = (0, u.computed)((function() {
			return e.dynamicHeight ? p$1 || 0 : N$1.value.length * e.itemHeight;
		})), j$1 = function t$2() {
			var n$2 = N$1.value;
			if (n$2) if (e.virtual) {
				var r$2, a$2 = (null === (r$2 = o$1.value) || void 0 === r$2 ? void 0 : r$2.scrollTop) || 0;
				if (e.dynamicHeight) {
					h$1.length !== n$2.length && y$1(n$2.length);
					var i$1 = function(e$1) {
						var t$3 = w$1(f$1, e$1 + 1e-4);
						return Math.max(0, Math.min(t$3 - 1, h$1.length - 1));
					}(a$2), c$1 = function(e$1, t$3) {
						var n$3 = w$1(f$1, e$1 + t$3);
						return Math.max(0, Math.min(n$3 + 1, h$1.length));
					}(a$2, e.height), l$1 = Math.max(0, i$1 - 5), d$2 = Math.min(n$2.length, c$1 + 5);
					s$1.startIndex = l$1, s$1.endIndex = d$2, s$1.translateY = f$1[l$1] || 0, s$1.visibleData = n$2.slice(l$1, d$2), (0, u.nextTick)().then((function() {
						for (var e$1 = !1, n$3 = s$1.startIndex; n$3 < s$1.endIndex; n$3++) {
							var r$3 = v$1[n$3];
							if (r$3) {
								var o$2 = r$3.offsetHeight;
								o$2 && h$1[n$3] !== o$2 && (h$1[n$3] = o$2, f$1[n$3 + 1] = f$1[n$3] + h$1[n$3], m$1(n$3 + 1), e$1 = !0);
							}
						}
						e$1 && t$2();
					}));
				} else {
					var p$2 = e.height / e.itemHeight, g$1 = Math.floor(a$2 / e.itemHeight), b$1 = g$1 < 0 ? 0 : g$1 + p$2 > n$2.length ? n$2.length - p$2 : g$1;
					b$1 < 0 && (b$1 = 0);
					var k$2 = b$1 + p$2;
					s$1.translateY = b$1 * e.itemHeight, s$1.startIndex = b$1, s$1.endIndex = k$2, s$1.visibleData = n$2.slice(b$1, k$2);
				}
			} else s$1.translateY = 0, s$1.startIndex = 0, s$1.endIndex = n$2.length, s$1.visibleData = n$2;
		}, O$1 = null, L$1 = function() {
			O$1 && cancelAnimationFrame(O$1), O$1 = requestAnimationFrame((function() {
				j$1();
			}));
		}, P$1 = function(t$2) {
			var r$2, o$2, a$2 = t$2.path, l$1 = e.selectableType;
			if ("multiple" === l$1) {
				var u$1 = k$1.value.findIndex((function(e$1) {
					return e$1 === a$2;
				})), d$2 = c(k$1.value);
				-1 !== u$1 ? d$2.splice(u$1, 1) : d$2.push(a$2), n$1("update:selectedValue", d$2), n$1("selectedChange", d$2, c(k$1.value));
			} else if ("single" === l$1 && k$1.value[0] !== a$2) {
				var s$2 = (r$2 = k$1.value, o$2 = 1, function(e$1) {
					if (Array.isArray(e$1)) return e$1;
				}(r$2) || function(e$1, t$3) {
					var n$2 = null == e$1 ? null : "undefined" != typeof Symbol && e$1[Symbol.iterator] || e$1["@@iterator"];
					if (null != n$2) {
						var r$3, o$3, a$3 = [], i$1 = !0, c$1 = !1;
						try {
							for (n$2 = n$2.call(e$1); !(i$1 = (r$3 = n$2.next()).done) && (a$3.push(r$3.value), !t$3 || a$3.length !== t$3); i$1 = !0);
						} catch (e$2) {
							c$1 = !0, o$3 = e$2;
						} finally {
							try {
								i$1 || null == n$2.return || n$2.return();
							} finally {
								if (c$1) throw o$3;
							}
						}
						return a$3;
					}
				}(r$2, o$2) || i(r$2, o$2) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}())[0], h$2 = a$2;
				n$1("update:selectedValue", h$2), n$1("selectedChange", h$2, s$2);
			}
		}, T = function(e$1) {
			n$1("nodeClick", e$1);
		}, E = function(e$1) {
			n$1("nodeMouseover", e$1);
		}, A = function(e$1, t$2) {
			if (e$1) s$1.hiddenPaths = V(V({}, s$1.hiddenPaths), {}, l({}, t$2, 1));
			else {
				var n$2 = V({}, s$1.hiddenPaths);
				delete n$2[t$2], s$1.hiddenPaths = n$2;
			}
		}, F = function(t$2, r$2) {
			e.collapsedOnClickBrackets && A(t$2, r$2.path), n$1("bracketsClick", t$2, r$2);
		}, I = function(e$1, t$2) {
			A(e$1, t$2.path), n$1("iconClick", e$1, t$2);
		}, B = function(t$2, r$2) {
			var o$2 = b(e.data), a$2 = e.rootPath;
			new Function("data", "val", "data".concat(r$2.slice(a$2.length), "=val"))(o$2, t$2), n$1("update:data", o$2);
		};
		return (0, u.watchEffect)((function() {
			C$1.value && function(e$1) {
				throw new Error("[VueJSONPretty] ".concat(e$1));
			}(C$1.value);
		})), (0, u.watchEffect)((function() {
			N$1.value && (e.virtual && e.dynamicHeight && h$1.length !== N$1.value.length && y$1(N$1.value.length), j$1());
		})), (0, u.watch)((function() {
			return [
				e.dynamicHeight,
				e.itemHeight,
				a$1.value.length
			];
		}), (function() {
			e.virtual && e.dynamicHeight && (y$1(N$1.value.length), (0, u.nextTick)(j$1));
		})), (0, u.watch)((function() {
			return e.deep;
		}), (function(t$2) {
			t$2 && (s$1.hiddenPaths = d$1(t$2, e.collapsedNodeLength));
		})), (0, u.watch)((function() {
			return e.collapsedNodeLength;
		}), (function(t$2) {
			t$2 && (s$1.hiddenPaths = d$1(e.deep, t$2));
		})), function() {
			var t$2, n$2, i$1, c$1, l$1, d$2 = null !== (t$2 = e.renderNodeKey) && void 0 !== t$2 ? t$2 : r$1.renderNodeKey, h$2 = null !== (n$2 = e.renderNodeValue) && void 0 !== n$2 ? n$2 : r$1.renderNodeValue, f$2 = null !== (i$1 = null !== (c$1 = e.renderNodeActions) && void 0 !== c$1 ? c$1 : r$1.renderNodeActions) && void 0 !== i$1 && i$1, p$2 = null === (l$1 = s$1.visibleData) || void 0 === l$1 ? void 0 : l$1.map((function(t$3, n$3) {
				var r$2 = s$1.startIndex + n$3;
				return (0, u.createVNode)("div", {
					key: t$3.id,
					ref: function(e$1) {
						return function(e$2, t$4) {
							t$4 ? v$1[e$2] = t$4 : delete v$1[e$2];
						}(r$2, e$1 || null);
					}
				}, [(0, u.createVNode)(S, {
					data: e.data,
					rootPath: e.rootPath,
					indent: e.indent,
					node: t$3,
					collapsed: !!s$1.hiddenPaths[t$3.path],
					theme: e.theme,
					showDoubleQuotes: e.showDoubleQuotes,
					showLength: e.showLength,
					checked: k$1.value.includes(t$3.path),
					selectableType: e.selectableType,
					showLine: e.showLine,
					showLineNumber: e.showLineNumber,
					showSelectController: e.showSelectController,
					selectOnClickNode: e.selectOnClickNode,
					nodeSelectable: e.nodeSelectable,
					highlightSelectedNode: e.highlightSelectedNode,
					editable: e.editable,
					editableTrigger: e.editableTrigger,
					showIcon: e.showIcon,
					showKeyValueSpace: e.showKeyValueSpace,
					renderNodeKey: d$2,
					renderNodeValue: h$2,
					renderNodeActions: f$2,
					onNodeClick: T,
					onNodeMouseover: E,
					onBracketsClick: F,
					onIconClick: I,
					onSelectedChange: P$1,
					onValueChange: B,
					class: e.dynamicHeight ? "dynamic-height" : void 0,
					style: e.dynamicHeight ? {} : e.itemHeight && 20 !== e.itemHeight ? { lineHeight: "".concat(e.itemHeight, "px") } : {}
				}, null)]);
			}));
			return (0, u.createVNode)("div", {
				ref: o$1,
				class: {
					"vjs-tree": !0,
					"is-virtual": e.virtual,
					dark: "dark" === e.theme
				},
				onScroll: e.virtual ? L$1 : void 0,
				style: e.showLineNumber ? V({ paddingLeft: "".concat(12 * Number(a$1.value.length.toString().length), "px") }, e.style) : e.style
			}, [e.virtual ? (0, u.createVNode)("div", {
				class: "vjs-tree-list",
				style: { height: "".concat(e.height, "px") }
			}, [(0, u.createVNode)("div", {
				class: "vjs-tree-list-holder",
				style: { height: "".concat(x$1.value, "px") }
			}, [(0, u.createVNode)("div", {
				class: "vjs-tree-list-holder-inner",
				style: { transform: "translateY(".concat(s$1.translateY, "px)") }
			}, [p$2])])]) : p$2]);
		};
	}
});
var P = o.A;
export { P as t };

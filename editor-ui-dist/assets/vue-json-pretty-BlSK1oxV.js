import { t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { t as require_vue } from "./vue-GniKVX87.js";
var require_vue_json_pretty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, t) {
		"object" == typeof exports && "object" == typeof module ? module.exports = t(require_vue()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VueJsonPretty = t(require_vue()) : e.VueJsonPretty = t(e.Vue);
	})(exports, (function(e) {
		return function() {
			var t = { 789: function(t$1) {
				t$1.exports = e;
			} }, n = {};
			function o(e$1) {
				var r$1 = n[e$1];
				if (void 0 !== r$1) return r$1.exports;
				var l = n[e$1] = { exports: {} };
				return t[e$1](l, l.exports, o), l.exports;
			}
			o.d = function(e$1, t$1) {
				for (var n$1 in t$1) o.o(t$1, n$1) && !o.o(e$1, n$1) && Object.defineProperty(e$1, n$1, {
					enumerable: !0,
					get: t$1[n$1]
				});
			}, o.o = function(e$1, t$1) {
				return Object.prototype.hasOwnProperty.call(e$1, t$1);
			}, o.r = function(e$1) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e$1, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e$1, "__esModule", { value: !0 });
			};
			var r = {};
			return function() {
				function e$1(e$2, t$2) {
					(null == t$2 || t$2 > e$2.length) && (t$2 = e$2.length);
					for (var n$2 = 0, o$1 = new Array(t$2); n$2 < t$2; n$2++) o$1[n$2] = e$2[n$2];
					return o$1;
				}
				function t$1(t$2, n$2) {
					if (t$2) {
						if ("string" == typeof t$2) return e$1(t$2, n$2);
						var o$1 = Object.prototype.toString.call(t$2).slice(8, -1);
						return "Object" === o$1 && t$2.constructor && (o$1 = t$2.constructor.name), "Map" === o$1 || "Set" === o$1 ? Array.from(t$2) : "Arguments" === o$1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o$1) ? e$1(t$2, n$2) : void 0;
					}
				}
				function n$1(n$2) {
					return function(t$2) {
						if (Array.isArray(t$2)) return e$1(t$2);
					}(n$2) || function(e$2) {
						if ("undefined" != typeof Symbol && null != e$2[Symbol.iterator] || null != e$2["@@iterator"]) return Array.from(e$2);
					}(n$2) || t$1(n$2) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					}();
				}
				function l(e$2, t$2, n$2) {
					return t$2 in e$2 ? Object.defineProperty(e$2, t$2, {
						value: n$2,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e$2[t$2] = n$2, e$2;
				}
				o.r(r), o.d(r, { default: function() {
					return k;
				} });
				var a = o(789), c = (0, a.defineComponent)({
					props: {
						data: {
							required: !0,
							type: String
						},
						onClick: Function
					},
					render: function() {
						var e$2 = this.data, t$2 = this.onClick;
						return (0, a.createVNode)("span", {
							class: "vjs-tree-brackets",
							onClick: t$2
						}, [e$2]);
					}
				}), i = (0, a.defineComponent)({
					emits: ["change", "update:modelValue"],
					props: {
						checked: {
							type: Boolean,
							default: !1
						},
						isMultiple: Boolean,
						onChange: Function
					},
					setup: function(e$2, t$2) {
						var n$2 = t$2.emit;
						return {
							uiType: (0, a.computed)((function() {
								return e$2.isMultiple ? "checkbox" : "radio";
							})),
							model: (0, a.computed)({
								get: function() {
									return e$2.checked;
								},
								set: function(e$3) {
									return n$2("update:modelValue", e$3);
								}
							})
						};
					},
					render: function() {
						var e$2 = this.uiType, t$2 = this.model, n$2 = this.$emit;
						return (0, a.createVNode)("label", {
							class: ["vjs-check-controller", t$2 ? "is-checked" : ""],
							onClick: function(e$3) {
								return e$3.stopPropagation();
							}
						}, [(0, a.createVNode)("span", { class: "vjs-check-controller-inner is-".concat(e$2) }, null), (0, a.createVNode)("input", {
							checked: t$2,
							class: "vjs-check-controller-original is-".concat(e$2),
							type: e$2,
							onChange: function() {
								return n$2("change", t$2);
							}
						}, null)]);
					}
				}), u = (0, a.defineComponent)({
					props: {
						nodeType: {
							required: !0,
							type: String
						},
						onClick: Function
					},
					render: function() {
						var e$2 = this.nodeType, t$2 = this.onClick, n$2 = "objectStart" === e$2 || "arrayStart" === e$2;
						return n$2 || "objectCollapsed" === e$2 || "arrayCollapsed" === e$2 ? (0, a.createVNode)("span", {
							class: "vjs-carets vjs-carets-".concat(n$2 ? "open" : "close"),
							onClick: t$2
						}, [(0, a.createVNode)("svg", {
							viewBox: "0 0 1024 1024",
							focusable: "false",
							"data-icon": "caret-down",
							width: "1em",
							height: "1em",
							fill: "currentColor",
							"aria-hidden": "true"
						}, [(0, a.createVNode)("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }, null)])]) : null;
					}
				});
				function d(e$2) {
					return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e$3) {
						return typeof e$3;
					} : function(e$3) {
						return e$3 && "function" == typeof Symbol && e$3.constructor === Symbol && e$3 !== Symbol.prototype ? "symbol" : typeof e$3;
					}, d(e$2);
				}
				function s(e$2) {
					return Object.prototype.toString.call(e$2).slice(8, -1).toLowerCase();
				}
				function p(e$2) {
					var t$2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root", n$2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r$1 = (arguments.length > 3 ? arguments[3] : void 0) || {}, l$1 = r$1.key, a$1 = r$1.index, c$1 = r$1.type, i$1 = void 0 === c$1 ? "content" : c$1, u$1 = r$1.showComma, d$1 = void 0 !== u$1 && u$1, f$1 = r$1.length, y$1 = void 0 === f$1 ? 1 : f$1, v$1 = s(e$2);
					if ("array" === v$1) {
						var b$1 = h(e$2.map((function(e$3, o$1, r$2) {
							return p(e$3, "".concat(t$2, "[").concat(o$1, "]"), n$2 + 1, {
								index: o$1,
								showComma: o$1 !== r$2.length - 1,
								length: y$1,
								type: i$1
							});
						})));
						return [p("[", t$2, n$2, {
							showComma: !1,
							key: l$1,
							length: e$2.length,
							type: "arrayStart"
						})[0]].concat(b$1, p("]", t$2, n$2, {
							showComma: d$1,
							length: e$2.length,
							type: "arrayEnd"
						})[0]);
					}
					if ("object" === v$1) {
						var g$1 = Object.keys(e$2), m$1 = h(g$1.map((function(o$1, r$2, l$2) {
							return p(e$2[o$1], /^[a-zA-Z_]\w*$/.test(o$1) ? "".concat(t$2, ".").concat(o$1) : "".concat(t$2, "[\"").concat(o$1, "\"]"), n$2 + 1, {
								key: o$1,
								showComma: r$2 !== l$2.length - 1,
								length: y$1,
								type: i$1
							});
						})));
						return [p("{", t$2, n$2, {
							showComma: !1,
							key: l$1,
							index: a$1,
							length: g$1.length,
							type: "objectStart"
						})[0]].concat(m$1, p("}", t$2, n$2, {
							showComma: d$1,
							length: g$1.length,
							type: "objectEnd"
						})[0]);
					}
					return [{
						content: e$2,
						level: n$2,
						key: l$1,
						index: a$1,
						path: t$2,
						showComma: d$1,
						length: y$1,
						type: i$1
					}];
				}
				function h(e$2) {
					if ("function" == typeof Array.prototype.flat) return e$2.flat();
					for (var t$2 = n$1(e$2), o$1 = []; t$2.length;) {
						var r$1 = t$2.shift();
						Array.isArray(r$1) ? t$2.unshift.apply(t$2, n$1(r$1)) : o$1.push(r$1);
					}
					return o$1;
				}
				function f(e$2) {
					var t$2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new WeakMap();
					if (null == e$2) return e$2;
					if (e$2 instanceof Date) return new Date(e$2);
					if (e$2 instanceof RegExp) return new RegExp(e$2);
					if ("object" !== d(e$2)) return e$2;
					if (t$2.get(e$2)) return t$2.get(e$2);
					if (Array.isArray(e$2)) {
						var n$2 = e$2.map((function(e$3) {
							return f(e$3, t$2);
						}));
						return t$2.set(e$2, n$2), n$2;
					}
					var o$1 = {};
					for (var r$1 in e$2) o$1[r$1] = f(e$2[r$1], t$2);
					return t$2.set(e$2, o$1), o$1;
				}
				function y(e$2, t$2) {
					var n$2 = Object.keys(e$2);
					if (Object.getOwnPropertySymbols) {
						var o$1 = Object.getOwnPropertySymbols(e$2);
						t$2 && (o$1 = o$1.filter((function(t$3) {
							return Object.getOwnPropertyDescriptor(e$2, t$3).enumerable;
						}))), n$2.push.apply(n$2, o$1);
					}
					return n$2;
				}
				function v(e$2) {
					for (var t$2 = 1; t$2 < arguments.length; t$2++) {
						var n$2 = null != arguments[t$2] ? arguments[t$2] : {};
						t$2 % 2 ? y(Object(n$2), !0).forEach((function(t$3) {
							l(e$2, t$3, n$2[t$3]);
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e$2, Object.getOwnPropertyDescriptors(n$2)) : y(Object(n$2)).forEach((function(t$3) {
							Object.defineProperty(e$2, t$3, Object.getOwnPropertyDescriptor(n$2, t$3));
						}));
					}
					return e$2;
				}
				var b = {
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
					onBracketsClick: { type: Function },
					onIconClick: { type: Function },
					onValueChange: { type: Function }
				}, g = (0, a.defineComponent)({
					name: "TreeNode",
					props: v(v({}, b), {}, {
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
						"bracketsClick",
						"iconClick",
						"selectedChange",
						"valueChange"
					],
					setup: function(e$2, t$2) {
						var n$2 = t$2.emit, o$1 = (0, a.computed)((function() {
							return s(e$2.node.content);
						})), r$1 = (0, a.computed)((function() {
							return "vjs-value vjs-value-".concat(o$1.value);
						})), l$1 = (0, a.computed)((function() {
							return e$2.showDoubleQuotes ? "\"".concat(e$2.node.key, "\"") : e$2.node.key;
						})), d$1 = (0, a.computed)((function() {
							return "multiple" === e$2.selectableType;
						})), p$1 = (0, a.computed)((function() {
							return "single" === e$2.selectableType;
						})), h$1 = (0, a.computed)((function() {
							return e$2.nodeSelectable(e$2.node) && (d$1.value || p$1.value);
						})), f$1 = (0, a.reactive)({ editing: !1 }), y$1 = function(t$3) {
							var o$2, r$2;
							n$2("valueChange", "null" === (r$2 = null === (o$2 = t$3.target) || void 0 === o$2 ? void 0 : o$2.value) ? null : "undefined" === r$2 ? void 0 : "true" === r$2 || "false" !== r$2 && (r$2[0] + r$2[r$2.length - 1] === "\"\"" || r$2[0] + r$2[r$2.length - 1] === "''" ? r$2.slice(1, -1) : "number" == typeof Number(r$2) && !isNaN(Number(r$2)) || "NaN" === r$2 ? Number(r$2) : r$2), e$2.node.path);
						}, v$1 = (0, a.computed)((function() {
							var t$3, n$3 = null === (t$3 = e$2.node) || void 0 === t$3 ? void 0 : t$3.content;
							return null === n$3 ? n$3 = "null" : void 0 === n$3 && (n$3 = "undefined"), "string" === o$1.value ? "\"".concat(n$3, "\"") : n$3 + "";
						})), b$1 = function() {
							var t$3 = e$2.renderNodeValue;
							return t$3 ? t$3({
								node: e$2.node,
								defaultValue: v$1.value
							}) : v$1.value;
						}, g$1 = function() {
							n$2("bracketsClick", !e$2.collapsed, e$2.node.path);
						}, m$1 = function() {
							n$2("iconClick", !e$2.collapsed, e$2.node.path);
						}, C$1 = function() {
							n$2("selectedChange", e$2.node);
						}, k$1 = function() {
							n$2("nodeClick", e$2.node), h$1.value && e$2.selectOnClickNode && n$2("selectedChange", e$2.node);
						}, w = function(t$3) {
							if (e$2.editable && !f$1.editing) {
								f$1.editing = !0;
								var n$3 = function e$3(n$4) {
									var o$2;
									n$4.target !== t$3.target && (null === (o$2 = n$4.target) || void 0 === o$2 ? void 0 : o$2.parentElement) !== t$3.target && (f$1.editing = !1, document.removeEventListener("click", e$3));
								};
								document.removeEventListener("click", n$3), document.addEventListener("click", n$3);
							}
						};
						return function() {
							var t$3, n$3 = e$2.node;
							return (0, a.createVNode)("div", {
								class: {
									"vjs-tree-node": !0,
									"has-selector": e$2.showSelectController,
									"has-carets": e$2.showIcon,
									"is-highlight": e$2.highlightSelectedNode && e$2.checked
								},
								onClick: k$1,
								style: e$2.style
							}, [
								e$2.showLineNumber && (0, a.createVNode)("span", { class: "vjs-node-index" }, [n$3.id + 1]),
								e$2.showSelectController && h$1.value && "objectEnd" !== n$3.type && "arrayEnd" !== n$3.type && (0, a.createVNode)(i, {
									isMultiple: d$1.value,
									checked: e$2.checked,
									onChange: C$1
								}, null),
								(0, a.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(n$3.level)).map((function(t$4, n$4) {
									return (0, a.createVNode)("div", {
										key: n$4,
										class: {
											"vjs-indent-unit": !0,
											"has-line": e$2.showLine
										}
									}, null);
								})), e$2.showIcon && (0, a.createVNode)(u, {
									nodeType: n$3.type,
									onClick: m$1
								}, null)]),
								n$3.key && (0, a.createVNode)("span", { class: "vjs-key" }, [(t$3 = e$2.renderNodeKey, t$3 ? t$3({
									node: e$2.node,
									defaultKey: l$1.value || ""
								}) : l$1.value), (0, a.createVNode)("span", { class: "vjs-colon" }, [":".concat(e$2.showKeyValueSpace ? " " : "")])]),
								(0, a.createVNode)("span", null, [
									"content" !== n$3.type && n$3.content ? (0, a.createVNode)(c, {
										data: n$3.content.toString(),
										onClick: g$1
									}, null) : (0, a.createVNode)("span", {
										class: r$1.value,
										onClick: !e$2.editable || e$2.editableTrigger && "click" !== e$2.editableTrigger ? void 0 : w,
										onDblclick: e$2.editable && "dblclick" === e$2.editableTrigger ? w : void 0
									}, [e$2.editable && f$1.editing ? (0, a.createVNode)("input", {
										value: v$1.value,
										onChange: y$1,
										style: {
											padding: "3px 8px",
											border: "1px solid #eee",
											boxShadow: "none",
											boxSizing: "border-box",
											borderRadius: 5,
											fontFamily: "inherit"
										}
									}, null) : b$1()]),
									n$3.showComma && (0, a.createVNode)("span", null, [","]),
									e$2.showLength && e$2.collapsed && (0, a.createVNode)("span", { class: "vjs-comment" }, [
										(0, a.createTextVNode)(" // "),
										n$3.length,
										(0, a.createTextVNode)(" items ")
									])
								])
							]);
						};
					}
				});
				function m(e$2, t$2) {
					var n$2 = Object.keys(e$2);
					if (Object.getOwnPropertySymbols) {
						var o$1 = Object.getOwnPropertySymbols(e$2);
						t$2 && (o$1 = o$1.filter((function(t$3) {
							return Object.getOwnPropertyDescriptor(e$2, t$3).enumerable;
						}))), n$2.push.apply(n$2, o$1);
					}
					return n$2;
				}
				function C(e$2) {
					for (var t$2 = 1; t$2 < arguments.length; t$2++) {
						var n$2 = null != arguments[t$2] ? arguments[t$2] : {};
						t$2 % 2 ? m(Object(n$2), !0).forEach((function(t$3) {
							l(e$2, t$3, n$2[t$3]);
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e$2, Object.getOwnPropertyDescriptors(n$2)) : m(Object(n$2)).forEach((function(t$3) {
							Object.defineProperty(e$2, t$3, Object.getOwnPropertyDescriptor(n$2, t$3));
						}));
					}
					return e$2;
				}
				var k = (0, a.defineComponent)({
					name: "Tree",
					props: C(C({}, b), {}, {
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
						rootPath: {
							type: String,
							default: "root"
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
						onSelectedChange: { type: Function }
					}),
					slots: ["renderNodeKey", "renderNodeValue"],
					emits: [
						"nodeClick",
						"bracketsClick",
						"iconClick",
						"selectedChange",
						"update:selectedValue",
						"update:data"
					],
					setup: function(e$2, o$1) {
						var r$1 = o$1.emit, c$1 = o$1.slots, i$1 = (0, a.ref)(), u$1 = (0, a.computed)((function() {
							return p(e$2.data, e$2.rootPath);
						})), d$1 = function(t$2) {
							return u$1.value.reduce((function(n$2, o$2) {
								var r$2, a$1 = o$2.level >= t$2, c$2 = null === (r$2 = e$2.pathCollapsible) || void 0 === r$2 ? void 0 : r$2.call(e$2, o$2);
								return "objectStart" !== o$2.type && "arrayStart" !== o$2.type || !a$1 && !c$2 ? n$2 : C(C({}, n$2), {}, l({}, o$2.path, 1));
							}), {});
						}, s$1 = (0, a.reactive)({
							translateY: 0,
							visibleData: null,
							hiddenPaths: d$1(e$2.deep)
						}), h$1 = (0, a.computed)((function() {
							for (var e$3 = null, t$2 = [], n$2 = u$1.value.length, o$2 = 0; o$2 < n$2; o$2++) {
								var r$2 = C(C({}, u$1.value[o$2]), {}, { id: o$2 }), l$1 = s$1.hiddenPaths[r$2.path];
								if (e$3 && e$3.path === r$2.path) {
									var a$1 = "objectStart" === e$3.type, c$2 = C(C(C({}, r$2), e$3), {}, {
										showComma: r$2.showComma,
										content: a$1 ? "{...}" : "[...]",
										type: a$1 ? "objectCollapsed" : "arrayCollapsed"
									});
									e$3 = null, t$2.push(c$2);
								} else {
									if (l$1 && !e$3) {
										e$3 = r$2;
										continue;
									}
									if (e$3) continue;
									t$2.push(r$2);
								}
							}
							return t$2;
						})), y$1 = (0, a.computed)((function() {
							var t$2 = e$2.selectedValue;
							return t$2 && "multiple" === e$2.selectableType && Array.isArray(t$2) ? t$2 : [t$2];
						})), v$1 = (0, a.computed)((function() {
							return !e$2.selectableType || e$2.selectOnClickNode || e$2.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
						})), b$1 = function() {
							var t$2 = h$1.value;
							if (e$2.virtual) {
								var n$2, o$2 = e$2.height / e$2.itemHeight, r$2 = (null === (n$2 = i$1.value) || void 0 === n$2 ? void 0 : n$2.scrollTop) || 0, l$1 = Math.floor(r$2 / e$2.itemHeight), a$1 = l$1 < 0 ? 0 : l$1 + o$2 > t$2.length ? t$2.length - o$2 : l$1;
								a$1 < 0 && (a$1 = 0);
								var c$2 = a$1 + o$2;
								s$1.translateY = a$1 * e$2.itemHeight, s$1.visibleData = t$2.filter((function(e$3, t$3) {
									return t$3 >= a$1 && t$3 < c$2;
								}));
							} else s$1.visibleData = t$2;
						}, m$1 = function() {
							b$1();
						}, k$1 = function(o$2) {
							var l$1, a$1, c$2 = o$2.path, i$2 = e$2.selectableType;
							if ("multiple" === i$2) {
								var u$2 = y$1.value.findIndex((function(e$3) {
									return e$3 === c$2;
								})), d$2 = n$1(y$1.value);
								-1 !== u$2 ? d$2.splice(u$2, 1) : d$2.push(c$2), r$1("update:selectedValue", d$2), r$1("selectedChange", d$2, n$1(y$1.value));
							} else if ("single" === i$2 && y$1.value[0] !== c$2) {
								var s$2 = (l$1 = y$1.value, a$1 = 1, function(e$3) {
									if (Array.isArray(e$3)) return e$3;
								}(l$1) || function(e$3, t$2) {
									var n$2 = null == e$3 ? null : "undefined" != typeof Symbol && e$3[Symbol.iterator] || e$3["@@iterator"];
									if (null != n$2) {
										var o$3, r$2, l$2 = [], a$2 = !0, c$3 = !1;
										try {
											for (n$2 = n$2.call(e$3); !(a$2 = (o$3 = n$2.next()).done) && (l$2.push(o$3.value), !t$2 || l$2.length !== t$2); a$2 = !0);
										} catch (e$4) {
											c$3 = !0, r$2 = e$4;
										} finally {
											try {
												a$2 || null == n$2.return || n$2.return();
											} finally {
												if (c$3) throw r$2;
											}
										}
										return l$2;
									}
								}(l$1, a$1) || t$1(l$1, a$1) || function() {
									throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
								}())[0], p$1 = c$2;
								r$1("update:selectedValue", p$1), r$1("selectedChange", p$1, s$2);
							}
						}, w = function(e$3) {
							r$1("nodeClick", e$3);
						}, N = function(e$3, t$2) {
							if (e$3) s$1.hiddenPaths = C(C({}, s$1.hiddenPaths), {}, l({}, t$2, 1));
							else {
								var n$2 = C({}, s$1.hiddenPaths);
								delete n$2[t$2], s$1.hiddenPaths = n$2;
							}
						}, j = function(t$2, n$2) {
							e$2.collapsedOnClickBrackets && N(t$2, n$2), r$1("bracketsClick", t$2);
						}, S = function(e$3, t$2) {
							N(e$3, t$2), r$1("iconClick", e$3);
						}, O = function(t$2, n$2) {
							var o$2 = f(e$2.data), l$1 = e$2.rootPath;
							new Function("data", "val", "data".concat(n$2.slice(l$1.length), "=val"))(o$2, t$2), r$1("update:data", o$2);
						};
						return (0, a.watchEffect)((function() {
							v$1.value && function(e$3) {
								throw new Error("[VueJSONPretty] ".concat(e$3));
							}(v$1.value);
						})), (0, a.watchEffect)((function() {
							h$1.value && b$1();
						})), (0, a.watch)((function() {
							return e$2.deep;
						}), (function(e$3) {
							e$3 && (s$1.hiddenPaths = d$1(e$3));
						})), function() {
							var t$2, n$2, o$2 = null !== (t$2 = e$2.renderNodeKey) && void 0 !== t$2 ? t$2 : c$1.renderNodeKey, r$2 = null !== (n$2 = e$2.renderNodeValue) && void 0 !== n$2 ? n$2 : c$1.renderNodeValue, l$1 = s$1.visibleData && s$1.visibleData.map((function(t$3) {
								return (0, a.createVNode)(g, {
									key: t$3.id,
									node: t$3,
									collapsed: !!s$1.hiddenPaths[t$3.path],
									showDoubleQuotes: e$2.showDoubleQuotes,
									showLength: e$2.showLength,
									checked: y$1.value.includes(t$3.path),
									selectableType: e$2.selectableType,
									showLine: e$2.showLine,
									showLineNumber: e$2.showLineNumber,
									showSelectController: e$2.showSelectController,
									selectOnClickNode: e$2.selectOnClickNode,
									nodeSelectable: e$2.nodeSelectable,
									highlightSelectedNode: e$2.highlightSelectedNode,
									editable: e$2.editable,
									editableTrigger: e$2.editableTrigger,
									showIcon: e$2.showIcon,
									showKeyValueSpace: e$2.showKeyValueSpace,
									renderNodeKey: o$2,
									renderNodeValue: r$2,
									onNodeClick: w,
									onBracketsClick: j,
									onIconClick: S,
									onSelectedChange: k$1,
									onValueChange: O,
									style: e$2.itemHeight && 20 !== e$2.itemHeight ? { lineHeight: "".concat(e$2.itemHeight, "px") } : {}
								}, null);
							}));
							return (0, a.createVNode)("div", {
								ref: i$1,
								class: {
									"vjs-tree": !0,
									"is-virtual": e$2.virtual
								},
								onScroll: e$2.virtual ? m$1 : void 0,
								style: e$2.showLineNumber ? C({ paddingLeft: "".concat(12 * Number(u$1.value.length.toString().length), "px") }, e$2.style) : e$2.style
							}, [e$2.virtual ? (0, a.createVNode)("div", {
								class: "vjs-tree-list",
								style: { height: "".concat(e$2.height, "px") }
							}, [(0, a.createVNode)("div", {
								class: "vjs-tree-list-holder",
								style: { height: "".concat(h$1.value.length * e$2.itemHeight, "px") }
							}, [(0, a.createVNode)("div", {
								class: "vjs-tree-list-holder-inner",
								style: { transform: "translateY(".concat(s$1.translateY, "px)") }
							}, [l$1])])]) : l$1]);
						};
					}
				});
			}(), r;
		}();
	}));
}));
export { require_vue_json_pretty as t };

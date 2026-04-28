import { o as __toESM, t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ls as sleep, z as INSECURE_CONNECTION_WARNING } from "./constants-CjIW4CHX.js";
import { T as defineStore, b as INSTANCE_VERSION_HEADER, c as makeRestApiRequest, d as request, l as patch, m as axios, o as get, t as useRootStore, u as post, y as INSTANCE_ID_HEADER } from "./useRootStore-D8wbz-kO.js";
//#region ../@n8n/stores/dist/constants2.mjs
var STORES = {
	COMMUNITY_NODES: "communityNodes",
	ROOT: "root",
	SETTINGS: "settings",
	UI: "ui",
	USERS: "users",
	WORKFLOWS: "workflows",
	WORKFLOWS_LIST: "workflowsList",
	WORKFLOWS_V2: "workflowsV2",
	WORKFLOWS_EE: "workflowsEE",
	WORKFLOW_DOCUMENTS: "workflowDocuments",
	EXECUTIONS: "executions",
	NDV: "ndv",
	TEMPLATES: "templates",
	NODE_TYPES: "nodeTypes",
	CREDENTIALS: "credentials",
	TAGS: "tags",
	ANNOTATION_TAGS: "annotationTags",
	VERSIONS: "versions",
	NODE_CREATOR: "nodeCreator",
	WEBHOOKS: "webhooks",
	HISTORY: "history",
	CLOUD_PLAN: "cloudPlan",
	RBAC: "rbac",
	PUSH: "push",
	COLLABORATION: "collaboration",
	ASSISTANT: "assistant",
	BUILDER: "builder",
	CHAT_PANEL: "chatPanel",
	CHAT_PANEL_STATE: "chatPanelState",
	BECOME_TEMPLATE_CREATOR: "becomeTemplateCreator",
	PROJECTS: "projects",
	API_KEYS: "apiKeys",
	EVALUATION: "evaluation",
	FOLDERS: "folders",
	MODULES: "modules",
	FOCUS_PANEL: "focusPanel",
	WORKFLOW_STATE: "workflowState",
	AI_TEMPLATES_STARTER_COLLECTION: "aiTemplatesStarterCollection",
	PERSONALIZED_TEMPLATES: "personalizedTemplates",
	EXPERIMENT_READY_TO_RUN_WORKFLOWS: "readyToRunWorkflows",
	EXPERIMENT_READY_TO_RUN_WORKFLOWS_V2: "readyToRunWorkflowsV2",
	EXPERIMENT_TEMPLATE_RECO_V2: "templateRecoV2",
	PERSONALIZED_TEMPLATES_V3: "personalizedTemplatesV3",
	READY_TO_RUN: "readyToRun",
	TEMPLATES_DATA_QUALITY: "templatesDataQuality",
	BANNERS: "banners",
	CONSENT: "consent",
	CHAT_HUB: "chatHub",
	CHAT_HUB_PANEL: "chatHubPanel",
	EXPERIMENT_EMPTY_STATE_BUILDER_PROMPT: "emptyStateBuilderPrompt",
	EXPERIMENT_CREDENTIALS_APP_SELECTION: "credentialsAppSelection",
	SETUP_PANEL: "setupPanel",
	FOCUSED_NODES: "focusedNodes",
	FAVORITES: "favorites",
	AI_GATEWAY: "aiGateway"
};
//#endregion
//#region ../../../node_modules/.pnpm/bowser@2.11.0/node_modules/bowser/es5.js
var require_es5 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, t) {
		"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.bowser = t() : e.bowser = t();
	})(exports, (function() {
		return function(e) {
			var t = {};
			function r(n) {
				if (t[n]) return t[n].exports;
				var i = t[n] = {
					i: n,
					l: !1,
					exports: {}
				};
				return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
			}
			return r.m = e, r.c = t, r.d = function(e, t, n) {
				r.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: n
				});
			}, r.r = function(e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
			}, r.t = function(e, t) {
				if (1 & t && (e = r(e)), 8 & t) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var n = Object.create(null);
				if (r.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e) for (var i in e) r.d(n, i, function(t) {
					return e[t];
				}.bind(null, i));
				return n;
			}, r.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default;
				} : function() {
					return e;
				};
				return r.d(t, "a", t), t;
			}, r.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, r.p = "", r(r.s = 90);
		}({
			17: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.default = void 0;
				var n = r(18);
				t.default = function() {
					function e() {}
					return e.getFirstMatch = function(e, t) {
						var r = t.match(e);
						return r && r.length > 0 && r[1] || "";
					}, e.getSecondMatch = function(e, t) {
						var r = t.match(e);
						return r && r.length > 1 && r[2] || "";
					}, e.matchAndReturnConst = function(e, t, r) {
						if (e.test(t)) return r;
					}, e.getWindowsVersionName = function(e) {
						switch (e) {
							case "NT": return "NT";
							case "XP": return "XP";
							case "NT 5.0": return "2000";
							case "NT 5.1": return "XP";
							case "NT 5.2": return "2003";
							case "NT 6.0": return "Vista";
							case "NT 6.1": return "7";
							case "NT 6.2": return "8";
							case "NT 6.3": return "8.1";
							case "NT 10.0": return "10";
							default: return;
						}
					}, e.getMacOSVersionName = function(e) {
						var t = e.split(".").splice(0, 2).map((function(e) {
							return parseInt(e, 10) || 0;
						}));
						if (t.push(0), 10 === t[0]) switch (t[1]) {
							case 5: return "Leopard";
							case 6: return "Snow Leopard";
							case 7: return "Lion";
							case 8: return "Mountain Lion";
							case 9: return "Mavericks";
							case 10: return "Yosemite";
							case 11: return "El Capitan";
							case 12: return "Sierra";
							case 13: return "High Sierra";
							case 14: return "Mojave";
							case 15: return "Catalina";
							default: return;
						}
					}, e.getAndroidVersionName = function(e) {
						var t = e.split(".").splice(0, 2).map((function(e) {
							return parseInt(e, 10) || 0;
						}));
						if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0;
					}, e.getVersionPrecision = function(e) {
						return e.split(".").length;
					}, e.compareVersions = function(t, r, n) {
						void 0 === n && (n = !1);
						var i = e.getVersionPrecision(t), s = e.getVersionPrecision(r), a = Math.max(i, s), o = 0, u = e.map([t, r], (function(t) {
							var r = a - e.getVersionPrecision(t), n = t + new Array(r + 1).join(".0");
							return e.map(n.split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e;
							})).reverse();
						}));
						for (n && (o = a - Math.min(i, s)), a -= 1; a >= o;) {
							if (u[0][a] > u[1][a]) return 1;
							if (u[0][a] === u[1][a]) {
								if (a === o) return 0;
								a -= 1;
							} else if (u[0][a] < u[1][a]) return -1;
						}
					}, e.map = function(e, t) {
						var r, n = [];
						if (Array.prototype.map) return Array.prototype.map.call(e, t);
						for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
						return n;
					}, e.find = function(e, t) {
						var r, n;
						if (Array.prototype.find) return Array.prototype.find.call(e, t);
						for (r = 0, n = e.length; r < n; r += 1) {
							var i = e[r];
							if (t(i, r)) return i;
						}
					}, e.assign = function(e) {
						for (var t, r, n = e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) s[a - 1] = arguments[a];
						if (Object.assign) return Object.assign.apply(Object, [e].concat(s));
						var o = function() {
							var e = s[t];
							"object" == typeof e && null !== e && Object.keys(e).forEach((function(t) {
								n[t] = e[t];
							}));
						};
						for (t = 0, r = s.length; t < r; t += 1) o();
						return e;
					}, e.getBrowserAlias = function(e) {
						return n.BROWSER_ALIASES_MAP[e];
					}, e.getBrowserTypeByAlias = function(e) {
						return n.BROWSER_MAP[e] || "";
					}, e;
				}(), e.exports = t.default;
			},
			18: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0;
				t.BROWSER_ALIASES_MAP = {
					"Amazon Silk": "amazon_silk",
					"Android Browser": "android",
					Bada: "bada",
					BlackBerry: "blackberry",
					Chrome: "chrome",
					Chromium: "chromium",
					Electron: "electron",
					Epiphany: "epiphany",
					Firefox: "firefox",
					Focus: "focus",
					Generic: "generic",
					"Google Search": "google_search",
					Googlebot: "googlebot",
					"Internet Explorer": "ie",
					"K-Meleon": "k_meleon",
					Maxthon: "maxthon",
					"Microsoft Edge": "edge",
					"MZ Browser": "mz",
					"NAVER Whale Browser": "naver",
					Opera: "opera",
					"Opera Coast": "opera_coast",
					PhantomJS: "phantomjs",
					Puffin: "puffin",
					QupZilla: "qupzilla",
					QQ: "qq",
					QQLite: "qqlite",
					Safari: "safari",
					Sailfish: "sailfish",
					"Samsung Internet for Android": "samsung_internet",
					SeaMonkey: "seamonkey",
					Sleipnir: "sleipnir",
					Swing: "swing",
					Tizen: "tizen",
					"UC Browser": "uc",
					Vivaldi: "vivaldi",
					"WebOS Browser": "webos",
					WeChat: "wechat",
					"Yandex Browser": "yandex",
					Roku: "roku"
				};
				t.BROWSER_MAP = {
					amazon_silk: "Amazon Silk",
					android: "Android Browser",
					bada: "Bada",
					blackberry: "BlackBerry",
					chrome: "Chrome",
					chromium: "Chromium",
					electron: "Electron",
					epiphany: "Epiphany",
					firefox: "Firefox",
					focus: "Focus",
					generic: "Generic",
					googlebot: "Googlebot",
					google_search: "Google Search",
					ie: "Internet Explorer",
					k_meleon: "K-Meleon",
					maxthon: "Maxthon",
					edge: "Microsoft Edge",
					mz: "MZ Browser",
					naver: "NAVER Whale Browser",
					opera: "Opera",
					opera_coast: "Opera Coast",
					phantomjs: "PhantomJS",
					puffin: "Puffin",
					qupzilla: "QupZilla",
					qq: "QQ Browser",
					qqlite: "QQ Browser Lite",
					safari: "Safari",
					sailfish: "Sailfish",
					samsung_internet: "Samsung Internet for Android",
					seamonkey: "SeaMonkey",
					sleipnir: "Sleipnir",
					swing: "Swing",
					tizen: "Tizen",
					uc: "UC Browser",
					vivaldi: "Vivaldi",
					webos: "WebOS Browser",
					wechat: "WeChat",
					yandex: "Yandex Browser"
				};
				t.PLATFORMS_MAP = {
					tablet: "tablet",
					mobile: "mobile",
					desktop: "desktop",
					tv: "tv"
				};
				t.OS_MAP = {
					WindowsPhone: "Windows Phone",
					Windows: "Windows",
					MacOS: "macOS",
					iOS: "iOS",
					Android: "Android",
					WebOS: "WebOS",
					BlackBerry: "BlackBerry",
					Bada: "Bada",
					Tizen: "Tizen",
					Linux: "Linux",
					ChromeOS: "Chrome OS",
					PlayStation4: "PlayStation 4",
					Roku: "Roku"
				};
				t.ENGINE_MAP = {
					EdgeHTML: "EdgeHTML",
					Blink: "Blink",
					Trident: "Trident",
					Presto: "Presto",
					Gecko: "Gecko",
					WebKit: "WebKit"
				};
			},
			90: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.default = void 0;
				var n, i = (n = r(91)) && n.__esModule ? n : { default: n }, s = r(18);
				function a(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
					}
				}
				t.default = function() {
					function e() {}
					var t, r, n;
					return e.getParser = function(e, t) {
						if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
						return new i.default(e, t);
					}, e.parse = function(e) {
						return new i.default(e).getResult();
					}, t = e, n = [
						{
							key: "BROWSER_MAP",
							get: function() {
								return s.BROWSER_MAP;
							}
						},
						{
							key: "ENGINE_MAP",
							get: function() {
								return s.ENGINE_MAP;
							}
						},
						{
							key: "OS_MAP",
							get: function() {
								return s.OS_MAP;
							}
						},
						{
							key: "PLATFORMS_MAP",
							get: function() {
								return s.PLATFORMS_MAP;
							}
						}
					], (r = null) && a(t.prototype, r), n && a(t, n), e;
				}(), e.exports = t.default;
			},
			91: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.default = void 0;
				var n = u(r(92)), i = u(r(93)), s = u(r(94)), a = u(r(95)), o = u(r(17));
				function u(e) {
					return e && e.__esModule ? e : { default: e };
				}
				t.default = function() {
					function e(e, t) {
						if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
						this._ua = e, this.parsedResult = {}, !0 !== t && this.parse();
					}
					var t = e.prototype;
					return t.getUA = function() {
						return this._ua;
					}, t.test = function(e) {
						return e.test(this._ua);
					}, t.parseBrowser = function() {
						var e = this;
						this.parsedResult.browser = {};
						var t = o.default.find(n.default, (function(t) {
							if ("function" == typeof t.test) return t.test(e);
							if (t.test instanceof Array) return t.test.some((function(t) {
								return e.test(t);
							}));
							throw new Error("Browser's test function is not valid");
						}));
						return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
					}, t.getBrowser = function() {
						return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
					}, t.getBrowserName = function(e) {
						return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
					}, t.getBrowserVersion = function() {
						return this.getBrowser().version;
					}, t.getOS = function() {
						return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
					}, t.parseOS = function() {
						var e = this;
						this.parsedResult.os = {};
						var t = o.default.find(i.default, (function(t) {
							if ("function" == typeof t.test) return t.test(e);
							if (t.test instanceof Array) return t.test.some((function(t) {
								return e.test(t);
							}));
							throw new Error("Browser's test function is not valid");
						}));
						return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
					}, t.getOSName = function(e) {
						var t = this.getOS().name;
						return e ? String(t).toLowerCase() || "" : t || "";
					}, t.getOSVersion = function() {
						return this.getOS().version;
					}, t.getPlatform = function() {
						return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
					}, t.getPlatformType = function(e) {
						void 0 === e && (e = !1);
						var t = this.getPlatform().type;
						return e ? String(t).toLowerCase() || "" : t || "";
					}, t.parsePlatform = function() {
						var e = this;
						this.parsedResult.platform = {};
						var t = o.default.find(s.default, (function(t) {
							if ("function" == typeof t.test) return t.test(e);
							if (t.test instanceof Array) return t.test.some((function(t) {
								return e.test(t);
							}));
							throw new Error("Browser's test function is not valid");
						}));
						return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
					}, t.getEngine = function() {
						return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
					}, t.getEngineName = function(e) {
						return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
					}, t.parseEngine = function() {
						var e = this;
						this.parsedResult.engine = {};
						var t = o.default.find(a.default, (function(t) {
							if ("function" == typeof t.test) return t.test(e);
							if (t.test instanceof Array) return t.test.some((function(t) {
								return e.test(t);
							}));
							throw new Error("Browser's test function is not valid");
						}));
						return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
					}, t.parse = function() {
						return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
					}, t.getResult = function() {
						return o.default.assign({}, this.parsedResult);
					}, t.satisfies = function(e) {
						var t = this, r = {}, n = 0, i = {}, s = 0;
						if (Object.keys(e).forEach((function(t) {
							var a = e[t];
							"string" == typeof a ? (i[t] = a, s += 1) : "object" == typeof a && (r[t] = a, n += 1);
						})), n > 0) {
							var a = Object.keys(r), u = o.default.find(a, (function(e) {
								return t.isOS(e);
							}));
							if (u) {
								var d = this.satisfies(r[u]);
								if (void 0 !== d) return d;
							}
							var c = o.default.find(a, (function(e) {
								return t.isPlatform(e);
							}));
							if (c) {
								var f = this.satisfies(r[c]);
								if (void 0 !== f) return f;
							}
						}
						if (s > 0) {
							var l = Object.keys(i), h = o.default.find(l, (function(e) {
								return t.isBrowser(e, !0);
							}));
							if (void 0 !== h) return this.compareVersion(i[h]);
						}
					}, t.isBrowser = function(e, t) {
						void 0 === t && (t = !1);
						var r = this.getBrowserName().toLowerCase(), n = e.toLowerCase(), i = o.default.getBrowserTypeByAlias(n);
						return t && i && (n = i.toLowerCase()), n === r;
					}, t.compareVersion = function(e) {
						var t = [0], r = e, n = !1, i = this.getBrowserVersion();
						if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(o.default.compareVersions(i, r, n)) > -1;
					}, t.isOS = function(e) {
						return this.getOSName(!0) === String(e).toLowerCase();
					}, t.isPlatform = function(e) {
						return this.getPlatformType(!0) === String(e).toLowerCase();
					}, t.isEngine = function(e) {
						return this.getEngineName(!0) === String(e).toLowerCase();
					}, t.is = function(e, t) {
						return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
					}, t.some = function(e) {
						var t = this;
						return void 0 === e && (e = []), e.some((function(e) {
							return t.is(e);
						}));
					}, e;
				}(), e.exports = t.default;
			},
			92: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.default = void 0;
				var n, i = (n = r(17)) && n.__esModule ? n : { default: n };
				var s = /version\/(\d+(\.?_?\d+)+)/i;
				t.default = [
					{
						test: [/googlebot/i],
						describe: function(e) {
							var t = { name: "Googlebot" }, r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/opera/i],
						describe: function(e) {
							var t = { name: "Opera" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/opr\/|opios/i],
						describe: function(e) {
							var t = { name: "Opera" }, r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/SamsungBrowser/i],
						describe: function(e) {
							var t = { name: "Samsung Internet for Android" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/Whale/i],
						describe: function(e) {
							var t = { name: "NAVER Whale Browser" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/MZBrowser/i],
						describe: function(e) {
							var t = { name: "MZ Browser" }, r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/focus/i],
						describe: function(e) {
							var t = { name: "Focus" }, r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/swing/i],
						describe: function(e) {
							var t = { name: "Swing" }, r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/coast/i],
						describe: function(e) {
							var t = { name: "Opera Coast" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/opt\/\d+(?:.?_?\d+)+/i],
						describe: function(e) {
							var t = { name: "Opera Touch" }, r = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/yabrowser/i],
						describe: function(e) {
							var t = { name: "Yandex Browser" }, r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/ucbrowser/i],
						describe: function(e) {
							var t = { name: "UC Browser" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/Maxthon|mxios/i],
						describe: function(e) {
							var t = { name: "Maxthon" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/epiphany/i],
						describe: function(e) {
							var t = { name: "Epiphany" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/puffin/i],
						describe: function(e) {
							var t = { name: "Puffin" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/sleipnir/i],
						describe: function(e) {
							var t = { name: "Sleipnir" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/k-meleon/i],
						describe: function(e) {
							var t = { name: "K-Meleon" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/micromessenger/i],
						describe: function(e) {
							var t = { name: "WeChat" }, r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/qqbrowser/i],
						describe: function(e) {
							var t = { name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser" }, r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/msie|trident/i],
						describe: function(e) {
							var t = { name: "Internet Explorer" }, r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/\sedg\//i],
						describe: function(e) {
							var t = { name: "Microsoft Edge" }, r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/edg([ea]|ios)/i],
						describe: function(e) {
							var t = { name: "Microsoft Edge" }, r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/vivaldi/i],
						describe: function(e) {
							var t = { name: "Vivaldi" }, r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/seamonkey/i],
						describe: function(e) {
							var t = { name: "SeaMonkey" }, r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/sailfish/i],
						describe: function(e) {
							var t = { name: "Sailfish" }, r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/silk/i],
						describe: function(e) {
							var t = { name: "Amazon Silk" }, r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/phantom/i],
						describe: function(e) {
							var t = { name: "PhantomJS" }, r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/slimerjs/i],
						describe: function(e) {
							var t = { name: "SlimerJS" }, r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
						describe: function(e) {
							var t = { name: "BlackBerry" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/(web|hpw)[o0]s/i],
						describe: function(e) {
							var t = { name: "WebOS Browser" }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/bada/i],
						describe: function(e) {
							var t = { name: "Bada" }, r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/tizen/i],
						describe: function(e) {
							var t = { name: "Tizen" }, r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/qupzilla/i],
						describe: function(e) {
							var t = { name: "QupZilla" }, r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/firefox|iceweasel|fxios/i],
						describe: function(e) {
							var t = { name: "Firefox" }, r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/electron/i],
						describe: function(e) {
							var t = { name: "Electron" }, r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/MiuiBrowser/i],
						describe: function(e) {
							var t = { name: "Miui" }, r = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/chromium/i],
						describe: function(e) {
							var t = { name: "Chromium" }, r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/chrome|crios|crmo/i],
						describe: function(e) {
							var t = { name: "Chrome" }, r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/GSA/i],
						describe: function(e) {
							var t = { name: "Google Search" }, r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: function(e) {
							var t = !e.test(/like android/i), r = e.test(/android/i);
							return t && r;
						},
						describe: function(e) {
							var t = { name: "Android Browser" }, r = i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/playstation 4/i],
						describe: function(e) {
							var t = { name: "PlayStation 4" }, r = i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/safari|applewebkit/i],
						describe: function(e) {
							var t = { name: "Safari" }, r = i.default.getFirstMatch(s, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/.*/i],
						describe: function(e) {
							var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
							return {
								name: i.default.getFirstMatch(t, e),
								version: i.default.getSecondMatch(t, e)
							};
						}
					}
				], e.exports = t.default;
			},
			93: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.default = void 0;
				var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
				t.default = [
					{
						test: [/Roku\/DVP/],
						describe: function(e) {
							var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
							return {
								name: s.OS_MAP.Roku,
								version: t
							};
						}
					},
					{
						test: [/windows phone/i],
						describe: function(e) {
							var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
							return {
								name: s.OS_MAP.WindowsPhone,
								version: t
							};
						}
					},
					{
						test: [/windows /i],
						describe: function(e) {
							var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), r = i.default.getWindowsVersionName(t);
							return {
								name: s.OS_MAP.Windows,
								version: t,
								versionName: r
							};
						}
					},
					{
						test: [/Macintosh(.*?) FxiOS(.*?)\//],
						describe: function(e) {
							var t = { name: s.OS_MAP.iOS }, r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/macintosh/i],
						describe: function(e) {
							var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."), r = i.default.getMacOSVersionName(t), n = {
								name: s.OS_MAP.MacOS,
								version: t
							};
							return r && (n.versionName = r), n;
						}
					},
					{
						test: [/(ipod|iphone|ipad)/i],
						describe: function(e) {
							var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
							return {
								name: s.OS_MAP.iOS,
								version: t
							};
						}
					},
					{
						test: function(e) {
							var t = !e.test(/like android/i), r = e.test(/android/i);
							return t && r;
						},
						describe: function(e) {
							var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), r = i.default.getAndroidVersionName(t), n = {
								name: s.OS_MAP.Android,
								version: t
							};
							return r && (n.versionName = r), n;
						}
					},
					{
						test: [/(web|hpw)[o0]s/i],
						describe: function(e) {
							var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), r = { name: s.OS_MAP.WebOS };
							return t && t.length && (r.version = t), r;
						}
					},
					{
						test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
						describe: function(e) {
							var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
							return {
								name: s.OS_MAP.BlackBerry,
								version: t
							};
						}
					},
					{
						test: [/bada/i],
						describe: function(e) {
							var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
							return {
								name: s.OS_MAP.Bada,
								version: t
							};
						}
					},
					{
						test: [/tizen/i],
						describe: function(e) {
							var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
							return {
								name: s.OS_MAP.Tizen,
								version: t
							};
						}
					},
					{
						test: [/linux/i],
						describe: function() {
							return { name: s.OS_MAP.Linux };
						}
					},
					{
						test: [/CrOS/],
						describe: function() {
							return { name: s.OS_MAP.ChromeOS };
						}
					},
					{
						test: [/PlayStation 4/],
						describe: function(e) {
							var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
							return {
								name: s.OS_MAP.PlayStation4,
								version: t
							};
						}
					}
				], e.exports = t.default;
			},
			94: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.default = void 0;
				var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
				t.default = [
					{
						test: [/googlebot/i],
						describe: function() {
							return {
								type: "bot",
								vendor: "Google"
							};
						}
					},
					{
						test: [/huawei/i],
						describe: function(e) {
							var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova", r = {
								type: s.PLATFORMS_MAP.mobile,
								vendor: "Huawei"
							};
							return t && (r.model = t), r;
						}
					},
					{
						test: [/nexus\s*(?:7|8|9|10).*/i],
						describe: function() {
							return {
								type: s.PLATFORMS_MAP.tablet,
								vendor: "Nexus"
							};
						}
					},
					{
						test: [/ipad/i],
						describe: function() {
							return {
								type: s.PLATFORMS_MAP.tablet,
								vendor: "Apple",
								model: "iPad"
							};
						}
					},
					{
						test: [/Macintosh(.*?) FxiOS(.*?)\//],
						describe: function() {
							return {
								type: s.PLATFORMS_MAP.tablet,
								vendor: "Apple",
								model: "iPad"
							};
						}
					},
					{
						test: [/kftt build/i],
						describe: function() {
							return {
								type: s.PLATFORMS_MAP.tablet,
								vendor: "Amazon",
								model: "Kindle Fire HD 7"
							};
						}
					},
					{
						test: [/silk/i],
						describe: function() {
							return {
								type: s.PLATFORMS_MAP.tablet,
								vendor: "Amazon"
							};
						}
					},
					{
						test: [/tablet(?! pc)/i],
						describe: function() {
							return { type: s.PLATFORMS_MAP.tablet };
						}
					},
					{
						test: function(e) {
							var t = e.test(/ipod|iphone/i), r = e.test(/like (ipod|iphone)/i);
							return t && !r;
						},
						describe: function(e) {
							var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
							return {
								type: s.PLATFORMS_MAP.mobile,
								vendor: "Apple",
								model: t
							};
						}
					},
					{
						test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
						describe: function() {
							return {
								type: s.PLATFORMS_MAP.mobile,
								vendor: "Nexus"
							};
						}
					},
					{
						test: [/[^-]mobi/i],
						describe: function() {
							return { type: s.PLATFORMS_MAP.mobile };
						}
					},
					{
						test: function(e) {
							return "blackberry" === e.getBrowserName(!0);
						},
						describe: function() {
							return {
								type: s.PLATFORMS_MAP.mobile,
								vendor: "BlackBerry"
							};
						}
					},
					{
						test: function(e) {
							return "bada" === e.getBrowserName(!0);
						},
						describe: function() {
							return { type: s.PLATFORMS_MAP.mobile };
						}
					},
					{
						test: function(e) {
							return "windows phone" === e.getBrowserName();
						},
						describe: function() {
							return {
								type: s.PLATFORMS_MAP.mobile,
								vendor: "Microsoft"
							};
						}
					},
					{
						test: function(e) {
							var t = Number(String(e.getOSVersion()).split(".")[0]);
							return "android" === e.getOSName(!0) && t >= 3;
						},
						describe: function() {
							return { type: s.PLATFORMS_MAP.tablet };
						}
					},
					{
						test: function(e) {
							return "android" === e.getOSName(!0);
						},
						describe: function() {
							return { type: s.PLATFORMS_MAP.mobile };
						}
					},
					{
						test: function(e) {
							return "macos" === e.getOSName(!0);
						},
						describe: function() {
							return {
								type: s.PLATFORMS_MAP.desktop,
								vendor: "Apple"
							};
						}
					},
					{
						test: function(e) {
							return "windows" === e.getOSName(!0);
						},
						describe: function() {
							return { type: s.PLATFORMS_MAP.desktop };
						}
					},
					{
						test: function(e) {
							return "linux" === e.getOSName(!0);
						},
						describe: function() {
							return { type: s.PLATFORMS_MAP.desktop };
						}
					},
					{
						test: function(e) {
							return "playstation 4" === e.getOSName(!0);
						},
						describe: function() {
							return { type: s.PLATFORMS_MAP.tv };
						}
					},
					{
						test: function(e) {
							return "roku" === e.getOSName(!0);
						},
						describe: function() {
							return { type: s.PLATFORMS_MAP.tv };
						}
					}
				], e.exports = t.default;
			},
			95: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.default = void 0;
				var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
				t.default = [
					{
						test: function(e) {
							return "microsoft edge" === e.getBrowserName(!0);
						},
						describe: function(e) {
							if (/\sedg\//i.test(e)) return { name: s.ENGINE_MAP.Blink };
							var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
							return {
								name: s.ENGINE_MAP.EdgeHTML,
								version: t
							};
						}
					},
					{
						test: [/trident/i],
						describe: function(e) {
							var t = { name: s.ENGINE_MAP.Trident }, r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: function(e) {
							return e.test(/presto/i);
						},
						describe: function(e) {
							var t = { name: s.ENGINE_MAP.Presto }, r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: function(e) {
							var t = e.test(/gecko/i), r = e.test(/like gecko/i);
							return t && !r;
						},
						describe: function(e) {
							var t = { name: s.ENGINE_MAP.Gecko }, r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					},
					{
						test: [/(apple)?webkit\/537\.36/i],
						describe: function() {
							return { name: s.ENGINE_MAP.Blink };
						}
					},
					{
						test: [/(apple)?webkit/i],
						describe: function(e) {
							var t = { name: s.ENGINE_MAP.WebKit }, r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
							return r && (t.version = r), t;
						}
					}
				], e.exports = t.default;
			}
		});
	}));
}));
//#endregion
//#region ../@n8n/rest-api-client/dist/events.mjs
async function sessionStarted(context) {
	return await makeRestApiRequest(context, "GET", "/events/session-started");
}
//#endregion
//#region ../@n8n/rest-api-client/dist/settings.mjs
async function getSettings(context) {
	return await makeRestApiRequest(context, "GET", "/settings");
}
//#endregion
//#region ../@n8n/rest-api-client/dist/module-settings.mjs
async function getModuleSettings(context) {
	return await makeRestApiRequest(context, "GET", "/module-settings");
}
//#endregion
//#region ../@n8n/rest-api-client/dist/ai-usage.mjs
async function updateAiUsageSettings(context, data) {
	return await makeRestApiRequest(context, "POST", "/ai/usage-settings", data);
}
//#endregion
//#region ../@n8n/rest-api-client/dist/templates.mjs
function stringifyArray(arr) {
	return arr.join(",");
}
async function testHealthEndpoint(apiEndpoint) {
	return await get(apiEndpoint, "/health");
}
async function getCategories(apiEndpoint, headers) {
	return await get(apiEndpoint, "/templates/categories", void 0, headers);
}
async function getCollections(apiEndpoint, query, headers) {
	return await get(apiEndpoint, "/templates/collections", {
		category: query.categories,
		search: query.search
	}, headers);
}
async function getWorkflows(apiEndpoint, query, headers) {
	const { apps, sort, combineWith, categories, nodes, ...restQuery } = query;
	return await get(apiEndpoint, "/templates/search", {
		...restQuery,
		category: stringifyArray(categories),
		...apps && { apps: stringifyArray(apps) },
		...nodes && { nodes: stringifyArray(nodes) },
		...sort && { sort },
		...combineWith && { combineWith }
	}, headers);
}
async function getCollectionById(apiEndpoint, collectionId, headers) {
	return await get(apiEndpoint, `/templates/collections/${collectionId}`, void 0, headers);
}
async function getTemplateById(apiEndpoint, templateId, headers) {
	return await get(apiEndpoint, `/templates/workflows/${templateId}`, void 0, headers);
}
async function getWorkflowTemplate(apiEndpoint, templateId, headers) {
	return await get(apiEndpoint, `/workflows/templates/${templateId}`, void 0, headers);
}
//#endregion
//#region src/Interface.ts
var UserManagementAuthenticationMethod = /* @__PURE__ */ function(UserManagementAuthenticationMethod) {
	UserManagementAuthenticationMethod["Email"] = "email";
	UserManagementAuthenticationMethod["Ldap"] = "ldap";
	UserManagementAuthenticationMethod["Saml"] = "saml";
	UserManagementAuthenticationMethod["Oidc"] = "oidc";
	return UserManagementAuthenticationMethod;
}({});
//#endregion
//#region ../@n8n/rest-api-client/dist/api-keys.mjs
async function getApiKeys(context) {
	return await makeRestApiRequest(context, "GET", "/api-keys");
}
async function getApiKeyScopes(context) {
	return await makeRestApiRequest(context, "GET", "/api-keys/scopes");
}
async function createApiKey(context, payload) {
	return await makeRestApiRequest(context, "POST", "/api-keys", payload);
}
async function deleteApiKey(context, id) {
	return await makeRestApiRequest(context, "DELETE", `/api-keys/${id}`);
}
async function updateApiKey(context, id, payload) {
	return await makeRestApiRequest(context, "PATCH", `/api-keys/${id}`, payload);
}
//#endregion
//#region ../@n8n/rest-api-client/dist/cloudPlans.mjs
async function getCurrentPlan(context) {
	return await get(context.baseUrl, "/admin/cloud-plan");
}
async function getCurrentUsage(context) {
	return await get(context.baseUrl, "/cloud/limits");
}
async function getCloudUserInfo(context) {
	return await get(context.baseUrl, "/cloud/proxy/user/me");
}
async function sendConfirmationEmail(context) {
	return await post(context.baseUrl, "/cloud/proxy/user/resend-confirmation-email");
}
async function getAdminPanelLoginCode(context) {
	return await get(context.baseUrl, "/cloud/proxy/login/code");
}
async function sendUserEvent(context, eventData) {
	return await post(context.baseUrl, "/cloud/proxy/user/event", eventData);
}
//#endregion
//#region ../@n8n/rest-api-client/dist/communityNodes.mjs
async function getInstalledCommunityNodes(context) {
	return (await get(context.baseUrl, "/community-packages")).data || [];
}
async function installNewPackage(context, name, verify, version) {
	return await post(context.baseUrl, "/community-packages", {
		name,
		verify,
		version
	});
}
async function uninstallPackage(context, name) {
	return await makeRestApiRequest(context, "DELETE", "/community-packages", { name });
}
async function updatePackage(context, name, version, checksum) {
	return await makeRestApiRequest(context, "PATCH", "/community-packages", {
		name,
		version,
		checksum
	});
}
async function getAvailableCommunityPackageCount() {
	return (await get("https://api.npms.io/v2/", "search?q=keywords:n8n-community-node-package")).total || 0;
}
//#endregion
//#region ../@n8n/rest-api-client/dist/credentialResolvers.mjs
async function getCredentialResolvers(context) {
	return await makeRestApiRequest(context, "GET", "/credential-resolvers");
}
async function getCredentialResolverTypes(context) {
	return await makeRestApiRequest(context, "GET", "/credential-resolvers/types");
}
async function getCredentialResolver(context, resolverId) {
	return await makeRestApiRequest(context, "GET", `/credential-resolvers/${resolverId}`);
}
async function createCredentialResolver(context, payload) {
	return await makeRestApiRequest(context, "POST", "/credential-resolvers", payload);
}
async function updateCredentialResolver(context, resolverId, payload) {
	return await makeRestApiRequest(context, "PATCH", `/credential-resolvers/${resolverId}`, payload);
}
async function getCredentialResolverWorkflows(context, resolverId) {
	return await makeRestApiRequest(context, "GET", `/credential-resolvers/${resolverId}/workflows`);
}
async function deleteCredentialResolver(context, resolverId) {
	return await makeRestApiRequest(context, "DELETE", `/credential-resolvers/${resolverId}`);
}
//#endregion
//#region ../@n8n/rest-api-client/dist/eventbus.ee.mjs
function hasDestinationId(destination) {
	return destination.id !== void 0;
}
async function saveDestinationToDb(context, destination, subscribedEvents = []) {
	return await makeRestApiRequest(context, "POST", "/eventbus/destination", {
		...destination,
		subscribedEvents
	});
}
async function deleteDestinationFromDb(context, destinationId) {
	return await makeRestApiRequest(context, "DELETE", `/eventbus/destination?id=${destinationId}`);
}
async function sendTestMessageToDestination(context, destination) {
	return await makeRestApiRequest(context, "GET", "/eventbus/testmessage", { ...destination });
}
async function getEventNamesFromBackend(context) {
	return await makeRestApiRequest(context, "GET", "/eventbus/eventnames");
}
async function getDestinationsFromBackend(context) {
	return await makeRestApiRequest(context, "GET", "/eventbus/destination");
}
//#endregion
//#region ../@n8n/rest-api-client/dist/instance-registry.mjs
var getClusterInfo = async (context) => {
	return await makeRestApiRequest(context, "GET", "/instance-registry");
};
//#endregion
//#region ../@n8n/rest-api-client/dist/externalSecrets.ee.mjs
var getExternalSecrets = async (context) => {
	return await makeRestApiRequest(context, "GET", "/external-secrets/secrets");
};
/**
* @deprecated use getGlobalExternalSecretsForProject instead
*/
var getGlobalExternalSecrets = async (context) => {
	return await makeRestApiRequest(context, "GET", "/secret-providers/completions/secrets/global");
};
/**
* Global secrets in project context (project-scoped auth).
*/
var getGlobalExternalSecretsForProject = async (context, projectId) => {
	return await makeRestApiRequest(context, "GET", `/secret-providers/completions/secrets/global/${projectId}`);
};
/**
* @beta still under development
*/
var getProjectExternalSecrets = async (context, projectId) => {
	return await makeRestApiRequest(context, "GET", `/secret-providers/completions/secrets/project/${projectId}`);
};
var getExternalSecretsProviders = async (context) => {
	return await makeRestApiRequest(context, "GET", "/external-secrets/providers");
};
var getExternalSecretsProvider = async (context, id) => {
	return await makeRestApiRequest(context, "GET", `/external-secrets/providers/${id}`);
};
var testExternalSecretsProviderConnection = async (context, id, data) => {
	return await makeRestApiRequest(context, "POST", `/external-secrets/providers/${id}/test`, data);
};
var updateProvider = async (context, id, data) => {
	return await makeRestApiRequest(context, "POST", `/external-secrets/providers/${id}`, data);
};
var reloadProvider = async (context, id) => {
	return await makeRestApiRequest(context, "POST", `/external-secrets/providers/${id}/update`);
};
var connectProvider = async (context, id, connected) => {
	return await makeRestApiRequest(context, "POST", `/external-secrets/providers/${id}/connect`, { connected });
};
var updateExternalSecretsSettings = async (context, data) => {
	return await makeRestApiRequest(context, "POST", "/external-secrets/settings", data);
};
//#endregion
//#region ../@n8n/rest-api-client/dist/secretsProvider.ee.mjs
var getSecretProviderTypes = async (context) => {
	return await makeRestApiRequest(context, "GET", "/secret-providers/types");
};
var getSecretProviderConnections = async (context) => {
	return await makeRestApiRequest(context, "GET", "/secret-providers/connections");
};
var getSecretProviderConnectionByKey = async (context, providerKey) => {
	return await makeRestApiRequest(context, "GET", `/secret-providers/connections/${providerKey}`);
};
var createSecretProviderConnection = async (context, data) => {
	return await makeRestApiRequest(context, "POST", "/secret-providers/connections", data);
};
var updateSecretProviderConnection = async (context, providerKey, data) => {
	return await makeRestApiRequest(context, "PATCH", `/secret-providers/connections/${providerKey}`, data);
};
var enableSecretProviderConnection = async (context, providerKey) => {
	return await makeRestApiRequest(context, "PATCH", `/secret-providers/connections/${providerKey}`, { isEnabled: true });
};
var testSecretProviderConnection = async (context, providerKey) => {
	return await makeRestApiRequest(context, "POST", `/secret-providers/connections/${providerKey}/test`);
};
var reloadSecretProviderConnection = async (context, providerKey) => {
	return await makeRestApiRequest(context, "POST", `/secret-providers/connections/${providerKey}/reload`);
};
var deleteSecretProviderConnection = async (context, providerKey) => {
	return await makeRestApiRequest(context, "DELETE", `/secret-providers/connections/${providerKey}`);
};
var getProjectSecretProviderConnectionsByProjectId = async (context, projectId) => {
	return await makeRestApiRequest(context, "GET", `/secret-providers/projects/${projectId}/connections`);
};
var getProjectSecretProviderConnectionByKey = async (context, projectId, providerKey) => {
	return await makeRestApiRequest(context, "GET", `/secret-providers/projects/${projectId}/connections/${providerKey}`);
};
var createProjectSecretProviderConnection = async (context, projectId, data) => {
	return await makeRestApiRequest(context, "POST", `/secret-providers/projects/${projectId}/connections`, data);
};
var updateProjectSecretProviderConnection = async (context, projectId, providerKey, data) => {
	return await makeRestApiRequest(context, "PATCH", `/secret-providers/projects/${projectId}/connections/${providerKey}`, data);
};
var testProjectSecretProviderConnection = async (context, projectId, providerKey) => {
	return await makeRestApiRequest(context, "POST", `/secret-providers/projects/${projectId}/connections/${providerKey}/test`);
};
var deleteProjectSecretProviderConnection = async (context, projectId, providerKey) => {
	return await makeRestApiRequest(context, "DELETE", `/secret-providers/projects/${projectId}/connections/${providerKey}`);
};
//#endregion
//#region ../@n8n/rest-api-client/dist/ldap.mjs
async function getLdapConfig(context) {
	return await makeRestApiRequest(context, "GET", "/ldap/config");
}
async function testLdapConnection(context) {
	return await makeRestApiRequest(context, "POST", "/ldap/test-connection");
}
async function updateLdapConfig(context, adConfig) {
	return await makeRestApiRequest(context, "PUT", "/ldap/config", adConfig);
}
async function runLdapSync(context, data) {
	return await makeRestApiRequest(context, "POST", "/ldap/sync", data);
}
async function getLdapSynchronizations(context, pagination) {
	return await makeRestApiRequest(context, "GET", "/ldap/sync", pagination);
}
//#endregion
//#region ../@n8n/rest-api-client/dist/mfa.mjs
async function canEnableMFA(context) {
	return await makeRestApiRequest(context, "POST", "/mfa/can-enable");
}
async function getMfaQR(context) {
	return await makeRestApiRequest(context, "GET", "/mfa/qr");
}
async function enableMfa(context, data) {
	return await makeRestApiRequest(context, "POST", "/mfa/enable", data);
}
async function verifyMfaCode(context, data) {
	return await makeRestApiRequest(context, "POST", "/mfa/verify", data);
}
async function disableMfa(context, data) {
	return await makeRestApiRequest(context, "POST", "/mfa/disable", data);
}
async function updateEnforceMfa(context, enforce) {
	return await makeRestApiRequest(context, "POST", "/mfa/enforce-mfa", { enforce });
}
//#endregion
//#region ../@n8n/rest-api-client/dist/nodeTypes.mjs
async function fetchNodeTypesJsonWithRetry(url, retries = 5, delay = 500) {
	for (let attempt = 0; attempt < retries; attempt++) {
		const response = await axios.get(url, { withCredentials: true });
		if (typeof response.data === "object" && response.data !== null) return response.data;
		await sleep(delay * attempt);
	}
	throw new Error("Could not fetch node types");
}
async function getNodeTypes(baseUrl) {
	return await fetchNodeTypesJsonWithRetry(baseUrl + "types/nodes.json");
}
async function fetchCommunityNodeTypes(context) {
	return await makeRestApiRequest(context, "GET", "/community-node-types");
}
async function fetchCommunityNodeAttributes(context, type) {
	return await makeRestApiRequest(context, "GET", `/community-node-types/${encodeURIComponent(type)}`);
}
async function getNodeTranslationHeaders(context) {
	return await makeRestApiRequest(context, "GET", "/node-translation-headers");
}
async function getNodesInformation(context, nodeInfos) {
	return await makeRestApiRequest(context, "POST", "/node-types", { nodeInfos });
}
async function getNodeParameterOptions(context, sendData) {
	return await makeRestApiRequest(context, "POST", "/dynamic-node-parameters/options", sendData);
}
async function getResourceLocatorResults(context, sendData) {
	return await makeRestApiRequest(context, "POST", "/dynamic-node-parameters/resource-locator-results", sendData);
}
async function getResourceMapperFields(context, sendData) {
	return await makeRestApiRequest(context, "POST", "/dynamic-node-parameters/resource-mapper-fields", sendData);
}
async function getLocalResourceMapperFields(context, sendData) {
	return await makeRestApiRequest(context, "POST", "/dynamic-node-parameters/local-resource-mapper-fields", sendData);
}
async function getNodeParameterActionResult(context, sendData) {
	return await makeRestApiRequest(context, "POST", "/dynamic-node-parameters/action-result", sendData);
}
//#endregion
//#region ../@n8n/rest-api-client/dist/npsSurvey.mjs
async function updateNpsSurveyState(context, state) {
	await makeRestApiRequest(context, "PATCH", "/user-settings/nps-survey", state);
}
//#endregion
//#region ../@n8n/rest-api-client/dist/orchestration.mjs
var GET_STATUS_ENDPOINT = "/orchestration/worker/status";
var sendGetWorkerStatus = async (context) => {
	await makeRestApiRequest(context, "POST", GET_STATUS_ENDPOINT);
};
//#endregion
//#region ../@n8n/rest-api-client/dist/provisioning.mjs
var getProvisioningConfig = async (context) => {
	return await makeRestApiRequest(context, "GET", "/sso/provisioning/config");
};
var saveProvisioningConfig = async (context, config) => {
	return await makeRestApiRequest(context, "PATCH", "/sso/provisioning/config", config);
};
//#endregion
//#region ../@n8n/rest-api-client/dist/roleMappingRule.mjs
var listRoleMappingRules = async (context) => {
	const response = await makeRestApiRequest(context, "GET", "/role-mapping-rule");
	return response.items ?? response;
};
var createRoleMappingRule = async (context, input) => {
	return await makeRestApiRequest(context, "POST", "/role-mapping-rule", input);
};
var updateRoleMappingRule = async (context, id, patch) => {
	return await makeRestApiRequest(context, "PATCH", `/role-mapping-rule/${id}`, patch);
};
var deleteRoleMappingRule = async (context, id) => {
	await makeRestApiRequest(context, "DELETE", `/role-mapping-rule/${id}`);
};
var moveRoleMappingRule = async (context, id, targetIndex) => {
	return await makeRestApiRequest(context, "POST", `/role-mapping-rule/${id}/move`, { targetIndex });
};
//#endregion
//#region ../@n8n/rest-api-client/dist/roles.mjs
var getRoles = async (context) => {
	return await makeRestApiRequest(context, "GET", "/roles?withUsageCount=true");
};
var createProjectRole = async (context, body) => {
	return await makeRestApiRequest(context, "POST", "/roles", body);
};
var getRoleBySlug = async (context, body) => {
	return await makeRestApiRequest(context, "GET", `/roles/${body.slug}?withUsageCount=true`);
};
var updateProjectRole = async (context, slug, body) => {
	return await makeRestApiRequest(context, "PATCH", `/roles/${slug}`, body);
};
var deleteProjectRole = async (context, slug) => {
	return await makeRestApiRequest(context, "DELETE", `/roles/${slug}`);
};
var getRoleAssignments = async (context, slug) => {
	return await makeRestApiRequest(context, "GET", `/roles/${slug}/assignments`);
};
var getRoleProjectMembers = async (context, slug, projectId) => {
	return await makeRestApiRequest(context, "GET", `/roles/${slug}/assignments/${projectId}/members`);
};
//#endregion
//#region ../@n8n/rest-api-client/dist/security-settings.mjs
async function getSecuritySettings(context) {
	return await makeRestApiRequest(context, "GET", "/settings/security");
}
async function updateSecuritySettings(context, data) {
	return await makeRestApiRequest(context, "POST", "/settings/security", data);
}
//#endregion
//#region ../@n8n/rest-api-client/dist/sso.mjs
var initSSO = async (context, redirectUrl = "") => {
	return await makeRestApiRequest(context, "GET", `/sso/saml/initsso?redirect=${redirectUrl}`);
};
var getSamlMetadata = async (context) => {
	return await makeRestApiRequest(context, "GET", "/sso/saml/metadata");
};
var getSamlConfig = async (context) => {
	return await makeRestApiRequest(context, "GET", "/sso/saml/config");
};
var saveSamlConfig = async (context, data) => {
	return await makeRestApiRequest(context, "POST", "/sso/saml/config", data);
};
var testSamlConfig = async (context, data) => {
	return await makeRestApiRequest(context, "POST", "/sso/saml/config/test", data);
};
var getOidcConfig = async (context) => {
	return await makeRestApiRequest(context, "GET", "/sso/oidc/config");
};
var saveOidcConfig = async (context, data) => {
	return await makeRestApiRequest(context, "POST", "/sso/oidc/config", data);
};
var testOidcConfig = async (context) => {
	return await makeRestApiRequest(context, "POST", "/sso/oidc/config/test");
};
//#endregion
//#region ../@n8n/rest-api-client/dist/third-party-licenses.mjs
async function getThirdPartyLicenses(context) {
	return await request({
		method: "GET",
		baseURL: context.baseUrl,
		endpoint: "/third-party-licenses"
	});
}
//#endregion
//#region ../@n8n/rest-api-client/dist/ui.mjs
async function dismissBannerPermanently(context, data) {
	return await makeRestApiRequest(context, "POST", "/owner/dismiss-banner", { banner: data.bannerName });
}
//#endregion
//#region ../@n8n/rest-api-client/dist/usage.mjs
var getLicense = async (context) => {
	return await makeRestApiRequest(context, "GET", "/license");
};
var activateLicenseKey = async (context, data) => {
	return await makeRestApiRequest(context, "POST", "/license/activate", data);
};
var renewLicense = async (context) => {
	return await makeRestApiRequest(context, "POST", "/license/renew");
};
var requestLicenseTrial = async (context) => {
	return await makeRestApiRequest(context, "POST", "/license/enterprise/request_trial");
};
var registerCommunityEdition = async (context, params) => {
	return await makeRestApiRequest(context, "POST", "/license/enterprise/community-registered", params);
};
//#endregion
//#region ../@n8n/rest-api-client/dist/users.mjs
async function loginCurrentUser(context) {
	return await makeRestApiRequest(context, "GET", "/login");
}
async function login(context, params) {
	return await makeRestApiRequest(context, "POST", "/login", params);
}
async function logout(context) {
	await makeRestApiRequest(context, "POST", "/logout");
}
async function setupOwner(context, params) {
	return await makeRestApiRequest(context, "POST", "/owner/setup", params);
}
async function validateSignupToken(context, params) {
	return await makeRestApiRequest(context, "GET", "/resolve-signup-token", params);
}
async function sendForgotPasswordEmail(context, params) {
	await makeRestApiRequest(context, "POST", "/forgot-password", params);
}
async function validatePasswordToken(context, params) {
	await makeRestApiRequest(context, "GET", "/resolve-password-token", params);
}
async function changePassword(context, params) {
	await makeRestApiRequest(context, "POST", "/change-password", params);
}
async function updateCurrentUser(context, params) {
	return await makeRestApiRequest(context, "PATCH", "/me", params);
}
async function updateCurrentUserSettings(context, settings) {
	return await makeRestApiRequest(context, "PATCH", "/me/settings", settings);
}
async function updateOtherUserSettings(context, userId, settings) {
	return await makeRestApiRequest(context, "PATCH", `/users/${userId}/settings`, settings);
}
async function updateCurrentUserPassword(context, params) {
	return await makeRestApiRequest(context, "PATCH", "/me/password", params);
}
async function deleteUser(context, { id, transferId }) {
	await makeRestApiRequest(context, "DELETE", `/users/${id}`, transferId ? { transferId } : {});
}
async function getUsers(context, filter) {
	return await makeRestApiRequest(context, "GET", "/users", filter);
}
async function generateInviteLink(context, { id }) {
	return await makeRestApiRequest(context, "POST", `/users/${id}/invite-link`);
}
async function getPasswordResetLink(context, { id }) {
	return await makeRestApiRequest(context, "GET", `/users/${id}/password-reset-link`);
}
async function submitPersonalizationSurvey(context, params) {
	await makeRestApiRequest(context, "POST", "/me/survey", params);
}
async function updateGlobalRole(context, { id, newRoleName }) {
	return await makeRestApiRequest(context, "PATCH", `/users/${id}/role`, { newRoleName });
}
//#endregion
//#region ../@n8n/rest-api-client/dist/versions.mjs
async function getNextVersions(endpoint, currentVersion, instanceId) {
	return await get(endpoint, currentVersion, {}, { [INSTANCE_ID_HEADER]: instanceId });
}
async function getWhatsNewSection(endpoint, currentVersion, instanceId) {
	return await get(endpoint, "", {}, {
		[INSTANCE_ID_HEADER]: instanceId,
		[INSTANCE_VERSION_HEADER]: currentVersion
	});
}
//#endregion
//#region ../@n8n/rest-api-client/dist/webhooks.mjs
var findWebhook = async (context, data) => {
	return await makeRestApiRequest(context, "POST", "/webhooks/find", data);
};
//#endregion
//#region ../@n8n/rest-api-client/dist/workflowHistory.mjs
var getWorkflowHistory = async (context, workflowId, queryParams) => {
	const { data } = await get(context.baseUrl, `/workflow-history/workflow/${workflowId}`, queryParams);
	return data;
};
var getWorkflowVersion = async (context, workflowId, versionId) => {
	const { data } = await get(context.baseUrl, `/workflow-history/workflow/${workflowId}/version/${versionId}`);
	return data;
};
var getWorkflowVersionsByIds = async (context, workflowId, versionIds) => {
	const { data } = await post(context.baseUrl, `/workflow-history/workflow/${workflowId}/versions`, { versionIds });
	return data;
};
var updateWorkflowHistoryVersion = async (context, workflowId, versionId, data) => {
	await patch(context.baseUrl, `/workflow-history/workflow/${workflowId}/versions/${versionId}`, data);
};
//#endregion
//#region src/app/stores/settings.store.ts
var import_es5 = /* @__PURE__ */ __toESM(require_es5(), 1);
var useSettingsStore = defineStore(STORES.SETTINGS, () => {
	const initialized = ref(false);
	const settings = ref({});
	const moduleSettings = ref({});
	const userManagement = ref({
		quota: -1,
		showSetupOnFirstLoad: false,
		smtpSetup: false,
		authenticationMethod: UserManagementAuthenticationMethod.Email
	});
	const templatesEndpointHealthy = ref(false);
	const api = ref({
		enabled: false,
		latestVersion: 0,
		path: "/",
		swaggerUi: { enabled: false }
	});
	const mfa = ref({ enabled: false });
	const folders = ref({ enabled: false });
	const saveDataErrorExecution = ref("all");
	const saveDataSuccessExecution = ref("all");
	const saveManualExecutions = ref(false);
	const saveDataProgressExecution = ref(false);
	const isMFAEnforced = ref(false);
	const isDocker = computed(() => settings.value?.isDocker ?? false);
	const databaseType = computed(() => settings.value?.databaseType);
	const planName = computed(() => settings.value?.license.planName ?? "Community");
	const consumerId = computed(() => settings.value?.license.consumerId);
	const binaryDataMode = computed(() => settings.value?.binaryDataMode);
	const pruning = computed(() => settings.value?.pruning);
	const security = computed(() => ({
		blockFileAccessToN8nFiles: settings.value.security.blockFileAccessToN8nFiles,
		secureCookie: settings.value.authCookie.secure
	}));
	const isEnterpriseFeatureEnabled = computed(() => settings.value.enterprise ?? {});
	const nodeJsVersion = computed(() => settings.value.nodeJsVersion);
	const nodeEnv = computed(() => settings.value.nodeEnv);
	const concurrency = computed(() => settings.value.concurrency);
	const isConcurrencyEnabled = computed(() => concurrency.value !== -1);
	const isPublicApiEnabled = computed(() => api.value.enabled);
	const isSwaggerUIEnabled = computed(() => api.value.swaggerUi.enabled);
	const isPreviewMode = computed(() => settings.value.previewMode);
	const isCanvasOnly = computed(() => settings.value.canvasOnly);
	const publicApiLatestVersion = computed(() => api.value.latestVersion);
	const publicApiPath = computed(() => api.value.path);
	const isAiAssistantEnabled = computed(() => settings.value.aiAssistant?.enabled && settings.value.aiAssistant?.setup);
	const isAskAiEnabled = computed(() => settings.value.askAi?.enabled);
	const isAiBuilderEnabled = computed(() => settings.value.aiBuilder?.enabled && settings.value.aiBuilder?.setup);
	const isAiAssistantOrBuilderEnabled = computed(() => isAiAssistantEnabled.value || isAiBuilderEnabled.value);
	const showSetupPage = computed(() => userManagement.value.showSetupOnFirstLoad);
	const deploymentType = computed(() => settings.value.deployment?.type || "default");
	const isCloudDeployment = computed(() => settings.value.deployment?.type === "cloud");
	const activeModules = computed(() => settings.value.activeModules);
	const isModuleActive = (moduleName) => {
		return activeModules.value?.includes(moduleName);
	};
	const isAiCreditsEnabled = computed(() => settings.value.aiCredits?.enabled && settings.value.aiCredits?.setup);
	const aiCreditsQuota = computed(() => settings.value.aiCredits?.credits);
	const isAiDataSharingEnabled = computed(() => settings.value.ai?.allowSendingParameterValues ?? true);
	const isAiGatewayEnabled = computed(() => settings.value.aiGateway?.enabled ?? false);
	const aiGatewayBudget = computed(() => settings.value.aiGateway?.budget ?? 0);
	const isSmtpSetup = computed(() => userManagement.value.smtpSetup);
	const isPersonalizationSurveyEnabled = computed(() => settings.value.telemetry?.enabled && settings.value.personalizationSurveyEnabled);
	const telemetry = computed(() => settings.value.telemetry);
	const logLevel = computed(() => settings.value.logLevel);
	const isTelemetryEnabled = computed(() => settings.value.telemetry && settings.value.telemetry.enabled);
	const isMFAEnforcementLicensed = computed(() => {
		return settings.value.enterprise?.mfaEnforcement ?? false;
	});
	const isMfaFeatureEnabled = computed(() => mfa.value.enabled);
	const isFoldersFeatureEnabled = computed(() => folders.value.enabled);
	const isDataTableFeatureEnabled = computed(() => isModuleActive("data-table"));
	const isChatFeatureEnabled = computed(() => isModuleActive("chat-hub") && moduleSettings.value["chat-hub"]?.enabled !== false);
	const isCustomRolesFeatureEnabled = computed(() => settings.value.enterprise?.customRoles ?? false);
	const areTagsEnabled = computed(() => settings.value.workflowTagsDisabled !== void 0 ? !settings.value.workflowTagsDisabled : true);
	const isHiringBannerEnabled = computed(() => settings.value.hiringBannerEnabled);
	const isTemplatesEnabled = computed(() => Boolean(settings.value.templates?.enabled));
	const isTemplatesEndpointReachable = computed(() => templatesEndpointHealthy.value);
	const templatesHost = computed(() => settings.value.templates?.host ?? "");
	const pushBackend = computed(() => settings.value.pushBackend);
	const isCommunityNodesFeatureEnabled = computed(() => settings.value.communityNodesEnabled);
	const isUnverifiedPackagesEnabled = computed(() => settings.value.unverifiedCommunityNodesEnabled);
	const allowedModules = computed(() => settings.value.allowedModules);
	const isQueueModeEnabled = computed(() => settings.value.executionMode === "queue");
	const isMultiMain = computed(() => settings.value.isMultiMain);
	const isWorkerViewAvailable = computed(() => !!settings.value.enterprise?.workerView);
	const workflowCallerPolicyDefaultOption = computed(() => settings.value.workflowCallerPolicyDefaultOption);
	const permanentlyDismissedBanners = computed(() => settings.value.banners?.dismissed ?? []);
	const isCommunityPlan = computed(() => planName.value.toLowerCase() === "community");
	const isDevRelease = computed(() => settings.value.releaseChannel === "dev");
	const endpointHealth = computed(() => settings.value.endpointHealth);
	const setSettings = (newSettings) => {
		settings.value = newSettings;
		userManagement.value = newSettings.userManagement;
		if (userManagement.value) userManagement.value.showSetupOnFirstLoad = !!settings.value.userManagement.showSetupOnFirstLoad;
		if (settings.value.publicApi) api.value = settings.value.publicApi;
		mfa.value.enabled = settings.value.mfa?.enabled;
		folders.value.enabled = settings.value.folders?.enabled;
		if (settings.value.versionCli) useRootStore().setVersionCli(settings.value.versionCli);
		if (settings.value.authCookie.secure) {
			const { browser } = import_es5.default.parse(navigator.userAgent);
			if (location.protocol === "http:" && (!["localhost", "127.0.0.1"].includes(location.hostname) || browser.name === "Safari")) {
				document.write(INSECURE_CONNECTION_WARNING);
				return;
			}
		}
	};
	const setAllowedModules = (allowedModules) => {
		settings.value.allowedModules = allowedModules;
	};
	const setSaveDataErrorExecution = (newValue) => {
		saveDataErrorExecution.value = newValue;
	};
	const setSaveDataSuccessExecution = (newValue) => {
		saveDataSuccessExecution.value = newValue;
	};
	const setSaveManualExecutions = (newValue) => {
		saveManualExecutions.value = newValue;
	};
	const setSaveDataProgressExecution = (newValue) => {
		saveDataProgressExecution.value = newValue;
	};
	const getSettings$1 = async () => {
		const rootStore = useRootStore();
		const fetchedSettings = await getSettings(rootStore.restApiContext);
		setSettings(fetchedSettings);
		rootStore.setDefaultLocale(fetchedSettings.defaultLocale);
		isMFAEnforced.value = settings.value.mfa?.enforced ?? false;
		if (fetchedSettings.settingsMode === "public") return;
		settings.value.communityNodesEnabled = fetchedSettings.communityNodesEnabled;
		settings.value.unverifiedCommunityNodesEnabled = fetchedSettings.unverifiedCommunityNodesEnabled;
		setAllowedModules(fetchedSettings.allowedModules);
		setSaveDataErrorExecution(fetchedSettings.saveDataErrorExecution);
		setSaveDataSuccessExecution(fetchedSettings.saveDataSuccessExecution);
		setSaveDataProgressExecution(fetchedSettings.saveExecutionProgress);
		setSaveManualExecutions(fetchedSettings.saveManualExecutions);
		rootStore.setUrlBaseWebhook(fetchedSettings.urlBaseWebhook);
		rootStore.setUrlBaseEditor(fetchedSettings.urlBaseEditor);
		rootStore.setEndpointForm(fetchedSettings.endpointForm);
		rootStore.setEndpointFormTest(fetchedSettings.endpointFormTest);
		rootStore.setEndpointFormWaiting(fetchedSettings.endpointFormWaiting);
		rootStore.setEndpointWebhook(fetchedSettings.endpointWebhook);
		rootStore.setEndpointWebhookTest(fetchedSettings.endpointWebhookTest);
		rootStore.setEndpointWebhookWaiting(fetchedSettings.endpointWebhookWaiting);
		rootStore.setEndpointMcp(fetchedSettings.endpointMcp);
		rootStore.setEndpointMcpTest(fetchedSettings.endpointMcpTest);
		rootStore.setTimezone(fetchedSettings.timezone);
		rootStore.setExecutionTimeout(fetchedSettings.executionTimeout);
		rootStore.setMaxExecutionTimeout(fetchedSettings.maxExecutionTimeout);
		rootStore.setInstanceId(fetchedSettings.instanceId);
		rootStore.setOauthCallbackUrls(fetchedSettings.oauthCallbackUrls);
		rootStore.setN8nMetadata(fetchedSettings.n8nMetadata || {});
		rootStore.setBinaryDataMode(fetchedSettings.binaryDataMode);
		if (fetchedSettings.telemetry.enabled) sessionStarted(rootStore.restApiContext);
	};
	const initialize = async () => {
		if (initialized.value) return;
		await getSettings$1();
		initialized.value = true;
	};
	const stopShowingSetupPage = () => {
		userManagement.value.showSetupOnFirstLoad = false;
	};
	const disableTemplates = () => {
		settings.value = {
			...settings.value,
			templates: {
				...settings.value.templates,
				enabled: false
			}
		};
	};
	const testTemplatesEndpoint = async () => {
		const timeout = new Promise((_, reject) => setTimeout(() => reject(), 2e3));
		await Promise.race([testHealthEndpoint(templatesHost.value), timeout]);
		templatesEndpointHealthy.value = true;
	};
	const getTimezones = async () => {
		return await makeRestApiRequest(useRootStore().restApiContext, "GET", "/options/timezones");
	};
	const reset = () => {
		settings.value = {};
	};
	const getModuleSettings$1 = async () => {
		moduleSettings.value = await getModuleSettings(useRootStore().restApiContext);
	};
	const updateAiDataSharingSettings = async (allowSendingParameterValues) => {
		await updateAiUsageSettings(useRootStore().restApiContext, { allowSendingParameterValues });
		if (settings.value.ai) settings.value.ai.allowSendingParameterValues = allowSendingParameterValues;
	};
	return {
		settings,
		userManagement,
		templatesEndpointHealthy,
		api,
		mfa,
		isDocker,
		isDevRelease,
		endpointHealth,
		isEnterpriseFeatureEnabled,
		databaseType,
		planName,
		consumerId,
		binaryDataMode,
		pruning,
		security,
		nodeJsVersion,
		nodeEnv,
		concurrency,
		isConcurrencyEnabled,
		isPublicApiEnabled,
		isSwaggerUIEnabled,
		isPreviewMode,
		isCanvasOnly,
		publicApiLatestVersion,
		publicApiPath,
		showSetupPage,
		deploymentType,
		isCloudDeployment,
		isSmtpSetup,
		isPersonalizationSurveyEnabled,
		telemetry,
		logLevel,
		isTelemetryEnabled,
		isMfaFeatureEnabled,
		isFoldersFeatureEnabled,
		isAiAssistantEnabled,
		isCustomRolesFeatureEnabled,
		areTagsEnabled,
		isHiringBannerEnabled,
		isTemplatesEnabled,
		isTemplatesEndpointReachable,
		templatesHost,
		pushBackend,
		isCommunityNodesFeatureEnabled,
		isUnverifiedPackagesEnabled,
		allowedModules,
		isQueueModeEnabled,
		isMultiMain,
		isWorkerViewAvailable,
		workflowCallerPolicyDefaultOption,
		permanentlyDismissedBanners,
		saveDataErrorExecution,
		saveDataSuccessExecution,
		saveManualExecutions,
		saveDataProgressExecution,
		isCommunityPlan,
		isAskAiEnabled,
		isAiBuilderEnabled,
		isAiAssistantOrBuilderEnabled,
		isAiCreditsEnabled,
		aiCreditsQuota,
		isAiDataSharingEnabled,
		isAiGatewayEnabled,
		aiGatewayBudget,
		reset,
		getTimezones,
		testTemplatesEndpoint,
		disableTemplates,
		stopShowingSetupPage,
		getSettings: getSettings$1,
		setSettings,
		initialize,
		getModuleSettings: getModuleSettings$1,
		moduleSettings,
		updateAiDataSharingSettings,
		isMFAEnforcementLicensed,
		isMFAEnforced,
		activeModules,
		isModuleActive,
		isDataTableFeatureEnabled,
		isChatFeatureEnabled
	};
});
//#endregion
export { listRoleMappingRules as $, getClusterInfo as $t, renewLicense as A, getCategories as An, deleteSecretProviderConnection as At, testOidcConfig as B, updateProjectSecretProviderConnection as Bt, updateGlobalRole as C, sendUserEvent as Cn, getLdapSynchronizations as Ct, activateLicenseKey as D, getApiKeys as Dn, createProjectSecretProviderConnection as Dt, validateSignupToken as E, getApiKeyScopes as En, updateLdapConfig as Et, getSamlConfig as F, getWorkflows as Fn, getSecretProviderConnections as Ft, deleteProjectRole as G, getExternalSecretsProviders as Gt, getSecuritySettings as H, connectProvider as Ht, getSamlMetadata as I, STORES as In, getSecretProviderTypes as It, getRoleProjectMembers as J, getProjectExternalSecrets as Jt, getRoleAssignments as K, getGlobalExternalSecrets as Kt, initSSO as L, reloadSecretProviderConnection as Lt, dismissBannerPermanently as M, getCollections as Mn, getProjectSecretProviderConnectionByKey as Mt, getThirdPartyLicenses as N, getTemplateById as Nn, getProjectSecretProviderConnectionsByProjectId as Nt, getLicense as O, updateApiKey as On, createSecretProviderConnection as Ot, getOidcConfig as P, getWorkflowTemplate as Pn, getSecretProviderConnectionByKey as Pt, deleteRoleMappingRule as Q, updateProvider as Qt, saveOidcConfig as R, testProjectSecretProviderConnection as Rt, updateCurrentUserSettings as S, sendConfirmationEmail as Sn, getLdapConfig as St, validatePasswordToken as T, deleteApiKey as Tn, testLdapConnection as Tt, updateSecuritySettings as U, getExternalSecrets as Ut, testSamlConfig as V, updateSecretProviderConnection as Vt, createProjectRole as W, getExternalSecretsProvider as Wt, updateProjectRole as X, testExternalSecretsProviderConnection as Xt, getRoles as Y, reloadProvider as Yt, createRoleMappingRule as Z, updateExternalSecretsSettings as Zt, sendForgotPasswordEmail as _, updatePackage as _n, disableMfa as _t, updateWorkflowHistoryVersion as a, sendTestMessageToDestination as an, updateNpsSurveyState as at, updateCurrentUser as b, getCurrentPlan as bn, updateEnforceMfa as bt, getWhatsNewSection as c, getCredentialResolver as cn, getLocalResourceMapperFields as ct, generateInviteLink as d, getCredentialResolvers as dn, getNodeTranslationHeaders as dt, deleteDestinationFromDb as en, moveRoleMappingRule as et, getPasswordResetLink as f, updateCredentialResolver as fn, getNodeTypes as ft, logout as g, uninstallPackage as gn, canEnableMFA as gt, loginCurrentUser as h, installNewPackage as hn, getResourceMapperFields as ht, getWorkflowVersionsByIds as i, saveDestinationToDb as in, sendGetWorkerStatus as it, requestLicenseTrial as j, getCollectionById as jn, enableSecretProviderConnection as jt, registerCommunityEdition as k, UserManagementAuthenticationMethod as kn, deleteProjectSecretProviderConnection as kt, changePassword as l, getCredentialResolverTypes as ln, getNodeParameterActionResult as lt, login as m, getInstalledCommunityNodes as mn, getResourceLocatorResults as mt, getWorkflowHistory as n, getEventNamesFromBackend as nn, getProvisioningConfig as nt, findWebhook as o, createCredentialResolver as on, fetchCommunityNodeAttributes as ot, getUsers as p, getAvailableCommunityPackageCount as pn, getNodesInformation as pt, getRoleBySlug as q, getGlobalExternalSecretsForProject as qt, getWorkflowVersion as r, hasDestinationId as rn, saveProvisioningConfig as rt, getNextVersions as s, deleteCredentialResolver as sn, fetchCommunityNodeTypes as st, useSettingsStore as t, getDestinationsFromBackend as tn, updateRoleMappingRule as tt, deleteUser as u, getCredentialResolverWorkflows as un, getNodeParameterOptions as ut, setupOwner as v, getAdminPanelLoginCode as vn, enableMfa as vt, updateOtherUserSettings as w, createApiKey as wn, runLdapSync as wt, updateCurrentUserPassword as x, getCurrentUsage as xn, verifyMfaCode as xt, submitPersonalizationSurvey as y, getCloudUserInfo as yn, getMfaQR as yt, saveSamlConfig as z, testSecretProviderConnection as zt };

import { t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { Dn as init_dist, En as global } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
var require_FileSaver_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	init_dist();
	(function(a, b) {
		if ("function" == typeof define && define.amd) define([], b);
		else if ("undefined" != typeof exports) b();
		else b(), a.FileSaver = { exports: {} }.exports;
	})(exports, function() {
		function b(a$1, b$1) {
			return "undefined" == typeof b$1 ? b$1 = { autoBom: !1 } : "object" != typeof b$1 && (console.warn("Deprecated: Expected third argument to be a object"), b$1 = { autoBom: !b$1 }), b$1.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a$1.type) ? new Blob(["﻿", a$1], { type: a$1.type }) : a$1;
		}
		function c(a$1, b$1, c$1) {
			var d$1 = new XMLHttpRequest();
			d$1.open("GET", a$1), d$1.responseType = "blob", d$1.onload = function() {
				g(d$1.response, b$1, c$1);
			}, d$1.onerror = function() {
				console.error("could not download file");
			}, d$1.send();
		}
		function d(a$1) {
			var b$1 = new XMLHttpRequest();
			b$1.open("HEAD", a$1, !1);
			try {
				b$1.send();
			} catch (a$2) {}
			return 200 <= b$1.status && 299 >= b$1.status;
		}
		function e(a$1) {
			try {
				a$1.dispatchEvent(new MouseEvent("click"));
			} catch (c$1) {
				var b$1 = document.createEvent("MouseEvents");
				b$1.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a$1.dispatchEvent(b$1);
			}
		}
		var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {} : "download" in HTMLAnchorElement.prototype && !a ? function(b$1, g$1, h) {
			var i = f.URL || f.webkitURL, j = document.createElement("a");
			g$1 = g$1 || b$1.name || "download", j.download = g$1, j.rel = "noopener", "string" == typeof b$1 ? (j.href = b$1, j.origin === location.origin ? e(j) : d(j.href) ? c(b$1, g$1, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b$1), setTimeout(function() {
				i.revokeObjectURL(j.href);
			}, 4e4), setTimeout(function() {
				e(j);
			}, 0));
		} : "msSaveOrOpenBlob" in navigator ? function(f$1, g$1, h) {
			if (g$1 = g$1 || f$1.name || "download", "string" != typeof f$1) navigator.msSaveOrOpenBlob(b(f$1, h), g$1);
			else if (d(f$1)) c(f$1, g$1, h);
			else {
				var i = document.createElement("a");
				i.href = f$1, i.target = "_blank", setTimeout(function() {
					e(i);
				});
			}
		} : function(b$1, d$1, e$1, g$1) {
			if (g$1 = g$1 || open("", "_blank"), g$1 && (g$1.document.title = g$1.document.body.innerText = "downloading..."), "string" == typeof b$1) return c(b$1, d$1, e$1);
			var h = "application/octet-stream" === b$1.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
			if ((j || h && i || a) && "undefined" != typeof FileReader) {
				var k = new FileReader();
				k.onloadend = function() {
					var a$1 = k.result;
					a$1 = j ? a$1 : a$1.replace(/^data:[^;]*;/, "data:attachment/file;"), g$1 ? g$1.location.href = a$1 : location = a$1, g$1 = null;
				}, k.readAsDataURL(b$1);
			} else {
				var l = f.URL || f.webkitURL, m = l.createObjectURL(b$1);
				g$1 ? g$1.location = m : location.href = m, g$1 = null, setTimeout(function() {
					l.revokeObjectURL(m);
				}, 4e4);
			}
		});
		f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
	});
}));
export { require_FileSaver_min as t };

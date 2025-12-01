import { t as __commonJSMin } from "./chunk-6z4oVpB-.js";
var require_dateformat = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(global) {
		var dateFormat = (function() {
			var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
			var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
			var timezoneClip = /[^-+\dA-Z]/g;
			return function(date, mask, utc, gmt) {
				if (arguments.length === 1 && kindOf(date) === "string" && !/\d/.test(date)) {
					mask = date;
					date = void 0;
				}
				date = date || /* @__PURE__ */ new Date();
				if (!(date instanceof Date)) date = new Date(date);
				if (isNaN(date)) throw TypeError("Invalid date");
				mask = String(dateFormat.masks[mask] || mask || dateFormat.masks["default"]);
				var maskSlice = mask.slice(0, 4);
				if (maskSlice === "UTC:" || maskSlice === "GMT:") {
					mask = mask.slice(4);
					utc = true;
					if (maskSlice === "GMT:") gmt = true;
				}
				var _ = utc ? "getUTC" : "get";
				var d = date[_ + "Date"]();
				var D = date[_ + "Day"]();
				var m = date[_ + "Month"]();
				var y = date[_ + "FullYear"]();
				var H = date[_ + "Hours"]();
				var M = date[_ + "Minutes"]();
				var s = date[_ + "Seconds"]();
				var L = date[_ + "Milliseconds"]();
				var o = utc ? 0 : date.getTimezoneOffset();
				var W = getWeek(date);
				var N = getDayOfWeek(date);
				var flags = {
					d,
					dd: pad(d),
					ddd: dateFormat.i18n.dayNames[D],
					dddd: dateFormat.i18n.dayNames[D + 7],
					m: m + 1,
					mm: pad(m + 1),
					mmm: dateFormat.i18n.monthNames[m],
					mmmm: dateFormat.i18n.monthNames[m + 12],
					yy: String(y).slice(2),
					yyyy: y,
					h: H % 12 || 12,
					hh: pad(H % 12 || 12),
					H,
					HH: pad(H),
					M,
					MM: pad(M),
					s,
					ss: pad(s),
					l: pad(L, 3),
					L: pad(Math.round(L / 10)),
					t: H < 12 ? dateFormat.i18n.timeNames[0] : dateFormat.i18n.timeNames[1],
					tt: H < 12 ? dateFormat.i18n.timeNames[2] : dateFormat.i18n.timeNames[3],
					T: H < 12 ? dateFormat.i18n.timeNames[4] : dateFormat.i18n.timeNames[5],
					TT: H < 12 ? dateFormat.i18n.timeNames[6] : dateFormat.i18n.timeNames[7],
					Z: gmt ? "GMT" : utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
					o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
					S: [
						"th",
						"st",
						"nd",
						"rd"
					][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
					W,
					N
				};
				return mask.replace(token, function(match) {
					if (match in flags) return flags[match];
					return match.slice(1, match.length - 1);
				});
			};
		})();
		dateFormat.masks = {
			"default": "ddd mmm dd yyyy HH:MM:ss",
			"shortDate": "m/d/yy",
			"mediumDate": "mmm d, yyyy",
			"longDate": "mmmm d, yyyy",
			"fullDate": "dddd, mmmm d, yyyy",
			"shortTime": "h:MM TT",
			"mediumTime": "h:MM:ss TT",
			"longTime": "h:MM:ss TT Z",
			"isoDate": "yyyy-mm-dd",
			"isoTime": "HH:MM:ss",
			"isoDateTime": "yyyy-mm-dd'T'HH:MM:sso",
			"isoUtcDateTime": "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
			"expiresHeaderFormat": "ddd, dd mmm yyyy HH:MM:ss Z"
		};
		dateFormat.i18n = {
			dayNames: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat",
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			],
			monthNames: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],
			timeNames: [
				"a",
				"p",
				"am",
				"pm",
				"A",
				"P",
				"AM",
				"PM"
			]
		};
		function pad(val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		}
		function getWeek(date) {
			var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
			targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);
			var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
			firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
			var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
			targetThursday.setHours(targetThursday.getHours() - ds);
			var weekDiff = (targetThursday - firstThursday) / (864e5 * 7);
			return 1 + Math.floor(weekDiff);
		}
		function getDayOfWeek(date) {
			var dow = date.getDay();
			if (dow === 0) dow = 7;
			return dow;
		}
		function kindOf(val) {
			if (val === null) return "null";
			if (val === void 0) return "undefined";
			if (typeof val !== "object") return typeof val;
			if (Array.isArray(val)) return "array";
			return {}.toString.call(val).slice(8, -1).toLowerCase();
		}
		if (typeof define === "function" && define.amd) define(function() {
			return dateFormat;
		});
		else if (typeof exports === "object") module.exports = dateFormat;
		else global.dateFormat = dateFormat;
	})(exports);
}));
export { require_dateformat as t };

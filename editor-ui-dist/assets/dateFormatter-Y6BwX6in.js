import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { i as i18n } from "./src-BqnE5xyQ.js";
import { t as require_dateformat } from "./dateformat-9ZHpj92n.js";
//#region src/app/utils/formatters/dateFormatter.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var convertToDisplayDateComponents = (fullDate) => {
	const [date, time] = (0, import_dateformat.default)(fullDate, `d mmm${new Date(fullDate).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? "" : ", yyyy"}#HH:MM:ss`).split("#");
	return {
		date,
		time
	};
};
function convertToDisplayDate(fullDate) {
	const [date, time] = (0, import_dateformat.default)(fullDate, `mmm d${new Date(fullDate).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? "" : ", yyyy"}#HH:MM:ss`).split("#");
	return {
		date,
		time
	};
}
var toDayMonth = (fullDate) => (0, import_dateformat.default)(fullDate, "d mmm");
var toTime = (fullDate, includeMillis = false) => (0, import_dateformat.default)(fullDate, includeMillis ? "HH:MM:ss.l" : "HH:MM:ss");
var formatTimeAgo = (fullDate) => {
	const now = /* @__PURE__ */ new Date();
	const date = new Date(fullDate);
	const diffInMs = now.getTime() - date.getTime();
	const diffInDays = Math.floor(diffInMs / (1e3 * 60 * 60 * 24));
	if (diffInDays === 0) return i18n.baseText("userActivity.today");
	else if (diffInDays === 1) return i18n.baseText("userActivity.yesterday");
	else if (diffInDays >= 2 && diffInDays <= 6) return (0, import_dateformat.default)(date, "dddd");
	else if (diffInDays >= 7 && diffInDays <= 13) return i18n.baseText("userActivity.lastTime", { interpolate: { time: (0, import_dateformat.default)(date, "dddd") } });
	else if (diffInDays >= 14 && diffInDays <= 30) return i18n.baseText("userActivity.daysAgo", { interpolate: { count: diffInDays.toString() } });
	else return (0, import_dateformat.default)(date, "mmmm d, yyyy");
};
//#endregion
export { toTime as a, toDayMonth as i, convertToDisplayDateComponents as n, formatTimeAgo as r, convertToDisplayDate as t };

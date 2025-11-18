import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { pt as i18n } from "./_MapCache-pT3vKw8Z.js";
import { t as require_dateformat } from "./dateformat-D7TIhVd4.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat());
const convertToDisplayDateComponents = (fullDate) => {
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
const toDayMonth = (fullDate) => (0, import_dateformat.default)(fullDate, "d mmm");
const toTime = (fullDate, includeMillis = false) => (0, import_dateformat.default)(fullDate, includeMillis ? "HH:MM:ss.l" : "HH:MM:ss");
const formatTimeAgo = (fullDate) => {
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
export { toTime as a, toDayMonth as i, convertToDisplayDateComponents as n, formatTimeAgo as r, convertToDisplayDate as t };

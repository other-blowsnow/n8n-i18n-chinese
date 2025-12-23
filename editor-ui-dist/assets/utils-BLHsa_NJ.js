import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { t as require_dateformat } from "./dateformat-hG8NERse.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat());
const getLastPublishedVersion = (workflowPublishHistory) => {
	return workflowPublishHistory.findLast((history) => history.event === "activated");
};
const generateVersionName = (versionId) => {
	return `Version ${versionId.substring(0, 8)}`;
};
const formatTimestamp = (value) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
	const [date, time] = (0, import_dateformat.default)(value, `${value.startsWith(currentYear) ? "" : "yyyy "}mmm d"#"HH:MM:ss`).split("#");
	return {
		date,
		time
	};
};
export { generateVersionName as n, getLastPublishedVersion as r, formatTimestamp as t };

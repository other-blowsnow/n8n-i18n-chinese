import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { t as require_dateformat } from "./dateformat-Bc6vycUF.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
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
const computeTimelineEntries = (items) => {
	const entries = [];
	let currentGroup = [];
	let groupCounter = 0;
	const flushGroup = () => {
		if (currentGroup.length > 0) {
			entries.push({
				type: "group-header",
				groupId: `group-${groupCounter++}`,
				count: currentGroup.length,
				versions: [...currentGroup]
			});
			currentGroup = [];
		}
	};
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		if (!(i === 0) && !item.name?.trim()) currentGroup.push({
			type: "version",
			item,
			originalIndex: i,
			isGrouped: true
		});
		else {
			flushGroup();
			entries.push({
				type: "version",
				item,
				originalIndex: i,
				isGrouped: false
			});
		}
	}
	flushGroup();
	return entries;
};
export { getLastPublishedVersion as i, formatTimestamp as n, generateVersionName as r, computeTimelineEntries as t };

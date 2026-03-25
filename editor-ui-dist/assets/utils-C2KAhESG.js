import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { bt as useI18n } from "./_MapCache-DL4VDRVM.js";
import { t as require_dateformat } from "./dateformat-CIyrhJiH.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
const getLastPublishedVersion = (workflowPublishHistory) => {
	return workflowPublishHistory.findLast((history) => history.event === "activated");
};
const generateVersionLabelFromId = (versionId) => {
	return `Version ${versionId.substring(0, 8)}`;
};
const getVersionLabel = ({ workflowHistory, currentVersionId }) => {
	const i18n = useI18n();
	if (workflowHistory.name) return workflowHistory.name;
	return workflowHistory.versionId === currentVersionId ? i18n.baseText("workflowHistory.item.currentChanges") : generateVersionLabelFromId(workflowHistory.versionId);
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
const getPublishedVersionId = (workflow) => {
	if (!workflow) return;
	return workflow.activeVersionId ?? workflow.activeVersion?.versionId ?? void 0;
};
export { getPublishedVersionId as a, getLastPublishedVersion as i, formatTimestamp as n, getVersionLabel as o, generateVersionLabelFromId as r, computeTimelineEntries as t };

import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { s as useI18n } from "./src-2bgghuOQ.js";
import { t as require_dateformat } from "./dateformat-9ZHpj92n.js";
//#region src/features/workflows/workflowHistory/utils.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var getLastPublishedVersion = (workflowPublishHistory) => {
	return workflowPublishHistory.findLast((history) => history.event === "activated");
};
var generateVersionLabelFromId = (versionId) => {
	return `Version ${versionId.substring(0, 8)}`;
};
var getVersionLabel = ({ workflowHistory, currentVersionId }) => {
	const i18n = useI18n();
	if (workflowHistory.name) return workflowHistory.name;
	return workflowHistory.versionId === currentVersionId ? i18n.baseText("workflowHistory.item.currentChanges") : generateVersionLabelFromId(workflowHistory.versionId);
};
var formatTimestamp = (value) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
	const [date, time] = (0, import_dateformat.default)(value, `${value.startsWith(currentYear) ? "" : "yyyy "}mmm d"#"HH:MM:ss`).split("#");
	return {
		date,
		time
	};
};
/**
* Computes timeline entries from workflow history, grouping consecutive unnamed versions.
* Named versions are shown as individual entries.
* Consecutive unnamed versions are grouped into collapsible blocks.
* The first item is always shown separately (never grouped).
*/
var computeTimelineEntries = (items) => {
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
var getPublishedVersionId = (workflow) => {
	if (!workflow) return;
	return workflow.activeVersionId ?? workflow.activeVersion?.versionId ?? void 0;
};
//#endregion
export { getPublishedVersionId as a, getLastPublishedVersion as i, formatTimestamp as n, getVersionLabel as o, generateVersionLabelFromId as r, computeTimelineEntries as t };

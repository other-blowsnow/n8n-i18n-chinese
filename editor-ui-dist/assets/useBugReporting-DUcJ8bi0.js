import { wt as useDeviceSupport } from "./src-Cq27d_Gp.js";
import { fs as useSettingsStore } from "./users.store-qBZsmf9-.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
function useDebugInfo() {
	const settingsStore = useSettingsStore();
	const rootStore = useRootStore();
	const { isTouchDevice, userAgent } = useDeviceSupport();
	const coreInfo = (skipSensitive) => {
		const info = {
			n8nVersion: rootStore.versionCli,
			platform: settingsStore.isDocker && settingsStore.deploymentType === "cloud" ? "docker (cloud)" : settingsStore.isDocker ? "docker (self-hosted)" : "npm",
			nodeJsVersion: settingsStore.nodeJsVersion,
			nodeEnv: settingsStore.nodeEnv,
			database: settingsStore.databaseType === "postgresdb" ? "postgres" : settingsStore.databaseType === "mysqldb" ? "mysql" : settingsStore.databaseType,
			executionMode: settingsStore.isQueueModeEnabled ? settingsStore.isMultiMain ? "scaling (multi-main)" : "scaling (single-main)" : "regular",
			concurrency: settingsStore.settings.concurrency,
			license: settingsStore.isCommunityPlan || !settingsStore.settings.license ? "community" : settingsStore.settings.license.environment === "production" ? "enterprise (production)" : "enterprise (sandbox)"
		};
		if (!skipSensitive) return {
			...info,
			consumerId: !skipSensitive ? settingsStore.consumerId : void 0
		};
		return info;
	};
	const storageInfo = () => {
		return {
			success: settingsStore.saveDataSuccessExecution,
			error: settingsStore.saveDataErrorExecution,
			progress: settingsStore.saveDataProgressExecution,
			manual: settingsStore.saveManualExecutions,
			binaryMode: settingsStore.binaryDataMode === "default" ? "memory" : settingsStore.binaryDataMode
		};
	};
	const pruningInfo = () => {
		if (!settingsStore.pruning?.isEnabled) return { enabled: false };
		return {
			enabled: true,
			maxAge: `${settingsStore.pruning?.maxAge} hours`,
			maxCount: `${settingsStore.pruning?.maxCount} executions`
		};
	};
	const securityInfo = () => {
		const info = {};
		if (!settingsStore.security.blockFileAccessToN8nFiles) info.blockFileAccessToN8nFiles = false;
		if (!settingsStore.security.secureCookie) info.secureCookie = false;
		if (Object.keys(info).length === 0) return;
		return info;
	};
	const client = () => {
		return {
			userAgent,
			isTouchDevice
		};
	};
	const gatherDebugInfo = (skipSensitive) => {
		const debugInfo = {
			core: coreInfo(skipSensitive),
			storage: storageInfo(),
			pruning: pruningInfo(),
			client: client()
		};
		const security = securityInfo();
		if (security) debugInfo.security = security;
		return debugInfo;
	};
	const toMarkdown = (debugInfo, { secondaryHeader }) => {
		const extraLevel = secondaryHeader ? "#" : "";
		let markdown = `${extraLevel}# Debug info\n\n`;
		for (const sectionKey in debugInfo) {
			markdown += `${extraLevel}## ${sectionKey}\n\n`;
			const section = debugInfo[sectionKey];
			if (!section) continue;
			for (const itemKey in section) {
				const itemValue = section[itemKey];
				markdown += `- ${itemKey}: ${itemValue}\n`;
			}
			markdown += "\n";
		}
		return markdown;
	};
	const appendTimestamp = (markdown) => {
		return `${markdown}Generated at: ${(/* @__PURE__ */ new Date()).toISOString()}`;
	};
	const generateDebugInfo = ({ skipSensitive, secondaryHeader } = {}) => {
		return appendTimestamp(toMarkdown(gatherDebugInfo(skipSensitive), { secondaryHeader }));
	};
	return { generateDebugInfo };
}
const EXTERNAL_LINKS = {
	QUICKSTART_VIDEO: "https://www.youtube.com/watch?v=4cQWJViybAQ",
	DOCUMENTATION: "https://docs.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
	FORUM: "https://community.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
	COURSES: "https://docs.n8n.io/courses/"
};
var BASE_FORUM_URL = "https://github.com/n8n-io/n8n/issues/new?labels=bug-report";
var REPORT_TEMPLATE = `
<!-- Please follow the template below. Skip the questions that are not relevant to you. -->

## Describe the problem/error/question


## What is the error message (if any)?


## Please share your workflow/screenshots/recording

\`\`\`
(Select the nodes on your canvas and use the keyboard shortcuts CMD+C/CTRL+C and CMD+V/CTRL+V to copy and paste the workflow.)
⚠️ WARNING ⚠️ If you have sensitive data in your workflow (like API keys), please remove it before sharing.
\`\`\`


## Share the output returned by the last node
<!-- If you need help with data transformations, please also share your expected output. -->

`;
function useBugReporting() {
	const debugInfo = useDebugInfo();
	const getReportingURL = () => {
		const url = new URL(BASE_FORUM_URL);
		const report = `${REPORT_TEMPLATE}\n${debugInfo.generateDebugInfo({
			skipSensitive: true,
			secondaryHeader: true
		})}}`;
		url.searchParams.append("body", report);
		return url.toString();
	};
	return { getReportingURL };
}
export { EXTERNAL_LINKS as n, useDebugInfo as r, useBugReporting as t };

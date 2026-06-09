import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { Bt as useDeviceSupport } from "./src-DFOx8N22.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-BUCt9XJo.js";
import { t as useSettingsStore, tn as getClusterInfo } from "./settings.store-B-RgkKfn.js";
//#region src/features/instanceRegistry/stores/instanceRegistry.store.ts
var useInstanceRegistryStore = defineStore("instanceRegistry", () => {
	const rootStore = useRootStore();
	const clusterInfo = ref(null);
	const isAvailable = computed(() => clusterInfo.value !== null);
	async function fetchClusterInfo() {
		try {
			clusterInfo.value = await getClusterInfo(rootStore.restApiContext);
		} catch (error) {
			console.debug("Failed to fetch instance registry cluster info", error);
		}
	}
	return {
		clusterInfo,
		isAvailable,
		fetchClusterInfo
	};
});
//#endregion
//#region src/app/composables/useDebugInfo.ts
function useDebugInfo() {
	const settingsStore = useSettingsStore();
	const rootStore = useRootStore();
	const instanceRegistryStore = useInstanceRegistryStore();
	const { isTouchDevice, userAgent } = useDeviceSupport();
	const coreInfo = (skipSensitive) => {
		const info = {
			n8nVersion: rootStore.versionCli,
			platform: settingsStore.isDocker && settingsStore.deploymentType === "cloud" ? "docker (cloud)" : settingsStore.isDocker ? "docker (self-hosted)" : "npm",
			nodeJsVersion: settingsStore.nodeJsVersion,
			nodeEnv: settingsStore.nodeEnv,
			database: settingsStore.databaseType === "postgresdb" ? "postgres" : settingsStore.databaseType,
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
	const clusterInfo = () => {
		const snapshot = instanceRegistryStore.clusterInfo;
		if (!snapshot) return;
		const instances = snapshot.instances.map((i) => ({
			instanceKey: i.instanceKey,
			hostId: i.hostId,
			instanceType: i.instanceType,
			instanceRole: i.instanceRole,
			version: i.version
		}));
		const versions = [...new Set(instances.map((i) => i.version))].sort();
		const checks = Object.values(snapshot.checks).map((c) => ({
			check: c.check,
			status: c.status,
			warnings: c.warnings.length > 0 ? c.warnings.map((w) => w.code).join("; ") : "-"
		})).sort((a, b) => a.check.localeCompare(b.check));
		return {
			instanceCount: instances.length,
			versions: versions.join(", "),
			instances,
			checks
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
		const cluster = clusterInfo();
		if (cluster) debugInfo.cluster = cluster;
		return debugInfo;
	};
	const toMarkdown = (debugInfo, { secondaryHeader }) => {
		const extraLevel = secondaryHeader ? "#" : "";
		let markdown = `${extraLevel}# Debug info\n\n`;
		for (const sectionKey in debugInfo) {
			markdown += `${extraLevel}## ${sectionKey}\n\n`;
			const section = debugInfo[sectionKey];
			if (!section) continue;
			for (const [itemKey, itemValue] of Object.entries(section)) if (Array.isArray(itemValue)) {
				markdown += `- ${itemKey}:\n`;
				for (const entry of itemValue) {
					const parts = Object.entries(entry).map(([k, v]) => `${k}: ${v}`);
					markdown += `  - ${parts.join(", ")}\n`;
				}
			} else markdown += `- ${itemKey}: ${itemValue}\n`;
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
//#endregion
//#region src/app/constants/externalLinks.ts
var EXTERNAL_LINKS = {
	QUICKSTART_VIDEO: "https://www.youtube.com/watch?v=4cQWJViybAQ",
	DOCUMENTATION: "https://docs.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
	FORUM: "https://community.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
	COURSES: "https://docs.n8n.io/courses/"
};
//#endregion
//#region src/app/composables/useBugReporting.ts
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
		})}`;
		url.searchParams.append("body", report);
		return url.toString();
	};
	return { getReportingURL };
}
//#endregion
export { useInstanceRegistryStore as i, EXTERNAL_LINKS as n, useDebugInfo as r, useBugReporting as t };

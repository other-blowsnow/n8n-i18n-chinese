import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { _ as useRouter } from "./htmlUtils-6WNyAs6s.js";
import { ht as useAiGatewayStore } from "./workflows.store-CqcYpj8n.js";
import { t as useSettingsStore } from "./settings.store-BlV3VFh0.js";
import "./settings.store-CYihJKMA.js";
import { r as useWorkflowSaving } from "./builder.store-DEST6SJ_.js";
//#region src/app/composables/useAiGateway.ts
function useAiGateway() {
	const settingsStore = useSettingsStore();
	const { saveCurrentWorkflow } = useWorkflowSaving({ router: useRouter() });
	const aiGatewayStore = useAiGatewayStore();
	const balance = computed(() => aiGatewayStore.balance);
	const budget = computed(() => aiGatewayStore.budget);
	const fetchError = computed(() => aiGatewayStore.fetchError);
	const isEnabled = computed(() => settingsStore.isAiGatewayEnabled);
	async function fetchWallet() {
		if (!isEnabled.value) return;
		await aiGatewayStore.fetchWallet();
	}
	const isCredentialTypeSupported = (credentialType) => aiGatewayStore.isCredentialTypeSupported(credentialType);
	const isActionSupported = (nodeName, resource, operation) => aiGatewayStore.isActionSupported(nodeName, resource, operation);
	const isNodeTypeVersionSupported = (nodeName, typeVersion) => aiGatewayStore.isNodeTypeVersionSupported(nodeName, typeVersion);
	const isActionOptionVisible = (node, parameterName, optionValue) => aiGatewayStore.isActionOptionVisible(node, parameterName, optionValue);
	const isNodePropertyHidden = (node, propertyName) => aiGatewayStore.isNodePropertyHidden(node, propertyName);
	async function fetchConfig() {
		if (!isEnabled.value) return;
		await aiGatewayStore.fetchConfig();
	}
	async function saveAfterToggle() {
		await saveCurrentWorkflow({}, false, false, true);
	}
	return {
		isEnabled,
		balance,
		budget,
		fetchError,
		fetchConfig,
		fetchWallet,
		isCredentialTypeSupported,
		isActionSupported,
		isActionOptionVisible,
		isNodeTypeVersionSupported,
		isNodePropertyHidden,
		saveAfterToggle
	};
}
//#endregion
export { useAiGateway as t };

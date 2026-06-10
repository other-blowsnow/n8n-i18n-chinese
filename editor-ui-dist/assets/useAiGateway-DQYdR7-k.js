import { S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { gt as useRouter } from "./src-DFOx8N22.js";
import { xt as useAiGatewayStore } from "./workflows.store-DyUv-2Dd.js";
import { t as useSettingsStore } from "./settings.store-D_uIyAbF.js";
import { r as useWorkflowSaving } from "./builder.store-B0pC9-hX.js";
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
		saveAfterToggle
	};
}
//#endregion
export { useAiGateway as t };

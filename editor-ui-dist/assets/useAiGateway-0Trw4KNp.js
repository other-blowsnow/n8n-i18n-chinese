import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ut as useRouter } from "./src-CQp8jinp.js";
import { Q as useAiGatewayStore } from "./users.store-CrqnMcMW.js";
import { t as useSettingsStore } from "./settings.store-DxznEiK8.js";
import { r as useWorkflowSaving } from "./builder.store-0as58Jvn.js";
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
		saveAfterToggle
	};
}
//#endregion
export { useAiGateway as t };

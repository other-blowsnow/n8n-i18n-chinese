import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ut as useRouter } from "./src-Bm0WyPTa.js";
import { Bt as useWorkflowSaving, Q as useAiGatewayStore } from "./users.store-Bwd7Kd4_.js";
import { t as useSettingsStore } from "./settings.store-f02P_MNr.js";
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

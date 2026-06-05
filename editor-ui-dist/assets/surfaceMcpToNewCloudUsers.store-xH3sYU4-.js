import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { Zl as SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT } from "./constants-Brs44Mbc.js";
import { T as defineStore } from "./useRootStore-NTSmdx9S.js";
import { Rn as STORES } from "./settings.store-CrL-o4BC.js";
import { _ as useStorage, g as usePostHog, p as useTelemetry } from "./users.store-ByD75lsx.js";
//#region src/experiments/surfaceMcpToNewCloudUsers/stores/surfaceMcpToNewCloudUsers.store.ts
var FIRST_OPEN_SEEN_STORAGE_KEY = "N8N_SURFACE_MCP_TO_NEW_CLOUD_USERS_FIRST_OPEN_SEEN";
var FIRST_OPEN_DISMISSED_STORAGE_KEY = "N8N_SURFACE_MCP_TO_NEW_CLOUD_USERS_FIRST_OPEN_DISMISSED";
var useSurfaceMcpToNewCloudUsersStore = defineStore(STORES.EXPERIMENT_SURFACE_MCP_TO_NEW_CLOUD_USERS, () => {
	const posthogStore = usePostHog();
	const telemetry = useTelemetry();
	const firstOpenSeenStorage = useStorage(FIRST_OPEN_SEEN_STORAGE_KEY);
	const firstOpenDismissedStorage = useStorage(FIRST_OPEN_DISMISSED_STORAGE_KEY);
	const currentVariant = computed(() => posthogStore.getVariant(SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT.name));
	const isTileVariant = computed(() => {
		const variant = currentVariant.value;
		return variant === SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT.variant1 || variant === SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT.variant2;
	});
	const isFirstOpenModalVariant = computed(() => false);
	const isEnabled = computed(() => Boolean(currentVariant.value));
	const hasSeenFirstEligibleOpen = computed(() => firstOpenSeenStorage.value === "true");
	const hasDismissedFirstOpenModal = computed(() => firstOpenDismissedStorage.value === "true");
	const getTelemetryPayload = (payload = {}) => ({
		...payload,
		variant: currentVariant.value
	});
	function markFirstEligibleOpenSeen() {
		firstOpenSeenStorage.value = "true";
	}
	function dismissFirstOpenModal() {
		markFirstEligibleOpenSeen();
		firstOpenDismissedStorage.value = "true";
	}
	function trackEntryPointViewed(surface, entryPoint, mcpAccessEnabled) {
		telemetry.track("MCP onboarding entry point viewed", getTelemetryPayload({
			surface,
			entry_point: entryPoint,
			mcp_access_enabled: mcpAccessEnabled
		}));
	}
	function trackOpportunityViewed(surface, entryPoint, surfaceAvailable, suppressedBy, mcpAccessEnabled) {
		telemetry.track("MCP onboarding opportunity viewed", getTelemetryPayload({
			surface,
			entry_point: entryPoint,
			eligible: true,
			surface_available: surfaceAvailable,
			suppressed_by: suppressedBy,
			mcp_access_enabled: mcpAccessEnabled
		}));
	}
	function trackOpened(surface, payload = {}) {
		telemetry.track("MCP onboarding opened", getTelemetryPayload({
			surface,
			...payload.entryPoint ? { entry_point: payload.entryPoint } : {},
			...payload.mcpAccessEnabled !== void 0 ? { mcp_access_enabled: payload.mcpAccessEnabled } : {}
		}));
	}
	function trackDismissed(surface, payload = {}) {
		telemetry.track("MCP onboarding dismissed", getTelemetryPayload({
			surface,
			...payload.activeClient ? { active_client: payload.activeClient } : {},
			...payload.enabledDuringThisOpen !== void 0 ? { enabled_during_this_open: payload.enabledDuringThisOpen } : {},
			...payload.mcpAccessEnabled !== void 0 ? { mcp_access_enabled: payload.mcpAccessEnabled } : {}
		}));
	}
	function trackEnableClicked(surface) {
		telemetry.track("MCP onboarding enable clicked", getTelemetryPayload({ surface }));
	}
	function trackEnabled(surface) {
		telemetry.track("MCP onboarding enabled", getTelemetryPayload({ surface }));
	}
	function trackEnableFailed(surface, errorType) {
		telemetry.track("MCP onboarding enable failed", getTelemetryPayload({
			surface,
			error_type: errorType
		}));
	}
	function trackClientSelected(surface, client) {
		telemetry.track("MCP onboarding client selected", getTelemetryPayload({
			surface,
			client
		}));
	}
	function trackSetupShown(surface, client, setupType) {
		telemetry.track("MCP onboarding setup shown", getTelemetryPayload({
			surface,
			client,
			setup_type: setupType
		}));
	}
	function trackCopiedParameter(surface, client, parameter) {
		telemetry.track("MCP onboarding copied parameter", getTelemetryPayload({
			surface,
			client,
			parameter
		}));
	}
	function reset() {
		firstOpenSeenStorage.value = null;
		firstOpenDismissedStorage.value = null;
	}
	return {
		currentVariant,
		isEnabled,
		isTileVariant,
		isFirstOpenModalVariant,
		hasSeenFirstEligibleOpen,
		hasDismissedFirstOpenModal,
		markFirstEligibleOpenSeen,
		dismissFirstOpenModal,
		trackEntryPointViewed,
		trackOpportunityViewed,
		trackOpened,
		trackDismissed,
		trackEnableClicked,
		trackEnabled,
		trackEnableFailed,
		trackClientSelected,
		trackSetupShown,
		trackCopiedParameter,
		reset
	};
});
//#endregion
export { useSurfaceMcpToNewCloudUsersStore as t };

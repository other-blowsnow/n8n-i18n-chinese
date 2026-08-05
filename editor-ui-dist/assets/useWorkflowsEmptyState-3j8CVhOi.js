import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-BtQ700Y1.js";
import { nn as N8nLoading_default } from "./src-DXQiQnOc.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { dn as useProjectsStore, fn as useSourceControlStore, vt as useCredentialsStore } from "./workflows.store-Z3P-CUZH.js";
import { i as defineStore } from "./constants-_KyxTaQQ.js";
import { t as STORES } from "./constants2-D6qsHKVK.js";
import { da as getResourcePermissions } from "./src-32cSG5_t.js";
import { Fa as CREDENTIALS_APP_SELECTION_EXPERIMENT } from "./constants-BmxNDTNh.js";
import { ln as useStorage, n as useTelemetry, t as usePostHog } from "./posthog.store-Dhul6ZJs.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-UBw80jdT.js";
//#region src/app/components/layouts/ResourcesListLoadingState.vue?vue&type=script&setup=true&lang.ts
var ResourcesListLoadingState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourcesListLoadingState",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nLoading_default), {
				rows: 3,
				variant: "p"
			})], 2);
		};
	}
});
var ResourcesListLoadingState_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1gl5j_125" };
var ResourcesListLoadingState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResourcesListLoadingState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourcesListLoadingState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/credentialsAppSelection/stores/credentialsAppSelection.store.ts
var APP_SELECTION_DISMISSED_KEY = "N8N_APP_SELECTION_DISMISSED";
var useCredentialsAppSelectionStore = defineStore(STORES.EXPERIMENT_CREDENTIALS_APP_SELECTION, () => {
	const posthogStore = usePostHog();
	const credentialsStore = useCredentialsStore();
	const cloudPlanStore = useCloudPlanStore();
	const telemetry = useTelemetry();
	const dismissedStorage = useStorage(APP_SELECTION_DISMISSED_KEY);
	const isDismissed = computed(() => dismissedStorage.value === "true");
	const currentVariant = computed(() => posthogStore.getVariant(CREDENTIALS_APP_SELECTION_EXPERIMENT.name));
	const isVariant = computed(() => currentVariant.value === CREDENTIALS_APP_SELECTION_EXPERIMENT.variant);
	const userIsTrialing = computed(() => cloudPlanStore.userIsTrialing);
	const isFeatureEnabled = computed(() => {
		if (isDismissed.value) return false;
		if (!isVariant.value || !userIsTrialing.value) return false;
		return true;
	});
	const connectedCount = computed(() => credentialsStore.allCredentials.length);
	const canContinue = computed(() => connectedCount.value > 0);
	function trackPageViewed() {
		telemetry.track("App selection page viewed");
	}
	function trackSearchPerformed(searchTerm, resultCount) {
		telemetry.track("App selection search performed", {
			search_term: searchTerm,
			result_count: resultCount
		});
	}
	function dismiss() {
		dismissedStorage.value = "true";
	}
	function trackCompleted(connectedApps) {
		telemetry.track("App selection completed", {
			connected_count: connectedCount.value,
			connected_apps: connectedApps
		});
		dismiss();
	}
	function reset() {
		dismissedStorage.value = null;
	}
	return {
		currentVariant,
		isFeatureEnabled,
		isDismissed,
		connectedCount,
		canContinue,
		trackPageViewed,
		trackSearchPerformed,
		trackCompleted,
		dismiss,
		reset
	};
});
//#endregion
//#region src/features/workflows/composables/useWorkflowsEmptyState.ts
/**
* Composable for managing workflows empty state display logic.
* Handles heading, description, and permission-based visibility
* for the empty state when no workflows exist.
*/
function useWorkflowsEmptyState() {
	const i18n = useI18n();
	const projectsStore = useProjectsStore();
	const sourceControlStore = useSourceControlStore();
	const credentialsAppSelectionStore = useCredentialsAppSelectionStore();
	const personalProject = computed(() => projectsStore.personalProject);
	const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
	const projectPermissions = computed(() => {
		return getResourcePermissions(projectsStore.currentProject?.scopes ?? personalProject.value?.scopes);
	});
	const canCreateWorkflow = computed(() => !readOnlyEnv.value && projectPermissions.value.workflow.create);
	return {
		showAppSelection: computed(() => {
			return credentialsAppSelectionStore.isFeatureEnabled && !readOnlyEnv.value && projectPermissions.value.workflow.create;
		}),
		emptyStateHeading: computed(() => i18n.baseText("workflows.empty.onboarding.heading")),
		emptyStateDescription: computed(() => {
			if (readOnlyEnv.value) return i18n.baseText("workflows.empty.description.readOnlyEnv");
			else if (!projectPermissions.value.workflow.create) return i18n.baseText("workflows.empty.description.noPermission");
			return "";
		}),
		canCreateWorkflow,
		readOnlyEnv,
		projectPermissions
	};
}
//#endregion
export { useCredentialsAppSelectionStore as n, ResourcesListLoadingState_default as r, useWorkflowsEmptyState as t };

import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CfxRLJPc.js";
import { Ki as N8nActionBox_default } from "./src-XWsjz-dU.js";
import { pd as EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT } from "./constants-BaNoJas_.js";
import { K as COMMUNITY_PLUS_ENROLLMENT_MODAL, f as useUIStore, g as usePostHog } from "./users.store-CHh4wCL_.js";
import { t as useUsageStore } from "./usage.store-CshWLBoT.js";
//#region src/experiments/evaluationsWizardSidepanel/useEvaluationsWizardSidepanelExperiment.ts
function useEvaluationsWizardSidepanelExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT.name) === EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT.variant) };
}
//#endregion
//#region src/features/ai/evaluation.ee/components/Paywall/EvaluationsPaywall.vue
var EvaluationsPaywall_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsPaywall",
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const goToUpgrade = async () => {
			uiStore.openModalWithData({
				name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
				data: { customHeading: void 0 }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nActionBox_default), {
				"data-test-id": "evaluations-unlicensed",
				heading: unref(i18n).baseText("evaluations.paywall.title"),
				description: unref(i18n).baseText("evaluations.paywall.description"),
				"button-text": unref(i18n).baseText("evaluations.paywall.cta"),
				onClick: goToUpgrade
			}, null, 8, [
				"heading",
				"description",
				"button-text"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/composables/useEvaluationsLicense.ts
var licensePromise = null;
function useEvaluationsLicense() {
	const usageStore = useUsageStore();
	const isLicensed = computed(() => usageStore.workflowsWithEvaluationsLimit !== 0);
	const isResolved = computed(() => usageStore.hasLoadedLicense);
	async function ensureLicenseLoaded() {
		if (!licensePromise) licensePromise = usageStore.getLicenseInfo().catch(() => {
			licensePromise = null;
		});
		await licensePromise;
	}
	return {
		isLicensed,
		isResolved,
		ensureLicenseLoaded
	};
}
//#endregion
export { EvaluationsPaywall_default as n, useEvaluationsWizardSidepanelExperiment as r, useEvaluationsLicense as t };

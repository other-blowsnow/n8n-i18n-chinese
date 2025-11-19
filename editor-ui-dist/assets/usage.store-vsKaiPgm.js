import { C as computed, Pt as reactive } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { Bo as useSettingsStore, Jo as getLicense, Qs as useRootStore, Xo as renewLicense, Yo as registerCommunityEdition, Zo as requestLicenseTrial, qo as activateLicenseKey, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
var DEFAULT_PLAN_NAME = "Community";
var DEFAULT_STATE = {
	loading: true,
	data: {
		usage: {
			activeWorkflowTriggers: {
				limit: -1,
				value: 0,
				warningThreshold: .8
			},
			workflowsHavingEvaluations: {
				value: 0,
				limit: 0
			}
		},
		license: {
			planId: "",
			planName: DEFAULT_PLAN_NAME
		}
	}
};
const useUsageStore = defineStore("usage", () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const state = reactive({ ...DEFAULT_STATE });
	const planName = computed(() => state.data.license.planName || DEFAULT_PLAN_NAME);
	const planId = computed(() => state.data.license.planId);
	const activeWorkflowTriggersLimit = computed(() => state.data.usage.activeWorkflowTriggers.limit);
	const activeWorkflowTriggersCount = computed(() => state.data.usage.activeWorkflowTriggers.value);
	const workflowsWithEvaluationsLimit = computed(() => state.data.usage.workflowsHavingEvaluations.limit);
	const workflowsWithEvaluationsCount = computed(() => state.data.usage.workflowsHavingEvaluations.value);
	const executionPercentage = computed(() => activeWorkflowTriggersCount.value / activeWorkflowTriggersLimit.value * 100);
	const instanceId = computed(() => settingsStore.settings.instanceId);
	const managementToken = computed(() => state.data.managementToken);
	const appVersion = computed(() => settingsStore.settings.versionCli);
	const commonSubscriptionAppUrlQueryParams = computed(() => `instanceid=${instanceId.value}&version=${appVersion.value}`);
	const subscriptionAppUrl = computed(() => settingsStore.settings.license.environment === "production" ? "https://subscription.n8n.io" : "https://staging-subscription.n8n.io");
	const setLoading = (loading) => {
		state.loading = loading;
	};
	const setData = (data) => {
		state.data = data;
	};
	const getLicenseInfo = async () => {
		setData(await getLicense(rootStore.restApiContext));
	};
	const activateLicense = async (activationKey, eulaUri) => {
		setData(await activateLicenseKey(rootStore.restApiContext, {
			activationKey,
			eulaUri
		}));
		await settingsStore.getSettings();
		await settingsStore.getModuleSettings();
	};
	const refreshLicenseManagementToken = async () => {
		try {
			setData(await renewLicense(rootStore.restApiContext));
		} catch (error) {
			await getLicenseInfo();
		}
	};
	const requestEnterpriseLicenseTrial = async () => {
		await requestLicenseTrial(rootStore.restApiContext);
	};
	const registerCommunityEdition$1 = async (email) => await registerCommunityEdition(rootStore.restApiContext, { email });
	return {
		setLoading,
		getLicenseInfo,
		setData,
		activateLicense,
		refreshLicenseManagementToken,
		requestEnterpriseLicenseTrial,
		registerCommunityEdition: registerCommunityEdition$1,
		planName,
		planId,
		activeWorkflowTriggersLimit,
		activeWorkflowTriggersCount,
		workflowsWithEvaluationsLimit,
		workflowsWithEvaluationsCount,
		executionPercentage,
		instanceId,
		managementToken,
		appVersion,
		isCloseToLimit: computed(() => state.data.usage.activeWorkflowTriggers.limit < 0 ? false : activeWorkflowTriggersCount.value / activeWorkflowTriggersLimit.value >= state.data.usage.activeWorkflowTriggers.warningThreshold),
		viewPlansUrl: computed(() => `${subscriptionAppUrl.value}?${commonSubscriptionAppUrlQueryParams.value}`),
		managePlanUrl: computed(() => `${subscriptionAppUrl.value}/manage?token=${managementToken.value}&${commonSubscriptionAppUrlQueryParams.value}`),
		isLoading: computed(() => state.loading),
		telemetryPayload: computed(() => ({
			instance_id: instanceId.value,
			action: "view_plans",
			plan_name_current: planName.value,
			usage: activeWorkflowTriggersCount.value,
			quota: activeWorkflowTriggersLimit.value
		}))
	};
});
export { useUsageStore as t };

import { C as computed, It as ref, Pt as reactive } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { Bo as useSettingsStore, Cc as STORES, Gn as hasPermission, Gs as getCurrentUsage, Hs as getAdminPanelLoginCode, Qs as useRootStore, Us as getCloudUserInfo, Ws as getCurrentPlan, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
import { $i as DateTime, Ws as CLOUD_TRIAL_CHECK_INTERVAL } from "./constants-C_oOJnqT.js";
var DEFAULT_STATE = {
	initialized: false,
	data: null,
	usage: null,
	loadingPlan: false
};
var DYNAMIC_TRIAL_BANNER_DISMISSED_KEY = "n8n-dynamic-trial-banner-dismissed";
const useCloudPlanStore = defineStore(STORES.CLOUD_PLAN, () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const state = reactive(DEFAULT_STATE);
	const currentUserCloudInfo = ref(null);
	const isDynamicTrialBannerDismissed = ref(localStorage.getItem(DYNAMIC_TRIAL_BANNER_DISMISSED_KEY) === "true");
	const reset = () => {
		currentUserCloudInfo.value = null;
		state.data = null;
		state.usage = null;
	};
	const userIsTrialing = computed(() => state.data?.metadata?.group === "trial");
	const currentPlanData = computed(() => state.data);
	const currentUsageData = computed(() => state.usage);
	const selectedApps = computed(() => currentUserCloudInfo.value?.selectedApps);
	const codingSkill = computed(() => {
		const information = currentUserCloudInfo.value?.information;
		if (!information) return 0;
		if (!("which_of_these_do_you_feel_comfortable_doing" in information && information.which_of_these_do_you_feel_comfortable_doing && Array.isArray(information.which_of_these_do_you_feel_comfortable_doing))) return 0;
		return information.which_of_these_do_you_feel_comfortable_doing.length;
	});
	const dynamicTrialBannerText = computed(() => {
		return currentUserCloudInfo.value?.trialBannerData?.bannerText;
	});
	const shouldShowDynamicTrialBanner = computed(() => {
		return dynamicTrialBannerText.value !== void 0 && dynamicTrialBannerText.value !== "" && !isDynamicTrialBannerDismissed.value;
	});
	const dismissDynamicTrialBanner = () => {
		isDynamicTrialBannerDismissed.value = true;
		localStorage.setItem(DYNAMIC_TRIAL_BANNER_DISMISSED_KEY, "true");
	};
	const trialExpired = computed(() => state.data?.metadata?.group === "trial" && DateTime.now().toMillis() >= DateTime.fromISO(state.data?.expirationDate).toMillis());
	const allExecutionsUsed = computed(() => {
		if (!state.usage?.executions || !state.data?.monthlyExecutionsLimit) return false;
		return state.usage?.executions >= state.data?.monthlyExecutionsLimit;
	});
	const hasCloudPlan = computed(() => {
		const cloudUserId = settingsStore.settings.n8nMetadata?.userId;
		return hasPermission(["instanceOwner"]) && settingsStore.isCloudDeployment && !!cloudUserId;
	});
	const getUserCloudAccount = async () => {
		if (!hasCloudPlan.value) throw new Error("User does not have a cloud plan");
		let cloudUser = null;
		try {
			cloudUser = await getCloudUserInfo(rootStore.restApiContext);
			currentUserCloudInfo.value = cloudUser;
		} catch (error) {
			throw new Error(error.message);
		}
	};
	const getAutoLoginCode = async () => {
		return await getAdminPanelLoginCode(rootStore.restApiContext);
	};
	const getOwnerCurrentPlan = async () => {
		if (!hasCloudPlan.value) throw new Error("User does not have a cloud plan");
		state.loadingPlan = true;
		let plan;
		try {
			plan = await getCurrentPlan(rootStore.restApiContext);
			state.data = plan;
			state.loadingPlan = false;
		} catch (error) {
			state.loadingPlan = false;
			throw new Error(error);
		}
		return plan;
	};
	const getInstanceCurrentUsage = async () => {
		const usage = await getCurrentUsage({
			baseUrl: rootStore.baseUrl,
			pushRef: ""
		});
		state.usage = usage;
		return usage;
	};
	const usageLeft = computed(() => {
		if (!state.data || !state.usage) return {
			workflowsLeft: -1,
			executionsLeft: -1
		};
		return {
			workflowsLeft: state.data.activeWorkflowsLimit - state.usage.activeWorkflows,
			executionsLeft: state.data.monthlyExecutionsLimit - state.usage.executions
		};
	});
	const trialDaysLeft = computed(() => {
		if (!state.data?.expirationDate) return -1;
		const differenceInMs = (/* @__PURE__ */ new Date()).valueOf() - new Date(state.data.expirationDate).valueOf();
		const differenceInDays = Math.floor(differenceInMs / (1e3 * 60 * 60 * 24));
		return Math.ceil(differenceInDays);
	});
	const startPollingInstanceUsageData = () => {
		const interval = setInterval(async () => {
			try {
				await getInstanceCurrentUsage();
				if (trialExpired.value || allExecutionsUsed.value) {
					clearTimeout(interval);
					return;
				}
			} catch {}
		}, CLOUD_TRIAL_CHECK_INTERVAL);
	};
	const checkForCloudPlanData = async () => {
		try {
			await getOwnerCurrentPlan();
			if (!userIsTrialing.value) return;
			await getInstanceCurrentUsage();
			startPollingInstanceUsageData();
		} catch (e) {
			throw new Error(e.message);
		}
	};
	const fetchUserCloudAccount = async () => {
		try {
			await getUserCloudAccount();
		} catch (e) {
			throw new Error(e.message);
		}
	};
	const initialize = async () => {
		if (state.initialized) return;
		try {
			await checkForCloudPlanData();
		} catch (error) {
			console.warn("Error checking for cloud plan data:", error);
		}
		try {
			await fetchUserCloudAccount();
		} catch (error) {
			console.warn("Error fetching user cloud account:", error);
		}
		state.initialized = true;
	};
	const generateCloudDashboardAutoLoginLink = async (data) => {
		const searchParams = new URLSearchParams();
		const adminPanelHost = new URL(window.location.href).host.split(".").slice(1).join(".");
		const { code } = await getAutoLoginCode();
		const linkUrl = `https://${adminPanelHost}/login`;
		searchParams.set("code", code);
		searchParams.set("returnPath", data.redirectionPath);
		return `${linkUrl}?${searchParams.toString()}`;
	};
	return {
		state,
		usageLeft,
		trialDaysLeft,
		userIsTrialing,
		currentPlanData,
		currentUsageData,
		trialExpired,
		allExecutionsUsed,
		hasCloudPlan,
		currentUserCloudInfo,
		generateCloudDashboardAutoLoginLink,
		initialize,
		getOwnerCurrentPlan,
		getInstanceCurrentUsage,
		reset,
		checkForCloudPlanData,
		fetchUserCloudAccount,
		getAutoLoginCode,
		selectedApps,
		codingSkill,
		dynamicTrialBannerText,
		shouldShowDynamicTrialBanner,
		dismissDynamicTrialBanner
	};
});
export { useCloudPlanStore as t };

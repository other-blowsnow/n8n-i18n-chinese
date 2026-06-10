import { Ft as ref, Nt as reactive, S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { hc as DateTime, pu as CLOUD_TRIAL_CHECK_INTERVAL } from "./constants-BMUE7W6Y.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-BOF8LYEF.js";
import { Cn as getCurrentUsage, Rn as STORES, Sn as getCurrentPlan, bn as getAdminPanelLoginCode, t as useSettingsStore, xn as getCloudUserInfo } from "./settings.store-D_uIyAbF.js";
import { n as hasPermission } from "./users.store-OUM63rct.js";
//#region src/app/stores/cloudPlan.store.ts
var DEFAULT_STATE = {
	initialized: false,
	data: null,
	usage: null,
	loadingPlan: false
};
var useCloudPlanStore = defineStore(STORES.CLOUD_PLAN, () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const state = reactive(DEFAULT_STATE);
	const currentUserCloudInfo = ref(null);
	const now = ref(Date.now());
	const reset = () => {
		currentUserCloudInfo.value = null;
		state.data = null;
		state.usage = null;
	};
	const userIsTrialing = computed(() => state.data?.userIsTrialing ?? false);
	const bannerConfig = computed(() => state.data?.bannerConfig);
	const bannerForceShow = computed(() => bannerConfig.value?.forceShow === true);
	const isBannerDismissed = computed(() => {
		const dismissed = settingsStore.permanentlyDismissedBanners;
		return dismissed.includes("TRIAL") || dismissed.includes("TRIAL_OVER");
	});
	const shouldShowBanner = computed(() => {
		if (!bannerConfig.value) return false;
		if (!bannerDismissible.value) return true;
		return bannerForceShow.value || !isBannerDismissed.value;
	});
	const bannerTimeLeft = computed(() => ({
		show: !!bannerConfig.value?.timeLeft,
		text: bannerConfig.value?.timeLeft?.text
	}));
	const showExecutions = computed(() => bannerConfig.value?.showExecutions === true);
	const bannerCta = computed(() => ({
		text: bannerConfig.value?.cta?.text ?? "Upgrade Now",
		icon: bannerConfig.value?.cta?.icon ?? "zap",
		size: bannerConfig.value?.cta?.size ?? "small",
		style: bannerConfig.value?.cta?.style ?? "success",
		variant: bannerConfig.value?.cta?.variant,
		href: bannerConfig.value?.cta?.href
	}));
	const bannerIcon = computed(() => bannerConfig.value?.icon);
	const bannerDismissible = computed(() => bannerConfig.value?.dismissible ?? true);
	const currentPlanData = computed(() => state.data);
	const currentUsageData = computed(() => state.usage);
	const selectedApps = computed(() => currentUserCloudInfo.value?.selectedApps);
	const codingSkill = computed(() => {
		const information = currentUserCloudInfo.value?.information;
		if (!information) return 0;
		if (!("which_of_these_do_you_feel_comfortable_doing" in information && information.which_of_these_do_you_feel_comfortable_doing && Array.isArray(information.which_of_these_do_you_feel_comfortable_doing))) return 0;
		return information.which_of_these_do_you_feel_comfortable_doing.length;
	});
	const trialExpired = computed(() => state.data?.userIsTrialing && DateTime.now().toMillis() >= DateTime.fromISO(state.data?.expirationDate).toMillis());
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
	const trialTimeLeft = computed(() => {
		if (!state.data?.expirationDate) return {
			count: 0,
			unit: "days"
		};
		const msLeft = new Date(state.data.expirationDate).valueOf() - now.value;
		if (msLeft <= 0) return {
			count: 0,
			unit: "minutes"
		};
		const hours = msLeft / (1e3 * 60 * 60);
		if (hours < 1) return {
			count: Math.ceil(msLeft / (1e3 * 60)),
			unit: "minutes"
		};
		else if (hours < 24) return {
			count: Math.ceil(hours),
			unit: "hours"
		};
		else return {
			count: Math.ceil(hours / 24),
			unit: "days"
		};
	});
	const startPollingInstanceUsageData = () => {
		const interval = setInterval(async () => {
			now.value = Date.now();
			try {
				await getInstanceCurrentUsage();
				if (trialExpired.value || allExecutionsUsed.value) {
					clearInterval(interval);
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
		trialTimeLeft,
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
		shouldShowBanner,
		bannerConfig,
		bannerForceShow,
		isBannerDismissed,
		bannerTimeLeft,
		showExecutions,
		bannerCta,
		bannerIcon,
		bannerDismissible
	};
});
//#endregion
export { useCloudPlanStore as t };

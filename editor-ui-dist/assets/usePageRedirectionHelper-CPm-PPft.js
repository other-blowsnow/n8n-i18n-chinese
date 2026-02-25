import { yt as useI18n } from "./_MapCache-D28pXLlm.js";
import { Lt as useTelemetry, Tr as useMessage, lr as useCloudPlanStore, t as useUsersStore, un as useBuilderStore, ws as useSettingsStore } from "./users.store-B-dhu6_V.js";
import { Ss as MODAL_CONFIRM, b as N8N_PRICING_PAGE_URL } from "./constants-DM6W84kp.js";
import { t as useVersionsStore } from "./versions.store-Ab008Wjp.js";
async function confirmIfBuilderStreaming() {
	const builderStore = useBuilderStore();
	if (!builderStore.streaming) return true;
	const { confirm } = useMessage();
	const i18n = useI18n();
	if (await confirm(i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.message"), {
		title: i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.title"),
		type: "warning",
		confirmButtonText: i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.confirmButtonText"),
		cancelButtonText: i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.cancelButtonText"),
		showClose: true
	}) !== "confirm") return false;
	builderStore.abortStreaming();
	return true;
}
function usePageRedirectionHelper() {
	const usersStore = useUsersStore();
	const cloudPlanStore = useCloudPlanStore();
	const versionsStore = useVersionsStore();
	const telemetry = useTelemetry();
	const settingsStore = useSettingsStore();
	const goToVersions = async () => {
		let versionsLink = versionsStore.infoUrl;
		if (usersStore.isInstanceOwner && settingsStore.isCloudDeployment) versionsLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath: "/manage" });
		location.href = versionsLink;
	};
	const goToDashboard = async () => {
		if (usersStore.isInstanceOwner && settingsStore.isCloudDeployment) {
			const dashboardLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath: "/dashboard" });
			location.href = dashboardLink;
		}
	};
	const goToUpgrade = async (source, utm_campaign, mode = "open") => {
		if (!await confirmIfBuilderStreaming()) return;
		const { usageLeft, trialDaysLeft, userIsTrialing } = cloudPlanStore;
		const { executionsLeft, workflowsLeft } = usageLeft;
		const deploymentType = settingsStore.deploymentType;
		telemetry.track("User clicked upgrade CTA", {
			source,
			isTrial: userIsTrialing,
			deploymentType,
			trialDaysLeft,
			executionsLeft,
			workflowsLeft
		});
		const upgradeLink = await generateUpgradeLink(source, utm_campaign);
		if (mode === "open") window.open(upgradeLink, "_blank");
		else location.href = upgradeLink;
	};
	const generateUpgradeLink = async (source, utm_campaign) => {
		let upgradeLink = N8N_PRICING_PAGE_URL;
		if (usersStore.isInstanceOwner && settingsStore.isCloudDeployment) upgradeLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath: "/account/change-plan" });
		const url = new URL(upgradeLink);
		if (utm_campaign) url.searchParams.set("utm_campaign", utm_campaign);
		if (source) url.searchParams.set("source", source);
		return url.toString();
	};
	return {
		goToDashboard,
		goToVersions,
		goToUpgrade
	};
}
export { usePageRedirectionHelper as t };

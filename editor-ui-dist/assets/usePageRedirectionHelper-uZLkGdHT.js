import { at as useI18n } from "./core-p4E5FBDC.js";
import { t as useMessage } from "./useMessage-CgoEcN5J.js";
import { qt as useTelemetry, t as useUsersStore } from "./users.store-DId3pj1b.js";
import { _ as N8N_PRICING_PAGE_URL } from "./constants-DKn5DlOG.js";
import { t as useSettingsStore } from "./settings.store-BY3m7mSb.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Cx5I3rsm.js";
import { t as useVersionsStore } from "./versions.store-C1NrNhmw.js";
import { t as useBuilderStore } from "./builder.store-BRqs8uzN.js";
//#region src/features/ai/assistant/composables/useBuilderStreamingGuard.ts
/**
* Shows a confirmation dialog if the AI builder is currently streaming.
* Returns `true` if the caller should proceed (not streaming, or user confirmed).
* Returns `false` if the user cancelled and the caller should abort.
*
* When the user confirms, streaming is aborted before returning.
*/
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
//#endregion
//#region src/app/composables/usePageRedirectionHelper.ts
function usePageRedirectionHelper() {
	const usersStore = useUsersStore();
	const cloudPlanStore = useCloudPlanStore();
	const versionsStore = useVersionsStore();
	const telemetry = useTelemetry();
	const settingsStore = useSettingsStore();
	/**
	* If the user is an instance owner in the cloud, it generates an auto-login link to the
	* cloud dashboard that redirects the user to the /manage page where they can upgrade to a new n8n version.
	* Otherwise, it redirect them to our docs.
	*/
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
	/**
	* If the user is an instance owner in the cloud, it generates an auto-login link to the
	* cloud dashboard that redirects the user to the /account/change-plan page where they upgrade/downgrade the current plan.
	* Otherwise, it redirect them our website.
	*/
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
//#endregion
export { usePageRedirectionHelper as t };

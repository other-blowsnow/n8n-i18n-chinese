import { Bo as useSettingsStore, er as useUsersStore, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { b as N8N_PRICING_PAGE_URL } from "./constants-C_oOJnqT.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Dw9c9iy4.js";
import { t as useVersionsStore } from "./versions.store-DbkVHo9d.js";
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

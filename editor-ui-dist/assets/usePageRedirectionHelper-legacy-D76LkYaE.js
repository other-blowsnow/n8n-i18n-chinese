;
(function () {
  System.register(["./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./versions.store-legacy-CwMoPJwF.js"], function (_export, _context) {
    "use strict";

    var useSettingsStore, useUsersStore, useTelemetry, N8N_PRICING_PAGE_URL, useCloudPlanStore, useVersionsStore;
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
        if (usersStore.isInstanceOwner && settingsStore.isCloudDeployment) versionsLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({
          redirectionPath: "/manage"
        });
        location.href = versionsLink;
      };
      const goToDashboard = async () => {
        if (usersStore.isInstanceOwner && settingsStore.isCloudDeployment) {
          const dashboardLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({
            redirectionPath: "/dashboard"
          });
          location.href = dashboardLink;
        }
      };
      /**
      * If the user is an instance owner in the cloud, it generates an auto-login link to the
      * cloud dashboard that redirects the user to the /account/change-plan page where they upgrade/downgrade the current plan.
      * Otherwise, it redirect them our website.
      */
      const goToUpgrade = async (source, utm_campaign, mode = "open") => {
        const {
          usageLeft,
          trialDaysLeft,
          userIsTrialing
        } = cloudPlanStore;
        const {
          executionsLeft,
          workflowsLeft
        } = usageLeft;
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
        if (mode === "open") window.open(upgradeLink, "_blank");else location.href = upgradeLink;
      };
      const generateUpgradeLink = async (source, utm_campaign) => {
        let upgradeLink = N8N_PRICING_PAGE_URL;
        if (usersStore.isInstanceOwner && settingsStore.isCloudDeployment) upgradeLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({
          redirectionPath: "/account/change-plan"
        });
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
    _export("t", usePageRedirectionHelper);
    return {
      setters: [function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_constantsLegacy00NJs) {
        N8N_PRICING_PAGE_URL = _constantsLegacy00NJs.b;
      }, function (_cloudPlanStoreLegacy013Js) {
        useCloudPlanStore = _cloudPlanStoreLegacy013Js.t;
      }, function (_versionsStoreLegacy01BJs) {
        useVersionsStore = _versionsStoreLegacy01BJs.t;
      }],
      execute: function () {}
    };
  });
})();
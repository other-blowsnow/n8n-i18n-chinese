import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-p4E5FBDC.js";
import { ut as useRouter } from "./src-DJmr1lxY.js";
import { Br as hasPermission, r as useUIStore } from "./users.store-DId3pj1b.js";
import { zr as VIEWS } from "./constants-DKn5DlOG.js";
import { t as useSettingsStore } from "./settings.store-BY3m7mSb.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-BUzjkJse.js";
import { t as useAiGateway } from "./useAiGateway-5g6Zid9d.js";
//#region src/app/composables/useUserHelpers.ts
function useUserHelpers(router) {
	const canUserAccessRouteByName = (name) => {
		return canUserAccessRoute(router.resolve({ name }));
	};
	const canUserAccessRoute = (route) => {
		const middleware = route.meta?.middleware;
		const middlewareOptions = route.meta?.middlewareOptions;
		if (!middleware) return true;
		return hasPermission(middleware, middlewareOptions);
	};
	return { canUserAccessRouteByName };
}
//#endregion
//#region src/app/composables/useSettingsItems.ts
function useSettingsItems() {
	const router = useRouter();
	const i18n = useI18n();
	const uiStore = useUIStore();
	const settingsStore = useSettingsStore();
	const { canUserAccessRouteByName } = useUserHelpers(router);
	const { balance } = useAiGateway();
	const { check: envFeatureFlagCheck } = useEnvFeatureFlag();
	const settingsItems = computed(() => {
		const menuItems = [
			{
				id: "settings-usage-and-plan",
				icon: "chart-column-decreasing",
				label: i18n.baseText("settings.usageAndPlan.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.USAGE),
				route: { to: { name: VIEWS.USAGE } }
			},
			{
				id: "settings-personal",
				icon: "circle-user-round",
				label: i18n.baseText("settings.personal"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.PERSONAL_SETTINGS),
				route: { to: { name: VIEWS.PERSONAL_SETTINGS } }
			},
			{
				id: "settings-users",
				icon: "user-round",
				label: i18n.baseText("settings.users"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.USERS_SETTINGS),
				route: { to: { name: VIEWS.USERS_SETTINGS } }
			},
			{
				id: "settings-ai",
				icon: "sparkles",
				label: i18n.baseText("settings.ai"),
				position: "top",
				available: settingsStore.isAiAssistantEnabled && canUserAccessRouteByName(VIEWS.AI_SETTINGS),
				route: { to: { name: VIEWS.AI_SETTINGS } }
			},
			{
				id: "settings-n8n-connect",
				icon: "plug-zap",
				label: i18n.baseText("settings.n8nConnect"),
				position: "top",
				available: settingsStore.isAiGatewayEnabled && canUserAccessRouteByName(VIEWS.AI_GATEWAY_SETTINGS),
				route: { to: { name: VIEWS.AI_GATEWAY_SETTINGS } },
				creditsTag: balance.value !== void 0 ? i18n.baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${Number(balance.value).toFixed(2)}` } }) : void 0
			},
			{
				id: "settings-project-roles",
				icon: "user-round",
				label: i18n.baseText("settings.projectRoles"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.PROJECT_ROLES_SETTINGS),
				route: { to: { name: VIEWS.PROJECT_ROLES_SETTINGS } },
				new: true
			},
			{
				id: "settings-api",
				icon: "plug",
				label: i18n.baseText("settings.n8napi"),
				position: "top",
				available: settingsStore.isPublicApiEnabled && canUserAccessRouteByName(VIEWS.API_SETTINGS),
				route: { to: { name: VIEWS.API_SETTINGS } }
			},
			{
				id: "settings-external-secrets",
				icon: "vault",
				label: i18n.baseText("settings.externalSecrets.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.EXTERNAL_SECRETS_SETTINGS),
				route: { to: { name: VIEWS.EXTERNAL_SECRETS_SETTINGS } }
			},
			{
				id: "settings-credential-resolvers",
				icon: "key-round",
				label: i18n.baseText("credentialResolver.view.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.RESOLVERS),
				route: { to: { name: VIEWS.RESOLVERS } }
			},
			{
				id: "settings-source-control",
				icon: "git-branch",
				label: i18n.baseText("settings.sourceControl.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.SOURCE_CONTROL),
				route: { to: { name: VIEWS.SOURCE_CONTROL } }
			},
			{
				id: "settings-sso",
				icon: "user-lock",
				label: i18n.baseText("settings.sso"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.SSO_SETTINGS),
				route: { to: { name: VIEWS.SSO_SETTINGS } }
			},
			{
				id: "settings-encryption-keys",
				icon: "key-round",
				label: i18n.baseText("settings.encryptionKeys"),
				position: "top",
				available: envFeatureFlagCheck.value("ENCRYPTION_KEY_ROTATION") && canUserAccessRouteByName(VIEWS.ENCRYPTION_KEYS_SETTINGS),
				route: { to: { name: VIEWS.ENCRYPTION_KEYS_SETTINGS } }
			},
			{
				id: "settings-security",
				icon: "shield",
				label: i18n.baseText("settings.security"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.SECURITY_SETTINGS),
				route: { to: { name: VIEWS.SECURITY_SETTINGS } }
			},
			{
				id: "settings-ldap",
				icon: "network",
				label: i18n.baseText("settings.ldap"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.LDAP_SETTINGS),
				route: { to: { name: VIEWS.LDAP_SETTINGS } }
			},
			{
				id: "settings-workersview",
				icon: "waypoints",
				label: i18n.baseText("mainSidebar.workersView"),
				position: "top",
				available: settingsStore.isQueueModeEnabled && hasPermission(["rbac"], { rbac: { scope: "workersView:manage" } }),
				route: { to: { name: VIEWS.WORKER_VIEW } }
			}
		];
		menuItems.push({
			id: "settings-log-streaming",
			icon: "log-in",
			label: i18n.baseText("settings.log-streaming"),
			position: "top",
			available: canUserAccessRouteByName(VIEWS.LOG_STREAMING_SETTINGS),
			route: { to: { name: VIEWS.LOG_STREAMING_SETTINGS } }
		});
		menuItems.push({
			id: "settings-community-nodes",
			icon: "box",
			label: i18n.baseText("settings.communityNodes"),
			position: "top",
			available: canUserAccessRouteByName(VIEWS.COMMUNITY_NODES),
			route: { to: { name: VIEWS.COMMUNITY_NODES } }
		});
		const moduleItems = uiStore.settingsSidebarItems;
		return menuItems.concat(moduleItems.filter((item) => !menuItems.some((m) => m.id === item.id)));
	});
	return { settingsItems: computed(() => settingsItems.value.filter((item) => item.available)) };
}
//#endregion
export { useSettingsItems as t };

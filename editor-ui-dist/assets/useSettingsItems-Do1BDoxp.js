import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Rt as useRouter } from "./src-Cq27d_Gp.js";
import { ar as hasPermission, fs as useSettingsStore, r as useUIStore } from "./users.store-qBZsmf9-.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
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
function useSettingsItems() {
	const router = useRouter();
	const i18n = useI18n();
	const uiStore = useUIStore();
	const settingsStore = useSettingsStore();
	const { canUserAccessRouteByName } = useUserHelpers(router);
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
				id: "settings-project-roles",
				icon: "user-round",
				label: i18n.baseText("settings.projectRoles"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.PROJECT_ROLES_SETTINGS),
				route: { to: { name: VIEWS.PROJECT_ROLES_SETTINGS } }
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
		menuItems.push({
			id: "settings-migration-report",
			icon: "list-checks",
			label: i18n.baseText("settings.migrationReport"),
			position: "top",
			available: canUserAccessRouteByName(VIEWS.MIGRATION_REPORT),
			route: { to: { name: VIEWS.MIGRATION_REPORT } }
		});
		const moduleItems = uiStore.settingsSidebarItems;
		return menuItems.concat(moduleItems.filter((item) => !menuItems.some((m) => m.id === item.id)));
	});
	return { settingsItems: computed(() => settingsItems.value.filter((item) => item.available)) };
}
export { useSettingsItems as t };

;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./truncate-legacy-BIn0keUI.js", "./useTelemetry-legacy-CqPMRSSw.js", "./constants-legacy-7i-p8Q83.js"], function (_export, _context) {
    "use strict";

    var computed, useI18n, useRouter, useUIStore, useSettingsStore, hasPermission, VIEWS;
    //#region src/app/composables/useUserHelpers.ts
    function useUserHelpers(router) {
      const canUserAccessRouteByName = name => {
        return canUserAccessRoute(router.resolve({
          name
        }));
      };
      const canUserAccessRoute = route => {
        const middleware = route.meta?.middleware;
        const middlewareOptions = route.meta?.middlewareOptions;
        if (!middleware) return true;
        return hasPermission(middleware, middlewareOptions);
      };
      return {
        canUserAccessRouteByName
      };
    }

    //#endregion
    //#region src/app/composables/useSettingsItems.ts
    function useSettingsItems() {
      const router = useRouter();
      const i18n = useI18n();
      const uiStore = useUIStore();
      const settingsStore = useSettingsStore();
      const {
        canUserAccessRouteByName
      } = useUserHelpers(router);
      const settingsItems = computed(() => {
        const menuItems = [{
          id: "settings-usage-and-plan",
          icon: "chart-column-decreasing",
          label: i18n.baseText("settings.usageAndPlan.title"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.USAGE),
          route: {
            to: {
              name: VIEWS.USAGE
            }
          }
        }, {
          id: "settings-personal",
          icon: "circle-user-round",
          label: i18n.baseText("settings.personal"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.PERSONAL_SETTINGS),
          route: {
            to: {
              name: VIEWS.PERSONAL_SETTINGS
            }
          }
        }, {
          id: "settings-users",
          icon: "user-round",
          label: i18n.baseText("settings.users"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.USERS_SETTINGS),
          route: {
            to: {
              name: VIEWS.USERS_SETTINGS
            }
          }
        }, {
          id: "settings-project-roles",
          icon: "user-round",
          label: i18n.baseText("settings.projectRoles"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.PROJECT_ROLES_SETTINGS),
          route: {
            to: {
              name: VIEWS.PROJECT_ROLES_SETTINGS
            }
          }
        }, {
          id: "settings-api",
          icon: "plug",
          label: i18n.baseText("settings.n8napi"),
          position: "top",
          available: settingsStore.isPublicApiEnabled && canUserAccessRouteByName(VIEWS.API_SETTINGS),
          route: {
            to: {
              name: VIEWS.API_SETTINGS
            }
          }
        }, {
          id: "settings-external-secrets",
          icon: "vault",
          label: i18n.baseText("settings.externalSecrets.title"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.EXTERNAL_SECRETS_SETTINGS),
          route: {
            to: {
              name: VIEWS.EXTERNAL_SECRETS_SETTINGS
            }
          }
        }, {
          id: "settings-source-control",
          icon: "git-branch",
          label: i18n.baseText("settings.sourceControl.title"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.SOURCE_CONTROL),
          route: {
            to: {
              name: VIEWS.SOURCE_CONTROL
            }
          }
        }, {
          id: "settings-sso",
          icon: "user-lock",
          label: i18n.baseText("settings.sso"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.SSO_SETTINGS),
          route: {
            to: {
              name: VIEWS.SSO_SETTINGS
            }
          }
        }, {
          id: "settings-ldap",
          icon: "network",
          label: i18n.baseText("settings.ldap"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.LDAP_SETTINGS),
          route: {
            to: {
              name: VIEWS.LDAP_SETTINGS
            }
          }
        }, {
          id: "settings-workersview",
          icon: "waypoints",
          label: i18n.baseText("mainSidebar.workersView"),
          position: "top",
          available: settingsStore.isQueueModeEnabled && hasPermission(["rbac"], {
            rbac: {
              scope: "workersView:manage"
            }
          }),
          route: {
            to: {
              name: VIEWS.WORKER_VIEW
            }
          }
        }];
        menuItems.push({
          id: "settings-log-streaming",
          icon: "log-in",
          label: i18n.baseText("settings.log-streaming"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.LOG_STREAMING_SETTINGS),
          route: {
            to: {
              name: VIEWS.LOG_STREAMING_SETTINGS
            }
          }
        });
        menuItems.push({
          id: "settings-community-nodes",
          icon: "box",
          label: i18n.baseText("settings.communityNodes"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.COMMUNITY_NODES),
          route: {
            to: {
              name: VIEWS.COMMUNITY_NODES
            }
          }
        });
        menuItems.push({
          id: "settings-migration-report",
          icon: "list-checks",
          label: i18n.baseText("settings.migrationReport"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.MIGRATION_REPORT),
          route: {
            to: {
              name: VIEWS.MIGRATION_REPORT
            }
          }
        });
        const moduleItems = uiStore.settingsSidebarItems;
        return menuItems.concat(moduleItems.filter(item => !menuItems.some(m => m.id === item.id)));
      });
      return {
        settingsItems: computed(() => settingsItems.value.filter(item => item.available))
      };
    }

    //#endregion
    _export("t", useSettingsItems);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useSettingsStore = _useTelemetryLegacy00HJs.Wo;
        hasPermission = _useTelemetryLegacy00HJs.qn;
      }, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Lo;
      }],
      execute: function () {}
    };
  });
})();
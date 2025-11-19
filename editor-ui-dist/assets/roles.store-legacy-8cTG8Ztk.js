;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var computed, ref, useRootStore, createProjectRole, getRoles, updateProjectRole, deleteProjectRole, getRoleBySlug, defineStore, PROJECT_OWNER_ROLE_SLUG, useRolesStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_useTelemetryLegacy00FJs) {
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        createProjectRole = _useTelemetryLegacy00FJs.cs;
        getRoles = _useTelemetryLegacy00FJs.ds;
        updateProjectRole = _useTelemetryLegacy00FJs.fs;
        deleteProjectRole = _useTelemetryLegacy00FJs.ls;
        getRoleBySlug = _useTelemetryLegacy00FJs.us;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_constantsLegacy00NJs) {
        PROJECT_OWNER_ROLE_SLUG = _constantsLegacy00NJs.yr;
      }],
      execute: function () {
        //#region src/app/stores/roles.store.ts
        _export("t", useRolesStore = defineStore("roles", () => {
          const rootStore = useRootStore();
          const roles = ref({
            global: [],
            project: [],
            credential: [],
            workflow: []
          });
          const projectRoleOrder = ref(["project:viewer", "project:editor", "project:admin"]);
          const projectRoleOrderMap = computed(() => new Map(projectRoleOrder.value.map((role, idx) => [role, idx])));
          const processedProjectRoles = computed(() => roles.value.project.filter(role => role.slug !== PROJECT_OWNER_ROLE_SLUG).sort((a, b) => (projectRoleOrderMap.value.get(a.slug) ?? Number.MAX_SAFE_INTEGER) - (projectRoleOrderMap.value.get(b.slug) ?? Number.MAX_SAFE_INTEGER)));
          const processedCredentialRoles = computed(() => roles.value.credential.filter(role => role.slug !== "credential:owner"));
          const processedWorkflowRoles = computed(() => roles.value.workflow.filter(role => role.slug !== "workflow:owner"));
          const fetchRoles = async () => {
            roles.value = await getRoles(rootStore.restApiContext);
          };
          const createProjectRole$1 = async body => {
            return await createProjectRole(rootStore.restApiContext, body);
          };
          const fetchRoleBySlug = async payload => {
            return await getRoleBySlug(rootStore.restApiContext, payload);
          };
          const deleteProjectRole$1 = async slug => {
            return await deleteProjectRole(rootStore.restApiContext, slug);
          };
          const updateProjectRole$1 = async (slug, body) => {
            return await updateProjectRole(rootStore.restApiContext, slug, body);
          };
          return {
            roles,
            processedProjectRoles,
            processedCredentialRoles,
            processedWorkflowRoles,
            fetchRoles,
            createProjectRole: createProjectRole$1,
            fetchRoleBySlug,
            updateProjectRole: updateProjectRole$1,
            deleteProjectRole: deleteProjectRole$1
          };
        })); //#endregion
      }
    };
  });
})();
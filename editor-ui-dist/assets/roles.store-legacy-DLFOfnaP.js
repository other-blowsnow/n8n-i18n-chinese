;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./useTelemetry-legacy-CBjbIfKX.js", "./constants-legacy-DVoQkFTS.js", "./_baseOrderBy-legacy-CowL7g45.js"], function (_export, _context) {
    "use strict";

    var computed, ref, getRoleBySlug, getRoles, createProjectRole, updateProjectRole, deleteProjectRole, PROJECT_OWNER_ROLE_SLUG, defineStore, useRootStore, useRolesStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_useTelemetryLegacy00HJs) {
        getRoleBySlug = _useTelemetryLegacy00HJs.ds;
        getRoles = _useTelemetryLegacy00HJs.fs;
        createProjectRole = _useTelemetryLegacy00HJs.ls;
        updateProjectRole = _useTelemetryLegacy00HJs.ps;
        deleteProjectRole = _useTelemetryLegacy00HJs.us;
      }, function (_constantsLegacy00TJs) {
        PROJECT_OWNER_ROLE_SLUG = _constantsLegacy00TJs.Do;
      }, function (_baseOrderByLegacy00ZJs) {
        defineStore = _baseOrderByLegacy00ZJs.k;
        useRootStore = _baseOrderByLegacy00ZJs.r;
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
import { d as defineComponent, Z as useUIStore, db as useCredentialsStore, av as useProjectsStore, x as computed, c as useI18n, aC as getResourcePermissions, fU as dateFormat, e as createBlock, g as openBlock, s as N8nCard, B as withModifiers, n as normalizeClass, w as withCtx, j as createBaseVNode, i as createVNode, h as createElementBlock, f as createCommentVNode, b4 as withDirectives, t as toDisplayString, b5 as vShow, k as createTextVNode, l as unref, eK as _sfc_main$2, p as N8nText, aU as ResourceType, g0 as ProjectCardBadge, ed as N8nActionToggle, aL as N8nBadge, gi as CredentialIcon, aq as useMessage, ar as MODAL_CONFIRM, aV as PROJECT_MOVE_RESOURCE_MODAL, _ as _export_sfc, ah as useNodeTypesStore, aj as useSourceControlStore, dc as useExternalSecretsStore, u as useUsersStore, g6 as useInsightsStore, ay as useDocumentTitle, aa as useRoute, b as useRouter, r as ref, gj as listenForModalChanges, af as watch, o as onMounted, dY as N8nActionBox, e5 as N8nInputLabel, e8 as N8nSelect, F as Fragment, A as renderList, e9 as _sfc_main$4, eY as N8nCheckbox, gk as CREDENTIAL_EMPTY_VALUE, ap as useTelemetry, v as useSettingsStore, aF as EnterpriseEditionFeature, cK as useEnvironmentsStore, gl as CREDENTIAL_SELECT_MODAL_KEY, V as VIEWS, gm as CREDENTIAL_EDIT_MODAL_KEY, gn as isCredentialsResource } from "./index-BsWH3eYA.js";
import { _ as _sfc_main$3 } from "./EmptySharedSectionActionBox.vue_vue_type_script_setup_true_lang-hFCeXwDM.js";
import { R as ResourcesListLayout } from "./ResourcesListLayout-gylwL6iY.js";
import { P as ProjectHeader } from "./ProjectHeader-DJ7INeh1.js";
import { u as useProjectPages } from "./useProjectPages-C3Mn4pYX.js";
import { I as InsightsSummary } from "./InsightsSummary-gyLfjHkG.js";
import { p as pickBy } from "./pickBy-DQDQiqkF.js";
import "./TableBase-CDVPsIRe.js";
const _hoisted_1$1 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CredentialCard",
  props: {
    data: {},
    readOnly: { type: Boolean, default: false },
    needsSetup: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const CREDENTIAL_LIST_ITEM_ACTIONS = {
      OPEN: "open",
      DELETE: "delete",
      MOVE: "move"
    };
    const emit = __emit;
    const props = __props;
    const locale = useI18n();
    const message = useMessage();
    const uiStore = useUIStore();
    const credentialsStore = useCredentialsStore();
    const projectsStore = useProjectsStore();
    const resourceTypeLabel = computed(() => locale.baseText("generic.credential").toLowerCase());
    const credentialType = computed(
      () => credentialsStore.getCredentialTypeByName(props.data.type ?? "")
    );
    const credentialPermissions = computed(() => getResourcePermissions(props.data.scopes).credential);
    const actions = computed(() => {
      const items = [
        {
          label: locale.baseText("credentials.item.open"),
          value: CREDENTIAL_LIST_ITEM_ACTIONS.OPEN
        }
      ];
      if (credentialPermissions.value.delete) {
        items.push({
          label: locale.baseText("credentials.item.delete"),
          value: CREDENTIAL_LIST_ITEM_ACTIONS.DELETE
        });
      }
      if (credentialPermissions.value.move && projectsStore.isTeamProjectFeatureEnabled) {
        items.push({
          label: locale.baseText("credentials.item.move"),
          value: CREDENTIAL_LIST_ITEM_ACTIONS.MOVE
        });
      }
      return items;
    });
    const formattedCreatedAtDate = computed(() => {
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
      return dateFormat(
        props.data.createdAt,
        `d mmmm${String(props.data.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`
      );
    });
    function onClick() {
      emit("click", props.data.id);
    }
    async function onAction(action) {
      switch (action) {
        case CREDENTIAL_LIST_ITEM_ACTIONS.OPEN:
          onClick();
          break;
        case CREDENTIAL_LIST_ITEM_ACTIONS.DELETE:
          await deleteResource();
          break;
        case CREDENTIAL_LIST_ITEM_ACTIONS.MOVE:
          moveResource();
          break;
      }
    }
    async function deleteResource() {
      const deleteConfirmed = await message.confirm(
        locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.message", {
          interpolate: { savedCredentialName: props.data.name }
        }),
        locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline"),
        {
          confirmButtonText: locale.baseText(
            "credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText"
          )
        }
      );
      if (deleteConfirmed === MODAL_CONFIRM) {
        await credentialsStore.deleteCredential({ id: props.data.id });
      }
    }
    function moveResource() {
      uiStore.openModalWithData({
        name: PROJECT_MOVE_RESOURCE_MODAL,
        data: {
          resource: props.data,
          resourceType: ResourceType.Credential,
          resourceTypeLabel: resourceTypeLabel.value
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_N8nBadge = N8nBadge;
      const _component_n8n_text = N8nText;
      const _component_n8n_action_toggle = N8nActionToggle;
      const _component_n8n_card = N8nCard;
      return openBlock(), createBlock(_component_n8n_card, {
        class: normalizeClass(_ctx.$style.cardLink),
        onClick: withModifiers(onClick, ["stop"])
      }, {
        prepend: withCtx(() => [
          createVNode(CredentialIcon, {
            "credential-type-name": credentialType.value?.name ?? ""
          }, null, 8, ["credential-type-name"])
        ]),
        header: withCtx(() => [
          createVNode(_component_n8n_text, {
            tag: "h2",
            bold: "",
            class: normalizeClass(_ctx.$style.cardHeading)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.data.name) + " ", 1),
              _ctx.readOnly ? (openBlock(), createBlock(_component_N8nBadge, {
                key: 0,
                class: "ml-3xs",
                theme: "tertiary",
                bold: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.readonly")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.needsSetup ? (openBlock(), createBlock(_component_N8nBadge, {
                key: 1,
                class: "ml-3xs",
                theme: "warning"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.needsSetup")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        append: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.cardActions),
            onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createVNode(ProjectCardBadge, {
              class: normalizeClass(_ctx.$style.cardBadge),
              resource: _ctx.data,
              "resource-type": unref(ResourceType).Credential,
              "resource-type-label": resourceTypeLabel.value,
              "personal-project": unref(projectsStore).personalProject,
              "show-badge-border": false
            }, null, 8, ["class", "resource", "resource-type", "resource-type-label", "personal-project"]),
            createVNode(_component_n8n_action_toggle, {
              "data-test-id": "credential-card-actions",
              actions: actions.value,
              theme: "dark",
              onAction
            }, null, 8, ["actions"])
          ], 2)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.cardDescription)
          }, [
            createVNode(_component_n8n_text, {
              color: "text-light",
              size: "small"
            }, {
              default: withCtx(() => [
                credentialType.value ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(credentialType.value.displayName) + " | ", 1)) : createCommentVNode("", true),
                withDirectives(createBaseVNode("span", null, [
                  createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.updated")) + " ", 1),
                  createVNode(_sfc_main$2, {
                    date: _ctx.data.updatedAt
                  }, null, 8, ["date"]),
                  _cache[1] || (_cache[1] = createTextVNode(" | "))
                ], 512), [
                  [vShow, _ctx.data]
                ]),
                withDirectives(createBaseVNode("span", null, toDisplayString(unref(locale).baseText("credentials.item.created")) + " " + toDisplayString(formattedCreatedAtDate.value), 513), [
                  [vShow, _ctx.data]
                ])
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const cardLink = "_cardLink_14jai_123";
const cardHeading = "_cardHeading_14jai_133";
const cardDescription = "_cardDescription_14jai_138";
const cardActions = "_cardActions_14jai_145";
const cardBadge = "_cardBadge_14jai_165";
const style0$1 = {
  cardLink,
  cardHeading,
  cardDescription,
  cardActions,
  cardBadge
};
const cssModules$1 = {
  "$style": style0$1
};
const CredentialCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { class: "mb-s" };
const _hoisted_2 = { class: "mb-s" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CredentialsView",
  props: {
    credentialId: {}
  },
  setup(__props) {
    const props = __props;
    const credentialsStore = useCredentialsStore();
    const nodeTypesStore = useNodeTypesStore();
    const uiStore = useUIStore();
    const sourceControlStore = useSourceControlStore();
    const externalSecretsStore = useExternalSecretsStore();
    const projectsStore = useProjectsStore();
    const usersStore = useUsersStore();
    const insightsStore = useInsightsStore();
    const documentTitle = useDocumentTitle();
    const route = useRoute();
    const router = useRouter();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const overview = useProjectPages();
    const updateFilter = (state) => {
      void router.replace({ query: pickBy(state) });
    };
    const onSearchUpdated = (search) => {
      updateFilter({ ...filters.value, search });
    };
    const filters = ref({
      ...route.query,
      setupNeeded: route.query.setupNeeded?.toString() === "true"
    });
    const loading = ref(false);
    const needsSetup = (data) => {
      const dataObject = data;
      if (!dataObject) return false;
      if (Object.keys(dataObject).length === 0) return true;
      return Object.values(dataObject).every((value) => !value || value === CREDENTIAL_EMPTY_VALUE);
    };
    const allCredentials = computed(
      () => credentialsStore.allCredentials.map((credential) => ({
        resourceType: "credential",
        id: credential.id,
        name: credential.name,
        value: "",
        updatedAt: credential.updatedAt,
        createdAt: credential.createdAt,
        homeProject: credential.homeProject,
        scopes: credential.scopes,
        sharedWithProjects: credential.sharedWithProjects,
        readOnly: !getResourcePermissions(credential.scopes).credential.update,
        needsSetup: needsSetup(credential.data),
        type: credential.type
      }))
    );
    const allCredentialTypes = computed(() => credentialsStore.allCredentialTypes);
    const credentialTypesById = computed(
      () => credentialsStore.credentialTypesById
    );
    const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
    const projectPermissions = computed(
      () => getResourcePermissions(
        projectsStore.currentProject?.scopes ?? projectsStore.personalProject?.scopes
      )
    );
    const personalProject = computed(() => {
      return projectsStore.personalProject;
    });
    const setRouteCredentialId = (credentialId) => {
      void router.replace({ params: { credentialId }, query: route.query });
    };
    const addCredential = () => {
      setRouteCredentialId("create");
      telemetry.track("User clicked add cred button", {
        source: "Creds list"
      });
    };
    listenForModalChanges({
      store: uiStore,
      onModalClosed(modalName) {
        if ([CREDENTIAL_SELECT_MODAL_KEY, CREDENTIAL_EDIT_MODAL_KEY].includes(modalName)) {
          void router.replace({ params: { credentialId: "" }, query: route.query });
        }
      }
    });
    const onFilter = (resource, newFilters, matches) => {
      if (!isCredentialsResource(resource)) return false;
      const filtersToApply = newFilters;
      if (filtersToApply.type && filtersToApply.type.length > 0) {
        matches = matches && filtersToApply.type.includes(resource.type);
      }
      if (filtersToApply.search) {
        const searchString = filtersToApply.search.toLowerCase();
        matches = matches || credentialTypesById.value[resource.type] && credentialTypesById.value[resource.type].displayName.toLowerCase().includes(searchString);
      }
      if (filtersToApply.setupNeeded) {
        matches = matches && resource.needsSetup;
      }
      return matches;
    };
    const maybeCreateCredential = () => {
      if (props.credentialId === "create") {
        if (projectPermissions.value.credential.create) {
          uiStore.openModal(CREDENTIAL_SELECT_MODAL_KEY);
        } else {
          void router.replace({ name: VIEWS.HOMEPAGE });
        }
      }
    };
    const maybeEditCredential = async () => {
      if (!!props.credentialId && props.credentialId !== "create") {
        const credential = credentialsStore.getCredentialById(props.credentialId);
        const credentialPermissions = getResourcePermissions(credential?.scopes).credential;
        if (!credential) {
          return await router.replace({
            name: VIEWS.ENTITY_NOT_FOUND,
            params: { entityType: "credential" }
          });
        }
        if (credentialPermissions.update || credentialPermissions.read) {
          uiStore.openExistingCredential(props.credentialId);
          return;
        }
        return await router.replace({
          name: VIEWS.ENTITY_UNAUTHORIZED,
          params: { entityType: "credential" }
        });
      }
    };
    const initialize = async () => {
      loading.value = true;
      const isVarsEnabled = useSettingsStore().isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables];
      const loadPromises = [
        credentialsStore.fetchAllCredentials(
          route?.params?.projectId,
          true,
          overview.isSharedSubPage
        ),
        credentialsStore.fetchCredentialTypes(false),
        externalSecretsStore.fetchAllSecrets(),
        nodeTypesStore.loadNodeTypesIfNotLoaded(),
        isVarsEnabled ? useEnvironmentsStore().fetchAllVariables() : Promise.resolve()
        // for expression resolution
      ];
      await Promise.all(loadPromises);
      maybeCreateCredential();
      await maybeEditCredential();
      loading.value = false;
    };
    credentialsStore.$onAction(({ name, after }) => {
      if (name === "createNewCredential") {
        after(() => {
          void credentialsStore.fetchAllCredentials(route?.params?.projectId);
        });
      }
    });
    sourceControlStore.$onAction(({ name, after }) => {
      if (name !== "pullWorkfolder") return;
      after(() => {
        void initialize();
      });
    });
    watch(() => route?.params?.projectId, initialize);
    watch(
      () => props.credentialId,
      () => {
        maybeCreateCredential();
        void maybeEditCredential();
      }
    );
    onMounted(() => {
      documentTitle.set(i18n.baseText("credentials.heading"));
    });
    return (_ctx, _cache) => {
      const _component_N8nInputLabel = N8nInputLabel;
      const _component_N8nOption = _sfc_main$4;
      const _component_N8nSelect = N8nSelect;
      const _component_EmptySharedSectionActionBox = _sfc_main$3;
      const _component_n8n_action_box = N8nActionBox;
      return openBlock(), createBlock(ResourcesListLayout, {
        ref: "layout",
        filters: filters.value,
        "onUpdate:filters": [
          _cache[0] || (_cache[0] = ($event) => filters.value = $event),
          updateFilter
        ],
        "resource-key": "credentials",
        resources: allCredentials.value,
        initialize,
        "additional-filters-handler": onFilter,
        "type-props": { itemSize: 77 },
        loading: loading.value,
        disabled: readOnlyEnv.value || !projectPermissions.value.credential.create,
        "onUpdate:search": onSearchUpdated
      }, {
        header: withCtx(() => [
          createVNode(ProjectHeader, null, {
            default: withCtx(() => [
              unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary, {
                key: 0,
                loading: unref(insightsStore).weeklySummary.isLoading,
                summary: unref(insightsStore).weeklySummary.state,
                "time-range": "week"
              }, null, 8, ["loading", "summary"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        default: withCtx(({ data }) => [
          createVNode(CredentialCard, {
            "data-test-id": "resources-list-item",
            class: "mb-2xs",
            data,
            "read-only": data.readOnly,
            "needs-setup": data.needsSetup,
            onClick: setRouteCredentialId
          }, null, 8, ["data", "read-only", "needs-setup"])
        ]),
        filters: withCtx(({ setKeyValue }) => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_N8nInputLabel, {
              label: unref(i18n).baseText("credentials.filters.type"),
              bold: false,
              size: "small",
              color: "text-base",
              class: "mb-3xs"
            }, null, 8, ["label"]),
            createVNode(_component_N8nSelect, {
              ref: "typeInput",
              "model-value": filters.value.type,
              size: "medium",
              multiple: "",
              filterable: "",
              class: normalizeClass(_ctx.$style["type-input"]),
              "onUpdate:modelValue": ($event) => setKeyValue("type", $event)
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(allCredentialTypes.value, (credentialType) => {
                  return openBlock(), createBlock(_component_N8nOption, {
                    key: credentialType.name,
                    value: credentialType.name,
                    label: credentialType.displayName
                  }, null, 8, ["value", "label"]);
                }), 128))
              ]),
              _: 2
            }, 1032, ["model-value", "class", "onUpdate:modelValue"])
          ]),
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_N8nInputLabel, {
              label: unref(i18n).baseText("credentials.filters.status"),
              bold: false,
              size: "small",
              color: "text-base",
              class: "mb-3xs"
            }, null, 8, ["label"]),
            createVNode(unref(N8nCheckbox), {
              label: unref(i18n).baseText("credentials.filters.setup"),
              "data-test-id": "credential-filter-setup-needed",
              "model-value": filters.value.setupNeeded,
              "onUpdate:modelValue": ($event) => setKeyValue("setupNeeded", $event)
            }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
          ])
        ]),
        empty: withCtx(() => [
          unref(overview).isSharedSubPage && personalProject.value ? (openBlock(), createBlock(_component_EmptySharedSectionActionBox, {
            key: 0,
            "personal-project": personalProject.value,
            "resource-type": "credentials"
          }, null, 8, ["personal-project"])) : (openBlock(), createBlock(_component_n8n_action_box, {
            key: 1,
            "data-test-id": "empty-resources-list",
            emoji: "👋",
            heading: unref(i18n).baseText(
              unref(usersStore).currentUser?.firstName ? "credentials.empty.heading" : "credentials.empty.heading.userNotSetup",
              {
                interpolate: { name: unref(usersStore).currentUser?.firstName ?? "" }
              }
            ),
            description: unref(i18n).baseText("credentials.empty.description"),
            "button-text": unref(i18n).baseText("credentials.empty.button"),
            "button-type": "secondary",
            "button-disabled": readOnlyEnv.value || !projectPermissions.value.credential.create,
            "button-icon": readOnlyEnv.value ? "lock" : void 0,
            "onClick:button": addCredential
          }, {
            disabledButtonTooltip: withCtx(() => [
              createTextVNode(toDisplayString(readOnlyEnv.value ? unref(i18n).baseText("readOnlyEnv.cantAdd.credential") : unref(i18n).baseText("credentials.empty.button.disabled.tooltip")), 1)
            ]),
            _: 1
          }, 8, ["heading", "description", "button-text", "button-disabled", "button-icon"]))
        ]),
        _: 1
      }, 8, ["filters", "resources", "loading", "disabled"]);
    };
  }
});
const sidebarContainer = "_sidebarContainer_d99g5_127";
const style0 = {
  "type-input": "_type-input_d99g5_123",
  sidebarContainer
};
const cssModules = {
  "$style": style0
};
const CredentialsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  CredentialsView as default
};

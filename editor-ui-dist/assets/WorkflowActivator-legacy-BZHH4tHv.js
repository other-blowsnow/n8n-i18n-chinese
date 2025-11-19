;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./folders.store-legacy-C8VGYd29.js", "./useWorkflowActivate-legacy-DRFvTgOe.js", "./ProjectBreadcrumb-legacy-CEhLqYgd.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, h, createVNode, defineComponent, toDisplayString, createBlock, normalizeClass, watch, renderSlot, withCtx, openBlock, createTextVNode, createSlots, resolveDirective, createBaseVNode, withDirectives, useI18n, N8nActionToggle_default, N8nText_default, N8nBreadcrumbs_default, ElSwitch, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, useProjectsStore, getActivatableTriggerNodes, useCredentialsStore, useUIStore, ProjectTypes, useWorkflowHelpers, useWorkflowsStore, useToast, WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY, PLACEHOLDER_EMPTY_WORKFLOW_ID, EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, OPEN_AI_API_CREDENTIAL_TYPE, useFoldersStore, useWorkflowActivate, ProjectBreadcrumb_default, __vite_style__, _hoisted_1$1, FolderBreadcrumbs_vue_vue_type_script_setup_true_lang_default, container, FolderBreadcrumbs_vue_vue_type_style_index_0_lang_module_default, cssModules$1, FolderBreadcrumbs_default, WorkflowActivationErrorMessage_vue_vue_type_script_setup_true_lang_default, WorkflowActivationErrorMessage_default, _hoisted_1, _hoisted_2, WorkflowActivator_vue_vue_type_script_setup_true_lang_default, activeStatusText, WorkflowActivator_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkflowActivator_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
        N8nText_default = _srcLegacy007Js.In;
        N8nBreadcrumbs_default = _srcLegacy007Js.c;
        ElSwitch = _srcLegacy007Js.kt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        getActivatableTriggerNodes = _useTelemetryLegacy00FJs.Hr;
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        ProjectTypes = _useTelemetryLegacy00FJs.On;
        useWorkflowHelpers = _useTelemetryLegacy00FJs.mn;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY = _constantsLegacy00NJs.Ho;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00NJs.s;
        EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.vt;
        OPEN_AI_API_CREDENTIAL_TYPE = _constantsLegacy00NJs.ya;
      }, function (_foldersStoreLegacy01tJs) {
        useFoldersStore = _foldersStoreLegacy01tJs.t;
      }, function (_useWorkflowActivateLegacy03zJs) {
        useWorkflowActivate = _useWorkflowActivateLegacy03zJs.t;
      }, function (_ProjectBreadcrumbLegacy03JJs) {
        ProjectBreadcrumb_default = _ProjectBreadcrumbLegacy03JJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1hwuc_123 {\n  display: flex;\n  align-items: center;\n}\n._home-project_1hwuc_128 {\n  display: flex;\n  align-items: center;\n}\n._action-toggle_1hwuc_133 span[role=button] {\n  color: var(--color--text);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._activeStatusText_1xmgg_123 {\n  padding-right: var(--spacing--2xs);\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: right;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.workflow-activator[data-v-64cdd300] {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.could-not-be-started[data-v-64cdd300] {\n  display: inline-block;\n  color: var(--color--text--danger);\n  margin-left: 0.5em;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/core/folders/components/FolderBreadcrumbs.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 2
        };
        FolderBreadcrumbs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "FolderBreadcrumbs",
          props: {
            currentFolder: {
              default: null
            },
            actions: {
              default: () => []
            },
            hiddenItemsTrigger: {
              default: "click"
            },
            currentFolderAsLink: {
              type: Boolean,
              default: false
            },
            visibleLevels: {
              default: 1
            }
          },
          emits: ["itemSelected", "action", "itemDrop", "projectDrop"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const projectsStore = useProjectsStore();
            const foldersStore = useFoldersStore();
            const hiddenBreadcrumbsItemsAsync = ref(new Promise(() => {}));
            const visibleIds = ref(/* @__PURE__ */new Set());
            const isSharedContext = computed(() => projectsStore.projectNavActiveId === "shared");
            const currentProject = computed(() => {
              if (isSharedContext.value) return;
              return projectsStore.currentProject ?? projectsStore.personalProject ?? void 0;
            });
            const projectName = computed(() => {
              if (!currentProject.value) return isSharedContext.value ? i18n.baseText("projects.menu.shared") : "";
              if (currentProject.value.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
              return currentProject.value.name;
            });
            const isDragging = computed(() => {
              return foldersStore.draggedElement !== null;
            });
            const hasMoreItems = computed(() => {
              return visibleBreadcrumbsItems.value[0]?.parentFolder !== void 0;
            });
            const visibleBreadcrumbsItems = computed(() => {
              visibleIds.value.clear();
              if (!props.currentFolder || isSharedContext.value) return [];
              const items = [];
              const parent = props.visibleLevels === 2 ? foldersStore.getCachedFolder(props.currentFolder.parentFolder ?? "") : null;
              if (parent) {
                items.push({
                  id: parent.id,
                  label: parent.name,
                  href: `/projects/${currentProject.value?.id}/folders/${parent.id}/workflows`,
                  parentFolder: parent.parentFolder
                });
                visibleIds.value.add(parent.id);
              }
              items.push({
                id: props.currentFolder.id,
                label: props.currentFolder.name,
                parentFolder: props.currentFolder.parentFolder,
                href: props.currentFolderAsLink ? `/projects/${currentProject.value?.id}/folders/${props.currentFolder.id}/workflows` : void 0
              });
              if (currentProject.value) visibleIds.value.add(currentProject.value.id);
              visibleIds.value.add(props.currentFolder.id);
              return items;
            });
            const fetchHiddenBreadCrumbsItems = async () => {
              if (!projectName.value || !props.currentFolder?.parentFolder || isSharedContext.value || !currentProject.value) hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);else try {
                const filtered = (await foldersStore.getHiddenBreadcrumbsItems({
                  id: currentProject.value.id,
                  name: projectName.value
                }, props.currentFolder.parentFolder, {
                  addLinks: true
                })).filter(item => !visibleIds.value.has(item.id));
                hiddenBreadcrumbsItemsAsync.value = Promise.resolve(filtered);
              } catch (error) {
                hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
              }
            };
            const onItemSelect = item => {
              emit("itemSelected", item);
            };
            const onAction = action => {
              emit("action", action);
            };
            const onProjectDrop = () => {
              if (!currentProject.value?.name) return;
              emit("projectDrop", currentProject.value.id, currentProject.value.name);
            };
            const onProjectHover = () => {
              if (!isDragging.value || !currentProject.value?.name) return;
              foldersStore.activeDropTarget = {
                type: "project",
                id: currentProject.value?.id,
                name: currentProject.value?.name
              };
            };
            const onItemHover = item => {
              if (!isDragging.value) return;
              foldersStore.activeDropTarget = {
                type: "folder",
                id: item.id,
                name: item.label
              };
            };
            watch(() => props.currentFolder?.parentFolder, () => {
              hiddenBreadcrumbsItemsAsync.value = new Promise(() => {});
            }, {
              immediate: true
            });
            onBeforeUnmount(() => {
              hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass({
                  [_ctx.$style.container]: true,
                  [_ctx.$style["dragging"]]: isDragging.value
                }),
                "data-test-id": "folder-breadcrumbs"
              }, [visibleBreadcrumbsItems.value.length ? (openBlock(), createBlock(unref(N8nBreadcrumbs_default), {
                key: 0,
                "drag-active": isDragging.value,
                "onUpdate:dragActive": _cache[0] || (_cache[0] = $event => isDragging.value = $event),
                items: visibleBreadcrumbsItems.value,
                "highlight-last-item": false,
                "path-truncated": hasMoreItems.value,
                "hidden-items": hasMoreItems.value ? hiddenBreadcrumbsItemsAsync.value : void 0,
                "hidden-items-trigger": props.hiddenItemsTrigger,
                onTooltipOpened: fetchHiddenBreadCrumbsItems,
                onItemSelected: onItemSelect,
                onItemHover,
                onItemDrop: _cache[1] || (_cache[1] = $event => emit("itemDrop", $event))
              }, createSlots({
                append: withCtx(() => [renderSlot(_ctx.$slots, "append")]),
                _: 2
              }, [currentProject.value ? {
                name: "prepend",
                fn: withCtx(() => [createVNode(ProjectBreadcrumb_default, {
                  "current-project": currentProject.value,
                  "is-dragging": isDragging.value,
                  onProjectDrop,
                  onProjectHover
                }, null, 8, ["current-project", "is-dragging"])]),
                key: "0"
              } : void 0]), 1032, ["drag-active", "items", "path-truncated", "hidden-items", "hidden-items-trigger"])) : currentProject.value || isSharedContext.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style["home-project"])
              }, [createVNode(ProjectBreadcrumb_default, {
                "current-project": currentProject.value,
                "is-shared": isSharedContext.value,
                "is-dragging": isDragging.value,
                onProjectDrop,
                onProjectHover
              }, null, 8, ["current-project", "is-shared", "is-dragging"]), renderSlot(_ctx.$slots, "append")], 2)) : (openBlock(), createElementBlock("div", _hoisted_1$1, [renderSlot(_ctx.$slots, "append")])), visibleBreadcrumbsItems.value && _ctx.actions?.length ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
                key: 3,
                actions: _ctx.actions,
                class: normalizeClass(_ctx.$style["action-toggle"]),
                theme: "dark",
                "data-test-id": "folder-breadcrumbs-actions",
                onAction
              }, null, 8, ["actions", "class"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/core/folders/components/FolderBreadcrumbs.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_1hwuc_123";
        FolderBreadcrumbs_vue_vue_type_style_index_0_lang_module_default = {
          container,
          "home-project": "_home-project_1hwuc_128",
          "action-toggle": "_action-toggle_1hwuc_133"
        }; //#endregion
        //#region src/features/core/folders/components/FolderBreadcrumbs.vue
        cssModules$1 = {
          "$style": FolderBreadcrumbs_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", FolderBreadcrumbs_default = /* @__PURE__ */__plugin_vue_export_helper_default(FolderBreadcrumbs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]])); //#endregion
        //#region src/app/components/WorkflowActivationErrorMessage.vue?vue&type=script&setup=true&lang.ts
        WorkflowActivationErrorMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowActivationErrorMessage",
          props: {
            message: {}
          },
          setup(__props) {
            const i18n = useI18n();
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.showMessage.displayActivationError.message.errorDataNotUndefined")) + " ", 1), _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)), createBaseVNode("i", null, toDisplayString(_ctx.message), 1)]);
            };
          }
        }); //#endregion
        //#region src/app/components/WorkflowActivationErrorMessage.vue
        WorkflowActivationErrorMessage_default = WorkflowActivationErrorMessage_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/app/components/WorkflowActivator.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "workflow-activator"
        };
        _hoisted_2 = {
          key: 0,
          class: "could-not-be-started"
        };
        WorkflowActivator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowActivator",
          props: {
            isArchived: {
              type: Boolean
            },
            workflowActive: {
              type: Boolean
            },
            workflowId: {},
            workflowPermissions: {}
          },
          emits: ["update:workflowActive"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              showMessage
            } = useToast();
            const workflowActivate = useWorkflowActivate();
            const uiStore = useUIStore();
            const workflowHelpers = useWorkflowHelpers();
            const i18n = useI18n();
            const workflowsStore = useWorkflowsStore();
            const credentialsStore = useCredentialsStore();
            const isWorkflowActive = computed(() => {
              return workflowsStore.activeWorkflows.includes(props.workflowId);
            });
            const couldNotBeStarted = computed(() => {
              return props.workflowActive && isWorkflowActive.value !== props.workflowActive;
            });
            const getActiveColor = computed(() => {
              if (couldNotBeStarted.value) return "#ff4949";
              return "#13ce66";
            });
            const isCurrentWorkflow = computed(() => {
              return workflowsStore.workflowId === props.workflowId;
            });
            const foundTriggers = computed(() => getActivatableTriggerNodes(workflowsStore.workflowTriggerNodes));
            const containsTrigger = computed(() => {
              return foundTriggers.value.length > 0;
            });
            const containsOnlyExecuteWorkflowTrigger = computed(() => {
              const foundActiveTriggers = workflowsStore.workflowTriggerNodes.filter(trigger => !trigger.disabled);
              const foundTriggers$1 = foundActiveTriggers.filter(trigger => trigger.type === EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE);
              return foundTriggers$1.length > 0 && foundTriggers$1.length === foundActiveTriggers.length;
            });
            const isNewWorkflow = computed(() => !props.workflowId || props.workflowId === "__EMPTY__" || props.workflowId === "new");
            const disabled = computed(() => {
              if (props.isArchived) return true;
              if (isNewWorkflow.value || isCurrentWorkflow.value) return !props.workflowActive && !containsTrigger.value;
              return false;
            });
            function findManagedOpenAiCredentialId(usedCredentials) {
              return Object.keys(usedCredentials).find(credentialId => {
                const credential = credentialsStore.state.credentials[credentialId];
                return credential.isManaged && credential.type === "openAiApi";
              });
            }
            function hasActiveNodeUsingCredential(nodes, credentialId) {
              return nodes.some(node => node?.credentials?.["openAiApi"]?.id === credentialId && !node.disabled);
            }
            /**
            * Determines if the warning for free AI credits should be shown in the workflow.
            *
            * This computed property evaluates whether to display a warning about free AI credits
            * in the workflow. The warning is shown when both conditions are met:
            * 1. The workflow uses managed OpenAI API credentials
            * 2. Those credentials are associated with at least one enabled node
            *
            */
            const shouldShowFreeAiCreditsWarning = computed(() => {
              const usedCredentials = workflowsStore?.usedCredentials;
              if (!usedCredentials) return false;
              const managedOpenAiCredentialId = findManagedOpenAiCredentialId(usedCredentials);
              if (!managedOpenAiCredentialId) return false;
              return hasActiveNodeUsingCredential(workflowsStore.allNodes, managedOpenAiCredentialId);
            });
            async function activeChanged(newActiveState) {
              const boolValue = typeof newActiveState === "boolean" ? newActiveState : Boolean(newActiveState);
              if (!isWorkflowActive.value) {
                const conflictData = await workflowHelpers.checkConflictingWebhooks(props.workflowId);
                if (conflictData) {
                  const {
                    trigger,
                    conflict
                  } = conflictData;
                  const conflictingWorkflow = await workflowsStore.fetchWorkflow(conflict.workflowId);
                  uiStore.openModalWithData({
                    name: WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY,
                    data: {
                      triggerType: trigger.type,
                      workflowName: conflictingWorkflow.name,
                      ...conflict
                    }
                  });
                  return;
                }
              }
              const newState = await workflowActivate.updateWorkflowActivation(props.workflowId, boolValue);
              emit("update:workflowActive", {
                id: props.workflowId,
                active: newState
              });
            }
            async function displayActivationError() {
              let errorMessage;
              try {
                const errorData = await workflowsStore.getActivationError(props.workflowId);
                if (errorData === void 0) errorMessage = i18n.baseText("workflowActivator.showMessage.displayActivationError.message.errorDataUndefined");else errorMessage = h(WorkflowActivationErrorMessage_default, {
                  message: errorData
                });
              } catch (error) {
                errorMessage = i18n.baseText("workflowActivator.showMessage.displayActivationError.message.catchBlock");
              }
              showMessage({
                title: i18n.baseText("workflowActivator.showMessage.displayActivationError.title"),
                message: errorMessage,
                type: "warning",
                duration: 0
              });
            }
            watch(() => props.workflowActive, workflowActive => {
              if (workflowActive && shouldShowFreeAiCreditsWarning.value) showMessage({
                title: i18n.baseText("freeAi.credits.showWarning.workflow.activation.title"),
                message: i18n.baseText("freeAi.credits.showWarning.workflow.activation.description"),
                type: "warning",
                duration: 0
              });
            });
            return (_ctx, _cache) => {
              const _directive_loading = resolveDirective("loading");
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.activeStatusText),
                "data-test-id": "workflow-activator-status"
              }, [_ctx.workflowActive ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 0,
                color: couldNotBeStarted.value ? "danger" : "success",
                size: "small",
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.active")), 1)]),
                _: 1
              }, 8, ["color"])) : (openBlock(), createBlock(unref(N8nText_default), {
                key: 1,
                color: "text-base",
                size: "small",
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.inactive")), 1)]),
                _: 1
              }))], 2), createVNode(unref(N8nTooltip_default), {
                disabled: !disabled.value,
                placement: "bottom"
              }, {
                content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText(_ctx.isArchived ? "workflowActivator.thisWorkflowIsArchived" : containsOnlyExecuteWorkflowTrigger.value ? "workflowActivator.thisWorkflowHasOnlyOneExecuteWorkflowTriggerNode" : "workflowActivator.thisWorkflowHasNoTriggerNodes")), 1)]),
                default: withCtx(() => [withDirectives(createVNode(unref(ElSwitch), {
                  "model-value": _ctx.workflowActive,
                  title: _ctx.workflowActive ? unref(i18n).baseText("workflowActivator.deactivateWorkflow") : unref(i18n).baseText("workflowActivator.activateWorkflow"),
                  disabled: disabled.value || unref(workflowActivate).updatingWorkflowActivation.value || !isNewWorkflow.value && !_ctx.workflowPermissions.update,
                  "active-color": getActiveColor.value,
                  "inactive-color": "#8899AA",
                  "data-test-id": "workflow-activate-switch",
                  "onUpdate:modelValue": activeChanged
                }, null, 8, ["model-value", "title", "disabled", "active-color"]), [[_directive_loading, unref(workflowActivate).updatingWorkflowActivation.value]])]),
                _: 1
              }, 8, ["disabled"]), couldNotBeStarted.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nTooltip_default), {
                placement: "top"
              }, {
                content: withCtx(() => [withDirectives(createBaseVNode("div", {
                  onClick: displayActivationError
                }, null, 512), [[_directive_n8n_html, unref(i18n).baseText("workflowActivator.theWorkflowIsSetToBeActiveBut")]])]),
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "triangle-alert",
                  onClick: displayActivationError
                })]),
                _: 1
              })])) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/app/components/WorkflowActivator.vue?vue&type=style&index=0&lang.module.scss
        activeStatusText = "_activeStatusText_1xmgg_123";
        WorkflowActivator_vue_vue_type_style_index_0_lang_module_default = {
          activeStatusText
        }; //#endregion
        //#region src/app/components/WorkflowActivator.vue
        cssModules = {
          "$style": WorkflowActivator_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", WorkflowActivator_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowActivator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-64cdd300"]])); //#endregion
      }
    };
  });
})();
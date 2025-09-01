import { d as defineComponent, au as useProjectsStore, av as useFoldersStore, r as ref, x as computed, aF as ProjectTypes, c as useI18n, a7 as watch, W as onBeforeUnmount, h as createElementBlock, g as openBlock, e as createBlock, f as createCommentVNode, bq as createSlots, w as withCtx, X as renderSlot, i as createVNode, n as normalizeClass, e6 as N8nActionToggle, _ as _export_sfc, k as createTextVNode, j as createBaseVNode, t as toDisplayString, l as unref, a as useToast, Q as useUIStore, az as useWorkflowHelpers, a1 as useWorkflowsStore, d3 as useCredentialsStore, fd as getActivatableTriggerNodes, fe as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, a3 as PLACEHOLDER_EMPTY_WORKFLOW_ID, a8 as resolveComponent, cb as resolveDirective, p as N8nText, b2 as withDirectives, a9 as Tooltip, N as N8nIcon, ff as OPEN_AI_API_CREDENTIAL_TYPE, fg as WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY, aW as h } from "./index-C2Ni_W8W.js";
import { B as Breadcrumbs, _ as __unplugin_components_0$1 } from "./ProjectBreadcrumb-BLABoJFa.js";
import { u as useWorkflowActivate } from "./useWorkflowActivate-DQFCR8r2.js";
const _hoisted_1$1 = { key: 2 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FolderBreadcrumbs",
  props: {
    currentFolder: { default: null },
    actions: { default: () => [] },
    hiddenItemsTrigger: { default: "click" },
    currentFolderAsLink: { type: Boolean, default: false },
    visibleLevels: { default: 1 }
  },
  emits: ["itemSelected", "action", "itemDrop", "projectDrop"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const projectsStore = useProjectsStore();
    const foldersStore = useFoldersStore();
    const hiddenBreadcrumbsItemsAsync = ref(new Promise(() => {
    }));
    const visibleIds = ref(/* @__PURE__ */ new Set());
    const currentProject = computed(
      () => projectsStore.currentProject ?? projectsStore.personalProject
    );
    const projectName = computed(() => {
      if (currentProject.value?.type === ProjectTypes.Personal) {
        return i18n.baseText("projects.menu.personal");
      }
      return currentProject.value?.name;
    });
    const isDragging = computed(() => {
      return foldersStore.draggedElement !== null;
    });
    const hasMoreItems = computed(() => {
      return visibleBreadcrumbsItems.value[0]?.parentFolder !== void 0;
    });
    const visibleBreadcrumbsItems = computed(() => {
      visibleIds.value.clear();
      if (!props.currentFolder) return [];
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
      if (currentProject.value) {
        visibleIds.value.add(currentProject.value.id);
      }
      visibleIds.value.add(props.currentFolder.id);
      return items;
    });
    const fetchHiddenBreadCrumbsItems = async () => {
      if (!projectName.value || !props.currentFolder?.parentFolder || !currentProject.value) {
        hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
      } else {
        try {
          const loadedItems = foldersStore.getHiddenBreadcrumbsItems(
            { id: currentProject.value.id, name: projectName.value },
            props.currentFolder.parentFolder,
            { addLinks: true }
          );
          const filtered = (await loadedItems).filter((item) => !visibleIds.value.has(item.id));
          hiddenBreadcrumbsItemsAsync.value = Promise.resolve(filtered);
        } catch (error) {
          hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
        }
      }
    };
    const onItemSelect = (item) => {
      emit("itemSelected", item);
    };
    const onAction = (action) => {
      emit("action", action);
    };
    const onProjectDrop = () => {
      if (!currentProject.value?.name) {
        return;
      }
      emit("projectDrop", currentProject.value.id, currentProject.value.name);
    };
    const onProjectHover = () => {
      if (!isDragging.value || !currentProject.value?.name) {
        return;
      }
      foldersStore.activeDropTarget = {
        type: "project",
        id: currentProject.value?.id,
        name: currentProject.value?.name
      };
    };
    const onItemHover = (item) => {
      if (!isDragging.value) {
        return;
      }
      foldersStore.activeDropTarget = {
        type: "folder",
        id: item.id,
        name: item.label
      };
    };
    watch(
      () => props.currentFolder?.parentFolder,
      () => {
        hiddenBreadcrumbsItemsAsync.value = new Promise(() => {
        });
      },
      { immediate: true }
    );
    onBeforeUnmount(() => {
      hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
    });
    return (_ctx, _cache) => {
      const _component_ProjectBreadcrumb = __unplugin_components_0$1;
      const _component_n8n_breadcrumbs = Breadcrumbs;
      const _component_n8n_action_toggle = N8nActionToggle;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ [_ctx.$style.container]: true, [_ctx.$style["dragging"]]: isDragging.value }),
        "data-test-id": "folder-breadcrumbs"
      }, [
        visibleBreadcrumbsItems.value.length ? (openBlock(), createBlock(_component_n8n_breadcrumbs, {
          key: 0,
          "drag-active": isDragging.value,
          "onUpdate:dragActive": _cache[0] || (_cache[0] = ($event) => isDragging.value = $event),
          items: visibleBreadcrumbsItems.value,
          "highlight-last-item": false,
          "path-truncated": hasMoreItems.value,
          "hidden-items": hasMoreItems.value ? hiddenBreadcrumbsItemsAsync.value : void 0,
          "hidden-items-trigger": props.hiddenItemsTrigger,
          onTooltipOpened: fetchHiddenBreadCrumbsItems,
          onItemSelected: onItemSelect,
          onItemHover,
          onItemDrop: _cache[1] || (_cache[1] = ($event) => emit("itemDrop", $event))
        }, createSlots({
          append: withCtx(() => [
            renderSlot(_ctx.$slots, "append")
          ]),
          _: 2
        }, [
          currentProject.value ? {
            name: "prepend",
            fn: withCtx(() => [
              createVNode(_component_ProjectBreadcrumb, {
                "current-project": currentProject.value,
                "is-dragging": isDragging.value,
                onProjectDrop,
                onProjectHover
              }, null, 8, ["current-project", "is-dragging"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["drag-active", "items", "path-truncated", "hidden-items", "hidden-items-trigger"])) : currentProject.value ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style["home-project"])
        }, [
          createVNode(_component_ProjectBreadcrumb, {
            "current-project": currentProject.value,
            "is-dragging": isDragging.value,
            onProjectDrop,
            onProjectHover
          }, null, 8, ["current-project", "is-dragging"]),
          renderSlot(_ctx.$slots, "append")
        ], 2)) : (openBlock(), createElementBlock("div", _hoisted_1$1, [
          renderSlot(_ctx.$slots, "append")
        ])),
        visibleBreadcrumbsItems.value && _ctx.actions?.length ? (openBlock(), createBlock(_component_n8n_action_toggle, {
          key: 3,
          actions: _ctx.actions,
          class: normalizeClass(_ctx.$style["action-toggle"]),
          theme: "dark",
          "data-test-id": "folder-breadcrumbs-actions",
          onAction
        }, null, 8, ["actions", "class"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container = "_container_p73tp_123";
const style0$1 = {
  container,
  "home-project": "_home-project_p73tp_128",
  "action-toggle": "_action-toggle_p73tp_133"
};
const cssModules$1 = {
  "$style": style0$1
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowActivationErrorMessage",
  props: {
    message: {}
  },
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createTextVNode(toDisplayString(unref(i18n).baseText(
          "workflowActivator.showMessage.displayActivationError.message.errorDataNotUndefined"
        )) + " ", 1),
        _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
        createBaseVNode("i", null, toDisplayString(_ctx.message), 1)
      ]);
    };
  }
});
const _hoisted_1 = { class: "workflow-activator" };
const _hoisted_2 = {
  key: 0,
  class: "could-not-be-started"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WorkflowActivator",
  props: {
    isArchived: { type: Boolean },
    workflowActive: { type: Boolean },
    workflowId: {},
    workflowPermissions: {}
  },
  emits: ["update:workflowActive"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { showMessage } = useToast();
    const workflowActivate = useWorkflowActivate();
    const uiStore = useUIStore();
    const workflowHelpers = useWorkflowHelpers();
    const i18n = useI18n();
    const workflowsStore = useWorkflowsStore();
    const credentialsStore = useCredentialsStore();
    const isWorkflowActive = computed(() => {
      const activeWorkflows = workflowsStore.activeWorkflows;
      return activeWorkflows.includes(props.workflowId);
    });
    const couldNotBeStarted = computed(() => {
      return props.workflowActive && isWorkflowActive.value !== props.workflowActive;
    });
    const getActiveColor = computed(() => {
      if (couldNotBeStarted.value) {
        return "#ff4949";
      }
      return "#13ce66";
    });
    const isCurrentWorkflow = computed(() => {
      return workflowsStore.workflowId === props.workflowId;
    });
    const foundTriggers = computed(
      () => getActivatableTriggerNodes(workflowsStore.workflowTriggerNodes)
    );
    const containsTrigger = computed(() => {
      return foundTriggers.value.length > 0;
    });
    const containsOnlyExecuteWorkflowTrigger = computed(() => {
      const foundActiveTriggers = workflowsStore.workflowTriggerNodes.filter(
        (trigger) => !trigger.disabled
      );
      const foundTriggers2 = foundActiveTriggers.filter(
        (trigger) => trigger.type === EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE
      );
      return foundTriggers2.length > 0 && foundTriggers2.length === foundActiveTriggers.length;
    });
    const isNewWorkflow = computed(
      () => !props.workflowId || props.workflowId === PLACEHOLDER_EMPTY_WORKFLOW_ID || props.workflowId === "new"
    );
    const disabled = computed(() => {
      if (props.isArchived) {
        return true;
      }
      if (isNewWorkflow.value || isCurrentWorkflow.value) {
        return !props.workflowActive && !containsTrigger.value;
      }
      return false;
    });
    function findManagedOpenAiCredentialId(usedCredentials) {
      return Object.keys(usedCredentials).find((credentialId) => {
        const credential = credentialsStore.state.credentials[credentialId];
        return credential.isManaged && credential.type === OPEN_AI_API_CREDENTIAL_TYPE;
      });
    }
    function hasActiveNodeUsingCredential(nodes, credentialId) {
      return nodes.some(
        (node) => node?.credentials?.[OPEN_AI_API_CREDENTIAL_TYPE]?.id === credentialId && !node.disabled
      );
    }
    const shouldShowFreeAiCreditsWarning = computed(() => {
      const usedCredentials = workflowsStore?.usedCredentials;
      if (!usedCredentials) return false;
      const managedOpenAiCredentialId = findManagedOpenAiCredentialId(usedCredentials);
      if (!managedOpenAiCredentialId) return false;
      return hasActiveNodeUsingCredential(workflowsStore.allNodes, managedOpenAiCredentialId);
    });
    async function activeChanged(newActiveState) {
      if (!isWorkflowActive.value) {
        const conflictData = await workflowHelpers.checkConflictingWebhooks(props.workflowId);
        if (conflictData) {
          const { trigger, conflict } = conflictData;
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
      const newState = await workflowActivate.updateWorkflowActivation(
        props.workflowId,
        newActiveState
      );
      emit("update:workflowActive", { id: props.workflowId, active: newState });
    }
    async function displayActivationError() {
      let errorMessage;
      try {
        const errorData = await workflowsStore.getActivationError(props.workflowId);
        if (errorData === void 0) {
          errorMessage = i18n.baseText(
            "workflowActivator.showMessage.displayActivationError.message.errorDataUndefined"
          );
        } else {
          errorMessage = h(_sfc_main$1, {
            message: errorData
          });
        }
      } catch (error) {
        errorMessage = i18n.baseText(
          "workflowActivator.showMessage.displayActivationError.message.catchBlock"
        );
      }
      showMessage({
        title: i18n.baseText("workflowActivator.showMessage.displayActivationError.title"),
        message: errorMessage,
        type: "warning",
        duration: 0
      });
    }
    watch(
      () => props.workflowActive,
      (workflowActive) => {
        if (workflowActive && shouldShowFreeAiCreditsWarning.value) {
          showMessage({
            title: i18n.baseText("freeAi.credits.showWarning.workflow.activation.title"),
            message: i18n.baseText("freeAi.credits.showWarning.workflow.activation.description"),
            type: "warning",
            duration: 0
          });
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_n8n_text = N8nText;
      const _component_el_switch = resolveComponent("el-switch");
      const _component_n8n_tooltip = Tooltip;
      const _component_n8n_icon = N8nIcon;
      const _directive_loading = resolveDirective("loading");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.activeStatusText),
          "data-test-id": "workflow-activator-status"
        }, [
          _ctx.workflowActive ? (openBlock(), createBlock(_component_n8n_text, {
            key: 0,
            color: couldNotBeStarted.value ? "danger" : "success",
            size: "small",
            bold: ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.active")), 1)
            ]),
            _: 1
          }, 8, ["color"])) : (openBlock(), createBlock(_component_n8n_text, {
            key: 1,
            color: "text-base",
            size: "small",
            bold: ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.inactive")), 1)
            ]),
            _: 1
          }))
        ], 2),
        createVNode(_component_n8n_tooltip, {
          disabled: !disabled.value,
          placement: "bottom"
        }, {
          content: withCtx(() => [
            createBaseVNode("div", null, toDisplayString(unref(i18n).baseText(
              _ctx.isArchived ? "workflowActivator.thisWorkflowIsArchived" : containsOnlyExecuteWorkflowTrigger.value ? "workflowActivator.thisWorkflowHasOnlyOneExecuteWorkflowTriggerNode" : "workflowActivator.thisWorkflowHasNoTriggerNodes"
            )), 1)
          ]),
          default: withCtx(() => [
            withDirectives(createVNode(_component_el_switch, {
              "model-value": _ctx.workflowActive,
              title: _ctx.workflowActive ? unref(i18n).baseText("workflowActivator.deactivateWorkflow") : unref(i18n).baseText("workflowActivator.activateWorkflow"),
              disabled: disabled.value || unref(workflowActivate).updatingWorkflowActivation.value || !isNewWorkflow.value && !_ctx.workflowPermissions.update,
              "active-color": getActiveColor.value,
              "inactive-color": "#8899AA",
              "data-test-id": "workflow-activate-switch",
              "onUpdate:modelValue": activeChanged
            }, null, 8, ["model-value", "title", "disabled", "active-color"]), [
              [_directive_loading, unref(workflowActivate).updatingWorkflowActivation.value]
            ])
          ]),
          _: 1
        }, 8, ["disabled"]),
        couldNotBeStarted.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_component_n8n_tooltip, { placement: "top" }, {
            content: withCtx(() => [
              withDirectives(createBaseVNode("div", { onClick: displayActivationError }, null, 512), [
                [_directive_n8n_html, unref(i18n).baseText("workflowActivator.theWorkflowIsSetToBeActiveBut")]
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n8n_icon, {
                icon: "triangle-alert",
                onClick: displayActivationError
              })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const activeStatusText = "_activeStatusText_17ux1_123";
const style0 = {
  activeStatusText
};
const cssModules = {
  "$style": style0
};
const WorkflowActivator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-a10f4f82"]]);
export {
  WorkflowActivator as W,
  __unplugin_components_0 as _
};

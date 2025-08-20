import { d as defineComponent, r as ref, x as computed, af as watch, h as createElementBlock, g as openBlock, n as normalizeClass, Q as renderSlot, j as createBaseVNode, f as createCommentVNode, t as toDisplayString, e as createBlock, i as createVNode, l as unref, ed as N8nActionToggle, w as withCtx, p as N8nText, k as createTextVNode, a4 as N8nTooltip, dK as N8nLoading, F as Fragment, A as renderList, B as withModifiers, C as N8nLink, _ as _export_sfc, aG as ProjectTypes, fj as isIconOrEmoji, c as useI18n, fk as __unplugin_components_0$2, av as useProjectsStore, aw as useFoldersStore, P as onBeforeUnmount, bu as createSlots, a as useToast, Z as useUIStore, aA as useWorkflowHelpers, a9 as useWorkflowsStore, db as useCredentialsStore, fl as getActivatableTriggerNodes, fm as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, ab as PLACEHOLDER_EMPTY_WORKFLOW_ID, T as resolveComponent, ci as resolveDirective, b4 as withDirectives, N as N8nIcon, fn as OPEN_AI_API_CREDENTIAL_TYPE, fo as WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY, aY as h } from "./index-BsWH3eYA.js";
import { u as useWorkflowActivate } from "./useWorkflowActivate-yjqC6aUm.js";
const _hoisted_1$2 = { "data-test-id": "hidden-items-tooltip" };
const _hoisted_2$1 = ["title", "data-resourceid", "onClick", "onMouseenter", "onMouseup"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nBreadcrumbs" },
  __name: "Breadcrumbs",
  props: {
    items: {},
    hiddenItems: { default: () => new Array() },
    theme: { default: "medium" },
    showBorder: { type: Boolean, default: false },
    loadingSkeletonRows: { default: 3 },
    separator: { default: "/" },
    highlightLastItem: { type: Boolean, default: true },
    hiddenItemsTrigger: { default: "click" },
    pathTruncated: { type: Boolean, default: false },
    dragActive: { type: Boolean, default: false }
  },
  emits: ["tooltipOpened", "tooltipClosed", "hiddenItemsLoadingError", "itemSelected", "itemHover", "itemDrop"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const loadedHiddenItems = ref([]);
    const isLoadingHiddenItems = ref(false);
    const currentPromise = ref(null);
    const hasHiddenItems = computed(() => {
      return Array.isArray(props.hiddenItems) ? props.hiddenItems.length > 0 : props.hiddenItems !== void 0;
    });
    const showEllipsis = computed(() => {
      return props.items.length && (hasHiddenItems.value || props.pathTruncated);
    });
    const dropdownDisabled = computed(() => {
      return props.pathTruncated && !hasHiddenItems.value;
    });
    const hiddenItemActions = computed(() => {
      return loadedHiddenItems.value.map((item2) => ({
        value: item2.id,
        label: item2.label,
        disabled: false
      }));
    });
    const getHiddenItems = async () => {
      if (loadedHiddenItems.value.length > 0 && props.hiddenItems === currentPromise.value) {
        return;
      }
      if (Array.isArray(props.hiddenItems)) {
        loadedHiddenItems.value = props.hiddenItems;
        return;
      }
      isLoadingHiddenItems.value = true;
      try {
        currentPromise.value = props.hiddenItems;
        const items = await props.hiddenItems;
        loadedHiddenItems.value = items;
      } catch (error) {
        loadedHiddenItems.value = [];
        emit("hiddenItemsLoadingError", error);
      } finally {
        isLoadingHiddenItems.value = false;
      }
    };
    watch(
      () => props.hiddenItems,
      (_newValue) => {
        void getHiddenItems();
      }
    );
    const onHiddenMenuVisibleChange = async (visible) => {
      if (visible) {
        emit("tooltipOpened");
        await getHiddenItems();
      } else {
        emit("tooltipClosed");
      }
    };
    const emitItemSelected = (id) => {
      const item2 = [...props.items, ...loadedHiddenItems.value].find((i) => i.id === id);
      if (!item2) {
        return;
      }
      emit("itemSelected", item2);
    };
    const emitItemHover = (id) => {
      const item2 = [...props.items, ...loadedHiddenItems.value].find((i) => i.id === id);
      if (!item2) {
        return;
      }
      emit("itemHover", item2);
    };
    const onHiddenItemMouseUp = (item2) => {
      const pathItem = [...props.items, ...loadedHiddenItems.value].find((i) => i.id === item2.value);
      if (!pathItem || !props.dragActive) {
        return;
      }
      emit("itemDrop", pathItem);
    };
    const onItemMouseUp = (item2) => {
      if (!props.dragActive) {
        return;
      }
      emit("itemDrop", item2);
    };
    const handleTooltipShow = async () => {
      emit("tooltipOpened");
      await getHiddenItems();
    };
    const handleTooltipClose = () => {
      emit("tooltipClosed");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({
          [_ctx.$style.container]: true,
          [_ctx.$style.border]: props.showBorder,
          [_ctx.$style[props.theme]]: true,
          ["n8n-breadcrumbs"]: true
        })
      }, [
        renderSlot(_ctx.$slots, "prepend"),
        createBaseVNode("ul", {
          class: normalizeClass(_ctx.$style.list)
        }, [
          _ctx.$slots.prepend && _ctx.items.length ? (openBlock(), createElementBlock("li", {
            key: 0,
            class: normalizeClass(_ctx.$style.separator)
          }, toDisplayString(_ctx.separator), 3)) : createCommentVNode("", true),
          showEllipsis.value ? (openBlock(), createElementBlock("li", {
            key: 1,
            class: normalizeClass({ [_ctx.$style.ellipsis]: true, [_ctx.$style.disabled]: dropdownDisabled.value }),
            "data-test-id": "ellipsis"
          }, [
            props.theme !== "small" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style["hidden-items-menu"])
            }, [
              createVNode(unref(N8nActionToggle), {
                actions: hiddenItemActions.value,
                loading: isLoadingHiddenItems.value,
                "loading-row-count": _ctx.loadingSkeletonRows,
                disabled: dropdownDisabled.value,
                class: normalizeClass(_ctx.$style["action-toggle"]),
                "popper-class": `${_ctx.$style["hidden-items-menu-popper"]} ${_ctx.dragActive ? _ctx.$style.dragging : ""}`,
                trigger: _ctx.hiddenItemsTrigger,
                theme: "dark",
                placement: "bottom",
                size: "small",
                "icon-orientation": "horizontal",
                "data-test-id": "hidden-items-menu",
                onVisibleChange: onHiddenMenuVisibleChange,
                onAction: emitItemSelected,
                onItemMouseup: onHiddenItemMouseUp
              }, {
                default: withCtx(() => [
                  createVNode(unref(N8nText), {
                    bold: true,
                    class: normalizeClass(_ctx.$style.dots)
                  }, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("...")
                    ])),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }, 8, ["actions", "loading", "loading-row-count", "disabled", "class", "popper-class", "trigger"])
            ], 2)) : (openBlock(), createBlock(unref(N8nTooltip), {
              key: 1,
              "popper-class": _ctx.$style.tooltip,
              disabled: dropdownDisabled.value,
              trigger: _ctx.hiddenItemsTrigger,
              placement: "bottom",
              onBeforeShow: handleTooltipShow,
              onHide: handleTooltipClose
            }, {
              content: withCtx(() => [
                isLoadingHiddenItems.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style["tooltip-loading"])
                }, [
                  createVNode(unref(N8nLoading), {
                    rows: 1,
                    loading: isLoadingHiddenItems.value,
                    animated: "",
                    variant: "p",
                    "shrink-last": false
                  }, null, 8, ["loading"])
                ], 2)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.tooltipContent)
                }, [
                  createBaseVNode("div", _hoisted_1$2, [
                    createVNode(unref(N8nText), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(loadedHiddenItems.value.map((item2) => item2.label).join(" / ")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ], 2))
              ]),
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style["tooltip-ellipsis"])
                }, "...", 2)
              ]),
              _: 1
            }, 8, ["popper-class", "disabled", "trigger"]))
          ], 2)) : createCommentVNode("", true),
          showEllipsis.value ? (openBlock(), createElementBlock("li", {
            key: 2,
            class: normalizeClass(_ctx.$style.separator)
          }, toDisplayString(_ctx.separator), 3)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item2, index) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item2.id
            }, [
              createBaseVNode("li", {
                class: normalizeClass({
                  [_ctx.$style.item]: true,
                  [_ctx.$style.current]: props.highlightLastItem && index === _ctx.items.length - 1,
                  [_ctx.$style.dragging]: props.dragActive
                }),
                title: item2.label,
                "data-resourceid": item2.id,
                "data-test-id": "breadcrumbs-item",
                "data-target": "folder-breadcrumb-item",
                onClick: withModifiers(($event) => emitItemSelected(item2.id), ["prevent"]),
                onMouseenter: ($event) => emitItemHover(item2.id),
                onMouseup: ($event) => onItemMouseUp(item2)
              }, [
                item2.href ? (openBlock(), createBlock(unref(N8nLink), {
                  key: 0,
                  href: item2.href,
                  theme: "text"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item2.label), 1)
                  ]),
                  _: 2
                }, 1032, ["href"])) : (openBlock(), createBlock(unref(N8nText), { key: 1 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item2.label), 1)
                  ]),
                  _: 2
                }, 1024))
              ], 42, _hoisted_2$1),
              index !== _ctx.items.length - 1 ? (openBlock(), createElementBlock("li", {
                key: 0,
                class: normalizeClass(_ctx.$style.separator)
              }, toDisplayString(_ctx.separator), 3)) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ], 2),
        renderSlot(_ctx.$slots, "append")
      ], 2);
    };
  }
});
const container$1 = "_container_1kcxp_123";
const small = "_small_1kcxp_127";
const border = "_border_1kcxp_131";
const list = "_list_1kcxp_136";
const item = "_item_1kcxp_142";
const dragging$1 = "_dragging_1kcxp_146";
const current = "_current_1kcxp_162";
const ellipsis = "_ellipsis_1kcxp_166";
const dots = "_dots_1kcxp_166";
const disabled = "_disabled_1kcxp_172";
const tooltip = "_tooltip_1kcxp_167";
const separator = "_separator_1kcxp_257";
const medium = "_medium_1kcxp_262";
const style0$3 = {
  container: container$1,
  small,
  border,
  list,
  item,
  dragging: dragging$1,
  current,
  ellipsis,
  dots,
  "tooltip-ellipsis": "_tooltip-ellipsis_1kcxp_167",
  disabled,
  "hidden-items-menu": "_hidden-items-menu_1kcxp_184",
  "hidden-items-menu-popper": "_hidden-items-menu-popper_1kcxp_189",
  "tooltip-loading": "_tooltip-loading_1kcxp_205",
  tooltip,
  separator,
  medium
};
const cssModules$3 = {
  "$style": style0$3
};
const Breadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$3]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProjectBreadcrumb",
  props: {
    currentProject: {},
    isDragging: { type: Boolean, default: false }
  },
  emits: ["projectHover", "projectDrop"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const projectIcon = computed(() => {
      if (props.currentProject?.type === ProjectTypes.Personal) {
        return { type: "icon", value: "user" };
      } else if (props.currentProject?.name) {
        return isIconOrEmoji(props.currentProject.icon) ? props.currentProject.icon : { type: "icon", value: "layers" };
      } else {
        return { type: "icon", value: "house" };
      }
    });
    const projectName = computed(() => {
      if (props.currentProject.type === ProjectTypes.Personal) {
        return i18n.baseText("projects.menu.personal");
      }
      return props.currentProject.name;
    });
    const onHover = () => {
      emit("projectHover");
    };
    const onProjectMouseUp = () => {
      if (props.isDragging) {
        emit("projectDrop");
      }
    };
    return (_ctx, _cache) => {
      const _component_ProjectIcon = __unplugin_components_0$2;
      const _component_N8nText = N8nText;
      const _component_n8n_link = N8nLink;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ [_ctx.$style["home-project"]]: true, [_ctx.$style.dragging]: _ctx.isDragging }),
        "data-test-id": "home-project",
        onMouseenter: onHover,
        onMouseup: _cache[0] || (_cache[0] = ($event) => _ctx.isDragging ? onProjectMouseUp() : null)
      }, [
        createVNode(_component_n8n_link, {
          to: `/projects/${_ctx.currentProject.id}`,
          class: normalizeClass([_ctx.$style["project-link"]])
        }, {
          default: withCtx(() => [
            createVNode(_component_ProjectIcon, {
              icon: projectIcon.value,
              "border-less": true,
              size: "mini",
              title: projectName.value
            }, null, 8, ["icon", "title"]),
            createVNode(_component_N8nText, {
              size: "medium",
              color: "text-base",
              class: normalizeClass(_ctx.$style["project-label"])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(projectName.value), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["to", "class"])
      ], 34);
    };
  }
});
const dragging = "_dragging_1gp09_128";
const style0$2 = {
  "home-project": "_home-project_1gp09_123",
  dragging,
  "project-link": "_project-link_1gp09_141",
  "project-label": "_project-label_1gp09_148"
};
const cssModules$2 = {
  "$style": style0$2
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$2]]);
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
          const filtered = (await loadedItems).filter((item2) => !visibleIds.value.has(item2.id));
          hiddenBreadcrumbsItemsAsync.value = Promise.resolve(filtered);
        } catch (error) {
          hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
        }
      }
    };
    const onItemSelect = (item2) => {
      emit("itemSelected", item2);
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
    const onItemHover = (item2) => {
      if (!isDragging.value) {
        return;
      }
      foldersStore.activeDropTarget = {
        type: "folder",
        id: item2.id,
        name: item2.label
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
    const disabled2 = computed(() => {
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
      const _component_n8n_tooltip = N8nTooltip;
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
          disabled: !disabled2.value,
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
              disabled: disabled2.value || unref(workflowActivate).updatingWorkflowActivation.value || !isNewWorkflow.value && !_ctx.workflowPermissions.update,
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
  Breadcrumbs as B,
  WorkflowActivator as W,
  __unplugin_components_0 as _
};

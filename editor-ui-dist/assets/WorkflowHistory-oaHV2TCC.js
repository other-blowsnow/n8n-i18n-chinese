import { bc as get, d as defineComponent, r as ref, x as computed, fU as dateFormat, c as useI18n, o as onMounted, h as createElementBlock, g as openBlock, n as normalizeClass, Q as renderSlot, j as createBaseVNode, i as createVNode, t as toDisplayString, w as withCtx, k as createTextVNode, a4 as N8nTooltip, e as createBlock, f as createCommentVNode, aL as N8nBadge, l as unref, B as withModifiers, ed as N8nActionToggle, _ as _export_sfc, F as Fragment, A as renderList, dK as N8nLoading, a6 as I18nT, q as N8nButton, N as N8nIcon, a7 as defineStore, at as useRootStore, v as useSettingsStore, a9 as useWorkflowsStore, aS as FileSaver_minExports, eQ as getNewWorkflow, aa as useRoute, b as useRouter, a as useToast, aB as usePageRedirectionHelper, Z as useUIStore, V as VIEWS, aC as getResourcePermissions, b3 as onBeforeMount, fV as watchEffect, T as resolveComponent, m as N8nHeading, f1 as telemetry, aY as h, fW as WORKFLOW_HISTORY_VERSION_RESTORE } from "./index-BsWH3eYA.js";
import { W as WorkflowPreview } from "./WorkflowPreview-CKGMAmhl.js";
var getWorkflowHistory = async (context, workflowId, queryParams) => {
  const { data } = await get(
    context.baseUrl,
    `/workflow-history/workflow/${workflowId}`,
    queryParams
  );
  return data;
};
var getWorkflowVersion = async (context, workflowId, versionId) => {
  const { data } = await get(
    context.baseUrl,
    `/workflow-history/workflow/${workflowId}/version/${versionId}`
  );
  return data;
};
const _hoisted_1$3 = ["datetime"];
const _hoisted_2$1 = ["value"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowHistoryListItem",
  props: {
    item: {},
    index: {},
    actions: {},
    isActive: { type: Boolean }
  },
  emits: ["action", "preview", "mounted"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const actionsVisible2 = ref(false);
    const itemElement = ref(null);
    const authorElement = ref(null);
    const isAuthorElementTruncated = ref(false);
    const formattedCreatedAt = computed(() => {
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
      const [date, time] = dateFormat(
        props.item.createdAt,
        `${props.item.createdAt.startsWith(currentYear) ? "" : "yyyy "}mmm d"#"HH:MM:ss`
      ).split("#");
      return i18n.baseText("workflowHistory.item.createdAt", { interpolate: { date, time } });
    });
    const authors = computed(() => {
      const allAuthors = props.item.authors.split(", ");
      let label2 = allAuthors[0];
      if (allAuthors.length > 1) {
        label2 = `${label2} + ${allAuthors.length - 1}`;
      }
      return {
        size: allAuthors.length,
        label: label2
      };
    });
    const idLabel = computed(
      () => i18n.baseText("workflowHistory.item.id", { interpolate: { id: props.item.versionId } })
    );
    const onAction = (value) => {
      const action = value;
      emit("action", {
        action,
        id: props.item.versionId,
        data: { formattedCreatedAt: formattedCreatedAt.value }
      });
    };
    const onVisibleChange = (visible) => {
      actionsVisible2.value = visible;
    };
    const onItemClick = (event) => {
      emit("preview", { event, id: props.item.versionId });
    };
    onMounted(() => {
      emit("mounted", {
        index: props.index,
        offsetTop: itemElement.value?.offsetTop ?? 0,
        isActive: props.isActive
      });
      isAuthorElementTruncated.value = (authorElement.value?.scrollWidth ?? 0) > (authorElement.value?.clientWidth ?? 0);
    });
    return (_ctx, _cache) => {
      const _component_n8n_tooltip = N8nTooltip;
      const _component_n8n_badge = N8nBadge;
      const _component_n8n_action_toggle = N8nActionToggle;
      return openBlock(), createElementBlock("li", {
        ref_key: "itemElement",
        ref: itemElement,
        "data-test-id": "workflow-history-list-item",
        class: normalizeClass({
          [_ctx.$style.item]: true,
          [_ctx.$style.active]: props.isActive,
          [_ctx.$style.actionsVisible]: actionsVisible2.value
        })
      }, [
        renderSlot(_ctx.$slots, "default", { formattedCreatedAt: formattedCreatedAt.value }, () => [
          createBaseVNode("p", { onClick: onItemClick }, [
            createBaseVNode("time", {
              datetime: _ctx.item.createdAt
            }, toDisplayString(formattedCreatedAt.value), 9, _hoisted_1$3),
            createVNode(_component_n8n_tooltip, {
              placement: "right-end",
              disabled: authors.value.size < 2 && !isAuthorElementTruncated.value
            }, {
              content: withCtx(() => [
                createTextVNode(toDisplayString(props.item.authors), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("span", {
                  ref_key: "authorElement",
                  ref: authorElement
                }, toDisplayString(authors.value.label), 513)
              ]),
              _: 1
            }, 8, ["disabled"]),
            createBaseVNode("data", {
              value: _ctx.item.versionId
            }, toDisplayString(idLabel.value), 9, _hoisted_2$1)
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.tail)
        }, [
          props.index === 0 ? (openBlock(), createBlock(_component_n8n_badge, { key: 0 }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.item.latest")), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_n8n_action_toggle, {
            theme: "dark",
            class: normalizeClass(_ctx.$style.actions),
            actions: props.actions,
            placement: "bottom-end",
            onAction,
            onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"])),
            onVisibleChange
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "action-toggle-button")
            ]),
            _: 3
          }, 8, ["class", "actions"])
        ], 2)
      ], 2);
    };
  }
});
const item = "_item_1amfi_123";
const tail = "_tail_1amfi_155";
const active = "_active_1amfi_160";
const actionsVisible = "_actionsVisible_1amfi_167";
const actions = "_actions_1amfi_167";
const style0$3 = {
  item,
  tail,
  active,
  actionsVisible,
  actions
};
const cssModules$3 = {
  "$style": style0$3
};
const WorkflowHistoryListItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _hoisted_1$2 = ["aria-label"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowHistoryList",
  props: {
    items: {},
    activeItem: {},
    actions: {},
    requestNumberOfItems: {},
    lastReceivedItemsLength: {},
    evaluatedPruneTime: {},
    shouldUpgrade: { type: Boolean },
    isListLoading: { type: Boolean }
  },
  emits: ["action", "preview", "loadMore", "upgrade"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const listElement = ref(null);
    const shouldAutoScroll = ref(true);
    const observer = ref(null);
    const getActions = (index) => index === 0 ? props.actions.filter((action) => action.value !== "restore") : props.actions;
    const observeElement = (element) => {
      observer.value = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.value?.unobserve(element);
            observer.value?.disconnect();
            observer.value = null;
            emit("loadMore", { take: props.requestNumberOfItems, skip: props.items.length });
          }
        },
        {
          root: listElement.value,
          threshold: 0.01
        }
      );
      observer.value.observe(element);
    };
    const onAction = ({
      action,
      id,
      data
    }) => {
      shouldAutoScroll.value = false;
      emit("action", { action, id, data });
    };
    const onPreview = ({ event, id }) => {
      shouldAutoScroll.value = false;
      emit("preview", { event, id });
    };
    const onItemMounted = ({
      index,
      offsetTop,
      isActive
    }) => {
      if (isActive && shouldAutoScroll.value) {
        shouldAutoScroll.value = false;
        listElement.value?.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
      if (index === props.items.length - 1 && props.lastReceivedItemsLength === props.requestNumberOfItems) {
        observeElement(listElement.value?.children[index]);
      }
    };
    return (_ctx, _cache) => {
      const _component_n8n_loading = N8nLoading;
      return openBlock(), createElementBlock("ul", {
        ref_key: "listElement",
        ref: listElement,
        class: normalizeClass(_ctx.$style.list),
        "data-test-id": "workflow-history-list"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item2, index) => {
          return openBlock(), createBlock(WorkflowHistoryListItem, {
            key: item2.versionId,
            index,
            item: item2,
            "is-active": item2.versionId === props.activeItem?.versionId,
            actions: getActions(index),
            onAction,
            onPreview,
            onMounted: onItemMounted
          }, null, 8, ["index", "item", "is-active", "actions"]);
        }), 128)),
        !props.items.length && !props.isListLoading ? (openBlock(), createElementBlock("li", {
          key: 0,
          class: normalizeClass(_ctx.$style.empty)
        }, [
          createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.empty")) + " ", 1),
          _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
          createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowHistory.hint")), 1)
        ], 2)) : createCommentVNode("", true),
        props.isListLoading ? (openBlock(), createElementBlock("li", {
          key: 1,
          class: normalizeClass(_ctx.$style.loader),
          role: "status",
          "aria-live": "polite",
          "aria-busy": "true",
          "aria-label": unref(i18n).baseText("generic.loading")
        }, [
          createVNode(_component_n8n_loading, {
            rows: 3,
            class: "mb-xs"
          }),
          createVNode(_component_n8n_loading, {
            rows: 3,
            class: "mb-xs"
          }),
          createVNode(_component_n8n_loading, {
            rows: 3,
            class: "mb-xs"
          })
        ], 10, _hoisted_1$2)) : createCommentVNode("", true),
        props.shouldUpgrade ? (openBlock(), createElementBlock("li", {
          key: 2,
          class: normalizeClass(_ctx.$style.retention)
        }, [
          createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workflowHistory.limit", {
            interpolate: { evaluatedPruneTime: String(props.evaluatedPruneTime) }
          })), 1),
          createVNode(unref(I18nT), {
            keypath: "workflowHistory.upgrade",
            tag: "span",
            scope: "global"
          }, {
            link: withCtx(() => [
              createBaseVNode("a", {
                href: "#",
                onClick: _cache[0] || (_cache[0] = ($event) => emit("upgrade"))
              }, toDisplayString(unref(i18n).baseText("workflowHistory.upgrade.link")), 1)
            ]),
            _: 1
          })
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const list = "_list_1rv1j_123";
const empty = "_empty_1rv1j_132";
const loader = "_loader_1rv1j_145";
const retention = "_retention_1rv1j_149";
const style0$2 = {
  list,
  empty,
  loader,
  retention
};
const cssModules$2 = {
  "$style": style0$2
};
const WorkflowHistoryList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = ["datetime"];
const _hoisted_2 = ["value"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowHistoryContent",
  props: {
    workflow: {},
    workflowVersion: {},
    actions: {},
    isListLoading: { type: Boolean },
    isFirstItemShown: { type: Boolean }
  },
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const i18n = useI18n();
    const props = __props;
    const emit = __emit;
    const workflowVersionPreview = computed(() => {
      if (!props.workflowVersion || !props.workflow) {
        return;
      }
      const { pinData, ...workflow } = props.workflow;
      return {
        ...workflow,
        nodes: props.workflowVersion.nodes,
        connections: props.workflowVersion.connections
      };
    });
    const actions2 = computed(
      () => props.isFirstItemShown ? props.actions.filter((action) => action.value !== "restore") : props.actions
    );
    const onAction = ({
      action,
      id,
      data
    }) => {
      emit("action", { action, id, data });
    };
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_button = N8nButton;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.content)
      }, [
        props.workflowVersion ? (openBlock(), createBlock(WorkflowPreview, {
          key: 0,
          workflow: workflowVersionPreview.value,
          loading: props.isListLoading,
          "loader-type": "spinner"
        }, null, 8, ["workflow", "loading"])) : createCommentVNode("", true),
        createBaseVNode("ul", {
          class: normalizeClass(_ctx.$style.info)
        }, [
          props.workflowVersion ? (openBlock(), createBlock(WorkflowHistoryListItem, {
            key: 0,
            class: normalizeClass(_ctx.$style.card),
            index: -1,
            item: props.workflowVersion,
            "is-active": false,
            actions: actions2.value,
            onAction
          }, {
            default: withCtx(({ formattedCreatedAt }) => [
              createBaseVNode("section", {
                class: normalizeClass(_ctx.$style.text)
              }, [
                createBaseVNode("p", null, [
                  createBaseVNode("span", {
                    class: normalizeClass(_ctx.$style.label)
                  }, toDisplayString(unref(i18n).baseText("workflowHistory.content.title")) + ": ", 3),
                  createBaseVNode("time", {
                    datetime: props.workflowVersion.createdAt
                  }, toDisplayString(formattedCreatedAt), 9, _hoisted_1$1)
                ]),
                createBaseVNode("p", null, [
                  createBaseVNode("span", {
                    class: normalizeClass(_ctx.$style.label)
                  }, toDisplayString(unref(i18n).baseText("workflowHistory.content.editedBy")) + ": ", 3),
                  createBaseVNode("span", null, toDisplayString(props.workflowVersion.authors), 1)
                ]),
                createBaseVNode("p", null, [
                  createBaseVNode("span", {
                    class: normalizeClass(_ctx.$style.label)
                  }, toDisplayString(unref(i18n).baseText("workflowHistory.content.versionId")) + ": ", 3),
                  createBaseVNode("data", {
                    value: props.workflowVersion.versionId
                  }, toDisplayString(props.workflowVersion.versionId), 9, _hoisted_2)
                ])
              ], 2)
            ]),
            "action-toggle-button": withCtx(() => [
              createVNode(_component_n8n_button, {
                type: "tertiary",
                size: "large",
                "data-test-id": "action-toggle-button"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.content.actions")) + " ", 1),
                  createVNode(_component_n8n_icon, {
                    class: "ml-3xs",
                    icon: "chevron-down",
                    size: "small"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["class", "item", "actions"])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
const content = "_content_ne8yf_123";
const info = "_info_ne8yf_133";
const card = "_card_ne8yf_141";
const text = "_text_ne8yf_146";
const label = "_label_ne8yf_171";
const style0$1 = {
  content,
  info,
  card,
  text,
  label
};
const cssModules$1 = {
  "$style": style0$1
};
const WorkflowHistoryContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const useWorkflowHistoryStore = defineStore("workflowHistory", () => {
  const rootStore = useRootStore();
  const settingsStore = useSettingsStore();
  const workflowsStore = useWorkflowsStore();
  const licensePruneTime = computed(() => settingsStore.settings.workflowHistory.licensePruneTime);
  const pruneTime = computed(() => settingsStore.settings.workflowHistory.pruneTime);
  const evaluatedPruneTime = computed(() => Math.min(pruneTime.value, licensePruneTime.value));
  const shouldUpgrade = computed(
    () => licensePruneTime.value !== -1 && licensePruneTime.value === pruneTime.value
  );
  const getWorkflowHistory$1 = async (workflowId, queryParams) => await getWorkflowHistory(rootStore.restApiContext, workflowId, queryParams);
  const getWorkflowVersion$1 = async (workflowId, versionId) => await getWorkflowVersion(rootStore.restApiContext, workflowId, versionId);
  const downloadVersion = async (workflowId, workflowVersionId, data) => {
    const [workflow, workflowVersion] = await Promise.all([
      workflowsStore.fetchWorkflow(workflowId),
      getWorkflowVersion$1(workflowId, workflowVersionId)
    ]);
    const { connections, nodes } = workflowVersion;
    const blob = new Blob([JSON.stringify({ ...workflow, nodes, connections }, null, 2)], {
      type: "application/json;charset=utf-8"
    });
    FileSaver_minExports.saveAs(blob, `${workflow.name}(${data.formattedCreatedAt}).json`);
  };
  const cloneIntoNewWorkflow = async (workflowId, workflowVersionId, data) => {
    const [workflow, workflowVersion] = await Promise.all([
      workflowsStore.fetchWorkflow(workflowId),
      getWorkflowVersion$1(workflowId, workflowVersionId)
    ]);
    const { connections, nodes } = workflowVersion;
    const { name } = workflow;
    const newWorkflow = await getNewWorkflow(rootStore.restApiContext, {
      name: `${name} (${data.formattedCreatedAt})`
    });
    const newWorkflowData = {
      nodes,
      connections,
      name: newWorkflow.name
    };
    return await workflowsStore.createNewWorkflow(newWorkflowData);
  };
  const restoreWorkflow = async (workflowId, workflowVersionId, shouldDeactivate) => {
    const workflowVersion = await getWorkflowVersion$1(workflowId, workflowVersionId);
    const { connections, nodes } = workflowVersion;
    const updateData = { connections, nodes };
    if (shouldDeactivate) {
      updateData.active = false;
    }
    return await workflowsStore.updateWorkflow(workflowId, updateData, true).catch(async (error) => {
      if (error.httpStatusCode === 400 && error.message.includes("can not be activated")) {
        return await workflowsStore.fetchWorkflow(workflowId);
      } else {
        throw new Error(error);
      }
    });
  };
  return {
    getWorkflowHistory: getWorkflowHistory$1,
    getWorkflowVersion: getWorkflowVersion$1,
    downloadVersion,
    cloneIntoNewWorkflow,
    restoreWorkflow,
    evaluatedPruneTime,
    shouldUpgrade
  };
});
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WorkflowHistory",
  setup(__props) {
    const workflowHistoryActionTypes = [
      "restore",
      "clone",
      "open",
      "download"
    ];
    const WORKFLOW_HISTORY_ACTIONS = workflowHistoryActionTypes.reduce(
      (record, key) => ({ ...record, [key.toUpperCase()]: key }),
      {}
    );
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const toast = useToast();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const workflowHistoryStore = useWorkflowHistoryStore();
    const uiStore = useUIStore();
    const workflowsStore = useWorkflowsStore();
    const canRender = ref(true);
    const isListLoading = ref(true);
    const requestNumberOfItems = ref(20);
    const lastReceivedItemsLength = ref(0);
    const activeWorkflow = ref(null);
    const workflowHistory = ref([]);
    const activeWorkflowVersion = ref(null);
    const workflowId = computed(() => normalizeSingleRouteParam("workflowId"));
    const versionId = computed(() => normalizeSingleRouteParam("versionId"));
    const editorRoute = computed(() => ({
      name: VIEWS.WORKFLOW,
      params: {
        name: workflowId.value
      }
    }));
    const workflowPermissions = computed(
      () => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow
    );
    const actions2 = computed(
      () => workflowHistoryActionTypes.map((value) => ({
        label: i18n.baseText(`workflowHistory.item.actions.${value}`),
        disabled: value === "clone" && !workflowPermissions.value.create || value === "restore" && !workflowPermissions.value.update,
        value
      }))
    );
    const isFirstItemShown = computed(() => workflowHistory.value[0]?.versionId === versionId.value);
    const evaluatedPruneTime = computed(() => Math.floor(workflowHistoryStore.evaluatedPruneTime / 24));
    const sendTelemetry = (event) => {
      telemetry.track(event, {
        instance_id: useRootStore().instanceId,
        workflow_id: workflowId.value
      });
    };
    const loadMore = async (queryParams) => {
      const history = await workflowHistoryStore.getWorkflowHistory(workflowId.value, queryParams);
      lastReceivedItemsLength.value = history.length;
      workflowHistory.value = workflowHistory.value.concat(history);
    };
    onBeforeMount(async () => {
      sendTelemetry("User opened workflow history");
      try {
        const [workflow] = await Promise.all([
          workflowsStore.fetchWorkflow(workflowId.value),
          loadMore({ take: requestNumberOfItems.value })
        ]);
        activeWorkflow.value = workflow;
        isListLoading.value = false;
        if (!versionId.value && workflowHistory.value.length) {
          await router.replace({
            name: VIEWS.WORKFLOW_HISTORY,
            params: {
              workflowId: workflowId.value,
              versionId: workflowHistory.value[0].versionId
            }
          });
        }
      } catch (error) {
        canRender.value = false;
        toast.showError(error, i18n.baseText("workflowHistory.title"));
      }
    });
    const normalizeSingleRouteParam = (name) => {
      const param = route.params[name];
      if (typeof param === "string") return param;
      return param?.[0] ?? "";
    };
    const openInNewTab = (id) => {
      const { href } = router.resolve({
        name: VIEWS.WORKFLOW_HISTORY,
        params: {
          workflowId: workflowId.value,
          versionId: id
        }
      });
      window.open(href, "_blank");
    };
    const openRestorationModal = async (isWorkflowActivated, formattedCreatedAt) => {
      return await new Promise((resolve, reject) => {
        const buttons = [
          {
            text: i18n.baseText("workflowHistory.action.restore.modal.button.cancel"),
            type: "tertiary",
            action: () => {
              resolve(
                "cancel"
                /* cancel */
              );
            }
          }
        ];
        if (isWorkflowActivated) {
          buttons.push({
            text: i18n.baseText("workflowHistory.action.restore.modal.button.deactivateAndRestore"),
            type: "tertiary",
            action: () => {
              resolve(
                "deactivateAndRestore"
                /* deactivateAndRestore */
              );
            }
          });
        }
        buttons.push({
          text: i18n.baseText("workflowHistory.action.restore.modal.button.restore"),
          type: "primary",
          action: () => {
            resolve(
              "restore"
              /* restore */
            );
          }
        });
        try {
          uiStore.openModalWithData({
            name: WORKFLOW_HISTORY_VERSION_RESTORE,
            data: {
              beforeClose: () => {
                resolve(
                  "cancel"
                  /* cancel */
                );
              },
              isWorkflowActivated,
              formattedCreatedAt,
              buttons
            }
          });
        } catch (error) {
          reject(error);
        }
      });
    };
    const cloneWorkflowVersion = async (id, data) => {
      const clonedWorkflow = await workflowHistoryStore.cloneIntoNewWorkflow(
        workflowId.value,
        id,
        data
      );
      const { href } = router.resolve({
        name: VIEWS.WORKFLOW,
        params: {
          name: clonedWorkflow.id
        }
      });
      toast.showMessage({
        title: i18n.baseText("workflowHistory.action.clone.success.title"),
        message: h(
          "a",
          { href, target: "_blank" },
          i18n.baseText("workflowHistory.action.clone.success.message")
        ),
        type: "success",
        duration: 1e4
      });
    };
    const restoreWorkflowVersion = async (id, data) => {
      const workflow = await workflowsStore.fetchWorkflow(workflowId.value);
      const modalAction = await openRestorationModal(workflow.active, data.formattedCreatedAt);
      if (modalAction === "cancel") {
        return;
      }
      activeWorkflow.value = await workflowHistoryStore.restoreWorkflow(
        workflowId.value,
        id,
        modalAction === "deactivateAndRestore"
        /* deactivateAndRestore */
      );
      const history = await workflowHistoryStore.getWorkflowHistory(workflowId.value, {
        take: 1
      });
      workflowHistory.value = history.concat(workflowHistory.value);
      toast.showMessage({
        title: i18n.baseText("workflowHistory.action.restore.success.title"),
        type: "success"
      });
    };
    const onAction = async ({
      action,
      id,
      data
    }) => {
      try {
        switch (action) {
          case WORKFLOW_HISTORY_ACTIONS.OPEN:
            openInNewTab(id);
            sendTelemetry("User opened version in new tab");
            break;
          case WORKFLOW_HISTORY_ACTIONS.DOWNLOAD:
            await workflowHistoryStore.downloadVersion(workflowId.value, id, data);
            sendTelemetry("User downloaded version");
            break;
          case WORKFLOW_HISTORY_ACTIONS.CLONE:
            await cloneWorkflowVersion(id, data);
            sendTelemetry("User cloned version");
            break;
          case WORKFLOW_HISTORY_ACTIONS.RESTORE:
            await restoreWorkflowVersion(id, data);
            sendTelemetry("User restored version");
            break;
        }
      } catch (error) {
        toast.showError(
          error,
          i18n.baseText("workflowHistory.action.error.title", {
            interpolate: {
              action: i18n.baseText(`workflowHistory.item.actions.${action}`).toLowerCase()
            }
          })
        );
      }
    };
    const onPreview = async ({ event, id }) => {
      if (event.metaKey || event.ctrlKey) {
        openInNewTab(id);
        sendTelemetry("User opened version in new tab");
      } else {
        await router.push({
          name: VIEWS.WORKFLOW_HISTORY,
          params: {
            workflowId: workflowId.value,
            versionId: id
          }
        });
      }
    };
    const onUpgrade = () => {
      void pageRedirectionHelper.goToUpgrade("workflow-history", "upgrade-workflow-history");
    };
    watchEffect(async () => {
      if (!versionId.value) {
        return;
      }
      try {
        activeWorkflowVersion.value = await workflowHistoryStore.getWorkflowVersion(
          workflowId.value,
          versionId.value
        );
        sendTelemetry("User selected version");
      } catch (error) {
        toast.showError(
          new Error(`${error.message} "${versionId.value}"&nbsp;`),
          i18n.baseText("workflowHistory.title")
        );
      }
      try {
        activeWorkflow.value = await workflowsStore.fetchWorkflow(workflowId.value);
      } catch (error) {
        canRender.value = false;
        toast.showError(error, i18n.baseText("workflowHistory.title"));
      }
    });
    return (_ctx, _cache) => {
      const _component_n8n_heading = N8nHeading;
      const _component_N8nBadge = N8nBadge;
      const _component_n8n_button = N8nButton;
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.view)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createVNode(_component_n8n_heading, {
            tag: "h2",
            size: "medium"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(activeWorkflow.value?.name), 1)
            ]),
            _: 1
          }),
          activeWorkflow.value?.isArchived ? (openBlock(), createElementBlock("span", _hoisted_1, [
            createVNode(_component_N8nBadge, {
              class: "ml-s",
              theme: "tertiary",
              bold: "",
              "data-test-id": "workflow-archived-tag"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.archived")), 1)
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.corner)
        }, [
          createVNode(_component_n8n_heading, {
            tag: "h2",
            size: "medium",
            bold: ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.title")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            to: editorRoute.value,
            "data-test-id": "workflow-history-close-button"
          }, {
            default: withCtx(() => [
              createVNode(_component_n8n_button, {
                type: "tertiary",
                icon: "x",
                size: "small",
                text: "",
                square: ""
              })
            ]),
            _: 1
          }, 8, ["to"])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.listComponentWrapper)
        }, [
          canRender.value ? (openBlock(), createBlock(WorkflowHistoryList, {
            key: 0,
            items: workflowHistory.value,
            "last-received-items-length": lastReceivedItemsLength.value,
            "active-item": activeWorkflowVersion.value,
            actions: actions2.value,
            "request-number-of-items": requestNumberOfItems.value,
            "should-upgrade": unref(workflowHistoryStore).shouldUpgrade,
            "evaluated-prune-time": evaluatedPruneTime.value,
            "is-list-loading": isListLoading.value,
            onAction,
            onPreview,
            onLoadMore: loadMore,
            onUpgrade
          }, null, 8, ["items", "last-received-items-length", "active-item", "actions", "request-number-of-items", "should-upgrade", "evaluated-prune-time", "is-list-loading"])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.contentComponentWrapper)
        }, [
          canRender.value ? (openBlock(), createBlock(WorkflowHistoryContent, {
            key: 0,
            workflow: activeWorkflow.value,
            "workflow-version": activeWorkflowVersion.value,
            actions: actions2.value,
            "is-list-loading": isListLoading.value,
            "is-first-item-shown": isFirstItemShown.value,
            onAction
          }, null, 8, ["workflow", "workflow-version", "actions", "is-list-loading", "is-first-item-shown"])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
const view = "_view_1m8fw_123";
const header = "_header_1m8fw_133";
const corner = "_corner_1m8fw_141";
const contentComponentWrapper = "_contentComponentWrapper_1m8fw_152";
const listComponentWrapper = "_listComponentWrapper_1m8fw_157";
const style0 = {
  view,
  header,
  corner,
  contentComponentWrapper,
  listComponentWrapper
};
const cssModules = {
  "$style": style0
};
const WorkflowHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  WorkflowHistory as default
};

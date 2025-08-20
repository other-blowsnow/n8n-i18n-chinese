import { d as defineComponent, r as ref, x as computed, e as createBlock, f as createCommentVNode, g as openBlock, l as unref, y as N8nPopoverReka, w as withCtx, j as createBaseVNode, n as normalizeClass, i as createVNode, h as createElementBlock, m as N8nHeading, k as createTextVNode, t as toDisplayString, z as N8nCallout, F as Fragment, A as renderList, B as withModifiers, N as N8nIcon, p as N8nText, C as N8nLink, D as useI18n, _ as _export_sfc, E as ElDropdown, G as N8nAvatar, H as ElDropdownMenu, I as ElDropdownItem, J as N8nUserInfo, K as mergeProps, L as MAIN_HEADER_TABS, O as N8nRadioButtons, P as onBeforeUnmount, o as onMounted, Q as renderSlot, R as nextTick, S as debounce, T as resolveComponent, U as normalizeStyle, W as createEventBus, X as useTagsStore, Y as useDebounce, Z as useUIStore, $ as BREAKPOINT_SM, a0 as BREAKPOINT_XL, a1 as BREAKPOINT_LG, a2 as BREAKPOINT_MD, a3 as getBannerRowHeight, V as VIEWS, a4 as N8nTooltip, a5 as _sfc_main$d, c as useI18n$1, a6 as I18nT, a7 as defineStore, a8 as usePushConnectionStore, a9 as useWorkflowsStore, u as useUsersStore, aa as useRoute, ab as PLACEHOLDER_EMPTY_WORKFLOW_ID, ac as STORES, ad as TIME, ae as useDocumentVisibility, af as watch, b as useRouter, ag as useEvaluationStore, ah as useNodeTypesStore, ai as useWorkflowSettingsCache, aj as useSourceControlStore, ak as WORKFLOW_ACTIVE_MODAL_KEY, al as ERROR_WORKFLOW_DOCS_URL, am as EVALUATIONS_DOCS_URL, an as TIME_SAVED_DOCS_URL, ao as WORKFLOW_SETTINGS_MODAL_KEY, ap as useTelemetry, aq as useMessage, ar as MODAL_CONFIRM, as as useCssModule, at as useRootStore, au as useCanvasStore, v as useSettingsStore, av as useProjectsStore, aw as useFoldersStore, ax as useNpsSurveyStore, a as useToast, ay as useDocumentTitle, az as useWorkflowSaving, aA as useWorkflowHelpers, aB as usePageRedirectionHelper, aC as getResourcePermissions, aD as WORKFLOW_MENU_ACTIONS, aE as hasPermission, aF as EnterpriseEditionFeature, aG as ProjectTypes, aH as useTemplateRef, aI as InlineRename, aJ as MAX_WORKFLOW_NAME_LENGTH, aK as _sfc_main$e, aL as N8nBadge, q as N8nButton, aM as SaveButton, aN as N8nActionDropdown, aO as WORKFLOW_SHARE_MODAL_KEY, aP as nodeViewEventBus, aQ as SOURCE_CONTROL_PUSH_MODAL_KEY, aR as IMPORT_WORKFLOW_URL_MODAL_KEY, aS as FileSaver_minExports, aT as DUPLICATE_MODAL_KEY, aU as ResourceType, aV as PROJECT_MOVE_RESOURCE_MODAL, aW as __vitePreload, aX as hyphenate, aY as h, aZ as hasOwn, a_ as useNDVStore, a$ as useExecutionsStore, b0 as useLocalStorage, b1 as LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON, b2 as STICKY_NODE_TYPE, b3 as onBeforeMount, b4 as withDirectives, b5 as vShow, b6 as N8N_MAIN_GITHUB_REPO_URL } from "./index-BsWH3eYA.js";
import { _ as __unplugin_components_0, W as WorkflowActivator } from "./WorkflowActivator-SFGWIVNj.js";
import { _ as _sfc_main$f } from "./PushConnectionTracker.vue_vue_type_script_setup_true_lang-BBhQwtrA.js";
import { u as useBeforeUnload } from "./useBeforeUnload-DmL8PNqU.js";
import { T as Tag } from "./Tag-CKyJVEEK.js";
import { u as usePushConnection } from "./usePushConnection-BHljF_sm.js";
import "./useWorkflowActivate-yjqC6aUm.js";
import "./global-link-actions-BfMXCg-D.js";
import "./readyToRunWorkflows.store-SI6MsPeC.js";
const _hoisted_1$4 = ["data-action-id", "onClick"];
const _hoisted_2$3 = { key: 0 };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nSuggestedActions" },
  __name: "SuggestedActions",
  props: {
    title: {},
    actions: {},
    open: { type: Boolean },
    ignoreAllLabel: { default: void 0 },
    popoverAlignment: { default: void 0 },
    notice: { default: void 0 }
  },
  emits: ["action-click", "ignore-click", "ignore-all", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const ignoringActions = ref(/* @__PURE__ */ new Set());
    const completedCount = computed(() => props.actions.filter((action) => action.completed).length);
    const handleActionClick = (action) => {
      if (!action.completed) {
        emit("action-click", action.id);
      }
    };
    const handleIgnoreClick = (actionId) => {
      ignoringActions.value.add(actionId);
      setTimeout(() => {
        emit("ignore-click", actionId);
        ignoringActions.value.delete(actionId);
      }, 500);
    };
    return (_ctx, _cache) => {
      return completedCount.value !== _ctx.actions.length ? (openBlock(), createBlock(unref(N8nPopoverReka), {
        key: 0,
        open: _ctx.open,
        width: "360px",
        "max-height": "500px",
        align: _ctx.popoverAlignment,
        "onUpdate:open": _cache[2] || (_cache[2] = ($event) => _ctx.$emit("update:open", $event))
      }, {
        trigger: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([_ctx.$style.triggerContainer, _ctx.open ? _ctx.$style.activeTrigger : ""]),
            "data-test-id": "suggested-action-count"
          }, [
            createVNode(unref(Tag), {
              text: `${completedCount.value} / ${_ctx.actions.length}`
            }, null, 8, ["text"])
          ], 2)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.popoverContent)
          }, [
            createVNode(unref(N8nHeading), { tag: "h4" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.title), 1)
              ]),
              _: 1
            }),
            _ctx.notice ? (openBlock(), createBlock(unref(N8nCallout), {
              key: 0,
              theme: "warning"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.notice), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actions, (action) => {
              return openBlock(), createElementBlock("div", {
                key: action.id,
                class: normalizeClass([
                  {
                    [_ctx.$style.actionItem]: true,
                    [_ctx.$style.ignoring]: ignoringActions.value.has(action.id),
                    [_ctx.$style.actionable]: !action.completed
                  }
                ]),
                "data-test-id": "suggested-action-item",
                "data-action-id": action.id,
                onClick: withModifiers(() => handleActionClick(action), ["prevent", "stop"])
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.checkboxContainer)
                }, [
                  action.completed ? (openBlock(), createBlock(unref(N8nIcon), {
                    key: 0,
                    icon: "circle-check",
                    color: "success"
                  })) : (openBlock(), createBlock(unref(N8nIcon), {
                    key: 1,
                    icon: "circle",
                    color: "foreground-dark"
                  }))
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.actionItemBody)
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass([action.completed ? "" : "mb-3xs", _ctx.$style.actionHeader])
                  }, [
                    createVNode(unref(N8nText), {
                      size: "medium",
                      bold: true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(action.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ], 2),
                  !action.completed ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
                    createVNode(unref(N8nText), {
                      size: "small",
                      color: "text-base"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(action.description) + " ", 1),
                        action.moreInfoLink ? (openBlock(), createBlock(unref(N8nLink), {
                          key: 0,
                          to: action.moreInfoLink,
                          size: "small",
                          theme: "text",
                          "new-window": "",
                          underline: "",
                          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                          }, ["stop"]))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("generic.moreInfo")), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ])) : createCommentVNode("", true)
                ], 2),
                createVNode(unref(N8nLink), {
                  theme: "text",
                  title: unref(t)("generic.ignore"),
                  "data-test-id": "suggested-action-ignore",
                  onClick: withModifiers(($event) => handleIgnoreClick(action.id), ["prevent", "stop"])
                }, {
                  default: withCtx(() => [
                    !action.completed ? (openBlock(), createBlock(unref(N8nIcon), {
                      key: 0,
                      icon: "x",
                      size: "large"
                    })) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["title", "onClick"])
              ], 10, _hoisted_1$4);
            }), 128)),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.ignoreAllContainer)
            }, [
              createVNode(unref(N8nLink), {
                theme: "text",
                size: "small",
                underline: "",
                "data-test-id": "suggested-action-ignore-all",
                onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("ignore-all"), ["prevent", "stop"]))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.ignoreAllLabel ?? unref(t)("generic.ignoreAll")), 1)
                ]),
                _: 1
              })
            ], 2)
          ], 2)
        ]),
        _: 1
      }, 8, ["open", "align"])) : createCommentVNode("", true);
    };
  }
});
const triggerContainer = "_triggerContainer_1gki6_123";
const activeTrigger = "_activeTrigger_1gki6_129";
const popoverContent = "_popoverContent_1gki6_134";
const actionItem = "_actionItem_1gki6_141";
const ignoring = "_ignoring_1gki6_147";
const actionable = "_actionable_1gki6_154";
const actionHeader = "_actionHeader_1gki6_157";
const actionItemBody = "_actionItemBody_1gki6_164";
const checkboxContainer = "_checkboxContainer_1gki6_171";
const ignoreAllContainer = "_ignoreAllContainer_1gki6_176";
const style0$4 = {
  triggerContainer,
  activeTrigger,
  popoverContent,
  actionItem,
  ignoring,
  actionable,
  actionHeader,
  actionItemBody,
  checkboxContainer,
  ignoreAllContainer
};
const cssModules$5 = {
  "$style": style0$4
};
const N8nSuggestedActions = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__cssModules", cssModules$5]]);
const _hoisted_1$3 = {
  class: "user-stack",
  "data-test-id": "user-stack-container"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "UserStack",
  props: {
    users: {},
    currentUserEmail: { default: "" },
    maxAvatars: { default: 2 },
    dropdownTrigger: { default: "hover" }
  },
  setup(__props) {
    const props = __props;
    const nonEmptyGroups = computed(() => {
      const users = {};
      for (const groupName2 in props.users) {
        if (props.users[groupName2].length > 0) {
          users[groupName2] = props.users[groupName2];
        }
      }
      return users;
    });
    const groupCount = computed(() => {
      return Object.keys(nonEmptyGroups.value).length;
    });
    const flatUserList = computed(() => {
      const users = [];
      for (const groupName2 in props.users) {
        users.push(...props.users[groupName2]);
      }
      return users;
    });
    const visibleAvatarCount = computed(() => {
      return flatUserList.value.length >= props.maxAvatars ? props.maxAvatars : flatUserList.value.length;
    });
    const hiddenUsersCount = computed(() => {
      return flatUserList.value.length - visibleAvatarCount.value;
    });
    const menuHeight = computed(() => {
      return groupCount.value > 1 ? 220 : 190;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(unref(ElDropdown), {
          trigger: _ctx.$props.dropdownTrigger,
          "max-height": menuHeight.value,
          "popper-class": "user-stack-popper"
        }, {
          dropdown: withCtx(() => [
            createVNode(unref(ElDropdownMenu), {
              class: "user-stack-list",
              "data-test-id": "user-stack-list"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(nonEmptyGroups.value, (groupUsers2, index) => {
                  return openBlock(), createElementBlock("div", { key: index }, [
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.groupContainer)
                    }, [
                      createVNode(unref(ElDropdownItem), null, {
                        default: withCtx(() => [
                          groupCount.value > 1 ? (openBlock(), createElementBlock("header", {
                            key: 0,
                            class: normalizeClass(_ctx.$style.groupName)
                          }, toDisplayString(index), 3)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024),
                      createBaseVNode("div", {
                        class: normalizeClass(_ctx.$style.groupUsers)
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(groupUsers2, (user) => {
                          return openBlock(), createBlock(unref(ElDropdownItem), {
                            key: user.id,
                            "data-test-id": `user-stack-info-${user.id}`,
                            class: normalizeClass(_ctx.$style.userInfoContainer)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(N8nUserInfo), mergeProps({ ref_for: true }, user, {
                                "is-current-user": user.email === props.currentUserEmail
                              }), null, 16, ["is-current-user"])
                            ]),
                            _: 2
                          }, 1032, ["data-test-id", "class"]);
                        }), 128))
                      ], 2)
                    ], 2)
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.avatars),
              "data-test-id": "user-stack-avatars"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(flatUserList.value.slice(0, visibleAvatarCount.value), (user) => {
                return openBlock(), createBlock(unref(N8nAvatar), {
                  key: user.id,
                  "first-name": user.firstName,
                  "last-name": user.lastName,
                  class: normalizeClass(_ctx.$style.avatar),
                  "data-test-id": `user-stack-avatar-${user.id}`,
                  size: "small"
                }, null, 8, ["first-name", "last-name", "class", "data-test-id"]);
              }), 128)),
              hiddenUsersCount.value > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.hiddenBadge)
              }, "+" + toDisplayString(hiddenUsersCount.value), 3)) : createCommentVNode("", true)
            ], 2)
          ]),
          _: 1
        }, 8, ["trigger", "max-height"])
      ]);
    };
  }
});
const avatars = "_avatars_1u5zw_123";
const avatar = "_avatar_1u5zw_123";
const hiddenBadge = "_hiddenBadge_1u5zw_133";
const groupContainer = "_groupContainer_1u5zw_148";
const groupName = "_groupName_1u5zw_156";
const groupUsers = "_groupUsers_1u5zw_164";
const userInfoContainer = "_userInfoContainer_1u5zw_170";
const style0$3 = {
  avatars,
  avatar,
  hiddenBadge,
  groupContainer,
  groupName,
  groupUsers,
  userInfoContainer
};
const cssModules$4 = {
  "$style": style0$3
};
const N8nUserStack = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__cssModules", cssModules$4]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TabBar",
  props: {
    items: {},
    modelValue: { default: MAIN_HEADER_TABS.WORKFLOW }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function onUpdateModelValue(tab, event) {
      emit("update:modelValue", tab, event);
    }
    return (_ctx, _cache) => {
      const _component_N8nRadioButtons = N8nRadioButtons;
      return _ctx.items ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass({
          [_ctx.$style.container]: true,
          ["tab-bar-container"]: true
        })
      }, [
        createVNode(_component_N8nRadioButtons, {
          "model-value": _ctx.modelValue,
          options: _ctx.items,
          "onUpdate:modelValue": onUpdateModelValue
        }, null, 8, ["model-value", "options"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const container$3 = "_container_j6ct2_123";
const style0$2 = {
  container: container$3
};
const cssModules$3 = {
  "$style": style0$2
};
const TabBar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$3]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "IntersectionObserver",
  props: {
    threshold: { default: 0 },
    enabled: { type: Boolean, default: false },
    eventBus: {}
  },
  emits: ["observed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const observer = ref(null);
    const root = ref(null);
    onBeforeUnmount(() => {
      if (props.enabled && observer.value) {
        observer.value.disconnect();
      }
    });
    onMounted(() => {
      if (!props.enabled) {
        return;
      }
      const options = {
        root: root.value,
        rootMargin: "0px",
        threshold: props.threshold
      };
      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          emit("observed", {
            el: target,
            isIntersecting
          });
        });
      }, options);
      observer.value = intersectionObserver;
      props.eventBus.on("observe", (observed) => {
        if (observed) {
          intersectionObserver.observe(observed);
        }
      });
      props.eventBus.on("unobserve", (observed) => {
        intersectionObserver.unobserve(observed);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "IntersectionObserved",
  props: {
    enabled: { type: Boolean, default: false },
    eventBus: {}
  },
  setup(__props) {
    const props = __props;
    const observed = ref(null);
    onMounted(async () => {
      if (!props.enabled) {
        return;
      }
      await nextTick();
      props.eventBus.emit("observe", observed.value);
    });
    onBeforeUnmount(() => {
      if (props.enabled) {
        props.eventBus.emit("unobserve", observed.value);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "observed",
        ref: observed
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
const _hoisted_1$2 = { class: "tags" };
const _hoisted_2$2 = ["onClick"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TagsContainer",
  props: {
    tagIds: {},
    tagsById: {},
    limit: { default: 20 },
    clickable: { type: Boolean, default: false },
    responsive: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const maxWidth = ref(320);
    const intersectionEventBus = createEventBus();
    const visibility = ref({});
    const tagsContainer = ref();
    const style = computed(() => ({
      "max-width": `${maxWidth.value}px`
    }));
    const tags = computed(() => {
      const allTags = props.tagIds.map((tagId) => props.tagsById[tagId]).filter(Boolean);
      let toDisplay = props.limit ? allTags.slice(0, props.limit) : allTags;
      toDisplay = toDisplay.map((tag) => ({
        ...tag,
        hidden: props.responsive && !visibility.value[tag.id]
      }));
      let visibleCount = toDisplay.length;
      if (props.responsive) {
        visibleCount = Object.values(visibility.value).reduce(
          (accu, val) => val ? accu + 1 : accu,
          0
        );
      }
      if (visibleCount < allTags.length) {
        const hidden = allTags.slice(visibleCount);
        const hiddenTitle = hidden.reduce(
          (accu, tag) => accu ? `${accu}, ${tag.name}` : tag.name,
          ""
        );
        const countTag = {
          id: "count",
          name: `+${hidden.length}`,
          title: hiddenTitle,
          isCount: true
        };
        toDisplay.splice(visibleCount, 0, countTag);
      }
      return toDisplay;
    });
    const setMaxWidth = () => {
      const container2 = tagsContainer.value?.$el;
      const parent = container2?.parentNode;
      if (parent) {
        maxWidth.value = 0;
        void nextTick(() => {
          maxWidth.value = parent.clientWidth;
        });
      }
    };
    const debouncedSetMaxWidth = debounce(setMaxWidth, 100);
    const onObserved = ({ el, isIntersecting }) => {
      if (el.dataset.id) {
        visibility.value = { ...visibility.value, [el.dataset.id]: isIntersecting };
      }
    };
    const onClick = (e, tag) => {
      if (props.clickable) {
        e.stopPropagation();
      }
      if (!tag.hidden) {
        emit("click", tag.id);
      }
    };
    onMounted(() => {
      setMaxWidth();
      window.addEventListener("resize", debouncedSetMaxWidth);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", debouncedSetMaxWidth);
    });
    return (_ctx, _cache) => {
      const _component_el_tag = resolveComponent("el-tag");
      return openBlock(), createBlock(_sfc_main$9, {
        ref_key: "tagsContainer",
        ref: tagsContainer,
        threshold: 1,
        class: "tags-container",
        style: normalizeStyle(style.value),
        enabled: _ctx.responsive,
        "event-bus": unref(intersectionEventBus),
        onObserved
      }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag) => {
              return openBlock(), createElementBlock("span", {
                key: tag.id,
                class: normalizeClass({ clickable: !tag.hidden }),
                onClick: (e) => onClick(e, tag)
              }, [
                tag.isCount ? (openBlock(), createBlock(_component_el_tag, {
                  key: 0,
                  title: tag.title,
                  type: "info",
                  size: "small",
                  class: "count-container",
                  "disable-transitions": true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tag.name), 1)
                  ]),
                  _: 2
                }, 1032, ["title"])) : (openBlock(), createBlock(_sfc_main$8, {
                  key: 1,
                  class: normalizeClass({ hideTag: tag.hidden }),
                  "data-id": tag.id,
                  enabled: _ctx.responsive,
                  "event-bus": unref(intersectionEventBus)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_tag, {
                      title: tag.name,
                      type: "info",
                      size: "mini",
                      class: normalizeClass({ hoverable: _ctx.hoverable }),
                      "disable-transitions": true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tag.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["title", "class"])
                  ]),
                  _: 2
                }, 1032, ["class", "data-id", "enabled", "event-bus"]))
              ], 10, _hoisted_2$2);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["style", "enabled", "event-bus"]);
    };
  }
});
const TagsContainer = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6bab2764"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTagsContainer",
  props: {
    tagIds: {},
    limit: {},
    clickable: { type: Boolean },
    responsive: { type: Boolean },
    hoverable: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const annotationTagsStore = useTagsStore();
    const tagsById = computed(() => annotationTagsStore.tagsById);
    function onClick(tagId) {
      emit("click", tagId);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TagsContainer, {
        "tag-ids": _ctx.tagIds,
        "tags-by-id": tagsById.value,
        limit: _ctx.limit,
        clickable: _ctx.clickable,
        responsive: _ctx.responsive,
        hoverable: _ctx.hoverable,
        onClick
      }, null, 8, ["tag-ids", "tags-by-id", "limit", "clickable", "responsive", "hoverable"]);
    };
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BreakpointsObserver",
  props: {
    valueXS: {},
    valueXL: {},
    valueLG: {},
    valueMD: {},
    valueSM: {},
    valueDefault: {}
  },
  setup(__props) {
    const props = __props;
    const { callDebounced } = useDebounce();
    const uiStore = useUIStore();
    const width = ref(window.innerWidth);
    const bp = computed(() => {
      if (width.value < BREAKPOINT_SM) {
        return "XS";
      }
      if (width.value >= BREAKPOINT_XL) {
        return "XL";
      }
      if (width.value >= BREAKPOINT_LG) {
        return "LG";
      }
      if (width.value >= BREAKPOINT_MD) {
        return "MD";
      }
      return "SM";
    });
    const value = computed(() => {
      if (props.valueXS && width.value < BREAKPOINT_SM) {
        return props.valueXS;
      }
      if (props.valueXL && width.value >= BREAKPOINT_XL) {
        return props.valueXL;
      }
      if (props.valueLG && width.value >= BREAKPOINT_LG) {
        return props.valueLG;
      }
      if (props.valueMD && width.value >= BREAKPOINT_MD) {
        return props.valueMD;
      }
      if (props.valueSM) {
        return props.valueSM;
      }
      return props.valueDefault;
    });
    const onResize = () => {
      void callDebounced(onResizeEnd, { debounceTime: 50 });
    };
    const onResizeEnd = async () => {
      width.value = window.innerWidth;
      await nextTick();
      const bannerHeight = await getBannerRowHeight();
      uiStore.updateBannersHeight(bannerHeight);
    };
    onMounted(() => {
      window.addEventListener("resize", onResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", onResize);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        renderSlot(_ctx.$slots, "default", {
          bp: bp.value,
          value: value.value
        })
      ]);
    };
  }
});
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = { key: 1 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowHistoryButton",
  props: {
    workflowId: {},
    isNewWorkflow: { type: Boolean },
    isFeatureEnabled: { type: Boolean }
  },
  emits: ["upgrade"],
  setup(__props, { emit: __emit }) {
    const locale = useI18n$1();
    const props = __props;
    const emit = __emit;
    const workflowHistoryRoute = computed(() => ({
      name: VIEWS.WORKFLOW_HISTORY,
      params: {
        workflowId: props.workflowId
      }
    }));
    return (_ctx, _cache) => {
      const _component_N8nIconButton = _sfc_main$d;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_N8nLink = N8nLink;
      const _component_N8nTooltip = N8nTooltip;
      return openBlock(), createBlock(_component_N8nTooltip, { placement: "bottom" }, {
        content: withCtx(() => [
          _ctx.isFeatureEnabled && _ctx.isNewWorkflow ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.empty")), 1)) : _ctx.isFeatureEnabled ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.enabled")), 1)) : (openBlock(), createBlock(unref(I18nT), {
            key: 2,
            keypath: "workflowHistory.button.tooltip.disabled",
            scope: "global"
          }, {
            link: withCtx(() => [
              createVNode(_component_N8nLink, {
                size: "small",
                onClick: _cache[0] || (_cache[0] = ($event) => emit("upgrade"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.disabled.link")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }))
        ]),
        default: withCtx(() => [
          createVNode(_component_RouterLink, { to: workflowHistoryRoute.value }, {
            default: withCtx(() => [
              createVNode(_component_N8nIconButton, {
                disabled: _ctx.isNewWorkflow || !_ctx.isFeatureEnabled,
                "data-test-id": "workflow-history-button",
                type: "highlight",
                icon: "history",
                size: "medium"
              }, null, 8, ["disabled"])
            ]),
            _: 1
          }, 8, ["to"])
        ]),
        _: 1
      });
    };
  }
});
const HEARTBEAT_INTERVAL = 5 * TIME.MINUTE;
const useCollaborationStore = defineStore(STORES.COLLABORATION, () => {
  const pushStore = usePushConnectionStore();
  const workflowsStore = useWorkflowsStore();
  const usersStore = useUsersStore();
  const uiStore = useUIStore();
  const route = useRoute();
  const { addBeforeUnloadEventBindings, removeBeforeUnloadEventBindings, addBeforeUnloadHandler } = useBeforeUnload({ route });
  const unloadTimeout = ref(null);
  addBeforeUnloadHandler(() => {
    notifyWorkflowClosed();
    if (uiStore.stateIsDirty) {
      unloadTimeout.value = setTimeout(() => notifyWorkflowOpened, 5 * TIME.SECOND);
    }
  });
  const collaborators = ref([]);
  const heartbeatTimer = ref(null);
  const startHeartbeat = () => {
    stopHeartbeat();
    heartbeatTimer.value = window.setInterval(notifyWorkflowOpened, HEARTBEAT_INTERVAL);
  };
  const stopHeartbeat = () => {
    if (heartbeatTimer.value !== null) {
      clearInterval(heartbeatTimer.value);
      heartbeatTimer.value = null;
    }
  };
  const pushStoreEventListenerRemovalFn = ref(null);
  function initialize() {
    if (pushStoreEventListenerRemovalFn.value) {
      return;
    }
    pushStoreEventListenerRemovalFn.value = pushStore.addEventListener((event) => {
      if (event.type === "collaboratorsChanged" && event.data.workflowId === workflowsStore.workflowId) {
        collaborators.value = event.data.collaborators;
      }
    });
    addBeforeUnloadEventBindings();
    notifyWorkflowOpened();
    startHeartbeat();
  }
  function terminate() {
    if (typeof pushStoreEventListenerRemovalFn.value === "function") {
      pushStoreEventListenerRemovalFn.value();
      pushStoreEventListenerRemovalFn.value = null;
    }
    notifyWorkflowClosed();
    stopHeartbeat();
    pushStore.clearQueue();
    removeBeforeUnloadEventBindings();
    if (unloadTimeout.value) {
      clearTimeout(unloadTimeout.value);
    }
  }
  function notifyWorkflowOpened() {
    const { workflowId } = workflowsStore;
    if (workflowId === PLACEHOLDER_EMPTY_WORKFLOW_ID) return;
    pushStore.send({ type: "workflowOpened", workflowId });
  }
  function notifyWorkflowClosed() {
    const { workflowId } = workflowsStore;
    if (workflowId === PLACEHOLDER_EMPTY_WORKFLOW_ID) return;
    pushStore.send({ type: "workflowClosed", workflowId });
    collaborators.value = collaborators.value.filter(
      ({ user }) => user.id !== usersStore.currentUserId
    );
  }
  return {
    collaborators,
    initialize,
    terminate,
    startHeartbeat,
    stopHeartbeat
  };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CollaborationPane",
  setup(__props) {
    const collaborationStore = useCollaborationStore();
    const usersStore = useUsersStore();
    const visibility = useDocumentVisibility();
    watch(visibility, (visibilityState) => {
      if (visibilityState === "hidden") {
        collaborationStore.stopHeartbeat();
      } else {
        collaborationStore.startHeartbeat();
      }
    });
    const showUserStack = computed(() => collaborationStore.collaborators.length > 1);
    const collaboratorsSorted = computed(() => {
      const users = collaborationStore.collaborators.map(({ user }) => user);
      const index = users.findIndex((user) => user.id === usersStore.currentUser?.id);
      if (index < 1) return { defaultGroup: users };
      const [currentUser] = users.splice(index, 1);
      return { defaultGroup: [currentUser, ...users] };
    });
    const currentUserEmail = computed(() => usersStore.currentUser?.email);
    onMounted(() => {
      collaborationStore.initialize();
    });
    onBeforeUnmount(() => {
      collaborationStore.terminate();
    });
    return (_ctx, _cache) => {
      const _component_n8n_user_stack = N8nUserStack;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`collaboration-pane-container ${_ctx.$style.container}`),
        "data-test-id": "collaboration-pane"
      }, [
        showUserStack.value ? (openBlock(), createBlock(_component_n8n_user_stack, {
          key: 0,
          users: collaboratorsSorted.value,
          "current-user-email": currentUserEmail.value
        }, null, 8, ["users", "current-user-email"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$2 = "_container_ame1i_123";
const style0$1 = {
  container: container$2
};
const cssModules$2 = {
  "$style": style0$1
};
const CollaborationPane = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$2]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowProductionChecklist",
  props: {
    workflow: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n$1();
    const router = useRouter();
    const evaluationStore = useEvaluationStore();
    const nodeTypesStore = useNodeTypesStore();
    const workflowsCache = useWorkflowSettingsCache();
    const uiStore = useUIStore();
    const message = useMessage();
    const telemetry = useTelemetry();
    const sourceControlStore = useSourceControlStore();
    const isPopoverOpen = ref(false);
    const cachedSettings = ref(null);
    const hasAINode = computed(() => {
      const nodes = props.workflow.nodes;
      return nodes.some((node) => {
        const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
        return nodeType?.codex?.categories?.includes("AI");
      });
    });
    const hasEvaluationSetOutputsNode = computed(() => {
      return evaluationStore.evaluationSetOutputsNodeExist;
    });
    const hasErrorWorkflow = computed(() => {
      return !!props.workflow.settings?.errorWorkflow;
    });
    const hasTimeSaved = computed(() => {
      return props.workflow.settings?.timeSavedPerExecution !== void 0;
    });
    const isActivationModalOpen = computed(() => {
      return uiStore.isModalActiveById[WORKFLOW_ACTIVE_MODAL_KEY];
    });
    const isProtectedEnvironment = computed(() => {
      return sourceControlStore.preferences.branchReadOnly;
    });
    const availableActions = computed(() => {
      if (!props.workflow.active || workflowsCache.isCacheLoading.value) {
        return [];
      }
      const actions = [];
      const suggestedActionSettings = cachedSettings.value?.suggestedActions ?? {};
      if (!suggestedActionSettings.errorWorkflow?.ignored) {
        actions.push({
          id: "errorWorkflow",
          title: i18n.baseText("workflowProductionChecklist.errorWorkflow.title"),
          description: i18n.baseText("workflowProductionChecklist.errorWorkflow.description"),
          moreInfoLink: ERROR_WORKFLOW_DOCS_URL,
          completed: hasErrorWorkflow.value
        });
      }
      if (hasAINode.value && evaluationStore.isEvaluationEnabled && !suggestedActionSettings.evaluations?.ignored) {
        actions.push({
          id: "evaluations",
          title: i18n.baseText("workflowProductionChecklist.evaluations.title"),
          description: i18n.baseText("workflowProductionChecklist.evaluations.description"),
          moreInfoLink: EVALUATIONS_DOCS_URL,
          completed: hasEvaluationSetOutputsNode.value
        });
      }
      if (!suggestedActionSettings.timeSaved?.ignored) {
        actions.push({
          id: "timeSaved",
          title: i18n.baseText("workflowProductionChecklist.timeSaved.title"),
          description: i18n.baseText("workflowProductionChecklist.timeSaved.description"),
          moreInfoLink: TIME_SAVED_DOCS_URL,
          completed: hasTimeSaved.value
        });
      }
      return actions;
    });
    async function loadWorkflowSettings() {
      if (props.workflow.id) {
        cachedSettings.value = await workflowsCache.getMergedWorkflowSettings(props.workflow.id);
      }
    }
    async function handleActionClick(actionId) {
      if (actionId === "evaluations") {
        await router.push({
          name: VIEWS.EVALUATION_EDIT,
          params: { name: props.workflow.id }
        });
      } else if (actionId === "errorWorkflow" || actionId === "timeSaved") {
        uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
      }
      isPopoverOpen.value = false;
    }
    function isValidAction(action) {
      return ["evaluations", "errorWorkflow", "timeSaved"].includes(action);
    }
    async function handleIgnoreClick(actionId) {
      if (!isValidAction(actionId)) {
        return;
      }
      await workflowsCache.ignoreSuggestedAction(props.workflow.id, actionId);
      await loadWorkflowSettings();
      telemetry.track("user clicked ignore suggested action", {
        actionId
      });
    }
    async function handleIgnoreAll() {
      const ignoreAllConfirmed = await message.confirm(
        i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.description"),
        i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.title"),
        {
          confirmButtonText: i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.confirm")
        }
      );
      if (ignoreAllConfirmed === MODAL_CONFIRM) {
        await workflowsCache.ignoreAllSuggestedActionsForAllWorkflows(
          availableActions.value.map((action) => action.id)
        );
        await loadWorkflowSettings();
        telemetry.track("user clicked ignore suggested actions for all workflows");
      }
    }
    function openSuggestedActions() {
      isPopoverOpen.value = true;
    }
    function onPopoverOpened() {
      telemetry.track("user opened suggested actions checklist");
    }
    function handlePopoverOpenChange(open) {
      if (open) {
        isPopoverOpen.value = true;
        onPopoverOpened();
      } else if (!isActivationModalOpen.value) {
        isPopoverOpen.value = false;
      }
    }
    watch(
      () => props.workflow.active,
      async (isActive, wasActive) => {
        if (isActive && !wasActive) {
          if (!cachedSettings.value?.firstActivatedAt) {
            setTimeout(() => {
              openSuggestedActions();
            }, 0);
          }
          await workflowsCache.updateFirstActivatedAt(props.workflow.id);
        }
      }
    );
    onMounted(async () => {
      await loadWorkflowSettings();
    });
    return (_ctx, _cache) => {
      return availableActions.value.length > 0 ? (openBlock(), createBlock(unref(N8nSuggestedActions), {
        key: 0,
        open: isPopoverOpen.value,
        title: unref(i18n).baseText("workflowProductionChecklist.title"),
        actions: availableActions.value,
        "ignore-all-label": unref(i18n).baseText("workflowProductionChecklist.turnOffWorkflowSuggestions"),
        notice: isProtectedEnvironment.value ? unref(i18n).baseText("workflowProductionChecklist.readOnlyNotice") : "",
        "popover-alignment": "end",
        onActionClick: handleActionClick,
        onIgnoreClick: handleIgnoreClick,
        onIgnoreAll: handleIgnoreAll,
        "onUpdate:open": handlePopoverOpenChange
      }, null, 8, ["open", "title", "actions", "ignore-all-label", "notice"])) : createCommentVNode("", true);
    };
  }
});
const INVALID_CHARS_REGEX = /[<>:"/\\|?*\u0000-\u001F\u007F-\u009F]/g;
const ZERO_WIDTH_CHARS_REGEX = /[\u200B-\u200D\u2060\uFEFF]/g;
const UNICODE_SPACES_REGEX = /[\u00A0\u2000-\u200A]/g;
const LEADING_TRAILING_DOTS_SPACES_REGEX = /^[\s.]+|[\s.]+$/g;
const WINDOWS_RESERVED_NAMES = /* @__PURE__ */ new Set([
  "CON",
  "PRN",
  "AUX",
  "NUL",
  "COM1",
  "COM2",
  "COM3",
  "COM4",
  "COM5",
  "COM6",
  "COM7",
  "COM8",
  "COM9",
  "LPT1",
  "LPT2",
  "LPT3",
  "LPT4",
  "LPT5",
  "LPT6",
  "LPT7",
  "LPT8",
  "LPT9"
]);
const DEFAULT_FALLBACK_NAME = "untitled";
const MAX_FILENAME_LENGTH = 200;
const sanitizeFilename = (filename, maxLength = MAX_FILENAME_LENGTH) => {
  if (!filename) {
    return DEFAULT_FALLBACK_NAME;
  }
  let baseName = filename.trim().replace(INVALID_CHARS_REGEX, "_").replace(ZERO_WIDTH_CHARS_REGEX, "").replace(UNICODE_SPACES_REGEX, " ").replace(LEADING_TRAILING_DOTS_SPACES_REGEX, "");
  if (!baseName) {
    baseName = DEFAULT_FALLBACK_NAME;
  }
  if (WINDOWS_RESERVED_NAMES.has(baseName.toUpperCase())) {
    baseName = `_${baseName}`;
  }
  if (baseName.length > maxLength) {
    baseName = baseName.slice(0, maxLength);
  }
  return baseName;
};
const _hoisted_1 = {
  class: "tags",
  "data-test-id": "workflow-tags-container"
};
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "archived" };
const WORKFLOW_NAME_MAX_WIDTH_SMALL_SCREENS = 150;
const WORKFLOW_NAME_MAX_WIDTH_WIDE_SCREENS = 200;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowDetails",
  props: {
    readOnly: { type: Boolean },
    id: {},
    tags: {},
    name: {},
    meta: {},
    scopes: {},
    active: { type: Boolean },
    currentFolder: {},
    isArchived: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const $style = useCssModule();
    const rootStore = useRootStore();
    const canvasStore = useCanvasStore();
    const settingsStore = useSettingsStore();
    const sourceControlStore = useSourceControlStore();
    const tagsStore = useTagsStore();
    const uiStore = useUIStore();
    const usersStore = useUsersStore();
    const workflowsStore = useWorkflowsStore();
    const projectsStore = useProjectsStore();
    const foldersStore = useFoldersStore();
    const npsSurveyStore = useNpsSurveyStore();
    const i18n = useI18n$1();
    const router = useRouter();
    const route = useRoute();
    const locale = useI18n$1();
    const telemetry = useTelemetry();
    const message = useMessage();
    const toast = useToast();
    const documentTitle = useDocumentTitle();
    const workflowSaving = useWorkflowSaving({ router });
    const workflowHelpers = useWorkflowHelpers();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const isTagsEditEnabled = ref(false);
    const appliedTagIds = ref([]);
    const tagsSaving = ref(false);
    const importFileRef = ref();
    const tagsEventBus = createEventBus();
    const sourceControlModalEventBus = createEventBus();
    const changeOwnerEventBus = createEventBus();
    const hasChanged = (prev, curr) => {
      if (prev.length !== curr.length) {
        return true;
      }
      const set = new Set(prev);
      return curr.reduce((acc, val) => acc || !set.has(val), false);
    };
    const isNewWorkflow = computed(() => {
      return !props.id || props.id === PLACEHOLDER_EMPTY_WORKFLOW_ID || props.id === "new";
    });
    const isWorkflowSaving = computed(() => {
      return uiStore.isActionActive.workflowSaving;
    });
    const onWorkflowPage = computed(() => {
      return route.meta && (route.meta.nodeView || route.meta.keepWorkflowAlive === true);
    });
    const onExecutionsTab = computed(() => {
      return [
        VIEWS.EXECUTION_HOME.toString(),
        VIEWS.WORKFLOW_EXECUTIONS.toString(),
        VIEWS.EXECUTION_PREVIEW
      ].includes(route.name || "");
    });
    const workflowPermissions = computed(() => getResourcePermissions(props.scopes).workflow);
    const workflowMenuItems = computed(() => {
      const actions = [
        {
          id: WORKFLOW_MENU_ACTIONS.DOWNLOAD,
          label: locale.baseText("menuActions.download"),
          disabled: !onWorkflowPage.value
        }
      ];
      if (workflowPermissions.value.move && projectsStore.isTeamProjectFeatureEnabled) {
        actions.push({
          id: WORKFLOW_MENU_ACTIONS.CHANGE_OWNER,
          label: locale.baseText("workflows.item.changeOwner"),
          disabled: isNewWorkflow.value
        });
      }
      if (!props.readOnly && !props.isArchived) {
        actions.push({
          id: WORKFLOW_MENU_ACTIONS.RENAME,
          label: locale.baseText("generic.rename"),
          disabled: !onWorkflowPage.value || workflowPermissions.value.update !== true
        });
      }
      if (workflowPermissions.value.delete === true && !props.readOnly && !props.isArchived || isNewWorkflow.value) {
        actions.unshift({
          id: WORKFLOW_MENU_ACTIONS.DUPLICATE,
          label: locale.baseText("menuActions.duplicate"),
          disabled: !onWorkflowPage.value || !props.id
        });
        actions.push(
          {
            id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL,
            label: locale.baseText("menuActions.importFromUrl"),
            disabled: !onWorkflowPage.value || onExecutionsTab.value
          },
          {
            id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE,
            label: locale.baseText("menuActions.importFromFile"),
            disabled: !onWorkflowPage.value || onExecutionsTab.value
          }
        );
      }
      if (hasPermission(["rbac"], { rbac: { scope: "sourceControl:push" } })) {
        actions.push({
          id: WORKFLOW_MENU_ACTIONS.PUSH,
          label: locale.baseText("menuActions.push"),
          disabled: !sourceControlStore.isEnterpriseSourceControlEnabled || !onWorkflowPage.value || onExecutionsTab.value || sourceControlStore.preferences.branchReadOnly
        });
      }
      actions.push({
        id: WORKFLOW_MENU_ACTIONS.SETTINGS,
        label: locale.baseText("generic.settings"),
        disabled: !onWorkflowPage.value || isNewWorkflow.value
      });
      if (workflowPermissions.value.delete === true && !props.readOnly || isNewWorkflow.value) {
        if (props.isArchived) {
          actions.push({
            id: WORKFLOW_MENU_ACTIONS.UNARCHIVE,
            label: locale.baseText("menuActions.unarchive"),
            disabled: !onWorkflowPage.value || isNewWorkflow.value
          });
          actions.push({
            id: WORKFLOW_MENU_ACTIONS.DELETE,
            label: locale.baseText("menuActions.delete"),
            disabled: !onWorkflowPage.value || isNewWorkflow.value,
            customClass: $style.deleteItem,
            divided: true
          });
        } else {
          actions.push({
            id: WORKFLOW_MENU_ACTIONS.ARCHIVE,
            label: locale.baseText("menuActions.archive"),
            disabled: !onWorkflowPage.value || isNewWorkflow.value,
            customClass: $style.deleteItem,
            divided: true
          });
        }
      }
      return actions;
    });
    const isWorkflowHistoryFeatureEnabled = computed(() => {
      return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.WorkflowHistory];
    });
    const workflowTagIds = computed(() => {
      return (props.tags ?? []).map((tag) => typeof tag === "string" ? tag : tag.id);
    });
    const currentProjectName = computed(() => {
      if (projectsStore.currentProject?.type === ProjectTypes.Personal) {
        return locale.baseText("projects.menu.personal");
      }
      return projectsStore.currentProject?.name;
    });
    const currentFolderForBreadcrumbs = computed(() => {
      if (!isNewWorkflow.value && props.currentFolder) {
        return props.currentFolder;
      }
      const folderId = route.query.parentFolderId;
      if (folderId) {
        return foldersStore.getCachedFolder(folderId);
      }
      return null;
    });
    watch(
      () => props.id,
      () => {
        isTagsEditEnabled.value = false;
        renameInput.value?.forceCancel();
      }
    );
    function getWorkflowId() {
      let id = void 0;
      if (props.id !== PLACEHOLDER_EMPTY_WORKFLOW_ID) {
        id = props.id;
      } else if (route.params.name && route.params.name !== "new") {
        id = route.params.name;
      }
      return id;
    }
    async function onSaveButtonClick() {
      if (isWorkflowSaving.value) {
        return;
      }
      const id = getWorkflowId();
      const name = props.name;
      const tags = props.tags;
      const saved = await workflowSaving.saveCurrentWorkflow({
        id,
        name,
        tags
      });
      if (saved) {
        showCreateWorkflowSuccessToast(id);
        await npsSurveyStore.fetchPromptsData();
        if (route.name === VIEWS.EXECUTION_DEBUG) {
          await router.replace({
            name: VIEWS.WORKFLOW,
            params: { name: props.id }
          });
        }
      }
    }
    function onShareButtonClick() {
      uiStore.openModalWithData({
        name: WORKFLOW_SHARE_MODAL_KEY,
        data: { id: props.id }
      });
      telemetry.track("User opened sharing modal", {
        workflow_id: props.id,
        user_id_sharer: usersStore.currentUser?.id,
        sub_view: route.name === VIEWS.WORKFLOWS ? "Workflows listing" : "Workflow editor"
      });
    }
    function onTagsEditEnable() {
      appliedTagIds.value = props.tags ?? [];
      isTagsEditEnabled.value = true;
      setTimeout(() => {
        renameInput.value?.forceCancel();
        tagsEventBus.emit("focus");
      }, 0);
    }
    async function onTagsBlur() {
      const current = props.tags ?? [];
      const tags = appliedTagIds.value;
      if (!hasChanged(current, tags)) {
        isTagsEditEnabled.value = false;
        return;
      }
      if (tagsSaving.value) {
        return;
      }
      tagsSaving.value = true;
      const saved = await workflowSaving.saveCurrentWorkflow({ tags });
      telemetry.track("User edited workflow tags", {
        workflow_id: props.id,
        new_tag_count: tags.length
      });
      tagsSaving.value = false;
      if (saved) {
        isTagsEditEnabled.value = false;
      }
    }
    function onTagsEditEsc() {
      isTagsEditEnabled.value = false;
    }
    const renameInput = useTemplateRef("renameInput");
    function onNameToggle() {
      if (renameInput.value?.forceFocus) {
        renameInput.value.forceFocus();
      }
    }
    async function onNameSubmit(name) {
      const newName = name.trim();
      if (!newName) {
        toast.showMessage({
          title: locale.baseText("renameAction.emptyName.title"),
          message: locale.baseText("renameAction.emptyName.message"),
          type: "error"
        });
        renameInput.value?.forceCancel();
        return;
      }
      if (newName === props.name) {
        renameInput.value?.forceCancel();
        return;
      }
      uiStore.addActiveAction("workflowSaving");
      const id = getWorkflowId();
      const saved = await workflowSaving.saveCurrentWorkflow({ name });
      if (saved) {
        showCreateWorkflowSuccessToast(id);
        workflowHelpers.setDocumentTitle(newName, "IDLE");
      }
      uiStore.removeActiveAction("workflowSaving");
      renameInput.value?.forceCancel();
    }
    async function handleFileImport() {
      const inputRef = importFileRef.value;
      if (inputRef?.files && inputRef.files.length !== 0) {
        const reader = new FileReader();
        reader.onload = () => {
          let workflowData;
          try {
            workflowData = JSON.parse(reader.result);
          } catch (error) {
            toast.showMessage({
              title: locale.baseText("mainSidebar.showMessage.handleFileImport.title"),
              message: locale.baseText("mainSidebar.showMessage.handleFileImport.message"),
              type: "error"
            });
            return;
          } finally {
            reader.onload = null;
            inputRef.value = "";
          }
          nodeViewEventBus.emit("importWorkflowData", { data: workflowData });
        };
        reader.readAsText(inputRef.files[0]);
      }
    }
    async function onWorkflowMenuSelect(value) {
      const action = value;
      switch (action) {
        case WORKFLOW_MENU_ACTIONS.DUPLICATE: {
          uiStore.openModalWithData({
            name: DUPLICATE_MODAL_KEY,
            data: {
              id: props.id,
              name: props.name,
              tags: props.tags,
              parentFolderId: props.currentFolder?.id
            }
          });
          break;
        }
        case WORKFLOW_MENU_ACTIONS.RENAME: {
          onNameToggle();
          break;
        }
        case WORKFLOW_MENU_ACTIONS.DOWNLOAD: {
          const workflowData = await workflowHelpers.getWorkflowDataToSave();
          const { tags, ...data } = workflowData;
          const exportData = {
            ...data,
            meta: {
              ...props.meta,
              instanceId: rootStore.instanceId
            },
            tags: (tags ?? []).map((tagId) => {
              const { usageCount, ...tag } = tagsStore.tagsById[tagId];
              return tag;
            })
          };
          const blob = new Blob([JSON.stringify(exportData, null, 2)], {
            type: "application/json;charset=utf-8"
          });
          let name = props.name || "unsaved_workflow";
          name = sanitizeFilename(name);
          telemetry.track("User exported workflow", { workflow_id: workflowData.id });
          FileSaver_minExports.saveAs(blob, name + ".json");
          break;
        }
        case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL: {
          uiStore.openModal(IMPORT_WORKFLOW_URL_MODAL_KEY);
          break;
        }
        case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE: {
          importFileRef.value?.click();
          break;
        }
        case WORKFLOW_MENU_ACTIONS.PUSH: {
          canvasStore.startLoading();
          try {
            await onSaveButtonClick();
            const status = await sourceControlStore.getAggregatedStatus();
            uiStore.openModalWithData({
              name: SOURCE_CONTROL_PUSH_MODAL_KEY,
              data: { eventBus: sourceControlModalEventBus, status }
            });
          } catch (error) {
            switch (error.message) {
              case "source_control_not_connected":
                toast.showError(
                  { ...error, message: "" },
                  locale.baseText("settings.sourceControl.error.not.connected.title"),
                  locale.baseText("settings.sourceControl.error.not.connected.message")
                );
                break;
              default:
                toast.showError(error, locale.baseText("error"));
            }
          } finally {
            canvasStore.stopLoading();
          }
          break;
        }
        case WORKFLOW_MENU_ACTIONS.SETTINGS: {
          uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
          break;
        }
        case WORKFLOW_MENU_ACTIONS.ARCHIVE: {
          if (props.active) {
            const archiveConfirmed = await message.confirm(
              locale.baseText("mainSidebar.confirmMessage.workflowArchive.message", {
                interpolate: { workflowName: props.name }
              }),
              locale.baseText("mainSidebar.confirmMessage.workflowArchive.headline"),
              {
                type: "warning",
                confirmButtonText: locale.baseText(
                  "mainSidebar.confirmMessage.workflowArchive.confirmButtonText"
                ),
                cancelButtonText: locale.baseText(
                  "mainSidebar.confirmMessage.workflowArchive.cancelButtonText"
                )
              }
            );
            if (archiveConfirmed !== MODAL_CONFIRM) {
              return;
            }
          }
          try {
            await workflowsStore.archiveWorkflow(props.id);
          } catch (error) {
            toast.showError(error, locale.baseText("generic.archiveWorkflowError"));
            return;
          }
          uiStore.stateIsDirty = false;
          toast.showMessage({
            title: locale.baseText("mainSidebar.showMessage.handleArchive.title", {
              interpolate: { workflowName: props.name }
            }),
            type: "success"
          });
          await router.push({ name: VIEWS.WORKFLOWS });
          break;
        }
        case WORKFLOW_MENU_ACTIONS.UNARCHIVE: {
          await workflowsStore.unarchiveWorkflow(props.id);
          toast.showMessage({
            title: locale.baseText("mainSidebar.showMessage.handleUnarchive.title", {
              interpolate: { workflowName: props.name }
            }),
            type: "success"
          });
          break;
        }
        case WORKFLOW_MENU_ACTIONS.DELETE: {
          const deleteConfirmed = await message.confirm(
            locale.baseText("mainSidebar.confirmMessage.workflowDelete.message", {
              interpolate: { workflowName: props.name }
            }),
            locale.baseText("mainSidebar.confirmMessage.workflowDelete.headline"),
            {
              type: "warning",
              confirmButtonText: locale.baseText(
                "mainSidebar.confirmMessage.workflowDelete.confirmButtonText"
              ),
              cancelButtonText: locale.baseText(
                "mainSidebar.confirmMessage.workflowDelete.cancelButtonText"
              )
            }
          );
          if (deleteConfirmed !== MODAL_CONFIRM) {
            return;
          }
          try {
            await workflowsStore.deleteWorkflow(props.id);
          } catch (error) {
            toast.showError(error, locale.baseText("generic.deleteWorkflowError"));
            return;
          }
          uiStore.stateIsDirty = false;
          documentTitle.reset();
          toast.showMessage({
            title: locale.baseText("mainSidebar.showMessage.handleSelect1.title", {
              interpolate: { workflowName: props.name }
            }),
            type: "success"
          });
          await router.push({ name: VIEWS.WORKFLOWS });
          break;
        }
        case WORKFLOW_MENU_ACTIONS.CHANGE_OWNER: {
          const workflowId = getWorkflowId();
          if (!workflowId) {
            return;
          }
          changeOwnerEventBus.once(
            "resource-moved",
            async () => await router.push({ name: VIEWS.WORKFLOWS })
          );
          uiStore.openModalWithData({
            name: PROJECT_MOVE_RESOURCE_MODAL,
            data: {
              resource: workflowsStore.workflowsById[workflowId],
              resourceType: ResourceType.Workflow,
              resourceTypeLabel: locale.baseText("generic.workflow").toLowerCase(),
              eventBus: changeOwnerEventBus
            }
          });
          break;
        }
      }
    }
    function goToUpgrade() {
      void pageRedirectionHelper.goToUpgrade("workflow_sharing", "upgrade-workflow-sharing");
    }
    function goToWorkflowHistoryUpgrade() {
      void pageRedirectionHelper.goToUpgrade("workflow-history", "upgrade-workflow-history");
    }
    function showCreateWorkflowSuccessToast(id) {
      if (!id || ["new", PLACEHOLDER_EMPTY_WORKFLOW_ID].includes(id)) {
        let toastTitle = locale.baseText("workflows.create.personal.toast.title");
        let toastText = locale.baseText("workflows.create.personal.toast.text");
        if (projectsStore.currentProject) {
          if (props.currentFolder) {
            toastTitle = locale.baseText("workflows.create.folder.toast.title", {
              interpolate: {
                projectName: currentProjectName.value ?? "",
                folderName: props.currentFolder.name ?? ""
              }
            });
          } else if (projectsStore.currentProject.id !== projectsStore.personalProject?.id) {
            toastTitle = locale.baseText("workflows.create.project.toast.title", {
              interpolate: { projectName: currentProjectName.value ?? "" }
            });
          }
          toastText = locale.baseText("workflows.create.project.toast.text", {
            interpolate: { projectName: currentProjectName.value ?? "" }
          });
        }
        toast.showMessage({
          title: toastTitle,
          message: toastText,
          type: "success"
        });
      }
    }
    const onBreadcrumbsItemSelected = (item) => {
      if (item.href) {
        void router.push(item.href).catch((error) => {
          toast.showError(error, i18n.baseText("folders.open.error.title"));
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_FolderBreadcrumbs = __unplugin_components_0;
      const _component_N8nBadge = N8nBadge;
      const _component_N8nButton = N8nButton;
      const _component_N8nTooltip = N8nTooltip;
      const _component_EnterpriseEdition = resolveComponent("EnterpriseEdition");
      const _component_N8nActionDropdown = N8nActionDropdown;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref($style).container)
      }, [
        createVNode(_sfc_main$5, {
          "value-x-s": 15,
          "value-s-m": 25,
          "value-m-d": 50,
          class: "name-container",
          "data-test-id": "canvas-breadcrumbs"
        }, {
          default: withCtx(({ bp }) => [
            createVNode(_component_FolderBreadcrumbs, {
              "current-folder": currentFolderForBreadcrumbs.value,
              "current-folder-as-link": true,
              onItemSelected: onBreadcrumbsItemSelected
            }, {
              append: withCtx(() => [
                unref(projectsStore).currentProject ?? unref(projectsStore).personalProject ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(unref($style)["path-separator"])
                }, "/", 2)) : createCommentVNode("", true),
                (openBlock(), createBlock(unref(InlineRename), {
                  ref_key: "renameInput",
                  ref: renameInput,
                  key: _ctx.id,
                  placeholder: "Workflow name",
                  "data-test-id": "workflow-name-input",
                  class: "name",
                  "model-value": _ctx.name,
                  "max-length": unref(MAX_WORKFLOW_NAME_LENGTH),
                  "max-width": ["XS", "SM"].includes(bp) ? WORKFLOW_NAME_MAX_WIDTH_SMALL_SCREENS : WORKFLOW_NAME_MAX_WIDTH_WIDE_SCREENS,
                  "read-only": _ctx.readOnly || _ctx.isArchived || !isNewWorkflow.value && !workflowPermissions.value.update,
                  disabled: _ctx.readOnly || _ctx.isArchived || !isNewWorkflow.value && !workflowPermissions.value.update,
                  "onUpdate:modelValue": onNameSubmit
                }, null, 8, ["model-value", "max-length", "max-width", "read-only", "disabled"]))
              ]),
              _: 2
            }, 1032, ["current-folder"])
          ]),
          _: 1
        }),
        createBaseVNode("span", _hoisted_1, [
          unref(settingsStore).areTagsEnabled ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            isTagsEditEnabled.value && !(_ctx.readOnly || _ctx.isArchived) && (isNewWorkflow.value || workflowPermissions.value.update) ? (openBlock(), createBlock(_sfc_main$e, {
              key: 0,
              ref: "dropdown",
              modelValue: appliedTagIds.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appliedTagIds.value = $event),
              "event-bus": unref(tagsEventBus),
              placeholder: unref(i18n).baseText("workflowDetails.chooseOrCreateATag"),
              class: "tags-edit",
              "data-test-id": "workflow-tags-dropdown",
              onBlur: onTagsBlur,
              onEsc: onTagsEditEsc
            }, null, 8, ["modelValue", "event-bus", "placeholder"])) : (_ctx.tags ?? []).length === 0 && !(_ctx.readOnly || _ctx.isArchived) && (isNewWorkflow.value || workflowPermissions.value.update) ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("span", {
                class: "add-tag clickable",
                "data-test-id": "new-tag-link",
                onClick: onTagsEditEnable
              }, " + " + toDisplayString(unref(i18n).baseText("workflowDetails.addTag")), 1)
            ])) : (openBlock(), createBlock(_sfc_main$6, {
              key: _ctx.id,
              "tag-ids": workflowTagIds.value,
              clickable: true,
              responsive: true,
              "data-test-id": "workflow-tags",
              onClick: onTagsEditEnable
            }, null, 8, ["tag-ids"]))
          ], 64)) : createCommentVNode("", true),
          createBaseVNode("span", _hoisted_3, [
            _ctx.isArchived ? (openBlock(), createBlock(_component_N8nBadge, {
              key: 0,
              class: "ml-3xs",
              theme: "tertiary",
              bold: "",
              "data-test-id": "workflow-archived-tag"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.archived")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])
        ]),
        createVNode(_sfc_main$f, { class: "actions" }, {
          default: withCtx(() => [
            !isNewWorkflow.value ? (openBlock(), createBlock(_sfc_main$2, {
              key: 0,
              workflow: unref(workflowsStore).workflow
            }, null, 8, ["workflow"])) : createCommentVNode("", true),
            createBaseVNode("span", {
              class: normalizeClass(`activator ${unref($style).group}`)
            }, [
              createVNode(WorkflowActivator, {
                "is-archived": _ctx.isArchived,
                "workflow-active": _ctx.active,
                "workflow-id": _ctx.id,
                "workflow-permissions": workflowPermissions.value
              }, null, 8, ["is-archived", "workflow-active", "workflow-id", "workflow-permissions"])
            ], 2),
            createVNode(_component_EnterpriseEdition, {
              features: [unref(EnterpriseEditionFeature).Sharing]
            }, {
              fallback: withCtx(() => [
                createVNode(_component_N8nTooltip, null, {
                  content: withCtx(() => [
                    createVNode(unref(I18nT), {
                      keypath: unref(uiStore).contextBasedTranslationKeys.workflows.sharing.unavailable.description.tooltip,
                      tag: "span",
                      scope: "global"
                    }, {
                      action: withCtx(() => [
                        createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText(
                          unref(uiStore).contextBasedTranslationKeys.workflows.sharing.unavailable.button
                        )), 1)
                      ]),
                      _: 1
                    }, 8, ["keypath"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_N8nButton, {
                      type: "secondary",
                      class: normalizeClass(["mr-2xs", unref($style).disabledShareButton])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("workflowDetails.share")), 1)
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(unref($style).group)
                }, [
                  !isNewWorkflow.value ? (openBlock(), createBlock(CollaborationPane, { key: 0 })) : createCommentVNode("", true),
                  createVNode(_component_N8nButton, {
                    type: "secondary",
                    "data-test-id": "workflow-share-button",
                    onClick: onShareButtonClick
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("workflowDetails.share")), 1)
                    ]),
                    _: 1
                  })
                ], 2)
              ]),
              _: 1
            }, 8, ["features"]),
            createBaseVNode("div", {
              class: normalizeClass(unref($style).group)
            }, [
              createVNode(SaveButton, {
                type: "primary",
                saved: !unref(uiStore).stateIsDirty && !isNewWorkflow.value,
                disabled: isWorkflowSaving.value || _ctx.readOnly || _ctx.isArchived || !isNewWorkflow.value && !workflowPermissions.value.update,
                "is-saving": isWorkflowSaving.value,
                "with-shortcut": !_ctx.readOnly && !_ctx.isArchived && workflowPermissions.value.update,
                "shortcut-tooltip": unref(i18n).baseText("saveWorkflowButton.hint"),
                "data-test-id": "workflow-save-button",
                onClick: onSaveButtonClick
              }, null, 8, ["saved", "disabled", "is-saving", "with-shortcut", "shortcut-tooltip"]),
              createVNode(_sfc_main$4, {
                "workflow-id": props.id,
                "is-feature-enabled": isWorkflowHistoryFeatureEnabled.value,
                "is-new-workflow": isNewWorkflow.value,
                onUpgrade: goToWorkflowHistoryUpgrade
              }, null, 8, ["workflow-id", "is-feature-enabled", "is-new-workflow"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([unref($style).workflowMenuContainer, unref($style).group])
            }, [
              createBaseVNode("input", {
                ref_key: "importFileRef",
                ref: importFileRef,
                class: normalizeClass(unref($style).hiddenInput),
                type: "file",
                "data-test-id": "workflow-import-input",
                onChange: _cache[1] || (_cache[1] = ($event) => handleFileImport())
              }, null, 34),
              createVNode(_component_N8nActionDropdown, {
                items: workflowMenuItems.value,
                "data-test-id": "workflow-menu",
                onSelect: onWorkflowMenuSelect
              }, null, 8, ["items"])
            ], 2)
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const container$1 = "_container_14b3x_123";
const group = "_group_14b3x_138";
const hiddenInput = "_hiddenInput_14b3x_143";
const deleteItem = "_deleteItem_14b3x_147";
const disabledShareButton = "_disabledShareButton_14b3x_151";
const closeNodeViewDiscovery = "_closeNodeViewDiscovery_14b3x_155";
const style1 = {
  container: container$1,
  "path-separator": "_path-separator_14b3x_132",
  group,
  hiddenInput,
  deleteItem,
  disabledShareButton,
  closeNodeViewDiscovery
};
const cssModules$1 = {
  "$style": style1
};
const WorkflowDetails = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1], ["__scopeId", "data-v-9c3251f0"]]);
const GithubButton = defineComponent({
  name: "github-button",
  props: {
    href: String,
    ariaLabel: String,
    title: String,
    dataIcon: String,
    dataColorScheme: String,
    dataSize: String,
    dataShowCount: String,
    dataText: String
  },
  render: function() {
    const props = { ref: "_" };
    for (const key in this.$props) {
      props[hyphenate(key)] = this.$props[key];
    }
    return h("span", [
      hasOwn(this.$slots, "default") ? h("a", props, this.$slots.default()) : h("a", props)
    ]);
  },
  mounted: function() {
    this.paint();
  },
  beforeUpdate: function() {
    this.reset();
  },
  updated: function() {
    this.paint();
  },
  beforeUnmount: function() {
    this.reset();
  },
  methods: {
    paint: function() {
      if (this.$el.lastChild !== this.$refs._) {
        return;
      }
      const _ = this.$el.appendChild(document.createElement("span"));
      const _this = this;
      __vitePreload(() => import(
        /* webpackMode: "eager" */
        "./buttons.esm-BOkmSohe.js"
      ), true ? [] : void 0).then(function(module) {
        if (_this.$el.lastChild !== _) {
          return;
        }
        module.render(_.appendChild(_this.$refs._), function(el) {
          if (_this.$el.lastChild !== _) {
            return;
          }
          _.parentNode.replaceChild(el, _);
        });
      });
    },
    reset: function() {
      if (this.$refs._ == null) {
        return;
      }
      this.$el.replaceChild(
        /** @type {HTMLAnchorElement} */
        this.$refs._,
        this.$el.lastChild
      );
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainHeader",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const locale = useI18n$1();
    const pushConnection = usePushConnection({ router });
    const ndvStore = useNDVStore();
    const uiStore = useUIStore();
    const sourceControlStore = useSourceControlStore();
    const workflowsStore = useWorkflowsStore();
    const executionsStore = useExecutionsStore();
    const settingsStore = useSettingsStore();
    const activeHeaderTab = ref(MAIN_HEADER_TABS.WORKFLOW);
    const workflowToReturnTo = ref("");
    const executionToReturnTo = ref("");
    const dirtyState = ref(false);
    const githubButtonHidden = useLocalStorage(LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON, false);
    const evaluationRoutes = [VIEWS.EVALUATION_EDIT, VIEWS.EVALUATION_RUNS_DETAIL];
    const workflowRoutes = [VIEWS.WORKFLOW, VIEWS.NEW_WORKFLOW, VIEWS.EXECUTION_DEBUG];
    const executionRoutes = [
      VIEWS.EXECUTION_HOME,
      VIEWS.WORKFLOW_EXECUTIONS,
      VIEWS.EXECUTION_PREVIEW
    ];
    const tabBarItems = computed(() => {
      return [
        { value: MAIN_HEADER_TABS.WORKFLOW, label: locale.baseText("generic.editor") },
        { value: MAIN_HEADER_TABS.EXECUTIONS, label: locale.baseText("generic.executions") },
        { value: MAIN_HEADER_TABS.EVALUATION, label: locale.baseText("generic.tests") }
      ];
    });
    const activeNode = computed(() => ndvStore.activeNode);
    const hideMenuBar = computed(
      () => Boolean(activeNode.value && activeNode.value.type !== STICKY_NODE_TYPE)
    );
    const workflow = computed(() => workflowsStore.workflow);
    const workflowId = computed(
      () => String(router.currentRoute.value.params.name || workflowsStore.workflowId)
    );
    const onWorkflowPage = computed(() => !!(route.meta.nodeView || route.meta.keepWorkflowAlive));
    const readOnly = computed(() => sourceControlStore.preferences.branchReadOnly);
    const isEnterprise = computed(
      () => settingsStore.isQueueModeEnabled && settingsStore.isWorkerViewAvailable
    );
    const isTelemetryEnabled = computed(() => {
      return settingsStore.isTelemetryEnabled;
    });
    const showGitHubButton = computed(
      () => !isEnterprise.value && !settingsStore.settings.inE2ETests && !githubButtonHidden.value && isTelemetryEnabled.value
    );
    const parentFolderForBreadcrumbs = computed(() => {
      if (!workflow.value.parentFolder) {
        return void 0;
      }
      return {
        id: workflow.value.parentFolder.id,
        name: workflow.value.parentFolder.name,
        parentFolder: workflow.value.parentFolder.parentFolderId ?? void 0
      };
    });
    watch(route, (to, from) => {
      syncTabsWithRoute(to, from);
    });
    onBeforeMount(() => {
      pushConnection.initialize();
    });
    onBeforeUnmount(() => {
      pushConnection.terminate();
    });
    onMounted(async () => {
      dirtyState.value = uiStore.stateIsDirty;
      syncTabsWithRoute(route);
    });
    function isViewRoute(name) {
      return typeof name === "string" && [evaluationRoutes, workflowRoutes, executionRoutes].flat().includes(name);
    }
    function syncTabsWithRoute(to, from) {
      const routeTabMapping = [
        { routes: evaluationRoutes, tab: MAIN_HEADER_TABS.EVALUATION },
        { routes: executionRoutes, tab: MAIN_HEADER_TABS.EXECUTIONS },
        { routes: workflowRoutes, tab: MAIN_HEADER_TABS.WORKFLOW }
      ];
      if (to.name && isViewRoute(to.name)) {
        const matchingTab = routeTabMapping.find(({ routes }) => routes.includes(to.name));
        if (matchingTab) {
          activeHeaderTab.value = matchingTab.tab;
        }
      }
      if (to.params.name !== "new" && typeof to.params.name === "string") {
        workflowToReturnTo.value = to.params.name;
      }
      if (from?.name === VIEWS.EXECUTION_PREVIEW && to.params.name === from.params.name && typeof from.params.executionId === "string") {
        executionToReturnTo.value = from.params.executionId;
      }
    }
    function onTabSelected(tab, event) {
      const openInNewTab = event.ctrlKey || event.metaKey;
      switch (tab) {
        case MAIN_HEADER_TABS.WORKFLOW:
          void navigateToWorkflowView(openInNewTab);
          break;
        case MAIN_HEADER_TABS.EXECUTIONS:
          void navigateToExecutionsView(openInNewTab);
          break;
        case MAIN_HEADER_TABS.EVALUATION:
          void navigateToEvaluationsView(openInNewTab);
          break;
      }
    }
    async function navigateToWorkflowView(openInNewTab) {
      let routeToNavigateTo;
      if (!["", "new", PLACEHOLDER_EMPTY_WORKFLOW_ID].includes(workflowToReturnTo.value)) {
        routeToNavigateTo = {
          name: VIEWS.WORKFLOW,
          params: { name: workflowToReturnTo.value }
        };
      } else {
        routeToNavigateTo = { name: VIEWS.NEW_WORKFLOW };
      }
      if (openInNewTab) {
        const { href } = router.resolve(routeToNavigateTo);
        window.open(href, "_blank");
      } else if (route.name !== routeToNavigateTo.name) {
        if (route.name === VIEWS.NEW_WORKFLOW) {
          uiStore.stateIsDirty = dirtyState.value;
        }
        activeHeaderTab.value = MAIN_HEADER_TABS.WORKFLOW;
        await router.push(routeToNavigateTo);
      }
    }
    async function navigateToExecutionsView(openInNewTab) {
      const routeWorkflowId = workflowId.value === PLACEHOLDER_EMPTY_WORKFLOW_ID ? "new" : workflowId.value;
      const executionToReturnToValue = executionsStore.activeExecution?.id || executionToReturnTo.value;
      const routeToNavigateTo = executionToReturnToValue ? {
        name: VIEWS.EXECUTION_PREVIEW,
        params: { name: routeWorkflowId, executionId: executionToReturnToValue }
      } : {
        name: VIEWS.EXECUTION_HOME,
        params: { name: routeWorkflowId }
      };
      if (openInNewTab) {
        const { href } = router.resolve(routeToNavigateTo);
        window.open(href, "_blank");
      } else if (route.name !== routeToNavigateTo.name) {
        dirtyState.value = uiStore.stateIsDirty;
        workflowToReturnTo.value = workflowId.value;
        activeHeaderTab.value = MAIN_HEADER_TABS.EXECUTIONS;
        await router.push(routeToNavigateTo);
      }
    }
    async function navigateToEvaluationsView(openInNewTab) {
      const routeWorkflowId = workflowId.value === PLACEHOLDER_EMPTY_WORKFLOW_ID ? "new" : workflowId.value;
      const routeToNavigateTo = {
        name: VIEWS.EVALUATION_EDIT,
        params: { name: routeWorkflowId }
      };
      if (openInNewTab) {
        const { href } = router.resolve(routeToNavigateTo);
        window.open(href, "_blank");
      } else if (route.name !== routeToNavigateTo.name) {
        dirtyState.value = uiStore.stateIsDirty;
        workflowToReturnTo.value = workflowId.value;
        activeHeaderTab.value = MAIN_HEADER_TABS.EXECUTIONS;
        await router.push(routeToNavigateTo);
      }
    }
    function hideGithubButton() {
      githubButtonHidden.value = true;
    }
    return (_ctx, _cache) => {
      const _component_N8nIcon = N8nIcon;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style["main-header"]]: true, [_ctx.$style.expanded]: !unref(uiStore).sidebarMenuCollapsed })
        }, [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(_ctx.$style["top-menu"])
          }, [
            workflow.value?.name ? (openBlock(), createBlock(WorkflowDetails, {
              key: 0,
              id: workflow.value.id,
              tags: workflow.value.tags,
              name: workflow.value.name,
              meta: workflow.value.meta,
              scopes: workflow.value.scopes,
              active: workflow.value.active,
              "read-only": readOnly.value,
              "current-folder": parentFolderForBreadcrumbs.value,
              "is-archived": workflow.value.isArchived
            }, null, 8, ["id", "tags", "name", "meta", "scopes", "active", "read-only", "current-folder", "is-archived"])) : createCommentVNode("", true),
            showGitHubButton.value ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass([_ctx.$style["github-button"], "hidden-sm-and-down"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style["github-button-container"])
              }, [
                createVNode(unref(GithubButton), {
                  href: unref(N8N_MAIN_GITHUB_REPO_URL),
                  "data-color-scheme": unref(uiStore).appliedTheme,
                  "data-size": "large",
                  "data-show-count": "true",
                  "aria-label": unref(locale).baseText("editor.mainHeader.githubButton.label")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("generic.star")), 1)
                  ]),
                  _: 1
                }, 8, ["href", "data-color-scheme", "aria-label"]),
                createVNode(_component_N8nIcon, {
                  class: normalizeClass(_ctx.$style["close-github-button"]),
                  icon: "circle-x",
                  size: "medium",
                  onClick: hideGithubButton
                }, null, 8, ["class"])
              ], 2)
            ], 2)) : createCommentVNode("", true)
          ], 2), [
            [vShow, !hideMenuBar.value]
          ]),
          onWorkflowPage.value ? (openBlock(), createBlock(TabBar, {
            key: 0,
            items: tabBarItems.value,
            "model-value": activeHeaderTab.value,
            "onUpdate:modelValue": onTabSelected
          }, null, 8, ["items", "model-value"])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
const container = "_container_gg3to_123";
const style0 = {
  container,
  "main-header": "_main-header_gg3to_130",
  "top-menu": "_top-menu_gg3to_138",
  "github-button": "_github-button_gg3to_149",
  "close-github-button": "_close-github-button_gg3to_158",
  "github-button-container": "_github-button-container_gg3to_173"
};
const cssModules = {
  "$style": style0
};
const MainHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  MainHeader as default
};

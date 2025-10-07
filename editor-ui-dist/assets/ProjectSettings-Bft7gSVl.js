import { d as defineComponent, r as ref, x as computed, e as createBlock, g as openBlock, bv as createSlots, w as withCtx, Y as renderSlot, h as createElementBlock, F as Fragment, A as renderList, l as unref, eh as _sfc_main$8, n as normalizeClass, i as createVNode, J as N8nUserInfo, K as mergeProps, D as useI18n, eg as N8nSelect, _ as _export_sfc, ep as mergeModels, eq as useModel, bu as onClickOutside, j as createBaseVNode, f as createCommentVNode, aa as Tooltip, ab as _sfc_main$9, q as N8nButton, k as createTextVNode, t as toDisplayString, gr as N8nTabs, N as N8nIcon, c as useI18n$1, a9 as resolveComponent, p as N8nText, fM as ProjectSharing, ed as N8nInputLabel, d6 as N8nInput, B as withModifiers, aB as usePageRedirectionHelper, ac as I18nT, a8 as watch, gE as isProjectRole, gF as ElRadio, aN as N8nActionDropdown, en as N8nActionToggle, er as N8nDataTableServer, c7 as normalizeProps, c8 as guardReactiveProps, u as useUsersStore, av as useProjectsStore, gG as useRolesStore, bc as useCloudPlanStore, a as useToast, b as useRouter, ay as useDocumentTitle, b2 as onBeforeMount, o as onMounted, f5 as N8nFormInput, dX as deepCopy, am as useTelemetry, Z as nextTick, fB as isIconOrEmoji, V as VIEWS, ev as useDebounceFn } from "./index-DgSMGi0-.js";
import { P as ProjectHeader } from "./ProjectHeader-Bk-GU7wm.js";
import "./useProjectPages-DQb5W6L8.js";
import "./readyToRunWorkflowsV2.store-CZFEX1z_.js";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "UserSelect",
  props: {
    users: { default: () => [] },
    modelValue: { default: "" },
    ignoreIds: { default: () => [] },
    currentUserId: { default: "" },
    placeholder: {},
    size: {}
  },
  emits: ["blur", "focus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const filter = ref("");
    const filteredUsers = computed(
      () => props.users.filter((user) => {
        if (props.ignoreIds.includes(user.id)) {
          return false;
        }
        if (user.fullName && user.email) {
          const match = user.fullName.toLowerCase().includes(filter.value.toLowerCase());
          if (match) {
            return true;
          }
        }
        return user.email?.includes(filter.value) ?? false;
      })
    );
    const sortedUsers = computed(
      () => [...filteredUsers.value].sort((a, b) => {
        if (a.lastName && b.lastName && a.lastName !== b.lastName) {
          return a.lastName > b.lastName ? 1 : -1;
        }
        if (a.firstName && b.firstName && a.firstName !== b.firstName) {
          return a.firstName > b.firstName ? 1 : -1;
        }
        if (!a.email || !b.email) {
          throw new Error("Expected all users to have email");
        }
        return a.email > b.email ? 1 : -1;
      })
    );
    const setFilter = (value = "") => {
      filter.value = value;
    };
    const onBlur = () => emit("blur");
    const onFocus = () => emit("focus");
    const getLabel = (user) => (!user.fullName ? user.email : `${user.fullName} (${user.email})`) ?? "";
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nSelect), mergeProps({ "data-test-id": "user-select-trigger" }, _ctx.$attrs, {
        "model-value": _ctx.modelValue,
        filterable: true,
        "filter-method": setFilter,
        placeholder: _ctx.placeholder || unref(t)("nds.userSelect.selectUser"),
        "default-first-option": true,
        teleported: "",
        "popper-class": _ctx.$style.limitPopperWidth,
        "no-data-text": unref(t)("nds.userSelect.noMatchingUsers"),
        size: _ctx.size,
        onBlur,
        onFocus
      }), createSlots({
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(sortedUsers.value, (user) => {
            return openBlock(), createBlock(unref(_sfc_main$8), {
              id: `user-select-option-id-${user.id}`,
              key: user.id,
              value: user.id,
              class: normalizeClass(_ctx.$style.itemContainer),
              label: getLabel(user),
              disabled: user.disabled
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nUserInfo), mergeProps({ ref_for: true }, user, {
                  "is-current-user": _ctx.currentUserId === user.id
                }), null, 16, ["is-current-user"])
              ]),
              _: 2
            }, 1032, ["id", "value", "class", "label", "disabled"]);
          }), 128))
        ]),
        _: 2
      }, [
        _ctx.$slots.prefix ? {
          name: "prefix",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "prefix")
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["model-value", "placeholder", "popper-class", "no-data-text", "size"]);
    };
  }
});
const itemContainer = "_itemContainer_9rnse_123";
const limitPopperWidth = "_limitPopperWidth_9rnse_128";
const style0$4 = {
  itemContainer,
  limitPopperWidth
};
const cssModules$4 = {
  "$style": style0$4
};
const N8nUserSelect = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$4]]);
var cache = /* @__PURE__ */ new Map();
function isEmojiSupported(unicode) {
  if (cache.has(unicode)) {
    return cache.get(unicode);
  }
  var supported = isSupported(unicode);
  cache.set(unicode, supported);
  return supported;
}
var isSupported = (function() {
  var ctx = null;
  try {
    ctx = document.createElement("canvas").getContext("2d");
  } catch (_a) {
  }
  if (!ctx) {
    return function() {
      return false;
    };
  }
  var CANVAS_HEIGHT = 25;
  var CANVAS_WIDTH = 20;
  var textSize = Math.floor(CANVAS_HEIGHT / 2);
  ctx.font = textSize + "px Arial, Sans-Serif";
  ctx.textBaseline = "top";
  ctx.canvas.width = CANVAS_WIDTH * 2;
  ctx.canvas.height = CANVAS_HEIGHT;
  return function(unicode) {
    ctx.clearRect(0, 0, CANVAS_WIDTH * 2, CANVAS_HEIGHT);
    ctx.fillStyle = "#FF0000";
    ctx.fillText(unicode, 0, 22);
    ctx.fillStyle = "#0000FF";
    ctx.fillText(unicode, CANVAS_WIDTH, 22);
    var a = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data;
    var count = a.length;
    var i = 0;
    for (; i < count && !a[i + 3]; i += 4)
      ;
    if (i >= count) {
      return false;
    }
    var x = CANVAS_WIDTH + i / 4 % CANVAS_WIDTH;
    var y = Math.floor(i / 4 / CANVAS_WIDTH);
    var b = ctx.getImageData(x, y, 1, 1).data;
    if (a[i] !== b[0] || a[i + 2] !== b[2]) {
      return false;
    }
    if (ctx.measureText(unicode).width >= CANVAS_WIDTH) {
      return false;
    }
    return true;
  };
})();
const ALL_ICON_PICKER_ICONS = [
  "folder-plus",
  "share",
  "user-check",
  "check-check",
  "circle",
  "eye-off",
  "folder",
  "circle-minus",
  "contrast",
  "refresh-cw",
  "vault",
  "chevrons-left",
  "archive",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "arrow-down",
  "at-sign",
  "ban",
  "scale",
  "menu",
  "zap",
  "book",
  "package-open",
  "bug",
  "brain",
  "calculator",
  "calendar",
  "chart-column-decreasing",
  "check",
  "circle-check",
  "square-check",
  "chevron-left",
  "chevron-right",
  "chevron-down",
  "chevron-up",
  "code",
  "git-branch",
  "cog",
  "message-circle",
  "messages-square",
  "clipboard-list",
  "clock",
  "copy",
  "cloud",
  "cloud-download",
  "files",
  "box",
  "scissors",
  "database",
  "circle-dot",
  "grip-lines-vertical",
  "grip-vertical",
  "square-pen",
  "ellipsis",
  "ellipsis-vertical",
  "mail",
  "equal",
  "eye",
  "triangle-alert",
  "maximize",
  "maximize-2",
  "mcp",
  "external-link",
  "arrow-left-right",
  "file",
  "file-text",
  "file-archive",
  "file-code",
  "file-down",
  "file-output",
  "file-input",
  "file-text",
  "funnel",
  "fingerprint",
  "flask-conical",
  "folder-open",
  "case-upper",
  "gift",
  "globe",
  "earth",
  "graduation-cap",
  "hand-coins",
  "scissors",
  "handshake",
  "arrow-left",
  "hash",
  "hard-drive",
  "history",
  "house",
  "hourglass",
  "image",
  "inbox",
  "info",
  "key-round",
  "languages",
  "layers",
  "link",
  "list",
  "lightbulb",
  "lock",
  "milestone",
  "mouse-pointer",
  "network",
  "palette",
  "pause",
  "circle-pause",
  "pen",
  "pencil",
  "play",
  "circle-play",
  "plug",
  "plus",
  "circle-plus",
  "square-plus",
  "waypoints",
  "circle-help",
  "circle-help",
  "redo-2",
  "remove-formatting",
  "bot",
  "rss",
  "save",
  "satellite-dish",
  "search",
  "zoom-out",
  "zoom-in",
  "server",
  "pocket-knife",
  "smile",
  "log-in",
  "log-out",
  "sliders-horizontal",
  "sticky-note",
  "square",
  "align-right",
  "sun",
  "refresh-cw",
  "table",
  "tags",
  "list-checks",
  "terminal",
  "grid-2x2",
  "pin",
  "thumbs-down",
  "thumbs-up",
  "x",
  "circle-x",
  "wrench",
  "trash-2",
  "undo-2",
  "unlink",
  "user",
  "circle-user-round",
  "user-round",
  "users",
  "video",
  "tree-pine",
  "user-lock",
  "gem",
  "hard-drive-download",
  "power",
  "send",
  "bell",
  "variable",
  "pop-out",
  "triangle",
  "status-completed",
  "status-waiting",
  "status-error",
  "status-canceled",
  "status-new",
  "status-unknown",
  "status-warning",
  "vector-square",
  "schema",
  "json",
  "binary",
  "text",
  "toolbox",
  "spinner"
];
const _hoisted_1$5 = ["aria-expanded"];
const _hoisted_2$2 = ["onClick"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nIconPicker" },
  __name: "IconPicker",
  props: /* @__PURE__ */ mergeModels({
    buttonTooltip: {},
    buttonSize: { default: "large" }
  }, {
    "modelValue": { default: { type: "icon", value: "smile" } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const emojiRanges = [
      [128512, 128591],
      // Emoticons
      [127744, 128511],
      // Symbols & Pictographs
      [128640, 128767],
      // Transport & Map Symbols
      [9728, 9983],
      // Miscellaneous Symbols
      [9984, 10175],
      // Dingbats
      [129280, 129535],
      // Supplemental Symbols
      [127462, 127487],
      // Regional Indicator Symbols
      [128e3, 128255]
      // Additional pictographs
    ];
    const { t } = useI18n();
    const props = __props;
    const model = useModel(__props, "modelValue");
    const emojis = computed(() => {
      const emojisArray = [];
      emojiRanges.forEach(([start, end]) => {
        for (let i = start; i <= end; i++) {
          const emoji2 = String.fromCodePoint(i);
          if (isEmojiSupported(emoji2)) {
            emojisArray.push(emoji2);
          }
        }
      });
      return emojisArray;
    });
    const popupVisible = ref(false);
    const tabs2 = [
      { value: "icons", label: t("iconPicker.tabs.icons") },
      { value: "emojis", label: t("iconPicker.tabs.emojis") }
    ];
    const selectedTab = ref(tabs2[0].value);
    const container2 = ref();
    onClickOutside(container2, () => {
      popupVisible.value = false;
    });
    const selectIcon = (value) => {
      model.value = value;
      popupVisible.value = false;
    };
    const togglePopup = () => {
      popupVisible.value = !popupVisible.value;
      if (popupVisible.value) {
        selectedTab.value = tabs2[0].value;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container2,
        class: normalizeClass(_ctx.$style.container),
        "aria-expanded": popupVisible.value,
        role: "button",
        "aria-haspopup": "true"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style["icon-picker-button"])
        }, [
          createVNode(unref(Tooltip), {
            placement: "right",
            "data-test-id": "icon-picker-tooltip"
          }, {
            content: withCtx(() => [
              createTextVNode(toDisplayString(props.buttonTooltip ?? unref(t)("iconPicker.button.defaultToolTip")), 1)
            ]),
            default: withCtx(() => [
              model.value.type === "icon" ? (openBlock(), createBlock(unref(_sfc_main$9), {
                key: 0,
                class: normalizeClass(_ctx.$style["icon-button"]),
                icon: model.value.value,
                size: _ctx.buttonSize,
                square: true,
                type: "tertiary",
                "data-test-id": "icon-picker-button",
                onClick: togglePopup
              }, null, 8, ["class", "icon", "size"])) : model.value.type === "emoji" ? (openBlock(), createBlock(unref(N8nButton), {
                key: 1,
                class: normalizeClass(_ctx.$style["emoji-button"]),
                size: _ctx.buttonSize,
                square: true,
                type: "tertiary",
                "data-test-id": "icon-picker-button",
                onClick: togglePopup
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(model.value.value), 1)
                ]),
                _: 1
              }, 8, ["class", "size"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 2),
        popupVisible.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.popup),
          "data-test-id": "icon-picker-popup"
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.tabs)
          }, [
            createVNode(unref(N8nTabs), {
              modelValue: selectedTab.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTab.value = $event),
              options: tabs2,
              "data-test-id": "icon-picker-tabs"
            }, null, 8, ["modelValue"])
          ], 2),
          selectedTab.value === "icons" ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.content)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(ALL_ICON_PICKER_ICONS), (icon2) => {
              return openBlock(), createBlock(unref(N8nIcon), {
                key: icon2,
                icon: icon2,
                class: normalizeClass(_ctx.$style.icon),
                size: 24,
                "data-test-id": "icon-picker-icon",
                onClick: ($event) => selectIcon({ type: "icon", value: icon2 })
              }, null, 8, ["icon", "class", "onClick"]);
            }), 128))
          ], 2)) : createCommentVNode("", true),
          selectedTab.value === "emojis" ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.content)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(emojis.value, (emoji2) => {
              return openBlock(), createElementBlock("span", {
                key: emoji2,
                class: normalizeClass(_ctx.$style.emoji),
                "data-test-id": "icon-picker-emoji",
                onClick: ($event) => selectIcon({ type: "emoji", value: emoji2 })
              }, toDisplayString(emoji2), 11, _hoisted_2$2);
            }), 128))
          ], 2)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ], 10, _hoisted_1$5);
    };
  }
});
const container = "_container_15yfs_123";
const popup = "_popup_15yfs_131";
const tabs = "_tabs_15yfs_144";
const content = "_content_15yfs_148";
const icon = "_icon_15yfs_154";
const emoji = "_emoji_15yfs_127";
const style0$3 = {
  container,
  "emoji-button": "_emoji-button_15yfs_127",
  popup,
  tabs,
  content,
  icon,
  emoji
};
const cssModules$3 = {
  "$style": style0$3
};
const IconPicker = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$3]]);
const _hoisted_1$4 = { key: 1 };
const _hoisted_2$1 = { class: "pt-l" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ProjectDeleteDialog",
  props: /* @__PURE__ */ mergeModels({
    currentProject: {},
    projects: {},
    resourceCounts: {}
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["confirmDelete"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const visible = useModel(__props, "modelValue");
    const emit = __emit;
    const locale = useI18n$1();
    const selectedProject = ref(null);
    const operation2 = ref(null);
    const wipeConfirmText = ref("");
    const hasMovableResources = computed(
      () => props.resourceCounts.credentials + props.resourceCounts.workflows + props.resourceCounts.dataTables > 0
    );
    const isValid = computed(() => {
      const expectedWipeConfirmation = locale.baseText(
        "projects.settings.delete.question.wipe.placeholder"
      );
      return !hasMovableResources.value || operation2.value === "transfer" && !!selectedProject.value || operation2.value === "wipe" && wipeConfirmText.value === expectedWipeConfirmation;
    });
    const onDelete = () => {
      if (!isValid.value) {
        return;
      }
      if (operation2.value === "wipe") {
        selectedProject.value = null;
      }
      emit("confirmDelete", selectedProject.value?.id);
    };
    return (_ctx, _cache) => {
      const _component_N8nText = N8nText;
      const _component_ElRadio = resolveComponent("ElRadio");
      const _component_N8nInput = N8nInput;
      const _component_N8nInputLabel = N8nInputLabel;
      const _component_N8nButton = N8nButton;
      const _component_ElDialog = resolveComponent("ElDialog");
      return openBlock(), createBlock(_component_ElDialog, {
        modelValue: visible.value,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => visible.value = $event),
        title: unref(locale).baseText("projects.settings.delete.title", {
          interpolate: { projectName: props.currentProject?.name ?? "" }
        }),
        width: "650"
      }, {
        footer: withCtx(() => [
          createVNode(_component_N8nButton, {
            type: "danger",
            "native-type": "button",
            disabled: !isValid.value,
            "data-test-id": "project-settings-delete-confirm-button",
            onClick: withModifiers(onDelete, ["stop", "prevent"])
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.danger.deleteProject")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        default: withCtx(() => [
          !hasMovableResources.value ? (openBlock(), createBlock(_component_N8nText, {
            key: 0,
            color: "text-base"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message.empty")), 1)
            ]),
            _: 1
          })) : hasMovableResources.value ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
            createVNode(_component_N8nText, { color: "text-base" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_ElRadio, {
                "model-value": operation2.value,
                label: "transfer",
                class: "mb-s",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => operation2.value = "transfer")
              }, {
                default: withCtx(() => [
                  createVNode(_component_N8nText, { color: "text-dark" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model-value"]),
              operation2.value === "transfer" ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.operation)
              }, [
                createVNode(_component_N8nText, { color: "text-dark" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(ProjectSharing, {
                  modelValue: selectedProject.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedProject.value = $event),
                  class: "pt-2xs",
                  projects: props.projects,
                  "empty-options-text": unref(locale).baseText("projects.sharing.noMatchingProjects")
                }, null, 8, ["modelValue", "projects", "empty-options-text"])
              ], 2)) : createCommentVNode("", true),
              createVNode(_component_ElRadio, {
                "model-value": operation2.value,
                label: "wipe",
                class: "mb-s",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => operation2.value = "wipe")
              }, {
                default: withCtx(() => [
                  createVNode(_component_N8nText, { color: "text-dark" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.wipe.label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model-value"]),
              operation2.value === "wipe" ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.operation)
              }, [
                createVNode(_component_N8nInputLabel, {
                  label: unref(locale).baseText("projects.settings.delete.question.wipe.title")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_N8nInput, {
                      modelValue: wipeConfirmText.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => wipeConfirmText.value = $event),
                      "data-test-id": "project-delete-confirm-input",
                      placeholder: unref(locale).baseText("projects.settings.delete.question.wipe.placeholder")
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ], 2)) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const operation = "_operation_18zmn_123";
const style0$2 = {
  operation
};
const cssModules$2 = {
  "$style": style0$2
};
const ProjectDeleteDialog = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$2]]);
const _hoisted_1$3 = { class: "pt-l" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProjectRoleUpgradeDialog",
  props: /* @__PURE__ */ mergeModels({
    limit: {},
    planName: {}
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const visible = useModel(__props, "modelValue");
    const pageRedirectionHelper = usePageRedirectionHelper();
    const locale = useI18n$1();
    const goToUpgrade = async () => {
      await pageRedirectionHelper.goToUpgrade("rbac", "upgrade-rbac");
      visible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_N8nButton = N8nButton;
      const _component_ElDialog = resolveComponent("ElDialog");
      return openBlock(), createBlock(_component_ElDialog, {
        modelValue: visible.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
        title: unref(locale).baseText("projects.settings.role.upgrade.title"),
        width: "500"
      }, {
        footer: withCtx(() => [
          createVNode(_component_N8nButton, {
            type: "secondary",
            "native-type": "button",
            onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("generic.cancel")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_N8nButton, {
            type: "primary",
            "native-type": "button",
            onClick: goToUpgrade
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limitReached.link")), 1)
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            createVNode(unref(I18nT), {
              keypath: "projects.settings.role.upgrade.message",
              scope: "global"
            }, {
              planName: withCtx(() => [
                createTextVNode(toDisplayString(props.planName), 1)
              ]),
              limit: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limit", {
                  adjustToNumber: props.limit,
                  interpolate: { count: String(props.limit) }
                })), 1)
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const _hoisted_1$2 = { key: 1 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProjectMembersRoleCell",
  props: {
    data: {},
    roles: {},
    actions: {}
  },
  emits: ["update:role"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selectedRole = ref(props.data.role);
    const isEditable = computed(() => props.data.role !== "project:personalOwner");
    watch(
      () => props.data.role,
      (newRole) => {
        selectedRole.value = newRole;
      }
    );
    const roleLabel2 = computed(
      () => isProjectRole(selectedRole.value) ? props.roles[selectedRole.value]?.label || selectedRole.value : selectedRole.value
    );
    const onActionSelect = (role) => {
      emit("update:role", {
        role,
        userId: props.data.id
      });
    };
    return (_ctx, _cache) => {
      return isEditable.value ? (openBlock(), createBlock(unref(N8nActionDropdown), {
        key: 0,
        placement: "bottom-start",
        items: props.actions,
        "max-height": 280,
        "data-test-id": "project-member-role-dropdown",
        onSelect: onActionSelect
      }, {
        activator: withCtx(() => [
          createBaseVNode("button", {
            class: normalizeClass(_ctx.$style.roleLabel),
            type: "button"
          }, [
            createVNode(unref(N8nText), { color: "text-dark" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(roleLabel2.value), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nIcon), {
              color: "text-dark",
              icon: "chevron-down",
              size: "large"
            })
          ], 2)
        ]),
        menuItem: withCtx((item) => [
          createVNode(unref(ElRadio), {
            "model-value": selectedRole.value,
            label: item.id,
            disabled: item.disabled,
            "onUpdate:modelValue": ($event) => selectedRole.value = item.id
          }, {
            default: withCtx(() => [
              createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.radioLabel)
              }, [
                createVNode(unref(N8nText), {
                  color: "text-dark",
                  class: "pb-3xs"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(unref(N8nText), {
                  color: "text-dark",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(isProjectRole)(item.id) ? props.roles[item.id]?.desc || "" : ""), 1)
                  ]),
                  _: 2
                }, 1024)
              ], 2)
            ]),
            _: 2
          }, 1032, ["model-value", "label", "disabled", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["items"])) : (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(roleLabel2.value), 1));
    };
  }
});
const roleLabel = "_roleLabel_1hpnu_123";
const radioLabel = "_radioLabel_1hpnu_133";
const style0$1 = {
  roleLabel,
  radioLabel
};
const cssModules$1 = {
  "$style": style0$1
};
const ProjectMembersRoleCell = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectMembersActionsCell",
  props: {
    data: {},
    actions: {}
  },
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const onAction = (action) => {
      emit("action", { action, userId: props.data.id });
    };
    return (_ctx, _cache) => {
      const _component_N8nActionToggle = N8nActionToggle;
      return props.actions.length > 0 ? (openBlock(), createBlock(_component_N8nActionToggle, {
        key: 0,
        placement: "bottom",
        actions: props.actions,
        theme: "dark",
        onAction
      }, null, 8, ["actions"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$1 = { class: "pt-xs pb-xs" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectMembersTable",
  props: /* @__PURE__ */ mergeModels({
    data: {},
    loading: { type: Boolean },
    currentUserId: {},
    projectRoles: {},
    actions: {}
  }, {
    "tableOptions": {
      default: () => ({
        page: 0,
        itemsPerPage: 10,
        sortBy: []
      })
    },
    "tableOptionsModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:options", "update:role", "action"], ["update:tableOptions"]),
  setup(__props, { emit: __emit }) {
    const i18n = useI18n$1();
    const props = __props;
    const emit = __emit;
    const tableOptions = useModel(__props, "tableOptions");
    const rows = computed(() => props.data.items);
    const headers = ref([
      {
        title: i18n.baseText("projects.settings.table.header.user"),
        key: "name",
        width: 400,
        disableSort: true,
        value: (row) => row
      },
      {
        title: i18n.baseText("projects.settings.table.header.role"),
        key: "role",
        disableSort: true
      },
      {
        title: "",
        key: "actions",
        align: "end",
        width: 46,
        disableSort: true,
        value() {
          return;
        }
      }
    ]);
    const roles = computed(() => ({
      "project:admin": {
        label: i18n.baseText("projects.settings.role.admin"),
        desc: i18n.baseText("projects.settings.role.admin.description")
      },
      "project:editor": {
        label: i18n.baseText("projects.settings.role.editor"),
        desc: i18n.baseText("projects.settings.role.editor.description")
      },
      "project:viewer": {
        label: i18n.baseText("projects.settings.role.viewer"),
        desc: i18n.baseText("projects.settings.role.viewer.description")
      },
      "project:personalOwner": {
        label: i18n.baseText("projects.settings.role.personalOwner"),
        desc: ""
      }
    }));
    const roleActions = computed(() => [
      ...props.projectRoles.map((role) => ({
        id: role.slug,
        label: role.displayName,
        disabled: !role.licensed
      }))
    ]);
    const canUpdateRole = (member) => member.id !== props.currentUserId;
    const onRoleChange = ({ role, userId }) => {
      emit("update:role", { role, userId });
    };
    const filterActions = (member) => {
      if (member.id === props.currentUserId || member.role === "project:personalOwner") return [];
      return (props.actions ?? []).filter((action) => action.guard?.(member) ?? true);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(N8nDataTableServer), {
          "sort-by": tableOptions.value.sortBy,
          "onUpdate:sortBy": _cache[1] || (_cache[1] = ($event) => tableOptions.value.sortBy = $event),
          page: tableOptions.value.page,
          "onUpdate:page": _cache[2] || (_cache[2] = ($event) => tableOptions.value.page = $event),
          "items-per-page": _ctx.data.count,
          headers: headers.value,
          items: rows.value,
          "items-length": _ctx.data.count,
          loading: _ctx.loading,
          "page-sizes": [_ctx.data.count + 1],
          "onUpdate:options": _cache[3] || (_cache[3] = ($event) => emit("update:options", $event))
        }, {
          [`item.name`]: withCtx(({ value }) => [
            createBaseVNode("div", _hoisted_1$1, [
              createVNode(unref(N8nUserInfo), normalizeProps(guardReactiveProps(value)), null, 16)
            ])
          ]),
          [`item.role`]: withCtx(({ item }) => [
            canUpdateRole(item) ? (openBlock(), createBlock(ProjectMembersRoleCell, {
              key: 0,
              data: item,
              roles: roles.value,
              actions: roleActions.value,
              "onUpdate:role": onRoleChange
            }, null, 8, ["data", "roles", "actions"])) : (openBlock(), createBlock(unref(N8nText), {
              key: 1,
              color: "text-dark"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(roles.value[item.role]?.label ?? item.role), 1)
              ]),
              _: 2
            }, 1024))
          ]),
          [`item.actions`]: withCtx(({ item }) => [
            createVNode(_sfc_main$2, {
              data: item,
              actions: filterActions(item),
              onAction: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("action", $event))
            }, null, 8, ["data", "actions"])
          ]),
          _: 2
        }, 1032, ["sort-by", "page", "items-per-page", "headers", "items", "items-length", "loading", "page-sizes"])
      ]);
    };
  }
});
const _hoisted_1 = { for: "projectName" };
const _hoisted_2 = { for: "projectDescription" };
const _hoisted_3 = { class: "mr-2xs" };
const _hoisted_4 = { for: "projectMembers" };
const _hoisted_5 = { class: "mb-xs" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectSettings",
  setup(__props) {
    const usersStore = useUsersStore();
    const i18n = useI18n$1();
    const projectsStore = useProjectsStore();
    const rolesStore = useRolesStore();
    const cloudPlanStore = useCloudPlanStore();
    const toast = useToast();
    const router = useRouter();
    const telemetry = useTelemetry();
    const documentTitle = useDocumentTitle();
    const showSaveError = (error) => {
      toast.showError(error, i18n.baseText("projects.settings.save.error.title"));
    };
    const dialogVisible = ref(false);
    const upgradeDialogVisible = ref(false);
    const isDirty = ref(false);
    const isValid = ref(false);
    const resourceCounts = ref({
      credentials: -1,
      dataTables: -1,
      workflows: -1
    });
    const formData = ref({
      name: "",
      description: "",
      relations: []
    });
    const suppressNextSync = ref(false);
    const projectRoleTranslations = ref({
      "project:viewer": i18n.baseText("projects.settings.role.viewer"),
      "project:editor": i18n.baseText("projects.settings.role.editor"),
      "project:admin": i18n.baseText("projects.settings.role.admin")
    });
    const nameInput = ref(null);
    const projectIcon = ref({
      type: "icon",
      value: "layers"
    });
    const search2 = ref("");
    const membersTableState = ref({
      page: 0,
      itemsPerPage: 10,
      sortBy: [
        { id: "firstName", desc: false },
        { id: "lastName", desc: false },
        { id: "email", desc: false }
      ]
    });
    const usersList = computed(
      () => usersStore.allUsers.filter((user) => {
        const isAlreadySharedWithUser = (formData.value.relations || []).find((r) => r.id === user.id);
        return !isAlreadySharedWithUser;
      })
    );
    const projects = computed(
      () => projectsStore.availableProjects.filter(
        (project) => project.id !== projectsStore.currentProjectId
      )
    );
    const projectRoles = computed(
      () => rolesStore.processedProjectRoles.map((role) => ({
        ...role,
        displayName: projectRoleTranslations.value[role.slug] ?? role.displayName
      }))
    );
    const firstLicensedRole = computed(() => projectRoles.value.find((role) => role.licensed)?.slug);
    const projectMembersActions = computed(() => [
      {
        label: i18n.baseText("projects.settings.table.row.removeUser"),
        value: "remove",
        guard: (member) => member.id !== usersStore.currentUser?.id && member.role !== "project:personalOwner"
      }
    ]);
    const onAddMember = async (userId) => {
      if (!projectsStore.currentProject) return;
      const user = usersStore.usersById[userId];
      if (!user) return;
      const role = firstLicensedRole.value;
      if (!role) return;
      if (!formData.value.relations.find((r) => r.id === userId)) {
        formData.value.relations.push({ id: userId, role });
      }
      try {
        suppressNextSync.value = true;
        await projectsStore.addMember(projectsStore.currentProject.id, { userId, role });
        toast.showMessage({
          type: "success",
          title: i18n.baseText("projects.settings.member.added.title")
        });
        telemetry.track("User added member to project", {
          project_id: projectsStore.currentProject.id,
          target_user_id: userId,
          role
        });
      } catch (error) {
        formData.value.relations = formData.value.relations.filter((r) => r.id !== userId);
        showSaveError(error);
      }
    };
    const onUpdateMemberRole = async ({ userId, role }) => {
      if (!projectsStore.currentProject) {
        return;
      }
      const memberIndex = formData.value.relations.findIndex((r) => r.id === userId);
      if (memberIndex === -1) {
        return;
      }
      const originalRole = formData.value.relations[memberIndex].role;
      formData.value.relations[memberIndex].role = role;
      try {
        suppressNextSync.value = true;
        await projectsStore.updateMemberRole(projectsStore.currentProject.id, userId, role);
        toast.showMessage({
          type: "success",
          title: i18n.baseText("projects.settings.memberRole.updated.title")
        });
        telemetry.track("User changed member role on project", {
          project_id: projectsStore.currentProject.id,
          target_user_id: userId,
          role
        });
      } catch (error) {
        formData.value.relations[memberIndex].role = originalRole;
        toast.showError(error, i18n.baseText("projects.settings.memberRole.update.error.title"));
      }
    };
    const onTextInput = () => {
      isDirty.value = true;
    };
    async function onRemoveMember(userId) {
      const current = projectsStore.currentProject;
      if (!current) return;
      const idx = formData.value.relations.findIndex((r) => r.id === userId);
      if (idx === -1) return;
      const removed = formData.value.relations.splice(idx, 1)[0];
      const isPersisted = current.relations.some((r) => r.id === userId);
      if (!isPersisted) return;
      try {
        suppressNextSync.value = true;
        await projectsStore.removeMember(current.id, userId);
        toast.showMessage({
          type: "success",
          title: i18n.baseText("projects.settings.member.removed.title")
        });
        telemetry.track("User removed member from project", {
          project_id: current.id,
          target_user_id: userId
        });
      } catch (error) {
        formData.value.relations.splice(idx, 0, removed);
        showSaveError(error);
      }
    }
    const onMembersListAction = async ({ action, userId }) => {
      switch (action) {
        case "remove":
          await onRemoveMember(userId);
          break;
      }
    };
    const resetFormData = () => {
      formData.value.relations = projectsStore.currentProject?.relations ? deepCopy(projectsStore.currentProject.relations) : [];
      formData.value.name = projectsStore.currentProject?.name ?? "";
      formData.value.description = projectsStore.currentProject?.description ?? "";
    };
    const onCancel = () => {
      resetFormData();
      isDirty.value = false;
    };
    const makeFormDataDiff = () => {
      const diff = {};
      if (!projectsStore.currentProject) {
        return diff;
      }
      if (formData.value.name !== projectsStore.currentProject.name) {
        diff.name = formData.value.name ?? "";
      }
      if (formData.value.description !== projectsStore.currentProject.description) {
        diff.description = formData.value.description ?? "";
      }
      if (formData.value.relations.length !== projectsStore.currentProject.relations.length) {
        diff.memberAdded = formData.value.relations.filter(
          (r) => !projectsStore.currentProject?.relations.find((cr) => cr.id === r.id)
        );
        diff.memberRemoved = projectsStore.currentProject.relations.filter(
          (cr) => !formData.value.relations.find((r) => r.id === cr.id)
        );
      }
      diff.role = formData.value.relations.filter((r) => {
        const currentRelation = projectsStore.currentProject?.relations.find((cr) => cr.id === r.id);
        return currentRelation?.role !== r.role && !diff.memberAdded?.find((ar) => ar.id === r.id);
      });
      return diff;
    };
    const sendTelemetry = (diff) => {
      const projectId = projectsStore.currentProject?.id;
      if (diff.name) {
        telemetry.track("User changed project name", { project_id: projectId, name: diff.name });
      }
      diff.memberAdded?.forEach((r) => {
        telemetry.track("User added member to project", {
          project_id: projectId,
          target_user_id: r.id,
          role: r.role
        });
      });
      diff.memberRemoved?.forEach((r) => {
        telemetry.track("User removed member from project", {
          project_id: projectId,
          target_user_id: r.id
        });
      });
      diff.role?.forEach((r) => {
        telemetry.track("User changed member role on project", {
          project_id: projectId,
          target_user_id: r.id,
          role: r.role
        });
      });
    };
    const updateProject = async () => {
      if (!projectsStore.currentProject) {
        return;
      }
      try {
        await projectsStore.updateProject(projectsStore.currentProject.id, {
          name: formData.value.name ?? "",
          description: formData.value.description ?? ""
        });
        isDirty.value = false;
      } catch (error) {
        showSaveError(error);
        throw error;
      }
    };
    const onSubmit = async () => {
      if (!isDirty.value) {
        return;
      }
      try {
        await updateProject();
        const diff = makeFormDataDiff();
        sendTelemetry(diff);
        toast.showMessage({
          title: i18n.baseText("projects.settings.save.successful.title", {
            interpolate: { projectName: formData.value.name ?? "" }
          }),
          type: "success"
        });
      } catch (error) {
      }
    };
    const onDelete = async () => {
      await projectsStore.getAvailableProjects();
      if (projectsStore.currentProjectId) {
        resourceCounts.value = await projectsStore.getResourceCounts(projectsStore.currentProjectId);
      }
      dialogVisible.value = true;
    };
    const onConfirmDelete = async (transferId) => {
      try {
        if (projectsStore.currentProject) {
          const projectName2 = projectsStore.currentProject?.name ?? "";
          await projectsStore.deleteProject(projectsStore.currentProject.id, transferId);
          await router.push({ name: VIEWS.HOMEPAGE });
          toast.showMessage({
            title: i18n.baseText("projects.settings.delete.successful.title", {
              interpolate: { projectName: projectName2 }
            }),
            type: "success"
          });
          dialogVisible.value = true;
        }
      } catch (error) {
        toast.showError(error, i18n.baseText("projects.settings.delete.error.title"));
      }
    };
    const selectProjectNameIfMatchesDefault = () => {
      if (formData.value.name === i18n.baseText("projects.settings.newProjectName")) {
        nameInput.value?.inputRef?.focus();
        nameInput.value?.inputRef?.select();
      }
    };
    const onIconUpdated = async () => {
      if (!projectsStore.currentProject) return;
      try {
        await projectsStore.updateProject(projectsStore.currentProject.id, {
          icon: projectIcon.value
        });
        toast.showMessage({
          title: i18n.baseText("projects.settings.icon.update.successful.title"),
          type: "success"
        });
      } catch (error) {
        showSaveError(error);
      }
    };
    watch(
      () => projectsStore.currentProject,
      async () => {
        if (suppressNextSync.value) {
          suppressNextSync.value = false;
          return;
        }
        resetFormData();
        await nextTick();
        selectProjectNameIfMatchesDefault();
        if (projectsStore.currentProject?.icon && isIconOrEmoji(projectsStore.currentProject.icon)) {
          projectIcon.value = projectsStore.currentProject.icon;
        }
      },
      { immediate: true }
    );
    const relationUsers = computed(
      () => formData.value.relations.map((relation) => {
        const user = usersStore.usersById[relation.id];
        const safeRole = isProjectRole(relation.role) ? relation.role : "project:viewer";
        return {
          ...user,
          ...relation,
          role: safeRole,
          firstName: user?.firstName ?? null,
          lastName: user?.lastName ?? null,
          email: user?.email ?? null
        };
      })
    );
    const membersTableData = computed(() => ({
      items: relationUsers.value,
      count: relationUsers.value.length
    }));
    const filteredMembersData = computed(() => {
      if (!search2.value.trim()) return membersTableData.value;
      const searchTerm = search2.value.toLowerCase();
      const filtered = relationUsers.value.filter((member) => {
        const fullName = `${member.firstName ?? ""} ${member.lastName ?? ""}`.toLowerCase();
        const email = (member.email ?? "").toLowerCase();
        return fullName.includes(searchTerm) || email.includes(searchTerm);
      });
      return { items: filtered, count: filtered.length };
    });
    const debouncedSearch = useDebounceFn(() => {
      membersTableState.value.page = 0;
    }, 300);
    const onSearch = (value) => {
      search2.value = value;
      void debouncedSearch();
    };
    const onUpdateMembersTableOptions = (options) => {
      membersTableState.value = options;
    };
    onBeforeMount(async () => {
      await usersStore.fetchUsers();
    });
    onMounted(() => {
      documentTitle.set(i18n.baseText("projects.settings"));
      selectProjectNameIfMatchesDefault();
    });
    return (_ctx, _cache) => {
      const _component_N8nText = N8nText;
      const _component_N8nIconPicker = IconPicker;
      const _component_N8nButton = N8nButton;
      const _component_N8nIcon = N8nIcon;
      const _component_N8nUserSelect = N8nUserSelect;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.projectSettings),
        "data-test-id": "project-settings-container"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createVNode(ProjectHeader),
          createVNode(_component_N8nText, {
            tag: "h1",
            size: "xlarge",
            class: "pt-xs pb-m"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.info")), 1)
            ]),
            _: 1
          })
        ], 2),
        createBaseVNode("form", {
          onSubmit: withModifiers(onSubmit, ["prevent"])
        }, [
          createBaseVNode("fieldset", null, [
            createBaseVNode("label", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.settings.name")), 1),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.projectName)
            }, [
              createVNode(_component_N8nIconPicker, {
                modelValue: projectIcon.value,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => projectIcon.value = $event),
                  onIconUpdated
                ],
                "button-tooltip": unref(i18n).baseText("projects.settings.iconPicker.button.tooltip")
              }, null, 8, ["modelValue", "button-tooltip"]),
              createVNode(unref(N8nFormInput), {
                id: "projectName",
                ref_key: "nameInput",
                ref: nameInput,
                modelValue: formData.value.name,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.name = $event),
                label: "",
                type: "text",
                name: "name",
                required: "",
                "data-test-id": "project-settings-name-input",
                class: normalizeClass(_ctx.$style.projectNameInput),
                onEnter: onSubmit,
                onInput: onTextInput,
                onValidate: _cache[2] || (_cache[2] = ($event) => isValid.value = $event)
              }, null, 8, ["modelValue", "class"])
            ], 2)
          ]),
          createBaseVNode("fieldset", null, [
            createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("projects.settings.description")), 1),
            createVNode(unref(N8nFormInput), {
              id: "projectDescription",
              modelValue: formData.value.description,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.description = $event),
              label: "",
              name: "description",
              type: "textarea",
              maxlength: 512,
              autosize: true,
              "data-test-id": "project-settings-description-input",
              class: normalizeClass(_ctx.$style.projectDescriptionInput),
              onEnter: onSubmit,
              onInput: onTextInput,
              onValidate: _cache[4] || (_cache[4] = ($event) => isValid.value = $event)
            }, null, 8, ["modelValue", "class"])
          ]),
          isDirty.value ? (openBlock(), createElementBlock("fieldset", {
            key: 0,
            class: normalizeClass(_ctx.$style.buttons)
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("small", _hoisted_3, toDisplayString(unref(i18n).baseText("projects.settings.message.unsavedChanges")), 1),
              createVNode(_component_N8nButton, {
                type: "secondary",
                "native-type": "button",
                class: "mr-2xs",
                "data-test-id": "project-settings-cancel-button",
                onClick: withModifiers(onCancel, ["stop", "prevent"])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            createVNode(_component_N8nButton, {
              disabled: !isValid.value,
              type: "primary",
              "data-test-id": "project-settings-save-button"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.save")), 1)
              ]),
              _: 1
            }, 8, ["disabled"])
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("fieldset", null, [
            createBaseVNode("h3", null, [
              createBaseVNode("label", _hoisted_4, toDisplayString(unref(i18n).baseText("projects.settings.projectMembers")), 1)
            ]),
            createVNode(_component_N8nUserSelect, {
              id: "projectMembers",
              class: normalizeClass([_ctx.$style.userSelect, "mb-s"]),
              size: "large",
              users: usersList.value,
              "current-user-id": unref(usersStore).currentUser?.id,
              placeholder: unref(i18n).baseText("workflows.shareModal.select.placeholder"),
              "data-test-id": "project-members-select",
              "onUpdate:modelValue": onAddMember
            }, {
              prefix: withCtx(() => [
                createVNode(_component_N8nIcon, { icon: "search" })
              ]),
              _: 1
            }, 8, ["class", "users", "current-user-id", "placeholder"]),
            relationUsers.value.length > 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.membersTableContainer)
            }, [
              createVNode(unref(N8nInput), {
                class: normalizeClass(_ctx.$style.search),
                "model-value": search2.value,
                placeholder: unref(i18n).baseText("projects.settings.members.search.placeholder"),
                clearable: "",
                "data-test-id": "project-members-search",
                "onUpdate:modelValue": onSearch
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_N8nIcon, { icon: "search" })
                ]),
                _: 1
              }, 8, ["class", "model-value", "placeholder"]),
              createVNode(_sfc_main$1, {
                "table-options": membersTableState.value,
                "onUpdate:tableOptions": _cache[5] || (_cache[5] = ($event) => membersTableState.value = $event),
                "data-test-id": "project-members-table",
                data: filteredMembersData.value,
                "current-user-id": unref(usersStore).currentUser?.id,
                "project-roles": projectRoles.value,
                actions: projectMembersActions.value,
                "onUpdate:options": onUpdateMembersTableOptions,
                "onUpdate:role": onUpdateMemberRole,
                onAction: onMembersListAction
              }, null, 8, ["table-options", "data", "current-user-id", "project-roles", "actions"])
            ], 2)) : createCommentVNode("", true)
          ]),
          createBaseVNode("fieldset", null, [
            createBaseVNode("h3", _hoisted_5, toDisplayString(unref(i18n).baseText("projects.settings.danger.title")), 1),
            createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("projects.settings.danger.message")), 1),
            _cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1)),
            createVNode(_component_N8nButton, {
              type: "tertiary",
              "native-type": "button",
              class: "mt-s",
              "data-test-id": "project-settings-delete-button",
              onClick: withModifiers(onDelete, ["stop", "prevent"])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.danger.deleteProject")), 1)
              ]),
              _: 1
            })
          ])
        ], 32),
        createVNode(ProjectDeleteDialog, {
          modelValue: dialogVisible.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => dialogVisible.value = $event),
          "current-project": unref(projectsStore).currentProject,
          "resource-counts": resourceCounts.value,
          projects: projects.value,
          onConfirmDelete
        }, null, 8, ["modelValue", "current-project", "resource-counts", "projects"]),
        createVNode(_sfc_main$4, {
          modelValue: upgradeDialogVisible.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => upgradeDialogVisible.value = $event),
          limit: unref(projectsStore).teamProjectsLimit,
          "plan-name": unref(cloudPlanStore).currentPlanData?.displayName
        }, null, 8, ["modelValue", "limit", "plan-name"])
      ], 2);
    };
  }
});
const projectSettings = "_projectSettings_1kv8e_123";
const header = "_header_1kv8e_147";
const upgrade = "_upgrade_1kv8e_153";
const buttons = "_buttons_1kv8e_157";
const membersTableContainer = "_membersTableContainer_1kv8e_163";
const search = "_search_1kv8e_167";
const projectName = "_projectName_1kv8e_172";
const projectNameInput = "_projectNameInput_1kv8e_177";
const projectDescriptionInput = "_projectDescriptionInput_1kv8e_181";
const userSelect = "_userSelect_1kv8e_182";
const style0 = {
  projectSettings,
  header,
  upgrade,
  buttons,
  membersTableContainer,
  search,
  projectName,
  projectNameInput,
  projectDescriptionInput,
  userSelect
};
const cssModules = {
  "$style": style0
};
const ProjectSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ProjectSettings as default
};

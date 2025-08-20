import { d as defineComponent, r as ref, x as computed, e as createBlock, g as openBlock, bu as createSlots, w as withCtx, Q as renderSlot, h as createElementBlock, F as Fragment, A as renderList, l as unref, e9 as _sfc_main$5, n as normalizeClass, i as createVNode, J as N8nUserInfo, K as mergeProps, D as useI18n, e8 as N8nSelect, _ as _export_sfc, ef as mergeModels, eg as useModel, bt as onClickOutside, j as createBaseVNode, f as createCommentVNode, a4 as N8nTooltip, a5 as _sfc_main$6, q as N8nButton, k as createTextVNode, t as toDisplayString, gc as N8nTabs, N as N8nIcon, c as useI18n$1, T as resolveComponent, p as N8nText, fA as ProjectSharing, e5 as N8nInputLabel, c$ as N8nInput, B as withModifiers, aB as usePageRedirectionHelper, a6 as I18nT, u as useUsersStore, av as useProjectsStore, go as useRolesStore, bh as useCloudPlanStore, a as useToast, b as useRouter, ay as useDocumentTitle, af as watch, b3 as onBeforeMount, o as onMounted, eW as N8nFormInput, gp as N8nUsersList, dP as deepCopy, V as VIEWS, ap as useTelemetry, R as nextTick, fj as isIconOrEmoji } from "./index-BsWH3eYA.js";
import { P as ProjectHeader } from "./ProjectHeader-DJ7INeh1.js";
import "./useProjectPages-C3Mn4pYX.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
            return openBlock(), createBlock(unref(_sfc_main$5), {
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
const style0$3 = {
  itemContainer,
  limitPopperWidth
};
const cssModules$3 = {
  "$style": style0$3
};
const N8nUserSelect = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$3]]);
var cache = /* @__PURE__ */ new Map();
function isEmojiSupported(unicode) {
  if (cache.has(unicode)) {
    return cache.get(unicode);
  }
  var supported = isSupported(unicode);
  cache.set(unicode, supported);
  return supported;
}
var isSupported = function() {
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
}();
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
const _hoisted_1$3 = ["aria-expanded"];
const _hoisted_2$2 = ["onClick"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
          createVNode(unref(N8nTooltip), {
            placement: "right",
            "data-test-id": "icon-picker-tooltip"
          }, {
            content: withCtx(() => [
              createTextVNode(toDisplayString(props.buttonTooltip ?? unref(t)("iconPicker.button.defaultToolTip")), 1)
            ]),
            default: withCtx(() => [
              model.value.type === "icon" ? (openBlock(), createBlock(unref(_sfc_main$6), {
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
      ], 10, _hoisted_1$3);
    };
  }
});
const container = "_container_15yfs_123";
const popup = "_popup_15yfs_131";
const tabs = "_tabs_15yfs_144";
const content = "_content_15yfs_148";
const icon = "_icon_15yfs_154";
const emoji = "_emoji_15yfs_127";
const style0$2 = {
  container,
  "emoji-button": "_emoji-button_15yfs_127",
  popup,
  tabs,
  content,
  icon,
  emoji
};
const cssModules$2 = {
  "$style": style0$2
};
const IconPicker = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$2]]);
const _hoisted_1$2 = { key: 1 };
const _hoisted_2$1 = { class: "pt-l" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectDeleteDialog",
  props: /* @__PURE__ */ mergeModels({
    currentProject: {},
    projects: {},
    isCurrentProjectEmpty: { type: Boolean }
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
    const isValid = computed(() => {
      const expectedWipeConfirmation = locale.baseText(
        "projects.settings.delete.question.wipe.placeholder"
      );
      return props.isCurrentProjectEmpty || operation2.value === "transfer" && !!selectedProject.value || operation2.value === "wipe" && wipeConfirmText.value === expectedWipeConfirmation;
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
      const _component_n8n_text = N8nText;
      const _component_el_radio = resolveComponent("el-radio");
      const _component_n8n_input = N8nInput;
      const _component_n8n_input_label = N8nInputLabel;
      const _component_N8nButton = N8nButton;
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        modelValue: visible.value,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => visible.value = $event),
        title: unref(locale).baseText("projects.settings.delete.title", {
          interpolate: { projectName: props.currentProject?.name ?? "" }
        }),
        width: "500"
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
          _ctx.isCurrentProjectEmpty ? (openBlock(), createBlock(_component_n8n_text, {
            key: 0,
            color: "text-base"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message.empty")), 1)
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", _hoisted_1$2, [
            createVNode(_component_n8n_text, { color: "text-base" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_el_radio, {
                "model-value": operation2.value,
                label: "transfer",
                class: "mb-s",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => operation2.value = "transfer")
              }, {
                default: withCtx(() => [
                  createVNode(_component_n8n_text, { color: "text-dark" }, {
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
                createVNode(_component_n8n_text, { color: "text-dark" }, {
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
              createVNode(_component_el_radio, {
                "model-value": operation2.value,
                label: "wipe",
                class: "mb-s",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => operation2.value = "wipe")
              }, {
                default: withCtx(() => [
                  createVNode(_component_n8n_text, { color: "text-dark" }, {
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
                createVNode(_component_n8n_input_label, {
                  label: unref(locale).baseText("projects.settings.delete.question.wipe.title")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n8n_input, {
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
          ]))
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const operation = "_operation_18zmn_123";
const style0$1 = {
  operation
};
const cssModules$1 = {
  "$style": style0$1
};
const ProjectDeleteDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
const _hoisted_1$1 = { class: "pt-l" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
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
          createBaseVNode("div", _hoisted_1$1, [
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
const _hoisted_1 = { for: "projectName" };
const _hoisted_2 = { for: "projectDescription" };
const _hoisted_3 = { for: "projectMembers" };
const _hoisted_4 = {
  key: 0,
  class: "mr-2xs"
};
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
    const dialogVisible = ref(false);
    const upgradeDialogVisible = ref(false);
    const isDirty = ref(false);
    const isValid = ref(false);
    const isCurrentProjectEmpty = ref(true);
    const formData = ref({
      name: "",
      description: "",
      relations: []
    });
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
    const usersList = computed(
      () => usersStore.allUsers.filter((user) => {
        const isAlreadySharedWithUser = (formData.value.relations || []).find(
          (r) => r.id === user.id
        );
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
        name: projectRoleTranslations.value[role.role]
      }))
    );
    const firstLicensedRole = computed(() => projectRoles.value.find((role) => role.licensed)?.role);
    const onAddMember = (userId) => {
      isDirty.value = true;
      const user = usersStore.usersById[userId];
      if (!user) return;
      const { id, firstName, lastName, email } = user;
      const relation = { id, firstName, lastName, email };
      if (firstLicensedRole.value) {
        relation.role = firstLicensedRole.value;
      }
      formData.value.relations.push(relation);
    };
    const onRoleAction = (userId, role) => {
      isDirty.value = true;
      const index = formData.value.relations.findIndex((r) => r.id === userId);
      if (role === "remove") {
        formData.value.relations.splice(index, 1);
      } else {
        formData.value.relations[index].role = role;
      }
    };
    const onTextInput = () => {
      isDirty.value = true;
    };
    const onCancel = () => {
      formData.value.relations = projectsStore.currentProject?.relations ? deepCopy(projectsStore.currentProject.relations) : [];
      formData.value.name = projectsStore.currentProject?.name ?? "";
      formData.value.description = projectsStore.currentProject?.description ?? "";
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
      if (diff.name) {
        telemetry.track("User changed project name", {
          project_id: projectsStore.currentProject?.id,
          name: diff.name
        });
      }
      if (diff.memberAdded) {
        diff.memberAdded.forEach((r) => {
          telemetry.track("User added member to project", {
            project_id: projectsStore.currentProject?.id,
            target_user_id: r.id,
            role: r.role
          });
        });
      }
      if (diff.memberRemoved) {
        diff.memberRemoved.forEach((r) => {
          telemetry.track("User removed member from project", {
            project_id: projectsStore.currentProject?.id,
            target_user_id: r.id
          });
        });
      }
      if (diff.role) {
        diff.role.forEach((r) => {
          telemetry.track("User changed member role on project", {
            project_id: projectsStore.currentProject?.id,
            target_user_id: r.id,
            role: r.role
          });
        });
      }
    };
    const updateProject = async () => {
      if (!projectsStore.currentProject) {
        return;
      }
      try {
        if (formData.value.relations.some((r) => r.role === "project:personalOwner")) {
          throw new Error("Invalid role selected for this project.");
        }
        await projectsStore.updateProject(projectsStore.currentProject.id, {
          name: formData.value.name,
          icon: projectIcon.value,
          description: formData.value.description,
          relations: formData.value.relations.map((r) => ({
            userId: r.id,
            role: r.role
          }))
        });
        isDirty.value = false;
      } catch (error) {
        toast.showError(error, i18n.baseText("projects.settings.save.error.title"));
      }
    };
    const onSubmit = async () => {
      if (!isDirty.value) {
        return;
      }
      await updateProject();
      const diff = makeFormDataDiff();
      sendTelemetry(diff);
      toast.showMessage({
        title: i18n.baseText("projects.settings.save.successful.title", {
          interpolate: { projectName: formData.value.name ?? "" }
        }),
        type: "success"
      });
    };
    const onDelete = async () => {
      await projectsStore.getAvailableProjects();
      if (projectsStore.currentProjectId) {
        isCurrentProjectEmpty.value = await projectsStore.isProjectEmpty(
          projectsStore.currentProjectId
        );
      }
      dialogVisible.value = true;
    };
    const onConfirmDelete = async (transferId) => {
      try {
        if (projectsStore.currentProject) {
          const projectName = projectsStore.currentProject?.name ?? "";
          await projectsStore.deleteProject(projectsStore.currentProject.id, transferId);
          await router.push({ name: VIEWS.HOMEPAGE });
          toast.showMessage({
            title: i18n.baseText("projects.settings.delete.successful.title", {
              interpolate: { projectName }
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
      await updateProject();
      toast.showMessage({
        title: i18n.baseText("projects.settings.icon.update.successful.title"),
        type: "success"
      });
    };
    watch(
      () => projectsStore.currentProject,
      async () => {
        formData.value.name = projectsStore.currentProject?.name ?? "";
        formData.value.description = projectsStore.currentProject?.description ?? "";
        formData.value.relations = projectsStore.currentProject?.relations ? deepCopy(projectsStore.currentProject.relations) : [];
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
        if (!user) return relation;
        return {
          ...user,
          ...relation
        };
      })
    );
    onBeforeMount(async () => {
      await usersStore.fetchUsers();
    });
    onMounted(() => {
      documentTitle.set(i18n.baseText("projects.settings"));
      selectProjectNameIfMatchesDefault();
    });
    return (_ctx, _cache) => {
      const _component_N8nIconPicker = IconPicker;
      const _component_N8nIcon = N8nIcon;
      const _component_N8nUserSelect = N8nUserSelect;
      const _component_N8nOption = _sfc_main$5;
      const _component_N8nSelect = N8nSelect;
      const _component_N8nButton = N8nButton;
      const _component_N8nUsersList = N8nUsersList;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.projectSettings)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createVNode(ProjectHeader)
        ], 2),
        createBaseVNode("form", {
          onSubmit: withModifiers(onSubmit, ["prevent"])
        }, [
          createBaseVNode("fieldset", null, [
            createBaseVNode("label", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.settings.name")), 1),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style["project-name"])
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
                class: normalizeClass(_ctx.$style["project-name-input"]),
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
              onEnter: onSubmit,
              onInput: onTextInput,
              onValidate: _cache[4] || (_cache[4] = ($event) => isValid.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("fieldset", null, [
            createBaseVNode("label", _hoisted_3, toDisplayString(unref(i18n).baseText("projects.settings.projectMembers")), 1),
            createVNode(_component_N8nUserSelect, {
              id: "projectMembers",
              class: "mb-s",
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
            }, 8, ["users", "current-user-id", "placeholder"]),
            createVNode(_component_N8nUsersList, {
              actions: [],
              users: relationUsers.value,
              "current-user-id": unref(usersStore).currentUser?.id,
              "delete-label": unref(i18n).baseText("workflows.shareModal.list.delete")
            }, {
              actions: withCtx(({ user }) => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.buttons)
                }, [
                  createVNode(_component_N8nSelect, {
                    class: "mr-2xs",
                    "model-value": user?.role || projectRoles.value[0].role,
                    size: "small",
                    "data-test-id": "projects-settings-user-role-select",
                    "onUpdate:modelValue": ($event) => onRoleAction(user.id, $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(projectRoles.value, (role) => {
                        return openBlock(), createBlock(_component_N8nOption, {
                          key: role.role,
                          value: role.role,
                          label: role.name,
                          disabled: !role.licensed
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(role.name), 1),
                            !role.licensed ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              class: normalizeClass(_ctx.$style.upgrade),
                              onClick: _cache[5] || (_cache[5] = ($event) => upgradeDialogVisible.value = true)
                            }, "  - " + toDisplayString(unref(i18n).baseText("generic.upgrade")), 3)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["value", "label", "disabled"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["model-value", "onUpdate:modelValue"]),
                  createVNode(_component_N8nButton, {
                    type: "tertiary",
                    "native-type": "button",
                    square: "",
                    icon: "trash-2",
                    "data-test-id": "project-user-remove",
                    onClick: ($event) => onRoleAction(user.id, "remove")
                  }, null, 8, ["onClick"])
                ], 2)
              ]),
              _: 1
            }, 8, ["users", "current-user-id", "delete-label"])
          ]),
          createBaseVNode("fieldset", {
            class: normalizeClass(_ctx.$style.buttons)
          }, [
            createBaseVNode("div", null, [
              isDirty.value ? (openBlock(), createElementBlock("small", _hoisted_4, toDisplayString(unref(i18n).baseText("projects.settings.message.unsavedChanges")), 1)) : createCommentVNode("", true),
              createVNode(_component_N8nButton, {
                disabled: !isDirty.value,
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
              }, 8, ["disabled"])
            ]),
            createVNode(_component_N8nButton, {
              disabled: !isDirty.value || !isValid.value,
              type: "primary",
              "data-test-id": "project-settings-save-button"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.save")), 1)
              ]),
              _: 1
            }, 8, ["disabled"])
          ], 2),
          createBaseVNode("fieldset", null, [
            _cache[8] || (_cache[8] = createBaseVNode("hr", { class: "mb-2xl" }, null, -1)),
            createBaseVNode("h3", _hoisted_5, toDisplayString(unref(i18n).baseText("projects.settings.danger.title")), 1),
            createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("projects.settings.danger.message")), 1),
            _cache[9] || (_cache[9] = createBaseVNode("br", null, null, -1)),
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
          "is-current-project-empty": isCurrentProjectEmpty.value,
          projects: projects.value,
          onConfirmDelete
        }, null, 8, ["modelValue", "current-project", "is-current-project-empty", "projects"]),
        createVNode(_sfc_main$1, {
          modelValue: upgradeDialogVisible.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => upgradeDialogVisible.value = $event),
          limit: unref(projectsStore).teamProjectsLimit,
          "plan-name": unref(cloudPlanStore).currentPlanData?.displayName
        }, null, 8, ["modelValue", "limit", "plan-name"])
      ], 2);
    };
  }
});
const projectSettings = "_projectSettings_g68s8_123";
const header = "_header_g68s8_143";
const upgrade = "_upgrade_g68s8_149";
const buttons = "_buttons_g68s8_153";
const style0 = {
  projectSettings,
  header,
  upgrade,
  buttons,
  "project-name": "_project-name_g68s8_159",
  "project-name-input": "_project-name-input_g68s8_163"
};
const cssModules = {
  "$style": style0
};
const ProjectSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ProjectSettings as default
};

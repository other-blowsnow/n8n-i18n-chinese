import { _ as _export_sfc, fK as _sfc_main$1, d as defineComponent, aj as useSourceControlStore, aB as usePageRedirectionHelper, a as useToast, ay as useDocumentTitle, bd as useLoadingService, r as ref, x as computed, o as onMounted, c as useI18n, d8 as reactive, h as createElementBlock, g as openBlock, i as createVNode, e as createBlock, w as withCtx, k as createTextVNode, t as toDisplayString, l as unref, m as N8nHeading, j as createBaseVNode, f as createCommentVNode, a6 as I18nT, z as N8nCallout, n as normalizeClass, eW as N8nFormInput, q as N8nButton, f3 as CopyInput, e7 as N8nNotice, a4 as N8nTooltip, eY as N8nCheckbox, dY as N8nActionBox, aq as useMessage, ar as MODAL_CONFIRM } from "./index-BsWH3eYA.js";
const component = "_component_y1zn3_123";
const input = "_input_y1zn3_128";
const style0$1 = {
  component,
  input
};
const cssModules$1 = {
  "$style": style0$1
};
const N8nColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1], ["__scopeId", "data-v-74f39017"]]);
const _hoisted_1 = {
  key: 0,
  "data-test-id": "source-control-content-licensed"
};
const _hoisted_2 = ["href"];
const _hoisted_3 = { for: "repoUrl" };
const _hoisted_4 = ["href"];
const _hoisted_5 = {
  key: 2,
  "data-test-id": "source-control-connected-content"
};
const _hoisted_6 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsSourceControl",
  setup(__props) {
    const locale = useI18n();
    const sourceControlStore = useSourceControlStore();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const toast = useToast();
    const message = useMessage();
    const documentTitle = useDocumentTitle();
    const loadingService = useLoadingService();
    const isConnected = ref(false);
    const branchNameOptions = computed(
      () => sourceControlStore.preferences.branches.map((branch) => ({
        value: branch,
        label: branch
      }))
    );
    const onConnect = async () => {
      loadingService.startLoading();
      loadingService.setLoadingText(locale.baseText("settings.sourceControl.loading.connecting"));
      try {
        await sourceControlStore.savePreferences({
          repositoryUrl: sourceControlStore.preferences.repositoryUrl
        });
        await sourceControlStore.getBranches();
        isConnected.value = true;
        toast.showMessage({
          title: locale.baseText("settings.sourceControl.toast.connected.title"),
          message: locale.baseText("settings.sourceControl.toast.connected.message"),
          type: "success"
        });
      } catch (error) {
        toast.showError(error, locale.baseText("settings.sourceControl.toast.connected.error"));
      }
      loadingService.stopLoading();
    };
    const onDisconnect = async () => {
      try {
        const confirmation = await message.confirm(
          locale.baseText("settings.sourceControl.modals.disconnect.message"),
          locale.baseText("settings.sourceControl.modals.disconnect.title"),
          {
            confirmButtonText: locale.baseText("settings.sourceControl.modals.disconnect.confirm"),
            cancelButtonText: locale.baseText("settings.sourceControl.modals.disconnect.cancel")
          }
        );
        if (confirmation === MODAL_CONFIRM) {
          loadingService.startLoading();
          await sourceControlStore.disconnect(true);
          isConnected.value = false;
          toast.showMessage({
            title: locale.baseText("settings.sourceControl.toast.disconnected.title"),
            message: locale.baseText("settings.sourceControl.toast.disconnected.message"),
            type: "success"
          });
        }
      } catch (error) {
        toast.showError(error, locale.baseText("settings.sourceControl.toast.disconnected.error"));
      }
      loadingService.stopLoading();
    };
    const onSave = async () => {
      loadingService.startLoading();
      try {
        await sourceControlStore.updatePreferences({
          branchName: sourceControlStore.preferences.branchName,
          branchReadOnly: sourceControlStore.preferences.branchReadOnly,
          branchColor: sourceControlStore.preferences.branchColor
        });
        toast.showMessage({
          title: locale.baseText("settings.sourceControl.saved.title"),
          type: "success"
        });
      } catch (error) {
        toast.showError(error, "Error setting branch");
      }
      loadingService.stopLoading();
    };
    const onSelect = (b) => {
      if (b === sourceControlStore.preferences.branchName) {
        return;
      }
      sourceControlStore.preferences.branchName = b;
    };
    const goToUpgrade = () => {
      void pageRedirectionHelper.goToUpgrade("source-control", "upgrade-source-control");
    };
    const initialize = async () => {
      await sourceControlStore.getPreferences();
      if (sourceControlStore.preferences.connected) {
        isConnected.value = true;
        void sourceControlStore.getBranches();
      }
    };
    onMounted(async () => {
      documentTitle.set(locale.baseText("settings.sourceControl.title"));
      if (!sourceControlStore.isEnterpriseSourceControlEnabled) return;
      await initialize();
    });
    const formValidationStatus = reactive({
      repoUrl: false,
      keyGeneratorType: false
    });
    function onValidate(key, value) {
      formValidationStatus[key] = value;
    }
    const repoUrlValidationRules = [
      { name: "REQUIRED" },
      {
        name: "MATCH_REGEX",
        config: {
          regex: /^(?:git@|ssh:\/\/git@|[\w-]+@)(?:[\w.-]+|\[[0-9a-fA-F:]+])(?::\d+)?[:\/][\w\-~.]+(?:\/[\w\-~.]+)*(?:\.git)?(?:\/.*)?$/,
          message: locale.baseText("settings.sourceControl.repoUrlInvalid")
        }
      }
    ];
    const keyGeneratorTypeValidationRules = [{ name: "REQUIRED" }];
    const validForConnection = computed(() => formValidationStatus.repoUrl);
    const branchNameValidationRules = [{ name: "REQUIRED" }];
    async function refreshSshKey() {
      try {
        const confirmation = await message.confirm(
          locale.baseText("settings.sourceControl.modals.refreshSshKey.message"),
          locale.baseText("settings.sourceControl.modals.refreshSshKey.title"),
          {
            confirmButtonText: locale.baseText("settings.sourceControl.modals.refreshSshKey.confirm"),
            cancelButtonText: locale.baseText("settings.sourceControl.modals.refreshSshKey.cancel")
          }
        );
        if (confirmation === MODAL_CONFIRM) {
          await sourceControlStore.generateKeyPair(sourceControlStore.preferences.keyGeneratorType);
          toast.showMessage({
            title: locale.baseText("settings.sourceControl.refreshSshKey.successful.title"),
            type: "success"
          });
        }
      } catch (error) {
        toast.showError(error, locale.baseText("settings.sourceControl.refreshSshKey.error.title"));
      }
    }
    const refreshBranches2 = async () => {
      try {
        await sourceControlStore.getBranches();
        toast.showMessage({
          title: locale.baseText("settings.sourceControl.refreshBranches.success"),
          type: "success"
        });
      } catch (error) {
        toast.showError(error, locale.baseText("settings.sourceControl.refreshBranches.error"));
      }
    };
    const onSelectSshKeyType = (value) => {
      const sshKeyType = value;
      if (sshKeyType === sourceControlStore.preferences.keyGeneratorType) {
        return;
      }
      sourceControlStore.preferences.keyGeneratorType = sshKeyType;
    };
    return (_ctx, _cache) => {
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_callout = N8nCallout;
      const _component_n8n_form_input = N8nFormInput;
      const _component_n8n_button = N8nButton;
      const _component_n8n_notice = N8nNotice;
      const _component_n8n_tooltip = N8nTooltip;
      const _component_n8n_checkbox = N8nCheckbox;
      const _component_n8n_color_picker = N8nColorPicker;
      const _component_n8n_action_box = N8nActionBox;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_n8n_heading, {
          size: "2xlarge",
          tag: "h1"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.title")), 1)
          ]),
          _: 1
        }),
        unref(sourceControlStore).isEnterpriseSourceControlEnabled ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(_component_n8n_callout, {
            theme: "secondary",
            icon: "info",
            class: "mt-2xl mb-l"
          }, {
            default: withCtx(() => [
              createVNode(unref(I18nT), {
                keypath: "settings.sourceControl.description",
                tag: "span",
                scope: "global"
              }, {
                link: withCtx(() => [
                  createBaseVNode("a", {
                    href: unref(locale).baseText("settings.sourceControl.docs.url"),
                    target: "_blank"
                  }, toDisplayString(unref(locale).baseText("settings.sourceControl.description.link")), 9, _hoisted_2)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_n8n_heading, {
            size: "xlarge",
            tag: "h2",
            class: "mb-s"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.gitConfig")), 1)
            ]),
            _: 1
          }),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.group)
          }, [
            createBaseVNode("label", _hoisted_3, toDisplayString(unref(locale).baseText("settings.sourceControl.repoUrl")), 1),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.groupFlex)
            }, [
              createVNode(_component_n8n_form_input, {
                id: "repoUrl",
                modelValue: unref(sourceControlStore).preferences.repositoryUrl,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(sourceControlStore).preferences.repositoryUrl = $event),
                label: "",
                class: "ml-0",
                name: "repoUrl",
                "validate-on-blur": "",
                "validation-rules": repoUrlValidationRules,
                disabled: isConnected.value,
                placeholder: unref(locale).baseText("settings.sourceControl.repoUrlPlaceholder"),
                onValidate: _cache[1] || (_cache[1] = (value) => onValidate("repoUrl", value))
              }, null, 8, ["modelValue", "disabled", "placeholder"]),
              isConnected.value ? (openBlock(), createBlock(_component_n8n_button, {
                key: 0,
                class: normalizeClass(_ctx.$style.disconnectButton),
                type: "tertiary",
                size: "large",
                icon: "trash-2",
                "data-test-id": "source-control-disconnect-button",
                onClick: onDisconnect
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.disconnect")), 1)
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true)
            ], 2)
          ], 2),
          unref(sourceControlStore).preferences.publicKey ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.group)
          }, [
            createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.sshKey")), 1),
            createBaseVNode("div", {
              class: normalizeClass({ [_ctx.$style.sshInput]: !isConnected.value })
            }, [
              !isConnected.value ? (openBlock(), createBlock(_component_n8n_form_input, {
                key: 0,
                id: "keyGeneratorType",
                class: normalizeClass(_ctx.$style.sshKeyTypeSelect),
                label: "",
                type: "select",
                name: "keyGeneratorType",
                "data-test-id": "source-control-ssh-key-type-select",
                "validate-on-blur": "",
                "validation-rules": keyGeneratorTypeValidationRules,
                options: unref(sourceControlStore).sshKeyTypesWithLabel,
                "model-value": unref(sourceControlStore).preferences.keyGeneratorType,
                onValidate: _cache[2] || (_cache[2] = (value) => onValidate("keyGeneratorType", value)),
                "onUpdate:modelValue": onSelectSshKeyType
              }, null, 8, ["class", "options", "model-value"])) : createCommentVNode("", true),
              createVNode(CopyInput, {
                class: normalizeClass(_ctx.$style.copyInput),
                collapse: "",
                size: "medium",
                value: unref(sourceControlStore).preferences.publicKey,
                "copy-button-text": unref(locale).baseText("generic.clickToCopy")
              }, null, 8, ["class", "value", "copy-button-text"]),
              !isConnected.value ? (openBlock(), createBlock(_component_n8n_button, {
                key: 1,
                size: "large",
                type: "tertiary",
                icon: "refresh-cw",
                "data-test-id": "source-control-refresh-ssh-key-button",
                onClick: refreshSshKey
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.refreshSshKey")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 2),
            createVNode(_component_n8n_notice, {
              type: "info",
              class: "mt-s"
            }, {
              default: withCtx(() => [
                createVNode(unref(I18nT), {
                  keypath: "settings.sourceControl.sshKeyDescription",
                  tag: "span",
                  scope: "global"
                }, {
                  link: withCtx(() => [
                    createBaseVNode("a", {
                      href: unref(locale).baseText("settings.sourceControl.docs.setup.ssh.url"),
                      target: "_blank"
                    }, toDisplayString(unref(locale).baseText("settings.sourceControl.sshKeyDescriptionLink")), 9, _hoisted_4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 2)) : createCommentVNode("", true),
          !isConnected.value ? (openBlock(), createBlock(_component_n8n_button, {
            key: 1,
            size: "large",
            disabled: !validForConnection.value,
            class: normalizeClass(_ctx.$style.connect),
            "data-test-id": "source-control-connect-button",
            onClick: onConnect
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.connect")), 1)
            ]),
            _: 1
          }, 8, ["disabled", "class"])) : createCommentVNode("", true),
          isConnected.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              _cache[6] || (_cache[6] = createBaseVNode("hr", null, null, -1)),
              createVNode(_component_n8n_heading, {
                size: "xlarge",
                tag: "h2",
                class: "mb-s"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.instanceSettings")), 1)
                ]),
                _: 1
              }),
              createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.branches")), 1),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.branchSelection)
              }, [
                createVNode(_component_n8n_form_input, {
                  id: "branchName",
                  label: "",
                  type: "select",
                  name: "branchName",
                  class: "mb-s",
                  "data-test-id": "source-control-branch-select",
                  "validate-on-blur": "",
                  "validation-rules": branchNameValidationRules,
                  options: branchNameOptions.value,
                  "model-value": unref(sourceControlStore).preferences.branchName,
                  onValidate: _cache[3] || (_cache[3] = (value) => onValidate("branchName", value)),
                  "onUpdate:modelValue": onSelect
                }, null, 8, ["options", "model-value"]),
                createVNode(_component_n8n_tooltip, { placement: "top" }, {
                  content: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(unref(locale).baseText("settings.sourceControl.refreshBranches.tooltip")), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_n8n_button, {
                      size: "small",
                      type: "tertiary",
                      icon: "refresh-cw",
                      square: "",
                      class: normalizeClass(_ctx.$style.refreshBranches),
                      "data-test-id": "source-control-refresh-branches-button",
                      onClick: refreshBranches2
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                })
              ], 2),
              createVNode(_component_n8n_checkbox, {
                modelValue: unref(sourceControlStore).preferences.branchReadOnly,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(sourceControlStore).preferences.branchReadOnly = $event),
                class: normalizeClass(_ctx.$style.readOnly)
              }, {
                default: withCtx(() => [
                  createVNode(unref(I18nT), {
                    keypath: "settings.sourceControl.protected",
                    tag: "span",
                    scope: "global"
                  }, {
                    bold: withCtx(() => [
                      createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("settings.sourceControl.protected.bold")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.color")), 1),
              createBaseVNode("div", null, [
                createVNode(_component_n8n_color_picker, {
                  modelValue: unref(sourceControlStore).preferences.branchColor,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(sourceControlStore).preferences.branchColor = $event),
                  size: "small"
                }, null, 8, ["modelValue"])
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([_ctx.$style.group, "pt-s"])
            }, [
              createVNode(_component_n8n_button, {
                size: "large",
                disabled: !unref(sourceControlStore).preferences.branchName,
                "data-test-id": "source-control-save-settings-button",
                onClick: onSave
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.save")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ], 2)
          ])) : createCommentVNode("", true)
        ])) : (openBlock(), createBlock(_component_n8n_action_box, {
          key: 1,
          "data-test-id": "source-control-content-unlicensed",
          class: normalizeClass(_ctx.$style.actionBox),
          description: unref(locale).baseText("settings.sourceControl.actionBox.description"),
          "button-text": unref(locale).baseText("settings.sourceControl.actionBox.buttonText"),
          "onClick:button": goToUpgrade
        }, {
          heading: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.title")), 1)
          ]),
          description: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.description")) + " ", 1),
            createBaseVNode("a", {
              href: unref(locale).baseText("settings.sourceControl.docs.url"),
              target: "_blank"
            }, toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.description.link")), 9, _hoisted_6)
          ]),
          _: 1
        }, 8, ["class", "description", "button-text"]))
      ]);
    };
  }
});
const group = "_group_1thng_123";
const readOnly = "_readOnly_1thng_144";
const groupFlex = "_groupFlex_1thng_148";
const connect = "_connect_1thng_162";
const disconnectButton = "_disconnectButton_1thng_166";
const actionBox = "_actionBox_1thng_171";
const sshInput = "_sshInput_1thng_175";
const copyInput = "_copyInput_1thng_186";
const sshKeyTypeSelect = "_sshKeyTypeSelect_1thng_190";
const branchSelection = "_branchSelection_1thng_198";
const refreshBranches = "_refreshBranches_1thng_207";
const style0 = {
  group,
  readOnly,
  groupFlex,
  connect,
  disconnectButton,
  actionBox,
  sshInput,
  copyInput,
  sshKeyTypeSelect,
  branchSelection,
  refreshBranches
};
const cssModules = {
  "$style": style0
};
const SettingsSourceControl = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsSourceControl as default
};

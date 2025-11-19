;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./useClipboard-legacy-DdtOZJuB.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./CopyInput-legacy-1gKnXvth.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, reactive, toDisplayString, createBlock, onMounted, normalizeClass, watch, withCtx, openBlock, createTextVNode, createBaseVNode, I18nT, useI18n, N8nFormInput_default, N8nActionBox_default, N8nNotice_default, N8nCallout_default, N8nCheckbox_default, N8nColorPicker_default, N8nButton_default, N8nHeading_default, N8nTooltip_default, __plugin_vue_export_helper_default, useMessage, useSourceControlStore, useDocumentTitle, useLoadingService, useToast, MODAL_CONFIRM, usePageRedirectionHelper, CopyInput_default, __vite_style__, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, SettingsSourceControl_vue_vue_type_script_setup_true_lang_default, group, readOnly, groupFlex, connect, disconnectButton, actionBox, sshInput, copyInput, sshKeyTypeSelect, branchSelection, refreshBranches, SettingsSourceControl_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsSourceControl_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nFormInput_default = _srcLegacy007Js.B;
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nNotice_default = _srcLegacy007Js.E;
        N8nCallout_default = _srcLegacy007Js.Fn;
        N8nCheckbox_default = _srcLegacy007Js.J;
        N8nColorPicker_default = _srcLegacy007Js.K;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nTooltip_default = _srcLegacy007Js.vt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useLoadingService = _useTelemetryLegacy00FJs.Wn;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_useClipboardLegacy01nJs) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_CopyInputLegacy01NJs) {
        CopyInput_default = _CopyInputLegacy01NJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._group_1jvj3_123 {\n  padding: 0 0 var(--spacing--sm);\n  width: 100%;\n  display: block;\n}\n._group_1jvj3_123 hr {\n  margin: 0 0 var(--spacing--xl);\n  border: 1px solid var(--color--foreground--tint-1);\n}\n._group_1jvj3_123 label {\n  display: inline-block;\n  padding: 0 0 var(--spacing--2xs);\n  font-size: var(--font-size--sm);\n}\n._group_1jvj3_123 small {\n  display: inline-block;\n  padding: var(--spacing--2xs) 0 0;\n  font-size: var(--font-size--2xs);\n  color: var(--color--text--tint-1);\n}\n._readOnly_1jvj3_144 span {\n  font-size: var(--font-size--sm) !important;\n}\n._groupFlex_1jvj3_148 {\n  display: flex;\n  align-items: flex-start;\n}\n._groupFlex_1jvj3_148 > div {\n  flex: 1;\n}\n._groupFlex_1jvj3_148 > div:last-child {\n  margin-left: var(--spacing--2xs);\n}\n._groupFlex_1jvj3_148 input {\n  width: 100%;\n}\n._connect_1jvj3_162 {\n  margin: calc(var(--spacing--2xs) * -1) 0 var(--spacing--2xs);\n}\n._disconnectButton_1jvj3_166 {\n  margin: 0 0 0 var(--spacing--2xs);\n  height: 40px;\n}\n._actionBox_1jvj3_171 {\n  margin: var(--spacing--2xl) 0 0;\n}\n._sshInput_1jvj3_175 {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n._sshInput_1jvj3_175 > div {\n  flex: 1 1 auto;\n}\n._sshInput_1jvj3_175 > button {\n  height: 42px;\n}\n._sshInput_1jvj3_175 ._copyInput_1jvj3_186 {\n  margin: 0 var(--spacing--2xs);\n}\n._sshKeyTypeSelect_1jvj3_190 {\n  min-width: 120px;\n}\n._copyInput_1jvj3_186 {\n  overflow: auto;\n}\n._branchSelection_1jvj3_198 {\n  display: flex;\n}\n._branchSelection_1jvj3_198 > div:first-child {\n  flex: 1;\n}\n._branchSelection_1jvj3_198 > div:first-child input {\n  height: 36px;\n}\n._branchSelection_1jvj3_198 button._refreshBranches_1jvj3_207 {\n  height: 36px;\n  width: 36px;\n  margin-left: var(--spacing--xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/integrations/sourceControl.ee/views/SettingsSourceControl.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0,
          "data-test-id": "source-control-content-licensed"
        };
        _hoisted_2 = ["href"];
        _hoisted_3 = {
          for: "connectionType"
        };
        _hoisted_4 = {
          for: "repoUrl"
        };
        _hoisted_5 = {
          for: "httpsUsername"
        };
        _hoisted_6 = {
          for: "httpsPassword"
        };
        _hoisted_7 = ["href"];
        _hoisted_8 = {
          key: 5,
          "data-test-id": "source-control-connected-content"
        };
        _hoisted_9 = ["href"];
        SettingsSourceControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
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
            const connectionType = ref("ssh");
            const httpsUsername = ref("");
            const httpsPassword = ref("");
            const branchNameOptions = computed(() => sourceControlStore.preferences.branches.map(branch => ({
              value: branch,
              label: branch
            })));
            const connectionTypeOptions = [{
              value: "ssh",
              label: "SSH"
            }, {
              value: "https",
              label: "HTTPS"
            }];
            const onConnect = async () => {
              loadingService.startLoading();
              loadingService.setLoadingText(locale.baseText("settings.sourceControl.loading.connecting"));
              try {
                const connectionData = {
                  repositoryUrl: sourceControlStore.preferences.repositoryUrl,
                  connectionType: connectionType.value
                };
                if (connectionType.value === "https") {
                  connectionData.httpsUsername = httpsUsername.value;
                  connectionData.httpsPassword = httpsPassword.value;
                }
                await sourceControlStore.savePreferences(connectionData);
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
                if ((await message.confirm(locale.baseText("settings.sourceControl.modals.disconnect.message"), locale.baseText("settings.sourceControl.modals.disconnect.title"), {
                  confirmButtonText: locale.baseText("settings.sourceControl.modals.disconnect.confirm"),
                  cancelButtonText: locale.baseText("settings.sourceControl.modals.disconnect.cancel")
                })) === "confirm") {
                  loadingService.startLoading();
                  await sourceControlStore.disconnect(true);
                  isConnected.value = false;
                  httpsUsername.value = "";
                  httpsPassword.value = "";
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
                toast.showError(error, locale.baseText("settings.sourceControl.saved.error"));
              }
              loadingService.stopLoading();
            };
            const onSelect = b => {
              if (b === sourceControlStore.preferences.branchName) return;
              sourceControlStore.preferences.branchName = b;
            };
            const goToUpgrade = () => {
              pageRedirectionHelper.goToUpgrade("source-control", "upgrade-source-control");
            };
            const initialize = async () => {
              await sourceControlStore.getPreferences();
              if (sourceControlStore.preferences.connected) {
                isConnected.value = true;
                connectionType.value = sourceControlStore.preferences.connectionType || "ssh";
                sourceControlStore.getBranches();
              }
            };
            onMounted(async () => {
              documentTitle.set(locale.baseText("settings.sourceControl.title"));
              if (!sourceControlStore.isEnterpriseSourceControlEnabled) return;
              await initialize();
            });
            const formValidationStatus = reactive({
              repoUrl: false,
              keyGeneratorType: false,
              httpsUsername: false,
              httpsPassword: false
            });
            function onValidate(key, value) {
              formValidationStatus[key] = value;
            }
            const repoUrlValidationRules = computed(() => {
              const baseRules = [{
                name: "REQUIRED"
              }];
              if (connectionType.value === "ssh") baseRules.push({
                name: "MATCH_REGEX",
                config: {
                  regex: /^(?:git@|ssh:\/\/git@|[\w-]+@)(?:[\w.-]+|\[[0-9a-fA-F:]+])(?::\d+)?[:\/][\w\-~.]+(?:\/[\w\-~.]+)*(?:\.git)?(?:\/.*)?$/,
                  message: locale.baseText("settings.sourceControl.repoUrlInvalid")
                }
              });else baseRules.push({
                name: "MATCH_REGEX",
                config: {
                  regex: /^https:\/\/.+$/,
                  message: locale.baseText("settings.sourceControl.enterValidHttpsUrl")
                }
              });
              return baseRules;
            });
            const keyGeneratorTypeValidationRules = [{
              name: "REQUIRED"
            }];
            const httpsCredentialValidationRules = [{
              name: "REQUIRED"
            }];
            const validForConnection = computed(() => {
              if (connectionType.value === "ssh") return formValidationStatus.repoUrl;else return formValidationStatus.repoUrl && formValidationStatus.httpsUsername && formValidationStatus.httpsPassword;
            });
            const branchNameValidationRules = [{
              name: "REQUIRED"
            }];
            async function refreshSshKey() {
              try {
                if ((await message.confirm(locale.baseText("settings.sourceControl.modals.refreshSshKey.message"), locale.baseText("settings.sourceControl.modals.refreshSshKey.title"), {
                  confirmButtonText: locale.baseText("settings.sourceControl.modals.refreshSshKey.confirm"),
                  cancelButtonText: locale.baseText("settings.sourceControl.modals.refreshSshKey.cancel")
                })) === "confirm") {
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
            const refreshBranches$1 = async () => {
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
            const onSelectSshKeyType = value => {
              const sshKeyType = value;
              if (sshKeyType === sourceControlStore.preferences.keyGeneratorType) return;
              sourceControlStore.preferences.keyGeneratorType = sshKeyType;
            };
            watch(connectionType, () => {
              formValidationStatus.repoUrl = false;
              formValidationStatus.httpsUsername = false;
              formValidationStatus.httpsPassword = false;
              if (!isConnected.value) sourceControlStore.preferences.repositoryUrl = "";
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge",
                tag: "h1"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.title")), 1)]),
                _: 1
              }), unref(sourceControlStore).isEnterpriseSourceControlEnabled ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nCallout_default), {
                theme: "secondary",
                icon: "info",
                class: "mt-2xl mb-l"
              }, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "settings.sourceControl.description",
                  tag: "span",
                  scope: "global"
                }, {
                  link: withCtx(() => [createBaseVNode("a", {
                    href: unref(locale).baseText("settings.sourceControl.docs.url"),
                    target: "_blank"
                  }, toDisplayString(unref(locale).baseText("settings.sourceControl.description.link")), 9, _hoisted_2)]),
                  _: 1
                })]),
                _: 1
              }), createVNode(unref(N8nHeading_default), {
                size: "xlarge",
                tag: "h2",
                class: "mb-s"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.gitConfig")), 1)]),
                _: 1
              }), !isConnected.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", _hoisted_3, toDisplayString(unref(locale).baseText("settings.sourceControl.connectionType")), 1), createVNode(unref(N8nFormInput_default), {
                id: "connectionType",
                modelValue: connectionType.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => connectionType.value = $event),
                label: "",
                type: "select",
                name: "connectionType",
                options: connectionTypeOptions,
                "data-test-id": "source-control-connection-type-select"
              }, null, 8, ["modelValue"])], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", _hoisted_4, toDisplayString(connectionType.value === "ssh" ? unref(locale).baseText("settings.sourceControl.sshRepoUrl") : unref(locale).baseText("settings.sourceControl.httpsRepoUrl")), 1), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.groupFlex)
              }, [createVNode(unref(N8nFormInput_default), {
                id: "repoUrl",
                modelValue: unref(sourceControlStore).preferences.repositoryUrl,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => unref(sourceControlStore).preferences.repositoryUrl = $event),
                label: "",
                class: "ml-0",
                name: "repoUrl",
                "validate-on-blur": "",
                "validation-rules": repoUrlValidationRules.value,
                disabled: isConnected.value,
                placeholder: connectionType.value === "ssh" ? unref(locale).baseText("settings.sourceControl.sshRepoUrlPlaceholder") : unref(locale).baseText("settings.sourceControl.httpsRepoUrlPlaceholder"),
                onValidate: _cache[2] || (_cache[2] = value => onValidate("repoUrl", value))
              }, null, 8, ["modelValue", "validation-rules", "disabled", "placeholder"]), isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.disconnectButton),
                type: "tertiary",
                size: "large",
                icon: "trash-2",
                "data-test-id": "source-control-disconnect-button",
                onClick: onDisconnect
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.disconnect")), 1)]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true)], 2), !isConnected.value && connectionType.value === "ssh" ? (openBlock(), createBlock(unref(N8nNotice_default), {
                key: 0,
                type: "info",
                class: "mt-s"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.sshFormatNotice")), 1)]),
                _: 1
              })) : createCommentVNode("", true), !isConnected.value && connectionType.value === "https" ? (openBlock(), createBlock(unref(N8nNotice_default), {
                key: 1,
                type: "info",
                class: "mt-s"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.httpsFormatNotice")), 1)]),
                _: 1
              })) : createCommentVNode("", true)], 2), connectionType.value === "https" && !isConnected.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", _hoisted_5, toDisplayString(unref(locale).baseText("settings.sourceControl.httpsUsername")), 1), createVNode(unref(N8nFormInput_default), {
                id: "httpsUsername",
                modelValue: httpsUsername.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => httpsUsername.value = $event),
                label: "",
                name: "httpsUsername",
                type: "text",
                "validate-on-blur": "",
                "validation-rules": httpsCredentialValidationRules,
                placeholder: unref(locale).baseText("settings.sourceControl.httpsUsernamePlaceholder"),
                onValidate: _cache[4] || (_cache[4] = value => onValidate("httpsUsername", value))
              }, null, 8, ["modelValue", "placeholder"])], 2)) : createCommentVNode("", true), connectionType.value === "https" && !isConnected.value ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", _hoisted_6, toDisplayString(unref(locale).baseText("settings.sourceControl.httpsPersonalAccessToken")), 1), createVNode(unref(N8nFormInput_default), {
                id: "httpsPassword",
                modelValue: httpsPassword.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => httpsPassword.value = $event),
                label: "",
                name: "httpsPassword",
                type: "password",
                "validate-on-blur": "",
                "validation-rules": httpsCredentialValidationRules,
                placeholder: unref(locale).baseText("settings.sourceControl.httpsPersonalAccessTokenPlaceholder"),
                onValidate: _cache[6] || (_cache[6] = value => onValidate("httpsPassword", value))
              }, null, 8, ["modelValue", "placeholder"]), createVNode(unref(N8nNotice_default), {
                type: "warning",
                class: "mt-s"
              }, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "settings.sourceControl.httpsWarningNotice",
                  tag: "span",
                  scope: "global"
                }, {
                  strong: withCtx(() => [createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("settings.sourceControl.httpsWarningNotice.strong")), 1)]),
                  repo: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("code", null, "repo", -1)])),
                  publicRepo: withCtx(() => _cache[12] || (_cache[12] = [createBaseVNode("code", null, "public_repo", -1)])),
                  _: 1
                })]),
                _: 1
              })], 2)) : createCommentVNode("", true), connectionType.value === "ssh" && unref(sourceControlStore).preferences.publicKey ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.sshKey")), 1), createBaseVNode("div", {
                class: normalizeClass({
                  [_ctx.$style.sshInput]: !isConnected.value
                })
              }, [!isConnected.value ? (openBlock(), createBlock(unref(N8nFormInput_default), {
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
                onValidate: _cache[7] || (_cache[7] = value => onValidate("keyGeneratorType", value)),
                "onUpdate:modelValue": onSelectSshKeyType
              }, null, 8, ["class", "options", "model-value"])) : createCommentVNode("", true), createVNode(CopyInput_default, {
                class: normalizeClass(_ctx.$style.copyInput),
                collapse: "",
                size: "medium",
                value: unref(sourceControlStore).preferences.publicKey,
                "copy-button-text": unref(locale).baseText("generic.clickToCopy")
              }, null, 8, ["class", "value", "copy-button-text"]), !isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                size: "large",
                type: "tertiary",
                icon: "refresh-cw",
                "data-test-id": "source-control-refresh-ssh-key-button",
                onClick: refreshSshKey
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.refreshSshKey")), 1)]),
                _: 1
              })) : createCommentVNode("", true)], 2), createVNode(unref(N8nNotice_default), {
                type: "info",
                class: "mt-s"
              }, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "settings.sourceControl.sshKeyDescription",
                  tag: "span",
                  scope: "global"
                }, {
                  link: withCtx(() => [createBaseVNode("a", {
                    href: unref(locale).baseText("settings.sourceControl.docs.setup.ssh.url"),
                    target: "_blank"
                  }, toDisplayString(unref(locale).baseText("settings.sourceControl.sshKeyDescriptionLink")), 9, _hoisted_7)]),
                  _: 1
                })]),
                _: 1
              })], 2)) : createCommentVNode("", true), !isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 4,
                size: "large",
                disabled: !validForConnection.value,
                class: normalizeClass(_ctx.$style.connect),
                "data-test-id": "source-control-connect-button",
                onClick: onConnect
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.connect")), 1)]),
                _: 1
              }, 8, ["disabled", "class"])) : createCommentVNode("", true), isConnected.value ? (openBlock(), createElementBlock("div", _hoisted_8, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[13] || (_cache[13] = createBaseVNode("hr", null, null, -1)), createVNode(unref(N8nHeading_default), {
                size: "xlarge",
                tag: "h2",
                class: "mb-s"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.instanceSettings")), 1)]),
                _: 1
              }), createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.branches")), 1), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.branchSelection)
              }, [createVNode(unref(N8nFormInput_default), {
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
                onValidate: _cache[8] || (_cache[8] = value => onValidate("branchName", value)),
                "onUpdate:modelValue": onSelect
              }, null, 8, ["options", "model-value"]), createVNode(unref(N8nTooltip_default), {
                placement: "top"
              }, {
                content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("settings.sourceControl.refreshBranches.tooltip")), 1)]),
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  size: "small",
                  type: "tertiary",
                  icon: "refresh-cw",
                  square: "",
                  class: normalizeClass(_ctx.$style.refreshBranches),
                  "data-test-id": "source-control-refresh-branches-button",
                  onClick: refreshBranches$1
                }, null, 8, ["class"])]),
                _: 1
              })], 2), createVNode(unref(N8nCheckbox_default), {
                modelValue: unref(sourceControlStore).preferences.branchReadOnly,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => unref(sourceControlStore).preferences.branchReadOnly = $event),
                class: normalizeClass(_ctx.$style.readOnly)
              }, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "settings.sourceControl.protected",
                  tag: "span",
                  scope: "global"
                }, {
                  bold: withCtx(() => [createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("settings.sourceControl.protected.bold")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue", "class"])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.color")), 1), createBaseVNode("div", null, [createVNode(unref(N8nColorPicker_default), {
                modelValue: unref(sourceControlStore).preferences.branchColor,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => unref(sourceControlStore).preferences.branchColor = $event),
                size: "small"
              }, null, 8, ["modelValue"])])], 2), createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.group, "pt-s"])
              }, [createVNode(unref(N8nButton_default), {
                size: "large",
                disabled: !unref(sourceControlStore).preferences.branchName,
                "data-test-id": "source-control-save-settings-button",
                onClick: onSave
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.save")), 1)]),
                _: 1
              }, 8, ["disabled"])], 2)])) : createCommentVNode("", true)])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 1,
                "data-test-id": "source-control-content-unlicensed",
                class: normalizeClass(_ctx.$style.actionBox),
                description: unref(locale).baseText("settings.sourceControl.actionBox.description"),
                "button-text": unref(locale).baseText("settings.sourceControl.actionBox.buttonText"),
                "onClick:button": goToUpgrade
              }, {
                heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.title")), 1)]),
                description: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.description")) + " ", 1), createBaseVNode("a", {
                  href: unref(locale).baseText("settings.sourceControl.docs.url"),
                  target: "_blank"
                }, toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.description.link")), 9, _hoisted_9)]),
                _: 1
              }, 8, ["class", "description", "button-text"]))]);
            };
          }
        }); //#endregion
        //#region src/features/integrations/sourceControl.ee/views/SettingsSourceControl.vue?vue&type=style&index=0&lang.module.scss
        group = "_group_1jvj3_123";
        readOnly = "_readOnly_1jvj3_144";
        groupFlex = "_groupFlex_1jvj3_148";
        connect = "_connect_1jvj3_162";
        disconnectButton = "_disconnectButton_1jvj3_166";
        actionBox = "_actionBox_1jvj3_171";
        sshInput = "_sshInput_1jvj3_175";
        copyInput = "_copyInput_1jvj3_186";
        sshKeyTypeSelect = "_sshKeyTypeSelect_1jvj3_190";
        branchSelection = "_branchSelection_1jvj3_198";
        refreshBranches = "_refreshBranches_1jvj3_207";
        SettingsSourceControl_vue_vue_type_style_index_0_lang_module_default = {
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
        }; //#endregion
        //#region src/features/integrations/sourceControl.ee/views/SettingsSourceControl.vue
        cssModules = {
          "$style": SettingsSourceControl_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsSourceControl_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();
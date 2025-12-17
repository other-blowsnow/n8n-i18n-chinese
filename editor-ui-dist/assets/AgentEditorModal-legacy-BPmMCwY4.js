;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./src-legacy-Bos09xer.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BIn0keUI.js", "./icon-legacy-CIK-lB61.js", "./overlay-legacy-B0b_K0kO.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-BdVFquy4.js", "./dialog-legacy-CiZVEV8k.js", "./useTelemetry-legacy-CqPMRSSw.js", "./useToast-legacy-BExpsCTi.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-7i-p8Q83.js", "./merge-legacy-y9V-HyOw.js", "./_baseOrderBy-legacy-BktlFW96.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-KtnINwEe.js", "./useExternalHooks-legacy-DAimL5by.js", "./useStyles-legacy-E8NPEyeD.js", "./retry-legacy-CTwsGM7o.js", "./nodeIcon-legacy-DNazPV7p.js", "./NodeIcon-legacy-3DGovIp_.js", "./Modal-legacy-BVO-qy4P.js", "./CredentialIcon-legacy-BNm3IfGT.js", "./constants-legacy-DjFSod4r.js", "./chat.store-legacy-zhhYNgMQ.js", "./fileUtils-legacy-BbiGYBne.js", "./ToolsSelector-legacy-BHQZrLpR.js", "./ChatAgentAvatar-legacy-DvqZsR0e.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, toValue, watch, withCtx, openBlock, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nButton_default, N8nSpinner_default, N8nInputLabel_default, N8nInput_default, N8nHeading_default, __plugin_vue_export_helper_default, createEventBus, useMessage, useToast, assert, Modal_default, isLlmProviderModel, useChatStore, ModelSelector_default, ToolsSelector_default, __vite_style__, AgentEditorModal_vue_vue_type_script_setup_true_lang_default, spinner, header, content, input, row, footer, AgentEditorModal_vue_vue_type_style_index_0_lang_module_default, cssModules, AgentEditorModal_default;
    //#region src/features/ai/chatHub/composables/useCustomAgent.ts
    function useCustomAgent(agentId) {
      const store = useChatStore();
      const agent = ref();
      const toast = useToast();
      watch(() => toValue(agentId), async id => {
        if (!id) {
          agent.value = void 0;
          return;
        }
        try {
          agent.value = await store.fetchCustomAgent(id);
        } catch (error) {
          toast.showError(error, "Failed to load agent");
        }
      }, {
        immediate: true
      });
      return agent;
    }

    //#endregion
    //#region src/features/ai/chatHub/components/AgentEditorModal.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        toValue = _vueRuntimeEsmBundlerLegacy003Js.Ut;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nSpinner_default = _srcLegacy007Js.Un;
        N8nInputLabel_default = _srcLegacy007Js.X;
        N8nInput_default = _srcLegacy007Js.yt;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_dialogLegacy00DJs) {}, function (_useTelemetryLegacy00HJs) {}, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {}, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {
        assert = _baseOrderByLegacy00ZJs.g;
      }, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_retryLegacy01lJs) {}, function (_nodeIconLegacy01vJs) {}, function (_NodeIconLegacy01FJs) {}, function (_ModalLegacy01TJs) {
        Modal_default = _ModalLegacy01TJs.t;
      }, function (_CredentialIconLegacy02lJs) {}, function (_constantsLegacy03lJs) {}, function (_chatStoreLegacy03nJs) {
        isLlmProviderModel = _chatStoreLegacy03nJs.l;
        useChatStore = _chatStoreLegacy03nJs.t;
      }, function (_fileUtilsLegacy03pJs) {}, function (_ToolsSelectorLegacy04dJs) {
        ModelSelector_default = _ToolsSelectorLegacy04dJs.n;
        ToolsSelector_default = _ToolsSelectorLegacy04dJs.t;
      }, function (_ChatAgentAvatarLegacy055Js) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._spinner_r4k5u_123 {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n._header_r4k5u_130 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing--s);\n  padding-right: var(--spacing--xl);\n}\n._content_r4k5u_138 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--md);\n  padding: var(--spacing--sm) 0;\n}\n._input_r4k5u_145 {\n  width: 100%;\n}\n._row_r4k5u_149 {\n  display: flex;\n  flex-direction: row;\n}\n._footer_r4k5u_154 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        AgentEditorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "AgentEditorModal",
          props: {
            modalName: {},
            data: {}
          },
          setup(__props) {
            const props = __props;
            const chatStore = useChatStore();
            const i18n = useI18n();
            const toast = useToast();
            const message = useMessage();
            const modalBus = ref(createEventBus());
            const customAgent = useCustomAgent(props.data.agentId);
            const name = ref("");
            const description = ref("");
            const systemPrompt = ref("");
            const selectedModel = ref(null);
            const isSaving = ref(false);
            const isDeleting = ref(false);
            const tools = ref([]);
            const agentSelectedCredentials = ref({});
            const credentialIdForSelectedModelProvider = computed(() => selectedModel.value && agentMergedCredentials.value[selectedModel.value.provider]);
            const selectedAgent = computed(() => selectedModel.value && chatStore.getAgent(selectedModel.value, selectedModel.value.model));
            const isEditMode = computed(() => !!props.data.agentId);
            const isLoadingAgent = computed(() => isEditMode.value && !customAgent.value);
            const title = computed(() => isEditMode.value ? i18n.baseText("chatHub.agent.editor.title.edit") : i18n.baseText("chatHub.agent.editor.title.new"));
            const saveButtonLabel = computed(() => isSaving.value ? i18n.baseText("chatHub.agent.editor.saving") : i18n.baseText("chatHub.agent.editor.save"));
            const isValid = computed(() => {
              return name.value.trim().length > 0 && systemPrompt.value.trim().length > 0 && selectedModel.value !== null && !!credentialIdForSelectedModelProvider.value;
            });
            const agentMergedCredentials = computed(() => {
              return {
                ...props.data.credentials,
                ...agentSelectedCredentials.value
              };
            });
            watch(customAgent, agent => {
              if (!agent) return;
              name.value = agent.name;
              description.value = agent.description ?? "";
              systemPrompt.value = agent.systemPrompt;
              selectedModel.value = {
                provider: agent.provider,
                model: agent.model
              };
              tools.value = agent.tools || [];
              if (agent.credentialId) agentSelectedCredentials.value[agent.provider] = agent.credentialId;
            }, {
              immediate: true
            });
            function onCredentialSelected(provider, credentialId) {
              agentSelectedCredentials.value = {
                ...agentSelectedCredentials.value,
                [provider]: credentialId
              };
            }
            function onModelChange(agent) {
              assert(isLlmProviderModel(agent.model));
              selectedModel.value = agent.model;
            }
            async function onSave() {
              if (!isValid.value || isSaving.value) return;
              isSaving.value = true;
              try {
                assert(selectedModel.value);
                assert(credentialIdForSelectedModelProvider.value);
                const payload = {
                  name: name.value.trim(),
                  description: description.value.trim() || void 0,
                  systemPrompt: systemPrompt.value.trim(),
                  ...selectedModel.value,
                  credentialId: credentialIdForSelectedModelProvider.value,
                  tools: tools.value
                };
                if (isEditMode.value && props.data.agentId) {
                  await chatStore.updateCustomAgent(props.data.agentId, payload, props.data.credentials);
                  toast.showMessage({
                    title: i18n.baseText("chatHub.agent.editor.success.update"),
                    type: "success"
                  });
                } else {
                  const agent = await chatStore.createCustomAgent(payload, props.data.credentials);
                  props.data.onCreateCustomAgent?.(agent);
                  toast.showMessage({
                    title: i18n.baseText("chatHub.agent.editor.success.create"),
                    type: "success"
                  });
                }
                modalBus.value.emit("close");
              } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "";
                toast.showError(error, i18n.baseText("chatHub.agent.editor.error.save"), errorMessage);
              } finally {
                isSaving.value = false;
              }
            }
            async function onDelete() {
              if (!isEditMode.value || !props.data.agentId || isDeleting.value) return;
              if ((await message.confirm(i18n.baseText("chatHub.agent.editor.delete.confirm.message"), i18n.baseText("chatHub.agent.editor.delete.confirm.title"), {
                confirmButtonText: i18n.baseText("chatHub.agent.editor.delete.confirm.button"),
                cancelButtonText: i18n.baseText("chatHub.agent.editor.delete.cancel.button"),
                type: "warning"
              })) !== "confirm") return;
              isDeleting.value = true;
              try {
                await chatStore.deleteCustomAgent(props.data.agentId, props.data.credentials);
                toast.showMessage({
                  title: i18n.baseText("chatHub.agent.editor.success.delete"),
                  type: "success"
                });
                props.data.onClose?.();
                modalBus.value.emit("close");
              } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "";
                toast.showError(error, i18n.baseText("chatHub.agent.editor.error.delete"), errorMessage);
              } finally {
                isDeleting.value = false;
              }
            }
            function onSelectTools(newTools) {
              tools.value = newTools;
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Modal_default, {
                name: _ctx.modalName,
                "event-bus": modalBus.value,
                width: "600px",
                center: true,
                "max-width": "90%",
                "min-height": "400px"
              }, {
                header: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createVNode(unref(N8nHeading_default), {
                  tag: "h2",
                  size: "large"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
                  _: 1
                }), isEditMode.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 0,
                  type: "secondary",
                  icon: "trash-2",
                  disabled: isDeleting.value,
                  loading: isDeleting.value,
                  onClick: onDelete
                }, null, 8, ["disabled", "loading"])) : createCommentVNode("", true)], 2)]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-name",
                  label: unref(i18n).baseText("chatHub.agent.editor.name.label"),
                  required: true
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    id: "agent-name",
                    modelValue: name.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => name.value = $event),
                    placeholder: unref(i18n).baseText("chatHub.agent.editor.name.placeholder"),
                    maxlength: 128,
                    class: normalizeClass(_ctx.$style.input),
                    disabled: isLoadingAgent.value
                  }, null, 8, ["modelValue", "placeholder", "class", "disabled"])]),
                  _: 1
                }, 8, ["label"]), createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-description",
                  label: unref(i18n).baseText("chatHub.agent.editor.description.label")
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    id: "agent-description",
                    modelValue: description.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => description.value = $event),
                    type: "textarea",
                    placeholder: unref(i18n).baseText("chatHub.agent.editor.description.placeholder"),
                    maxlength: 512,
                    rows: 3,
                    class: normalizeClass(_ctx.$style.input),
                    disabled: isLoadingAgent.value
                  }, null, 8, ["modelValue", "placeholder", "class", "disabled"])]),
                  _: 1
                }, 8, ["label"]), createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-system-prompt",
                  label: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.label"),
                  required: true
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    id: "agent-system-prompt",
                    modelValue: systemPrompt.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => systemPrompt.value = $event),
                    type: "textarea",
                    placeholder: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.placeholder"),
                    rows: 6,
                    class: normalizeClass(_ctx.$style.input),
                    disabled: isLoadingAgent.value
                  }, null, 8, ["modelValue", "placeholder", "class", "disabled"])]),
                  _: 1
                }, 8, ["label"]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.row)
                }, [createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-model",
                  class: normalizeClass(_ctx.$style.input),
                  label: unref(i18n).baseText("chatHub.agent.editor.model.label"),
                  required: true
                }, {
                  default: withCtx(() => [createVNode(ModelSelector_default, {
                    "selected-agent": selectedAgent.value,
                    "include-custom-agents": false,
                    credentials: agentMergedCredentials.value,
                    disabled: isLoadingAgent.value,
                    "warn-missing-credentials": "",
                    onChange: onModelChange,
                    onSelectCredential: onCredentialSelected
                  }, null, 8, ["selected-agent", "credentials", "disabled"])]),
                  _: 1
                }, 8, ["class", "label"]), createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-model",
                  class: normalizeClass(_ctx.$style.input),
                  label: unref(i18n).baseText("chatHub.agent.editor.tools.label"),
                  required: false
                }, {
                  default: withCtx(() => [createBaseVNode("div", null, [createVNode(ToolsSelector_default, {
                    disabled: isLoadingAgent.value,
                    selected: tools.value,
                    onSelect: onSelectTools
                  }, null, 8, ["disabled", "selected"])])]),
                  _: 1
                }, 8, ["class", "label"])], 2), isLoadingAgent.value ? (openBlock(), createBlock(unref(N8nSpinner_default), {
                  key: 0,
                  class: normalizeClass(_ctx.$style.spinner),
                  size: "xlarge"
                }, null, 8, ["class"])) : createCommentVNode("", true)], 2)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  onClick: _cache[3] || (_cache[3] = $event => modalBus.value.emit("close"))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  disabled: !isValid.value || isSaving.value,
                  onClick: onSave
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(saveButtonLabel.value), 1)]),
                  _: 1
                }, 8, ["disabled"])], 2)]),
                _: 1
              }, 8, ["name", "event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/AgentEditorModal.vue?vue&type=style&index=0&lang.module.scss
        spinner = "_spinner_r4k5u_123";
        header = "_header_r4k5u_130";
        content = "_content_r4k5u_138";
        input = "_input_r4k5u_145";
        row = "_row_r4k5u_149";
        footer = "_footer_r4k5u_154";
        AgentEditorModal_vue_vue_type_style_index_0_lang_module_default = {
          spinner,
          header,
          content,
          input,
          row,
          footer
        }; //#endregion
        //#region src/features/ai/chatHub/components/AgentEditorModal.vue
        cssModules = {
          "$style": AgentEditorModal_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", AgentEditorModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(AgentEditorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();
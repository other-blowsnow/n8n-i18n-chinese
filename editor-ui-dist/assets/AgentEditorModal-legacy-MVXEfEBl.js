;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./overlay-legacy-m4tN0qRV.js", "./empty-legacy-CsIOGMHW.js", "./useMessage-legacy-B0itSvLh.js", "./dialog-legacy-NLNFRJF3.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useExternalHooks-legacy-DgS1u46v.js", "./useStyles-legacy-DnD2qvTK.js", "./retry-legacy-WzzNqxgG.js", "./nodeIcon-legacy-Y3uKJRlj.js", "./NodeIcon-legacy-CDp2SR0v.js", "./Modal-legacy-BUoIu2MX.js", "./CredentialIcon-legacy-CLlljIZ1.js", "./constants-legacy-BrIb7Ao9.js", "./ChatAgentAvatar-legacy-CqWIcerz.js", "./ToolsSelector-legacy-CT3lVoJP.js"], function (_export, _context) {
    "use strict";

    var computed, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, normalizeClass, withCtx, openBlock, createTextVNode, createBaseVNode, useI18n, N8nHeading_default, N8nButton_default, N8nInputLabel_default, N8nInput_default, __plugin_vue_export_helper_default, createEventBus, useMessage, useToast, assert, Modal_default, useChatStore, ModelSelector_default, ToolsSelector_default, __vite_style__, AgentEditorModal_vue_vue_type_script_setup_true_lang_default, content, input, row, footer, footerRight, AgentEditorModal_vue_vue_type_style_index_0_lang_module_default, cssModules, AgentEditorModal_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nHeading_default = _srcLegacy007Js.Fn;
        N8nButton_default = _srcLegacy007Js.Rn;
        N8nInputLabel_default = _srcLegacy007Js.X;
        N8nInput_default = _srcLegacy007Js.wt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_dialogLegacy00BJs) {}, function (_useTelemetryLegacy00FJs) {}, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {
        assert = _useRootStoreLegacy00TJs.m;
      }, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_useExternalHooksLegacy00ZJs) {}, function (_useStylesLegacy00$Js) {}, function (_retryLegacy01fJs) {}, function (_nodeIconLegacy01pJs) {}, function (_NodeIconLegacy01zJs) {}, function (_ModalLegacy01NJs) {
        Modal_default = _ModalLegacy01NJs.t;
      }, function (_CredentialIconLegacy02fJs) {}, function (_constantsLegacy03fJs) {}, function (_ChatAgentAvatarLegacy04PJs) {
        useChatStore = _ChatAgentAvatarLegacy04PJs.n;
      }, function (_ToolsSelectorLegacy04XJs) {
        ModelSelector_default = _ToolsSelectorLegacy04XJs.n;
        ToolsSelector_default = _ToolsSelectorLegacy04XJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._content_f2rvd_123 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--md);\n  padding: var(--spacing--sm) 0;\n}\n._input_f2rvd_130 {\n  width: 100%;\n}\n._row_f2rvd_134 {\n  display: flex;\n  flex-direction: row;\n}\n._footer_f2rvd_139 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n._footerRight_f2rvd_146 {\n  display: flex;\n  gap: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/components/AgentEditorModal.vue?vue&type=script&setup=true&lang.ts
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
            const name = ref("");
            const description = ref("");
            const systemPrompt = ref("");
            const selectedModel = ref(null);
            const isSaving = ref(false);
            const isDeleting = ref(false);
            const tools = ref([]);
            const agentSelectedCredentials = ref({});
            const isEditMode = computed(() => !!props.data.agentId);
            const title = computed(() => isEditMode.value ? i18n.baseText("chatHub.agent.editor.title.edit") : i18n.baseText("chatHub.agent.editor.title.new"));
            const saveButtonLabel = computed(() => isSaving.value ? i18n.baseText("chatHub.agent.editor.saving") : i18n.baseText("chatHub.agent.editor.save"));
            const isValid = computed(() => {
              return name.value.trim().length > 0 && systemPrompt.value.trim().length > 0 && selectedModel.value !== null;
            });
            const agentMergedCredentials = computed(() => {
              return {
                ...props.data.credentials,
                ...agentSelectedCredentials.value
              };
            });
            function loadAgent() {
              const customAgent = chatStore.currentEditingAgent;
              if (!customAgent) return;
              name.value = customAgent.name;
              description.value = customAgent.description ?? "";
              systemPrompt.value = customAgent.systemPrompt;
              selectedModel.value = chatStore.getAgent(customAgent) ?? null;
              tools.value = customAgent.tools || [];
              if (customAgent.credentialId) agentSelectedCredentials.value[customAgent.provider] = customAgent.credentialId;
            }
            onMounted(() => {
              if (props.data.agentId) loadAgent();
            });
            function onCredentialSelected(provider, credentialId) {
              agentSelectedCredentials.value = {
                ...agentSelectedCredentials.value,
                [provider]: credentialId
              };
            }
            function onModelChange(model) {
              selectedModel.value = model;
            }
            async function onSave() {
              if (!isValid.value || isSaving.value) return;
              isSaving.value = true;
              try {
                assert(selectedModel.value);
                const model = "model" in selectedModel.value ? selectedModel.value.model : void 0;
                assert(model);
                assert(model.provider !== "n8n" && model.provider !== "custom-agent");
                const credentialId = agentMergedCredentials.value[model.provider];
                assert(credentialId);
                const payload = {
                  name: name.value.trim(),
                  description: description.value.trim() || void 0,
                  systemPrompt: systemPrompt.value.trim(),
                  ...model,
                  credentialId,
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
                header: withCtx(() => [createVNode(unref(N8nHeading_default), {
                  tag: "h2",
                  size: "large"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
                  _: 1
                })]),
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
                    class: normalizeClass(_ctx.$style.input)
                  }, null, 8, ["modelValue", "placeholder", "class"])]),
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
                    class: normalizeClass(_ctx.$style.input)
                  }, null, 8, ["modelValue", "placeholder", "class"])]),
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
                    class: normalizeClass(_ctx.$style.input)
                  }, null, 8, ["modelValue", "placeholder", "class"])]),
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
                    "selected-agent": selectedModel.value,
                    "include-custom-agents": false,
                    credentials: agentMergedCredentials.value,
                    onChange: onModelChange,
                    onSelectCredential: onCredentialSelected
                  }, null, 8, ["selected-agent", "credentials"])]),
                  _: 1
                }, 8, ["class", "label"]), createVNode(unref(N8nInputLabel_default), {
                  "input-name": "agent-model",
                  class: normalizeClass(_ctx.$style.input),
                  label: unref(i18n).baseText("chatHub.agent.editor.tools.label"),
                  required: false
                }, {
                  default: withCtx(() => [createBaseVNode("div", null, [createVNode(ToolsSelector_default, {
                    disabled: false,
                    selected: tools.value,
                    onSelect: onSelectTools
                  }, null, 8, ["selected"])])]),
                  _: 1
                }, 8, ["class", "label"])], 2)], 2)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footerRight)
                }, [isEditMode.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 0,
                  type: "secondary",
                  icon: "trash-2",
                  disabled: isDeleting.value,
                  loading: isDeleting.value,
                  onClick: onDelete
                }, null, 8, ["disabled", "loading"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  disabled: !isValid.value || isSaving.value,
                  onClick: onSave
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(saveButtonLabel.value), 1)]),
                  _: 1
                }, 8, ["disabled"])], 2)], 2)]),
                _: 1
              }, 8, ["name", "event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/AgentEditorModal.vue?vue&type=style&index=0&lang.module.scss
        content = "_content_f2rvd_123";
        input = "_input_f2rvd_130";
        row = "_row_f2rvd_134";
        footer = "_footer_f2rvd_139";
        footerRight = "_footerRight_f2rvd_146";
        AgentEditorModal_vue_vue_type_style_index_0_lang_module_default = {
          content,
          input,
          row,
          footer,
          footerRight
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
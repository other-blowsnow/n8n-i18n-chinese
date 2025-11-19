;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useToast-legacy-D8KBGcJW.js", "./externalSecrets.ee.store-legacy-DTgMWJUD.js"], function (_export, _context) {
    "use strict";

    var createStaticVNode, computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, withCtx, openBlock, createTextVNode, resolveDirective, createBaseVNode, withDirectives, useI18n, N8nText_default, ElSwitch, N8nIcon_default, __plugin_vue_export_helper_default, useToast, useExternalSecretsStore, __vite_style__, infisical_default, doppler_default, hashicorp_default, _hoisted_1$4, aws_secrets_manager_default, _hoisted_1$3, azure_key_vault_default, _hoisted_1$2, gcp_secrets_manager_default, _hoisted_1$1, ExternalSecretsProviderImage_ee_vue_vue_type_script_setup_true_lang_default, ExternalSecretsProviderImage_ee_default, _hoisted_1, ExternalSecretsProviderConnectionSwitch_ee_vue_vue_type_script_setup_true_lang_default, ExternalSecretsProviderConnectionSwitch_ee_default;
    //#region src/features/integrations/externalSecrets.ee/composables/useExternalSecretsProvider.ts
    function useExternalSecretsProvider(provider, providerData) {
      const toast = useToast();
      const externalSecretsStore = useExternalSecretsStore();
      const initialConnectionState = ref("initializing");
      const connectionState = computed(() => externalSecretsStore.connectionState[provider.value?.name ?? ""]);
      const setConnectionState = state => {
        if (!provider.value) return;
        externalSecretsStore.setConnectionState(provider.value.name, state);
      };
      const normalizedProviderData = computed(() => {
        return Object.entries(providerData.value).reduce((acc, [key, value]) => {
          const property = provider.value?.properties?.find(p => p.name === key);
          if (property && shouldDisplayProperty(property)) acc[key] = value;
          return acc;
        }, {});
      });
      function shouldDisplayProperty(property) {
        let visible = true;
        if (property.displayOptions?.show) visible = visible && Object.entries(property.displayOptions.show).every(([key, value]) => {
          return value?.includes(providerData.value[key]);
        });
        if (property.displayOptions?.hide) visible = visible && !Object.entries(property.displayOptions.hide).every(([key, value]) => {
          return value?.includes(providerData.value[key]);
        });
        return visible;
      }
      async function testConnection(options = {
        showError: true
      }) {
        if (!provider.value) return "initializing";
        try {
          const {
            testState
          } = await externalSecretsStore.testProviderConnection(provider.value.name, normalizedProviderData.value);
          setConnectionState(testState);
          return testState;
        } catch (error) {
          setConnectionState("error");
          if (options.showError) toast.showError(error, "Error", error.response?.data?.data.error);
          return "error";
        } finally {
          if (provider.value.connected && ["connected", "error"].includes(connectionState.value)) externalSecretsStore.updateStoredProvider(provider.value.name, {
            state: connectionState.value
          });
        }
      }
      return {
        initialConnectionState,
        connectionState,
        normalizedProviderData,
        testConnection,
        setConnectionState,
        shouldDisplayProperty
      };
    }

    //#endregion
    //#region src/features/integrations/externalSecrets.ee/assets/images/infisical.webp

    function render$2(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [createStaticVNode("<defs><linearGradient id=\"linearGradient-1\" x1=\"0%\" x2=\"100%\" y1=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#BD0816\"></stop><stop offset=\"100%\" stop-color=\"#FF5252\"></stop></linearGradient></defs><g id=\"Icon-Architecture/64/Arch_AWS-Secrets-Manager_64\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"none\" stroke-width=\"1\" transform=\"matrix(.35 0 0 .35 0 0)\"><g id=\"Icon-Architecture-BG/64/Security-Identity-Compliance\" fill=\"url(#linearGradient-1)\"><path id=\"Rectangle\" d=\"M0 0h80v80H0z\"></path></g><path id=\"AWS-Secrets-Manager_Icon_64_Squid\" fill=\"#FFF\" d=\"M38.76 43.36A1.241 1.241 0 1 0 40 42.12c-.683 0-1.24.556-1.24 1.24m-2 0A3.243 3.243 0 0 1 40 40.12a3.243 3.243 0 0 1 3.24 3.24A3.23 3.23 0 0 1 41 46.426V49h-2v-2.574a3.23 3.23 0 0 1-2.24-3.066M49 38H31v13h18v-3h-3v-2h3v-3h-3v-2h3zm-15-2h11.999L46 31c.001-2.616-2.857-4.998-5.996-5h-.003a6.6 6.6 0 0 0-4.238 1.575c-1.12.962-1.763 2.211-1.763 3.426zm14-4.999L47.999 36H50a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H30a1 1 0 0 1-1-1V37a1 1 0 0 1 1-1h2v-5c.001-1.798.897-3.599 2.459-4.942A8.63 8.63 0 0 1 40.001 24h.003c4.261.002 7.997 3.273 7.996 7.001M19.207 55.049l1.621-1.172c-2.735-3.78-4.247-8.215-4.432-12.877H19v-2h-2.601c.199-4.634 1.709-9.043 4.429-12.802l-1.621-1.173c-2.968 4.103-4.608 8.917-4.808 13.975H12v2h2.396c.186 5.086 1.828 9.926 4.811 14.049m34.631 4.159c-3.769 2.728-8.19 4.238-12.838 4.431V61h-2v2.639c-4.648-.192-9.07-1.702-12.841-4.431l-1.171 1.62c4.112 2.977 8.94 4.617 14.012 4.811V68h2v-2.361c5.072-.194 9.898-1.834 14.01-4.811zM26.159 20.866c3.771-2.728 8.193-4.238 12.841-4.43V19h2v-2.564c4.648.192 9.069 1.702 12.838 4.43l1.172-1.62c-4.112-2.976-8.938-4.616-14.01-4.81V12h-2v2.436c-5.072.193-9.9 1.833-14.012 4.81zM65.599 39c-.2-5.058-1.84-9.872-4.809-13.975l-1.621 1.173C61.89 29.957 63.4 34.366 63.599 39H61v2h2.602c-.186 4.662-1.697 9.097-4.433 12.877l1.621 1.172c2.984-4.123 4.625-8.963 4.812-14.049H68v-2zm-9.213-13.936 7.84-7.84-1.414-1.414-7.84 7.84zM23.612 55.01l-7.84 7.84 1.414 1.414 7.84-7.84zm5.054-27.757-14.841-14.84-1.414 1.414 14.841 14.84zM54.193 52.78l13.393 13.393-1.414 1.414-13.393-13.393z\"></path></g>", 2)]));
    }
    function render$1(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [createStaticVNode("<defs><linearGradient id=\"e399c19f-b68f-429d-b176-18c2117ff73c\" x1=\"-1032.172\" x2=\"-1059.213\" y1=\"145.312\" y2=\"65.426\" gradientTransform=\"matrix(1 0 0 -1 1075 158)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#114a8b\"></stop><stop offset=\"1\" stop-color=\"#0669bc\"></stop></linearGradient><linearGradient id=\"ac2a6fc2-ca48-4327-9a3c-d4dcc3256e15\" x1=\"-1023.725\" x2=\"-1029.98\" y1=\"108.083\" y2=\"105.968\" gradientTransform=\"matrix(1 0 0 -1 1075 158)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-opacity=\".3\"></stop><stop offset=\".071\" stop-opacity=\".2\"></stop><stop offset=\".321\" stop-opacity=\".1\"></stop><stop offset=\".623\" stop-opacity=\".05\"></stop><stop offset=\"1\" stop-opacity=\"0\"></stop></linearGradient><linearGradient id=\"a7fee970-a784-4bb1-af8d-63d18e5f7db9\" x1=\"-1027.165\" x2=\"-997.482\" y1=\"147.642\" y2=\"68.561\" gradientTransform=\"matrix(1 0 0 -1 1075 158)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#3ccbf4\"></stop><stop offset=\"1\" stop-color=\"#2892df\"></stop></linearGradient></defs><path fill=\"url(#e399c19f-b68f-429d-b176-18c2117ff73c)\" d=\"M33.338 6.544h26.038l-27.03 80.087a4.15 4.15 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.15 4.15 0 0 1 3.934-2.825z\"></path><path fill=\"#0078d4\" d=\"M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.17 4.17 0 0 0 2.846 1.121h23.38z\"></path><path fill=\"url(#ac2a6fc2-ca48-4327-9a3c-d4dcc3256e15)\" d=\"M33.338 6.544a4.12 4.12 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.44 4.44 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.24 4.24 0 0 0 2.666.972H81.24L71.024 60.261l-29.781.007L59.47 6.544z\"></path><path fill=\"url(#a7fee970-a784-4bb1-af8d-63d18e5f7db9)\" d=\"M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.15 4.15 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z\"></path>", 5)]));
    }
    function render(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [createBaseVNode("path", {
        fill: "#4285F4",
        "fill-rule": "nonzero",
        d: "M22 6v11.887h-3.962a.19.19 0 0 1-.189-.189v-1.132c0-.104.085-.189.189-.189h2.452V7.509h-2.452a.19.19 0 0 1-.189-.188V6.189c0-.105.085-.189.189-.189zM6.31 6c.103 0 .188.084.188.189V7.32a.19.19 0 0 1-.189.188h-2.8v8.868h2.783c.105 0 .19.085.19.189v1.132a.19.19 0 0 1-.19.189H2V6zm11.117 3.868v1.456l.06.025 1.351-.478.28.82-1.362.465-.037.098.937 1.26-.706.514-.912-1.26h-.085l-.913 1.26-.705-.514.924-1.26-.024-.098-1.362-.465.28-.82 1.337.478.073-.025V9.868zm-10.231 0v1.442l.06.024 1.351-.473.28.812-1.363.46-.036.097.937 1.248-.706.51-.912-1.249h-.085l-.913 1.248-.705-.509.924-1.248-.024-.097-1.362-.46.28-.812 1.337.473.073-.024V9.868zm5.094 0v1.442l.061.024 1.35-.473.28.812-1.362.46-.037.097.937 1.248-.706.51-.912-1.249h-.085l-.912 1.248-.706-.509.925-1.248-.025-.097-1.362-.46.28-.812 1.338.473.073-.024V9.868z"
      }, null, -1)]));
    }
    _export("r", useExternalSecretsProvider);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createStaticVNode = _vueRuntimeEsmBundlerLegacy003Js.A;
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        ElSwitch = _srcLegacy007Js.kt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_externalSecretsEeStoreLegacy01ZJs) {
        useExternalSecretsStore = _externalSecretsEeStoreLegacy01ZJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.connection-switch[data-v-baa1c9fc] {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.connection-switch.error[data-v-baa1c9fc] .el-switch.is-checked .el-switch__core {\n  background-color: #ff4027;\n  border-color: #ff4027;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        infisical_default = "data:image/webp;base64,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"; //#endregion
        //#region src/features/integrations/externalSecrets.ee/assets/images/doppler.webp
        doppler_default = "/%7B%7BBASE_PATH%7D%7D/assets/doppler-B__k0MeW.webp"; //#endregion
        //#region src/features/integrations/externalSecrets.ee/assets/images/hashicorp.webp
        hashicorp_default = "data:image/webp;base64,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"; //#endregion
        //#region src/features/integrations/externalSecrets.ee/assets/images/aws-secrets-manager.svg
        _hoisted_1$4 = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 28 28"
        };
        aws_secrets_manager_default = {
          render: render$2
        }; //#endregion
        //#region src/features/integrations/externalSecrets.ee/assets/images/azure-key-vault.svg
        _hoisted_1$3 = {
          xmlns: "http://www.w3.org/2000/svg",
          width: "150",
          height: "150",
          viewBox: "0 0 96 96"
        };
        azure_key_vault_default = {
          render: render$1
        }; //#endregion
        //#region src/features/integrations/externalSecrets.ee/assets/images/gcp-secrets-manager.svg
        _hoisted_1$2 = {
          xmlns: "http://www.w3.org/2000/svg",
          width: "800",
          height: "800",
          viewBox: "0 0 24 24"
        };
        gcp_secrets_manager_default = {
          render
        }; //#endregion
        //#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderImage.ee.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = ["src", "alt"];
        ExternalSecretsProviderImage_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExternalSecretsProviderImage.ee",
          props: {
            provider: {}
          },
          setup(__props) {
            const image = computed(() => ({
              doppler: doppler_default,
              infisical: infisical_default,
              vault: hashicorp_default
            })[__props.provider.name]);
            return (_ctx, _cache) => {
              return _ctx.provider.name === "awsSecretsManager" ? (openBlock(), createBlock(unref(aws_secrets_manager_default), {
                key: 0
              })) : _ctx.provider.name === "azureKeyVault" ? (openBlock(), createBlock(unref(azure_key_vault_default), {
                key: 1
              })) : _ctx.provider.name === "gcpSecretsManager" ? (openBlock(), createBlock(unref(gcp_secrets_manager_default), {
                key: 2
              })) : (openBlock(), createElementBlock("img", {
                key: 3,
                src: image.value,
                alt: _ctx.provider.displayName,
                width: "28",
                height: "28"
              }, null, 8, _hoisted_1$1));
            };
          }
        }); //#endregion
        //#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderImage.ee.vue
        _export("n", ExternalSecretsProviderImage_ee_default = ExternalSecretsProviderImage_ee_vue_vue_type_script_setup_true_lang_default); //#endregion
        //#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderConnectionSwitch.ee.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "connection-switch"
        };
        ExternalSecretsProviderConnectionSwitch_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExternalSecretsProviderConnectionSwitch.ee",
          props: {
            provider: {},
            eventBus: {
              default: void 0
            },
            disabled: {
              type: Boolean,
              default: false
            },
            beforeUpdate: {
              type: Function,
              default: void 0
            }
          },
          emits: ["change"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const externalSecretsStore = useExternalSecretsStore();
            const i18n = useI18n();
            const toast = useToast();
            const saving = ref(false);
            const connectedTextColor = computed(() => {
              return props.provider.connected ? "success" : "text-light";
            });
            onMounted(() => {
              if (props.eventBus) props.eventBus.on("connect", onUpdateConnected);
            });
            async function onUpdateConnected(value) {
              const boolValue = typeof value === "boolean" ? value : Boolean(value);
              try {
                saving.value = true;
                if (props.beforeUpdate) {
                  if (!(await props.beforeUpdate(boolValue))) {
                    saving.value = false;
                    return;
                  }
                }
                await externalSecretsStore.updateProviderConnected(props.provider.name, boolValue);
                emit("change", boolValue);
              } catch (error) {
                toast.showError(error, "Error");
              } finally {
                saving.value = false;
              }
            }
            return (_ctx, _cache) => {
              const _directive_loading = resolveDirective("loading");
              return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [_ctx.provider.state === "error" ? (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 0,
                color: "danger",
                icon: "triangle-alert",
                class: "mr-2xs"
              })) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
                color: connectedTextColor.value,
                bold: "",
                class: "mr-2xs"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.externalSecrets.card.${_ctx.provider.connected ? "connected" : "disconnected"}`)), 1)]),
                _: 1
              }, 8, ["color"]), createVNode(unref(ElSwitch), {
                "model-value": _ctx.provider.connected,
                title: unref(i18n).baseText("settings.externalSecrets.card.connectedSwitch.title", {
                  interpolate: {
                    provider: _ctx.provider.displayName
                  }
                }),
                disabled: _ctx.disabled,
                "data-test-id": "settings-external-secrets-connected-switch",
                "onUpdate:modelValue": onUpdateConnected
              }, null, 8, ["model-value", "title", "disabled"])])), [[_directive_loading, saving.value]]);
            };
          }
        }); //#endregion
        //#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderConnectionSwitch.ee.vue
        _export("t", ExternalSecretsProviderConnectionSwitch_ee_default = /* @__PURE__ */__plugin_vue_export_helper_default(ExternalSecretsProviderConnectionSwitch_ee_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-baa1c9fc"]])); //#endregion
      }
    };
  });
})();
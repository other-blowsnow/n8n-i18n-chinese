;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, createCommentVNode, unref, ref, createVNode, markRaw, defineComponent, createBlock, normalizeClass, renderSlot, withCtx, openBlock, useSlots, createBaseVNode, useI18n, N8nCallout_default, N8nMarkdown_default, N8nIcon_default, __plugin_vue_export_helper_default, useSettingsStore, STORES, dismissBannerPermanently, useRootStore, useUsersStore, get, defineStore, __vite_style__, BaseBanner_vue_vue_type_script_setup_true_lang_default, callout, mainContent, keepSpace, trailingContent, BaseBanner_vue_vue_type_style_index_0_lang_module_default, cssModules$1, BaseBanner_default, DynamicBanner_vue_vue_type_script_setup_true_lang_default, markdown, DynamicBanner_vue_vue_type_style_index_0_lang_module_default, cssModules, DynamicBanner_default, useBannersStore;
    //#region ../@n8n/rest-api-client/dist/api/dynamic-banners.js
    async function getDynamicBanners(endpoint, filters) {
      return await get(endpoint, "", filters);
    }

    //#endregion
    //#region src/features/shared/banners/components/banners/BaseBanner.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        markRaw = _vueRuntimeEsmBundlerLegacy003Js.Mt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useSlots = _vueRuntimeEsmBundlerLegacy003Js.pt;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nCallout_default = _srcLegacy007Js.Fn;
        N8nMarkdown_default = _srcLegacy007Js.j;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        STORES = _useTelemetryLegacy00FJs.Cc;
        dismissBannerPermanently = _useTelemetryLegacy00FJs.Qo;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        get = _useTelemetryLegacy00FJs.uc;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._callout_xoq77_123 {\n  height: var(--banner--height);\n}\n._mainContent_xoq77_127 {\n  display: flex;\n  gap: var(--spacing--4xs);\n}\n._keepSpace_xoq77_132 {\n  padding: 5px 0;\n}\n._trailingContent_xoq77_136 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--lg);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._markdown_ko7e6_123 p,\n._markdown_ko7e6_123 strong,\n._markdown_ko7e6_123 em,\n._markdown_ko7e6_123 s,\n._markdown_ko7e6_123 a {\n  font-size: var(--font-size--2xs);\n}\n._markdown_ko7e6_123 p {\n  margin-bottom: 0;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        BaseBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "BaseBanner",
          props: {
            name: {},
            theme: {
              default: "info"
            },
            customIcon: {
              default: void 0
            },
            dismissible: {
              type: Boolean,
              default: true
            },
            dismissPermanently: {
              type: Boolean,
              default: false
            }
          },
          emits: ["close"],
          setup(__props, {
            emit: __emit
          }) {
            const i18n = useI18n();
            const bannersStore = useBannersStore();
            const slots = useSlots();
            const props = __props;
            const emit = __emit;
            const hasTrailingContent = computed(() => {
              return !!slots.trailingContent;
            });
            async function onCloseClick() {
              await bannersStore.dismissBanner(props.name, props.dismissPermanently ? "permanent" : "temporary");
              emit("close");
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nCallout_default), {
                class: normalizeClass(_ctx.$style.callout),
                theme: props.theme,
                icon: props.customIcon,
                "icon-size": "medium",
                "round-corners": false,
                "data-test-id": `banners-${props.name}`,
                "only-bottom-border": true
              }, {
                trailingContent: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.trailingContent)
                }, [renderSlot(_ctx.$slots, "trailingContent"), _ctx.dismissible ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 0,
                  size: "small",
                  icon: "x",
                  title: unref(i18n).baseText("generic.dismiss"),
                  class: "clickable",
                  "data-test-id": `banner-${props.name}-close`,
                  onClick: onCloseClick
                }, null, 8, ["title", "data-test-id"])) : createCommentVNode("", true)], 2)]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.mainContent, !hasTrailingContent.value ? _ctx.$style.keepSpace : ""])
                }, [renderSlot(_ctx.$slots, "mainContent")], 2)]),
                _: 3
              }, 8, ["class", "theme", "icon", "data-test-id"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/banners/components/banners/BaseBanner.vue?vue&type=style&index=0&lang.module.scss
        callout = "_callout_xoq77_123";
        mainContent = "_mainContent_xoq77_127";
        keepSpace = "_keepSpace_xoq77_132";
        trailingContent = "_trailingContent_xoq77_136";
        BaseBanner_vue_vue_type_style_index_0_lang_module_default = {
          callout,
          mainContent,
          keepSpace,
          trailingContent
        }; //#endregion
        //#region src/features/shared/banners/components/banners/BaseBanner.vue
        cssModules$1 = {
          "$style": BaseBanner_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", BaseBanner_default = /* @__PURE__ */__plugin_vue_export_helper_default(BaseBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]])); //#endregion
        //#region src/features/shared/banners/components/banners/DynamicBanner.vue?vue&type=script&setup=true&lang.ts
        DynamicBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "DynamicBanner",
          props: {
            name: {},
            content: {},
            theme: {},
            isDismissible: {
              type: Boolean
            },
            dismissPermanently: {
              type: [Boolean, null]
            }
          },
          setup(__props) {
            const props = __props;
            return (_ctx, _cache) => {
              return openBlock(), createBlock(BaseBanner_default, {
                name: props.name,
                theme: props.theme,
                dismissible: props.isDismissible,
                "dismiss-permanently": props.dismissPermanently ?? false
              }, {
                mainContent: withCtx(() => [createVNode(unref(N8nMarkdown_default), {
                  content: props.content,
                  class: normalizeClass(_ctx.$style.markdown)
                }, null, 8, ["content", "class"])]),
                _: 1
              }, 8, ["name", "theme", "dismissible", "dismiss-permanently"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/banners/components/banners/DynamicBanner.vue?vue&type=style&index=0&lang.module.scss
        markdown = "_markdown_ko7e6_123";
        DynamicBanner_vue_vue_type_style_index_0_lang_module_default = {
          markdown
        }; //#endregion
        //#region src/features/shared/banners/components/banners/DynamicBanner.vue
        cssModules = {
          "$style": DynamicBanner_vue_vue_type_style_index_0_lang_module_default
        };
        DynamicBanner_default = /* @__PURE__ */__plugin_vue_export_helper_default(DynamicBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]); //#endregion
        //#region src/features/shared/banners/banners.store.ts
        _export("t", useBannersStore = defineStore(STORES.BANNERS, () => {
          const settingsStore = useSettingsStore();
          const usersStore = useUsersStore();
          const rootStore = useRootStore();
          const dynamicBanners = ref([]);
          const bannerStack = ref([]);
          const bannersHeight = ref(0);
          const mapDeploymentTypeValue = deploymentType => {
            return deploymentType === "cloud" ? "cloud" : "self-hosted";
          };
          async function fetchDynamicBanners() {
            if (!settingsStore.settings.dynamicBanners.endpoint || !settingsStore.settings.dynamicBanners.enabled) return [];
            const version = settingsStore.settings.versionCli;
            const deploymentType = mapDeploymentTypeValue(settingsStore.settings.deployment?.type ?? "default");
            try {
              dynamicBanners.value = (await getDynamicBanners(settingsStore.settings.dynamicBanners.endpoint, {
                version,
                deploymentType,
                instanceId: settingsStore.settings.instanceId,
                planName: settingsStore.settings.license?.planName,
                userCreatedAt: usersStore.currentUser?.createdAt,
                isOwner: usersStore.currentUser?.isOwner,
                role: usersStore.currentUser?.role
              })).map(item => ({
                ...item,
                id: `dynamic-banner-${item.id}`,
                component: markRaw(DynamicBanner_default)
              }));
              return dynamicBanners.value;
            } catch (e) {
              console.error("Failed to fetch dynamic banners:", e);
              return [];
            }
          }
          const dynamicBannersMap = computed(() => {
            return dynamicBanners.value.reduce((acc, item) => {
              acc[item.id] = item;
              return acc;
            }, {});
          });
          const removeBannerFromStack = name => {
            bannerStack.value = bannerStack.value.filter(bannerName => bannerName !== name);
          };
          const dismissBanner = async (name, type = "temporary") => {
            if (type === "permanent") {
              await dismissBannerPermanently(rootStore.restApiContext, {
                bannerName: name,
                dismissedBanners: settingsStore.permanentlyDismissedBanners
              });
              removeBannerFromStack(name);
              return;
            }
            removeBannerFromStack(name);
          };
          const updateBannersHeight = newHeight => {
            bannersHeight.value = newHeight;
          };
          const pushBannerToStack = name => {
            if (bannerStack.value.includes(name)) return;
            bannerStack.value.push(name);
          };
          const clearBannerStack = () => {
            bannerStack.value = [];
          };
          const loadStaticBanners = options => {
            options.banners.forEach(pushBannerToStack);
          };
          const loadDynamicBanners = async () => {
            (await fetchDynamicBanners())?.filter(banner => !settingsStore.permanentlyDismissedBanners.includes(banner.id)).forEach(banner => pushBannerToStack(banner.id));
          };
          return {
            dynamicBanners,
            bannerStack,
            bannersHeight,
            dynamicBannersMap,
            dismissBanner,
            updateBannersHeight,
            pushBannerToStack,
            clearBannerStack,
            loadStaticBanners,
            loadDynamicBanners
          };
        })); //#endregion
      }
    };
  });
})();
;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BVuLoslx.js", "./src-legacy-DKZ8j8GV.js", "./truncate-legacy-pg0njr0t.js", "./constants-legacy-BOwjEkaj.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, openBlock, useI18n, N8nActionBox_default, useRouter, VIEWS, EmptySharedSectionActionBox_vue_vue_type_script_setup_true_lang_default, EmptySharedSectionActionBox_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionBox_default = _srcLegacy007Js.Ct;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Po;
      }],
      execute: function () {
        //#region src/features/core/folders/components/EmptySharedSectionActionBox.vue?vue&type=script&setup=true&lang.ts
        EmptySharedSectionActionBox_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EmptySharedSectionActionBox",
          props: {
            personalProject: {},
            resourceType: {
              default: "workflows"
            }
          },
          setup(__props) {
            const i18n = useI18n();
            const router = useRouter();
            const props = __props;
            const heading = computed(() => {
              return i18n.baseText("workflows.empty.shared-with-me", {
                interpolate: {
                  resource: i18n.baseText(`generic.${props.resourceType === "workflows" ? "workflow" : "credential"}`).toLowerCase()
                }
              });
            });
            const onPersonalLinkClick = event => {
              event.preventDefault();
              router.push({
                name: VIEWS.PROJECTS_WORKFLOWS,
                params: {
                  projectId: props.personalProject.id
                }
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nActionBox_default), {
                "data-test-id": "empty-shared-action-box",
                heading: heading.value,
                description: unref(i18n).baseText("workflows.empty.shared-with-me.link"),
                onDescriptionClick: onPersonalLinkClick
              }, null, 8, ["heading", "description"]);
            };
          }
        }); //#endregion
        //#region src/features/core/folders/components/EmptySharedSectionActionBox.vue
        _export("t", EmptySharedSectionActionBox_default = EmptySharedSectionActionBox_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();
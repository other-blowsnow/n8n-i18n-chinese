;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, ref, h, defineComponent, require_markdown_it, import_markdown_it, VueMarkdown, VueMarkdown_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
      }, function (_srcLegacy007Js) {
        require_markdown_it = _srcLegacy007Js.bt;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/vue-markdown-render@2.2.1_vue@3.5.13_typescript@5.9.2_/node_modules/vue-markdown-render/dist/VueMarkdown.js
        import_markdown_it = /* @__PURE__ */__toESM(require_markdown_it());
        VueMarkdown = defineComponent({
          name: "VueMarkdown",
          props: {
            source: {
              type: String,
              required: true
            },
            options: {
              type: Object,
              required: false
            },
            plugins: {
              type: Array,
              required: false
            }
          },
          setup(props) {
            const md = ref(new import_markdown_it.default(props.options ?? {}));
            for (const plugin of props.plugins ?? []) md.value.use(plugin);
            const content = computed(() => md.value.render(props.source));
            return () => h("div", {
              innerHTML: content.value
            });
          }
        });
        _export("t", VueMarkdown_default = VueMarkdown); //#endregion
      }
    };
  });
})();
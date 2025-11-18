;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, normalizeClass, renderSlot, withCtx, isObject, resolveDynamicComponent, openBlock, provide, init_shared_esm_bundler, normalizeStyle, inject, mutable, definePropType, buildProps, isNumber, useNamespace, withInstall, _export_sfc, rowContextKey, RowJustify, RowAlign, rowProps, Row, ElRow, colProps, Col, ElCol;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        isObject = _vueRuntimeEsmBundlerLegacy003Js.cn;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        provide = _vueRuntimeEsmBundlerLegacy003Js.nt;
        init_shared_esm_bundler = _vueRuntimeEsmBundlerLegacy003Js.tn;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
        inject = _vueRuntimeEsmBundlerLegacy003Js.z;
      }, function (_srcLegacy007Js) {
        mutable = _srcLegacy007Js.an;
      }, function (_truncateLegacy00hJs) {
        definePropType = _truncateLegacy00hJs.F;
        buildProps = _truncateLegacy00hJs.P;
        isNumber = _truncateLegacy00hJs.Y;
        useNamespace = _truncateLegacy00hJs.k;
      }, function (_iconLegacy00lJs) {
        withInstall = _iconLegacy00lJs.i;
        _export_sfc = _iconLegacy00lJs.n;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/row/src/constants.mjs
        rowContextKey = Symbol("rowContextKey"); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/row/src/row.mjs
        RowJustify = ["start", "center", "end", "space-around", "space-between", "space-evenly"];
        RowAlign = ["top", "middle", "bottom"];
        rowProps = buildProps({
          tag: {
            type: String,
            default: "div"
          },
          gutter: {
            type: Number,
            default: 0
          },
          justify: {
            type: String,
            values: RowJustify,
            default: "start"
          },
          align: {
            type: String,
            values: RowAlign
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/row/src/row2.mjs
        Row = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElRow"
          }),
          props: rowProps,
          setup(__props) {
            const props = __props;
            const ns = useNamespace("row");
            provide(rowContextKey, {
              gutter: computed(() => props.gutter)
            });
            const style = computed(() => {
              const styles = {};
              if (!props.gutter) return styles;
              styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
              return styles;
            });
            const rowKls = computed(() => [ns.b(), ns.is(`justify-${props.justify}`, props.justify !== "start"), ns.is(`align-${props.align}`, !!props.align)]);
            return (_ctx, _cache) => {
              return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
                class: normalizeClass(unref(rowKls)),
                style: normalizeStyle(unref(style))
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
                _: 3
              }, 8, ["class", "style"]);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/row/index.mjs
        _export("n", ElRow = withInstall(Row)); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/col/src/col.mjs
        colProps = buildProps({
          tag: {
            type: String,
            default: "div"
          },
          span: {
            type: Number,
            default: 24
          },
          offset: {
            type: Number,
            default: 0
          },
          pull: {
            type: Number,
            default: 0
          },
          push: {
            type: Number,
            default: 0
          },
          xs: {
            type: definePropType([Number, Object]),
            default: () => mutable({})
          },
          sm: {
            type: definePropType([Number, Object]),
            default: () => mutable({})
          },
          md: {
            type: definePropType([Number, Object]),
            default: () => mutable({})
          },
          lg: {
            type: definePropType([Number, Object]),
            default: () => mutable({})
          },
          xl: {
            type: definePropType([Number, Object]),
            default: () => mutable({})
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/col/src/col2.mjs
        init_shared_esm_bundler();
        Col = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElCol"
          }),
          props: colProps,
          setup(__props) {
            const props = __props;
            const {
              gutter
            } = inject(rowContextKey, {
              gutter: computed(() => 0)
            });
            const ns = useNamespace("col");
            const style = computed(() => {
              const styles = {};
              if (gutter.value) styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
              return styles;
            });
            const colKls = computed(() => {
              const classes = [];
              ["span", "offset", "pull", "push"].forEach(prop => {
                const size = props[prop];
                if (isNumber(size)) {
                  if (prop === "span") classes.push(ns.b(`${props[prop]}`));else if (size > 0) classes.push(ns.b(`${prop}-${props[prop]}`));
                }
              });
              ["xs", "sm", "md", "lg", "xl"].forEach(size => {
                if (isNumber(props[size])) classes.push(ns.b(`${size}-${props[size]}`));else if (isObject(props[size])) Object.entries(props[size]).forEach(([prop, sizeProp]) => {
                  classes.push(prop !== "span" ? ns.b(`${size}-${prop}-${sizeProp}`) : ns.b(`${size}-${sizeProp}`));
                });
              });
              if (gutter.value) classes.push(ns.is("guttered"));
              return [ns.b(), classes];
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
                class: normalizeClass(unref(colKls)),
                style: normalizeStyle(unref(style))
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
                _: 3
              }, 8, ["class", "style"]);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/col/index.mjs
        _export("t", ElCol = withInstall(Col)); //#endregion
      }
    };
  });
})();
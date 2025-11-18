;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./truncate-legacy-Bk9bFklR.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, unref, NOOP, defineComponent, mergeProps, renderSlot, openBlock, init_shared_esm_bundler, createBaseVNode, definePropType, addUnit, buildProps, isUndefined, useNamespace, arrow_down_default, arrow_left_default, arrow_right_default, arrow_up_default, calendar_default, circle_check_default, circle_close_filled_default, circle_close_default, clock_default, close_default, d_arrow_left_default, d_arrow_right_default, hide_default, info_filled_default, loading_default, minus_default, more_filled_default, more_default, picture_filled_default, plus_default, success_filled_default, view_default, warning_filled_default, iconPropType, CloseComponents, TypeComponents, TypeComponentsMap, ValidateComponentsMap, withInstall, withInstallFunction, withInstallDirective, withNoopInstall, EVENT_CODE, _export_sfc, iconProps, Icon, ElIcon;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        NOOP = _vueRuntimeEsmBundlerLegacy003Js.Jt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        init_shared_esm_bundler = _vueRuntimeEsmBundlerLegacy003Js.tn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_truncateLegacy00hJs) {
        definePropType = _truncateLegacy00hJs.F;
        addUnit = _truncateLegacy00hJs.L;
        buildProps = _truncateLegacy00hJs.P;
        isUndefined = _truncateLegacy00hJs.X;
        useNamespace = _truncateLegacy00hJs.k;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/@element-plus+icons-vue@2.3.1_vue@3.5.13_typescript@5.9.2_/node_modules/@element-plus/icons-vue/dist/index.js
        _export("p", arrow_down_default = /* @__PURE__ */defineComponent({
          name: "ArrowDown",
          __name: "arrow-down",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
            })]));
          }
        }));
        _export("m", arrow_left_default = /* @__PURE__ */defineComponent({
          name: "ArrowLeft",
          __name: "arrow-left",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
            })]));
          }
        }));
        _export("h", arrow_right_default = /* @__PURE__ */defineComponent({
          name: "ArrowRight",
          __name: "arrow-right",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
            })]));
          }
        }));
        _export("g", arrow_up_default = /* @__PURE__ */defineComponent({
          name: "ArrowUp",
          __name: "arrow-up",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
            })]));
          }
        }));
        _export("_", calendar_default = /* @__PURE__ */defineComponent({
          name: "Calendar",
          __name: "calendar",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64"
            })]));
          }
        }));
        circle_check_default = /* @__PURE__ */defineComponent({
          name: "CircleCheck",
          __name: "circle-check",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
            }), createBaseVNode("path", {
              fill: "currentColor",
              d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
            })]));
          }
        });
        circle_close_filled_default = /* @__PURE__ */defineComponent({
          name: "CircleCloseFilled",
          __name: "circle-close-filled",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
            })]));
          }
        });
        _export("v", circle_close_default = /* @__PURE__ */defineComponent({
          name: "CircleClose",
          __name: "circle-close",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
            }), createBaseVNode("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
            })]));
          }
        }));
        _export("y", clock_default = /* @__PURE__ */defineComponent({
          name: "Clock",
          __name: "clock",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
            }), createBaseVNode("path", {
              fill: "currentColor",
              d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
            }), createBaseVNode("path", {
              fill: "currentColor",
              d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"
            })]));
          }
        }));
        _export("b", close_default = /* @__PURE__ */defineComponent({
          name: "Close",
          __name: "close",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
            })]));
          }
        }));
        _export("x", d_arrow_left_default = /* @__PURE__ */defineComponent({
          name: "DArrowLeft",
          __name: "d-arrow-left",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
            })]));
          }
        }));
        _export("S", d_arrow_right_default = /* @__PURE__ */defineComponent({
          name: "DArrowRight",
          __name: "d-arrow-right",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
            })]));
          }
        }));
        _export("C", hide_default = /* @__PURE__ */defineComponent({
          name: "Hide",
          __name: "hide",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
            }), createBaseVNode("path", {
              fill: "currentColor",
              d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
            })]));
          }
        }));
        info_filled_default = /* @__PURE__ */defineComponent({
          name: "InfoFilled",
          __name: "info-filled",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
            })]));
          }
        });
        _export("w", loading_default = /* @__PURE__ */defineComponent({
          name: "Loading",
          __name: "loading",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
            })]));
          }
        }));
        _export("T", minus_default = /* @__PURE__ */defineComponent({
          name: "Minus",
          __name: "minus",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
            })]));
          }
        }));
        _export("D", more_filled_default = /* @__PURE__ */defineComponent({
          name: "MoreFilled",
          __name: "more-filled",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
            })]));
          }
        }));
        _export("E", more_default = /* @__PURE__ */defineComponent({
          name: "More",
          __name: "more",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
            })]));
          }
        }));
        _export("O", picture_filled_default = /* @__PURE__ */defineComponent({
          name: "PictureFilled",
          __name: "picture-filled",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
            })]));
          }
        }));
        _export("k", plus_default = /* @__PURE__ */defineComponent({
          name: "Plus",
          __name: "plus",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
            })]));
          }
        }));
        success_filled_default = /* @__PURE__ */defineComponent({
          name: "SuccessFilled",
          __name: "success-filled",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
            })]));
          }
        });
        _export("A", view_default = /* @__PURE__ */defineComponent({
          name: "View",
          __name: "view",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
            })]));
          }
        }));
        warning_filled_default = /* @__PURE__ */defineComponent({
          name: "WarningFilled",
          __name: "warning-filled",
          setup(__props) {
            return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024"
            }, [createBaseVNode("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
            })]));
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/utils/vue/icon.mjs
        _export("f", iconPropType = definePropType([String, Object, Function]));
        _export("c", CloseComponents = {
          Close: close_default
        });
        _export("l", TypeComponents = {
          Close: close_default,
          SuccessFilled: success_filled_default,
          InfoFilled: info_filled_default,
          WarningFilled: warning_filled_default,
          CircleCloseFilled: circle_close_filled_default
        });
        _export("u", TypeComponentsMap = {
          success: success_filled_default,
          warning: warning_filled_default,
          error: circle_close_filled_default,
          info: info_filled_default
        });
        _export("d", ValidateComponentsMap = {
          validating: loading_default,
          success: circle_check_default,
          error: circle_close_default
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/utils/vue/install.mjs
        init_shared_esm_bundler();
        _export("i", withInstall = (main, extra) => {
          main.install = app => {
            for (const comp of [main, ...Object.values(extra != null ? extra : {})]) app.component(comp.name, comp);
          };
          if (extra) for (const [key, comp] of Object.entries(extra)) main[key] = comp;
          return main;
        });
        _export("o", withInstallFunction = (fn, name) => {
          fn.install = app => {
            fn._context = app._context;
            app.config.globalProperties[name] = fn;
          };
          return fn;
        });
        _export("a", withInstallDirective = (directive, name) => {
          directive.install = app => {
            app.directive(name, directive);
          };
          return directive;
        });
        _export("s", withNoopInstall = component => {
          component.install = NOOP;
          return component;
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/constants/aria.mjs
        _export("r", EVENT_CODE = {
          tab: "Tab",
          enter: "Enter",
          space: "Space",
          left: "ArrowLeft",
          up: "ArrowUp",
          right: "ArrowRight",
          down: "ArrowDown",
          esc: "Escape",
          delete: "Delete",
          backspace: "Backspace",
          numpadEnter: "NumpadEnter",
          pageUp: "PageUp",
          pageDown: "PageDown",
          home: "Home",
          end: "End"
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/_virtual/plugin-vue_export-helper.mjs
        _export("n", _export_sfc = (sfc, props) => {
          const target = sfc.__vccOpts || sfc;
          for (const [key, val] of props) target[key] = val;
          return target;
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/icon/src/icon.mjs
        iconProps = buildProps({
          size: {
            type: definePropType([Number, String])
          },
          color: {
            type: String
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/icon/src/icon2.mjs
        Icon = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElIcon",
            inheritAttrs: false
          }),
          props: iconProps,
          setup(__props) {
            const props = __props;
            const ns = useNamespace("icon");
            const style = computed(() => {
              const {
                size,
                color
              } = props;
              if (!size && !color) return {};
              return {
                fontSize: isUndefined(size) ? void 0 : addUnit(size),
                "--color": color
              };
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("i", mergeProps({
                class: unref(ns).b(),
                style: unref(style)
              }, _ctx.$attrs), [renderSlot(_ctx.$slots, "default")], 16);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/icon/index.mjs
        _export("t", ElIcon = withInstall(Icon)); //#endregion
      }
    };
  });
})();
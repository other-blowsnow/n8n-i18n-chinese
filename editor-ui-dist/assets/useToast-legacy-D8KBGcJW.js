;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./useExternalHooks-legacy-CI7QLTD3.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, toValue, isVNode, onMounted, Fragment, normalizeClass, renderSlot, withCtx, resolveDynamicComponent, openBlock, withModifiers, Transition, render, vShow, isString, init_shared_esm_bundler, createBaseVNode, withDirectives, normalizeStyle, useI18n, definePropType, useTimeoutFn, isClient, useEventListener, buildProps, useGlobalComponentSettings, debugWarn, require_lib, isElement, CloseComponents, iconPropType, _export_sfc, withInstallFunction, EVENT_CODE, ElIcon, TypeComponentsMap, useUIStore, useWorkflowsStore, useTelemetry, ALLOWED_HTML_TAGS, ALLOWED_HTML_ATTRIBUTES, VIEWS, useExternalHooks, notificationTypes, notificationProps, notificationEmits, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, NotificationConstructor, notifications, GAP_SIZE, seed, notify, ElNotification, import_lib, sanitizeIfString, capitalizeFirstLetter, getBannerRowHeight, scrollbarWidth, APP_Z_INDEXES, setAppZIndexes, useStyles, stickyNotificationQueue;
    function close(id, position, userOnClose) {
      const orientedNotifications = notifications[position];
      const idx = orientedNotifications.findIndex(({
        vm: vm2
      }) => {
        var _a;
        return ((_a = vm2.component) == null ? void 0 : _a.props.id) === id;
      });
      if (idx === -1) return;
      const {
        vm
      } = orientedNotifications[idx];
      if (!vm) return;
      userOnClose?.(vm);
      const removedHeight = vm.el.offsetHeight;
      const verticalPos = position.split("-")[0];
      orientedNotifications.splice(idx, 1);
      const len = orientedNotifications.length;
      if (len < 1) return;
      for (let i = idx; i < len; i++) {
        const {
          el,
          component
        } = orientedNotifications[i].vm;
        const pos = Number.parseInt(el.style[verticalPos], 10) - removedHeight - GAP_SIZE;
        component.props.offset = pos;
      }
    }
    function closeAll() {
      for (const orientedNotifications of Object.values(notifications)) orientedNotifications.forEach(({
        vm
      }) => {
        vm.component.exposed.visible.value = false;
      });
    }
    function sanitizeHtml(dirtyHtml) {
      return (0, import_lib.default)(dirtyHtml, {
        onTagAttr: (tag, name, value) => {
          if (tag === "img" && name === "src") {
            const isStaticImageFile = value.split("#")[0].match(/\.(jpeg|jpg|gif|png|webp)$/) !== null && value.startsWith("/static/");
            if (!value.startsWith("https://") && !isStaticImageFile) return "";
          }
          if (ALLOWED_HTML_ATTRIBUTES.includes(name) || name.startsWith("data-")) {
            if (name === "href" && !value.match(/^https?:\/\//gm) && !value.startsWith("/")) return "";
            return `${name}="${(0, import_lib.escapeAttrValue)(value)}"`;
          }
        },
        onTag: tag => {
          if (!ALLOWED_HTML_TAGS.includes(tag)) return "";
        }
      });
    }
    /**
    * Checks if the input is a string and sanitizes it by removing or escaping harmful characters,
    * returning the original input if it's not a string.
    */

    function isOutsideSelected(el) {
      const selection = document.getSelection();
      if (!selection?.anchorNode || !selection.focusNode || !el) return false;
      return !el.contains(selection.anchorNode) && !el.contains(selection.focusNode) && (selection.anchorNode !== selection.focusNode || selection.anchorOffset !== selection.focusOffset);
    }
    function getScrollbarWidth() {
      if (scrollbarWidth !== void 0) return scrollbarWidth;
      const outer = document.createElement("div");
      const inner = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.overflow = "scroll";
      document.body.appendChild(outer);
      outer.appendChild(inner);
      scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      outer.parentElement?.removeChild(outer);
      return scrollbarWidth;
    }
    function isEventTargetContainedBy(eventTarget, maybeContainer) {
      return !!(eventTarget instanceof Node && toValue(maybeContainer)?.contains(eventTarget));
    }

    //#endregion
    //#region src/app/composables/useStyles.ts

    function useToast() {
      const telemetry = useTelemetry();
      const workflowsStore = useWorkflowsStore();
      const uiStore = useUIStore();
      const externalHooks = useExternalHooks();
      const i18n = useI18n();
      const {
        APP_Z_INDEXES: APP_Z_INDEXES$1
      } = useStyles();
      function showMessage(messageData, track = true) {
        const messageDefaults = {
          dangerouslyUseHTMLString: true,
          position: "bottom-right",
          zIndex: APP_Z_INDEXES$1.TOASTS,
          appendTo: "#app-grid",
          customClass: "content-toast"
        };
        const {
          message,
          title
        } = messageData;
        const params = {
          ...messageDefaults,
          ...messageData
        };
        if (typeof message === "string") params.message = sanitizeHtml(message);
        if (typeof title === "string") params.title = sanitizeHtml(title);
        const notification = ElNotification(params);
        if (params.duration === 0) stickyNotificationQueue.push(notification);
        if (params.type === "error" && track) telemetry.track("Instance FE emitted error", {
          error_title: params.title,
          error_message: params.message,
          caused_by_credential: causedByCredential(params.message),
          workflow_id: workflowsStore.workflowId
        });
        return notification;
      }
      function showToast(config) {
        let notification;
        if (config.closeOnClick) {
          const cb = config.onClick;
          config.onClick = () => {
            if (notification) notification.close();
            if (cb) cb();
          };
        }
        notification = showMessage({
          title: config.title,
          message: config.message,
          onClick: config.onClick,
          onClose: config.onClose,
          duration: config.duration,
          customClass: config.customClass,
          type: config.type
        });
        return notification;
      }
      function collapsableDetails({
        description,
        node
      }) {
        if (!description) return "";
        const errorDescription = description.length > 500 ? `${description.slice(0, 500)}...` : description;
        return `
				<br>
				<br>
				<details>
					<summary
						style="color: #ff6d5a; font-weight: bold; cursor: pointer;"
					>
						${i18n.baseText("showMessage.showDetails")}
					</summary>
					<p>${node.name}: ${errorDescription}</p>
				</details>
			`;
      }
      function showError(e, title, message) {
        const error = e;
        showMessage({
          title,
          message: `
					${message ? `${message}<br/>` : ""}
					<i>${error.message}</i>
					${collapsableDetails(error)}`,
          type: "error",
          duration: 0
        }, false);
        externalHooks.run("showMessage.showError", {
          title,
          message,
          errorMessage: error.message
        });
        telemetry.track("Instance FE emitted error", {
          error_title: title,
          error_description: message,
          error_message: error.message,
          caused_by_credential: causedByCredential(error.message),
          workflow_id: workflowsStore.workflowId
        });
      }
      function causedByCredential(message) {
        if (!message || typeof message !== "string") return false;
        return message.includes("Credentials for") && message.includes("are not set");
      }
      function clearAllStickyNotifications() {
        stickyNotificationQueue.forEach(notification => {
          if (notification) notification.close();
        });
        stickyNotificationQueue.length = 0;
      }
      function showNotificationForViews(views) {
        const notifications$1 = [];
        views.forEach(view => {
          notifications$1.push(...(uiStore.pendingNotificationsForViews[view] ?? []));
        });
        if (notifications$1.length) {
          notifications$1.forEach(async notification => {
            setTimeout(() => {
              showMessage(notification);
            }, 5);
          });
          uiStore.setNotificationsForView(VIEWS.WORKFLOW, []);
        }
      }
      return {
        showMessage,
        showToast,
        showError,
        clearAllStickyNotifications,
        showNotificationForViews
      };
    }

    //#endregion
    _export({
      a: getScrollbarWidth,
      c: sanitizeHtml,
      o: isEventTargetContainedBy,
      s: isOutsideSelected,
      t: useToast
    });
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        toValue = _vueRuntimeEsmBundlerLegacy003Js.Ut;
        isVNode = _vueRuntimeEsmBundlerLegacy003Js.V;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        Transition = _vueRuntimeEsmBundlerLegacy003Js.n;
        render = _vueRuntimeEsmBundlerLegacy003Js.o;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        isString = _vueRuntimeEsmBundlerLegacy003Js.pn;
        init_shared_esm_bundler = _vueRuntimeEsmBundlerLegacy003Js.tn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        definePropType = _truncateLegacy00hJs.F;
        useTimeoutFn = _truncateLegacy00hJs.Ft;
        isClient = _truncateLegacy00hJs.Mt;
        useEventListener = _truncateLegacy00hJs.Ot;
        buildProps = _truncateLegacy00hJs.P;
        useGlobalComponentSettings = _truncateLegacy00hJs.S;
        debugWarn = _truncateLegacy00hJs.V;
        require_lib = _truncateLegacy00hJs.f;
        isElement = _truncateLegacy00hJs.q;
      }, function (_iconLegacy00lJs) {
        CloseComponents = _iconLegacy00lJs.c;
        iconPropType = _iconLegacy00lJs.f;
        _export_sfc = _iconLegacy00lJs.n;
        withInstallFunction = _iconLegacy00lJs.o;
        EVENT_CODE = _iconLegacy00lJs.r;
        ElIcon = _iconLegacy00lJs.t;
        TypeComponentsMap = _iconLegacy00lJs.u;
      }, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_constantsLegacy00NJs) {
        ALLOWED_HTML_TAGS = _constantsLegacy00NJs.A;
        ALLOWED_HTML_ATTRIBUTES = _constantsLegacy00NJs.k;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/notification/src/notification.mjs
        notificationTypes = ["success", "info", "warning", "error"];
        notificationProps = buildProps({
          customClass: {
            type: String,
            default: ""
          },
          dangerouslyUseHTMLString: {
            type: Boolean,
            default: false
          },
          duration: {
            type: Number,
            default: 4500
          },
          icon: {
            type: iconPropType
          },
          id: {
            type: String,
            default: ""
          },
          message: {
            type: definePropType([String, Object]),
            default: ""
          },
          offset: {
            type: Number,
            default: 0
          },
          onClick: {
            type: definePropType(Function),
            default: () => void 0
          },
          onClose: {
            type: definePropType(Function),
            required: true
          },
          position: {
            type: String,
            values: ["top-right", "top-left", "bottom-right", "bottom-left"],
            default: "top-right"
          },
          showClose: {
            type: Boolean,
            default: true
          },
          title: {
            type: String,
            default: ""
          },
          type: {
            type: String,
            values: [...notificationTypes, ""],
            default: ""
          },
          zIndex: Number
        });
        notificationEmits = {
          destroy: () => true
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/notification/src/notification2.mjs
        _hoisted_1 = ["id"];
        _hoisted_2 = ["textContent"];
        _hoisted_3 = {
          key: 0
        };
        _hoisted_4 = ["innerHTML"];
        NotificationConstructor = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElNotification"
          }),
          props: notificationProps,
          emits: notificationEmits,
          setup(__props, {
            expose
          }) {
            const props = __props;
            const {
              ns,
              zIndex
            } = useGlobalComponentSettings("notification");
            const {
              nextZIndex,
              currentZIndex
            } = zIndex;
            const {
              Close
            } = CloseComponents;
            const visible = ref(false);
            let timer = void 0;
            const typeClass = computed(() => {
              const type = props.type;
              return type && TypeComponentsMap[props.type] ? ns.m(type) : "";
            });
            const iconComponent = computed(() => {
              if (!props.type) return props.icon;
              return TypeComponentsMap[props.type] || props.icon;
            });
            const horizontalClass = computed(() => props.position.endsWith("right") ? "right" : "left");
            const verticalProperty = computed(() => props.position.startsWith("top") ? "top" : "bottom");
            const positionStyle = computed(() => {
              var _a;
              return {
                [verticalProperty.value]: `${props.offset}px`,
                zIndex: (_a = props.zIndex) != null ? _a : currentZIndex.value
              };
            });
            function startTimer() {
              if (props.duration > 0) ({
                stop: timer
              } = useTimeoutFn(() => {
                if (visible.value) close$1();
              }, props.duration));
            }
            function clearTimer() {
              timer?.();
            }
            function close$1() {
              visible.value = false;
            }
            function onKeydown({
              code
            }) {
              if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) clearTimer();else if (code === EVENT_CODE.esc) {
                if (visible.value) close$1();
              } else startTimer();
            }
            onMounted(() => {
              startTimer();
              nextZIndex();
              visible.value = true;
            });
            useEventListener(document, "keydown", onKeydown);
            expose({
              visible,
              close: close$1
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Transition, {
                name: unref(ns).b("fade"),
                onBeforeLeave: _ctx.onClose,
                onAfterLeave: _cache[1] || (_cache[1] = $event => _ctx.$emit("destroy")),
                persisted: ""
              }, {
                default: withCtx(() => [withDirectives(createBaseVNode("div", {
                  id: _ctx.id,
                  class: normalizeClass([unref(ns).b(), _ctx.customClass, unref(horizontalClass)]),
                  style: normalizeStyle(unref(positionStyle)),
                  role: "alert",
                  onMouseenter: clearTimer,
                  onMouseleave: startTimer,
                  onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
                }, [unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass([unref(ns).e("icon"), unref(typeClass)])
                }, {
                  default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true), createBaseVNode("div", {
                  class: normalizeClass(unref(ns).e("group"))
                }, [createBaseVNode("h2", {
                  class: normalizeClass(unref(ns).e("title")),
                  textContent: toDisplayString(_ctx.title)
                }, null, 10, _hoisted_2), withDirectives(createBaseVNode("div", {
                  class: normalizeClass(unref(ns).e("content")),
                  style: normalizeStyle(!!_ctx.title ? void 0 : {
                    margin: 0
                  })
                }, [renderSlot(_ctx.$slots, "default", {}, () => [!_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(_ctx.message), 1)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "), createBaseVNode("p", {
                  innerHTML: _ctx.message
                }, null, 8, _hoisted_4)], 2112))])], 6), [[vShow, _ctx.message]]), _ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass(unref(ns).e("closeBtn")),
                  onClick: withModifiers(close$1, ["stop"])
                }, {
                  default: withCtx(() => [createVNode(unref(Close))]),
                  _: 1
                }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)], 2)], 46, _hoisted_1), [[vShow, visible.value]])]),
                _: 3
              }, 8, ["name", "onBeforeLeave"]);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/notification/src/notify.mjs
        init_shared_esm_bundler();
        notifications = {
          "top-left": [],
          "top-right": [],
          "bottom-left": [],
          "bottom-right": []
        };
        GAP_SIZE = 16;
        seed = 1;
        notify = function (options = {}, context = null) {
          if (!isClient) return {
            close: () => void 0
          };
          if (typeof options === "string" || isVNode(options)) options = {
            message: options
          };
          const position = options.position || "top-right";
          let verticalOffset = options.offset || 0;
          notifications[position].forEach(({
            vm: vm2
          }) => {
            var _a;
            verticalOffset += (((_a = vm2.el) == null ? void 0 : _a.offsetHeight) || 0) + GAP_SIZE;
          });
          verticalOffset += GAP_SIZE;
          const id = `notification_${seed++}`;
          const userOnClose = options.onClose;
          const props = {
            ...options,
            offset: verticalOffset,
            id,
            onClose: () => {
              close(id, position, userOnClose);
            }
          };
          let appendTo = document.body;
          if (isElement(options.appendTo)) appendTo = options.appendTo;else if (isString(options.appendTo)) appendTo = document.querySelector(options.appendTo);
          if (!isElement(appendTo)) {
            debugWarn("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body.");
            appendTo = document.body;
          }
          const container = document.createElement("div");
          const vm = createVNode(NotificationConstructor, props, isVNode(props.message) ? {
            default: () => props.message
          } : null);
          vm.appContext = context != null ? context : notify._context;
          vm.props.onDestroy = () => {
            render(null, container);
          };
          render(vm, container);
          notifications[position].push({
            vm
          });
          appendTo.appendChild(container.firstElementChild);
          return {
            close: () => {
              vm.component.exposed.visible.value = false;
            }
          };
        };
        notificationTypes.forEach(type => {
          notify[type] = (options = {}) => {
            if (typeof options === "string" || isVNode(options)) options = {
              message: options
            };
            return notify({
              ...options,
              type
            });
          };
        });
        notify.closeAll = closeAll;
        notify._context = null;

        //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/notification/index.mjs
        ElNotification = withInstallFunction(notify, "$notify"); //#endregion
        //#region src/app/utils/htmlUtils.ts
        import_lib = /* @__PURE__ */__toESM(require_lib());
        _export("l", sanitizeIfString = message => {
          if (typeof message === "string") return sanitizeHtml(message);
          return message;
        });
        _export("r", capitalizeFirstLetter = text => {
          return text.charAt(0).toUpperCase() + text.slice(1);
        });
        _export("i", getBannerRowHeight = async () => {
          return await new Promise(resolve => {
            setTimeout(() => {
              resolve(document.getElementById("banners")?.clientHeight ?? 0);
            }, 0);
          });
        });
        APP_Z_INDEXES = {
          CONTEXT_MENU: 10,
          APP_HEADER: 99,
          SELECT_BOX: 100,
          CANVAS_ADD_BUTTON: 101,
          APP_SIDEBAR: 999,
          CANVAS_SELECT_BOX: 100,
          TOP_BANNERS: 999,
          NODE_CREATOR: 1700,
          ASK_ASSISTANT_CHAT: 1750,
          NDV: 1800,
          COMMAND_BAR: 1900,
          MODALS: 2e3,
          TOASTS: 2100,
          ASK_ASSISTANT_FLOATING_BUTTON: 3e3,
          ASK_ASSISTANT_FLOATING_BUTTON_TOOLTIP: 3e3,
          CODEMIRROR_TOOLTIP: 3e3,
          DRAGGABLE: 9999999,
          ACTIVE_STICKY: 9999999,
          WORKFLOW_PREVIEW_NDV: 9999999,
          NPS_SURVEY_MODAL: 3001
        };
        setAppZIndexes = () => {
          Object.keys(APP_Z_INDEXES).forEach(key => {
            const variableName = `--${key.toLowerCase().replaceAll("_", "-")}--z`;
            const value = APP_Z_INDEXES[key];
            document.documentElement.style.setProperty(variableName, `${value}`);
          });
        };
        _export("n", useStyles = () => ({
          APP_Z_INDEXES,
          setAppZIndexes
        })); //#endregion
        //#region src/app/composables/useToast.ts
        stickyNotificationQueue = [];
      }
    };
  });
})();
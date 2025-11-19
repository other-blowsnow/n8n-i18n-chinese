;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./ParameterInputList-legacy-DirG3aZ4.js", "./col-legacy-CQMoYMQI.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./assistant.store-legacy-D5C3Qmmi.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./dataTable.store-legacy-BFWf9Jk0.js", "./CommunityNodeUpdateInfo-legacy-12fQcwXn.js", "./VirtualSchema-legacy-9f7FeJ8b.js", "./useActions-legacy-A6v3pRgY.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, getCurrentInstance, nextTick, unref, ref, onBeforeUnmount, h, createVNode, defineComponent, reactive, toDisplayString, createBlock, toValue, onMounted, Fragment, normalizeClass, watch, renderSlot, withCtx, openBlock, withModifiers, renderList, createTextVNode, useTemplateRef, vShow, useSlots, createBaseVNode, withDirectives, normalizeStyle, useElementSize, isClient, noop, isIOS, useResizeObserver, toRef, directiveHooks, notNullish, I18nT, isVue2, toValue$1, onClickOutside, useI18n, useThrottleFn, tryOnScopeDispose, isObject, useDebounceFn, tryOnMounted, N8nNotice_default, N8nCallout_default, N8nText_default, N8nButton_default, N8nBlockUi_default, N8nIconButton_default, N8nInlineTextEdit_default, N8nTabs_default, N8nTooltip_default, N8nRadioButtons_default, N8nIcon_default, ElCollapseTransition, __plugin_vue_export_helper_default, require_get, useRoute, TitledList_default, useNodeCredentialOptions, collectParametersByTab, collectSettings, getNodeSettingsInitialValues, createCommonNodeSettings, ParameterInputList_default, useNodeSettingsParameters, nameIsParameter, NodeCredentials_default, ElRow, ElCol, useSettingsStore, useHistoryStore, importCurlEventBus, useProjectsStore, useCredentialsStore, RenameNodeCommand, useUIStore, ProjectTypes, COMMUNITY_NODES_INSTALLATION_DOCS_URL, injectWorkflowState, COMMUNITY_PACKAGE_INSTALL_MODAL_KEY, useNDVStore, useUsersStore, useActionsGenerator, useWorkflowHelpers, useWorkflowsStore, useNodeTypesStore, useTelemetry, removePreviewToken, useNodeHelpers, useToast, deepCopy, CUSTOM_API_CALL_KEY, CHAT_TRIGGER_NODE_TYPE, FORM_TRIGGER_NODE_TYPE, isCommunityPackageName, getNodeInputs, BASE_NODE_SURVEY_URL, NodeConnectionTypes, OPEN_URL_PANEL_TRIGGER_NODE_TYPES, CUSTOM_NODES_DOCS_URL, VIEWS, PRODUCTION_ONLY_TRIGGER_NODE_TYPES, DATA_TABLE_NODES, BUILTIN_NODES_DOCS_URL, NPM_PACKAGE_DOCS_BASE_URL, OPEN_AI_API_CREDENTIAL_TYPE, getNodeParameters, MCP_TRIGGER_NODE_TYPE, ndvEventBus, useDebounce, useExternalHooks, useNodeCreatorStore, getNodeIconSource, useClipboard, NodeIcon_default, useDataTableStore, useInstallNode, useInstalledCommunityPackage, CommunityNodeFooter_default, ContactAdministratorToInstall_default, CommunityNodeUpdateInfo_default, NodeExecuteButton_default, useActions, __vite_style__, _hoisted_1$6, LANGCHAIN_NODES_PREFIX, N8N_NODES_PREFIX, FreeAiCreditsCallout_vue_vue_type_script_setup_true_lang_default, FreeAiCreditsCallout_default, OnClickOutside, defaultWindow, _iOSWorkaround, vOnClickOutside, vOnKeyStroke, DEFAULT_DELAY, DEFAULT_THRESHOLD, vOnLongPress, vElementHover, vElementSize, vElementVisibility, ARRIVED_STATE_THRESHOLD_PIXELS, vInfiniteScroll, vIntersectionObserver, vScroll, elInitialOverflow, vScrollLock, _hoisted_1$5, _hoisted_2$4, _hoisted_3$2, _hoisted_4$2, _hoisted_5$2, _hoisted_6$1, NDVSubConnections_vue_vue_type_script_setup_true_lang_default, container$1, connections, connectionType, connectionLabel, hasIssues, connectedNodesWrapper, plusButton, connectedNodesWrapperExpanded, connectedNodesMultiple, connectedNode, connectedNodes, nodeWrapper, NDVSubConnections_vue_vue_type_style_index_0_lang_module_default, cssModules$6, NDVSubConnections_default, useNodeDocsUrl, NodeSettingsTabs_vue_vue_type_script_setup_true_lang_default, NodeSettingsTabs_default, NodeSettingsHeader_vue_vue_type_script_setup_true_lang_default, header$1, execute, tabs, NodeSettingsHeader_vue_vue_type_style_index_0_lang_module_default, cssModules$5, NodeSettingsHeader_default, _hoisted_1$4, _hoisted_2$3, _hoisted_3$1, _hoisted_4$1, _hoisted_5$1, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12, NodeWebhooks_vue_vue_type_script_setup_true_lang_default, NodeWebhooks_default, ExperimentalEmbeddedNdvHeader_vue_vue_type_script_setup_true_lang_default, component$1, title, disabled, titleText, subTitleText, tabsContainer, ExperimentalEmbeddedNdvHeader_vue_vue_type_style_index_0_lang_module_default, cssModules$4, ExperimentalEmbeddedNdvHeader_default, _hoisted_1$3, NodeActionsList_vue_vue_type_script_setup_true_lang_default, component, label, option, selected, optionText, NodeActionsList_vue_vue_type_style_index_0_lang_module_default, cssModules$3, NodeActionsList_default, _hoisted_1$2, _hoisted_2$2, NodeSettingsInvalidNodeWarning_vue_vue_type_script_setup_true_lang_default, communityNodeActionsContainer, nodeIsNotValid, warningIcon, descriptionContainer, NodeSettingsInvalidNodeWarning_vue_vue_type_style_index_0_lang_module_default, cssModules$2, NodeSettingsInvalidNodeWarning_default, _hoisted_1$1, _hoisted_2$1, NodeStorageLimitCallout_vue_vue_type_script_setup_true_lang_default, NodeStorageLimitCallout_default, NodeTitle_vue_vue_type_script_setup_true_lang_default, container, textWrapper, iconWrapper, NodeTitle_vue_vue_type_style_index_0_lang_module_default, cssModules$1, NodeTitle_default, import_get, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, NodeSettings_vue_vue_type_script_setup_true_lang_default, header, featureRequest, NodeSettings_vue_vue_type_style_index_0_lang_module_default, cssModules, NodeSettings_default;
    function unrefElement(elRef) {
      var _a;
      const plain = toValue$1(elRef);
      return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
    }
    function useEventListener(...args) {
      let target;
      let events;
      let listeners;
      let options;
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        [events, listeners, options] = args;
        target = defaultWindow;
      } else [target, events, listeners, options] = args;
      if (!target) return noop;
      if (!Array.isArray(events)) events = [events];
      if (!Array.isArray(listeners)) listeners = [listeners];
      const cleanups = [];
      const cleanup = () => {
        cleanups.forEach(fn => fn());
        cleanups.length = 0;
      };
      const register = (el, event, listener, options2) => {
        el.addEventListener(event, listener, options2);
        return () => el.removeEventListener(event, listener, options2);
      };
      const stopWatch = watch(() => [unrefElement(target), toValue$1(options)], ([el, options2]) => {
        cleanup();
        if (!el) return;
        const optionsClone = isObject(options2) ? {
          ...options2
        } : options2;
        cleanups.push(...events.flatMap(event => {
          return listeners.map(listener => register(el, event, listener, optionsClone));
        }));
      }, {
        immediate: true,
        flush: "post"
      });
      const stop = () => {
        stopWatch();
        cleanup();
      };
      tryOnScopeDispose(stop);
      return stop;
    }
    function onClickOutside$1(target, handler, options = {}) {
      const {
        window: window$1 = defaultWindow,
        ignore = [],
        capture = true,
        detectIframe = false
      } = options;
      if (!window$1) return noop;
      if (isIOS && !_iOSWorkaround) {
        _iOSWorkaround = true;
        Array.from(window$1.document.body.children).forEach(el => el.addEventListener("click", noop));
        window$1.document.documentElement.addEventListener("click", noop);
      }
      let shouldListen = true;
      const shouldIgnore = event => {
        return ignore.some(target2 => {
          if (typeof target2 === "string") return Array.from(window$1.document.querySelectorAll(target2)).some(el => el === event.target || event.composedPath().includes(el));else {
            const el = unrefElement(target2);
            return el && (event.target === el || event.composedPath().includes(el));
          }
        });
      };
      const listener = event => {
        const el = unrefElement(target);
        if (!el || el === event.target || event.composedPath().includes(el)) return;
        if (event.detail === 0) shouldListen = !shouldIgnore(event);
        if (!shouldListen) {
          shouldListen = true;
          return;
        }
        handler(event);
      };
      const cleanup = [useEventListener(window$1, "click", listener, {
        passive: true,
        capture
      }), useEventListener(window$1, "pointerdown", e => {
        const el = unrefElement(target);
        shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
      }, {
        passive: true
      }), detectIframe && useEventListener(window$1, "blur", event => {
        setTimeout(() => {
          var _a;
          const el = unrefElement(target);
          if (((_a = window$1.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window$1.document.activeElement))) handler(event);
        }, 0);
      })].filter(Boolean);
      const stop = () => cleanup.forEach(fn => fn());
      return stop;
    }
    function createKeyPredicate(keyFilter) {
      if (typeof keyFilter === "function") return keyFilter;else if (typeof keyFilter === "string") return event => event.key === keyFilter;else if (Array.isArray(keyFilter)) return event => keyFilter.includes(event.key);
      return () => true;
    }
    function onKeyStroke(...args) {
      let key;
      let handler;
      let options = {};
      if (args.length === 3) {
        key = args[0];
        handler = args[1];
        options = args[2];
      } else if (args.length === 2) {
        if (typeof args[1] === "object") {
          key = true;
          handler = args[0];
          options = args[1];
        } else {
          key = args[0];
          handler = args[1];
        }
      } else {
        key = true;
        handler = args[0];
      }
      const {
        target = defaultWindow,
        eventName = "keydown",
        passive = false,
        dedupe = false
      } = options;
      const predicate = createKeyPredicate(key);
      const listener = e => {
        if (e.repeat && toValue$1(dedupe)) return;
        if (predicate(e)) handler(e);
      };
      return useEventListener(target, eventName, listener, passive);
    }
    function onLongPress(target, handler, options) {
      var _a, _b;
      const elementRef = computed(() => unrefElement(target));
      let timeout;
      let posStart;
      let startTimestamp;
      let hasLongPressed = false;
      function clear() {
        if (timeout) {
          clearTimeout(timeout);
          timeout = void 0;
        }
        posStart = void 0;
        startTimestamp = void 0;
        hasLongPressed = false;
      }
      function onRelease(ev) {
        var _a2, _b2, _c;
        const [_startTimestamp, _posStart, _hasLongPressed] = [startTimestamp, posStart, hasLongPressed];
        clear();
        if (!(options == null ? void 0 : options.onMouseUp) || !_posStart || !_startTimestamp) return;
        if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value) return;
        if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent) ev.preventDefault();
        if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop) ev.stopPropagation();
        const dx = ev.x - _posStart.x;
        const dy = ev.y - _posStart.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        options.onMouseUp(ev.timeStamp - _startTimestamp, distance, _hasLongPressed);
      }
      function onDown(ev) {
        var _a2, _b2, _c, _d;
        if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value) return;
        clear();
        if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent) ev.preventDefault();
        if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop) ev.stopPropagation();
        posStart = {
          x: ev.x,
          y: ev.y
        };
        startTimestamp = ev.timeStamp;
        timeout = setTimeout(() => {
          hasLongPressed = true;
          handler(ev);
        }, (_d = options == null ? void 0 : options.delay) != null ? _d : DEFAULT_DELAY);
      }
      function onMove(ev) {
        var _a2, _b2, _c, _d;
        if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value) return;
        if (!posStart || (options == null ? void 0 : options.distanceThreshold) === false) return;
        if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent) ev.preventDefault();
        if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop) ev.stopPropagation();
        const dx = ev.x - posStart.x;
        const dy = ev.y - posStart.y;
        if (Math.sqrt(dx * dx + dy * dy) >= ((_d = options == null ? void 0 : options.distanceThreshold) != null ? _d : DEFAULT_THRESHOLD)) clear();
      }
      const listenerOptions = {
        capture: (_a = options == null ? void 0 : options.modifiers) == null ? void 0 : _a.capture,
        once: (_b = options == null ? void 0 : options.modifiers) == null ? void 0 : _b.once
      };
      const cleanup = [useEventListener(elementRef, "pointerdown", onDown, listenerOptions), useEventListener(elementRef, "pointermove", onMove, listenerOptions), useEventListener(elementRef, ["pointerup", "pointerleave"], onRelease, listenerOptions)];
      const stop = () => cleanup.forEach(fn => fn());
      return stop;
    }
    function useMounted() {
      const isMounted = ref(false);
      const instance = getCurrentInstance();
      if (instance) onMounted(() => {
        isMounted.value = true;
      }, false ? void 0 : instance);
      return isMounted;
    }
    function useSupported(callback) {
      const isMounted = useMounted();
      return computed(() => {
        isMounted.value;
        return Boolean(callback());
      });
    }
    function useElementHover(el, options = {}) {
      const {
        delayEnter = 0,
        delayLeave = 0,
        window: window$1 = defaultWindow
      } = options;
      const isHovered = ref(false);
      let timer;
      const toggle = entering => {
        const delay = entering ? delayEnter : delayLeave;
        if (timer) {
          clearTimeout(timer);
          timer = void 0;
        }
        if (delay) timer = setTimeout(() => isHovered.value = entering, delay);else isHovered.value = entering;
      };
      if (!window$1) return isHovered;
      useEventListener(el, "mouseenter", () => toggle(true), {
        passive: true
      });
      useEventListener(el, "mouseleave", () => toggle(false), {
        passive: true
      });
      return isHovered;
    }
    function useResizeObserver$1(target, callback, options = {}) {
      const {
        window: window$1 = defaultWindow,
        ...observerOptions
      } = options;
      let observer;
      const isSupported = useSupported(() => window$1 && "ResizeObserver" in window$1);
      const cleanup = () => {
        if (observer) {
          observer.disconnect();
          observer = void 0;
        }
      };
      const stopWatch = watch(computed(() => Array.isArray(target) ? target.map(el => unrefElement(el)) : [unrefElement(target)]), els => {
        cleanup();
        if (isSupported.value && window$1) {
          observer = new ResizeObserver(callback);
          for (const _el of els) _el && observer.observe(_el, observerOptions);
        }
      }, {
        immediate: true,
        flush: "post"
      });
      const stop = () => {
        cleanup();
        stopWatch();
      };
      tryOnScopeDispose(stop);
      return {
        isSupported,
        stop
      };
    }
    function useElementSize$1(target, initialSize = {
      width: 0,
      height: 0
    }, options = {}) {
      const {
        window: window$1 = defaultWindow,
        box = "content-box"
      } = options;
      const isSVG = computed(() => {
        var _a, _b;
        return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
      });
      const width = ref(initialSize.width);
      const height = ref(initialSize.height);
      const {
        stop: stop1
      } = useResizeObserver$1(target, ([entry]) => {
        const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
        if (window$1 && isSVG.value) {
          const $elem = unrefElement(target);
          if ($elem) {
            const rect = $elem.getBoundingClientRect();
            width.value = rect.width;
            height.value = rect.height;
          }
        } else if (boxSize) {
          const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
          width.value = formatBoxSize.reduce((acc, {
            inlineSize
          }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, {
            blockSize
          }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }, options);
      tryOnMounted(() => {
        const ele = unrefElement(target);
        if (ele) {
          width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
          height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
        }
      });
      const stop2 = watch(() => unrefElement(target), ele => {
        width.value = ele ? initialSize.width : 0;
        height.value = ele ? initialSize.height : 0;
      });
      function stop() {
        stop1();
        stop2();
      }
      return {
        width,
        height,
        stop
      };
    }
    function useIntersectionObserver(target, callback, options = {}) {
      const {
        root,
        rootMargin = "0px",
        threshold = .1,
        window: window$1 = defaultWindow,
        immediate = true
      } = options;
      const isSupported = useSupported(() => window$1 && "IntersectionObserver" in window$1);
      const targets = computed(() => {
        const _target = toValue$1(target);
        return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
      });
      let cleanup = noop;
      const isActive = ref(immediate);
      const stopWatch = isSupported.value ? watch(() => [targets.value, unrefElement(root), isActive.value], ([targets2, root2]) => {
        cleanup();
        if (!isActive.value) return;
        if (!targets2.length) return;
        const observer = new IntersectionObserver(callback, {
          root: unrefElement(root2),
          rootMargin,
          threshold
        });
        targets2.forEach(el => el && observer.observe(el));
        cleanup = () => {
          observer.disconnect();
          cleanup = noop;
        };
      }, {
        immediate,
        flush: "post"
      }) : noop;
      const stop = () => {
        cleanup();
        stopWatch();
        isActive.value = false;
      };
      tryOnScopeDispose(stop);
      return {
        isSupported,
        isActive,
        pause() {
          cleanup();
          isActive.value = false;
        },
        resume() {
          isActive.value = true;
        },
        stop
      };
    }
    function useElementVisibility$1(element, options = {}) {
      const {
        window: window$1 = defaultWindow,
        scrollTarget,
        threshold = 0
      } = options;
      const elementIsVisible = ref(false);
      useIntersectionObserver(element, intersectionObserverEntries => {
        let isIntersecting = elementIsVisible.value;
        let latestTime = 0;
        for (const entry of intersectionObserverEntries) if (entry.time >= latestTime) {
          latestTime = entry.time;
          isIntersecting = entry.isIntersecting;
        }
        elementIsVisible.value = isIntersecting;
      }, {
        root: scrollTarget,
        window: window$1,
        threshold
      });
      return elementIsVisible;
    }
    function useScroll(element, options = {}) {
      const {
        throttle = 0,
        idle = 200,
        onStop = noop,
        onScroll = noop,
        offset = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        eventListenerOptions = {
          capture: false,
          passive: true
        },
        behavior = "auto",
        window: window$1 = defaultWindow,
        onError = e => {
          console.error(e);
        }
      } = options;
      const internalX = ref(0);
      const internalY = ref(0);
      const x = computed({
        get() {
          return internalX.value;
        },
        set(x2) {
          scrollTo(x2, void 0);
        }
      });
      const y = computed({
        get() {
          return internalY.value;
        },
        set(y2) {
          scrollTo(void 0, y2);
        }
      });
      function scrollTo(_x, _y) {
        var _a, _b, _c, _d;
        if (!window$1) return;
        const _element = toValue$1(element);
        if (!_element) return;
        (_c = _element instanceof Document ? window$1.document.body : _element) == null || _c.scrollTo({
          top: (_a = toValue$1(_y)) != null ? _a : y.value,
          left: (_b = toValue$1(_x)) != null ? _b : x.value,
          behavior: toValue$1(behavior)
        });
        const scrollContainer = ((_d = _element == null ? void 0 : _element.document) == null ? void 0 : _d.documentElement) || (_element == null ? void 0 : _element.documentElement) || _element;
        if (x != null) internalX.value = scrollContainer.scrollLeft;
        if (y != null) internalY.value = scrollContainer.scrollTop;
      }
      const isScrolling = ref(false);
      const arrivedState = reactive({
        left: true,
        right: false,
        top: true,
        bottom: false
      });
      const directions = reactive({
        left: false,
        right: false,
        top: false,
        bottom: false
      });
      const onScrollEnd = e => {
        if (!isScrolling.value) return;
        isScrolling.value = false;
        directions.left = false;
        directions.right = false;
        directions.top = false;
        directions.bottom = false;
        onStop(e);
      };
      const onScrollEndDebounced = useDebounceFn(onScrollEnd, throttle + idle);
      const setArrivedState = target => {
        var _a;
        if (!window$1) return;
        const el = ((_a = target == null ? void 0 : target.document) == null ? void 0 : _a.documentElement) || (target == null ? void 0 : target.documentElement) || unrefElement(target);
        const {
          display,
          flexDirection
        } = getComputedStyle(el);
        const scrollLeft = el.scrollLeft;
        directions.left = scrollLeft < internalX.value;
        directions.right = scrollLeft > internalX.value;
        const left = Math.abs(scrollLeft) <= (offset.left || 0);
        const right = Math.abs(scrollLeft) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
        if (display === "flex" && flexDirection === "row-reverse") {
          arrivedState.left = right;
          arrivedState.right = left;
        } else {
          arrivedState.left = left;
          arrivedState.right = right;
        }
        internalX.value = scrollLeft;
        let scrollTop = el.scrollTop;
        if (target === window$1.document && !scrollTop) scrollTop = window$1.document.body.scrollTop;
        directions.top = scrollTop < internalY.value;
        directions.bottom = scrollTop > internalY.value;
        const top = Math.abs(scrollTop) <= (offset.top || 0);
        const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
        if (display === "flex" && flexDirection === "column-reverse") {
          arrivedState.top = bottom;
          arrivedState.bottom = top;
        } else {
          arrivedState.top = top;
          arrivedState.bottom = bottom;
        }
        internalY.value = scrollTop;
      };
      const onScrollHandler = e => {
        var _a;
        if (!window$1) return;
        setArrivedState((_a = e.target.documentElement) != null ? _a : e.target);
        isScrolling.value = true;
        onScrollEndDebounced(e);
        onScroll(e);
      };
      useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler, eventListenerOptions);
      tryOnMounted(() => {
        try {
          const _element = toValue$1(element);
          if (!_element) return;
          setArrivedState(_element);
        } catch (e) {
          onError(e);
        }
      });
      useEventListener(element, "scrollend", onScrollEnd, eventListenerOptions);
      return {
        x,
        y,
        isScrolling,
        arrivedState,
        directions,
        measure() {
          const _element = toValue$1(element);
          if (window$1 && _element) setArrivedState(_element);
        }
      };
    }
    function resolveElement(el) {
      if (typeof Window !== "undefined" && el instanceof Window) return el.document.documentElement;
      if (typeof Document !== "undefined" && el instanceof Document) return el.documentElement;
      return el;
    }
    function useInfiniteScroll(element, onLoadMore, options = {}) {
      var _a;
      const {
        direction = "bottom",
        interval = 100,
        canLoadMore = () => true
      } = options;
      const state = reactive(useScroll(element, {
        ...options,
        offset: {
          [direction]: (_a = options.distance) != null ? _a : 0,
          ...options.offset
        }
      }));
      const promise = ref();
      const isLoading = computed(() => !!promise.value);
      const observedElement = computed(() => {
        return resolveElement(toValue$1(element));
      });
      const isElementVisible = useElementVisibility$1(observedElement);
      function checkAndLoad() {
        state.measure();
        if (!observedElement.value || !isElementVisible.value || !canLoadMore(observedElement.value)) return;
        const {
          scrollHeight,
          clientHeight,
          scrollWidth,
          clientWidth
        } = observedElement.value;
        const isNarrower = direction === "bottom" || direction === "top" ? scrollHeight <= clientHeight : scrollWidth <= clientWidth;
        if (state.arrivedState[direction] || isNarrower) {
          if (!promise.value) promise.value = Promise.all([onLoadMore(state), new Promise(resolve => setTimeout(resolve, interval))]).finally(() => {
            promise.value = null;
            nextTick(() => checkAndLoad());
          });
        }
      }
      watch(() => [state.arrivedState[direction], isElementVisible.value], checkAndLoad, {
        immediate: true
      });
      return {
        isLoading
      };
    }
    function checkOverflowScroll(ele) {
      const style = window.getComputedStyle(ele);
      if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;else {
        const parent = ele.parentNode;
        if (!parent || parent.tagName === "BODY") return false;
        return checkOverflowScroll(parent);
      }
    }
    function preventDefault(rawEvent) {
      const e = rawEvent || window.event;
      const _target = e.target;
      if (checkOverflowScroll(_target)) return false;
      if (e.touches.length > 1) return true;
      if (e.preventDefault) e.preventDefault();
      return false;
    }
    function useScrollLock(element, initialState = false) {
      const isLocked = ref(initialState);
      let stopTouchMoveListener = null;
      let initialOverflow = "";
      watch(toRef(element), el => {
        const target = resolveElement(toValue$1(el));
        if (target) {
          const ele = target;
          if (!elInitialOverflow.get(ele)) elInitialOverflow.set(ele, ele.style.overflow);
          if (ele.style.overflow !== "hidden") initialOverflow = ele.style.overflow;
          if (ele.style.overflow === "hidden") return isLocked.value = true;
          if (isLocked.value) return ele.style.overflow = "hidden";
        }
      }, {
        immediate: true
      });
      const lock = () => {
        const el = resolveElement(toValue$1(element));
        if (!el || isLocked.value) return;
        if (isIOS) stopTouchMoveListener = useEventListener(el, "touchmove", e => {
          preventDefault(e);
        }, {
          passive: false
        });
        el.style.overflow = "hidden";
        isLocked.value = true;
      };
      const unlock = () => {
        const el = resolveElement(toValue$1(element));
        if (!el || !isLocked.value) return;
        isIOS && stopTouchMoveListener?.();
        el.style.overflow = initialOverflow;
        elInitialOverflow.delete(el);
        isLocked.value = false;
      };
      tryOnScopeDispose(unlock);
      return computed({
        get() {
          return isLocked.value;
        },
        set(v) {
          if (v) lock();else unlock();
        }
      });
    }
    function onScrollLock() {
      let isMounted = false;
      const state = ref(false);
      return (el, binding) => {
        state.value = binding.value;
        if (isMounted) return;
        isMounted = true;
        const isLocked = useScrollLock(el, binding.value);
        watch(state, v => isLocked.value = v);
      };
    }
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        getCurrentInstance = _vueRuntimeEsmBundlerLegacy003Js.F;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        toValue = _vueRuntimeEsmBundlerLegacy003Js.Ut;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        useSlots = _vueRuntimeEsmBundlerLegacy003Js.pt;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        useElementSize = _MapCacheLegacy005Js.E;
        isClient = _MapCacheLegacy005Js.G;
        noop = _MapCacheLegacy005Js.J;
        isIOS = _MapCacheLegacy005Js.K;
        useResizeObserver = _MapCacheLegacy005Js.N;
        toRef = _MapCacheLegacy005Js.Q;
        directiveHooks = _MapCacheLegacy005Js.W;
        notNullish = _MapCacheLegacy005Js.Y;
        I18nT = _MapCacheLegacy005Js._t;
        isVue2 = _MapCacheLegacy005Js.ct;
        toValue$1 = _MapCacheLegacy005Js.et;
        onClickOutside = _MapCacheLegacy005Js.g;
        useI18n = _MapCacheLegacy005Js.gt;
        useThrottleFn = _MapCacheLegacy005Js.it;
        tryOnScopeDispose = _MapCacheLegacy005Js.nt;
        isObject = _MapCacheLegacy005Js.q;
        useDebounceFn = _MapCacheLegacy005Js.rt;
        tryOnMounted = _MapCacheLegacy005Js.tt;
      }, function (_srcLegacy007Js) {
        N8nNotice_default = _srcLegacy007Js.E;
        N8nCallout_default = _srcLegacy007Js.Fn;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nBlockUi_default = _srcLegacy007Js.Q;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nInlineTextEdit_default = _srcLegacy007Js.a;
        N8nTabs_default = _srcLegacy007Js.g;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nRadioButtons_default = _srcLegacy007Js.x;
        N8nIcon_default = _srcLegacy007Js.zn;
        ElCollapseTransition = _srcLegacy007Js.zt;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        require_get = _truncateLegacy00hJs.r;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_ParameterInputListLegacy00rJs) {
        TitledList_default = _ParameterInputListLegacy00rJs.E;
        useNodeCredentialOptions = _ParameterInputListLegacy00rJs.T;
        collectParametersByTab = _ParameterInputListLegacy00rJs.d;
        collectSettings = _ParameterInputListLegacy00rJs.f;
        getNodeSettingsInitialValues = _ParameterInputListLegacy00rJs.h;
        createCommonNodeSettings = _ParameterInputListLegacy00rJs.p;
        ParameterInputList_default = _ParameterInputListLegacy00rJs.t;
        useNodeSettingsParameters = _ParameterInputListLegacy00rJs.u;
        nameIsParameter = _ParameterInputListLegacy00rJs.v;
        NodeCredentials_default = _ParameterInputListLegacy00rJs.w;
      }, function (_colLegacy00zJs) {
        ElRow = _colLegacy00zJs.n;
        ElCol = _colLegacy00zJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useHistoryStore = _useTelemetryLegacy00FJs.Cr;
        importCurlEventBus = _useTelemetryLegacy00FJs.Di;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        RenameNodeCommand = _useTelemetryLegacy00FJs.Mr;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        ProjectTypes = _useTelemetryLegacy00FJs.On;
        COMMUNITY_NODES_INSTALLATION_DOCS_URL = _useTelemetryLegacy00FJs.Ri;
        injectWorkflowState = _useTelemetryLegacy00FJs.Sn;
        COMMUNITY_PACKAGE_INSTALL_MODAL_KEY = _useTelemetryLegacy00FJs.Vi;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        useActionsGenerator = _useTelemetryLegacy00FJs.it;
        useWorkflowHelpers = _useTelemetryLegacy00FJs.mn;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        removePreviewToken = _useTelemetryLegacy00FJs.vt;
        useNodeHelpers = _useTelemetryLegacy00FJs.xn;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        deepCopy = _constantsLegacy00NJs.Hi;
        CUSTOM_API_CALL_KEY = _constantsLegacy00NJs.I;
        CHAT_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.Q;
        FORM_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.St;
        isCommunityPackageName = _constantsLegacy00NJs.Ui;
        getNodeInputs = _constantsLegacy00NJs._i;
        BASE_NODE_SURVEY_URL = _constantsLegacy00NJs.c;
        NodeConnectionTypes = _constantsLegacy00NJs.ea;
        OPEN_URL_PANEL_TRIGGER_NODE_TYPES = _constantsLegacy00NJs.en;
        CUSTOM_NODES_DOCS_URL = _constantsLegacy00NJs.f;
        VIEWS = _constantsLegacy00NJs.mo;
        PRODUCTION_ONLY_TRIGGER_NODE_TYPES = _constantsLegacy00NJs.rn;
        DATA_TABLE_NODES = _constantsLegacy00NJs.st;
        BUILTIN_NODES_DOCS_URL = _constantsLegacy00NJs.u;
        NPM_PACKAGE_DOCS_BASE_URL = _constantsLegacy00NJs.x;
        OPEN_AI_API_CREDENTIAL_TYPE = _constantsLegacy00NJs.ya;
        getNodeParameters = _constantsLegacy00NJs.yi;
        MCP_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.zt;
      }, function (_assistantStoreLegacy00RJs) {
        ndvEventBus = _assistantStoreLegacy00RJs.n;
      }, function (_useDebounceLegacy00VJs) {
        useDebounce = _useDebounceLegacy00VJs.t;
      }, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_nodeCreatorStoreLegacy01jJs) {
        useNodeCreatorStore = _nodeCreatorStoreLegacy01jJs.t;
      }, function (_nodeIconLegacy01lJs) {
        getNodeIconSource = _nodeIconLegacy01lJs.t;
      }, function (_useClipboardLegacy01nJs) {
        useClipboard = _useClipboardLegacy01nJs.t;
      }, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_dataTableStoreLegacy01HJs) {
        useDataTableStore = _dataTableStoreLegacy01HJs.t;
      }, function (_CommunityNodeUpdateInfoLegacy023Js) {
        useInstallNode = _CommunityNodeUpdateInfoLegacy023Js.a;
        useInstalledCommunityPackage = _CommunityNodeUpdateInfoLegacy023Js.i;
        CommunityNodeFooter_default = _CommunityNodeUpdateInfoLegacy023Js.n;
        ContactAdministratorToInstall_default = _CommunityNodeUpdateInfoLegacy023Js.r;
        CommunityNodeUpdateInfo_default = _CommunityNodeUpdateInfoLegacy023Js.t;
      }, function (_VirtualSchemaLegacy02fJs) {
        NodeExecuteButton_default = _VirtualSchemaLegacy02fJs.n;
      }, function (_useActionsLegacy03dJs) {
        useActions = _useActionsLegacy03dJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n@keyframes _horizontal-shake_1kr6k_1 {\n0% {\n    transform: translateX(0);\n}\n25% {\n    transform: translateX(5px);\n}\n50% {\n    transform: translateX(-5px);\n}\n75% {\n    transform: translateX(5px);\n}\n100% {\n    transform: translateX(0);\n}\n}\n._container_1kr6k_140 {\n  --node--size: 45px;\n  --plus-button--size: 30px;\n  --ndv--sub-connections--duration: 150ms;\n  --collapsed--offset: 10px;\n  padding-top: calc(var(--node--size) + var(--spacing--3xs));\n}\n._connections_1kr6k_148 {\n  min-height: calc(var(--node--size) + var(--spacing--md));\n  position: absolute;\n  bottom: calc(var(--node--size) / 2 * -1);\n  left: 0;\n  right: 0;\n  -webkit-user-select: none;\n          user-select: none;\n  justify-content: space-between;\n  display: grid;\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  grid-template-columns: repeat(var(--possible-connections), 1fr);\n}\n._connectionType_1kr6k_161 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: all calc(var(--ndv--sub-connections--duration) - 50ms) ease;\n}\n._connectionLabel_1kr6k_168 {\n  margin-bottom: var(--spacing--2xs);\n  font-size: var(--font-size--2xs);\n  -webkit-user-select: none;\n          user-select: none;\n  text-wrap: nowrap;\n}\n._connectionLabel_1kr6k_168._hasIssues_1kr6k_174 {\n  color: var(--color--danger);\n}\n._connectedNodesWrapper_1kr6k_178 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n._plusButton_1kr6k_186 {\n  transition: all var(--ndv--sub-connections--duration) ease;\n  position: absolute;\n  top: var(--spacing--2xs);\n}\n._plusButton_1kr6k_186._hasIssues_1kr6k_174 {\n  animation: _horizontal-shake_1kr6k_1 500ms;\n}\n._plusButton_1kr6k_186._hasIssues_1kr6k_174 button {\n  --button--color--text: var(--color--danger);\n  --button--border-color: var(--color--danger);\n}\n._plusButton_1kr6k_186:not(:last-child) {\n  z-index: 1;\n  right: 100%;\n  margin-right: calc(var(--plus-button--size) * -1 * 0.9);\n  pointer-events: none;\n}\n._connectedNodesWrapperExpanded_1kr6k_204 ._plusButton_1kr6k_186:not(:last-child) {\n  margin-right: var(--spacing--2xs);\n  opacity: 1;\n  pointer-events: all;\n}\n._connectedNodesMultiple_1kr6k_210 {\n  transition: all var(--ndv--sub-connections--duration) ease;\n}\n._connectedNodesWrapperExpanded_1kr6k_204 {\n  z-index: 1;\n}\n._connections_1kr6k_148:has(._connectedNodesWrapperExpanded_1kr6k_204) ._connectionType_1kr6k_161:not(:has(._connectedNodesWrapperExpanded_1kr6k_204)) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n._connectedNode_1kr6k_178 {\n  border: var(--border);\n  background-color: var(--node--color--background);\n  border-radius: 100%;\n  padding: var(--spacing--xs);\n  cursor: pointer;\n  pointer-events: all;\n  transition: all var(--ndv--sub-connections--duration) ease;\n  position: relative;\n  display: flex;\n  justify-self: center;\n  align-self: center;\n}\n._connectedNodes_1kr6k_178 {\n  display: flex;\n  justify-content: center;\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  margin-right: calc((var(--nodes-length) - 1) * -1 * (var(--node--size) - var(--collapsed--offset)));\n}\n._connectedNodesWrapperExpanded_1kr6k_204 ._connectedNodes_1kr6k_178 {\n  margin-right: 0;\n  margin-right: calc((var(--spacing--2xs) + var(--plus-button--size)) * -1);\n}\n._nodeWrapper_1kr6k_249 {\n  transition: all var(--ndv--sub-connections--duration) ease;\n  transform-origin: center;\n  z-index: 1;\n}\n._connectedNodesWrapperExpanded_1kr6k_204 ._nodeWrapper_1kr6k_249:not(:first-child) {\n  margin-left: var(--spacing--2xs);\n}\n._nodeWrapper_1kr6k_249._hasIssues_1kr6k_174 ._connectedNode_1kr6k_178 {\n  border-width: calc(var(--border-width) * 2);\n  border-color: var(--color--danger);\n}\n._nodeWrapper_1kr6k_249:not(:first-child) {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: translateX(calc(var(--node-index) * -1 * (var(--node--size) - var(--collapsed--offset))));\n}\n._connectedNodesWrapperExpanded_1kr6k_204 ._nodeWrapper_1kr6k_249 {\n  transform: translateX(0);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n#communityNode > div {\n  cursor: auto;\n  padding-right: 0;\n  padding-left: 0;\n}\n#communityNode > div:hover {\n  color: unset;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._header_qhhug_123 {\n  --tabs--arrow-buttons--color: var(--color--background--light-3);\n  display: flex;\n  align-items: center;\n  min-height: 40px;\n  border-bottom: var(--border);\n}\n._execute_qhhug_131 {\n  margin-right: var(--spacing--sm);\n}\n._tabs_qhhug_135 {\n  align-self: flex-end;\n}\n._tabs_qhhug_135 #communityNode {\n  padding-right: var(--spacing--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.webhooks[data-v-66c974d9] {\n  padding-bottom: var(--spacing--xs);\n  margin: var(--spacing--xs) 0;\n  border-bottom: 1px solid var(--color--text--tint-2);\n}\n.webhooks .headline[data-v-66c974d9] {\n  color: var(--color--primary);\n  font-weight: var(--font-weight--bold);\n  font-size: var(--font-size--2xs);\n}\n.http-field[data-v-66c974d9] {\n  position: absolute;\n  width: 50px;\n  display: inline-block;\n  top: calc(50% - 8px);\n}\n.http-method[data-v-66c974d9] {\n  background-color: var(--color--foreground--shade-2);\n  width: 40px;\n  height: 16px;\n  line-height: 16px;\n  margin-left: 5px;\n  text-align: center;\n  border-radius: 2px;\n  font-size: var(--font-size--2xs);\n  font-weight: var(--font-weight--bold);\n  color: var(--color--foreground--tint-2);\n}\n.minimize-icon[data-v-66c974d9] {\n  font-size: 1.3em;\n  margin-right: 0.5em;\n}\n.mode-selection-headline[data-v-66c974d9] {\n  line-height: 1.8em;\n}\n.node-webhooks[data-v-66c974d9] {\n  margin-left: 1em;\n}\n.url-field[data-v-66c974d9] {\n  display: inline-block;\n  width: calc(100% - 60px);\n  margin-left: 55px;\n}\n.url-field-full-width[data-v-66c974d9] {\n  display: inline-block;\n  margin: 5px 10px;\n}\n.url-selection[data-v-66c974d9] {\n  margin-top: var(--spacing--xs);\n}\n.minimize-button[data-v-66c974d9] {\n  display: inline-block;\n  transition-duration: 0.5s;\n  transition-property: transform;\n}\n.expanded .minimize-button[data-v-66c974d9] {\n  transform: rotate(90deg);\n}\n.webhook-url[data-v-66c974d9] {\n  position: relative;\n  top: 0;\n  width: 100%;\n  font-size: var(--font-size--2xs);\n  white-space: normal;\n  overflow: visible;\n  text-overflow: initial;\n  color: var(--color--text--shade-1);\n  text-align: left;\n  direction: ltr;\n  word-break: break-all;\n}\n.webhook-wrapper[data-v-66c974d9] {\n  line-height: 1.5;\n  position: relative;\n  margin-top: var(--spacing--xs);\n  background-color: var(--color--foreground--tint-2);\n  border-radius: 3px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_13igc_123 {\n  border-bottom: var(--border);\n}\n._title_13igc_127 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--2xs) var(--spacing--3xs) var(--spacing--2xs) var(--spacing--xs);\n  border-bottom: var(--border);\n  gap: var(--spacing--4xs);\n  cursor: grab;\n}\n._disabled_13igc_135 ._title_13igc_127 {\n  background-color: var(--color--foreground--tint-1);\n}\n._titleText_13igc_139 {\n  min-width: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-weight: var(--font-weight--medium);\n  font-size: var(--font-size--sm);\n  overflow: hidden;\n  /* Same amount of padding and negative margin for border to not be cut by overflow: hidden */\n  padding: var(--spacing--2xs);\n  margin: calc(-1 * var(--spacing--2xs));\n}\n._subTitleText_13igc_151 {\n  width: 0;\n  flex-grow: 100;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: var(--spacing--5xs);\n}\n._tabsContainer_13igc_160 {\n  padding-top: var(--spacing--xs);\n  padding-inline: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_1vh3g_123 {\n  padding-block: var(--spacing--2xs);\n}\n._label_1vh3g_127 {\n  padding: var(--spacing--3xs) var(--spacing--sm);\n  text-transform: uppercase;\n}\n._option_1vh3g_132 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--3xs) var(--spacing--sm);\n  gap: var(--spacing--2xs);\n  cursor: pointer;\n}\n._option_1vh3g_132._selected_1vh3g_139, ._option_1vh3g_132:hover {\n  background-color: var(--color--background);\n}\n._optionText_1vh3g_143 {\n  flex-grow: 1;\n  flex-shrink: 1;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._communityNodeActionsContainer_1mqmg_123 {\n  display: flex;\n  gap: var(--spacing--2xs);\n}\n._nodeIsNotValid_1mqmg_128 {\n  height: 75%;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: var(--line-height--md);\n}\n._warningIcon_1mqmg_139 {\n  color: var(--color--text--tint-2);\n  font-size: var(--font-size--2xl);\n}\n._descriptionContainer_1mqmg_144 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_oei61_123 {\n  font-weight: var(--font-weight--medium);\n  display: flex;\n  font-size: var(--font-size--md);\n  margin-right: var(--spacing--sm);\n  color: var(--color--text--shade-1);\n  width: 100%;\n}\n._textWrapper_oei61_132 {\n  display: flex;\n  flex-grow: 1;\n}\n._iconWrapper_oei61_137 {\n  display: inline-flex;\n  margin-right: var(--spacing--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._header_oiay4_123 {\n  background-color: var(--color--background);\n}\n._featureRequest_oiay4_127 {\n  margin-top: auto;\n  align-self: center;\n}\n._featureRequest_oiay4_127 a {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing--4xs);\n  margin-top: var(--spacing--xl);\n  font-size: var(--font-size--2xs);\n  font-weight: var(--font-weight--bold);\n  color: var(--color--text--tint-1);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.node-settings[data-v-e107ee77] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: var(--color--background--light-3);\n  height: 100%;\n  width: 100%;\n}\n.node-settings .no-parameters[data-v-e107ee77] {\n  margin-top: var(--spacing--xs);\n}\n.node-settings .header-side-menu[data-v-e107ee77] {\n  padding: var(--spacing--sm) var(--spacing--sm) var(--spacing--sm) var(--spacing--sm);\n  font-size: var(--font-size--lg);\n  display: flex;\n  justify-content: space-between;\n}\n.node-settings .header-side-menu .node-name[data-v-e107ee77] {\n  padding-top: var(--spacing--5xs);\n  margin-right: var(--spacing--sm);\n}\n.node-settings .node-parameters-wrapper[data-v-e107ee77] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 0 var(--spacing--md) var(--spacing--lg) var(--spacing--md);\n  flex-grow: 1;\n}\n.node-settings .node-parameters-wrapper.ndv-v2[data-v-e107ee77] {\n  padding: 0 var(--spacing--sm) var(--spacing--lg) var(--spacing--sm);\n}\n.node-settings.embedded .node-parameters-wrapper[data-v-e107ee77] {\n  padding: 0 var(--spacing--xs) var(--spacing--xs) var(--spacing--xs);\n}\n.node-settings.embedded .node-parameters-wrapper[data-v-e107ee77]:has(.action-tab) {\n  padding: 0 0 var(--spacing--xs) 0;\n}\n.node-settings.embedded .node-parameters-wrapper.with-static-scrollbar[data-v-e107ee77] {\n  padding: 0 var(--spacing--4xs) var(--spacing--xs) var(--spacing--xs);\n}\n.node-settings.embedded .node-parameters-wrapper.with-static-scrollbar[data-v-e107ee77]:has(.action-tab) {\n  padding: 0 0 var(--spacing--xs) 0;\n}\n@supports not (selector(::-webkit-scrollbar)) {\n.node-settings.embedded .node-parameters-wrapper.with-static-scrollbar[data-v-e107ee77] {\n    scrollbar-width: thin;\n}\n}\n@supports selector(::-webkit-scrollbar) {\n.node-settings.embedded .node-parameters-wrapper.with-static-scrollbar[data-v-e107ee77]::-webkit-scrollbar {\n    width: var(--spacing--2xs);\n}\n.node-settings.embedded .node-parameters-wrapper.with-static-scrollbar[data-v-e107ee77]::-webkit-scrollbar-thumb {\n    border-radius: var(--spacing--2xs);\n    background: var(--color--foreground--shade-1);\n    border: var(--spacing--5xs) solid var(--color--background--light-3);\n}\n}\n.node-settings.dragging[data-v-e107ee77] {\n  border-color: var(--color--primary);\n  box-shadow: 0 6px 16px rgba(255, 74, 51, 0.15);\n}\n.parameter-content[data-v-e107ee77] {\n  font-size: 0.9em;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.parameter-content input[data-v-e107ee77] {\n  width: calc(100% - 35px);\n  padding: 5px;\n}\n.parameter-content select[data-v-e107ee77] {\n  width: calc(100% - 20px);\n  padding: 5px;\n}\n.parameter-content[data-v-e107ee77]:before {\n  display: table;\n  content: \" \";\n  position: relative;\n  box-sizing: border-box;\n  clear: both;\n}\n.parameter-wrapper[data-v-e107ee77] {\n  padding: 0 1em;\n}\n.color-reset-button-wrapper[data-v-e107ee77] {\n  position: relative;\n}\n.color-reset-button[data-v-e107ee77] {\n  position: absolute;\n  right: 7px;\n  top: -25px;\n}\n.node-version[data-v-e107ee77] {\n  border-top: var(--border);\n  font-size: var(--font-size--xs);\n  font-size: var(--font-size--2xs);\n  padding: var(--spacing--xs) 0 var(--spacing--2xs) 0;\n  color: var(--color--text--tint-1);\n}\n.parameter-value input.expression[data-v-e107ee77] {\n  border-style: dashed;\n  border-color: #ff9600;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #793300;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n[data-has-output-connection=true] .ndv-connection-hint-notice {\n  display: none;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/FreeAiCreditsCallout.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$6 = {
          key: 2
        };
        LANGCHAIN_NODES_PREFIX = "@n8n/n8n-nodes-langchain.";
        N8N_NODES_PREFIX = "@n8n/n8n-nodes.";
        FreeAiCreditsCallout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "FreeAiCreditsCallout",
          props: {
            credentialTypeName: {}
          },
          setup(__props) {
            const props = __props;
            const NODES_WITH_OPEN_AI_API_CREDENTIAL = [`${LANGCHAIN_NODES_PREFIX}openAi`, `${LANGCHAIN_NODES_PREFIX}embeddingsOpenAi`, `${LANGCHAIN_NODES_PREFIX}lmChatOpenAi`, `${N8N_NODES_PREFIX}openAi`];
            const showSuccessCallout = ref(false);
            const claimingCredits = ref(false);
            const settingsStore = useSettingsStore();
            const credentialsStore = useCredentialsStore();
            const usersStore = useUsersStore();
            const ndvStore = useNDVStore();
            const projectsStore = useProjectsStore();
            const telemetry = useTelemetry();
            const i18n = useI18n();
            const toast = useToast();
            const userHasOpenAiCredentialAlready = computed(() => !!credentialsStore.allCredentials.filter(credential => credential.type === OPEN_AI_API_CREDENTIAL_TYPE).length);
            const isEditingOpenAiCredential = computed(() => props.credentialTypeName && props.credentialTypeName === "openAiApi");
            const userHasClaimedAiCreditsAlready = computed(() => !!usersStore.currentUser?.settings?.userClaimedAiCredits);
            const activeNodeHasOpenAiApiCredential = computed(() => ndvStore.activeNode?.type && NODES_WITH_OPEN_AI_API_CREDENTIAL.includes(ndvStore.activeNode.type));
            const userCanClaimOpenAiCredits = computed(() => {
              return settingsStore.isAiCreditsEnabled && (activeNodeHasOpenAiApiCredential.value || isEditingOpenAiCredential.value) && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value;
            });
            const onClaimCreditsClicked = async () => {
              claimingCredits.value = true;
              try {
                await credentialsStore.claimFreeAiCredits(projectsStore.currentProject?.id);
                if (usersStore?.currentUser?.settings) usersStore.currentUser.settings.userClaimedAiCredits = true;
                telemetry.track("User claimed OpenAI credits");
                showSuccessCallout.value = true;
              } catch (e) {
                toast.showError(e, i18n.baseText("freeAi.credits.showError.claim.title"), i18n.baseText("freeAi.credits.showError.claim.message"));
              } finally {
                claimingCredits.value = false;
              }
            };
            return (_ctx, _cache) => {
              return userCanClaimOpenAiCredits.value && !showSuccessCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                key: 0,
                theme: "secondary",
                icon: "circle-alert",
                class: "mt-xs"
              }, {
                trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  size: "small",
                  label: unref(i18n).baseText("freeAi.credits.callout.claim.button.label"),
                  loading: claimingCredits.value,
                  onClick: onClaimCreditsClicked
                }, null, 8, ["label", "loading"])]),
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.claim.title", {
                  interpolate: {
                    credits: unref(settingsStore).aiCreditsQuota
                  }
                })) + " ", 1)]),
                _: 1
              })) : showSuccessCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                key: 1,
                theme: "success",
                icon: "circle-check",
                class: "mt-xs"
              }, {
                default: withCtx(() => [createVNode(unref(N8nText_default), {
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part1", {
                    interpolate: {
                      credits: unref(settingsStore).aiCreditsQuota
                    }
                  })), 1)]),
                  _: 1
                }), _cache[0] || (_cache[0] = createTextVNode(" \xA0 ")), createVNode(unref(N8nText_default), {
                  size: "small",
                  bold: true
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part2")), 1)]),
                  _: 1
                })]),
                _: 1
              })) : (openBlock(), createElementBlock("div", _hoisted_1$6));
            };
          }
        }); //#endregion
        //#region src/app/components/FreeAiCreditsCallout.vue
        _export("r", FreeAiCreditsCallout_default = FreeAiCreditsCallout_vue_vue_type_script_setup_true_lang_default); //#endregion
        //#region ../../../node_modules/.pnpm/@vueuse+components@10.11.0_vue@3.5.13_typescript@5.9.2_/node_modules/@vueuse/components/index.mjs
        OnClickOutside = /* @__PURE__ */defineComponent({
          name: "OnClickOutside",
          props: ["as", "options"],
          emits: ["trigger"],
          setup(props, {
            slots,
            emit
          }) {
            const target = ref();
            onClickOutside(target, e => {
              emit("trigger", e);
            }, props.options);
            return () => {
              if (slots.default) return h(props.as || "div", {
                ref: target
              }, slots.default());
            };
          }
        });
        defaultWindow = isClient ? window : void 0;
        _iOSWorkaround = false;
        vOnClickOutside = {
          [directiveHooks.mounted](el, binding) {
            const capture = !binding.modifiers.bubble;
            if (typeof binding.value === "function") el.__onClickOutside_stop = onClickOutside$1(el, binding.value, {
              capture
            });else {
              const [handler, options] = binding.value;
              el.__onClickOutside_stop = onClickOutside$1(el, handler, Object.assign({
                capture
              }, options));
            }
          },
          [directiveHooks.unmounted](el) {
            el.__onClickOutside_stop();
          }
        };
        vOnKeyStroke = {
          [directiveHooks.mounted](el, binding) {
            var _a, _b;
            const keys = (_b = (_a = binding.arg) == null ? void 0 : _a.split(",")) != null ? _b : true;
            if (typeof binding.value === "function") onKeyStroke(keys, binding.value, {
              target: el
            });else {
              const [handler, options] = binding.value;
              onKeyStroke(keys, handler, {
                target: el,
                ...options
              });
            }
          }
        };
        DEFAULT_DELAY = 500;
        DEFAULT_THRESHOLD = 10;
        vOnLongPress = {
          [directiveHooks.mounted](el, binding) {
            if (typeof binding.value === "function") onLongPress(el, binding.value, {
              modifiers: binding.modifiers
            });else onLongPress(el, ...binding.value);
          }
        };
        vElementHover = {
          [directiveHooks.mounted](el, binding) {
            if (typeof binding.value === "function") watch(useElementHover(el), v => binding.value(v));
          }
        };
        vElementSize = {
          [directiveHooks.mounted](el, binding) {
            var _a;
            const handler = typeof binding.value === "function" ? binding.value : (_a = binding.value) == null ? void 0 : _a[0];
            const {
              width,
              height
            } = useElementSize$1(el, ...(typeof binding.value === "function" ? [] : binding.value.slice(1)));
            watch([width, height], ([width2, height2]) => handler({
              width: width2,
              height: height2
            }));
          }
        };
        vElementVisibility = {
          [directiveHooks.mounted](el, binding) {
            if (typeof binding.value === "function") {
              const handler = binding.value;
              watch(useElementVisibility$1(el), v => handler(v), {
                immediate: true
              });
            } else {
              const [handler, options] = binding.value;
              watch(useElementVisibility$1(el, options), v => handler(v), {
                immediate: true
              });
            }
          }
        };
        ARRIVED_STATE_THRESHOLD_PIXELS = 1;
        vInfiniteScroll = {
          [directiveHooks.mounted](el, binding) {
            if (typeof binding.value === "function") useInfiniteScroll(el, binding.value);else useInfiniteScroll(el, ...binding.value);
          }
        };
        vIntersectionObserver = {
          [directiveHooks.mounted](el, binding) {
            if (typeof binding.value === "function") useIntersectionObserver(el, binding.value);else useIntersectionObserver(el, ...binding.value);
          }
        };
        vScroll = {
          [directiveHooks.mounted](el, binding) {
            if (typeof binding.value === "function") {
              const handler = binding.value;
              const state = useScroll(el, {
                onScroll() {
                  handler(state);
                },
                onStop() {
                  handler(state);
                }
              });
            } else {
              const [handler, options] = binding.value;
              const state = useScroll(el, {
                ...options,
                onScroll(e) {
                  var _a;
                  (_a = options.onScroll) == null || _a.call(options, e);
                  handler(state);
                },
                onStop(e) {
                  var _a;
                  (_a = options.onStop) == null || _a.call(options, e);
                  handler(state);
                }
              });
            }
          }
        };
        elInitialOverflow = /* @__PURE__ */new WeakMap();
        vScrollLock = onScrollLock(); //#endregion
        //#region src/features/ndv/panel/components/NDVSubConnections.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$5 = ["data-test-id"];
        _hoisted_2$4 = ["textContent"];
        _hoisted_3$2 = ["onClick"];
        _hoisted_4$2 = ["onClick"];
        _hoisted_5$2 = ["data-node-name"];
        _hoisted_6$1 = ["onClick"];
        NDVSubConnections_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NDVSubConnections",
          props: {
            rootNode: {}
          },
          emits: ["switchSelectedNode", "openConnectionNodeCreator"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const props = __props;
            const workflowsStore = useWorkflowsStore();
            const nodeTypesStore = useNodeTypesStore();
            const nodeHelpers = useNodeHelpers();
            const i18n = useI18n();
            const {
              debounce
            } = useDebounce();
            const emit = __emit;
            const possibleConnections = ref([]);
            const expandedGroups = ref([]);
            const shouldShowNodeInputIssues = ref(false);
            const nodeType = computed(() => nodeTypesStore.getNodeType(props.rootNode.type, props.rootNode.typeVersion));
            const nodeData = computed(() => workflowsStore.getNodeByName(props.rootNode.name));
            const ndvStore = useNDVStore();
            const workflowObject = computed(() => workflowsStore.workflowObject);
            const nodeInputIssues = computed(() => {
              return nodeHelpers.getNodeIssues(nodeType.value, props.rootNode, workflowObject.value, ["typeUnknown", "parameters", "credentials", "execution"])?.input ?? {};
            });
            const connectedNodes$1 = computed(() => {
              const typeIndexCounters = {};
              return possibleConnections.value.reduce((acc, connection) => {
                const typeIndex = typeIndexCounters[connection.type] ?? 0;
                typeIndexCounters[connection.type] = typeIndex + 1;
                const nodes = getINodesFromNames(((workflowObject.value.connectionsByDestinationNode[props.rootNode.name]?.[connection.type] ?? [])[typeIndex] ?? []).map(conn => conn.node));
                const connectionKey = `${connection.type}-${typeIndex}`;
                return {
                  ...acc,
                  [connectionKey]: nodes
                };
              }, {});
            });
            function getConnectionContext(connection, globalIndex) {
              let typeIndex = 0;
              for (let i = 0; i < globalIndex; i++) if (possibleConnections.value[i].type === connection.type) typeIndex++;
              return {
                connectionType: connection.type,
                typeIndex,
                key: `${connection.type}-${typeIndex}`
              };
            }
            function getConnectionKey(connection, globalIndex) {
              return getConnectionContext(connection, globalIndex).key;
            }
            function getConnectionConfig(connectionType$1, typeIndex) {
              return possibleConnections.value.filter(connection => connection.type === connectionType$1).at(typeIndex);
            }
            function isMultiConnection(connectionContext) {
              return getConnectionConfig(connectionContext.connectionType, connectionContext.typeIndex)?.maxConnections !== 1;
            }
            function shouldShowConnectionTooltip(connectionContext) {
              return isMultiConnection(connectionContext) && !expandedGroups.value.includes(connectionContext.connectionType);
            }
            function expandConnectionGroup(connectionContext, isExpanded) {
              if (!isMultiConnection(connectionContext)) return;
              if (isExpanded) expandedGroups.value = [...expandedGroups.value, connectionContext.connectionType];else expandedGroups.value = expandedGroups.value.filter(g => g !== connectionContext.connectionType);
            }
            function getINodesFromNames(names) {
              return names.map(name => {
                const node = workflowsStore.getNodeByName(name);
                if (node) {
                  const matchedNodeType = nodeTypesStore.getNodeType(node.type);
                  if (matchedNodeType) {
                    const issues = nodeHelpers.getNodeIssues(matchedNodeType, node, workflowObject.value);
                    return {
                      node,
                      nodeType: matchedNodeType,
                      issues: issues ? nodeHelpers.nodeIssuesToString(issues, node) : ""
                    };
                  }
                }
                return null;
              }).filter(n => n !== null);
            }
            function hasInputIssues(connectionContext) {
              return shouldShowNodeInputIssues.value && (nodeInputIssues.value[connectionContext.connectionType] ?? []).length > 0;
            }
            function isNodeInputConfiguration(connectionConfig) {
              if (typeof connectionConfig === "string") return false;
              return "type" in connectionConfig;
            }
            function getPossibleSubInputConnections() {
              if (!nodeType.value || !props.rootNode) return [];
              return getNodeInputs(workflowObject.value, props.rootNode, nodeType.value).filter(input => {
                if (!isNodeInputConfiguration(input)) return false;
                return input.type !== "main";
              });
            }
            function onNodeClick(nodeName, connectionContext) {
              if (isMultiConnection(connectionContext) && !expandedGroups.value.includes(connectionContext.connectionType)) {
                expandConnectionGroup(connectionContext, true);
                return;
              }
              emit("switchSelectedNode", nodeName);
            }
            function onPlusClick(connectionContext) {
              const connectionNodes = connectedNodes$1.value[connectionContext.key];
              if (isMultiConnection(connectionContext) && !expandedGroups.value.includes(connectionContext.connectionType) && connectionNodes.length >= 1) {
                expandConnectionGroup(connectionContext, true);
                return;
              }
              emit("openConnectionNodeCreator", props.rootNode.name, connectionContext.connectionType, connectionContext.typeIndex);
            }
            function showNodeInputsIssues() {
              shouldShowNodeInputIssues.value = false;
              setTimeout(() => {
                shouldShowNodeInputIssues.value = true;
              }, 0);
            }
            watch([nodeData, ndvStore.activeNode], debounce(() => setTimeout(() => {
              expandedGroups.value = [];
              possibleConnections.value = getPossibleSubInputConnections();
            }, 0), {
              debounceTime: 1e3
            }), {
              immediate: true
            });
            __expose({
              showNodeInputsIssues
            });
            return (_ctx, _cache) => {
              return possibleConnections.value.length ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.connections),
                style: normalizeStyle(`--possible-connections: ${possibleConnections.value.length}`)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(possibleConnections.value, (connection, index) => {
                return openBlock(), createElementBlock("div", {
                  key: getConnectionKey(connection, index),
                  "data-test-id": `subnode-connection-group-${getConnectionKey(connection, index)}`
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.connectionType)
                }, [createBaseVNode("span", {
                  class: normalizeClass({
                    [_ctx.$style.connectionLabel]: true,
                    [_ctx.$style.hasIssues]: hasInputIssues(getConnectionContext(connection, index))
                  }),
                  textContent: toDisplayString(`${connection.displayName}${connection.required ? " *" : ""}`)
                }, null, 10, _hoisted_2$4), createVNode(unref(OnClickOutside), {
                  onTrigger: $event => expandConnectionGroup(getConnectionContext(connection, index), false)
                }, {
                  default: withCtx(() => [createBaseVNode("div", {
                    ref_for: true,
                    ref: "connectedNodesWrapper",
                    class: normalizeClass({
                      [_ctx.$style.connectedNodesWrapper]: true,
                      [_ctx.$style.connectedNodesWrapperExpanded]: expandedGroups.value.includes(connection.type)
                    }),
                    style: normalizeStyle(`--nodes-length: ${connectedNodes$1.value[getConnectionKey(connection, index)].length}`),
                    onClick: $event => expandConnectionGroup(getConnectionContext(connection, index), true)
                  }, [(connectedNodes$1.value[getConnectionKey(connection, index)].length >= 1 ? connection.maxConnections !== 1 : true) ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass({
                      [_ctx.$style.plusButton]: true,
                      [_ctx.$style.hasIssues]: hasInputIssues(getConnectionContext(connection, index))
                    }),
                    onClick: $event => onPlusClick(getConnectionContext(connection, index))
                  }, [createVNode(unref(N8nTooltip_default), {
                    placement: "top",
                    teleported: true,
                    offset: 10,
                    "show-after": 300,
                    disabled: shouldShowConnectionTooltip(getConnectionContext(connection, index)) && connectedNodes$1.value[getConnectionKey(connection, index)].length >= 1
                  }, {
                    content: withCtx(() => [createTextVNode(" Add " + toDisplayString(connection.displayName) + " ", 1), hasInputIssues(getConnectionContext(connection, index)) ? (openBlock(), createBlock(TitledList_default, {
                      key: 0,
                      title: `${unref(i18n).baseText("node.issues")}:`,
                      items: nodeInputIssues.value[connection.type]
                    }, null, 8, ["title", "items"])) : createCommentVNode("", true)]),
                    default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                      size: "medium",
                      icon: "plus",
                      type: "tertiary",
                      "data-test-id": `add-subnode-${getConnectionKey(connection, index)}`
                    }, null, 8, ["data-test-id"])]),
                    _: 2
                  }, 1032, ["disabled"])], 10, _hoisted_4$2)) : createCommentVNode("", true), connectedNodes$1.value[getConnectionKey(connection, index)].length > 0 ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass({
                      [_ctx.$style.connectedNodes]: true,
                      [_ctx.$style.connectedNodesMultiple]: connectedNodes$1.value[getConnectionKey(connection, index)].length > 1
                    })
                  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes$1.value[getConnectionKey(connection, index)], (node, nodeIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: node.node.name,
                      class: normalizeClass({
                        [_ctx.$style.nodeWrapper]: true,
                        [_ctx.$style.hasIssues]: node.issues
                      }),
                      "data-test-id": "floating-subnode",
                      "data-node-name": node.node.name,
                      style: normalizeStyle(`--node-index: ${nodeIndex}`)
                    }, [(openBlock(), createBlock(unref(N8nTooltip_default), {
                      key: node.node.name,
                      placement: "top",
                      teleported: true,
                      offset: 10,
                      "show-after": 300,
                      disabled: shouldShowConnectionTooltip(getConnectionContext(connection, index))
                    }, {
                      content: withCtx(() => [createTextVNode(toDisplayString(node.node.name) + " ", 1), node.issues ? (openBlock(), createBlock(TitledList_default, {
                        key: 0,
                        title: `${unref(i18n).baseText("node.issues")}:`,
                        items: node.issues
                      }, null, 8, ["title", "items"])) : createCommentVNode("", true)]),
                      default: withCtx(() => [createBaseVNode("div", {
                        class: normalizeClass(_ctx.$style.connectedNode),
                        onClick: $event => onNodeClick(node.node.name, getConnectionContext(connection, index))
                      }, [createVNode(NodeIcon_default, {
                        "node-type": node.nodeType,
                        "node-name": node.node.name,
                        "tooltip-position": "top",
                        size: 20,
                        circle: ""
                      }, null, 8, ["node-type", "node-name"])], 10, _hoisted_6$1)]),
                      _: 2
                    }, 1032, ["disabled"]))], 14, _hoisted_5$2);
                  }), 128))], 2)) : createCommentVNode("", true)], 14, _hoisted_3$2)]),
                  _: 2
                }, 1032, ["onTrigger"])], 2)], 8, _hoisted_1$5);
              }), 128))], 6)], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/ndv/panel/components/NDVSubConnections.vue?vue&type=style&index=0&lang.module.scss
        container$1 = "_container_1kr6k_140";
        connections = "_connections_1kr6k_148";
        connectionType = "_connectionType_1kr6k_161";
        connectionLabel = "_connectionLabel_1kr6k_168";
        hasIssues = "_hasIssues_1kr6k_174";
        connectedNodesWrapper = "_connectedNodesWrapper_1kr6k_178";
        plusButton = "_plusButton_1kr6k_186";
        connectedNodesWrapperExpanded = "_connectedNodesWrapperExpanded_1kr6k_204";
        connectedNodesMultiple = "_connectedNodesMultiple_1kr6k_210";
        connectedNode = "_connectedNode_1kr6k_178";
        connectedNodes = "_connectedNodes_1kr6k_178";
        nodeWrapper = "_nodeWrapper_1kr6k_249";
        NDVSubConnections_vue_vue_type_style_index_0_lang_module_default = {
          container: container$1,
          connections,
          connectionType,
          connectionLabel,
          hasIssues,
          connectedNodesWrapper,
          plusButton,
          "horizontal-shake": "_horizontal-shake_1kr6k_1",
          connectedNodesWrapperExpanded,
          connectedNodesMultiple,
          connectedNode,
          connectedNodes,
          nodeWrapper
        }; //#endregion
        //#region src/features/ndv/panel/components/NDVSubConnections.vue
        cssModules$6 = {
          "$style": NDVSubConnections_vue_vue_type_style_index_0_lang_module_default
        };
        NDVSubConnections_default = /* @__PURE__ */__plugin_vue_export_helper_default(NDVSubConnections_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$6]]); //#endregion
        //#region src/app/composables/useNodeDocsUrl.ts
        _export("n", useNodeDocsUrl = ({
          nodeType: nodeTypeRef
        }) => {
          const packageName = computed(() => toValue(nodeTypeRef)?.name.split(".")[0] ?? "");
          const isCommunityNode = computed(() => {
            const nodeType = toValue(nodeTypeRef);
            if (nodeType) return isCommunityPackageName(nodeType.name);
            return false;
          });
          return {
            docsUrl: computed(() => {
              const nodeType = toValue(nodeTypeRef);
              if (!nodeType) return "";
              if (nodeType.documentationUrl?.startsWith("http")) return nodeType.documentationUrl;
              const utmParams = new URLSearchParams({
                utm_source: "n8n_app",
                utm_medium: "node_settings_modal-credential_link",
                utm_campaign: nodeType.name
              });
              const primaryDocUrl = nodeType.codex?.resources?.primaryDocumentation?.[0]?.url;
              if (primaryDocUrl) return `${primaryDocUrl}?${utmParams.toString()}`;
              if (isCommunityNode.value) return `${NPM_PACKAGE_DOCS_BASE_URL}${packageName.value}`;
              return `${BUILTIN_NODES_DOCS_URL}?${utmParams.toString()}`;
            })
          };
        }); //#endregion
        //#region src/features/ndv/settings/components/NodeSettingsTabs.vue?vue&type=script&setup=true&lang.ts
        NodeSettingsTabs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeSettingsTabs",
          props: {
            modelValue: {
              default: "params"
            },
            nodeType: {
              default: void 0
            },
            pushRef: {
              default: ""
            },
            hideDocs: {
              type: Boolean
            },
            tabsVariant: {
              default: void 0
            },
            includeAction: {
              type: Boolean
            },
            includeCredential: {
              type: Boolean
            },
            hasCredentialIssue: {
              type: Boolean,
              default: false
            },
            compact: {
              type: Boolean
            }
          },
          emits: ["update:model-value"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const externalHooks = useExternalHooks();
            const ndvStore = useNDVStore();
            const workflowsStore = useWorkflowsStore();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const {
              docsUrl
            } = useNodeDocsUrl({
              nodeType: () => props.nodeType
            });
            const activeNode = computed(() => ndvStore.activeNode);
            const {
              installedPackage,
              isCommunityNode,
              isUpdateCheckAvailable
            } = useInstalledCommunityPackage(computed(() => props.nodeType?.name));
            const packageName = computed(() => props.nodeType?.name.split(".")[0] ?? "");
            const documentationUrl = computed(() => {
              if (props.hideDocs) return "";
              return docsUrl.value;
            });
            const options = computed(() => {
              const ret = [];
              if (props.includeAction) ret.push({
                label: i18n.baseText("nodeSettings.action"),
                value: "action"
              });
              if (props.includeCredential) ret.push({
                label: i18n.baseText("nodeSettings.credential"),
                value: "credential",
                ...(props.hasCredentialIssue && {
                  icon: "triangle-alert",
                  iconPosition: "right",
                  variant: "danger"
                })
              });
              ret.push({
                label: i18n.baseText(props.compact ? "nodeSettings.parametersShort" : "nodeSettings.parameters"),
                value: "params"
              }, {
                value: "settings",
                notification: isUpdateCheckAvailable.value && installedPackage.value?.updateAvailable ? true : void 0,
                ...(props.compact ? {
                  icon: "settings",
                  align: "right",
                  tooltip: i18n.baseText("nodeSettings.settings")
                } : {
                  label: i18n.baseText("nodeSettings.settings")
                })
              });
              if (isCommunityNode.value) ret.push({
                icon: "box",
                value: "communityNode",
                align: "right",
                tooltip: i18n.baseText("generic.communityNode.tooltip", {
                  interpolate: {
                    docUrl: COMMUNITY_NODES_INSTALLATION_DOCS_URL,
                    packageName: packageName.value
                  }
                })
              });
              if (documentationUrl.value) ret.push({
                value: "docs",
                href: documentationUrl.value,
                align: "right",
                ...(props.compact ? {
                  icon: "book-open",
                  tooltip: i18n.baseText("nodeSettings.docs")
                } : {
                  label: i18n.baseText("nodeSettings.docs")
                })
              });
              return ret;
            });
            function onTabSelect(tab) {
              if (tab === "docs" && props.nodeType) {
                externalHooks.run("dataDisplay.onDocumentationUrlClick", {
                  nodeType: props.nodeType,
                  documentationUrl: documentationUrl.value
                });
                telemetry.track("User clicked ndv link", {
                  node_type: activeNode.value?.type,
                  workflow_id: workflowsStore.workflowId,
                  push_ref: props.pushRef,
                  pane: NodeConnectionTypes.Main,
                  type: "docs"
                });
              }
              if (tab === "settings" && props.nodeType) telemetry.track("User viewed node settings", {
                node_type: props.nodeType.name,
                workflow_id: workflowsStore.workflowId
              });
              if (tab === "settings" || tab === "params" || tab === "action" || tab === "credential") emit("update:model-value", tab);
            }
            function onTooltipClick(tab, event) {
              if (tab === "communityNode" && event.target.localName === "a") telemetry.track("user clicked cnr docs link", {
                source: "node details view"
              });
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nTabs_default), {
                options: options.value,
                "model-value": _ctx.modelValue,
                variant: _ctx.tabsVariant,
                size: _ctx.compact ? "small" : "medium",
                "onUpdate:modelValue": onTabSelect,
                onTooltipClick
              }, null, 8, ["options", "model-value", "variant", "size"]);
            };
          }
        }); //#endregion
        //#region src/features/ndv/settings/components/NodeSettingsTabs.vue
        NodeSettingsTabs_default = NodeSettingsTabs_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/ndv/settings/components/NodeSettingsHeader.vue?vue&type=script&setup=true&lang.ts
        NodeSettingsHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeSettingsHeader",
          props: {
            nodeName: {},
            hideExecute: {
              type: Boolean
            },
            hideDocs: {
              type: Boolean
            },
            hideTabs: {
              type: Boolean
            },
            disableExecute: {
              type: Boolean
            },
            executeButtonTooltip: {},
            selectedTab: {},
            nodeType: {},
            pushRef: {}
          },
          emits: ["execute", "stop-execution", "value-changed", "tab-changed"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [!_ctx.hideTabs ? (openBlock(), createBlock(NodeSettingsTabs_default, {
                key: 0,
                "hide-docs": _ctx.hideDocs,
                "model-value": _ctx.selectedTab,
                "node-type": _ctx.nodeType,
                "push-ref": _ctx.pushRef,
                class: normalizeClass(_ctx.$style.tabs),
                "tabs-variant": "modern",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => emit("tab-changed", $event))
              }, null, 8, ["hide-docs", "model-value", "node-type", "push-ref", "class"])) : createCommentVNode("", true), !_ctx.hideExecute ? (openBlock(), createBlock(NodeExecuteButton_default, {
                key: 1,
                "data-test-id": "node-execute-button",
                "node-name": _ctx.nodeName,
                disabled: _ctx.disableExecute,
                tooltip: _ctx.executeButtonTooltip,
                class: normalizeClass(_ctx.$style.execute),
                size: "small",
                "telemetry-source": "parameters",
                onExecute: _cache[1] || (_cache[1] = $event => emit("execute")),
                onStopExecution: _cache[2] || (_cache[2] = $event => emit("stop-execution")),
                onValueChanged: _cache[3] || (_cache[3] = $event => emit("value-changed", $event))
              }, null, 8, ["node-name", "disabled", "tooltip", "class"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/settings/components/NodeSettingsHeader.vue?vue&type=style&index=0&lang.module.scss
        header$1 = "_header_qhhug_123";
        execute = "_execute_qhhug_131";
        tabs = "_tabs_qhhug_135";
        NodeSettingsHeader_vue_vue_type_style_index_0_lang_module_default = {
          header: header$1,
          execute,
          tabs
        }; //#endregion
        //#region src/features/ndv/settings/components/NodeSettingsHeader.vue
        cssModules$5 = {
          "$style": NodeSettingsHeader_vue_vue_type_style_index_0_lang_module_default
        };
        NodeSettingsHeader_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeSettingsHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$5]]); //#endregion
        //#region src/features/ndv/settings/components/NodeWebhooks.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$4 = {
          key: 0,
          class: "webhooks"
        };
        _hoisted_2$3 = ["title"];
        _hoisted_3$1 = {
          key: 0,
          class: "node-webhooks"
        };
        _hoisted_4$1 = {
          key: 0,
          class: "url-selection"
        };
        _hoisted_5$1 = {
          key: 0,
          class: "webhook-wrapper"
        };
        _hoisted_6 = {
          class: "http-field"
        };
        _hoisted_7 = {
          class: "http-method"
        };
        _hoisted_8 = {
          class: "url-field"
        };
        _hoisted_9 = ["onClick"];
        _hoisted_10 = {
          key: 1,
          class: "webhook-wrapper"
        };
        _hoisted_11 = {
          class: "url-field-full-width"
        };
        _hoisted_12 = ["onClick"];
        NodeWebhooks_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeWebhooks",
          props: {
            node: {},
            nodeTypeDescription: {}
          },
          setup(__props) {
            const props = __props;
            const clipboard = useClipboard();
            const workflowHelpers = useWorkflowHelpers();
            const toast = useToast();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const isMinimized = ref(props.nodeTypeDescription && !OPEN_URL_PANEL_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name));
            const showUrlFor = ref("test");
            const isProductionOnly = computed(() => {
              return props.nodeTypeDescription && PRODUCTION_ONLY_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name);
            });
            const urlOptions = computed(() => [...(isProductionOnly.value ? [] : [{
              label: baseText.value.testUrl,
              value: "test"
            }]), {
              label: baseText.value.productionUrl,
              value: "production"
            }]);
            const visibleWebhookUrls = computed(() => {
              return webhooksNode.value.filter(webhook => {
                if (typeof webhook.ndvHideUrl === "string") return !workflowHelpers.getWebhookExpressionValue(webhook, "ndvHideUrl");
                return !webhook.ndvHideUrl;
              });
            });
            const webhooksNode = computed(() => {
              if (props.nodeTypeDescription?.webhooks === void 0) return [];
              return props.nodeTypeDescription.webhooks.filter(webhookData => webhookData.restartWebhook !== true);
            });
            const baseText = computed(() => {
              switch (props.nodeTypeDescription?.name) {
                case CHAT_TRIGGER_NODE_TYPE:
                  return {
                    toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls.chatTrigger"),
                    clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls.formTrigger"),
                    clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls.chatTrigger"),
                    clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls.chatTrigger"),
                    testUrl: i18n.baseText("nodeWebhooks.testUrl"),
                    productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
                    copyTitle: i18n.baseText("nodeWebhooks.showMessage.title.chatTrigger"),
                    copyMessage: i18n.baseText("nodeWebhooks.showMessage.message.chatTrigger")
                  };
                case FORM_TRIGGER_NODE_TYPE:
                  return {
                    toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls.formTrigger"),
                    clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls.formTrigger"),
                    clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls.formTrigger"),
                    clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls.formTrigger"),
                    testUrl: i18n.baseText("nodeWebhooks.testUrl"),
                    productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
                    copyTitle: i18n.baseText("nodeWebhooks.showMessage.title.formTrigger"),
                    copyMessage: i18n.baseText("nodeWebhooks.showMessage.message.formTrigger")
                  };
                case MCP_TRIGGER_NODE_TYPE:
                  return {
                    toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls.mcpTrigger"),
                    clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls.mcpTrigger"),
                    clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls.mcpTrigger"),
                    clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls.mcpTrigger"),
                    testUrl: i18n.baseText("nodeWebhooks.testUrl"),
                    productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
                    copyTitle: i18n.baseText("nodeWebhooks.showMessage.title.mcpTrigger"),
                    copyMessage: void 0
                  };
                default:
                  return {
                    toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls"),
                    clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls"),
                    clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls"),
                    clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls"),
                    testUrl: i18n.baseText("nodeWebhooks.testUrl"),
                    productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
                    copyTitle: i18n.baseText("nodeWebhooks.showMessage.title"),
                    copyMessage: void 0
                  };
              }
            });
            function copyWebhookUrl(webhookData) {
              const webhookUrl = getWebhookUrlDisplay(webhookData);
              clipboard.copy(webhookUrl);
              toast.showMessage({
                title: baseText.value.copyTitle,
                message: baseText.value.copyMessage,
                type: "success"
              });
              telemetry.track("User copied webhook URL", {
                pane: "parameters",
                type: `${showUrlFor.value} url`
              });
            }
            function getWebhookUrlDisplay(webhookData) {
              if (props.node) return workflowHelpers.getWebhookUrl(webhookData, props.node, isProductionOnly.value ? "production" : showUrlFor.value);
              return "";
            }
            function isWebhookMethodVisible(webhook) {
              try {
                const method = workflowHelpers.getWebhookExpressionValue(webhook, "httpMethod", false);
                if (Array.isArray(method) && method.length !== 1) return false;
              } catch (error) {}
              if (typeof webhook.ndvHideMethod === "string") return !workflowHelpers.getWebhookExpressionValue(webhook, "ndvHideMethod");
              return !webhook.ndvHideMethod;
            }
            function getWebhookHttpMethod(webhook) {
              const method = workflowHelpers.getWebhookExpressionValue(webhook, "httpMethod", false);
              if (Array.isArray(method)) return method[0];
              return method;
            }
            watch(() => props.node, () => {
              isMinimized.value = props.nodeTypeDescription && !OPEN_URL_PANEL_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name);
            });
            return (_ctx, _cache) => {
              return webhooksNode.value.length && visibleWebhookUrls.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$4, [createBaseVNode("div", {
                class: normalizeClass(["clickable headline", {
                  expanded: !isMinimized.value
                }]),
                title: isMinimized.value ? baseText.value.clickToDisplay : baseText.value.clickToHide,
                onClick: _cache[0] || (_cache[0] = $event => isMinimized.value = !isMinimized.value)
              }, [createVNode(unref(N8nIcon_default), {
                icon: "chevron-right",
                class: "minimize-button minimize-icon"
              }), createTextVNode(" " + toDisplayString(baseText.value.toggleTitle), 1)], 10, _hoisted_2$3), createVNode(unref(ElCollapseTransition), null, {
                default: withCtx(() => [!isMinimized.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [!isProductionOnly.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [createVNode(unref(ElRow), null, {
                  default: withCtx(() => [createVNode(unref(ElCol), {
                    span: 24
                  }, {
                    default: withCtx(() => [createVNode(unref(N8nRadioButtons_default), {
                      modelValue: showUrlFor.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => showUrlFor.value = $event),
                      options: urlOptions.value
                    }, null, 8, ["modelValue", "options"])]),
                    _: 1
                  })]),
                  _: 1
                })])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(visibleWebhookUrls.value, (webhook, index) => {
                  return openBlock(), createBlock(unref(N8nTooltip_default), {
                    key: index,
                    class: "item",
                    content: baseText.value.clickToCopy,
                    placement: "left"
                  }, {
                    default: withCtx(() => [isWebhookMethodVisible(webhook) ? (openBlock(), createElementBlock("div", _hoisted_5$1, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createTextVNode(toDisplayString(getWebhookHttpMethod(webhook)), 1), _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1))])]), createBaseVNode("div", _hoisted_8, [createBaseVNode("div", {
                      class: "webhook-url left-ellipsis clickable",
                      onClick: $event => copyWebhookUrl(webhook)
                    }, [createTextVNode(toDisplayString(getWebhookUrlDisplay(webhook)), 1), _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1))], 8, _hoisted_9)])])) : (openBlock(), createElementBlock("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", {
                      class: "webhook-url left-ellipsis clickable",
                      onClick: $event => copyWebhookUrl(webhook)
                    }, [createTextVNode(toDisplayString(getWebhookUrlDisplay(webhook)), 1), _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1))], 8, _hoisted_12)])]))]),
                    _: 2
                  }, 1032, ["content"]);
                }), 128))])) : createCommentVNode("", true)]),
                _: 1
              })])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/ndv/settings/components/NodeWebhooks.vue
        NodeWebhooks_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeWebhooks_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-66c974d9"]]); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNdvHeader.vue?vue&type=script&setup=true&lang.ts
        ExperimentalEmbeddedNdvHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExperimentalEmbeddedNdvHeader",
          props: {
            node: {},
            readOnly: {
              type: Boolean
            },
            nodeType: {},
            pushRef: {},
            subTitle: {},
            extraTabsClassName: {},
            selectedTab: {},
            includeAction: {
              type: Boolean
            },
            includeCredential: {
              type: Boolean
            },
            hasCredentialIssue: {
              type: Boolean
            }
          },
          emits: ["name-changed", "dblclick-title", "tab-changed"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.component, _ctx.node.disabled ? _ctx.$style.disabled : ""])
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.title),
                onDblclick: _cache[1] || (_cache[1] = $event => emit("dblclick-title", $event))
              }, [createVNode(NodeIcon_default, {
                "node-type": _ctx.nodeType,
                size: 16
              }, null, 8, ["node-type"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.titleText)
              }, [createVNode(unref(N8nInlineTextEdit_default), {
                "min-width": 0,
                "model-value": _ctx.node.name,
                "read-only": _ctx.readOnly,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => emit("name-changed", $event))
              }, null, 8, ["model-value", "read-only"])], 2), createVNode(unref(N8nText_default), {
                bold: "",
                size: "small",
                color: "text-light",
                class: normalizeClass(_ctx.$style.subTitleText)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.subTitle), 1)]),
                _: 1
              }, 8, ["class"]), renderSlot(_ctx.$slots, "actions")], 34), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.tabsContainer)
              }, [createVNode(NodeSettingsTabs_default, {
                class: normalizeClass(_ctx.extraTabsClassName),
                "model-value": _ctx.selectedTab,
                "node-type": _ctx.nodeType,
                "push-ref": _ctx.pushRef,
                "tabs-variant": "modern",
                compact: "",
                "include-action": _ctx.includeAction,
                "include-credential": _ctx.includeCredential,
                "has-credential-issue": _ctx.hasCredentialIssue,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => emit("tab-changed", $event))
              }, null, 8, ["class", "model-value", "node-type", "push-ref", "include-action", "include-credential", "has-credential-issue"])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNdvHeader.vue?vue&type=style&index=0&lang.module.scss
        component$1 = "_component_13igc_123";
        title = "_title_13igc_127";
        disabled = "_disabled_13igc_135";
        titleText = "_titleText_13igc_139";
        subTitleText = "_subTitleText_13igc_151";
        tabsContainer = "_tabsContainer_13igc_160";
        ExperimentalEmbeddedNdvHeader_vue_vue_type_style_index_0_lang_module_default = {
          component: component$1,
          title,
          disabled,
          titleText,
          subTitleText,
          tabsContainer
        }; //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNdvHeader.vue
        cssModules$4 = {
          "$style": ExperimentalEmbeddedNdvHeader_vue_vue_type_style_index_0_lang_module_default
        };
        ExperimentalEmbeddedNdvHeader_default = /* @__PURE__ */__plugin_vue_export_helper_default(ExperimentalEmbeddedNdvHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/app/components/NodeActionsList.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$3 = ["onClick"];
        NodeActionsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeActionsList",
          props: {
            node: {}
          },
          emits: ["actionSelected"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const nodeTypesStore = useNodeTypesStore();
            const {
              generateMergedNodesAndActions
            } = useActionsGenerator();
            const {
              parseCategoryActions,
              getActionData
            } = useActions();
            const i18n = useI18n();
            const selectedActionRef = ref();
            const nodeType = computed(() => nodeTypesStore.getNodeType(__props.node.type, __props.node.typeVersion));
            const options = computed(() => {
              const {
                actions
              } = generateMergedNodesAndActions(nodeType.value ? [nodeType.value] : [], []);
              return parseCategoryActions(Object.values(actions).flatMap(typeDescriptions => typeDescriptions.filter(({
                actionKey
              }) => actionKey !== CUSTOM_API_CALL_KEY).map(typeDescription => ({
                type: "action",
                subcategory: typeDescription.actionKey,
                key: typeDescription.actionKey,
                properties: typeDescription
              }))), i18n.baseText("nodeCreator.actionsCategory.actions"), true).map(action => {
                if (action.type !== "action") return {
                  action,
                  isSelected: false
                };
                const data = getActionData(action.properties).value;
                let isSelected = true;
                for (const [key, value] of Object.entries(data)) isSelected = isSelected && __props.node.parameters[key] === value;
                return {
                  action,
                  isSelected
                };
              });
            });
            function handleClickOption(option$1) {
              if (option$1.type !== "action") return;
              emit("actionSelected", getActionData(option$1.properties).value);
            }
            function handleSelectedItemRef(el) {
              if (el instanceof HTMLDivElement) selectedActionRef.value = el;
            }
            watch(selectedActionRef, selected$1 => {
              selected$1?.scrollIntoView();
            }, {
              flush: "post"
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.component)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(options.value, option$1 => {
                return openBlock(), createElementBlock(Fragment, {
                  key: option$1.action.key
                }, [option$1.action.type === "label" ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  tag: "div",
                  class: normalizeClass(_ctx.$style.label),
                  size: "xsmall",
                  color: "text-base",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(option$1.action.key), 1)]),
                  _: 2
                }, 1032, ["class"])) : option$1.action.type === "action" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  ref_for: true,
                  ref: option$1.isSelected ? handleSelectedItemRef : void 0,
                  class: normalizeClass({
                    [_ctx.$style.option]: true,
                    [_ctx.$style.selected]: option$1.isSelected
                  }),
                  role: "button",
                  onClick: $event => handleClickOption(option$1.action)
                }, [createVNode(NodeIcon_default, {
                  size: 20,
                  "node-type": nodeType.value
                }, null, 8, ["node-type"]), createVNode(unref(N8nText_default), {
                  size: "small",
                  bold: "",
                  class: normalizeClass(_ctx.$style.optionText)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(option$1.action.properties.displayName), 1)]),
                  _: 2
                }, 1032, ["class"]), option$1.isSelected ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 0,
                  icon: "check",
                  color: "primary"
                })) : createCommentVNode("", true)], 10, _hoisted_1$3)) : createCommentVNode("", true)], 64);
              }), 128))], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/NodeActionsList.vue?vue&type=style&index=0&lang.module.scss
        component = "_component_1vh3g_123";
        label = "_label_1vh3g_127";
        option = "_option_1vh3g_132";
        selected = "_selected_1vh3g_139";
        optionText = "_optionText_1vh3g_143";
        NodeActionsList_vue_vue_type_style_index_0_lang_module_default = {
          component,
          label,
          option,
          selected,
          optionText
        }; //#endregion
        //#region src/app/components/NodeActionsList.vue
        cssModules$3 = {
          "$style": NodeActionsList_vue_vue_type_style_index_0_lang_module_default
        };
        NodeActionsList_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeActionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/ndv/settings/components/NodeSettingsInvalidNodeWarning.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$2 = {
          class: "mt-s mb-xs"
        };
        _hoisted_2$2 = ["href", "textContent"];
        NodeSettingsInvalidNodeWarning_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeSettingsInvalidNodeWarning",
          props: {
            node: {},
            previewMode: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const nodeTypesStore = useNodeTypesStore();
            const uiStore = useUIStore();
            const ndvStore = useNDVStore();
            const nodeCreatorStore = useNodeCreatorStore();
            const usersStore = useUsersStore();
            const isCommunityNode = computed(() => isCommunityPackageName(__props.node.type));
            const isVerifiedCommunityNode = computed(() => isCommunityPackageName(__props.node.type) && nodeTypesStore.communityNodeType(__props.node.type)?.isOfficialNode);
            const npmPackage = computed(() => removePreviewToken(__props.node.type.split(".")[0]));
            const isOwner = computed(() => usersStore.isInstanceOwner);
            const {
              installNode,
              loading
            } = useInstallNode();
            const isNodeDefined = computed(() => !!nodeTypesStore.nodeTypes[__props.node.type]);
            async function onViewDetailsClick() {
              telemetry.track("user clicked cnr docs link", {
                source: "missing node modal source",
                package_name: __props.node.type.split(".")[0],
                node_type: __props.node.type
              });
              if (isVerifiedCommunityNode.value) await nodeCreatorStore.openNodeCreatorWithNode(__props.node.name);else if (npmPackage.value) window.open(`https://www.npmjs.com/package/${npmPackage.value}`, "_blank");
            }
            async function onInstallClick() {
              telemetry.track("user clicked cnr install button", {
                source: "missing node modal source",
                package_name: npmPackage.value,
                node_type: __props.node.type
              });
              if (isVerifiedCommunityNode.value) await installNode({
                type: "verified",
                packageName: npmPackage.value,
                nodeType: __props.node.type
              });else uiStore.openModalWithData({
                name: COMMUNITY_PACKAGE_INSTALL_MODAL_KEY,
                data: {
                  packageName: npmPackage.value,
                  disableInput: true,
                  hideSuggestion: true,
                  nodeType: __props.node.type
                }
              });
            }
            watch(isNodeDefined, () => {
              if (isNodeDefined.value) ndvStore.unsetActiveNodeName();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.nodeIsNotValid)
              }, [createBaseVNode("p", {
                class: normalizeClass(_ctx.$style.warningIcon)
              }, [createVNode(unref(N8nIcon_default), {
                icon: "triangle-alert"
              })], 2), createBaseVNode("div", _hoisted_1$2, [createVNode(unref(N8nText_default), {
                size: "large",
                color: "text-dark",
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.previewMode ? unref(i18n).baseText("nodeSettings.communityNodeUnknown.title.preview") : unref(i18n).baseText("nodeSettings.communityNodeUnknown.title")), 1)]),
                _: 1
              })]), isCommunityNode.value && !_ctx.previewMode ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.descriptionContainer)
              }, [createVNode(unref(I18nT), {
                keypath: "nodeSettings.communityNodeUnknown.description",
                tag: "span",
                scope: "global"
              }, {
                action: withCtx(() => [createVNode(unref(N8nText_default), {
                  size: "medium",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(npmPackage.value), 1)]),
                  _: 1
                })]),
                _: 1
              }), isOwner.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.communityNodeActionsContainer)
              }, [isOwner.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                icon: "hard-drive-download",
                type: "primary",
                "data-test-id": "install-community-node-button",
                loading: unref(loading),
                disabled: unref(loading),
                onClick: onInstallClick
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.communityNodeUnknown.installButton.label")), 1)]),
                _: 1
              }, 8, ["loading", "disabled"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
                icon: "external-link",
                type: "secondary",
                onClick: onViewDetailsClick,
                "data-test-id": "view-details-button"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.communityNodeUnknown.viewDetailsButton.label")), 1)]),
                _: 1
              })], 2)) : (openBlock(), createBlock(ContactAdministratorToInstall_default, {
                key: 1,
                box: false
              }))], 2)) : !_ctx.previewMode ? (openBlock(), createBlock(unref(I18nT), {
                key: 1,
                keypath: "nodeSettings.nodeTypeUnknown.description",
                tag: "span",
                scope: "global"
              }, {
                action: withCtx(() => [createBaseVNode("a", {
                  href: unref(CUSTOM_NODES_DOCS_URL),
                  target: "_blank",
                  textContent: toDisplayString(unref(i18n).baseText("nodeSettings.nodeTypeUnknown.description.customNode"))
                }, null, 8, _hoisted_2$2)]),
                _: 1
              })) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/settings/components/NodeSettingsInvalidNodeWarning.vue?vue&type=style&index=0&lang.module.scss
        communityNodeActionsContainer = "_communityNodeActionsContainer_1mqmg_123";
        nodeIsNotValid = "_nodeIsNotValid_1mqmg_128";
        warningIcon = "_warningIcon_1mqmg_139";
        descriptionContainer = "_descriptionContainer_1mqmg_144";
        NodeSettingsInvalidNodeWarning_vue_vue_type_style_index_0_lang_module_default = {
          communityNodeActionsContainer,
          nodeIsNotValid,
          warningIcon,
          descriptionContainer
        }; //#endregion
        //#region src/features/ndv/settings/components/NodeSettingsInvalidNodeWarning.vue
        cssModules$2 = {
          "$style": NodeSettingsInvalidNodeWarning_vue_vue_type_style_index_0_lang_module_default
        };
        NodeSettingsInvalidNodeWarning_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeSettingsInvalidNodeWarning_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/core/dataTable/components/NodeStorageLimitCallout.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 0
        };
        _hoisted_2$1 = {
          key: 1
        };
        NodeStorageLimitCallout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeStorageLimitCallout",
          setup(__props) {
            const i18n = useI18n();
            const nvdStore = useNDVStore();
            const dataTableStore = useDataTableStore();
            const calloutType = computed(() => {
              if (!DATA_TABLE_NODES.includes(nvdStore.activeNode?.type ?? "")) return null;
              switch (dataTableStore.dataTableSizeLimitState) {
                case "error":
                  return "danger";
                case "warn":
                  return "warning";
                default:
                  return null;
              }
            });
            return (_ctx, _cache) => {
              return calloutType.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                key: 0,
                theme: calloutType.value,
                class: "mt-xs"
              }, {
                default: withCtx(() => [calloutType.value === "danger" ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(unref(i18n).baseText("dataTable.banner.storageLimitError.message", {
                  interpolate: {
                    usage: `${unref(dataTableStore).dataTableSize} / ${unref(dataTableStore).maxSizeMB}MB`
                  }
                })), 1)) : (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(i18n).baseText("dataTable.banner.storageLimitWarning.message", {
                  interpolate: {
                    usage: `${unref(dataTableStore).dataTableSize} / ${unref(dataTableStore).maxSizeMB}MB`
                  }
                })), 1))]),
                _: 1
              }, 8, ["theme"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/core/dataTable/components/NodeStorageLimitCallout.vue
        NodeStorageLimitCallout_default = NodeStorageLimitCallout_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/app/components/NodeTitle.vue?vue&type=script&setup=true&lang.ts
        NodeTitle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeTitle",
          props: {
            modelValue: {
              default: ""
            },
            nodeType: {
              default: void 0
            },
            iconSource: {
              default: void 0
            },
            readOnly: {
              type: Boolean,
              default: false
            }
          },
          emits: ["update:model-value"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            function onRename(value) {
              if (value.trim() !== "") emit("update:model-value", value.trim());
            }
            const wrapperRef = useTemplateRef("wrapperRef");
            const {
              width
            } = useElementSize(wrapperRef);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("span", {
                class: normalizeClass(_ctx.$style.container),
                "data-test-id": "node-title-container"
              }, [createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.iconWrapper)
              }, [!_ctx.iconSource ? (openBlock(), createBlock(NodeIcon_default, {
                key: 0,
                "node-type": _ctx.nodeType,
                size: 18,
                "show-tooltip": true,
                "tooltip-position": "left"
              }, null, 8, ["node-type"])) : (openBlock(), createBlock(NodeIcon_default, {
                key: 1,
                "icon-source": _ctx.iconSource,
                size: 18,
                "show-tooltip": true,
                "tooltip-position": "left"
              }, null, 8, ["icon-source"]))], 2), createBaseVNode("div", {
                ref_key: "wrapperRef",
                ref: wrapperRef,
                class: normalizeClass(_ctx.$style.textWrapper)
              }, [createVNode(unref(N8nInlineTextEdit_default), {
                "max-width": unref(width),
                "model-value": _ctx.modelValue,
                "read-only": _ctx.readOnly,
                "onUpdate:modelValue": onRename
              }, null, 8, ["max-width", "model-value", "read-only"])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/NodeTitle.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_oei61_123";
        textWrapper = "_textWrapper_oei61_132";
        iconWrapper = "_iconWrapper_oei61_137";
        NodeTitle_vue_vue_type_style_index_0_lang_module_default = {
          container,
          textWrapper,
          iconWrapper
        }; //#endregion
        //#region src/app/components/NodeTitle.vue
        cssModules$1 = {
          "$style": NodeTitle_vue_vue_type_style_index_0_lang_module_default
        };
        NodeTitle_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeTitle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ndv/settings/components/NodeSettings.vue?vue&type=script&setup=true&lang.ts
        import_get = /* @__PURE__ */__toESM(require_get());
        _hoisted_1 = ["data-has-output-connection"];
        _hoisted_2 = {
          class: "header-side-menu"
        };
        _hoisted_3 = {
          key: 1,
          class: "no-parameters"
        };
        _hoisted_4 = {
          key: 2,
          class: "parameter-item parameter-notice",
          "data-test-id": "node-parameters-http-notice"
        };
        _hoisted_5 = {
          class: "node-version",
          "data-test-id": "node-version"
        };
        NodeSettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeSettings",
          props: {
            eventBus: {},
            dragging: {
              type: Boolean
            },
            pushRef: {},
            readOnly: {
              type: Boolean
            },
            foreignCredentials: {},
            blockUI: {
              type: Boolean
            },
            executable: {
              type: Boolean
            },
            inputSize: {
              default: 0
            },
            activeNode: {
              default: void 0
            },
            isEmbeddedInCanvas: {
              type: Boolean,
              default: false
            },
            subTitle: {
              default: void 0
            },
            extraTabsClassName: {},
            extraParameterWrapperClassName: {},
            isNdvV2: {
              type: Boolean,
              default: false
            },
            hideExecute: {
              type: Boolean,
              default: false
            },
            hideDocs: {
              type: Boolean,
              default: true
            },
            hideSubConnections: {
              type: Boolean,
              default: false
            }
          },
          emits: ["stopExecution", "valueChanged", "switchSelectedNode", "openConnectionNodeCreator", "activate", "execute", "captureWheelBody", "dblclickHeader"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            useSlots();
            const nodeValues = ref(getNodeSettingsInitialValues());
            const nodeTypesStore = useNodeTypesStore();
            const ndvStore = useNDVStore();
            const workflowsStore = useWorkflowsStore();
            const workflowState = injectWorkflowState();
            const credentialsStore = useCredentialsStore();
            const historyStore = useHistoryStore();
            const telemetry = useTelemetry();
            const nodeHelpers = useNodeHelpers();
            const externalHooks = useExternalHooks();
            const i18n = useI18n();
            const route = useRoute();
            const nodeSettingsParameters = useNodeSettingsParameters();
            const nodeParameterWrapper = useTemplateRef("nodeParameterWrapper");
            const shouldShowStaticScrollbar = ref(false);
            if (props.isEmbeddedInCanvas) useResizeObserver(nodeParameterWrapper, () => {
              shouldShowStaticScrollbar.value = (nodeParameterWrapper.value?.scrollHeight ?? 0) > (nodeParameterWrapper.value?.offsetHeight ?? 0);
            });
            const nodeValid = ref(true);
            const openPanel = ref("params");
            const nodeValuesInitialized = ref(false);
            const hiddenIssuesInputs = ref([]);
            const subConnections = ref(null);
            const isDemoRoute = computed(() => route?.name === VIEWS.DEMO);
            const {
              isPreviewMode
            } = useSettingsStore();
            const isDemoPreview = computed(() => isDemoRoute.value && isPreviewMode);
            const currentWorkflow = computed(() => workflowsStore.getWorkflowById(workflowsStore.workflowObject.id));
            const hasForeignCredential = computed(() => props.foreignCredentials.length > 0);
            const isHomeProjectTeam = computed(() => currentWorkflow.value?.homeProject?.type === ProjectTypes.Team);
            const isReadOnly = computed(() => props.readOnly || hasForeignCredential.value && !isHomeProjectTeam.value);
            const node = computed(() => props.activeNode ?? ndvStore.activeNode);
            const nodeType = computed(() => node.value ? nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion) : null);
            const {
              areAllCredentialsSet
            } = useNodeCredentialOptions(node, nodeType, "");
            const {
              installedPackage,
              isUpdateCheckAvailable
            } = useInstalledCommunityPackage(computed(() => node.value?.type));
            const isTriggerNode = computed(() => !!node.value && nodeTypesStore.isTriggerNode(node.value.type));
            const isToolNode = computed(() => !!node.value && nodeTypesStore.isToolNode(node.value.type));
            const isExecutable = computed(() => nodeHelpers.isNodeExecutable(node.value, props.executable, props.foreignCredentials));
            const nodeTypeVersions = computed(() => {
              if (!node.value) return [];
              return nodeTypesStore.getNodeVersions(node.value.type);
            });
            const latestVersion = computed(() => Math.max(...nodeTypeVersions.value));
            const isLatestNodeVersion = computed(() => !node.value?.typeVersion || latestVersion.value === node.value.typeVersion);
            const executeButtonTooltip = computed(() => {
              if (node.value && isLatestNodeVersion.value && props.inputSize > 1 && !nodeHelpers.isSingleExecution(node.value.type, node.value.parameters)) return i18n.baseText("nodeSettings.executeButtonTooltip.times", {
                interpolate: {
                  inputSize: props.inputSize
                }
              });
              return "";
            });
            const nodeVersionTag = computed(() => {
              if (!nodeType.value || nodeType.value.hidden) return i18n.baseText("nodeSettings.deprecated");
              if (isLatestNodeVersion.value) return i18n.baseText("nodeSettings.latest");
              return i18n.baseText("nodeSettings.latestVersion", {
                interpolate: {
                  version: latestVersion.value.toString()
                }
              });
            });
            const parameters = computed(() => {
              if (nodeType.value === null) return [];
              return nodeType.value?.properties ?? [];
            });
            const parametersByTab = computed(() => collectParametersByTab(parameters.value, props.isEmbeddedInCanvas));
            const isDisplayingCredentials = computed(() => credentialsStore.getCredentialTypesNodeDescriptions("", nodeType.value).filter(credentialTypeDescription => displayCredentials(credentialTypeDescription)).length > 0);
            const showNoParametersNotice = computed(() => !isDisplayingCredentials.value && (parametersByTab.value.params ?? []).filter(item => item.type !== "notice").length === 0);
            const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
            const isCommunityNode = computed(() => !!node.value && isCommunityPackageName(node.value.type));
            const packageName = computed(() => node.value?.type.split(".")[0] ?? "");
            const usedCredentials = computed(() => Object.values(workflowsStore.usedCredentials).filter(credential => Object.values(node.value?.credentials || []).find(nodeCredential => nodeCredential.id === credential.id)));
            const credentialOwnerName = computed(() => {
              const credential = usedCredentials.value ? Object.values(usedCredentials.value).find(credential$1 => credential$1.id === props.foreignCredentials[0]) : void 0;
              return credentialsStore.getCredentialOwnerName(credential);
            });
            const featureRequestUrl = computed(() => {
              if (!nodeType.value) return "";
              return `${BASE_NODE_SURVEY_URL}${nodeType.value.name}`;
            });
            const hasOutputConnection = computed(() => {
              if (!node.value) return false;
              const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(node.value.name);
              return (Object.values(outgoingConnections)?.[0]?.[0] ?? []).length > 0;
            });
            const valueChanged = parameterData => {
              let newValue;
              if (parameterData.hasOwnProperty("value")) newValue = parameterData.value;else newValue = (0, import_get.default)(nodeValues.value, parameterData.name);
              const nodeNameBefore = parameterData.node || node.value?.name;
              if (!nodeNameBefore) return;
              const _node = workflowsStore.getNodeByName(nodeNameBefore);
              if (_node === null) return;
              if (parameterData.name === "name") emit("valueChanged", {
                value: newValue,
                oldValue: nodeNameBefore,
                name: parameterData.name
              });else if (parameterData.name === "parameters") {
                const _nodeType = nodeTypesStore.getNodeType(_node.type, _node.typeVersion);
                if (!_nodeType) return;
                let nodeParameters = getNodeParameters(_nodeType.properties, _node.parameters, false, false, _node, _nodeType);
                const oldNodeParameters = Object.assign({}, nodeParameters);
                nodeParameters = deepCopy(nodeParameters);
                if (parameterData.value && typeof parameterData.value === "object") for (const [parameterName, parameterValue] of Object.entries(parameterData.value)) {
                  newValue = parameterValue;
                  const parameterPath = nodeSettingsParameters.updateParameterByPath(parameterName, newValue, nodeParameters, _nodeType, _node.typeVersion);
                  externalHooks.run("nodeSettings.valueChanged", {
                    parameterPath,
                    newValue,
                    parameters: parameters.value,
                    oldNodeParameters
                  });
                }
                nodeParameters = getNodeParameters(_nodeType.properties, nodeParameters, true, false, _node, _nodeType);
                for (const key of Object.keys(nodeParameters)) if (nodeParameters?.[key] !== null && nodeParameters?.[key] !== void 0) nodeSettingsParameters.setValue(nodeValues, `parameters.${key}`, nodeParameters[key]);
                if (nodeParameters) {
                  const updateInformation = {
                    name: _node.name,
                    value: nodeParameters
                  };
                  workflowState.setNodeParameters(updateInformation);
                  nodeHelpers.updateNodeParameterIssuesByName(_node.name);
                  nodeHelpers.updateNodeCredentialIssuesByName(_node.name);
                }
              } else if (nameIsParameter(parameterData)) nodeSettingsParameters.updateNodeParameter(nodeValues, parameterData, newValue, _node, isToolNode.value);else {
                nodeValues.value = {
                  ...nodeValues.value,
                  [parameterData.name]: newValue
                };
                const updateInformation = {
                  name: _node.name,
                  key: parameterData.name,
                  value: newValue
                };
                workflowState.setNodeValue(updateInformation);
              }
            };
            const setHttpNodeParameters = parameters$1 => {
              try {
                valueChanged({
                  node: node.value?.name,
                  name: "parameters",
                  value: parameters$1
                });
              } catch {}
            };
            const onSwitchSelectedNode = node$1 => {
              emit("switchSelectedNode", node$1);
            };
            const onOpenConnectionNodeCreator = (nodeName, connectionType$1, connectionIndex = 0) => {
              emit("openConnectionNodeCreator", nodeName, connectionType$1, connectionIndex);
            };
            const populateHiddenIssuesSet = () => {
              if (!node.value || !workflowsStore.isNodePristine(node.value.name)) return;
              hiddenIssuesInputs.value.push("credentials");
              parametersByTab.value.params.forEach(parameter => {
                hiddenIssuesInputs.value.push(parameter.name);
              });
              workflowsStore.setNodePristine(node.value.name, false);
            };
            const nodeSettings = computed(() => createCommonNodeSettings(isExecutable.value, isToolNode.value, i18n.baseText.bind(i18n)));
            const iconSource = computed(() => getNodeIconSource(nodeType.value ?? node.value?.type, node.value ?? null));
            const onParameterBlur = parameterName => {
              hiddenIssuesInputs.value = hiddenIssuesInputs.value.filter(name => name !== parameterName);
            };
            const onWorkflowActivate = () => {
              hiddenIssuesInputs.value = [];
              emit("activate");
            };
            const onNodeExecute = () => {
              hiddenIssuesInputs.value = [];
              subConnections.value?.showNodeInputsIssues();
              emit("execute");
            };
            const credentialSelected = updateInformation => {
              workflowState.updateNodeProperties(updateInformation);
              const node$1 = workflowsStore.getNodeByName(updateInformation.name);
              if (node$1) nodeHelpers.updateNodeCredentialIssues(node$1);
              externalHooks.run("nodeSettings.credentialSelected", {
                updateInformation
              });
            };
            const nameChanged = name => {
              if (node.value) historyStore.pushCommandToUndo(new RenameNodeCommand(node.value.name, name, Date.now()));
              valueChanged({
                value: name,
                name: "name"
              });
            };
            const setNodeValues = () => {
              if (!node.value) {
                nodeValuesInitialized.value = true;
                return;
              }
              if (nodeType.value !== null) {
                nodeValid.value = true;
                nodeValues.value = collectSettings(node.value, nodeSettings.value);
              } else nodeValid.value = false;
              nodeValuesInitialized.value = true;
            };
            const onStopExecution = () => {
              emit("stopExecution");
            };
            const openSettings = () => {
              openPanel.value = "settings";
            };
            const onTabSelect = tab => {
              openPanel.value = tab;
            };
            const onFeatureRequestClick = () => {
              window.open(featureRequestUrl.value, "_blank");
              if (node.value) telemetry.track("User clicked ndv link", {
                node_type: node.value.type,
                workflow_id: workflowsStore.workflowId,
                push_ref: props.pushRef,
                pane: NodeConnectionTypes.Main,
                type: "i-wish-this-node-would"
              });
            };
            watch(node, () => {
              setNodeValues();
            });
            onMounted(async () => {
              populateHiddenIssuesSet();
              setNodeValues();
              props.eventBus?.on("openSettings", openSettings);
              if (node.value !== null) nodeHelpers.updateNodeParameterIssues(node.value, nodeType.value);
              importCurlEventBus.on("setHttpNodeParameters", setHttpNodeParameters);
              ndvEventBus.on("updateParameterValue", valueChanged);
            });
            onBeforeUnmount(() => {
              props.eventBus?.off("openSettings", openSettings);
              importCurlEventBus.off("setHttpNodeParameters", setHttpNodeParameters);
              ndvEventBus.off("updateParameterValue", valueChanged);
            });
            function displayCredentials(credentialTypeDescription) {
              if (credentialTypeDescription.displayOptions === void 0) return true;
              return !!node.value && nodeHelpers.displayParameter(node.value.parameters, credentialTypeDescription, "", node.value);
            }
            function handleSelectAction(params) {
              for (const [key, value] of Object.entries(params)) valueChanged({
                name: `parameters.${key}`,
                value
              });
              if (isDisplayingCredentials.value && !areAllCredentialsSet.value) {
                onTabSelect("credential");
                return;
              }
              if (parametersByTab.value.params.length > 0) onTabSelect("params");
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass({
                  "node-settings": true,
                  dragging: _ctx.dragging,
                  embedded: props.isEmbeddedInCanvas
                }),
                "data-has-output-connection": hasOutputConnection.value,
                onKeydown: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
              }, [_ctx.isEmbeddedInCanvas && node.value ? (openBlock(), createBlock(ExperimentalEmbeddedNdvHeader_default, {
                key: 0,
                node: node.value,
                "selected-tab": openPanel.value,
                "read-only": _ctx.readOnly,
                "node-type": nodeType.value,
                "push-ref": _ctx.pushRef,
                "sub-title": _ctx.subTitle,
                "extra-tabs-class-name": _ctx.extraTabsClassName,
                "include-action": parametersByTab.value.action.length > 0,
                "include-credential": isDisplayingCredentials.value,
                "has-credential-issue": !unref(areAllCredentialsSet),
                onNameChanged: nameChanged,
                onTabChanged: onTabSelect,
                onDblclickTitle: _cache[0] || (_cache[0] = $event => emit("dblclickHeader", $event))
              }, {
                actions: withCtx(() => [renderSlot(_ctx.$slots, "actions", {}, void 0, true)]),
                _: 3
              }, 8, ["node", "selected-tab", "read-only", "node-type", "push-ref", "sub-title", "extra-tabs-class-name", "include-action", "include-credential", "has-credential-issue"])) : !_ctx.isNdvV2 ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.header)
              }, [createBaseVNode("div", _hoisted_2, [node.value ? (openBlock(), createBlock(NodeTitle_default, {
                key: 0,
                class: "node-name",
                "model-value": node.value.name,
                "icon-source": iconSource.value,
                "read-only": isReadOnly.value,
                "onUpdate:modelValue": nameChanged
              }, null, 8, ["model-value", "icon-source", "read-only"])) : createCommentVNode("", true), isExecutable.value && !_ctx.blockUI && node.value && nodeValid.value ? (openBlock(), createBlock(NodeExecuteButton_default, {
                key: 1,
                "data-test-id": "node-execute-button",
                "node-name": node.value.name,
                disabled: outputPanelEditMode.value.enabled && !isTriggerNode.value,
                tooltip: executeButtonTooltip.value,
                size: "small",
                "telemetry-source": "parameters",
                onExecute: onNodeExecute,
                onStopExecution,
                onValueChanged: valueChanged
              }, null, 8, ["node-name", "disabled", "tooltip"])) : createCommentVNode("", true)]), node.value && nodeValid.value ? (openBlock(), createBlock(NodeSettingsTabs_default, {
                key: 0,
                "model-value": openPanel.value,
                "node-type": nodeType.value,
                "push-ref": _ctx.pushRef,
                "onUpdate:modelValue": onTabSelect
              }, null, 8, ["model-value", "node-type", "push-ref"])) : createCommentVNode("", true)], 2)) : node.value && nodeValid.value ? (openBlock(), createBlock(NodeSettingsHeader_default, {
                key: 2,
                "selected-tab": openPanel.value,
                "node-name": node.value.name,
                "node-type": nodeType.value,
                "execute-button-tooltip": executeButtonTooltip.value,
                "hide-execute": props.hideExecute || !isExecutable.value || _ctx.blockUI || !node.value || !nodeValid.value,
                "disable-execute": outputPanelEditMode.value.enabled && !isTriggerNode.value,
                "hide-tabs": !nodeValid.value,
                "hide-docs": props.hideDocs,
                "push-ref": _ctx.pushRef,
                onExecute: onNodeExecute,
                onStopExecution,
                onValueChanged: valueChanged,
                onTabChanged: onTabSelect
              }, null, 8, ["selected-tab", "node-name", "node-type", "execute-button-tooltip", "hide-execute", "disable-execute", "hide-tabs", "hide-docs", "push-ref"])) : createCommentVNode("", true), node.value && !nodeValid.value ? (openBlock(), createBlock(NodeSettingsInvalidNodeWarning_default, {
                key: 3,
                node: node.value,
                "preview-mode": isDemoPreview.value
              }, null, 8, ["node", "preview-mode"])) : createCommentVNode("", true), node.value && nodeValid.value ? (openBlock(), createElementBlock("div", {
                key: 4,
                ref_key: "nodeParameterWrapper",
                ref: nodeParameterWrapper,
                class: normalizeClass(["node-parameters-wrapper", shouldShowStaticScrollbar.value ? "with-static-scrollbar" : "", {
                  "ndv-v2": _ctx.isNdvV2
                }, _ctx.extraParameterWrapperClassName ?? ""]),
                "data-test-id": "node-parameters",
                onWheelCapture: _cache[1] || (_cache[1] = $event => emit("captureWheelBody", $event))
              }, [hasForeignCredential.value && !isHomeProjectTeam.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
                key: 0,
                content: unref(i18n).baseText("nodeSettings.hasForeignCredential", {
                  interpolate: {
                    owner: credentialOwnerName.value
                  }
                })
              }, null, 8, ["content"])) : createCommentVNode("", true), createVNode(FreeAiCreditsCallout_default), createVNode(NodeStorageLimitCallout_default), openPanel.value === "action" ? (openBlock(), createBlock(NodeActionsList_default, {
                key: 1,
                class: "action-tab",
                node: node.value,
                onActionSelected: handleSelectAction
              }, null, 8, ["node"])) : createCommentVNode("", true), openPanel.value === "credential" ? (openBlock(), createBlock(NodeCredentials_default, {
                key: 2,
                node: node.value,
                readonly: isReadOnly.value,
                "show-all": true,
                "hide-issues": hiddenIssuesInputs.value.includes("credentials"),
                onCredentialSelected: credentialSelected,
                onValueChanged: valueChanged,
                onBlur: onParameterBlur
              }, null, 8, ["node", "readonly", "hide-issues"])) : createCommentVNode("", true), withDirectives(createBaseVNode("div", null, [createVNode(NodeWebhooks_default, {
                node: node.value,
                "node-type-description": nodeType.value
              }, null, 8, ["node", "node-type-description"]), nodeValuesInitialized.value ? (openBlock(), createBlock(ParameterInputList_default, {
                key: 0,
                parameters: parametersByTab.value.params,
                "hide-delete": true,
                "node-values": nodeValues.value,
                "is-read-only": isReadOnly.value,
                "hidden-issues-inputs": hiddenIssuesInputs.value,
                path: "parameters",
                node: props.activeNode,
                onValueChanged: valueChanged,
                onActivate: onWorkflowActivate,
                onParameterBlur
              }, {
                default: withCtx(() => [!_ctx.isEmbeddedInCanvas && !isDemoPreview.value ? (openBlock(), createBlock(NodeCredentials_default, {
                  key: 0,
                  node: node.value,
                  readonly: isReadOnly.value,
                  "show-all": true,
                  "hide-issues": hiddenIssuesInputs.value.includes("credentials"),
                  onCredentialSelected: credentialSelected,
                  onValueChanged: valueChanged,
                  onBlur: onParameterBlur
                }, null, 8, ["node", "readonly", "hide-issues"])) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["parameters", "node-values", "is-read-only", "hidden-issues-inputs", "node"])) : createCommentVNode("", true), showNoParametersNotice.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nText_default), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.thisNodeDoesNotHaveAnyParameters")), 1)]),
                _: 1
              })])) : createCommentVNode("", true), unref(nodeHelpers).isCustomApiCallSelected(nodeValues.value) ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(N8nNotice_default), {
                content: unref(i18n).baseText("nodeSettings.useTheHttpRequestNode", {
                  interpolate: {
                    nodeTypeDisplayName: nodeType.value?.displayName ?? ""
                  }
                })
              }, null, 8, ["content"])])) : createCommentVNode("", true)], 512), [[vShow, openPanel.value === "params"]]), withDirectives(createBaseVNode("div", null, [unref(isUpdateCheckAvailable) && unref(installedPackage)?.updateAvailable ? (openBlock(), createBlock(CommunityNodeUpdateInfo_default, {
                key: 0,
                "data-test-id": "update-available",
                "package-name": packageName.value,
                style: {
                  "margin-top": "var(--spacing--sm)"
                },
                source: "node settings"
              }, null, 8, ["package-name"])) : createCommentVNode("", true), createVNode(ParameterInputList_default, {
                parameters: parametersByTab.value.settings,
                "node-values": nodeValues.value,
                "is-read-only": isReadOnly.value,
                "hide-delete": true,
                "hidden-issues-inputs": hiddenIssuesInputs.value,
                path: "parameters",
                onValueChanged: valueChanged,
                onParameterBlur
              }, null, 8, ["parameters", "node-values", "is-read-only", "hidden-issues-inputs"]), createVNode(ParameterInputList_default, {
                parameters: nodeSettings.value,
                "hide-delete": true,
                "node-values": nodeValues.value,
                "is-read-only": isReadOnly.value,
                "hidden-issues-inputs": hiddenIssuesInputs.value,
                path: "",
                onValueChanged: valueChanged,
                onParameterBlur
              }, null, 8, ["parameters", "node-values", "is-read-only", "hidden-issues-inputs"]), createBaseVNode("div", _hoisted_5, [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.nodeVersion", {
                interpolate: {
                  node: nodeType.value?.displayName,
                  version: (node.value.typeVersion ?? latestVersion.value).toString()
                }
              })) + " ", 1), createBaseVNode("span", null, "(" + toDisplayString(nodeVersionTag.value) + ")", 1)])], 512), [[vShow, openPanel.value === "settings"]]), _ctx.isNdvV2 && featureRequestUrl.value && !_ctx.isEmbeddedInCanvas ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(_ctx.$style.featureRequest)
              }, [createBaseVNode("a", {
                target: "_blank",
                onClick: onFeatureRequestClick
              }, [createVNode(unref(N8nIcon_default), {
                icon: "lightbulb"
              }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.featureRequest")), 1)])], 2)) : createCommentVNode("", true)], 34)) : createCommentVNode("", true), node.value && !_ctx.hideSubConnections ? (openBlock(), createBlock(NDVSubConnections_default, {
                key: 5,
                ref_key: "subConnections",
                ref: subConnections,
                "root-node": node.value,
                onSwitchSelectedNode,
                onOpenConnectionNodeCreator
              }, null, 8, ["root-node"])) : createCommentVNode("", true), createVNode(unref(N8nBlockUi_default), {
                show: _ctx.blockUI
              }, null, 8, ["show"]), openPanel.value === "settings" && isCommunityNode.value ? (openBlock(), createBlock(CommunityNodeFooter_default, {
                key: 6,
                "package-name": packageName.value,
                "show-manage": unref(useUsersStore)().isInstanceOwner
              }, null, 8, ["package-name", "show-manage"])) : createCommentVNode("", true)], 42, _hoisted_1);
            };
          }
        }); //#endregion
        //#region src/features/ndv/settings/components/NodeSettings.vue?vue&type=style&index=0&lang.module.scss
        header = "_header_oiay4_123";
        featureRequest = "_featureRequest_oiay4_127";
        NodeSettings_vue_vue_type_style_index_0_lang_module_default = {
          header,
          featureRequest
        }; //#endregion
        //#region src/features/ndv/settings/components/NodeSettings.vue
        cssModules = {
          "$style": NodeSettings_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", NodeSettings_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeSettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-e107ee77"]])); //#endregion
      }
    };
  });
})();
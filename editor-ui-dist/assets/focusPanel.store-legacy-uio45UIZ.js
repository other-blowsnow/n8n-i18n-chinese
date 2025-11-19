;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, ref, watchOnce, i18n, require_get, STORES, useWorkflowsStore, useNodeTypesStore, defineStore, useStorage, jsonParse, extractFromAICalls, FROM_AI_AUTO_GENERATED_MARKER, LOCAL_STORAGE_FOCUS_PANEL, PLACEHOLDER_EMPTY_WORKFLOW_ID, NODE_DENYLIST, PATH_DENYLIST, PROP_TYPE_DENYLIST, fromAIExtraProps, import_get, DEFAULT_PANEL_WIDTH, DEFAULT_FOCUS_PANEL_DATA, useFocusPanelStore;
    //#region src/features/ndv/parameters/utils/fromAIOverride.utils.ts
    function sanitizeFromAiParameterName(s) {
      s = s.replace(/[^a-zA-Z0-9\-]/g, "_");
      if (s.length >= 64) s = s.slice(0, 63);
      return s;
    }
    function isExtraPropKey(extraProps, key) {
      return extraProps.hasOwnProperty(key);
    }
    function updateFromAIOverrideValues(override, expr) {
      const {
        extraProps,
        extraPropValues
      } = override;
      const overrides = parseOverrides(expr);
      if (overrides) {
        for (const [key, value] of Object.entries(overrides)) if (isExtraPropKey(extraProps, key)) if (extraProps[key].initialValue === value) delete extraPropValues[key];else extraPropValues[key] = value;
      }
    }
    function fieldTypeToFromAiType(propType) {
      switch (propType) {
        case "boolean":
        case "number":
        case "json":
          return propType;
        default:
          return "string";
      }
    }
    function isFromAIOverrideValue(s) {
      return s.startsWith(`={{ ${FROM_AI_AUTO_GENERATED_MARKER} $fromAI(`);
    }
    function getBestQuoteChar(description) {
      if (description.includes("\n")) return "`";
      if (!description.includes("`")) return "`";
      if (!description.includes("\"")) return "\"";
      return "'";
    }
    function buildUniqueName(props) {
      const filteredPaths = props.path.split(".").filter(x => /\[\d+\]/i.test(x)).map(x => x.replaceAll(/[\[\]]/gi, ""));
      let result = [...filteredPaths, props.parameter.displayName].join("_");
      if (filteredPaths.length > 1) result = result.slice(-63);else result = result.slice(0, 63);
      return result;
    }
    function buildValueFromOverride(override, props, includeMarker) {
      const {
        extraPropValues,
        extraProps
      } = override;
      const marker = includeMarker ? `${FROM_AI_AUTO_GENERATED_MARKER} ` : "";
      const key = sanitizeFromAiParameterName(buildUniqueName(props));
      const description = extraPropValues?.description?.toString() ?? extraProps.description.initialValue;
      const quoteChar = getBestQuoteChar(description);
      return `={{ ${marker}$fromAI('${key}', ${quoteChar}${description.replaceAll(/\\/g, "\\\\").replaceAll(quoteChar, `\\${quoteChar}`)}${quoteChar}, '${fieldTypeToFromAiType(props.parameter.type)}') }}`;
    }
    function parseOverrides(expression) {
      try {
        const calls = extractFromAICalls(expression.replace(/\\[^`]/g, "\\\\"));
        if (calls.length === 1) return {
          description: calls[0].description
        };
      } catch (e) {}
      return null;
    }
    function isDeniedNode(nodeDenyData, node) {
      if (typeof nodeDenyData === "string") return node.type === nodeDenyData;else {
        const [typeName, version] = nodeDenyData;
        return node.type === typeName && node.typeVersion <= version;
      }
    }
    function canBeContentOverride(props, node) {
      if (NODE_DENYLIST.some(x => isDeniedNode(x, node))) return false;
      if (PATH_DENYLIST.includes(props.path)) return false;
      if (PROP_TYPE_DENYLIST.includes(props.parameter.type)) return false;
      const codex = useNodeTypesStore().getNodeType(node.type, node?.typeVersion)?.codex;
      if (!codex?.categories?.includes("AI") || !codex?.subcategories?.AI?.includes("Tools") || codex?.subcategories?.AI?.includes("Vector Stores")) return false;
      return !props.parameter.noDataExpression;
    }
    function makeOverrideValue(context, node) {
      if (!node) return null;
      if (canBeContentOverride(context, node)) {
        const fromAiOverride = {
          type: "fromAI",
          extraProps: fromAIExtraProps,
          extraPropValues: {}
        };
        updateFromAIOverrideValues(fromAiOverride, context.value?.toString() ?? "");
        return fromAiOverride;
      }
      return null;
    }

    //#endregion
    //#region src/app/stores/focusPanel.store.ts
    _export({
      a: updateFromAIOverrideValues,
      i: makeOverrideValue,
      n: buildValueFromOverride,
      r: isFromAIOverrideValue
    });
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_MapCacheLegacy005Js) {
        watchOnce = _MapCacheLegacy005Js.ot;
        i18n = _MapCacheLegacy005Js.pt;
      }, function (_truncateLegacy00hJs) {
        require_get = _truncateLegacy00hJs.r;
      }, function (_useTelemetryLegacy00FJs) {
        STORES = _useTelemetryLegacy00FJs.Cc;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        defineStore = _useTelemetryLegacy00FJs.xc;
        useStorage = _useTelemetryLegacy00FJs.zo;
      }, function (_constantsLegacy00NJs) {
        jsonParse = _constantsLegacy00NJs.Gi;
        extractFromAICalls = _constantsLegacy00NJs.Hr;
        FROM_AI_AUTO_GENERATED_MARKER = _constantsLegacy00NJs.ha;
        LOCAL_STORAGE_FOCUS_PANEL = _constantsLegacy00NJs.ns;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00NJs.s;
      }],
      execute: function () {
        NODE_DENYLIST = ["@n8n/n8n-nodes-langchain.toolCode", "@n8n/n8n-nodes-langchain.toolHttpRequest", "@n8n/n8n-nodes-langchain.mcpClientTool", ["@n8n/n8n-nodes-langchain.toolWorkflow", 1.2]];
        PATH_DENYLIST = ["parameters.name", "parameters.toolName", "parameters.description", "parameters.toolDescription"];
        PROP_TYPE_DENYLIST = ["options", "credentialsSelect"];
        fromAIExtraProps = {
          description: {
            initialValue: "",
            type: "string",
            typeOptions: {
              rows: 2
            },
            tooltip: i18n.baseText("parameterOverride.descriptionTooltip")
          }
        };
        import_get = /* @__PURE__ */__toESM(require_get());
        DEFAULT_PANEL_WIDTH = 500;
        DEFAULT_FOCUS_PANEL_DATA = {
          isActive: false,
          parameters: []
        };
        _export("t", useFocusPanelStore = defineStore(STORES.FOCUS_PANEL, () => {
          const workflowsStore = useWorkflowsStore();
          const focusPanelStorage = useStorage(LOCAL_STORAGE_FOCUS_PANEL);
          const focusPanelData = computed(() => {
            const defaultValue = {
              [workflowsStore.workflowId]: DEFAULT_FOCUS_PANEL_DATA
            };
            return focusPanelStorage.value ? jsonParse(focusPanelStorage.value, {
              fallbackValue: defaultValue
            }) : defaultValue;
          });
          const currentFocusPanelData = computed(() => focusPanelData.value[workflowsStore.workflowId] ?? DEFAULT_FOCUS_PANEL_DATA);
          const lastFocusTimestamp = ref(0);
          const focusPanelActive = computed(() => currentFocusPanelData.value.isActive);
          const focusPanelWidth = computed(() => currentFocusPanelData.value.width ?? DEFAULT_PANEL_WIDTH);
          const _focusedNodeParameters = computed(() => currentFocusPanelData.value.parameters);
          const focusedNodeParameters = computed(() => _focusedNodeParameters.value.map(x => {
            const node = workflowsStore.getNodeById(x.nodeId);
            if (!node) return x;
            const value = (0, import_get.default)(node?.parameters ?? {}, x.parameterPath.replace(/parameters\./, ""));
            if (typeof value === "string" && isFromAIOverrideValue(value)) return x;
            return {
              ...x,
              node,
              value
            };
          }));
          const resolvedParameter = computed(() => focusedNodeParameters.value[0] && isRichParameter(focusedNodeParameters.value[0]) ? focusedNodeParameters.value[0] : void 0);
          function _setOptions({
            parameters,
            isActive,
            wid = workflowsStore.workflowId,
            width = void 0,
            removeEmpty = false
          }) {
            const focusPanelDataCurrent = focusPanelData.value;
            if (removeEmpty && "__EMPTY__" in focusPanelDataCurrent) delete focusPanelDataCurrent[PLACEHOLDER_EMPTY_WORKFLOW_ID];
            focusPanelStorage.value = JSON.stringify({
              ...focusPanelData.value,
              [wid]: {
                isActive: isActive ?? focusPanelActive.value,
                parameters: parameters ?? _focusedNodeParameters.value,
                width: width ?? focusPanelWidth.value
              }
            });
            if (isActive) lastFocusTimestamp.value = Date.now();
          }
          function onNewWorkflowSave(wid) {
            if (!currentFocusPanelData.value || !("__EMPTY__" in focusPanelData.value)) return;
            const latestWorkflowData = focusPanelData.value[PLACEHOLDER_EMPTY_WORKFLOW_ID];
            _setOptions({
              wid,
              parameters: latestWorkflowData.parameters,
              isActive: latestWorkflowData.isActive,
              removeEmpty: true
            });
          }
          function openWithFocusedNodeParameter(nodeParameter) {
            _setOptions({
              parameters: [nodeParameter],
              isActive: true
            });
          }
          function closeFocusPanel() {
            _setOptions({
              isActive: false
            });
          }
          function unsetParameters() {
            _setOptions({
              parameters: []
            });
          }
          function toggleFocusPanel() {
            _setOptions({
              isActive: !focusPanelActive.value
            });
          }
          function updateWidth(width) {
            _setOptions({
              width
            });
          }
          function isRichParameter(p) {
            return "value" in p && "node" in p;
          }
          const focusedNodeParametersInTelemetryFormat = computed(() => focusedNodeParameters.value.map(x => ({
            parameterPath: x.parameterPath,
            nodeType: isRichParameter(x) ? x.node.type : "unresolved",
            nodeId: x.nodeId
          })));
          watchOnce(() => currentFocusPanelData.value, value => {
            if (value.isActive && value.parameters.length > 0) lastFocusTimestamp.value = Date.now();
          });
          return {
            focusPanelActive,
            focusedNodeParameters,
            focusedNodeParametersInTelemetryFormat,
            lastFocusTimestamp,
            focusPanelWidth,
            resolvedParameter,
            openWithFocusedNodeParameter,
            isRichParameter,
            closeFocusPanel,
            toggleFocusPanel,
            onNewWorkflowSave,
            updateWidth,
            unsetParameters
          };
        })); //#endregion
      }
    };
  });
})();
;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./useExternalHooks-legacy-CI7QLTD3.js"], function (_export, _context) {
    "use strict";

    var computed, unref, useI18n, useRootStore, toMegaBytes, useDataSchema, useWorkflowsStore, useNodeTypesStore, useTelemetry, stringSizeInBytes, useToast, jsonParse, jsonStringify, MAX_WORKFLOW_SIZE, NodeConnectionTypes, isSubNodeType, PIN_DATA_NODE_TYPES_DENYLIST, getNodeOutputs, MAX_EXPECTED_REQUEST_SIZE, MAX_PINNED_DATA_SIZE, useExternalHooks;
    //#region src/app/composables/useNodeType.ts
    function useNodeType(options = {}) {
      const nodeTypesStore = useNodeTypesStore();
      const nodeType = computed(() => {
        if (options.nodeType) return unref(options.nodeType);
        const activeNode = unref(options.node);
        if (activeNode) return nodeTypesStore.getNodeType(activeNode.type, activeNode.typeVersion);
        return null;
      });
      return {
        nodeType,
        isSubNodeType: computed(() => isSubNodeType(nodeType.value)),
        isMultipleOutputsNodeType: computed(() => {
          const outputs = nodeType.value?.outputs;
          if (typeof outputs === "string") return false;
          return (outputs ?? []).length > 1;
        })
      };
    }

    //#endregion
    //#region src/app/composables/usePinnedData.ts
    function usePinnedData(node, options = {}) {
      const rootStore = useRootStore();
      const workflowsStore = useWorkflowsStore();
      const toast = useToast();
      const i18n = useI18n();
      const telemetry = useTelemetry();
      const externalHooks = useExternalHooks();
      const {
        getInputDataWithPinned
      } = useDataSchema();
      const workflowObject = computed(() => workflowsStore.workflowObject);
      const {
        isSubNodeType: isSubNodeType$1,
        isMultipleOutputsNodeType
      } = useNodeType({
        node
      });
      const data = computed(() => {
        const targetNode = unref(node);
        return targetNode ? workflowsStore.pinDataByNodeName(targetNode.name) : void 0;
      });
      const hasData = computed(() => {
        return !!unref(node) && typeof data.value !== "undefined";
      });
      const isValidNodeType = computed(() => {
        const targetNode = unref(node);
        return !!targetNode && !isSubNodeType$1.value && !isMultipleOutputsNodeType.value && !PIN_DATA_NODE_TYPES_DENYLIST.includes(targetNode.type);
      });
      function canPinNode(checkDataEmpty = false, outputIndex) {
        const targetNode = unref(node);
        if (targetNode === null || PIN_DATA_NODE_TYPES_DENYLIST.includes(targetNode.type)) return false;
        const nodeType = useNodeTypesStore().getNodeType(targetNode.type, targetNode.typeVersion);
        const dataToPin = getInputDataWithPinned(targetNode);
        if (!nodeType || checkDataEmpty && dataToPin.length === 0) return false;
        const outputs = getNodeOutputs(workflowObject.value, targetNode, nodeType).map(output => typeof output === "string" ? {
          type: output
        } : output);
        const mainOutputs = outputs.filter(output => output.type === NodeConnectionTypes.Main && output.category !== "error");
        let indexAcceptable = true;
        if (outputIndex !== void 0) {
          const output = outputs[outputIndex];
          if (outputs[outputIndex] === void 0) return false;
          indexAcceptable = output.type === NodeConnectionTypes.Main && output.category !== "error";
        }
        return mainOutputs.length === 1 && indexAcceptable;
      }
      function isValidJSON(data$1) {
        try {
          JSON.parse(data$1);
          return true;
        } catch (error) {
          const title = i18n.baseText("runData.editOutputInvalid");
          const toRemove = new RegExp(/JSON\.parse:|of the JSON data/, "g");
          const message = error.message.replace(toRemove, "").trim();
          const positionMatchRegEx = /at position (\d+)/;
          const positionMatch = error.message.match(positionMatchRegEx);
          error.message = message.charAt(0).toUpperCase() + message.slice(1);
          error.message = error.message.replace("Unexpected token ' in JSON", i18n.baseText("runData.editOutputInvalid.singleQuote"));
          if (positionMatch) {
            const position = parseInt(positionMatch[1], 10);
            const lineBreaksUpToPosition = (data$1.slice(0, position).match(/\n/g) || []).length;
            error.message = error.message.replace(positionMatchRegEx, i18n.baseText("runData.editOutputInvalid.atPosition", {
              interpolate: {
                position: `${position}`
              }
            }));
            error.message = `${i18n.baseText("runData.editOutputInvalid.onLine", {
              interpolate: {
                line: `${lineBreaksUpToPosition + 1}`
              }
            })} ${error.message}`;
          }
          toast.showError(error, title);
          return false;
        }
      }
      function getMaxPinnedDataSize() {
        return window.maxPinnedDataSize ?? 12582912;
      }
      function isValidSize(data$1) {
        const targetNode = unref(node);
        if (!targetNode) return false;
        if (typeof data$1 === "object") data$1 = JSON.stringify(data$1);
        const {
          pinData: currentPinData,
          ...workflowObjectWithoutPinData
        } = workflowObject.value;
        const workflowJson = jsonStringify(workflowObjectWithoutPinData, {
          replaceCircularRefs: true
        });
        const newPinData = {
          ...currentPinData,
          [targetNode.name]: data$1
        };
        const newPinDataSize = workflowsStore.getPinDataSize(newPinData);
        if (newPinDataSize > getMaxPinnedDataSize()) {
          toast.showError(new Error(i18n.baseText("ndv.pinData.error.tooLarge.description", {
            interpolate: {
              size: toMegaBytes(newPinDataSize),
              limit: toMegaBytes(getMaxPinnedDataSize())
            }
          })), i18n.baseText("ndv.pinData.error.tooLarge.title"));
          return false;
        }
        const workflowSize = stringSizeInBytes(workflowJson) + newPinDataSize;
        const limit = MAX_WORKFLOW_SIZE - MAX_EXPECTED_REQUEST_SIZE;
        if (workflowSize > limit) {
          toast.showError(new Error(i18n.baseText("ndv.pinData.error.tooLargeWorkflow.description", {
            interpolate: {
              size: toMegaBytes(workflowSize),
              limit: toMegaBytes(limit)
            }
          })), i18n.baseText("ndv.pinData.error.tooLargeWorkflow.title"));
          return false;
        }
        return true;
      }
      function onSetDataSuccess({
        source
      }) {
        const targetNode = unref(node);
        const displayMode = unref(options.displayMode);
        const runIndex = unref(options.runIndex);
        const telemetryPayload = {
          pinning_source: source,
          node_type: targetNode?.type,
          push_ref: rootStore.pushRef,
          data_size: stringSizeInBytes(data.value),
          view: displayMode,
          run_index: runIndex
        };
        externalHooks.run("runData.onDataPinningSuccess", telemetryPayload);
        telemetry.track("Ndv data pinning success", telemetryPayload);
      }
      function onSetDataError({
        errorType,
        source
      }) {
        const targetNode = unref(node);
        const displayMode = unref(options.displayMode);
        const runIndex = unref(options.runIndex);
        telemetry.track("Ndv data pinning failure", {
          pinning_source: source,
          node_type: targetNode?.type,
          push_ref: rootStore.pushRef,
          data_size: stringSizeInBytes(data.value),
          view: displayMode,
          run_index: runIndex,
          error_type: errorType
        });
      }
      function setData(data$1, source) {
        const targetNode = unref(node);
        if (!targetNode) return;
        if (typeof data$1 === "string") {
          if (!isValidJSON(data$1)) {
            onSetDataError({
              errorType: "invalid-json",
              source
            });
            throw new Error("Invalid JSON");
          }
          data$1 = jsonParse(data$1);
        }
        if (!isValidSize(data$1)) {
          onSetDataError({
            errorType: "data-too-large",
            source
          });
          throw new Error("Data too large");
        }
        workflowsStore.pinData({
          node: targetNode,
          data: data$1
        });
        onSetDataSuccess({
          source
        });
      }
      function onUnsetData({
        source
      }) {
        const targetNode = unref(node);
        const runIndex = unref(options.runIndex);
        telemetry.track("User unpinned ndv data", {
          node_type: targetNode?.type,
          push_ref: rootStore.pushRef,
          run_index: runIndex,
          source,
          data_size: stringSizeInBytes(data.value)
        });
      }
      function unsetData(source) {
        const targetNode = unref(node);
        if (!targetNode) return;
        onUnsetData({
          source
        });
        workflowsStore.unpinData({
          node: targetNode
        });
      }
      return {
        data,
        hasData,
        isValidNodeType,
        canPinNode,
        setData,
        onSetDataSuccess,
        onSetDataError,
        unsetData,
        onUnsetData,
        isValidJSON,
        isValidSize
      };
    }

    //#endregion
    _export({
      n: useNodeType,
      t: usePinnedData
    });
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_useTelemetryLegacy00FJs) {
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        toMegaBytes = _useTelemetryLegacy00FJs.Si;
        useDataSchema = _useTelemetryLegacy00FJs.Zt;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        stringSizeInBytes = _useTelemetryLegacy00FJs.xi;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        jsonParse = _constantsLegacy00NJs.Gi;
        jsonStringify = _constantsLegacy00NJs.Ki;
        MAX_WORKFLOW_SIZE = _constantsLegacy00NJs.bs;
        NodeConnectionTypes = _constantsLegacy00NJs.ea;
        isSubNodeType = _constantsLegacy00NJs.ki;
        PIN_DATA_NODE_TYPES_DENYLIST = _constantsLegacy00NJs.nn;
        getNodeOutputs = _constantsLegacy00NJs.vi;
        MAX_EXPECTED_REQUEST_SIZE = _constantsLegacy00NJs.vs;
        MAX_PINNED_DATA_SIZE = _constantsLegacy00NJs.ys;
      }, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }],
      execute: function () {}
    };
  });
})();
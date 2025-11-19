;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var reactive, useRootStore, isEmpty, useWorkflowsStore, request, useTelemetry, defineStore, createResultError, createResultOk, padVersion, isNonEmptyJsonSchema, getSchemaPreview, useSchemaPreviewStore;
    //#endregion
    //#region src/app/utils/json-schema.ts
    function generateJsonSchema(json) {
      return inferType(json);
    }
    function isPrimitive(type) {
      return ["string", "number", "boolean"].includes(type);
    }
    function inferType(value) {
      if (value === null) return {
        type: "null"
      };
      const type = typeof value;
      if (isPrimitive(type)) return {
        type
      };
      if (Array.isArray(value)) return inferArrayType(value);
      if (value && type === "object") return inferObjectType(value);
      return {
        type: "string"
      };
    }
    function inferArrayType(arr) {
      return {
        type: "array",
        items: arr.length > 0 ? inferType(arr[0]) : {}
      };
    }
    function inferObjectType(obj) {
      const properties = {};
      Object.entries(obj).forEach(([key, value]) => {
        properties[key] = inferType(value);
      });
      return {
        type: "object",
        properties
      };
    }

    //#endregion
    //#region src/features/ndv/runData/schemaPreview.store.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
      }, function (_useTelemetryLegacy00FJs) {
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        isEmpty = _useTelemetryLegacy00FJs.gi;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        request = _useTelemetryLegacy00FJs.pc;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_constantsLegacy00NJs) {
        createResultError = _constantsLegacy00NJs.Jr;
        createResultOk = _constantsLegacy00NJs.Yr;
      }],
      execute: function () {
        //#region src/features/ndv/runData/schemaPreview.api.ts
        padVersion = version => {
          return version.toString().split(".").concat(["0", "0"]).slice(0, 3).join(".");
        };
        isNonEmptyJsonSchema = response => {
          return !!response && typeof response === "object" && "type" in response && "properties" in response && !isEmpty(response.properties);
        };
        getSchemaPreview = async (baseUrl, options) => {
          const {
            nodeType,
            version,
            resource,
            operation
          } = options;
          const versionString = padVersion(version);
          const response = await request({
            method: "GET",
            baseURL: baseUrl,
            endpoint: `${["schemas", nodeType.replace("@n8n/", ""), versionString, resource, operation].filter(Boolean).join("/")}.json`,
            withCredentials: false
          });
          if (!isNonEmptyJsonSchema(response)) throw new Error("Invalid JSON schema");
          return response;
        };
        _export("t", useSchemaPreviewStore = defineStore("schemaPreview", () => {
          const schemaPreviews = reactive(/* @__PURE__ */new Map());
          const rootStore = useRootStore();
          const telemetry = useTelemetry();
          const workflowsStore = useWorkflowsStore();
          function getSchemaPreviewKey({
            nodeType,
            version,
            operation,
            resource
          }) {
            return `${nodeType}_${version}_${resource?.toString() ?? "all"}_${operation?.toString() ?? "all"}`;
          }
          async function getSchemaPreview$1(options) {
            const key = getSchemaPreviewKey(options);
            const cached = schemaPreviews.get(key);
            if (cached) return cached;
            try {
              const result = createResultOk(await getSchemaPreview(rootStore.baseUrl, options));
              schemaPreviews.set(key, result);
              return result;
            } catch (error) {
              const result = createResultError(error);
              schemaPreviews.set(key, result);
              return result;
            }
          }
          async function trackSchemaPreviewExecution(pushEvent) {
            if (schemaPreviews.size === 0 || pushEvent.data.executionStatus !== "success") return;
            const node = workflowsStore.getNodeByName(pushEvent.nodeName);
            if (!node) return;
            const {
              id,
              type,
              typeVersion,
              parameters: {
                resource,
                operation
              }
            } = node;
            const result = schemaPreviews.get(getSchemaPreviewKey({
              nodeType: type,
              version: typeVersion,
              resource,
              operation
            }));
            if (!result?.ok) return;
            telemetry.track("User executed node with schema preview", {
              node_id: id,
              node_type: type,
              node_version: typeVersion,
              node_resource: resource,
              node_operation: operation,
              schema_preview: JSON.stringify(result.result),
              output_schema: JSON.stringify(generateJsonSchema(pushEvent.data.data?.main?.[0]?.[0]?.json)),
              workflow_id: workflowsStore.workflowId
            });
          }
          return {
            getSchemaPreview: getSchemaPreview$1,
            trackSchemaPreviewExecution
          };
        })); //#endregion
      }
    };
  });
})();
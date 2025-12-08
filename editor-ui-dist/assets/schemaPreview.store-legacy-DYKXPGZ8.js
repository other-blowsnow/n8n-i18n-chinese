;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./useTelemetry-legacy-CBjbIfKX.js", "./constants-legacy-DVoQkFTS.js", "./_baseOrderBy-legacy-CowL7g45.js"], function (_export, _context) {
    "use strict";

    var reactive, useWorkflowsStore, useTelemetry, isEmpty, createResultOk, createResultError, request, defineStore, useRootStore, padVersion, isNonEmptyJsonSchema, getSchemaPreview, useSchemaPreviewStore;
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
      }, function (_useTelemetryLegacy00HJs) {
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        useTelemetry = _useTelemetryLegacy00HJs.t;
        isEmpty = _useTelemetryLegacy00HJs.vi;
      }, function (_constantsLegacy00TJs) {
        createResultOk = _constantsLegacy00TJs.Di;
        createResultError = _constantsLegacy00TJs.Ei;
      }, function (_baseOrderByLegacy00ZJs) {
        request = _baseOrderByLegacy00ZJs.f;
        defineStore = _baseOrderByLegacy00ZJs.k;
        useRootStore = _baseOrderByLegacy00ZJs.r;
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
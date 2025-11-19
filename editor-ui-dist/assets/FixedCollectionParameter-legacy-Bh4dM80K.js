;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./date-picker-legacy-Cor1wJX7.js", "./overlay-legacy-CnSmhTdu.js", "./ParameterInputList-legacy-DirG3aZ4.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./assistant.store-legacy-D5C3Qmmi.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./chatPanel.store-legacy-NYceFr60.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./useWorkflowSaving-legacy-CRxiFnlk.js", "./retry-legacy-CkXCWkMV.js", "./executions.store-legacy-BxTud2_e.js", "./useRunWorkflow-legacy-6mzz_m9l.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./folders.store-legacy-C8VGYd29.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./isEmpty-legacy-Doz7ETSg.js", "./NDVEmptyState-legacy-Hez6Mzj_.js", "./exports-legacy-RTRnyI4R.js", "./externalSecrets.ee.store-legacy-DTgMWJUD.js", "./uniqBy-legacy-BQtuBYTn.js", "./Draggable-legacy-CcVN489_.js", "./VirtualSchema-legacy-9f7FeJ8b.js", "./TextWithHighlights-legacy-CVW5NpX4.js", "./useTelemetryContext-legacy-CJA6Osaa.js", "./schemaPreview.store-legacy-B2ITMEum.js", "./nodeTransforms-legacy-B6vSYCn_.js", "./FileSaver.min-legacy-BTN44Z38.js", "./vue-json-pretty-legacy-Dk5EQofb.js", "./RunDataHtml-legacy-DopSvQCJ.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./useExecutionHelpers-legacy-DltYlgRM.js", "./vue-legacy-Cj7LJTPA.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, watch, withCtx, openBlock, withModifiers, renderList, createTextVNode, onBeforeMount, createBaseVNode, Suspense, useI18n, N8nOption_default, N8nText_default, N8nButton_default, N8nIconButton_default, N8nSelect_default, N8nInputLabel_default, __plugin_vue_export_helper_default, require_get, require_vuedraggable_umd, ParameterInputList_default, storeToRefs, useNDVStore, useWorkflowsStore, telemetry, isINodePropertyCollectionList, deepCopy, __vite_style__, import_get, import_vuedraggable_umd, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, FixedCollectionParameter_vue_vue_type_script_setup_true_lang_default, FixedCollectionParameter_default;
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
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        Suspense = _vueRuntimeEsmBundlerLegacy003Js.y;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nOption_default = _srcLegacy007Js.G;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nInputLabel_default = _srcLegacy007Js.Y;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        require_get = _truncateLegacy00hJs.r;
      }, function (_iconLegacy00lJs) {}, function (_datePickerLegacy00nJs) {}, function (_overlayLegacy00pJs) {}, function (_ParameterInputListLegacy00rJs) {
        require_vuedraggable_umd = _ParameterInputListLegacy00rJs.r;
        ParameterInputList_default = _ParameterInputListLegacy00rJs.t;
      }, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {}, function (_dialogLegacy00BJs) {}, function (_useTelemetryLegacy00FJs) {
        storeToRefs = _useTelemetryLegacy00FJs.Sc;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        telemetry = _useTelemetryLegacy00FJs.r;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        isINodePropertyCollectionList = _constantsLegacy00NJs.Fi;
        deepCopy = _constantsLegacy00NJs.Hi;
      }, function (_mergeLegacy00PJs) {}, function (_assistantStoreLegacy00RJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_chatPanelStoreLegacy00ZJs) {}, function (_npsSurveyStoreLegacy011Js) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_focusPanelStoreLegacy017Js) {}, function (_useWorkflowSavingLegacy019Js) {}, function (_retryLegacy01bJs) {}, function (_executionsStoreLegacy01dJs) {}, function (_useRunWorkflowLegacy01fJs) {}, function (_usePinnedDataLegacy01hJs) {}, function (_nodeCreatorStoreLegacy01jJs) {}, function (_nodeIconLegacy01lJs) {}, function (_useClipboardLegacy01nJs) {}, function (_useCanvasOperationsLegacy01pJs) {}, function (_foldersStoreLegacy01tJs) {}, function (_NodeIconLegacy01vJs) {}, function (_isEmptyLegacy01TJs) {}, function (_NDVEmptyStateLegacy01VJs) {}, function (_exportsLegacy01XJs) {}, function (_externalSecretsEeStoreLegacy01ZJs) {}, function (_uniqByLegacy01$Js) {}, function (_DraggableLegacy02dJs) {}, function (_VirtualSchemaLegacy02fJs) {}, function (_TextWithHighlightsLegacy02hJs) {}, function (_useTelemetryContextLegacy02jJs) {}, function (_schemaPreviewStoreLegacy02lJs) {}, function (_nodeTransformsLegacy02nJs) {}, function (_FileSaverMinLegacy02rJs) {}, function (_vueJsonPrettyLegacy02tJs) {}, function (_RunDataHtmlLegacy02vJs) {}, function (_dateFormatterLegacy02zJs) {}, function (_useExecutionHelpersLegacy02BJs) {}, function (_vueLegacy03hJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.fixed-collection-parameter[data-v-1c07e2ff] {\n  padding-left: var(--spacing--sm);\n}\n.fixed-collection-parameter .icon-button[data-v-1c07e2ff] {\n  display: flex;\n  flex-direction: column;\n}\n.fixed-collection-parameter .controls[data-v-1c07e2ff] .button {\n  font-weight: var(--font-weight--regular);\n  --button--color--text: var(--color--text--shade-1);\n  --button--border-color: var(--color--foreground);\n  --button--color--background: var(--color--background);\n  --button--color--text--hover: var(--color--text--shade-1);\n  --button--border-color--hover: var(--color--foreground);\n  --button--color--background--hover: var(--color--background);\n  --button--color--text--active: var(--color--text--shade-1);\n  --button--border-color--active: var(--color--foreground);\n  --button--color--background--active: var(--color--background);\n  --button--color--text--focus: var(--color--text--shade-1);\n  --button--border-color--focus: var(--color--foreground);\n  --button--color--background--focus: var(--color--background);\n}\n.fixed-collection-parameter .controls[data-v-1c07e2ff] .button:active, .fixed-collection-parameter .controls[data-v-1c07e2ff] .button.active, .fixed-collection-parameter .controls[data-v-1c07e2ff] .button:focus {\n  outline: none;\n}\n.fixed-collection-parameter-property[data-v-1c07e2ff] {\n  margin: var(--spacing--xs) 0;\n  margin-bottom: 0;\n}\n.parameter-item:hover > .parameter-item-wrapper > .icon-button[data-v-1c07e2ff] {\n  opacity: 1;\n}\n.parameter-item[data-v-1c07e2ff] {\n  position: relative;\n  padding: 0 0 var(--spacing--sm) var(--spacing--sm);\n}\n.parameter-item + .parameter-item .parameter-item-wrapper .default-top-padding[data-v-1c07e2ff] {\n  top: calc(1.2 * var(--spacing--sm));\n}\n.parameter-item + .parameter-item .parameter-item-wrapper .extra-top-padding[data-v-1c07e2ff] {\n  top: calc(2.2 * var(--spacing--sm));\n}\n.parameter-item:first-of-type .parameter-item-wrapper .default-top-padding[data-v-1c07e2ff] {\n  top: var(--spacing--3xs);\n}\n.parameter-item:first-of-type .parameter-item-wrapper .extra-top-padding[data-v-1c07e2ff] {\n  top: var(--spacing--lg);\n}\n.border-top-dashed[data-v-1c07e2ff] {\n  border-top: 1px dashed #999;\n}\n.no-items-exist[data-v-1c07e2ff] {\n  margin: var(--spacing--xs) 0;\n}\n.ghost[data-v-1c07e2ff],\n.dragging[data-v-1c07e2ff] {\n  border-radius: var(--radius);\n  padding-right: var(--spacing--xs);\n}\n.ghost[data-v-1c07e2ff] {\n  background-color: var(--color--background);\n  opacity: 0.5;\n}\n.dragging[data-v-1c07e2ff] {\n  background-color: var(--color--background--light-3);\n  opacity: 0.7;\n}\n.dragging .parameter-item-wrapper[data-v-1c07e2ff] {\n  border: none;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ndv/parameters/components/FixedCollectionParameter.vue?vue&type=script&setup=true&lang.ts
        import_get = /* @__PURE__ */__toESM(require_get());
        import_vuedraggable_umd = /* @__PURE__ */__toESM(require_vuedraggable_umd());
        _hoisted_1 = ["data-test-id"];
        _hoisted_2 = {
          key: 0,
          class: "no-items-exist"
        };
        _hoisted_3 = {
          key: 1
        };
        _hoisted_4 = {
          key: 0,
          class: "icon-button default-top-padding"
        };
        _hoisted_5 = {
          key: 1,
          class: "icon-button extra-top-padding"
        };
        _hoisted_6 = {
          key: 2,
          class: "parameter-item"
        };
        _hoisted_7 = {
          class: "parameter-item-wrapper"
        };
        _hoisted_8 = {
          key: 0,
          class: "icon-button"
        };
        _hoisted_9 = {
          key: 1,
          class: "controls"
        };
        _hoisted_10 = {
          key: 1,
          class: "add-option"
        };
        FixedCollectionParameter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "FixedCollectionParameter",
          props: {
            nodeValues: {},
            parameter: {},
            path: {},
            values: {
              default: () => ({})
            },
            isReadOnly: {
              type: Boolean,
              default: false
            }
          },
          emits: ["valueChanged"],
          setup(__props, {
            emit: __emit
          }) {
            const locale = useI18n();
            const props = __props;
            const emit = __emit;
            const workflowsStore = useWorkflowsStore();
            const ndvStore = useNDVStore();
            const {
              activeNode
            } = storeToRefs(ndvStore);
            const getPlaceholderText = computed(() => {
              const placeholder = locale.nodeText(activeNode.value?.type).placeholder(props.parameter, props.path);
              return placeholder ? placeholder : locale.baseText("fixedCollectionParameter.choose");
            });
            const mutableValues = ref({});
            const selectedOption = ref(null);
            const propertyNames = computed(() => {
              return new Set(Object.keys(mutableValues.value || {}));
            });
            const getProperties = computed(() => {
              const returnProperties = [];
              let tempProperties;
              for (const name of propertyNames.value) {
                tempProperties = getOptionProperties(name);
                if (tempProperties !== void 0) returnProperties.push(tempProperties);
              }
              return returnProperties;
            });
            const multipleValues = computed(() => {
              return !!props.parameter.typeOptions?.multipleValues;
            });
            const parameterOptions = computed(() => {
              if (!isINodePropertyCollectionList(props.parameter.options)) return [];
              if (multipleValues.value) return props.parameter.options;
              return (props.parameter.options ?? []).filter(option => {
                return !propertyNames.value.has(option.name);
              });
            });
            const sortable = computed(() => {
              return !!props.parameter.typeOptions?.sortable;
            });
            watch(() => props.values, newValues => {
              mutableValues.value = deepCopy(newValues);
            }, {
              deep: true
            });
            onBeforeMount(() => {
              mutableValues.value = deepCopy(props.values);
            });
            const deleteOption = (optionName, index) => {
              const currentOptionsOfSameType = mutableValues.value[optionName];
              if (!currentOptionsOfSameType || currentOptionsOfSameType.length > 1) emit("valueChanged", {
                name: getPropertyPath(optionName, index),
                value: void 0
              });else emit("valueChanged", {
                name: getPropertyPath(optionName),
                value: void 0
              });
            };
            const getPropertyPath = (name, index) => {
              return `${props.path}.${name}` + (index !== void 0 ? `[${index}]` : "");
            };
            const getOptionProperties = optionName => {
              if (isINodePropertyCollectionList(props.parameter.options)) {
                for (const option of props.parameter.options) if (option.name === optionName) return option;
              }
            };
            const onAddButtonClick = optionName => {
              optionSelected(optionName);
              if (props.parameter.name === "workflowInputs") trackWorkflowInputFieldAdded();
            };
            const optionSelected = optionName => {
              const option = getOptionProperties(optionName);
              if (option === void 0) return;
              const name = `${props.path}.${option.name}`;
              const newParameterValue = {};
              for (const optionParameter of option.values) if (optionParameter.type === "fixedCollection" && optionParameter.typeOptions !== void 0 && optionParameter.typeOptions.multipleValues === true) newParameterValue[optionParameter.name] = {};else if (optionParameter.typeOptions !== void 0 && optionParameter.typeOptions.multipleValues === true) {
                const multiValue = (0, import_get.default)(props.nodeValues, [props.path, optionParameter.name], []);
                if (Array.isArray(optionParameter.default)) multiValue.push(...deepCopy(optionParameter.default));else if (optionParameter.default !== "" && typeof optionParameter.default !== "object") multiValue.push(deepCopy(optionParameter.default));
                newParameterValue[optionParameter.name] = multiValue;
              } else newParameterValue[optionParameter.name] = deepCopy(optionParameter.default);
              let newValue;
              if (multipleValues.value) {
                newValue = (0, import_get.default)(props.nodeValues, name, []);
                newValue.push(newParameterValue);
              } else newValue = newParameterValue;
              emit("valueChanged", {
                name,
                value: newValue
              });
              selectedOption.value = void 0;
            };
            const valueChanged = parameterData => {
              emit("valueChanged", parameterData);
              if (props.parameter.name === "workflowInputs") trackWorkflowInputFieldTypeChange(parameterData);
            };
            const onDragChange = optionName => {
              emit("valueChanged", {
                name: getPropertyPath(optionName),
                value: mutableValues.value[optionName],
                type: "optionsOrderChanged"
              });
            };
            const trackWorkflowInputFieldTypeChange = parameterData => {
              telemetry.track("User changed workflow input field type", {
                type: parameterData.value,
                workflow_id: workflowsStore.workflow.id,
                node_id: ndvStore.activeNode?.id
              });
            };
            const trackWorkflowInputFieldAdded = () => {
              telemetry.track("User added workflow input field", {
                workflow_id: workflowsStore.workflow.id,
                node_id: ndvStore.activeNode?.id
              });
            };
            function getItemKey(item, property) {
              return mutableValues.value[property.name]?.indexOf(item) ?? -1;
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: "fixed-collection-parameter",
                "data-test-id": `fixed-collection-${props.parameter?.name}`,
                onKeydown: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
              }, [getProperties.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nText_default), {
                size: "small"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("fixedCollectionParameter.currentlyNoItemsExist")), 1)]),
                _: 1
              })])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(getProperties.value, property => {
                return openBlock(), createElementBlock("div", {
                  key: property.name,
                  class: "fixed-collection-parameter-property"
                }, [property.displayName !== "" && _ctx.parameter.options && _ctx.parameter.options.length !== 1 ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
                  key: 0,
                  label: unref(locale).nodeText(unref(activeNode)?.type).inputLabelDisplayName(property, _ctx.path),
                  underline: true,
                  size: "small",
                  color: "text-dark"
                }, null, 8, ["label"])) : createCommentVNode("", true), multipleValues.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(import_vuedraggable_umd.default), {
                  modelValue: mutableValues.value[property.name],
                  "onUpdate:modelValue": $event => mutableValues.value[property.name] = $event,
                  "item-key": item => getItemKey(item, property),
                  handle: ".drag-handle",
                  "drag-class": "dragging",
                  "ghost-class": "ghost",
                  "chosen-class": "chosen",
                  onChange: $event => onDragChange(property.name)
                }, {
                  item: withCtx(({
                    index
                  }) => [(openBlock(), createElementBlock("div", {
                    key: property.name + "-" + index,
                    class: "parameter-item"
                  }, [createBaseVNode("div", {
                    class: normalizeClass(index ? "border-top-dashed parameter-item-wrapper " : "parameter-item-wrapper")
                  }, [!_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_4, [sortable.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                    key: 0,
                    type: "tertiary",
                    text: "",
                    size: "small",
                    icon: "grip-vertical",
                    title: unref(locale).baseText("fixedCollectionParameter.dragItem"),
                    class: "drag-handle"
                  }, null, 8, ["title"])) : createCommentVNode("", true)])) : createCommentVNode("", true), !_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(N8nIconButton_default), {
                    type: "tertiary",
                    text: "",
                    size: "small",
                    icon: "trash-2",
                    "data-test-id": "fixed-collection-delete",
                    title: unref(locale).baseText("fixedCollectionParameter.deleteItem"),
                    onClick: $event => deleteOption(property.name, index)
                  }, null, 8, ["title", "onClick"])])) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
                    default: withCtx(() => [createVNode(ParameterInputList_default, {
                      parameters: property.values,
                      "node-values": _ctx.nodeValues,
                      path: getPropertyPath(property.name, index),
                      "hide-delete": true,
                      "is-read-only": _ctx.isReadOnly,
                      onValueChanged: valueChanged
                    }, null, 8, ["parameters", "node-values", "path", "is-read-only"])]),
                    _: 2
                  }, 1024))], 2)]))]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "item-key", "onChange"])])) : (openBlock(), createElementBlock("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [!_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(unref(N8nIconButton_default), {
                  type: "tertiary",
                  text: "",
                  size: "small",
                  icon: "trash-2",
                  "data-test-id": "fixed-collection-delete",
                  title: unref(locale).baseText("fixedCollectionParameter.deleteItem"),
                  onClick: $event => deleteOption(property.name)
                }, null, 8, ["title", "onClick"])])) : createCommentVNode("", true), createVNode(ParameterInputList_default, {
                  parameters: property.values,
                  "node-values": _ctx.nodeValues,
                  path: getPropertyPath(property.name),
                  "is-read-only": _ctx.isReadOnly,
                  class: "parameter-item",
                  "hide-delete": true,
                  onValueChanged: valueChanged
                }, null, 8, ["parameters", "node-values", "path", "is-read-only"])])]))]);
              }), 128)), parameterOptions.value.length > 0 && !_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_9, [_ctx.parameter.options && _ctx.parameter.options.length === 1 ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                type: "tertiary",
                block: "",
                "data-test-id": "fixed-collection-add",
                label: getPlaceholderText.value,
                onClick: _cache[0] || (_cache[0] = $event => onAddButtonClick(_ctx.parameter.options[0].name))
              }, null, 8, ["label"])) : (openBlock(), createElementBlock("div", _hoisted_10, [createVNode(unref(N8nSelect_default), {
                modelValue: selectedOption.value,
                "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => selectedOption.value = $event), optionSelected],
                placeholder: getPlaceholderText.value,
                size: "small",
                filterable: ""
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(parameterOptions.value, item => {
                  return openBlock(), createBlock(unref(N8nOption_default), {
                    key: item.name,
                    label: unref(locale).nodeText(unref(activeNode)?.type).collectionOptionDisplayName(_ctx.parameter, item, _ctx.path),
                    value: item.name
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue", "placeholder"])]))])) : createCommentVNode("", true)], 40, _hoisted_1);
            };
          }
        }); //#endregion
        //#region src/features/ndv/parameters/components/FixedCollectionParameter.vue
        _export("default", FixedCollectionParameter_default = /* @__PURE__ */__plugin_vue_export_helper_default(FixedCollectionParameter_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-1c07e2ff"]])); //#endregion
      }
    };
  });
})();
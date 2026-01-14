import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-Bj1GGFfn.js";
import { $ as N8nInputLabel_default, J as N8nSelect_default, Sn as N8nButton_default, Y as N8nOption_default, wn as N8nIcon_default, xn as N8nText_default, xt as N8nIconButton_default } from "./src-RP8mjDvT.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { r as require_get } from "./truncate-6_fzHAQJ.js";
import "./date-picker-DkGLd5ag.js";
import { A as telemetry, Gn as useNodeHelpers, M as useNDVStore, N as useWorkflowsStore } from "./builder.store-BQ4J8N5h.js";
import { r as require_vuedraggable_umd, t as ParameterInputList_default } from "./ParameterInputList-DcV1fIUD.js";
import "./empty-BUjCyq3U.js";
import "./dialog-o-qzrWfM.js";
import "./sanitize-html-BkT1y0bJ.js";
import "./CalendarDate-zWqgZMlk.js";
import { Ea as deepCopy, _o as require_isEqual, va as isINodePropertyCollectionList } from "./constants-CGISHWeU.js";
import "./merge-BKLQxE1s.js";
import { A as storeToRefs } from "./_baseOrderBy-BMv6j_Ja.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-DZkYHQbC.js";
import "./assistant.store-DhKz7nhG.js";
import "./chatPanel.store-DTuiGU55.js";
import "./retry-B-tGcWte.js";
import "./executions.store-DqQJWMJt.js";
import "./useRunWorkflow-CAySIFNE.js";
import "./usePinnedData-DgEIBpY4.js";
import "./nodeCreator.store-SgbeZMHF.js";
import "./nodeIcon-Bu0j0Yy7.js";
import "./useCanvasOperations-BhTGS3pf.js";
import "./folders.store-C4nO4ras.js";
import "./NodeIcon-Cm3jW6pd.js";
import "./useClipboard-9U1AzNxt.js";
import "./RunData-DsVTYsTG.js";
import "./NDVEmptyState-CJfKTFGR.js";
import "./exports-C5ncBo9h.js";
import "./externalSecrets.ee.store-BXrvpWFs.js";
import "./uniqBy-DHUhqSr0.js";
import "./RunDataHtml-S_j2pLRX.js";
import "./VueMarkdown-W8HpU8R8.js";
import "./Draggable-DyM1iOHp.js";
import "./VirtualSchema-B0b4Q3if.js";
import "./TextWithHighlights-CgDEugGZ.js";
import "./useTelemetryContext-WaVEkKmD.js";
import "./schemaPreview.store-CyjmQYyQ.js";
import "./nodeTransforms-COXkhBZ5.js";
import "./vue-json-pretty-DF-vJpHf.js";
import "./dateFormatter-AtgnFrPc.js";
import "./useExecutionHelpers-BSKM1CtC.js";
import "./vue-Dd77OcSb.js";
var import_get = /* @__PURE__ */ __toESM(require_get());
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual());
var import_vuedraggable_umd = /* @__PURE__ */ __toESM(require_vuedraggable_umd());
var _hoisted_1 = ["data-test-id"];
var _hoisted_2 = {
	key: 0,
	class: "no-items-exist"
};
var _hoisted_3 = { key: 1 };
var _hoisted_4 = {
	key: 0,
	class: "icon-button default-top-padding"
};
var _hoisted_5 = {
	key: 1,
	class: "icon-button extra-top-padding"
};
var _hoisted_6 = {
	key: 2,
	class: "optional-values-picker add-option",
	"data-test-id": "fixed-collection-add-property"
};
var _hoisted_7 = { class: "optional-value-item" };
var _hoisted_8 = {
	key: 2,
	class: "parameter-item"
};
var _hoisted_9 = { class: "parameter-item-wrapper" };
var _hoisted_10 = {
	key: 0,
	class: "icon-button"
};
var _hoisted_11 = {
	key: 1,
	class: "optional-values-picker add-option",
	"data-test-id": "fixed-collection-add-property"
};
var _hoisted_12 = { class: "optional-value-item" };
var _hoisted_13 = {
	key: 1,
	class: "controls"
};
var _hoisted_14 = {
	key: 1,
	class: "add-option"
};
var FixedCollectionParameter_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "FixedCollectionParameter",
	props: {
		nodeValues: {},
		parameter: {},
		path: {},
		values: { default: () => ({}) },
		isReadOnly: {
			type: Boolean,
			default: false
		},
		hiddenIssuesInputs: { default: () => [] }
	},
	emits: ["valueChanged"],
	setup(__props, { emit: __emit }) {
		const locale = useI18n();
		const nodeHelpers = useNodeHelpers();
		const props = __props;
		const emit = __emit;
		const workflowsStore = useWorkflowsStore();
		const ndvStore = useNDVStore();
		const { activeNode } = storeToRefs(ndvStore);
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
		const addedOptionalValues = ref(/* @__PURE__ */ new Map());
		const parameterOptions = computed(() => {
			if (!isINodePropertyCollectionList(props.parameter.options)) return [];
			if (multipleValues.value) return props.parameter.options;
			return (props.parameter.options ?? []).filter((option) => {
				return !propertyNames.value.has(option.name);
			});
		});
		const sortable = computed(() => {
			return !!props.parameter.typeOptions?.sortable;
		});
		const hideOptionalFields = computed(() => {
			return !!props.parameter.typeOptions?.hideOptionalFields;
		});
		const addOptionalFieldButtonText = computed(() => {
			if (!props.parameter.typeOptions?.addOptionalFieldButtonText) return locale.baseText("fixedCollectionParameter.addField");
			return locale.nodeText(activeNode.value?.type).addOptionalFieldButtonText(props.parameter);
		});
		const getOptionalValuesKey = (propertyName, index) => {
			return index !== void 0 ? `${propertyName}-${index}` : propertyName;
		};
		const hasNonDefaultValue = (propertyDef, itemValues) => {
			if (!itemValues) return false;
			const value = itemValues[propertyDef.name];
			if (value === void 0 || value === null) return false;
			if (typeof value === "string" && value === "") return false;
			if (typeof value === "object") return !(0, import_isEqual.default)(value, propertyDef.default);
			return value !== propertyDef.default;
		};
		const initializeAddedOptionalValues = () => {
			if (!hideOptionalFields.value) return;
			if (!isINodePropertyCollectionList(props.parameter.options)) return;
			addedOptionalValues.value.clear();
			for (const property of props.parameter.options) {
				const propertyPath = `${props.path}.${property.name}`;
				const propertyValues = (0, import_get.default)(props.nodeValues, propertyPath);
				if (!propertyValues) continue;
				const optionalValueDefs = property.values.filter((v) => v.required !== true && v.type !== "notice");
				if (multipleValues.value && Array.isArray(propertyValues)) propertyValues.forEach((itemValues, index) => {
					const key = getOptionalValuesKey(property.name, index);
					const addedValues = /* @__PURE__ */ new Set();
					for (const valueDef of optionalValueDefs) if (hasNonDefaultValue(valueDef, itemValues)) addedValues.add(valueDef.name);
					if (addedValues.size > 0) addedOptionalValues.value.set(key, addedValues);
				});
				else if (typeof propertyValues === "object" && !Array.isArray(propertyValues)) {
					const key = getOptionalValuesKey(property.name);
					const addedValues = /* @__PURE__ */ new Set();
					for (const valueDef of optionalValueDefs) if (hasNonDefaultValue(valueDef, propertyValues)) addedValues.add(valueDef.name);
					if (addedValues.size > 0) addedOptionalValues.value.set(key, addedValues);
				}
			}
		};
		const isOptionalValueAdded = (propertyName, valueName, index) => {
			const key = getOptionalValuesKey(propertyName, index);
			return addedOptionalValues.value.get(key)?.has(valueName) ?? false;
		};
		const getVisiblePropertyValues = (property, index) => {
			if (!hideOptionalFields.value) return property.values;
			const key = getOptionalValuesKey(property.name, index);
			const addedValues = addedOptionalValues.value.get(key);
			return property.values.filter((value) => {
				if (value.required === true) return true;
				if (value.type === "notice") return true;
				if (addedValues?.has(value.name)) return true;
				if (value.typeOptions?.showEvenWhenOptional) return true;
				return false;
			});
		};
		const getPickerPropertyValues = (property, index) => {
			if (!hideOptionalFields.value) return [];
			const itemPath = getPropertyPath(property.name, index);
			return property.values.filter((value) => {
				if (value.required === true) return false;
				if (value.type === "notice") return false;
				if (value.typeOptions?.showEvenWhenOptional) return false;
				return nodeHelpers.displayParameter(props.nodeValues, value, itemPath, activeNode.value);
			});
		};
		const toggleOptionalValue = (property, valueName, index) => {
			const key = getOptionalValuesKey(property.name, index);
			let valueSet = addedOptionalValues.value.get(key);
			if (!valueSet) {
				valueSet = /* @__PURE__ */ new Set();
				addedOptionalValues.value.set(key, valueSet);
			}
			const valueDef = property.values.find((v) => v.name === valueName);
			if (!valueDef) return;
			const isCurrentlyAdded = valueSet.has(valueName);
			if (isCurrentlyAdded) valueSet.delete(valueName);
			else valueSet.add(valueName);
			addedOptionalValues.value.set(key, valueSet);
			emit("valueChanged", {
				name: getPropertyPath(property.name, index) + `.${valueName}`,
				value: isCurrentlyAdded ? void 0 : deepCopy(valueDef.default)
			});
		};
		watch(() => props.values, (newValues) => {
			mutableValues.value = deepCopy(newValues);
		}, { deep: true });
		onBeforeMount(() => {
			mutableValues.value = deepCopy(props.values);
			initializeAddedOptionalValues();
		});
		const deleteOption = (optionName, index) => {
			const currentOptionsOfSameType = mutableValues.value[optionName];
			if (!currentOptionsOfSameType || currentOptionsOfSameType.length > 1) emit("valueChanged", {
				name: getPropertyPath(optionName, index),
				value: void 0
			});
			else emit("valueChanged", {
				name: getPropertyPath(optionName),
				value: void 0
			});
		};
		const getPropertyPath = (name, index) => {
			return `${props.path}.${name}` + (index !== void 0 ? `[${index}]` : "");
		};
		const getOptionProperties = (optionName) => {
			if (isINodePropertyCollectionList(props.parameter.options)) {
				for (const option of props.parameter.options) if (option.name === optionName) return option;
			}
		};
		const onAddButtonClick = (optionName) => {
			optionSelected(optionName);
			if (props.parameter.name === "workflowInputs") trackWorkflowInputFieldAdded();
		};
		const optionSelected = (optionName) => {
			const option = getOptionProperties(optionName);
			if (option === void 0) return;
			const name = `${props.path}.${option.name}`;
			const newParameterValue = {};
			for (const optionParameter of option.values) if (optionParameter.type === "fixedCollection" && optionParameter.typeOptions !== void 0 && optionParameter.typeOptions.multipleValues === true) newParameterValue[optionParameter.name] = {};
			else if (optionParameter.typeOptions !== void 0 && optionParameter.typeOptions.multipleValues === true) {
				const multiValue = (0, import_get.default)(props.nodeValues, [props.path, optionParameter.name], []);
				if (Array.isArray(optionParameter.default)) multiValue.push(...deepCopy(optionParameter.default));
				else if (optionParameter.default !== "" && typeof optionParameter.default !== "object") multiValue.push(deepCopy(optionParameter.default));
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
		const valueChanged = (parameterData) => {
			emit("valueChanged", parameterData);
			if (props.parameter.name === "workflowInputs") trackWorkflowInputFieldTypeChange(parameterData);
		};
		const onDragChange = (optionName) => {
			emit("valueChanged", {
				name: getPropertyPath(optionName),
				value: mutableValues.value[optionName],
				type: "optionsOrderChanged"
			});
		};
		const trackWorkflowInputFieldTypeChange = (parameterData) => {
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
			}, [
				getProperties.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("fixedCollectionParameter.currentlyNoItemsExist")), 1)]),
					_: 1
				})])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(getProperties.value, (property) => {
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
						"onUpdate:modelValue": ($event) => mutableValues.value[property.name] = $event,
						"item-key": (item) => getItemKey(item, property),
						handle: ".drag-handle",
						"drag-class": "dragging",
						"ghost-class": "ghost",
						"chosen-class": "chosen",
						onChange: ($event) => onDragChange(property.name)
					}, {
						item: withCtx(({ index }) => [(openBlock(), createElementBlock("div", {
							key: property.name + "-" + index,
							class: "parameter-item"
						}, [createBaseVNode("div", { class: normalizeClass(index ? "border-top-dashed parameter-item-wrapper " : "parameter-item-wrapper") }, [
							!_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_4, [sortable.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
								key: 0,
								type: "tertiary",
								text: "",
								size: "small",
								icon: "grip-vertical",
								title: unref(locale).baseText("fixedCollectionParameter.dragItem"),
								class: "drag-handle"
							}, null, 8, ["title"])) : createCommentVNode("", true)])) : createCommentVNode("", true),
							!_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(N8nIconButton_default), {
								type: "tertiary",
								text: "",
								size: "small",
								icon: "trash-2",
								"data-test-id": "fixed-collection-delete",
								title: unref(locale).baseText("fixedCollectionParameter.deleteItem"),
								onClick: ($event) => deleteOption(property.name, index)
							}, null, 8, ["title", "onClick"])])) : createCommentVNode("", true),
							(openBlock(), createBlock(Suspense, null, {
								default: withCtx(() => [createVNode(ParameterInputList_default, {
									parameters: getVisiblePropertyValues(property, index),
									"node-values": _ctx.nodeValues,
									path: getPropertyPath(property.name, index),
									"hide-delete": true,
									"is-read-only": _ctx.isReadOnly,
									"hidden-issues-inputs": _ctx.hiddenIssuesInputs,
									onValueChanged: valueChanged
								}, null, 8, [
									"parameters",
									"node-values",
									"path",
									"is-read-only",
									"hidden-issues-inputs"
								])]),
								_: 2
							}, 1024)),
							getPickerPropertyValues(property, index).length > 0 && !_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(N8nSelect_default), {
								placeholder: addOptionalFieldButtonText.value,
								size: "small",
								filterable: "",
								"model-value": null,
								"onUpdate:modelValue": (valueName) => toggleOptionalValue(property, valueName, index)
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(getPickerPropertyValues(property, index), (value) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: value.name,
										label: value.displayName || value.name,
										value: value.name
									}, {
										default: withCtx(() => [createBaseVNode("div", _hoisted_7, [createBaseVNode("span", null, toDisplayString(value.displayName || value.name), 1), isOptionalValueAdded(property.name, value.name, index) ? (openBlock(), createBlock(unref(N8nIcon_default), {
											key: 0,
											icon: "check",
											size: "medium"
										})) : createCommentVNode("", true)])]),
										_: 2
									}, 1032, ["label", "value"]);
								}), 128))]),
								_: 2
							}, 1032, ["placeholder", "onUpdate:modelValue"])])) : createCommentVNode("", true)
						], 2)]))]),
						_: 2
					}, 1032, [
						"modelValue",
						"onUpdate:modelValue",
						"item-key",
						"onChange"
					])])) : (openBlock(), createElementBlock("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [
						!_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_10, [createVNode(unref(N8nIconButton_default), {
							type: "tertiary",
							text: "",
							size: "small",
							icon: "trash-2",
							"data-test-id": "fixed-collection-delete",
							title: unref(locale).baseText("fixedCollectionParameter.deleteItem"),
							onClick: ($event) => deleteOption(property.name)
						}, null, 8, ["title", "onClick"])])) : createCommentVNode("", true),
						createVNode(ParameterInputList_default, {
							parameters: getVisiblePropertyValues(property),
							"node-values": _ctx.nodeValues,
							path: getPropertyPath(property.name),
							"is-read-only": _ctx.isReadOnly,
							class: "parameter-item",
							"hide-delete": true,
							"hidden-issues-inputs": _ctx.hiddenIssuesInputs,
							onValueChanged: valueChanged
						}, null, 8, [
							"parameters",
							"node-values",
							"path",
							"is-read-only",
							"hidden-issues-inputs"
						]),
						getPickerPropertyValues(property).length > 0 && !_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(unref(N8nSelect_default), {
							placeholder: addOptionalFieldButtonText.value,
							size: "small",
							filterable: "",
							"model-value": null,
							"onUpdate:modelValue": (valueName) => toggleOptionalValue(property, valueName)
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(getPickerPropertyValues(property), (value) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: value.name,
									label: value.displayName || value.name,
									value: value.name
								}, {
									default: withCtx(() => [createBaseVNode("div", _hoisted_12, [createBaseVNode("span", null, toDisplayString(value.displayName || value.name), 1), isOptionalValueAdded(property.name, value.name) ? (openBlock(), createBlock(unref(N8nIcon_default), {
										key: 0,
										icon: "check",
										size: "medium"
									})) : createCommentVNode("", true)])]),
									_: 2
								}, 1032, ["label", "value"]);
							}), 128))]),
							_: 2
						}, 1032, ["placeholder", "onUpdate:modelValue"])])) : createCommentVNode("", true)
					])]))]);
				}), 128)),
				parameterOptions.value.length > 0 && !_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_13, [_ctx.parameter.options && _ctx.parameter.options.length === 1 ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					type: "tertiary",
					block: "",
					"data-test-id": "fixed-collection-add",
					label: getPlaceholderText.value,
					onClick: _cache[0] || (_cache[0] = ($event) => onAddButtonClick(_ctx.parameter.options[0].name))
				}, null, 8, ["label"])) : (openBlock(), createElementBlock("div", _hoisted_14, [createVNode(unref(N8nSelect_default), {
					modelValue: selectedOption.value,
					"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => selectedOption.value = $event), optionSelected],
					placeholder: getPlaceholderText.value,
					size: "small",
					filterable: ""
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(parameterOptions.value, (item) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: item.name,
							label: unref(locale).nodeText(unref(activeNode)?.type).collectionOptionDisplayName(_ctx.parameter, item, _ctx.path),
							value: item.name
						}, null, 8, ["label", "value"]);
					}), 128))]),
					_: 1
				}, 8, ["modelValue", "placeholder"])]))])) : createCommentVNode("", true)
			], 40, _hoisted_1);
		};
	}
}), [["__scopeId", "data-v-33c4afd7"]]);
export { FixedCollectionParameter_default as default };

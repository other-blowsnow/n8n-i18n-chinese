import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { $ as N8nInputLabel_default, Hn as N8nText_default, J as N8nSelect_default, Un as N8nButton_default, Y as N8nOption_default, xt as N8nIconButton_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { r as require_get } from "./truncate-BlCeUq7F.js";
import "./date-picker-DkviJuRa.js";
import "./overlay-Crh-SkkJ.js";
import { r as require_vuedraggable_umd, t as ParameterInputList_default } from "./ParameterInputList-BkkD9Rj2.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-LAVj4VkL.js";
import "./dialog-B6i5gbQO.js";
import { _ as useNDVStore, h as telemetry, v as useWorkflowsStore } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { Da as deepCopy, ya as isINodePropertyCollectionList } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import { A as storeToRefs } from "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./assistant.store-C6RPQyDt.js";
import "./chatPanel.store-ButVR73Z.js";
import "./npsSurvey.store-KZKvEKjG.js";
import "./cloudPlan.store-2sNk8KGc.js";
import "./templates.store-Bn6ky68e.js";
import "./focusPanel.store-B3Hj42tS.js";
import "./useWorkflowSaving-Cw6HTOE_.js";
import "./retry-CMAFrhVi.js";
import "./executions.store-C5l19MhO.js";
import "./useRunWorkflow-XIsejmpa.js";
import "./usePinnedData-CWeGQujV.js";
import "./nodeCreator.store-DIZVn2cH.js";
import "./nodeIcon-7dyMxFgB.js";
import "./useClipboard-Dy2su5yb.js";
import "./useCanvasOperations-DMjr_djE.js";
import "./folders.store-BHgrqAL-.js";
import "./NodeIcon-BDiqVc0r.js";
import "./isEmpty-PCEL7TGG.js";
import "./NDVEmptyState-BU6X18Do.js";
import "./exports-CdZcr9ah.js";
import "./externalSecrets.ee.store-BnT4MP-2.js";
import "./uniqBy-BVnXCFIn.js";
import "./RunDataHtml-_b8v7-9v.js";
import "./VueMarkdown-DBt7Thyn.js";
import "./Draggable-BRjYmAgg.js";
import "./VirtualSchema-BAV4fJgS.js";
import "./TextWithHighlights-C4QSPTGM.js";
import "./useTelemetryContext-CErjd9fg.js";
import "./schemaPreview.store-BEPOaDMi.js";
import "./nodeTransforms-BqV90EB_.js";
import "./FileSaver.min--9uV1QmK.js";
import "./vue-json-pretty-B9qWbmOF.js";
import "./dateFormatter-CqPC8pC-.js";
import "./useExecutionHelpers-DUVi4eic.js";
import "./vue-0rlD32wK.js";
var import_get = /* @__PURE__ */ __toESM(require_get());
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
	class: "parameter-item"
};
var _hoisted_7 = { class: "parameter-item-wrapper" };
var _hoisted_8 = {
	key: 0,
	class: "icon-button"
};
var _hoisted_9 = {
	key: 1,
	class: "controls"
};
var _hoisted_10 = {
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
		watch(() => props.values, (newValues) => {
			mutableValues.value = deepCopy(newValues);
		}, { deep: true });
		onBeforeMount(() => {
			mutableValues.value = deepCopy(props.values);
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
									parameters: property.values,
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
							}, 1024))
						], 2)]))]),
						_: 2
					}, 1032, [
						"modelValue",
						"onUpdate:modelValue",
						"item-key",
						"onChange"
					])])) : (openBlock(), createElementBlock("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [!_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(unref(N8nIconButton_default), {
						type: "tertiary",
						text: "",
						size: "small",
						icon: "trash-2",
						"data-test-id": "fixed-collection-delete",
						title: unref(locale).baseText("fixedCollectionParameter.deleteItem"),
						onClick: ($event) => deleteOption(property.name)
					}, null, 8, ["title", "onClick"])])) : createCommentVNode("", true), createVNode(ParameterInputList_default, {
						parameters: property.values,
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
					])])]))]);
				}), 128)),
				parameterOptions.value.length > 0 && !_ctx.isReadOnly ? (openBlock(), createElementBlock("div", _hoisted_9, [_ctx.parameter.options && _ctx.parameter.options.length === 1 ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					type: "tertiary",
					block: "",
					"data-test-id": "fixed-collection-add",
					label: getPlaceholderText.value,
					onClick: _cache[0] || (_cache[0] = ($event) => onAddButtonClick(_ctx.parameter.options[0].name))
				}, null, 8, ["label"])) : (openBlock(), createElementBlock("div", _hoisted_10, [createVNode(unref(N8nSelect_default), {
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
}), [["__scopeId", "data-v-fc67ef85"]]);
export { FixedCollectionParameter_default as default };

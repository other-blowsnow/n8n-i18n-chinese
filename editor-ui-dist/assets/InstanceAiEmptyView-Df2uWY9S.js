import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, O as createSlots, P as getCurrentInstance, Pt as reactive, S as computed, St as withMemo, T as createCommentVNode, U as mergeProps, Ut as toValue, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, jt as isRef, m as withKeys, n as Transition, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, xt as withDirectives, yn as normalizeProps, yt as watchSyncEffect } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-Cx-W4qgg.js";
import { Aa as useHideOthers, Ba as createEventHook, Da as useTypeahead, Ea as Presence_default, Ha as handleAndDispatchCustomEvent, Ia as useDirection, Ja as N8nButton_default, La as useBodyScrollLock, Ma as useForwardProps, Mi as useChatInputAutoFocus, Na as useForwardExpose, Oa as useKbd, Oi as AskAssistantIcon_default, Pa as useFormControl, Ta as Primitive, Ua as createContext, Va as refAutoReset, Wa as isEqual, Ya as N8nIcon_default, _a as getFocusIntent, _t as useRouter, ba as DismissableLayer_default, da as PopperContent_default, fa as PopperAnchor_default, ja as useForwardPropsEmits, ka as useId, lt as N8nLink_default, ma as VisuallyHiddenInput_default, pa as PopperRoot_default, qa as N8nText_default, tt as N8nInfoTip_default, v as N8nScrollArea_default, va as useCollection, wa as usePrimitiveElement, ya as Teleport_default, za as useVModel, zi as N8nTooltip_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Y as useIntervalFn, b as useResizeObserver, p as useElementSize, y as useMediaQuery } from "./core-CxAuVuwP.js";
import { t as useToast } from "./useToast-BSzM4LgJ.js";
import { Xl as v4, _t as NODE_CREATOR_OPEN_SOURCES, dd as INSTANCE_AI_PROMPT_SUGGESTIONS_V2_EXPERIMENT, fd as INSTANCE_AI_SPLIT_EMPTY_STATE_EXPERIMENT, ld as INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPERIMENT, ud as INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT, ui as VIEWS } from "./constants-ZSgQBvyG.js";
import { xn as useProjectsStore } from "./workflowDocument.store-B_SrjkP6.js";
import { D as storeToRefs, t as useRootStore } from "./useRootStore-BH7aCkdu.js";
import { t as useSettingsStore } from "./settings.store-fzkHYqQC.js";
import { _ as useStorage, f as useUIStore, g as usePostHog, p as useTelemetry } from "./users.store-DlXqF6lz.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-DoHsQ1zk.js";
import { a as trackTemplatesClick, n as getExperimentTelemetryPayload, t as TemplateClickSource } from "./utils-CbV77hDl.js";
import { t as useTemplatesStore } from "./templates.store-DxNm_d1n.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DtWPu5uu.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-MhJQo0aE.js";
import { n as INSTANCE_AI_THREAD_VIEW } from "./constants-CdPER9c3.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BQRQJUiK.js";
import { n as useInstanceAiStore } from "./instanceAi.store-CaacBsFp.js";
import { t as CreditWarningBanner_default } from "./CreditWarningBanner-F_7OVqYy.js";
import { a as useInstanceAiPromptSuggestionsTelemetry, n as InstanceAiViewHeader_default, o as useCreditWarningBanner, r as InstanceAiInput_default, s as INSTANCE_AI_EMPTY_STATE_SUGGESTIONS, t as WorkflowBuilderUnavailableNotice_default } from "./WorkflowBuilderUnavailableNotice-KzAlHDbp.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/shared/arrays.js
/**
* The function `findValuesBetween` takes an array and two values, then returns a subarray containing
* elements between the first occurrence of the start value and the first occurrence of the end value
* in the array.
* @param {T[]} array - The `array` parameter is an array of values of type `T`.
* @param {T} start - The `start` parameter is the value that marks the beginning of the range you want
* to find in the array.
* @param {T} end - The `end` parameter in the `findValuesBetween` function represents the end value
* that you want to find in the array. This function will return a subarray of values that are between
* the `start` and `end` values in the original array.
* @returns The `findValuesBetween` function returns an array of values from the input array that are
* between the `start` and `end` values (inclusive). If either the `start` or `end` values are not
* found in the input array, an empty array is returned.
*/
function findValuesBetween(array, start, end) {
	const startIndex = array.findIndex((i) => isEqual(i, start));
	const endIndex = array.findIndex((i) => isEqual(i, end));
	if (startIndex === -1 || endIndex === -1) return [];
	const [minIndex, maxIndex] = [startIndex, endIndex].sort((a, b) => a - b);
	return array.slice(minIndex, maxIndex + 1);
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/shared/useFilter.js
/**
* Provides locale-aware string filtering functions.
* Uses `Intl.Collator` for comparison to ensure proper Unicode handling.
*
* @param options - Optional collator options to customize comparison behavior.
*   See [Intl.CollatorOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options) for details.
* @returns An object with methods to check if a string starts with, ends with, or contains a substring.
*
* @example
* const { startsWith, endsWith, contains } = useFilter();
*
* startsWith('hello', 'he'); // true
* endsWith('hello', 'lo'); // true
* contains('hello', 'ell'); // true
*/
function useFilter(options) {
	const computedOptions = computed(() => unref(options));
	const collator = computed(() => new Intl.Collator("en", {
		usage: "search",
		...computedOptions.value
	}));
	const startsWith = (string, substring) => {
		if (substring.length === 0) return true;
		string = string.normalize("NFC");
		substring = substring.normalize("NFC");
		return collator.value.compare(string.slice(0, substring.length), substring) === 0;
	};
	const endsWith = (string, substring) => {
		if (substring.length === 0) return true;
		string = string.normalize("NFC");
		substring = substring.normalize("NFC");
		return collator.value.compare(string.slice(-substring.length), substring) === 0;
	};
	const contains = (string, substring) => {
		if (substring.length === 0) return true;
		string = string.normalize("NFC");
		substring = substring.normalize("NFC");
		let scan = 0;
		const sliceLen = substring.length;
		for (; scan + sliceLen <= string.length; scan++) {
			const slice = string.slice(scan, scan + sliceLen);
			if (collator.value.compare(substring, slice) === 0) return true;
		}
		return false;
	};
	return {
		startsWith,
		endsWith,
		contains
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxAnchor.js
var ComboboxAnchor_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxAnchor",
	props: {
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), {
				"as-child": "",
				reference: _ctx.reference
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					"as-child": _ctx.asChild,
					as: _ctx.as
				}, _ctx.$attrs), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["as-child", "as"])]),
				_: 3
			}, 8, ["reference"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Listbox/utils.js
function valueComparator(value, currentValue, comparator) {
	if (value === void 0) return false;
	else if (Array.isArray(value)) return value.some((val) => compare(val, currentValue, comparator));
	else return compare(value, currentValue, comparator);
}
function compare(value, currentValue, comparator) {
	if (value === void 0 || currentValue === void 0) return false;
	if (typeof value === "string") return value === currentValue;
	if (typeof comparator === "function") return comparator(value, currentValue);
	if (typeof comparator === "string") return value?.[comparator] === currentValue?.[comparator];
	return isEqual(value, currentValue);
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Listbox/ListboxRoot.js
var [injectListboxRootContext, provideListboxRootContext] = createContext("ListboxRoot");
var ListboxRoot_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxRoot",
	props: {
		modelValue: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		orientation: {
			type: String,
			required: false,
			default: "vertical"
		},
		dir: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		selectionBehavior: {
			type: String,
			required: false,
			default: "toggle"
		},
		highlightOnHover: {
			type: Boolean,
			required: false
		},
		by: {
			type: [String, Function],
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"update:modelValue",
		"highlight",
		"entryFocus",
		"leave"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { multiple, highlightOnHover, orientation, disabled, selectionBehavior, dir: propDir } = toRefs(props);
		const { getItems } = useCollection({ isProvider: true });
		const { handleTypeaheadSearch } = useTypeahead();
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const kbd = useKbd();
		const dir = useDirection(propDir);
		const isFormControl = useFormControl(currentElement);
		const firstValue = ref();
		const isUserAction = ref(false);
		const focusable = ref(true);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
			passive: props.modelValue === void 0,
			deep: true
		});
		function onValueChange(val) {
			isUserAction.value = true;
			if (props.multiple) {
				const modelArray = Array.isArray(modelValue.value) ? [...modelValue.value] : [];
				const index = modelArray.findIndex((i) => compare(i, val, props.by));
				if (props.selectionBehavior === "toggle") {
					index === -1 ? modelArray.push(val) : modelArray.splice(index, 1);
					modelValue.value = modelArray;
				} else {
					modelValue.value = [val];
					firstValue.value = val;
				}
			} else if (props.selectionBehavior === "toggle") if (compare(modelValue.value, val, props.by)) modelValue.value = void 0;
			else modelValue.value = val;
			else modelValue.value = val;
			setTimeout(() => {
				isUserAction.value = false;
			}, 1);
		}
		const highlightedElement = ref(null);
		const previousElement = ref(null);
		const isVirtual = ref(false);
		const isComposing = ref(false);
		const virtualFocusHook = createEventHook();
		const virtualKeydownHook = createEventHook();
		const virtualHighlightHook = createEventHook();
		function getCollectionItem() {
			return getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "");
		}
		function changeHighlight(el, scrollIntoView = true) {
			if (!el) return;
			highlightedElement.value = el;
			if (focusable.value) highlightedElement.value.focus();
			if (scrollIntoView) highlightedElement.value.scrollIntoView({ block: "nearest" });
			emits("highlight", getItems().find((i) => i.ref === el));
		}
		function highlightItem(value) {
			if (isVirtual.value) virtualHighlightHook.trigger(value);
			else {
				const item = getItems().find((i) => compare(i.value, value, props.by));
				if (item) {
					highlightedElement.value = item.ref;
					changeHighlight(item.ref);
				}
			}
		}
		function onKeydownEnter(event) {
			if (highlightedElement.value && highlightedElement.value.isConnected) {
				event.preventDefault();
				event.stopPropagation();
				if (!isComposing.value) highlightedElement.value.click();
			}
		}
		function onKeydownTypeAhead(event) {
			if (!focusable.value) return;
			isUserAction.value = true;
			if (isVirtual.value) virtualKeydownHook.trigger(event);
			else {
				const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
				if (isMetaKey && event.key === "a" && multiple.value) {
					const collection = getItems();
					modelValue.value = [...collection.map((i) => i.value)];
					event.preventDefault();
					changeHighlight(collection[collection.length - 1].ref);
				} else if (!isMetaKey) {
					const el = handleTypeaheadSearch(event.key, getItems());
					if (el) changeHighlight(el);
				}
			}
			setTimeout(() => {
				isUserAction.value = false;
			}, 1);
		}
		function onCompositionStart() {
			isComposing.value = true;
		}
		function onCompositionEnd() {
			nextTick(() => {
				isComposing.value = false;
			});
		}
		function highlightFirstItem() {
			nextTick(() => {
				onKeydownNavigation(new KeyboardEvent("keydown", { key: "PageUp" }));
			});
		}
		function onLeave(event) {
			const el = highlightedElement.value;
			if (el?.isConnected) previousElement.value = el;
			highlightedElement.value = null;
			emits("leave", event);
		}
		function onEnter(event) {
			const entryFocusEvent = new CustomEvent("listbox.entryFocus", {
				bubbles: false,
				cancelable: true
			});
			event.currentTarget?.dispatchEvent(entryFocusEvent);
			emits("entryFocus", entryFocusEvent);
			if (entryFocusEvent.defaultPrevented) return;
			if (previousElement.value) changeHighlight(previousElement.value);
			else {
				const el = getCollectionItem()?.[0];
				changeHighlight(el);
			}
		}
		function onKeydownNavigation(event) {
			const intent = getFocusIntent(event, orientation.value, dir.value);
			if (!intent) return;
			let collection = getCollectionItem();
			if (highlightedElement.value) {
				if (intent === "last") collection.reverse();
				else if (intent === "prev" || intent === "next") {
					if (intent === "prev") collection.reverse();
					const currentIndex = collection.indexOf(highlightedElement.value);
					collection = collection.slice(currentIndex + 1);
				}
				handleMultipleReplace(event, collection[0]);
			}
			if (collection.length) {
				const index = !highlightedElement.value && intent === "prev" ? collection.length - 1 : 0;
				changeHighlight(collection[index]);
			}
			if (isVirtual.value) return virtualKeydownHook.trigger(event);
		}
		function handleMultipleReplace(event, targetEl) {
			if (isVirtual.value || props.selectionBehavior !== "replace" || !multiple.value || !Array.isArray(modelValue.value)) return;
			if ((event.altKey || event.ctrlKey || event.metaKey) && !event.shiftKey) return;
			if (event.shiftKey) {
				const collection = getItems().filter((i) => i.ref.dataset.disabled !== "");
				let lastValue = collection.find((i) => i.ref === targetEl)?.value;
				if (event.key === kbd.END) lastValue = collection[collection.length - 1].value;
				else if (event.key === kbd.HOME) lastValue = collection[0].value;
				if (!lastValue || !firstValue.value) return;
				modelValue.value = findValuesBetween(collection.map((i) => i.value), firstValue.value, lastValue);
			}
		}
		async function highlightSelected(event) {
			await nextTick();
			if (isVirtual.value) virtualFocusHook.trigger(event);
			else {
				const collection = getCollectionItem();
				const item = collection.find((i) => i.dataset.state === "checked");
				if (item) changeHighlight(item);
				else if (collection.length) changeHighlight(collection[0]);
			}
		}
		watch(modelValue, () => {
			if (!isUserAction.value) nextTick(() => {
				highlightSelected();
			});
		}, {
			immediate: true,
			deep: true
		});
		__expose({
			highlightedElement,
			highlightItem,
			highlightFirstItem,
			highlightSelected,
			getItems
		});
		provideListboxRootContext({
			modelValue,
			onValueChange,
			multiple,
			orientation,
			dir,
			disabled,
			highlightOnHover,
			highlightedElement,
			isVirtual,
			virtualFocusHook,
			virtualKeydownHook,
			virtualHighlightHook,
			by: props.by,
			firstValue,
			selectionBehavior,
			focusable,
			onLeave,
			onEnter,
			changeHighlight,
			onKeydownEnter,
			onKeydownNavigation,
			onKeydownTypeAhead,
			onCompositionStart,
			onCompositionEnd,
			highlightFirstItem
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				as: _ctx.as,
				"as-child": _ctx.asChild,
				dir: unref(dir),
				"data-disabled": unref(disabled) ? "" : void 0,
				onPointerleave: onLeave,
				onFocusout: _cache[0] || (_cache[0] = async (event) => {
					const target = event.relatedTarget || event.target;
					await nextTick();
					if (highlightedElement.value && unref(currentElement) && !unref(currentElement).contains(target)) onLeave(event);
				})
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) }), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
					key: 0,
					name: _ctx.name,
					value: unref(modelValue),
					disabled: unref(disabled),
					required: _ctx.required
				}, null, 8, [
					"name",
					"value",
					"disabled",
					"required"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"dir",
				"data-disabled"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Listbox/ListboxContent.js
var ListboxContent_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxContent",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const { CollectionSlot } = useCollection();
		const rootContext = injectListboxRootContext();
		const isClickFocus = refAutoReset(false, 10);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionSlot), null, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					role: "listbox",
					as: _ctx.as,
					"as-child": _ctx.asChild,
					tabindex: unref(rootContext).focusable.value ? unref(rootContext).highlightedElement.value ? "-1" : "0" : void 0,
					"aria-orientation": unref(rootContext).orientation.value,
					"aria-multiselectable": !!unref(rootContext).multiple.value,
					"data-orientation": unref(rootContext).orientation.value,
					onMousedown: _cache[0] || (_cache[0] = withModifiers(($event) => isClickFocus.value = true, ["left"])),
					onFocus: _cache[1] || (_cache[1] = (ev) => {
						if (unref(isClickFocus)) return;
						unref(rootContext).onEnter(ev);
					}),
					onKeydown: [
						_cache[2] || (_cache[2] = withKeys(withModifiers((event) => {
							unref(rootContext).focusable.value && unref(rootContext).onKeydownNavigation(event);
						}, ["prevent"]), [
							"down",
							"up",
							"left",
							"right",
							"home",
							"end"
						])),
						withKeys(unref(rootContext).onKeydownEnter, ["enter"]),
						unref(rootContext).onKeydownTypeAhead
					]
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"as",
					"as-child",
					"tabindex",
					"aria-orientation",
					"aria-multiselectable",
					"data-orientation",
					"onKeydown"
				])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Listbox/ListboxFilter.js
var ListboxFilter_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxFilter",
	props: {
		modelValue: {
			type: String,
			required: false
		},
		autoFocus: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "input"
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const modelValue = useVModel(props, "modelValue", __emit, {
			defaultValue: "",
			passive: props.modelValue === void 0
		});
		const rootContext = injectListboxRootContext();
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const disabled = computed(() => props.disabled || rootContext.disabled.value || false);
		const activedescendant = ref();
		watchSyncEffect(() => activedescendant.value = rootContext.highlightedElement.value?.id);
		onMounted(() => {
			rootContext.focusable.value = false;
			setTimeout(() => {
				if (props.autoFocus) currentElement.value?.focus();
			}, 1);
		});
		onUnmounted(() => {
			rootContext.focusable.value = true;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				as: _ctx.as,
				"as-child": _ctx.asChild,
				value: unref(modelValue),
				disabled: disabled.value ? "" : void 0,
				"data-disabled": disabled.value ? "" : void 0,
				"aria-disabled": disabled.value ?? void 0,
				"aria-activedescendant": activedescendant.value,
				type: "text",
				onKeydown: [withKeys(withModifiers(unref(rootContext).onKeydownNavigation, ["prevent"]), [
					"down",
					"up",
					"home",
					"end"
				]), withKeys(unref(rootContext).onKeydownEnter, ["enter"])],
				onInput: _cache[0] || (_cache[0] = (event) => {
					modelValue.value = event.target.value;
					unref(rootContext).highlightFirstItem();
				}),
				onCompositionstart: unref(rootContext).onCompositionStart,
				onCompositionend: unref(rootContext).onCompositionEnd
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"value",
				"disabled",
				"data-disabled",
				"aria-disabled",
				"aria-activedescendant",
				"onKeydown",
				"onCompositionstart",
				"onCompositionend"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Listbox/ListboxItem.js
var LISTBOX_SELECT = "listbox.select";
var [injectListboxItemContext, provideListboxItemContext] = createContext("ListboxItem");
var ListboxItem_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxItem",
	props: {
		value: {
			type: null,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const id = useId(void 0, "reka-listbox-item");
		const { CollectionItem } = useCollection();
		const { forwardRef, currentElement } = useForwardExpose();
		const rootContext = injectListboxRootContext();
		const isHighlighted = computed(() => currentElement.value === rootContext.highlightedElement.value);
		const isSelected = computed(() => valueComparator(rootContext.modelValue.value, props.value, rootContext.by));
		const disabled = computed(() => rootContext.disabled.value || props.disabled);
		async function handleSelect(ev) {
			emits("select", ev);
			if (ev?.defaultPrevented) return;
			if (!disabled.value && ev) {
				rootContext.onValueChange(props.value);
				rootContext.changeHighlight(currentElement.value);
			}
		}
		function handleSelectCustomEvent(ev) {
			handleAndDispatchCustomEvent(LISTBOX_SELECT, handleSelect, {
				originalEvent: ev,
				value: props.value
			});
		}
		provideListboxItemContext({ isSelected });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionItem), { value: _ctx.value }, {
				default: withCtx(() => [withMemo([isHighlighted.value, isSelected.value], () => createVNode(unref(Primitive), mergeProps({ id: unref(id) }, _ctx.$attrs, {
					ref: unref(forwardRef),
					role: "option",
					tabindex: unref(rootContext).focusable.value ? isHighlighted.value ? "0" : "-1" : -1,
					"aria-selected": isSelected.value,
					as: _ctx.as,
					"as-child": _ctx.asChild,
					disabled: disabled.value ? "" : void 0,
					"data-disabled": disabled.value ? "" : void 0,
					"data-highlighted": isHighlighted.value ? "" : void 0,
					"data-state": isSelected.value ? "checked" : "unchecked",
					onClick: handleSelectCustomEvent,
					onKeydown: withKeys(withModifiers(handleSelectCustomEvent, ["prevent"]), ["space"]),
					onPointermove: _cache[0] || (_cache[0] = (event) => {
						if (unref(rootContext).highlightedElement.value === unref(currentElement)) return;
						if (unref(rootContext).highlightOnHover.value) unref(rootContext).changeHighlight(unref(currentElement), false);
						else unref(rootContext).focusable.value || unref(rootContext).changeHighlight(unref(currentElement), false);
					})
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"id",
					"tabindex",
					"aria-selected",
					"as",
					"as-child",
					"disabled",
					"data-disabled",
					"data-highlighted",
					"data-state",
					"onKeydown"
				]), _cache, 1)]),
				_: 3
			}, 8, ["value"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxRoot.js
var [injectComboboxRootContext, provideComboboxRootContext] = createContext("ComboboxRoot");
var ComboboxRoot_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxRoot",
	props: {
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		resetSearchTermOnBlur: {
			type: Boolean,
			required: false,
			default: true
		},
		resetSearchTermOnSelect: {
			type: Boolean,
			required: false,
			default: true
		},
		openOnFocus: {
			type: Boolean,
			required: false,
			default: false
		},
		openOnClick: {
			type: Boolean,
			required: false,
			default: false
		},
		ignoreFilter: {
			type: Boolean,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		highlightOnHover: {
			type: Boolean,
			required: false
		},
		by: {
			type: [String, Function],
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"update:modelValue",
		"highlight",
		"update:open"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
		const { multiple, disabled, ignoreFilter, resetSearchTermOnSelect, openOnFocus, openOnClick, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
			passive: props.modelValue === void 0,
			deep: true
		});
		const open = useVModel(props, "open", emits, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		async function onOpenChange(val) {
			open.value = val;
			filterSearch.value = "";
			if (val) {
				await nextTick();
				primitiveElement.value?.highlightSelected();
				isUserInputted.value = true;
			} else isUserInputted.value = false;
			inputElement.value?.focus();
			setTimeout(() => {
				if (!val && props.resetSearchTermOnBlur) resetSearchTerm.trigger();
			}, 1);
		}
		const resetSearchTerm = createEventHook();
		const isUserInputted = ref(false);
		const isVirtual = ref(false);
		const inputElement = ref();
		const triggerElement = ref();
		const highlightedElement = computed(() => primitiveElement.value?.highlightedElement ?? void 0);
		const allItems = ref(/* @__PURE__ */ new Map());
		const allGroups = ref(/* @__PURE__ */ new Map());
		const { contains } = useFilter({ sensitivity: "base" });
		const filterSearch = ref("");
		const filterState = computed((oldValue) => {
			if (!filterSearch.value || props.ignoreFilter || isVirtual.value) return {
				count: allItems.value.size,
				items: oldValue?.items ?? /* @__PURE__ */ new Map(),
				groups: oldValue?.groups ?? new Set(allGroups.value.keys())
			};
			let itemCount = 0;
			const filteredItems = /* @__PURE__ */ new Map();
			const filteredGroups = /* @__PURE__ */ new Set();
			for (const [id, value] of allItems.value) {
				const score = contains(value, filterSearch.value);
				filteredItems.set(id, score ? 1 : 0);
				if (score) itemCount++;
			}
			for (const [groupId, group] of allGroups.value) for (const itemId of group) if (filteredItems.get(itemId) > 0) {
				filteredGroups.add(groupId);
				break;
			}
			return {
				count: itemCount,
				items: filteredItems,
				groups: filteredGroups
			};
		});
		const inst = getCurrentInstance();
		onMounted(() => {
			if (inst?.exposed) {
				inst.exposed.highlightItem = primitiveElement.value?.highlightItem;
				inst.exposed.highlightFirstItem = primitiveElement.value?.highlightFirstItem;
				inst.exposed.highlightSelected = primitiveElement.value?.highlightSelected;
			}
		});
		__expose({
			filtered: filterState,
			highlightedElement,
			highlightItem: primitiveElement.value?.highlightItem,
			highlightFirstItem: primitiveElement.value?.highlightFirstItem,
			highlightSelected: primitiveElement.value?.highlightSelected
		});
		provideComboboxRootContext({
			modelValue,
			multiple,
			disabled,
			open,
			onOpenChange,
			contentId: "",
			isUserInputted,
			isVirtual,
			inputElement,
			highlightedElement,
			onInputElementChange: (val) => inputElement.value = val,
			triggerElement,
			onTriggerElementChange: (val) => triggerElement.value = val,
			parentElement,
			resetSearchTermOnSelect,
			onResetSearchTerm: resetSearchTerm.on,
			allItems,
			allGroups,
			filterSearch,
			filterState,
			ignoreFilter,
			openOnFocus,
			openOnClick
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [createVNode(unref(ListboxRoot_default), mergeProps({
					ref_key: "primitiveElement",
					ref: primitiveElement
				}, _ctx.$attrs, {
					modelValue: unref(modelValue),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
					style: { pointerEvents: unref(open) ? "auto" : void 0 },
					as: _ctx.as,
					"as-child": _ctx.asChild,
					dir: unref(dir),
					multiple: unref(multiple),
					name: _ctx.name,
					required: _ctx.required,
					disabled: unref(disabled),
					"highlight-on-hover": true,
					by: props.by,
					onHighlight: _cache[1] || (_cache[1] = ($event) => emits("highlight", $event))
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
						open: unref(open),
						modelValue: unref(modelValue)
					})]),
					_: 3
				}, 16, [
					"modelValue",
					"style",
					"as",
					"as-child",
					"dir",
					"multiple",
					"name",
					"required",
					"disabled",
					"by"
				])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxContentImpl.js
var [injectComboboxContentContext, provideComboboxContentContext] = createContext("ComboboxContent");
var ComboboxContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxContentImpl",
	props: {
		position: {
			type: String,
			required: false,
			default: "inline"
		},
		bodyLock: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { position } = toRefs(props);
		const rootContext = injectComboboxRootContext();
		const { forwardRef, currentElement } = useForwardExpose();
		useBodyScrollLock(props.bodyLock);
		useHideOthers(rootContext.parentElement);
		const forwardedProps = useForwardProps(computed(() => {
			if (props.position === "popper") return props;
			else return {};
		}).value);
		const popperStyle = {
			"boxSizing": "border-box",
			"--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
			"--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
			"--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
			"--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
			"--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
		};
		provideComboboxContentContext({ position });
		const isInputWithinContent = ref(false);
		onMounted(() => {
			if (rootContext.inputElement.value) {
				isInputWithinContent.value = currentElement.value.contains(rootContext.inputElement.value);
				if (isInputWithinContent.value) rootContext.inputElement.value.focus();
			}
		});
		onUnmounted(() => {
			if (isInputWithinContent.value) rootContext.triggerElement.value?.focus();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ListboxContent_default), { "as-child": "" }, {
				default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
					"as-child": "",
					"disable-outside-pointer-events": _ctx.disableOutsidePointerEvents,
					onDismiss: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false)),
					onFocusOutside: _cache[1] || (_cache[1] = (ev) => {
						if (unref(rootContext).parentElement.value?.contains(ev.target)) ev.preventDefault();
						emits("focusOutside", ev);
					}),
					onInteractOutside: _cache[2] || (_cache[2] = ($event) => emits("interactOutside", $event)),
					onEscapeKeyDown: _cache[3] || (_cache[3] = ($event) => emits("escapeKeyDown", $event)),
					onPointerDownOutside: _cache[4] || (_cache[4] = (ev) => {
						if (unref(rootContext).parentElement.value?.contains(ev.target)) ev.preventDefault();
						emits("pointerDownOutside", ev);
					})
				}, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(position) === "popper" ? unref(PopperContent_default) : unref(Primitive)), mergeProps({
						..._ctx.$attrs,
						...unref(forwardedProps)
					}, {
						id: unref(rootContext).contentId,
						ref: unref(forwardRef),
						"data-state": unref(rootContext).open.value ? "open" : "closed",
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...unref(position) === "popper" ? popperStyle : {}
						}
					}), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					}, 16, [
						"id",
						"data-state",
						"style"
					]))]),
					_: 3
				}, 8, ["disable-outside-pointer-events"])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxContent.js
var ComboboxContent_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		position: {
			type: String,
			required: false
		},
		bodyLock: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		const { forwardRef } = useForwardExpose();
		const rootContext = injectComboboxRootContext();
		rootContext.contentId ||= useId(void 0, "reka-combobox-content");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
				default: withCtx(() => [createVNode(ComboboxContentImpl_default, mergeProps({
					...unref(forwarded),
					..._ctx.$attrs
				}, { ref: unref(forwardRef) }), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16)]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxEmpty.js
var ComboboxEmpty_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxEmpty",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectComboboxRootContext();
		const isRender = computed(() => rootContext.ignoreFilter.value ? rootContext.allItems.value.size === 0 : rootContext.filterState.value.count === 0);
		return (_ctx, _cache) => {
			return isRender.value ? (openBlock(), createBlock(unref(Primitive), normalizeProps(mergeProps({ key: 0 }, props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[0] || (_cache[0] = createTextVNode("No options"))])]),
				_: 3
			}, 16)) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxGroup.js
var [injectComboboxGroupContext, provideComboboxGroupContext] = createContext("ComboboxGroup");
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxInput.js
var ComboboxInput_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxInput",
	props: {
		displayValue: {
			type: Function,
			required: false
		},
		modelValue: {
			type: String,
			required: false
		},
		autoFocus: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "input"
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectComboboxRootContext();
		const listboxContext = injectListboxRootContext();
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const modelValue = useVModel(props, "modelValue", emits, { passive: props.modelValue === void 0 });
		onMounted(() => {
			if (currentElement.value) rootContext.onInputElementChange(currentElement.value);
		});
		function handleKeyDown(ev) {
			if (!rootContext.open.value) rootContext.onOpenChange(true);
		}
		function handleInput(event) {
			const target = event.target;
			if (!rootContext.open.value) {
				rootContext.onOpenChange(true);
				nextTick(() => {
					if (target.value) {
						rootContext.filterSearch.value = target.value;
						listboxContext.highlightFirstItem();
					}
				});
			} else rootContext.filterSearch.value = target.value;
		}
		function handleFocus() {
			if (rootContext.openOnFocus.value && !rootContext.open.value) rootContext.onOpenChange(true);
		}
		function handleClick() {
			if (rootContext.openOnClick.value && !rootContext.open.value) rootContext.onOpenChange(true);
		}
		function resetSearchTerm() {
			const rootModelValue = rootContext.modelValue.value;
			if (props.displayValue) modelValue.value = props.displayValue(rootModelValue);
			else if (!rootContext.multiple.value && rootModelValue && !Array.isArray(rootModelValue)) if (typeof rootModelValue !== "object") modelValue.value = rootModelValue.toString();
			else modelValue.value = "";
			else modelValue.value = "";
			nextTick(() => {
				modelValue.value = modelValue.value;
			});
		}
		rootContext.onResetSearchTerm(() => {
			resetSearchTerm();
		});
		watch(rootContext.modelValue, async () => {
			if (!rootContext.isUserInputted.value && rootContext.resetSearchTermOnSelect.value) resetSearchTerm();
		}, {
			immediate: true,
			deep: true
		});
		watch(rootContext.filterState, () => {
			if (!rootContext.isVirtual.value) listboxContext.highlightFirstItem();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ListboxFilter_default), {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				modelValue: unref(modelValue),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
				as: _ctx.as,
				"as-child": _ctx.asChild,
				"auto-focus": _ctx.autoFocus,
				disabled: _ctx.disabled,
				"aria-expanded": unref(rootContext).open.value,
				"aria-controls": unref(rootContext).contentId,
				"aria-autocomplete": "list",
				role: "combobox",
				autocomplete: "off",
				onClick: handleClick,
				onInput: handleInput,
				onKeydown: withKeys(withModifiers(handleKeyDown, ["prevent"]), ["down", "up"]),
				onFocus: handleFocus
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"modelValue",
				"as",
				"as-child",
				"auto-focus",
				"disabled",
				"aria-expanded",
				"aria-controls",
				"onKeydown"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxItem.js
var ComboboxItem_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxItem",
	props: {
		textValue: {
			type: String,
			required: false
		},
		value: {
			type: null,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const id = useId(void 0, "reka-combobox-item");
		const rootContext = injectComboboxRootContext();
		const groupContext = injectComboboxGroupContext(null);
		const { primitiveElement, currentElement } = usePrimitiveElement();
		if (props.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
		const isRender = computed(() => {
			if (rootContext.isVirtual.value || rootContext.ignoreFilter.value || !rootContext.filterSearch.value) return true;
			else {
				const filteredCurrentItem = rootContext.filterState.value.items.get(id);
				if (filteredCurrentItem === void 0) return true;
				return filteredCurrentItem > 0;
			}
		});
		onMounted(() => {
			rootContext.allItems.value.set(id, props.textValue || currentElement.value.textContent || currentElement.value.innerText);
			const groupId = groupContext?.id;
			if (groupId) if (!rootContext.allGroups.value.has(groupId)) rootContext.allGroups.value.set(groupId, new Set([id]));
			else rootContext.allGroups.value.get(groupId)?.add(id);
		});
		onUnmounted(() => {
			rootContext.allItems.value.delete(id);
		});
		return (_ctx, _cache) => {
			return isRender.value ? (openBlock(), createBlock(unref(ListboxItem_default), mergeProps({ key: 0 }, props, {
				id: unref(id),
				ref_key: "primitiveElement",
				ref: primitiveElement,
				disabled: unref(rootContext).disabled.value || _ctx.disabled,
				onSelect: _cache[0] || (_cache[0] = (event) => {
					emits("select", event);
					if (event.defaultPrevented) return;
					if (!unref(rootContext).multiple.value && !_ctx.disabled && !unref(rootContext).disabled.value) {
						event.preventDefault();
						unref(rootContext).onOpenChange(false);
						unref(rootContext).modelValue.value = props.value;
					}
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.value), 1)])]),
				_: 3
			}, 16, ["id", "disabled"])) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxPortal.js
var ComboboxPortal_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxPortal",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Combobox/ComboboxTrigger.js
var ComboboxTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef, currentElement } = useForwardExpose();
		const rootContext = injectComboboxRootContext();
		const disabled = computed(() => props.disabled || rootContext.disabled.value || false);
		onMounted(() => {
			if (currentElement.value) rootContext.onTriggerElementChange(currentElement.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				ref: unref(forwardRef),
				type: _ctx.as === "button" ? "button" : void 0,
				tabindex: "-1",
				"aria-label": "Show popup",
				"aria-haspopup": "listbox",
				"aria-expanded": unref(rootContext).open.value,
				"aria-controls": unref(rootContext).contentId,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				disabled: disabled.value,
				"data-disabled": disabled.value ? "" : void 0,
				"aria-disabled": disabled.value ?? void 0,
				onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(!unref(rootContext).open.value))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"type",
				"aria-expanded",
				"aria-controls",
				"data-state",
				"disabled",
				"data-disabled",
				"aria-disabled"
			]);
		};
	}
});
//#endregion
//#region src/experiments/instanceAiProactiveAgent/useInstanceAiProactiveAgentExperiment.ts
function useInstanceAiProactiveAgentExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT.name) === INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiProactiveAgent/components/InstanceAiProactiveStarterMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = ["aria-label"];
var STARTER_DELAY_MS = 800;
var TYPING_DURATION_MS = 600;
var InstanceAiProactiveStarterMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiProactiveStarterMessage",
	setup(__props) {
		const i18n = useI18n();
		const stage = ref("waiting");
		const timers = [];
		onMounted(() => {
			timers.push(setTimeout(() => {
				stage.value = "typing";
			}, STARTER_DELAY_MS));
			timers.push(setTimeout(() => {
				stage.value = "message";
			}, STARTER_DELAY_MS + TYPING_DURATION_MS));
		});
		onBeforeUnmount(() => {
			for (const timer of timers) clearTimeout(timer);
		});
		return (_ctx, _cache) => {
			return stage.value !== "waiting" ? (openBlock(), createElementBlock("article", {
				key: 0,
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-proactive-starter"
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.avatar),
				"aria-hidden": "true"
			}, [createVNode(unref(AskAssistantIcon_default), {
				size: "large",
				theme: "blank"
			})], 2), createBaseVNode("section", {
				class: normalizeClass(_ctx.$style.bubble),
				"aria-live": "polite"
			}, [stage.value === "typing" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.typing),
				"aria-label": unref(i18n).baseText("experiments.instanceAiProactiveAgent.typingLabel"),
				role: "status",
				"data-test-id": "instance-ai-proactive-typing"
			}, [
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.typingDot) }, null, 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.typingDot) }, null, 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.typingDot) }, null, 2)
			], 10, _hoisted_1$9)) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				tag: "p",
				size: "large",
				class: normalizeClass(_ctx.$style.message),
				"data-test-id": "instance-ai-proactive-message"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.instanceAiProactiveAgent.message")), 1)]),
				_: 1
			}, 8, ["class"]))], 2)], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/experiments/instanceAiProactiveAgent/components/InstanceAiProactiveStarterMessage.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_1skpw_341";
var fadeInUp$2 = "_fadeInUp_1skpw_1";
var avatar$2 = "_avatar_1skpw_361";
var bubble$1 = "_bubble_1skpw_372";
var message$1 = "_message_1skpw_383";
var typing = "_typing_1skpw_401";
var typingDot = "_typingDot_1skpw_408";
var shimmer$2 = "_shimmer_1skpw_1";
var spin$2 = "_spin_1skpw_1";
var opacityPulse$2 = "_opacityPulse_1skpw_1";
var popoverIn$2 = "_popoverIn_1skpw_1";
var fadeIn$3 = "_fadeIn_1skpw_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1skpw_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1skpw_1";
var pulseGlow$2 = "_pulseGlow_1skpw_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1skpw_1";
var fade$2 = "_fade_1skpw_1";
var fadeInDown$2 = "_fadeInDown_1skpw_1";
var fadeInLeft$2 = "_fadeInLeft_1skpw_1";
var fadeInRight$2 = "_fadeInRight_1skpw_1";
var fadeOut$2 = "_fadeOut_1skpw_1";
var fadeOutDown$2 = "_fadeOutDown_1skpw_1";
var fadeOutUp$2 = "_fadeOutUp_1skpw_1";
var fadeOutLeft$2 = "_fadeOutLeft_1skpw_1";
var fadeOutRight$2 = "_fadeOutRight_1skpw_1";
var ping$2 = "_ping_1skpw_1";
var blinkBackground$2 = "_blinkBackground_1skpw_1";
var typingBlink$2 = "_typingBlink_1skpw_1";
var InstanceAiProactiveStarterMessage_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	fadeInUp: fadeInUp$2,
	avatar: avatar$2,
	bubble: bubble$1,
	message: message$1,
	typing,
	typingDot,
	"typing-dot": "_typing-dot_1skpw_1",
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1skpw_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var InstanceAiProactiveStarterMessage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiProactiveStarterMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiProactiveStarterMessage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiPromptSuggestionsV2/useInstanceAiPromptSuggestionsV2Experiment.ts
function useInstanceAiPromptSuggestionsV2Experiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_PROMPT_SUGGESTIONS_V2_EXPERIMENT.name) === INSTANCE_AI_PROMPT_SUGGESTIONS_V2_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiPromptSuggestionsV2/suggestions.ts
var INSTANCE_AI_PROMPT_SUGGESTIONS_V2 = [
	{
		type: "prompt",
		id: "process-invoices",
		icon: "circle-dollar-sign",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.processInvoices.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.processInvoices.prompt"
	},
	{
		type: "prompt",
		id: "qualify-inbound-leads",
		icon: "badge-check",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.qualifyInboundLeads.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.qualifyInboundLeads.prompt"
	},
	{
		type: "prompt",
		id: "whatsapp-support-agent",
		icon: "message-circle",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.whatsappSupportAgent.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.whatsappSupportAgent.prompt"
	},
	{
		type: "prompt",
		id: "schedule-social-posts",
		icon: "calendar",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.scheduleSocialPosts.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.scheduleSocialPosts.prompt"
	},
	{
		type: "prompt",
		id: "analyze-exit-interviews",
		icon: "users",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.analyzeExitInterviews.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.analyzeExitInterviews.prompt"
	},
	{
		type: "prompt",
		id: "post-to-linkedin",
		icon: "send",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.postToLinkedIn.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.postToLinkedIn.prompt"
	},
	{
		type: "prompt",
		id: "detect-at-risk-accounts",
		icon: "shield-user",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.detectAtRiskAccounts.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.detectAtRiskAccounts.prompt"
	},
	{
		type: "prompt",
		id: "automate-order-flow",
		icon: "package-open",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.automateOrderFlow.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.automateOrderFlow.prompt"
	},
	{
		type: "prompt",
		id: "recover-abandoned-carts",
		icon: "archive-restore",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.recoverAbandonedCarts.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.recoverAbandonedCarts.prompt"
	},
	{
		type: "prompt",
		id: "monitor-market-news",
		icon: "rss",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.monitorMarketNews.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.monitorMarketNews.prompt"
	},
	{
		type: "prompt",
		id: "onboard-new-hires",
		icon: "user-check",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.onboardNewHires.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.onboardNewHires.prompt"
	},
	{
		type: "prompt",
		id: "extract-data-from-emails",
		icon: "paperclip",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.extractDataFromEmails.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.extractDataFromEmails.prompt"
	}
];
//#endregion
//#region src/experiments/instanceAiPromptSuggestionsV2/components/InstanceAiPromptSuggestionsV2.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseenter",
	"onFocus"
];
var _hoisted_2$4 = ["aria-label", "disabled"];
var VISIBLE_SUGGESTION_COUNT = 4;
var PREVIEW_HOVER_DELAY_MS$1 = 300;
var SUGGESTION_ENTER_STAGGER_MS$1 = 50;
var SUGGESTION_LEAVE_STAGGER_MS = 35;
var InstanceAiPromptSuggestionsV2_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPromptSuggestionsV2",
	props: {
		suggestions: {},
		disabled: { type: Boolean }
	},
	emits: [
		"preview-change",
		"insert-suggestion",
		"cycle-suggestions"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const startIndex = ref(0);
		const cycleCount = ref(0);
		let hoverTimer = null;
		const canCycleSuggestions = computed(() => props.suggestions.length > VISIBLE_SUGGESTION_COUNT);
		function getVisibleSuggestionsFromIndex(index) {
			const nextSuggestions = [];
			for (let offset = 0; offset < VISIBLE_SUGGESTION_COUNT; offset++) {
				const suggestionIndex = (index + offset) % props.suggestions.length;
				const suggestion = props.suggestions[suggestionIndex];
				if (suggestion) nextSuggestions.push(suggestion);
			}
			return nextSuggestions;
		}
		const visibleSuggestions = computed(() => {
			if (!canCycleSuggestions.value) return props.suggestions;
			return getVisibleSuggestionsFromIndex(startIndex.value);
		});
		const visibleSuggestionButtonCount = computed(() => visibleSuggestions.value.length + (canCycleSuggestions.value ? 1 : 0));
		function getSuggestionButtonStyle(index) {
			const reverseIndex = visibleSuggestionButtonCount.value - index - 1;
			return {
				"--suggestion-index": String(index),
				"--suggestion-count": String(visibleSuggestionButtonCount.value),
				"--suggestion-enter-delay": `${index * SUGGESTION_ENTER_STAGGER_MS$1}ms`,
				"--suggestion-leave-delay": `${reverseIndex * SUGGESTION_LEAVE_STAGGER_MS}ms`
			};
		}
		function clearHoverTimer() {
			if (!hoverTimer) return;
			clearTimeout(hoverTimer);
			hoverTimer = null;
		}
		function setPreview(promptKey) {
			emit("preview-change", promptKey);
		}
		function getSuggestionPosition(suggestionId) {
			const index = props.suggestions.findIndex((suggestion) => suggestion.id === suggestionId);
			return index >= 0 ? index + 1 : 0;
		}
		function handleSuggestionEnter(suggestion) {
			if (props.disabled) return;
			clearHoverTimer();
			hoverTimer = setTimeout(() => {
				hoverTimer = null;
				setPreview(suggestion.promptKey);
			}, PREVIEW_HOVER_DELAY_MS$1);
		}
		function clearPreview() {
			clearHoverTimer();
			setPreview(null);
		}
		function handleSuggestionFocus(suggestion) {
			if (props.disabled) return;
			clearHoverTimer();
			setPreview(suggestion.promptKey);
		}
		function handleSuggestionClick(suggestion) {
			if (props.disabled) return;
			clearPreview();
			emit("insert-suggestion", {
				promptKey: suggestion.promptKey,
				suggestionId: suggestion.id,
				suggestionKind: "prompt",
				position: getSuggestionPosition(suggestion.id)
			});
		}
		function cycleSuggestions() {
			if (props.disabled || !canCycleSuggestions.value) return;
			clearPreview();
			const nextStartIndex = (startIndex.value + VISIBLE_SUGGESTION_COUNT) % props.suggestions.length;
			const nextVisibleSuggestions = getVisibleSuggestionsFromIndex(nextStartIndex);
			cycleCount.value += 1;
			startIndex.value = nextStartIndex;
			emit("cycle-suggestions", {
				visibleSuggestionIds: nextVisibleSuggestions.map((suggestion) => suggestion.id),
				cycleCount: cycleCount.value
			});
		}
		onUnmounted(clearHoverTimer);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.suggestions),
				"data-test-id": "instance-ai-prompt-suggestions-v2"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestionRow) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleSuggestions.value, (suggestion, index) => {
				return openBlock(), createElementBlock("button", {
					key: suggestion.id,
					type: "button",
					class: normalizeClass(_ctx.$style.suggestionButton),
					style: normalizeStyle(getSuggestionButtonStyle(index)),
					"data-test-id": `instance-ai-suggestion-${suggestion.id}`,
					disabled: props.disabled,
					onClick: ($event) => handleSuggestionClick(suggestion),
					onMouseenter: ($event) => handleSuggestionEnter(suggestion),
					onMouseleave: clearPreview,
					onFocus: ($event) => handleSuggestionFocus(suggestion),
					onBlur: clearPreview
				}, [createVNode(unref(N8nIcon_default), {
					icon: suggestion.icon,
					size: 12,
					class: normalizeClass(_ctx.$style.suggestionIcon)
				}, null, 8, ["icon", "class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(suggestion.labelKey)), 1)], 46, _hoisted_1$8);
			}), 128)), canCycleSuggestions.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: unref(i18n).baseText("experiments.instanceAiPromptSuggestionsV2.nextSuggestions"),
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("button", {
					type: "button",
					class: normalizeClass([_ctx.$style.suggestionButton, _ctx.$style.cycleButton]),
					style: normalizeStyle(getSuggestionButtonStyle(visibleSuggestions.value.length)),
					"data-test-id": "instance-ai-suggestions-cycle",
					"aria-label": unref(i18n).baseText("experiments.instanceAiPromptSuggestionsV2.nextSuggestions"),
					disabled: props.disabled,
					onClick: cycleSuggestions
				}, [createVNode(unref(N8nIcon_default), {
					icon: "refresh-cw",
					size: 12
				})], 14, _hoisted_2$4)]),
				_: 1
			}, 8, ["content"])) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var InstanceAiPromptSuggestionsV2_vue_vue_type_style_index_0_lang_module_default = {
	suggestions: "_suggestions_1dqnq_135",
	suggestionRow: "_suggestionRow_1dqnq_139",
	suggestionButton: "_suggestionButton_1dqnq_147",
	suggestionSlideIn: "_suggestionSlideIn_1dqnq_1",
	suggestionIcon: "_suggestionIcon_1dqnq_182",
	cycleButton: "_cycleButton_1dqnq_191",
	suggestionSlideOut: "_suggestionSlideOut_1dqnq_1"
};
var InstanceAiPromptSuggestionsV2_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPromptSuggestionsV2_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPromptSuggestionsV2_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiPersonalizedPromptSuggestions/components/InstanceAiPersonalizedPromptSuggestions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = ["disabled"];
var _hoisted_2$3 = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseenter",
	"onFocus"
];
var SUGGESTION_ENTER_STAGGER_MS = 45;
var InstanceAiPersonalizedPromptSuggestions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPersonalizedPromptSuggestions",
	props: {
		suggestions: {},
		fallbackSuggestions: {},
		format: {},
		disabled: { type: Boolean },
		showSeeMore: { type: Boolean }
	},
	emits: [
		"preview-change",
		"insert-suggestion",
		"cycle-suggestions"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const isShowingFallback = ref(false);
		const cycleCount = ref(0);
		const visibleSuggestions = computed(() => isShowingFallback.value ? props.fallbackSuggestions : props.suggestions);
		const visibleSuggestionSource = computed(() => isShowingFallback.value ? "v2_top_used_fallback" : "matrix");
		function getSuggestionStyle(index) {
			return { "--suggestion-enter-delay": `${index * SUGGESTION_ENTER_STAGGER_MS}ms` };
		}
		function setPreview(builderPrompt) {
			emit("preview-change", builderPrompt ? { prompt: builderPrompt } : null);
		}
		function clearPreview() {
			setPreview(null);
		}
		function previewSuggestion(suggestion) {
			if (props.disabled) return;
			setPreview(suggestion.builderPrompt);
		}
		function handleSuggestionClick(suggestion) {
			if (props.disabled) return;
			clearPreview();
			const position = visibleSuggestions.value.findIndex((visibleSuggestion) => visibleSuggestion.id === suggestion.id) + 1;
			emit("insert-suggestion", {
				prompt: suggestion.builderPrompt,
				suggestionId: suggestion.id,
				suggestionKind: "prompt",
				position,
				telemetryPayload: isShowingFallback.value ? { suggestion_source: "v2_top_used_fallback" } : void 0
			});
		}
		function toggleSuggestions() {
			if (props.disabled || !props.showSeeMore) return;
			clearPreview();
			isShowingFallback.value = !isShowingFallback.value;
			cycleCount.value += 1;
			emit("cycle-suggestions", {
				visibleSuggestionIds: visibleSuggestions.value.map((suggestion) => suggestion.id),
				cycleCount: cycleCount.value,
				telemetryPayload: isShowingFallback.value ? { suggestion_source: visibleSuggestionSource.value } : void 0
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.suggestions),
				"data-test-id": "instance-ai-personalized-prompt-suggestions"
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.header, props.format === "cards" ? _ctx.$style.cardHeader : _ctx.$style.compactHeader]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headingRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headingCopy) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.heading) }, toDisplayString(unref(i18n).baseText("experiments.instanceAiPersonalizedPromptSuggestions.heading")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.helper) }, toDisplayString(unref(i18n).baseText("experiments.instanceAiPersonalizedPromptSuggestions.helper")), 3)], 2), __props.showSeeMore ? (openBlock(), createElementBlock("button", {
				key: 0,
				type: "button",
				class: normalizeClass(_ctx.$style.seeMoreButton),
				"data-test-id": "instance-ai-personalized-see-more",
				disabled: props.disabled,
				onClick: toggleSuggestions
			}, toDisplayString(unref(i18n).baseText("experiments.instanceAiPersonalizedPromptSuggestions.seeMore")), 11, _hoisted_1$7)) : createCommentVNode("", true)], 2)], 2), createBaseVNode("div", { class: normalizeClass([_ctx.$style.suggestionList, props.format === "cards" ? _ctx.$style.cardList : _ctx.$style.compactList]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleSuggestions.value, (suggestion, index) => {
				return openBlock(), createElementBlock("button", {
					key: suggestion.id,
					type: "button",
					class: normalizeClass([_ctx.$style.suggestionButton, props.format === "cards" ? _ctx.$style.cardButton : _ctx.$style.listButton]),
					style: normalizeStyle(getSuggestionStyle(index)),
					"data-test-id": `instance-ai-personalized-suggestion-${suggestion.id}`,
					disabled: props.disabled,
					onClick: ($event) => handleSuggestionClick(suggestion),
					onMouseenter: ($event) => previewSuggestion(suggestion),
					onMouseleave: clearPreview,
					onFocus: ($event) => previewSuggestion(suggestion),
					onBlur: clearPreview
				}, [props.format === "list" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "sparkles",
					size: "xlarge",
					class: normalizeClass(_ctx.$style.listIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass(_ctx.$style.textGroup) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.suggestionTitle) }, toDisplayString(suggestion.shortTitle), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.suggestionDescription) }, toDisplayString(suggestion.description), 3)], 2)], 46, _hoisted_2$3);
			}), 128))], 2)], 2);
		};
	}
});
//#endregion
//#region src/experiments/instanceAiPersonalizedPromptSuggestions/components/InstanceAiPersonalizedPromptSuggestions.vue?vue&type=style&index=0&lang.module.scss
var suggestions$1 = "_suggestions_1dvia_341";
var header$2 = "_header_1dvia_345";
var compactHeader = "_compactHeader_1dvia_353";
var cardHeader = "_cardHeader_1dvia_357";
var headingRow = "_headingRow_1dvia_362";
var headingCopy = "_headingCopy_1dvia_370";
var heading = "_heading_1dvia_362";
var helper = "_helper_1dvia_385";
var suggestionList = "_suggestionList_1dvia_392";
var cardList = "_cardList_1dvia_398";
var compactList = "_compactList_1dvia_404";
var suggestionButton$1 = "_suggestionButton_1dvia_409";
var fadeInUp$1 = "_fadeInUp_1dvia_1";
var textGroup = "_textGroup_1dvia_441";
var suggestionTitle = "_suggestionTitle_1dvia_449";
var suggestionDescription = "_suggestionDescription_1dvia_459";
var cardButton = "_cardButton_1dvia_471";
var listIcon = "_listIcon_1dvia_496";
var listButton = "_listButton_1dvia_502";
var seeMoreButton = "_seeMoreButton_1dvia_526";
var shimmer$1 = "_shimmer_1dvia_1";
var spin$1 = "_spin_1dvia_1";
var opacityPulse$1 = "_opacityPulse_1dvia_1";
var popoverIn$1 = "_popoverIn_1dvia_1";
var fadeIn$2 = "_fadeIn_1dvia_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1dvia_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1dvia_1";
var pulseGlow$1 = "_pulseGlow_1dvia_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1dvia_1";
var fade$1 = "_fade_1dvia_1";
var fadeInDown$1 = "_fadeInDown_1dvia_1";
var fadeInLeft$1 = "_fadeInLeft_1dvia_1";
var fadeInRight$1 = "_fadeInRight_1dvia_1";
var fadeOut$1 = "_fadeOut_1dvia_1";
var fadeOutDown$1 = "_fadeOutDown_1dvia_1";
var fadeOutUp$1 = "_fadeOutUp_1dvia_1";
var fadeOutLeft$1 = "_fadeOutLeft_1dvia_1";
var fadeOutRight$1 = "_fadeOutRight_1dvia_1";
var ping$1 = "_ping_1dvia_1";
var blinkBackground$1 = "_blinkBackground_1dvia_1";
var typingBlink$1 = "_typingBlink_1dvia_1";
var InstanceAiPersonalizedPromptSuggestions_vue_vue_type_style_index_0_lang_module_default = {
	suggestions: suggestions$1,
	header: header$2,
	compactHeader,
	cardHeader,
	headingRow,
	headingCopy,
	heading,
	helper,
	suggestionList,
	cardList,
	compactList,
	suggestionButton: suggestionButton$1,
	fadeInUp: fadeInUp$1,
	textGroup,
	suggestionTitle,
	suggestionDescription,
	cardButton,
	listIcon,
	listButton,
	seeMoreButton,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1dvia_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var InstanceAiPersonalizedPromptSuggestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPersonalizedPromptSuggestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPersonalizedPromptSuggestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiPersonalizedPromptSuggestions/useInstanceAiPersonalizedPromptSuggestionsExperiment.ts
function useInstanceAiPersonalizedPromptSuggestionsExperiment() {
	const posthogStore = usePostHog();
	const currentVariant = computed(() => posthogStore.getVariant(INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPERIMENT.name));
	const suggestionFormat = computed(() => {
		if (currentVariant.value === INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPERIMENT.variantCards) return "cards";
		if (currentVariant.value === INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPERIMENT.variantList) return "list";
		return null;
	});
	return {
		currentVariant,
		suggestionFormat,
		isTreatmentVariant: computed(() => suggestionFormat.value !== null)
	};
}
//#endregion
//#region src/experiments/instanceAiPersonalizedPromptSuggestions/fallbackSuggestions.ts
var INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_VERSION = "v4-personalized";
var TOP_USED_V2_FALLBACK_PROMPT_IDS = [
	"whatsapp-support-agent",
	"process-invoices",
	"schedule-social-posts",
	"qualify-inbound-leads"
];
var TOP_USED_V2_FALLBACK_DESCRIPTION_KEYS = {
	"whatsapp-support-agent": "experiments.instanceAiPersonalizedPromptSuggestions.fallbackSuggestions.whatsappSupportAgent.description",
	"process-invoices": "experiments.instanceAiPersonalizedPromptSuggestions.fallbackSuggestions.processInvoices.description",
	"schedule-social-posts": "experiments.instanceAiPersonalizedPromptSuggestions.fallbackSuggestions.scheduleSocialPosts.description",
	"qualify-inbound-leads": "experiments.instanceAiPersonalizedPromptSuggestions.fallbackSuggestions.qualifyInboundLeads.description"
};
function getTopUsedV2FallbackSuggestions(baseText) {
	const suggestionsById = new Map(INSTANCE_AI_PROMPT_SUGGESTIONS_V2.map((suggestion) => [suggestion.id, suggestion]));
	return TOP_USED_V2_FALLBACK_PROMPT_IDS.map((id) => {
		const suggestion = suggestionsById.get(id);
		if (!suggestion) throw new Error(`Missing v2 fallback prompt suggestion: ${id}`);
		const builderPrompt = baseText(suggestion.promptKey);
		return {
			id: suggestion.id,
			shortTitle: baseText(suggestion.labelKey),
			description: baseText(TOP_USED_V2_FALLBACK_DESCRIPTION_KEYS[id]),
			builderPrompt
		};
	});
}
//#endregion
//#region src/experiments/instanceAiPersonalizedPromptSuggestions/prompts.ts
var INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS = [
	{
		id: "v4-engineering-data-management-1-scrape-web-pages-into-clean-json",
		role: "engineering",
		useCase: "data-management",
		order: 1,
		style: "tool-specific",
		shortTitle: "Scrape web pages into clean JSON",
		description: "Turn any page into structured data you can use.",
		builderPrompt: "Build a workflow where I enter a URL. Scrape the page, use AI to extract the fields I care about into structured JSON, and save the result to a Google Sheet or return it via webhook."
	},
	{
		id: "v4-engineering-data-management-2-extract-data-from-pdfs",
		role: "engineering",
		useCase: "data-management",
		order: 2,
		style: "generic",
		shortTitle: "Extract data from PDFs",
		description: "Pull structured fields out of documents automatically.",
		builderPrompt: "Build a workflow triggered by a form upload. Take a PDF, use AI to extract the key fields into structured data, validate them, and store the result in a table."
	},
	{
		id: "v4-engineering-data-management-3-sync-a-database-into-google-sheets",
		role: "engineering",
		useCase: "data-management",
		order: 3,
		style: "tool-specific",
		shortTitle: "Sync a database into Google Sheets",
		description: "Keep a live copy of your data in a spreadsheet.",
		builderPrompt: "Build a scheduled workflow that queries my MySQL database and writes the results into a Google Sheet, replacing the previous run so the sheet always reflects the latest data."
	},
	{
		id: "v4-engineering-data-management-4-validate-and-score-incoming-data",
		role: "engineering",
		useCase: "data-management",
		order: 4,
		style: "generic",
		shortTitle: "Validate and score incoming data",
		description: "Catch bad records before they enter your system.",
		builderPrompt: "Build a workflow that receives incoming records, uses AI plus rules to validate each field, scores data quality, and routes anything that fails to a review queue with the reason."
	},
	{
		id: "v4-engineering-development-support-1-auto-review-pull-requests-with-ai",
		role: "engineering",
		useCase: "development-support",
		order: 1,
		style: "tool-specific",
		shortTitle: "Auto-review pull requests with AI",
		description: "Get an AI code review on every GitLab MR.",
		builderPrompt: "Build a workflow that triggers on a new GitLab merge request, sends the diff to AI for review, and posts comments on the MR highlighting bugs, risks and style issues."
	},
	{
		id: "v4-engineering-development-support-2-monitor-your-sites-for-downtime",
		role: "engineering",
		useCase: "development-support",
		order: 2,
		style: "generic",
		shortTitle: "Monitor your sites for downtime",
		description: "Know the moment something goes down.",
		builderPrompt: "Build a scheduled workflow that checks my key URLs, and alerts me immediately when any returns an error or is slow, including the status code and which endpoint failed."
	},
	{
		id: "v4-engineering-development-support-3-back-up-credentials-to-github",
		role: "engineering",
		useCase: "development-support",
		order: 3,
		style: "tool-specific",
		shortTitle: "Back up credentials to GitHub",
		description: "Keep a versioned backup of your n8n setup.",
		builderPrompt: "Build a scheduled workflow that exports my n8n workflows and credentials and commits them to a private GitHub repo, so I always have a versioned backup."
	},
	{
		id: "v4-engineering-development-support-4-document-code-with-ai",
		role: "engineering",
		useCase: "development-support",
		order: 4,
		style: "generic",
		shortTitle: "Document code with AI",
		description: "Generate docs and summaries for your codebase.",
		builderPrompt: "Build a workflow where I submit a code file or repo path. Use AI to generate clear documentation and a plain-language summary of what it does, and save it as a markdown file."
	},
	{
		id: "v4-engineering-insights-reporting-1-generate-a-weekly-metrics-report",
		role: "engineering",
		useCase: "insights-reporting",
		order: 1,
		style: "generic",
		shortTitle: "Generate a weekly metrics report",
		description: "Auto-compile your numbers into a clear summary.",
		builderPrompt: "Build a weekly workflow that pulls my key metrics from a data source, uses AI to write a short narrative of what changed and why it matters, and emails me the report."
	},
	{
		id: "v4-engineering-insights-reporting-2-summarize-your-inbox-into-actions",
		role: "engineering",
		useCase: "insights-reporting",
		order: 2,
		style: "tool-specific",
		shortTitle: "Summarize your inbox into actions",
		description: "Get a daily digest of what needs doing.",
		builderPrompt: "Build a daily workflow that reads my Gmail, uses AI to extract action items and priorities, and sends me a structured summary so I start the day knowing what matters."
	},
	{
		id: "v4-engineering-insights-reporting-3-turn-raw-data-into-a-report",
		role: "engineering",
		useCase: "insights-reporting",
		order: 3,
		style: "generic",
		shortTitle: "Turn raw data into a report",
		description: "Hand off a dataset and get a written analysis back.",
		builderPrompt: "Build a workflow where I submit a dataset. Use AI to analyze trends, surface the top findings, and produce a concise written report I can share with the team."
	},
	{
		id: "v4-engineering-insights-reporting-4-email-a-scheduled-report-from-your-db",
		role: "engineering",
		useCase: "insights-reporting",
		order: 4,
		style: "tool-specific",
		shortTitle: "Email a scheduled report from your DB",
		description: "Deliver recurring reports straight to inboxes.",
		builderPrompt: "Build a scheduled workflow that runs a query against my database, uses AI to summarize the results into a readable report, and emails it via Gmail to a recipient list."
	},
	{
		id: "v4-engineering-role-default-1-scrape-web-pages-into-clean-json",
		role: "engineering",
		useCase: "role-default",
		order: 1,
		style: "tool-specific",
		shortTitle: "Scrape web pages into clean JSON",
		description: "Turn any page into structured data you can use.",
		builderPrompt: "Build a workflow where I enter a URL. Scrape the page, use AI to extract the fields I care about into structured JSON, and save the result to a Google Sheet or return it via webhook."
	},
	{
		id: "v4-engineering-role-default-2-auto-review-pull-requests-with-ai",
		role: "engineering",
		useCase: "role-default",
		order: 2,
		style: "tool-specific",
		shortTitle: "Auto-review pull requests with AI",
		description: "Get an AI code review on every GitLab MR.",
		builderPrompt: "Build a workflow that triggers on a new GitLab merge request, sends the diff to AI for review, and posts comments on the MR highlighting bugs, risks and style issues."
	},
	{
		id: "v4-engineering-role-default-3-monitor-your-sites-for-downtime",
		role: "engineering",
		useCase: "role-default",
		order: 3,
		style: "generic",
		shortTitle: "Monitor your sites for downtime",
		description: "Know the moment something goes down.",
		builderPrompt: "Build a scheduled workflow that checks my key URLs, and alerts me immediately when any returns an error or is slow, including the status code and which endpoint failed."
	},
	{
		id: "v4-engineering-role-default-4-generate-a-weekly-metrics-report",
		role: "engineering",
		useCase: "role-default",
		order: 4,
		style: "generic",
		shortTitle: "Generate a weekly metrics report",
		description: "Auto-compile your numbers into a clear summary.",
		builderPrompt: "Build a weekly workflow that pulls my key metrics from a data source, uses AI to write a short narrative of what changed and why it matters, and emails me the report."
	},
	{
		id: "v4-executive-owner-global-top-performers-1-build-an-ai-assistant-chatbot",
		role: "executive-owner",
		useCase: "global-top-performers",
		order: 1,
		style: "generic",
		shortTitle: "Build an AI assistant chatbot",
		description: "Spin up a chat assistant you can ask anything.",
		builderPrompt: "Build an AI chatbot using a chat trigger that can answer my questions, look things up, and carry context across the conversation. Make it easy to extend with new tools later."
	},
	{
		id: "v4-executive-owner-global-top-performers-2-chat-with-your-database",
		role: "executive-owner",
		useCase: "global-top-performers",
		order: 2,
		style: "tool-specific",
		shortTitle: "Chat with your database",
		description: "Ask questions and get answers from your data in plain English.",
		builderPrompt: "Build a workflow with a chat interface where I ask questions in plain language. Use AI to turn them into queries against my database and return the answer clearly."
	},
	{
		id: "v4-executive-owner-global-top-performers-3-manage-your-day-with-an-assistant",
		role: "executive-owner",
		useCase: "global-top-performers",
		order: 3,
		style: "generic",
		shortTitle: "Manage your day with an assistant",
		description: "Manage tasks, calendar and email from one place.",
		builderPrompt: "Build a personal assistant that connects to my calendar, email and tasks, and uses AI to summarize my day, draft replies, and add items I dictate in plain language."
	},
	{
		id: "v4-executive-owner-global-top-performers-4-get-a-daily-business-digest",
		role: "executive-owner",
		useCase: "global-top-performers",
		order: 4,
		style: "tool-specific",
		shortTitle: "Get a daily business digest",
		description: "Start each day with the numbers that matter.",
		builderPrompt: "Build a daily workflow that pulls key business metrics, uses AI to write a short summary of what changed, and posts it to a Slack channel for the leadership team."
	},
	{
		id: "v4-it-data-protection-1-get-alerts-before-ssl-certs-expire",
		role: "it",
		useCase: "data-protection",
		order: 1,
		style: "tool-specific",
		shortTitle: "Get alerts before SSL certs expire",
		description: "Never miss a certificate renewal again.",
		builderPrompt: "Build a scheduled workflow that checks the SSL certificates for my domains, and alerts me on Slack when any is within 30 days of expiry, including the domain and expiry date."
	},
	{
		id: "v4-it-data-protection-2-monitor-for-new-security-advisories",
		role: "it",
		useCase: "data-protection",
		order: 2,
		style: "generic",
		shortTitle: "Monitor for new security advisories",
		description: "Stay ahead of vulnerabilities that affect you.",
		builderPrompt: "Build a daily workflow that checks for new security advisories relevant to my stack, uses AI to summarize severity and impact, and sends me the ones that matter."
	},
	{
		id: "v4-it-data-protection-3-respond-to-compromised-cloud-keys",
		role: "it",
		useCase: "data-protection",
		order: 3,
		style: "tool-specific",
		shortTitle: "Respond to compromised cloud keys",
		description: "Auto-react when a credential leaks.",
		builderPrompt: "Build a workflow that triggers on a suspected AWS IAM key compromise, uses Claude to summarize the event, posts an alert to Slack, and drafts the recommended remediation steps."
	},
	{
		id: "v4-it-data-protection-4-detect-anomalies-in-your-data",
		role: "it",
		useCase: "data-protection",
		order: 4,
		style: "generic",
		shortTitle: "Detect anomalies in your data",
		description: "Catch unusual changes before they become problems.",
		builderPrompt: "Build a scheduled workflow that reviews a key dataset, uses AI to flag values or patterns that look anomalous compared to normal ranges, and alerts me with the details."
	},
	{
		id: "v4-it-it-service-desk-1-run-an-it-helpdesk-in-jira",
		role: "it",
		useCase: "it-service-desk",
		order: 1,
		style: "tool-specific",
		shortTitle: "Run an IT helpdesk in JIRA",
		description: "Triage and route internal IT tickets automatically.",
		builderPrompt: "Build a workflow that picks up internal IT requests, uses AI to classify the issue and urgency, creates a JIRA ticket assigned to the right team, and confirms receipt to the requester."
	},
	{
		id: "v4-it-it-service-desk-2-build-an-internal-it-chatbot",
		role: "it",
		useCase: "it-service-desk",
		order: 2,
		style: "generic",
		shortTitle: "Build an internal IT chatbot",
		description: "Answer common IT questions for employees instantly.",
		builderPrompt: "Build a chatbot that answers employee IT questions (passwords, access, tools) using AI from an internal knowledge base, and opens a ticket automatically when it can't help."
	},
	{
		id: "v4-it-it-service-desk-3-manage-infrastructure-with-an-ai-agent",
		role: "it",
		useCase: "it-service-desk",
		order: 3,
		style: "tool-specific",
		shortTitle: "Manage infrastructure with an AI agent",
		description: "Query and act on your servers conversationally.",
		builderPrompt: "Build an AI agent that connects to my Proxmox environment, lets me ask about VM status and resources in plain language, and reports back with a clear summary."
	},
	{
		id: "v4-it-it-service-desk-4-turn-requests-into-tracked-tickets",
		role: "it",
		useCase: "it-service-desk",
		order: 4,
		style: "generic",
		shortTitle: "Turn requests into tracked tickets",
		description: "Capture every IT request in one place.",
		builderPrompt: "Build a workflow where an IT request form creates a tracked ticket, uses AI to summarize and categorize it, and notifies the IT team with the priority."
	},
	{
		id: "v4-it-role-default-1-scan-suspicious-links-with-virustotal",
		role: "it",
		useCase: "role-default",
		order: 1,
		style: "tool-specific",
		shortTitle: "Scan suspicious links with VirusTotal",
		description: "Check URLs for phishing automatically.",
		builderPrompt: "Build a workflow where I submit a URL. Check it against URLScan.io and VirusTotal, use AI to summarize the risk, and return a clear safe/unsafe verdict with the reasons."
	},
	{
		id: "v4-it-role-default-2-detect-phishing-in-inbound-email",
		role: "it",
		useCase: "role-default",
		order: 2,
		style: "generic",
		shortTitle: "Detect phishing in inbound email",
		description: "Flag suspicious messages before anyone clicks.",
		builderPrompt: "Build a workflow that analyzes incoming emails, uses AI to detect phishing signals in the sender, links and wording, and alerts me with a risk score for anything suspicious."
	},
	{
		id: "v4-it-role-default-3-get-alerts-before-ssl-certs-expire",
		role: "it",
		useCase: "role-default",
		order: 3,
		style: "tool-specific",
		shortTitle: "Get alerts before SSL certs expire",
		description: "Never miss a certificate renewal again.",
		builderPrompt: "Build a scheduled workflow that checks the SSL certificates for my domains, and alerts me on Slack when any is within 30 days of expiry, including the domain and expiry date."
	},
	{
		id: "v4-it-role-default-4-build-an-internal-it-chatbot",
		role: "it",
		useCase: "role-default",
		order: 4,
		style: "generic",
		shortTitle: "Build an internal IT chatbot",
		description: "Answer common IT questions for employees instantly.",
		builderPrompt: "Build a chatbot that answers employee IT questions (passwords, access, tools) using AI from an internal knowledge base, and opens a ticket automatically when it can't help."
	},
	{
		id: "v4-it-scam-phishing-detection-1-scan-suspicious-links-with-virustotal",
		role: "it",
		useCase: "scam-phishing-detection",
		order: 1,
		style: "tool-specific",
		shortTitle: "Scan suspicious links with VirusTotal",
		description: "Check URLs for phishing automatically.",
		builderPrompt: "Build a workflow where I submit a URL. Check it against URLScan.io and VirusTotal, use AI to summarize the risk, and return a clear safe/unsafe verdict with the reasons."
	},
	{
		id: "v4-it-scam-phishing-detection-2-detect-phishing-in-inbound-email",
		role: "it",
		useCase: "scam-phishing-detection",
		order: 2,
		style: "generic",
		shortTitle: "Detect phishing in inbound email",
		description: "Flag suspicious messages before anyone clicks.",
		builderPrompt: "Build a workflow that analyzes incoming emails, uses AI to detect phishing signals in the sender, links and wording, and alerts me with a risk score for anything suspicious."
	},
	{
		id: "v4-it-scam-phishing-detection-3-check-email-headers-for-spoofing",
		role: "it",
		useCase: "scam-phishing-detection",
		order: 3,
		style: "tool-specific",
		shortTitle: "Check email headers for spoofing",
		description: "Verify sender authenticity on demand.",
		builderPrompt: "Build a workflow where I paste an email's headers. Analyze the IP reputation and SPF/DKIM results, use OpenAI to explain whether the sender is likely spoofed, and return a verdict."
	},
	{
		id: "v4-it-scam-phishing-detection-4-score-a-websites-scam-risk",
		role: "it",
		useCase: "scam-phishing-detection",
		order: 4,
		style: "generic",
		shortTitle: "Score a website's scam risk",
		description: "Assess any site's trustworthiness before engaging.",
		builderPrompt: "Build a workflow where I enter a website. Gather signals about the domain and content, use AI to assess scam risk, and return a score with the key warning signs."
	},
	{
		id: "v4-marketing-campaign-audience-engagement-1-post-to-every-social-channel",
		role: "marketing",
		useCase: "campaign-audience-engagement",
		order: 1,
		style: "tool-specific",
		shortTitle: "Post to every social channel",
		description: "Publish one piece of content across all your platforms at once.",
		builderPrompt: "Build a workflow where I submit a post and image via a form. Publish it to Instagram, Facebook and LinkedIn through their APIs, and log each post with its link to a Google Sheet."
	},
	{
		id: "v4-marketing-campaign-audience-engagement-2-plan-content-from-trending-topics",
		role: "marketing",
		useCase: "campaign-audience-engagement",
		order: 2,
		style: "generic",
		shortTitle: "Plan content from trending topics",
		description: "Spin up timely posts from what's trending in your niche.",
		builderPrompt: "Build a daily workflow that pulls trending topics in my niche, uses AI to draft a relevant social post for each, and saves the drafts to a table for me to approve."
	},
	{
		id: "v4-marketing-campaign-audience-engagement-3-analyze-and-follow-up-on-campaigns",
		role: "marketing",
		useCase: "campaign-audience-engagement",
		order: 3,
		style: "generic",
		shortTitle: "Analyze and follow up on campaigns",
		description: "Review campaign performance and trigger smart follow-ups.",
		builderPrompt: "Build a workflow that reads campaign results, uses AI to summarize what performed best, and drafts a follow-up message for the most engaged segment. Send me the summary."
	},
	{
		id: "v4-marketing-campaign-audience-engagement-4-post-a-daily-news-digest",
		role: "marketing",
		useCase: "campaign-audience-engagement",
		order: 4,
		style: "tool-specific",
		shortTitle: "Post a daily news digest",
		description: "Curate and deliver industry news to your audience automatically.",
		builderPrompt: "Build a daily workflow that fetches the top news in my industry, uses OpenAI to summarize the five most relevant, and posts a formatted digest to my Telegram channel."
	},
	{
		id: "v4-marketing-content-creation-1-generate-ai-videos-for-tiktok",
		role: "marketing",
		useCase: "content-creation",
		order: 1,
		style: "tool-specific",
		shortTitle: "Generate AI videos for TikTok",
		description: "Turn a topic into a short vertical video and post it to TikTok.",
		builderPrompt: "Build a workflow where I enter a topic. Use an AI video generator to create a short vertical video, add a caption written by OpenAI, and upload it to TikTok with relevant hashtags."
	},
	{
		id: "v4-marketing-content-creation-2-write-a-week-of-social-posts",
		role: "marketing",
		useCase: "content-creation",
		order: 2,
		style: "generic",
		shortTitle: "Write a week of social posts",
		description: "Generate a batch of on-brand posts from a single theme.",
		builderPrompt: "Build a workflow where I enter a weekly theme. Use AI to generate seven short social posts in my brand voice, each with a caption and hashtags, and save them to a spreadsheet for review and scheduling."
	},
	{
		id: "v4-marketing-content-creation-3-create-blog-images-with-ai",
		role: "marketing",
		useCase: "content-creation",
		order: 3,
		style: "tool-specific",
		shortTitle: "Create blog images with AI",
		description: "Generate custom images for any article on demand.",
		builderPrompt: "Build a workflow triggered by a form where I describe an image. Use an AI image generator (OpenAI or Gemini) to create it, then save the image to Google Drive and return the link."
	},
	{
		id: "v4-marketing-content-creation-4-turn-articles-into-social-content",
		role: "marketing",
		useCase: "content-creation",
		order: 4,
		style: "generic",
		shortTitle: "Turn articles into social content",
		description: "Repurpose any blog post into ready-to-post snippets.",
		builderPrompt: "Build a workflow that takes a blog URL, reads the article, and uses AI to produce a LinkedIn post, an X thread, and a short summary. Save all three to a spreadsheet."
	},
	{
		id: "v4-marketing-data-insights-1-track-your-seo-keyword-rankings",
		role: "marketing",
		useCase: "data-insights",
		order: 1,
		style: "tool-specific",
		shortTitle: "Track your SEO keyword rankings",
		description: "Monitor where you rank and get AI analysis weekly.",
		builderPrompt: "Build a weekly workflow that checks my target keyword rankings, uses OpenAI to analyze movement and suggest actions, and saves the results to a Google Sheet with a short summary."
	},
	{
		id: "v4-marketing-data-insights-2-analyze-facebook-ads-performance",
		role: "marketing",
		useCase: "data-insights",
		order: 2,
		style: "tool-specific",
		shortTitle: "Analyze Facebook Ads performance",
		description: "Pull ad metrics and get AI insights in a sheet.",
		builderPrompt: "Build a workflow that fetches my Facebook Ads metrics, uses AI to flag underperforming ads and suggest improvements, and writes the insights to a Google Sheet."
	},
	{
		id: "v4-marketing-data-insights-3-audit-any-page-for-seo",
		role: "marketing",
		useCase: "data-insights",
		order: 3,
		style: "generic",
		shortTitle: "Audit any page for SEO",
		description: "Get on-page SEO scores and fixes for any URL.",
		builderPrompt: "Build a workflow where I enter a URL. Fetch the page and use AI to audit its title, headings, keywords and meta, returning a prioritized list of fixes I can act on."
	},
	{
		id: "v4-marketing-data-insights-4-spot-trends-in-your-niche",
		role: "marketing",
		useCase: "data-insights",
		order: 4,
		style: "generic",
		shortTitle: "Spot trends in your niche",
		description: "Surface what's gaining traction so campaigns stay timely.",
		builderPrompt: "Build a workflow where I enter a niche. Gather recent popular content and use AI to summarize emerging themes and suggest campaign angles. Save the findings to a table."
	},
	{
		id: "v4-marketing-role-default-1-write-a-week-of-social-posts",
		role: "marketing",
		useCase: "role-default",
		order: 1,
		style: "generic",
		shortTitle: "Write a week of social posts",
		description: "Generate a batch of on-brand posts from a single theme.",
		builderPrompt: "Build a workflow where I enter a weekly theme. Use AI to generate seven short social posts in my brand voice, each with a caption and hashtags, and save them to a spreadsheet for review and scheduling."
	},
	{
		id: "v4-marketing-role-default-2-create-blog-images-with-ai",
		role: "marketing",
		useCase: "role-default",
		order: 2,
		style: "tool-specific",
		shortTitle: "Create blog images with AI",
		description: "Generate custom images for any article on demand.",
		builderPrompt: "Build a workflow triggered by a form where I describe an image. Use an AI image generator (OpenAI or Gemini) to create it, then save the image to Google Drive and return the link."
	},
	{
		id: "v4-marketing-role-default-3-post-to-every-social-channel",
		role: "marketing",
		useCase: "role-default",
		order: 3,
		style: "tool-specific",
		shortTitle: "Post to every social channel",
		description: "Publish one piece of content across all your platforms at once.",
		builderPrompt: "Build a workflow where I submit a post and image via a form. Publish it to Instagram, Facebook and LinkedIn through their APIs, and log each post with its link to a Google Sheet."
	},
	{
		id: "v4-marketing-role-default-4-spot-trends-in-your-niche",
		role: "marketing",
		useCase: "role-default",
		order: 4,
		style: "generic",
		shortTitle: "Spot trends in your niche",
		description: "Surface what's gaining traction so campaigns stay timely.",
		builderPrompt: "Build a workflow where I enter a niche. Gather recent popular content and use AI to summarize emerging themes and suggest campaign angles. Save the findings to a table."
	},
	{
		id: "v4-other-role-default-1-build-an-ai-assistant-chatbot",
		role: "other",
		useCase: "role-default",
		order: 1,
		style: "generic",
		shortTitle: "Build an AI assistant chatbot",
		description: "Spin up a chat assistant you can ask anything.",
		builderPrompt: "Build an AI chatbot using a chat trigger that can answer my questions, look things up, and carry context across the conversation. Make it easy to extend with new tools later."
	},
	{
		id: "v4-other-role-default-2-chat-with-your-database",
		role: "other",
		useCase: "role-default",
		order: 2,
		style: "tool-specific",
		shortTitle: "Chat with your database",
		description: "Ask questions and get answers from your data in plain English.",
		builderPrompt: "Build a workflow with a chat interface where I ask questions in plain language. Use AI to turn them into queries against my database and return the answer clearly."
	},
	{
		id: "v4-other-role-default-3-run-a-deep-research-agent",
		role: "other",
		useCase: "role-default",
		order: 3,
		style: "generic",
		shortTitle: "Run a deep research agent",
		description: "Ask a question and get back a sourced, structured research report.",
		builderPrompt: "Create a research agent that takes a question, searches the web, reads the top sources, and uses AI to synthesize a structured report under 800 words with links to its sources. Email the finished report to me."
	},
	{
		id: "v4-other-role-default-4-auto-organize-your-inbox",
		role: "other",
		useCase: "role-default",
		order: 4,
		style: "tool-specific",
		shortTitle: "Auto-organize your inbox",
		description: "Label, sort and prioritize email automatically.",
		builderPrompt: "Build a workflow that watches my Gmail inbox, uses AI to categorize each email by topic and urgency, applies the right label, and flags anything that needs a same-day reply."
	},
	{
		id: "v4-product-design-content-asset-creation-1-generate-ui-images-with-ai",
		role: "product-design",
		useCase: "content-asset-creation",
		order: 1,
		style: "tool-specific",
		shortTitle: "Generate UI images with AI",
		description: "Create on-brand visuals and mockups on demand.",
		builderPrompt: "Build a workflow triggered by a form where I describe a visual. Use an AI image generator (OpenAI or Gemini) to produce it, save it to Google Drive, and return the link."
	},
	{
		id: "v4-product-design-content-asset-creation-2-draft-product-copy-from-a-brief",
		role: "product-design",
		useCase: "content-asset-creation",
		order: 2,
		style: "generic",
		shortTitle: "Draft product copy from a brief",
		description: "Turn a short brief into ready-to-use copy.",
		builderPrompt: "Build a workflow where I enter a feature and audience. Use AI to draft product copy — headline, description and CTA — in our brand voice, and save the variants to a table."
	},
	{
		id: "v4-product-design-content-asset-creation-3-repurpose-docs-into-announcements",
		role: "product-design",
		useCase: "content-asset-creation",
		order: 3,
		style: "generic",
		shortTitle: "Repurpose docs into announcements",
		description: "Turn release notes into shareable posts.",
		builderPrompt: "Build a workflow that takes release notes, uses AI to rewrite them into a customer-facing announcement and a social post, and saves both for review."
	},
	{
		id: "v4-product-design-content-asset-creation-4-create-blog-visuals-automatically",
		role: "product-design",
		useCase: "content-asset-creation",
		order: 4,
		style: "tool-specific",
		shortTitle: "Create blog visuals automatically",
		description: "Generate header images for every article.",
		builderPrompt: "Build a workflow that takes an article title, uses an AI image generator to create a matching header image, and saves it to Google Drive linked to the article."
	},
	{
		id: "v4-product-design-insights-reporting-1-summarize-user-feedback-automatically",
		role: "product-design",
		useCase: "insights-reporting",
		order: 1,
		style: "generic",
		shortTitle: "Summarize user feedback automatically",
		description: "Turn raw feedback into themes and priorities.",
		builderPrompt: "Build a workflow that collects incoming user feedback, uses AI to cluster it into themes, rank them by frequency, and produce a summary of the top requests. Save it to a table."
	},
	{
		id: "v4-product-design-insights-reporting-2-report-product-metrics-to-slack",
		role: "product-design",
		useCase: "insights-reporting",
		order: 2,
		style: "tool-specific",
		shortTitle: "Report product metrics to Slack",
		description: "Share key product numbers with the team on a schedule.",
		builderPrompt: "Build a weekly workflow that pulls product usage metrics from my database, uses AI to write a short narrative of the trends, and posts the report to a Slack channel."
	},
	{
		id: "v4-product-design-insights-reporting-3-triage-incoming-feature-requests",
		role: "product-design",
		useCase: "insights-reporting",
		order: 3,
		style: "generic",
		shortTitle: "Triage incoming feature requests",
		description: "Sort and route requests as they arrive.",
		builderPrompt: "Build a workflow that reads incoming feature requests, uses AI to categorize each by theme and effort, flags duplicates, and adds them to a prioritized backlog table."
	},
	{
		id: "v4-product-design-insights-reporting-4-summarize-app-store-reviews",
		role: "product-design",
		useCase: "insights-reporting",
		order: 4,
		style: "tool-specific",
		shortTitle: "Summarize app store reviews",
		description: "Track what users say about your product.",
		builderPrompt: "Build a scheduled workflow that fetches recent app store reviews, uses AI to summarize sentiment and recurring issues, and saves a weekly digest to a Google Sheet."
	},
	{
		id: "v4-product-design-user-market-research-1-research-competitors-automatically",
		role: "product-design",
		useCase: "user-market-research",
		order: 1,
		style: "generic",
		shortTitle: "Research competitors automatically",
		description: "Build a quick competitive snapshot on demand.",
		builderPrompt: "Build a workflow where I enter a competitor. Gather their public info and recent updates, use AI to summarize positioning, features and pricing, and return a structured brief."
	},
	{
		id: "v4-product-design-user-market-research-2-mine-reddit-for-user-pain-points",
		role: "product-design",
		useCase: "user-market-research",
		order: 2,
		style: "tool-specific",
		shortTitle: "Mine Reddit for user pain points",
		description: "Discover what your audience struggles with.",
		builderPrompt: "Build a workflow where I enter a topic or subreddit. Pull recent discussions, use OpenAI to extract recurring pain points and feature wishes, and save them to a Google Sheet."
	},
	{
		id: "v4-product-design-user-market-research-3-analyze-a-competitors-landing-page",
		role: "product-design",
		useCase: "user-market-research",
		order: 3,
		style: "generic",
		shortTitle: "Analyze a competitor's landing page",
		description: "Learn from how rivals position themselves.",
		builderPrompt: "Build a workflow where I enter a competitor's URL. Fetch the page and use AI to break down its value proposition, audience and calls to action, and suggest what we could do better."
	},
	{
		id: "v4-product-design-user-market-research-4-summarize-industry-news-daily",
		role: "product-design",
		useCase: "user-market-research",
		order: 4,
		style: "tool-specific",
		shortTitle: "Summarize industry news daily",
		description: "Stay on top of your market without the reading.",
		builderPrompt: "Build a daily workflow that gathers news in my industry, uses OpenAI to summarize the most relevant stories, and sends me a short digest each morning."
	},
	{
		id: "v4-product-design-role-default-1-summarize-user-feedback-automatically",
		role: "product-design",
		useCase: "role-default",
		order: 1,
		style: "generic",
		shortTitle: "Summarize user feedback automatically",
		description: "Turn raw feedback into themes and priorities.",
		builderPrompt: "Build a workflow that collects incoming user feedback, uses AI to cluster it into themes, rank them by frequency, and produce a summary of the top requests. Save it to a table."
	},
	{
		id: "v4-product-design-role-default-2-mine-reddit-for-user-pain-points",
		role: "product-design",
		useCase: "role-default",
		order: 2,
		style: "tool-specific",
		shortTitle: "Mine Reddit for user pain points",
		description: "Discover what your audience struggles with.",
		builderPrompt: "Build a workflow where I enter a topic or subreddit. Pull recent discussions, use OpenAI to extract recurring pain points and feature wishes, and save them to a Google Sheet."
	},
	{
		id: "v4-product-design-role-default-3-research-competitors-automatically",
		role: "product-design",
		useCase: "role-default",
		order: 3,
		style: "generic",
		shortTitle: "Research competitors automatically",
		description: "Build a quick competitive snapshot on demand.",
		builderPrompt: "Build a workflow where I enter a competitor. Gather their public info and recent updates, use AI to summarize positioning, features and pricing, and return a structured brief."
	},
	{
		id: "v4-product-design-role-default-4-generate-ui-images-with-ai",
		role: "product-design",
		useCase: "role-default",
		order: 4,
		style: "tool-specific",
		shortTitle: "Generate UI images with AI",
		description: "Create on-brand visuals and mockups on demand.",
		builderPrompt: "Build a workflow triggered by a form where I describe a visual. Use an AI image generator (OpenAI or Gemini) to produce it, save it to Google Drive, and return the link."
	},
	{
		id: "v4-sales-lead-generation-qualification-1-scrape-local-leads-from-google-maps",
		role: "sales",
		useCase: "lead-generation-qualification",
		order: 1,
		style: "tool-specific",
		shortTitle: "Scrape local leads from Google Maps",
		description: "Pull business names, sites, phones and emails from Google Maps into a spreadsheet.",
		builderPrompt: "Build a workflow triggered by an n8n Form where I enter a business type and location. Use HTTP Request nodes to scrape matching businesses from Google Maps (name, website, phone, email), then save results to a Google Sheet, skipping any row without an email."
	},
	{
		id: "v4-sales-lead-generation-qualification-2-qualify-inbound-leads-automatically",
		role: "sales",
		useCase: "lead-generation-qualification",
		order: 2,
		style: "generic",
		shortTitle: "Qualify inbound leads automatically",
		description: "Score every new lead for fit and flag the hot ones instantly.",
		builderPrompt: "Create a form that captures inbound leads. When someone submits it, use AI to score how well they fit my ideal customer on a 1-10 scale, save every lead to a table, and alert me whenever a lead scores 8 or higher."
	},
	{
		id: "v4-sales-lead-generation-qualification-3-enrich-leads-from-linkedin-apollo",
		role: "sales",
		useCase: "lead-generation-qualification",
		order: 3,
		style: "tool-specific",
		shortTitle: "Enrich leads from LinkedIn + Apollo",
		description: "Turn a company name into a full lead profile with contacts and firmographics.",
		builderPrompt: "Build a workflow where I enter a company or domain. Use Apollo.io and LinkedIn data to pull key contacts, company size and industry, enrich each lead with AI, and append the result to a Google Sheet ready for outreach."
	},
	{
		id: "v4-sales-lead-generation-qualification-4-research-a-prospect-before-outreach",
		role: "sales",
		useCase: "lead-generation-qualification",
		order: 4,
		style: "generic",
		shortTitle: "Research a prospect before outreach",
		description: "Auto-summarize a company from its website so every email is personalized.",
		builderPrompt: "Build a workflow that takes a company website, fetches the homepage, and uses AI to extract what the company does, its industry and likely needs. Return a short summary I can use to personalize my outreach."
	},
	{
		id: "v4-sales-lead-nurturing-1-send-automated-follow-up-emails",
		role: "sales",
		useCase: "lead-nurturing",
		order: 1,
		style: "generic",
		shortTitle: "Send automated follow-up emails",
		description: "Email new leads and chase non-repliers until they respond.",
		builderPrompt: "Build a workflow that reads new leads from a spreadsheet and sends each a personalized intro email written by AI. If a lead hasn't replied after three days, send one follow-up. Stop once they reply and mark them as engaged."
	},
	{
		id: "v4-sales-lead-nurturing-2-draft-personalized-emails-from-linkedin",
		role: "sales",
		useCase: "lead-nurturing",
		order: 2,
		style: "tool-specific",
		shortTitle: "Draft personalized emails from LinkedIn",
		description: "Generate a tailored first-touch email for each prospect from their profile.",
		builderPrompt: "Build a workflow that reads prospects from a Google Sheet, pulls their LinkedIn profile data, and uses Claude to draft a personalized cold email referencing their role and company. Save each draft back to the sheet to review before sending via Gmail."
	},
	{
		id: "v4-sales-lead-nurturing-3-brief-yourself-before-sales-calls",
		role: "sales",
		useCase: "lead-nurturing",
		order: 3,
		style: "tool-specific",
		shortTitle: "Brief yourself before sales calls",
		description: "Gather recent company news and summarize it ahead of every call.",
		builderPrompt: "Create a workflow where I enter a company name. Fetch recent news about it, use OpenAI to write a five-bullet pre-call brief, and send it to me on Slack the morning of the meeting."
	},
	{
		id: "v4-sales-lead-nurturing-4-reply-to-sales-inquiries-with-ai",
		role: "sales",
		useCase: "lead-nurturing",
		order: 4,
		style: "generic",
		shortTitle: "Reply to sales inquiries with AI",
		description: "Auto-answer common questions and hand off hot leads to a human.",
		builderPrompt: "Build a chatbot that answers inbound product and pricing questions using AI with conversation memory. When a lead asks for a demo or pricing, capture their details to a table and notify me so I can take over."
	},
	{
		id: "v4-sales-market-research-1-audit-any-websites-seo",
		role: "sales",
		useCase: "market-research",
		order: 1,
		style: "tool-specific",
		shortTitle: "Audit any website's SEO",
		description: "Get an on-page SEO analysis and prioritized fixes for any URL.",
		builderPrompt: "Build a workflow where I enter a URL. Fetch the page and use OpenAI to run an on-page SEO audit — title, headings, keywords, meta — and return a prioritized list of fixes. Save each audit to a Google Sheet."
	},
	{
		id: "v4-sales-market-research-2-run-a-deep-research-agent",
		role: "sales",
		useCase: "market-research",
		order: 2,
		style: "generic",
		shortTitle: "Run a deep research agent",
		description: "Ask a question and get back a sourced, structured research report.",
		builderPrompt: "Create a research agent that takes a question, searches the web, reads the top sources, and uses AI to synthesize a structured report under 800 words with links to its sources. Email the finished report to me."
	},
	{
		id: "v4-sales-market-research-3-monitor-competitor-pricing",
		role: "sales",
		useCase: "market-research",
		order: 3,
		style: "generic",
		shortTitle: "Monitor competitor pricing",
		description: "Track rival prices on a schedule and alert you when they change.",
		builderPrompt: "Build a scheduled workflow that checks a list of competitor product pages, extracts current prices, compares them to the last run, and alerts me whenever a price changes. Keep a running history in a table."
	},
	{
		id: "v4-sales-market-research-4-find-trending-topics-on-youtube",
		role: "sales",
		useCase: "market-research",
		order: 4,
		style: "tool-specific",
		shortTitle: "Find trending topics on YouTube",
		description: "Surface trending videos and angles in your niche for content ideas.",
		builderPrompt: "Build a workflow where I enter a niche or keyword. Use the YouTube API to find recent high-performing videos, then use OpenAI to summarize common themes and suggest content angles. Save the ideas to a Google Sheet."
	},
	{
		id: "v4-sales-role-default-1-scrape-local-leads-from-google-maps",
		role: "sales",
		useCase: "role-default",
		order: 1,
		style: "tool-specific",
		shortTitle: "Scrape local leads from Google Maps",
		description: "Pull business names, sites, phones and emails from Google Maps into a spreadsheet.",
		builderPrompt: "Build a workflow triggered by an n8n Form where I enter a business type and location. Use HTTP Request nodes to scrape matching businesses from Google Maps (name, website, phone, email), then save results to a Google Sheet, skipping any row without an email."
	},
	{
		id: "v4-sales-role-default-2-qualify-inbound-leads-automatically",
		role: "sales",
		useCase: "role-default",
		order: 2,
		style: "generic",
		shortTitle: "Qualify inbound leads automatically",
		description: "Score every new lead for fit and flag the hot ones instantly.",
		builderPrompt: "Create a form that captures inbound leads. When someone submits it, use AI to score how well they fit my ideal customer on a 1-10 scale, save every lead to a table, and alert me whenever a lead scores 8 or higher."
	},
	{
		id: "v4-sales-role-default-3-send-automated-follow-up-emails",
		role: "sales",
		useCase: "role-default",
		order: 3,
		style: "generic",
		shortTitle: "Send automated follow-up emails",
		description: "Email new leads and chase non-repliers until they respond.",
		builderPrompt: "Build a workflow that reads new leads from a spreadsheet and sends each a personalized intro email written by AI. If a lead hasn't replied after three days, send one follow-up. Stop once they reply and mark them as engaged."
	},
	{
		id: "v4-sales-role-default-4-brief-yourself-before-sales-calls",
		role: "sales",
		useCase: "role-default",
		order: 4,
		style: "tool-specific",
		shortTitle: "Brief yourself before sales calls",
		description: "Gather recent company news and summarize it ahead of every call.",
		builderPrompt: "Create a workflow where I enter a company name. Fetch recent news about it, use OpenAI to write a five-bullet pre-call brief, and send it to me on Slack the morning of the meeting."
	},
	{
		id: "v4-support-customer-inquiries-1-add-an-ai-chatbot-to-your-site",
		role: "support",
		useCase: "customer-inquiries",
		order: 1,
		style: "tool-specific",
		shortTitle: "Add an AI chatbot to your site",
		description: "Answer visitor questions on your website around the clock.",
		builderPrompt: "Build a branded website chatbot using a chat trigger. Use AI to answer visitor questions from my website content, and when it can't answer, capture the visitor's email and notify me."
	},
	{
		id: "v4-support-customer-inquiries-2-answer-customers-on-whatsapp",
		role: "support",
		useCase: "customer-inquiries",
		order: 2,
		style: "tool-specific",
		shortTitle: "Answer customers on WhatsApp",
		description: "Handle inbound WhatsApp questions from your knowledge base.",
		builderPrompt: "Build a WhatsApp bot that answers customer questions using a knowledge base stored in Google Docs. Use AI to draft replies, and escalate to me on Slack when a question is unresolved."
	},
	{
		id: "v4-support-customer-inquiries-3-automate-first-response-replies",
		role: "support",
		useCase: "customer-inquiries",
		order: 3,
		style: "generic",
		shortTitle: "Automate first-response replies",
		description: "Acknowledge and answer common questions instantly.",
		builderPrompt: "Build a workflow that receives customer messages, uses AI to detect the intent, and sends an immediate answer for common questions. Route anything it can't handle to a human with a summary."
	},
	{
		id: "v4-support-customer-inquiries-4-onboard-new-customers-automatically",
		role: "support",
		useCase: "customer-inquiries",
		order: 4,
		style: "generic",
		shortTitle: "Onboard new customers automatically",
		description: "Welcome and guide new customers without manual work.",
		builderPrompt: "Build a workflow triggered when a new customer signs up. Use AI to send a personalized welcome message, share relevant getting-started resources, and schedule a check-in follow-up."
	},
	{
		id: "v4-support-issue-resolution-1-triage-support-tickets-with-jira",
		role: "support",
		useCase: "issue-resolution",
		order: 1,
		style: "tool-specific",
		shortTitle: "Triage support tickets with JIRA",
		description: "Auto-classify and route incoming tickets in JIRA.",
		builderPrompt: "Build a workflow that picks up new support tickets, uses AI to classify priority and category, creates a JIRA issue with the right labels, and notifies the owning team on Slack."
	},
	{
		id: "v4-support-issue-resolution-2-auto-resolve-common-tickets",
		role: "support",
		useCase: "issue-resolution",
		order: 2,
		style: "generic",
		shortTitle: "Auto-resolve common tickets",
		description: "Answer repetitive issues without an agent.",
		builderPrompt: "Build a workflow that reads incoming support requests, uses AI to detect known issues, and replies with the resolution steps automatically. Escalate anything unfamiliar to a human."
	},
	{
		id: "v4-support-issue-resolution-3-classify-and-route-incoming-emails",
		role: "support",
		useCase: "issue-resolution",
		order: 3,
		style: "generic",
		shortTitle: "Classify and route incoming emails",
		description: "Send each support email to the right place instantly.",
		builderPrompt: "Build a workflow that reads incoming support emails, uses AI to categorize each by topic and urgency, and routes it to the correct team or queue with a short summary."
	},
	{
		id: "v4-support-issue-resolution-4-create-tickets-from-a-contact-form",
		role: "support",
		useCase: "issue-resolution",
		order: 4,
		style: "tool-specific",
		shortTitle: "Create tickets from a contact form",
		description: "Turn form submissions into tracked support tickets.",
		builderPrompt: "Build a workflow where a contact form submission creates a ticket, uses AI to summarize the issue, and posts a notification to Slack so the team can pick it up."
	},
	{
		id: "v4-support-inbox-process-automation-1-auto-organize-your-gmail-inbox",
		role: "support",
		useCase: "inbox-process-automation",
		order: 1,
		style: "tool-specific",
		shortTitle: "Auto-organize your Gmail inbox",
		description: "Label, sort and prioritize email automatically.",
		builderPrompt: "Build a workflow that watches my Gmail inbox, uses AI to categorize each email by topic and urgency, applies the right label, and flags anything that needs a same-day reply."
	},
	{
		id: "v4-support-inbox-process-automation-2-auto-categorize-outlook-emails",
		role: "support",
		useCase: "inbox-process-automation",
		order: 2,
		style: "tool-specific",
		shortTitle: "Auto-categorize Outlook emails",
		description: "Keep your Outlook inbox sorted without lifting a finger.",
		builderPrompt: "Build a workflow that processes new Outlook emails, uses AI to assign a category and importance, moves them to the right folder, and sends me a daily digest of what needs attention."
	},
	{
		id: "v4-support-inbox-process-automation-3-draft-replies-to-routine-emails",
		role: "support",
		useCase: "inbox-process-automation",
		order: 3,
		style: "generic",
		shortTitle: "Draft replies to routine emails",
		description: "Get AI-written first drafts for common messages.",
		builderPrompt: "Build a workflow that reads new emails, uses AI to draft a suggested reply for routine ones, and saves the draft for me to review and send. Skip anything sensitive."
	},
	{
		id: "v4-support-inbox-process-automation-4-summarize-your-inbox-each-morning",
		role: "support",
		useCase: "inbox-process-automation",
		order: 4,
		style: "generic",
		shortTitle: "Summarize your inbox each morning",
		description: "Start the day with a digest of what matters.",
		builderPrompt: "Build a workflow that runs each morning, reads my unread emails, and uses AI to produce a prioritized summary of action items and who's waiting on me. Send it to me."
	},
	{
		id: "v4-support-role-default-1-add-an-ai-chatbot-to-your-site",
		role: "support",
		useCase: "role-default",
		order: 1,
		style: "tool-specific",
		shortTitle: "Add an AI chatbot to your site",
		description: "Answer visitor questions on your website around the clock.",
		builderPrompt: "Build a branded website chatbot using a chat trigger. Use AI to answer visitor questions from my website content, and when it can't answer, capture the visitor's email and notify me."
	},
	{
		id: "v4-support-role-default-2-automate-first-response-replies",
		role: "support",
		useCase: "role-default",
		order: 2,
		style: "generic",
		shortTitle: "Automate first-response replies",
		description: "Acknowledge and answer common questions instantly.",
		builderPrompt: "Build a workflow that receives customer messages, uses AI to detect the intent, and sends an immediate answer for common questions. Route anything it can't handle to a human with a summary."
	},
	{
		id: "v4-support-role-default-3-triage-support-tickets-with-jira",
		role: "support",
		useCase: "role-default",
		order: 3,
		style: "tool-specific",
		shortTitle: "Triage support tickets with JIRA",
		description: "Auto-classify and route incoming tickets in JIRA.",
		builderPrompt: "Build a workflow that picks up new support tickets, uses AI to classify priority and category, creates a JIRA issue with the right labels, and notifies the owning team on Slack."
	},
	{
		id: "v4-support-role-default-4-draft-replies-to-routine-emails",
		role: "support",
		useCase: "role-default",
		order: 4,
		style: "generic",
		shortTitle: "Draft replies to routine emails",
		description: "Get AI-written first drafts for common messages.",
		builderPrompt: "Build a workflow that reads new emails, uses AI to draft a suggested reply for routine ones, and saves the draft for me to review and send. Skip anything sensitive."
	}
];
//#endregion
//#region src/experiments/instanceAiPersonalizedPromptSuggestions/metadata.ts
var TEAM_METADATA_KEY = "what_team_are_you_on";
var SOMETHING_ELSE_ANSWER = "Something else";
var ROLE_ANSWERS = {
	"Executive/Owner": "executive-owner",
	Support: "support",
	"Product & Design": "product-design",
	Sales: "sales",
	IT: "it",
	Engineering: "engineering",
	Marketing: "marketing",
	Other: "other"
};
var USE_CASE_METADATA_KEYS = {
	sales: "what_do_you_automate_sales",
	marketing: "what_do_you_automate_marketing",
	support: "what_do_you_automate_support",
	it: "what_do_you_automate_it",
	engineering: "what_do_you_automate_eng",
	"product-design": "what_do_you_automate_pad"
};
var USE_CASE_ANSWERS = {
	sales: {
		"Lead generation & qualification": "lead-generation-qualification",
		"Lead nurturing": "lead-nurturing",
		"Market research": "market-research"
	},
	marketing: {
		"Content creation": "content-creation",
		"Campaigns & audience engagement": "campaign-audience-engagement",
		"Data & insights": "data-insights"
	},
	support: {
		"Customer inquiries": "customer-inquiries",
		"Issue resolution": "issue-resolution",
		"Inbox & process automation": "inbox-process-automation"
	},
	it: {
		"Scam & phishing detection": "scam-phishing-detection",
		"Data protection": "data-protection",
		"IT service desk": "it-service-desk"
	},
	engineering: {
		"Data management": "data-management",
		"Development support": "development-support",
		"Insights & reporting": "insights-reporting"
	},
	"product-design": {
		"User & market research": "user-market-research",
		"Insights & reporting": "insights-reporting",
		"Content & asset creation": "content-asset-creation"
	}
};
function getUseCaseAnswer(role, answer) {
	return USE_CASE_ANSWERS[role]?.[answer];
}
function getStringMetadataValueState(metadata, key) {
	if (!metadata || !(key in metadata)) return { state: "missing" };
	const value = metadata[key];
	if (value === void 0) return { state: "missing" };
	if (typeof value !== "string") return { state: "malformed" };
	return {
		state: "value",
		value
	};
}
function getRole(metadata) {
	const roleAnswer = getStringMetadataValueState(metadata, TEAM_METADATA_KEY);
	if (roleAnswer.state === "missing") return;
	if (roleAnswer.state === "malformed") return "malformed";
	return ROLE_ANSWERS[roleAnswer.value];
}
function getRoleDefaultSegment(role) {
	return {
		source: "role_default",
		role,
		useCase: "role-default",
		segmentKey: `${role}:role-default`
	};
}
function getPromptSegmentFromProfileOverride(profileOverride) {
	if (profileOverride.kind === "fallback") return { source: "v2_top_used_fallback" };
	return {
		source: profileOverride.useCase === "global-top-performers" ? "global_top_performers" : profileOverride.useCase === "role-default" ? "role_default" : "matrix",
		role: profileOverride.role,
		useCase: profileOverride.useCase,
		segmentKey: profileOverride.segmentKey
	};
}
function resolvePromptSegment(metadata) {
	const role = getRole(metadata);
	if (role === "malformed") return { source: "v2_top_used_fallback" };
	if (!role) return { source: "v2_top_used_fallback" };
	if (role === "executive-owner") return {
		source: "global_top_performers",
		role,
		useCase: "global-top-performers",
		segmentKey: "executive-owner:global-top-performers"
	};
	if (role === "other") return getRoleDefaultSegment(role);
	const useCaseMetadataKey = USE_CASE_METADATA_KEYS[role];
	if (!useCaseMetadataKey) return {
		source: "v2_top_used_fallback",
		role
	};
	const useCaseAnswer = getStringMetadataValueState(metadata, useCaseMetadataKey);
	if (useCaseAnswer.state === "malformed") return {
		source: "v2_top_used_fallback",
		role
	};
	if (useCaseAnswer.state === "missing" || useCaseAnswer.value === SOMETHING_ELSE_ANSWER) return getRoleDefaultSegment(role);
	const useCase = getUseCaseAnswer(role, useCaseAnswer.value);
	if (!useCase) return {
		source: "v2_top_used_fallback",
		role
	};
	return {
		source: "matrix",
		role,
		useCase,
		segmentKey: `${role}:${useCase}`
	};
}
function getBucketSuggestions(segment, catalog) {
	const suggestions = catalog.filter((suggestion) => suggestion.role === segment.role && suggestion.useCase === segment.useCase).sort((a, b) => a.order - b.order).map(({ id, shortTitle, description, builderPrompt }) => ({
		id,
		shortTitle,
		description,
		builderPrompt
	}));
	return suggestions.length === 4 ? suggestions : null;
}
function createFallbackResolution({ fallbackSuggestions, format, metadataLoadState, role, useCase, profileOverride }) {
	return {
		suggestions: fallbackSuggestions,
		fallbackSuggestions,
		showSeeMore: false,
		telemetryPayload: {
			suggestion_catalog_version: "v4-personalized",
			suggestion_format: format,
			suggestion_source: "v2_top_used_fallback",
			profile_role: role,
			profile_use_case: useCase,
			metadata_load_state: metadataLoadState,
			profile_override: profileOverride ? true : void 0
		}
	};
}
function resolvePersonalizedPromptSuggestions({ metadata, metadataLoadState, fallbackSuggestions, format, profileOverride, catalog = INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS }) {
	const hasProfileOverride = Boolean(profileOverride);
	const effectiveMetadataLoadState = hasProfileOverride ? "loaded" : metadataLoadState;
	if (!hasProfileOverride && metadataLoadState !== "loaded") return createFallbackResolution({
		fallbackSuggestions,
		format,
		metadataLoadState
	});
	const segment = profileOverride ? getPromptSegmentFromProfileOverride(profileOverride) : resolvePromptSegment(metadata);
	if (segment.source === "v2_top_used_fallback") return createFallbackResolution({
		fallbackSuggestions,
		format,
		metadataLoadState: effectiveMetadataLoadState,
		role: segment.role,
		useCase: segment.useCase,
		profileOverride: hasProfileOverride
	});
	const suggestions = getBucketSuggestions(segment, catalog);
	if (!suggestions) return createFallbackResolution({
		fallbackSuggestions,
		format,
		metadataLoadState: effectiveMetadataLoadState,
		role: segment.role,
		useCase: segment.useCase,
		profileOverride: hasProfileOverride
	});
	return {
		suggestions,
		fallbackSuggestions,
		showSeeMore: true,
		telemetryPayload: {
			suggestion_catalog_version: "v4-personalized",
			suggestion_format: format,
			suggestion_source: segment.source,
			profile_role: segment.role,
			profile_use_case: segment.useCase,
			segment_key: segment.segmentKey,
			metadata_load_state: effectiveMetadataLoadState,
			profile_override: hasProfileOverride ? true : void 0
		}
	};
}
var PERSONALIZED_PROMPT_PROFILE_OVERRIDE_STORAGE_KEY = "N8N_INSTANCE_AI_PERSONALIZED_PROMPT_PROFILE_OVERRIDE";
var PERSONALIZED_PROMPT_ROLES = [
	"executive-owner",
	"support",
	"product-design",
	"sales",
	"it",
	"engineering",
	"marketing",
	"other"
];
var PERSONALIZED_PROMPT_USE_CASES = [
	"lead-generation-qualification",
	"lead-nurturing",
	"market-research",
	"content-creation",
	"campaign-audience-engagement",
	"data-insights",
	"customer-inquiries",
	"issue-resolution",
	"inbox-process-automation",
	"scam-phishing-detection",
	"data-protection",
	"it-service-desk",
	"data-management",
	"development-support",
	"insights-reporting",
	"user-market-research",
	"content-asset-creation",
	"role-default",
	"global-top-performers"
];
var PERSONALIZED_PROMPT_ROLE_VALUES = new Set(PERSONALIZED_PROMPT_ROLES);
var PERSONALIZED_PROMPT_USE_CASE_VALUES = new Set(PERSONALIZED_PROMPT_USE_CASES);
var PERSONALIZED_PROMPT_BUCKET_KEYS = new Set(INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS.map((suggestion) => `${suggestion.role}:${suggestion.useCase}`));
function isPersonalizedPromptRole(value) {
	return PERSONALIZED_PROMPT_ROLE_VALUES.has(value);
}
function isPersonalizedPromptUseCase(value) {
	return PERSONALIZED_PROMPT_USE_CASE_VALUES.has(value);
}
function parsePersonalizedPromptProfileOverride(value) {
	if (!value) return null;
	if (value === "fallback") return { kind: "fallback" };
	const [role, useCase, unexpected] = value.split(":");
	if (unexpected !== void 0 || !role || !useCase) return null;
	if (!isPersonalizedPromptRole(role) || !isPersonalizedPromptUseCase(useCase)) return null;
	const segmentKey = `${role}:${useCase}`;
	if (!PERSONALIZED_PROMPT_BUCKET_KEYS.has(segmentKey)) return null;
	return {
		kind: "segment",
		role,
		useCase,
		segmentKey
	};
}
function getUrlOverrideValue() {
	return new URL(window.location.href).searchParams.get("instanceAiPersonalizedPromptProfile") ?? void 0;
}
function usePersonalizedPromptProfileOverride() {
	const storedOverride = useStorage(PERSONALIZED_PROMPT_PROFILE_OVERRIDE_STORAGE_KEY);
	const urlOverrideValue = getUrlOverrideValue();
	if (urlOverrideValue !== void 0) storedOverride.value = urlOverrideValue === "clear" || urlOverrideValue === "" ? null : urlOverrideValue;
	if (storedOverride.value && !parsePersonalizedPromptProfileOverride(storedOverride.value)) storedOverride.value = null;
	return computed(() => parsePersonalizedPromptProfileOverride(storedOverride.value));
}
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/useInstanceAiWorkflowPreviewSuggestionsExperiment.ts
function useInstanceAiWorkflowPreviewSuggestionsExperiment() {
	return { isFeatureEnabled: computed(() => true) };
}
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/suggestions.ts
var INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS_VERSION = "v3-workflow-preview";
var INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS = [
	{
		type: "prompt",
		id: "score-my-leads",
		icon: "badge-check",
		labelKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.scoreMyLeads.label",
		promptKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.scoreMyLeads.prompt",
		workflowFile: "score-my-leads"
	},
	{
		type: "prompt",
		id: "process-invoices",
		icon: "file-text",
		labelKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.processInvoices.label",
		promptKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.processInvoices.prompt",
		workflowFile: "process-invoices"
	},
	{
		type: "prompt",
		id: "whatsapp-support",
		icon: "message-circle",
		labelKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.whatsappSupport.label",
		promptKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.whatsappSupport.prompt",
		workflowFile: "whatsapp-support"
	},
	{
		type: "prompt",
		id: "schedule-social-posts",
		icon: "calendar",
		labelKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.scheduleSocialPosts.label",
		promptKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.scheduleSocialPosts.prompt",
		workflowFile: "schedule-social-posts"
	}
];
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/components/WorkflowPreviewSuggestions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseenter",
	"onFocus"
];
var PREVIEW_HOVER_DELAY_MS = 30;
var WorkflowPreviewSuggestions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowPreviewSuggestions",
	props: {
		suggestions: {},
		disabled: { type: Boolean }
	},
	emits: [
		"preview-change",
		"insert-suggestion",
		"workflow-preview"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const activePreview = ref(null);
		let hoverTimer = null;
		const hoverStartTimes = /* @__PURE__ */ new Map();
		function clearHoverTimer() {
			if (!hoverTimer) return;
			clearTimeout(hoverTimer);
			hoverTimer = null;
		}
		function trackHoverEnd(suggestionId) {
			const startTime = hoverStartTimes.get(suggestionId);
			if (startTime === void 0) return;
			hoverStartTimes.delete(suggestionId);
			telemetry.track("AI Assistant suggestion button hovered", {
				suggestion_id: suggestionId,
				seconds: Math.floor((Date.now() - startTime) / 1e3)
			});
		}
		function clearPreview() {
			clearHoverTimer();
			for (const id of hoverStartTimes.keys()) trackHoverEnd(id);
			activePreview.value = null;
			emit("preview-change", null);
			emit("workflow-preview", null);
		}
		function handleSuggestionEnter(suggestion) {
			if (props.disabled) return;
			hoverStartTimes.set(suggestion.id, Date.now());
			clearHoverTimer();
			hoverTimer = setTimeout(() => {
				hoverTimer = null;
				activePreview.value = suggestion.id;
				emit("preview-change", suggestion.promptKey);
				emit("workflow-preview", suggestion.workflowFile);
			}, PREVIEW_HOVER_DELAY_MS);
		}
		function handleSuggestionFocus(suggestion) {
			if (props.disabled) return;
			clearHoverTimer();
			activePreview.value = suggestion.id;
			emit("preview-change", suggestion.promptKey);
			emit("workflow-preview", suggestion.workflowFile);
		}
		function handleSuggestionClick(suggestion) {
			if (props.disabled) return;
			const position = props.suggestions.indexOf(suggestion) + 1;
			telemetry.track("AI Assistant suggestion button clicked", { suggestion_id: suggestion.id });
			clearPreview();
			emit("insert-suggestion", {
				promptKey: suggestion.promptKey,
				suggestionId: suggestion.id,
				suggestionKind: "prompt",
				position
			});
		}
		onUnmounted(clearPreview);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.suggestions),
				"data-test-id": "instance-ai-workflow-preview-suggestions"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestionRow) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.suggestions, (suggestion, index) => {
				return openBlock(), createElementBlock("button", {
					key: suggestion.id,
					type: "button",
					class: normalizeClass([_ctx.$style.suggestionButton, activePreview.value === suggestion.id && _ctx.$style.suggestionButtonActive]),
					style: normalizeStyle({ animationDelay: `${index * 50}ms` }),
					"data-test-id": `instance-ai-suggestion-${suggestion.id}`,
					disabled: props.disabled,
					onClick: ($event) => handleSuggestionClick(suggestion),
					onMouseenter: ($event) => handleSuggestionEnter(suggestion),
					onMouseleave: clearPreview,
					onFocus: ($event) => handleSuggestionFocus(suggestion),
					onBlur: clearPreview
				}, [createVNode(unref(N8nIcon_default), {
					icon: suggestion.icon,
					size: 12,
					class: normalizeClass(_ctx.$style.suggestionIcon)
				}, null, 8, ["icon", "class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(suggestion.labelKey)), 1)], 46, _hoisted_1$6);
			}), 128)), createBaseVNode("a", {
				href: "https://n8n.io/workflows/",
				target: "_blank",
				rel: "noopener noreferrer",
				class: normalizeClass(_ctx.$style.seeAllLink)
			}, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("experiments.instanceAiWorkflowPreviewSuggestions.suggestions.seeAll")), 1), createVNode(unref(N8nIcon_default), {
				icon: "arrow-right",
				size: 12
			})], 2)], 2)], 2);
		};
	}
});
var WorkflowPreviewSuggestions_vue_vue_type_style_index_0_lang_module_default = {
	suggestions: "_suggestions_1ohqi_135",
	suggestionRow: "_suggestionRow_1ohqi_139",
	suggestionButton: "_suggestionButton_1ohqi_147",
	suggestionSlideIn: "_suggestionSlideIn_1ohqi_1",
	suggestionButtonActive: "_suggestionButtonActive_1ohqi_181",
	suggestionIcon: "_suggestionIcon_1ohqi_188",
	seeAllLink: "_seeAllLink_1ohqi_197"
};
var WorkflowPreviewSuggestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowPreviewSuggestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowPreviewSuggestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/components/WorkflowPreviewNode.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["src"];
var WorkflowPreviewNode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowPreviewNode",
	props: {
		node: {},
		offsetX: {},
		offsetY: {},
		state: { default: "idle" },
		trigger: {
			type: Boolean,
			default: false
		},
		iconOverride: {}
	},
	setup(__props) {
		const props = __props;
		const style = computed(() => ({
			left: `${props.node.position.x - props.offsetX}px`,
			top: `${props.node.position.y - props.offsetY}px`
		}));
		const iconWrapperStyle = computed(() => {
			if (props.node.iconColor) return { color: `var(--node--icon--color--${props.node.iconColor})` };
			return {};
		});
		const activeIcon = computed(() => props.iconOverride ?? props.node.icon);
		const iconName = computed(() => activeIcon.value.type === "icon" ? activeIcon.value.name : void 0);
		const iconSrc = computed(() => activeIcon.value.type === "file" ? activeIcon.value.src : void 0);
		const iconLightInvert = computed(() => activeIcon.value.lightInvert === true);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([
					_ctx.$style.node,
					props.trigger && _ctx.$style.trigger,
					props.state === "running" && _ctx.$style.running,
					props.state === "success" && _ctx.$style.success
				]),
				style: normalizeStyle(style.value)
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.iconWrapper),
				style: normalizeStyle(iconWrapperStyle.value)
			}, [iconName.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: iconName.value,
				size: 48
			}, null, 8, ["icon"])) : iconSrc.value ? (openBlock(), createBlock(Transition, {
				key: 1,
				name: _ctx.$style.swipe,
				mode: "out-in"
			}, {
				default: withCtx(() => [(openBlock(), createElementBlock("img", {
					key: iconSrc.value,
					src: iconSrc.value,
					class: normalizeClass([_ctx.$style.iconImage, iconLightInvert.value && _ctx.$style.lightInvert])
				}, null, 10, _hoisted_1$5))]),
				_: 1
			}, 8, ["name"])) : (openBlock(), createElementBlock("span", {
				key: 2,
				class: normalizeClass(_ctx.$style.iconFallback)
			}, toDisplayString(props.node.label.charAt(0)), 3))], 6), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(props.node.label), 3)], 6);
		};
	}
});
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/components/WorkflowPreviewNode.vue?vue&type=style&index=0&lang.module.scss
var node = "_node_8e9dy_125";
var iconWrapper = "_iconWrapper_8e9dy_133";
var trigger = "_trigger_8e9dy_157";
var running = "_running_8e9dy_164";
var success = "_success_8e9dy_172";
var iconImage = "_iconImage_8e9dy_177";
var lightInvert$1 = "_lightInvert_8e9dy_184";
var iconFallback = "_iconFallback_8e9dy_197";
var label$2 = "_label_8e9dy_202";
var swipe$1 = "_swipe_8e9dy_215";
var WorkflowPreviewNode_vue_vue_type_style_index_0_lang_module_default = {
	node,
	iconWrapper,
	trigger,
	running,
	"border-rotate": "_border-rotate_8e9dy_1",
	success,
	iconImage,
	lightInvert: lightInvert$1,
	iconFallback,
	label: label$2,
	swipe: swipe$1
};
var WorkflowPreviewNode_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowPreviewNode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowPreviewNode_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/components/visualizations/SlackMessageVisualization.vue?vue&type=script&setup=true&lang.ts
var APPEAR_DELAY_MS$3 = 200;
var COMPLETE_DELAY_MS$1 = 600;
var SlackMessageVisualization_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SlackMessageVisualization",
	props: {
		active: { type: Boolean },
		sender: { default: "n8n Bot" },
		message: { default: "Urgent ticket: Login page broken" }
	},
	emits: ["complete"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const visible = ref(false);
		let timers = [];
		function clearTimers() {
			for (const t of timers) clearTimeout(t);
			timers = [];
		}
		function runAnimation() {
			visible.value = false;
			timers.push(setTimeout(() => {
				visible.value = true;
			}, APPEAR_DELAY_MS$3));
			timers.push(setTimeout(() => {
				emit("complete");
			}, APPEAR_DELAY_MS$3 + COMPLETE_DELAY_MS$1));
		}
		watch(() => props.active, (val) => {
			if (val) runAnimation();
			else clearTimers();
		}, { immediate: true });
		onUnmounted(clearTimers);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.card, visible.value && _ctx.$style.cardVisible]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, [createBaseVNode("img", {
				class: normalizeClass(_ctx.$style.avatarIcon),
				src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23fff' fill-rule='evenodd' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 150.852 150.852'%3E%3Cuse xlink:href='%23a' x='.926' y='.926'/%3E%3Csymbol id='a' overflow='visible'%3E%3Cg stroke-width='1.852'%3E%3Cpath fill='%23e01e5a' stroke='%23e01e5a' d='M40.741 93.55c0-8.735 6.607-15.772 14.815-15.772s14.815 7.037 14.815 15.772v38.824c0 8.737-6.607 15.774-14.815 15.774s-14.815-7.037-14.815-15.772z'/%3E%3Cpath fill='%23ecb22d' stroke='%23ecb22d' d='M93.55 107.408c-8.735 0-15.772-6.607-15.772-14.815s7.037-14.815 15.772-14.815h38.826c8.735 0 15.772 6.607 15.772 14.815s-7.037 14.815-15.772 14.815z'/%3E%3Cpath fill='%232fb67c' stroke='%232fb67c' d='M77.778 15.772C77.778 7.037 84.385 0 92.593 0s14.815 7.037 14.815 15.772v38.826c0 8.735-6.607 15.772-14.815 15.772s-14.815-7.037-14.815-15.772z'/%3E%3Cpath fill='%2336c5f1' stroke='%2336c5f1' d='M15.772 70.371C7.037 70.371 0 63.763 0 55.556s7.037-14.815 15.772-14.815h38.826c8.735 0 15.772 6.607 15.772 14.815s-7.037 14.815-15.772 14.815z'/%3E%3Cg stroke-linejoin='miter'%3E%3Cpath fill='%23ecb22d' stroke='%23ecb22d' d='M77.778 133.333c0 8.208 6.607 14.815 14.815 14.815s14.815-6.607 14.815-14.815-6.607-14.815-14.815-14.815H77.778z'/%3E%3Cpath fill='%232fb67c' stroke='%232fb67c' d='M133.334 70.371h-14.815V55.556c0-8.207 6.607-14.815 14.815-14.815s14.815 6.607 14.815 14.815-6.607 14.815-14.815 14.815z'/%3E%3Cpath fill='%23e01e5a' stroke='%23e01e5a' d='M14.815 77.778H29.63v14.815c0 8.207-6.607 14.815-14.815 14.815S0 100.8 0 92.593s6.607-14.815 14.815-14.815z'/%3E%3Cpath fill='%2336c5f1' stroke='%2336c5f1' d='M70.371 14.815V29.63H55.556c-8.207 0-14.815-6.607-14.815-14.815S47.348 0 55.556 0s14.815 6.607 14.815 14.815z'/%3E%3C/g%3E%3C/g%3E%3C/symbol%3E%3C/svg%3E",
				alt: ""
			}, null, 2)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.sender) }, toDisplayString(props.sender), 3)], 2), createBaseVNode("p", { class: normalizeClass(_ctx.$style.message) }, toDisplayString(props.message), 3)], 2);
		};
	}
});
var SlackMessageVisualization_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1omps_125",
	cardVisible: "_cardVisible_1omps_139",
	header: "_header_1omps_144",
	avatar: "_avatar_1omps_150",
	avatarIcon: "_avatarIcon_1omps_162",
	sender: "_sender_1omps_167",
	message: "_message_1omps_173"
};
var SlackMessageVisualization_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SlackMessageVisualization_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SlackMessageVisualization_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/workflows/score-my-leads.ts
var SALESFORCE_ICON_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23fff' fill-rule='evenodd' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 75 53'%3E%3Cuse xlink:href='%23a' x='.5' y='.5'/%3E%3Csymbol id='a' overflow='visible'%3E%3Cg fill-rule='nonzero' stroke='none'%3E%3Cpath fill='%2300a1e0' d='M30.777 5.653c2.4-2.476 5.72-4.04 9.392-4.04 4.895 0 9.136 2.732 11.412 6.773a15.7 15.7 0 0 1 6.46-1.366c8.823 0 15.937 7.2 15.937 16.08s-7.143 16.088-15.937 16.088c-1.08 0-2.134-.114-3.13-.313a11.68 11.68 0 0 1-10.2 5.977 11.75 11.75 0 0 1-5.094-1.167c-2.02 4.753-6.745 8.1-12.238 8.1-5.72 0-10.615-3.614-12.494-8.7-.833.171-1.682.257-2.533.256C5.522 43.341 0 37.763 0 30.847a12.52 12.52 0 0 1 6.176-10.815 14.1 14.1 0 0 1-1.195-5.72C4.955 6.432 11.415 0 19.325 0a14.34 14.34 0 0 1 11.441 5.663'/%3E%3Cpath d='m10.712 26.856.313-.825c.057-.142.142-.085.2-.057l.256.17a3.53 3.53 0 0 0 1.964.57c.655 0 1.08-.342 1.08-.825v-.028c0-.512-.626-.7-1.366-.94l-.17-.057c-.996-.285-2.078-.7-2.078-1.964v-.028c0-1.195.968-2.05 2.362-2.05h.142c.825 0 1.594.228 2.163.598.057.028.114.085.085.17l-.313.825c-.057.142-.2.057-.2.057a4.3 4.3 0 0 0-1.935-.484c-.598 0-.968.313-.968.74v.028c0 .484.655.7 1.395.94l.142.028c.996.313 2.05.74 2.05 1.964v.028c0 1.3-.94 2.106-2.448 2.106-.74 0-1.45-.114-2.22-.512-.142-.085-.285-.142-.427-.256-.028-.057-.085-.085-.028-.2zm22.2 0 .313-.825c.057-.142.17-.085.2-.057l.256.17a3.53 3.53 0 0 0 1.964.57c.655 0 1.08-.342 1.08-.825v-.028c0-.512-.626-.7-1.366-.94l-.17-.057c-.996-.285-2.078-.7-2.078-1.964v-.028c0-1.195.968-2.05 2.362-2.05h.142c.825 0 1.594.228 2.163.598.057.028.114.085.085.17l-.313.825c-.057.142-.2.057-.2.057a4.3 4.3 0 0 0-1.935-.484c-.598 0-.968.313-.968.74v.028c0 .484.655.7 1.395.94l.142.028c.996.313 2.05.74 2.05 1.964v.028c0 1.3-.94 2.106-2.448 2.106-.74 0-1.45-.114-2.22-.512-.142-.085-.285-.142-.427-.256 0-.057-.057-.085-.028-.2zm16.45-3.9c.114.427.2.882.2 1.366s-.057.94-.2 1.366a2.8 2.8 0 0 1-.57 1.1 2.75 2.75 0 0 1-.968.74q-.597.255-1.366.256c-.769.001-.968-.085-1.366-.256s-.7-.427-.968-.74a3 3 0 0 1-.57-1.1c-.115-.417-.2-.882-.2-1.366s.057-.94.2-1.366c.114-.427.313-.797.57-1.1a2.75 2.75 0 0 1 .968-.74 3.4 3.4 0 0 1 1.366-.285c.512 0 .968.085 1.366.285.398.17.7.427.968.74a3 3 0 0 1 .57 1.1m-1.28 1.338c0-.74-.142-1.3-.398-1.708s-.683-.598-1.224-.598c-.57 0-.968.2-1.224.598s-.398.968-.398 1.708.142 1.3.398 1.736c.256.398.655.598 1.224.598s.968-.2 1.224-.598c.285-.398.398-.996.398-1.736m11.697 2.134.313.854c.028.114-.057.142-.057.142-.484.2-1.138.313-1.793.313q-1.65 0-2.504-.94c-.854-.94-.854-1.48-.854-2.533 0-.484.057-.94.2-1.366s.342-.797.626-1.1a3 3 0 0 1 1.025-.74 3.6 3.6 0 0 1 1.423-.285 8 8 0 0 1 .939.057c.285.057.683.142.854.228.028 0 .114.057.085.142l-.313.854c-.057.142-.142.085-.142.085a4 4 0 0 0-1.338-.2c-.626 0-1.1.2-1.395.626-.313.398-.484.94-.484 1.68 0 .797.2 1.366.54 1.736s.825.54 1.45.54c.256 0 .484-.028.683-.057s.398-.085.598-.17c-.028.057.085.028.142.142zm6.46-3.728c.285.968.142 1.793.114 1.85 0 .114-.114.114-.114.114h-4.297c.028.655.17 1.1.512 1.423.313.313.797.512 1.48.512 1.025 0 1.45-.2 1.765-.313 0 0 .114-.028.17.085l.285.797c.057.142 0 .17-.028.2-.256.142-.9.427-2.163.427-.598 0-1.138-.085-1.565-.256s-.797-.398-1.08-.7-.484-.683-.626-1.08c-.142-.427-.2-.882-.2-1.366s.057-.94.2-1.366c.114-.427.313-.797.57-1.1s.598-.57.996-.74c.398-.2.882-.285 1.423-.285.455 0 .882.085 1.224.256.256.114.54.313.825.626.142.114.398.54.512.94zm-4.27.9h3.045c-.028-.398-.114-.74-.285-1.025-.256-.398-.626-.626-1.195-.626s-.968.228-1.224.626c-.17.256-.256.598-.342 1.025zm-30.082-.9c.285.968.142 1.793.142 1.85 0 .114-.114.114-.114.114h-4.297c.028.655.17 1.1.512 1.423.313.313.797.512 1.48.512 1.025 0 1.45-.2 1.765-.313 0 0 .114-.028.17.085l.285.797c.057.142 0 .17-.028.2-.256.142-.9.427-2.163.427-.598 0-1.138-.085-1.565-.256s-.797-.398-1.08-.7-.484-.683-.626-1.08c-.142-.427-.2-.882-.2-1.366s.057-.94.2-1.366c.114-.427.313-.797.57-1.1s.598-.57.996-.74c.398-.2.882-.285 1.423-.285.455 0 .882.085 1.224.256.256.114.54.313.825.626.114.114.398.54.484.94zm-4.27.9h3.074c-.028-.398-.114-.74-.285-1.025-.256-.398-.626-.626-1.195-.626s-.968.228-1.224.626c-.2.256-.285.598-.37 1.025m-7.542-.228.7.085v-.17c0-.57-.114-.854-.342-1.025s-.598-.285-1.053-.285c0 0-1.053 0-1.878.427-.028.028-.057.028-.057.028s-.114.028-.142-.057l-.313-.825c-.057-.114.028-.17.028-.17.398-.313 1.3-.484 1.3-.484a8 8 0 0 1 1.138-.114q1.28 0 1.964.598c.684.598.683 1.025.683 1.907v3.927s0 .114-.085.142c0 0-.17.057-.313.085l-1.08.2a6.6 6.6 0 0 1-1.3.114c-.427 0-.797-.028-1.138-.114a2.8 2.8 0 0 1-.882-.37 1.9 1.9 0 0 1-.57-.683c-.142-.256-.2-.598-.2-.968a2.26 2.26 0 0 1 .228-.996c.143-.296.37-.512.626-.7s.57-.313.882-.427a4.3 4.3 0 0 1 1.053-.142l.74.028zm-1.708 3.017s.398.313 1.252.256c.626-.028 1.167-.142 1.167-.142v-1.955s-.54-.085-1.167-.085c-.882 0-1.252.313-1.252.313-.256.17-.37.455-.37.825a1.1 1.1 0 0 0 .142.569c.028.057.057.114.228.228zm36.286-5.208c-.028.114-.256.7-.313.9-.028.085-.085.114-.17.114 0 0-.256-.057-.484-.057a2.3 2.3 0 0 0-.569.085c-.2.057-.37.17-.54.313s-.285.37-.37.626-.142.683-.142 1.138v3.187c0 .085-.057.142-.142.142h-1.128c-.085 0-.142-.057-.142-.142v-6.4c0-.085.057-.142.114-.142h1.1c.085 0 .114.057.114.142v.512a1.9 1.9 0 0 1 .7-.54c.245-.113.57-.2 1.1-.17.285.028.655.085.7.114.114.028.17.057.142.17zm-10.56-2.96c.028 0 .114.057.085.142l-.342.9c-.028.057-.057.114-.2.057-.028 0-.085-.028-.228-.057-.085-.028-.228-.028-.342-.028-.17 0-.313.028-.455.057s-.256.114-.37.228-.228.256-.313.455a4.3 4.3 0 0 0-.228.968h1.366c.114 0 .142.057.142.142l-.17.882c-.028.142-.142.114-.142.114h-1.423l-.9 5.493c-.114.57-.228 1.053-.37 1.45s-.313.683-.57.968c-.228.256-.484.455-.797.54-.285.114-.655.17-1.053.17-.2 0-.398 0-.626-.057a1.6 1.6 0 0 1-.398-.114c-.057-.028-.085-.085-.057-.17l.293-.863c.057-.114.142-.057.142-.057l.228.085c.114.028.228.028.342.028q.3 0 .512-.085c.17-.057.285-.17.398-.313s.2-.342.313-.598q.158-.519.256-1.053l.968-5.38h-.94c-.114 0-.142-.057-.142-.142l.17-.882c.028-.142.142-.114.142-.114h.968l.057-.285c.142-.854.427-1.508.854-1.935s1.053-.655 1.82-.655q.302.003.598.057c.114-.028.256 0 .398.057zm-19.182 9.25c0 .085-.057.142-.114.142h-1.138c-.085 0-.114-.057-.114-.142v-9.136c0-.057.057-.142.114-.142h1.138c.085 0 .114.057.114.142z'/%3E%3C/g%3E%3C/symbol%3E%3C/svg%3E";
var scoreMyLeadsWorkflow = {
	nodes: [
		{
			id: "salesforce-trigger",
			label: "New lead",
			icon: {
				type: "file",
				src: SALESFORCE_ICON_SVG
			},
			position: {
				x: 0,
				y: 120
			}
		},
		{
			id: "lemlist",
			label: "Enrich lead",
			icon: {
				type: "file",
				src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.123 0h25.754C36.811 0 40 3.189 40 7.123v25.754C40 36.811 36.811 40 32.877 40H7.123C3.189 40 0 36.811 0 32.877V7.123C0 3.189 3.189 0 7.123 0z' fill='%23316BFF'/%3E%3Cpath d='M18.907 10.714h9.328c.58 0 1.05.47 1.05 1.05v1.472c0 .58-.47 1.05-1.05 1.05h-9.328c-.58 0-1.05-.47-1.05-1.05v-1.472c0-.58.47-1.05 1.05-1.05z' fill='white'/%3E%3Cpath d='M18.907 18.215h7.662c.58 0 1.05.47 1.05 1.05v1.472c0 .58-.47 1.05-1.05 1.05h-7.662c-.58 0-1.05-.47-1.05-1.05v-1.05c0-.58.47-1.05 1.05-1.472z' fill='white'/%3E%3Cpath d='M29.286 26.764v1.471c0 .58-.47 1.05-1.05 1.05H14.827c-2.207-.14-3.971-1.905-4.113-4.112V11.764c0-.58.47-1.05 1.05-1.05h1.472c.58 0 1.05.47 1.05 1.05v11.22c0 1.509 1.221 2.73 2.73 2.73h11.22c.58 0 1.05.47 1.05 1.05z' fill='white'/%3E%3C/svg%3E"
			},
			position: {
				x: 240,
				y: 120
			}
		},
		{
			id: "score",
			label: "Score",
			icon: {
				type: "icon",
				name: "node:code"
			},
			iconColor: "amber",
			position: {
				x: 480,
				y: 120
			}
		},
		{
			id: "if-qualified",
			label: "Is Qualified?",
			icon: {
				type: "icon",
				name: "node:if"
			},
			iconColor: "green",
			position: {
				x: 720,
				y: 120
			}
		},
		{
			id: "update-lead",
			label: "Update Lead",
			icon: {
				type: "file",
				src: SALESFORCE_ICON_SVG
			},
			position: {
				x: 960,
				y: 0
			}
		},
		{
			id: "notify-sales",
			label: "Notify sales",
			icon: {
				type: "file",
				src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23fff' fill-rule='evenodd' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 150.852 150.852'%3E%3Cuse xlink:href='%23a' x='.926' y='.926'/%3E%3Csymbol id='a' overflow='visible'%3E%3Cg stroke-width='1.852'%3E%3Cpath fill='%23e01e5a' stroke='%23e01e5a' d='M40.741 93.55c0-8.735 6.607-15.772 14.815-15.772s14.815 7.037 14.815 15.772v38.824c0 8.737-6.607 15.774-14.815 15.774s-14.815-7.037-14.815-15.772z'/%3E%3Cpath fill='%23ecb22d' stroke='%23ecb22d' d='M93.55 107.408c-8.735 0-15.772-6.607-15.772-14.815s7.037-14.815 15.772-14.815h38.826c8.735 0 15.772 6.607 15.772 14.815s-7.037 14.815-15.772 14.815z'/%3E%3Cpath fill='%232fb67c' stroke='%232fb67c' d='M77.778 15.772C77.778 7.037 84.385 0 92.593 0s14.815 7.037 14.815 15.772v38.826c0 8.735-6.607 15.772-14.815 15.772s-14.815-7.037-14.815-15.772z'/%3E%3Cpath fill='%2336c5f1' stroke='%2336c5f1' d='M15.772 70.371C7.037 70.371 0 63.763 0 55.556s7.037-14.815 15.772-14.815h38.826c8.735 0 15.772 6.607 15.772 14.815s-7.037 14.815-15.772 14.815z'/%3E%3Cg stroke-linejoin='miter'%3E%3Cpath fill='%23ecb22d' stroke='%23ecb22d' d='M77.778 133.333c0 8.208 6.607 14.815 14.815 14.815s14.815-6.607 14.815-14.815-6.607-14.815-14.815-14.815H77.778z'/%3E%3Cpath fill='%232fb67c' stroke='%232fb67c' d='M133.334 70.371h-14.815V55.556c0-8.207 6.607-14.815 14.815-14.815s14.815 6.607 14.815 14.815-6.607 14.815-14.815 14.815z'/%3E%3Cpath fill='%23e01e5a' stroke='%23e01e5a' d='M14.815 77.778H29.63v14.815c0 8.207-6.607 14.815-14.815 14.815S0 100.8 0 92.593s6.607-14.815 14.815-14.815z'/%3E%3Cpath fill='%2336c5f1' stroke='%2336c5f1' d='M70.371 14.815V29.63H55.556c-8.207 0-14.815-6.607-14.815-14.815S47.348 0 55.556 0s14.815 6.607 14.815 14.815z'/%3E%3C/g%3E%3C/g%3E%3C/symbol%3E%3C/svg%3E"
			},
			position: {
				x: 960,
				y: 240
			}
		}
	],
	connections: [
		{
			source: "salesforce-trigger",
			target: "lemlist"
		},
		{
			source: "lemlist",
			target: "score"
		},
		{
			source: "score",
			target: "if-qualified"
		},
		{
			source: "if-qualified",
			target: "update-lead"
		},
		{
			source: "if-qualified",
			target: "notify-sales"
		}
	],
	inputVisualization: {
		type: "salesforce-card",
		props: {
			title: "New lead",
			subtitle: "John Doe"
		}
	},
	outputVisualization: [{
		type: "salesforce-card",
		targetNodeId: "update-lead",
		props: {
			title: "Lead scored",
			subtitle: "John Doe scored to hot lead"
		}
	}, {
		type: "slack-message",
		targetNodeId: "notify-sales",
		props: {
			sender: "New qualified lead",
			message: "New hot lead: John Doe"
		}
	}],
	crmCycle: {
		nodeIds: ["salesforce-trigger", "update-lead"],
		variants: [
			{
				icon: {
					type: "file",
					src: SALESFORCE_ICON_SVG
				},
				label: "Salesforce"
			},
			{
				icon: {
					type: "file",
					src: "data:image/svg+xml,%3Csvg xmlns:xlink='http://www.w3.org/1999/xlink' width='60' height='60' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask001' mask-type='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='32' height='32' fill='%2326292C'%3E%3Cpath d='M2.73694 0H29.2631C30.7746 0 32 1.22507 32 2.73695V29.2631C32 30.7746 30.7749 32 29.2631 32H2.73694C1.22537 32 0 30.7749 0 29.2631V2.73695C0 1.22537 1.22508 0 2.73694 0Z' fill='%2326292C'%3E%3C/path%3E%3C/mask%3E%3Cg mask='url(%23mask001)' fill='%2326292C'%3E%3Cpath d='M2.73694 0H29.2631C30.7746 0 32 1.22507 32 2.73695V29.2631C32 30.7746 30.7749 32 29.2631 32H2.73694C1.22537 32 0 30.7749 0 29.2631V2.73695C0 1.22537 1.22508 0 2.73694 0Z' fill='%2326292C'%3E%3C/path%3E%3C/g%3E%3Cmask id='mask1' mask-type='alpha' maskUnits='userSpaceOnUse' x='7' y='4' width='18' height='24' fill='%2326292C'%3E%3Cpath d='M13.3348 13.1766C13.3348 15.3194 14.4219 17.6311 16.8141 17.6311C18.5881 17.6311 20.3819 16.2461 20.3819 13.1451C20.3819 10.4264 18.9718 8.60127 16.8731 8.60127C15.163 8.60127 13.3348 9.80258 13.3348 13.1766ZM17.7158 4.63159C22.0051 4.63159 24.8891 8.02873 24.8891 13.0856C24.8891 18.0629 21.8509 21.5378 17.5076 21.5378C15.4368 21.5378 14.1103 20.6509 13.4168 20.0089C13.4217 20.1611 13.425 20.3316 13.425 20.5136V27.2632H8.98164V9.2797C8.98164 9.01824 8.89802 8.93552 8.63897 8.93552H7.11085V4.99729H10.8393C12.556 4.99729 12.9954 5.87097 13.079 6.54444C13.7759 5.76342 15.2204 4.63159 17.7158 4.63159Z' fill='%2326292C'%3E%3C/path%3E%3C/mask%3E%3Cg mask='url(%23mask1)' fill='%2326292C'%3E%3Cpath d='M13.3348 13.1766C13.3348 15.3194 14.4219 17.6311 16.8141 17.6311C18.5881 17.6311 20.3819 16.2461 20.3819 13.1451C20.3819 10.4264 18.9718 8.60127 16.8731 8.60127C15.163 8.60127 13.3348 9.80258 13.3348 13.1766ZM17.7158 4.63159C22.0051 4.63159 24.8891 8.02873 24.8891 13.0856C24.8891 18.0629 21.8509 21.5378 17.5076 21.5378C15.4368 21.5378 14.1103 20.6509 13.4168 20.0089C13.4217 20.1611 13.425 20.3316 13.425 20.5136V27.2632H8.98164V9.2797C8.98164 9.01824 8.89802 8.93552 8.63897 8.93552H7.11085V4.99729H10.8393C12.556 4.99729 12.9954 5.87097 13.079 6.54444C13.7759 5.76342 15.2204 4.63159 17.7158 4.63159Z' fill='%23FFFFFF'%3E%3C/path%3E%3C/g%3E%3C/svg%3E"
				},
				label: "Pipedrive"
			},
			{
				icon: {
					type: "file",
					src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23fff' fill-rule='evenodd' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 62.883 69.883'%3E%3Cuse xlink:href='%23a' x='2.442' y='2.442'/%3E%3Csymbol id='a' overflow='visible'%3E%3Cpath fill='%23f8761f' fill-rule='nonzero' stroke='none' d='M55.504 30.401a16.26 16.26 0 0 0-5.904-5.864c-1.865-1.084-3.794-1.773-5.972-2.07v-7.798a5.71 5.71 0 0 0 3.525-5.357 5.86 5.86 0 0 0-5.859-5.889 5.91 5.91 0 0 0-5.908 5.889c0 2.393 1.27 4.434 3.452 5.357v7.754a17 17 0 0 0-5.195 1.631L12.769 8.247c.146-.552.273-1.123.273-1.724A6.52 6.52 0 0 0 6.519 0 6.52 6.52 0 0 0 0 6.524a6.523 6.523 0 0 0 6.524 6.524 6.47 6.47 0 0 0 3.35-.952l1.367 1.035 18.726 13.501c-.991.908-1.914 1.943-2.651 3.105-1.494 2.368-2.407 4.971-2.407 7.813v.586a16.4 16.4 0 0 0 1.025 5.645C26.5 45.324 27.33 46.73 28.361 48l-6.221 6.235a5.01 5.01 0 0 0-5.298 1.162c-.947.942-1.48 2.227-1.475 3.565s.527 2.612 1.479 3.564 2.227 1.48 3.565 1.48a5 5 0 0 0 3.565-1.48 5.05 5.05 0 0 0 1.475-3.564 5 5 0 0 0-.234-1.514l6.426-6.426a16 16 0 0 0 2.856 1.563 16.7 16.7 0 0 0 6.685 1.406h.439a15.76 15.76 0 0 0 7.627-1.929 15.77 15.77 0 0 0 5.977-5.63c1.499-2.393 2.319-5.044 2.319-7.959v-.146c0-2.866-.664-5.508-2.051-7.93zm-7.847 13.487c-1.743 1.938-3.75 3.135-6.016 3.135h-.43c-1.294 0-2.564-.356-3.799-1.011a8.8 8.8 0 0 1-3.33-3.032c-.898-1.27-1.387-2.656-1.387-4.126v-.439c0-1.445.278-2.817.977-4.111.747-1.465 1.758-2.515 3.101-3.389a7.6 7.6 0 0 1 4.297-1.294h.147c1.416 0 2.769.278 4.038.928a8.56 8.56 0 0 1 3.174 2.886 9.2 9.2 0 0 1 1.421 4.053l.034.913c0 1.987-.762 3.828-2.28 5.498z'/%3E%3C/symbol%3E%3C/svg%3E"
				},
				label: "HubSpot"
			}
		]
	}
};
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/components/visualizations/SalesforceCardVisualization.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["src"];
var APPEAR_DELAY_MS$2 = 200;
var COMPLETE_DELAY_MS = 600;
var SalesforceCardVisualization_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SalesforceCardVisualization",
	props: {
		active: { type: Boolean },
		title: { default: "New lead" },
		subtitle: { default: "John Doe" },
		slideFrom: { default: "right" },
		icon: {},
		iconOverride: {},
		lightInvert: { type: Boolean }
	},
	emits: ["complete"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const currentIcon = computed(() => props.iconOverride ?? props.icon ?? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23fff' fill-rule='evenodd' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 75 53'%3E%3Cuse xlink:href='%23a' x='.5' y='.5'/%3E%3Csymbol id='a' overflow='visible'%3E%3Cg fill-rule='nonzero' stroke='none'%3E%3Cpath fill='%2300a1e0' d='M30.777 5.653c2.4-2.476 5.72-4.04 9.392-4.04 4.895 0 9.136 2.732 11.412 6.773a15.7 15.7 0 0 1 6.46-1.366c8.823 0 15.937 7.2 15.937 16.08s-7.143 16.088-15.937 16.088c-1.08 0-2.134-.114-3.13-.313a11.68 11.68 0 0 1-10.2 5.977 11.75 11.75 0 0 1-5.094-1.167c-2.02 4.753-6.745 8.1-12.238 8.1-5.72 0-10.615-3.614-12.494-8.7-.833.171-1.682.257-2.533.256C5.522 43.341 0 37.763 0 30.847a12.52 12.52 0 0 1 6.176-10.815 14.1 14.1 0 0 1-1.195-5.72C4.955 6.432 11.415 0 19.325 0a14.34 14.34 0 0 1 11.441 5.663'/%3E%3Cpath d='m10.712 26.856.313-.825c.057-.142.142-.085.2-.057l.256.17a3.53 3.53 0 0 0 1.964.57c.655 0 1.08-.342 1.08-.825v-.028c0-.512-.626-.7-1.366-.94l-.17-.057c-.996-.285-2.078-.7-2.078-1.964v-.028c0-1.195.968-2.05 2.362-2.05h.142c.825 0 1.594.228 2.163.598.057.028.114.085.085.17l-.313.825c-.057.142-.2.057-.2.057a4.3 4.3 0 0 0-1.935-.484c-.598 0-.968.313-.968.74v.028c0 .484.655.7 1.395.94l.142.028c.996.313 2.05.74 2.05 1.964v.028c0 1.3-.94 2.106-2.448 2.106-.74 0-1.45-.114-2.22-.512-.142-.085-.285-.142-.427-.256-.028-.057-.085-.085-.028-.2zm22.2 0 .313-.825c.057-.142.17-.085.2-.057l.256.17a3.53 3.53 0 0 0 1.964.57c.655 0 1.08-.342 1.08-.825v-.028c0-.512-.626-.7-1.366-.94l-.17-.057c-.996-.285-2.078-.7-2.078-1.964v-.028c0-1.195.968-2.05 2.362-2.05h.142c.825 0 1.594.228 2.163.598.057.028.114.085.085.17l-.313.825c-.057.142-.2.057-.2.057a4.3 4.3 0 0 0-1.935-.484c-.598 0-.968.313-.968.74v.028c0 .484.655.7 1.395.94l.142.028c.996.313 2.05.74 2.05 1.964v.028c0 1.3-.94 2.106-2.448 2.106-.74 0-1.45-.114-2.22-.512-.142-.085-.285-.142-.427-.256 0-.057-.057-.085-.028-.2zm16.45-3.9c.114.427.2.882.2 1.366s-.057.94-.2 1.366a2.8 2.8 0 0 1-.57 1.1 2.75 2.75 0 0 1-.968.74q-.597.255-1.366.256c-.769.001-.968-.085-1.366-.256s-.7-.427-.968-.74a3 3 0 0 1-.57-1.1c-.115-.417-.2-.882-.2-1.366s.057-.94.2-1.366c.114-.427.313-.797.57-1.1a2.75 2.75 0 0 1 .968-.74 3.4 3.4 0 0 1 1.366-.285c.512 0 .968.085 1.366.285.398.17.7.427.968.74a3 3 0 0 1 .57 1.1m-1.28 1.338c0-.74-.142-1.3-.398-1.708s-.683-.598-1.224-.598c-.57 0-.968.2-1.224.598s-.398.968-.398 1.708.142 1.3.398 1.736c.256.398.655.598 1.224.598s.968-.2 1.224-.598c.285-.398.398-.996.398-1.736m11.697 2.134.313.854c.028.114-.057.142-.057.142-.484.2-1.138.313-1.793.313q-1.65 0-2.504-.94c-.854-.94-.854-1.48-.854-2.533 0-.484.057-.94.2-1.366s.342-.797.626-1.1a3 3 0 0 1 1.025-.74 3.6 3.6 0 0 1 1.423-.285 8 8 0 0 1 .939.057c.285.057.683.142.854.228.028 0 .114.057.085.142l-.313.854c-.057.142-.142.085-.142.085a4 4 0 0 0-1.338-.2c-.626 0-1.1.2-1.395.626-.313.398-.484.94-.484 1.68 0 .797.2 1.366.54 1.736s.825.54 1.45.54c.256 0 .484-.028.683-.057s.398-.085.598-.17c-.028.057.085.028.142.142zm6.46-3.728c.285.968.142 1.793.114 1.85 0 .114-.114.114-.114.114h-4.297c.028.655.17 1.1.512 1.423.313.313.797.512 1.48.512 1.025 0 1.45-.2 1.765-.313 0 0 .114-.028.17.085l.285.797c.057.142 0 .17-.028.2-.256.142-.9.427-2.163.427-.598 0-1.138-.085-1.565-.256s-.797-.398-1.08-.7-.484-.683-.626-1.08c-.142-.427-.2-.882-.2-1.366s.057-.94.2-1.366c.114-.427.313-.797.57-1.1s.598-.57.996-.74c.398-.2.882-.285 1.423-.285.455 0 .882.085 1.224.256.256.114.54.313.825.626.142.114.398.54.512.94zm-4.27.9h3.045c-.028-.398-.114-.74-.285-1.025-.256-.398-.626-.626-1.195-.626s-.968.228-1.224.626c-.17.256-.256.598-.342 1.025zm-30.082-.9c.285.968.142 1.793.142 1.85 0 .114-.114.114-.114.114h-4.297c.028.655.17 1.1.512 1.423.313.313.797.512 1.48.512 1.025 0 1.45-.2 1.765-.313 0 0 .114-.028.17.085l.285.797c.057.142 0 .17-.028.2-.256.142-.9.427-2.163.427-.598 0-1.138-.085-1.565-.256s-.797-.398-1.08-.7-.484-.683-.626-1.08c-.142-.427-.2-.882-.2-1.366s.057-.94.2-1.366c.114-.427.313-.797.57-1.1s.598-.57.996-.74c.398-.2.882-.285 1.423-.285.455 0 .882.085 1.224.256.256.114.54.313.825.626.114.114.398.54.484.94zm-4.27.9h3.074c-.028-.398-.114-.74-.285-1.025-.256-.398-.626-.626-1.195-.626s-.968.228-1.224.626c-.2.256-.285.598-.37 1.025m-7.542-.228.7.085v-.17c0-.57-.114-.854-.342-1.025s-.598-.285-1.053-.285c0 0-1.053 0-1.878.427-.028.028-.057.028-.057.028s-.114.028-.142-.057l-.313-.825c-.057-.114.028-.17.028-.17.398-.313 1.3-.484 1.3-.484a8 8 0 0 1 1.138-.114q1.28 0 1.964.598c.684.598.683 1.025.683 1.907v3.927s0 .114-.085.142c0 0-.17.057-.313.085l-1.08.2a6.6 6.6 0 0 1-1.3.114c-.427 0-.797-.028-1.138-.114a2.8 2.8 0 0 1-.882-.37 1.9 1.9 0 0 1-.57-.683c-.142-.256-.2-.598-.2-.968a2.26 2.26 0 0 1 .228-.996c.143-.296.37-.512.626-.7s.57-.313.882-.427a4.3 4.3 0 0 1 1.053-.142l.74.028zm-1.708 3.017s.398.313 1.252.256c.626-.028 1.167-.142 1.167-.142v-1.955s-.54-.085-1.167-.085c-.882 0-1.252.313-1.252.313-.256.17-.37.455-.37.825a1.1 1.1 0 0 0 .142.569c.028.057.057.114.228.228zm36.286-5.208c-.028.114-.256.7-.313.9-.028.085-.085.114-.17.114 0 0-.256-.057-.484-.057a2.3 2.3 0 0 0-.569.085c-.2.057-.37.17-.54.313s-.285.37-.37.626-.142.683-.142 1.138v3.187c0 .085-.057.142-.142.142h-1.128c-.085 0-.142-.057-.142-.142v-6.4c0-.085.057-.142.114-.142h1.1c.085 0 .114.057.114.142v.512a1.9 1.9 0 0 1 .7-.54c.245-.113.57-.2 1.1-.17.285.028.655.085.7.114.114.028.17.057.142.17zm-10.56-2.96c.028 0 .114.057.085.142l-.342.9c-.028.057-.057.114-.2.057-.028 0-.085-.028-.228-.057-.085-.028-.228-.028-.342-.028-.17 0-.313.028-.455.057s-.256.114-.37.228-.228.256-.313.455a4.3 4.3 0 0 0-.228.968h1.366c.114 0 .142.057.142.142l-.17.882c-.028.142-.142.114-.142.114h-1.423l-.9 5.493c-.114.57-.228 1.053-.37 1.45s-.313.683-.57.968c-.228.256-.484.455-.797.54-.285.114-.655.17-1.053.17-.2 0-.398 0-.626-.057a1.6 1.6 0 0 1-.398-.114c-.057-.028-.085-.085-.057-.17l.293-.863c.057-.114.142-.057.142-.057l.228.085c.114.028.228.028.342.028q.3 0 .512-.085c.17-.057.285-.17.398-.313s.2-.342.313-.598q.158-.519.256-1.053l.968-5.38h-.94c-.114 0-.142-.057-.142-.142l.17-.882c.028-.142.142-.114.142-.114h.968l.057-.285c.142-.854.427-1.508.854-1.935s1.053-.655 1.82-.655q.302.003.598.057c.114-.028.256 0 .398.057zm-19.182 9.25c0 .085-.057.142-.114.142h-1.138c-.085 0-.114-.057-.114-.142v-9.136c0-.057.057-.142.114-.142h1.138c.085 0 .114.057.114.142z'/%3E%3C/g%3E%3C/symbol%3E%3C/svg%3E");
		const emit = __emit;
		const visible = ref(false);
		let timers = [];
		function clearTimers() {
			for (const t of timers) clearTimeout(t);
			timers = [];
		}
		function runAnimation() {
			visible.value = false;
			timers.push(setTimeout(() => {
				visible.value = true;
			}, APPEAR_DELAY_MS$2));
			timers.push(setTimeout(() => {
				emit("complete");
			}, APPEAR_DELAY_MS$2 + COMPLETE_DELAY_MS));
		}
		watch(() => props.active, (val) => {
			if (val) runAnimation();
			else clearTimers();
		}, { immediate: true });
		onUnmounted(clearTimers);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				_ctx.$style.card,
				visible.value && _ctx.$style.cardVisible,
				props.slideFrom === "left" && _ctx.$style.slideLeft
			]) }, [createVNode(Transition, {
				name: _ctx.$style.swipe,
				mode: "out-in"
			}, {
				default: withCtx(() => [(openBlock(), createElementBlock("img", {
					key: currentIcon.value,
					class: normalizeClass([_ctx.$style.icon, props.lightInvert && _ctx.$style.lightInvert]),
					src: currentIcon.value,
					alt: ""
				}, null, 10, _hoisted_1$4))]),
				_: 1
			}, 8, ["name"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(props.title), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.subtitle) }, toDisplayString(props.subtitle), 3)], 2)], 2);
		};
	}
});
var SalesforceCardVisualization_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1myro_125",
	slideLeft: "_slideLeft_1myro_139",
	cardVisible: "_cardVisible_1myro_143",
	icon: "_icon_1myro_148",
	lightInvert: "_lightInvert_1myro_154",
	swipe: "_swipe_1myro_167",
	content: "_content_1myro_182",
	title: "_title_1myro_189",
	subtitle: "_subtitle_1myro_196"
};
var SalesforceCardVisualization_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SalesforceCardVisualization_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SalesforceCardVisualization_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/components/visualizations/InvoiceSpreadsheetVisualization.vue?vue&type=script&setup=true&lang.ts
var APPEAR_DELAY_MS$1 = 200;
var ROW_DELAY_MS = 450;
var InvoiceSpreadsheetVisualization_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InvoiceSpreadsheetVisualization",
	props: { active: { type: Boolean } },
	emits: ["complete"],
	setup(__props, { emit: __emit }) {
		const CHECK_DELAY_MS = ROW_DELAY_MS + 350;
		const COMPLETE_DELAY_MS = CHECK_DELAY_MS + 650;
		const props = __props;
		const emit = __emit;
		const visible = ref(false);
		const rowVisible = ref(false);
		const checkVisible = ref(false);
		let timers = [];
		function clearTimers() {
			for (const t of timers) clearTimeout(t);
			timers = [];
		}
		function runAnimation() {
			visible.value = false;
			rowVisible.value = false;
			checkVisible.value = false;
			const base = APPEAR_DELAY_MS$1;
			timers.push(setTimeout(() => {
				visible.value = true;
			}, base));
			timers.push(setTimeout(() => {
				rowVisible.value = true;
			}, base + ROW_DELAY_MS));
			timers.push(setTimeout(() => {
				checkVisible.value = true;
			}, base + CHECK_DELAY_MS));
			timers.push(setTimeout(() => {
				emit("complete");
			}, base + COMPLETE_DELAY_MS));
		}
		watch(() => props.active, (val) => {
			if (val) runAnimation();
			else {
				clearTimers();
				visible.value = false;
				rowVisible.value = false;
				checkVisible.value = false;
			}
		}, { immediate: true });
		onUnmounted(clearTimers);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.card, visible.value && _ctx.$style.cardVisible]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.table) }, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.row, _ctx.$style.rowHeader]) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.cell, _ctx.$style.th]) }, "Invoice", 2),
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.cell, _ctx.$style.th]) }, "Date", 2),
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.cell, _ctx.$style.th]) }, "Discrepancy", 2)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.cell) }, "INV-2024-045", 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.cell) }, "May 14", 2),
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.cell, _ctx.$style.tdMuted]) }, "—", 2)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.cell) }, "INV-2024-046", 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.cell) }, "May 21", 2),
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.cell, _ctx.$style.tdMuted]) }, "—", 2)
				], 2),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.rowCollapse, rowVisible.value && _ctx.$style.rowCollapseOpen]) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.row, _ctx.$style.rowLast]) }, [
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.cell) }, "INV-2024-047", 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.cell) }, "May 29", 2),
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.cell, _ctx.$style.tdDiscrepancy]) }, [checkVisible.value ? (openBlock(), createElementBlock("svg", {
						key: 0,
						viewBox: "0 0 18 18",
						width: "13",
						height: "13",
						class: normalizeClass(_ctx.$style.checkIcon)
					}, [createBaseVNode("path", {
						d: "M2.5 9.5 L7 14 L15.5 4",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2.2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						class: normalizeClass(_ctx.$style.checkPath)
					}, null, 2)], 2)) : createCommentVNode("", true)], 2)
				], 2)], 2)
			], 2)], 2);
		};
	}
});
var InvoiceSpreadsheetVisualization_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_4zziu_125",
	cardVisible: "_cardVisible_4zziu_139",
	table: "_table_4zziu_144",
	row: "_row_4zziu_148",
	rowHeader: "_rowHeader_4zziu_153",
	rowCollapse: "_rowCollapse_4zziu_157",
	rowCollapseOpen: "_rowCollapseOpen_4zziu_163",
	rowLast: "_rowLast_4zziu_167",
	cell: "_cell_4zziu_172",
	th: "_th_4zziu_195",
	tdMuted: "_tdMuted_4zziu_203",
	tdDiscrepancy: "_tdDiscrepancy_4zziu_207",
	checkIcon: "_checkIcon_4zziu_213",
	checkPath: "_checkPath_4zziu_218",
	"draw-check": "_draw-check_4zziu_1"
};
var InvoiceSpreadsheetVisualization_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InvoiceSpreadsheetVisualization_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InvoiceSpreadsheetVisualization_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/components/visualizations/WhatsAppChatVisualization.vue?vue&type=script&setup=true&lang.ts
var APPEAR_DELAY_MS = 200;
var BUBBLE_DELAY_MS = 350;
var WHATSAPP_ICON = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2260%22%20height%3D%2260%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20viewBox%3D%220%200%2048%2048%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m4.868%2043.303%202.694-9.835a18.94%2018.94%200%200%201-2.535-9.489C5.032%2013.514%2013.548%205%2024.014%205a18.87%2018.87%200%200%201%2013.43%205.566A18.87%2018.87%200%200%201%2043%2023.994c-.004%2010.465-8.522%2018.98-18.986%2018.98h-.008a19%2019%200%200%201-9.073-2.311z%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M4.868%2043.803a.5.5%200%200%201-.482-.631l2.639-9.636a19.5%2019.5%200%200%201-2.497-9.556C4.532%2013.238%2013.273%204.5%2024.014%204.5a19.37%2019.37%200%200%201%2013.784%205.713A19.36%2019.36%200%200%201%2043.5%2023.994c-.004%2010.741-8.746%2019.48-19.486%2019.48a19.54%2019.54%200%200%201-9.144-2.277l-9.875%202.589a.5.5%200%200%201-.127.017%22/%3E%3Cpath%20fill%3D%22%23cfd8dc%22%20d%3D%22M24.014%205a18.87%2018.87%200%200%201%2013.43%205.566A18.87%2018.87%200%200%201%2043%2023.994c-.004%2010.465-8.522%2018.98-18.986%2018.98h-.008a19%2019%200%200%201-9.073-2.311l-10.065%202.64%202.694-9.835a18.94%2018.94%200%200%201-2.535-9.489C5.032%2013.514%2013.548%205%2024.014%205m0-1C12.998%204%204.032%2012.962%204.027%2023.979a20%2020%200%200%200%202.461%209.622L3.903%2043.04a.998.998%200%200%200%201.219%201.231l9.687-2.54a20%2020%200%200%200%209.197%202.244c11.024%200%2019.99-8.963%2019.995-19.98A19.86%2019.86%200%200%200%2038.153%209.86%2019.87%2019.87%200%200%200%2024.014%204%22/%3E%3Cpath%20fill%3D%22%2340c351%22%20d%3D%22M35.176%2012.832a15.67%2015.67%200%200%200-11.157-4.626c-8.704%200-15.783%207.076-15.787%2015.774a15.74%2015.74%200%200%200%202.413%208.396l.376.597-1.595%205.821%205.973-1.566.577.342a15.75%2015.75%200%200%200%208.032%202.199h.006c8.698%200%2015.777-7.077%2015.78-15.776a15.68%2015.68%200%200%200-4.618-11.161%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M19.268%2016.045c-.355-.79-.729-.806-1.068-.82-.277-.012-.593-.011-.909-.011s-.83.119-1.265.594-1.661%201.622-1.661%203.956%201.7%204.59%201.937%204.906%203.282%205.259%208.104%207.161c4.007%201.58%204.823%201.266%205.693%201.187s2.807-1.147%203.202-2.255.395-2.057.277-2.255c-.119-.198-.435-.316-.909-.554s-2.807-1.385-3.242-1.543-.751-.237-1.068.238c-.316.474-1.225%201.543-1.502%201.859s-.554.357-1.028.119-2.002-.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285-.277-.474-.03-.731.208-.968.213-.213.474-.554.712-.831.237-.277.316-.475.474-.791s.079-.594-.04-.831c-.117-.238-1.039-2.584-1.461-3.522%22/%3E%3C/svg%3E";
var WhatsAppChatVisualization_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WhatsAppChatVisualization",
	props: {
		active: { type: Boolean },
		sender: { default: "Customer" },
		message: { default: "How do I reset my password?" },
		isOutgoing: {
			type: Boolean,
			default: false
		},
		slideFrom: { default: "right" }
	},
	emits: ["complete"],
	setup(__props, { emit: __emit }) {
		const COMPLETE_DELAY_MS = BUBBLE_DELAY_MS + 700;
		const props = __props;
		const emit = __emit;
		const visible = ref(false);
		const bubbleVisible = ref(false);
		let timers = [];
		function clearTimers() {
			for (const t of timers) clearTimeout(t);
			timers = [];
		}
		function runAnimation() {
			visible.value = false;
			bubbleVisible.value = false;
			timers.push(setTimeout(() => {
				visible.value = true;
			}, APPEAR_DELAY_MS));
			timers.push(setTimeout(() => {
				bubbleVisible.value = true;
			}, APPEAR_DELAY_MS + BUBBLE_DELAY_MS));
			timers.push(setTimeout(() => {
				emit("complete");
			}, APPEAR_DELAY_MS + COMPLETE_DELAY_MS));
		}
		watch(() => props.active, (val) => {
			if (val) runAnimation();
			else {
				clearTimers();
				visible.value = false;
				bubbleVisible.value = false;
			}
		}, { immediate: true });
		onUnmounted(clearTimers);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				_ctx.$style.card,
				visible.value && _ctx.$style.cardVisible,
				__props.slideFrom === "left" && _ctx.$style.slideLeft
			]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, [createBaseVNode("img", {
				src: WHATSAPP_ICON,
				class: normalizeClass(_ctx.$style.avatarIcon),
				alt: ""
			}, null, 2)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.sender) }, toDisplayString(__props.sender), 3)], 2), bubbleVisible.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.bubbleRow, __props.isOutgoing && _ctx.$style.bubbleRowOutgoing])
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.bubble, __props.isOutgoing ? _ctx.$style.bubbleOutgoing : _ctx.$style.bubbleIncoming]) }, [createBaseVNode("p", { class: normalizeClass(_ctx.$style.bubbleText) }, toDisplayString(__props.message), 3), __props.isOutgoing ? (openBlock(), createElementBlock("svg", {
				key: 0,
				class: normalizeClass(_ctx.$style.readTicks),
				width: "18",
				height: "12",
				viewBox: "0 0 18 12",
				fill: "none"
			}, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
				d: "M1 6 L4.5 9.5 L10 2",
				stroke: "currentColor",
				"stroke-width": "1.6",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1), createBaseVNode("path", {
				d: "M5 6 L8.5 9.5 L14 2",
				stroke: "currentColor",
				"stroke-width": "1.6",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)])], 2)) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/components/visualizations/WhatsAppChatVisualization.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_ozblk_125";
var slideLeft = "_slideLeft_ozblk_139";
var cardVisible = "_cardVisible_ozblk_143";
var header = "_header_ozblk_148";
var avatar = "_avatar_ozblk_154";
var avatarIcon = "_avatarIcon_ozblk_166";
var sender = "_sender_ozblk_171";
var bubbleRow = "_bubbleRow_ozblk_177";
var bubbleRowOutgoing = "_bubbleRowOutgoing_ozblk_182";
var bubble = "_bubble_ozblk_177";
var bubbleIncoming = "_bubbleIncoming_ozblk_193";
var bubbleOutgoing = "_bubbleOutgoing_ozblk_198";
var bubbleText = "_bubbleText_ozblk_207";
var readTicks = "_readTicks_ozblk_214";
var WhatsAppChatVisualization_vue_vue_type_style_index_0_lang_module_default = {
	card,
	slideLeft,
	cardVisible,
	header,
	avatar,
	avatarIcon,
	sender,
	bubbleRow,
	bubbleRowOutgoing,
	bubble,
	"bubble-pop": "_bubble-pop_ozblk_1",
	bubbleIncoming,
	bubbleOutgoing,
	bubbleText,
	readTicks
};
var WhatsAppChatVisualization_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WhatsAppChatVisualization_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WhatsAppChatVisualization_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/components/WorkflowPreviewCanvas.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["viewBox"];
var _hoisted_2$2 = ["d"];
var NODE_HALF_WIDTH$1 = 48;
var EDGE_CURVE_OFFSET$1 = 60;
var PADDING$1 = 80;
var CANVAS_HEIGHT$1 = 420;
var NODE_LABEL_OFFSET$1 = 13;
var NODE_RUNNING_DURATION_MS$1 = 250;
var CRM_INITIAL_DELAY_MS = 500;
var CRM_INTERVAL_MS = 1400;
var CANVAS_WIDTH$1 = 1600;
var VIZ_MARGIN = 160;
var VIZ_GAP = 28;
var CANVAS_INNER_PADDING$1 = 60;
var OUTPUT_VIZ_HEIGHT = 80;
var OUTPUT_VIZ_GAP = 16;
var WorkflowPreviewCanvas_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowPreviewCanvas",
	props: {
		workflow: {},
		animating: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const visualizationComponents = {
			"slack-message": SlackMessageVisualization_default,
			"salesforce-card": SalesforceCardVisualization_default,
			"invoice-spreadsheet": InvoiceSpreadsheetVisualization_default,
			"whatsapp-chat": WhatsAppChatVisualization_default
		};
		const props = __props;
		const canvasRef = ref(null);
		const { width: canvasRenderedWidth } = useElementSize(canvasRef);
		const animationPhase = ref("idle");
		const nodeStates = reactive({});
		const hasInputViz = computed(() => !!props.workflow.inputVisualization);
		const hasOutputViz = computed(() => !!props.workflow.outputVisualization);
		const outputVizItems = computed(() => {
			const viz = props.workflow.outputVisualization;
			if (!viz) return [];
			if (Array.isArray(viz)) return viz;
			const last = lastNode.value;
			if (!last) return [];
			return [{
				type: viz.type,
				props: viz.props,
				targetNodeId: last.id
			}];
		});
		const inputVizComponent = computed(() => props.workflow.inputVisualization ? visualizationComponents[props.workflow.inputVisualization.type] : void 0);
		const executionSteps = computed(() => {
			const { nodes, connections } = props.workflow;
			const incomingMap = /* @__PURE__ */ new Map();
			for (const node of nodes) incomingMap.set(node.id, /* @__PURE__ */ new Set());
			for (const conn of connections) incomingMap.get(conn.target)?.add(conn.source);
			const visited = /* @__PURE__ */ new Set();
			const steps = [];
			while (visited.size < nodes.length) {
				const ready = nodes.filter((n) => !visited.has(n.id)).filter((n) => {
					const deps = incomingMap.get(n.id);
					return !deps || [...deps].every((d) => visited.has(d));
				}).map((n) => n.id);
				if (ready.length === 0) break;
				steps.push(ready);
				for (const id of ready) visited.add(id);
			}
			return steps;
		});
		const firstNode = computed(() => {
			const nodes = props.workflow.nodes;
			if (nodes.length === 0) return void 0;
			return nodes.reduce((min, n) => n.position.x < min.position.x ? n : min, nodes[0]);
		});
		const lastNode = computed(() => {
			const nodes = props.workflow.nodes;
			if (nodes.length === 0) return void 0;
			return nodes.reduce((max, n) => n.position.x > max.position.x ? n : max, nodes[0]);
		});
		const triggerNodeIds = computed(() => {
			const targets = new Set(props.workflow.connections.map((c) => c.target));
			return new Set(props.workflow.nodes.filter((n) => !targets.has(n.id)).map((n) => n.id));
		});
		function resetStates() {
			for (const node of props.workflow.nodes) nodeStates[node.id] = "idle";
		}
		let animationTimer = null;
		let stopped = false;
		async function sleep(ms) {
			return new Promise((resolve) => {
				animationTimer = setTimeout(resolve, ms);
			});
		}
		let outputCompletedCount = 0;
		async function runNodeAnimation() {
			for (const step of executionSteps.value) {
				if (stopped) return;
				for (const id of step) nodeStates[id] = "running";
				await sleep(NODE_RUNNING_DURATION_MS$1);
				if (stopped) return;
				for (const id of step) nodeStates[id] = "success";
			}
			if (stopped) return;
			if (hasOutputViz.value) {
				outputCompletedCount = 0;
				animationPhase.value = "output";
			} else animationPhase.value = "done";
		}
		function startAnimation() {
			stopped = false;
			resetStates();
			if (hasInputViz.value) animationPhase.value = "input";
			else {
				animationPhase.value = "nodes";
				runNodeAnimation();
			}
		}
		function stopAnimation() {
			stopped = true;
			if (animationTimer) {
				clearTimeout(animationTimer);
				animationTimer = null;
			}
		}
		function handleInputComplete() {
			if (stopped) return;
			animationPhase.value = "nodes";
			runNodeAnimation();
		}
		function handleOutputComplete() {
			if (stopped) return;
			outputCompletedCount++;
			if (outputCompletedCount >= outputVizItems.value.length) animationPhase.value = "done";
		}
		watch(() => props.animating, (val) => {
			if (val) startAnimation();
			else {
				stopAnimation();
				resetStates();
				animationPhase.value = "idle";
			}
		});
		onMounted(() => {
			resetStates();
			if (props.animating) startAnimation();
		});
		onUnmounted(stopAnimation);
		const crmCycleIndex = ref(0);
		const crmCycleVisible = ref(false);
		let crmCycleStartTimer = null;
		let crmCycleInterval = null;
		const hasCrmCycle = computed(() => !!props.workflow.crmCycle);
		const crmVariants = computed(() => props.workflow.crmCycle?.variants ?? []);
		const crmCurrentVariant = computed(() => crmVariants.value[crmCycleIndex.value]);
		const crmCycleNodeIds = computed(() => new Set(props.workflow.crmCycle?.nodeIds ?? []));
		function startCrmCycle() {
			if (!hasCrmCycle.value) return;
			crmCycleVisible.value = true;
			crmCycleIndex.value = 0;
			const interval = props.workflow.crmCycle?.intervalMs ?? CRM_INTERVAL_MS;
			crmCycleStartTimer = setTimeout(() => {
				crmCycleIndex.value = (crmCycleIndex.value + 1) % crmVariants.value.length;
				crmCycleInterval = setInterval(() => {
					crmCycleIndex.value = (crmCycleIndex.value + 1) % crmVariants.value.length;
				}, interval);
			}, CRM_INITIAL_DELAY_MS);
		}
		function stopCrmCycle() {
			crmCycleVisible.value = false;
			if (crmCycleStartTimer) {
				clearTimeout(crmCycleStartTimer);
				crmCycleStartTimer = null;
			}
			if (crmCycleInterval) {
				clearInterval(crmCycleInterval);
				crmCycleInterval = null;
			}
		}
		watch(animationPhase, (phase) => {
			if (phase === "done" && hasCrmCycle.value) startCrmCycle();
			else stopCrmCycle();
		});
		onUnmounted(stopCrmCycle);
		const inputVizIcon = computed(() => {
			if (crmCycleVisible.value && crmCurrentVariant.value) return crmCurrentVariant.value.icon.src;
		});
		const bounds = computed(() => {
			const nodes = props.workflow.nodes;
			if (nodes.length === 0) return {
				minX: 0,
				minY: 0,
				width: 400,
				height: 200
			};
			const xs = nodes.map((n) => n.position.x);
			const ys = nodes.map((n) => n.position.y);
			const minX = Math.min(...xs) - PADDING$1;
			const minY = Math.min(...ys) - PADDING$1;
			const maxX = Math.max(...xs) + PADDING$1;
			const maxY = Math.max(...ys) + PADDING$1;
			return {
				minX,
				minY,
				width: maxX - minX,
				height: maxY - minY
			};
		});
		const scale = computed(() => {
			const { width, height } = bounds.value;
			let availableWidth = CANVAS_WIDTH$1 - 2 * CANVAS_INNER_PADDING$1;
			if (hasInputViz.value) availableWidth -= VIZ_MARGIN;
			if (hasOutputViz.value) availableWidth -= VIZ_MARGIN;
			const scaleX = availableWidth / width;
			const scaleY = (CANVAS_HEIGHT$1 - 2 * CANVAS_INNER_PADDING$1) / height;
			return Math.min(scaleX, scaleY, 1);
		});
		const renderScale = computed(() => canvasRenderedWidth.value > 0 ? Math.min(canvasRenderedWidth.value / CANVAS_WIDTH$1, 1) : 1);
		const contentStyle = computed(() => {
			const rs = renderScale.value;
			const verticalOffset = CANVAS_HEIGHT$1 * (1 - rs) / 2;
			return {
				width: `${CANVAS_WIDTH$1}px`,
				height: `${CANVAS_HEIGHT$1}px`,
				transform: `translateY(${verticalOffset}px) scale(${rs})`,
				transformOrigin: "top left"
			};
		});
		const containerStyle = computed(() => {
			const { width, height } = bounds.value;
			const s = scale.value;
			const scaledWidth = width * s;
			const scaledHeight = height * s;
			return {
				width: `${width}px`,
				height: `${height}px`,
				transform: `scale(${s})`,
				transformOrigin: "top left",
				left: `${(CANVAS_WIDTH$1 - scaledWidth) / 2}px`,
				top: `${(CANVAS_HEIGHT$1 - scaledHeight) / 2}px`
			};
		});
		const viewBox = computed(() => `${bounds.value.minX} ${bounds.value.minY} ${bounds.value.width} ${bounds.value.height}`);
		const canvasMarginLeft = computed(() => {
			const s = scale.value;
			return (CANVAS_WIDTH$1 - bounds.value.width * s) / 2;
		});
		const canvasMarginTop = computed(() => {
			const s = scale.value;
			return (CANVAS_HEIGHT$1 - bounds.value.height * s) / 2;
		});
		function toScreenX(workflowX) {
			return (workflowX - bounds.value.minX) * scale.value + canvasMarginLeft.value;
		}
		function toScreenY(workflowY) {
			return (workflowY - bounds.value.minY) * scale.value + canvasMarginTop.value;
		}
		const inputSlotStyle = computed(() => {
			if (!firstNode.value) return {};
			const nodeScreenX = toScreenX(firstNode.value.position.x - NODE_HALF_WIDTH$1);
			const nodeScreenY = toScreenY(firstNode.value.position.y - NODE_LABEL_OFFSET$1);
			return {
				left: `${nodeScreenX - VIZ_GAP}px`,
				top: `${nodeScreenY}px`,
				transform: "translateX(-100%) translateY(-50%)"
			};
		});
		const outputSlotStyles = computed(() => {
			const items = outputVizItems.value;
			if (items.length === 0) return [];
			const positions = items.map((item) => {
				const targetNode = props.workflow.nodes.find((n) => n.id === item.targetNodeId) ?? lastNode.value;
				if (!targetNode) return {
					x: 0,
					y: 0
				};
				return {
					x: toScreenX(targetNode.position.x + NODE_HALF_WIDTH$1),
					y: toScreenY(targetNode.position.y - NODE_LABEL_OFFSET$1)
				};
			});
			if (items.length > 1) {
				const sorted = positions.map((p, i) => ({
					idx: i,
					y: p.y
				})).sort((a, b) => a.y - b.y);
				const minSpacing = OUTPUT_VIZ_HEIGHT + OUTPUT_VIZ_GAP;
				for (let i = 1; i < sorted.length; i++) {
					const prev = sorted[i - 1];
					const curr = sorted[i];
					if (curr.y - prev.y < minSpacing) positions[curr.idx].y = positions[prev.idx].y + minSpacing;
				}
			}
			const isMulti = items.length > 1;
			return positions.map((pos) => ({
				left: `${pos.x + VIZ_GAP}px`,
				top: `${pos.y}px`,
				...isMulti ? {} : { transform: "translateY(-50%)" }
			}));
		});
		function getEdgePath(connection) {
			const sourceNode = props.workflow.nodes.find((n) => n.id === connection.source);
			const targetNode = props.workflow.nodes.find((n) => n.id === connection.target);
			if (!sourceNode || !targetNode) return "";
			const sx = sourceNode.position.x + NODE_HALF_WIDTH$1;
			const sy = sourceNode.position.y - NODE_LABEL_OFFSET$1;
			const tx = targetNode.position.x - NODE_HALF_WIDTH$1;
			const ty = targetNode.position.y - NODE_LABEL_OFFSET$1;
			const dist = Math.abs(tx - sx);
			const cx = Math.min(EDGE_CURVE_OFFSET$1, dist * .4);
			return `M ${sx} ${sy} C ${sx + cx} ${sy}, ${tx - cx} ${ty}, ${tx} ${ty}`;
		}
		function isEdgeSuccess(connection) {
			return nodeStates[connection.target] === "success";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "canvasRef",
				ref: canvasRef,
				class: normalizeClass(_ctx.$style.canvas)
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.canvasContent),
				style: normalizeStyle(contentStyle.value)
			}, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.viewport),
					style: normalizeStyle(containerStyle.value)
				}, [(openBlock(), createElementBlock("svg", {
					class: normalizeClass(_ctx.$style.edges),
					viewBox: viewBox.value
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.workflow.connections, (conn, idx) => {
					return openBlock(), createElementBlock("path", {
						key: `edge-${idx}`,
						d: getEdgePath(conn),
						class: normalizeClass([_ctx.$style.edge, isEdgeSuccess(conn) && _ctx.$style.edgeSuccess])
					}, null, 10, _hoisted_2$2);
				}), 128))], 10, _hoisted_1$3)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.nodesLayer) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.workflow.nodes, (node) => {
					return openBlock(), createBlock(WorkflowPreviewNode_default, {
						key: node.id,
						node,
						state: nodeStates[node.id] ?? "idle",
						trigger: triggerNodeIds.value.has(node.id),
						"offset-x": bounds.value.minX,
						"offset-y": bounds.value.minY,
						"icon-override": crmCycleNodeIds.value.has(node.id) && crmCycleVisible.value ? crmCurrentVariant.value?.icon : void 0
					}, null, 8, [
						"node",
						"state",
						"trigger",
						"offset-x",
						"offset-y",
						"icon-override"
					]);
				}), 128))], 2)], 6),
				inputVizComponent.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.vizSlot),
					style: normalizeStyle(inputSlotStyle.value)
				}, [(openBlock(), createBlock(resolveDynamicComponent(inputVizComponent.value), mergeProps({ active: animationPhase.value !== "idle" }, props.workflow.inputVisualization?.props, {
					"icon-override": inputVizIcon.value,
					"slide-from": "left",
					onComplete: handleInputComplete
				}), null, 16, ["active", "icon-override"]))], 6)) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(outputVizItems.value, (outputViz, idx) => {
					return openBlock(), createElementBlock("div", {
						key: `output-viz-${idx}`,
						class: normalizeClass([_ctx.$style.vizSlot, outputVizItems.value.length > 1 && _ctx.$style.vizSlotCompact]),
						style: normalizeStyle(outputSlotStyles.value[idx])
					}, [(openBlock(), createBlock(resolveDynamicComponent(visualizationComponents[outputViz.type]), mergeProps({ active: animationPhase.value === "output" || animationPhase.value === "done" }, { ref_for: true }, outputViz.props, {
						"icon-override": outputViz.type === "salesforce-card" && crmCycleVisible.value ? inputVizIcon.value : void 0,
						onComplete: handleOutputComplete
					}), null, 16, ["active", "icon-override"]))], 6);
				}), 128))
			], 6)], 2);
		};
	}
});
var WorkflowPreviewCanvas_vue_vue_type_style_index_0_lang_module_default = {
	canvas: "_canvas_l10va_125",
	canvasContent: "_canvasContent_l10va_139",
	viewport: "_viewport_l10va_145",
	edges: "_edges_l10va_149",
	edge: "_edge_l10va_149",
	edgeSuccess: "_edgeSuccess_l10va_165",
	nodesLayer: "_nodesLayer_l10va_169",
	vizSlot: "_vizSlot_l10va_175",
	vizSlotCompact: "_vizSlotCompact_l10va_183"
};
var WorkflowPreviewCanvas_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowPreviewCanvas_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowPreviewCanvas_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/workflows/process-invoices.ts
var GMAIL_ICON_SVG = "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22256%22%20height=%22193%22%20preserveAspectRatio=%22xMidYMid%22%3E%3Cpath%20fill=%22%234285F4%22%20d=%22M58.182%20192.05V93.14L27.507%2065.077%200%2049.504v125.091c0%209.658%207.825%2017.455%2017.455%2017.455z%22/%3E%3Cpath%20fill=%22%2334A853%22%20d=%22M197.818%20192.05h40.727c9.659%200%2017.455-7.826%2017.455-17.455V49.505l-31.156%2017.837-27.026%2025.798z%22/%3E%3Cpath%20fill=%22%23EA4335%22%20d=%22m58.182%2093.14-4.174-38.647%204.174-36.989L128%2069.868l69.818-52.364%204.67%2034.992-4.67%2040.644L128%20145.504z%22/%3E%3Cpath%20fill=%22%23FBBC04%22%20d=%22M197.818%2017.504V93.14L256%2049.504V26.231c0-21.585-24.64-33.89-41.89-20.945z%22/%3E%3Cpath%20fill=%22%23C5221F%22%20d=%22m0%2049.504%2026.759%2020.07L58.182%2093.14V17.504L41.89%205.286C24.61-7.66%200%204.646%200%2026.23z%22/%3E%3C/svg%3E";
var ANTHROPIC_ICON_SVG = "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2246%22%20height=%2232%22%20fill=%22none%22%3E%3Cpath%20fill=%22%237D7D87%22%20d=%22M32.73%200h-6.945L38.45%2032h6.945zM12.665%200%200%2032h7.082l2.59-6.72h13.25l2.59%206.72h7.082L19.929%200zm-.702%2019.337%204.334-11.246%204.334%2011.246z%22/%3E%3C/svg%3E";
var GOOGLE_SHEETS_ICON_SVG$2 = "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2260%22%20height=%2260%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20fill=%22%2328B446%22%20d=%22M35.69%201%2052%2017.225v39.087a3.67%203.67%200%200%201-1.084%202.61A3.7%203.7%200%200%201%2048.293%2060H12.707a3.7%203.7%200%200%201-2.623-1.078A3.67%203.67%200%200%201%209%2056.312V4.688a3.67%203.67%200%200%201%201.084-2.61A3.7%203.7%200%200%201%2012.707%201z%22/%3E%3Cpath%20fill=%22%236ACE7C%22%20d=%22M35.69%201%2052%2017.225H39.397c-2.054%200-3.707-1.829-3.707-3.872z%22/%3E%3Cpath%20fill=%22%23219B38%22%20d=%22M39.211%2017.225%2052%2022.48v-5.255z%22/%3E%3Cpath%20fill=%22%23FFF%22%20d=%22M20.12%2031.975c0-.817.662-1.475%201.483-1.475h17.794c.821%200%201.482.658%201.482%201.475v15.487c0%20.818-.661%201.475-1.482%201.475H21.603a1.476%201.476%200%200%201-1.482-1.474V31.974zm2.225%201.475h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672zm9.638-10.325h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672z%22/%3E%3Cpath%20fill=%22%2328B446%22%20d=%22M34.69%200%2051%2016.225v39.087a3.67%203.67%200%200%201-1.084%202.61A3.7%203.7%200%200%201%2047.293%2059H11.707a3.7%203.7%200%200%201-2.623-1.078A3.67%203.67%200%200%201%208%2055.312V3.688a3.67%203.67%200%200%201%201.084-2.61A3.7%203.7%200%200%201%2011.707%200z%22/%3E%3Cpath%20fill=%22%236ACE7C%22%20d=%22M34.69%200%2051%2016.225H38.397c-2.054%200-3.707-1.829-3.707-3.872z%22/%3E%3Cpath%20fill=%22%23219B38%22%20d=%22M38.211%2016.225%2051%2021.48v-5.255z%22/%3E%3Cpath%20fill=%22%23FFF%22%20d=%22M19.12%2030.975c0-.817.662-1.475%201.483-1.475h17.794c.821%200%201.482.658%201.482%201.475v15.487c0%20.818-.661%201.475-1.482%201.475H20.603a1.476%201.476%200%200%201-1.482-1.474V30.974zm2.225%201.475h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672zm9.638-10.325h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672z%22/%3E%3C/g%3E%3C/svg%3E";
var GOOGLE_CALENDAR_ICON_SVG = "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%20fill=%22%23fff%22%20fill-rule=%22evenodd%22%20stroke=%22%23000%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20viewBox=%220%200%2081%2082%22%3E%3Cuse%20xlink:href=%22%23a%22%20x=%22.5%22%20y=%22.5%22/%3E%3Csymbol%20id=%22a%22%20overflow=%22visible%22%3E%3Cg%20fill-rule=%22nonzero%22%20stroke=%22none%22%3E%3Cpath%20d=%22M61.052%2018.947H18.947v42.105h42.105z%22/%3E%3Cpath%20fill=%22%23ea4335%22%20d=%22M61.053%2080%2080%2061.053H61.053z%22/%3E%3Cpath%20fill=%22%23fbbc04%22%20d=%22M80%2018.947H61.053v42.105H80z%22/%3E%3Cpath%20fill=%22%2334a853%22%20d=%22M61.052%2061.053H18.947V80h42.105z%22/%3E%3Cpath%20fill=%22%23188038%22%20d=%22M0%2061.053v12.632A6.314%206.314%200%200%200%206.316%2080h12.632V61.053z%22/%3E%3Cpath%20fill=%22%231967d2%22%20d=%22M80%2018.947V6.316A6.314%206.314%200%200%200%2073.685%200H61.053v18.947z%22/%3E%3Cpath%20fill=%22%234285f4%22%20d=%22M61.053%200H6.316A6.314%206.314%200%200%200%200%206.316v54.737h18.947V18.947h42.105V0zM27.584%2051.611c-1.574-1.063-2.663-2.616-3.258-4.668l3.653-1.505q.498%201.894%201.737%202.937c1.239%201.043%201.821%201.037%202.989%201.037q1.792%200%203.079-1.089c1.287-1.089%201.29-1.653%201.29-2.774a3.44%203.44%200%200%200-1.358-2.811c-.905-.727-2.042-1.089-3.4-1.089h-2.111v-3.616H32.1q1.752%200%202.953-.947c1.201-.947%201.2-1.495%201.2-2.595q0-1.467-1.074-2.342c-1.074-.875-1.621-.879-2.721-.879q-1.61-.002-2.558.858c-.948.86-1.106%201.301-1.379%202.111l-3.616-1.505c.479-1.358%201.358-2.558%202.647-3.595s2.937-1.558%204.937-1.558q2.22-.002%203.989.858c1.769.86%202.105%201.368%202.774%202.379s1%202.153%201%203.416q0%201.932-.932%203.274c-.932%201.342-1.384%201.579-2.289%202.058v.216a6.95%206.95%200%200%201%202.937%202.289q1.146%201.538%201.147%203.684c.001%202.146-.363%202.711-1.089%203.832s-1.732%202.005-3.005%202.647c-1.279.642-2.716.968-4.311.968-1.847.005-3.553-.526-5.126-1.589zm22.437-18.126-4.01%202.9-2.005-3.042%207.195-5.189h2.758v24.479h-3.937V33.484z%22/%3E%3C/g%3E%3C/symbol%3E%3C/svg%3E";
var processInvoicesWorkflow = {
	nodes: [
		{
			id: "gmail-trigger",
			label: "Invoice received",
			icon: {
				type: "file",
				src: GMAIL_ICON_SVG
			},
			position: {
				x: 0,
				y: 120
			}
		},
		{
			id: "claude",
			label: "Extract & cross-check",
			icon: {
				type: "file",
				src: ANTHROPIC_ICON_SVG
			},
			position: {
				x: 240,
				y: 120
			}
		},
		{
			id: "if-discrepancy",
			label: "Discrepancy?",
			icon: {
				type: "icon",
				name: "node:if"
			},
			iconColor: "green",
			position: {
				x: 480,
				y: 120
			}
		},
		{
			id: "flag-invoice",
			label: "Flag invoice",
			icon: {
				type: "file",
				src: GOOGLE_SHEETS_ICON_SVG$2
			},
			position: {
				x: 720,
				y: 0
			}
		},
		{
			id: "add-calendar",
			label: "Add to Calendar",
			icon: {
				type: "file",
				src: GOOGLE_CALENDAR_ICON_SVG
			},
			position: {
				x: 720,
				y: 240
			}
		}
	],
	connections: [
		{
			source: "gmail-trigger",
			target: "claude"
		},
		{
			source: "claude",
			target: "if-discrepancy"
		},
		{
			source: "if-discrepancy",
			target: "flag-invoice"
		},
		{
			source: "if-discrepancy",
			target: "add-calendar"
		}
	],
	inputVisualization: {
		type: "salesforce-card",
		props: {
			icon: GMAIL_ICON_SVG,
			title: "Invoice received",
			subtitle: "Subject: INV-2024-047"
		}
	},
	outputVisualization: [{
		type: "invoice-spreadsheet",
		targetNodeId: "flag-invoice",
		props: {}
	}, {
		type: "salesforce-card",
		targetNodeId: "add-calendar",
		props: {
			icon: GOOGLE_CALENDAR_ICON_SVG,
			title: "Event created",
			subtitle: "Payment due · Jun 15"
		}
	}]
};
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/workflows/whatsapp-support.ts
var WHATSAPP_ICON_SVG = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2260%22%20height%3D%2260%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20viewBox%3D%220%200%2048%2048%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m4.868%2043.303%202.694-9.835a18.94%2018.94%200%200%201-2.535-9.489C5.032%2013.514%2013.548%205%2024.014%205a18.87%2018.87%200%200%201%2013.43%205.566A18.87%2018.87%200%200%201%2043%2023.994c-.004%2010.465-8.522%2018.98-18.986%2018.98h-.008a19%2019%200%200%201-9.073-2.311z%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M4.868%2043.803a.5.5%200%200%201-.482-.631l2.639-9.636a19.5%2019.5%200%200%201-2.497-9.556C4.532%2013.238%2013.273%204.5%2024.014%204.5a19.37%2019.37%200%200%201%2013.784%205.713A19.36%2019.36%200%200%201%2043.5%2023.994c-.004%2010.741-8.746%2019.48-19.486%2019.48a19.54%2019.54%200%200%201-9.144-2.277l-9.875%202.589a.5.5%200%200%201-.127.017%22/%3E%3Cpath%20fill%3D%22%23cfd8dc%22%20d%3D%22M24.014%205a18.87%2018.87%200%200%201%2013.43%205.566A18.87%2018.87%200%200%201%2043%2023.994c-.004%2010.465-8.522%2018.98-18.986%2018.98h-.008a19%2019%200%200%201-9.073-2.311l-10.065%202.64%202.694-9.835a18.94%2018.94%200%200%201-2.535-9.489C5.032%2013.514%2013.548%205%2024.014%205m0-1C12.998%204%204.032%2012.962%204.027%2023.979a20%2020%200%200%200%202.461%209.622L3.903%2043.04a.998.998%200%200%200%201.219%201.231l9.687-2.54a20%2020%200%200%200%209.197%202.244c11.024%200%2019.99-8.963%2019.995-19.98A19.86%2019.86%200%200%200%2038.153%209.86%2019.87%2019.87%200%200%200%2024.014%204%22/%3E%3Cpath%20fill%3D%22%2340c351%22%20d%3D%22M35.176%2012.832a15.67%2015.67%200%200%200-11.157-4.626c-8.704%200-15.783%207.076-15.787%2015.774a15.74%2015.74%200%200%200%202.413%208.396l.376.597-1.595%205.821%205.973-1.566.577.342a15.75%2015.75%200%200%200%208.032%202.199h.006c8.698%200%2015.777-7.077%2015.78-15.776a15.68%2015.68%200%200%200-4.618-11.161%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M19.268%2016.045c-.355-.79-.729-.806-1.068-.82-.277-.012-.593-.011-.909-.011s-.83.119-1.265.594-1.661%201.622-1.661%203.956%201.7%204.59%201.937%204.906%203.282%205.259%208.104%207.161c4.007%201.58%204.823%201.266%205.693%201.187s2.807-1.147%203.202-2.255.395-2.057.277-2.255c-.119-.198-.435-.316-.909-.554s-2.807-1.385-3.242-1.543-.751-.237-1.068.238c-.316.474-1.225%201.543-1.502%201.859s-.554.357-1.028.119-2.002-.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285-.277-.474-.03-.731.208-.968.213-.213.474-.554.712-.831.237-.277.316-.475.474-.791s.079-.594-.04-.831c-.117-.238-1.039-2.584-1.461-3.522%22/%3E%3C/svg%3E";
var GEMINI_ICON_SVG$1 = "data:image/svg+xml,%3Csvg%20class%3D%22_footerSpark_98udt_151%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M57.0667%2028.6103C52.1359%2026.4878%2047.8217%2023.576%2044.1223%2019.8784C40.4247%2016.1808%2037.5128%2011.8649%2035.3902%206.9342C34.5754%205.04449%2033.9206%203.10204%2033.4186%201.11049C33.2549%200.459368%2032.6711%200.0010376%2032%200.0010376C31.3288%200.0010376%2030.745%200.459368%2030.5813%201.11049C30.0793%203.10204%2029.4246%205.04267%2028.6097%206.9342C26.4872%2011.8649%2023.5753%2016.1808%2019.8777%2019.8784C16.18%2023.576%2011.864%2026.4878%206.93327%2028.6103C5.04353%2029.4251%203.10105%2030.0799%201.10947%2030.5819C0.458338%2030.7456%200%2031.3294%200%2032.0005C0%2032.6716%200.458338%2033.2555%201.10947%2033.4191C3.10105%2033.9211%205.04172%2034.5759%206.93327%2035.3907C11.864%2037.5132%2016.1782%2040.4251%2019.8777%2044.1226C23.5771%2047.8202%2026.4872%2052.1361%2028.6097%2057.0668C29.4246%2058.9565%2030.0793%2060.899%2030.5813%2062.8905C30.745%2063.5416%2031.3288%2064%2032%2064C32.6711%2064%2033.2549%2063.5416%2033.4186%2062.8905C33.9206%2060.899%2034.5754%2058.9583%2035.3902%2057.0668C37.5128%2052.1361%2040.4247%2047.822%2044.1223%2044.1226C47.8199%2040.4251%2052.1359%2037.5132%2057.0667%2035.3907C58.9564%2034.5759%2060.8989%2033.9211%2062.8905%2033.4191C63.5416%2033.2555%2064%2032.6716%2064%2032.0005C64%2031.3294%2063.5416%2030.7456%2062.8905%2030.5819C60.8989%2030.0799%2058.9582%2029.4251%2057.0667%2028.6103Z%22%20fill%3D%22white%22%3E%3C/path%3E%3Cmask%20id%3D%22mask0_10859_4894%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M32%200C32.6711%201.144e-05%2033.2553%200.458263%2033.4189%201.10938C33.9209%203.10093%2034.5758%205.04389%2035.3906%206.93359C37.5131%2011.8639%2040.4247%2016.1796%2044.1221%2019.877C47.8215%2023.5745%2052.1357%2026.4869%2057.0664%2028.6094C58.958%2029.4242%2060.899%2030.0791%2062.8906%2030.5811C63.5415%2030.7448%2063.9998%2031.3281%2064%2031.999C64%2032.6701%2063.5417%2033.2542%2062.8906%2033.418C60.899%2033.9199%2058.9561%2034.5748%2057.0664%2035.3896C52.1358%2037.5121%2047.8196%2040.4237%2044.1221%2044.1211C40.4246%2047.8204%2037.5131%2052.1349%2035.3906%2057.0654C34.5758%2058.957%2033.9209%2060.8981%2033.4189%2062.8896C33.2552%2063.5407%2032.6711%2063.999%2032%2063.999C31.3289%2063.999%2030.7448%2063.5407%2030.5811%2062.8896C30.0791%2060.8981%2029.4242%2058.9551%2028.6094%2057.0654C26.4869%2052.1349%2023.5773%2047.8186%2019.8779%2044.1211C16.1786%2040.4237%2011.8642%2037.5121%206.93359%2035.3896C5.04204%2034.5748%203.10096%2033.9199%201.10938%2033.418C0.458309%2033.2542%200%2032.6701%200%2031.999C0.000201548%2031.3281%200.458463%2030.7448%201.10938%2030.5811C3.10096%2030.0791%205.04386%2029.4242%206.93359%2028.6094C11.8643%2026.4869%2016.1804%2023.5745%2019.8779%2019.877C23.5753%2016.1796%2026.4869%2011.8639%2028.6094%206.93359C29.4242%205.04207%2030.0791%203.10093%2030.5811%201.10938C30.7448%200.45826%2031.3289%200%2032%200Z%22%20fill%3D%22black%22%3E%3C/path%3E%3Cpath%20d%3D%22M32%200C32.6711%201.144e-05%2033.2553%200.458263%2033.4189%201.10938C33.9209%203.10093%2034.5758%205.04389%2035.3906%206.93359C37.5131%2011.8639%2040.4247%2016.1796%2044.1221%2019.877C47.8215%2023.5745%2052.1357%2026.4869%2057.0664%2028.6094C58.958%2029.4242%2060.899%2030.0791%2062.8906%2030.5811C63.5415%2030.7448%2063.9998%2031.3281%2064%2031.999C64%2032.6701%2063.5417%2033.2542%2062.8906%2033.418C60.899%2033.9199%2058.9561%2034.5748%2057.0664%2035.3896C52.1358%2037.5121%2047.8196%2040.4237%2044.1221%2044.1211C40.4246%2047.8204%2037.5131%2052.1349%2035.3906%2057.0654C34.5758%2058.957%2033.9209%2060.8981%2033.4189%2062.8896C33.2552%2063.5407%2032.6711%2063.999%2032%2063.999C31.3289%2063.999%2030.7448%2063.5407%2030.5811%2062.8896C30.0791%2060.8981%2029.4242%2058.9551%2028.6094%2057.0654C26.4869%2052.1349%2023.5773%2047.8186%2019.8779%2044.1211C16.1786%2040.4237%2011.8642%2037.5121%206.93359%2035.3896C5.04204%2034.5748%203.10096%2033.9199%201.10938%2033.418C0.458309%2033.2542%200%2032.6701%200%2031.999C0.000201548%2031.3281%200.458463%2030.7448%201.10938%2030.5811C3.10096%2030.0791%205.04386%2029.4242%206.93359%2028.6094C11.8643%2026.4869%2016.1804%2023.5745%2019.8779%2019.877C23.5753%2016.1796%2026.4869%2011.8639%2028.6094%206.93359C29.4242%205.04207%2030.0791%203.10093%2030.5811%201.10938C30.7448%200.45826%2031.3289%200%2032%200Z%22%20fill%3D%22url%28%23paint0_linear_10859_4894%29%22%3E%3C/path%3E%3C/mask%3E%3Cg%20mask%3D%22url%28%23mask0_10859_4894%29%22%3E%3Cg%20filter%3D%22url%28%23filter0_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2214.2084%22%20cy%3D%2216.7164%22%20rx%3D%2214.2084%22%20ry%3D%2216.7164%22%20transform%3D%22matrix%280.942343%200.334649%20-0.334656%200.94234%20-7.979%2013.7735%29%22%20fill%3D%22%23FFE432%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter1_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2227.0543%22%20cy%3D%222.55114%22%20rx%3D%2218.3944%22%20ry%3D%2218.7985%22%20fill%3D%22%23FC413D%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter2_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2219.2245%22%20cy%3D%2224.9042%22%20rx%3D%2219.2245%22%20ry%3D%2224.9042%22%20transform%3D%22matrix%280.998807%20-0.0488254%200.0488266%200.998807%20-1.72778%2032.6573%29%22%20fill%3D%22%2300B95C%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter3_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2219.2245%22%20cy%3D%2224.9042%22%20rx%3D%2219.2245%22%20ry%3D%2224.9042%22%20transform%3D%22matrix%280.998807%20-0.0488254%200.0488266%200.998807%20-1.72778%2032.6573%29%22%20fill%3D%22%2300B95C%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter4_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2218.8429%22%20cy%3D%2220.7441%22%20rx%3D%2218.8429%22%20ry%3D%2220.7441%22%20transform%3D%22matrix%280.854301%20-0.519779%200.51979%200.854294%20-7.13574%2047.5078%29%22%20fill%3D%22%2300B95C%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter5_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2266.4617%22%20cy%3D%2224.977%22%20rx%3D%2218.0933%22%20ry%3D%2217.4229%22%20fill%3D%22%233186FF%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter6_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2220.9292%22%20cy%3D%2222.0752%22%20rx%3D%2220.9292%22%20ry%3D%2222.0752%22%20transform%3D%22matrix%280.79599%200.60531%20-0.60532%200.795982%20-2.81885%20-7.43323%29%22%20fill%3D%22%23FBBC04%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter7_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2224.1311%22%20cy%3D%2222.2919%22%20rx%3D%2224.1311%22%20ry%3D%2222.2919%22%20transform%3D%22matrix%280.824037%200.566536%20-0.566546%200.82403%2039.6338%200.310608%29%22%20fill%3D%22%233186FF%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter8_f_10859_4894%29%22%3E%3Cpath%20d%3D%22M54.2255%20-2.30403C57.0195%201.49462%2053.4294%208.8804%2046.2068%2014.1926C38.9842%2019.5048%2030.8642%2020.7318%2028.0702%2016.9331C25.2762%2013.1345%2028.8663%205.74867%2036.0889%200.436486C43.3115%20-4.8757%2051.4315%20-6.10267%2054.2255%20-2.30403Z%22%20fill%3D%22%23749BFF%22%3E%3C/path%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter9_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2227.5853%22%20cy%3D%2217.1478%22%20rx%3D%2227.5853%22%20ry%3D%2217.1478%22%20transform%3D%22matrix%280.733166%20-0.680049%200.680061%200.733155%20-12.2583%209.49695%29%22%20fill%3D%22%23FC413D%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter10_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2214.7819%22%20cy%3D%228.59637%22%20rx%3D%2214.7819%22%20ry%3D%228.59637%22%20transform%3D%22matrix%280.813186%200.582004%20-0.582016%200.813177%206.37842%2030.511%29%22%20fill%3D%22%23FFEE48%22%3E%3C/ellipse%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_f_10859_4894%22%20x%3D%22-19.618%22%20y%3D%2212.9027%22%20width%3D%2238.8681%22%20height%3D%2242.7562%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%222.45965%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter1_f_10859_4894%22%20x%3D%22-15.1223%22%20y%3D%22-40.0296%22%20width%3D%2284.3533%22%20height%3D%2285.1615%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%2211.8911%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter2_f_10859_4894%22%20x%3D%22-20.7682%22%20y%3D%2211.4835%22%20width%3D%2278.9161%22%20height%3D%2290.2196%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%2210.1086%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter3_f_10859_4894%22%20x%3D%22-20.7682%22%20y%3D%2211.4835%22%20width%3D%2278.9161%22%20height%3D%2290.2196%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%2210.1086%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter4_f_10859_4894%22%20x%3D%22-19.85%22%20y%3D%2214.9664%22%20width%3D%2279.1886%22%20height%3D%2280.9378%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%2210.1086%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter5_f_10859_4894%22%20x%3D%2229.1561%22%20y%3D%22-11.6582%22%20width%3D%2274.6111%22%20height%3D%2273.2703%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%229.60613%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter6_f_10859_4894%22%20x%3D%22-38.291%22%20y%3D%22-16.2687%22%20width%3D%2277.538%22%20height%3D%2278.1513%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%228.70591%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter7_f_10859_4894%22%20x%3D%227.78038%22%20y%3D%22-6.0981%22%20width%3D%2278.2181%22%20height%3D%2276.8982%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%227.77473%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter8_f_10859_4894%22%20x%3D%2213.2082%22%20y%3D%22-18.425%22%20width%3D%2255.8793%22%20height%3D%2251.4791%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%226.95694%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter9_f_10859_4894%22%20x%3D%22-15.4739%22%20y%3D%22-31.0272%22%20width%3D%2270.2034%22%20height%3D%2268.6735%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%225.87598%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter10_f_10859_4894%22%20x%3D%22-14.173%22%20y%3D%2220.474%22%20width%3D%2255.1373%22%20height%3D%2251.261%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%227.27253%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3ClinearGradient%20id%3D%22paint0_linear_10859_4894%22%20x1%3D%2218.1931%22%20y1%3D%2242.821%22%20x2%3D%2251.4335%22%20y2%3D%2214.7959%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%234893FC%22%3E%3C/stop%3E%3Cstop%20offset%3D%220.27%22%20stop-color%3D%22%234893FC%22%3E%3C/stop%3E%3Cstop%20offset%3D%220.776981%22%20stop-color%3D%22%23969DFF%22%3E%3C/stop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23BD99FE%22%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A";
var GOOGLE_SHEETS_ICON_SVG$1 = "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2260%22%20height=%2260%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20fill=%22%2328B446%22%20d=%22M35.69%201%2052%2017.225v39.087a3.67%203.67%200%200%201-1.084%202.61A3.7%203.7%200%200%201%2048.293%2060H12.707a3.7%203.7%200%200%201-2.623-1.078A3.67%203.67%200%200%201%209%2056.312V4.688a3.67%203.67%200%200%201%201.084-2.61A3.7%203.7%200%200%201%2012.707%201z%22/%3E%3Cpath%20fill=%22%236ACE7C%22%20d=%22M35.69%201%2052%2017.225H39.397c-2.054%200-3.707-1.829-3.707-3.872z%22/%3E%3Cpath%20fill=%22%23219B38%22%20d=%22M39.211%2017.225%2052%2022.48v-5.255z%22/%3E%3Cpath%20fill=%22%23FFF%22%20d=%22M20.12%2031.975c0-.817.662-1.475%201.483-1.475h17.794c.821%200%201.482.658%201.482%201.475v15.487c0%20.818-.661%201.475-1.482%201.475H21.603a1.476%201.476%200%200%201-1.482-1.474V31.974zm2.225%201.475h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672zm9.638-10.325h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672z%22/%3E%3Cpath%20fill=%22%2328B446%22%20d=%22M34.69%200%2051%2016.225v39.087a3.67%203.67%200%200%201-1.084%202.61A3.7%203.7%200%200%201%2047.293%2059H11.707a3.7%203.7%200%200%201-2.623-1.078A3.67%203.67%200%200%201%208%2055.312V3.688a3.67%203.67%200%200%201%201.084-2.61A3.7%203.7%200%200%201%2011.707%200z%22/%3E%3Cpath%20fill=%22%236ACE7C%22%20d=%22M34.69%200%2051%2016.225H38.397c-2.054%200-3.707-1.829-3.707-3.872z%22/%3E%3Cpath%20fill=%22%23219B38%22%20d=%22M38.211%2016.225%2051%2021.48v-5.255z%22/%3E%3Cpath%20fill=%22%23FFF%22%20d=%22M19.12%2030.975c0-.817.662-1.475%201.483-1.475h17.794c.821%200%201.482.658%201.482%201.475v15.487c0%20.818-.661%201.475-1.482%201.475H20.603a1.476%201.476%200%200%201-1.482-1.474V30.974zm2.225%201.475h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672zm9.638-10.325h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672z%22/%3E%3C/g%3E%3C/svg%3E";
var NOTION_ICON_SVG = "data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.58276%206.97679C8.82047%207.98238%209.28479%207.90566%2011.6091%207.75057L33.5206%206.43488C33.9853%206.43488%2033.5989%205.97127%2033.4439%205.89423L29.8049%203.26348C29.1076%202.72213%2028.1786%202.10217%2026.3982%202.25726L5.18115%203.80476C4.40736%203.88148%204.25282%204.26837%204.56096%204.57847L7.58276%206.97679ZM8.89829%2012.0833V35.1381C8.89829%2036.3771%209.51746%2036.8407%2010.911%2036.764L34.9919%2035.3706C36.3862%2035.2939%2036.5415%2034.4417%2036.5415%2033.4352V10.5351C36.5415%209.53019%2036.1549%208.98829%2035.3014%209.06564L10.1367%2010.5351C9.20799%2010.6131%208.89821%2011.0777%208.89821%2012.0833H8.89829ZM32.6708%2013.32C32.8252%2014.017%2032.6708%2014.7133%2031.9725%2014.7917L30.8123%2015.0229V32.0434C29.8049%2032.5848%2028.8759%2032.8944%2028.1018%2032.8944C26.8625%2032.8944%2026.5521%2032.5072%2025.6237%2031.3474L18.0343%2019.4329V30.9605L20.4359%2031.5024C20.4359%2031.5024%2020.4359%2032.8944%2018.4983%2032.8944L13.1568%2033.2042C13.0016%2032.8944%2013.1568%2032.1214%2013.6986%2031.9665L15.0925%2031.5802V16.3385L13.1572%2016.1834C13.0019%2015.4864%2013.3885%2014.4814%2014.4733%2014.4035L20.2035%2014.0172L28.1018%2026.0868V15.4097L26.0881%2015.1786C25.9335%2014.3265%2026.5521%2013.7078%2027.3265%2013.6311L32.6708%2013.32ZM3.39973%201.71598L25.4688%200.0907457C28.179%20-0.141688%2028.8763%200.0140245%2030.5796%201.25135L37.6243%206.20276C38.7867%207.05421%2039.1742%207.28602%2039.1742%208.21419V35.3706C39.1742%2037.0726%2038.5542%2038.0791%2036.3865%2038.2331L10.7577%2039.7807C9.13049%2039.8583%208.35607%2039.6264%207.50392%2038.5426L2.31608%2031.8117C1.38658%2030.5726%201%2029.6457%201%2028.5613V4.42283C1%203.03105%201.62019%201.87005%203.39973%201.71598V1.71598Z%22%20fill%3D%22white%22/%3E%0A%3C/svg%3E%0A";
var whatsappSupportWorkflow = {
	nodes: [
		{
			id: "whatsapp-trigger",
			label: "Message received",
			icon: {
				type: "file",
				src: WHATSAPP_ICON_SVG
			},
			position: {
				x: 0,
				y: 120
			}
		},
		{
			id: "lookup-faq",
			label: "Lookup FAQ",
			icon: {
				type: "file",
				src: GOOGLE_SHEETS_ICON_SVG$1
			},
			position: {
				x: 220,
				y: 120
			}
		},
		{
			id: "claude",
			label: "Generate reply",
			icon: {
				type: "file",
				src: GEMINI_ICON_SVG$1
			},
			position: {
				x: 440,
				y: 120
			}
		},
		{
			id: "if-resolved",
			label: "Resolved?",
			icon: {
				type: "icon",
				name: "node:if"
			},
			iconColor: "green",
			position: {
				x: 660,
				y: 120
			}
		},
		{
			id: "whatsapp-reply",
			label: "Send reply",
			icon: {
				type: "file",
				src: WHATSAPP_ICON_SVG
			},
			position: {
				x: 880,
				y: 0
			}
		},
		{
			id: "notion-ticket",
			label: "Create ticket",
			icon: {
				type: "file",
				src: NOTION_ICON_SVG,
				lightInvert: true
			},
			position: {
				x: 880,
				y: 240
			}
		}
	],
	connections: [
		{
			source: "whatsapp-trigger",
			target: "lookup-faq"
		},
		{
			source: "lookup-faq",
			target: "claude"
		},
		{
			source: "claude",
			target: "if-resolved"
		},
		{
			source: "if-resolved",
			target: "whatsapp-reply"
		},
		{
			source: "if-resolved",
			target: "notion-ticket"
		}
	],
	inputVisualization: {
		type: "whatsapp-chat",
		props: {
			sender: "Customer",
			message: "How do I reset my password?",
			slideFrom: "left"
		}
	},
	outputVisualization: [{
		type: "whatsapp-chat",
		targetNodeId: "whatsapp-reply",
		props: {
			sender: "Support Bot",
			message: "Go to Settings → Security → Reset Password ✓",
			isOutgoing: true
		}
	}, {
		type: "salesforce-card",
		targetNodeId: "notion-ticket",
		props: {
			icon: NOTION_ICON_SVG,
			title: "Ticket created",
			subtitle: "Password reset · Unresolved",
			lightInvert: true
		}
	}]
};
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/workflows/schedule-social-posts.ts
var GOOGLE_SHEETS_ICON_SVG = "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2260%22%20height=%2260%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20fill=%22%2328B446%22%20d=%22M35.69%201%2052%2017.225v39.087a3.67%203.67%200%200%201-1.084%202.61A3.7%203.7%200%200%201%2048.293%2060H12.707a3.7%203.7%200%200%201-2.623-1.078A3.67%203.67%200%200%201%209%2056.312V4.688a3.67%203.67%200%200%201%201.084-2.61A3.7%203.7%200%200%201%2012.707%201z%22/%3E%3Cpath%20fill=%22%236ACE7C%22%20d=%22M35.69%201%2052%2017.225H39.397c-2.054%200-3.707-1.829-3.707-3.872z%22/%3E%3Cpath%20fill=%22%23219B38%22%20d=%22M39.211%2017.225%2052%2022.48v-5.255z%22/%3E%3Cpath%20fill=%22%23FFF%22%20d=%22M20.12%2031.975c0-.817.662-1.475%201.483-1.475h17.794c.821%200%201.482.658%201.482%201.475v15.487c0%20.818-.661%201.475-1.482%201.475H21.603a1.476%201.476%200%200%201-1.482-1.474V31.974zm2.225%201.475h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672zm9.638-10.325h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672z%22/%3E%3Cpath%20fill=%22%2328B446%22%20d=%22M34.69%200%2051%2016.225v39.087a3.67%203.67%200%200%201-1.084%202.61A3.7%203.7%200%200%201%2047.293%2059H11.707a3.7%203.7%200%200%201-2.623-1.078A3.67%203.67%200%200%201%208%2055.312V3.688a3.67%203.67%200%200%201%201.084-2.61A3.7%203.7%200%200%201%2011.707%200z%22/%3E%3Cpath%20fill=%22%236ACE7C%22%20d=%22M34.69%200%2051%2016.225H38.397c-2.054%200-3.707-1.829-3.707-3.872z%22/%3E%3Cpath%20fill=%22%23219B38%22%20d=%22M38.211%2016.225%2051%2021.48v-5.255z%22/%3E%3Cpath%20fill=%22%23FFF%22%20d=%22M19.12%2030.975c0-.817.662-1.475%201.483-1.475h17.794c.821%200%201.482.658%201.482%201.475v15.487c0%20.818-.661%201.475-1.482%201.475H20.603a1.476%201.476%200%200%201-1.482-1.474V30.974zm2.225%201.475h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672zm9.638-10.325h6.672v2.212h-6.672zm0%205.162h6.672v2.213h-6.672zm0%205.163h6.672v2.212h-6.672z%22/%3E%3C/g%3E%3C/svg%3E";
var GEMINI_ICON_SVG = "data:image/svg+xml,%3Csvg%20class%3D%22_footerSpark_98udt_151%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M57.0667%2028.6103C52.1359%2026.4878%2047.8217%2023.576%2044.1223%2019.8784C40.4247%2016.1808%2037.5128%2011.8649%2035.3902%206.9342C34.5754%205.04449%2033.9206%203.10204%2033.4186%201.11049C33.2549%200.459368%2032.6711%200.0010376%2032%200.0010376C31.3288%200.0010376%2030.745%200.459368%2030.5813%201.11049C30.0793%203.10204%2029.4246%205.04267%2028.6097%206.9342C26.4872%2011.8649%2023.5753%2016.1808%2019.8777%2019.8784C16.18%2023.576%2011.864%2026.4878%206.93327%2028.6103C5.04353%2029.4251%203.10105%2030.0799%201.10947%2030.5819C0.458338%2030.7456%200%2031.3294%200%2032.0005C0%2032.6716%200.458338%2033.2555%201.10947%2033.4191C3.10105%2033.9211%205.04172%2034.5759%206.93327%2035.3907C11.864%2037.5132%2016.1782%2040.4251%2019.8777%2044.1226C23.5771%2047.8202%2026.4872%2052.1361%2028.6097%2057.0668C29.4246%2058.9565%2030.0793%2060.899%2030.5813%2062.8905C30.745%2063.5416%2031.3288%2064%2032%2064C32.6711%2064%2033.2549%2063.5416%2033.4186%2062.8905C33.9206%2060.899%2034.5754%2058.9583%2035.3902%2057.0668C37.5128%2052.1361%2040.4247%2047.822%2044.1223%2044.1226C47.8199%2040.4251%2052.1359%2037.5132%2057.0667%2035.3907C58.9564%2034.5759%2060.8989%2033.9211%2062.8905%2033.4191C63.5416%2033.2555%2064%2032.6716%2064%2032.0005C64%2031.3294%2063.5416%2030.7456%2062.8905%2030.5819C60.8989%2030.0799%2058.9582%2029.4251%2057.0667%2028.6103Z%22%20fill%3D%22white%22%3E%3C/path%3E%3Cmask%20id%3D%22mask0_10859_4894%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M32%200C32.6711%201.144e-05%2033.2553%200.458263%2033.4189%201.10938C33.9209%203.10093%2034.5758%205.04389%2035.3906%206.93359C37.5131%2011.8639%2040.4247%2016.1796%2044.1221%2019.877C47.8215%2023.5745%2052.1357%2026.4869%2057.0664%2028.6094C58.958%2029.4242%2060.899%2030.0791%2062.8906%2030.5811C63.5415%2030.7448%2063.9998%2031.3281%2064%2031.999C64%2032.6701%2063.5417%2033.2542%2062.8906%2033.418C60.899%2033.9199%2058.9561%2034.5748%2057.0664%2035.3896C52.1358%2037.5121%2047.8196%2040.4237%2044.1221%2044.1211C40.4246%2047.8204%2037.5131%2052.1349%2035.3906%2057.0654C34.5758%2058.957%2033.9209%2060.8981%2033.4189%2062.8896C33.2552%2063.5407%2032.6711%2063.999%2032%2063.999C31.3289%2063.999%2030.7448%2063.5407%2030.5811%2062.8896C30.0791%2060.8981%2029.4242%2058.9551%2028.6094%2057.0654C26.4869%2052.1349%2023.5773%2047.8186%2019.8779%2044.1211C16.1786%2040.4237%2011.8642%2037.5121%206.93359%2035.3896C5.04204%2034.5748%203.10096%2033.9199%201.10938%2033.418C0.458309%2033.2542%200%2032.6701%200%2031.999C0.000201548%2031.3281%200.458463%2030.7448%201.10938%2030.5811C3.10096%2030.0791%205.04386%2029.4242%206.93359%2028.6094C11.8643%2026.4869%2016.1804%2023.5745%2019.8779%2019.877C23.5753%2016.1796%2026.4869%2011.8639%2028.6094%206.93359C29.4242%205.04207%2030.0791%203.10093%2030.5811%201.10938C30.7448%200.45826%2031.3289%200%2032%200Z%22%20fill%3D%22black%22%3E%3C/path%3E%3Cpath%20d%3D%22M32%200C32.6711%201.144e-05%2033.2553%200.458263%2033.4189%201.10938C33.9209%203.10093%2034.5758%205.04389%2035.3906%206.93359C37.5131%2011.8639%2040.4247%2016.1796%2044.1221%2019.877C47.8215%2023.5745%2052.1357%2026.4869%2057.0664%2028.6094C58.958%2029.4242%2060.899%2030.0791%2062.8906%2030.5811C63.5415%2030.7448%2063.9998%2031.3281%2064%2031.999C64%2032.6701%2063.5417%2033.2542%2062.8906%2033.418C60.899%2033.9199%2058.9561%2034.5748%2057.0664%2035.3896C52.1358%2037.5121%2047.8196%2040.4237%2044.1221%2044.1211C40.4246%2047.8204%2037.5131%2052.1349%2035.3906%2057.0654C34.5758%2058.957%2033.9209%2060.8981%2033.4189%2062.8896C33.2552%2063.5407%2032.6711%2063.999%2032%2063.999C31.3289%2063.999%2030.7448%2063.5407%2030.5811%2062.8896C30.0791%2060.8981%2029.4242%2058.9551%2028.6094%2057.0654C26.4869%2052.1349%2023.5773%2047.8186%2019.8779%2044.1211C16.1786%2040.4237%2011.8642%2037.5121%206.93359%2035.3896C5.04204%2034.5748%203.10096%2033.9199%201.10938%2033.418C0.458309%2033.2542%200%2032.6701%200%2031.999C0.000201548%2031.3281%200.458463%2030.7448%201.10938%2030.5811C3.10096%2030.0791%205.04386%2029.4242%206.93359%2028.6094C11.8643%2026.4869%2016.1804%2023.5745%2019.8779%2019.877C23.5753%2016.1796%2026.4869%2011.8639%2028.6094%206.93359C29.4242%205.04207%2030.0791%203.10093%2030.5811%201.10938C30.7448%200.45826%2031.3289%200%2032%200Z%22%20fill%3D%22url%28%23paint0_linear_10859_4894%29%22%3E%3C/path%3E%3C/mask%3E%3Cg%20mask%3D%22url%28%23mask0_10859_4894%29%22%3E%3Cg%20filter%3D%22url%28%23filter0_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2214.2084%22%20cy%3D%2216.7164%22%20rx%3D%2214.2084%22%20ry%3D%2216.7164%22%20transform%3D%22matrix%280.942343%200.334649%20-0.334656%200.94234%20-7.979%2013.7735%29%22%20fill%3D%22%23FFE432%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter1_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2227.0543%22%20cy%3D%222.55114%22%20rx%3D%2218.3944%22%20ry%3D%2218.7985%22%20fill%3D%22%23FC413D%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter2_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2219.2245%22%20cy%3D%2224.9042%22%20rx%3D%2219.2245%22%20ry%3D%2224.9042%22%20transform%3D%22matrix%280.998807%20-0.0488254%200.0488266%200.998807%20-1.72778%2032.6573%29%22%20fill%3D%22%2300B95C%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter3_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2219.2245%22%20cy%3D%2224.9042%22%20rx%3D%2219.2245%22%20ry%3D%2224.9042%22%20transform%3D%22matrix%280.998807%20-0.0488254%200.0488266%200.998807%20-1.72778%2032.6573%29%22%20fill%3D%22%2300B95C%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter4_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2218.8429%22%20cy%3D%2220.7441%22%20rx%3D%2218.8429%22%20ry%3D%2220.7441%22%20transform%3D%22matrix%280.854301%20-0.519779%200.51979%200.854294%20-7.13574%2047.5078%29%22%20fill%3D%22%2300B95C%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter5_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2266.4617%22%20cy%3D%2224.977%22%20rx%3D%2218.0933%22%20ry%3D%2217.4229%22%20fill%3D%22%233186FF%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter6_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2220.9292%22%20cy%3D%2222.0752%22%20rx%3D%2220.9292%22%20ry%3D%2222.0752%22%20transform%3D%22matrix%280.79599%200.60531%20-0.60532%200.795982%20-2.81885%20-7.43323%29%22%20fill%3D%22%23FBBC04%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter7_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2224.1311%22%20cy%3D%2222.2919%22%20rx%3D%2224.1311%22%20ry%3D%2222.2919%22%20transform%3D%22matrix%280.824037%200.566536%20-0.566546%200.82403%2039.6338%200.310608%29%22%20fill%3D%22%233186FF%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter8_f_10859_4894%29%22%3E%3Cpath%20d%3D%22M54.2255%20-2.30403C57.0195%201.49462%2053.4294%208.8804%2046.2068%2014.1926C38.9842%2019.5048%2030.8642%2020.7318%2028.0702%2016.9331C25.2762%2013.1345%2028.8663%205.74867%2036.0889%200.436486C43.3115%20-4.8757%2051.4315%20-6.10267%2054.2255%20-2.30403Z%22%20fill%3D%22%23749BFF%22%3E%3C/path%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter9_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2227.5853%22%20cy%3D%2217.1478%22%20rx%3D%2227.5853%22%20ry%3D%2217.1478%22%20transform%3D%22matrix%280.733166%20-0.680049%200.680061%200.733155%20-12.2583%209.49695%29%22%20fill%3D%22%23FC413D%22%3E%3C/ellipse%3E%3C/g%3E%3Cg%20filter%3D%22url%28%23filter10_f_10859_4894%29%22%3E%3Cellipse%20cx%3D%2214.7819%22%20cy%3D%228.59637%22%20rx%3D%2214.7819%22%20ry%3D%228.59637%22%20transform%3D%22matrix%280.813186%200.582004%20-0.582016%200.813177%206.37842%2030.511%29%22%20fill%3D%22%23FFEE48%22%3E%3C/ellipse%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_f_10859_4894%22%20x%3D%22-19.618%22%20y%3D%2212.9027%22%20width%3D%2238.8681%22%20height%3D%2242.7562%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%222.45965%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter1_f_10859_4894%22%20x%3D%22-15.1223%22%20y%3D%22-40.0296%22%20width%3D%2284.3533%22%20height%3D%2285.1615%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%2211.8911%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter2_f_10859_4894%22%20x%3D%22-20.7682%22%20y%3D%2211.4835%22%20width%3D%2278.9161%22%20height%3D%2290.2196%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%2210.1086%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter3_f_10859_4894%22%20x%3D%22-20.7682%22%20y%3D%2211.4835%22%20width%3D%2278.9161%22%20height%3D%2290.2196%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%2210.1086%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter4_f_10859_4894%22%20x%3D%22-19.85%22%20y%3D%2214.9664%22%20width%3D%2279.1886%22%20height%3D%2280.9378%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%2210.1086%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter5_f_10859_4894%22%20x%3D%2229.1561%22%20y%3D%22-11.6582%22%20width%3D%2274.6111%22%20height%3D%2273.2703%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%229.60613%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter6_f_10859_4894%22%20x%3D%22-38.291%22%20y%3D%22-16.2687%22%20width%3D%2277.538%22%20height%3D%2278.1513%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%228.70591%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter7_f_10859_4894%22%20x%3D%227.78038%22%20y%3D%22-6.0981%22%20width%3D%2278.2181%22%20height%3D%2276.8982%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%227.77473%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter8_f_10859_4894%22%20x%3D%2213.2082%22%20y%3D%22-18.425%22%20width%3D%2255.8793%22%20height%3D%2251.4791%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%226.95694%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter9_f_10859_4894%22%20x%3D%22-15.4739%22%20y%3D%22-31.0272%22%20width%3D%2270.2034%22%20height%3D%2268.6735%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%225.87598%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter%20id%3D%22filter10_f_10859_4894%22%20x%3D%22-14.173%22%20y%3D%2220.474%22%20width%3D%2255.1373%22%20height%3D%2251.261%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation%3D%227.27253%22%20result%3D%22effect1_foregroundBlur_10859_4894%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3ClinearGradient%20id%3D%22paint0_linear_10859_4894%22%20x1%3D%2218.1931%22%20y1%3D%2242.821%22%20x2%3D%2251.4335%22%20y2%3D%2214.7959%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%234893FC%22%3E%3C/stop%3E%3Cstop%20offset%3D%220.27%22%20stop-color%3D%22%234893FC%22%3E%3C/stop%3E%3Cstop%20offset%3D%220.776981%22%20stop-color%3D%22%23969DFF%22%3E%3C/stop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23BD99FE%22%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A";
var X_ICON_SVG = "data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20d%3D%22M23.3171%2016.9373L37.9026%200H34.4463L21.7817%2014.7064L11.6666%200H0L15.2961%2022.2387L0%2040H3.45648L16.8306%2024.4696L27.5129%2040H39.1795L23.3163%2016.9373H23.3171ZM18.583%2022.4346L17.0332%2020.2201L4.7019%202.59936H10.0108L19.9623%2016.8199L21.5122%2019.0344L34.4479%2037.5189H29.139L18.583%2022.4354V22.4346Z%22%20fill%3D%22white%22/%3E%0A%3C/svg%3E%0A";
var LINKEDIN_ICON_SVG = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20viewBox%3D%220%200%2067%2066%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20x%3D%221%22%20y%3D%221%22/%3E%3Csymbol%20id%3D%22a%22%20overflow%3D%22visible%22%3E%3Cg%20fill-rule%3D%22nonzero%22%20stroke%3D%22none%22%3E%3Cpath%20fill%3D%22%230177b5%22%20d%3D%22M59.26%200H4.724C2.12%200%200%202.066%200%204.61v54.788c0%202.53%202.12%204.6%204.724%204.6h54.54c2.61%200%204.736-2.07%204.736-4.6V4.61C64%202.066%2061.874%200%2059.26%200%22/%3E%3Cpath%20d%3D%22M9.49%2023.992H19v30.54H9.49zm4.748-15.2c3.034%200%205.5%202.466%205.5%205.5a5.51%205.51%200%200%201-5.498%205.506%205.52%205.52%200%200%201-5.508-5.506%205.5%205.5%200%200%201%205.506-5.5m10.7%2015.2h9.104v4.174h.126c1.268-2.4%204.364-4.932%209-4.932%209.612%200%2011.386%206.326%2011.386%2014.548v16.752h-9.486V39.678c0-3.54-.064-8.1-4.932-8.1-4.94%200-5.7%203.86-5.7%207.84v15.108h-9.484v-30.54z%22/%3E%3C/g%3E%3C/symbol%3E%3C/svg%3E";
var FIRECRAWL_ICON_PNG = "data:image/png;base64,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";
var REDDIT_ICON_SVG = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20viewBox%3D%220%200%20513%20514%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20x%3D%22.5%22%20y%3D%22.5%22/%3E%3Csymbol%20id%3D%22a%22%20overflow%3D%22visible%22%3E%3Cg%20fill-rule%3D%22nonzero%22%20stroke%3D%22none%22%3E%3Cpath%20fill%3D%22%23ff4500%22%20d%3D%22M0%2076.8C0%2034.253%2034.253%200%2076.8%200h358.4C477.747%200%20512%2034.253%20512%2076.8v358.4c0%2042.547-34.253%2076.8-76.8%2076.8H76.8C34.253%20512%200%20477.747%200%20435.2z%22/%3E%3Cpath%20d%3D%22M79%20305c0-68.142%2078.942-123%20177-123s177%2054.858%20177%20123-78.942%20123-177%20123S79%20373.142%2079%20305%22/%3E%3Cg%20fill%3D%22%23ff4500%22%3E%3Cpath%20d%3D%22M199%20347c35%2029%2079%2029%20114%200l12%2011c-42%2035-96%2035-138%200z%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23b%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23b%22%20x%3D%22-118%22/%3E%3C/g%3E%3C/g%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23b%22%20x%3D%2275%22%20y%3D%22-160%22%20stroke-width%3D%2225%22/%3E%3Cpath%20stroke-width%3D%2222%22%20d%3D%22M87%20282c-45-22-5-92%2040-50m298%2050c45-22%205-92-40-50m-127-45%2024-83%2080%2016%22/%3E%3C/g%3E%3C/symbol%3E%3Cdefs%3E%3Cpath%20id%3D%22b%22%20d%3D%22M287%20285a27.94%2027.94%200%201%201%2056%200%2027.94%2027.94%200%201%201-56%200%22/%3E%3C/defs%3E%3C/svg%3E";
var scheduleSocialPostsWorkflow = {
	nodes: [
		{
			id: "schedule",
			label: "Every Monday",
			icon: {
				type: "icon",
				name: "clock"
			},
			iconColor: "amber",
			position: {
				x: 0,
				y: 160
			}
		},
		{
			id: "scrape",
			label: "Scrape ideas",
			icon: {
				type: "file",
				src: FIRECRAWL_ICON_PNG
			},
			position: {
				x: 220,
				y: 160
			}
		},
		{
			id: "sheets",
			label: "Read ideas",
			icon: {
				type: "file",
				src: GOOGLE_SHEETS_ICON_SVG
			},
			position: {
				x: 440,
				y: 160
			}
		},
		{
			id: "gemini",
			label: "Generate post",
			icon: {
				type: "file",
				src: GEMINI_ICON_SVG
			},
			position: {
				x: 660,
				y: 160
			}
		},
		{
			id: "post-x",
			label: "Post to X",
			icon: {
				type: "file",
				src: X_ICON_SVG,
				lightInvert: true
			},
			position: {
				x: 880,
				y: 10
			}
		},
		{
			id: "post-linkedin",
			label: "Post to LinkedIn",
			icon: {
				type: "file",
				src: LINKEDIN_ICON_SVG
			},
			position: {
				x: 880,
				y: 160
			}
		},
		{
			id: "post-reddit",
			label: "Post to Reddit",
			icon: {
				type: "file",
				src: REDDIT_ICON_SVG
			},
			position: {
				x: 880,
				y: 310
			}
		}
	],
	connections: [
		{
			source: "schedule",
			target: "scrape"
		},
		{
			source: "scrape",
			target: "sheets"
		},
		{
			source: "sheets",
			target: "gemini"
		},
		{
			source: "gemini",
			target: "post-x"
		},
		{
			source: "gemini",
			target: "post-linkedin"
		},
		{
			source: "gemini",
			target: "post-reddit"
		}
	],
	outputVisualization: [
		{
			type: "salesforce-card",
			targetNodeId: "post-x",
			props: {
				icon: X_ICON_SVG,
				title: "Scheduled to X",
				subtitle: "Mon 9:00am",
				lightInvert: true
			}
		},
		{
			type: "salesforce-card",
			targetNodeId: "post-linkedin",
			props: {
				icon: LINKEDIN_ICON_SVG,
				title: "Scheduled to LinkedIn",
				subtitle: "Wed 2:00pm"
			}
		},
		{
			type: "salesforce-card",
			targetNodeId: "post-reddit",
			props: {
				icon: REDDIT_ICON_SVG,
				title: "Scheduled to Reddit",
				subtitle: "Fri 11:00am"
			}
		}
	]
};
//#endregion
//#region src/experiments/instanceAiWorkflowPreviewSuggestions/workflows/index.ts
var workflowRegistry = {
	"score-my-leads": scoreMyLeadsWorkflow,
	"process-invoices": processInvoicesWorkflow,
	"whatsapp-support": whatsappSupportWorkflow,
	"schedule-social-posts": scheduleSocialPostsWorkflow
};
function getPreviewWorkflow(workflowFile) {
	return workflowRegistry[workflowFile];
}
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/examples.ts
var INSTANCE_AI_SPLIT_EMPTY_STATE_SUGGESTIONS_VERSION = "v2-cycling-preview";
var INSTANCE_AI_SPLIT_EMPTY_STATE_CYCLE_MS = 6500;
var INSTANCE_AI_SPLIT_EMPTY_STATE_EXAMPLES = [
	{
		id: "score-my-leads",
		titleKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.scoreMyLeads.label",
		promptKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.scoreMyLeads.prompt",
		workflowFile: "score-my-leads"
	},
	{
		id: "process-invoices",
		titleKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.processInvoices.label",
		promptKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.processInvoices.prompt",
		workflowFile: "process-invoices"
	},
	{
		id: "whatsapp-support",
		titleKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.whatsappSupport.label",
		promptKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.whatsappSupport.prompt",
		workflowFile: "whatsapp-support"
	},
	{
		id: "schedule-social-posts",
		titleKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.scheduleSocialPosts.label",
		promptKey: "experiments.instanceAiWorkflowPreviewSuggestions.suggestions.scheduleSocialPosts.prompt",
		workflowFile: "schedule-social-posts"
	}
];
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/useCyclingExamples.ts
var DEFAULT_INTERVAL_MS = 5e3;
/**
* Cycles `activeIndex` through [0, count) on a fixed interval.
*
* - `pause()` / `resume()` — stop / restart the rotation (and toggle `isPaused`).
*   Callers should derive *when* to pause from their own state via a single
*   watch, so the interval has one source of truth and can't desync into a
*   stuck-paused state.
* - `activeIndex` is a writable ref, so a caller can re-anchor the rotation
*   (e.g. continue from a hovered example) before resuming.
*
* Uses `useIntervalFn` from `@vueuse/core`, which auto-disposes when the
* enclosing effect scope stops.
*
* Experiment cleanup: remove with instanceAiSplitEmptyState.
*/
function useCyclingExamples(count, opts) {
	const intervalMs = opts?.intervalMs ?? DEFAULT_INTERVAL_MS;
	const activeIndex = ref(0);
	const isPaused = ref(false);
	const { pause: stopInterval, resume: startInterval } = useIntervalFn(() => {
		const total = toValue(count);
		activeIndex.value = (activeIndex.value + 1) % total;
	}, intervalMs);
	function pause() {
		isPaused.value = true;
		stopInterval();
	}
	function resume() {
		isPaused.value = false;
		startInterval();
	}
	return {
		activeIndex,
		isPaused,
		pause,
		resume
	};
}
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/components/SuggestionList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["data-test-id", "onMouseenter"];
var _hoisted_2$1 = [
	"disabled",
	"data-test-id",
	"onClick"
];
var _hoisted_3 = [
	"disabled",
	"aria-label",
	"title",
	"data-test-id",
	"onClick"
];
var SuggestionList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SuggestionList",
	props: {
		examples: {},
		activeIndex: {},
		disabled: {
			type: Boolean,
			default: false
		},
		intervalMs: { default: 5e3 },
		paused: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"submit",
		"edit",
		"hover",
		"hover-end"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const telemetry = useInstanceAiPromptSuggestionsTelemetry();
		const templatesStore = useTemplatesStore();
		onMounted(() => {
			telemetry.trackSuggestionsShown({ suggestionCatalogVersion: INSTANCE_AI_SPLIT_EMPTY_STATE_SUGGESTIONS_VERSION });
		});
		function buildPayload(example, index) {
			return {
				promptKey: example.promptKey,
				suggestionId: example.id,
				suggestionKind: "quick_example",
				position: index + 1
			};
		}
		function handleRowClick(example, index) {
			emit("submit", buildPayload(example, index));
		}
		function handleEditClick(event, example, index) {
			event.stopPropagation();
			emit("edit", buildPayload(example, index));
		}
		function handleRowMouseenter(index) {
			emit("hover", index);
		}
		function handleRowsMouseleave() {
			emit("hover-end");
		}
		function handleSeeMoreClick() {
			trackTemplatesClick(TemplateClickSource.instanceAiSplitEmptyState);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.examples),
				"data-test-id": "instance-ai-examples"
			}, [
				createVNode(unref(N8nText_default), {
					size: "xsmall",
					bold: "",
					class: normalizeClass(_ctx.$style.label)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.instanceAiSplitEmptyState.examples.startFromAnExample")), 1)]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.rows),
					"data-test-id": "instance-ai-examples-rows",
					onMouseleave: handleRowsMouseleave
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.examples, (example, index) => {
					return openBlock(), createElementBlock("div", {
						key: example.id,
						class: normalizeClass([_ctx.$style.row, index === props.activeIndex && _ctx.$style.rowActive]),
						"data-test-id": `instance-ai-examples-item-${example.id}`,
						onMouseenter: ($event) => handleRowMouseenter(index)
					}, [createBaseVNode("button", {
						type: "button",
						class: normalizeClass(_ctx.$style.rowMain),
						disabled: props.disabled,
						"data-test-id": `instance-ai-examples-suggestion-${example.id}`,
						onClick: ($event) => handleRowClick(example, index)
					}, [
						createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(example.titleKey)), 1)]),
							_: 2
						}, 1024),
						index === props.activeIndex ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "arrow-right",
							size: "small",
							class: normalizeClass(_ctx.$style.rowArrow)
						}, null, 8, ["class"])) : createCommentVNode("", true),
						index === props.activeIndex ? (openBlock(), createElementBlock("div", {
							key: props.activeIndex,
							class: normalizeClass(_ctx.$style.loadingBar),
							style: normalizeStyle({
								animationDuration: `${props.intervalMs}ms`,
								animationPlayState: props.paused ? "paused" : "running"
							}),
							"data-test-id": "instance-ai-examples-loading-bar"
						}, null, 6)) : createCommentVNode("", true)
					], 10, _hoisted_2$1), createBaseVNode("button", {
						type: "button",
						class: normalizeClass(_ctx.$style.rowEdit),
						disabled: props.disabled,
						"aria-label": unref(i18n).baseText("experiments.instanceAiSplitEmptyState.examples.editPrompt"),
						title: unref(i18n).baseText("experiments.instanceAiSplitEmptyState.examples.editPrompt"),
						"data-test-id": `instance-ai-examples-edit-${example.id}`,
						onClick: ($event) => handleEditClick($event, example, index)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "pencil",
						size: "small"
					})], 10, _hoisted_3)], 42, _hoisted_1$2);
				}), 128))], 34),
				createVNode(unref(N8nLink_default), {
					class: normalizeClass(_ctx.$style.seeMore),
					to: unref(templatesStore).websiteTemplateRepositoryURL,
					"new-window": "",
					size: "small",
					"data-test-id": "instance-ai-examples-see-more",
					onClick: handleSeeMoreClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.instanceAiSplitEmptyState.examples.seeMore")) + " ", 1), createVNode(unref(N8nIcon_default), {
						icon: "arrow-up-right",
						size: "xsmall"
					})]),
					_: 1
				}, 8, ["class", "to"])
			], 2);
		};
	}
});
var SuggestionList_vue_vue_type_style_index_0_lang_module_default = {
	examples: "_examples_1dnbk_125",
	label: "_label_1dnbk_132",
	rows: "_rows_1dnbk_138",
	row: "_row_1dnbk_138",
	rowMain: "_rowMain_1dnbk_156",
	rowActive: "_rowActive_1dnbk_172",
	rowArrow: "_rowArrow_1dnbk_184",
	rowEdit: "_rowEdit_1dnbk_190",
	loadingBar: "_loadingBar_1dnbk_218",
	progressBar: "_progressBar_1dnbk_1",
	seeMore: "_seeMore_1dnbk_236"
};
var SuggestionList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SuggestionList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SuggestionList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/useBuildManually.ts
/**
* Shared "build manually" escape hatch for the split-empty-state experiment.
* Opens a fresh workflow with the trigger node-creator already open, matching
* the behaviour of the canvas "Add first step" button. Used by both the teaser
* canvas (examples-below-input variant) and the header CTA (manual-build-cta
* variant).
*
* Experiment cleanup: remove with instanceAiSplitEmptyState.
*/
function useBuildManually() {
	const router = useRouter();
	const uiStore = useUIStore();
	function buildManually(projectId) {
		uiStore.addFirstStepOnLoad = true;
		uiStore.addFirstStepOnLoadSource = NODE_CREATOR_OPEN_SOURCES.INSTANCE_AI;
		router.push({
			name: VIEWS.NEW_WORKFLOW,
			query: projectId ? { projectId } : {}
		});
	}
	return { buildManually };
}
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/components/InstanceAiPreviewCanvas.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["viewBox"];
var _hoisted_2 = ["d"];
var NODE_HALF_WIDTH = 48;
var EDGE_CURVE_OFFSET = 60;
var PADDING = 80;
var CANVAS_HEIGHT = 420;
var NODE_LABEL_OFFSET = 13;
var NODE_RUNNING_DURATION_MS = 500;
var ANIMATION_START_DELAY_MS = 1100;
var REFERENCE_WIDTH = 1120;
var REFERENCE_HEIGHT = 460;
var CANVAS_INNER_PADDING = 60;
var MAX_SCALE = 1;
var ICON_DARK = "#383838";
var CANVAS_WIDTH = 1600;
var InstanceAiPreviewCanvas_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPreviewCanvas",
	props: {
		workflow: {},
		animating: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const NEUTRAL_FILLS = new Set([
			"none",
			"white",
			"#fff",
			"#ffffff",
			"#fefefe",
			"currentcolor",
			"transparent"
		]);
		function normalizeIconSrc(src) {
			const prefix = "data:image/svg+xml,";
			if (!src.startsWith(prefix)) return src;
			let svg;
			try {
				svg = decodeURIComponent(src.slice(19));
			} catch {
				return src;
			}
			if ([...svg.matchAll(/fill="([^"]+)"/g)].map((m) => m[1].toLowerCase().trim()).some((f) => !NEUTRAL_FILLS.has(f))) return src;
			const recoloured = svg.replace(/fill="(white|#fff|#ffffff|#fefefe|none|currentColor|transparent)"/gi, `fill="${ICON_DARK}"`);
			return prefix + encodeURIComponent(recoloured);
		}
		const props = __props;
		const canvasRef = ref(null);
		const { width: canvasRenderedWidth, height: canvasRenderedHeight } = useElementSize(canvasRef);
		const nodeStates = reactive({});
		const executionSteps = computed(() => {
			const { nodes, connections } = props.workflow;
			const incomingMap = /* @__PURE__ */ new Map();
			for (const node of nodes) incomingMap.set(node.id, /* @__PURE__ */ new Set());
			for (const conn of connections) incomingMap.get(conn.target)?.add(conn.source);
			const visited = /* @__PURE__ */ new Set();
			const steps = [];
			while (visited.size < nodes.length) {
				const ready = nodes.filter((n) => !visited.has(n.id)).filter((n) => {
					const deps = incomingMap.get(n.id);
					return !deps || [...deps].every((d) => visited.has(d));
				}).map((n) => n.id);
				if (ready.length === 0) break;
				steps.push(ready);
				for (const id of ready) visited.add(id);
			}
			return steps;
		});
		const triggerNodeIds = computed(() => {
			const targets = new Set(props.workflow.connections.map((c) => c.target));
			return new Set(props.workflow.nodes.filter((n) => !targets.has(n.id)).map((n) => n.id));
		});
		const displayNodes = computed(() => props.workflow.nodes.map((node) => {
			const icon = node.icon;
			if (icon.type !== "file" || !icon.src) return node;
			const src = normalizeIconSrc(icon.src);
			if (src === icon.src) return node;
			return {
				...node,
				icon: {
					...icon,
					src,
					lightInvert: false
				}
			};
		}));
		function resetStates() {
			for (const node of props.workflow.nodes) nodeStates[node.id] = "idle";
		}
		let animationTimer = null;
		let stopped = false;
		async function sleep(ms) {
			return new Promise((resolve) => {
				animationTimer = setTimeout(resolve, ms);
			});
		}
		async function runAnimation() {
			stopped = false;
			resetStates();
			await sleep(ANIMATION_START_DELAY_MS);
			if (stopped) return;
			for (const step of executionSteps.value) {
				if (stopped) return;
				for (const id of step) nodeStates[id] = "running";
				await sleep(NODE_RUNNING_DURATION_MS);
				if (stopped) return;
				for (const id of step) nodeStates[id] = "success";
			}
		}
		function stopAnimation() {
			stopped = true;
			if (animationTimer) {
				clearTimeout(animationTimer);
				animationTimer = null;
			}
		}
		watch(() => props.animating, (val) => {
			if (val) runAnimation();
			else {
				stopAnimation();
				resetStates();
			}
		});
		onMounted(() => {
			resetStates();
			if (props.animating) runAnimation();
		});
		onUnmounted(stopAnimation);
		const bounds = computed(() => {
			const nodes = props.workflow.nodes;
			if (nodes.length === 0) return {
				minX: 0,
				minY: 0,
				width: 400,
				height: 200
			};
			const xs = nodes.map((n) => n.position.x);
			const ys = nodes.map((n) => n.position.y);
			const minX = Math.min(...xs) - PADDING;
			const minY = Math.min(...ys) - PADDING;
			const maxX = Math.max(...xs) + PADDING;
			const maxY = Math.max(...ys) + PADDING;
			return {
				minX,
				minY,
				width: maxX - minX,
				height: maxY - minY
			};
		});
		const effectiveCanvasWidth = computed(() => canvasRenderedWidth.value > 0 ? canvasRenderedWidth.value : CANVAS_WIDTH);
		const effectiveCanvasHeight = computed(() => canvasRenderedHeight.value > 0 ? canvasRenderedHeight.value : CANVAS_HEIGHT);
		const isMeasured = computed(() => canvasRenderedWidth.value > 0 && canvasRenderedHeight.value > 0);
		const scale = computed(() => {
			const availableWidth = effectiveCanvasWidth.value - 2 * CANVAS_INNER_PADDING;
			const availableHeight = effectiveCanvasHeight.value - 2 * CANVAS_INNER_PADDING;
			const scaleX = availableWidth / REFERENCE_WIDTH;
			const scaleY = availableHeight / REFERENCE_HEIGHT;
			return Math.max(.2, Math.min(scaleX, scaleY, MAX_SCALE));
		});
		const canvasMarginLeft = computed(() => (effectiveCanvasWidth.value - bounds.value.width * scale.value) / 2);
		const canvasMarginTop = computed(() => (effectiveCanvasHeight.value - bounds.value.height * scale.value) / 2);
		const containerStyle = computed(() => ({
			width: `${bounds.value.width}px`,
			height: `${bounds.value.height}px`,
			transform: `scale(${scale.value})`,
			transformOrigin: "top left",
			left: `${canvasMarginLeft.value}px`,
			top: `${canvasMarginTop.value}px`
		}));
		const viewBox = computed(() => `${bounds.value.minX} ${bounds.value.minY} ${bounds.value.width} ${bounds.value.height}`);
		function getEdgePath(connection) {
			const sourceNode = props.workflow.nodes.find((n) => n.id === connection.source);
			const targetNode = props.workflow.nodes.find((n) => n.id === connection.target);
			if (!sourceNode || !targetNode) return "";
			const sx = sourceNode.position.x + NODE_HALF_WIDTH;
			const sy = sourceNode.position.y - NODE_LABEL_OFFSET;
			const tx = targetNode.position.x - NODE_HALF_WIDTH;
			const ty = targetNode.position.y - NODE_LABEL_OFFSET;
			const dist = Math.abs(tx - sx);
			const cx = Math.min(EDGE_CURVE_OFFSET, dist * .4);
			return `M ${sx} ${sy} C ${sx + cx} ${sy}, ${tx - cx} ${ty}, ${tx} ${ty}`;
		}
		function isEdgeSuccess(connection) {
			return nodeStates[connection.target] === "success";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "canvasRef",
				ref: canvasRef,
				class: normalizeClass(_ctx.$style.canvas),
				"data-test-id": "instance-ai-preview-canvas"
			}, [withDirectives(createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.viewport),
				style: normalizeStyle(containerStyle.value)
			}, [(openBlock(), createElementBlock("svg", {
				class: normalizeClass(_ctx.$style.edges),
				viewBox: viewBox.value
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.workflow.connections, (conn, idx) => {
				return openBlock(), createElementBlock("path", {
					key: `edge-${idx}`,
					d: getEdgePath(conn),
					class: normalizeClass([_ctx.$style.edge, isEdgeSuccess(conn) && _ctx.$style.edgeSuccess])
				}, null, 10, _hoisted_2);
			}), 128))], 10, _hoisted_1$1)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.nodesLayer) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayNodes.value, (node) => {
				return openBlock(), createBlock(WorkflowPreviewNode_default, {
					key: node.id,
					node,
					state: nodeStates[node.id] ?? "idle",
					trigger: triggerNodeIds.value.has(node.id),
					"offset-x": bounds.value.minX,
					"offset-y": bounds.value.minY
				}, null, 8, [
					"node",
					"state",
					"trigger",
					"offset-x",
					"offset-y"
				]);
			}), 128))], 2)], 6), [[vShow, isMeasured.value]])], 2);
		};
	}
});
var InstanceAiPreviewCanvas_vue_vue_type_style_index_0_lang_module_default = {
	canvas: "_canvas_11woq_125",
	viewport: "_viewport_11woq_132",
	edges: "_edges_11woq_136",
	edge: "_edge_11woq_136",
	edgeSuccess: "_edgeSuccess_11woq_152",
	nodesLayer: "_nodesLayer_11woq_156"
};
var InstanceAiPreviewCanvas_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPreviewCanvas_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPreviewCanvas_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/components/CanvasWaitingState.vue?vue&type=script&setup=true&lang.ts
var CanvasWaitingState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CanvasWaitingState",
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.waiting),
				"data-test-id": "instance-ai-canvas-loader"
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.dots),
				"aria-hidden": "true"
			}, [
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.dot) }, null, 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.dot) }, null, 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.dot) }, null, 2)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [createVNode(unref(N8nText_default), {
				size: "small",
				class: normalizeClass(_ctx.$style.hint)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.instanceAiSplitEmptyState.canvas.ready")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nInfoTip_default), {
				type: "note",
				theme: "info",
				bold: false,
				class: normalizeClass(_ctx.$style.tip)
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.tipLabel) }, toDisplayString(unref(i18n).baseText("experiments.instanceAiSplitEmptyState.canvas.tipLabel")), 3), createTextVNode(" " + toDisplayString(unref(i18n).baseText("experiments.instanceAiSplitEmptyState.canvas.tip")), 1)]),
				_: 1
			}, 8, ["class"])], 2)], 2);
		};
	}
});
var CanvasWaitingState_vue_vue_type_style_index_0_lang_module_default = {
	waiting: "_waiting_a3w3a_125",
	dots: "_dots_a3w3a_132",
	dot: "_dot_a3w3a_132",
	waitingWave: "_waitingWave_a3w3a_1",
	text: "_text_a3w3a_151",
	hint: "_hint_a3w3a_160",
	tip: "_tip_a3w3a_165",
	tipLabel: "_tipLabel_a3w3a_170"
};
var CanvasWaitingState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CanvasWaitingState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CanvasWaitingState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/components/CyclingPreviewCanvas.vue?vue&type=script&setup=true&lang.ts
var CyclingPreviewCanvas_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CyclingPreviewCanvas",
	props: {
		examples: {},
		activeIndex: {},
		projectId: { default: void 0 },
		mode: { default: "preview" }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const { buildManually } = useBuildManually();
		const activeWorkflow = computed(() => getPreviewWorkflow(props.examples[props.activeIndex].workflowFile));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.frame) }, [createVNode(unref(N8nButton_default), {
				variant: "outline",
				size: "small",
				icon: "plus",
				class: normalizeClass(_ctx.$style.buildManually),
				"data-test-id": "instance-ai-canvas-build-manually",
				onClick: _cache[0] || (_cache[0] = ($event) => unref(buildManually)(props.projectId))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.instanceAiSplitEmptyState.cta.buildManually")), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.canvasArea) }, [props.mode === "loader" ? (openBlock(), createBlock(CanvasWaitingState_default, { key: 0 })) : activeWorkflow.value ? (openBlock(), createBlock(InstanceAiPreviewCanvas_default, {
				key: props.activeIndex,
				workflow: activeWorkflow.value
			}, null, 8, ["workflow"])) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var CyclingPreviewCanvas_vue_vue_type_style_index_0_lang_module_default = {
	frame: "_frame_ub8vq_125",
	buildManually: "_buildManually_ub8vq_139",
	canvasArea: "_canvasArea_ub8vq_146"
};
var CyclingPreviewCanvas_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CyclingPreviewCanvas_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CyclingPreviewCanvas_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/components/InstanceAiSplitEmptyState.vue?vue&type=script&setup=true&lang.ts
var InstanceAiSplitEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiSplitEmptyState",
	props: {
		projectId: { default: void 0 },
		disabled: {
			type: Boolean,
			default: false
		},
		writing: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"submit-suggestion",
		"insert-suggestion",
		"example-change"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const isWideViewport = useMediaQuery("(min-width: 1024px)");
		const EXAMPLES = INSTANCE_AI_SPLIT_EMPTY_STATE_EXAMPLES;
		const cycle = useCyclingExamples(EXAMPLES.length, { intervalMs: INSTANCE_AI_SPLIT_EMPTY_STATE_CYCLE_MS });
		const editingExample = ref(false);
		const cycleStopped = ref(false);
		const anchorIndex = ref(0);
		const hoveredIndex = ref(null);
		watch(() => props.writing || cycleStopped.value || hoveredIndex.value !== null, (shouldPause) => shouldPause ? cycle.pause() : cycle.resume(), { immediate: true });
		watch(() => props.writing, (w) => {
			if (!w) editingExample.value = false;
		});
		const displayedIndex = computed(() => hoveredIndex.value ?? (cycleStopped.value ? anchorIndex.value : cycle.activeIndex.value));
		watch(displayedIndex, (i) => emit("example-change", i, EXAMPLES[i].promptKey), { immediate: true });
		function handleHover(index) {
			hoveredIndex.value = index;
		}
		function handleHoverEnd() {
			if (hoveredIndex.value !== null && !cycleStopped.value) cycle.activeIndex.value = hoveredIndex.value;
			hoveredIndex.value = null;
		}
		function handleEdit(payload) {
			editingExample.value = true;
			cycleStopped.value = true;
			anchorIndex.value = payload.position - 1;
			hoveredIndex.value = null;
			emit("insert-suggestion", payload);
		}
		const canvasMode = computed(() => props.writing && !editingExample.value ? "loader" : "preview");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.split, unref(isWideViewport) && _ctx.$style.withCanvas]),
				"data-test-id": "instance-ai-split-empty-state"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatColumn) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerSlot) }, [renderSlot(_ctx.$slots, "header")], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatCenter) }, [createVNode(unref(N8nText_default), {
					tag: "h1",
					size: "xlarge",
					bold: "",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.instanceAiSplitEmptyState.emptyState.title")), 1)]),
					_: 1
				}, 8, ["class"]), renderSlot(_ctx.$slots, "input")], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.examplesBottom) }, [createVNode(SuggestionList_default, {
					examples: unref(EXAMPLES),
					"active-index": canvasMode.value === "loader" ? -1 : displayedIndex.value,
					"interval-ms": unref(INSTANCE_AI_SPLIT_EMPTY_STATE_CYCLE_MS),
					paused: unref(cycle).isPaused.value,
					disabled: props.disabled,
					onHover: handleHover,
					onHoverEnd: handleHoverEnd,
					onSubmit: _cache[0] || (_cache[0] = ($event) => emit("submit-suggestion", $event)),
					onEdit: handleEdit
				}, null, 8, [
					"examples",
					"active-index",
					"interval-ms",
					"paused",
					"disabled"
				])], 2)
			], 2), unref(isWideViewport) ? (openBlock(), createBlock(CyclingPreviewCanvas_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.canvas),
				examples: unref(EXAMPLES),
				"active-index": displayedIndex.value,
				"project-id": props.projectId,
				mode: canvasMode.value,
				"data-test-id": "instance-ai-preview-canvas"
			}, null, 8, [
				"class",
				"examples",
				"active-index",
				"project-id",
				"mode"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/components/InstanceAiSplitEmptyState.vue?vue&type=style&index=0&lang.module.scss
var split = "_split_1fl2i_341";
var chatColumn = "_chatColumn_1fl2i_348";
var headerSlot = "_headerSlot_1fl2i_359";
var chatCenter = "_chatCenter_1fl2i_363";
var examplesBottom = "_examplesBottom_1fl2i_376";
var withCanvas = "_withCanvas_1fl2i_386";
var title$1 = "_title_1fl2i_423";
var fadeIn$1 = "_fadeIn_1fl2i_1";
var canvas = "_canvas_1fl2i_432";
var shimmer = "_shimmer_1fl2i_1";
var spin = "_spin_1fl2i_1";
var opacityPulse = "_opacityPulse_1fl2i_1";
var popoverIn = "_popoverIn_1fl2i_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1fl2i_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1fl2i_1";
var pulseGlow = "_pulseGlow_1fl2i_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1fl2i_1";
var fade = "_fade_1fl2i_1";
var fadeInUp = "_fadeInUp_1fl2i_1";
var fadeInDown = "_fadeInDown_1fl2i_1";
var fadeInLeft = "_fadeInLeft_1fl2i_1";
var fadeInRight = "_fadeInRight_1fl2i_1";
var fadeOut = "_fadeOut_1fl2i_1";
var fadeOutDown = "_fadeOutDown_1fl2i_1";
var fadeOutUp = "_fadeOutUp_1fl2i_1";
var fadeOutLeft = "_fadeOutLeft_1fl2i_1";
var fadeOutRight = "_fadeOutRight_1fl2i_1";
var ping = "_ping_1fl2i_1";
var blinkBackground = "_blinkBackground_1fl2i_1";
var typingBlink = "_typingBlink_1fl2i_1";
var InstanceAiSplitEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	split,
	chatColumn,
	headerSlot,
	chatCenter,
	examplesBottom,
	withCanvas,
	title: title$1,
	fadeIn: fadeIn$1,
	canvas,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1fl2i_1",
	opacityPulse,
	popoverIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var InstanceAiSplitEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiSplitEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiSplitEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiSplitEmptyState/useInstanceAiSplitEmptyStateExperiment.ts
function useInstanceAiSplitEmptyStateExperiment() {
	const posthogStore = usePostHog();
	const currentVariant = computed(() => posthogStore.getVariant(INSTANCE_AI_SPLIT_EMPTY_STATE_EXPERIMENT.name));
	const isVariantEnabled = computed(() => currentVariant.value === INSTANCE_AI_SPLIT_EMPTY_STATE_EXPERIMENT.variant);
	return {
		currentVariant,
		isFeatureEnabled: isVariantEnabled,
		isVariantEnabled
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiEmptyState.vue?vue&type=script&setup=true&lang.ts
var InstanceAiEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiEmptyState",
	props: {
		titleKey: { default: "instanceAi.emptyState.title" },
		showTitleIcon: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const i18n = useI18n();
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-empty-state"
			}, [createVNode(unref(N8nText_default), {
				tag: "h1",
				size: "xlarge",
				bold: "",
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [props.showTitleIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "sparkles",
					class: normalizeClass(_ctx.$style.titleIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(unref(i18n).baseText(props.titleKey)), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
var InstanceAiEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_y4biy_125",
	fadeIn: "_fadeIn_y4biy_1",
	title: "_title_y4biy_143",
	titleIcon: "_titleIcon_y4biy_149"
};
var InstanceAiEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ProjectSelect.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { style: { "white-space": "nowrap" } };
var ProjectSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSelect",
	props: {
		"modelValue": {},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const PERSONAL_PROJECT_ICON = {
			type: "icon",
			value: "user"
		};
		const FALLBACK_PROJECT_ICON = {
			type: "icon",
			value: "layers"
		};
		const i18n = useI18n();
		const projectsStore = useProjectsStore();
		const model = useModel(__props, "modelValue");
		const open = ref(false);
		const isTooltipSuppressed = ref(false);
		let tooltipSuppressTimeout;
		const selectedProject = computed(() => projectsStore.myProjects.find((project) => project.id === model.value));
		const showSearch = computed(() => projectsStore.myProjects.length > 5);
		const selectedProjectName = computed(() => selectedProject.value ? getProjectName(selectedProject.value) : i18n.baseText("instanceAi.projectSelect.placeholder"));
		const selectedProjectIcon = computed(() => getProjectIcon(selectedProject.value));
		const isTooltipDisabled = computed(() => open.value || isTooltipSuppressed.value);
		watch(open, (isOpen, wasOpen) => {
			if (!isOpen && wasOpen) suppressTooltip();
		});
		onBeforeUnmount(() => {
			clearTimeout(tooltipSuppressTimeout);
		});
		function getProjectName(project) {
			return project.type === "personal" ? i18n.baseText("instanceAi.projectSelect.personalSpace") : project.name ?? "";
		}
		function getProjectIcon(project) {
			if (project?.type === "personal") return PERSONAL_PROJECT_ICON;
			return project?.icon && isIconOrEmoji(project.icon) ? project.icon : FALLBACK_PROJECT_ICON;
		}
		function suppressTooltip() {
			clearTimeout(tooltipSuppressTimeout);
			isTooltipSuppressed.value = true;
			tooltipSuppressTimeout = setTimeout(() => {
				isTooltipSuppressed.value = false;
			}, 600);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ComboboxRoot_default), {
				modelValue: model.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
				open: open.value,
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => open.value = $event)
			}, {
				default: withCtx(() => [createVNode(unref(ComboboxAnchor_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(unref(ComboboxTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
							placement: "bottom",
							"as-child": "",
							"content-class": _ctx.$style.tooltip,
							disabled: isTooltipDisabled.value,
							"show-after": unref(500)
						}, {
							content: withCtx(() => [createBaseVNode("span", _hoisted_1, toDisplayString(unref(i18n).baseText("instanceAi.projectSelect.tooltip")), 1)]),
							default: withCtx(() => [createBaseVNode("button", {
								type: "button",
								class: normalizeClass(_ctx.$style.select)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.triggerContent) }, [createVNode(ProjectIcon_default, {
								icon: selectedProjectIcon.value,
								size: "small",
								"border-less": "",
								class: normalizeClass(_ctx.$style.triggerProjectIcon)
							}, null, 8, ["icon", "class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.triggerLabel) }, toDisplayString(selectedProjectName.value), 3)], 2), createVNode(unref(N8nIcon_default), {
								icon: "chevron-down",
								size: "small",
								class: normalizeClass(_ctx.$style.trailingIcon)
							}, null, 8, ["class"])], 2)]),
							_: 1
						}, 8, [
							"content-class",
							"disabled",
							"show-after"
						])]),
						_: 1
					})]),
					_: 1
				}), createVNode(unref(ComboboxPortal_default), null, {
					default: withCtx(() => [createVNode(unref(ComboboxContent_default), {
						position: "popper",
						align: "start",
						class: normalizeClass(_ctx.$style.content)
					}, {
						default: withCtx(() => [
							showSearch.value ? (openBlock(), createBlock(unref(ComboboxInput_default), {
								key: 0,
								placeholder: unref(i18n).baseText("instanceAi.projectSelect.search"),
								class: normalizeClass(_ctx.$style.input),
								"display-value": () => ""
							}, null, 8, ["placeholder", "class"])) : createCommentVNode("", true),
							createVNode(unref(ComboboxEmpty_default), { class: normalizeClass(_ctx.$style.empty) }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.projectSelect.noResults")), 1)]),
								_: 1
							}, 8, ["class"]),
							createVNode(unref(N8nScrollArea_default), {
								class: normalizeClass([_ctx.$style.scrollArea, { [_ctx.$style.scrollAreaWithSearch]: showSearch.value }]),
								type: "hover",
								"max-height": "min(320px, var(--reka-combobox-content-available-height))",
								"as-child": ""
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(projectsStore).myProjects, (project) => {
									return openBlock(), createBlock(unref(ComboboxItem_default), {
										key: project.id,
										value: project.id,
										"text-value": getProjectName(project),
										class: normalizeClass(_ctx.$style.item)
									}, {
										default: withCtx(() => [
											createVNode(ProjectIcon_default, {
												icon: getProjectIcon(project),
												size: "small",
												"border-less": ""
											}, null, 8, ["icon"]),
											createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(getProjectName(project)), 3),
											selectedProject.value?.id === project.id ? (openBlock(), createBlock(unref(N8nIcon_default), {
												key: 0,
												icon: "check",
												size: "small",
												class: normalizeClass(_ctx.$style.check)
											}, null, 8, ["class"])) : createCommentVNode("", true)
										]),
										_: 2
									}, 1032, [
										"value",
										"text-value",
										"class"
									]);
								}), 128))]),
								_: 1
							}, 8, ["class"])
						]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue", "open"]);
		};
	}
});
var ProjectSelect_vue_vue_type_style_index_0_lang_module_default = {
	select: "_select_1wd6t_125",
	content: "_content_1wd6t_157",
	scrollArea: "_scrollArea_1wd6t_169",
	scrollAreaWithSearch: "_scrollAreaWithSearch_1wd6t_175",
	input: "_input_1wd6t_180",
	empty: "_empty_1wd6t_198",
	item: "_item_1wd6t_204",
	triggerContent: "_triggerContent_1wd6t_220",
	triggerProjectIcon: "_triggerProjectIcon_1wd6t_227",
	trailingIcon: "_trailingIcon_1wd6t_234",
	triggerLabel: "_triggerLabel_1wd6t_239",
	label: "_label_1wd6t_240",
	check: "_check_1wd6t_255",
	tooltip: "_tooltip_1wd6t_260"
};
var ProjectSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/InstanceAiEmptyView.vue?vue&type=script&setup=true&lang.ts
var INSTANCE_AI_DEFAULT_TITLE_KEY = "instanceAi.emptyState.title";
var INSTANCE_AI_PROMPT_SUGGESTIONS_V2_TITLE_KEY = "experiments.instanceAiPromptSuggestionsV2.emptyState.title";
var INSTANCE_AI_PROMPT_SUGGESTIONS_V2_PLACEHOLDER_KEY = "experiments.instanceAiPromptSuggestionsV2.input.placeholder";
var INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS_TITLE_KEY = "experiments.instanceAiWorkflowPreviewSuggestions.emptyState.title";
var INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS_PLACEHOLDER_KEY = "experiments.instanceAiWorkflowPreviewSuggestions.input.placeholder";
var INSTANCE_AI_SPLIT_EMPTY_STATE_PLACEHOLDER_KEY = "experiments.instanceAiSplitEmptyState.input.placeholder";
var INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_PLACEHOLDER_KEY = "experiments.instanceAiPersonalizedPromptSuggestions.input.placeholder";
var INSTANCE_AI_SPLIT_FIXED_ROWS = 5;
var PERSONALIZED_PROMPT_METADATA_TIMEOUT_MS = 2e3;
var INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPOSURE_EVENT = "Instance AI personalized prompt suggestions exposed";
var CANVAS_NATURAL_HEIGHT_PX = 420;
var PREVIEW_MIN_SCALE = .3;
var InstanceAiEmptyView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiEmptyView",
	setup(__props) {
		const store = useInstanceAiStore();
		const appSettingsStore = useSettingsStore();
		const cloudPlanStore = useCloudPlanStore();
		const projectsStore = useProjectsStore();
		const selectedProject = ref(projectsStore.personalProject?.id);
		const settingsStore = useInstanceAiSettingsStore();
		const { isLowCredits } = storeToRefs(store);
		const rootStore = useRootStore();
		const router = useRouter();
		const toast = useToast();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const { goToUpgrade } = usePageRedirectionHelper();
		const creditBanner = useCreditWarningBanner(isLowCredits);
		const { isFeatureEnabled: isProactiveAgentExperimentEnabled } = useInstanceAiProactiveAgentExperiment();
		const { isFeatureEnabled: isPromptSuggestionsV2ExperimentEnabled } = useInstanceAiPromptSuggestionsV2Experiment();
		const { isFeatureEnabled: isWorkflowPreviewSuggestionsExperimentEnabled } = useInstanceAiWorkflowPreviewSuggestionsExperiment();
		const { isVariantEnabled: isSplitVariantEnabled } = useInstanceAiSplitEmptyStateExperiment();
		const splitPreviewPromptKey = ref(null);
		const splitWriting = ref(false);
		const { currentVariant: personalizedPromptSuggestionsVariant, isTreatmentVariant: isPersonalizedPromptSuggestionsTreatmentVariant, suggestionFormat: personalizedPromptSuggestionsFormat } = useInstanceAiPersonalizedPromptSuggestionsExperiment();
		const showProactiveStarter = computed(() => isProactiveAgentExperimentEnabled.value);
		const isSplitLayoutActive = computed(() => isSplitVariantEnabled.value && !showProactiveStarter.value);
		const shouldTrackPersonalizedPromptSuggestionsExposure = computed(() => typeof personalizedPromptSuggestionsVariant.value === "string" && !showProactiveStarter.value && !isSplitLayoutActive.value && settingsStore.isWorkflowBuilderAvailable);
		const activeWorkflowPreviewFile = ref(null);
		const activeWorkflowPreview = computed(() => {
			if (!activeWorkflowPreviewFile.value) return null;
			return getPreviewWorkflow(activeWorkflowPreviewFile.value) ?? null;
		});
		const personalizedPromptSuggestionResolution = ref(null);
		const personalizedPromptProfileOverride = usePersonalizedPromptProfileOverride();
		let personalizedPromptMetadataTimeout = null;
		let hasTrackedPersonalizedPromptSuggestionsExposure = false;
		const personalizedPromptFallbackSuggestions = computed(() => getTopUsedV2FallbackSuggestions((key) => i18n.baseText(key)));
		function clearPersonalizedPromptMetadataTimeout() {
			if (!personalizedPromptMetadataTimeout) return;
			clearTimeout(personalizedPromptMetadataTimeout);
			personalizedPromptMetadataTimeout = null;
		}
		function setPersonalizedPromptResolution(metadataLoadState) {
			const format = personalizedPromptSuggestionsFormat.value;
			if (!format) {
				personalizedPromptSuggestionResolution.value = null;
				return;
			}
			personalizedPromptSuggestionResolution.value = resolvePersonalizedPromptSuggestions({
				metadata: personalizedPromptProfileOverride.value ? null : cloudPlanStore.currentUserCloudInfo?.information ?? null,
				metadataLoadState: personalizedPromptProfileOverride.value ? "loaded" : metadataLoadState,
				format,
				profileOverride: personalizedPromptProfileOverride.value,
				fallbackSuggestions: personalizedPromptFallbackSuggestions.value
			});
		}
		function resolvePersonalizedPromptMetadata() {
			clearPersonalizedPromptMetadataTimeout();
			personalizedPromptSuggestionResolution.value = null;
			if (!isPersonalizedPromptSuggestionsTreatmentVariant.value) return;
			if (personalizedPromptProfileOverride.value) {
				setPersonalizedPromptResolution("loaded");
				return;
			}
			if (!appSettingsStore.isCloudDeployment) {
				setPersonalizedPromptResolution("not_cloud");
				return;
			}
			if (cloudPlanStore.state.initialized) {
				setPersonalizedPromptResolution(cloudPlanStore.currentUserCloudInfo ? "loaded" : "failed");
				return;
			}
			personalizedPromptMetadataTimeout = setTimeout(() => {
				personalizedPromptMetadataTimeout = null;
				setPersonalizedPromptResolution("timed_out");
			}, PERSONALIZED_PROMPT_METADATA_TIMEOUT_MS);
		}
		watch([
			isPersonalizedPromptSuggestionsTreatmentVariant,
			personalizedPromptSuggestionsFormat,
			personalizedPromptProfileOverride,
			() => appSettingsStore.isCloudDeployment
		], resolvePersonalizedPromptMetadata, { immediate: true });
		watch(shouldTrackPersonalizedPromptSuggestionsExposure, (shouldTrackExposure) => {
			const variant = personalizedPromptSuggestionsVariant.value;
			if (!shouldTrackExposure || hasTrackedPersonalizedPromptSuggestionsExposure || typeof variant !== "string") return;
			telemetry.track(INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPOSURE_EVENT, getExperimentTelemetryPayload(INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPERIMENT, variant));
			hasTrackedPersonalizedPromptSuggestionsExposure = true;
		}, { immediate: true });
		watch([() => cloudPlanStore.state.initialized, () => cloudPlanStore.currentUserCloudInfo], ([initialized]) => {
			if (!isPersonalizedPromptSuggestionsTreatmentVariant.value || personalizedPromptSuggestionResolution.value !== null || !initialized) return;
			clearPersonalizedPromptMetadataTimeout();
			setPersonalizedPromptResolution(cloudPlanStore.currentUserCloudInfo ? "loaded" : "failed");
		});
		const emptyStatePromptSuggestionProps = computed(() => {
			if (showProactiveStarter.value) return {};
			if (isPersonalizedPromptSuggestionsTreatmentVariant.value) {
				const resolution = personalizedPromptSuggestionResolution.value;
				if (!resolution) return {
					suggestions: [],
					placeholderKey: INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_PLACEHOLDER_KEY
				};
				return {
					suggestions: resolution.suggestions,
					suggestionsComponent: InstanceAiPersonalizedPromptSuggestions_default,
					suggestionsComponentProps: {
						fallbackSuggestions: resolution.fallbackSuggestions,
						format: personalizedPromptSuggestionsFormat.value,
						showSeeMore: resolution.showSeeMore
					},
					suggestionCatalogVersion: INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_VERSION,
					suggestionTelemetryPayload: getExperimentTelemetryPayload(INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPERIMENT, personalizedPromptSuggestionsVariant.value, resolution.telemetryPayload),
					placeholderKey: INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_PLACEHOLDER_KEY
				};
			}
			if (isPromptSuggestionsV2ExperimentEnabled.value) return {
				suggestions: INSTANCE_AI_PROMPT_SUGGESTIONS_V2,
				suggestionsComponent: InstanceAiPromptSuggestionsV2_default,
				suggestionCatalogVersion: "v2",
				placeholderKey: INSTANCE_AI_PROMPT_SUGGESTIONS_V2_PLACEHOLDER_KEY
			};
			if (isWorkflowPreviewSuggestionsExperimentEnabled.value) return {
				suggestions: INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS,
				suggestionsComponent: WorkflowPreviewSuggestions_default,
				suggestionCatalogVersion: INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS_VERSION,
				placeholderKey: INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS_PLACEHOLDER_KEY
			};
			return { suggestions: INSTANCE_AI_EMPTY_STATE_SUGGESTIONS };
		});
		const emptyStateTitleKey = computed(() => {
			if (isPersonalizedPromptSuggestionsTreatmentVariant.value) return INSTANCE_AI_PROMPT_SUGGESTIONS_V2_TITLE_KEY;
			if (isPromptSuggestionsV2ExperimentEnabled.value) return INSTANCE_AI_PROMPT_SUGGESTIONS_V2_TITLE_KEY;
			if (isWorkflowPreviewSuggestionsExperimentEnabled.value) return INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS_TITLE_KEY;
			return INSTANCE_AI_DEFAULT_TITLE_KEY;
		});
		const chatInputRef = ref(null);
		const isStartingThread = ref(false);
		const emptyLayoutRef = useTemplateRef("emptyLayout");
		const centeredInputRef = useTemplateRef("centeredInput");
		const previewScale = ref(1);
		useResizeObserver(emptyLayoutRef, () => {
			if (!emptyLayoutRef.value || !centeredInputRef.value) return;
			const containerRect = emptyLayoutRef.value.getBoundingClientRect();
			const inputRect = centeredInputRef.value.getBoundingClientRect();
			const layoutStyles = getComputedStyle(emptyLayoutRef.value);
			const bottomPadding = parseFloat(layoutStyles.paddingBottom);
			const gap = parseFloat(layoutStyles.gap) || 0;
			const remainingSpace = containerRect.bottom - inputRect.bottom - bottomPadding - gap;
			previewScale.value = Math.max(0, Math.min(1, remainingSpace / CANVAS_NATURAL_HEIGHT_PX));
		});
		const hasSpaceForPreview = computed(() => previewScale.value >= PREVIEW_MIN_SCALE);
		const workflowPreviewWrapperStyle = computed(() => ({
			transform: `scale(${previewScale.value})`,
			transformOrigin: "top center",
			height: `${CANVAS_NATURAL_HEIGHT_PX * previewScale.value}px`
		}));
		useChatInputAutoFocus(chatInputRef, { disabled: isStartingThread });
		function handleWorkflowPreview(workflowFile) {
			activeWorkflowPreviewFile.value = workflowFile;
		}
		onMounted(() => {
			nextTick(() => chatInputRef.value?.focus());
		});
		onUnmounted(clearPersonalizedPromptMetadataTimeout);
		async function handleSubmit(message, attachments) {
			if (!settingsStore.isWorkflowBuilderAvailable) return;
			if (!selectedProject.value) {
				toast.showError(/* @__PURE__ */ new Error("Please select a project before starting a thread."), "Send failed");
				return;
			}
			const threadId = v4();
			isStartingThread.value = true;
			try {
				await store.syncThread(threadId, selectedProject.value);
			} catch {
				isStartingThread.value = false;
				toast.showError(/* @__PURE__ */ new Error("Failed to start a new thread. Try again."), "Send failed");
				return;
			}
			store.getOrCreateRuntime(threadId, selectedProject.value).sendMessage(message, attachments, rootStore.pushRef);
			router.replace({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			});
		}
		function handleShelfSuggestionSubmit(payload) {
			chatInputRef.value?.submitSuggestion(payload);
		}
		function handleShelfSuggestionInsert(payload) {
			splitPreviewPromptKey.value = null;
			chatInputRef.value?.insertSuggestion(payload);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.chatArea) }, [!isSplitLayoutActive.value ? (openBlock(), createBlock(InstanceAiViewHeader_default, { key: 0 })) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentArea) }, [showProactiveStarter.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.proactiveLayout)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.proactiveMessageList) }, [createVNode(unref(InstanceAiProactiveStarterMessage_default))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.proactiveInput) }, [
				unref(creditBanner).visible.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
					key: 0,
					"credits-remaining": unref(store).creditsRemaining,
					"credits-quota": unref(store).creditsQuota,
					onUpgradeClick: _cache[0] || (_cache[0] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
					onDismiss: _cache[1] || (_cache[1] = ($event) => unref(creditBanner).dismiss())
				}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true),
				!unref(settingsStore).isWorkflowBuilderAvailable ? (openBlock(), createBlock(WorkflowBuilderUnavailableNotice_default, { key: 1 })) : createCommentVNode("", true),
				createVNode(InstanceAiInput_default, {
					ref_key: "chatInputRef",
					ref: chatInputRef,
					"is-submitting": isStartingThread.value,
					"is-workflow-builder-available": unref(settingsStore).isWorkflowBuilderAvailable,
					onSubmit: handleSubmit
				}, createSlots({ _: 2 }, [unref(projectsStore).myProjects.length > 1 ? {
					name: "footer",
					fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputFooter) }, [createVNode(ProjectSelect_default, {
						modelValue: selectedProject.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedProject.value = $event)
					}, null, 8, ["modelValue"])], 2)]),
					key: "0"
				} : void 0]), 1032, ["is-submitting", "is-workflow-builder-available"])
			], 2)], 2)) : unref(isSplitVariantEnabled) ? (openBlock(), createBlock(unref(InstanceAiSplitEmptyState_default), {
				key: 1,
				"project-id": selectedProject.value,
				disabled: isStartingThread.value || !unref(settingsStore).isWorkflowBuilderAvailable,
				writing: splitWriting.value,
				onSubmitSuggestion: handleShelfSuggestionSubmit,
				onInsertSuggestion: handleShelfSuggestionInsert,
				onExampleChange: _cache[7] || (_cache[7] = (_i, key) => splitPreviewPromptKey.value = key)
			}, {
				header: withCtx(() => [createVNode(InstanceAiViewHeader_default)]),
				input: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.centeredInput) }, [
					unref(creditBanner).visible.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
						key: 0,
						"credits-remaining": unref(store).creditsRemaining,
						"credits-quota": unref(store).creditsQuota,
						onUpgradeClick: _cache[3] || (_cache[3] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
						onDismiss: _cache[4] || (_cache[4] = ($event) => unref(creditBanner).dismiss())
					}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true),
					!unref(settingsStore).isWorkflowBuilderAvailable ? (openBlock(), createBlock(WorkflowBuilderUnavailableNotice_default, { key: 1 })) : createCommentVNode("", true),
					createVNode(InstanceAiInput_default, {
						ref_key: "chatInputRef",
						ref: chatInputRef,
						"is-submitting": isStartingThread.value,
						"is-workflow-builder-available": unref(settingsStore).isWorkflowBuilderAvailable,
						"placeholder-key": INSTANCE_AI_SPLIT_EMPTY_STATE_PLACEHOLDER_KEY,
						"preview-prompt-key": splitWriting.value ? null : splitPreviewPromptKey.value,
						"fixed-rows": INSTANCE_AI_SPLIT_FIXED_ROWS,
						"submit-label": unref(i18n).baseText("experiments.instanceAiSplitEmptyState.cta.buildWithAi"),
						"submit-active-requires-focus": true,
						"suggestion-catalog-version": unref(INSTANCE_AI_SPLIT_EMPTY_STATE_SUGGESTIONS_VERSION),
						onSubmit: handleSubmit,
						onContentChange: _cache[6] || (_cache[6] = ($event) => splitWriting.value = $event)
					}, createSlots({ _: 2 }, [unref(projectsStore).myProjects.length > 1 ? {
						name: "footer",
						fn: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.inputFooter),
							"data-test-id": "instance-ai-split-project-select"
						}, [createVNode(ProjectSelect_default, {
							modelValue: selectedProject.value,
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedProject.value = $event)
						}, null, 8, ["modelValue"])], 2)]),
						key: "0"
					} : void 0]), 1032, [
						"is-submitting",
						"is-workflow-builder-available",
						"preview-prompt-key",
						"submit-label",
						"suggestion-catalog-version"
					])
				], 2)]),
				_: 1
			}, 8, [
				"project-id",
				"disabled",
				"writing"
			])) : (openBlock(), createElementBlock("div", {
				key: 2,
				ref: "emptyLayout",
				class: normalizeClass(_ctx.$style.emptyLayout)
			}, [
				createVNode(InstanceAiEmptyState_default, {
					"title-key": emptyStateTitleKey.value,
					"show-title-icon": true
				}, null, 8, ["title-key"]),
				createBaseVNode("div", {
					ref: "centeredInput",
					class: normalizeClass(_ctx.$style.centeredInput)
				}, [
					unref(creditBanner).visible.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
						key: 0,
						"credits-remaining": unref(store).creditsRemaining,
						"credits-quota": unref(store).creditsQuota,
						onUpgradeClick: _cache[8] || (_cache[8] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
						onDismiss: _cache[9] || (_cache[9] = ($event) => unref(creditBanner).dismiss())
					}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true),
					!unref(settingsStore).isWorkflowBuilderAvailable ? (openBlock(), createBlock(WorkflowBuilderUnavailableNotice_default, { key: 1 })) : createCommentVNode("", true),
					createVNode(InstanceAiInput_default, mergeProps({
						ref_key: "chatInputRef",
						ref: chatInputRef,
						"is-submitting": isStartingThread.value,
						"is-workflow-builder-available": unref(settingsStore).isWorkflowBuilderAvailable
					}, emptyStatePromptSuggestionProps.value, {
						onSubmit: handleSubmit,
						onWorkflowPreview: handleWorkflowPreview
					}), createSlots({ _: 2 }, [unref(projectsStore).myProjects.length > 1 ? {
						name: "footer",
						fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputFooter) }, [createVNode(ProjectSelect_default, {
							modelValue: selectedProject.value,
							"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => selectedProject.value = $event)
						}, null, 8, ["modelValue"])], 2)]),
						key: "0"
					} : void 0]), 1040, ["is-submitting", "is-workflow-builder-available"])
				], 2),
				createVNode(Transition, { name: "workflow-preview-fade" }, {
					default: withCtx(() => [unref(isWorkflowPreviewSuggestionsExperimentEnabled) && activeWorkflowPreview.value && hasSpaceForPreview.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.workflowPreviewWrapper),
						style: normalizeStyle(workflowPreviewWrapperStyle.value)
					}, [createVNode(unref(WorkflowPreviewCanvas_default), {
						workflow: activeWorkflowPreview.value,
						class: normalizeClass(_ctx.$style.workflowPreview)
					}, null, 8, ["workflow", "class"])], 6)) : createCommentVNode("", true)]),
					_: 1
				})
			], 2))], 2)], 2);
		};
	}
});
var InstanceAiEmptyView_vue_vue_type_style_index_0_lang_module_default = {
	inputFooter: "_inputFooter_r5gli_125",
	chatArea: "_chatArea_r5gli_138",
	contentArea: "_contentArea_r5gli_148",
	emptyLayout: "_emptyLayout_r5gli_155",
	centeredInput: "_centeredInput_r5gli_165",
	workflowPreviewWrapper: "_workflowPreviewWrapper_r5gli_173",
	workflowPreview: "_workflowPreview_r5gli_173",
	proactiveLayout: "_proactiveLayout_r5gli_184",
	proactiveMessageList: "_proactiveMessageList_r5gli_191",
	proactiveInput: "_proactiveInput_r5gli_202"
};
var InstanceAiEmptyView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiEmptyView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiEmptyView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiEmptyView_default as default };

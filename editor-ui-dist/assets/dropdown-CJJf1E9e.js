import { $ as openBlock, C as createBaseVNode, E as createElementBlock, F as guardReactiveProps, Ft as readonly, Gt as unref, It as ref, N as defineComponent, O as createSlots, P as getCurrentInstance, R as inject, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, W as nextTick, X as onMounted, _ as Fragment, at as resolveComponent, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, q as onBeforeUnmount, st as resolveDynamicComponent, tt as provide, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Cn as OnlyChild, Sn as FOCUS_TRAP_INJECTION_KEY, _n as ElTooltip, gn as ElButton, gr as whenMouse, hr as composeEventHandlers, jn as useId, kn as useFormSize, vn as useTooltipTriggerProps, wn as ElScrollbar, yn as useTooltipContentProps } from "./src-CjwMP1QL.js";
import { A as EVENT_CODE, B as buildProps, D as useLocale, E as useNamespace, H as arrow_down_default, N as withNoopInstall, R as iconPropType, V as definePropType, an as useEventListener, j as withInstall, pt as addUnit, qt as isArray, v as ElIcon, y as _export_sfc } from "./htmlUtils-AX6Lywzz.js";
import { t as composeRefs } from "./refs-DBbZ9JIQ.js";
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/castArray.js
/**
* Casts `value` as an array if it's not one.
*
* @static
* @memberOf _
* @since 4.4.0
* @category Lang
* @param {*} value The value to inspect.
* @returns {Array} Returns the cast array.
* @example
*
* _.castArray(1);
* // => [1]
*
* _.castArray({ 'a': 1 });
* // => [{ 'a': 1 }]
*
* _.castArray('abc');
* // => ['abc']
*
* _.castArray(null);
* // => [null]
*
* _.castArray(undefined);
* // => [undefined]
*
* _.castArray();
* // => []
*
* var array = [1, 2, 3];
* console.log(_.castArray(array) === array);
* // => true
*/
function castArray() {
	if (!arguments.length) return [];
	var value = arguments[0];
	return isArray(value) ? value : [value];
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/collection/src/collection2.mjs
var _sfc_main$8 = /* @__PURE__ */ defineComponent({ inheritAttrs: false });
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
	return renderSlot(_ctx.$slots, "default");
}
var Collection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/collection/src/collection-item.mjs
var _sfc_main$7 = /* @__PURE__ */ defineComponent({
	name: "ElCollectionItem",
	inheritAttrs: false
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
	return renderSlot(_ctx.$slots, "default");
}
var CollectionItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/collection/src/collection.mjs
var COLLECTION_ITEM_SIGN = `data-el-collection-item`;
var createCollectionWithScope = (name) => {
	const COLLECTION_NAME = `El${name}Collection`;
	const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`;
	const COLLECTION_INJECTION_KEY = Symbol(COLLECTION_NAME);
	const COLLECTION_ITEM_INJECTION_KEY = Symbol(COLLECTION_ITEM_NAME);
	return {
		COLLECTION_INJECTION_KEY,
		COLLECTION_ITEM_INJECTION_KEY,
		ElCollection: {
			...Collection,
			name: COLLECTION_NAME,
			setup() {
				const collectionRef = ref(null);
				const itemMap = /* @__PURE__ */ new Map();
				const getItems = () => {
					const collectionEl = unref(collectionRef);
					if (!collectionEl) return [];
					const orderedNodes = Array.from(collectionEl.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`));
					return [...itemMap.values()].sort((a, b) => orderedNodes.indexOf(a.ref) - orderedNodes.indexOf(b.ref));
				};
				provide(COLLECTION_INJECTION_KEY, {
					itemMap,
					getItems,
					collectionRef
				});
			}
		},
		ElCollectionItem: {
			...CollectionItem,
			name: COLLECTION_ITEM_NAME,
			setup(_, { attrs }) {
				const collectionItemRef = ref(null);
				const collectionInjection = inject(COLLECTION_INJECTION_KEY, void 0);
				provide(COLLECTION_ITEM_INJECTION_KEY, { collectionItemRef });
				onMounted(() => {
					const collectionItemEl = unref(collectionItemRef);
					if (collectionItemEl) collectionInjection.itemMap.set(collectionItemEl, {
						ref: collectionItemEl,
						...attrs
					});
				});
				onBeforeUnmount(() => {
					const collectionItemEl = unref(collectionItemRef);
					collectionInjection.itemMap.delete(collectionItemEl);
				});
			}
		}
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/roving-focus-group/src/roving-focus-group.mjs
var rovingFocusGroupProps = buildProps({
	style: { type: definePropType([
		String,
		Array,
		Object
	]) },
	currentTabId: { type: definePropType(String) },
	defaultCurrentTabId: String,
	loop: Boolean,
	dir: {
		type: String,
		values: ["ltr", "rtl"],
		default: "ltr"
	},
	orientation: { type: definePropType(String) },
	onBlur: Function,
	onFocus: Function,
	onMousedown: Function
});
var { ElCollection: ElCollection$1, ElCollectionItem: ElCollectionItem$1, COLLECTION_INJECTION_KEY: COLLECTION_INJECTION_KEY$1, COLLECTION_ITEM_INJECTION_KEY: COLLECTION_ITEM_INJECTION_KEY$1 } = createCollectionWithScope("RovingFocusGroup");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/roving-focus-group/src/tokens.mjs
var ROVING_FOCUS_GROUP_INJECTION_KEY = Symbol("elRovingFocusGroup");
var ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY = Symbol("elRovingFocusGroupItem");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/roving-focus-group/src/utils.mjs
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
var getDirectionAwareKey = (key, dir) => {
	if (dir !== "rtl") return key;
	switch (key) {
		case EVENT_CODE.right: return EVENT_CODE.left;
		case EVENT_CODE.left: return EVENT_CODE.right;
		default: return key;
	}
};
var getFocusIntent = (event, orientation, dir) => {
	const key = getDirectionAwareKey(event.key, dir);
	if (orientation === "vertical" && [EVENT_CODE.left, EVENT_CODE.right].includes(key)) return void 0;
	if (orientation === "horizontal" && [EVENT_CODE.up, EVENT_CODE.down].includes(key)) return void 0;
	return MAP_KEY_TO_FOCUS_INTENT[key];
};
var reorderArray = (array, atIdx) => {
	return array.map((_, idx) => array[(idx + atIdx) % array.length]);
};
var focusFirst = (elements) => {
	const { activeElement: prevActive } = document;
	for (const element of elements) {
		if (element === prevActive) return;
		element.focus();
		if (prevActive !== document.activeElement) return;
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/roving-focus-group/src/roving-focus-group-impl.mjs
var CURRENT_TAB_ID_CHANGE_EVT = "currentTabIdChange";
var ENTRY_FOCUS_EVT = "rovingFocusGroup.entryFocus";
var EVT_OPTS = {
	bubbles: false,
	cancelable: true
};
var _sfc_main$6 = defineComponent({
	name: "ElRovingFocusGroupImpl",
	inheritAttrs: false,
	props: rovingFocusGroupProps,
	emits: [CURRENT_TAB_ID_CHANGE_EVT, "entryFocus"],
	setup(props, { emit }) {
		var _a;
		const currentTabbedId = ref((_a = props.currentTabId || props.defaultCurrentTabId) != null ? _a : null);
		const isBackingOut = ref(false);
		const isClickFocus = ref(false);
		const rovingFocusGroupRef = ref(null);
		const { getItems } = inject(COLLECTION_INJECTION_KEY$1, void 0);
		const rovingFocusGroupRootStyle = computed(() => {
			return [{ outline: "none" }, props.style];
		});
		const onItemFocus = (tabbedId) => {
			emit(CURRENT_TAB_ID_CHANGE_EVT, tabbedId);
		};
		const onItemShiftTab = () => {
			isBackingOut.value = true;
		};
		const onMousedown = composeEventHandlers((e) => {
			var _a2;
			(_a2 = props.onMousedown) == null || _a2.call(props, e);
		}, () => {
			isClickFocus.value = true;
		});
		const onFocus = composeEventHandlers((e) => {
			var _a2;
			(_a2 = props.onFocus) == null || _a2.call(props, e);
		}, (e) => {
			const isKeyboardFocus = !unref(isClickFocus);
			const { target, currentTarget } = e;
			if (target === currentTarget && isKeyboardFocus && !unref(isBackingOut)) {
				const entryFocusEvt = new Event(ENTRY_FOCUS_EVT, EVT_OPTS);
				currentTarget?.dispatchEvent(entryFocusEvt);
				if (!entryFocusEvt.defaultPrevented) {
					const items = getItems().filter((item) => item.focusable);
					focusFirst([
						items.find((item) => item.active),
						items.find((item) => item.id === unref(currentTabbedId)),
						...items
					].filter(Boolean).map((item) => item.ref));
				}
			}
			isClickFocus.value = false;
		});
		const onBlur = composeEventHandlers((e) => {
			var _a2;
			(_a2 = props.onBlur) == null || _a2.call(props, e);
		}, () => {
			isBackingOut.value = false;
		});
		const handleEntryFocus = (...args) => {
			emit("entryFocus", ...args);
		};
		provide(ROVING_FOCUS_GROUP_INJECTION_KEY, {
			currentTabbedId: readonly(currentTabbedId),
			loop: toRef(props, "loop"),
			tabIndex: computed(() => {
				return unref(isBackingOut) ? -1 : 0;
			}),
			rovingFocusGroupRef,
			rovingFocusGroupRootStyle,
			orientation: toRef(props, "orientation"),
			dir: toRef(props, "dir"),
			onItemFocus,
			onItemShiftTab,
			onBlur,
			onFocus,
			onMousedown
		});
		watch(() => props.currentTabId, (val) => {
			currentTabbedId.value = val != null ? val : null;
		});
		useEventListener(rovingFocusGroupRef, ENTRY_FOCUS_EVT, handleEntryFocus);
	}
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
	return renderSlot(_ctx.$slots, "default");
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/roving-focus-group/src/roving-focus-group2.mjs
var _sfc_main$5 = defineComponent({
	name: "ElRovingFocusGroup",
	components: {
		ElFocusGroupCollection: ElCollection$1,
		ElRovingFocusGroupImpl: /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])
	}
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_el_roving_focus_group_impl = resolveComponent("el-roving-focus-group-impl");
	const _component_el_focus_group_collection = resolveComponent("el-focus-group-collection");
	return openBlock(), createBlock(_component_el_focus_group_collection, null, {
		default: withCtx(() => [createVNode(_component_el_roving_focus_group_impl, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
			default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
			_: 3
		}, 16)]),
		_: 3
	});
}
var ElRovingFocusGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/roving-focus-group/src/roving-focus-item.mjs
var _sfc_main$4 = defineComponent({
	components: { ElRovingFocusCollectionItem: ElCollectionItem$1 },
	props: {
		focusable: {
			type: Boolean,
			default: true
		},
		active: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"mousedown",
		"focus",
		"keydown"
	],
	setup(props, { emit }) {
		const { currentTabbedId, loop, onItemFocus, onItemShiftTab } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
		const { getItems } = inject(COLLECTION_INJECTION_KEY$1, void 0);
		const id = useId();
		const rovingFocusGroupItemRef = ref(null);
		const handleMousedown = composeEventHandlers((e) => {
			emit("mousedown", e);
		}, (e) => {
			if (!props.focusable) e.preventDefault();
			else onItemFocus(unref(id));
		});
		const handleFocus = composeEventHandlers((e) => {
			emit("focus", e);
		}, () => {
			onItemFocus(unref(id));
		});
		const handleKeydown = composeEventHandlers((e) => {
			emit("keydown", e);
		}, (e) => {
			const { key, shiftKey, target, currentTarget } = e;
			if (key === EVENT_CODE.tab && shiftKey) {
				onItemShiftTab();
				return;
			}
			if (target !== currentTarget) return;
			const focusIntent = getFocusIntent(e);
			if (focusIntent) {
				e.preventDefault();
				let elements = getItems().filter((item) => item.focusable).map((item) => item.ref);
				switch (focusIntent) {
					case "last":
						elements.reverse();
						break;
					case "prev":
					case "next": {
						if (focusIntent === "prev") elements.reverse();
						const currentIdx = elements.indexOf(currentTarget);
						elements = loop.value ? reorderArray(elements, currentIdx + 1) : elements.slice(currentIdx + 1);
						break;
					}
					default: break;
				}
				nextTick(() => {
					focusFirst(elements);
				});
			}
		});
		const isCurrentTab = computed(() => currentTabbedId.value === unref(id));
		provide(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, {
			rovingFocusGroupItemRef,
			tabIndex: computed(() => unref(isCurrentTab) ? 0 : -1),
			handleMousedown,
			handleFocus,
			handleKeydown
		});
		return {
			id,
			handleKeydown,
			handleFocus,
			handleMousedown
		};
	}
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_el_roving_focus_collection_item = resolveComponent("el-roving-focus-collection-item");
	return openBlock(), createBlock(_component_el_roving_focus_collection_item, {
		id: _ctx.id,
		focusable: _ctx.focusable,
		active: _ctx.active
	}, {
		default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
		_: 3
	}, 8, [
		"id",
		"focusable",
		"active"
	]);
}
var ElRovingFocusItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/dropdown/src/dropdown.mjs
var dropdownProps = buildProps({
	trigger: useTooltipTriggerProps.trigger,
	effect: {
		...useTooltipContentProps.effect,
		default: "light"
	},
	type: { type: definePropType(String) },
	placement: {
		type: definePropType(String),
		default: "bottom"
	},
	popperOptions: {
		type: definePropType(Object),
		default: () => ({})
	},
	id: String,
	size: {
		type: String,
		default: ""
	},
	splitButton: Boolean,
	hideOnClick: {
		type: Boolean,
		default: true
	},
	loop: {
		type: Boolean,
		default: true
	},
	showTimeout: {
		type: Number,
		default: 150
	},
	hideTimeout: {
		type: Number,
		default: 150
	},
	tabindex: {
		type: definePropType([Number, String]),
		default: 0
	},
	maxHeight: {
		type: definePropType([Number, String]),
		default: ""
	},
	popperClass: {
		type: String,
		default: ""
	},
	disabled: {
		type: Boolean,
		default: false
	},
	role: {
		type: String,
		default: "menu"
	},
	buttonProps: { type: definePropType(Object) },
	teleported: useTooltipContentProps.teleported
});
var dropdownItemProps = buildProps({
	command: {
		type: [
			Object,
			String,
			Number
		],
		default: () => ({})
	},
	disabled: Boolean,
	divided: Boolean,
	textValue: String,
	icon: { type: iconPropType }
});
var dropdownMenuProps = buildProps({ onKeydown: { type: definePropType(Function) } });
var FIRST_KEYS = [
	EVENT_CODE.down,
	EVENT_CODE.pageDown,
	EVENT_CODE.home
];
var LAST_KEYS = [
	EVENT_CODE.up,
	EVENT_CODE.pageUp,
	EVENT_CODE.end
];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var { ElCollection, ElCollectionItem, COLLECTION_INJECTION_KEY, COLLECTION_ITEM_INJECTION_KEY } = createCollectionWithScope("Dropdown");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/dropdown/src/tokens.mjs
var DROPDOWN_INJECTION_KEY = Symbol("elDropdown");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/dropdown/src/dropdown2.mjs
var { ButtonGroup: ElButtonGroup } = ElButton;
var _sfc_main$3 = defineComponent({
	name: "ElDropdown",
	components: {
		ElButton,
		ElButtonGroup,
		ElScrollbar,
		ElDropdownCollection: ElCollection,
		ElTooltip,
		ElRovingFocusGroup,
		ElOnlyChild: OnlyChild,
		ElIcon,
		ArrowDown: arrow_down_default
	},
	props: dropdownProps,
	emits: [
		"visible-change",
		"click",
		"command"
	],
	setup(props, { emit }) {
		const _instance = getCurrentInstance();
		const ns = useNamespace("dropdown");
		const { t } = useLocale();
		const triggeringElementRef = ref();
		const referenceElementRef = ref();
		const popperRef = ref(null);
		const contentRef = ref(null);
		const scrollbar = ref(null);
		const currentTabId = ref(null);
		const isUsingKeyboard = ref(false);
		const triggerKeys = [
			EVENT_CODE.enter,
			EVENT_CODE.space,
			EVENT_CODE.down
		];
		const wrapStyle = computed(() => ({ maxHeight: addUnit(props.maxHeight) }));
		const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)]);
		const trigger = computed(() => castArray(props.trigger));
		const defaultTriggerId = useId().value;
		const triggerId = computed(() => {
			return props.id || defaultTriggerId;
		});
		watch([triggeringElementRef, trigger], ([triggeringElement, trigger2], [prevTriggeringElement]) => {
			var _a, _b, _c;
			if ((_a = prevTriggeringElement == null ? void 0 : prevTriggeringElement.$el) == null ? void 0 : _a.removeEventListener) prevTriggeringElement.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
			if ((_b = triggeringElement == null ? void 0 : triggeringElement.$el) == null ? void 0 : _b.removeEventListener) triggeringElement.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
			if (((_c = triggeringElement == null ? void 0 : triggeringElement.$el) == null ? void 0 : _c.addEventListener) && trigger2.includes("hover")) triggeringElement.$el.addEventListener("pointerenter", onAutofocusTriggerEnter);
		}, { immediate: true });
		onBeforeUnmount(() => {
			var _a, _b;
			if ((_b = (_a = triggeringElementRef.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.removeEventListener) triggeringElementRef.value.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
		});
		function handleClick() {
			handleClose();
		}
		function handleClose() {
			var _a;
			(_a = popperRef.value) == null || _a.onClose();
		}
		function handleOpen() {
			var _a;
			(_a = popperRef.value) == null || _a.onOpen();
		}
		const dropdownSize = useFormSize();
		function commandHandler(...args) {
			emit("command", ...args);
		}
		function onAutofocusTriggerEnter() {
			var _a, _b;
			(_b = (_a = triggeringElementRef.value) == null ? void 0 : _a.$el) == null || _b.focus();
		}
		function onItemEnter() {}
		function onItemLeave() {
			const contentEl = unref(contentRef);
			trigger.value.includes("hover") && contentEl?.focus();
			currentTabId.value = null;
		}
		function handleCurrentTabIdChange(id) {
			currentTabId.value = id;
		}
		function handleEntryFocus(e) {
			if (!isUsingKeyboard.value) {
				e.preventDefault();
				e.stopImmediatePropagation();
			}
		}
		function handleBeforeShowTooltip() {
			emit("visible-change", true);
		}
		function handleShowTooltip(event) {
			if ((event == null ? void 0 : event.type) === "keydown") contentRef.value.focus();
		}
		function handleBeforeHideTooltip() {
			emit("visible-change", false);
		}
		provide(DROPDOWN_INJECTION_KEY, {
			contentRef,
			role: computed(() => props.role),
			triggerId,
			isUsingKeyboard,
			onItemEnter,
			onItemLeave
		});
		provide("elDropdown", {
			instance: _instance,
			dropdownSize,
			handleClick,
			commandHandler,
			trigger: toRef(props, "trigger"),
			hideOnClick: toRef(props, "hideOnClick")
		});
		const onFocusAfterTrapped = (e) => {
			var _a, _b;
			e.preventDefault();
			(_b = (_a = contentRef.value) == null ? void 0 : _a.focus) == null || _b.call(_a, { preventScroll: true });
		};
		const handlerMainButtonClick = (event) => {
			emit("click", event);
		};
		return {
			t,
			ns,
			scrollbar,
			wrapStyle,
			dropdownTriggerKls,
			dropdownSize,
			triggerId,
			triggerKeys,
			currentTabId,
			handleCurrentTabIdChange,
			handlerMainButtonClick,
			handleEntryFocus,
			handleClose,
			handleOpen,
			handleBeforeShowTooltip,
			handleShowTooltip,
			handleBeforeHideTooltip,
			onFocusAfterTrapped,
			popperRef,
			contentRef,
			triggeringElementRef,
			referenceElementRef
		};
	}
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
	var _a;
	const _component_el_dropdown_collection = resolveComponent("el-dropdown-collection");
	const _component_el_roving_focus_group = resolveComponent("el-roving-focus-group");
	const _component_el_scrollbar = resolveComponent("el-scrollbar");
	const _component_el_only_child = resolveComponent("el-only-child");
	const _component_el_tooltip = resolveComponent("el-tooltip");
	const _component_el_button = resolveComponent("el-button");
	const _component_arrow_down = resolveComponent("arrow-down");
	const _component_el_icon = resolveComponent("el-icon");
	const _component_el_button_group = resolveComponent("el-button-group");
	return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("disabled", _ctx.disabled)]) }, [createVNode(_component_el_tooltip, {
		ref: "popperRef",
		role: _ctx.role,
		effect: _ctx.effect,
		"fallback-placements": ["bottom", "top"],
		"popper-options": _ctx.popperOptions,
		"gpu-acceleration": false,
		"hide-after": _ctx.trigger === "hover" ? _ctx.hideTimeout : 0,
		"manual-mode": true,
		placement: _ctx.placement,
		"popper-class": [_ctx.ns.e("popper"), _ctx.popperClass],
		"reference-element": (_a = _ctx.referenceElementRef) == null ? void 0 : _a.$el,
		trigger: _ctx.trigger,
		"trigger-keys": _ctx.triggerKeys,
		"trigger-target-el": _ctx.contentRef,
		"show-after": _ctx.trigger === "hover" ? _ctx.showTimeout : 0,
		"stop-popper-mouse-event": false,
		"virtual-ref": _ctx.triggeringElementRef,
		"virtual-triggering": _ctx.splitButton,
		disabled: _ctx.disabled,
		transition: `${_ctx.ns.namespace.value}-zoom-in-top`,
		teleported: _ctx.teleported,
		pure: "",
		persistent: "",
		onBeforeShow: _ctx.handleBeforeShowTooltip,
		onShow: _ctx.handleShowTooltip,
		onBeforeHide: _ctx.handleBeforeHideTooltip
	}, createSlots({
		content: withCtx(() => [createVNode(_component_el_scrollbar, {
			ref: "scrollbar",
			"wrap-style": _ctx.wrapStyle,
			tag: "div",
			"view-class": _ctx.ns.e("list")
		}, {
			default: withCtx(() => [createVNode(_component_el_roving_focus_group, {
				loop: _ctx.loop,
				"current-tab-id": _ctx.currentTabId,
				orientation: "horizontal",
				onCurrentTabIdChange: _ctx.handleCurrentTabIdChange,
				onEntryFocus: _ctx.handleEntryFocus
			}, {
				default: withCtx(() => [createVNode(_component_el_dropdown_collection, null, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "dropdown")]),
					_: 3
				})]),
				_: 3
			}, 8, [
				"loop",
				"current-tab-id",
				"onCurrentTabIdChange",
				"onEntryFocus"
			])]),
			_: 3
		}, 8, ["wrap-style", "view-class"])]),
		_: 2
	}, [!_ctx.splitButton ? {
		name: "default",
		fn: withCtx(() => [createVNode(_component_el_only_child, {
			id: _ctx.triggerId,
			ref: "triggeringElementRef",
			role: "button",
			tabindex: _ctx.tabindex
		}, {
			default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
			_: 3
		}, 8, ["id", "tabindex"])])
	} : void 0]), 1032, [
		"role",
		"effect",
		"popper-options",
		"hide-after",
		"placement",
		"popper-class",
		"reference-element",
		"trigger",
		"trigger-keys",
		"trigger-target-el",
		"show-after",
		"virtual-ref",
		"virtual-triggering",
		"disabled",
		"transition",
		"teleported",
		"onBeforeShow",
		"onShow",
		"onBeforeHide"
	]), _ctx.splitButton ? (openBlock(), createBlock(_component_el_button_group, { key: 0 }, {
		default: withCtx(() => [createVNode(_component_el_button, mergeProps({ ref: "referenceElementRef" }, _ctx.buttonProps, {
			size: _ctx.dropdownSize,
			type: _ctx.type,
			disabled: _ctx.disabled,
			tabindex: _ctx.tabindex,
			onClick: _ctx.handlerMainButtonClick
		}), {
			default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
			_: 3
		}, 16, [
			"size",
			"type",
			"disabled",
			"tabindex",
			"onClick"
		]), createVNode(_component_el_button, mergeProps({
			id: _ctx.triggerId,
			ref: "triggeringElementRef"
		}, _ctx.buttonProps, {
			role: "button",
			size: _ctx.dropdownSize,
			type: _ctx.type,
			class: _ctx.ns.e("caret-button"),
			disabled: _ctx.disabled,
			tabindex: _ctx.tabindex,
			"aria-label": _ctx.t("el.dropdown.toggleDropdown")
		}), {
			default: withCtx(() => [createVNode(_component_el_icon, { class: normalizeClass(_ctx.ns.e("icon")) }, {
				default: withCtx(() => [createVNode(_component_arrow_down)]),
				_: 1
			}, 8, ["class"])]),
			_: 1
		}, 16, [
			"id",
			"size",
			"type",
			"class",
			"disabled",
			"tabindex",
			"aria-label"
		])]),
		_: 3
	})) : createCommentVNode("v-if", true)], 2);
}
var Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/dropdown/src/dropdown-item-impl.mjs
var _sfc_main$2 = defineComponent({
	name: "DropdownItemImpl",
	components: { ElIcon },
	props: dropdownItemProps,
	emits: [
		"pointermove",
		"pointerleave",
		"click",
		"clickimpl"
	],
	setup(_, { emit }) {
		const ns = useNamespace("dropdown");
		const { role: menuRole } = inject(DROPDOWN_INJECTION_KEY, void 0);
		const { collectionItemRef: dropdownCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY, void 0);
		const { collectionItemRef: rovingFocusCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY$1, void 0);
		const { rovingFocusGroupItemRef, tabIndex, handleFocus, handleKeydown: handleItemKeydown, handleMousedown } = inject(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, void 0);
		const itemRef = composeRefs(dropdownCollectionItemRef, rovingFocusCollectionItemRef, rovingFocusGroupItemRef);
		const role = computed(() => {
			if (menuRole.value === "menu") return "menuitem";
			else if (menuRole.value === "navigation") return "link";
			return "button";
		});
		const handleKeydown = composeEventHandlers((e) => {
			const { code } = e;
			if (code === EVENT_CODE.enter || code === EVENT_CODE.space) {
				e.preventDefault();
				e.stopImmediatePropagation();
				emit("clickimpl", e);
				return true;
			}
		}, handleItemKeydown);
		return {
			ns,
			itemRef,
			dataset: { [COLLECTION_ITEM_SIGN]: "" },
			role,
			tabIndex,
			handleFocus,
			handleKeydown,
			handleMousedown
		};
	}
});
var _hoisted_1$1 = [
	"aria-disabled",
	"tabindex",
	"role"
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_el_icon = resolveComponent("el-icon");
	return openBlock(), createElementBlock(Fragment, null, [_ctx.divided ? (openBlock(), createElementBlock("li", mergeProps({
		key: 0,
		role: "separator",
		class: _ctx.ns.bem("menu", "item", "divided")
	}, _ctx.$attrs), null, 16)) : createCommentVNode("v-if", true), createBaseVNode("li", mergeProps({ ref: _ctx.itemRef }, {
		..._ctx.dataset,
		..._ctx.$attrs
	}, {
		"aria-disabled": _ctx.disabled,
		class: [_ctx.ns.be("menu", "item"), _ctx.ns.is("disabled", _ctx.disabled)],
		tabindex: _ctx.tabIndex,
		role: _ctx.role,
		onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("clickimpl", e)),
		onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
		onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
		onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
		onPointermove: _cache[4] || (_cache[4] = (e) => _ctx.$emit("pointermove", e)),
		onPointerleave: _cache[5] || (_cache[5] = (e) => _ctx.$emit("pointerleave", e))
	}), [_ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
		default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))]),
		_: 1
	})) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")], 16, _hoisted_1$1)], 64);
}
var ElDropdownItemImpl = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/dropdown/src/useDropdown.mjs
var useDropdown = () => {
	const elDropdown = inject("elDropdown", {});
	return {
		elDropdown,
		_elDropdownSize: computed(() => elDropdown == null ? void 0 : elDropdown.dropdownSize)
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/dropdown/src/dropdown-item.mjs
var _sfc_main$1 = defineComponent({
	name: "ElDropdownItem",
	components: {
		ElDropdownCollectionItem: ElCollectionItem,
		ElRovingFocusItem,
		ElDropdownItemImpl
	},
	inheritAttrs: false,
	props: dropdownItemProps,
	emits: [
		"pointermove",
		"pointerleave",
		"click"
	],
	setup(props, { emit, attrs }) {
		const { elDropdown } = useDropdown();
		const _instance = getCurrentInstance();
		const itemRef = ref(null);
		const textContent = computed(() => {
			var _a, _b;
			return (_b = (_a = unref(itemRef)) == null ? void 0 : _a.textContent) != null ? _b : "";
		});
		const { onItemEnter, onItemLeave } = inject(DROPDOWN_INJECTION_KEY, void 0);
		const handlePointerMove = composeEventHandlers((e) => {
			emit("pointermove", e);
			return e.defaultPrevented;
		}, whenMouse((e) => {
			if (props.disabled) {
				onItemLeave(e);
				return;
			}
			const target = e.currentTarget;
			if (target === document.activeElement || target.contains(document.activeElement)) return;
			onItemEnter(e);
			if (!e.defaultPrevented) target?.focus();
		}));
		const handlePointerLeave = composeEventHandlers((e) => {
			emit("pointerleave", e);
			return e.defaultPrevented;
		}, whenMouse((e) => {
			onItemLeave(e);
		}));
		return {
			handleClick: composeEventHandlers((e) => {
				if (props.disabled) return;
				emit("click", e);
				return e.type !== "keydown" && e.defaultPrevented;
			}, (e) => {
				var _a, _b, _c;
				if (props.disabled) {
					e.stopImmediatePropagation();
					return;
				}
				if ((_a = elDropdown == null ? void 0 : elDropdown.hideOnClick) == null ? void 0 : _a.value) (_b = elDropdown.handleClick) == null || _b.call(elDropdown);
				(_c = elDropdown.commandHandler) == null || _c.call(elDropdown, props.command, _instance, e);
			}),
			handlePointerMove,
			handlePointerLeave,
			textContent,
			propsAndAttrs: computed(() => {
				return {
					...props,
					...attrs
				};
			})
		};
	}
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	var _a;
	const _component_el_dropdown_item_impl = resolveComponent("el-dropdown-item-impl");
	const _component_el_roving_focus_item = resolveComponent("el-roving-focus-item");
	const _component_el_dropdown_collection_item = resolveComponent("el-dropdown-collection-item");
	return openBlock(), createBlock(_component_el_dropdown_collection_item, {
		disabled: _ctx.disabled,
		"text-value": (_a = _ctx.textValue) != null ? _a : _ctx.textContent
	}, {
		default: withCtx(() => [createVNode(_component_el_roving_focus_item, { focusable: !_ctx.disabled }, {
			default: withCtx(() => [createVNode(_component_el_dropdown_item_impl, mergeProps(_ctx.propsAndAttrs, {
				onPointerleave: _ctx.handlePointerLeave,
				onPointermove: _ctx.handlePointerMove,
				onClickimpl: _ctx.handleClick
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"onPointerleave",
				"onPointermove",
				"onClickimpl"
			])]),
			_: 3
		}, 8, ["focusable"])]),
		_: 3
	}, 8, ["disabled", "text-value"]);
}
var DropdownItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/dropdown/src/dropdown-menu.mjs
var _sfc_main = defineComponent({
	name: "ElDropdownMenu",
	props: dropdownMenuProps,
	setup(props) {
		const ns = useNamespace("dropdown");
		const { _elDropdownSize } = useDropdown();
		const size = _elDropdownSize.value;
		const { focusTrapRef, onKeydown } = inject(FOCUS_TRAP_INJECTION_KEY, void 0);
		const { contentRef, role, triggerId } = inject(DROPDOWN_INJECTION_KEY, void 0);
		const { collectionRef: dropdownCollectionRef, getItems } = inject(COLLECTION_INJECTION_KEY, void 0);
		const { rovingFocusGroupRef, rovingFocusGroupRootStyle, tabIndex, onBlur, onFocus, onMousedown } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
		const { collectionRef: rovingFocusGroupCollectionRef } = inject(COLLECTION_INJECTION_KEY$1, void 0);
		const dropdownKls = computed(() => {
			return [ns.b("menu"), ns.bm("menu", size == null ? void 0 : size.value)];
		});
		const dropdownListWrapperRef = composeRefs(contentRef, dropdownCollectionRef, focusTrapRef, rovingFocusGroupRef, rovingFocusGroupCollectionRef);
		const composedKeydown = composeEventHandlers((e) => {
			var _a;
			(_a = props.onKeydown) == null || _a.call(props, e);
		}, (e) => {
			const { currentTarget, code, target } = e;
			if (currentTarget.contains(target)) {}
			if (EVENT_CODE.tab === code) e.stopImmediatePropagation();
			e.preventDefault();
			if (target !== unref(contentRef)) return;
			if (!FIRST_LAST_KEYS.includes(code)) return;
			const targets = getItems().filter((item) => !item.disabled).map((item) => item.ref);
			if (LAST_KEYS.includes(code)) targets.reverse();
			focusFirst(targets);
		});
		const handleKeydown = (e) => {
			composedKeydown(e);
			onKeydown(e);
		};
		return {
			size,
			rovingFocusGroupRootStyle,
			tabIndex,
			dropdownKls,
			role,
			triggerId,
			dropdownListWrapperRef,
			handleKeydown,
			onBlur,
			onFocus,
			onMousedown
		};
	}
});
var _hoisted_1 = ["role", "aria-labelledby"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("ul", {
		ref: _ctx.dropdownListWrapperRef,
		class: normalizeClass(_ctx.dropdownKls),
		style: normalizeStyle(_ctx.rovingFocusGroupRootStyle),
		tabindex: -1,
		role: _ctx.role,
		"aria-labelledby": _ctx.triggerId,
		onBlur: _cache[0] || (_cache[0] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
		onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
		onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
		onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.onMousedown && _ctx.onMousedown(...args), ["self"]))
	}, [renderSlot(_ctx.$slots, "default")], 46, _hoisted_1);
}
var DropdownMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/dropdown/index.mjs
var ElDropdown = withInstall(Dropdown, {
	DropdownItem,
	DropdownMenu
});
var ElDropdownItem = withNoopInstall(DropdownItem);
var ElDropdownMenu = withNoopInstall(DropdownMenu);
//#endregion
export { ElDropdownItem as n, ElDropdownMenu as r, ElDropdown as t };

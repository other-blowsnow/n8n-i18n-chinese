import { $ as openBlock, A as createTextVNode, At as isRef, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, P as getCurrentInstance, R as inject, S as computed, Sn as toDisplayString, T as createCommentVNode, Vt as toRefs, W as nextTick, Wt as unref, _ as Fragment, _n as normalizeClass, bt as withDirectives, en as init_shared_esm_bundler, ft as useSlots, gt as watch, h as withModifiers, it as renderSlot, pn as isString, sn as isObject, st as resolveDynamicComponent, tn as isArray, tt as provide, u as vModelCheckbox, w as createBlock, yn as normalizeStyle, yt as withCtx, zt as toRaw } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { $r as identity, An as withInstall, En as UPDATE_MODEL_EVENT, Fr as baseGet, Ir as castPath, Ln as buildProps, Mn as withNoopInstall, Rn as definePropType, Sr as isEqual, Tr as hasIn, Zr as defineProperty, _r as isNumber, an as useFormItem, cn as useFormSize, lr as debugWarn, mr as isBoolean, on as useFormItemInputId, pn as useSizeProp, sn as useFormDisabled, un as _export_sfc, vn as useNamespace, vr as isUndefined, xr as isNil, yr as baseSet } from "./src-CQp8jinp.js";
import { t as flatten } from "./flatten-r6VzfV3u.js";
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
/**
* A faster alternative to `Function#apply`, this function invokes `func`
* with the `this` binding of `thisArg` and the arguments of `args`.
*
* @private
* @param {Function} func The function to invoke.
* @param {*} thisArg The `this` binding of `func`.
* @param {Array} args The arguments to invoke `func` with.
* @returns {*} Returns the result of `func`.
*/
function apply(func, thisArg, args) {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
/**
* Creates a function that'll short out and invoke `identity` instead
* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
* milliseconds.
*
* @private
* @param {Function} func The function to restrict.
* @returns {Function} Returns the new shortable function.
*/
function shortOut(func) {
	var count = 0, lastCalled = 0;
	return function() {
		var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
		lastCalled = stamp;
		if (remaining > 0) {
			if (++count >= HOT_COUNT) return arguments[0];
		} else count = 0;
		return func.apply(void 0, arguments);
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/constant.js
/**
* Creates a function that returns `value`.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {*} value The value to return from the new function.
* @returns {Function} Returns the new constant function.
* @example
*
* var objects = _.times(2, _.constant({ 'a': 1 }));
*
* console.log(objects);
* // => [{ 'a': 1 }, { 'a': 1 }]
*
* console.log(objects[0] === objects[1]);
* // => true
*/
function constant(value) {
	return function() {
		return value;
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToString.js
/**
* Sets the `toString` method of `func` to return `string`.
*
* @private
* @param {Function} func The function to modify.
* @param {Function} string The `toString` result.
* @returns {Function} Returns `func`.
*/
var setToString = shortOut(!defineProperty ? identity : function(func, string) {
	return defineProperty(func, "toString", {
		"configurable": true,
		"enumerable": false,
		"value": constant(string),
		"writable": true
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
/**
* A specialized version of `baseRest` which transforms the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @param {Function} transform The rest array transform.
* @returns {Function} Returns the new function.
*/
function overRest(func, start, transform) {
	start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
	return function() {
		var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
		while (++index < length) array[index] = args[start + index];
		index = -1;
		var otherArgs = Array(start + 1);
		while (++index < start) otherArgs[index] = args[index];
		otherArgs[start] = transform(array);
		return apply(func, this, otherArgs);
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_flatRest.js
/**
* A specialized version of `baseRest` which flattens the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @returns {Function} Returns the new function.
*/
function flatRest(func) {
	return setToString(overRest(func, void 0, flatten), func + "");
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePickBy.js
/**
* The base implementation of  `_.pickBy` without support for iteratee shorthands.
*
* @private
* @param {Object} object The source object.
* @param {string[]} paths The property paths to pick.
* @param {Function} predicate The function invoked per property.
* @returns {Object} Returns the new object.
*/
function basePickBy(object, paths, predicate) {
	var index = -1, length = paths.length, result = {};
	while (++index < length) {
		var path = paths[index], value = baseGet(object, path);
		if (predicate(value, path)) baseSet(result, castPath(path, object), value);
	}
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePick.js
/**
* The base implementation of `_.pick` without support for individual
* property identifiers.
*
* @private
* @param {Object} object The source object.
* @param {string[]} paths The property paths to pick.
* @returns {Object} Returns the new object.
*/
function basePick(object, paths) {
	return basePickBy(object, paths, function(value, path) {
		return hasIn(object, path);
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/pick.js
/**
* Creates an object composed of the picked `object` properties.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The source object.
* @param {...(string|string[])} [paths] The property paths to pick.
* @returns {Object} Returns the new object.
* @example
*
* var object = { 'a': 1, 'b': '2', 'c': 3 };
*
* _.pick(object, ['a', 'c']);
* // => { 'a': 1, 'c': 3 }
*/
var pick = flatRest(function(object, paths) {
	return object == null ? {} : basePick(object, paths);
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/checkbox.mjs
init_shared_esm_bundler();
var checkboxProps = {
	modelValue: {
		type: [
			Number,
			String,
			Boolean
		],
		default: void 0
	},
	label: {
		type: [
			String,
			Boolean,
			Number,
			Object
		],
		default: void 0
	},
	indeterminate: Boolean,
	disabled: Boolean,
	checked: Boolean,
	name: {
		type: String,
		default: void 0
	},
	trueLabel: {
		type: [String, Number],
		default: void 0
	},
	falseLabel: {
		type: [String, Number],
		default: void 0
	},
	id: {
		type: String,
		default: void 0
	},
	controls: {
		type: String,
		default: void 0
	},
	border: Boolean,
	size: useSizeProp,
	tabindex: [String, Number],
	validateEvent: {
		type: Boolean,
		default: true
	}
};
var checkboxEmits = {
	[UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
	change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/constants.mjs
var checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/composables/use-checkbox-disabled.mjs
var useCheckboxDisabled = ({ model, isChecked }) => {
	const checkboxGroup = inject(checkboxGroupContextKey, void 0);
	const isLimitDisabled = computed(() => {
		var _a, _b;
		const max = (_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value;
		const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
		return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
	});
	return {
		isDisabled: useFormDisabled(computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value)),
		isLimitDisabled
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/composables/use-checkbox-event.mjs
var useCheckboxEvent = (props, { model, isLimitExceeded, hasOwnLabel, isDisabled, isLabeledByFormItem }) => {
	const checkboxGroup = inject(checkboxGroupContextKey, void 0);
	const { formItem } = useFormItem();
	const { emit } = getCurrentInstance();
	function getLabeledValue(value) {
		var _a, _b;
		return value === props.trueLabel || value === true ? (_a = props.trueLabel) != null ? _a : true : (_b = props.falseLabel) != null ? _b : false;
	}
	function emitChangeEvent(checked, e) {
		emit("change", getLabeledValue(checked), e);
	}
	function handleChange(e) {
		if (isLimitExceeded.value) return;
		const target = e.target;
		emit("change", getLabeledValue(target.checked), e);
	}
	async function onClickRoot(e) {
		if (isLimitExceeded.value) return;
		if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
			if (!e.composedPath().some((item) => item.tagName === "LABEL")) {
				model.value = getLabeledValue([false, props.falseLabel].includes(model.value));
				await nextTick();
				emitChangeEvent(model.value, e);
			}
		}
	}
	const validateEvent = computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
	watch(() => props.modelValue, () => {
		if (validateEvent.value) formItem?.validate("change").catch((err) => debugWarn(err));
	});
	return {
		handleChange,
		onClickRoot
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/composables/use-checkbox-model.mjs
init_shared_esm_bundler();
var useCheckboxModel = (props) => {
	const selfModel = ref(false);
	const { emit } = getCurrentInstance();
	const checkboxGroup = inject(checkboxGroupContextKey, void 0);
	const isGroup = computed(() => isUndefined(checkboxGroup) === false);
	const isLimitExceeded = ref(false);
	return {
		model: computed({
			get() {
				var _a, _b;
				return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
			},
			set(val) {
				var _a, _b;
				if (isGroup.value && isArray(val)) {
					isLimitExceeded.value = ((_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value);
					isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null || _b.call(checkboxGroup, val));
				} else {
					emit(UPDATE_MODEL_EVENT, val);
					selfModel.value = val;
				}
			}
		}),
		isGroup,
		isLimitExceeded
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/composables/use-checkbox-status.mjs
init_shared_esm_bundler();
var useCheckboxStatus = (props, slots, { model }) => {
	const checkboxGroup = inject(checkboxGroupContextKey, void 0);
	const isFocused = ref(false);
	const isChecked = computed(() => {
		const value = model.value;
		if (isBoolean(value)) return value;
		else if (isArray(value)) if (isObject(props.label)) return value.map(toRaw).some((o) => isEqual(o, props.label));
		else return value.map(toRaw).includes(props.label);
		else if (value !== null && value !== void 0) return value === props.trueLabel;
		else return !!value;
	});
	return {
		checkboxButtonSize: useFormSize(computed(() => {
			var _a;
			return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
		}), { prop: true }),
		isChecked,
		isFocused,
		checkboxSize: useFormSize(computed(() => {
			var _a;
			return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
		})),
		hasOwnLabel: computed(() => {
			return !!slots.default || !isNil(props.label);
		})
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/composables/use-checkbox.mjs
init_shared_esm_bundler();
var setStoreValue = (props, { model }) => {
	function addToStore() {
		if (isArray(model.value) && !model.value.includes(props.label)) model.value.push(props.label);
		else model.value = props.trueLabel || true;
	}
	props.checked && addToStore();
};
var useCheckbox = (props, slots) => {
	const { formItem: elFormItem } = useFormItem();
	const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
	const { isFocused, isChecked, checkboxButtonSize, checkboxSize, hasOwnLabel } = useCheckboxStatus(props, slots, { model });
	const { isDisabled } = useCheckboxDisabled({
		model,
		isChecked
	});
	const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
		formItemContext: elFormItem,
		disableIdGeneration: hasOwnLabel,
		disableIdManagement: isGroup
	});
	const { handleChange, onClickRoot } = useCheckboxEvent(props, {
		model,
		isLimitExceeded,
		hasOwnLabel,
		isDisabled,
		isLabeledByFormItem
	});
	setStoreValue(props, { model });
	return {
		inputId,
		isLabeledByFormItem,
		isChecked,
		isDisabled,
		isFocused,
		checkboxButtonSize,
		checkboxSize,
		hasOwnLabel,
		model,
		handleChange,
		onClickRoot
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/checkbox2.mjs
var _hoisted_1$1 = [
	"id",
	"indeterminate",
	"name",
	"tabindex",
	"disabled",
	"true-value",
	"false-value"
];
var _hoisted_2$1 = [
	"id",
	"indeterminate",
	"disabled",
	"value",
	"name",
	"tabindex"
];
var Checkbox = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElCheckbox" }),
	props: checkboxProps,
	emits: checkboxEmits,
	setup(__props) {
		const props = __props;
		const { inputId, isLabeledByFormItem, isChecked, isDisabled, isFocused, checkboxSize, hasOwnLabel, model, handleChange, onClickRoot } = useCheckbox(props, useSlots());
		const ns = useNamespace("checkbox");
		const compKls = computed(() => {
			return [
				ns.b(),
				ns.m(checkboxSize.value),
				ns.is("disabled", isDisabled.value),
				ns.is("bordered", props.border),
				ns.is("checked", isChecked.value)
			];
		});
		const spanKls = computed(() => {
			return [
				ns.e("input"),
				ns.is("disabled", isDisabled.value),
				ns.is("checked", isChecked.value),
				ns.is("indeterminate", props.indeterminate),
				ns.is("focus", isFocused.value)
			];
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
				class: normalizeClass(unref(compKls)),
				"aria-controls": _ctx.indeterminate ? _ctx.controls : null,
				onClick: unref(onClickRoot)
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref(spanKls)) }, [_ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
					key: 0,
					id: unref(inputId),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
					class: normalizeClass(unref(ns).e("original")),
					type: "checkbox",
					indeterminate: _ctx.indeterminate,
					name: _ctx.name,
					tabindex: _ctx.tabindex,
					disabled: unref(isDisabled),
					"true-value": _ctx.trueLabel,
					"false-value": _ctx.falseLabel,
					onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
					onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
					onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
					onClick: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
				}, null, 42, _hoisted_1$1)), [[vModelCheckbox, unref(model)]]) : withDirectives((openBlock(), createElementBlock("input", {
					key: 1,
					id: unref(inputId),
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
					class: normalizeClass(unref(ns).e("original")),
					type: "checkbox",
					indeterminate: _ctx.indeterminate,
					disabled: unref(isDisabled),
					value: _ctx.label,
					name: _ctx.name,
					tabindex: _ctx.tabindex,
					onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
					onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
					onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
					onClick: _cache[9] || (_cache[9] = withModifiers(() => {}, ["stop"]))
				}, null, 42, _hoisted_2$1)), [[vModelCheckbox, unref(model)]]), createBaseVNode("span", { class: normalizeClass(unref(ns).e("inner")) }, null, 2)], 2), unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(unref(ns).e("label"))
				}, [renderSlot(_ctx.$slots, "default"), !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.label), 1)], 64)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true)]),
				_: 3
			}, 8, [
				"class",
				"aria-controls",
				"onClick"
			]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/checkbox-button.mjs
var _hoisted_1 = [
	"name",
	"tabindex",
	"disabled",
	"true-value",
	"false-value"
];
var _hoisted_2 = [
	"name",
	"tabindex",
	"disabled",
	"value"
];
var CheckboxButton = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElCheckboxButton" }),
	props: checkboxProps,
	emits: checkboxEmits,
	setup(__props) {
		const { isFocused, isChecked, isDisabled, checkboxButtonSize, model, handleChange } = useCheckbox(__props, useSlots());
		const checkboxGroup = inject(checkboxGroupContextKey, void 0);
		const ns = useNamespace("checkbox");
		const activeStyle = computed(() => {
			var _a, _b, _c, _d;
			const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
			return {
				backgroundColor: fillValue,
				borderColor: fillValue,
				color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
				boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
			};
		});
		const labelKls = computed(() => {
			return [
				ns.b("button"),
				ns.bm("button", checkboxButtonSize.value),
				ns.is("disabled", isDisabled.value),
				ns.is("checked", isChecked.value),
				ns.is("focus", isFocused.value)
			];
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("label", { class: normalizeClass(unref(labelKls)) }, [_ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
				key: 0,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
				class: normalizeClass(unref(ns).be("button", "original")),
				type: "checkbox",
				name: _ctx.name,
				tabindex: _ctx.tabindex,
				disabled: unref(isDisabled),
				"true-value": _ctx.trueLabel,
				"false-value": _ctx.falseLabel,
				onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
				onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
				onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
				onClick: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
			}, null, 42, _hoisted_1)), [[vModelCheckbox, unref(model)]]) : withDirectives((openBlock(), createElementBlock("input", {
				key: 1,
				"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
				class: normalizeClass(unref(ns).be("button", "original")),
				type: "checkbox",
				name: _ctx.name,
				tabindex: _ctx.tabindex,
				disabled: unref(isDisabled),
				value: _ctx.label,
				onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
				onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
				onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
				onClick: _cache[9] || (_cache[9] = withModifiers(() => {}, ["stop"]))
			}, null, 42, _hoisted_2)), [[vModelCheckbox, unref(model)]]), _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
				key: 2,
				class: normalizeClass(unref(ns).be("button", "inner")),
				style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
			}, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.label), 1)])], 6)) : createCommentVNode("v-if", true)], 2);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/checkbox-group.mjs
init_shared_esm_bundler();
var checkboxGroupProps = buildProps({
	modelValue: {
		type: definePropType(Array),
		default: () => []
	},
	disabled: Boolean,
	min: Number,
	max: Number,
	size: useSizeProp,
	label: String,
	fill: String,
	textColor: String,
	tag: {
		type: String,
		default: "div"
	},
	validateEvent: {
		type: Boolean,
		default: true
	}
});
var checkboxGroupEmits = {
	[UPDATE_MODEL_EVENT]: (val) => isArray(val),
	change: (val) => isArray(val)
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/src/checkbox-group2.mjs
var CheckboxGroup = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElCheckboxGroup" }),
	props: checkboxGroupProps,
	emits: checkboxGroupEmits,
	setup(__props, { emit }) {
		const props = __props;
		const ns = useNamespace("checkbox");
		const { formItem } = useFormItem();
		const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, { formItemContext: formItem });
		const changeEvent = async (value) => {
			emit(UPDATE_MODEL_EVENT, value);
			await nextTick();
			emit("change", value);
		};
		const modelValue = computed({
			get() {
				return props.modelValue;
			},
			set(val) {
				changeEvent(val);
			}
		});
		provide(checkboxGroupContextKey, {
			...pick(toRefs(props), [
				"size",
				"min",
				"max",
				"disabled",
				"validateEvent",
				"fill",
				"textColor"
			]),
			modelValue,
			changeEvent
		});
		watch(() => props.modelValue, () => {
			if (props.validateEvent) formItem?.validate("change").catch((err) => debugWarn(err));
		});
		return (_ctx, _cache) => {
			var _a;
			return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
				id: unref(groupId),
				class: normalizeClass(unref(ns).b("group")),
				role: "group",
				"aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "checkbox-group" : void 0,
				"aria-labelledby": unref(isLabeledByFormItem) ? (_a = unref(formItem)) == null ? void 0 : _a.labelId : void 0
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"id",
				"class",
				"aria-label",
				"aria-labelledby"
			]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/checkbox/index.mjs
var ElCheckbox = withInstall(Checkbox, {
	CheckboxButton,
	CheckboxGroup
});
withNoopInstall(CheckboxButton);
withNoopInstall(CheckboxGroup);
//#endregion
export { overRest as n, setToString as r, ElCheckbox as t };

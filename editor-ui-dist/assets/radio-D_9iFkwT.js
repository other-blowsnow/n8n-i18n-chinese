import { C as computed, D as createElementBlock, G as nextTick, Gt as unref, Ht as toRefs, It as ref, P as defineComponent, Pt as reactive, Sn as toDisplayString, Z as onMounted, _n as normalizeClass, _t as watch, at as renderSlot, d as vModelRadio, et as openBlock, h as withModifiers, j as createTextVNode, jt as isRef, nt as provide, pn as isString, tn as init_shared_esm_bundler, w as createBaseVNode, xt as withDirectives, yn as normalizeStyle, z as inject } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { $t as useFormDisabled, Qt as useFormItemInputId, Zt as useFormItem, en as useFormSize, ln as CHANGE_EVENT, nn as useId, un as UPDATE_MODEL_EVENT } from "./src-BmrdBtCN.js";
import { K as isBoolean, P as buildProps, T as useSizeProp, V as debugWarn, Y as isNumber, k as useNamespace } from "./truncate-1c7Iwk7N.js";
import { i as withInstall, n as _export_sfc, s as withNoopInstall } from "./icon-mgEZlgYz.js";
init_shared_esm_bundler();
var radioPropsBase = buildProps({
	size: useSizeProp,
	disabled: Boolean,
	label: {
		type: [
			String,
			Number,
			Boolean
		],
		default: ""
	}
});
var radioProps = buildProps({
	...radioPropsBase,
	modelValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: ""
	},
	name: {
		type: String,
		default: ""
	},
	border: Boolean
});
var radioEmits = {
	[UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
	[CHANGE_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
var radioGroupKey = Symbol("radioGroupKey");
var useRadio = (props, emit) => {
	const radioRef = ref();
	const radioGroup = inject(radioGroupKey, void 0);
	const isGroup = computed(() => !!radioGroup);
	const modelValue = computed({
		get() {
			return isGroup.value ? radioGroup.modelValue : props.modelValue;
		},
		set(val) {
			if (isGroup.value) radioGroup.changeEvent(val);
			else emit && emit("update:modelValue", val);
			radioRef.value.checked = props.modelValue === props.label;
		}
	});
	const size = useFormSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
	const disabled = useFormDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
	return {
		radioRef,
		isGroup,
		radioGroup,
		focus: ref(false),
		size,
		disabled,
		tabIndex: computed(() => {
			return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
		}),
		modelValue
	};
};
var _hoisted_1$2 = [
	"value",
	"name",
	"disabled"
];
var Radio = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElRadio" }),
	props: radioProps,
	emits: radioEmits,
	setup(__props, { emit }) {
		const props = __props;
		const ns = useNamespace("radio");
		const { radioRef, radioGroup, focus, size, disabled, modelValue } = useRadio(props, emit);
		function handleChange() {
			nextTick(() => emit("change", modelValue.value));
		}
		return (_ctx, _cache) => {
			var _a;
			return openBlock(), createElementBlock("label", { class: normalizeClass([
				unref(ns).b(),
				unref(ns).is("disabled", unref(disabled)),
				unref(ns).is("focus", unref(focus)),
				unref(ns).is("bordered", _ctx.border),
				unref(ns).is("checked", unref(modelValue) === _ctx.label),
				unref(ns).m(unref(size))
			]) }, [createBaseVNode("span", { class: normalizeClass([
				unref(ns).e("input"),
				unref(ns).is("disabled", unref(disabled)),
				unref(ns).is("checked", unref(modelValue) === _ctx.label)
			]) }, [withDirectives(createBaseVNode("input", {
				ref_key: "radioRef",
				ref: radioRef,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
				class: normalizeClass(unref(ns).e("original")),
				value: _ctx.label,
				name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
				disabled: unref(disabled),
				type: "radio",
				onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
				onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
				onChange: handleChange,
				onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
			}, null, 42, _hoisted_1$2), [[vModelRadio, unref(modelValue)]]), createBaseVNode("span", { class: normalizeClass(unref(ns).e("inner")) }, null, 2)], 2), createBaseVNode("span", {
				class: normalizeClass(unref(ns).e("label")),
				onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
			}, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.label), 1)])], 34)], 2);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
var radioButtonProps = buildProps({
	...radioPropsBase,
	name: {
		type: String,
		default: ""
	}
});
var _hoisted_1$1 = [
	"value",
	"name",
	"disabled"
];
var RadioButton = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElRadioButton" }),
	props: radioButtonProps,
	setup(__props) {
		const props = __props;
		const ns = useNamespace("radio");
		const { radioRef, focus, size, disabled, modelValue, radioGroup } = useRadio(props);
		const activeStyle = computed(() => {
			return {
				backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
				borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
				boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
				color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
			};
		});
		return (_ctx, _cache) => {
			var _a;
			return openBlock(), createElementBlock("label", { class: normalizeClass([
				unref(ns).b("button"),
				unref(ns).is("active", unref(modelValue) === _ctx.label),
				unref(ns).is("disabled", unref(disabled)),
				unref(ns).is("focus", unref(focus)),
				unref(ns).bm("button", unref(size))
			]) }, [withDirectives(createBaseVNode("input", {
				ref_key: "radioRef",
				ref: radioRef,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
				class: normalizeClass(unref(ns).be("button", "original-radio")),
				value: _ctx.label,
				type: "radio",
				name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
				disabled: unref(disabled),
				onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
				onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
				onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
			}, null, 42, _hoisted_1$1), [[vModelRadio, unref(modelValue)]]), createBaseVNode("span", {
				class: normalizeClass(unref(ns).be("button", "inner")),
				style: normalizeStyle(unref(modelValue) === _ctx.label ? unref(activeStyle) : {}),
				onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
			}, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.label), 1)])], 38)], 2);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
var radioGroupProps = buildProps({
	id: {
		type: String,
		default: void 0
	},
	size: useSizeProp,
	disabled: Boolean,
	modelValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: ""
	},
	fill: {
		type: String,
		default: ""
	},
	label: {
		type: String,
		default: void 0
	},
	textColor: {
		type: String,
		default: ""
	},
	name: {
		type: String,
		default: void 0
	},
	validateEvent: {
		type: Boolean,
		default: true
	}
});
var radioGroupEmits = radioEmits;
var _hoisted_1 = [
	"id",
	"aria-label",
	"aria-labelledby"
];
var RadioGroup = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElRadioGroup" }),
	props: radioGroupProps,
	emits: radioGroupEmits,
	setup(__props, { emit }) {
		const props = __props;
		const ns = useNamespace("radio");
		const radioId = useId();
		const radioGroupRef = ref();
		const { formItem } = useFormItem();
		const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, { formItemContext: formItem });
		const changeEvent = (value) => {
			emit(UPDATE_MODEL_EVENT, value);
			nextTick(() => emit("change", value));
		};
		onMounted(() => {
			const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
			const firstLabel = radios[0];
			if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) firstLabel.tabIndex = 0;
		});
		const name = computed(() => {
			return props.name || radioId.value;
		});
		provide(radioGroupKey, reactive({
			...toRefs(props),
			changeEvent,
			name
		}));
		watch(() => props.modelValue, () => {
			if (props.validateEvent) formItem?.validate("change").catch((err) => debugWarn(err));
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				id: unref(groupId),
				ref_key: "radioGroupRef",
				ref: radioGroupRef,
				class: normalizeClass(unref(ns).b("group")),
				role: "radiogroup",
				"aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "radio-group" : void 0,
				"aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
			}, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_1);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
var ElRadio = withInstall(Radio, {
	RadioButton,
	RadioGroup
});
withNoopInstall(RadioGroup);
withNoopInstall(RadioButton);
export { ElRadio as t };

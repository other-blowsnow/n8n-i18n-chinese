import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, H as mergeModels, I as h, N as defineComponent, Nt as reactive, O as createSlots, R as inject, Rt as shallowRef, S as computed, Sn as toDisplayString, T as createCommentVNode, U as mergeProps, Vt as toRefs, W as nextTick, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, _t as watchEffect, dt as useModel, en as init_shared_esm_bundler, gt as watch, j as createVNode, pn as isString, rt as renderList, tn as isArray, tt as provide, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n, l as useCssVar, ot as I18nT, v as useLocalStorage } from "./core-p4E5FBDC.js";
import { Bn as buildProps, Dn as CHANGE_EVENT, Er as debounce, Mi as N8nTooltip_default, Nn as withInstall, On as INPUT_EVENT, Vn as definePropType, Wt as ElInputNumber, _a as N8nButton_default, bn as useNamespace, br as isNumber, bt as N8nOption_default, dn as _export_sfc, en as ElTooltip, fi as useEventListener, fr as debugWarn, ga as N8nText_default, jn as EVENT_CODE, kn as UPDATE_MODEL_EVENT, ln as useFormSize, ma as N8nHeading_default, mn as useSizeProp, on as useFormItem, pr as throwError, sn as useFormItemInputId, ut as useRouter, va as N8nIcon_default, vn as Ee, xn as useLocale, yt as N8nSelect_default } from "./src-DJmr1lxY.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { E as useEvaluationStore, Xt as usePostHog } from "./users.store-DId3pj1b.js";
import { t as useToast } from "./useToast-B3utwkNU.js";
import { Yi as LOCAL_STORAGE_PARALLEL_EVAL_BY_WORKFLOW, aa as EVAL_PARALLEL_EXECUTION_FLAG, zr as VIEWS } from "./constants-DKn5DlOG.js";
import { T as defineStore } from "./useRootStore-COhM0Nxr.js";
import { t as require_dateformat } from "./dateformat-Cm5TT0Ok.js";
import { t as convertToDisplayDate } from "./dateFormatter-CqHEYTuZ.js";
import { t as require_orderBy } from "./orderBy-qUcB1-vO.js";
import { t as AnimatedSpinner_default } from "./AnimatedSpinner-zQalv3s0.js";
import { r as Line } from "./dist-Cwrvxs0K.js";
import { n as statusDictionary, r as TestTableBase_default, t as getErrorBaseKey } from "./evaluation.constants-Bi2VHIka.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/constants.mjs
var sliderContextKey = Symbol("sliderContextKey");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/slider.mjs
init_shared_esm_bundler();
var sliderProps = buildProps({
	modelValue: {
		type: definePropType([Number, Array]),
		default: 0
	},
	id: {
		type: String,
		default: void 0
	},
	min: {
		type: Number,
		default: 0
	},
	max: {
		type: Number,
		default: 100
	},
	step: {
		type: Number,
		default: 1
	},
	showInput: Boolean,
	showInputControls: {
		type: Boolean,
		default: true
	},
	size: useSizeProp,
	inputSize: useSizeProp,
	showStops: Boolean,
	showTooltip: {
		type: Boolean,
		default: true
	},
	formatTooltip: {
		type: definePropType(Function),
		default: void 0
	},
	disabled: Boolean,
	range: Boolean,
	vertical: Boolean,
	height: String,
	debounce: {
		type: Number,
		default: 300
	},
	label: {
		type: String,
		default: void 0
	},
	rangeStartLabel: {
		type: String,
		default: void 0
	},
	rangeEndLabel: {
		type: String,
		default: void 0
	},
	formatValueText: {
		type: definePropType(Function),
		default: void 0
	},
	tooltipClass: {
		type: String,
		default: void 0
	},
	placement: {
		type: String,
		values: Ee,
		default: "top"
	},
	marks: { type: definePropType(Object) },
	validateEvent: {
		type: Boolean,
		default: true
	}
});
var isValidValue = (value) => isNumber(value) || isArray(value) && value.every(isNumber);
var sliderEmits = {
	[UPDATE_MODEL_EVENT]: isValidValue,
	[INPUT_EVENT]: isValidValue,
	[CHANGE_EVENT]: isValidValue
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/composables/use-lifecycle.mjs
var useLifecycle = (props, initData, resetSize) => {
	const sliderWrapper = ref();
	onMounted(async () => {
		if (props.range) {
			if (Array.isArray(props.modelValue)) {
				initData.firstValue = Math.max(props.min, props.modelValue[0]);
				initData.secondValue = Math.min(props.max, props.modelValue[1]);
			} else {
				initData.firstValue = props.min;
				initData.secondValue = props.max;
			}
			initData.oldValue = [initData.firstValue, initData.secondValue];
		} else {
			if (typeof props.modelValue !== "number" || Number.isNaN(props.modelValue)) initData.firstValue = props.min;
			else initData.firstValue = Math.min(props.max, Math.max(props.min, props.modelValue));
			initData.oldValue = initData.firstValue;
		}
		useEventListener(window, "resize", resetSize);
		await nextTick();
		resetSize();
	});
	return { sliderWrapper };
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/composables/use-marks.mjs
var useMarks = (props) => {
	return computed(() => {
		if (!props.marks) return [];
		return Object.keys(props.marks).map(Number.parseFloat).sort((a, b) => a - b).filter((point) => point <= props.max && point >= props.min).map((point) => ({
			point,
			position: (point - props.min) * 100 / (props.max - props.min),
			mark: props.marks[point]
		}));
	});
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/composables/use-slide.mjs
var useSlide = (props, initData, emit) => {
	const { form: elForm, formItem: elFormItem } = useFormItem();
	const slider = shallowRef();
	const firstButton = ref();
	const secondButton = ref();
	const buttonRefs = {
		firstButton,
		secondButton
	};
	const sliderDisabled = computed(() => {
		return props.disabled || (elForm == null ? void 0 : elForm.disabled) || false;
	});
	const minValue = computed(() => {
		return Math.min(initData.firstValue, initData.secondValue);
	});
	const maxValue = computed(() => {
		return Math.max(initData.firstValue, initData.secondValue);
	});
	const barSize = computed(() => {
		return props.range ? `${100 * (maxValue.value - minValue.value) / (props.max - props.min)}%` : `${100 * (initData.firstValue - props.min) / (props.max - props.min)}%`;
	});
	const barStart = computed(() => {
		return props.range ? `${100 * (minValue.value - props.min) / (props.max - props.min)}%` : "0%";
	});
	const runwayStyle = computed(() => {
		return props.vertical ? { height: props.height } : {};
	});
	const barStyle = computed(() => {
		return props.vertical ? {
			height: barSize.value,
			bottom: barStart.value
		} : {
			width: barSize.value,
			left: barStart.value
		};
	});
	const resetSize = () => {
		if (slider.value) initData.sliderSize = slider.value[`client${props.vertical ? "Height" : "Width"}`];
	};
	const getButtonRefByPercent = (percent) => {
		const targetValue = props.min + percent * (props.max - props.min) / 100;
		if (!props.range) return firstButton;
		let buttonRefName;
		if (Math.abs(minValue.value - targetValue) < Math.abs(maxValue.value - targetValue)) buttonRefName = initData.firstValue < initData.secondValue ? "firstButton" : "secondButton";
		else buttonRefName = initData.firstValue > initData.secondValue ? "firstButton" : "secondButton";
		return buttonRefs[buttonRefName];
	};
	const setPosition = (percent) => {
		const buttonRef = getButtonRefByPercent(percent);
		buttonRef.value.setPosition(percent);
		return buttonRef;
	};
	const setFirstValue = (firstValue) => {
		initData.firstValue = firstValue;
		_emit(props.range ? [minValue.value, maxValue.value] : firstValue);
	};
	const setSecondValue = (secondValue) => {
		initData.secondValue = secondValue;
		if (props.range) _emit([minValue.value, maxValue.value]);
	};
	const _emit = (val) => {
		emit(UPDATE_MODEL_EVENT, val);
		emit(INPUT_EVENT, val);
	};
	const emitChange = async () => {
		await nextTick();
		emit(CHANGE_EVENT, props.range ? [minValue.value, maxValue.value] : props.modelValue);
	};
	const handleSliderPointerEvent = (event) => {
		var _a, _b, _c, _d, _e, _f;
		if (sliderDisabled.value || initData.dragging) return;
		resetSize();
		let newPercent = 0;
		if (props.vertical) {
			const clientY = (_c = (_b = (_a = event.touches) == null ? void 0 : _a.item(0)) == null ? void 0 : _b.clientY) != null ? _c : event.clientY;
			newPercent = (slider.value.getBoundingClientRect().bottom - clientY) / initData.sliderSize * 100;
		} else newPercent = (((_f = (_e = (_d = event.touches) == null ? void 0 : _d.item(0)) == null ? void 0 : _e.clientX) != null ? _f : event.clientX) - slider.value.getBoundingClientRect().left) / initData.sliderSize * 100;
		if (newPercent < 0 || newPercent > 100) return;
		return setPosition(newPercent);
	};
	const onSliderWrapperPrevent = (event) => {
		var _a, _b;
		if (((_a = buttonRefs["firstButton"].value) == null ? void 0 : _a.dragging) || ((_b = buttonRefs["secondButton"].value) == null ? void 0 : _b.dragging)) event.preventDefault();
	};
	const onSliderDown = async (event) => {
		const buttonRef = handleSliderPointerEvent(event);
		if (buttonRef) {
			await nextTick();
			buttonRef.value.onButtonDown(event);
		}
	};
	const onSliderClick = (event) => {
		if (handleSliderPointerEvent(event)) emitChange();
	};
	return {
		elFormItem,
		slider,
		firstButton,
		secondButton,
		sliderDisabled,
		minValue,
		maxValue,
		runwayStyle,
		barStyle,
		resetSize,
		setPosition,
		emitChange,
		onSliderWrapperPrevent,
		onSliderClick,
		onSliderDown,
		setFirstValue,
		setSecondValue
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/composables/use-slider-button.mjs
var { left, down, right, up, home, end, pageUp, pageDown } = EVENT_CODE;
var useTooltip = (props, formatTooltip, showTooltip) => {
	const tooltip = ref();
	const tooltipVisible = ref(false);
	const enableFormat = computed(() => {
		return formatTooltip.value instanceof Function;
	});
	return {
		tooltip,
		tooltipVisible,
		formatValue: computed(() => {
			return enableFormat.value && formatTooltip.value(props.modelValue) || props.modelValue;
		}),
		displayTooltip: debounce(() => {
			showTooltip.value && (tooltipVisible.value = true);
		}, 50),
		hideTooltip: debounce(() => {
			showTooltip.value && (tooltipVisible.value = false);
		}, 50)
	};
};
var useSliderButton = (props, initData, emit) => {
	const { disabled, min, max, step, showTooltip, precision, sliderSize, formatTooltip, emitChange, resetSize, updateDragging } = inject(sliderContextKey);
	const { tooltip, tooltipVisible, formatValue, displayTooltip, hideTooltip } = useTooltip(props, formatTooltip, showTooltip);
	const button = ref();
	const currentPosition = computed(() => {
		return `${(props.modelValue - min.value) / (max.value - min.value) * 100}%`;
	});
	const wrapperStyle = computed(() => {
		return props.vertical ? { bottom: currentPosition.value } : { left: currentPosition.value };
	});
	const handleMouseEnter = () => {
		initData.hovering = true;
		displayTooltip();
	};
	const handleMouseLeave = () => {
		initData.hovering = false;
		if (!initData.dragging) hideTooltip();
	};
	const onButtonDown = (event) => {
		if (disabled.value) return;
		event.preventDefault();
		onDragStart(event);
		window.addEventListener("mousemove", onDragging);
		window.addEventListener("touchmove", onDragging);
		window.addEventListener("mouseup", onDragEnd);
		window.addEventListener("touchend", onDragEnd);
		window.addEventListener("contextmenu", onDragEnd);
		button.value.focus();
	};
	const incrementPosition = (amount) => {
		if (disabled.value) return;
		initData.newPosition = Number.parseFloat(currentPosition.value) + amount / (max.value - min.value) * 100;
		setPosition(initData.newPosition);
		emitChange();
	};
	const onLeftKeyDown = () => {
		incrementPosition(-step.value);
	};
	const onRightKeyDown = () => {
		incrementPosition(step.value);
	};
	const onPageDownKeyDown = () => {
		incrementPosition(-step.value * 4);
	};
	const onPageUpKeyDown = () => {
		incrementPosition(step.value * 4);
	};
	const onHomeKeyDown = () => {
		if (disabled.value) return;
		setPosition(0);
		emitChange();
	};
	const onEndKeyDown = () => {
		if (disabled.value) return;
		setPosition(100);
		emitChange();
	};
	const onKeyDown = (event) => {
		let isPreventDefault = true;
		if ([left, down].includes(event.key)) onLeftKeyDown();
		else if ([right, up].includes(event.key)) onRightKeyDown();
		else if (event.key === home) onHomeKeyDown();
		else if (event.key === end) onEndKeyDown();
		else if (event.key === pageDown) onPageDownKeyDown();
		else if (event.key === pageUp) onPageUpKeyDown();
		else isPreventDefault = false;
		isPreventDefault && event.preventDefault();
	};
	const getClientXY = (event) => {
		let clientX;
		let clientY;
		if (event.type.startsWith("touch")) {
			clientY = event.touches[0].clientY;
			clientX = event.touches[0].clientX;
		} else {
			clientY = event.clientY;
			clientX = event.clientX;
		}
		return {
			clientX,
			clientY
		};
	};
	const onDragStart = (event) => {
		initData.dragging = true;
		initData.isClick = true;
		const { clientX, clientY } = getClientXY(event);
		if (props.vertical) initData.startY = clientY;
		else initData.startX = clientX;
		initData.startPosition = Number.parseFloat(currentPosition.value);
		initData.newPosition = initData.startPosition;
	};
	const onDragging = (event) => {
		if (initData.dragging) {
			initData.isClick = false;
			displayTooltip();
			resetSize();
			let diff;
			const { clientX, clientY } = getClientXY(event);
			if (props.vertical) {
				initData.currentY = clientY;
				diff = (initData.startY - initData.currentY) / sliderSize.value * 100;
			} else {
				initData.currentX = clientX;
				diff = (initData.currentX - initData.startX) / sliderSize.value * 100;
			}
			initData.newPosition = initData.startPosition + diff;
			setPosition(initData.newPosition);
		}
	};
	const onDragEnd = () => {
		if (initData.dragging) {
			setTimeout(() => {
				initData.dragging = false;
				if (!initData.hovering) hideTooltip();
				if (!initData.isClick) setPosition(initData.newPosition);
				emitChange();
			}, 0);
			window.removeEventListener("mousemove", onDragging);
			window.removeEventListener("touchmove", onDragging);
			window.removeEventListener("mouseup", onDragEnd);
			window.removeEventListener("touchend", onDragEnd);
			window.removeEventListener("contextmenu", onDragEnd);
		}
	};
	const setPosition = async (newPosition) => {
		if (newPosition === null || Number.isNaN(+newPosition)) return;
		if (newPosition < 0) newPosition = 0;
		else if (newPosition > 100) newPosition = 100;
		const lengthPerStep = 100 / ((max.value - min.value) / step.value);
		let value = Math.round(newPosition / lengthPerStep) * lengthPerStep * (max.value - min.value) * .01 + min.value;
		value = Number.parseFloat(value.toFixed(precision.value));
		if (value !== props.modelValue) emit(UPDATE_MODEL_EVENT, value);
		if (!initData.dragging && props.modelValue !== initData.oldValue) initData.oldValue = props.modelValue;
		await nextTick();
		initData.dragging && displayTooltip();
		tooltip.value.updatePopper();
	};
	watch(() => initData.dragging, (val) => {
		updateDragging(val);
	});
	return {
		disabled,
		button,
		tooltip,
		tooltipVisible,
		showTooltip,
		wrapperStyle,
		formatValue,
		handleMouseEnter,
		handleMouseLeave,
		onButtonDown,
		onKeyDown,
		setPosition
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/composables/use-stops.mjs
var useStops = (props, initData, minValue, maxValue) => {
	const stops = computed(() => {
		if (!props.showStops || props.min > props.max) return [];
		if (props.step === 0) {
			debugWarn("ElSlider", "step should not be 0.");
			return [];
		}
		const stopCount = (props.max - props.min) / props.step;
		const stepWidth = 100 * props.step / (props.max - props.min);
		const result = Array.from({ length: stopCount - 1 }).map((_, index) => (index + 1) * stepWidth);
		if (props.range) return result.filter((step) => {
			return step < 100 * (minValue.value - props.min) / (props.max - props.min) || step > 100 * (maxValue.value - props.min) / (props.max - props.min);
		});
		else return result.filter((step) => step > 100 * (initData.firstValue - props.min) / (props.max - props.min));
	});
	const getStopStyle = (position) => {
		return props.vertical ? { bottom: `${position}%` } : { left: `${position}%` };
	};
	return {
		stops,
		getStopStyle
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/composables/use-watch.mjs
var useWatch = (props, initData, minValue, maxValue, emit, elFormItem) => {
	const _emit = (val) => {
		emit(UPDATE_MODEL_EVENT, val);
		emit(INPUT_EVENT, val);
	};
	const valueChanged = () => {
		if (props.range) return ![minValue.value, maxValue.value].every((item, index) => item === initData.oldValue[index]);
		else return props.modelValue !== initData.oldValue;
	};
	const setValues = () => {
		var _a, _b;
		if (props.min > props.max) throwError("Slider", "min should not be greater than max.");
		const val = props.modelValue;
		if (props.range && Array.isArray(val)) if (val[1] < props.min) _emit([props.min, props.min]);
		else if (val[0] > props.max) _emit([props.max, props.max]);
		else if (val[0] < props.min) _emit([props.min, val[1]]);
		else if (val[1] > props.max) _emit([val[0], props.max]);
		else {
			initData.firstValue = val[0];
			initData.secondValue = val[1];
			if (valueChanged()) {
				if (props.validateEvent) (_a = elFormItem == null ? void 0 : elFormItem.validate) == null || _a.call(elFormItem, "change").catch((err) => debugWarn(err));
				initData.oldValue = val.slice();
			}
		}
		else if (!props.range && typeof val === "number" && !Number.isNaN(val)) if (val < props.min) _emit(props.min);
		else if (val > props.max) _emit(props.max);
		else {
			initData.firstValue = val;
			if (valueChanged()) {
				if (props.validateEvent) (_b = elFormItem == null ? void 0 : elFormItem.validate) == null || _b.call(elFormItem, "change").catch((err) => debugWarn(err));
				initData.oldValue = val;
			}
		}
	};
	setValues();
	watch(() => initData.dragging, (val) => {
		if (!val) setValues();
	});
	watch(() => props.modelValue, (val, oldVal) => {
		if (initData.dragging || Array.isArray(val) && Array.isArray(oldVal) && val.every((item, index) => item === oldVal[index]) && initData.firstValue === val[0] && initData.secondValue === val[1]) return;
		setValues();
	}, { deep: true });
	watch(() => [props.min, props.max], () => {
		setValues();
	});
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/button.mjs
var sliderButtonProps = buildProps({
	modelValue: {
		type: Number,
		default: 0
	},
	vertical: Boolean,
	tooltipClass: String,
	placement: {
		type: String,
		values: Ee,
		default: "top"
	}
});
var sliderButtonEmits = { [UPDATE_MODEL_EVENT]: (value) => isNumber(value) };
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/button2.mjs
var _hoisted_1$2 = ["tabindex"];
var SliderButton = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElSliderButton" }),
	props: sliderButtonProps,
	emits: sliderButtonEmits,
	setup(__props, { expose, emit }) {
		const props = __props;
		const ns = useNamespace("slider");
		const initData = reactive({
			hovering: false,
			dragging: false,
			isClick: false,
			startX: 0,
			currentX: 0,
			startY: 0,
			currentY: 0,
			startPosition: 0,
			newPosition: 0,
			oldValue: props.modelValue
		});
		const { disabled, button, tooltip, showTooltip, tooltipVisible, wrapperStyle, formatValue, handleMouseEnter, handleMouseLeave, onButtonDown, onKeyDown, setPosition } = useSliderButton(props, initData, emit);
		const { hovering, dragging } = toRefs(initData);
		expose({
			onButtonDown,
			onKeyDown,
			setPosition,
			hovering,
			dragging
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "button",
				ref: button,
				class: normalizeClass([unref(ns).e("button-wrapper"), {
					hover: unref(hovering),
					dragging: unref(dragging)
				}]),
				style: normalizeStyle(unref(wrapperStyle)),
				tabindex: unref(disabled) ? -1 : 0,
				onMouseenter: _cache[0] || (_cache[0] = (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
				onMouseleave: _cache[1] || (_cache[1] = (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args)),
				onMousedown: _cache[2] || (_cache[2] = (...args) => unref(onButtonDown) && unref(onButtonDown)(...args)),
				onTouchstart: _cache[3] || (_cache[3] = (...args) => unref(onButtonDown) && unref(onButtonDown)(...args)),
				onFocus: _cache[4] || (_cache[4] = (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
				onBlur: _cache[5] || (_cache[5] = (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args)),
				onKeydown: _cache[6] || (_cache[6] = (...args) => unref(onKeyDown) && unref(onKeyDown)(...args))
			}, [createVNode(unref(ElTooltip), {
				ref_key: "tooltip",
				ref: tooltip,
				visible: unref(tooltipVisible),
				placement: _ctx.placement,
				"fallback-placements": [
					"top",
					"bottom",
					"right",
					"left"
				],
				"stop-popper-mouse-event": false,
				"popper-class": _ctx.tooltipClass,
				disabled: !unref(showTooltip),
				persistent: ""
			}, {
				content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(formatValue)), 1)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([unref(ns).e("button"), {
					hover: unref(hovering),
					dragging: unref(dragging)
				}]) }, null, 2)]),
				_: 1
			}, 8, [
				"visible",
				"placement",
				"popper-class",
				"disabled"
			])], 46, _hoisted_1$2);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/marker.mjs
init_shared_esm_bundler();
var SliderMarker = defineComponent({
	name: "ElSliderMarker",
	props: buildProps({ mark: {
		type: definePropType([String, Object]),
		default: void 0
	} }),
	setup(props) {
		const ns = useNamespace("slider");
		const label = computed(() => {
			return isString(props.mark) ? props.mark : props.mark.label;
		});
		const style = computed(() => isString(props.mark) ? void 0 : props.mark.style);
		return () => h("div", {
			class: ns.e("marks-text"),
			style: style.value
		}, label.value);
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/src/slider2.mjs
var _hoisted_1$1 = [
	"id",
	"role",
	"aria-label",
	"aria-labelledby"
];
var _hoisted_2 = { key: 1 };
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_6ee25ac3afe262da12a5490787fff33d/node_modules/element-plus/es/components/slider/index.mjs
var ElSlider = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElSlider" }),
	props: sliderProps,
	emits: sliderEmits,
	setup(__props, { expose, emit }) {
		const props = __props;
		const ns = useNamespace("slider");
		const { t } = useLocale();
		const initData = reactive({
			firstValue: 0,
			secondValue: 0,
			oldValue: 0,
			dragging: false,
			sliderSize: 1
		});
		const { elFormItem, slider, firstButton, secondButton, sliderDisabled, minValue, maxValue, runwayStyle, barStyle, resetSize, emitChange, onSliderWrapperPrevent, onSliderClick, onSliderDown, setFirstValue, setSecondValue } = useSlide(props, initData, emit);
		const { stops, getStopStyle } = useStops(props, initData, minValue, maxValue);
		const { inputId, isLabeledByFormItem } = useFormItemInputId(props, { formItemContext: elFormItem });
		const sliderWrapperSize = useFormSize();
		const sliderInputSize = computed(() => props.inputSize || sliderWrapperSize.value);
		const groupLabel = computed(() => {
			return props.label || t("el.slider.defaultLabel", {
				min: props.min,
				max: props.max
			});
		});
		const firstButtonLabel = computed(() => {
			if (props.range) return props.rangeStartLabel || t("el.slider.defaultRangeStartLabel");
			else return groupLabel.value;
		});
		const firstValueText = computed(() => {
			return props.formatValueText ? props.formatValueText(firstValue.value) : `${firstValue.value}`;
		});
		const secondButtonLabel = computed(() => {
			return props.rangeEndLabel || t("el.slider.defaultRangeEndLabel");
		});
		const secondValueText = computed(() => {
			return props.formatValueText ? props.formatValueText(secondValue.value) : `${secondValue.value}`;
		});
		const sliderKls = computed(() => [
			ns.b(),
			ns.m(sliderWrapperSize.value),
			ns.is("vertical", props.vertical),
			{ [ns.m("with-input")]: props.showInput }
		]);
		const markList = useMarks(props);
		useWatch(props, initData, minValue, maxValue, emit, elFormItem);
		const precision = computed(() => {
			const precisions = [
				props.min,
				props.max,
				props.step
			].map((item) => {
				const decimal = `${item}`.split(".")[1];
				return decimal ? decimal.length : 0;
			});
			return Math.max.apply(null, precisions);
		});
		const { sliderWrapper } = useLifecycle(props, initData, resetSize);
		const { firstValue, secondValue, sliderSize } = toRefs(initData);
		const updateDragging = (val) => {
			initData.dragging = val;
		};
		provide(sliderContextKey, {
			...toRefs(props),
			sliderSize,
			disabled: sliderDisabled,
			precision,
			emitChange,
			resetSize,
			updateDragging
		});
		expose({ onSliderClick });
		return (_ctx, _cache) => {
			var _a, _b;
			return openBlock(), createElementBlock("div", {
				id: _ctx.range ? unref(inputId) : void 0,
				ref_key: "sliderWrapper",
				ref: sliderWrapper,
				class: normalizeClass(unref(sliderKls)),
				role: _ctx.range ? "group" : void 0,
				"aria-label": _ctx.range && !unref(isLabeledByFormItem) ? unref(groupLabel) : void 0,
				"aria-labelledby": _ctx.range && unref(isLabeledByFormItem) ? (_a = unref(elFormItem)) == null ? void 0 : _a.labelId : void 0,
				onTouchstart: _cache[2] || (_cache[2] = (...args) => unref(onSliderWrapperPrevent) && unref(onSliderWrapperPrevent)(...args)),
				onTouchmove: _cache[3] || (_cache[3] = (...args) => unref(onSliderWrapperPrevent) && unref(onSliderWrapperPrevent)(...args))
			}, [createBaseVNode("div", {
				ref_key: "slider",
				ref: slider,
				class: normalizeClass([
					unref(ns).e("runway"),
					{ "show-input": _ctx.showInput && !_ctx.range },
					unref(ns).is("disabled", unref(sliderDisabled))
				]),
				style: normalizeStyle(unref(runwayStyle)),
				onMousedown: _cache[0] || (_cache[0] = (...args) => unref(onSliderDown) && unref(onSliderDown)(...args)),
				onTouchstart: _cache[1] || (_cache[1] = (...args) => unref(onSliderDown) && unref(onSliderDown)(...args))
			}, [
				createBaseVNode("div", {
					class: normalizeClass(unref(ns).e("bar")),
					style: normalizeStyle(unref(barStyle))
				}, null, 6),
				createVNode(SliderButton, {
					id: !_ctx.range ? unref(inputId) : void 0,
					ref_key: "firstButton",
					ref: firstButton,
					"model-value": unref(firstValue),
					vertical: _ctx.vertical,
					"tooltip-class": _ctx.tooltipClass,
					placement: _ctx.placement,
					role: "slider",
					"aria-label": _ctx.range || !unref(isLabeledByFormItem) ? unref(firstButtonLabel) : void 0,
					"aria-labelledby": !_ctx.range && unref(isLabeledByFormItem) ? (_b = unref(elFormItem)) == null ? void 0 : _b.labelId : void 0,
					"aria-valuemin": _ctx.min,
					"aria-valuemax": _ctx.range ? unref(secondValue) : _ctx.max,
					"aria-valuenow": unref(firstValue),
					"aria-valuetext": unref(firstValueText),
					"aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
					"aria-disabled": unref(sliderDisabled),
					"onUpdate:modelValue": unref(setFirstValue)
				}, null, 8, [
					"id",
					"model-value",
					"vertical",
					"tooltip-class",
					"placement",
					"aria-label",
					"aria-labelledby",
					"aria-valuemin",
					"aria-valuemax",
					"aria-valuenow",
					"aria-valuetext",
					"aria-orientation",
					"aria-disabled",
					"onUpdate:modelValue"
				]),
				_ctx.range ? (openBlock(), createBlock(SliderButton, {
					key: 0,
					ref_key: "secondButton",
					ref: secondButton,
					"model-value": unref(secondValue),
					vertical: _ctx.vertical,
					"tooltip-class": _ctx.tooltipClass,
					placement: _ctx.placement,
					role: "slider",
					"aria-label": unref(secondButtonLabel),
					"aria-valuemin": unref(firstValue),
					"aria-valuemax": _ctx.max,
					"aria-valuenow": unref(secondValue),
					"aria-valuetext": unref(secondValueText),
					"aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
					"aria-disabled": unref(sliderDisabled),
					"onUpdate:modelValue": unref(setSecondValue)
				}, null, 8, [
					"model-value",
					"vertical",
					"tooltip-class",
					"placement",
					"aria-label",
					"aria-valuemin",
					"aria-valuemax",
					"aria-valuenow",
					"aria-valuetext",
					"aria-orientation",
					"aria-disabled",
					"onUpdate:modelValue"
				])) : createCommentVNode("v-if", true),
				_ctx.showStops ? (openBlock(), createElementBlock("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(stops), (item, key) => {
					return openBlock(), createElementBlock("div", {
						key,
						class: normalizeClass(unref(ns).e("stop")),
						style: normalizeStyle(unref(getStopStyle)(item))
					}, null, 6);
				}), 128))])) : createCommentVNode("v-if", true),
				unref(markList).length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(markList), (item, key) => {
					return openBlock(), createElementBlock("div", {
						key,
						style: normalizeStyle(unref(getStopStyle)(item.position)),
						class: normalizeClass([unref(ns).e("stop"), unref(ns).e("marks-stop")])
					}, null, 6);
				}), 128))]), createBaseVNode("div", { class: normalizeClass(unref(ns).e("marks")) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(markList), (item, key) => {
					return openBlock(), createBlock(unref(SliderMarker), {
						key,
						mark: item.mark,
						style: normalizeStyle(unref(getStopStyle)(item.position))
					}, null, 8, ["mark", "style"]);
				}), 128))], 2)], 64)) : createCommentVNode("v-if", true)
			], 38), _ctx.showInput && !_ctx.range ? (openBlock(), createBlock(unref(ElInputNumber), {
				key: 0,
				ref: "input",
				"model-value": unref(firstValue),
				class: normalizeClass(unref(ns).e("input")),
				step: _ctx.step,
				disabled: unref(sliderDisabled),
				controls: _ctx.showInputControls,
				min: _ctx.min,
				max: _ctx.max,
				debounce: _ctx.debounce,
				size: unref(sliderInputSize),
				"onUpdate:modelValue": unref(setFirstValue),
				onChange: unref(emitChange)
			}, null, 8, [
				"model-value",
				"class",
				"step",
				"disabled",
				"controls",
				"min",
				"max",
				"debounce",
				"size",
				"onUpdate:modelValue",
				"onChange"
			])) : createCommentVNode("v-if", true)], 42, _hoisted_1$1);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue"]]));
//#endregion
//#region src/features/ai/evaluation.ee/components/ConcurrencySlider/ConcurrencySlider.vue?vue&type=script&setup=true&lang.ts
var ConcurrencySlider_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConcurrencySlider",
	props: {
		min: { default: 0 },
		max: { default: 100 },
		step: { default: 1 },
		disabled: {
			type: Boolean,
			default: false
		},
		showStops: {
			type: Boolean,
			default: false
		},
		showTooltip: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const brandTokens = {
			"--el-slider-main-bg-color": "var(--background--brand)",
			"--el-slider-runway-bg-color": "var(--color--foreground)",
			"--el-slider-stop-bg-color": "rgba(0, 0, 0, 0.28)",
			"--el-slider-disabled-color": "var(--color--foreground--shade-1)",
			"--el-color-white": "#fff",
			"--el-slider-button-size": "16px",
			"--el-slider-button-wrapper-size": "28px",
			"--el-slider-height": "20px",
			"--el-slider-border-radius": "20px",
			"--el-slider-button-wrapper-offset": "-4px"
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElSlider), mergeProps({
				min: __props.min,
				max: __props.max,
				step: __props.step,
				disabled: __props.disabled,
				"show-stops": __props.showStops,
				"show-tooltip": __props.showTooltip,
				style: brandTokens,
				class: _ctx.$style.slider
			}, _ctx.$attrs), null, 16, [
				"min",
				"max",
				"step",
				"disabled",
				"show-stops",
				"show-tooltip",
				"class"
			]);
		};
	}
});
var ConcurrencySlider_vue_vue_type_style_index_0_lang_module_default = { slider: "_slider_12qnu_125" };
//#endregion
//#region src/features/ai/evaluation.ee/components/ConcurrencySlider/index.ts
var ConcurrencySlider_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConcurrencySlider_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConcurrencySlider_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/composables/useMetricsChart.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
function useMetricsChart() {
	const colors = {
		primary: useCssVar("--color--primary", document.body).value,
		textBase: useCssVar("--color--text", document.body).value,
		backgroundXLight: useCssVar("--color--background--light-3", document.body).value,
		foregroundLight: useCssVar("--color--foreground--tint-1", document.body).value,
		foregroundBase: useCssVar("--color--foreground", document.body).value,
		foregroundDark: useCssVar("--color--foreground--shade-1", document.body).value
	};
	function generateChartData(runs, metric) {
		return { datasets: [{
			data: runs,
			parsing: {
				xAxisKey: "id",
				yAxisKey: `metrics.${metric}`
			},
			borderColor: colors.primary,
			backgroundColor: colors.backgroundXLight,
			borderWidth: 1,
			pointRadius: 2,
			pointHoverRadius: 4,
			pointBackgroundColor: colors.backgroundXLight,
			pointHoverBackgroundColor: colors.backgroundXLight
		}] };
	}
	function generateChartOptions({ metric, data }) {
		return {
			responsive: true,
			maintainAspectRatio: false,
			animation: false,
			devicePixelRatio: 2,
			interaction: {
				mode: "index",
				intersect: false
			},
			scales: {
				y: {
					border: { display: false },
					grid: { color: colors.foregroundBase },
					ticks: {
						padding: 8,
						color: colors.textBase
					}
				},
				x: {
					border: { display: false },
					grid: { display: false },
					ticks: {
						color: colors.textBase,
						callback(_tickValue, index) {
							return `#${data[index].index}`;
						}
					}
				}
			},
			plugins: {
				tooltip: {
					backgroundColor: colors.backgroundXLight,
					titleColor: colors.textBase,
					titleFont: { weight: "600" },
					bodyColor: colors.textBase,
					bodySpacing: 4,
					padding: 12,
					borderColor: colors.foregroundBase,
					borderWidth: 1,
					displayColors: true,
					callbacks: {
						title: (tooltipItems) => {
							return (0, import_dateformat.default)(tooltipItems[0].raw.runAt, "yyyy-mm-dd HH:MM");
						},
						label: (context) => `${metric}: ${context.parsed.y.toFixed(2)}`,
						labelColor() {
							return {
								borderColor: "rgba(29, 21, 21, 0)",
								backgroundColor: colors.primary,
								borderWidth: 0,
								borderRadius: 5
							};
						}
					}
				},
				legend: { display: false }
			}
		};
	}
	return {
		generateChartData,
		generateChartOptions
	};
}
//#endregion
//#region src/features/ai/evaluation.ee/components/ListRuns/MetricsChart.vue?vue&type=script&setup=true&lang.ts
var MetricsChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricsChart",
	props: {
		selectedMetric: {},
		runs: {}
	},
	emits: ["update:selectedMetric"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const metricsChart = useMetricsChart();
		const availableMetrics = computed(() => {
			return props.runs.reduce((acc, run) => {
				const metricKeys = Object.keys(run.metrics ?? {});
				return [...new Set([...acc, ...metricKeys])];
			}, []);
		});
		const filteredRuns = computed(() => props.runs.filter((run) => run.metrics?.[props.selectedMetric] !== void 0));
		const chartData = computed(() => metricsChart.generateChartData(filteredRuns.value, props.selectedMetric));
		const chartOptions = computed(() => metricsChart.generateChartOptions({
			metric: props.selectedMetric,
			data: filteredRuns.value
		}));
		watchEffect(() => {
			if (props.runs.length > 0 && !props.selectedMetric) emit("update:selectedMetric", availableMetrics.value[0]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.metricsChartContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chartHeader) }, [createVNode(unref(N8nSelect_default), {
				"model-value": __props.selectedMetric,
				class: normalizeClass(_ctx.$style.metricSelect),
				placeholder: "Select metric",
				size: "small",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:selectedMetric", $event))
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(availableMetrics.value, (metric) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: metric,
						label: metric,
						value: metric
					}, null, 8, ["label", "value"]);
				}), 128))]),
				_: 1
			}, 8, ["model-value", "class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chartWrapper) }, [(openBlock(), createBlock(unref(Line), {
				key: __props.selectedMetric,
				data: chartData.value,
				options: chartOptions.value,
				class: normalizeClass(_ctx.$style.metricsChart)
			}, null, 8, [
				"data",
				"options",
				"class"
			]))], 2)], 2);
		};
	}
});
var MetricsChart_vue_vue_type_style_index_0_lang_module_default = {
	metricsChartContainer: "_metricsChartContainer_1i2e2_125",
	chartHeader: "_chartHeader_1i2e2_130",
	chartTitle: "_chartTitle_1i2e2_133",
	metricSelect: "_metricSelect_1i2e2_138",
	chartWrapper: "_chartWrapper_1i2e2_141"
};
var MetricsChart_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MetricsChart_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricsChart_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/ListRuns/TestRunsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { style: {
	"display": "inline-flex",
	"gap": "12px",
	"text-transform": "capitalize",
	"align-items": "center"
} };
var TestRunsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestRunsTable",
	props: {
		runs: {},
		columns: {}
	},
	emits: ["rowClick"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const locale = useI18n();
		const styledColumns = computed(() => {
			return props.columns.map((column) => {
				if (column.prop === "id") return {
					...column,
					width: 100
				};
				if (column.prop === "runAt") return {
					...column,
					width: 150
				};
				return column;
			});
		});
		const runSummaries = computed(() => {
			return props.runs.map(({ status, finalResult, errorDetails, ...run }) => {
				if (status === "completed" && finalResult && ["error", "warning"].includes(finalResult)) status = "warning";
				return {
					...run,
					status,
					finalResult,
					errorDetails
				};
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nHeading_default), {
				size: "large",
				bold: true,
				class: normalizeClass(_ctx.$style.runsTableHeading),
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.pastRuns.total", { adjustToNumber: __props.runs.length })) + " (" + toDisplayString(__props.runs.length) + ") ", 1)]),
				_: 1
			}, 8, ["class"]), createVNode(TestTableBase_default, {
				data: runSummaries.value,
				columns: styledColumns.value,
				"default-sort": {
					prop: "runAt",
					order: "descending"
				},
				onRowClick: _cache[0] || (_cache[0] = (row) => row.status !== "error" ? emit("rowClick", row) : void 0)
			}, {
				id: withCtx(({ row }) => [createTextVNode("#" + toDisplayString(row.index), 1)]),
				status: withCtx(({ row }) => [createBaseVNode("div", _hoisted_1, [row.status === "running" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "secondary"
				}, {
					default: withCtx(() => [createVNode(AnimatedSpinner_default)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: unref(statusDictionary)[row.status].icon,
					color: unref(statusDictionary)[row.status].color
				}, null, 8, ["icon", "color"])), row.status === "warning" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					color: "warning",
					class: normalizeClass([_ctx.$style.alertText, _ctx.$style.warningText])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`evaluation.runDetail.error.partialCasesFailed`)), 1)]),
					_: 1
				}, 8, ["class"])) : row.status === "error" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 3,
					placement: "top",
					"show-after": 300
				}, {
					content: withCtx(() => [createVNode(unref(I18nT), {
						keypath: `${unref(getErrorBaseKey)(row.errorCode)}`,
						scope: "global"
					}, createSlots({ _: 2 }, [unref(locale).exists(`${unref(getErrorBaseKey)(row.errorCode)}.description`) ? {
						name: "description",
						fn: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}.description`) && ". ") + " " + toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}.description`)), 1)]),
						key: "0"
					} : void 0]), 1032, ["keypath"])]),
					default: withCtx(() => [createVNode(unref(N8nText_default), { class: normalizeClass([_ctx.$style.alertText, _ctx.$style.errorText]) }, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: `${unref(getErrorBaseKey)(row.errorCode)}`,
							scope: "global"
						}, createSlots({ _: 2 }, [unref(locale).exists(`${unref(getErrorBaseKey)(row.errorCode)}.description`) ? {
							name: "description",
							fn: withCtx(() => [createBaseVNode("p", { class: normalizeClass(_ctx.$style.grayText) }, toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}.description`)), 3)]),
							key: "0"
						} : void 0]), 1032, ["keypath"])]),
						_: 2
					}, 1032, ["class"])]),
					_: 2
				}, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [createTextVNode(toDisplayString(row.status), 1)], 64))])]),
				_: 1
			}, 8, ["data", "columns"])], 2);
		};
	}
});
var TestRunsTable_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1ulnw_125",
	grayText: "_grayText_1ulnw_131",
	alertText: "_alertText_1ulnw_135",
	warningText: "_warningText_1ulnw_153",
	errorText: "_errorText_1ulnw_157"
};
var TestRunsTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TestRunsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestRunsTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/ListRuns/RunsSection.vue?vue&type=script&setup=true&lang.ts
var RunsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunsSection",
	props: /* @__PURE__ */ mergeModels({
		runs: {},
		workflowId: {}
	}, {
		"selectedMetric": { required: true },
		"selectedMetricModifiers": {}
	}),
	emits: ["update:selectedMetric"],
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const router = useRouter();
		const selectedMetric = useModel(__props, "selectedMetric");
		const metrics = computed(() => {
			return [...props.runs.reduce((acc, run) => {
				Object.keys(run.metrics ?? {}).forEach((metric) => acc.add(metric));
				return acc;
			}, /* @__PURE__ */ new Set())];
		});
		const metricColumns = computed(() => metrics.value.map((metric) => ({
			prop: `metrics.${metric}`,
			label: metric,
			sortable: true,
			showHeaderTooltip: true,
			sortMethod: (a, b) => (a.metrics?.[metric] ?? 0) - (b.metrics?.[metric] ?? 0),
			formatter: (row) => row.metrics?.[metric] !== void 0 ? (row.metrics?.[metric]).toFixed(2) : ""
		})));
		const columns = computed(() => [
			{
				prop: "id",
				label: locale.baseText("evaluation.listRuns.runNumber"),
				showOverflowTooltip: true
			},
			{
				prop: "runAt",
				label: "Run at",
				sortable: true,
				showOverflowTooltip: true,
				formatter: (row) => {
					const { date, time } = convertToDisplayDate(row.runAt);
					return [date, time].join(", ");
				},
				sortMethod: (a, b) => new Date(a.runAt ?? a.createdAt).getTime() - new Date(b.runAt ?? b.createdAt).getTime()
			},
			{
				prop: "status",
				label: locale.baseText("evaluation.listRuns.status"),
				sortable: true
			},
			...metricColumns.value
		]);
		const handleRowClick = (row) => {
			router.push({
				name: VIEWS.EVALUATION_RUNS_DETAIL,
				params: { runId: row.id }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.runs) }, [createVNode(MetricsChart_default, {
				"selected-metric": selectedMetric.value,
				"onUpdate:selectedMetric": _cache[0] || (_cache[0] = ($event) => selectedMetric.value = $event),
				runs: __props.runs
			}, null, 8, ["selected-metric", "runs"]), createVNode(TestRunsTable_default, {
				class: normalizeClass(_ctx.$style.runsTable),
				runs: __props.runs,
				columns: columns.value,
				selectable: true,
				"data-test-id": "past-runs-table",
				onRowClick: handleRowClick
			}, null, 8, [
				"class",
				"runs",
				"columns"
			])], 2);
		};
	}
});
var RunsSection_vue_vue_type_style_index_0_lang_module_default = { runs: "_runs_ni2ti_125" };
var RunsSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunsSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunsSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/parallelEval.store.ts
var NEW_WORKFLOW_SENTINEL = "new";
var buildDefaultState = () => ({
	parallelEnabled: true,
	concurrencyValue: 3
});
/**
* Per-workflow UI state for the parallel-execution rollout. Visibility of the
* UI is gated on the `080_eval_parallel_execution` PostHog flag (FE primary gate).
* Backend has its own safety net that coerces flag-off requests to sequential.
*
* State shape: `{ [workflowId]: { parallelEnabled, concurrencyValue } }`.
* Workflow id `'new'` is a sentinel for unsaved workflows; the entry becomes
* orphaned in localStorage once the workflow gets a real id, but it's
* harmless and self-cleaning across sessions.
*/
var useParallelEvalStore = defineStore("parallelEval", () => {
	const postHog = usePostHog();
	const storage = useLocalStorage(LOCAL_STORAGE_PARALLEL_EVAL_BY_WORKFLOW, {}, {
		deep: true,
		flush: "sync"
	});
	const isFeatureEnabled = computed(() => postHog.isFeatureEnabled(EVAL_PARALLEL_EXECUTION_FLAG) === true);
	const resolveKey = (workflowId) => workflowId && workflowId.length > 0 ? workflowId : NEW_WORKFLOW_SENTINEL;
	const ensureEntry = (key) => {
		if (!storage.value[key]) storage.value[key] = buildDefaultState();
		return storage.value[key];
	};
	const isParallel = (workflowId) => ensureEntry(resolveKey(workflowId)).parallelEnabled;
	const concurrencyValue = (workflowId) => ensureEntry(resolveKey(workflowId)).concurrencyValue;
	const setParallel = (workflowId, value) => {
		ensureEntry(resolveKey(workflowId)).parallelEnabled = value;
	};
	const setConcurrencyValue = (workflowId, value) => {
		const clamped = Math.max(1, Math.min(10, Math.floor(Number.isFinite(value) ? value : 3)));
		ensureEntry(resolveKey(workflowId)).concurrencyValue = clamped;
	};
	/**
	* The numeric concurrency the FE should send for a run. Returns `1` when
	* the parallel checkbox is unchecked (sequential), the slider value when
	* checked. Caller is responsible for skipping the field entirely when
	* the feature flag is off.
	*/
	const effectiveConcurrency = (workflowId) => {
		const state = ensureEntry(resolveKey(workflowId));
		return state.parallelEnabled ? state.concurrencyValue : 1;
	};
	return {
		isFeatureEnabled,
		isParallel,
		concurrencyValue,
		setParallel,
		setConcurrencyValue,
		effectiveConcurrency
	};
});
//#endregion
//#region src/features/ai/evaluation.ee/views/EvaluationsView.vue?vue&type=script&setup=true&lang.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
var EvaluationsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsView",
	props: { workflowId: {} },
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const toast = useToast();
		const evaluationStore = useEvaluationStore();
		const parallelEvalStore = useParallelEvalStore();
		const selectedMetric = ref("");
		const cancellingTestRun = ref(false);
		const runningTestRun = computed(() => runs.value.find((run) => run.status === "running"));
		const concurrencyModel = computed({
			get: () => parallelEvalStore.concurrencyValue(props.workflowId),
			set: (value) => parallelEvalStore.setConcurrencyValue(props.workflowId, value)
		});
		const concurrencyLabel = computed(() => concurrencyModel.value > 1 ? locale.baseText("evaluation.runInParallel.label.concurrent", { interpolate: { count: String(concurrencyModel.value) } }) : locale.baseText("evaluation.runInParallel.label.sequential"));
		async function runTest() {
			try {
				const options = parallelEvalStore.isFeatureEnabled ? { concurrency: concurrencyModel.value } : void 0;
				await evaluationStore.startTestRun(props.workflowId, options);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
			}
			try {
				await evaluationStore.fetchTestRuns(props.workflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
		}
		async function stopTest() {
			if (!runningTestRun.value) return;
			try {
				cancellingTestRun.value = true;
				await evaluationStore.cancelTestRun(runningTestRun.value.workflowId, runningTestRun.value.id);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStopTestRun"));
				cancellingTestRun.value = false;
			}
		}
		const runs = computed(() => {
			return (0, import_orderBy.default)(Object.values(evaluationStore.testRunsById ?? {}).filter(({ workflowId }) => workflowId === props.workflowId), (record) => new Date(record.runAt), ["asc"]).map((record, index) => ({
				...record,
				index: index + 1
			}));
		});
		watch(runningTestRun, (run) => {
			if (!run) cancellingTestRun.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.evaluationsView) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerInner) }, [unref(parallelEvalStore).isFeatureEnabled && !runningTestRun.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.parallelControls),
				"data-test-id": "parallel-eval-controls"
			}, [
				createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.concurrencyLabel),
					"data-test-id": "run-in-parallel-mode-label"
				}, toDisplayString(concurrencyLabel.value), 3),
				createVNode(unref(N8nTooltip_default), {
					placement: "top",
					content: unref(locale).baseText("evaluation.runInParallel.tooltip")
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "circle-help",
						size: "small",
						class: normalizeClass(_ctx.$style.tooltipIcon),
						"data-test-id": "run-in-parallel-tooltip-icon"
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content"]),
				createVNode(unref(ConcurrencySlider_default), {
					modelValue: concurrencyModel.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => concurrencyModel.value = $event),
					min: 1,
					max: 10,
					step: 1,
					"show-stops": "",
					class: normalizeClass(_ctx.$style.concurrencySlider),
					"data-test-id": "run-in-parallel-concurrency"
				}, null, 8, ["modelValue", "class"])
			], 2)) : createCommentVNode("", true), runningTestRun.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: "subtle",
				disabled: cancellingTestRun.value,
				class: normalizeClass(_ctx.$style.runOrStopTestButton),
				size: "small",
				"data-test-id": "stop-test-button",
				label: unref(locale).baseText("evaluation.stopTest"),
				onClick: stopTest
			}, null, 8, [
				"disabled",
				"class",
				"label"
			])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 2,
				variant: "solid",
				class: normalizeClass(_ctx.$style.runOrStopTestButton),
				size: "small",
				"data-test-id": "run-test-button",
				label: unref(locale).baseText("evaluation.runTest"),
				onClick: runTest
			}, null, 8, ["class", "label"]))], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(RunsSection_default, {
				"selected-metric": selectedMetric.value,
				"onUpdate:selectedMetric": _cache[1] || (_cache[1] = ($event) => selectedMetric.value = $event),
				class: normalizeClass(_ctx.$style.runs),
				runs: runs.value,
				"workflow-id": props.workflowId
			}, null, 8, [
				"selected-metric",
				"class",
				"runs",
				"workflow-id"
			])], 2)], 2)], 2);
		};
	}
});
var EvaluationsView_vue_vue_type_style_index_0_lang_module_default = {
	evaluationsView: "_evaluationsView_1aaju_125",
	content: "_content_1aaju_129",
	header: "_header_1aaju_136",
	headerInner: "_headerInner_1aaju_149",
	wrapper: "_wrapper_1aaju_156",
	runOrStopTestButton: "_runOrStopTestButton_1aaju_161",
	parallelControls: "_parallelControls_1aaju_166",
	tooltipIcon: "_tooltipIcon_1aaju_172",
	concurrencyLabel: "_concurrencyLabel_1aaju_177",
	concurrencySlider: "_concurrencySlider_1aaju_184",
	runs: "_runs_1aaju_189"
};
var EvaluationsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EvaluationsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EvaluationsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { EvaluationsView_default as default };

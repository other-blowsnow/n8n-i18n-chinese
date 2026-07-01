import { I as h, Jt as NOOP, N as defineComponent, Nt as onScopeDispose, Ot as init_reactivity_esm_bundler, X as onMounted, _t as watchEffect, gt as watch, it as renderSlot, j as createVNode, jt as isRef, q as onBeforeUnmount, tn as init_shared_esm_bundler, wt as computed } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { Gn as buildProps, Kn as definePropType, Si as isClient, Tn as useNamespace, dr as getScrollBarWidth, fr as addClass, gr as removeClass, hr as hasClass, kn as PatchFlags, mr as getStyle, pr as addUnit, vr as throwError } from "./src-BVC_ZvSs.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-draggable/index.mjs
var useDraggable = (targetRef, dragRef, draggable) => {
	let transform = {
		offsetX: 0,
		offsetY: 0
	};
	const onMousedown = (e) => {
		const downX = e.clientX;
		const downY = e.clientY;
		const { offsetX, offsetY } = transform;
		const targetRect = targetRef.value.getBoundingClientRect();
		const targetLeft = targetRect.left;
		const targetTop = targetRect.top;
		const targetWidth = targetRect.width;
		const targetHeight = targetRect.height;
		const clientWidth = document.documentElement.clientWidth;
		const clientHeight = document.documentElement.clientHeight;
		const minLeft = -targetLeft + offsetX;
		const minTop = -targetTop + offsetY;
		const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
		const maxTop = clientHeight - targetTop - targetHeight + offsetY;
		const onMousemove = (e2) => {
			const moveX = Math.min(Math.max(offsetX + e2.clientX - downX, minLeft), maxLeft);
			const moveY = Math.min(Math.max(offsetY + e2.clientY - downY, minTop), maxTop);
			transform = {
				offsetX: moveX,
				offsetY: moveY
			};
			if (targetRef.value) targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(moveY)})`;
		};
		const onMouseup = () => {
			document.removeEventListener("mousemove", onMousemove);
			document.removeEventListener("mouseup", onMouseup);
		};
		document.addEventListener("mousemove", onMousemove);
		document.addEventListener("mouseup", onMouseup);
	};
	const onDraggable = () => {
		if (dragRef.value && targetRef.value) dragRef.value.addEventListener("mousedown", onMousedown);
	};
	const offDraggable = () => {
		if (dragRef.value && targetRef.value) dragRef.value.removeEventListener("mousedown", onMousedown);
	};
	onMounted(() => {
		watchEffect(() => {
			if (draggable.value) onDraggable();
			else offDraggable();
		});
	});
	onBeforeUnmount(() => {
		offDraggable();
	});
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-lockscreen/index.mjs
init_reactivity_esm_bundler();
var useLockscreen = (trigger, options = {}) => {
	if (!isRef(trigger)) throwError("[useLockscreen]", "You need to pass a ref param to this function");
	const ns = options.ns || useNamespace("popup");
	const hiddenCls = computed(() => ns.bm("parent", "hidden"));
	if (!isClient || hasClass(document.body, hiddenCls.value)) return;
	let scrollBarWidth = 0;
	let withoutHiddenClass = false;
	let bodyWidth = "0";
	const cleanup = () => {
		setTimeout(() => {
			if (typeof document === "undefined") return;
			removeClass(document == null ? void 0 : document.body, hiddenCls.value);
			if (withoutHiddenClass && document) document.body.style.width = bodyWidth;
		}, 200);
	};
	watch(trigger, (val) => {
		if (!val) {
			cleanup();
			return;
		}
		withoutHiddenClass = !hasClass(document.body, hiddenCls.value);
		if (withoutHiddenClass) bodyWidth = document.body.style.width;
		scrollBarWidth = getScrollBarWidth(ns.namespace.value);
		const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
		const bodyOverflowY = getStyle(document.body, "overflowY");
		if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
		addClass(document.body, hiddenCls.value);
	});
	onScopeDispose(() => cleanup());
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-same-target/index.mjs
init_shared_esm_bundler();
var useSameTarget = (handleClick) => {
	if (!handleClick) return {
		onClick: NOOP,
		onMousedown: NOOP,
		onMouseup: NOOP
	};
	let mousedownTarget = false;
	let mouseupTarget = false;
	const onClick = (e) => {
		if (mousedownTarget && mouseupTarget) handleClick(e);
		mousedownTarget = mouseupTarget = false;
	};
	const onMousedown = (e) => {
		mousedownTarget = e.target === e.currentTarget;
	};
	const onMouseup = (e) => {
		mouseupTarget = e.target === e.currentTarget;
	};
	return {
		onClick,
		onMousedown,
		onMouseup
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/overlay/src/overlay.mjs
var overlayProps = buildProps({
	mask: {
		type: Boolean,
		default: true
	},
	customMaskEvent: {
		type: Boolean,
		default: false
	},
	overlayClass: { type: definePropType([
		String,
		Array,
		Object
	]) },
	zIndex: { type: definePropType([String, Number]) }
});
var overlayEmits = { click: (evt) => evt instanceof MouseEvent };
var BLOCK = "overlay";
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/overlay/index.mjs
var ElOverlay = defineComponent({
	name: "ElOverlay",
	props: overlayProps,
	emits: overlayEmits,
	setup(props, { slots, emit }) {
		const ns = useNamespace(BLOCK);
		const onMaskClick = (e) => {
			emit("click", e);
		};
		const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
		return () => {
			return props.mask ? createVNode("div", {
				class: [ns.b(), props.overlayClass],
				style: { zIndex: props.zIndex },
				onClick,
				onMousedown,
				onMouseup
			}, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, [
				"onClick",
				"onMouseup",
				"onMousedown"
			]) : h("div", {
				class: props.overlayClass,
				style: {
					zIndex: props.zIndex,
					position: "fixed",
					top: "0px",
					right: "0px",
					bottom: "0px",
					left: "0px"
				}
			}, [renderSlot(slots, "default")]);
		};
	}
});
//#endregion
export { useDraggable as i, useSameTarget as n, useLockscreen as r, ElOverlay as t };

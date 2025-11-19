import { J as onBeforeUnmount, Jt as NOOP, L as h, M as createVNode, Nt as onScopeDispose, Ot as init_reactivity_esm_bundler, P as defineComponent, Z as onMounted, _t as watch, at as renderSlot, jt as isRef, tn as init_shared_esm_bundler, vt as watchEffect, wt as computed } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { on as PatchFlags, pn as getScrollBarWidth } from "./src-BmrdBtCN.js";
import { B as removeClass, F as definePropType, H as throwError, I as addClass, L as addUnit, Mt as isClient, P as buildProps, R as getStyle, k as useNamespace, z as hasClass } from "./truncate-1c7Iwk7N.js";
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
export { useDraggable as i, useSameTarget as n, useLockscreen as r, ElOverlay as t };

import { C as computed, It as ref, J as onBeforeUnmount, P as defineComponent, T as createBlock, at as renderSlot, b as Teleport, bn as normalizeStyle, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, p as vShow, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Zi as isPresent } from "./users.store-qBZsmf9-.js";
var Draggable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Draggable",
	props: {
		type: {},
		data: { default: null },
		tag: { default: "div" },
		targetDataKey: { default: null },
		disabled: {
			type: Boolean,
			default: false
		},
		canDrop: {
			type: Boolean,
			default: false
		},
		stickyPosition: { default: null },
		dragThreshold: { default: 10 }
	},
	emits: [
		"drag",
		"dragstart",
		"dragend"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const isDragging = ref(false);
		const draggingElement = ref();
		const draggablePosition = ref([0, 0]);
		const animationFrameId = ref();
		const dragStartPosition = ref(null);
		const draggableStyle = computed(() => ({ transform: `translate(${draggablePosition.value[0]}px, ${draggablePosition.value[1]}px)` }));
		const onDragStart = (event) => {
			if (props.disabled || event.buttons !== 1) return;
			draggingElement.value = event.target;
			if (props.targetDataKey && draggingElement.value.dataset?.target !== props.targetDataKey) draggingElement.value = draggingElement.value.closest(`[data-target="${props.targetDataKey}"]`);
			if (props.targetDataKey && draggingElement.value?.dataset?.target !== props.targetDataKey) return;
			event.preventDefault();
			event.stopPropagation();
			isDragging.value = false;
			dragStartPosition.value = [event.pageX, event.pageY];
			draggablePosition.value = [event.pageX, event.pageY];
			window.addEventListener("mousemove", onDrag);
			window.addEventListener("mouseup", onDragEnd);
			const activeElement = document.activeElement;
			if (activeElement) activeElement.blur();
		};
		const onDrag = (event) => {
			event.preventDefault();
			event.stopPropagation();
			if (props.disabled) return;
			if (!isDragging.value && draggingElement.value) {
				if (dragStartPosition.value && props.dragThreshold > 0) {
					const dx = event.pageX - dragStartPosition.value[0];
					const dy = event.pageY - dragStartPosition.value[1];
					if (Math.sqrt(dx * dx + dy * dy) < props.dragThreshold) return;
				}
				isDragging.value = true;
				const data = props.targetDataKey ? draggingElement.value.dataset.value : props.data ?? "";
				emit("dragstart", draggingElement.value, data);
				document.body.style.cursor = "grabbing";
			}
			animationFrameId.value = window.requestAnimationFrame(() => {
				if (props.canDrop && props.stickyPosition) draggablePosition.value = props.stickyPosition;
				else draggablePosition.value = [event.pageX, event.pageY];
				emit("drag", draggablePosition.value);
			});
		};
		const onDragEnd = () => {
			if (props.disabled) return;
			document.body.style.cursor = "unset";
			window.removeEventListener("mousemove", onDrag);
			window.removeEventListener("mouseup", onDragEnd);
			if (isPresent(animationFrameId.value)) window.cancelAnimationFrame(animationFrameId.value);
			setTimeout(() => {
				if (isDragging.value && draggingElement.value) emit("dragend", draggingElement.value);
				isDragging.value = false;
				draggingElement.value = void 0;
				dragStartPosition.value = null;
			});
		};
		onBeforeUnmount(() => {
			if (isDragging.value && draggingElement.value) emit("dragend", draggingElement.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
				ref: "wrapper",
				class: normalizeClass({ [_ctx.$style.dragging]: isDragging.value }),
				"data-test-id": "draggable",
				onMousedown: onDragStart
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { isDragging: isDragging.value }), (openBlock(), createBlock(Teleport, { to: "body" }, [withDirectives(createBaseVNode("div", {
					ref: "draggable",
					class: normalizeClass(_ctx.$style.draggable),
					style: normalizeStyle(draggableStyle.value)
				}, [renderSlot(_ctx.$slots, "preview", {
					canDrop: __props.canDrop,
					el: draggingElement.value
				})], 6), [[vShow, isDragging.value]])]))]),
				_: 3
			}, 40, ["class"]);
		};
	}
});
var Draggable_vue_vue_type_style_index_0_lang_module_default = {
	dragging: "_dragging_8hfmf_125",
	draggable: "_draggable_8hfmf_130",
	"draggable-data-transfer": "_draggable-data-transfer_8hfmf_138"
};
var Draggable_default = /* @__PURE__ */ __plugin_vue_export_helper_default(Draggable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Draggable_vue_vue_type_style_index_0_lang_module_default }]]);
export { Draggable_default as t };

import { $ as openBlock, E as createElementBlock, F as guardReactiveProps, Ft as ref, N as defineComponent, S as computed, U as mergeProps, Vt as toRefs, W as nextTick, Wt as unref, X as onMounted, _ as Fragment, gt as watch, it as renderSlot, j as createVNode, vn as normalizeProps, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { $i as MenuAnchor_default, Qi as MenuRoot_default, Sa as createContext, Xi as MenuContent_default, Yi as MenuPortal_default, Zi as MenuItem_default, _a as useEmitAsProps, ga as useForwardExpose, ma as useForwardPropsEmits, ua as Primitive, va as useDirection } from "./src-D7XhL4SE.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/ContextMenu/ContextMenuRoot.js
var [injectContextMenuRootContext, provideContextMenuRootContext] = createContext("ContextMenuRoot");
var ContextMenuRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ContextMenuRoot",
	props: {
		pressOpenDelay: {
			type: Number,
			required: false,
			default: 700
		},
		dir: {
			type: String,
			required: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { dir: propDir, modal, pressOpenDelay } = toRefs(props);
		useForwardExpose();
		const dir = useDirection(propDir);
		const open = ref(false);
		provideContextMenuRootContext({
			open,
			onOpenChange: (value) => {
				open.value = value;
			},
			dir,
			modal,
			triggerElement: ref(),
			pressOpenDelay
		});
		watch(open, (value) => {
			emits("update:open", value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuRoot_default), {
				open: open.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => open.value = $event),
				dir: unref(dir),
				modal: unref(modal)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"open",
				"dir",
				"modal"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/ContextMenu/ContextMenuContent.js
var ContextMenuContent_default = /* @__PURE__ */ defineComponent({
	__name: "ContextMenuContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false,
			default: 0
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false,
			default: true
		},
		collisionBoundary: {
			type: null,
			required: false,
			default: () => []
		},
		collisionPadding: {
			type: [Number, Object],
			required: false,
			default: 0
		},
		sticky: {
			type: String,
			required: false,
			default: "partial"
		},
		hideWhenDetached: {
			type: Boolean,
			required: false,
			default: false
		},
		positionStrategy: {
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
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		useForwardExpose();
		const rootContext = injectContextMenuRootContext();
		const hasInteractedOutside = ref(false);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuContent_default), mergeProps(unref(forwarded), {
				side: "right",
				"side-offset": 2,
				align: "start",
				"update-position-strategy": "always",
				style: {
					"--reka-context-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
					"--reka-context-menu-content-available-width": "var(--reka-popper-available-width)",
					"--reka-context-menu-content-available-height": "var(--reka-popper-available-height)",
					"--reka-context-menu-trigger-width": "var(--reka-popper-anchor-width)",
					"--reka-context-menu-trigger-height": "var(--reka-popper-anchor-height)"
				},
				onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
					if (!event.defaultPrevented && hasInteractedOutside.value) event.preventDefault();
					hasInteractedOutside.value = false;
				}),
				onInteractOutside: _cache[1] || (_cache[1] = (event) => {
					if (event.detail.originalEvent.button === 2 && event.target === unref(rootContext).triggerElement.value) event.preventDefault();
					if (!event.defaultPrevented && !unref(rootContext).modal.value) hasInteractedOutside.value = true;
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/ContextMenu/ContextMenuItem.js
var ContextMenuItem_default = /* @__PURE__ */ defineComponent({
	__name: "ContextMenuItem",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
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
		const emitsAsProps = useEmitAsProps(__emit);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuItem_default), normalizeProps(guardReactiveProps({
				...props,
				...unref(emitsAsProps)
			})), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/ContextMenu/ContextMenuPortal.js
var ContextMenuPortal_default = /* @__PURE__ */ defineComponent({
	__name: "ContextMenuPortal",
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
			return openBlock(), createBlock(unref(MenuPortal_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/ContextMenu/utils.js
function isTouchOrPen(event) {
	return event.pointerType !== "mouse";
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/ContextMenu/ContextMenuTrigger.js
var ContextMenuTrigger_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ContextMenuTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const { disabled } = toRefs(__props);
		const { forwardRef, currentElement } = useForwardExpose();
		const rootContext = injectContextMenuRootContext();
		const point = ref({
			x: 0,
			y: 0
		});
		const virtualEl = computed(() => ({ getBoundingClientRect: () => ({
			width: 0,
			height: 0,
			left: point.value.x,
			right: point.value.x,
			top: point.value.y,
			bottom: point.value.y,
			...point.value
		}) }));
		const longPressTimer = ref(0);
		function clearLongPress() {
			window.clearTimeout(longPressTimer.value);
		}
		function handleOpen(event) {
			point.value = {
				x: event.clientX,
				y: event.clientY
			};
			rootContext.onOpenChange(true);
		}
		async function handleContextMenu(event) {
			if (!disabled.value) {
				await nextTick();
				if (!event.defaultPrevented) {
					clearLongPress();
					handleOpen(event);
					event.preventDefault();
				}
			}
		}
		async function handlePointerDown(event) {
			if (!disabled.value) {
				await nextTick();
				if (isTouchOrPen(event) && !event.defaultPrevented) {
					clearLongPress();
					longPressTimer.value = window.setTimeout(() => handleOpen(event), rootContext.pressOpenDelay.value);
				}
			}
		}
		async function handlePointerEvent(event) {
			if (!disabled.value) {
				await nextTick();
				if (isTouchOrPen(event) && !event.defaultPrevented) clearLongPress();
			}
		}
		onMounted(() => {
			if (currentElement.value) rootContext.triggerElement.value = currentElement.value;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(MenuAnchor_default), {
				as: "template",
				reference: virtualEl.value
			}, null, 8, ["reference"]), createVNode(unref(Primitive), mergeProps({
				ref: unref(forwardRef),
				as: _ctx.as,
				"as-child": _ctx.asChild,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				"data-disabled": unref(disabled) ? "" : void 0,
				style: {
					WebkitTouchCallout: "none",
					pointerEvents: "auto"
				}
			}, _ctx.$attrs, {
				onContextmenu: handleContextMenu,
				onPointerdown: handlePointerDown,
				onPointermove: handlePointerEvent,
				onPointercancel: handlePointerEvent,
				onPointerup: handlePointerEvent
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"data-state",
				"data-disabled"
			])], 64);
		};
	}
});
//#endregion
export { ContextMenuRoot_default as a, ContextMenuContent_default as i, ContextMenuPortal_default as n, ContextMenuItem_default as r, ContextMenuTrigger_default as t };

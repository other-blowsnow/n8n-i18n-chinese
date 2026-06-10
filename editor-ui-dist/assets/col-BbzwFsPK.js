import { $ as openBlock, N as defineComponent, R as inject, S as computed, Wt as unref, _n as normalizeClass, en as init_shared_esm_bundler, it as renderSlot, sn as isObject, st as resolveDynamicComponent, tt as provide, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { En as useNamespace, Er as isNumber, Kn as buildProps, _n as _export_sfc, kn as mutable, qn as definePropType, zn as withInstall } from "./src-DFOx8N22.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/row/src/constants.mjs
var rowContextKey = Symbol("rowContextKey");
var rowProps = buildProps({
	tag: {
		type: String,
		default: "div"
	},
	gutter: {
		type: Number,
		default: 0
	},
	justify: {
		type: String,
		values: [
			"start",
			"center",
			"end",
			"space-around",
			"space-between",
			"space-evenly"
		],
		default: "start"
	},
	align: {
		type: String,
		values: [
			"top",
			"middle",
			"bottom"
		]
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/row/index.mjs
var ElRow = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElRow" }),
	props: rowProps,
	setup(__props) {
		const props = __props;
		const ns = useNamespace("row");
		provide(rowContextKey, { gutter: computed(() => props.gutter) });
		const style = computed(() => {
			const styles = {};
			if (!props.gutter) return styles;
			styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
			return styles;
		});
		const rowKls = computed(() => [
			ns.b(),
			ns.is(`justify-${props.justify}`, props.justify !== "start"),
			ns.is(`align-${props.align}`, !!props.align)
		]);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
				class: normalizeClass(unref(rowKls)),
				style: normalizeStyle(unref(style))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["class", "style"]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]));
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/col/src/col.mjs
var colProps = buildProps({
	tag: {
		type: String,
		default: "div"
	},
	span: {
		type: Number,
		default: 24
	},
	offset: {
		type: Number,
		default: 0
	},
	pull: {
		type: Number,
		default: 0
	},
	push: {
		type: Number,
		default: 0
	},
	xs: {
		type: definePropType([Number, Object]),
		default: () => mutable({})
	},
	sm: {
		type: definePropType([Number, Object]),
		default: () => mutable({})
	},
	md: {
		type: definePropType([Number, Object]),
		default: () => mutable({})
	},
	lg: {
		type: definePropType([Number, Object]),
		default: () => mutable({})
	},
	xl: {
		type: definePropType([Number, Object]),
		default: () => mutable({})
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/col/src/col2.mjs
init_shared_esm_bundler();
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/col/index.mjs
var ElCol = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElCol" }),
	props: colProps,
	setup(__props) {
		const props = __props;
		const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });
		const ns = useNamespace("col");
		const style = computed(() => {
			const styles = {};
			if (gutter.value) styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
			return styles;
		});
		const colKls = computed(() => {
			const classes = [];
			[
				"span",
				"offset",
				"pull",
				"push"
			].forEach((prop) => {
				const size = props[prop];
				if (isNumber(size)) {
					if (prop === "span") classes.push(ns.b(`${props[prop]}`));
					else if (size > 0) classes.push(ns.b(`${prop}-${props[prop]}`));
				}
			});
			[
				"xs",
				"sm",
				"md",
				"lg",
				"xl"
			].forEach((size) => {
				if (isNumber(props[size])) classes.push(ns.b(`${size}-${props[size]}`));
				else if (isObject(props[size])) Object.entries(props[size]).forEach(([prop, sizeProp]) => {
					classes.push(prop !== "span" ? ns.b(`${size}-${prop}-${sizeProp}`) : ns.b(`${size}-${sizeProp}`));
				});
			});
			if (gutter.value) classes.push(ns.is("guttered"));
			return [ns.b(), classes];
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
				class: normalizeClass(unref(colKls)),
				style: normalizeStyle(unref(style))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["class", "style"]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]));
//#endregion
export { ElRow as n, ElCol as t };

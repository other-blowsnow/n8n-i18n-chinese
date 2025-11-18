import { C as computed, Gt as unref, P as defineComponent, T as createBlock, _n as normalizeClass, at as renderSlot, bt as withCtx, cn as isObject, ct as resolveDynamicComponent, et as openBlock, nt as provide, tn as init_shared_esm_bundler, yn as normalizeStyle, z as inject } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { an as mutable } from "./src-BmrdBtCN.js";
import { F as definePropType, P as buildProps, Y as isNumber, k as useNamespace } from "./truncate-1c7Iwk7N.js";
import { i as withInstall, n as _export_sfc } from "./icon-mgEZlgYz.js";
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
init_shared_esm_bundler();
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
export { ElRow as n, ElCol as t };

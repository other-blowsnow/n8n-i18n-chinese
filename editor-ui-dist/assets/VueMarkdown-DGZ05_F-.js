import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, It as ref, L as h, P as defineComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Wt as require_markdown_it } from "./src-Cq27d_Gp.js";
var import_markdown_it = /* @__PURE__ */ __toESM(require_markdown_it());
var VueMarkdown_default = defineComponent({
	name: "VueMarkdown",
	props: {
		source: {
			type: String,
			required: true
		},
		options: {
			type: Object,
			required: false
		},
		plugins: {
			type: Array,
			required: false
		}
	},
	setup(props) {
		const md = ref(new import_markdown_it.default(props.options ?? {}));
		for (const plugin of props.plugins ?? []) md.value.use(plugin);
		const content = computed(() => md.value.render(props.source));
		return () => h("div", { innerHTML: content.value });
	}
});
export { VueMarkdown_default as t };

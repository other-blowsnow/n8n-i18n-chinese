import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { I as h, It as ref, N as defineComponent, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { Vi as require_markdown_it } from "./src-BY3LHeey.js";
//#region ../../../node_modules/.pnpm/vue-markdown-render@2.2.1_vue@3.5.26_typescript@6.0.2_/node_modules/vue-markdown-render/dist/VueMarkdown.js
var import_markdown_it = /* @__PURE__ */ __toESM(require_markdown_it());
var VueMarkdown = defineComponent({
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
//#endregion
export { VueMarkdown as t };

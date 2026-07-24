import { It as ref } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { T as defineStore } from "./useRootStore-hyBq4XlJ.js";
//#region src/features/agents/agentReturnContext.store.ts
var useAgentReturnContextStore = defineStore("agentReturnContext", () => {
	const context = ref(null);
	function set(ctx) {
		context.value = ctx;
	}
	function clear() {
		context.value = null;
	}
	return {
		context,
		set,
		clear
	};
});
//#endregion
export { useAgentReturnContextStore as t };

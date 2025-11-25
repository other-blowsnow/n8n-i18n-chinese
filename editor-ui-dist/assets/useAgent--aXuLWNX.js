import { C as computed, Ut as toValue } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { n as useChatStore } from "./ChatAgentAvatar-CO02V0mM.js";
function useAgent(model) {
	const chatStore = useChatStore();
	return computed(() => {
		const modelValue = toValue(model);
		return modelValue ? chatStore.getAgent(modelValue) : void 0;
	});
}
export { useAgent as t };

import { Ft as ref } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as useSettingsStore } from "./settings.store-BOIB94F8.js";
//#region ../@n8n/composables/src/useDocumentTitle.ts
var DEFAULT_TITLE = "n8n";
var DEFAULT_TAGLINE = "Workflow Automation";
function useDocumentTitle$1(options = {}) {
	const { releaseChannel, windowRef } = options;
	const suffix = !releaseChannel || releaseChannel === "stable" ? DEFAULT_TITLE : `${DEFAULT_TITLE}[${releaseChannel.toUpperCase()}]`;
	const currentState = ref(void 0);
	const set = (title) => {
		const sections = [title || DEFAULT_TAGLINE, suffix];
		(windowRef?.value?.document ?? document).title = sections.join(" - ");
	};
	const reset = () => {
		currentState.value = void 0;
		set("");
	};
	const setDocumentTitle = (workflowName, status) => {
		currentState.value = status;
		let prefix = "⚠️";
		if (status === "EXECUTING") prefix = "🔄";
		else if (status === "IDLE") prefix = "▶️";
		else if (status === "AI_BUILDING") prefix = "[Building]";
		else if (status === "AI_DONE") prefix = "[Done]";
		set(`${prefix} ${workflowName}`);
	};
	const getDocumentState = () => currentState.value;
	return {
		set,
		reset,
		setDocumentTitle,
		getDocumentState
	};
}
//#endregion
//#region src/app/composables/useDocumentTitle.ts
function useDocumentTitle(windowRef) {
	const { releaseChannel } = useSettingsStore().settings;
	return useDocumentTitle$1({
		releaseChannel,
		windowRef
	});
}
//#endregion
export { useDocumentTitle as t };

import { R as inject, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { Kl as EditorEnabledFeaturesKey } from "./constants-BiYlbN9Z.js";
import { t as useSettingsStore } from "./settings.store-DROe9gro.js";
//#region src/app/composables/useEditorContext.ts
/**
* Per-editor host overrides for the current editor context.
*
* Editor hosts (e.g. the Instance AI artifact preview) scope their embedded
* editor by providing `EditorEnabledFeaturesKey` — the capabilities the host
* supersedes. AI features can only be restricted: an explicit `false` turns one
* off, while omitted (or `true`) features fall back to their store values.
* `readOnly` is a direct flag — `true` forces the canvas read-only. When no host
* provides the key, AI features fall back to their store values and the canvas
* is editable (`readOnly` is `false`).
* `executionSuccessToasts` / `executionErrorToasts` are direct flags too — each
* `true` (the default) shows that class of execution result toast; an explicit
* `false` from the host suppresses it.
*/
function useEditorContext() {
	const settings = useSettingsStore();
	const enabledFeatures = inject(EditorEnabledFeaturesKey, null);
	const isEnabledByHost = (feature) => enabledFeatures?.value?.[feature] !== false;
	const enabledInStore = (feature) => {
		switch (feature) {
			case "aiAssistant": return settings.isAiAssistantEnabled === true;
			case "aiBuilder": return settings.isAiBuilderEnabled === true;
			case "askAi": return settings.isAskAiEnabled === true;
		}
	};
	const featureEnabled = (feature) => computed(() => enabledInStore(feature) && isEnabledByHost(feature));
	return {
		aiAssistant: featureEnabled("aiAssistant"),
		aiBuilder: featureEnabled("aiBuilder"),
		askAi: featureEnabled("askAi"),
		readOnly: computed(() => enabledFeatures?.value?.readOnly === true),
		executionSuccessToasts: computed(() => enabledFeatures?.value?.executionSuccessToasts !== false),
		executionErrorToasts: computed(() => enabledFeatures?.value?.executionErrorToasts !== false)
	};
}
//#endregion
export { useEditorContext as t };

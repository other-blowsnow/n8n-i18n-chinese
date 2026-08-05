import { R as inject } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
//#region src/app/composables/useInstanceAiEditorCapability.ts
var InstanceAiEditorCapabilityKey = Symbol("InstanceAiEditorCapability");
var UNAVAILABLE = {};
function useInstanceAiEditorCapability() {
	return inject(InstanceAiEditorCapabilityKey, UNAVAILABLE);
}
//#endregion
export { useInstanceAiEditorCapability as n, InstanceAiEditorCapabilityKey as t };

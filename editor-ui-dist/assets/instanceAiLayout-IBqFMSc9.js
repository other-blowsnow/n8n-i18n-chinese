import { R as inject } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
//#region src/features/ai/instanceAi/instanceAiLayout.ts
var SidebarStateKey = Symbol("instanceAiSidebar");
function useSidebarState() {
	const state = inject(SidebarStateKey, null);
	if (!state) throw new Error("useSidebarState() requires an InstanceAiView ancestor.");
	return state;
}
//#endregion
export { useSidebarState as n, SidebarStateKey as t };

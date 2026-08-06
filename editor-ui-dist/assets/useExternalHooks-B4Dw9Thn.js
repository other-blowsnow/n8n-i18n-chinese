import { L as hasInjectionContext, R as inject } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
//#region ../@n8n/composables/src/useExternalHooks.ts
/**
* Injection key for the external-hooks runner. The application may provide it
* (e.g. a pop-out window with its own runner); `useExternalHooks` reads it when
* called inside an injection context and otherwise falls back to the registered
* singleton.
*/
var ExternalHooksKey = Symbol("ExternalHooks");
/**
* Null-object runner used when no concrete runner has been registered (e.g. in
* tests, or before bootstrap). External hooks are best-effort and must never
* throw or block the UI, so `run` resolves to a no-op.
*/
var noopExternalHooks = { async run() {} };
var registeredExternalHooks;
/**
* Register the application's external-hooks runner. Called once at bootstrap by
* `editor-ui` so package-side `useExternalHooks` can resolve it from any
* context, including outside of component setup (routers, stores, plain
* modules).
*/
function setExternalHooks(instance) {
	registeredExternalHooks = instance;
}
/**
* Returns the active external-hooks runner. Resolution order: a
* component-provided runner (via {@link ExternalHooksKey}), then the
* app-registered singleton (via {@link setExternalHooks}), then a no-op fallback.
*/
function useExternalHooks() {
	return (hasInjectionContext() ? inject(ExternalHooksKey, null) : null) ?? registeredExternalHooks ?? noopExternalHooks;
}
//#endregion
export { useExternalHooks as n, setExternalHooks as t };

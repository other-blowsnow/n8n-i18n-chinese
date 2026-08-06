import { L as hasInjectionContext, R as inject } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
//#region ../@n8n/composables/src/useTelemetry.ts
/**
* Injection key for the telemetry instance. The application provides it at
* bootstrap; components may override it (e.g. a pop-out window with its own
* instance). `useTelemetry` reads it when called inside an injection context.
*/
var TelemetryKey = Symbol("Telemetry");
/**
* Null-object telemetry used when no instance has been registered (e.g. in
* tests that never install the plugin). Telemetry is best-effort and must never
* throw or break the UI, so every method is a no-op. Any registered instance
* (via {@link setTelemetry} or {@link TelemetryKey}) takes precedence.
*
* A plain object literal (not a `Proxy`) so method identity is stable, spies
* attach, `'track' in noopTelemetry` holds, and there is no accidental `then`
* that would make `await useTelemetry()` hang.
*/
var noopTelemetry = {
	init() {},
	identify() {},
	track() {},
	page() {},
	reset() {},
	flushPageEvents() {},
	trackAskAI() {},
	trackAiTransform() {},
	trackNodeParametersValuesChange() {}
};
var registeredTelemetry;
/**
* Register the application's telemetry instance. Called once at bootstrap by
* the editor-ui telemetry plugin so package-side `useTelemetry` can return it
* from any context, including outside of component setup.
*/
function setTelemetry(instance) {
	registeredTelemetry = instance;
}
/**
* Returns the active telemetry instance. Resolution order: a component-provided
* instance (via {@link TelemetryKey}), then the app-registered singleton (via
* {@link setTelemetry}), then a no-op fallback.
*/
function useTelemetry() {
	const instance = (hasInjectionContext() ? inject(TelemetryKey, null) : null) ?? registeredTelemetry;
	if (instance) return instance;
	return noopTelemetry;
}
//#endregion
export { setTelemetry as n, useTelemetry as r, TelemetryKey as t };

//#region ../@n8n/composables/src/injectionKeys.ts
/**
* Injection key for an optional pop-out window. Consumers `provide` it from the
* host that owns the detached window; `useClipboard` reads it so a copy issued
* inside the pop-out targets that window's `navigator.clipboard`.
*/
var PopOutWindowKey = Symbol("PopOutWindow");
//#endregion
export { PopOutWindowKey as t };

import { an as isFunction, tn as init_shared_esm_bundler } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/vue/refs.mjs
init_shared_esm_bundler();
var composeRefs = (...refs) => {
	return (el) => {
		refs.forEach((ref) => {
			if (isFunction(ref)) ref(el);
			else ref.value = el;
		});
	};
};
//#endregion
export { composeRefs as t };

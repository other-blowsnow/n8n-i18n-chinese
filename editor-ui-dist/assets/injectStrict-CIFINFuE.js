import { R as inject } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
function injectStrict(key, fallback) {
	const resolved = inject(key, fallback);
	if (!resolved) throw new Error(`Could not resolve ${key.description}`);
	return resolved;
}
export { injectStrict as t };

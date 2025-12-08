import { t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { Ai as require__baseUniq, yi as require__baseIteratee } from "./constants-CLp3mUiA.js";
var require_uniqBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIteratee = require__baseIteratee(), baseUniq = require__baseUniq();
	function uniqBy(array, iteratee) {
		return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
	}
	module.exports = uniqBy;
}));
export { require_uniqBy as t };

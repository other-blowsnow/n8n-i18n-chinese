import { t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { bi as require__baseIteratee, ji as require__baseUniq } from "./constants-ksa9xIxI.js";
var require_uniqBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIteratee = require__baseIteratee(), baseUniq = require__baseUniq();
	function uniqBy(array, iteratee) {
		return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
	}
	module.exports = uniqBy;
}));
export { require_uniqBy as t };

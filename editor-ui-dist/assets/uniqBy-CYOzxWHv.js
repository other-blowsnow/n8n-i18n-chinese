import { t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { Bi as require__baseIteratee, Xi as require__baseUniq } from "./constants-DkMVfvP4.js";
var require_uniqBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIteratee = require__baseIteratee(), baseUniq = require__baseUniq();
	function uniqBy(array, iteratee) {
		return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
	}
	module.exports = uniqBy;
}));
export { require_uniqBy as t };

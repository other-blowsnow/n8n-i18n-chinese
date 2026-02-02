import { t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { _ as require__arrayMap } from "./src-Cq27d_Gp.js";
import { Di as require__getAllKeysIn, pi as require__basePickBy, wi as require__baseIteratee } from "./constants-Cyrg9Nbl.js";
var require_pickBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap(), baseIteratee = require__baseIteratee(), basePickBy = require__basePickBy(), getAllKeysIn = require__getAllKeysIn();
	function pickBy(object, predicate) {
		if (object == null) return {};
		var props = arrayMap(getAllKeysIn(object), function(prop) {
			return [prop];
		});
		predicate = baseIteratee(predicate);
		return basePickBy(object, props, function(value, path) {
			return predicate(value, path[0]);
		});
	}
	module.exports = pickBy;
}));
export { require_pickBy as t };

import { t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { y as require__arrayMap } from "./src-Vlm7Mxf-.js";
import { Pi as require__getAllKeysIn, bi as require__basePickBy, ji as require__baseIteratee } from "./constants-RiJkz47J.js";
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

import { t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { c as require__arrayMap } from "./truncate-BlCeUq7F.js";
import { Ci as require__getAllKeysIn, bi as require__baseIteratee, ui as require__basePickBy } from "./constants-ksa9xIxI.js";
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

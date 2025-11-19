import { t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { m as require_isArray } from "./_MapCache-pT3vKw8Z.js";
import { It as require__baseOrderBy } from "./useTelemetry-C2EhNQhN.js";
var require_orderBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseOrderBy = require__baseOrderBy(), isArray = require_isArray();
	function orderBy(collection, iteratees, orders, guard) {
		if (collection == null) return [];
		if (!isArray(iteratees)) iteratees = iteratees == null ? [] : [iteratees];
		orders = guard ? void 0 : orders;
		if (!isArray(orders)) orders = orders == null ? [] : [orders];
		return baseOrderBy(collection, iteratees, orders);
	}
	module.exports = orderBy;
}));
export { require_orderBy as t };

import { t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { At as require__baseFlatten } from "./src-CYAJL8H-.js";
import { n as require__isIterateeCall, r as require__baseRest } from "./merge-GaShvbN0.js";
import { t as require__baseOrderBy } from "./_baseOrderBy-12XKZMPb.js";
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/sortBy.js
var require_sortBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFlatten = require__baseFlatten(), baseOrderBy = require__baseOrderBy(), baseRest = require__baseRest(), isIterateeCall = require__isIterateeCall();
	module.exports = baseRest(function(collection, iteratees) {
		if (collection == null) return [];
		var length = iteratees.length;
		if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) iteratees = [];
		else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) iteratees = [iteratees[0]];
		return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	});
}));
//#endregion
export { require_sortBy as t };

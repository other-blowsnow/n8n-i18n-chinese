import { t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { o as require__arrayMap } from "./get-Den8eczo.js";
import { Oa as require__basePickBy, Ua as require__baseIteratee, qa as require__getAllKeysIn } from "./constants-Co4JQRdg.js";
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/pickBy.js
var require_pickBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap(), baseIteratee = require__baseIteratee(), basePickBy = require__basePickBy(), getAllKeysIn = require__getAllKeysIn();
	/**
	* Creates an object composed of the `object` properties `predicate` returns
	* truthy for. The predicate is invoked with two arguments: (value, key).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Object
	* @param {Object} object The source object.
	* @param {Function} [predicate=_.identity] The function invoked per property.
	* @returns {Object} Returns the new object.
	* @example
	*
	* var object = { 'a': 1, 'b': '2', 'c': 3 };
	*
	* _.pickBy(object, _.isNumber);
	* // => { 'a': 1, 'c': 3 }
	*/
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
//#endregion
export { require_pickBy as t };

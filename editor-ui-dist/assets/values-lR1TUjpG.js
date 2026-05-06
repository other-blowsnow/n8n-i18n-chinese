import { t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { o as require__arrayMap } from "./get-Den8eczo.js";
import { $s as require_keys } from "./constants-c-L9DE1I.js";
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseRandom.js
var require__baseRandom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeFloor = Math.floor, nativeRandom = Math.random;
	/**
	* The base implementation of `_.random` without support for returning
	* floating-point numbers.
	*
	* @private
	* @param {number} lower The lower bound.
	* @param {number} upper The upper bound.
	* @returns {number} Returns the random number.
	*/
	function baseRandom(lower, upper) {
		return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	}
	module.exports = baseRandom;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_shuffleSelf.js
var require__shuffleSelf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseRandom = require__baseRandom();
	/**
	* A specialized version of `_.shuffle` which mutates and sets the size of `array`.
	*
	* @private
	* @param {Array} array The array to shuffle.
	* @param {number} [size=array.length] The size of `array`.
	* @returns {Array} Returns `array`.
	*/
	function shuffleSelf(array, size) {
		var index = -1, length = array.length, lastIndex = length - 1;
		size = size === void 0 ? length : size;
		while (++index < size) {
			var rand = baseRandom(index, lastIndex), value = array[rand];
			array[rand] = array[index];
			array[index] = value;
		}
		array.length = size;
		return array;
	}
	module.exports = shuffleSelf;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseValues.js
var require__baseValues = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	/**
	* The base implementation of `_.values` and `_.valuesIn` which creates an
	* array of `object` property values corresponding to the property names
	* of `props`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array} props The property names to get values for.
	* @returns {Object} Returns the array of property values.
	*/
	function baseValues(object, props) {
		return arrayMap(props, function(key) {
			return object[key];
		});
	}
	module.exports = baseValues;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/values.js
var require_values = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseValues = require__baseValues(), keys = require_keys();
	/**
	* Creates an array of the own enumerable string keyed property values of `object`.
	*
	* **Note:** Non-object values are coerced to objects.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property values.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.values(new Foo);
	* // => [1, 2] (iteration order is not guaranteed)
	*
	* _.values('hi');
	* // => ['h', 'i']
	*/
	function values(object) {
		return object == null ? [] : baseValues(object, keys(object));
	}
	module.exports = values;
}));
//#endregion
export { require__shuffleSelf as n, require_values as t };

import { t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { _ as require__arrayMap } from "./src-Cq27d_Gp.js";
import { ko as require_keys } from "./constants-Cyrg9Nbl.js";
var require__baseRandom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeFloor = Math.floor, nativeRandom = Math.random;
	function baseRandom$1(lower, upper) {
		return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	}
	module.exports = baseRandom$1;
}));
var require__shuffleSelf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseRandom = require__baseRandom();
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
var require__baseValues = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	function baseValues$1(object, props) {
		return arrayMap(props, function(key) {
			return object[key];
		});
	}
	module.exports = baseValues$1;
}));
var require_values = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseValues = require__baseValues(), keys = require_keys();
	function values(object) {
		return object == null ? [] : baseValues(object, keys(object));
	}
	module.exports = values;
}));
export { require__shuffleSelf as n, require_values as t };

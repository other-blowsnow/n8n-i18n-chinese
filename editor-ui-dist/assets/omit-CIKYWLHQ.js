import { t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { i as require__castPath, o as require__arrayMap } from "./get-Ult7GPGC.js";
import { C as require__baseUnset } from "./ParameterInputList-BrjDkQli.js";
import { Cl as require__getAllKeysIn, Sl as require__baseClone, nl as require__flatRest } from "./constants-BzyjfRY2.js";
import { c as require__copyObject, u as require_isPlainObject } from "./merge-B4bcFBd8.js";
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_customOmitClone.js
var require__customOmitClone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isPlainObject = require_isPlainObject();
	/**
	* Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
	* objects.
	*
	* @private
	* @param {*} value The value to inspect.
	* @param {string} key The key of the property to inspect.
	* @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
	*/
	function customOmitClone(value) {
		return isPlainObject(value) ? void 0 : value;
	}
	module.exports = customOmitClone;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/omit.js
var require_omit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap(), baseClone = require__baseClone(), baseUnset = require__baseUnset(), castPath = require__castPath(), copyObject = require__copyObject(), customOmitClone = require__customOmitClone(), flatRest = require__flatRest(), getAllKeysIn = require__getAllKeysIn();
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
	module.exports = flatRest(function(object, paths) {
		var result = {};
		if (object == null) return result;
		var isDeep = false;
		paths = arrayMap(paths, function(path) {
			path = castPath(path, object);
			isDeep || (isDeep = path.length > 1);
			return path;
		});
		copyObject(object, getAllKeysIn(object), result);
		if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
		var length = paths.length;
		while (length--) baseUnset(result, paths[length]);
		return result;
	});
}));
//#endregion
export { require_omit as t };

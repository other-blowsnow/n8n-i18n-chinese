import { Kr as _arrayPush_default, mi as isArray_default, ri as isArguments_default, vi as _Symbol_default } from "./src-Cq27d_Gp.js";
var spreadableSymbol = _Symbol_default ? _Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
	return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable_default = isFlattenable;
function baseFlatten(array, depth, predicate, isStrict, result) {
	var index = -1, length = array.length;
	predicate || (predicate = _isFlattenable_default);
	result || (result = []);
	while (++index < length) {
		var value = array[index];
		if (depth > 0 && predicate(value)) if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
		else _arrayPush_default(result, value);
		else if (!isStrict) result[result.length] = value;
	}
	return result;
}
var _baseFlatten_default = baseFlatten;
function flatten(array) {
	return (array == null ? 0 : array.length) ? _baseFlatten_default(array, 1) : [];
}
var flatten_default = flatten;
export { _baseFlatten_default as n, flatten_default as t };

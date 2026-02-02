import { Qr as _arrayLikeKeys_default, Zr as _overArg_default, ai as isArrayLike_default, ci as _baseAssignValue_default, ii as _isPrototype_default, oi as _assignValue_default, pi as isObject_default, yi as _root_default, zr as _Uint8Array_default } from "./src-Cq27d_Gp.js";
var objectCreate = Object.create;
var _baseCreate_default = function() {
	function object() {}
	return function(proto) {
		if (!isObject_default(proto)) return {};
		if (objectCreate) return objectCreate(proto);
		object.prototype = proto;
		var result = new object();
		object.prototype = void 0;
		return result;
	};
}();
function copyArray(source, array) {
	var index = -1, length = source.length;
	array || (array = Array(length));
	while (++index < length) array[index] = source[index];
	return array;
}
var _copyArray_default = copyArray;
function copyObject(source, props, object, customizer) {
	var isNew = !object;
	object || (object = {});
	var index = -1, length = props.length;
	while (++index < length) {
		var key = props[index];
		var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
		if (newValue === void 0) newValue = source[key];
		if (isNew) _baseAssignValue_default(object, key, newValue);
		else _assignValue_default(object, key, newValue);
	}
	return object;
}
var _copyObject_default = copyObject;
function nativeKeysIn(object) {
	var result = [];
	if (object != null) for (var key in Object(object)) result.push(key);
	return result;
}
var _nativeKeysIn_default = nativeKeysIn;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function baseKeysIn(object) {
	if (!isObject_default(object)) return _nativeKeysIn_default(object);
	var isProto = _isPrototype_default(object), result = [];
	for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
	return result;
}
var _baseKeysIn_default = baseKeysIn;
function keysIn(object) {
	return isArrayLike_default(object) ? _arrayLikeKeys_default(object, true) : _baseKeysIn_default(object);
}
var keysIn_default = keysIn;
var _getPrototype_default = _overArg_default(Object.getPrototypeOf, Object);
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var Buffer = freeModule && freeModule.exports === freeExports ? _root_default.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
	if (isDeep) return buffer.slice();
	var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	buffer.copy(result);
	return result;
}
var _cloneBuffer_default = cloneBuffer;
function cloneArrayBuffer(arrayBuffer) {
	var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	new _Uint8Array_default(result).set(new _Uint8Array_default(arrayBuffer));
	return result;
}
var _cloneArrayBuffer_default = cloneArrayBuffer;
function cloneTypedArray(typedArray, isDeep) {
	var buffer = isDeep ? _cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
	return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray_default = cloneTypedArray;
function initCloneObject(object) {
	return typeof object.constructor == "function" && !_isPrototype_default(object) ? _baseCreate_default(_getPrototype_default(object)) : {};
}
var _initCloneObject_default = initCloneObject;
export { _getPrototype_default as a, _copyArray_default as c, _cloneBuffer_default as i, _cloneTypedArray_default as n, keysIn_default as o, _cloneArrayBuffer_default as r, _copyObject_default as s, _initCloneObject_default as t };

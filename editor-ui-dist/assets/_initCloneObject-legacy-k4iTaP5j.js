;
(function () {
  System.register(["./src-legacy-Cj9TtJhY.js", "./truncate-legacy-B7Y_hCM_.js"], function (_export, _context) {
    "use strict";

    var _arrayLikeKeys_default, _overArg_default, _isPrototype_default, isArrayLike_default, _Uint8Array_default, _root_default, _assignValue_default, isObject_default, _baseAssignValue_default, objectCreate, baseCreate, _baseCreate_default, _copyArray_default, _copyObject_default, _nativeKeysIn_default, hasOwnProperty, _baseKeysIn_default, keysIn_default, getPrototype, _getPrototype_default, freeExports, freeModule, Buffer, allocUnsafe, _cloneBuffer_default, _cloneArrayBuffer_default, _cloneTypedArray_default, _initCloneObject_default;
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
    /**
    * Copies the values of `source` to `array`.
    *
    * @private
    * @param {Array} source The array to copy values from.
    * @param {Array} [array=[]] The array to copy values to.
    * @returns {Array} Returns `array`.
    */
    function copyArray(source, array) {
      var index = -1,
        length = source.length;
      array || (array = Array(length));
      while (++index < length) array[index] = source[index];
      return array;
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyObject.js
    /**
    * Copies properties of `source` to `object`.
    *
    * @private
    * @param {Object} source The object to copy properties from.
    * @param {Array} props The property identifiers to copy.
    * @param {Object} [object={}] The object to copy properties to.
    * @param {Function} [customizer] The function to customize copied values.
    * @returns {Object} Returns `object`.
    */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1,
        length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) newValue = source[key];
        if (isNew) _baseAssignValue_default(object, key, newValue);else _assignValue_default(object, key, newValue);
      }
      return object;
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeysIn.js
    /**
    * This function is like
    * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
    * except that it includes inherited enumerable properties.
    *
    * @private
    * @param {Object} object The object to query.
    * @returns {Array} Returns the array of property names.
    */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) for (var key in Object(object)) result.push(key);
      return result;
    }
    /**
    * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
    *
    * @private
    * @param {Object} object The object to query.
    * @returns {Array} Returns the array of property names.
    */
    function baseKeysIn(object) {
      if (!isObject_default(object)) return _nativeKeysIn_default(object);
      var isProto = _isPrototype_default(object),
        result = [];
      for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
      return result;
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keysIn.js
    /**
    * Creates an array of the own and inherited enumerable property names of `object`.
    *
    * **Note:** Non-object values are coerced to objects.
    *
    * @static
    * @memberOf _
    * @since 3.0.0
    * @category Object
    * @param {Object} object The object to query.
    * @returns {Array} Returns the array of property names.
    * @example
    *
    * function Foo() {
    *   this.a = 1;
    *   this.b = 2;
    * }
    *
    * Foo.prototype.c = 3;
    *
    * _.keysIn(new Foo);
    * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
    */
    function keysIn(object) {
      return isArrayLike_default(object) ? _arrayLikeKeys_default(object, true) : _baseKeysIn_default(object);
    }
    /**
    * Creates a clone of  `buffer`.
    *
    * @private
    * @param {Buffer} buffer The buffer to clone.
    * @param {boolean} [isDeep] Specify a deep clone.
    * @returns {Buffer} Returns the cloned buffer.
    */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) return buffer.slice();
      var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneArrayBuffer.js
    /**
    * Creates a clone of `arrayBuffer`.
    *
    * @private
    * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
    * @returns {ArrayBuffer} Returns the cloned array buffer.
    */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new _Uint8Array_default(result).set(new _Uint8Array_default(arrayBuffer));
      return result;
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneTypedArray.js
    /**
    * Creates a clone of `typedArray`.
    *
    * @private
    * @param {Object} typedArray The typed array to clone.
    * @param {boolean} [isDeep] Specify a deep clone.
    * @returns {Object} Returns the cloned typed array.
    */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? _cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneObject.js
    /**
    * Initializes an object clone.
    *
    * @private
    * @param {Object} object The object to clone.
    * @returns {Object} Returns the initialized clone.
    */
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !_isPrototype_default(object) ? _baseCreate_default(_getPrototype_default(object)) : {};
    }
    return {
      setters: [function (_srcLegacy007Js) {
        _arrayLikeKeys_default = _srcLegacy007Js.Dn;
        _overArg_default = _srcLegacy007Js.En;
        _isPrototype_default = _srcLegacy007Js.Nn;
        isArrayLike_default = _srcLegacy007Js.Pn;
        _Uint8Array_default = _srcLegacy007Js.hn;
      }, function (_truncateLegacy00hJs) {
        _root_default = _truncateLegacy00hJs.Ct;
        _assignValue_default = _truncateLegacy00hJs.ct;
        isObject_default = _truncateLegacy00hJs.gt;
        _baseAssignValue_default = _truncateLegacy00hJs.ut;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseCreate.js
        /** Built-in value references. */
        objectCreate = Object.create;
        /**
        * The base implementation of `_.create` without support for assigning
        * properties to the created object.
        *
        * @private
        * @param {Object} proto The object to inherit from.
        * @returns {Object} Returns the new object.
        */
        baseCreate = function () {
          function object() {}
          return function (proto) {
            if (!isObject_default(proto)) return {};
            if (objectCreate) return objectCreate(proto);
            object.prototype = proto;
            var result = new object();
            object.prototype = void 0;
            return result;
          };
        }();
        _baseCreate_default = baseCreate;
        _export("c", _copyArray_default = copyArray);
        _export("s", _copyObject_default = copyObject);
        _nativeKeysIn_default = nativeKeysIn; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeysIn.js
        /** Used to check objects for own properties. */
        hasOwnProperty = Object.prototype.hasOwnProperty;
        _baseKeysIn_default = baseKeysIn;
        _export("o", keysIn_default = keysIn); //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getPrototype.js
        /** Built-in value references. */
        getPrototype = _overArg_default(Object.getPrototypeOf, Object);
        _export("a", _getPrototype_default = getPrototype); //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneBuffer.js
        /** Detect free variable `exports`. */
        freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */
        freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        /** Built-in value references. */
        Buffer = freeModule && freeModule.exports === freeExports ? _root_default.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
        _export("i", _cloneBuffer_default = cloneBuffer);
        _export("r", _cloneArrayBuffer_default = cloneArrayBuffer);
        _export("n", _cloneTypedArray_default = cloneTypedArray);
        _export("t", _initCloneObject_default = initCloneObject); //#endregion
      }
    };
  });
})();
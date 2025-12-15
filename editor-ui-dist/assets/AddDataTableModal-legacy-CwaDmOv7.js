;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BVuLoslx.js", "./src-legacy-DKZ8j8GV.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-pg0njr0t.js", "./_initCloneObject-legacy-FzCgMJGL.js", "./icon-legacy-Do9qTDxB.js", "./overlay-legacy-DU1OC2yK.js", "./empty-legacy-ZG0-xpne.js", "./radio-legacy-DxG3AK0i.js", "./dialog-legacy-C-nCPd3I.js", "./useTelemetry-legacy-BDcNi2-V.js", "./useToast-legacy-YkrI3Kyu.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-BOwjEkaj.js", "./merge-legacy-C4vVqZRQ.js", "./_baseOrderBy-legacy-B3XavLhF.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-Ds5JlDtt.js", "./useExternalHooks-legacy-CQQO1RoW.js", "./useStyles-legacy-E8NPEyeD.js", "./dataTable.store-legacy-BQqAxAHn.js", "./Modal-legacy-ChmxznF9.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, NOOP, createVNode, defineComponent, createBlock, toRef, mergeProps, onMounted, Fragment, watch, isFunction, renderSlot, normalizeStyle, withCtx, resolveDynamicComponent, openBlock, withModifiers, renderList, createTextVNode, createSlots, withKeys, isString, isArray, provide, TransitionGroup, init_shared_esm_bundler, isPlainObject, normalizeClass, createBaseVNode, inject, shallowRef, useI18n, _baseUnary_default, N8nSelect_default, N8nButton_default, N8nOption_default, keys_default, N8nText_default, N8nIcon_default, N8nInputLabel_default, N8nCheckbox_default, useFormDisabled, _getAllKeys_default, stubArray_default, isNil_default, isEqual_default, _getTag_default, isBuffer_default, _nodeUtil_default, mutable, _baseGetAllKeys_default, _arrayPush_default, _Stack_default, _getSymbols_default, N8nInput_default, __plugin_vue_export_helper_default, useLocale, definePropType, throwError, buildProps, _Symbol_default, entriesOf, debugWarn, isArray_default, useRouter, isObjectLike_default, _assignValue_default, isObject_default, useVModel, useNamespace, useRoute, _getPrototype_default, _copyArray_default, _cloneBuffer_default, _cloneTypedArray_default, keysIn_default, _cloneArrayBuffer_default, _copyObject_default, _initCloneObject_default, document_default, warning_filled_default, zoom_in_default, close_default, delete_default, circle_close_default, withInstall, _export_sfc, ElIcon, check_default, circle_check_default, ElRadioGroup, ElRadio, useUIStore, useTelemetry, useToast, DATA_TABLE_SYSTEM_COLUMNS, PROJECT_DATA_TABLES, DATA_TABLE_DETAILS, dataTableColumnNameSchema, useDataTableStore, Modal_default, __vite_style__, _arrayEach_default, _baseAssign_default, _baseAssignIn_default, _copySymbols_default, getSymbolsIn, _getSymbolsIn_default, _copySymbolsIn_default, _getAllKeysIn_default, hasOwnProperty, _initCloneArray_default, _cloneDataView_default, reFlags, _cloneRegExp_default, symbolProto, symbolValueOf, _cloneSymbol_default, boolTag$1, dateTag$1, mapTag$2, numberTag$1, regexpTag$1, setTag$2, stringTag$1, symbolTag$1, arrayBufferTag$1, dataViewTag$1, float32Tag$1, float64Tag$1, int8Tag$1, int16Tag$1, int32Tag$1, uint8Tag$1, uint8ClampedTag$1, uint16Tag$1, uint32Tag$1, _initCloneByTag_default, mapTag$1, _baseIsMap_default, nodeIsMap, isMap, isMap_default, setTag$1, _baseIsSet_default, nodeIsSet, isSet, isSet_default, CLONE_DEEP_FLAG$1, CLONE_FLAT_FLAG, CLONE_SYMBOLS_FLAG$1, argsTag, arrayTag, boolTag, dateTag, errorTag, funcTag, genTag, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, symbolTag, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, cloneableTags, _baseClone_default, CLONE_DEEP_FLAG, CLONE_SYMBOLS_FLAG, cloneDeep_default, progressProps, _hoisted_1$3, _hoisted_2$2, _hoisted_3$1, _hoisted_4$1, _hoisted_5$1, Progress, ElProgress, uploadContextKey, SCOPE$1, UploadAjaxError, ajaxUpload, uploadListTypes, fileId, genFileId, uploadBaseProps, uploadProps, uploadListProps, uploadListEmits, _hoisted_1$2, _hoisted_2$1, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, UploadList, uploadDraggerProps, uploadDraggerEmits, _hoisted_1$1, COMPONENT_NAME, UploadDragger, uploadContentProps, _hoisted_1, _hoisted_2, UploadContent, SCOPE, revokeFileObjectURL, useHandlers, Upload, ElUpload, AddDataTableModal_vue_vue_type_script_setup_true_lang_default, header, content, selectionContent, radioGroup, uploadSection, uploadingMessage, importContent, successNotice, columnHeaders, columnHeaderLabel, columnsContainer, columnItem, columnInputWrapper, columnTypeWrapper, inputError, columnErrorMessage, footer, fileSelectedContainer, uploadDemo, uploadIcon, fileName, AddDataTableModal_vue_vue_type_style_index_0_lang_module_default, cssModules, AddDataTableModal_default;
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayEach.js
    /**
    * A specialized version of `_.forEach` for arrays without support for
    * iteratee shorthands.
    *
    * @private
    * @param {Array} [array] The array to iterate over.
    * @param {Function} iteratee The function invoked per iteration.
    * @returns {Array} Returns `array`.
    */
    function arrayEach(array, iteratee) {
      var index = -1,
        length = array == null ? 0 : array.length;
      while (++index < length) if (iteratee(array[index], index, array) === false) break;
      return array;
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssign.js
    /**
    * The base implementation of `_.assign` without support for multiple sources
    * or `customizer` functions.
    *
    * @private
    * @param {Object} object The destination object.
    * @param {Object} source The source object.
    * @returns {Object} Returns `object`.
    */
    function baseAssign(object, source) {
      return object && _copyObject_default(source, keys_default(source), object);
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssignIn.js
    /**
    * The base implementation of `_.assignIn` without support for multiple sources
    * or `customizer` functions.
    *
    * @private
    * @param {Object} object The destination object.
    * @param {Object} source The source object.
    * @returns {Object} Returns `object`.
    */
    function baseAssignIn(object, source) {
      return object && _copyObject_default(source, keysIn_default(source), object);
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copySymbols.js
    /**
    * Copies own symbols of `source` to `object`.
    *
    * @private
    * @param {Object} source The object to copy symbols from.
    * @param {Object} [object={}] The object to copy symbols to.
    * @returns {Object} Returns `object`.
    */
    function copySymbols(source, object) {
      return _copyObject_default(source, _getSymbols_default(source), object);
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copySymbolsIn.js
    /**
    * Copies own and inherited symbols of `source` to `object`.
    *
    * @private
    * @param {Object} source The object to copy symbols from.
    * @param {Object} [object={}] The object to copy symbols to.
    * @returns {Object} Returns `object`.
    */
    function copySymbolsIn(source, object) {
      return _copyObject_default(source, _getSymbolsIn_default(source), object);
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getAllKeysIn.js
    /**
    * Creates an array of own and inherited enumerable property names and
    * symbols of `object`.
    *
    * @private
    * @param {Object} object The object to query.
    * @returns {Array} Returns the array of property names and symbols.
    */
    function getAllKeysIn(object) {
      return _baseGetAllKeys_default(object, keysIn_default, _getSymbolsIn_default);
    }
    /**
    * Initializes an array clone.
    *
    * @private
    * @param {Array} array The array to clone.
    * @returns {Array} Returns the initialized clone.
    */
    function initCloneArray(array) {
      var length = array.length,
        result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    //#endregion
    //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneDataView.js
    /**
    * Creates a clone of `dataView`.
    *
    * @private
    * @param {Object} dataView The data view to clone.
    * @param {boolean} [isDeep] Specify a deep clone.
    * @returns {Object} Returns the cloned data view.
    */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? _cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    /**
    * Creates a clone of `regexp`.
    *
    * @private
    * @param {Object} regexp The regexp to clone.
    * @returns {Object} Returns the cloned regexp.
    */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    /**
    * Creates a clone of the `symbol` object.
    *
    * @private
    * @param {Object} symbol The symbol object to clone.
    * @returns {Object} Returns the cloned symbol object.
    */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    /**
    * Initializes an object clone based on its `toStringTag`.
    *
    * **Note:** This function only supports cloning values with tags of
    * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
    *
    * @private
    * @param {Object} object The object to clone.
    * @param {string} tag The `toStringTag` of the object to clone.
    * @param {boolean} [isDeep] Specify a deep clone.
    * @returns {Object} Returns the initialized clone.
    */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag$1:
          return _cloneArrayBuffer_default(object);
        case boolTag$1:
        case dateTag$1:
          return new Ctor(+object);
        case dataViewTag$1:
          return _cloneDataView_default(object, isDeep);
        case float32Tag$1:
        case float64Tag$1:
        case int8Tag$1:
        case int16Tag$1:
        case int32Tag$1:
        case uint8Tag$1:
        case uint8ClampedTag$1:
        case uint16Tag$1:
        case uint32Tag$1:
          return _cloneTypedArray_default(object, isDeep);
        case mapTag$2:
          return new Ctor();
        case numberTag$1:
        case stringTag$1:
          return new Ctor(object);
        case regexpTag$1:
          return _cloneRegExp_default(object);
        case setTag$2:
          return new Ctor();
        case symbolTag$1:
          return _cloneSymbol_default(object);
      }
    }
    /**
    * The base implementation of `_.isMap` without Node.js optimizations.
    *
    * @private
    * @param {*} value The value to check.
    * @returns {boolean} Returns `true` if `value` is a map, else `false`.
    */
    function baseIsMap(value) {
      return isObjectLike_default(value) && _getTag_default(value) == mapTag$1;
    }
    /**
    * The base implementation of `_.isSet` without Node.js optimizations.
    *
    * @private
    * @param {*} value The value to check.
    * @returns {boolean} Returns `true` if `value` is a set, else `false`.
    */
    function baseIsSet(value) {
      return isObjectLike_default(value) && _getTag_default(value) == setTag$1;
    }
    /**
    * The base implementation of `_.clone` and `_.cloneDeep` which tracks
    * traversed objects.
    *
    * @private
    * @param {*} value The value to clone.
    * @param {boolean} bitmask The bitmask flags.
    *  1 - Deep clone
    *  2 - Flatten inherited properties
    *  4 - Clone symbols
    * @param {Function} [customizer] The function to customize cloning.
    * @param {string} [key] The key of `value`.
    * @param {Object} [object] The parent object of `value`.
    * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
    * @returns {*} Returns the cloned value.
    */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
        isDeep = bitmask & CLONE_DEEP_FLAG$1,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
      if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
      if (result !== void 0) return result;
      if (!isObject_default(value)) return value;
      var isArr = isArray_default(value);
      if (isArr) {
        result = _initCloneArray_default(value);
        if (!isDeep) return _copyArray_default(value, result);
      } else {
        var tag = _getTag_default(value),
          isFunc = tag == funcTag || tag == genTag;
        if (isBuffer_default(value)) return _cloneBuffer_default(value, isDeep);
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : _initCloneObject_default(value);
          if (!isDeep) return isFlat ? _copySymbolsIn_default(value, _baseAssignIn_default(result, value)) : _copySymbols_default(value, _baseAssign_default(result, value));
        } else {
          if (!cloneableTags[tag]) return object ? value : {};
          result = _initCloneByTag_default(value, tag, isDeep);
        }
      }
      stack || (stack = new _Stack_default());
      var stacked = stack.get(value);
      if (stacked) return stacked;
      stack.set(value, result);
      if (isSet_default(value)) value.forEach(function (subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });else if (isMap_default(value)) value.forEach(function (subValue, key$1) {
        result.set(key$1, baseClone(subValue, bitmask, customizer, key$1, value, stack));
      });
      var props = isArr ? void 0 : (isFull ? isFlat ? _getAllKeysIn_default : _getAllKeys_default : isFlat ? keysIn_default : keys_default)(value);
      _arrayEach_default(props || value, function (subValue, key$1) {
        if (props) {
          key$1 = subValue;
          subValue = value[key$1];
        }
        _assignValue_default(result, key$1, baseClone(subValue, bitmask, customizer, key$1, value, stack));
      });
      return result;
    }
    /**
    * This method is like `_.clone` except that it recursively clones `value`.
    *
    * @static
    * @memberOf _
    * @since 1.0.0
    * @category Lang
    * @param {*} value The value to recursively clone.
    * @returns {*} Returns the deep cloned value.
    * @see _.clone
    * @example
    *
    * var objects = [{ 'a': 1 }, { 'b': 2 }];
    *
    * var deep = _.cloneDeep(objects);
    * console.log(deep[0] === objects[0]);
    * // => false
    */
    function cloneDeep(value) {
      return _baseClone_default(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    function getError(action, option, xhr) {
      let msg;
      if (xhr.response) msg = `${xhr.response.error || xhr.response}`;else if (xhr.responseText) msg = `${xhr.responseText}`;else msg = `fail to ${option.method} ${action} ${xhr.status}`;
      return new UploadAjaxError(msg, xhr.status, option.method, action);
    }
    function getBody(xhr) {
      const text = xhr.responseText || xhr.response;
      if (!text) return text;
      try {
        return JSON.parse(text);
      } catch (e) {
        return text;
      }
    }
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        NOOP = _vueRuntimeEsmBundlerLegacy003Js.Jt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        toRef = _vueRuntimeEsmBundlerLegacy003Js.Vt;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        isFunction = _vueRuntimeEsmBundlerLegacy003Js.an;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.bn;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        withKeys = _vueRuntimeEsmBundlerLegacy003Js.m;
        isString = _vueRuntimeEsmBundlerLegacy003Js.mn;
        isArray = _vueRuntimeEsmBundlerLegacy003Js.nn;
        provide = _vueRuntimeEsmBundlerLegacy003Js.nt;
        TransitionGroup = _vueRuntimeEsmBundlerLegacy003Js.r;
        init_shared_esm_bundler = _vueRuntimeEsmBundlerLegacy003Js.tn;
        isPlainObject = _vueRuntimeEsmBundlerLegacy003Js.un;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        inject = _vueRuntimeEsmBundlerLegacy003Js.z;
        shallowRef = _vueRuntimeEsmBundlerLegacy003Js.zt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        _baseUnary_default = _srcLegacy007Js.An;
        N8nSelect_default = _srcLegacy007Js.G;
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nOption_default = _srcLegacy007Js.K;
        keys_default = _srcLegacy007Js.Tn;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nInputLabel_default = _srcLegacy007Js.X;
        N8nCheckbox_default = _srcLegacy007Js.Y;
        useFormDisabled = _srcLegacy007Js.Yt;
        _getAllKeys_default = _srcLegacy007Js._n;
        stubArray_default = _srcLegacy007Js.bn;
        isNil_default = _srcLegacy007Js.dn;
        isEqual_default = _srcLegacy007Js.fn;
        _getTag_default = _srcLegacy007Js.gn;
        isBuffer_default = _srcLegacy007Js.jn;
        _nodeUtil_default = _srcLegacy007Js.kn;
        mutable = _srcLegacy007Js.tn;
        _baseGetAllKeys_default = _srcLegacy007Js.vn;
        _arrayPush_default = _srcLegacy007Js.wn;
        _Stack_default = _srcLegacy007Js.xn;
        _getSymbols_default = _srcLegacy007Js.yn;
        N8nInput_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useLocale = _truncateLegacy00hJs.A;
        definePropType = _truncateLegacy00hJs.F;
        throwError = _truncateLegacy00hJs.H;
        buildProps = _truncateLegacy00hJs.P;
        _Symbol_default = _truncateLegacy00hJs.St;
        entriesOf = _truncateLegacy00hJs.U;
        debugWarn = _truncateLegacy00hJs.V;
        isArray_default = _truncateLegacy00hJs._t;
        useRouter = _truncateLegacy00hJs.b;
        isObjectLike_default = _truncateLegacy00hJs.bt;
        _assignValue_default = _truncateLegacy00hJs.ct;
        isObject_default = _truncateLegacy00hJs.gt;
        useVModel = _truncateLegacy00hJs.jt;
        useNamespace = _truncateLegacy00hJs.k;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_initCloneObjectLegacy00jJs) {
        _getPrototype_default = _initCloneObjectLegacy00jJs.a;
        _copyArray_default = _initCloneObjectLegacy00jJs.c;
        _cloneBuffer_default = _initCloneObjectLegacy00jJs.i;
        _cloneTypedArray_default = _initCloneObjectLegacy00jJs.n;
        keysIn_default = _initCloneObjectLegacy00jJs.o;
        _cloneArrayBuffer_default = _initCloneObjectLegacy00jJs.r;
        _copyObject_default = _initCloneObjectLegacy00jJs.s;
        _initCloneObject_default = _initCloneObjectLegacy00jJs.t;
      }, function (_iconLegacy00nJs) {
        document_default = _iconLegacy00nJs.E;
        warning_filled_default = _iconLegacy00nJs.F;
        zoom_in_default = _iconLegacy00nJs.I;
        close_default = _iconLegacy00nJs.S;
        delete_default = _iconLegacy00nJs.T;
        circle_close_default = _iconLegacy00nJs.b;
        withInstall = _iconLegacy00nJs.i;
        _export_sfc = _iconLegacy00nJs.n;
        ElIcon = _iconLegacy00nJs.t;
        check_default = _iconLegacy00nJs.v;
        circle_check_default = _iconLegacy00nJs.y;
      }, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_radioLegacy00zJs) {
        ElRadioGroup = _radioLegacy00zJs.n;
        ElRadio = _radioLegacy00zJs.t;
      }, function (_dialogLegacy00DJs) {}, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        DATA_TABLE_SYSTEM_COLUMNS = _constantsLegacy00TJs.Gi;
        PROJECT_DATA_TABLES = _constantsLegacy00TJs.Jr;
        DATA_TABLE_DETAILS = _constantsLegacy00TJs.jr;
        dataTableColumnNameSchema = _constantsLegacy00TJs.ri;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_dataTableStoreLegacy01RJs) {
        useDataTableStore = _dataTableStoreLegacy01RJs.t;
      }, function (_ModalLegacy01TJs) {
        Modal_default = _ModalLegacy01TJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._header_1p7kw_123 {\n  margin-bottom: var(--spacing--xs);\n}\n._content_1p7kw_127 {\n  display: flex;\n  flex-direction: column;\n}\n._selectionContent_1p7kw_132 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--md);\n}\n._radioGroup_1p7kw_138 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--xs);\n}\n._radioGroup_1p7kw_138 .el-radio {\n  height: auto;\n  margin-right: 0;\n}\n._radioGroup_1p7kw_138 .el-radio__input.is-checked .el-radio__inner {\n  background-color: var(--color--primary);\n  border-color: var(--color--primary);\n}\n._radioGroup_1p7kw_138 .el-radio__inner {\n  width: 16px;\n  height: 16px;\n}\n._radioGroup_1p7kw_138 .el-radio__input:hover .el-radio__inner {\n  border-color: var(--color--foreground);\n}\n._radioGroup_1p7kw_138 .el-radio__input.is-checked:hover .el-radio__inner {\n  border-color: var(--color--primary);\n}\n._radioGroup_1p7kw_138 .el-radio__label {\n  font-size: var(--font-size--sm);\n  color: var(--color--text) !important;\n  padding-left: var(--spacing--xs);\n}\n._radioGroup_1p7kw_138 .el-radio.is-checked .el-radio__label {\n  color: var(--color--text) !important;\n}\n._uploadSection_1p7kw_170 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n}\n._uploadingMessage_1p7kw_176 {\n  padding: var(--spacing--lg);\n  text-align: center;\n  color: var(--color--text--tint-1);\n}\n._importContent_1p7kw_182 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--md);\n}\n._successNotice_1p7kw_188 {\n  padding: var(--spacing--sm) var(--spacing--md);\n  background-color: var(--color--success--tint-4);\n  border-radius: var(--radius);\n  color: var(--color--success--shade-1);\n  font-size: var(--font-size--sm);\n  line-height: var(--line-height--lg);\n}\n._columnHeaders_1p7kw_197 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing--md);\n  padding: 0 var(--spacing--2xs);\n}\n._columnHeaderLabel_1p7kw_204 {\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--regular);\n  color: var(--color--text--tint-1);\n}\n._columnsContainer_1p7kw_210 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--md);\n  max-height: 400px;\n  overflow-y: auto;\n  padding: var(--spacing--2xs);\n}\n._columnItem_1p7kw_219 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing--md);\n  align-items: start;\n}\n._columnInputWrapper_1p7kw_226 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--4xs);\n}\n._columnTypeWrapper_1p7kw_232 {\n  display: flex;\n  align-items: center;\n}\n._inputError_1p7kw_237 {\n  border-color: var(--color--danger) !important;\n}\n._inputError_1p7kw_237:focus {\n  box-shadow: 0 0 0 2px var(--color--danger--tint-3) !important;\n}\n._columnErrorMessage_1p7kw_244 {\n  font-size: var(--font-size--3xs);\n  color: var(--color--danger);\n  line-height: var(--line-height--sm);\n}\n._footer_1p7kw_250 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  justify-content: flex-end;\n  margin-top: var(--spacing--lg);\n}\n._fileSelectedContainer_1p7kw_257 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--lg);\n  padding: var(--spacing--lg) 0;\n}\n._uploadDemo_1p7kw_264 {\n  width: 100%;\n}\n._uploadDemo_1p7kw_264 .el-upload {\n  width: 100%;\n  border-radius: var(--radius--lg);\n}\n._uploadDemo_1p7kw_264 .el-upload-dragger {\n  width: 100%;\n  padding: var(--spacing--2xl) var(--spacing--lg);\n  border: 1px solid var(--color--foreground);\n  background-color: var(--color--background-base);\n  border-radius: var(--radius--lg);\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n._uploadDemo_1p7kw_264 .el-upload-dragger:hover {\n  background-color: var(--color--background);\n}\n._uploadDemo_1p7kw_264 input[type=\"file\"] {\n  display: none !important;\n}\n._uploadIcon_1p7kw_290 {\n  margin-bottom: var(--spacing--sm);\n}\n._fileName_1p7kw_294 {\n  font-weight: var(--font-weight--regular);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        _arrayEach_default = arrayEach;
        _baseAssign_default = baseAssign;
        _baseAssignIn_default = baseAssignIn;
        _copySymbols_default = copySymbols; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getSymbolsIn.js
        /**
        * Creates an array of the own and inherited enumerable symbols of `object`.
        *
        * @private
        * @param {Object} object The object to query.
        * @returns {Array} Returns the array of symbols.
        */
        getSymbolsIn = !Object.getOwnPropertySymbols ? stubArray_default : function (object) {
          var result = [];
          while (object) {
            _arrayPush_default(result, _getSymbols_default(object));
            object = _getPrototype_default(object);
          }
          return result;
        };
        _getSymbolsIn_default = getSymbolsIn;
        _copySymbolsIn_default = copySymbolsIn;
        _getAllKeysIn_default = getAllKeysIn; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneArray.js
        /** Used to check objects for own properties. */
        hasOwnProperty = Object.prototype.hasOwnProperty;
        _initCloneArray_default = initCloneArray;
        _cloneDataView_default = cloneDataView; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneRegExp.js
        /** Used to match `RegExp` flags from their coerced string values. */
        reFlags = /\w*$/;
        _cloneRegExp_default = cloneRegExp; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneSymbol.js
        /** Used to convert symbols to primitives and strings. */
        symbolProto = _Symbol_default ? _Symbol_default.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
        _cloneSymbol_default = cloneSymbol; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneByTag.js
        /** `Object#toString` result references. */
        boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
        arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
        _initCloneByTag_default = initCloneByTag; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsMap.js
        /** `Object#toString` result references. */
        mapTag$1 = "[object Map]";
        _baseIsMap_default = baseIsMap; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isMap.js
        nodeIsMap = _nodeUtil_default && _nodeUtil_default.isMap;
        /**
        * Checks if `value` is classified as a `Map` object.
        *
        * @static
        * @memberOf _
        * @since 4.3.0
        * @category Lang
        * @param {*} value The value to check.
        * @returns {boolean} Returns `true` if `value` is a map, else `false`.
        * @example
        *
        * _.isMap(new Map);
        * // => true
        *
        * _.isMap(new WeakMap);
        * // => false
        */
        isMap = nodeIsMap ? _baseUnary_default(nodeIsMap) : _baseIsMap_default;
        isMap_default = isMap; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsSet.js
        /** `Object#toString` result references. */
        setTag$1 = "[object Set]";
        _baseIsSet_default = baseIsSet; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSet.js
        nodeIsSet = _nodeUtil_default && _nodeUtil_default.isSet;
        /**
        * Checks if `value` is classified as a `Set` object.
        *
        * @static
        * @memberOf _
        * @since 4.3.0
        * @category Lang
        * @param {*} value The value to check.
        * @returns {boolean} Returns `true` if `value` is a set, else `false`.
        * @example
        *
        * _.isSet(new Set);
        * // => true
        *
        * _.isSet(new WeakSet);
        * // => false
        */
        isSet = nodeIsSet ? _baseUnary_default(nodeIsSet) : _baseIsSet_default;
        isSet_default = isSet; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseClone.js
        /** Used to compose bitmasks for cloning. */
        CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
        /** `Object#toString` result references. */
        argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
        arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        /** Used to identify `toStringTag` values supported by `_.clone`. */
        cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        _baseClone_default = baseClone; //#endregion
        //#region ../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js
        /** Used to compose bitmasks for cloning. */
        CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
        cloneDeep_default = cloneDeep; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/progress/src/progress.mjs
        progressProps = buildProps({
          type: {
            type: String,
            default: "line",
            values: ["line", "circle", "dashboard"]
          },
          percentage: {
            type: Number,
            default: 0,
            validator: val => val >= 0 && val <= 100
          },
          status: {
            type: String,
            default: "",
            values: ["", "success", "exception", "warning"]
          },
          indeterminate: {
            type: Boolean,
            default: false
          },
          duration: {
            type: Number,
            default: 3
          },
          strokeWidth: {
            type: Number,
            default: 6
          },
          strokeLinecap: {
            type: definePropType(String),
            default: "round"
          },
          textInside: {
            type: Boolean,
            default: false
          },
          width: {
            type: Number,
            default: 126
          },
          showText: {
            type: Boolean,
            default: true
          },
          color: {
            type: definePropType([String, Array, Function]),
            default: ""
          },
          striped: Boolean,
          stripedFlow: Boolean,
          format: {
            type: definePropType(Function),
            default: percentage => `${percentage}%`
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/progress/src/progress2.mjs
        init_shared_esm_bundler();
        _hoisted_1$3 = ["aria-valuenow"];
        _hoisted_2$2 = {
          viewBox: "0 0 100 100"
        };
        _hoisted_3$1 = ["d", "stroke", "stroke-linecap", "stroke-width"];
        _hoisted_4$1 = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"];
        _hoisted_5$1 = {
          key: 0
        };
        Progress = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElProgress"
          }),
          props: progressProps,
          setup(__props) {
            const props = __props;
            const STATUS_COLOR_MAP = {
              success: "#13ce66",
              exception: "#ff4949",
              warning: "#e6a23c",
              default: "#20a0ff"
            };
            const ns = useNamespace("progress");
            const barStyle = computed(() => ({
              width: `${props.percentage}%`,
              animationDuration: `${props.duration}s`,
              backgroundColor: getCurrentColor(props.percentage)
            }));
            const relativeStrokeWidth = computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
            const radius = computed(() => {
              if (["circle", "dashboard"].includes(props.type)) return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
              return 0;
            });
            const trackPath = computed(() => {
              const r = radius.value;
              const isDashboard = props.type === "dashboard";
              return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
            });
            const perimeter = computed(() => 2 * Math.PI * radius.value);
            const rate = computed(() => props.type === "dashboard" ? .75 : 1);
            const strokeDashoffset = computed(() => {
              return `${-1 * perimeter.value * (1 - rate.value) / 2}px`;
            });
            const trailPathStyle = computed(() => ({
              strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
              strokeDashoffset: strokeDashoffset.value
            }));
            const circlePathStyle = computed(() => ({
              strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
              strokeDashoffset: strokeDashoffset.value,
              transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
            }));
            const stroke = computed(() => {
              let ret;
              if (props.color) ret = getCurrentColor(props.percentage);else ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
              return ret;
            });
            const statusIcon = computed(() => {
              if (props.status === "warning") return warning_filled_default;
              if (props.type === "line") return props.status === "success" ? circle_check_default : circle_close_default;else return props.status === "success" ? check_default : close_default;
            });
            const progressTextSize = computed(() => {
              return props.type === "line" ? 12 + props.strokeWidth * .4 : props.width * .111111 + 2;
            });
            const content$1 = computed(() => props.format(props.percentage));
            function getColors(color) {
              const span = 100 / color.length;
              return color.map((seriesColor, index) => {
                if (isString(seriesColor)) return {
                  color: seriesColor,
                  percentage: (index + 1) * span
                };
                return seriesColor;
              }).sort((a, b) => a.percentage - b.percentage);
            }
            const getCurrentColor = percentage => {
              var _a;
              const {
                color
              } = props;
              if (isFunction(color)) return color(percentage);else if (isString(color)) return color;else {
                const colors = getColors(color);
                for (const color2 of colors) if (color2.percentage > percentage) return color2.color;
                return (_a = colors[colors.length - 1]) == null ? void 0 : _a.color;
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.type), unref(ns).is(_ctx.status), {
                  [unref(ns).m("without-text")]: !_ctx.showText,
                  [unref(ns).m("text-inside")]: _ctx.textInside
                }]),
                role: "progressbar",
                "aria-valuenow": _ctx.percentage,
                "aria-valuemin": "0",
                "aria-valuemax": "100"
              }, [_ctx.type === "line" ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ns).b("bar"))
              }, [createBaseVNode("div", {
                class: normalizeClass(unref(ns).be("bar", "outer")),
                style: normalizeStyle({
                  height: `${_ctx.strokeWidth}px`
                })
              }, [createBaseVNode("div", {
                class: normalizeClass([unref(ns).be("bar", "inner"), {
                  [unref(ns).bem("bar", "inner", "indeterminate")]: _ctx.indeterminate
                }, {
                  [unref(ns).bem("bar", "inner", "striped")]: _ctx.striped
                }, {
                  [unref(ns).bem("bar", "inner", "striped-flow")]: _ctx.stripedFlow
                }]),
                style: normalizeStyle(unref(barStyle))
              }, [(_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ns).be("bar", "innerText"))
              }, [renderSlot(_ctx.$slots, "default", {
                percentage: _ctx.percentage
              }, () => [createBaseVNode("span", null, toDisplayString(unref(content$1)), 1)])], 2)) : createCommentVNode("v-if", true)], 6)], 6)], 2)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(unref(ns).b("circle")),
                style: normalizeStyle({
                  height: `${_ctx.width}px`,
                  width: `${_ctx.width}px`
                })
              }, [(openBlock(), createElementBlock("svg", _hoisted_2$2, [createBaseVNode("path", {
                class: normalizeClass(unref(ns).be("circle", "track")),
                d: unref(trackPath),
                stroke: `var(${unref(ns).cssVarName("fill-color-light")}, #e5e9f2)`,
                "stroke-linecap": _ctx.strokeLinecap,
                "stroke-width": unref(relativeStrokeWidth),
                fill: "none",
                style: normalizeStyle(unref(trailPathStyle))
              }, null, 14, _hoisted_3$1), createBaseVNode("path", {
                class: normalizeClass(unref(ns).be("circle", "path")),
                d: unref(trackPath),
                stroke: unref(stroke),
                fill: "none",
                opacity: _ctx.percentage ? 1 : 0,
                "stroke-linecap": _ctx.strokeLinecap,
                "stroke-width": unref(relativeStrokeWidth),
                style: normalizeStyle(unref(circlePathStyle))
              }, null, 14, _hoisted_4$1)]))], 6)), (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(unref(ns).e("text")),
                style: normalizeStyle({
                  fontSize: `${unref(progressTextSize)}px`
                })
              }, [renderSlot(_ctx.$slots, "default", {
                percentage: _ctx.percentage
              }, () => [!_ctx.status ? (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString(unref(content$1)), 1)) : (openBlock(), createBlock(unref(ElIcon), {
                key: 1
              }, {
                default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(statusIcon))))]),
                _: 1
              }))])], 6)) : createCommentVNode("v-if", true)], 10, _hoisted_1$3);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/progress/index.mjs
        ElProgress = withInstall(Progress); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/constants.mjs
        uploadContextKey = Symbol("uploadContextKey"); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/ajax.mjs
        init_shared_esm_bundler();
        SCOPE$1 = "ElUpload";
        UploadAjaxError = class extends Error {
          constructor(message, status, method, url) {
            super(message);
            this.name = "UploadAjaxError";
            this.status = status;
            this.method = method;
            this.url = url;
          }
        };
        ajaxUpload = option => {
          if (typeof XMLHttpRequest === "undefined") throwError(SCOPE$1, "XMLHttpRequest is undefined");
          const xhr = new XMLHttpRequest();
          const action = option.action;
          if (xhr.upload) xhr.upload.addEventListener("progress", evt => {
            const progressEvt = evt;
            progressEvt.percent = evt.total > 0 ? evt.loaded / evt.total * 100 : 0;
            option.onProgress(progressEvt);
          });
          const formData = new FormData();
          if (option.data) for (const [key, value] of Object.entries(option.data)) if (isArray(value) && value.length) formData.append(key, ...value);else formData.append(key, value);
          formData.append(option.filename, option.file, option.file.name);
          xhr.addEventListener("error", () => {
            option.onError(getError(action, option, xhr));
          });
          xhr.addEventListener("load", () => {
            if (xhr.status < 200 || xhr.status >= 300) return option.onError(getError(action, option, xhr));
            option.onSuccess(getBody(xhr));
          });
          xhr.open(option.method, action, true);
          if (option.withCredentials && "withCredentials" in xhr) xhr.withCredentials = true;
          const headers = option.headers || {};
          if (headers instanceof Headers) headers.forEach((value, key) => xhr.setRequestHeader(key, value));else for (const [key, value] of Object.entries(headers)) {
            if (isNil_default(value)) continue;
            xhr.setRequestHeader(key, String(value));
          }
          xhr.send(formData);
          return xhr;
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/upload.mjs
        init_shared_esm_bundler();
        uploadListTypes = ["text", "picture", "picture-card"];
        fileId = 1;
        genFileId = () => Date.now() + fileId++;
        uploadBaseProps = buildProps({
          action: {
            type: String,
            default: "#"
          },
          headers: {
            type: definePropType(Object)
          },
          method: {
            type: String,
            default: "post"
          },
          data: {
            type: definePropType([Object, Function, Promise]),
            default: () => mutable({})
          },
          multiple: {
            type: Boolean,
            default: false
          },
          name: {
            type: String,
            default: "file"
          },
          drag: {
            type: Boolean,
            default: false
          },
          withCredentials: Boolean,
          showFileList: {
            type: Boolean,
            default: true
          },
          accept: {
            type: String,
            default: ""
          },
          fileList: {
            type: definePropType(Array),
            default: () => mutable([])
          },
          autoUpload: {
            type: Boolean,
            default: true
          },
          listType: {
            type: String,
            values: uploadListTypes,
            default: "text"
          },
          httpRequest: {
            type: definePropType(Function),
            default: ajaxUpload
          },
          disabled: Boolean,
          limit: Number
        });
        uploadProps = buildProps({
          ...uploadBaseProps,
          beforeUpload: {
            type: definePropType(Function),
            default: NOOP
          },
          beforeRemove: {
            type: definePropType(Function)
          },
          onRemove: {
            type: definePropType(Function),
            default: NOOP
          },
          onChange: {
            type: definePropType(Function),
            default: NOOP
          },
          onPreview: {
            type: definePropType(Function),
            default: NOOP
          },
          onSuccess: {
            type: definePropType(Function),
            default: NOOP
          },
          onProgress: {
            type: definePropType(Function),
            default: NOOP
          },
          onError: {
            type: definePropType(Function),
            default: NOOP
          },
          onExceed: {
            type: definePropType(Function),
            default: NOOP
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/upload-list.mjs
        init_shared_esm_bundler();
        uploadListProps = buildProps({
          files: {
            type: definePropType(Array),
            default: () => mutable([])
          },
          disabled: {
            type: Boolean,
            default: false
          },
          handlePreview: {
            type: definePropType(Function),
            default: NOOP
          },
          listType: {
            type: String,
            values: uploadListTypes,
            default: "text"
          }
        });
        uploadListEmits = {
          remove: file => !!file
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/upload-list2.mjs
        _hoisted_1$2 = ["onKeydown"];
        _hoisted_2$1 = ["src"];
        _hoisted_3 = ["onClick"];
        _hoisted_4 = ["title"];
        _hoisted_5 = ["onClick"];
        _hoisted_6 = ["onClick"];
        UploadList = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElUploadList"
          }),
          props: uploadListProps,
          emits: uploadListEmits,
          setup(__props, {
            emit
          }) {
            const props = __props;
            const {
              t
            } = useLocale();
            const nsUpload = useNamespace("upload");
            const nsIcon = useNamespace("icon");
            const nsList = useNamespace("list");
            const disabled = useFormDisabled();
            const focusing = ref(false);
            const containerKls = computed(() => [nsUpload.b("list"), nsUpload.bm("list", props.listType), nsUpload.is("disabled", props.disabled)]);
            const handleRemove = file => {
              emit("remove", file);
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(TransitionGroup, {
                tag: "ul",
                class: normalizeClass(unref(containerKls)),
                name: unref(nsList).b()
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.files, file => {
                  return openBlock(), createElementBlock("li", {
                    key: file.uid || file.name,
                    class: normalizeClass([unref(nsUpload).be("list", "item"), unref(nsUpload).is(file.status), {
                      focusing: focusing.value
                    }]),
                    tabindex: "0",
                    onKeydown: withKeys($event => !unref(disabled) && handleRemove(file), ["delete"]),
                    onFocus: _cache[0] || (_cache[0] = $event => focusing.value = true),
                    onBlur: _cache[1] || (_cache[1] = $event => focusing.value = false),
                    onClick: _cache[2] || (_cache[2] = $event => focusing.value = false)
                  }, [renderSlot(_ctx.$slots, "default", {
                    file
                  }, () => [_ctx.listType === "picture" || file.status !== "uploading" && _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    class: normalizeClass(unref(nsUpload).be("list", "item-thumbnail")),
                    src: file.url,
                    alt: ""
                  }, null, 10, _hoisted_2$1)) : createCommentVNode("v-if", true), file.status === "uploading" || _ctx.listType !== "picture-card" ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(unref(nsUpload).be("list", "item-info"))
                  }, [createBaseVNode("a", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-name")),
                    onClick: withModifiers($event => _ctx.handlePreview(file), ["prevent"])
                  }, [createVNode(unref(ElIcon), {
                    class: normalizeClass(unref(nsIcon).m("document"))
                  }, {
                    default: withCtx(() => [createVNode(unref(document_default))]),
                    _: 1
                  }, 8, ["class"]), createBaseVNode("span", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-file-name")),
                    title: file.name
                  }, toDisplayString(file.name), 11, _hoisted_4)], 10, _hoisted_3), file.status === "uploading" ? (openBlock(), createBlock(unref(ElProgress), {
                    key: 0,
                    type: _ctx.listType === "picture-card" ? "circle" : "line",
                    "stroke-width": _ctx.listType === "picture-card" ? 6 : 2,
                    percentage: Number(file.percentage),
                    style: normalizeStyle(_ctx.listType === "picture-card" ? "" : "margin-top: 0.5rem")
                  }, null, 8, ["type", "stroke-width", "percentage", "style"])) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), createBaseVNode("label", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-status-label"))
                  }, [_ctx.listType === "text" ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("circle-check")])
                  }, {
                    default: withCtx(() => [createVNode(unref(circle_check_default))]),
                    _: 1
                  }, 8, ["class"])) : ["picture-card", "picture"].includes(_ctx.listType) ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 1,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("check")])
                  }, {
                    default: withCtx(() => [createVNode(unref(check_default))]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)], 2), !unref(disabled) ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 2,
                    class: normalizeClass(unref(nsIcon).m("close")),
                    onClick: $event => handleRemove(file)
                  }, {
                    default: withCtx(() => [createVNode(unref(close_default))]),
                    _: 2
                  }, 1032, ["class", "onClick"])) : createCommentVNode("v-if", true), createCommentVNode(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"), createCommentVNode(" This is a bug which needs to be fixed "), createCommentVNode(" TODO: Fix the incorrect navigation interaction "), !unref(disabled) ? (openBlock(), createElementBlock("i", {
                    key: 3,
                    class: normalizeClass(unref(nsIcon).m("close-tip"))
                  }, toDisplayString(unref(t)("el.upload.deleteTip")), 3)) : createCommentVNode("v-if", true), _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("span", {
                    key: 4,
                    class: normalizeClass(unref(nsUpload).be("list", "item-actions"))
                  }, [createBaseVNode("span", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-preview")),
                    onClick: $event => _ctx.handlePreview(file)
                  }, [createVNode(unref(ElIcon), {
                    class: normalizeClass(unref(nsIcon).m("zoom-in"))
                  }, {
                    default: withCtx(() => [createVNode(unref(zoom_in_default))]),
                    _: 1
                  }, 8, ["class"])], 10, _hoisted_5), !unref(disabled) ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(unref(nsUpload).be("list", "item-delete")),
                    onClick: $event => handleRemove(file)
                  }, [createVNode(unref(ElIcon), {
                    class: normalizeClass(unref(nsIcon).m("delete"))
                  }, {
                    default: withCtx(() => [createVNode(unref(delete_default))]),
                    _: 1
                  }, 8, ["class"])], 10, _hoisted_6)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true)])], 42, _hoisted_1$2);
                }), 128)), renderSlot(_ctx.$slots, "append")]),
                _: 3
              }, 8, ["class", "name"]);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/upload-dragger.mjs
        init_shared_esm_bundler();
        uploadDraggerProps = buildProps({
          disabled: {
            type: Boolean,
            default: false
          }
        });
        uploadDraggerEmits = {
          file: file => isArray(file)
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/upload-dragger2.mjs
        _hoisted_1$1 = ["onDrop", "onDragover"];
        COMPONENT_NAME = "ElUploadDrag";
        UploadDragger = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: COMPONENT_NAME
          }),
          props: uploadDraggerProps,
          emits: uploadDraggerEmits,
          setup(__props, {
            emit
          }) {
            const uploaderContext = inject(uploadContextKey);
            if (!uploaderContext) throwError(COMPONENT_NAME, "usage: <el-upload><el-upload-dragger /></el-upload>");
            const ns = useNamespace("upload");
            const dragover = ref(false);
            const disabled = useFormDisabled();
            const onDrop = e => {
              if (disabled.value) return;
              dragover.value = false;
              e.stopPropagation();
              const files = Array.from(e.dataTransfer.files);
              const accept = uploaderContext.accept.value;
              if (!accept) {
                emit("file", files);
                return;
              }
              emit("file", files.filter(file => {
                const {
                  type,
                  name
                } = file;
                const extension = name.includes(".") ? `.${name.split(".").pop()}` : "";
                const baseType = type.replace(/\/.*$/, "");
                return accept.split(",").map(type2 => type2.trim()).filter(type2 => type2).some(acceptedType => {
                  if (acceptedType.startsWith(".")) return extension === acceptedType;
                  if (/\/\*$/.test(acceptedType)) return baseType === acceptedType.replace(/\/\*$/, "");
                  if (/^[^/]+\/[^/]+$/.test(acceptedType)) return type === acceptedType;
                  return false;
                });
              }));
            };
            const onDragover = () => {
              if (!disabled.value) dragover.value = true;
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([unref(ns).b("dragger"), unref(ns).is("dragover", dragover.value)]),
                onDrop: withModifiers(onDrop, ["prevent"]),
                onDragover: withModifiers(onDragover, ["prevent"]),
                onDragleave: _cache[0] || (_cache[0] = withModifiers($event => dragover.value = false, ["prevent"]))
              }, [renderSlot(_ctx.$slots, "default")], 42, _hoisted_1$1);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/upload-content.mjs
        init_shared_esm_bundler();
        uploadContentProps = buildProps({
          ...uploadBaseProps,
          beforeUpload: {
            type: definePropType(Function),
            default: NOOP
          },
          onRemove: {
            type: definePropType(Function),
            default: NOOP
          },
          onStart: {
            type: definePropType(Function),
            default: NOOP
          },
          onSuccess: {
            type: definePropType(Function),
            default: NOOP
          },
          onProgress: {
            type: definePropType(Function),
            default: NOOP
          },
          onError: {
            type: definePropType(Function),
            default: NOOP
          },
          onExceed: {
            type: definePropType(Function),
            default: NOOP
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/upload-content2.mjs
        init_shared_esm_bundler();
        _hoisted_1 = ["onKeydown"];
        _hoisted_2 = ["name", "multiple", "accept"];
        UploadContent = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElUploadContent",
            inheritAttrs: false
          }),
          props: uploadContentProps,
          setup(__props, {
            expose
          }) {
            const props = __props;
            const ns = useNamespace("upload");
            const disabled = useFormDisabled();
            const requests = shallowRef({});
            const inputRef = shallowRef();
            const uploadFiles = files => {
              if (files.length === 0) return;
              const {
                autoUpload,
                limit,
                fileList,
                multiple,
                onStart,
                onExceed
              } = props;
              if (limit && fileList.length + files.length > limit) {
                onExceed(files, fileList);
                return;
              }
              if (!multiple) files = files.slice(0, 1);
              for (const file of files) {
                const rawFile = file;
                rawFile.uid = genFileId();
                onStart(rawFile);
                if (autoUpload) upload(rawFile);
              }
            };
            const upload = async rawFile => {
              inputRef.value.value = "";
              if (!props.beforeUpload) return doUpload(rawFile);
              let hookResult;
              let beforeData = {};
              try {
                const originData = props.data;
                const beforeUploadPromise = props.beforeUpload(rawFile);
                beforeData = isPlainObject(props.data) ? cloneDeep_default(props.data) : props.data;
                hookResult = await beforeUploadPromise;
                if (isPlainObject(props.data) && isEqual_default(originData, beforeData)) beforeData = cloneDeep_default(props.data);
              } catch (e) {
                hookResult = false;
              }
              if (hookResult === false) {
                props.onRemove(rawFile);
                return;
              }
              let file = rawFile;
              if (hookResult instanceof Blob) if (hookResult instanceof File) file = hookResult;else file = new File([hookResult], rawFile.name, {
                type: rawFile.type
              });
              doUpload(Object.assign(file, {
                uid: rawFile.uid
              }), beforeData);
            };
            const resolveData = async (data, rawFile) => {
              if (isFunction(data)) return data(rawFile);
              return data;
            };
            const doUpload = async (rawFile, beforeData) => {
              const {
                headers,
                data,
                method,
                withCredentials,
                name: filename,
                action,
                onProgress,
                onSuccess,
                onError,
                httpRequest
              } = props;
              try {
                beforeData = await resolveData(beforeData != null ? beforeData : data, rawFile);
              } catch (e) {
                props.onRemove(rawFile);
                return;
              }
              const {
                uid
              } = rawFile;
              const options = {
                headers: headers || {},
                withCredentials,
                file: rawFile,
                data: beforeData,
                method,
                filename,
                action,
                onProgress: evt => {
                  onProgress(evt, rawFile);
                },
                onSuccess: res => {
                  onSuccess(res, rawFile);
                  delete requests.value[uid];
                },
                onError: err => {
                  onError(err, rawFile);
                  delete requests.value[uid];
                }
              };
              const request = httpRequest(options);
              requests.value[uid] = request;
              if (request instanceof Promise) request.then(options.onSuccess, options.onError);
            };
            const handleChange = e => {
              const files = e.target.files;
              if (!files) return;
              uploadFiles(Array.from(files));
            };
            const handleClick = () => {
              if (!disabled.value) {
                inputRef.value.value = "";
                inputRef.value.click();
              }
            };
            const handleKeydown = () => {
              handleClick();
            };
            const abort = file => {
              entriesOf(requests.value).filter(file ? ([uid]) => String(file.uid) === uid : () => true).forEach(([uid, req]) => {
                if (req instanceof XMLHttpRequest) req.abort();
                delete requests.value[uid];
              });
            };
            expose({
              abort,
              upload
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.listType), unref(ns).is("drag", _ctx.drag)]),
                tabindex: "0",
                onClick: handleClick,
                onKeydown: withKeys(withModifiers(handleKeydown, ["self"]), ["enter", "space"])
              }, [_ctx.drag ? (openBlock(), createBlock(UploadDragger, {
                key: 0,
                disabled: unref(disabled),
                onFile: uploadFiles
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
                _: 3
              }, 8, ["disabled"])) : renderSlot(_ctx.$slots, "default", {
                key: 1
              }), createBaseVNode("input", {
                ref_key: "inputRef",
                ref: inputRef,
                class: normalizeClass(unref(ns).e("input")),
                name: _ctx.name,
                multiple: _ctx.multiple,
                accept: _ctx.accept,
                type: "file",
                onChange: handleChange,
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
              }, null, 42, _hoisted_2)], 42, _hoisted_1);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/use-handlers.mjs
        SCOPE = "ElUpload";
        revokeFileObjectURL = file => {
          var _a;
          if ((_a = file.url) == null ? void 0 : _a.startsWith("blob:")) URL.revokeObjectURL(file.url);
        };
        useHandlers = (props, uploadRef) => {
          const uploadFiles = useVModel(props, "fileList", void 0, {
            passive: true
          });
          const getFile = rawFile => uploadFiles.value.find(file => file.uid === rawFile.uid);
          function abort(file) {
            var _a;
            (_a = uploadRef.value) == null || _a.abort(file);
          }
          function clearFiles(states = ["ready", "uploading", "success", "fail"]) {
            uploadFiles.value = uploadFiles.value.filter(row => !states.includes(row.status));
          }
          const handleError = (err, rawFile) => {
            const file = getFile(rawFile);
            if (!file) return;
            console.error(err);
            file.status = "fail";
            uploadFiles.value.splice(uploadFiles.value.indexOf(file), 1);
            props.onError(err, file, uploadFiles.value);
            props.onChange(file, uploadFiles.value);
          };
          const handleProgress = (evt, rawFile) => {
            const file = getFile(rawFile);
            if (!file) return;
            props.onProgress(evt, file, uploadFiles.value);
            file.status = "uploading";
            file.percentage = Math.round(evt.percent);
          };
          const handleSuccess = (response, rawFile) => {
            const file = getFile(rawFile);
            if (!file) return;
            file.status = "success";
            file.response = response;
            props.onSuccess(response, file, uploadFiles.value);
            props.onChange(file, uploadFiles.value);
          };
          const handleStart = file => {
            if (isNil_default(file.uid)) file.uid = genFileId();
            const uploadFile = {
              name: file.name,
              percentage: 0,
              status: "ready",
              size: file.size,
              raw: file,
              uid: file.uid
            };
            if (props.listType === "picture-card" || props.listType === "picture") try {
              uploadFile.url = URL.createObjectURL(file);
            } catch (err) {
              debugWarn(SCOPE, err.message);
              props.onError(err, uploadFile, uploadFiles.value);
            }
            uploadFiles.value = [...uploadFiles.value, uploadFile];
            props.onChange(uploadFile, uploadFiles.value);
          };
          const handleRemove = async file => {
            const uploadFile = file instanceof File ? getFile(file) : file;
            if (!uploadFile) throwError(SCOPE, "file to be removed not found");
            const doRemove = file2 => {
              abort(file2);
              const fileList = uploadFiles.value;
              fileList.splice(fileList.indexOf(file2), 1);
              props.onRemove(file2, fileList);
              revokeFileObjectURL(file2);
            };
            if (props.beforeRemove) {
              if ((await props.beforeRemove(uploadFile, uploadFiles.value)) !== false) doRemove(uploadFile);
            } else doRemove(uploadFile);
          };
          function submit() {
            uploadFiles.value.filter(({
              status
            }) => status === "ready").forEach(({
              raw
            }) => {
              var _a;
              return raw && ((_a = uploadRef.value) == null ? void 0 : _a.upload(raw));
            });
          }
          watch(() => props.listType, val => {
            if (val !== "picture-card" && val !== "picture") return;
            uploadFiles.value = uploadFiles.value.map(file => {
              const {
                raw,
                url
              } = file;
              if (!url && raw) try {
                file.url = URL.createObjectURL(raw);
              } catch (err) {
                props.onError(err, file, uploadFiles.value);
              }
              return file;
            });
          });
          watch(uploadFiles, files => {
            for (const file of files) {
              file.uid || (file.uid = genFileId());
              file.status || (file.status = "success");
            }
          }, {
            immediate: true,
            deep: true
          });
          return {
            uploadFiles,
            abort,
            clearFiles,
            handleError,
            handleProgress,
            handleStart,
            handleSuccess,
            handleRemove,
            submit,
            revokeFileObjectURL
          };
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/src/upload2.mjs
        Upload = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElUpload"
          }),
          props: uploadProps,
          setup(__props, {
            expose
          }) {
            const props = __props;
            const disabled = useFormDisabled();
            const uploadRef = shallowRef();
            const {
              abort,
              submit,
              clearFiles,
              uploadFiles,
              handleStart,
              handleError,
              handleRemove,
              handleSuccess,
              handleProgress,
              revokeFileObjectURL: revokeFileObjectURL$1
            } = useHandlers(props, uploadRef);
            const isPictureCard = computed(() => props.listType === "picture-card");
            const uploadContentProps$1 = computed(() => ({
              ...props,
              fileList: uploadFiles.value,
              onStart: handleStart,
              onProgress: handleProgress,
              onSuccess: handleSuccess,
              onError: handleError,
              onRemove: handleRemove
            }));
            onBeforeUnmount(() => {
              uploadFiles.value.forEach(revokeFileObjectURL$1);
            });
            provide(uploadContextKey, {
              accept: toRef(props, "accept")
            });
            expose({
              abort,
              submit,
              clearFiles,
              handleStart,
              handleRemove
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
                key: 0,
                disabled: unref(disabled),
                "list-type": _ctx.listType,
                files: unref(uploadFiles),
                "handle-preview": _ctx.onPreview,
                onRemove: unref(handleRemove)
              }, createSlots({
                append: withCtx(() => [createVNode(UploadContent, mergeProps({
                  ref_key: "uploadRef",
                  ref: uploadRef
                }, unref(uploadContentProps$1)), {
                  default: withCtx(() => [_ctx.$slots.trigger ? renderSlot(_ctx.$slots, "trigger", {
                    key: 0
                  }) : createCommentVNode("v-if", true), !_ctx.$slots.trigger && _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", {
                    key: 1
                  }) : createCommentVNode("v-if", true)]),
                  _: 3
                }, 16)]),
                _: 2
              }, [_ctx.$slots.file ? {
                name: "default",
                fn: withCtx(({
                  file
                }) => [renderSlot(_ctx.$slots, "file", {
                  file
                })])
              } : void 0]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true), !unref(isPictureCard) || unref(isPictureCard) && !_ctx.showFileList ? (openBlock(), createBlock(UploadContent, mergeProps({
                key: 1,
                ref_key: "uploadRef",
                ref: uploadRef
              }, unref(uploadContentProps$1)), {
                default: withCtx(() => [_ctx.$slots.trigger ? renderSlot(_ctx.$slots, "trigger", {
                  key: 0
                }) : createCommentVNode("v-if", true), !_ctx.$slots.trigger && _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", {
                  key: 1
                }) : createCommentVNode("v-if", true)]),
                _: 3
              }, 16)) : createCommentVNode("v-if", true), _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "default", {
                key: 2
              }) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "tip"), !unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
                key: 3,
                disabled: unref(disabled),
                "list-type": _ctx.listType,
                files: unref(uploadFiles),
                "handle-preview": _ctx.onPreview,
                onRemove: unref(handleRemove)
              }, createSlots({
                _: 2
              }, [_ctx.$slots.file ? {
                name: "default",
                fn: withCtx(({
                  file
                }) => [renderSlot(_ctx.$slots, "file", {
                  file
                })])
              } : void 0]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true)]);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/upload/index.mjs
        ElUpload = withInstall(Upload); //#endregion
        //#region src/features/core/dataTable/components/AddDataTableModal.vue?vue&type=script&setup=true&lang.ts
        AddDataTableModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "AddDataTableModal",
          props: {
            modalName: {}
          },
          setup(__props) {
            const props = __props;
            const dataTableStore = useDataTableStore();
            const uiStore = useUIStore();
            const route = useRoute();
            const router = useRouter();
            const i18n = useI18n();
            const toast = useToast();
            const telemetry = useTelemetry();
            const creationMode = ref("select");
            const dataTableName = ref("");
            const inputRef = ref(null);
            const selectedFile = ref(null);
            const uploadedFileId = ref(null);
            const uploadedFileName = ref("");
            const csvColumns = ref([]);
            const csvRowCount = ref(0);
            const csvColumnCount = ref(0);
            const isUploading = ref(false);
            const hasHeaders = ref(true);
            const isUploadHovered = ref(false);
            const allColumnTypeOptions = [{
              label: "String",
              value: "string"
            }, {
              label: "Number",
              value: "number"
            }, {
              label: "Boolean",
              value: "boolean"
            }, {
              label: "Datetime",
              value: "date"
            }];
            const isColumnType = value => {
              return allColumnTypeOptions.some(option => option.value === value);
            };
            const getColumnTypeOptions = compatibleTypes => {
              if (!compatibleTypes || compatibleTypes.length === 0) return allColumnTypeOptions;
              return allColumnTypeOptions.filter(option => compatibleTypes.includes(option.value));
            };
            const validateColumnName = columnName => {
              if (DATA_TABLE_SYSTEM_COLUMNS.includes(columnName)) return i18n.baseText("dataTable.import.systemColumnName", {
                interpolate: {
                  columnName
                }
              });
              if (!dataTableColumnNameSchema.safeParse(columnName).success) return i18n.baseText("dataTable.import.invalidColumnName");
            };
            const hasValidationErrors = computed(() => {
              if (creationMode.value !== "import") return false;
              return csvColumns.value.some(column => column.error !== void 0);
            });
            const hasDuplicateNames = computed(() => {
              if (creationMode.value !== "import") return false;
              const names = csvColumns.value.map(col => col.name.toLowerCase());
              return names.length !== new Set(names).size;
            });
            const modalTitle = computed(() => {
              if (creationMode.value === "import") return "Set data table columns";
              return i18n.baseText("dataTable.add.title");
            });
            const isCreateDisabled = computed(() => {
              if (creationMode.value === "import") return !dataTableName.value || !uploadedFileId.value || hasValidationErrors.value || hasDuplicateNames.value;
              return true;
            });
            onMounted(() => {
              setTimeout(() => {
                inputRef.value?.focus();
                inputRef.value?.select();
              }, 0);
            });
            const selectedOption = ref("scratch");
            const proceedFromSelect = async () => {
              if (!selectedOption.value || !dataTableName.value) return;
              if (selectedOption.value === "scratch") await onSubmit();else if (selectedOption.value === "import") {
                if (!selectedFile.value) return;
                await uploadFile();
              }
            };
            const onColumnNameChange = index => {
              const column = csvColumns.value[index];
              if (!column) return;
              column.error = validateColumnName(column.name);
              if (csvColumns.value.some((col, idx) => idx !== index && col.name.toLowerCase() === column.name.toLowerCase()) && !column.error) column.error = i18n.baseText("dataTable.import.duplicateColumnName");
              csvColumns.value.forEach((col, idx) => {
                if (idx !== index) {
                  const otherIsDuplicate = csvColumns.value.some((c, i) => i !== idx && c.name.toLowerCase() === col.name.toLowerCase());
                  const validationError = validateColumnName(col.name);
                  if (otherIsDuplicate && !validationError) col.error = i18n.baseText("dataTable.import.duplicateColumnName");else col.error = validationError;
                }
              });
            };
            const reset = (clearTableName = false) => {
              if (clearTableName) dataTableName.value = "";
              selectedFile.value = null;
              uploadedFileId.value = null;
              uploadedFileName.value = "";
              csvColumns.value = [];
              csvRowCount.value = 0;
              csvColumnCount.value = 0;
              selectedOption.value = "scratch";
              creationMode.value = "select";
            };
            const handleFileChange = uploadFile$1 => {
              if (uploadFile$1.raw) selectedFile.value = uploadFile$1.raw;
            };
            const uploadFile = async () => {
              if (!selectedFile.value) return;
              isUploading.value = true;
              creationMode.value = "import";
              try {
                const uploadResponse = await dataTableStore.uploadCsvFile(selectedFile.value, hasHeaders.value);
                uploadedFileId.value = uploadResponse.id;
                uploadedFileName.value = uploadResponse.originalName;
                csvRowCount.value = uploadResponse.rowCount;
                csvColumnCount.value = uploadResponse.columnCount;
                csvColumns.value = uploadResponse.columns.map(col => {
                  const compatibleTypes = (col.compatibleTypes || [col.type]).filter(isColumnType);
                  const sanitizedName = col.name.replace(/\s+/g, "_");
                  return {
                    name: sanitizedName,
                    type: isColumnType(col.type) ? col.type : "string",
                    compatibleTypes,
                    typeOptions: getColumnTypeOptions(compatibleTypes),
                    error: validateColumnName(sanitizedName)
                  };
                });
                if (!dataTableName.value) dataTableName.value = selectedFile.value.name.replace(/\.csv$/i, "");
              } catch (error) {
                toast.showError(error, i18n.baseText("dataTable.upload.error"));
                reset();
              } finally {
                isUploading.value = false;
              }
            };
            const onSubmit = async () => {
              try {
                let newDataTable;
                if (selectedOption.value === "scratch") newDataTable = await dataTableStore.createDataTable(dataTableName.value, route.params.projectId);else if (creationMode.value === "import" && uploadedFileId.value) newDataTable = await dataTableStore.createDataTable(dataTableName.value, route.params.projectId, csvColumns.value.map(col => ({
                  name: col.name,
                  type: col.type
                })), uploadedFileId.value, hasHeaders.value);
                if (newDataTable) {
                  telemetry.track("User created data table", {
                    data_table_id: newDataTable.id,
                    data_table_project_id: newDataTable.project?.id,
                    creation_mode: selectedOption.value
                  });
                  reset(true);
                  uiStore.closeModal(props.modalName);
                  router.push({
                    name: DATA_TABLE_DETAILS,
                    params: {
                      id: newDataTable.id
                    }
                  });
                }
              } catch (error) {
                toast.showError(error, i18n.baseText("dataTable.add.error"));
              }
            };
            const goBack = () => {
              creationMode.value = "select";
            };
            const redirectToDataTables = () => {
              router.replace({
                name: PROJECT_DATA_TABLES
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Modal_default, {
                name: props.modalName,
                center: true,
                width: creationMode.value === "import" ? "700px" : "540px",
                "min-height": creationMode.value === "import" ? "600px" : void 0,
                "before-close": redirectToDataTables
              }, {
                header: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createBaseVNode("h2", null, toDisplayString(modalTitle.value), 1)], 2)]),
                content: withCtx(() => [creationMode.value === "select" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.selectionContent)
                }, [createVNode(unref(N8nInputLabel_default), {
                  label: unref(i18n).baseText("dataTable.add.input.name.label"),
                  required: true,
                  "input-name": "dataTableNameSelect"
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    ref_key: "inputRef",
                    ref: inputRef,
                    modelValue: dataTableName.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => dataTableName.value = $event),
                    type: "text",
                    placeholder: unref(i18n).baseText("dataTable.add.input.name.placeholder"),
                    "data-test-id": "data-table-name-input-select",
                    name: "dataTableNameSelect"
                  }, null, 8, ["modelValue", "placeholder"])]),
                  _: 1
                }, 8, ["label"]), createVNode(unref(ElRadioGroup), {
                  modelValue: selectedOption.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => selectedOption.value = $event),
                  class: normalizeClass(_ctx.$style.radioGroup)
                }, {
                  default: withCtx(() => [createVNode(unref(ElRadio), {
                    label: "scratch",
                    "data-test-id": "create-from-scratch-option"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.add.fromScratch")), 1)]),
                    _: 1
                  }), createVNode(unref(ElRadio), {
                    label: "import",
                    "data-test-id": "import-csv-option"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.add.importCsv")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["modelValue", "class"]), selectedOption.value === "import" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.uploadSection)
                }, [createVNode(unref(ElUpload), {
                  class: normalizeClass(_ctx.$style.uploadDemo),
                  drag: "",
                  "auto-upload": false,
                  "show-file-list": false,
                  accept: ".csv",
                  "on-change": handleFileChange,
                  onMouseenter: _cache[2] || (_cache[2] = $event => isUploadHovered.value = true),
                  onMouseleave: _cache[3] || (_cache[3] = $event => isUploadHovered.value = false)
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    icon: "file",
                    size: 24,
                    color: isUploadHovered.value ? "text-dark" : "text-light",
                    class: normalizeClass(_ctx.$style.uploadIcon)
                  }, null, 8, ["color", "class"]), selectedFile.value ? (openBlock(), createBlock(unref(N8nText_default), {
                    key: 0,
                    color: isUploadHovered.value ? "text-dark" : "text-light"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(selectedFile.value?.name), 1)]),
                    _: 1
                  }, 8, ["color"])) : (openBlock(), createBlock(unref(N8nText_default), {
                    key: 1,
                    size: "medium",
                    color: isUploadHovered.value ? "text-dark" : "text-light"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.upload.dropOrClick")), 1)]),
                    _: 1
                  }, 8, ["color"]))]),
                  _: 1
                }, 8, ["class"]), createVNode(unref(N8nCheckbox_default), {
                  modelValue: hasHeaders.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => hasHeaders.value = $event),
                  label: unref(i18n).baseText("dataTable.upload.hasHeaders"),
                  "data-test-id": "has-headers-checkbox"
                }, null, 8, ["modelValue", "label"])], 2)) : createCommentVNode("", true)], 2)) : creationMode.value === "import" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.content)
                }, [isUploading.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.uploadingMessage)
                }, toDisplayString(unref(i18n).baseText("dataTable.upload.uploading")), 3)) : !uploadedFileId.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.uploadingMessage)
                }, toDisplayString(unref(i18n).baseText("dataTable.upload.selectFile")), 3)) : uploadedFileId.value && csvColumns.value.length > 0 ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: normalizeClass(_ctx.$style.importContent)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.successNotice)
                }, toDisplayString(unref(i18n).baseText("dataTable.upload.success", {
                  adjustToNumber: csvRowCount.value,
                  interpolate: {
                    fileName: uploadedFileName.value,
                    columnCount: csvColumnCount.value,
                    rowCount: csvRowCount.value
                  }
                })), 3), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.columnHeaders)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.columnHeaderLabel)
                }, toDisplayString(unref(i18n).baseText("dataTable.import.columnName")), 3), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.columnHeaderLabel)
                }, toDisplayString(unref(i18n).baseText("dataTable.import.columnType")), 3)], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.columnsContainer)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(csvColumns.value, (column, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: normalizeClass(_ctx.$style.columnItem)
                  }, [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.columnInputWrapper)
                  }, [createVNode(unref(N8nInput_default), {
                    modelValue: column.name,
                    "onUpdate:modelValue": [$event => column.name = $event, $event => onColumnNameChange(index)],
                    placeholder: unref(i18n).baseText("dataTable.import.columnNamePlaceholder"),
                    "data-test-id": `column-name-${index}`,
                    class: normalizeClass({
                      [_ctx.$style.inputError]: column.error
                    })
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "data-test-id", "class"]), column.error ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.columnErrorMessage)
                  }, toDisplayString(column.error), 3)) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.columnTypeWrapper)
                  }, [createVNode(unref(N8nSelect_default), {
                    modelValue: column.type,
                    "onUpdate:modelValue": $event => column.type = $event,
                    disabled: column.typeOptions.length === 1,
                    "data-test-id": `column-type-${index}`
                  }, {
                    default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(column.typeOptions, option => {
                      return openBlock(), createBlock(unref(N8nOption_default), {
                        key: option.value,
                        value: option.value,
                        label: option.label
                      }, null, 8, ["value", "label"]);
                    }), 128))]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "data-test-id"])], 2)], 2);
                }), 128))], 2)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [creationMode.value === "select" ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 0,
                  type: "secondary",
                  size: "large",
                  label: unref(i18n).baseText("generic.cancel"),
                  "data-test-id": "cancel-select-button",
                  onClick: redirectToDataTables
                }, null, 8, ["label"])) : createCommentVNode("", true), creationMode.value === "select" ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 1,
                  size: "large",
                  disabled: !dataTableName.value || !selectedOption.value || selectedOption.value === "import" && !selectedFile.value,
                  label: unref(i18n).baseText("generic.create"),
                  "data-test-id": "proceed-from-select-button",
                  onClick: proceedFromSelect
                }, null, 8, ["disabled", "label"])) : createCommentVNode("", true), creationMode.value === "import" ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 2,
                  type: "secondary",
                  size: "large",
                  label: unref(i18n).baseText("generic.back"),
                  "data-test-id": "back-button",
                  onClick: goBack
                }, null, 8, ["label"])) : createCommentVNode("", true), creationMode.value === "import" ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 3,
                  size: "large",
                  disabled: isCreateDisabled.value,
                  label: unref(i18n).baseText("generic.create"),
                  "data-test-id": "confirm-add-data-table-button",
                  onClick: onSubmit
                }, null, 8, ["disabled", "label"])) : createCommentVNode("", true)], 2)]),
                _: 1
              }, 8, ["name", "width", "min-height"]);
            };
          }
        }); //#endregion
        //#region src/features/core/dataTable/components/AddDataTableModal.vue?vue&type=style&index=0&lang.module.scss
        header = "_header_1p7kw_123";
        content = "_content_1p7kw_127";
        selectionContent = "_selectionContent_1p7kw_132";
        radioGroup = "_radioGroup_1p7kw_138";
        uploadSection = "_uploadSection_1p7kw_170";
        uploadingMessage = "_uploadingMessage_1p7kw_176";
        importContent = "_importContent_1p7kw_182";
        successNotice = "_successNotice_1p7kw_188";
        columnHeaders = "_columnHeaders_1p7kw_197";
        columnHeaderLabel = "_columnHeaderLabel_1p7kw_204";
        columnsContainer = "_columnsContainer_1p7kw_210";
        columnItem = "_columnItem_1p7kw_219";
        columnInputWrapper = "_columnInputWrapper_1p7kw_226";
        columnTypeWrapper = "_columnTypeWrapper_1p7kw_232";
        inputError = "_inputError_1p7kw_237";
        columnErrorMessage = "_columnErrorMessage_1p7kw_244";
        footer = "_footer_1p7kw_250";
        fileSelectedContainer = "_fileSelectedContainer_1p7kw_257";
        uploadDemo = "_uploadDemo_1p7kw_264";
        uploadIcon = "_uploadIcon_1p7kw_290";
        fileName = "_fileName_1p7kw_294";
        AddDataTableModal_vue_vue_type_style_index_0_lang_module_default = {
          header,
          content,
          selectionContent,
          radioGroup,
          uploadSection,
          uploadingMessage,
          importContent,
          successNotice,
          columnHeaders,
          columnHeaderLabel,
          columnsContainer,
          columnItem,
          columnInputWrapper,
          columnTypeWrapper,
          inputError,
          columnErrorMessage,
          footer,
          fileSelectedContainer,
          uploadDemo,
          uploadIcon,
          fileName
        }; //#endregion
        //#region src/features/core/dataTable/components/AddDataTableModal.vue
        cssModules = {
          "$style": AddDataTableModal_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", AddDataTableModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(AddDataTableModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();
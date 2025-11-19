;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./truncate-legacy-Bk9bFklR.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var __commonJS, require__arrayMap, require__baseIteratee, require__getAllKeysIn, require__basePickBy, require_pickBy;
    return {
      setters: [function (_chunkLegacy001Js) {
        __commonJS = _chunkLegacy001Js.t;
      }, function (_truncateLegacy00hJs) {
        require__arrayMap = _truncateLegacy00hJs.c;
      }, function (_constantsLegacy00NJs) {
        require__baseIteratee = _constantsLegacy00NJs.Rr;
        require__getAllKeysIn = _constantsLegacy00NJs.Vr;
        require__basePickBy = _constantsLegacy00NJs.kr;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pickBy.js
        _export("t", require_pickBy = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pickBy.js": (exports, module) => {
            var arrayMap = require__arrayMap(),
              baseIteratee = require__baseIteratee(),
              basePickBy = require__basePickBy(),
              getAllKeysIn = require__getAllKeysIn();
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
              var props = arrayMap(getAllKeysIn(object), function (prop) {
                return [prop];
              });
              predicate = baseIteratee(predicate);
              return basePickBy(object, props, function (value, path) {
                return predicate(value, path[0]);
              });
            }
            module.exports = pickBy;
          }
        })); //#endregion
      }
    };
  });
})();
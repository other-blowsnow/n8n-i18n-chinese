;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./truncate-legacy-Bk9bFklR.js"], function (_export, _context) {
    "use strict";

    var __toESM, __commonJS, ref, require_isObject, require__root, require_isSymbol, require__trimmedEndIndex, require__baseTrim, require_toNumber, require_now, require_debounce, import_debounce;
    function useDebounce() {
      const debounceCache = ref(/* @__PURE__ */new WeakMap());
      const debounce$1 = (fn, options) => {
        const {
          trailing,
          debounceTime
        } = options;
        let debouncedFn = debounceCache.value.get(fn);
        if (debouncedFn === void 0) {
          debouncedFn = (0, import_debounce.default)(async (...args) => {
            return fn(...args);
          }, debounceTime, trailing ? {
            trailing
          } : {
            leading: true
          });
          debounceCache.value.set(fn, debouncedFn);
        }
        return debouncedFn;
      };
      const callDebounced = (fn, options, ...inputParameters) => {
        return debounce$1(fn, options)(...inputParameters);
      };
      return {
        debounce: debounce$1,
        callDebounced
      };
    }

    //#endregion
    _export("t", useDebounce);
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
        __commonJS = _chunkLegacy001Js.t;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_MapCacheLegacy005Js) {
        require_isObject = _MapCacheLegacy005Js.c;
        require__root = _MapCacheLegacy005Js.f;
      }, function (_truncateLegacy00hJs) {
        require_isSymbol = _truncateLegacy00hJs.d;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js
        require__trimmedEndIndex = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js": (exports, module) => {
            /** Used to match a single whitespace character. */
            var reWhitespace = /\s/;
            /**
            * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
            * character of `string`.
            *
            * @private
            * @param {string} string The string to inspect.
            * @returns {number} Returns the index of the last non-whitespace character.
            */
            function trimmedEndIndex$1(string) {
              var index = string.length;
              while (index-- && reWhitespace.test(string.charAt(index)));
              return index;
            }
            module.exports = trimmedEndIndex$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js
        require__baseTrim = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js": (exports, module) => {
            var trimmedEndIndex = require__trimmedEndIndex();
            /** Used to match leading whitespace. */
            var reTrimStart = /^\s+/;
            /**
            * The base implementation of `_.trim`.
            *
            * @private
            * @param {string} string The string to trim.
            * @returns {string} Returns the trimmed string.
            */
            function baseTrim$1(string) {
              return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
            }
            module.exports = baseTrim$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js
        _export("r", require_toNumber = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js": (exports, module) => {
            var baseTrim = require__baseTrim(),
              isObject$1 = require_isObject(),
              isSymbol = require_isSymbol();
            /** Used as references for various `Number` constants. */
            var NAN = NaN;
            /** Used to detect bad signed hexadecimal string values. */
            var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
            /** Used to detect binary string values. */
            var reIsBinary = /^0b[01]+$/i;
            /** Used to detect octal string values. */
            var reIsOctal = /^0o[0-7]+$/i;
            /** Built-in method references without a dependency on `root`. */
            var freeParseInt = parseInt;
            /**
            * Converts `value` to a number.
            *
            * @static
            * @memberOf _
            * @since 4.0.0
            * @category Lang
            * @param {*} value The value to process.
            * @returns {number} Returns the number.
            * @example
            *
            * _.toNumber(3.2);
            * // => 3.2
            *
            * _.toNumber(Number.MIN_VALUE);
            * // => 5e-324
            *
            * _.toNumber(Infinity);
            * // => Infinity
            *
            * _.toNumber('3.2');
            * // => 3.2
            */
            function toNumber$1(value) {
              if (typeof value == "number") return value;
              if (isSymbol(value)) return NAN;
              if (isObject$1(value)) {
                var other = typeof value.valueOf == "function" ? value.valueOf() : value;
                value = isObject$1(other) ? other + "" : other;
              }
              if (typeof value != "string") return value === 0 ? value : +value;
              value = baseTrim(value);
              var isBinary = reIsBinary.test(value);
              return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
            }
            module.exports = toNumber$1;
          }
        })); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js
        require_now = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js": (exports, module) => {
            var root = require__root();
            /**
            * Gets the timestamp of the number of milliseconds that have elapsed since
            * the Unix epoch (1 January 1970 00:00:00 UTC).
            *
            * @static
            * @memberOf _
            * @since 2.4.0
            * @category Date
            * @returns {number} Returns the timestamp.
            * @example
            *
            * _.defer(function(stamp) {
            *   console.log(_.now() - stamp);
            * }, _.now());
            * // => Logs the number of milliseconds it took for the deferred invocation.
            */
            var now$1 = function () {
              return root.Date.now();
            };
            module.exports = now$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js
        _export("n", require_debounce = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js": (exports, module) => {
            var isObject = require_isObject(),
              now = require_now(),
              toNumber = require_toNumber();
            /** Error message constants. */
            var FUNC_ERROR_TEXT = "Expected a function";
            var nativeMax = Math.max,
              nativeMin = Math.min;
            /**
            * Creates a debounced function that delays invoking `func` until after `wait`
            * milliseconds have elapsed since the last time the debounced function was
            * invoked. The debounced function comes with a `cancel` method to cancel
            * delayed `func` invocations and a `flush` method to immediately invoke them.
            * Provide `options` to indicate whether `func` should be invoked on the
            * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
            * with the last arguments provided to the debounced function. Subsequent
            * calls to the debounced function return the result of the last `func`
            * invocation.
            *
            * **Note:** If `leading` and `trailing` options are `true`, `func` is
            * invoked on the trailing edge of the timeout only if the debounced function
            * is invoked more than once during the `wait` timeout.
            *
            * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
            * until to the next tick, similar to `setTimeout` with a timeout of `0`.
            *
            * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
            * for details over the differences between `_.debounce` and `_.throttle`.
            *
            * @static
            * @memberOf _
            * @since 0.1.0
            * @category Function
            * @param {Function} func The function to debounce.
            * @param {number} [wait=0] The number of milliseconds to delay.
            * @param {Object} [options={}] The options object.
            * @param {boolean} [options.leading=false]
            *  Specify invoking on the leading edge of the timeout.
            * @param {number} [options.maxWait]
            *  The maximum time `func` is allowed to be delayed before it's invoked.
            * @param {boolean} [options.trailing=true]
            *  Specify invoking on the trailing edge of the timeout.
            * @returns {Function} Returns the new debounced function.
            * @example
            *
            * // Avoid costly calculations while the window size is in flux.
            * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
            *
            * // Invoke `sendMail` when clicked, debouncing subsequent calls.
            * jQuery(element).on('click', _.debounce(sendMail, 300, {
            *   'leading': true,
            *   'trailing': false
            * }));
            *
            * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
            * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
            * var source = new EventSource('/stream');
            * jQuery(source).on('message', debounced);
            *
            * // Cancel the trailing debounced invocation.
            * jQuery(window).on('popstate', debounced.cancel);
            */
            function debounce(func, wait, options) {
              var lastArgs,
                lastThis,
                maxWait,
                result,
                timerId,
                lastCallTime,
                lastInvokeTime = 0,
                leading = false,
                maxing = false,
                trailing = true;
              if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
              wait = toNumber(wait) || 0;
              if (isObject(options)) {
                leading = !!options.leading;
                maxing = "maxWait" in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing = "trailing" in options ? !!options.trailing : trailing;
              }
              function invokeFunc(time) {
                var args = lastArgs,
                  thisArg = lastThis;
                lastArgs = lastThis = void 0;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
              }
              function leadingEdge(time) {
                lastInvokeTime = time;
                timerId = setTimeout(timerExpired, wait);
                return leading ? invokeFunc(time) : result;
              }
              function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime,
                  timeSinceLastInvoke = time - lastInvokeTime,
                  timeWaiting = wait - timeSinceLastCall;
                return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
              }
              function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime,
                  timeSinceLastInvoke = time - lastInvokeTime;
                return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
              }
              function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) return trailingEdge(time);
                timerId = setTimeout(timerExpired, remainingWait(time));
              }
              function trailingEdge(time) {
                timerId = void 0;
                if (trailing && lastArgs) return invokeFunc(time);
                lastArgs = lastThis = void 0;
                return result;
              }
              function cancel() {
                if (timerId !== void 0) clearTimeout(timerId);
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = void 0;
              }
              function flush() {
                return timerId === void 0 ? result : trailingEdge(now());
              }
              function debounced() {
                var time = now(),
                  isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                  if (timerId === void 0) return leadingEdge(lastCallTime);
                  if (maxing) {
                    clearTimeout(timerId);
                    timerId = setTimeout(timerExpired, wait);
                    return invokeFunc(lastCallTime);
                  }
                }
                if (timerId === void 0) timerId = setTimeout(timerExpired, wait);
                return result;
              }
              debounced.cancel = cancel;
              debounced.flush = flush;
              return debounced;
            }
            module.exports = debounce;
          }
        })); //#endregion
        //#region src/app/composables/useDebounce.ts
        import_debounce = /* @__PURE__ */__toESM(require_debounce());
      }
    };
  });
})();
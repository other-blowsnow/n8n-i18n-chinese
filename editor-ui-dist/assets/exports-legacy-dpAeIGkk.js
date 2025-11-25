;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js"], function (_export, _context) {
    "use strict";

    var init_dist, global, DEBUG_BUILD, GLOBAL_OBJ, SDK_VERSION, CONSOLE_LEVELS, PREFIX, originalConsoleMethods, debug, STACKTRACE_FRAME_LIMIT, UNKNOWN_FUNCTION, WEBPACK_ERROR_REGEXP, STRIP_FRAME_REGEXP, defaultFunctionName, objectToString, WINDOW, DEFAULT_MAX_STRING_LENGTH, ONE_SECOND_IN_MS, _cachedTimestampInSeconds, SCOPE_SPAN_FIELD, DEFAULT_MAX_BREADCRUMBS, Scope, AsyncContextStack, SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE, SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME, SEMANTIC_ATTRIBUTE_PROFILE_ID, SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME, SPAN_STATUS_UNSET, SPAN_STATUS_OK, SCOPE_ON_START_SPAN_FIELD, ISOLATION_SCOPE_ON_START_SPAN_FIELD, SENTRY_BAGGAGE_KEY_PREFIX_REGEX, TRACE_FLAG_NONE, TRACE_FLAG_SAMPLED, hasShownSpanDropWarning, CHILD_SPANS_FIELD, ROOT_SPAN_FIELD, DEFAULT_ENVIRONMENT, ORG_ID_REGEX, DSN_REGEX, FROZEN_DSC_FIELD, STATE_PENDING, STATE_RESOLVED, STATE_REJECTED, SyncPromise, parsedStackResults, lastKeysCount, cachedFilenameDebugIds, captureContextKeys;
    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/carrier.js
    /**
    * An object that contains globally accessible properties and maintains a scope stack.
    * @hidden
    */
    /**
    * Returns the global shim registry.
    *
    * FIXME: This function is problematic, because despite always returning a valid Carrier,
    * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
    * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
    **/
    function getMainCarrier() {
      getSentryCarrier(GLOBAL_OBJ);
      return GLOBAL_OBJ;
    }
    /** Will either get the existing sentry carrier, or create a new one. */
    function getSentryCarrier(carrier) {
      const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
      __SENTRY__.version = __SENTRY__.version || "9.42.1";
      return __SENTRY__[SDK_VERSION] = __SENTRY__["9.42.1"] || {};
    }
    /**
    * Returns a global singleton contained in the global `__SENTRY__[]` object.
    *
    * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
    * function and added to the `__SENTRY__` object.
    *
    * @param name name of the global singleton on __SENTRY__
    * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
    * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
    * @returns the singleton
    */
    function getGlobalSingleton(name, creator, obj = GLOBAL_OBJ) {
      const __SENTRY__ = obj.__SENTRY__ = obj.__SENTRY__ || {};
      const carrier = __SENTRY__[SDK_VERSION] = __SENTRY__["9.42.1"] || {};
      return carrier[name] || (carrier[name] = creator());
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/debug-logger.js
    /**
    * A Sentry Logger instance.
    *
    * @deprecated Use {@link debug} instead with the {@link SentryDebugLogger} type.
    */

    /**
    * Temporarily disable sentry console instrumentations.
    *
    * @param callback The function to run against the original `console` messages
    * @returns The results of the callback
    */
    function consoleSandbox(callback) {
      if (!("console" in GLOBAL_OBJ)) return callback();
      const console$1 = GLOBAL_OBJ.console;
      const wrappedFuncs = {};
      const wrappedLevels = Object.keys(originalConsoleMethods);
      wrappedLevels.forEach(level => {
        const originalConsoleMethod = originalConsoleMethods[level];
        wrappedFuncs[level] = console$1[level];
        console$1[level] = originalConsoleMethod;
      });
      try {
        return callback();
      } finally {
        wrappedLevels.forEach(level => {
          console$1[level] = wrappedFuncs[level];
        });
      }
    }
    function enable() {
      _getLoggerSettings().enabled = true;
    }
    function disable() {
      _getLoggerSettings().enabled = false;
    }
    function isEnabled() {
      return _getLoggerSettings().enabled;
    }
    function log(...args) {
      _maybeLog("log", ...args);
    }
    function warn(...args) {
      _maybeLog("warn", ...args);
    }
    function error(...args) {
      _maybeLog("error", ...args);
    }
    function _maybeLog(level, ...args) {
      if (!DEBUG_BUILD) return;
      if (isEnabled()) consoleSandbox(() => {
        GLOBAL_OBJ.console[level](`${PREFIX}[${level}]:`, ...args);
      });
    }
    function _getLoggerSettings() {
      if (!DEBUG_BUILD) return {
        enabled: false
      };
      return getGlobalSingleton("loggerSettings", () => ({
        enabled: false
      }));
    }
    /**
    * This is a logger singleton which either logs things or no-ops if logging is not enabled.
    */

    /**
    * Creates a stack parser with the supplied line parsers
    *
    * StackFrames are returned in the correct order for Sentry Exception
    * frames and with Sentry SDK internal frames removed from the top and bottom
    *
    */
    function createStackParser(...parsers) {
      const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map(p => p[1]);
      return (stack, skipFirstLines = 0, framesToPop = 0) => {
        const frames = [];
        const lines = stack.split("\n");
        for (let i = skipFirstLines; i < lines.length; i++) {
          const line = lines[i];
          if (line.length > 1024) continue;
          const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
          if (cleanedLine.match(/\S*Error: /)) continue;
          for (const parser of sortedParsers) {
            const frame = parser(cleanedLine);
            if (frame) {
              frames.push(frame);
              break;
            }
          }
          if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) break;
        }
        return stripSentryFramesAndReverse(frames.slice(framesToPop));
      };
    }
    /**
    * Gets a stack parser implementation from Options.stackParser
    * @see Options
    *
    * If options contains an array of line parsers, it is converted into a parser
    */
    function stackParserFromStackParserOptions(stackParser) {
      if (Array.isArray(stackParser)) return createStackParser(...stackParser);
      return stackParser;
    }
    /**
    * Removes Sentry frames from the top and bottom of the stack if present and enforces a limit of max number of frames.
    * Assumes stack input is ordered from top to bottom and returns the reverse representation so call site of the
    * function that caused the crash is the last frame in the array.
    * @hidden
    */
    function stripSentryFramesAndReverse(stack) {
      if (!stack.length) return [];
      const localStack = Array.from(stack);
      if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) localStack.pop();
      localStack.reverse();
      if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
        localStack.pop();
        if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) localStack.pop();
      }
      return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map(frame => ({
        ...frame,
        filename: frame.filename || getLastStackFrame(localStack).filename,
        function: frame.function || "?"
      }));
    }
    function getLastStackFrame(arr) {
      return arr[arr.length - 1] || {};
    }
    /**
    * Safely extract function name from itself
    */
    function getFunctionName(fn) {
      try {
        if (!fn || typeof fn !== "function") return defaultFunctionName;
        return fn.name || defaultFunctionName;
      } catch {
        return defaultFunctionName;
      }
    }
    /**
    * Get's stack frames from an event without needing to check for undefined properties.
    */
    function getFramesFromEvent(event) {
      const exception = event.exception;
      if (exception) {
        const frames = [];
        try {
          exception.values.forEach(value => {
            if (value.stacktrace.frames) frames.push(...value.stacktrace.frames);
          });
          return frames;
        } catch {
          return;
        }
      }
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/is.js

    /**
    * Checks whether given value's type is one of a few Error or Error-like
    * {@link isError}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isError(wat) {
      switch (objectToString.call(wat)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
          return true;
        default:
          return isInstanceOf(wat, Error);
      }
    }
    /**
    * Checks whether given value is an instance of the given built-in class.
    *
    * @param wat The value to be checked
    * @param className
    * @returns A boolean representing the result.
    */
    function isBuiltin(wat, className) {
      return objectToString.call(wat) === `[object ${className}]`;
    }
    /**
    * Checks whether given value's type is ErrorEvent
    * {@link isErrorEvent}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isErrorEvent(wat) {
      return isBuiltin(wat, "ErrorEvent");
    }
    /**
    * Checks whether given value's type is DOMError
    * {@link isDOMError}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isDOMError(wat) {
      return isBuiltin(wat, "DOMError");
    }
    /**
    * Checks whether given value's type is DOMException
    * {@link isDOMException}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isDOMException(wat) {
      return isBuiltin(wat, "DOMException");
    }
    /**
    * Checks whether given value's type is a string
    * {@link isString}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isString(wat) {
      return isBuiltin(wat, "String");
    }
    /**
    * Checks whether given string is parameterized
    * {@link isParameterizedString}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isParameterizedString(wat) {
      return typeof wat === "object" && wat !== null && "__sentry_template_string__" in wat && "__sentry_template_values__" in wat;
    }
    /**
    * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
    * {@link isPrimitive}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isPrimitive(wat) {
      return wat === null || isParameterizedString(wat) || typeof wat !== "object" && typeof wat !== "function";
    }
    /**
    * Checks whether given value's type is an object literal, or a class instance.
    * {@link isPlainObject}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isPlainObject(wat) {
      return isBuiltin(wat, "Object");
    }
    /**
    * Checks whether given value's type is an Event instance
    * {@link isEvent}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isEvent(wat) {
      return typeof Event !== "undefined" && isInstanceOf(wat, Event);
    }
    /**
    * Checks whether given value's type is an Element instance
    * {@link isElement}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isElement(wat) {
      return typeof Element !== "undefined" && isInstanceOf(wat, Element);
    }
    /**
    * Checks whether given value's type is an regexp
    * {@link isRegExp}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isRegExp(wat) {
      return isBuiltin(wat, "RegExp");
    }
    /**
    * Checks whether given value has a then function.
    * @param wat A value to be checked.
    */
    function isThenable(wat) {
      return Boolean(wat?.then && typeof wat.then === "function");
    }
    /**
    * Checks whether given value's type is a SyntheticEvent
    * {@link isSyntheticEvent}.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isSyntheticEvent(wat) {
      return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
    }
    /**
    * Checks whether given value's type is an instance of provided constructor.
    * {@link isInstanceOf}.
    *
    * @param wat A value to be checked.
    * @param base A constructor to be used in a check.
    * @returns A boolean representing the result.
    */
    function isInstanceOf(wat, base) {
      try {
        return wat instanceof base;
      } catch {
        return false;
      }
    }
    /**
    * Checks whether given value's type is a Vue ViewModel.
    *
    * @param wat A value to be checked.
    * @returns A boolean representing the result.
    */
    function isVueViewModel(wat) {
      return !!(typeof wat === "object" && wat !== null && (wat.__isVue || wat._isVue));
    }
    /**
    * Checks whether the given parameter is a Standard Web API Request instance.
    *
    * Returns false if Request is not available in the current runtime.
    */
    function isRequest(request) {
      return typeof Request !== "undefined" && isInstanceOf(request, Request);
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/browser.js

    /**
    * Given a child DOM element, returns a query-selector statement describing that
    * and its ancestors
    * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
    * @returns generated DOM path
    */
    function htmlTreeAsString(elem, options = {}) {
      if (!elem) return "<unknown>";
      try {
        let currentElem = elem;
        const MAX_TRAVERSE_HEIGHT = 5;
        const out = [];
        let height = 0;
        let len = 0;
        const separator = " > ";
        const sepLength = 3;
        let nextStr;
        const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
        const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
          nextStr = _htmlElementAsString(currentElem, keyAttrs);
          if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) break;
          out.push(nextStr);
          len += nextStr.length;
          currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
      } catch {
        return "<unknown>";
      }
    }
    /**
    * Returns a simple, query-selector representation of a DOM element
    * e.g. [HTMLElement] => input#foo.btn[name=baz]
    * @returns generated DOM path
    */
    function _htmlElementAsString(el, keyAttrs) {
      const elem = el;
      const out = [];
      if (!elem?.tagName) return "";
      if (WINDOW.HTMLElement) {
        if (elem instanceof HTMLElement && elem.dataset) {
          if (elem.dataset["sentryComponent"]) return elem.dataset["sentryComponent"];
          if (elem.dataset["sentryElement"]) return elem.dataset["sentryElement"];
        }
      }
      out.push(elem.tagName.toLowerCase());
      const keyAttrPairs = keyAttrs?.length ? keyAttrs.filter(keyAttr => elem.getAttribute(keyAttr)).map(keyAttr => [keyAttr, elem.getAttribute(keyAttr)]) : null;
      if (keyAttrPairs?.length) keyAttrPairs.forEach(keyAttrPair => {
        out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
      });else {
        if (elem.id) out.push(`#${elem.id}`);
        const className = elem.className;
        if (className && isString(className)) {
          const classes = className.split(/\s+/);
          for (const c of classes) out.push(`.${c}`);
        }
      }
      for (const k of ["aria-label", "type", "name", "title", "alt"]) {
        const attr = elem.getAttribute(k);
        if (attr) out.push(`[${k}="${attr}"]`);
      }
      return out.join("");
    }
    /**
    * A safe form of location.href
    */
    function getLocationHref() {
      try {
        return WINDOW.document.location.href;
      } catch {
        return "";
      }
    }
    /**
    * Given a DOM element, traverses up the tree until it finds the first ancestor node
    * that has the `data-sentry-component` or `data-sentry-element` attribute with `data-sentry-component` taking
    * precedence. This attribute is added at build-time by projects that have the component name annotation plugin installed.
    *
    * @returns a string representation of the component for the provided DOM element, or `null` if not found
    */
    function getComponentName(elem) {
      if (!WINDOW.HTMLElement) return null;
      let currentElem = elem;
      const MAX_TRAVERSE_HEIGHT = 5;
      for (let i = 0; i < MAX_TRAVERSE_HEIGHT; i++) {
        if (!currentElem) return null;
        if (currentElem instanceof HTMLElement) {
          if (currentElem.dataset["sentryComponent"]) return currentElem.dataset["sentryComponent"];
          if (currentElem.dataset["sentryElement"]) return currentElem.dataset["sentryElement"];
        }
        currentElem = currentElem.parentNode;
      }
      return null;
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/string.js
    /**
    * Truncates given string to the maximum characters count
    *
    * @param str An object that contains serializable values
    * @param max Maximum number of characters in truncated string (0 = unlimited)
    * @returns string Encoded
    */
    function truncate(str, max = 0) {
      if (typeof str !== "string" || max === 0) return str;
      return str.length <= max ? str : `${str.slice(0, max)}...`;
    }
    /**
    * Join values in array
    * @param input array of values to be joined together
    * @param delimiter string to be placed in-between values
    * @returns Joined values
    */
    function safeJoin(input, delimiter) {
      if (!Array.isArray(input)) return "";
      const output = [];
      for (let i = 0; i < input.length; i++) {
        const value = input[i];
        try {
          if (isVueViewModel(value)) output.push("[VueViewModel]");else output.push(String(value));
        } catch {
          output.push("[value cannot be serialized]");
        }
      }
      return output.join(delimiter);
    }
    /**
    * Checks if the given value matches a regex or string
    *
    * @param value The string to test
    * @param pattern Either a regex or a string against which `value` will be matched
    * @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
    * `pattern` if it contains `pattern`. Only applies to string-type patterns.
    */
    function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
      if (!isString(value)) return false;
      if (isRegExp(pattern)) return pattern.test(value);
      if (isString(pattern)) return requireExactStringMatch ? value === pattern : value.includes(pattern);
      return false;
    }
    /**
    * Test the given string against an array of strings and regexes. By default, string matching is done on a
    * substring-inclusion basis rather than a strict equality basis
    *
    * @param testString The string to test
    * @param patterns The patterns against which to test the string
    * @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
    * count. If false, `testString` will match a string pattern if it contains that pattern.
    * @returns
    */
    function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
      return patterns.some(pattern => isMatchingPattern(testString, pattern, requireExactStringMatch));
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/object.js
    /**
    * Replace a method in an object with a wrapped version of itself.
    *
    * If the method on the passed object is not a function, the wrapper will not be applied.
    *
    * @param source An object that contains a method to be wrapped.
    * @param name The name of the method to be wrapped.
    * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
    * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
    * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
    * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
    * @returns void
    */
    function fill(source, name, replacementFactory) {
      if (!(name in source)) return;
      const original = source[name];
      if (typeof original !== "function") return;
      const wrapped = replacementFactory(original);
      if (typeof wrapped === "function") markFunctionWrapped(wrapped, original);
      try {
        source[name] = wrapped;
      } catch {
        DEBUG_BUILD && debug.log(`Failed to replace method "${name}" in object`, source);
      }
    }
    /**
    * Defines a non-enumerable property on the given object.
    *
    * @param obj The object on which to set the property
    * @param name The name of the property to be set
    * @param value The value to which to set the property
    */
    function addNonEnumerableProperty(obj, name, value) {
      try {
        Object.defineProperty(obj, name, {
          value,
          writable: true,
          configurable: true
        });
      } catch {
        DEBUG_BUILD && debug.log(`Failed to add non-enumerable property "${name}" to object`, obj);
      }
    }
    /**
    * Remembers the original function on the wrapped function and
    * patches up the prototype.
    *
    * @param wrapped the wrapper function
    * @param original the original function that gets wrapped
    */
    function markFunctionWrapped(wrapped, original) {
      try {
        wrapped.prototype = original.prototype = original.prototype || {};
        addNonEnumerableProperty(wrapped, "__sentry_original__", original);
      } catch {}
    }
    /**
    * This extracts the original function if available.  See
    * `markFunctionWrapped` for more information.
    *
    * @param func the function to unwrap
    * @returns the unwrapped version of the function if available.
    */
    function getOriginalFunction(func) {
      return func.__sentry_original__;
    }
    /**
    * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
    * non-enumerable properties attached.
    *
    * @param value Initial source that we have to transform in order for it to be usable by the serializer
    * @returns An Event or Error turned into an object - or the value argument itself, when value is neither an Event nor
    *  an Error.
    */
    function convertToPlainObject(value) {
      if (isError(value)) return {
        message: value.message,
        name: value.name,
        stack: value.stack,
        ...getOwnProperties(value)
      };else if (isEvent(value)) {
        const newObj = {
          type: value.type,
          target: serializeEventTarget(value.target),
          currentTarget: serializeEventTarget(value.currentTarget),
          ...getOwnProperties(value)
        };
        if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) newObj.detail = value.detail;
        return newObj;
      } else return value;
    }
    /** Creates a string representation of the target of an `Event` object */
    function serializeEventTarget(target) {
      try {
        return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
      } catch {
        return "<unknown>";
      }
    }
    /** Filters out all but an object's own properties */
    function getOwnProperties(obj) {
      if (typeof obj === "object" && obj !== null) {
        const extractedProps = {};
        for (const property in obj) if (Object.prototype.hasOwnProperty.call(obj, property)) extractedProps[property] = obj[property];
        return extractedProps;
      } else return {};
    }
    /**
    * Given any captured exception, extract its keys and create a sorted
    * and truncated list that will be used inside the event message.
    * eg. `Non-error exception captured with keys: foo, bar, baz`
    */
    function extractExceptionKeysForMessage(exception, maxLength = 40) {
      const keys = Object.keys(convertToPlainObject(exception));
      keys.sort();
      const firstKey = keys[0];
      if (!firstKey) return "[object has no keys]";
      if (firstKey.length >= maxLength) return truncate(firstKey, maxLength);
      for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        const serialized = keys.slice(0, includedKeys).join(", ");
        if (serialized.length > maxLength) continue;
        if (includedKeys === keys.length) return serialized;
        return truncate(serialized, maxLength);
      }
      return "";
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/misc.js
    function getCrypto() {
      const gbl = GLOBAL_OBJ;
      return gbl.crypto || gbl.msCrypto;
    }
    /**
    * UUID4 generator
    * @param crypto Object that provides the crypto API.
    * @returns string Generated UUID4.
    */
    function uuid4(crypto = getCrypto()) {
      let getRandomByte = () => Math.random() * 16;
      try {
        if (crypto?.randomUUID) return crypto.randomUUID().replace(/-/g, "");
        if (crypto?.getRandomValues) getRandomByte = () => {
          const typedArray = new Uint8Array(1);
          crypto.getRandomValues(typedArray);
          return typedArray[0];
        };
      } catch {}
      return "10000000100040008000100000000000".replace(/[018]/g, c => (c ^ (getRandomByte() & 15) >> c / 4).toString(16));
    }
    function getFirstException(event) {
      return event.exception?.values?.[0];
    }
    /**
    * Extracts either message or type+value from an event that can be used for user-facing logs
    * @returns event's description
    */
    function getEventDescription(event) {
      const {
        message,
        event_id: eventId
      } = event;
      if (message) return message;
      const firstException = getFirstException(event);
      if (firstException) {
        if (firstException.type && firstException.value) return `${firstException.type}: ${firstException.value}`;
        return firstException.type || firstException.value || eventId || "<unknown>";
      }
      return eventId || "<unknown>";
    }
    /**
    * Adds exception values, type and value to an synthetic Exception.
    * @param event The event to modify.
    * @param value Value of the exception.
    * @param type Type of the exception.
    * @hidden
    */
    function addExceptionTypeValue(event, value, type) {
      const exception = event.exception = event.exception || {};
      const values = exception.values = exception.values || [];
      const firstException = values[0] = values[0] || {};
      if (!firstException.value) firstException.value = value || "";
      if (!firstException.type) firstException.type = type || "Error";
    }
    /**
    * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
    *
    * @param event The event to modify.
    * @param newMechanism Mechanism data to add to the event.
    * @hidden
    */
    function addExceptionMechanism(event, newMechanism) {
      const firstException = getFirstException(event);
      if (!firstException) return;
      const defaultMechanism = {
        type: "generic",
        handled: true
      };
      const currentMechanism = firstException.mechanism;
      firstException.mechanism = {
        ...defaultMechanism,
        ...currentMechanism,
        ...newMechanism
      };
      if (newMechanism && "data" in newMechanism) {
        const mergedData = {
          ...currentMechanism?.data,
          ...newMechanism.data
        };
        firstException.mechanism.data = mergedData;
      }
    }
    /**
    * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
    * in question), and marks it captured if not.
    *
    * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
    * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
    * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
    * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
    * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
    * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
    * see it.
    *
    * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
    * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
    * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
    * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
    * must be done before the exception captured.
    *
    * @param A thrown exception to check or flag as having been seen
    * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
    */
    function checkOrSetAlreadyCaught(exception) {
      if (isAlreadyCaptured(exception)) return true;
      try {
        addNonEnumerableProperty(exception, "__sentry_captured__", true);
      } catch {}
      return false;
    }
    function isAlreadyCaptured(exception) {
      try {
        return exception.__sentry_captured__;
      } catch {}
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/time.js

    /**
    * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
    * for accessing a high-resolution monotonic clock.
    */
    /**
    * Returns a timestamp in seconds since the UNIX epoch using the Date API.
    */
    function dateTimestampInSeconds() {
      return Date.now() / ONE_SECOND_IN_MS;
    }
    /**
    * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
    * support the API.
    *
    * Wrapping the native API works around differences in behavior from different browsers.
    */
    function createUnixTimestampInSecondsFunc() {
      const {
        performance
      } = GLOBAL_OBJ;
      if (!performance?.now || !performance.timeOrigin) return dateTimestampInSeconds;
      const timeOrigin = performance.timeOrigin;
      return () => {
        return (timeOrigin + performance.now()) / ONE_SECOND_IN_MS;
      };
    }
    /**
    * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
    * availability of the Performance API.
    *
    * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
    * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
    * skew can grow to arbitrary amounts like days, weeks or months.
    * See https://github.com/getsentry/sentry-javascript/issues/2590.
    */
    function timestampInSeconds() {
      return (_cachedTimestampInSeconds ?? (_cachedTimestampInSeconds = createUnixTimestampInSecondsFunc()))();
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/session.js
    /**
    * Creates a new `Session` object by setting certain default parameters. If optional @param context
    * is passed, the passed properties are applied to the session object.
    *
    * @param context (optional) additional properties to be applied to the returned session object
    *
    * @returns a new `Session` object
    */
    function makeSession(context) {
      const startingTime = timestampInSeconds();
      const session = {
        sid: uuid4(),
        init: true,
        timestamp: startingTime,
        started: startingTime,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: false,
        toJSON: () => sessionToJSON(session)
      };
      if (context) updateSession(session, context);
      return session;
    }
    /**
    * Updates a session object with the properties passed in the context.
    *
    * Note that this function mutates the passed object and returns void.
    * (Had to do this instead of returning a new and updated session because closing and sending a session
    * makes an update to the session after it was passed to the sending logic.
    * @see Client.captureSession )
    *
    * @param session the `Session` to update
    * @param context the `SessionContext` holding the properties that should be updated in @param session
    */
    function updateSession(session, context = {}) {
      if (context.user) {
        if (!session.ipAddress && context.user.ip_address) session.ipAddress = context.user.ip_address;
        if (!session.did && !context.did) session.did = context.user.id || context.user.email || context.user.username;
      }
      session.timestamp = context.timestamp || timestampInSeconds();
      if (context.abnormal_mechanism) session.abnormal_mechanism = context.abnormal_mechanism;
      if (context.ignoreDuration) session.ignoreDuration = context.ignoreDuration;
      if (context.sid) session.sid = context.sid.length === 32 ? context.sid : uuid4();
      if (context.init !== void 0) session.init = context.init;
      if (!session.did && context.did) session.did = `${context.did}`;
      if (typeof context.started === "number") session.started = context.started;
      if (session.ignoreDuration) session.duration = void 0;else if (typeof context.duration === "number") session.duration = context.duration;else {
        const duration = session.timestamp - session.started;
        session.duration = duration >= 0 ? duration : 0;
      }
      if (context.release) session.release = context.release;
      if (context.environment) session.environment = context.environment;
      if (!session.ipAddress && context.ipAddress) session.ipAddress = context.ipAddress;
      if (!session.userAgent && context.userAgent) session.userAgent = context.userAgent;
      if (typeof context.errors === "number") session.errors = context.errors;
      if (context.status) session.status = context.status;
    }
    /**
    * Closes a session by setting its status and updating the session object with it.
    * Internally calls `updateSession` to update the passed session object.
    *
    * Note that this function mutates the passed session (@see updateSession for explanation).
    *
    * @param session the `Session` object to be closed
    * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
    *               this function will keep the previously set status, unless it was `'ok'` in which case
    *               it is changed to `'exited'`.
    */
    function closeSession(session, status) {
      let context = {};
      if (status) context = {
        status
      };else if (session.status === "ok") context = {
        status: "exited"
      };
      updateSession(session, context);
    }
    /**
    * Serializes a passed session object to a JSON object with a slightly different structure.
    * This is necessary because the Sentry backend requires a slightly different schema of a session
    * than the one the JS SDKs use internally.
    *
    * @param session the session to be converted
    *
    * @returns a JSON object of the passed session
    */
    function sessionToJSON(session) {
      return {
        sid: `${session.sid}`,
        init: session.init,
        started: (/* @__PURE__ */new Date(session.started * 1e3)).toISOString(),
        timestamp: (/* @__PURE__ */new Date(session.timestamp * 1e3)).toISOString(),
        status: session.status,
        errors: session.errors,
        did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
        duration: session.duration,
        abnormal_mechanism: session.abnormal_mechanism,
        attrs: {
          release: session.release,
          environment: session.environment,
          ip_address: session.ipAddress,
          user_agent: session.userAgent
        }
      };
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/merge.js
    /**
    * Shallow merge two objects.
    * Does not mutate the passed in objects.
    * Undefined/empty values in the merge object will overwrite existing values.
    *
    * By default, this merges 2 levels deep.
    */
    function merge(initialObj, mergeObj, levels = 2) {
      if (!mergeObj || typeof mergeObj !== "object" || levels <= 0) return mergeObj;
      if (initialObj && Object.keys(mergeObj).length === 0) return initialObj;
      const output = {
        ...initialObj
      };
      for (const key in mergeObj) if (Object.prototype.hasOwnProperty.call(mergeObj, key)) output[key] = merge(output[key], mergeObj[key], levels - 1);
      return output;
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/propagationContext.js
    /**
    * Generate a random, valid trace ID.
    */
    function generateTraceId() {
      return uuid4();
    }
    /**
    * Generate a random, valid span ID.
    */
    function generateSpanId() {
      return uuid4().substring(16);
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/spanOnScope.js

    /**
    * Set the active span for a given scope.
    * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
    */
    function _setSpanForScope(scope, span) {
      if (span) addNonEnumerableProperty(scope, SCOPE_SPAN_FIELD, span);else delete scope[SCOPE_SPAN_FIELD];
    }
    /**
    * Get the active span for a given scope.
    * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
    */
    function _getSpanForScope(scope) {
      return scope[SCOPE_SPAN_FIELD];
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/scope.js
    /**
    * Default value for maximum number of breadcrumbs added to an event.
    */

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/defaultScopes.js
    /** Get the default current scope. */
    function getDefaultCurrentScope() {
      return getGlobalSingleton("defaultCurrentScope", () => new Scope());
    }
    /** Get the default isolation scope. */
    function getDefaultIsolationScope() {
      return getGlobalSingleton("defaultIsolationScope", () => new Scope());
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js
    /**
    * This is an object that holds a stack of scopes.
    */

    /**
    * Get the global async context stack.
    * This will be removed during the v8 cycle and is only here to make migration easier.
    */
    function getAsyncContextStack() {
      const sentry = getSentryCarrier(getMainCarrier());
      return sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope());
    }
    function withScope$1(callback) {
      return getAsyncContextStack().withScope(callback);
    }
    function withSetScope(scope, callback) {
      const stack = getAsyncContextStack();
      return stack.withScope(() => {
        stack.getStackTop().scope = scope;
        return callback(scope);
      });
    }
    function withIsolationScope$1(callback) {
      return getAsyncContextStack().withScope(() => {
        return callback(getAsyncContextStack().getIsolationScope());
      });
    }
    /**
    * Get the stack-based async context strategy.
    */
    function getStackAsyncContextStrategy() {
      return {
        withIsolationScope: withIsolationScope$1,
        withScope: withScope$1,
        withSetScope,
        withSetIsolationScope: (_isolationScope, callback) => {
          return withIsolationScope$1(callback);
        },
        getCurrentScope: () => getAsyncContextStack().getScope(),
        getIsolationScope: () => getAsyncContextStack().getIsolationScope()
      };
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/asyncContext/index.js
    /**
    * Get the current async context strategy.
    * If none has been setup, the default will be used.
    */
    function getAsyncContextStrategy(carrier) {
      const sentry = getSentryCarrier(carrier);
      if (sentry.acs) return sentry.acs;
      return getStackAsyncContextStrategy();
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/currentScopes.js
    /**
    * Get the currently active scope.
    */
    function getCurrentScope() {
      return getAsyncContextStrategy(getMainCarrier()).getCurrentScope();
    }
    /**
    * Get the currently active isolation scope.
    * The isolation scope is active for the current execution context.
    */
    function getIsolationScope() {
      return getAsyncContextStrategy(getMainCarrier()).getIsolationScope();
    }
    /**
    * Get the global scope.
    * This scope is applied to _all_ events.
    */
    function getGlobalScope() {
      return getGlobalSingleton("globalScope", () => new Scope());
    }
    /**
    * Creates a new scope with and executes the given operation within.
    * The scope is automatically removed once the operation
    * finishes or throws.
    */
    /**
    * Either creates a new active scope, or sets the given scope as active scope in the given callback.
    */
    function withScope(...rest) {
      const acs = getAsyncContextStrategy(getMainCarrier());
      if (rest.length === 2) {
        const [scope, callback] = rest;
        if (!scope) return acs.withScope(callback);
        return acs.withSetScope(scope, callback);
      }
      return acs.withScope(rest[0]);
    }
    /**
    * Get the currently active client.
    */
    function getClient() {
      return getCurrentScope().getClient();
    }
    /**
    * Get a trace context for the given scope.
    */
    function getTraceContextFromScope(scope) {
      const {
        traceId,
        parentSpanId,
        propagationSpanId
      } = scope.getPropagationContext();
      const traceContext = {
        trace_id: traceId,
        span_id: propagationSpanId || generateSpanId()
      };
      if (parentSpanId) traceContext.parent_span_id = parentSpanId;
      return traceContext;
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/semanticAttributes.js
    /**
    * Use this attribute to represent the source of a span.
    * Should be one of: custom, url, route, view, component, task, unknown
    *
    */

    /** Store the scope & isolation scope for a span, which can the be used when it is finished. */
    function setCapturedScopesOnSpan(span, scope, isolationScope) {
      if (span) {
        addNonEnumerableProperty(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, isolationScope);
        addNonEnumerableProperty(span, SCOPE_ON_START_SPAN_FIELD, scope);
      }
    }
    /**
    * Grabs the scope and isolation scope off a span that were active when the span was started.
    */
    function getCapturedScopesOnSpan(span) {
      return {
        scope: span[SCOPE_ON_START_SPAN_FIELD],
        isolationScope: span[ISOLATION_SCOPE_ON_START_SPAN_FIELD]
      };
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/baggage.js

    /**
    * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
    * from it.
    *
    * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
    * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
    */
    function baggageHeaderToDynamicSamplingContext(baggageHeader) {
      const baggageObject = parseBaggageHeader(baggageHeader);
      if (!baggageObject) return;
      const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
        if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
          const nonPrefixedKey = key.slice(7);
          acc[nonPrefixedKey] = value;
        }
        return acc;
      }, {});
      if (Object.keys(dynamicSamplingContext).length > 0) return dynamicSamplingContext;else return;
    }
    /**
    * Take a baggage header and parse it into an object.
    */
    function parseBaggageHeader(baggageHeader) {
      if (!baggageHeader || !isString(baggageHeader) && !Array.isArray(baggageHeader)) return;
      if (Array.isArray(baggageHeader)) return baggageHeader.reduce((acc, curr) => {
        const currBaggageObject = baggageHeaderToObject(curr);
        Object.entries(currBaggageObject).forEach(([key, value]) => {
          acc[key] = value;
        });
        return acc;
      }, {});
      return baggageHeaderToObject(baggageHeader);
    }
    /**
    * Will parse a baggage header, which is a simple key-value map, into a flat object.
    *
    * @param baggageHeader The baggage header to parse.
    * @returns a flat object containing all the key-value pairs from `baggageHeader`.
    */
    function baggageHeaderToObject(baggageHeader) {
      return baggageHeader.split(",").map(baggageEntry => baggageEntry.split("=").map(keyOrValue => {
        try {
          return decodeURIComponent(keyOrValue.trim());
        } catch {
          return;
        }
      })).reduce((acc, [key, value]) => {
        if (key && value) acc[key] = value;
        return acc;
      }, {});
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/spanUtils.js

    /**
    * Convert a span to a trace context, which can be sent as the `trace` context in an event.
    * By default, this will only include trace_id, span_id & parent_span_id.
    * If `includeAllData` is true, it will also include data, op, status & origin.
    */
    function spanToTransactionTraceContext(span) {
      const {
        spanId: span_id,
        traceId: trace_id
      } = span.spanContext();
      const {
        data,
        op,
        parent_span_id,
        status,
        origin,
        links
      } = spanToJSON(span);
      return {
        parent_span_id,
        span_id,
        trace_id,
        data,
        op,
        status,
        origin,
        links
      };
    }
    /**
    * Convert a span to a trace context, which can be sent as the `trace` context in a non-transaction event.
    */
    function spanToTraceContext(span) {
      const {
        spanId,
        traceId: trace_id,
        isRemote
      } = span.spanContext();
      const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
      const scope = getCapturedScopesOnSpan(span).scope;
      return {
        parent_span_id,
        span_id: isRemote ? scope?.getPropagationContext().propagationSpanId || generateSpanId() : spanId,
        trace_id
      };
    }
    /**
    *  Converts the span links array to a flattened version to be sent within an envelope.
    *
    *  If the links array is empty, it returns `undefined` so the empty value can be dropped before it's sent.
    */
    function convertSpanLinksForEnvelope(links) {
      if (links && links.length > 0) return links.map(({
        context: {
          spanId,
          traceId,
          traceFlags,
          ...restContext
        },
        attributes
      }) => ({
        span_id: spanId,
        trace_id: traceId,
        sampled: traceFlags === 1,
        attributes,
        ...restContext
      }));else return;
    }
    /**
    * Convert a span time input into a timestamp in seconds.
    */
    function spanTimeInputToSeconds(input) {
      if (typeof input === "number") return ensureTimestampInSeconds(input);
      if (Array.isArray(input)) return input[0] + input[1] / 1e9;
      if (input instanceof Date) return ensureTimestampInSeconds(input.getTime());
      return timestampInSeconds();
    }
    /**
    * Converts a timestamp to second, if it was in milliseconds, or keeps it as second.
    */
    function ensureTimestampInSeconds(timestamp) {
      return timestamp > 9999999999 ? timestamp / 1e3 : timestamp;
    }
    /**
    * Convert a span to a JSON representation.
    */
    function spanToJSON(span) {
      if (spanIsSentrySpan(span)) return span.getSpanJSON();
      const {
        spanId: span_id,
        traceId: trace_id
      } = span.spanContext();
      if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
        const {
          attributes,
          startTime,
          name,
          endTime,
          status,
          links
        } = span;
        return {
          span_id,
          trace_id,
          data: attributes,
          description: name,
          parent_span_id: "parentSpanId" in span ? span.parentSpanId : "parentSpanContext" in span ? span.parentSpanContext?.spanId : void 0,
          start_timestamp: spanTimeInputToSeconds(startTime),
          timestamp: spanTimeInputToSeconds(endTime) || void 0,
          status: getStatusMessage(status),
          op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
          origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
          links: convertSpanLinksForEnvelope(links)
        };
      }
      return {
        span_id,
        trace_id,
        start_timestamp: 0,
        data: {}
      };
    }
    function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
      const castSpan = span;
      return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
    }
    /** Exported only for tests. */
    /**
    * Sadly, due to circular dependency checks we cannot actually import the Span class here and check for instanceof.
    * :( So instead we approximate this by checking if it has the `getSpanJSON` method.
    */
    function spanIsSentrySpan(span) {
      return typeof span.getSpanJSON === "function";
    }
    /**
    * Returns true if a span is sampled.
    * In most cases, you should just use `span.isRecording()` instead.
    * However, this has a slightly different semantic, as it also returns false if the span is finished.
    * So in the case where this distinction is important, use this method.
    */
    function spanIsSampled(span) {
      const {
        traceFlags
      } = span.spanContext();
      return traceFlags === 1;
    }
    /** Get the status message to use for a JSON representation of a span. */
    function getStatusMessage(status) {
      if (!status || status.code === 0) return;
      if (status.code === 1) return "ok";
      return status.message || "unknown_error";
    }
    /**
    * Adds an opaque child span reference to a span.
    */
    function addChildSpanToSpan(span, childSpan) {
      addNonEnumerableProperty(childSpan, ROOT_SPAN_FIELD, span[ROOT_SPAN_FIELD] || span);
      if (span[CHILD_SPANS_FIELD]) span[CHILD_SPANS_FIELD].add(childSpan);else addNonEnumerableProperty(span, CHILD_SPANS_FIELD, new Set([childSpan]));
    }
    /**
    * Returns an array of the given span and all of its descendants.
    */
    function getSpanDescendants(span) {
      const resultSet = /* @__PURE__ */new Set();
      function addSpanChildren(span$1) {
        if (resultSet.has(span$1)) return;else if (spanIsSampled(span$1)) {
          resultSet.add(span$1);
          const childSpans = span$1[CHILD_SPANS_FIELD] ? Array.from(span$1[CHILD_SPANS_FIELD]) : [];
          for (const childSpan of childSpans) addSpanChildren(childSpan);
        }
      }
      addSpanChildren(span);
      return Array.from(resultSet);
    }
    /**
    * Returns the root span of a given span.
    */
    function getRootSpan(span) {
      return span[ROOT_SPAN_FIELD] || span;
    }
    /**
    * Returns the currently active span.
    */
    function getActiveSpan() {
      const acs = getAsyncContextStrategy(getMainCarrier());
      if (acs.getActiveSpan) return acs.getActiveSpan();
      return _getSpanForScope(getCurrentScope());
    }
    /**
    * Logs a warning once if `beforeSendSpan` is used to drop spans.
    */
    function showSpanDropWarning() {
      if (!hasShownSpanDropWarning) {
        consoleSandbox(() => {
          console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.");
        });
        hasShownSpanDropWarning = true;
      }
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js
    /**
    * Determines if span recording is currently enabled.
    *
    * Spans are recorded when at least one of `tracesSampleRate` and `tracesSampler`
    * is defined in the SDK config. This function does not make any assumption about
    * sampling decisions, it only checks if the SDK is configured to record spans.
    *
    * Important: This function only determines if span recording is enabled. Trace
    * continuation and propagation is separately controlled and not covered by this function.
    * If this function returns `false`, traces can still be propagated (which is what
    * we refer to by "Tracing without Performance")
    * @see https://develop.sentry.dev/sdk/telemetry/traces/tracing-without-performance/
    *
    * @param maybeOptions An SDK options object to be passed to this function.
    * If this option is not provided, the function will use the current client's options.
    */
    function hasSpansEnabled(maybeOptions) {
      if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) return false;
      const options = maybeOptions || getClient()?.getOptions();
      return !!options && (options.tracesSampleRate != null || !!options.tracesSampler);
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/constants.js

    function isValidProtocol(protocol) {
      return protocol === "http" || protocol === "https";
    }
    /**
    * Renders the string representation of this Dsn.
    *
    * By default, this will render the public representation without the password
    * component. To get the deprecated private representation, set `withPassword`
    * to true.
    *
    * @param withPassword When set to true, the password will be included.
    */
    function dsnToString(dsn, withPassword = false) {
      const {
        host,
        path,
        pass,
        port,
        projectId,
        protocol,
        publicKey
      } = dsn;
      return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
    }
    /**
    * Parses a Dsn from a given string.
    *
    * @param str A Dsn as string
    * @returns Dsn as DsnComponents or undefined if @param str is not a valid DSN string
    */
    function dsnFromString(str) {
      const match = DSN_REGEX.exec(str);
      if (!match) {
        consoleSandbox(() => {
          console.error(`Invalid Sentry Dsn: ${str}`);
        });
        return;
      }
      const [protocol, publicKey, pass = "", host = "", port = "", lastPath = ""] = match.slice(1);
      let path = "";
      let projectId = lastPath;
      const split = projectId.split("/");
      if (split.length > 1) {
        path = split.slice(0, -1).join("/");
        projectId = split.pop();
      }
      if (projectId) {
        const projectMatch = projectId.match(/^\d+/);
        if (projectMatch) projectId = projectMatch[0];
      }
      return dsnFromComponents({
        host,
        pass,
        path,
        projectId,
        port,
        protocol,
        publicKey
      });
    }
    function dsnFromComponents(components) {
      return {
        protocol: components.protocol,
        publicKey: components.publicKey || "",
        pass: components.pass || "",
        host: components.host,
        port: components.port || "",
        path: components.path || "",
        projectId: components.projectId
      };
    }
    function validateDsn(dsn) {
      if (!DEBUG_BUILD) return true;
      const {
        port,
        projectId,
        protocol
      } = dsn;
      if (["protocol", "publicKey", "host", "projectId"].find(component => {
        if (!dsn[component]) {
          debug.error(`Invalid Sentry Dsn: ${component} missing`);
          return true;
        }
        return false;
      })) return false;
      if (!projectId.match(/^\d+$/)) {
        debug.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
        return false;
      }
      if (!isValidProtocol(protocol)) {
        debug.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
        return false;
      }
      if (port && isNaN(parseInt(port, 10))) {
        debug.error(`Invalid Sentry Dsn: Invalid port ${port}`);
        return false;
      }
      return true;
    }
    /**
    * Extract the org ID from a DSN host.
    *
    * @param host The host from a DSN
    * @returns The org ID if found, undefined otherwise
    */
    function extractOrgIdFromDsnHost(host) {
      return host.match(ORG_ID_REGEX)?.[1];
    }
    /**
    * Creates a valid Sentry Dsn object, identifying a Sentry instance and project.
    * @returns a valid DsnComponents object or `undefined` if @param from is an invalid DSN source
    */
    function makeDsn(from) {
      const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
      if (!components || !validateDsn(components)) return;
      return components;
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
    /**
    * If you change this value, also update the terser plugin config to
    * avoid minification of the object property!
    */

    /**
    * Freeze the given DSC on the given span.
    */
    function freezeDscOnSpan(span, dsc) {
      addNonEnumerableProperty(span, FROZEN_DSC_FIELD, dsc);
    }
    /**
    * Creates a dynamic sampling context from a client.
    *
    * Dispatches the `createDsc` lifecycle hook as a side effect.
    */
    function getDynamicSamplingContextFromClient(trace_id, client) {
      const options = client.getOptions();
      const {
        publicKey: public_key,
        host
      } = client.getDsn() || {};
      let org_id;
      if (options.orgId) org_id = String(options.orgId);else if (host) org_id = extractOrgIdFromDsnHost(host);
      const dsc = {
        environment: options.environment || "production",
        release: options.release,
        public_key,
        trace_id,
        org_id
      };
      client.emit("createDsc", dsc);
      return dsc;
    }
    /**
    * Get the dynamic sampling context for the currently active scopes.
    */
    function getDynamicSamplingContextFromScope(client, scope) {
      const propagationContext = scope.getPropagationContext();
      return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
    }
    /**
    * Creates a dynamic sampling context from a span (and client and scope)
    *
    * @param span the span from which a few values like the root span name and sample rate are extracted.
    *
    * @returns a dynamic sampling context
    */
    function getDynamicSamplingContextFromSpan(span) {
      const client = getClient();
      if (!client) return {};
      const rootSpan = getRootSpan(span);
      const rootSpanJson = spanToJSON(rootSpan);
      const rootSpanAttributes = rootSpanJson.data;
      const traceState = rootSpan.spanContext().traceState;
      const rootSpanSampleRate = traceState?.get("sentry.sample_rate") ?? rootSpanAttributes["sentry.sample_rate"] ?? rootSpanAttributes["sentry.previous_trace_sample_rate"];
      function applyLocalSampleRateToDsc(dsc$1) {
        if (typeof rootSpanSampleRate === "number" || typeof rootSpanSampleRate === "string") dsc$1.sample_rate = `${rootSpanSampleRate}`;
        return dsc$1;
      }
      const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
      if (frozenDsc) return applyLocalSampleRateToDsc(frozenDsc);
      const traceStateDsc = traceState?.get("sentry.dsc");
      const dscOnTraceState = traceStateDsc && baggageHeaderToDynamicSamplingContext(traceStateDsc);
      if (dscOnTraceState) return applyLocalSampleRateToDsc(dscOnTraceState);
      const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
      const source = rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
      const name = rootSpanJson.description;
      if (source !== "url" && name) dsc.transaction = name;
      if (hasSpansEnabled()) {
        dsc.sampled = String(spanIsSampled(rootSpan));
        dsc.sample_rand = traceState?.get("sentry.sample_rand") ?? getCapturedScopesOnSpan(rootSpan).scope?.getPropagationContext().sampleRand.toString();
      }
      applyLocalSampleRateToDsc(dsc);
      client.emit("createDsc", dsc, rootSpan);
      return dsc;
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/normalize.js

    /**
    * Recursively normalizes the given object.
    *
    * - Creates a copy to prevent original input mutation
    * - Skips non-enumerable properties
    * - When stringifying, calls `toJSON` if implemented
    * - Removes circular references
    * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
    * - Translates known global objects/classes to a string representations
    * - Takes care of `Error` object serialization
    * - Optionally limits depth of final output
    * - Optionally limits number of properties/elements included in any single object/array
    *
    * @param input The object to be normalized.
    * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
    * @param maxProperties The max number of elements or properties to be included in any single array or
    * object in the normalized output.
    * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
    */
    function normalize(input, depth = 100, maxProperties = Infinity) {
      try {
        return visit("", input, depth, maxProperties);
      } catch (err) {
        return {
          ERROR: `**non-serializable** (${err})`
        };
      }
    }
    /** JSDoc */
    function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
      const normalized = normalize(object, depth);
      if (jsonSize(normalized) > maxSize) return normalizeToSize(object, depth - 1, maxSize);
      return normalized;
    }
    /**
    * Visits a node to perform normalization on it
    *
    * @param key The key corresponding to the given node
    * @param value The node to be visited
    * @param depth Optional number indicating the maximum recursion depth
    * @param maxProperties Optional maximum number of properties/elements included in any single object/array
    * @param memo Optional Memo class handling decycling
    */
    function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
      const [memoize, unmemoize] = memo;
      if (value == null || ["boolean", "string"].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) return value;
      const stringified = stringifyValue(key, value);
      if (!stringified.startsWith("[object ")) return stringified;
      if (value["__sentry_skip_normalization__"]) return value;
      const remainingDepth = typeof value["__sentry_override_normalization_depth__"] === "number" ? value["__sentry_override_normalization_depth__"] : depth;
      if (remainingDepth === 0) return stringified.replace("object ", "");
      if (memoize(value)) return "[Circular ~]";
      const valueWithToJSON = value;
      if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") try {
        return visit("", valueWithToJSON.toJSON(), remainingDepth - 1, maxProperties, memo);
      } catch {}
      const normalized = Array.isArray(value) ? [] : {};
      let numAdded = 0;
      const visitable = convertToPlainObject(value);
      for (const visitKey in visitable) {
        if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) continue;
        if (numAdded >= maxProperties) {
          normalized[visitKey] = "[MaxProperties ~]";
          break;
        }
        const visitValue = visitable[visitKey];
        normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
        numAdded++;
      }
      unmemoize(value);
      return normalized;
    }
    /**
    * Stringify the given value. Handles various known special values and types.
    *
    * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
    * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
    *
    * @param value The value to stringify
    * @returns A stringified representation of the given value
    */
    function stringifyValue(key, value) {
      try {
        if (key === "domain" && value && typeof value === "object" && value._events) return "[Domain]";
        if (key === "domainEmitter") return "[DomainEmitter]";
        if (typeof global !== "undefined" && value === global) return "[Global]";
        if (typeof window !== "undefined" && value === window) return "[Window]";
        if (typeof document !== "undefined" && value === document) return "[Document]";
        if (isVueViewModel(value)) return "[VueViewModel]";
        if (isSyntheticEvent(value)) return "[SyntheticEvent]";
        if (typeof value === "number" && !Number.isFinite(value)) return `[${value}]`;
        if (typeof value === "function") return `[Function: ${getFunctionName(value)}]`;
        if (typeof value === "symbol") return `[${String(value)}]`;
        if (typeof value === "bigint") return `[BigInt: ${String(value)}]`;
        const objName = getConstructorName(value);
        if (/^HTML(\w*)Element$/.test(objName)) return `[HTMLElement: ${objName}]`;
        return `[object ${objName}]`;
      } catch (err) {
        return `**non-serializable** (${err})`;
      }
    }
    function getConstructorName(value) {
      const prototype = Object.getPrototypeOf(value);
      return prototype?.constructor ? prototype.constructor.name : "null prototype";
    }
    /** Calculates bytes size of input string */
    function utf8Length(value) {
      return ~-encodeURI(value).split(/%..|./).length;
    }
    /** Calculates bytes size of input object */
    function jsonSize(value) {
      return utf8Length(JSON.stringify(value));
    }
    /**
    * Helper to decycle json objects
    */
    function memoBuilder() {
      const inner = /* @__PURE__ */new WeakSet();
      function memoize(obj) {
        if (inner.has(obj)) return true;
        inner.add(obj);
        return false;
      }
      function unmemoize(obj) {
        inner.delete(obj);
      }
      return [memoize, unmemoize];
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/syncpromise.js
    /** SyncPromise internal states */

    /**
    * Creates a resolved sync promise.
    *
    * @param value the value to resolve the promise with
    * @returns the resolved sync promise
    */
    function resolvedSyncPromise(value) {
      return new SyncPromise(resolve => {
        resolve(value);
      });
    }
    /**
    * Creates a rejected sync promise.
    *
    * @param value the value to reject the promise with
    * @returns the rejected sync promise
    */
    function rejectedSyncPromise(reason) {
      return new SyncPromise((_, reject) => {
        reject(reason);
      });
    }
    /**
    * Thenable class that behaves like a Promise and follows it's interface
    * but is not async internally
    */

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/eventProcessors.js
    /**
    * Process an array of event processors, returning the processed event (or `null` if the event was dropped).
    */
    function notifyEventProcessors(processors, event, hint, index = 0) {
      return new SyncPromise((resolve, reject) => {
        const processor = processors[index];
        if (event === null || typeof processor !== "function") resolve(event);else {
          const result = processor({
            ...event
          }, hint);
          DEBUG_BUILD && processor.id && result === null && debug.log(`Event processor "${processor.id}" dropped event`);
          if (isThenable(result)) result.then(final => notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);else notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
        }
      });
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js
    /**
    * Applies data from the scope to the event and runs all event processors on it.
    */
    function applyScopeDataToEvent(event, data) {
      const {
        fingerprint,
        span,
        breadcrumbs,
        sdkProcessingMetadata
      } = data;
      applyDataToEvent(event, data);
      if (span) applySpanToEvent(event, span);
      applyFingerprintToEvent(event, fingerprint);
      applyBreadcrumbsToEvent(event, breadcrumbs);
      applySdkMetadataToEvent(event, sdkProcessingMetadata);
    }
    /** Merge data of two scopes together. */
    function mergeScopeData(data, mergeData) {
      const {
        extra,
        tags,
        user,
        contexts,
        level,
        sdkProcessingMetadata,
        breadcrumbs,
        fingerprint,
        eventProcessors,
        attachments,
        propagationContext,
        transactionName,
        span
      } = mergeData;
      mergeAndOverwriteScopeData(data, "extra", extra);
      mergeAndOverwriteScopeData(data, "tags", tags);
      mergeAndOverwriteScopeData(data, "user", user);
      mergeAndOverwriteScopeData(data, "contexts", contexts);
      data.sdkProcessingMetadata = merge(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
      if (level) data.level = level;
      if (transactionName) data.transactionName = transactionName;
      if (span) data.span = span;
      if (breadcrumbs.length) data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
      if (fingerprint.length) data.fingerprint = [...data.fingerprint, ...fingerprint];
      if (eventProcessors.length) data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
      if (attachments.length) data.attachments = [...data.attachments, ...attachments];
      data.propagationContext = {
        ...data.propagationContext,
        ...propagationContext
      };
    }
    /**
    * Merges certain scope data. Undefined values will overwrite any existing values.
    * Exported only for tests.
    */
    function mergeAndOverwriteScopeData(data, prop, mergeVal) {
      data[prop] = merge(data[prop], mergeVal, 1);
    }
    function applyDataToEvent(event, data) {
      const {
        extra,
        tags,
        user,
        contexts,
        level,
        transactionName
      } = data;
      if (Object.keys(extra).length) event.extra = {
        ...extra,
        ...event.extra
      };
      if (Object.keys(tags).length) event.tags = {
        ...tags,
        ...event.tags
      };
      if (Object.keys(user).length) event.user = {
        ...user,
        ...event.user
      };
      if (Object.keys(contexts).length) event.contexts = {
        ...contexts,
        ...event.contexts
      };
      if (level) event.level = level;
      if (transactionName && event.type !== "transaction") event.transaction = transactionName;
    }
    function applyBreadcrumbsToEvent(event, breadcrumbs) {
      const mergedBreadcrumbs = [...(event.breadcrumbs || []), ...breadcrumbs];
      event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
    }
    function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
      event.sdkProcessingMetadata = {
        ...event.sdkProcessingMetadata,
        ...sdkProcessingMetadata
      };
    }
    function applySpanToEvent(event, span) {
      event.contexts = {
        trace: spanToTraceContext(span),
        ...event.contexts
      };
      event.sdkProcessingMetadata = {
        dynamicSamplingContext: getDynamicSamplingContextFromSpan(span),
        ...event.sdkProcessingMetadata
      };
      const transactionName = spanToJSON(getRootSpan(span)).description;
      if (transactionName && !event.transaction && event.type === "transaction") event.transaction = transactionName;
    }
    /**
    * Applies fingerprint from the scope to the event if there's one,
    * uses message if there's one instead or get rid of empty fingerprint
    */
    function applyFingerprintToEvent(event, fingerprint) {
      event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : [];
      if (fingerprint) event.fingerprint = event.fingerprint.concat(fingerprint);
      if (!event.fingerprint.length) delete event.fingerprint;
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/debug-ids.js

    /**
    * Returns a map of filenames to debug identifiers.
    */
    function getFilenameToDebugIdMap(stackParser) {
      const debugIdMap = GLOBAL_OBJ._sentryDebugIds;
      if (!debugIdMap) return {};
      const debugIdKeys = Object.keys(debugIdMap);
      if (cachedFilenameDebugIds && debugIdKeys.length === lastKeysCount) return cachedFilenameDebugIds;
      lastKeysCount = debugIdKeys.length;
      cachedFilenameDebugIds = debugIdKeys.reduce((acc, stackKey) => {
        if (!parsedStackResults) parsedStackResults = {};
        const result = parsedStackResults[stackKey];
        if (result) acc[result[0]] = result[1];else {
          const parsedStack = stackParser(stackKey);
          for (let i = parsedStack.length - 1; i >= 0; i--) {
            const filename = parsedStack[i]?.filename;
            const debugId = debugIdMap[stackKey];
            if (filename && debugId) {
              acc[filename] = debugId;
              parsedStackResults[stackKey] = [filename, debugId];
              break;
            }
          }
        }
        return acc;
      }, {});
      return cachedFilenameDebugIds;
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/prepareEvent.js
    /**
    * This type makes sure that we get either a CaptureContext, OR an EventHint.
    * It does not allow mixing them, which could lead to unexpected outcomes, e.g. this is disallowed:
    * { user: { id: '123' }, mechanism: { handled: false } }
    */
    /**
    * Adds common information to events.
    *
    * The information includes release and environment from `options`,
    * breadcrumbs and context (extra, tags and user) from the scope.
    *
    * Information that is already present in the event is never overwritten. For
    * nested objects, such as the context, keys are merged.
    *
    * @param event The original event.
    * @param hint May contain additional information about the original exception.
    * @param scope A scope containing event metadata.
    * @returns A new event with more information.
    * @hidden
    */
    function prepareEvent(options, event, hint, scope, client, isolationScope) {
      const {
        normalizeDepth = 3,
        normalizeMaxBreadth = 1e3
      } = options;
      const prepared = {
        ...event,
        event_id: event.event_id || hint.event_id || uuid4(),
        timestamp: event.timestamp || dateTimestampInSeconds()
      };
      const integrations = hint.integrations || options.integrations.map(i => i.name);
      applyClientOptions(prepared, options);
      applyIntegrationsMetadata(prepared, integrations);
      if (client) client.emit("applyFrameMetadata", event);
      if (event.type === void 0) applyDebugIds(prepared, options.stackParser);
      const finalScope = getFinalScope(scope, hint.captureContext);
      if (hint.mechanism) addExceptionMechanism(prepared, hint.mechanism);
      const clientEventProcessors = client ? client.getEventProcessors() : [];
      const data = getGlobalScope().getScopeData();
      if (isolationScope) mergeScopeData(data, isolationScope.getScopeData());
      if (finalScope) mergeScopeData(data, finalScope.getScopeData());
      const attachments = [...(hint.attachments || []), ...data.attachments];
      if (attachments.length) hint.attachments = attachments;
      applyScopeDataToEvent(prepared, data);
      return notifyEventProcessors([...clientEventProcessors, ...data.eventProcessors], prepared, hint).then(evt => {
        if (evt) applyDebugMeta(evt);
        if (typeof normalizeDepth === "number" && normalizeDepth > 0) return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
        return evt;
      });
    }
    /**
    * Enhances event using the client configuration.
    * It takes care of all "static" values like environment, release and `dist`,
    * as well as truncating overly long values.
    *
    * Only exported for tests.
    *
    * @param event event instance to be enhanced
    */
    function applyClientOptions(event, options) {
      const {
        environment,
        release,
        dist,
        maxValueLength = 250
      } = options;
      event.environment = event.environment || environment || "production";
      if (!event.release && release) event.release = release;
      if (!event.dist && dist) event.dist = dist;
      const request = event.request;
      if (request?.url) request.url = truncate(request.url, maxValueLength);
    }
    /**
    * Puts debug IDs into the stack frames of an error event.
    */
    function applyDebugIds(event, stackParser) {
      const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
      event.exception?.values?.forEach(exception => {
        exception.stacktrace?.frames?.forEach(frame => {
          if (frame.filename) frame.debug_id = filenameDebugIdMap[frame.filename];
        });
      });
    }
    /**
    * Moves debug IDs from the stack frames of an error event into the debug_meta field.
    */
    function applyDebugMeta(event) {
      const filenameDebugIdMap = {};
      event.exception?.values?.forEach(exception => {
        exception.stacktrace?.frames?.forEach(frame => {
          if (frame.debug_id) {
            if (frame.abs_path) filenameDebugIdMap[frame.abs_path] = frame.debug_id;else if (frame.filename) filenameDebugIdMap[frame.filename] = frame.debug_id;
            delete frame.debug_id;
          }
        });
      });
      if (Object.keys(filenameDebugIdMap).length === 0) return;
      event.debug_meta = event.debug_meta || {};
      event.debug_meta.images = event.debug_meta.images || [];
      const images = event.debug_meta.images;
      Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
        images.push({
          type: "sourcemap",
          code_file: filename,
          debug_id
        });
      });
    }
    /**
    * This function adds all used integrations to the SDK info in the event.
    * @param event The event that will be filled with all integrations.
    */
    function applyIntegrationsMetadata(event, integrationNames) {
      if (integrationNames.length > 0) {
        event.sdk = event.sdk || {};
        event.sdk.integrations = [...(event.sdk.integrations || []), ...integrationNames];
      }
    }
    /**
    * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
    * Normalized keys:
    * - `breadcrumbs.data`
    * - `user`
    * - `contexts`
    * - `extra`
    * @param event Event
    * @returns Normalized event
    */
    function normalizeEvent(event, depth, maxBreadth) {
      if (!event) return null;
      const normalized = {
        ...event,
        ...(event.breadcrumbs && {
          breadcrumbs: event.breadcrumbs.map(b => ({
            ...b,
            ...(b.data && {
              data: normalize(b.data, depth, maxBreadth)
            })
          }))
        }),
        ...(event.user && {
          user: normalize(event.user, depth, maxBreadth)
        }),
        ...(event.contexts && {
          contexts: normalize(event.contexts, depth, maxBreadth)
        }),
        ...(event.extra && {
          extra: normalize(event.extra, depth, maxBreadth)
        })
      };
      if (event.contexts?.trace && normalized.contexts) {
        normalized.contexts.trace = event.contexts.trace;
        if (event.contexts.trace.data) normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
      }
      if (event.spans) normalized.spans = event.spans.map(span => {
        return {
          ...span,
          ...(span.data && {
            data: normalize(span.data, depth, maxBreadth)
          })
        };
      });
      if (event.contexts?.flags && normalized.contexts) normalized.contexts.flags = normalize(event.contexts.flags, 3, maxBreadth);
      return normalized;
    }
    function getFinalScope(scope, captureContext) {
      if (!captureContext) return scope;
      const finalScope = scope ? scope.clone() : new Scope();
      finalScope.update(captureContext);
      return finalScope;
    }
    /**
    * Parse either an `EventHint` directly, or convert a `CaptureContext` to an `EventHint`.
    * This is used to allow to update method signatures that used to accept a `CaptureContext` but should now accept an `EventHint`.
    */
    function parseEventHintOrCaptureContext(hint) {
      if (!hint) return;
      if (hintIsScopeOrFunction(hint)) return {
        captureContext: hint
      };
      if (hintIsScopeContext(hint)) return {
        captureContext: hint
      };
      return hint;
    }
    function hintIsScopeOrFunction(hint) {
      return hint instanceof Scope || typeof hint === "function";
    }
    function hintIsScopeContext(hint) {
      return Object.keys(hint).some(key => captureContextKeys.includes(key));
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/exports.js
    /**
    * Captures an exception event and sends it to Sentry.
    *
    * @param exception The exception to capture.
    * @param hint Optional additional data to attach to the Sentry event.
    * @returns the id of the captured Sentry event.
    */
    function captureException(exception, hint) {
      return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
    }
    /**
    * Captures a message event and sends it to Sentry.
    *
    * @param message The message to send to Sentry.
    * @param captureContext Define the level of the message or pass in additional data to attach to the message.
    * @returns the id of the captured message.
    */
    function captureMessage(message, captureContext) {
      const level = typeof captureContext === "string" ? captureContext : void 0;
      const context = typeof captureContext !== "string" ? {
        captureContext
      } : void 0;
      return getCurrentScope().captureMessage(message, level, context);
    }
    /**
    * Captures a manually created event and sends it to Sentry.
    *
    * @param event The event to send to Sentry.
    * @param hint Optional additional data to attach to the Sentry event.
    * @returns the id of the captured event.
    */
    function captureEvent(event, hint) {
      return getCurrentScope().captureEvent(event, hint);
    }
    /**
    * Set key:value that will be sent as tags data with the event.
    *
    * Can also be used to unset a tag, by passing `undefined`.
    *
    * @param key String key of tag
    * @param value Value of tag
    */
    function setTag(key, value) {
      getIsolationScope().setTag(key, value);
    }
    /**
    * Start a session on the current isolation scope.
    *
    * @param context (optional) additional properties to be applied to the returned session object
    *
    * @returns the new active session
    */
    function startSession(context) {
      const isolationScope = getIsolationScope();
      const currentScope = getCurrentScope();
      const {
        userAgent
      } = GLOBAL_OBJ.navigator || {};
      const session = makeSession({
        user: currentScope.getUser() || isolationScope.getUser(),
        ...(userAgent && {
          userAgent
        }),
        ...context
      });
      const currentSession = isolationScope.getSession();
      if (currentSession?.status === "ok") updateSession(currentSession, {
        status: "exited"
      });
      endSession();
      isolationScope.setSession(session);
      return session;
    }
    /**
    * End the session on the current isolation scope.
    */
    function endSession() {
      const isolationScope = getIsolationScope();
      const session = getCurrentScope().getSession() || isolationScope.getSession();
      if (session) closeSession(session);
      _sendSessionUpdate();
      isolationScope.setSession();
    }
    /**
    * Sends the current Session on the scope
    */
    function _sendSessionUpdate() {
      const isolationScope = getIsolationScope();
      const client = getClient();
      const session = isolationScope.getSession();
      if (session && client) client.captureSession(session);
    }
    /**
    * Sends the current session on the scope to Sentry
    *
    * @param end If set the session will be marked as exited and removed from the scope.
    *            Defaults to `false`.
    */
    function captureSession(end = false) {
      if (end) {
        endSession();
        return;
      }
      _sendSessionUpdate();
    }

    //#endregion
    _export({
      $: generateTraceId,
      A: spanTimeInputToSeconds,
      At: isThenable,
      Bt: getGlobalSingleton,
      C: convertSpanLinksForEnvelope,
      Ct: isEvent,
      D: getStatusMessage,
      Dt: isPrimitive,
      E: getSpanDescendants,
      Et: isPlainObject,
      Ft: stackParserFromStackParserOptions,
      G: getCurrentScope,
      Ht: getSentryCarrier,
      J: withScope,
      K: getIsolationScope,
      Lt: consoleSandbox,
      M: spanToTransactionTraceContext,
      Mt: createStackParser,
      N: getCapturedScopesOnSpan,
      Nt: getFramesFromEvent,
      O: showSpanDropWarning,
      Ot: isRequest,
      P: setCapturedScopesOnSpan,
      Pt: getFunctionName,
      Q: generateSpanId,
      S: addChildSpanToSpan,
      St: isErrorEvent,
      T: getRootSpan,
      Tt: isParameterizedString,
      Vt: getMainCarrier,
      W: getClient,
      X: _getSpanForScope,
      Y: getAsyncContextStrategy,
      Z: _setSpanForScope,
      _: makeDsn,
      _t: getLocationHref,
      a: setTag,
      at: addExceptionTypeValue,
      bt: isDOMException,
      ct: uuid4,
      d: normalize,
      dt: fill,
      et: merge,
      f: normalizeToSize,
      ft: getOriginalFunction,
      g: dsnToString,
      gt: getComponentName,
      h: getDynamicSamplingContextFromSpan,
      ht: stringMatchesSomePattern,
      i: captureSession,
      it: addExceptionMechanism,
      j: spanToJSON,
      k: spanIsSampled,
      kt: isString,
      l: rejectedSyncPromise,
      lt: addNonEnumerableProperty,
      m: getDynamicSamplingContextFromScope,
      mt: safeJoin,
      n: captureException,
      nt: dateTimestampInSeconds,
      o: startSession,
      ot: checkOrSetAlreadyCaught,
      p: freezeDscOnSpan,
      pt: markFunctionWrapped,
      q: getTraceContextFromScope,
      r: captureMessage,
      rt: timestampInSeconds,
      s: prepareEvent,
      st: getEventDescription,
      t: captureEvent,
      tt: updateSession,
      u: resolvedSyncPromise,
      ut: extractExceptionKeysForMessage,
      vt: htmlTreeAsString,
      w: getActiveSpan,
      wt: isInstanceOf,
      xt: isError,
      y: hasSpansEnabled,
      yt: isDOMError
    });
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        init_dist = _vueRuntimeEsmBundlerLegacy003Js.En;
        global = _vueRuntimeEsmBundlerLegacy003Js.Tn;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/debug-build.js
        /**
        * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
        *
        * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
        */
        _export("Gt", DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__); //#endregion
        //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/worldwide.js
        /** Internal global with common properties and Sentry extensions  */
        /** Get's the global object for the current JavaScript runtime */
        _export("Wt", GLOBAL_OBJ = globalThis); //#endregion
        //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/version.js
        _export("Ut", SDK_VERSION = "9.42.1");
        _export("It", CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"]);
        /** Prefix for logging strings */
        PREFIX = "Sentry Logger ";
        /** This may be mutated by the console instrumentation. */
        _export("zt", originalConsoleMethods = {});
        _export("Rt", debug = {
          enable,
          disable,
          isEnabled,
          log,
          warn,
          error
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/stacktrace.js
        STACKTRACE_FRAME_LIMIT = 50;
        _export("jt", UNKNOWN_FUNCTION = "?");
        WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
        STRIP_FRAME_REGEXP = /captureMessage|captureException/;
        defaultFunctionName = "<anonymous>";
        objectToString = Object.prototype.toString;
        WINDOW = GLOBAL_OBJ;
        DEFAULT_MAX_STRING_LENGTH = 80;
        ONE_SECOND_IN_MS = 1e3;
        SCOPE_SPAN_FIELD = "_sentrySpan";
        DEFAULT_MAX_BREADCRUMBS = 100;
        /**
        * A context to be used for capturing an event.
        * This can either be a Scope, or a partial ScopeContext,
        * or a callback that receives the current scope and returns a new scope to use.
        */
        /**
        * Holds additional event information.
        */
        Scope = class Scope {
          /** Flag if notifying is happening. */
          /** Callback for client to receive scope changes. */
          /** Callback list that will be called during event processing. */
          /** Array of breadcrumbs. */
          /** User */
          /** Tags */
          /** Extra */
          /** Contexts */
          /** Attachments */
          /** Propagation Context for distributed tracing */
          /**
          * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
          * sent to Sentry
          */
          /** Fingerprint */
          /** Severity */
          /**
          * Transaction Name
          *
          * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
          * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
          */
          /** Session */
          /** The client on this scope */
          /** Contains the last event id of a captured event.  */
          constructor() {
            this._notifyingListeners = false;
            this._scopeListeners = [];
            this._eventProcessors = [];
            this._breadcrumbs = [];
            this._attachments = [];
            this._user = {};
            this._tags = {};
            this._extra = {};
            this._contexts = {};
            this._sdkProcessingMetadata = {};
            this._propagationContext = {
              traceId: generateTraceId(),
              sampleRand: Math.random()
            };
          }
          /**
          * Clone all data from this scope into a new scope.
          */
          clone() {
            const newScope = new Scope();
            newScope._breadcrumbs = [...this._breadcrumbs];
            newScope._tags = {
              ...this._tags
            };
            newScope._extra = {
              ...this._extra
            };
            newScope._contexts = {
              ...this._contexts
            };
            if (this._contexts.flags) newScope._contexts.flags = {
              values: [...this._contexts.flags.values]
            };
            newScope._user = this._user;
            newScope._level = this._level;
            newScope._session = this._session;
            newScope._transactionName = this._transactionName;
            newScope._fingerprint = this._fingerprint;
            newScope._eventProcessors = [...this._eventProcessors];
            newScope._attachments = [...this._attachments];
            newScope._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata
            };
            newScope._propagationContext = {
              ...this._propagationContext
            };
            newScope._client = this._client;
            newScope._lastEventId = this._lastEventId;
            _setSpanForScope(newScope, _getSpanForScope(this));
            return newScope;
          }
          /**
          * Update the client assigned to this scope.
          * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
          * as well as manually created scopes.
          */
          setClient(client) {
            this._client = client;
          }
          /**
          * Set the ID of the last captured error event.
          * This is generally only captured on the isolation scope.
          */
          setLastEventId(lastEventId) {
            this._lastEventId = lastEventId;
          }
          /**
          * Get the client assigned to this scope.
          */
          getClient() {
            return this._client;
          }
          /**
          * Get the ID of the last captured error event.
          * This is generally only available on the isolation scope.
          */
          lastEventId() {
            return this._lastEventId;
          }
          /**
          * @inheritDoc
          */
          addScopeListener(callback) {
            this._scopeListeners.push(callback);
          }
          /**
          * Add an event processor that will be called before an event is sent.
          */
          addEventProcessor(callback) {
            this._eventProcessors.push(callback);
            return this;
          }
          /**
          * Set the user for this scope.
          * Set to `null` to unset the user.
          */
          setUser(user) {
            this._user = user || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              username: void 0
            };
            if (this._session) updateSession(this._session, {
              user
            });
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Get the user from this scope.
          */
          getUser() {
            return this._user;
          }
          /**
          * Set an object that will be merged into existing tags on the scope,
          * and will be sent as tags data with the event.
          */
          setTags(tags) {
            this._tags = {
              ...this._tags,
              ...tags
            };
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Set a single tag that will be sent as tags data with the event.
          */
          setTag(key, value) {
            this._tags = {
              ...this._tags,
              [key]: value
            };
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Set an object that will be merged into existing extra on the scope,
          * and will be sent as extra data with the event.
          */
          setExtras(extras) {
            this._extra = {
              ...this._extra,
              ...extras
            };
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Set a single key:value extra entry that will be sent as extra data with the event.
          */
          setExtra(key, extra) {
            this._extra = {
              ...this._extra,
              [key]: extra
            };
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Sets the fingerprint on the scope to send with the events.
          * @param {string[]} fingerprint Fingerprint to group events in Sentry.
          */
          setFingerprint(fingerprint) {
            this._fingerprint = fingerprint;
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Sets the level on the scope for future events.
          */
          setLevel(level) {
            this._level = level;
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Sets the transaction name on the scope so that the name of e.g. taken server route or
          * the page location is attached to future events.
          *
          * IMPORTANT: Calling this function does NOT change the name of the currently active
          * root span. If you want to change the name of the active root span, use
          * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
          *
          * By default, the SDK updates the scope's transaction name automatically on sensible
          * occasions, such as a page navigation or when handling a new request on the server.
          */
          setTransactionName(name) {
            this._transactionName = name;
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Sets context data with the given name.
          * Data passed as context will be normalized. You can also pass `null` to unset the context.
          * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
          */
          setContext(key, context) {
            if (context === null) delete this._contexts[key];else this._contexts[key] = context;
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Set the session for the scope.
          */
          setSession(session) {
            if (!session) delete this._session;else this._session = session;
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Get the session from the scope.
          */
          getSession() {
            return this._session;
          }
          /**
          * Updates the scope with provided data. Can work in three variations:
          * - plain object containing updatable attributes
          * - Scope instance that'll extract the attributes from
          * - callback function that'll receive the current scope as an argument and allow for modifications
          */
          update(captureContext) {
            if (!captureContext) return this;
            const scopeToMerge = typeof captureContext === "function" ? captureContext(this) : captureContext;
            const {
              tags,
              extra,
              user,
              contexts,
              level,
              fingerprint = [],
              propagationContext
            } = (scopeToMerge instanceof Scope ? scopeToMerge.getScopeData() : isPlainObject(scopeToMerge) ? captureContext : void 0) || {};
            this._tags = {
              ...this._tags,
              ...tags
            };
            this._extra = {
              ...this._extra,
              ...extra
            };
            this._contexts = {
              ...this._contexts,
              ...contexts
            };
            if (user && Object.keys(user).length) this._user = user;
            if (level) this._level = level;
            if (fingerprint.length) this._fingerprint = fingerprint;
            if (propagationContext) this._propagationContext = propagationContext;
            return this;
          }
          /**
          * Clears the current scope and resets its properties.
          * Note: The client will not be cleared.
          */
          clear() {
            this._breadcrumbs = [];
            this._tags = {};
            this._extra = {};
            this._user = {};
            this._contexts = {};
            this._level = void 0;
            this._transactionName = void 0;
            this._fingerprint = void 0;
            this._session = void 0;
            _setSpanForScope(this, void 0);
            this._attachments = [];
            this.setPropagationContext({
              traceId: generateTraceId(),
              sampleRand: Math.random()
            });
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Adds a breadcrumb to the scope.
          * By default, the last 100 breadcrumbs are kept.
          */
          addBreadcrumb(breadcrumb, maxBreadcrumbs) {
            const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
            if (maxCrumbs <= 0) return this;
            const mergedBreadcrumb = {
              timestamp: dateTimestampInSeconds(),
              ...breadcrumb,
              message: breadcrumb.message ? truncate(breadcrumb.message, 2048) : breadcrumb.message
            };
            this._breadcrumbs.push(mergedBreadcrumb);
            if (this._breadcrumbs.length > maxCrumbs) {
              this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
              this._client?.recordDroppedEvent("buffer_overflow", "log_item");
            }
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Get the last breadcrumb of the scope.
          */
          getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1];
          }
          /**
          * Clear all breadcrumbs from the scope.
          */
          clearBreadcrumbs() {
            this._breadcrumbs = [];
            this._notifyScopeListeners();
            return this;
          }
          /**
          * Add an attachment to the scope.
          */
          addAttachment(attachment) {
            this._attachments.push(attachment);
            return this;
          }
          /**
          * Clear all attachments from the scope.
          */
          clearAttachments() {
            this._attachments = [];
            return this;
          }
          /**
          * Get the data of this scope, which should be applied to an event during processing.
          */
          getScopeData() {
            return {
              breadcrumbs: this._breadcrumbs,
              attachments: this._attachments,
              contexts: this._contexts,
              tags: this._tags,
              extra: this._extra,
              user: this._user,
              level: this._level,
              fingerprint: this._fingerprint || [],
              eventProcessors: this._eventProcessors,
              propagationContext: this._propagationContext,
              sdkProcessingMetadata: this._sdkProcessingMetadata,
              transactionName: this._transactionName,
              span: _getSpanForScope(this)
            };
          }
          /**
          * Add data which will be accessible during event processing but won't get sent to Sentry.
          */
          setSDKProcessingMetadata(newData) {
            this._sdkProcessingMetadata = merge(this._sdkProcessingMetadata, newData, 2);
            return this;
          }
          /**
          * Add propagation context to the scope, used for distributed tracing
          */
          setPropagationContext(context) {
            this._propagationContext = context;
            return this;
          }
          /**
          * Get propagation context from the scope, used for distributed tracing
          */
          getPropagationContext() {
            return this._propagationContext;
          }
          /**
          * Capture an exception for this scope.
          *
          * @returns {string} The id of the captured Sentry event.
          */
          captureException(exception, hint) {
            const eventId = hint?.event_id || uuid4();
            if (!this._client) {
              DEBUG_BUILD && debug.warn("No client configured on scope - will not capture exception!");
              return eventId;
            }
            const syntheticException = /* @__PURE__ */new Error("Sentry syntheticException");
            this._client.captureException(exception, {
              originalException: exception,
              syntheticException,
              ...hint,
              event_id: eventId
            }, this);
            return eventId;
          }
          /**
          * Capture a message for this scope.
          *
          * @returns {string} The id of the captured message.
          */
          captureMessage(message, level, hint) {
            const eventId = hint?.event_id || uuid4();
            if (!this._client) {
              DEBUG_BUILD && debug.warn("No client configured on scope - will not capture message!");
              return eventId;
            }
            const syntheticException = new Error(message);
            this._client.captureMessage(message, level, {
              originalException: message,
              syntheticException,
              ...hint,
              event_id: eventId
            }, this);
            return eventId;
          }
          /**
          * Capture a Sentry event for this scope.
          *
          * @returns {string} The id of the captured event.
          */
          captureEvent(event, hint) {
            const eventId = hint?.event_id || uuid4();
            if (!this._client) {
              DEBUG_BUILD && debug.warn("No client configured on scope - will not capture event!");
              return eventId;
            }
            this._client.captureEvent(event, {
              ...hint,
              event_id: eventId
            }, this);
            return eventId;
          }
          /**
          * This will be called on every set call.
          */
          _notifyScopeListeners() {
            if (!this._notifyingListeners) {
              this._notifyingListeners = true;
              this._scopeListeners.forEach(callback => {
                callback(this);
              });
              this._notifyingListeners = false;
            }
          }
        };
        AsyncContextStack = class {
          constructor(scope, isolationScope) {
            let assignedScope;
            if (!scope) assignedScope = new Scope();else assignedScope = scope;
            let assignedIsolationScope;
            if (!isolationScope) assignedIsolationScope = new Scope();else assignedIsolationScope = isolationScope;
            this._stack = [{
              scope: assignedScope
            }];
            this._isolationScope = assignedIsolationScope;
          }
          /**
          * Fork a scope for the stack.
          */
          withScope(callback) {
            const scope = this._pushScope();
            let maybePromiseResult;
            try {
              maybePromiseResult = callback(scope);
            } catch (e) {
              this._popScope();
              throw e;
            }
            if (isThenable(maybePromiseResult)) return maybePromiseResult.then(res => {
              this._popScope();
              return res;
            }, e => {
              this._popScope();
              throw e;
            });
            this._popScope();
            return maybePromiseResult;
          }
          /**
          * Get the client of the stack.
          */
          getClient() {
            return this.getStackTop().client;
          }
          /**
          * Returns the scope of the top stack.
          */
          getScope() {
            return this.getStackTop().scope;
          }
          /**
          * Get the isolation scope for the stack.
          */
          getIsolationScope() {
            return this._isolationScope;
          }
          /**
          * Returns the topmost scope layer in the order domain > local > process.
          */
          getStackTop() {
            return this._stack[this._stack.length - 1];
          }
          /**
          * Push a scope to the stack.
          */
          _pushScope() {
            const scope = this.getScope().clone();
            this._stack.push({
              client: this.getClient(),
              scope
            });
            return scope;
          }
          /**
          * Pop a scope from the stack.
          */
          _popScope() {
            if (this._stack.length <= 1) return false;
            return !!this._stack.pop();
          }
        };
        _export("U", SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source");
        /**
        * Attributes that holds the sample rate that was locally applied to a span.
        * If this attribute is not defined, it means that the span inherited a sampling decision.
        *
        * NOTE: Is only defined on root spans.
        */
        _export("H", SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate");
        /**
        * Attribute holding the sample rate of the previous trace.
        * This is used to sample consistently across subsequent traces in the browser SDK.
        *
        * Note: Only defined on root spans, if opted into consistent sampling
        */
        SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE = "sentry.previous_trace_sample_rate";
        /**
        * Use this attribute to represent the operation of a span.
        */
        _export("B", SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op");
        /**
        * Use this attribute to represent the origin of a span.
        */
        _export("V", SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin");
        /** The unit of a measurement, which may be stored as a TimedEvent. */
        _export("R", SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = "sentry.measurement_unit");
        /** The value of a measurement, which may be stored as a TimedEvent. */
        _export("z", SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = "sentry.measurement_value");
        /**
        * A custom span name set by users guaranteed to be taken over any automatically
        * inferred name. This attribute is removed before the span is sent.
        *
        * @internal only meant for internal SDK usage
        * @hidden
        */
        _export("L", SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = "sentry.custom_span_name");
        /**
        * The id of the profile that this span occurred in.
        */
        _export("I", SEMANTIC_ATTRIBUTE_PROFILE_ID = "sentry.profile_id");
        _export("F", SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = "sentry.exclusive_time"); //#endregion
        //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/tracing/spanstatus.js
        SPAN_STATUS_UNSET = 0;
        SPAN_STATUS_OK = 1; //#endregion
        //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/tracing/utils.js
        SCOPE_ON_START_SPAN_FIELD = "_sentryScope";
        ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
        SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
        _export("b", TRACE_FLAG_NONE = 0);
        _export("x", TRACE_FLAG_SAMPLED = 1);
        hasShownSpanDropWarning = false;
        CHILD_SPANS_FIELD = "_sentryChildSpans";
        ROOT_SPAN_FIELD = "_sentryRootSpan";
        _export("v", DEFAULT_ENVIRONMENT = "production"); //#endregion
        //#region ../../../node_modules/.pnpm/@sentry+core@9.42.1/node_modules/@sentry/core/build/esm/utils/dsn.js
        /** Regular expression used to extract org ID from a DSN host. */
        ORG_ID_REGEX = /^o(\d+)\./;
        /** Regular expression used to parse a Dsn. */
        DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        FROZEN_DSC_FIELD = "_frozenDsc";
        init_dist();
        STATE_PENDING = 0;
        STATE_RESOLVED = 1;
        STATE_REJECTED = 2;
        _export("c", SyncPromise = class SyncPromise {
          constructor(executor) {
            this._state = STATE_PENDING;
            this._handlers = [];
            this._runExecutor(executor);
          }
          /** @inheritdoc */
          then(onfulfilled, onrejected) {
            return new SyncPromise((resolve, reject) => {
              this._handlers.push([false, result => {
                if (!onfulfilled) resolve(result);else try {
                  resolve(onfulfilled(result));
                } catch (e) {
                  reject(e);
                }
              }, reason => {
                if (!onrejected) reject(reason);else try {
                  resolve(onrejected(reason));
                } catch (e) {
                  reject(e);
                }
              }]);
              this._executeHandlers();
            });
          }
          /** @inheritdoc */
          catch(onrejected) {
            return this.then(val => val, onrejected);
          }
          /** @inheritdoc */
          finally(onfinally) {
            return new SyncPromise((resolve, reject) => {
              let val;
              let isRejected;
              return this.then(value => {
                isRejected = false;
                val = value;
                if (onfinally) onfinally();
              }, reason => {
                isRejected = true;
                val = reason;
                if (onfinally) onfinally();
              }).then(() => {
                if (isRejected) {
                  reject(val);
                  return;
                }
                resolve(val);
              });
            });
          }
          /** Excute the resolve/reject handlers. */
          _executeHandlers() {
            if (this._state === STATE_PENDING) return;
            const cachedHandlers = this._handlers.slice();
            this._handlers = [];
            cachedHandlers.forEach(handler => {
              if (handler[0]) return;
              if (this._state === STATE_RESOLVED) handler[1](this._value);
              if (this._state === STATE_REJECTED) handler[2](this._value);
              handler[0] = true;
            });
          }
          /** Run the executor for the SyncPromise. */
          _runExecutor(executor) {
            const setResult = (state, value) => {
              if (this._state !== STATE_PENDING) return;
              if (isThenable(value)) {
                value.then(resolve, reject);
                return;
              }
              this._state = state;
              this._value = value;
              this._executeHandlers();
            };
            const resolve = value => {
              setResult(STATE_RESOLVED, value);
            };
            const reject = reason => {
              setResult(STATE_REJECTED, reason);
            };
            try {
              executor(resolve, reject);
            } catch (e) {
              reject(e);
            }
          }
        });
        captureContextKeys = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
      }
    };
  });
})();
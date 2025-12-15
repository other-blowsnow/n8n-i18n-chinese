;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    var __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __esm, __commonJS, __export, __copyProps, __toESM, __toCommonJS, __require;
    return {
      setters: [],
      execute: function () {
        //#region rolldown:runtime
        __create = Object.create;
        __defProp = Object.defineProperty;
        __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        __getOwnPropNames = Object.getOwnPropertyNames;
        __getProtoOf = Object.getPrototypeOf;
        __hasOwnProp = Object.prototype.hasOwnProperty;
        _export("n", __esm = (fn, res) => function () {
          return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
        });
        _export("t", __commonJS = (cb, mod) => function () {
          return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
          }).exports, mod), mod.exports;
        });
        _export("r", __export = all => {
          let target = {};
          for (var name in all) __defProp(target, name, {
            get: all[name],
            enumerable: true
          });
          return target;
        });
        __copyProps = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
            key = keys[i];
            if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
              get: (k => from[k]).bind(null, key),
              enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
            });
          }
          return to;
        };
        _export("o", __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
          value: mod,
          enumerable: true
        }) : target, mod)));
        _export("a", __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
          value: true
        }), mod));
        _export("i", __require = /* @__PURE__ */(x => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
          get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
        }) : x)(function (x) {
          if (typeof require !== "undefined") return require.apply(this, arguments);
          throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function.");
        })); //#endregion
      }
    };
  });
})();
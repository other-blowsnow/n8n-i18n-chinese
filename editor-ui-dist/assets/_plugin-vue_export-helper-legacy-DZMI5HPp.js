;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    var __plugin_vue_export_helper_default;
    return {
      setters: [],
      execute: function () {
        //#region \0plugin-vue:export-helper
        _export("t", __plugin_vue_export_helper_default = (sfc, props) => {
          const target = sfc.__vccOpts || sfc;
          for (const [key, val] of props) target[key] = val;
          return target;
        }); //#endregion
      }
    };
  });
})();
;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    var smartDecimal;
    return {
      setters: [],
      execute: function () {
        //#region ../../@n8n/utils/src/number/smartDecimal.ts
        _export("t", smartDecimal = (value, decimals = 2) => {
          if (Number.isInteger(value)) return value;
          if (value.toString().split(".")[1].length <= decimals) return value;
          return Number(value.toFixed(decimals));
        }); //#endregion
      }
    };
  });
})();
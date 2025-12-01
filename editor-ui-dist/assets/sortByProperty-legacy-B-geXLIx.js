;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    var sortByProperty;
    return {
      setters: [],
      execute: function () {
        //#region ../../@n8n/utils/src/sort/sortByProperty.ts
        _export("t", sortByProperty = (property, arr, order = "asc") => arr.sort((a, b) => {
          const result = String(a[property]).localeCompare(String(b[property]), void 0, {
            numeric: true,
            sensitivity: "base"
          });
          return order === "asc" ? result : -result;
        })); //#endregion
      }
    };
  });
})();
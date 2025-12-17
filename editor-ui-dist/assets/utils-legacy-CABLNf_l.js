;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./dateformat-legacy-C4HUJTCr.js"], function (_export, _context) {
    "use strict";

    var __toESM, require_dateformat, import_dateformat, getLastPublishedVersion, generateVersionName, formatTimestamp;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_dateformatLegacy00$Js) {
        require_dateformat = _dateformatLegacy00$Js.t;
      }],
      execute: function () {
        //#region src/features/workflows/workflowHistory/utils.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
        _export("r", getLastPublishedVersion = workflowPublishHistory => {
          return workflowPublishHistory.findLast(history => history.event === "activated");
        });
        _export("n", generateVersionName = versionId => {
          return `Version ${versionId.substring(0, 8)}`;
        });
        _export("t", formatTimestamp = value => {
          const currentYear = (/* @__PURE__ */new Date()).getFullYear().toString();
          const [date, time] = (0, import_dateformat.default)(value, `${value.startsWith(currentYear) ? "" : "yyyy "}mmm d"#"HH:MM:ss`).split("#");
          return {
            date,
            time
          };
        }); //#endregion
      }
    };
  });
})();
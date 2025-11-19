;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./_MapCache-legacy-CVC6fg6H.js", "./dateformat-legacy-Xt1X-tys.js"], function (_export, _context) {
    "use strict";

    var __toESM, i18n, require_dateformat, import_dateformat, convertToDisplayDateComponents, toDayMonth, toTime, formatTimeAgo;
    function convertToDisplayDate(fullDate) {
      const [date, time] = (0, import_dateformat.default)(fullDate, `mmm d${new Date(fullDate).getFullYear() === (/* @__PURE__ */new Date()).getFullYear() ? "" : ", yyyy"}#HH:MM:ss`).split("#");
      return {
        date,
        time
      };
    }
    _export("t", convertToDisplayDate);
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_MapCacheLegacy005Js) {
        i18n = _MapCacheLegacy005Js.pt;
      }, function (_dateformatLegacy00TJs) {
        require_dateformat = _dateformatLegacy00TJs.t;
      }],
      execute: function () {
        //#region src/app/utils/formatters/dateFormatter.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
        _export("n", convertToDisplayDateComponents = fullDate => {
          const [date, time] = (0, import_dateformat.default)(fullDate, `d mmm${new Date(fullDate).getFullYear() === (/* @__PURE__ */new Date()).getFullYear() ? "" : ", yyyy"}#HH:MM:ss`).split("#");
          return {
            date,
            time
          };
        });
        _export("i", toDayMonth = fullDate => (0, import_dateformat.default)(fullDate, "d mmm"));
        _export("a", toTime = (fullDate, includeMillis = false) => (0, import_dateformat.default)(fullDate, includeMillis ? "HH:MM:ss.l" : "HH:MM:ss"));
        _export("r", formatTimeAgo = fullDate => {
          const now = /* @__PURE__ */new Date();
          const date = new Date(fullDate);
          const diffInMs = now.getTime() - date.getTime();
          const diffInDays = Math.floor(diffInMs / (1e3 * 60 * 60 * 24));
          if (diffInDays === 0) return i18n.baseText("userActivity.today");else if (diffInDays === 1) return i18n.baseText("userActivity.yesterday");else if (diffInDays >= 2 && diffInDays <= 6) return (0, import_dateformat.default)(date, "dddd");else if (diffInDays >= 7 && diffInDays <= 13) return i18n.baseText("userActivity.lastTime", {
            interpolate: {
              time: (0, import_dateformat.default)(date, "dddd")
            }
          });else if (diffInDays >= 14 && diffInDays <= 30) return i18n.baseText("userActivity.daysAgo", {
            interpolate: {
              count: diffInDays.toString()
            }
          });else return (0, import_dateformat.default)(date, "mmmm d, yyyy");
        }); //#endregion
      }
    };
  });
})();
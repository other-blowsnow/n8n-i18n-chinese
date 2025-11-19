;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./dateformat-legacy-Xt1X-tys.js"], function (_export, _context) {
    "use strict";

    var __toESM, require_dateformat, import_dateformat, INSIGHT_TYPES, INSIGHTS_SUMMARY_ORDER, INSIGHTS_UNIT_MAPPING, INSIGHTS_DEVIATION_UNIT_MAPPING, INSIGHT_IMPACT_TYPES, INSIGHTS_UNIT_IMPACT_MAPPING, GRANULARITY_DATE_FORMAT_MASK;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_dateformatLegacy00TJs) {
        require_dateformat = _dateformatLegacy00TJs.t;
      }],
      execute: function () {
        //#region src/features/execution/insights/insights.constants.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
        _export("s", INSIGHT_TYPES = {
          TOTAL: "total",
          FAILED: "failed",
          FAILURE_RATE: "failureRate",
          TIME_SAVED: "timeSaved",
          AVERAGE_RUN_TIME: "averageRunTime"
        });
        _export("r", INSIGHTS_SUMMARY_ORDER = [INSIGHT_TYPES.TOTAL, INSIGHT_TYPES.FAILED, INSIGHT_TYPES.FAILURE_RATE, INSIGHT_TYPES.TIME_SAVED, INSIGHT_TYPES.AVERAGE_RUN_TIME]);
        _export("a", INSIGHTS_UNIT_MAPPING = {
          total: () => "",
          failed: () => "",
          failureRate: () => "%",
          timeSaved: value => Math.abs(value) < 60 ? "m" : "h",
          averageRunTime: () => "s"
        });
        _export("n", INSIGHTS_DEVIATION_UNIT_MAPPING = {
          total: () => "%",
          failed: () => "%",
          failureRate: () => "pp",
          timeSaved: deviation => Math.abs(deviation) < 60 ? "m" : "h",
          averageRunTime: () => "s"
        });
        _export("o", INSIGHT_IMPACT_TYPES = {
          POSITIVE: "positive",
          NEGATIVE: "negative",
          NEUTRAL: "neutral"
        });
        _export("i", INSIGHTS_UNIT_IMPACT_MAPPING = {
          total: INSIGHT_IMPACT_TYPES.POSITIVE,
          failed: INSIGHT_IMPACT_TYPES.NEGATIVE,
          failureRate: INSIGHT_IMPACT_TYPES.NEGATIVE,
          timeSaved: INSIGHT_IMPACT_TYPES.POSITIVE,
          averageRunTime: INSIGHT_IMPACT_TYPES.NEUTRAL
        });
        _export("t", GRANULARITY_DATE_FORMAT_MASK = {
          hour: date => (0, import_dateformat.default)(date, "HH:MM"),
          day: date => (0, import_dateformat.default)(date, "mmm d"),
          week: date => {
            const startDate = new Date(date);
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 7);
            const endDateFormat = startDate.getMonth() !== endDate.getMonth() ? "mmm d" : "d";
            return [(0, import_dateformat.default)(startDate, "mmm d"), (0, import_dateformat.default)(endDate, endDateFormat)].join("-");
          }
        }); //#endregion
      }
    };
  });
})();
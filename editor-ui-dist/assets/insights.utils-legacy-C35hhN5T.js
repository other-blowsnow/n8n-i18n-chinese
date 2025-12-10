;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./_MapCache-legacy-CGBwnn--.js", "./CalendarDate-legacy-BUvNgcoo.js", "./dateformat-legacy-C4HUJTCr.js", "./insights.constants-legacy-CQF1GF20.js"], function (_export, _context) {
    "use strict";

    var __toESM, useI18n, $14e0f24ef4ac5c92$export$629b0a497aa65267, $14e0f24ef4ac5c92$export$aa8b41735afcabd2, require_dateformat, INSIGHTS_UNIT_MAPPING, INSIGHTS_DEVIATION_UNIT_MAPPING, INSIGHTS_SUMMARY_ORDER, import_dateformat, DATE_FORMAT_DAY_MONTH_YEAR, DATE_FORMAT_DAY_MONTH, transformInsightsTimeSaved, transformInsightsAverageRunTime, transformInsightsFailureRate, transformInsightsValues, getPreviousValue, getDeviation, transformInsightsDeviation, transformInsightsSummary, timeRangeMappings, getTimeRangeLabels, formatDateRange, getMatchingPreset;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_CalendarDateLegacy00NJs) {
        $14e0f24ef4ac5c92$export$629b0a497aa65267 = _CalendarDateLegacy00NJs.l;
        $14e0f24ef4ac5c92$export$aa8b41735afcabd2 = _CalendarDateLegacy00NJs.m;
      }, function (_dateformatLegacy00$Js) {
        require_dateformat = _dateformatLegacy00$Js.t;
      }, function (_insightsConstantsLegacy03fJs) {
        INSIGHTS_UNIT_MAPPING = _insightsConstantsLegacy03fJs.a;
        INSIGHTS_DEVIATION_UNIT_MAPPING = _insightsConstantsLegacy03fJs.n;
        INSIGHTS_SUMMARY_ORDER = _insightsConstantsLegacy03fJs.r;
      }],
      execute: function () {
        //#region src/features/execution/insights/insights.utils.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
        DATE_FORMAT_DAY_MONTH_YEAR = "d mmm, yyyy";
        DATE_FORMAT_DAY_MONTH = "d mmm";
        _export("c", transformInsightsTimeSaved = minutes => Math.round(minutes / (Math.abs(minutes) < 60 ? 1 : 60)));
        _export("a", transformInsightsAverageRunTime = ms => ms / 1e3);
        _export("o", transformInsightsFailureRate = value => value * 100);
        transformInsightsValues = {
          total: value => value,
          failed: value => value,
          timeSaved: transformInsightsTimeSaved,
          averageRunTime: transformInsightsAverageRunTime,
          failureRate: transformInsightsFailureRate
        };
        getPreviousValue = (value, deviation) => value - deviation;
        getDeviation = (value, deviation) => {
          if (value === 0 && deviation === 0) return 0;
          const previousValue = getPreviousValue(value, deviation);
          if (previousValue === 0) return null;
          return deviation / previousValue * 100;
        };
        transformInsightsDeviation = {
          total: getDeviation,
          failed: getDeviation,
          timeSaved: (_, deviation) => transformInsightsTimeSaved(deviation),
          averageRunTime: (_, deviation) => transformInsightsAverageRunTime(deviation),
          failureRate: (_, deviation) => transformInsightsFailureRate(deviation)
        };
        _export("s", transformInsightsSummary = data => data ? INSIGHTS_SUMMARY_ORDER.map(key => ({
          id: key,
          value: transformInsightsValues[key](data[key].value),
          deviation: data[key].deviation === null ? null : transformInsightsDeviation[key](data[key].value, data[key].deviation),
          deviationUnit: data[key].deviation === null ? "" : INSIGHTS_DEVIATION_UNIT_MAPPING[key](data[key].deviation),
          unit: INSIGHTS_UNIT_MAPPING[key](data[key].value)
        })) : []);
        _export("i", timeRangeMappings = {
          day: 1,
          week: 7,
          "2weeks": 14,
          month: 30,
          quarter: 90,
          "6months": 180,
          year: 365
        });
        _export("r", getTimeRangeLabels = () => {
          const i18n = useI18n();
          return {
            day: i18n.baseText("insights.lastNHours", {
              interpolate: {
                count: 24
              }
            }),
            week: i18n.baseText("insights.lastNDays", {
              interpolate: {
                count: 7
              }
            }),
            "2weeks": i18n.baseText("insights.lastNDays", {
              interpolate: {
                count: 14
              }
            }),
            month: i18n.baseText("insights.lastNDays", {
              interpolate: {
                count: 30
              }
            }),
            quarter: i18n.baseText("insights.lastNDays", {
              interpolate: {
                count: 90
              }
            }),
            "6months": i18n.baseText("insights.months", {
              interpolate: {
                count: 6
              }
            }),
            year: i18n.baseText("insights.oneYear")
          };
        });
        /**
        * @returns A human readable string representing the date range e.g '01 Jan - 05 Jan 2025'
        */
        _export("t", formatDateRange = range => {
          const {
            start,
            end
          } = range;
          if (!start) return "";
          const startDate = start.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
          const endDate = end?.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
          if (!end || start.compare(end) === 0) return (0, import_dateformat.default)(startDate, DATE_FORMAT_DAY_MONTH_YEAR);
          if (start.year === end.year) return `${(0, import_dateformat.default)(startDate, DATE_FORMAT_DAY_MONTH)} - ${(0, import_dateformat.default)(endDate, DATE_FORMAT_DAY_MONTH_YEAR)}`;
          return `${(0, import_dateformat.default)(startDate, DATE_FORMAT_DAY_MONTH_YEAR)} - ${(0, import_dateformat.default)(endDate, DATE_FORMAT_DAY_MONTH_YEAR)}`;
        });
        /**
        * @returns The matching preset key if the range matches a preset, null for custom ranges
        */
        _export("n", getMatchingPreset = range => {
          const {
            start,
            end
          } = range;
          if (!start || !end || !$14e0f24ef4ac5c92$export$629b0a497aa65267(end, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())) return null;
          const daysDiff = end.compare(start);
          for (const [key, days] of Object.entries(timeRangeMappings)) if (daysDiff === days) return key;
          return null;
        }); //#endregion
      }
    };
  });
})();
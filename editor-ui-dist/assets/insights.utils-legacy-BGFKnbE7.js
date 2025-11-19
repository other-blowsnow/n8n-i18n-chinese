;
(function () {
  System.register(["./_MapCache-legacy-CVC6fg6H.js", "./insights.constants-legacy-D5Y8YhR_.js"], function (_export, _context) {
    "use strict";

    var useI18n, INSIGHTS_UNIT_MAPPING, INSIGHTS_DEVIATION_UNIT_MAPPING, INSIGHTS_SUMMARY_ORDER, transformInsightsTimeSaved, transformInsightsAverageRunTime, transformInsightsFailureRate, transformInsightsValues, getPreviousValue, getDeviation, transformInsightsDeviation, transformInsightsSummary, timeRangeMappings, getTimeRangeLabels;
    return {
      setters: [function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_insightsConstantsLegacy033Js) {
        INSIGHTS_UNIT_MAPPING = _insightsConstantsLegacy033Js.a;
        INSIGHTS_DEVIATION_UNIT_MAPPING = _insightsConstantsLegacy033Js.n;
        INSIGHTS_SUMMARY_ORDER = _insightsConstantsLegacy033Js.r;
      }],
      execute: function () {
        //#region src/features/execution/insights/insights.utils.ts
        _export("o", transformInsightsTimeSaved = minutes => Math.round(minutes / (Math.abs(minutes) < 60 ? 1 : 60)));
        _export("r", transformInsightsAverageRunTime = ms => ms / 1e3);
        _export("i", transformInsightsFailureRate = value => value * 100);
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
        _export("a", transformInsightsSummary = data => data ? INSIGHTS_SUMMARY_ORDER.map(key => ({
          id: key,
          value: transformInsightsValues[key](data[key].value),
          deviation: data[key].deviation === null ? null : transformInsightsDeviation[key](data[key].value, data[key].deviation),
          deviationUnit: data[key].deviation === null ? "" : INSIGHTS_DEVIATION_UNIT_MAPPING[key](data[key].deviation),
          unit: INSIGHTS_UNIT_MAPPING[key](data[key].value)
        })) : []);
        _export("n", timeRangeMappings = {
          day: 1,
          week: 7,
          "2weeks": 14,
          month: 30,
          quarter: 90,
          "6months": 180,
          year: 365
        });
        _export("t", getTimeRangeLabels = () => {
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
        }); //#endregion
      }
    };
  });
})();
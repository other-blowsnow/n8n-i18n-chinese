import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { a as INSIGHTS_UNIT_MAPPING, n as INSIGHTS_DEVIATION_UNIT_MAPPING, r as INSIGHTS_SUMMARY_ORDER } from "./insights.constants-DK2g3nnD.js";
const transformInsightsTimeSaved = (minutes) => Math.round(minutes / (Math.abs(minutes) < 60 ? 1 : 60));
const transformInsightsAverageRunTime = (ms) => ms / 1e3;
const transformInsightsFailureRate = (value) => value * 100;
const transformInsightsValues = {
	total: (value) => value,
	failed: (value) => value,
	timeSaved: transformInsightsTimeSaved,
	averageRunTime: transformInsightsAverageRunTime,
	failureRate: transformInsightsFailureRate
};
var getPreviousValue = (value, deviation) => value - deviation;
var getDeviation = (value, deviation) => {
	if (value === 0 && deviation === 0) return 0;
	const previousValue = getPreviousValue(value, deviation);
	if (previousValue === 0) return null;
	return deviation / previousValue * 100;
};
const transformInsightsDeviation = {
	total: getDeviation,
	failed: getDeviation,
	timeSaved: (_, deviation) => transformInsightsTimeSaved(deviation),
	averageRunTime: (_, deviation) => transformInsightsAverageRunTime(deviation),
	failureRate: (_, deviation) => transformInsightsFailureRate(deviation)
};
const transformInsightsSummary = (data) => data ? INSIGHTS_SUMMARY_ORDER.map((key) => ({
	id: key,
	value: transformInsightsValues[key](data[key].value),
	deviation: data[key].deviation === null ? null : transformInsightsDeviation[key](data[key].value, data[key].deviation),
	deviationUnit: data[key].deviation === null ? "" : INSIGHTS_DEVIATION_UNIT_MAPPING[key](data[key].deviation),
	unit: INSIGHTS_UNIT_MAPPING[key](data[key].value)
})) : [];
const timeRangeMappings = {
	day: 1,
	week: 7,
	"2weeks": 14,
	month: 30,
	quarter: 90,
	"6months": 180,
	year: 365
};
const getTimeRangeLabels = () => {
	const i18n = useI18n();
	return {
		day: i18n.baseText("insights.lastNHours", { interpolate: { count: 24 } }),
		week: i18n.baseText("insights.lastNDays", { interpolate: { count: 7 } }),
		"2weeks": i18n.baseText("insights.lastNDays", { interpolate: { count: 14 } }),
		month: i18n.baseText("insights.lastNDays", { interpolate: { count: 30 } }),
		quarter: i18n.baseText("insights.lastNDays", { interpolate: { count: 90 } }),
		"6months": i18n.baseText("insights.months", { interpolate: { count: 6 } }),
		year: i18n.baseText("insights.oneYear")
	};
};
export { transformInsightsSummary as a, transformInsightsFailureRate as i, timeRangeMappings as n, transformInsightsTimeSaved as o, transformInsightsAverageRunTime as r, getTimeRangeLabels as t };

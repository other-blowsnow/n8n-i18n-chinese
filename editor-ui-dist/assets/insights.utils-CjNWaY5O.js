import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { l as $14e0f24ef4ac5c92$export$629b0a497aa65267, m as $14e0f24ef4ac5c92$export$aa8b41735afcabd2 } from "./CalendarDate-DpJ94D5y.js";
import { t as require_dateformat } from "./dateformat-Bc6vycUF.js";
import { a as INSIGHTS_UNIT_MAPPING, n as INSIGHTS_DEVIATION_UNIT_MAPPING, r as INSIGHTS_SUMMARY_ORDER } from "./insights.constants-Q1hG0DUw.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var DATE_FORMAT_DAY_MONTH_YEAR = "d mmm, yyyy";
var DATE_FORMAT_DAY_MONTH = "d mmm";
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
const formatDateRange = (range) => {
	const { start, end } = range;
	if (!start) return "";
	const startDate = start.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
	const endDate = end?.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
	if (!end || start.compare(end) === 0) return (0, import_dateformat.default)(startDate, DATE_FORMAT_DAY_MONTH_YEAR);
	if (start.year === end.year) return `${(0, import_dateformat.default)(startDate, DATE_FORMAT_DAY_MONTH)} - ${(0, import_dateformat.default)(endDate, DATE_FORMAT_DAY_MONTH_YEAR)}`;
	return `${(0, import_dateformat.default)(startDate, DATE_FORMAT_DAY_MONTH_YEAR)} - ${(0, import_dateformat.default)(endDate, DATE_FORMAT_DAY_MONTH_YEAR)}`;
};
const getMatchingPreset = (range) => {
	const { start, end } = range;
	if (!start || !end || !$14e0f24ef4ac5c92$export$629b0a497aa65267(end, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())) return null;
	const daysDiff = end.compare(start);
	for (const [key, days] of Object.entries(timeRangeMappings)) if (daysDiff === days) return key;
	return null;
};
export { transformInsightsAverageRunTime as a, transformInsightsTimeSaved as c, timeRangeMappings as i, getMatchingPreset as n, transformInsightsFailureRate as o, getTimeRangeLabels as r, transformInsightsSummary as s, formatDateRange as t };

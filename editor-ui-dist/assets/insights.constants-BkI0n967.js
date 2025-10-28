import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { t as require_dateformat } from "./dateformat-D7TIhVd4.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat());
const INSIGHT_TYPES = {
	TOTAL: "total",
	FAILED: "failed",
	FAILURE_RATE: "failureRate",
	TIME_SAVED: "timeSaved",
	AVERAGE_RUN_TIME: "averageRunTime"
};
const INSIGHTS_SUMMARY_ORDER = [
	INSIGHT_TYPES.TOTAL,
	INSIGHT_TYPES.FAILED,
	INSIGHT_TYPES.FAILURE_RATE,
	INSIGHT_TYPES.TIME_SAVED,
	INSIGHT_TYPES.AVERAGE_RUN_TIME
];
const INSIGHTS_UNIT_MAPPING = {
	total: () => "",
	failed: () => "",
	failureRate: () => "%",
	timeSaved: (value) => Math.abs(value) < 60 ? "m" : "h",
	averageRunTime: () => "s"
};
const INSIGHTS_DEVIATION_UNIT_MAPPING = {
	total: () => "%",
	failed: () => "%",
	failureRate: () => "pp",
	timeSaved: (deviation) => Math.abs(deviation) < 60 ? "m" : "h",
	averageRunTime: () => "s"
};
const INSIGHT_IMPACT_TYPES = {
	POSITIVE: "positive",
	NEGATIVE: "negative",
	NEUTRAL: "neutral"
};
const INSIGHTS_UNIT_IMPACT_MAPPING = {
	total: INSIGHT_IMPACT_TYPES.POSITIVE,
	failed: INSIGHT_IMPACT_TYPES.NEGATIVE,
	failureRate: INSIGHT_IMPACT_TYPES.NEGATIVE,
	timeSaved: INSIGHT_IMPACT_TYPES.POSITIVE,
	averageRunTime: INSIGHT_IMPACT_TYPES.NEUTRAL
};
const GRANULARITY_DATE_FORMAT_MASK = {
	hour: (date) => (0, import_dateformat.default)(date, "HH:MM"),
	day: (date) => (0, import_dateformat.default)(date, "mmm d"),
	week: (date) => {
		const startDate = new Date(date);
		const endDate = new Date(startDate);
		endDate.setDate(startDate.getDate() + 7);
		const endDateFormat = startDate.getMonth() !== endDate.getMonth() ? "mmm d" : "d";
		return [(0, import_dateformat.default)(startDate, "mmm d"), (0, import_dateformat.default)(endDate, endDateFormat)].join("-");
	}
};
const TELEMETRY_TIME_RANGE = {
	day: 1,
	week: 7,
	"2weeks": 14,
	month: 30,
	quarter: 90,
	"6months": 180,
	year: 365
};
const UNLICENSED_TIME_RANGE = "UNLICENSED_TIME_RANGE";
export { INSIGHTS_UNIT_MAPPING as a, TELEMETRY_TIME_RANGE as c, INSIGHTS_UNIT_IMPACT_MAPPING as i, UNLICENSED_TIME_RANGE as l, INSIGHTS_DEVIATION_UNIT_MAPPING as n, INSIGHT_IMPACT_TYPES as o, INSIGHTS_SUMMARY_ORDER as r, INSIGHT_TYPES as s, GRANULARITY_DATE_FORMAT_MASK as t };

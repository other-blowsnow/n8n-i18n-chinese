import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { rt as require_startCase } from "./workflowDocument.store-W274j3PU.js";
//#region src/features/ai/evaluation.ee/evaluation.utils.ts
var import_startCase = /* @__PURE__ */ __toESM(require_startCase(), 1);
/**
* Extract a human-readable answer string from an end-node output value.
*
* Priority: `output` > `text` > `response` > single-key object value > JSON.stringify.
* Primitives pass through as String(value); null/undefined → ''.
*
* Keep in sync with the `endAnswer` n8n expression in buildEvaluationConfigDto.ts.
*/
function extractAnswerText(json) {
	if (json === null || json === void 0) return "";
	if (typeof json !== "object") return String(json);
	const preferred = Reflect.get(json, "output") ?? Reflect.get(json, "text") ?? Reflect.get(json, "response");
	if (preferred !== void 0 && preferred !== null) return typeof preferred === "object" ? JSON.stringify(preferred) : String(preferred);
	const keys = Object.keys(json);
	if (keys.length === 1) {
		const only = Reflect.get(json, keys[0]);
		return typeof only === "object" && only !== null ? JSON.stringify(only) : String(only);
	}
	return JSON.stringify(json);
}
var PREDEFINED_METRIC_KEYS = new Set([
	"promptTokens",
	"completionTokens",
	"totalTokens",
	"executionTime"
]);
function getUserDefinedMetricNames(metrics) {
	if (!metrics) return [];
	return Object.keys(metrics).filter((key) => !PREDEFINED_METRIC_KEYS.has(key));
}
function normalizeMetricValue(value) {
	if (value === void 0 || Number.isNaN(value)) return void 0;
	return value;
}
function isScoreShapedMetric(value) {
	return typeof value === "number" && value >= 0 && value <= 1;
}
function deriveRunsStatus(runs) {
	return runs.some((run) => run.status === "new" || run.status === "running") ? "running" : "done";
}
function buildScoreShapedMetricGroups(runs) {
	const orderedKeys = [];
	const seen = /* @__PURE__ */ new Set();
	for (const run of runs) for (const key of Object.keys(run.metrics ?? {})) {
		if (PREDEFINED_METRIC_KEYS.has(key) || seen.has(key)) continue;
		seen.add(key);
		orderedKeys.push(key);
	}
	return orderedKeys.filter((key) => runs.every((run) => {
		const value = run.metrics?.[key];
		return value === void 0 || isScoreShapedMetric(value);
	})).map((key) => ({
		key,
		values: runs.map((run) => {
			const value = run.metrics?.[key];
			return typeof value === "number" ? value : null;
		})
	}));
}
function computeDelta(current, previous) {
	const currentNum = normalizeMetricValue(current);
	const previousNum = normalizeMetricValue(previous);
	if (currentNum === void 0 || previousNum === void 0) return void 0;
	return currentNum - previousNum;
}
function getDeltaTone(delta) {
	if (delta === void 0) return "default";
	if (delta > 0) return "positive";
	if (delta < 0) return "negative";
	return "default";
}
function formatTokens(tokens, options = {}) {
	if (tokens === void 0 || Number.isNaN(tokens)) return "–";
	const formatted = Math.round(tokens).toLocaleString();
	return options.withUnit === false ? formatted : `${formatted}t`;
}
function stringifyValue(value) {
	if (value === null || value === void 0) return "";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean") return String(value);
	try {
		return JSON.stringify(value);
	} catch {
		return "";
	}
}
function getMetricScale(category) {
	return category === "aiBased" ? "oneToFive" : "normalized";
}
function casePassed(value) {
	return normalizeMetricValue(value) === 1;
}
function formatMetricPercent(value, options = {}) {
	const num = normalizeMetricValue(value);
	if (num === void 0) return "–";
	const scaled = getMetricScale(options.category) === "oneToFive" ? num / 5 * 100 : Math.abs(num) <= 1 ? num * 100 : num;
	return `${Math.round(scaled)}%`;
}
function formatMetricLabel(name) {
	return (0, import_startCase.default)(name);
}
function getMetricCategory(metric) {
	switch (metric) {
		case "correctness":
		case "helpfulness": return "aiBased";
		case "stringSimilarity": return "stringSimilarity";
		case "categorization": return "categorization";
		case "toolsUsed": return "toolsUsed";
		default: return "custom";
	}
}
function formatScoreNumerator(value) {
	const rounded = Math.round(value * 10) / 10;
	return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);
}
function formatMetricRawScore(value, options = {}) {
	if (getMetricScale(options.category) !== "oneToFive") return "";
	const num = normalizeMetricValue(value);
	if (num === void 0) return "";
	return `${formatScoreNumerator(num)}/5`;
}
function formatMetricAverage(value, options = {}) {
	const num = normalizeMetricValue(value);
	if (num === void 0) return "–";
	return getMetricScale(options.category) === "oneToFive" ? `${formatScoreNumerator(num)} / 5` : num.toFixed(2);
}
function formatMetricRawScoreSum(values, options = {}) {
	const usable = values.map(normalizeMetricValue).filter((v) => v !== void 0);
	if (usable.length === 0) return "";
	const isOneToFive = getMetricScale(options.category) === "oneToFive";
	const perCaseMax = isOneToFive ? 5 : 1;
	const numeratorSum = usable.reduce((sum, value) => sum + value, 0);
	const denominator = perCaseMax * usable.length;
	return `${isOneToFive ? formatScoreNumerator(numeratorSum) : numeratorSum.toFixed(2)}/${denominator}`;
}
function formatDeltaPercent(delta, options = {}) {
	if (delta === void 0 || Number.isNaN(delta)) return "";
	const scaled = getMetricScale(options.category) === "oneToFive" ? delta / 5 * 100 : Math.abs(delta) <= 1 ? delta * 100 : delta;
	const rounded = Math.round(scaled);
	return `${rounded > 0 ? "+" : ""}${rounded}%`;
}
function formatDuration(ms) {
	if (ms === void 0 || Number.isNaN(ms) || ms < 0) return "–";
	if (ms < 1e3) return `${Math.round(ms)}ms`;
	const totalSeconds = ms / 1e3;
	if (totalSeconds < 60) {
		const rounded = Math.round(totalSeconds * 10) / 10;
		if (rounded < 60) return Number.isInteger(rounded) ? `${rounded}s` : `${rounded.toFixed(1)}s`;
	}
	const totalRoundedSeconds = Math.round(totalSeconds);
	const minutes = Math.floor(totalRoundedSeconds / 60);
	const seconds = totalRoundedSeconds - minutes * 60;
	return seconds === 0 ? `${minutes}m` : `${minutes}m ${seconds}s`;
}
function computeDurationMs(startIso, endIso) {
	if (!startIso || !endIso) return void 0;
	const start = new Date(startIso).getTime();
	const end = new Date(endIso).getTime();
	if (Number.isNaN(start) || Number.isNaN(end) || end < start) return void 0;
	return end - start;
}
//#endregion
export { getUserDefinedMetricNames as _, deriveRunsStatus as a, stringifyValue as b, formatDuration as c, formatMetricPercent as d, formatMetricRawScore as f, getMetricCategory as g, getDeltaTone as h, computeDurationMs as i, formatMetricAverage as l, formatTokens as m, casePassed as n, extractAnswerText as o, formatMetricRawScoreSum as p, computeDelta as r, formatDeltaPercent as s, buildScoreShapedMetricGroups as t, formatMetricLabel as u, isScoreShapedMetric as v, normalizeMetricValue as y };

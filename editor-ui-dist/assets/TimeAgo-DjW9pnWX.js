import { C as computed, Cn as toDisplayString, D as createElementBlock, P as defineComponent, et as openBlock, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Ki as convertToHumanReadableDate } from "./users.store-qBZsmf9-.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
var EN_US = [
	"second",
	"minute",
	"hour",
	"day",
	"week",
	"month",
	"year"
];
function en_US_default(diff, idx) {
	if (idx === 0) return ["just now", "right now"];
	var unit = EN_US[Math.floor(idx / 2)];
	if (diff > 1) unit += "s";
	return [diff + " " + unit + " ago", "in " + diff + " " + unit];
}
var ZH_CN = [
	"秒",
	"分钟",
	"小时",
	"天",
	"周",
	"个月",
	"年"
];
function zh_CN_default(diff, idx) {
	if (idx === 0) return ["刚刚", "片刻后"];
	var unit = ZH_CN[~~(idx / 2)];
	return [diff + " " + unit + "前", diff + " " + unit + "后"];
}
var Locales = {};
var register = function(locale, func) {
	Locales[locale] = func;
};
var getLocale = function(locale) {
	return Locales[locale] || Locales["en_US"];
};
var SEC_ARRAY = [
	60,
	60,
	24,
	7,
	365 / 7 / 12,
	12
];
function toDate(input) {
	if (input instanceof Date) return input;
	if (!isNaN(input) || /^\d+$/.test(input)) return new Date(parseInt(input));
	input = (input || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2");
	return new Date(input);
}
function formatDiff(diff, localeFunc) {
	var agoIn = diff < 0 ? 1 : 0;
	diff = Math.abs(diff);
	var totalSec = diff;
	var idx = 0;
	for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) diff /= SEC_ARRAY[idx];
	diff = Math.floor(diff);
	idx *= 2;
	if (diff > (idx === 0 ? 9 : 1)) idx += 1;
	return localeFunc(diff, idx, totalSec)[agoIn].replace("%s", diff.toString());
}
function diffSec(date, relativeDate) {
	return (+(relativeDate ? toDate(relativeDate) : /* @__PURE__ */ new Date()) - +toDate(date)) / 1e3;
}
var format = function(date, locale, opts) {
	return formatDiff(diffSec(date, opts && opts.relativeDate), getLocale(locale));
};
register("en_US", en_US_default);
register("zh_CN", zh_CN_default);
var _hoisted_1 = ["title"];
var TimeAgo_default = /* @__PURE__ */ defineComponent({
	__name: "TimeAgo",
	props: {
		date: {},
		capitalize: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const rootStore = useRootStore();
		const i18n = useI18n();
		const defaultLocale = computed(() => rootStore.defaultLocale);
		const formatted = computed(() => {
			const text = format(props.date, defaultLocale.value);
			if (!props.capitalize) return text.toLowerCase();
			return text;
		});
		const convertDate = computed(() => {
			return convertToHumanReadableDate(new Date(props.date).getTime());
		});
		onBeforeMount(() => {
			register(defaultLocale.value, localeFunc);
		});
		function localeFunc(_, index) {
			return [
				[i18n.baseText("timeAgo.justNow"), i18n.baseText("timeAgo.rightNow")],
				[i18n.baseText("timeAgo.justNow"), i18n.baseText("timeAgo.rightNow")],
				[i18n.baseText("timeAgo.oneMinuteAgo"), i18n.baseText("timeAgo.inOneMinute")],
				[i18n.baseText("timeAgo.minutesAgo"), i18n.baseText("timeAgo.inMinutes")],
				[i18n.baseText("timeAgo.oneHourAgo"), i18n.baseText("timeAgo.inOneHour")],
				[i18n.baseText("timeAgo.hoursAgo"), i18n.baseText("timeAgo.inHours")],
				[i18n.baseText("timeAgo.oneDayAgo"), i18n.baseText("timeAgo.inOneDay")],
				[i18n.baseText("timeAgo.daysAgo"), i18n.baseText("timeAgo.inDays")],
				[i18n.baseText("timeAgo.oneWeekAgo"), i18n.baseText("timeAgo.inOneWeek")],
				[i18n.baseText("timeAgo.weeksAgo"), i18n.baseText("timeAgo.inWeeks")],
				[i18n.baseText("timeAgo.oneMonthAgo"), i18n.baseText("timeAgo.inOneMonth")],
				[i18n.baseText("timeAgo.monthsAgo"), i18n.baseText("timeAgo.inMonths")],
				[i18n.baseText("timeAgo.oneYearAgo"), i18n.baseText("timeAgo.inOneYear")],
				[i18n.baseText("timeAgo.yearsAgo"), i18n.baseText("timeAgo.inYears")]
			][index];
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { title: convertDate.value }, toDisplayString(formatted.value), 9, _hoisted_1);
		};
	}
});
export { TimeAgo_default as t };

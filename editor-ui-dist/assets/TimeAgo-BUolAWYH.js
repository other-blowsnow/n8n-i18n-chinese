import { $ as openBlock, E as createElementBlock, K as onBeforeMount, N as defineComponent, S as computed, Sn as toDisplayString } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-BegZp46R.js";
import { Wi as convertToHumanReadableDate } from "./users.store-CargbksM.js";
import { t as useRootStore } from "./useRootStore-CCt5xa74.js";
//#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/lang/en_US.js
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
//#endregion
//#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/lang/zh_CN.js
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
//#endregion
//#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/register.js
/**
* Created by hustcc on 18/5/20.
* Contract: i@hust.cc
*/
/**
* All supported locales
*/
var Locales = {};
/**
* register a locale
* @param locale
* @param func
*/
var register = function(locale, func) {
	Locales[locale] = func;
};
/**
* get a locale, default is en_US
* @param locale
* @returns {*}
*/
var getLocale = function(locale) {
	return Locales[locale] || Locales["en_US"];
};
//#endregion
//#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/utils/date.js
/**
* Created by hustcc on 18/5/20.
* Contract: i@hust.cc
*/
var SEC_ARRAY = [
	60,
	60,
	24,
	7,
	365 / 7 / 12,
	12
];
/**
* format Date / string / timestamp to timestamp
* @param input
* @returns {*}
*/
function toDate(input) {
	if (input instanceof Date) return input;
	if (!isNaN(input) || /^\d+$/.test(input)) return new Date(parseInt(input));
	input = (input || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2");
	return new Date(input);
}
/**
* format the diff second to *** time ago, with setting locale
* @param diff
* @param localeFunc
* @returns
*/
function formatDiff(diff, localeFunc) {
	/**
	* if locale is not exist, use defaultLocale.
	* if defaultLocale is not exist, use build-in `en`.
	* be sure of no error when locale is not exist.
	*
	* If `time in`, then 1
	* If `time ago`, then 0
	*/
	var agoIn = diff < 0 ? 1 : 0;
	/**
	* Get absolute value of number (|diff| is non-negative) value of x
	* |diff| = diff if diff is positive
	* |diff| = -diff if diff is negative
	* |0| = 0
	*/
	diff = Math.abs(diff);
	/**
	* Time in seconds
	*/
	var totalSec = diff;
	/**
	* Unit of time
	*/
	var idx = 0;
	for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) diff /= SEC_ARRAY[idx];
	/**
	* Math.floor() is alternative of ~~
	*
	* The differences and bugs:
	* Math.floor(3.7) -> 4 but ~~3.7 -> 3
	* Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
	*
	* More information about the performance of algebraic:
	* https://www.youtube.com/watch?v=65-RbBwZQdU
	*/
	diff = Math.floor(diff);
	idx *= 2;
	if (diff > (idx === 0 ? 9 : 1)) idx += 1;
	return localeFunc(diff, idx, totalSec)[agoIn].replace("%s", diff.toString());
}
/**
* calculate the diff second between date to be formatted an now date.
* @param date
* @param relativeDate
* @returns {number}
*/
function diffSec(date, relativeDate) {
	return (+(relativeDate ? toDate(relativeDate) : /* @__PURE__ */ new Date()) - +toDate(date)) / 1e3;
}
//#endregion
//#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/format.js
/**
* format a TDate into string
* @param date
* @param locale
* @param opts
*/
var format = function(date, locale, opts) {
	return formatDiff(diffSec(date, opts && opts.relativeDate), getLocale(locale));
};
//#endregion
//#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/index.js
/**
* Created by hustcc on 18/5/20.
* Contract: i@hust.cc
*/
register("en_US", en_US_default);
register("zh_CN", zh_CN_default);
//#endregion
//#region src/app/components/TimeAgo.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["title"];
//#endregion
//#region src/app/components/TimeAgo.vue
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
//#endregion
export { TimeAgo_default as t };

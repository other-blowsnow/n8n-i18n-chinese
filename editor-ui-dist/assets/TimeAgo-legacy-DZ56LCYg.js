;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, defineComponent, toDisplayString, openBlock, onBeforeMount, useI18n, useRootStore, convertToHumanReadableDate, EN_US, ZH_CN, Locales, register, getLocale, SEC_ARRAY, format, _hoisted_1, TimeAgo_vue_vue_type_script_setup_true_lang_default, TimeAgo_default;
    function en_US_default(diff, idx) {
      if (idx === 0) return ["just now", "right now"];
      var unit = EN_US[Math.floor(idx / 2)];
      if (diff > 1) unit += "s";
      return [diff + " " + unit + " ago", "in " + diff + " " + unit];
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/lang/zh_CN.js

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
      return (+(relativeDate ? toDate(relativeDate) : /* @__PURE__ */new Date()) - +toDate(date)) / 1e3;
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/format.js
    /**
    * format a TDate into string
    * @param date
    * @param locale
    * @param opts
    */
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_useTelemetryLegacy00FJs) {
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        convertToHumanReadableDate = _useTelemetryLegacy00FJs.pi;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/lang/en_US.js
        EN_US = ["second", "minute", "hour", "day", "week", "month", "year"];
        ZH_CN = ["秒", "分钟", "小时", "天", "周", "个月", "年"];
        Locales = {};
        /**
        * register a locale
        * @param locale
        * @param func
        */
        register = function (locale, func) {
          Locales[locale] = func;
        };
        /**
        * get a locale, default is en_US
        * @param locale
        * @returns {*}
        */
        getLocale = function (locale) {
          return Locales[locale] || Locales["en_US"];
        }; //#endregion
        //#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/utils/date.js
        /**
        * Created by hustcc on 18/5/20.
        * Contract: i@hust.cc
        */
        SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12];
        format = function (date, locale, opts) {
          return formatDiff(diffSec(date, opts && opts.relativeDate), getLocale(locale));
        }; //#endregion
        //#region ../../../node_modules/.pnpm/timeago.js@4.0.2/node_modules/timeago.js/esm/index.js
        register("en_US", en_US_default);
        register("zh_CN", zh_CN_default);

        //#endregion
        //#region src/app/components/TimeAgo.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["title"];
        TimeAgo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
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
              return [[i18n.baseText("timeAgo.justNow"), i18n.baseText("timeAgo.rightNow")], [i18n.baseText("timeAgo.justNow"), i18n.baseText("timeAgo.rightNow")], [i18n.baseText("timeAgo.oneMinuteAgo"), i18n.baseText("timeAgo.inOneMinute")], [i18n.baseText("timeAgo.minutesAgo"), i18n.baseText("timeAgo.inMinutes")], [i18n.baseText("timeAgo.oneHourAgo"), i18n.baseText("timeAgo.inOneHour")], [i18n.baseText("timeAgo.hoursAgo"), i18n.baseText("timeAgo.inHours")], [i18n.baseText("timeAgo.oneDayAgo"), i18n.baseText("timeAgo.inOneDay")], [i18n.baseText("timeAgo.daysAgo"), i18n.baseText("timeAgo.inDays")], [i18n.baseText("timeAgo.oneWeekAgo"), i18n.baseText("timeAgo.inOneWeek")], [i18n.baseText("timeAgo.weeksAgo"), i18n.baseText("timeAgo.inWeeks")], [i18n.baseText("timeAgo.oneMonthAgo"), i18n.baseText("timeAgo.inOneMonth")], [i18n.baseText("timeAgo.monthsAgo"), i18n.baseText("timeAgo.inMonths")], [i18n.baseText("timeAgo.oneYearAgo"), i18n.baseText("timeAgo.inOneYear")], [i18n.baseText("timeAgo.yearsAgo"), i18n.baseText("timeAgo.inYears")]][index];
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("span", {
                title: convertDate.value
              }, toDisplayString(formatted.value), 9, _hoisted_1);
            };
          }
        }); //#endregion
        //#region src/app/components/TimeAgo.vue
        _export("t", TimeAgo_default = TimeAgo_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();
;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js"], function (_export, _context) {
    "use strict";

    var __toESM, __commonJS, computed, createElementBlock, createCommentVNode, getCurrentInstance, nextTick, unref, ref, createVNode, defineComponent, reactive, toDisplayString, createBlock, toRef, mergeProps, onMounted, Fragment, normalizeClass, watch, isFunction, renderSlot, withCtx, resolveDynamicComponent, openBlock, withModifiers, isDate, renderList, createTextVNode, withKeys, Transition, isArray, provide, vShow, useSlots, init_shared_esm_bundler, useAttrs, createBaseVNode, withDirectives, normalizeStyle, inject, ElTooltip, vRepeatClick, TOOLTIP_INJECTION_KEY, ClickOutside, ElButton, ElInput, ElScrollbar, useFormItem, flatten_default, datePickTypes, useFormSize, debounce_default, isEqual_default, useLocale, definePropType, isEmpty, buildProps, getStyle, useSizeProp, onClickOutside, debugWarn, isUndefined, useNamespace, hasClass, d_arrow_right_default, calendar_default, arrow_up_default, arrow_right_default, arrow_left_default, _export_sfc, arrow_down_default, EVENT_CODE, ElIcon, circle_close_default, d_arrow_left_default, clock_default, castArray, require_dayjs_min, require_customParseFormat, timeUnits, DEFAULT_FORMATS_TIME, DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER, import_dayjs_min$10, buildTimeList, rangeArr, extractDateFormat, extractTimeFormat, dateEquals, valueEquals, parseDate, formatter, makeList, disabledTimeListsProps, timePanelSharedProps, timePickerDefaultProps, _hoisted_1$7, _hoisted_2$7, CommonPicker, panelTimePickerProps, useTimePanel, makeAvailableArr, getTimeLists, buildAvailableTimeSlotGetter, useOldValue, basicTimeSpinnerProps, _hoisted_1$6, _hoisted_2$6, TimeSpinner, import_dayjs_min$9, TimePickPanel, require_localeData, require_advancedFormat, require_weekOfYear, require_weekYear, require_dayOfYear, require_isSameOrAfter, require_isSameOrBefore, ROOT_PICKER_INJECTION_KEY, datePickerProps, selectionModes, datePickerSharedProps, panelSharedProps, panelRangeSharedProps, selectionModeWithDefault, panelDatePickProps, basicDateTableProps, basicDateTableEmits, import_dayjs_min$8, isValidRange, getDefaultValue, buildPickerTable, import_dayjs_min$7, isNormalDay, useBasicDateTable, useBasicDateTableDOM, basicCellProps, ElDatePickerCell, _hoisted_1$5, _hoisted_2$5, _hoisted_3$5, _hoisted_4$3, DateTable, basicMonthTableProps, import_dayjs_min$6, _hoisted_1$4, _hoisted_2$4, _hoisted_3$4, MonthTable, date, disabledDate, parsedValue, basicYearTableProps, import_dayjs_min$5, _hoisted_1$3, _hoisted_2$3, _hoisted_3$3, _hoisted_4$2, YearTable, import_dayjs_min$4, _hoisted_1$2, _hoisted_2$2, _hoisted_3$2, _hoisted_4$1, _hoisted_5$1, DatePickPanel, panelDateRangeProps, import_dayjs_min$3, useShortcut, useRangePicker, import_dayjs_min$2, _hoisted_1$1, _hoisted_2$1, _hoisted_3$1, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, unit$1, DateRangePickPanel, panelMonthRangeProps, panelMonthRangeEmits, useMonthRangeHeader, import_dayjs_min$1, _hoisted_1, _hoisted_2, _hoisted_3, unit, MonthRangePickPanel, getPanel, import_dayjs_min, import_customParseFormat, import_advancedFormat, import_localeData, import_weekOfYear, import_weekYear, import_dayOfYear, import_isSameOrAfter, import_isSameOrBefore, DatePicker, _DatePicker, ElDatePicker;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
        __commonJS = _chunkLegacy001Js.t;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        getCurrentInstance = _vueRuntimeEsmBundlerLegacy003Js.F;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        toRef = _vueRuntimeEsmBundlerLegacy003Js.Vt;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        isFunction = _vueRuntimeEsmBundlerLegacy003Js.an;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        isDate = _vueRuntimeEsmBundlerLegacy003Js.in;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        withKeys = _vueRuntimeEsmBundlerLegacy003Js.m;
        Transition = _vueRuntimeEsmBundlerLegacy003Js.n;
        isArray = _vueRuntimeEsmBundlerLegacy003Js.nn;
        provide = _vueRuntimeEsmBundlerLegacy003Js.nt;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        useSlots = _vueRuntimeEsmBundlerLegacy003Js.pt;
        init_shared_esm_bundler = _vueRuntimeEsmBundlerLegacy003Js.tn;
        useAttrs = _vueRuntimeEsmBundlerLegacy003Js.ut;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
        inject = _vueRuntimeEsmBundlerLegacy003Js.z;
      }, function (_srcLegacy007Js) {
        ElTooltip = _srcLegacy007Js.Gt;
        vRepeatClick = _srcLegacy007Js.Ht;
        TOOLTIP_INJECTION_KEY = _srcLegacy007Js.Kt;
        ClickOutside = _srcLegacy007Js.Ut;
        ElButton = _srcLegacy007Js.Wt;
        ElInput = _srcLegacy007Js.Xt;
        ElScrollbar = _srcLegacy007Js.Yt;
        useFormItem = _srcLegacy007Js.Zt;
        flatten_default = _srcLegacy007Js.bn;
        datePickTypes = _srcLegacy007Js.dn;
        useFormSize = _srcLegacy007Js.en;
        debounce_default = _srcLegacy007Js.gn;
        isEqual_default = _srcLegacy007Js.hn;
      }, function (_truncateLegacy00hJs) {
        useLocale = _truncateLegacy00hJs.A;
        definePropType = _truncateLegacy00hJs.F;
        isEmpty = _truncateLegacy00hJs.J;
        buildProps = _truncateLegacy00hJs.P;
        getStyle = _truncateLegacy00hJs.R;
        useSizeProp = _truncateLegacy00hJs.T;
        onClickOutside = _truncateLegacy00hJs.Tt;
        debugWarn = _truncateLegacy00hJs.V;
        isUndefined = _truncateLegacy00hJs.X;
        useNamespace = _truncateLegacy00hJs.k;
        hasClass = _truncateLegacy00hJs.z;
      }, function (_iconLegacy00lJs) {
        d_arrow_right_default = _iconLegacy00lJs.S;
        calendar_default = _iconLegacy00lJs._;
        arrow_up_default = _iconLegacy00lJs.g;
        arrow_right_default = _iconLegacy00lJs.h;
        arrow_left_default = _iconLegacy00lJs.m;
        _export_sfc = _iconLegacy00lJs.n;
        arrow_down_default = _iconLegacy00lJs.p;
        EVENT_CODE = _iconLegacy00lJs.r;
        ElIcon = _iconLegacy00lJs.t;
        circle_close_default = _iconLegacy00lJs.v;
        d_arrow_left_default = _iconLegacy00lJs.x;
        clock_default = _iconLegacy00lJs.y;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/utils/arrays.mjs
        castArray = arr => {
          if (!arr && arr !== 0) return [];
          return Array.isArray(arr) ? arr : [arr];
        }; //#endregion
        //#region ../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js
        require_dayjs_min = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js": (exports, module) => {
            (function (t, e) {
              "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
            })(exports, function () {
              var t = 1e3,
                e = 6e4,
                n = 36e5,
                r = "millisecond",
                i = "second",
                s = "minute",
                u = "hour",
                a = "day",
                o = "week",
                c = "month",
                f = "quarter",
                h = "year",
                d = "date",
                l = "Invalid Date",
                $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                M = {
                  name: "en",
                  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                  ordinal: function (t$1) {
                    var e$1 = ["th", "st", "nd", "rd"],
                      n$1 = t$1 % 100;
                    return "[" + t$1 + (e$1[(n$1 - 20) % 10] || e$1[n$1] || e$1[0]) + "]";
                  }
                },
                m = function (t$1, e$1, n$1) {
                  var r$1 = String(t$1);
                  return !r$1 || r$1.length >= e$1 ? t$1 : "" + Array(e$1 + 1 - r$1.length).join(n$1) + t$1;
                },
                v = {
                  s: m,
                  z: function (t$1) {
                    var e$1 = -t$1.utcOffset(),
                      n$1 = Math.abs(e$1),
                      r$1 = Math.floor(n$1 / 60),
                      i$1 = n$1 % 60;
                    return (e$1 <= 0 ? "+" : "-") + m(r$1, 2, "0") + ":" + m(i$1, 2, "0");
                  },
                  m: function t$1(e$1, n$1) {
                    if (e$1.date() < n$1.date()) return -t$1(n$1, e$1);
                    var r$1 = 12 * (n$1.year() - e$1.year()) + (n$1.month() - e$1.month()),
                      i$1 = e$1.clone().add(r$1, c),
                      s$1 = n$1 - i$1 < 0,
                      u$1 = e$1.clone().add(r$1 + (s$1 ? -1 : 1), c);
                    return +(-(r$1 + (n$1 - i$1) / (s$1 ? i$1 - u$1 : u$1 - i$1)) || 0);
                  },
                  a: function (t$1) {
                    return t$1 < 0 ? Math.ceil(t$1) || 0 : Math.floor(t$1);
                  },
                  p: function (t$1) {
                    return {
                      M: c,
                      y: h,
                      w: o,
                      d: a,
                      D: d,
                      h: u,
                      m: s,
                      s: i,
                      ms: r,
                      Q: f
                    }[t$1] || String(t$1 || "").toLowerCase().replace(/s$/, "");
                  },
                  u: function (t$1) {
                    return void 0 === t$1;
                  }
                },
                g = "en",
                D = {};
              D[g] = M;
              var p = "$isDayjsObject",
                S = function (t$1) {
                  return t$1 instanceof _ || !(!t$1 || !t$1[p]);
                },
                w = function t$1(e$1, n$1, r$1) {
                  var i$1;
                  if (!e$1) return g;
                  if ("string" == typeof e$1) {
                    var s$1 = e$1.toLowerCase();
                    D[s$1] && (i$1 = s$1), n$1 && (D[s$1] = n$1, i$1 = s$1);
                    var u$1 = e$1.split("-");
                    if (!i$1 && u$1.length > 1) return t$1(u$1[0]);
                  } else {
                    var a$1 = e$1.name;
                    D[a$1] = e$1, i$1 = a$1;
                  }
                  return !r$1 && i$1 && (g = i$1), i$1 || !r$1 && g;
                },
                O = function (t$1, e$1) {
                  if (S(t$1)) return t$1.clone();
                  var n$1 = "object" == typeof e$1 ? e$1 : {};
                  return n$1.date = t$1, n$1.args = arguments, new _(n$1);
                },
                b = v;
              b.l = w, b.i = S, b.w = function (t$1, e$1) {
                return O(t$1, {
                  locale: e$1.$L,
                  utc: e$1.$u,
                  x: e$1.$x,
                  $offset: e$1.$offset
                });
              };
              var _ = function () {
                  function M$1(t$1) {
                    this.$L = w(t$1.locale, null, !0), this.parse(t$1), this.$x = this.$x || t$1.x || {}, this[p] = !0;
                  }
                  var m$1 = M$1.prototype;
                  return m$1.parse = function (t$1) {
                    this.$d = function (t$2) {
                      var e$1 = t$2.date,
                        n$1 = t$2.utc;
                      if (null === e$1) return /* @__PURE__ */new Date(NaN);
                      if (b.u(e$1)) return /* @__PURE__ */new Date();
                      if (e$1 instanceof Date) return new Date(e$1);
                      if ("string" == typeof e$1 && !/Z$/i.test(e$1)) {
                        var r$1 = e$1.match($);
                        if (r$1) {
                          var i$1 = r$1[2] - 1 || 0,
                            s$1 = (r$1[7] || "0").substring(0, 3);
                          return n$1 ? new Date(Date.UTC(r$1[1], i$1, r$1[3] || 1, r$1[4] || 0, r$1[5] || 0, r$1[6] || 0, s$1)) : new Date(r$1[1], i$1, r$1[3] || 1, r$1[4] || 0, r$1[5] || 0, r$1[6] || 0, s$1);
                        }
                      }
                      return new Date(e$1);
                    }(t$1), this.init();
                  }, m$1.init = function () {
                    var t$1 = this.$d;
                    this.$y = t$1.getFullYear(), this.$M = t$1.getMonth(), this.$D = t$1.getDate(), this.$W = t$1.getDay(), this.$H = t$1.getHours(), this.$m = t$1.getMinutes(), this.$s = t$1.getSeconds(), this.$ms = t$1.getMilliseconds();
                  }, m$1.$utils = function () {
                    return b;
                  }, m$1.isValid = function () {
                    return !(this.$d.toString() === l);
                  }, m$1.isSame = function (t$1, e$1) {
                    var n$1 = O(t$1);
                    return this.startOf(e$1) <= n$1 && n$1 <= this.endOf(e$1);
                  }, m$1.isAfter = function (t$1, e$1) {
                    return O(t$1) < this.startOf(e$1);
                  }, m$1.isBefore = function (t$1, e$1) {
                    return this.endOf(e$1) < O(t$1);
                  }, m$1.$g = function (t$1, e$1, n$1) {
                    return b.u(t$1) ? this[e$1] : this.set(n$1, t$1);
                  }, m$1.unix = function () {
                    return Math.floor(this.valueOf() / 1e3);
                  }, m$1.valueOf = function () {
                    return this.$d.getTime();
                  }, m$1.startOf = function (t$1, e$1) {
                    var n$1 = this,
                      r$1 = !!b.u(e$1) || e$1,
                      f$1 = b.p(t$1),
                      l$1 = function (t$2, e$2) {
                        var i$1 = b.w(n$1.$u ? Date.UTC(n$1.$y, e$2, t$2) : new Date(n$1.$y, e$2, t$2), n$1);
                        return r$1 ? i$1 : i$1.endOf(a);
                      },
                      $$1 = function (t$2, e$2) {
                        return b.w(n$1.toDate()[t$2].apply(n$1.toDate("s"), (r$1 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e$2)), n$1);
                      },
                      y$1 = this.$W,
                      M$2 = this.$M,
                      m$2 = this.$D,
                      v$1 = "set" + (this.$u ? "UTC" : "");
                    switch (f$1) {
                      case h:
                        return r$1 ? l$1(1, 0) : l$1(31, 11);
                      case c:
                        return r$1 ? l$1(1, M$2) : l$1(0, M$2 + 1);
                      case o:
                        var g$1 = this.$locale().weekStart || 0,
                          D$1 = (y$1 < g$1 ? y$1 + 7 : y$1) - g$1;
                        return l$1(r$1 ? m$2 - D$1 : m$2 + (6 - D$1), M$2);
                      case a:
                      case d:
                        return $$1(v$1 + "Hours", 0);
                      case u:
                        return $$1(v$1 + "Minutes", 1);
                      case s:
                        return $$1(v$1 + "Seconds", 2);
                      case i:
                        return $$1(v$1 + "Milliseconds", 3);
                      default:
                        return this.clone();
                    }
                  }, m$1.endOf = function (t$1) {
                    return this.startOf(t$1, !1);
                  }, m$1.$set = function (t$1, e$1) {
                    var n$1,
                      o$1 = b.p(t$1),
                      f$1 = "set" + (this.$u ? "UTC" : ""),
                      l$1 = (n$1 = {}, n$1[a] = f$1 + "Date", n$1[d] = f$1 + "Date", n$1[c] = f$1 + "Month", n$1[h] = f$1 + "FullYear", n$1[u] = f$1 + "Hours", n$1[s] = f$1 + "Minutes", n$1[i] = f$1 + "Seconds", n$1[r] = f$1 + "Milliseconds", n$1)[o$1],
                      $$1 = o$1 === a ? this.$D + (e$1 - this.$W) : e$1;
                    if (o$1 === c || o$1 === h) {
                      var y$1 = this.clone().set(d, 1);
                      y$1.$d[l$1]($$1), y$1.init(), this.$d = y$1.set(d, Math.min(this.$D, y$1.daysInMonth())).$d;
                    } else l$1 && this.$d[l$1]($$1);
                    return this.init(), this;
                  }, m$1.set = function (t$1, e$1) {
                    return this.clone().$set(t$1, e$1);
                  }, m$1.get = function (t$1) {
                    return this[b.p(t$1)]();
                  }, m$1.add = function (r$1, f$1) {
                    var d$1,
                      l$1 = this;
                    r$1 = Number(r$1);
                    var $$1 = b.p(f$1),
                      y$1 = function (t$1) {
                        var e$1 = O(l$1);
                        return b.w(e$1.date(e$1.date() + Math.round(t$1 * r$1)), l$1);
                      };
                    if ($$1 === c) return this.set(c, this.$M + r$1);
                    if ($$1 === h) return this.set(h, this.$y + r$1);
                    if ($$1 === a) return y$1(1);
                    if ($$1 === o) return y$1(7);
                    var M$2 = (d$1 = {}, d$1[s] = e, d$1[u] = n, d$1[i] = t, d$1)[$$1] || 1,
                      m$2 = this.$d.getTime() + r$1 * M$2;
                    return b.w(m$2, this);
                  }, m$1.subtract = function (t$1, e$1) {
                    return this.add(-1 * t$1, e$1);
                  }, m$1.format = function (t$1) {
                    var e$1 = this,
                      n$1 = this.$locale();
                    if (!this.isValid()) return n$1.invalidDate || l;
                    var r$1 = t$1 || "YYYY-MM-DDTHH:mm:ssZ",
                      i$1 = b.z(this),
                      s$1 = this.$H,
                      u$1 = this.$m,
                      a$1 = this.$M,
                      o$1 = n$1.weekdays,
                      c$1 = n$1.months,
                      f$1 = n$1.meridiem,
                      h$1 = function (t$2, n$2, i$2, s$2) {
                        return t$2 && (t$2[n$2] || t$2(e$1, r$1)) || i$2[n$2].slice(0, s$2);
                      },
                      d$1 = function (t$2) {
                        return b.s(s$1 % 12 || 12, t$2, "0");
                      },
                      $$1 = f$1 || function (t$2, e$2, n$2) {
                        var r$2 = t$2 < 12 ? "AM" : "PM";
                        return n$2 ? r$2.toLowerCase() : r$2;
                      };
                    return r$1.replace(y, function (t$2, r$2) {
                      return r$2 || function (t$3) {
                        switch (t$3) {
                          case "YY":
                            return String(e$1.$y).slice(-2);
                          case "YYYY":
                            return b.s(e$1.$y, 4, "0");
                          case "M":
                            return a$1 + 1;
                          case "MM":
                            return b.s(a$1 + 1, 2, "0");
                          case "MMM":
                            return h$1(n$1.monthsShort, a$1, c$1, 3);
                          case "MMMM":
                            return h$1(c$1, a$1);
                          case "D":
                            return e$1.$D;
                          case "DD":
                            return b.s(e$1.$D, 2, "0");
                          case "d":
                            return String(e$1.$W);
                          case "dd":
                            return h$1(n$1.weekdaysMin, e$1.$W, o$1, 2);
                          case "ddd":
                            return h$1(n$1.weekdaysShort, e$1.$W, o$1, 3);
                          case "dddd":
                            return o$1[e$1.$W];
                          case "H":
                            return String(s$1);
                          case "HH":
                            return b.s(s$1, 2, "0");
                          case "h":
                            return d$1(1);
                          case "hh":
                            return d$1(2);
                          case "a":
                            return $$1(s$1, u$1, !0);
                          case "A":
                            return $$1(s$1, u$1, !1);
                          case "m":
                            return String(u$1);
                          case "mm":
                            return b.s(u$1, 2, "0");
                          case "s":
                            return String(e$1.$s);
                          case "ss":
                            return b.s(e$1.$s, 2, "0");
                          case "SSS":
                            return b.s(e$1.$ms, 3, "0");
                          case "Z":
                            return i$1;
                        }
                        return null;
                      }(t$2) || i$1.replace(":", "");
                    });
                  }, m$1.utcOffset = function () {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                  }, m$1.diff = function (r$1, d$1, l$1) {
                    var $$1,
                      y$1 = this,
                      M$2 = b.p(d$1),
                      m$2 = O(r$1),
                      v$1 = (m$2.utcOffset() - this.utcOffset()) * e,
                      g$1 = this - m$2,
                      D$1 = function () {
                        return b.m(y$1, m$2);
                      };
                    switch (M$2) {
                      case h:
                        $$1 = D$1() / 12;
                        break;
                      case c:
                        $$1 = D$1();
                        break;
                      case f:
                        $$1 = D$1() / 3;
                        break;
                      case o:
                        $$1 = (g$1 - v$1) / 6048e5;
                        break;
                      case a:
                        $$1 = (g$1 - v$1) / 864e5;
                        break;
                      case u:
                        $$1 = g$1 / n;
                        break;
                      case s:
                        $$1 = g$1 / e;
                        break;
                      case i:
                        $$1 = g$1 / t;
                        break;
                      default:
                        $$1 = g$1;
                    }
                    return l$1 ? $$1 : b.a($$1);
                  }, m$1.daysInMonth = function () {
                    return this.endOf(c).$D;
                  }, m$1.$locale = function () {
                    return D[this.$L];
                  }, m$1.locale = function (t$1, e$1) {
                    if (!t$1) return this.$L;
                    var n$1 = this.clone(),
                      r$1 = w(t$1, e$1, !0);
                    return r$1 && (n$1.$L = r$1), n$1;
                  }, m$1.clone = function () {
                    return b.w(this.$d, this);
                  }, m$1.toDate = function () {
                    return new Date(this.valueOf());
                  }, m$1.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null;
                  }, m$1.toISOString = function () {
                    return this.$d.toISOString();
                  }, m$1.toString = function () {
                    return this.$d.toUTCString();
                  }, M$1;
                }(),
                k = _.prototype;
              return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t$1) {
                k[t$1[1]] = function (e$1) {
                  return this.$g(e$1, t$1[0], t$1[1]);
                };
              }), O.extend = function (t$1, e$1) {
                return t$1.$i || (t$1(e$1, _, O), t$1.$i = !0), O;
              }, O.locale = w, O.isDayjs = S, O.unix = function (t$1) {
                return O(1e3 * t$1);
              }, O.en = D[g], O.Ls = D, O.p = {}, O;
            });
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/customParseFormat.js
        require_customParseFormat = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/customParseFormat.js": (exports, module) => {
            (function (e, t) {
              "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
            })(exports, function () {
              var e = {
                  LTS: "h:mm:ss A",
                  LT: "h:mm A",
                  L: "MM/DD/YYYY",
                  LL: "MMMM D, YYYY",
                  LLL: "MMMM D, YYYY h:mm A",
                  LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                n = /\d\d/,
                r = /\d\d?/,
                i = /\d*[^-_:/,()\s\d]+/,
                o = {},
                s = function (e$1) {
                  return (e$1 = +e$1) + (e$1 > 68 ? 1900 : 2e3);
                };
              var a = function (e$1) {
                  return function (t$1) {
                    this[e$1] = +t$1;
                  };
                },
                f = [/[+-]\d\d:?(\d\d)?|Z/, function (e$1) {
                  (this.zone || (this.zone = {})).offset = function (e$2) {
                    if (!e$2) return 0;
                    if ("Z" === e$2) return 0;
                    var t$1 = e$2.match(/([+-]|\d\d)/g),
                      n$1 = 60 * t$1[1] + (+t$1[2] || 0);
                    return 0 === n$1 ? 0 : "+" === t$1[0] ? -n$1 : n$1;
                  }(e$1);
                }],
                h = function (e$1) {
                  var t$1 = o[e$1];
                  return t$1 && (t$1.indexOf ? t$1 : t$1.s.concat(t$1.f));
                },
                u = function (e$1, t$1) {
                  var n$1,
                    r$1 = o.meridiem;
                  if (r$1) {
                    for (var i$1 = 1; i$1 <= 24; i$1 += 1) if (e$1.indexOf(r$1(i$1, 0, t$1)) > -1) {
                      n$1 = i$1 > 12;
                      break;
                    }
                  } else n$1 = e$1 === (t$1 ? "pm" : "PM");
                  return n$1;
                },
                d = {
                  A: [i, function (e$1) {
                    this.afternoon = u(e$1, !1);
                  }],
                  a: [i, function (e$1) {
                    this.afternoon = u(e$1, !0);
                  }],
                  S: [/\d/, function (e$1) {
                    this.milliseconds = 100 * +e$1;
                  }],
                  SS: [n, function (e$1) {
                    this.milliseconds = 10 * +e$1;
                  }],
                  SSS: [/\d{3}/, function (e$1) {
                    this.milliseconds = +e$1;
                  }],
                  s: [r, a("seconds")],
                  ss: [r, a("seconds")],
                  m: [r, a("minutes")],
                  mm: [r, a("minutes")],
                  H: [r, a("hours")],
                  h: [r, a("hours")],
                  HH: [r, a("hours")],
                  hh: [r, a("hours")],
                  D: [r, a("day")],
                  DD: [n, a("day")],
                  Do: [i, function (e$1) {
                    var t$1 = o.ordinal;
                    if (this.day = e$1.match(/\d+/)[0], t$1) for (var r$1 = 1; r$1 <= 31; r$1 += 1) t$1(r$1).replace(/\[|\]/g, "") === e$1 && (this.day = r$1);
                  }],
                  M: [r, a("month")],
                  MM: [n, a("month")],
                  MMM: [i, function (e$1) {
                    var t$1 = h("months"),
                      n$1 = (h("monthsShort") || t$1.map(function (e$2) {
                        return e$2.slice(0, 3);
                      })).indexOf(e$1) + 1;
                    if (n$1 < 1) throw new Error();
                    this.month = n$1 % 12 || n$1;
                  }],
                  MMMM: [i, function (e$1) {
                    var t$1 = h("months").indexOf(e$1) + 1;
                    if (t$1 < 1) throw new Error();
                    this.month = t$1 % 12 || t$1;
                  }],
                  Y: [/[+-]?\d+/, a("year")],
                  YY: [n, function (e$1) {
                    this.year = s(e$1);
                  }],
                  YYYY: [/\d{4}/, a("year")],
                  Z: f,
                  ZZ: f
                };
              function c(n$1) {
                var r$1 = n$1,
                  i$1 = o && o.formats;
                for (var s$1 = (n$1 = r$1.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t$1, n$2, r$2) {
                    var o$1 = r$2 && r$2.toUpperCase();
                    return n$2 || i$1[r$2] || e[r$2] || i$1[o$1].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e$1, t$2, n$3) {
                      return t$2 || n$3.slice(1);
                    });
                  })).match(t), a$1 = s$1.length, f$1 = 0; f$1 < a$1; f$1 += 1) {
                  var h$1 = s$1[f$1],
                    u$1 = d[h$1],
                    c$1 = u$1 && u$1[0],
                    l = u$1 && u$1[1];
                  s$1[f$1] = l ? {
                    regex: c$1,
                    parser: l
                  } : h$1.replace(/^\[|\]$/g, "");
                }
                return function (e$1) {
                  for (var t$1 = {}, n$2 = 0, r$2 = 0; n$2 < a$1; n$2 += 1) {
                    var i$2 = s$1[n$2];
                    if ("string" == typeof i$2) r$2 += i$2.length;else {
                      var o$1 = i$2.regex,
                        f$2 = i$2.parser,
                        h$2 = e$1.slice(r$2),
                        u$2 = o$1.exec(h$2)[0];
                      f$2.call(t$1, u$2), e$1 = e$1.replace(u$2, "");
                    }
                  }
                  return function (e$2) {
                    var t$2 = e$2.afternoon;
                    if (void 0 !== t$2) {
                      var n$3 = e$2.hours;
                      t$2 ? n$3 < 12 && (e$2.hours += 12) : 12 === n$3 && (e$2.hours = 0), delete e$2.afternoon;
                    }
                  }(t$1), t$1;
                };
              }
              return function (e$1, t$1, n$1) {
                n$1.p.customParseFormat = !0, e$1 && e$1.parseTwoDigitYear && (s = e$1.parseTwoDigitYear);
                var r$1 = t$1.prototype,
                  i$1 = r$1.parse;
                r$1.parse = function (e$2) {
                  var t$2 = e$2.date,
                    r$2 = e$2.utc,
                    s$1 = e$2.args;
                  this.$u = r$2;
                  var a$1 = s$1[1];
                  if ("string" == typeof a$1) {
                    var f$1 = !0 === s$1[2],
                      h$1 = !0 === s$1[3],
                      u$1 = f$1 || h$1,
                      d$1 = s$1[2];
                    h$1 && (d$1 = s$1[2]), o = this.$locale(), !f$1 && d$1 && (o = n$1.Ls[d$1]), this.$d = function (e$3, t$3, n$2) {
                      try {
                        if (["x", "X"].indexOf(t$3) > -1) return /* @__PURE__ */new Date(("X" === t$3 ? 1e3 : 1) * e$3);
                        var r$3 = c(t$3)(e$3),
                          i$2 = r$3.year,
                          o$1 = r$3.month,
                          s$2 = r$3.day,
                          a$2 = r$3.hours,
                          f$2 = r$3.minutes,
                          h$2 = r$3.seconds,
                          u$2 = r$3.milliseconds,
                          d$2 = r$3.zone,
                          l$1 = /* @__PURE__ */new Date(),
                          m$1 = s$2 || (i$2 || o$1 ? 1 : l$1.getDate()),
                          M$1 = i$2 || l$1.getFullYear(),
                          Y = 0;
                        i$2 && !o$1 || (Y = o$1 > 0 ? o$1 - 1 : l$1.getMonth());
                        var p = a$2 || 0,
                          v = f$2 || 0,
                          D = h$2 || 0,
                          g = u$2 || 0;
                        return d$2 ? new Date(Date.UTC(M$1, Y, m$1, p, v, D, g + 60 * d$2.offset * 1e3)) : n$2 ? new Date(Date.UTC(M$1, Y, m$1, p, v, D, g)) : new Date(M$1, Y, m$1, p, v, D, g);
                      } catch (e$4) {
                        return /* @__PURE__ */new Date("");
                      }
                    }(t$2, a$1, r$2), this.init(), d$1 && !0 !== d$1 && (this.$L = this.locale(d$1).$L), u$1 && t$2 != this.format(a$1) && (this.$d = /* @__PURE__ */new Date("")), o = {};
                  } else if (a$1 instanceof Array) for (var l = a$1.length, m = 1; m <= l; m += 1) {
                    s$1[1] = a$1[m - 1];
                    var M = n$1.apply(this, s$1);
                    if (M.isValid()) {
                      this.$d = M.$d, this.$L = M.$L, this.init();
                      break;
                    }
                    m === l && (this.$d = /* @__PURE__ */new Date(""));
                  } else i$1.call(this, e$2);
                };
              };
            });
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/constants.mjs
        timeUnits = ["hours", "minutes", "seconds"];
        DEFAULT_FORMATS_TIME = "HH:mm:ss";
        DEFAULT_FORMATS_DATE = "YYYY-MM-DD";
        DEFAULT_FORMATS_DATEPICKER = {
          date: DEFAULT_FORMATS_DATE,
          dates: DEFAULT_FORMATS_DATE,
          week: "gggg[w]ww",
          year: "YYYY",
          month: "YYYY-MM",
          datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
          monthrange: "YYYY-MM",
          daterange: DEFAULT_FORMATS_DATE,
          datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/utils.mjs
        import_dayjs_min$10 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        init_shared_esm_bundler();
        buildTimeList = (value, bound) => {
          return [value > 0 ? value - 1 : void 0, value, value < bound ? value + 1 : void 0];
        };
        rangeArr = n => Array.from(Array.from({
          length: n
        }).keys());
        extractDateFormat = format => {
          return format.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
        };
        extractTimeFormat = format => {
          return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
        };
        dateEquals = function (a, b) {
          const aIsDate = isDate(a);
          const bIsDate = isDate(b);
          if (aIsDate && bIsDate) return a.getTime() === b.getTime();
          if (!aIsDate && !bIsDate) return a === b;
          return false;
        };
        valueEquals = function (a, b) {
          const aIsArray = isArray(a);
          const bIsArray = isArray(b);
          if (aIsArray && bIsArray) {
            if (a.length !== b.length) return false;
            return a.every((item, index) => dateEquals(item, b[index]));
          }
          if (!aIsArray && !bIsArray) return dateEquals(a, b);
          return false;
        };
        parseDate = function (date$1, format, lang) {
          const day = isEmpty(format) || format === "x" ? (0, import_dayjs_min$10.default)(date$1).locale(lang) : (0, import_dayjs_min$10.default)(date$1, format).locale(lang);
          return day.isValid() ? day : void 0;
        };
        formatter = function (date$1, format, lang) {
          if (isEmpty(format)) return date$1;
          if (format === "x") return +date$1;
          return (0, import_dayjs_min$10.default)(date$1).locale(lang).format(format);
        };
        makeList = (total, method) => {
          var _a;
          const arr = [];
          const disabledArr = method == null ? void 0 : method();
          for (let i = 0; i < total; i++) arr.push((_a = disabledArr == null ? void 0 : disabledArr.includes(i)) != null ? _a : false);
          return arr;
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/props/shared.mjs
        disabledTimeListsProps = buildProps({
          disabledHours: {
            type: definePropType(Function)
          },
          disabledMinutes: {
            type: definePropType(Function)
          },
          disabledSeconds: {
            type: definePropType(Function)
          }
        });
        timePanelSharedProps = buildProps({
          visible: Boolean,
          actualVisible: {
            type: Boolean,
            default: void 0
          },
          format: {
            type: String,
            default: ""
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/common/props.mjs
        timePickerDefaultProps = buildProps({
          id: {
            type: definePropType([Array, String])
          },
          name: {
            type: definePropType([Array, String]),
            default: ""
          },
          popperClass: {
            type: String,
            default: ""
          },
          format: String,
          valueFormat: String,
          dateFormat: String,
          timeFormat: String,
          type: {
            type: String,
            default: ""
          },
          clearable: {
            type: Boolean,
            default: true
          },
          clearIcon: {
            type: definePropType([String, Object]),
            default: circle_close_default
          },
          editable: {
            type: Boolean,
            default: true
          },
          prefixIcon: {
            type: definePropType([String, Object]),
            default: ""
          },
          size: useSizeProp,
          readonly: Boolean,
          disabled: Boolean,
          placeholder: {
            type: String,
            default: ""
          },
          popperOptions: {
            type: definePropType(Object),
            default: () => ({})
          },
          modelValue: {
            type: definePropType([Date, Array, String, Number]),
            default: ""
          },
          rangeSeparator: {
            type: String,
            default: "-"
          },
          startPlaceholder: String,
          endPlaceholder: String,
          defaultValue: {
            type: definePropType([Date, Array])
          },
          defaultTime: {
            type: definePropType([Date, Array])
          },
          isRange: Boolean,
          ...disabledTimeListsProps,
          disabledDate: {
            type: Function
          },
          cellClassName: {
            type: Function
          },
          shortcuts: {
            type: Array,
            default: () => []
          },
          arrowControl: Boolean,
          label: {
            type: String,
            default: void 0
          },
          tabindex: {
            type: definePropType([String, Number]),
            default: 0
          },
          validateEvent: {
            type: Boolean,
            default: true
          },
          unlinkPanels: Boolean
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/common/picker.mjs
        init_shared_esm_bundler();
        _hoisted_1$7 = ["id", "name", "placeholder", "value", "disabled", "readonly"];
        _hoisted_2$7 = ["id", "name", "placeholder", "value", "disabled", "readonly"];
        CommonPicker = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "Picker"
          }),
          props: timePickerDefaultProps,
          emits: ["update:modelValue", "change", "focus", "blur", "calendar-change", "panel-change", "visible-change", "keydown"],
          setup(__props, {
            expose,
            emit
          }) {
            const props = __props;
            const attrs = useAttrs();
            const {
              lang
            } = useLocale();
            const nsDate = useNamespace("date");
            const nsInput = useNamespace("input");
            const nsRange = useNamespace("range");
            const {
              form,
              formItem
            } = useFormItem();
            const elPopperOptions = inject("ElPopperOptions", {});
            const refPopper = ref();
            const inputRef = ref();
            const pickerVisible = ref(false);
            const pickerActualVisible = ref(false);
            const valueOnOpen = ref(null);
            let hasJustTabExitedInput = false;
            let ignoreFocusEvent = false;
            const rangeInputKls = computed(() => [nsDate.b("editor"), nsDate.bm("editor", props.type), nsInput.e("wrapper"), nsDate.is("disabled", pickerDisabled.value), nsDate.is("active", pickerVisible.value), nsRange.b("editor"), pickerSize ? nsRange.bm("editor", pickerSize.value) : "", attrs.class]);
            const clearIconKls = computed(() => [nsInput.e("icon"), nsRange.e("close-icon"), !showClose.value ? nsRange.e("close-icon--hidden") : ""]);
            watch(pickerVisible, val => {
              if (!val) {
                userInput.value = null;
                nextTick(() => {
                  emitChange(props.modelValue);
                });
              } else nextTick(() => {
                if (val) valueOnOpen.value = props.modelValue;
              });
            });
            const emitChange = (val, isClear) => {
              if (isClear || !valueEquals(val, valueOnOpen.value)) {
                emit("change", val);
                props.validateEvent && formItem?.validate("change").catch(err => debugWarn(err));
              }
            };
            const emitInput = input => {
              if (!valueEquals(props.modelValue, input)) {
                let formatted;
                if (isArray(input)) formatted = input.map(item => formatter(item, props.valueFormat, lang.value));else if (input) formatted = formatter(input, props.valueFormat, lang.value);
                emit("update:modelValue", input ? formatted : input, lang.value);
              }
            };
            const emitKeydown = e => {
              emit("keydown", e);
            };
            const refInput = computed(() => {
              if (inputRef.value) {
                const _r = isRangeInput.value ? inputRef.value : inputRef.value.$el;
                return Array.from(_r.querySelectorAll("input"));
              }
              return [];
            });
            const setSelectionRange = (start, end, pos) => {
              const _inputs = refInput.value;
              if (!_inputs.length) return;
              if (!pos || pos === "min") {
                _inputs[0].setSelectionRange(start, end);
                _inputs[0].focus();
              } else if (pos === "max") {
                _inputs[1].setSelectionRange(start, end);
                _inputs[1].focus();
              }
            };
            const focusOnInputBox = () => {
              focus(true, true);
              nextTick(() => {
                ignoreFocusEvent = false;
              });
            };
            const onPick = (date$1 = "", visible = false) => {
              if (!visible) ignoreFocusEvent = true;
              pickerVisible.value = visible;
              let result;
              if (isArray(date$1)) result = date$1.map(_ => _.toDate());else result = date$1 ? date$1.toDate() : date$1;
              userInput.value = null;
              emitInput(result);
            };
            const onBeforeShow = () => {
              pickerActualVisible.value = true;
            };
            const onShow = () => {
              emit("visible-change", true);
            };
            const onKeydownPopperContent = event => {
              if ((event == null ? void 0 : event.key) === EVENT_CODE.esc) focus(true, true);
            };
            const onHide = () => {
              pickerActualVisible.value = false;
              pickerVisible.value = false;
              ignoreFocusEvent = false;
              emit("visible-change", false);
            };
            const handleOpen = () => {
              pickerVisible.value = true;
            };
            const handleClose = () => {
              pickerVisible.value = false;
            };
            const focus = (focusStartInput = true, isIgnoreFocusEvent = false) => {
              ignoreFocusEvent = isIgnoreFocusEvent;
              const [leftInput, rightInput] = unref(refInput);
              let input = leftInput;
              if (!focusStartInput && isRangeInput.value) input = rightInput;
              if (input) input.focus();
            };
            const handleFocusInput = e => {
              if (props.readonly || pickerDisabled.value || pickerVisible.value || ignoreFocusEvent) return;
              pickerVisible.value = true;
              emit("focus", e);
            };
            let currentHandleBlurDeferCallback = void 0;
            const handleBlurInput = e => {
              const handleBlurDefer = async () => {
                setTimeout(() => {
                  var _a;
                  if (currentHandleBlurDeferCallback === handleBlurDefer) {
                    if (!(((_a = refPopper.value) == null ? void 0 : _a.isFocusInsideContent()) && !hasJustTabExitedInput) && refInput.value.filter(input => {
                      return input.contains(document.activeElement);
                    }).length === 0) {
                      handleChange();
                      pickerVisible.value = false;
                      emit("blur", e);
                      props.validateEvent && formItem?.validate("blur").catch(err => debugWarn(err));
                    }
                    hasJustTabExitedInput = false;
                  }
                }, 0);
              };
              currentHandleBlurDeferCallback = handleBlurDefer;
              handleBlurDefer();
            };
            const pickerDisabled = computed(() => {
              return props.disabled || (form == null ? void 0 : form.disabled);
            });
            const parsedValue$1 = computed(() => {
              let dayOrDays;
              if (valueIsEmpty.value) {
                if (pickerOptions.value.getDefaultValue) dayOrDays = pickerOptions.value.getDefaultValue();
              } else if (isArray(props.modelValue)) dayOrDays = props.modelValue.map(d => parseDate(d, props.valueFormat, lang.value));else dayOrDays = parseDate(props.modelValue, props.valueFormat, lang.value);
              if (pickerOptions.value.getRangeAvailableTime) {
                const availableResult = pickerOptions.value.getRangeAvailableTime(dayOrDays);
                if (!isEqual_default(availableResult, dayOrDays)) {
                  dayOrDays = availableResult;
                  emitInput(isArray(dayOrDays) ? dayOrDays.map(_ => _.toDate()) : dayOrDays.toDate());
                }
              }
              if (isArray(dayOrDays) && dayOrDays.some(day => !day)) dayOrDays = [];
              return dayOrDays;
            });
            const displayValue = computed(() => {
              if (!pickerOptions.value.panelReady) return "";
              const formattedValue = formatDayjsToString(parsedValue$1.value);
              if (isArray(userInput.value)) return [userInput.value[0] || formattedValue && formattedValue[0] || "", userInput.value[1] || formattedValue && formattedValue[1] || ""];else if (userInput.value !== null) return userInput.value;
              if (!isTimePicker.value && valueIsEmpty.value) return "";
              if (!pickerVisible.value && valueIsEmpty.value) return "";
              if (formattedValue) return isDatesPicker.value ? formattedValue.join(", ") : formattedValue;
              return "";
            });
            const isTimeLikePicker = computed(() => props.type.includes("time"));
            const isTimePicker = computed(() => props.type.startsWith("time"));
            const isDatesPicker = computed(() => props.type === "dates");
            const triggerIcon = computed(() => props.prefixIcon || (isTimeLikePicker.value ? clock_default : calendar_default));
            const showClose = ref(false);
            const onClearIconClick = event => {
              if (props.readonly || pickerDisabled.value) return;
              if (showClose.value) {
                event.stopPropagation();
                focusOnInputBox();
                emitInput(null);
                emitChange(null, true);
                showClose.value = false;
                pickerVisible.value = false;
                pickerOptions.value.handleClear && pickerOptions.value.handleClear();
              }
            };
            const valueIsEmpty = computed(() => {
              const {
                modelValue
              } = props;
              return !modelValue || isArray(modelValue) && !modelValue.filter(Boolean).length;
            });
            const onMouseDownInput = async event => {
              var _a;
              if (props.readonly || pickerDisabled.value) return;
              if (((_a = event.target) == null ? void 0 : _a.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) pickerVisible.value = true;
            };
            const onMouseEnter = () => {
              if (props.readonly || pickerDisabled.value) return;
              if (!valueIsEmpty.value && props.clearable) showClose.value = true;
            };
            const onMouseLeave = () => {
              showClose.value = false;
            };
            const onTouchStartInput = event => {
              var _a;
              if (props.readonly || pickerDisabled.value) return;
              if (((_a = event.touches[0].target) == null ? void 0 : _a.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) pickerVisible.value = true;
            };
            const isRangeInput = computed(() => {
              return props.type.includes("range");
            });
            const pickerSize = useFormSize();
            const popperEl = computed(() => {
              var _a, _b;
              return (_b = (_a = unref(refPopper)) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
            });
            const actualInputRef = computed(() => {
              var _a;
              if (unref(isRangeInput)) return unref(inputRef);
              return (_a = unref(inputRef)) == null ? void 0 : _a.$el;
            });
            onClickOutside(actualInputRef, e => {
              const unrefedPopperEl = unref(popperEl);
              const inputEl = unref(actualInputRef);
              if (unrefedPopperEl && (e.target === unrefedPopperEl || e.composedPath().includes(unrefedPopperEl)) || e.target === inputEl || e.composedPath().includes(inputEl)) return;
              pickerVisible.value = false;
            });
            const userInput = ref(null);
            const handleChange = () => {
              if (userInput.value) {
                const value = parseUserInputToDayjs(displayValue.value);
                if (value) {
                  if (isValidValue(value)) {
                    emitInput(isArray(value) ? value.map(_ => _.toDate()) : value.toDate());
                    userInput.value = null;
                  }
                }
              }
              if (userInput.value === "") {
                emitInput(null);
                emitChange(null);
                userInput.value = null;
              }
            };
            const parseUserInputToDayjs = value => {
              if (!value) return null;
              return pickerOptions.value.parseUserInput(value);
            };
            const formatDayjsToString = value => {
              if (!value) return null;
              return pickerOptions.value.formatToString(value);
            };
            const isValidValue = value => {
              return pickerOptions.value.isValidValue(value);
            };
            const handleKeydownInput = async event => {
              if (props.readonly || pickerDisabled.value) return;
              const {
                code
              } = event;
              emitKeydown(event);
              if (code === EVENT_CODE.esc) {
                if (pickerVisible.value === true) {
                  pickerVisible.value = false;
                  event.preventDefault();
                  event.stopPropagation();
                }
                return;
              }
              if (code === EVENT_CODE.down) {
                if (pickerOptions.value.handleFocusPicker) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                if (pickerVisible.value === false) {
                  pickerVisible.value = true;
                  await nextTick();
                }
                if (pickerOptions.value.handleFocusPicker) {
                  pickerOptions.value.handleFocusPicker();
                  return;
                }
              }
              if (code === EVENT_CODE.tab) {
                hasJustTabExitedInput = true;
                return;
              }
              if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
                if (userInput.value === null || userInput.value === "" || isValidValue(parseUserInputToDayjs(displayValue.value))) {
                  handleChange();
                  pickerVisible.value = false;
                }
                event.stopPropagation();
                return;
              }
              if (userInput.value) {
                event.stopPropagation();
                return;
              }
              if (pickerOptions.value.handleKeydownInput) pickerOptions.value.handleKeydownInput(event);
            };
            const onUserInput = e => {
              userInput.value = e;
              if (!pickerVisible.value) pickerVisible.value = true;
            };
            const handleStartInput = event => {
              const target = event.target;
              if (userInput.value) userInput.value = [target.value, userInput.value[1]];else userInput.value = [target.value, null];
            };
            const handleEndInput = event => {
              const target = event.target;
              if (userInput.value) userInput.value = [userInput.value[0], target.value];else userInput.value = [null, target.value];
            };
            const handleStartChange = () => {
              var _a;
              const values = userInput.value;
              const value = parseUserInputToDayjs(values && values[0]);
              const parsedVal = unref(parsedValue$1);
              if (value && value.isValid()) {
                userInput.value = [formatDayjsToString(value), ((_a = displayValue.value) == null ? void 0 : _a[1]) || null];
                const newValue = [value, parsedVal && (parsedVal[1] || null)];
                if (isValidValue(newValue)) {
                  emitInput(newValue);
                  userInput.value = null;
                }
              }
            };
            const handleEndChange = () => {
              var _a;
              const values = unref(userInput);
              const value = parseUserInputToDayjs(values && values[1]);
              const parsedVal = unref(parsedValue$1);
              if (value && value.isValid()) {
                userInput.value = [((_a = unref(displayValue)) == null ? void 0 : _a[0]) || null, formatDayjsToString(value)];
                const newValue = [parsedVal && parsedVal[0], value];
                if (isValidValue(newValue)) {
                  emitInput(newValue);
                  userInput.value = null;
                }
              }
            };
            const pickerOptions = ref({});
            const onSetPickerOption = e => {
              pickerOptions.value[e[0]] = e[1];
              pickerOptions.value.panelReady = true;
            };
            const onCalendarChange = e => {
              emit("calendar-change", e);
            };
            const onPanelChange = (value, mode, view) => {
              emit("panel-change", value, mode, view);
            };
            provide("EP_PICKER_BASE", {
              props
            });
            expose({
              focus,
              handleFocusInput,
              handleBlurInput,
              handleOpen,
              handleClose,
              onPick
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElTooltip), mergeProps({
                ref_key: "refPopper",
                ref: refPopper,
                visible: pickerVisible.value,
                effect: "light",
                pure: "",
                trigger: "click"
              }, _ctx.$attrs, {
                role: "dialog",
                teleported: "",
                transition: `${unref(nsDate).namespace.value}-zoom-in-top`,
                "popper-class": [`${unref(nsDate).namespace.value}-picker__popper`, _ctx.popperClass],
                "popper-options": unref(elPopperOptions),
                "fallback-placements": ["bottom", "top", "right", "left"],
                "gpu-acceleration": false,
                "stop-popper-mouse-event": false,
                "hide-after": 0,
                persistent: "",
                onBeforeShow,
                onShow,
                onHide
              }), {
                default: withCtx(() => [!unref(isRangeInput) ? (openBlock(), createBlock(unref(ElInput), {
                  key: 0,
                  id: _ctx.id,
                  ref_key: "inputRef",
                  ref: inputRef,
                  "container-role": "combobox",
                  "model-value": unref(displayValue),
                  name: _ctx.name,
                  size: unref(pickerSize),
                  disabled: unref(pickerDisabled),
                  placeholder: _ctx.placeholder,
                  class: normalizeClass([unref(nsDate).b("editor"), unref(nsDate).bm("editor", _ctx.type), _ctx.$attrs.class]),
                  style: normalizeStyle(_ctx.$attrs.style),
                  readonly: !_ctx.editable || _ctx.readonly || unref(isDatesPicker) || _ctx.type === "week",
                  label: _ctx.label,
                  tabindex: _ctx.tabindex,
                  "validate-event": false,
                  onInput: onUserInput,
                  onFocus: handleFocusInput,
                  onBlur: handleBlurInput,
                  onKeydown: handleKeydownInput,
                  onChange: handleChange,
                  onMousedown: onMouseDownInput,
                  onMouseenter: onMouseEnter,
                  onMouseleave: onMouseLeave,
                  onTouchstart: onTouchStartInput,
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, {
                  prefix: withCtx(() => [unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass(unref(nsInput).e("icon")),
                    onMousedown: withModifiers(onMouseDownInput, ["prevent"]),
                    onTouchstart: onTouchStartInput
                  }, {
                    default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))]),
                    _: 1
                  }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true)]),
                  suffix: withCtx(() => [showClose.value && _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass(`${unref(nsInput).e("icon")} clear-icon`),
                    onClick: withModifiers(onClearIconClick, ["stop"])
                  }, {
                    default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))]),
                    _: 1
                  }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)]),
                  _: 1
                }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "onKeydown"])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  ref_key: "inputRef",
                  ref: inputRef,
                  class: normalizeClass(unref(rangeInputKls)),
                  style: normalizeStyle(_ctx.$attrs.style),
                  onClick: handleFocusInput,
                  onMouseenter: onMouseEnter,
                  onMouseleave: onMouseLeave,
                  onTouchstart: onTouchStartInput,
                  onKeydown: handleKeydownInput
                }, [unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsRange).e("icon")]),
                  onMousedown: withModifiers(onMouseDownInput, ["prevent"]),
                  onTouchstart: onTouchStartInput
                }, {
                  default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))]),
                  _: 1
                }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true), createBaseVNode("input", {
                  id: _ctx.id && _ctx.id[0],
                  autocomplete: "off",
                  name: _ctx.name && _ctx.name[0],
                  placeholder: _ctx.startPlaceholder,
                  value: unref(displayValue) && unref(displayValue)[0],
                  disabled: unref(pickerDisabled),
                  readonly: !_ctx.editable || _ctx.readonly,
                  class: normalizeClass(unref(nsRange).b("input")),
                  onMousedown: onMouseDownInput,
                  onInput: handleStartInput,
                  onChange: handleStartChange,
                  onFocus: handleFocusInput,
                  onBlur: handleBlurInput
                }, null, 42, _hoisted_1$7), renderSlot(_ctx.$slots, "range-separator", {}, () => [createBaseVNode("span", {
                  class: normalizeClass(unref(nsRange).b("separator"))
                }, toDisplayString(_ctx.rangeSeparator), 3)]), createBaseVNode("input", {
                  id: _ctx.id && _ctx.id[1],
                  autocomplete: "off",
                  name: _ctx.name && _ctx.name[1],
                  placeholder: _ctx.endPlaceholder,
                  value: unref(displayValue) && unref(displayValue)[1],
                  disabled: unref(pickerDisabled),
                  readonly: !_ctx.editable || _ctx.readonly,
                  class: normalizeClass(unref(nsRange).b("input")),
                  onMousedown: onMouseDownInput,
                  onFocus: handleFocusInput,
                  onBlur: handleBlurInput,
                  onInput: handleEndInput,
                  onChange: handleEndChange
                }, null, 42, _hoisted_2$7), _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass(unref(clearIconKls)),
                  onClick: onClearIconClick
                }, {
                  default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)], 38))]),
                content: withCtx(() => [renderSlot(_ctx.$slots, "default", {
                  visible: pickerVisible.value,
                  actualVisible: pickerActualVisible.value,
                  parsedValue: unref(parsedValue$1),
                  format: _ctx.format,
                  dateFormat: _ctx.dateFormat,
                  timeFormat: _ctx.timeFormat,
                  unlinkPanels: _ctx.unlinkPanels,
                  type: _ctx.type,
                  defaultValue: _ctx.defaultValue,
                  onPick,
                  onSelectRange: setSelectionRange,
                  onSetPickerOption,
                  onCalendarChange,
                  onPanelChange,
                  onKeydown: onKeydownPopperContent,
                  onMousedown: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
                })]),
                _: 3
              }, 16, ["visible", "transition", "popper-class", "popper-options"]);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/props/panel-time-picker.mjs
        panelTimePickerProps = buildProps({
          ...timePanelSharedProps,
          datetimeRole: String,
          parsedValue: {
            type: definePropType(Object)
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/composables/use-time-panel.mjs
        useTimePanel = ({
          getAvailableHours,
          getAvailableMinutes,
          getAvailableSeconds
        }) => {
          const getAvailableTime = (date$1, role, first, compareDate) => {
            const availableTimeGetters = {
              hour: getAvailableHours,
              minute: getAvailableMinutes,
              second: getAvailableSeconds
            };
            let result = date$1;
            ["hour", "minute", "second"].forEach(type => {
              if (availableTimeGetters[type]) {
                let availableTimeSlots;
                const method = availableTimeGetters[type];
                switch (type) {
                  case "minute":
                    availableTimeSlots = method(result.hour(), role, compareDate);
                    break;
                  case "second":
                    availableTimeSlots = method(result.hour(), result.minute(), role, compareDate);
                    break;
                  default:
                    availableTimeSlots = method(role, compareDate);
                    break;
                }
                if ((availableTimeSlots == null ? void 0 : availableTimeSlots.length) && !availableTimeSlots.includes(result[type]())) {
                  const pos = first ? 0 : availableTimeSlots.length - 1;
                  result = result[type](availableTimeSlots[pos]);
                }
              }
            });
            return result;
          };
          const timePickerOptions = {};
          const onSetOption = ([key, val]) => {
            timePickerOptions[key] = val;
          };
          return {
            timePickerOptions,
            getAvailableTime,
            onSetOption
          };
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/composables/use-time-picker.mjs
        makeAvailableArr = disabledList => {
          const trueOrNumber = (isDisabled, index) => isDisabled || index;
          const getNumber = predicate => predicate !== true;
          return disabledList.map(trueOrNumber).filter(getNumber);
        };
        getTimeLists = (disabledHours, disabledMinutes, disabledSeconds) => {
          const getHoursList = (role, compare) => {
            return makeList(24, disabledHours && (() => disabledHours == null ? void 0 : disabledHours(role, compare)));
          };
          const getMinutesList = (hour, role, compare) => {
            return makeList(60, disabledMinutes && (() => disabledMinutes == null ? void 0 : disabledMinutes(hour, role, compare)));
          };
          const getSecondsList = (hour, minute, role, compare) => {
            return makeList(60, disabledSeconds && (() => disabledSeconds == null ? void 0 : disabledSeconds(hour, minute, role, compare)));
          };
          return {
            getHoursList,
            getMinutesList,
            getSecondsList
          };
        };
        buildAvailableTimeSlotGetter = (disabledHours, disabledMinutes, disabledSeconds) => {
          const {
            getHoursList,
            getMinutesList,
            getSecondsList
          } = getTimeLists(disabledHours, disabledMinutes, disabledSeconds);
          const getAvailableHours = (role, compare) => {
            return makeAvailableArr(getHoursList(role, compare));
          };
          const getAvailableMinutes = (hour, role, compare) => {
            return makeAvailableArr(getMinutesList(hour, role, compare));
          };
          const getAvailableSeconds = (hour, minute, role, compare) => {
            return makeAvailableArr(getSecondsList(hour, minute, role, compare));
          };
          return {
            getAvailableHours,
            getAvailableMinutes,
            getAvailableSeconds
          };
        };
        useOldValue = props => {
          const oldValue = ref(props.parsedValue);
          watch(() => props.visible, val => {
            if (!val) oldValue.value = props.parsedValue;
          });
          return oldValue;
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/props/basic-time-spinner.mjs
        basicTimeSpinnerProps = buildProps({
          role: {
            type: String,
            required: true
          },
          spinnerDate: {
            type: definePropType(Object),
            required: true
          },
          showSeconds: {
            type: Boolean,
            default: true
          },
          arrowControl: Boolean,
          amPmMode: {
            type: definePropType(String),
            default: ""
          },
          ...disabledTimeListsProps
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/time-picker-com/basic-time-spinner.mjs
        _hoisted_1$6 = ["onClick"];
        _hoisted_2$6 = ["onMouseenter"];
        TimeSpinner = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          __name: "basic-time-spinner",
          props: basicTimeSpinnerProps,
          emits: ["change", "select-range", "set-option"],
          setup(__props, {
            emit
          }) {
            const props = __props;
            const ns = useNamespace("time");
            const {
              getHoursList,
              getMinutesList,
              getSecondsList
            } = getTimeLists(props.disabledHours, props.disabledMinutes, props.disabledSeconds);
            let isScrolling = false;
            const currentScrollbar = ref();
            const listRefsMap = {
              hours: ref(),
              minutes: ref(),
              seconds: ref()
            };
            const spinnerItems = computed(() => {
              return props.showSeconds ? timeUnits : timeUnits.slice(0, 2);
            });
            const timePartials = computed(() => {
              const {
                spinnerDate
              } = props;
              return {
                hours: spinnerDate.hour(),
                minutes: spinnerDate.minute(),
                seconds: spinnerDate.second()
              };
            });
            const timeList = computed(() => {
              const {
                hours,
                minutes
              } = unref(timePartials);
              return {
                hours: getHoursList(props.role),
                minutes: getMinutesList(hours, props.role),
                seconds: getSecondsList(hours, minutes, props.role)
              };
            });
            const arrowControlTimeList = computed(() => {
              const {
                hours,
                minutes,
                seconds
              } = unref(timePartials);
              return {
                hours: buildTimeList(hours, 23),
                minutes: buildTimeList(minutes, 59),
                seconds: buildTimeList(seconds, 59)
              };
            });
            const debouncedResetScroll = debounce_default(type => {
              isScrolling = false;
              adjustCurrentSpinner(type);
            }, 200);
            const getAmPmFlag = hour => {
              if (!!!props.amPmMode) return "";
              const isCapital = props.amPmMode === "A";
              let content = hour < 12 ? " am" : " pm";
              if (isCapital) content = content.toUpperCase();
              return content;
            };
            const emitSelectRange = type => {
              let range;
              switch (type) {
                case "hours":
                  range = [0, 2];
                  break;
                case "minutes":
                  range = [3, 5];
                  break;
                case "seconds":
                  range = [6, 8];
                  break;
              }
              const [left, right] = range;
              emit("select-range", left, right);
              currentScrollbar.value = type;
            };
            const adjustCurrentSpinner = type => {
              adjustSpinner(type, unref(timePartials)[type]);
            };
            const adjustSpinners = () => {
              adjustCurrentSpinner("hours");
              adjustCurrentSpinner("minutes");
              adjustCurrentSpinner("seconds");
            };
            const getScrollbarElement = el => el.querySelector(`.${ns.namespace.value}-scrollbar__wrap`);
            const adjustSpinner = (type, value) => {
              if (props.arrowControl) return;
              const scrollbar = unref(listRefsMap[type]);
              if (scrollbar && scrollbar.$el) getScrollbarElement(scrollbar.$el).scrollTop = Math.max(0, value * typeItemHeight(type));
            };
            const typeItemHeight = type => {
              const scrollbar = unref(listRefsMap[type]);
              const listItem = scrollbar == null ? void 0 : scrollbar.$el.querySelector("li");
              if (listItem) return Number.parseFloat(getStyle(listItem, "height")) || 0;
              return 0;
            };
            const onIncrement = () => {
              scrollDown(1);
            };
            const onDecrement = () => {
              scrollDown(-1);
            };
            const scrollDown = step => {
              if (!currentScrollbar.value) emitSelectRange("hours");
              const label = currentScrollbar.value;
              const now = unref(timePartials)[label];
              const next = findNextUnDisabled(label, now, step, currentScrollbar.value === "hours" ? 24 : 60);
              modifyDateField(label, next);
              adjustSpinner(label, next);
              nextTick(() => emitSelectRange(label));
            };
            const findNextUnDisabled = (type, now, step, total) => {
              let next = (now + step + total) % total;
              const list = unref(timeList)[type];
              while (list[next] && next !== now) next = (next + step + total) % total;
              return next;
            };
            const modifyDateField = (type, value) => {
              if (unref(timeList)[type][value]) return;
              const {
                hours,
                minutes,
                seconds
              } = unref(timePartials);
              let changeTo;
              switch (type) {
                case "hours":
                  changeTo = props.spinnerDate.hour(value).minute(minutes).second(seconds);
                  break;
                case "minutes":
                  changeTo = props.spinnerDate.hour(hours).minute(value).second(seconds);
                  break;
                case "seconds":
                  changeTo = props.spinnerDate.hour(hours).minute(minutes).second(value);
                  break;
              }
              emit("change", changeTo);
            };
            const handleClick = (type, {
              value,
              disabled
            }) => {
              if (!disabled) {
                modifyDateField(type, value);
                emitSelectRange(type);
                adjustSpinner(type, value);
              }
            };
            const handleScroll = type => {
              isScrolling = true;
              debouncedResetScroll(type);
              modifyDateField(type, Math.min(Math.round((getScrollbarElement(unref(listRefsMap[type]).$el).scrollTop - (scrollBarHeight(type) * .5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), type === "hours" ? 23 : 59));
            };
            const scrollBarHeight = type => {
              return unref(listRefsMap[type]).$el.offsetHeight;
            };
            const bindScrollEvent = () => {
              const bindFunction = type => {
                const scrollbar = unref(listRefsMap[type]);
                if (scrollbar && scrollbar.$el) getScrollbarElement(scrollbar.$el).onscroll = () => {
                  handleScroll(type);
                };
              };
              bindFunction("hours");
              bindFunction("minutes");
              bindFunction("seconds");
            };
            onMounted(() => {
              nextTick(() => {
                !props.arrowControl && bindScrollEvent();
                adjustSpinners();
                if (props.role === "start") emitSelectRange("hours");
              });
            });
            const setRef = (scrollbar, type) => {
              listRefsMap[type].value = scrollbar;
            };
            emit("set-option", [`${props.role}_scrollDown`, scrollDown]);
            emit("set-option", [`${props.role}_emitSelectRange`, emitSelectRange]);
            watch(() => props.spinnerDate, () => {
              if (isScrolling) return;
              adjustSpinners();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([unref(ns).b("spinner"), {
                  "has-seconds": _ctx.showSeconds
                }])
              }, [!_ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(unref(spinnerItems), item => {
                return openBlock(), createBlock(unref(ElScrollbar), {
                  key: item,
                  ref_for: true,
                  ref: scrollbar => setRef(scrollbar, item),
                  class: normalizeClass(unref(ns).be("spinner", "wrapper")),
                  "wrap-style": "max-height: inherit;",
                  "view-class": unref(ns).be("spinner", "list"),
                  noresize: "",
                  tag: "ul",
                  onMouseenter: $event => emitSelectRange(item),
                  onMousemove: $event => adjustCurrentSpinner(item)
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(timeList)[item], (disabled, key) => {
                    return openBlock(), createElementBlock("li", {
                      key,
                      class: normalizeClass([unref(ns).be("spinner", "item"), unref(ns).is("active", key === unref(timePartials)[item]), unref(ns).is("disabled", disabled)]),
                      onClick: $event => handleClick(item, {
                        value: key,
                        disabled
                      })
                    }, [item === "hours" ? (openBlock(), createElementBlock(Fragment, {
                      key: 0
                    }, [createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? key % 12 || 12 : key)).slice(-2)) + toDisplayString(getAmPmFlag(key)), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                      key: 1
                    }, [createTextVNode(toDisplayString(("0" + key).slice(-2)), 1)], 64))], 10, _hoisted_1$6);
                  }), 128))]),
                  _: 2
                }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]);
              }), 128)) : createCommentVNode("v-if", true), _ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, {
                key: 1
              }, renderList(unref(spinnerItems), item => {
                return openBlock(), createElementBlock("div", {
                  key: item,
                  class: normalizeClass([unref(ns).be("spinner", "wrapper"), unref(ns).is("arrow")]),
                  onMouseenter: $event => emitSelectRange(item)
                }, [withDirectives((openBlock(), createBlock(unref(ElIcon), {
                  class: normalizeClass(["arrow-up", unref(ns).be("spinner", "arrow")])
                }, {
                  default: withCtx(() => [createVNode(unref(arrow_up_default))]),
                  _: 1
                }, 8, ["class"])), [[unref(vRepeatClick), onDecrement]]), withDirectives((openBlock(), createBlock(unref(ElIcon), {
                  class: normalizeClass(["arrow-down", unref(ns).be("spinner", "arrow")])
                }, {
                  default: withCtx(() => [createVNode(unref(arrow_down_default))]),
                  _: 1
                }, 8, ["class"])), [[unref(vRepeatClick), onIncrement]]), createBaseVNode("ul", {
                  class: normalizeClass(unref(ns).be("spinner", "list"))
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(arrowControlTimeList)[item], (time, key) => {
                  return openBlock(), createElementBlock("li", {
                    key,
                    class: normalizeClass([unref(ns).be("spinner", "item"), unref(ns).is("active", time === unref(timePartials)[item]), unref(ns).is("disabled", unref(timeList)[item][time])])
                  }, [typeof time === "number" ? (openBlock(), createElementBlock(Fragment, {
                    key: 0
                  }, [item === "hours" ? (openBlock(), createElementBlock(Fragment, {
                    key: 0
                  }, [createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? time % 12 || 12 : time)).slice(-2)) + toDisplayString(getAmPmFlag(time)), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                    key: 1
                  }, [createTextVNode(toDisplayString(("0" + time).slice(-2)), 1)], 64))], 64)) : createCommentVNode("v-if", true)], 2);
                }), 128))], 2)], 42, _hoisted_2$6);
              }), 128)) : createCommentVNode("v-if", true)], 2);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/time-picker/src/time-picker-com/panel-time-pick.mjs
        import_dayjs_min$9 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        TimePickPanel = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          __name: "panel-time-pick",
          props: panelTimePickerProps,
          emits: ["pick", "select-range", "set-picker-option"],
          setup(__props, {
            emit
          }) {
            const props = __props;
            const {
              arrowControl,
              disabledHours,
              disabledMinutes,
              disabledSeconds,
              defaultValue
            } = inject("EP_PICKER_BASE").props;
            const {
              getAvailableHours,
              getAvailableMinutes,
              getAvailableSeconds
            } = buildAvailableTimeSlotGetter(disabledHours, disabledMinutes, disabledSeconds);
            const ns = useNamespace("time");
            const {
              t,
              lang
            } = useLocale();
            const selectionRange = ref([0, 2]);
            const oldValue = useOldValue(props);
            const transitionName = computed(() => {
              return isUndefined(props.actualVisible) ? `${ns.namespace.value}-zoom-in-top` : "";
            });
            const showSeconds = computed(() => {
              return props.format.includes("ss");
            });
            const amPmMode = computed(() => {
              if (props.format.includes("A")) return "A";
              if (props.format.includes("a")) return "a";
              return "";
            });
            const isValidValue = _date => {
              const parsedDate = (0, import_dayjs_min$9.default)(_date).locale(lang.value);
              const result = getRangeAvailableTime(parsedDate);
              return parsedDate.isSame(result);
            };
            const handleCancel = () => {
              emit("pick", oldValue.value, false);
            };
            const handleConfirm = (visible = false, first = false) => {
              if (first) return;
              emit("pick", props.parsedValue, visible);
            };
            const handleChange = _date => {
              if (!props.visible) return;
              emit("pick", getRangeAvailableTime(_date).millisecond(0), true);
            };
            const setSelectionRange = (start, end) => {
              emit("select-range", start, end);
              selectionRange.value = [start, end];
            };
            const changeSelectionRange = step => {
              const list = [0, 3].concat(showSeconds.value ? [6] : []);
              const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
              const next = (list.indexOf(selectionRange.value[0]) + step + list.length) % list.length;
              timePickerOptions["start_emitSelectRange"](mapping[next]);
            };
            const handleKeydown = event => {
              const code = event.code;
              const {
                left,
                right,
                up,
                down
              } = EVENT_CODE;
              if ([left, right].includes(code)) {
                changeSelectionRange(code === left ? -1 : 1);
                event.preventDefault();
                return;
              }
              if ([up, down].includes(code)) {
                const step = code === up ? -1 : 1;
                timePickerOptions["start_scrollDown"](step);
                event.preventDefault();
                return;
              }
            };
            const {
              timePickerOptions,
              onSetOption,
              getAvailableTime
            } = useTimePanel({
              getAvailableHours,
              getAvailableMinutes,
              getAvailableSeconds
            });
            const getRangeAvailableTime = date$1 => {
              return getAvailableTime(date$1, props.datetimeRole || "", true);
            };
            const parseUserInput = value => {
              if (!value) return null;
              return (0, import_dayjs_min$9.default)(value, props.format).locale(lang.value);
            };
            const formatToString = value => {
              if (!value) return null;
              return value.format(props.format);
            };
            const getDefaultValue$1 = () => {
              return (0, import_dayjs_min$9.default)(defaultValue).locale(lang.value);
            };
            emit("set-picker-option", ["isValidValue", isValidValue]);
            emit("set-picker-option", ["formatToString", formatToString]);
            emit("set-picker-option", ["parseUserInput", parseUserInput]);
            emit("set-picker-option", ["handleKeydownInput", handleKeydown]);
            emit("set-picker-option", ["getRangeAvailableTime", getRangeAvailableTime]);
            emit("set-picker-option", ["getDefaultValue", getDefaultValue$1]);
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Transition, {
                name: unref(transitionName)
              }, {
                default: withCtx(() => [_ctx.actualVisible || _ctx.visible ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(unref(ns).b("panel"))
                }, [createBaseVNode("div", {
                  class: normalizeClass([unref(ns).be("panel", "content"), {
                    "has-seconds": unref(showSeconds)
                  }])
                }, [createVNode(TimeSpinner, {
                  ref: "spinner",
                  role: _ctx.datetimeRole || "start",
                  "arrow-control": unref(arrowControl),
                  "show-seconds": unref(showSeconds),
                  "am-pm-mode": unref(amPmMode),
                  "spinner-date": _ctx.parsedValue,
                  "disabled-hours": unref(disabledHours),
                  "disabled-minutes": unref(disabledMinutes),
                  "disabled-seconds": unref(disabledSeconds),
                  onChange: handleChange,
                  onSetOption: unref(onSetOption),
                  onSelectRange: setSelectionRange
                }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])], 2), createBaseVNode("div", {
                  class: normalizeClass(unref(ns).be("panel", "footer"))
                }, [createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ns).be("panel", "btn"), "cancel"]),
                  onClick: handleCancel
                }, toDisplayString(unref(t)("el.datepicker.cancel")), 3), createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ns).be("panel", "btn"), "confirm"]),
                  onClick: _cache[0] || (_cache[0] = $event => handleConfirm())
                }, toDisplayString(unref(t)("el.datepicker.confirm")), 3)], 2)], 2)) : createCommentVNode("v-if", true)]),
                _: 1
              }, 8, ["name"]);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/localeData.js
        require_localeData = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/localeData.js": (exports, module) => {
            (function (n, e) {
              "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n = "undefined" != typeof globalThis ? globalThis : n || self).dayjs_plugin_localeData = e();
            })(exports, function () {
              return function (n, e, t) {
                var r = e.prototype,
                  o = function (n$1) {
                    return n$1 && (n$1.indexOf ? n$1 : n$1.s);
                  },
                  u = function (n$1, e$1, t$1, r$1, u$1) {
                    var i$1 = n$1.name ? n$1 : n$1.$locale(),
                      a$1 = o(i$1[e$1]),
                      s$1 = o(i$1[t$1]),
                      f = a$1 || s$1.map(function (n$2) {
                        return n$2.slice(0, r$1);
                      });
                    if (!u$1) return f;
                    var d = i$1.weekStart;
                    return f.map(function (n$2, e$2) {
                      return f[(e$2 + (d || 0)) % 7];
                    });
                  },
                  i = function () {
                    return t.Ls[t.locale()];
                  },
                  a = function (n$1, e$1) {
                    return n$1.formats[e$1] || function (n$2) {
                      return n$2.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (n$3, e$2, t$1) {
                        return e$2 || t$1.slice(1);
                      });
                    }(n$1.formats[e$1.toUpperCase()]);
                  },
                  s = function () {
                    var n$1 = this;
                    return {
                      months: function (e$1) {
                        return e$1 ? e$1.format("MMMM") : u(n$1, "months");
                      },
                      monthsShort: function (e$1) {
                        return e$1 ? e$1.format("MMM") : u(n$1, "monthsShort", "months", 3);
                      },
                      firstDayOfWeek: function () {
                        return n$1.$locale().weekStart || 0;
                      },
                      weekdays: function (e$1) {
                        return e$1 ? e$1.format("dddd") : u(n$1, "weekdays");
                      },
                      weekdaysMin: function (e$1) {
                        return e$1 ? e$1.format("dd") : u(n$1, "weekdaysMin", "weekdays", 2);
                      },
                      weekdaysShort: function (e$1) {
                        return e$1 ? e$1.format("ddd") : u(n$1, "weekdaysShort", "weekdays", 3);
                      },
                      longDateFormat: function (e$1) {
                        return a(n$1.$locale(), e$1);
                      },
                      meridiem: this.$locale().meridiem,
                      ordinal: this.$locale().ordinal
                    };
                  };
                r.localeData = function () {
                  return s.bind(this)();
                }, t.localeData = function () {
                  var n$1 = i();
                  return {
                    firstDayOfWeek: function () {
                      return n$1.weekStart || 0;
                    },
                    weekdays: function () {
                      return t.weekdays();
                    },
                    weekdaysShort: function () {
                      return t.weekdaysShort();
                    },
                    weekdaysMin: function () {
                      return t.weekdaysMin();
                    },
                    months: function () {
                      return t.months();
                    },
                    monthsShort: function () {
                      return t.monthsShort();
                    },
                    longDateFormat: function (e$1) {
                      return a(n$1, e$1);
                    },
                    meridiem: n$1.meridiem,
                    ordinal: n$1.ordinal
                  };
                }, t.months = function () {
                  return u(i(), "months");
                }, t.monthsShort = function () {
                  return u(i(), "monthsShort", "months", 3);
                }, t.weekdays = function (n$1) {
                  return u(i(), "weekdays", null, null, n$1);
                }, t.weekdaysShort = function (n$1) {
                  return u(i(), "weekdaysShort", "weekdays", 3, n$1);
                }, t.weekdaysMin = function (n$1) {
                  return u(i(), "weekdaysMin", "weekdays", 2, n$1);
                };
              };
            });
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/advancedFormat.js
        require_advancedFormat = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/advancedFormat.js": (exports, module) => {
            (function (e, t) {
              "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t();
            })(exports, function () {
              return function (e, t) {
                var r = t.prototype,
                  n = r.format;
                r.format = function (e$1) {
                  var t$1 = this,
                    r$1 = this.$locale();
                  if (!this.isValid()) return n.bind(this)(e$1);
                  var s = this.$utils(),
                    a = (e$1 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (e$2) {
                      switch (e$2) {
                        case "Q":
                          return Math.ceil((t$1.$M + 1) / 3);
                        case "Do":
                          return r$1.ordinal(t$1.$D);
                        case "gggg":
                          return t$1.weekYear();
                        case "GGGG":
                          return t$1.isoWeekYear();
                        case "wo":
                          return r$1.ordinal(t$1.week(), "W");
                        case "w":
                        case "ww":
                          return s.s(t$1.week(), "w" === e$2 ? 1 : 2, "0");
                        case "W":
                        case "WW":
                          return s.s(t$1.isoWeek(), "W" === e$2 ? 1 : 2, "0");
                        case "k":
                        case "kk":
                          return s.s(String(0 === t$1.$H ? 24 : t$1.$H), "k" === e$2 ? 1 : 2, "0");
                        case "X":
                          return Math.floor(t$1.$d.getTime() / 1e3);
                        case "x":
                          return t$1.$d.getTime();
                        case "z":
                          return "[" + t$1.offsetName() + "]";
                        case "zzz":
                          return "[" + t$1.offsetName("long") + "]";
                        default:
                          return e$2;
                      }
                    });
                  return n.bind(this)(a);
                };
              };
            });
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/weekOfYear.js
        require_weekOfYear = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/weekOfYear.js": (exports, module) => {
            (function (e, t) {
              "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t();
            })(exports, function () {
              var e = "week",
                t = "year";
              return function (i, n, r) {
                var f = n.prototype;
                f.week = function (i$1) {
                  if (void 0 === i$1 && (i$1 = null), null !== i$1) return this.add(7 * (i$1 - this.week()), "day");
                  var n$1 = this.$locale().yearStart || 1;
                  if (11 === this.month() && this.date() > 25) {
                    var f$1 = r(this).startOf(t).add(1, t).date(n$1),
                      s = r(this).endOf(e);
                    if (f$1.isBefore(s)) return 1;
                  }
                  var a = r(this).startOf(t).date(n$1).startOf(e).subtract(1, "millisecond"),
                    o = this.diff(a, e, !0);
                  return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
                }, f.weeks = function (e$1) {
                  return void 0 === e$1 && (e$1 = null), this.week(e$1);
                };
              };
            });
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/weekYear.js
        require_weekYear = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/weekYear.js": (exports, module) => {
            (function (e, t) {
              "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekYear = t();
            })(exports, function () {
              return function (e, t) {
                t.prototype.weekYear = function () {
                  var e$1 = this.month(),
                    t$1 = this.week(),
                    n = this.year();
                  return 1 === t$1 && 11 === e$1 ? n + 1 : 0 === e$1 && t$1 >= 52 ? n - 1 : n;
                };
              };
            });
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/dayOfYear.js
        require_dayOfYear = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/dayOfYear.js": (exports, module) => {
            (function (e, t) {
              "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_dayOfYear = t();
            })(exports, function () {
              return function (e, t, n) {
                t.prototype.dayOfYear = function (e$1) {
                  var t$1 = Math.round((n(this).startOf("day") - n(this).startOf("year")) / 864e5) + 1;
                  return null == e$1 ? t$1 : this.add(e$1 - t$1, "day");
                };
              };
            });
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/isSameOrAfter.js
        require_isSameOrAfter = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/isSameOrAfter.js": (exports, module) => {
            (function (e, t) {
              "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrAfter = t();
            })(exports, function () {
              return function (e, t) {
                t.prototype.isSameOrAfter = function (e$1, t$1) {
                  return this.isSame(e$1, t$1) || this.isAfter(e$1, t$1);
                };
              };
            });
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/isSameOrBefore.js
        require_isSameOrBefore = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/isSameOrBefore.js": (exports, module) => {
            (function (e, i) {
              "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrBefore = i();
            })(exports, function () {
              return function (e, i) {
                i.prototype.isSameOrBefore = function (e$1, i$1) {
                  return this.isSame(e$1, i$1) || this.isBefore(e$1, i$1);
                };
              };
            });
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/constants.mjs
        ROOT_PICKER_INJECTION_KEY = Symbol(); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/props/date-picker.mjs
        datePickerProps = buildProps({
          ...timePickerDefaultProps,
          type: {
            type: definePropType(String),
            default: "date"
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/props/shared.mjs
        selectionModes = ["date", "dates", "year", "month", "week", "range"];
        datePickerSharedProps = buildProps({
          disabledDate: {
            type: definePropType(Function)
          },
          date: {
            type: definePropType(Object),
            required: true
          },
          minDate: {
            type: definePropType(Object)
          },
          maxDate: {
            type: definePropType(Object)
          },
          parsedValue: {
            type: definePropType([Object, Array])
          },
          rangeState: {
            type: definePropType(Object),
            default: () => ({
              endDate: null,
              selecting: false
            })
          }
        });
        panelSharedProps = buildProps({
          type: {
            type: definePropType(String),
            required: true,
            values: datePickTypes
          },
          dateFormat: String,
          timeFormat: String
        });
        panelRangeSharedProps = buildProps({
          unlinkPanels: Boolean,
          parsedValue: {
            type: definePropType(Array)
          }
        });
        selectionModeWithDefault = mode => {
          return {
            type: String,
            values: selectionModes,
            default: mode
          };
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/props/panel-date-pick.mjs
        panelDatePickProps = buildProps({
          ...panelSharedProps,
          parsedValue: {
            type: definePropType([Object, Array])
          },
          visible: {
            type: Boolean
          },
          format: {
            type: String,
            default: ""
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/props/basic-date-table.mjs
        basicDateTableProps = buildProps({
          ...datePickerSharedProps,
          cellClassName: {
            type: definePropType(Function)
          },
          showWeekNumber: Boolean,
          selectionMode: selectionModeWithDefault("date")
        });
        basicDateTableEmits = ["changerange", "pick", "select"]; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/utils.mjs
        import_dayjs_min$8 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        init_shared_esm_bundler();
        isValidRange = range => {
          if (!isArray(range)) return false;
          const [left, right] = range;
          return import_dayjs_min$8.default.isDayjs(left) && import_dayjs_min$8.default.isDayjs(right) && left.isSameOrBefore(right);
        };
        getDefaultValue = (defaultValue, {
          lang,
          unit: unit$2,
          unlinkPanels
        }) => {
          let start;
          if (isArray(defaultValue)) {
            let [left, right] = defaultValue.map(d => (0, import_dayjs_min$8.default)(d).locale(lang));
            if (!unlinkPanels) right = left.add(1, unit$2);
            return [left, right];
          } else if (defaultValue) start = (0, import_dayjs_min$8.default)(defaultValue);else start = (0, import_dayjs_min$8.default)();
          start = start.locale(lang);
          return [start, start.add(1, unit$2)];
        };
        buildPickerTable = (dimension, rows, {
          columnIndexOffset,
          startDate,
          nextEndDate,
          now,
          unit: unit$2,
          relativeDateGetter,
          setCellMetadata,
          setRowMetadata
        }) => {
          for (let rowIndex = 0; rowIndex < dimension.row; rowIndex++) {
            const row = rows[rowIndex];
            for (let columnIndex = 0; columnIndex < dimension.column; columnIndex++) {
              let cell = row[columnIndex + columnIndexOffset];
              if (!cell) cell = {
                row: rowIndex,
                column: columnIndex,
                type: "normal",
                inRange: false,
                start: false,
                end: false
              };
              const nextStartDate = relativeDateGetter(rowIndex * dimension.column + columnIndex);
              cell.dayjs = nextStartDate;
              cell.date = nextStartDate.toDate();
              cell.timestamp = nextStartDate.valueOf();
              cell.type = "normal";
              cell.inRange = !!(startDate && nextStartDate.isSameOrAfter(startDate, unit$2) && nextEndDate && nextStartDate.isSameOrBefore(nextEndDate, unit$2)) || !!(startDate && nextStartDate.isSameOrBefore(startDate, unit$2) && nextEndDate && nextStartDate.isSameOrAfter(nextEndDate, unit$2));
              if (startDate == null ? void 0 : startDate.isSameOrAfter(nextEndDate)) {
                cell.start = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit$2);
                cell.end = startDate && nextStartDate.isSame(startDate, unit$2);
              } else {
                cell.start = !!startDate && nextStartDate.isSame(startDate, unit$2);
                cell.end = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit$2);
              }
              if (nextStartDate.isSame(now, unit$2)) cell.type = "today";
              setCellMetadata?.(cell, {
                rowIndex,
                columnIndex
              });
              row[columnIndex + columnIndexOffset] = cell;
            }
            setRowMetadata?.(row);
          }
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/composables/use-basic-date-table.mjs
        import_dayjs_min$7 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        isNormalDay = (type = "") => {
          return ["normal", "today"].includes(type);
        };
        useBasicDateTable = (props, emit) => {
          const {
            lang
          } = useLocale();
          const tbodyRef = ref();
          const currentCellRef = ref();
          const lastRow = ref();
          const lastColumn = ref();
          const tableRows = ref([[], [], [], [], [], []]);
          let focusWithClick = false;
          const firstDayOfWeek = props.date.$locale().weekStart || 7;
          const WEEKS_CONSTANT = props.date.locale("en").localeData().weekdaysShort().map(_ => _.toLowerCase());
          const offsetDay = computed(() => {
            return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek;
          });
          const startDate = computed(() => {
            const startDayOfMonth = props.date.startOf("month");
            return startDayOfMonth.subtract(startDayOfMonth.day() || 7, "day");
          });
          const WEEKS = computed(() => {
            return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7);
          });
          const hasCurrent = computed(() => {
            return flatten_default(unref(rows)).some(row => {
              return row.isCurrent;
            });
          });
          const days = computed(() => {
            const startOfMonth = props.date.startOf("month");
            return {
              startOfMonthDay: startOfMonth.day() || 7,
              dateCountOfMonth: startOfMonth.daysInMonth(),
              dateCountOfLastMonth: startOfMonth.subtract(1, "month").daysInMonth()
            };
          });
          const selectedDate = computed(() => {
            return props.selectionMode === "dates" ? castArray(props.parsedValue) : [];
          });
          const setDateText = (cell, {
            count,
            rowIndex,
            columnIndex
          }) => {
            const {
              startOfMonthDay,
              dateCountOfMonth,
              dateCountOfLastMonth
            } = unref(days);
            const offset = unref(offsetDay);
            if (rowIndex >= 0 && rowIndex <= 1) {
              const numberOfDaysFromPreviousMonth = startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset;
              if (columnIndex + rowIndex * 7 >= numberOfDaysFromPreviousMonth) {
                cell.text = count;
                return true;
              } else {
                cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - columnIndex % 7) + 1 + rowIndex * 7;
                cell.type = "prev-month";
              }
            } else {
              if (count <= dateCountOfMonth) cell.text = count;else {
                cell.text = count - dateCountOfMonth;
                cell.type = "next-month";
              }
              return true;
            }
            return false;
          };
          const setCellMetadata = (cell, {
            columnIndex,
            rowIndex
          }, count) => {
            const {
              disabledDate: disabledDate$1,
              cellClassName
            } = props;
            const _selectedDate = unref(selectedDate);
            const shouldIncrement = setDateText(cell, {
              count,
              rowIndex,
              columnIndex
            });
            const cellDate = cell.dayjs.toDate();
            cell.selected = _selectedDate.find(d => d.valueOf() === cell.dayjs.valueOf());
            cell.isSelected = !!cell.selected;
            cell.isCurrent = isCurrent(cell);
            cell.disabled = disabledDate$1 == null ? void 0 : disabledDate$1(cellDate);
            cell.customClass = cellClassName == null ? void 0 : cellClassName(cellDate);
            return shouldIncrement;
          };
          const setRowMetadata = row => {
            if (props.selectionMode === "week") {
              const [start, end] = props.showWeekNumber ? [1, 7] : [0, 6];
              const isActive = isWeekActive(row[start + 1]);
              row[start].inRange = isActive;
              row[start].start = isActive;
              row[end].inRange = isActive;
              row[end].end = isActive;
            }
          };
          const rows = computed(() => {
            const {
              minDate,
              maxDate,
              rangeState,
              showWeekNumber
            } = props;
            const offset = unref(offsetDay);
            const rows_ = unref(tableRows);
            const dateUnit = "day";
            let count = 1;
            if (showWeekNumber) {
              for (let rowIndex = 0; rowIndex < 6; rowIndex++) if (!rows_[rowIndex][0]) rows_[rowIndex][0] = {
                type: "week",
                text: unref(startDate).add(rowIndex * 7 + 1, dateUnit).week()
              };
            }
            buildPickerTable({
              row: 6,
              column: 7
            }, rows_, {
              startDate: minDate,
              columnIndexOffset: showWeekNumber ? 1 : 0,
              nextEndDate: rangeState.endDate || maxDate || rangeState.selecting && minDate || null,
              now: (0, import_dayjs_min$7.default)().locale(unref(lang)).startOf(dateUnit),
              unit: dateUnit,
              relativeDateGetter: idx => unref(startDate).add(idx - offset, dateUnit),
              setCellMetadata: (...args) => {
                if (setCellMetadata(...args, count)) count += 1;
              },
              setRowMetadata
            });
            return rows_;
          });
          watch(() => props.date, async () => {
            var _a;
            if ((_a = unref(tbodyRef)) == null ? void 0 : _a.contains(document.activeElement)) {
              await nextTick();
              await focus();
            }
          });
          const focus = async () => {
            var _a;
            return (_a = unref(currentCellRef)) == null ? void 0 : _a.focus();
          };
          const isCurrent = cell => {
            return props.selectionMode === "date" && isNormalDay(cell.type) && cellMatchesDate(cell, props.parsedValue);
          };
          const cellMatchesDate = (cell, date$1) => {
            if (!date$1) return false;
            return (0, import_dayjs_min$7.default)(date$1).locale(unref(lang)).isSame(props.date.date(Number(cell.text)), "day");
          };
          const getDateOfCell = (row, column) => {
            const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - unref(offsetDay);
            return unref(startDate).add(offsetFromStart, "day");
          };
          const handleMouseMove = event => {
            var _a;
            if (!props.rangeState.selecting) return;
            let target = event.target;
            if (target.tagName === "SPAN") target = (_a = target.parentNode) == null ? void 0 : _a.parentNode;
            if (target.tagName === "DIV") target = target.parentNode;
            if (target.tagName !== "TD") return;
            const row = target.parentNode.rowIndex - 1;
            const column = target.cellIndex;
            if (unref(rows)[row][column].disabled) return;
            if (row !== unref(lastRow) || column !== unref(lastColumn)) {
              lastRow.value = row;
              lastColumn.value = column;
              emit("changerange", {
                selecting: true,
                endDate: getDateOfCell(row, column)
              });
            }
          };
          const isSelectedCell = cell => {
            return !unref(hasCurrent) && (cell == null ? void 0 : cell.text) === 1 && cell.type === "normal" || cell.isCurrent;
          };
          const handleFocus = event => {
            if (focusWithClick || unref(hasCurrent) || props.selectionMode !== "date") return;
            handlePickDate(event, true);
          };
          const handleMouseDown = event => {
            if (!event.target.closest("td")) return;
            focusWithClick = true;
          };
          const handleMouseUp = event => {
            if (!event.target.closest("td")) return;
            focusWithClick = false;
          };
          const handleRangePick = newDate => {
            if (!props.rangeState.selecting || !props.minDate) {
              emit("pick", {
                minDate: newDate,
                maxDate: null
              });
              emit("select", true);
            } else {
              if (newDate >= props.minDate) emit("pick", {
                minDate: props.minDate,
                maxDate: newDate
              });else emit("pick", {
                minDate: newDate,
                maxDate: props.minDate
              });
              emit("select", false);
            }
          };
          const handleWeekPick = newDate => {
            const weekNumber = newDate.week();
            const value = `${newDate.year()}w${weekNumber}`;
            emit("pick", {
              year: newDate.year(),
              week: weekNumber,
              value,
              date: newDate.startOf("week")
            });
          };
          const handleDatesPick = (newDate, selected) => {
            emit("pick", selected ? castArray(props.parsedValue).filter(d => (d == null ? void 0 : d.valueOf()) !== newDate.valueOf()) : castArray(props.parsedValue).concat([newDate]));
          };
          const handlePickDate = (event, isKeyboardMovement = false) => {
            const target = event.target.closest("td");
            if (!target) return;
            const row = target.parentNode.rowIndex - 1;
            const column = target.cellIndex;
            const cell = unref(rows)[row][column];
            if (cell.disabled || cell.type === "week") return;
            const newDate = getDateOfCell(row, column);
            switch (props.selectionMode) {
              case "range":
                handleRangePick(newDate);
                break;
              case "date":
                emit("pick", newDate, isKeyboardMovement);
                break;
              case "week":
                handleWeekPick(newDate);
                break;
              case "dates":
                handleDatesPick(newDate, !!cell.selected);
                break;
              default:
                break;
            }
          };
          const isWeekActive = cell => {
            if (props.selectionMode !== "week") return false;
            let newDate = props.date.startOf("day");
            if (cell.type === "prev-month") newDate = newDate.subtract(1, "month");
            if (cell.type === "next-month") newDate = newDate.add(1, "month");
            newDate = newDate.date(Number.parseInt(cell.text, 10));
            if (props.parsedValue && !Array.isArray(props.parsedValue)) {
              const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7 - 1;
              return props.parsedValue.subtract(dayOffset, "day").isSame(newDate, "day");
            }
            return false;
          };
          return {
            WEEKS,
            rows,
            tbodyRef,
            currentCellRef,
            focus,
            isCurrent,
            isWeekActive,
            isSelectedCell,
            handlePickDate,
            handleMouseUp,
            handleMouseDown,
            handleMouseMove,
            handleFocus
          };
        };
        useBasicDateTableDOM = (props, {
          isCurrent,
          isWeekActive
        }) => {
          const ns = useNamespace("date-table");
          const {
            t
          } = useLocale();
          const tableKls = computed(() => [ns.b(), {
            "is-week-mode": props.selectionMode === "week"
          }]);
          const tableLabel = computed(() => t("el.datepicker.dateTablePrompt"));
          const weekLabel = computed(() => t("el.datepicker.week"));
          const getCellClasses = cell => {
            const classes = [];
            if (isNormalDay(cell.type) && !cell.disabled) {
              classes.push("available");
              if (cell.type === "today") classes.push("today");
            } else classes.push(cell.type);
            if (isCurrent(cell)) classes.push("current");
            if (cell.inRange && (isNormalDay(cell.type) || props.selectionMode === "week")) {
              classes.push("in-range");
              if (cell.start) classes.push("start-date");
              if (cell.end) classes.push("end-date");
            }
            if (cell.disabled) classes.push("disabled");
            if (cell.selected) classes.push("selected");
            if (cell.customClass) classes.push(cell.customClass);
            return classes.join(" ");
          };
          const getRowKls = cell => [ns.e("row"), {
            current: isWeekActive(cell)
          }];
          return {
            tableKls,
            tableLabel,
            weekLabel,
            getCellClasses,
            getRowKls,
            t
          };
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/props/basic-cell.mjs
        basicCellProps = buildProps({
          cell: {
            type: definePropType(Object)
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/date-picker-com/basic-cell-render.mjs
        ElDatePickerCell = defineComponent({
          name: "ElDatePickerCell",
          props: basicCellProps,
          setup(props) {
            const ns = useNamespace("date-table-cell");
            const {
              slots
            } = inject(ROOT_PICKER_INJECTION_KEY);
            return () => {
              const {
                cell
              } = props;
              if (slots.default) {
                const list = slots.default(cell).filter(item => {
                  return item.patchFlag !== -2 && item.type.toString() !== "Symbol(Comment)" && item.type.toString() !== "Symbol(v-cmt)";
                });
                if (list.length) return list;
              }
              return createVNode("div", {
                "class": ns.b()
              }, [createVNode("span", {
                "class": ns.e("text")
              }, [cell == null ? void 0 : cell.text])]);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/date-picker-com/basic-date-table.mjs
        _hoisted_1$5 = ["aria-label"];
        _hoisted_2$5 = {
          key: 0,
          scope: "col"
        };
        _hoisted_3$5 = ["aria-label"];
        _hoisted_4$3 = ["aria-current", "aria-selected", "tabindex"];
        DateTable = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          __name: "basic-date-table",
          props: basicDateTableProps,
          emits: basicDateTableEmits,
          setup(__props, {
            expose,
            emit
          }) {
            const props = __props;
            const {
              WEEKS,
              rows,
              tbodyRef,
              currentCellRef,
              focus,
              isCurrent,
              isWeekActive,
              isSelectedCell,
              handlePickDate,
              handleMouseUp,
              handleMouseDown,
              handleMouseMove,
              handleFocus
            } = useBasicDateTable(props, emit);
            const {
              tableLabel,
              tableKls,
              weekLabel,
              getCellClasses,
              getRowKls,
              t
            } = useBasicDateTableDOM(props, {
              isCurrent,
              isWeekActive
            });
            expose({
              focus
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("table", {
                "aria-label": unref(tableLabel),
                class: normalizeClass(unref(tableKls)),
                cellspacing: "0",
                cellpadding: "0",
                role: "grid",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(handlePickDate) && unref(handlePickDate)(...args)),
                onMousemove: _cache[2] || (_cache[2] = (...args) => unref(handleMouseMove) && unref(handleMouseMove)(...args)),
                onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => unref(handleMouseDown) && unref(handleMouseDown)(...args), ["prevent"])),
                onMouseup: _cache[4] || (_cache[4] = (...args) => unref(handleMouseUp) && unref(handleMouseUp)(...args))
              }, [createBaseVNode("tbody", {
                ref_key: "tbodyRef",
                ref: tbodyRef
              }, [createBaseVNode("tr", null, [_ctx.showWeekNumber ? (openBlock(), createElementBlock("th", _hoisted_2$5, toDisplayString(unref(weekLabel)), 1)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(WEEKS), (week, key) => {
                return openBlock(), createElementBlock("th", {
                  key,
                  "aria-label": unref(t)("el.datepicker.weeksFull." + week),
                  scope: "col"
                }, toDisplayString(unref(t)("el.datepicker.weeks." + week)), 9, _hoisted_3$5);
              }), 128))]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, rowKey) => {
                return openBlock(), createElementBlock("tr", {
                  key: rowKey,
                  class: normalizeClass(unref(getRowKls)(row[1]))
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, columnKey) => {
                  return openBlock(), createElementBlock("td", {
                    key: `${rowKey}.${columnKey}`,
                    ref_for: true,
                    ref: el => unref(isSelectedCell)(cell) && (currentCellRef.value = el),
                    class: normalizeClass(unref(getCellClasses)(cell)),
                    "aria-current": cell.isCurrent ? "date" : void 0,
                    "aria-selected": cell.isCurrent,
                    tabindex: unref(isSelectedCell)(cell) ? 0 : -1,
                    onFocus: _cache[0] || (_cache[0] = (...args) => unref(handleFocus) && unref(handleFocus)(...args))
                  }, [createVNode(unref(ElDatePickerCell), {
                    cell
                  }, null, 8, ["cell"])], 42, _hoisted_4$3);
                }), 128))], 2);
              }), 128))], 512)], 42, _hoisted_1$5);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/props/basic-month-table.mjs
        basicMonthTableProps = buildProps({
          ...datePickerSharedProps,
          selectionMode: selectionModeWithDefault("month")
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/date-picker-com/basic-month-table.mjs
        import_dayjs_min$6 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        _hoisted_1$4 = ["aria-label"];
        _hoisted_2$4 = ["aria-selected", "aria-label", "tabindex", "onKeydown"];
        _hoisted_3$4 = {
          class: "cell"
        };
        MonthTable = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          __name: "basic-month-table",
          props: basicMonthTableProps,
          emits: ["changerange", "pick", "select"],
          setup(__props, {
            expose,
            emit
          }) {
            const props = __props;
            const datesInMonth = (year, month, lang2) => {
              const firstDay = (0, import_dayjs_min$6.default)().locale(lang2).startOf("month").month(month).year(year);
              return rangeArr(firstDay.daysInMonth()).map(n => firstDay.add(n, "day").toDate());
            };
            const ns = useNamespace("month-table");
            const {
              t,
              lang
            } = useLocale();
            const tbodyRef = ref();
            const currentCellRef = ref();
            const months = ref(props.date.locale("en").localeData().monthsShort().map(_ => _.toLowerCase()));
            const tableRows = ref([[], [], []]);
            const lastRow = ref();
            const lastColumn = ref();
            const rows = computed(() => {
              var _a, _b;
              const rows2 = tableRows.value;
              const now = (0, import_dayjs_min$6.default)().locale(lang.value).startOf("month");
              for (let i = 0; i < 3; i++) {
                const row = rows2[i];
                for (let j = 0; j < 4; j++) {
                  const cell = row[j] || (row[j] = {
                    row: i,
                    column: j,
                    type: "normal",
                    inRange: false,
                    start: false,
                    end: false,
                    text: -1,
                    disabled: false
                  });
                  cell.type = "normal";
                  const index = i * 4 + j;
                  const calTime = props.date.startOf("year").month(index);
                  const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate || null;
                  cell.inRange = !!(props.minDate && calTime.isSameOrAfter(props.minDate, "month") && calEndDate && calTime.isSameOrBefore(calEndDate, "month")) || !!(props.minDate && calTime.isSameOrBefore(props.minDate, "month") && calEndDate && calTime.isSameOrAfter(calEndDate, "month"));
                  if ((_a = props.minDate) == null ? void 0 : _a.isSameOrAfter(calEndDate)) {
                    cell.start = !!(calEndDate && calTime.isSame(calEndDate, "month"));
                    cell.end = props.minDate && calTime.isSame(props.minDate, "month");
                  } else {
                    cell.start = !!(props.minDate && calTime.isSame(props.minDate, "month"));
                    cell.end = !!(calEndDate && calTime.isSame(calEndDate, "month"));
                  }
                  if (now.isSame(calTime)) cell.type = "today";
                  cell.text = index;
                  cell.disabled = ((_b = props.disabledDate) == null ? void 0 : _b.call(props, calTime.toDate())) || false;
                }
              }
              return rows2;
            });
            const focus = () => {
              var _a;
              (_a = currentCellRef.value) == null || _a.focus();
            };
            const getCellStyle = cell => {
              const style = {};
              const year = props.date.year();
              const today = /* @__PURE__ */new Date();
              const month = cell.text;
              style.disabled = props.disabledDate ? datesInMonth(year, month, lang.value).every(props.disabledDate) : false;
              style.current = castArray(props.parsedValue).findIndex(date$1 => import_dayjs_min$6.default.isDayjs(date$1) && date$1.year() === year && date$1.month() === month) >= 0;
              style.today = today.getFullYear() === year && today.getMonth() === month;
              if (cell.inRange) {
                style["in-range"] = true;
                if (cell.start) style["start-date"] = true;
                if (cell.end) style["end-date"] = true;
              }
              return style;
            };
            const isSelectedCell = cell => {
              const year = props.date.year();
              const month = cell.text;
              return castArray(props.date).findIndex(date$1 => date$1.year() === year && date$1.month() === month) >= 0;
            };
            const handleMouseMove = event => {
              var _a;
              if (!props.rangeState.selecting) return;
              let target = event.target;
              if (target.tagName === "A") target = (_a = target.parentNode) == null ? void 0 : _a.parentNode;
              if (target.tagName === "DIV") target = target.parentNode;
              if (target.tagName !== "TD") return;
              const row = target.parentNode.rowIndex;
              const column = target.cellIndex;
              if (rows.value[row][column].disabled) return;
              if (row !== lastRow.value || column !== lastColumn.value) {
                lastRow.value = row;
                lastColumn.value = column;
                emit("changerange", {
                  selecting: true,
                  endDate: props.date.startOf("year").month(row * 4 + column)
                });
              }
            };
            const handleMonthTableClick = event => {
              var _a;
              const target = (_a = event.target) == null ? void 0 : _a.closest("td");
              if ((target == null ? void 0 : target.tagName) !== "TD") return;
              if (hasClass(target, "disabled")) return;
              const column = target.cellIndex;
              const month = target.parentNode.rowIndex * 4 + column;
              const newDate = props.date.startOf("year").month(month);
              if (props.selectionMode === "range") {
                if (!props.rangeState.selecting) {
                  emit("pick", {
                    minDate: newDate,
                    maxDate: null
                  });
                  emit("select", true);
                } else {
                  if (props.minDate && newDate >= props.minDate) emit("pick", {
                    minDate: props.minDate,
                    maxDate: newDate
                  });else emit("pick", {
                    minDate: newDate,
                    maxDate: props.minDate
                  });
                  emit("select", false);
                }
              } else emit("pick", month);
            };
            watch(() => props.date, async () => {
              var _a, _b;
              if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
                await nextTick();
                (_b = currentCellRef.value) == null || _b.focus();
              }
            });
            expose({
              focus
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("table", {
                role: "grid",
                "aria-label": unref(t)("el.datepicker.monthTablePrompt"),
                class: normalizeClass(unref(ns).b()),
                onClick: handleMonthTableClick,
                onMousemove: handleMouseMove
              }, [createBaseVNode("tbody", {
                ref_key: "tbodyRef",
                ref: tbodyRef
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, key) => {
                return openBlock(), createElementBlock("tr", {
                  key
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, key_) => {
                  return openBlock(), createElementBlock("td", {
                    key: key_,
                    ref_for: true,
                    ref: el => isSelectedCell(cell) && (currentCellRef.value = el),
                    class: normalizeClass(getCellStyle(cell)),
                    "aria-selected": `${isSelectedCell(cell)}`,
                    "aria-label": unref(t)(`el.datepicker.month${+cell.text + 1}`),
                    tabindex: isSelectedCell(cell) ? 0 : -1,
                    onKeydown: [withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["space"]), withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["enter"])]
                  }, [createBaseVNode("div", null, [createBaseVNode("span", _hoisted_3$4, toDisplayString(unref(t)("el.datepicker.months." + months.value[cell.text])), 1)])], 42, _hoisted_2$4);
                }), 128))]);
              }), 128))], 512)], 42, _hoisted_1$4);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/props/basic-year-table.mjs
        ({
          date,
          disabledDate,
          parsedValue
        } = datePickerSharedProps);
        basicYearTableProps = buildProps({
          date,
          disabledDate,
          parsedValue
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/date-picker-com/basic-year-table.mjs
        import_dayjs_min$5 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        _hoisted_1$3 = ["aria-label"];
        _hoisted_2$3 = ["aria-selected", "tabindex", "onKeydown"];
        _hoisted_3$3 = {
          class: "cell"
        };
        _hoisted_4$2 = {
          key: 1
        };
        YearTable = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          __name: "basic-year-table",
          props: basicYearTableProps,
          emits: ["pick"],
          setup(__props, {
            expose,
            emit
          }) {
            const props = __props;
            const datesInYear = (year, lang2) => {
              const firstDay = (0, import_dayjs_min$5.default)(String(year)).locale(lang2).startOf("year");
              return rangeArr(firstDay.endOf("year").dayOfYear()).map(n => firstDay.add(n, "day").toDate());
            };
            const ns = useNamespace("year-table");
            const {
              t,
              lang
            } = useLocale();
            const tbodyRef = ref();
            const currentCellRef = ref();
            const startYear = computed(() => {
              return Math.floor(props.date.year() / 10) * 10;
            });
            const focus = () => {
              var _a;
              (_a = currentCellRef.value) == null || _a.focus();
            };
            const getCellKls = year => {
              const kls = {};
              const today = (0, import_dayjs_min$5.default)().locale(lang.value);
              kls.disabled = props.disabledDate ? datesInYear(year, lang.value).every(props.disabledDate) : false;
              kls.current = castArray(props.parsedValue).findIndex(d => d.year() === year) >= 0;
              kls.today = today.year() === year;
              return kls;
            };
            const isSelectedCell = year => {
              return year === startYear.value && props.date.year() < startYear.value && props.date.year() > startYear.value + 9 || castArray(props.date).findIndex(date$1 => date$1.year() === year) >= 0;
            };
            const handleYearTableClick = event => {
              const target = event.target.closest("td");
              if (target && target.textContent) {
                if (hasClass(target, "disabled")) return;
                const year = target.textContent || target.innerText;
                emit("pick", Number(year));
              }
            };
            watch(() => props.date, async () => {
              var _a, _b;
              if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
                await nextTick();
                (_b = currentCellRef.value) == null || _b.focus();
              }
            });
            expose({
              focus
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("table", {
                role: "grid",
                "aria-label": unref(t)("el.datepicker.yearTablePrompt"),
                class: normalizeClass(unref(ns).b()),
                onClick: handleYearTableClick
              }, [createBaseVNode("tbody", {
                ref_key: "tbodyRef",
                ref: tbodyRef
              }, [(openBlock(), createElementBlock(Fragment, null, renderList(3, (_, i) => {
                return createBaseVNode("tr", {
                  key: i
                }, [(openBlock(), createElementBlock(Fragment, null, renderList(4, (__, j) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: i + "_" + j
                  }, [i * 4 + j < 10 ? (openBlock(), createElementBlock("td", {
                    key: 0,
                    ref_for: true,
                    ref: el => isSelectedCell(unref(startYear) + i * 4 + j) && (currentCellRef.value = el),
                    class: normalizeClass(["available", getCellKls(unref(startYear) + i * 4 + j)]),
                    "aria-selected": `${isSelectedCell(unref(startYear) + i * 4 + j)}`,
                    tabindex: isSelectedCell(unref(startYear) + i * 4 + j) ? 0 : -1,
                    onKeydown: [withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["space"]), withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["enter"])]
                  }, [createBaseVNode("span", _hoisted_3$3, toDisplayString(unref(startYear) + i * 4 + j), 1)], 42, _hoisted_2$3)) : (openBlock(), createElementBlock("td", _hoisted_4$2))], 64);
                }), 64))]);
              }), 64))], 512)], 10, _hoisted_1$3);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/date-picker-com/panel-date-pick.mjs
        import_dayjs_min$4 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        init_shared_esm_bundler();
        _hoisted_1$2 = ["onClick"];
        _hoisted_2$2 = ["aria-label"];
        _hoisted_3$2 = ["aria-label"];
        _hoisted_4$1 = ["aria-label"];
        _hoisted_5$1 = ["aria-label"];
        DatePickPanel = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          __name: "panel-date-pick",
          props: panelDatePickProps,
          emits: ["pick", "set-picker-option", "panel-change"],
          setup(__props, {
            emit: contextEmit
          }) {
            const props = __props;
            const timeWithinRange = (_, __, ___) => true;
            const ppNs = useNamespace("picker-panel");
            const dpNs = useNamespace("date-picker");
            const attrs = useAttrs();
            const slots = useSlots();
            const {
              t,
              lang
            } = useLocale();
            const pickerBase = inject("EP_PICKER_BASE");
            const popper = inject(TOOLTIP_INJECTION_KEY);
            const {
              shortcuts,
              disabledDate: disabledDate$1,
              cellClassName,
              defaultTime
            } = pickerBase.props;
            const defaultValue = toRef(pickerBase.props, "defaultValue");
            const currentViewRef = ref();
            const innerDate = ref((0, import_dayjs_min$4.default)().locale(lang.value));
            const isChangeToNow = ref(false);
            let isShortcut = false;
            const defaultTimeD = computed(() => {
              return (0, import_dayjs_min$4.default)(defaultTime).locale(lang.value);
            });
            const month = computed(() => {
              return innerDate.value.month();
            });
            const year = computed(() => {
              return innerDate.value.year();
            });
            const selectableRange = ref([]);
            const userInputDate = ref(null);
            const userInputTime = ref(null);
            const checkDateWithinRange = date$1 => {
              return selectableRange.value.length > 0 ? timeWithinRange(date$1, selectableRange.value, props.format || "HH:mm:ss") : true;
            };
            const formatEmit = emitDayjs => {
              if (defaultTime && !visibleTime.value && !isChangeToNow.value && !isShortcut) return defaultTimeD.value.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
              if (showTime.value) return emitDayjs.millisecond(0);
              return emitDayjs.startOf("day");
            };
            const emit = (value, ...args) => {
              if (!value) contextEmit("pick", value, ...args);else if (isArray(value)) contextEmit("pick", value.map(formatEmit), ...args);else contextEmit("pick", formatEmit(value), ...args);
              userInputDate.value = null;
              userInputTime.value = null;
              isChangeToNow.value = false;
              isShortcut = false;
            };
            const handleDatePick = (value, keepOpen) => {
              if (selectionMode.value === "date") {
                value = value;
                let newDate = props.parsedValue ? props.parsedValue.year(value.year()).month(value.month()).date(value.date()) : value;
                if (!checkDateWithinRange(newDate)) newDate = selectableRange.value[0][0].year(value.year()).month(value.month()).date(value.date());
                innerDate.value = newDate;
                emit(newDate, showTime.value || keepOpen);
              } else if (selectionMode.value === "week") emit(value.date);else if (selectionMode.value === "dates") emit(value, true);
            };
            const moveByMonth = forward => {
              const action = forward ? "add" : "subtract";
              innerDate.value = innerDate.value[action](1, "month");
              handlePanelChange("month");
            };
            const moveByYear = forward => {
              const currentDate = innerDate.value;
              const action = forward ? "add" : "subtract";
              innerDate.value = currentView.value === "year" ? currentDate[action](10, "year") : currentDate[action](1, "year");
              handlePanelChange("year");
            };
            const currentView = ref("date");
            const yearLabel = computed(() => {
              const yearTranslation = t("el.datepicker.year");
              if (currentView.value === "year") {
                const startYear = Math.floor(year.value / 10) * 10;
                if (yearTranslation) return `${startYear} ${yearTranslation} - ${startYear + 9} ${yearTranslation}`;
                return `${startYear} - ${startYear + 9}`;
              }
              return `${year.value} ${yearTranslation}`;
            });
            const handleShortcutClick = shortcut => {
              const shortcutValue = isFunction(shortcut.value) ? shortcut.value() : shortcut.value;
              if (shortcutValue) {
                isShortcut = true;
                emit((0, import_dayjs_min$4.default)(shortcutValue).locale(lang.value));
                return;
              }
              if (shortcut.onClick) shortcut.onClick({
                attrs,
                slots,
                emit: contextEmit
              });
            };
            const selectionMode = computed(() => {
              const {
                type
              } = props;
              if (["week", "month", "year", "dates"].includes(type)) return type;
              return "date";
            });
            const keyboardMode = computed(() => {
              return selectionMode.value === "date" ? currentView.value : selectionMode.value;
            });
            const hasShortcuts = computed(() => !!shortcuts.length);
            const handleMonthPick = async month2 => {
              innerDate.value = innerDate.value.startOf("month").month(month2);
              if (selectionMode.value === "month") emit(innerDate.value, false);else {
                currentView.value = "date";
                if (["month", "year", "date", "week"].includes(selectionMode.value)) {
                  emit(innerDate.value, true);
                  await nextTick();
                  handleFocusPicker();
                }
              }
              handlePanelChange("month");
            };
            const handleYearPick = async year2 => {
              if (selectionMode.value === "year") {
                innerDate.value = innerDate.value.startOf("year").year(year2);
                emit(innerDate.value, false);
              } else {
                innerDate.value = innerDate.value.year(year2);
                currentView.value = "month";
                if (["month", "year", "date", "week"].includes(selectionMode.value)) {
                  emit(innerDate.value, true);
                  await nextTick();
                  handleFocusPicker();
                }
              }
              handlePanelChange("year");
            };
            const showPicker = async view => {
              currentView.value = view;
              await nextTick();
              handleFocusPicker();
            };
            const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
            const footerVisible = computed(() => {
              return showTime.value || selectionMode.value === "dates";
            });
            const disabledConfirm = computed(() => {
              if (!disabledDate$1) return false;
              if (!props.parsedValue) return true;
              if (isArray(props.parsedValue)) return disabledDate$1(props.parsedValue[0].toDate());
              return disabledDate$1(props.parsedValue.toDate());
            });
            const onConfirm = () => {
              if (selectionMode.value === "dates") emit(props.parsedValue);else {
                let result = props.parsedValue;
                if (!result) {
                  const defaultTimeD2 = (0, import_dayjs_min$4.default)(defaultTime).locale(lang.value);
                  const defaultValueD = getDefaultValue$1();
                  result = defaultTimeD2.year(defaultValueD.year()).month(defaultValueD.month()).date(defaultValueD.date());
                }
                innerDate.value = result;
                emit(result);
              }
            };
            const disabledNow = computed(() => {
              if (!disabledDate$1) return false;
              return disabledDate$1((0, import_dayjs_min$4.default)().locale(lang.value).toDate());
            });
            const changeToNow = () => {
              const nowDate = (0, import_dayjs_min$4.default)().locale(lang.value).toDate();
              isChangeToNow.value = true;
              if ((!disabledDate$1 || !disabledDate$1(nowDate)) && checkDateWithinRange(nowDate)) {
                innerDate.value = (0, import_dayjs_min$4.default)().locale(lang.value);
                emit(innerDate.value);
              }
            };
            const timeFormat = computed(() => {
              return props.timeFormat || extractTimeFormat(props.format);
            });
            const dateFormat = computed(() => {
              return props.dateFormat || extractDateFormat(props.format);
            });
            const visibleTime = computed(() => {
              if (userInputTime.value) return userInputTime.value;
              if (!props.parsedValue && !defaultValue.value) return;
              return (props.parsedValue || innerDate.value).format(timeFormat.value);
            });
            const visibleDate = computed(() => {
              if (userInputDate.value) return userInputDate.value;
              if (!props.parsedValue && !defaultValue.value) return;
              return (props.parsedValue || innerDate.value).format(dateFormat.value);
            });
            const timePickerVisible = ref(false);
            const onTimePickerInputFocus = () => {
              timePickerVisible.value = true;
            };
            const handleTimePickClose = () => {
              timePickerVisible.value = false;
            };
            const getUnits = date$1 => {
              return {
                hour: date$1.hour(),
                minute: date$1.minute(),
                second: date$1.second(),
                year: date$1.year(),
                month: date$1.month(),
                date: date$1.date()
              };
            };
            const handleTimePick = (value, visible, first) => {
              const {
                hour,
                minute,
                second
              } = getUnits(value);
              innerDate.value = props.parsedValue ? props.parsedValue.hour(hour).minute(minute).second(second) : value;
              emit(innerDate.value, true);
              if (!first) timePickerVisible.value = visible;
            };
            const handleVisibleTimeChange = value => {
              const newDate = (0, import_dayjs_min$4.default)(value, timeFormat.value).locale(lang.value);
              if (newDate.isValid() && checkDateWithinRange(newDate)) {
                const {
                  year: year2,
                  month: month2,
                  date: date$1
                } = getUnits(innerDate.value);
                innerDate.value = newDate.year(year2).month(month2).date(date$1);
                userInputTime.value = null;
                timePickerVisible.value = false;
                emit(innerDate.value, true);
              }
            };
            const handleVisibleDateChange = value => {
              const newDate = (0, import_dayjs_min$4.default)(value, dateFormat.value).locale(lang.value);
              if (newDate.isValid()) {
                if (disabledDate$1 && disabledDate$1(newDate.toDate())) return;
                const {
                  hour,
                  minute,
                  second
                } = getUnits(innerDate.value);
                innerDate.value = newDate.hour(hour).minute(minute).second(second);
                userInputDate.value = null;
                emit(innerDate.value, true);
              }
            };
            const isValidValue = date$1 => {
              return import_dayjs_min$4.default.isDayjs(date$1) && date$1.isValid() && (disabledDate$1 ? !disabledDate$1(date$1.toDate()) : true);
            };
            const formatToString = value => {
              if (selectionMode.value === "dates") return value.map(_ => _.format(props.format));
              return value.format(props.format);
            };
            const parseUserInput = value => {
              return (0, import_dayjs_min$4.default)(value, props.format).locale(lang.value);
            };
            const getDefaultValue$1 = () => {
              const parseDate$1 = (0, import_dayjs_min$4.default)(defaultValue.value).locale(lang.value);
              if (!defaultValue.value) {
                const defaultTimeDValue = defaultTimeD.value;
                return (0, import_dayjs_min$4.default)().hour(defaultTimeDValue.hour()).minute(defaultTimeDValue.minute()).second(defaultTimeDValue.second()).locale(lang.value);
              }
              return parseDate$1;
            };
            const handleFocusPicker = async () => {
              var _a;
              if (["week", "month", "year", "date"].includes(selectionMode.value)) {
                (_a = currentViewRef.value) == null || _a.focus();
                if (selectionMode.value === "week") handleKeyControl(EVENT_CODE.down);
              }
            };
            const handleKeydownTable = event => {
              const {
                code
              } = event;
              if ([EVENT_CODE.up, EVENT_CODE.down, EVENT_CODE.left, EVENT_CODE.right, EVENT_CODE.home, EVENT_CODE.end, EVENT_CODE.pageUp, EVENT_CODE.pageDown].includes(code)) {
                handleKeyControl(code);
                event.stopPropagation();
                event.preventDefault();
              }
              if ([EVENT_CODE.enter, EVENT_CODE.space, EVENT_CODE.numpadEnter].includes(code) && userInputDate.value === null && userInputTime.value === null) {
                event.preventDefault();
                emit(innerDate.value, false);
              }
            };
            const handleKeyControl = code => {
              var _a;
              const {
                up,
                down,
                left,
                right,
                home,
                end,
                pageUp,
                pageDown
              } = EVENT_CODE;
              const mapping = {
                year: {
                  [up]: -4,
                  [down]: 4,
                  [left]: -1,
                  [right]: 1,
                  offset: (date$1, step) => date$1.setFullYear(date$1.getFullYear() + step)
                },
                month: {
                  [up]: -4,
                  [down]: 4,
                  [left]: -1,
                  [right]: 1,
                  offset: (date$1, step) => date$1.setMonth(date$1.getMonth() + step)
                },
                week: {
                  [up]: -1,
                  [down]: 1,
                  [left]: -1,
                  [right]: 1,
                  offset: (date$1, step) => date$1.setDate(date$1.getDate() + step * 7)
                },
                date: {
                  [up]: -7,
                  [down]: 7,
                  [left]: -1,
                  [right]: 1,
                  [home]: date$1 => -date$1.getDay(),
                  [end]: date$1 => -date$1.getDay() + 6,
                  [pageUp]: date$1 => -new Date(date$1.getFullYear(), date$1.getMonth(), 0).getDate(),
                  [pageDown]: date$1 => new Date(date$1.getFullYear(), date$1.getMonth() + 1, 0).getDate(),
                  offset: (date$1, step) => date$1.setDate(date$1.getDate() + step)
                }
              };
              const newDate = innerDate.value.toDate();
              while (Math.abs(innerDate.value.diff(newDate, "year", true)) < 1) {
                const map = mapping[keyboardMode.value];
                if (!map) return;
                map.offset(newDate, isFunction(map[code]) ? map[code](newDate) : (_a = map[code]) != null ? _a : 0);
                if (disabledDate$1 && disabledDate$1(newDate)) break;
                const result = (0, import_dayjs_min$4.default)(newDate).locale(lang.value);
                innerDate.value = result;
                contextEmit("pick", result, true);
                break;
              }
            };
            const handlePanelChange = mode => {
              contextEmit("panel-change", innerDate.value.toDate(), mode, currentView.value);
            };
            watch(() => selectionMode.value, val => {
              if (["month", "year"].includes(val)) {
                currentView.value = val;
                return;
              }
              currentView.value = "date";
            }, {
              immediate: true
            });
            watch(() => currentView.value, () => {
              popper?.updatePopper();
            });
            watch(() => defaultValue.value, val => {
              if (val) innerDate.value = getDefaultValue$1();
            }, {
              immediate: true
            });
            watch(() => props.parsedValue, val => {
              if (val) {
                if (selectionMode.value === "dates") return;
                if (Array.isArray(val)) return;
                innerDate.value = val;
              } else innerDate.value = getDefaultValue$1();
            }, {
              immediate: true
            });
            contextEmit("set-picker-option", ["isValidValue", isValidValue]);
            contextEmit("set-picker-option", ["formatToString", formatToString]);
            contextEmit("set-picker-option", ["parseUserInput", parseUserInput]);
            contextEmit("set-picker-option", ["handleFocusPicker", handleFocusPicker]);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([unref(ppNs).b(), unref(dpNs).b(), {
                  "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
                  "has-time": unref(showTime)
                }])
              }, [createBaseVNode("div", {
                class: normalizeClass(unref(ppNs).e("body-wrapper"))
              }, [renderSlot(_ctx.$slots, "sidebar", {
                class: normalizeClass(unref(ppNs).e("sidebar"))
              }), unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ppNs).e("sidebar"))
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
                return openBlock(), createElementBlock("button", {
                  key,
                  type: "button",
                  class: normalizeClass(unref(ppNs).e("shortcut")),
                  onClick: $event => handleShortcutClick(shortcut)
                }, toDisplayString(shortcut.text), 11, _hoisted_1$2);
              }), 128))], 2)) : createCommentVNode("v-if", true), createBaseVNode("div", {
                class: normalizeClass(unref(ppNs).e("body"))
              }, [unref(showTime) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(dpNs).e("time-header"))
              }, [createBaseVNode("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [createVNode(unref(ElInput), {
                placeholder: unref(t)("el.datepicker.selectDate"),
                "model-value": unref(visibleDate),
                size: "small",
                "validate-event": false,
                onInput: _cache[0] || (_cache[0] = val => userInputDate.value = val),
                onChange: handleVisibleDateChange
              }, null, 8, ["placeholder", "model-value"])], 2), withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [createVNode(unref(ElInput), {
                placeholder: unref(t)("el.datepicker.selectTime"),
                "model-value": unref(visibleTime),
                size: "small",
                "validate-event": false,
                onFocus: onTimePickerInputFocus,
                onInput: _cache[1] || (_cache[1] = val => userInputTime.value = val),
                onChange: handleVisibleTimeChange
              }, null, 8, ["placeholder", "model-value"]), createVNode(unref(TimePickPanel), {
                visible: timePickerVisible.value,
                format: unref(timeFormat),
                "parsed-value": innerDate.value,
                onPick: handleTimePick
              }, null, 8, ["visible", "format", "parsed-value"])], 2)), [[unref(ClickOutside), handleTimePickClose]])], 2)) : createCommentVNode("v-if", true), withDirectives(createBaseVNode("div", {
                class: normalizeClass([unref(dpNs).e("header"), (currentView.value === "year" || currentView.value === "month") && unref(dpNs).e("header--bordered")])
              }, [createBaseVNode("span", {
                class: normalizeClass(unref(dpNs).e("prev-btn"))
              }, [createBaseVNode("button", {
                type: "button",
                "aria-label": unref(t)(`el.datepicker.prevYear`),
                class: normalizeClass(["d-arrow-left", unref(ppNs).e("icon-btn")]),
                onClick: _cache[2] || (_cache[2] = $event => moveByYear(false))
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_left_default))]),
                _: 1
              })], 10, _hoisted_2$2), withDirectives(createBaseVNode("button", {
                type: "button",
                "aria-label": unref(t)(`el.datepicker.prevMonth`),
                class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                onClick: _cache[3] || (_cache[3] = $event => moveByMonth(false))
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(arrow_left_default))]),
                _: 1
              })], 10, _hoisted_3$2), [[vShow, currentView.value === "date"]])], 2), createBaseVNode("span", {
                role: "button",
                class: normalizeClass(unref(dpNs).e("header-label")),
                "aria-live": "polite",
                tabindex: "0",
                onKeydown: _cache[4] || (_cache[4] = withKeys($event => showPicker("year"), ["enter"])),
                onClick: _cache[5] || (_cache[5] = $event => showPicker("year"))
              }, toDisplayString(unref(yearLabel)), 35), withDirectives(createBaseVNode("span", {
                role: "button",
                "aria-live": "polite",
                tabindex: "0",
                class: normalizeClass([unref(dpNs).e("header-label"), {
                  active: currentView.value === "month"
                }]),
                onKeydown: _cache[6] || (_cache[6] = withKeys($event => showPicker("month"), ["enter"])),
                onClick: _cache[7] || (_cache[7] = $event => showPicker("month"))
              }, toDisplayString(unref(t)(`el.datepicker.month${unref(month) + 1}`)), 35), [[vShow, currentView.value === "date"]]), createBaseVNode("span", {
                class: normalizeClass(unref(dpNs).e("next-btn"))
              }, [withDirectives(createBaseVNode("button", {
                type: "button",
                "aria-label": unref(t)(`el.datepicker.nextMonth`),
                class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                onClick: _cache[8] || (_cache[8] = $event => moveByMonth(true))
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(arrow_right_default))]),
                _: 1
              })], 10, _hoisted_4$1), [[vShow, currentView.value === "date"]]), createBaseVNode("button", {
                type: "button",
                "aria-label": unref(t)(`el.datepicker.nextYear`),
                class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                onClick: _cache[9] || (_cache[9] = $event => moveByYear(true))
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_right_default))]),
                _: 1
              })], 10, _hoisted_5$1)], 2)], 2), [[vShow, currentView.value !== "time"]]), createBaseVNode("div", {
                class: normalizeClass(unref(ppNs).e("content")),
                onKeydown: handleKeydownTable
              }, [currentView.value === "date" ? (openBlock(), createBlock(DateTable, {
                key: 0,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                "selection-mode": unref(selectionMode),
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate$1),
                "cell-class-name": unref(cellClassName),
                onPick: handleDatePick
              }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : createCommentVNode("v-if", true), currentView.value === "year" ? (openBlock(), createBlock(YearTable, {
                key: 1,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                date: innerDate.value,
                "disabled-date": unref(disabledDate$1),
                "parsed-value": _ctx.parsedValue,
                onPick: handleYearPick
              }, null, 8, ["date", "disabled-date", "parsed-value"])) : createCommentVNode("v-if", true), currentView.value === "month" ? (openBlock(), createBlock(MonthTable, {
                key: 2,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate$1),
                onPick: handleMonthPick
              }, null, 8, ["date", "parsed-value", "disabled-date"])) : createCommentVNode("v-if", true)], 34)], 2)], 2), withDirectives(createBaseVNode("div", {
                class: normalizeClass(unref(ppNs).e("footer"))
              }, [withDirectives(createVNode(unref(ElButton), {
                text: "",
                size: "small",
                class: normalizeClass(unref(ppNs).e("link-btn")),
                disabled: unref(disabledNow),
                onClick: changeToNow
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("el.datepicker.now")), 1)]),
                _: 1
              }, 8, ["class", "disabled"]), [[vShow, unref(selectionMode) !== "dates"]]), createVNode(unref(ElButton), {
                plain: "",
                size: "small",
                class: normalizeClass(unref(ppNs).e("link-btn")),
                disabled: unref(disabledConfirm),
                onClick: onConfirm
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("el.datepicker.confirm")), 1)]),
                _: 1
              }, 8, ["class", "disabled"])], 2), [[vShow, unref(footerVisible) && currentView.value === "date"]])], 2);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/props/panel-date-range.mjs
        panelDateRangeProps = buildProps({
          ...panelSharedProps,
          ...panelRangeSharedProps
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/composables/use-shortcut.mjs
        import_dayjs_min$3 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        init_shared_esm_bundler();
        useShortcut = lang => {
          const {
            emit
          } = getCurrentInstance();
          const attrs = useAttrs();
          const slots = useSlots();
          const handleShortcutClick = shortcut => {
            const shortcutValues = isFunction(shortcut.value) ? shortcut.value() : shortcut.value;
            if (shortcutValues) {
              emit("pick", [(0, import_dayjs_min$3.default)(shortcutValues[0]).locale(lang.value), (0, import_dayjs_min$3.default)(shortcutValues[1]).locale(lang.value)]);
              return;
            }
            if (shortcut.onClick) shortcut.onClick({
              attrs,
              slots,
              emit
            });
          };
          return handleShortcutClick;
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/composables/use-range-picker.mjs
        init_shared_esm_bundler();
        useRangePicker = (props, {
          defaultValue,
          leftDate,
          rightDate,
          unit: unit$2,
          onParsedValueChanged
        }) => {
          const {
            emit
          } = getCurrentInstance();
          const {
            pickerNs
          } = inject(ROOT_PICKER_INJECTION_KEY);
          const drpNs = useNamespace("date-range-picker");
          const {
            t,
            lang
          } = useLocale();
          const handleShortcutClick = useShortcut(lang);
          const minDate = ref();
          const maxDate = ref();
          const rangeState = ref({
            endDate: null,
            selecting: false
          });
          const handleChangeRange = val => {
            rangeState.value = val;
          };
          const handleRangeConfirm = (visible = false) => {
            const _minDate = unref(minDate);
            const _maxDate = unref(maxDate);
            if (isValidRange([_minDate, _maxDate])) emit("pick", [_minDate, _maxDate], visible);
          };
          const onSelect = selecting => {
            rangeState.value.selecting = selecting;
            if (!selecting) rangeState.value.endDate = null;
          };
          const restoreDefault = () => {
            const [start, end] = getDefaultValue(unref(defaultValue), {
              lang: unref(lang),
              unit: unit$2,
              unlinkPanels: props.unlinkPanels
            });
            minDate.value = void 0;
            maxDate.value = void 0;
            leftDate.value = start;
            rightDate.value = end;
          };
          watch(defaultValue, val => {
            if (val) restoreDefault();
          }, {
            immediate: true
          });
          watch(() => props.parsedValue, parsedValue$1 => {
            if (isArray(parsedValue$1) && parsedValue$1.length === 2) {
              const [start, end] = parsedValue$1;
              minDate.value = start;
              leftDate.value = start;
              maxDate.value = end;
              onParsedValueChanged(unref(minDate), unref(maxDate));
            } else restoreDefault();
          }, {
            immediate: true
          });
          return {
            minDate,
            maxDate,
            rangeState,
            lang,
            ppNs: pickerNs,
            drpNs,
            handleChangeRange,
            handleRangeConfirm,
            handleShortcutClick,
            onSelect,
            t
          };
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/date-picker-com/panel-date-range.mjs
        import_dayjs_min$2 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        init_shared_esm_bundler();
        _hoisted_1$1 = ["onClick"];
        _hoisted_2$1 = ["aria-label"];
        _hoisted_3$1 = ["aria-label"];
        _hoisted_4 = ["disabled", "aria-label"];
        _hoisted_5 = ["disabled", "aria-label"];
        _hoisted_6 = ["disabled", "aria-label"];
        _hoisted_7 = ["disabled", "aria-label"];
        _hoisted_8 = ["aria-label"];
        _hoisted_9 = ["aria-label"];
        unit$1 = "month";
        DateRangePickPanel = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          __name: "panel-date-range",
          props: panelDateRangeProps,
          emits: ["pick", "set-picker-option", "calendar-change", "panel-change"],
          setup(__props, {
            emit
          }) {
            const props = __props;
            const pickerBase = inject("EP_PICKER_BASE");
            const {
              disabledDate: disabledDate$1,
              cellClassName,
              format,
              defaultTime,
              clearable
            } = pickerBase.props;
            const shortcuts = toRef(pickerBase.props, "shortcuts");
            const defaultValue = toRef(pickerBase.props, "defaultValue");
            const {
              lang
            } = useLocale();
            const leftDate = ref((0, import_dayjs_min$2.default)().locale(lang.value));
            const rightDate = ref((0, import_dayjs_min$2.default)().locale(lang.value).add(1, unit$1));
            const {
              minDate,
              maxDate,
              rangeState,
              ppNs,
              drpNs,
              handleChangeRange,
              handleRangeConfirm,
              handleShortcutClick,
              onSelect,
              t
            } = useRangePicker(props, {
              defaultValue,
              leftDate,
              rightDate,
              unit: unit$1,
              onParsedValueChanged
            });
            const dateUserInput = ref({
              min: null,
              max: null
            });
            const timeUserInput = ref({
              min: null,
              max: null
            });
            const leftLabel = computed(() => {
              return `${leftDate.value.year()} ${t("el.datepicker.year")} ${t(`el.datepicker.month${leftDate.value.month() + 1}`)}`;
            });
            const rightLabel = computed(() => {
              return `${rightDate.value.year()} ${t("el.datepicker.year")} ${t(`el.datepicker.month${rightDate.value.month() + 1}`)}`;
            });
            const leftYear = computed(() => {
              return leftDate.value.year();
            });
            const leftMonth = computed(() => {
              return leftDate.value.month();
            });
            const rightYear = computed(() => {
              return rightDate.value.year();
            });
            const rightMonth = computed(() => {
              return rightDate.value.month();
            });
            const hasShortcuts = computed(() => !!shortcuts.value.length);
            const minVisibleDate = computed(() => {
              if (dateUserInput.value.min !== null) return dateUserInput.value.min;
              if (minDate.value) return minDate.value.format(dateFormat.value);
              return "";
            });
            const maxVisibleDate = computed(() => {
              if (dateUserInput.value.max !== null) return dateUserInput.value.max;
              if (maxDate.value || minDate.value) return (maxDate.value || minDate.value).format(dateFormat.value);
              return "";
            });
            const minVisibleTime = computed(() => {
              if (timeUserInput.value.min !== null) return timeUserInput.value.min;
              if (minDate.value) return minDate.value.format(timeFormat.value);
              return "";
            });
            const maxVisibleTime = computed(() => {
              if (timeUserInput.value.max !== null) return timeUserInput.value.max;
              if (maxDate.value || minDate.value) return (maxDate.value || minDate.value).format(timeFormat.value);
              return "";
            });
            const timeFormat = computed(() => {
              return props.timeFormat || extractTimeFormat(format);
            });
            const dateFormat = computed(() => {
              return props.dateFormat || extractDateFormat(format);
            });
            const isValidValue = date$1 => {
              return isValidRange(date$1) && (disabledDate$1 ? !disabledDate$1(date$1[0].toDate()) && !disabledDate$1(date$1[1].toDate()) : true);
            };
            const leftPrevYear = () => {
              leftDate.value = leftDate.value.subtract(1, "year");
              if (!props.unlinkPanels) rightDate.value = leftDate.value.add(1, "month");
              handlePanelChange("year");
            };
            const leftPrevMonth = () => {
              leftDate.value = leftDate.value.subtract(1, "month");
              if (!props.unlinkPanels) rightDate.value = leftDate.value.add(1, "month");
              handlePanelChange("month");
            };
            const rightNextYear = () => {
              if (!props.unlinkPanels) {
                leftDate.value = leftDate.value.add(1, "year");
                rightDate.value = leftDate.value.add(1, "month");
              } else rightDate.value = rightDate.value.add(1, "year");
              handlePanelChange("year");
            };
            const rightNextMonth = () => {
              if (!props.unlinkPanels) {
                leftDate.value = leftDate.value.add(1, "month");
                rightDate.value = leftDate.value.add(1, "month");
              } else rightDate.value = rightDate.value.add(1, "month");
              handlePanelChange("month");
            };
            const leftNextYear = () => {
              leftDate.value = leftDate.value.add(1, "year");
              handlePanelChange("year");
            };
            const leftNextMonth = () => {
              leftDate.value = leftDate.value.add(1, "month");
              handlePanelChange("month");
            };
            const rightPrevYear = () => {
              rightDate.value = rightDate.value.subtract(1, "year");
              handlePanelChange("year");
            };
            const rightPrevMonth = () => {
              rightDate.value = rightDate.value.subtract(1, "month");
              handlePanelChange("month");
            };
            const handlePanelChange = mode => {
              emit("panel-change", [leftDate.value.toDate(), rightDate.value.toDate()], mode);
            };
            const enableMonthArrow = computed(() => {
              const nextMonth = (leftMonth.value + 1) % 12;
              const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0;
              return props.unlinkPanels && new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value);
            });
            const enableYearArrow = computed(() => {
              return props.unlinkPanels && rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12;
            });
            const btnDisabled = computed(() => {
              return !(minDate.value && maxDate.value && !rangeState.value.selecting && isValidRange([minDate.value, maxDate.value]));
            });
            const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
            const formatEmit = (emitDayjs, index) => {
              if (!emitDayjs) return;
              if (defaultTime) return (0, import_dayjs_min$2.default)(defaultTime[index] || defaultTime).locale(lang.value).year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
              return emitDayjs;
            };
            const handleRangePick = (val, close = true) => {
              const min_ = val.minDate;
              const max_ = val.maxDate;
              const minDate_ = formatEmit(min_, 0);
              const maxDate_ = formatEmit(max_, 1);
              if (maxDate.value === maxDate_ && minDate.value === minDate_) return;
              emit("calendar-change", [min_.toDate(), max_ && max_.toDate()]);
              maxDate.value = maxDate_;
              minDate.value = minDate_;
              if (!close || showTime.value) return;
              handleRangeConfirm();
            };
            const minTimePickerVisible = ref(false);
            const maxTimePickerVisible = ref(false);
            const handleMinTimeClose = () => {
              minTimePickerVisible.value = false;
            };
            const handleMaxTimeClose = () => {
              maxTimePickerVisible.value = false;
            };
            const handleDateInput = (value, type) => {
              dateUserInput.value[type] = value;
              const parsedValueD = (0, import_dayjs_min$2.default)(value, dateFormat.value).locale(lang.value);
              if (parsedValueD.isValid()) {
                if (disabledDate$1 && disabledDate$1(parsedValueD.toDate())) return;
                if (type === "min") {
                  leftDate.value = parsedValueD;
                  minDate.value = (minDate.value || leftDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
                  if (!props.unlinkPanels && (!maxDate.value || maxDate.value.isBefore(minDate.value))) {
                    rightDate.value = parsedValueD.add(1, "month");
                    maxDate.value = minDate.value.add(1, "month");
                  }
                } else {
                  rightDate.value = parsedValueD;
                  maxDate.value = (maxDate.value || rightDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
                  if (!props.unlinkPanels && (!minDate.value || minDate.value.isAfter(maxDate.value))) {
                    leftDate.value = parsedValueD.subtract(1, "month");
                    minDate.value = maxDate.value.subtract(1, "month");
                  }
                }
              }
            };
            const handleDateChange = (_, type) => {
              dateUserInput.value[type] = null;
            };
            const handleTimeInput = (value, type) => {
              timeUserInput.value[type] = value;
              const parsedValueD = (0, import_dayjs_min$2.default)(value, timeFormat.value).locale(lang.value);
              if (parsedValueD.isValid()) if (type === "min") {
                minTimePickerVisible.value = true;
                minDate.value = (minDate.value || leftDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
                if (!maxDate.value || maxDate.value.isBefore(minDate.value)) maxDate.value = minDate.value;
              } else {
                maxTimePickerVisible.value = true;
                maxDate.value = (maxDate.value || rightDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
                rightDate.value = maxDate.value;
                if (maxDate.value && maxDate.value.isBefore(minDate.value)) minDate.value = maxDate.value;
              }
            };
            const handleTimeChange = (value, type) => {
              timeUserInput.value[type] = null;
              if (type === "min") {
                leftDate.value = minDate.value;
                minTimePickerVisible.value = false;
              } else {
                rightDate.value = maxDate.value;
                maxTimePickerVisible.value = false;
              }
            };
            const handleMinTimePick = (value, visible, first) => {
              if (timeUserInput.value.min) return;
              if (value) {
                leftDate.value = value;
                minDate.value = (minDate.value || leftDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
              }
              if (!first) minTimePickerVisible.value = visible;
              if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
                maxDate.value = minDate.value;
                rightDate.value = value;
              }
            };
            const handleMaxTimePick = (value, visible, first) => {
              if (timeUserInput.value.max) return;
              if (value) {
                rightDate.value = value;
                maxDate.value = (maxDate.value || rightDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
              }
              if (!first) maxTimePickerVisible.value = visible;
              if (maxDate.value && maxDate.value.isBefore(minDate.value)) minDate.value = maxDate.value;
            };
            const handleClear = () => {
              leftDate.value = getDefaultValue(unref(defaultValue), {
                lang: unref(lang),
                unit: "month",
                unlinkPanels: props.unlinkPanels
              })[0];
              rightDate.value = leftDate.value.add(1, "month");
              emit("pick", null);
            };
            const formatToString = value => {
              return isArray(value) ? value.map(_ => _.format(format)) : value.format(format);
            };
            const parseUserInput = value => {
              return isArray(value) ? value.map(_ => (0, import_dayjs_min$2.default)(_, format).locale(lang.value)) : (0, import_dayjs_min$2.default)(value, format).locale(lang.value);
            };
            function onParsedValueChanged(minDate2, maxDate2) {
              if (props.unlinkPanels && maxDate2) {
                const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
                const minDateMonth = (minDate2 == null ? void 0 : minDate2.month()) || 0;
                const maxDateYear = maxDate2.year();
                const maxDateMonth = maxDate2.month();
                rightDate.value = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? maxDate2.add(1, unit$1) : maxDate2;
              } else {
                rightDate.value = leftDate.value.add(1, unit$1);
                if (maxDate2) rightDate.value = rightDate.value.hour(maxDate2.hour()).minute(maxDate2.minute()).second(maxDate2.second());
              }
            }
            emit("set-picker-option", ["isValidValue", isValidValue]);
            emit("set-picker-option", ["parseUserInput", parseUserInput]);
            emit("set-picker-option", ["formatToString", formatToString]);
            emit("set-picker-option", ["handleClear", handleClear]);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([unref(ppNs).b(), unref(drpNs).b(), {
                  "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
                  "has-time": unref(showTime)
                }])
              }, [createBaseVNode("div", {
                class: normalizeClass(unref(ppNs).e("body-wrapper"))
              }, [renderSlot(_ctx.$slots, "sidebar", {
                class: normalizeClass(unref(ppNs).e("sidebar"))
              }), unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ppNs).e("sidebar"))
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
                return openBlock(), createElementBlock("button", {
                  key,
                  type: "button",
                  class: normalizeClass(unref(ppNs).e("shortcut")),
                  onClick: $event => unref(handleShortcutClick)(shortcut)
                }, toDisplayString(shortcut.text), 11, _hoisted_1$1);
              }), 128))], 2)) : createCommentVNode("v-if", true), createBaseVNode("div", {
                class: normalizeClass(unref(ppNs).e("body"))
              }, [unref(showTime) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(drpNs).e("time-header"))
              }, [createBaseVNode("span", {
                class: normalizeClass(unref(drpNs).e("editors-wrap"))
              }, [createBaseVNode("span", {
                class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
              }, [createVNode(unref(ElInput), {
                size: "small",
                disabled: unref(rangeState).selecting,
                placeholder: unref(t)("el.datepicker.startDate"),
                class: normalizeClass(unref(drpNs).e("editor")),
                "model-value": unref(minVisibleDate),
                "validate-event": false,
                onInput: _cache[0] || (_cache[0] = val => handleDateInput(val, "min")),
                onChange: _cache[1] || (_cache[1] = val => handleDateChange(val, "min"))
              }, null, 8, ["disabled", "placeholder", "class", "model-value"])], 2), withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
              }, [createVNode(unref(ElInput), {
                size: "small",
                class: normalizeClass(unref(drpNs).e("editor")),
                disabled: unref(rangeState).selecting,
                placeholder: unref(t)("el.datepicker.startTime"),
                "model-value": unref(minVisibleTime),
                "validate-event": false,
                onFocus: _cache[2] || (_cache[2] = $event => minTimePickerVisible.value = true),
                onInput: _cache[3] || (_cache[3] = val => handleTimeInput(val, "min")),
                onChange: _cache[4] || (_cache[4] = val => handleTimeChange(val, "min"))
              }, null, 8, ["class", "disabled", "placeholder", "model-value"]), createVNode(unref(TimePickPanel), {
                visible: minTimePickerVisible.value,
                format: unref(timeFormat),
                "datetime-role": "start",
                "parsed-value": leftDate.value,
                onPick: handleMinTimePick
              }, null, 8, ["visible", "format", "parsed-value"])], 2)), [[unref(ClickOutside), handleMinTimeClose]])], 2), createBaseVNode("span", null, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(arrow_right_default))]),
                _: 1
              })]), createBaseVNode("span", {
                class: normalizeClass([unref(drpNs).e("editors-wrap"), "is-right"])
              }, [createBaseVNode("span", {
                class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
              }, [createVNode(unref(ElInput), {
                size: "small",
                class: normalizeClass(unref(drpNs).e("editor")),
                disabled: unref(rangeState).selecting,
                placeholder: unref(t)("el.datepicker.endDate"),
                "model-value": unref(maxVisibleDate),
                readonly: !unref(minDate),
                "validate-event": false,
                onInput: _cache[5] || (_cache[5] = val => handleDateInput(val, "max")),
                onChange: _cache[6] || (_cache[6] = val => handleDateChange(val, "max"))
              }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])], 2), withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
              }, [createVNode(unref(ElInput), {
                size: "small",
                class: normalizeClass(unref(drpNs).e("editor")),
                disabled: unref(rangeState).selecting,
                placeholder: unref(t)("el.datepicker.endTime"),
                "model-value": unref(maxVisibleTime),
                readonly: !unref(minDate),
                "validate-event": false,
                onFocus: _cache[7] || (_cache[7] = $event => unref(minDate) && (maxTimePickerVisible.value = true)),
                onInput: _cache[8] || (_cache[8] = val => handleTimeInput(val, "max")),
                onChange: _cache[9] || (_cache[9] = val => handleTimeChange(val, "max"))
              }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]), createVNode(unref(TimePickPanel), {
                "datetime-role": "end",
                visible: maxTimePickerVisible.value,
                format: unref(timeFormat),
                "parsed-value": rightDate.value,
                onPick: handleMaxTimePick
              }, null, 8, ["visible", "format", "parsed-value"])], 2)), [[unref(ClickOutside), handleMaxTimeClose]])], 2)], 2)) : createCommentVNode("v-if", true), createBaseVNode("div", {
                class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
              }, [createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                "aria-label": unref(t)(`el.datepicker.prevYear`),
                onClick: leftPrevYear
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_left_default))]),
                _: 1
              })], 10, _hoisted_2$1), createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                "aria-label": unref(t)(`el.datepicker.prevMonth`),
                onClick: leftPrevMonth
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(arrow_left_default))]),
                _: 1
              })], 10, _hoisted_3$1), _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(enableYearArrow),
                class: normalizeClass([[unref(ppNs).e("icon-btn"), {
                  "is-disabled": !unref(enableYearArrow)
                }], "d-arrow-right"]),
                "aria-label": unref(t)(`el.datepicker.nextYear`),
                onClick: leftNextYear
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_right_default))]),
                _: 1
              })], 10, _hoisted_4)) : createCommentVNode("v-if", true), _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                disabled: !unref(enableMonthArrow),
                class: normalizeClass([[unref(ppNs).e("icon-btn"), {
                  "is-disabled": !unref(enableMonthArrow)
                }], "arrow-right"]),
                "aria-label": unref(t)(`el.datepicker.nextMonth`),
                onClick: leftNextMonth
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(arrow_right_default))]),
                _: 1
              })], 10, _hoisted_5)) : createCommentVNode("v-if", true), createBaseVNode("div", null, toDisplayString(unref(leftLabel)), 1)], 2), createVNode(DateTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate$1),
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])], 2), createBaseVNode("div", {
                class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
              }, [createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [_ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(enableYearArrow),
                class: normalizeClass([[unref(ppNs).e("icon-btn"), {
                  "is-disabled": !unref(enableYearArrow)
                }], "d-arrow-left"]),
                "aria-label": unref(t)(`el.datepicker.prevYear`),
                onClick: rightPrevYear
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_left_default))]),
                _: 1
              })], 10, _hoisted_6)) : createCommentVNode("v-if", true), _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                disabled: !unref(enableMonthArrow),
                class: normalizeClass([[unref(ppNs).e("icon-btn"), {
                  "is-disabled": !unref(enableMonthArrow)
                }], "arrow-left"]),
                "aria-label": unref(t)(`el.datepicker.prevMonth`),
                onClick: rightPrevMonth
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(arrow_left_default))]),
                _: 1
              })], 10, _hoisted_7)) : createCommentVNode("v-if", true), createBaseVNode("button", {
                type: "button",
                "aria-label": unref(t)(`el.datepicker.nextYear`),
                class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                onClick: rightNextYear
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_right_default))]),
                _: 1
              })], 10, _hoisted_8), createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                "aria-label": unref(t)(`el.datepicker.nextMonth`),
                onClick: rightNextMonth
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(arrow_right_default))]),
                _: 1
              })], 10, _hoisted_9), createBaseVNode("div", null, toDisplayString(unref(rightLabel)), 1)], 2), createVNode(DateTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate$1),
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])], 2)], 2)], 2), unref(showTime) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ppNs).e("footer"))
              }, [unref(clearable) ? (openBlock(), createBlock(unref(ElButton), {
                key: 0,
                text: "",
                size: "small",
                class: normalizeClass(unref(ppNs).e("link-btn")),
                onClick: handleClear
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("el.datepicker.clear")), 1)]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true), createVNode(unref(ElButton), {
                plain: "",
                size: "small",
                class: normalizeClass(unref(ppNs).e("link-btn")),
                disabled: unref(btnDisabled),
                onClick: _cache[10] || (_cache[10] = $event => unref(handleRangeConfirm)(false))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("el.datepicker.confirm")), 1)]),
                _: 1
              }, 8, ["class", "disabled"])], 2)) : createCommentVNode("v-if", true)], 2);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/props/panel-month-range.mjs
        panelMonthRangeProps = buildProps({
          ...panelRangeSharedProps
        });
        panelMonthRangeEmits = ["pick", "set-picker-option", "calendar-change"]; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/composables/use-month-range-header.mjs
        useMonthRangeHeader = ({
          unlinkPanels,
          leftDate,
          rightDate
        }) => {
          const {
            t
          } = useLocale();
          const leftPrevYear = () => {
            leftDate.value = leftDate.value.subtract(1, "year");
            if (!unlinkPanels.value) rightDate.value = rightDate.value.subtract(1, "year");
          };
          const rightNextYear = () => {
            if (!unlinkPanels.value) leftDate.value = leftDate.value.add(1, "year");
            rightDate.value = rightDate.value.add(1, "year");
          };
          const leftNextYear = () => {
            leftDate.value = leftDate.value.add(1, "year");
          };
          const rightPrevYear = () => {
            rightDate.value = rightDate.value.subtract(1, "year");
          };
          return {
            leftPrevYear,
            rightNextYear,
            leftNextYear,
            rightPrevYear,
            leftLabel: computed(() => {
              return `${leftDate.value.year()} ${t("el.datepicker.year")}`;
            }),
            rightLabel: computed(() => {
              return `${rightDate.value.year()} ${t("el.datepicker.year")}`;
            }),
            leftYear: computed(() => {
              return leftDate.value.year();
            }),
            rightYear: computed(() => {
              return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year();
            })
          };
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/date-picker-com/panel-month-range.mjs
        import_dayjs_min$1 = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        _hoisted_1 = ["onClick"];
        _hoisted_2 = ["disabled"];
        _hoisted_3 = ["disabled"];
        unit = "year";
        MonthRangePickPanel = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "DatePickerMonthRange"
          }),
          props: panelMonthRangeProps,
          emits: panelMonthRangeEmits,
          setup(__props, {
            emit
          }) {
            const props = __props;
            const {
              lang
            } = useLocale();
            const pickerBase = inject("EP_PICKER_BASE");
            const {
              shortcuts,
              disabledDate: disabledDate$1,
              format
            } = pickerBase.props;
            const defaultValue = toRef(pickerBase.props, "defaultValue");
            const leftDate = ref((0, import_dayjs_min$1.default)().locale(lang.value));
            const rightDate = ref((0, import_dayjs_min$1.default)().locale(lang.value).add(1, unit));
            const {
              minDate,
              maxDate,
              rangeState,
              ppNs,
              drpNs,
              handleChangeRange,
              handleRangeConfirm,
              handleShortcutClick,
              onSelect
            } = useRangePicker(props, {
              defaultValue,
              leftDate,
              rightDate,
              unit,
              onParsedValueChanged
            });
            const hasShortcuts = computed(() => !!shortcuts.length);
            const {
              leftPrevYear,
              rightNextYear,
              leftNextYear,
              rightPrevYear,
              leftLabel,
              rightLabel,
              leftYear,
              rightYear
            } = useMonthRangeHeader({
              unlinkPanels: toRef(props, "unlinkPanels"),
              leftDate,
              rightDate
            });
            const enableYearArrow = computed(() => {
              return props.unlinkPanels && rightYear.value > leftYear.value + 1;
            });
            const handleRangePick = (val, close = true) => {
              const minDate_ = val.minDate;
              const maxDate_ = val.maxDate;
              if (maxDate.value === maxDate_ && minDate.value === minDate_) return;
              emit("calendar-change", [minDate_.toDate(), maxDate_ && maxDate_.toDate()]);
              maxDate.value = maxDate_;
              minDate.value = minDate_;
              if (!close) return;
              handleRangeConfirm();
            };
            const formatToString = days => {
              return days.map(day => day.format(format));
            };
            function onParsedValueChanged(minDate2, maxDate2) {
              if (props.unlinkPanels && maxDate2) rightDate.value = ((minDate2 == null ? void 0 : minDate2.year()) || 0) === maxDate2.year() ? maxDate2.add(1, unit) : maxDate2;else rightDate.value = leftDate.value.add(1, unit);
            }
            emit("set-picker-option", ["formatToString", formatToString]);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([unref(ppNs).b(), unref(drpNs).b(), {
                  "has-sidebar": Boolean(_ctx.$slots.sidebar) || unref(hasShortcuts)
                }])
              }, [createBaseVNode("div", {
                class: normalizeClass(unref(ppNs).e("body-wrapper"))
              }, [renderSlot(_ctx.$slots, "sidebar", {
                class: normalizeClass(unref(ppNs).e("sidebar"))
              }), unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ppNs).e("sidebar"))
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
                return openBlock(), createElementBlock("button", {
                  key,
                  type: "button",
                  class: normalizeClass(unref(ppNs).e("shortcut")),
                  onClick: $event => unref(handleShortcutClick)(shortcut)
                }, toDisplayString(shortcut.text), 11, _hoisted_1);
              }), 128))], 2)) : createCommentVNode("v-if", true), createBaseVNode("div", {
                class: normalizeClass(unref(ppNs).e("body"))
              }, [createBaseVNode("div", {
                class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
              }, [createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                onClick: _cache[0] || (_cache[0] = (...args) => unref(leftPrevYear) && unref(leftPrevYear)(...args))
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_left_default))]),
                _: 1
              })], 2), _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(enableYearArrow),
                class: normalizeClass([[unref(ppNs).e("icon-btn"), {
                  [unref(ppNs).is("disabled")]: !unref(enableYearArrow)
                }], "d-arrow-right"]),
                onClick: _cache[1] || (_cache[1] = (...args) => unref(leftNextYear) && unref(leftNextYear)(...args))
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_right_default))]),
                _: 1
              })], 10, _hoisted_2)) : createCommentVNode("v-if", true), createBaseVNode("div", null, toDisplayString(unref(leftLabel)), 1)], 2), createVNode(MonthTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate$1),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])], 2), createBaseVNode("div", {
                class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
              }, [createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [_ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(enableYearArrow),
                class: normalizeClass([[unref(ppNs).e("icon-btn"), {
                  "is-disabled": !unref(enableYearArrow)
                }], "d-arrow-left"]),
                onClick: _cache[2] || (_cache[2] = (...args) => unref(rightPrevYear) && unref(rightPrevYear)(...args))
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_left_default))]),
                _: 1
              })], 10, _hoisted_3)) : createCommentVNode("v-if", true), createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                onClick: _cache[3] || (_cache[3] = (...args) => unref(rightNextYear) && unref(rightNextYear)(...args))
              }, [createVNode(unref(ElIcon), null, {
                default: withCtx(() => [createVNode(unref(d_arrow_right_default))]),
                _: 1
              })], 2), createBaseVNode("div", null, toDisplayString(unref(rightLabel)), 1)], 2), createVNode(MonthTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate$1),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])], 2)], 2)], 2)], 2);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/panel-utils.mjs
        getPanel = function (type) {
          switch (type) {
            case "daterange":
            case "datetimerange":
              return DateRangePickPanel;
            case "monthrange":
              return MonthRangePickPanel;
            default:
              return DatePickPanel;
          }
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/src/date-picker.mjs
        import_dayjs_min = /* @__PURE__ */__toESM(require_dayjs_min(), 1);
        import_customParseFormat = /* @__PURE__ */__toESM(require_customParseFormat(), 1);
        import_advancedFormat = /* @__PURE__ */__toESM(require_advancedFormat(), 1);
        import_localeData = /* @__PURE__ */__toESM(require_localeData(), 1);
        import_weekOfYear = /* @__PURE__ */__toESM(require_weekOfYear(), 1);
        import_weekYear = /* @__PURE__ */__toESM(require_weekYear(), 1);
        import_dayOfYear = /* @__PURE__ */__toESM(require_dayOfYear(), 1);
        import_isSameOrAfter = /* @__PURE__ */__toESM(require_isSameOrAfter(), 1);
        import_isSameOrBefore = /* @__PURE__ */__toESM(require_isSameOrBefore(), 1);
        import_dayjs_min.default.extend(import_localeData.default);
        import_dayjs_min.default.extend(import_advancedFormat.default);
        import_dayjs_min.default.extend(import_customParseFormat.default);
        import_dayjs_min.default.extend(import_weekOfYear.default);
        import_dayjs_min.default.extend(import_weekYear.default);
        import_dayjs_min.default.extend(import_dayOfYear.default);
        import_dayjs_min.default.extend(import_isSameOrAfter.default);
        import_dayjs_min.default.extend(import_isSameOrBefore.default);
        DatePicker = defineComponent({
          name: "ElDatePicker",
          install: null,
          props: datePickerProps,
          emits: ["update:modelValue"],
          setup(props, {
            expose,
            emit,
            slots
          }) {
            const ns = useNamespace("picker-panel");
            provide("ElPopperOptions", reactive(toRef(props, "popperOptions")));
            provide(ROOT_PICKER_INJECTION_KEY, {
              slots,
              pickerNs: ns
            });
            const commonPicker = ref();
            expose({
              focus: (focusStartInput = true) => {
                var _a;
                (_a = commonPicker.value) == null || _a.focus(focusStartInput);
              },
              handleOpen: () => {
                var _a;
                (_a = commonPicker.value) == null || _a.handleOpen();
              },
              handleClose: () => {
                var _a;
                (_a = commonPicker.value) == null || _a.handleClose();
              }
            });
            const onModelValueUpdated = val => {
              emit("update:modelValue", val);
            };
            return () => {
              var _a;
              const format = (_a = props.format) != null ? _a : DEFAULT_FORMATS_DATEPICKER[props.type] || "YYYY-MM-DD";
              const Component = getPanel(props.type);
              return createVNode(CommonPicker, mergeProps(props, {
                "format": format,
                "type": props.type,
                "ref": commonPicker,
                "onUpdate:modelValue": onModelValueUpdated
              }), {
                default: scopedProps => createVNode(Component, scopedProps, null),
                "range-separator": slots["range-separator"]
              });
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/date-picker/index.mjs
        _DatePicker = DatePicker;
        _DatePicker.install = app => {
          app.component(_DatePicker.name, _DatePicker);
        };
        _export("t", ElDatePicker = _DatePicker); //#endregion
      }
    };
  });
})();
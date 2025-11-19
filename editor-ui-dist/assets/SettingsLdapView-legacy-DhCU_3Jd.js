;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./table-legacy-CJnsmGne.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./sso.store-legacy-Bk24_rEU.js", "./vue-legacy-Cj7LJTPA.js"], function (_export, _context) {
    "use strict";

    var __toESM, __commonJS, computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, normalizeClass, withCtx, openBlock, createTextVNode, resolveDirective, createBaseVNode, withDirectives, useI18n, N8nActionBox_default, N8nButton_default, N8nInfoTip_default, N8nHeading_default, N8nFormInputs_default, createFormEventBus, __plugin_vue_export_helper_default, ElTableColumn, ElTable, useMessage, useSettingsStore, useDocumentTitle, convertToDisplayDate, capitalizeFirstLetter, useToast, MODAL_CONFIRM, usePageRedirectionHelper, useSSOStore, require_vue, __vite_style__, require_humanize_duration, require_v3_infinite_loading_umd, import_humanize_duration, import_v3_infinite_loading_umd, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, SettingsLdapView_vue_vue_type_script_setup_true_lang_default, container, syncTable, header, enableFeatureContainer, sectionHeader, settingsForm, docsInfoTip, SettingsLdapView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsLdapView_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
        __commonJS = _chunkLegacy001Js.t;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nFormInputs_default = _srcLegacy007Js.R;
        createFormEventBus = _srcLegacy007Js.wt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_tableLegacy00jJs) {
        ElTableColumn = _tableLegacy00jJs.n;
        ElTable = _tableLegacy00jJs.t;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        convertToDisplayDate = _useTelemetryLegacy00FJs.fi;
      }, function (_useToastLegacy00HJs) {
        capitalizeFirstLetter = _useToastLegacy00HJs.r;
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_ssoStoreLegacy02ZJs) {
        useSSOStore = _ssoStoreLegacy02ZJs.n;
      }, function (_vueLegacy03hJs) {
        require_vue = _vueLegacy03hJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_y6w94_123 > * {\n  margin-bottom: var(--spacing--2xl);\n}\n._syncTable_y6w94_127 {\n  margin-bottom: var(--spacing--2xl);\n}\n._header_y6w94_131 {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n._header_y6w94_131 *:first-child {\n  flex-grow: 1;\n}\n._enableFeatureContainer_y6w94_140 {\n  margin-bottom: var(--spacing--xl);\n}\n._enableFeatureContainer_y6w94_140 > span {\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--bold);\n  padding: 0;\n}\n._enableFeatureContainer_y6w94_140 > * {\n  padding: 0.5em;\n}\n._sectionHeader_y6w94_152 {\n  margin-bottom: var(--spacing--sm);\n}\n._settingsForm_y6w94_156 .form-text {\n  margin-top: var(--spacing--xl);\n}\n._docsInfoTip_y6w94_160, ._docsInfoTip_y6w94_160 > div {\n  margin-bottom: var(--spacing--xl);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region ../../../node_modules/.pnpm/humanize-duration@3.27.3/node_modules/humanize-duration/humanize-duration.js
        require_humanize_duration = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/humanize-duration@3.27.3/node_modules/humanize-duration/humanize-duration.js": (exports, module) => {
            (function () {
              var greek = {
                y: function (c) {
                  return c === 1 ? "χρόνος" : "χρόνια";
                },
                mo: function (c) {
                  return c === 1 ? "μήνας" : "μήνες";
                },
                w: function (c) {
                  return c === 1 ? "εβδομάδα" : "εβδομάδες";
                },
                d: function (c) {
                  return c === 1 ? "μέρα" : "μέρες";
                },
                h: function (c) {
                  return c === 1 ? "ώρα" : "ώρες";
                },
                m: function (c) {
                  return c === 1 ? "λεπτό" : "λεπτά";
                },
                s: function (c) {
                  return c === 1 ? "δευτερόλεπτο" : "δευτερόλεπτα";
                },
                ms: function (c) {
                  return (c === 1 ? "χιλιοστό" : "χιλιοστά") + " του δευτερολέπτου";
                },
                decimal: ","
              };
              var ARABIC_DIGITS = ["۰", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
              var LANGUAGES = {
                af: {
                  y: "jaar",
                  mo: function (c) {
                    return "maand" + (c === 1 ? "" : "e");
                  },
                  w: function (c) {
                    return c === 1 ? "week" : "weke";
                  },
                  d: function (c) {
                    return c === 1 ? "dag" : "dae";
                  },
                  h: function (c) {
                    return c === 1 ? "uur" : "ure";
                  },
                  m: function (c) {
                    return c === 1 ? "minuut" : "minute";
                  },
                  s: function (c) {
                    return "sekonde" + (c === 1 ? "" : "s");
                  },
                  ms: function (c) {
                    return "millisekonde" + (c === 1 ? "" : "s");
                  },
                  decimal: ","
                },
                ar: {
                  y: function (c) {
                    return ["سنة", "سنتان", "سنوات"][getArabicForm(c)];
                  },
                  mo: function (c) {
                    return ["شهر", "شهران", "أشهر"][getArabicForm(c)];
                  },
                  w: function (c) {
                    return ["أسبوع", "أسبوعين", "أسابيع"][getArabicForm(c)];
                  },
                  d: function (c) {
                    return ["يوم", "يومين", "أيام"][getArabicForm(c)];
                  },
                  h: function (c) {
                    return ["ساعة", "ساعتين", "ساعات"][getArabicForm(c)];
                  },
                  m: function (c) {
                    return ["دقيقة", "دقيقتان", "دقائق"][getArabicForm(c)];
                  },
                  s: function (c) {
                    return ["ثانية", "ثانيتان", "ثواني"][getArabicForm(c)];
                  },
                  ms: function (c) {
                    return ["جزء من الثانية", "جزآن من الثانية", "أجزاء من الثانية"][getArabicForm(c)];
                  },
                  decimal: ",",
                  delimiter: " و ",
                  _formatCount: function (count, decimal) {
                    var replacements = assign(ARABIC_DIGITS, {
                      ".": decimal
                    });
                    var characters = count.toString().split("");
                    for (var i = 0; i < characters.length; i++) {
                      var character = characters[i];
                      if (has(replacements, character)) characters[i] = replacements[character];
                    }
                    return characters.join("");
                  }
                },
                bg: {
                  y: function (c) {
                    return ["години", "година", "години"][getSlavicForm(c)];
                  },
                  mo: function (c) {
                    return ["месеца", "месец", "месеца"][getSlavicForm(c)];
                  },
                  w: function (c) {
                    return ["седмици", "седмица", "седмици"][getSlavicForm(c)];
                  },
                  d: function (c) {
                    return ["дни", "ден", "дни"][getSlavicForm(c)];
                  },
                  h: function (c) {
                    return ["часа", "час", "часа"][getSlavicForm(c)];
                  },
                  m: function (c) {
                    return ["минути", "минута", "минути"][getSlavicForm(c)];
                  },
                  s: function (c) {
                    return ["секунди", "секунда", "секунди"][getSlavicForm(c)];
                  },
                  ms: function (c) {
                    return ["милисекунди", "милисекунда", "милисекунди"][getSlavicForm(c)];
                  },
                  decimal: ","
                },
                bn: {
                  y: "বছর",
                  mo: "মাস",
                  w: "সপ্তাহ",
                  d: "দিন",
                  h: "ঘন্টা",
                  m: "মিনিট",
                  s: "সেকেন্ড",
                  ms: "মিলিসেকেন্ড"
                },
                ca: {
                  y: function (c) {
                    return "any" + (c === 1 ? "" : "s");
                  },
                  mo: function (c) {
                    return "mes" + (c === 1 ? "" : "os");
                  },
                  w: function (c) {
                    return "setman" + (c === 1 ? "a" : "es");
                  },
                  d: function (c) {
                    return "di" + (c === 1 ? "a" : "es");
                  },
                  h: function (c) {
                    return "hor" + (c === 1 ? "a" : "es");
                  },
                  m: function (c) {
                    return "minut" + (c === 1 ? "" : "s");
                  },
                  s: function (c) {
                    return "segon" + (c === 1 ? "" : "s");
                  },
                  ms: function (c) {
                    return "milisegon" + (c === 1 ? "" : "s");
                  },
                  decimal: ","
                },
                cs: {
                  y: function (c) {
                    return ["rok", "roku", "roky", "let"][getCzechOrSlovakForm(c)];
                  },
                  mo: function (c) {
                    return ["měsíc", "měsíce", "měsíce", "měsíců"][getCzechOrSlovakForm(c)];
                  },
                  w: function (c) {
                    return ["týden", "týdne", "týdny", "týdnů"][getCzechOrSlovakForm(c)];
                  },
                  d: function (c) {
                    return ["den", "dne", "dny", "dní"][getCzechOrSlovakForm(c)];
                  },
                  h: function (c) {
                    return ["hodina", "hodiny", "hodiny", "hodin"][getCzechOrSlovakForm(c)];
                  },
                  m: function (c) {
                    return ["minuta", "minuty", "minuty", "minut"][getCzechOrSlovakForm(c)];
                  },
                  s: function (c) {
                    return ["sekunda", "sekundy", "sekundy", "sekund"][getCzechOrSlovakForm(c)];
                  },
                  ms: function (c) {
                    return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getCzechOrSlovakForm(c)];
                  },
                  decimal: ","
                },
                cy: {
                  y: "flwyddyn",
                  mo: "mis",
                  w: "wythnos",
                  d: "diwrnod",
                  h: "awr",
                  m: "munud",
                  s: "eiliad",
                  ms: "milieiliad"
                },
                da: {
                  y: "år",
                  mo: function (c) {
                    return "måned" + (c === 1 ? "" : "er");
                  },
                  w: function (c) {
                    return "uge" + (c === 1 ? "" : "r");
                  },
                  d: function (c) {
                    return "dag" + (c === 1 ? "" : "e");
                  },
                  h: function (c) {
                    return "time" + (c === 1 ? "" : "r");
                  },
                  m: function (c) {
                    return "minut" + (c === 1 ? "" : "ter");
                  },
                  s: function (c) {
                    return "sekund" + (c === 1 ? "" : "er");
                  },
                  ms: function (c) {
                    return "millisekund" + (c === 1 ? "" : "er");
                  },
                  decimal: ","
                },
                de: {
                  y: function (c) {
                    return "Jahr" + (c === 1 ? "" : "e");
                  },
                  mo: function (c) {
                    return "Monat" + (c === 1 ? "" : "e");
                  },
                  w: function (c) {
                    return "Woche" + (c === 1 ? "" : "n");
                  },
                  d: function (c) {
                    return "Tag" + (c === 1 ? "" : "e");
                  },
                  h: function (c) {
                    return "Stunde" + (c === 1 ? "" : "n");
                  },
                  m: function (c) {
                    return "Minute" + (c === 1 ? "" : "n");
                  },
                  s: function (c) {
                    return "Sekunde" + (c === 1 ? "" : "n");
                  },
                  ms: function (c) {
                    return "Millisekunde" + (c === 1 ? "" : "n");
                  },
                  decimal: ","
                },
                el: greek,
                en: {
                  y: function (c) {
                    return "year" + (c === 1 ? "" : "s");
                  },
                  mo: function (c) {
                    return "month" + (c === 1 ? "" : "s");
                  },
                  w: function (c) {
                    return "week" + (c === 1 ? "" : "s");
                  },
                  d: function (c) {
                    return "day" + (c === 1 ? "" : "s");
                  },
                  h: function (c) {
                    return "hour" + (c === 1 ? "" : "s");
                  },
                  m: function (c) {
                    return "minute" + (c === 1 ? "" : "s");
                  },
                  s: function (c) {
                    return "second" + (c === 1 ? "" : "s");
                  },
                  ms: function (c) {
                    return "millisecond" + (c === 1 ? "" : "s");
                  },
                  decimal: "."
                },
                eo: {
                  y: function (c) {
                    return "jaro" + (c === 1 ? "" : "j");
                  },
                  mo: function (c) {
                    return "monato" + (c === 1 ? "" : "j");
                  },
                  w: function (c) {
                    return "semajno" + (c === 1 ? "" : "j");
                  },
                  d: function (c) {
                    return "tago" + (c === 1 ? "" : "j");
                  },
                  h: function (c) {
                    return "horo" + (c === 1 ? "" : "j");
                  },
                  m: function (c) {
                    return "minuto" + (c === 1 ? "" : "j");
                  },
                  s: function (c) {
                    return "sekundo" + (c === 1 ? "" : "j");
                  },
                  ms: function (c) {
                    return "milisekundo" + (c === 1 ? "" : "j");
                  },
                  decimal: ","
                },
                es: {
                  y: function (c) {
                    return "año" + (c === 1 ? "" : "s");
                  },
                  mo: function (c) {
                    return "mes" + (c === 1 ? "" : "es");
                  },
                  w: function (c) {
                    return "semana" + (c === 1 ? "" : "s");
                  },
                  d: function (c) {
                    return "día" + (c === 1 ? "" : "s");
                  },
                  h: function (c) {
                    return "hora" + (c === 1 ? "" : "s");
                  },
                  m: function (c) {
                    return "minuto" + (c === 1 ? "" : "s");
                  },
                  s: function (c) {
                    return "segundo" + (c === 1 ? "" : "s");
                  },
                  ms: function (c) {
                    return "milisegundo" + (c === 1 ? "" : "s");
                  },
                  decimal: ","
                },
                et: {
                  y: function (c) {
                    return "aasta" + (c === 1 ? "" : "t");
                  },
                  mo: function (c) {
                    return "kuu" + (c === 1 ? "" : "d");
                  },
                  w: function (c) {
                    return "nädal" + (c === 1 ? "" : "at");
                  },
                  d: function (c) {
                    return "päev" + (c === 1 ? "" : "a");
                  },
                  h: function (c) {
                    return "tund" + (c === 1 ? "" : "i");
                  },
                  m: function (c) {
                    return "minut" + (c === 1 ? "" : "it");
                  },
                  s: function (c) {
                    return "sekund" + (c === 1 ? "" : "it");
                  },
                  ms: function (c) {
                    return "millisekund" + (c === 1 ? "" : "it");
                  },
                  decimal: ","
                },
                eu: {
                  y: "urte",
                  mo: "hilabete",
                  w: "aste",
                  d: "egun",
                  h: "ordu",
                  m: "minutu",
                  s: "segundo",
                  ms: "milisegundo",
                  decimal: ","
                },
                fa: {
                  y: "سال",
                  mo: "ماه",
                  w: "هفته",
                  d: "روز",
                  h: "ساعت",
                  m: "دقیقه",
                  s: "ثانیه",
                  ms: "میلی ثانیه",
                  decimal: "."
                },
                fi: {
                  y: function (c) {
                    return c === 1 ? "vuosi" : "vuotta";
                  },
                  mo: function (c) {
                    return c === 1 ? "kuukausi" : "kuukautta";
                  },
                  w: function (c) {
                    return "viikko" + (c === 1 ? "" : "a");
                  },
                  d: function (c) {
                    return "päivä" + (c === 1 ? "" : "ä");
                  },
                  h: function (c) {
                    return "tunti" + (c === 1 ? "" : "a");
                  },
                  m: function (c) {
                    return "minuutti" + (c === 1 ? "" : "a");
                  },
                  s: function (c) {
                    return "sekunti" + (c === 1 ? "" : "a");
                  },
                  ms: function (c) {
                    return "millisekunti" + (c === 1 ? "" : "a");
                  },
                  decimal: ","
                },
                fo: {
                  y: "ár",
                  mo: function (c) {
                    return c === 1 ? "mánaður" : "mánaðir";
                  },
                  w: function (c) {
                    return c === 1 ? "vika" : "vikur";
                  },
                  d: function (c) {
                    return c === 1 ? "dagur" : "dagar";
                  },
                  h: function (c) {
                    return c === 1 ? "tími" : "tímar";
                  },
                  m: function (c) {
                    return c === 1 ? "minuttur" : "minuttir";
                  },
                  s: "sekund",
                  ms: "millisekund",
                  decimal: ","
                },
                fr: {
                  y: function (c) {
                    return "an" + (c >= 2 ? "s" : "");
                  },
                  mo: "mois",
                  w: function (c) {
                    return "semaine" + (c >= 2 ? "s" : "");
                  },
                  d: function (c) {
                    return "jour" + (c >= 2 ? "s" : "");
                  },
                  h: function (c) {
                    return "heure" + (c >= 2 ? "s" : "");
                  },
                  m: function (c) {
                    return "minute" + (c >= 2 ? "s" : "");
                  },
                  s: function (c) {
                    return "seconde" + (c >= 2 ? "s" : "");
                  },
                  ms: function (c) {
                    return "milliseconde" + (c >= 2 ? "s" : "");
                  },
                  decimal: ","
                },
                gr: greek,
                he: {
                  y: function (c) {
                    return c === 1 ? "שנה" : "שנים";
                  },
                  mo: function (c) {
                    return c === 1 ? "חודש" : "חודשים";
                  },
                  w: function (c) {
                    return c === 1 ? "שבוע" : "שבועות";
                  },
                  d: function (c) {
                    return c === 1 ? "יום" : "ימים";
                  },
                  h: function (c) {
                    return c === 1 ? "שעה" : "שעות";
                  },
                  m: function (c) {
                    return c === 1 ? "דקה" : "דקות";
                  },
                  s: function (c) {
                    return c === 1 ? "שניה" : "שניות";
                  },
                  ms: function (c) {
                    return c === 1 ? "מילישנייה" : "מילישניות";
                  },
                  decimal: "."
                },
                hr: {
                  y: function (c) {
                    if (c % 10 === 2 || c % 10 === 3 || c % 10 === 4) return "godine";
                    return "godina";
                  },
                  mo: function (c) {
                    if (c === 1) return "mjesec";else if (c === 2 || c === 3 || c === 4) return "mjeseca";
                    return "mjeseci";
                  },
                  w: function (c) {
                    if (c % 10 === 1 && c !== 11) return "tjedan";
                    return "tjedna";
                  },
                  d: function (c) {
                    return c === 1 ? "dan" : "dana";
                  },
                  h: function (c) {
                    if (c === 1) return "sat";else if (c === 2 || c === 3 || c === 4) return "sata";
                    return "sati";
                  },
                  m: function (c) {
                    var mod10 = c % 10;
                    if ((mod10 === 2 || mod10 === 3 || mod10 === 4) && (c < 10 || c > 14)) return "minute";
                    return "minuta";
                  },
                  s: function (c) {
                    var mod10 = c % 10;
                    if (mod10 === 5 || Math.floor(c) === c && c >= 10 && c <= 19) return "sekundi";else if (mod10 === 1) return "sekunda";else if (mod10 === 2 || mod10 === 3 || mod10 === 4) return "sekunde";
                    return "sekundi";
                  },
                  ms: function (c) {
                    if (c === 1) return "milisekunda";else if (c % 10 === 2 || c % 10 === 3 || c % 10 === 4) return "milisekunde";
                    return "milisekundi";
                  },
                  decimal: ","
                },
                hi: {
                  y: "साल",
                  mo: function (c) {
                    return c === 1 ? "महीना" : "महीने";
                  },
                  w: function (c) {
                    return c === 1 ? "हफ़्ता" : "हफ्ते";
                  },
                  d: "दिन",
                  h: function (c) {
                    return c === 1 ? "घंटा" : "घंटे";
                  },
                  m: "मिनट",
                  s: "सेकंड",
                  ms: "मिलीसेकंड",
                  decimal: "."
                },
                hu: {
                  y: "év",
                  mo: "hónap",
                  w: "hét",
                  d: "nap",
                  h: "óra",
                  m: "perc",
                  s: "másodperc",
                  ms: "ezredmásodperc",
                  decimal: ","
                },
                id: {
                  y: "tahun",
                  mo: "bulan",
                  w: "minggu",
                  d: "hari",
                  h: "jam",
                  m: "menit",
                  s: "detik",
                  ms: "milidetik",
                  decimal: "."
                },
                is: {
                  y: "ár",
                  mo: function (c) {
                    return "mánuð" + (c === 1 ? "ur" : "ir");
                  },
                  w: function (c) {
                    return "vik" + (c === 1 ? "a" : "ur");
                  },
                  d: function (c) {
                    return "dag" + (c === 1 ? "ur" : "ar");
                  },
                  h: function (c) {
                    return "klukkutím" + (c === 1 ? "i" : "ar");
                  },
                  m: function (c) {
                    return "mínút" + (c === 1 ? "a" : "ur");
                  },
                  s: function (c) {
                    return "sekúnd" + (c === 1 ? "a" : "ur");
                  },
                  ms: function (c) {
                    return "millisekúnd" + (c === 1 ? "a" : "ur");
                  },
                  decimal: "."
                },
                it: {
                  y: function (c) {
                    return "ann" + (c === 1 ? "o" : "i");
                  },
                  mo: function (c) {
                    return "mes" + (c === 1 ? "e" : "i");
                  },
                  w: function (c) {
                    return "settiman" + (c === 1 ? "a" : "e");
                  },
                  d: function (c) {
                    return "giorn" + (c === 1 ? "o" : "i");
                  },
                  h: function (c) {
                    return "or" + (c === 1 ? "a" : "e");
                  },
                  m: function (c) {
                    return "minut" + (c === 1 ? "o" : "i");
                  },
                  s: function (c) {
                    return "second" + (c === 1 ? "o" : "i");
                  },
                  ms: function (c) {
                    return "millisecond" + (c === 1 ? "o" : "i");
                  },
                  decimal: ","
                },
                ja: {
                  y: "年",
                  mo: "ヶ月",
                  w: "週",
                  d: "日",
                  h: "時間",
                  m: "分",
                  s: "秒",
                  ms: "ミリ秒",
                  decimal: "."
                },
                km: {
                  y: "ឆ្នាំ",
                  mo: "ខែ",
                  w: "សប្តាហ៍",
                  d: "ថ្ងៃ",
                  h: "ម៉ោង",
                  m: "នាទី",
                  s: "វិនាទី",
                  ms: "មិល្លីវិនាទី"
                },
                kn: {
                  y: function (c) {
                    return c === 1 ? "ವರ್ಷ" : "ವರ್ಷಗಳು";
                  },
                  mo: function (c) {
                    return c === 1 ? "ತಿಂಗಳು" : "ತಿಂಗಳುಗಳು";
                  },
                  w: function (c) {
                    return c === 1 ? "ವಾರ" : "ವಾರಗಳು";
                  },
                  d: function (c) {
                    return c === 1 ? "ದಿನ" : "ದಿನಗಳು";
                  },
                  h: function (c) {
                    return c === 1 ? "ಗಂಟೆ" : "ಗಂಟೆಗಳು";
                  },
                  m: function (c) {
                    return c === 1 ? "ನಿಮಿಷ" : "ನಿಮಿಷಗಳು";
                  },
                  s: function (c) {
                    return c === 1 ? "ಸೆಕೆಂಡ್" : "ಸೆಕೆಂಡುಗಳು";
                  },
                  ms: function (c) {
                    return c === 1 ? "ಮಿಲಿಸೆಕೆಂಡ್" : "ಮಿಲಿಸೆಕೆಂಡುಗಳು";
                  }
                },
                ko: {
                  y: "년",
                  mo: "개월",
                  w: "주일",
                  d: "일",
                  h: "시간",
                  m: "분",
                  s: "초",
                  ms: "밀리 초",
                  decimal: "."
                },
                ku: {
                  y: "sal",
                  mo: "meh",
                  w: "hefte",
                  d: "roj",
                  h: "seet",
                  m: "deqe",
                  s: "saniye",
                  ms: "mîlîçirk",
                  decimal: ","
                },
                lo: {
                  y: "ປີ",
                  mo: "ເດືອນ",
                  w: "ອາທິດ",
                  d: "ມື້",
                  h: "ຊົ່ວໂມງ",
                  m: "ນາທີ",
                  s: "ວິນາທີ",
                  ms: "ມິນລິວິນາທີ",
                  decimal: ","
                },
                lt: {
                  y: function (c) {
                    return c % 10 === 0 || c % 100 >= 10 && c % 100 <= 20 ? "metų" : "metai";
                  },
                  mo: function (c) {
                    return ["mėnuo", "mėnesiai", "mėnesių"][getLithuanianForm(c)];
                  },
                  w: function (c) {
                    return ["savaitė", "savaitės", "savaičių"][getLithuanianForm(c)];
                  },
                  d: function (c) {
                    return ["diena", "dienos", "dienų"][getLithuanianForm(c)];
                  },
                  h: function (c) {
                    return ["valanda", "valandos", "valandų"][getLithuanianForm(c)];
                  },
                  m: function (c) {
                    return ["minutė", "minutės", "minučių"][getLithuanianForm(c)];
                  },
                  s: function (c) {
                    return ["sekundė", "sekundės", "sekundžių"][getLithuanianForm(c)];
                  },
                  ms: function (c) {
                    return ["milisekundė", "milisekundės", "milisekundžių"][getLithuanianForm(c)];
                  },
                  decimal: ","
                },
                lv: {
                  y: function (c) {
                    return getLatvianForm(c) ? "gads" : "gadi";
                  },
                  mo: function (c) {
                    return getLatvianForm(c) ? "mēnesis" : "mēneši";
                  },
                  w: function (c) {
                    return getLatvianForm(c) ? "nedēļa" : "nedēļas";
                  },
                  d: function (c) {
                    return getLatvianForm(c) ? "diena" : "dienas";
                  },
                  h: function (c) {
                    return getLatvianForm(c) ? "stunda" : "stundas";
                  },
                  m: function (c) {
                    return getLatvianForm(c) ? "minūte" : "minūtes";
                  },
                  s: function (c) {
                    return getLatvianForm(c) ? "sekunde" : "sekundes";
                  },
                  ms: function (c) {
                    return getLatvianForm(c) ? "milisekunde" : "milisekundes";
                  },
                  decimal: ","
                },
                mk: {
                  y: function (c) {
                    return c === 1 ? "година" : "години";
                  },
                  mo: function (c) {
                    return c === 1 ? "месец" : "месеци";
                  },
                  w: function (c) {
                    return c === 1 ? "недела" : "недели";
                  },
                  d: function (c) {
                    return c === 1 ? "ден" : "дена";
                  },
                  h: function (c) {
                    return c === 1 ? "час" : "часа";
                  },
                  m: function (c) {
                    return c === 1 ? "минута" : "минути";
                  },
                  s: function (c) {
                    return c === 1 ? "секунда" : "секунди";
                  },
                  ms: function (c) {
                    return c === 1 ? "милисекунда" : "милисекунди";
                  },
                  decimal: ","
                },
                mr: {
                  y: function (c) {
                    return c === 1 ? "वर्ष" : "वर्षे";
                  },
                  mo: function (c) {
                    return c === 1 ? "महिना" : "महिने";
                  },
                  w: function (c) {
                    return c === 1 ? "आठवडा" : "आठवडे";
                  },
                  d: "दिवस",
                  h: "तास",
                  m: function (c) {
                    return c === 1 ? "मिनिट" : "मिनिटे";
                  },
                  s: "सेकंद",
                  ms: "मिलिसेकंद"
                },
                ms: {
                  y: "tahun",
                  mo: "bulan",
                  w: "minggu",
                  d: "hari",
                  h: "jam",
                  m: "minit",
                  s: "saat",
                  ms: "milisaat",
                  decimal: "."
                },
                nl: {
                  y: "jaar",
                  mo: function (c) {
                    return c === 1 ? "maand" : "maanden";
                  },
                  w: function (c) {
                    return c === 1 ? "week" : "weken";
                  },
                  d: function (c) {
                    return c === 1 ? "dag" : "dagen";
                  },
                  h: "uur",
                  m: function (c) {
                    return c === 1 ? "minuut" : "minuten";
                  },
                  s: function (c) {
                    return c === 1 ? "seconde" : "seconden";
                  },
                  ms: function (c) {
                    return c === 1 ? "milliseconde" : "milliseconden";
                  },
                  decimal: ","
                },
                no: {
                  y: "år",
                  mo: function (c) {
                    return "måned" + (c === 1 ? "" : "er");
                  },
                  w: function (c) {
                    return "uke" + (c === 1 ? "" : "r");
                  },
                  d: function (c) {
                    return "dag" + (c === 1 ? "" : "er");
                  },
                  h: function (c) {
                    return "time" + (c === 1 ? "" : "r");
                  },
                  m: function (c) {
                    return "minutt" + (c === 1 ? "" : "er");
                  },
                  s: function (c) {
                    return "sekund" + (c === 1 ? "" : "er");
                  },
                  ms: function (c) {
                    return "millisekund" + (c === 1 ? "" : "er");
                  },
                  decimal: ","
                },
                pl: {
                  y: function (c) {
                    return ["rok", "roku", "lata", "lat"][getPolishForm(c)];
                  },
                  mo: function (c) {
                    return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][getPolishForm(c)];
                  },
                  w: function (c) {
                    return ["tydzień", "tygodnia", "tygodnie", "tygodni"][getPolishForm(c)];
                  },
                  d: function (c) {
                    return ["dzień", "dnia", "dni", "dni"][getPolishForm(c)];
                  },
                  h: function (c) {
                    return ["godzina", "godziny", "godziny", "godzin"][getPolishForm(c)];
                  },
                  m: function (c) {
                    return ["minuta", "minuty", "minuty", "minut"][getPolishForm(c)];
                  },
                  s: function (c) {
                    return ["sekunda", "sekundy", "sekundy", "sekund"][getPolishForm(c)];
                  },
                  ms: function (c) {
                    return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getPolishForm(c)];
                  },
                  decimal: ","
                },
                pt: {
                  y: function (c) {
                    return "ano" + (c === 1 ? "" : "s");
                  },
                  mo: function (c) {
                    return c === 1 ? "mês" : "meses";
                  },
                  w: function (c) {
                    return "semana" + (c === 1 ? "" : "s");
                  },
                  d: function (c) {
                    return "dia" + (c === 1 ? "" : "s");
                  },
                  h: function (c) {
                    return "hora" + (c === 1 ? "" : "s");
                  },
                  m: function (c) {
                    return "minuto" + (c === 1 ? "" : "s");
                  },
                  s: function (c) {
                    return "segundo" + (c === 1 ? "" : "s");
                  },
                  ms: function (c) {
                    return "milissegundo" + (c === 1 ? "" : "s");
                  },
                  decimal: ","
                },
                ro: {
                  y: function (c) {
                    return c === 1 ? "an" : "ani";
                  },
                  mo: function (c) {
                    return c === 1 ? "lună" : "luni";
                  },
                  w: function (c) {
                    return c === 1 ? "săptămână" : "săptămâni";
                  },
                  d: function (c) {
                    return c === 1 ? "zi" : "zile";
                  },
                  h: function (c) {
                    return c === 1 ? "oră" : "ore";
                  },
                  m: function (c) {
                    return c === 1 ? "minut" : "minute";
                  },
                  s: function (c) {
                    return c === 1 ? "secundă" : "secunde";
                  },
                  ms: function (c) {
                    return c === 1 ? "milisecundă" : "milisecunde";
                  },
                  decimal: ","
                },
                ru: {
                  y: function (c) {
                    return ["лет", "год", "года"][getSlavicForm(c)];
                  },
                  mo: function (c) {
                    return ["месяцев", "месяц", "месяца"][getSlavicForm(c)];
                  },
                  w: function (c) {
                    return ["недель", "неделя", "недели"][getSlavicForm(c)];
                  },
                  d: function (c) {
                    return ["дней", "день", "дня"][getSlavicForm(c)];
                  },
                  h: function (c) {
                    return ["часов", "час", "часа"][getSlavicForm(c)];
                  },
                  m: function (c) {
                    return ["минут", "минута", "минуты"][getSlavicForm(c)];
                  },
                  s: function (c) {
                    return ["секунд", "секунда", "секунды"][getSlavicForm(c)];
                  },
                  ms: function (c) {
                    return ["миллисекунд", "миллисекунда", "миллисекунды"][getSlavicForm(c)];
                  },
                  decimal: ","
                },
                sq: {
                  y: function (c) {
                    return c === 1 ? "vit" : "vjet";
                  },
                  mo: "muaj",
                  w: "javë",
                  d: "ditë",
                  h: "orë",
                  m: function (c) {
                    return "minut" + (c === 1 ? "ë" : "a");
                  },
                  s: function (c) {
                    return "sekond" + (c === 1 ? "ë" : "a");
                  },
                  ms: function (c) {
                    return "milisekond" + (c === 1 ? "ë" : "a");
                  },
                  decimal: ","
                },
                sr: {
                  y: function (c) {
                    return ["години", "година", "године"][getSlavicForm(c)];
                  },
                  mo: function (c) {
                    return ["месеци", "месец", "месеца"][getSlavicForm(c)];
                  },
                  w: function (c) {
                    return ["недељи", "недеља", "недеље"][getSlavicForm(c)];
                  },
                  d: function (c) {
                    return ["дани", "дан", "дана"][getSlavicForm(c)];
                  },
                  h: function (c) {
                    return ["сати", "сат", "сата"][getSlavicForm(c)];
                  },
                  m: function (c) {
                    return ["минута", "минут", "минута"][getSlavicForm(c)];
                  },
                  s: function (c) {
                    return ["секунди", "секунда", "секунде"][getSlavicForm(c)];
                  },
                  ms: function (c) {
                    return ["милисекунди", "милисекунда", "милисекунде"][getSlavicForm(c)];
                  },
                  decimal: ","
                },
                ta: {
                  y: function (c) {
                    return c === 1 ? "வருடம்" : "ஆண்டுகள்";
                  },
                  mo: function (c) {
                    return c === 1 ? "மாதம்" : "மாதங்கள்";
                  },
                  w: function (c) {
                    return c === 1 ? "வாரம்" : "வாரங்கள்";
                  },
                  d: function (c) {
                    return c === 1 ? "நாள்" : "நாட்கள்";
                  },
                  h: function (c) {
                    return c === 1 ? "மணி" : "மணிநேரம்";
                  },
                  m: function (c) {
                    return "நிமிட" + (c === 1 ? "ம்" : "ங்கள்");
                  },
                  s: function (c) {
                    return "வினாடி" + (c === 1 ? "" : "கள்");
                  },
                  ms: function (c) {
                    return "மில்லி விநாடி" + (c === 1 ? "" : "கள்");
                  }
                },
                te: {
                  y: function (c) {
                    return "సంవత్స" + (c === 1 ? "రం" : "రాల");
                  },
                  mo: function (c) {
                    return "నెల" + (c === 1 ? "" : "ల");
                  },
                  w: function (c) {
                    return c === 1 ? "వారం" : "వారాలు";
                  },
                  d: function (c) {
                    return "రోజు" + (c === 1 ? "" : "లు");
                  },
                  h: function (c) {
                    return "గంట" + (c === 1 ? "" : "లు");
                  },
                  m: function (c) {
                    return c === 1 ? "నిమిషం" : "నిమిషాలు";
                  },
                  s: function (c) {
                    return c === 1 ? "సెకను" : "సెకన్లు";
                  },
                  ms: function (c) {
                    return c === 1 ? "మిల్లీసెకన్" : "మిల్లీసెకన్లు";
                  }
                },
                uk: {
                  y: function (c) {
                    return ["років", "рік", "роки"][getSlavicForm(c)];
                  },
                  mo: function (c) {
                    return ["місяців", "місяць", "місяці"][getSlavicForm(c)];
                  },
                  w: function (c) {
                    return ["тижнів", "тиждень", "тижні"][getSlavicForm(c)];
                  },
                  d: function (c) {
                    return ["днів", "день", "дні"][getSlavicForm(c)];
                  },
                  h: function (c) {
                    return ["годин", "година", "години"][getSlavicForm(c)];
                  },
                  m: function (c) {
                    return ["хвилин", "хвилина", "хвилини"][getSlavicForm(c)];
                  },
                  s: function (c) {
                    return ["секунд", "секунда", "секунди"][getSlavicForm(c)];
                  },
                  ms: function (c) {
                    return ["мілісекунд", "мілісекунда", "мілісекунди"][getSlavicForm(c)];
                  },
                  decimal: ","
                },
                ur: {
                  y: "سال",
                  mo: function (c) {
                    return c === 1 ? "مہینہ" : "مہینے";
                  },
                  w: function (c) {
                    return c === 1 ? "ہفتہ" : "ہفتے";
                  },
                  d: "دن",
                  h: function (c) {
                    return c === 1 ? "گھنٹہ" : "گھنٹے";
                  },
                  m: "منٹ",
                  s: "سیکنڈ",
                  ms: "ملی سیکنڈ",
                  decimal: "."
                },
                sk: {
                  y: function (c) {
                    return ["rok", "roky", "roky", "rokov"][getCzechOrSlovakForm(c)];
                  },
                  mo: function (c) {
                    return ["mesiac", "mesiace", "mesiace", "mesiacov"][getCzechOrSlovakForm(c)];
                  },
                  w: function (c) {
                    return ["týždeň", "týždne", "týždne", "týždňov"][getCzechOrSlovakForm(c)];
                  },
                  d: function (c) {
                    return ["deň", "dni", "dni", "dní"][getCzechOrSlovakForm(c)];
                  },
                  h: function (c) {
                    return ["hodina", "hodiny", "hodiny", "hodín"][getCzechOrSlovakForm(c)];
                  },
                  m: function (c) {
                    return ["minúta", "minúty", "minúty", "minút"][getCzechOrSlovakForm(c)];
                  },
                  s: function (c) {
                    return ["sekunda", "sekundy", "sekundy", "sekúnd"][getCzechOrSlovakForm(c)];
                  },
                  ms: function (c) {
                    return ["milisekunda", "milisekundy", "milisekundy", "milisekúnd"][getCzechOrSlovakForm(c)];
                  },
                  decimal: ","
                },
                sl: {
                  y: function (c) {
                    if (c % 10 === 1) return "leto";else if (c % 100 === 2) return "leti";else if (c % 100 === 3 || c % 100 === 4 || Math.floor(c) !== c && c % 100 <= 5) return "leta";else return "let";
                  },
                  mo: function (c) {
                    if (c % 10 === 1) return "mesec";else if (c % 100 === 2 || Math.floor(c) !== c && c % 100 <= 5) return "meseca";else if (c % 10 === 3 || c % 10 === 4) return "mesece";else return "mesecev";
                  },
                  w: function (c) {
                    if (c % 10 === 1) return "teden";else if (c % 10 === 2 || Math.floor(c) !== c && c % 100 <= 4) return "tedna";else if (c % 10 === 3 || c % 10 === 4) return "tedne";else return "tednov";
                  },
                  d: function (c) {
                    return c % 100 === 1 ? "dan" : "dni";
                  },
                  h: function (c) {
                    if (c % 10 === 1) return "ura";else if (c % 100 === 2) return "uri";else if (c % 10 === 3 || c % 10 === 4 || Math.floor(c) !== c) return "ure";else return "ur";
                  },
                  m: function (c) {
                    if (c % 10 === 1) return "minuta";else if (c % 10 === 2) return "minuti";else if (c % 10 === 3 || c % 10 === 4 || Math.floor(c) !== c && c % 100 <= 4) return "minute";else return "minut";
                  },
                  s: function (c) {
                    if (c % 10 === 1) return "sekunda";else if (c % 100 === 2) return "sekundi";else if (c % 100 === 3 || c % 100 === 4 || Math.floor(c) !== c) return "sekunde";else return "sekund";
                  },
                  ms: function (c) {
                    if (c % 10 === 1) return "milisekunda";else if (c % 100 === 2) return "milisekundi";else if (c % 100 === 3 || c % 100 === 4 || Math.floor(c) !== c) return "milisekunde";else return "milisekund";
                  },
                  decimal: ","
                },
                sv: {
                  y: "år",
                  mo: function (c) {
                    return "månad" + (c === 1 ? "" : "er");
                  },
                  w: function (c) {
                    return "veck" + (c === 1 ? "a" : "or");
                  },
                  d: function (c) {
                    return "dag" + (c === 1 ? "" : "ar");
                  },
                  h: function (c) {
                    return "timm" + (c === 1 ? "e" : "ar");
                  },
                  m: function (c) {
                    return "minut" + (c === 1 ? "" : "er");
                  },
                  s: function (c) {
                    return "sekund" + (c === 1 ? "" : "er");
                  },
                  ms: function (c) {
                    return "millisekund" + (c === 1 ? "" : "er");
                  },
                  decimal: ","
                },
                sw: {
                  y: function (c) {
                    return c === 1 ? "mwaka" : "miaka";
                  },
                  mo: function (c) {
                    return c === 1 ? "mwezi" : "miezi";
                  },
                  w: "wiki",
                  d: function (c) {
                    return c === 1 ? "siku" : "masiku";
                  },
                  h: function (c) {
                    return c === 1 ? "saa" : "masaa";
                  },
                  m: "dakika",
                  s: "sekunde",
                  ms: "milisekunde",
                  decimal: ".",
                  _numberFirst: true
                },
                tr: {
                  y: "yıl",
                  mo: "ay",
                  w: "hafta",
                  d: "gün",
                  h: "saat",
                  m: "dakika",
                  s: "saniye",
                  ms: "milisaniye",
                  decimal: ","
                },
                th: {
                  y: "ปี",
                  mo: "เดือน",
                  w: "สัปดาห์",
                  d: "วัน",
                  h: "ชั่วโมง",
                  m: "นาที",
                  s: "วินาที",
                  ms: "มิลลิวินาที",
                  decimal: "."
                },
                vi: {
                  y: "năm",
                  mo: "tháng",
                  w: "tuần",
                  d: "ngày",
                  h: "giờ",
                  m: "phút",
                  s: "giây",
                  ms: "mili giây",
                  decimal: ","
                },
                zh_CN: {
                  y: "年",
                  mo: "个月",
                  w: "周",
                  d: "天",
                  h: "小时",
                  m: "分钟",
                  s: "秒",
                  ms: "毫秒",
                  decimal: "."
                },
                zh_TW: {
                  y: "年",
                  mo: "個月",
                  w: "周",
                  d: "天",
                  h: "小時",
                  m: "分鐘",
                  s: "秒",
                  ms: "毫秒",
                  decimal: "."
                }
              };
              function humanizer(passedOptions) {
                var result = function humanizer$1(ms, humanizerOptions) {
                  return doHumanization(ms, assign({}, result, humanizerOptions || {}));
                };
                return assign(result, {
                  language: "en",
                  spacer: " ",
                  conjunction: "",
                  serialComma: true,
                  units: ["y", "mo", "w", "d", "h", "m", "s"],
                  languages: {},
                  round: false,
                  unitMeasures: {
                    y: 315576e5,
                    mo: 26298e5,
                    w: 6048e5,
                    d: 864e5,
                    h: 36e5,
                    m: 6e4,
                    s: 1e3,
                    ms: 1
                  }
                }, passedOptions);
              }
              var humanizeDuration$1 = humanizer({});
              function getDictionary(options) {
                var languagesFromOptions = [options.language];
                if (has(options, "fallbacks")) if (isArray(options.fallbacks) && options.fallbacks.length) languagesFromOptions = languagesFromOptions.concat(options.fallbacks);else throw new Error("fallbacks must be an array with at least one element");
                for (var i = 0; i < languagesFromOptions.length; i++) {
                  var languageToTry = languagesFromOptions[i];
                  if (has(options.languages, languageToTry)) return options.languages[languageToTry];else if (has(LANGUAGES, languageToTry)) return LANGUAGES[languageToTry];
                }
                throw new Error("No language found.");
              }
              function doHumanization(ms, options) {
                var i, len, piece;
                ms = Math.abs(ms);
                var dictionary = getDictionary(options);
                var pieces = [];
                var unitName, unitMS, unitCount;
                for (i = 0, len = options.units.length; i < len; i++) {
                  unitName = options.units[i];
                  unitMS = options.unitMeasures[unitName];
                  if (i + 1 === len) {
                    if (has(options, "maxDecimalPoints")) {
                      var expValue = Math.pow(10, options.maxDecimalPoints);
                      var unitCountFloat = ms / unitMS;
                      unitCount = parseFloat((Math.floor(expValue * unitCountFloat) / expValue).toFixed(options.maxDecimalPoints));
                    } else unitCount = ms / unitMS;
                  } else unitCount = Math.floor(ms / unitMS);
                  pieces.push({
                    unitCount,
                    unitName
                  });
                  ms -= unitCount * unitMS;
                }
                var firstOccupiedUnitIndex = 0;
                for (i = 0; i < pieces.length; i++) if (pieces[i].unitCount) {
                  firstOccupiedUnitIndex = i;
                  break;
                }
                if (options.round) {
                  var ratioToLargerUnit, previousPiece;
                  for (i = pieces.length - 1; i >= 0; i--) {
                    piece = pieces[i];
                    piece.unitCount = Math.round(piece.unitCount);
                    if (i === 0) break;
                    previousPiece = pieces[i - 1];
                    ratioToLargerUnit = options.unitMeasures[previousPiece.unitName] / options.unitMeasures[piece.unitName];
                    if (piece.unitCount % ratioToLargerUnit === 0 || options.largest && options.largest - 1 < i - firstOccupiedUnitIndex) {
                      previousPiece.unitCount += piece.unitCount / ratioToLargerUnit;
                      piece.unitCount = 0;
                    }
                  }
                }
                var result = [];
                for (i = 0, pieces.length; i < len; i++) {
                  piece = pieces[i];
                  if (piece.unitCount) result.push(render(piece.unitCount, piece.unitName, dictionary, options));
                  if (result.length === options.largest) break;
                }
                if (result.length) {
                  var delimiter;
                  if (has(options, "delimiter")) delimiter = options.delimiter;else if (has(dictionary, "delimiter")) delimiter = dictionary.delimiter;else delimiter = ", ";
                  if (!options.conjunction || result.length === 1) return result.join(delimiter);else if (result.length === 2) return result.join(options.conjunction);else if (result.length > 2) return result.slice(0, -1).join(delimiter) + (options.serialComma ? "," : "") + options.conjunction + result.slice(-1);
                } else return render(0, options.units[options.units.length - 1], dictionary, options);
              }
              function render(count, type, dictionary, options) {
                var decimal;
                if (has(options, "decimal")) decimal = options.decimal;else if (has(dictionary, "decimal")) decimal = dictionary.decimal;else decimal = ".";
                var countStr;
                if (typeof dictionary._formatCount === "function") countStr = dictionary._formatCount(count, decimal);else countStr = count.toString().replace(".", decimal);
                var dictionaryValue = dictionary[type];
                var word;
                if (typeof dictionaryValue === "function") word = dictionaryValue(count);else word = dictionaryValue;
                if (dictionary._numberFirst) return word + options.spacer + countStr;
                return countStr + options.spacer + word;
              }
              function assign(destination) {
                var source;
                for (var i = 1; i < arguments.length; i++) {
                  source = arguments[i];
                  for (var prop in source) if (has(source, prop)) destination[prop] = source[prop];
                }
                return destination;
              }
              function getArabicForm(c) {
                if (c === 1) return 0;
                if (c === 2) return 1;
                if (c > 2 && c < 11) return 2;
                return 0;
              }
              function getPolishForm(c) {
                if (c === 1) return 0;else if (Math.floor(c) !== c) return 1;else if (c % 10 >= 2 && c % 10 <= 4 && !(c % 100 > 10 && c % 100 < 20)) return 2;else return 3;
              }
              function getSlavicForm(c) {
                if (Math.floor(c) !== c) return 2;else if (c % 100 >= 5 && c % 100 <= 20 || c % 10 >= 5 && c % 10 <= 9 || c % 10 === 0) return 0;else if (c % 10 === 1) return 1;else if (c > 1) return 2;else return 0;
              }
              function getCzechOrSlovakForm(c) {
                if (c === 1) return 0;else if (Math.floor(c) !== c) return 1;else if (c % 10 >= 2 && c % 10 <= 4 && c % 100 < 10) return 2;else return 3;
              }
              function getLithuanianForm(c) {
                if (c === 1 || c % 10 === 1 && c % 100 > 20) return 0;else if (Math.floor(c) !== c || c % 10 >= 2 && c % 100 > 20 || c % 10 >= 2 && c % 100 < 10) return 1;else return 2;
              }
              function getLatvianForm(c) {
                return c % 10 === 1 && c % 100 !== 11;
              }
              var isArray = Array.isArray || function (arg) {
                return Object.prototype.toString.call(arg) === "[object Array]";
              };
              function has(obj, key) {
                return Object.prototype.hasOwnProperty.call(obj, key);
              }
              humanizeDuration$1.getSupportedLanguages = function getSupportedLanguages() {
                var result = [];
                for (var language in LANGUAGES) if (has(LANGUAGES, language) && language !== "gr") result.push(language);
                return result;
              };
              humanizeDuration$1.humanizer = humanizer;
              if (typeof define === "function" && define.amd) define(function () {
                return humanizeDuration$1;
              });else if (typeof module !== "undefined" && module.exports) module.exports = humanizeDuration$1;else this.humanizeDuration = humanizeDuration$1;
            })();
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/v3-infinite-loading@1.2.2/node_modules/v3-infinite-loading/lib/v3-infinite-loading.umd.js
        require_v3_infinite_loading_umd = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/v3-infinite-loading@1.2.2/node_modules/v3-infinite-loading/lib/v3-infinite-loading.umd.js": (exports, module) => {
            (function (s, e) {
              typeof exports == "object" && typeof module < "u" ? e(exports, require_vue()) : typeof define == "function" && define.amd ? define(["exports", "vue"], e) : (s = typeof globalThis < "u" ? globalThis : s || self, e(s.V3InfiniteLoading = {}, s.Vue));
            })(exports, function (s, e) {
              const f = (t, i) => {
                  const n = t.__vccOpts || t;
                  for (const [o, c] of i) n[o] = c;
                  return n;
                },
                g = {},
                y = t => (e.pushScopeId("data-v-259be2b2"), t = t(), e.popScopeId(), t),
                h = {
                  class: "container"
                },
                b = [y(() => e.createElementVNode("div", {
                  class: "spinner"
                }, null, -1))];
              function E(t, i) {
                return e.openBlock(), e.createElementBlock("div", h, b);
              }
              const S = f(g, [["render", E], ["__scopeId", "data-v-259be2b2"], ["__file", "/home/oumoussa/side-projects/infinite/src/components/Spinner.vue"]]),
                x = t => ({
                  loading() {
                    t.value = "loading";
                  },
                  loaded() {
                    t.value = "loaded";
                  },
                  complete() {
                    t.value = "complete";
                  },
                  error() {
                    t.value = "error";
                  }
                }),
                v = (t, i, n) => () => {
                  n.prevHeight = (n.parentEl || document.documentElement).scrollHeight, i.loading(), t("infinite", i);
                },
                I = (t, i) => {
                  const n = t.getBoundingClientRect();
                  if (!i) return n.top >= 0 && n.bottom <= window.innerHeight;
                  const o = i.getBoundingClientRect();
                  return n.top >= o.top && n.bottom <= o.bottom;
                },
                u = t => {
                  t.parentEl = document.querySelector(t.target) || null;
                  let i = `0px 0px ${t.distance}px 0px`;
                  t.top && (i = `${t.distance}px 0px 0px 0px`);
                  const n = new IntersectionObserver(o => {
                    o[0].isIntersecting && (t.firstload && t.emit(), t.firstload = !0);
                  }, {
                    root: t.parentEl,
                    rootMargin: i
                  });
                  return n.observe(t.infiniteLoading.value), n;
                },
                k = {
                  class: "state-error"
                };
              s.default = f({
                __name: "InfiniteLoading",
                props: {
                  top: {
                    type: Boolean,
                    required: !1
                  },
                  target: {
                    type: [String, Boolean],
                    required: !1
                  },
                  distance: {
                    type: Number,
                    required: !1,
                    default: 0
                  },
                  identifier: {
                    required: !1
                  },
                  firstload: {
                    type: Boolean,
                    required: !1,
                    default: !0
                  },
                  slots: {
                    type: Object,
                    required: !1
                  }
                },
                emits: ["infinite"],
                setup(t, {
                  emit: i
                }) {
                  const n = t;
                  let o = null;
                  const c = e.ref(null),
                    d = e.ref("ready"),
                    {
                      top: _,
                      firstload: V,
                      target: B,
                      distance: q
                    } = n,
                    {
                      identifier: m
                    } = e.toRefs(n),
                    r = {
                      infiniteLoading: c,
                      target: B,
                      top: _,
                      firstload: V,
                      distance: q,
                      prevHeight: 0,
                      parentEl: null
                    };
                  r.emit = v(i, x(d), r);
                  const L = () => e.watch(d, async l => {
                      const a = r.parentEl || document.documentElement;
                      await e.nextTick(), l == "loaded" && _ && (a.scrollTop = a.scrollHeight - r.prevHeight), l == "loaded" && I(c.value, r.parentEl) && r.emit(), l == "complete" && o.disconnect();
                    }),
                    w = () => e.watch(m, () => {
                      d.value = "ready", o.disconnect(), o = u(r);
                    });
                  return e.onMounted(() => {
                    o = u(r), L(), m && w();
                  }), e.onUnmounted(() => {
                    o.disconnect();
                  }), (l, a) => (e.openBlock(), e.createElementBlock("div", {
                    ref_key: "infiniteLoading",
                    ref: c
                  }, [d.value == "loading" ? e.renderSlot(l.$slots, "spinner", {
                    key: 0
                  }, () => [e.createVNode(S)], !0) : e.createCommentVNode("v-if", !0), d.value == "complete" ? e.renderSlot(l.$slots, "complete", {
                    key: 1
                  }, () => {
                    var p;
                    return [e.createElementVNode("span", null, e.toDisplayString(((p = t.slots) == null ? void 0 : p.complete) || "No more results!"), 1)];
                  }, !0) : e.createCommentVNode("v-if", !0), d.value == "error" ? e.renderSlot(l.$slots, "error", {
                    key: 2,
                    retry: r.emit
                  }, () => {
                    var p;
                    return [e.createElementVNode("span", k, [e.createElementVNode("span", null, e.toDisplayString(((p = t.slots) == null ? void 0 : p.error) || "Oops something went wrong!"), 1), e.createElementVNode("button", {
                      class: "retry",
                      onClick: a[0] || (a[0] = (...$) => r.emit && r.emit(...$))
                    }, " retry ")])];
                  }, !0) : e.createCommentVNode("v-if", !0)], 512));
                }
              }, [["__scopeId", "data-v-9d82030b"], ["__file", "/home/oumoussa/side-projects/infinite/src/components/InfiniteLoading.vue"]]), Object.defineProperties(s, {
                __esModule: {
                  value: !0
                },
                [Symbol.toStringTag]: {
                  value: "Module"
                }
              });
            });
          }
        }); //#endregion
        //#region src/features/settings/sso/views/SettingsLdapView.vue?vue&type=script&setup=true&lang.ts
        import_humanize_duration = /* @__PURE__ */__toESM(require_humanize_duration());
        import_v3_infinite_loading_umd = /* @__PURE__ */__toESM(require_v3_infinite_loading_umd());
        _hoisted_1 = {
          key: 0
        };
        _hoisted_2 = {
          key: 1
        };
        _hoisted_3 = {
          key: 0
        };
        _hoisted_4 = {
          class: "pb-3xl"
        };
        SettingsLdapView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsLdapView",
          setup(__props) {
            const toast = useToast();
            const i18n = useI18n();
            const message = useMessage();
            const documentTitle = useDocumentTitle();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const settingsStore = useSettingsStore();
            const ssoStore = useSSOStore();
            const dataTable = ref([]);
            const tableKey = ref(0);
            const adConfig = ref();
            const loadingTestConnection = ref(false);
            const loadingDryRun = ref(false);
            const loadingLiveRun = ref(false);
            const loadingTable = ref(false);
            const hasAnyChanges = ref(false);
            const formInputs = ref(null);
            const formBus = createFormEventBus();
            const readyToSubmit = ref(false);
            const page = ref(0);
            const loginEnabled = ref(false);
            const syncEnabled = ref(false);
            const ldapConfigFormRef = ref();
            const isLDAPFeatureEnabled = computed(() => settingsStore.settings.enterprise.ldap);
            const goToUpgrade = async () => await pageRedirectionHelper.goToUpgrade("ldap", "upgrade-ldap");
            const cellClassStyle = ({
              row,
              column
            }) => {
              if (column.property === "status") {
                if (row.status === "Success") return {
                  color: "green"
                };else if (row.status === "Error") return {
                  color: "red"
                };
              }
              if (column.property === "runMode") {
                if (row.runMode === "Dry") return {
                  color: "orange"
                };else if (row.runMode === "Live") return {
                  color: "blue"
                };
              }
              return {};
            };
            const onInput = input => {
              if (input.name === "loginEnabled" && typeof input.value === "boolean") loginEnabled.value = input.value;
              if (input.name === "synchronizationEnabled" && typeof input.value === "boolean") syncEnabled.value = input.value;
              hasAnyChanges.value = true;
            };
            const onReadyToSubmit = ready => {
              readyToSubmit.value = ready;
            };
            const syncDataMapper = sync => {
              const startedAt = new Date(sync.startedAt);
              const endedAt = new Date(sync.endedAt);
              return {
                runTime: (0, import_humanize_duration.default)(endedAt.getTime() - startedAt.getTime()),
                runMode: capitalizeFirstLetter(sync.runMode),
                status: capitalizeFirstLetter(sync.status),
                endedAt: convertToDisplayDate(endedAt.getTime()),
                details: i18n.baseText("settings.ldap.usersScanned", {
                  interpolate: {
                    scanned: sync.scanned.toString()
                  }
                })
              };
            };
            const onSubmit = async () => {
              if (!hasAnyChanges.value || !ldapConfigFormRef.value) return;
              const formValues = ldapConfigFormRef.value.getValues();
              const newConfiguration = {
                loginEnabled: formValues.loginEnabled,
                loginLabel: formValues.loginLabel,
                connectionUrl: formValues.serverAddress,
                allowUnauthorizedCerts: formValues.allowUnauthorizedCerts,
                connectionPort: +formValues.port,
                connectionSecurity: formValues.connectionSecurity,
                baseDn: formValues.baseDn,
                bindingAdminDn: formValues.bindingType === "admin" ? formValues.adminDn : "",
                bindingAdminPassword: formValues.bindingType === "admin" ? formValues.adminPassword : "",
                emailAttribute: formValues.email,
                firstNameAttribute: formValues.firstName,
                lastNameAttribute: formValues.lastName,
                loginIdAttribute: formValues.loginId,
                ldapIdAttribute: formValues.ldapId,
                userFilter: formValues.userFilter,
                synchronizationEnabled: formValues.synchronizationEnabled,
                synchronizationInterval: +formValues.synchronizationInterval,
                searchPageSize: +formValues.pageSize,
                searchTimeout: +formValues.searchTimeout
              };
              let saveForm = true;
              if (!adConfig.value) return;
              try {
                if (adConfig.value.loginEnabled && !newConfiguration.loginEnabled) saveForm = (await message.confirm(i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.message"), i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.headline"), {
                  cancelButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"),
                  confirmButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText")
                })) === MODAL_CONFIRM;
                if (!saveForm) hasAnyChanges.value = true;
                adConfig.value = await ssoStore.updateLdapConfig(newConfiguration);
                toast.showToast({
                  title: i18n.baseText("settings.ldap.updateConfiguration"),
                  message: "",
                  type: "success"
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.ldap.configurationError"));
              } finally {
                if (saveForm) hasAnyChanges.value = false;
              }
            };
            const onSaveClick = () => {
              formBus.emit("submit");
            };
            const onTestConnectionClick = async () => {
              loadingTestConnection.value = true;
              try {
                await ssoStore.testLdapConnection();
                toast.showToast({
                  title: i18n.baseText("settings.ldap.connectionTest"),
                  message: i18n.baseText("settings.ldap.toast.connection.success"),
                  type: "success"
                });
              } catch (error) {
                toast.showToast({
                  title: i18n.baseText("settings.ldap.connectionTestError"),
                  message: error.message,
                  type: "error"
                });
              } finally {
                loadingTestConnection.value = false;
              }
            };
            const onDryRunClick = async () => {
              loadingDryRun.value = true;
              try {
                await ssoStore.runLdapSync({
                  type: "dry"
                });
                toast.showToast({
                  title: i18n.baseText("settings.ldap.runSync.title"),
                  message: i18n.baseText("settings.ldap.toast.sync.success"),
                  type: "success"
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.ldap.synchronizationError"));
              } finally {
                loadingDryRun.value = false;
                await reloadLdapSynchronizations();
              }
            };
            const onLiveRunClick = async () => {
              loadingLiveRun.value = true;
              try {
                await ssoStore.runLdapSync({
                  type: "live"
                });
                toast.showToast({
                  title: i18n.baseText("settings.ldap.runSync.title"),
                  message: i18n.baseText("settings.ldap.toast.sync.success"),
                  type: "success"
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.ldap.synchronizationError"));
              } finally {
                loadingLiveRun.value = false;
                await reloadLdapSynchronizations();
              }
            };
            const getLdapConfig = async () => {
              try {
                adConfig.value = await ssoStore.getLdapConfig();
                loginEnabled.value = adConfig.value.loginEnabled;
                syncEnabled.value = adConfig.value.synchronizationEnabled;
                const whenLoginEnabled = values => values.loginEnabled === true;
                const whenSyncAndLoginEnabled = values => values.synchronizationEnabled === true && values.loginEnabled === true;
                const whenAdminBindingAndLoginEnabled = values => values.bindingType === "admin" && values.loginEnabled === true;
                formInputs.value = [{
                  name: "loginEnabled",
                  initialValue: adConfig.value.loginEnabled,
                  properties: {
                    type: "toggle",
                    label: i18n.baseText("settings.ldap.form.loginEnabled.label"),
                    tooltipText: i18n.baseText("settings.ldap.form.loginEnabled.tooltip"),
                    required: true
                  }
                }, {
                  name: "loginLabel",
                  initialValue: adConfig.value.loginLabel,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.loginLabel.label"),
                    required: true,
                    placeholder: i18n.baseText("settings.ldap.form.loginLabel.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.loginLabel.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "serverAddress",
                  initialValue: adConfig.value.connectionUrl,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.serverAddress.label"),
                    required: true,
                    capitalize: true,
                    placeholder: i18n.baseText("settings.ldap.form.serverAddress.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.serverAddress.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "port",
                  initialValue: adConfig.value.connectionPort,
                  properties: {
                    type: "number",
                    label: i18n.baseText("settings.ldap.form.port.label"),
                    capitalize: true,
                    infoText: i18n.baseText("settings.ldap.form.port.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "connectionSecurity",
                  initialValue: adConfig.value.connectionSecurity,
                  properties: {
                    type: "select",
                    label: i18n.baseText("settings.ldap.form.connectionSecurity.label"),
                    infoText: i18n.baseText("settings.ldap.form.connectionSecurity.infoText"),
                    options: [{
                      label: "None",
                      value: "none"
                    }, {
                      label: "TLS",
                      value: "tls"
                    }, {
                      label: "STARTTLS",
                      value: "startTls"
                    }],
                    required: true,
                    capitalize: true
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "allowUnauthorizedCerts",
                  initialValue: adConfig.value.allowUnauthorizedCerts,
                  properties: {
                    type: "toggle",
                    label: i18n.baseText("settings.ldap.form.allowUnauthorizedCerts.label"),
                    required: false
                  },
                  shouldDisplay(values) {
                    return values.connectionSecurity !== "none" && values.loginEnabled === true;
                  }
                }, {
                  name: "baseDn",
                  initialValue: adConfig.value.baseDn,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.baseDn.label"),
                    required: true,
                    capitalize: true,
                    placeholder: i18n.baseText("settings.ldap.form.baseDn.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.baseDn.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "bindingType",
                  initialValue: "admin",
                  properties: {
                    type: "select",
                    label: i18n.baseText("settings.ldap.form.bindingType.label"),
                    infoText: i18n.baseText("settings.ldap.form.bindingType.infoText"),
                    options: [{
                      value: "admin",
                      label: "Admin"
                    }, {
                      value: "anonymous",
                      label: "Anonymous"
                    }]
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "adminDn",
                  initialValue: adConfig.value.bindingAdminDn,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.adminDn.label"),
                    placeholder: i18n.baseText("settings.ldap.form.adminDn.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.adminDn.infoText"),
                    capitalize: true
                  },
                  shouldDisplay: whenAdminBindingAndLoginEnabled
                }, {
                  name: "adminPassword",
                  initialValue: adConfig.value.bindingAdminPassword,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.adminPassword.label"),
                    type: "password",
                    capitalize: true,
                    infoText: i18n.baseText("settings.ldap.form.adminPassword.infoText")
                  },
                  shouldDisplay: whenAdminBindingAndLoginEnabled
                }, {
                  name: "userFilter",
                  initialValue: adConfig.value.userFilter,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.userFilter.label"),
                    type: "text",
                    required: false,
                    capitalize: true,
                    placeholder: i18n.baseText("settings.ldap.form.userFilter.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.userFilter.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "attributeMappingInfo",
                  properties: {
                    label: i18n.baseText("settings.ldap.form.attributeMappingInfo.label"),
                    type: "info",
                    labelSize: "large",
                    labelAlignment: "left"
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "ldapId",
                  initialValue: adConfig.value.ldapIdAttribute,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.ldapId.label"),
                    type: "text",
                    required: true,
                    capitalize: true,
                    placeholder: i18n.baseText("settings.ldap.form.ldapId.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.ldapId.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "loginId",
                  initialValue: adConfig.value.loginIdAttribute,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.loginId.label"),
                    type: "text",
                    autocomplete: "email",
                    required: true,
                    capitalize: true,
                    placeholder: i18n.baseText("settings.ldap.form.loginId.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.loginId.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "email",
                  initialValue: adConfig.value.emailAttribute,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.email.label"),
                    type: "text",
                    autocomplete: "email",
                    required: true,
                    capitalize: true,
                    placeholder: i18n.baseText("settings.ldap.form.email.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.email.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "firstName",
                  initialValue: adConfig.value.firstNameAttribute,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.firstName.label"),
                    type: "text",
                    autocomplete: "email",
                    required: true,
                    capitalize: true,
                    placeholder: i18n.baseText("settings.ldap.form.firstName.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.firstName.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "lastName",
                  initialValue: adConfig.value.lastNameAttribute,
                  properties: {
                    label: i18n.baseText("settings.ldap.form.lastName.label"),
                    type: "text",
                    autocomplete: "email",
                    required: true,
                    capitalize: true,
                    placeholder: i18n.baseText("settings.ldap.form.lastName.placeholder"),
                    infoText: i18n.baseText("settings.ldap.form.lastName.infoText")
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "synchronizationEnabled",
                  initialValue: adConfig.value.synchronizationEnabled,
                  properties: {
                    type: "toggle",
                    label: i18n.baseText("settings.ldap.form.synchronizationEnabled.label"),
                    tooltipText: i18n.baseText("settings.ldap.form.synchronizationEnabled.tooltip"),
                    required: true
                  },
                  shouldDisplay: whenLoginEnabled
                }, {
                  name: "synchronizationInterval",
                  initialValue: adConfig.value.synchronizationInterval,
                  properties: {
                    type: "number",
                    label: i18n.baseText("settings.ldap.form.synchronizationInterval.label"),
                    infoText: i18n.baseText("settings.ldap.form.synchronizationInterval.infoText")
                  },
                  shouldDisplay: whenSyncAndLoginEnabled
                }, {
                  name: "pageSize",
                  initialValue: adConfig.value.searchPageSize,
                  properties: {
                    type: "number",
                    label: i18n.baseText("settings.ldap.form.pageSize.label"),
                    infoText: i18n.baseText("settings.ldap.form.pageSize.infoText")
                  },
                  shouldDisplay: whenSyncAndLoginEnabled
                }, {
                  name: "searchTimeout",
                  initialValue: adConfig.value.searchTimeout,
                  properties: {
                    type: "number",
                    label: i18n.baseText("settings.ldap.form.searchTimeout.label"),
                    infoText: i18n.baseText("settings.ldap.form.searchTimeout.infoText")
                  },
                  shouldDisplay: whenSyncAndLoginEnabled
                }];
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.ldap.configurationError"));
              }
            };
            const getLdapSynchronizations = async state => {
              try {
                loadingTable.value = true;
                const data = await ssoStore.getLdapSynchronizations({
                  page: page.value
                });
                if (data.length !== 0) {
                  dataTable.value.push(...data.map(syncDataMapper));
                  page.value += 1;
                  state.loaded();
                } else state.complete();
                loadingTable.value = false;
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.ldap.synchronizationError"));
              }
            };
            const reloadLdapSynchronizations = async () => {
              try {
                page.value = 0;
                tableKey.value += 1;
                dataTable.value = [];
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.ldap.synchronizationError"));
              }
            };
            onMounted(async () => {
              documentTitle.set(i18n.baseText("settings.ldap"));
              if (!isLDAPFeatureEnabled.value) return;
              await getLdapConfig();
            });
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              const _directive_loading = resolveDirective("loading");
              return !isLDAPFeatureEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.header, "mb-2xl"])
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap")), 1)]),
                _: 1
              })], 2), createVNode(unref(N8nInfoTip_default), {
                type: "note",
                theme: "info",
                "tooltip-placement": "right",
                class: "mb-l"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap.note")), 1)]),
                _: 1
              }), createVNode(unref(N8nActionBox_default), {
                description: unref(i18n).baseText("settings.ldap.disabled.description"),
                "button-text": unref(i18n).baseText("settings.ldap.disabled.buttonText"),
                "onClick:button": goToUpgrade
              }, {
                heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.ldap.disabled.title")), 1)]),
                _: 1
              }, 8, ["description", "button-text"])])) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap")), 1)]),
                _: 1
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.docsInfoTip)
              }, [createVNode(unref(N8nInfoTip_default), {
                theme: "info",
                type: "note"
              }, {
                default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.ldap.infoTip")]])]),
                _: 1
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.settingsForm)
              }, [formInputs.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
                key: 0,
                ref_key: "ldapConfigFormRef",
                ref: ldapConfigFormRef,
                inputs: formInputs.value,
                "event-bus": unref(formBus),
                "column-view": true,
                "vertical-spacing": "l",
                onUpdate: onInput,
                onReady: onReadyToSubmit,
                onSubmit
              }, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true)], 2), createBaseVNode("div", null, [loginEnabled.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                label: loadingTestConnection.value ? unref(i18n).baseText("settings.ldap.testingConnection") : unref(i18n).baseText("settings.ldap.testConnection"),
                size: "large",
                class: "mr-s",
                disabled: hasAnyChanges.value || !readyToSubmit.value,
                loading: loadingTestConnection.value,
                onClick: onTestConnectionClick
              }, null, 8, ["label", "disabled", "loading"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
                label: unref(i18n).baseText("settings.ldap.save"),
                size: "large",
                disabled: !hasAnyChanges.value || !readyToSubmit.value,
                onClick: onSaveClick
              }, null, 8, ["label", "disabled"])])], 2), loginEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nHeading_default), {
                tag: "h1",
                class: "mb-xl mt-3xl",
                size: "medium"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap.section.synchronization.title")), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.syncTable)
              }, [withDirectives((openBlock(), createBlock(unref(ElTable), {
                key: tableKey.value,
                border: true,
                stripe: true,
                data: dataTable.value,
                "cell-style": cellClassStyle,
                style: {
                  "width": "100%"
                },
                "max-height": "250"
              }, {
                empty: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap.synchronizationTable.empty.message")), 1)]),
                append: withCtx(() => [createVNode(unref(import_v3_infinite_loading_umd.default), {
                  target: ".el-table__body-wrapper",
                  onInfinite: getLdapSynchronizations
                })]),
                default: withCtx(() => [createVNode(unref(ElTableColumn), {
                  prop: "status",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.status")
                }, null, 8, ["label"]), createVNode(unref(ElTableColumn), {
                  prop: "endedAt",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.endedAt")
                }, null, 8, ["label"]), createVNode(unref(ElTableColumn), {
                  prop: "runMode",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.runMode")
                }, null, 8, ["label"]), createVNode(unref(ElTableColumn), {
                  prop: "runTime",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.runTime")
                }, null, 8, ["label"]), createVNode(unref(ElTableColumn), {
                  prop: "details",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.details")
                }, null, 8, ["label"])]),
                _: 1
              }, 8, ["data"])), [[_directive_loading, loadingTable.value]])], 2), createBaseVNode("div", _hoisted_4, [createVNode(unref(N8nButton_default), {
                label: unref(i18n).baseText("settings.ldap.dryRun"),
                type: "secondary",
                size: "large",
                class: "mr-s",
                disabled: hasAnyChanges.value || !readyToSubmit.value,
                loading: loadingDryRun.value,
                onClick: onDryRunClick
              }, null, 8, ["label", "disabled", "loading"]), createVNode(unref(N8nButton_default), {
                label: unref(i18n).baseText("settings.ldap.synchronizeNow"),
                size: "large",
                disabled: hasAnyChanges.value || !readyToSubmit.value,
                loading: loadingLiveRun.value,
                onClick: onLiveRunClick
              }, null, 8, ["label", "disabled", "loading"])])])) : createCommentVNode("", true)]));
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/views/SettingsLdapView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_y6w94_123";
        syncTable = "_syncTable_y6w94_127";
        header = "_header_y6w94_131";
        enableFeatureContainer = "_enableFeatureContainer_y6w94_140";
        sectionHeader = "_sectionHeader_y6w94_152";
        settingsForm = "_settingsForm_y6w94_156";
        docsInfoTip = "_docsInfoTip_y6w94_160";
        SettingsLdapView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          syncTable,
          header,
          enableFeatureContainer,
          sectionHeader,
          settingsForm,
          docsInfoTip
        }; //#endregion
        //#region src/features/settings/sso/views/SettingsLdapView.vue
        cssModules = {
          "$style": SettingsLdapView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsLdapView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsLdapView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();
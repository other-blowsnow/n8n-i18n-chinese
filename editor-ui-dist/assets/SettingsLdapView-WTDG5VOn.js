import { bZ as getDefaultExportFromCjs, r as ref, c7 as toRefs, h as createElementBlock, o as onMounted, af as watch, cd as onUnmounted, g as openBlock, Q as renderSlot, f as createCommentVNode, i as createVNode, j as createBaseVNode, t as toDisplayString, R as nextTick, dV as pushScopeId, dW as popScopeId, d as defineComponent, a as useToast, ay as useDocumentTitle, aB as usePageRedirectionHelper, v as useSettingsStore, dX as useSSOStore, x as computed, c as useI18n, ci as resolveDirective, w as withCtx, k as createTextVNode, l as unref, m as N8nHeading, n as normalizeClass, cS as InfoTip, dY as N8nActionBox, b4 as withDirectives, e as createBlock, dZ as createFormEventBus, d_ as N8nFormInputs, q as N8nButton, d$ as ElTableColumn, e0 as ElTable, e1 as convertToDisplayDate, e2 as capitalizeFirstLetter, aq as useMessage, ar as MODAL_CONFIRM, _ as _export_sfc } from "./index-BsWH3eYA.js";
var humanizeDuration$1 = { exports: {} };
var hasRequiredHumanizeDuration;
function requireHumanizeDuration() {
  if (hasRequiredHumanizeDuration) return humanizeDuration$1.exports;
  hasRequiredHumanizeDuration = 1;
  (function(module) {
    (function() {
      var greek = {
        y: function(c) {
          return c === 1 ? "χρόνος" : "χρόνια";
        },
        mo: function(c) {
          return c === 1 ? "μήνας" : "μήνες";
        },
        w: function(c) {
          return c === 1 ? "εβδομάδα" : "εβδομάδες";
        },
        d: function(c) {
          return c === 1 ? "μέρα" : "μέρες";
        },
        h: function(c) {
          return c === 1 ? "ώρα" : "ώρες";
        },
        m: function(c) {
          return c === 1 ? "λεπτό" : "λεπτά";
        },
        s: function(c) {
          return c === 1 ? "δευτερόλεπτο" : "δευτερόλεπτα";
        },
        ms: function(c) {
          return (c === 1 ? "χιλιοστό" : "χιλιοστά") + " του δευτερολέπτου";
        },
        decimal: ","
      };
      var ARABIC_DIGITS = ["۰", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
      var LANGUAGES = {
        af: {
          y: "jaar",
          mo: function(c) {
            return "maand" + (c === 1 ? "" : "e");
          },
          w: function(c) {
            return c === 1 ? "week" : "weke";
          },
          d: function(c) {
            return c === 1 ? "dag" : "dae";
          },
          h: function(c) {
            return c === 1 ? "uur" : "ure";
          },
          m: function(c) {
            return c === 1 ? "minuut" : "minute";
          },
          s: function(c) {
            return "sekonde" + (c === 1 ? "" : "s");
          },
          ms: function(c) {
            return "millisekonde" + (c === 1 ? "" : "s");
          },
          decimal: ","
        },
        ar: {
          y: function(c) {
            return ["سنة", "سنتان", "سنوات"][getArabicForm(c)];
          },
          mo: function(c) {
            return ["شهر", "شهران", "أشهر"][getArabicForm(c)];
          },
          w: function(c) {
            return ["أسبوع", "أسبوعين", "أسابيع"][getArabicForm(c)];
          },
          d: function(c) {
            return ["يوم", "يومين", "أيام"][getArabicForm(c)];
          },
          h: function(c) {
            return ["ساعة", "ساعتين", "ساعات"][getArabicForm(c)];
          },
          m: function(c) {
            return ["دقيقة", "دقيقتان", "دقائق"][getArabicForm(c)];
          },
          s: function(c) {
            return ["ثانية", "ثانيتان", "ثواني"][getArabicForm(c)];
          },
          ms: function(c) {
            return ["جزء من الثانية", "جزآن من الثانية", "أجزاء من الثانية"][getArabicForm(c)];
          },
          decimal: ",",
          delimiter: " و ",
          _formatCount: function(count, decimal) {
            var replacements = assign(ARABIC_DIGITS, { ".": decimal });
            var characters = count.toString().split("");
            for (var i = 0; i < characters.length; i++) {
              var character = characters[i];
              if (has(replacements, character)) {
                characters[i] = replacements[character];
              }
            }
            return characters.join("");
          }
        },
        bg: {
          y: function(c) {
            return ["години", "година", "години"][getSlavicForm(c)];
          },
          mo: function(c) {
            return ["месеца", "месец", "месеца"][getSlavicForm(c)];
          },
          w: function(c) {
            return ["седмици", "седмица", "седмици"][getSlavicForm(c)];
          },
          d: function(c) {
            return ["дни", "ден", "дни"][getSlavicForm(c)];
          },
          h: function(c) {
            return ["часа", "час", "часа"][getSlavicForm(c)];
          },
          m: function(c) {
            return ["минути", "минута", "минути"][getSlavicForm(c)];
          },
          s: function(c) {
            return ["секунди", "секунда", "секунди"][getSlavicForm(c)];
          },
          ms: function(c) {
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
          y: function(c) {
            return "any" + (c === 1 ? "" : "s");
          },
          mo: function(c) {
            return "mes" + (c === 1 ? "" : "os");
          },
          w: function(c) {
            return "setman" + (c === 1 ? "a" : "es");
          },
          d: function(c) {
            return "di" + (c === 1 ? "a" : "es");
          },
          h: function(c) {
            return "hor" + (c === 1 ? "a" : "es");
          },
          m: function(c) {
            return "minut" + (c === 1 ? "" : "s");
          },
          s: function(c) {
            return "segon" + (c === 1 ? "" : "s");
          },
          ms: function(c) {
            return "milisegon" + (c === 1 ? "" : "s");
          },
          decimal: ","
        },
        cs: {
          y: function(c) {
            return ["rok", "roku", "roky", "let"][getCzechOrSlovakForm(c)];
          },
          mo: function(c) {
            return ["měsíc", "měsíce", "měsíce", "měsíců"][getCzechOrSlovakForm(c)];
          },
          w: function(c) {
            return ["týden", "týdne", "týdny", "týdnů"][getCzechOrSlovakForm(c)];
          },
          d: function(c) {
            return ["den", "dne", "dny", "dní"][getCzechOrSlovakForm(c)];
          },
          h: function(c) {
            return ["hodina", "hodiny", "hodiny", "hodin"][getCzechOrSlovakForm(c)];
          },
          m: function(c) {
            return ["minuta", "minuty", "minuty", "minut"][getCzechOrSlovakForm(c)];
          },
          s: function(c) {
            return ["sekunda", "sekundy", "sekundy", "sekund"][getCzechOrSlovakForm(c)];
          },
          ms: function(c) {
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
          mo: function(c) {
            return "måned" + (c === 1 ? "" : "er");
          },
          w: function(c) {
            return "uge" + (c === 1 ? "" : "r");
          },
          d: function(c) {
            return "dag" + (c === 1 ? "" : "e");
          },
          h: function(c) {
            return "time" + (c === 1 ? "" : "r");
          },
          m: function(c) {
            return "minut" + (c === 1 ? "" : "ter");
          },
          s: function(c) {
            return "sekund" + (c === 1 ? "" : "er");
          },
          ms: function(c) {
            return "millisekund" + (c === 1 ? "" : "er");
          },
          decimal: ","
        },
        de: {
          y: function(c) {
            return "Jahr" + (c === 1 ? "" : "e");
          },
          mo: function(c) {
            return "Monat" + (c === 1 ? "" : "e");
          },
          w: function(c) {
            return "Woche" + (c === 1 ? "" : "n");
          },
          d: function(c) {
            return "Tag" + (c === 1 ? "" : "e");
          },
          h: function(c) {
            return "Stunde" + (c === 1 ? "" : "n");
          },
          m: function(c) {
            return "Minute" + (c === 1 ? "" : "n");
          },
          s: function(c) {
            return "Sekunde" + (c === 1 ? "" : "n");
          },
          ms: function(c) {
            return "Millisekunde" + (c === 1 ? "" : "n");
          },
          decimal: ","
        },
        el: greek,
        en: {
          y: function(c) {
            return "year" + (c === 1 ? "" : "s");
          },
          mo: function(c) {
            return "month" + (c === 1 ? "" : "s");
          },
          w: function(c) {
            return "week" + (c === 1 ? "" : "s");
          },
          d: function(c) {
            return "day" + (c === 1 ? "" : "s");
          },
          h: function(c) {
            return "hour" + (c === 1 ? "" : "s");
          },
          m: function(c) {
            return "minute" + (c === 1 ? "" : "s");
          },
          s: function(c) {
            return "second" + (c === 1 ? "" : "s");
          },
          ms: function(c) {
            return "millisecond" + (c === 1 ? "" : "s");
          },
          decimal: "."
        },
        eo: {
          y: function(c) {
            return "jaro" + (c === 1 ? "" : "j");
          },
          mo: function(c) {
            return "monato" + (c === 1 ? "" : "j");
          },
          w: function(c) {
            return "semajno" + (c === 1 ? "" : "j");
          },
          d: function(c) {
            return "tago" + (c === 1 ? "" : "j");
          },
          h: function(c) {
            return "horo" + (c === 1 ? "" : "j");
          },
          m: function(c) {
            return "minuto" + (c === 1 ? "" : "j");
          },
          s: function(c) {
            return "sekundo" + (c === 1 ? "" : "j");
          },
          ms: function(c) {
            return "milisekundo" + (c === 1 ? "" : "j");
          },
          decimal: ","
        },
        es: {
          y: function(c) {
            return "año" + (c === 1 ? "" : "s");
          },
          mo: function(c) {
            return "mes" + (c === 1 ? "" : "es");
          },
          w: function(c) {
            return "semana" + (c === 1 ? "" : "s");
          },
          d: function(c) {
            return "día" + (c === 1 ? "" : "s");
          },
          h: function(c) {
            return "hora" + (c === 1 ? "" : "s");
          },
          m: function(c) {
            return "minuto" + (c === 1 ? "" : "s");
          },
          s: function(c) {
            return "segundo" + (c === 1 ? "" : "s");
          },
          ms: function(c) {
            return "milisegundo" + (c === 1 ? "" : "s");
          },
          decimal: ","
        },
        et: {
          y: function(c) {
            return "aasta" + (c === 1 ? "" : "t");
          },
          mo: function(c) {
            return "kuu" + (c === 1 ? "" : "d");
          },
          w: function(c) {
            return "nädal" + (c === 1 ? "" : "at");
          },
          d: function(c) {
            return "päev" + (c === 1 ? "" : "a");
          },
          h: function(c) {
            return "tund" + (c === 1 ? "" : "i");
          },
          m: function(c) {
            return "minut" + (c === 1 ? "" : "it");
          },
          s: function(c) {
            return "sekund" + (c === 1 ? "" : "it");
          },
          ms: function(c) {
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
          y: function(c) {
            return c === 1 ? "vuosi" : "vuotta";
          },
          mo: function(c) {
            return c === 1 ? "kuukausi" : "kuukautta";
          },
          w: function(c) {
            return "viikko" + (c === 1 ? "" : "a");
          },
          d: function(c) {
            return "päivä" + (c === 1 ? "" : "ä");
          },
          h: function(c) {
            return "tunti" + (c === 1 ? "" : "a");
          },
          m: function(c) {
            return "minuutti" + (c === 1 ? "" : "a");
          },
          s: function(c) {
            return "sekunti" + (c === 1 ? "" : "a");
          },
          ms: function(c) {
            return "millisekunti" + (c === 1 ? "" : "a");
          },
          decimal: ","
        },
        fo: {
          y: "ár",
          mo: function(c) {
            return c === 1 ? "mánaður" : "mánaðir";
          },
          w: function(c) {
            return c === 1 ? "vika" : "vikur";
          },
          d: function(c) {
            return c === 1 ? "dagur" : "dagar";
          },
          h: function(c) {
            return c === 1 ? "tími" : "tímar";
          },
          m: function(c) {
            return c === 1 ? "minuttur" : "minuttir";
          },
          s: "sekund",
          ms: "millisekund",
          decimal: ","
        },
        fr: {
          y: function(c) {
            return "an" + (c >= 2 ? "s" : "");
          },
          mo: "mois",
          w: function(c) {
            return "semaine" + (c >= 2 ? "s" : "");
          },
          d: function(c) {
            return "jour" + (c >= 2 ? "s" : "");
          },
          h: function(c) {
            return "heure" + (c >= 2 ? "s" : "");
          },
          m: function(c) {
            return "minute" + (c >= 2 ? "s" : "");
          },
          s: function(c) {
            return "seconde" + (c >= 2 ? "s" : "");
          },
          ms: function(c) {
            return "milliseconde" + (c >= 2 ? "s" : "");
          },
          decimal: ","
        },
        gr: greek,
        he: {
          y: function(c) {
            return c === 1 ? "שנה" : "שנים";
          },
          mo: function(c) {
            return c === 1 ? "חודש" : "חודשים";
          },
          w: function(c) {
            return c === 1 ? "שבוע" : "שבועות";
          },
          d: function(c) {
            return c === 1 ? "יום" : "ימים";
          },
          h: function(c) {
            return c === 1 ? "שעה" : "שעות";
          },
          m: function(c) {
            return c === 1 ? "דקה" : "דקות";
          },
          s: function(c) {
            return c === 1 ? "שניה" : "שניות";
          },
          ms: function(c) {
            return c === 1 ? "מילישנייה" : "מילישניות";
          },
          decimal: "."
        },
        hr: {
          y: function(c) {
            if (c % 10 === 2 || c % 10 === 3 || c % 10 === 4) {
              return "godine";
            }
            return "godina";
          },
          mo: function(c) {
            if (c === 1) {
              return "mjesec";
            } else if (c === 2 || c === 3 || c === 4) {
              return "mjeseca";
            }
            return "mjeseci";
          },
          w: function(c) {
            if (c % 10 === 1 && c !== 11) {
              return "tjedan";
            }
            return "tjedna";
          },
          d: function(c) {
            return c === 1 ? "dan" : "dana";
          },
          h: function(c) {
            if (c === 1) {
              return "sat";
            } else if (c === 2 || c === 3 || c === 4) {
              return "sata";
            }
            return "sati";
          },
          m: function(c) {
            var mod10 = c % 10;
            if ((mod10 === 2 || mod10 === 3 || mod10 === 4) && (c < 10 || c > 14)) {
              return "minute";
            }
            return "minuta";
          },
          s: function(c) {
            var mod10 = c % 10;
            if (mod10 === 5 || Math.floor(c) === c && c >= 10 && c <= 19) {
              return "sekundi";
            } else if (mod10 === 1) {
              return "sekunda";
            } else if (mod10 === 2 || mod10 === 3 || mod10 === 4) {
              return "sekunde";
            }
            return "sekundi";
          },
          ms: function(c) {
            if (c === 1) {
              return "milisekunda";
            } else if (c % 10 === 2 || c % 10 === 3 || c % 10 === 4) {
              return "milisekunde";
            }
            return "milisekundi";
          },
          decimal: ","
        },
        hi: {
          y: "साल",
          mo: function(c) {
            return c === 1 ? "महीना" : "महीने";
          },
          w: function(c) {
            return c === 1 ? "हफ़्ता" : "हफ्ते";
          },
          d: "दिन",
          h: function(c) {
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
          mo: function(c) {
            return "mánuð" + (c === 1 ? "ur" : "ir");
          },
          w: function(c) {
            return "vik" + (c === 1 ? "a" : "ur");
          },
          d: function(c) {
            return "dag" + (c === 1 ? "ur" : "ar");
          },
          h: function(c) {
            return "klukkutím" + (c === 1 ? "i" : "ar");
          },
          m: function(c) {
            return "mínút" + (c === 1 ? "a" : "ur");
          },
          s: function(c) {
            return "sekúnd" + (c === 1 ? "a" : "ur");
          },
          ms: function(c) {
            return "millisekúnd" + (c === 1 ? "a" : "ur");
          },
          decimal: "."
        },
        it: {
          y: function(c) {
            return "ann" + (c === 1 ? "o" : "i");
          },
          mo: function(c) {
            return "mes" + (c === 1 ? "e" : "i");
          },
          w: function(c) {
            return "settiman" + (c === 1 ? "a" : "e");
          },
          d: function(c) {
            return "giorn" + (c === 1 ? "o" : "i");
          },
          h: function(c) {
            return "or" + (c === 1 ? "a" : "e");
          },
          m: function(c) {
            return "minut" + (c === 1 ? "o" : "i");
          },
          s: function(c) {
            return "second" + (c === 1 ? "o" : "i");
          },
          ms: function(c) {
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
          y: function(c) {
            return c === 1 ? "ವರ್ಷ" : "ವರ್ಷಗಳು";
          },
          mo: function(c) {
            return c === 1 ? "ತಿಂಗಳು" : "ತಿಂಗಳುಗಳು";
          },
          w: function(c) {
            return c === 1 ? "ವಾರ" : "ವಾರಗಳು";
          },
          d: function(c) {
            return c === 1 ? "ದಿನ" : "ದಿನಗಳು";
          },
          h: function(c) {
            return c === 1 ? "ಗಂಟೆ" : "ಗಂಟೆಗಳು";
          },
          m: function(c) {
            return c === 1 ? "ನಿಮಿಷ" : "ನಿಮಿಷಗಳು";
          },
          s: function(c) {
            return c === 1 ? "ಸೆಕೆಂಡ್" : "ಸೆಕೆಂಡುಗಳು";
          },
          ms: function(c) {
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
          y: function(c) {
            return c % 10 === 0 || c % 100 >= 10 && c % 100 <= 20 ? "metų" : "metai";
          },
          mo: function(c) {
            return ["mėnuo", "mėnesiai", "mėnesių"][getLithuanianForm(c)];
          },
          w: function(c) {
            return ["savaitė", "savaitės", "savaičių"][getLithuanianForm(c)];
          },
          d: function(c) {
            return ["diena", "dienos", "dienų"][getLithuanianForm(c)];
          },
          h: function(c) {
            return ["valanda", "valandos", "valandų"][getLithuanianForm(c)];
          },
          m: function(c) {
            return ["minutė", "minutės", "minučių"][getLithuanianForm(c)];
          },
          s: function(c) {
            return ["sekundė", "sekundės", "sekundžių"][getLithuanianForm(c)];
          },
          ms: function(c) {
            return ["milisekundė", "milisekundės", "milisekundžių"][getLithuanianForm(c)];
          },
          decimal: ","
        },
        lv: {
          y: function(c) {
            return getLatvianForm(c) ? "gads" : "gadi";
          },
          mo: function(c) {
            return getLatvianForm(c) ? "mēnesis" : "mēneši";
          },
          w: function(c) {
            return getLatvianForm(c) ? "nedēļa" : "nedēļas";
          },
          d: function(c) {
            return getLatvianForm(c) ? "diena" : "dienas";
          },
          h: function(c) {
            return getLatvianForm(c) ? "stunda" : "stundas";
          },
          m: function(c) {
            return getLatvianForm(c) ? "minūte" : "minūtes";
          },
          s: function(c) {
            return getLatvianForm(c) ? "sekunde" : "sekundes";
          },
          ms: function(c) {
            return getLatvianForm(c) ? "milisekunde" : "milisekundes";
          },
          decimal: ","
        },
        mk: {
          y: function(c) {
            return c === 1 ? "година" : "години";
          },
          mo: function(c) {
            return c === 1 ? "месец" : "месеци";
          },
          w: function(c) {
            return c === 1 ? "недела" : "недели";
          },
          d: function(c) {
            return c === 1 ? "ден" : "дена";
          },
          h: function(c) {
            return c === 1 ? "час" : "часа";
          },
          m: function(c) {
            return c === 1 ? "минута" : "минути";
          },
          s: function(c) {
            return c === 1 ? "секунда" : "секунди";
          },
          ms: function(c) {
            return c === 1 ? "милисекунда" : "милисекунди";
          },
          decimal: ","
        },
        mr: {
          y: function(c) {
            return c === 1 ? "वर्ष" : "वर्षे";
          },
          mo: function(c) {
            return c === 1 ? "महिना" : "महिने";
          },
          w: function(c) {
            return c === 1 ? "आठवडा" : "आठवडे";
          },
          d: "दिवस",
          h: "तास",
          m: function(c) {
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
          mo: function(c) {
            return c === 1 ? "maand" : "maanden";
          },
          w: function(c) {
            return c === 1 ? "week" : "weken";
          },
          d: function(c) {
            return c === 1 ? "dag" : "dagen";
          },
          h: "uur",
          m: function(c) {
            return c === 1 ? "minuut" : "minuten";
          },
          s: function(c) {
            return c === 1 ? "seconde" : "seconden";
          },
          ms: function(c) {
            return c === 1 ? "milliseconde" : "milliseconden";
          },
          decimal: ","
        },
        no: {
          y: "år",
          mo: function(c) {
            return "måned" + (c === 1 ? "" : "er");
          },
          w: function(c) {
            return "uke" + (c === 1 ? "" : "r");
          },
          d: function(c) {
            return "dag" + (c === 1 ? "" : "er");
          },
          h: function(c) {
            return "time" + (c === 1 ? "" : "r");
          },
          m: function(c) {
            return "minutt" + (c === 1 ? "" : "er");
          },
          s: function(c) {
            return "sekund" + (c === 1 ? "" : "er");
          },
          ms: function(c) {
            return "millisekund" + (c === 1 ? "" : "er");
          },
          decimal: ","
        },
        pl: {
          y: function(c) {
            return ["rok", "roku", "lata", "lat"][getPolishForm(c)];
          },
          mo: function(c) {
            return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][getPolishForm(c)];
          },
          w: function(c) {
            return ["tydzień", "tygodnia", "tygodnie", "tygodni"][getPolishForm(c)];
          },
          d: function(c) {
            return ["dzień", "dnia", "dni", "dni"][getPolishForm(c)];
          },
          h: function(c) {
            return ["godzina", "godziny", "godziny", "godzin"][getPolishForm(c)];
          },
          m: function(c) {
            return ["minuta", "minuty", "minuty", "minut"][getPolishForm(c)];
          },
          s: function(c) {
            return ["sekunda", "sekundy", "sekundy", "sekund"][getPolishForm(c)];
          },
          ms: function(c) {
            return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getPolishForm(c)];
          },
          decimal: ","
        },
        pt: {
          y: function(c) {
            return "ano" + (c === 1 ? "" : "s");
          },
          mo: function(c) {
            return c === 1 ? "mês" : "meses";
          },
          w: function(c) {
            return "semana" + (c === 1 ? "" : "s");
          },
          d: function(c) {
            return "dia" + (c === 1 ? "" : "s");
          },
          h: function(c) {
            return "hora" + (c === 1 ? "" : "s");
          },
          m: function(c) {
            return "minuto" + (c === 1 ? "" : "s");
          },
          s: function(c) {
            return "segundo" + (c === 1 ? "" : "s");
          },
          ms: function(c) {
            return "milissegundo" + (c === 1 ? "" : "s");
          },
          decimal: ","
        },
        ro: {
          y: function(c) {
            return c === 1 ? "an" : "ani";
          },
          mo: function(c) {
            return c === 1 ? "lună" : "luni";
          },
          w: function(c) {
            return c === 1 ? "săptămână" : "săptămâni";
          },
          d: function(c) {
            return c === 1 ? "zi" : "zile";
          },
          h: function(c) {
            return c === 1 ? "oră" : "ore";
          },
          m: function(c) {
            return c === 1 ? "minut" : "minute";
          },
          s: function(c) {
            return c === 1 ? "secundă" : "secunde";
          },
          ms: function(c) {
            return c === 1 ? "milisecundă" : "milisecunde";
          },
          decimal: ","
        },
        ru: {
          y: function(c) {
            return ["лет", "год", "года"][getSlavicForm(c)];
          },
          mo: function(c) {
            return ["месяцев", "месяц", "месяца"][getSlavicForm(c)];
          },
          w: function(c) {
            return ["недель", "неделя", "недели"][getSlavicForm(c)];
          },
          d: function(c) {
            return ["дней", "день", "дня"][getSlavicForm(c)];
          },
          h: function(c) {
            return ["часов", "час", "часа"][getSlavicForm(c)];
          },
          m: function(c) {
            return ["минут", "минута", "минуты"][getSlavicForm(c)];
          },
          s: function(c) {
            return ["секунд", "секунда", "секунды"][getSlavicForm(c)];
          },
          ms: function(c) {
            return ["миллисекунд", "миллисекунда", "миллисекунды"][getSlavicForm(c)];
          },
          decimal: ","
        },
        sq: {
          y: function(c) {
            return c === 1 ? "vit" : "vjet";
          },
          mo: "muaj",
          w: "javë",
          d: "ditë",
          h: "orë",
          m: function(c) {
            return "minut" + (c === 1 ? "ë" : "a");
          },
          s: function(c) {
            return "sekond" + (c === 1 ? "ë" : "a");
          },
          ms: function(c) {
            return "milisekond" + (c === 1 ? "ë" : "a");
          },
          decimal: ","
        },
        sr: {
          y: function(c) {
            return ["години", "година", "године"][getSlavicForm(c)];
          },
          mo: function(c) {
            return ["месеци", "месец", "месеца"][getSlavicForm(c)];
          },
          w: function(c) {
            return ["недељи", "недеља", "недеље"][getSlavicForm(c)];
          },
          d: function(c) {
            return ["дани", "дан", "дана"][getSlavicForm(c)];
          },
          h: function(c) {
            return ["сати", "сат", "сата"][getSlavicForm(c)];
          },
          m: function(c) {
            return ["минута", "минут", "минута"][getSlavicForm(c)];
          },
          s: function(c) {
            return ["секунди", "секунда", "секунде"][getSlavicForm(c)];
          },
          ms: function(c) {
            return ["милисекунди", "милисекунда", "милисекунде"][getSlavicForm(c)];
          },
          decimal: ","
        },
        ta: {
          y: function(c) {
            return c === 1 ? "வருடம்" : "ஆண்டுகள்";
          },
          mo: function(c) {
            return c === 1 ? "மாதம்" : "மாதங்கள்";
          },
          w: function(c) {
            return c === 1 ? "வாரம்" : "வாரங்கள்";
          },
          d: function(c) {
            return c === 1 ? "நாள்" : "நாட்கள்";
          },
          h: function(c) {
            return c === 1 ? "மணி" : "மணிநேரம்";
          },
          m: function(c) {
            return "நிமிட" + (c === 1 ? "ம்" : "ங்கள்");
          },
          s: function(c) {
            return "வினாடி" + (c === 1 ? "" : "கள்");
          },
          ms: function(c) {
            return "மில்லி விநாடி" + (c === 1 ? "" : "கள்");
          }
        },
        te: {
          y: function(c) {
            return "సంవత్స" + (c === 1 ? "రం" : "రాల");
          },
          mo: function(c) {
            return "నెల" + (c === 1 ? "" : "ల");
          },
          w: function(c) {
            return c === 1 ? "వారం" : "వారాలు";
          },
          d: function(c) {
            return "రోజు" + (c === 1 ? "" : "లు");
          },
          h: function(c) {
            return "గంట" + (c === 1 ? "" : "లు");
          },
          m: function(c) {
            return c === 1 ? "నిమిషం" : "నిమిషాలు";
          },
          s: function(c) {
            return c === 1 ? "సెకను" : "సెకన్లు";
          },
          ms: function(c) {
            return c === 1 ? "మిల్లీసెకన్" : "మిల్లీసెకన్లు";
          }
        },
        uk: {
          y: function(c) {
            return ["років", "рік", "роки"][getSlavicForm(c)];
          },
          mo: function(c) {
            return ["місяців", "місяць", "місяці"][getSlavicForm(c)];
          },
          w: function(c) {
            return ["тижнів", "тиждень", "тижні"][getSlavicForm(c)];
          },
          d: function(c) {
            return ["днів", "день", "дні"][getSlavicForm(c)];
          },
          h: function(c) {
            return ["годин", "година", "години"][getSlavicForm(c)];
          },
          m: function(c) {
            return ["хвилин", "хвилина", "хвилини"][getSlavicForm(c)];
          },
          s: function(c) {
            return ["секунд", "секунда", "секунди"][getSlavicForm(c)];
          },
          ms: function(c) {
            return ["мілісекунд", "мілісекунда", "мілісекунди"][getSlavicForm(c)];
          },
          decimal: ","
        },
        ur: {
          y: "سال",
          mo: function(c) {
            return c === 1 ? "مہینہ" : "مہینے";
          },
          w: function(c) {
            return c === 1 ? "ہفتہ" : "ہفتے";
          },
          d: "دن",
          h: function(c) {
            return c === 1 ? "گھنٹہ" : "گھنٹے";
          },
          m: "منٹ",
          s: "سیکنڈ",
          ms: "ملی سیکنڈ",
          decimal: "."
        },
        sk: {
          y: function(c) {
            return ["rok", "roky", "roky", "rokov"][getCzechOrSlovakForm(c)];
          },
          mo: function(c) {
            return ["mesiac", "mesiace", "mesiace", "mesiacov"][getCzechOrSlovakForm(c)];
          },
          w: function(c) {
            return ["týždeň", "týždne", "týždne", "týždňov"][getCzechOrSlovakForm(c)];
          },
          d: function(c) {
            return ["deň", "dni", "dni", "dní"][getCzechOrSlovakForm(c)];
          },
          h: function(c) {
            return ["hodina", "hodiny", "hodiny", "hodín"][getCzechOrSlovakForm(c)];
          },
          m: function(c) {
            return ["minúta", "minúty", "minúty", "minút"][getCzechOrSlovakForm(c)];
          },
          s: function(c) {
            return ["sekunda", "sekundy", "sekundy", "sekúnd"][getCzechOrSlovakForm(c)];
          },
          ms: function(c) {
            return ["milisekunda", "milisekundy", "milisekundy", "milisekúnd"][getCzechOrSlovakForm(c)];
          },
          decimal: ","
        },
        sl: {
          y: function(c) {
            if (c % 10 === 1) {
              return "leto";
            } else if (c % 100 === 2) {
              return "leti";
            } else if (c % 100 === 3 || c % 100 === 4 || Math.floor(c) !== c && c % 100 <= 5) {
              return "leta";
            } else {
              return "let";
            }
          },
          mo: function(c) {
            if (c % 10 === 1) {
              return "mesec";
            } else if (c % 100 === 2 || Math.floor(c) !== c && c % 100 <= 5) {
              return "meseca";
            } else if (c % 10 === 3 || c % 10 === 4) {
              return "mesece";
            } else {
              return "mesecev";
            }
          },
          w: function(c) {
            if (c % 10 === 1) {
              return "teden";
            } else if (c % 10 === 2 || Math.floor(c) !== c && c % 100 <= 4) {
              return "tedna";
            } else if (c % 10 === 3 || c % 10 === 4) {
              return "tedne";
            } else {
              return "tednov";
            }
          },
          d: function(c) {
            return c % 100 === 1 ? "dan" : "dni";
          },
          h: function(c) {
            if (c % 10 === 1) {
              return "ura";
            } else if (c % 100 === 2) {
              return "uri";
            } else if (c % 10 === 3 || c % 10 === 4 || Math.floor(c) !== c) {
              return "ure";
            } else {
              return "ur";
            }
          },
          m: function(c) {
            if (c % 10 === 1) {
              return "minuta";
            } else if (c % 10 === 2) {
              return "minuti";
            } else if (c % 10 === 3 || c % 10 === 4 || Math.floor(c) !== c && c % 100 <= 4) {
              return "minute";
            } else {
              return "minut";
            }
          },
          s: function(c) {
            if (c % 10 === 1) {
              return "sekunda";
            } else if (c % 100 === 2) {
              return "sekundi";
            } else if (c % 100 === 3 || c % 100 === 4 || Math.floor(c) !== c) {
              return "sekunde";
            } else {
              return "sekund";
            }
          },
          ms: function(c) {
            if (c % 10 === 1) {
              return "milisekunda";
            } else if (c % 100 === 2) {
              return "milisekundi";
            } else if (c % 100 === 3 || c % 100 === 4 || Math.floor(c) !== c) {
              return "milisekunde";
            } else {
              return "milisekund";
            }
          },
          decimal: ","
        },
        sv: {
          y: "år",
          mo: function(c) {
            return "månad" + (c === 1 ? "" : "er");
          },
          w: function(c) {
            return "veck" + (c === 1 ? "a" : "or");
          },
          d: function(c) {
            return "dag" + (c === 1 ? "" : "ar");
          },
          h: function(c) {
            return "timm" + (c === 1 ? "e" : "ar");
          },
          m: function(c) {
            return "minut" + (c === 1 ? "" : "er");
          },
          s: function(c) {
            return "sekund" + (c === 1 ? "" : "er");
          },
          ms: function(c) {
            return "millisekund" + (c === 1 ? "" : "er");
          },
          decimal: ","
        },
        sw: {
          y: function(c) {
            return c === 1 ? "mwaka" : "miaka";
          },
          mo: function(c) {
            return c === 1 ? "mwezi" : "miezi";
          },
          w: "wiki",
          d: function(c) {
            return c === 1 ? "siku" : "masiku";
          },
          h: function(c) {
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
        var result = function humanizer2(ms, humanizerOptions) {
          var options = assign({}, result, humanizerOptions || {});
          return doHumanization(ms, options);
        };
        return assign(
          result,
          {
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
          },
          passedOptions
        );
      }
      var humanizeDuration2 = humanizer({});
      function getDictionary(options) {
        var languagesFromOptions = [options.language];
        if (has(options, "fallbacks")) {
          if (isArray(options.fallbacks) && options.fallbacks.length) {
            languagesFromOptions = languagesFromOptions.concat(options.fallbacks);
          } else {
            throw new Error("fallbacks must be an array with at least one element");
          }
        }
        for (var i = 0; i < languagesFromOptions.length; i++) {
          var languageToTry = languagesFromOptions[i];
          if (has(options.languages, languageToTry)) {
            return options.languages[languageToTry];
          } else if (has(LANGUAGES, languageToTry)) {
            return LANGUAGES[languageToTry];
          }
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
              unitCount = parseFloat(
                (Math.floor(expValue * unitCountFloat) / expValue).toFixed(
                  options.maxDecimalPoints
                )
              );
            } else {
              unitCount = ms / unitMS;
            }
          } else {
            unitCount = Math.floor(ms / unitMS);
          }
          pieces.push({
            unitCount,
            unitName
          });
          ms -= unitCount * unitMS;
        }
        var firstOccupiedUnitIndex = 0;
        for (i = 0; i < pieces.length; i++) {
          if (pieces[i].unitCount) {
            firstOccupiedUnitIndex = i;
            break;
          }
        }
        if (options.round) {
          var ratioToLargerUnit, previousPiece;
          for (i = pieces.length - 1; i >= 0; i--) {
            piece = pieces[i];
            piece.unitCount = Math.round(piece.unitCount);
            if (i === 0) {
              break;
            }
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
          if (piece.unitCount) {
            result.push(
              render(piece.unitCount, piece.unitName, dictionary, options)
            );
          }
          if (result.length === options.largest) {
            break;
          }
        }
        if (result.length) {
          var delimiter;
          if (has(options, "delimiter")) {
            delimiter = options.delimiter;
          } else if (has(dictionary, "delimiter")) {
            delimiter = dictionary.delimiter;
          } else {
            delimiter = ", ";
          }
          if (!options.conjunction || result.length === 1) {
            return result.join(delimiter);
          } else if (result.length === 2) {
            return result.join(options.conjunction);
          } else if (result.length > 2) {
            return result.slice(0, -1).join(delimiter) + (options.serialComma ? "," : "") + options.conjunction + result.slice(-1);
          }
        } else {
          return render(
            0,
            options.units[options.units.length - 1],
            dictionary,
            options
          );
        }
      }
      function render(count, type, dictionary, options) {
        var decimal;
        if (has(options, "decimal")) {
          decimal = options.decimal;
        } else if (has(dictionary, "decimal")) {
          decimal = dictionary.decimal;
        } else {
          decimal = ".";
        }
        var countStr;
        if (typeof dictionary._formatCount === "function") {
          countStr = dictionary._formatCount(count, decimal);
        } else {
          countStr = count.toString().replace(".", decimal);
        }
        var dictionaryValue = dictionary[type];
        var word;
        if (typeof dictionaryValue === "function") {
          word = dictionaryValue(count);
        } else {
          word = dictionaryValue;
        }
        if (dictionary._numberFirst) {
          return word + options.spacer + countStr;
        }
        return countStr + options.spacer + word;
      }
      function assign(destination) {
        var source;
        for (var i = 1; i < arguments.length; i++) {
          source = arguments[i];
          for (var prop in source) {
            if (has(source, prop)) {
              destination[prop] = source[prop];
            }
          }
        }
        return destination;
      }
      function getArabicForm(c) {
        if (c === 1) {
          return 0;
        }
        if (c === 2) {
          return 1;
        }
        if (c > 2 && c < 11) {
          return 2;
        }
        return 0;
      }
      function getPolishForm(c) {
        if (c === 1) {
          return 0;
        } else if (Math.floor(c) !== c) {
          return 1;
        } else if (c % 10 >= 2 && c % 10 <= 4 && !(c % 100 > 10 && c % 100 < 20)) {
          return 2;
        } else {
          return 3;
        }
      }
      function getSlavicForm(c) {
        if (Math.floor(c) !== c) {
          return 2;
        } else if (c % 100 >= 5 && c % 100 <= 20 || c % 10 >= 5 && c % 10 <= 9 || c % 10 === 0) {
          return 0;
        } else if (c % 10 === 1) {
          return 1;
        } else if (c > 1) {
          return 2;
        } else {
          return 0;
        }
      }
      function getCzechOrSlovakForm(c) {
        if (c === 1) {
          return 0;
        } else if (Math.floor(c) !== c) {
          return 1;
        } else if (c % 10 >= 2 && c % 10 <= 4 && c % 100 < 10) {
          return 2;
        } else {
          return 3;
        }
      }
      function getLithuanianForm(c) {
        if (c === 1 || c % 10 === 1 && c % 100 > 20) {
          return 0;
        } else if (Math.floor(c) !== c || c % 10 >= 2 && c % 100 > 20 || c % 10 >= 2 && c % 100 < 10) {
          return 1;
        } else {
          return 2;
        }
      }
      function getLatvianForm(c) {
        return c % 10 === 1 && c % 100 !== 11;
      }
      var isArray = Array.isArray || function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
      };
      function has(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      humanizeDuration2.getSupportedLanguages = function getSupportedLanguages() {
        var result = [];
        for (var language in LANGUAGES) {
          if (has(LANGUAGES, language) && language !== "gr") {
            result.push(language);
          }
        }
        return result;
      };
      humanizeDuration2.humanizer = humanizer;
      if (module.exports) {
        module.exports = humanizeDuration2;
      } else {
        this.humanizeDuration = humanizeDuration2;
      }
    })();
  })(humanizeDuration$1);
  return humanizeDuration$1.exports;
}
var humanizeDurationExports = requireHumanizeDuration();
const humanizeDuration = /* @__PURE__ */ getDefaultExportFromCjs(humanizeDurationExports);
const E = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of o)
    t[n] = s;
  return t;
}, C = {}, j = (e) => (pushScopeId("data-v-259be2b2"), e = e(), popScopeId(), e), M = { class: "container" }, T = /* @__PURE__ */ j(() => /* @__PURE__ */ createBaseVNode("div", { class: "spinner" }, null, -1)), V = [
  T
];
function W(e, o) {
  return openBlock(), createElementBlock("div", M, V);
}
const D = /* @__PURE__ */ E(C, [["render", W], ["__scopeId", "data-v-259be2b2"], ["__file", "/home/oumoussa/side-projects/infinite/src/components/Spinner.vue"]]), U = (e) => ({
  loading() {
    e.value = "loading";
  },
  loaded() {
    e.value = "loaded";
  },
  complete() {
    e.value = "complete";
  },
  error() {
    e.value = "error";
  }
}), z = (e, o, t) => () => {
  const n = t.parentEl || document.documentElement;
  t.prevHeight = n.scrollHeight, o.loading(), e("infinite", o);
}, A = (e, o) => {
  const t = e.getBoundingClientRect();
  if (!o)
    return t.top >= 0 && t.bottom <= window.innerHeight;
  const n = o.getBoundingClientRect();
  return t.top >= n.top && t.bottom <= n.bottom;
}, y = (e) => {
  e.parentEl = document.querySelector(e.target) || null;
  let o = `0px 0px ${e.distance}px 0px`;
  e.top && (o = `${e.distance}px 0px 0px 0px`);
  const t = new IntersectionObserver(
    (n) => {
      n[0].isIntersecting && (e.firstload && e.emit(), e.firstload = true);
    },
    { root: e.parentEl, rootMargin: o }
  );
  return t.observe(e.infiniteLoading.value), t;
};
const F = { class: "state-error" }, G = {
  __name: "InfiniteLoading",
  props: {
    top: { type: Boolean, required: false },
    target: { type: [String, Boolean], required: false },
    distance: { type: Number, required: false, default: 0 },
    identifier: { required: false },
    firstload: { type: Boolean, required: false, default: true },
    slots: { type: Object, required: false }
  },
  emits: ["infinite"],
  setup(e, { emit: o }) {
    const t = e;
    let n = null;
    const s = ref(null), l = ref("ready"), { top: f, firstload: x, target: I, distance: S } = t, { identifier: _ } = toRefs(t), i = {
      infiniteLoading: s,
      target: I,
      top: f,
      firstload: x,
      distance: S,
      prevHeight: 0,
      parentEl: null
    };
    i.emit = z(o, U(l), i);
    const k = () => watch(l, async (r) => {
      const c = i.parentEl || document.documentElement;
      await nextTick(), r == "loaded" && f && (c.scrollTop = c.scrollHeight - i.prevHeight), r == "loaded" && A(s.value, i.parentEl) && i.emit(), r == "complete" && n.disconnect();
    }), q = () => watch(_, () => {
      l.value = "ready", n.disconnect(), n = y(i);
    });
    return onMounted(() => {
      n = y(i), k(), _ && q();
    }), onUnmounted(() => {
      n.disconnect();
    }), (r, c) => (openBlock(), createElementBlock("div", {
      ref_key: "infiniteLoading",
      ref: s
    }, [
      l.value == "loading" ? renderSlot(r.$slots, "spinner", { key: 0 }, () => [
        createVNode(D)
      ], true) : createCommentVNode("v-if", true),
      l.value == "complete" ? renderSlot(r.$slots, "complete", { key: 1 }, () => {
        var d;
        return [
          createBaseVNode("span", null, toDisplayString(((d = e.slots) == null ? void 0 : d.complete) || "No more results!"), 1)
        ];
      }, true) : createCommentVNode("v-if", true),
      l.value == "error" ? renderSlot(r.$slots, "error", {
        key: 2,
        retry: i.emit
      }, () => {
        var d;
        return [
          createBaseVNode("span", F, [
            createBaseVNode("span", null, toDisplayString(((d = e.slots) == null ? void 0 : d.error) || "Oops something went wrong!"), 1),
            createBaseVNode("button", {
              class: "retry",
              onClick: c[0] || (c[0] = (...B) => i.emit && i.emit(...B))
            }, " retry ")
          ])
        ];
      }, true) : createCommentVNode("v-if", true)
    ], 512));
  }
}, K = /* @__PURE__ */ E(G, [["__scopeId", "data-v-9d82030b"], ["__file", "/home/oumoussa/side-projects/infinite/src/components/InfiniteLoading.vue"]]);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "pb-3xl" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const cellClassStyle = ({ row, column }) => {
      if (column.property === "status") {
        if (row.status === "Success") {
          return { color: "green" };
        } else if (row.status === "Error") {
          return { color: "red" };
        }
      }
      if (column.property === "runMode") {
        if (row.runMode === "Dry") {
          return { color: "orange" };
        } else if (row.runMode === "Live") {
          return { color: "blue" };
        }
      }
      return {};
    };
    const onInput = (input) => {
      if (input.name === "loginEnabled" && typeof input.value === "boolean") {
        loginEnabled.value = input.value;
      }
      if (input.name === "synchronizationEnabled" && typeof input.value === "boolean") {
        syncEnabled.value = input.value;
      }
      hasAnyChanges.value = true;
    };
    const onReadyToSubmit = (ready) => {
      readyToSubmit.value = ready;
    };
    const syncDataMapper = (sync) => {
      const startedAt = new Date(sync.startedAt);
      const endedAt = new Date(sync.endedAt);
      const runTimeInMinutes = endedAt.getTime() - startedAt.getTime();
      return {
        runTime: humanizeDuration(runTimeInMinutes),
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
      if (!hasAnyChanges.value || !ldapConfigFormRef.value) {
        return;
      }
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
        if (adConfig.value.loginEnabled && !newConfiguration.loginEnabled) {
          const confirmAction = await message.confirm(
            i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.message"),
            i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.headline"),
            {
              cancelButtonText: i18n.baseText(
                "settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"
              ),
              confirmButtonText: i18n.baseText(
                "settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText"
              )
            }
          );
          saveForm = confirmAction === MODAL_CONFIRM;
        }
        if (!saveForm) {
          hasAnyChanges.value = true;
        }
        adConfig.value = await ssoStore.updateLdapConfig(newConfiguration);
        toast.showToast({
          title: i18n.baseText("settings.ldap.updateConfiguration"),
          message: "",
          type: "success"
        });
      } catch (error) {
        toast.showError(error, i18n.baseText("settings.ldap.configurationError"));
      } finally {
        if (saveForm) {
          hasAnyChanges.value = false;
        }
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
        await ssoStore.runLdapSync({ type: "dry" });
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
        await ssoStore.runLdapSync({ type: "live" });
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
        const whenLoginEnabled = (values) => values.loginEnabled === true;
        const whenSyncAndLoginEnabled = (values) => values.synchronizationEnabled === true && values.loginEnabled === true;
        const whenAdminBindingAndLoginEnabled = (values) => values.bindingType === "admin" && values.loginEnabled === true;
        formInputs.value = [
          {
            name: "loginEnabled",
            initialValue: adConfig.value.loginEnabled,
            properties: {
              type: "toggle",
              label: i18n.baseText("settings.ldap.form.loginEnabled.label"),
              tooltipText: i18n.baseText("settings.ldap.form.loginEnabled.tooltip"),
              required: true
            }
          },
          {
            name: "loginLabel",
            initialValue: adConfig.value.loginLabel,
            properties: {
              label: i18n.baseText("settings.ldap.form.loginLabel.label"),
              required: true,
              placeholder: i18n.baseText("settings.ldap.form.loginLabel.placeholder"),
              infoText: i18n.baseText("settings.ldap.form.loginLabel.infoText")
            },
            shouldDisplay: whenLoginEnabled
          },
          {
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
          },
          {
            name: "port",
            initialValue: adConfig.value.connectionPort,
            properties: {
              type: "number",
              label: i18n.baseText("settings.ldap.form.port.label"),
              capitalize: true,
              infoText: i18n.baseText("settings.ldap.form.port.infoText")
            },
            shouldDisplay: whenLoginEnabled
          },
          {
            name: "connectionSecurity",
            initialValue: adConfig.value.connectionSecurity,
            properties: {
              type: "select",
              label: i18n.baseText("settings.ldap.form.connectionSecurity.label"),
              infoText: i18n.baseText("settings.ldap.form.connectionSecurity.infoText"),
              options: [
                {
                  label: "None",
                  value: "none"
                },
                {
                  label: "TLS",
                  value: "tls"
                },
                {
                  label: "STARTTLS",
                  value: "startTls"
                }
              ],
              required: true,
              capitalize: true
            },
            shouldDisplay: whenLoginEnabled
          },
          {
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
          },
          {
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
          },
          {
            name: "bindingType",
            initialValue: "admin",
            properties: {
              type: "select",
              label: i18n.baseText("settings.ldap.form.bindingType.label"),
              infoText: i18n.baseText("settings.ldap.form.bindingType.infoText"),
              options: [
                {
                  value: "admin",
                  label: "Admin"
                },
                {
                  value: "anonymous",
                  label: "Anonymous"
                }
              ]
            },
            shouldDisplay: whenLoginEnabled
          },
          {
            name: "adminDn",
            initialValue: adConfig.value.bindingAdminDn,
            properties: {
              label: i18n.baseText("settings.ldap.form.adminDn.label"),
              placeholder: i18n.baseText("settings.ldap.form.adminDn.placeholder"),
              infoText: i18n.baseText("settings.ldap.form.adminDn.infoText"),
              capitalize: true
            },
            shouldDisplay: whenAdminBindingAndLoginEnabled
          },
          {
            name: "adminPassword",
            initialValue: adConfig.value.bindingAdminPassword,
            properties: {
              label: i18n.baseText("settings.ldap.form.adminPassword.label"),
              type: "password",
              capitalize: true,
              infoText: i18n.baseText("settings.ldap.form.adminPassword.infoText")
            },
            shouldDisplay: whenAdminBindingAndLoginEnabled
          },
          {
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
          },
          {
            name: "attributeMappingInfo",
            properties: {
              label: i18n.baseText("settings.ldap.form.attributeMappingInfo.label"),
              type: "info",
              labelSize: "large",
              labelAlignment: "left"
            },
            shouldDisplay: whenLoginEnabled
          },
          {
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
          },
          {
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
          },
          {
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
          },
          {
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
          },
          {
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
          },
          {
            name: "synchronizationEnabled",
            initialValue: adConfig.value.synchronizationEnabled,
            properties: {
              type: "toggle",
              label: i18n.baseText("settings.ldap.form.synchronizationEnabled.label"),
              tooltipText: i18n.baseText("settings.ldap.form.synchronizationEnabled.tooltip"),
              required: true
            },
            shouldDisplay: whenLoginEnabled
          },
          {
            name: "synchronizationInterval",
            initialValue: adConfig.value.synchronizationInterval,
            properties: {
              type: "number",
              label: i18n.baseText("settings.ldap.form.synchronizationInterval.label"),
              infoText: i18n.baseText("settings.ldap.form.synchronizationInterval.infoText")
            },
            shouldDisplay: whenSyncAndLoginEnabled
          },
          {
            name: "pageSize",
            initialValue: adConfig.value.searchPageSize,
            properties: {
              type: "number",
              label: i18n.baseText("settings.ldap.form.pageSize.label"),
              infoText: i18n.baseText("settings.ldap.form.pageSize.infoText")
            },
            shouldDisplay: whenSyncAndLoginEnabled
          },
          {
            name: "searchTimeout",
            initialValue: adConfig.value.searchTimeout,
            properties: {
              type: "number",
              label: i18n.baseText("settings.ldap.form.searchTimeout.label"),
              infoText: i18n.baseText("settings.ldap.form.searchTimeout.infoText")
            },
            shouldDisplay: whenSyncAndLoginEnabled
          }
        ];
      } catch (error) {
        toast.showError(error, i18n.baseText("settings.ldap.configurationError"));
      }
    };
    const getLdapSynchronizations = async (state) => {
      try {
        loadingTable.value = true;
        const data = await ssoStore.getLdapSynchronizations({
          page: page.value
        });
        if (data.length !== 0) {
          dataTable.value.push(...data.map(syncDataMapper));
          page.value += 1;
          state.loaded();
        } else {
          state.complete();
        }
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
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_info_tip = InfoTip;
      const _component_n8n_action_box = N8nActionBox;
      const _component_n8n_form_inputs = N8nFormInputs;
      const _component_n8n_button = N8nButton;
      const _directive_n8n_html = resolveDirective("n8n-html");
      const _directive_loading = resolveDirective("loading");
      return !isLDAPFeatureEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass([_ctx.$style.header, "mb-2xl"])
        }, [
          createVNode(_component_n8n_heading, { size: "2xlarge" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap")), 1)
            ]),
            _: 1
          })
        ], 2),
        createVNode(_component_n8n_info_tip, {
          type: "note",
          theme: "info",
          "tooltip-placement": "right",
          class: "mb-l"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap.note")), 1)
          ]),
          _: 1
        }),
        createVNode(_component_n8n_action_box, {
          description: unref(i18n).baseText("settings.ldap.disabled.description"),
          "button-text": unref(i18n).baseText("settings.ldap.disabled.buttonText"),
          "onClick:button": goToUpgrade
        }, {
          heading: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.ldap.disabled.title")), 1)
          ]),
          _: 1
        }, 8, ["description", "button-text"])
      ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.container)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.header)
          }, [
            createVNode(_component_n8n_heading, { size: "2xlarge" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap")), 1)
              ]),
              _: 1
            })
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.docsInfoTip)
          }, [
            createVNode(_component_n8n_info_tip, {
              theme: "info",
              type: "note"
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("span", null, null, 512), [
                  [_directive_n8n_html, unref(i18n).baseText("settings.ldap.infoTip")]
                ])
              ]),
              _: 1
            })
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.settingsForm)
          }, [
            formInputs.value ? (openBlock(), createBlock(_component_n8n_form_inputs, {
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
            }, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true)
          ], 2),
          createBaseVNode("div", null, [
            loginEnabled.value ? (openBlock(), createBlock(_component_n8n_button, {
              key: 0,
              label: loadingTestConnection.value ? unref(i18n).baseText("settings.ldap.testingConnection") : unref(i18n).baseText("settings.ldap.testConnection"),
              size: "large",
              class: "mr-s",
              disabled: hasAnyChanges.value || !readyToSubmit.value,
              loading: loadingTestConnection.value,
              onClick: onTestConnectionClick
            }, null, 8, ["label", "disabled", "loading"])) : createCommentVNode("", true),
            createVNode(_component_n8n_button, {
              label: unref(i18n).baseText("settings.ldap.save"),
              size: "large",
              disabled: !hasAnyChanges.value || !readyToSubmit.value,
              onClick: onSaveClick
            }, null, 8, ["label", "disabled"])
          ])
        ], 2),
        loginEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode(_component_n8n_heading, {
            tag: "h1",
            class: "mb-xl mt-3xl",
            size: "medium"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap.section.synchronization.title")), 1)
            ]),
            _: 1
          }),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.syncTable)
          }, [
            withDirectives((openBlock(), createBlock(unref(ElTable), {
              key: tableKey.value,
              border: true,
              stripe: true,
              data: dataTable.value,
              "cell-style": cellClassStyle,
              style: { "width": "100%" },
              "max-height": "250"
            }, {
              empty: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.ldap.synchronizationTable.empty.message")), 1)
              ]),
              append: withCtx(() => [
                createVNode(unref(K), {
                  target: ".el-table__body-wrapper",
                  onInfinite: getLdapSynchronizations
                })
              ]),
              default: withCtx(() => [
                createVNode(unref(ElTableColumn), {
                  prop: "status",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.status")
                }, null, 8, ["label"]),
                createVNode(unref(ElTableColumn), {
                  prop: "endedAt",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.endedAt")
                }, null, 8, ["label"]),
                createVNode(unref(ElTableColumn), {
                  prop: "runMode",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.runMode")
                }, null, 8, ["label"]),
                createVNode(unref(ElTableColumn), {
                  prop: "runTime",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.runTime")
                }, null, 8, ["label"]),
                createVNode(unref(ElTableColumn), {
                  prop: "details",
                  label: unref(i18n).baseText("settings.ldap.synchronizationTable.column.details")
                }, null, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"])), [
              [_directive_loading, loadingTable.value]
            ])
          ], 2),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_n8n_button, {
              label: unref(i18n).baseText("settings.ldap.dryRun"),
              type: "secondary",
              size: "large",
              class: "mr-s",
              disabled: hasAnyChanges.value || !readyToSubmit.value,
              loading: loadingDryRun.value,
              onClick: onDryRunClick
            }, null, 8, ["label", "disabled", "loading"]),
            createVNode(_component_n8n_button, {
              label: unref(i18n).baseText("settings.ldap.synchronizeNow"),
              size: "large",
              disabled: hasAnyChanges.value || !readyToSubmit.value,
              loading: loadingLiveRun.value,
              onClick: onLiveRunClick
            }, null, 8, ["label", "disabled", "loading"])
          ])
        ])) : createCommentVNode("", true)
      ]));
    };
  }
});
const container = "_container_1bp01_123";
const syncTable = "_syncTable_1bp01_127";
const header = "_header_1bp01_131";
const enableFeatureContainer = "_enableFeatureContainer_1bp01_140";
const sectionHeader = "_sectionHeader_1bp01_152";
const settingsForm = "_settingsForm_1bp01_156";
const docsInfoTip = "_docsInfoTip_1bp01_160";
const style0 = {
  container,
  syncTable,
  header,
  enableFeatureContainer,
  sectionHeader,
  settingsForm,
  docsInfoTip
};
const cssModules = {
  "$style": style0
};
const SettingsLdapView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsLdapView as default
};

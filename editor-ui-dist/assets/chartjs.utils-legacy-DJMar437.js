;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./_MapCache-legacy-CVC6fg6H.js", "./merge-legacy-C_ujDigB.js", "./smartDecimal-legacy-BeOdMR2z.js"], function (_export, _context) {
    "use strict";

    var __toESM, useCssVar, require_merge, smartDecimal, import_merge, generateLinearGradient, generateLineChartOptions, generateBarChartOptions;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_MapCacheLegacy005Js) {
        useCssVar = _MapCacheLegacy005Js.C;
      }, function (_mergeLegacy00PJs) {
        require_merge = _mergeLegacy00PJs.t;
      }, function (_smartDecimalLegacy04zJs) {
        smartDecimal = _smartDecimalLegacy04zJs.t;
      }],
      execute: function () {
        //#region src/features/execution/insights/chartjs.utils.ts
        import_merge = /* @__PURE__ */__toESM(require_merge());
        /**
        *
        * Chart js configuration
        */
        _export("r", generateLinearGradient = (ctx, height) => {
          const gradient = ctx.createLinearGradient(0, 0, 0, height);
          gradient.addColorStop(0, "rgba(255, 111,92, 1)");
          gradient.addColorStop(.8, "rgba(255, 111, 92, 0.25)");
          gradient.addColorStop(1, "rgba(255, 111, 92, 0)");
          return gradient;
        });
        _export("n", generateLineChartOptions = (overrides = {}) => {
          const colorTextDark = useCssVar("--color--text--shade-1", document.body);
          const colorBackgroundLight = useCssVar("--color--background--light-3", document.body);
          const colorForeGroundBase = useCssVar("--color--foreground", document.body);
          const colorTextLight = useCssVar("--color--text--tint-1", document.body);
          return (0, import_merge.default)({
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                caretSize: 0,
                xAlign: "center",
                yAlign: "bottom",
                padding: 16,
                titleFont: {
                  size: 14
                },
                bodyFont: {
                  size: 14
                },
                backgroundColor: colorBackgroundLight.value,
                titleColor: colorTextDark.value,
                bodyColor: colorTextDark.value,
                borderWidth: 1,
                borderColor: colorForeGroundBase.value,
                callbacks: {
                  label(context) {
                    return `${context.dataset.label ?? ""} ${smartDecimal(context.parsed.y).toLocaleString("en-US")}`;
                  },
                  labelColor(context) {
                    return {
                      borderColor: "rgba(0, 0, 0, 0)",
                      backgroundColor: context.dataset.backgroundColor,
                      borderWidth: 0,
                      borderRadius: 2
                    };
                  }
                }
              }
            },
            interaction: {
              mode: "nearest",
              axis: "x",
              intersect: false
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                stacked: true,
                beginAtZero: true,
                border: {
                  display: false
                },
                ticks: {
                  color: colorTextLight.value
                }
              },
              y: {
                grid: {
                  color: colorForeGroundBase.value
                },
                stacked: true,
                border: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 3,
                  color: colorTextLight.value
                }
              }
            }
          }, overrides);
        });
        _export("t", generateBarChartOptions = (overrides = {}) => {
          const colorTextLight = useCssVar("--color--text--tint-1", document.body);
          const colorTextDark = useCssVar("--color--text--shade-1", document.body);
          const colorBackgroundLight = useCssVar("--color--background--light-3", document.body);
          const colorForeGroundBase = useCssVar("--color--foreground", document.body);
          return (0, import_merge.default)({
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: {
              legend: {
                display: true,
                align: "end",
                reverse: true,
                position: "top",
                labels: {
                  boxWidth: 8,
                  boxHeight: 8,
                  borderRadius: 2,
                  useBorderRadius: true,
                  color: colorTextLight.value
                }
              },
              tooltip: {
                caretSize: 0,
                xAlign: "center",
                yAlign: "bottom",
                padding: 16,
                titleFont: {
                  size: 14
                },
                bodyFont: {
                  size: 14
                },
                backgroundColor: colorBackgroundLight.value,
                titleColor: colorTextDark.value,
                bodyColor: colorTextDark.value,
                borderWidth: 1,
                borderColor: colorForeGroundBase.value,
                callbacks: {
                  label(context) {
                    return `${context.dataset.label ?? ""} ${context.parsed.y}`;
                  },
                  labelColor(context) {
                    return {
                      borderColor: "rgba(0, 0, 0, 0)",
                      backgroundColor: context.dataset.backgroundColor,
                      borderWidth: 0,
                      borderRadius: 2
                    };
                  }
                }
              }
            },
            interaction: {
              mode: "nearest",
              axis: "x",
              intersect: false
            },
            datasets: {
              bar: {
                maxBarThickness: 32,
                borderRadius: 4
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                stacked: true,
                beginAtZero: true,
                border: {
                  display: false
                },
                ticks: {
                  color: colorTextLight.value
                }
              },
              y: {
                grid: {
                  color: colorForeGroundBase.value
                },
                stacked: true,
                border: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 3,
                  color: colorTextLight.value
                }
              }
            }
          }, overrides);
        }); //#endregion
      }
    };
  });
})();
import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as useCssVar } from "./_MapCache-8-eqnC2S.js";
import { t as require_merge } from "./merge-O0QrB7po.js";
import { t as smartDecimal } from "./smartDecimal-DbDs_fqN.js";
var import_merge = /* @__PURE__ */ __toESM(require_merge(), 1);
const generateLinearGradient = (ctx, height) => {
	const gradient = ctx.createLinearGradient(0, 0, 0, height);
	gradient.addColorStop(0, "rgba(255, 111,92, 1)");
	gradient.addColorStop(.8, "rgba(255, 111, 92, 0.25)");
	gradient.addColorStop(1, "rgba(255, 111, 92, 0)");
	return gradient;
};
const generateLineChartOptions = (overrides = {}) => {
	const colorTextDark = useCssVar("--color--text--shade-1", document.body);
	const colorBackgroundLight = useCssVar("--color--background--light-3", document.body);
	const colorForeGroundBase = useCssVar("--color--foreground", document.body);
	const colorTextLight = useCssVar("--color--text--tint-1", document.body);
	return (0, import_merge.default)({
		responsive: true,
		maintainAspectRatio: false,
		animation: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				caretSize: 0,
				xAlign: "center",
				yAlign: "bottom",
				padding: 16,
				titleFont: { size: 14 },
				bodyFont: { size: 14 },
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
				grid: { display: false },
				stacked: true,
				beginAtZero: true,
				border: { display: false },
				ticks: { color: colorTextLight.value }
			},
			y: {
				grid: { color: colorForeGroundBase.value },
				stacked: true,
				border: { display: false },
				ticks: {
					maxTicksLimit: 3,
					color: colorTextLight.value
				}
			}
		}
	}, overrides);
};
const generateBarChartOptions = (overrides = {}) => {
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
				titleFont: { size: 14 },
				bodyFont: { size: 14 },
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
		datasets: { bar: {
			maxBarThickness: 32,
			borderRadius: 4
		} },
		scales: {
			x: {
				grid: { display: false },
				stacked: true,
				beginAtZero: true,
				border: { display: false },
				ticks: { color: colorTextLight.value }
			},
			y: {
				grid: { color: colorForeGroundBase.value },
				stacked: true,
				border: { display: false },
				ticks: {
					maxTicksLimit: 3,
					color: colorTextLight.value
				}
			}
		}
	}, overrides);
};
export { generateLineChartOptions as n, generateLinearGradient as r, generateBarChartOptions as t };

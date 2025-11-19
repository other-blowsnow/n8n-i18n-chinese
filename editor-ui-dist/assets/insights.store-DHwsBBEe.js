import { C as computed } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { x as useAsyncState } from "./_MapCache-pT3vKw8Z.js";
import { Bo as useSettingsStore, Qs as useRootStore, er as useUsersStore, fc as makeRestApiRequest, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
import { _r as getResourcePermissions } from "./constants-C_oOJnqT.js";
import { a as transformInsightsSummary } from "./insights.utils-yRgER63l.js";
function serializeInsightsFilter(filter) {
	if (!filter) return void 0;
	const { startDate, endDate,...rest } = filter;
	const serialized = { ...rest };
	if (startDate) serialized.startDate = startDate.toISOString();
	if (endDate) serialized.endDate = endDate.toISOString();
	return serialized;
}
const fetchInsightsSummary = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/summary", serializeInsightsFilter(filter));
const fetchInsightsByTime = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time", serializeInsightsFilter(filter));
const fetchInsightsTimeSaved = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time/time-saved", serializeInsightsFilter(filter));
const fetchInsightsByWorkflow = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-workflow", serializeInsightsFilter(filter));
const useInsightsStore = defineStore("insights", () => {
	const rootStore = useRootStore();
	const usersStore = useUsersStore();
	const settingsStore = useSettingsStore();
	const globalInsightsPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).insights);
	const isInsightsEnabled = computed(() => settingsStore.isModuleActive("insights"));
	const isDashboardEnabled = computed(() => !!settingsStore.moduleSettings.insights?.dashboard);
	return {
		globalInsightsPermissions,
		isInsightsEnabled,
		isSummaryEnabled: computed(() => globalInsightsPermissions.value.list && isInsightsEnabled.value),
		isDashboardEnabled,
		weeklySummary: useAsyncState(async () => {
			return transformInsightsSummary(await fetchInsightsSummary(rootStore.restApiContext));
		}, [], {
			immediate: false,
			resetOnExecute: false
		}),
		summary: useAsyncState(async (filter) => {
			return transformInsightsSummary(await fetchInsightsSummary(rootStore.restApiContext, filter));
		}, [], {
			immediate: false,
			resetOnExecute: false
		}),
		charts: useAsyncState(async (filter) => {
			return await (isDashboardEnabled.value ? fetchInsightsByTime : fetchInsightsTimeSaved)(rootStore.restApiContext, filter);
		}, [], {
			immediate: false,
			resetOnExecute: false
		}),
		table: useAsyncState(async (filter) => {
			return await fetchInsightsByWorkflow(rootStore.restApiContext, filter);
		}, {
			count: 0,
			data: []
		}, {
			immediate: false,
			resetOnExecute: false
		}),
		dateRanges: computed(() => settingsStore.moduleSettings.insights?.dateRanges ?? [])
	};
});
export { useInsightsStore as t };

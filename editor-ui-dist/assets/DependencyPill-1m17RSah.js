import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, O as createSlots, S as computed, Sn as toDisplayString, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-Dm3AetX9.js";
import { Ea as N8nIcon_default, Nt as DropdownMenu_default, ji as N8nTooltip_default, lt as useRouter, vi as N8nBadge_default } from "./src-pyi3rpL8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { ln as useTelemetry, r as useUIStore } from "./users.store-DjNI0iy4.js";
import { Dr as DATA_TABLE_DETAILS, ii as VIEWS } from "./constants-BC_f8ato.js";
import { c as makeRestApiRequest, t as useRootStore } from "./useRootStore-qNotDhnH.js";
import "./settings.store-Cpd1SIcm.js";
//#region src/app/api/workflow-dependencies.ts
async function getResourceDependencyCounts(context, resourceIds, resourceType) {
	return await makeRestApiRequest(context, "POST", "/workflow-dependencies/counts", {
		resourceIds,
		resourceType
	});
}
async function getResourceDependencies(context, resourceIds, resourceType) {
	return await makeRestApiRequest(context, "POST", "/workflow-dependencies/details", {
		resourceIds,
		resourceType
	});
}
//#endregion
//#region src/app/composables/useDependencies.ts
var dependenciesMap = ref({});
var countsMap = ref({});
function useDependencies() {
	const rootStore = useRootStore();
	/** Fetch lightweight dependency counts for resource cards (no name resolution). */
	async function fetchDependencyCounts(resourceIds, resourceType) {
		if (resourceIds.length === 0) return;
		try {
			const result = await getResourceDependencyCounts(rootStore.restApiContext, resourceIds, resourceType);
			for (const [id, counts] of Object.entries(result)) countsMap.value[id] = counts;
		} catch {}
	}
	/** Fetch full resolved dependencies for any resource type. */
	async function fetchDependencies(resourceIds, resourceType) {
		if (resourceIds.length === 0) return;
		try {
			const result = await getResourceDependencies(rootStore.restApiContext, resourceIds, resourceType);
			for (const [id, entry] of Object.entries(result)) dependenciesMap.value[id] = entry;
		} catch {}
	}
	function getDependencies(resourceId) {
		return dependenciesMap.value[resourceId];
	}
	function getDependencyCounts(resourceId) {
		return countsMap.value[resourceId];
	}
	function getTotalCount(resourceId) {
		const counts = countsMap.value[resourceId];
		if (!counts) return 0;
		return Object.values(counts).reduce((sum, n) => sum + n, 0);
	}
	function hasDependencies(resourceId) {
		const entry = dependenciesMap.value[resourceId];
		if (entry !== void 0) return entry.dependencies.length > 0 || entry.inaccessibleCount > 0;
		return getTotalCount(resourceId) > 0;
	}
	function clearCache() {
		dependenciesMap.value = {};
		countsMap.value = {};
	}
	return {
		fetchDependencyCounts,
		fetchDependencies,
		getDependencies,
		getDependencyCounts,
		getTotalCount,
		hasDependencies,
		clearCache
	};
}
//#endregion
//#region src/app/components/DependencyPill.vue?vue&type=script&setup=true&lang.ts
var MIN_ITEMS_FOR_SEARCH = 6;
var DependencyPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DependencyPill",
	props: {
		resourceType: {},
		resourceId: {},
		totalCount: {},
		source: {},
		dataTestId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const uiStore = useUIStore();
		const telemetry = useTelemetry();
		const { getDependencies, fetchDependencies, getTotalCount } = useDependencies();
		const isLoadingDetails = ref(false);
		const depsResult = computed(() => getDependencies(props.resourceId));
		const effectiveCount = computed(() => {
			const result = depsResult.value;
			if (result) return result.dependencies.length + result.inaccessibleCount;
			return getTotalCount(props.resourceId) ?? 0;
		});
		const hasHiddenDeps = computed(() => (depsResult.value?.inaccessibleCount ?? 0) > 0);
		const tooltipText = computed(() => i18n.baseText(`workflows.dependencies.tooltip.${props.resourceType}`));
		const hasFullDeps = computed(() => depsResult.value !== void 0);
		const showSearch = computed(() => (depsResult.value?.dependencies.length ?? 0) >= MIN_ITEMS_FOR_SEARCH);
		const searchTerm = ref("");
		const typeConfig = {
			credentialId: {
				icon: "key-round",
				labelKey: "workflows.dependencies.type.credentials"
			},
			dataTableId: {
				icon: "table",
				labelKey: "workflows.dependencies.type.dataTables"
			},
			errorWorkflow: {
				icon: "bug",
				labelKey: "workflows.dependencies.type.errorWorkflow"
			},
			errorWorkflowParent: {
				icon: "bug",
				labelKey: "workflows.dependencies.type.errorWorkflowParent"
			},
			workflowCall: {
				icon: "log-in",
				labelKey: "workflows.dependencies.type.subWorkflows"
			},
			workflowParent: {
				icon: "log-in",
				labelKey: "workflows.dependencies.type.parentWorkflows"
			}
		};
		const displayOrder = [
			"credentialId",
			"dataTableId",
			"workflowCall",
			"workflowParent",
			"errorWorkflow",
			"errorWorkflowParent"
		];
		const menuItems = computed(() => {
			const deps = depsResult.value?.dependencies ?? [];
			if (deps.length === 0) return [];
			const query = searchTerm.value.toLowerCase().trim();
			const filtered = query ? deps.filter((dep) => dep.name.toLowerCase().includes(query)) : deps;
			const groups = {
				credentialId: [],
				dataTableId: [],
				errorWorkflow: [],
				errorWorkflowParent: [],
				workflowCall: [],
				workflowParent: []
			};
			for (const dep of filtered) {
				const key = dep.type;
				if (groups[key]) groups[key].push(dep);
			}
			const items = [];
			for (const typeKey of displayOrder) {
				const deps = groups[typeKey];
				if (deps.length === 0) continue;
				const config = typeConfig[typeKey];
				items.push({
					id: `header-${typeKey}`,
					label: i18n.baseText(config.labelKey),
					icon: {
						type: "icon",
						value: config.icon
					},
					disabled: true,
					divided: items.length > 0
				});
				for (const dep of deps) items.push({
					id: `${dep.type}:${dep.id}`,
					label: dep.name
				});
			}
			return items;
		});
		function onSelect(value) {
			const [type, id] = value.split(":");
			if (!type || !id) return;
			const dep = (depsResult.value?.dependencies ?? []).find((d) => d.type === type && d.id === id);
			if (!dep) return;
			telemetry.track("User clicked dependency pill item", {
				source: props.source,
				dependency_type: dep.type,
				dependency_count: effectiveCount.value
			});
			switch (dep.type) {
				case "credentialId":
					uiStore.openExistingCredential(dep.id);
					break;
				case "workflowCall":
				case "workflowParent":
				case "errorWorkflow":
				case "errorWorkflowParent":
					const href = router.resolve({
						name: VIEWS.WORKFLOW,
						params: { workflowId: dep.id }
					}).href;
					window.open(href, "_blank");
					break;
				case "dataTableId":
					if (dep.projectId) {
						const href = router.resolve({
							name: DATA_TABLE_DETAILS,
							params: {
								projectId: dep.projectId,
								id: dep.id
							}
						}).href;
						window.open(href, "_blank");
					}
					break;
			}
		}
		function onSearch(term) {
			searchTerm.value = term;
		}
		async function loadDetails() {
			await fetchDependencies([props.resourceId], props.resourceType);
		}
		async function onDropdownToggle(open) {
			if (open) {
				telemetry.track("User opened dependency pill", {
					source: props.source,
					dependency_count: effectiveCount.value
				});
				if (!hasFullDeps.value && !isLoadingDetails.value) {
					isLoadingDetails.value = true;
					await loadDetails();
					isLoadingDetails.value = false;
				}
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: tooltipText.value,
				placement: "bottom",
				"show-after": 300
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
					items: menuItems.value,
					placement: "bottom-end",
					loading: isLoadingDetails.value,
					"loading-item-count": 1,
					searchable: showSearch.value,
					"extra-popper-class": "dependency-pill-dropdown",
					"search-placeholder": unref(i18n).baseText("workflows.dependencies.search.placeholder"),
					"max-height": 280,
					"data-test-id": __props.dataTestId,
					onSelect,
					onSearch,
					"onUpdate:modelValue": onDropdownToggle
				}, createSlots({
					trigger: withCtx(() => [createVNode(unref(N8nBadge_default), {
						theme: "tertiary",
						"show-border": false,
						class: normalizeClass(_ctx.$style.badge)
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.badgeText) }, [createVNode(unref(N8nIcon_default), {
							icon: "link",
							size: "small"
						}), createTextVNode(" " + toDisplayString(effectiveCount.value), 1)], 2)]),
						_: 1
					}, 8, ["class"])]),
					_: 2
				}, [hasHiddenDeps.value ? {
					name: "footer",
					fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.hiddenNotice) }, toDisplayString(unref(i18n).baseText("workflows.dependencies.hiddenNotice", {
						adjustToNumber: depsResult.value.inaccessibleCount,
						interpolate: { count: String(depsResult.value.inaccessibleCount) }
					})), 3)]),
					key: "0"
				} : void 0]), 1032, [
					"items",
					"loading",
					"searchable",
					"search-placeholder",
					"data-test-id"
				])]),
				_: 1
			}, 8, ["content"]);
		};
	}
});
var DependencyPill_vue_vue_type_style_index_0_lang_module_default = {
	badge: "_badge_14kdd_125",
	badgeText: "_badgeText_14kdd_139",
	hiddenNotice: "_hiddenNotice_14kdd_146"
};
var DependencyPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DependencyPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DependencyPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useDependencies as n, DependencyPill_default as t };

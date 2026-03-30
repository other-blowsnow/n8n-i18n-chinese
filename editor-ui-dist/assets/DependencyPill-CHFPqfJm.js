import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, O as createSlots, S as computed, Sn as toDisplayString, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import { $i as N8nIcon_default, Ut as N8nBadge_default, _t as useRouter, n as DropdownMenu_default } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { pr as useTelemetry, r as useUIStore } from "./users.store-DNsxOyr9.js";
import { Lr as DATA_TABLE_DETAILS, hs as VIEWS } from "./constants-DkMVfvP4.js";
import { d as makeRestApiRequest, r as useRootStore } from "./_baseOrderBy-CeJ-xzyO.js";
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
var dependenciesMap = ref({});
var countsMap = ref({});
function useDependencies() {
	const rootStore = useRootStore();
	async function fetchDependencyCounts(resourceIds, resourceType) {
		if (resourceIds.length === 0) return;
		try {
			const result = await getResourceDependencyCounts(rootStore.restApiContext, resourceIds, resourceType);
			for (const [id, counts] of Object.entries(result)) countsMap.value[id] = counts;
		} catch {}
	}
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
			"workflowParent"
		];
		const menuItems = computed(() => {
			const deps = depsResult.value?.dependencies ?? [];
			if (deps.length === 0) return [];
			const query = searchTerm.value.toLowerCase().trim();
			const filtered = query ? deps.filter((dep) => dep.name.toLowerCase().includes(query)) : deps;
			const groups = {
				credentialId: [],
				dataTableId: [],
				workflowCall: [],
				workflowParent: []
			};
			for (const dep of filtered) {
				const key = dep.type;
				if (groups[key]) groups[key].push(dep);
			}
			const items = [];
			for (const typeKey of displayOrder) {
				const deps$1 = groups[typeKey];
				if (deps$1.length === 0) continue;
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
				for (const dep of deps$1) items.push({
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
			switch (dep.type) {
				case "credentialId":
					uiStore.openExistingCredential(dep.id);
					break;
				case "workflowCall":
				case "workflowParent":
					const href = router.resolve({
						name: VIEWS.WORKFLOW,
						params: { name: dep.id }
					}).href;
					window.open(href, "_blank");
					break;
				case "dataTableId":
					if (dep.projectId) {
						const href$1 = router.resolve({
							name: DATA_TABLE_DETAILS,
							params: {
								projectId: dep.projectId,
								id: dep.id
							}
						}).href;
						window.open(href$1, "_blank");
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
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				items: menuItems.value,
				trigger: "hover",
				placement: "bottom",
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
					class: normalizeClass(_ctx.$style.badge)
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.badgeText) }, [createVNode(unref(N8nIcon_default), {
						icon: "link",
						size: "medium"
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
			]);
		};
	}
});
var DependencyPill_vue_vue_type_style_index_0_lang_module_default = {
	badge: "_badge_1dqs1_125",
	badgeText: "_badgeText_1dqs1_133",
	hiddenNotice: "_hiddenNotice_1dqs1_140"
};
var DependencyPill_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DependencyPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DependencyPill_vue_vue_type_style_index_0_lang_module_default }]]);
export { useDependencies as n, DependencyPill_default as t };

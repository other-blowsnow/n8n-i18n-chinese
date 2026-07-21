import { $ as openBlock, Gt as unref, It as ref, N as defineComponent, S as computed, Ut as toValue, bt as withCtx, gt as watch, j as createVNode, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n, v as useLocalStorage } from "./core-Cb7jeMu8.js";
import { Ct as useRoute, Gt as useDropdownSearch, Wt as AiModelSelectorDropdown_default, ra as truncateBeforeLast } from "./src-DAbbz2gO.js";
import { Go as AGENT_MODEL_PROVIDERS, Ko as isAgentModelProvider, Ou as getResourcePermissions, Yr as AGENT_MODEL_CREDENTIAL_MODAL_KEY, pa as LOCAL_STORAGE_AGENT_MODEL_CREDENTIALS } from "./constants-BG93cxLW.js";
import { st as useCredentialsStore, wn as useProjectsStore } from "./workflowDocument.store-CUnvofeB.js";
import { t as useRootStore } from "./useRootStore-e_Vi8Kjn.js";
import { f as useUIStore } from "./users.store-ChwfO1rT.js";
import { b as getProviderModels, y as getModelCatalog } from "./useAgentApi-BaSGjxrj.js";
import { t as useFreeAiCredits } from "./useFreeAiCredits-DNlLMA2u.js";
import { a as AGENT_MODEL_PROVIDER_DEFINITIONS, i as ModelSelectorTriggerIcon_default, n as parseMenuItemId, o as getProviderCredentialTypes, r as ModelSelectorItemLeadingIcon_default, t as buildMenuItemId } from "./menuItemId-GnRE2xEy.js";
//#region src/features/agents/composables/useAgentProjectId.ts
/**
* Resolves the project an agent belongs to, with a single source of truth:
* an explicit override (e.g. a `projectId` prop) → the route param →
* the user's personal project → empty string.
*
* Centralising this avoids each component re-deriving the project id with
* subtly different fallbacks (which previously caused project-scoped views to
* fall back to personal-project data).
*/
function useAgentProjectId(override) {
	const route = useRoute();
	const projectsStore = useProjectsStore();
	return computed(() => toValue(override) ?? route.params.projectId ?? projectsStore.personalProject?.id ?? "");
}
//#endregion
//#region src/features/agents/composables/useAgentModelCredentials.ts
function parseStoredCredentials(value) {
	try {
		const raw = JSON.parse(value);
		if (typeof raw !== "object" || raw === null) return {};
		const credentials = {};
		for (const [provider, credentialId] of Object.entries(raw)) {
			if (!isAgentModelProvider(provider)) continue;
			if (typeof credentialId !== "string" && credentialId !== null) continue;
			credentials[provider] = credentialId;
		}
		return credentials;
	} catch {
		return {};
	}
}
function useAgentModelCredentials(userId, projectId) {
	const isInitialized = ref(false);
	const credentialsStore = useCredentialsStore();
	const selectedCredentials = useLocalStorage(LOCAL_STORAGE_AGENT_MODEL_CREDENTIALS(userId), {}, {
		writeDefaults: false,
		shallow: true,
		serializer: {
			read: parseStoredCredentials,
			write: (value) => JSON.stringify(value)
		}
	});
	const isCredentialsReady = computed(() => isInitialized.value || credentialsStore.allCredentials.length > 0);
	function getCredentialsForProvider(provider) {
		const credentialsById = /* @__PURE__ */ new Map();
		for (const credentialType of AGENT_MODEL_PROVIDER_DEFINITIONS[provider].credentialTypes) for (const credential of credentialsStore.getCredentialsByType(credentialType)) if (!credentialsById.has(credential.id)) credentialsById.set(credential.id, credential);
		return [...credentialsById.values()].toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
	}
	const credentialsByProvider = computed(() => {
		if (!isCredentialsReady.value) return null;
		const credentials = {};
		for (const provider of AGENT_MODEL_PROVIDERS) {
			const providerCredentials = getCredentialsForProvider(provider);
			const selectedCredentialId = selectedCredentials.value[provider] ?? null;
			credentials[provider] = selectedCredentialId && providerCredentials.some((credential) => credential.id === selectedCredentialId) ? selectedCredentialId : providerCredentials[0]?.id ?? null;
		}
		return credentials;
	});
	function selectCredential(provider, id) {
		selectedCredentials.value = {
			...selectedCredentials.value,
			[provider]: id
		};
	}
	watch(() => toValue(projectId), async (id) => {
		if (!id) return;
		await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchAllCredentialsForWorkflow({ projectId: id })]);
		isInitialized.value = true;
	}, { immediate: true });
	return {
		credentialsByProvider,
		getCredentialsForProvider,
		selectCredential
	};
}
//#endregion
//#region src/features/agents/composables/useModelCatalog.ts
var catalogByProject = ref({});
var fetchPromises = /* @__PURE__ */ new Map();
var loadingProjects = ref(/* @__PURE__ */ new Set());
var verifiedModelsByKey = ref({});
var verifiedFetchesInFlight = /* @__PURE__ */ new Set();
function createEmptyModelsResponse() {
	const response = {};
	for (const provider of AGENT_MODEL_PROVIDERS) response[provider] = { models: [] };
	return response;
}
function toAgentModel(provider, model) {
	return {
		provider,
		model: model.id,
		name: model.name,
		description: null,
		createdAt: model.releaseDate ?? null,
		metadata: {
			functionCalling: model.toolCall,
			available: true
		}
	};
}
function useModelCatalog() {
	const rootStore = useRootStore();
	const activeProjectId = ref(null);
	const catalog = computed(() => activeProjectId.value ? catalogByProject.value[activeProjectId.value] ?? {} : {});
	const isLoading = computed(() => activeProjectId.value ? loadingProjects.value.has(activeProjectId.value) : false);
	async function ensureLoaded(projectId) {
		activeProjectId.value = projectId;
		if (catalogByProject.value[projectId]) return;
		let fetchPromise = fetchPromises.get(projectId);
		if (!fetchPromise) {
			loadingProjects.value.add(projectId);
			fetchPromise = getModelCatalog(rootStore.restApiContext, projectId).then((result) => {
				catalogByProject.value = {
					...catalogByProject.value,
					[projectId]: result
				};
			}).catch(() => {
				fetchPromises.delete(projectId);
			}).finally(() => {
				loadingProjects.value.delete(projectId);
			});
			fetchPromises.set(projectId, fetchPromise);
		}
		await fetchPromise;
	}
	function getModelsForProvider(provider) {
		const p = catalog.value[provider];
		if (!p) return [];
		return Object.values(p.models).sort((a, b) => a.name.localeCompare(b.name));
	}
	/**
	* Kick off (once per project+provider+credential) the fetch of the
	* provider-verified model list. Idempotent and guarded, so it is safe to
	* trigger from `getModelsForPicker` — when the response lands, the reactive
	* map updates and computeds re-evaluate with the verified list.
	*/
	function ensureVerifiedModels(projectId, provider, providerCredentialId) {
		const key = `${projectId}|${provider}|${providerCredentialId}`;
		if (key in verifiedModelsByKey.value || verifiedFetchesInFlight.has(key)) return;
		verifiedFetchesInFlight.add(key);
		getProviderModels(rootStore.restApiContext, projectId, provider, providerCredentialId).then((result) => {
			verifiedModelsByKey.value = {
				...verifiedModelsByKey.value,
				[key]: result.verified ? result.models : null
			};
		}).catch(() => {
			verifiedModelsByKey.value = {
				...verifiedModelsByKey.value,
				[key]: null
			};
		}).finally(() => {
			verifiedFetchesInFlight.delete(key);
		});
	}
	function getModelsForPicker(credentials) {
		const response = createEmptyModelsResponse();
		for (const provider of AGENT_MODEL_PROVIDERS) {
			const providerCredentialId = credentials?.[provider];
			if (!providerCredentialId) continue;
			let models;
			const projectId = activeProjectId.value;
			if (projectId) {
				ensureVerifiedModels(projectId, provider, providerCredentialId);
				models = verifiedModelsByKey.value[`${projectId}|${provider}|${providerCredentialId}`] ?? void 0;
			}
			if (!models) {
				const providerInfo = catalog.value[provider];
				if (!providerInfo) continue;
				models = Object.values(providerInfo.models);
			}
			response[provider] = { models: models.map((model) => toAgentModel(provider, model)).sort((a, b) => a.name.localeCompare(b.name)) };
		}
		return response;
	}
	return {
		catalog,
		isLoading,
		ensureLoaded,
		getModelsForProvider,
		getModelsForPicker
	};
}
//#endregion
//#region src/features/agents/utils/model-string.ts
var MODEL_STRING_PATTERN = /^[a-z0-9-]+\/(?:[a-z0-9._-]+\/)*[a-z0-9._-]+$/i;
/** Split `"<provider>/<name>"` on the first `/`. Returns null when malformed. */
function parseModelString(model) {
	if (!MODEL_STRING_PATTERN.test(model)) return null;
	const slashIndex = model.indexOf("/");
	return {
		provider: model.slice(0, slashIndex),
		name: model.slice(slashIndex + 1)
	};
}
/** Build the canonical string. Pass-through for already-string inputs. */
function modelToString(raw) {
	if (!raw) return "";
	if (typeof raw === "string") return raw;
	return `${raw.provider ?? ""}/${raw.name ?? ""}`;
}
/** Read just the provider, accepting either string or object form. */
function parseProvider(raw) {
	if (!raw) return "";
	if (typeof raw === "object") return raw.provider ?? "";
	return parseModelString(raw)?.provider ?? "";
}
/**
* Normalise provider-specific id quirks. Currently only Google's `"models/"`
* prefix is stripped — other providers pass through unchanged.
*/
function sanitizeModelId(provider, modelId) {
	if (provider === "google") return modelId.replace(/^models\//, "");
	return modelId;
}
//#endregion
//#region src/features/agents/components/AgentModelSelector.vue?vue&type=script&setup=true&lang.ts
var MAX_MODEL_NAME_CHARS = 45;
var MAX_SEARCH_RESULTS_PER_PROVIDER = 10;
var FREE_OPENAI_CREDITS_PROVIDER = "openai";
var FREE_OPENAI_CREDITS_MODEL = "gpt-5-mini";
//#endregion
//#region src/features/agents/components/AgentModelSelector.vue
var AgentModelSelector_default = /* @__PURE__ */ defineComponent({
	__name: "AgentModelSelector",
	props: {
		selectedModel: {},
		credentials: {},
		modelsByProvider: {},
		isLoading: { type: Boolean },
		projectId: {},
		warnMissingCredentials: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["change", "selectCredential"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const dropdownRef = useTemplateRef("dropdownRef");
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const uiStore = useUIStore();
		const selectedCredentialId = computed(() => __props.selectedModel ? __props.credentials?.[__props.selectedModel.provider] : void 0);
		const { aiCreditsQuota, userCanClaimOpenAiCredits, claimingCredits, claimCreditsAndGetCredential } = useFreeAiCredits({ hasOpenAiCredential: computed(() => Boolean(__props.credentials?.[FREE_OPENAI_CREDITS_PROVIDER])) });
		const selectedCredential = computed(() => selectedCredentialId.value ? credentialsStore.getCredentialById(selectedCredentialId.value) : null);
		const selectedCredentialName = computed(() => selectedCredential.value?.name);
		const isCredentialsMissing = computed(() => __props.warnMissingCredentials && __props.selectedModel?.provider && !selectedCredential.value);
		const selectedLabel = computed(() => __props.selectedModel?.name ?? i18n.baseText("agents.modelSelector.defaultLabel"));
		const triggerCredentialTypeName = computed(() => __props.selectedModel ? AGENT_MODEL_PROVIDER_DEFINITIONS[__props.selectedModel.provider].credentialTypes[0] : null);
		const projectForPermissions = computed(() => {
			if (__props.projectId) {
				if (projectsStore.currentProject?.id === __props.projectId) return projectsStore.currentProject;
				if (projectsStore.personalProject?.id === __props.projectId) return projectsStore.personalProject;
				return projectsStore.myProjects.find((project) => project.id === __props.projectId) ?? null;
			}
			return projectsStore.currentProject ?? projectsStore.personalProject;
		});
		const createCredentialProjectId = computed(() => projectForPermissions.value?.id ?? __props.projectId ?? projectsStore.personalProject?.id);
		const canCreateCredentials = computed(() => {
			return !!getResourcePermissions(projectForPermissions.value?.scopes).credential.create;
		});
		function getCredentialTypeDisplayName(credentialType) {
			return credentialsStore.getCredentialTypeByName(credentialType)?.displayName ?? credentialType;
		}
		function getCredentialsForProvider(provider) {
			const credentialsById = /* @__PURE__ */ new Map();
			for (const credentialType of getProviderCredentialTypes(provider)) for (const credential of credentialsStore.getCredentialsByType(credentialType)) if (!credentialsById.has(credential.id)) credentialsById.set(credential.id, credential);
			return [...credentialsById.values()].toSorted((a, b) => a.name.localeCompare(b.name));
		}
		const canUseFreeOpenAiCredits = computed(() => __props.credentials !== null && canCreateCredentials.value && userCanClaimOpenAiCredits.value);
		const freeOpenAiCreditsDescription = computed(() => i18n.baseText("agents.modelSelector.freeCredits.description", { interpolate: { credits: aiCreditsQuota.value } }));
		function providerToMenuItem(provider) {
			const definition = AGENT_MODEL_PROVIDER_DEFINITIONS[provider];
			const credentialOptions = getCredentialsForProvider(provider);
			const selectedProviderCredentialId = __props.credentials?.[provider] ?? null;
			const models = __props.modelsByProvider[provider]?.models ?? [];
			const credentialTypes = getProviderCredentialTypes(provider);
			const hasProviderCredential = selectedProviderCredentialId !== null && credentialOptions.some((credential) => credential.id === selectedProviderCredentialId);
			const configureCredentialItems = canCreateCredentials.value ? credentialTypes.length === 1 ? [{
				id: buildMenuItemId(provider, "configure", credentialTypes[0]),
				icon: {
					type: "icon",
					value: "settings"
				},
				label: i18n.baseText("agents.modelSelector.configureCredentials"),
				disabled: false,
				data: {
					provider,
					credentialType: credentialTypes[0],
					leadingIcon: "settings"
				}
			}] : [{
				id: `${provider}::configure`,
				icon: {
					type: "icon",
					value: "settings"
				},
				label: i18n.baseText("agents.modelSelector.configureCredentials"),
				disabled: false,
				data: {
					provider,
					leadingIcon: "settings"
				},
				children: credentialTypes.map((credentialType) => ({
					id: buildMenuItemId(provider, "configure", credentialType),
					label: getCredentialTypeDisplayName(credentialType),
					disabled: false,
					data: {
						provider,
						credentialType
					}
				}))
			}] : [];
			const freeOpenAiCreditsItems = provider === FREE_OPENAI_CREDITS_PROVIDER && canUseFreeOpenAiCredits.value ? [{
				id: buildMenuItemId(FREE_OPENAI_CREDITS_PROVIDER, "freeCredits", FREE_OPENAI_CREDITS_MODEL),
				icon: {
					type: "icon",
					value: "sparkles"
				},
				label: i18n.baseText("agents.modelSelector.freeCredits.label"),
				disabled: claimingCredits.value,
				data: {
					provider,
					credentialType: credentialTypes[0],
					leadingIcon: "sparkles",
					description: freeOpenAiCreditsDescription.value,
					descriptionTooltipTeleported: false
				}
			}] : [];
			const modelItems = hasProviderCredential ? models.map((model, index) => ({
				id: buildMenuItemId(provider, "model", model.model),
				label: truncateBeforeLast(model.name, MAX_MODEL_NAME_CHARS),
				disabled: false,
				divided: index === 0,
				checked: __props.selectedModel?.provider === provider && __props.selectedModel.model === model.model,
				data: {
					provider,
					description: model.description ?? void 0,
					descriptionTooltipTeleported: false,
					fullName: `${model.name} ${model.model}`,
					credentialType: credentialTypes[0]
				}
			})) : [];
			const statusItems = !hasProviderCredential ? [] : __props.isLoading ? [{
				id: `${provider}::loading`,
				label: i18n.baseText("generic.loadingEllipsis"),
				disabled: true
			}] : modelItems.length === 0 ? [{
				id: `${provider}::empty`,
				label: i18n.baseText("agents.modelSelector.noModels"),
				disabled: true,
				divided: true
			}] : [];
			return {
				id: provider,
				label: definition.displayName,
				data: {
					provider,
					credentialType: credentialTypes[0],
					badgeLabel: provider === FREE_OPENAI_CREDITS_PROVIDER && canUseFreeOpenAiCredits.value ? i18n.baseText("agents.modelSelector.freeCredits.badge") : void 0
				},
				children: [
					...freeOpenAiCreditsItems,
					...configureCredentialItems,
					...modelItems,
					...statusItems
				]
			};
		}
		function isAggregatorProvider(provider) {
			return "isAggregator" in AGENT_MODEL_PROVIDER_DEFINITIONS[provider];
		}
		const menu = computed(() => {
			const providers = AGENT_MODEL_PROVIDERS.toSorted((a, b) => {
				return (isAggregatorProvider(a) ? 1 : -1) - (isAggregatorProvider(b) ? 1 : -1);
			});
			let dividerInserted = false;
			return providers.map((provider) => {
				const item = providerToMenuItem(provider);
				if (dividerInserted) return item;
				dividerInserted = true;
				return {
					...item,
					divided: true
				};
			});
		});
		function isSearchableItem(item) {
			return (item.id.includes("::model::") || item.id.includes("::freeCredits::")) && !item.disabled;
		}
		const { search: searchQuery, filteredItems: matchingModelItems, handleSearch } = useDropdownSearch(menu, {
			flatList: true,
			isSearchable: isSearchableItem,
			searchFields: (item) => [item.label, item.data?.fullName],
			mapResult: (item, path) => ({
				...item,
				divided: false,
				data: item.data ? {
					...item.data,
					parts: path.map((pathItem) => pathItem.label),
					descriptionTooltipTeleported: true
				} : void 0
			})
		});
		const filteredMenu = computed(() => {
			if (!searchQuery.value.trim()) return menu.value;
			return menu.value.flatMap((providerItem) => {
				const results = matchingModelItems.value.filter((item) => item.data?.provider === providerItem.id);
				if (results.length <= MAX_SEARCH_RESULTS_PER_PROVIDER) return results;
				return [...results.slice(0, MAX_SEARCH_RESULTS_PER_PROVIDER), {
					...providerItem,
					label: i18n.baseText("agents.modelSelector.moreModels", { interpolate: { provider: providerItem.label } }),
					children: results.slice(MAX_SEARCH_RESULTS_PER_PROVIDER),
					divided: false
				}];
			});
		});
		function openNewCredential(credentialType) {
			if (!__props.disabled && canCreateCredentials.value) uiStore.openNewCredential(credentialType, false, false, createCredentialProjectId.value, void 0, void 0, void 0, { hideAskAssistant: true });
		}
		function openCredentialsSelectorOrCreate(provider, credentialType) {
			if (__props.disabled) return;
			if (credentialsStore.getCredentialsByType(credentialType).length === 0 && canCreateCredentials.value) {
				openNewCredential(credentialType);
				return;
			}
			uiStore.openModalWithData({
				name: AGENT_MODEL_CREDENTIAL_MODAL_KEY,
				data: {
					credentialType,
					displayName: getCredentialTypeDisplayName(credentialType),
					initialValue: __props.credentials?.[provider] ?? null,
					onSelect: (credentialId) => emit("selectCredential", provider, credentialId)
				}
			});
		}
		async function onSelect(id) {
			if (__props.disabled) return;
			const parsed = parseMenuItemId(id);
			if (!parsed || !isAgentModelProvider(parsed.provider)) return;
			const { provider: providerId, action, value } = parsed;
			if (action === "configure") {
				openCredentialsSelectorOrCreate(providerId, value);
				return;
			}
			if (action === "freeCredits" && providerId === FREE_OPENAI_CREDITS_PROVIDER) {
				if (!canUseFreeOpenAiCredits.value) return;
				const credential = await claimCreditsAndGetCredential("agentBuilderModelSelector", createCredentialProjectId.value);
				if (!credential) return;
				emit("selectCredential", providerId, credential.id);
				emit("change", {
					provider: providerId,
					model: value
				});
				return;
			}
			if (action === "model") emit("change", {
				provider: providerId,
				model: value
			});
		}
		__expose({ open: () => {
			if (!__props.disabled) dropdownRef.value?.open();
		} });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AiModelSelectorDropdown_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: filteredMenu.value,
				"selected-label": selectedLabel.value,
				"selected-credential-name": selectedCredentialName.value,
				"credentials-missing": isCredentialsMissing.value,
				"no-match-label": unref(i18n).baseText("agents.modelSelector.noMatch"),
				disabled: __props.disabled,
				"data-test-id": "agent-model-selector",
				"credential-data-test-id": "agent-model-selector-credential",
				onSearch: unref(handleSearch),
				onSelect
			}, {
				"trigger-leading": withCtx(({ ui }) => [createVNode(ModelSelectorTriggerIcon_default, {
					"credential-type-name": triggerCredentialTypeName.value,
					class: normalizeClass(ui.class)
				}, null, 8, ["credential-type-name", "class"])]),
				"item-leading": withCtx(({ item, ui }) => [createVNode(ModelSelectorItemLeadingIcon_default, {
					item,
					class: normalizeClass(ui.class)
				}, null, 8, ["item", "class"])]),
				_: 1
			}, 8, [
				"items",
				"selected-label",
				"selected-credential-name",
				"credentials-missing",
				"no-match-label",
				"disabled",
				"onSearch"
			]);
		};
	}
});
//#endregion
export { sanitizeModelId as a, useAgentProjectId as c, parseProvider as i, modelToString as n, useModelCatalog as o, parseModelString as r, useAgentModelCredentials as s, AgentModelSelector_default as t };

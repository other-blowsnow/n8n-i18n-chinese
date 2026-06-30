import { $ as openBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, Ut as toValue, bt as withCtx, gt as watch, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { s as useI18n } from "./src-DaQgCvnv.js";
import { Ya as N8nIcon_default, gt as useRoute } from "./src-BVC_ZvSs.js";
import { v as useLocalStorage } from "./core-DOUvgShw.js";
import { Co as AGENT_MODEL_PROVIDERS, Hl as getResourcePermissions, ca as LOCAL_STORAGE_AGENT_MODEL_CREDENTIALS, wo as isAgentModelProvider } from "./constants-DzzWpyjZ.js";
import { bn as useProjectsStore, it as useCredentialsStore } from "./workflowDocument.store-DjpEjMiV.js";
import { t as useRootStore } from "./useRootStore-C7jLo3fI.js";
import { f as useUIStore } from "./users.store-CUxYM5yQ.js";
import { c as truncateBeforeLast } from "./dist-BXENiK5V.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CXGiwDnt.js";
import { v as getModelCatalog } from "./useAgentApi-SXlj7DTF.js";
import { t as AiModelSelectorDropdown_default } from "./AiModelSelectorDropdown-BAHRxHa1.js";
//#region src/features/agents/model-providers.ts
var AGENT_MODEL_PROVIDER_DEFINITIONS = {
	openai: {
		displayName: "OpenAI",
		credentialTypes: ["openAiApi"]
	},
	anthropic: {
		displayName: "Anthropic",
		credentialTypes: ["anthropicApi"]
	},
	google: {
		displayName: "Google",
		credentialTypes: ["googlePalmApi"]
	},
	"azure-openai": {
		displayName: "Azure OpenAI",
		credentialTypes: ["azureOpenAiApi", "azureEntraCognitiveServicesOAuth2Api"]
	},
	"aws-bedrock": {
		displayName: "AWS Bedrock",
		credentialTypes: ["aws"],
		isAggregator: true
	},
	xai: {
		displayName: "xAI",
		credentialTypes: ["xAiApi"]
	},
	groq: {
		displayName: "Groq",
		credentialTypes: ["groqApi"]
	},
	openrouter: {
		displayName: "OpenRouter",
		credentialTypes: ["openRouterApi"],
		isAggregator: true
	},
	deepseek: {
		displayName: "DeepSeek",
		credentialTypes: ["deepSeekApi"]
	},
	cohere: {
		displayName: "Cohere",
		credentialTypes: ["cohereApi"]
	},
	mistral: {
		displayName: "Mistral",
		credentialTypes: ["mistralCloudApi"]
	},
	vercel: {
		displayName: "Vercel AI Gateway",
		credentialTypes: ["vercelAiGatewayApi"],
		isAggregator: true
	},
	nvidia: {
		displayName: "NVIDIA",
		credentialTypes: ["nvidiaApi"]
	}
};
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
//#region src/features/agents/components/AgentModelSelector.vue?vue&type=script&setup=true&lang.ts
var MAX_MODEL_NAME_CHARS = 45;
var MAX_SELECTED_NAME_CHARS = 30;
var MAX_SEARCH_RESULTS_PER_PROVIDER = 10;
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
		horizontal: {
			type: Boolean,
			default: false
		},
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
		const searchQuery = ref("");
		const selectedCredentialId = computed(() => __props.selectedModel ? __props.credentials?.[__props.selectedModel.provider] : void 0);
		const selectedCredential = computed(() => selectedCredentialId.value ? credentialsStore.getCredentialById(selectedCredentialId.value) : null);
		const selectedCredentialName = computed(() => selectedCredential.value?.name);
		const isCredentialsMissing = computed(() => __props.warnMissingCredentials && __props.selectedModel?.provider && !selectedCredential.value);
		const selectedLabel = computed(() => __props.selectedModel?.name ?? i18n.baseText("agents.modelSelector.defaultLabel"));
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
		function getProviderCredentialTypes(provider) {
			return AGENT_MODEL_PROVIDER_DEFINITIONS[provider].credentialTypes;
		}
		function getCredentialTypeDisplayName(credentialType) {
			return credentialsStore.getCredentialTypeByName(credentialType)?.displayName ?? credentialType;
		}
		function getCredentialsForProvider(provider) {
			const credentialsById = /* @__PURE__ */ new Map();
			for (const credentialType of getProviderCredentialTypes(provider)) for (const credential of credentialsStore.getCredentialsByType(credentialType)) if (!credentialsById.has(credential.id)) credentialsById.set(credential.id, credential);
			return [...credentialsById.values()].toSorted((a, b) => a.name.localeCompare(b.name));
		}
		function modelItemId(provider, model) {
			return `${provider}::model::${encodeURIComponent(model)}`;
		}
		function credentialItemId(provider, credentialId) {
			return `${provider}::credential::${encodeURIComponent(credentialId)}`;
		}
		function configureCredentialItemId(provider, credentialType) {
			return `${provider}::configure::${encodeURIComponent(credentialType)}`;
		}
		function providerToMenuItem(provider) {
			const definition = AGENT_MODEL_PROVIDER_DEFINITIONS[provider];
			const credentialOptions = getCredentialsForProvider(provider);
			const selectedProviderCredentialId = __props.credentials?.[provider] ?? null;
			const models = __props.modelsByProvider[provider]?.models ?? [];
			const credentialTypes = getProviderCredentialTypes(provider);
			const hasProviderCredential = selectedProviderCredentialId !== null && credentialOptions.some((credential) => credential.id === selectedProviderCredentialId);
			const credentialItems = credentialOptions.map((credential) => ({
				id: credentialItemId(provider, credential.id),
				label: credential.name,
				icon: {
					type: "icon",
					value: "key-round"
				},
				checked: credential.id === selectedProviderCredentialId,
				data: {
					provider,
					credentialType: credential.type
				}
			}));
			const configureCredentialItems = canCreateCredentials.value ? credentialTypes.length === 1 ? [{
				id: configureCredentialItemId(provider, credentialTypes[0]),
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
					id: configureCredentialItemId(provider, credentialType),
					label: getCredentialTypeDisplayName(credentialType),
					disabled: false,
					data: {
						provider,
						credentialType
					}
				}))
			}] : [];
			const modelItems = hasProviderCredential ? models.map((model, index) => ({
				id: modelItemId(provider, model.model),
				label: truncateBeforeLast(model.name, MAX_MODEL_NAME_CHARS),
				disabled: false,
				divided: index === 0,
				data: {
					provider,
					description: model.description ?? void 0,
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
					credentialType: credentialTypes[0]
				},
				children: [
					...configureCredentialItems,
					...credentialItems,
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
		function isSearchableModelItem(item) {
			return item.id.includes("::model::") && !item.disabled;
		}
		function collectMatchingModelItems(item, query, parts, parentMatched = false) {
			const children = item.children ?? [];
			const currentParts = [...parts, item.label];
			const labelMatched = item.label.toLowerCase().includes(query);
			const isMatched = parentMatched || labelMatched;
			if (children.length === 0) {
				const searchText = `${item.data?.fullName ?? item.label}`.toLowerCase();
				if (!isSearchableModelItem(item) || !isMatched && !searchText.includes(query)) return [];
				return [{
					...item,
					divided: false,
					data: item.data ? {
						...item.data,
						parts: currentParts
					} : void 0
				}];
			}
			return children.flatMap((child) => collectMatchingModelItems(child, query, currentParts, isMatched));
		}
		const filteredMenu = computed(() => {
			const query = searchQuery.value.trim().toLowerCase();
			if (!query) return menu.value;
			return menu.value.flatMap((providerItem) => {
				const results = collectMatchingModelItems(providerItem, query, []);
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
			if (!__props.disabled && canCreateCredentials.value) uiStore.openNewCredential(credentialType, false, false, createCredentialProjectId.value);
		}
		function onSelect(id) {
			if (__props.disabled) return;
			const [providerId, action, rawValue] = id.split("::");
			if (!isAgentModelProvider(providerId) || !rawValue) return;
			const value = decodeURIComponent(rawValue);
			if (action === "credential") {
				emit("selectCredential", providerId, value);
				return;
			}
			if (action === "configure") {
				openNewCredential(value);
				return;
			}
			if (action === "model") emit("change", {
				provider: providerId,
				model: value
			});
		}
		function handleSearch(query) {
			if (__props.disabled) return;
			searchQuery.value = query;
		}
		__expose({ open: () => {
			if (!__props.disabled) dropdownRef.value?.open();
		} });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AiModelSelectorDropdown_default, {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: filteredMenu.value,
				"selected-label": selectedLabel.value,
				"selected-credential-name": selectedCredentialName.value,
				"credentials-missing": isCredentialsMissing.value,
				"credentials-missing-label": unref(i18n).baseText("agents.modelSelector.credentialsMissing"),
				"no-match-label": unref(i18n).baseText("agents.modelSelector.noMatch"),
				horizontal: __props.horizontal,
				disabled: __props.disabled,
				"data-test-id": "agent-model-selector",
				"credential-data-test-id": "agent-model-selector-credential",
				"max-selected-name-chars": MAX_SELECTED_NAME_CHARS,
				onSearch: handleSearch,
				onSelect
			}, {
				"trigger-leading": withCtx(({ ui }) => [__props.selectedModel ? (openBlock(), createBlock(CredentialIcon_default, {
					key: 0,
					"credential-type-name": unref(AGENT_MODEL_PROVIDER_DEFINITIONS)[__props.selectedModel.provider].credentialTypes[0],
					size: 18,
					class: normalizeClass(ui.class)
				}, null, 8, ["credential-type-name", "class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "bot",
					size: "medium",
					class: normalizeClass(ui.class)
				}, null, 8, ["class"]))]),
				"item-leading": withCtx(({ item, ui }) => [item.data?.leadingIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: item.data.leadingIcon,
					size: "large",
					class: normalizeClass(ui.class)
				}, null, 8, ["icon", "class"])) : item.data?.credentialType ? (openBlock(), createBlock(CredentialIcon_default, {
					key: 1,
					"credential-type-name": item.data.credentialType,
					size: 16,
					class: normalizeClass(ui.class)
				}, null, 8, ["credential-type-name", "class"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"items",
				"selected-label",
				"selected-credential-name",
				"credentials-missing",
				"credentials-missing-label",
				"no-match-label",
				"horizontal",
				"disabled"
			]);
		};
	}
});
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
//#region src/features/agents/composables/useModelCatalog.ts
var catalogByProject = ref({});
var fetchPromises = /* @__PURE__ */ new Map();
var loadingProjects = ref(/* @__PURE__ */ new Set());
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
	function getModelsForPicker(credentials) {
		const response = createEmptyModelsResponse();
		for (const provider of AGENT_MODEL_PROVIDERS) {
			if (!credentials?.[provider]) continue;
			const providerInfo = catalog.value[provider];
			if (!providerInfo) continue;
			response[provider] = { models: Object.values(providerInfo.models).map((model) => toAgentModel(provider, model)).sort((a, b) => a.name.localeCompare(b.name)) };
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
export { sanitizeModelId as a, useAgentModelCredentials as c, parseProvider as i, modelToString as n, AgentModelSelector_default as o, parseModelString as r, useAgentProjectId as s, useModelCatalog as t };

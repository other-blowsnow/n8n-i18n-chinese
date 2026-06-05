import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, bt as withDirectives, gt as watch, h as withModifiers, j as createVNode, p as vShow, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-BH7Ervrw.js";
import { At as N8nActionToggle_default, Da as N8nIcon_default, Mi as N8nTooltip_default, Ta as N8nText_default, _t as N8nSelect_default, dt as N8nInputLabel_default, ft as Checkbox_default, lt as useRoute, ut as useRouter, vt as N8nOption_default, wt as N8nCard_default, yi as N8nBadge_default, zi as N8nActionBox_default } from "./src-D7XhL4SE.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-BOif5LxQ.js";
import { Br as ResourceType, Gr as useProjectsStore, b as useNodeTypesStore, hr as isCredentialsResource, nt as useCredentialsStore, qr as useSourceControlStore, zr as useEnvironmentsStore } from "./workflows.store-aCrKXfPW.js";
import { el as getResourcePermissions, nu as EnterpriseEditionFeature, oi as VIEWS } from "./constants-Brs44Mbc.js";
import { t as useSettingsStore } from "./settings.store-CrL-o4BC.js";
import { B as CREDENTIAL_SELECT_MODAL_KEY, d as listenForModalChanges, f as useUIStore, k as PROJECT_MOVE_RESOURCE_MODAL, p as useTelemetry, t as useUsersStore } from "./users.store-ByD75lsx.js";
import { t as require_dateformat } from "./dateformat-9ZHpj92n.js";
import { t as useDocumentTitle } from "./useDocumentTitle-BoZ4pEPK.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-BsLp0b2I.js";
import { t as ProjectCardBadge_default } from "./ProjectCardBadge-DNMhtdVM.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DrKkjFS1.js";
import { t as useDynamicCredentials } from "./useDynamicCredentials-DpAPH1tQ.js";
import { t as TimeAgo_default } from "./TimeAgo-CH0rQaAN.js";
import { t as useInsightsStore } from "./insights.store-DOU3Vmwt.js";
import { i as useProjectPages } from "./readyToRun.store-CsAf9r1c.js";
import { t as EmptySharedSectionActionBox_default } from "./EmptySharedSectionActionBox-Ck-eSrBL.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-vevT4K7_.js";
import { t as ProjectHeader_default } from "./ProjectHeader-_z81aj7v.js";
import { n as useDependencies, t as DependencyPill_default } from "./DependencyPill-CAwzLBgE.js";
import { t as InsightsSummary_default } from "./InsightsSummary-xaImafCm.js";
import { t as require_pickBy } from "./pickBy-CdAGwX2v.js";
//#region src/features/credentials/components/CredentialCard.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1$1 = { key: 0 };
var CredentialCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialCard",
	props: {
		data: {},
		readOnly: {
			type: Boolean,
			default: false
		},
		needsSetup: {
			type: Boolean,
			default: false
		}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const CREDENTIAL_LIST_ITEM_ACTIONS = {
			OPEN: "open",
			DELETE: "delete",
			MOVE: "move"
		};
		const emit = __emit;
		const props = __props;
		const locale = useI18n();
		const message = useMessage();
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const { isEnabled: isDynamicCredentialsEnabled } = useDynamicCredentials();
		const { hasDependencies } = useDependencies();
		const resourceTypeLabel = computed(() => locale.baseText("generic.credential").toLowerCase());
		const credentialType = computed(() => credentialsStore.getCredentialTypeByName(props.data.type ?? ""));
		const credentialPermissions = computed(() => getResourcePermissions(props.data.scopes).credential);
		const actions = computed(() => {
			const items = [{
				label: locale.baseText("credentials.item.open"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.OPEN
			}];
			if (credentialPermissions.value.delete) items.push({
				label: locale.baseText("credentials.item.delete"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.DELETE
			});
			if (credentialPermissions.value.move && projectsStore.isTeamProjectFeatureEnabled) items.push({
				label: locale.baseText("credentials.item.move"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.MOVE
			});
			return items;
		});
		const formattedCreatedAtDate = computed(() => {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			return (0, import_dateformat.default)(props.data.createdAt, `d mmmm${String(props.data.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
		});
		const credentialHasDependents = computed(() => hasDependencies(props.data.id));
		function onClick() {
			emit("click", props.data.id);
		}
		async function onAction(action) {
			switch (action) {
				case CREDENTIAL_LIST_ITEM_ACTIONS.OPEN:
					onClick();
					break;
				case CREDENTIAL_LIST_ITEM_ACTIONS.DELETE:
					await deleteResource();
					break;
				case CREDENTIAL_LIST_ITEM_ACTIONS.MOVE:
					moveResource();
					break;
			}
		}
		async function deleteResource() {
			if (await message.confirm(locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.message", { interpolate: { savedCredentialName: props.data.name } }), locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline"), { confirmButtonText: locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText") }) === "confirm") await credentialsStore.deleteCredential({ id: props.data.id });
		}
		function moveResource() {
			uiStore.openModalWithData({
				name: PROJECT_MOVE_RESOURCE_MODAL,
				data: {
					resource: props.data,
					resourceType: ResourceType.Credential,
					resourceTypeLabel: resourceTypeLabel.value
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.cardLink),
				onClick: withModifiers(onClick, ["stop"])
			}, {
				prepend: withCtx(() => [createVNode(CredentialIcon_default, { "credential-type-name": credentialType.value?.name ?? "" }, null, 8, ["credential-type-name"])]),
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(_ctx.$style.cardHeading)
				}, {
					default: withCtx(() => [
						createTextVNode(toDisplayString(__props.data.name) + " ", 1),
						__props.readOnly ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							class: "ml-3xs",
							theme: "tertiary",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.readonly")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						__props.needsSetup ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 1,
							class: "ml-3xs",
							theme: "warning"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.needsSetup")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						unref(isDynamicCredentialsEnabled) && __props.data.isResolvable ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 2,
							placement: "top"
						}, {
							content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tooltipContent) }, [createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("credentials.dynamic.tooltipTitle")), 1), createBaseVNode("span", null, toDisplayString(unref(locale).baseText("credentials.dynamic.tooltip")), 1)], 2)]),
							default: withCtx(() => [createVNode(unref(N8nBadge_default), {
								theme: "tertiary",
								class: "ml-3xs pl-3xs pr-3xs",
								"data-test-id": "credential-card-dynamic"
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.dynamicBadgeText) }, [createVNode(unref(N8nIcon_default), {
									icon: "key-round",
									size: "medium"
								}), createTextVNode(" " + toDisplayString(unref(locale).baseText("credentials.dynamic.badge")), 1)], 2)]),
								_: 1
							})]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, ["class"])]),
				append: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.cardActions),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [
					credentialHasDependents.value ? (openBlock(), createBlock(DependencyPill_default, {
						key: 0,
						"resource-type": "credential",
						"resource-id": __props.data.id,
						source: "credential_card",
						"data-test-id": "credential-card-dependents"
					}, null, 8, ["resource-id"])) : createCommentVNode("", true),
					createVNode(ProjectCardBadge_default, {
						class: normalizeClass(_ctx.$style.cardBadge),
						resource: __props.data,
						"resource-type": unref(ResourceType).Credential,
						"resource-type-label": resourceTypeLabel.value,
						"personal-project": unref(projectsStore).personalProject,
						"show-badge-border": false,
						global: __props.data.isGlobal
					}, null, 8, [
						"class",
						"resource",
						"resource-type",
						"resource-type-label",
						"personal-project",
						"global"
					]),
					createVNode(unref(N8nActionToggle_default), {
						"data-test-id": "credential-card-actions",
						actions: actions.value,
						theme: "dark",
						onAction
					}, null, 8, ["actions"])
				], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [
						credentialType.value ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(credentialType.value.displayName) + " | ", 1)) : createCommentVNode("", true),
						withDirectives(createBaseVNode("span", null, [
							createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.updated")) + " ", 1),
							createVNode(TimeAgo_default, { date: __props.data.updatedAt }, null, 8, ["date"]),
							_cache[1] || (_cache[1] = createTextVNode(" | ", -1))
						], 512), [[vShow, __props.data]]),
						withDirectives(createBaseVNode("span", null, toDisplayString(unref(locale).baseText("credentials.item.created")) + " " + toDisplayString(formattedCreatedAtDate.value), 513), [[vShow, __props.data]])
					]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var CredentialCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink: "_cardLink_e3ywi_125",
	cardHeading: "_cardHeading_e3ywi_135",
	cardDescription: "_cardDescription_e3ywi_142",
	cardActions: "_cardActions_e3ywi_149",
	dynamicBadgeText: "_dynamicBadgeText_e3ywi_160",
	tooltipContent: "_tooltipContent_e3ywi_168",
	cardBadge: "_cardBadge_e3ywi_184"
};
var CredentialCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/credentials/views/CredentialsView.vue?vue&type=script&setup=true&lang.ts
var import_pickBy = /* @__PURE__ */ __toESM(require_pickBy(), 1);
var _hoisted_1 = { class: "mb-s" };
var _hoisted_2 = { class: "mb-s" };
var _hoisted_3 = {
	key: 0,
	class: "mb-s"
};
var CredentialsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialsView",
	props: { credentialId: {} },
	setup(__props) {
		const props = __props;
		const credentialsStore = useCredentialsStore();
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const sourceControlStore = useSourceControlStore();
		const externalSecretsStore = useExternalSecretsStore();
		const projectsStore = useProjectsStore();
		const usersStore = useUsersStore();
		const insightsStore = useInsightsStore();
		const { fetchDependencyCounts } = useDependencies();
		const documentTitle = useDocumentTitle();
		const route = useRoute();
		const router = useRouter();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const overview = useProjectPages();
		const updateFilter = (state) => {
			router.replace({ query: (0, import_pickBy.default)(state) });
		};
		const onSearchUpdated = (search) => {
			updateFilter({
				...filters.value,
				search
			});
		};
		const filters = ref({
			...route.query,
			setupNeeded: route.query.setupNeeded?.toString() === "true",
			...route.query.externalSecretsStore ? { externalSecretsStore: route.query.externalSecretsStore.toString() } : {}
		});
		const loading = ref(false);
		const needsSetup = (data) => {
			const dataObject = data;
			if (!dataObject) return false;
			if (Object.keys(dataObject).length === 0) return true;
			return Object.values(dataObject).every((value) => !value || value === "__n8n_EMPTY_VALUE_7b1af746-3729-4c60-9b9b-e08eb29e58da");
		};
		const allCredentials = computed(() => credentialsStore.allCredentials.map((credential) => ({
			resourceType: "credential",
			id: credential.id,
			name: credential.name,
			value: "",
			updatedAt: credential.updatedAt,
			createdAt: credential.createdAt,
			homeProject: credential.homeProject,
			scopes: credential.scopes,
			sharedWithProjects: credential.sharedWithProjects,
			readOnly: !getResourcePermissions(credential.scopes).credential.update,
			needsSetup: needsSetup(credential.data),
			isGlobal: credential.isGlobal,
			isResolvable: credential.isResolvable,
			type: credential.type
		})));
		const allCredentialTypes = computed(() => credentialsStore.allCredentialTypes);
		const credentialTypesById = computed(() => credentialsStore.credentialTypesById);
		const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
		const projectPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes ?? projectsStore.personalProject?.scopes));
		const personalProject = computed(() => {
			return projectsStore.personalProject;
		});
		const showSecretStoreFilter = computed(() => {
			return !!route.query.externalSecretsStore && externalSecretsStore.isEnterpriseExternalSecretsEnabled;
		});
		const setRouteCredentialId = (credentialId) => {
			router.replace({
				params: { credentialId },
				query: route.query
			});
		};
		const addCredential = () => {
			setRouteCredentialId("create");
			telemetry.track("User clicked add cred button", { source: "Creds list" });
		};
		listenForModalChanges({
			store: uiStore,
			onModalClosed(modalName) {
				if (["selectCredential", "editCredential"].includes(modalName)) router.replace({
					params: { credentialId: "" },
					query: route.query
				});
				if (modalName === "editCredential" && credentialsStore.pendingOAuthRefresh) {
					credentialsStore.pendingOAuthRefresh = false;
					credentialsStore.fetchAllCredentials({
						projectId: route?.params?.projectId,
						includeScopes: true,
						externalSecretsStore: filters.value.externalSecretsStore
					});
				}
			}
		});
		const onFilter = (resource, newFilters, matches) => {
			if (!isCredentialsResource(resource)) return false;
			const filtersToApply = newFilters;
			if (filtersToApply.type && filtersToApply.type.length > 0) matches = matches && filtersToApply.type.includes(resource.type);
			if (filtersToApply.search) {
				const searchString = filtersToApply.search.toLowerCase();
				matches = matches || credentialTypesById.value[resource.type] && credentialTypesById.value[resource.type].displayName.toLowerCase().includes(searchString);
			}
			if (filtersToApply.setupNeeded) matches = matches && resource.needsSetup;
			return matches;
		};
		const maybeCreateCredential = () => {
			if (props.credentialId === "create") if (projectPermissions.value.credential.create) uiStore.openModal(CREDENTIAL_SELECT_MODAL_KEY);
			else router.replace({ name: VIEWS.HOMEPAGE });
		};
		const maybeEditCredential = async () => {
			if (!!props.credentialId && props.credentialId !== "create") {
				const credential = credentialsStore.getCredentialById(props.credentialId);
				const credentialPermissions = getResourcePermissions(credential?.scopes).credential;
				if (!credential) return await router.replace({
					name: VIEWS.ENTITY_NOT_FOUND,
					params: { entityType: "credential" }
				});
				if (credentialPermissions.update || credentialPermissions.read) {
					uiStore.openExistingCredential(props.credentialId);
					return;
				}
				return await router.replace({
					name: VIEWS.ENTITY_UNAUTHORIZED,
					params: { entityType: "credential" }
				});
			}
		};
		const initialize = async () => {
			loading.value = true;
			const isVarsEnabled = useSettingsStore().isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables];
			const isPersonalView = !overview.isSharedSubPage && overview.isProjectsSubPage && route?.params?.projectId === projectsStore.personalProject?.id;
			const loadPromises = [
				credentialsStore.fetchAllCredentials({
					projectId: route?.params?.projectId,
					includeScopes: true,
					onlySharedWithMe: overview.isSharedSubPage,
					includeGlobal: !isPersonalView,
					externalSecretsStore: filters.value.externalSecretsStore
				}),
				credentialsStore.fetchCredentialTypes(false),
				nodeTypesStore.loadNodeTypesIfNotLoaded(),
				isVarsEnabled ? useEnvironmentsStore().fetchAllVariables() : Promise.resolve()
			];
			await Promise.all(loadPromises);
			maybeCreateCredential();
			await maybeEditCredential();
			loading.value = false;
			fetchDependencyCounts(credentialsStore.allCredentials.map((c) => c.id), "credential");
		};
		credentialsStore.$onAction(({ name, after }) => {
			if (name === "createNewCredential" || name === "updateCredential") after(() => {
				credentialsStore.fetchAllCredentials({
					projectId: route?.params?.projectId,
					includeScopes: true,
					externalSecretsStore: filters.value.externalSecretsStore
				});
			});
		});
		sourceControlStore.$onAction(({ name, after }) => {
			if (name !== "pullWorkfolder") return;
			after(() => {
				initialize();
			});
		});
		watch(() => route?.params?.projectId, initialize);
		watch(() => props.credentialId, () => {
			maybeCreateCredential();
			maybeEditCredential();
		});
		watch(() => filters.value.externalSecretsStore, async (newValue, oldValue) => {
			if (newValue !== oldValue && (newValue !== void 0 || oldValue !== void 0)) initialize();
		});
		onMounted(() => {
			documentTitle.set(i18n.baseText("credentials.heading"));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
				ref: "layout",
				filters: filters.value,
				"onUpdate:filters": [_cache[0] || (_cache[0] = ($event) => filters.value = $event), updateFilter],
				"resource-key": "credentials",
				resources: allCredentials.value,
				initialize,
				"additional-filters-handler": onFilter,
				"type-props": { itemSize: 77 },
				loading: loading.value,
				disabled: readOnlyEnv.value || !projectPermissions.value.credential.create,
				"onUpdate:search": onSearchUpdated
			}, {
				header: withCtx(() => [createVNode(ProjectHeader_default, { "main-button": "credential" }, {
					default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				default: withCtx(({ data }) => [createVNode(CredentialCard_default, {
					"data-test-id": "resources-list-item",
					class: "mb-2xs",
					data,
					"read-only": data.readOnly,
					"needs-setup": data.needsSetup,
					onClick: setRouteCredentialId
				}, null, 8, [
					"data",
					"read-only",
					"needs-setup"
				])]),
				filters: withCtx(({ setKeyValue }) => [
					createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("credentials.filters.type"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
						ref: "typeInput",
						"model-value": filters.value.type,
						size: "medium",
						multiple: "",
						filterable: "",
						class: normalizeClass(_ctx.$style["type-input"]),
						"onUpdate:modelValue": ($event) => setKeyValue("type", $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(allCredentialTypes.value, (credentialType) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: credentialType.name,
								value: credentialType.name,
								label: credentialType.displayName
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, [
						"model-value",
						"class",
						"onUpdate:modelValue"
					])]),
					createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("credentials.filters.status"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(Checkbox_default), {
						label: unref(i18n).baseText("credentials.filters.setup"),
						"data-test-id": "credential-filter-setup-needed",
						"model-value": filters.value.setupNeeded,
						"onUpdate:modelValue": ($event) => setKeyValue("setupNeeded", $event)
					}, null, 8, [
						"label",
						"model-value",
						"onUpdate:modelValue"
					])]),
					showSecretStoreFilter.value && filters.value.externalSecretsStore ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("credentials.filters.secretStore"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
						"model-value": filters.value.externalSecretsStore,
						size: "medium",
						disabled: "",
						"data-test-id": "credential-filter-secret-store",
						class: normalizeClass(_ctx.$style["type-input"])
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: filters.value.externalSecretsStore,
							label: filters.value.externalSecretsStore
						}, null, 8, ["value", "label"])]),
						_: 1
					}, 8, ["model-value", "class"])])) : createCommentVNode("", true)
				]),
				empty: withCtx(() => [unref(overview).isSharedSubPage && personalProject.value ? (openBlock(), createBlock(EmptySharedSectionActionBox_default, {
					key: 0,
					"personal-project": personalProject.value,
					"resource-type": "credentials"
				}, null, 8, ["personal-project"])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 1,
					"data-test-id": "empty-resources-list",
					icon: {
						type: "icon",
						value: "lock"
					},
					heading: unref(i18n).baseText(unref(usersStore).currentUser?.firstName ? "credentials.empty.heading" : "credentials.empty.heading.userNotSetup", { interpolate: { name: unref(usersStore).currentUser?.firstName ?? "" } }),
					description: unref(i18n).baseText("credentials.empty.description"),
					"button-text": unref(i18n).baseText("credentials.empty.button"),
					"button-type": "secondary",
					"button-disabled": readOnlyEnv.value || !projectPermissions.value.credential.create,
					"button-icon": readOnlyEnv.value || !projectPermissions.value.credential.create ? "lock" : void 0,
					"onClick:button": addCredential
				}, {
					disabledButtonTooltip: withCtx(() => [createTextVNode(toDisplayString(readOnlyEnv.value ? unref(i18n).baseText("readOnlyEnv.cantAdd.credential") : unref(i18n).baseText("credentials.empty.button.disabled.tooltip")), 1)]),
					_: 1
				}, 8, [
					"heading",
					"description",
					"button-text",
					"button-disabled",
					"button-icon"
				]))]),
				_: 1
			}, 8, [
				"filters",
				"resources",
				"loading",
				"disabled"
			]);
		};
	}
});
//#endregion
//#region src/features/credentials/views/CredentialsView.vue?vue&type=style&index=0&lang.module.scss
var sidebarContainer = "_sidebarContainer_12nwp_129";
var CredentialsView_vue_vue_type_style_index_0_lang_module_default = {
	"type-input": "_type-input_12nwp_125",
	sidebarContainer
};
var CredentialsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CredentialsView_default as default };

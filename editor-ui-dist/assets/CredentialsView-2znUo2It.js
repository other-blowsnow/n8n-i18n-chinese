import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, p as vShow, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CngOnFvY.js";
import { Ct as useRoute, Et as Checkbox_default, Ji as N8nTooltip_default, Kt as N8nActionToggle_default, Mt as N8nOption_default, Pi as N8nBadge_default, Rt as N8nCard_default, Tt as N8nInputLabel_default, jt as N8nSelect_default, no as N8nButton_default, to as N8nText_default, wt as useRouter } from "./src-CtyOKmD-.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-ZuCTOGWe.js";
import { t as useToast } from "./useToast-COvPNq4S.js";
import { Ou as getResourcePermissions, Qd as EnterpriseEditionFeature, hi as VIEWS } from "./constants-CSBjw1Ht.js";
import { Ci as isCredentialsResource, Tn as useSourceControlStore, _ as useNodeTypesStore, st as useCredentialsStore, vn as useEnvironmentsStore, wn as useProjectsStore, yn as ResourceType } from "./workflowDocument.store-W274j3PU.js";
import { t as useSettingsStore } from "./settings.store-C5bX9q6f.js";
import { U as CREDENTIAL_SELECT_MODAL_KEY, d as listenForModalChanges, f as useUIStore, j as PROJECT_MOVE_RESOURCE_MODAL, p as useTelemetry } from "./users.store-C2APvywU.js";
import { t as require_dateformat } from "./dateformat-DrkL5gws.js";
import { t as useDocumentTitle } from "./useDocumentTitle-BaE0TfJz.js";
import { t as usePrivateCredentials } from "./usePrivateCredentials-0ornWtcs.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-Bh5NZU8q.js";
import { t as useCredentialOAuth } from "./useCredentialOAuth-BpG_MY57.js";
import { t as ProjectCardBadge_default } from "./ProjectCardBadge-CkfhmzcG.js";
import { t as CredentialIcon_default } from "./CredentialIcon-C4JJzuLL.js";
import { t as TimeAgo_default } from "./TimeAgo-CAMmP5bd.js";
import { t as PrivateCredentialIcon_default } from "./PrivateCredentialIcon-Dd9pdIXL.js";
import { t as useInstanceAiCredentialHelp } from "./useInstanceAiCredentialHelp-B8cqe3EN.js";
import { t as useInsightsStore } from "./insights.store-DABCyz4R.js";
import { i as useProjectPages } from "./readyToRun.store-BvjfuLP5.js";
import { t as EmptySharedSectionActionBox_default } from "./EmptySharedSectionActionBox-BXno5QnZ.js";
import { n as ResourcesListEmptyState_default } from "./PageViewLayout-gVhfpLuy.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-d038xLWa.js";
import { t as ProjectHeader_default } from "./ProjectHeader-BCgh5Ald.js";
import { n as useDependencies, t as DependencyPill_default } from "./DependencyPill-BPZFgF9z.js";
import { t as InsightsSummary_default } from "./InsightsSummary-BPfnnBd2.js";
import { t as require_pickBy } from "./pickBy-BZz83lLp.js";
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
	emits: ["click", "connected"],
	setup(__props, { emit: __emit }) {
		const CREDENTIAL_LIST_ITEM_ACTIONS = {
			OPEN: "open",
			DELETE: "delete",
			MOVE: "move",
			DISCONNECT: "disconnect"
		};
		const emit = __emit;
		const props = __props;
		const locale = useI18n();
		const message = useMessage();
		const toast = useToast();
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const { isEnabled: isPrivateCredentialsEnabled } = usePrivateCredentials();
		const { hasDependencies } = useDependencies();
		const { authorize, isOAuthCredentialType } = useCredentialOAuth();
		const isConnecting = ref(false);
		const resourceTypeLabel = computed(() => locale.baseText("generic.credential").toLowerCase());
		const credentialType = computed(() => credentialsStore.getCredentialTypeByName(props.data.type ?? ""));
		const credentialPermissions = computed(() => getResourcePermissions(props.data.scopes).credential);
		const isPrivateUnconnected = computed(() => isPrivateCredentialsEnabled.value && props.data.isResolvable === true && props.data.connectedByMe === false && credentialPermissions.value.connect === true);
		const actions = computed(() => {
			const items = [{
				label: locale.baseText("credentials.item.open"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.OPEN
			}];
			if (credentialPermissions.value.delete && (!props.data.isResolvable || credentialPermissions.value.createEndUser)) items.push({
				label: locale.baseText("credentials.item.delete"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.DELETE
			});
			if (credentialPermissions.value.move && projectsStore.isTeamProjectFeatureEnabled) items.push({
				label: locale.baseText("credentials.item.move"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.MOVE
			});
			if (isPrivateCredentialsEnabled.value && props.data.isResolvable && props.data.connectedByMe) items.push({
				label: locale.baseText("credentials.item.disconnect"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.DISCONNECT
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
		async function onConnect() {
			const credential = credentialsStore.getCredentialById(props.data.id);
			if (!credential) return;
			if (!isOAuthCredentialType(credential.type)) {
				onClick();
				return;
			}
			isConnecting.value = true;
			try {
				if (await authorize(credential)) emit("connected", props.data.id);
			} finally {
				isConnecting.value = false;
			}
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
				case CREDENTIAL_LIST_ITEM_ACTIONS.DISCONNECT:
					await disconnectResource();
					break;
			}
		}
		async function deleteResource() {
			if (await message.confirm(locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.message", { interpolate: { savedCredentialName: props.data.name } }), locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline"), { confirmButtonText: locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText") }) === "confirm") await credentialsStore.deleteCredential({ id: props.data.id });
		}
		async function disconnectResource() {
			if (await message.confirm(locale.baseText("credentialEdit.credentialEdit.confirmMessage.disconnectCredential.message", { interpolate: { savedCredentialName: props.data.name } }), locale.baseText("credentialEdit.credentialEdit.confirmMessage.disconnectCredential.headline"), { confirmButtonText: locale.baseText("credentialEdit.credentialEdit.confirmMessage.disconnectCredential.confirmButtonText") }) !== "confirm") return;
			try {
				await credentialsStore.disconnectMyConnection({ id: props.data.id });
				toast.showMessage({
					title: locale.baseText("credentialEdit.credentialEdit.showMessage.disconnected.title"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("credentialEdit.credentialEdit.showError.disconnectCredential.title"));
			}
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
					isPrivateUnconnected.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.connect.tooltip")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							type: "primary",
							size: "mini",
							loading: isConnecting.value,
							"data-test-id": "credential-card-connect",
							onClick: onConnect
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.connect")), 1)]),
							_: 1
						}, 8, ["loading"])]),
						_: 1
					})) : createCommentVNode("", true),
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
				}), unref(isPrivateCredentialsEnabled) && __props.data.isResolvable ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.privateCredentialIndicator),
					"data-test-id": "credential-card-dynamic"
				}, [createVNode(PrivateCredentialIcon_default, {
					"tooltip-title": unref(locale).baseText("credentials.private.tooltipTitle"),
					"tooltip-text": unref(locale).baseText("credentials.private.tooltip"),
					size: "small"
				}, null, 8, ["tooltip-title", "tooltip-text"])], 2)) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var CredentialCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink: "_cardLink_1ro0j_125",
	cardHeading: "_cardHeading_1ro0j_135",
	cardDescription: "_cardDescription_1ro0j_142",
	privateCredentialIndicator: "_privateCredentialIndicator_1ro0j_149",
	cardActions: "_cardActions_1ro0j_155",
	cardBadge: "_cardBadge_1ro0j_176"
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
		const instanceAiCredentialHelp = useInstanceAiCredentialHelp();
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
		const needsSetup = (credential) => {
			if (credential.isResolvable) return false;
			const dataObject = credential.data;
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
			needsSetup: needsSetup(credential),
			isGlobal: credential.isGlobal,
			isResolvable: credential.isResolvable,
			connectedByMe: credential.connectedByMe,
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
		const refreshCredentials = () => {
			credentialsStore.fetchAllCredentials({
				projectId: route?.params?.projectId,
				includeScopes: true,
				externalSecretsStore: filters.value.externalSecretsStore
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
					refreshCredentials();
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
					uiStore.openExistingCredential(props.credentialId, { instanceAiCredentialHelp: instanceAiCredentialHelp() });
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
				refreshCredentials();
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
					onClick: setRouteCredentialId,
					onConnected: refreshCredentials
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
				}, null, 8, ["personal-project"])) : (openBlock(), createBlock(ResourcesListEmptyState_default, {
					key: 1,
					"resource-key": "credentials",
					"button-disabled": readOnlyEnv.value || !projectPermissions.value.credential.create,
					"disabled-tooltip-text": readOnlyEnv.value ? unref(i18n).baseText("readOnlyEnv.cantAdd.credential") : void 0,
					"onClick:button": addCredential
				}, null, 8, ["button-disabled", "disabled-tooltip-text"]))]),
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

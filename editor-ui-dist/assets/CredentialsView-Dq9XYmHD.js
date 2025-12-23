import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, p as vShow, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { $ as N8nInputLabel_default, Hn as N8nText_default, J as N8nSelect_default, Q as N8nCheckbox_default, Y as N8nOption_default, et as N8nCard_default, it as N8nActionToggle_default, lt as N8nBadge_default, wt as N8nActionBox_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { v as useRoute, y as useRouter } from "./truncate-BlCeUq7F.js";
import "./overlay-Crh-SkkJ.js";
import "./empty-BuGRxzl4.js";
import { t as useMessage } from "./useMessage-LAVj4VkL.js";
import { $o as useSettingsStore, Fn as useSourceControlStore, Io as CREDENTIAL_EDIT_MODAL_KEY, Lo as CREDENTIAL_SELECT_MODAL_KEY, Nn as useDocumentTitle, On as useEnvironmentsStore, Pn as useProjectsStore, Ui as listenForModalChanges, Wi as useUIStore, _t as useNodeTypesStore, dr as useUsersStore, en as useCredentialsStore, hr as isCredentialsResource, p as useTelemetry, qr as ResourceType, ta as PROJECT_MOVE_RESOURCE_MODAL } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { Vo as VIEWS, jo as getResourcePermissions, ss as MODAL_CONFIRM, to as CREDENTIAL_EMPTY_VALUE, wc as EnterpriseEditionFeature } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import "./_baseOrderBy-B2FQHwl_.js";
import { t as require_dateformat } from "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./cloudPlan.store-2sNk8KGc.js";
import "./folders.store-BHgrqAL-.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-BnT4MP-2.js";
import "./ProjectIcon-DTrnRNdg.js";
import { t as ProjectCardBadge_default } from "./ProjectCardBadge-CYdY_gq_.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CHvZKgl9.js";
import "./EnterpriseEdition.ee-mw8TFNQ6.js";
import { t as TimeAgo_default } from "./TimeAgo-i8FaEReL.js";
import "./orderBy-CTdFEkRg.js";
import "./ProjectSharing-C0wkfel0.js";
import { t as useInsightsStore } from "./insights.store-4ZcvrzGW.js";
import "./insights.constants-B7y0cvTb.js";
import "./insights.utils-Cp5pMXsI.js";
import { n as useProjectPages } from "./readyToRun.store-CfVU-Hg7.js";
import "./PageViewLayout-B889Bfwc.js";
import { t as EmptySharedSectionActionBox_default } from "./EmptySharedSectionActionBox-C1L9rIvC.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-mVdmDhyI.js";
import "./ResourceFiltersDropdown-Ds-Rhizp.js";
import { t as ProjectHeader_default } from "./ProjectHeader-BGy9T7Qo.js";
import "./smartDecimal-Bi50OE4b.js";
import { t as InsightsSummary_default } from "./InsightsSummary-CnJdxMPo.js";
import { t as require_pickBy } from "./pickBy-DLYe8JQs.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat());
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
						createTextVNode(toDisplayString(_ctx.data.name) + " ", 1),
						_ctx.readOnly ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							class: "ml-3xs",
							theme: "tertiary",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.readonly")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						_ctx.needsSetup ? (openBlock(), createBlock(unref(N8nBadge_default), {
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
				}, [createVNode(ProjectCardBadge_default, {
					class: normalizeClass(_ctx.$style.cardBadge),
					resource: _ctx.data,
					"resource-type": unref(ResourceType).Credential,
					"resource-type-label": resourceTypeLabel.value,
					"personal-project": unref(projectsStore).personalProject,
					"show-badge-border": false,
					global: _ctx.data.isGlobal
				}, null, 8, [
					"class",
					"resource",
					"resource-type",
					"resource-type-label",
					"personal-project",
					"global"
				]), createVNode(unref(N8nActionToggle_default), {
					"data-test-id": "credential-card-actions",
					actions: actions.value,
					theme: "dark",
					onAction
				}, null, 8, ["actions"])], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [
						credentialType.value ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(credentialType.value.displayName) + " | ", 1)) : createCommentVNode("", true),
						withDirectives(createBaseVNode("span", null, [
							createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.updated")) + " ", 1),
							createVNode(TimeAgo_default, { date: _ctx.data.updatedAt }, null, 8, ["date"]),
							_cache[1] || (_cache[1] = createTextVNode(" | "))
						], 512), [[vShow, _ctx.data]]),
						withDirectives(createBaseVNode("span", null, toDisplayString(unref(locale).baseText("credentials.item.created")) + " " + toDisplayString(formattedCreatedAtDate.value), 513), [[vShow, _ctx.data]])
					]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var CredentialCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink: "_cardLink_1g76h_123",
	cardHeading: "_cardHeading_1g76h_133",
	cardDescription: "_cardDescription_1g76h_138",
	cardActions: "_cardActions_1g76h_145",
	cardBadge: "_cardBadge_1g76h_165"
};
var CredentialCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialCard_vue_vue_type_style_index_0_lang_module_default }]]);
var import_pickBy = /* @__PURE__ */ __toESM(require_pickBy());
var _hoisted_1 = { class: "mb-s" };
var _hoisted_2 = { class: "mb-s" };
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
			setupNeeded: route.query.setupNeeded?.toString() === "true"
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
			type: credential.type
		})));
		const allCredentialTypes = computed(() => credentialsStore.allCredentialTypes);
		const credentialTypesById = computed(() => credentialsStore.credentialTypesById);
		const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
		const projectPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes ?? projectsStore.personalProject?.scopes));
		const personalProject = computed(() => {
			return projectsStore.personalProject;
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
				credentialsStore.fetchAllCredentials(route?.params?.projectId, true, overview.isSharedSubPage, !isPersonalView),
				credentialsStore.fetchCredentialTypes(false),
				externalSecretsStore.fetchAllSecrets(),
				nodeTypesStore.loadNodeTypesIfNotLoaded(),
				isVarsEnabled ? useEnvironmentsStore().fetchAllVariables() : Promise.resolve()
			];
			await Promise.all(loadPromises);
			maybeCreateCredential();
			await maybeEditCredential();
			loading.value = false;
		};
		credentialsStore.$onAction(({ name, after }) => {
			if (name === "createNewCredential") after(() => {
				credentialsStore.fetchAllCredentials(route?.params?.projectId);
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
				filters: withCtx(({ setKeyValue }) => [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nInputLabel_default), {
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
					_: 2
				}, 1032, [
					"model-value",
					"class",
					"onUpdate:modelValue"
				])]), createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("credentials.filters.status"),
					bold: false,
					size: "small",
					color: "text-base",
					class: "mb-3xs"
				}, null, 8, ["label"]), createVNode(unref(N8nCheckbox_default), {
					label: unref(i18n).baseText("credentials.filters.setup"),
					"data-test-id": "credential-filter-setup-needed",
					"model-value": filters.value.setupNeeded,
					"onUpdate:modelValue": ($event) => setKeyValue("setupNeeded", $event)
				}, null, 8, [
					"label",
					"model-value",
					"onUpdate:modelValue"
				])])]),
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
const sidebarContainer = "_sidebarContainer_105ey_127";
var CredentialsView_vue_vue_type_style_index_0_lang_module_default = {
	"type-input": "_type-input_105ey_123",
	sidebarContainer
};
var CredentialsView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialsView_vue_vue_type_style_index_0_lang_module_default }]]);
export { CredentialsView_default as default };

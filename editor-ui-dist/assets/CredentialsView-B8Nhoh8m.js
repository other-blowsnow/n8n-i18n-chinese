import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, p as vShow, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-It4eafc2.js";
import { $ as N8nActionToggle_default, Fn as N8nText_default, G as N8nOption_default, J as N8nCheckbox_default, Tt as N8nActionBox_default, W as N8nSelect_default, X as N8nCard_default, Y as N8nInputLabel_default, it as N8nBadge_default } from "./src-CrJGxD3z.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-DHb0OvjC.js";
import "./icon-Bx8huFc-.js";
import "./overlay-DM1TXj1b.js";
import "./empty-BuGRxzl4.js";
import { t as useMessage } from "./useMessage-CpBf605K.js";
import { An as useProjectsStore, Ao as CREDENTIAL_SELECT_MODAL_KEY, Br as ResourceType, Ht as useCredentialsStore, Ii as listenForModalChanges, Ji as PROJECT_MOVE_RESOURCE_MODAL, Li as useUIStore, cr as isCredentialsResource, ir as useUsersStore, jn as useSourceControlStore, kn as useDocumentTitle, ko as CREDENTIAL_EDIT_MODAL_KEY, rt as useNodeTypesStore, t as useTelemetry, yn as environments_store_default, zo as useSettingsStore } from "./useTelemetry-D6pZULgL.js";
import "./useToast-BabYcC1S.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { Do as MODAL_CONFIRM, Fs as EnterpriseEditionFeature, co as VIEWS, hr as getResourcePermissions, ra as CREDENTIAL_EMPTY_VALUE } from "./constants-UStNMe6H.js";
import "./merge-D5iNo-Qh.js";
import { t as require_dateformat } from "./dateformat-D7TIhVd4.js";
import "./useDebounce-SobFYd6D.js";
import "./useExternalHooks-D1vL2UOW.js";
import "./cloudPlan.store-CNTnzOJi.js";
import "./folders.store-1odl9d9k.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-K8MVA3Re.js";
import "./ProjectIcon-b_BDsXEn.js";
import { t as ProjectCardBadge_default } from "./ProjectCardBadge-BV4jbxq7.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DUOHN_vH.js";
import "./EnterpriseEdition.ee-DwcZ35wK.js";
import { t as TimeAgo_default } from "./TimeAgo-D2Y1n9dh.js";
import "./orderBy-BcYAMhFM.js";
import "./ProjectSharing-DroW3nOI.js";
import { t as useInsightsStore } from "./insights.store-Bi72UXCR.js";
import "./insights.constants-DK2g3nnD.js";
import "./insights.utils-DfH13a9J.js";
import { t as useProjectPages } from "./useProjectPages-Byl1L7T-.js";
import "./readyToRunWorkflowsV2.store-Tq6BgEp-.js";
import { t as ProjectHeader_default } from "./ProjectHeader-DdJO3VCM.js";
import "./PageViewLayout-CCwb27rd.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-B02IM2RY.js";
import { t as require_pickBy } from "./pickBy-BZh3MYkr.js";
import "./smartDecimal-BitNC0jz.js";
import { t as InsightsSummary_default } from "./InsightsSummary-BBAyIJZP.js";
import { t as EmptySharedSectionActionBox_default } from "./EmptySharedSectionActionBox-B2GrIrE5.js";
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
					"show-badge-border": false
				}, null, 8, [
					"class",
					"resource",
					"resource-type",
					"resource-type-label",
					"personal-project"
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
			const loadPromises = [
				credentialsStore.fetchAllCredentials(route?.params?.projectId, true, overview.isSharedSubPage),
				credentialsStore.fetchCredentialTypes(false),
				externalSecretsStore.fetchAllSecrets(),
				nodeTypesStore.loadNodeTypesIfNotLoaded(),
				isVarsEnabled ? environments_store_default().fetchAllVariables() : Promise.resolve()
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
					emoji: "👋",
					heading: unref(i18n).baseText(unref(usersStore).currentUser?.firstName ? "credentials.empty.heading" : "credentials.empty.heading.userNotSetup", { interpolate: { name: unref(usersStore).currentUser?.firstName ?? "" } }),
					description: unref(i18n).baseText("credentials.empty.description"),
					"button-text": unref(i18n).baseText("credentials.empty.button"),
					"button-type": "secondary",
					"button-disabled": readOnlyEnv.value || !projectPermissions.value.credential.create,
					"button-icon": readOnlyEnv.value ? "lock" : void 0,
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

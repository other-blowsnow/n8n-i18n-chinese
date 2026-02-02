import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Ai as N8nIconButton_default, Bi as N8nButton_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, dt as N8nOption_default, ut as N8nSelect_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Vt as useProjectsStore, hr as useToast, ja as CREDENTIAL_EDIT_MODAL_KEY, n as listenForModalChanges, nt as listenForCredentialChanges, r as useUIStore, rt as useCredentialsStore, xr as useMessage } from "./users.store-qBZsmf9-.js";
import { Bo as getResourcePermissions, hs as MODAL_CONFIRM } from "./constants-Cyrg9Nbl.js";
import { _ as assert } from "./_baseOrderBy-3Uh8XZv3.js";
var _hoisted_1 = ["disabled"];
var CredentialsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialsDropdown",
	props: {
		credentialOptions: {},
		selectedCredentialId: {},
		permissions: {}
	},
	emits: ["credentialSelected", "newCredential"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const selectRefs = ref(null);
		const filter = ref("");
		function matches(needle, haystack) {
			return haystack.toLocaleLowerCase().includes(needle.toLocaleLowerCase());
		}
		const filteredOptions = computed(() => {
			if (!filter.value) return props.credentialOptions;
			return props.credentialOptions.filter((option) => matches(filter.value, option.name) || option.homeProject?.name && matches(filter.value, option.homeProject.name));
		});
		const onFilter = (newFilter = "") => {
			filter.value = newFilter;
		};
		const onCredentialSelected = (credentialId) => {
			emit("credentialSelected", credentialId);
		};
		const onCreateNewCredential = async () => {
			selectRefs.value?.blur();
			await nextTick();
			emit("newCredential");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nSelect_default), {
				ref_key: "selectRefs",
				ref: selectRefs,
				size: "small",
				filterable: "",
				"filter-method": onFilter,
				"model-value": props.selectedCredentialId,
				"popper-class": _ctx.$style.selectPopper,
				"onUpdate:modelValue": onCredentialSelected
			}, {
				empty: withCtx(() => [..._cache[1] || (_cache[1] = [])]),
				footer: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					disabled: props.permissions.create,
					content: unref(i18n).baseText("nodeCredentials.createNew.permissionDenied"),
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("button", {
						type: "button",
						"data-test-id": "node-credentials-select-item-new",
						class: normalizeClass([_ctx.$style.newCredential]),
						disabled: !props.permissions.create,
						onClick: _cache[0] || (_cache[0] = ($event) => onCreateNewCredential())
					}, [createVNode(unref(N8nIcon_default), {
						size: "xsmall",
						icon: "plus"
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("nodeCredentials.createNew")), 1)], 10, _hoisted_1)]),
					_: 1
				}, 8, ["disabled", "content"])]),
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredOptions.value, (item) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: item.id,
						"data-test-id": `node-credentials-select-item-${item.id}`,
						label: item.name,
						value: item.id
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.credentialOption, "mt-2xs mb-2xs"]) }, [createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
							_: 2
						}, 1024), item.homeProject ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(`${item.typeDisplayName} - ${item.homeProject?.name}`), 1)]),
							_: 2
						}, 1024)) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.typeDisplayName), 1)]),
							_: 2
						}, 1024))], 2)]),
						_: 2
					}, 1032, [
						"data-test-id",
						"label",
						"value"
					]);
				}), 128))]),
				_: 1
			}, 8, ["model-value", "popper-class"]);
		};
	}
});
var CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default = {
	selectPopper: "_selectPopper_178ar_125",
	newCredential: "_newCredential_178ar_128",
	credentialOption: "_credentialOption_178ar_137"
};
var CredentialsDropdown_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialsDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
var CredentialPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialPicker",
	props: {
		appName: {},
		credentialType: {},
		selectedCredentialId: {},
		personalOnly: { type: Boolean },
		showDelete: { type: Boolean },
		hideCreateNew: { type: Boolean }
	},
	emits: [
		"credentialSelected",
		"credentialDeselected",
		"credentialModalOpened",
		"credentialDeleted"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const wasModalOpenedFromHere = ref(false);
		const currentCredential = ref(null);
		const availableCredentials = computed(() => {
			const credByType = credentialsStore.getCredentialsByType(props.credentialType);
			if (props.personalOnly) return credByType.filter((credential) => credential.homeProject?.type === "personal" || credential.isGlobal);
			return credByType;
		});
		const credentialOptions = computed(() => {
			return availableCredentials.value.map((credential) => ({
				id: credential.id,
				name: credential.name,
				typeDisplayName: credentialsStore.getCredentialTypeByName(credential.type)?.displayName,
				homeProject: credential.homeProject
			}));
		});
		async function loadCurrentCredential() {
			if (!props.selectedCredentialId) return;
			try {
				const currentCredentials = await credentialsStore.getCredentialData({ id: props.selectedCredentialId });
				if (!currentCredentials) throw new Error(i18n.baseText("credentialEdit.credentialEdit.couldNotFindCredentialWithId") + ":" + props.selectedCredentialId);
				currentCredential.value = currentCredentials;
			} catch (error) {
				toast.showError(error, i18n.baseText("credentialEdit.credentialEdit.showError.loadCredential.title"));
				return;
			}
		}
		const homeProject = computed(() => {
			const { currentProject, personalProject } = projectsStore;
			return currentProject ?? personalProject;
		});
		const credentialPermissions = computed(() => {
			return getResourcePermissions(currentCredential.value?.scopes ?? homeProject.value?.scopes).credential;
		});
		const onCredentialSelected = (credentialId) => {
			emit("credentialSelected", credentialId);
		};
		const createNewCredential = () => {
			uiStore.openNewCredential(props.credentialType, true);
			wasModalOpenedFromHere.value = true;
			emit("credentialModalOpened", void 0);
		};
		const editCredential = () => {
			assert(props.selectedCredentialId);
			uiStore.openExistingCredential(props.selectedCredentialId);
			wasModalOpenedFromHere.value = true;
			emit("credentialModalOpened", props.selectedCredentialId);
		};
		const deleteCredential = async () => {
			assert(props.selectedCredentialId);
			const credentialIdToDelete = props.selectedCredentialId;
			if (await message.confirm(i18n.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.message", { interpolate: { savedCredentialName: currentCredential.value?.name ?? props.selectedCredentialId } }), i18n.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline"), { confirmButtonText: i18n.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText") }) !== "confirm") return;
			try {
				await credentialsStore.deleteCredential({ id: credentialIdToDelete });
				currentCredential.value = null;
				emit("credentialDeleted", credentialIdToDelete);
			} catch (error) {
				toast.showError(error, i18n.baseText("credentialEdit.credentialEdit.showError.deleteCredential.title"));
			}
		};
		listenForCredentialChanges({
			store: credentialsStore,
			onCredentialCreated: (credential) => {
				if (!wasModalOpenedFromHere.value) return;
				emit("credentialSelected", credential.id);
			},
			onCredentialDeleted: (deletedCredentialId) => {
				if (!wasModalOpenedFromHere.value) return;
				if (deletedCredentialId !== props.selectedCredentialId) return;
				const optionsWoDeleted = credentialOptions.value.map((credential) => credential.id).filter((id) => id !== deletedCredentialId);
				if (optionsWoDeleted.length > 0) emit("credentialSelected", optionsWoDeleted[0]);
				else emit("credentialDeselected");
			}
		});
		listenForModalChanges({
			store: uiStore,
			onModalClosed(modalName) {
				if (modalName === "editCredential" && wasModalOpenedFromHere.value) wasModalOpenedFromHere.value = false;
			}
		});
		watch(() => props.selectedCredentialId, () => {
			loadCurrentCredential();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [credentialOptions.value.length > 0 || props.hideCreateNew ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.dropdown)
			}, [
				createVNode(CredentialsDropdown_default, {
					"credential-type": props.credentialType,
					"credential-options": credentialOptions.value,
					"selected-credential-id": props.selectedCredentialId,
					"data-test-id": "credential-dropdown",
					permissions: credentialPermissions.value,
					onCredentialSelected,
					onNewCredential: createNewCredential
				}, null, 8, [
					"credential-type",
					"credential-options",
					"selected-credential-id",
					"permissions"
				]),
				createVNode(unref(N8nTooltip_default), {
					disabled: credentialPermissions.value.update,
					content: unref(i18n).baseText("nodeCredentials.updateCredential.permissionDenied"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "pen",
						type: "secondary",
						class: normalizeClass({
							[_ctx.$style.edit]: true,
							[_ctx.$style.invisible]: !props.selectedCredentialId
						}),
						title: unref(i18n).baseText("nodeCredentials.updateCredential"),
						"data-test-id": "credential-edit-button",
						disabled: !credentialPermissions.value.update,
						onClick: _cache[0] || (_cache[0] = ($event) => editCredential())
					}, null, 8, [
						"class",
						"title",
						"disabled"
					])]),
					_: 1
				}, 8, ["disabled", "content"]),
				createVNode(unref(N8nTooltip_default), {
					disabled: credentialPermissions.value.update,
					content: unref(i18n).baseText("nodeCredentials.deleteCredential.permissionDenied"),
					placement: "top"
				}, {
					default: withCtx(() => [props.showDelete && props.selectedCredentialId ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						"native-type": "button",
						title: unref(i18n).baseText("nodeCredentials.deleteCredential"),
						icon: "trash-2",
						"icon-size": "large",
						type: "secondary",
						disabled: !credentialPermissions.value.delete,
						onClick: _cache[1] || (_cache[1] = ($event) => deleteCredential())
					}, null, 8, ["title", "disabled"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["disabled", "content"])
			], 2)) : !props.hideCreateNew ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				label: `Create new ${props.appName} credential`,
				"data-test-id": "create-credential",
				disabled: !credentialPermissions.value.create,
				onClick: createNewCredential
			}, null, 8, ["label", "disabled"])) : createCommentVNode("", true)]);
		};
	}
});
var CredentialPicker_vue_vue_type_style_index_0_lang_module_default = {
	dropdown: "_dropdown_byrhm_125",
	edit: "_edit_byrhm_130",
	invisible: "_invisible_byrhm_138"
};
var CredentialPicker_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialPicker_vue_vue_type_style_index_0_lang_module_default }]]);
export { CredentialPicker_default as t };

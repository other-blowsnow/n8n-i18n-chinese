import { $ as openBlock, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, T as createCommentVNode, Wt as unref, _n as normalizeClass, gt as watch, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-BH7Ervrw.js";
import { Ea as N8nButton_default, Li as N8nIconButton_default, Mi as N8nTooltip_default } from "./src-D7XhL4SE.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-BOif5LxQ.js";
import { Gr as useProjectsStore, nt as useCredentialsStore, tt as listenForCredentialChanges } from "./workflows.store-aCrKXfPW.js";
import { t as useToast } from "./useToast-CBSZ9zNh.js";
import { el as getResourcePermissions } from "./constants-Brs44Mbc.js";
import { h as assert } from "./useRootStore-NTSmdx9S.js";
import { d as listenForModalChanges, f as useUIStore } from "./users.store-ByD75lsx.js";
import { t as CredentialsDropdown_default } from "./CredentialsDropdown-DIyX9sij.js";
//#region src/features/credentials/components/CredentialPicker/CredentialPicker.vue?vue&type=script&setup=true&lang.ts
var CredentialPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialPicker",
	props: {
		appName: {},
		credentialType: {},
		selectedCredentialId: {},
		personalOnly: { type: Boolean },
		showDelete: { type: Boolean },
		hideCreateNew: { type: Boolean },
		createButtonVariant: {},
		projectId: {},
		suggestedCredentialName: {}
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
			uiStore.openNewCredential(props.credentialType, true, false, props.projectId, props.suggestedCredentialName);
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
				if (modalName === "editCredential" && wasModalOpenedFromHere.value) {
					wasModalOpenedFromHere.value = false;
					if (props.selectedCredentialId) emit("credentialSelected", props.selectedCredentialId);
				}
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
				props.selectedCredentialId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					disabled: credentialPermissions.value.update,
					content: unref(i18n).baseText("nodeCredentials.updateCredential.permissionDenied"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						icon: "pen",
						class: normalizeClass({ [_ctx.$style.edit]: true }),
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
				}, 8, ["disabled", "content"])) : createCommentVNode("", true),
				props.showDelete && props.selectedCredentialId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
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
						variant: "outline",
						disabled: !credentialPermissions.value.delete,
						onClick: _cache[1] || (_cache[1] = ($event) => deleteCredential())
					}, null, 8, ["title", "disabled"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["disabled", "content"])) : createCommentVNode("", true)
			], 2)) : !props.hideCreateNew ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				label: `Create new ${props.appName} credential`,
				class: normalizeClass(_ctx.$style.createButton),
				"data-test-id": "create-credential",
				variant: props.createButtonVariant || "solid",
				disabled: !credentialPermissions.value.create,
				onClick: createNewCredential
			}, null, 8, [
				"label",
				"class",
				"variant",
				"disabled"
			])) : createCommentVNode("", true)]);
		};
	}
});
var CredentialPicker_vue_vue_type_style_index_0_lang_module_default = {
	dropdown: "_dropdown_1f3y0_125",
	edit: "_edit_1f3y0_131",
	createButton: "_createButton_1f3y0_139"
};
var CredentialPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialPicker_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CredentialPicker_default as t };

import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { Bt as toRaw, C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, x as useAsyncState } from "./_MapCache-pT3vKw8Z.js";
import { B as N8nFormInput_default, In as N8nText_default, Ln as N8nButton_default, Pn as N8nHeading_default, et as N8nLoading_default, vt as N8nTooltip_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import { Ft as require_sortBy, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { No as MODAL_CONFIRM, Ta as require_isEqual, mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import { t as useRolesStore } from "./roles.store-Cht5fHcq.js";
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual());
var import_sortBy = /* @__PURE__ */ __toESM(require_sortBy());
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { style: { "flex": "1" } };
var _hoisted_3 = {
	key: 0,
	class: "mt-xl"
};
var ProjectRoleView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectRoleView",
	props: { roleSlug: {} },
	setup(__props) {
		const rolesStore = useRolesStore();
		const router = useRouter();
		const { showError, showMessage } = useToast();
		const i18n = useI18n();
		const message = useMessage();
		const telemetry = useTelemetry();
		const props = __props;
		const defaultForm = () => ({
			displayName: "",
			description: "",
			scopes: structuredClone(toRaw(rolesStore.processedProjectRoles.find((role) => role.slug === "project:viewer")?.scopes || []))
		});
		const initialState = ref();
		const { state: form, isLoading } = useAsyncState(async () => {
			if (!props.roleSlug) return defaultForm();
			try {
				const role = await rolesStore.fetchRoleBySlug({ slug: props.roleSlug });
				initialState.value = structuredClone(role);
				return {
					displayName: role.displayName,
					description: role.description,
					scopes: role.scopes
				};
			} catch (error) {
				showError(error, "Error fetching role");
				return defaultForm();
			}
		}, defaultForm(), { shallow: false });
		const hasUnsavedChanges = computed(() => {
			if (!initialState.value) return false;
			if (!(0, import_isEqual.default)(initialState.value.displayName, form.value.displayName)) return true;
			if (!(0, import_isEqual.default)(initialState.value.description ?? null, form.value.description || null)) return true;
			if (!(0, import_isEqual.default)((0, import_sortBy.default)(initialState.value.scopes), (0, import_sortBy.default)(form.value.scopes))) return true;
			return false;
		});
		function resetForm(payload) {
			form.value = payload ? {
				displayName: payload.displayName,
				description: payload.description,
				scopes: payload.scopes
			} : defaultForm();
		}
		const project = [
			"read",
			"update",
			"delete"
		].map((action) => `project:${action}`);
		const folder = [
			"read",
			"update",
			"create",
			"move",
			"delete"
		].map((action) => `folder:${action}`);
		const workflow = [
			"read",
			"update",
			"create",
			"move",
			"delete"
		].map((action) => `workflow:${action}`);
		const credential = [
			"read",
			"update",
			"create",
			"share",
			"move",
			"delete"
		].map((action) => `credential:${action}`);
		const sourceControl = ["push"].map((action) => `sourceControl:${action}`);
		const dataTable = [
			"read",
			"readRow",
			"update",
			"writeRow",
			"create",
			"delete"
		].map((action) => `dataTable:${action}`);
		const projectVariable = [
			"read",
			"update",
			"create",
			"delete"
		].map((action) => `projectVariable:${action}`);
		const scopeTypes = [
			"project",
			"folder",
			"workflow",
			"credential",
			"dataTable",
			"projectVariable",
			"sourceControl"
		];
		const scopes = {
			project,
			folder,
			workflow,
			credential,
			sourceControl,
			dataTable,
			projectVariable
		};
		function toggleScope(scope) {
			const index = form.value.scopes.indexOf(scope);
			if (index !== -1) form.value.scopes.splice(index, 1);
			else form.value.scopes.push(scope);
			if (scope.startsWith("dataTable:") && scope.endsWith(":read")) {
				toggleScope(scope.replace(":read", ":listProject"));
				return;
			}
			if (scope.endsWith(":read")) toggleScope(scope.replace(":read", ":list"));
			if (scope === "workflow:update") toggleScope("workflow:execute");
		}
		async function createProjectRole() {
			try {
				const role = await rolesStore.createProjectRole({
					...form.value,
					description: form.value.description ?? void 0,
					roleType: "project"
				});
				rolesStore.fetchRoles();
				telemetry.track("User successfully created new role", {
					role_id: role.slug,
					role_name: role.displayName,
					permissions: role.scopes
				});
				router.replace({
					name: VIEWS.PROJECT_ROLE_SETTINGS,
					params: { roleSlug: role.slug }
				});
				showMessage({
					type: "success",
					message: i18n.baseText("projectRoles.action.create.success")
				});
				initialState.value = structuredClone(role);
				return role;
			} catch (error) {
				showError(error, i18n.baseText("projectRoles.action.create.error"));
				return;
			}
		}
		async function confirmRoleUpdate(usedByUsers) {
			if (!usedByUsers) return true;
			return await message.confirm(i18n.baseText("projectRoles.action.update.text", { interpolate: { count: usedByUsers } }), i18n.baseText("projectRoles.action.update.title", { interpolate: { count: usedByUsers } }), {
				type: "warning",
				confirmButtonText: i18n.baseText("projectRoles.action.update"),
				cancelButtonText: i18n.baseText("projectRoles.action.cancel")
			}) === MODAL_CONFIRM;
		}
		async function updateProjectRole(slug) {
			if (!await confirmRoleUpdate(initialState?.value?.usedByUsers)) return;
			try {
				const role = await rolesStore.updateProjectRole(slug, {
					...form.value,
					description: form.value.description ?? void 0
				});
				rolesStore.fetchRoles();
				telemetry.track("User updated role", {
					role_id: role.slug,
					role_name: role.displayName,
					permissions_from: initialState.value?.scopes,
					permissions_to: role.scopes
				});
				initialState.value = structuredClone(role);
				showMessage({
					type: "success",
					message: i18n.baseText("projectRoles.action.update.success")
				});
				return role;
			} catch (error) {
				showError(error, i18n.baseText("projectRoles.action.update.error"));
				return;
			}
		}
		async function handleSubmit() {
			if (props.roleSlug) await updateProjectRole(props.roleSlug);
			else await createProjectRole();
		}
		function setPreset(slug) {
			const preset = rolesStore.processedProjectRoles.find((role) => role.slug === slug);
			if (!preset) return;
			form.value.scopes = structuredClone(toRaw(preset.scopes));
		}
		async function deleteRole() {
			if (!initialState?.value) return;
			if (await message.confirm(i18n.baseText("projectRoles.action.delete.text", { interpolate: { roleName: initialState.value.displayName } }), i18n.baseText("projectRoles.action.delete.title", { interpolate: { roleName: initialState.value.displayName } }), {
				type: "warning",
				confirmButtonText: i18n.baseText("projectRoles.action.delete"),
				cancelButtonText: i18n.baseText("projectRoles.action.cancel")
			}) !== "confirm") return;
			telemetry.track("User clicked delete role", {
				role_id: initialState.value.slug,
				role_name: initialState.value.displayName,
				permissions: initialState.value?.scopes
			});
			try {
				await rolesStore.deleteProjectRole(initialState.value.slug);
				const index = rolesStore.roles.project.findIndex((role) => role.slug === initialState.value?.slug);
				if (index !== -1) rolesStore.roles.project.splice(index, 1);
				showMessage({
					title: i18n.baseText("projectRoles.action.delete.success"),
					type: "success"
				});
				telemetry.track("User successfully deleted role", {
					role_id: initialState.value.slug,
					role_name: initialState.value.displayName,
					permissions: initialState.value?.scopes
				});
				router.back();
			} catch (error) {
				showError(error, i18n.baseText("projectRoles.action.delete.error"));
				return;
			}
		}
		const displayNameValidationRules = [{ name: "REQUIRED" }, {
			name: "MIN_LENGTH",
			config: { minimum: 2 }
		}];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["pb-xl", _ctx.$style.container]) }, [
				createVNode(unref(N8nButton_default), {
					icon: "arrow-left",
					type: "secondary",
					class: normalizeClass(_ctx.$style.backButton),
					text: "",
					onClick: _cache[0] || (_cache[0] = () => unref(router).back())
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.backToRoleList")), 1)]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(["mb-xl", _ctx.$style.headerContainer]) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.roleSlug ? `Role "${unref(form).displayName}"` : unref(i18n).baseText("projectRoles.newRole")), 1)]),
					_: 1
				}), initialState.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					disabled: !hasUnsavedChanges.value,
					class: "mr-xs",
					onClick: _cache[1] || (_cache[1] = ($event) => resetForm(initialState.value))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.discardChanges")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					disabled: !hasUnsavedChanges.value,
					onClick: handleSubmit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.save")), 1)]),
					_: 1
				}, 8, ["disabled"])])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					onClick: handleSubmit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.create")), 1)]),
					_: 1
				}))], 2),
				createBaseVNode("div", { class: normalizeClass(["mb-l", _ctx.$style.formContainer]) }, [createVNode(unref(N8nFormInput_default), {
					modelValue: unref(form).displayName,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).displayName = $event),
					label: unref(i18n).baseText("projectRoles.roleName"),
					"validate-on-blur": "",
					"validation-rules": displayNameValidationRules,
					class: "mb-s",
					"show-required-asterisk": "",
					required: "",
					maxlength: 100
				}, null, 8, ["modelValue", "label"]), createVNode(unref(N8nFormInput_default), {
					modelValue: unref(form).description,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).description = $event),
					label: unref(i18n).baseText("projectRoles.description"),
					placeholder: unref(i18n).baseText("projectRoles.optional"),
					type: "textarea",
					maxlength: 500,
					autosize: {
						minRows: 2,
						maxRows: 4
					}
				}, null, 8, [
					"modelValue",
					"label",
					"placeholder"
				])], 2),
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "xlarge",
					class: "mb-s"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.permissions")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), {
					color: "text-light",
					class: "mb-2xs",
					tag: "p"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.preset")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(["mb-s", _ctx.$style.presetsContainer]) }, [
					createVNode(unref(N8nButton_default), {
						type: "secondary",
						onClick: _cache[4] || (_cache[4] = ($event) => setPreset("project:admin"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.admin")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						type: "secondary",
						onClick: _cache[5] || (_cache[5] = ($event) => setPreset("project:editor"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.editor")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						type: "secondary",
						onClick: _cache[6] || (_cache[6] = ($event) => setPreset("project:viewer"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.viewer")), 1)]),
						_: 1
					})
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContainer) }, [(openBlock(), createElementBlock(Fragment, null, renderList(scopeTypes, (type) => {
					return createBaseVNode("div", {
						key: type,
						class: normalizeClass(["mb-s mt-s", _ctx.$style.card])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardTitle) }, toDisplayString(unref(i18n).baseText(`projectRoles.type.${type}`)), 3), createBaseVNode("div", _hoisted_2, [unref(isLoading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 0,
						rows: scopes[type].length,
						"shrink-last": false
					}, null, 8, ["rows"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(scopes[type], (scope) => {
						return openBlock(), createElementBlock("div", {
							key: scope,
							class: "mb-2xs"
						}, [createVNode(unref(N8nTooltip_default), {
							content: unref(i18n).baseText(`projectRoles.${scope}.tooltip`),
							placement: "right",
							enterable: false,
							"show-after": 250
						}, {
							default: withCtx(() => [createVNode(unref(N8nFormInput_default), {
								"data-test-id": `scope-checkbox-${scope}`,
								"model-value": unref(form).scopes.includes(scope),
								label: unref(i18n).baseText(`projectRoles.${scope}`),
								"validate-on-blur": "",
								type: "checkbox",
								class: normalizeClass(_ctx.$style.checkbox),
								"onUpdate:modelValue": () => toggleScope(scope)
							}, null, 8, [
								"data-test-id",
								"model-value",
								"label",
								"class",
								"onUpdate:modelValue"
							])]),
							_: 2
						}, 1032, ["content"])]);
					}), 128))])], 2);
				}), 64))], 2),
				_ctx.roleSlug && !initialState.value?.systemRole ? (openBlock(), createElementBlock("div", _hoisted_3, [
					createVNode(unref(N8nHeading_default), {
						tag: "h2",
						class: "mb-2xs",
						size: "large"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.dangerZone")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						tag: "p",
						class: "mb-s"
					}, {
						default: withCtx(() => [initialState.value?.usedByUsers ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.action.delete.useWarning", { interpolate: { count: initialState.value.usedByUsers } })), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.action.delete.warning")), 1)], 64))]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						type: "danger",
						disabled: Boolean(initialState.value?.usedByUsers),
						onClick: deleteRole
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.action.delete.button")), 1)]),
						_: 1
					}, 8, ["disabled"])
				])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ProjectRoleView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_14r2u_2",
	cardContainer: "_cardContainer_14r2u_9",
	card: "_card_14r2u_9",
	cardTitle: "_cardTitle_14r2u_28",
	backButton: "_backButton_14r2u_32",
	headerContainer: "_headerContainer_14r2u_38",
	formContainer: "_formContainer_14r2u_44",
	presetsContainer: "_presetsContainer_14r2u_48",
	checkbox: "_checkbox_14r2u_53"
};
var ProjectRoleView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectRoleView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectRoleView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectRoleView_default as default };

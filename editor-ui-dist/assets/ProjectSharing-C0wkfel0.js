import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, U as mergeModels, _ as Fragment, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, ft as useModel, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Gn as N8nIcon_default, Hn as N8nText_default, J as N8nSelect_default, Un as N8nButton_default, Y as N8nOption_default, lt as N8nBadge_default, rt as N8nAvatar_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { In as ProjectTypes, Yr as splitName } from "./builder.store-BjWbk2Wl.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-DTrnRNdg.js";
import { t as require_orderBy } from "./orderBy-CTdFEkRg.js";
var _hoisted_1 = { key: 0 };
var ProjectSharingInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSharingInfo",
	props: { project: {} },
	setup(__props) {
		const props = __props;
		const processedName = computed(() => {
			const { name, email } = splitName(props.project.name ?? "");
			const nameArray = name?.split(" ");
			const lastName = nameArray?.pop() ?? "";
			return {
				firstName: nameArray?.join(" ") ?? "",
				lastName,
				email
			};
		});
		const projectIcon = computed(() => {
			if (props.project.icon && isIconOrEmoji(props.project.icon)) return props.project.icon;
			return null;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.projectInfo),
				"data-test-id": "project-sharing-info"
			}, [createBaseVNode("div", null, [projectIcon.value ? (openBlock(), createBlock(ProjectIcon_default, {
				key: 0,
				icon: projectIcon.value,
				size: "large",
				round: true
			}, null, 8, ["icon"])) : (openBlock(), createBlock(unref(N8nAvatar_default), {
				key: 1,
				"first-name": processedName.value.firstName,
				"last-name": processedName.value.lastName
			}, null, 8, ["first-name", "last-name"])), createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [processedName.value.firstName || processedName.value.lastName ? (openBlock(), createElementBlock("p", _hoisted_1, toDisplayString(processedName.value.firstName) + " " + toDisplayString(processedName.value.lastName), 1)) : createCommentVNode("", true), createBaseVNode("small", null, toDisplayString(processedName.value.email), 1)], 2)]), renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ProjectSharingInfo_vue_vue_type_style_index_0_lang_module_default = {
	projectInfo: "_projectInfo_5ycyd_123",
	text: "_text_5ycyd_148"
};
var ProjectSharingInfo_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectSharingInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSharingInfo_vue_vue_type_style_index_0_lang_module_default }]]);
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy());
var ProjectSharing_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSharing",
	props: /* @__PURE__ */ mergeModels({
		projects: {},
		homeProject: {},
		roles: {},
		readonly: { type: Boolean },
		static: { type: Boolean },
		placeholder: {},
		emptyOptionsText: {},
		size: {},
		clearable: { type: Boolean },
		canShareGlobally: { type: Boolean },
		isSharedGlobally: { type: Boolean }
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"projectAdded",
		"projectRemoved",
		"clear",
		"update:shareWithAllUsers"
	], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const locale = useI18n();
		const GLOBAL_GROUP = {
			id: "all_users",
			name: locale.baseText("projects.sharing.allUsers"),
			type: "public",
			icon: {
				type: "icon",
				value: "globe"
			},
			role: "member",
			createdAt: `${Date.now()}`,
			updatedAt: `${Date.now()}`
		};
		const props = __props;
		const model = useModel(__props, "modelValue");
		const emit = __emit;
		const selectedProject = ref(Array.isArray(model.value) ? "" : model.value?.id ?? "");
		const selectedProjects$1 = computed(() => {
			if (!Array.isArray(model.value)) return null;
			return props.isSharedGlobally ? [GLOBAL_GROUP, ...model.value] : model.value;
		});
		const filter = ref("");
		const selectPlaceholder = computed(() => props.placeholder ?? locale.baseText("projects.sharing.select.placeholder"));
		const noDataText = computed(() => props.emptyOptionsText ?? locale.baseText("projects.sharing.noMatchingUsers"));
		const filteredProjects = computed(() => props.projects.filter((project$1) => project$1.name?.toLowerCase().includes(filter.value.toLowerCase()) && (Array.isArray(model.value) ? !model.value?.find((p) => p.id === project$1.id) : true)));
		const sortedProjects = computed(() => [...props.canShareGlobally && !props.isSharedGlobally ? [GLOBAL_GROUP] : [], ...(0, import_orderBy.default)(filteredProjects.value, ["type", (project$1) => project$1.name?.toLowerCase()], ["desc", "asc"])]);
		const projectIcon = computed(() => {
			const defaultIcon = {
				type: "icon",
				value: "layers"
			};
			const project$1 = props.projects.find((p) => p.id === selectedProject.value);
			if (project$1?.type === ProjectTypes.Personal) return {
				type: "icon",
				value: "user"
			};
			else if (project$1?.type === ProjectTypes.Team) return isIconOrEmoji(project$1.icon) ? project$1.icon : defaultIcon;
			return defaultIcon;
		});
		const setFilter = (query) => {
			filter.value = query;
		};
		const onProjectSelected = (projectId) => {
			if (projectId === GLOBAL_GROUP.id) {
				emit("update:shareWithAllUsers", true);
				return;
			}
			const project$1 = props.projects.find((p) => p.id === projectId);
			if (!project$1) return;
			if (Array.isArray(model.value)) model.value = [...model.value, project$1];
			else model.value = project$1;
			emit("projectAdded", project$1);
		};
		const onRoleAction = (project$1, role) => {
			if (!Array.isArray(model.value) || props.readonly) return;
			if (project$1.id === GLOBAL_GROUP.id && role === "remove") {
				emit("update:shareWithAllUsers", false);
				return;
			}
			if ((model.value?.findIndex((p) => p.id === project$1.id) ?? -1) === -1) return;
			if (role === "remove") {
				model.value = model.value.filter((p) => p.id !== project$1.id);
				emit("projectRemoved", project$1);
			}
		};
		watch(() => model.value, () => {
			if (model.value === null || Array.isArray(model.value)) selectedProject.value = "";
			else selectedProject.value = model.value.id;
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [!props.static ? (openBlock(), createBlock(unref(N8nSelect_default), {
				key: 0,
				"model-value": selectedProject.value,
				"data-test-id": "project-sharing-select",
				filterable: true,
				"filter-method": setFilter,
				placeholder: selectPlaceholder.value,
				"default-first-option": true,
				"no-data-text": noDataText.value,
				size: _ctx.size ?? "medium",
				disabled: props.readonly,
				clearable: _ctx.clearable,
				"popper-class": _ctx.$style.popper,
				"onUpdate:modelValue": onProjectSelected,
				onClear: _cache[0] || (_cache[0] = ($event) => emit("clear"))
			}, {
				prefix: withCtx(() => [projectIcon.value.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: projectIcon.value.value,
					color: "text-dark"
				}, null, 8, ["icon"])) : projectIcon.value.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-light",
					class: normalizeClass(_ctx.$style.emoji)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(projectIcon.value.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)]),
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedProjects.value, (project$1) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: project$1.id,
						value: project$1.id,
						label: project$1.name ?? ""
					}, {
						default: withCtx(() => [createVNode(ProjectSharingInfo_default, { project: project$1 }, null, 8, ["project"])]),
						_: 2
					}, 1032, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, [
				"model-value",
				"placeholder",
				"no-data-text",
				"size",
				"disabled",
				"clearable",
				"popper-class"
			])) : createCommentVNode("", true), selectedProjects$1.value ? (openBlock(), createElementBlock("ul", {
				key: 1,
				class: normalizeClass(_ctx.$style.selectedProjects)
			}, [props.homeProject ? (openBlock(), createElementBlock("li", {
				key: 0,
				class: normalizeClass(_ctx.$style.project),
				"data-test-id": "project-sharing-owner"
			}, [createVNode(ProjectSharingInfo_default, { project: props.homeProject }, {
				default: withCtx(() => [createVNode(unref(N8nBadge_default), {
					theme: "tertiary",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("auth.roles.owner")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["project"])], 2)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(selectedProjects$1.value, (project$1) => {
				return openBlock(), createElementBlock("li", {
					key: project$1.id,
					class: normalizeClass(_ctx.$style.project),
					"data-test-id": "project-sharing-list-item"
				}, [
					createVNode(ProjectSharingInfo_default, { project: project$1 }, null, 8, ["project"]),
					props.roles?.length && !props.static && !(project$1.id === GLOBAL_GROUP.id && !_ctx.canShareGlobally) ? (openBlock(), createBlock(unref(N8nSelect_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.projectRoleSelect),
						"model-value": props.roles[0],
						disabled: props.readonly,
						size: "small",
						"onUpdate:modelValue": ($event) => onRoleAction(project$1, $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.roles, (role) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: role.slug,
								value: role.slug,
								label: role.displayName
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"class",
						"model-value",
						"disabled",
						"onUpdate:modelValue"
					])) : createCommentVNode("", true),
					!props.static && !(project$1.id === GLOBAL_GROUP.id && !_ctx.canShareGlobally) ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						type: "tertiary",
						"native-type": "button",
						square: "",
						icon: "trash-2",
						disabled: props.readonly,
						"data-test-id": "project-sharing-remove",
						onClick: ($event) => onRoleAction(project$1, "remove")
					}, null, 8, ["disabled", "onClick"])) : createCommentVNode("", true)
				], 2);
			}), 128))], 2)) : createCommentVNode("", true)]);
		};
	}
});
var ProjectSharing_vue_vue_type_style_index_0_lang_module_default = {
	project: "_project_5tpba_123",
	selectedProjects: "_selectedProjects_5tpba_131",
	projectRoleSelect: "_projectRoleSelect_5tpba_142",
	popper: "_popper_5tpba_146",
	emoji: "_emoji_5tpba_150"
};
var ProjectSharing_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectSharing_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSharing_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectSharing_default as t };

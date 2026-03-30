import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, H as mergeModels, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, dt as useModel, gt as watch, it as renderSlot, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n, st as useDebounceFn } from "./_MapCache-14clFqm4.js";
import { $i as N8nIcon_default, Et as N8nOption_default, Lt as N8nAvatar_default, Mi as N8nTooltip_default, Qi as N8nButton_default, Tt as N8nSelect_default, Ut as N8nBadge_default, Zi as N8nText_default } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { ii as splitName, vi as ProjectTypes } from "./users.store-DNsxOyr9.js";
import { Tl as getDebounceTime, _l as DEBOUNCE_TIME } from "./constants-DkMVfvP4.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-DmMdJYtY.js";
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
	projectInfo: "_projectInfo_1vlqj_125",
	text: "_text_1vlqj_150"
};
var ProjectSharingInfo_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectSharingInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSharingInfo_vue_vue_type_style_index_0_lang_module_default }]]);
var ProjectSharing_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSharing",
	props: /* @__PURE__ */ mergeModels({
		searchFn: { type: Function },
		filterFn: { type: Function },
		homeProject: {},
		roles: {},
		readonly: { type: Boolean },
		static: { type: Boolean },
		placeholder: {},
		emptyOptionsText: {},
		size: {},
		clearable: { type: Boolean },
		canShareGlobally: { type: Boolean },
		isSharedGlobally: { type: Boolean },
		allUsersLabel: {},
		disabledTooltip: {}
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
		const props = __props;
		const GLOBAL_GROUP = {
			id: "all_users",
			name: props.allUsersLabel ?? locale.baseText("projects.sharing.allUsers"),
			type: "public",
			icon: {
				type: "icon",
				value: "globe"
			},
			role: "member",
			createdAt: `${Date.now()}`,
			updatedAt: `${Date.now()}`
		};
		const model = useModel(__props, "modelValue");
		const emit = __emit;
		const selectedProject = ref(Array.isArray(model.value) ? "" : model.value?.id ?? "");
		const selectedProjects$1 = computed(() => {
			if (!Array.isArray(model.value)) return null;
			return props.isSharedGlobally ? [GLOBAL_GROUP, ...model.value] : model.value;
		});
		const selectPlaceholder = computed(() => props.placeholder ?? locale.baseText("projects.sharing.select.placeholder"));
		const noDataText = computed(() => props.emptyOptionsText ?? locale.baseText("projects.sharing.noMatchingUsers"));
		const searchResults = ref([]);
		const searchCount = ref(0);
		const filter = ref("");
		const filteredProjects = computed(() => {
			let list = searchResults.value;
			if (props.filterFn) list = list.filter(props.filterFn);
			if (props.homeProject) list = list.filter((p) => p.id !== props.homeProject.id);
			if (Array.isArray(model.value)) {
				const selected = model.value;
				list = list.filter((p) => !selected.find((s) => s.id === p.id));
			}
			return list;
		});
		const sortedProjects = computed(() => {
			return [...props.canShareGlobally && !props.isSharedGlobally ? [GLOBAL_GROUP] : [], ...filteredProjects.value];
		});
		const moreResultsCount = computed(() => {
			return Math.max(0, searchCount.value - searchResults.value.length);
		});
		const projectIcon = computed(() => {
			const defaultIcon = {
				type: "icon",
				value: "layers"
			};
			const project$1 = searchResults.value.find((p) => p.id === selectedProject.value);
			if (project$1?.type === ProjectTypes.Personal) return {
				type: "icon",
				value: "user"
			};
			else if (project$1?.type === ProjectTypes.Team) return isIconOrEmoji(project$1.icon) ? project$1.icon : defaultIcon;
			return defaultIcon;
		});
		let searchGeneration = 0;
		const executeSearch = async (query) => {
			const generation = ++searchGeneration;
			try {
				const result = await props.searchFn(query);
				if (generation !== searchGeneration) return;
				searchResults.value = result.data ?? [];
				searchCount.value = result.count ?? 0;
			} catch {
				if (generation !== searchGeneration) return;
				searchResults.value = [];
				searchCount.value = 0;
			}
		};
		const debouncedSearch = useDebounceFn(executeSearch, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const setFilter = (query) => {
			filter.value = query;
			debouncedSearch(query);
		};
		onMounted(() => {
			executeSearch("");
		});
		const onProjectSelected = (projectId) => {
			if (projectId === GLOBAL_GROUP.id) {
				emit("update:shareWithAllUsers", true);
				return;
			}
			const project$1 = searchResults.value.find((p) => p.id === projectId);
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
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nTooltip_default), {
				disabled: !props.disabledTooltip,
				placement: "top"
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(props.disabledTooltip), 1)]),
				default: withCtx(() => [!props.static || props.disabledTooltip ? (openBlock(), createBlock(unref(N8nSelect_default), {
					key: 0,
					"model-value": selectedProject.value,
					"data-test-id": "project-sharing-select",
					filterable: "",
					remote: "",
					"remote-method": setFilter,
					placeholder: selectPlaceholder.value,
					"default-first-option": true,
					"no-data-text": noDataText.value,
					size: __props.size ?? "medium",
					disabled: props.readonly || !!props.disabledTooltip,
					clearable: __props.clearable,
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
					}), 128)), moreResultsCount.value > 0 ? (openBlock(), createBlock(unref(N8nOption_default), {
						key: "more-results",
						value: "",
						label: "",
						disabled: "",
						class: normalizeClass(_ctx.$style.moreResults)
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.sharing.moreResults", { interpolate: { count: moreResultsCount.value } })), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"model-value",
					"placeholder",
					"no-data-text",
					"size",
					"disabled",
					"clearable",
					"popper-class"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["disabled"]), selectedProjects$1.value ? (openBlock(), createElementBlock("ul", {
				key: 0,
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
					props.roles?.length && !props.static && !(project$1.id === GLOBAL_GROUP.id && !__props.canShareGlobally) ? (openBlock(), createBlock(unref(N8nSelect_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.projectRoleSelect),
						"model-value": props.roles[0],
						disabled: props.readonly,
						size: "small",
						"onUpdate:modelValue": ($event) => onRoleAction(project$1, $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.roles, (role) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: role.slug,
								value: role.slug,
								label: role.displayName
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, [
						"class",
						"model-value",
						"disabled",
						"onUpdate:modelValue"
					])) : createCommentVNode("", true),
					!props.static && !(project$1.id === GLOBAL_GROUP.id && !__props.canShareGlobally) ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						variant: "subtle",
						"icon-only": "",
						"native-type": "button",
						icon: "trash-2",
						"aria-label": unref(locale).baseText("generic.delete"),
						disabled: props.readonly,
						"data-test-id": "project-sharing-remove",
						onClick: ($event) => onRoleAction(project$1, "remove")
					}, null, 8, [
						"aria-label",
						"disabled",
						"onClick"
					])) : createCommentVNode("", true)
				], 2);
			}), 128))], 2)) : createCommentVNode("", true)]);
		};
	}
});
var ProjectSharing_vue_vue_type_style_index_0_lang_module_default = {
	project: "_project_12d86_125",
	selectedProjects: "_selectedProjects_12d86_133",
	projectRoleSelect: "_projectRoleSelect_12d86_144",
	popper: "_popper_12d86_148",
	emoji: "_emoji_12d86_152",
	moreResults: "_moreResults_12d86_156"
};
var ProjectSharing_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectSharing_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSharing_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectSharing_default as t };

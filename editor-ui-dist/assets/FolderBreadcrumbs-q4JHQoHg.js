import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, k as createSlots, vn as normalizeClass } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { bt as N8nActionToggle_default, x as N8nBreadcrumbs_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Ht as ProjectTypes, Vt as useProjectsStore } from "./users.store-qBZsmf9-.js";
import { t as useFoldersStore } from "./folders.store-B29vIVJe.js";
import { t as ProjectBreadcrumb_default } from "./ProjectBreadcrumb-CF4TkvW2.js";
var _hoisted_1 = { key: 2 };
var FolderBreadcrumbs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FolderBreadcrumbs",
	props: {
		currentFolder: { default: null },
		actions: { default: () => [] },
		hiddenItemsTrigger: { default: "click" },
		currentFolderAsLink: {
			type: Boolean,
			default: false
		},
		visibleLevels: { default: 1 }
	},
	emits: [
		"itemSelected",
		"action",
		"itemDrop",
		"projectDrop"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const projectsStore = useProjectsStore();
		const foldersStore = useFoldersStore();
		const hiddenBreadcrumbsItemsAsync = ref(new Promise(() => {}));
		const visibleIds = ref(/* @__PURE__ */ new Set());
		const isSharedContext = computed(() => projectsStore.projectNavActiveId === "shared");
		const currentProject = computed(() => {
			if (isSharedContext.value) return;
			return projectsStore.currentProject ?? projectsStore.personalProject ?? void 0;
		});
		const projectName = computed(() => {
			if (!currentProject.value) return isSharedContext.value ? i18n.baseText("projects.menu.shared") : "";
			if (currentProject.value.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
			return currentProject.value.name;
		});
		const isDragging = computed(() => {
			return foldersStore.draggedElement !== null;
		});
		const hasMoreItems = computed(() => {
			return visibleBreadcrumbsItems.value[0]?.parentFolder !== void 0;
		});
		const visibleBreadcrumbsItems = computed(() => {
			visibleIds.value.clear();
			if (!props.currentFolder || isSharedContext.value) return [];
			const items = [];
			const parent = props.visibleLevels === 2 ? foldersStore.getCachedFolder(props.currentFolder.parentFolder ?? "") : null;
			if (parent) {
				items.push({
					id: parent.id,
					label: parent.name,
					href: `/projects/${currentProject.value?.id}/folders/${parent.id}/workflows`,
					parentFolder: parent.parentFolder
				});
				visibleIds.value.add(parent.id);
			}
			items.push({
				id: props.currentFolder.id,
				label: props.currentFolder.name,
				parentFolder: props.currentFolder.parentFolder,
				href: props.currentFolderAsLink ? `/projects/${currentProject.value?.id}/folders/${props.currentFolder.id}/workflows` : void 0
			});
			if (currentProject.value) visibleIds.value.add(currentProject.value.id);
			visibleIds.value.add(props.currentFolder.id);
			return items;
		});
		const fetchHiddenBreadCrumbsItems = async () => {
			if (!projectName.value || !props.currentFolder?.parentFolder || isSharedContext.value || !currentProject.value) hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
			else try {
				const filtered = (await foldersStore.getHiddenBreadcrumbsItems({
					id: currentProject.value.id,
					name: projectName.value
				}, props.currentFolder.parentFolder, { addLinks: true })).filter((item) => !visibleIds.value.has(item.id));
				hiddenBreadcrumbsItemsAsync.value = Promise.resolve(filtered);
			} catch (error) {
				hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
			}
		};
		const onItemSelect = (item) => {
			emit("itemSelected", item);
		};
		const onAction = (action) => {
			emit("action", action);
		};
		const onProjectDrop = () => {
			if (!currentProject.value?.name) return;
			emit("projectDrop", currentProject.value.id, currentProject.value.name);
		};
		const onProjectHover = () => {
			if (!isDragging.value || !currentProject.value?.name) return;
			foldersStore.activeDropTarget = {
				type: "project",
				id: currentProject.value?.id,
				name: currentProject.value?.name
			};
		};
		const onItemHover = (item) => {
			if (!isDragging.value) return;
			foldersStore.activeDropTarget = {
				type: "folder",
				id: item.id,
				name: item.label
			};
		};
		watch(() => props.currentFolder?.parentFolder, () => {
			hiddenBreadcrumbsItemsAsync.value = new Promise(() => {});
		}, { immediate: true });
		onBeforeUnmount(() => {
			hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass({
					[_ctx.$style.container]: true,
					[_ctx.$style["dragging"]]: isDragging.value
				}),
				"data-test-id": "folder-breadcrumbs"
			}, [visibleBreadcrumbsItems.value.length ? (openBlock(), createBlock(unref(N8nBreadcrumbs_default), {
				key: 0,
				"drag-active": isDragging.value,
				"onUpdate:dragActive": _cache[0] || (_cache[0] = ($event) => isDragging.value = $event),
				items: visibleBreadcrumbsItems.value,
				"highlight-last-item": false,
				"path-truncated": hasMoreItems.value,
				"hidden-items": hasMoreItems.value ? hiddenBreadcrumbsItemsAsync.value : void 0,
				"hidden-items-trigger": props.hiddenItemsTrigger,
				onTooltipOpened: fetchHiddenBreadCrumbsItems,
				onItemSelected: onItemSelect,
				onItemHover,
				onItemDrop: _cache[1] || (_cache[1] = ($event) => emit("itemDrop", $event))
			}, createSlots({
				append: withCtx(() => [renderSlot(_ctx.$slots, "append")]),
				_: 2
			}, [currentProject.value ? {
				name: "prepend",
				fn: withCtx(() => [createVNode(ProjectBreadcrumb_default, {
					"current-project": currentProject.value,
					"is-dragging": isDragging.value,
					onProjectDrop,
					onProjectHover
				}, null, 8, ["current-project", "is-dragging"])]),
				key: "0"
			} : void 0]), 1032, [
				"drag-active",
				"items",
				"path-truncated",
				"hidden-items",
				"hidden-items-trigger"
			])) : currentProject.value || isSharedContext.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style["home-project"])
			}, [createVNode(ProjectBreadcrumb_default, {
				"current-project": currentProject.value,
				"is-shared": isSharedContext.value,
				"is-dragging": isDragging.value,
				onProjectDrop,
				onProjectHover
			}, null, 8, [
				"current-project",
				"is-shared",
				"is-dragging"
			]), renderSlot(_ctx.$slots, "append")], 2)) : (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "append")])), visibleBreadcrumbsItems.value && __props.actions?.length ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
				key: 3,
				actions: __props.actions,
				class: normalizeClass(_ctx.$style["action-toggle"]),
				theme: "dark",
				"data-test-id": "folder-breadcrumbs-actions",
				onAction
			}, null, 8, ["actions", "class"])) : createCommentVNode("", true)], 2);
		};
	}
});
var FolderBreadcrumbs_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_133pr_125",
	"home-project": "_home-project_133pr_130",
	"action-toggle": "_action-toggle_133pr_135"
};
var FolderBreadcrumbs_default = /* @__PURE__ */ __plugin_vue_export_helper_default(FolderBreadcrumbs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": FolderBreadcrumbs_vue_vue_type_style_index_0_lang_module_default }]]);
export { FolderBreadcrumbs_default as t };

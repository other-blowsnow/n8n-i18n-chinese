import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-B95RbLEv.js";
import { Vt as DropdownMenu_default, Wi as N8nIconButton_default, qa as N8nText_default, x as N8nBreadcrumbs_default, zi as N8nTooltip_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Cn as ProjectTypes, xn as useProjectsStore } from "./workflowDocument.store-CfaJpy9g.js";
import { t as useFoldersStore } from "./folders.store-B4TGrJwc.js";
import { t as ProjectBreadcrumb_default } from "./ProjectBreadcrumb-DX5VItYs.js";
//#region src/features/core/folders/components/FolderBreadcrumbs.vue?vue&type=script&setup=true&lang.ts
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
		function toMenuItem(action) {
			return {
				id: action.value,
				testId: `action-${action.value}`,
				label: action.label,
				disabled: action.disabled,
				children: action.children?.map(toMenuItem),
				data: action.tooltip ? { tooltip: action.tooltip } : void 0
			};
		}
		const menuItems = computed(() => props.actions.map(toMenuItem));
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
			]), renderSlot(_ctx.$slots, "append")], 2)) : (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "append")])), menuItems.value.length ? (openBlock(), createBlock(unref(DropdownMenu_default), {
				key: 3,
				items: menuItems.value,
				"content-test-id": "action-toggle-dropdown",
				placement: "bottom-end",
				"extra-popper-class": _ctx.$style["actions-menu-dropdown"],
				onSelect: onAction
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					class: normalizeClass(["action-toggle", _ctx.$style["actions-menu"]]),
					variant: "ghost",
					icon: "ellipsis-vertical",
					size: "medium",
					"data-test-id": "folder-breadcrumbs-actions"
				}, null, 8, ["class"])]),
				"item-label": withCtx(({ item, ui }) => [item.data?.tooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: item.data.tooltip,
					placement: "left",
					"show-after": 300,
					teleported: false
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(ui.class),
						size: "medium",
						color: item.disabled ? "text-light" : "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
						_: 2
					}, 1032, ["class", "color"])]),
					_: 2
				}, 1032, ["content"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(ui.class),
					size: "medium",
					color: item.disabled ? "text-light" : "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
					_: 2
				}, 1032, ["class", "color"]))]),
				_: 1
			}, 8, ["items", "extra-popper-class"])) : createCommentVNode("", true)], 2);
		};
	}
});
var FolderBreadcrumbs_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1kayg_125",
	"home-project": "_home-project_1kayg_130",
	"actions-menu-dropdown": "_actions-menu-dropdown_1kayg_135"
};
var FolderBreadcrumbs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(FolderBreadcrumbs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": FolderBreadcrumbs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { FolderBreadcrumbs_default as t };

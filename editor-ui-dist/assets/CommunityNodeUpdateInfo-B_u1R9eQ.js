import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Ut as toValue, Z as onMounted, _ as Fragment, _t as watch, bt as withCtx, c as useCssModule, et as openBlock, j as createTextVNode, k as createSlots, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { gt as i18n, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, Bi as N8nButton_default, Hi as N8nIcon_default, Ri as N8nCallout_default, Rt as useRouter, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { C as useNodeTypesStore, R as removePreviewToken, hr as useToast, r as useUIStore, rt as useCredentialsStore, s as useWorkflowsStore, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { Fa as isCommunityPackageName, Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import { n as captureException } from "./exports-C80N3gCI.js";
import { n as useCommunityNodesStore, t as require_semver } from "./semver-CHkqcyj_.js";
import { t as useCanvasOperations } from "./useCanvasOperations-01naG_2v.js";
function useInstallNode() {
	const communityNodesStore = useCommunityNodesStore();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const workflowsStore = useWorkflowsStore();
	const isOwner = computed(() => useUsersStore().isInstanceOwner);
	const loading = ref(false);
	const toast = useToast();
	const canvasOperations = useCanvasOperations();
	const getNpmVersion = async (key) => {
		const communityNodeAttributes = await nodeTypesStore.getCommunityNodeAttributes(key);
		if (communityNodeAttributes) return communityNodeAttributes.npmVersion;
	};
	const installNode = async (props) => {
		if (!isOwner.value) {
			const error = /* @__PURE__ */ new Error("User is not an owner");
			toast.showError(error, i18n.baseText("settings.communityNodes.messages.install.error"));
			return {
				success: false,
				error
			};
		}
		try {
			loading.value = true;
			if (props.type === "verified") await communityNodesStore.installPackage(props.packageName, true, await getNpmVersion(props.nodeType));
			else await communityNodesStore.installPackage(props.packageName);
			await nodeTypesStore.getNodeTypes();
			await credentialsStore.fetchCredentialTypes(true);
			await nextTick();
			const nodeType = props.nodeType;
			if (nodeType && workflowsStore.workflow.nodes?.length) {
				const nodesToUpdate = workflowsStore.workflow.nodes.filter((node) => node.type === removePreviewToken(nodeType));
				canvasOperations.initializeUnknownNodes(nodesToUpdate);
			}
			toast.showMessage({
				title: i18n.baseText("settings.communityNodes.messages.install.success"),
				type: "success"
			});
			return { success: true };
		} catch (error) {
			toast.showError(error, i18n.baseText("settings.communityNodes.messages.install.error"));
			return {
				success: false,
				error
			};
		} finally {
			loading.value = false;
		}
	};
	return {
		installNode,
		loading
	};
}
var import_semver = /* @__PURE__ */ __toESM(require_semver(), 1);
async function fetchInstalledPackageInfo(packageName) {
	const installedPackage = await useCommunityNodesStore().getInstalledPackage(packageName);
	const communityNodeType = useNodeTypesStore().communityNodeType(packageName);
	if (!installedPackage) return;
	const checkIsUnverifiedUpdate = () => {
		if (!installedPackage?.updateAvailable || !communityNodeType) return false;
		return import_semver.default.gt(installedPackage.updateAvailable, communityNodeType.npmVersion);
	};
	return {
		...installedPackage,
		unverifiedUpdate: checkIsUnverifiedUpdate()
	};
}
function useInstalledCommunityPackage(nodeTypeName) {
	const communityNodesStore = useCommunityNodesStore();
	const usersStore = useUsersStore();
	const installedPackage = ref(void 0);
	const packageName = computed(() => toValue(nodeTypeName)?.split(".")[0] ?? "");
	const isCommunityNode = computed(() => {
		const nodeType = toValue(nodeTypeName);
		if (nodeType) return isCommunityPackageName(nodeType);
		return false;
	});
	const initInstalledPackage = async () => {
		if (!packageName.value || !isCommunityNode.value) return void 0;
		installedPackage.value = await fetchInstalledPackageInfo(packageName.value);
		return installedPackage.value;
	};
	watch(() => communityNodesStore.installedPackages[packageName.value], async (changedPackage) => {
		if (!packageName.value || !changedPackage) return;
		await initInstalledPackage();
	}, { deep: true });
	onMounted(async () => {
		if (!packageName.value || !isCommunityNode.value) return;
		await initInstalledPackage();
	});
	return {
		installedPackage,
		isUpdateCheckAvailable: computed(() => {
			return isCommunityNode.value && usersStore.isInstanceOwner && !installedPackage.value?.unverifiedUpdate;
		}),
		isCommunityNode,
		initInstalledPackage
	};
}
var _hoisted_1 = { style: { "padding-bottom": "8px" } };
var ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ContactAdministratorToInstall",
	props: { box: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const i18n$1 = useI18n();
		const ownerEmailList = computed(() => useUsersStore().allUsers.filter((user) => user.role?.includes("owner")).map((user) => user.email));
		const classes = computed(() => ({
			[$style.contactOwnerHint]: true,
			[$style.border]: props.box
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(classes.value) }, [props.box ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				color: "text-light",
				icon: "info",
				size: "large"
			})) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				color: "text-base",
				size: "medium"
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, toDisplayString(unref(i18n$1).baseText("communityNodeInfo.contact.admin")), 1), ownerEmailList.value.length ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(ownerEmailList.value.join(", ")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default = {
	contactOwnerHint: "_contactOwnerHint_qnrnx_125",
	border: "_border_qnrnx_133"
};
var ContactAdministratorToInstall_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default }]]);
var CommunityNodeFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeFooter",
	props: {
		packageName: {},
		showManage: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const router = useRouter();
		const bugsUrl = ref(`https://registry.npmjs.org/${props.packageName}`);
		const { installedPackage } = useInstalledCommunityPackage(props.packageName);
		async function openSettingsPage() {
			await router.push({ name: VIEWS.COMMUNITY_NODES });
		}
		async function openIssuesPage() {
			if (bugsUrl.value) window.open(bugsUrl.value, "_blank");
		}
		async function getBugsUrl(packageName) {
			const url = `https://registry.npmjs.org/${packageName}`;
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error("Could not get metadata for package");
				const data = await response.json();
				if (data.bugs?.url) bugsUrl.value = data.bugs.url;
			} catch (error) {
				captureException(error);
			}
		}
		onMounted(async () => {
			if (props.packageName) await getBugsUrl(props.packageName);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.separator) }, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [
				unref(installedPackage) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light",
					style: { "margin-right": "auto" }
				}, {
					default: withCtx(() => [createTextVNode(" Package version " + toDisplayString(unref(installedPackage).installedVersion) + " (" + toDisplayString(unref(installedPackage).updateAvailable && !unref(installedPackage).unverifiedUpdate ? unref(i18n).baseText("communityNodeFooter.legacy") : unref(i18n).baseText("nodeSettings.latest")) + ") ", 1)]),
					_: 1
				})) : createCommentVNode("", true),
				props.showManage ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nLink_default), {
					theme: "text",
					onClick: openSettingsPage
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "primary",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeFooter.manage")), 1)]),
						_: 1
					})]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					style: { "color": "var(--color--foreground)" },
					bold: ""
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("|", -1)])]),
					_: 1
				})], 64)) : createCommentVNode("", true),
				createVNode(unref(N8nLink_default), {
					theme: "text",
					onClick: openIssuesPage
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "primary",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeFooter.reportIssue")), 1)]),
						_: 1
					})]),
					_: 1
				})
			], 2)]);
		};
	}
});
var CommunityNodeFooter_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_b6vvo_125",
	separator: "_separator_b6vvo_133"
};
var CommunityNodeFooter_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CommunityNodeFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeFooter_vue_vue_type_style_index_0_lang_module_default }]]);
var CommunityNodeUpdateInfo_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeUpdateInfo",
	props: {
		packageName: {},
		source: {}
	},
	setup(__props) {
		const props = __props;
		const { openCommunityPackageUpdateConfirmModal } = useUIStore();
		const onUpdate = () => {
			if (!props.packageName) return;
			openCommunityPackageUpdateConfirmModal(props.packageName, props.source);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				theme: "secondary",
				iconless: true,
				style: { "margin-bottom": "var(--spacing--sm)" }
			}, createSlots({
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeUpdateInfo.available")) + " ", 1)]),
				_: 2
			}, [props.packageName ? {
				name: "trailingContent",
				fn: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "secondary",
					onClick: onUpdate
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.update")), 1)]),
					_: 1
				})]),
				key: "0"
			} : void 0]), 1024);
		};
	}
});
export { useInstallNode as a, useInstalledCommunityPackage as i, CommunityNodeFooter_default as n, ContactAdministratorToInstall_default as r, CommunityNodeUpdateInfo_default as t };

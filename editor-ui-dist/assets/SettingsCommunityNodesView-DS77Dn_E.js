import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Bi as N8nButton_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, Li as N8nHeading_default, Mi as N8nActionBox_default, Rt as useRouter, bt as N8nActionToggle_default, xt as N8nLoading_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { C as useNodeTypesStore, Nt as useTelemetry, _r as useExternalHooks, cn as useDocumentTitle, fs as useSettingsStore, ha as COMMUNITY_NODES_INSTALLATION_DOCS_URL, hr as useToast, r as useUIStore, va as COMMUNITY_PACKAGE_INSTALL_MODAL_KEY, ya as COMMUNITY_PACKAGE_MANAGE_ACTIONS } from "./users.store-qBZsmf9-.js";
import { b as NPM_PACKAGE_DOCS_BASE_URL } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./banners.store-DqcHprvX.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./executions.store-nTCUYDJR.js";
import "./assistant.store-CT263qz_.js";
import { n as useCommunityNodesStore, t as require_semver } from "./semver-CHkqcyj_.js";
import "./usePinnedData-B4FHq9FM.js";
import "./nodeIcon-p8UmtDus.js";
import "./canvas.utils-BvLPDYAs.js";
import "./nodeCreator.store-D-pWr7VG.js";
import "./useCanvasOperations-01naG_2v.js";
import "./folders.store-B29vIVJe.js";
import "./useRunWorkflow-BfL7BCzH.js";
import { t as usePushConnectionStore } from "./pushConnection.store-Di8YtKvV.js";
import "./readyToRun.store-jCsh7z8e.js";
import { t as usePushConnection } from "./usePushConnection-_wjXN1gv.js";
import "./aiTemplatesStarterCollection.store-CRipTpbb.js";
var import_semver = /* @__PURE__ */ __toESM(require_semver(), 1);
var _hoisted_1 = { key: 0 };
var CommunityPackageCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityPackageCard",
	props: {
		communityPackage: { default: null },
		loading: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const { openCommunityPackageUpdateConfirmModal, openCommunityPackageUninstallConfirmModal } = useUIStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const settingsStore = useSettingsStore();
		const nodeTypesStore = useNodeTypesStore();
		const latestVerifiedVersion = ref();
		const currVersion = computed(() => props.communityPackage?.installedVersion || "");
		const hasUnverifiedPackagesUpdate = computed(() => {
			return settingsStore.isUnverifiedPackagesEnabled && props.communityPackage?.updateAvailable;
		});
		const hasVerifiedPackageUpdate = computed(() => {
			const canUpdate = latestVerifiedVersion.value && import_semver.default.gt(latestVerifiedVersion.value || "", currVersion.value);
			return settingsStore.isCommunityNodesFeatureEnabled && canUpdate;
		});
		const packageActions = [{
			label: i18n.baseText("settings.communityNodes.viewDocsAction.label"),
			value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS,
			type: "external-link"
		}, {
			label: i18n.baseText("settings.communityNodes.uninstallAction.label"),
			value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL
		}];
		async function onAction(value) {
			if (!props.communityPackage) return;
			switch (value) {
				case COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS:
					telemetry.track("user clicked to browse the cnr package documentation", {
						package_name: props.communityPackage.packageName,
						package_version: props.communityPackage.installedVersion
					});
					window.open(`${NPM_PACKAGE_DOCS_BASE_URL}${props.communityPackage.packageName}`, "_blank");
					break;
				case COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL:
					openCommunityPackageUninstallConfirmModal(props.communityPackage.packageName);
					break;
				default: break;
			}
		}
		function onUpdateClick() {
			if (!props.communityPackage) return;
			openCommunityPackageUpdateConfirmModal(props.communityPackage.packageName, "instance settings");
		}
		watch(() => props.communityPackage?.packageName, async (packageName) => {
			if (packageName) {
				await nodeTypesStore.loadNodeTypesIfNotLoaded();
				const nodeType = nodeTypesStore.visibleNodeTypes.find((node) => node.name.includes(packageName));
				const attributes = await nodeTypesStore.getCommunityNodeAttributes(nodeType?.name || "");
				if (attributes?.npmVersion) latestVerifiedVersion.value = attributes.npmVersion;
			}
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.cardContainer),
				"data-test-id": "community-package-card"
			}, [__props.loading ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.cardSkeleton)
			}, [createVNode(unref(N8nLoading_default), {
				class: normalizeClass(_ctx.$style.loader),
				variant: "p",
				rows: 1
			}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
				class: normalizeClass(_ctx.$style.loader),
				variant: "p",
				rows: 1
			}, null, 8, ["class"])], 2)) : __props.communityPackage ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.packageCard)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardInfoContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardTitle) }, [createVNode(unref(N8nText_default), {
				bold: true,
				size: "large"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.communityPackage.packageName), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardSubtitle) }, [createVNode(unref(N8nText_default), {
				bold: true,
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes.packageNodes.label", { adjustToNumber: __props.communityPackage.installedNodes.length })) + ":\xA0 ", 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.communityPackage.installedNodes, (node, index) => {
					return openBlock(), createElementBlock("span", { key: node.name }, [createTextVNode(toDisplayString(node.name), 1), index != __props.communityPackage.installedNodes.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_1, ",")) : createCommentVNode("", true)]);
				}), 128))]),
				_: 1
			})], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardControlsContainer) }, [
				createVNode(unref(N8nText_default), {
					bold: true,
					size: "large",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(" v" + toDisplayString(__props.communityPackage.installedVersion), 1)]),
					_: 1
				}),
				__props.communityPackage.failedLoading === true ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.failedToLoad.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						color: "danger",
						size: "large"
					})]),
					_: 1
				})) : hasUnverifiedPackagesUpdate.value || hasVerifiedPackageUpdate.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.updateAvailable.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						outline: "",
						label: "Update",
						onClick: onUpdateClick
					})]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.upToDate.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "circle-check",
						color: "text-light",
						size: "large"
					})]),
					_: 1
				})),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardActions) }, [createVNode(unref(N8nActionToggle_default), {
					actions: packageActions,
					onAction
				})], 2)
			], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var CommunityPackageCard_vue_vue_type_style_index_0_lang_module_default = {
	cardContainer: "_cardContainer_wz5jy_125",
	packageCard: "_packageCard_wz5jy_133",
	cardSkeleton: "_cardSkeleton_wz5jy_134",
	loader: "_loader_wz5jy_148",
	cardInfoContainer: "_cardInfoContainer_wz5jy_159",
	cardTitle: "_cardTitle_wz5jy_164",
	cardSubtitle: "_cardSubtitle_wz5jy_171",
	cardControlsContainer: "_cardControlsContainer_wz5jy_176",
	cardActions: "_cardActions_wz5jy_182"
};
var CommunityPackageCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CommunityPackageCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityPackageCard_vue_vue_type_style_index_0_lang_module_default }]]);
var PACKAGE_COUNT_THRESHOLD = 31;
var SettingsCommunityNodesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsCommunityNodesView",
	setup(__props) {
		const loading = ref(false);
		const pushConnection = usePushConnection({ router: useRouter() });
		const pushStore = usePushConnectionStore();
		const externalHooks = useExternalHooks();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const communityNodesStore = useCommunityNodesStore();
		const uiStore = useUIStore();
		const settingsStore = useSettingsStore();
		const getEmptyStateTitle = computed(() => {
			if (!settingsStore.isUnverifiedPackagesEnabled) return i18n.baseText("settings.communityNodes.empty.verified.only.title");
			return i18n.baseText("settings.communityNodes.empty.title");
		});
		const getEmptyStateDescription = computed(() => {
			if (!settingsStore.isUnverifiedPackagesEnabled) return i18n.baseText("settings.communityNodes.empty.verified.only.description");
			const packageCount = communityNodesStore.availablePackageCount;
			return packageCount < PACKAGE_COUNT_THRESHOLD ? i18n.baseText("settings.communityNodes.empty.description.no-packages", { interpolate: { docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL } }) : i18n.baseText("settings.communityNodes.empty.description", { interpolate: {
				docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL,
				count: (Math.floor(packageCount / 10) * 10).toString()
			} });
		});
		const getEmptyStateButtonText = computed(() => {
			if (!settingsStore.isUnverifiedPackagesEnabled) return "";
			return i18n.baseText("settings.communityNodes.empty.installPackageLabel");
		});
		const actionBoxConfig = computed(() => {
			return {
				calloutText: "",
				calloutTheme: void 0,
				hideButton: false
			};
		});
		const onClickEmptyStateButton = () => {
			openInstallModal();
		};
		const openInstallModal = () => {
			const telemetryPayload = { is_empty_state: communityNodesStore.getInstalledPackages.length === 0 };
			telemetry.track("user clicked cnr install button", telemetryPayload);
			externalHooks.run("settingsCommunityNodesView.openInstallModal", telemetryPayload);
			uiStore.openModal(COMMUNITY_PACKAGE_INSTALL_MODAL_KEY);
		};
		onBeforeMount(() => {
			pushConnection.initialize();
			pushStore.pushConnect();
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.communityNodes"));
			try {
				loading.value = true;
				await communityNodesStore.fetchInstalledPackages();
				const installedPackages = communityNodesStore.getInstalledPackages;
				const packagesToUpdate = installedPackages.filter((p) => p.updateAvailable);
				telemetry.track("user viewed cnr settings page", {
					num_of_packages_installed: installedPackages.length,
					installed_packages: installedPackages.map((p) => {
						return {
							package_name: p.packageName,
							package_version: p.installedVersion,
							package_nodes: p.installedNodes.map((node) => `${node.name}-v${node.latestVersion}`),
							is_update_available: p.updateAvailable !== void 0
						};
					}),
					packages_to_update: packagesToUpdate.map((p) => {
						return {
							package_name: p.packageName,
							package_version_current: p.installedVersion,
							package_version_available: p.updateAvailable
						};
					}),
					number_of_updates_available: packagesToUpdate.length
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.communityNodes.fetchError.title"), i18n.baseText("settings.communityNodes.fetchError.message"));
			} finally {
				loading.value = false;
			}
			try {
				await communityNodesStore.fetchAvailableCommunityPackageCount();
			} finally {
				loading.value = false;
			}
		});
		onBeforeUnmount(() => {
			pushStore.pushDisconnect();
			pushConnection.terminate();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headingContainer) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes")), 1)]),
				_: 1
			}), unref(settingsStore).isUnverifiedPackagesEnabled && unref(communityNodesStore).getInstalledPackages.length > 0 && !loading.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				label: unref(i18n).baseText("settings.communityNodes.installModal.installButton.label"),
				size: "large",
				onClick: openInstallModal
			}, null, 8, ["label"])) : createCommentVNode("", true)], 2), loading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.cardsContainer)
			}, [(openBlock(), createElementBlock(Fragment, null, renderList(2, (n) => {
				return createVNode(CommunityPackageCard_default, {
					key: "index-" + n,
					loading: true
				});
			}), 64))], 2)) : unref(communityNodesStore).getInstalledPackages.length === 0 ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.actionBoxContainer)
			}, [createVNode(unref(N8nActionBox_default), {
				heading: getEmptyStateTitle.value,
				description: getEmptyStateDescription.value,
				"button-text": getEmptyStateButtonText.value,
				"button-disabled": !unref(settingsStore).isUnverifiedPackagesEnabled,
				"callout-text": actionBoxConfig.value.calloutText,
				"callout-theme": actionBoxConfig.value.calloutTheme,
				"onClick:button": onClickEmptyStateButton
			}, null, 8, [
				"heading",
				"description",
				"button-text",
				"button-disabled",
				"callout-text",
				"callout-theme"
			])], 2)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.cardsContainer)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(communityNodesStore).getInstalledPackages, (communityPackage) => {
				return openBlock(), createBlock(CommunityPackageCard_default, {
					key: communityPackage.packageName,
					"community-package": communityPackage
				}, null, 8, ["community-package"]);
			}), 128))], 2))], 2);
		};
	}
});
var SettingsCommunityNodesView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_rpbd6_125",
	headingContainer: "_headingContainer_rpbd6_133",
	loadingContainer: "_loadingContainer_rpbd6_138",
	actionBoxContainer: "_actionBoxContainer_rpbd6_143",
	cardsContainer: "_cardsContainer_rpbd6_147"
};
var SettingsCommunityNodesView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsCommunityNodesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsCommunityNodesView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsCommunityNodesView_default as default };

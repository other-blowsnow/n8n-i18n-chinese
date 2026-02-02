import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, F as getCurrentInstance, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, q as onBeforeMount, st as resolveDirective, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Bi as N8nButton_default, Li as N8nHeading_default, Mi as N8nActionBox_default, Xt as ElSwitch, Y as N8nInfoTip_default, Yt as createEventBus, bt as N8nActionToggle_default, ht as N8nCard_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Lt as injectWorkflowState, ar as hasPermission, cn as useDocumentTitle, fs as useSettingsStore, kr as v4_default, r as useUIStore, rt as useCredentialsStore, s as useWorkflowsStore, xr as useMessage } from "./users.store-qBZsmf9-.js";
import { n as ElRow, t as ElCol } from "./col-BEoCVthc.js";
import { Hi as defaultMessageEventBusDestinationOptions, Mc as EnterpriseEditionFeature, Pa as deepCopy, ds as LOG_STREAM_MODAL_KEY, hs as MODAL_CONFIRM } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { _ as assert } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { t as useLogStreamingStore } from "./logStreaming.store-BCpbcRmA.js";
var EventDestinationCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EventDestinationCard",
	props: {
		eventBus: {},
		destination: { default: () => deepCopy(defaultMessageEventBusDestinationOptions) },
		readonly: { type: Boolean }
	},
	emits: ["edit", "remove"],
	setup(__props, { emit: __emit }) {
		const DESTINATION_LIST_ITEM_ACTIONS = {
			OPEN: "open",
			DELETE: "delete"
		};
		const { confirm } = useMessage();
		const i18n = useI18n();
		const logStreamingStore = useLogStreamingStore();
		const nodeParameters = ref({});
		const cardActions$1 = ref(null);
		const props = __props;
		const emit = __emit;
		onMounted(() => {
			nodeParameters.value = Object.assign(deepCopy(defaultMessageEventBusDestinationOptions), props.destination);
			props.eventBus?.on("destinationWasSaved", onDestinationWasSaved);
		});
		onBeforeMount(() => {
			props.eventBus?.off("destinationWasSaved", onDestinationWasSaved);
		});
		const actions = computed(() => {
			const actionList = [{
				label: i18n.baseText("workflows.item.open"),
				value: DESTINATION_LIST_ITEM_ACTIONS.OPEN
			}];
			if (!props.readonly) actionList.push({
				label: i18n.baseText("workflows.item.delete"),
				value: DESTINATION_LIST_ITEM_ACTIONS.DELETE
			});
			return actionList;
		});
		const typeLabelName = computed(() => {
			return `settings.log-streaming.${props.destination.__type}`;
		});
		function onDestinationWasSaved() {
			assert(props.destination.id);
			if (logStreamingStore.getDestination(props.destination.id)) nodeParameters.value = Object.assign(deepCopy(defaultMessageEventBusDestinationOptions), props.destination);
		}
		async function onClick(event) {
			const target = event.target;
			if (cardActions$1.value === target || cardActions$1.value?.contains(target) || target?.contains(cardActions$1.value)) return;
			emit("edit", props.destination.id);
		}
		function onEnabledSwitched(state) {
			const boolValue = typeof state === "boolean" ? state : Boolean(state);
			nodeParameters.value.enabled = boolValue;
			saveDestination();
		}
		async function saveDestination() {
			await logStreamingStore.saveDestination(nodeParameters.value);
		}
		async function onAction(action) {
			if (action === DESTINATION_LIST_ITEM_ACTIONS.OPEN) emit("edit", props.destination.id);
			else if (action === DESTINATION_LIST_ITEM_ACTIONS.DELETE) {
				if (await confirm(i18n.baseText("settings.log-streaming.destinationDelete.message", { interpolate: { destinationName: props.destination.label ?? "" } }), i18n.baseText("settings.log-streaming.destinationDelete.headline"), {
					type: "warning",
					confirmButtonText: i18n.baseText("settings.log-streaming.destinationDelete.confirmButtonText"),
					cancelButtonText: i18n.baseText("settings.log-streaming.destinationDelete.cancelButtonText")
				}) !== "confirm") return;
				emit("remove", props.destination.id);
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.cardLink),
				"data-test-id": "destination-card",
				onClick
			}, {
				header: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(_ctx.$style.cardHeading)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.destination.label), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(typeLabelName.value)), 1)]),
					_: 1
				})], 2)])]),
				append: withCtx(() => [createBaseVNode("div", {
					ref_key: "cardActions",
					ref: cardActions$1,
					class: normalizeClass(_ctx.$style.cardActions)
				}, [
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.activeStatusText),
						"data-test-id": "destination-activator-status"
					}, [nodeParameters.value.enabled ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "success",
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.active")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.inactive")), 1)]),
						_: 1
					}))], 2),
					createVNode(unref(ElSwitch), {
						class: "mr-s",
						disabled: __props.readonly,
						"model-value": nodeParameters.value.enabled,
						title: nodeParameters.value.enabled ? unref(i18n).baseText("workflowActivator.deactivateWorkflow") : unref(i18n).baseText("workflowActivator.activateWorkflow"),
						"active-color": "#13ce66",
						"inactive-color": "#8899AA",
						"data-test-id": "workflow-activate-switch",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => onEnabledSwitched($event))
					}, null, 8, [
						"disabled",
						"model-value",
						"title"
					]),
					createVNode(unref(N8nActionToggle_default), {
						actions: actions.value,
						theme: "dark",
						onAction
					}, null, 8, ["actions"])
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var EventDestinationCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink: "_cardLink_s7ez3_125",
	activeStatusText: "_activeStatusText_s7ez3_135",
	cardHeading: "_cardHeading_s7ez3_143",
	cardDescription: "_cardDescription_s7ez3_149",
	cardActions: "_cardActions_s7ez3_156"
};
var EventDestinationCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(EventDestinationCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EventDestinationCard_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { class: "mb-2xl" };
var _hoisted_2 = { class: "ml-m" };
var _hoisted_3 = { class: "mb-l" };
var _hoisted_4 = { class: "mt-m text-right" };
var _hoisted_5 = {
	key: 1,
	"data-test-id": "action-box-licensed"
};
var _hoisted_6 = {
	key: 0,
	class: "mb-l"
};
var _hoisted_7 = { "data-test-id": "action-box-unlicensed" };
var SettingsLogStreamingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsLogStreamingView",
	setup(__props) {
		const environment = "production";
		const settingsStore = useSettingsStore();
		const logStreamingStore = useLogStreamingStore();
		const workflowsStore = useWorkflowsStore();
		const workflowState = injectWorkflowState();
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const documentTitle = useDocumentTitle();
		const i18n = useI18n();
		const pageRedirectHelper = usePageRedirectionHelper();
		const eventBus = createEventBus();
		const disableLicense = ref(false);
		const allDestinations = ref([]);
		const sortedItemKeysByLabel = computed(() => {
			const sortedKeys = [];
			for (const [key, value] of Object.entries(logStreamingStore.items)) sortedKeys.push({
				key,
				label: value.destination?.label ?? "Destination"
			});
			return sortedKeys.sort((a, b) => a.label.localeCompare(b.label));
		});
		const isLicensed = computed(() => {
			if (disableLicense.value) return false;
			return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.LogStreaming];
		});
		const canManageLogStreaming = computed(() => {
			return hasPermission(["rbac"], { rbac: { scope: "logStreaming:manage" } });
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.log-streaming.heading"));
			if (!isLicensed.value) return;
			await credentialsStore.fetchCredentialTypes(false);
			await credentialsStore.fetchAllCredentials();
			uiStore.nodeViewInitialized = false;
			await getDestinationDataFromBackend();
			logStreamingStore.$onAction(({ name, after }) => {
				if (name === "removeDestination" || name === "updateDestination") after(async () => {
					forceUpdateInstance();
				});
			});
			eventBus.on("destinationWasSaved", onDestinationWasSaved);
			eventBus.on("remove", onRemove);
			eventBus.on("closing", onBusClosing);
		});
		onBeforeMount(() => {
			eventBus.off("destinationWasSaved", onDestinationWasSaved);
			eventBus.off("remove", onRemove);
			eventBus.off("closing", onBusClosing);
		});
		function onDestinationWasSaved() {
			forceUpdateInstance();
		}
		function forceUpdateInstance() {
			getCurrentInstance()?.proxy?.$forceUpdate();
		}
		function onBusClosing() {
			workflowState.removeAllNodes({
				setStateDirty: false,
				removePinData: true
			});
			uiStore.markStateClean();
		}
		async function getDestinationDataFromBackend() {
			logStreamingStore.clearEventNames();
			logStreamingStore.clearDestinations();
			allDestinations.value = [];
			const eventNamesData = await logStreamingStore.fetchEventNames();
			if (eventNamesData) for (const eventName of eventNamesData) logStreamingStore.addEventName(eventName);
			const destinationData = await logStreamingStore.fetchDestinations();
			if (destinationData) for (const destination of destinationData) {
				logStreamingStore.addDestination(destination);
				allDestinations.value.push(destination);
			}
			forceUpdateInstance();
		}
		function goToUpgrade() {
			pageRedirectHelper.goToUpgrade("log-streaming", "upgrade-log-streaming");
		}
		function storeHasItems() {
			return logStreamingStore.items && Object.keys(logStreamingStore.items).length > 0;
		}
		async function addDestination() {
			const newDestination = deepCopy(defaultMessageEventBusDestinationOptions);
			newDestination.id = v4_default();
			logStreamingStore.addDestination(newDestination);
			await nextTick();
			uiStore.openModalWithData({
				name: LOG_STREAM_MODAL_KEY,
				data: {
					destination: newDestination,
					isNew: true,
					eventBus
				}
			});
		}
		async function onRemove(destinationId) {
			if (!destinationId) return;
			await logStreamingStore.deleteDestination(destinationId);
			const foundNode = workflowsStore.getNodeByName(destinationId);
			if (foundNode) workflowsStore.removeNode(foundNode);
		}
		async function onEdit(destinationId) {
			if (!destinationId) return;
			const editDestination = logStreamingStore.getDestination(destinationId);
			if (editDestination) uiStore.openModalWithData({
				name: LOG_STREAM_MODAL_KEY,
				data: {
					destination: editDestination,
					isNew: false,
					eventBus
				}
			});
		}
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.log-streaming.heading`)), 1)]),
				_: 1
			}), unref(environment) !== "production" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", _hoisted_2, "Disable License (" + toDisplayString(unref(environment)) + ")\xA0", 1), createVNode(unref(ElSwitch), {
				modelValue: disableLicense.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => disableLicense.value = $event),
				size: "large",
				"data-test-id": "disable-license-toggle"
			}, null, 8, ["modelValue"])], 64)) : createCommentVNode("", true)])], 2), isLicensed.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_3, [createVNode(unref(N8nInfoTip_default), {
				theme: "info",
				type: "note"
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.infoText")]])]),
				_: 1
			})]), storeHasItems() ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedItemKeysByLabel.value, (item) => {
				return openBlock(), createBlock(unref(ElRow), {
					key: item.key,
					gutter: 10,
					class: normalizeClass(_ctx.$style.destinationItem)
				}, {
					default: withCtx(() => [unref(logStreamingStore).items[item.key]?.destination ? (openBlock(), createBlock(unref(ElCol), { key: 0 }, {
						default: withCtx(() => [createVNode(EventDestinationCard_default, {
							destination: unref(logStreamingStore).items[item.key]?.destination,
							"event-bus": unref(eventBus),
							readonly: !canManageLogStreaming.value,
							onRemove: ($event) => onRemove(unref(logStreamingStore).items[item.key]?.destination?.id),
							onEdit: ($event) => onEdit(unref(logStreamingStore).items[item.key]?.destination?.id)
						}, null, 8, [
							"destination",
							"event-bus",
							"readonly",
							"onRemove",
							"onEdit"
						])]),
						_: 2
					}, 1024)) : createCommentVNode("", true)]),
					_: 2
				}, 1032, ["class"]);
			}), 128)), createBaseVNode("div", _hoisted_4, [canManageLogStreaming.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				size: "large",
				onClick: addDestination
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.log-streaming.add`)), 1)]),
				_: 1
			})) : createCommentVNode("", true)])], 64)) : (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(N8nActionBox_default), {
				"button-text": unref(i18n).baseText(`settings.log-streaming.add`),
				"onClick:button": addDestination
			}, {
				heading: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText(`settings.log-streaming.addFirstTitle`)]])]),
				_: 1
			}, 8, ["button-text"])]))], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(i18n).baseText("settings.log-streaming.infoText") ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(N8nInfoTip_default), {
				theme: "info",
				type: "note"
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.infoText")]])]),
				_: 1
			})])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_7, [createVNode(unref(N8nActionBox_default), {
				description: unref(i18n).baseText("settings.log-streaming.actionBox.description"),
				"button-text": unref(i18n).baseText("settings.log-streaming.actionBox.button"),
				"onClick:button": goToUpgrade
			}, {
				heading: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.actionBox.title")]])]),
				_: 1
			}, 8, ["description", "button-text"])])], 64))]);
		};
	}
});
var SettingsLogStreamingView_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1gpds_125",
	destinationItem: "_destinationItem_1gpds_135"
};
var SettingsLogStreamingView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsLogStreamingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsLogStreamingView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsLogStreamingView_default as default };

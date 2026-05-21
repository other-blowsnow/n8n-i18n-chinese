import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, O as createSlots, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, gt as watch, h as withModifiers, j as createVNode, rt as renderList, st as resolveDynamicComponent, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-CzIVo7k9.js";
import { Ca as N8nText_default, Ct as N8nCard_default, Pi as Input_default, T as Switch_default, Ta as N8nIcon_default, _t as N8nOption_default, gt as N8nSelect_default, wa as N8nButton_default, xa as N8nHeading_default } from "./src-DVkMmVCd.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { pt as useCredentialsStore, r as useUIStore, tn as useProjectsStore } from "./users.store-Dpbobzbe.js";
import { Ga as AGENT_SCHEDULE_TRIGGER_TYPE, tl as getResourcePermissions } from "./constants-B2-iseoM.js";
import { t as useRootStore } from "./useRootStore-CX_m119O.js";
import { t as Modal_default } from "./Modal-CedLCVlb.js";
import { t as CredentialsDropdown_default } from "./CredentialsDropdown-DnJviwlc.js";
import { O as updateScheduleIntegration, a as activateScheduleIntegration, d as deactivateScheduleIntegration, y as getScheduleIntegration } from "./agentTelemetry.utils-_H-3WZ52.js";
import { n as useAgentIntegrationStatus, r as useAgentIntegrationsCatalog } from "./useAgentIntegrationStatus-DzjZjQtg.js";
import { n as useAgentConfirmationModal, t as useAgentPublish } from "./useAgentPublish-DOvUS4Q7.js";
//#region src/features/agents/components/AgentScheduleTriggerCard.vue?vue&type=script&setup=true&lang.ts
var AgentScheduleTriggerCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentScheduleTriggerCard",
	props: {
		projectId: {},
		agentId: {},
		isPublished: { type: Boolean },
		flat: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"status-change",
		"trigger-added",
		"saved"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const rootStore = useRootStore();
		const active = ref(false);
		const lastSavedActive = ref(false);
		const cronExpression = ref("");
		const wakeUpPrompt = ref("");
		const loading = ref(false);
		const saving = ref(false);
		const cronErrorMessage = ref("");
		const generalErrorMessage = ref("");
		const lastSavedCronExpression = ref("");
		const lastSavedWakeUpPrompt = ref("");
		const isDirty = computed(() => active.value !== lastSavedActive.value || cronExpression.value !== lastSavedCronExpression.value || wakeUpPrompt.value !== lastSavedWakeUpPrompt.value);
		const isConfigured = computed(() => lastSavedCronExpression.value.trim() !== "");
		const canSave = computed(() => isDirty.value && !loading.value && !saving.value && cronErrorMessage.value === "" && (!active.value || props.isPublished && cronExpression.value.trim() !== ""));
		function applyConfig(config) {
			active.value = config.active;
			lastSavedActive.value = config.active;
			cronExpression.value = config.cronExpression;
			lastSavedCronExpression.value = config.cronExpression;
			wakeUpPrompt.value = config.wakeUpPrompt;
			lastSavedWakeUpPrompt.value = config.wakeUpPrompt;
			emit("status-change", config.cronExpression.trim() !== "");
		}
		function toErrorMessage(error, fallbackKey) {
			if (error instanceof Error && error.message) return error.message;
			return locale.baseText(fallbackKey);
		}
		function isCronValidationError(message) {
			return message === "Invalid cron expression";
		}
		function setSaveError(error, fallbackKey) {
			const message = toErrorMessage(error, fallbackKey);
			if (isCronValidationError(message)) {
				cronErrorMessage.value = message;
				return;
			}
			generalErrorMessage.value = message;
		}
		function clearErrors() {
			cronErrorMessage.value = "";
			generalErrorMessage.value = "";
		}
		async function loadConfig() {
			loading.value = true;
			clearErrors();
			try {
				applyConfig(await getScheduleIntegration(rootStore.restApiContext, props.projectId, props.agentId));
			} catch (error) {
				generalErrorMessage.value = toErrorMessage(error, "agents.schedule.loadError");
			} finally {
				loading.value = false;
			}
		}
		async function saveCronConfig(overrides) {
			try {
				return await updateScheduleIntegration(rootStore.restApiContext, props.projectId, props.agentId, {
					cronExpression: overrides?.cronExpression ?? cronExpression.value,
					wakeUpPrompt: overrides?.wakeUpPrompt ?? wakeUpPrompt.value
				});
			} catch (error) {
				setSaveError(error, "agents.schedule.saveError");
				return null;
			}
		}
		async function onDisconnect() {
			if (!isConfigured.value || loading.value || saving.value) return;
			saving.value = true;
			clearErrors();
			try {
				await deactivateScheduleIntegration(rootStore.restApiContext, props.projectId, props.agentId);
				const config = await saveCronConfig({
					cronExpression: "",
					wakeUpPrompt: lastSavedWakeUpPrompt.value
				});
				if (!config) return;
				applyConfig({
					...config,
					active: false,
					cronExpression: ""
				});
				emit("saved");
			} catch (error) {
				setSaveError(error, "agents.schedule.deactivateError");
			} finally {
				saving.value = false;
			}
		}
		async function onSave() {
			if (!canSave.value) return;
			const wasConfigured = lastSavedCronExpression.value.trim() !== "";
			saving.value = true;
			clearErrors();
			try {
				let config;
				if (active.value) {
					config = await saveCronConfig();
					if (!config) return;
					if (!config.active) config = await activateScheduleIntegration(rootStore.restApiContext, props.projectId, props.agentId);
				} else {
					if (lastSavedActive.value) config = await deactivateScheduleIntegration(rootStore.restApiContext, props.projectId, props.agentId);
					config = await saveCronConfig();
					if (!config) return;
				}
				applyConfig(config);
				if (!wasConfigured && config.cronExpression.trim() !== "") emit("trigger-added");
				emit("saved");
			} catch (error) {
				setSaveError(error, active.value ? "agents.schedule.activateError" : "agents.schedule.deactivateError");
			} finally {
				saving.value = false;
			}
		}
		function onCancel() {
			active.value = lastSavedActive.value;
			cronExpression.value = lastSavedCronExpression.value;
			wakeUpPrompt.value = lastSavedWakeUpPrompt.value;
			clearErrors();
		}
		function onCronExpressionInput(value) {
			cronExpression.value = value;
			clearErrors();
		}
		function onWakeUpPromptInput(value) {
			wakeUpPrompt.value = value;
			clearErrors();
		}
		function onActiveInput(value) {
			active.value = value;
			clearErrors();
		}
		onMounted(() => {
			loadConfig();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.flat ? "div" : unref(N8nCard_default)), { class: normalizeClass(__props.flat ? _ctx.$style.flatBody : _ctx.$style.card) }, createSlots({
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.description),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.schedule.description")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleRow) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.schedule.status.active")), 1)]),
						_: 1
					}), createVNode(unref(Switch_default), {
						"model-value": active.value,
						disabled: loading.value || saving.value,
						"data-testid": "schedule-active-toggle",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = (value) => onActiveInput(Boolean(value)))
					}, null, 8, ["model-value", "disabled"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
						createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.schedule.cron")), 1)]),
							_: 1
						}),
						createVNode(unref(Input_default), {
							"model-value": cronExpression.value,
							disabled: loading.value || saving.value,
							placeholder: unref(locale).baseText("agents.schedule.cron.placeholder"),
							"data-testid": "schedule-cron-input",
							"onUpdate:modelValue": onCronExpressionInput
						}, null, 8, [
							"model-value",
							"disabled",
							"placeholder"
						]),
						cronErrorMessage.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.errorText),
							size: "small",
							"data-testid": "schedule-cron-error"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(cronErrorMessage.value), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
						createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.schedule.wakeUpPrompt")), 1)]),
							_: 1
						}),
						createVNode(unref(Input_default), {
							"model-value": wakeUpPrompt.value,
							type: "textarea",
							rows: 3,
							disabled: loading.value || saving.value,
							placeholder: unref(locale).baseText("agents.schedule.wakeUpPrompt.placeholder"),
							"data-testid": "schedule-wake-up-prompt-input",
							"onUpdate:modelValue": onWakeUpPromptInput
						}, null, 8, [
							"model-value",
							"disabled",
							"placeholder"
						]),
						createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.helpText),
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.schedule.wakeUpPrompt.help")), 1)]),
							_: 1
						}, 8, ["class"])
					], 2),
					active.value && !__props.isPublished ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.helpText),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.schedule.publishRequired")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					generalErrorMessage.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.errorText),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(generalErrorMessage.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [isConfigured.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "destructive",
						disabled: loading.value || saving.value,
						"data-testid": "schedule-disconnect-button",
						onClick: onDisconnect
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "unlink",
							size: "xsmall"
						})]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(locale).baseText("agents.builder.addTrigger.disconnect")), 1)]),
						_: 1
					}, 8, ["disabled"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.saveActions) }, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						"data-testid": "schedule-cancel-button",
						onClick: onCancel
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.cancel")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						variant: "solid",
						disabled: !canSave.value,
						loading: saving.value,
						"data-testid": "schedule-save-button",
						onClick: onSave
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.save")), 1)]),
						_: 1
					}, 8, ["disabled", "loading"])], 2)], 2)
				], 2)]),
				_: 2
			}, [!__props.flat ? {
				name: "header",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.statusRow) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, active.value ? _ctx.$style.statusConnected : _ctx.$style.statusDisconnected]) }, null, 2),
					createVNode(unref(N8nText_default), { bold: "" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.schedule.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.statusLabel),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(active.value ? unref(locale).baseText("agents.schedule.status.active") : unref(locale).baseText("agents.schedule.status.inactive")), 1)]),
						_: 1
					}, 8, ["class"])
				], 2)], 2)]),
				key: "0"
			} : void 0]), 1032, ["class"]);
		};
	}
});
var AgentScheduleTriggerCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_kk9r8_2",
	flatBody: "_flatBody_kk9r8_7",
	cardHeader: "_cardHeader_kk9r8_11",
	statusRow: "_statusRow_kk9r8_17",
	statusDot: "_statusDot_kk9r8_23",
	statusConnected: "_statusConnected_kk9r8_30",
	statusDisconnected: "_statusDisconnected_kk9r8_34",
	statusLabel: "_statusLabel_kk9r8_38",
	cardBody: "_cardBody_kk9r8_42",
	description: "_description_kk9r8_48",
	helpText: "_helpText_kk9r8_49",
	field: "_field_kk9r8_53",
	toggleRow: "_toggleRow_kk9r8_59",
	actions: "_actions_kk9r8_66",
	saveActions: "_saveActions_kk9r8_73",
	errorText: "_errorText_kk9r8_80"
};
var AgentScheduleTriggerCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentScheduleTriggerCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentScheduleTriggerCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentCredentialSelect.vue
var AgentCredentialSelect_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCredentialSelect",
	props: {
		modelValue: {},
		credentials: {},
		placeholder: {},
		dataTestId: {},
		credentialPermissions: {},
		loading: { type: Boolean },
		disabled: { type: Boolean }
	},
	emits: ["update:modelValue", "create"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const credentialOptions = computed(() => [...props.credentials].sort((a, b) => {
			const byName = a.name.localeCompare(b.name, void 0, { sensitivity: "base" });
			return byName === 0 ? a.id.localeCompare(b.id) : byName;
		}).map((credential) => ({
			id: credential.id,
			name: credential.name,
			typeDisplayName: credential.typeDisplayName,
			homeProject: credential.homeProject
		})));
		function onCredentialSelected(credentialId) {
			emit("update:modelValue", credentialId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(CredentialsDropdown_default, {
				"credential-options": credentialOptions.value,
				"selected-credential-id": __props.modelValue ?? null,
				permissions: __props.credentialPermissions,
				placeholder: __props.placeholder,
				loading: __props.loading,
				disabled: __props.disabled,
				"data-test-id": __props.dataTestId,
				onCredentialSelected,
				onNewCredential: _cache[0] || (_cache[0] = ($event) => emit("create"))
			}, null, 8, [
				"credential-options",
				"selected-credential-id",
				"permissions",
				"placeholder",
				"loading",
				"disabled",
				"data-test-id"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentAddTriggerModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["value", "data-testid"];
var SCHEDULE_ICON = "clock";
var DEFAULT_SLACK_APP_NAME = "n8n Agent";
var AgentAddTriggerModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentAddTriggerModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		/**
		* Add trigger modal — a single dropdown picker (with icons) at the top, and
		* the selected trigger's configuration rendered inline below. One config is
		* visible at a time so the modal doesn't need to scroll.
		*/
		const props = __props;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const { catalog, ensureLoaded } = useAgentIntegrationsCatalog();
		const { publish, publishing } = useAgentPublish();
		const { openAgentConfirmationModal } = useAgentConfirmationModal();
		const publishedDuringSession = ref(false);
		const isPublishedLocal = computed(() => publishedDuringSession.value || props.data.isPublished);
		const integrations = ref([]);
		const selectedTriggerType = ref(props.data.initialTriggerType ?? "");
		const { statuses, connectedCredentials, loadingMap, errorMessages, errorIsConflict, fetchStatus: fetchStatusShared, connect, disconnect, isConnected } = useAgentIntegrationStatus(props.data.projectId, props.data.agentId);
		const selectedCredentials = ref({});
		const credentialsByType = ref({});
		const credentialsLoading = ref(false);
		const credentialIdsBeforeNew = ref({});
		const pendingNewCredentialType = ref(null);
		const linearCopied = ref(false);
		const manifestCopied = ref(false);
		const currentIntegration = computed(() => integrations.value.find((i) => i.type === selectedTriggerType.value) ?? null);
		const projectForPermissions = computed(() => {
			if (projectsStore.currentProject?.id === props.data.projectId) return projectsStore.currentProject;
			if (projectsStore.personalProject?.id === props.data.projectId) return projectsStore.personalProject;
			return projectsStore.myProjects.find((project) => project.id === props.data.projectId) ?? null;
		});
		const credentialPermissions = computed(() => {
			const permissions = getResourcePermissions(projectForPermissions.value?.scopes).credential;
			return {
				...permissions,
				create: !!permissions.create
			};
		});
		function toIconName(icon) {
			return icon;
		}
		const selectedIcon = computed(() => {
			if (!selectedTriggerType.value) return null;
			if (selectedTriggerType.value === "schedule") return SCHEDULE_ICON;
			const icon = currentIntegration.value?.icon;
			return icon ? toIconName(icon) : null;
		});
		function isLoading(type) {
			return loadingMap.value[type] ?? false;
		}
		function hasError(type) {
			return (errorMessages.value[type] ?? "").length > 0;
		}
		const CONNECTED_TEXT_KEYS = {
			slack: "agents.builder.addTrigger.connectedText.slack",
			telegram: "agents.builder.addTrigger.connectedText.telegram",
			linear: "agents.builder.addTrigger.connectedText.linear"
		};
		function integrationConnectedText(type) {
			const key = CONNECTED_TEXT_KEYS[type];
			return key ? i18n.baseText(key) : "";
		}
		function webhookUrlFor(platform) {
			return `${rootStore.urlBaseWebhook.replace(/\/$/, "")}/rest/projects/${props.data.projectId}/agents/v2/${props.data.agentId}/webhooks/${platform}`;
		}
		async function copyLinearWebhookUrl() {
			await navigator.clipboard.writeText(webhookUrlFor("linear"));
			linearCopied.value = true;
			setTimeout(() => {
				linearCopied.value = false;
			}, 2e3);
		}
		const oauthCallbackUrl = computed(() => {
			const configured = rootStore.OAuthCallbackUrls.oauth2 ?? "";
			if (!configured) return "";
			try {
				const parsed = new URL(configured);
				return `${rootStore.urlBaseWebhook.replace(/\/$/, "")}${parsed.pathname}${parsed.search}`;
			} catch {
				return configured;
			}
		});
		function sanitiseSlackAppName(raw) {
			const cleaned = raw.replace(/[^a-zA-Z0-9 ._-]/g, "").replace(/\s+/g, " ").trim().slice(0, 35);
			return cleaned.length > 0 ? cleaned : DEFAULT_SLACK_APP_NAME;
		}
		const slackAppManifest = computed(() => {
			const agentName = sanitiseSlackAppName(props.data.agentName);
			return JSON.stringify({
				display_information: { name: agentName },
				features: {
					app_home: {
						home_tab_enabled: true,
						messages_tab_enabled: false,
						messages_tab_read_only_enabled: false
					},
					bot_user: {
						display_name: agentName,
						always_online: true
					}
				},
				oauth_config: {
					redirect_urls: [oauthCallbackUrl.value],
					scopes: { bot: [
						"app_mentions:read",
						"assistant:write",
						"channels:history",
						"channels:join",
						"channels:manage",
						"channels:read",
						"chat:write",
						"chat:write.customize",
						"files:read",
						"files:write",
						"groups:read",
						"im:history",
						"im:read",
						"im:write",
						"mpim:read",
						"mpim:write",
						"search:read.public",
						"users:read",
						"users:read.email"
					] },
					pkce_enabled: false
				},
				settings: {
					event_subscriptions: {
						request_url: webhookUrlFor("slack"),
						bot_events: [
							"app_mention",
							"assistant_thread_context_changed",
							"message.im"
						]
					},
					interactivity: {
						is_enabled: true,
						request_url: webhookUrlFor("slack")
					},
					org_deploy_enabled: false,
					socket_mode_enabled: false,
					token_rotation_enabled: false
				}
			}, null, 2);
		});
		async function copyManifest() {
			await navigator.clipboard.writeText(slackAppManifest.value);
			manifestCopied.value = true;
			setTimeout(() => {
				manifestCopied.value = false;
			}, 2e3);
		}
		function computeConnectedTriggers() {
			return Object.keys(statuses.value).filter((t) => statuses.value[t] === "connected").sort();
		}
		function emitConnectedTriggers() {
			props.data.onConnectedTriggersChange(computeConnectedTriggers());
		}
		async function fetchStatus() {
			await fetchStatusShared([...integrations.value.map((integration) => integration.type), AGENT_SCHEDULE_TRIGGER_TYPE]);
			if (props.data.connectedTriggers.includes("schedule")) {
				statuses.value[AGENT_SCHEDULE_TRIGGER_TYPE] = "connected";
				connectedCredentials.value[AGENT_SCHEDULE_TRIGGER_TYPE] = "";
			}
			emitConnectedTriggers();
		}
		function onScheduleStatusChange(configured) {
			statuses.value[AGENT_SCHEDULE_TRIGGER_TYPE] = configured ? "connected" : "disconnected";
			connectedCredentials.value[AGENT_SCHEDULE_TRIGGER_TYPE] = "";
			emitConnectedTriggers();
		}
		function onScheduleTriggerAdded() {
			props.data.onTriggerAdded({
				triggerType: AGENT_SCHEDULE_TRIGGER_TYPE,
				triggers: computeConnectedTriggers()
			});
		}
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		async function fetchCredentials() {
			credentialsLoading.value = true;
			try {
				credentialsStore.setCredentials([]);
				const allCredentials = await credentialsStore.fetchAllCredentialsForWorkflow({ projectId: props.data.projectId });
				for (const integration of integrations.value) credentialsByType.value[integration.type] = allCredentials.filter((c) => integration.credentialTypes.includes(c.type)).map((c) => ({
					id: c.id,
					name: c.name,
					typeDisplayName: credentialsStore.getCredentialTypeByName(c.type)?.displayName,
					homeProject: c.homeProject
				}));
			} catch {
				for (const integration of integrations.value) credentialsByType.value[integration.type] = [];
			} finally {
				credentialsLoading.value = false;
			}
		}
		async function ensurePublished() {
			if (isPublishedLocal.value) return true;
			if (await openAgentConfirmationModal({
				title: i18n.baseText("agents.builder.addTrigger.publishPrompt.title"),
				description: i18n.baseText("agents.builder.addTrigger.publishPrompt.description"),
				confirmButtonText: i18n.baseText("agents.builder.addTrigger.publishPrompt.confirm"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm") return false;
			const updated = await publish(props.data.projectId, props.data.agentId);
			if (!updated) return false;
			publishedDuringSession.value = true;
			props.data.onAgentPublished?.(updated);
			return true;
		}
		async function onConnect(type) {
			const credId = selectedCredentials.value[type];
			if (!credId) return;
			if (!await ensurePublished()) return;
			try {
				await connect(type, credId);
				const triggers = computeConnectedTriggers();
				props.data.onTriggerAdded({
					triggerType: type,
					triggers
				});
				emitConnectedTriggers();
			} catch {}
		}
		async function onDisconnect(type) {
			const credId = connectedCredentials.value[type] || selectedCredentials.value[type];
			if (!credId) return;
			await disconnect(type, credId);
			selectedCredentials.value[type] = "";
			emitConnectedTriggers();
		}
		function onCreateCredential(integration) {
			const [primaryCredentialType] = integration.credentialTypes;
			if (!primaryCredentialType) return;
			const existing = credentialsByType.value[integration.type] ?? [];
			credentialIdsBeforeNew.value[integration.type] = new Set(existing.map((c) => c.id));
			pendingNewCredentialType.value = integration.type;
			uiStore.openNewCredential(primaryCredentialType, false, false, props.data.projectId, void 0, void 0, void 0, { hideAskAssistant: true });
		}
		function onEditCredential(type) {
			const credId = selectedCredentials.value[type];
			if (credId) uiStore.openExistingCredential(credId, { hideAskAssistant: true });
		}
		watch(computed(() => uiStore.isModalActiveById["editCredential"] ?? false), async (isOpen, wasOpen) => {
			if (!wasOpen || isOpen) return;
			const type = pendingNewCredentialType.value;
			pendingNewCredentialType.value = null;
			await fetchCredentials();
			if (!type) return;
			const before = credentialIdsBeforeNew.value[type];
			const after = credentialsByType.value[type] ?? [];
			const newCred = before ? after.find((c) => !before.has(c.id)) : void 0;
			if (newCred) selectedCredentials.value[type] = newCred.id;
			delete credentialIdsBeforeNew.value[type];
		});
		onMounted(async () => {
			for (const key of Object.keys(errorMessages.value)) {
				errorMessages.value[key] = "";
				errorIsConflict.value[key] = false;
			}
			integrations.value = await ensureLoaded(props.data.projectId).catch(() => catalog.value ?? []) ?? [];
			await Promise.all([fetchStatus(), fetchCredentials()]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				width: "600px",
				"data-test-id": "agent-add-trigger-modal"
			}, createSlots({
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.modal.title")), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.modalDescription),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.modal.description")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.pickerRow) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.picker.label")), 1)]),
						_: 1
					}), createVNode(unref(N8nSelect_default), {
						modelValue: selectedTriggerType.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTriggerType.value = $event),
						class: normalizeClass([_ctx.$style.triggerPicker, selectedIcon.value ? _ctx.$style.triggerPickerWithIcon : void 0]),
						placeholder: unref(i18n).baseText("agents.builder.addTrigger.picker.placeholder"),
						size: "medium",
						"data-testid": "agent-add-trigger-picker"
					}, createSlots({
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: unref(AGENT_SCHEDULE_TRIGGER_TYPE),
							label: unref(i18n).baseText("agents.schedule.title")
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionRow) }, [createVNode(unref(N8nIcon_default), {
								icon: SCHEDULE_ICON,
								size: 16,
								class: normalizeClass(_ctx.$style.optionIcon)
							}, null, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(unref(i18n).baseText("agents.schedule.title")), 3)], 2)]),
							_: 1
						}, 8, ["value", "label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(integrations.value, (integration) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: integration.type,
								value: integration.type,
								label: integration.label
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionRow) }, [createVNode(unref(N8nIcon_default), {
									icon: toIconName(integration.icon),
									size: 16,
									class: normalizeClass(_ctx.$style.optionIcon)
								}, null, 8, ["icon", "class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(integration.label), 3)], 2)]),
								_: 2
							}, 1032, ["value", "label"]);
						}), 128))]),
						_: 2
					}, [selectedIcon.value ? {
						name: "prefix",
						fn: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: selectedIcon.value,
							size: 16
						}, null, 8, ["icon"])]),
						key: "0"
					} : void 0]), 1032, [
						"modelValue",
						"class",
						"placeholder"
					])], 2),
					!selectedTriggerType.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.placeholderState)
					}, [createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.picker.empty")), 1)]),
						_: 1
					})], 2)) : selectedTriggerType.value === unref("schedule") ? (openBlock(), createBlock(AgentScheduleTriggerCard_default, {
						key: 1,
						"project-id": __props.data.projectId,
						"agent-id": __props.data.agentId,
						"is-published": isPublishedLocal.value,
						flat: true,
						onStatusChange: onScheduleStatusChange,
						onTriggerAdded: onScheduleTriggerAdded,
						onSaved: closeModal
					}, null, 8, [
						"project-id",
						"agent-id",
						"is-published"
					])) : currentIntegration.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.integrationConfig)
					}, [
						currentIntegration.value.type === "linear" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.webhookRow)
						}, [createBaseVNode("input", {
							value: webhookUrlFor("linear"),
							readonly: "",
							class: normalizeClass(_ctx.$style.webhookInput),
							"data-testid": `${currentIntegration.value.type}-webhook-url`,
							onFocus: _cache[1] || (_cache[1] = ($event) => $event.target.select())
						}, null, 42, _hoisted_1), createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "small",
							"data-testid": `${currentIntegration.value.type}-copy-webhook-url`,
							onClick: copyLinearWebhookUrl
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: linearCopied.value ? "check" : "copy",
								size: "xsmall"
							}, null, 8, ["icon"])]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(linearCopied.value ? unref(i18n).baseText("agents.builder.addTrigger.copied") : unref(i18n).baseText("agents.builder.addTrigger.copy")), 1)]),
							_: 1
						}, 8, ["data-testid"])], 2)) : createCommentVNode("", true),
						!unref(isConnected)(currentIntegration.value.type) ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.connectForm)
						}, [
							createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, [createVNode(unref(N8nText_default), {
								size: "small",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(currentIntegration.value.label) + " " + toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.credential")), 1)]),
								_: 1
							})], 2),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.selectRow) }, [createVNode(AgentCredentialSelect_default, {
								modelValue: selectedCredentials.value[currentIntegration.value.type],
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedCredentials.value[currentIntegration.value.type] = $event),
								class: normalizeClass(_ctx.$style.select),
								placeholder: unref(i18n).baseText("agents.builder.addTrigger.selectCredential"),
								credentials: credentialsByType.value[currentIntegration.value.type] ?? [],
								"credential-permissions": credentialPermissions.value,
								loading: credentialsLoading.value,
								disabled: isLoading(currentIntegration.value.type),
								"data-test-id": `${currentIntegration.value.type}-credential-select`,
								onCreate: _cache[3] || (_cache[3] = ($event) => onCreateCredential(currentIntegration.value))
							}, null, 8, [
								"modelValue",
								"class",
								"placeholder",
								"credentials",
								"credential-permissions",
								"loading",
								"disabled",
								"data-test-id"
							]), selectedCredentials.value[currentIntegration.value.type] ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								variant: "outline",
								size: "small",
								icon: "pen",
								"aria-label": unref(i18n).baseText("agents.builder.addTrigger.editCredential"),
								"data-testid": `${currentIntegration.value.type}-edit-credential`,
								onClick: _cache[4] || (_cache[4] = ($event) => onEditCredential(currentIntegration.value.type))
							}, null, 8, ["aria-label", "data-testid"])) : createCommentVNode("", true)], 2),
							hasError(currentIntegration.value.type) ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								class: normalizeClass(_ctx.$style.errorText),
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(errorMessages)[currentIntegration.value.type]) + " ", 1), selectedCredentials.value[currentIntegration.value.type] && !unref(errorIsConflict)[currentIntegration.value.type] ? (openBlock(), createElementBlock("a", {
									key: 0,
									class: normalizeClass(_ctx.$style.link),
									href: "#",
									onClick: _cache[5] || (_cache[5] = withModifiers(($event) => onEditCredential(currentIntegration.value.type), ["prevent"]))
								}, toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.editCredential")), 3)) : createCommentVNode("", true)]),
								_: 1
							}, 8, ["class"])) : createCommentVNode("", true)
						], 2)) : (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.connectedSection)
						}, [createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(integrationConnectedText(currentIntegration.value.type)), 1)]),
							_: 1
						})], 2)),
						currentIntegration.value.type === "slack" ? (openBlock(), createElementBlock("div", {
							key: 3,
							class: normalizeClass(_ctx.$style.manifestSection)
						}, [
							createVNode(unref(N8nText_default), {
								size: "small",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.manifestTitle")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								class: normalizeClass(_ctx.$style.manifestHint),
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.manifestHint")), 1)]),
								_: 1
							}, 8, ["class"]),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.codeBlock) }, [createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "small",
								class: normalizeClass(_ctx.$style.codeBlockCopy),
								"data-testid": `${currentIntegration.value.type}-copy-manifest`,
								onClick: copyManifest
							}, {
								prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: manifestCopied.value ? "check" : "copy",
									size: "xsmall"
								}, null, 8, ["icon"])]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(manifestCopied.value ? unref(i18n).baseText("agents.builder.addTrigger.copied") : unref(i18n).baseText("agents.builder.addTrigger.copy")), 1)]),
								_: 1
							}, 8, ["class", "data-testid"]), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.manifestCode) }, toDisplayString(slackAppManifest.value), 3)], 2)
						], 2)) : createCommentVNode("", true)
					], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 2
			}, [currentIntegration.value ? {
				name: "footer",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [!unref(isConnected)(currentIntegration.value.type) ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					disabled: !selectedCredentials.value[currentIntegration.value.type] || isLoading(currentIntegration.value.type) || unref(publishing),
					loading: isLoading(currentIntegration.value.type) || unref(publishing),
					size: "small",
					"data-testid": `${currentIntegration.value.type}-connect-button`,
					onClick: _cache[6] || (_cache[6] = ($event) => onConnect(currentIntegration.value.type))
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "plug",
						size: "xsmall"
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.connect")), 1)]),
					_: 1
				}, 8, [
					"disabled",
					"loading",
					"data-testid"
				])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "destructive",
					loading: isLoading(currentIntegration.value.type),
					size: "small",
					"data-testid": `${currentIntegration.value.type}-disconnect-button`,
					onClick: _cache[7] || (_cache[7] = ($event) => onDisconnect(currentIntegration.value.type))
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "unlink",
						size: "xsmall"
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.disconnect")), 1)]),
					_: 1
				}, 8, ["loading", "data-testid"]))], 2)], 2)]),
				key: "0"
			} : void 0]), 1032, ["name"]);
		};
	}
});
var AgentAddTriggerModal_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_1yzn2_125",
	pickerRow: "_pickerRow_1yzn2_132",
	triggerPicker: "_triggerPicker_1yzn2_138",
	triggerPickerWithIcon: "_triggerPickerWithIcon_1yzn2_144",
	optionRow: "_optionRow_1yzn2_148",
	optionIcon: "_optionIcon_1yzn2_156",
	optionLabel: "_optionLabel_1yzn2_160",
	placeholderState: "_placeholderState_1yzn2_167",
	integrationConfig: "_integrationConfig_1yzn2_177",
	modalDescription: "_modalDescription_1yzn2_183",
	connectForm: "_connectForm_1yzn2_187",
	label: "_label_1yzn2_193",
	selectRow: "_selectRow_1yzn2_197",
	select: "_select_1yzn2_197",
	footer: "_footer_1yzn2_208",
	footerActions: "_footerActions_1yzn2_214",
	connectedSection: "_connectedSection_1yzn2_220",
	manifestSection: "_manifestSection_1yzn2_226",
	manifestHint: "_manifestHint_1yzn2_232",
	codeBlock: "_codeBlock_1yzn2_236",
	codeBlockCopy: "_codeBlockCopy_1yzn2_245",
	manifestCode: "_manifestCode_1yzn2_252",
	errorText: "_errorText_1yzn2_270",
	link: "_link_1yzn2_274",
	webhookRow: "_webhookRow_1yzn2_281",
	webhookInput: "_webhookInput_1yzn2_287"
};
var AgentAddTriggerModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentAddTriggerModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentAddTriggerModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentAddTriggerModal_default as default };

import { C as computed, D as createElementBlock, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Ln as N8nButton_default, Pn as N8nHeading_default, et as N8nLoading_default, mt as N8nLink_default, vt as N8nTooltip_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Ci as tryToParseNumber, Ht as useCredentialsStore, Qs as useRootStore, o as useWorkflowsStore, rt as useNodeTypesStore, t as useTelemetry, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import { t as useExternalHooks } from "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import { t as useTemplatesStore } from "./templates.store-CFt_GGxU.js";
import "./nodeIcon-BWTKM7V3.js";
import "./NodeIcon-B-yC7jws.js";
import "./nodeTransforms-CSXaQK2h.js";
import "./templateTransforms-CAgEhQ8p.js";
import { n as AppsRequiringCredsNotice_default, r as useCredentialSetupState, t as SetupTemplateFormStep_default } from "./SetupTemplateFormStep-JIuqDPPb.js";
import { t as createWorkflowFromTemplate } from "./templateActions-DbrrFG6N.js";
import { t as TemplatesView_default } from "./TemplatesView-C0ExQ8hI.js";
const useSetupTemplateStore = defineStore("setupTemplate", () => {
	const templateId = ref("");
	const isLoading = ref(true);
	const isSaving = ref(false);
	const templatesStore = useTemplatesStore();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const template = computed(() => {
		return templateId.value ? templatesStore.getFullTemplateById(templateId.value) : null;
	});
	const { appCredentials, credentialOverrides, credentialUsages, credentialsByKey, nodesRequiringCredentialsSorted, numFilledCredentials, selectedCredentialIdByKey, setSelectedCredentialId, unsetSelectedCredential } = useCredentialSetupState(computed(() => {
		return template.value?.workflow.nodes ?? [];
	}));
	const setTemplateId = (id) => {
		templateId.value = id;
	};
	const ignoredAutoFillCredentialTypes = new Set([
		"httpBasicAuth",
		"httpCustomAuth",
		"httpDigestAuth",
		"httpHeaderAuth",
		"oAuth1Api",
		"oAuth2Api",
		"httpQueryAuth"
	]);
	const setInitialCredentialSelection = () => {
		for (const credUsage of credentialUsages.value) {
			if (ignoredAutoFillCredentialTypes.has(credUsage.credentialType)) continue;
			const availableCreds = credentialsStore.getCredentialsByType(credUsage.credentialType);
			if (availableCreds.length === 1) selectedCredentialIdByKey.value[credUsage.key] = availableCreds[0].id;
		}
	};
	const loadTemplateIfNeeded = async () => {
		if (!!template.value || !templateId.value) return;
		await templatesStore.fetchTemplateById(templateId.value);
		setInitialCredentialSelection();
	};
	const init = async () => {
		isLoading.value = true;
		try {
			selectedCredentialIdByKey.value = {};
			await Promise.all([
				credentialsStore.fetchAllCredentials(),
				credentialsStore.fetchCredentialTypes(false),
				nodeTypesStore.loadNodeTypesIfNotLoaded(),
				loadTemplateIfNeeded()
			]);
			setInitialCredentialSelection();
		} finally {
			isLoading.value = false;
		}
	};
	const skipSetup = async ({ router }) => {
		const externalHooks = useExternalHooks();
		const telemetry = useTelemetry();
		await externalHooks.run("templatesWorkflowView.openWorkflow", {
			source: "workflow",
			template_id: templateId.value,
			wf_template_repo_session_id: templatesStore.currentSessionId
		});
		telemetry.track("User closed cred setup", {
			completed: false,
			creds_filled: 0,
			creds_needed: credentialUsages.value.length,
			workflow_id: null
		});
		await router.replace({
			name: VIEWS.TEMPLATE_IMPORT,
			params: { id: templateId.value }
		});
	};
	const createWorkflow = async (opts) => {
		const { router } = opts;
		const telemetry = useTelemetry();
		if (!template.value) return;
		try {
			isSaving.value = true;
			const createdWorkflow = await createWorkflowFromTemplate({
				template: template.value,
				credentialOverrides: credentialOverrides.value,
				rootStore,
				workflowsStore,
				nodeTypeProvider: nodeTypesStore
			});
			telemetry.track("User closed cred setup", {
				completed: true,
				creds_filled: numFilledCredentials.value,
				creds_needed: credentialUsages.value.length,
				workflow_id: createdWorkflow.id
			});
			telemetry.track("User inserted workflow template", {
				source: "workflow",
				template_id: tryToParseNumber(templateId.value),
				wf_template_repo_session_id: templatesStore.currentSessionId
			});
			telemetry.track("User saved new workflow from template", {
				template_id: tryToParseNumber(templateId.value),
				workflow_id: createdWorkflow.id,
				wf_template_repo_session_id: templatesStore.currentSessionId
			});
			await router.replace({
				name: VIEWS.WORKFLOW,
				params: { name: createdWorkflow.id }
			});
		} finally {
			isSaving.value = false;
		}
	};
	return {
		credentialsByKey,
		isLoading,
		isSaving,
		appCredentials,
		nodesRequiringCredentialsSorted,
		template,
		credentialUsages,
		selectedCredentialIdByKey,
		credentialOverrides,
		numFilledCredentials,
		createWorkflow,
		skipSetup,
		init,
		loadTemplateIfNeeded,
		setInitialCredentialSelection,
		setTemplateId,
		setSelectedCredentialId,
		unsetSelectedCredential
	};
});
var _hoisted_1 = { key: 1 };
var SetupWorkflowFromTemplateView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowFromTemplateView",
	setup(__props) {
		const setupTemplateStore = useSetupTemplateStore();
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const templateId = computed(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
		const title = computed(() => setupTemplateStore.template?.name ?? "unknown");
		const isReady = computed(() => !setupTemplateStore.isLoading);
		const skipSetupUrl = computed(() => {
			return router.resolve({
				name: VIEWS.TEMPLATE_IMPORT,
				params: { id: templateId.value }
			}).fullPath;
		});
		watch(templateId, async (newTemplateId) => {
			setupTemplateStore.setTemplateId(newTemplateId);
			await setupTemplateStore.loadTemplateIfNeeded();
		});
		const onSkipSetup = async (event) => {
			event.preventDefault();
			await setupTemplateStore.skipSetup({ router });
		};
		const skipIfTemplateHasNoCreds = async () => {
			if (!!!setupTemplateStore.template) return false;
			if (setupTemplateStore.credentialUsages.length === 0) {
				await setupTemplateStore.skipSetup({ router });
				return true;
			}
			return false;
		};
		setupTemplateStore.setTemplateId(templateId.value);
		onMounted(async () => {
			await setupTemplateStore.init();
			await skipIfTemplateHasNoCreds();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TemplatesView_default, { "go-back-enabled": true }, {
				header: withCtx(() => [isReady.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templateSetup.title", { interpolate: { name: title.value } })), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 1,
					variant: "h1"
				}))]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.grid) }, [
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.notice),
						"data-test-id": "info-callout"
					}, [isReady.value ? (openBlock(), createBlock(AppsRequiringCredsNotice_default, {
						key: 0,
						"app-credentials": unref(setupTemplateStore).appCredentials
					}, null, 8, ["app-credentials"])) : (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 1,
						variant: "p"
					}))], 2),
					createBaseVNode("div", null, [isReady.value ? (openBlock(), createElementBlock("ol", {
						key: 0,
						class: normalizeClass(_ctx.$style.appCredentialsContainer)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(setupTemplateStore).credentialUsages, (credentials, index) => {
						return openBlock(), createBlock(SetupTemplateFormStep_default, {
							key: credentials.key,
							class: normalizeClass(_ctx.$style.appCredential),
							order: index + 1,
							credentials,
							"selected-credential-id": unref(setupTemplateStore).selectedCredentialIdByKey[credentials.key],
							onCredentialSelected: _cache[0] || (_cache[0] = ($event) => unref(setupTemplateStore).setSelectedCredentialId($event.credentialUsageKey, $event.credentialId)),
							onCredentialDeselected: _cache[1] || (_cache[1] = ($event) => unref(setupTemplateStore).unsetSelectedCredential($event.credentialUsageKey))
						}, null, 8, [
							"class",
							"order",
							"credentials",
							"selected-credential-id"
						]);
					}), 128))], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.appCredentialsContainer)
					}, [createVNode(unref(N8nLoading_default), {
						class: normalizeClass(_ctx.$style.appCredential),
						variant: "p",
						rows: 3
					}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
						class: normalizeClass(_ctx.$style.appCredential),
						variant: "p",
						rows: 3
					}, null, 8, ["class"])], 2))]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nLink_default), {
						href: skipSetupUrl.value,
						"new-window": false,
						onClick: _cache[2] || (_cache[2] = ($event) => onSkipSetup($event))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templateSetup.skip")), 1)]),
						_: 1
					}, 8, ["href"]), isReady.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("templateSetup.continue.button.fillRemaining"),
						disabled: unref(setupTemplateStore).numFilledCredentials > 0
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							size: "large",
							label: unref(i18n).baseText("templateSetup.continue.button"),
							disabled: unref(setupTemplateStore).isSaving || unref(setupTemplateStore).numFilledCredentials === 0,
							"data-test-id": "continue-button",
							onClick: _cache[3] || (_cache[3] = ($event) => unref(setupTemplateStore).createWorkflow({ router: unref(router) }))
						}, null, 8, ["label", "disabled"])]),
						_: 1
					}, 8, ["content", "disabled"])) : (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), { variant: "button" })]))], 2)
				], 2)]),
				_: 1
			});
		};
	}
});
var SetupWorkflowFromTemplateView_vue_vue_type_style_index_0_lang_module_default = {
	grid: "_grid_e7pvm_123",
	notice: "_notice_e7pvm_131",
	appCredentialsContainer: "_appCredentialsContainer_e7pvm_135",
	appCredential: "_appCredential_e7pvm_135",
	actions: "_actions_e7pvm_146"
};
var SetupWorkflowFromTemplateView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SetupWorkflowFromTemplateView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupWorkflowFromTemplateView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SetupWorkflowFromTemplateView_default as default };

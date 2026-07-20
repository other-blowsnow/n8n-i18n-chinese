import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, j as createVNode, k as createStaticVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as I18nT, s as useI18n } from "./src-B1khmGvj.js";
import { Ot as createEventBus, Q as N8nMarkdown_default, Wi as N8nIconButton_default, Ya as N8nIcon_default, lt as N8nLink_default, qa as N8nText_default, zi as N8nTooltip_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-DkJJVsDy.js";
import { t as useRootStore } from "./useRootStore-DORNi26-.js";
import { t as Modal_default } from "./Modal-B9k6VWLE.js";
import { t as useClipboard } from "./useClipboard-BZ45FCJw.js";
import { n as SURFACE_MCP_ONBOARDING_MODAL_KEY } from "./constants-_ANzb2Tp.js";
import { a as MCP_SETTINGS_VIEW, i as MCP_ENDPOINT } from "./mcp.constants-BT39eBzp.js";
import { t as useMCPStore } from "./mcp.store-Bs5wlO4e.js";
import { t as useSurfaceMcpToNewCloudUsersStore } from "./surfaceMcpToNewCloudUsers.store-D_XIaM8K.js";
import { t as SurfaceMcpBridgeGraphic_default } from "./SurfaceMcpBridgeGraphic-BVDJAHtC.js";
import { t as McpAccessToggle_default } from "./McpAccessToggle-BOp9QB93.js";
//#region src/experiments/surfaceMcpToNewCloudUsers/components/onboarding/MCPOnboardingAgentLogo.vue?vue&type=script&setup=true&lang.ts
var MCPOnboardingAgentLogo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPOnboardingAgentLogo",
	props: { agent: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(_ctx.$style.logo),
				"aria-hidden": "true"
			}, [__props.agent === "claude" || __props.agent === "claude_code" ? (openBlock(), createElementBlock("svg", {
				key: 0,
				class: normalizeClass(_ctx.$style.icon),
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
				d: "M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z",
				fill: "#D97757"
			}, null, -1)])], 2)) : __props.agent === "codex" ? (openBlock(), createElementBlock("svg", {
				key: 1,
				class: normalizeClass(_ctx.$style.icon),
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, [..._cache[1] || (_cache[1] = [createStaticVNode("<path d=\"M19.503 0H4.496A4.496 4.496 0 000 4.496v15.007A4.496 4.496 0 004.496 24h15.007A4.496 4.496 0 0024 19.503V4.496A4.496 4.496 0 0019.503 0z\" fill=\"#fff\"></path><path d=\"M9.064 3.344a4.578 4.578 0 012.285-.312c1 .115 1.891.54 2.673 1.275.01.01.024.017.037.021a.09.09 0 00.043 0 4.55 4.55 0 013.046.275l.047.022.116.057a4.581 4.581 0 012.188 2.399c.209.51.313 1.041.315 1.595a4.24 4.24 0 01-.134 1.223.123.123 0 00.03.115c.594.607.988 1.33 1.183 2.17.289 1.425-.007 2.71-.887 3.854l-.136.166a4.548 4.548 0 01-2.201 1.388.123.123 0 00-.081.076c-.191.551-.383 1.023-.74 1.494-.9 1.187-2.222 1.846-3.711 1.838-1.187-.006-2.239-.44-3.157-1.302a.107.107 0 00-.105-.024c-.388.125-.78.143-1.204.138a4.441 4.441 0 01-1.945-.466 4.544 4.544 0 01-1.61-1.335c-.152-.202-.303-.392-.414-.617a5.81 5.81 0 01-.37-.961 4.582 4.582 0 01-.014-2.298.124.124 0 00.006-.056.085.085 0 00-.027-.048 4.467 4.467 0 01-1.034-1.651 3.896 3.896 0 01-.251-1.192 5.189 5.189 0 01.141-1.6c.337-1.112.982-1.985 1.933-2.618.212-.141.413-.251.601-.33.215-.089.43-.164.646-.227a.098.098 0 00.065-.066 4.51 4.51 0 01.829-1.615 4.535 4.535 0 011.837-1.388zm3.482 10.565a.637.637 0 000 1.272h3.636a.637.637 0 100-1.272h-3.636zM8.462 9.23a.637.637 0 00-1.106.631l1.272 2.224-1.266 2.136a.636.636 0 101.095.649l1.454-2.455a.636.636 0 00.005-.64L8.462 9.23z\" fill=\"url(#mcp-onboarding-codex-gradient)\"></path><defs><linearGradient id=\"mcp-onboarding-codex-gradient\" gradientUnits=\"userSpaceOnUse\" x1=\"12\" x2=\"12\" y1=\"3\" y2=\"21\"><stop stop-color=\"#B1A7FF\"></stop><stop offset=\".5\" stop-color=\"#7A9DFF\"></stop><stop offset=\"1\" stop-color=\"#3941FF\"></stop></linearGradient></defs>", 3)])], 2)) : __props.agent === "cursor" ? (openBlock(), createElementBlock("svg", {
				key: 2,
				class: normalizeClass(_ctx.$style.icon),
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"fill-rule": "evenodd",
				xmlns: "http://www.w3.org/2000/svg"
			}, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" }, null, -1)])], 2)) : (openBlock(), createElementBlock("svg", {
				key: 3,
				class: normalizeClass(_ctx.$style.icon),
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"fill-rule": "evenodd",
				xmlns: "http://www.w3.org/2000/svg"
			}, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" }, null, -1)])], 2))], 2);
		};
	}
});
var MCPOnboardingAgentLogo_vue_vue_type_style_index_0_lang_module_default = {
	logo: "_logo_13dmz_125",
	icon: "_icon_13dmz_137"
};
var MCPOnboardingAgentLogo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPOnboardingAgentLogo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPOnboardingAgentLogo_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/onboarding/MCPOnboardingAgentPicker.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"aria-pressed",
	"data-test-id",
	"onClick"
];
var MCPOnboardingAgentPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPOnboardingAgentPicker",
	props: {
		modelValue: {},
		options: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		function handleSelect(value) {
			emit("update:modelValue", value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.picker),
				"data-test-id": "mcp-onboarding-client-switcher"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
				return openBlock(), createElementBlock("button", {
					key: option.value,
					type: "button",
					class: normalizeClass([_ctx.$style.tile, { [_ctx.$style.tileActive]: __props.modelValue === option.value }]),
					"aria-pressed": __props.modelValue === option.value,
					"data-test-id": `mcp-onboarding-agent-option-${option.slug}`,
					onClick: ($event) => handleSelect(option.value)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.tileIconSlot) }, [createVNode(MCPOnboardingAgentLogo_default, {
					agent: option.value,
					"data-test-id": `mcp-onboarding-agent-logo-${option.slug}`
				}, null, 8, ["agent", "data-test-id"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.tileLabel) }, toDisplayString(option.label), 3)], 10, _hoisted_1);
			}), 128))], 2);
		};
	}
});
var MCPOnboardingAgentPicker_vue_vue_type_style_index_0_lang_module_default = {
	picker: "_picker_qs1ca_125",
	tile: "_tile_qs1ca_132",
	tileActive: "_tileActive_qs1ca_154",
	tileLabel: "_tileLabel_qs1ca_176",
	tileIconSlot: "_tileIconSlot_qs1ca_180"
};
var MCPOnboardingAgentPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPOnboardingAgentPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPOnboardingAgentPicker_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/onboarding/MCPOnboardingCopyBlock.vue?vue&type=script&setup=true&lang.ts
var MCPOnboardingCopyBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPOnboardingCopyBlock",
	props: {
		content: {},
		copyTooltip: { default: void 0 },
		copyButtonTestId: { default: void 0 }
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { copy } = useClipboard();
		const justCopied = ref(false);
		let copyResetTimeout = null;
		const markdown = computed(() => `\`\`\`\n${props.content}\n\`\`\``);
		const copyTooltip = computed(() => justCopied.value ? i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.copy.copied") : props.copyTooltip ?? i18n.baseText("generic.copy"));
		async function handleCopy() {
			await copy(props.content);
			emit("copy", props.content);
			justCopied.value = true;
			if (copyResetTimeout) clearTimeout(copyResetTimeout);
			copyResetTimeout = setTimeout(() => {
				justCopied.value = false;
			}, 1800);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.codeBlock) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.codeToolbar) }, [createVNode(unref(N8nTooltip_default), {
				content: copyTooltip.value,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: "copy",
					variant: "ghost",
					size: "small",
					"aria-label": copyTooltip.value,
					"data-test-id": __props.copyButtonTestId,
					onClick: handleCopy
				}, null, 8, ["aria-label", "data-test-id"])]),
				_: 1
			}, 8, ["content"])], 2), createVNode(unref(N8nMarkdown_default), { content: markdown.value }, null, 8, ["content"])], 2);
		};
	}
});
var MCPOnboardingCopyBlock_vue_vue_type_style_index_0_lang_module_default = {
	codeBlock: "_codeBlock_1ne3b_125",
	codeToolbar: "_codeToolbar_1ne3b_149"
};
var MCPOnboardingCopyBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPOnboardingCopyBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPOnboardingCopyBlock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/onboarding/MCPOnboardingClientSetup.vue?vue&type=script&setup=true&lang.ts
var MCPOnboardingClientSetup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPOnboardingClientSetup",
	props: {
		client: {},
		serverUrl: {}
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const promptKeys = {
			claude: "experiments.surfaceMcpToNewCloudUsers.onboarding.prompt.claude",
			claude_code: "experiments.surfaceMcpToNewCloudUsers.onboarding.prompt.claudeCode",
			cursor: "experiments.surfaceMcpToNewCloudUsers.onboarding.prompt.cursor",
			codex: "experiments.surfaceMcpToNewCloudUsers.onboarding.prompt.codex"
		};
		const promptKey = computed(() => promptKeys[props.client]);
		const promptBody = computed(() => i18n.baseText(promptKey.value, { interpolate: { serverUrl: props.serverUrl } }));
		function handlePromptCopy() {
			emit("copy", "agent-prompt");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-onboarding-client-setup"
			}, [createVNode(MCPOnboardingCopyBlock_default, {
				content: promptBody.value,
				"copy-tooltip": unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.copy.tooltip"),
				"copy-button-test-id": "mcp-onboarding-copy-prompt-button",
				onCopy: handlePromptCopy
			}, null, 8, ["content", "copy-tooltip"])], 2);
		};
	}
});
var MCPOnboardingClientSetup_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1yal4_125" };
var MCPOnboardingClientSetup_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPOnboardingClientSetup_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPOnboardingClientSetup_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/onboarding/MCPOnboardingModal.vue?vue&type=script&setup=true&lang.ts
var MCP_ONBOARDING_DOCS_URL = "https://docs.n8n.io/advanced-ai/mcp/accessing-n8n-mcp-server/";
var MCPOnboardingModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPOnboardingModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const mcpStore = useMCPStore();
		const experimentStore = useSurfaceMcpToNewCloudUsersStore();
		const modalBus = createEventBus();
		const activeClient = ref("claude");
		const isToggling = ref(false);
		const enabledDuringThisOpen = ref(false);
		const setupShownClients = /* @__PURE__ */ new Set();
		const surface = computed(() => props.data?.surface ?? "tile");
		const clientOptions = computed(() => [
			{
				value: "claude",
				slug: "claude",
				label: i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.client.claude")
			},
			{
				value: "claude_code",
				slug: "claude-code",
				label: i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.client.claudeCode")
			},
			{
				value: "codex",
				slug: "codex",
				label: i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.client.codex")
			},
			{
				value: "cursor",
				slug: "cursor",
				label: i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.client.cursor")
			},
			{
				value: "chatgpt",
				slug: "chatgpt",
				label: i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.client.chatgpt")
			}
		]);
		const serverUrl = computed(() => `${rootStore.urlBaseEditor}${MCP_ENDPOINT}`);
		const isChatGptClient = computed(() => activeClient.value === "chatgpt");
		const showServerUrlStep = computed(() => activeClient.value === "claude");
		const showRestartStep = computed(() => activeClient.value === "claude_code" || activeClient.value === "cursor" || activeClient.value === "codex");
		const activePromptClient = computed(() => activeClient.value === "chatgpt" ? "claude" : activeClient.value);
		const activeClientLabel = computed(() => clientOptions.value.find((option) => option.value === activeClient.value)?.label ?? activeClient.value);
		const promptSectionTitle = computed(() => i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.prompt.title", { interpolate: { assistant: activeClientLabel.value } }));
		const restartSectionTitle = computed(() => i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.restart.title", { interpolate: { assistant: activeClientLabel.value } }));
		const chatGptCustomAppFields = computed(() => [{
			label: i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.chatgptCustomApp.appName.label"),
			content: i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.chatgptCustomApp.appName.value"),
			parameter: "chatgpt-app-name",
			testId: "mcp-onboarding-chatgpt-app-name",
			copyButtonTestId: "mcp-onboarding-copy-chatgpt-app-name-button"
		}, {
			label: i18n.baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.chatgptCustomApp.serverUrl.label"),
			content: serverUrl.value,
			parameter: "server-url",
			testId: "mcp-onboarding-chatgpt-server-url",
			copyButtonTestId: "mcp-onboarding-copy-chatgpt-server-url-button"
		}]);
		function getSetupType(client) {
			return client === "chatgpt" ? "chatgpt_custom_app" : "prompt";
		}
		function trackCurrentSetupShown() {
			if (!mcpStore.mcpAccessEnabled || setupShownClients.has(activeClient.value)) return;
			setupShownClients.add(activeClient.value);
			experimentStore.trackSetupShown(surface.value, activeClient.value, getSetupType(activeClient.value));
		}
		async function handleToggleMcpAccess() {
			const nextValue = !mcpStore.mcpAccessEnabled;
			try {
				isToggling.value = true;
				if (nextValue) {
					experimentStore.trackEnableClicked(surface.value);
					if (!await mcpStore.setMcpAccessEnabled(true)) return;
					enabledDuringThisOpen.value = true;
					experimentStore.trackEnabled(surface.value);
					trackCurrentSetupShown();
					props.data?.onMcpAccessEnabled?.();
					return;
				}
				await mcpStore.setMcpAccessEnabled(false);
			} catch (error) {
				if (nextValue) experimentStore.trackEnableFailed(surface.value, error instanceof Error ? error.constructor.name : "unknown");
				toast.showError(error, i18n.baseText("settings.mcp.toggle.error"));
			} finally {
				isToggling.value = false;
			}
		}
		function handleModalClosed() {
			if (!enabledDuringThisOpen.value && !mcpStore.mcpAccessEnabled) {
				if (surface.value === "first_open_modal") experimentStore.dismissFirstOpenModal();
				experimentStore.trackDismissed(surface.value, {
					activeClient: activeClient.value,
					enabledDuringThisOpen: enabledDuringThisOpen.value,
					mcpAccessEnabled: mcpStore.mcpAccessEnabled
				});
			}
		}
		function handleClientChange(value) {
			if (activeClient.value === value) return;
			activeClient.value = value;
			experimentStore.trackClientSelected(surface.value, activeClient.value);
			trackCurrentSetupShown();
		}
		function handleCopyParameter(parameter) {
			experimentStore.trackCopiedParameter(surface.value, activeClient.value, parameter);
		}
		onMounted(() => {
			modalBus.on("closed", handleModalClosed);
			trackCurrentSetupShown();
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", handleModalClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(SURFACE_MCP_ONBOARDING_MODAL_KEY),
				title: unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.title"),
				width: "640px",
				"event-bus": unref(modalBus),
				"close-on-click-modal": true,
				"custom-class": _ctx.$style.modal
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerGraphic) }, [createVNode(SurfaceMcpBridgeGraphic_default, { size: "hero" })], 2),
					createBaseVNode("h1", { class: normalizeClass(_ctx.$style.headerTitle) }, toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.title")), 3),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						color: "text-base",
						align: "center",
						class: normalizeClass(_ctx.$style.headerDescription)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.description")), 1)]),
						_: 1
					}, 8, ["class"])
				], 2)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "mcp-onboarding-modal-content"
				}, [createBaseVNode("section", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("header", { class: normalizeClass([_ctx.$style.sectionHeader, _ctx.$style.accessHeader]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.accessTitleRow) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.sectionStep, { [_ctx.$style.sectionStepDone]: unref(mcpStore).mcpAccessEnabled }]) }, [unref(mcpStore).mcpAccessEnabled ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "check",
					size: "xsmall",
					"stroke-width": 2.5
				})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode("1")], 64))], 2), createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.access.title")), 3)], 2), createVNode(McpAccessToggle_default, {
					"model-value": unref(mcpStore).mcpAccessEnabled,
					disabled: unref(mcpStore).mcpManagedByEnv,
					loading: isToggling.value,
					"managed-by-env": unref(mcpStore).mcpManagedByEnv,
					onDisableMcpAccess: handleToggleMcpAccess
				}, null, 8, [
					"model-value",
					"disabled",
					"loading",
					"managed-by-env"
				])], 2)], 2), unref(mcpStore).mcpAccessEnabled ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("section", { class: normalizeClass([_ctx.$style.section, _ctx.$style.revealSection]) }, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionStep) }, "2", 2), createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.client.title")), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBody) }, [createVNode(MCPOnboardingAgentPicker_default, {
					"model-value": activeClient.value,
					options: clientOptions.value,
					"onUpdate:modelValue": handleClientChange
				}, null, 8, ["model-value", "options"])], 2)], 2), isChatGptClient.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("section", {
					class: normalizeClass([_ctx.$style.section, _ctx.$style.revealSection]),
					"data-test-id": "mcp-onboarding-chatgpt-developer-mode-step"
				}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionStep) }, "3", 2), createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.chatgptDeveloperMode.title")), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBody) }, [createVNode(unref(N8nText_default), {
					tag: "p",
					size: "small",
					color: "text-base",
					class: normalizeClass(_ctx.$style.stepDescription)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.chatgptDeveloperMode.description")), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2), createBaseVNode("section", {
					class: normalizeClass([_ctx.$style.section, _ctx.$style.revealSection]),
					"data-test-id": "mcp-onboarding-chatgpt-custom-app-step"
				}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionStep) }, "4", 2), createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.chatgptCustomApp.title")), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBody) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.copyFields) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(chatGptCustomAppFields.value, (field) => {
					return openBlock(), createElementBlock("div", {
						key: field.testId,
						class: normalizeClass(_ctx.$style.copyField)
					}, [createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.copyFieldLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(field.label), 1)]),
						_: 2
					}, 1032, ["class"]), createVNode(MCPOnboardingCopyBlock_default, {
						content: field.content,
						"copy-button-test-id": field.copyButtonTestId,
						"data-test-id": field.testId,
						onCopy: ($event) => handleCopyParameter(field.parameter)
					}, null, 8, [
						"content",
						"copy-button-test-id",
						"data-test-id",
						"onCopy"
					])], 2);
				}), 128))], 2)], 2)], 2)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createBaseVNode("section", { class: normalizeClass([_ctx.$style.section, _ctx.$style.revealSection]) }, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionStep) }, "3", 2), createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(promptSectionTitle.value), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBody) }, [createVNode(MCPOnboardingClientSetup_default, {
						client: activePromptClient.value,
						"server-url": serverUrl.value,
						onCopy: handleCopyParameter
					}, null, 8, ["client", "server-url"])], 2)], 2),
					showServerUrlStep.value ? (openBlock(), createElementBlock("section", {
						key: 0,
						class: normalizeClass([_ctx.$style.section, _ctx.$style.revealSection])
					}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionStep) }, "4", 2), createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.section.serverUrl.title")), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBody) }, [createVNode(MCPOnboardingCopyBlock_default, {
						content: serverUrl.value,
						"copy-button-test-id": "mcp-onboarding-copy-server-url-button",
						"data-test-id": "mcp-onboarding-claude-server-url",
						onCopy: _cache[0] || (_cache[0] = ($event) => handleCopyParameter("server-url"))
					}, null, 8, ["content"])], 2)], 2)) : createCommentVNode("", true),
					showRestartStep.value ? (openBlock(), createElementBlock("section", {
						key: 1,
						class: normalizeClass([_ctx.$style.section, _ctx.$style.revealSection]),
						"data-test-id": "mcp-onboarding-restart-step"
					}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionStep) }, "4", 2), createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(restartSectionTitle.value), 3)], 2)], 2)) : createCommentVNode("", true)
				], 64))], 64)) : createCommentVNode("", true)], 2)]),
				footer: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "p",
					size: "xsmall",
					color: "text-light",
					align: "center",
					class: normalizeClass(_ctx.$style.footer),
					"data-test-id": "mcp-onboarding-footer"
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "experiments.surfaceMcpToNewCloudUsers.onboarding.footer",
						tag: "span",
						scope: "global"
					}, {
						settingsLink: withCtx(() => [createVNode(unref(N8nLink_default), {
							to: { name: unref(MCP_SETTINGS_VIEW) },
							size: "xsmall",
							"data-test-id": "mcp-onboarding-settings-link"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.settingsLink")), 1)]),
							_: 1
						}, 8, ["to"])]),
						docsLink: withCtx(() => [createVNode(unref(N8nLink_default), {
							href: MCP_ONBOARDING_DOCS_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							size: "xsmall",
							"data-test-id": "mcp-onboarding-docs-link"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.footer.docsLink")), 1)]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus",
				"custom-class"
			]);
		};
	}
});
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/onboarding/MCPOnboardingModal.vue?vue&type=style&index=0&lang.module.scss
var modal = "_modal_136h6_341";
var header = "_header_136h6_356";
var headerGraphic = "_headerGraphic_136h6_367";
var fadeInUp = "_fadeInUp_136h6_1";
var headerTitle = "_headerTitle_136h6_377";
var headerDescription = "_headerDescription_136h6_385";
var content = "_content_136h6_391";
var section = "_section_136h6_397";
var revealSection = "_revealSection_136h6_403";
var sectionHeader = "_sectionHeader_136h6_422";
var sectionStep = "_sectionStep_136h6_428";
var sectionStepDone = "_sectionStepDone_136h6_445";
var sectionTitle = "_sectionTitle_136h6_451";
var sectionBody = "_sectionBody_136h6_459";
var stepDescription = "_stepDescription_136h6_467";
var stepHelper = "_stepHelper_136h6_468";
var copyFields = "_copyFields_136h6_473";
var copyField = "_copyField_136h6_473";
var copyFieldLabel = "_copyFieldLabel_136h6_487";
var accessHeader = "_accessHeader_136h6_492";
var accessTitleRow = "_accessTitleRow_136h6_504";
var accessRow = "_accessRow_136h6_510";
var footer = "_footer_136h6_524";
var shimmer = "_shimmer_136h6_1";
var spin = "_spin_136h6_1";
var opacityPulse = "_opacityPulse_136h6_1";
var popoverIn = "_popoverIn_136h6_1";
var fadeIn = "_fadeIn_136h6_1";
var collapsibleSlideDown = "_collapsibleSlideDown_136h6_1";
var collapsibleSlideUp = "_collapsibleSlideUp_136h6_1";
var pulseGlow = "_pulseGlow_136h6_1";
var pulseGlowDelayed = "_pulseGlowDelayed_136h6_1";
var fade = "_fade_136h6_1";
var fadeInDown = "_fadeInDown_136h6_1";
var fadeInLeft = "_fadeInLeft_136h6_1";
var fadeInRight = "_fadeInRight_136h6_1";
var fadeOut = "_fadeOut_136h6_1";
var fadeOutDown = "_fadeOutDown_136h6_1";
var fadeOutUp = "_fadeOutUp_136h6_1";
var fadeOutLeft = "_fadeOutLeft_136h6_1";
var fadeOutRight = "_fadeOutRight_136h6_1";
var ping = "_ping_136h6_1";
var blinkBackground = "_blinkBackground_136h6_1";
var typingBlink = "_typingBlink_136h6_1";
var MCPOnboardingModal_vue_vue_type_style_index_0_lang_module_default = {
	modal,
	header,
	headerGraphic,
	fadeInUp,
	headerTitle,
	headerDescription,
	content,
	section,
	revealSection,
	sectionHeader,
	sectionStep,
	sectionStepDone,
	sectionTitle,
	sectionBody,
	stepDescription,
	stepHelper,
	copyFields,
	copyField,
	copyFieldLabel,
	accessHeader,
	accessTitleRow,
	accessRow,
	footer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_136h6_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var MCPOnboardingModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPOnboardingModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPOnboardingModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MCPOnboardingModal_default as default };

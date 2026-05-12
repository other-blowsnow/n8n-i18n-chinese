import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _n as normalizeClass, bt as withDirectives, gt as watch, h as withModifiers, j as createVNode, m as withKeys, ot as resolveDirective, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-p4E5FBDC.js";
import { _a as N8nButton_default, ga as N8nText_default, ma as N8nHeading_default, nt as N8nLink_default, ut as useRouter, va as N8nIcon_default } from "./src-DJmr1lxY.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as ElCheckbox } from "./checkbox-BpvrJ9st.js";
import { qt as useTelemetry, r as useUIStore } from "./users.store-DId3pj1b.js";
import { t as Modal_default } from "./Modal-DZixV7t7.js";
import { r as INSTANCE_AI_VIEW } from "./constants-CIsx9X_8.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BArbX0xH.js";
import { t as canManageInstanceAi } from "./instanceAiPermissions-BZgiyxf3.js";
//#region src/features/ai/instanceAi/components/InstanceAiOptinModal.vue?vue&type=script&setup=true&lang.ts
var InstanceAiOptinModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiOptinModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		const router = useRouter();
		const i18n = useI18n();
		const uiStore = useUIStore();
		const telemetry = useTelemetry();
		const instanceAiSettingsStore = useInstanceAiSettingsStore();
		const choice = ref(null);
		const computerUseEnabled = ref(!(instanceAiSettingsStore.settings?.localGatewayDisabled ?? true));
		const isEnabled = computed(() => choice.value === "enable");
		const hasChosen = computed(() => choice.value !== null);
		const isSaving = ref(false);
		function selectChoice(value) {
			if (isSaving.value) return;
			choice.value = value;
		}
		function dismiss() {
			telemetry.track("AI Assistant opt-in modal dismissed", { choice: choice?.value });
			uiStore.closeModal(props.modalName);
		}
		async function onConfirm() {
			if (isSaving.value) return;
			isSaving.value = true;
			try {
				instanceAiSettingsStore.setField("enabled", choice.value === "enable");
				if (isEnabled.value) instanceAiSettingsStore.setField("localGatewayDisabled", !computerUseEnabled.value);
				await instanceAiSettingsStore.save();
				telemetry.track("AI Assistant opt-in modal choice confirmed", {
					choice: choice?.value,
					enabled: isEnabled?.value
				});
				instanceAiSettingsStore.persistOptinModalDismissed();
				dismiss();
				if (isEnabled.value) router.push({ name: INSTANCE_AI_VIEW });
			} finally {
				isSaving.value = false;
			}
		}
		function handleComputerUseToggle() {
			computerUseEnabled.value = !computerUseEnabled.value;
		}
		watch(() => canManageInstanceAi(), (allowed) => {
			if (!allowed) uiStore.closeModal(props.modalName);
		});
		onMounted(() => {
			if (!canManageInstanceAi()) {
				uiStore.closeModal(props.modalName);
				return;
			}
			telemetry.track("AI Assistant opt-in modal shown");
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				"close-on-click-modal": false,
				"close-on-press-escape": false,
				"custom-class": "instance-ai-welcome-modal",
				width: "540"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.heroIcon) }, [createVNode(unref(N8nIcon_default), {
						icon: "sparkles",
						size: 34,
						color: "text-base"
					})], 2),
					createVNode(unref(N8nHeading_default), {
						tag: "h1",
						size: "xlarge",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.title")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.badgeWrap) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.badge) }, toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.badge")), 3)], 2),
					withDirectives(createVNode(unref(N8nText_default), { class: normalizeClass(_ctx.$style.description) }, null, 8, ["class"]), [[_directive_n8n_html, unref(i18n).baseText("instanceAi.welcomeModal.description")]]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.warningBox) }, [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: 16,
						class: normalizeClass(_ctx.$style.warningIcon)
					}, null, 8, ["class"]), withDirectives(createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.warningText),
						size: "small"
					}, null, 8, ["class"]), [[_directive_n8n_html, unref(i18n).baseText("instanceAi.welcomeModal.warning")]])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleGroup) }, [createBaseVNode("div", {
						class: normalizeClass([_ctx.$style.toggleCard, choice.value === "enable" && _ctx.$style.toggleCardSelected]),
						role: "button",
						tabindex: "0",
						"data-test-id": "instance-ai-welcome-modal-toggle-enable",
						onClick: _cache[0] || (_cache[0] = ($event) => selectChoice("enable")),
						onKeydown: [_cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectChoice("enable"), ["prevent"]), ["enter"])), _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectChoice("enable"), ["prevent"]), ["space"]))]
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleMain) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.radioIndicator) }, [choice.value === "enable" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.radioIndicatorInner)
					}, null, 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleLabels) }, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.toggle.cardTitle")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.toggle.enableCardDescription")), 1)]),
						_: 1
					})], 2)], 2)], 34), createBaseVNode("div", {
						class: normalizeClass([_ctx.$style.toggleCard, choice.value === "disable" && _ctx.$style.toggleCardSelected]),
						role: "button",
						tabindex: "0",
						"data-test-id": "instance-ai-welcome-modal-toggle-disable",
						onClick: _cache[3] || (_cache[3] = ($event) => selectChoice("disable")),
						onKeydown: [_cache[4] || (_cache[4] = withKeys(withModifiers(($event) => selectChoice("disable"), ["prevent"]), ["enter"])), _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => selectChoice("disable"), ["prevent"]), ["space"]))]
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleMain) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.radioIndicator) }, [choice.value === "disable" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.radioIndicatorInner)
					}, null, 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleLabels) }, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.toggle.dontEnable")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.toggle.disableCardDescription")), 1)]),
						_: 1
					})], 2)], 2)], 34)], 2),
					isEnabled.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.computerUseRow),
						onClick: handleComputerUseToggle
					}, [createVNode(unref(ElCheckbox), {
						class: normalizeClass(_ctx.$style.computerUseCheckbox),
						"model-value": computerUseEnabled.value,
						"data-test-id": "instance-ai-welcome-modal-computer-use-toggle"
					}, null, 8, ["class", "model-value"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.computerUseLabels) }, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.computerUse.label")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.computerUse.description")), 1)]),
						_: 1
					})], 2)], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.disclaimer)
					}, {
						default: withCtx(() => [
							createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.disclaimer")) + " ", 1),
							createVNode(unref(N8nLink_default), {
								href: "https://n8n.io/legal/ai-terms/",
								target: "_blank",
								theme: "text",
								size: "small",
								underline: true,
								class: normalizeClass(_ctx.$style.readMore)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.readMore")), 1)]),
								_: 1
							}, 8, ["class"]),
							_cache[7] || (_cache[7] = createTextVNode(". ", -1))
						]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "large",
						disabled: !hasChosen.value || isSaving.value,
						loading: isSaving.value,
						label: isEnabled.value ? unref(i18n).baseText("instanceAi.welcomeModal.enable") : unref(i18n).baseText("instanceAi.welcomeModal.continue"),
						class: normalizeClass(_ctx.$style.continueButton),
						"data-test-id": "instance-ai-welcome-modal-confirm",
						onClick: _cache[6] || (_cache[6] = ($event) => onConfirm())
					}, null, 8, [
						"disabled",
						"loading",
						"label",
						"class"
					])], 2)
				], 2)]),
				_: 1
			}, 8, ["name"]);
		};
	}
});
var InstanceAiOptinModal_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_1ivwj_125",
	description: "_description_1ivwj_133",
	heroIcon: "_heroIcon_1ivwj_140",
	badge: "_badge_1ivwj_145",
	warningBox: "_warningBox_1ivwj_154",
	warningIcon: "_warningIcon_1ivwj_171",
	warningText: "_warningText_1ivwj_181",
	badgeWrap: "_badgeWrap_1ivwj_190",
	title: "_title_1ivwj_195",
	toggleGroup: "_toggleGroup_1ivwj_202",
	toggleCard: "_toggleCard_1ivwj_207",
	toggleMain: "_toggleMain_1ivwj_231",
	radioIndicator: "_radioIndicator_1ivwj_237",
	toggleCardSelected: "_toggleCardSelected_1ivwj_248",
	radioIndicatorInner: "_radioIndicatorInner_1ivwj_252",
	toggleLabels: "_toggleLabels_1ivwj_259",
	computerUseRow: "_computerUseRow_1ivwj_266",
	computerUseCheckbox: "_computerUseCheckbox_1ivwj_283",
	computerUseLabels: "_computerUseLabels_1ivwj_289",
	footer: "_footer_1ivwj_295",
	disclaimer: "_disclaimer_1ivwj_303",
	readMore: "_readMore_1ivwj_308",
	continueButton: "_continueButton_1ivwj_312"
};
var InstanceAiOptinModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiOptinModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiOptinModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiOptinModal_default as default };

import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, ot as resolveDirective, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-BuOkMaP4.js";
import { Ga as N8nHeading_default, Ka as N8nCallout_default, Wi as N8nIconButton_default, Ya as N8nIcon_default, qa as N8nText_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { p as useTelemetry } from "./users.store-Bf6s0cNu.js";
import { t as Modal_default } from "./Modal-DtLMHPPr.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BXy6kYoX.js";
//#region src/features/ai/instanceAi/assets/os-icons/macos-icon.svg
var _hoisted_1$3 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "currentColor",
	"aria-hidden": "true",
	viewBox: "0 0 14 14"
};
function render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M12.023 9.762q-.281.901-.887 1.803-.93 1.413-1.854 1.413-.353 0-1.01-.23-.62-.231-1.088-.231-.44 0-1.024.238-.584.245-.952.245-1.096 0-2.17-1.868-1.06-1.882-1.06-3.627 0-1.644.814-2.697Q3.6 3.769 4.84 3.769q.52 0 1.277.217.75.216.995.216.324 0 1.031-.245.736-.245 1.248-.245.858 0 1.536.468.375.26.75.721-.57.484-.822.851-.47.678-.47 1.493 0 .894.498 1.608t1.14.909M9.31 1.302q0 .44-.209.982-.216.54-.67.995-.39.39-.78.52-.266.078-.75.122.022-1.075.563-1.854Q8 1.296 9.268 1q.007.022.018.08.01.057.018.079 0 .028.004.072.004.043.004.072z" }, null, -1)])]);
}
var macos_icon_default = { render: render$2 };
//#endregion
//#region src/features/ai/instanceAi/assets/os-icons/windows-icon.svg
var _hoisted_1$2 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "currentColor",
	"aria-hidden": "true",
	viewBox: "0 0 14 14"
};
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "m1.018 2.699 4.89-.666.002 4.716-4.887.028zm4.887 4.593.004 4.72-4.887-.672V7.26zm.593-5.346L12.98 1v5.689l-6.482.051zm6.484 5.39L12.98 13l-6.482-.915-.01-4.759Z" }, null, -1)])]);
}
var windows_icon_default = { render: render$1 };
//#endregion
//#region src/features/ai/instanceAi/assets/os-icons/linux-icon.svg
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "currentColor",
	"aria-hidden": "true",
	viewBox: "0 0 14 14"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M7.252 1q-.117 0-.24.01C4.9 1.177 5.46 3.414 5.427 4.16c-.038.546-.15.976-.525 1.51-.443.525-1.063 1.375-1.358 2.26-.139.416-.205.842-.143 1.244a.2.2 0 0 0-.056.068c-.13.134-.224.3-.33.42-.1.099-.243.133-.4.2-.156.067-.328.134-.431.34a.7.7 0 0 0-.066.3c0 .1.013.2.027.268.03.2.058.365.02.485-.124.34-.14.573-.053.743.087.167.268.234.47.3.405.1.955.068 1.387.3.463.233.933.335 1.308.235a.88.88 0 0 0 .604-.473c.293-.001.615-.134 1.13-.167.35-.029.787.134 1.289.1.012.067.031.1.057.167l.001.001a.94.94 0 0 0 .942.536c.386-.03.796-.268 1.129-.653.315-.383.841-.542 1.188-.752.174-.1.315-.234.325-.426.011-.2-.1-.406-.357-.689v-.048l-.002-.002c-.085-.1-.125-.267-.169-.463-.042-.2-.09-.393-.245-.523h-.002c-.03-.027-.061-.033-.094-.067a.2.2 0 0 0-.095-.032c.216-.64.132-1.275-.086-1.847-.267-.705-.733-1.319-1.088-1.741-.398-.503-.788-.979-.78-1.685.013-1.076.118-3.066-1.772-3.069m.264 1.702h.007c.106 0 .198.031.292.1a.8.8 0 0 1 .22.266c.052.13.078.23.082.362l.003-.03v.052l-.002-.01-.002-.012a.9.9 0 0 1-.075.353.5.5 0 0 1-.106.167l-.044-.02c-.053-.023-.1-.033-.143-.067a1 1 0 0 0-.11-.033c.025-.03.073-.067.092-.1a.6.6 0 0 0 .044-.2v-.01a.6.6 0 0 0-.03-.2c-.023-.067-.051-.1-.092-.167-.042-.033-.084-.066-.134-.066H7.51c-.046 0-.088.015-.13.066a.4.4 0 0 0-.103.167.6.6 0 0 0-.045.2v.01q0 .067.01.133c-.097-.033-.22-.067-.304-.1a1 1 0 0 1-.009-.1v-.01a.9.9 0 0 1 .075-.385.54.54 0 0 1 .215-.266c.086-.065.19-.1.297-.1m-1.48.03h.017a.35.35 0 0 1 .2.067.7.7 0 0 1 .172.233c.045.1.07.2.076.333v.002c.004.067.003.1 0 .133v.04q-.023.008-.042.012c-.076.028-.137.068-.197.1a.5.5 0 0 0 .002-.133V3.51c-.006-.066-.02-.1-.041-.166a.3.3 0 0 0-.083-.134.12.12 0 0 0-.092-.032h-.01c-.036.003-.065.02-.093.066a.3.3 0 0 0-.06.135.5.5 0 0 0-.012.166v.007c.006.067.019.1.04.167.023.067.05.1.083.134q.008.007.017.012c-.035.028-.058.035-.088.068a.15.15 0 0 1-.065.034 1.3 1.3 0 0 1-.138-.201.9.9 0 0 1-.077-.334.9.9 0 0 1 .04-.334.7.7 0 0 1 .141-.267c.064-.067.13-.1.21-.1m.685.853c.165 0 .366.032.607.2.147.1.262.134.527.233h.001c.128.068.203.133.24.2v-.066a.28.28 0 0 1 .007.235c-.061.156-.258.322-.532.422-.134.068-.25.167-.387.233-.138.068-.294.146-.506.134a.6.6 0 0 1-.224-.034 2 2 0 0 1-.161-.099c-.098-.067-.182-.166-.306-.232v-.003h-.003c-.2-.123-.308-.256-.343-.355q-.051-.202.097-.3c.112-.068.19-.136.241-.168a1 1 0 0 0 .088-.066h.001v-.001a.93.93 0 0 1 .42-.3 1 1 0 0 1 .233-.033m1.4 1.071c.179.709.598 1.738.867 2.237.143.267.428.829.551 1.511a1 1 0 0 1 .257.032c.323-.835-.273-1.733-.545-1.982-.11-.1-.116-.168-.061-.168.294.267.682.786.823 1.379.064.267.08.551.01.834.034.014.068.031.103.034.516.267.706.469.615.768V9.28q-.046-.002-.09 0h-.008c.075-.234-.091-.413-.533-.612-.457-.2-.823-.168-.885.232-.004.022-.006.033-.009.068-.034.011-.07.026-.104.032-.215.134-.331.334-.397.593-.065.267-.085.578-.102.935v.001c-.01.167-.086.42-.16.676-.75.536-1.79.769-2.674.167a1.3 1.3 0 0 0-.201-.267.7.7 0 0 0-.138-.167.8.8 0 0 0 .233-.033.3.3 0 0 0 .157-.167c.054-.134 0-.349-.173-.582-.172-.233-.465-.497-.894-.76-.315-.2-.492-.435-.574-.698a1.57 1.57 0 0 1-.008-.822c.123-.535.436-1.055.637-1.382.053-.032.018.068-.204.487-.198.376-.57 1.248-.061 1.927.019-.495.129-.982.323-1.438.282-.639.872-1.752.918-2.634.024.018.109.068.145.101.109.067.19.167.295.233.105.1.238.167.438.167l.055.003c.206 0 .365-.067.498-.134.145-.067.26-.167.37-.2h.003a.97.97 0 0 0 .522-.35m1.092 4.479c.019.3.172.622.441.688.294.067.717-.166.896-.382l.105-.005c.158-.004.289.005.424.134l.001.001c.104.1.153.266.196.438.042.2.077.39.204.533.243.264.322.453.318.57l.001-.003v.01l-.001-.007c-.008.131-.093.198-.249.298-.315.2-.873.356-1.228.785-.31.368-.686.57-1.018.595-.332.027-.619-.1-.787-.449l-.003-.001c-.105-.2-.06-.513.028-.845.088-.334.214-.673.232-.95.018-.356.038-.667.097-.906.06-.233.154-.399.32-.492zm-5.407.024h.005q.04 0 .079.007c.188.028.353.167.511.376l.455.832.001.002c.122.266.377.532.595.819.217.299.385.565.364.785v.003c-.028.372-.24.574-.562.647-.323.067-.76 0-1.197-.232-.484-.268-1.06-.235-1.429-.301q-.277-.05-.361-.2c-.056-.1-.057-.301.061-.616v-.001l.001-.002c.059-.167.015-.376-.013-.56-.028-.2-.042-.354.021-.47.08-.166.198-.199.345-.266s.32-.1.458-.234v-.002c.129-.134.223-.3.335-.419.095-.1.19-.168.331-.168m3.58-4.536c-.218.1-.473.267-.745.267-.27 0-.485-.133-.64-.233-.077-.067-.14-.134-.186-.167-.082-.067-.072-.167-.037-.167.054.008.064.067.1.1.047.033.107.1.18.167.145.1.34.233.583.233s.526-.133.699-.233c.097-.067.222-.167.324-.233.078-.069.074-.134.14-.134.064.008.016.067-.074.166a4 4 0 0 1-.345.234zm-.542-.792V3.82c-.003-.01.007-.021.015-.025.037-.022.09-.014.13.002.031 0 .08.033.075.067-.003.025-.043.033-.068.033-.027 0-.046-.021-.07-.034-.026-.009-.073-.004-.082-.032m-.275 0c-.01.029-.057.024-.083.033-.024.012-.043.034-.07.034-.025 0-.065-.01-.068-.034-.005-.033.044-.067.075-.067.04-.015.092-.023.13-.002.009.004.017.015.014.025v.01z" }, null, -1)])]);
}
var linux_icon_default = { render };
//#endregion
//#region src/features/ai/instanceAi/components/modals/ComputerUseSetupContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var ComputerUseSetupContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ComputerUseSetupContent",
	setup(__props) {
		const CATEGORY_META = {
			filesystem: {
				icon: "folder-open",
				labelKey: "instanceAi.filesystem.category.filesystem"
			},
			browser: {
				icon: "globe",
				labelKey: "instanceAi.filesystem.category.browser"
			},
			screenshot: {
				icon: "mouse-pointer",
				labelKey: "instanceAi.filesystem.category.computerUse"
			},
			"mouse-keyboard": {
				icon: "mouse-pointer",
				labelKey: "instanceAi.filesystem.category.computerUse"
			},
			shell: {
				icon: "terminal",
				labelKey: "instanceAi.filesystem.category.shell"
			}
		};
		const i18n = useI18n();
		const store = useInstanceAiSettingsStore();
		const telemetry = useTelemetry();
		const selectedOs = ref("mac");
		const copied = ref(false);
		const isScrolledToEnd = ref(false);
		const osTabs = [
			{
				id: "mac",
				labelKey: "instanceAi.welcomeModal.gateway.os.mac",
				icon: macos_icon_default
			},
			{
				id: "windows",
				labelKey: "instanceAi.welcomeModal.gateway.os.windows",
				icon: windows_icon_default
			},
			{
				id: "linux",
				labelKey: "instanceAi.welcomeModal.gateway.os.linux",
				icon: linux_icon_default
			}
		];
		const displayCommand = computed(() => store.setupCommand ?? "npx @n8n/computer-use");
		const canCopyCommand = computed(() => store.setupCommand !== null);
		const nowMs = ref(Date.now());
		let expiryTimer = null;
		const tokenExpiresInSeconds = computed(() => {
			if (store.setupCommandTtlSeconds !== null && store.setupCommandFetchedAt !== null) {
				const elapsedSeconds = Math.floor((nowMs.value - store.setupCommandFetchedAt) / 1e3);
				return Math.max(0, store.setupCommandTtlSeconds - elapsedSeconds);
			}
			return null;
		});
		const tokenExpiryText = computed(() => {
			if (tokenExpiresInSeconds.value === null) return null;
			if (tokenExpiresInSeconds.value === 0) return i18n.baseText("instanceAi.welcomeModal.gateway.tokenExpired");
			const minutes = Math.max(1, Math.ceil(tokenExpiresInSeconds.value / 60));
			return i18n.baseText("instanceAi.welcomeModal.gateway.tokenExpiresIn", { interpolate: { minutes: String(minutes) } });
		});
		const terminalInstructionsKey = computed(() => {
			if (selectedOs.value === "windows") return "instanceAi.welcomeModal.gateway.instructions.windows";
			if (selectedOs.value === "linux") return "instanceAi.welcomeModal.gateway.instructions.linux";
			return "instanceAi.welcomeModal.gateway.instructions.mac";
		});
		const copyCommandAriaLabel = computed(() => copied.value ? i18n.baseText("generic.copiedToClipboard") : i18n.baseText("generic.copy"));
		const displayCategories = computed(() => {
			const seen = /* @__PURE__ */ new Set();
			const result = [];
			for (const cat of store.gatewayToolCategories) {
				const meta = CATEGORY_META[cat.name];
				if (!meta) continue;
				const labelKey = meta.labelKey;
				if (seen.has(labelKey)) {
					if (cat.enabled) {
						const existing = result.find((r) => r.label === i18n.baseText(labelKey));
						if (existing) existing.enabled = true;
					}
					continue;
				}
				seen.add(labelKey);
				let sublabel;
				if (cat.name === "filesystem" && cat.enabled) sublabel = cat.writeAccess ? i18n.baseText("instanceAi.filesystem.access.readWrite") : i18n.baseText("instanceAi.filesystem.access.read");
				result.push({
					key: cat.name,
					icon: meta.icon,
					label: i18n.baseText(labelKey),
					enabled: cat.enabled,
					sublabel
				});
			}
			return result.sort((a, b) => Number(b.enabled) - Number(a.enabled));
		});
		function onCommandScroll(e) {
			const el = e.target;
			isScrolledToEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
		}
		async function copyCommand() {
			try {
				if (tokenExpiresInSeconds.value === 0) await store.fetchSetupCommand();
				if (!store.setupCommand) return;
				await navigator.clipboard.writeText(store.setupCommand);
				telemetry.track("User copied computer use connection command", { os: selectedOs.value });
				copied.value = true;
				setTimeout(() => {
					copied.value = false;
				}, 2e3);
			} catch {}
		}
		onMounted(() => {
			telemetry.track("User opened computer use connection modal", { is_connected: store.isGatewayConnected });
			store.fetchSetupCommand();
		});
		watch(() => [store.setupCommandFetchedAt, store.setupCommandTtlSeconds], ([fetchedAt, ttlSeconds]) => {
			if (expiryTimer) {
				clearInterval(expiryTimer);
				expiryTimer = null;
			}
			if (!(fetchedAt !== null && ttlSeconds !== null)) return;
			nowMs.value = Date.now();
			expiryTimer = setInterval(() => {
				nowMs.value = Date.now();
			}, 1e3);
		}, { immediate: true });
		onBeforeUnmount(() => {
			if (expiryTimer) clearInterval(expiryTimer);
			store.clearSetupCommand();
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.body) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "large",
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.gateway.title")), 1)]),
				_: 1
			}, 8, ["class"])], 2), unref(store).isGatewayConnected ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.connectedBlock)
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.statusRow) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style.statusDotConnected]) }, null, 2), createVNode(unref(N8nText_default), {
					size: "small",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(store).gatewayHostIdentifier ?? unref(store).gatewayDirectory), 1)]),
					_: 1
				})], 2),
				unref(store).gatewayHostIdentifier && unref(store).gatewayDirectory ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.directoryRow)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(store).gatewayDirectory), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				displayCategories.value.length ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.toolCategories)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayCategories.value, (cat) => {
					return openBlock(), createElementBlock("span", {
						key: cat.key,
						class: normalizeClass([_ctx.$style.categoryPill, !cat.enabled && _ctx.$style.categoryPillDisabled])
					}, [
						createVNode(unref(N8nIcon_default), {
							icon: cat.icon,
							size: "xsmall"
						}, null, 8, ["icon"]),
						createTextVNode(" " + toDisplayString(cat.label) + " ", 1),
						cat.sublabel ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.categorySublabel)
						}, " (" + toDisplayString(cat.sublabel) + ") ", 3)) : createCommentVNode("", true)
					], 2);
				}), 128))], 2)) : createCommentVNode("", true)
			], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.$style.textBlock) }, null, 2), [[_directive_n8n_html, unref(i18n).baseText("instanceAi.welcomeModal.gateway.description")]]),
				createVNode(unref(N8nCallout_default), { theme: "warning" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.gateway.warning")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.osTabs) }, [(openBlock(), createElementBlock(Fragment, null, renderList(osTabs, (tab) => {
					return createBaseVNode("button", {
						key: tab.id,
						class: normalizeClass([_ctx.$style.osTab, { [_ctx.$style.osTabActive]: selectedOs.value === tab.id }]),
						onClick: ($event) => selectedOs.value = tab.id
					}, [(openBlock(), createBlock(resolveDynamicComponent(tab.icon), { class: normalizeClass(_ctx.$style.osTabIcon) }, null, 8, ["class"])), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(tab.labelKey)), 1)], 10, _hoisted_1);
				}), 64))], 2),
				createVNode(unref(N8nText_default), { class: normalizeClass(_ctx.$style.instructions) }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(terminalInstructionsKey.value)), 1)]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.commandCard) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.commandRow) }, [createBaseVNode("code", {
					class: normalizeClass([_ctx.$style.commandText, { [_ctx.$style.commandTextFaded]: !isScrolledToEnd.value }]),
					onScroll: onCommandScroll
				}, toDisplayString(displayCommand.value), 35), createVNode(unref(N8nIconButton_default), {
					icon: copied.value ? "check" : "copy",
					variant: "ghost",
					size: "small",
					"icon-size": "large",
					class: normalizeClass(_ctx.$style.copyButton),
					"aria-label": copyCommandAriaLabel.value,
					"data-test-id": "computer-use-setup-copy-command",
					disabled: !canCopyCommand.value,
					onClick: copyCommand
				}, null, 8, [
					"icon",
					"class",
					"aria-label",
					"disabled"
				])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.waitingRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.waitingStatus) }, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					spin: "",
					size: "small"
				}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.welcomeModal.gateway.waiting")), 1)], 2), tokenExpiryText.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "warning"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(tokenExpiryText.value), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2)], 2)
			], 64))], 2);
		};
	}
});
var ComputerUseSetupContent_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_14qng_125",
	header: "_header_14qng_132",
	title: "_title_14qng_139",
	textBlock: "_textBlock_14qng_144",
	osTabs: "_osTabs_14qng_153",
	osTab: "_osTab_14qng_153",
	osTabActive: "_osTabActive_14qng_178",
	osTabIcon: "_osTabIcon_14qng_184",
	commandCard: "_commandCard_14qng_189",
	commandRow: "_commandRow_14qng_195",
	commandText: "_commandText_14qng_204",
	commandTextFaded: "_commandTextFaded_14qng_219",
	copyButton: "_copyButton_14qng_223",
	connectedBlock: "_connectedBlock_14qng_228",
	statusRow: "_statusRow_14qng_237",
	statusDot: "_statusDot_14qng_243",
	statusDotConnected: "_statusDotConnected_14qng_250",
	directoryRow: "_directoryRow_14qng_254",
	toolCategories: "_toolCategories_14qng_258",
	categoryPill: "_categoryPill_14qng_265",
	categoryPillDisabled: "_categoryPillDisabled_14qng_277",
	categorySublabel: "_categorySublabel_14qng_281",
	waitingRow: "_waitingRow_14qng_285",
	waitingStatus: "_waitingStatus_14qng_296",
	instructions: "_instructions_14qng_302"
};
var ComputerUseSetupContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ComputerUseSetupContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ComputerUseSetupContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/modals/ComputerUseSetupModal.vue
var ComputerUseSetupModal_default = /* @__PURE__ */ defineComponent({
	__name: "ComputerUseSetupModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				"show-close": true,
				"custom-class": "instance-ai-computer-use-setup-modal",
				width: "540"
			}, {
				content: withCtx(() => [createVNode(ComputerUseSetupContent_default)]),
				_: 1
			}, 8, ["name"]);
		};
	}
});
//#endregion
export { ComputerUseSetupModal_default as default };

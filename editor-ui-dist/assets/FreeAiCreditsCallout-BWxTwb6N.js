import { $ as openBlock, A as createTextVNode, E as createElementBlock, N as defineComponent, S as computed, Sn as toDisplayString, Wt as unref, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-DXwO88M2.js";
import { Ca as N8nCallout_default, Ta as N8nButton_default, wa as N8nText_default } from "./src-pyi3rpL8.js";
import { hn as useNDVStore } from "./users.store-g_JotOI6.js";
import "./constants-D4XflMq_.js";
import { t as useFreeAiCredits } from "./useFreeAiCredits-CD_kRDlT.js";
//#region src/app/components/FreeAiCreditsCallout.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 2 };
var LANGCHAIN_NODES_PREFIX = "@n8n/n8n-nodes-langchain.";
var N8N_NODES_PREFIX = "@n8n/n8n-nodes.";
//#endregion
//#region src/app/components/FreeAiCreditsCallout.vue
var FreeAiCreditsCallout_default = /* @__PURE__ */ defineComponent({
	__name: "FreeAiCreditsCallout",
	props: {
		credentialTypeName: {},
		telemetrySource: { default: "freeAiCreditsCallout" }
	},
	emits: ["claimed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const NODES_WITH_OPEN_AI_API_CREDENTIAL = [
			`${LANGCHAIN_NODES_PREFIX}openAi`,
			`${LANGCHAIN_NODES_PREFIX}embeddingsOpenAi`,
			`${LANGCHAIN_NODES_PREFIX}lmChatOpenAi`,
			`${N8N_NODES_PREFIX}openAi`
		];
		const ndvStore = useNDVStore();
		const i18n = useI18n();
		const { aiCreditsQuota, userCanClaimOpenAiCredits, claimingCredits, showSuccessCallout, claimCredits } = useFreeAiCredits();
		const isEditingOpenAiCredential = computed(() => props.credentialTypeName && props.credentialTypeName === "openAiApi");
		const activeNodeHasOpenAiApiCredential = computed(() => ndvStore.activeNode?.type && NODES_WITH_OPEN_AI_API_CREDENTIAL.includes(ndvStore.activeNode.type));
		const isRelevantContext = computed(() => activeNodeHasOpenAiApiCredential.value || isEditingOpenAiCredential.value);
		const showCallout = computed(() => userCanClaimOpenAiCredits.value && isRelevantContext.value);
		const showSuccess = computed(() => showSuccessCallout.value && isRelevantContext.value);
		const onClaimCreditsClicked = async () => {
			if (await claimCredits(props.telemetrySource)) emit("claimed");
		};
		return (_ctx, _cache) => {
			return showCallout.value && !showSuccess.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "secondary",
				icon: "circle-alert",
				class: "mt-xs"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					label: unref(i18n).baseText("freeAi.credits.callout.claim.button.label"),
					loading: unref(claimingCredits),
					onClick: onClaimCreditsClicked
				}, null, 8, ["label", "loading"])]),
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.claim.title", { interpolate: { credits: unref(aiCreditsQuota) } })) + " ", 1)]),
				_: 1
			})) : showSuccess.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "success",
				icon: "circle-check",
				class: "mt-xs"
			}, {
				default: withCtx(() => [
					createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part1", { interpolate: { credits: unref(aiCreditsQuota) } })), 1)]),
						_: 1
					}),
					_cache[0] || (_cache[0] = createTextVNode(" \xA0 ", -1)),
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part2")), 1)]),
						_: 1
					})
				]),
				_: 1
			})) : (openBlock(), createElementBlock("div", _hoisted_1));
		};
	}
});
//#endregion
export { FreeAiCreditsCallout_default as t };

import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, Ht as toValue, N as defineComponent, O as createSlots, S as computed, Sn as toDisplayString, T as createCommentVNode, U as mergeProps, W as nextTick, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, bt as withDirectives, gt as watch, it as renderSlot, j as createVNode, k as createStaticVNode, ot as resolveDirective, q as onBeforeUnmount, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { c as I18nT, s as useI18n } from "./src-rwoOesms.js";
import { Da as N8nIcon_default, Ea as N8nButton_default, G as ActionPill_default, Ii as Input_default, Mi as N8nTooltip_default, R as N8nNotice_default, Ta as N8nText_default, _t as N8nSelect_default, dt as N8nInputLabel_default, nt as N8nLink_default, vt as N8nOption_default, yi as N8nBadge_default } from "./src-D7XhL4SE.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Gr as useProjectsStore, Ii as updateNodeAuthType, Ki as isEmpty, Mi as isRequiredCredential, Qt as useNodeHelpers, Ut as injectWorkflowDocumentStore, _i as getAllNodeCredentialForAuthType, b as useNodeTypesStore, bi as getAuthTypeForNodeCredential, ki as hasProxyAuth, nt as useCredentialsStore, t as useWorkflowsStore, vi as getAppNameFromCredType, wi as getNodeCredentialForSelectedAuthType, xi as getMainAuthField, zt as injectNDVStore } from "./workflows.store-fKRofyHu.js";
import { t as useToast } from "./useToast-BFkWPPHz.js";
import { Qi as WORKFLOW_SETTINGS_MODAL_KEY, _n as KEEP_AUTH_IN_NDV_FOR_NODES, di as AI_GATEWAY_TOP_UP_MODAL_KEY, el as getResourcePermissions } from "./constants-Brs44Mbc.js";
import { h as assert } from "./useRootStore-NTSmdx9S.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-ByD75lsx.js";
import { n as ndvEventBus } from "./useCodeDiff-MGlB_L8r.js";
import { n as useCredentialOAuth, t as useQuickConnect } from "./useQuickConnect-IewBFg4u.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CPfeS7YD.js";
import { t as useDynamicCredentials } from "./useDynamicCredentials-DpAPH1tQ.js";
import { t as useAiGateway } from "./useAiGateway-0SrMClbJ.js";
//#region src/app/components/TitledList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "titled-list" };
var _hoisted_2$2 = ["textContent"];
//#endregion
//#region src/app/components/TitledList.vue
var TitledList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "TitledList",
	props: {
		title: {},
		items: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("p", { textContent: toDisplayString(__props.title) }, null, 8, _hoisted_2$2), createBaseVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
				return withDirectives((openBlock(), createElementBlock("li", {
					key: item,
					class: "titled-list-item"
				})), [[_directive_n8n_html, item]]);
			}), 128))])]);
		};
	}
}), [["__scopeId", "data-v-d7e3dd1d"]]);
var GoogleAuthButton_vue_vue_type_style_index_0_lang_module_default = { googleAuthBtn: "_googleAuthBtn_1xjye_125" };
//#endregion
//#region src/features/credentials/components/CredentialEdit/GoogleAuthButton.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("button", {
		class: normalizeClass(_ctx.$style.googleAuthBtn),
		"aria-label": "Sign in with Google"
	}, [..._cache[0] || (_cache[0] = [createStaticVNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"175\" height=\"40\" fill=\"none\" viewBox=\"0 0 175 40\" aria-hidden=\"true\"><rect width=\"174\" height=\"39\" x=\".5\" y=\".5\" fill=\"#fff\" rx=\"3.5\"></rect><g clip-path=\"url(#a)\"><path fill=\"#4285f4\" d=\"M31.6 20.227c0-.709-.064-1.39-.182-2.045H22v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35\"></path><path fill=\"#34a853\" d=\"M22 30c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.596-4.123h-3.34v2.59A10 10 0 0 0 22 30\"></path><path fill=\"#fbbc04\" d=\"M16.405 21.9c-.2-.6-.314-1.24-.314-1.9s.113-1.3.313-1.9v-2.59h-3.34A10 10 0 0 0 12 20c0 1.614.386 3.14 1.064 4.49z\"></path><path fill=\"#e94235\" d=\"M22 13.977c1.468 0 2.786.505 3.823 1.496l2.868-2.869C26.959 10.992 24.695 10 22 10c-3.91 0-7.29 2.24-8.936 5.51l3.34 2.59c.787-2.364 2.991-4.123 5.596-4.123\"></path></g><path fill=\"#1f1f1f\" d=\"M48.248 22.437q0-.309-.096-.547a1.07 1.07 0 0 0-.32-.438 2.7 2.7 0 0 0-.657-.383 9 9 0 0 0-1.067-.39 12 12 0 0 1-1.312-.485 5 5 0 0 1-1.04-.629 2.7 2.7 0 0 1-.69-.827 2.3 2.3 0 0 1-.246-1.087q0-.607.253-1.107.26-.5.732-.861a3.5 3.5 0 0 1 1.128-.568 4.8 4.8 0 0 1 1.435-.205q1.107 0 1.907.41.806.41 1.238 1.1.437.692.437 1.525h-1.702q0-.492-.212-.868a1.44 1.44 0 0 0-.629-.601q-.417-.22-1.06-.22-.608 0-1.011.185a1.35 1.35 0 0 0-.602.5q-.198.315-.198.71 0 .28.13.513.13.226.397.424.265.19.67.362.402.172.95.328a9.4 9.4 0 0 1 1.442.547q.615.295 1.025.67t.616.855q.205.471.205 1.073 0 .629-.253 1.135a2.45 2.45 0 0 1-.725.854q-.465.35-1.12.54a5.3 5.3 0 0 1-1.45.185q-.718 0-1.415-.192a4.2 4.2 0 0 1-1.258-.58 3 3 0 0 1-.902-.985q-.335-.596-.335-1.388h1.715q0 .486.165.827.17.342.471.56.3.213.698.315.403.103.86.103.603 0 1.006-.171.41-.171.615-.479t.205-.71m4.84-4.834V25h-1.654v-7.396zm-1.764-1.94q0-.377.246-.623.253-.253.698-.253.436 0 .69.253a.83.83 0 0 1 .253.622.82.82 0 0 1-.253.615q-.253.246-.69.246-.446 0-.698-.246a.83.83 0 0 1-.246-.615m8.306 1.94h1.497v7.192q0 .997-.424 1.695a2.72 2.72 0 0 1-1.183 1.06q-.758.369-1.756.369a4 4 0 0 1-.944-.123 3.9 3.9 0 0 1-.998-.397 2.5 2.5 0 0 1-.8-.704l.773-.97q.396.471.875.69.478.219 1.005.219.568 0 .964-.212.403-.206.622-.608.219-.405.218-.985v-5.55zm-5.025 3.78v-.143q0-.84.206-1.531.204-.698.587-1.196.384-.506.93-.773a2.7 2.7 0 0 1 1.237-.273q.718 0 1.224.26.513.26.855.745.34.478.533 1.148.198.663.294 1.477v.458a7.4 7.4 0 0 1-.301 1.449 4 4 0 0 1-.56 1.135q-.35.479-.862.738-.506.26-1.196.26-.677 0-1.224-.28a2.8 2.8 0 0 1-.93-.787 3.7 3.7 0 0 1-.588-1.19 5.2 5.2 0 0 1-.205-1.496m1.648-.143v.144q0 .505.096.943.102.438.307.773.213.327.534.52.328.183.772.184.58 0 .95-.246.375-.247.574-.663.206-.425.287-.944v-1.237a3 3 0 0 0-.17-.752 2 2 0 0 0-.335-.608 1.4 1.4 0 0 0-.534-.41q-.321-.15-.758-.151-.445 0-.773.191a1.6 1.6 0 0 0-.54.527q-.206.335-.307.779a4.2 4.2 0 0 0-.103.95m8.217-2.057V25h-1.648v-7.396h1.552zm-.294 1.845-.533-.006a4.8 4.8 0 0 1 .218-1.443q.22-.655.602-1.128.39-.471.93-.724.54-.26 1.203-.26.532 0 .964.15.437.144.745.472.315.328.478.854.165.52.164 1.279V25h-1.654v-4.785q0-.534-.157-.841a.88.88 0 0 0-.445-.444q-.287-.137-.717-.137-.424 0-.76.178-.334.177-.567.485-.225.307-.348.711a3 3 0 0 0-.123.861m11.703-3.424V25h-1.654v-7.396zm-1.764-1.942q0-.376.246-.622.253-.253.698-.253.436 0 .69.253a.83.83 0 0 1 .253.622.82.82 0 0 1-.253.615q-.254.246-.69.246-.446 0-.698-.246a.84.84 0 0 1-.246-.615m5.202 3.52V25H77.67v-7.396h1.552zm-.294 1.846-.533-.006a4.8 4.8 0 0 1 .219-1.443q.219-.655.602-1.128.39-.471.93-.724a2.74 2.74 0 0 1 1.202-.26q.534 0 .964.15.438.144.745.472.315.328.479.854.165.52.164 1.279V25H82.14v-4.785q0-.534-.158-.841a.88.88 0 0 0-.444-.444q-.286-.137-.718-.137-.423 0-.758.178-.336.177-.568.485-.225.307-.349.711a3 3 0 0 0-.123.861m11.95 2.331 1.709-5.756h1.052l-.287 1.723L91.725 25h-.944zm-1.005-5.756 1.333 5.784.11 1.613h-1.054l-2.002-7.396zm5.366 5.715 1.292-5.715h1.606L96.236 25h-1.052zm-1.422-5.715 1.689 5.688.212 1.709h-.944l-1.743-5.68-.287-1.716zm7.205 0V25h-1.654v-7.396zm-1.764-1.94q0-.377.247-.623.252-.253.697-.253.438 0 .69.253a.83.83 0 0 1 .253.622.82.82 0 0 1-.253.615q-.252.246-.69.246-.445 0-.697-.246a.83.83 0 0 1-.246-.615m6.959 1.94v1.204h-4.169v-1.203zm-2.966-1.811h1.647v7.164q0 .342.096.526a.5.5 0 0 0 .28.24q.178.06.417.061.17 0 .328-.02.157-.021.253-.041l.007 1.258a4 4 0 0 1-.478.109 3.5 3.5 0 0 1-.616.048q-.567 0-1.005-.198a1.48 1.48 0 0 1-.683-.664q-.246-.457-.246-1.216zm5.865-1.292V25h-1.641V14.5zm-.287 6.528-.533-.006q.006-.766.212-1.416.212-.65.587-1.128.384-.484.916-.745a2.6 2.6 0 0 1 1.183-.266q.547 0 .984.15.445.15.766.485.321.329.485.862.171.526.171 1.285V25h-1.654v-4.765q0-.533-.157-.847a.9.9 0 0 0-.445-.452 1.6 1.6 0 0 0-.717-.143q-.445 0-.786.178-.336.177-.561.485-.225.307-.342.711a3.3 3.3 0 0 0-.109.861m17.732-1.114v3.8q-.211.282-.663.616-.444.328-1.182.568-.74.239-1.839.239a4.5 4.5 0 0 1-1.716-.315 3.75 3.75 0 0 1-1.347-.936 4.3 4.3 0 0 1-.868-1.497q-.308-.889-.308-2.024v-.69q0-1.128.281-2.01a4.3 4.3 0 0 1 .82-1.504q.533-.615 1.285-.93.759-.32 1.716-.32 1.224 0 2.023.41a3 3 0 0 1 1.245 1.12q.437.718.553 1.641h-1.681a2.6 2.6 0 0 0-.322-.93 1.63 1.63 0 0 0-.67-.642q-.43-.24-1.121-.24-.594 0-1.046.226-.45.226-.752.663a3.3 3.3 0 0 0-.444 1.067q-.15.628-.15 1.435v.704q0 .821.171 1.456.177.636.505 1.073.336.438.814.664.479.218 1.08.218.588 0 .964-.095a2.3 2.3 0 0 0 .595-.24q.225-.143.348-.273v-1.976h-2.071v-1.278zm1.422 1.47v-.157q0-.8.233-1.484.232-.69.669-1.196a3 3 0 0 1 1.081-.793 3.5 3.5 0 0 1 1.449-.287q.813 0 1.449.287.642.28 1.087.793.444.506.677 1.196.232.683.232 1.484v.157q0 .8-.232 1.483a3.6 3.6 0 0 1-.677 1.197 3.1 3.1 0 0 1-1.08.792q-.636.28-1.443.28a3.6 3.6 0 0 1-1.456-.28 3.15 3.15 0 0 1-1.08-.793 3.5 3.5 0 0 1-.676-1.196 4.6 4.6 0 0 1-.233-1.483m1.648-.157v.157q0 .498.102.943.103.444.321.78.219.334.561.526.342.19.813.191.459 0 .793-.191a1.6 1.6 0 0 0 .561-.527q.219-.335.321-.779.11-.444.11-.943v-.157q0-.494-.11-.93a2.4 2.4 0 0 0-.328-.786 1.6 1.6 0 0 0-.56-.534 1.55 1.55 0 0 0-.8-.198q-.465 0-.807.198a1.6 1.6 0 0 0-.554.534q-.218.342-.321.786a4 4 0 0 0-.102.93m6.295.157v-.157q0-.8.233-1.484.232-.69.67-1.196a3 3 0 0 1 1.08-.793 3.5 3.5 0 0 1 1.449-.287q.814 0 1.449.287.643.28 1.087.793.444.506.677 1.196.232.683.232 1.484v.157q0 .8-.232 1.483a3.6 3.6 0 0 1-.677 1.197 3.1 3.1 0 0 1-1.08.792q-.636.28-1.442.28a3.6 3.6 0 0 1-1.456-.28 3.1 3.1 0 0 1-1.08-.793 3.5 3.5 0 0 1-.677-1.196 4.6 4.6 0 0 1-.233-1.483m1.648-.157v.157q0 .498.102.943.103.444.322.78.218.334.56.526.342.19.814.191.457 0 .793-.191.341-.192.56-.527t.322-.779a4 4 0 0 0 .109-.943v-.157q0-.494-.109-.93a2.4 2.4 0 0 0-.329-.786 1.56 1.56 0 0 0-1.36-.732q-.465 0-.807.198a1.6 1.6 0 0 0-.553.534q-.219.342-.322.786a4 4 0 0 0-.102.93m11.348-3.623h1.497v7.19q0 .999-.424 1.696a2.73 2.73 0 0 1-1.183 1.06q-.758.369-1.757.369-.424 0-.943-.123a3.9 3.9 0 0 1-.998-.397 2.5 2.5 0 0 1-.8-.704l.773-.97q.396.471.875.69.478.219 1.005.219.567 0 .963-.212.404-.206.622-.608.219-.405.219-.985v-5.55zm-5.025 3.78v-.144q0-.84.205-1.531.206-.698.588-1.196.382-.506.93-.773a2.7 2.7 0 0 1 1.237-.273q.719 0 1.224.26.512.26.854.745.342.478.533 1.148.2.663.294 1.477v.458a7.4 7.4 0 0 1-.3 1.449 4 4 0 0 1-.561 1.135 2.4 2.4 0 0 1-.861.738q-.505.26-1.197.26-.677 0-1.223-.28a2.8 2.8 0 0 1-.93-.787 3.7 3.7 0 0 1-.588-1.19 5.3 5.3 0 0 1-.205-1.496m1.648-.144v.144q0 .505.095.943.103.438.308.773.212.327.533.52.328.183.773.184.58 0 .95-.246.376-.247.574-.663.205-.425.287-.944v-1.237a3 3 0 0 0-.171-.752 2 2 0 0 0-.335-.608 1.4 1.4 0 0 0-.533-.41q-.321-.15-.759-.151-.444 0-.772.191a1.56 1.56 0 0 0-.54.527 2.6 2.6 0 0 0-.308.779 4.2 4.2 0 0 0-.102.95m8.346-6.74V25h-1.654V14.5zm5.066 10.637a4 4 0 0 1-1.484-.267 3.3 3.3 0 0 1-1.121-.759 3.4 3.4 0 0 1-.704-1.141 4 4 0 0 1-.246-1.415v-.274q0-.868.253-1.572t.704-1.203a3 3 0 0 1 1.067-.773q.615-.266 1.333-.266.793 0 1.387.266.595.267.985.752.396.48.587 1.142.2.663.199 1.463v.704h-5.715V20.61h4.088v-.13a2.3 2.3 0 0 0-.178-.834 1.4 1.4 0 0 0-.485-.628q-.329-.24-.875-.24-.411 0-.732.178a1.45 1.45 0 0 0-.526.5 2.6 2.6 0 0 0-.328.792 4.5 4.5 0 0 0-.11 1.032v.274q0 .485.13.902.137.41.397.718t.629.485q.369.171.84.171.595 0 1.06-.24.465-.238.807-.676l.868.84q-.24.35-.622.67-.383.315-.937.514a3.7 3.7 0 0 1-1.271.198\"></path><rect width=\"174\" height=\"39\" x=\".5\" y=\".5\" stroke=\"#747775\" rx=\"3.5\"></rect><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M12 10h20v20H12z\"></path></clipPath></defs></svg>", 1)])], 2);
}
var GoogleAuthButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": GoogleAuthButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/credentials/quickConnect/components/QuickConnectButton.vue?vue&type=script&setup=true&lang.ts
var QuickConnectButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "QuickConnectButton",
	props: {
		credentialTypeName: {},
		serviceName: {},
		label: {},
		size: { default: "medium" },
		disabled: {
			type: Boolean,
			default: false
		},
		disabledTooltip: {}
	},
	emits: ["click"],
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const { isGoogleOAuthType } = useCredentialOAuth();
		const buttonLabel = computed(() => {
			if (props.label) return props.label;
			if (!props.serviceName) return i18n.baseText("nodeCredentials.quickConnect.connect");
			return i18n.baseText("nodeCredentials.quickConnect.connectTo", { interpolate: { provider: props.serviceName } });
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				disabled: !__props.disabled || !__props.disabledTooltip,
				offset: 24
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.disabledTooltip), 1)]),
				default: withCtx(() => [unref(isGoogleOAuthType)(__props.credentialTypeName) ? (openBlock(), createBlock(GoogleAuthButton_default, mergeProps({ key: 0 }, _ctx.$attrs, {
					disabled: __props.disabled,
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
				}), null, 16, ["disabled"])) : (openBlock(), createBlock(unref(N8nButton_default), mergeProps({ key: 1 }, _ctx.$attrs, {
					variant: "subtle",
					size: __props.size,
					class: _ctx.$style.quickConnectButton,
					disabled: __props.disabled,
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("click"))
				}), {
					default: withCtx(() => [createVNode(CredentialIcon_default, {
						theme: "light",
						"credential-type-name": __props.credentialTypeName,
						size: 16
					}, null, 8, ["credential-type-name"]), createBaseVNode("span", null, toDisplayString(buttonLabel.value), 1)]),
					_: 1
				}, 16, [
					"size",
					"class",
					"disabled"
				]))]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
var QuickConnectButton_vue_vue_type_style_index_0_lang_module_default = { quickConnectButton: "_quickConnectButton_68clb_125" };
var QuickConnectButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(QuickConnectButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": QuickConnectButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/credentials/composables/useNodeCredentialOptions.ts
function useNodeCredentialOptions(node, nodeType, overrideCredType, displayAllOptions = false) {
	const nodeHelpers = useNodeHelpers();
	const credentialsStore = useCredentialsStore();
	const mainNodeAuthField = computed(() => getMainAuthField(nodeType.value));
	const credentialTypesNodeDescriptions = computed(() => credentialsStore.getCredentialTypesNodeDescriptions(unref(overrideCredType), nodeType.value));
	const credentialTypesNodeDescriptionDisplayed = computed(() => credentialTypesNodeDescriptions.value.filter(displayCredentials).map((type) => ({
		type,
		options: getCredentialOptions(getAllRelatedCredentialTypes(type))
	})));
	const areAllCredentialsSet = computed(() => credentialTypesNodeDescriptionDisplayed.value.every(({ type }) => isCredentialExisting(type)));
	function getCredentialOptions(types) {
		let options = [];
		types.forEach((type) => {
			options = options.concat(credentialsStore.allUsableCredentialsByType[type]?.map((option) => ({
				...option,
				typeDisplayName: credentialsStore.getCredentialTypeByName(type)?.displayName ?? ""
			})) ?? []);
		});
		if (node.value?.type === "n8n-nodes-base.httpRequest") options = options.filter((option) => !option.isManaged);
		return options;
	}
	function displayCredentials(credentialTypeDescription) {
		if (!node.value) return false;
		if (credentialTypeDescription.displayOptions === void 0) return true;
		return nodeHelpers.displayParameter(node.value.parameters, credentialTypeDescription, "", node.value);
	}
	function showMixedCredentials(credentialType) {
		if (!node.value) return false;
		const isRequired = isRequiredCredential(nodeType.value, credentialType);
		return !KEEP_AUTH_IN_NDV_FOR_NODES.includes(node.value.type) && isRequired;
	}
	function getAllRelatedCredentialTypes(credentialType) {
		if (showMixedCredentials(credentialType)) {
			if (mainNodeAuthField.value) {
				if (toValue(displayAllOptions)) return nodeType.value?.credentials?.map((cred) => cred.name) ?? [];
				return getAllNodeCredentialForAuthType(nodeType.value, mainNodeAuthField.value.name).map((cred) => cred.name);
			}
		}
		return [credentialType.name];
	}
	function isCredentialExisting(credentialType) {
		const credential = node.value?.credentials?.[credentialType.name];
		if (credential?.__aiGatewayManaged) return true;
		if (!credential?.id) return false;
		return !!getCredentialOptions([credentialType.name]).find((option) => option.id === credential.id);
	}
	return {
		credentialTypesNodeDescriptions,
		credentialTypesNodeDescriptionDisplayed,
		mainNodeAuthField,
		areAllCredentialsSet,
		showMixedCredentials,
		isCredentialExisting
	};
}
//#endregion
//#region src/app/components/AiGatewaySelector.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2$1 = ["aria-checked", "disabled"];
var _hoisted_3 = ["aria-checked", "disabled"];
var AiGatewaySelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiGatewaySelector",
	props: {
		aiGatewayEnabled: { type: Boolean },
		readonly: { type: Boolean },
		credentialType: {}
	},
	emits: ["toggle"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const telemetry = useTelemetry();
		const { balance, fetchWallet } = useAiGateway();
		const isBalanceDepleted = computed(() => balance.value !== void 0 && balance.value <= 0);
		watch(() => props.aiGatewayEnabled, (enabled) => {
			if (enabled) fetchWallet();
		}, { immediate: true });
		watch(() => workflowsStore.workflowExecutionData, (executionData) => {
			if ((executionData?.finished || executionData?.stoppedAt !== void 0) && props.aiGatewayEnabled) fetchWallet();
		});
		function selectGateway() {
			if (props.readonly || props.aiGatewayEnabled) return;
			emit("toggle", true);
		}
		function selectOwnCredential() {
			if (props.readonly || !props.aiGatewayEnabled) return;
			emit("toggle", false);
		}
		function onBadgeClick(event) {
			event.stopPropagation();
			if (props.readonly) return;
			telemetry.track("User clicked ai gateway top up", {
				source: "credential_selector",
				credential_type: props.credentialType
			});
			uiStore.openModalWithData({
				name: AI_GATEWAY_TOP_UP_MODAL_KEY,
				data: { credentialType: props.credentialType }
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.wrapper, !__props.aiGatewayEnabled && _ctx.$style.withGap]),
				"data-test-id": "ai-gateway-selector"
			}, [createBaseVNode("div", {
				role: "radiogroup",
				"aria-label": unref(i18n).baseText("aiGateway.credentialMode.sectionLabel")
			}, [createBaseVNode("button", {
				type: "button",
				role: "radio",
				"aria-checked": __props.aiGatewayEnabled,
				disabled: __props.readonly,
				"data-test-id": "ai-gateway-selector-connect",
				class: normalizeClass([_ctx.$style.card, __props.aiGatewayEnabled ? _ctx.$style.cardSelected : _ctx.$style.cardIdle]),
				onClick: selectGateway
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.cardMain) }, [createBaseVNode("span", {
				class: normalizeClass([_ctx.$style.radioOuter, __props.aiGatewayEnabled && _ctx.$style.radioOuterOn]),
				"aria-hidden": "true"
			}, null, 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.textBlock) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(unref(i18n).baseText("aiGateway.credentialMode.n8nConnect.title")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.subtitle) }, toDisplayString(unref(i18n).baseText("aiGateway.credentialMode.n8nConnect.subtitle")), 3)], 2)], 2), __props.aiGatewayEnabled && unref(balance) !== void 0 ? (openBlock(), createBlock(unref(ActionPill_default), {
				key: 0,
				clickable: !__props.readonly,
				type: isBalanceDepleted.value ? "danger" : "default",
				size: "small",
				text: isBalanceDepleted.value ? unref(i18n).baseText("aiGateway.wallet.noCredits") : unref(i18n).baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${Number(unref(balance)).toFixed(2)}` } }),
				"hover-text": !__props.readonly ? unref(i18n).baseText("aiGateway.toggle.topUp") : void 0,
				onClick: onBadgeClick
			}, null, 8, [
				"clickable",
				"type",
				"text",
				"hover-text"
			])) : createCommentVNode("", true)], 10, _hoisted_2$1), createBaseVNode("button", {
				type: "button",
				role: "radio",
				"aria-checked": !__props.aiGatewayEnabled,
				disabled: __props.readonly,
				"data-test-id": "ai-gateway-mode-card-own",
				class: normalizeClass([_ctx.$style.card, !__props.aiGatewayEnabled ? _ctx.$style.cardSelected : _ctx.$style.cardIdle]),
				onClick: selectOwnCredential
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.cardMain) }, [createBaseVNode("span", {
				class: normalizeClass([_ctx.$style.radioOuter, !__props.aiGatewayEnabled && _ctx.$style.radioOuterOn]),
				"aria-hidden": "true"
			}, null, 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.textBlock) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(unref(i18n).baseText("aiGateway.credentialMode.own.title")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.subtitle) }, toDisplayString(unref(i18n).baseText("aiGateway.credentialMode.own.subtitle")), 3)], 2)], 2)], 10, _hoisted_3)], 8, _hoisted_1$1)], 2);
		};
	}
});
var AiGatewaySelector_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_lxre9_125",
	withGap: "_withGap_lxre9_131",
	card: "_card_lxre9_135",
	cardSelected: "_cardSelected_lxre9_162",
	title: "_title_lxre9_166",
	subtitle: "_subtitle_lxre9_169",
	cardIdle: "_cardIdle_lxre9_173",
	cardMain: "_cardMain_lxre9_177",
	radioOuter: "_radioOuter_lxre9_185",
	radioOuterOn: "_radioOuterOn_lxre9_199",
	textBlock: "_textBlock_lxre9_214"
};
var AiGatewaySelector_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiGatewaySelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiGatewaySelector_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/credentials/components/NodeCredentials.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 1 };
var _hoisted_2 = ["disabled", "onClick"];
var NodeCredentials_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCredentials",
	props: {
		node: {},
		overrideCredType: {
			type: [
				String,
				Number,
				Boolean,
				null,
				Object,
				Array
			],
			default: ""
		},
		readonly: {
			type: Boolean,
			default: false
		},
		showAll: {
			type: Boolean,
			default: false
		},
		hideIssues: {
			type: Boolean,
			default: false
		},
		skipAutoSelect: {
			type: Boolean,
			default: false
		},
		standalone: {
			type: Boolean,
			default: false
		},
		projectId: {},
		suggestedCredentialName: {},
		hideAskAssistant: { type: Boolean }
	},
	emits: [
		"credentialSelected",
		"valueChanged",
		"blur"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const NEW_CREDENTIALS_TEXT = i18n.baseText("nodeCredentials.createNew");
		const credentialsStore = useCredentialsStore();
		const nodeTypesStore = useNodeTypesStore();
		const ndvStore = injectNDVStore();
		const uiStore = useUIStore();
		const projectsStore = useProjectsStore();
		const workflowDocumentStore = props.standalone ? void 0 : injectWorkflowDocumentStore();
		const { isEnabled: isDynamicCredentialsEnabled } = useDynamicCredentials();
		const { loading: quickConnectLoading, getQuickConnectOption, connect, cancelConnect } = useQuickConnect();
		const { canOAuthCredentialQuickConnect, hasManualCredentialInputFields } = useCredentialOAuth();
		const aiGateway = useAiGateway();
		const canCreateCredentials = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes ?? projectsStore.personalProject?.scopes).credential.create);
		const nodeHelpers = useNodeHelpers();
		const toast = useToast();
		const subscribedToCredentialType = ref("");
		const filter = ref("");
		const listeningForAuthChange = ref(false);
		const selectRefs = ref([]);
		const node = computed(() => props.node);
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.node.type, props.node.typeVersion));
		const { mainNodeAuthField, credentialTypesNodeDescriptionDisplayed, credentialTypesNodeDescriptions, isCredentialExisting, showMixedCredentials } = useNodeCredentialOptions(node, nodeType, computed(() => props.overrideCredType), () => props.showAll);
		const credentialTypeNames = computed(() => {
			const returnData = {};
			for (const { name } of credentialTypesNodeDescriptions.value) {
				const credentialType = credentialsStore.getCredentialTypeByName(name);
				returnData[name] = credentialType ? credentialType.displayName : name;
			}
			return returnData;
		});
		const selected = computed(() => props.node.credentials ?? {});
		const hasWorkflowResolver = computed(() => {
			return !!workflowDocumentStore?.value?.settings?.credentialResolverId;
		});
		function isCredentialResolvable(credentialType) {
			if (!isDynamicCredentialsEnabled.value) return false;
			const credentialId = selected.value[credentialType]?.id;
			if (!credentialId) return false;
			return credentialsStore.getCredentialById(credentialId)?.isResolvable === true;
		}
		function showResolvableWarning(credentialType) {
			return isCredentialResolvable(credentialType) && !hasWorkflowResolver.value;
		}
		function openWorkflowSettings() {
			uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
		}
		watch(() => props.node.parameters, (newValue, oldValue) => {
			if (props.node.name === ndvStore.activeNode?.name && nodeType.value && listeningForAuthChange.value) {
				if (mainNodeAuthField.value && oldValue && newValue) {
					const newAuth = newValue[mainNodeAuthField.value.name];
					if (newAuth) {
						const authType = typeof newAuth === "object" ? JSON.stringify(newAuth) : newAuth.toString();
						const credentialType = getNodeCredentialForSelectedAuthType(nodeType.value, authType);
						if (credentialType) subscribedToCredentialType.value = credentialType.name;
					}
				}
			}
		}, {
			immediate: true,
			deep: true
		});
		watch(credentialTypesNodeDescriptionDisplayed, (types) => {
			if (props.skipAutoSelect) return;
			if (types.length === 0 || !isEmpty(selected.value)) return;
			const allOptions = types.map((type) => type.options).flat();
			if (allOptions.length === 0) {
				if (aiGateway.isEnabled.value) {
					for (const { type } of types) if (aiGateway.isCredentialTypeSupported(type.name)) onAiGatewaySelector(type.name, true, false);
				}
				return;
			}
			const mostRecentCredential = allOptions.reduce((mostRecent, current) => mostRecent && mostRecent.updatedAt > current.updatedAt ? mostRecent : current, allOptions[0]);
			onCredentialSelected(mostRecentCredential.type, mostRecentCredential.id, false, false);
		}, { immediate: true });
		onMounted(() => {
			credentialsStore.$onAction(({ name, after, args }) => {
				const listeningForActions = [
					"createNewCredential",
					"updateCredential",
					"deleteCredential"
				];
				const credentialType = subscribedToCredentialType.value;
				if (!credentialType) return;
				after(async (result) => {
					if (!listeningForActions.includes(name)) return;
					if (name === "createNewCredential") {
						if (args[3]?.skipStoreUpdate) return;
					}
					const current = selected.value[credentialType];
					let credentialsOfType = [];
					if (props.showAll) {
						if (props.node) credentialsOfType = [...credentialsStore.allUsableCredentialsForNode(props.node) || []];
					} else credentialsOfType = [...credentialsStore.allUsableCredentialsByType[credentialType] || []];
					switch (name) {
						case "createNewCredential":
							if (result) onCredentialSelected(credentialType, result.id);
							break;
						case "updateCredential":
							if (result.name !== current.name) onCredentialSelected(credentialType, current.id);
							break;
						case "deleteCredential":
							if (credentialsOfType.length === 0) clearSelectedCredential(credentialType);
							else {
								const id = args[0].id;
								if (current.id === id) onCredentialSelected(credentialType, credentialsOfType[credentialsOfType.length - 1].id);
							}
							break;
					}
				});
			});
			ndvEventBus.on("credential.createNew", onCreateAndAssignNewCredential);
			credentialsStore.fetchAllCredentials({ projectId: projectsStore.currentProject?.id });
			aiGateway.fetchConfig();
			if (!aiGateway.isEnabled.value) {
				const credentials = { ...props.node.credentials ?? {} };
				let hasGatewayManaged = false;
				for (const [credType, credDetails] of Object.entries(credentials)) if (credDetails.__aiGatewayManaged) {
					delete credentials[credType];
					hasGatewayManaged = true;
				}
				if (hasGatewayManaged) emit("credentialSelected", {
					name: props.node.name,
					properties: { credentials }
				});
			}
		});
		onBeforeUnmount(() => {
			ndvEventBus.off("credential.createNew", onCreateAndAssignNewCredential);
			cancelConnect();
		});
		function getSelectedId(type) {
			if (isCredentialExisting(type)) return selected.value[type.name].id;
		}
		function getSelectedName(type) {
			return selected.value?.[type]?.name;
		}
		function getSelectPlaceholder(type, issues) {
			return issues.length && getSelectedName(type) ? i18n.baseText("nodeCredentials.selectedCredentialUnavailable", { interpolate: { name: getSelectedName(type) } }) : i18n.baseText("nodeCredentials.selectCredential");
		}
		function clearSelectedCredential(credentialType) {
			const credentials = { ...props.node.credentials ?? {} };
			delete credentials[credentialType];
			emit("credentialSelected", {
				name: props.node.name,
				properties: { credentials }
			});
		}
		function createNewCredential(credentialType, listenForAuthChange = false, showAuthOptions = false, forceManualMode = false) {
			if (listenForAuthChange) {
				listeningForAuthChange.value = true;
				subscribedToCredentialType.value = credentialType;
			}
			uiStore.openNewCredential(credentialType, showAuthOptions, forceManualMode, props.projectId, props.suggestedCredentialName, props.node.name, props.node, { hideAskAssistant: props.hideAskAssistant });
			telemetry.track("User opened Credential modal", {
				credential_type: credentialType,
				source: "node",
				new_credential: true,
				workflow_id: props.standalone ? "" : workflowDocumentStore?.value.workflowId
			});
		}
		function onCreateAndAssignNewCredential({ type, showAuthOptions }) {
			createNewCredential(type, true, showAuthOptions);
		}
		function onCredentialSelected(credentialType, credentialId, showAuthOptions = false, isUserAction = true) {
			if (!credentialId) {
				createNewCredential(credentialType, false, showAuthOptions);
				return;
			}
			telemetry.track("User selected credential from node modal", {
				credential_type: credentialType,
				node_type: props.node.type,
				...hasProxyAuth(props.node) ? { is_service_specific: true } : {},
				workflow_id: props.standalone ? "" : workflowDocumentStore?.value.workflowId,
				credential_id: credentialId
			});
			const selectedCredentials = credentialsStore.getCredentialById(credentialId);
			const selectedCredentialsType = props.showAll ? selectedCredentials.type : credentialType;
			const oldCredentials = props.node.credentials?.[selectedCredentialsType] ?? null;
			const newSelectedCredentials = {
				id: selectedCredentials.id,
				name: selectedCredentials.name
			};
			if (!props.standalone && (oldCredentials?.id === null || oldCredentials?.id && !credentialsStore.getCredentialByIdAndType(oldCredentials.id, selectedCredentialsType))) {
				workflowDocumentStore?.value?.replaceInvalidWorkflowCredentials({
					credentials: newSelectedCredentials,
					invalid: oldCredentials,
					type: selectedCredentialsType
				});
				nodeHelpers.updateNodesCredentialsIssues();
				toast.showMessage({
					title: i18n.baseText("nodeCredentials.showMessage.title"),
					message: i18n.baseText("nodeCredentials.showMessage.message", { interpolate: {
						oldCredentialName: oldCredentials.name,
						newCredentialName: newSelectedCredentials.name
					} }),
					type: "success"
				});
			}
			if (isUserAction && !props.standalone) {
				const updatedNodesCount = workflowDocumentStore?.value?.assignCredentialToMatchingNodes({
					credentials: newSelectedCredentials,
					type: selectedCredentialsType,
					currentNodeName: props.node.name
				}) ?? 0;
				if (updatedNodesCount > 0) {
					nodeHelpers.updateNodesCredentialsIssues();
					toast.showMessage({
						title: i18n.baseText("nodeCredentials.showMessage.title"),
						message: i18n.baseText("nodeCredentials.autoAssigned.message", { interpolate: { count: String(updatedNodesCount) } }),
						type: "success"
					});
				}
			}
			if (props.showAll && mainNodeAuthField.value && !props.standalone) {
				const nodeCredentialDescription = nodeType.value?.credentials?.find((cred) => cred.name === selectedCredentialsType);
				const authOption = getAuthTypeForNodeCredential(nodeType.value, nodeCredentialDescription);
				if (authOption && workflowDocumentStore?.value) {
					updateNodeAuthType(workflowDocumentStore.value.updateNodeProperties, props.node, authOption.value);
					emit("valueChanged", {
						name: `parameters.${mainNodeAuthField.value.name}`,
						value: authOption.value
					});
				}
			}
			const credentials = {
				...props.node.credentials ?? {},
				[selectedCredentialsType]: newSelectedCredentials
			};
			emit("credentialSelected", {
				name: props.node.name,
				properties: { credentials }
			});
		}
		function isAiGatewayManagedCredentials(credentialType) {
			return aiGateway.isEnabled.value && selected.value[credentialType]?.__aiGatewayManaged === true;
		}
		function showAiGatewaySelector(credentialType) {
			if (!aiGateway.isEnabled.value) return false;
			if (isAiGatewayManagedCredentials(credentialType)) return true;
			if (!aiGateway.isCredentialTypeSupported(credentialType)) return false;
			return true;
		}
		function onAiGatewaySelector(credentialType, enable, isUserAction = true) {
			const credentials = { ...props.node.credentials ?? {} };
			if (enable) credentials[credentialType] = {
				id: null,
				name: "",
				__aiGatewayManaged: true
			};
			else {
				const typeEntry = credentialTypesNodeDescriptionDisplayed.value.find(({ type }) => type.name === credentialType);
				if (typeEntry && typeEntry.options.length > 0) {
					const mostRecent = typeEntry.options.reduce((a, b) => a.updatedAt > b.updatedAt ? a : b);
					const restoredCredential = credentialsStore.getCredentialById(mostRecent.id);
					credentials[credentialType] = {
						id: restoredCredential.id,
						name: restoredCredential.name
					};
				} else delete credentials[credentialType];
			}
			if (isUserAction) telemetry.track("User toggled n8n connect credential", {
				credential_type: credentialType,
				node_type: props.node.type,
				mode: enable ? "n8n_connect" : "own",
				workflow_id: props.standalone ? "" : workflowDocumentStore?.value.workflowId
			});
			emit("credentialSelected", {
				name: props.node.name,
				properties: { credentials }
			});
			aiGateway.saveAfterToggle();
		}
		function getIssues(credentialTypeName) {
			const node = props.node;
			if (node.issues?.credentials === void 0) return [];
			if (!node.issues.credentials.hasOwnProperty(credentialTypeName)) return [];
			return node.issues.credentials[credentialTypeName];
		}
		function editCredential(credentialType) {
			const credential = props.node.credentials?.[credentialType];
			assert(credential?.id);
			uiStore.openExistingCredential(credential.id, { hideAskAssistant: props.hideAskAssistant });
			telemetry.track("User opened Credential modal", {
				credential_type: credentialType,
				source: "node",
				new_credential: false,
				workflow_id: props.standalone ? "" : workflowDocumentStore?.value.workflowId
			});
			subscribedToCredentialType.value = credentialType;
		}
		function getCredentialsFieldLabel(credentialType) {
			if (credentialType.displayName) return credentialType.displayName;
			const credentialTypeName = credentialTypeNames.value[credentialType.name];
			if (props.node.type.startsWith("n8n-creds-base")) return i18n.baseText("nodeCredentials.credentialFor", { interpolate: { credentialType: nodeType.value?.displayName ?? credentialTypeName } });
			if (!showMixedCredentials(credentialType)) return i18n.baseText("nodeCredentials.credentialFor", { interpolate: { credentialType: credentialTypeName } });
			return i18n.baseText("nodeCredentials.credentialsLabelShort");
		}
		function setFilter(newFilter = "") {
			filter.value = newFilter;
		}
		function matches(needle, haystack) {
			return haystack.toLocaleLowerCase().includes(needle.toLocaleLowerCase());
		}
		async function onClickCreateCredential(type) {
			selectRefs.value.forEach((select) => select.blur());
			await nextTick();
			createNewCredential(type.name, true, showMixedCredentials(type));
		}
		function getServiceName(credentialTypeName) {
			return getAppNameFromCredType(credentialTypeNames.value[credentialTypeName] ?? credentialTypeName);
		}
		const quickConnectCredentialType = computed(() => {
			return credentialTypesNodeDescriptions.value.find((t) => !!getQuickConnectOption(t.name, props.node.type) || canOAuthCredentialQuickConnect(t.name))?.name;
		});
		function showQuickConnectEmptyState(type) {
			return !isCredentialExisting(type) && !!quickConnectCredentialType.value;
		}
		function showStandardEmptyState(type) {
			return !isCredentialExisting(type) && !quickConnectCredentialType.value;
		}
		function canManuallySetUpCredential(credentialTypeName) {
			const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
			if (!credentialType) return true;
			return hasManualCredentialInputFields(credentialType);
		}
		async function onQuickConnectSignIn(credentialTypeName) {
			subscribedToCredentialType.value = credentialTypeName;
			const serviceName = getServiceName(credentialTypeName);
			try {
				const credential = await connect({
					credentialTypeName,
					nodeType: props.node.type,
					source: "node_type",
					serviceName
				});
				if (credential) {
					onCredentialSelected(credentialTypeName, credential.id);
					toast.showMessage({
						title: i18n.baseText("nodeCredentials.quickConnect.credential.created.success"),
						type: "success"
					});
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("nodeCredentials.quickConnect.credential.created.error"));
			}
		}
		return (_ctx, _cache) => {
			return unref(credentialTypesNodeDescriptionDisplayed).length ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(["node-credentials", _ctx.$style.container])
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(credentialTypesNodeDescriptionDisplayed), ({ type, options }) => {
				return openBlock(), createElementBlock("div", { key: type.name }, [createVNode(unref(N8nInputLabel_default), {
					label: getCredentialsFieldLabel(type),
					bold: false,
					size: "small",
					color: "text-dark",
					"data-test-id": "credentials-label"
				}, createSlots({
					default: withCtx(() => [
						showAiGatewaySelector(type.name) ? (openBlock(), createBlock(AiGatewaySelector_default, {
							key: 0,
							"ai-gateway-enabled": isAiGatewayManagedCredentials(type.name),
							readonly: __props.readonly,
							"credential-type": type.name,
							onToggle: ($event) => onAiGatewaySelector(type.name, $event)
						}, null, 8, [
							"ai-gateway-enabled",
							"readonly",
							"credential-type",
							"onToggle"
						])) : createCommentVNode("", true),
						__props.readonly && !isAiGatewayManagedCredentials(type.name) ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(Input_default), {
							"model-value": getSelectedName(type.name),
							disabled: "",
							size: "small",
							"data-test-id": "node-credentials-select"
						}, null, 8, ["model-value"])])) : !__props.standalone && options.length === 0 && showQuickConnectEmptyState(type) && quickConnectCredentialType.value && !isAiGatewayManagedCredentials(type.name) ? (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass([_ctx.$style.quickConnectContainer]),
							"data-test-id": "quick-connect-empty-state"
						}, [createVNode(QuickConnectButton_default, {
							size: "small",
							disabled: unref(quickConnectLoading),
							"credential-type-name": quickConnectCredentialType.value,
							"service-name": getServiceName(quickConnectCredentialType.value),
							onClick: _cache[0] || (_cache[0] = ($event) => onQuickConnectSignIn(quickConnectCredentialType.value))
						}, null, 8, [
							"disabled",
							"credential-type-name",
							"service-name"
						]), canManuallySetUpCredential(type.name) ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.setupManuallyContainer)
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							class: normalizeClass(_ctx.$style.setupManuallyOr)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeCredentials.quickConnect.or")), 1)]),
							_: 1
						}, 8, ["class"]), createVNode(unref(N8nLink_default), {
							class: normalizeClass(_ctx.$style.setupManuallyLink),
							theme: "secondary",
							underline: "",
							size: "small",
							"data-test-id": "setup-manually-link",
							onClick: ($event) => createNewCredential(type.name, true, unref(showMixedCredentials)(type), true)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeCredentials.quickConnect.setupManually")), 1)]),
							_: 1
						}, 8, ["class", "onClick"])], 2)) : createCommentVNode("", true)], 2)) : showStandardEmptyState(type) && options.length === 0 ? (openBlock(), createElementBlock("div", {
							key: 3,
							class: normalizeClass(_ctx.$style.standardEmptyContainer),
							"data-test-id": "node-credentials-empty-state"
						}, [createVNode(unref(N8nSelect_default), {
							class: normalizeClass(_ctx.$style.emptySelect),
							size: "small",
							disabled: "",
							placeholder: unref(i18n).baseText("nodeCredentials.emptyState.noCredentials")
						}, null, 8, ["class", "placeholder"]), canCreateCredentials.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "subtle",
							size: "small",
							"data-test-id": "setup-credential-button",
							onClick: ($event) => createNewCredential(type.name, true, unref(showMixedCredentials)(type))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeCredentials.emptyState.setupCredential")), 1)]),
							_: 1
						}, 8, ["onClick"])) : createCommentVNode("", true)], 2)) : !isAiGatewayManagedCredentials(type.name) ? (openBlock(), createElementBlock("div", {
							key: 4,
							class: normalizeClass(getIssues(type.name).length && !__props.hideIssues ? _ctx.$style.hasIssues : _ctx.$style.input),
							"data-test-id": "node-credentials-select"
						}, [
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.selectContainer) }, [createVNode(unref(N8nSelect_default), {
								ref_for: true,
								ref_key: "selectRefs",
								ref: selectRefs,
								"model-value": getSelectedId(type),
								placeholder: getSelectPlaceholder(type.name, getIssues(type.name)),
								size: "small",
								filterable: "",
								"filter-method": setFilter,
								"popper-class": _ctx.$style.selectPopper,
								class: normalizeClass({ [_ctx.$style.selectWithDynamic]: isCredentialResolvable(type.name) }),
								"onUpdate:modelValue": (value) => onCredentialSelected(type.name, value, unref(showMixedCredentials)(type)),
								onBlur: _cache[1] || (_cache[1] = ($event) => emit("blur", "credentials"))
							}, {
								empty: withCtx(() => [..._cache[2] || (_cache[2] = [])]),
								footer: withCtx(() => [createBaseVNode("button", {
									type: "button",
									"data-test-id": "node-credentials-select-item-new",
									class: normalizeClass([_ctx.$style.newCredential]),
									disabled: !canCreateCredentials.value,
									onClick: ($event) => onClickCreateCredential(type)
								}, [createVNode(unref(N8nIcon_default), {
									size: "xsmall",
									icon: "plus"
								}), createTextVNode(" " + toDisplayString(unref(NEW_CREDENTIALS_TEXT)), 1)], 10, _hoisted_2)]),
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(options.filter((o) => matches(filter.value, o.name)), (item) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: item.id,
										"data-test-id": `node-credentials-select-item-${item.id}`,
										label: item.name,
										value: item.id
									}, {
										default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([
											_ctx.$style.credentialOption,
											"mt-2xs",
											"mb-2xs"
										]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialOptionName) }, [createVNode(unref(N8nText_default), { bold: "" }, {
											default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
											_: 2
										}, 1024), unref(isDynamicCredentialsEnabled) && item.isResolvable ? (openBlock(), createBlock(unref(N8nTooltip_default), {
											key: 0,
											placement: "top"
										}, {
											content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentials.dynamic.tooltip")), 1)]),
											default: withCtx(() => [createVNode(unref(N8nIcon_default), {
												icon: "key-round",
												size: "medium",
												class: normalizeClass(_ctx.$style.dynamicIcon),
												"data-test-id": "credential-option-dynamic-icon"
											}, null, 8, ["class"])]),
											_: 1
										})) : createCommentVNode("", true)], 2), createVNode(unref(N8nText_default), { size: "small" }, {
											default: withCtx(() => [createTextVNode(toDisplayString(item.typeDisplayName), 1)]),
											_: 2
										}, 1024)], 2)]),
										_: 2
									}, 1032, [
										"data-test-id",
										"label",
										"value"
									]);
								}), 128))]),
								_: 2
							}, 1032, [
								"model-value",
								"placeholder",
								"popper-class",
								"class",
								"onUpdate:modelValue"
							]), isCredentialResolvable(type.name) ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.dynamicIndicator)
							}, [createVNode(unref(N8nTooltip_default), { placement: "top" }, {
								content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentials.dynamic.tooltip")), 1)]),
								default: withCtx(() => [createVNode(unref(N8nBadge_default), {
									theme: "tertiary",
									class: "pl-3xs pr-3xs",
									"data-test-id": "node-credential-dynamic-icon"
								}, {
									default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.dynamicBadgeText) }, [createVNode(unref(N8nIcon_default), {
										icon: "key-round",
										size: "medium"
									}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("credentials.dynamic.badge")), 1)], 2)]),
									_: 1
								})]),
								_: 1
							})], 2)) : createCommentVNode("", true)], 2),
							getIssues(type.name).length && !__props.hideIssues ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.warning)
							}, [createVNode(unref(N8nTooltip_default), { placement: "top" }, {
								content: withCtx(() => [createVNode(TitledList_default, {
									title: `${unref(i18n).baseText("nodeCredentials.issues")}:`,
									items: getIssues(type.name)
								}, null, 8, ["title", "items"])]),
								default: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "triangle-alert" })]),
								_: 2
							}, 1024)], 2)) : createCommentVNode("", true),
							selected.value[type.name] && unref(isCredentialExisting)(type) ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.edit),
								"data-test-id": "credential-edit-button"
							}, [createVNode(unref(N8nIcon_default), {
								icon: "pen",
								class: "clickable",
								title: unref(i18n).baseText("nodeCredentials.updateCredential"),
								onClick: ($event) => editCredential(type.name)
							}, null, 8, ["title", "onClick"])], 2)) : createCommentVNode("", true)
						], 2)) : createCommentVNode("", true),
						showResolvableWarning(type.name) ? (openBlock(), createBlock(unref(N8nNotice_default), {
							key: 5,
							theme: "warning",
							class: normalizeClass(_ctx.$style.resolverWarning),
							"data-test-id": "node-credential-resolver-warning"
						}, {
							default: withCtx(() => [createVNode(unref(I18nT), {
								keypath: "credentials.dynamic.warning.noResolver",
								tag: "span",
								scope: "global"
							}, createSlots({
								workflowSettings: withCtx(() => [createVNode(unref(N8nLink_default), { onClick: openWorkflowSettings }, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentials.dynamic.warning.noResolver.workflowSettings")), 1)]),
									_: 1
								})]),
								_: 2
							}, [void 0]), 1024)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)
					]),
					_: 2
				}, [_ctx.$slots["label-postfix"] ? {
					name: "options",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "label-postfix")]),
					key: "0"
				} : void 0]), 1032, ["label"])]);
			}), 128))], 2)) : createCommentVNode("", true);
		};
	}
});
var NodeCredentials_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1pxsw_125",
	selectPopper: "_selectPopper_1pxsw_132",
	newCredential: "_newCredential_1pxsw_135",
	warning: "_warning_1pxsw_144",
	edit: "_edit_1pxsw_150",
	input: "_input_1pxsw_162",
	selectContainer: "_selectContainer_1pxsw_167",
	hasIssues: "_hasIssues_1pxsw_172 _input_1pxsw_162",
	credentialOption: "_credentialOption_1pxsw_177",
	credentialOptionName: "_credentialOptionName_1pxsw_182",
	dynamicIcon: "_dynamicIcon_1pxsw_188",
	selectWithDynamic: "_selectWithDynamic_1pxsw_192",
	dynamicIndicator: "_dynamicIndicator_1pxsw_196",
	dynamicBadgeText: "_dynamicBadgeText_1pxsw_204",
	resolverWarning: "_resolverWarning_1pxsw_212",
	quickConnectContainer: "_quickConnectContainer_1pxsw_241",
	setupManuallyContainer: "_setupManuallyContainer_1pxsw_250",
	setupManuallyOr: "_setupManuallyOr_1pxsw_256",
	setupManuallyLink: "_setupManuallyLink_1pxsw_260",
	standardEmptyContainer: "_standardEmptyContainer_1pxsw_267",
	emptySelect: "_emptySelect_1pxsw_274"
};
var NodeCredentials_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeCredentials_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCredentials_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TitledList_default as a, GoogleAuthButton_default as i, useNodeCredentialOptions as n, QuickConnectButton_default as r, NodeCredentials_default as t };

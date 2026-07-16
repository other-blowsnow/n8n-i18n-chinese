import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, W as nextTick, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CEUyFjtd.js";
import { Tt as N8nOption_default, Ya as N8nIcon_default, qa as N8nText_default, wt as N8nSelect_default, zi as N8nTooltip_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/features/credentials/components/CredentialPicker/CredentialsDropdown.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["disabled"];
var CredentialsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialsDropdown",
	props: {
		credentialOptions: {},
		selectedCredentialId: {},
		permissions: {},
		placeholder: {},
		loading: { type: Boolean },
		disabled: { type: Boolean },
		teleported: { type: Boolean }
	},
	emits: ["credentialSelected", "newCredential"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const selectRefs = ref(null);
		const filter = ref("");
		function matches(needle, haystack) {
			return haystack.toLocaleLowerCase().includes(needle.toLocaleLowerCase());
		}
		const filteredOptions = computed(() => {
			if (!filter.value) return props.credentialOptions;
			return props.credentialOptions.filter((option) => matches(filter.value, option.name) || option.homeProject?.name && matches(filter.value, option.homeProject.name));
		});
		const onFilter = (newFilter = "") => {
			filter.value = newFilter;
		};
		const closeSelect = () => {
			selectRefs.value?.innerSelect?.handleClose();
			selectRefs.value?.blur();
		};
		const onCredentialSelected = (credentialId) => {
			closeSelect();
			emit("credentialSelected", credentialId);
		};
		const onCreateNewCredential = async () => {
			closeSelect();
			await nextTick();
			emit("newCredential");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nSelect_default), {
				ref_key: "selectRefs",
				ref: selectRefs,
				size: "small",
				filterable: "",
				"filter-method": onFilter,
				"model-value": props.selectedCredentialId,
				placeholder: props.placeholder,
				loading: props.loading,
				disabled: props.disabled,
				teleported: props.teleported ?? false,
				"popper-class": _ctx.$style.selectPopper,
				"onUpdate:modelValue": onCredentialSelected
			}, {
				empty: withCtx(() => [..._cache[1] || (_cache[1] = [])]),
				footer: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					disabled: props.permissions.create,
					content: unref(i18n).baseText("nodeCredentials.createNew.permissionDenied"),
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("button", {
						type: "button",
						"data-test-id": "node-credentials-select-item-new",
						class: normalizeClass([_ctx.$style.newCredential]),
						disabled: !props.permissions.create,
						onClick: _cache[0] || (_cache[0] = ($event) => onCreateNewCredential())
					}, [createVNode(unref(N8nIcon_default), {
						size: "xsmall",
						icon: "plus"
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("nodeCredentials.createNew")), 1)], 10, _hoisted_1)]),
					_: 1
				}, 8, ["disabled", "content"])]),
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredOptions.value, (item) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: item.id,
						"data-test-id": `node-credentials-select-item-${item.id}`,
						label: item.name,
						value: item.id,
						onClick: closeSelect
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.credentialOption, "mt-2xs mb-2xs"]) }, [createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
							_: 2
						}, 1024), item.homeProject ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(`${item.typeDisplayName} - ${item.homeProject?.name}`), 1)]),
							_: 2
						}, 1024)) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.typeDisplayName), 1)]),
							_: 2
						}, 1024))], 2)]),
						_: 2
					}, 1032, [
						"data-test-id",
						"label",
						"value"
					]);
				}), 128))]),
				_: 1
			}, 8, [
				"model-value",
				"placeholder",
				"loading",
				"disabled",
				"teleported",
				"popper-class"
			]);
		};
	}
});
var CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default = {
	selectPopper: "_selectPopper_178ar_125",
	newCredential: "_newCredential_178ar_128",
	credentialOption: "_credentialOption_178ar_137"
};
var CredentialsDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialsDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CredentialsDropdown_default as t };

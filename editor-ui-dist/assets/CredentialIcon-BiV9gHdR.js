import { $ as openBlock, N as defineComponent, S as computed, Wt as unref, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { z as N8nNodeIcon_default } from "./src-DPVdtlmI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { at as useCredentialsStore, qi as getThemedValue, r as useUIStore, w as useNodeTypesStore } from "./users.store-eIIFy_Qi.js";
import { t as useRootStore } from "./useRootStore-D7Ov37x3.js";
//#region src/features/credentials/components/CredentialIcon.vue?vue&type=script&setup=true&lang.ts
var CredentialIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialIcon",
	props: {
		credentialTypeName: {},
		size: {},
		theme: {}
	},
	setup(__props) {
		const props = __props;
		const credentialsStore = useCredentialsStore();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const nodeTypesStore = useNodeTypesStore();
		const credentialWithIcon = computed(() => getCredentialWithIcon(props.credentialTypeName));
		const theme = computed(() => props.theme ?? uiStore.appliedTheme);
		const nodeBasedIconUrl = computed(() => {
			const icon = getThemedValue(credentialWithIcon.value?.icon, theme.value);
			if (!icon?.startsWith("node:")) return null;
			return nodeTypesStore.getNodeType(icon.replace("node:", ""))?.iconUrl;
		});
		const iconSource = computed(() => {
			const themeIconUrl = getThemedValue(nodeBasedIconUrl.value ?? credentialWithIcon.value?.iconUrl, theme.value);
			if (!themeIconUrl) return;
			return rootStore.baseUrl + themeIconUrl;
		});
		const iconType = computed(() => {
			if (iconSource.value) return "file";
			else if (iconName.value) return "icon";
			return "unknown";
		});
		const iconName = computed(() => {
			const icon = getThemedValue(credentialWithIcon.value?.icon, uiStore.appliedTheme);
			if (!icon?.startsWith("fa:")) return void 0;
			return icon.replace("fa:", "");
		});
		const iconColor = computed(() => {
			const { iconColor: color } = credentialWithIcon.value ?? {};
			if (!color) return void 0;
			return `var(--node--icon--color--${color})`;
		});
		function getCredentialWithIcon(name) {
			if (!name) return null;
			const type = credentialsStore.getCredentialTypeByName(name);
			if (!type) return null;
			if (type.icon ?? type.iconUrl) return type;
			if (type.extends) {
				let parentCred = null;
				type.extends.forEach((credType) => {
					parentCred = getCredentialWithIcon(credType);
					if (parentCred !== null) return;
				});
				return parentCred;
			}
			return null;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeIcon_default), {
				class: normalizeClass(_ctx.$style.icon),
				type: iconType.value,
				size: __props.size ?? 26,
				src: iconSource.value,
				name: iconName.value,
				color: iconColor.value
			}, null, 8, [
				"class",
				"type",
				"size",
				"src",
				"name",
				"color"
			]);
		};
	}
});
var CredentialIcon_vue_vue_type_style_index_0_lang_module_default = { icon: "_icon_6l2me_125" };
var CredentialIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CredentialIcon_default as t };

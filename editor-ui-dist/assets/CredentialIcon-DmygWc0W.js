import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock, vn as normalizeClass } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { V as N8nNodeIcon_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Ai as getThemedValue, C as useNodeTypesStore, r as useUIStore, rt as useCredentialsStore } from "./users.store-qBZsmf9-.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
var CredentialIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialIcon",
	props: {
		credentialTypeName: {},
		size: {}
	},
	setup(__props) {
		const props = __props;
		const credentialsStore = useCredentialsStore();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const nodeTypesStore = useNodeTypesStore();
		const credentialWithIcon = computed(() => getCredentialWithIcon(props.credentialTypeName));
		const nodeBasedIconUrl = computed(() => {
			const icon$1 = getThemedValue(credentialWithIcon.value?.icon);
			if (!icon$1?.startsWith("node:")) return null;
			return nodeTypesStore.getNodeType(icon$1.replace("node:", ""))?.iconUrl;
		});
		const iconSource = computed(() => {
			const themeIconUrl = getThemedValue(nodeBasedIconUrl.value ?? credentialWithIcon.value?.iconUrl, uiStore.appliedTheme);
			if (!themeIconUrl) return;
			return rootStore.baseUrl + themeIconUrl;
		});
		const iconType = computed(() => {
			if (iconSource.value) return "file";
			else if (iconName.value) return "icon";
			return "unknown";
		});
		const iconName = computed(() => {
			const icon$1 = getThemedValue(credentialWithIcon.value?.icon, uiStore.appliedTheme);
			if (!icon$1?.startsWith("fa:")) return void 0;
			return icon$1.replace("fa:", "");
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
var CredentialIcon_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialIcon_vue_vue_type_style_index_0_lang_module_default }]]);
export { CredentialIcon_default as t };

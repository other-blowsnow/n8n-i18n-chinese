import { Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _n as normalizeClass, bt as withCtx, et as openBlock, m as withKeys, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CMopfp37.js";
import { Nn as N8nButton_default, Y as N8nInputLabel_default, _t as N8nInput_default } from "./src-B9lyFNPE.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-D09te2fm.js";
import "./icon-B8U-CfQv.js";
import "./overlay-CPmcXGrH.js";
import "./empty-BuGRxzl4.js";
import "./dialog-C7-JMpyx.js";
import { Li as useUIStore, t as useTelemetry } from "./useTelemetry-BnWkdL5v.js";
import { t as useToast } from "./useToast-CYEyObML.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { Ma as DATA_TABLE_DETAILS, Ya as PROJECT_DATA_TABLES } from "./constants-7lEZpYki.js";
import "./merge-9-BpYlRV.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BSVJx8HC.js";
import "./useExternalHooks-BhwArgDu.js";
import { t as useDataTableStore } from "./dataTable.store-D2c_HVY6.js";
import { t as Modal_default } from "./Modal-B9HI4wPh.js";
var AddDataTableModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AddDataTableModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		const dataTableStore = useDataTableStore();
		const uiStore = useUIStore();
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const toast = useToast();
		const telemetry = useTelemetry();
		const dataTableName = ref("");
		const inputRef = ref(null);
		onMounted(() => {
			setTimeout(() => {
				inputRef.value?.focus();
				inputRef.value?.select();
			}, 0);
		});
		const onSubmit = async () => {
			try {
				const newDataTable = await dataTableStore.createDataTable(dataTableName.value, route.params.projectId);
				telemetry.track("User created data table", {
					data_table_id: newDataTable.id,
					data_table_project_id: newDataTable.project?.id
				});
				dataTableName.value = "";
				uiStore.closeModal(props.modalName);
				router.push({
					name: DATA_TABLE_DETAILS,
					params: { id: newDataTable.id }
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("dataTable.add.error"));
			}
		};
		const onCancel = () => {
			uiStore.closeModal(props.modalName);
			redirectToDataTables();
		};
		const redirectToDataTables = () => {
			router.replace({ name: PROJECT_DATA_TABLES });
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				center: true,
				width: "540px",
				"before-close": redirectToDataTables
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("h2", null, toDisplayString(unref(i18n).baseText("dataTable.add.title")), 1)], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("dataTable.add.input.name.label"),
					required: true,
					"input-name": "dataTableName"
				}, {
					default: withCtx(() => [createVNode(unref(N8nInput_default), {
						ref_key: "inputRef",
						ref: inputRef,
						modelValue: dataTableName.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dataTableName.value = $event),
						type: "text",
						placeholder: unref(i18n).baseText("dataTable.add.input.name.placeholder"),
						"data-test-id": "data-table-name-input",
						name: "dataTableName",
						onKeydown: withKeys(onSubmit, ["enter"])
					}, null, 8, ["modelValue", "placeholder"])]),
					_: 1
				}, 8, ["label"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					disabled: !dataTableName.value,
					label: unref(i18n).baseText("generic.create"),
					"data-test-id": "confirm-add-data-table-button",
					onClick: onSubmit
				}, null, 8, ["disabled", "label"]), createVNode(unref(N8nButton_default), {
					type: "secondary",
					label: unref(i18n).baseText("generic.cancel"),
					"data-test-id": "cancel-add-data-table-button",
					onClick: onCancel
				}, null, 8, ["label"])], 2)]),
				_: 1
			}, 8, ["name"]);
		};
	}
});
var AddDataTableModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_f03xn_123",
	content: "_content_f03xn_127",
	footer: "_footer_f03xn_132"
};
var AddDataTableModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AddDataTableModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AddDataTableModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { AddDataTableModal_default as default };

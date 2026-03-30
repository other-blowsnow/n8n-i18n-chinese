import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, j as createVNode, m as withKeys, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import { $i as N8nIcon_default, Et as N8nOption_default, Fi as Input_default, Qi as N8nButton_default, Tt as N8nSelect_default, Zi as N8nText_default, _t as useRouter, gt as useRoute, vt as N8nInputLabel_default, yt as Checkbox_default } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { t as ElUpload } from "./upload-Do4APBYH.js";
import { Ln as useToast, pr as useTelemetry, r as useUIStore } from "./users.store-DNsxOyr9.js";
import { n as ElRadioGroup, t as ElRadio } from "./radio-B-NNYMNn.js";
import { Lr as DATA_TABLE_DETAILS, ri as PROJECT_DATA_TABLES, ua as DATA_TABLE_SYSTEM_COLUMNS, yi as dataTableColumnNameSchema } from "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import { t as useDataTableStore } from "./dataTable.store-AFhslfDW.js";
import { t as Modal_default } from "./Modal-CnoaU5im.js";
var _hoisted_1 = ["aria-label"];
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
		const creationMode = ref("select");
		const dataTableName = ref("");
		const inputRef = ref(null);
		const selectedFile = ref(null);
		const uploadedFileId = ref(null);
		const uploadedFileName = ref("");
		const csvColumns = ref([]);
		const csvRowCount = ref(0);
		const csvColumnCount = ref(0);
		const isLoading = ref(false);
		const hasHeaders = ref(true);
		const isUploadHovered = ref(false);
		const allColumnTypeOptions = [
			{
				label: "String",
				value: "string"
			},
			{
				label: "Number",
				value: "number"
			},
			{
				label: "Boolean",
				value: "boolean"
			},
			{
				label: "Datetime",
				value: "date"
			}
		];
		const isColumnType = (value) => {
			return allColumnTypeOptions.some((option) => option.value === value);
		};
		const getColumnTypeOptions = (compatibleTypes) => {
			if (!compatibleTypes || compatibleTypes.length === 0) return allColumnTypeOptions;
			return allColumnTypeOptions.filter((option) => compatibleTypes.includes(option.value));
		};
		const validateColumnName = (columnName) => {
			if (DATA_TABLE_SYSTEM_COLUMNS.includes(columnName)) return i18n.baseText("dataTable.import.systemColumnName", { interpolate: { columnName } });
			if (!dataTableColumnNameSchema.safeParse(columnName).success) return i18n.baseText("dataTable.import.invalidColumnName");
		};
		const includedColumns = computed(() => csvColumns.value.filter((col) => col.included));
		const hasValidationErrors = computed(() => {
			if (creationMode.value !== "import") return false;
			return includedColumns.value.some((column) => column.error !== void 0);
		});
		const hasDuplicateNames = computed(() => {
			if (creationMode.value !== "import") return false;
			const names = includedColumns.value.map((col) => col.name.toLowerCase());
			return names.length !== new Set(names).size;
		});
		const hasNoIncludedColumns = computed(() => {
			if (creationMode.value !== "import") return false;
			return includedColumns.value.length === 0;
		});
		const modalTitle = computed(() => {
			if (creationMode.value === "import") return "Set data table columns";
			return i18n.baseText("dataTable.add.title");
		});
		const isCreateDisabled = computed(() => {
			if (creationMode.value === "import") return !dataTableName.value || !uploadedFileId.value || hasValidationErrors.value || hasDuplicateNames.value || hasNoIncludedColumns.value;
			return true;
		});
		onMounted(() => {
			setTimeout(() => {
				inputRef.value?.focus();
				inputRef.value?.select();
			}, 0);
		});
		const selectedOption = ref("scratch");
		const proceedFromSelect = async () => {
			if (!selectedOption.value || !dataTableName.value || isLoading.value) return;
			if (selectedOption.value === "scratch") await onSubmit();
			else if (selectedOption.value === "import") {
				if (!selectedFile.value) return;
				await uploadFile();
			}
		};
		const revalidateAllColumns = () => {
			csvColumns.value.forEach((col, idx) => {
				if (!col.included) {
					col.error = void 0;
					return;
				}
				const validationError = validateColumnName(col.name);
				if (csvColumns.value.some((c, i) => i !== idx && c.included && c.name.toLowerCase() === col.name.toLowerCase()) && !validationError) col.error = i18n.baseText("dataTable.import.duplicateColumnName");
				else col.error = validationError;
			});
		};
		const onColumnNameChange = (index) => {
			if (!csvColumns.value[index]) return;
			revalidateAllColumns();
		};
		const onColumnIncludedChange = () => {
			revalidateAllColumns();
		};
		const reset = (clearTableName = false) => {
			if (clearTableName) dataTableName.value = "";
			selectedFile.value = null;
			uploadedFileId.value = null;
			uploadedFileName.value = "";
			csvColumns.value = [];
			csvRowCount.value = 0;
			csvColumnCount.value = 0;
			selectedOption.value = "scratch";
			creationMode.value = "select";
		};
		const handleFileChange = (uploadFile$1) => {
			if (uploadFile$1.raw) selectedFile.value = uploadFile$1.raw;
		};
		const uploadFile = async () => {
			if (!selectedFile.value) return;
			isLoading.value = true;
			creationMode.value = "import";
			try {
				const uploadResponse = await dataTableStore.uploadCsvFile(selectedFile.value, hasHeaders.value);
				uploadedFileId.value = uploadResponse.id;
				uploadedFileName.value = uploadResponse.originalName;
				csvRowCount.value = uploadResponse.rowCount;
				csvColumnCount.value = uploadResponse.columnCount;
				csvColumns.value = uploadResponse.columns.map((col) => {
					const compatibleTypes = (col.compatibleTypes || [col.type]).filter(isColumnType);
					const sanitizedName = col.name.replace(/\s+/g, "_");
					return {
						name: sanitizedName,
						type: isColumnType(col.type) ? col.type : "string",
						compatibleTypes,
						typeOptions: getColumnTypeOptions(compatibleTypes),
						error: validateColumnName(sanitizedName),
						included: true,
						csvColumnName: col.name
					};
				});
				if (!dataTableName.value) dataTableName.value = selectedFile.value.name.replace(/\.csv$/i, "");
			} catch (error) {
				toast.showError(error, i18n.baseText("dataTable.upload.error"));
				reset();
			} finally {
				isLoading.value = false;
			}
		};
		const onSubmit = async () => {
			isLoading.value = true;
			try {
				let newDataTable;
				if (selectedOption.value === "scratch") newDataTable = await dataTableStore.createDataTable(dataTableName.value, route.params.projectId);
				else if (creationMode.value === "import" && uploadedFileId.value) {
					const hasColumnChanges = csvColumns.value.some((col) => !col.included || col.name !== col.csvColumnName.replace(/\s+/g, "_"));
					newDataTable = await dataTableStore.createDataTable(dataTableName.value, route.params.projectId, includedColumns.value.map((col) => ({
						name: col.name,
						type: col.type,
						...hasColumnChanges ? { csvColumnName: col.csvColumnName } : {}
					})), uploadedFileId.value, hasHeaders.value);
				}
				if (newDataTable) {
					telemetry.track("User created data table", {
						data_table_id: newDataTable.id,
						data_table_project_id: newDataTable.project?.id,
						creation_mode: selectedOption.value
					});
					reset(true);
					uiStore.closeModal(props.modalName);
					router.push({
						name: DATA_TABLE_DETAILS,
						params: { id: newDataTable.id }
					});
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("dataTable.add.error"));
			} finally {
				isLoading.value = false;
			}
		};
		const goBack = () => {
			creationMode.value = "select";
		};
		const redirectToDataTables = () => {
			router.replace({ name: PROJECT_DATA_TABLES });
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				center: true,
				width: creationMode.value === "import" ? "700px" : "540px",
				"min-height": creationMode.value === "import" ? "600px" : void 0,
				"before-close": redirectToDataTables
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("h2", null, toDisplayString(modalTitle.value), 1)], 2)]),
				content: withCtx(() => [creationMode.value === "select" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.selectionContent)
				}, [
					createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("dataTable.add.input.name.label"),
						required: true,
						"input-name": "dataTableNameSelect"
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							ref_key: "inputRef",
							ref: inputRef,
							modelValue: dataTableName.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dataTableName.value = $event),
							type: "text",
							placeholder: unref(i18n).baseText("dataTable.add.input.name.placeholder"),
							"data-test-id": "data-table-name-input-select",
							name: "dataTableNameSelect",
							onKeydown: withKeys(proceedFromSelect, ["enter"])
						}, null, 8, ["modelValue", "placeholder"])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(ElRadioGroup), {
						modelValue: selectedOption.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedOption.value = $event),
						class: normalizeClass(_ctx.$style.radioGroup)
					}, {
						default: withCtx(() => [createVNode(unref(ElRadio), {
							label: "scratch",
							"data-test-id": "create-from-scratch-option"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.add.fromScratch")), 1)]),
							_: 1
						}), createVNode(unref(ElRadio), {
							label: "import",
							"data-test-id": "import-csv-option"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.add.importCsv")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue", "class"]),
					selectedOption.value === "import" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.uploadSection)
					}, [createVNode(unref(ElUpload), {
						class: normalizeClass(_ctx.$style.uploadDemo),
						drag: "",
						"auto-upload": false,
						"show-file-list": false,
						accept: ".csv",
						"on-change": handleFileChange,
						onMouseenter: _cache[2] || (_cache[2] = ($event) => isUploadHovered.value = true),
						onMouseleave: _cache[3] || (_cache[3] = ($event) => isUploadHovered.value = false)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "file",
							size: 24,
							color: isUploadHovered.value ? "text-dark" : "text-light",
							class: normalizeClass(_ctx.$style.uploadIcon)
						}, null, 8, ["color", "class"]), selectedFile.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							color: isUploadHovered.value ? "text-dark" : "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(selectedFile.value?.name), 1)]),
							_: 1
						}, 8, ["color"])) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "medium",
							color: isUploadHovered.value ? "text-dark" : "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.upload.dropOrClick")), 1)]),
							_: 1
						}, 8, ["color"]))]),
						_: 1
					}, 8, ["class"]), createVNode(unref(Checkbox_default), {
						modelValue: hasHeaders.value,
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => hasHeaders.value = $event),
						label: unref(i18n).baseText("dataTable.upload.hasHeaders"),
						"data-test-id": "has-headers-checkbox"
					}, null, 8, ["modelValue", "label"])], 2)) : createCommentVNode("", true)
				], 2)) : creationMode.value === "import" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.content)
				}, [isLoading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.uploadingMessage)
				}, toDisplayString(unref(i18n).baseText("dataTable.upload.uploading")), 3)) : !uploadedFileId.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.uploadingMessage)
				}, toDisplayString(unref(i18n).baseText("dataTable.upload.selectFile")), 3)) : uploadedFileId.value && csvColumns.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.importContent)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.successNotice) }, toDisplayString(unref(i18n).baseText("dataTable.upload.success", {
						adjustToNumber: csvRowCount.value,
						interpolate: {
							fileName: uploadedFileName.value,
							columnCount: csvColumnCount.value,
							rowCount: csvRowCount.value
						}
					})), 3),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnHeaders) }, [
						createBaseVNode("div", { "aria-label": unref(i18n).baseText("dataTable.import.includeColumn") }, null, 8, _hoisted_1),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnHeaderLabel) }, toDisplayString(unref(i18n).baseText("dataTable.import.columnName")), 3),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnHeaderLabel) }, toDisplayString(unref(i18n).baseText("dataTable.import.columnType")), 3)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnsContainer) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(csvColumns.value, (column, index) => {
						return openBlock(), createElementBlock("div", {
							key: index,
							class: normalizeClass(_ctx.$style.columnItem)
						}, [
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnCheckboxWrapper) }, [createVNode(unref(Checkbox_default), {
								modelValue: column.included,
								"onUpdate:modelValue": [($event) => column.included = $event, onColumnIncludedChange],
								"data-test-id": `column-include-${index}`
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"data-test-id"
							])], 2),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnInputWrapper) }, [createVNode(unref(Input_default), {
								modelValue: column.name,
								"onUpdate:modelValue": [($event) => column.name = $event, ($event) => onColumnNameChange(index)],
								placeholder: unref(i18n).baseText("dataTable.import.columnNamePlaceholder"),
								"data-test-id": `column-name-${index}`,
								disabled: !column.included,
								class: normalizeClass({ [_ctx.$style.inputError]: column.error })
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"placeholder",
								"data-test-id",
								"disabled",
								"class"
							]), column.error ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.columnErrorMessage)
							}, toDisplayString(column.error), 3)) : createCommentVNode("", true)], 2),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTypeWrapper) }, [createVNode(unref(N8nSelect_default), {
								modelValue: column.type,
								"onUpdate:modelValue": ($event) => column.type = $event,
								disabled: !column.included || column.typeOptions.length === 1,
								class: normalizeClass({ "column-type-excluded": !column.included }),
								"data-test-id": `column-type-${index}`
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(column.typeOptions, (option) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: option.value,
										value: option.value,
										label: option.label
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 2
							}, 1032, [
								"modelValue",
								"onUpdate:modelValue",
								"disabled",
								"class",
								"data-test-id"
							])], 2)
						], 2);
					}), 128))], 2)
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [
					creationMode.value === "select" ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "subtle",
						size: "large",
						label: unref(i18n).baseText("generic.cancel"),
						"data-test-id": "cancel-select-button",
						onClick: redirectToDataTables
					}, null, 8, ["label"])) : createCommentVNode("", true),
					creationMode.value === "select" ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						loading: isLoading.value,
						size: "large",
						disabled: !dataTableName.value || !selectedOption.value || selectedOption.value === "import" && !selectedFile.value,
						label: unref(i18n).baseText("generic.create"),
						"data-test-id": "proceed-from-select-button",
						onClick: proceedFromSelect
					}, null, 8, [
						"loading",
						"disabled",
						"label"
					])) : createCommentVNode("", true),
					creationMode.value === "import" ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 2,
						variant: "subtle",
						size: "large",
						label: unref(i18n).baseText("generic.back"),
						"data-test-id": "back-button",
						onClick: goBack
					}, null, 8, ["label"])) : createCommentVNode("", true),
					creationMode.value === "import" ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 3,
						loading: isLoading.value,
						size: "large",
						disabled: isCreateDisabled.value,
						label: unref(i18n).baseText("generic.create"),
						"data-test-id": "confirm-add-data-table-button",
						onClick: onSubmit
					}, null, 8, [
						"loading",
						"disabled",
						"label"
					])) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, [
				"name",
				"width",
				"min-height"
			]);
		};
	}
});
var AddDataTableModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_t240m_125",
	content: "_content_t240m_129",
	selectionContent: "_selectionContent_t240m_134",
	radioGroup: "_radioGroup_t240m_140",
	uploadSection: "_uploadSection_t240m_172",
	uploadingMessage: "_uploadingMessage_t240m_178",
	importContent: "_importContent_t240m_184",
	successNotice: "_successNotice_t240m_190",
	columnHeaders: "_columnHeaders_t240m_199",
	columnHeaderLabel: "_columnHeaderLabel_t240m_207",
	columnsContainer: "_columnsContainer_t240m_213",
	columnItem: "_columnItem_t240m_222",
	columnCheckboxWrapper: "_columnCheckboxWrapper_t240m_229",
	columnInputWrapper: "_columnInputWrapper_t240m_236",
	columnTypeWrapper: "_columnTypeWrapper_t240m_242",
	inputError: "_inputError_t240m_255",
	columnErrorMessage: "_columnErrorMessage_t240m_262",
	footer: "_footer_t240m_268",
	fileSelectedContainer: "_fileSelectedContainer_t240m_275",
	uploadDemo: "_uploadDemo_t240m_282",
	uploadIcon: "_uploadIcon_t240m_308",
	fileName: "_fileName_t240m_312"
};
var AddDataTableModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AddDataTableModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AddDataTableModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { AddDataTableModal_default as default };

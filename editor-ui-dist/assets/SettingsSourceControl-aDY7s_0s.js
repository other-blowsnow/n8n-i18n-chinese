import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Pt as reactive, Sn as toDisplayString, T as createBlock, Z as onMounted, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { _t as I18nT, gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { B as N8nFormInput_default, Dt as N8nActionBox_default, E as N8nNotice_default, Fn as N8nCallout_default, J as N8nCheckbox_default, K as N8nColorPicker_default, Ln as N8nButton_default, Pn as N8nHeading_default, vt as N8nTooltip_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import { Dn as useSourceControlStore, Tn as useDocumentTitle, Wn as useLoadingService } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { No as MODAL_CONFIRM } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./useClipboard-CDW2KXIc.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import { t as CopyInput_default } from "./CopyInput-EV0b_4Vy.js";
var _hoisted_1 = {
	key: 0,
	"data-test-id": "source-control-content-licensed"
};
var _hoisted_2 = ["href"];
var _hoisted_3 = { for: "connectionType" };
var _hoisted_4 = { for: "repoUrl" };
var _hoisted_5 = { for: "httpsUsername" };
var _hoisted_6 = { for: "httpsPassword" };
var _hoisted_7 = ["href"];
var _hoisted_8 = {
	key: 5,
	"data-test-id": "source-control-connected-content"
};
var _hoisted_9 = ["href"];
var SettingsSourceControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSourceControl",
	setup(__props) {
		const locale = useI18n();
		const sourceControlStore = useSourceControlStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const toast = useToast();
		const message = useMessage();
		const documentTitle = useDocumentTitle();
		const loadingService = useLoadingService();
		const isConnected = ref(false);
		const connectionType = ref("ssh");
		const httpsUsername = ref("");
		const httpsPassword = ref("");
		const branchNameOptions = computed(() => sourceControlStore.preferences.branches.map((branch) => ({
			value: branch,
			label: branch
		})));
		const connectionTypeOptions = [{
			value: "ssh",
			label: "SSH"
		}, {
			value: "https",
			label: "HTTPS"
		}];
		const onConnect = async () => {
			loadingService.startLoading();
			loadingService.setLoadingText(locale.baseText("settings.sourceControl.loading.connecting"));
			try {
				const connectionData = {
					repositoryUrl: sourceControlStore.preferences.repositoryUrl,
					connectionType: connectionType.value
				};
				if (connectionType.value === "https") {
					connectionData.httpsUsername = httpsUsername.value;
					connectionData.httpsPassword = httpsPassword.value;
				}
				await sourceControlStore.savePreferences(connectionData);
				await sourceControlStore.getBranches();
				isConnected.value = true;
				toast.showMessage({
					title: locale.baseText("settings.sourceControl.toast.connected.title"),
					message: locale.baseText("settings.sourceControl.toast.connected.message"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.toast.connected.error"));
			}
			loadingService.stopLoading();
		};
		const onDisconnect = async () => {
			try {
				if (await message.confirm(locale.baseText("settings.sourceControl.modals.disconnect.message"), locale.baseText("settings.sourceControl.modals.disconnect.title"), {
					confirmButtonText: locale.baseText("settings.sourceControl.modals.disconnect.confirm"),
					cancelButtonText: locale.baseText("settings.sourceControl.modals.disconnect.cancel")
				}) === "confirm") {
					loadingService.startLoading();
					await sourceControlStore.disconnect(true);
					isConnected.value = false;
					httpsUsername.value = "";
					httpsPassword.value = "";
					toast.showMessage({
						title: locale.baseText("settings.sourceControl.toast.disconnected.title"),
						message: locale.baseText("settings.sourceControl.toast.disconnected.message"),
						type: "success"
					});
				}
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.toast.disconnected.error"));
			}
			loadingService.stopLoading();
		};
		const onSave = async () => {
			loadingService.startLoading();
			try {
				await sourceControlStore.updatePreferences({
					branchName: sourceControlStore.preferences.branchName,
					branchReadOnly: sourceControlStore.preferences.branchReadOnly,
					branchColor: sourceControlStore.preferences.branchColor
				});
				toast.showMessage({
					title: locale.baseText("settings.sourceControl.saved.title"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.saved.error"));
			}
			loadingService.stopLoading();
		};
		const onSelect = (b) => {
			if (b === sourceControlStore.preferences.branchName) return;
			sourceControlStore.preferences.branchName = b;
		};
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("source-control", "upgrade-source-control");
		};
		const initialize = async () => {
			await sourceControlStore.getPreferences();
			if (sourceControlStore.preferences.connected) {
				isConnected.value = true;
				connectionType.value = sourceControlStore.preferences.connectionType || "ssh";
				sourceControlStore.getBranches();
			}
		};
		onMounted(async () => {
			documentTitle.set(locale.baseText("settings.sourceControl.title"));
			if (!sourceControlStore.isEnterpriseSourceControlEnabled) return;
			await initialize();
		});
		const formValidationStatus = reactive({
			repoUrl: false,
			keyGeneratorType: false,
			httpsUsername: false,
			httpsPassword: false
		});
		function onValidate(key, value) {
			formValidationStatus[key] = value;
		}
		const repoUrlValidationRules = computed(() => {
			const baseRules = [{ name: "REQUIRED" }];
			if (connectionType.value === "ssh") baseRules.push({
				name: "MATCH_REGEX",
				config: {
					regex: /^(?:git@|ssh:\/\/git@|[\w-]+@)(?:[\w.-]+|\[[0-9a-fA-F:]+])(?::\d+)?[:\/][\w\-~.]+(?:\/[\w\-~.]+)*(?:\.git)?(?:\/.*)?$/,
					message: locale.baseText("settings.sourceControl.repoUrlInvalid")
				}
			});
			else baseRules.push({
				name: "MATCH_REGEX",
				config: {
					regex: /^https:\/\/.+$/,
					message: locale.baseText("settings.sourceControl.enterValidHttpsUrl")
				}
			});
			return baseRules;
		});
		const keyGeneratorTypeValidationRules = [{ name: "REQUIRED" }];
		const httpsCredentialValidationRules = [{ name: "REQUIRED" }];
		const validForConnection = computed(() => {
			if (connectionType.value === "ssh") return formValidationStatus.repoUrl;
			else return formValidationStatus.repoUrl && formValidationStatus.httpsUsername && formValidationStatus.httpsPassword;
		});
		const branchNameValidationRules = [{ name: "REQUIRED" }];
		async function refreshSshKey() {
			try {
				if (await message.confirm(locale.baseText("settings.sourceControl.modals.refreshSshKey.message"), locale.baseText("settings.sourceControl.modals.refreshSshKey.title"), {
					confirmButtonText: locale.baseText("settings.sourceControl.modals.refreshSshKey.confirm"),
					cancelButtonText: locale.baseText("settings.sourceControl.modals.refreshSshKey.cancel")
				}) === "confirm") {
					await sourceControlStore.generateKeyPair(sourceControlStore.preferences.keyGeneratorType);
					toast.showMessage({
						title: locale.baseText("settings.sourceControl.refreshSshKey.successful.title"),
						type: "success"
					});
				}
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.refreshSshKey.error.title"));
			}
		}
		const refreshBranches$1 = async () => {
			try {
				await sourceControlStore.getBranches();
				toast.showMessage({
					title: locale.baseText("settings.sourceControl.refreshBranches.success"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.refreshBranches.error"));
			}
		};
		const onSelectSshKeyType = (value) => {
			const sshKeyType = value;
			if (sshKeyType === sourceControlStore.preferences.keyGeneratorType) return;
			sourceControlStore.preferences.keyGeneratorType = sshKeyType;
		};
		watch(connectionType, () => {
			formValidationStatus.repoUrl = false;
			formValidationStatus.httpsUsername = false;
			formValidationStatus.httpsPassword = false;
			if (!isConnected.value) sourceControlStore.preferences.repositoryUrl = "";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nHeading_default), {
				size: "2xlarge",
				tag: "h1"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.title")), 1)]),
				_: 1
			}), unref(sourceControlStore).isEnterpriseSourceControlEnabled ? (openBlock(), createElementBlock("div", _hoisted_1, [
				createVNode(unref(N8nCallout_default), {
					theme: "secondary",
					icon: "info",
					class: "mt-2xl mb-l"
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "settings.sourceControl.description",
						tag: "span",
						scope: "global"
					}, {
						link: withCtx(() => [createBaseVNode("a", {
							href: unref(locale).baseText("settings.sourceControl.docs.url"),
							target: "_blank"
						}, toDisplayString(unref(locale).baseText("settings.sourceControl.description.link")), 9, _hoisted_2)]),
						_: 1
					})]),
					_: 1
				}),
				createVNode(unref(N8nHeading_default), {
					size: "xlarge",
					tag: "h2",
					class: "mb-s"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.gitConfig")), 1)]),
					_: 1
				}),
				!isConnected.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.group)
				}, [createBaseVNode("label", _hoisted_3, toDisplayString(unref(locale).baseText("settings.sourceControl.connectionType")), 1), createVNode(unref(N8nFormInput_default), {
					id: "connectionType",
					modelValue: connectionType.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => connectionType.value = $event),
					label: "",
					type: "select",
					name: "connectionType",
					options: connectionTypeOptions,
					"data-test-id": "source-control-connection-type-select"
				}, null, 8, ["modelValue"])], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					createBaseVNode("label", _hoisted_4, toDisplayString(connectionType.value === "ssh" ? unref(locale).baseText("settings.sourceControl.sshRepoUrl") : unref(locale).baseText("settings.sourceControl.httpsRepoUrl")), 1),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.groupFlex) }, [createVNode(unref(N8nFormInput_default), {
						id: "repoUrl",
						modelValue: unref(sourceControlStore).preferences.repositoryUrl,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(sourceControlStore).preferences.repositoryUrl = $event),
						label: "",
						class: "ml-0",
						name: "repoUrl",
						"validate-on-blur": "",
						"validation-rules": repoUrlValidationRules.value,
						disabled: isConnected.value,
						placeholder: connectionType.value === "ssh" ? unref(locale).baseText("settings.sourceControl.sshRepoUrlPlaceholder") : unref(locale).baseText("settings.sourceControl.httpsRepoUrlPlaceholder"),
						onValidate: _cache[2] || (_cache[2] = (value) => onValidate("repoUrl", value))
					}, null, 8, [
						"modelValue",
						"validation-rules",
						"disabled",
						"placeholder"
					]), isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.disconnectButton),
						type: "tertiary",
						size: "large",
						icon: "trash-2",
						"data-test-id": "source-control-disconnect-button",
						onClick: onDisconnect
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.disconnect")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)], 2),
					!isConnected.value && connectionType.value === "ssh" ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 0,
						type: "info",
						class: "mt-s"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.sshFormatNotice")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					!isConnected.value && connectionType.value === "https" ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 1,
						type: "info",
						class: "mt-s"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.httpsFormatNotice")), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2),
				connectionType.value === "https" && !isConnected.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.group)
				}, [createBaseVNode("label", _hoisted_5, toDisplayString(unref(locale).baseText("settings.sourceControl.httpsUsername")), 1), createVNode(unref(N8nFormInput_default), {
					id: "httpsUsername",
					modelValue: httpsUsername.value,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => httpsUsername.value = $event),
					label: "",
					name: "httpsUsername",
					type: "text",
					"validate-on-blur": "",
					"validation-rules": httpsCredentialValidationRules,
					placeholder: unref(locale).baseText("settings.sourceControl.httpsUsernamePlaceholder"),
					onValidate: _cache[4] || (_cache[4] = (value) => onValidate("httpsUsername", value))
				}, null, 8, ["modelValue", "placeholder"])], 2)) : createCommentVNode("", true),
				connectionType.value === "https" && !isConnected.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.group)
				}, [
					createBaseVNode("label", _hoisted_6, toDisplayString(unref(locale).baseText("settings.sourceControl.httpsPersonalAccessToken")), 1),
					createVNode(unref(N8nFormInput_default), {
						id: "httpsPassword",
						modelValue: httpsPassword.value,
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => httpsPassword.value = $event),
						label: "",
						name: "httpsPassword",
						type: "password",
						"validate-on-blur": "",
						"validation-rules": httpsCredentialValidationRules,
						placeholder: unref(locale).baseText("settings.sourceControl.httpsPersonalAccessTokenPlaceholder"),
						onValidate: _cache[6] || (_cache[6] = (value) => onValidate("httpsPassword", value))
					}, null, 8, ["modelValue", "placeholder"]),
					createVNode(unref(N8nNotice_default), {
						type: "warning",
						class: "mt-s"
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "settings.sourceControl.httpsWarningNotice",
							tag: "span",
							scope: "global"
						}, {
							strong: withCtx(() => [createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("settings.sourceControl.httpsWarningNotice.strong")), 1)]),
							repo: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("code", null, "repo", -1)])),
							publicRepo: withCtx(() => _cache[12] || (_cache[12] = [createBaseVNode("code", null, "public_repo", -1)])),
							_: 1
						})]),
						_: 1
					})
				], 2)) : createCommentVNode("", true),
				connectionType.value === "ssh" && unref(sourceControlStore).preferences.publicKey ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.group)
				}, [
					createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.sshKey")), 1),
					createBaseVNode("div", { class: normalizeClass({ [_ctx.$style.sshInput]: !isConnected.value }) }, [
						!isConnected.value ? (openBlock(), createBlock(unref(N8nFormInput_default), {
							key: 0,
							id: "keyGeneratorType",
							class: normalizeClass(_ctx.$style.sshKeyTypeSelect),
							label: "",
							type: "select",
							name: "keyGeneratorType",
							"data-test-id": "source-control-ssh-key-type-select",
							"validate-on-blur": "",
							"validation-rules": keyGeneratorTypeValidationRules,
							options: unref(sourceControlStore).sshKeyTypesWithLabel,
							"model-value": unref(sourceControlStore).preferences.keyGeneratorType,
							onValidate: _cache[7] || (_cache[7] = (value) => onValidate("keyGeneratorType", value)),
							"onUpdate:modelValue": onSelectSshKeyType
						}, null, 8, [
							"class",
							"options",
							"model-value"
						])) : createCommentVNode("", true),
						createVNode(CopyInput_default, {
							class: normalizeClass(_ctx.$style.copyInput),
							collapse: "",
							size: "medium",
							value: unref(sourceControlStore).preferences.publicKey,
							"copy-button-text": unref(locale).baseText("generic.clickToCopy")
						}, null, 8, [
							"class",
							"value",
							"copy-button-text"
						]),
						!isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							size: "large",
							type: "tertiary",
							icon: "refresh-cw",
							"data-test-id": "source-control-refresh-ssh-key-button",
							onClick: refreshSshKey
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.refreshSshKey")), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					], 2),
					createVNode(unref(N8nNotice_default), {
						type: "info",
						class: "mt-s"
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "settings.sourceControl.sshKeyDescription",
							tag: "span",
							scope: "global"
						}, {
							link: withCtx(() => [createBaseVNode("a", {
								href: unref(locale).baseText("settings.sourceControl.docs.setup.ssh.url"),
								target: "_blank"
							}, toDisplayString(unref(locale).baseText("settings.sourceControl.sshKeyDescriptionLink")), 9, _hoisted_7)]),
							_: 1
						})]),
						_: 1
					})
				], 2)) : createCommentVNode("", true),
				!isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 4,
					size: "large",
					disabled: !validForConnection.value,
					class: normalizeClass(_ctx.$style.connect),
					"data-test-id": "source-control-connect-button",
					onClick: onConnect
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.connect")), 1)]),
					_: 1
				}, 8, ["disabled", "class"])) : createCommentVNode("", true),
				isConnected.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[13] || (_cache[13] = createBaseVNode("hr", null, null, -1)),
						createVNode(unref(N8nHeading_default), {
							size: "xlarge",
							tag: "h2",
							class: "mb-s"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.instanceSettings")), 1)]),
							_: 1
						}),
						createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.branches")), 1),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.branchSelection) }, [createVNode(unref(N8nFormInput_default), {
							id: "branchName",
							label: "",
							type: "select",
							name: "branchName",
							class: "mb-s",
							"data-test-id": "source-control-branch-select",
							"validate-on-blur": "",
							"validation-rules": branchNameValidationRules,
							options: branchNameOptions.value,
							"model-value": unref(sourceControlStore).preferences.branchName,
							onValidate: _cache[8] || (_cache[8] = (value) => onValidate("branchName", value)),
							"onUpdate:modelValue": onSelect
						}, null, 8, ["options", "model-value"]), createVNode(unref(N8nTooltip_default), { placement: "top" }, {
							content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("settings.sourceControl.refreshBranches.tooltip")), 1)]),
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								size: "small",
								type: "tertiary",
								icon: "refresh-cw",
								square: "",
								class: normalizeClass(_ctx.$style.refreshBranches),
								"data-test-id": "source-control-refresh-branches-button",
								onClick: refreshBranches$1
							}, null, 8, ["class"])]),
							_: 1
						})], 2),
						createVNode(unref(N8nCheckbox_default), {
							modelValue: unref(sourceControlStore).preferences.branchReadOnly,
							"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(sourceControlStore).preferences.branchReadOnly = $event),
							class: normalizeClass(_ctx.$style.readOnly)
						}, {
							default: withCtx(() => [createVNode(unref(I18nT), {
								keypath: "settings.sourceControl.protected",
								tag: "span",
								scope: "global"
							}, {
								bold: withCtx(() => [createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("settings.sourceControl.protected.bold")), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, ["modelValue", "class"])
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.color")), 1), createBaseVNode("div", null, [createVNode(unref(N8nColorPicker_default), {
						modelValue: unref(sourceControlStore).preferences.branchColor,
						"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(sourceControlStore).preferences.branchColor = $event),
						size: "small"
					}, null, 8, ["modelValue"])])], 2),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.group, "pt-s"]) }, [createVNode(unref(N8nButton_default), {
						size: "large",
						disabled: !unref(sourceControlStore).preferences.branchName,
						"data-test-id": "source-control-save-settings-button",
						onClick: onSave
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.save")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)
				])) : createCommentVNode("", true)
			])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
				key: 1,
				"data-test-id": "source-control-content-unlicensed",
				class: normalizeClass(_ctx.$style.actionBox),
				description: unref(locale).baseText("settings.sourceControl.actionBox.description"),
				"button-text": unref(locale).baseText("settings.sourceControl.actionBox.buttonText"),
				"onClick:button": goToUpgrade
			}, {
				heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.title")), 1)]),
				description: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.description")) + " ", 1), createBaseVNode("a", {
					href: unref(locale).baseText("settings.sourceControl.docs.url"),
					target: "_blank"
				}, toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.description.link")), 9, _hoisted_9)]),
				_: 1
			}, 8, [
				"class",
				"description",
				"button-text"
			]))]);
		};
	}
});
var SettingsSourceControl_vue_vue_type_style_index_0_lang_module_default = {
	group: "_group_1jvj3_123",
	readOnly: "_readOnly_1jvj3_144",
	groupFlex: "_groupFlex_1jvj3_148",
	connect: "_connect_1jvj3_162",
	disconnectButton: "_disconnectButton_1jvj3_166",
	actionBox: "_actionBox_1jvj3_171",
	sshInput: "_sshInput_1jvj3_175",
	copyInput: "_copyInput_1jvj3_186",
	sshKeyTypeSelect: "_sshKeyTypeSelect_1jvj3_190",
	branchSelection: "_branchSelection_1jvj3_198",
	refreshBranches: "_refreshBranches_1jvj3_207"
};
var SettingsSourceControl_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSourceControl_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsSourceControl_default as default };

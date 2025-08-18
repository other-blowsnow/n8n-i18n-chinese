import { d as defineComponent, e_ as useUsageStore, aa as useRoute, b as useRouter, Z as useUIStore, u as useUsersStore, a as useToast, ay as useDocumentTitle, aB as usePageRedirectionHelper, r as ref, x as computed, aE as hasPermission, aC as getResourcePermissions, o as onMounted, e$ as i18n, T as resolveComponent, h as createElementBlock, g as openBlock, i as createVNode, f as createCommentVNode, w as withCtx, k as createTextVNode, t as toDisplayString, l as unref, m as N8nHeading, e as createBlock, j as createBaseVNode, a6 as I18nT, n as normalizeClass, a4 as N8nTooltip, aL as N8nBadge, q as N8nButton, e7 as N8nNotice, p as N8nText, U as normalizeStyle, cS as InfoTip, B as withModifiers, c$ as N8nInput, f0 as COMMUNITY_PLUS_ENROLLMENT_MODAL, f1 as telemetry, _ as _export_sfc } from "./index-BsWH3eYA.js";
const _hoisted_1 = { class: "settings-usage-and-plan" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = ["href"];
const _hoisted_8 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsUsageAndPlan",
  setup(__props) {
    const usageStore = useUsageStore();
    const route = useRoute();
    const router = useRouter();
    const uiStore = useUIStore();
    const usersStore = useUsersStore();
    const toast = useToast();
    const documentTitle = useDocumentTitle();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const queryParamCallback = ref(
      `callback=${encodeURIComponent(`${window.location.origin}${window.location.pathname}`)}`
    );
    const viewPlansUrl = computed(
      () => `${usageStore.viewPlansUrl}&${queryParamCallback.value}&source=usage_page`
    );
    const managePlanUrl = computed(() => `${usageStore.managePlanUrl}&${queryParamCallback.value}`);
    const activationKeyModal = ref(false);
    const activationKey = ref("");
    const activationKeyInput = ref(null);
    const canUserActivateLicense = computed(
      () => hasPermission(["rbac"], { rbac: { scope: "license:manage" } })
    );
    const badgedPlanName = computed(() => {
      const [badge, name] = usageStore.planName.split(" ");
      return {
        name,
        badge
      };
    });
    const isCommunity = computed(() => usageStore.planName.toLowerCase() === "community");
    const isCommunityEditionRegistered = computed(
      () => usageStore.planName.toLowerCase() === "registered community"
    );
    const canUserRegisterCommunityPlus = computed(
      () => getResourcePermissions(usersStore.currentUser?.globalScopes).community.register
    );
    const showActivationSuccess = () => {
      toast.showMessage({
        type: "success",
        title: i18n.baseText("settings.usageAndPlan.license.activation.success.title"),
        message: i18n.baseText("settings.usageAndPlan.license.activation.success.message", {
          interpolate: {
            name: usageStore.planName,
            type: usageStore.planId ? i18n.baseText("settings.usageAndPlan.plan") : i18n.baseText("settings.usageAndPlan.edition")
          }
        })
      });
    };
    const showActivationError = (error) => {
      toast.showError(
        error,
        i18n.baseText("settings.usageAndPlan.license.activation.error.title"),
        error.message
      );
    };
    const onLicenseActivation = async () => {
      try {
        await usageStore.activateLicense(activationKey.value);
        activationKeyModal.value = false;
        showActivationSuccess();
      } catch (error) {
        showActivationError(error);
      }
    };
    onMounted(async () => {
      documentTitle.set(i18n.baseText("settings.usageAndPlan.title"));
      usageStore.setLoading(true);
      if (route.query.key) {
        try {
          await usageStore.activateLicense(route.query.key);
          await router.replace({ query: {} });
          showActivationSuccess();
          usageStore.setLoading(false);
          return;
        } catch (error) {
          showActivationError(error);
        }
      }
      try {
        if (!route.query.key && canUserActivateLicense.value) {
          await usageStore.refreshLicenseManagementToken();
        } else {
          await usageStore.getLicenseInfo();
        }
        usageStore.setLoading(false);
      } catch (error) {
        if (!error.name) {
          error.name = i18n.baseText("settings.usageAndPlan.error");
        }
        toast.showError(error, error.name, error.message);
      }
    });
    const sendUsageTelemetry = (action) => {
      const telemetryPayload = usageStore.telemetryPayload;
      telemetryPayload.action = action;
      telemetry.track("User clicked button on usage page", telemetryPayload);
    };
    const onAddActivationKey = () => {
      activationKeyModal.value = true;
      sendUsageTelemetry("add_activation_key");
    };
    const onViewPlans = () => {
      void pageRedirectionHelper.goToUpgrade("usage_page", "open");
      sendUsageTelemetry("view_plans");
    };
    const onManagePlan = () => {
      sendUsageTelemetry("manage_plan");
    };
    const onDialogClosed = () => {
      activationKey.value = "";
    };
    const onDialogOpened = () => {
      activationKeyInput.value?.focus();
    };
    const openCommunityRegisterModal = () => {
      uiStore.openModalWithData({
        name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
        data: {
          customHeading: void 0
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_n8n_heading = N8nHeading;
      const _component_N8nBadge = N8nBadge;
      const _component_N8nTooltip = N8nTooltip;
      const _component_N8nButton = N8nButton;
      const _component_N8nNotice = N8nNotice;
      const _component_n8n_text = N8nText;
      const _component_n8n_button = N8nButton;
      const _component_n8n_input = N8nInput;
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n8n_heading, {
          tag: "h2",
          size: "2xlarge"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.title")), 1)
          ]),
          _: 1
        }),
        !unref(usageStore).isLoading ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_component_n8n_heading, {
            tag: "h3",
            class: normalizeClass(_ctx.$style.title),
            size: "large"
          }, {
            default: withCtx(() => [
              createVNode(unref(I18nT), {
                keypath: "settings.usageAndPlan.description",
                tag: "span",
                scope: "global"
              }, {
                name: withCtx(() => [
                  createTextVNode(toDisplayString(badgedPlanName.value.name ?? unref(usageStore).planName), 1)
                ]),
                type: withCtx(() => [
                  unref(usageStore).planId ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.plan")), 1)) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.edition")), 1))
                ]),
                _: 1
              }),
              badgedPlanName.value.badge && badgedPlanName.value.name ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(_ctx.$style.titleTooltip)
              }, [
                createVNode(_component_N8nTooltip, { placement: "top" }, {
                  content: withCtx(() => [
                    isCommunityEditionRegistered.value ? (openBlock(), createBlock(unref(I18nT), {
                      key: 0,
                      keypath: "settings.usageAndPlan.license.communityRegistered.tooltip",
                      scope: "global"
                    })) : createCommentVNode("", true)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_N8nBadge, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(badgedPlanName.value.badge), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 2)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["class"]),
          isCommunity.value && canUserRegisterCommunityPlus.value ? (openBlock(), createBlock(_component_N8nNotice, {
            key: 0,
            class: "mt-0",
            theme: "warning"
          }, {
            default: withCtx(() => [
              createVNode(unref(I18nT), {
                keypath: "settings.usageAndPlan.callOut",
                scope: "global"
              }, {
                link: withCtx(() => [
                  createVNode(_component_N8nButton, {
                    class: "pl-0 pr-0",
                    text: "",
                    label: unref(i18n).baseText("settings.usageAndPlan.callOut.link"),
                    onClick: openCommunityRegisterModal
                  }, null, 8, ["label"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.quota)
          }, [
            createVNode(_component_n8n_text, {
              size: "medium",
              color: "text-light"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.chart)
            }, [
              unref(usageStore).activeWorkflowTriggersLimit > 0 ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(_ctx.$style.chartLine)
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.chartBar),
                  style: normalizeStyle({ width: `${unref(usageStore).executionPercentage}%` })
                }, null, 6)
              ], 2)) : createCommentVNode("", true),
              createVNode(unref(I18nT), {
                tag: "span",
                class: normalizeClass(_ctx.$style.count),
                keypath: "settings.usageAndPlan.activeWorkflows.count",
                scope: "global"
              }, {
                count: withCtx(() => [
                  createTextVNode(toDisplayString(unref(usageStore).activeWorkflowTriggersCount), 1)
                ]),
                limit: withCtx(() => [
                  unref(usageStore).activeWorkflowTriggersLimit < 0 ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows.unlimited")), 1)) : (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(usageStore).activeWorkflowTriggersLimit), 1))
                ]),
                _: 1
              }, 8, ["class"])
            ], 2)
          ], 2),
          createVNode(unref(InfoTip), null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows.hint")), 1)
            ]),
            _: 1
          }),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.buttons)
          }, [
            canUserActivateLicense.value ? (openBlock(), createBlock(_component_n8n_button, {
              key: 0,
              class: normalizeClass(_ctx.$style.buttonTertiary),
              type: "tertiary",
              size: "large",
              onClick: onAddActivationKey
            }, {
              default: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.activation")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("", true),
            unref(usageStore).managementToken ? (openBlock(), createBlock(_component_n8n_button, {
              key: 1,
              size: "large",
              onClick: onManagePlan
            }, {
              default: withCtx(() => [
                createBaseVNode("a", {
                  href: managePlanUrl.value,
                  target: "_blank"
                }, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.manage")), 9, _hoisted_7)
              ]),
              _: 1
            })) : (openBlock(), createBlock(_component_n8n_button, {
              key: 2,
              size: "large",
              onClick: withModifiers(onViewPlans, ["prevent"])
            }, {
              default: withCtx(() => [
                createBaseVNode("a", {
                  href: viewPlansUrl.value,
                  target: "_blank"
                }, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.plans")), 9, _hoisted_8)
              ]),
              _: 1
            }))
          ], 2),
          createVNode(_component_el_dialog, {
            modelValue: activationKeyModal.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => activationKeyModal.value = $event),
            width: "480px",
            top: "0",
            title: unref(i18n).baseText("settings.usageAndPlan.dialog.activation.title"),
            "modal-class": _ctx.$style.center,
            onClosed: onDialogClosed,
            onOpened: onDialogOpened
          }, {
            default: withCtx(() => [
              createVNode(_component_n8n_input, {
                ref_key: "activationKeyInput",
                ref: activationKeyInput,
                modelValue: activationKey.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activationKey.value = $event),
                placeholder: unref(i18n).baseText("settings.usageAndPlan.dialog.activation.label")
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            footer: withCtx(() => [
              createVNode(_component_n8n_button, {
                type: "secondary",
                onClick: _cache[1] || (_cache[1] = ($event) => activationKeyModal.value = false)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.activation.cancel")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_n8n_button, { onClick: onLicenseActivation }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.activation.activate")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "title", "modal-class"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const center = "_center_eht1q_123";
const actionBox = "_actionBox_eht1q_127";
const spacedFlex = "_spacedFlex_eht1q_131";
const title = "_title_eht1q_137";
const quota = "_quota_eht1q_143";
const count = "_count_eht1q_155";
const buttons = "_buttons_eht1q_160";
const chart = "_chart_eht1q_176";
const chartLine = "_chartLine_eht1q_183";
const chartBar = "_chartBar_eht1q_193";
const titleTooltip = "_titleTooltip_eht1q_207";
const style0 = {
  center,
  actionBox,
  spacedFlex,
  title,
  quota,
  count,
  buttons,
  chart,
  chartLine,
  chartBar,
  titleTooltip
};
const cssModules = {
  "$style": style0
};
const SettingsUsageAndPlan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-980f524b"]]);
export {
  SettingsUsageAndPlan as default
};

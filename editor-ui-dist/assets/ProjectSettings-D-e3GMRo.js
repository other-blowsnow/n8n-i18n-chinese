import { d as defineComponent, cK as mergeModels, cL as useModel, r as ref, x as computed, c as useI18n, h as resolveComponent, e as createBlock, g as openBlock, w as withCtx, i as createElementBlock, l as createTextVNode, t as toDisplayString, m as unref, j as createVNode, k as createBaseVNode, f as createCommentVNode, n as normalizeClass, gn as ProjectSharing, bE as withModifiers, _ as _export_sfc, aa as usePageRedirectionHelper, u as useUsersStore, a4 as useProjectsStore, h6 as useRolesStore, aQ as useCloudPlanStore, a as useToast, b as useRouter, a7 as useDocumentTitle, h7 as getAllIconNames, $ as watch, aH as onBeforeMount, o as onMounted, ff as N8nFormInput, F as Fragment, G as renderList, di as deepCopy, am as useTelemetry, B as nextTick, V as VIEWS } from "./index-Y0sphpVt.js";
import { P as ProjectHeader } from "./ProjectHeader-X67bpGLz.js";
import "./useProjectPages-F73Ftzbl.js";
const _hoisted_1$2 = { key: 1 };
const _hoisted_2$1 = { class: "pt-l" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectDeleteDialog",
  props: /* @__PURE__ */ mergeModels({
    currentProject: {},
    projects: {},
    isCurrentProjectEmpty: { type: Boolean }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["confirmDelete"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const visible = useModel(__props, "modelValue");
    const emit = __emit;
    const locale = useI18n();
    const selectedProject = ref(null);
    const operation2 = ref(null);
    const wipeConfirmText = ref("");
    const isValid = computed(() => {
      const expectedWipeConfirmation = locale.baseText(
        "projects.settings.delete.question.wipe.placeholder"
      );
      return props.isCurrentProjectEmpty || operation2.value === "transfer" && !!selectedProject.value || operation2.value === "wipe" && wipeConfirmText.value === expectedWipeConfirmation;
    });
    const onDelete = () => {
      if (!isValid.value) {
        return;
      }
      if (operation2.value === "wipe") {
        selectedProject.value = null;
      }
      emit("confirmDelete", selectedProject.value?.id);
    };
    return (_ctx, _cache) => {
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_el_radio = resolveComponent("el-radio");
      const _component_n8n_input = resolveComponent("n8n-input");
      const _component_n8n_input_label = resolveComponent("n8n-input-label");
      const _component_N8nButton = resolveComponent("N8nButton");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        modelValue: visible.value,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => visible.value = $event),
        title: unref(locale).baseText("projects.settings.delete.title", {
          interpolate: { projectName: props.currentProject?.name ?? "" }
        }),
        width: "500"
      }, {
        footer: withCtx(() => [
          createVNode(_component_N8nButton, {
            type: "danger",
            "native-type": "button",
            disabled: !isValid.value,
            "data-test-id": "project-settings-delete-confirm-button",
            onClick: withModifiers(onDelete, ["stop", "prevent"])
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.danger.deleteProject")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        default: withCtx(() => [
          _ctx.isCurrentProjectEmpty ? (openBlock(), createBlock(_component_n8n_text, {
            key: 0,
            color: "text-base"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message.empty")), 1)
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", _hoisted_1$2, [
            createVNode(_component_n8n_text, { color: "text-base" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_el_radio, {
                "model-value": operation2.value,
                label: "transfer",
                class: "mb-s",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => operation2.value = "transfer")
              }, {
                default: withCtx(() => [
                  createVNode(_component_n8n_text, { color: "text-dark" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model-value"]),
              operation2.value === "transfer" ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.operation)
              }, [
                createVNode(_component_n8n_text, { color: "text-dark" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(ProjectSharing, {
                  modelValue: selectedProject.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedProject.value = $event),
                  class: "pt-2xs",
                  projects: props.projects,
                  "empty-options-text": unref(locale).baseText("projects.sharing.noMatchingProjects")
                }, null, 8, ["modelValue", "projects", "empty-options-text"])
              ], 2)) : createCommentVNode("", true),
              createVNode(_component_el_radio, {
                "model-value": operation2.value,
                label: "wipe",
                class: "mb-s",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => operation2.value = "wipe")
              }, {
                default: withCtx(() => [
                  createVNode(_component_n8n_text, { color: "text-dark" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.wipe.label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model-value"]),
              operation2.value === "wipe" ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.operation)
              }, [
                createVNode(_component_n8n_input_label, {
                  label: unref(locale).baseText("projects.settings.delete.question.wipe.title")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n8n_input, {
                      modelValue: wipeConfirmText.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => wipeConfirmText.value = $event),
                      "data-test-id": "project-delete-confirm-input",
                      placeholder: unref(locale).baseText("projects.settings.delete.question.wipe.placeholder")
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ], 2)) : createCommentVNode("", true)
            ])
          ]))
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const operation = "_operation_18zmn_123";
const style0$1 = {
  operation
};
const cssModules$1 = {
  "$style": style0$1
};
const ProjectDeleteDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
const _hoisted_1$1 = { class: "pt-l" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectRoleUpgradeDialog",
  props: /* @__PURE__ */ mergeModels({
    limit: {},
    planName: {}
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const visible = useModel(__props, "modelValue");
    const pageRedirectionHelper = usePageRedirectionHelper();
    const locale = useI18n();
    const goToUpgrade = async () => {
      await pageRedirectionHelper.goToUpgrade("rbac", "upgrade-rbac");
      visible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_N8nButton = resolveComponent("N8nButton");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        modelValue: visible.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
        title: unref(locale).baseText("projects.settings.role.upgrade.title"),
        width: "500"
      }, {
        footer: withCtx(() => [
          createVNode(_component_N8nButton, {
            type: "secondary",
            "native-type": "button",
            onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("generic.cancel")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_N8nButton, {
            type: "primary",
            "native-type": "button",
            onClick: goToUpgrade
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limitReached.link")), 1)
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(_component_i18n_t, { keypath: "projects.settings.role.upgrade.message" }, {
              planName: withCtx(() => [
                createTextVNode(toDisplayString(props.planName), 1)
              ]),
              limit: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limit", {
                  adjustToNumber: props.limit,
                  interpolate: { count: String(props.limit) }
                })), 1)
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const _hoisted_1 = { for: "projectName" };
const _hoisted_2 = { for: "projectDescription" };
const _hoisted_3 = { for: "projectMembers" };
const _hoisted_4 = {
  key: 0,
  class: "mr-2xs"
};
const _hoisted_5 = { class: "mb-xs" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectSettings",
  setup(__props) {
    const usersStore = useUsersStore();
    const i18n = useI18n();
    const projectsStore = useProjectsStore();
    const rolesStore = useRolesStore();
    const cloudPlanStore = useCloudPlanStore();
    const toast = useToast();
    const router = useRouter();
    const telemetry = useTelemetry();
    const documentTitle = useDocumentTitle();
    const dialogVisible = ref(false);
    const upgradeDialogVisible = ref(false);
    const isDirty = ref(false);
    const isValid = ref(false);
    const isCurrentProjectEmpty = ref(true);
    const formData = ref({
      name: "",
      description: "",
      relations: []
    });
    const projectRoleTranslations = ref({
      "project:viewer": i18n.baseText("projects.settings.role.viewer"),
      "project:editor": i18n.baseText("projects.settings.role.editor"),
      "project:admin": i18n.baseText("projects.settings.role.admin")
    });
    const nameInput = ref(null);
    const availableProjectIcons = getAllIconNames();
    const projectIcon = ref({
      type: "icon",
      value: "layer-group"
    });
    const usersList = computed(
      () => usersStore.allUsers.filter((user) => {
        const isAlreadySharedWithUser = (formData.value.relations || []).find(
          (r) => r.id === user.id
        );
        return !isAlreadySharedWithUser;
      })
    );
    const projects = computed(
      () => projectsStore.availableProjects.filter(
        (project) => project.id !== projectsStore.currentProjectId
      )
    );
    const projectRoles = computed(
      () => rolesStore.processedProjectRoles.map((role) => ({
        ...role,
        name: projectRoleTranslations.value[role.role]
      }))
    );
    const firstLicensedRole = computed(() => projectRoles.value.find((role) => role.licensed)?.role);
    const onAddMember = (userId) => {
      isDirty.value = true;
      const user = usersStore.usersById[userId];
      if (!user) return;
      const { id, firstName, lastName, email } = user;
      const relation = { id, firstName, lastName, email };
      if (firstLicensedRole.value) {
        relation.role = firstLicensedRole.value;
      }
      formData.value.relations.push(relation);
    };
    const onRoleAction = (user, role) => {
      isDirty.value = true;
      const index = formData.value.relations.findIndex((r) => r.id === user.id);
      if (role === "remove") {
        formData.value.relations.splice(index, 1);
      } else {
        formData.value.relations[index].role = role;
      }
    };
    const onTextInput = () => {
      isDirty.value = true;
    };
    const onCancel = () => {
      formData.value.relations = projectsStore.currentProject?.relations ? deepCopy(projectsStore.currentProject.relations) : [];
      formData.value.name = projectsStore.currentProject?.name ?? "";
      formData.value.description = projectsStore.currentProject?.description ?? "";
      isDirty.value = false;
    };
    const makeFormDataDiff = () => {
      const diff = {};
      if (!projectsStore.currentProject) {
        return diff;
      }
      if (formData.value.name !== projectsStore.currentProject.name) {
        diff.name = formData.value.name ?? "";
      }
      if (formData.value.description !== projectsStore.currentProject.description) {
        diff.description = formData.value.description ?? "";
      }
      if (formData.value.relations.length !== projectsStore.currentProject.relations.length) {
        diff.memberAdded = formData.value.relations.filter(
          (r) => !projectsStore.currentProject?.relations.find((cr) => cr.id === r.id)
        );
        diff.memberRemoved = projectsStore.currentProject.relations.filter(
          (cr) => !formData.value.relations.find((r) => r.id === cr.id)
        );
      }
      diff.role = formData.value.relations.filter((r) => {
        const currentRelation = projectsStore.currentProject?.relations.find((cr) => cr.id === r.id);
        return currentRelation?.role !== r.role && !diff.memberAdded?.find((ar) => ar.id === r.id);
      });
      return diff;
    };
    const sendTelemetry = (diff) => {
      if (diff.name) {
        telemetry.track("User changed project name", {
          project_id: projectsStore.currentProject?.id,
          name: diff.name
        });
      }
      if (diff.memberAdded) {
        diff.memberAdded.forEach((r) => {
          telemetry.track("User added member to project", {
            project_id: projectsStore.currentProject?.id,
            target_user_id: r.id,
            role: r.role
          });
        });
      }
      if (diff.memberRemoved) {
        diff.memberRemoved.forEach((r) => {
          telemetry.track("User removed member from project", {
            project_id: projectsStore.currentProject?.id,
            target_user_id: r.id
          });
        });
      }
      if (diff.role) {
        diff.role.forEach((r) => {
          telemetry.track("User changed member role on project", {
            project_id: projectsStore.currentProject?.id,
            target_user_id: r.id,
            role: r.role
          });
        });
      }
    };
    const updateProject = async () => {
      if (!projectsStore.currentProject) {
        return;
      }
      try {
        if (formData.value.relations.some((r) => r.role === "project:personalOwner")) {
          throw new Error("Invalid role selected for this project.");
        }
        await projectsStore.updateProject(projectsStore.currentProject.id, {
          name: formData.value.name,
          icon: projectIcon.value,
          description: formData.value.description,
          relations: formData.value.relations.map((r) => ({
            userId: r.id,
            role: r.role
          }))
        });
        isDirty.value = false;
      } catch (error) {
        toast.showError(error, i18n.baseText("projects.settings.save.error.title"));
      }
    };
    const onSubmit = async () => {
      if (!isDirty.value) {
        return;
      }
      await updateProject();
      const diff = makeFormDataDiff();
      sendTelemetry(diff);
      toast.showMessage({
        title: i18n.baseText("projects.settings.save.successful.title", {
          interpolate: { projectName: formData.value.name ?? "" }
        }),
        type: "success"
      });
    };
    const onDelete = async () => {
      await projectsStore.getAvailableProjects();
      if (projectsStore.currentProjectId) {
        isCurrentProjectEmpty.value = await projectsStore.isProjectEmpty(
          projectsStore.currentProjectId
        );
      }
      dialogVisible.value = true;
    };
    const onConfirmDelete = async (transferId) => {
      try {
        if (projectsStore.currentProject) {
          const projectName = projectsStore.currentProject?.name ?? "";
          await projectsStore.deleteProject(projectsStore.currentProject.id, transferId);
          await router.push({ name: VIEWS.HOMEPAGE });
          toast.showMessage({
            title: i18n.baseText("projects.settings.delete.successful.title", {
              interpolate: { projectName }
            }),
            type: "success"
          });
          dialogVisible.value = true;
        }
      } catch (error) {
        toast.showError(error, i18n.baseText("projects.settings.delete.error.title"));
      }
    };
    const selectProjectNameIfMatchesDefault = () => {
      if (formData.value.name === i18n.baseText("projects.settings.newProjectName")) {
        nameInput.value?.inputRef?.focus();
        nameInput.value?.inputRef?.select();
      }
    };
    const onIconUpdated = async () => {
      await updateProject();
      toast.showMessage({
        title: i18n.baseText("projects.settings.icon.update.successful.title"),
        type: "success"
      });
    };
    watch(
      () => projectsStore.currentProject,
      async () => {
        formData.value.name = projectsStore.currentProject?.name ?? "";
        formData.value.description = projectsStore.currentProject?.description ?? "";
        formData.value.relations = projectsStore.currentProject?.relations ? deepCopy(projectsStore.currentProject.relations) : [];
        await nextTick();
        selectProjectNameIfMatchesDefault();
        if (projectsStore.currentProject?.icon) {
          projectIcon.value = projectsStore.currentProject.icon;
        }
      },
      { immediate: true }
    );
    const relationUsers = computed(
      () => formData.value.relations.map((relation) => {
        const user = usersStore.usersById[relation.id];
        if (!user) return relation;
        return {
          ...user,
          ...relation
        };
      })
    );
    onBeforeMount(async () => {
      await usersStore.fetchUsers();
    });
    onMounted(() => {
      documentTitle.set(i18n.baseText("projects.settings"));
      selectProjectNameIfMatchesDefault();
    });
    return (_ctx, _cache) => {
      const _component_N8nIconPicker = resolveComponent("N8nIconPicker");
      const _component_N8nIcon = resolveComponent("N8nIcon");
      const _component_N8nUserSelect = resolveComponent("N8nUserSelect");
      const _component_N8nOption = resolveComponent("N8nOption");
      const _component_N8nSelect = resolveComponent("N8nSelect");
      const _component_N8nButton = resolveComponent("N8nButton");
      const _component_N8nUsersList = resolveComponent("N8nUsersList");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.projectSettings)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createVNode(ProjectHeader)
        ], 2),
        createBaseVNode("form", {
          onSubmit: withModifiers(onSubmit, ["prevent"])
        }, [
          createBaseVNode("fieldset", null, [
            createBaseVNode("label", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.settings.name")), 1),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style["project-name"])
            }, [
              createVNode(_component_N8nIconPicker, {
                modelValue: projectIcon.value,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => projectIcon.value = $event),
                  onIconUpdated
                ],
                "button-tooltip": unref(i18n).baseText("projects.settings.iconPicker.button.tooltip"),
                "available-icons": unref(availableProjectIcons)
              }, null, 8, ["modelValue", "button-tooltip", "available-icons"]),
              createVNode(unref(N8nFormInput), {
                id: "projectName",
                ref_key: "nameInput",
                ref: nameInput,
                modelValue: formData.value.name,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.name = $event),
                label: "",
                type: "text",
                name: "name",
                required: "",
                "data-test-id": "project-settings-name-input",
                class: normalizeClass(_ctx.$style["project-name-input"]),
                onEnter: onSubmit,
                onInput: onTextInput,
                onValidate: _cache[2] || (_cache[2] = ($event) => isValid.value = $event)
              }, null, 8, ["modelValue", "class"])
            ], 2)
          ]),
          createBaseVNode("fieldset", null, [
            createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("projects.settings.description")), 1),
            createVNode(unref(N8nFormInput), {
              id: "projectDescription",
              modelValue: formData.value.description,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.description = $event),
              label: "",
              name: "description",
              type: "textarea",
              maxlength: 512,
              autosize: true,
              "data-test-id": "project-settings-description-input",
              onEnter: onSubmit,
              onInput: onTextInput,
              onValidate: _cache[4] || (_cache[4] = ($event) => isValid.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("fieldset", null, [
            createBaseVNode("label", _hoisted_3, toDisplayString(unref(i18n).baseText("projects.settings.projectMembers")), 1),
            createVNode(_component_N8nUserSelect, {
              id: "projectMembers",
              class: "mb-s",
              size: "large",
              users: usersList.value,
              "current-user-id": unref(usersStore).currentUser?.id,
              placeholder: unref(i18n).baseText("workflows.shareModal.select.placeholder"),
              "data-test-id": "project-members-select",
              "onUpdate:modelValue": onAddMember
            }, {
              prefix: withCtx(() => [
                createVNode(_component_N8nIcon, { icon: "search" })
              ]),
              _: 1
            }, 8, ["users", "current-user-id", "placeholder"]),
            createVNode(_component_N8nUsersList, {
              actions: [],
              users: relationUsers.value,
              "current-user-id": unref(usersStore).currentUser?.id,
              "delete-label": unref(i18n).baseText("workflows.shareModal.list.delete")
            }, {
              actions: withCtx(({ user }) => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.buttons)
                }, [
                  createVNode(_component_N8nSelect, {
                    class: "mr-2xs",
                    "model-value": user?.role || projectRoles.value[0].role,
                    size: "small",
                    "data-test-id": "projects-settings-user-role-select",
                    "onUpdate:modelValue": ($event) => onRoleAction(user, $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(projectRoles.value, (role) => {
                        return openBlock(), createBlock(_component_N8nOption, {
                          key: role.role,
                          value: role.role,
                          label: role.name,
                          disabled: !role.licensed
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(role.name), 1),
                            !role.licensed ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              class: normalizeClass(_ctx.$style.upgrade),
                              onClick: _cache[5] || (_cache[5] = ($event) => upgradeDialogVisible.value = true)
                            }, "  - " + toDisplayString(unref(i18n).baseText("generic.upgrade")), 3)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["value", "label", "disabled"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["model-value", "onUpdate:modelValue"]),
                  createVNode(_component_N8nButton, {
                    type: "tertiary",
                    "native-type": "button",
                    square: "",
                    icon: "trash",
                    "data-test-id": "project-user-remove",
                    onClick: ($event) => onRoleAction(user, "remove")
                  }, null, 8, ["onClick"])
                ], 2)
              ]),
              _: 1
            }, 8, ["users", "current-user-id", "delete-label"])
          ]),
          createBaseVNode("fieldset", {
            class: normalizeClass(_ctx.$style.buttons)
          }, [
            createBaseVNode("div", null, [
              isDirty.value ? (openBlock(), createElementBlock("small", _hoisted_4, toDisplayString(unref(i18n).baseText("projects.settings.message.unsavedChanges")), 1)) : createCommentVNode("", true),
              createVNode(_component_N8nButton, {
                disabled: !isDirty.value,
                type: "secondary",
                "native-type": "button",
                class: "mr-2xs",
                "data-test-id": "project-settings-cancel-button",
                onClick: withModifiers(onCancel, ["stop", "prevent"])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.cancel")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            createVNode(_component_N8nButton, {
              disabled: !isDirty.value || !isValid.value,
              type: "primary",
              "data-test-id": "project-settings-save-button"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.save")), 1)
              ]),
              _: 1
            }, 8, ["disabled"])
          ], 2),
          createBaseVNode("fieldset", null, [
            _cache[8] || (_cache[8] = createBaseVNode("hr", { class: "mb-2xl" }, null, -1)),
            createBaseVNode("h3", _hoisted_5, toDisplayString(unref(i18n).baseText("projects.settings.danger.title")), 1),
            createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("projects.settings.danger.message")), 1),
            _cache[9] || (_cache[9] = createBaseVNode("br", null, null, -1)),
            createVNode(_component_N8nButton, {
              type: "tertiary",
              "native-type": "button",
              class: "mt-s",
              "data-test-id": "project-settings-delete-button",
              onClick: withModifiers(onDelete, ["stop", "prevent"])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.danger.deleteProject")), 1)
              ]),
              _: 1
            })
          ])
        ], 32),
        createVNode(ProjectDeleteDialog, {
          modelValue: dialogVisible.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => dialogVisible.value = $event),
          "current-project": unref(projectsStore).currentProject,
          "is-current-project-empty": isCurrentProjectEmpty.value,
          projects: projects.value,
          onConfirmDelete
        }, null, 8, ["modelValue", "current-project", "is-current-project-empty", "projects"]),
        createVNode(_sfc_main$1, {
          modelValue: upgradeDialogVisible.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => upgradeDialogVisible.value = $event),
          limit: unref(projectsStore).teamProjectsLimit,
          "plan-name": unref(cloudPlanStore).currentPlanData?.displayName
        }, null, 8, ["modelValue", "limit", "plan-name"])
      ], 2);
    };
  }
});
const projectSettings = "_projectSettings_g68s8_123";
const header = "_header_g68s8_143";
const upgrade = "_upgrade_g68s8_149";
const buttons = "_buttons_g68s8_153";
const style0 = {
  projectSettings,
  header,
  upgrade,
  buttons,
  "project-name": "_project-name_g68s8_159",
  "project-name-input": "_project-name-input_g68s8_163"
};
const cssModules = {
  "$style": style0
};
const ProjectSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ProjectSettings as default
};

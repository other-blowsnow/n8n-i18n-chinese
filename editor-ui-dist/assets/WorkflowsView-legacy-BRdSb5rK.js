;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./useWorkflowSaving-legacy-CRxiFnlk.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./folders.store-legacy-C8VGYd29.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./ProjectIcon-legacy-ktkmz5xT.js", "./ProjectCardBadge-legacy-04gTRiWs.js", "./usage.store-legacy-DM-Ej7_u.js", "./Draggable-legacy-CcVN489_.js", "./EnterpriseEdition.ee-legacy-Dc4zPsd3.js", "./TimeAgo-legacy-DZ56LCYg.js", "./orderBy-legacy-CdPMW7_h.js", "./ProjectSharing-legacy-whwJ1PEb.js", "./TagsDropdown-legacy-B77bF58I.js", "./WorkflowTagsDropdown-legacy-EBdnlj6g.js", "./insights.store-legacy-ExCnA8Kt.js", "./insights.constants-legacy-D5Y8YhR_.js", "./insights.utils-legacy-BGFKnbE7.js", "./mcp.constants-legacy-CZfk8DW2.js", "./useMcp-legacy-7hybpKbM.js", "./personalizedTemplatesV3.store-legacy-Kz0gezj8.js", "./useWorkflowActivate-legacy-DRFvTgOe.js", "./ProjectBreadcrumb-legacy-CEhLqYgd.js", "./WorkflowActivator-legacy-BZHH4tHv.js", "./readyToRunWorkflows.store-legacy-D55qrb6S.js", "./readyToRunWorkflowsV2.store-legacy-C5SMFEOl.js", "./PageViewLayout-legacy-B1As2gDz.js", "./EmptySharedSectionActionBox-legacy-C2fFzate.js", "./ResourcesListLayout-legacy-B1Q_UccN.js", "./ProjectHeader-legacy-Bnsaa6ZB.js", "./mcp.store-legacy-VlS5xgE6.js", "./smartDecimal-legacy-BeOdMR2z.js", "./InsightsSummary-legacy-CH2vq0-3.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, onScopeDispose, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, renderSlot, withCtx, openBlock, withModifiers, renderList, createTextVNode, createSlots, useTemplateRef, resolveComponent, vShow, createBaseVNode, withDirectives, useI18n, N8nActionToggle_default, N8nActionBox_default, N8nCallout_default, N8nOption_default, N8nText_default, N8nCheckbox_default, N8nButton_default, N8nInfoTip_default, N8nHeading_default, N8nSelect_default, N8nCard_default, N8nInputLabel_default, N8nInlineTextEdit_default, N8nBreadcrumbs_default, N8nLoading_default, N8nTags_default, N8nBadge_default, N8nLink_default, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, createEventBus, useRoute, useMessage, useSettingsStore, STORES, useSourceControlStore, useProjectsStore, ResourceType, FOLDER_LIST_ITEM_ACTIONS, useUIStore, ProjectTypes, ILLEGAL_FOLDER_CHARACTERS, useDocumentTitle, getEasyAiWorkflowJson, PROJECT_MOVE_RESOURCE_MODAL, FOLDER_NAME_MAX_LENGTH, FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX, FOLDER_NAME_ONLY_DOTS_REGEX, useTagsStore, useUsersStore, usePostHog, COMMUNITY_PLUS_ENROLLMENT_MODAL, useWorkflowsStore, useNodeTypesStore, useTelemetry, defineStore, useStorage, useToast, TEMPLATE_ONBOARDING_EXPERIMENT, EXPERIMENT_TEMPLATE_RECO_V2_KEY, jsonParse, EnterpriseEditionFeature, WORKFLOW_SHARE_MODAL_KEY, MODAL_CONFIRM, EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY, getResourcePermissions, PROJECT_ROOT, LOCAL_STORAGE_EXPERIMENTAL_DISMISSED_SUGGESTED_WORKFLOWS, VIEWS, DEFAULT_WORKFLOW_PAGE_SIZE, EXPERIMENT_TEMPLATE_RECO_V3_KEY, DUPLICATE_MODAL_KEY, require_dateformat, require_debounce, useDebounce, useCloudPlanStore, useTemplatesDataQualityStore, trackTemplatesClick, TemplateClickSource, isExtraTemplateLinksExperimentEnabled, useTemplatesStore, useCalloutHelpers, useFoldersStore, NodeIcon_default, ProjectCardBadge_default, useUsageStore, Draggable_default, TimeAgo_default, WorkflowTagsDropdown_default, useInsightsStore, useMcp, usePersonalizedTemplatesV2Store, usePersonalizedTemplatesV3Store, FolderBreadcrumbs_default, WorkflowActivator_default, useAITemplatesStarterCollectionStore, useReadyToRunWorkflowsStore, useProjectPages, useReadyToRunWorkflowsV2Store, EmptySharedSectionActionBox_default, ResourcesListLayout_default, ProjectHeader_default, useMCPStore, InsightsSummary_default, __vite_style__, _hoisted_1$5, _hoisted_2$1, FolderCard_vue_vue_type_script_setup_true_lang_default, card, cardBadge$1, FolderCard_vue_vue_type_style_index_0_lang_module_default, cssModules$9, FolderCard_default, import_dateformat, _hoisted_1$4, WorkflowCard_vue_vue_type_script_setup_true_lang_default, cardLink, cardHeading, cardHeadingArchived, cardDescription, cardTags, cardActions, cardBadge, cardArchived, breadcrumbs, WorkflowCard_vue_vue_type_style_index_0_lang_module_default, cssModules$8, WorkflowCard_default, DEFAULT_EDGE, DEFAULT_MAX_SPEED, SIMPLE_TEMPLATES, PREDEFINED_TEMPLATES_BY_NODE, usePersonalizedTemplatesStore, SuggestedWorkflowCard_vue_vue_type_script_setup_true_lang_default, SuggestedWorkflowCard_vue_vue_type_style_index_0_lang_module_default, cssModules$7, SuggestedWorkflowCard_default, SuggestedWorkflows_vue_vue_type_style_index_0_lang_module_default, _sfc_main, _hoisted_1$3, cssModules$6, SuggestedWorkflows_default, NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default$1, nodeCard$1, nodeIcon$1, emptyStateCardContent$2, NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default$1, cssModules$5, NodeRecommendationCard_default$1, _hoisted_1$2, TemplateRecommendationV2_vue_vue_type_script_setup_true_lang_default, nodeCardsContainer$1, TemplateRecommendationV2_vue_vue_type_style_index_0_lang_module_default, cssModules$4, TemplateRecommendationV2_default, NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default, nodeCard, nodeIcon, emptyStateCardContent$1, NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default, cssModules$3, NodeRecommendationCard_default, _hoisted_1$1, TemplateRecommendationV3_vue_vue_type_script_setup_true_lang_default, nodeCardsContainer, TemplateRecommendationV3_vue_vue_type_style_index_0_lang_module_default, cssModules$2, TemplateRecommendationV3_default, SimplifiedEmptyLayout_vue_vue_type_script_setup_true_lang_default, simplifiedLayout, header, content, welcome, welcomeTitle, welcomeDescription, actionsContainer$1, actionCard, cardIcon, loading, cardContent, SimplifiedEmptyLayout_vue_vue_type_style_index_0_lang_module_default, cssModules$1, SimplifiedEmptyLayout_default, import_debounce, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, SEARCH_DEBOUNCE_TIME, FILTERS_DEBOUNCE_TIME, WorkflowsView_vue_vue_type_script_setup_true_lang_default, actionsContainer, emptyStateCard, emptyStateCardContent, emptyStateCardIcon, dragging, name, WorkflowsView_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkflowsView_default;
    function useAutoScrollOnDrag(options) {
      let frameId;
      let scrollStep = 0;
      const edgeSize = options.edgeSize ?? DEFAULT_EDGE;
      const maxSpeed = options.maxSpeed ?? DEFAULT_MAX_SPEED;
      const stopScrolling = () => {
        scrollStep = 0;
        if (frameId !== void 0) {
          cancelAnimationFrame(frameId);
          frameId = void 0;
        }
      };
      const step = () => {
        const container = options.container.value;
        if (!container || scrollStep === 0) {
          frameId = void 0;
          return;
        }
        container.scrollBy({
          top: scrollStep
        });
        frameId = requestAnimationFrame(step);
      };
      const startScrolling = delta => {
        scrollStep = delta;
        frameId ??= requestAnimationFrame(step);
      };
      const handlePointerMove = event => {
        const container = options.container.value;
        if (!container) {
          stopScrolling();
          return;
        }
        const {
          scrollHeight,
          clientHeight
        } = container;
        if (scrollHeight <= clientHeight) {
          stopScrolling();
          return;
        }
        const rect = container.getBoundingClientRect();
        const pointerY = event.clientY;
        let direction = 0;
        let distanceIntoEdge = 0;
        if (pointerY < rect.top) {
          direction = -1;
          distanceIntoEdge = edgeSize;
        } else if (pointerY > rect.bottom) {
          direction = 1;
          distanceIntoEdge = edgeSize;
        } else {
          const distanceToTop = pointerY - rect.top;
          const distanceToBottom = rect.bottom - pointerY;
          const isNearTop = distanceToTop < edgeSize;
          const isNearBottom = distanceToBottom < edgeSize;
          if (isNearTop || isNearBottom) if (!isNearBottom || distanceToTop <= distanceToBottom) {
            direction = -1;
            distanceIntoEdge = edgeSize - Math.min(distanceToTop, edgeSize);
          } else {
            direction = 1;
            distanceIntoEdge = edgeSize - Math.min(distanceToBottom, edgeSize);
          }
        }
        if (direction === 0) {
          stopScrolling();
          return;
        }
        const intensity = Math.min(distanceIntoEdge / edgeSize, 1);
        startScrolling(direction * Math.max(2, intensity * maxSpeed));
      };
      const addListeners = () => {
        window.addEventListener("mousemove", handlePointerMove);
      };
      const removeListeners = () => {
        window.removeEventListener("mousemove", handlePointerMove);
      };
      watch([options.isActive, options.container], ([isActive, container], _prev, onCleanup) => {
        removeListeners();
        stopScrolling();
        if (isActive && container) addListeners();
        onCleanup(() => {
          removeListeners();
          stopScrolling();
        });
      }, {
        immediate: true
      });
      onScopeDispose(() => {
        removeListeners();
        stopScrolling();
      });
    }

    //#endregion
    //#region src/features/core/folders/composables/useFolders.ts
    function isDropTarget(target) {
      return target.type === "folder" || target.type === "project";
    }
    function isValidResourceType(value) {
      return ["folder", "workflow", "project"].includes(value);
    }
    function useFolders() {
      const i18n = useI18n();
      const foldersStore = useFoldersStore();
      const isDragging = computed(() => {
        return foldersStore.draggedElement !== null;
      });
      function validateFolderName(folderName) {
        if (FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX.test(folderName)) return i18n.baseText("folders.invalidName.invalidCharacters.message", {
          interpolate: {
            illegalChars: ILLEGAL_FOLDER_CHARACTERS.join(" ")
          }
        });
        if (FOLDER_NAME_ONLY_DOTS_REGEX.test(folderName)) return i18n.baseText("folders.invalidName.only.dots.message");
        if (folderName.startsWith(".")) return i18n.baseText("folders.invalidName.starts.with.dot..message");
        if (folderName.trim() === "") return i18n.baseText("folders.invalidName.empty.message");
        if (folderName.length > 128) return i18n.baseText("folders.invalidName.tooLong.message", {
          interpolate: {
            maxLength: 128
          }
        });
        return true;
      }
      /**
      * Drag and drop methods
      */
      function onDragStart(el) {
        const eventTarget = el.closest("[data-target]");
        if (!eventTarget) return;
        const dragTarget = getDragAndDropTarget(eventTarget);
        if (!dragTarget) return;
        if (dragTarget.type === "folder" || dragTarget.type === "workflow") foldersStore.draggedElement = {
          type: dragTarget.type,
          id: dragTarget.id,
          name: dragTarget.name
        };
      }
      function onDragEnd() {
        foldersStore.draggedElement = null;
        foldersStore.activeDropTarget = null;
      }
      function onDragEnter(event) {
        const eventTarget = event.target;
        if (!eventTarget || !isDragging.value) return;
        event.preventDefault();
        event.stopPropagation();
        const dragTarget = getDragAndDropTarget(eventTarget);
        if (!dragTarget || dragTarget.type !== "folder") return;
        foldersStore.activeDropTarget = {
          type: dragTarget.type,
          id: dragTarget.id,
          name: dragTarget.name
        };
      }
      function resetDropTarget() {
        foldersStore.activeDropTarget = null;
      }
      /**
      * Get the drag or drop target element from the event target
      * @param el
      */
      function getDragAndDropTarget(el) {
        const dragTarget = el.closest("[data-target]");
        if (!dragTarget) return null;
        const targetResource = dragTarget.dataset.target;
        const targetId = dragTarget.dataset.resourceid;
        const targetName = dragTarget.dataset.resourcename;
        if (!targetResource || !targetId || !targetName || !isValidResourceType(targetResource)) return null;
        return {
          type: targetResource,
          id: targetId,
          name: targetName
        };
      }
      /**
      * Handle the drop event by getting the dragged resource and drop target
      * @param event
      */
      function handleDrop(event) {
        const eventTarget = event.target;
        if (!eventTarget || !isDragging.value) return {};
        event.preventDefault();
        const draggedResourceId = foldersStore.draggedElement?.id;
        const draggedResourceType = foldersStore.draggedElement?.type;
        const draggedResourceName = foldersStore.draggedElement?.name;
        if (!draggedResourceId || !draggedResourceType || !draggedResourceName) return {};
        onDragEnd();
        const dropTarget = getDragAndDropTarget(eventTarget);
        if (!dropTarget || !isDropTarget(dropTarget)) return {};
        return {
          draggedResource: {
            type: draggedResourceType,
            id: draggedResourceId,
            name: draggedResourceName
          },
          dropTarget: {
            type: dropTarget.type,
            id: dropTarget.id,
            name: dropTarget.name
          }
        };
      }
      return {
        validateFolderName,
        onDragStart,
        onDragEnd,
        onDragEnter,
        resetDropTarget,
        handleDrop
      };
    }

    //#endregion
    //#region src/experiments/personalizedTemplates/stores/personalizedTemplates.store.ts

    function getPredefinedFromSelected(selectedApps) {
      return Object.keys(PREDEFINED_TEMPLATES_BY_NODE).filter(node => selectedApps.includes(node)).reduce((acc, app) => [...acc, ...PREDEFINED_TEMPLATES_BY_NODE[app]], []);
    }
    function getSuggestedTemplatesForLowCodingSkill(selectedApps) {
      if (selectedApps.length === 0) return SIMPLE_TEMPLATES;
      const predefinedSelected = getPredefinedFromSelected(selectedApps);
      if (predefinedSelected.length > 0) return predefinedSelected;
      return [];
    }
    function keepTop3Templates(templates) {
      if (templates.length <= 3) return templates;
      return Array.from(new Map(templates.map(t => [t.id, t])).values()).sort((a, b) => b.totalViews - a.totalViews).slice(0, 3);
    }
    function _sfc_render(_ctx, _cache) {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [renderSlot(_ctx.$slots, "default")]);
    }
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        onScopeDispose = _vueRuntimeEsmBundlerLegacy003Js.Nt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nCallout_default = _srcLegacy007Js.Fn;
        N8nOption_default = _srcLegacy007Js.G;
        N8nText_default = _srcLegacy007Js.In;
        N8nCheckbox_default = _srcLegacy007Js.J;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nCard_default = _srcLegacy007Js.X;
        N8nInputLabel_default = _srcLegacy007Js.Y;
        N8nInlineTextEdit_default = _srcLegacy007Js.a;
        N8nBreadcrumbs_default = _srcLegacy007Js.c;
        N8nLoading_default = _srcLegacy007Js.et;
        N8nTags_default = _srcLegacy007Js.h;
        N8nBadge_default = _srcLegacy007Js.it;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        createEventBus = _truncateLegacy00hJs.x;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        STORES = _useTelemetryLegacy00FJs.Cc;
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        ResourceType = _useTelemetryLegacy00FJs.Ir;
        FOLDER_LIST_ITEM_ACTIONS = _useTelemetryLegacy00FJs.Ji;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        ProjectTypes = _useTelemetryLegacy00FJs.On;
        ILLEGAL_FOLDER_CHARACTERS = _useTelemetryLegacy00FJs.Qi;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        getEasyAiWorkflowJson = _useTelemetryLegacy00FJs.Tt;
        PROJECT_MOVE_RESOURCE_MODAL = _useTelemetryLegacy00FJs.Wi;
        FOLDER_NAME_MAX_LENGTH = _useTelemetryLegacy00FJs.Xi;
        FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX = _useTelemetryLegacy00FJs.Yi;
        FOLDER_NAME_ONLY_DOTS_REGEX = _useTelemetryLegacy00FJs.Zi;
        useTagsStore = _useTelemetryLegacy00FJs._n;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        usePostHog = _useTelemetryLegacy00FJs.i;
        COMMUNITY_PLUS_ENROLLMENT_MODAL = _useTelemetryLegacy00FJs.ko;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        defineStore = _useTelemetryLegacy00FJs.xc;
        useStorage = _useTelemetryLegacy00FJs.zo;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        TEMPLATE_ONBOARDING_EXPERIMENT = _constantsLegacy00NJs.Bs;
        EXPERIMENT_TEMPLATE_RECO_V2_KEY = _constantsLegacy00NJs.Co;
        jsonParse = _constantsLegacy00NJs.Gi;
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        WORKFLOW_SHARE_MODAL_KEY = _constantsLegacy00NJs.Jo;
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY = _constantsLegacy00NJs.So;
        getResourcePermissions = _constantsLegacy00NJs._r;
        PROJECT_ROOT = _constantsLegacy00NJs.ba;
        LOCAL_STORAGE_EXPERIMENTAL_DISMISSED_SUGGESTED_WORKFLOWS = _constantsLegacy00NJs.es;
        VIEWS = _constantsLegacy00NJs.mo;
        DEFAULT_WORKFLOW_PAGE_SIZE = _constantsLegacy00NJs.r;
        EXPERIMENT_TEMPLATE_RECO_V3_KEY = _constantsLegacy00NJs.wo;
        DUPLICATE_MODAL_KEY = _constantsLegacy00NJs.xo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {
        require_dateformat = _dateformatLegacy00TJs.t;
      }, function (_useDebounceLegacy00VJs) {
        require_debounce = _useDebounceLegacy00VJs.n;
        useDebounce = _useDebounceLegacy00VJs.t;
      }, function (_useExternalHooksLegacy00XJs) {}, function (_npsSurveyStoreLegacy011Js) {}, function (_cloudPlanStoreLegacy013Js) {
        useCloudPlanStore = _cloudPlanStoreLegacy013Js.t;
      }, function (_templatesStoreLegacy015Js) {
        useTemplatesDataQualityStore = _templatesStoreLegacy015Js.a;
        trackTemplatesClick = _templatesStoreLegacy015Js.i;
        TemplateClickSource = _templatesStoreLegacy015Js.n;
        isExtraTemplateLinksExperimentEnabled = _templatesStoreLegacy015Js.r;
        useTemplatesStore = _templatesStoreLegacy015Js.t;
      }, function (_focusPanelStoreLegacy017Js) {}, function (_useWorkflowSavingLegacy019Js) {}, function (_nodeCreatorStoreLegacy01jJs) {
        useCalloutHelpers = _nodeCreatorStoreLegacy01jJs._;
      }, function (_nodeIconLegacy01lJs) {}, function (_foldersStoreLegacy01tJs) {
        useFoldersStore = _foldersStoreLegacy01tJs.t;
      }, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_ProjectIconLegacy025Js) {}, function (_ProjectCardBadgeLegacy027Js) {
        ProjectCardBadge_default = _ProjectCardBadgeLegacy027Js.t;
      }, function (_usageStoreLegacy029Js) {
        useUsageStore = _usageStoreLegacy029Js.t;
      }, function (_DraggableLegacy02dJs) {
        Draggable_default = _DraggableLegacy02dJs.t;
      }, function (_EnterpriseEditionEeLegacy02DJs) {}, function (_TimeAgoLegacy02HJs) {
        TimeAgo_default = _TimeAgoLegacy02HJs.t;
      }, function (_orderByLegacy02JJs) {}, function (_ProjectSharingLegacy02LJs) {}, function (_TagsDropdownLegacy02TJs) {}, function (_WorkflowTagsDropdownLegacy02VJs) {
        WorkflowTagsDropdown_default = _WorkflowTagsDropdownLegacy02VJs.t;
      }, function (_insightsStoreLegacy031Js) {
        useInsightsStore = _insightsStoreLegacy031Js.t;
      }, function (_insightsConstantsLegacy033Js) {}, function (_insightsUtilsLegacy035Js) {}, function (_mcpConstantsLegacy037Js) {}, function (_useMcpLegacy03rJs) {
        useMcp = _useMcpLegacy03rJs.t;
      }, function (_personalizedTemplatesV3StoreLegacy03vJs) {
        usePersonalizedTemplatesV2Store = _personalizedTemplatesV3StoreLegacy03vJs.n;
        usePersonalizedTemplatesV3Store = _personalizedTemplatesV3StoreLegacy03vJs.t;
      }, function (_useWorkflowActivateLegacy03zJs) {}, function (_ProjectBreadcrumbLegacy03JJs) {}, function (_WorkflowActivatorLegacy03LJs) {
        FolderBreadcrumbs_default = _WorkflowActivatorLegacy03LJs.n;
        WorkflowActivator_default = _WorkflowActivatorLegacy03LJs.t;
      }, function (_readyToRunWorkflowsStoreLegacy03VJs) {
        useAITemplatesStarterCollectionStore = _readyToRunWorkflowsStoreLegacy03VJs.n;
        useReadyToRunWorkflowsStore = _readyToRunWorkflowsStoreLegacy03VJs.t;
      }, function (_readyToRunWorkflowsV2StoreLegacy03XJs) {
        useProjectPages = _readyToRunWorkflowsV2StoreLegacy03XJs.n;
        useReadyToRunWorkflowsV2Store = _readyToRunWorkflowsV2StoreLegacy03XJs.t;
      }, function (_PageViewLayoutLegacy04jJs) {}, function (_EmptySharedSectionActionBoxLegacy04rJs) {
        EmptySharedSectionActionBox_default = _EmptySharedSectionActionBoxLegacy04rJs.t;
      }, function (_ResourcesListLayoutLegacy04tJs) {
        ResourcesListLayout_default = _ResourcesListLayoutLegacy04tJs.t;
      }, function (_ProjectHeaderLegacy04vJs) {
        ProjectHeader_default = _ProjectHeaderLegacy04vJs.t;
      }, function (_mcpStoreLegacy04xJs) {
        useMCPStore = _mcpStoreLegacy04xJs.t;
      }, function (_smartDecimalLegacy04zJs) {}, function (_InsightsSummaryLegacy04BJs) {
        InsightsSummary_default = _InsightsSummaryLegacy04BJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._card_19ska_123 {\n  transition: box-shadow 0.3s ease;\n  cursor: pointer;\n}\n._card_19ska_123:hover {\n  box-shadow: 0 2px 8px rgba(68, 28, 23, 0.1);\n}\n._folder-icon_19ska_131 {\n  width: var(--spacing--xl);\n  height: var(--spacing--xl);\n  flex-shrink: 0;\n  color: var(--color--text);\n  align-content: center;\n  text-align: center;\n}\n._card-header_19ska_140 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: var(--spacing--xs);\n  margin-bottom: var(--spacing--5xs);\n}\n._card-footer_19ska_148 {\n  display: flex;\n}\n._info-cell_19ska_152 + ._info-cell_19ska_152::before {\n  content: \"|\";\n  margin: 0 var(--spacing--4xs);\n}\n._cardBadge_19ska_157._with-breadcrumbs_19ska_157 .n8n-badge {\n  padding-right: 0;\n}\n._cardBadge_19ska_157._with-breadcrumbs_19ska_157 .n8n-breadcrumbs {\n  padding-left: var(--spacing--5xs);\n}\n._card-actions_19ska_164 {\n  display: flex;\n  gap: var(--spacing--xs);\n}\n@media screen and (max-width: 991px) {\n._card_19ska_123 {\n    flex-wrap: wrap;\n}\n._card_19ska_123 .n8n-card-append {\n    width: 100%;\n    margin-top: var(--spacing--3xs);\n    padding-left: 40px;\n}\n._card_19ska_123 ._card-actions_19ska_164 {\n    width: 100%;\n    justify-content: space-between;\n}\n._info-cell--created_19ska_182 {\n    display: none;\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._cardLink_g126n_123 {\n  transition: box-shadow 0.3s ease;\n  cursor: pointer;\n  padding: 0;\n  align-items: stretch;\n}\n._cardLink_g126n_123:hover {\n  box-shadow: 0 2px 8px rgba(68, 28, 23, 0.1);\n}\n._cardHeading_g126n_133 {\n  font-size: var(--font-size--sm);\n  word-break: break-word;\n  padding: var(--spacing--sm) 0 0 var(--spacing--sm);\n}\n._cardHeading_g126n_133 span {\n  color: var(--color--text--tint-1);\n}\n._cardHeadingArchived_g126n_142 {\n  color: var(--color--text--tint-1);\n}\n._description-popper_g126n_146 {\n  min-width: 300px;\n}\n._cardDescription_g126n_150 {\n  min-height: var(--spacing--xl);\n  display: flex;\n  align-items: center;\n  padding: 0 0 var(--spacing--sm) var(--spacing--sm);\n  font-size: var(--font-size--2xs);\n  color: var(--color--text--tint-1);\n  gap: var(--spacing--2xs);\n}\n._cardTags_g126n_160 {\n  display: inline-block;\n  margin-top: var(--spacing--4xs);\n}\n._cardActions_g126n_165 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  padding: 0 var(--spacing--sm) 0 0;\n  cursor: default;\n}\n._cardBadge_g126n_176 {\n  background-color: var(--color--background--light-3);\n}\n._cardBadge_g126n_176._with-breadcrumbs_g126n_180 .n8n-badge {\n  padding-right: 0;\n}\n._cardBadge_g126n_176._with-breadcrumbs_g126n_180 .n8n-breadcrumbs {\n  padding-left: var(--spacing--5xs);\n}\n._cardArchived_g126n_187 {\n  background-color: var(--color--background--light-2);\n  border-color: var(--color--foreground--tint-1);\n  color: var(--color--text);\n}\n._description-cell--mcp_g126n_193 {\n  display: inline-flex;\n  align-items: center;\n}\n._description-cell--mcp_g126n_193:hover {\n  color: var(--color--text);\n}\n@media screen and (max-width: 991px) {\n._cardLink_g126n_123 {\n    --card--padding: 0 var(--spacing--sm) var(--spacing--sm);\n    --card--append--width: 100%;\n    flex-direction: column;\n}\n._cardActions_g126n_165 {\n    width: 100%;\n    padding: 0 var(--spacing--sm) var(--spacing--sm);\n    justify-content: end;\n}\n._cardBadge_g126n_176,\n  ._breadcrumbs_g126n_213 {\n    margin-right: auto;\n}\n}\n@media screen and (max-width: 767px) {\n._breadcrumbs_g126n_213 > div {\n    flex-direction: column;\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._suggested-workflow-callout_19l89_123 {\n  margin-top: var(--spacing--xs);\n  padding-left: var(--spacing--sm);\n  padding-right: var(--spacing--md);\n  border-style: dashed;\n}\n._suggested-workflow-callout_19l89_123 ._callout-content_19l89_129 {\n  display: flex;\n  flex-direction: column;\n}\n._suggested-workflow-callout_19l89_123 ._callout-trailing-content_19l89_133 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--md);\n}\n._suggested-workflow-callout_19l89_123 a span span {\n  color: var(--callout--color--text--secondary);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._suggested-workflows_dbm58_123 {\n  margin-top: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._nodeCard_urxa7_123 {\n  width: 100px;\n  height: 80px;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n._nodeIcon_urxa7_133 {\n  font-size: var(--font-size--2xl);\n}\n._emptyStateCardContent_urxa7_137 {\n  flex: 1;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._nodeCardsContainer_ufnvi_123 {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing--sm);\n  margin-top: var(--spacing--xl);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._nodeCard_urxa7_123 {\n  width: 100px;\n  height: 80px;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n._nodeIcon_urxa7_133 {\n  font-size: var(--font-size--2xl);\n}\n._emptyStateCardContent_urxa7_137 {\n  flex: 1;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._nodeCardsContainer_ufnvi_123 {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing--sm);\n  margin-top: var(--spacing--xl);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._simplifiedLayout_pnu6z_123 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n._header_pnu6z_131 {\n  position: fixed;\n  top: var(--spacing--lg);\n  left: var(--spacing--lg);\n  opacity: 0.6;\n}\n._content_pnu6z_138 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 600px;\n  text-align: center;\n}\n._welcome_pnu6z_146 {\n  margin-bottom: var(--spacing--2xl);\n}\n._welcomeTitle_pnu6z_150 {\n  margin-bottom: var(--spacing--md);\n}\n._welcomeDescription_pnu6z_154 {\n  max-width: 480px;\n}\n._actionsContainer_pnu6z_158 {\n  display: flex;\n  gap: var(--spacing--sm);\n  justify-content: center;\n  flex-wrap: wrap;\n}\n._actionCard_pnu6z_165 {\n  width: 192px;\n  height: 230px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n._actionCard_pnu6z_165:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n._actionCard_pnu6z_165:hover ._cardIcon_pnu6z_178 svg {\n  color: var(--color--primary);\n}\n._actionCard_pnu6z_165._loading_pnu6z_181 {\n  pointer-events: none;\n  opacity: 0.7;\n}\n._cardContent_pnu6z_186 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing--md);\n}\n._cardIcon_pnu6z_178 {\n  font-size: 48px;\n  margin-bottom: var(--spacing--xs);\n}\n._cardIcon_pnu6z_178 svg {\n  transition: color 0.3s ease;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._actionsContainer_7a9z2_123 {\n  display: flex;\n  justify-content: center;\n}\n._easy-ai-workflow-callout_7a9z2_128 {\n  margin-top: var(--spacing--xs);\n  padding-left: var(--spacing--sm);\n  padding-right: var(--spacing--md);\n}\n._easy-ai-workflow-callout_7a9z2_128 ._callout-trailing-content_7a9z2_133 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--md);\n}\n._emptyStateCard_7a9z2_139 {\n  width: 192px;\n  text-align: center;\n  display: inline-flex;\n  height: 230px;\n}\n._emptyStateCard_7a9z2_139 + ._emptyStateCard_7a9z2_139 {\n  margin-left: var(--spacing--sm);\n}\n._emptyStateCard_7a9z2_139:hover svg {\n  color: var(--color--primary);\n}\n._emptyStateCardContent_7a9z2_152 {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n._emptyStateCardIcon_7a9z2_159 {\n  font-size: 48px;\n}\n._emptyStateCardIcon_7a9z2_159 svg {\n  transition: color 0.3s ease;\n}\n._add-folder-button_7a9z2_166 {\n  width: 30px;\n  height: 30px;\n}\n._breadcrumbs-container_7a9z2_171 {\n  display: flex;\n  align-items: center;\n  align-self: flex-end;\n}\n._breadcrumbs-loading_7a9z2_177 .el-skeleton__item {\n  margin: 0;\n  height: 40px;\n  width: 400px;\n}\n._empty-folder-container_7a9z2_183 button {\n  margin-top: var(--spacing--2xs);\n}\n._drag-active_7a9z2_187 *,\n._drag-active_7a9z2_187 .action-toggle {\n  cursor: grabbing !important;\n}\n._dragging_7a9z2_192 {\n  transition: opacity 0.3s ease;\n  opacity: 0.3;\n  border-style: dashed;\n  pointer-events: none;\n}\n._drop-active_7a9z2_199 .card {\n  border-color: var(--color--secondary);\n  background-color: var(--callout--color--background--secondary);\n}\n._path-separator_7a9z2_204 {\n  font-size: var(--font-size--xl);\n  color: var(--color--foreground);\n  padding: var(--spacing--3xs) var(--spacing--4xs) var(--spacing--4xs);\n}\n._name_7a9z2_210 {\n  color: var(--color--text--shade-1);\n  font-size: var(--font-size--sm);\n  padding: var(--spacing--3xs) var(--spacing--4xs) var(--spacing--4xs);\n}\n._pointer-disabled_7a9z2_216 {\n  pointer-events: none;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.add-folder-modal {\n  width: 500px;\n  padding-bottom: 0;\n}\n.add-folder-modal .el-message-box__message {\n  font-size: var(--font-size--xl);\n}\n.add-folder-modal .el-message-box__btns {\n  padding: 0 var(--spacing--lg) var(--spacing--lg);\n}\n.add-folder-modal .el-message-box__content {\n  padding: var(--spacing--lg);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/core/folders/components/FolderCard.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$5 = {
          "data-test-id": "folder-card"
        };
        _hoisted_2$1 = {
          key: 0
        };
        FolderCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "FolderCard",
          props: {
            data: {},
            personalProject: {},
            actions: {
              default: () => []
            },
            readOnly: {
              type: Boolean,
              default: true
            },
            showOwnershipBadge: {
              type: Boolean,
              default: false
            }
          },
          emits: ["action", "folderOpened"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const i18n = useI18n();
            const route = useRoute();
            const router = useRouter();
            const foldersStore = useFoldersStore();
            const emit = __emit;
            const hiddenBreadcrumbsItemsAsync = ref(new Promise(() => {}));
            const cachedHiddenBreadcrumbsItems = ref([]);
            const resourceTypeLabel = computed(() => i18n.baseText("generic.folder").toLowerCase());
            const cardUrl = computed(() => {
              return getFolderUrl(props.data.id);
            });
            const projectName = computed(() => {
              if (props.data.homeProject?.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
              return props.data.homeProject?.name;
            });
            const cardBreadcrumbs = computed(() => {
              if (props.data.parentFolder) return [{
                id: props.data.parentFolder.id,
                name: props.data.parentFolder.name,
                label: props.data.parentFolder.name,
                href: router.resolve({
                  name: VIEWS.PROJECTS_FOLDERS,
                  params: {
                    projectId: props.data.homeProject?.id,
                    folderId: props.data.parentFolder.id
                  }
                }).href
              }];
              return [];
            });
            const showCardBreadcrumbs = computed(() => {
              return props.showOwnershipBadge && cardBreadcrumbs.value.length;
            });
            const getFolderUrl = folderId => {
              return router.resolve({
                name: VIEWS.PROJECTS_FOLDERS,
                params: {
                  projectId: route.params.projectId,
                  folderId
                },
                query: route.query
              }).href;
            };
            const onAction = async action => {
              if (action === FOLDER_LIST_ITEM_ACTIONS.OPEN) {
                emit("folderOpened", {
                  folder: props.data
                });
                await router.push(cardUrl.value);
                return;
              }
              emit("action", {
                action,
                folderId: props.data.id
              });
            };
            const fetchHiddenBreadCrumbsItems = async () => {
              if (!props.data.homeProject?.id || !projectName.value || !props.data.parentFolder) hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);else {
                if (cachedHiddenBreadcrumbsItems.value.length) {
                  hiddenBreadcrumbsItemsAsync.value = Promise.resolve(cachedHiddenBreadcrumbsItems.value);
                  return;
                }
                const loadedItem = foldersStore.getHiddenBreadcrumbsItems({
                  id: props.data.homeProject.id,
                  name: projectName.value
                }, props.data.parentFolder.id);
                hiddenBreadcrumbsItemsAsync.value = loadedItem;
                cachedHiddenBreadcrumbsItems.value = await loadedItem;
              }
            };
            const onBreadcrumbItemClick = async item => {
              if (item.href) await router.push(item.href);
            };
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(_component_RouterLink, {
                to: cardUrl.value,
                onClick: _cache[1] || (_cache[1] = () => emit("folderOpened", {
                  folder: props.data
                }))
              }, {
                default: withCtx(() => [createVNode(unref(N8nCard_default), {
                  class: normalizeClass(_ctx.$style.card)
                }, {
                  prepend: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    "data-test-id": "folder-card-icon",
                    class: normalizeClass(_ctx.$style["folder-icon"]),
                    icon: "folder",
                    size: "xlarge",
                    "stroke-width": 1
                  }, null, 8, ["class"])]),
                  header: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["card-header"])
                  }, [createVNode(unref(N8nHeading_default), {
                    tag: "h2",
                    bold: "",
                    size: "small",
                    "data-test-id": "folder-card-name"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(_ctx.data.name), 1)]),
                    _: 1
                  }), _ctx.readOnly ? (openBlock(), createBlock(unref(N8nBadge_default), {
                    key: 0,
                    class: "ml-3xs",
                    theme: "tertiary",
                    bold: ""
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.readonly")), 1)]),
                    _: 1
                  })) : createCommentVNode("", true)], 2)]),
                  footer: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["card-footer"])
                  }, [_ctx.data.workflowCount > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
                    key: 0,
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--workflow-count"]]),
                    "data-test-id": "folder-card-folder-count"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.workflow", {
                      interpolate: {
                        count: _ctx.data.workflowCount
                      }
                    })), 1)]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true), _ctx.data.subFolderCount > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
                    key: 1,
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--workflow-count"]]),
                    "data-test-id": "folder-card-workflow-count"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.folderCount", {
                      interpolate: {
                        count: _ctx.data.subFolderCount
                      }
                    })), 1)]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--updated"]]),
                    "data-test-id": "folder-card-last-updated"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " ", 1), createVNode(TimeAgo_default, {
                      date: String(_ctx.data.updatedAt)
                    }, null, 8, ["date"])]),
                    _: 1
                  }, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--created"]]),
                    "data-test-id": "folder-card-created"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.created")) + " ", 1), createVNode(TimeAgo_default, {
                      date: String(_ctx.data.createdAt)
                    }, null, 8, ["date"])]),
                    _: 1
                  }, 8, ["class"])], 2)]),
                  append: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["card-actions"]),
                    onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"]))
                  }, [_ctx.data.homeProject && _ctx.showOwnershipBadge ? (openBlock(), createElementBlock("div", _hoisted_2$1, [createVNode(ProjectCardBadge_default, {
                    class: normalizeClass({
                      [_ctx.$style.cardBadge]: true,
                      [_ctx.$style["with-breadcrumbs"]]: showCardBreadcrumbs.value
                    }),
                    resource: _ctx.data,
                    "resource-type": unref(ResourceType).Workflow,
                    "resource-type-label": resourceTypeLabel.value,
                    "personal-project": _ctx.personalProject,
                    "show-badge-border": false
                  }, {
                    default: withCtx(() => [showCardBreadcrumbs.value ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(_ctx.$style.breadcrumbs)
                    }, [createVNode(unref(N8nBreadcrumbs_default), {
                      items: cardBreadcrumbs.value,
                      "hidden-items": _ctx.data.parentFolder?.parentFolderId !== null ? hiddenBreadcrumbsItemsAsync.value : void 0,
                      "path-truncated": _ctx.data.parentFolder?.parentFolderId !== null,
                      "highlight-last-item": false,
                      "hidden-items-trigger": "hover",
                      theme: "small",
                      "data-test-id": "folder-card-breadcrumbs",
                      onTooltipOpened: fetchHiddenBreadCrumbsItems,
                      onItemSelected: onBreadcrumbItemClick
                    }, {
                      prepend: withCtx(() => _cache[2] || (_cache[2] = [])),
                      _: 1
                    }, 8, ["items", "hidden-items", "path-truncated"])], 2)) : createCommentVNode("", true)]),
                    _: 1
                  }, 8, ["class", "resource", "resource-type", "resource-type-label", "personal-project"])])) : createCommentVNode("", true), _ctx.actions.length ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
                    key: 1,
                    actions: _ctx.actions,
                    theme: "dark",
                    "data-test-id": "folder-card-actions",
                    onAction
                  }, null, 8, ["actions"])) : createCommentVNode("", true)], 2)]),
                  _: 1
                }, 8, ["class"])]),
                _: 1
              }, 8, ["to"])]);
            };
          }
        }); //#endregion
        //#region src/features/core/folders/components/FolderCard.vue?vue&type=style&index=0&lang.module.scss
        card = "_card_19ska_123";
        cardBadge$1 = "_cardBadge_19ska_157";
        FolderCard_vue_vue_type_style_index_0_lang_module_default = {
          card,
          "folder-icon": "_folder-icon_19ska_131",
          "card-header": "_card-header_19ska_140",
          "card-footer": "_card-footer_19ska_148",
          "info-cell": "_info-cell_19ska_152",
          cardBadge: cardBadge$1,
          "with-breadcrumbs": "_with-breadcrumbs_19ska_157",
          "card-actions": "_card-actions_19ska_164",
          "info-cell--created": "_info-cell--created_19ska_182"
        }; //#endregion
        //#region src/features/core/folders/components/FolderCard.vue
        cssModules$9 = {
          "$style": FolderCard_vue_vue_type_style_index_0_lang_module_default
        };
        FolderCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(FolderCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$9]]); //#endregion
        //#region src/app/components/WorkflowCard.vue?vue&type=script&setup=true&lang.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
        _hoisted_1$4 = {
          key: 0
        };
        WorkflowCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowCard",
          props: {
            data: {},
            readOnly: {
              type: Boolean,
              default: false
            },
            workflowListEventBus: {
              default: void 0
            },
            showOwnershipBadge: {
              type: Boolean,
              default: false
            },
            areTagsEnabled: {
              type: Boolean,
              default: true
            },
            isMcpEnabled: {
              type: Boolean,
              default: false
            },
            areFoldersEnabled: {
              type: Boolean,
              default: false
            }
          },
          emits: ["expand:tags", "click:tag", "workflow:deleted", "workflow:archived", "workflow:unarchived", "workflow:active-toggle", "action:move-to-folder"],
          setup(__props, {
            emit: __emit
          }) {
            const WORKFLOW_LIST_ITEM_ACTIONS = {
              OPEN: "open",
              SHARE: "share",
              DUPLICATE: "duplicate",
              DELETE: "delete",
              ARCHIVE: "archive",
              UNARCHIVE: "unarchive",
              MOVE: "move",
              MOVE_TO_FOLDER: "moveToFolder",
              ENABLE_MCP_ACCESS: "enableMCPAccess",
              REMOVE_MCP_ACCESS: "removeMCPAccess"
            };
            const props = __props;
            const emit = __emit;
            const toast = useToast();
            const message = useMessage();
            const locale = useI18n();
            const router = useRouter();
            const route = useRoute();
            const telemetry = useTelemetry();
            const mcp = useMcp();
            const uiStore = useUIStore();
            const usersStore = useUsersStore();
            const workflowsStore = useWorkflowsStore();
            const projectsStore = useProjectsStore();
            const foldersStore = useFoldersStore();
            const mcpStore = useMCPStore();
            const hiddenBreadcrumbsItemsAsync = ref(new Promise(() => {}));
            const cachedHiddenBreadcrumbsItems = ref([]);
            const mcpToggleStatus = ref(null);
            const resourceTypeLabel = computed(() => locale.baseText("generic.workflow").toLowerCase());
            const currentUser = computed(() => usersStore.currentUser ?? {});
            const workflowPermissions = computed(() => getResourcePermissions(props.data.scopes).workflow);
            const showFolders = computed(() => {
              return props.areFoldersEnabled && route.name !== VIEWS.WORKFLOWS;
            });
            const showCardBreadcrumbs = computed(() => {
              return props.showOwnershipBadge && !isSomeoneElsesWorkflow.value && cardBreadcrumbs.value.length;
            });
            const projectName = computed(() => {
              if (props.data.homeProject?.type === ProjectTypes.Personal) return locale.baseText("projects.menu.personal");
              return props.data.homeProject?.name;
            });
            const cardBreadcrumbs = computed(() => {
              if (props.data.parentFolder) return [{
                id: props.data.parentFolder.id,
                name: props.data.parentFolder.name,
                label: props.data.parentFolder.name,
                href: router.resolve({
                  name: VIEWS.PROJECTS_FOLDERS,
                  params: {
                    projectId: props.data.homeProject?.id,
                    folderId: props.data.parentFolder.id
                  }
                }).href
              }];
              return [];
            });
            const actions = computed(() => {
              const items = [{
                label: locale.baseText("workflows.item.open"),
                value: WORKFLOW_LIST_ITEM_ACTIONS.OPEN
              }, {
                label: locale.baseText("workflows.item.share"),
                value: WORKFLOW_LIST_ITEM_ACTIONS.SHARE
              }];
              if (workflowPermissions.value.create && !props.readOnly && !props.data.isArchived) items.push({
                label: locale.baseText("workflows.item.duplicate"),
                value: WORKFLOW_LIST_ITEM_ACTIONS.DUPLICATE
              });
              if (!props.readOnly && (workflowPermissions.value.update || workflowPermissions.value.move && projectsStore.isTeamProjectFeatureEnabled) && showFolders.value && route.name !== VIEWS.SHARED_WORKFLOWS) items.push({
                label: locale.baseText("folders.actions.moveToFolder"),
                value: WORKFLOW_LIST_ITEM_ACTIONS.MOVE_TO_FOLDER
              });
              if (workflowPermissions.value.delete && !props.readOnly) if (!props.data.isArchived) items.push({
                label: locale.baseText("workflows.item.archive"),
                value: WORKFLOW_LIST_ITEM_ACTIONS.ARCHIVE
              });else {
                items.push({
                  label: locale.baseText("workflows.item.delete"),
                  value: WORKFLOW_LIST_ITEM_ACTIONS.DELETE
                });
                items.push({
                  label: locale.baseText("workflows.item.unarchive"),
                  value: WORKFLOW_LIST_ITEM_ACTIONS.UNARCHIVE
                });
              }
              if (props.isMcpEnabled && workflowPermissions.value.update && !props.readOnly && !props.data.isArchived) if (isAvailableInMCP.value) items.push({
                label: locale.baseText("workflows.item.disableMCPAccess"),
                value: WORKFLOW_LIST_ITEM_ACTIONS.REMOVE_MCP_ACCESS,
                disabled: !props.data.active
              });else items.push({
                label: locale.baseText("workflows.item.enableMCPAccess"),
                value: WORKFLOW_LIST_ITEM_ACTIONS.ENABLE_MCP_ACCESS,
                disabled: !props.data.active
              });
              return items;
            });
            const formattedCreatedAtDate = computed(() => {
              const currentYear = (/* @__PURE__ */new Date()).getFullYear().toString();
              return (0, import_dateformat.default)(props.data.createdAt, `d mmmm${String(props.data.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
            });
            const isAvailableInMCP = computed(() => {
              if (mcpToggleStatus.value === null) return props.data.settings?.availableInMCP ?? false;
              return mcpToggleStatus.value;
            });
            const isSomeoneElsesWorkflow = computed(() => props.data.homeProject?.type !== ProjectTypes.Team && props.data.homeProject?.id !== projectsStore.personalProject?.id);
            async function onClick(event) {
              if (event?.ctrlKey || event?.metaKey) {
                const route$1 = router.resolve({
                  name: VIEWS.WORKFLOW,
                  params: {
                    name: props.data.id
                  }
                });
                window.open(route$1.href, "_blank");
                return;
              }
              await router.push({
                name: VIEWS.WORKFLOW,
                params: {
                  name: props.data.id
                }
              });
            }
            function onClickTag(tagId, event) {
              event.stopPropagation();
              emit("click:tag", tagId, event);
            }
            function onExpandTags() {
              emit("expand:tags");
            }
            async function onAction(action) {
              switch (action) {
                case WORKFLOW_LIST_ITEM_ACTIONS.OPEN:
                  await onClick();
                  break;
                case WORKFLOW_LIST_ITEM_ACTIONS.DUPLICATE:
                  uiStore.openModalWithData({
                    name: DUPLICATE_MODAL_KEY,
                    data: {
                      id: props.data.id,
                      name: props.data.name,
                      tags: (props.data.tags ?? []).map(tag => typeof tag !== "string" && "id" in tag ? tag.id : tag),
                      externalEventBus: props.workflowListEventBus,
                      parentFolderId: props.data.parentFolder?.id
                    }
                  });
                  break;
                case WORKFLOW_LIST_ITEM_ACTIONS.SHARE:
                  uiStore.openModalWithData({
                    name: WORKFLOW_SHARE_MODAL_KEY,
                    data: {
                      id: props.data.id
                    }
                  });
                  telemetry.track("User opened sharing modal", {
                    workflow_id: props.data.id,
                    user_id_sharer: currentUser.value.id,
                    sub_view: "Workflows listing"
                  });
                  break;
                case WORKFLOW_LIST_ITEM_ACTIONS.DELETE:
                  await deleteWorkflow();
                  break;
                case WORKFLOW_LIST_ITEM_ACTIONS.ARCHIVE:
                  await archiveWorkflow();
                  break;
                case WORKFLOW_LIST_ITEM_ACTIONS.UNARCHIVE:
                  await unarchiveWorkflow();
                  break;
                case WORKFLOW_LIST_ITEM_ACTIONS.MOVE:
                  moveResource();
                  break;
                case WORKFLOW_LIST_ITEM_ACTIONS.MOVE_TO_FOLDER:
                  emit("action:move-to-folder", {
                    id: props.data.id,
                    name: props.data.name,
                    parentFolderId: props.data.parentFolder?.id,
                    sharedWithProjects: props.data.sharedWithProjects
                  });
                  break;
                case WORKFLOW_LIST_ITEM_ACTIONS.ENABLE_MCP_ACCESS:
                  await toggleMCPAccess(true);
                  break;
                case WORKFLOW_LIST_ITEM_ACTIONS.REMOVE_MCP_ACCESS:
                  await toggleMCPAccess(false);
                  break;
              }
            }
            async function toggleMCPAccess(enabled) {
              try {
                await mcpStore.toggleWorkflowMcpAccess(props.data.id, enabled);
                mcpToggleStatus.value = enabled;
                mcp.trackMcpAccessEnabledForWorkflow(props.data.id);
              } catch (error) {
                toast.showError(error, locale.baseText("workflowSettings.toggleMCP.error.title"));
                return;
              }
            }
            async function deleteWorkflow() {
              if ((await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowDelete.message", {
                interpolate: {
                  workflowName: props.data.name
                }
              }), locale.baseText("mainSidebar.confirmMessage.workflowDelete.headline"), {
                type: "warning",
                confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.confirmButtonText"),
                cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.cancelButtonText")
              })) !== "confirm") return;
              try {
                await workflowsStore.deleteWorkflow(props.data.id);
              } catch (error) {
                toast.showError(error, locale.baseText("generic.deleteWorkflowError"));
                return;
              }
              toast.showMessage({
                title: locale.baseText("mainSidebar.showMessage.handleSelect1.title", {
                  interpolate: {
                    workflowName: props.data.name
                  }
                }),
                type: "success"
              });
              emit("workflow:deleted");
            }
            async function archiveWorkflow() {
              if (props.data.active) {
                if ((await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowArchive.message", {
                  interpolate: {
                    workflowName: props.data.name
                  }
                }), locale.baseText("mainSidebar.confirmMessage.workflowArchive.headline"), {
                  type: "warning",
                  confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.confirmButtonText"),
                  cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.cancelButtonText")
                })) !== "confirm") return;
              }
              try {
                await workflowsStore.archiveWorkflow(props.data.id);
              } catch (error) {
                toast.showError(error, locale.baseText("generic.archiveWorkflowError"));
                return;
              }
              toast.showMessage({
                title: locale.baseText("mainSidebar.showMessage.handleArchive.title", {
                  interpolate: {
                    workflowName: props.data.name
                  }
                }),
                type: "success"
              });
              emit("workflow:archived");
            }
            async function unarchiveWorkflow() {
              try {
                await workflowsStore.unarchiveWorkflow(props.data.id);
              } catch (error) {
                toast.showError(error, locale.baseText("generic.unarchiveWorkflowError"));
                return;
              }
              toast.showMessage({
                title: locale.baseText("mainSidebar.showMessage.handleUnarchive.title", {
                  interpolate: {
                    workflowName: props.data.name
                  }
                }),
                type: "success"
              });
              emit("workflow:unarchived");
            }
            const fetchHiddenBreadCrumbsItems = async () => {
              if (!props.data.homeProject?.id || !projectName.value || !props.data.parentFolder) hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);else {
                if (cachedHiddenBreadcrumbsItems.value.length) {
                  hiddenBreadcrumbsItemsAsync.value = Promise.resolve(cachedHiddenBreadcrumbsItems.value);
                  return;
                }
                const loadedItem = foldersStore.getHiddenBreadcrumbsItems({
                  id: props.data.homeProject.id,
                  name: projectName.value
                }, props.data.parentFolder.id);
                hiddenBreadcrumbsItemsAsync.value = loadedItem;
                cachedHiddenBreadcrumbsItems.value = await loadedItem;
              }
            };
            function moveResource() {
              uiStore.openModalWithData({
                name: PROJECT_MOVE_RESOURCE_MODAL,
                data: {
                  resource: props.data,
                  resourceType: ResourceType.Workflow,
                  resourceTypeLabel: resourceTypeLabel.value,
                  eventBus: props.workflowListEventBus
                }
              });
            }
            const onWorkflowActiveToggle = async value => {
              emit("workflow:active-toggle", value);
              if (!value.active && props.isMcpEnabled && isAvailableInMCP.value) {
                mcpToggleStatus.value = null;
                toast.showToast({
                  title: locale.baseText("mcp.workflowDeactivated.title"),
                  message: locale.baseText("mcp.workflowDeactivated.message"),
                  type: "info"
                });
              }
            };
            const onBreadcrumbItemClick = async item => {
              if (item.href) await router.push(item.href);
            };
            const tags = computed(() => props.data.tags?.map(tag => typeof tag === "string" ? {
              id: tag,
              name: tag
            } : tag) ?? []);
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nCard_default), {
                class: normalizeClass({
                  [_ctx.$style.cardLink]: true,
                  [_ctx.$style.cardArchived]: _ctx.data.isArchived
                }),
                "data-test-id": "workflow-card",
                onClick
              }, {
                header: withCtx(() => [createVNode(unref(N8nTooltip_default), {
                  content: _ctx.data.description,
                  disabled: !_ctx.data.description,
                  "data-test-id": "workflow-card-name-tooltip",
                  "popper-class": _ctx.$style["description-popper"]
                }, {
                  default: withCtx(() => [createVNode(unref(N8nText_default), {
                    tag: "h2",
                    bold: "",
                    class: normalizeClass({
                      [_ctx.$style.cardHeading]: true,
                      [_ctx.$style.cardHeadingArchived]: _ctx.data.isArchived
                    }),
                    "data-test-id": "workflow-card-name"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(_ctx.data.name) + " ", 1), !workflowPermissions.value.update ? (openBlock(), createBlock(unref(N8nBadge_default), {
                      key: 0,
                      class: "ml-3xs",
                      theme: "tertiary",
                      bold: ""
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.readonly")), 1)]),
                      _: 1
                    })) : createCommentVNode("", true)]),
                    _: 1
                  }, 8, ["class"])]),
                  _: 1
                }, 8, ["content", "disabled", "popper-class"])]),
                append: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardActions),
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, [_ctx.showOwnershipBadge ? (openBlock(), createBlock(ProjectCardBadge_default, {
                  key: 0,
                  class: normalizeClass({
                    [_ctx.$style.cardBadge]: true,
                    [_ctx.$style["with-breadcrumbs"]]: showCardBreadcrumbs.value
                  }),
                  resource: _ctx.data,
                  "resource-type": unref(ResourceType).Workflow,
                  "resource-type-label": resourceTypeLabel.value,
                  "personal-project": unref(projectsStore).personalProject,
                  "show-badge-border": false
                }, {
                  default: withCtx(() => [showCardBreadcrumbs.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.breadcrumbs)
                  }, [createVNode(unref(N8nBreadcrumbs_default), {
                    items: cardBreadcrumbs.value,
                    "hidden-items": _ctx.data.parentFolder?.parentFolderId !== null ? hiddenBreadcrumbsItemsAsync.value : void 0,
                    "path-truncated": _ctx.data.parentFolder?.parentFolderId !== null,
                    "highlight-last-item": false,
                    "hidden-items-trigger": "hover",
                    theme: "small",
                    "data-test-id": "workflow-card-breadcrumbs",
                    onTooltipOpened: fetchHiddenBreadCrumbsItems,
                    onItemSelected: onBreadcrumbItemClick
                  }, {
                    prepend: withCtx(() => _cache[2] || (_cache[2] = [])),
                    _: 1
                  }, 8, ["items", "hidden-items", "path-truncated"])], 2)) : createCommentVNode("", true)]),
                  _: 1
                }, 8, ["class", "resource", "resource-type", "resource-type-label", "personal-project"])) : createCommentVNode("", true), _ctx.data.isArchived ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: "text-light",
                  size: "small",
                  bold: "",
                  class: "ml-s mr-s",
                  "data-test-id": "workflow-card-archived"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.archived")), 1)]),
                  _: 1
                })) : (openBlock(), createBlock(WorkflowActivator_default, {
                  key: 2,
                  class: "mr-s",
                  "is-archived": _ctx.data.isArchived,
                  "workflow-active": _ctx.data.active,
                  "workflow-id": _ctx.data.id,
                  "workflow-permissions": workflowPermissions.value,
                  "data-test-id": "workflow-card-activator",
                  "onUpdate:workflowActive": onWorkflowActiveToggle
                }, null, 8, ["is-archived", "workflow-active", "workflow-id", "workflow-permissions"])), createVNode(unref(N8nActionToggle_default), {
                  actions: actions.value,
                  theme: "dark",
                  "data-test-id": "workflow-card-actions",
                  onAction
                }, null, 8, ["actions"])], 2)]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardDescription)
                }, [withDirectives(createBaseVNode("span", null, [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.updated")) + " ", 1), createVNode(TimeAgo_default, {
                  date: String(_ctx.data.updatedAt)
                }, null, 8, ["date"]), _cache[1] || (_cache[1] = createTextVNode(" | "))], 512), [[vShow, _ctx.data]]), withDirectives(createBaseVNode("span", null, [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.created")) + " " + toDisplayString(formattedCreatedAtDate.value) + " ", 1), props.isMcpEnabled && isAvailableInMCP.value ? (openBlock(), createElementBlock("span", _hoisted_1$4, "|")) : createCommentVNode("", true)], 512), [[vShow, _ctx.data]]), withDirectives(createBaseVNode("span", {
                  class: normalizeClass([_ctx.$style["description-cell"], _ctx.$style["description-cell--mcp"]]),
                  "data-test-id": "workflow-card-mcp"
                }, [createVNode(unref(N8nTooltip_default), {
                  placement: "right",
                  content: unref(locale).baseText("workflows.item.availableInMCP"),
                  "data-test-id": "workflow-card-mcp-tooltip"
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    icon: "mcp",
                    size: "medium"
                  })]),
                  _: 1
                }, 8, ["content"])], 2), [[vShow, props.isMcpEnabled && isAvailableInMCP.value]]), props.areTagsEnabled && _ctx.data.tags && _ctx.data.tags.length > 0 ? withDirectives((openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.cardTags)
                }, [createVNode(unref(N8nTags_default), {
                  tags: tags.value,
                  "truncate-at": 3,
                  truncate: "",
                  "data-test-id": "workflow-card-tags",
                  "onClick:tag": onClickTag,
                  onExpand: onExpandTags
                }, null, 8, ["tags"])], 2)), [[vShow, _ctx.data]]) : createCommentVNode("", true)], 2)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/app/components/WorkflowCard.vue?vue&type=style&index=0&lang.module.scss
        cardLink = "_cardLink_g126n_123";
        cardHeading = "_cardHeading_g126n_133";
        cardHeadingArchived = "_cardHeadingArchived_g126n_142";
        cardDescription = "_cardDescription_g126n_150";
        cardTags = "_cardTags_g126n_160";
        cardActions = "_cardActions_g126n_165";
        cardBadge = "_cardBadge_g126n_176";
        cardArchived = "_cardArchived_g126n_187";
        breadcrumbs = "_breadcrumbs_g126n_213";
        WorkflowCard_vue_vue_type_style_index_0_lang_module_default = {
          cardLink,
          cardHeading,
          cardHeadingArchived,
          "description-popper": "_description-popper_g126n_146",
          cardDescription,
          cardTags,
          cardActions,
          cardBadge,
          "with-breadcrumbs": "_with-breadcrumbs_g126n_180",
          cardArchived,
          "description-cell--mcp": "_description-cell--mcp_g126n_193",
          breadcrumbs
        }; //#endregion
        //#region src/app/components/WorkflowCard.vue
        cssModules$8 = {
          "$style": WorkflowCard_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$8]]); //#endregion
        //#region src/app/composables/useAutoScrollOnDrag.ts
        DEFAULT_EDGE = 80;
        DEFAULT_MAX_SPEED = 20;
        SIMPLE_TEMPLATES = [6270, 5271, 2178];
        PREDEFINED_TEMPLATES_BY_NODE = {
          "n8n-nodes-base.gmail": [5678, 4722, 5694],
          "n8n-nodes-base.googleSheets": [5694, 5690, 5906],
          "n8n-nodes-base.telegram": [5626, 2114, 4875],
          "@n8n/n8n-nodes-langchain.openAi": [2462, 2722, 2178],
          "@n8n/n8n-nodes-langchain.googleGemini": [5993, 6270, 5677],
          "n8n-nodes-base.googleCalendar": [2328, 3393, 2110],
          "n8n-nodes-base.youTube": [3188, 4846, 4506],
          "n8n-nodes-base.airtable": [3053, 2700, 2579]
        };
        usePersonalizedTemplatesStore = defineStore(STORES.PERSONALIZED_TEMPLATES, () => {
          const telemetry = useTelemetry();
          const posthogStore = usePostHog();
          const cloudPlanStore = useCloudPlanStore();
          const templatesStore = useTemplatesStore();
          const allSuggestedWorkflows = ref([]);
          const dismissedSuggestedWorkflowsStorage = useStorage(LOCAL_STORAGE_EXPERIMENTAL_DISMISSED_SUGGESTED_WORKFLOWS);
          const dismissedSuggestedWorkflows = computed(() => {
            return dismissedSuggestedWorkflowsStorage.value ? jsonParse(dismissedSuggestedWorkflowsStorage.value, {
              fallbackValue: []
            }) : [];
          });
          const suggestedWorkflows = computed(() => allSuggestedWorkflows.value.filter(({
            id
          }) => !dismissedSuggestedWorkflows.value.includes(id)));
          const dismissSuggestedWorkflow = id => {
            dismissedSuggestedWorkflowsStorage.value = JSON.stringify([...(dismissedSuggestedWorkflows.value ?? []), id]);
          };
          const isFeatureEnabled = () => {
            return posthogStore.getVariant(TEMPLATE_ONBOARDING_EXPERIMENT.name) === TEMPLATE_ONBOARDING_EXPERIMENT.variantSuggestedTemplates && cloudPlanStore.userIsTrialing;
          };
          const trackUserWasRecommendedTemplates = templateIds => {
            telemetry.track("User was recommended personalized templates", {
              templateIds
            });
          };
          const trackUserClickedOnPersonalizedTemplate = templateId => {
            telemetry.track("User clicked on personalized template callout", {
              templateId
            });
          };
          const trackUserDismissedCallout = templateId => {
            telemetry.track("User dismissed personalized template callout", {
              templateId
            });
          };
          const fetchSuggestedWorkflows = async (codingSkill, selectedApps) => {
            if (!isFeatureEnabled()) return;
            try {
              if (codingSkill === 1) {
                const predefinedSelected = getSuggestedTemplatesForLowCodingSkill(selectedApps);
                if (predefinedSelected.length > 0) {
                  const suggestedWorkflowsPromises$1 = predefinedSelected.map(async id => await templatesStore.fetchTemplateById(id.toString()));
                  const top3Templates$1 = keepTop3Templates(await Promise.all(suggestedWorkflowsPromises$1));
                  allSuggestedWorkflows.value = top3Templates$1;
                  trackUserWasRecommendedTemplates(top3Templates$1.map(t => t.id));
                  return;
                }
              }
              const suggestedWorkflowsPromises = (await templatesStore.getWorkflows({
                categories: [],
                search: "",
                sort: "rank:desc",
                nodes: selectedApps.length > 0 ? selectedApps : void 0,
                combineWith: "or"
              })).slice(0, 3).map(workflow => workflow.id).map(async id => await templatesStore.fetchTemplateById(id.toString()));
              const top3Templates = keepTop3Templates(await Promise.all(suggestedWorkflowsPromises));
              allSuggestedWorkflows.value = top3Templates;
              trackUserWasRecommendedTemplates(top3Templates.map(t => t.id));
            } catch (error) {}
          };
          const getTemplateRoute = id => {
            return {
              name: VIEWS.TEMPLATE,
              params: {
                id
              }
            };
          };
          watch(() => cloudPlanStore.currentUserCloudInfo, async userInfo => {
            if (!userInfo) return;
            const codingSkill = cloudPlanStore.codingSkill;
            await fetchSuggestedWorkflows(codingSkill, cloudPlanStore.selectedApps ?? []);
          });
          return {
            isFeatureEnabled,
            suggestedWorkflows,
            dismissSuggestedWorkflow,
            trackUserClickedOnPersonalizedTemplate,
            trackUserDismissedCallout,
            getTemplateRoute
          };
        }); //#endregion
        //#region src/experiments/personalizedTemplates/components/SuggestedWorkflowCard.vue?vue&type=script&setup=true&lang.ts
        SuggestedWorkflowCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SuggestedWorkflowCard",
          props: {
            data: {}
          },
          setup(__props) {
            const {
              data
            } = __props;
            const {
              dismissSuggestedWorkflow,
              getTemplateRoute,
              trackUserClickedOnPersonalizedTemplate,
              trackUserDismissedCallout
            } = usePersonalizedTemplatesStore();
            const locale = useI18n();
            const onDismissCallout = () => {
              trackUserDismissedCallout(data.id);
              dismissSuggestedWorkflow(data.id);
            };
            const onTryTemplate = () => {
              trackUserClickedOnPersonalizedTemplate(data.id);
              dismissSuggestedWorkflow(data.id);
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nCallout_default), {
                theme: "secondary",
                iconless: true,
                class: normalizeClass(_ctx.$style["suggested-workflow-callout"]),
                slim: true
              }, {
                trailingContent: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["callout-trailing-content"])
                }, [createVNode(unref(N8nLink_default), {
                  "data-test-id": "suggested-workflow-button",
                  size: "small",
                  to: unref(getTemplateRoute)(unref(data).id),
                  onClick: onTryTemplate
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.itemSuggestion.try")), 1)]),
                  _: 1
                }, 8, ["to"]), createVNode(unref(N8nIcon_default), {
                  size: "small",
                  icon: "x",
                  title: unref(locale).baseText("generic.dismiss"),
                  class: "clickable",
                  onClick: onDismissCallout
                }, null, 8, ["title"])], 2)]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["callout-content"])
                }, toDisplayString(unref(data).name), 3)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/experiments/personalizedTemplates/components/SuggestedWorkflowCard.vue?vue&type=style&index=0&lang.module.scss
        SuggestedWorkflowCard_vue_vue_type_style_index_0_lang_module_default = {
          "suggested-workflow-callout": "_suggested-workflow-callout_19l89_123",
          "callout-content": "_callout-content_19l89_129",
          "callout-trailing-content": "_callout-trailing-content_19l89_133"
        }; //#endregion
        //#region src/experiments/personalizedTemplates/components/SuggestedWorkflowCard.vue
        cssModules$7 = {
          "$style": SuggestedWorkflowCard_vue_vue_type_style_index_0_lang_module_default
        };
        SuggestedWorkflowCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(SuggestedWorkflowCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$7]]); //#endregion
        //#region src/experiments/personalizedTemplates/components/SuggestedWorkflows.vue?vue&type=style&index=0&lang.module.scss
        SuggestedWorkflows_vue_vue_type_style_index_0_lang_module_default = {
          "suggested-workflows": "_suggested-workflows_dbm58_123"
        }; //#endregion
        //#region src/experiments/personalizedTemplates/components/SuggestedWorkflows.vue
        _sfc_main = {};
        _hoisted_1$3 = {
          class: "suggested-workflows",
          "data-test-id": "suggested-workflows"
        };
        cssModules$6 = {
          "$style": SuggestedWorkflows_vue_vue_type_style_index_0_lang_module_default
        };
        SuggestedWorkflows_default = /* @__PURE__ */__plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules$6]]); //#endregion
        //#region src/experiments/templateRecoV2/components/NodeRecommendationCard.vue?vue&type=script&setup=true&lang.ts
        NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default$1 = /* @__PURE__ */defineComponent({
          __name: "NodeRecommendationCard",
          props: {
            nodeName: {}
          },
          setup(__props) {
            const props = __props;
            const uiStore = useUIStore();
            const nodeTypesStore = useNodeTypesStore();
            const {
              trackMinicardClick
            } = usePersonalizedTemplatesV2Store();
            const nodeType = computed(() => nodeTypesStore.getNodeType(props.nodeName));
            const openModal = () => {
              trackMinicardClick(nodeType.value?.displayName ?? props.nodeName);
              uiStore.openModalWithData({
                name: EXPERIMENT_TEMPLATE_RECO_V2_KEY,
                data: {
                  nodeName: props.nodeName
                }
              });
            };
            onMounted(async () => {
              await nodeTypesStore.loadNodeTypesIfNotLoaded();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nCard_default), {
                class: normalizeClass(_ctx.$style.nodeCard),
                hoverable: "",
                onClick: openModal
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.emptyStateCardContent)
                }, [createVNode(NodeIcon_default, {
                  "node-type": nodeType.value,
                  class: normalizeClass(_ctx.$style.nodeIcon),
                  "stroke-width": 1.5
                }, null, 8, ["node-type", "class"]), createVNode(unref(N8nText_default), {
                  size: "xsmall",
                  class: "mt-xs pl-2xs pr-2xs",
                  bold: true
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(nodeType.value?.displayName), 1)]),
                  _: 1
                })], 2)]),
                _: 1
              }, 8, ["class"])]);
            };
          }
        }); //#endregion
        //#region src/experiments/templateRecoV2/components/NodeRecommendationCard.vue?vue&type=style&index=0&lang.module.scss
        nodeCard$1 = "_nodeCard_urxa7_123";
        nodeIcon$1 = "_nodeIcon_urxa7_133";
        emptyStateCardContent$2 = "_emptyStateCardContent_urxa7_137";
        NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default$1 = {
          nodeCard: nodeCard$1,
          nodeIcon: nodeIcon$1,
          emptyStateCardContent: emptyStateCardContent$2
        }; //#endregion
        //#region src/experiments/templateRecoV2/components/NodeRecommendationCard.vue
        cssModules$5 = {
          "$style": NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default$1
        };
        NodeRecommendationCard_default$1 = /* @__PURE__ */__plugin_vue_export_helper_default(NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default$1, [["__cssModules", cssModules$5]]); //#endregion
        //#region src/experiments/templateRecoV2/components/TemplateRecommendationV2.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$2 = {
          key: 0,
          class: "text-center mt-3xl",
          "data-test-id": "list-empty-state"
        };
        TemplateRecommendationV2_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TemplateRecommendationV2",
          setup(__props) {
            const templateRecoV2Store = usePersonalizedTemplatesV2Store();
            const locale = useI18n();
            return (_ctx, _cache) => {
              return unref(templateRecoV2Store).nodes.length ? (openBlock(), createElementBlock("div", _hoisted_1$2, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "medium",
                class: "mb-2xs",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.templateRecoV2.exploreTemplates")), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.nodeCardsContainer)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(templateRecoV2Store).nodes, node => {
                return openBlock(), createBlock(NodeRecommendationCard_default$1, {
                  key: node,
                  "node-name": node
                }, null, 8, ["node-name"]);
              }), 128))], 2)])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/experiments/templateRecoV2/components/TemplateRecommendationV2.vue?vue&type=style&index=0&lang.module.scss
        nodeCardsContainer$1 = "_nodeCardsContainer_ufnvi_123";
        TemplateRecommendationV2_vue_vue_type_style_index_0_lang_module_default = {
          nodeCardsContainer: nodeCardsContainer$1
        }; //#endregion
        //#region src/experiments/templateRecoV2/components/TemplateRecommendationV2.vue
        cssModules$4 = {
          "$style": TemplateRecommendationV2_vue_vue_type_style_index_0_lang_module_default
        };
        TemplateRecommendationV2_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplateRecommendationV2_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/experiments/personalizedTemplatesV3/components/NodeRecommendationCard.vue?vue&type=script&setup=true&lang.ts
        NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeRecommendationCard",
          props: {
            nodeName: {}
          },
          setup(__props) {
            const props = __props;
            const uiStore = useUIStore();
            const nodeTypesStore = useNodeTypesStore();
            const {
              trackPersonalizationCardClick,
              markTemplateRecommendationInteraction
            } = usePersonalizedTemplatesV3Store();
            const nodeType = computed(() => nodeTypesStore.getNodeType(props.nodeName));
            const openModal = () => {
              trackPersonalizationCardClick();
              markTemplateRecommendationInteraction();
              uiStore.openModalWithData({
                name: EXPERIMENT_TEMPLATE_RECO_V3_KEY,
                data: {
                  nodeName: props.nodeName
                }
              });
            };
            onMounted(async () => {
              await nodeTypesStore.loadNodeTypesIfNotLoaded();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nCard_default), {
                class: normalizeClass(_ctx.$style.nodeCard),
                hoverable: "",
                onClick: openModal
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.emptyStateCardContent)
                }, [createVNode(NodeIcon_default, {
                  "node-type": nodeType.value,
                  class: normalizeClass(_ctx.$style.nodeIcon),
                  "stroke-width": 1.5
                }, null, 8, ["node-type", "class"]), createVNode(unref(N8nText_default), {
                  size: "xsmall",
                  class: "mt-xs pl-2xs pr-2xs",
                  bold: true
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(nodeType.value?.displayName), 1)]),
                  _: 1
                })], 2)]),
                _: 1
              }, 8, ["class"])]);
            };
          }
        }); //#endregion
        //#region src/experiments/personalizedTemplatesV3/components/NodeRecommendationCard.vue?vue&type=style&index=0&lang.module.scss
        nodeCard = "_nodeCard_urxa7_123";
        nodeIcon = "_nodeIcon_urxa7_133";
        emptyStateCardContent$1 = "_emptyStateCardContent_urxa7_137";
        NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default = {
          nodeCard,
          nodeIcon,
          emptyStateCardContent: emptyStateCardContent$1
        }; //#endregion
        //#region src/experiments/personalizedTemplatesV3/components/NodeRecommendationCard.vue
        cssModules$3 = {
          "$style": NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default
        };
        NodeRecommendationCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/experiments/personalizedTemplatesV3/components/TemplateRecommendationV3.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 0,
          class: "text-center mt-3xl",
          "data-test-id": "list-empty-state"
        };
        TemplateRecommendationV3_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TemplateRecommendationV3",
          setup(__props) {
            const personalizedTemplateStore = usePersonalizedTemplatesV3Store();
            const locale = useI18n();
            return (_ctx, _cache) => {
              return unref(personalizedTemplateStore).hasChosenHubSpot ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "medium",
                class: "mb-2xs",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("experiments.personalizedTemplatesV3.exploreTemplates")), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.nodeCardsContainer)
              }, [createVNode(NodeRecommendationCard_default, {
                "node-name": "n8n-nodes-base.hubspot"
              })], 2)])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/experiments/personalizedTemplatesV3/components/TemplateRecommendationV3.vue?vue&type=style&index=0&lang.module.scss
        nodeCardsContainer = "_nodeCardsContainer_ufnvi_123";
        TemplateRecommendationV3_vue_vue_type_style_index_0_lang_module_default = {
          nodeCardsContainer
        }; //#endregion
        //#region src/experiments/personalizedTemplatesV3/components/TemplateRecommendationV3.vue
        cssModules$2 = {
          "$style": TemplateRecommendationV3_vue_vue_type_style_index_0_lang_module_default
        };
        TemplateRecommendationV3_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplateRecommendationV3_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/experiments/readyToRunWorkflowsV2/components/SimplifiedEmptyLayout.vue?vue&type=script&setup=true&lang.ts
        SimplifiedEmptyLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SimplifiedEmptyLayout",
          emits: ["click:add"],
          setup(__props, {
            emit: __emit
          }) {
            const route = useRoute();
            const i18n = useI18n();
            const toast = useToast();
            const usersStore = useUsersStore();
            const projectsStore = useProjectsStore();
            const sourceControlStore = useSourceControlStore();
            const projectPages = useProjectPages();
            const readyToRunWorkflowsV2Store = useReadyToRunWorkflowsV2Store();
            const isLoadingReadyToRun = ref(false);
            const currentUser = computed(() => usersStore.currentUser ?? {});
            const personalProject = computed(() => projectsStore.personalProject);
            const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
            const projectPermissions = computed(() => {
              return getResourcePermissions(projectsStore.currentProject?.scopes ?? personalProject.value?.scopes);
            });
            const emptyListDescription = computed(() => {
              if (readOnlyEnv.value) return i18n.baseText("workflows.empty.description.readOnlyEnv");else if (!projectPermissions.value.workflow.create) return i18n.baseText("workflows.empty.description.noPermission");else return i18n.baseText("workflows.empty.description");
            });
            const showReadyToRunV2Card = computed(() => {
              return isLoadingReadyToRun.value || readyToRunWorkflowsV2Store.getCardVisibility(projectPermissions.value.workflow.create, readOnlyEnv.value, false);
            });
            const handleReadyToRunV2Click = async () => {
              if (isLoadingReadyToRun.value) return;
              isLoadingReadyToRun.value = true;
              const projectId = projectPages.isOverviewSubPage ? personalProject.value?.id : route.params.projectId;
              try {
                await readyToRunWorkflowsV2Store.claimCreditsAndOpenWorkflow("card", route.params.folderId, projectId);
              } catch (error) {
                isLoadingReadyToRun.value = false;
                toast.showError(error, i18n.baseText("generic.error"));
              }
            };
            const addWorkflow = () => {
              emit("click:add");
            };
            const emit = __emit;
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.simplifiedLayout)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.content)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.welcome)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h1",
                size: "2xlarge",
                class: normalizeClass(_ctx.$style.welcomeTitle)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(currentUser.value.firstName ? unref(i18n).baseText("workflows.empty.heading", {
                  interpolate: {
                    name: currentUser.value.firstName
                  }
                }) : unref(i18n).baseText("workflows.empty.heading.userNotSetup")), 1)]),
                _: 1
              }, 8, ["class"]), createVNode(unref(N8nText_default), {
                size: "large",
                color: "text-base",
                class: normalizeClass(_ctx.$style.welcomeDescription)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(emptyListDescription.value), 1)]),
                _: 1
              }, 8, ["class"])], 2), !readOnlyEnv.value && projectPermissions.value.workflow.create ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.actionsContainer)
              }, [showReadyToRunV2Card.value ? (openBlock(), createBlock(unref(N8nCard_default), {
                key: 0,
                class: normalizeClass([_ctx.$style.actionCard, {
                  [_ctx.$style.loading]: isLoadingReadyToRun.value
                }]),
                hoverable: !isLoadingReadyToRun.value,
                "data-test-id": "ready-to-run-v2-card",
                onClick: handleReadyToRunV2Click
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardContent)
                }, [createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style.cardIcon),
                  icon: isLoadingReadyToRun.value ? "spinner" : "sparkles",
                  color: "foreground-dark",
                  "stroke-width": 1.5,
                  spin: isLoadingReadyToRun.value
                }, null, 8, ["class", "icon", "spin"]), createVNode(unref(N8nText_default), {
                  size: "large",
                  class: "mt-xs"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.readyToRunV2")), 1)]),
                  _: 1
                })], 2)]),
                _: 1
              }, 8, ["class", "hoverable"])) : createCommentVNode("", true), createVNode(unref(N8nCard_default), {
                class: normalizeClass(_ctx.$style.actionCard),
                hoverable: "",
                "data-test-id": "new-workflow-card",
                onClick: addWorkflow
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardContent)
                }, [createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style.cardIcon),
                  icon: "file",
                  color: "foreground-dark",
                  "stroke-width": 1.5
                }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                  size: "large",
                  class: "mt-xs"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.startFromScratch")), 1)]),
                  _: 1
                })], 2)]),
                _: 1
              }, 8, ["class"])], 2)) : createCommentVNode("", true)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/experiments/readyToRunWorkflowsV2/components/SimplifiedEmptyLayout.vue?vue&type=style&index=0&lang.module.scss
        simplifiedLayout = "_simplifiedLayout_pnu6z_123";
        header = "_header_pnu6z_131";
        content = "_content_pnu6z_138";
        welcome = "_welcome_pnu6z_146";
        welcomeTitle = "_welcomeTitle_pnu6z_150";
        welcomeDescription = "_welcomeDescription_pnu6z_154";
        actionsContainer$1 = "_actionsContainer_pnu6z_158";
        actionCard = "_actionCard_pnu6z_165";
        cardIcon = "_cardIcon_pnu6z_178";
        loading = "_loading_pnu6z_181";
        cardContent = "_cardContent_pnu6z_186";
        SimplifiedEmptyLayout_vue_vue_type_style_index_0_lang_module_default = {
          simplifiedLayout,
          header,
          content,
          welcome,
          welcomeTitle,
          welcomeDescription,
          actionsContainer: actionsContainer$1,
          actionCard,
          cardIcon,
          loading,
          cardContent
        }; //#endregion
        //#region src/experiments/readyToRunWorkflowsV2/components/SimplifiedEmptyLayout.vue
        cssModules$1 = {
          "$style": SimplifiedEmptyLayout_vue_vue_type_style_index_0_lang_module_default
        };
        SimplifiedEmptyLayout_default = /* @__PURE__ */__plugin_vue_export_helper_default(SimplifiedEmptyLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/app/views/WorkflowsView.vue?vue&type=script&setup=true&lang.ts
        import_debounce = /* @__PURE__ */__toESM(require_debounce());
        _hoisted_1 = {
          key: 0
        };
        _hoisted_2 = {
          key: 0
        };
        _hoisted_3 = {
          key: 1
        };
        _hoisted_4 = {
          key: 1
        };
        _hoisted_5 = {
          key: 1
        };
        _hoisted_6 = {
          class: "text-center mt-s",
          "data-test-id": "list-empty-state"
        };
        _hoisted_7 = {
          key: 0,
          class: "mb-s"
        };
        _hoisted_8 = {
          class: "mb-s"
        };
        _hoisted_9 = {
          class: "mb-s"
        };
        SEARCH_DEBOUNCE_TIME = 300;
        FILTERS_DEBOUNCE_TIME = 100;
        WorkflowsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowsView",
          setup(__props) {
            const StatusFilter = {
              ALL: "",
              ACTIVE: "active",
              DEACTIVATED: "deactivated"
            };
            /** Maps sort values from the ResourcesListLayout component to values expected by workflows endpoint */
            const WORKFLOWS_SORT_MAP = {
              lastUpdated: "updatedAt:desc",
              lastCreated: "createdAt:desc",
              nameAsc: "name:asc",
              nameDesc: "name:desc"
            };
            const i18n = useI18n();
            const route = useRoute();
            const router = useRouter();
            const message = useMessage();
            const toast = useToast();
            const folderHelpers = useFolders();
            const calloutHelpers = useCalloutHelpers();
            const sourceControlStore = useSourceControlStore();
            const usersStore = useUsersStore();
            const workflowsStore = useWorkflowsStore();
            const settingsStore = useSettingsStore();
            const projectsStore = useProjectsStore();
            const telemetry = useTelemetry();
            const uiStore = useUIStore();
            const tagsStore = useTagsStore();
            const foldersStore = useFoldersStore();
            const usageStore = useUsageStore();
            const insightsStore = useInsightsStore();
            const templatesStore = useTemplatesStore();
            const aiStarterTemplatesStore = useAITemplatesStarterCollectionStore();
            const personalizedTemplatesStore = usePersonalizedTemplatesStore();
            const readyToRunWorkflowsStore = useReadyToRunWorkflowsStore();
            const readyToRunWorkflowsV2Store = useReadyToRunWorkflowsV2Store();
            const personalizedTemplatesV2Store = usePersonalizedTemplatesV2Store();
            const personalizedTemplatesV3Store = usePersonalizedTemplatesV3Store();
            const templatesDataQualityStore = useTemplatesDataQualityStore();
            const documentTitle = useDocumentTitle();
            const {
              callDebounced
            } = useDebounce();
            const projectPages = useProjectPages();
            const loading$1 = ref(true);
            const breadcrumbsLoading = ref(false);
            const filters = ref({
              search: "",
              homeProject: "",
              status: StatusFilter.ALL,
              showArchived: false,
              tags: []
            });
            const workflowListEventBus = createEventBus();
            const resourcesListLayoutRef = useTemplateRef("resourcesListLayout");
            const workflowsAndFolders = ref([]);
            const easyAICalloutVisible = ref(true);
            const currentPage = ref(1);
            const pageSize = ref(50);
            const currentSort = ref("updatedAt:desc");
            const currentFolderId = ref(null);
            const showCardsBadge = ref(false);
            /**
            * Folder actions
            * These can appear on the list header, and then they are applied to current folder
            * or on each folder card, and then they are applied to the clicked folder
            * 'onlyAvailableOn' is used to specify where the action should be available, if not specified it will be available on both
            */
            const folderActions = computed(() => [{
              label: i18n.baseText("generic.open"),
              value: FOLDER_LIST_ITEM_ACTIONS.OPEN,
              disabled: false,
              onlyAvailableOn: "card"
            }, {
              label: i18n.baseText("folders.actions.create"),
              value: FOLDER_LIST_ITEM_ACTIONS.CREATE,
              disabled: readOnlyEnv.value || !hasPermissionToCreateFolders.value
            }, {
              label: i18n.baseText("folders.actions.create.workflow"),
              value: FOLDER_LIST_ITEM_ACTIONS.CREATE_WORKFLOW,
              disabled: readOnlyEnv.value || !hasPermissionToCreateWorkflows.value
            }, {
              label: i18n.baseText("generic.rename"),
              value: FOLDER_LIST_ITEM_ACTIONS.RENAME,
              disabled: readOnlyEnv.value || !hasPermissionToUpdateFolders.value
            }, {
              label: i18n.baseText("folders.actions.moveToFolder"),
              value: FOLDER_LIST_ITEM_ACTIONS.MOVE,
              disabled: readOnlyEnv.value || !hasPermissionToUpdateFolders.value
            }, {
              label: i18n.baseText("generic.delete"),
              value: FOLDER_LIST_ITEM_ACTIONS.DELETE,
              disabled: readOnlyEnv.value || !hasPermissionToDeleteFolders.value
            }]);
            const folderCardActions = computed(() => folderActions.value.filter(action => !action.onlyAvailableOn || action.onlyAvailableOn === "card"));
            const mainBreadcrumbsActions = computed(() => folderActions.value.filter(action => !action.onlyAvailableOn || action.onlyAvailableOn === "mainBreadcrumbs"));
            const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
            const currentUser = computed(() => usersStore.currentUser ?? {});
            const isShareable = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]);
            const foldersEnabled = computed(() => {
              return settingsStore.isFoldersFeatureEnabled;
            });
            const teamProjectsEnabled = computed(() => {
              return projectsStore.isTeamProjectFeatureEnabled;
            });
            const mcpEnabled = computed(() => {
              return settingsStore.isModuleActive("mcp") && settingsStore.moduleSettings.mcp?.mcpAccessEnabled;
            });
            const showFolders = computed(() => {
              return foldersEnabled.value && !projectPages.isOverviewSubPage && !projectPages.isSharedSubPage;
            });
            const currentFolder = computed(() => {
              return currentFolderId.value ? foldersStore.breadcrumbsCache[currentFolderId.value] : null;
            });
            const currentFolderParent = computed(() => {
              return currentFolder.value?.parentFolder ? foldersStore.breadcrumbsCache[currentFolder.value.parentFolder] : null;
            });
            const isDragging = computed(() => {
              return foldersStore.draggedElement !== null;
            });
            const isDragNDropEnabled = computed(() => {
              return !readOnlyEnv.value && hasPermissionToUpdateFolders.value;
            });
            const listScrollContainer = computed(() => {
              return resourcesListLayoutRef.value?.getScrollContainer?.() ?? null;
            });
            useAutoScrollOnDrag({
              isActive: computed(() => isDragging.value && isDragNDropEnabled.value),
              container: listScrollContainer
            });
            const hasPermissionToCreateFolders = computed(() => {
              if (!currentProject.value) return false;
              return getResourcePermissions(currentProject.value.scopes).folder.create === true;
            });
            const hasPermissionToUpdateFolders = computed(() => {
              if (!currentProject.value) return false;
              return getResourcePermissions(currentProject.value.scopes).folder.update === true;
            });
            const hasPermissionToDeleteFolders = computed(() => {
              if (!currentProject.value) return false;
              return getResourcePermissions(currentProject.value.scopes).folder.delete === true;
            });
            const hasPermissionToCreateWorkflows = computed(() => {
              if (!currentProject.value) return false;
              return getResourcePermissions(currentProject.value.scopes).workflow.create === true;
            });
            const currentProject = computed(() => projectsStore.currentProject);
            const projectName = computed(() => {
              if (currentProject.value?.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
              return currentProject.value?.name;
            });
            const currentParentName = computed(() => {
              if (currentFolder.value) return currentFolder.value.name;
              return projectName.value;
            });
            const personalProject = computed(() => {
              return projectsStore.personalProject;
            });
            const workflowListResources = computed(() => {
              return (workflowsAndFolders.value || []).map(resource => {
                if (resource.resource === "folder") return {
                  resourceType: "folder",
                  id: resource.id,
                  name: resource.name,
                  createdAt: resource.createdAt.toString(),
                  updatedAt: resource.updatedAt.toString(),
                  homeProject: resource.homeProject,
                  workflowCount: resource.workflowCount,
                  subFolderCount: resource.subFolderCount,
                  parentFolder: resource.parentFolder
                };else return {
                  resourceType: "workflow",
                  id: resource.id,
                  name: resource.name,
                  description: resource.description,
                  active: resource.active ?? false,
                  isArchived: resource.isArchived,
                  updatedAt: resource.updatedAt.toString(),
                  createdAt: resource.createdAt.toString(),
                  homeProject: resource.homeProject,
                  scopes: resource.scopes,
                  sharedWithProjects: resource.sharedWithProjects,
                  readOnly: !getResourcePermissions(resource.scopes).workflow.update,
                  tags: resource.tags,
                  parentFolder: resource.parentFolder,
                  settings: resource.settings
                };
              });
            });
            const statusFilterOptions = computed(() => [{
              label: i18n.baseText("workflows.filters.status.all"),
              value: StatusFilter.ALL
            }, {
              label: i18n.baseText("workflows.filters.status.active"),
              value: StatusFilter.ACTIVE
            }, {
              label: i18n.baseText("workflows.filters.status.deactivated"),
              value: StatusFilter.DEACTIVATED
            }]);
            const showEasyAIWorkflowCallout = computed(() => {
              return !usersStore.isEasyAIWorkflowOnboardingDone;
            });
            const templatesCardEnabled = computed(() => {
              return isExtraTemplateLinksExperimentEnabled() && settingsStore.isTemplatesEnabled;
            });
            const projectPermissions = computed(() => {
              return getResourcePermissions(projectsStore.currentProject?.scopes ?? personalProject.value?.scopes);
            });
            const showReadyToRunWorkflowsCallout = computed(() => {
              const isEnabled = readyToRunWorkflowsStore.isFeatureEnabled;
              const isDismissed = readyToRunWorkflowsStore.isCalloutDismissed;
              return isEnabled && !isDismissed && !loading$1.value && !readOnlyEnv.value && (projectPages.isOverviewSubPage || hasPermissionToCreateFolders.value && hasPermissionToCreateWorkflows.value);
            });
            const emptyListDescription = computed(() => {
              if (readOnlyEnv.value) return i18n.baseText("workflows.empty.description.readOnlyEnv");else if (!projectPermissions.value.workflow.create) return i18n.baseText("workflows.empty.description.noPermission");else return i18n.baseText("workflows.empty.description");
            });
            const hasFilters = computed(() => {
              return !!(filters.value.search || filters.value.status !== StatusFilter.ALL || filters.value.showArchived || filters.value.tags.length);
            });
            const showArchivedOnlyHint = computed(() => {
              return workflowsAndFolders.value.length === 0 && !hasFilters.value && !filters.value.showArchived && foldersStore.totalWorkflowCount > 0;
            });
            const isSelfHostedDeployment = computed(() => settingsStore.deploymentType === "default");
            const canUserRegisterCommunityPlus = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).community.register);
            const showRegisteredCommunityCTA = computed(() => isSelfHostedDeployment.value && !foldersEnabled.value && canUserRegisterCommunityPlus.value);
            const showAIStarterCollectionCallout = computed(() => {
              return !loading$1.value && aiStarterTemplatesStore.isFeatureEnabled && !aiStarterTemplatesStore.calloutDismissed && !readOnlyEnv.value && (projectPages.isOverviewSubPage || hasPermissionToCreateFolders.value && hasPermissionToCreateWorkflows.value);
            });
            const showPrebuiltAgentsCallout = computed(() => {
              return !loading$1.value && calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !calloutHelpers.isCalloutDismissed("preBuiltAgentsModalCallout") && !readOnlyEnv.value && (projectPages.isOverviewSubPage || hasPermissionToCreateFolders.value && hasPermissionToCreateWorkflows.value);
            });
            const showPersonalizedTemplates = computed(() => !loading$1.value && personalizedTemplatesStore.isFeatureEnabled());
            const shouldUseSimplifiedLayout = computed(() => {
              return readyToRunWorkflowsV2Store.getSimplifiedLayoutVisibility(route, loading$1.value);
            });
            const hasActiveCallouts = computed(() => {
              return showPrebuiltAgentsCallout.value || showAIStarterCollectionCallout.value || showPersonalizedTemplates.value || showReadyToRunWorkflowsCallout.value;
            });
            /**
            * WATCHERS, STORE SUBSCRIPTIONS AND EVENT BUS HANDLERS
            */
            watch([() => route.params?.projectId, () => route.name], async () => {
              loading$1.value = true;
            });
            watch(() => route.params?.folderId, async newVal => {
              currentFolderId.value = newVal;
              filters.value.search = "";
              saveFiltersOnQueryString();
              await Promise.all([fetchWorkflows(), foldersStore.fetchTotalWorkflowsAndFoldersCount(route.params.projectId, currentFolderId.value ?? void 0)]);
            });
            sourceControlStore.$onAction(({
              name: name$1,
              after
            }) => {
              if (name$1 !== "pullWorkfolder") return;
              after(async () => await initialize());
            });
            const refreshWorkflows = async () => {
              await Promise.all([fetchWorkflows(), foldersStore.fetchTotalWorkflowsAndFoldersCount(route.params.projectId, currentFolderId.value ?? void 0)]);
            };
            const onFolderDeleted = async payload => {
              const folderInfo = foldersStore.getCachedFolder(payload.folderId);
              foldersStore.deleteFoldersFromCache([payload.folderId, folderInfo?.parentFolder ?? ""]);
              const nextFolderId = currentFolderId.value === payload.folderId ? folderInfo?.parentFolder ?? null : currentFolderId.value;
              await foldersStore.fetchTotalWorkflowsAndFoldersCount(route.params.projectId, nextFolderId ?? void 0);
              if (currentFolderId.value === payload.folderId) router.push({
                name: VIEWS.PROJECTS_FOLDERS,
                params: {
                  projectId: route.params.projectId,
                  folderId: folderInfo?.parentFolder ?? ""
                }
              });else await fetchWorkflows();
              telemetry.track("User deleted folder", {
                folder_id: payload.folderId,
                deleted_sub_folders: payload.folderCount,
                deleted_sub_workflows: payload.workflowCount
              });
            };
            const showInsights = computed(() => {
              return projectPages.isOverviewSubPage && insightsStore.isSummaryEnabled && (workflowListResources.value.length > 0 || !personalizedTemplatesV2Store.isFeatureEnabled() && !personalizedTemplatesV3Store.isFeatureEnabled());
            });
            const showTemplateRecommendationV2 = computed(() => {
              return personalizedTemplatesV2Store.isFeatureEnabled() && !loading$1.value;
            });
            const showTemplateRecommendationV3 = computed(() => {
              return personalizedTemplatesV3Store.isFeatureEnabled() && !loading$1.value;
            });
            /**
            * LIFE-CYCLE HOOKS
            */
            onMounted(async () => {
              documentTitle.set(i18n.baseText("workflows.heading"));
              usersStore.showPersonalizationSurvey();
              workflowListEventBus.on("resource-moved", fetchWorkflows);
              workflowListEventBus.on("workflow-duplicated", fetchWorkflows);
              workflowListEventBus.on("folder-deleted", onFolderDeleted);
              workflowListEventBus.on("folder-moved", moveFolder);
              workflowListEventBus.on("folder-transferred", onFolderTransferred);
              workflowListEventBus.on("workflow-moved", onWorkflowMoved);
              workflowListEventBus.on("workflow-transferred", onWorkflowTransferred);
            });
            onBeforeUnmount(() => {
              workflowListEventBus.off("resource-moved", fetchWorkflows);
              workflowListEventBus.off("workflow-duplicated", fetchWorkflows);
              workflowListEventBus.off("folder-deleted", onFolderDeleted);
              workflowListEventBus.off("folder-moved", moveFolder);
              workflowListEventBus.off("folder-transferred", onFolderTransferred);
              workflowListEventBus.off("workflow-moved", onWorkflowMoved);
              workflowListEventBus.off("workflow-transferred", onWorkflowTransferred);
            });
            /**
            * METHODS
            */
            const initialize = async () => {
              loading$1.value = true;
              await setFiltersFromQueryString();
              currentFolderId.value = route.params.folderId;
              const [, resourcesPage] = await Promise.all([usersStore.fetchUsers(), fetchWorkflows(), workflowsStore.fetchActiveWorkflows(), usageStore.getLicenseInfo(), foldersStore.fetchTotalWorkflowsAndFoldersCount(route.params.projectId, currentFolderId.value ?? void 0)]);
              breadcrumbsLoading.value = false;
              workflowsAndFolders.value = resourcesPage;
              loading$1.value = false;
            };
            /**
            * Fetches:
            * - Current workflows and folders page
            * - Total count of workflows and folders in the current project
            * - Path to the current folder (if not cached)
            */
            const fetchWorkflows = async () => {
              const delayedLoading = (0, import_debounce.default)(() => {
                loading$1.value = true;
              }, 300);
              const routeProjectId = route.params?.projectId;
              const homeProjectFilter = filters.value.homeProject || void 0;
              const parentFolder = route.params?.folderId || void 0;
              const tags = filters.value.tags.length ? filters.value.tags.map(tagId => tagsStore.tagsById[tagId]?.name) : [];
              const activeFilter = filters.value.status === StatusFilter.ALL ? void 0 : filters.value.status === StatusFilter.ACTIVE;
              const archivedFilter = filters.value.showArchived ? void 0 : false;
              const fetchFolders = showFolders.value && !tags.length && activeFilter === void 0;
              try {
                const fetchedResources = await workflowsStore.fetchWorkflowsPage(routeProjectId ?? homeProjectFilter, currentPage.value, pageSize.value, currentSort.value, {
                  query: filters.value.search || void 0,
                  active: activeFilter,
                  isArchived: archivedFilter,
                  tags: tags.length ? tags : void 0,
                  parentFolderId: getParentFolderId(parentFolder)
                }, fetchFolders, projectPages.isSharedSubPage);
                foldersStore.cacheFolders(fetchedResources.filter(resource => resource.resource === "folder").map(r => ({
                  id: r.id,
                  name: r.name,
                  parentFolder: r.parentFolder?.id
                })));
                const isCurrentFolderCached = foldersStore.breadcrumbsCache[parentFolder ?? ""] !== void 0;
                if (parentFolder && !isCurrentFolderCached && routeProjectId) {
                  breadcrumbsLoading.value = true;
                  await foldersStore.getFolderPath(routeProjectId, parentFolder);
                  breadcrumbsLoading.value = false;
                }
                workflowsAndFolders.value = fetchedResources;
                showCardsBadge.value = projectPages.isOverviewSubPage || projectPages.isSharedSubPage || filters.value.search !== "";
                return fetchedResources;
              } catch (error) {
                toast.showError(error, i18n.baseText("workflows.list.error.fetching"));
                router.push({
                  name: VIEWS.PROJECTS_FOLDERS,
                  params: {
                    projectId: routeProjectId
                  }
                });
                return [];
              } finally {
                delayedLoading.cancel();
                loading$1.value = false;
                if (breadcrumbsLoading.value) breadcrumbsLoading.value = false;
              }
            };
            /**
            * Get parent folder id for filtering requests
            */
            const getParentFolderId = routeId => {
              if (routeId !== null && routeId !== void 0) return routeId;
              if (projectPages.isOverviewSubPage || projectPages.isSharedSubPage || filters?.value.search) return;
              return "0";
            };
            const onFiltersUpdated = async () => {
              currentPage.value = 1;
              saveFiltersOnQueryString();
              if (!loading$1.value) await callDebounced(fetchWorkflows, {
                debounceTime: FILTERS_DEBOUNCE_TIME,
                trailing: true
              });
            };
            const onSearchUpdated = async search => {
              currentPage.value = 1;
              saveFiltersOnQueryString();
              if (search) await callDebounced(fetchWorkflows, {
                debounceTime: SEARCH_DEBOUNCE_TIME,
                trailing: true
              });else await fetchWorkflows();
            };
            const setPaginationAndSort = async payload => {
              if (payload.page) currentPage.value = payload.page;
              if (payload.pageSize) pageSize.value = payload.pageSize;
              if (payload.sort) currentSort.value = WORKFLOWS_SORT_MAP[payload.sort] ?? "updatedAt:desc";
              if (!loading$1.value) await callDebounced(fetchWorkflows, {
                debounceTime: FILTERS_DEBOUNCE_TIME,
                trailing: true
              });
            };
            const onClickTag = async tagId => {
              if (!filters.value.tags.includes(tagId)) {
                filters.value.tags.push(tagId);
                currentPage.value = 1;
                saveFiltersOnQueryString();
                await fetchWorkflows();
              }
            };
            const saveFiltersOnQueryString = () => {
              const currentQuery = {
                ...route.query
              };
              if (filters.value.search) currentQuery.search = filters.value.search;else delete currentQuery.search;
              if (filters.value.status !== StatusFilter.ALL) currentQuery.status = (filters.value.status === StatusFilter.ACTIVE).toString();else delete currentQuery.status;
              if (filters.value.showArchived) currentQuery.showArchived = "true";else delete currentQuery.showArchived;
              if (filters.value.tags.length) currentQuery.tags = filters.value.tags.join(",");else delete currentQuery.tags;
              if (filters.value.homeProject) currentQuery.homeProject = filters.value.homeProject;else delete currentQuery.homeProject;
              router.replace({
                query: Object.keys(currentQuery).length ? currentQuery : void 0
              });
            };
            const setFiltersFromQueryString = async () => {
              const newQuery = {
                ...route.query
              };
              const {
                tags,
                status,
                search,
                homeProject,
                sort,
                showArchived
              } = route.query ?? {};
              const isValidString = value => typeof value === "string" && value.trim().length > 0;
              if (isValidString(homeProject)) {
                await projectsStore.getAvailableProjects();
                if (isValidProjectId(homeProject)) {
                  newQuery.homeProject = homeProject;
                  filters.value.homeProject = homeProject;
                } else delete newQuery.homeProject;
              } else delete newQuery.homeProject;
              if (isValidString(search)) {
                newQuery.search = search;
                filters.value.search = search;
              } else delete newQuery.search;
              if (isValidString(tags)) {
                await tagsStore.fetchAll();
                const validTags = tags.split(",").filter(tag => tagsStore.allTags.map(t => t.id).includes(tag));
                if (validTags.length) {
                  newQuery.tags = validTags.join(",");
                  filters.value.tags = validTags;
                } else delete newQuery.tags;
              } else delete newQuery.tags;
              if (isValidString(status)) {
                newQuery.status = status;
                filters.value.status = status === "true" ? StatusFilter.ACTIVE : StatusFilter.DEACTIVATED;
              } else delete newQuery.status;
              if (isValidString(sort)) {
                const newSort = WORKFLOWS_SORT_MAP[sort] ?? "updatedAt:desc";
                newQuery.sort = sort;
                currentSort.value = newSort;
              } else delete newQuery.sort;
              if (isValidString(showArchived)) {
                newQuery.showArchived = showArchived;
                filters.value.showArchived = showArchived === "true";
              } else {
                delete newQuery.showArchived;
                filters.value.showArchived = false;
              }
              router.replace({
                query: newQuery
              });
            };
            const addWorkflow = () => {
              uiStore.nodeViewInitialized = false;
              router.push({
                name: VIEWS.NEW_WORKFLOW,
                query: {
                  projectId: route.params?.projectId,
                  parentFolderId: route.params?.folderId
                }
              });
              telemetry.track("User clicked add workflow button", {
                source: "Workflows list"
              });
              trackEmptyCardClick("blank");
            };
            const openTemplatesRepository = async () => {
              trackTemplatesClick(TemplateClickSource.emptyInstanceCard);
              if (templatesStore.hasCustomTemplatesHost) {
                await router.push({
                  name: VIEWS.TEMPLATES
                });
                return;
              }
              if (templatesDataQualityStore.isFeatureEnabled()) {
                uiStore.openModal(EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY);
                return;
              }
              window.open(templatesStore.websiteTemplateRepositoryURL, "_blank");
            };
            const trackEmptyCardClick = option => {
              telemetry.track("User clicked empty page option", {
                option
              });
            };
            function isValidProjectId(projectId) {
              return projectsStore.availableProjects.some(project => project.id === projectId);
            }
            const createAIStarterWorkflows = async source => {
              try {
                const projectId = projectPages.isOverviewSubPage ? personalProject.value?.id : route.params.projectId;
                if (typeof projectId !== "string") {
                  toast.showError(/* @__PURE__ */new Error(), i18n.baseText("workflows.ai.starter.collection.error"));
                  return;
                }
                const newFolder = await aiStarterTemplatesStore.createStarterWorkflows(projectId, currentFolderId.value ?? void 0);
                if (projectPages.isOverviewSubPage) await router.push({
                  name: VIEWS.PROJECTS_FOLDERS,
                  params: {
                    projectId,
                    folderId: newFolder.id
                  }
                });else workflowsAndFolders.value.unshift({
                  id: newFolder.id,
                  name: newFolder.name,
                  resource: "folder",
                  createdAt: newFolder.createdAt,
                  updatedAt: newFolder.updatedAt,
                  subFolderCount: 0,
                  workflowCount: 3,
                  parentFolder: newFolder.parentFolder
                });
                aiStarterTemplatesStore.trackUserCreatedStarterCollection(source);
              } catch (error) {
                toast.showError(error, i18n.baseText("workflows.ai.starter.collection.error"));
                return;
              }
            };
            const openPrebuiltAgentsModal = source => {
              calloutHelpers.openPreBuiltAgentsModal(source);
            };
            const handleCreateReadyToRunWorkflows = async source => {
              try {
                const projectId = projectPages.isOverviewSubPage ? personalProject.value?.id : route.params.projectId;
                if (typeof projectId !== "string") {
                  toast.showError(/* @__PURE__ */new Error(), i18n.baseText("workflows.readyToRunWorkflows.error"));
                  return;
                }
                const newFolder = await readyToRunWorkflowsStore.createWorkflows(projectId, currentFolderId.value ?? void 0);
                readyToRunWorkflowsStore.trackCreateWorkflows(source);
                if (projectPages.isOverviewSubPage) await router.push({
                  name: VIEWS.PROJECTS_FOLDERS,
                  params: {
                    projectId,
                    folderId: newFolder.id
                  }
                });else workflowsAndFolders.value.unshift({
                  id: newFolder.id,
                  name: newFolder.name,
                  resource: "folder",
                  createdAt: newFolder.createdAt,
                  updatedAt: newFolder.updatedAt,
                  subFolderCount: 0,
                  workflowCount: 4,
                  parentFolder: newFolder.parentFolder
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("workflows.readyToRunWorkflows.error"));
                return;
              }
            };
            const dismissStarterCollectionCallout = () => {
              aiStarterTemplatesStore.dismissCallout();
              aiStarterTemplatesStore.trackUserDismissedCallout();
            };
            const dismissEasyAICallout = () => {
              easyAICalloutVisible.value = false;
            };
            const dismissPreBuiltAgentsCallout = () => {
              calloutHelpers.dismissCallout("preBuiltAgentsModalCallout");
            };
            const openAIWorkflow = async source => {
              dismissEasyAICallout();
              telemetry.track("User clicked test AI workflow", {
                source
              });
              const easyAiWorkflowJson = getEasyAiWorkflowJson();
              await router.push({
                name: VIEWS.TEMPLATE_IMPORT,
                params: {
                  id: easyAiWorkflowJson.meta.templateId
                },
                query: {
                  fromJson: "true",
                  parentFolderId: route.params.folderId
                }
              });
            };
            const onShowArchived = async () => {
              filters.value.showArchived = true;
              await onFiltersUpdated();
            };
            const handleDismissReadyToRunCallout = () => {
              readyToRunWorkflowsStore.dismissCallout();
              readyToRunWorkflowsStore.trackDismissCallout();
            };
            const onWorkflowActiveToggle = async data => {
              const workflow = workflowsAndFolders.value.find(w => w.id === data.id);
              if (!workflow) return;
              workflow.active = data.active;
              try {
                const updatedWorkflow = await workflowsStore.fetchWorkflow(data.id);
                if (updatedWorkflow.settings) workflow.settings = updatedWorkflow.settings;
              } catch (error) {
                toast.showError(error, i18n.baseText("workflows.list.error.fetching.one"));
              }
            };
            const getFolderListItem = folderId => {
              return workflowsAndFolders.value.find(resource => resource.resource === "folder" && resource.id === folderId);
            };
            const getFolderContent = async folderId => {
              const folderListItem = getFolderListItem(folderId);
              if (folderListItem) return {
                workflowCount: folderListItem.workflowCount,
                subFolderCount: folderListItem.subFolderCount
              };
              try {
                const content$1 = await foldersStore.fetchFolderContent(currentProject.value?.id ?? "", folderId);
                return {
                  workflowCount: content$1.totalWorkflows,
                  subFolderCount: content$1.totalSubFolders
                };
              } catch (error) {
                toast.showMessage({
                  title: i18n.baseText("folders.delete.error.message"),
                  message: i18n.baseText("folders.not.found.message"),
                  type: "error"
                });
                return {
                  workflowCount: 0,
                  subFolderCount: 0
                };
              }
            };
            const onFolderCardDrop = async event => {
              const {
                draggedResource,
                dropTarget
              } = folderHelpers.handleDrop(event);
              if (!draggedResource || !dropTarget) return;
              await moveResourceOnDrop(draggedResource, dropTarget);
            };
            const onBreadCrumbsItemDrop = async item => {
              if (!foldersStore.draggedElement) return;
              await moveResourceOnDrop({
                id: foldersStore.draggedElement.id,
                type: foldersStore.draggedElement.type,
                name: foldersStore.draggedElement.name
              }, {
                id: item.id,
                type: "folder",
                name: item.label
              });
              folderHelpers.onDragEnd();
            };
            const moveFolderToProjectRoot = async (id, name$1) => {
              if (!foldersStore.draggedElement) return;
              await moveResourceOnDrop({
                id: foldersStore.draggedElement.id,
                type: foldersStore.draggedElement.type,
                name: foldersStore.draggedElement.name
              }, {
                id,
                type: "project",
                name: name$1
              });
              folderHelpers.onDragEnd();
            };
            /**
            * Perform resource move on drop, also handles toast messages and updating the UI
            * @param draggedResource
            * @param dropTarget
            */
            const moveResourceOnDrop = async (draggedResource, dropTarget) => {
              if (draggedResource.type === "folder") {
                await moveFolder({
                  folder: {
                    id: draggedResource.id,
                    name: draggedResource.name
                  },
                  newParent: {
                    id: dropTarget.id,
                    name: dropTarget.name,
                    type: dropTarget.type
                  },
                  options: {
                    skipFetch: true,
                    skipNavigation: true
                  }
                });
                workflowsAndFolders.value = workflowsAndFolders.value.filter(folder => folder.id !== draggedResource.id);
                const targetFolder = getFolderListItem(dropTarget.id);
                if (targetFolder) targetFolder.subFolderCount += 1;
              } else if (draggedResource.type === "workflow") {
                await onWorkflowMoved({
                  workflow: {
                    id: draggedResource.id,
                    name: draggedResource.name,
                    oldParentId: currentFolderId.value ?? ""
                  },
                  newParent: {
                    id: dropTarget.id,
                    name: dropTarget.name,
                    type: dropTarget.type
                  },
                  options: {
                    skipFetch: true
                  }
                });
                workflowsAndFolders.value = workflowsAndFolders.value.filter(workflow => workflow.id !== draggedResource.id);
                const targetFolder = getFolderListItem(dropTarget.id);
                if (targetFolder) targetFolder.workflowCount += 1;
              }
            };
            const onBreadcrumbItemClick = item => {
              if (item.href) {
                loading$1.value = true;
                router.push(item.href).then(() => {
                  currentFolderId.value = item.id;
                  loading$1.value = false;
                }).catch(error => {
                  toast.showError(error, i18n.baseText("folders.open.error.title"));
                });
              }
            };
            const onBreadCrumbsAction = async action => {
              switch (action) {
                case FOLDER_LIST_ITEM_ACTIONS.CREATE:
                  if (!route.params.projectId) return;
                  const currentParent = currentFolder.value?.name || projectName.value;
                  if (!currentParent) return;
                  await createFolder({
                    id: route.params.folderId ?? "-1",
                    name: currentParent,
                    type: currentFolder.value ? "folder" : "project"
                  });
                  break;
                case FOLDER_LIST_ITEM_ACTIONS.CREATE_WORKFLOW:
                  addWorkflow();
                  break;
                case FOLDER_LIST_ITEM_ACTIONS.DELETE:
                  if (!route.params.folderId) return;
                  const content$1 = await getFolderContent(route.params.folderId);
                  await deleteFolder(route.params.folderId, content$1.workflowCount, content$1.subFolderCount);
                  break;
                case FOLDER_LIST_ITEM_ACTIONS.RENAME:
                  onNameToggle();
                  break;
                case FOLDER_LIST_ITEM_ACTIONS.MOVE:
                  if (!currentFolder.value) return;
                  uiStore.openMoveToFolderModal("folder", {
                    id: currentFolder.value?.id,
                    name: currentFolder.value?.name,
                    parentFolderId: currentFolder.value?.parentFolder
                  }, workflowListEventBus);
                  break;
                default:
                  break;
              }
            };
            const onFolderCardAction = async payload => {
              const clickedFolder = foldersStore.getCachedFolder(payload.folderId);
              if (!clickedFolder) return;
              switch (payload.action) {
                case FOLDER_LIST_ITEM_ACTIONS.CREATE:
                  await createFolder({
                    id: clickedFolder.id,
                    name: clickedFolder.name,
                    type: "folder"
                  }, {
                    openAfterCreate: true
                  });
                  break;
                case FOLDER_LIST_ITEM_ACTIONS.CREATE_WORKFLOW:
                  currentFolderId.value = clickedFolder.id;
                  router.push({
                    name: VIEWS.NEW_WORKFLOW,
                    query: {
                      projectId: route.params?.projectId,
                      parentFolderId: clickedFolder.id
                    }
                  });
                  break;
                case FOLDER_LIST_ITEM_ACTIONS.DELETE:
                  {
                    const content$1 = await getFolderContent(clickedFolder.id);
                    await deleteFolder(clickedFolder.id, content$1.workflowCount, content$1.subFolderCount);
                    break;
                  }
                case FOLDER_LIST_ITEM_ACTIONS.RENAME:
                  await renameFolder(clickedFolder.id);
                  break;
                case FOLDER_LIST_ITEM_ACTIONS.MOVE:
                  uiStore.openMoveToFolderModal("folder", {
                    id: clickedFolder.id,
                    name: clickedFolder.name,
                    parentFolderId: clickedFolder.parentFolder
                  }, workflowListEventBus);
                  break;
                default:
                  break;
              }
            };
            const createFolder = async (parent, options = {
              openAfterCreate: false
            }) => {
              const promptResponse = await message.prompt(i18n.baseText("folders.add.to.parent.message", {
                interpolate: {
                  parent: parent.name
                }
              }), {
                confirmButtonText: i18n.baseText("generic.create"),
                cancelButtonText: i18n.baseText("generic.cancel"),
                inputValidator: folderHelpers.validateFolderName,
                customClass: "add-folder-modal"
              });
              if (promptResponse.action === "confirm") {
                const folderName = promptResponse.value;
                try {
                  const newFolder = await foldersStore.createFolder(folderName, route.params.projectId, parent.type === "folder" ? parent.id : void 0);
                  const newFolderURL = router.resolve({
                    name: VIEWS.PROJECTS_FOLDERS,
                    params: {
                      projectId: route.params.projectId,
                      folderId: newFolder.id
                    }
                  }).href;
                  toast.showToast({
                    title: i18n.baseText("folders.add.success.title"),
                    message: i18n.baseText("folders.add.success.message", {
                      interpolate: {
                        link: newFolderURL,
                        folderName: newFolder.name
                      }
                    }),
                    onClick: event => {
                      if (event?.target instanceof HTMLAnchorElement) {
                        event.preventDefault();
                        router.push(newFolderURL);
                      }
                    },
                    type: "success"
                  });
                  telemetry.track("User created folder", {
                    folder_id: newFolder.id
                  });
                  if (options.openAfterCreate) await router.push({
                    name: VIEWS.PROJECTS_FOLDERS,
                    params: {
                      projectId: route.params.projectId,
                      folderId: parent.id
                    }
                  });else if (!workflowsAndFolders.value.length) {
                    workflowsAndFolders.value = [{
                      id: newFolder.id,
                      name: newFolder.name,
                      resource: "folder",
                      createdAt: newFolder.createdAt,
                      updatedAt: newFolder.updatedAt,
                      homeProject: projectsStore.currentProject,
                      workflowCount: 0,
                      subFolderCount: 0
                    }];
                    foldersStore.cacheFolders([{
                      id: newFolder.id,
                      name: newFolder.name,
                      parentFolder: currentFolder.value?.id
                    }]);
                  } else await fetchWorkflows();
                } catch (error) {
                  toast.showError(error, i18n.baseText("folders.create.error.title"));
                }
              }
            };
            const renameFolder = async folderId => {
              const folder = foldersStore.getCachedFolder(folderId);
              if (!folder || !currentProject.value) return;
              const promptResponse = await message.prompt(i18n.baseText("folders.rename.message", {
                interpolate: {
                  folderName: folder.name
                }
              }), {
                confirmButtonText: i18n.baseText("generic.rename"),
                cancelButtonText: i18n.baseText("generic.cancel"),
                inputValue: folder.name,
                customClass: "rename-folder-modal",
                inputValidator: folderHelpers.validateFolderName
              });
              if (promptResponse.action === "confirm") {
                const newFolderName = promptResponse.value;
                try {
                  await foldersStore.renameFolder(currentProject.value?.id, folderId, newFolderName);
                  foldersStore.breadcrumbsCache[folderId].name = newFolderName;
                  toast.showMessage({
                    title: i18n.baseText("folders.rename.success.message", {
                      interpolate: {
                        folderName: newFolderName
                      }
                    }),
                    type: "success"
                  });
                  await fetchWorkflows();
                  telemetry.track("User renamed folder", {
                    folder_id: folderId
                  });
                } catch (error) {
                  toast.showError(error, i18n.baseText("folders.rename.error.title"));
                }
              }
            };
            const createFolderInCurrent = async () => {
              if (showRegisteredCommunityCTA.value) {
                uiStore.openModalWithData({
                  name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
                  data: {
                    customHeading: i18n.baseText("folders.registeredCommunity.cta.heading")
                  }
                });
                return;
              }
              if (!route.params.projectId) return;
              const currentParent = currentFolder.value?.name || projectName.value;
              if (!currentParent) return;
              await createFolder({
                id: route.params.folderId ?? "-1",
                name: currentParent,
                type: currentFolder.value ? "folder" : "project"
              });
            };
            const deleteFolder = async (folderId, workflowCount, subFolderCount) => {
              if (subFolderCount || workflowCount) uiStore.openDeleteFolderModal(folderId, workflowListEventBus, {
                workflowCount,
                subFolderCount
              });else {
                await foldersStore.deleteFolder(route.params.projectId, folderId);
                toast.showMessage({
                  title: i18n.baseText("folders.delete.success.message"),
                  type: "success"
                });
                await onFolderDeleted({
                  folderId,
                  workflowCount,
                  folderCount: subFolderCount
                });
              }
            };
            const moveFolder = async payload => {
              if (!route.params.projectId) return;
              try {
                await foldersStore.moveFolder(route.params.projectId, payload.folder.id, payload.newParent.type === "folder" ? payload.newParent.id : "0");
                const isCurrentFolder = currentFolderId.value === payload.folder.id;
                const newFolderURL = router.resolve({
                  name: VIEWS.PROJECTS_FOLDERS,
                  params: {
                    projectId: route.params.projectId,
                    folderId: payload.newParent.type === "folder" ? payload.newParent.id : void 0
                  }
                }).href;
                if (isCurrentFolder && !payload.options?.skipNavigation) {
                  router.push(newFolderURL);
                  toast.showMessage({
                    title: i18n.baseText("folders.move.success.title"),
                    message: i18n.baseText("folders.move.success.messageNoAccess", {
                      interpolate: {
                        folderName: payload.folder.name,
                        newFolderName: payload.newParent.name
                      }
                    }),
                    type: "success"
                  });
                } else {
                  toast.showToast({
                    title: i18n.baseText("folders.move.success.title"),
                    message: i18n.baseText("folders.move.success.message", {
                      interpolate: {
                        folderName: payload.folder.name,
                        newFolderName: payload.newParent.name
                      }
                    }),
                    onClick: event => {
                      if (event?.target instanceof HTMLAnchorElement) {
                        event.preventDefault();
                        router.push(newFolderURL);
                      }
                    },
                    type: "success"
                  });
                  if (!payload.options?.skipFetch) await fetchWorkflows();
                }
              } catch (error) {
                toast.showError(error, i18n.baseText("folders.move.error.title"));
              }
            };
            const onFolderTransferred = async payload => {
              try {
                await foldersStore.moveFolderToProject(payload.source.projectId, payload.source.folder.id, payload.destination.projectId, payload.destination.parentFolder.id, payload.shareCredentials);
                const isCurrentFolder = currentFolderId.value === payload.source.folder.id;
                const newFolderURL = router.resolve({
                  name: VIEWS.PROJECTS_FOLDERS,
                  params: {
                    projectId: payload.destination.canAccess ? payload.destination.projectId : payload.source.projectId,
                    folderId: payload.destination.canAccess ? payload.source.folder.id : void 0
                  }
                }).href;
                if (isCurrentFolder) {
                  if (payload.destination.canAccess) router.push(newFolderURL);else router.push({
                    name: VIEWS.PROJECTS_WORKFLOWS,
                    params: {
                      projectId: payload.source.projectId
                    }
                  });
                } else {
                  await refreshWorkflows();
                  if (payload.destination.canAccess) toast.showToast({
                    title: i18n.baseText("folders.move.success.title"),
                    message: i18n.baseText("folders.move.success.message", {
                      interpolate: {
                        folderName: payload.source.folder.name,
                        newFolderName: payload.destination.parentFolder.name
                      }
                    }),
                    onClick: event => {
                      if (event?.target instanceof HTMLAnchorElement) {
                        event.preventDefault();
                        router.push(newFolderURL);
                      }
                    },
                    type: "success"
                  });else toast.showToast({
                    title: i18n.baseText("folders.move.success.title"),
                    message: i18n.baseText("folders.move.success.messageNoAccess", {
                      interpolate: {
                        folderName: payload.source.folder.name,
                        newFolderName: payload.destination.parentFolder.name
                      }
                    }),
                    type: "success"
                  });
                }
              } catch (error) {
                toast.showError(error, i18n.baseText("folders.move.error.title"));
              }
            };
            const moveWorkflowToFolder = async payload => {
              if (showRegisteredCommunityCTA.value) {
                uiStore.openModalWithData({
                  name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
                  data: {
                    customHeading: i18n.baseText("folders.registeredCommunity.cta.heading")
                  }
                });
                return;
              }
              uiStore.openMoveToFolderModal("workflow", {
                id: payload.id,
                name: payload.name,
                parentFolderId: payload.parentFolderId,
                sharedWithProjects: payload.sharedWithProjects
              }, workflowListEventBus);
            };
            const onWorkflowTransferred = async payload => {
              try {
                await projectsStore.moveResourceToProject("workflow", payload.source.workflow.id, payload.destination.projectId, payload.destination.parentFolder.id, payload.shareCredentials);
                await refreshWorkflows();
                if (payload.destination.canAccess) toast.showToast({
                  title: i18n.baseText("folders.move.workflow.success.title"),
                  message: i18n.baseText("folders.move.workflow.success.message", {
                    interpolate: {
                      workflowName: payload.source.workflow.name,
                      newFolderName: payload.destination.parentFolder.name
                    }
                  }),
                  onClick: event => {
                    if (event?.target instanceof HTMLAnchorElement) {
                      event.preventDefault();
                      router.push({
                        name: VIEWS.PROJECTS_FOLDERS,
                        params: {
                          projectId: payload.destination.projectId,
                          folderId: payload.destination.parentFolder.id
                        }
                      });
                    }
                  },
                  type: "success"
                });else toast.showToast({
                  title: i18n.baseText("folders.move.workflow.success.title"),
                  message: i18n.baseText("folders.move.workflow.success.messageNoAccess", {
                    interpolate: {
                      workflowName: payload.source.workflow.name,
                      newFolderName: payload.destination.parentFolder.name
                    }
                  }),
                  type: "success"
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("folders.move.workflow.error.title"));
              }
            };
            const onWorkflowMoved = async payload => {
              if (!route.params.projectId) return;
              try {
                const newFolderURL = router.resolve({
                  name: VIEWS.PROJECTS_FOLDERS,
                  params: {
                    projectId: route.params.projectId,
                    folderId: payload.newParent.type === "folder" ? payload.newParent.id : void 0
                  }
                }).href;
                const workflowResource = workflowsAndFolders.value.find(resource => resource.id === payload.workflow.id);
                await workflowsStore.updateWorkflow(payload.workflow.id, {
                  parentFolderId: payload.newParent.type === "folder" ? payload.newParent.id : "0",
                  versionId: workflowResource?.versionId
                });
                if (!payload.options?.skipFetch) await fetchWorkflows();
                toast.showToast({
                  title: i18n.baseText("folders.move.workflow.success.title"),
                  message: i18n.baseText("folders.move.workflow.success.message", {
                    interpolate: {
                      workflowName: payload.workflow.name,
                      newFolderName: payload.newParent.name
                    }
                  }),
                  onClick: event => {
                    if (event?.target instanceof HTMLAnchorElement) {
                      event.preventDefault();
                      router.push(newFolderURL);
                    }
                  },
                  type: "success"
                });
                telemetry.track("User moved content", {
                  workflow_id: payload.workflow.id,
                  source_folder_id: payload.workflow.oldParentId,
                  destination_folder_id: payload.newParent.id
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("folders.move.workflow.error.title"));
              }
            };
            const onCreateWorkflowClick = () => {
              router.push({
                name: VIEWS.NEW_WORKFLOW,
                query: {
                  projectId: currentProject.value?.id,
                  parentFolderId: route.params.folderId
                }
              });
            };
            const renameInput = useTemplateRef("renameInput");
            function onNameToggle() {
              setTimeout(() => {
                if (renameInput.value?.forceFocus) renameInput.value.forceFocus();
              }, 0);
            }
            const onNameSubmit = async name$1 => {
              if (!currentFolder.value || !currentProject.value) return;
              const newName = name$1.trim();
              if (!newName) {
                toast.showMessage({
                  title: i18n.baseText("renameAction.emptyName.title"),
                  message: i18n.baseText("renameAction.emptyName.message"),
                  type: "error"
                });
                return;
              }
              if (newName === currentFolder.value.name) {
                renameInput.value?.forceCancel();
                return;
              }
              const validationResult = folderHelpers.validateFolderName(newName);
              if (typeof validationResult === "string") {
                toast.showMessage({
                  title: i18n.baseText("renameAction.invalidName.title"),
                  message: validationResult,
                  type: "error"
                });
                renameInput.value?.forceCancel();
                return;
              } else try {
                await foldersStore.renameFolder(currentProject.value?.id, currentFolder.value.id, newName);
                foldersStore.breadcrumbsCache[currentFolder.value.id].name = newName;
                toast.showMessage({
                  title: i18n.baseText("folders.rename.success.message", {
                    interpolate: {
                      folderName: newName
                    }
                  }),
                  type: "success"
                });
                telemetry.track("User renamed folder", {
                  folder_id: currentFolder.value.id
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("folders.rename.error.title"));
                renameInput.value?.forceCancel();
              }
            };
            return (_ctx, _cache) => {
              return shouldUseSimplifiedLayout.value ? (openBlock(), createBlock(SimplifiedEmptyLayout_default, {
                key: 0,
                "onClick:add": addWorkflow
              })) : (openBlock(), createBlock(ResourcesListLayout_default, {
                key: 1,
                ref: "resourcesListLayout",
                filters: filters.value,
                "onUpdate:filters": [_cache[9] || (_cache[9] = $event => filters.value = $event), onFiltersUpdated],
                "resource-key": "workflows",
                type: "list-paginated",
                resources: workflowListResources.value,
                "type-props": {
                  itemSize: 80
                },
                shareable: isShareable.value,
                initialize,
                disabled: readOnlyEnv.value || !projectPermissions.value.workflow.create,
                loading: false,
                "resources-refreshing": loading$1.value,
                "custom-page-size": unref(50),
                "total-items": unref(workflowsStore).totalWorkflowCount,
                "dont-perform-sorting-and-filtering": true,
                "has-empty-state": unref(foldersStore).totalWorkflowCount === 0 && !currentFolderId.value,
                "onClick:add": addWorkflow,
                "onUpdate:search": onSearchUpdated,
                "onUpdate:paginationAndSort": setPaginationAndSort,
                onMouseleave: unref(folderHelpers).resetDropTarget
              }, createSlots({
                header: withCtx(() => [createVNode(ProjectHeader_default, {
                  "has-active-callouts": hasActiveCallouts.value,
                  onCreateFolder: createFolderInCurrent
                }, {
                  default: withCtx(() => [showInsights.value ? (openBlock(), createBlock(InsightsSummary_default, {
                    key: 0,
                    loading: unref(insightsStore).weeklySummary.isLoading,
                    summary: unref(insightsStore).weeklySummary.state,
                    "time-range": "week"
                  }, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
                  _: 1
                }, 8, ["has-active-callouts"])]),
                callout: withCtx(() => [showPrebuiltAgentsCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                  key: 0,
                  theme: "secondary",
                  icon: "bot",
                  "icon-size": "large",
                  class: normalizeClass(_ctx.$style["easy-ai-workflow-callout"])
                }, {
                  trailingContent: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["callout-trailing-content"])
                  }, [createVNode(unref(N8nIcon_default), {
                    size: "small",
                    icon: "x",
                    title: unref(i18n).baseText("generic.dismiss"),
                    class: "clickable",
                    onClick: _cache[1] || (_cache[1] = $event => dismissPreBuiltAgentsCallout())
                  }, null, 8, ["title"])], 2)]),
                  default: withCtx(() => [createVNode(unref(N8nText_default), {
                    size: "small"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.preBuiltAgents.callout")) + " " + toDisplayString(" ") + " ", 1), createVNode(unref(N8nLink_default), {
                      theme: "secondary",
                      size: "small",
                      bold: true,
                      underline: true,
                      onClick: _cache[0] || (_cache[0] = $event => openPrebuiltAgentsModal("workflowsEmptyState"))
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.preBuiltAgents.linkText")), 1)]),
                      _: 1
                    })]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["class"])) : showAIStarterCollectionCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                  key: 1,
                  theme: "secondary",
                  icon: "gift",
                  class: normalizeClass(_ctx.$style["easy-ai-workflow-callout"])
                }, {
                  trailingContent: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["callout-trailing-content"])
                  }, [createVNode(unref(N8nButton_default), {
                    "data-test-id": "easy-ai-button",
                    size: "small",
                    type: "secondary",
                    onClick: _cache[2] || (_cache[2] = $event => createAIStarterWorkflows("callout"))
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.startNow")), 1)]),
                    _: 1
                  }), createVNode(unref(N8nIcon_default), {
                    size: "small",
                    icon: "x",
                    title: unref(i18n).baseText("generic.dismiss"),
                    class: "clickable",
                    onClick: dismissStarterCollectionCallout
                  }, null, 8, ["title"])], 2)]),
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.ai.starter.collection.callout")) + " ", 1)]),
                  _: 1
                }, 8, ["class"])) : showPersonalizedTemplates.value ? (openBlock(), createBlock(SuggestedWorkflows_default, {
                  key: 2
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(personalizedTemplatesStore).suggestedWorkflows, workflow => {
                    return openBlock(), createBlock(SuggestedWorkflowCard_default, {
                      key: workflow.id,
                      "data-test-id": "resource-list-item-suggested-workflow",
                      data: {
                        id: workflow.id,
                        name: workflow.name
                      }
                    }, null, 8, ["data"]);
                  }), 128))]),
                  _: 1
                })) : createCommentVNode("", true), showReadyToRunWorkflowsCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                  key: 3,
                  theme: "secondary",
                  icon: "bolt-filled",
                  class: normalizeClass(_ctx.$style["easy-ai-workflow-callout"])
                }, {
                  trailingContent: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["callout-trailing-content"])
                  }, [createVNode(unref(N8nButton_default), {
                    "data-test-id": "easy-ai-button",
                    size: "small",
                    type: "secondary",
                    onClick: _cache[3] || (_cache[3] = $event => handleCreateReadyToRunWorkflows("callout"))
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.startNow")), 1)]),
                    _: 1
                  }), createVNode(unref(N8nIcon_default), {
                    size: "small",
                    icon: "x",
                    title: unref(i18n).baseText("generic.dismiss"),
                    class: "clickable",
                    onClick: handleDismissReadyToRunCallout
                  }, null, 8, ["title"])], 2)]),
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(readyToRunWorkflowsStore).getCalloutText()) + " ", 1)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true)]),
                breadcrumbs: withCtx(() => [breadcrumbsLoading.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style["breadcrumbs-loading"])
                }, [createVNode(unref(N8nLoading_default), {
                  loading: breadcrumbsLoading.value,
                  rows: 1,
                  variant: "p"
                }, null, 8, ["loading"])], 2)) : showFolders.value && currentFolder.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style["breadcrumbs-container"]),
                  "data-test-id": "main-breadcrumbs"
                }, [createVNode(FolderBreadcrumbs_default, {
                  "current-folder": currentFolderParent.value,
                  actions: mainBreadcrumbsActions.value,
                  "hidden-items-trigger": isDragging.value ? "hover" : "click",
                  "current-folder-as-link": true,
                  onItemSelected: onBreadcrumbItemClick,
                  onAction: onBreadCrumbsAction,
                  onItemDrop: onBreadCrumbsItemDrop,
                  onProjectDrop: moveFolderToProjectRoot
                }, {
                  append: withCtx(() => [createBaseVNode("span", {
                    class: normalizeClass(_ctx.$style["path-separator"])
                  }, "/", 2), (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
                    ref_key: "renameInput",
                    ref: renameInput,
                    key: currentFolder.value?.id,
                    "data-test-id": "breadcrumbs-item-current",
                    placeholder: unref(i18n).baseText("folders.rename.placeholder"),
                    "model-value": currentFolder.value.name,
                    "max-length": 30,
                    "read-only": readOnlyEnv.value || !hasPermissionToUpdateFolders.value,
                    class: normalizeClass({
                      [_ctx.$style.name]: true,
                      [_ctx.$style["pointer-disabled"]]: isDragging.value
                    }),
                    "onUpdate:modelValue": onNameSubmit
                  }, null, 8, ["placeholder", "model-value", "read-only", "class"]))]),
                  _: 1
                }, 8, ["current-folder", "actions", "hidden-items-trigger"])], 2)) : createCommentVNode("", true)]),
                item: withCtx(({
                  item: data,
                  index
                }) => [data.resourceType === "folder" ? (openBlock(), createBlock(Draggable_default, {
                  key: `folder-${index}`,
                  disabled: !isDragNDropEnabled.value,
                  type: "move",
                  "target-data-key": "folder",
                  onDragstart: unref(folderHelpers).onDragStart,
                  onDragend: unref(folderHelpers).onDragEnd
                }, {
                  preview: withCtx(() => [createVNode(unref(N8nCard_default), null, {
                    default: withCtx(() => [createVNode(unref(N8nText_default), {
                      tag: "h2",
                      bold: ""
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(data.name), 1)]),
                      _: 2
                    }, 1024)]),
                    _: 2
                  }, 1024)]),
                  default: withCtx(() => [createVNode(FolderCard_default, {
                    data,
                    actions: folderCardActions.value,
                    "read-only": readOnlyEnv.value || !hasPermissionToDeleteFolders.value && !hasPermissionToCreateFolders.value,
                    "personal-project": personalProject.value,
                    "data-resourceid": data.id,
                    "data-resourcename": data.name,
                    class: normalizeClass([{
                      ["mb-2xs"]: true,
                      [_ctx.$style["drag-active"]]: isDragging.value,
                      [_ctx.$style.dragging]: unref(foldersStore).draggedElement?.type === "folder" && unref(foldersStore).draggedElement?.id === data.id,
                      [_ctx.$style["drop-active"]]: unref(foldersStore).activeDropTarget?.id === data.id
                    }, "mb-2xs"]),
                    "show-ownership-badge": showCardsBadge.value,
                    "data-target": "folder",
                    onAction: onFolderCardAction,
                    onMouseenter: unref(folderHelpers).onDragEnter,
                    onMouseup: onFolderCardDrop
                  }, null, 8, ["data", "actions", "read-only", "personal-project", "data-resourceid", "data-resourcename", "class", "show-ownership-badge", "onMouseenter"])]),
                  _: 2
                }, 1032, ["disabled", "onDragstart", "onDragend"])) : (openBlock(), createBlock(Draggable_default, {
                  key: `workflow-${index}`,
                  disabled: !isDragNDropEnabled.value,
                  type: "move",
                  "target-data-key": "workflow",
                  onDragstart: unref(folderHelpers).onDragStart,
                  onDragend: unref(folderHelpers).onDragEnd
                }, {
                  preview: withCtx(() => [createVNode(unref(N8nCard_default), null, {
                    default: withCtx(() => [createVNode(unref(N8nText_default), {
                      tag: "h2",
                      bold: ""
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(data.name), 1)]),
                      _: 2
                    }, 1024)]),
                    _: 2
                  }, 1024)]),
                  default: withCtx(() => [createVNode(WorkflowCard_default, {
                    "data-test-id": "resources-list-item-workflow",
                    "data-target": "workflow",
                    class: normalizeClass({
                      ["mb-2xs"]: true,
                      [_ctx.$style["drag-active"]]: isDragging.value,
                      [_ctx.$style.dragging]: unref(foldersStore).draggedElement?.type === "workflow" && unref(foldersStore).draggedElement?.id === data.id
                    }),
                    data,
                    "workflow-list-event-bus": unref(workflowListEventBus),
                    "read-only": readOnlyEnv.value,
                    "data-resourceid": data.id,
                    "data-resourcename": data.name,
                    "show-ownership-badge": showCardsBadge.value,
                    "are-folders-enabled": unref(settingsStore).isFoldersFeatureEnabled,
                    "are-tags-enabled": unref(settingsStore).areTagsEnabled,
                    "is-mcp-enabled": mcpEnabled.value,
                    "onClick:tag": onClickTag,
                    "onWorkflow:deleted": refreshWorkflows,
                    "onWorkflow:archived": refreshWorkflows,
                    "onWorkflow:unarchived": refreshWorkflows,
                    "onWorkflow:moved": fetchWorkflows,
                    "onWorkflow:duplicated": fetchWorkflows,
                    "onWorkflow:activeToggle": onWorkflowActiveToggle,
                    "onAction:moveToFolder": moveWorkflowToFolder,
                    onMouseenter: _cache[4] || (_cache[4] = $event => isDragging.value ? unref(folderHelpers).resetDropTarget() : {})
                  }, null, 8, ["class", "data", "workflow-list-event-bus", "read-only", "data-resourceid", "data-resourcename", "show-ownership-badge", "are-folders-enabled", "are-tags-enabled", "is-mcp-enabled"])]),
                  _: 2
                }, 1032, ["disabled", "onDragstart", "onDragend"]))]),
                empty: withCtx(() => [unref(projectPages).isSharedSubPage && personalProject.value ? (openBlock(), createBlock(EmptySharedSectionActionBox_default, {
                  key: 0,
                  "personal-project": personalProject.value,
                  "resource-type": "workflows"
                }, null, 8, ["personal-project"])) : (openBlock(), createElementBlock("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createVNode(unref(N8nHeading_default), {
                  tag: "h2",
                  size: "xlarge",
                  class: "mb-2xs"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(currentUser.value.firstName ? unref(i18n).baseText("workflows.empty.heading", {
                    interpolate: {
                      name: currentUser.value.firstName
                    }
                  }) : unref(i18n).baseText("workflows.empty.heading.userNotSetup")), 1)]),
                  _: 1
                }), createVNode(unref(N8nText_default), {
                  size: "large",
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(emptyListDescription.value), 1)]),
                  _: 1
                })]), !readOnlyEnv.value && projectPermissions.value.workflow.create ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["text-center", "mt-2xl", _ctx.$style.actionsContainer])
                }, [createVNode(unref(N8nCard_default), {
                  class: normalizeClass(_ctx.$style.emptyStateCard),
                  hoverable: "",
                  "data-test-id": "new-workflow-card",
                  onClick: addWorkflow
                }, {
                  default: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.emptyStateCardContent)
                  }, [createVNode(unref(N8nIcon_default), {
                    class: normalizeClass(_ctx.$style.emptyStateCardIcon),
                    icon: "file",
                    color: "foreground-dark",
                    "stroke-width": 1.5
                  }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "large",
                    class: "mt-xs"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.startFromScratch")), 1)]),
                    _: 1
                  })], 2)]),
                  _: 1
                }, 8, ["class"]), showPrebuiltAgentsCallout.value ? (openBlock(), createBlock(unref(N8nCard_default), {
                  key: 0,
                  class: normalizeClass(_ctx.$style.emptyStateCard),
                  hoverable: "",
                  "data-test-id": "prebuilt-agents-card",
                  onClick: _cache[5] || (_cache[5] = $event => openPrebuiltAgentsModal("workflowsList"))
                }, {
                  default: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.emptyStateCardContent)
                  }, [createVNode(unref(N8nIcon_default), {
                    class: normalizeClass(_ctx.$style.emptyStateCardIcon),
                    "stroke-width": 1.5,
                    icon: "bot",
                    color: "foreground-dark"
                  }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "large",
                    class: "mt-xs pl-2xs pr-2xs"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.preBuiltAgents")), 1)]),
                    _: 1
                  })], 2)]),
                  _: 1
                }, 8, ["class"])) : showAIStarterCollectionCallout.value ? (openBlock(), createBlock(unref(N8nCard_default), {
                  key: 1,
                  class: normalizeClass(_ctx.$style.emptyStateCard),
                  hoverable: "",
                  "data-test-id": "easy-ai-workflow-card",
                  onClick: _cache[6] || (_cache[6] = $event => createAIStarterWorkflows("card"))
                }, {
                  default: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.emptyStateCardContent)
                  }, [createVNode(unref(N8nIcon_default), {
                    class: normalizeClass(_ctx.$style.emptyStateCardIcon),
                    "stroke-width": 1.5,
                    icon: "gift",
                    color: "foreground-dark"
                  }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "large",
                    class: "mt-xs pl-2xs pr-2xs"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.ai.starter.collection.card")), 1)]),
                    _: 1
                  })], 2)]),
                  _: 1
                }, 8, ["class"])) : showEasyAIWorkflowCallout.value ? (openBlock(), createBlock(unref(N8nCard_default), {
                  key: 2,
                  class: normalizeClass(_ctx.$style.emptyStateCard),
                  hoverable: "",
                  "data-test-id": "easy-ai-workflow-card",
                  onClick: _cache[7] || (_cache[7] = $event => openAIWorkflow("empty"))
                }, {
                  default: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.emptyStateCardContent)
                  }, [createVNode(unref(N8nIcon_default), {
                    class: normalizeClass(_ctx.$style.emptyStateCardIcon),
                    "stroke-width": 1.5,
                    icon: "bot",
                    color: "foreground-dark"
                  }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "large",
                    class: "mt-xs pl-2xs pr-2xs"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.easyAI")), 1)]),
                    _: 1
                  })], 2)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true), showReadyToRunWorkflowsCallout.value ? (openBlock(), createBlock(unref(N8nCard_default), {
                  key: 3,
                  class: normalizeClass(_ctx.$style.emptyStateCard),
                  hoverable: "",
                  "data-test-id": "ready-to-run-workflows-card",
                  onClick: _cache[8] || (_cache[8] = $event => handleCreateReadyToRunWorkflows("card"))
                }, {
                  default: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.emptyStateCardContent)
                  }, [createVNode(unref(N8nIcon_default), {
                    class: normalizeClass(_ctx.$style.emptyStateCardIcon),
                    "stroke-width": 1.5,
                    icon: "package-open",
                    color: "foreground-dark"
                  }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "large",
                    class: "mt-xs pl-2xs pr-2xs"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(readyToRunWorkflowsStore).getCardText()), 1)]),
                    _: 1
                  })], 2)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true), templatesCardEnabled.value ? (openBlock(), createBlock(unref(N8nCard_default), {
                  key: 4,
                  class: normalizeClass(_ctx.$style.emptyStateCard),
                  hoverable: "",
                  "data-test-id": "new-workflow-from-template-card",
                  onClick: openTemplatesRepository
                }, {
                  default: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.emptyStateCardContent)
                  }, [createVNode(unref(N8nIcon_default), {
                    class: normalizeClass(_ctx.$style.emptyStateCardIcon),
                    "stroke-width": 1.5,
                    icon: "package-open",
                    color: "foreground-dark"
                  }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "large",
                    class: "mt-xs pl-2xs pr-2xs"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.startWithTemplate")), 1)]),
                    _: 1
                  })], 2)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), showTemplateRecommendationV3.value ? (openBlock(), createBlock(TemplateRecommendationV3_default, {
                  key: 1
                })) : showTemplateRecommendationV2.value ? (openBlock(), createBlock(TemplateRecommendationV2_default, {
                  key: 2
                })) : createCommentVNode("", true)]))]),
                filters: withCtx(({
                  setKeyValue
                }) => [unref(settingsStore).areTagsEnabled ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(N8nInputLabel_default), {
                  label: unref(i18n).baseText("workflows.filters.tags"),
                  bold: false,
                  size: "small",
                  color: "text-base",
                  class: "mb-3xs"
                }, null, 8, ["label"]), createVNode(WorkflowTagsDropdown_default, {
                  placeholder: unref(i18n).baseText("workflowOpen.filterWorkflows"),
                  "model-value": filters.value.tags,
                  "create-enabled": false,
                  "onUpdate:modelValue": $event => setKeyValue("tags", $event)
                }, null, 8, ["placeholder", "model-value", "onUpdate:modelValue"])])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_8, [createVNode(unref(N8nInputLabel_default), {
                  label: unref(i18n).baseText("workflows.filters.status"),
                  bold: false,
                  size: "small",
                  color: "text-base",
                  class: "mb-3xs"
                }, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
                  "data-test-id": "status-dropdown",
                  "model-value": filters.value.status,
                  "onUpdate:modelValue": $event => setKeyValue("status", $event)
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(statusFilterOptions.value, option => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: option.label,
                      label: option.label,
                      value: option.value,
                      "data-test-id": "status"
                    }, null, 8, ["label", "value"]);
                  }), 128))]),
                  _: 2
                }, 1032, ["model-value", "onUpdate:modelValue"])]), createBaseVNode("div", _hoisted_9, [createVNode(unref(N8nCheckbox_default), {
                  label: unref(i18n).baseText("workflows.filters.showArchived"),
                  "model-value": filters.value.showArchived || false,
                  "data-test-id": "show-archived-checkbox",
                  "onUpdate:modelValue": $event => setKeyValue("showArchived", $event)
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])])]),
                postamble: withCtx(() => [workflowsAndFolders.value.length === 0 && !hasFilters.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style["empty-folder-container"]),
                  "data-test-id": "empty-folder-container"
                }, [showArchivedOnlyHint.value ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
                  key: 0,
                  bold: false
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.archivedOnly.hint")) + " ", 1), createVNode(unref(N8nLink_default), {
                    size: "small",
                    "data-test-id": "show-archived-link",
                    onClick: onShowArchived
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.archivedOnly.hint.link")), 1)]),
                    _: 1
                  })]),
                  _: 1
                })) : createCommentVNode("", true), unref(projectPages).isSharedSubPage && personalProject.value ? (openBlock(), createBlock(EmptySharedSectionActionBox_default, {
                  key: 1,
                  "personal-project": personalProject.value,
                  "resource-type": "workflows"
                }, null, 8, ["personal-project"])) : currentFolder.value ? (openBlock(), createBlock(unref(N8nActionBox_default), {
                  key: 2,
                  "data-test-id": "empty-folder-action-box",
                  heading: unref(i18n).baseText("folders.empty.actionbox.title", {
                    interpolate: {
                      folderName: currentFolder.value.name
                    }
                  }),
                  "button-text": unref(i18n).baseText("generic.create.workflow"),
                  "button-type": "secondary",
                  "button-disabled": readOnlyEnv.value || !projectPermissions.value.workflow.create,
                  "onClick:button": onCreateWorkflowClick
                }, {
                  disabledButtonTooltip: withCtx(() => [createTextVNode(toDisplayString(readOnlyEnv.value ? unref(i18n).baseText("readOnlyEnv.cantAdd.workflow") : unref(i18n).baseText("generic.missing.permissions")), 1)]),
                  _: 1
                }, 8, ["heading", "button-text", "button-disabled"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
                _: 2
              }, [foldersEnabled.value || showRegisteredCommunityCTA.value ? {
                name: "add-button",
                fn: withCtx(() => [createVNode(unref(N8nTooltip_default), {
                  placement: "top",
                  disabled: !(unref(projectPages).isOverviewSubPage || unref(projectPages).isSharedSubPage || !readOnlyEnv.value && hasPermissionToCreateFolders.value)
                }, {
                  content: withCtx(() => [(unref(projectPages).isOverviewSubPage || unref(projectPages).isSharedSubPage) && !showRegisteredCommunityCTA.value ? (openBlock(), createElementBlock("span", _hoisted_1, [teamProjectsEnabled.value ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(i18n).baseText("folders.add.overview.withProjects.message")), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("folders.add.overview.community.message")), 1))])) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(currentParentName.value ? unref(i18n).baseText("folders.add.to.parent.message", {
                    interpolate: {
                      parent: currentParentName.value
                    }
                  }) : unref(i18n).baseText("folders.add.here.message")), 1))]),
                  default: withCtx(() => [createVNode(unref(N8nButton_default), {
                    size: "small",
                    icon: "folder-plus",
                    type: "tertiary",
                    "data-test-id": "add-folder-button",
                    class: normalizeClass(_ctx.$style["add-folder-button"]),
                    disabled: !showRegisteredCommunityCTA.value && (readOnlyEnv.value || !hasPermissionToCreateFolders.value),
                    onClick: createFolderInCurrent
                  }, null, 8, ["class", "disabled"])]),
                  _: 1
                }, 8, ["disabled"])]),
                key: "0"
              } : void 0]), 1032, ["filters", "resources", "shareable", "disabled", "resources-refreshing", "custom-page-size", "total-items", "has-empty-state", "onMouseleave"]));
            };
          }
        }); //#endregion
        //#region src/app/views/WorkflowsView.vue?vue&type=style&index=0&lang.module.scss
        actionsContainer = "_actionsContainer_7a9z2_123";
        emptyStateCard = "_emptyStateCard_7a9z2_139";
        emptyStateCardContent = "_emptyStateCardContent_7a9z2_152";
        emptyStateCardIcon = "_emptyStateCardIcon_7a9z2_159";
        dragging = "_dragging_7a9z2_192";
        name = "_name_7a9z2_210";
        WorkflowsView_vue_vue_type_style_index_0_lang_module_default = {
          actionsContainer,
          "easy-ai-workflow-callout": "_easy-ai-workflow-callout_7a9z2_128",
          "callout-trailing-content": "_callout-trailing-content_7a9z2_133",
          emptyStateCard,
          emptyStateCardContent,
          emptyStateCardIcon,
          "add-folder-button": "_add-folder-button_7a9z2_166",
          "breadcrumbs-container": "_breadcrumbs-container_7a9z2_171",
          "breadcrumbs-loading": "_breadcrumbs-loading_7a9z2_177",
          "empty-folder-container": "_empty-folder-container_7a9z2_183",
          "drag-active": "_drag-active_7a9z2_187",
          dragging,
          "drop-active": "_drop-active_7a9z2_199",
          "path-separator": "_path-separator_7a9z2_204",
          name,
          "pointer-disabled": "_pointer-disabled_7a9z2_216"
        }; //#endregion
        //#region src/app/views/WorkflowsView.vue
        cssModules = {
          "$style": WorkflowsView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", WorkflowsView_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();
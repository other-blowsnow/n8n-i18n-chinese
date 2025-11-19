;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./folders.store-legacy-C8VGYd29.js"], function (_export, _context) {
    "use strict";

    var computed, ref, reactive, useI18n, useLocalStorage, useRouter, useRoute, useSettingsStore, STORES, useCredentialsStore, useUsersStore, usePostHog, useWorkflowsStore, useTelemetry, defineStore, useToast, deepCopy, READY_TO_RUN_V2_PART2_EXPERIMENT, VIEWS, OPEN_AI_API_CREDENTIAL_TYPE, useCloudPlanStore, useFoldersStore, useProjectPages, READY_TO_RUN_WORKFLOW_V3, READY_TO_RUN_WORKFLOW_V4, LOCAL_STORAGE_CREDENTIAL_KEY, useReadyToRunWorkflowsV2Store;
    //#endregion
    //#region src/experiments/readyToRunWorkflowsV2/composables/useEmptyStateDetection.ts
    /**
    * Determines if the instance is truly empty and should show the simplified layout
    */
    function useEmptyStateDetection() {
      const foldersStore = useFoldersStore();
      const projectPages = useProjectPages();
      const route = useRoute();
      /**
      * Checks if the current state qualifies as "truly empty"
      * - No workflows exist in the instance
      * - User is on the main workflows view (not in a specific folder)
      * - User is on overview page or personal project workflows
      * - No search filters are applied
      * - Not currently refreshing data
      */
      const isTrulyEmpty = (currentRoute = route) => {
        const hasNoWorkflows = foldersStore.totalWorkflowCount === 0;
        const isNotInSpecificFolder = !currentRoute.params?.folderId;
        const isMainWorkflowsPage = projectPages.isOverviewSubPage || !projectPages.isSharedSubPage;
        const hasSearchQuery = !!currentRoute.query?.search;
        const hasFilters = !!(currentRoute.query?.status || currentRoute.query?.tags || currentRoute.query?.showArchived || currentRoute.query?.homeProject);
        return hasNoWorkflows && isNotInSpecificFolder && isMainWorkflowsPage && !hasSearchQuery && !hasFilters;
      };
      /**
      * Checks if we're in a state where the simplified layout should be shown
      * This matches the logic from ResourcesListLayout's showEmptyState computed property
      */
      const shouldShowSimplifiedLayout = (currentRoute, isFeatureEnabled, loading) => {
        if (loading || !isFeatureEnabled) return false;
        return isTrulyEmpty(currentRoute);
      };
      return {
        isTrulyEmpty,
        shouldShowSimplifiedLayout
      };
    }

    //#endregion
    //#region src/experiments/readyToRunWorkflowsV2/workflows/ai-workflow-v3.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        STORES = _useTelemetryLegacy00FJs.Cc;
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        usePostHog = _useTelemetryLegacy00FJs.i;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        deepCopy = _constantsLegacy00NJs.Hi;
        READY_TO_RUN_V2_PART2_EXPERIMENT = _constantsLegacy00NJs.Ls;
        VIEWS = _constantsLegacy00NJs.mo;
        OPEN_AI_API_CREDENTIAL_TYPE = _constantsLegacy00NJs.ya;
      }, function (_cloudPlanStoreLegacy013Js) {
        useCloudPlanStore = _cloudPlanStoreLegacy013Js.t;
      }, function (_foldersStoreLegacy01tJs) {
        useFoldersStore = _foldersStoreLegacy01tJs.t;
      }],
      execute: function () {
        //#region src/features/collaboration/projects/composables/useProjectPages.ts
        /**
        * This composable holds reusable logic that detects the current page type
        */
        _export("n", useProjectPages = () => {
          const route = useRoute();
          const isProjectsSubPage = computed(() => route.params?.projectId !== void 0);
          return reactive({
            isOverviewSubPage: computed(() => route.params?.projectId === void 0),
            isSharedSubPage: computed(() => route.name === VIEWS.SHARED_WITH_ME || route.name === VIEWS.SHARED_WORKFLOWS || route.name === VIEWS.SHARED_CREDENTIALS),
            isProjectsSubPage
          });
        });
        READY_TO_RUN_WORKFLOW_V3 = {
          name: "AI Agent workflow",
          meta: {
            templateId: "ready-to-run-ai-workflow-v3"
          },
          nodes: [{
            parameters: {
              url: "https://www.theverge.com/rss/index.xml",
              options: {}
            },
            type: "n8n-nodes-base.rssFeedReadTool",
            typeVersion: 1.2,
            position: [128, 448],
            id: "7febc10d-90ce-4329-90fb-a9a2ca0185c4",
            name: "Get Tech News"
          }, {
            parameters: {
              toolDescription: "Reads the news",
              url: "=https://feeds.bbci.co.uk/news/world/rss.xml",
              options: {}
            },
            type: "n8n-nodes-base.rssFeedReadTool",
            typeVersion: 1.2,
            position: [272, 448],
            id: "9424428d-45e2-4085-99f6-ee223802ba5a",
            name: "Get World News"
          }, {
            parameters: {
              model: {
                __rl: true,
                mode: "list",
                value: "gpt-4.1-mini"
              },
              options: {}
            },
            type: "@n8n/n8n-nodes-langchain.lmChatOpenAi",
            typeVersion: 1.2,
            position: [-144, 448],
            id: "a4fcf631-d3d9-4c4d-9e7b-02c93e70b23f",
            name: "OpenAI Model",
            notesInFlow: true,
            credentials: {},
            notes: "Free n8n credits "
          }, {
            parameters: {
              promptType: "define",
              text: "=Summarize world news and tech news from the last 24 hours. \nSkip your comments. \nThe titles should be \"World news:\" and \"Tech news:\" \nLimit to 10 bullet points. \nToday is {{ $today }}",
              options: {}
            },
            type: "@n8n/n8n-nodes-langchain.agent",
            typeVersion: 2.2,
            position: [-144, 192],
            id: "99bed296-3855-4d89-b983-f30539cfa775",
            name: "AI Summary Agent",
            notesInFlow: true,
            notes: "Double-click to open"
          }, {
            parameters: {
              content: "### ✅ This test workflow is ready to use:\nHover over here and click the orange \"Execute workflow\" button below.\n",
              height: 240,
              width: 400,
              color: 5
            },
            type: "n8n-nodes-base.stickyNote",
            typeVersion: 1,
            position: [-672, 112],
            id: "e664273f-63c6-4f12-804a-0fcd99c294cb",
            name: "Sticky Note2"
          }, {
            parameters: {
              subject: "Your news daily summary",
              emailType: "text",
              message: "={{ $json.output }}",
              options: {}
            },
            type: "n8n-nodes-base.gmail",
            typeVersion: 2.1,
            position: [688, 192],
            id: "d0e843dc-c398-4d32-8c56-0bf83176add3",
            name: "Send summary with Gmail",
            webhookId: "99bdd654-5c17-4ba1-b091-3d726e56f88d",
            notesInFlow: true,
            notes: "Double-click to open"
          }, {
            parameters: {},
            type: "n8n-nodes-base.manualTrigger",
            typeVersion: 1,
            position: [-432, 192],
            id: "e6618880-9281-4d92-91ff-c9a000429b7d",
            name: "Manual execution"
          }, {
            parameters: {
              content: "###  Bonus (optional)\nConnect the `Output (News Summary)` to the node below, add your Google account info, and send the News summary by email.",
              height: 112,
              width: 384,
              color: 7
            },
            type: "n8n-nodes-base.stickyNote",
            typeVersion: 1,
            position: [544, 16],
            id: "5e33fbe1-1971-48f8-81c7-08bd32e24aca",
            name: "Sticky Note"
          }, {
            parameters: {
              assignments: {
                assignments: [{
                  id: "85b5c530-2c13-4424-ab83-05979bc879a5",
                  name: "output",
                  value: "={{ $json.output }}",
                  type: "string"
                }]
              },
              options: {}
            },
            type: "n8n-nodes-base.set",
            typeVersion: 3.4,
            position: [256, 192],
            id: "f0a79856-ddcf-404b-95a7-a9bf882697ff",
            name: "Output (News summary)",
            notesInFlow: true,
            notes: "Double-click to open"
          }],
          connections: {
            "Get Tech News": {
              ai_tool: [[{
                node: "AI Summary Agent",
                type: "ai_tool",
                index: 0
              }]]
            },
            "Get World News": {
              ai_tool: [[{
                node: "AI Summary Agent",
                type: "ai_tool",
                index: 0
              }]]
            },
            "OpenAI Model": {
              ai_languageModel: [[{
                node: "AI Summary Agent",
                type: "ai_languageModel",
                index: 0
              }]]
            },
            "AI Summary Agent": {
              main: [[{
                node: "Output (News summary)",
                type: "main",
                index: 0
              }]]
            },
            "Manual execution": {
              main: [[{
                node: "AI Summary Agent",
                type: "main",
                index: 0
              }]]
            },
            "Output (News summary)": {
              main: [[]]
            }
          },
          pinData: {}
        }; //#endregion
        //#region src/experiments/readyToRunWorkflowsV2/workflows/ai-workflow-v4.ts
        READY_TO_RUN_WORKFLOW_V4 = {
          name: "AI Agent workflow",
          meta: {
            templateId: "ready-to-run-ai-workflow-v4"
          },
          nodes: [{
            parameters: {
              url: "https://www.theverge.com/rss/index.xml",
              options: {}
            },
            type: "n8n-nodes-base.rssFeedReadTool",
            typeVersion: 1.2,
            position: [288, 160],
            id: "6160830b-4f20-437c-b1a2-586bffe62d66",
            name: "Get Tech News"
          }, {
            parameters: {
              toolDescription: "Reads the news",
              url: "=https://feeds.bbci.co.uk/news/world/rss.xml",
              options: {}
            },
            type: "n8n-nodes-base.rssFeedReadTool",
            typeVersion: 1.2,
            position: [416, 160],
            id: "4f8ae14c-8c6a-4cf8-b51b-99af6bd23ed1",
            name: "Get World News"
          }, {
            parameters: {
              model: {
                __rl: true,
                mode: "list",
                value: "gpt-4.1-mini"
              },
              options: {}
            },
            type: "@n8n/n8n-nodes-langchain.lmChatOpenAi",
            typeVersion: 1.2,
            position: [32, 160],
            id: "95986360-8ca1-4b8a-af7e-f101e89e3654",
            name: "OpenAI Model",
            notesInFlow: true,
            credentials: {},
            notes: "Free n8n credits "
          }, {
            parameters: {
              promptType: "define",
              text: "=Summarize world news and tech news from the last 24 hours. \nSkip your comments. \nThe titles should be \"World news:\" and \"Tech news:\" \nLimit to 10 bullet points. \nToday is {{ $today }}",
              options: {}
            },
            type: "@n8n/n8n-nodes-langchain.agent",
            typeVersion: 2.2,
            position: [32, -64],
            id: "d36975bc-d51f-472f-a51f-f6c745b29a8d",
            name: "AI Summary Agent",
            notesInFlow: true,
            notes: "Double-click to open"
          }, {
            parameters: {
              content: "### ✅ This test workflow is ready to use \n\n1. Click the orange \"Execute workflow\" button\n\n2. Watch the workflow get the latest news and summarize it with AI \n\n3. (Bonus) Connect the `Gmail node` to the workflow to send the summary via email\n\n",
              height: 256,
              width: 352,
              color: 7
            },
            type: "n8n-nodes-base.stickyNote",
            typeVersion: 1,
            position: [-832, -128],
            id: "13abc1af-da4a-427d-8cc4-e260dff43307",
            name: "Sticky Note2"
          }, {
            parameters: {
              content: "[![Learn to use an AI Agent in your workflow](https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/thumb_2e91cdcea1.png)](https://www.youtube.com/watch?v=cMyOkQ4N-5M \"Watch on YouTube\")\n",
              height: 208,
              width: 352,
              color: 7
            },
            type: "n8n-nodes-base.stickyNote",
            typeVersion: 1,
            position: [-832, 160],
            id: "e0e15104-1954-43b9-b748-0ff8441f6aeb",
            name: "Sticky Note"
          }, {
            parameters: {
              assignments: {
                assignments: [{
                  id: "85b5c530-2c13-4424-ab83-05979bc879a5",
                  name: "output",
                  value: "={{ $json.output }}",
                  type: "string"
                }]
              },
              options: {}
            },
            type: "n8n-nodes-base.set",
            typeVersion: 3.4,
            position: [464, -64],
            id: "bef94b0a-b2aa-42f6-85bb-2e23f530d799",
            name: "Output (News Summary)",
            notesInFlow: true,
            notes: "Double-click to open"
          }, {
            parameters: {},
            type: "n8n-nodes-base.manualTrigger",
            typeVersion: 1,
            position: [-256, -64],
            id: "55cb3e43-b73c-48cb-b420-dd618de68a58",
            name: "Execute workflow"
          }, {
            parameters: {
              subject: "Your news daily summary",
              emailType: "text",
              message: "={{ $json.output }}",
              options: {}
            },
            type: "n8n-nodes-base.gmail",
            typeVersion: 2.1,
            position: [768, -64],
            id: "e74f8dac-d766-4f4d-91f3-36604a2d4e7a",
            name: "Send summary with Gmail",
            webhookId: "093b04f1-5e78-4926-9863-1b100d6f2ead",
            notesInFlow: true,
            notes: "Double-click to open"
          }],
          connections: {
            "Get Tech News": {
              ai_tool: [[{
                node: "AI Summary Agent",
                type: "ai_tool",
                index: 0
              }]]
            },
            "Get World News": {
              ai_tool: [[{
                node: "AI Summary Agent",
                type: "ai_tool",
                index: 0
              }]]
            },
            "OpenAI Model": {
              ai_languageModel: [[{
                node: "AI Summary Agent",
                type: "ai_languageModel",
                index: 0
              }]]
            },
            "AI Summary Agent": {
              main: [[{
                node: "Output (News Summary)",
                type: "main",
                index: 0
              }]]
            },
            "Output (News Summary)": {
              main: [[]]
            },
            "Execute workflow": {
              main: [[{
                node: "AI Summary Agent",
                type: "main",
                index: 0
              }]]
            }
          },
          pinData: {}
        }; //#endregion
        //#region src/experiments/readyToRunWorkflowsV2/stores/readyToRunWorkflowsV2.store.ts
        LOCAL_STORAGE_CREDENTIAL_KEY = "N8N_READY_TO_RUN_V2_OPENAI_CREDENTIAL_ID";
        _export("t", useReadyToRunWorkflowsV2Store = defineStore(STORES.EXPERIMENT_READY_TO_RUN_WORKFLOWS_V2, () => {
          const telemetry = useTelemetry();
          const i18n = useI18n();
          const toast = useToast();
          const router = useRouter();
          const credentialsStore = useCredentialsStore();
          const usersStore = useUsersStore();
          const settingsStore = useSettingsStore();
          const posthogStore = usePostHog();
          const cloudPlanStore = useCloudPlanStore();
          const workflowsStore = useWorkflowsStore();
          const isFeatureEnabled = computed(() => {
            const variant = posthogStore.getVariant(READY_TO_RUN_V2_PART2_EXPERIMENT.name);
            return (variant === READY_TO_RUN_V2_PART2_EXPERIMENT.variant3 || variant === READY_TO_RUN_V2_PART2_EXPERIMENT.variant4) && cloudPlanStore.userIsTrialing;
          });
          const claimedCredentialIdRef = useLocalStorage(LOCAL_STORAGE_CREDENTIAL_KEY, "");
          const claimingCredits = ref(false);
          const userHasOpenAiCredentialAlready = computed(() => !!credentialsStore.allCredentials.filter(credential => credential.type === OPEN_AI_API_CREDENTIAL_TYPE).length);
          const userHasClaimedAiCreditsAlready = computed(() => !!usersStore.currentUser?.settings?.userClaimedAiCredits);
          const userCanClaimOpenAiCredits = computed(() => {
            return settingsStore.isAiCreditsEnabled && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value;
          });
          const getCurrentVariant = () => {
            return posthogStore.getVariant(READY_TO_RUN_V2_PART2_EXPERIMENT.name);
          };
          const trackExecuteAiWorkflow = status => {
            const variant = getCurrentVariant();
            telemetry.track("User executed ready to run AI workflow", {
              status,
              variant
            });
          };
          const trackExecuteAiWorkflowSuccess = () => {
            const variant = getCurrentVariant();
            telemetry.track("User executed ready to run AI workflow successfully", {
              variant
            });
          };
          const claimFreeAiCredits = async projectId => {
            claimingCredits.value = true;
            try {
              const credential = await credentialsStore.claimFreeAiCredits(projectId);
              claimedCredentialIdRef.value = credential.id;
              telemetry.track("User claimed OpenAI credits");
              return credential;
            } catch (e) {
              toast.showError(e, i18n.baseText("freeAi.credits.showError.claim.title"), i18n.baseText("freeAi.credits.showError.claim.message"));
              throw e;
            } finally {
              claimingCredits.value = false;
            }
          };
          const createAndOpenAiWorkflow = async (source, parentFolderId) => {
            const variant = getCurrentVariant();
            telemetry.track("User opened ready to run AI workflow", {
              source,
              variant
            });
            const workflowTemplate = variant === READY_TO_RUN_V2_PART2_EXPERIMENT.variant3 ? READY_TO_RUN_WORKFLOW_V3 : READY_TO_RUN_WORKFLOW_V4;
            try {
              let workflowToCreate = {
                ...workflowTemplate,
                parentFolderId
              };
              const credentialId = claimedCredentialIdRef.value;
              if (credentialId && workflowToCreate.nodes) {
                const clonedWorkflow = deepCopy(workflowToCreate);
                const openAiNode = clonedWorkflow.nodes?.find(node => node.name === "OpenAI Model");
                if (openAiNode) {
                  openAiNode.credentials ??= {};
                  openAiNode.credentials[OPEN_AI_API_CREDENTIAL_TYPE] = {
                    id: credentialId,
                    name: ""
                  };
                }
                workflowToCreate = clonedWorkflow;
              }
              const createdWorkflow = await workflowsStore.createNewWorkflow(workflowToCreate);
              await router.push({
                name: VIEWS.WORKFLOW,
                params: {
                  name: createdWorkflow.id
                }
              });
              return createdWorkflow;
            } catch (error) {
              toast.showError(error, i18n.baseText("generic.error"));
              throw error;
            }
          };
          const claimCreditsAndOpenWorkflow = async (source, parentFolderId, projectId) => {
            await claimFreeAiCredits(projectId);
            await createAndOpenAiWorkflow(source, parentFolderId);
            if (usersStore?.currentUser?.settings) usersStore.currentUser.settings.userClaimedAiCredits = true;
          };
          const getCardVisibility = (canCreate, readOnlyEnv, loading) => {
            return !loading && isFeatureEnabled.value && userCanClaimOpenAiCredits.value && !readOnlyEnv && canCreate;
          };
          const getButtonVisibility = (hasWorkflows, canCreate, readOnlyEnv) => {
            return isFeatureEnabled.value && userCanClaimOpenAiCredits.value && !readOnlyEnv && canCreate && hasWorkflows;
          };
          const {
            shouldShowSimplifiedLayout
          } = useEmptyStateDetection();
          const getSimplifiedLayoutVisibility = (route, loading) => {
            return shouldShowSimplifiedLayout(route, isFeatureEnabled.value, loading);
          };
          return {
            isFeatureEnabled,
            claimingCredits,
            userCanClaimOpenAiCredits,
            claimFreeAiCredits,
            createAndOpenAiWorkflow,
            claimCreditsAndOpenWorkflow,
            getCardVisibility,
            getButtonVisibility,
            getSimplifiedLayoutVisibility,
            trackExecuteAiWorkflow,
            trackExecuteAiWorkflowSuccess
          };
        })); //#endregion
      }
    };
  });
})();
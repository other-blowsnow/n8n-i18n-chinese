;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./truncate-legacy-ZZ87M1Mo.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./constants-legacy-D0ziSY9e.js", "./useRootStore-legacy-D1vvqLPX.js", "./folders.store-legacy-Dx0000za.js"], function (_export, _context) {
    "use strict";

    var computed, ref, reactive, useI18n, useLocalStorage, useRouter, useRoute, useSettingsStore, useCredentialsStore, STORES, useUsersStore, useWorkflowsStore, useTelemetry, useToast, OPEN_AI_API_CREDENTIAL_TYPE, VIEWS, deepCopy, defineStore, useFoldersStore, READY_TO_RUN_AI_WORKFLOW, useProjectPages, LOCAL_STORAGE_CREDENTIAL_KEY, useReadyToRunStore;
    //#endregion
    //#region src/features/workflows/readyToRun/composables/useEmptyStateDetection.ts
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
        const isMainWorkflowsPage = projectPages.isOverviewSubPage;
        const hasSearchQuery = !!currentRoute.query?.search;
        const hasFilters = !!(currentRoute.query?.status || currentRoute.query?.tags || currentRoute.query?.showArchived || currentRoute.query?.homeProject);
        return hasNoWorkflows && isNotInSpecificFolder && isMainWorkflowsPage && !hasSearchQuery && !hasFilters;
      };
      return {
        isTrulyEmpty
      };
    }

    //#endregion
    //#region src/features/workflows/readyToRun/stores/readyToRun.store.ts
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
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        STORES = _useTelemetryLegacy00FJs.ac;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        OPEN_AI_API_CREDENTIAL_TYPE = _constantsLegacy00NJs.Ma;
        VIEWS = _constantsLegacy00NJs.Oo;
        deepCopy = _constantsLegacy00NJs.qi;
      }, function (_useRootStoreLegacy00TJs) {
        defineStore = _useRootStoreLegacy00TJs.D;
      }, function (_foldersStoreLegacy01xJs) {
        useFoldersStore = _foldersStoreLegacy01xJs.t;
      }],
      execute: function () {
        //#region src/features/workflows/readyToRun/workflows/aiWorkflow.ts
        READY_TO_RUN_AI_WORKFLOW = {
          name: "AI Agent workflow",
          meta: {
            templateId: "ready-to-run-ai-workflow"
          },
          nodes: [{
            parameters: {
              url: "https://www.theverge.com/rss/index.xml",
              options: {}
            },
            type: "n8n-nodes-base.rssFeedReadTool",
            typeVersion: 1.2,
            position: [-16, 768],
            id: "303e9b4e-cc4e-4d8a-8ede-7550f070d212",
            name: "Get Tech News"
          }, {
            parameters: {
              toolDescription: "Reads the news",
              url: "=https://feeds.bbci.co.uk/news/world/rss.xml",
              options: {}
            },
            type: "n8n-nodes-base.rssFeedReadTool",
            typeVersion: 1.2,
            position: [112, 768],
            id: "4090a753-f131-40b1-87c3-cf74d5a7e325",
            name: "Get World News"
          }, {
            parameters: {
              rule: {
                interval: [{
                  triggerAtHour: 7
                }]
              }
            },
            type: "n8n-nodes-base.scheduleTrigger",
            typeVersion: 1.2,
            position: [-560, 752],
            id: "651543b5-0213-433f-8760-57d62b8d6d64",
            name: "Run every day at 7AM",
            notesInFlow: true,
            notes: "Double-click to open"
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
            position: [160, 544],
            id: "99f7bb9e-f8c0-43ca-a9a8-a76634ac9611",
            name: "Output",
            notesInFlow: true,
            notes: "Double-click to open"
          }, {
            parameters: {},
            type: "n8n-nodes-base.manualTrigger",
            typeVersion: 1,
            position: [-560, 544],
            id: "a0390291-6794-4673-9a6a-5c3d3a5d9e4b",
            name: "Click ‘Execute workflow’ to run"
          }, {
            parameters: {
              content: "## ⚡ Start here:",
              height: 224,
              width: 224,
              color: 7
            },
            type: "n8n-nodes-base.stickyNote",
            typeVersion: 1,
            position: [-624, 480],
            id: "fac5929f-e065-4474-96b1-7bcc06834238",
            name: "Sticky Note"
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
            position: [-272, 768],
            id: "b16482e8-0d48-4426-aa93-c3fee11dd3cd",
            name: "OpenAI Model",
            notesInFlow: true,
            credentials: {},
            notes: "Double-click to open"
          }, {
            parameters: {
              content: "@[youtube](cMyOkQ4N-5M)",
              height: 512,
              width: 902,
              color: 7
            },
            type: "n8n-nodes-base.stickyNote",
            typeVersion: 1,
            position: [-352, -96],
            id: "ec65e69e-77fa-4912-a4af-49e0a248e2c8",
            name: "Sticky Note3"
          }, {
            parameters: {
              promptType: "define",
              text: "=Summarize world news and tech news from the last 24 hours. \nSkip your comments. \nThe titles should be \"World news:\" and \"Tech news:\" \nToday is {{ $today }}",
              options: {}
            },
            type: "@n8n/n8n-nodes-langchain.agent",
            typeVersion: 2.2,
            position: [-272, 544],
            id: "084d56aa-d157-4964-9073-b36d9d9589c5",
            name: "AI Summary Agent",
            notesInFlow: true,
            notes: "Double-click to open"
          }, {
            parameters: {
              content: "### Double click here to see the results:",
              height: 240,
              width: 192,
              color: 7
            },
            type: "n8n-nodes-base.stickyNote",
            typeVersion: 1,
            position: [112, 464],
            id: "a4b7a69a-0db8-4b9b-a81d-fd83378043a3",
            name: "Sticky Note1"
          }, {
            parameters: {
              content: "### 📰 Daily AI Summary\n\n\nThis workflow gets the latest news and asks AI to summarize it for you.\n\n⭐ Bonus: Send the summary via email by connecting your Gmail account\n\n▶ Watch the video to get started ",
              height: 272,
              width: 224,
              color: 5
            },
            type: "n8n-nodes-base.stickyNote",
            typeVersion: 1,
            position: [-624, 32],
            id: "74d80857-5e63-47a8-8e86-8ecd10fd5f9e",
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
            position: [432, 544],
            id: "45625d0d-bf26-4379-9eed-7bbc8e5d87a5",
            name: "Send summary by email",
            webhookId: "093b04f1-5e78-4926-9863-1b100d6f2ead",
            notesInFlow: true,
            credentials: {},
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
            "Run every day at 7AM": {
              main: [[{
                node: "AI Summary Agent",
                type: "main",
                index: 0
              }]]
            },
            "Click ‘Execute workflow’ to run": {
              main: [[{
                node: "AI Summary Agent",
                type: "main",
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
                node: "Output",
                type: "main",
                index: 0
              }]]
            },
            Output: {
              main: [[]]
            }
          },
          pinData: {}
        }; //#endregion
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
        LOCAL_STORAGE_CREDENTIAL_KEY = "N8N_READY_TO_RUN_OPENAI_CREDENTIAL_ID";
        _export("t", useReadyToRunStore = defineStore(STORES.READY_TO_RUN, () => {
          const telemetry = useTelemetry();
          const i18n = useI18n();
          const toast = useToast();
          const router = useRouter();
          const credentialsStore = useCredentialsStore();
          const usersStore = useUsersStore();
          const settingsStore = useSettingsStore();
          const workflowsStore = useWorkflowsStore();
          const claimedCredentialIdRef = useLocalStorage(LOCAL_STORAGE_CREDENTIAL_KEY, "");
          const claimingCredits = ref(false);
          const userHasOpenAiCredentialAlready = computed(() => !!credentialsStore.allCredentials.filter(credential => credential.type === OPEN_AI_API_CREDENTIAL_TYPE).length);
          const userHasClaimedAiCreditsAlready = computed(() => !!usersStore.currentUser?.settings?.userClaimedAiCredits);
          const userCanClaimOpenAiCredits = computed(() => {
            return settingsStore.isAiCreditsEnabled && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value;
          });
          const trackExecuteAiWorkflow = status => {
            telemetry.track("User executed ready to run AI workflow", {
              status
            });
          };
          const trackExecuteAiWorkflowSuccess = () => {
            telemetry.track("User executed ready to run AI workflow successfully");
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
            telemetry.track("User opened ready to run AI workflow", {
              source
            });
            try {
              let workflowToCreate = {
                ...READY_TO_RUN_AI_WORKFLOW,
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
          const getCardVisibility = (canCreate, readOnlyEnv) => {
            return userCanClaimOpenAiCredits.value && !readOnlyEnv && canCreate;
          };
          const getButtonVisibility = (hasWorkflows, canCreate, readOnlyEnv) => {
            return userCanClaimOpenAiCredits.value && !readOnlyEnv && canCreate && hasWorkflows;
          };
          const {
            isTrulyEmpty
          } = useEmptyStateDetection();
          const getSimplifiedLayoutVisibility = route => {
            return isTrulyEmpty(route);
          };
          return {
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
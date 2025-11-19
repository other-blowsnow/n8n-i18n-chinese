;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js"], function (_export, _context) {
    "use strict";

    var computed, ref, watch, useSettingsStore, STORES, usePostHog, useWorkflowsStore, useTelemetry, defineStore, PERSONALIZED_TEMPLATES_V3, TEMPLATE_RECO_V2, VIEWS, useCloudPlanStore, useTemplatesStore, NODE_DATA, PREDEFINED_NODES, usePersonalizedTemplatesV2Store, usePersonalizedTemplatesV3Store;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        STORES = _useTelemetryLegacy00FJs.Cc;
        usePostHog = _useTelemetryLegacy00FJs.i;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_constantsLegacy00NJs) {
        PERSONALIZED_TEMPLATES_V3 = _constantsLegacy00NJs.Fs;
        TEMPLATE_RECO_V2 = _constantsLegacy00NJs.Vs;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_cloudPlanStoreLegacy013Js) {
        useCloudPlanStore = _cloudPlanStoreLegacy013Js.t;
      }, function (_templatesStoreLegacy015Js) {
        useTemplatesStore = _templatesStoreLegacy015Js.t;
      }],
      execute: function () {
        //#region src/experiments/templateRecoV2/nodes/predefinedData.ts
        NODE_DATA = {
          "@n8n/n8n-nodes-langchain.agent": {
            starter: [6270, 5462, 3100],
            popular: [2465, 2326, 2006],
            youtube: [{
              id: "4cQWJViybAQ",
              title: "n8n Quick Start Tutorial: Build Your First Workflow [2025]",
              description: "In this tutorial, @theflowgrammer walks you through the conceptual foundations you need to know to build powerful n8n workflows from scratch."
            }, {
              id: "77Z07QnLlB8",
              title: "Building AI Agents: Prompt Engineering for Beginners [Part 3]",
              description: "In Part 3 of our Building AI Agents series, we focus on the essentials of prompt engineering—specifically for single-task agents in n8n."
            }]
          },
          "@n8n/n8n-nodes-langchain.openAi": {
            starter: [3100, 2722, 5462],
            popular: [2462, 2783, 2187],
            youtube: [{
              id: "4cQWJViybAQ",
              title: "n8n Quick Start Tutorial: Build Your First Workflow [2025]",
              description: "In this tutorial, @theflowgrammer walks you through the conceptual foundations you need to know to build powerful n8n workflows from scratch."
            }, {
              id: "77Z07QnLlB8",
              title: "Building AI Agents: Prompt Engineering for Beginners [Part 3]",
              description: "In Part 3 of our Building AI Agents series, we focus on the essentials of prompt engineering—specifically for single-task agents in n8n."
            }]
          },
          "n8n-nodes-base.googleSheets": {
            starter: [2581, 5462, 1751],
            popular: [5690, 2819, 6468],
            youtube: [{
              id: "4cQWJViybAQ",
              title: "n8n Quick Start Tutorial: Build Your First Workflow [2025]",
              description: "In this tutorial, @theflowgrammer walks you through the conceptual foundations you need to know to build powerful n8n workflows from scratch."
            }, {
              id: "IJdt_Ds-gmc",
              title: "OpenAI and Google Sheets integration: Automated workflows (+ 2 Free Templates)",
              description: "In this video, we connect OpenAI and Google Sheets into two powerful workflows."
            }]
          },
          "n8n-nodes-base.gmail": {
            starter: [1953, 6277, 2722],
            popular: [3686, 3123, 3905],
            youtube: [{
              id: "4cQWJViybAQ",
              title: "n8n Quick Start Tutorial: Build Your First Workflow [2025]",
              description: "In this tutorial, @theflowgrammer walks you through the conceptual foundations you need to know to build powerful n8n workflows from scratch."
            }, {
              id: "UnSKuFJPtyk",
              title: "Build Your First AI Agent for Free with No Code (n8n + Google Gemini 2.5 Pro)",
              description: "Learn how to build your own AI-powered email assistant with zero coding using n8n and Google Gemini. This step-by-step tutorial shows how to create an agent that can read, draft, and send emails on your behalf — all automatically."
            }]
          },
          "n8n-nodes-base.httpRequest": {
            starter: [1748, 3858, 5171],
            popular: [2035, 4110, 3100],
            youtube: [{
              id: "4cQWJViybAQ",
              title: "n8n Quick Start Tutorial: Build Your First Workflow [2025]",
              description: "In this tutorial, @theflowgrammer walks you through the conceptual foundations you need to know to build powerful n8n workflows from scratch."
            }, {
              id: "tKwvqgVEBOU",
              title: "n8n HTTP Request Node Made Simple: 10x Your Automations in 10 Minutes",
              description: "The n8n HTTP Request node is the most powerful tool you're probably not using. Most n8n users stick to pre-built integrations because the HTTP Request node looks intimidating, but mastering n8n HTTP requests will literally 10x what you can automate."
            }]
          },
          "@n8n/n8n-nodes-langchain.googleGemini": {
            starter: [6270, 4365, 3905],
            popular: [5993, 2753, 2466],
            youtube: [{
              id: "4cQWJViybAQ",
              title: "n8n Quick Start Tutorial: Build Your First Workflow [2025]",
              description: "In this tutorial, @theflowgrammer walks you through the conceptual foundations you need to know to build powerful n8n workflows from scratch."
            }, {
              id: "UnSKuFJPtyk",
              title: "Build Your First AI Agent for Free with No Code (n8n + Google Gemini 2.5 Pro)",
              description: "Learn how to build your own AI-powered email assistant with zero coding using n8n and Google Gemini. This step-by-step tutorial shows how to create an agent that can read, draft, and send emails on your behalf — all automatically."
            }]
          },
          "n8n-nodes-base.googleDrive": {
            starter: [6611, 1960, 2782],
            popular: [2753, 4767, 3135],
            youtube: [{
              id: "4cQWJViybAQ",
              title: "n8n Quick Start Tutorial: Build Your First Workflow [2025]",
              description: "In this tutorial, @theflowgrammer walks you through the conceptual foundations you need to know to build powerful n8n workflows from scratch."
            }, {
              id: "vqZTpKGh_jU",
              title: "I Automated My Entire Google Drive With n8n – It Organizes Itself",
              description: "In this video, learn how to use n8n to automatically organize your Google Drive files From organizing files to streamlining tasks, discover smart ways to boost productivity in just minutes!"
            }]
          },
          "n8n-nodes-base.telegram": {
            starter: [2462, 2114, 4365],
            popular: [3654, 2783, 3686],
            youtube: [{
              id: "4cQWJViybAQ",
              title: "n8n Quick Start Tutorial: Build Your First Workflow [2025]",
              description: "In this tutorial, @theflowgrammer walks you through the conceptual foundations you need to know to build powerful n8n workflows from scratch."
            }, {
              id: "ODdRXozldPw",
              title: "How to build a Telegram AI bot with n8n – Step-by-step tutorial",
              description: "In this video, we’ll guide you through the workflow that integrates with Telegram to create an AI-powered chatbot. It uses OpenAI's Chat Model and Dall-E 3 to understand and respond to user messages, correct errors, and generate and send images based on user queries."
            }]
          }
        }; //#endregion
        //#region src/experiments/templateRecoV2/stores/templateRecoV2.store.ts
        PREDEFINED_NODES = Object.keys(NODE_DATA);
        _export("n", usePersonalizedTemplatesV2Store = defineStore(STORES.EXPERIMENT_TEMPLATE_RECO_V2, () => {
          const telemetry = useTelemetry();
          const posthogStore = usePostHog();
          const cloudPlanStore = useCloudPlanStore();
          const templatesStore = useTemplatesStore();
          const isFeatureEnabled = () => {
            return posthogStore.getVariant(TEMPLATE_RECO_V2.name) === TEMPLATE_RECO_V2.variant && cloudPlanStore.userIsTrialing;
          };
          function getNodeData(nodeId) {
            if (nodeId in NODE_DATA) return NODE_DATA[nodeId];
            return {
              starter: [],
              popular: [],
              youtube: []
            };
          }
          async function getTemplateData(templateId) {
            return await templatesStore.fetchTemplateById(templateId.toString());
          }
          function getTemplateRoute(id) {
            return {
              name: VIEWS.TEMPLATE,
              params: {
                id
              }
            };
          }
          const nodes = computed(() => {
            const selectedApps = cloudPlanStore.selectedApps;
            if (!selectedApps?.length) return [];
            return PREDEFINED_NODES.filter(nodeName => selectedApps.includes(nodeName)).slice(0, 3);
          });
          function trackMinicardClick(tool) {
            telemetry.track("User clicked on node minicard", {
              tool
            });
          }
          function trackModalTabView(tool) {
            telemetry.track("User visited template recommendation modal tab", {
              tool
            });
          }
          function trackTemplateTileClick(templateId) {
            telemetry.track("User clicked on template recommendation tile", {
              templateId
            });
          }
          function trackVideoClick(name) {
            telemetry.track("User clicked on template recommendation video", {
              name
            });
          }
          function trackSeeMoreClick(type) {
            telemetry.track("User clicked on template recommendation see more", {
              type
            });
          }
          return {
            isFeatureEnabled,
            getNodeData,
            getTemplateData,
            nodes,
            getTemplateRoute,
            trackMinicardClick,
            trackModalTabView,
            trackTemplateTileClick,
            trackVideoClick,
            trackSeeMoreClick
          };
        })); //#endregion
        //#region src/experiments/personalizedTemplatesV3/stores/personalizedTemplatesV3.store.ts
        _export("t", usePersonalizedTemplatesV3Store = defineStore(STORES.PERSONALIZED_TEMPLATES_V3, () => {
          const telemetry = useTelemetry();
          const posthogStore = usePostHog();
          const cloudPlanStore = useCloudPlanStore();
          const settingsStore = useSettingsStore();
          const templatesStore = useTemplatesStore();
          const workflowsStore = useWorkflowsStore();
          const INTERACTION_STORAGE_KEY = "n8n-personalizedTemplatesV3-hasInteracted";
          const hasInteractedWithTemplateRecommendations = ref(localStorage.getItem(INTERACTION_STORAGE_KEY) === "true");
          const isFeatureEnabled = () => {
            const isLocalhost = window.location.hostname === "localhost";
            return posthogStore.getVariant(PERSONALIZED_TEMPLATES_V3.name) === PERSONALIZED_TEMPLATES_V3.variant && (isLocalhost || cloudPlanStore.userIsTrialing);
          };
          const hasChosenHubSpot = computed(() => {
            const selectedApps = cloudPlanStore.selectedApps;
            if (!selectedApps?.length) return false;
            return selectedApps.includes("n8n-nodes-base.hubspot") || selectedApps.includes("n8n-nodes-base.hubspotTrigger");
          });
          const shouldShowTemplateTooltip = computed(() => {
            const allWorkflows = workflowsStore.allWorkflows;
            return isFeatureEnabled() && hasChosenHubSpot.value && allWorkflows.length > 0 && !hasInteractedWithTemplateRecommendations.value;
          });
          function getHubSpotData() {
            return {
              templates: [8966, 8967, 8968, 8969, 8970, 8971]
            };
          }
          async function getTemplateData(templateId) {
            return await templatesStore.fetchTemplateById(templateId.toString());
          }
          function getTemplateRoute(id) {
            return {
              name: VIEWS.TEMPLATE,
              params: {
                id
              }
            };
          }
          function trackPersonalizationCardClick() {
            telemetry.track("User clicked on personalization card");
          }
          function trackPersonalizationModalView() {
            telemetry.track("User viewed personalization modal");
          }
          function trackPersonalizationTooltipView() {
            telemetry.track("User viewed personalization tooltip");
          }
          function trackPersonalizationTooltipDismiss() {
            telemetry.track("User dismissed personalization tooltip");
          }
          function trackTemplateClickFromModal(templateId) {
            telemetry.track("User clicked on template from modal", {
              templateId
            });
          }
          function trackTemplatesRepoClickFromModal() {
            telemetry.track("User clicked on templates repo from modal");
          }
          function markTemplateRecommendationInteraction() {
            hasInteractedWithTemplateRecommendations.value = true;
            localStorage.setItem(INTERACTION_STORAGE_KEY, "true");
          }
          const trackExperimentParticipation = async () => {
            if (settingsStore.isCloudDeployment && !cloudPlanStore.state.initialized) try {
              await cloudPlanStore.initialize();
            } catch (error) {
              console.warn("Could not load cloud plan data for experiment tracking:", error);
              return;
            }
            if (!hasChosenHubSpot.value) return;
            const variant = posthogStore.getVariant(PERSONALIZED_TEMPLATES_V3.name);
            if (variant) telemetry.track("User is part of experiment", {
              name: PERSONALIZED_TEMPLATES_V3.name,
              variant
            });
          };
          let hasTrackedExperiment = false;
          watch(hasChosenHubSpot, hasHubSpot => {
            if (hasHubSpot && !hasTrackedExperiment) {
              hasTrackedExperiment = true;
              trackExperimentParticipation();
            }
          }, {
            immediate: true
          });
          return {
            isFeatureEnabled,
            hasChosenHubSpot,
            shouldShowTemplateTooltip,
            getHubSpotData,
            getTemplateData,
            getTemplateRoute,
            trackPersonalizationCardClick,
            trackPersonalizationModalView,
            trackPersonalizationTooltipView,
            trackPersonalizationTooltipDismiss,
            trackTemplateClickFromModal,
            trackTemplatesRepoClickFromModal,
            markTemplateRecommendationInteraction
          };
        })); //#endregion
      }
    };
  });
})();
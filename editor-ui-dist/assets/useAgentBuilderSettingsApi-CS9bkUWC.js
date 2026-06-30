import { c as makeRestApiRequest } from "./useRootStore-C7jLo3fI.js";
import "./settings.store-DmallR-B.js";
//#region src/features/agents/composables/useAgentBuilderSettingsApi.ts
var BASE = "/agent-builder";
var getAgentBuilderSettings = async (context) => await makeRestApiRequest(context, "GET", `${BASE}/settings`);
var updateAgentBuilderSettings = async (context, payload) => await makeRestApiRequest(context, "PATCH", `${BASE}/settings`, payload);
var getAgentBuilderStatus = async (context) => await makeRestApiRequest(context, "GET", `${BASE}/status`);
//#endregion
export { getAgentBuilderStatus as n, updateAgentBuilderSettings as r, getAgentBuilderSettings as t };

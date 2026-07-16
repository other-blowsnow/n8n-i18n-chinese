import { c as makeRestApiRequest } from "./useRootStore-DORNi26-.js";
import "./settings.store-BSo6Wkgz.js";
//#region src/features/agents/composables/useAgentBuilderSettingsApi.ts
var BASE = "/agent-builder";
var getAgentBuilderSettings = async (context) => await makeRestApiRequest(context, "GET", `${BASE}/settings`);
var updateAgentBuilderSettings = async (context, payload) => await makeRestApiRequest(context, "PATCH", `${BASE}/settings`, payload);
var getAgentBuilderStatus = async (context) => await makeRestApiRequest(context, "GET", `${BASE}/status`);
//#endregion
export { getAgentBuilderStatus as n, updateAgentBuilderSettings as r, getAgentBuilderSettings as t };

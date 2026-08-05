import { Da as INSTANCE_AI_THREAD_SOURCES } from "./src-32cSG5_t.js";
//#region src/features/ai/instanceAi/constants.ts
var INSTANCE_AI_VIEW = "InstanceAi";
var INSTANCE_AI_THREAD_VIEW = "InstanceAiThread";
var INSTANCE_AI_SETTINGS_VIEW = "InstanceAiSettings";
var INSTANCE_AI_PROJECT_ID_QUERY = "projectId";
/** Entry-point source carried into the empty view when a hand-off can't create a thread yet. */
var INSTANCE_AI_SOURCE_QUERY = "source";
/** Brand names, deliberately not translated; single source for dialogs and settings rows. */
var SANDBOX_PROVIDER_LABELS = {
	daytona: "Daytona",
	"n8n-sandbox": "n8n Sandbox Service"
};
var INSTANCE_AI_NEW_VIEW = "InstanceAiNew";
var INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY = "instanceAiAgentBuilderTarget";
var NEW_CONVERSATION_TITLE = "New conversation";
var BROWSER_USE_CONNECTION_TYPE = "browser-use";
var COMPUTER_USE_CONNECTION_TYPE = "computer-use";
var INSTANCE_AI_THREAD_SOURCE_SET = new Set(INSTANCE_AI_THREAD_SOURCES);
function isInstanceAiThreadSource(value) {
	return typeof value === "string" && INSTANCE_AI_THREAD_SOURCE_SET.has(value);
}
var INSTANCE_AI_CHAT_ROUTE_NAMES = new Set([
	INSTANCE_AI_VIEW,
	INSTANCE_AI_THREAD_VIEW,
	INSTANCE_AI_NEW_VIEW
]);
/**
* True while the route stays inside the chat module. Teardown hooks check this
* because entering the module can transiently remount its layout, and a remount
* must not be mistaken for a real route exit.
*/
function isInstanceAiChatRoute(name) {
	return typeof name === "string" && INSTANCE_AI_CHAT_ROUTE_NAMES.has(name);
}
//#endregion
export { INSTANCE_AI_PROJECT_ID_QUERY as a, INSTANCE_AI_THREAD_VIEW as c, SANDBOX_PROVIDER_LABELS as d, isInstanceAiChatRoute as f, INSTANCE_AI_NEW_VIEW as i, INSTANCE_AI_VIEW as l, COMPUTER_USE_CONNECTION_TYPE as n, INSTANCE_AI_SETTINGS_VIEW as o, isInstanceAiThreadSource as p, INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY as r, INSTANCE_AI_SOURCE_QUERY as s, BROWSER_USE_CONNECTION_TYPE as t, NEW_CONVERSATION_TITLE as u };

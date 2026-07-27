import "./constants-CSBjw1Ht.js";
//#region src/features/ai/instanceAi/constants.ts
var INSTANCE_AI_VIEW = "InstanceAi";
var INSTANCE_AI_THREAD_VIEW = "InstanceAiThread";
var INSTANCE_AI_SETTINGS_VIEW = "InstanceAiSettings";
var INSTANCE_AI_NEW_VIEW = "InstanceAiNew";
var NEW_CONVERSATION_TITLE = "New conversation";
var BROWSER_USE_CONNECTION_TYPE = "browser-use";
var COMPUTER_USE_CONNECTION_TYPE = "computer-use";
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
export { INSTANCE_AI_THREAD_VIEW as a, isInstanceAiChatRoute as c, INSTANCE_AI_SETTINGS_VIEW as i, COMPUTER_USE_CONNECTION_TYPE as n, INSTANCE_AI_VIEW as o, INSTANCE_AI_NEW_VIEW as r, NEW_CONVERSATION_TITLE as s, BROWSER_USE_CONNECTION_TYPE as t };

import { Pr as NEW_AGENT_VIEW } from "./constants-CJQKNI-b.js";
import { a as INSTANCE_AI_PROJECT_ID_QUERY } from "./constants-IsCxc_jb.js";
//#region src/features/ai/instanceAi/createAgentRoute.ts
function instanceAiCreateAgentRoute(projectId) {
	return {
		name: NEW_AGENT_VIEW,
		query: { [INSTANCE_AI_PROJECT_ID_QUERY]: projectId }
	};
}
//#endregion
export { instanceAiCreateAgentRoute as t };

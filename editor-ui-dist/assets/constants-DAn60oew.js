//#region src/features/ai/chatHub/constants.ts
var CHAT_VIEW = "chat";
var CHAT_CONVERSATION_VIEW = "chat-conversation";
var CHAT_WORKFLOW_AGENTS_VIEW = "chat-workflow-agents";
var CHAT_PERSONAL_AGENTS_VIEW = "chat-personal-agents";
var CHAT_SETTINGS_VIEW = "chat-settings";
var NEW_AGENT_MENU_ID = "agent::new";
var providerDisplayNames = {
	openai: "OpenAI",
	anthropic: "Anthropic",
	google: "Google",
	azureOpenAi: "Azure (API Key)",
	azureEntraId: "Azure (Entra ID)",
	ollama: "Ollama",
	awsBedrock: "AWS Bedrock",
	vercelAiGateway: "Vercel AI Gateway",
	xAiGrok: "xAI Grok",
	groq: "Groq",
	openRouter: "OpenRouter",
	deepSeek: "DeepSeek",
	cohere: "Cohere",
	mistralCloud: "Mistral Cloud",
	n8n: "Workflow agent",
	"custom-agent": "Personal agent"
};
var vectorStoreProviderDisplayNames = {
	pgvector: "PGVector",
	pinecone: "Pinecone",
	qdrant: "Qdrant"
};
var MOBILE_MEDIA_QUERY = "(max-width: 768px)";
var TOOL_SETTINGS_MODAL_KEY = "toolSettingsModal";
var TOOLS_MANAGER_MODAL_KEY = "toolsManagerModal";
var AGENT_EDITOR_MODAL_KEY = "agentEditorModal";
var CHAT_CREDENTIAL_SELECTOR_MODAL_KEY = "chatCredentialSelectorModal";
var CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY = "chatModelByIdSelectorModal";
var CHAT_PROVIDER_SETTINGS_MODAL_KEY = "chatProviderSettingsModal";
var LLM_AGGREGATORS = [
	"awsBedrock",
	"vercelAiGateway",
	"openRouter"
];
//#endregion
export { CHAT_PERSONAL_AGENTS_VIEW as a, CHAT_VIEW as c, MOBILE_MEDIA_QUERY as d, NEW_AGENT_MENU_ID as f, vectorStoreProviderDisplayNames as g, providerDisplayNames as h, CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY as i, CHAT_WORKFLOW_AGENTS_VIEW as l, TOOL_SETTINGS_MODAL_KEY as m, CHAT_CONVERSATION_VIEW as n, CHAT_PROVIDER_SETTINGS_MODAL_KEY as o, TOOLS_MANAGER_MODAL_KEY as p, CHAT_CREDENTIAL_SELECTOR_MODAL_KEY as r, CHAT_SETTINGS_VIEW as s, AGENT_EDITOR_MODAL_KEY as t, LLM_AGGREGATORS as u };

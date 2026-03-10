const CHAT_VIEW = "chat";
const CHAT_CONVERSATION_VIEW = "chat-conversation";
const CHAT_WORKFLOW_AGENTS_VIEW = "chat-workflow-agents";
const CHAT_PERSONAL_AGENTS_VIEW = "chat-personal-agents";
const CHAT_SETTINGS_VIEW = "chat-settings";
const CHAT_SESSIONS_PAGE_SIZE = 18;
const MAX_AGENT_NAME_CHARS_MENU = 45;
const NEW_AGENT_MENU_ID = "agent::new";
const MAX_AGENT_NAME_CHARS = 30;
const MAX_FLATTENED_SEARCH_RESULTS_PER_PROVIDER = 10;
const providerDisplayNames = {
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
const MOBILE_MEDIA_QUERY = "(max-width: 768px)";
const TOOL_SETTINGS_MODAL_KEY = "toolSettingsModal";
const TOOLS_MANAGER_MODAL_KEY = "toolsManagerModal";
const AGENT_EDITOR_MODAL_KEY = "agentEditorModal";
const CHAT_CREDENTIAL_SELECTOR_MODAL_KEY = "chatCredentialSelectorModal";
const CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY = "chatModelByIdSelectorModal";
const CHAT_PROVIDER_SETTINGS_MODAL_KEY = "chatProviderSettingsModal";
const LLM_AGGREGATORS = [
	"awsBedrock",
	"vercelAiGateway",
	"openRouter"
];
export { TOOLS_MANAGER_MODAL_KEY as _, CHAT_PERSONAL_AGENTS_VIEW as a, CHAT_SETTINGS_VIEW as c, LLM_AGGREGATORS as d, MAX_AGENT_NAME_CHARS as f, NEW_AGENT_MENU_ID as g, MOBILE_MEDIA_QUERY as h, CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY as i, CHAT_VIEW as l, MAX_FLATTENED_SEARCH_RESULTS_PER_PROVIDER as m, CHAT_CONVERSATION_VIEW as n, CHAT_PROVIDER_SETTINGS_MODAL_KEY as o, MAX_AGENT_NAME_CHARS_MENU as p, CHAT_CREDENTIAL_SELECTOR_MODAL_KEY as r, CHAT_SESSIONS_PAGE_SIZE as s, AGENT_EDITOR_MODAL_KEY as t, CHAT_WORKFLOW_AGENTS_VIEW as u, TOOL_SETTINGS_MODAL_KEY as v, providerDisplayNames as y };

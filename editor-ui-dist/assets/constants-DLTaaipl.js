const CHAT_VIEW = "chat";
const CHAT_CONVERSATION_VIEW = "chat-conversation";
const CHAT_WORKFLOW_AGENTS_VIEW = "chat-workflow-agents";
const CHAT_PERSONAL_AGENTS_VIEW = "chat-personal-agents";
const CHAT_SETTINGS_VIEW = "chat-settings";
const CHAT_STORE = "chatStore";
const CHAT_SESSIONS_PAGE_SIZE = 18;
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
	n8n: "n8n",
	"custom-agent": "Custom Agent"
};
const MOBILE_MEDIA_QUERY = "(max-width: 768px)";
const TOOLS_SELECTOR_MODAL_KEY = "toolsSelectorModal";
const AGENT_EDITOR_MODAL_KEY = "agentEditorModal";
const CHAT_CREDENTIAL_SELECTOR_MODAL_KEY = "chatCredentialSelectorModal";
const CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY = "chatModelByIdSelectorModal";
const CHAT_PROVIDER_SETTINGS_MODAL_KEY = "chatProviderSettingsModal";
export { CHAT_PERSONAL_AGENTS_VIEW as a, CHAT_SETTINGS_VIEW as c, CHAT_WORKFLOW_AGENTS_VIEW as d, MOBILE_MEDIA_QUERY as f, CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY as i, CHAT_STORE as l, providerDisplayNames as m, CHAT_CONVERSATION_VIEW as n, CHAT_PROVIDER_SETTINGS_MODAL_KEY as o, TOOLS_SELECTOR_MODAL_KEY as p, CHAT_CREDENTIAL_SELECTOR_MODAL_KEY as r, CHAT_SESSIONS_PAGE_SIZE as s, AGENT_EDITOR_MODAL_KEY as t, CHAT_VIEW as u };

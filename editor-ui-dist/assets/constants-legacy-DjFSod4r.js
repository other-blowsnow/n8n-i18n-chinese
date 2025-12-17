;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    var CHAT_VIEW, CHAT_CONVERSATION_VIEW, CHAT_AGENTS_VIEW, CHAT_SETTINGS_VIEW, CHAT_STORE, providerDisplayNames, MOBILE_MEDIA_QUERY, TOOLS_SELECTOR_MODAL_KEY, AGENT_EDITOR_MODAL_KEY, CHAT_CREDENTIAL_SELECTOR_MODAL_KEY, CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY, CHAT_PROVIDER_SETTINGS_MODAL_KEY;
    return {
      setters: [],
      execute: function () {
        //#region src/features/ai/chatHub/constants.ts
        _export("l", CHAT_VIEW = "chat");
        _export("r", CHAT_CONVERSATION_VIEW = "chat-conversation");
        _export("n", CHAT_AGENTS_VIEW = "chat-agents");
        _export("s", CHAT_SETTINGS_VIEW = "chat-settings");
        _export("c", CHAT_STORE = "chatStore");
        _export("f", providerDisplayNames = {
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
        });
        _export("u", MOBILE_MEDIA_QUERY = "(max-width: 768px)");
        _export("d", TOOLS_SELECTOR_MODAL_KEY = "toolsSelectorModal");
        _export("t", AGENT_EDITOR_MODAL_KEY = "agentEditorModal");
        _export("i", CHAT_CREDENTIAL_SELECTOR_MODAL_KEY = "chatCredentialSelectorModal");
        _export("a", CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY = "chatModelByIdSelectorModal");
        _export("o", CHAT_PROVIDER_SETTINGS_MODAL_KEY = "chatProviderSettingsModal"); //#endregion
      }
    };
  });
})();
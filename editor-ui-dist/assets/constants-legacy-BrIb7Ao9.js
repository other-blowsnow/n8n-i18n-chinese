;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    var CHAT_VIEW, CHAT_CONVERSATION_VIEW, CHAT_AGENTS_VIEW, CHAT_STORE, providerDisplayNames, MOBILE_MEDIA_QUERY, TOOLS_SELECTOR_MODAL_KEY, AGENT_EDITOR_MODAL_KEY;
    return {
      setters: [],
      execute: function () {
        //#region src/features/ai/chatHub/constants.ts
        _export("a", CHAT_VIEW = "chat");
        _export("r", CHAT_CONVERSATION_VIEW = "chat-conversation");
        _export("n", CHAT_AGENTS_VIEW = "chat-agents");
        _export("i", CHAT_STORE = "chatStore");
        _export("c", providerDisplayNames = {
          openai: "OpenAI",
          anthropic: "Anthropic",
          google: "Google",
          n8n: "n8n",
          "custom-agent": "Custom Agent"
        });
        _export("o", MOBILE_MEDIA_QUERY = "(max-width: 768px)");
        _export("s", TOOLS_SELECTOR_MODAL_KEY = "toolsSelectorModal");
        _export("t", AGENT_EDITOR_MODAL_KEY = "agentEditorModal"); //#endregion
      }
    };
  });
})();
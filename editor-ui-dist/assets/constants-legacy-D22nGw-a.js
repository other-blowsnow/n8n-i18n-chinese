;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    var CHAT_VIEW, CHAT_CONVERSATION_VIEW, CHAT_AGENTS_VIEW, CHAT_STORE, providerDisplayNames, MOBILE_MEDIA_QUERY;
    return {
      setters: [],
      execute: function () {
        //#region src/features/ai/chatHub/constants.ts
        _export("i", CHAT_VIEW = "chat");
        _export("n", CHAT_CONVERSATION_VIEW = "chat-conversation");
        _export("t", CHAT_AGENTS_VIEW = "chat-agents");
        _export("r", CHAT_STORE = "chatStore");
        _export("o", providerDisplayNames = {
          openai: "OpenAI",
          anthropic: "Anthropic",
          google: "Google",
          n8n: "n8n",
          "custom-agent": "Custom Agent"
        });
        _export("a", MOBILE_MEDIA_QUERY = "(max-width: 768px)"); //#endregion
      }
    };
  });
})();
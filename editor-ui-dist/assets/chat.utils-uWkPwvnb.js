import { fc as makeRestApiRequest, h_ as streamRequest, a0 as defineStore, au as useRootStore, r as ref, bD as v4, h$ as CHAT_STORE, i0 as chatHubProviderSchema } from "./index-lkSN61-i.js";
const fetchChatModelsApi = async (context, payload) => {
  const apiEndpoint = "/chat/models";
  return await makeRestApiRequest(context, "POST", apiEndpoint, payload);
};
function sendText(ctx, payload, onMessageUpdated, onDone, onError) {
  void streamRequest(
    ctx,
    "/chat/send",
    payload,
    onMessageUpdated,
    onDone,
    onError,
    "\n"
  );
}
const fetchConversationsApi = async (context) => {
  const apiEndpoint = "/chat/conversations";
  return await makeRestApiRequest(context, "GET", apiEndpoint);
};
const fetchConversationMessagesApi = async (context, conversationId) => {
  const apiEndpoint = `/chat/conversations/${conversationId}/messages`;
  return await makeRestApiRequest(context, "GET", apiEndpoint);
};
const useChatStore = defineStore(CHAT_STORE, () => {
  const rootStore = useRootStore();
  const models = ref();
  const loadingModels = ref(false);
  const isResponding = ref(false);
  const messagesBySession = ref({});
  const sessions = ref([]);
  async function fetchChatModels(credentialMap) {
    loadingModels.value = true;
    models.value = await fetchChatModelsApi(rootStore.restApiContext, {
      credentials: credentialMap
    });
    loadingModels.value = false;
    return models.value;
  }
  async function fetchSessions() {
    sessions.value = await fetchConversationsApi(rootStore.restApiContext);
  }
  async function fetchMessages(sessionId) {
    const messages = await fetchConversationMessagesApi(rootStore.restApiContext, sessionId);
    messagesBySession.value = {
      ...messagesBySession.value,
      [sessionId]: messages.map((msg) => ({
        id: msg.id,
        role: msg.role,
        type: "message",
        text: msg.content
      }))
    };
  }
  function addUserMessage(sessionId, content, id) {
    messagesBySession.value = {
      ...messagesBySession.value,
      [sessionId]: [
        ...messagesBySession.value[sessionId] ?? [],
        {
          id,
          role: "user",
          type: "message",
          text: content
        }
      ]
    };
  }
  function addAiMessage(sessionId, content, id) {
    messagesBySession.value = {
      ...messagesBySession.value,
      [sessionId]: [
        ...messagesBySession.value[sessionId] ?? [],
        {
          id,
          role: "assistant",
          type: "message",
          text: content
        }
      ]
    };
  }
  function appendMessage(sessionId, content, id) {
    messagesBySession.value = {
      ...messagesBySession.value,
      [sessionId]: (messagesBySession.value[sessionId] ?? []).map((msg) => {
        if (msg.id === id && msg.type === "message") {
          return {
            ...msg,
            text: msg.text + content
          };
        }
        return msg;
      })
    };
  }
  function onBeginMessage(sessionId, messageId, nodeId, runIndex) {
    isResponding.value = true;
    addAiMessage(sessionId, "", `${messageId}-${nodeId}-${runIndex ?? 0}`);
  }
  function onChunk(sessionId, messageId, chunk, nodeId, runIndex) {
    appendMessage(sessionId, chunk, `${messageId}-${nodeId}-${runIndex ?? 0}`);
  }
  function onEndMessage(_messageId, _nodeId, _runIndex) {
    isResponding.value = false;
  }
  function onStreamMessage(sessionId, message, messageId) {
    const nodeId = message.metadata?.nodeId || "unknown";
    const runIndex = message.metadata?.runIndex;
    switch (message.type) {
      case "begin":
        onBeginMessage(sessionId, messageId, nodeId, runIndex);
        break;
      case "item":
        onChunk(sessionId, messageId, message.content ?? "", nodeId, runIndex);
        break;
      case "end":
        onEndMessage();
        break;
      case "error":
        onChunk(
          sessionId,
          messageId,
          `Error: ${message.content ?? "Unknown error"}`,
          nodeId,
          runIndex
        );
        onEndMessage();
        break;
    }
  }
  function onStreamDone() {
    isResponding.value = false;
  }
  function onStreamError(_e) {
    isResponding.value = false;
  }
  function askAI(sessionId, message, model, credentials) {
    const messageId = v4();
    addUserMessage(sessionId, message, messageId);
    sendText(
      rootStore.restApiContext,
      {
        model,
        messageId,
        sessionId,
        message,
        credentials
      },
      (chunk) => onStreamMessage(sessionId, chunk, messageId),
      onStreamDone,
      onStreamError
    );
  }
  return {
    models,
    loadingModels,
    messagesBySession,
    isResponding,
    sessions,
    fetchChatModels,
    askAI,
    addUserMessage,
    fetchSessions,
    fetchMessages
  };
});
function findOneFromModelsResponse(response) {
  for (const provider of chatHubProviderSchema.options) {
    if (response[provider].models.length > 0) {
      return { model: response[provider].models[0].name, provider };
    }
  }
  return void 0;
}
function getRelativeDate(dateString) {
  const date = new Date(dateString);
  const now = /* @__PURE__ */ new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);
  const conversationDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  if (conversationDate.getTime() === today.getTime()) {
    return "Today";
  } else if (conversationDate.getTime() === yesterday.getTime()) {
    return "Yesterday";
  } else if (conversationDate >= lastWeek) {
    return "This week";
  } else {
    return "Older";
  }
}
function groupConversationsByDate(sessions) {
  const groups = /* @__PURE__ */ new Map();
  sessions.forEach((session) => {
    const group = getRelativeDate(session.updatedAt);
    if (!groups.has(group)) {
      groups.set(group, []);
    }
    groups.get(group).push(session);
  });
  const groupOrder = ["Today", "Yesterday", "This week", "Older"];
  const result = [];
  groupOrder.forEach((groupName) => {
    if (groups.has(groupName)) {
      const sessions2 = groups.get(groupName);
      result.push({
        group: groupName,
        sessions: sessions2.map((session) => ({
          id: session.id,
          label: session.title
        }))
      });
    }
  });
  return result;
}
export {
  findOneFromModelsResponse as f,
  groupConversationsByDate as g,
  useChatStore as u
};

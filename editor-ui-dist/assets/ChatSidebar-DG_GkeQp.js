import { d as defineComponent, b as useRouter, a3 as useRoute, x as computed, o as onMounted, h as createElementBlock, g as openBlock, j as createBaseVNode, i as createVNode, n as normalizeClass, k as unref, N as N8nIcon, w as withCtx, l as createTextVNode, p as N8nText, ab as _sfc_main$1, F as Fragment, A as renderList, t as toDisplayString, e as createBlock, hZ as CHAT_CONVERSATION_VIEW, bj as N8nMenuItem, V as VIEWS, bq as CHAT_VIEW, _ as _export_sfc } from "./index-lkSN61-i.js";
import { u as useChatStore, g as groupConversationsByDate } from "./chat.utils-uWkPwvnb.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChatSidebar",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const currentSessionId = computed(
      () => typeof route.params.id === "string" ? route.params.id : void 0
    );
    const chatStore = useChatStore();
    onMounted(async () => {
      await chatStore.fetchSessions();
    });
    const groupedConversations = computed(() => groupConversationsByDate(chatStore.sessions));
    function onReturn() {
      void router.push({ name: VIEWS.HOMEPAGE });
    }
    function onNewChat() {
      void router.push({
        name: CHAT_VIEW,
        force: true
        // to focus input again when the user is already in CHAT_VIEW
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["side-menu", _ctx.$style.container])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.returnButton),
            onClick: onReturn
          }, [
            createBaseVNode("i", null, [
              createVNode(unref(N8nIcon), { icon: "arrow-left" })
            ]),
            createVNode(unref(N8nText), { bold: "" }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("Chat")
              ])),
              _: 1
            })
          ], 2),
          createVNode(unref(_sfc_main$1), {
            title: "New chat",
            icon: "square-pen",
            type: "tertiary",
            text: "",
            onClick: onNewChat
          })
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.items)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(groupedConversations.value, (group2) => {
            return openBlock(), createElementBlock("div", {
              key: group2.group,
              class: normalizeClass(_ctx.$style.group)
            }, [
              createVNode(unref(N8nText), {
                class: normalizeClass(_ctx.$style.groupHeader),
                size: "xsmall",
                bold: "",
                color: "text-light"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(group2.group), 1)
                ]),
                _: 2
              }, 1032, ["class"]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(group2.sessions, (session) => {
                return openBlock(), createBlock(unref(N8nMenuItem), {
                  key: session.id,
                  active: currentSessionId.value === session.id,
                  item: {
                    id: session.id,
                    icon: "message-circle",
                    label: session.label,
                    route: { to: { name: unref(CHAT_CONVERSATION_VIEW), params: { id: session.id } } }
                  }
                }, null, 8, ["active", "item"]);
              }), 128))
            ], 2);
          }), 128))
        ], 2)
      ], 2);
    };
  }
});
const container = "_container_becj7_123";
const header = "_header_becj7_132";
const returnButton = "_returnButton_becj7_140";
const items = "_items_becj7_151";
const group = "_group_becj7_158";
const groupHeader = "_groupHeader_becj7_163";
const loading = "_loading_becj7_167";
const empty = "_empty_becj7_168";
const style0 = {
  container,
  header,
  returnButton,
  items,
  group,
  groupHeader,
  loading,
  empty
};
const cssModules = {
  "$style": style0
};
const ChatSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ChatSidebar as default
};

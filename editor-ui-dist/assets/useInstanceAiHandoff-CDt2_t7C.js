import { _t as useRouter } from "./src-XWsjz-dU.js";
import { t as useToast } from "./useToast-D_P6PEhU.js";
import { iu as v4 } from "./constants-BaNoJas_.js";
import { t as useRootStore } from "./useRootStore-DORNi26-.js";
import { i as INSTANCE_AI_THREAD_VIEW } from "./constants-C21f_fc9.js";
import { n as useInstanceAiStore } from "./instanceAi.store-i9U2Zq1U.js";
//#region src/features/ai/instanceAi/composables/useInstanceAiHandoff.ts
/** The existing credential id, when known, so the agent can act on it directly. */
function existingCredentialNote(credential) {
	return credential.id ? ` The existing credential id is \`${credential.id}\`.` : "";
}
/**
* Opening question for a new-tab credential hand-off (credentials list, editor):
* the new thread carries no workflow, so it names the credential setup modal as
* the user's context. The node isn't carried into the new tab, so it isn't named.
*/
function buildInstanceAiCredentialQuestion(credential) {
	return `How do I set up the credentials for ${credential.displayName}?${existingCredentialNote(credential)} I'm looking at the credential setup modal.`;
}
/**
* Opening question for an in-thread credential hand-off (the workflow artifact):
* the workflow is already the thread's subject, so it names the node and omits
* the modal context.
*/
function buildInstanceAiArtifactCredentialQuestion(credential) {
	const node = credential.nodeName ? ` It's for the "${credential.nodeName}" node.` : "";
	return `How do I set up the credentials for ${credential.displayName}?${node}${existingCredentialNote(credential)}`;
}
var pendingFirstMessageKey = (threadId) => `n8n-instance-ai-first-message:${threadId}`;
function buildInstanceAiCredentialHandoffContext(credential) {
	return {
		source: "credential-modal",
		credential: {
			credentialType: credential.credentialType,
			displayName: credential.displayName,
			...credential.id ? { id: credential.id } : {},
			...credential.nodeName ? { nodeName: credential.nodeName } : {},
			...credential.nodeType ? { nodeType: credential.nodeType } : {},
			...credential.documentationUrl ? { documentationUrl: credential.documentationUrl } : {},
			...credential.oauthRedirectUrl ? { oauthRedirectUrl: credential.oauthRedirectUrl } : {}
		}
	};
}
/**
* Consume the opening message a new-tab hand-off stashed here. A separate window
* can't send it (the destination loads before the BE persists it), so it does.
*/
function consumePendingFirstMessage(threadId) {
	const raw = localStorage.getItem(pendingFirstMessageKey(threadId));
	if (!raw) return null;
	localStorage.removeItem(pendingFirstMessageKey(threadId));
	try {
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
var handoffInFlight = false;
/**
* Create a thread, optionally seed its runtime (`prepare`), send the opening turn,
* and navigate to it. Shared by the capability adapters and the credentials list.
*/
function useInstanceAiHandoff() {
	const instanceAiStore = useInstanceAiStore();
	const rootStore = useRootStore();
	const router = useRouter();
	const toast = useToast();
	async function startThread(projectId, message, attachments, prepare, options) {
		if (handoffInFlight) return;
		handoffInFlight = true;
		try {
			const threadId = v4();
			const tab = options?.newTab ? window.open("", "_blank") : null;
			try {
				await instanceAiStore.syncThread(threadId, projectId);
			} catch {
				tab?.close();
				toast.showError(/* @__PURE__ */ new Error("Failed to start a new thread. Try again."), "Open failed");
				return;
			}
			const route = {
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			};
			if (options?.newTab) {
				localStorage.setItem(pendingFirstMessageKey(threadId), JSON.stringify({
					message,
					attachments,
					context: options?.context
				}));
				if (tab) tab.location.href = router.resolve(route).href;
				else await router.push(route);
				return;
			}
			const thread = instanceAiStore.getOrCreateRuntime(threadId, projectId);
			prepare?.(threadId);
			thread.sendMessage(message, attachments, rootStore.pushRef, options?.context);
			await router.push(route);
		} finally {
			handoffInFlight = false;
		}
	}
	return { startThread };
}
//#endregion
export { useInstanceAiHandoff as a, consumePendingFirstMessage as i, buildInstanceAiCredentialHandoffContext as n, buildInstanceAiCredentialQuestion as r, buildInstanceAiArtifactCredentialQuestion as t };

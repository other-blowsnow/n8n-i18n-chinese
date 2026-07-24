import { wt as useRouter } from "./src-bSQwfFcX.js";
import { t as useToast } from "./useToast-B3_HjF9W.js";
import { fu as v4 } from "./constants-CSBjw1Ht.js";
import { wn as useProjectsStore } from "./workflowDocument.store-DWj92T8C.js";
import { t as useRootStore } from "./useRootStore-hyBq4XlJ.js";
import { a as INSTANCE_AI_THREAD_VIEW } from "./constants-mJXvFdSv.js";
import { n as useInstanceAiStore } from "./instanceAi.store-CiPNewSM.js";
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
* Stash the opening message for a thread the current context can't send itself
* (a new tab, a router guard). The destination thread view consumes it after
* hydration + SSE connect (see consumePendingFirstMessage) and sends it there.
*/
function stashPendingFirstMessage(threadId, payload) {
	localStorage.setItem(pendingFirstMessageKey(threadId), JSON.stringify(payload));
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
/** Resolve the personal project a launched thread binds to, loading it on first use. */
async function ensurePersonalProjectId() {
	const projectsStore = useProjectsStore();
	if (!projectsStore.personalProject) try {
		await projectsStore.getPersonalProject();
	} catch {
		return null;
	}
	return projectsStore.personalProject?.id ?? null;
}
/**
* Provision a launched thread the destination view will send for: mint the id,
* persist it, and stash the opening message. Shared by the deep-link router
* guard and the new-tab hand-off, which both hand off delivery to the view.
* Returns the thread id, or null if persistence failed.
*/
async function provisionLaunchedThread(projectId, payload, launch) {
	const threadId = v4();
	try {
		await useInstanceAiStore().syncThread(threadId, projectId, launch);
	} catch {
		return null;
	}
	stashPendingFirstMessage(threadId, payload);
	return threadId;
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
			if (options?.newTab) {
				const tab = window.open("", "_blank");
				const threadId = await provisionLaunchedThread(projectId, {
					message,
					attachments,
					context: options?.context
				}, options?.launch);
				if (!threadId) {
					tab?.close();
					toast.showError(/* @__PURE__ */ new Error("Failed to start a new thread. Try again."), "Open failed");
					return;
				}
				const route = {
					name: INSTANCE_AI_THREAD_VIEW,
					params: { threadId }
				};
				if (tab) tab.location.href = router.resolve(route).href;
				else await router.push(route);
				return;
			}
			const threadId = v4();
			try {
				await instanceAiStore.syncThread(threadId, projectId, options?.launch);
			} catch {
				toast.showError(/* @__PURE__ */ new Error("Failed to start a new thread. Try again."), "Open failed");
				return;
			}
			const thread = instanceAiStore.getOrCreateRuntime(threadId, projectId);
			prepare?.(threadId);
			thread.sendMessage(message, attachments, rootStore.pushRef, options?.context);
			await router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			});
		} finally {
			handoffInFlight = false;
		}
	}
	return { startThread };
}
//#endregion
export { ensurePersonalProjectId as a, consumePendingFirstMessage as i, buildInstanceAiCredentialHandoffContext as n, provisionLaunchedThread as o, buildInstanceAiCredentialQuestion as r, useInstanceAiHandoff as s, buildInstanceAiArtifactCredentialQuestion as t };

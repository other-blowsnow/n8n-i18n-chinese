import { Xn as makeRestApiRequest } from "./useRootStore-xTXN1Ozx.js";
//#region src/features/workflow-reviews/workflowReviews.api.ts
/** Workflow-scoped list used by review-required toggle sync. */
async function fetchWorkflowReviewRequests(context, query) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests", { ...query });
}
async function fetchEligibleReviewers(context, query) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests/eligible-reviewers", { ...query });
}
async function createWorkflowReviewRequest(context, payload) {
	return await makeRestApiRequest(context, "POST", "/workflow-review-requests", { ...payload });
}
async function updateWorkflowReviewRequestVersion(context, workflowReviewRequestId, payload) {
	return await makeRestApiRequest(context, "POST", `/workflow-review-requests/${workflowReviewRequestId}/update-version`, { ...payload });
}
async function fetchWorkflowReviewInboxSummary(context) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests/summary");
}
/** Cross-project inbox list. */
async function fetchWorkflowReviewInbox(context, params) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests/inbox", params);
}
//#endregion
export { fetchWorkflowReviewRequests as a, fetchWorkflowReviewInboxSummary as i, fetchEligibleReviewers as n, updateWorkflowReviewRequestVersion as o, fetchWorkflowReviewInbox as r, createWorkflowReviewRequest as t };

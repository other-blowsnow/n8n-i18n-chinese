import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
import { t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { mo as VIEWS } from "./constants-C_oOJnqT.js";
import { t as convertToDisplayDate } from "./dateFormatter-CXO-zUXu.js";
function useExecutionHelpers() {
	const i18n = useI18n();
	const router = useRouter();
	const telemetry = useTelemetry();
	function getUIDetails(execution) {
		const status = {
			name: "unknown",
			createdAt: execution.createdAt?.toString() ?? "",
			startTime: formatDate(execution.startedAt ?? execution.createdAt),
			label: "Status unknown",
			runningTime: "",
			showTimestamp: true,
			tags: execution.annotation?.tags ?? []
		};
		if (execution.status === "new") {
			status.name = "new";
			status.label = i18n.baseText("executionsList.new");
			status.showTimestamp = false;
		} else if (execution.status === "waiting") {
			status.name = "waiting";
			status.label = i18n.baseText("executionsList.waiting");
			status.showTimestamp = false;
		} else if (execution.status === "canceled") status.label = i18n.baseText("executionsList.canceled");
		else if (execution.status === "running") {
			status.name = "running";
			status.label = i18n.baseText("executionsList.running");
		} else if (execution.status === "success") {
			status.name = "success";
			status.label = i18n.baseText("executionsList.succeeded");
		} else if (execution.status === "error" || execution.status === "crashed") {
			status.name = "error";
			status.label = i18n.baseText("executionsList.error");
		}
		if (!execution.status) execution.status = "unknown";
		if (execution.startedAt && execution.stoppedAt) {
			const stoppedAt = execution.stoppedAt ? new Date(execution.stoppedAt).getTime() : Date.now();
			status.runningTime = i18n.displayTimer(stoppedAt - new Date(execution.startedAt).getTime(), true);
		}
		return status;
	}
	function formatDate(fullDate) {
		const { date, time } = convertToDisplayDate(fullDate);
		return i18n.baseText("executionsList.started", { interpolate: {
			time,
			date
		} });
	}
	function isExecutionRetriable(execution) {
		return ["crashed", "error"].includes(execution.status) && !execution.retrySuccessId;
	}
	function openExecutionInNewTab(executionId, workflowId) {
		const route = router.resolve({
			name: VIEWS.EXECUTION_PREVIEW,
			params: {
				name: workflowId,
				executionId
			}
		});
		window.open(route.href, "_blank");
	}
	function resolveRelatedExecutionUrl(metadata) {
		const info = metadata.parentExecution || metadata.subExecution;
		if (!info) return "";
		const { workflowId, executionId } = info;
		return router.resolve({
			name: VIEWS.EXECUTION_PREVIEW,
			params: {
				name: workflowId,
				executionId
			}
		}).fullPath;
	}
	function trackOpeningRelatedExecution(metadata, view) {
		if (!(metadata.parentExecution || metadata.subExecution)) return;
		telemetry.track(metadata.parentExecution ? "User clicked parent execution button" : "User clicked inspect sub-workflow", { view });
	}
	return {
		getUIDetails,
		formatDate,
		isExecutionRetriable,
		openExecutionInNewTab,
		trackOpeningRelatedExecution,
		resolveRelatedExecutionUrl
	};
}
export { useExecutionHelpers as t };

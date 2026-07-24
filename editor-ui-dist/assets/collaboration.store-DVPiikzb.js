import { It as ref, S as computed, gt as watch } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CPznNyVT.js";
import { Ct as useRoute } from "./src-bSQwfFcX.js";
import { t as useToast } from "./useToast-B3_HjF9W.js";
import { hi as VIEWS, sf as TIME } from "./constants-CSBjw1Ht.js";
import { dn as useWorkflowsStore } from "./workflowDocument.store-DWj92T8C.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-hyBq4XlJ.js";
import { Vn as STORES } from "./settings.store-C5bX9q6f.js";
import { f as useUIStore, t as useUsersStore } from "./users.store-CsyV7tYv.js";
import { c as getWorkflowWriteLock, t as useWorkflowsListStore } from "./workflowsList.store-BBdSrTS3.js";
import { t as useBuilderStore } from "./builder.store-B8MoplEq.js";
import { _ as useCanvasStore } from "./useNodeHelpers-Cu8j3KZn.js";
import { t as usePushConnectionStore } from "./pushConnection.store-C9XDW7o6.js";
//#region src/app/composables/useBeforeUnload.ts
/**
* Composable to handle the beforeunload event in canvas views.
*
* This hook will prevent closing the tab and prompt the user if the ui state is dirty
* (workflow has changes) and the user tries to leave the page.
*/
function useBeforeUnload({ route }) {
	const uiStore = useUIStore();
	const canvasStore = useCanvasStore();
	const i18n = useI18n();
	const unloadTimeout = ref(null);
	const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
	const handlers = [];
	function onBeforeUnload(e) {
		if (isDemoRoute.value || window.preventNodeViewBeforeUnload) return;
		handlers.forEach((handler) => handler());
		if (uiStore.stateIsDirty) {
			e.returnValue = true;
			return true;
		} else {
			canvasStore.startLoading(i18n.baseText("nodeView.redirecting"));
			return;
		}
	}
	function addBeforeUnloadHandler(handler) {
		handlers.push(handler);
	}
	function addBeforeUnloadEventBindings() {
		window.addEventListener("beforeunload", onBeforeUnload);
	}
	function removeBeforeUnloadEventBindings() {
		if (unloadTimeout.value) clearTimeout(unloadTimeout.value);
		window.removeEventListener("beforeunload", onBeforeUnload);
	}
	return {
		onBeforeUnload,
		addBeforeUnloadEventBindings,
		removeBeforeUnloadEventBindings,
		addBeforeUnloadHandler
	};
}
//#endregion
//#region src/features/collaboration/collaboration/collaboration.store.ts
var HEARTBEAT_INTERVAL = 5 * TIME.MINUTE;
var WRITE_LOCK_HEARTBEAT_INTERVAL = 30 * TIME.SECOND;
var LOCK_STATE_POLL_INTERVAL = 20 * TIME.SECOND;
var INACTIVITY_CHECK_INTERVAL = 5 * TIME.SECOND;
var INACTIVITY_TIMEOUT_THRESHOLD = 20 * TIME.SECOND;
/**
* Store for tracking active users for workflows. I.e. to show
* who is collaboratively viewing/editing the workflow at the same time.
*/
var useCollaborationStore = defineStore(STORES.COLLABORATION, () => {
	const pushStore = usePushConnectionStore();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const usersStore = useUsersStore();
	const uiStore = useUIStore();
	const rootStore = useRootStore();
	const builderStore = useBuilderStore();
	const toast = useToast();
	const i18n = useI18n();
	const { addBeforeUnloadEventBindings, removeBeforeUnloadEventBindings, addBeforeUnloadHandler } = useBeforeUnload({ route: useRoute() });
	const unloadTimeout = ref(null);
	const collaborators = ref([]);
	const currentWriterLock = ref(null);
	const lastActivityTime = ref(Date.now());
	const activityCheckInterval = ref(null);
	const heartbeatTimer = ref(null);
	const writeLockHeartbeatTimer = ref(null);
	const lockStatePollTimer = ref(null);
	const pushStoreEventListenerRemovalFn = ref(null);
	const collaboratingWorkflowId = ref(null);
	let refreshCanvasCallback = null;
	let pendingRemoteUpdateNotification = null;
	const isCurrentTabWriter = computed(() => {
		return currentWriterLock.value?.clientId === rootStore.pushRef;
	});
	const isCurrentUserWriter = computed(() => {
		return currentWriterLock.value?.userId === usersStore.currentUserId;
	});
	const currentWriter = computed(() => {
		return collaborators.value.find((c) => c.user.id === currentWriterLock.value?.userId) ?? null;
	});
	const isAnyoneWriting = computed(() => {
		return currentWriterLock.value !== null;
	});
	const shouldBeReadOnly = computed(() => {
		return isAnyoneWriting.value && !isCurrentTabWriter.value;
	});
	async function fetchWriteLockState(workflowId) {
		try {
			if (!workflowsStore.isWorkflowSaved[workflowId]) return null;
			return await getWorkflowWriteLock(rootStore.restApiContext, workflowId);
		} catch {
			return null;
		}
	}
	function notifyWorkflowOpened() {
		if (!collaboratingWorkflowId.value) return;
		pushStore.send({
			type: "workflowOpened",
			workflowId: collaboratingWorkflowId.value
		});
	}
	function notifyWorkflowClosed() {
		if (!collaboratingWorkflowId.value) return;
		pushStore.send({
			type: "workflowClosed",
			workflowId: collaboratingWorkflowId.value
		});
		collaborators.value = collaborators.value.filter(({ user }) => user.id !== usersStore.currentUserId);
	}
	const stopHeartbeat = () => {
		if (heartbeatTimer.value !== null) {
			clearInterval(heartbeatTimer.value);
			heartbeatTimer.value = null;
		}
	};
	const startHeartbeat = () => {
		stopHeartbeat();
		heartbeatTimer.value = window.setInterval(notifyWorkflowOpened, HEARTBEAT_INTERVAL);
	};
	const stopWriteLockHeartbeat = () => {
		if (writeLockHeartbeatTimer.value !== null) {
			clearInterval(writeLockHeartbeatTimer.value);
			writeLockHeartbeatTimer.value = null;
		}
	};
	const sendWriteLockHeartbeat = () => {
		if (!isCurrentTabWriter.value || !collaboratingWorkflowId.value) {
			stopWriteLockHeartbeat();
			return;
		}
		pushStore.send({
			type: "writeAccessHeartbeat",
			workflowId: collaboratingWorkflowId.value
		});
	};
	const startWriteLockHeartbeat = () => {
		stopWriteLockHeartbeat();
		writeLockHeartbeatTimer.value = window.setInterval(sendWriteLockHeartbeat, WRITE_LOCK_HEARTBEAT_INTERVAL);
	};
	const stopLockStatePolling = () => {
		if (lockStatePollTimer.value !== null) {
			clearInterval(lockStatePollTimer.value);
			lockStatePollTimer.value = null;
		}
	};
	/**
	* Poll lock state from backend to detect if lock has expired.
	* Only runs when in read-only mode (someone else has the lock).
	*/
	const pollLockState = async (workflowId) => {
		if (!shouldBeReadOnly.value) {
			stopLockStatePolling();
			return;
		}
		if (!await fetchWriteLockState(workflowId) && currentWriterLock.value) {
			currentWriterLock.value = null;
			stopLockStatePolling();
		}
	};
	const startLockStatePolling = (workflowId) => {
		stopLockStatePolling();
		lockStatePollTimer.value = window.setInterval(async () => await pollLockState(workflowId), LOCK_STATE_POLL_INTERVAL);
	};
	addBeforeUnloadHandler(() => {
		notifyWorkflowClosed();
		if (uiStore.stateIsDirty) unloadTimeout.value = setTimeout(() => notifyWorkflowOpened, 5 * TIME.SECOND);
	});
	function recordActivity() {
		lastActivityTime.value = Date.now();
	}
	function requestWriteAccess() {
		if (isCurrentTabWriter.value) return true;
		if (!collaboratingWorkflowId.value) return false;
		try {
			pushStore.send({
				type: "writeAccessRequested",
				workflowId: collaboratingWorkflowId.value
			});
		} catch {
			return false;
		}
		return true;
	}
	function requestWriteAccessForce() {
		if (!collaboratingWorkflowId.value) return false;
		try {
			pushStore.send({
				type: "writeAccessRequested",
				workflowId: collaboratingWorkflowId.value,
				force: true
			});
		} catch {
			return false;
		}
		return true;
	}
	function releaseWriteAccess() {
		currentWriterLock.value = null;
		stopWriteLockHeartbeat();
		if (!collaboratingWorkflowId.value) return true;
		try {
			pushStore.send({
				type: "writeAccessReleaseRequested",
				workflowId: collaboratingWorkflowId.value
			});
			return true;
		} catch {
			return false;
		}
	}
	function checkInactivity() {
		if (!isCurrentTabWriter.value) return;
		if (builderStore.streaming) return;
		if (Date.now() - lastActivityTime.value >= INACTIVITY_TIMEOUT_THRESHOLD) releaseWriteAccess();
	}
	function stopInactivityCheck() {
		if (activityCheckInterval.value !== null) {
			clearInterval(activityCheckInterval.value);
			activityCheckInterval.value = null;
		}
	}
	function startInactivityCheck() {
		stopInactivityCheck();
		activityCheckInterval.value = window.setInterval(checkInactivity, INACTIVITY_CHECK_INTERVAL);
	}
	function setRefreshCanvasCallback(fn) {
		refreshCanvasCallback = fn;
	}
	function closePendingRemoteUpdateNotification() {
		pendingRemoteUpdateNotification?.close();
		pendingRemoteUpdateNotification = null;
	}
	function showPendingRemoteUpdateNotification() {
		if (pendingRemoteUpdateNotification) return;
		pendingRemoteUpdateNotification = toast.showMessage({
			title: i18n.baseText("workflows.remoteUpdateBlocked.title"),
			message: i18n.baseText("workflows.remoteUpdateBlocked.message"),
			type: "warning",
			duration: 0,
			onClose: () => {
				pendingRemoteUpdateNotification = null;
			}
		});
	}
	async function handleWorkflowUpdate() {
		if (isCurrentTabWriter.value || !collaboratingWorkflowId.value) return;
		if (uiStore.stateIsDirty) {
			showPendingRemoteUpdateNotification();
			return true;
		}
		try {
			const updatedWorkflow = await workflowsListStore.fetchWorkflow(collaboratingWorkflowId.value);
			if (refreshCanvasCallback) refreshCanvasCallback(updatedWorkflow);
			return true;
		} catch (error) {
			console.error("[Collaboration] Error in handleWorkflowUpdate:", error);
			return false;
		}
	}
	watch(() => uiStore.stateIsDirty, (isDirty) => {
		if (!isDirty) closePendingRemoteUpdateNotification();
	}, { flush: "sync" });
	function handleWriteLockHolderLeft() {
		if (!currentWriterLock.value) return;
		if (!collaborators.value.some((c) => c.user.id === currentWriterLock.value?.userId)) currentWriterLock.value = null;
	}
	async function initialize(workflowId) {
		if (pushStoreEventListenerRemovalFn.value) return;
		collaboratingWorkflowId.value = workflowId;
		const writeLock = await fetchWriteLockState(workflowId);
		if (writeLock) {
			currentWriterLock.value = writeLock;
			if (isCurrentTabWriter.value) startWriteLockHeartbeat();
			else startLockStatePolling(workflowId);
		}
		pushStoreEventListenerRemovalFn.value = pushStore.addEventListener((event) => {
			if (event.type === "collaboratorsChanged" && event.data.workflowId === collaboratingWorkflowId.value) {
				collaborators.value = event.data.collaborators;
				handleWriteLockHolderLeft();
				return;
			}
			if (event.type === "writeAccessAcquired" && event.data.workflowId === collaboratingWorkflowId.value) {
				currentWriterLock.value = {
					clientId: event.data.clientId,
					userId: event.data.userId
				};
				if (isCurrentTabWriter.value) {
					recordActivity();
					startWriteLockHeartbeat();
					stopLockStatePolling();
				} else startLockStatePolling(workflowId);
				return;
			}
			if (event.type === "writeAccessReleased" && event.data.workflowId === collaboratingWorkflowId.value) {
				currentWriterLock.value = null;
				stopWriteLockHeartbeat();
				stopLockStatePolling();
				return;
			}
			if (event.type === "workflowUpdated" && event.data.workflowId === collaboratingWorkflowId.value) {
				handleWorkflowUpdate();
				return;
			}
		});
		addBeforeUnloadEventBindings();
		notifyWorkflowOpened();
		startHeartbeat();
		startInactivityCheck();
	}
	function terminate() {
		if (typeof pushStoreEventListenerRemovalFn.value === "function") {
			pushStoreEventListenerRemovalFn.value();
			pushStoreEventListenerRemovalFn.value = null;
		}
		notifyWorkflowClosed();
		stopHeartbeat();
		stopWriteLockHeartbeat();
		stopLockStatePolling();
		stopInactivityCheck();
		if (isCurrentTabWriter.value) releaseWriteAccess();
		pushStore.clearQueue();
		removeBeforeUnloadEventBindings();
		if (unloadTimeout.value) clearTimeout(unloadTimeout.value);
		closePendingRemoteUpdateNotification();
		collaboratingWorkflowId.value = null;
		currentWriterLock.value = null;
		collaborators.value = [];
	}
	return {
		collaborators,
		currentWriter,
		isCurrentTabWriter,
		isCurrentUserWriter,
		isAnyoneWriting,
		shouldBeReadOnly,
		requestWriteAccess,
		requestWriteAccessForce,
		releaseWriteAccess,
		recordActivity,
		initialize,
		terminate,
		startHeartbeat,
		stopHeartbeat,
		setRefreshCanvasCallback
	};
});
//#endregion
export { useBeforeUnload as n, useCollaborationStore as t };

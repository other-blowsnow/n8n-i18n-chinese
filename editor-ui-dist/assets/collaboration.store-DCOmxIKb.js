import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-DxtWl4Bj.js";
import { Ei as useRoute } from "./src-r-l70KdD.js";
import { Aa as getWorkflowWriteLock, Or as useCanvasStore, Wr as useWorkflowsListStore, cn as useBuilderStore, ol as STORES, r as useUIStore, s as useWorkflowsStore, t as useUsersStore } from "./users.store-BVdi4rdu.js";
import { us as VIEWS, vl as TIME } from "./constants-O8ayp6Ax.js";
import { j as defineStore, r as useRootStore } from "./_baseOrderBy-kQRaOW6n.js";
import { t as usePushConnectionStore } from "./pushConnection.store-C65qYXYL.js";
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
var HEARTBEAT_INTERVAL = 5 * TIME.MINUTE;
var WRITE_LOCK_HEARTBEAT_INTERVAL = 30 * TIME.SECOND;
var LOCK_STATE_POLL_INTERVAL = 20 * TIME.SECOND;
var INACTIVITY_CHECK_INTERVAL = 5 * TIME.SECOND;
var INACTIVITY_TIMEOUT_THRESHOLD = 20 * TIME.SECOND;
const useCollaborationStore = defineStore(STORES.COLLABORATION, () => {
	const pushStore = usePushConnectionStore();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const usersStore = useUsersStore();
	const uiStore = useUIStore();
	const rootStore = useRootStore();
	const builderStore = useBuilderStore();
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
	async function fetchWriteLockState() {
		try {
			const { workflowId } = workflowsStore;
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
	const pollLockState = async () => {
		if (!shouldBeReadOnly.value) {
			stopLockStatePolling();
			return;
		}
		if (!await fetchWriteLockState() && currentWriterLock.value) {
			currentWriterLock.value = null;
			stopLockStatePolling();
		}
	};
	const startLockStatePolling = () => {
		stopLockStatePolling();
		lockStatePollTimer.value = window.setInterval(pollLockState, LOCK_STATE_POLL_INTERVAL);
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
	async function handleWorkflowUpdate() {
		if (isCurrentTabWriter.value || !collaboratingWorkflowId.value) return;
		try {
			const updatedWorkflow = await workflowsListStore.fetchWorkflow(collaboratingWorkflowId.value);
			if (refreshCanvasCallback) refreshCanvasCallback(updatedWorkflow);
			return true;
		} catch (error) {
			console.error("[Collaboration] Error in handleWorkflowUpdate:", error);
			return false;
		}
	}
	function handleWriteLockHolderLeft() {
		if (!currentWriterLock.value) return;
		if (!collaborators.value.some((c) => c.user.id === currentWriterLock.value?.userId)) currentWriterLock.value = null;
	}
	async function initialize() {
		if (pushStoreEventListenerRemovalFn.value) return;
		collaboratingWorkflowId.value = workflowsStore.workflowId;
		const writeLock = await fetchWriteLockState();
		if (writeLock) {
			currentWriterLock.value = writeLock;
			if (isCurrentTabWriter.value) startWriteLockHeartbeat();
			else startLockStatePolling();
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
				} else startLockStatePolling();
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
export { useBeforeUnload as n, useCollaborationStore as t };

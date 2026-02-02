import { C as computed, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Lt as useRoute } from "./src-Cq27d_Gp.js";
import { fa as getWorkflowWriteLock, on as useBuilderStore, r as useUIStore, s as useWorkflowsStore, t as useUsersStore, vr as useCanvasStore, xc as STORES } from "./users.store-qBZsmf9-.js";
import { Hc as TIME, Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import { A as defineStore, r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import { t as usePushConnectionStore } from "./pushConnection.store-Di8YtKvV.js";
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
	const usersStore = useUsersStore();
	const uiStore = useUIStore();
	const rootStore = useRootStore();
	const builderStore = useBuilderStore();
	const { addBeforeUnloadEventBindings, removeBeforeUnloadEventBindings, addBeforeUnloadHandler } = useBeforeUnload({ route: useRoute() });
	const unloadTimeout = ref(null);
	const collaborators = ref([]);
	const currentWriterId = ref(null);
	const lastActivityTime = ref(Date.now());
	const activityCheckInterval = ref(null);
	const heartbeatTimer = ref(null);
	const writeLockHeartbeatTimer = ref(null);
	const lockStatePollTimer = ref(null);
	const pushStoreEventListenerRemovalFn = ref(null);
	let refreshCanvasCallback = null;
	const isCurrentUserWriter = computed(() => {
		return currentWriterId.value === usersStore.currentUserId;
	});
	const currentWriter = computed(() => {
		if (!currentWriterId.value) return null;
		return collaborators.value.find((c) => c.user.id === currentWriterId.value);
	});
	const isAnyoneWriting = computed(() => {
		return currentWriterId.value !== null;
	});
	const shouldBeReadOnly = computed(() => {
		return isAnyoneWriting.value && !isCurrentUserWriter.value;
	});
	async function fetchWriteLockState() {
		try {
			const { workflowId } = workflowsStore;
			if (!workflowsStore.isWorkflowSaved[workflowId]) return null;
			return (await getWorkflowWriteLock(rootStore.restApiContext, workflowId)).userId;
		} catch {
			return null;
		}
	}
	function notifyWorkflowOpened() {
		if (!workflowsStore.isWorkflowSaved[workflowsStore.workflowId]) return;
		pushStore.send({
			type: "workflowOpened",
			workflowId: workflowsStore.workflowId
		});
	}
	function notifyWorkflowClosed() {
		if (!workflowsStore.isWorkflowSaved[workflowsStore.workflowId]) return;
		pushStore.send({
			type: "workflowClosed",
			workflowId: workflowsStore.workflowId
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
		if (!isCurrentUserWriter.value) {
			stopWriteLockHeartbeat();
			return;
		}
		pushStore.send({
			type: "writeAccessHeartbeat",
			workflowId: workflowsStore.workflowId
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
		if (!await fetchWriteLockState() && currentWriterId.value) {
			currentWriterId.value = null;
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
		if (isCurrentUserWriter.value) return true;
		try {
			pushStore.send({
				type: "writeAccessRequested",
				workflowId: workflowsStore.workflowId
			});
		} catch {
			return false;
		}
		return true;
	}
	function releaseWriteAccess() {
		currentWriterId.value = null;
		stopWriteLockHeartbeat();
		try {
			pushStore.send({
				type: "writeAccessReleaseRequested",
				workflowId: workflowsStore.workflowId
			});
			return true;
		} catch {
			return false;
		}
	}
	function checkInactivity() {
		if (!isCurrentUserWriter.value) return;
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
		if (isCurrentUserWriter.value) return;
		try {
			const updatedWorkflow = await workflowsStore.fetchWorkflow(workflowsStore.workflowId);
			if (refreshCanvasCallback) refreshCanvasCallback(updatedWorkflow);
			return true;
		} catch {
			return false;
		}
	}
	function handleWriteLockHolderLeft() {
		if (!currentWriterId.value) return;
		if (!collaborators.value.some((c) => c.user.id === currentWriterId.value)) currentWriterId.value = null;
	}
	async function initialize() {
		if (pushStoreEventListenerRemovalFn.value) return;
		const writeLockUserId = await fetchWriteLockState();
		if (writeLockUserId) {
			currentWriterId.value = writeLockUserId;
			if (isCurrentUserWriter.value) startWriteLockHeartbeat();
			else startLockStatePolling();
		}
		pushStoreEventListenerRemovalFn.value = pushStore.addEventListener((event) => {
			if (event.type === "collaboratorsChanged" && event.data.workflowId === workflowsStore.workflowId) {
				collaborators.value = event.data.collaborators;
				handleWriteLockHolderLeft();
				return;
			}
			if (event.type === "writeAccessAcquired" && event.data.workflowId === workflowsStore.workflowId) {
				currentWriterId.value = event.data.userId;
				if (isCurrentUserWriter.value) {
					recordActivity();
					startWriteLockHeartbeat();
					stopLockStatePolling();
				} else startLockStatePolling();
				return;
			}
			if (event.type === "writeAccessReleased" && event.data.workflowId === workflowsStore.workflowId) {
				currentWriterId.value = null;
				stopWriteLockHeartbeat();
				stopLockStatePolling();
				return;
			}
			if (event.type === "workflowUpdated" && event.data.workflowId === workflowsStore.workflowId) {
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
		if (isCurrentUserWriter.value) releaseWriteAccess();
		pushStore.clearQueue();
		removeBeforeUnloadEventBindings();
		if (unloadTimeout.value) clearTimeout(unloadTimeout.value);
	}
	return {
		collaborators,
		currentWriter,
		isCurrentUserWriter,
		isAnyoneWriting,
		shouldBeReadOnly,
		requestWriteAccess,
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

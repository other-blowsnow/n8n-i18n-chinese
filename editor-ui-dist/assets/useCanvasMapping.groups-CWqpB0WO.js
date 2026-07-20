import "./constants-BaNoJas_.js";
import { Fr as DEFAULT_NODE_SIZE, Hi as createCanvasGroupNodeId, Ii as CANVAS_NODE_GROUP_HANDLE_LEFT, Li as CANVAS_NODE_GROUP_HANDLE_RIGHT, Ri as CANVAS_NODE_GROUP_TYPE, _r as applyOffset, xr as createCanvasConnectionId } from "./workflowDocument.store-DhwnT2JR.js";
//#region src/features/workflows/canvas/stores/canvasNodeGroups.constants.ts
/** Matches node height */
var GROUP_HEADER_HEIGHT = DEFAULT_NODE_SIZE[1];
//#endregion
//#region src/features/workflows/canvas/composables/useCanvasMapping.groups.ts
function readStickyDimensions(node) {
	if (node.type !== "n8n-nodes-base.stickyNote") return void 0;
	const { width, height } = node.parameters ?? {};
	if (typeof width !== "number" || typeof height !== "number") return void 0;
	return {
		width,
		height
	};
}
function resolveNodeDimensions(node, getNodeDisplaySize) {
	const supplied = getNodeDisplaySize?.(node.id);
	const sticky = readStickyDimensions(node);
	return {
		width: supplied?.width ?? sticky?.width ?? DEFAULT_NODE_SIZE[0],
		height: supplied?.height ?? sticky?.height ?? DEFAULT_NODE_SIZE[1]
	};
}
/**
* Collapsed (chip) and expanded frame rects for a group, in unsnapped store
* space. Expanded width is floored at the chip width so a tight cluster never
* shrinks the frame below it.
*/
function computeGroupFrameRects(nodesRect) {
	const x = nodesRect.x - 56;
	const y = nodesRect.y - 40 - GROUP_HEADER_HEIGHT;
	return {
		collapsed: {
			x,
			y,
			width: 400,
			height: GROUP_HEADER_HEIGHT
		},
		expanded: {
			x,
			y,
			width: Math.max(nodesRect.width + 112, 400),
			height: GROUP_HEADER_HEIGHT + nodesRect.height + 40 + 88
		}
	};
}
/**
* Title bar layout (position + width) for the VueFlow group node. Snaps the
* position to the canvas grid, otherwise VueFlow's `snap-to-grid`
* would shift the title bar on the first drag.
*/
function titleBarFromNodesRect(nodesRect, collapsed) {
	const snap = (v) => Math.round(v / 16) * 16;
	const { collapsed: collapsedRect, expanded: expandedRect } = computeGroupFrameRects(nodesRect);
	const rect = collapsed ? collapsedRect : expandedRect;
	return {
		position: {
			x: snap(rect.x),
			y: snap(rect.y)
		},
		width: rect.width
	};
}
/**
* Bounding rect of a group's nodes — used to size and position the title
* bar and frame. Reads from workflow store positions (canonical) rather than
* VueFlow runtime, which can lag, be uninitialized, or be hidden when the
* owning group is collapsed.
*
* `positionOverrides` lets the drag-time sync substitute live positions for
* dragged nodes (whose store position lags until drag-stop).
*/
function computeNodesRectFromStore(nodeIds, getNodeById, getNodeDisplaySize, positionOverrides) {
	const nodes = nodeIds.map((id) => getNodeById(id)).filter((n) => n !== void 0);
	if (nodes.length === 0) return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	let minX = Infinity;
	let minY = Infinity;
	let maxX = -Infinity;
	let maxY = -Infinity;
	for (const node of nodes) {
		const override = positionOverrides?.get(node.id);
		const x = override?.x ?? node.position[0];
		const y = override?.y ?? node.position[1];
		const { width, height } = resolveNodeDimensions(node, getNodeDisplaySize);
		if (x < minX) minX = x;
		if (y < minY) minY = y;
		if (x + width > maxX) maxX = x + width;
		if (y + height > maxY) maxY = y + height;
	}
	return {
		x: minX,
		y: minY,
		width: maxX - minX,
		height: maxY - minY
	};
}
var GROUP_STATUS_PRIORITY = [
	"waiting",
	"running",
	"error",
	"issues",
	"warning"
];
var IDLE_STATUSES = [
	"new",
	"unknown",
	"canceled"
];
/**
* Classify a single member for the group rollup by this priority:
* waiting > running > error > issues > warning > success > idle.
* Validation issues are kept distinct from execution errors.
* Other is an active-but-unhandled status that must block a misleading success.
* Idle statuses return undefined (they neither paint nor veto).
*/
function classifyNodeForGroup(snapshot) {
	const { status } = snapshot;
	if (snapshot.waiting || status === "waiting") return "waiting";
	if (snapshot.running || snapshot.waitingForNext) return "running";
	if (snapshot.hasExecutionError) return "error";
	if (snapshot.hasValidationError) return "issues";
	if (snapshot.dirty) return "warning";
	if (status === "success") return "success";
	if (status === void 0 || IDLE_STATUSES.includes(status)) return void 0;
	return "other";
}
/** Reduce a group's per-node state into one dominant status. */
function aggregateGroupExecution(nodeIds, getNodeExecutionSnapshot) {
	const seen = /* @__PURE__ */ new Set();
	for (const id of nodeIds) seen.add(classifyNodeForGroup(getNodeExecutionSnapshot(id)));
	for (const status of GROUP_STATUS_PRIORITY) if (seen.has(status)) return status;
	return seen.has("success") && !seen.has("other") ? "success" : void 0;
}
/**
* Map each workflow group to a `canvas-node-group` VueFlow node (title bar + frame).
* Group nodes themselves are mapped separately by `mappedNodes`.
*/
function mapGroupsToVueFlowNodes({ allGroups, getNodeById, getNodeDisplaySize, getGroupVisualOffset, isGroupCollapsed, readOnly, getNodeExecutionSnapshot }) {
	const out = [];
	for (const group of allGroups) {
		if (!group.nodeIds.some((id) => getNodeById(id) !== void 0)) continue;
		const nodesRect = computeNodesRectFromStore(group.nodeIds, getNodeById, getNodeDisplaySize);
		const collapsed = isGroupCollapsed(group.id);
		const data = {
			group,
			nodesRect,
			isCollapsed: collapsed,
			executionStatus: aggregateGroupExecution(group.nodeIds, getNodeExecutionSnapshot)
		};
		const id = createCanvasGroupNodeId(group.id);
		const titleBar = titleBarFromNodesRect(nodesRect, collapsed);
		const offset = getGroupVisualOffset?.(id) ?? {
			x: 0,
			y: 0
		};
		out.push({
			id,
			type: CANVAS_NODE_GROUP_TYPE,
			position: applyOffset(titleBar.position, offset),
			width: titleBar.width,
			height: GROUP_HEADER_HEIGHT,
			draggable: !readOnly,
			selectable: collapsed,
			connectable: false,
			zIndex: -1,
			data
		});
	}
	return out;
}
/**
* Reverse index: hidden node id → its collapsed group.
*/
function buildCollapsedGroupByNodeId(allGroups, isGroupCollapsed) {
	const result = /* @__PURE__ */ new Map();
	for (const group of allGroups) {
		if (!isGroupCollapsed(group.id)) continue;
		for (const nodeId of group.nodeIds) result.set(nodeId, group);
	}
	return result;
}
/**
* Visually remap collapsed-group connections to the group header handles
* (left / right) so VueFlow can draw them while the member nodes are hidden.
* Connections fully inside a collapsed group are dropped.
* External-only connections pass through unchanged.
*
* Edges that remap to the same endpoints (e.g. two grouped nodes feeding
* the same external port) are merged into one, since VueFlow's behavior on
* duplicate edge ids is undefined. The merged edge keeps every underlying
* connection's endpoints in `data.canonicals` so consumers can resolve or
* aggregate over all of them.
*/
function remapCollapsedGroupConnections(connections, collapsedGroupByNodeId) {
	if (collapsedGroupByNodeId.size === 0) return connections;
	const result = [];
	const emittedById = /* @__PURE__ */ new Map();
	for (const conn of connections) {
		const sourceGroup = collapsedGroupByNodeId.get(conn.source);
		const targetGroup = collapsedGroupByNodeId.get(conn.target);
		if (sourceGroup && targetGroup && sourceGroup.id === targetGroup.id) continue;
		if (!sourceGroup && !targetGroup) {
			result.push(conn);
			continue;
		}
		const remapped = {
			source: sourceGroup ? createCanvasGroupNodeId(sourceGroup.id) : conn.source,
			sourceHandle: sourceGroup ? CANVAS_NODE_GROUP_HANDLE_RIGHT : conn.sourceHandle,
			target: targetGroup ? createCanvasGroupNodeId(targetGroup.id) : conn.target,
			targetHandle: targetGroup ? CANVAS_NODE_GROUP_HANDLE_LEFT : conn.targetHandle
		};
		const id = createCanvasConnectionId(remapped);
		const canonical = {
			source: conn.source,
			target: conn.target,
			sourceHandle: conn.sourceHandle,
			targetHandle: conn.targetHandle
		};
		const existing = emittedById.get(id);
		if (existing) {
			existing.data?.canonicals?.push(canonical);
			continue;
		}
		const emitted = {
			...conn,
			id,
			...remapped,
			data: conn.data ? {
				...conn.data,
				canonicals: [canonical]
			} : void 0
		};
		emittedById.set(id, emitted);
		result.push(emitted);
	}
	return result;
}
//#endregion
export { mapGroupsToVueFlowNodes as a, GROUP_HEADER_HEIGHT as c, computeNodesRectFromStore as i, buildCollapsedGroupByNodeId as n, remapCollapsedGroupConnections as o, computeGroupFrameRects as r, titleBarFromNodesRect as s, aggregateGroupExecution as t };

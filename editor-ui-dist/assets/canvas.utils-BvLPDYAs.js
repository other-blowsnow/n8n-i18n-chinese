import { $r as CanvasConnectionMode, Yr as isValidNodeConnectionType, qr as isValidCanvasConnectionMode } from "./users.store-qBZsmf9-.js";
import { $a as NodeConnectionTypes, G as NODE_MIN_INPUT_ITEMS_COUNT } from "./constants-Cyrg9Nbl.js";
function mapLegacyConnectionsToCanvasConnections(legacyConnections, nodes) {
	const mappedConnections = [];
	Object.keys(legacyConnections).forEach((fromNodeName) => {
		const fromId = nodes.find((node) => node.name === fromNodeName)?.id ?? "";
		Object.keys(legacyConnections[fromNodeName]).forEach((fromConnectionType) => {
			legacyConnections[fromNodeName][fromConnectionType]?.forEach((toPorts, fromIndex) => {
				toPorts?.forEach((toPort) => {
					const toNodeName = toPort.node;
					const toId = nodes.find((node) => node.name === toNodeName)?.id ?? "";
					const toConnectionType = toPort.type;
					const toIndex = toPort.index;
					const sourceHandle = createCanvasConnectionHandleString({
						mode: CanvasConnectionMode.Output,
						type: fromConnectionType,
						index: fromIndex
					});
					const targetHandle = createCanvasConnectionHandleString({
						mode: CanvasConnectionMode.Input,
						type: toConnectionType,
						index: toIndex
					});
					const connectionId = createCanvasConnectionId({
						source: fromId,
						sourceHandle,
						target: toId,
						targetHandle
					});
					if (fromId && toId) mappedConnections.push({
						id: connectionId,
						source: fromId,
						target: toId,
						sourceHandle,
						targetHandle,
						data: {
							source: {
								node: fromNodeName,
								index: fromIndex,
								type: fromConnectionType
							},
							target: {
								node: toNodeName,
								index: toIndex,
								type: toConnectionType
							}
						}
					});
				});
			});
		});
	});
	return mappedConnections;
}
function mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, legacyConnection) {
	return {
		source: sourceNode.id,
		sourceHandle: createCanvasConnectionHandleString({
			mode: CanvasConnectionMode.Output,
			type: legacyConnection[0].type,
			index: legacyConnection[0].index
		}),
		target: targetNode.id,
		targetHandle: createCanvasConnectionHandleString({
			mode: CanvasConnectionMode.Input,
			type: legacyConnection[1].type,
			index: legacyConnection[1].index
		})
	};
}
function parseCanvasConnectionHandleString(handle) {
	const [mode, type, index] = (handle ?? "").split("/");
	const resolvedMode = isValidCanvasConnectionMode(mode) ? mode : CanvasConnectionMode.Output;
	const resolvedType = isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main;
	let resolvedIndex = parseInt(index, 10);
	if (isNaN(resolvedIndex)) resolvedIndex = 0;
	return {
		mode: resolvedMode,
		type: resolvedType,
		index: resolvedIndex
	};
}
function createCanvasConnectionHandleString({ mode, type = NodeConnectionTypes.Main, index = 0 }) {
	return `${mode}/${type}/${index}`;
}
function createCanvasConnectionId(connection) {
	return `[${connection.source}/${connection.sourceHandle}][${connection.target}/${connection.targetHandle}]`;
}
function mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection) {
	const sourceNodeName = sourceNode?.name ?? "";
	const { type: sourceType, index: sourceIndex } = parseCanvasConnectionHandleString(connection.sourceHandle);
	const targetNodeName = targetNode?.name ?? "";
	const { type: targetType, index: targetIndex } = parseCanvasConnectionHandleString(connection.targetHandle);
	return [{
		node: sourceNodeName,
		type: sourceType,
		index: sourceIndex
	}, {
		node: targetNodeName,
		type: targetType,
		index: targetIndex
	}];
}
function mapLegacyEndpointsToCanvasConnectionPort(endpoints, endpointNames = []) {
	if (typeof endpoints === "string") {
		console.warn("Node endpoints have not been evaluated", endpoints);
		return [];
	}
	return endpoints.map((endpoint, endpointIndex) => {
		const typeValue = typeof endpoint === "string" ? endpoint : endpoint.type;
		const type = isValidNodeConnectionType(typeValue) ? typeValue : NodeConnectionTypes.Main;
		const label = typeof endpoint === "string" ? endpointNames[endpointIndex] : endpoint.displayName;
		const index = endpoints.slice(0, endpointIndex + 1).filter((e) => (typeof e === "string" ? e : e.type) === type).length - 1;
		const required = typeof endpoint === "string" ? false : endpoint.required;
		const maxConnections = typeof endpoint === "string" ? void 0 : endpoint.maxConnections;
		return {
			type,
			index,
			label,
			...maxConnections ? { maxConnections } : {},
			...required ? { required } : {}
		};
	});
}
function checkOverlap(node1, node2) {
	return !(node1.x + node1.width <= node2.x || node2.x + node2.width <= node1.x || node1.y + node1.height <= node2.y || node2.y + node2.height <= node1.y);
}
function insertSpacersBetweenEndpoints(endpoints, requiredEndpointsCount = 0) {
	const endpointsWithSpacers = [...endpoints];
	const optionalNonMainInputsCount = endpointsWithSpacers.length - requiredEndpointsCount;
	const spacerCount = 4 - requiredEndpointsCount - optionalNonMainInputsCount;
	if (endpointsWithSpacers.length < 4) for (let i = 0; i < spacerCount; i++) endpointsWithSpacers.splice(requiredEndpointsCount + i, 0, null);
	return endpointsWithSpacers;
}
function shouldIgnoreCanvasShortcut(el) {
	return ["INPUT", "TEXTAREA"].includes(el.tagName) || el.closest("[contenteditable]") !== null || el.closest(".ignore-key-press-canvas") !== null;
}
export { mapLegacyConnectionToCanvasConnection as a, parseCanvasConnectionHandleString as c, mapCanvasConnectionToLegacyConnection as i, shouldIgnoreCanvasShortcut as l, createCanvasConnectionHandleString as n, mapLegacyConnectionsToCanvasConnections as o, insertSpacersBetweenEndpoints as r, mapLegacyEndpointsToCanvasConnectionPort as s, checkOverlap as t };

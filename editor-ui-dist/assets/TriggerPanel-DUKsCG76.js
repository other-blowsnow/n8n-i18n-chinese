import { aZ as hasOwn, bm as reactive, bv as isObject, b9 as _export_sfc, d as defineComponent, bb as useNamespace, bi as inject, Y as renderSlot, aY as h, bn as provide, r as ref, be as removeClass, bc as addClass, a9 as resolveComponent, b4 as withDirectives, b5 as vShow, h as createElementBlock, g as openBlock, j as createBaseVNode, i as createVNode, e as createBlock, f as createCommentVNode, w as withCtx, c0 as resolveDynamicComponent, n as normalizeClass, B as withModifiers, ap as normalizeStyle, F as Fragment, A as renderList, iv as loading_default, bp as ElIcon, en as ElCheckbox, bs as _CollapseTransition, a8 as watch, iw as caret_right_default, ix as isFunction, bq as isString, bo as getCurrentInstance, Z as nextTick, cY as shallowRef, o as onMounted, iy as onUpdated, iz as useEventListener, b7 as EVENT_CODE, t as toDisplayString, bu as iconPropType, iA as useLocale, x as computed, iB as formItemContextKey, _ as _export_sfc$1, a2 as useWorkflowsStore, ae as useNodeTypesStore, dR as usePostHog, dX as NDV_UI_OVERHAUL_EXPERIMENT, cc as NodeConnectionTypes, X as onBeforeUnmount, k as unref, aa as N8nTooltip, cx as NodeIcon, l as createTextVNode, iC as convertToDisplayDateComponents, cL as resolveDirective, dv as InfoTip, c as useI18n, p as N8nText, cs as getDefaultExportFromCjs, iD as requireCapitalize, iE as parseAiContent, N as N8nIcon, O as N8nRadioButtons, iF as _sfc_main$b, iG as ViewSubExecution, cr as formatTokenUsageCount, a_ as useNDVStore, fa as storeToRefs, iH as useNodeDirtiness, iI as useNodeType, cj as usePinnedData, iJ as CanvasNodeDirtiness, cM as RunData, cJ as createSlots, cN as NDVEmptyState, cO as waitingNodeTooltip, di as _sfc_main$d, ac as I18nT, em as _sfc_main$e, al as useTelemetry, Q as useUIStore, b as useRouter, aA as useWorkflowHelpers, iK as isTriggerPanelObject, fY as getTriggerNodeServiceName, ch as CHAT_TRIGGER_NODE_TYPE, iL as WEBHOOK_NODE_TYPE, iM as FORM_TRIGGER_NODE_TYPE, fQ as CopyInput, q as N8nButton, m as N8nHeading, C as N8nLink, aq as createEventBus, ba as Transition, V as VIEWS, ak as WORKFLOW_SETTINGS_MODAL_KEY } from "./index-Bwe5xApO.js";
import { R as RunDataAi$1, g as getConsumedTokens, c as createAiData, a as getTreeNodeData, b as getReferencedData } from "./RunDataParsedAiContent-BYvYV_ym.js";
import { _ as _sfc_main$c } from "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-Bs4tC6Bp.js";
import { u as useExecutionData } from "./NodeView-DWTwh2nT.js";
import { N as N8nInfoAccordion } from "./InfoAccordion-1yX6kgKc.js";
const NODE_KEY = "$treeNodeId";
const markNodeData = function(node, data) {
  if (!data || data[NODE_KEY])
    return;
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};
const getNodeKey = function(key, data) {
  if (!key)
    return data[NODE_KEY];
  return data[key];
};
const handleCurrentChange = (store, emit, setCurrent) => {
  const preCurrentNode = store.value.currentNode;
  setCurrent();
  const currentNode = store.value.currentNode;
  if (preCurrentNode === currentNode)
    return;
  emit("current-change", currentNode ? currentNode.data : null, currentNode);
};
const getChildState = (node) => {
  let all = true;
  let none = true;
  let allWithoutDisable = true;
  for (let i = 0, j = node.length; i < j; i++) {
    const n = node[i];
    if (n.checked !== true || n.indeterminate) {
      all = false;
      if (!n.disabled) {
        allWithoutDisable = false;
      }
    }
    if (n.checked !== false || n.indeterminate) {
      none = false;
    }
  }
  return { all, none, allWithoutDisable, half: !all && !none };
};
const reInitChecked = function(node) {
  if (node.childNodes.length === 0 || node.loading)
    return;
  const { all, none, half } = getChildState(node.childNodes);
  if (all) {
    node.checked = true;
    node.indeterminate = false;
  } else if (half) {
    node.checked = false;
    node.indeterminate = true;
  } else if (none) {
    node.checked = false;
    node.indeterminate = false;
  }
  const parent = node.parent;
  if (!parent || parent.level === 0)
    return;
  if (!node.store.checkStrictly) {
    reInitChecked(parent);
  }
};
const getPropertyFromData = function(node, prop) {
  const props = node.store.props;
  const data = node.data || {};
  const config = props[prop];
  if (typeof config === "function") {
    return config(data, node);
  } else if (typeof config === "string") {
    return data[config];
  } else if (typeof config === "undefined") {
    const dataProp = data[prop];
    return dataProp === void 0 ? "" : dataProp;
  }
};
let nodeIdSeed = 0;
class Node {
  constructor(options) {
    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.indeterminate = false;
    this.data = null;
    this.expanded = false;
    this.parent = null;
    this.visible = true;
    this.isCurrent = false;
    this.canFocus = false;
    for (const name in options) {
      if (hasOwn(options, name)) {
        this[name] = options[name];
      }
    }
    this.level = 0;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;
    if (this.parent) {
      this.level = this.parent.level + 1;
    }
  }
  initialize() {
    const store = this.store;
    if (!store) {
      throw new Error("[Node]store is required!");
    }
    store.registerNode(this);
    const props = store.props;
    if (props && typeof props.isLeaf !== "undefined") {
      const isLeaf = getPropertyFromData(this, "isLeaf");
      if (typeof isLeaf === "boolean") {
        this.isLeafByUser = isLeaf;
      }
    }
    if (store.lazy !== true && this.data) {
      this.setData(this.data);
      if (store.defaultExpandAll) {
        this.expanded = true;
        this.canFocus = true;
      }
    } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
      this.expand();
    }
    if (!Array.isArray(this.data)) {
      markNodeData(this, this.data);
    }
    if (!this.data)
      return;
    const defaultExpandedKeys = store.defaultExpandedKeys;
    const key = store.key;
    if (key && defaultExpandedKeys && defaultExpandedKeys.includes(this.key)) {
      this.expand(null, store.autoExpandParent);
    }
    if (key && store.currentNodeKey !== void 0 && this.key === store.currentNodeKey) {
      store.currentNode = this;
      store.currentNode.isCurrent = true;
    }
    if (store.lazy) {
      store._initDefaultCheckedNode(this);
    }
    this.updateLeafState();
    if (this.parent && (this.level === 1 || this.parent.expanded === true))
      this.canFocus = true;
  }
  setData(data) {
    if (!Array.isArray(data)) {
      markNodeData(this, data);
    }
    this.data = data;
    this.childNodes = [];
    let children;
    if (this.level === 0 && Array.isArray(this.data)) {
      children = this.data;
    } else {
      children = getPropertyFromData(this, "children") || [];
    }
    for (let i = 0, j = children.length; i < j; i++) {
      this.insertChild({ data: children[i] });
    }
  }
  get label() {
    return getPropertyFromData(this, "label");
  }
  get key() {
    const nodeKey = this.store.key;
    if (this.data)
      return this.data[nodeKey];
    return null;
  }
  get disabled() {
    return getPropertyFromData(this, "disabled");
  }
  get nextSibling() {
    const parent = this.parent;
    if (parent) {
      const index = parent.childNodes.indexOf(this);
      if (index > -1) {
        return parent.childNodes[index + 1];
      }
    }
    return null;
  }
  get previousSibling() {
    const parent = this.parent;
    if (parent) {
      const index = parent.childNodes.indexOf(this);
      if (index > -1) {
        return index > 0 ? parent.childNodes[index - 1] : null;
      }
    }
    return null;
  }
  contains(target, deep = true) {
    return (this.childNodes || []).some((child) => child === target || deep && child.contains(target));
  }
  remove() {
    const parent = this.parent;
    if (parent) {
      parent.removeChild(this);
    }
  }
  insertChild(child, index, batch) {
    if (!child)
      throw new Error("InsertChild error: child is required.");
    if (!(child instanceof Node)) {
      if (!batch) {
        const children = this.getChildren(true);
        if (!children.includes(child.data)) {
          if (typeof index === "undefined" || index < 0) {
            children.push(child.data);
          } else {
            children.splice(index, 0, child.data);
          }
        }
      }
      Object.assign(child, {
        parent: this,
        store: this.store
      });
      child = reactive(new Node(child));
      if (child instanceof Node) {
        child.initialize();
      }
    }
    child.level = this.level + 1;
    if (typeof index === "undefined" || index < 0) {
      this.childNodes.push(child);
    } else {
      this.childNodes.splice(index, 0, child);
    }
    this.updateLeafState();
  }
  insertBefore(child, ref2) {
    let index;
    if (ref2) {
      index = this.childNodes.indexOf(ref2);
    }
    this.insertChild(child, index);
  }
  insertAfter(child, ref2) {
    let index;
    if (ref2) {
      index = this.childNodes.indexOf(ref2);
      if (index !== -1)
        index += 1;
    }
    this.insertChild(child, index);
  }
  removeChild(child) {
    const children = this.getChildren() || [];
    const dataIndex = children.indexOf(child.data);
    if (dataIndex > -1) {
      children.splice(dataIndex, 1);
    }
    const index = this.childNodes.indexOf(child);
    if (index > -1) {
      this.store && this.store.deregisterNode(child);
      child.parent = null;
      this.childNodes.splice(index, 1);
    }
    this.updateLeafState();
  }
  removeChildByData(data) {
    let targetNode = null;
    for (let i = 0; i < this.childNodes.length; i++) {
      if (this.childNodes[i].data === data) {
        targetNode = this.childNodes[i];
        break;
      }
    }
    if (targetNode) {
      this.removeChild(targetNode);
    }
  }
  expand(callback, expandParent) {
    const done = () => {
      if (expandParent) {
        let parent = this.parent;
        while (parent.level > 0) {
          parent.expanded = true;
          parent = parent.parent;
        }
      }
      this.expanded = true;
      if (callback)
        callback();
      this.childNodes.forEach((item) => {
        item.canFocus = true;
      });
    };
    if (this.shouldLoadData()) {
      this.loadData((data) => {
        if (Array.isArray(data)) {
          if (this.checked) {
            this.setChecked(true, true);
          } else if (!this.store.checkStrictly) {
            reInitChecked(this);
          }
          done();
        }
      });
    } else {
      done();
    }
  }
  doCreateChildren(array, defaultProps = {}) {
    array.forEach((item) => {
      this.insertChild(Object.assign({ data: item }, defaultProps), void 0, true);
    });
  }
  collapse() {
    this.expanded = false;
    this.childNodes.forEach((item) => {
      item.canFocus = false;
    });
  }
  shouldLoadData() {
    return this.store.lazy === true && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== "undefined") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const childNodes = this.childNodes;
    if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
      this.isLeaf = !childNodes || childNodes.length === 0;
      return;
    }
    this.isLeaf = false;
  }
  setChecked(value, deep, recursion, passValue) {
    this.indeterminate = value === "half";
    this.checked = value === true;
    if (this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all, allWithoutDisable } = getChildState(this.childNodes);
      if (!this.isLeaf && !all && allWithoutDisable) {
        this.checked = false;
        value = false;
      }
      const handleDescendants = () => {
        if (deep) {
          const childNodes = this.childNodes;
          for (let i = 0, j = childNodes.length; i < j; i++) {
            const child = childNodes[i];
            passValue = passValue || value !== false;
            const isCheck = child.disabled ? child.checked : passValue;
            child.setChecked(isCheck, deep, true, passValue);
          }
          const { half, all: all2 } = getChildState(childNodes);
          if (!all2) {
            this.checked = all2;
            this.indeterminate = half;
          }
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          handleDescendants();
          reInitChecked(this);
        }, {
          checked: value !== false
        });
        return;
      } else {
        handleDescendants();
      }
    }
    const parent = this.parent;
    if (!parent || parent.level === 0)
      return;
    if (!recursion) {
      reInitChecked(parent);
    }
  }
  getChildren(forceInit = false) {
    if (this.level === 0)
      return this.data;
    const data = this.data;
    if (!data)
      return null;
    const props = this.store.props;
    let children = "children";
    if (props) {
      children = props.children || "children";
    }
    if (data[children] === void 0) {
      data[children] = null;
    }
    if (forceInit && !data[children]) {
      data[children] = [];
    }
    return data[children];
  }
  updateChildren() {
    const newData = this.getChildren() || [];
    const oldData = this.childNodes.map((node) => node.data);
    const newDataMap = {};
    const newNodes = [];
    newData.forEach((item, index) => {
      const key = item[NODE_KEY];
      const isNodeExists = !!key && oldData.findIndex((data) => data[NODE_KEY] === key) >= 0;
      if (isNodeExists) {
        newDataMap[key] = { index, data: item };
      } else {
        newNodes.push({ index, data: item });
      }
    });
    if (!this.store.lazy) {
      oldData.forEach((item) => {
        if (!newDataMap[item[NODE_KEY]])
          this.removeChildByData(item);
      });
    }
    newNodes.forEach(({ index, data }) => {
      this.insertChild({ data }, index);
    });
    this.updateLeafState();
  }
  loadData(callback, defaultProps = {}) {
    if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(defaultProps).length)) {
      this.loading = true;
      const resolve = (children) => {
        this.childNodes = [];
        this.doCreateChildren(children, defaultProps);
        this.loaded = true;
        this.loading = false;
        this.updateLeafState();
        if (callback) {
          callback.call(this, children);
        }
      };
      this.store.load(this, resolve);
    } else {
      if (callback) {
        callback.call(this);
      }
    }
  }
}
class TreeStore {
  constructor(options) {
    this.currentNode = null;
    this.currentNodeKey = null;
    for (const option in options) {
      if (hasOwn(options, option)) {
        this[option] = options[option];
      }
    }
    this.nodesMap = {};
  }
  initialize() {
    this.root = new Node({
      data: this.data,
      store: this
    });
    this.root.initialize();
    if (this.lazy && this.load) {
      const loadFn = this.load;
      loadFn(this.root, (data) => {
        this.root.doCreateChildren(data);
        this._initDefaultCheckedNodes();
      });
    } else {
      this._initDefaultCheckedNodes();
    }
  }
  filter(value) {
    const filterNodeMethod = this.filterNodeMethod;
    const lazy = this.lazy;
    const traverse = function(node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes;
      childNodes.forEach((child) => {
        child.visible = filterNodeMethod.call(child, value, child.data, child);
        traverse(child);
      });
      if (!node.visible && childNodes.length) {
        let allHidden = true;
        allHidden = !childNodes.some((child) => child.visible);
        if (node.root) {
          node.root.visible = allHidden === false;
        } else {
          node.visible = allHidden === false;
        }
      }
      if (!value)
        return;
      if (node.visible && !node.isLeaf && !lazy)
        node.expand();
    };
    traverse(this);
  }
  setData(newVal) {
    const instanceChanged = newVal !== this.root.data;
    if (instanceChanged) {
      this.root.setData(newVal);
      this._initDefaultCheckedNodes();
    } else {
      this.root.updateChildren();
    }
  }
  getNode(data) {
    if (data instanceof Node)
      return data;
    const key = isObject(data) ? getNodeKey(this.key, data) : data;
    return this.nodesMap[key] || null;
  }
  insertBefore(data, refData) {
    const refNode = this.getNode(refData);
    refNode.parent.insertBefore({ data }, refNode);
  }
  insertAfter(data, refData) {
    const refNode = this.getNode(refData);
    refNode.parent.insertAfter({ data }, refNode);
  }
  remove(data) {
    const node = this.getNode(data);
    if (node && node.parent) {
      if (node === this.currentNode) {
        this.currentNode = null;
      }
      node.parent.removeChild(node);
    }
  }
  append(data, parentData) {
    const parentNode = parentData ? this.getNode(parentData) : this.root;
    if (parentNode) {
      parentNode.insertChild({ data });
    }
  }
  _initDefaultCheckedNodes() {
    const defaultCheckedKeys = this.defaultCheckedKeys || [];
    const nodesMap = this.nodesMap;
    defaultCheckedKeys.forEach((checkedKey) => {
      const node = nodesMap[checkedKey];
      if (node) {
        node.setChecked(true, !this.checkStrictly);
      }
    });
  }
  _initDefaultCheckedNode(node) {
    const defaultCheckedKeys = this.defaultCheckedKeys || [];
    if (defaultCheckedKeys.includes(node.key)) {
      node.setChecked(true, !this.checkStrictly);
    }
  }
  setDefaultCheckedKey(newVal) {
    if (newVal !== this.defaultCheckedKeys) {
      this.defaultCheckedKeys = newVal;
      this._initDefaultCheckedNodes();
    }
  }
  registerNode(node) {
    const key = this.key;
    if (!node || !node.data)
      return;
    if (!key) {
      this.nodesMap[node.id] = node;
    } else {
      const nodeKey = node.key;
      if (nodeKey !== void 0)
        this.nodesMap[node.key] = node;
    }
  }
  deregisterNode(node) {
    const key = this.key;
    if (!key || !node || !node.data)
      return;
    node.childNodes.forEach((child) => {
      this.deregisterNode(child);
    });
    delete this.nodesMap[node.key];
  }
  getCheckedNodes(leafOnly = false, includeHalfChecked = false) {
    const checkedNodes = [];
    const traverse = function(node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes;
      childNodes.forEach((child) => {
        if ((child.checked || includeHalfChecked && child.indeterminate) && (!leafOnly || leafOnly && child.isLeaf)) {
          checkedNodes.push(child.data);
        }
        traverse(child);
      });
    };
    traverse(this);
    return checkedNodes;
  }
  getCheckedKeys(leafOnly = false) {
    return this.getCheckedNodes(leafOnly).map((data) => (data || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const nodes = [];
    const traverse = function(node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes;
      childNodes.forEach((child) => {
        if (child.indeterminate) {
          nodes.push(child.data);
        }
        traverse(child);
      });
    };
    traverse(this);
    return nodes;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((data) => (data || {})[this.key]);
  }
  _getAllNodes() {
    const allNodes = [];
    const nodesMap = this.nodesMap;
    for (const nodeKey in nodesMap) {
      if (hasOwn(nodesMap, nodeKey)) {
        allNodes.push(nodesMap[nodeKey]);
      }
    }
    return allNodes;
  }
  updateChildren(key, data) {
    const node = this.nodesMap[key];
    if (!node)
      return;
    const childNodes = node.childNodes;
    for (let i = childNodes.length - 1; i >= 0; i--) {
      const child = childNodes[i];
      this.remove(child.data);
    }
    for (let i = 0, j = data.length; i < j; i++) {
      const child = data[i];
      this.append(child, node.data);
    }
  }
  _setCheckedKeys(key, leafOnly = false, checkedKeys) {
    const allNodes = this._getAllNodes().sort((a, b) => b.level - a.level);
    const cache = /* @__PURE__ */ Object.create(null);
    const keys = Object.keys(checkedKeys);
    allNodes.forEach((node) => node.setChecked(false, false));
    for (let i = 0, j = allNodes.length; i < j; i++) {
      const node = allNodes[i];
      const nodeKey = node.data[key].toString();
      const checked = keys.includes(nodeKey);
      if (!checked) {
        if (node.checked && !cache[nodeKey]) {
          node.setChecked(false, false);
        }
        continue;
      }
      let parent = node.parent;
      while (parent && parent.level > 0) {
        cache[parent.data[key]] = true;
        parent = parent.parent;
      }
      if (node.isLeaf || this.checkStrictly) {
        node.setChecked(true, false);
        continue;
      }
      node.setChecked(true, true);
      if (leafOnly) {
        node.setChecked(false, false);
        const traverse = function(node2) {
          const childNodes = node2.childNodes;
          childNodes.forEach((child) => {
            if (!child.isLeaf) {
              child.setChecked(false, false);
            }
            traverse(child);
          });
        };
        traverse(node);
      }
    }
  }
  setCheckedNodes(array, leafOnly = false) {
    const key = this.key;
    const checkedKeys = {};
    array.forEach((item) => {
      checkedKeys[(item || {})[key]] = true;
    });
    this._setCheckedKeys(key, leafOnly, checkedKeys);
  }
  setCheckedKeys(keys, leafOnly = false) {
    this.defaultCheckedKeys = keys;
    const key = this.key;
    const checkedKeys = {};
    keys.forEach((key2) => {
      checkedKeys[key2] = true;
    });
    this._setCheckedKeys(key, leafOnly, checkedKeys);
  }
  setDefaultExpandedKeys(keys) {
    keys = keys || [];
    this.defaultExpandedKeys = keys;
    keys.forEach((key) => {
      const node = this.getNode(key);
      if (node)
        node.expand(null, this.autoExpandParent);
    });
  }
  setChecked(data, checked, deep) {
    const node = this.getNode(data);
    if (node) {
      node.setChecked(!!checked, deep);
    }
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(currentNode) {
    const prevCurrentNode = this.currentNode;
    if (prevCurrentNode) {
      prevCurrentNode.isCurrent = false;
    }
    this.currentNode = currentNode;
    this.currentNode.isCurrent = true;
  }
  setUserCurrentNode(node, shouldAutoExpandParent = true) {
    const key = node[this.key];
    const currNode = this.nodesMap[key];
    this.setCurrentNode(currNode);
    if (shouldAutoExpandParent && this.currentNode.level > 1) {
      this.currentNode.parent.expand(null, true);
    }
  }
  setCurrentNodeKey(key, shouldAutoExpandParent = true) {
    if (key === null || key === void 0) {
      this.currentNode && (this.currentNode.isCurrent = false);
      this.currentNode = null;
      return;
    }
    const node = this.getNode(key);
    if (node) {
      this.setCurrentNode(node);
      if (shouldAutoExpandParent && this.currentNode.level > 1) {
        this.currentNode.parent.expand(null, true);
      }
    }
  }
}
const _sfc_main$a = defineComponent({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: true
    },
    renderContent: Function
  },
  setup(props) {
    const ns = useNamespace("tree");
    const nodeInstance = inject("NodeInstance");
    const tree2 = inject("RootTree");
    return () => {
      const node = props.node;
      const { data, store } = node;
      return props.renderContent ? props.renderContent(h, { _self: nodeInstance, node, data, store }) : renderSlot(tree2.ctx.slots, "default", { node, data }, () => [
        h("span", { class: ns.be("node", "label") }, [node.label])
      ]);
    };
  }
});
var NodeContent = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);
function useNodeExpandEventBroadcast(props) {
  const parentNodeMap = inject("TreeNodeMap", null);
  const currentNodeMap = {
    treeNodeExpand: (node) => {
      if (props.node !== node) {
        props.node.collapse();
      }
    },
    children: []
  };
  if (parentNodeMap) {
    parentNodeMap.children.push(currentNodeMap);
  }
  provide("TreeNodeMap", currentNodeMap);
  return {
    broadcastExpanded: (node) => {
      if (!props.accordion)
        return;
      for (const childNode of currentNodeMap.children) {
        childNode.treeNodeExpand(node);
      }
    }
  };
}
const dragEventsKey = Symbol("dragEvents");
function useDragNodeHandler({ props, ctx, el$, dropIndicator$, store }) {
  const ns = useNamespace("tree");
  const dragState = ref({
    showDropIndicator: false,
    draggingNode: null,
    dropNode: null,
    allowDrop: true,
    dropType: null
  });
  const treeNodeDragStart = ({ event, treeNode: treeNode2 }) => {
    if (typeof props.allowDrag === "function" && !props.allowDrag(treeNode2.node)) {
      event.preventDefault();
      return false;
    }
    event.dataTransfer.effectAllowed = "move";
    try {
      event.dataTransfer.setData("text/plain", "");
    } catch (e) {
    }
    dragState.value.draggingNode = treeNode2;
    ctx.emit("node-drag-start", treeNode2.node, event);
  };
  const treeNodeDragOver = ({ event, treeNode: treeNode2 }) => {
    const dropNode = treeNode2;
    const oldDropNode = dragState.value.dropNode;
    if (oldDropNode && oldDropNode.node.id !== dropNode.node.id) {
      removeClass(oldDropNode.$el, ns.is("drop-inner"));
    }
    const draggingNode = dragState.value.draggingNode;
    if (!draggingNode || !dropNode)
      return;
    let dropPrev = true;
    let dropInner = true;
    let dropNext = true;
    let userAllowDropInner = true;
    if (typeof props.allowDrop === "function") {
      dropPrev = props.allowDrop(draggingNode.node, dropNode.node, "prev");
      userAllowDropInner = dropInner = props.allowDrop(draggingNode.node, dropNode.node, "inner");
      dropNext = props.allowDrop(draggingNode.node, dropNode.node, "next");
    }
    event.dataTransfer.dropEffect = dropInner || dropPrev || dropNext ? "move" : "none";
    if ((dropPrev || dropInner || dropNext) && (oldDropNode == null ? void 0 : oldDropNode.node.id) !== dropNode.node.id) {
      if (oldDropNode) {
        ctx.emit("node-drag-leave", draggingNode.node, oldDropNode.node, event);
      }
      ctx.emit("node-drag-enter", draggingNode.node, dropNode.node, event);
    }
    if (dropPrev || dropInner || dropNext) {
      dragState.value.dropNode = dropNode;
    }
    if (dropNode.node.nextSibling === draggingNode.node) {
      dropNext = false;
    }
    if (dropNode.node.previousSibling === draggingNode.node) {
      dropPrev = false;
    }
    if (dropNode.node.contains(draggingNode.node, false)) {
      dropInner = false;
    }
    if (draggingNode.node === dropNode.node || draggingNode.node.contains(dropNode.node)) {
      dropPrev = false;
      dropInner = false;
      dropNext = false;
    }
    const targetPosition = dropNode.$el.querySelector(`.${ns.be("node", "content")}`).getBoundingClientRect();
    const treePosition = el$.value.getBoundingClientRect();
    let dropType;
    const prevPercent = dropPrev ? dropInner ? 0.25 : dropNext ? 0.45 : 1 : -1;
    const nextPercent = dropNext ? dropInner ? 0.75 : dropPrev ? 0.55 : 0 : 1;
    let indicatorTop = -9999;
    const distance = event.clientY - targetPosition.top;
    if (distance < targetPosition.height * prevPercent) {
      dropType = "before";
    } else if (distance > targetPosition.height * nextPercent) {
      dropType = "after";
    } else if (dropInner) {
      dropType = "inner";
    } else {
      dropType = "none";
    }
    const iconPosition = dropNode.$el.querySelector(`.${ns.be("node", "expand-icon")}`).getBoundingClientRect();
    const dropIndicator = dropIndicator$.value;
    if (dropType === "before") {
      indicatorTop = iconPosition.top - treePosition.top;
    } else if (dropType === "after") {
      indicatorTop = iconPosition.bottom - treePosition.top;
    }
    dropIndicator.style.top = `${indicatorTop}px`;
    dropIndicator.style.left = `${iconPosition.right - treePosition.left}px`;
    if (dropType === "inner") {
      addClass(dropNode.$el, ns.is("drop-inner"));
    } else {
      removeClass(dropNode.$el, ns.is("drop-inner"));
    }
    dragState.value.showDropIndicator = dropType === "before" || dropType === "after";
    dragState.value.allowDrop = dragState.value.showDropIndicator || userAllowDropInner;
    dragState.value.dropType = dropType;
    ctx.emit("node-drag-over", draggingNode.node, dropNode.node, event);
  };
  const treeNodeDragEnd = (event) => {
    const { draggingNode, dropType, dropNode } = dragState.value;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    if (draggingNode && dropNode) {
      const draggingNodeCopy = { data: draggingNode.node.data };
      if (dropType !== "none") {
        draggingNode.node.remove();
      }
      if (dropType === "before") {
        dropNode.node.parent.insertBefore(draggingNodeCopy, dropNode.node);
      } else if (dropType === "after") {
        dropNode.node.parent.insertAfter(draggingNodeCopy, dropNode.node);
      } else if (dropType === "inner") {
        dropNode.node.insertChild(draggingNodeCopy);
      }
      if (dropType !== "none") {
        store.value.registerNode(draggingNodeCopy);
      }
      removeClass(dropNode.$el, ns.is("drop-inner"));
      ctx.emit("node-drag-end", draggingNode.node, dropNode.node, dropType, event);
      if (dropType !== "none") {
        ctx.emit("node-drop", draggingNode.node, dropNode.node, dropType, event);
      }
    }
    if (draggingNode && !dropNode) {
      ctx.emit("node-drag-end", draggingNode.node, null, dropType, event);
    }
    dragState.value.showDropIndicator = false;
    dragState.value.draggingNode = null;
    dragState.value.dropNode = null;
    dragState.value.allowDrop = true;
  };
  provide(dragEventsKey, {
    treeNodeDragStart,
    treeNodeDragOver,
    treeNodeDragEnd
  });
  return {
    dragState
  };
}
const _sfc_main$9 = defineComponent({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: _CollapseTransition,
    ElCheckbox,
    NodeContent,
    ElIcon,
    Loading: loading_default
  },
  props: {
    node: {
      type: Node,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  emits: ["node-expand"],
  setup(props, ctx) {
    const ns = useNamespace("tree");
    const { broadcastExpanded } = useNodeExpandEventBroadcast(props);
    const tree2 = inject("RootTree");
    const expanded = ref(false);
    const childNodeRendered = ref(false);
    const oldChecked = ref(null);
    const oldIndeterminate = ref(null);
    const node$ = ref(null);
    const dragEvents = inject(dragEventsKey);
    const instance = getCurrentInstance();
    provide("NodeInstance", instance);
    if (props.node.expanded) {
      expanded.value = true;
      childNodeRendered.value = true;
    }
    const childrenKey = tree2.props.props["children"] || "children";
    watch(() => {
      const children = props.node.data[childrenKey];
      return children && [...children];
    }, () => {
      props.node.updateChildren();
    });
    watch(() => props.node.indeterminate, (val) => {
      handleSelectChange(props.node.checked, val);
    });
    watch(() => props.node.checked, (val) => {
      handleSelectChange(val, props.node.indeterminate);
    });
    watch(() => props.node.expanded, (val) => {
      nextTick(() => expanded.value = val);
      if (val) {
        childNodeRendered.value = true;
      }
    });
    const getNodeKey$1 = (node) => {
      return getNodeKey(tree2.props.nodeKey, node.data);
    };
    const getNodeClass = (node) => {
      const nodeClassFunc = props.props.class;
      if (!nodeClassFunc) {
        return {};
      }
      let className;
      if (isFunction(nodeClassFunc)) {
        const { data } = node;
        className = nodeClassFunc(data, node);
      } else {
        className = nodeClassFunc;
      }
      if (isString(className)) {
        return { [className]: true };
      } else {
        return className;
      }
    };
    const handleSelectChange = (checked, indeterminate) => {
      if (oldChecked.value !== checked || oldIndeterminate.value !== indeterminate) {
        tree2.ctx.emit("check-change", props.node.data, checked, indeterminate);
      }
      oldChecked.value = checked;
      oldIndeterminate.value = indeterminate;
    };
    const handleClick = (e) => {
      handleCurrentChange(tree2.store, tree2.ctx.emit, () => tree2.store.value.setCurrentNode(props.node));
      tree2.currentNode.value = props.node;
      if (tree2.props.expandOnClickNode) {
        handleExpandIconClick();
      }
      if (tree2.props.checkOnClickNode && !props.node.disabled) {
        handleCheckChange(null, {
          target: { checked: !props.node.checked }
        });
      }
      tree2.ctx.emit("node-click", props.node.data, props.node, instance, e);
    };
    const handleContextMenu = (event) => {
      if (tree2.instance.vnode.props["onNodeContextmenu"]) {
        event.stopPropagation();
        event.preventDefault();
      }
      tree2.ctx.emit("node-contextmenu", event, props.node.data, props.node, instance);
    };
    const handleExpandIconClick = () => {
      if (props.node.isLeaf)
        return;
      if (expanded.value) {
        tree2.ctx.emit("node-collapse", props.node.data, props.node, instance);
        props.node.collapse();
      } else {
        props.node.expand();
        ctx.emit("node-expand", props.node.data, props.node, instance);
      }
    };
    const handleCheckChange = (value, ev) => {
      props.node.setChecked(ev.target.checked, !tree2.props.checkStrictly);
      nextTick(() => {
        const store = tree2.store.value;
        tree2.ctx.emit("check", props.node.data, {
          checkedNodes: store.getCheckedNodes(),
          checkedKeys: store.getCheckedKeys(),
          halfCheckedNodes: store.getHalfCheckedNodes(),
          halfCheckedKeys: store.getHalfCheckedKeys()
        });
      });
    };
    const handleChildNodeExpand = (nodeData, node, instance2) => {
      broadcastExpanded(node);
      tree2.ctx.emit("node-expand", nodeData, node, instance2);
    };
    const handleDragStart = (event) => {
      if (!tree2.props.draggable)
        return;
      dragEvents.treeNodeDragStart({ event, treeNode: props });
    };
    const handleDragOver = (event) => {
      event.preventDefault();
      if (!tree2.props.draggable)
        return;
      dragEvents.treeNodeDragOver({
        event,
        treeNode: { $el: node$.value, node: props.node }
      });
    };
    const handleDrop = (event) => {
      event.preventDefault();
    };
    const handleDragEnd = (event) => {
      if (!tree2.props.draggable)
        return;
      dragEvents.treeNodeDragEnd(event);
    };
    return {
      ns,
      node$,
      tree: tree2,
      expanded,
      childNodeRendered,
      oldChecked,
      oldIndeterminate,
      getNodeKey: getNodeKey$1,
      getNodeClass,
      handleSelectChange,
      handleClick,
      handleContextMenu,
      handleExpandIconClick,
      handleCheckChange,
      handleChildNodeExpand,
      handleDragStart,
      handleDragOver,
      handleDrop,
      handleDragEnd,
      CaretRight: caret_right_default
    };
  }
});
const _hoisted_1$5 = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"];
const _hoisted_2$3 = ["aria-expanded"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_loading = resolveComponent("loading");
  const _component_node_content = resolveComponent("node-content");
  const _component_el_tree_node = resolveComponent("el-tree-node");
  const _component_el_collapse_transition = resolveComponent("el-collapse-transition");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "node$",
    class: normalizeClass([
      _ctx.ns.b("node"),
      _ctx.ns.is("expanded", _ctx.expanded),
      _ctx.ns.is("current", _ctx.node.isCurrent),
      _ctx.ns.is("hidden", !_ctx.node.visible),
      _ctx.ns.is("focusable", !_ctx.node.disabled),
      _ctx.ns.is("checked", !_ctx.node.disabled && _ctx.node.checked),
      _ctx.getNodeClass(_ctx.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": _ctx.expanded,
    "aria-disabled": _ctx.node.disabled,
    "aria-checked": _ctx.node.checked,
    draggable: _ctx.tree.props.draggable,
    "data-key": _ctx.getNodeKey(_ctx.node),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"])),
    onContextmenu: _cache[2] || (_cache[2] = (...args) => _ctx.handleContextMenu && _ctx.handleContextMenu(...args)),
    onDragstart: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.handleDragStart && _ctx.handleDragStart(...args), ["stop"])),
    onDragover: _cache[4] || (_cache[4] = withModifiers((...args) => _ctx.handleDragOver && _ctx.handleDragOver(...args), ["stop"])),
    onDragend: _cache[5] || (_cache[5] = withModifiers((...args) => _ctx.handleDragEnd && _ctx.handleDragEnd(...args), ["stop"])),
    onDrop: _cache[6] || (_cache[6] = withModifiers((...args) => _ctx.handleDrop && _ctx.handleDrop(...args), ["stop"]))
  }, [
    createBaseVNode("div", {
      class: normalizeClass(_ctx.ns.be("node", "content")),
      style: normalizeStyle({ paddingLeft: (_ctx.node.level - 1) * _ctx.tree.props.indent + "px" })
    }, [
      _ctx.tree.props.icon || _ctx.CaretRight ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: normalizeClass([
          _ctx.ns.be("node", "expand-icon"),
          _ctx.ns.is("leaf", _ctx.node.isLeaf),
          {
            expanded: !_ctx.node.isLeaf && _ctx.expanded
          }
        ]),
        onClick: withModifiers(_ctx.handleExpandIconClick, ["stop"])
      }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.tree.props.icon || _ctx.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
      _ctx.showCheckbox ? (openBlock(), createBlock(_component_el_checkbox, {
        key: 1,
        "model-value": _ctx.node.checked,
        indeterminate: _ctx.node.indeterminate,
        disabled: !!_ctx.node.disabled,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"])),
        onChange: _ctx.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : createCommentVNode("v-if", true),
      _ctx.node.loading ? (openBlock(), createBlock(_component_el_icon, {
        key: 2,
        class: normalizeClass([_ctx.ns.be("node", "loading-icon"), _ctx.ns.is("loading")])
      }, {
        default: withCtx(() => [
          createVNode(_component_loading)
        ]),
        _: 1
      }, 8, ["class"])) : createCommentVNode("v-if", true),
      createVNode(_component_node_content, {
        node: _ctx.node,
        "render-content": _ctx.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    createVNode(_component_el_collapse_transition, null, {
      default: withCtx(() => [
        !_ctx.renderAfterExpand || _ctx.childNodeRendered ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.ns.be("node", "children")),
          role: "group",
          "aria-expanded": _ctx.expanded
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.node.childNodes, (child) => {
            return openBlock(), createBlock(_component_el_tree_node, {
              key: _ctx.getNodeKey(child),
              "render-content": _ctx.renderContent,
              "render-after-expand": _ctx.renderAfterExpand,
              "show-checkbox": _ctx.showCheckbox,
              node: child,
              accordion: _ctx.accordion,
              props: _ctx.props,
              onNodeExpand: _ctx.handleChildNodeExpand
            }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]);
          }), 128))
        ], 10, _hoisted_2$3)), [
          [vShow, _ctx.expanded]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 1
    })
  ], 42, _hoisted_1$5)), [
    [vShow, _ctx.node.visible]
  ]);
}
var ElTreeNode = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);
function useKeydown({ el$ }, store) {
  const ns = useNamespace("tree");
  const treeItems = shallowRef([]);
  const checkboxItems = shallowRef([]);
  onMounted(() => {
    initTabIndex();
  });
  onUpdated(() => {
    treeItems.value = Array.from(el$.value.querySelectorAll("[role=treeitem]"));
    checkboxItems.value = Array.from(el$.value.querySelectorAll("input[type=checkbox]"));
  });
  watch(checkboxItems, (val) => {
    val.forEach((checkbox) => {
      checkbox.setAttribute("tabindex", "-1");
    });
  });
  const handleKeydown = (ev) => {
    const currentItem = ev.target;
    if (!currentItem.className.includes(ns.b("node")))
      return;
    const code = ev.code;
    treeItems.value = Array.from(el$.value.querySelectorAll(`.${ns.is("focusable")}[role=treeitem]`));
    const currentIndex = treeItems.value.indexOf(currentItem);
    let nextIndex;
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      ev.preventDefault();
      if (code === EVENT_CODE.up) {
        nextIndex = currentIndex === -1 ? 0 : currentIndex !== 0 ? currentIndex - 1 : treeItems.value.length - 1;
        const startIndex = nextIndex;
        while (true) {
          if (store.value.getNode(treeItems.value[nextIndex].dataset.key).canFocus)
            break;
          nextIndex--;
          if (nextIndex === startIndex) {
            nextIndex = -1;
            break;
          }
          if (nextIndex < 0) {
            nextIndex = treeItems.value.length - 1;
          }
        }
      } else {
        nextIndex = currentIndex === -1 ? 0 : currentIndex < treeItems.value.length - 1 ? currentIndex + 1 : 0;
        const startIndex = nextIndex;
        while (true) {
          if (store.value.getNode(treeItems.value[nextIndex].dataset.key).canFocus)
            break;
          nextIndex++;
          if (nextIndex === startIndex) {
            nextIndex = -1;
            break;
          }
          if (nextIndex >= treeItems.value.length) {
            nextIndex = 0;
          }
        }
      }
      nextIndex !== -1 && treeItems.value[nextIndex].focus();
    }
    if ([EVENT_CODE.left, EVENT_CODE.right].includes(code)) {
      ev.preventDefault();
      currentItem.click();
    }
    const hasInput = currentItem.querySelector('[type="checkbox"]');
    if ([EVENT_CODE.enter, EVENT_CODE.space].includes(code) && hasInput) {
      ev.preventDefault();
      hasInput.click();
    }
  };
  useEventListener(el$, "keydown", handleKeydown);
  const initTabIndex = () => {
    var _a;
    treeItems.value = Array.from(el$.value.querySelectorAll(`.${ns.is("focusable")}[role=treeitem]`));
    checkboxItems.value = Array.from(el$.value.querySelectorAll("input[type=checkbox]"));
    const checkedItem = el$.value.querySelectorAll(`.${ns.is("checked")}[role=treeitem]`);
    if (checkedItem.length) {
      checkedItem[0].setAttribute("tabindex", "0");
      return;
    }
    (_a = treeItems.value[0]) == null ? void 0 : _a.setAttribute("tabindex", "0");
  };
}
const _sfc_main$8 = defineComponent({
  name: "ElTree",
  components: { ElTreeNode },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        disabled: "disabled"
      })
    },
    lazy: {
      type: Boolean,
      default: false
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    icon: {
      type: iconPropType
    }
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(props, ctx) {
    const { t } = useLocale();
    const ns = useNamespace("tree");
    const store = ref(new TreeStore({
      key: props.nodeKey,
      data: props.data,
      lazy: props.lazy,
      props: props.props,
      load: props.load,
      currentNodeKey: props.currentNodeKey,
      checkStrictly: props.checkStrictly,
      checkDescendants: props.checkDescendants,
      defaultCheckedKeys: props.defaultCheckedKeys,
      defaultExpandedKeys: props.defaultExpandedKeys,
      autoExpandParent: props.autoExpandParent,
      defaultExpandAll: props.defaultExpandAll,
      filterNodeMethod: props.filterNodeMethod
    }));
    store.value.initialize();
    const root = ref(store.value.root);
    const currentNode = ref(null);
    const el$ = ref(null);
    const dropIndicator$ = ref(null);
    const { broadcastExpanded } = useNodeExpandEventBroadcast(props);
    const { dragState } = useDragNodeHandler({
      props,
      ctx,
      el$,
      dropIndicator$,
      store
    });
    useKeydown({ el$ }, store);
    const isEmpty = computed(() => {
      const { childNodes } = root.value;
      return !childNodes || childNodes.length === 0 || childNodes.every(({ visible }) => !visible);
    });
    watch(() => props.currentNodeKey, (newVal) => {
      store.value.setCurrentNodeKey(newVal);
    });
    watch(() => props.defaultCheckedKeys, (newVal) => {
      store.value.setDefaultCheckedKey(newVal);
    });
    watch(() => props.defaultExpandedKeys, (newVal) => {
      store.value.setDefaultExpandedKeys(newVal);
    });
    watch(() => props.data, (newVal) => {
      store.value.setData(newVal);
    }, { deep: true });
    watch(() => props.checkStrictly, (newVal) => {
      store.value.checkStrictly = newVal;
    });
    const filter = (value) => {
      if (!props.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      store.value.filter(value);
    };
    const getNodeKey$1 = (node) => {
      return getNodeKey(props.nodeKey, node.data);
    };
    const getNodePath = (data) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const node = store.value.getNode(data);
      if (!node)
        return [];
      const path = [node.data];
      let parent = node.parent;
      while (parent && parent !== root.value) {
        path.push(parent.data);
        parent = parent.parent;
      }
      return path.reverse();
    };
    const getCheckedNodes = (leafOnly, includeHalfChecked) => {
      return store.value.getCheckedNodes(leafOnly, includeHalfChecked);
    };
    const getCheckedKeys = (leafOnly) => {
      return store.value.getCheckedKeys(leafOnly);
    };
    const getCurrentNode = () => {
      const currentNode2 = store.value.getCurrentNode();
      return currentNode2 ? currentNode2.data : null;
    };
    const getCurrentKey = () => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const currentNode2 = getCurrentNode();
      return currentNode2 ? currentNode2[props.nodeKey] : null;
    };
    const setCheckedNodes = (nodes, leafOnly) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      store.value.setCheckedNodes(nodes, leafOnly);
    };
    const setCheckedKeys = (keys, leafOnly) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      store.value.setCheckedKeys(keys, leafOnly);
    };
    const setChecked = (data, checked, deep) => {
      store.value.setChecked(data, checked, deep);
    };
    const getHalfCheckedNodes = () => {
      return store.value.getHalfCheckedNodes();
    };
    const getHalfCheckedKeys = () => {
      return store.value.getHalfCheckedKeys();
    };
    const setCurrentNode = (node, shouldAutoExpandParent = true) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      handleCurrentChange(store, ctx.emit, () => store.value.setUserCurrentNode(node, shouldAutoExpandParent));
    };
    const setCurrentKey = (key, shouldAutoExpandParent = true) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      handleCurrentChange(store, ctx.emit, () => store.value.setCurrentNodeKey(key, shouldAutoExpandParent));
    };
    const getNode = (data) => {
      return store.value.getNode(data);
    };
    const remove = (data) => {
      store.value.remove(data);
    };
    const append = (data, parentNode) => {
      store.value.append(data, parentNode);
    };
    const insertBefore = (data, refNode) => {
      store.value.insertBefore(data, refNode);
    };
    const insertAfter = (data, refNode) => {
      store.value.insertAfter(data, refNode);
    };
    const handleNodeExpand = (nodeData, node, instance) => {
      broadcastExpanded(node);
      ctx.emit("node-expand", nodeData, node, instance);
    };
    const updateKeyChildren = (key, data) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      store.value.updateChildren(key, data);
    };
    provide("RootTree", {
      ctx,
      props,
      store,
      root,
      currentNode,
      instance: getCurrentInstance()
    });
    provide(formItemContextKey, void 0);
    return {
      ns,
      store,
      root,
      currentNode,
      dragState,
      el$,
      dropIndicator$,
      isEmpty,
      filter,
      getNodeKey: getNodeKey$1,
      getNodePath,
      getCheckedNodes,
      getCheckedKeys,
      getCurrentNode,
      getCurrentKey,
      setCheckedNodes,
      setCheckedKeys,
      setChecked,
      getHalfCheckedNodes,
      getHalfCheckedKeys,
      setCurrentNode,
      setCurrentKey,
      t,
      getNode,
      remove,
      append,
      insertBefore,
      insertAfter,
      handleNodeExpand,
      updateKeyChildren
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tree_node = resolveComponent("el-tree-node");
  return openBlock(), createElementBlock("div", {
    ref: "el$",
    class: normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.is("dragging", !!_ctx.dragState.draggingNode),
      _ctx.ns.is("drop-not-allow", !_ctx.dragState.allowDrop),
      _ctx.ns.is("drop-inner", _ctx.dragState.dropType === "inner"),
      { [_ctx.ns.m("highlight-current")]: _ctx.highlightCurrent }
    ]),
    role: "tree"
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.root.childNodes, (child) => {
      return openBlock(), createBlock(_component_el_tree_node, {
        key: _ctx.getNodeKey(child),
        node: child,
        props: _ctx.props,
        accordion: _ctx.accordion,
        "render-after-expand": _ctx.renderAfterExpand,
        "show-checkbox": _ctx.showCheckbox,
        "render-content": _ctx.renderContent,
        onNodeExpand: _ctx.handleNodeExpand
      }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]);
    }), 128)),
    _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.e("empty-block"))
    }, [
      renderSlot(_ctx.$slots, "empty", {}, () => {
        var _a;
        return [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.ns.e("empty-text"))
          }, toDisplayString((_a = _ctx.emptyText) != null ? _a : _ctx.t("el.tree.emptyText")), 3)
        ];
      })
    ], 2)) : createCommentVNode("v-if", true),
    withDirectives(createBaseVNode("div", {
      ref: "dropIndicator$",
      class: normalizeClass(_ctx.ns.e("drop-indicator"))
    }, null, 2), [
      [vShow, _ctx.dragState.showDropIndicator]
    ])
  ], 2);
}
var Tree = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);
Tree.install = (app) => {
  app.component(Tree.name, Tree);
};
const _Tree = Tree;
const ElTree = _Tree;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nPulse" },
  __name: "Pulse",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["pulse", _ctx.$style.pulseContainer])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.pulse)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.pulse2)
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const pulseContainer = "_pulseContainer_1w2uc_123";
const pulse = "_pulse_1w2uc_123";
const pulse2 = "_pulse2_1w2uc_139";
const style0$7 = {
  pulseContainer,
  pulse,
  pulse2
};
const cssModules$7 = {
  "$style": style0$7
};
const N8nPulse = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__cssModules", cssModules$7]]);
const _hoisted_1$4 = ["data-node-name", "data-node-placement", "onClick"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NDVFloatingNodes",
  props: {
    rootNode: {}
  },
  emits: ["switchSelectedNode"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const posthogStore = usePostHog();
    const emit = __emit;
    const isNDVV2 = computed(
      () => posthogStore.isVariantEnabled(
        NDV_UI_OVERHAUL_EXPERIMENT.name,
        NDV_UI_OVERHAUL_EXPERIMENT.variant
      )
    );
    function moveNodeDirection(direction) {
      const matchedDirectionNode = connectedNodes.value[direction][0];
      if (matchedDirectionNode) {
        emit("switchSelectedNode", matchedDirectionNode.node.name);
      }
    }
    function onKeyDown(e) {
      if (e.shiftKey && e.altKey && (e.ctrlKey || e.metaKey)) {
        const mapper = {
          ArrowUp: "outputSub",
          ArrowRight: "outputMain",
          ArrowLeft: "inputMain"
          /* left */
        };
        const matchingDirection = mapper[e.key] || null;
        if (matchingDirection) {
          moveNodeDirection(matchingDirection);
        }
      }
    }
    function getINodesFromNames(names) {
      return names.map((name) => {
        const node = workflowsStore.getNodeByName(name);
        if (node) {
          const nodeType = nodeTypesStore.getNodeType(node.type);
          if (nodeType) {
            return { node, nodeType };
          }
        }
        return null;
      }).filter((n) => n !== null);
    }
    const connectedNodes = computed(() => {
      const workflowObject = workflowsStore.workflowObject;
      const rootName = props.rootNode.name;
      return {
        [
          "outputSub"
          /* top */
        ]: getINodesFromNames(
          workflowObject.getChildNodes(rootName, "ALL_NON_MAIN")
        ),
        [
          "outputMain"
          /* right */
        ]: getINodesFromNames(
          workflowObject.getChildNodes(rootName, NodeConnectionTypes.Main, 1)
        ).reverse(),
        [
          "inputMain"
          /* left */
        ]: getINodesFromNames(
          workflowObject.getParentNodes(rootName, NodeConnectionTypes.Main, 1)
        ).reverse()
      };
    });
    const connectionGroups = [
      "outputSub",
      "outputMain",
      "inputMain"
      /* left */
    ];
    const tooltipPositionMapper = {
      [
        "outputSub"
        /* top */
      ]: "bottom",
      [
        "outputMain"
        /* right */
      ]: "left",
      [
        "inputMain"
        /* left */
      ]: "right"
    };
    onMounted(() => {
      document.addEventListener("keydown", onKeyDown, true);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("keydown", onKeyDown, true);
    });
    __expose({
      moveNodeDirection
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass([_ctx.$style.floatingNodes, { [_ctx.$style.v2]: isNDVV2.value }]),
        "data-test-id": "floating-nodes"
      }, [
        (openBlock(), createElementBlock(Fragment, null, renderList(connectionGroups, (connectionGroup) => {
          return createBaseVNode("ul", {
            key: connectionGroup,
            class: normalizeClass([_ctx.$style.nodesList, _ctx.$style[connectionGroup]])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes.value[connectionGroup], ({ node, nodeType }) => {
              return openBlock(), createElementBlock(Fragment, null, [
                node && nodeType ? (openBlock(), createBlock(unref(N8nTooltip), {
                  key: node.name,
                  placement: tooltipPositionMapper[connectionGroup],
                  teleported: false,
                  offset: isNDVV2.value ? 16 : 60
                }, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(node.name), 1)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("li", {
                      class: normalizeClass(_ctx.$style.connectedNode),
                      "data-test-id": "floating-node",
                      "data-node-name": node.name,
                      "data-node-placement": connectionGroup,
                      onClick: ($event) => emit("switchSelectedNode", node.name)
                    }, [
                      createVNode(NodeIcon, {
                        "node-type": nodeType,
                        "node-name": node.name,
                        "tooltip-position": tooltipPositionMapper[connectionGroup],
                        size: isNDVV2.value ? 24 : 35,
                        circle: ""
                      }, null, 8, ["node-type", "node-name", "tooltip-position", "size"])
                    ], 10, _hoisted_1$4)
                  ]),
                  _: 2
                }, 1032, ["placement", "offset"])) : createCommentVNode("", true)
              ], 64);
            }), 256))
          ], 2);
        }), 64))
      ], 2);
    };
  }
});
const floatingNodes = "_floatingNodes_mldmm_123";
const nodesList = "_nodesList_mldmm_133";
const inputSub = "_inputSub_mldmm_147";
const outputSub = "_outputSub_mldmm_147";
const outputMain = "_outputMain_mldmm_160";
const inputMain = "_inputMain_mldmm_160";
const connectedNode = "_connectedNode_mldmm_173";
const v2 = "_v2_mldmm_214";
const style0$6 = {
  floatingNodes,
  nodesList,
  inputSub,
  outputSub,
  outputMain,
  inputMain,
  connectedNode,
  v2
};
const cssModules$6 = {
  "$style": style0$6
};
const NDVFloatingNodes = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__cssModules", cssModules$6]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RunInfo",
  props: {
    taskData: {},
    hasStaleData: { type: Boolean },
    hasPinData: { type: Boolean }
  },
  setup(__props) {
    const i18n = useI18n();
    const props = __props;
    const runTaskData = computed(() => {
      return props.taskData;
    });
    const theme = computed(() => {
      return props.taskData?.error ? "danger" : "success";
    });
    const runMetadata = computed(() => {
      if (!runTaskData.value) {
        return null;
      }
      const { date, time } = convertToDisplayDateComponents(runTaskData.value.startTime);
      return {
        executionTime: runTaskData.value.executionTime,
        startTime: `${date} at ${time}`
      };
    });
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return _ctx.hasStaleData ? (openBlock(), createBlock(unref(InfoTip), {
        key: 0,
        theme: "warning-light",
        type: "tooltip",
        "tooltip-placement": "right",
        "data-test-id": "node-run-info-stale"
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("span", null, null, 512), [
            [
              _directive_n8n_html,
              unref(i18n).baseText(
                _ctx.hasPinData ? "ndv.output.staleDataWarning.pinData" : "ndv.output.staleDataWarning.regular"
              )
            ]
          ])
        ]),
        _: 1
      })) : runMetadata.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.$style.tooltipRow)
      }, [
        _ctx.taskData?.executionStatus !== "canceled" ? (openBlock(), createBlock(unref(InfoTip), {
          key: 0,
          type: "note",
          theme: theme.value,
          "data-test-id": `node-run-status-${theme.value}`,
          size: "large"
        }, null, 8, ["theme", "data-test-id"])) : createCommentVNode("", true),
        createVNode(unref(InfoTip), {
          type: "tooltip",
          theme: "info",
          "data-test-id": `node-run-info`,
          "tooltip-placement": "right"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(unref(N8nText), {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(runTaskData.value?.error ? unref(i18n).baseText("runData.executionStatus.failed") : runTaskData.value?.executionStatus === "canceled" ? unref(i18n).baseText("runData.executionStatus.canceled") : unref(i18n).baseText("runData.executionStatus.success")), 1)
                ]),
                _: 1
              }),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createVNode(unref(N8nText), {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.startTime") + ":"), 1)
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(runMetadata.value.startTime), 1),
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              createVNode(unref(N8nText), {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.executionTime") + ":"), 1)
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(runMetadata.value.executionTime) + " " + toDisplayString(unref(i18n).baseText("runData.ms")), 1)
            ])
          ]),
          _: 1
        })
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const tooltipRow = "_tooltipRow_14r7d_123";
const style0$5 = {
  tooltipRow
};
const cssModules$5 = {
  "$style": style0$5
};
const RunInfo = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__cssModules", cssModules$5]]);
var capitalizeExports = requireCapitalize();
const capitalize = /* @__PURE__ */ getDefaultExportFromCjs(capitalizeExports);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AiRunContentBlock",
  props: {
    runData: {},
    error: {}
  },
  setup(__props) {
    const props = __props;
    const isExpanded = ref(getInitialExpandedState());
    const renderType = ref("rendered");
    const parsedRun = computed(() => parseAiContent(props.runData.data ?? [], props.runData.type));
    const contentParsed = computed(
      () => parsedRun.value.some((item) => item.parsedContent?.parsed === true)
    );
    function getInitialExpandedState() {
      const collapsedTypes = {
        input: [
          NodeConnectionTypes.AiDocument,
          NodeConnectionTypes.AiTextSplitter
        ],
        output: [
          NodeConnectionTypes.AiDocument,
          NodeConnectionTypes.AiEmbedding,
          NodeConnectionTypes.AiTextSplitter,
          NodeConnectionTypes.AiVectorStore
        ]
      };
      return !collapsedTypes[props.runData.inOut].includes(props.runData.type);
    }
    function onBlockHeaderClick() {
      isExpanded.value = !isExpanded.value;
    }
    function onRenderTypeChange(value) {
      renderType.value = value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.block)
      }, [
        createBaseVNode("header", {
          class: normalizeClass(_ctx.$style.blockHeader),
          onClick: onBlockHeaderClick
        }, [
          createBaseVNode("button", {
            class: normalizeClass(_ctx.$style.blockToggle)
          }, [
            createVNode(unref(N8nIcon), {
              icon: isExpanded.value ? "chevron-down" : "chevron-right",
              size: "large"
            }, null, 8, ["icon"])
          ], 2),
          createBaseVNode("p", {
            class: normalizeClass(_ctx.$style.blockTitle)
          }, toDisplayString(unref(capitalize)(_ctx.runData.inOut)), 3),
          contentParsed.value && !_ctx.error && isExpanded.value ? (openBlock(), createBlock(unref(N8nRadioButtons), {
            key: 0,
            size: "small",
            "model-value": renderType.value,
            class: normalizeClass(_ctx.$style.rawSwitch),
            options: [
              { label: "Rendered", value: "rendered" },
              { label: "JSON", value: "json" }
            ],
            "onUpdate:modelValue": onRenderTypeChange
          }, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("main", {
          class: normalizeClass({
            [_ctx.$style.blockContent]: true,
            [_ctx.$style.blockContentExpanded]: isExpanded.value
          })
        }, [
          _ctx.error ? (openBlock(), createBlock(_sfc_main$b, {
            key: 0,
            error: _ctx.error,
            class: normalizeClass(_ctx.$style.error),
            "show-details": ""
          }, null, 8, ["error", "class"])) : (openBlock(), createBlock(RunDataAi$1, {
            key: 1,
            data: _ctx.runData.data,
            type: _ctx.runData.type,
            content: parsedRun.value,
            "render-type": renderType.value
          }, null, 8, ["data", "type", "content", "render-type"]))
        ], 2)
      ], 2);
    };
  }
});
const block = "_block_wafm4_123";
const blockContent = "_blockContent_wafm4_130";
const blockContentExpanded = "_blockContentExpanded_wafm4_134";
const rawSwitch = "_rawSwitch_wafm4_138";
const blockHeader = "_blockHeader_wafm4_148";
const blockTitle = "_blockTitle_wafm4_161";
const blockToggle = "_blockToggle_wafm4_168";
const error = "_error_wafm4_176";
const style0$4 = {
  block,
  blockContent,
  blockContentExpanded,
  rawSwitch,
  blockHeader,
  blockTitle,
  blockToggle,
  error
};
const cssModules$4 = {
  "$style": style0$4
};
const AiRunContentBlock = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__cssModules", cssModules$4]]);
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = { key: 1 };
const _hoisted_3$2 = { key: 2 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RunDataAiContent",
  props: {
    inputData: {},
    contentIndex: {}
  },
  setup(__props) {
    const props = __props;
    const nodeTypesStore = useNodeTypesStore();
    const workflowsStore = useWorkflowsStore();
    const i18n = useI18n();
    const consumedTokensSum = computed(() => {
      return getConsumedTokens(outputRun.value);
    });
    function extractRunMeta(run) {
      const uiNode = workflowsStore.getNodeByName(props.inputData.node);
      const nodeType = nodeTypesStore.getNodeType(uiNode?.type ?? "");
      const runMeta2 = {
        startTimeMs: run.metadata.startTime,
        executionTimeMs: run.metadata.executionTime,
        node: nodeType,
        type: run.inOut,
        connectionType: run.type,
        subExecution: run.metadata?.subExecution
      };
      return runMeta2;
    }
    const outputRun = computed(() => {
      return props.inputData.data.find((r) => r.inOut === "output");
    });
    const runMeta = computed(() => {
      if (outputRun.value === void 0) {
        return;
      }
      return extractRunMeta(outputRun.value);
    });
    const executionRunData = computed(() => {
      return workflowsStore.getWorkflowExecution?.data?.resultData?.runData;
    });
    const outputError = computed(() => {
      return executionRunData.value?.[props.inputData.node]?.[props.inputData.runIndex]?.error;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("header", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          runMeta.value?.node ? (openBlock(), createBlock(NodeIcon, {
            key: 0,
            class: normalizeClass(_ctx.$style.nodeIcon),
            "node-type": runMeta.value.node,
            size: 20
          }, null, 8, ["class", "node-type"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.headerWrap)
          }, [
            createBaseVNode("p", {
              class: normalizeClass(_ctx.$style.title)
            }, toDisplayString(_ctx.inputData.node), 3),
            createBaseVNode("ul", {
              class: normalizeClass(_ctx.$style.meta)
            }, [
              runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_1$3, toDisplayString(runMeta.value?.executionTimeMs) + "ms", 1)) : createCommentVNode("", true),
              runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_2$2, [
                createVNode(unref(N8nTooltip), null, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(new Date(runMeta.value?.startTimeMs).toLocaleString()), 1)
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.startedAt", {
                      interpolate: {
                        startTime: new Date(runMeta.value?.startTimeMs).toLocaleTimeString()
                      }
                    })), 1)
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              runMeta.value ? (openBlock(), createElementBlock("li", _hoisted_3$2, [
                createVNode(ViewSubExecution, {
                  "task-metadata": runMeta.value,
                  "display-mode": "ai",
                  inline: true
                }, null, 8, ["task-metadata"])
              ])) : createCommentVNode("", true),
              (consumedTokensSum.value?.totalTokens ?? 0) > 0 ? (openBlock(), createElementBlock("li", {
                key: 3,
                class: normalizeClass(_ctx.$style.tokensUsage)
              }, [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
                  interpolate: {
                    count: unref(formatTokenUsageCount)(consumedTokensSum.value, "total")
                  }
                })) + " ", 1),
                createVNode(unref(InfoTip), {
                  type: "tooltip",
                  theme: "info-light",
                  "tooltip-placement": "right"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$c, { "consumed-tokens": consumedTokensSum.value }, null, 8, ["consumed-tokens"])
                  ]),
                  _: 1
                })
              ], 2)) : createCommentVNode("", true)
            ], 2)
          ], 2)
        ], 2),
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.inputData.data, (run, index) => {
          return openBlock(), createElementBlock("main", {
            key: index,
            class: normalizeClass(_ctx.$style.content)
          }, [
            createVNode(AiRunContentBlock, {
              "run-data": run,
              error: run.inOut === "output" ? outputError.value : void 0
            }, null, 8, ["run-data", "error"])
          ], 2);
        }), 128))
      ], 2);
    };
  }
});
const container$2 = "_container_dypaw_2";
const nodeIcon$1 = "_nodeIcon_dypaw_5";
const header$1 = "_header_dypaw_8";
const headerWrap = "_headerWrap_dypaw_14";
const title$2 = "_title_dypaw_18";
const meta = "_meta_dypaw_25";
const tokensUsage = "_tokensUsage_dypaw_41";
const style0$3 = {
  container: container$2,
  nodeIcon: nodeIcon$1,
  header: header$1,
  headerWrap,
  title: title$2,
  meta,
  tokensUsage
};
const cssModules$3 = {
  "$style": style0$3
};
const RunDataAiContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _hoisted_1$2 = ["data-tree-depth"];
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = ["textContent"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RunDataAi",
  props: {
    node: {},
    runIndex: { default: 0 },
    slim: { type: Boolean },
    workflowObject: {}
  },
  setup(__props) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const selectedRun = ref([]);
    const i18n = useI18n();
    const aiData = computed(
      () => createAiData(
        props.node.name,
        props.workflowObject.connectionsBySourceNode,
        workflowsStore.getWorkflowResultDataByNodeName
      )
    );
    const executionTree = computed(
      () => getTreeNodeData(
        props.node.name,
        props.workflowObject.connectionsBySourceNode,
        aiData.value,
        props.runIndex
      )
    );
    function isTreeNodeSelected(node) {
      return selectedRun.value.some((run) => run.node === node.node && run.runIndex === node.runIndex);
    }
    function toggleTreeItem(node) {
      node.expanded = !node.expanded;
    }
    function onItemClick(data) {
      const matchingRun = aiData.value?.find(
        (run) => run.node === data.node && run.runIndex === data.runIndex
      );
      if (!matchingRun) {
        selectedRun.value = [];
        return;
      }
      const selectedNodeRun = workflowsStore.getWorkflowResultDataByNodeName(data.node)?.[data.runIndex];
      if (!selectedNodeRun) {
        return;
      }
      selectedRun.value = [
        {
          node: data.node,
          runIndex: data.runIndex,
          data: getReferencedData(selectedNodeRun, true)
        }
      ];
    }
    function getNodeType(nodeName) {
      const node = workflowsStore.getNodeByName(nodeName);
      if (!node) {
        return null;
      }
      const nodeType = nodeTypesStore.getNodeType(node?.type);
      return nodeType;
    }
    function selectFirst() {
      if (executionTree.value.length && executionTree.value[0].children.length) {
        onItemClick(executionTree.value[0].children[0]);
      }
    }
    watch(() => props.runIndex, selectFirst, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        aiData.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", {
            class: normalizeClass({ [_ctx.$style.tree]: true, [_ctx.$style.slim]: _ctx.slim })
          }, [
            createVNode(unref(ElTree), {
              data: executionTree.value,
              props: { label: "node" },
              "default-expand-all": "",
              indent: 12,
              "expand-on-click-node": false,
              "data-test-id": "lm-chat-logs-tree",
              onNodeClick: onItemClick
            }, {
              default: withCtx(({ node: currentNode, data }) => [
                createBaseVNode("div", {
                  class: normalizeClass({
                    [_ctx.$style.treeNode]: true,
                    [_ctx.$style.isSelected]: isTreeNodeSelected(data)
                  }),
                  "data-tree-depth": data.depth,
                  style: normalizeStyle({ "--item-depth": data.depth })
                }, [
                  data.children.length ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.treeToggle),
                    onClick: ($event) => toggleTreeItem(currentNode)
                  }, [
                    createVNode(unref(N8nIcon), {
                      icon: currentNode.expanded ? "chevron-down" : "chevron-right"
                    }, null, 8, ["icon"])
                  ], 10, _hoisted_2$1)) : createCommentVNode("", true),
                  createVNode(unref(N8nTooltip), {
                    disabled: !_ctx.slim,
                    placement: "right"
                  }, {
                    content: withCtx(() => [
                      createTextVNode(toDisplayString(currentNode.label), 1)
                    ]),
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        class: normalizeClass(_ctx.$style.leafLabel)
                      }, [
                        createVNode(NodeIcon, {
                          "node-type": getNodeType(data.node),
                          size: 17,
                          class: normalizeClass(_ctx.$style.nodeIcon)
                        }, null, 8, ["node-type", "class"]),
                        !_ctx.slim ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          textContent: toDisplayString(currentNode.label)
                        }, null, 8, _hoisted_3$1)) : createCommentVNode("", true)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["disabled"])
                ], 14, _hoisted_1$2)
              ]),
              _: 1
            }, 8, ["data"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.runData)
          }, [
            selectedRun.value.length === 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.empty)
            }, [
              createVNode(unref(N8nText), { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.ai.empty", {
                    interpolate: {
                      node: props.node.name
                    }
                  })), 1)
                ]),
                _: 1
              })
            ], 2)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(selectedRun.value, (data, index) => {
              return openBlock(), createElementBlock("div", {
                key: `${data.node}__${data.runIndex}__index`,
                "data-test-id": "lm-chat-logs-entry"
              }, [
                createVNode(RunDataAiContent, {
                  "input-data": data,
                  "content-index": index
                }, null, 8, ["input-data", "content-index"])
              ]);
            }), 128))
          ], 2)
        ], 64)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.noData)
        }, toDisplayString(unref(i18n).baseText("ndv.output.ai.waiting")), 3))
      ], 2);
    };
  }
});
const treeToggle = "_treeToggle_1qaq4_123";
const leafLabel = "_leafLabel_1qaq4_131";
const noData = "_noData_1qaq4_137";
const empty = "_empty_1qaq4_145";
const title$1 = "_title_1qaq4_149";
const tree = "_tree_1qaq4_123";
const slim = "_slim_1qaq4_161";
const runData$1 = "_runData_1qaq4_165";
const container$1 = "_container_1qaq4_171";
const nodeIcon = "_nodeIcon_1qaq4_198";
const isSelected = "_isSelected_1qaq4_204";
const treeNode = "_treeNode_1qaq4_208";
const style0$2 = {
  treeToggle,
  leafLabel,
  noData,
  empty,
  title: title$1,
  tree,
  slim,
  runData: runData$1,
  container: container$1,
  nodeIcon,
  isSelected,
  treeNode
};
const cssModules$2 = {
  "$style": style0$2
};
const RunDataAi = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = {
  key: 0,
  "data-test-id": "ndv-output-waiting"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OutputPanel",
  props: {
    workflowObject: {},
    runIndex: {},
    isReadOnly: { type: Boolean },
    linkedRuns: { type: Boolean },
    canLinkRuns: { type: Boolean },
    pushRef: {},
    blockUI: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false },
    isPaneActive: { type: Boolean, default: false },
    displayMode: {}
  },
  emits: ["linkRun", "unlinkRun", "runChange", "activatePane", "tableMounted", "itemHover", "search", "openSettings", "execute", "displayModeChange"],
  setup(__props, { emit: __emit }) {
    const OUTPUT_TYPE = {
      REGULAR: "regular",
      LOGS: "logs"
    };
    const props = __props;
    const emit = __emit;
    const ndvStore = useNDVStore();
    const nodeTypesStore = useNodeTypesStore();
    const workflowsStore = useWorkflowsStore();
    const posthogStore = usePostHog();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const { activeNode } = storeToRefs(ndvStore);
    const { dirtinessByName } = useNodeDirtiness();
    const { isSubNodeType } = useNodeType({
      node: activeNode
    });
    const pinnedData = usePinnedData(activeNode, {
      runIndex: props.runIndex,
      displayMode: props.displayMode
    });
    const outputMode = ref(OUTPUT_TYPE.REGULAR);
    const outputTypes = ref([
      { label: i18n.baseText("ndv.output.outType.regular"), value: OUTPUT_TYPE.REGULAR },
      { label: i18n.baseText("ndv.output.outType.logs"), value: OUTPUT_TYPE.LOGS }
    ]);
    const runDataRef = ref();
    const collapsingColumnName = ref(null);
    const node = computed(() => {
      return ndvStore.activeNode ?? void 0;
    });
    const { hasNodeRun, workflowExecution, workflowRunData } = useExecutionData({ node });
    const isTriggerNode = computed(() => {
      return !!node.value && nodeTypesStore.isTriggerNode(node.value.type);
    });
    const hasAiMetadata = computed(() => {
      if (isNodeRunning.value || !workflowRunData.value) {
        return false;
      }
      if (node.value) {
        const connectedSubNodes = props.workflowObject.getParentNodes(node.value.name, "ALL_NON_MAIN");
        const resultData = connectedSubNodes.map(workflowsStore.getWorkflowResultDataByNodeName);
        return resultData && Array.isArray(resultData) && resultData.length > 0;
      }
      return false;
    });
    const hasError = computed(
      () => Boolean(
        workflowRunData.value && node.value && workflowRunData.value[node.value.name]?.[props.runIndex]?.error
      )
    );
    const defaultOutputMode = computed(() => {
      return hasError.value && hasAiMetadata.value ? OUTPUT_TYPE.LOGS : OUTPUT_TYPE.REGULAR;
    });
    const isNodeRunning = computed(() => {
      return workflowRunning.value && !!node.value && workflowsStore.isNodeExecuting(node.value.name);
    });
    const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const runTaskData = computed(() => {
      if (!node.value || workflowExecution.value === null) {
        return null;
      }
      const runData2 = workflowRunData.value;
      if (!runData2?.hasOwnProperty(node.value.name)) {
        return null;
      }
      if (runData2[node.value.name].length <= props.runIndex) {
        return null;
      }
      return runData2[node.value.name][props.runIndex];
    });
    const runsCount = computed(() => {
      if (node.value === null) {
        return 0;
      }
      const runData2 = workflowRunData.value;
      if (runData2 === null || node.value && !runData2.hasOwnProperty(node.value.name)) {
        return 0;
      }
      if (node.value && runData2[node.value.name].length) {
        return runData2[node.value.name].length;
      }
      return 0;
    });
    const staleData = computed(() => {
      if (!node.value) {
        return false;
      }
      return dirtinessByName.value[node.value.name] === CanvasNodeDirtiness.PARAMETERS_UPDATED;
    });
    const outputPanelEditMode = computed(() => {
      return ndvStore.outputPanelEditMode;
    });
    const canPinData = computed(() => {
      return pinnedData.isValidNodeType.value && !props.isReadOnly;
    });
    const allToolsWereUnusedNotice = computed(() => {
      if (!node.value || runsCount.value === 0 || hasError.value) return void 0;
      if (pinnedData.hasData.value) return void 0;
      const toolsAvailable = props.workflowObject.getParentNodes(
        node.value.name,
        NodeConnectionTypes.AiTool,
        1
      );
      const toolsUsedInLatestRun = toolsAvailable.filter(
        (tool) => !!workflowRunData.value?.[tool]?.[props.runIndex]
      );
      if (toolsAvailable.length > 0 && toolsUsedInLatestRun.length === 0) {
        return i18n.baseText("ndv.output.noToolUsedInfo");
      } else {
        return void 0;
      }
    });
    const isNDVV2 = computed(
      () => posthogStore.isVariantEnabled(
        NDV_UI_OVERHAUL_EXPERIMENT.name,
        NDV_UI_OVERHAUL_EXPERIMENT.variant
      )
    );
    const insertTestData = () => {
      if (!runDataRef.value) return;
      runDataRef.value.enterEditMode({
        origin: "insertTestDataLink"
      });
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        node_type: node.value?.type,
        pane: "output",
        type: "insert-test-data"
      });
    };
    const onLinkRun = () => {
      emit("linkRun");
    };
    const onUnlinkRun = () => {
      emit("unlinkRun");
    };
    const openSettings = () => {
      emit("openSettings");
      telemetry.track("User clicked ndv link", {
        node_type: node.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: "output",
        type: "settings"
      });
    };
    const onRunIndexChange = (run) => {
      emit("runChange", run);
    };
    onMounted(() => {
      outputMode.value = defaultOutputMode.value;
    });
    watch(defaultOutputMode, (newValue, oldValue) => {
      if (newValue === OUTPUT_TYPE.LOGS && oldValue === OUTPUT_TYPE.REGULAR && hasNodeRun.value) {
        outputMode.value = defaultOutputMode.value;
      }
    });
    const activatePane = () => {
      emit("activatePane");
    };
    function handleChangeCollapsingColumn(columnName) {
      collapsingColumnName.value = columnName;
    }
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(RunData, {
        ref_key: "runDataRef",
        ref: runDataRef,
        class: normalizeClass([_ctx.$style.runData, { [_ctx.$style.runDataV2]: isNDVV2.value }]),
        node: node.value,
        "workflow-object": _ctx.workflowObject,
        "run-index": _ctx.runIndex,
        "linked-runs": _ctx.linkedRuns,
        "can-link-runs": _ctx.canLinkRuns,
        "too-much-data-title": unref(i18n).baseText("ndv.output.tooMuchData.title"),
        "no-data-in-branch-message": unref(i18n).baseText("ndv.output.noOutputDataInBranch"),
        "is-executing": isNodeRunning.value,
        "executing-message": unref(i18n).baseText("ndv.output.executing"),
        "push-ref": _ctx.pushRef,
        "block-u-i": _ctx.blockUI,
        "is-production-execution-preview": _ctx.isProductionExecutionPreview,
        "search-shortcut": _ctx.isPaneActive ? "/" : void 0,
        "hide-pagination": outputMode.value === "logs",
        "pane-type": "output",
        "data-output-type": outputMode.value,
        "callout-message": allToolsWereUnusedNotice.value,
        "display-mode": _ctx.displayMode,
        "disable-ai-content": true,
        "collapsing-table-column-name": collapsingColumnName.value,
        "data-test-id": "ndv-output-panel",
        onActivatePane: activatePane,
        onRunChange: onRunIndexChange,
        onLinkRun,
        onUnlinkRun,
        onTableMounted: _cache[2] || (_cache[2] = ($event) => emit("tableMounted", $event)),
        onItemHover: _cache[3] || (_cache[3] = ($event) => emit("itemHover", $event)),
        onSearch: _cache[4] || (_cache[4] = ($event) => emit("search", $event)),
        onDisplayModeChange: _cache[5] || (_cache[5] = ($event) => emit("displayModeChange", $event)),
        onCollapsingTableColumnChanged: handleChangeCollapsingColumn
      }, createSlots({
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([_ctx.$style.titleSection, { [_ctx.$style.titleSectionV2]: isNDVV2.value }])
          }, [
            hasAiMetadata.value ? (openBlock(), createBlock(unref(N8nRadioButtons), {
              key: 0,
              modelValue: outputMode.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => outputMode.value = $event),
              "data-test-id": "ai-output-mode-select",
              options: outputTypes.value
            }, null, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass([_ctx.$style.title, { [_ctx.$style.titleV2]: isNDVV2.value }])
            }, toDisplayString(unref(i18n).baseText(outputPanelEditMode.value.enabled ? "ndv.output.edit" : "ndv.output")), 3)),
            unref(hasNodeRun) && !unref(pinnedData).hasData.value && (runsCount.value === 1 || runsCount.value > 0 && staleData.value) ? withDirectives((openBlock(), createBlock(RunInfo, {
              key: 2,
              "task-data": runTaskData.value,
              "has-stale-data": staleData.value,
              "has-pin-data": unref(pinnedData).hasData.value
            }, null, 8, ["task-data", "has-stale-data", "has-pin-data"])), [
              [vShow, !outputPanelEditMode.value.enabled]
            ]) : createCommentVNode("", true)
          ], 2)
        ]),
        "node-not-run": withCtx(() => [
          isNDVV2.value ? (openBlock(), createBlock(NDVEmptyState, {
            key: 0,
            title: unref(i18n).baseText(
              isTriggerNode.value ? "ndv.output.noOutputData.trigger.title" : "ndv.output.noOutputData.v2.title"
            )
          }, createSlots({
            default: withCtx(() => [
              createVNode(unref(I18nT), {
                tag: "span",
                keypath: unref(isSubNodeType) ? "ndv.output.runNodeHintSubNode" : "ndv.output.noOutputData.v2.description",
                scope: "global"
              }, {
                link: withCtx(() => [
                  createVNode(_sfc_main$d, {
                    "hide-icon": "",
                    transparent: "",
                    type: "secondary",
                    "node-name": unref(activeNode)?.name ?? "",
                    label: unref(i18n).baseText(
                      isTriggerNode.value ? "ndv.output.noOutputData.trigger.action" : "ndv.output.noOutputData.v2.action"
                    ),
                    "telemetry-source": "inputs",
                    onExecute: _cache[1] || (_cache[1] = ($event) => emit("execute"))
                  }, null, 8, ["node-name", "label"]),
                  _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1))
                ]),
                _: 1
              }, 8, ["keypath"])
            ]),
            _: 2
          }, [
            isTriggerNode.value ? {
              name: "icon",
              fn: withCtx(() => [
                _cache[6] || (_cache[6] = createBaseVNode("svg", {
                  width: "16",
                  viewBox: "0 0 14 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createBaseVNode("path", {
                    d: "M10.9062 2.40625L8.5 8.03125H12C12.4062 8.03125 12.7812 8.28125 12.9375 8.65625C13.0625 9.0625 12.9688 9.5 12.6562 9.78125L4.65625 16.7812C4.28125 17.0625 3.78125 17.0938 3.40625 16.8125C3.03125 16.5625 2.875 16.0625 3.0625 15.625L5.46875 10H2C1.5625 10 1.1875 9.75 1.0625 9.375C0.90625 8.96875 1 8.53125 1.3125 8.25L9.3125 1.25C9.6875 0.96875 10.1875 0.9375 10.5625 1.21875C10.9375 1.46875 11.0938 1.96875 10.9062 2.40625Z",
                    fill: "currentColor"
                  })
                ], -1))
              ]),
              key: "0"
            } : {
              name: "icon",
              fn: withCtx(() => [
                createVNode(unref(N8nIcon), {
                  icon: "arrow-right-from-line",
                  size: "xlarge"
                })
              ]),
              key: "1"
            }
          ]), 1032, ["title"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            workflowRunning.value && !isTriggerNode.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.spinner)
              }, [
                createVNode(unref(_sfc_main$e), { type: "ring" })
              ], 2),
              createVNode(unref(N8nText), null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitingToRun")), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            !workflowRunning.value ? (openBlock(), createBlock(unref(N8nText), {
              key: 1,
              "data-test-id": "ndv-output-run-node-hint"
            }, {
              default: withCtx(() => [
                unref(isSubNodeType) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHintSubNode")), 1)
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHint")) + " ", 1),
                  canPinData.value ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    onClick: insertTestData
                  }, [
                    _cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1)),
                    createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.or")) + " ", 1),
                    createVNode(unref(N8nText), {
                      tag: "a",
                      size: "medium",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.insertTestData")), 1)
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ], 64))
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ], 64))
        ]),
        "node-waiting": withCtx(() => [
          createVNode(NDVEmptyState, {
            title: unref(i18n).baseText("ndv.output.waitNodeWaiting.title"),
            wide: ""
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("span", null, null, 512), [
                [_directive_n8n_html, unref(waitingNodeTooltip)(node.value)]
              ])
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        "no-output-data": withCtx(() => [
          createVNode(NDVEmptyState, {
            title: unref(i18n).baseText("ndv.output.noOutputData.title")
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message")) + " ", 1),
              createBaseVNode("a", { onClick: openSettings }, toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settings")), 1),
              createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settingsOption")), 1)
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        "recovered-artificial-output-data": withCtx(() => [
          createVNode(NDVEmptyState, {
            title: unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeTitle")
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeMessage")), 1)
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        _: 2
      }, [
        outputMode.value === "logs" && node.value ? {
          name: "content",
          fn: withCtx(() => [
            createVNode(RunDataAi, {
              node: node.value,
              "run-index": _ctx.runIndex,
              "workflow-object": _ctx.workflowObject
            }, null, 8, ["node", "run-index", "workflow-object"])
          ]),
          key: "0"
        } : void 0,
        !unref(pinnedData).hasData.value && runsCount.value > 1 ? {
          name: "run-info",
          fn: withCtx(() => [
            createVNode(RunInfo, { "task-data": runTaskData.value }, null, 8, ["task-data"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "node", "workflow-object", "run-index", "linked-runs", "can-link-runs", "too-much-data-title", "no-data-in-branch-message", "is-executing", "executing-message", "push-ref", "block-u-i", "is-production-execution-preview", "search-shortcut", "hide-pagination", "data-output-type", "callout-message", "display-mode", "collapsing-table-column-name"]);
    };
  }
});
const runData = "_runData_1lxlh_128";
const runDataV2 = "_runDataV2_1lxlh_132";
const outputTypeSelect = "_outputTypeSelect_1lxlh_136";
const titleSection = "_titleSection_1lxlh_141";
const titleSectionV2 = "_titleSectionV2_1lxlh_149";
const title = "_title_1lxlh_141";
const titleV2 = "_titleV2_1lxlh_161";
const noOutputData = "_noOutputData_1lxlh_166";
const link = "_link_1lxlh_176";
const spinner = "_spinner_1lxlh_183";
const style0$1 = {
  runData,
  runDataV2,
  outputTypeSelect,
  titleSection,
  titleSectionV2,
  title,
  titleV2,
  noOutputData,
  link,
  spinner
};
const cssModules$1 = {
  "$style": style0$1
};
const OutputPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { key: "empty" };
const _hoisted_2 = {
  key: "listening",
  "data-test-id": "trigger-listening"
};
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: "default" };
const _hoisted_7 = {
  key: 0,
  class: "mb-xl"
};
const _hoisted_8 = ["textContent"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TriggerPanel",
  props: {
    nodeName: {},
    pushRef: { default: "" }
  },
  emits: ["activate", "execute"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nodesTypeStore = useNodeTypesStore();
    const uiStore = useUIStore();
    const workflowsStore = useWorkflowsStore();
    const ndvStore = useNDVStore();
    const router = useRouter();
    const workflowHelpers = useWorkflowHelpers();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const executionsHelpEventBus = createEventBus();
    const help = ref(null);
    const node = computed(() => workflowsStore.getNodeByName(props.nodeName));
    const nodeType = computed(() => {
      if (node.value) {
        return nodesTypeStore.getNodeType(node.value.type, node.value.typeVersion);
      }
      return null;
    });
    const triggerPanel = computed(() => {
      const panel = nodeType.value?.triggerPanel;
      if (isTriggerPanelObject(panel)) {
        return panel;
      }
      return void 0;
    });
    const hideContent = computed(() => {
      const hideContent2 = triggerPanel.value?.hideContent;
      if (typeof hideContent2 === "boolean") {
        return hideContent2;
      }
      if (node.value) {
        const hideContentValue = workflowsStore.workflowObject.expression.getSimpleParameterValue(
          node.value,
          hideContent2,
          "internal",
          {}
        );
        if (typeof hideContentValue === "boolean") {
          return hideContentValue;
        }
      }
      return false;
    });
    const hasIssues = computed(() => {
      return Boolean(
        node.value?.issues && (node.value.issues.parameters ?? node.value.issues.credentials)
      );
    });
    const serviceName = computed(() => {
      if (nodeType.value) {
        return getTriggerNodeServiceName(nodeType.value);
      }
      return "";
    });
    const displayChatButton = computed(() => {
      return Boolean(
        node.value && node.value.type === CHAT_TRIGGER_NODE_TYPE && node.value.parameters.mode !== "webhook"
      );
    });
    const isWebhookNode = computed(() => {
      return Boolean(node.value && node.value.type === WEBHOOK_NODE_TYPE);
    });
    const webhookHttpMethod = computed(() => {
      if (!node.value || !nodeType.value?.webhooks?.length) {
        return void 0;
      }
      const httpMethod = workflowHelpers.getWebhookExpressionValue(
        nodeType.value.webhooks[0],
        "httpMethod",
        false
      );
      if (Array.isArray(httpMethod)) {
        return httpMethod.join(", ");
      }
      return httpMethod;
    });
    const webhookTestUrl = computed(() => {
      if (!node.value || !nodeType.value?.webhooks?.length) {
        return void 0;
      }
      return workflowHelpers.getWebhookUrl(nodeType.value.webhooks[0], node.value, "test");
    });
    const isWebhookBasedNode = computed(() => {
      return Boolean(nodeType.value?.webhooks?.length);
    });
    const isPollingNode = computed(() => {
      return Boolean(nodeType.value?.polling);
    });
    const isListeningForEvents = computed(() => {
      if (!node.value || node.value.disabled || !isWebhookBasedNode.value) {
        return false;
      }
      if (!workflowsStore.executionWaitingForWebhook) {
        return false;
      }
      const executedNode = workflowsStore.executedNode;
      const isCurrentNodeExecuted = executedNode === props.nodeName;
      const isChildNodeExecuted = executedNode ? workflowsStore.workflowObject.getParentNodes(executedNode).includes(props.nodeName) : false;
      return !executedNode || isCurrentNodeExecuted || isChildNodeExecuted;
    });
    const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const isActivelyPolling = computed(() => {
      const triggeredNode = workflowsStore.executedNode;
      return workflowRunning.value && isPollingNode.value && props.nodeName === triggeredNode;
    });
    const isWorkflowActive = computed(() => {
      return workflowsStore.isWorkflowActive;
    });
    const listeningTitle = computed(() => {
      return nodeType.value?.name === FORM_TRIGGER_NODE_TYPE ? i18n.baseText("ndv.trigger.webhookNode.formTrigger.listening") : i18n.baseText("ndv.trigger.webhookNode.listening");
    });
    const listeningHint = computed(() => {
      switch (nodeType.value?.name) {
        case CHAT_TRIGGER_NODE_TYPE:
          return i18n.baseText("ndv.trigger.webhookBasedNode.chatTrigger.serviceHint");
        case FORM_TRIGGER_NODE_TYPE:
          return i18n.baseText("ndv.trigger.webhookBasedNode.formTrigger.serviceHint");
        default:
          return i18n.baseText("ndv.trigger.webhookBasedNode.serviceHint", {
            interpolate: { service: serviceName.value }
          });
      }
    });
    const header2 = computed(() => {
      if (isActivelyPolling.value) {
        return i18n.baseText("ndv.trigger.pollingNode.fetchingEvent");
      }
      if (triggerPanel.value?.header) {
        return triggerPanel.value.header;
      }
      if (isWebhookBasedNode.value) {
        return i18n.baseText("ndv.trigger.webhookBasedNode.action", {
          interpolate: { name: serviceName.value }
        });
      }
      return "";
    });
    const subheader = computed(() => {
      if (isActivelyPolling.value) {
        return i18n.baseText("ndv.trigger.pollingNode.fetchingHint", {
          interpolate: { name: serviceName.value }
        });
      }
      return "";
    });
    const executionsHelp = computed(() => {
      if (triggerPanel.value?.executionsHelp) {
        if (typeof triggerPanel.value.executionsHelp === "string") {
          return triggerPanel.value.executionsHelp;
        }
        if (!isWorkflowActive.value && triggerPanel.value.executionsHelp.inactive) {
          return triggerPanel.value.executionsHelp.inactive;
        }
        if (isWorkflowActive.value && triggerPanel.value.executionsHelp.active) {
          return triggerPanel.value.executionsHelp.active;
        }
      }
      if (isWebhookBasedNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      if (isPollingNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      return "";
    });
    const activationHint = computed(() => {
      if (isActivelyPolling.value || !triggerPanel.value) {
        return "";
      }
      if (triggerPanel.value.activationHint) {
        if (typeof triggerPanel.value.activationHint === "string") {
          return triggerPanel.value.activationHint;
        }
        if (!isWorkflowActive.value && typeof triggerPanel.value.activationHint.inactive === "string") {
          return triggerPanel.value.activationHint.inactive;
        }
        if (isWorkflowActive.value && typeof triggerPanel.value.activationHint.active === "string") {
          return triggerPanel.value.activationHint.active;
        }
      }
      if (isWebhookBasedNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      if (isPollingNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.pollingNode.activationHint.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.pollingNode.activationHint.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      return "";
    });
    const expandExecutionHelp = () => {
      if (help.value) {
        executionsHelpEventBus.emit("expand");
      }
    };
    const openWebhookUrl = () => {
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: "input",
        type: "open-chat"
      });
      window.open(webhookTestUrl.value, "_blank", "noreferrer");
    };
    const onLinkClick = (e) => {
      if (!e.target) {
        return;
      }
      const target = e.target;
      if (target.localName !== "a") return;
      if (target.dataset?.key) {
        e.stopPropagation();
        e.preventDefault();
        if (target.dataset.key === "activate") {
          emit("activate");
        } else if (target.dataset.key === "executions") {
          telemetry.track("User clicked ndv link", {
            workflow_id: workflowsStore.workflowId,
            push_ref: props.pushRef,
            pane: "input",
            type: "open-executions-log"
          });
          ndvStore.unsetActiveNodeName();
          void router.push({
            name: VIEWS.EXECUTIONS
          });
        } else if (target.dataset.key === "settings") {
          uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
        }
      }
    };
    const onTestLinkCopied = () => {
      telemetry.track("User copied webhook URL", {
        pane: "inputs",
        type: "test url"
      });
    };
    const onNodeExecute = () => {
      emit("execute");
    };
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(Transition, {
          name: "fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            hasIssues.value || hideContent.value ? (openBlock(), createElementBlock("div", _hoisted_1)) : isListeningForEvents.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(unref(N8nPulse), null, {
                default: withCtx(() => [
                  createVNode(NodeIcon, {
                    "node-type": nodeType.value,
                    size: 40
                  }, null, 8, ["node-type"])
                ]),
                _: 1
              }),
              isWebhookNode.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(unref(N8nText), {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.listening")), 1)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [
                  createVNode(unref(N8nText), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.requestHint", {
                        interpolate: { type: webhookHttpMethod.value ?? "" }
                      })), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                createVNode(CopyInput, {
                  value: webhookTestUrl.value,
                  "toast-title": unref(i18n).baseText("ndv.trigger.copiedTestUrl"),
                  class: "mb-2xl",
                  size: "medium",
                  collapse: true,
                  "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                  onCopy: onTestLinkCopied
                }, null, 8, ["value", "toast-title", "copy-button-text"]),
                createVNode(_sfc_main$d, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
                createVNode(unref(N8nText), {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(listeningTitle.value), 1)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [
                  createVNode(unref(N8nText), { tag: "div" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(listeningHint.value), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                displayChatButton.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  createVNode(unref(N8nButton), {
                    class: "mb-xl",
                    onClick: _cache[0] || (_cache[0] = ($event) => openWebhookUrl())
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.chatTrigger.openChat")), 1)
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode(_sfc_main$d, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ]))
            ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
              isActivelyPolling.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(unref(_sfc_main$e), { type: "ring" })
              ])) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.action)
              }, [
                createBaseVNode("div", {
                  "data-test-id": "trigger-header",
                  class: normalizeClass(_ctx.$style.header)
                }, [
                  header2.value ? (openBlock(), createBlock(unref(N8nHeading), {
                    key: 0,
                    tag: "h1",
                    bold: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(header2.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  subheader.value ? (openBlock(), createBlock(unref(N8nText), { key: 1 }, {
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        textContent: toDisplayString(subheader.value)
                      }, null, 8, _hoisted_8)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ], 2),
                createVNode(_sfc_main$d, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ], 2),
              activationHint.value ? (openBlock(), createBlock(unref(N8nText), {
                key: 1,
                size: "small",
                onClick: onLinkClick
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("span", null, null, 512), [
                    [_directive_n8n_html, activationHint.value]
                  ]),
                  _cache[1] || (_cache[1] = createTextVNode("  "))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              activationHint.value && executionsHelp.value ? (openBlock(), createBlock(unref(N8nLink), {
                key: 2,
                size: "small",
                onClick: expandExecutionHelp
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.moreInfo")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              executionsHelp.value ? (openBlock(), createBlock(unref(N8nInfoAccordion), {
                key: 3,
                ref_key: "help",
                ref: help,
                class: normalizeClass(_ctx.$style.accordion),
                title: unref(i18n).baseText("ndv.trigger.executionsHint.question"),
                description: executionsHelp.value,
                "event-bus": unref(executionsHelpEventBus),
                "onClick:body": onLinkClick
              }, null, 8, ["class", "title", "description", "event-bus"])) : createCommentVNode("", true)
            ]))
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const container = "_container_1mcl9_123";
const header = "_header_1mcl9_140";
const action = "_action_1mcl9_147";
const shake = "_shake_1mcl9_151";
const accordion = "_accordion_1mcl9_172";
const style0 = {
  container,
  header,
  action,
  shake,
  accordion
};
const cssModules = {
  "$style": style0
};
const TriggerPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-1595498e"]]);
export {
  NDVFloatingNodes as N,
  OutputPanel as O,
  TriggerPanel as T
};

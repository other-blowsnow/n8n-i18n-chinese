import { fA as require_arrayMap, fB as require_baseIteratee, fC as require_basePickBy, fD as require_getAllKeysIn, bR as getDefaultExportFromCjs } from "./index-BpAvaLtl.js";
var pickBy_1;
var hasRequiredPickBy;
function requirePickBy() {
  if (hasRequiredPickBy) return pickBy_1;
  hasRequiredPickBy = 1;
  var arrayMap = require_arrayMap(), baseIteratee = require_baseIteratee(), basePickBy = require_basePickBy(), getAllKeysIn = require_getAllKeysIn();
  function pickBy2(object, predicate) {
    if (object == null) {
      return {};
    }
    var props = arrayMap(getAllKeysIn(object), function(prop) {
      return [prop];
    });
    predicate = baseIteratee(predicate);
    return basePickBy(object, props, function(value, path) {
      return predicate(value, path[0]);
    });
  }
  pickBy_1 = pickBy2;
  return pickBy_1;
}
var pickByExports = requirePickBy();
const pickBy = /* @__PURE__ */ getDefaultExportFromCjs(pickByExports);
export {
  pickBy as p
};

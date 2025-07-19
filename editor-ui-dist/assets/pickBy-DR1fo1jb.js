import { gV as require_arrayMap, gW as require_baseIteratee, gX as require_basePickBy, gY as require_getAllKeysIn, bL as getDefaultExportFromCjs } from "./index-lYG7K1rT.js";
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

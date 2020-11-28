var __defineProperty = Object.defineProperty;
var __markAsModule = (target) => {
  return __defineProperty(target, "__esModule", {value: true});
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defineProperty(target, name, {get: all[name], enumerable: true});
};
__export(exports, {
  PIPELINE_RESULT_TYPES: () => PIPELINE_RESULT_TYPES,
  evaluate_code: () => evaluate_code,
  make_require: () => make_require,
  validate_code: () => validate_code
});
var PIPELINE_RESULT_TYPES;
(function(PIPELINE_RESULT_TYPES2) {
  PIPELINE_RESULT_TYPES2["error"] = "RESULT_ERROR";
  PIPELINE_RESULT_TYPES2["success"] = "RESULT_SUCCESS";
})(PIPELINE_RESULT_TYPES || (PIPELINE_RESULT_TYPES = {}));
function evaluate_code(script, context) {
  const keys = Object.keys(context);
  const values = Object.values(context);
  const module2 = {exports: {}};
  Object.seal(module2);
  const func = new Function(...keys, "module", "exports", `return (function () {
        "use strict";
        ${script}
})`)(...values, module2, module2.exports);
  func();
  return module2;
}
function make_require(imports = {}) {
  return (name) => {
    if (name in imports)
      return imports[name];
    throw new ReferenceError("bad argument #0 to 'require' (module '${name}' not found)");
  };
}
function validate_code(script) {
  try {
    new Function(script);
  } catch (err) {
    return [false, err.message];
  }
  return [true];
}
//# sourceMappingURL=pipeline.js.map

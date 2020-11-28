var PIPELINE_RESULT_TYPES;
(function(PIPELINE_RESULT_TYPES2) {
  PIPELINE_RESULT_TYPES2["error"] = "RESULT_ERROR";
  PIPELINE_RESULT_TYPES2["success"] = "RESULT_SUCCESS";
})(PIPELINE_RESULT_TYPES || (PIPELINE_RESULT_TYPES = {}));
function evaluate_code(script, context) {
  const keys = Object.keys(context);
  const values = Object.values(context);
  const module = {exports: {}};
  Object.seal(module);
  const func = new Function(...keys, "module", "exports", `return (function () {
        "use strict";
        ${script}
})`)(...values, module, module.exports);
  func();
  return module;
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
export {
  PIPELINE_RESULT_TYPES,
  evaluate_code,
  make_require,
  validate_code
};
//# sourceMappingURL=pipeline.js.map

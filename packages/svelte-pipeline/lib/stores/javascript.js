var __defineProperty = Object.defineProperty;
var __hasOwnProperty = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => {
  return __defineProperty(target, "__esModule", {value: true});
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defineProperty(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2) => {
  __markAsModule(target);
  if (typeof module2 === "object" || typeof module2 === "function") {
    for (let key in module2)
      if (!__hasOwnProperty.call(target, key) && key !== "default")
        __defineProperty(target, key, {get: () => module2[key], enumerable: true});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defineProperty({}, "default", {value: module2, enumerable: true}), module2);
};
__export(exports, {
  PIPELINE_JAVASCRIPT_CONTEXT: () => PIPELINE_JAVASCRIPT_CONTEXT,
  PIPELINE_JAVASCRIPT_IMPORTS: () => PIPELINE_JAVASCRIPT_IMPORTS,
  pipeline_javascript: () => pipeline_javascript
});
const store = __toModule(require("svelte/store"));
const pipeline = __toModule(require("./pipeline"));
const PIPELINE_JAVASCRIPT_CONTEXT = {};
const PIPELINE_JAVASCRIPT_IMPORTS = {};
function PipelineOptions(options = {}) {
  const {context = {}, imports = {}} = options;
  const require2 = pipeline.make_require({...PIPELINE_JAVASCRIPT_IMPORTS, ...imports});
  return {
    imports: {},
    context: {
      ...PIPELINE_JAVASCRIPT_CONTEXT,
      ...context,
      require: require2
    }
  };
}
function pipeline_javascript(options) {
  const {context} = PipelineOptions(options);
  const writable_store = store.writable("");
  const derived_store = store.derived(writable_store, (script) => {
    if (!script)
      return null;
    const [validated, message] = pipeline.validate_code(script);
    if (!validated)
      return {message, type: pipeline.PIPELINE_RESULT_TYPES.error};
    const module2 = pipeline.evaluate_code(script, context);
    return {module: module2, type: pipeline.PIPELINE_RESULT_TYPES.success};
  });
  return {
    set: writable_store.set,
    subscribe: derived_store.subscribe,
    update: writable_store.update
  };
}
//# sourceMappingURL=javascript.js.map

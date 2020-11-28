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
  pipeline_svelte: () => pipeline_svelte
});
const svelte = __toModule(require("svelte"));
const compiler = __toModule(require("svelte/compiler"));
const svelte_internal = __toModule(require("svelte/internal"));
const svelte_store = __toModule(require("svelte/store"));
const pipeline = __toModule(require("./pipeline"));
const javascript = __toModule(require("./javascript"));
const {
  onDestroy,
  onMount,
  afterUpdate,
  beforeUpdate,
  createEventDispatcher,
  getContext,
  setContext,
  tick
} = svelte;
const {derived, readable, writable} = svelte_store;
const PIPELINE_SVELTE_CONTEXT = {
  ...javascript.PIPELINE_JAVASCRIPT_CONTEXT,
  onMount,
  onDestroy,
  createEventDispatcher,
  afterUpdate,
  beforeUpdate,
  derived,
  getContext,
  readable,
  setContext,
  tick,
  writable
};
const PIPELINE_SVELTE_IMPORTS = {
  ...javascript.PIPELINE_JAVASCRIPT_IMPORTS,
  svelte,
  "svelte/internal": svelte_internal,
  "svelte/store": svelte_store
};
function PipelineSvelteOptions(options = {}) {
  const {compiler: compiler2 = {}, context = {}, imports = {}} = options;
  const require2 = pipeline.make_require({...PIPELINE_SVELTE_IMPORTS, ...imports});
  return {
    imports: {},
    compiler: {
      ...compiler2,
      format: "cjs"
    },
    context: {
      ...PIPELINE_SVELTE_CONTEXT,
      ...context,
      require: require2
    }
  };
}
function pipeline_svelte(options) {
  const {compiler: compiler2, context} = PipelineSvelteOptions(options);
  const writable_store = writable("");
  const derived_store = derived(writable_store, (script) => {
    if (!script)
      return null;
    const {css, js} = compiler.compile(script, compiler2);
    const [validated, message] = pipeline.validate_code(js.code);
    if (!validated)
      return {message, type: pipeline.PIPELINE_RESULT_TYPES.error};
    const module2 = pipeline.evaluate_code(js.code, context);
    return {
      module: module2,
      stylesheet: css.code,
      type: pipeline.PIPELINE_RESULT_TYPES.success
    };
  });
  return {
    set: writable_store.set,
    subscribe: derived_store.subscribe,
    update: writable_store.update
  };
}
//# sourceMappingURL=svelte.js.map

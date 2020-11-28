import * as svelte from "svelte";
import {compile} from "svelte/compiler";
import * as svelte_internal from "svelte/internal";
import * as svelte_store from "svelte/store";
import {PIPELINE_RESULT_TYPES, evaluate_code, make_require, validate_code} from "./pipeline";
import {PIPELINE_JAVASCRIPT_CONTEXT, PIPELINE_JAVASCRIPT_IMPORTS} from "./javascript";
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
  ...PIPELINE_JAVASCRIPT_CONTEXT,
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
  ...PIPELINE_JAVASCRIPT_IMPORTS,
  svelte,
  "svelte/internal": svelte_internal,
  "svelte/store": svelte_store
};
function PipelineSvelteOptions(options = {}) {
  const {compiler: compiler2 = {}, context = {}, imports = {}} = options;
  const require2 = make_require({...PIPELINE_SVELTE_IMPORTS, ...imports});
  return {
    imports: {},
    compiler: {
      ...compiler2,
      css: false,
      format: "cjs"
    },
    context: {
      ...PIPELINE_SVELTE_CONTEXT,
      ...context,
      require: require2
    }
  };
}
function validate_svelte(script) {
  try {
    compile(script, {
      css: false,
      format: "cjs",
      generate: false
    });
  } catch (err) {
    return [false, err.message];
  }
  return [true];
}
function pipeline_svelte(options) {
  const {compiler: compiler2, context} = PipelineSvelteOptions(options);
  const writable_store = writable("");
  const derived_store = derived(writable_store, (script) => {
    if (!script)
      return null;
    let [validated, message] = validate_svelte(script);
    if (!validated)
      return {message, type: PIPELINE_RESULT_TYPES.error};
    const {css, js} = compile(script, compiler2);
    [validated, message] = validate_code(js.code);
    if (!validated)
      return {message, type: PIPELINE_RESULT_TYPES.error};
    const module = evaluate_code(js.code, context);
    return {
      module,
      stylesheet: css.code,
      type: PIPELINE_RESULT_TYPES.success
    };
  });
  return {
    set: writable_store.set,
    subscribe: derived_store.subscribe,
    update: writable_store.update
  };
}
export {
  pipeline_svelte,
  validate_svelte
};
//# sourceMappingURL=svelte.js.map

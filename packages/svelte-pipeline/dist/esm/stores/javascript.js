import {derived, writable} from "svelte/store";
import {PIPELINE_RESULT_TYPES, evaluate_code, make_require, validate_code} from "./pipeline";
const PIPELINE_JAVASCRIPT_CONTEXT = {};
const PIPELINE_JAVASCRIPT_IMPORTS = {};
function PipelineOptions(options = {}) {
  const {context = {}, imports = {}} = options;
  const require2 = make_require({...PIPELINE_JAVASCRIPT_IMPORTS, ...imports});
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
  const writable_store = writable("");
  const derived_store = derived(writable_store, (script) => {
    if (!script)
      return null;
    const [validated, message] = validate_code(script);
    if (!validated)
      return {message, type: PIPELINE_RESULT_TYPES.error};
    const module = evaluate_code(script, context);
    return {module, type: PIPELINE_RESULT_TYPES.success};
  });
  return {
    set: writable_store.set,
    subscribe: derived_store.subscribe,
    update: writable_store.update
  };
}
export {
  PIPELINE_JAVASCRIPT_CONTEXT,
  PIPELINE_JAVASCRIPT_IMPORTS,
  pipeline_javascript
};
//# sourceMappingURL=javascript.js.map

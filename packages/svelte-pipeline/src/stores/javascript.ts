import {derived, writable} from "svelte/store";

import type {
    IPipelineContext,
    IPipelineError,
    IPipelineImports,
    IPipelineModule,
    IPipelineOptions,
    IPipelineStore,
    IPipelineSuccess,
} from "./pipeline";
import {PIPELINE_RESULT_TYPES, evaluate_code, make_require, validate_code} from "./pipeline";

type IJavascriptExport = {[key: string]: any};

export interface IPipelineJavascriptModule extends IPipelineModule<IJavascriptExport> {}

export interface IPipelineJavascriptOptions extends IPipelineOptions {}

export interface IPipelineJavascriptSuccess extends IPipelineSuccess<IJavascriptExport> {}

export interface IPipelineJavascriptStore extends IPipelineStore<IJavascriptExport> {}

export const PIPELINE_JAVASCRIPT_CONTEXT: IPipelineContext = {};

export const PIPELINE_JAVASCRIPT_IMPORTS: IPipelineImports = {};

function PipelineOptions(options: Partial<IPipelineOptions> = {}): IPipelineOptions {
    const {context = {}, imports = {}} = options;
    const require = make_require({...PIPELINE_JAVASCRIPT_IMPORTS, ...imports});

    return {
        imports: {},
        context: {
            ...PIPELINE_JAVASCRIPT_CONTEXT,
            ...context,
            require,
        },
    };
}

export function pipeline_javascript(options?: Partial<IPipelineOptions>): IPipelineJavascriptStore {
    const {context} = PipelineOptions(options);
    const writable_store = writable<string>("");

    const derived_store = derived(writable_store, (script: string) => {
        if (!script) return null;

        const [validated, message] = validate_code(script);
        if (!validated) return {message, type: PIPELINE_RESULT_TYPES.error} as IPipelineError;

        const module = evaluate_code(script, context);
        return {module, type: PIPELINE_RESULT_TYPES.success} as IPipelineJavascriptSuccess;
    });

    return {
        set: writable_store.set,
        subscribe: derived_store.subscribe,
        update: writable_store.update,
    };
}

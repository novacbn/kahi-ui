import * as svelte from "svelte";
import type {SvelteComponent} from "svelte";
import type {CompileOptions} from "svelte/types/compiler/interfaces";

import {compile} from "svelte/compiler";
import * as svelte_internal from "svelte/internal";

import * as svelte_store from "svelte/store";

import type {
    IPipelineContext,
    IPipelineError,
    IPipelineImports,
    IPipelineModule,
    IPipelineSuccess,
    IPipelineStore,
    IPipelineOptions,
} from "./pipeline";
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
    tick,
} = svelte;

const {derived, readable, writable} = svelte_store;

type ISvelteExport = {[key: string]: any; default: SvelteComponent};

export interface IPipelineSvelteModule extends IPipelineModule<ISvelteExport> {}

export interface IPipelineSvelteOptions extends IPipelineOptions {
    compiler: CompileOptions;
}

export interface IPipelineSvelteSuccess extends IPipelineSuccess<ISvelteExport> {
    stylesheet: string;
}

export interface IPipelineSvelteStore extends IPipelineStore<ISvelteExport> {}

const PIPELINE_SVELTE_CONTEXT: IPipelineContext = {
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
    writable,
};

const PIPELINE_SVELTE_IMPORTS: IPipelineImports = {
    ...PIPELINE_JAVASCRIPT_IMPORTS,
    svelte: svelte,
    "svelte/internal": svelte_internal,
    "svelte/store": svelte_store,
};

// TODO: meh, repeated code
function PipelineSvelteOptions(
    options: Partial<IPipelineSvelteOptions> = {}
): IPipelineSvelteOptions {
    const {compiler = {}, context = {}, imports = {}} = options;
    const require = make_require({...PIPELINE_SVELTE_IMPORTS, ...imports});

    return {
        imports: {},
        compiler: {
            ...compiler,
            css: false,
            format: "cjs",
        },

        context: {
            ...PIPELINE_SVELTE_CONTEXT,
            ...context,
            require,
        },
    };
}

export function validate_svelte(script: string): [boolean, string?] {
    try {
        compile(script, {
            css: false,
            format: "cjs",
            generate: false,
        });
    } catch (err) {
        return [false, err.message];
    }

    return [true];
}

export function pipeline_svelte(options?: Partial<IPipelineSvelteOptions>): IPipelineSvelteStore {
    const {compiler, context} = PipelineSvelteOptions(options);
    const writable_store = writable<string>("");

    const derived_store = derived(writable_store, (script: string) => {
        if (!script) return null;

        let [validated, message] = validate_svelte(script);
        if (!validated) return {message, type: PIPELINE_RESULT_TYPES.error} as IPipelineError;

        const {css, js} = compile(script, compiler);

        [validated, message] = validate_code(js.code);
        if (!validated) return {message, type: PIPELINE_RESULT_TYPES.error} as IPipelineError;

        const module = evaluate_code(js.code, context);
        return {
            module,
            stylesheet: css.code,
            type: PIPELINE_RESULT_TYPES.success,
        } as IPipelineSvelteSuccess;
    });

    return {
        set: writable_store.set,
        subscribe: derived_store.subscribe,
        update: writable_store.update,
    };
}

import type {Readable} from "svelte/store";

export enum PIPELINE_RESULT_TYPES {
    error = "RESULT_ERROR",

    success = "RESULT_SUCCESS",
}

export type IPipelineEvalutated = () => any;

export type IPipelineRequire = (name: string) => any;

export type IPipelineUpdater = (value: string) => string;

export interface IPipelineContext {
    [key: string]: any;
}

export interface IPipelineImports {
    [key: string]: any;
}

export interface IPipelineModule<T = any> {
    exports: T;
}

export interface IPipelineOptions {
    context: IPipelineContext;

    imports: IPipelineImports;
}

export interface IPipelineResult {
    type: PIPELINE_RESULT_TYPES;
}

export interface IPipelineError extends IPipelineResult {
    message: string;

    type: PIPELINE_RESULT_TYPES.error;
}

export interface IPipelineSuccess<T> extends IPipelineResult {
    module: IPipelineModule<T>;

    type: PIPELINE_RESULT_TYPES.success;
}

// HACK: Since the `Writable` uses the `T` generic for I/O on `set` / `update`, we
// need to just redefine it here ourselves
export interface IPipelineStore<T> extends Readable<IPipelineError | IPipelineSuccess<T> | null> {
    set(value: string): void;

    update(updater: IPipelineUpdater): void;
}

export function evaluate_code<T = any>(
    script: string,
    context: IPipelineContext
): IPipelineModule<T> {
    const keys = Object.keys(context);
    const values = Object.values(context);

    // @ts-ignore
    const module: IPipelineModule<T> = {exports: {}};

    Object.seal(module);

    const func = new Function(
        ...keys,
        "module",
        "exports",
        `return (function () {
        "use strict";
        ${script}
})`
    )(...values, module, module.exports);

    func();
    return module;
}

export function make_require(imports: IPipelineImports = {}): IPipelineRequire {
    return (name) => {
        if (name in imports) return imports[name];
        throw new ReferenceError("bad argument #0 to 'require' (module '${name}' not found)");
    };
}

export function validate_code(script: string): [boolean, string?] {
    try {
        new Function(script);
    } catch (err) {
        return [false, err.message];
    }

    return [true];
}

import type { Readable } from "svelte/store";
export declare enum PIPELINE_RESULT_TYPES {
    error = "RESULT_ERROR",
    success = "RESULT_SUCCESS"
}
export declare type IPipelineEvalutated = () => any;
export declare type IPipelineRequire = (name: string) => any;
export declare type IPipelineUpdater = (value: string) => string;
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
export interface IPipelineStore<T> extends Readable<IPipelineError | IPipelineSuccess<T> | null> {
    set(value: string): void;
    update(updater: IPipelineUpdater): void;
}
export declare function evaluate_code<T = any>(script: string, context: IPipelineContext): IPipelineModule<T>;
export declare function make_require(imports?: IPipelineImports): IPipelineRequire;
export declare function validate_code(script: string): [boolean, string?];

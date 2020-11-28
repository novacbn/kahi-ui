import type { IPipelineContext, IPipelineImports, IPipelineModule, IPipelineOptions, IPipelineStore, IPipelineSuccess } from "./pipeline";
declare type IJavascriptExport = {
    [key: string]: any;
};
export interface IPipelineJavascriptModule extends IPipelineModule<IJavascriptExport> {
}
export interface IPipelineJavascriptOptions extends IPipelineOptions {
}
export interface IPipelineJavascriptSuccess extends IPipelineSuccess<IJavascriptExport> {
}
export interface IPipelineJavascriptStore extends IPipelineStore<IJavascriptExport> {
}
export declare const PIPELINE_JAVASCRIPT_CONTEXT: IPipelineContext;
export declare const PIPELINE_JAVASCRIPT_IMPORTS: IPipelineImports;
export declare function pipeline_javascript(options?: Partial<IPipelineOptions>): IPipelineJavascriptStore;
export {};

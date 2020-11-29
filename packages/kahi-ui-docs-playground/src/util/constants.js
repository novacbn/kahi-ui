import SAMPLE_BASIC from "../samples/basic";

export const STORAGE_NAMESPACE = import.meta.env.SNOWPACK_PUBLIC_STORAGE_NAMESPACE;

export const WORKSPACE_DIRECTORY = import.meta.env.SNOWPACK_PUBLIC_WORKSPACE_DIRECTORY;

export const WORKSPACE_RECENT = import.meta.env.SNOWPACK_PUBLIC_WORKSPACE_RECENT;

/**
 * TODO: Will probably do something more structured whenever sveltekit rolls around
 */

export const SCRIPT_SAMPLES = {
    basic: SAMPLE_BASIC,
};

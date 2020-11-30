import SAMPLE_BASIC from "../samples/basic";

export const STORAGE_NAMESPACE = import.meta.env.SNOWPACK_PUBLIC_STORAGE_NAMESPACE;

export const WORKSPACE_DATA = import.meta.env.SNOWPACK_PUBLIC_WORKSPACE_DATA;

export const WORKSPACE_DIRECTORY = import.meta.env.SNOWPACK_PUBLIC_WORKSPACE_DIRECTORY;

export const WORKSPACE_RECENT = import.meta.env.SNOWPACK_PUBLIC_WORKSPACE_RECENT;

export const PLAYGROUND_ROTATION = {
    horizontal: "ROTATION_HORIZONTAL",

    vertical: "ROTATION_VERTICAL",
};

export const PLAYGROUND_VIEWS = {
    code: "VIEW_CODE",

    preview: "VIEW_PREVIEW",

    split: "VIEW_SPLIT",
};

/**
 * TODO: Will probably do something more structured for samples whenever sveltekit rolls around
 */

export const SCRIPT_SAMPLES = {
    basic: SAMPLE_BASIC,
};

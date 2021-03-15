import META_MANIFEST from "../../.meta.js";

export const CONTENT_EXTENSION = import.meta.env.VITE_CONTENT_EXTENSION;

export const FRONTMATTER_FENCE = import.meta.env.VITE_FRONTMATTER_FENCE.split(",");

export const FRONTMATTER_LANGUAGE = import.meta.env.VITE_FRONTMATTER_LANGUAGE;

export const NAVIGATION_ASIDE = META_MANIFEST.aside ?? [];

export const NAVIGATION_OMNI = META_MANIFEST.omni ?? {center: [], right: []};

export const PATH_CONTENT = import.meta.env.VITE_PATH_CONTENT;

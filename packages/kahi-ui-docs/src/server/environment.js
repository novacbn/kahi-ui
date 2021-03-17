import {split_list} from "@kahi-ui/docs-kit/shared";

import META_MANIFEST from "../../.meta.js";

export const CONTENT_EXTENSION = import.meta.env.VITE_CONTENT_EXTENSION;

export const EDIT_URL = import.meta.env.VITE_EDIT_URL;

export const FRONTMATTER_FENCE = split_list(import.meta.env.VITE_FRONTMATTER_FENCE);

export const FRONTMATTER_SYNTAX = import.meta.env.VITE_FRONTMATTER_SYNTAX;

export const NAVIGATION_ASIDE = META_MANIFEST.aside ?? [];

export const NAVIGATION_OMNI = META_MANIFEST.omni ?? {center: [], right: []};

export const PATH_CONTENT = import.meta.env.VITE_PATH_CONTENT;

export const PATH_ROOT = import.meta.env.VITE_PATH_ROOT;

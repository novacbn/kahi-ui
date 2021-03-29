import {is_affirmative} from "@kahi-ui/docs-kit/shared";

export const CONTENT_INDEX = import.meta.env.VITE_CONTENT_INDEX;

export const CONTENT_ROUTE = import.meta.env.VITE_CONTENT_ROUTE;

export const EDIT_ENABLED = is_affirmative(import.meta.env.VITE_EDIT_ENABLED);

export const EDIT_TEXT = import.meta.env.VITE_EDIT_TEXT;

export const META_BRANDING = import.meta.env.VITE_META_BRANDING;

export const META_TITLE = import.meta.env.VITE_META_TITLE;

export const META_URL = import.meta.env.BASE_URL;

export const TIMESTAMP_ENABLED = is_affirmative(import.meta.env.VITE_TIMESTAMP_ENABLED);

export const TIMESTAMP_LOCALE = import.meta.env.VITE_TIMESTAMP_LOCALE;

export const TIMESTAMP_TEXT = import.meta.env.VITE_TIMESTAMP_TEXT;

export const VERSION_TAG = import.meta.env.VITE_VERSION_TAG;

export const VERSION_URL = import.meta.env.VITE_VERSION_URL;

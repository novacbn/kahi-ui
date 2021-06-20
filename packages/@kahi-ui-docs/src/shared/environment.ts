import type {INavigationBar, INavigationMenu} from "@kahi-ui/docs-kit/shared";
import {get_affirmative, get_string} from "@kahi-ui/docs-kit/shared";

import META_MANIFEST from "../../.meta.js";

export const CONTENT_INITIAL = get_string(import.meta.env, "VITE_CONTENT_INITIAL");

export const CONTENT_TEXT = get_string(import.meta.env, "VITE_CONTENT_TEXT", "Documentation");

export const CONTENT_URL = get_string(import.meta.env, "VITE_CONTENT_ROUTE", "/docs");

export const EDIT_ENABLED = get_affirmative(import.meta.env, "VITE_EDIT_ENABLED", false);

export const EDIT_TEXT = get_string(
    import.meta.env,
    "VITE_EDIT_TEXT",
    "View this page in the Repository"
);

export const EDIT_URL = get_string(import.meta.env, "VITE_EDIT_URL", EDIT_ENABLED ? undefined : "");

export const LOCALE_DEFAULT = get_string(import.meta.env, "VITE_TIMESTAMP_LOCALE", "en-US");

export const META_BRANDING = get_string(import.meta.env, "VITE_META_BRANDING", "Kahi UI");

export const META_TITLE = get_string(
    import.meta.env,
    "VITE_META_TITLE",
    "Kahi UI :: Straight-forward Svelte UI for the Web"
);

export const META_URL: string = import.meta.env.BASE_URL;

export const NAVIGATION_ASIDE = (META_MANIFEST.aside ?? []) as INavigationMenu[];

export const NAVIGATION_OMNI = (META_MANIFEST.omni ?? {center: [], right: []}) as {
    center: INavigationBar[];
    right: INavigationBar[];
};

export const RELEASES_ENABLED = get_affirmative(import.meta.env, "VITE_RELEASES_ENABLED", false);

export const RELEASES_URL = get_string(
    import.meta.env,
    "VITE_RELEASES_URL",
    RELEASES_ENABLED ? undefined : ""
);

export const REPOSITORY_ENABLED = get_affirmative(
    import.meta.env,
    "VITE_REPOSITORY_ENABLED",
    false
);

export const REPOSITORY_URL = get_string(
    import.meta.env,
    "VITE_REPOSITORY_URL",
    REPOSITORY_ENABLED ? undefined : ""
);

export const TIMESTAMP_ENABLED = get_affirmative(import.meta.env, "VITE_TIMESTAMP_ENABLED", false);

export const TIMESTAMP_TEXT = get_string(import.meta.env, "VITE_TIMESTAMP_TEXT", "Last Updated");

export const VERSION_ENABLED = get_affirmative(import.meta.env, "VITE_VERSION_ENABLED", false);

export const VERSION_TAG = import.meta.env.VITE_VERSION_TAG as string;

export const VERSION_URL = get_string(
    import.meta.env,
    "VITE_VERSION_URL",
    VERSION_ENABLED ? undefined : ""
);

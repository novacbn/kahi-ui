import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Check from "../Check.svelte";

import CheckDefaultStory from "./CheckDefaultStory.svelte";
import CheckFlushStory from "./CheckFlushStory.svelte";
import CheckPaletteStory from "./CheckPaletteStory.svelte";
import CheckSizeStory from "./CheckSizeStory.svelte";

export default {
    title: "Interactable/Check",
    component: Check,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_SIZE_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: CheckDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: CheckPaletteStory,
    props: {
        ...args,
    },
});

export const Flush = (args) => ({
    Component: CheckFlushStory,
    props: {
        ...args,
    },
});

export const Size = (args) => ({
    Component: CheckSizeStory,
    props: {
        ...args,
    },
});

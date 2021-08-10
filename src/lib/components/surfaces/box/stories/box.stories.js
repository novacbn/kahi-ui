import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Box from "../Box.svelte";

import BoxDefaultStory from "./BoxDefaultStory.svelte";
import BoxPaletteStory from "./BoxPaletteStory.svelte";

export default {
    title: "Surfaces/Box",
    component: Box,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: BoxDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: BoxPaletteStory,
    props: {
        ...args,
    },
});

import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_ORIENTATION_HORIZONTAL_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Divider from "../Divider.svelte";

import DividerDefaultStory from "./DividerDefaultStory.svelte";
import DividerOrientationStory from "./DividerOrientationStory.svelte";
import DividerPaletteStory from "./DividerPaletteStory.svelte";
import DividerTextStory from "./DividerTextStory.svelte";

export default {
    title: "Layouts/Divider",
    component: Divider,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_ORIENTATION_HORIZONTAL_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: DividerDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: DividerPaletteStory,
    props: {
        ...args,
    },
});

export const Orientation = (args) => ({
    Component: DividerOrientationStory,
    props: {
        ...args,
    },
});

export const Text = (args) => ({
    Component: DividerTextStory,
    props: {
        ...args,
    },
});

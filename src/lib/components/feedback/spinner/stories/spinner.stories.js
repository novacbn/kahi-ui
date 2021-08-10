import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Spinner from "../Spinner.svelte";

import SpinnerDefaultStory from "./SpinnerDefaultStory.svelte";
import SpinnerPaletteStory from "./SpinnerPaletteStory.svelte";
import SpinnerSizeStory from "./SpinnerSizeStory.svelte";

export default {
    title: "Feedback/Spinner",
    component: Spinner,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        variation: {
            options: ["dual"],
            control: {
                type: "select",
            },
        },
        ...STORYBOOK_SIZE_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: SpinnerDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: SpinnerPaletteStory,
    props: {
        ...args,
    },
});

export const Size = (args) => ({
    Component: SpinnerSizeStory,
    props: {
        ...args,
    },
});

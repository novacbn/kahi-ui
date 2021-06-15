import {
    STORYBOOK_ALIGNMENT_ARGUMENTS,
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_SIZING_ARGUMENTS,
    STORYBOOK_SPACING_ARGUMENTS,
} from "../../../../storybook/arguments";

import Mosaic from "../Mosaic.svelte";

import MosaicDefaultStory from "./MosaicDefaultStory.svelte";
import MosaicSizingStory from "./MosaicSizingStory.svelte";
import MosaicSpacingStory from "./MosaicSpacingStory.svelte";

export default {
    title: "Layouts/Mosaic",
    component: Mosaic,
    argTypes: {
        ...STORYBOOK_SIZING_ARGUMENTS,
        ...STORYBOOK_SPACING_ARGUMENTS,
        ...STORYBOOK_ALIGNMENT_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: MosaicDefaultStory,
    props: {
        ...args,
    },
});

export const Sizing = (args) => ({
    Component: MosaicSizingStory,
    props: {
        ...args,
    },
});

export const Spacing = (args) => ({
    Component: MosaicSpacingStory,
    props: {
        ...args,
    },
});

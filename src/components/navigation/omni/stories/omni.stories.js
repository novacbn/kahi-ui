import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
} from "../../../../storybook/arguments";

import OmniContainer from "../OmniContainer.svelte";

import OmniDefaultStory from "./OmniDefaultStory.svelte";
import OmniPaletteStory from "./OmniPaletteStory.svelte";

export default {
    title: "Navigation/Omni",
    component: OmniContainer,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: OmniDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: OmniPaletteStory,
    props: {
        ...args,
    },
});

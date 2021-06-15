import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_ELEVATION_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
} from "../../../../storybook/arguments";

import CardContainer from "../CardContainer.svelte";

import CardDefaultStory from "./CardDefaultStory.svelte";
import CardElevationStory from "./CardElevationStory.svelte";
import CardPaletteStory from "./CardPaletteStory.svelte";

export default {
    title: "Surfaces/Card",
    component: CardContainer,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_ELEVATION_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: CardDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: CardPaletteStory,
    props: {
        ...args,
    },
});

export const Elevation = (args) => ({
    Component: CardElevationStory,
    props: {
        ...args,
    },
});

import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_ELEVATION_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
} from "../../../../storybook/arguments";

import TileContainer from "../TileContainer.svelte";

import TileDefaultStory from "./TileDefaultStory.svelte";
import TileFlushStory from "./TileFlushStory.svelte";
import TileElevationStory from "./TileElevationStory.svelte";
import TilePaletteStory from "./TilePaletteStory.svelte";

export default {
    title: "Surfaces/Tile",
    component: TileContainer,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_ELEVATION_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: TileDefaultStory,
    props: {
        ...args,
    },
});

export const Flush = (args) => ({
    Component: TileFlushStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: TilePaletteStory,
    props: {
        ...args,
    },
});

export const Elevation = (args) => ({
    Component: TileElevationStory,
    props: {
        ...args,
    },
});

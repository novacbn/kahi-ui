import {
    STORYBOOK_ALIGNMENT_ARGUMENTS,
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_POINTS_ARGUMENTS,
    STORYBOOK_SPACING_ARGUMENTS,
} from "../../../../storybook/arguments";

import Grid from "../Grid.svelte";

import GridDefaultStory from "./GridDefaultStory.svelte";
import GridPointsStory from "./GridPointsStory.svelte";
import GridSpacingStory from "./GridSpacingStory.svelte";

export default {
    title: "Layouts/Grid",
    component: Grid,
    argTypes: {
        ...STORYBOOK_POINTS_ARGUMENTS,
        ...STORYBOOK_SPACING_ARGUMENTS,
        ...STORYBOOK_ALIGNMENT_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: GridDefaultStory,
    props: {
        ...args,
    },
});

export const Points = (args) => ({
    Component: GridPointsStory,
    props: {
        ...args,
    },
});

export const Spacing = (args) => ({
    Component: GridSpacingStory,
    props: {
        ...args,
    },
});

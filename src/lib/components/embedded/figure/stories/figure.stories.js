import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_FIT_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_SHAPE_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Figure from "../Figure.svelte";

import FigureDefaultStory from "./FigureDefaultStory.svelte";

import FigureFitStory from "./FigureFitStory.svelte";
import FigureShapeStory from "./FigureShapeStory.svelte";
import FigureSizeStory from "./FigureSizeStory.svelte";

export default {
    title: "Embedded/Figure",
    component: Figure,
    argTypes: {
        ...STORYBOOK_SHAPE_ARGUMENTS,
        ...STORYBOOK_FIT_ARGUMENTS,
        variation: {
            options: ["icon"],
            control: {
                type: "select",
            },
        },
        ...STORYBOOK_SIZE_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: FigureDefaultStory,
    props: {
        ...args,
    },
});

export const Shape = (args) => ({
    Component: FigureShapeStory,
    props: {
        ...args,
    },
});

export const Size = (args) => ({
    Component: FigureSizeStory,
    props: {
        ...args,
    },
});

export const Fit = (args) => ({
    Component: FigureFitStory,
    props: {
        ...args,
    },
});

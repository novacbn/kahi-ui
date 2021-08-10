import {
    STORYBOOK_ANIMATION_ARGUMENTS,
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_POSITION_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Dot from "../Dot.svelte";

import DotAnimationStory from "./DotAnimationStory.svelte";
import DotDefaultStory from "./DotDefaultStory.svelte";
import DotPaletteStory from "./DotPaletteStory.svelte";
import DotPositionStory from "./DotPositionStory.svelte";

export default {
    title: "Feedback/Dot",
    component: Dot,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_ANIMATION_ARGUMENTS,
        ...STORYBOOK_POSITION_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: DotDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: DotPaletteStory,
    props: {
        ...args,
    },
});

export const Animation = (args) => ({
    Component: DotAnimationStory,
    props: {
        ...args,
    },
});

export const Position = (args) => ({
    Component: DotPositionStory,
    props: {
        ...args,
    },
});

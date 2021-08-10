import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_POSITION_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Badge from "../Badge.svelte";

import BadgeDefaultStory from "./BadgeDefaultStory.svelte";
import BadgePaletteStory from "./BadgePaletteStory.svelte";
import BadgePositionStory from "./BadgePositionStory.svelte";

export default {
    title: "Display/Badge",
    component: Badge,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_POSITION_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: BadgeDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: BadgePaletteStory,
    props: {
        ...args,
    },
});

export const Position = (args) => ({
    Component: BadgePositionStory,
    props: {
        ...args,
    },
});

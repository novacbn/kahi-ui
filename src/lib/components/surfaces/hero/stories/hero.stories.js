import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import HeroContainer from "../HeroContainer.svelte";

import HeroDefaultStory from "./HeroDefaultStory.svelte";
import HeroPaletteStory from "./HeroPaletteStory.svelte";

export default {
    title: "Surfaces/Hero",
    component: HeroContainer,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: HeroDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: HeroPaletteStory,
    props: {
        ...args,
    },
});

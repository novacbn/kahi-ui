import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
} from "../../../../storybook/arguments";

import AsideContainer from "../AsideContainer.svelte";

import AsideDefaultStory from "./AsideDefaultStory.svelte";
import AsidePaletteStory from "./AsidePaletteStory.svelte";

export default {
    title: "Navigation/Aside",
    component: AsideContainer,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: AsideDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: AsidePaletteStory,
    props: {
        ...args,
    },
});

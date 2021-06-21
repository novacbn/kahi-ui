import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
} from "../../../../storybook/arguments";

import Radio from "../Radio.svelte";

import RadioDefaultStory from "./RadioDefaultStory.svelte";
import RadioPaletteStory from "./RadioPaletteStory.svelte";
import RadioSizeStory from "./RadioSizeStory.svelte";

export default {
    title: "Interactable/Radio",
    component: Radio,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_SIZE_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: RadioDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: RadioPaletteStory,
    props: {
        ...args,
    },
});

export const Size = (args) => ({
    Component: RadioSizeStory,
    props: {
        ...args,
    },
});

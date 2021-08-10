import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Switch from "../Switch.svelte";

import SwitchDefaultStory from "./SwitchDefaultStory.svelte";
import SwitchPaletteStory from "./SwitchPaletteStory.svelte";
import SwitchSizeStory from "./SwitchSizeStory.svelte";

export default {
    title: "Interactable/Switch",
    component: Switch,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_SIZE_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: SwitchDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: SwitchPaletteStory,
    props: {
        ...args,
    },
});

export const Size = (args) => ({
    Component: SwitchSizeStory,
    props: {
        ...args,
    },
});

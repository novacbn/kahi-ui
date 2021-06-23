import {
    STORYBOOK_BUTTON_VARIATION_ARGUMENTS,
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
} from "../../../../storybook/arguments";

import Button from "../Button.svelte";

import ButtonClearStory from "./ButtonClearStory.svelte";
import ButtonDefaultStory from "./ButtonDefaultStory.svelte";
import ButtonPaletteStory from "./ButtonPaletteStory.svelte";
import ButtonOutlineStory from "./ButtonOutlineStory.svelte";
import ButtonSizeStory from "./ButtonSizeStory.svelte";

export default {
    title: "Interactable/Button",
    component: Button,
    argTypes: {
        ...STORYBOOK_BUTTON_VARIATION_ARGUMENTS,
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_SIZE_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: ButtonDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: ButtonPaletteStory,
    props: {
        ...args,
    },
});

export const Clear = (args) => ({
    Component: ButtonClearStory,
    props: {
        ...args,
    },
});

export const Outline = (args) => ({
    Component: ButtonOutlineStory,
    props: {
        ...args,
    },
});

export const Size = (args) => ({
    Component: ButtonSizeStory,
    props: {
        ...args,
    },
});

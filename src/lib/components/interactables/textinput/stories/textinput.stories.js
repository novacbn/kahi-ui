import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_INPUT_VARIATION_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_RESIZEABLE_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import TextInput from "../TextInput.svelte";

import TextInputBlockStory from "./TextInputBlockStory.svelte";
import TextInputDefaultStory from "./TextInputDefaultStory.svelte";
import TextInputFlushStory from "./TextInputFlushStory.svelte";
import TextInputPaletteStory from "./TextInputPaletteStory.svelte";
import TextInputSizeStory from "./TextInputSizeStory.svelte";
import TextInputTextAreaStory from "./TextInputTextAreaStory.svelte";

export default {
    title: "Interactable/TextInput",
    component: TextInput,
    argTypes: {
        is: {
            options: ["input", "textarea"],
            control: {
                type: "select",
            },
        },

        type: {
            options: ["email", "password", "text", "search", "url"],
            control: {
                type: "select",
            },
        },

        ...STORYBOOK_INPUT_VARIATION_ARGUMENTS,
        ...STORYBOOK_RESIZEABLE_ARGUMENTS,
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_SIZE_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: TextInputDefaultStory,
    props: {
        ...args,
    },
});

export const Block = (args) => ({
    Component: TextInputBlockStory,
    props: {
        ...args,
    },
});

export const Flush = (args) => ({
    Component: TextInputFlushStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: TextInputPaletteStory,
    props: {
        ...args,
    },
});

export const Size = (args) => ({
    Component: TextInputSizeStory,
    props: {
        ...args,
    },
});

export const TextArea = (args) => ({
    Component: TextInputTextAreaStory,
    props: {
        ...args,
    },
});

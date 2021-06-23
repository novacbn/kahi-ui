import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
} from "../../../../storybook/arguments";

import Code from "../Code.svelte";

import CodeDefaultStory from "./CodeDefaultStory.svelte";
import CodePaletteStory from "./CodePaletteStory.svelte";
import CodePreStory from "./CodePreStory.svelte";

export default {
    title: "Typography/Code",
    component: Code,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_SIZE_ARGUMENTS,
        is: {
            options: ["pre"],
            control: {
                type: "select",
            },
        },

        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: CodeDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: CodePaletteStory,
    props: {
        ...args,
    },
});

export const PreFormatted = (args) => ({
    Component: CodePreStory,
    props: {
        ...args,
    },
});

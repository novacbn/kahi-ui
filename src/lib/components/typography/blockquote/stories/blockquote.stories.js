import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import BlockquoteContainer from "../BlockquoteContainer.svelte";

import BlockquoteDefaultStory from "./BlockquoteDefaultStory.svelte";
import BlockquotePaletteStory from "./BlockquotePaletteStory.svelte";

export default {
    title: "Typography/Blockquote",
    component: BlockquoteContainer,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: BlockquoteDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: BlockquotePaletteStory,
    props: {
        ...args,
    },
});

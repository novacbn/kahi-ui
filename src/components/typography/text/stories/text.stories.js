import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
    STORYBOOK_TEXT_ALIGNMENT_ARGUMENTS,
    STORYBOOK_TEXT_TRANSFORM_ARGUMENTS,
    STORYBOOK_TEXT_VARIATION_ARGUMENTS,
} from "../../../../storybook/arguments";

import Text from "../Text.svelte";

import TextDefaultStory from "./TextDefaultStory.svelte";
import TextAlignStory from "./TextAlignStory.svelte";
import TextPreStory from "./TextPreStory.svelte";
import TextSizeStory from "./TextSizeStory.svelte";
import TextTransformStory from "./TextTransformStory.svelte";
import TextVariationStory from "./TextVariationStory.svelte";

export default {
    title: "Typography/Text",
    component: Text,
    argTypes: {
        is: {
            options: [
                "abbr",
                "b",
                "del",
                "em",
                "i",
                "ins",
                "kbd",
                "mark",
                "pre",
                "s",
                "samp",
                "small",
                "span",
                "strong",
                "sub",
                "sup",
                "u",
            ],
            control: {
                type: "select",
            },
        },
        ...STORYBOOK_SIZE_ARGUMENTS,
        ...STORYBOOK_TEXT_ALIGNMENT_ARGUMENTS,
        ...STORYBOOK_TEXT_TRANSFORM_ARGUMENTS,
        ...STORYBOOK_TEXT_VARIATION_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: TextDefaultStory,
    props: {
        ...args,
    },
});

export const Size = (args) => ({
    Component: TextSizeStory,
    props: {
        ...args,
    },
});

export const Align = (args) => ({
    Component: TextAlignStory,
    props: {
        ...args,
    },
});

export const Transform = (args) => ({
    Component: TextTransformStory,
    props: {
        ...args,
    },
});

export const Variation = (args) => ({
    Component: TextVariationStory,
    props: {
        ...args,
    },
});

export const PreFormatted = (args) => ({
    Component: TextPreStory,
    props: {
        ...args,
    },
});

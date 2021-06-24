import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_TEXT_ALIGNMENT_ARGUMENTS,
    STORYBOOK_TEXT_TRANSFORM_ARGUMENTS,
    STORYBOOK_TEXT_VARIATION_ARGUMENTS,
} from "../../../../storybook/arguments";

import Heading from "../Heading.svelte";

import HeadingDefaultStory from "./HeadingDefaultStory.svelte";
import HeadingAlignStory from "./HeadingAlignStory.svelte";
import HeadingSizeStory from "./HeadingSizeStory.svelte";
import HeadingTransformStory from "./HeadingTransformStory.svelte";
import HeadingVariationStory from "./HeadingVariationStory.svelte";

export default {
    title: "Typography/Heading",
    component: Heading,
    argTypes: {
        is: {
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            control: {
                type: "select",
            },
        },
        ...STORYBOOK_TEXT_ALIGNMENT_ARGUMENTS,
        ...STORYBOOK_TEXT_TRANSFORM_ARGUMENTS,
        ...STORYBOOK_TEXT_VARIATION_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: HeadingDefaultStory,
    props: {
        ...args,
    },
});

export const Size = (args) => ({
    Component: HeadingSizeStory,
    props: {
        ...args,
    },
});

export const Align = (args) => ({
    Component: HeadingAlignStory,
    props: {
        ...args,
    },
});

export const Transform = (args) => ({
    Component: HeadingTransformStory,
    props: {
        ...args,
    },
});

export const Variation = (args) => ({
    Component: HeadingVariationStory,
    props: {
        ...args,
    },
});

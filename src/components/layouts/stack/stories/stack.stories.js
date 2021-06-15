import {
    STORYBOOK_ALIGNMENT_ARGUMENTS,
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_FLEX_VARIATION_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_ORIENTATION_VERTICAL_ARGUMENTS,
    STORYBOOK_SPACING_ARGUMENTS,
} from "../../../../storybook/arguments";

import Stack from "../Stack.svelte";

import StackAlignmentStory from "./StackAlignmentStory.svelte";
import StackDefaultStory from "./StackDefaultStory.svelte";
import StackOrientationStory from "./StackOrientationStory.svelte";
import StackSpacingStory from "./StackSpacingStory.svelte";
import StackWrapStory from "./StackWrapStory.svelte";

export default {
    title: "Layouts/Stack",
    component: Stack,
    argTypes: {
        ...STORYBOOK_ORIENTATION_VERTICAL_ARGUMENTS,
        ...STORYBOOK_FLEX_VARIATION_ARGUMENTS,
        ...STORYBOOK_SPACING_ARGUMENTS,
        ...STORYBOOK_ALIGNMENT_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: StackDefaultStory,
    props: {
        ...args,
    },
});

export const Orientation = (args) => ({
    Component: StackOrientationStory,
    props: {
        ...args,
    },
});

export const Spacing = (args) => ({
    Component: StackSpacingStory,
    props: {
        ...args,
    },
});

export const Alignment = (args) => ({
    Component: StackAlignmentStory,
    props: {
        ...args,
    },
});

export const Wrap = (args) => ({
    Component: StackWrapStory,
    props: {
        ...args,
    },
});

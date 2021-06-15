import {
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_ORIENTATION_ARGUMENTS,
} from "../../../../storybook/arguments";

import Spacer from "../Spacer.svelte";

import SpacerDefaultStory from "./SpacerDefaultStory.svelte";
import SpacerSpacingStory from "./SpacerSpacingStory.svelte";
import SpacerVariationStory from "./SpacerVariationStory.svelte";

export default {
    title: "Layouts/Spacer",
    component: Spacer,
    argTypes: {
        ...STORYBOOK_ORIENTATION_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: SpacerDefaultStory,
    props: {
        ...args,
    },
});

export const Spacing = (args) => ({
    Component: SpacerSpacingStory,
    props: {
        ...args,
    },
});

export const Variation = (args) => ({
    Component: SpacerVariationStory,
    props: {
        ...args,
    },
});

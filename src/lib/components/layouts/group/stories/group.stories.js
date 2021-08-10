import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_ORIENTATION_HORIZONTAL_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Group from "../Group.svelte";

import GroupDefaultStory from "./GroupDefaultStory.svelte";
import GroupOrientationStory from "./GroupOrientationStory.svelte";
import GroupStackedStory from "./GroupStackedStory.svelte";

export default {
    title: "Layouts/Group",
    component: Group,
    argTypes: {
        ...STORYBOOK_ORIENTATION_HORIZONTAL_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: GroupDefaultStory,
    props: {
        ...args,
    },
});

export const Orientation = (args) => ({
    Component: GroupOrientationStory,
    props: {
        ...args,
    },
});

export const Stacked = (args) => ({
    Component: GroupStackedStory,
    props: {
        ...args,
    },
});

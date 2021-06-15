import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
} from "../../../../storybook/arguments";

import List from "../OrderedList.svelte";

import ListDefaultStory from "./ListDefaultStory.svelte";

export default {
    title: "Display/List",
    component: List,
    argTypes: {
        character: {
            control: {
                type: "text",
            },
        },
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: ListDefaultStory,
    props: {
        ...args,
    },
});

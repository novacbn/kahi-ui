import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
} from "../../../../../storybook/arguments";

import ListContainer from "../ListContainer.svelte";

import ListDefaultStory from "./ListDefaultStory.svelte";

export default {
    title: "Display/List",
    component: ListContainer,
    argTypes: {
        is: {
            options: ["ol", "ul"],
            control: {
                type: "select",
            },
        },
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

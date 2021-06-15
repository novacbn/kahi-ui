import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
} from "../../../../storybook/arguments";

import Ellipsis from "../Ellipsis.svelte";

import EllipsisDefaultStory from "./EllipsisDefaultStory.svelte";

export default {
    title: "Feedback/Ellipsis",
    component: Ellipsis,
    argTypes: {
        character: {
            control: {
                type: "text",
            },
        },
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: EllipsisDefaultStory,
    props: {
        ...args,
    },
});

import {
    STORYBOOK_ANCHOR_ARGUMENTS,
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
} from "../../../../storybook/arguments";

import Anchor from "../Anchor.svelte";

import AnchorDefaultStory from "./AnchorDefaultStory.svelte";

export default {
    title: "Navigation/Anchor",
    component: Anchor,
    argTypes: {
        ...STORYBOOK_ANCHOR_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: AnchorDefaultStory,
    props: {
        ...args,
    },
});

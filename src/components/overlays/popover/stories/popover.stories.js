import {
    STORYBOOK_ALIGNMENT_ARGUMENTS,
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
} from "../../../../storybook/arguments";

import Popover from "../Popover.svelte";

import PopoverDefaultStory from "./PopoverDefaultStory.svelte";

export default {
    title: "Overlays/Popover",
    component: Popover,
    argTypes: {
        ...STORYBOOK_ALIGNMENT_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: PopoverDefaultStory,
    props: {
        ...args,
    },
});

import {
    STORYBOOK_ALIGNMENT_ARGUMENTS,
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
} from "../../../../storybook/arguments";

import Offscreen from "../Offscreen.svelte";

import OffscreenDefaultStory from "./OffscreenDefaultStory.svelte";

export default {
    title: "Overlays/Offscreen",
    component: Offscreen,
    argTypes: {
        ...STORYBOOK_ALIGNMENT_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: OffscreenDefaultStory,
    props: {
        ...args,
    },
});

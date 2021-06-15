import {
    STORYBOOK_ALIGNMENT_ARGUMENTS,
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_SPACING_ARGUMENTS,
} from "../../../../storybook/arguments";

import Overlay from "../Overlay.svelte";

import OverlayDefaultStory from "./OverlayDefaultStory.svelte";

export default {
    title: "Overlays/Overlay",
    component: Overlay,
    argTypes: {
        ...STORYBOOK_SPACING_ARGUMENTS,
        ...STORYBOOK_ALIGNMENT_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: OverlayDefaultStory,
    props: {
        ...args,
    },
});

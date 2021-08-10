import {
    STORYBOOK_FOREGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_SIZE_ARGUMENTS,
} from "../../../../../storybook/arguments";

import Wave from "../Wave.svelte";

import WaveDefaultStory from "./WaveDefaultStory.svelte";
import WavePaletteStory from "./WavePaletteStory.svelte";

export default {
    title: "Feedback/Wave",
    component: Wave,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_SIZE_ARGUMENTS,
        ...STORYBOOK_FOREGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: WaveDefaultStory,
    props: {
        ...args,
    },
});

export const Palette = (args) => ({
    Component: WavePaletteStory,
    props: {
        ...args,
    },
});

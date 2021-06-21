import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
    STORYBOOK_TABLE_VARIATION_ARGUMENTS,
} from "../../../../storybook/arguments";

import TableContainer from "../TableContainer.svelte";

import TableDefaultStory from "./TableDefaultStory.svelte";
import TableBordersStory from "./TableBordersStory.svelte";
import TableStripesStory from "./TableStripesStory.svelte";

export default {
    title: "Display/Table",
    component: TableContainer,
    argTypes: {
        ...STORYBOOK_TABLE_VARIATION_ARGUMENTS,
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: TableDefaultStory,
    props: {
        ...args,
    },
});

export const Borders = (args) => ({
    Component: TableBordersStory,
    props: {
        ...args,
    },
});

export const Stripes = (args) => ({
    Component: TableStripesStory,
    props: {
        ...args,
    },
});

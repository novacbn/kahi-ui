import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
    STORYBOOK_PALETTE_ARGUMENTS,
} from "../../../../storybook/arguments";

import MenuContainer from "../MenuContainer.svelte";

import MenuDefaultStory from "./MenuDefaultStory.svelte";
import MenuLabelStory from "./MenuLabelStory.svelte";
import MenuSubMenuStory from "./MenuSubMenuStory.svelte";
import MenuTextDividerStory from "./MenuTextDividerStory.svelte";

export default {
    title: "Navigation/Menu",
    component: MenuContainer,
    argTypes: {
        ...STORYBOOK_PALETTE_ARGUMENTS,
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: MenuDefaultStory,
    props: {
        ...args,
    },
});

export const Label = (args) => ({
    Component: MenuLabelStory,
    props: {
        ...args,
    },
});

export const SubMenu = (args) => ({
    Component: MenuSubMenuStory,
    props: {
        ...args,
    },
});

export const TextDivider = (args) => ({
    Component: MenuTextDividerStory,
    props: {
        ...args,
    },
});

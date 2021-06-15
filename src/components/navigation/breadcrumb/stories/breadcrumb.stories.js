import {
    STORYBOOK_BACKGROUND_ARGUMENTS,
    STORYBOOK_HIDDEN_ARGUMENTS,
} from "../../../../storybook/arguments";

import BreadcrumbContainer from "../BreadcrumbContainer.svelte";

import BreadcrumbDefaultStory from "./BreadcrumbDefaultStory.svelte";
import BreadcrumbSeparatorStory from "./BreadcrumbSeparatorStory.svelte";

export default {
    title: "Navigation/Breadcrumb",
    component: BreadcrumbContainer,
    argTypes: {
        ...STORYBOOK_BACKGROUND_ARGUMENTS,
        ...STORYBOOK_HIDDEN_ARGUMENTS,
    },
};

export const Default = (args) => ({
    Component: BreadcrumbDefaultStory,
    props: {
        ...args,
    },
});

export const Separator = (args) => ({
    Component: BreadcrumbSeparatorStory,
    props: {
        ...args,
    },
});

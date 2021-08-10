import FormControlStory from "./FormControlStory.svelte";
import FormGroupCheckStory from "./FormGroupCheckStory.svelte";
import FormGroupRadioStory from "./FormGroupRadioStory.svelte";

export default {
    title: "Interactable/Form",
};

export const FormControl = (args) => ({
    Component: FormControlStory,
    props: {
        ...args,
    },
});

export const FormGroupCheck = (args) => ({
    Component: FormGroupCheckStory,
    props: {
        ...args,
    },
});

export const FormGroupRadio = (args) => ({
    Component: FormGroupRadioStory,
    props: {
        ...args,
    },
});

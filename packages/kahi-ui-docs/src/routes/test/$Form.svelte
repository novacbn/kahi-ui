<script context="module">
    export const FORM_MANIFEST = [
        {id: "form-checks", text: "Checks"},
        {id: "form-radios", text: "Radios"},
        {id: "form-switches", text: "Switches"},
        {id: "form-text", text: "Text"},
    ];
</script>

<script>
    import {Divider, Heading} from "@kahi-ui/svelte";

    import * as Menus from "../../components/menus";
</script>

<article id="form">
    <Menus.Contents links={FORM_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="form-checks">
    <Heading>Form :: Checks</Heading>
</article>

<Divider />

<article id="form-radios">
    <Heading>Form :: Radios</Heading>
</article>

<Divider />

<article id="form-switches">
    <Heading>Form :: Switches</Heading>
</article>

<Divider />

<article id="form-text">
    <Heading>Form :: Text</Heading>
</article>

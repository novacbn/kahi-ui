<script context="module">
    export const OVERLAYS_MANIFEST = [
        {id: "overlays-dialog", text: "Dialog"},
        {id: "overlays-popover", text: "Popover"},
        {id: "overlays-sheet", text: "Sheet"},
    ];
</script>

<script>
    import {Divider, Heading} from "@kahi-ui/svelte";

    import * as Menus from "../../components/menus";
</script>

<article id="overlays">
    <Menus.Contents links={OVERLAYS_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="overlays-dialog">
    <Heading>Overlays :: Dialog</Heading>
</article>

<Divider />

<article id="overlays-popover">
    <Heading>Overlays :: Popover</Heading>
</article>

<Divider />

<article id="overlays-sheet">
    <Heading>Overlays :: Sheet</Heading>
</article>

<script context="module">
    export const ELEMENTS_MANIFEST = [
        {id: "elements-blockquotes", text: "Blockquotes"},
        {id: "elements-embedded", text: "Embedded"},
        {id: "elements-lists", text: "Lists"},
        {id: "elements-table", text: "Table"},
    ];
</script>

<script>
    import {Divider, Heading} from "@kahi-ui/svelte";

    import * as Menus from "../../components/menus";
</script>

<article id="elements">
    <Menus.Contents links={ELEMENTS_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="elements-blockquotes">
    <Heading>Elements :: Blockquotes</Heading>
</article>

<Divider />

<article id="elements-embedded">
    <Heading>Elements :: Embedded</Heading>
</article>

<Divider />

<article id="elements-lists">
    <Heading>Elements :: Lists</Heading>
</article>

<Divider />

<article id="elements-table">
    <Heading>Elements :: Table</Heading>
</article>

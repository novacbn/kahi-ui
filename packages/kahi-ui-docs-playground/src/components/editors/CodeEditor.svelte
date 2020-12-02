<script context="module">
    import hljs from "highlight.js/lib/core";
    import css from "highlight.js/lib/languages/css";
    import javascript from "highlight.js/lib/languages/javascript";
    import xml from "highlight.js/lib/languages/xml";

    hljs.registerLanguage("css", css);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("javascript", javascript);

    const highlightElement = (element, syntax) => hljs.highlightBlock(element);
</script>

<script>
    import {CodeJar} from "svelte-codejar";

    export let value = "";
</script>

<style>
    :global(.simple-repl-container) {
        margin: 0;
        min-height: 100%;

        resize: none !important;
        overflow: visible;
    }
</style>

<CodeJar class="simple-repl-container" bind:value {highlightElement} />

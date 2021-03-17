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

    let _class = "";
    export let style = undefined;
    export {_class as class};

    export let value = "";
</script>

<CodeJar class="repl-editor {_class}" bind:value {highlightElement} {style} />

<style>
    :global(.repl-editor),
    :global(.repl-editor > *) {
        padding: 0;
        margin: 0;

        width: max-content;
        height: max-content;

        min-width: 100%;
        min-height: 100%;

        overflow: visible !important;
    }

    :global(.repl-editor) {
        padding: var(--repl-editor-padding, 0.5em 1em);

        font-size: var(--repl-editor-font-size, 0.95rem);

        resize: none !important;
    }

    :global(.repl-editor > *) {
        font-family: var(--repl-editor-font-family, monospace);
    }
</style>

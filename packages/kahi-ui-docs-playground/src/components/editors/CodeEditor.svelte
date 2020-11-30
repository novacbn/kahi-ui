<script context="module">
    import hljs from "highlight.js/lib/core";
    import css from "highlight.js/lib/languages/css";
    import javascript from "highlight.js/lib/languages/javascript";
    import xml from "highlight.js/lib/languages/xml";

    hljs.registerLanguage("css", css);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("javascript", javascript);
</script>

<script>
    import {CodeJar} from "codejar";

    export let addClosing = true;
    export let indentOn = /{$/;
    export let spellcheck = false;
    export let tab = "\t";

    export let value = "";

    let container = null;
    let codejar = null;

    function mount(element) {
        codejar = CodeJar(element, hljs.highlightBlock, {addClosing, indentOn, spellcheck, tab});

        codejar.onUpdate((text) => {
            if (text !== value) value = text;
        });
    }

    $: if (container) mount(container);
    $: if (codejar) codejar.updateOptions({addClosing, indentOn, spellcheck, tab});
    $: if (codejar && codejar.toString() !== value) codejar.updateCode(value);
</script>

<style>
    pre {
        margin: 0;
        min-height: 100%;

        resize: none !important;
        overflow: visible;
    }
</style>

<pre class="language-html" bind:this={container}><code>{value}</code></pre>

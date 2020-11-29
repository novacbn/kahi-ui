<script>
    import {CodeJar} from "codejar";

    export let addClosing = true;
    export let indentOn = "{$";
    export let spellcheck = false;
    export let tab = "\t";

    export let value = "";

    let code = null;
    let codejar = null;

    function mount(element) {
        codejar = CodeJar(element, () => void 0, {addClosing, indentOn, spellcheck, tab});

        codejar.onUpdate((text) => {
            if (text !== value) value = text;
        });
    }

    $: if (code) mount(code);
    $: if (codejar) codejar.updateOptions({addClosing, indentOn, spellcheck, tab});
    $: if (codejar && codejar.toString() !== value) codejar.updateCode(value);
</script>

<code bind:this={code}>{value}</code>

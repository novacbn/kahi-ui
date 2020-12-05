<script>
    import {Heading} from "@kahi-ui/svelte";

    import {get_samples, SAMPLE_SYNTAXES} from "../../util/samples";

    import Layout from "../$layout.svelte";

    import * as Boxes from "../../components/boxes";
    import * as Heroes from "../../components/heroes";

    export let syntax = SAMPLE_SYNTAXES.svelte;

    $: samples = get_samples(syntax);
</script>

<Layout>
    <Heading level={2}>Workspace Templates</Heading>

    <Boxes.Templates bind:syntax />

    {#if samples.length > 0}
        yoop
    {:else}
        <Heroes.NoTemplates {syntax} />
    {/if}
</Layout>

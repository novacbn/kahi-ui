<script>
    import {Heading, Grid} from "@kahi-ui/svelte";

    import APPLICATION_ROUTER from "../../router.manifest";

    import {get_samples, SAMPLE_SYNTAXES} from "../../util/samples";
    import {create_workspace_from_sample} from "../../util/workspaces";

    import Layout from "../$layout.svelte";

    import * as Boxes from "../../components/boxes";
    import * as Cards from "../../components/cards";
    import * as Heroes from "../../components/heroes";

    const {goto} = APPLICATION_ROUTER;

    export let syntax = SAMPLE_SYNTAXES.html;

    async function on_click(sample, event) {
        const {identifier} = await create_workspace_from_sample(sample);

        goto(`/repl/workspace/${identifier}`);
    }

    $: samples = get_samples(syntax);
</script>

<svelte:head>
    <title>Templates — Playground :: Kahi UI</title>
</svelte:head>

<Layout>
    <Heading level={2}>Workspace Templates</Heading>
    <Boxes.Templates bind:syntax />

    {#if samples.length > 0}
        <Grid points="3 2+small 1+tiny" spacing="medium">
            {#each samples as sample (sample.title)}
                <Cards.Template {sample} on:click={on_click.bind(null, sample)} />
            {/each}
        </Grid>
    {:else}
        <Heroes.NoTemplates {syntax} />
    {/if}
</Layout>

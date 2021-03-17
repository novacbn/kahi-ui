<script context="module">
    export async function load({fetch}) {
        const [content_response, syntaxes_response] = await Promise.all([
            fetch("/api/v1/content.json"),
            fetch("/api/v1/content/syntaxes.json"),
        ]);

        const [content_data, syntaxes_data] = await Promise.all([
            content_response.json(),
            syntaxes_response.json(),
        ]);

        return {
            props: {
                content: content_data.data,
                syntaxes: syntaxes_data.data,
            },
        };
    }
</script>

<script>
    import {Container, Heading, Grid} from "@kahi-ui/svelte";

    import {DEFAULT_SYNTAX, META_TITLE} from "../../../shared/environment";

    import * as Boxes from "../../../components/boxes";
    import * as Cards from "../../../components/cards";
    import * as Heroes from "../../../components/heroes";

    export let content = [];
    export let syntax = DEFAULT_SYNTAX;
    export let syntaxes = [];

    $: _content = content.filter((sample) => sample.syntaxes.includes(syntax));
</script>

<svelte:head>
    <title>Samples — {META_TITLE}</title>
</svelte:head>

<Container as="main" viewport="medium">
    <Heading level={2}>Workspace Samples</Heading>
    <Boxes.Syntaxes {syntaxes} bind:syntax />

    {#if _content.length > 0}
        <Grid points="3 2+small 1+tiny" spacing="medium">
            {#each _content as sample (sample.title)}
                <Cards.Sample {sample} {syntax} />
            {/each}
        </Grid>
    {:else}
        <Heroes.NoSamples {syntax} />
    {/if}
</Container>

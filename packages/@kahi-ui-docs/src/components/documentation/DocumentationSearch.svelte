<script lang="ts">
    // TODO: Could be simplified?

    import {Card, Ellipsis, Overlay, Text, TextInput} from "@kahi-ui/framework";
    import type {ISearchStore, search} from "@novacbn/svelte-stork";

    import {initialize_search} from "../../client/search";
    import {VERSION_TAG} from "../../shared/environment";

    export let state: boolean = false;

    let value: string = "";

    async function await_search() {
        ({search: _search, Stork} = await initialize_search());
    }

    $: if (!state) value = "";

    let Stork: any, _search: typeof search | undefined;
    $: if (state) await_search();

    let _query: any, _store: ISearchStore;
    $: if (_search)
        _store = _search({
            index_name: `kahi-ui_docs_v${VERSION_TAG}`,
        });
    $: if (_store) $_store = value;
    $: if (_store) _query = $_store;
</script>

<!--
    TODO: We could probably make a very nice Kahi UI custom search
    UI, instead of using `svelte-stork`'s builtin
-->

<Overlay
    class="documentation-search"
    logic_id="documentation-search"
    alignment_y="top"
    spacing="medium"
    bind:state
    captive
    dismissible
>
    {#if Stork}
        <Card.Container palette="auto" margin_top="huge" width="prose" max_width="viewport-75">
            <Card.Section>
                <TextInput placeholder="Search docs..." variation="block" bind:value />
            </Card.Section>

            <Card.Section>
                <Stork.Output excerpts_maximum={2} query={_query} />
            </Card.Section>
        </Card.Container>
    {:else}
        <Card.Container palette="auto" margin_top="huge" width="prose" max_width="viewport-75">
            <Card.Header>
                <Text is="span" align="center" width="100">
                    Initializing search engine<Ellipsis />
                </Text>
            </Card.Header>
        </Card.Container>
    {/if}
</Overlay>

<style>
    :global(:root) {
        --svst-attribution-padding: 0.5em 1em 0em 1em;
        --svst-entry-hover-background-color: rgba(var(--palette-foreground-text), 0.1);
        --svst-output-color: currentColor;
        --svst-output-font-size: 1.2em;
        --svst-output-max-height: 66vh;
    }

    :global(.svst-entry) {
        color: currentColor !important;
        text-decoration: none !important;
    }
</style>

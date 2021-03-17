<script context="module">
    import {browser} from "$app/env";

    export async function load({fetch, page}) {
        // TODO: Accept sample string + title from query parameters, to support
        // URL sharing of Workspaces
        const {query} = page;

        const identifier = query.get("sample");
        const syntax = query.get("syntax");

        const response = await fetch(`/api/v1/content/${identifier}.json`);
        const data = await response.json();

        const {samples, title} = data.data;
        const sample = samples[syntax];

        if (!sample) {
            return {
                status: 404,
                error: "SampleNotFound",
            };
        }

        return {
            props: {
                sample,
                title,
            },
        };
    }
</script>

<script>
    import {onMount} from "svelte";

    import {goto} from "$app/navigation";
    import {Heroes as KitHeroes, unescape_html} from "@kahi-ui/docs-kit/shared";

    import {create_workspace} from "../../../client/workspaces";

    import * as Heroes from "../../../components/heroes";

    export let sample = null;
    export let title = "N/A";

    onMount(async () => {
        const script = unescape_html(sample);
        const {identifier} = await create_workspace(script, title);

        goto(`/repl?workspace=${identifier}`);
    });
</script>

{#if browser}
    <Heroes.CreatingWorkspace {title} />
{:else}
    <KitHeroes.NotSupported />
{/if}

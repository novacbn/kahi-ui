<script context="module">
    import {CONTENT_INDEX} from "../../shared/environment";

    export async function load({fetch, page}) {
        let {path = ""} = page.params;

        // NOTE: / HACK: Apparently SSR fetch doesn't follow redirects... so we
        // need to retry with the content index instead
        let response = await fetch(`/api/v1/content/${path}/${CONTENT_INDEX}.json`);
        //if (response.status === 404) response = await fetch(`/api/v1/content/${path}.json`);

        let payload, error;
        try {
            payload = await response.json();
        } catch {
            error = (await response.text()) ?? "UnknownError";
        }

        if (!response.ok) {
            return {
                status: response.status,
                error,
            };
        }

        return {
            props: {
                meta: payload.data.meta,
                render: payload.data.render,
            },
        };
    }
</script>

<script>
    import {META_TITLE} from "../../shared/environment";

    import * as Documentation from "../../components/documentation";

    export let meta = {};
    export let render = "N/A";

    $: title = meta.title ? `${meta.title} — ${META_TITLE}` : META_TITLE;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

{@html render}

<Documentation.Footer {meta} />

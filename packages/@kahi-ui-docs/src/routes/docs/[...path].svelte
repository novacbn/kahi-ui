<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IContentGet, IRouteError} from "../../shared/types/api";

    export const load: Load = async ({fetch, page}) => {
        const {path = ""} = page.params;

        const response = await fetch(`/api/v1/content/${path}.json`);
        if (!response.ok) {
            const data = (await response.json()) as IRouteError;
            return {
                status: 404,
                error: data.code,
            };
        }

        const data = (await response.json()) as IContentGet;
        return {
            props: {
                content: data.data,
            },
        };
    };
</script>

<script lang="ts">
    import {EDIT_ENABLED, META_TITLE, TIMESTAMP_ENABLED} from "../../shared/environment";
    import type {IContent} from "../../shared/types/content";

    import DocumentationFooter from "../../components/documentation/DocumentationFooter.svelte";
    import DocumentationProperties from "../../components/documentation/DocumentationProperties.svelte";

    export let content: IContent;
</script>

<svelte:head>
    <title>{content.meta.title} — {META_TITLE}</title>
</svelte:head>

{@html content.render}

{#if content.meta.properties}
    <DocumentationProperties properties={content.meta.properties} />
{/if}

{#if EDIT_ENABLED || TIMESTAMP_ENABLED}
    <DocumentationFooter meta={content.meta} />
{/if}

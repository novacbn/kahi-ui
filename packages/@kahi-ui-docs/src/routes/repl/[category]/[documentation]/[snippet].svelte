<script context="module" lang="ts">
    import {browser} from "$app/env";
    import * as KahiUI from "@kahi-ui/framework";
    import Prism from "prismjs";
    import type {IPipelineContext, IPipelineImports} from "svelte-pipeline";
    import type {Load} from "@sveltejs/kit";

    const highlightElement = (element: HTMLElement, syntax: string): void =>
        Prism.highlightElement(element);

    import {unescape_html} from "@kahi-ui/docs-kit/shared";

    import IMAGE_AVATAR from "../../../../assets/images/avatar.webp";
    import IMAGE_BACKGROUND from "../../../../assets/images/background.webp";

    import type {IContentGet} from "../../../../shared/types/api";

    const PIPELINE_CONTEXT: IPipelineContext = {
        IMAGE_AVATAR,
        IMAGE_BACKGROUND,
    };

    const PIPELINE_IMPORTS: IPipelineImports = {
        "@kahi-ui/framework": KahiUI,
    };

    export const load: Load = async ({fetch, page}) => {
        const {category, documentation, snippet} = page.params;
        let {rotation = ""} = Object.fromEntries(
            // HACK: When deployed to GitHub Pages, GitHub auto directs `/repl/XXX/YYY/ZZZ` -> `/repl/XXX/YYY/ZZZ/`,
            // which SvelteKit for some reason doesn't pick up the query params
            browser ? new URLSearchParams(location.search).entries() : page.query.entries()
        );

        if (!category || !documentation || !snippet) {
            return {
                status: 404,
                error: "InvalidDocumentationSnippet",
            };
        }

        const response = await fetch(`/api/v1/content/${category}/${documentation}.json`);
        if (!response.ok) {
            return {
                status: 404,
                error: "InvalidDocumentationSnippet",
            };
        }

        const data = (await response.json()) as IContentGet;
        const {snippets} = data.data.meta;

        const selected_snippet = snippets.find((value) => value.identifier === snippet);
        if (
            !selected_snippet ||
            (selected_snippet.syntax !== "html" && selected_snippet.syntax !== "svelte")
        ) {
            return {
                status: 404,
                error: "InvalidDocumentationSnippet",
            };
        }

        return {
            props: {
                horizontal: rotation.toLowerCase() === "horizontal",
                snippet: selected_snippet,
            },
        };
    };
</script>

<script lang="ts">
    import {viewports} from "@kahi-ui/framework";
    import {onMount, SvelteComponent} from "svelte";

    import type {ISnippet} from "@kahi-ui/docs-kit/shared";

    import REPLLoadingHero from "../../../../components/repl/REPLLoadingHero.svelte";
    import REPLUnsupportedHero from "../../../../components/repl/REPLUnsupportedHero.svelte";

    const _viewports = viewports({
        mobile: true,
        //tablet: true,
    });

    export let horizontal: boolean = false;
    export let snippet: ISnippet;

    let loaded: boolean = false;
    let error: string = "";
    let value: string = unescape_html(snippet.script);

    function on_error(event: CustomEvent<{message: string}>) {
        const {message} = event.detail;

        // TODO: Surface error messages
        error = message;
        loaded = true;
    }

    function on_compile(event: any) {
        error = "";
        loaded = true;
    }

    let REPL_ROTATION: any, REPL_VIEWS: any, Split: typeof SvelteComponent;
    onMount(async () => {
        ({REPL_ROTATION, REPL_VIEWS, Split} = await import("svelte-pipeline/repl"));
    });
</script>

{#if browser}
    {#if Split}
        <svelte:component
            this={Split}
            context={PIPELINE_CONTEXT}
            imports={PIPELINE_IMPORTS}
            rotation={horizontal && !$_viewports
                ? REPL_ROTATION.horizontal
                : REPL_ROTATION.vertical}
            split={0.15}
            view={REPL_VIEWS.split}
            style={loaded ? "" : "display:none;"}
            {highlightElement}
            dev
            bind:value
            on:evaluationError={on_error}
            on:evaluationCompile={on_compile}
        >
            <svelte:fragment slot="editor-loading">
                <REPLLoadingHero />
            </svelte:fragment>

            <svelte:fragment slot="render-loading">
                <REPLLoadingHero />
            </svelte:fragment>
        </svelte:component>
    {/if}

    {#if !loaded}
        <REPLLoadingHero />
    {/if}
{:else}
    <!-- 
        TODO: Should the fall through should be compiling snippet in SSR mode and
        rendering it here
    -->

    <REPLUnsupportedHero />
{/if}

<style>
    :global(.repl-stack) {
        height: 100vh;
    }

    :global(.repl-editor) {
        border-radius: 0;
    }
</style>

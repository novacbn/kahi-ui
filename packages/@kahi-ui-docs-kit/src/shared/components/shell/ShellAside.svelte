<script lang="ts">
    /**
     * TODO: Detect page update and scroll menu to new page if applicable
     */

    import {browser} from "$app/env";
    import {page} from "$app/stores";
    import {Anchor, Aside, ContextButton, Stack} from "@kahi-ui/framework";
    import {onMount} from "svelte";
    import {Menu} from "svelte-feather/components/Menu";
    import {X} from "svelte-feather/components/X";

    import type {INavigationMenu} from "../../types/navigation";
    import {map_navigation_items} from "../../types/navigation";

    import ThemeButton from "../buttons/ThemeButton.svelte";
    import DataMenu from "../menus/DataMenu.svelte";

    let element: HTMLElement;

    export let branding: string = "N/A";
    export let href: string = "";
    export let items: INavigationMenu[] = [];
    export let state: boolean = false;

    $: _items = map_navigation_items<INavigationMenu>(items, $page.path, false, true);

    onMount(() => {
        const current_link = element.querySelector("a[aria-current]");

        if (current_link) {
            current_link.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    });
</script>

<svelte:head>
    <style>
        html,
        body {
            width: 100%;
            height: 100%;
        }
    </style>
</svelte:head>

<Stack class="shell-aside-stack" orientation="horizontal" min_height="100">
    <Aside.Container
        bind:element
        class="shell-aside"
        logic_id="shell-aside"
        palette="dark"
        variation="sticky"
        height="viewport-100"
        max_height="100"
        bind:state
        captive
        dismissible
    >
        <Aside.Header>
            {#if href}
                <Anchor href="/">{branding}</Anchor>
            {:else}
                {branding}
            {/if}
        </Aside.Header>

        {#if $$slots["insert"]}
            <slot name="insert" />
        {/if}

        <Aside.Section>
            <DataMenu items={_items} />
        </Aside.Section>

        {#if $$slots["footer"]}
            <Aside.Footer>
                <slot name="footer" />

                {#if browser}
                    <ThemeButton palette="light" variation="clear" />
                {/if}
            </Aside.Footer>
        {/if}

        <ContextButton hidden={["desktop", "widescreen"]} size="large">
            <Menu />
        </ContextButton>

        <ContextButton
            palette="dark"
            variation="clear"
            size="large"
            hidden={["desktop", "widescreen"]}
        >
            <X />
        </ContextButton>
    </Aside.Container>

    <slot />
</Stack>

<style>
    :global(.shell-aside) {
        /** HACK: Needed to prevent layout shifting whenever Browser-only content is added */

        width: 30ch;
    }
</style>

<script lang="ts">
    /**
     * TODO: Detect page update and scroll menu to new page if applicable
     */

    import {browser} from "$app/env";
    import {page} from "$app/stores";
    import {Anchor, Aside, Container, ContextButton, Stack} from "@kahi-ui/framework";
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
            max-height: 100vh;
        }

    </style>
</svelte:head>

<Stack orientation="horizontal">
    <Aside.Container
        bind:element
        class="shell-aside"
        logic_id="shell-aside"
        palette="dark"
        variation="sticky"
        height="viewport-100"
        max_height="100"
        captive
        dismissable
    >
        <Aside.Header>
            {#if href}
                <Anchor href="/">{branding}</Anchor>
            {:else}
                {branding}
            {/if}
        </Aside.Header>

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

        <ContextButton>
            <Menu />
        </ContextButton>

        <ContextButton palette="dark" variation="clear">
            <X />
        </ContextButton>
    </Aside.Container>

    <Container viewport={["mobile", "widescreen:desktop"]} margin_x="auto" padding_bottom="large">
        <slot />
    </Container>
</Stack>

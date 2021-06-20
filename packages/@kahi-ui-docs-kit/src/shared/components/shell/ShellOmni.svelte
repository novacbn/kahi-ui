<script lang="ts">
    import {browser} from "$app/env";
    import {page} from "$app/stores";
    import {
        Anchor,
        ContextButton,
        Omni,
        Spacer,
        htmlpalette,
        prefersdark,
        IS_BROWSER,
    } from "@kahi-ui/framework";
    import {Menu} from "svelte-feather/components/Menu";
    import {Moon} from "svelte-feather/components/Moon";
    import {X} from "svelte-feather/components/X";
    import {Sun} from "svelte-feather/components/Sun";

    import type {INavigationBar} from "../../types/navigation";
    import {map_navigation_items} from "../../types/navigation";

    import {is_darkmode_next, on_theme_click} from "../buttons/ThemeButton.svelte";
    import DataMenu from "../menus/DataMenu.svelte";

    const _htmlpalette = htmlpalette();
    const _prefersdark = prefersdark();

    export let branding: string = "N/A";
    export let href: string = "";

    export let center_items: INavigationBar[] = [];
    export let right_items: INavigationBar[] = [];

    $: _is_darkmode_next = is_darkmode_next($_htmlpalette, $_prefersdark);
    $: _center_items = map_navigation_items<INavigationBar>(center_items, $page.path, false, true);
    $: _right_items = !IS_BROWSER
        ? map_navigation_items<INavigationBar>(right_items, $page.path)
        : [
              ...map_navigation_items<INavigationBar>(right_items, $page.path),
              {
                  icon: _is_darkmode_next ? Moon : Sun,
                  text: _is_darkmode_next ? "DARK" : "LIGHT",
                  on_click: on_theme_click.bind(null, _htmlpalette, _prefersdark),
              },
          ];

</script>

<Omni.Container
    class="shell-omni"
    logic_id="shell-omni"
    palette="dark"
    variation="sticky"
    width="100"
    captive
    dismissible
>
    <Omni.Header>
        {#if href}
            <Anchor href="/">{branding}</Anchor>
        {:else}
            {branding}
        {/if}

        {#if $$slots["footer"]}
            <slot name="footer" />
        {/if}

        <Spacer hidden={["desktop", "widescreen"]} />

        <ContextButton palette="light" variation="clear" hidden={["desktop", "widescreen"]}>
            <Menu />
        </ContextButton>

        <ContextButton palette="light" variation="clear" hidden={["desktop", "widescreen"]}>
            <X />
        </ContextButton>
    </Omni.Header>

    <Omni.Footer>
        <Omni.Section>
            <DataMenu
                items={_center_items}
                orientation={["desktop:horizontal", "widescreen:horizontal"]}
            />
        </Omni.Section>

        <Omni.Section>
            <DataMenu
                items={_right_items}
                orientation={["desktop:horizontal", "widescreen:horizontal"]}
            />
        </Omni.Section>
    </Omni.Footer>
</Omni.Container>

<slot />

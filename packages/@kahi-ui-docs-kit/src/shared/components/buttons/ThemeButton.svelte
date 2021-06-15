<script context="module" lang="ts">
    import type {IAttributeStore, IPrefersSchemeStore} from "@kahi-ui/framework";
    import {get} from "svelte/store";

    export function is_darkmode_next(palette: string, darkmode: boolean): boolean {
        return palette === "dark" || (!palette && darkmode);
    }

    export function on_theme_click(
        htmlpalette: IAttributeStore,
        prefersdark: IPrefersSchemeStore,
        event: MouseEvent
    ): void {
        const palette = get(htmlpalette);
        const darkmode = get(prefersdark);

        if (palette) htmlpalette.set(palette === "dark" ? "light" : "dark");
        else htmlpalette.set(darkmode ? "light" : "dark");
    }

</script>

<script lang="ts">
    import {Button, htmlpalette, prefersdark} from "@kahi-ui/framework";
    import {Moon} from "svelte-feather/components/Moon";
    import {Sun} from "svelte-feather/components/Sun";

    export let element: HTMLElement | null = null;

    const _htmlpalette = htmlpalette();
    const _prefersdark = prefersdark();

    export let active: boolean = false;
    export let disabled: boolean = false;

</script>

<Button bind:element {...$$props} on:click={on_theme_click.bind(null, _htmlpalette, _prefersdark)}>
    {#if is_darkmode_next($_htmlpalette, $_prefersdark)}
        <Sun />
        LIGHT
    {:else}
        <Moon />
        DARK
    {/if}
</Button>

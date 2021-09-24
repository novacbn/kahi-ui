<script lang="ts">
    import type {ARIA_CURRENT_ARGUMENT} from "../../../types/aria";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";

    import Anchor from "../../navigation/anchor/Anchor.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLAnchorElement;

        active?: boolean;
        current?: ARIA_CURRENT_ARGUMENT;
        disabled?: boolean;

        href?: string;
        rel?: string;
        target?: string;

        palette?: DESIGN_PALETTE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = undefined;
    export let current: $$Props["current"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    export let href: $$Props["href"] = "";
    export let rel: $$Props["rel"] = "";
    export let target: $$Props["target"] = "";

    export let palette: $$Props["palette"] = undefined;
</script>

<Anchor bind:element {current} {active} {disabled} {href} {rel} {palette} {target} on:click>
    <slot />
</Anchor>

<script lang="ts">
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import Anchor from "../anchor/Anchor.svelte";

    import BreadcrumbItem from "./BreadcrumbItem.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLIElement;

        active?: boolean;

        download?: string;
        href?: string;
        rel?: string;
        target?: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let active: boolean = false;

    export let download: $$Props["download"] = "";
    export let href: $$Props["href"] = "";
    export let rel: $$Props["rel"] = "";
    export let target: $$Props["target"] = "";
</script>

<BreadcrumbItem bind:element {...$$props}>
    <Anchor current={active ? "page" : undefined} {download} {href} {rel} {target} on:click>
        <slot />
    </Anchor>
</BreadcrumbItem>

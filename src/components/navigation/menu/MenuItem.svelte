<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";

    import {map_global_attributes} from "../../../lib/util/attributes";

    export let element: HTMLLIElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let name: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;
</script>

<li bind:this={element} {...map_global_attributes($$props)}>
    <slot />
</li>

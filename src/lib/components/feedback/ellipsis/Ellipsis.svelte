<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLSpanElement;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};
</script>

<span bind:this={element} {...map_global_attributes($$props)} class="ellipsis {_class}">
    <span>
        <slot>.</slot>
    </span>

    <span>
        <slot>.</slot>
    </span>

    <span>
        <slot>.</slot>
    </span>
</span>

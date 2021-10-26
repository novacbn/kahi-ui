<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;
    } & IHTML5Properties &
        IGlobalProperties &
        ISizeProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};
</script>

<div bind:this={element} {...map_global_attributes($$props)} class="center {_class}">
    <slot />
</div>

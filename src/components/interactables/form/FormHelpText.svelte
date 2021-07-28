<script lang="ts">
    // TODO: Stories (?)

    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import {map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLElement;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};
</script>

<small bind:this={element} {...map_global_attributes($$props)} class="form-help-text {_class}">
    <slot />
</small>

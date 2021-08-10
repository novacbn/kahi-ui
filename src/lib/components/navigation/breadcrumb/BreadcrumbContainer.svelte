<script lang="ts">
    import type {SvelteComponent} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {make_component_context} from "../../../stores/component";

    import {map_aria_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        separator: string | typeof SvelteComponent;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let separator: $$Props["separator"] = "/";

    const _separator = make_component_context(separator);

    $: $_separator = separator;
</script>

<nav
    bind:this={element}
    {...map_global_attributes($$props)}
    class="breadcrumb {_class}"
    {...map_aria_attributes({label: "breadcrumb"})}
>
    <ol>
        <slot />
    </ol>
</nav>
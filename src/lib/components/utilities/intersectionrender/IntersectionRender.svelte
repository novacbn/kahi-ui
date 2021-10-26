<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import type {IIntersectionObserverOptions} from "../../../actions/intersection_observer";
    import {intersection_observer} from "../../../actions/intersection_observer";

    import {map_global_attributes} from "../../../util/attributes";
    import {IS_SERVER} from "../../../util/environment";

    type $$Events = {
        intersectionend: CustomEvent<IntersectionObserverEntry[]>;

        intersectionstart: CustomEvent<IntersectionObserverEntry[]>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        fallthrough?: boolean;
        loading?: "eager";
        has_intersected?: boolean;
        is_intersecting?: boolean;

        root?: IIntersectionObserverOptions["root"];
        root_margin?: IIntersectionObserverOptions["root_margin"];
        threshold?: IIntersectionObserverOptions["threshold"];
    } & IHTML5Properties &
        IGlobalProperties &
        ISizeProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let fallthrough: $$Props["fallthrough"] = undefined;
    export let loading: $$Props["loading"] = undefined;
    export let has_intersected: $$Props["has_intersected"] = undefined;
    export let is_intersecting: $$Props["is_intersecting"] = undefined;

    export let root: $$Props["root"] = undefined;
    export let root_margin: $$Props["root_margin"] = undefined;
    export let threshold: $$Props["threshold"] = undefined;

    function on_intersect(intersections: IntersectionObserverEntry[]): void {
        is_intersecting = intersections.some((entry) => entry.isIntersecting);
        if (loading === "eager") has_intersected = is_intersecting;
        else if (is_intersecting) has_intersected = true;

        dispatch(is_intersecting ? "intersectionstart" : "intersectionend", intersections);
    }
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="intersection-render {_class}"
    use:intersection_observer={{
        on_intersect,
        root,
        root_margin,
        threshold,
    }}
>
    {#if has_intersected || (IS_SERVER && fallthrough)}
        <slot />
    {/if}
</div>

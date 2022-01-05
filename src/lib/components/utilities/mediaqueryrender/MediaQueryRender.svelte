<script lang="ts">
    import type {IMediaQueryStore} from "../../../stores/mediaquery";
    import {MEDIA_QUERIES_BEHAVIORS, mediaquery, mediaqueries} from "../../../stores/mediaquery";

    import {IS_SERVER} from "../../../util/environment";

    type $$Props = {
        fallthrough?: boolean;

        behavior?: keyof typeof MEDIA_QUERIES_BEHAVIORS;
        queries?: string | string[];
    };

    type $$Slots = {
        default: {};
    };

    export let fallthrough: $$Props["fallthrough"] = undefined;

    export let behavior: $$Props["behavior"] = MEDIA_QUERIES_BEHAVIORS.or;
    export let queries: $$Props["queries"] = undefined;

    let _query_store: IMediaQueryStore | null = null;
    $: {
        if (queries) {
            if (queries instanceof Array) _query_store = mediaqueries(queries, {behavior});
            else _query_store = mediaquery(queries);
        } else _query_store = null;
    }
</script>

{#if (_query_store && $_query_store) || (IS_SERVER && fallthrough)}
    <slot />
{/if}

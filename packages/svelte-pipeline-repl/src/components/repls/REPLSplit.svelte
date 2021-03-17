<script>
    import {mouse_slider} from "../../util/actions";
    import {REPL_ROTATION, REPL_VIEWS} from "../../util/constants";

    import REPLDivider from "../interface/REPLDivider.svelte";
    import REPLEditor from "../interface/REPLEditor.svelte";
    import REPLFrame from "../interface/REPLFrame.svelte";
    import REPLRender from "../interface/REPLRender.svelte";
    import REPLStack from "../interface/REPLStack.svelte";

    export let context = {};
    export let imports = {};

    export let grabbing = false;
    export let rotation = REPL_ROTATION.vertical;
    export let view = REPL_VIEWS.split;

    export let split = 0.5;
    export let value = "";

    let divider = null;
    let stack = null;

    function on_move(percent) {
        split = percent;
    }

    function on_state(state) {
        grabbing = state;
    }

    let handle;
    $: {
        if (handle) handle.destroy();
        if (divider && stack) {
            handle = mouse_slider(stack, {
                horizontal,
                move: on_move,
                state: on_state,
                target: divider,
            });
        }
    }

    $: horizontal = rotation === REPL_ROTATION.horizontal ? true : undefined;
    $: grabbing_style = grabbing
        ? "cursor:var(--repl-split-cursor-grabbing, grabbing);"
        : undefined;

    $: split_style = horizontal
        ? `width:${view == REPL_VIEWS.editor ? 100 : split * 100}%;`
        : `height:${view == REPL_VIEWS.editor ? 100 : split * 100}%;`;
</script>

<REPLStack bind:element={stack} class="repl-split" style={grabbing_style} {horizontal}>
    <REPLFrame class="repl-frame-editor" hidden={view === REPL_VIEWS.render} style={split_style}>
        <REPLEditor bind:value />
    </REPLFrame>

    {#if view === REPL_VIEWS.split}
        <REPLDivider bind:element={divider} horizontal={horizontal ? undefined : true} />
    {/if}

    <REPLFrame class="repl-frame-render" hidden={view === REPL_VIEWS.editor}>
        <REPLRender on:error on:evaluate {context} {imports} {value} />
    </REPLFrame>
</REPLStack>

<style>
    :global(.repl-split > .repl-frame-render) {
        flex-grow: 1;
    }
</style>

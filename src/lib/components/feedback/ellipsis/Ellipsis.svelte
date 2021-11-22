<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLSpanElement;

        character?: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export let style: $$Props["style"] = "";

    export {_class as class};

    export let character: $$Props["character"] = "";

    $: _character = character ? `\\${character.charCodeAt(0).toString(16)}` : undefined;
</script>

<span
    bind:this={element}
    {...map_global_attributes($$props)}
    class="ellipsis {_class}"
    style={character ? `${style}--character:"${_character}";` : style}
    use:forward_actions={{actions}}
    on:click
    on:contextmenu
    on:dblclick
    on:focusin
    on:focusout
    on:keydown
    on:keyup
    on:pointercancel
    on:pointerdown
    on:pointerenter
    on:pointerleave
    on:pointermove
    on:pointerout
    on:pointerup
>
    <span />
    <span />
    <span />
</span>

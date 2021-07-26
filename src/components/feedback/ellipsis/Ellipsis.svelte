<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import {map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLSpanElement;

        character?: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

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
>
    <span />
    <span />
    <span />
</span>

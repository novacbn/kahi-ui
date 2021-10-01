<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Scrollable from "../components/layouts/scrollable/Scrollable.svelte";
    import Spacer from "../components/layouts/spacer/Spacer.svelte";

    import {clipping} from "./clipping";

    let clippings = null;

    function on_clip(_clippings) {
        clippings = _clippings.is_clipping ? _clippings : null;
        console.log("on_clip", {clippings: _clippings});
    }
</script>

<Meta title="Actions/clipping" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Scrollable style="width:25rem;height:15rem;">
        <Spacer spacing="huge" />
        <Spacer spacing="huge" />

        <Spacer spacing="huge" />
        <Spacer spacing="huge" />

        <div style="display:flex;justify-content:center;width:65rem;">
            <div
                class="box"
                data-palette={clippings ? "negative" : "affirmative"}
                data-padding="small"
                use:clipping={{on_clip}}
                style="width:15rem;"
            >
                {clippings ? `I was clipped!` : "I am currently not clipped..."}
            </div>
        </div>

        <Spacer spacing="huge" />
        <Spacer spacing="huge" />

        <Spacer spacing="huge" />
        <Spacer spacing="huge" />
    </Scrollable>
</Story>

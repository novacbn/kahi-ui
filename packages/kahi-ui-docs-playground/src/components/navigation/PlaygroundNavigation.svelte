<script>
    import {Button, Group, Omni} from "@kahi-ui/svelte";
    import {IconCode, IconColumns, IconMaximize, IconRotateCw} from "svelte-feather";

    import {PLAYGROUND_ROTATION, PLAYGROUND_VIEWS} from "../../util/constants";

    import * as Form from "../form";

    export let rotation = PLAYGROUND_ROTATION.horizontal;
    export let title = "N/A";
    export let view = PLAYGROUND_VIEWS.split;

    function on_rotation_click(event) {
        rotation =
            rotation === PLAYGROUND_ROTATION.horizontal
                ? PLAYGROUND_ROTATION.vertical
                : PLAYGROUND_ROTATION.horizontal;
    }

    function on_view_click(_view, event) {
        view = _view;
    }
</script>

<style>
    :global(.playground-navigation) {
        --omni-margin: 0;
    }

    :global(.playground-navigation button > :first-child) {
        margin-right: var(--spacing-text-small);
    }
</style>

<Omni.Container class="playground-navigation" palette="dark">
    <Omni.Heading>
        <Form.EditableText palette="light" value={title} on:change />
    </Omni.Heading>

    <Omni.Footer>
        <Group>
            <Button
                palette="light"
                variation="clear"
                active={view === PLAYGROUND_VIEWS.split}
                on:click={on_view_click.bind(null, PLAYGROUND_VIEWS.split)}>
                <IconColumns size="1em" />
                Split
            </Button>

            <Button
                palette="light"
                variation="clear"
                active={view === PLAYGROUND_VIEWS.code}
                on:click={on_view_click.bind(null, PLAYGROUND_VIEWS.code)}>
                <IconCode size="1em" />
                Code
            </Button>

            <Button
                palette="light"
                variation="clear"
                active={view === PLAYGROUND_VIEWS.preview}
                on:click={on_view_click.bind(null, PLAYGROUND_VIEWS.preview)}>
                <IconMaximize size="1em" />
                Preview
            </Button>
        </Group>

        <Button palette="light" variation="clear" on:click={on_rotation_click}>
            <IconRotateCw size="1em" />
            Rotate
        </Button>
    </Omni.Footer>
</Omni.Container>

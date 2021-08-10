<script>
    import {Button} from "../../../interactables/button";
    import {Heading} from "../../../typography/heading";
    import {Stack} from "../../../layouts/stack";

    import Ellipsis from "../Ellipsis.svelte";

</script>

<Stack alignment_x="left" spacing="medium">
    <Button disabled>
        <span>
            Submit
            <Ellipsis {...$$props} />
        </span>
    </Button>

    <Heading>
        Loading
        <Ellipsis {...$$props} />
    </Heading>
</Stack>

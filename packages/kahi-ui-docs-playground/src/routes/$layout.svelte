<script>
    import {Container} from "@kahi-ui/svelte";

    import * as Heroes from "../components/heroes";
    import * as Navigation from "../components/navigation";

    export let resumable = false;
</script>

<Navigation.Application position="top" />
<Heroes.Landing {resumable} />

<Container as="main">
    <slot />
</Container>

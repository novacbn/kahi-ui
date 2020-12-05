<script>
    import {Container} from "@kahi-ui/svelte";

    import * as Navigation from "../components/navigation";
</script>

<Navigation.Application position="top" />
<slot name="hero" />

<Container as="main">
    <slot />
</Container>

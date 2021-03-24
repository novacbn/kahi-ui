<script context="module">
    export const prerender = true;
</script>

<script>
    import {Spacer} from "@kahi-ui/svelte";

    import Components from "./_sections/Components.svelte";
    import Elements from "./_sections/Elements.svelte";
    import Form from "./_sections/Form.svelte";
    import Layouts from "./_sections/Layouts.svelte";
    import Navigation from "./_sections/Navigation.svelte";
    import Overlays from "./_sections/Overlays.svelte";
    import Surfaces from "./_sections/Surfaces.svelte";
    import Typography from "./_sections/Typography.svelte";
</script>

<Typography />
<Spacer spacing="huge" />

<Elements />
<Spacer spacing="huge" />

<Form />
<Spacer spacing="huge" />

<Components />
<Spacer spacing="huge" />

<Surfaces />
<Spacer spacing="huge" />

<Overlays />
<Spacer spacing="huge" />

<Layouts />
<Spacer spacing="huge" />

<Navigation />

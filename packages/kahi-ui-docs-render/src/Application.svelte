<script>
    import {Spacer} from "@kahi-ui/svelte";

    import Layout from "./$layout.svelte";

    import Components from "./$Components.svelte";
    import Elements from "./$Elements.svelte";
    import Form from "./$Form.svelte";
    import Layouts from "./$Layouts.svelte";
    import Navigation from "./$Navigation.svelte";
    import Overlays from "./$Overlays.svelte";
    import Surfaces from "./$Surfaces.svelte";
    import Typography from "./$Typography.svelte";
</script>

<Layout>
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
</Layout>

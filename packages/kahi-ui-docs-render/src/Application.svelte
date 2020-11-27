<script>
    import {Spacer} from "@kahi-ui/svelte";

    import Layout from "./$layout.svelte";

    import Components from "./components/sections/Components.svelte";
    import Elements from "./components/sections/Elements.svelte";
    import Form from "./components/sections/Form.svelte";
    import Layouts from "./components/sections/Layouts.svelte";
    import Navigation from "./components/sections/Navigation.svelte";
    import Overlays from "./components/sections/Overlays.svelte";
    import Surfaces from "./components/sections/Surfaces.svelte";
    import Typography from "./components/sections/Typography.svelte";
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

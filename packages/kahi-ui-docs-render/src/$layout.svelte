<script>
    import {Anchor, Container, Omni, Popover} from "@kahi-ui/svelte";

    import * as Menus from "./components/menus";

    import {COMPONENTS_MANIFEST} from "./components/sections/Components.svelte";
    import {ELEMENTS_MANIFEST} from "./components/sections/Elements.svelte";
    import {FORM_MANIFEST} from "./components/sections/Form.svelte";
    import {LAYOUTS_MANIFEST} from "./components/sections/Layouts.svelte";
    import {OVERLAYS_MANIFEST} from "./components/sections/Overlays.svelte";
    import {NAVIGATION_MANIFEST} from "./components/sections/Navigation.svelte";
    import {SURFACES_MANIFEST} from "./components/sections/Surfaces.svelte";
    import {TYPOGRAPHY_MANIFEST} from "./components/sections/Typography.svelte";

    const RENDER_SECTIONS = [
        {links: TYPOGRAPHY_MANIFEST, id: "typography", text: "Typography"},
        {links: ELEMENTS_MANIFEST, id: "elements", text: "Elements"},
        {links: FORM_MANIFEST, id: "form", text: "Form"},
        {links: COMPONENTS_MANIFEST, id: "components", text: "Components"},
        {links: LAYOUTS_MANIFEST, id: "layouts", text: "Layouts"},
        {links: SURFACES_MANIFEST, id: "surfaces", text: "Surfaces"},
        {links: OVERLAYS_MANIFEST, id: "overlays", text: "Overlays"},
        {links: NAVIGATION_MANIFEST, id: "navigation", text: "Navigation"},
    ];
</script>

<Omni.Container palette="dark" position="top">
    <Omni.Heading>
        <Anchor href="#">Kahi UI</Anchor>
    </Omni.Heading>

    <Omni.Body>
        <Popover.Container id="render-omni" sizing="medium">
            <Popover.Button palette="light" variation="clear">Jump To...</Popover.Button>

            <Popover.Region>
                <Menus.Contents links={RENDER_SECTIONS} palette="light" />
            </Popover.Region>
        </Popover.Container>
    </Omni.Body>

    <Omni.Footer />
</Omni.Container>

<Container>
    <slot />
</Container>

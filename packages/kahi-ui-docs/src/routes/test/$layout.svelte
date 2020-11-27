<script>
    import {Omni, Popover} from "@kahi-ui/svelte";

    import * as Menus from "../../components/menus";

    import {anchor_scroll_to} from "../../util/actions";

    import {COMPONENTS_MANIFEST} from "./$Components.svelte";
    import {ELEMENTS_MANIFEST} from "./$Elements.svelte";
    import {FORM_MANIFEST} from "./$Form.svelte";
    import {LAYOUTS_MANIFEST} from "./$Layouts.svelte";
    import {OVERLAYS_MANIFEST} from "./$Overlays.svelte";
    import {NAVIGATION_MANIFEST} from "./$Navigation.svelte";
    import {SURFACES_MANIFEST} from "./$Surfaces.svelte";
    import {TYPOGRAPHY_MANIFEST} from "./$Typography.svelte";

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

<style>
    div {
        display: contents;
    }
</style>

<Omni.Container palette="dark" position="top">
    <Omni.Heading><a href="#/">Kahi UI</a></Omni.Heading>

    <Omni.Body>
        <Popover.Container id="render-omni" sizing="medium">
            <Popover.Button palette="light" variation="clear">Jump To...</Popover.Button>

            <Popover.Region>
                <div use:anchor_scroll_to>
                    <Menus.Contents links={RENDER_SECTIONS} palette="light" />
                </div>
            </Popover.Region>
        </Popover.Container>
    </Omni.Body>

    <Omni.Footer />
</Omni.Container>

<main class="container" use:anchor_scroll_to>
    <slot />
</main>

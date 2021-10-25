<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Breadcrumb from "./";
</script>

<Meta title="Navigation/Breadcrumb" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Breadcrumb.Container>
        <Breadcrumb.Anchor href="#">Home</Breadcrumb.Anchor>
        <Breadcrumb.Anchor href="#">Contacts</Breadcrumb.Anchor>
        <Breadcrumb.Anchor href="#" active>John Doe</Breadcrumb.Anchor>
    </Breadcrumb.Container>
</Story>

<Story name="Separator">
    <Breadcrumb.Container separator=">">
        <Breadcrumb.Anchor href="#">Home</Breadcrumb.Anchor>
        <Breadcrumb.Anchor href="#">Contacts</Breadcrumb.Anchor>
        <Breadcrumb.Anchor href="#" active>John Doe</Breadcrumb.Anchor>
    </Breadcrumb.Container>
</Story>

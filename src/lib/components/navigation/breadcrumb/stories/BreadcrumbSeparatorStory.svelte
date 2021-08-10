<script>
    import * as Breadcrumb from "../index";

</script>

<Breadcrumb.Container {...$$props} separator=">">
    <Breadcrumb.Anchor href="#">Home</Breadcrumb.Anchor>
    <Breadcrumb.Anchor href="#">Contacts</Breadcrumb.Anchor>
    <Breadcrumb.Anchor href="#" active>John Doe</Breadcrumb.Anchor>
</Breadcrumb.Container>

<script>
    import {Container, Grid} from "@kahi-ui/svelte";

    import * as Cards from "../components/cards";
    import * as Heroes from "../components/heroes";

    import Layout from "./$layout.svelte";
</script>

<Layout>
    <Heroes.Landing />

    <Container as="main" viewport="medium">
        <Grid points="3 1+tiny 1+small" spacing="huge">
            <Cards.Landing heading="Minimal Markup">
                Built with ease of remembering in-mind, Kahi UI strives for little as possible
                classes in markup. Utilizing semantic-like HTML where possible, and straight-forward
                data attributes to modifiy your rendering.
            </Cards.Landing>

            <Cards.Landing heading="Themeable Variables">
                Every single piece of Kahi UI is themeable via CSS Properties. Including the
                Elements, Componets, etc... themselves. Making it easy to break away from the
                centralized variables.
            </Cards.Landing>

            <Cards.Landing heading="No Strings Attached">
                Kahi UI isn't attached to any one specific Web Application framework, nor does it
                require bespoke Javascript. Kahi UI utilizes pure HTML+CSS for logic wherever
                possible. That you can progressively enhance with Javascript.
            </Cards.Landing>
        </Grid>
    </Container>
</Layout>

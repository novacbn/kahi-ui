<script>
    import {Cards, Shell} from "@kahi-ui/docs-kit/shared";
    import {Container, Grid} from "@kahi-ui/svelte";

    import * as Heroes from "../components/heroes";
</script>

<Shell.Wrapper>
    <Heroes.Landing />

    <Container as="main" viewport="medium">
        <Grid points="3 1+tiny 1+small" spacing="huge">
            <Cards.Heading heading="Minimal Markup">
                Built with ease of remembering in-mind, Kahi UI strives for little as possible
                classes in markup. Utilizing semantic-like HTML where possible, and straight-forward
                data attributes to modifiy your rendering.
            </Cards.Heading>

            <Cards.Heading heading="Themeable Variables">
                Every single piece of Kahi UI is themeable via CSS Properties, both centralized
                globals and contextual variables. Making it easy to tweak everything to your heart's
                content.
            </Cards.Heading>

            <Cards.Heading heading="No Strings Attached">
                Kahi UI isn't attached to any one specific Web Application framework, nor does it
                require bespoke Javascript. Kahi UI utilizes pure HTML+CSS for logic wherever
                possible. That you can progressively enhance with Javascript.
            </Cards.Heading>
        </Grid>
    </Container>
</Shell.Wrapper>

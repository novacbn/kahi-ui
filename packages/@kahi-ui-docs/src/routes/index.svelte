<script lang="ts">
    import {Container, Divider, Grid, Heading, Text} from "@kahi-ui/framework";
    import {Code} from "svelte-feather/components/Code";
    import {Grid as GridIcon} from "svelte-feather/components/Grid";
    import {Moon} from "svelte-feather/components/Moon";
    import {Zap} from "svelte-feather/components/Zap";

    import LandingCard from "../components/landing/LandingCard.svelte";
    import LandingFooter from "../components/landing/LandingFooter.svelte";
    import LandingHero from "../components/landing/LandingHero.svelte";

    import SnippetREPL from "../components/snippets/SnippetREPL.svelte";

</script>

<LandingHero />

<Container viewport="widescreen" padding_y="huge">
    <Heading is="h3" align="center" variation="headline" padding_x="mobile:tiny">
        Straight-forward. Minimal Markup.
    </Heading>
    <Text align="center" size="huge" margin_top="small" margin_bottom="large">
        <Text is="small">Develop more UI without writing essays worth of markup.</Text>
    </Text>

    <SnippetREPL documentation="samples/landing" snippet="hero-preview" rotation="horizontal" />

    <Divider palette="accent" margin_y="huge" />

    <Heading is="h3" align="center" variation="headline" padding_x="mobile:tiny">
        Features expected of a modern UI.
    </Heading>
    <Text align="center" size="huge" margin_top="small" margin_bottom="large">
        <Text is="small">Opinonated when needed. Flexible when wanted.</Text>
    </Text>

    <Grid points={["2", "mobile:1"]} spacing={["large", "tablet:medium", "mobile:medium"]}>
        <LandingCard icon={GridIcon} heading="Composable">
            Designed with <Text is="strong">Composability</Text> in mind, author new Components easily.
        </LandingCard>

        <LandingCard icon={Code} heading="Staticly Typed">
            Created using <Text is="strong">Typescript</Text>, so a pleasent IDE experience comes
            out-of-box.
        </LandingCard>

        <LandingCard icon={Moon} heading="Dark Mode">
            Supports automatic <Text is="strong">Dark Mode</Text>, or your choice from the built-in
            palette.
        </LandingCard>

        <LandingCard icon={Zap} heading="Progressively Enhanced">
            Most logic is embedded within <Text is="strong">HTML / CSS</Text>, with <Text
                is="strong"
            >
                Javascript
            </Text>
            enhancing the <Text is="strong">UX</Text>.
        </LandingCard>
    </Grid>
</Container>

<LandingFooter />

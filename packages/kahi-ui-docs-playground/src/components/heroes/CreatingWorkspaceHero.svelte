<script>
    import {Formatting, Hero, Modifiers} from "@kahi-ui/svelte";
    import {IconDownload} from "svelte-feather";

    export let size = "parent";
    export let title = "N/A";
</script>

<Hero.Container {size}>
    <Hero.Heading>
        <IconDownload size="1em" />
    </Hero.Heading>

    <Hero.Body>
        Workspace for
        <Modifiers.Small>
            <Formatting.Code>
                {title}
            </Formatting.Code>
        </Modifiers.Small>
        is being created...
    </Hero.Body>
</Hero.Container>

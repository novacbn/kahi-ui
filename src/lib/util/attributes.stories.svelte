<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../components/interactables/button/Button.svelte";
    import Spacer from "../components/layouts/spacer/Spacer.svelte";
    import Stack from "../components/layouts/stack/Stack.svelte";
    import Anchor from "../components/navigation/anchor/Anchor.svelte";
    import Box from "../components/surfaces/box/Box.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";
    import Text from "../components/typography/text/Text.svelte";

    const DIRECTIONS = [null, "x", "y", "left", "top", "bottom", "right"];

    const PALETTES = ["alert", "affirmative", "negative"];

    const SIZINGS = [
        "auto",
        "content-fit",
        "content-max",
        "content-min",
        "prose",
        "stretch",
        "0",
        "25",
        "33",
        "50",
        "66",
        "75",
        "100",
        "viewport-0",
        "viewport-25",
        "viewport-33",
        "viewport-50",
        "viewport-66",
        "viewport-75",
        "viewport-100",
    ];

    const SPACINGS = ["none", "tiny", "small", "medium", "large", "huge"];
</script>

<Meta title="Util/attributes" />

<Template>
    <slot />
</Template>

<Story name="style">
    <Text style="color:red;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</Story>

<Story name="id">
    <Anchor href="#target-heading">Scroll to Heading!</Anchor>

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Heading id="target-heading">Hello World!</Heading>
</Story>

<Story name="title">
    <Text title="I am some additional text!">Hover me!</Text>
</Story>

<Story name="tabindex">
    <Button tabindex="3">Index #3</Button>
    <Button tabindex="1">Index #1</Button>
    <Button tabindex="-1">Unselectable</Button>
    <Button tabindex="4">Index #4</Button>
    <Button tabindex="2">Index #2</Button>
</Story>

<Story name="hidden">
    <Box palette="accent" hidden={["mobile", "tablet"]}>
        I am visible on Desktop / Widescreen Viewports.
    </Box>

    <Box palette="affirmative" hidden={["desktop", "widescreen"]}>
        I am visible on Mobile / Tablet Viewports.
    </Box>
</Story>

<Story name="width">
    <Heading>width</Heading>
    <Stack spacing="medium">
        {#each SIZINGS as sizing, index}
            <div>
                <Text is="strong">{sizing.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} width={sizing}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack>

    <Heading margin_top="medium">min-width</Heading>
    <Stack spacing="medium">
        {#each SIZINGS as sizing, index}
            <div>
                <Text is="strong">{sizing.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} max-width={sizing}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack>

    <Heading margin_top="medium">min-width</Heading>
    <Stack spacing="medium">
        {#each SIZINGS as sizing, index}
            <div>
                <Text is="strong">{sizing.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} min-width={sizing}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="height">
    <Heading>height</Heading>
    <Stack orientation="horizontal" spacing="medium">
        {#each SIZINGS as sizing, index}
            <div>
                <Text is="strong">{sizing.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} height={sizing}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack>

    <Heading margin_top="medium">max-height</Heading>
    <Stack orientation="horizontal" spacing="medium">
        {#each SIZINGS as sizing, index}
            <div>
                <Text is="strong">{sizing.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} max-height={sizing}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack>

    <Heading margin_top="medium">min-height</Heading>
    <Stack orientation="horizontal" spacing="medium">
        {#each SIZINGS as sizing, index}
            <div>
                <Text is="strong">{sizing.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} min-height={sizing}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="margin">
    <Stack spacing="medium">
        {#each DIRECTIONS as direction}
            <div>
                <Heading>margin{direction ? `_${direction}` : ""}</Heading>
                <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
                    {#each SPACINGS as spacing}
                        <Box palette="negative">
                            <Box
                                palette="alert"
                                {...{[`margin${direction ? "_" + direction : ""}`]: spacing}}
                            >
                                {spacing.toUpperCase()}
                            </Box>
                        </Box>
                    {/each}
                </Stack>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="padding">
    <Stack spacing="medium">
        {#each DIRECTIONS as direction}
            <div>
                <Heading>padding{direction ? `_${direction}` : ""}</Heading>
                <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
                    {#each SPACINGS as spacing}
                        <Box
                            palette="accent"
                            {...{[`padding${direction ? "_" + direction : ""}`]: spacing}}
                        >
                            <Box palette="alert">
                                {spacing.toUpperCase()}
                            </Box>
                        </Box>
                    {/each}
                </Stack>
            </div>
        {/each}
    </Stack>
</Story>

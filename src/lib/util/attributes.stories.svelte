<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../components/interactables/button/Button.svelte";
    import Spacer from "../components/layouts/spacer/Spacer.svelte";
    import * as Stack from "../components/layouts/stack";
    import Anchor from "../components/navigation/anchor/Anchor.svelte";
    import Box from "../components/surfaces/box/Box.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";
    import Text from "../components/typography/text/Text.svelte";

    const DIRECTIONS = [null, "x", "y", "left", "top", "bottom", "right"];

    const PALETTES = ["alert", "affirmative", "negative"];

    const SIZES = [
        "auto",
        "none",
        "content-fit",
        "content-max",
        "content-min",
        "prose",
        "0",
        "25",
        "33",
        "50",
        "66",
        "75",
        "100",
        "mobile",
        "tablet",
        "desktop",
        "widescreen",
        "viewport-0",
        "viewport-25",
        "viewport-33",
        "viewport-50",
        "viewport-66",
        "viewport-75",
        "viewport-100",
        "nano",
        "tiny",
        "small",
        "medium",
        "large",
        "huge",
        "massive",
        "icon-nano",
        "icon-tiny",
        "icon-small",
        "icon-medium",
        "icon-large",
        "icon-huge",
        "icon-massive",
    ];

    const SPACINGS = ["none", "nano", "tiny", "small", "medium", "large", "huge", "massive"];
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

<Story name="contents">
    <Box palette="accent" contents={["mobile", "tablet"]}>
        I have no styling on Mobile / Tablet Viewports.
    </Box>

    <Box palette="affirmative" contents={["desktop", "widescreen"]}>
        I have no styling on Desktop / Widescreen Viewports.
    </Box>
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
    <Stack.Container spacing="medium">
        {#each SIZES as size, index (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} width={size}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack.Container>

    <Heading margin_top="medium">min-width</Heading>
    <Stack.Container spacing="medium">
        {#each SIZES as size, index (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} max-width={size}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack.Container>

    <Heading margin_top="medium">min-width</Heading>
    <Stack.Container spacing="medium">
        {#each SIZES as size, index (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} min-width={size}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="height">
    <Heading>height</Heading>
    <Stack.Container orientation="horizontal" spacing="medium">
        {#each SIZES as size, index (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} height={size}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack.Container>

    <Heading margin_top="medium">max-height</Heading>
    <Stack.Container orientation="horizontal" spacing="medium">
        {#each SIZES as size, index (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} max-height={size}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack.Container>

    <Heading margin_top="medium">min-height</Heading>
    <Stack.Container orientation="horizontal" spacing="medium">
        {#each SIZES as size, index (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} min-height={size}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="size">
    <Heading>size</Heading>
    <Stack.Container orientation="horizontal" spacing="medium">
        {#each SIZES as size, index (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} {size}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack.Container>

    <Heading margin_top="medium">max-size</Heading>
    <Stack.Container orientation="horizontal" spacing="medium">
        {#each SIZES as size, index (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} max-size={size}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack.Container>

    <Heading margin_top="medium">min-size</Heading>
    <Stack.Container orientation="horizontal" spacing="medium">
        {#each SIZES as size, index (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>
                <Box palette={PALETTES[index % PALETTES.length]} min-size={size}>
                    <Text variation="truncate">Lorem ipsum dolor</Text>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="margin">
    <Stack.Container spacing="medium">
        {#each DIRECTIONS as direction}
            <div>
                <Heading>margin{direction ? `_${direction}` : ""}</Heading>
                <Stack.Container
                    orientation="horizontal"
                    alignment_y="top"
                    spacing="medium"
                    variation="wrap"
                >
                    {#each SPACINGS as spacing}
                        <Box palette="negative">
                            <Box
                                palette="neutral"
                                {...{[`margin${direction ? "_" + direction : ""}`]: spacing}}
                            >
                                {spacing.toUpperCase()}
                            </Box>
                        </Box>
                    {/each}
                </Stack.Container>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="padding">
    <Stack.Container spacing="medium">
        {#each DIRECTIONS as direction}
            <div>
                <Heading>padding{direction ? `_${direction}` : ""}</Heading>
                <Stack.Container
                    orientation="horizontal"
                    alignment_y="top"
                    spacing="medium"
                    variation="wrap"
                >
                    {#each SPACINGS as spacing}
                        <Box
                            palette="informative"
                            {...{[`padding${direction ? "_" + direction : ""}`]: spacing}}
                        >
                            <Box palette="neutral">
                                {spacing.toUpperCase()}
                            </Box>
                        </Box>
                    {/each}
                </Stack.Container>
            </div>
        {/each}
    </Stack.Container>
</Story>

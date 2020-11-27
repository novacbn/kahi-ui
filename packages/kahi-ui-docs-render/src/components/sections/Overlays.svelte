<script context="module">
    export const OVERLAYS_MANIFEST = [
        {id: "overlays-dialogs", text: "Dialogs"},
        {id: "overlays-popovers", text: "Popovers"},
        {id: "overlays-sheets", text: "Sheets"},
        {id: "overlays-toasts", text: "Toasts"},
    ];
</script>

<script>
    import {Divider, Formatting, Heading, Popover, Menu, Modifiers} from "@kahi-ui/svelte";

    import * as Menus from "../menus";
</script>

<article id="overlays">
    <Menus.Contents links={OVERLAYS_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="overlays-dialogs">
    <Heading>Overlays :: Dialogs</Heading>
</article>

<Divider />

<article id="overlays-popovers">
    <Heading>Overlays :: Popovers</Heading>

    <Popover.Container id="overlays-popover-sample" sizing="medium">
        <Popover.Button>Show Popover Sample</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>

                <Menu.Anchor href="#">
                    Cut
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+X</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>

                <Menu.Anchor href="#">
                    Paste
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+V</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Heading level={2}>Popover Positions</Heading>

    <Popover.Container id="overlays-popover-positions-bottom">
        <Popover.Button>Popover BOTTOM</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Popover.Container id="overlays-popover-positions-top" position="top">
        <Popover.Button>Popover TOP</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Popover.Container id="overlays-popover-positions-left" position="left">
        <Popover.Button>Popover LEFT</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Popover.Container id="overlays-popover-positions-right" position="right">
        <Popover.Button>Popover RIGHT</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Heading level={2}>Popover Sizings</Heading>

    <Popover.Container id="overlays-popover-sizings-default">
        <Popover.Button>Popover DEFAULT</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Popover.Container id="overlays-popover-sizings-tiny" sizing="tiny">
        <Popover.Button>Popover TINY</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Popover.Container id="overlays-popover-sizings-small" sizing="small">
        <Popover.Button>Popover SMALL</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Popover.Container id="overlays-popover-sizings-medium" sizing="medium">
        <Popover.Button>Popover MEDIUM</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Popover.Container id="overlays-popover-sizings-large" sizing="large">
        <Popover.Button>Popover LARGE</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>

    <Popover.Container id="overlays-popover-sizings-huge" sizing="huge">
        <Popover.Button>Popover HUGE</Popover.Button>

        <Popover.Region>
            <Menu.Container palette="light">
                <Menu.Divider>Text Operations</Menu.Divider>

                <Menu.Anchor href="#">
                    Copy
                    <Modifiers.Small>
                        <Formatting.Code>CTRL+C</Formatting.Code>
                    </Modifiers.Small>
                </Menu.Anchor>
            </Menu.Container>
        </Popover.Region>
    </Popover.Container>
</article>

<Divider />

<article id="overlays-sheets">
    <Heading>Overlays :: Sheets</Heading>
</article>

<Divider />

<article id="overlays-toasts">
    <Heading>Overlays :: Toasts</Heading>
</article>

<script context="module">
    import IMAGE_BACKGROUND from "../../../public/assets/images/background.jpg";

    export const OVERLAYS_MANIFEST = [
        {id: "overlays-dialogs", text: "Dialogs"},
        {id: "overlays-popovers", text: "Popovers"},
        {id: "overlays-sheets", text: "Sheets"},
        {id: "overlays-toasts", text: "Toasts"},
    ];
</script>

<script>
    import {
        Badge,
        Button,
        Dialog,
        Divider,
        Formatting,
        Heading,
        Paragraph,
        Popover,
        Portal,
        Menu,
        Modifiers,
        Sheet,
        Spacer,
    } from "@kahi-ui/svelte";

    import * as Menus from "../menus";
</script>

<article id="overlays">
    <Menus.Contents links={OVERLAYS_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="overlays-dialogs">
    <Heading>Overlays :: Dialogs</Heading>

    <Dialog.Button for="overlays-dialog-sample">Show Dialog Sample</Dialog.Button>

    <Heading level="2">Dialog Palettes</Heading>

    <Dialog.Button for="overlays-dialog-default">Dialog DEFAULT</Dialog.Button>
    <Dialog.Button for="overlays-dialog-accent">Dialog ACCENT</Dialog.Button>
    <Dialog.Button for="overlays-dialog-dark">Dialog DARK</Dialog.Button>
    <Dialog.Button for="overlays-dialog-light">Dialog LIGHT</Dialog.Button>
    <Dialog.Button for="overlays-dialog-alert">Dialog ALERT</Dialog.Button>
    <Dialog.Button for="overlays-dialog-affirmative">Dialog AFFIRMATIVE</Dialog.Button>
    <Dialog.Button for="overlays-dialog-negative">Dialog NEGATIVE</Dialog.Button>
</article>

<Portal>
    <Dialog.Container id="overlays-dialog-sample" palette="light" viewport="tiny">
        <Dialog.Region>
            <Dialog.Figure><img src={IMAGE_BACKGROUND} /></Dialog.Figure>

            <Dialog.Heading>
                Ocean Rockies
                <Badge palette="accent" size="tiny">TROPICAL</Badge>
            </Dialog.Heading>

            <Dialog.Body>
                <Paragraph>
                    While on vacation, you can also boat around the local waters to see various rock
                    formations.
                </Paragraph>

                <Spacer spacing="huge" />
                <Spacer spacing="huge" />

                <Modifiers.Small>$740</Modifiers.Small>
            </Dialog.Body>

            <Dialog.Footer>
                <Dialog.Button variation="clear">Dismiss</Dialog.Button>
                <Button palette="affirmative">Book</Button>
            </Dialog.Footer>
        </Dialog.Region>
    </Dialog.Container>

    <Dialog.Container id="overlays-dialog-default" viewport="tiny">
        <Dialog.Region>
            <Dialog.Figure><img src={IMAGE_BACKGROUND} /></Dialog.Figure>

            <Dialog.Heading>Dialog <span>DEFAULT</span></Dialog.Heading>

            <Dialog.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Dialog.Body>

            <Dialog.Footer>
                <Dialog.Button palette="light" variation="clear">Dismiss</Dialog.Button>
                <Button palette="accent">Book</Button>
            </Dialog.Footer>
        </Dialog.Region>
    </Dialog.Container>

    <Dialog.Container id="overlays-dialog-accent" palette="accent" viewport="tiny">
        <Dialog.Region>
            <Dialog.Figure><img src={IMAGE_BACKGROUND} /></Dialog.Figure>

            <Dialog.Heading>Dialog <span>ACCENT</span></Dialog.Heading>

            <Dialog.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Dialog.Body>

            <Dialog.Footer>
                <Dialog.Button palette="light" variation="clear">Dismiss</Dialog.Button>
                <Button>Book</Button>
            </Dialog.Footer>
        </Dialog.Region>
    </Dialog.Container>

    <Dialog.Container id="overlays-dialog-dark" palette="dark" viewport="tiny">
        <Dialog.Region>
            <Dialog.Figure><img src={IMAGE_BACKGROUND} /></Dialog.Figure>

            <Dialog.Heading>Dialog <span>DARK</span></Dialog.Heading>

            <Dialog.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Dialog.Body>

            <Dialog.Footer>
                <Dialog.Button palette="light" variation="clear">Dismiss</Dialog.Button>
                <Button palette="accent">Book</Button>
            </Dialog.Footer>
        </Dialog.Region>
    </Dialog.Container>

    <Dialog.Container id="overlays-dialog-light" palette="light" viewport="tiny">
        <Dialog.Region>
            <Dialog.Figure><img src={IMAGE_BACKGROUND} /></Dialog.Figure>

            <Dialog.Heading>Dialog <span>LIGHT</span></Dialog.Heading>

            <Dialog.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Dialog.Body>

            <Dialog.Footer>
                <Dialog.Button variation="clear">Dismiss</Dialog.Button>
                <Button palette="accent">Book</Button>
            </Dialog.Footer>
        </Dialog.Region>
    </Dialog.Container>

    <Dialog.Container id="overlays-dialog-alert" palette="alert" viewport="tiny">
        <Dialog.Region>
            <Dialog.Figure><img src={IMAGE_BACKGROUND} /></Dialog.Figure>

            <Dialog.Heading>Dialog <span>ALERT</span></Dialog.Heading>

            <Dialog.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Dialog.Body>

            <Dialog.Footer>
                <Dialog.Button palette="light" variation="clear">Dismiss</Dialog.Button>
                <Button palette="accent">Book</Button>
            </Dialog.Footer>
        </Dialog.Region>
    </Dialog.Container>

    <Dialog.Container id="overlays-dialog-affirmative" palette="affirmative" viewport="tiny">
        <Dialog.Region>
            <Dialog.Figure><img src={IMAGE_BACKGROUND} /></Dialog.Figure>

            <Dialog.Heading>Dialog <span>AFFIRMATIVE</span></Dialog.Heading>

            <Dialog.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Dialog.Body>

            <Dialog.Footer>
                <Dialog.Button palette="light" variation="clear">Dismiss</Dialog.Button>
                <Button palette="accent">Book</Button>
            </Dialog.Footer>
        </Dialog.Region>
    </Dialog.Container>

    <Dialog.Container id="overlays-dialog-negative" palette="negative" viewport="tiny">
        <Dialog.Region>
            <Dialog.Figure><img src={IMAGE_BACKGROUND} /></Dialog.Figure>

            <Dialog.Heading>Dialog <span>NEGATIVE</span></Dialog.Heading>

            <Dialog.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Dialog.Body>

            <Dialog.Footer>
                <Dialog.Button palette="light" variation="clear">Dismiss</Dialog.Button>
                <Button palette="accent">Book</Button>
            </Dialog.Footer>
        </Dialog.Region>
    </Dialog.Container>
</Portal>

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

    <Sheet.Button for="overlays-sheet-sample">Show Sheet Sample</Sheet.Button>

    <Heading level="2">Sheet Palettes</Heading>

    <Sheet.Button for="overlays-sheet-default">Sheet DEFAULT</Sheet.Button>
    <Sheet.Button for="overlays-sheet-accent">Sheet ACCENT</Sheet.Button>
    <Sheet.Button for="overlays-sheet-dark">Sheet DARK</Sheet.Button>
    <Sheet.Button for="overlays-sheet-light">Sheet LIGHT</Sheet.Button>
    <Sheet.Button for="overlays-sheet-alert">Sheet ALERT</Sheet.Button>
    <Sheet.Button for="overlays-sheet-affirmative">Sheet AFFIRMATIVE</Sheet.Button>
    <Sheet.Button for="overlays-sheet-negative">Sheet NEGATIVE</Sheet.Button>
</article>

<Portal>
    <Sheet.Container id="overlays-sheet-sample" palette="light">
        <Sheet.Region>
            <Divider />
            <Heading level="3">Navigation</Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#overlays-sheets">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets">Loaders<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets">Tabs<span>ICON</span></Menu.Anchor>

                <Menu.Divider>Layouts</Menu.Divider>

                <Menu.Anchor href="#overlays-sheets">Container<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets">Grid<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets">Group<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets">Mosaic<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets">Stack<span>ICON</span></Menu.Anchor>
            </Menu.Container>
        </Sheet.Region>
    </Sheet.Container>

    <Sheet.Container id="overlays-sheet-default">
        <Sheet.Region>
            <Divider />
            <Heading level="3">Sheet DEFAULT</Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#overlays-sheets">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Sheet.Region>
    </Sheet.Container>

    <Sheet.Container id="overlays-sheet-accent" palette="accent">
        <Sheet.Region>
            <Divider />
            <Heading level="3">Sheet ACCENT</Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#overlays-sheets">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Sheet.Region>
    </Sheet.Container>

    <Sheet.Container id="overlays-sheet-dark" palette="dark">
        <Sheet.Region>
            <Divider />
            <Heading level="3">Sheet DARK</Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#overlays-sheets">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Sheet.Region>
    </Sheet.Container>

    <Sheet.Container id="overlays-sheet-light" palette="light">
        <Sheet.Region>
            <Divider />
            <Heading level="3">Sheet LIGHT</Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#overlays-sheets">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Sheet.Region>
    </Sheet.Container>

    <Sheet.Container id="overlays-sheet-alert" palette="alert">
        <Sheet.Region>
            <Divider />
            <Heading level="3">Sheet ALERT</Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#overlays-sheets">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Sheet.Region>
    </Sheet.Container>

    <Sheet.Container id="overlays-sheet-affirmative" palette="affirmative">
        <Sheet.Region>
            <Divider />
            <Heading level="3">Sheet AFFIRMATIVE</Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#overlays-sheets">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Sheet.Region>
    </Sheet.Container>

    <Sheet.Container id="overlays-sheet-negative" palette="negative">
        <Sheet.Region>
            <Divider />
            <Heading level="3">Sheet NEGATIVE</Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#overlays-sheets">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#overlays-sheets" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Sheet.Region>
    </Sheet.Container>
</Portal>

<Divider />

<article id="overlays-toasts">
    <Heading>Overlays :: Toasts</Heading>
</article>

<style>
    :global(#overlays-sheet-sample h3) {
        margin-top: 0;
    }
</style>

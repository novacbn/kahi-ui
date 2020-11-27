<script context="module">
    export const NAVIGATION_MANIFEST = [
        {id: "navigation-aside", text: "Aside"},
        {id: "navigation-menu", text: "Menu"},
        {id: "navigation-omni", text: "Omni"},
        {id: "navigation-tree", text: "Tree"},
    ];
</script>

<script>
    import {Anchor, Aside, Divider, Grid, Heading, Menu, Omni, Stack} from "@kahi-ui/svelte";

    import * as Menus from "../menus";
</script>

<style>
    :global(#render-navigation-aside-sample) {
        height: initial;
    }

    :global(#render-navigation-aside-palettes > *) {
        width: initial;
        height: initial;
    }
</style>

<article id="navigation">
    <Menus.Contents links={NAVIGATION_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="navigation-aside">
    <Heading>Navigation :: Aside</Heading>

    <Aside.Container id="render-navigation-aside-sample" palette="accent">
        <Aside.Heading>
            <Anchor href="#navigation-aside">Kahi UI</Anchor>
        </Aside.Heading>

        <Menu.Container>
            <Menu.Divider>Components</Menu.Divider>

            <Menu.Anchor href="#navigation-aside">Badges<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-aside" current="page">
                Buttons<span>ICON</span>
            </Menu.Anchor>
            <Menu.Anchor href="#navigation-aside">Loaders<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-aside">Tabs<span>ICON</span></Menu.Anchor>

            <Menu.Divider>Layouts</Menu.Divider>

            <Menu.Anchor href="#navigation-aside">Container<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-aside">Grid<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-aside">Group<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-aside">Mosaic<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-aside">Stack<span>ICON</span></Menu.Anchor>
        </Menu.Container>
    </Aside.Container>

    <Heading level={2}>Aside Palettes</Heading>

    <Grid id="render-navigation-aside-palettes" points="2 1+tiny" spacing="medium">
        <Aside.Container>
            <Aside.Heading>DEFAULT</Aside.Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#navigation-aside">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#navigation-aside" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Aside.Container>

        <Aside.Container palette="accent">
            <Aside.Heading>ACCENT</Aside.Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#navigation-aside">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#navigation-aside" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Aside.Container>

        <Aside.Container palette="dark">
            <Aside.Heading>DARK</Aside.Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#navigation-aside">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#navigation-aside" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Aside.Container>

        <Aside.Container palette="light">
            <Aside.Heading>LIGHT</Aside.Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#navigation-aside">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#navigation-aside" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Aside.Container>

        <Aside.Container palette="alert">
            <Aside.Heading>ALERT</Aside.Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#navigation-aside">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#navigation-aside" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Aside.Container>

        <Aside.Container palette="affirmative">
            <Aside.Heading>AFFIRMATIVE</Aside.Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#navigation-aside">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#navigation-aside" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Aside.Container>

        <Aside.Container palette="negative">
            <Aside.Heading>NEGATIVE</Aside.Heading>

            <Menu.Container>
                <Menu.Divider>Components</Menu.Divider>

                <Menu.Anchor href="#navigation-aside">Badges<span>ICON</span></Menu.Anchor>
                <Menu.Anchor href="#navigation-aside" current="page">
                    Buttons<span>ICON</span>
                </Menu.Anchor>
            </Menu.Container>
        </Aside.Container>
    </Grid>
</article>

<Divider />

<article id="navigation-menu">
    <Heading>Navigation :: Menu</Heading>

    <Menu.Container>
        <Menu.Heading>Framework</Menu.Heading>
        <Menu.Divider>Other Things</Menu.Divider>

        <Menu.SubMenu id="render-navigation-menu-sample-components">
            <div slot="heading">
                <Menu.Heading>Components</Menu.Heading>
            </div>

            <Menu.Anchor href="#navigation-menu">Badges<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu" current="page">
                Buttons<span>ICON</span>
            </Menu.Anchor>
            <Menu.Anchor href="#navigation-menu">Loaders<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu">Tabs<span>ICON</span></Menu.Anchor>
        </Menu.SubMenu>

        <Menu.SubMenu id="render-navigation-menu-sample-layouts">
            <div slot="heading">
                <Menu.Heading>Layouts</Menu.Heading>
            </div>

            <Menu.Anchor href="#navigation-menu">Container<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu">Grid<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu">Group<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu">Mosaic<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu">Stack<span>ICON</span></Menu.Anchor>
        </Menu.SubMenu>
    </Menu.Container>

    <Heading level={2}>Menu Palettes</Heading>

    <Grid points={3} spacing="medium">
        <Menu.Container>
            <Menu.Heading>DEFAULT</Menu.Heading>
            <Menu.Divider>Components</Menu.Divider>

            <Menu.Anchor href="#navigation-menu">Badges<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu" current="page">
                Buttons<span>ICON</span>
            </Menu.Anchor>
        </Menu.Container>

        <Menu.Container palette="accent">
            <Menu.Heading>ACCENT</Menu.Heading>
            <Menu.Divider>Components</Menu.Divider>

            <Menu.Anchor href="#navigation-menu">Badges<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu" current="page">
                Buttons<span>ICON</span>
            </Menu.Anchor>
        </Menu.Container>

        <Menu.Container palette="dark">
            <Menu.Heading>DARK</Menu.Heading>
            <Menu.Divider>Components</Menu.Divider>

            <Menu.Anchor href="#navigation-menu">Badges<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu" current="page">
                Buttons<span>ICON</span>
            </Menu.Anchor>
        </Menu.Container>

        <Menu.Container palette="light">
            <Menu.Heading>LIGHT</Menu.Heading>
            <Menu.Divider>Components</Menu.Divider>

            <Menu.Anchor href="#navigation-menu">Badges<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu" current="page">
                Buttons<span>ICON</span>
            </Menu.Anchor>
        </Menu.Container>

        <Menu.Container palette="alert">
            <Menu.Heading>ALERT</Menu.Heading>
            <Menu.Divider>Components</Menu.Divider>

            <Menu.Anchor href="#navigation-menu">Badges<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu" current="page">
                Buttons<span>ICON</span>
            </Menu.Anchor>
        </Menu.Container>

        <Menu.Container palette="affirmative">
            <Menu.Heading>AFFIRMATIVE</Menu.Heading>
            <Menu.Divider>Components</Menu.Divider>

            <Menu.Anchor href="#navigation-menu">Badges<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu" current="page">
                Buttons<span>ICON</span>
            </Menu.Anchor>
        </Menu.Container>

        <Menu.Container palette="negative">
            <Menu.Heading>NEGATIVE</Menu.Heading>
            <Menu.Divider>Components</Menu.Divider>

            <Menu.Anchor href="#navigation-menu">Badges<span>ICON</span></Menu.Anchor>
            <Menu.Anchor href="#navigation-menu" current="page">
                Buttons<span>ICON</span>
            </Menu.Anchor>
        </Menu.Container>
    </Grid>
</article>

<Divider />

<article id="navigation-omni">
    <Heading>Navigation :: Omni</Heading>

    <Omni.Container>
        <Omni.Heading>
            <Anchor href="#navigation-omni">Kahi UI</Anchor>
        </Omni.Heading>

        <Omni.Body>Omni Body</Omni.Body>
        <Omni.Footer>Omni Footer</Omni.Footer>
    </Omni.Container>

    <Heading level={2}>Omni Palette</Heading>

    <Stack alignment-x="stretch" spacing="small">
        <Omni.Container>
            <Omni.Heading>
                <Anchor href="#navigation-omni">Omni</Anchor>
            </Omni.Heading>

            <Omni.Body>DEFAULT</Omni.Body>
        </Omni.Container>

        <Omni.Container palette="accent">
            <Omni.Heading>
                <Anchor href="#navigation-omni">Omni</Anchor>
            </Omni.Heading>

            <Omni.Body>ACCENT</Omni.Body>
        </Omni.Container>

        <Omni.Container palette="dark">
            <Omni.Heading>
                <Anchor href="#navigation-omni">Omni</Anchor>
            </Omni.Heading>

            <Omni.Body>DARK</Omni.Body>
        </Omni.Container>

        <Omni.Container palette="light">
            <Omni.Heading>
                <Anchor href="#navigation-omni">Omni</Anchor>
            </Omni.Heading>

            <Omni.Body>LIGHT</Omni.Body>
        </Omni.Container>

        <Omni.Container palette="alert">
            <Omni.Heading>
                <Anchor href="#navigation-omni">Omni</Anchor>
            </Omni.Heading>

            <Omni.Body>ALERT</Omni.Body>
        </Omni.Container>

        <Omni.Container palette="affirmative">
            <Omni.Heading>
                <Anchor href="#navigation-omni">Omni</Anchor>
            </Omni.Heading>

            <Omni.Body>AFFIRMATIVE</Omni.Body>
        </Omni.Container>

        <Omni.Container palette="negative">
            <Omni.Heading>
                <Anchor href="#navigation-omni">Omni</Anchor>
            </Omni.Heading>

            <Omni.Body>NEGATIVE</Omni.Body>
        </Omni.Container>
    </Stack>
</article>

<Divider />

<article id="navigation-tree">
    <Heading>Navigation :: Tree</Heading>
</article>

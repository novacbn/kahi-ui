<script>
    import Divider from "../../../layouts/divider/Divider.svelte";
    import Spacer from "../../../layouts/spacer/Spacer.svelte";
    import Mosaic from "../../../layouts/mosaic/Mosaic.svelte";
    import * as Menu from "../../../navigation/menu";

    import * as Aside from "../index";

</script>

<Mosaic sizing="medium" spacing="medium">
    <Aside.Container {...$$props}>
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>DEFAULT</Aside.Footer>
    </Aside.Container>

    <Aside.Container {...$$props} palette="accent">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>ACCENT</Aside.Footer>
    </Aside.Container>

    <Aside.Container {...$$props} palette="dark">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>DARK</Aside.Footer>
    </Aside.Container>

    <Aside.Container {...$$props} palette="light">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>LIGHT</Aside.Footer>
    </Aside.Container>

    <Aside.Container {...$$props} palette="alert">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>ALERT</Aside.Footer>
    </Aside.Container>

    <Aside.Container {...$$props} palette="affirmative">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>AFFIRMATIVE</Aside.Footer>
    </Aside.Container>

    <Aside.Container {...$$props} palette="negative">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>NEGATIVE</Aside.Footer>
    </Aside.Container>
</Mosaic>

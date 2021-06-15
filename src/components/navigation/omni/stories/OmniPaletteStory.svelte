<script>
    import Button from "../../../interactables/button/Button.svelte";
    import Divider from "../../../layouts/divider/Divider.svelte";
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import * as Omni from "../index";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Omni.Container {...$$props} max_width="content-max">
        <Omni.Header>
            Kahi UI
            <Divider orientation="vertical" />
            <Text is="small">DEFAULT</Text>
        </Omni.Header>

        <Omni.Footer>
            <Omni.Section>
                <Button variation="clear">GitHub</Button>
            </Omni.Section>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container {...$$props} palette="accent" max_width="content-max">
        <Omni.Header>
            Kahi UI
            <Divider orientation="vertical" />
            <Text is="small">ACCENT</Text>
        </Omni.Header>

        <Omni.Footer>
            <Omni.Section>
                <Button palette="light" variation="clear">GitHub</Button>
            </Omni.Section>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container {...$$props} palette="dark" max_width="content-max">
        <Omni.Header>
            Kahi UI
            <Divider orientation="vertical" />
            <Text is="small">DARK</Text>
        </Omni.Header>

        <Omni.Footer>
            <Omni.Section>
                <Button palette="light" variation="clear">GitHub</Button>
            </Omni.Section>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container {...$$props} palette="light" max_width="content-max">
        <Omni.Header>
            Kahi UI
            <Divider orientation="vertical" />
            <Text is="small">LIGHT</Text>
        </Omni.Header>

        <Omni.Footer>
            <Omni.Section>
                <Button palette="dark" variation="clear">GitHub</Button>
            </Omni.Section>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container {...$$props} palette="alert" max_width="content-max">
        <Omni.Header>
            Kahi UI
            <Divider orientation="vertical" />
            <Text is="small">ALERT</Text>
        </Omni.Header>

        <Omni.Footer>
            <Omni.Section>
                <Button palette="light" variation="clear">GitHub</Button>
            </Omni.Section>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container {...$$props} palette="affirmative" max_width="content-max">
        <Omni.Header>
            Kahi UI
            <Divider orientation="vertical" />
            <Text is="small">AFFIRMATIVE</Text>
        </Omni.Header>

        <Omni.Footer>
            <Omni.Section>
                <Button palette="light" variation="clear">GitHub</Button>
            </Omni.Section>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container {...$$props} palette="negative" max_width="content-max">
        <Omni.Header>
            Kahi UI
            <Divider orientation="vertical" />
            <Text is="small">NEGATIVE</Text>
        </Omni.Header>

        <Omni.Footer>
            <Omni.Section>
                <Button palette="light" variation="clear">GitHub</Button>
            </Omni.Section>
        </Omni.Footer>
    </Omni.Container>
</Stack>

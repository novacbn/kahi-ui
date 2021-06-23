<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import TextInput from "../TextInput.svelte";
</script>

<Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
    <TextInput {...$$props} variation="flush" characters="20" value="This is a DEFAULT TextInput" />
    <TextInput
        {...$$props}
        variation="flush"
        palette="accent"
        characters="20"
        value="This is a ACCENT TextInput"
    />

    <TextInput
        {...$$props}
        variation="flush"
        palette="dark"
        characters="20"
        value="This is a DARK TextInput"
    />
    <TextInput
        {...$$props}
        variation="flush"
        palette="light"
        characters="20"
        value="This is a LIGHT TextInput"
    />

    <TextInput
        {...$$props}
        variation="flush"
        palette="alert"
        characters="20"
        value="This is a ALERT TextInput"
    />
    <TextInput
        {...$$props}
        variation="flush"
        palette="affirmative"
        characters="20"
        value="This is a AFFIRMATIVE TextInput"
    />
    <TextInput
        {...$$props}
        variation="flush"
        palette="negative"
        characters="20"
        value="This is a NEGATIVE TextInput"
    />
</Stack>

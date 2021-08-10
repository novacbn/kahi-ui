<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import TextInput from "../TextInput.svelte";
</script>

<Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
    <TextInput {...$$props} characters="20" value="This is a DEFAULT TextInput" />
    <TextInput {...$$props} palette="accent" characters="20" value="This is a ACCENT TextInput" />

    <TextInput {...$$props} palette="dark" characters="20" value="This is a DARK TextInput" />
    <TextInput {...$$props} palette="light" characters="20" value="This is a LIGHT TextInput" />

    <TextInput {...$$props} palette="alert" characters="20" value="This is a ALERT TextInput" />
    <TextInput
        {...$$props}
        palette="affirmative"
        characters="20"
        value="This is a AFFIRMATIVE TextInput"
    />
    <TextInput
        {...$$props}
        palette="negative"
        characters="20"
        value="This is a NEGATIVE TextInput"
    />
</Stack>

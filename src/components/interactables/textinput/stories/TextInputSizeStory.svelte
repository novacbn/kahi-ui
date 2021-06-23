<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import TextInput from "../TextInput.svelte";
</script>

<Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
    <TextInput {...$$props} characters="20" value="This is a DEFAULT TextInput" />

    <TextInput {...$$props} size="tiny" characters="20" value="This is a TINY TextInput" />
    <TextInput {...$$props} size="small" characters="20" value="This is a SMALL TextInput" />

    <TextInput {...$$props} size="medium" characters="20" value="This is a MEDIUM TextInput" />

    <TextInput {...$$props} size="large" characters="20" value="This is a LARGE TextInput" />
    <TextInput {...$$props} size="huge" characters="20" value="This is a HUGE TextInput" />
</Stack>

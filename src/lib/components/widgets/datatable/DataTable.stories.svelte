<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import TextInput from "../../interactables/textinput/TextInput.svelte";
    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import DataTable from "./DataTable.svelte";

    const COLUMNS = [
        {text: "First Name", key: "first_name", sorting: true},
        {text: "Last Name", key: "last_name", sorting: true},
        {text: "Occupation", key: "occupation", sorting: true},
        {text: "Species", key: "species", sorting: true},
    ];

    let ROWS = [
        {first_name: "Ahsoka", last_name: "Tano", occupation: "Unknown", species: "Togruta"},
        {first_name: "Cad", last_name: "Bane", occupation: "Bounty Hunter", species: "Duros"},
        {first_name: "Cobb", last_name: "Vanth", occupation: "Marshal", species: "Human"},
        {first_name: "Din", last_name: "Djarin", occupation: "Bounty Hunter", species: "Human"},
        {first_name: "Fennec", last_name: "Shand", occupation: "Assassin", species: "Human"},
        {first_name: "Gilad", last_name: "Pellaeon", occupation: "Grand Admiral", species: "Human"},
        {first_name: "Jagged", last_name: "Fel", occupation: "Emperor", species: "Human"},
        {first_name: "Max", last_name: "Rebo", occupation: "Musician", species: "Ortolan"},
        {first_name: "Mok", last_name: "Shaiz", occupation: "Mayor", species: "Ithorian"},
        {first_name: "Natasi", last_name: "Daala", occupation: "Chief of State", species: "Human"},
        {first_name: "Quinlan", last_name: "Vos", occupation: "Jedi Master", species: "Kiffar"},
        {first_name: "Tila", last_name: "Mong", occupation: "Baron Do Sage", species: "Kel Dor"},
    ];

    const PALETTES = [
        ["neutral", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];

    const SIZINGS = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];

    function on_first_name_input(row, event) {
        const index = ROWS.findIndex((_row) => row === _row);

        ROWS = [...ROWS];
        ROWS[index] = {...row, first_name: event.target.value};
    }
</script>

<Meta title="Widgets/DataTable" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <DataTable columns={COLUMNS} rows={ROWS} palette="accent" paginate />
</Story>

<Story name="Slot">
    <DataTable columns={COLUMNS} rows={ROWS}>
        <svelte:fragment let:key let:row>
            {#if key === "first_name"}
                <TextInput
                    value={row["first_name"]}
                    variation="flush"
                    width="100"
                    on:input={on_first_name_input.bind(null, row)}
                />
            {:else}
                {row[key]}
            {/if}
        </svelte:fragment>
    </DataTable>
</Story>

<Story name="Paging">
    <DataTable columns={COLUMNS} rows={ROWS} paging={7} palette="accent" paginate />
</Story>

<Story name="Variation">
    <Text is="strong">DEFAULT</Text>
    <DataTable columns={COLUMNS} rows={ROWS} />

    <Text is="strong">BORDERS</Text>
    <DataTable columns={COLUMNS} rows={ROWS} variation="borders" />

    <Text is="strong">STRIPES</Text>
    <DataTable columns={COLUMNS} rows={ROWS} variation="stripes" />

    <Text is="strong">BORDERS+STRIPES</Text>
    <DataTable columns={COLUMNS} rows={ROWS} variation={["borders", "stripes"]} />
</Story>

<Story name="Palette">
    <Stack.Container spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <DataTable
                    columns={COLUMNS}
                    rows={ROWS}
                    palette={is_default ? undefined : palette}
                    paginate
                />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing">
    <Stack.Container spacing="medium">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <DataTable columns={COLUMNS} rows={ROWS} palette="accent" {sizing} paginate />
            </div>
        {/each}
    </Stack.Container>
</Story>

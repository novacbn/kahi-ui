<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import TextInput from "../../interactables/textinput/TextInput.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import DataTable from "./DataTable.svelte";

    const COLUMNS_SW = [
        {text: "First Name", key: "first_name", sorting_enabled: true},
        {text: "Last Name", key: "last_name", sorting_enabled: true},
        {text: "Occupation", key: "occupation", sorting_enabled: true},
        {text: "Species", key: "species", sorting_enabled: true},
    ];

    const COLUMNS_VIEWPORT = [
        {text: "Viewport", key: "viewport", sorting_enabled: true},
        {text: "Minimum", key: "minimum", sorting_enabled: true},
        {text: "Maximum", key: "maximum", sorting_enabled: true},
    ];

    const ROWS_SW = [
        {first_name: "Ashoka", last_name: "Tano", occupation: "Unknown", species: "Togruta"},
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

    const ROWS_VIEWPORT = [
        {
            viewport: "mobile",
            minimum: "0px",
            maximum: "640px",
        },

        {
            viewport: "tablet",
            minimum: "641px",
            maximum: "768px",
        },

        {
            viewport: "desktop",
            minimum: "769px",
            maximum: "1024px",
        },

        {
            viewport: "widescreen",
            minimum: "1025px",
            maximum: "∞",
        },
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
</script>

<Meta title="Widgets/DataTable" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <DataTable columns={COLUMNS_SW} rows={ROWS_SW} palette="accent" paginate />
</Story>

<Story name="Slot">
    <DataTable columns={COLUMNS_VIEWPORT} rows={ROWS_VIEWPORT}>
        <svelte:fragment let:key let:row>
            {#if key === "viewport"}
                <TextInput value={row["viewport"]} variation="flush" width="100" />
            {:else}
                {row[key]}
            {/if}
        </svelte:fragment>
    </DataTable>
</Story>

<Story name="Paging">
    <DataTable columns={COLUMNS_SW} rows={ROWS_SW} paging={7} palette="accent" paginate />
</Story>

<Story name="Variation">
    <Text is="strong">DEFAULT</Text>
    <DataTable columns={COLUMNS_VIEWPORT} rows={ROWS_VIEWPORT} />

    <Text is="strong">BORDERS</Text>
    <DataTable columns={COLUMNS_VIEWPORT} rows={ROWS_VIEWPORT} variation="borders" />

    <Text is="strong">STRIPES</Text>
    <DataTable columns={COLUMNS_VIEWPORT} rows={ROWS_VIEWPORT} variation="stripes" />

    <Text is="strong">BORDERS+STRIPES</Text>
    <DataTable columns={COLUMNS_VIEWPORT} rows={ROWS_VIEWPORT} variation={["borders", "stripes"]} />
</Story>

<Story name="Palette">
    <Stack spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <DataTable
                    columns={COLUMNS_SW}
                    rows={ROWS_SW}
                    palette={is_default ? undefined : palette}
                    paginate
                />
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Sizing">
    <Stack spacing="medium">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <DataTable columns={COLUMNS_SW} rows={ROWS_SW} palette="accent" {sizing} paginate />
            </div>
        {/each}
    </Stack>
</Story>

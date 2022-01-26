<script>
    import {Temporal} from "../../../vendor/js-temporal-polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import TimeStamp from "./TimeStamp.svelte";

    const FORMATS_HOUR = ["2-digit", "numeric"];

    const FORMATS_MINUTE = ["2-digit", "numeric"];

    const FORMATS_SECOND = ["2-digit", "numeric"];

    const now = Temporal.Now.plainTimeISO().toString();
</script>

<Meta title="Display/TimeStamp" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <TimeStamp timestamp={now} />
</Story>

<Story name="Twelve (12) / Twenty-Four (24) Hour">
    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        <div>
            <Text>
                <Text is="strong">12 HOUR</Text>
            </Text>

            <TimeStamp
                timestamp={now}
                hour="2-digit"
                hour_12={true}
                minute="2-digit"
                second="2-digit"
            />
        </div>

        <div>
            <Text>
                <Text is="strong">24 HOUR</Text>
            </Text>

            <TimeStamp
                timestamp={now}
                hour="2-digit"
                hour_12={false}
                minute="2-digit"
                second="2-digit"
            />
        </div>
    </Stack>
</Story>

<Story name="Custom Format">
    <Text is="strong">HOUR</Text>

    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_HOUR as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <TimeStamp
                    timestamp={now}
                    hour={format}
                    minute="2-digit"
                    second="2-digit"
                    hour_12
                />
            </div>
        {/each}
    </Stack>

    <Text is="strong">MINUTE</Text>

    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_MINUTE as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <TimeStamp
                    timestamp={now}
                    hour="2-digit"
                    minute={format}
                    second="2-digit"
                    hour_12
                />
            </div>
        {/each}
    </Stack>

    <Text is="strong">SECOND</Text>

    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_SECOND as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <TimeStamp timestamp={now} hour="2-digit" minute="2-digit" second={format} />
            </div>
        {/each}
    </Stack>
</Story>

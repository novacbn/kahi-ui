<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {DEFAULT_CALENDAR, DEFAULT_TIMEZONE} from "../../../util/locale";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import DateTimeStamp from "./DateTimeStamp.svelte";

    const FORMATS_DAY = ["2-digit", "numeric"];

    const FORMATS_MONTH = ["2-digit", "long", "narrow", "numeric", "short"];

    const FORMATS_WEEKDAY = ["long", "short", "narrow"];

    const FORMATS_YEAR = ["2-digit", "numeric"];

    const FORMATS_HOUR = ["2-digit", "numeric"];

    const FORMATS_MINUTE = ["2-digit", "numeric"];

    const FORMATS_SECOND = ["2-digit", "numeric"];

    const now = Temporal.Now.zonedDateTime(DEFAULT_CALENDAR, DEFAULT_TIMEZONE).toString();
</script>

<Meta title="Display/DateTimeStamp" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <DateTimeStamp timestamp={now} />
</Story>

<Story name="Twelve (12) / Twenty-Four (24) Hour">
    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        <div>
            <Text>
                <Text is="strong">12 HOUR</Text>
            </Text>

            <DateTimeStamp
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

            <DateTimeStamp
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
    <Text is="strong">DAY</Text>

    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_DAY as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateTimeStamp timestamp={now} day={format} />
            </div>
        {/each}
    </Stack>

    <Text is="strong">MONTH</Text>

    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_MONTH as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateTimeStamp timestamp={now} month={format} />
            </div>
        {/each}
    </Stack>

    <Text is="strong">WEEKDAY</Text>

    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_WEEKDAY as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateTimeStamp timestamp={now} weekday={format} />
            </div>
        {/each}
    </Stack>

    <Text is="strong">YEAR</Text>

    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_YEAR as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateTimeStamp timestamp={now} year={format} />
            </div>
        {/each}
    </Stack>

    <Text is="strong">HOUR</Text>

    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_HOUR as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateTimeStamp
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

                <DateTimeStamp
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

                <DateTimeStamp timestamp={now} hour="2-digit" minute="2-digit" second={format} />
            </div>
        {/each}
    </Stack>
</Story>
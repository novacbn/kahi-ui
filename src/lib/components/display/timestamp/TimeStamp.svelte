<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";
    import type {IHourFormatOptions} from "../../../util/datetime/hours";
    import type {IMinuteFormatOptions} from "../../../util/datetime/minutes";
    import type {ISecondFormatOptions} from "../../../util/datetime/seconds";
    import {from_timestamp} from "../../../util/datetime/timestamps";
    import {defaultopt} from "../../../util/functional";
    import {DEFAULT_FORMAT_TIME, DEFAULT_LOCALE} from "../../../util/locale";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLTimeElement;

        locale?: string;

        hour?: IHourFormatOptions["hour"];
        hour_12?: IHourFormatOptions["hour_12"];
        minute?: IMinuteFormatOptions["minute"];
        second?: ISecondFormatOptions["second"];

        timestamp: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let locale: $$Props["locale"] = undefined;

    export let hour: $$Props["hour"] = undefined;
    export let hour_12: $$Props["hour_12"] = undefined;
    export let minute: $$Props["minute"] = undefined;
    export let second: $$Props["second"] = undefined;

    export let timestamp: $$Props["timestamp"];

    $: _options = defaultopt({hour, hour_12, minute, second}, DEFAULT_FORMAT_TIME);
    $: _time = from_timestamp(timestamp);
</script>

<time
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="time-stamp {_class}"
    datetime={_time.toString()}
    use:forward_actions={{actions}}
    on:click
    on:contextmenu
    on:dblclick
    on:focusin
    on:focusout
    on:keydown
    on:keyup
    on:pointercancel
    on:pointerdown
    on:pointerenter
    on:pointerleave
    on:pointermove
    on:pointerout
    on:pointerup
>
    {_time.toLocaleString(locale ?? DEFAULT_LOCALE, {
        hour: _options.hour,
        hour12: _options.hour_12,
        minute: _options.minute,
        second: _options.second,
    })}
</time>

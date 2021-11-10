# CHANGELOG

## UNRELEASED

-   Added the following Components / Component Features

    -   Widgets

        -   `Widget` — Provides a holistic set of UI primitives for built-in Widgets.

            -   `<Widget.Container>` — Renders a spaced grid that provides styling to other `<Widget.*>` Components.
            -   `<Widget.Button>` — Renders a button similar to `<Menu.Button>`.
            -   `<Widget.Header>` — Renders text with title formatting.
            -   `<Widget.Section>` — Renders children in a spaced grid.

        -   `DayPicker` — Built-in Widget for allowing the user to select a calendar date from a given month.

            -   `<DayPicker on:change={CustomEvent<void>}>` — Dispatches whenever `<DayPicker value>` changes.
            -   `<DayPicker multiple={boolean}>` — Allows for selection of multiple days.
            -   `<DayPicker once={boolean}>` — Disables toggling off of already selected days.
            -   `<DayPicker readonly={boolean}>` — Disables toggling on of unselected days.
            -   `<DayPicker calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<DayPicker locale={string}>` — Allows for changing the locale used for displaying internationalized text via [RFC 5646 / BCP 47 Codes](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) format.
            -   `<DayPicker day="2-digit/numeric">` — Alters how a displayed day is formatted.
            -   `<DayPicker weekday="long/narrow/short">` — Alters how a displayed weekday is formatted.
            -   `<DayPicker disabled={boolean}>` — Disables all days from being selected.
            -   `<DayPicker disabled={string[]}>` — Disables the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps from being selected.
            -   `<DayPicker max={string}>` — Sets the maximum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<DayPicker min={string}>` — Sets the minimum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<DayPicker timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp to represent the current day.
            -   `<DayPicker value={string[]}>` — Sets the selected day [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps.
            -   `<DayPicker palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<DayPicker sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `DayStepper` — Built-in Widget for allowing the user to step through days.

            -   `<DayStepper on:change={CustomEvent<void>}>` — Dispatches whenever `<DayStepper value>` changes.
            -   `<DayStepper disabled={boolean}>` — Disables days from being stepped through.
            -   `<DayStepper readonly={boolean}>` — Disables days from being stepped through without UI alteration.
            -   `<DayStepper calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<DayStepper locale={string}>` — Allows for changing the locale used for displaying internationalized text via [RFC 5646 / BCP 47 Codes](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) format.
            -   `<DayStepper day="2-digit/numeric">` — Alters how a displayed day is formatted.
            -   `<DayStepper month="2-digit/long/narrow/numeric/short>` — Alters how a displayed month is formatted.
            -   `<DayStepper weekday="long/narrow/short">` — Alters how a displayed weekday is formatted.
            -   `<DayStepper max={string}>` — Sets the maximum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<DayStepper min={string}>` — Sets the minimum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<DayStepper step={number}>` — Sets how many days are stepped through at each button click.
            -   `<DayStepper value={string}>` — Sets the selected day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime).
            -   `<DayStepper palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<DayStepper sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `MonthPicker` — Built-in Widget for allowing the user to pick a quaterly month from a given year.

            -   `<MonthPicker on:change={CustomEvent<void>}>` — Dispatches whenever `<MonthPicker value>` changes.
            -   `<MonthPicker multiple={boolean}>` — Allows for selection of multiple months.
            -   `<MonthPicker once={boolean}>` — Disables toggling off of already selected months.
            -   `<MonthPicker readonly={boolean}>` — Disables toggling on of unselected months.
            -   `<MonthPicker calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<MonthPicker locale={string}>` — Allows for changing the locale used for displaying internationalized text via [RFC 5646 / BCP 47 Codes](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) format.
            -   `<MonthPicker month="2-digit/long/narrow/numeric/short">` — Alters how a displayed month is formatted.
            -   `<MonthPicker disabled={boolean}>` — Disables all months from being selected.
            -   `<MonthPicker disabled={string[]}>` — Disables the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps from being selected.
            -   `<MonthPicker max={string}>` — Sets the maximum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<MonthPicker min={string}>` — Sets the minimum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<MonthPicker timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp to represent the current month.
            -   `<MonthPicker value={string[]}>` — Sets the selected month [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps.
            -   `<MonthPicker palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<MonthPicker sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `MonthStepper` — Built-in Widget for allowing the user to step through months.

            -   `<MonthStepper on:change={CustomEvent<void>}>` — Dispatches whenever `<MonthStepper value>` changes.
            -   `<MonthStepper disabled={boolean}>` — Disables months from being stepped through.
            -   `<MonthStepper readonly={boolean}>` — Disables months from being stepped through without UI alteration.
            -   `<MonthStepper calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<MonthStepper locale={string}>` — Allows for changing the locale used for displaying internationalized text via [RFC 5646 / BCP 47 Codes](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) format.
            -   `<MonthStepper month="2-digit/long/narrow/numeric/short>` — Alters how a displayed month is formatted.
            -   `<MonthStepper year="2-digit/numeric">` — Alters how a displayed year is formatted.
            -   `<MonthStepper max={string}>` — Sets the maximum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<MonthStepper min={string}>` — Sets the minimum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<MonthStepper step={number}>` — Sets how many months are stepped through at each button click.
            -   `<MonthStepper value={string}>` — Sets the selected month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime).
            -   `<MonthStepper palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<MonthStepper sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `TimePicker` — Built-in Widget for allowing the user to pick a time consisting of hour, minutes, and seconds.

            -   `<TimePicker on:change={CustomEvent<void>}>` — Dispatches whenever `<TimePicker value>` changes.
            -   `<TimePicker on:now={CustomEvent<void>}>` — Dispatches whenever the "NOW" button is clicked when enabled.
            -   `<TimePicker disabled={boolean}>` — Disables any component of time from being selected.
            -   `<TimePicker readonly={boolean}>` — Disables any component of time from being selected without UI alteration.
            -   `<TimePicker locale={string}>` — Allows for changing the locale used for displaying internationalized text via [RFC 5646 / BCP 47 Codes](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) format.
            -   `<TimePicker month="2-digit/long/narrow/numeric/short>` — Alters how a displayed month is formatted.
            -   `<TimePicker max={string}>` — Sets the maximum timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<TimePicker min={string}>` — Sets the minimum timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<TimePicker timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp to represent the current time.
            -   `<TimePicker value={string}>` — Sets the selected timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime).
            -   `<TimePicker palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<TimePicker sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `YearPicker` — Built-in Widget for allowing the user to pick a year from a given decade.

            -   `<YearPicker on:change={CustomEvent<void>}>` — Dispatches whenever `<YearPicker value>` changes.
            -   `<YearPicker multiple={boolean}>` — Allows for selection of multiple years.
            -   `<YearPicker once={boolean}>` — Disables toggling off of already selected years.
            -   `<YearPicker readonly={boolean}>` — Disables toggling on of unselected years.
            -   `<YearPicker calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<YearPicker locale={string}>` — Allows for changing the locale used for displaying internationalized text via [RFC 5646 / BCP 47 Codes](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) format.
            -   `<YearPicker year="2-digit/numeric">` — Alters how a displayed year is formatted.
            -   `<YearPicker disabled={boolean}>` — Disables all years from being selected.
            -   `<YearPicker disabled={string[]}>` — Disables the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps from being selected.
            -   `<YearPicker max={string}>` — Sets the maximum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<YearPicker min={string}>` — Sets the minimum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<YearPicker timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp to represent the current year.
            -   `<YearPicker value={string[]}>` — Sets the selected year [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps.
            -   `<YearPicker palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<YearPicker sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `YearStepper` — Built-in Widget for allowing the user to step through years.

            -   `<YearStepper on:change={CustomEvent<void>}>` — Dispatches whenever `<YearStepper value>` changes.
            -   `<YearStepper disabled={boolean}>` — Disables years from being stepped through.
            -   `<YearStepper readonly={boolean}>` — Disables years from being stepped through without UI alteration.
            -   `<YearStepper calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<YearStepper locale={string}>` — Allows for changing the locale used for displaying internationalized text via [RFC 5646 / BCP 47 Codes](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) format.
            -   `<YearStepper year="2-digit/numeric">` — Alters how a displayed year is formatted.
            -   `<YearStepper max={string}>` — Sets the maximum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<YearStepper min={string}>` — Sets the minimum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<YearStepper step={number}>` — Sets how many years are stepped through at each button click.
            -   `<YearStepper value={string}>` — Sets the selected year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime).
            -   `<YearStepper palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<YearStepper sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

## v0.4.9 - 2021/10/27

-   Hotfix for missing CSS distributables.

## v0.4.8 - 2021/10/27

-   Reduced package size via fine-grained `files` field in `package.json`.

## v0.4.7 - 2021/10/27

-   Revamped internal library typings.

## v0.4.6 - 2021/10/22

-   Revamped internal context handling for: `Breadcrumb`.

-   Added the following Components / Component Features

    -   Disclosure

        -   `Carousel` — Renders children as a carousel of slide elements, with snap scrolling.

            -   `<Carousel.Container>` — Wrapper Component providing the scrolling context.

                -   `<Carousel.Container orientation="vertical">` — Used to set the slide items to scroll vertically, instead of horizontally.
                -   `<Carousel.Container spacing="tiny/small/medium/large/huge" spacing_x="tiny/small/medium/large/huge" spacing_y="tiny/small/medium/large/huge">` — Used to configure gap spacing between each slide item.

            -   `<Carousel.Section>` — Used for wrapping `Carousel` slides.

    -   Interactables

        -   `FileDropInput` — Renders a stylized box that accepts file drops and clicks to open file open prompt.

            -   `<FileDropInput accept={string}>` — Used to set an accepted allow list of file types in file open prompt. Binding to [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept).
            -   `<FileDropInput multiple={boolean}>` — Used to enable the underlying `<input type="file" />` to accept multiple files at once. Binding to [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple).
            -   `<FileDropInput palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.

## v0.4.5 - 2021/10/20

-   Added CSS Theming Variables to the following Components: `Tab`.

-   Added the following Components / Component Features

    -   Disclosure

        -   `Accordion` — Presents child content in a stack, where each item can be selectively clicked to be revealed.

            -   `<Accordion.Container>` — Wrapper Component which provides stylings and Svelte Contexts for radio / checkbox button functionality.

                -   `<Accordion.Container behavior="inclusive/exclusive">` — Used to switch the `Accordion` between checkbox (`inclusive`) and radio (`exclusive`) button modes.
                -   `<Accordion.Container logic_name="XXX">` — Used to synchronize the form name between each radio / checkbox button.
                -   `<Accordion.Container logic_state="XXX">` — Used to set which form ID(s) is the currently active accordion item(s).

            -   `<Accordion.Group>` — Used for grouping together `<Accordion.Label>` / `<Accordion.Section>` Components.

                -   `<Tab.Group logic_id="XXX">` — Used to synchronize the form IDs between the radio buttons, tab content, and Svelte Contexts.

            -   `<Accordion.Label>` — Used for creating radio / checkbox buttons for selecting the active accordion item(s).

                -   `<Accordion.Label state>` — Wrapper around `<input type="checkbox/radio" checked={false/true}>`, used to make the item active.
                -   `<Accordion.Label palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.

            -   `<Accordion.Section>` — Used for wrapping accordion item content that will render when active.

                -   `<Accordion.Section loading="lazy">` — Disables rendering of item content to DOM when not active.

-   Updated the following Components / Component Features

    -   Utilities

        -   `Transition`

            -   `<Transition animation="clip">` — Reversed `direction` property handling so `enter` variations come from their `direction`, rather than expand to their `direction`. Matching the `<Transition animation="slide">` variations.

## v0.4.4 - 2021/10/17

-   Fixed Svelte Compiler ARIA warnings about missing `for` / `href` attribute, even if provided by developer.
-   Moved base element styles earlier in stylesheet imports, to reduce specificity conflicts.

-   Added the following Components / Component Features

    -   Display

        -   `Table`

            -   `<Table.Column colspan={number | string} rowspan={number | string}>` / `<Table.Heading colspan={number | string} rowspan={number | string}>` — Bindings to [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) / [`rowspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-rowspan) attributes.

-   Fixed the following Components / Component Features

    -   Disclosure

        -   `Tab`

            -   `<Tab.Anchor>` — Fixed text coloring being inherited from base `<Anchor>` styles.

    -   Interactables

        -   `Form`

            -   `<Form.Label for="XXX">` — Fixed authoritive context not being set when no parent context is found.

-   Removed the following Components / Component Features

    -   Interactables

        -   `Button`

            -   `<Button for="XXX">` — Removed the ability to set empty `<label for>` via `true` value.

-   Updated the following Components / Component Features

    -   Display

        -   `Table`

            -   `<Table.Column bind:element>` / `<Table.Heading bind:element>` — Changed from deprecated `HTMLTableDataCellElement` / `HTMLTableHeaderCellElement` -> `HTMLTableCellElement`.

    -   Interactables

        -   `Button`

            -   `<Button for>` / `<Button href>` — Changed from using `role=button` to `.button` class as the selector.

## v0.4.3 - 2021/10/11

-   Added CSS Theming Variables to the following Components: `Button`, `Check`, `Form`, `Radio`, `Switch`, `TextInput`.
-   Revamped internal context handling for `Check`, `Form`, `HiddenInput`, `Radio`, `Switch`, `Tab`, `TextInput`.

-   Added the following Components / Component Features

    -   Interactables

        -   `Switch`

            -   Providing child content in the default unnamed slot will wrap the Component and content in a `<Form.Label>` with spacing as siblings.

    -   Overlays

        -   `Clickable` — Increases clickable area of child `<Clickable.Anchor>` / `<Clickable.Label>` to the entirety of parent. Surfacing any other interactable Components above that.

            -   `<Clickable.Container>` — Wrapper `display: contents` Component which sets `position: relative` on immedidate children.
            -   `<Clickable.Anchor>` — Works like a regular `<Anchor>` but with `clickable-item` class preset.
            -   `<Clickable.Label>` — Works like a regular `<Form.Label>` but with `clickable-item` class preset. And sets the Form ID context to match `<Clickable.Label for>`.

-   Updated the following Components / Component Features

    -   Navigation

        -   `Anchor`

            -   **(BREAKING)** Changed link coloring to inherit current color. Works better in most composable situations, e.g. w/ `Clickable`

                -   Use `<Anchor palette="XXX">` to color links according to palette.

## v0.4.2 - 2021/10/07

-   Added the following Components / Component Features

    -   Display

        -   `Badge`

            -   `<Badge shape="none/pill/rounded">` — Changes the border radius shape of the Component.

    -   Layout

        -   `Center` — Centers the child content within its self using Flexbox.
        -   `Position` — Applies special positioning rules to child content depending `<Position variation>`.

            -   `<Position variation="floated">` — Positions the child content in a corner of the containing parent without affecting layout.

                -   `<Position variation="floated" placement="bottom/top" alignment_x="left/right">` — Positions the child content in a top / bottom corner.
                -   `<Position variation="raised" placement="bottom/left/right/top">` — Positions the child content while affecting the layout.

    -   Utilities

        -   `Transition`

            -   `<Transition duration="number|string">` — Provide a percentage decimal (e.g. `1.2` which means `120%`) to control how long of the theme's animation duration is played.

-   Deprecated the following Components / Component Features

    -   Display

        -   `Badge`

            -   **(BREAKING)** `<Badge position="floated/raised">` — Current behavior is deprecated in favor of using `Position`.

    -   Feedback

        -   `Dot`

            -   **(BREAKING)** `<Dot position="floated/raised">` — Current behavior is deprecated in favor of using `Position`.

## v0.4.1 - 2021/10/01

-   Added `IS_SERVER: boolean` constant.

-   Added the following Actions / Action Features

    -   `intersection_observer(HTMLElement, {on_intersect: (intersections: IntersectionObserverEntry[]) => void}): IIntersectionObserverAction` — Light Svelte Action wrapper around the [`IntersectionObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

        -   `intersection_observer({...: IntersectionObserverInit})` — Pass [`IntersectionObserverInit`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver#properties) options.
        -   **NOTE**: Properties map to snake_case, e.g. `rootMargin` -> `root_margin`

    -   `mutation_observer(HTMLElement, {on_mutate: (mutations: MutationRecord[]) => void}): IMutationObserverAction` — Light Svelte Action wrapper around the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

        -   `mutation_observer({...: MutationObserverInit})` — Pass [`MutationObserverInit`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit) options.
        -   **NOTE**: Properties map to snake_case, e.g. `attributeFilter` -> `attribute_filter`

-   Added the following Components / Component Features

    -   Utilities

        -   `BrowserRender` — Disables rendering of child content whenever Component is initialized on a Server.
        -   `ServerRender` — Disables rendering of child content whenever Component is initialized on the Browser.

        -   `IntersectionRender` — Starts rendering the child content whenever the content intersects the viewport, via a [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

            -   `<IntersectionRender fallthrough={boolean}>` — When `true`, always renders content in SSR environments, e.g. SvelteKit
            -   `<IntersectionRender loading="eager">` — Changes behavior to stop rendering the child content whenever it leaves the viewport, instead of persisting.
            -   `<IntersectionRender has_intersected={boolean}>` — Is `true` after the child content has intersected once.
            -   `<IntersectionRender is_intersecting={boolean}>` — Is `true` whenever the child content is intersecting.
            -   `<IntersectionRender root>` — Maps to [`IntersectionObserverInit.root`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root).
            -   `<IntersectionRender root_margin>` — Maps to [`IntersectionObserverInit.rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin).
            -   `<IntersectionRender threshold>` — Maps to [`IntersectionObserverInit.threshold`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds).

## 0.4.0 - 2021/09/28

-   Added CSS Theming Variables to the following Components: `Anchor`, `Badge`, `Box`, `Breadcrumb`, `Card`, `Container`, `Divider`, `Dot`, `Ellipsis`, `Group`, `Hero`, `List`, `Progress`, `Spinner`, `Table`, `Tile`, `Wave`.
-   Fixed `<XXX sizing="{VIEWPORT}:{SIZING}>` modifiers not having correct values.

-   Added the following Components / Component Features

    -   Navigation

        -   `Anchor`

            -   `<Anchor palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.

    -   Utilities

        -   `<Transition>` — Encapsulates the child content within an controllable animation.

            -   `<Transition delay="number|string">` — Provide a percentage decimal (e.g. `1.2` which means `120%`) to control how long of the transition duration to wait before playing.
            -   `<Transition direction="bottom/left/right/top">` — On supported animations, controls the direction in which the animation moves towards. With most animations defaulting to `bottom`.
            -   `<Transition variation="enter/exit/undefined">` — If `enter`, the enter animation plays. If `exit`, exit animation plays. No animation plays when provided `undefined`.
            -   `<Transition on:animationend on:animationstart>` — Passthrough of the Browser [`animationend`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event) / [`animationstart`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationstart_event) events.

            -   `<Transition animation="XXX">` — Controls which animation is played.

                -   `<Transition animation="clip">` — Sets to a `clip-path` / `opacity` "blinders" animation.
                -   `<Transition animation="fade">` — Sets to a simple `opacity` "fade in" / "fade out" animation.
                -   `<Transition animation="scale">` — Sets to a `transform: scale` / `opacity` "zoom in" / "zoom out" animation.
                -   `<Transition animation="slide">` — Sets to a `transform: translate` / `opacity` sliding movement animation.

-   Updated the following Components / Component Features

    -   Navigation

        -   `Breadcrumb`

            -   `<Breadcrumb.Item active>` — Changed from a `active={true}` being bolded, to `active={false}` being lower opacity. Works better in situations where a parent container has bolded text.

-   Removed the following Components / Component Features

    -   Feedback

        -   `Spinner`

            -   **(BREAKING)** `<Spinner variation="dual">` — Removed previously deprecated feature.

## 0.3.5 - 2021/09/19

-   Added the following Components / Component Features

    -   \*

        -   `<XXX elevation="none">` — Removes elevation from the Component.

    -   Display

        -   `Table`

            -   `<Table.Container sizing="tiny/small/medium/large/huge">` — Added support for modifying the text sizing / spacings of all children.

    -   Overlays

        -   `Overlay`

            -   `<Overlay orientation="horizontal/mobile:horizontal/tablet:horizontal/desktop:horizontal/widescreen:horizontal">` — Lays content out horizontally.

    -   Surfaces

        -   `Box`

            -   `<Box elevation="none/lowest/low/medium/high/highest">` — Changes the background box shadow for facsimile of elevated height off the page.
            -   `<Box shape="none/pill/rounded">` — Changes the border radius shape of the Component.

        -   `Card` / `Tile`

            -   `<XXX.Footer orientation="vertical/mobile:vertical/tablet:vertical/desktop:vertical/widescreen:vertical">` — Lays content out vertically.
            -   `<XXX.Footer alignment="center/stretch" alignment_x="left/right/center/stretch" alignment_y="top/bottom/center/stretch">` — Used to align the content.

    -   Utilities

        -   `Portal`

            -   `<Portal loading="lazy">` — Disables rendering to HTML of the default slot content when not active / mounted.

## v0.3.4 - 2021/09/10

-   Fixed `keybind({repeat: true})` Svelte Action dispatching `on_bind` before all keys of combinations are pressed.

-   Added the following Components / Component Features

    -   Interactables

        -   `Form`

            -   `<Form.Group on:change>` — Dispatches whenever the `<Form.Group logic_state>` value changes via Svelte Context.

    -   Utilities

        -   `Portal`

            -   `<Portal on:mount>` — Dispatches whenever the `Portal` Component successfully mounts.

-   Updated the following Components / Component Features

    -   \*

        -   Added [slot typing](https://github.com/dummdidumm/rfcs/blob/683fe6d12051b1c9107cfe76cfb90af5efe2fc43/text/ts-typing-props-slots-events.md#typing-slots) to all Components.

    -   Utilities

        -   `Portal`

            -   Updated to hide content whenever not yet mounted.

## v0.3.3 - 2021/09/01

-   Added `--font-content-size-local-*` / `--font-headline-size-local-*` properties, which use `em` values instead of `rem`.
-   Fixed `viewport("widescreen")` / `viewports({widescreen: true})` using incorrect values.
-   Updated `--font-content-size-*` / `--font-headline-size-*` CSS variables to `--font-content-size-root-*` / `--font-headline-size-root-*`.

-   Added the following Components / Component Features

    -   Surfaces

        -   `Card` / `Tile`

            -   `<Card.Container sizing="tiny/small/medium/large/huge">` / `<Tile.Container sizing="tiny/small/medium/large/huge">` — Added support for modifying the text sizing / spacings of all children.

-   Fixed the following Components / Component Features

    -   Navigation

        -   `Breadcrumb`

            -   `<Breadcrumb.Container separator="XXX">` — Fixed typings to not error on no value being present.

-   Updated the following Components / Component Features

    -   Navigation

        -   `Breadcrumb`

            -   Updated spacing for separators `small` -> `tiny` tier.

    -   Surfaces

        -   `Card`

            -   `<Card.Figure>` — non-fullbleed media is now centered on both axis.
            -   Updated border / spacing handling to work better with `<Card.Figure>` with non-fullbleed media.

        -   `Card` / `Tile`

            -   `<Card.Header>` / `<Tile.Header>` — Updated font size `large` -> `medium`
            -   Updated spacing to be slightly more compact.

## v0.3.2 - 2021/08/24

-   Fixed attribute mapping not rejecting `false` values.

## v0.3.1 - 2021/08/24

-   Fixed some internal Component typings.

-   Added the following Components / Component Features

    -   Disclosure

        -   `Tab`

            -   `<Tab.Container>` — Wrapper Component which provides stylings and Svelte Contexts for radio button functionality.

                -   `<Tab.Container logic_name="XXX">` — Used to synchronize the form name between each radio button.
                -   `<Tab.Container logic_state="XXX">` — Used to set which form ID is the current active tab.
                -   `<Tab.Container sizing="tiny/small/medium/large/huge">` — Used to change how large the children buttons renders as.

            -   `<Tab.Group>` — Used for grouping together `<Tab.Label>` / `<Tab.Section>` Components.

                -   `<Tab.Group logic_id="XXX">` — Used to synchronize the form IDs between the radio buttons, tab content, and Svelte Contexts.

            -   `<Tab.Label>` — Used for providing radio buttons for navigating tabs without Javascript.

                -   `<Tab.Label state>` — Wrapper around `<input type="radio" checked={false/true}>`, used to make the tab active.

            -   `<Tab.Anchor>` — Used for providing page-based navigation buttons.

                -   `<Tab.Anchor current="XXX">` — Wrapper around `aria-current`, used to make the tab active.

            -   `<Tab.Anchor>` / `<Tab.Label>`

                -   `<Tab.XXX palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.

            -   `<Tab.Section>` — Used for wrapping tab content that will render when active.

                -   `<Tab.Section loading="lazy">` — When paired with `<Tab.Group>` / `<Tab.Label>`, disables rendering of tab content to DOM when not active.

    -   Feedback

        -   `Progress`

            -   `<Progress>` — Used for displaying the process of an ongoing action to the end-user.

                -   `<Progress palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.
                -   `<Progress shape="circle">` — Used to change the rendering of the Component to be a circle.
                -   `<Progress size="tiny/small/medium/large/huge">` — Used to change how large the Component renders as.
                -   `<Progress value="0.0...1.0">` — Used to control the current percent displayed.

-   Added the following Actions / Action Features

    -   `keybind(HTMLElement, {binds: string | string[], on_bind: (event: IKeybindEvent) => void}): IKeybindAction` — Used to bind multiple key combinations to activate a keybind callback.

        -   `keybind(HTMLElement, {repeat?: boolean, repeat_throttle?: number})` — Used to control if the `on_bind` callback is repeated for held down active keybinds, and how long between each repeat call.

## v0.3.0 - 2021/08/10

-   First NPM release, install via `npm install @kahi-ui/framework`.

## v0.2.16 - 2021/08/04

-   Fixed dark mode transition being laggy on WebKit / Blink Browsers.
-   Fixed scrollbar not having height applied to it on WebKit / Blink Browsers.
-   Updated scrollbar with theming for dark mode.
-   Updated colors, spacings, and other visual modifiers.

-   Added initial support for Theming CSS Variables

    -   `--font-family-(monospace/normal)` — References the available font familes.

        -   e.g. `font-family: var(--font-family-monospace);`

    -   `--font-(content/headline)-(line-height/size)-(nano/tiny/small/medium/large/huge/massive)` — References the available font sizes and their associated line heights.

        -   e.g. `font-size: var(--font-content-size-medium);`

    -   `--palette-(auto/auto-off/inverse/inverse-off/accent/neutral/dark/off-dark/light/off-light/alert/affirmative/negative)-(lightest/light/normal/bold/boldest)` — References the available shades for the semantic color palette.

        -   e.g. `color: rgb(var(--palette-accent-bold));`
        -   **IMPORTANT**: The semantic shades naming depends on the theme used. e.g. the default theme flips light <-> dark shades around and shifts the shading scale, for dark mode.
        -   **NOTE**: The `auto` / `auto-off` palettes are their respective `dark` / `light`, depending on if the Framework is in dark mode.
        -   **NOTE**: The `inverse` / `inverse-off` palettes are always the opposite of the `auto` / `auto-off` palettes.
        -   **NOTE**: The `off` palettes are "off color" variations of the `dark` / `light` palettes.

    -   `--radius-(circle/pill/small/medium)` — References the available border radius and shape associated radii.

        -   e.g. `border-radius: var(--radius-medium);`

    -   `--sizes-(content/embedded/icon)-(tiny/small/medium/large/huge)` — References the available sizing levels for Content sizes, Embedded Media widths, and Icon sizes.

        -   e.g. `width: var(--sizes-icon-small);height: var(--sizes-icon-small);`

    -   `--spacing-(local/root)-(tiny/small/medium/large/huge)` — References the available spacing levels, with `root` spacing using `rem` and `local` using `em`.

        -   e.g. `padding-left: var(--spacing-root-small);`

-   Added the following Components / Component Features

    -   Interactables

        -   `Button`

            -   `<Button type="reset" value="XXX">` — Added support for rendering `<input type="reset" />`.

        -   `TextInput`

            -   `<TextInput palette="XXX" variation="flush" />` — Added support for text colors in `flush` variations.

    -   Navigation

        -   `Menu`

            -   `<Menu.Container sizing="XXX">` — Added support for setting sizing for menu content.
            -   `<Menu.Anchor palette="XXX">` / `<Menu.Button palette="XXX">` / `<Menu.Label palette="XXX">` — Added support for palettes.

    -   Typography

        -   `Heading`

            -   `<Heading palette="XXX">` — Is now supported for all the built-in semantic palettes.

        -   `Text`

            -   `<Text variation="headline">` - Is now supported for all headline sizes.

-   Deprecated the following Components / Component Features

    -   Feedback

        -   `Spinner`

            -   **(BREAKING)** `<Spinner variation="dual">` — Will no longer be available in the future.

        -   `Wave`

            -   **(BREAKING)** `<Wave size="XXX">` — Not a useful modifier, also to add consistency with `Dot`.

-   Updated the following Components / Component Features

    -   \*

        -   `<XXX palette="auto-inverse">` — Changed from `auto-inverse` -> `inverse` to be consistent with new CSS Variables.

    -   Interactables

        -   `Button`

            -   `<Button value="XXX">` — Fixed `<input />`-based `Button`s not rendering properly.

        -   `Form`

            -   `<Form.Control on:click>` — Added missing event typing definitions.

    -   Navigation

        -   `Menu`

            -   `<Menu.Label>` — Added missing event typing definitions.

    -   Utilities

        -   `ContextBackdrop`

            -   `<ContextBackdrop on:click>` — Added missing event typing definitions.

## v0.2.15 - 2021/07/27

-   Deprecated the following Components / Component Features

    -   Navigation

        -   `Omni`

            -   **(BREAKING)** `<Omni.Container logic_id="XXX">` — Current behavior is deprecated in favor of using `Popover` in combination with global modifiers like `hidden`.

-   Updated the following Components

    -   \*

        -   Migrated all Components to internally use new experiemental [`$$Props`](https://github.com/dummdidumm/rfcs/blob/683fe6d12051b1c9107cfe76cfb90af5efe2fc43/text/ts-typing-props-slots-events.md) TypeScript type aliasing.
        -   Fixed Svelte Compiler warnings for unused exports.

    -   Navigation

        -   `Menu`

            -   `<Menu.Container class="XXX">` — Fixed not accepting property input.

## v0.2.14 - 2021/07/20

-   Updated the following Components

    -   Display

        -   `Table`

            -   Fixed table bottom borders to use deeper nested `::before` to fix Chrome rendering bug.

    -   Navigation

        -   `Aside`

            -   Removed rendering of `Offscreen` wrapper when `logic_id` is not set.

    -   Overlays

        -   `Offscreen` / `Popover`

            -   Removed unintended behavior of inheriting the current logic / state contexts.

        -   `Overlay`

            -   Removed unintended property typings.

    -   Utilities

        -   `Portal`

            -   Fixed exception thrown when trying to mount `Portal` container element.
            -   Fixed `Portal` not removing children upon being destroyed.

-   Updated the following Actions

    -   `click_outside`

        -   **(POTENTIALLY BREAKING)** Added validation check if the click target is actually inside the the DOM or off-screen.
            -   If you had a Component which changes its DOM layout before the `click` event handler was fired, previously the action would emit a false positive.
            -   e.g. the documentation web application's dark mode toggle icon. It changes the icon whenever clicked.

-   Added the following Stores

    -   `mediaquery(query: string): Readable<boolean>` / `mediaqueries(queries: string[], options: IMediaQueriesOptions): Readable<boolean>` — Returns `true` whenever any of the given Media Queries are valid.

        -   `mediaqueries(queries, {behavior: "and"})` — Requires all given Media Queries to be valid instead of any.

    -   `viewport(viewport: string): Readable<boolean>` — Single viewport version of `viewports`.

-   Updated the following Stores

    -   `attribute`

        -   **(POTENTIALLY BREAKING)** Updated to remove attributes set target element if provided value is falsy.

    -   `prefersscheme`

        -   Updated to utilize the new `mediaquery` Store internally.

    -   `viewports(viewports: Record<string, boolean>): Readable<string>`

        -   Refactored implementation for quicker updates.
        -   Only passing in a single Viewport will return an instance of `viewport`.

## v0.2.13 - 2021/07/13

-   Added the following Components

    -   Interactables

        -   `HiddenInput` — Useful for providing hidden constants for form submissions that the end-user doesn't need to modify.

-   Updated the following Components

    -   Feedback

        -   `Ellipsis`

            -   Updated to disable line wrapping on the inner characters.

    -   Interactables

        -   `Check` / `Radio`

            -   Added `<XXX variation="flush">` — Changes the appearance to only show the inner box / circle shape.

    -   Navigation

        -   `Menu`

            -   Added `<Menu.Label>` — Useful for wrapping a form Component as a Menu option.
            -   Added property passthrough for `Menu.Anchor` / `Menu.Button` / `Menu.Divider` / `Menu.Heading` to `Menu.Item`.
            -   Updated typings for `Menu.Anchor` / `Menu.Button` / `Menu.Divider` / `Menu.Heading`.

    -   Surfaces

        -   `Card` / `Tile`

            -   Added `<XXX variation="flush">` — Changes the appearance to remove exterior padding, background, and box shadow.

## v0.2.12 - 2021/07/04

-   Upgraded Storybook `6.3.0-rc.11` -> `6.3.2`.
-   Updated the following Components

    -   Interactables

        -   `Form`

            -   Updated `Form.Control` / `Form.HelpText` / `Form.Label` not properly handling global modifiers / properties.

        -   `TextInput`

            -   Added `<TextInput align="center/justify/left/right">` — Aligns the text displayed within the `TextInput`.
            -   Added `<TextInput transform="capitalize/lowercase/uppercase">` — Transform the character casing of text displayed within the `TextInput`.

                -   **IMPORTANT**: This will only _affect_ the **VISUAL DISPLAY**, not the value retrieved via value binding.

        -   `Check` / `Radio` / `Switch` / `TextInput`

            -   Added `<XXX on:blur on:focus>` — Events fired whenever the Component loses focus or gains focus from the end-user, respectively.

    -   Navigation

        -   `Aside`

            -   Updated `<Aside.Section>` with disabled `flex-shrink` when not last of type.

    -   Typography

        -   `Heading` / `Text`

            -   Updated handling for `<Heading align="XXX" transform="XXX">` / `<Text align="XXX" transform="XXX">` to internally use variables.

        -   `Text`

            -   Updated all `<Text is="XXX">` elements to accept `<Text align="XXX">`.

## v0.2.11 - 2021/06/29

-   Bump Browser minimum version requirements.

    -   Utilizing [`inset`](https://developer.mozilla.org/en-US/docs/Web/CSS/inset) in `Popover`.

        -   Chrome 87+ _(November 2020)_
        -   Edge 87+ _(November 2020)_
        -   Firefox 66+ _(March 2019)_

            -   Minimum was already Firefox 67+.

        -   Safari 14.1+ _(April 2021)_

            -   Minimum was already Safari 14.1+.

-   Added `<XXX spacing="{VIEWPORT}:none">` / `<XXX spacing-{AXIS}="{VIEWPORT}:none">` support for Components that needed the zero pixel variable.
-   Added the following Components

    -   Overlays

        -   `Offscreen` — Useful for wrapping excess content offscreen that the end-user can show via buttons on the Viewport edges.

            -   `<Offscreen alignment="center/stretch" alignment_x="left/right/center/stretch" alignment_y="top/bottom/center/stretch">` — Defaults to `stretch`, used to align the content.
            -   `<Offscreen hidden="true/mobile/tablet/desktop/widescreen">` — Used to control which Viewports the excess content is hidden on.
            -   `<Offscreen logic_id="XXX">` — Used to set the HTML `id` for the state checkbox which controls when content is being shown.
            -   `<Offscreen placement="top/left/bottom/right">` — Defaults to `left`, used to control which edge to show the content along.
            -   `<Offscreen captive>` — Enables the backdrop.
            -   `<Offscreen dismissable>` — Enables the backdrop to be clickable, and dismisses the `Offscreen`.
            -   `<Offscreen on:active>` — Fires whenever the `Offscreen` is made active, either via scripting or the end-user.
            -   `<Offscreen on:dismiss>` — Fires whenever the `Offscreen` is dismissed, either via scripting or the end-user.

        -   `Popover` — Useful for creating overflow menus that the end-user can show via buttons.

            -   `<Popover alignment_x="left/right/center" alignment_y="top/bottom/center">` — Defaults to `center`, used to align the content.
            -   `<Popover hidden="true/mobile/tablet/desktop/widescreen">` — Used to control which Viewports the excess content is hidden on.
            -   `<Popover logic_id="XXX">` — Used to set the HTML `id` for the state checkbox which controls when content is being shown.
            -   `<Popover placement="top/left/bottom/right">` — Defaults to `bottom`, used to control which edge to show the content along.
            -   `<Popover spacing="none/tiny/small/medium/large/huge">` — Defaults to `none`, used to control how far away the `Popover`'s floating content will appear away from the base content.
            -   `<Popover dismissable>` — Enables the `Popover` to close whenever its content are clicked outside of.
            -   `<Popover on:active>` — Fires whenever the `Popover` is made active, either via scripting or the end-user.
            -   `<Popover on:dismiss>` — Fires whenever the `Popover` is dismissed, either via scripting or the end-user.

-   Updated the following Components

    -   Navigation

        -   `Aside`

            -   Added `<Aside.Container placement="left/right">` — Used to control which Viewport edge the `Aside` will be on when collapsed on Mobile / Tablet.
            -   Added `<Aside.Container on:active>` — Fires whenever the `Aside` is made active, either via scripting or the end-user.
            -   Added `<Aside.Container on:dismiss>` — Fires whenever the `Aside` is dismissed, either via scripting or the end-user.
            -   Migrated `<Aside.Container>` to internally use `Offscreen` for collapsing functionality.
            -   Updated last `<Aside.Section>` to flew grow to parent height.

    -   Overlays

        -   `Overlay`

            -   Fixed `Overlay` potentially resetting between viewport changes.

    -   Surfaces

        -   `Card`

            -   Updated `<Card.Section>` to have increased y-axis padding when the first / last child of a `<Card.Container>`.
            -   Updated only last `<Card.Section>` to only flex grow parent height.

        -   `Card` / `Tile`

            -   Updated border size slightly for better Dark Mode readability.
            -   Updated default elevation to be `lowest` instead of `low`.

-   Updated the following Stores / Contexts

    -   `get_state_context(): Writable<boolean>`

        -   `get_state_context(): Writable<boolean>` -> `get_state_context(): Writable<boolean> | undefined` — No longer throws an error when the Svelte Context cannot be found.

## v0.2.10 - 2021/06/26

-   Updated the following Components

    -   Display

        -   `List`

            -   **(BREAKING)** Updated to be in line with the rest of element configurable Components.

                -   `<List.Ordered>` -> `<List.Container is="ol">`
                -   `<List.Unordered>` -> `<List.Container is="ul">`

    -   Layouts

        -   `Grid`

            -   **(BREAKING)** Changed `Grid` to be a namespace.

                -   Access the original Component via `<Grid>` -> `<Grid.Container>`, same API otherwise.

            -   Fixed `<Grid class="XXX">` not working.
            -   Updated `Grid.Container` to densely pack rows.

            -   Added `Grid.Item` — Optionally used to wrap a child item.

                -   `<Grid.Item span="1...12" span_x="1...12" span_y="1...12">` — Used to control how many Grid Points the child item spans in columns, rows, or both. With Viewport support, e.g. `<Grid.Item span={["3", "mobile:1"]}>`

        -   `Mosaic`

            -   Fixed `<Mosaic class="XXX">` not working.

        -   `Scrollable`

            -   Fixed `<Scrollable class="XXX">` not working.

    -   Overlays

        -   `Overlay`

            -   Added `<Overlay on:active>` — Fires whenever the `Overlay` is made active, either via scripting or the end-user.
            -   Added `<Overlay on:dismiss>` — Fires whenever the `Overlay` is dismissed, either via scripting or the end-user.

## v0.2.9 - 2021/06/24

-   Fixed NPM install.

## v0.2.8 - 2021/06/24

-   Updated the following Components

    -   Interactables

        -   `TextInput`

            -   Fixed `<TextInput resizeable>` -> `<TextInput resizable>`

## v0.2.7 - 2021/06/24

-   Upgraded Storybook to `6.3.0-rc.11`.

    -   Changed Storybook to use Vite as toolchain.

-   Adjusted background shades for light mode.
-   Fixed up some naming / organization of Component types and Storybook options.

-   Added new Components

    -   Form

        -   `Form`

            -   `Form.Control` — Works as a container Component for providing vertical stacking for `Form.Label` / `Form.HelpText` / form Component with font-size based spacing

                -   `<Form.Control logic_id="XXX">` — Used as an authoritative source for IDs for form-based Components via Svelte Context

            -   `Form.Group` — Works as a purely virtual Component for providing shortcuts for groupings of form Components

                -   `<Form.Group logic_name="XXX">` — Used as an authoritative source for form names for form-based Components via Svelte Context

            -   `Form.Label` — Used to communicate to the end-user what a sibling / child form Component is used for

                -   `<Form.Label logic_id="XXX">` — Used as an authoritative source for IDs for form-based Components via Svelte Context

            -   `Form.HelpText` — Used to communicate to the end-user helpful information about a sibling form Component, e.g. input is for E-Mail address format

-   Returning Components with their associated updates

    -   Display

        -   `Table`

            -   Changed `Table.Body` -> `Table.Section`
            -   Changed `Table.Heading` -> `Table.Header`
            -   Added `<Table.Container palette="accent/dark/light/alert/affirmative/negative">`
            -   Changed `<Table.Column heading>...</Table.Column>` -> `<Table.Heading>...</Table.Heading>`
            -   Changed `<Table.Container variation="bordered">` -> `<Table.Container variation="borders">`
            -   Changed `<Table.Container variation="striped">` -> `<Table.Container variation="stripes">`

    -   Interactables

        -   `Button`

            -   Updated to use transparent borders for consistent height.

        -   `Check` / `Radio`

            -   Providing child content as a slot will wrap the Component and content in a `<Form.Label>` with spacing as siblings

        -   `Switch`

        -   `TextInput`

-   Updated the following Components

    -   Interactables

        -   `Button`

            -   Added padding to adjust depending on text size.

    -   Layouts

        -   `Container`

            -   Updated x-axis padding to be slightly larger.

    -   Navigation

        -   `Menu`

            -   Updated `Menu.Anchor` / `Menu.Button` to match new `Button` padding.

    -   Typography

        -   `Text`

            -   Updated keycap design for `<Text is="kbd">`.

    -   Utilities

        -   `ContextBackdrop`

            -   Adjusted background shading to be slightly darker / opaque.

## v0.2.6 - 2021/06/21

-   Added `name` HTML5 attribute to all Components as a global property.
-   Adjusted dark / light shades coloring slightly.
-   Fixed the sizing modifiers.
-   Fixed the spacing modifiers.
-   Fixed typo of `dismissable` -> `dismissible`.
-   Fixed typing of `DESIGN_HIDDEN_ARGUMENT` not accepting array arguments for Viewports.
-   Updated the following Components

    -   Feedback

        -   `Wave`

            -   Removed line wrapping from the children dots.

    -   Navigation

        -   `Aside` / `Omni`

            -   Added low transparency border for legibility.

        -   `Breadcrumb`

            -   Fixed not resetting the `List` margins.

        -   `Menu`

            -   Fixed `Menu.Divider` not rendering non-text dividers properly.

    -   Overlays

        -   `Overlay`

            -   Fixed children not being interactable when state was not configured.

    -   Surfaces

        -   `Box`

            -   Adjusted default color shade to match `Hero`.

        -   `Card` / `Tile`

            -   Added low transparency border for legibility.

        -   `Tile`

            -   Updated `Tile.Section` to use bigger padding when first and / or last child for their respective sides.

    -   Typography

        -   `Heading` / `Text`

            -   Added `palette="accent/dark/light/alert/affirmative/negative"` text color modifier.

        -   `Text`

            -   Added initial keycap design for `<Text is="kbd">`.

## v0.2.5 - UNRELEASED

-   Added new Components

    -   Feedback

        -   `Ellipsis`

            -   Renders three text periods that fade in and out with synchronized delays. Useful for collaboration feedback, e.g. `NovacBN is typing...` -> `NovacBN is typing<Ellipsis />`
            -   `<Ellipsis character="X">` — Changes the character being rendered

-   Returning Components with their associated updates

    -   Feedback

        -   `Wave`

            -   `<Wave palette="accent/dark/light/alert/affirmative/negative">` — Changes the color palette
            -   `<Wave size="tiny/small/medium/large/huge">` — Changes the size

    -   Typography

        -   `Blockquote`

            -   `Quote.Container`, `Quote.Cite` -> `Blockquote.Container`, -> `Blockquote.Cite`
            -   `<Blockquote.Container palette="accent/dark/light/alert/affirmative/negative">` — Changes the color used for the border and background

## v0.2.4 - UNRELEASED

-   Added `IS_BROWSER: boolean` to exports
-   Added `<XXX palette="auto/inherit/inverse">` to all palette adjustable Components

    -   `auto` — Component adjusts between `dark` / `light` palettes depending on if Dark Mode is active or not. Useful for Components like `<Card.Container>` acting like an Modal via `<Overlay>`
    -   `auto-inverse` — Inverse of `auto`, if Dark Mode is enabled then `light` is selected. And if Dark Mode is off, then `dark` is selected
    -   `inherit` — Forces the Component to inherit its palette from parent or higher ancestor. Useful for Components like `<Button>` which have a default palette

-   Updated `viewports(): Readable<boolean>` debounce to use 0 duration `requestIdleCallback`, which waits for the Browser to idle. So in some situations it might run faster
-   Returning Components with their associated updates

    -   Display

        -   `List`

            -   `<List.Ordered>` / `<List.Unordered>` for respective `<ol>` / `<ul>` bindings
            -   `<List.Item>` for `<li>` binding

    -   Overlays

        -   `Overlay`

            -   Displays children as an Overlay, with an optional backdrop
            -   `<Overlay alignment="center/stretch" alignment_x="left/right/center/stretch" alignment_y="top/bottom/center/stretch">` — Defaults to `center`, aligns the children
            -   `<Overlay spacing="tiny/small/medium/large/huge" spacing_x="tiny/small/medium/large/huge" spacing_y="tiny/small/medium/large/huge">`
            -   `<Overlay captive>` — Enables the backdrop
            -   `<Overlay dismissable>` — Enables the backdrop to be clickable, and dismisses the Overlay

-   Updated the following Components

    -   Navigation

        -   `Aside`

            -   Now collapses on tablet Viewport breakpoint when enabled via `logic_id`, collapse state resets on Viewport size change
            -   Added `<Aside.Container captive>` — Enables placing a `<ContextBackdrop>` automatically

                -   Use `<Aside.Container dismissable>` to make the backdrop clickable to dismiss

        -   `Menu`

            -   Added `<Menu.Container orientation="horizontal/mobile:horizontal/tablet:horizontal/desktop:horizontal/widescreen:horizontal">`, lays out content horizontaly

                -   Use only for single-dimension menus, e.g. no dividers, submenus, etc

        -   `Omni`

            -   Now collapses on mobile / tablet Viewport breakpoint when enabled via `logic_id`, collapse state resets on Viewport size change
            -   Added `<Omni.Container captive>` — Enables placing a `<ContextBackdrop>` automatically

                -   Use `<Omni.Container dismissable>` to make the backdrop clickable to dismiss

    -   Typography

        -   `Heading`

            -   Added `<Heading variation="headline">` for accessing a second tier of bigger font sizes / line heights

                -   `<Heading is="h1">` is the same size as `<Hero.Header>`

## v0.2.3 - UNRELEASED

-   Added `prefersscheme(scheme: "dark" | "light"): Readable<boolean>`, with `prefersdark(): Readable<boolean>` / `preferslight(): Readable<boolean>` shortcut Svelte Stores

    -   Replaces previous `darkmode(): Readable<boolean>` Stores

-   Added `htmlpalette(): Writable<"accent" | "dark" | "light" | "alert" | "affirmative" | "negative" | "">` shortcut Svelte Store

    -   Wraps the `data-palette` attribute from `<html data-palette="XXX">`

-   Changed `darkmode(): Readable<boolean>` logic

    -   Replicates the logic built into the CSS files, is `true` when either condition is met:

        -   `<html data-palette="dark">` is set
        -   `@media (prefers-color-scheme: dark)` is true and `data-palette` is not set

-   Updated `viewports(): Readable<boolean>` to debounce Store updates, to prevent too many updates in a single frame

    -   Minimum duration is 100ms, maybe more depending on Browser minimums for security / performance

-   Returning Components with their associated updates

    -   Layout

        -   `Scrollable`

## v0.2.2 - UNRELEASED

-   Added `<Group variation="stacked">`, overlaps children similar to an avatar stack when set
-   Added `<XXX palette="YYY">` color shades adjustments for dark mode
-   Returning global modifier `<XXX hidden>` / `<XXX hidden="mobile/tablet/desktop/widescreen">` / `<XXX hidden={["mobile", "tablet", "desktop", "widescreen"]}>`
-   Returning Components with their associated updates

    -   Navigation

        -   `Menu`

            -   Removed palette options from all Menu-related Components
            -   Changed method of adding submenus to `<svelte:fragment slot="sub-menu">XXX</svelte:fragment>` slot in `<Menu.Divider>` / `<Menu.Heading>`

-   Added Stores / Contexts used by some Components for progressive enhancements

    -   `state(default_value: boolean): Writable<boolean>` / `get_state_context(): Writable<boolean>`

        -   Used for providing contextual boolean state access, e.g. `<ContextBackdrop>` will read this from an `<Aside.Container>` to enable Scroll Lock

## v0.2.1 - UNRELEASED

-   Added `darkmode(): Readable<boolean>` Svelte Store

    -   Is `true` whenever `@media (prefers-color-scheme: dark)` is true

-   Added `viewports({desktop: boolean, mobile: boolean, tablet: boolean, widescreen: boolean}): Readable<boolean>` Svelte Store

    -   Is `true` whenever a given combination of Viewport screen dimensions is active

-   Added automatic dark mode media query

    -   Other themeing adjustments might be needed later

-   Added new Components

    -   Embedded

        -   `Figure`

            -   Used for wrapping multimedia content with object-related modifiers
            -   `<Figure size="tiny/small/medium/large/huge">` — Used for setting block sizes on the child media

                -   `<Figure variation="icon">` — Enables sizes that are typically used for icon UI contexts

            -   `<Figure fit="contain/cover/fill/none/scale-down">` — Used for setting how the child media is scaled to its parent container's size
            -   `<Figure shape="pill/rounded">` — Used for setting the border radius of the child media

-   Returning Components with their associated updates

    -   Surfaces

        -   `Tile`

            -   Removed `<Tile.Container href="XXX">` / `<Tile.Container for="XXX">`
            -   Changed `<Tile.Heading>` -> `<Tile.Header>`
            -   Changed `<Tile.Body>` -> `<Tile.Section>`

## v0.2.0 - UNRELEASED

-   Refactor of codebase, transitioned to using WindiCSS underlying tokening framework

    -   Proper CSS Variable support for themeing coming at a later date
    -   Vanilla HTML / JS consumption no longer primary target
        -   Svelte support is now the primary target
        -   Kahi UI will continue to target CSS / HTML logic-first, using Svelte mainly for templating and progressive enhancement

-   Added typing support via TypeScript
-   UI and UX polish / refresh
-   Returning Components with their associated updates

    -   Display

        -   `Badge`

            -   Added `<Badge variation="outline">`
            -   Removed `<Badge size="XXX">`

    -   Feedback

        -   `Dot`
        -   `Spinner`

            -   A variation of `<Loader variation="wave">` will return in the future

    -   Interactables

        -   `Button`

    -   Layouts

        -   `Container`

            -   Changed to, by default, max width being the theme's prose limit (65ch default)
            -   Removed Viewport delimited `<Container viewport="XXX">` values

        -   `Divider`

            -   Added `<Divider orientation="vertical">`, for proper vertical Divider / Text Separator support

        -   `Grid`

            -   Added `<Grid spacing_x="XXX">` / `<Grid spacing_y="XXX">` for axis dependent spacing

        -   `Group`

            -   Changed `class="group"` -> `role="group"`

        -   `Mosaic`

            -   Added `<Mosaic spacing_x="XXX">` / `<Mosaic spacing_y="XXX">` for axis dependent spacing

        -   `Spacer`

            -   Added `<Spacer spacing_x="XXX">` / `<Spacing spacing_y="XXX">` for orientation dependent spacing
            -   Changed to aligning / justifying its self for stretching and flex grow, but no longer `100%` orientation
            -   Changed `<Spacer inline>` -> `<Spacer variation="inline">`

        -   `Stack`

    -   Navigation

        -   `Anchor`
        -   `Aside`

            -   Added `<Aside.Section>`, main content must be wrapped with this Component
            -   Added `<Aside.Footer>`, auxillery content in this Component gets pushed to the bottom of the `<Aside.Container>`
            -   Changed `<Aside.Heading>` -> `<Aside.Header>`

        -   `Breadcrumb`

            -   Added `<Breadcrumb.Container separator="string/SvelteComponent">` for customizing the automatic item separator contents
            -   Added `<Breadcrumb.Anchor download="XXX">`
            -   Changed `<Breadcrumb.Anchor current="XXX">` -> `<Breadcrumb.Anchor active="boolean">`

                -   None of the other ARIA `aria-current` values applied, so sets `aria-current` to `page`
                -   Also disables rendering of separator if `true`

            -   Removed `<Breadcrumb.Container level="XXX">`

        -   `Omni`

            -   Now responsive, turns `<Omni.Footer>` / `<Omni.Section>` into a toggleable vertical list overlay on mobile / tablet
            -   Added `<Omni.Container logic_id="XXX">`

                -   Creates a sibling `<input id="XXX" type="checkbox">` element for storing mobile / tablet overlay state
                -   Use `<Button for="XXX">` to call to it, or `<ContextButton>` if (nested) child of `Omni.Container`

            -   Changed `<Omni.Heading>` -> `<Omni.Header>`
            -   Changed `<Omni.Body>` -> `<Omni.Section>`
            -   Changed `<Omni.Footer>` to now be used for wrapping `<Omni.Section>` children

    -   Surfaces

        -   `Box`

            -   Removed `<Box href="XXX">` / `<Box for="XXX">`

        -   `Card`

            -   Removed `<Card.Container href="XXX">` / `<Card.Container for="XXX">`
            -   Changed `<Card.Heading>` -> `<Card.Header>`
            -   Changed `<Card.Body>` -> `<Card.Section>`

        -   `Hero`

            -   Removed `<Hero.Container size="XXX">`, now fulfilled by sizing utilities
            -   Changed `<Hero.Heading>` -> `<Hero.Header>`
            -   Changed `<Hero.Body>` -> `<Hero.Section>`

    -   Typography

        -   `Code`

            -   Added preformatted text block via `<Code is="pre">`
            -   Added `<Code palette="accent/dark/light/alert/affirmative/negative">` for subtle darker accenting on lighter background visuals
            -   Added `<Code size="tiny/small/medium/large/huge">` for changing font sizes

        -   `Heading`

            -   Added `<Heading align="center/justify/left/right">` for text alignment
            -   Added `<Heading transform="capitalize/lowercase/uppercase">` for text transformation
            -   Added `<Heading variation="truncate">` / `<Heading variation={["truncate"]}>` for truncating text via ellipis when clipping overflow bounds
            -   Changed heading level handling to `<Heading is="h1/h2/h3/h4/h5/h6">`

        -   `Text`

            -   Added `<Text align="center/justify/left/right">` for text alignment
            -   Added `<Text transform="capitalize/lowercase/uppercase">` for text transformation
            -   Added `<Text variation="truncate">` / `<Text variation={["truncate"]}>` for truncating text via ellipis when clipping overflow bounds
            -   Added `<Text size="tiny/small/medium/large/huge">` for changing font sizes
            -   Changed modifier handling to be accessed via `<Text is="XXX">`
                -   Available parameters: `"abbr", "b", "cite", "del", "em", "i", "ins", "kbd", "mark", "pre", "s", "samp", "small", "span", "strong", "sub", "sup", "u"`

    -   Utilities

        -   `ContextButton`

            -   Used in places where there would've been a multi-part Component contextual button, e.g. `<Dialog.Button>` -> `<ContextButton>`
            -   Same API as regular `Button`

        -   `Portal`

-   Added Stores / Contexts used by some Components for progressive enhancements

    -   `component(default_value: string | SvelteComponent): Writable<string | SvelteComponent>` / `get_component_context(): Writable<string | SvelteComponent>`

        -   Used for providing contextual access to setting a string or Component where there needs to be a global setting instead of individual option

            -   e.g. `<Breadcrumb.Item>` will read this from an `<Breadcrumb.Container>` to get the currently set separator

    -   `id(default_value: string): Writable<string>` / `get_id_context(): Writable<string>`

        -   Used for providing contextual ID caching, e.g. `<ContextButton>` will read this from an `<Omni.Container>` that sets this to a Svelte Context

-   Updated all Components with Viewport breakpoint delimited have the following changes

    -   Viewports are now semantically named, `tiny` -> `mobile`, `small` -> `tablet`, `medium` -> `desktop`, `large` -> `widescreen`
    -   Delimited values are now segmented by colon, `<Stack orientation="mobile+horizontal">` -> `<Stack orientation="mobile:horizontal">`
    -   Multi select is done by array now, instead of passing `<Stack orientation="mobile:horizontal desktop:horizontal">` -> `<Stack orientation={["mobile:horizontal", "desktop:horizontal"]}>`

-   Updated all Components now export a `element: HTMLElement` reference for DX accessibility

    -   Bind like you would do `<h1 bind:this={element}>` -> `<Heading bind:element>`

-   Added to all block / container Components now have access to the following utilities

    -   `(margin / padding)`, `(margin / padding)-x`, `(margin / padding)-y`, `(margin / padding)-top`, `(margin / padding)-left`, `(margin / padding)-bottom`, `(margin / padding)-right`

        -   Values are: `tiny`, `small`, `medium`, `large`, `huge`
        -   Can delimit by Viewport breakpoint: `<Box margin="tablet:huge">`
        -   Can multi select by passing in array: `<Box margin={["huge", "tablet:small"]}>`

    -   `height`, `max-height`, `min-height`, `width`, `max-width`, `min-width`

        -   Values are

            -   Parent % relative: `25`, `33`, `50`, `66` `75`, `100`
            -   Viewport % relative: `viewport-25`, `viewport-33`, `viewport-50`, `viewport-66` `viewport-75`, `viewport-100`
            -   Content relative: `auto`, `content-max`, `content-min`

        -   Can delimit by Viewport breakpoint: `<Box width="tablet:33">`
        -   Can multi select by passing in array: `<Box width={["33", "tablet:25"]}>`

-   Added to all inline / foreground Components have access to the following utilities

    -   `margin`, `margin-x`, `margin-y`, `margin-top`, `margin-left`, `margin-bottom`, `margin-right`

        -   Values are: `tiny`, `small`, `medium`, `large`, `huge`
        -   Can delimit by Viewport breakpoint: `<Heading margin="tablet:huge">`
        -   Can multi select by passing in array: `<Heading margin={["huge", "tablet:small"]}>`

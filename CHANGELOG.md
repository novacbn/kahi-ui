# CHANGELOG

## v0.2.7 -

-   Upgraded Storybook to `6.3.0-rc.11`.

    -   Changed Storybook to use Vite as toolchain.

-   Adjusted background shades for light mode.
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

        -   `Check` / `Radio` / `Switch` / `TextInput`

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

    -   `state(default_value: boolean): Writable<boolean>` / `get_state_context(): Writable<string>`

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

## v0.1.0 - UNRELEASED

-   Added package version header comments to CSS output
-   Added `Dot` (`<span class="dot" data-palette="PALETTE" />`) Component as a replacement for `Badge` circle shape
-   Added `Breadcrumb` (`<ul class="breadcrumb" data-size="5"><li>...</li></ul>`) Navigation
-   Added `Overlay` (`<div class="overlay" data-alignment-x="right" data-alignment-y="bottom">...</div>`) Overlay for showing non-blocking positioned elements over the main content
-   Added `Scrollable` (`<div class="scrollable" data-overflow-y="hidden+tiny">`) Layout for making a responsive scrollable view
-   Added `Table` (`<table><tr><td>...</td></tr></table>`) Element
-   Added `Toast` (`<div class="overlay"><div role="status">...</div></div>`) Overlay for quick `Tile`-inherited elements in a viewport overlay, e.g. Notifications
-   Added global styling of scrollbars
-   Added dual position modifiers to `data-position` attribute for `Popover`

    -   e.g. `<div class="popover" data-position="top+left">...</div>`

-   Added `around`, `between`, `evenly` values to all flex-based `data-alignment` / `data-alignment-*` attributes
-   Added `data-stretch` modifier attribute that stretches self if parent supports

    -   Currently only supported by:
        -   Stack (`<div class="stack">`) children (`<div data-stretch>`)
        -   Dialogs (`<div class="dialog" data-stretch>`)

-   Fixed Grid referencing `--mosaic-spacing` and not `--grid-spacing`
-   Moved to using SASS compiler CLI directly for building and minification
-   Moved to new JS-based Theme Variable generation
-   Moved to PostCSS 8.X

    -   **FUTURE:** A JS API will be available to query this information

-   Removed CSSNANO most of the operations were not really needed
-   Removed polyfills for:

    -   `postcss-custom-media` — Removed all legacy usage since the switch from CSS -> SASS
    -   `postcss-is-pseudo-class` — As-of Chrome 88 (Jan 2021) / Safari 14 (Sep 2020) / Firefox 78 (June 2020), it is supported
    -   `postcss-selector-not` — As-of Chrome 88 (Jan 2021) / Firefox 84 (Dec 2020), it is supported
    -   `postcss-easings` — New Theme generator has it built-in

-   Updated file outputs to `dist/kahi-ui.framework.css` / `dist/themes/kahi-ui.theme.*.css`
-   Updated `Anchor`, `Button`, `Card`, `Dialog`, `Divider`, `Heading`, `Menu`, `Form`, `Text`, `TextArea`, `Tile` designs
-   Updated various selectors to use `:is` shorthand list where possible
-   Updated all flex styles with spacing via margin to use the `gap` property now — **(NOT SAFARI COMPATIBLE)**
-   Updated Viewports in Framework to construct media queries via mixins
-   Updated various embeddables (e.g. `<video>, <img>`) to disable user highlighting by default
-   **(BREAKING)** Changed Scaling / Stepping based Theme Variables to no longer be calculated at runtime, and are instead calculated at compile-time
-   **(BREAKING)** Moved `Badge` circle shape into its own stylesheet
-   **(BREAKING)** Moved Animations Keyframes that were handled by Themes into the Framework as Utilities instead
-   **(BREAKING)** Renamed `use-linkable` -> `use-anchor` to better reflect change
-   **(BREAKING)** Removed overflow scrolling by default in `Dialog` bodys, use `Scrollable` instead
-   **(BREAKING)** Updated `Spacer` Block to take up all remaining available space in the parent by default
-   **(BREAKING)** Updated `Spacer` Inline to default `horizontal` orientation, since that's the most common use-case
-   **(BREAKING)** Updated `Spacer` Inline to use "Inline Spacing" so it scales with parent font size
-   **(BREAKING)** Updated `Text` to automatically fill parent container width
-   **(BREAKING)** Updated `use-linkable` mixin to pull from `--typography-anchor-*` variables for consistent behavior
-   **(BREAKING)** Updated all viewport-sensitive `use-*` mixins to place viewport rules after non-viewport rules. Making non-viewport rules the default, with viewport rules overriding them when applicable

-   **(BREAKING)** Updated all size-based data attributes to base themselves on scale of `tiny, small, DEFAULT (non-selectable), large, huge`

    -   e.g. `<span class="badge" data-size="medium">` -> `<span class="badge" data-size="small">`

-   The following Theme Variables were added:

    -   `*-nano` / `*-massive` were added to any (size / spacing)-based variables ala `var(--font-size-heading-nano)`
        -   **NOTE**: These variables should not be exposed as options to the end-user of the framework, e.g. `<button data-size="massive">`, rather they are meant to provide a larger standard range for Theme-developers
    -   `var(--animations-pulse-box-shadow-start)` / `var(--animations-pulse-box-shadow-mid)` / `var(--animations-pulse-box-shadow-end)` — Self-explanatory, controls the `box-shadow` property for the different keyframes for the general "Pulse" animation

-   The following Framework Variables were added:

    -   `var(--typography-anchor-color)`
    -   `var(--typography-anchor-opacity-default)`
    -   `var(--typography-anchor-opacity-active)`
    -   `var(--typography-anchor-opacity-hover)`
    -   `var(--typography-anchor-transition)`

    -   `var(--typography-blockquote-background-opacity)`
    -   `var(--typography-blockquote-margin)`
    -   `var(--typography-blockquote-palette-*)`
    -   `var(--typography-blockquote-radius)`

    -   `var(--typography-identifier-background)`
    -   `var(--typography-identifier-color)`
    -   `var(--typography-identifier-radius)`
    -   `var(--typography-identifier-font-family)`
    -   `var(--typography-identifier-font-size)`
    -   `var(--typography-identifier-font-weight)`
    -   `var(--typography-identifier-selection-background)`
    -   `var(--typography-identifier-selection-color)`

    -   `var(--typography-pre-background)`
    -   `var(--typography-pre-font-family)`
    -   `var(--typography-pre-font-weight)`
    -   `var(--typography-pre-radius)`

    -   `var(--typography-paragraph-margin)`
    -   `var(--typography-small-font-size)`
    -   `var(--typography-strong-font-weight)`

    -   `var(--aside-size)` — The minimum size that an Aside Navigation should be if content is smaller

-   **(BREAKING)** The following Theme Variables were changed:

    -   `var(--palette-*-base)` -> `var(--palette-*-strong)` / `var(--palette-*-translucent)` -> `var(--palette-*-light)`
    -   `var(--font-size-text-*)` -> `var(--font-size-content-*)`
    -   `var(--font-weight-text-*)` -> `var(--font-weight-content-*)`
    -   `var(--radius-shape-*)` -> `var(--radius-*)`
    -   `var(--radius-text)` -> `var(--radius-content)`
    -   `var(--sizing-border)` / `var(--sizing-divider)` -> `var(--border-content)` / `var(--border-divider)`
    -   `var(--sizing-element-*)` -> `var(--sizing-content-*)`
    -   `var(--sizing-text-*)` -> `var(--sizing-inline-*)`
    -   `var(--spacing-text-*)` -> `var(--spacing-inline-*)`

-   **(BREAKING)** The following Framework Variables were changed:

    -   All palette derived variables were changed to be prefixed with `palette-*`, e.g. `var(--divider-accent)` -> `var(--divider-palette-accent)`
    -   `var(--badge-padding)` -> `var(--badge-padding-default)`
    -   `var(--badge-radius)` -> `var(--badge-radius-default)`
    -   `var(--button-padding)` -> `var(--button-padding-default)`
    -   `var(--button-radius)` -> `var(--button-radius-default)`
    -   `var(--lists-margin)` -> `var(--lists-margin-block)`
    -   `var(--lists-definition-margin)` -> `var(--lists-definition-margin-block)`
    -   `var(--tree-border-radius)` -> `var(--tree-item-radius)`

-   **(BREAKING)** The following Framework Variables were removed:

    -   `var(--aside-border-color)` — Merged with `var(--aside-border)`
    -   `var(--card-border-color)` — Merged with `var(--card-border)`
    -   `var(--tile-border-color)` — Merged with `var(--tile-border)`

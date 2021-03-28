# CHANGELOG

## v0.1.0 - UNRELEASED

-   Added package version header comments to CSS output
-   Added Dot (`<span class="dot" data-palette="PALETTE" />`) as a replacement for Badge circle shape
-   Added `data-stretch` modifier attribute that stretches self if parent supports

    -   **NOTE** Currently only supported via Stacks (`<div class="stack">`)

-   Updated file outputs to `dist/kahi-ui.framework.css` / `dist/themes/kahi-ui.theme.*.css`
-   Fixed Grid referencing `--mosaic-spacing` and not `--grid-spacing`
-   Moved to using SASS compiler CLI directly for building and minification
-   Moved to new JS-based Theme Variable generation
-   Moved to PostCSS 8.X

    -   **FUTURE:** A JS API will be available to query this information

-   Removed CSSNANO most of the operations were not really needed
-   Removed polyfills for:

    -   `postcss-custom-media` — Removed all legacy usage since the switch from CSS -> SASS
    -   `postcss-is-pseudo-class` — As-of Chrome 88 (Jan 2021) / Safari (Sep 2020) / Firefox 78 (June 2020), it is supported
    -   `postcss-selector-not` — As-of Chrome 88 (Jan 2021) / Firefox 84 (Dec 2020), it is supported
    -   `postcss-easings` — New Theme generator has it built-in

-   Updated Viewports in Framework to construct media queries via mixins
-   Updated Anchors `<a>` to have an `:active` state opacity setting
-   Updated all Headings / Dividers to use the "global heading" Theme Variable for font weight
-   Updated various selectors to use `:is` shorthand list where possible
-   Updated design of Form styles
-   Updated design of Divider styles
-   **(BREAKING)** Moved Badge circle shape into its own stylesheet

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

-   **(BREAKING)** Changed Scaling / Stepping based Theme Variables to no longer be calculated at runtime, and are instead calculated at compile-time
-   **(BREAKING)** Updated `use-linkable` mixin to pull from `--typography-anchor-*` variables for consistent behavior
-   **(BREAKING)** Renamed `use-linkable` -> `use-anchor` to better reflect change
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

-   **(BREAKING)** All Animations Keyframes that were handled by Themes are now moved into the Framework as Utilities instead
-   **(BREAKING)** Updated all size-based data attributes to base themselves on scale of `tiny, small, DEFAULT (non-selectable), large, huge`
    -   e.g. `<span class="badge" data-size="medium">` -> `<span class="badge" data-size="small">`

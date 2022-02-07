<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {click_outside} from "./click_outside";

    function on_click(event) {
        is_clicked = true;
    }

    function on_click_outside(event) {
        is_clicked = false;
    }

    let is_clicked = false;
</script>

<Meta title="Actions/click_outside" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <div
        class="box"
        data-palette={is_clicked ? "affirmative" : "negative"}
        data-padding="small"
        on:click={on_click}
        use:click_outside={{on_click_outside}}
    >
        {is_clicked ? "I was clicked inside!" : "I am currently not clicked..."}
    </div>
</Story>

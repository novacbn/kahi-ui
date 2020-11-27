<script>
    import {Stack} from "@kahi-ui/svelte";

    import * as Navigation from "../../components/navigation";
</script>

<style>
    .documentation-wrapper {
        flex-grow: 1;
        height: 100vh;

        overflow-x: hidden;
        overflow-y: auto;
    }
</style>

<Stack orientation="horizontal">
    <Navigation.Documentation />

    <div class="documentation-wrapper">
        <main class="container">
            <slot />
        </main>
    </div>
</Stack>

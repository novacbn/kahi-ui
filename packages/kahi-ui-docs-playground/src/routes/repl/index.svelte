<script context="module">
    import {browser} from "$app/env";

    import {get_workspace, has_workspace} from "../../client/workspaces";

    import {DEFAULT_WORKSPACE_ENTRY} from "../../shared/environment";

    export const load = browser
        ? async ({page}) => {
              const {query} = page;

              const identifier = query.get("workspace");
              if (!(await has_workspace(identifier))) {
                  return {
                      status: 404,
                      error: "WorkspaceNotFound",
                  };
              }

              const {filesystem, title} = await get_workspace(identifier);
              const text = await filesystem.read_file_text(DEFAULT_WORKSPACE_ENTRY);

              return {
                  props: {
                      identifier,
                      filesystem,
                      title,
                      value: text,
                  },
              };
          }
        : null;
</script>

<script>
    import {Stack} from "@kahi-ui/svelte";
    import {Heroes} from "@kahi-ui/docs-kit/shared";
    import {REPL_ROTATION, REPL_VIEWS, Split} from "svelte-pipeline-repl";

    import {WORKSPACE_DATA} from "../../shared/environment";

    import {set_recent_workspace} from "../../client/workspaces";

    import * as Shell from "../../components/shell";

    export let identifier = null;
    export let filesystem = null;
    export let value = "<b>Hello World</b>";
    export let title = "N/A";

    let error = null;
    let rotation = REPL_ROTATION.horizontal;
    let view = REPL_VIEWS.split;

    async function on_title_change(event) {
        const {value} = event.detail;

        if (filesystem) {
            const data = await filesystem.read_file_json(WORKSPACE_DATA);

            filesystem.write_file_json(WORKSPACE_DATA, {...data, title: value});
        }
    }

    function on_error(event) {
        const {message} = event.detail;

        error = message;
    }

    function on_evaluate(event) {
        error = null;
    }

    $: if (filesystem && identifier) set_recent_workspace(identifier);
    $: if (filesystem) filesystem.write_file_text(DEFAULT_WORKSPACE_ENTRY, value);
</script>

{#if browser}
    <Stack alignment-x="stretch" style="height:100%;">
        <Shell.Playground on:change={on_title_change} {error} {title} bind:rotation bind:view />
        <!-- TODO: `value` should be debounced for like 0.1s -->
        <Split on:error={on_error} on:evaluate={on_evaluate} {rotation} {view} bind:value />
    </Stack>
{:else}
    <Heroes.NotSupported />
{/if}

import {WORKSPACE_DATA, WORKSPACE_DIRECTORY, WORKSPACE_RECENT} from "./constants";
import {generate_id} from "./random";
import {get_filesystem} from "./storage";

export async function create_workspace(workspace = {}) {
    const {title = "Untitled Workspace"} = workspace;
    const filesystem = get_filesystem();

    let identifier, path;
    while (true) {
        identifier = generate_id();
        path = `${WORKSPACE_DIRECTORY}.${identifier}`;

        if (await filesystem.exists(path)) continue;

        await filesystem.create_directory(path);
        break;
    }

    const scoped_filesystem = filesystem.create_scope(path);

    await scoped_filesystem.write_file_json(WORKSPACE_DATA, {title});
    return {identifier, path, filesystem: scoped_filesystem};
}

export async function create_workspace_from_sample(sample = {}) {
    const {script = "", title = "Untitled Sample"} = sample;
    const {identifier, path, filesystem} = await create_workspace({title});

    await filesystem.write_file_text("Application.svelte", script);

    return {identifier, filesystem, path};
}

export async function get_workspace(identifier) {
    const filesystem = get_filesystem();
    const path = `${WORKSPACE_DIRECTORY}.${identifier}`;

    if (!(await filesystem.exists(path))) {
        throw new Error(`bad argument #0 to 'get_workspace' (workspace '${identifier}' not found)`);
    }

    const scoped_filesystem = filesystem.create_scope(path);
    const {title = "Untitled Workspace"} = await scoped_filesystem.read_file_json(WORKSPACE_DATA);

    return {identifier, path, title, filesystem: scoped_filesystem};
}

export async function get_recent_workspace() {
    const filesystem = get_filesystem();

    if (!(await filesystem.exists(WORKSPACE_RECENT))) return null;
    return filesystem.read_file_text(WORKSPACE_RECENT);
}

export function has_workspace(identifier) {
    const filesystem = get_filesystem();
    const path = `${WORKSPACE_DIRECTORY}.${identifier}`;

    return filesystem.exists(path);
}

export async function list_workspaces() {
    const filesystem = get_filesystem();

    let entries = await filesystem.read_directory({
        is_directory: true,
        glob: `${WORKSPACE_DIRECTORY}.*`,
    });

    entries = entries.map(async (entry, index) => {
        const {path} = entry;
        const identifier = path.slice(WORKSPACE_DIRECTORY.length + 2);
        const {title = "Untitled Workspace"} = await get_workspace(identifier);

        return {identifier, path, title};
    });

    return Promise.all(entries);
}

export async function remove_workspace(identifier) {
    const filesystem = get_filesystem();
    const path = `${WORKSPACE_DIRECTORY}.${identifier}`;

    if (!(await filesystem.exists(path))) {
        throw new Error(
            `bad argument #0 to 'remove_workspace' (workspace '${identifier}' not found)`
        );
    }

    await filesystem.remove_directory(path, {
        recursive: true,
    });

    const recent = await get_recent_workspace();
    if (recent) {
        const workspaces = await list_workspaces();
        await set_recent_workspace(workspaces[0].identifier);
    }
}

export async function set_recent_workspace(identifier) {
    const filesystem = get_filesystem();
    const path = `${WORKSPACE_DIRECTORY}.${identifier}`;

    if (!(await filesystem.exists(path))) {
        throw new Error(
            `bad argument #0 to 'set_recent_workspace' (workspace '${identifier}' not found)`
        );
    }

    return filesystem.write_file_text(WORKSPACE_RECENT, identifier);
}

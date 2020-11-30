import {WORKSPACE_DIRECTORY, WORKSPACE_RECENT} from "./constants";
import {generate_id} from "./random";
import {get_filesystem} from "./storage";

// TODO: Update `uristorage` to allow creation of `FileSystemOverlay` instances of specific paths

export async function create_workspace() {
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
    return {identifier, path, filesystem: scoped_filesystem};
}

export async function get_workspace(identifier) {
    const filesystem = get_filesystem();
    const path = `${WORKSPACE_DIRECTORY}.${identifier}`;

    if (!(await filesystem.exists(path))) {
        throw new Error(`bad argument #0 to 'get_workspace' (workspace '${identifier}' not found)`);
    }

    const scoped_filesystem = filesystem.create_scope(path);
    return {identifier, path, filesystem: scoped_filesystem};
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

    const entries = await filesystem.read_directory({
        is_directory: true,
        glob: `${WORKSPACE_DIRECTORY}.*`,
    });

    return entries.map((entry, index) => {
        const {path} = entry;

        return {
            identifier: path.slice(WORKSPACE_DIRECTORY.length + 2),
        };
    });
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

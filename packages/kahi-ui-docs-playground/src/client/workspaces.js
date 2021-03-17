import {generate_id, substitute_value} from "@kahi-ui/docs-kit/shared";

import {
    DEFAULT_WORKSPACE_ENTRY,
    DEFAULT_WORKSPACE_TITLE,
    WORKSPACE_DATA,
    WORKSPACE_DIRECTORY,
    WORKSPACE_RECENT,
} from "../shared/environment";

import {get_filesystem} from "./storage";

async function generate_random_path(filesystem, format) {
    while (true) {
        const identifier = generate_id();
        const path = substitute_value(format, identifier);

        if (!(await filesystem.exists(path))) return {identifier, path};
    }
}

export async function create_workspace(script, title = DEFAULT_WORKSPACE_TITLE) {
    const filesystem = get_filesystem();

    const {identifier, path} = await generate_random_path(filesystem, `${WORKSPACE_DIRECTORY}.%s`);
    await filesystem.create_directory(path);

    const scoped_filesystem = filesystem.create_scope(path);

    await Promise.all([
        scoped_filesystem.write_file_json(WORKSPACE_DATA, {title}),
        scoped_filesystem.write_file_text(DEFAULT_WORKSPACE_ENTRY, script),
    ]);

    return {identifier, path, filesystem: scoped_filesystem};
}

export async function get_workspace(identifier) {
    const filesystem = get_filesystem();
    const path = `${WORKSPACE_DIRECTORY}.${identifier}`;

    if (!(await filesystem.exists(path))) {
        throw new Error(`bad argument #0 to 'get_workspace' (workspace '${identifier}' not found)`);
    }

    const scoped_filesystem = filesystem.create_scope(path);
    const {title = DEFAULT_WORKSPACE_TITLE} = await scoped_filesystem.read_file_json(
        WORKSPACE_DATA
    );

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

    const entries = await filesystem.read_directory({
        is_directory: true,
        glob: `${WORKSPACE_DIRECTORY}.*`,
    });

    const workspaces = entries.map(async (entry, index) => {
        const {path} = entry;
        const identifier = path.slice(WORKSPACE_DIRECTORY.length + 2);
        const {title = DEFAULT_WORKSPACE_TITLE} = await get_workspace(identifier);

        return {identifier, path, title};
    });

    return Promise.all(workspaces);
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

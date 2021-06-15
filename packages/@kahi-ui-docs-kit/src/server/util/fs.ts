import * as fs from "fs";

// HACK: Couldn't import `constants` from the module...

const {constants, promises} = fs;
const {access} = promises;

export async function can_access(path: string, mode = constants.F_OK): Promise<boolean> {
    try {
        await access(path, mode);
        return true;
    } catch (err) {
        return false;
    }
}

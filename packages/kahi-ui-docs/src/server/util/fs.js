import {constants, promises} from "fs";
const {access} = promises;

export async function can_access(path, mode = constants.F_OK) {
    try {
        await access(path, mode);
        return true;
    } catch (err) {
        return false;
    }
}

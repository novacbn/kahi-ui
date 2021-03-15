export function is_url(text) {
    try {
        new URL(text);
        return true;
    } catch (err) {
        return false;
    }
}

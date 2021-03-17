export function escape_html(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function unescape_html(text) {
    return text.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

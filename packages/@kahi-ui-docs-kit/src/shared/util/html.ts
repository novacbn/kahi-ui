export function escape_html(text: string): string {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function unescape_html(text: string): string {
    return text.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

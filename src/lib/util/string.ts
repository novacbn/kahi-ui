const EXPRESSION_TOKEN = /\${([\w\._]+)}/g;

export function format_tokens(input: string, tokens: Record<string, any>): string {
    return input.replace(EXPRESSION_TOKEN, (match, token) => {
        const value = tokens[token];
        if (typeof value === "undefined") return token;

        return value.toString();
    });
}

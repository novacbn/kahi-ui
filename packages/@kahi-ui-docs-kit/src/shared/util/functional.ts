export function memoize<T>(func: () => T): () => T {
    let cache: T;

    return () => {
        if (!cache) cache = func();
        return cache;
    };
}

export function noop(...args: any[]): void {}

export function chunk<T>(array: T[], length: number): T[][] {
    return array.reduce<T[][]>((accum, date, index) => {
        const chunk_index = Math.floor(index / length);
        if (!accum[chunk_index]) accum[chunk_index] = [];

        accum[chunk_index].push(date);
        return accum;
    }, []);
}

export function debounce<F extends (...args: any[]) => void | Promise<void>>(
    func: F,
    duration: number = 0
): (...args: Parameters<F>) => void | Promise<void> {
    let identifier: number | undefined;

    return (...args: any[]) => {
        if (identifier !== undefined) {
            clearTimeout(identifier);
            identifier = undefined;
        }

        // @ts-ignore - HACK: NodeJS doesn't follow spec
        identifier = setTimeout(() => func(...args), duration);
    };
}

export function defaultopt<T extends object>(value: T, default_value: T): T {
    for (const key in value) {
        if (typeof value[key] !== "undefined") return value;
    }

    return default_value;
}

export function fill<T>(generator: (index: number) => T, length: number): T[] {
    return new Array(length).fill(null).map((_, index) => generator(index));
}

export function pick<T>(
    map: Map<string, T>,
    keys: string[] | IterableIterator<string> | Set<string>
): Map<string, T> {
    const lookup = new Set(keys);
    const entries = Array.from(map.entries()).filter(([key, value], index) => lookup.has(key));

    return new Map(entries);
}

export function range(minimum: number, maximum: number): number[] {
    return new Array(maximum - minimum).fill(null).map((_, index) => minimum + index);
}

export function throttle<F extends (...args: any[]) => void | Promise<void>>(
    func: F,
    duration: number = 0
): (...args: Parameters<F>) => void | Promise<void> {
    let previous_call = Number.MIN_SAFE_INTEGER;

    return (...args: any[]) => {
        const current_call = Date.now();
        if (current_call - previous_call >= duration) {
            func(...args);
            previous_call = current_call;
        }
    };
}

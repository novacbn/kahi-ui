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

export function fill<T>(generator: (index: number) => T, length: number): T[] {
    return new Array(length).fill(null).map((_, index) => generator(index));
}

export function throttle<F extends (...args: any[]) => void | Promise<void>>(
    func: F,
    duration: number = 0
): (...args: Parameters<F>) => void | Promise<void> {
    let identifier: number | undefined;

    return (...args: any[]) => {
        if (identifier === undefined) {
            func(...args);

            // @ts-ignore - HACK: NodeJS doesn't follow spec
            identifier = setTimeout(() => (identifier = undefined), duration);
        }
    };
}

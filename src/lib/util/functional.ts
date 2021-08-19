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

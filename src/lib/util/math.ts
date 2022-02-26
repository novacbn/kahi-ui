export function clamp(value: number, minimum: number, maximum: number): number {
    return Math.min(Math.max(value, minimum), maximum);
}

export function wrap(value: number, min: number, max: number): number {
    return Math.max(min, value % (max + 1));
}

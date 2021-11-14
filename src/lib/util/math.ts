export function wrap(value: number, min: number, max: number): number {
    return Math.max(min, value % (max + 1));
}

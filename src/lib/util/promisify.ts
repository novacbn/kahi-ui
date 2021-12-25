export function animation_frame(): Promise<void> {
    return new Promise((resolve, reject) => {
        requestAnimationFrame(() => resolve());
    });
}

export function delay(duration: number = 0): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), duration);
    });
}

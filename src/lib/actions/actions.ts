/**
 * Represents the handle object returned by Svelte Actions
 */
export interface IActionHandle<T = any> {
    /**
     * Destroys all bindings the Action was using
     */
    destroy: () => void;

    /**
     * Replaces the options that was initially passed to the Action
     */
    update: (options: T) => void;
}

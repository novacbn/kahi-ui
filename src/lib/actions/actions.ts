/**
 * Represents the handle of an initialized Svelte Action
 */
export interface IActionHandle<T = any> {
    /**
     * Destroys all bindings the Action was using
     */
    destroy?: () => void;

    /**
     * Replaces the options that was initially passed to the Action
     */
    update?: (options: T) => void;
}

/**
 * Represents the constructor of a Svelte Action
 */
export type IAction<T = any> = (element: HTMLElement, options: T) => IActionHandle<T> | void;

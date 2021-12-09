import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[forward_actions]]
 */
export type IForwardActionsAction = IAction<
    Document | HTMLElement,
    IForwardActionsOptions,
    IForwardActionsHandle
>;

/**
 * Represents the Svelte Action handle returned by [[forward_actions]]
 */
export type IForwardActionsHandle = Required<IActionHandle<IForwardActionsOptions>>;

/**
 * Represents an array of forwarded Svelte Actions, optionally
 * associated with their options
 */
export type IForwardedActions = (IAction | [IAction, any])[];

/**
 * Represents an array forwarded Svelte Action handles
 */
type IInitializedActions = IActionHandle[];

/**
 * Represents the options passable to the [[forward_actions]] Svelte Action
 */
export interface IForwardActionsOptions {
    /**
     * Represents Svelte Actions that will be attached to the targeted element
     */
    actions: IForwardedActions;
}

/**
 * Attaches the provided array of Svelte Actions to the target element, handling
 * lifecycle events automatically
 *
 * @param element
 * @param options
 * @returns
 */
export function forward_actions(
    element: HTMLElement,
    options: Partial<IForwardActionsOptions> = {}
): IForwardActionsHandle {
    const handles = initialize_actions(options.actions);

    function initialize_actions(actions: IForwardedActions = []): IInitializedActions {
        return actions.map((entry, index) => {
            if (Array.isArray(entry)) return entry[0](element, entry[1]);
            else return entry(element, undefined);
        });
    }

    return {
        destroy() {
            for (const handle of handles) {
                if (handle) {
                    const {destroy} = handle;
                    if (destroy) destroy();
                }
            }
        },

        update(options: Partial<IForwardActionsOptions> = {}) {
            const {actions = []} = options;
            if (actions.length !== handles.length) {
                throw new ReferenceError(
                    `bad argument #0 to 'forward_actions.update' (supplied actions must never change lengths)`
                );
            }

            for (const index in actions) {
                const entry = actions[index];
                const options = Array.isArray(entry) ? entry[1] : undefined;

                const handle = handles[index];
                if (handle) {
                    const {update} = handle;
                    if (update) update(options);
                }
            }
        },
    };
}

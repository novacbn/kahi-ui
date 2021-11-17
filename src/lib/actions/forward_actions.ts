import type {IAction, IActionHandle} from "./actions";

export type IForwardActionsHandle = IActionHandle<IForwardActionsOptions>;

export type IForwardedActions = (IAction | [IAction, any])[];

type IInitializedActions = (IActionHandle | void)[];

export interface IForwardActionsOptions {
    actions: IForwardedActions;
}

export function forward_actions(
    element: HTMLElement,
    options: Partial<IForwardActionsOptions> = {}
): IForwardActionsHandle {
    const handles = initialize_actions(options.actions);

    console.log({handles});

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

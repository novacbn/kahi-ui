export interface IHTML5Events {
    click: MouseEvent;
    contextmenu: MouseEvent;
    dblclick: MouseEvent;
    focusin: FocusEvent;
    focusout: FocusEvent;
    keydown: KeyboardEvent;
    keyup: KeyboardEvent;
    pointercancel: PointerEvent;
    pointerdown: PointerEvent;
    pointerenter: PointerEvent;
    pointerleave: PointerEvent;
    pointermove: PointerEvent;
    pointerout: PointerEvent;
    pointerup: PointerEvent;
}

export interface IHTML5Properties {
    class?: string;
    id?: string;
    name?: string;
    style?: string;
    tabindex?: number | string;
    title?: string;
}

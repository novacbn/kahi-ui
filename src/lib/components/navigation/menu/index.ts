export {default as Container} from "./MenuContainer.svelte";

export {default as Anchor} from "./MenuAnchor.svelte";
export {default as Button} from "./MenuButton.svelte";
export {default as Divider} from "./MenuDivider.svelte";
export {default as Heading} from "./MenuHeading.svelte";
export {default as Item} from "./MenuItem.svelte";
export {default as Label} from "./MenuLabel.svelte";

import _SubMenu from "./MenuSubMenu.svelte";

/**
 * @deprecated Use `<Menu.Section>` instead.
 */
export const SubMenu = _SubMenu;

export const Section = _SubMenu;

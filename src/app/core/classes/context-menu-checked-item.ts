import { ContextMenuItemType } from "../enums/context-menu-item-type";
import { ContextMenuItem } from "./context-menu-item";

export class ContextMenuCheckedItem extends ContextMenuItem {
    constructor(name: string, key: string, checked: boolean = false) {
        super(ContextMenuItemType.Checkbox, name, key);
        this.data = checked;
    }
}
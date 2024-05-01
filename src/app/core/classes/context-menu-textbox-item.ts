import { ContextMenuItemType } from "../enums/context-menu-item-type";
import { ContextMenuItem } from "./context-menu-item";

export class ContextMenuTextboxItem extends ContextMenuItem {
    constructor(key: string, image?: string) {
        super(ContextMenuItemType.Text, '', key, image);
    }
}
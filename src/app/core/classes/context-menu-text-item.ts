import { ContextMenuItemType } from "../enums/context-menu-item-type";
import { ContextMenuItem } from "./context-menu-item";

export class ContextMenuTextItem extends ContextMenuItem {
    constructor(name: string, key: string, image?: string) {
        super(ContextMenuItemType.Text, name, key, image);
    }
}
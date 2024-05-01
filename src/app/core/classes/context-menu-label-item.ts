import { ContextMenuItemType } from "../enums/context-menu-item-type";
import { ContextMenuItem } from "./context-menu-item";

export class ContextMenuLabelItem extends ContextMenuItem {
    constructor(name: string, image?: string) {
        super(ContextMenuItemType.Text, name, '', image);
    }
}
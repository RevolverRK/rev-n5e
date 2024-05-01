import { StatusType } from "../enums/status-type";

export {
    ContextMenuItemType,
    ContextMenuResponse,
    ContextMenuItem,
    ContextMenuTextItem,
    ContextMenuLabelItem,
    ContextMenuFolderItem,
    ContextMenuHeaderItem,
    ContextMenuCheckedItem,
    ContextMenuTextboxItem,
    ContextMenuSeperator
}

enum ContextMenuItemType {
    Seperator = 0,
    Text = 1,
    Label = 2,
    Textbox = 3,
    Checkbox = 4,
    Header = 5,
    Folder = 6
}

class ContextMenuItem {
    type: ContextMenuItemType;
    name: string;
    key: string;
    data: any;
    image?: string;
    status?: StatusType;
    submenu: Array<ContextMenuItem> = [];
    constructor(type: ContextMenuItemType, name: string, key: string, image?: string) {
        this.type = type;
        this.name = name;
        this.key = key;
        this.image = image;
    }

    /**
     * Returns `true` if a image resource is defined for this item
     * @returns {boolean}
     */
    hasImage(): boolean {
        return !!this.image;
    }
    hasSubmenu(): boolean {
        return this.submenu.length > 0;
    }
}

class ContextMenuTextItem extends ContextMenuItem {
    constructor(name: string, key: string, image?: string) {
        super(ContextMenuItemType.Text, name, key, image);
    }
}

class ContextMenuLabelItem extends ContextMenuItem {
    constructor(name: string, image?: string) {
        super(ContextMenuItemType.Label, name, '', image);
    }
}

class ContextMenuHeaderItem extends ContextMenuItem {
    constructor(name: string) {
        super(ContextMenuItemType.Header, name, '');
    }
}

/**
 * @deprecated
 */
class ContextMenuFolderItem extends ContextMenuItem {
    constructor(name: string, submenu: Array<ContextMenuItem>, image?: string) {
        super(ContextMenuItemType.Folder, name, '', image);
        this.submenu = submenu;
    }
}

class ContextMenuCheckedItem extends ContextMenuItem {
    constructor(name: string, key: string, checked: boolean = false) {
        super(ContextMenuItemType.Checkbox, name, key);
        this.data = checked;
    }
}

class ContextMenuTextboxItem extends ContextMenuItem {
    constructor(key: string, image?: string) {
        super(ContextMenuItemType.Textbox, '', key, image);
    }
}

class ContextMenuSeperator extends ContextMenuItem {
    constructor() {
        super(ContextMenuItemType.Seperator, '', '');
    }
}

class ContextMenuResponse {
    key: String;
    context?: String;
    constructor(key: String, context?: String) {
        this.key = key;
        this.context = context;
    }
}
import { Component } from "@angular/core";
import { BaseComponent } from "./base-component";

@Component({
    template: ''
})

export abstract class PageComponent extends BaseComponent {
    /**
     * Used to memorize the current Subview Index.
     * Subview Index 0 or below 0 will always be no Subview.
     */
    subviewIndex: number = 0;

    constructor() {
        super();
    }

    openSubview(index: number) {
        this.subviewIndex = index;
    }
    
    closeSubview() {
        this.subviewIndex = 0;
    }
}
import { Component, EventEmitter, Output, Input, input } from '@angular/core';
import { BaseComponent } from '../../classes/base-component';
import { CommonModule, NgIf } from '@angular/common';
import { ContextMenuItem, ContextMenuItemType, ContextMenuResponse } from '../../classes/context-menu-item';

@Component({
  selector: 'n5e-context-menu-box',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './context-menu-box.component.html',
  styleUrl: './context-menu-box.component.scss'
})
export class ContextMenuBoxComponent extends BaseComponent {
  /**
   * Returns the selected value's key
   */
  @Output() ValueSelectedEvent = new EventEmitter<ContextMenuResponse>();

  /**
   * If true the passed content will have a width and height of 100%. Otherwise it will be the default auto value.
   */
  _fill: boolean = false;
  @Input() set fill(i: string) {
    if(i.toLowerCase() !== 'false') {
      this._fill = true;
    }
  }

  /**
   * If true, the Context Menu opens on a left click instead of a right click
   */
  _onLeftClick = false;
  @Input() set onLeftClick(i: string) {
    if(i.toLowerCase() !== 'false') {
      this._onLeftClick = true;
    }
  }

  @Input() style: ('rev-c') = 'rev-c';

  @Input() items: Array<ContextMenuItem> = [];

  menu: boolean = false;
  x: number = 0;
  y: number = 0;

  public readonly MenuType = ContextMenuItemType;

  constructor() {
    super();
  }

  openMenuR(event: MouseEvent) {
    if(this._onLeftClick) { return; }
    this.openMenu(event);
  }

  openMenuL(event: MouseEvent) {
    if(!this._onLeftClick) { return; }
    this.openMenu(event);
  }

  openMenu(event: MouseEvent) {
    event.preventDefault();
    if(this.items.length <= 0) { return; }
    this.y = event.clientY;
    this.x = event.clientX;
    this.menu = true;
  }

  closeMenu() {
    this.menu = false;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  selectValue(item: ContextMenuItem, context?: String): void {
    if([this.MenuType.Seperator, this.MenuType.Textbox, this.MenuType.Header, this.MenuType.Label, this.MenuType.Folder].includes(item.type)) { return; }
    this.selectValueEventResponse(item, context);
  }

  boxEnterDown(item: ContextMenuItem, context: string) {
    if(!!context) {
      this.selectValueEventResponse(item, context);
    }
  }
  selectValueEventResponse(item: ContextMenuItem, context?: String): void {
    this.ValueSelectedEvent.emit(new ContextMenuResponse(item.key, context));
    this.closeMenu();
  }
}

import { Component } from '@angular/core';
import { BaseComponent } from '../../classes/base-component';
import { CommonModule } from '@angular/common';
import { NavigationBarOptionComponent } from '../navigation-bar-option/navigation-bar-option.component';
import { SubviewBaseComponent } from '../../classes/subview-base/subview-base.component';
import { ContextMenuBoxComponent } from '../context-menu-box/context-menu-box.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import {
  ContextMenuItem,
  ContextMenuCheckedItem,
  ContextMenuLabelItem,
  ContextMenuSeperator,
  ContextMenuTextItem,
  ContextMenuTextboxItem,
  ContextMenuHeaderItem
} from '../../classes/context-menu-item';

@Component({
  selector: 'rev-navigation-bar',
  standalone: true,
  imports: [CommonModule, NavigationBarOptionComponent, SubviewBaseComponent, ContextMenuBoxComponent, SpinnerComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent extends BaseComponent {
  items: Array<ContextMenuItem> = [
    new ContextMenuHeaderItem('Header X'),
    new ContextMenuTextItem('Text X', 'sm1'),
    new ContextMenuLabelItem('Label X'),
    new ContextMenuSeperator(),
    new ContextMenuCheckedItem('sample', 'sample', true),
    new ContextMenuTextboxItem('tb1'),
    new ContextMenuTextboxItem('tb2')
  ]

  constructor() {
    super();
  }
}

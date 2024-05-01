import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../classes/base-component';

@Component({
  selector: 'rev-navigation-bar-option',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar-option.component.html',
  styleUrl: './navigation-bar-option.component.scss'
})
export class NavigationBarOptionComponent extends BaseComponent {
  @Output() ClickEvent = new EventEmitter<void>;
  @Input() title?: string;

  constructor() {
    super();
  }

  run(): void {
    this.ClickEvent.emit();
  }
}

import { Component } from '@angular/core';
import { SubviewBaseComponent } from '../../classes/subview-base/subview-base.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rev-subview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subview.component.html',
  styleUrl: './subview.component.css'
})
export class SubviewComponent extends SubviewBaseComponent {
  constructor() {
    super();
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../classes/base-component';

@Component({
  selector: 'rev-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent extends BaseComponent implements OnInit {

  /**
   * A toggleable that makes the Spinner inbox. Only works if the parent component is of position `relative`
   */
  _inbox: boolean = false;
  @Input() set inbox(i: string) {
    if(i.toLowerCase() !== 'false') {
      this._inbox = true;
    }
  }

  constructor() {
    super();
  }
}

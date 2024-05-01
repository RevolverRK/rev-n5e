import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BaseComponent } from "../base-component";
import { ExtraLargeScreen, LargeScreen, MediumScreen, SmallScreen, TinyScreen } from "../../variables/screen-width"
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { CommonModule } from "@angular/common";
import { ScreenWidthType } from "../../enums/screen-width-type";

@Component({
  selector: 'rev-subview-base',
  standalone: true,
  imports: [SpinnerComponent, CommonModule],
  templateUrl: './subview-base.component.html',
  styleUrl: './subview-base.component.css'
})
export class SubviewBaseComponent extends BaseComponent {
  _width: number = LargeScreen;
  @Input() set width(w: ScreenWidthType) {
    switch(w) {
      default: case ScreenWidthType.LargeScreen: this._width = LargeScreen; break;
      case ScreenWidthType.ExtraLargeScreen: this._width = ExtraLargeScreen; break;
      case ScreenWidthType.MediumScreen: this._width = MediumScreen; break;
      case ScreenWidthType.SmallScreen: this._width = SmallScreen; break;
      case ScreenWidthType.TinyScreen: this._width = TinyScreen; break;
    }
  }
  
  /**
   * Toogleable Value.
   * Doesn't need an input, including it in the HTML is good enough.
   * Idle Termination still relies on the {@link ExitSubviewEvent} so activating it without a Exit Event does nothing.
   */
  _closesOnOutsideClicked: boolean = false;
  @Input() set closesOnOutsideClicked(i: string) {
    if(i.toLowerCase() !== 'false') {
      this._closesOnOutsideClicked = true;
    }
  }

  /**
   * This Event should always be used as it is the way to exit the component!
   */
  @Output() ExitSubviewEvent = new EventEmitter<string>();

  isLoading: boolean = false;

  constructor() {
      super();
  }

  //#region Angular Lifecycle
  override onInit(): void {
    this.isLoading = true;
  }

  override afterViewChecked(): void {
    this.isLoading = false;
  }
  //#endregion

  exitSubview(reason?: string) {
    this.ExitSubviewEvent.emit(reason);
  }

  idleTerminate(): void {
    if(this._closesOnOutsideClicked) { this.exitSubview(); }
  }
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './core/classes/page-component';
import { NavigationBarComponent } from './core/components/navigation/navigation-bar/navigation-bar.component';
import { SpinnerComponent } from './core/components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigationBarComponent,SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends PageComponent {
  title = 'test';
}

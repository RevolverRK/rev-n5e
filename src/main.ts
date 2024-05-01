import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,
    {providers: [provideProtractorTestingSupport(),provideHttpClient(withJsonpSupport())]})
  .catch(err => console.error(err));

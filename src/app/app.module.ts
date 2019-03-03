import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import cssVars from 'css-vars-ponyfill';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

cssVars({
  onlyVars: true,
  onlyLegacy: false
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

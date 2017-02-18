import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { routing, APP_ROUTES_MODULE_PROVIDER } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    APP_ROUTES_MODULE_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

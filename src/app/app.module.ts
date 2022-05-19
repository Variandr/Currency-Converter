import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ApiComponent} from './api/api.component';
import {ShareService} from './share.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ShareService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApiComponent } from './api/api.component';
import { CurrencyService } from './services/currencyService';
import { ConverterPageComponent } from './converter-page/converter-page.component';
import { ConverterComponent } from './converter-page/converter/converter.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ConverterPageComponent,
        ConverterComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
    ],
    providers: [CurrencyService, ApiComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}

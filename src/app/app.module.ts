import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';

import { NFC, Ndef } from "@awesome-cordova-plugins/nfc/ngx";
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [NFC,
    Ndef],
  bootstrap: [AppComponent]
})
export class AppModule { }

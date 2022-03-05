import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';

import { NFC, Ndef } from "@awesome-cordova-plugins/nfc/ngx";
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NFC,
    Ndef],
  bootstrap: [AppComponent]
})
export class AppModule { }

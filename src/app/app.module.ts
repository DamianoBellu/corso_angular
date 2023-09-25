import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { CalciatoriComponent } from './calciatori/calciatori.component';



@NgModule({
  declarations: [
    AppComponent,
    CalciatoriComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

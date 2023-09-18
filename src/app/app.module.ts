import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalciatoriComponent } from './calciatori/calciatori.component';
import { ProdottiComponent } from './prodotti/prodotti.component';

@NgModule({
  declarations: [
    AppComponent,
    CalciatoriComponent,
    ProdottiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoradorComponent } from './components/morador/morador.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './components/principal/principal.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { VisitanteComponent } from './components/visitante/visitante.component';

@NgModule({
  declarations: [
    AppComponent,
    MoradorComponent,
    PrincipalComponent,
    VisitanteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContdorModulo } from './contador/contador.module';
import { AlumnosModulo } from './alumno/componentes/AlumnosModulo';


@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // AlumnoComponent,
    // ListaComponent
  ],
  imports: [
    BrowserModule,
    ContdorModulo,
    AlumnosModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

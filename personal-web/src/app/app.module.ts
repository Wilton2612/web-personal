import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
      ContactoComponent,
      ResumenComponent,
      ProyectoComponent,
      AboutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

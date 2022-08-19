import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProgramasComponent } from './programas/programas.component';
import { DetallesClienteComponent } from './detalles-cliente/detalles-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProgramasComponent,
    DetallesClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

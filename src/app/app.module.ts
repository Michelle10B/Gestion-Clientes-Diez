import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProgramasComponent } from './programas/programas.component';
import { DetallesClienteComponent } from './detalles-cliente/detalles-cliente.component';
import { BuscarComponent } from './buscar/buscar.component';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProgramasComponent,
    DetallesClienteComponent,
    BuscarComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProgramasComponent } from './programas/programas.component';
import { DetallesClienteComponent } from './detalles-cliente/detalles-cliente.component';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
//Service
import { BuscarPipe } from './pipes/buscar.pipe';
import { GestionService } from './gestion.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgramasComponent,
    DetallesClienteComponent,
    ClientesComponent,
    BuscarPipe,
  ],
  imports: [BrowserModule, FormsModule, Ng2SearchPipeModule, AppRoutingModule],
  providers: [GestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}

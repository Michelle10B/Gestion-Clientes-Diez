import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DetallesClienteComponent } from './detalles-cliente/detalles-cliente.component';


const routes: Routes = [
  {path: 'clientes', component:ClientesComponent},
  {path: 'detalles/:id', component: DetallesClienteComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

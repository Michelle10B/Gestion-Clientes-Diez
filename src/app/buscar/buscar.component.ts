import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/interfaces/cliente.interface';
import { CLIENTES } from '../mock-clientes';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {

  nombre: string = '';


  clientes = CLIENTES;
  constructor() { }



  buscarCliente():string {
    for (var i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].nom === this.nombre) {
        console.log("conincide");
        return this.nombre;
      }
    }
    return "No existe";
  }






}

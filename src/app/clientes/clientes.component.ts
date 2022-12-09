import { Component, OnInit } from '@angular/core';
import { Cliente } from './interfaces/cliente.interface';
import { CLIENTES } from '../mock-clientes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes = CLIENTES;

  constructor(
    public router: Router
  ) { }

  selectedCliente?: Cliente;

  ngOnInit(): void {
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

  routingDetallesCliente(id: number){
    // routerLink="/detalles/{{cliente.id}}"
    // console.log(id);
    this.router.navigateByUrl("/detalles/" + id);

  }

}

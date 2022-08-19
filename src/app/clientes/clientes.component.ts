import { Component, OnInit } from '@angular/core';
import { Cliente } from './interfaces/cliente.interface';
import { CLIENTES } from '../mock-clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes = CLIENTES;

  selectedCliente?: Cliente;

  constructor() { }


  ngOnInit(): void {
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

}

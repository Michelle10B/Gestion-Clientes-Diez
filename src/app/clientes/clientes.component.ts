import { Component, OnInit } from '@angular/core';
import { Cliente } from './interfaces/cliente.interface';
import { CLIENTES } from '../mock-clientes';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes = CLIENTES;
  filterCliente="";

  constructor(
    public router: Router,
    public servicio:GestionService
  ) { }

  selectedCliente?: Cliente;

  ngOnInit(): void {

  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }


}

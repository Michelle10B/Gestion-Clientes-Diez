import { Component, Input, OnInit } from '@angular/core';
import {Cliente} from '../clientes/interfaces/cliente.interface'


@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.scss']
})
export class DetallesClienteComponent implements OnInit {


@Input() cliente?:Cliente;


  constructor() { }

  ngOnInit(): void {
  }

}

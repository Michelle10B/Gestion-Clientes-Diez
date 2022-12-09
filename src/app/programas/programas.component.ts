import { Component, Input, OnInit } from '@angular/core';
import { Programa } from './interfaces/programa.interface';
import { PROGRAMAS } from '../mock-programas';
import { Cliente } from '../clientes/interfaces/cliente.interface';
import { CLIENTES } from '../mock-clientes';


@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss']
})
export class ProgramasComponent implements OnInit {

  programas = PROGRAMAS;

  clientes = CLIENTES;

  @Input() programa?: Programa;

  @Input() cliente?: Cliente;



  constructor() { }

  ngOnInit(): void {
  }


}

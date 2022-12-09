import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Cliente } from '../clientes/interfaces/cliente.interface';

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.scss'],
})
export class DetallesClienteComponent implements OnInit, AfterViewInit {
  idCliente: any = null;

  @Input() cliente?: Cliente;

  prueba() {
    console.log('sdsa');
  }

  constructor(public route: ActivatedRoute) {
    console.log('a');
  }

  ngOnInit(): void {
    this.idCliente = this.route.snapshot.paramMap.get('id');
    console.log(this.idCliente);

    this.route.queryParamMap.subscribe(
      (params) => {
        console.log(params);
        this.idCliente = params.get('id');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit(): void {
    console.log('eee');

    this.route.queryParamMap.subscribe(
      (params) => {
        console.log(params);
        this.idCliente = params.get('id');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

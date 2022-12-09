import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar',
})
export class BuscarPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    var resultadoClientes = [];
    for (var cliente of value) {
      if (cliente.nom.indexOf(arg) > -1) {
        resultadoClientes.push(cliente);
      }
    }

    return resultadoClientes;
  }
}

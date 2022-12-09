import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor() { }
  mensaje:string[]=[];

  add(mensaje:string){
    this.mensaje.push(mensaje);
  }
}
